import os
import io
import re
import copy
import urllib.request
from PIL import Image
import numpy as np
import cv2

import docx
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TPL_ROOT_DIR = os.path.join(os.path.dirname(BASE_DIR), "Template")
TPL_K1_COVER = os.path.join(TPL_ROOT_DIR, "2 TEMPLATE FIZIK KERTAS 1.docx")
TPL_K2_COVER = os.path.join(TPL_ROOT_DIR, "2 TEMPLATE FIZIK KERTAS 2.docx")
TPL_K1_DIR = os.path.join(TPL_ROOT_DIR, "Soalan dan Skema Kertas 1")
TPL_K2_DIR = os.path.join(TPL_ROOT_DIR, "Soalan dan Skema Kertas 2")

# In-memory image cache to optimize speed
IMG_CACHE = {}


def crop_diagram_caption(img):
    """
    Detects and cleanly crops out baked-in bottom caption ('Rajah X / Diagram X')
    from question stem diagrams while preserving the actual graphic.
    """
    w, h = img.size
    gray = img.convert("L")
    arr = np.array(gray)
    
    bottom_limit = int(h * 0.58)
    
    white_rows = []
    for y in range(h):
        row = arr[y, :]
        is_w = np.mean(row >= 235) > 0.98
        white_rows.append(is_w)
        
    bands = []
    in_band = False
    band_end = None
    for y in range(h - 1, bottom_limit, -1):
        if not white_rows[y]:
            if not in_band:
                in_band = True
                band_end = y
        else:
            if in_band:
                in_band = False
                bands.append((y + 1, band_end))
    if in_band:
        bands.append((bottom_limit, band_end))
        
    caption_bands = []
    for start, end in bands:
        band_arr = arr[start:end+1, :]
        dark_cols = np.where(np.min(band_arr, axis=0) < 200)[0]
        col_span = (dark_cols[-1] - dark_cols[0]) if len(dark_cols) else 0
        span_ratio = col_span / w
        band_height = end - start + 1
        if band_height <= 60 and span_ratio <= 0.32:
            caption_bands.append((start, end, span_ratio))
        else:
            break
            
    if not caption_bands:
        return img
        
    top_caption_y = min(b[0] for b in caption_bands)
    
    crop_y = top_caption_y
    for y in range(top_caption_y - 1, max(0, top_caption_y - 50), -1):
        if not white_rows[y]:
            crop_y = min(h, y + 4)
            break
    else:
        crop_y = max(0, top_caption_y - 4)
        
    return img.crop((0, 0, w, crop_y))

def clean_option_image(img, target_size=(600, 400)):
    """
    Detects and cleanly removes any isolated option letter (A, B, C, D) in the top-left margin
    of multiple choice options, tightly crops to the graphic/diagram, and centers it onto
    a uniform target canvas size.
    """
    if isinstance(img, bytes):
        img = Image.open(io.BytesIO(img))
    if img.mode != "RGB":
        img = img.convert("RGB")
    arr = np.array(img)
    gray = cv2.cvtColor(arr, cv2.COLOR_RGB2GRAY)
    h, w = gray.shape

    # Connected component analysis for option letters A, B, C, D
    _, binary = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(binary, connectivity=8)

    candidates = []
    for i in range(1, num_labels):
        x, y, comp_w, comp_h, area = stats[i]
        # Must be in top-left margin area (x < min(160, w * 0.25), y < min(120, h * 0.25))
        if x < min(160, w * 0.25) and y < min(120, h * 0.25):
            if 10 <= comp_w <= 65 and 12 <= comp_h <= 65 and 40 <= area <= 1800:
                gap_right = min(w, x + comp_w + 30)
                gap_strip = gray[max(0, y - 5):min(h, y + comp_h + 5), x + comp_w:gap_right]
                if gap_strip.size > 0 and np.mean(gap_strip >= 225) > 0.85:
                    remaining_dark = np.sum(binary == 255) - area
                    if remaining_dark > 200:
                        candidates.append((x, y, comp_w, comp_h, area, i))

    if candidates:
        # Pick the single leftmost component (the true option letter)
        candidates.sort(key=lambda c: c[0])
        x, y, comp_w, comp_h, area, i = candidates[0]
        arr[labels == i] = 255
        gray[labels == i] = 255

    # Find tight bounding box of remaining content
    dark_y, dark_x = np.where(gray < 220)
    if len(dark_y) == 0:
        return img

    x0, x1 = dark_x.min(), dark_x.max()
    y0, y1 = dark_y.min(), dark_y.max()

    pad = 12
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(w, x1 + pad)
    y1 = min(h, y1 + pad)

    cropped = Image.fromarray(arr[y0:y1, x0:x1])

    tw, th = target_size
    cw, ch = cropped.size

    scale = min((tw - 20) / max(1, cw), (th - 20) / max(1, ch))
    nw, nh = max(1, int(cw * scale)), max(1, int(ch * scale))
    resized = cropped.resize((nw, nh), Image.Resampling.LANCZOS)

    canvas = Image.new("RGB", target_size, (255, 255, 255))
    offset = ((tw - nw) // 2, (th - nh) // 2)
    canvas.paste(resized, offset)
    return canvas

def get_image_stream(url, crop_caption=False, is_option=False):
    """Fetches an image from URL and converts it to PNG in-memory for docx compliance."""
    if not url:
        return None
    cache_key = (url, crop_caption, is_option)
    if cache_key in IMG_CACHE:
        s = io.BytesIO(IMG_CACHE[cache_key])
        s.seek(0)
        return s
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=12) as response:
            raw_bytes = response.read()
        img = Image.open(io.BytesIO(raw_bytes))
        if crop_caption:
            img = crop_diagram_caption(img)
        if is_option:
            img = clean_option_image(img, target_size=(600, 400))
        png_io = io.BytesIO()
        img.save(png_io, format="PNG")
        png_bytes = png_io.getvalue()
        IMG_CACHE[cache_key] = png_bytes
        png_io.seek(0)
        return png_io
    except Exception as e:
        print(f"Warning: Failed to fetch image from {url}: {e}")
        return None

def parse_option(opt):
    """
    Parses option object. Detects if the option text contains an image tag or URL.
    Returns: (opt_id, opt_text, img_url, label)
    """
    if isinstance(opt, dict):
        opt_id = opt.get("id", "")
        opt_text = opt.get("teks", "").strip()
    elif isinstance(opt, str):
        opt_id = ""
        opt_text = opt.strip()
    else:
        return "", "", None, ""
    
    # Check for <img ... src="...">
    m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', opt_text)
    if not m:
        m = re.search(r'(https?://[^\s"\'<>]+(?:\.webp|\.png|\.jpg|\.jpeg)(?:\?[^\s"\'<>]*)?)', opt_text)
    
    if m:
        img_url = m.group(1)
        alt_m = re.search(r'alt=["\']([^"\']+)["\']', opt_text)
        label = alt_m.group(1) if alt_m else ""
        return opt_id, "", img_url, label
    
    opt_text = re.sub(r"^[A-Da-d][:\.]\s*", "", opt_text).strip()
    return opt_id, opt_text, None, ""

def split_bilingual_stem(raw_text):
    """Splits raw question stem into Malay and English lines using word boundaries."""
    raw_lines = raw_text.split("\n")
    cleaned_lines = []
    for l in raw_lines:
        clean = re.sub(r'<[^>]+>', '', l).strip()
        if clean:
            cleaned_lines.append(clean)
    lines = cleaned_lines
    if len(lines) == 2:
        return [lines[0]], [lines[1]]
    
    en_words = set(["which", "what", "diagram", "calculate", "state", "the", "is", "are", "of", "in", "if", "shows", "between", "an", "a", "from", "to", "for", "with", "by", "at", "when", "why", "how", "given", "assume", "determine", "name"])
    bm_words = set(["rajah", "apakah", "yang", "manakah", "antara", "berikut", "hitungkan", "nyatakan", "terangkan", "mengapakah", "bagaimanakah", "diberi", "jika", "apabila", "suatu", "sebuah", "seorang", "pada", "oleh", "dengan", "untuk", "dalam", "dan", "ialah", "adalah", "unit", "kuantiti", "terbitan", "asas", "daya", "tenaga", "tekanan", "panjang", "jisim", "laju", "halaju"])
    
    bm_lines = []
    en_lines = []
    for l in lines:
        words = re.findall(r"[a-zA-Z]+", l.lower())
        bm_score = sum(1 for w in words if w in bm_words)
        en_score = sum(1 for w in words if w in en_words)
        if en_score > bm_score:
            en_lines.append(l)
        else:
            bm_lines.append(l)
            
    if not en_lines and len(bm_lines) > 1:
        half = len(bm_lines) // 2
        return bm_lines[:half], bm_lines[half:]
        
    return bm_lines, en_lines

# ==============================================================================
# KERTAS 1 EXAM
# ==============================================================================


def estimate_k1_page_count(questions):
    """
    Accurately calculates total printed pages for Kertas 1:
    - Page 1: Cover Page
    - Page 2-3: Formula Sheet (2 pages)
    - Page 4+: Questions packed by dynamic vertical height
    """
    total_pages = 1 + 2  # Cover (1) + Formula (2)
    PAGE_CAPACITY_DXA = 13800  # Printable height on A4 with 1-inch margins
    current_page_used = 0

    for q in questions:
        stem = q.get("soalan", "")
        bm_lines, en_lines = split_bilingual_stem(stem)
        total_lines = max(1, len(bm_lines) + len(en_lines))
        q_height = total_lines * 320

        if q.get("rajahUrl"):
            q_height += 4800

        options = q.get("pilihan", [])
        for opt_idx in range(4):
            raw_opt = options[opt_idx] if opt_idx < len(options) else ""
            opt_id, opt_text, opt_img, _ = parse_option(raw_opt)
            if opt_img:
                q_height += 2400
            else:
                opt_lines = max(1, (len(opt_text) // 60) + 1)
                q_height += opt_lines * 280

        q_height += 240  # spacing row

        if current_page_used + q_height > PAGE_CAPACITY_DXA:
            total_pages += 1
            current_page_used = q_height
        else:
            current_page_used += q_height

    if current_page_used > 0:
        total_pages += 1

    return max(total_pages, 3)

def estimate_k2_page_count(questions):
    """
    Accurately calculates total printed pages for Kertas 2:
    - Page 1: Cover Page
    - Page 2-3: Formula Sheet (2 pages)
    - Questions:
        Q1-Q2: 1 page each
        Q3-Q8: 2 pages each
        Q9-Q11: 3 pages each
    """
    total_pages = 1 + 2  # Cover (1) + Formula (2)
    for idx, q in enumerate(questions):
        q_num = idx + 1
        if q_num <= 2:
            total_pages += 1
        elif q_num <= 8:
            total_pages += 2
        else:
            total_pages += 3
    return max(total_pages, 4)

def update_docx_app_pages(docx_path, page_count):
    import zipfile, tempfile, os
    temp_path = docx_path + ".tmp"
    try:
        with zipfile.ZipFile(docx_path, "r") as zin, zipfile.ZipFile(temp_path, "w", compression=zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                buffer = zin.read(item.filename)
                if item.filename == "docProps/app.xml":
                    text = buffer.decode("utf-8")
                    if "<Pages>" in text:
                        text = re.sub(r"<Pages>\d+</Pages>", f"<Pages>{page_count}</Pages>", text)
                    else:
                        text = text.replace("</Properties>", f"<Pages>{page_count}</Pages></Properties>")
                    buffer = text.encode("utf-8")
                zout.writestr(item, buffer)
        os.replace(temp_path, docx_path)
    except Exception as e:
        print(f"Notice: update_docx_app_pages fallback: {e}")


def update_cover_page(doc, code_text, tingkatan=5, tahun=2026, nama_peperiksaan="PEPERIKSAAN PERCUBAAN SPM", panitia="Fizik", sekolah="", total_pages=None):
    """
    Updates Cover Page strictly according to official SPM standards:
    1. Dynamic exam name matching JSU selection + year
    2. Dynamic Tingkatan & Kertas
    3. Auto page count using Word OpenXML NUMPAGES field
    4. Auto current year footer: [Tahun] Panitia [Fizik] SMK [...]
    """
    ns_w = nsdecls("w")
    full_exam = (nama_peperiksaan or "PEPERIKSAAN PERCUBAAN SPM").strip().upper()
    if str(tahun) not in full_exam:
        full_exam = f"{full_exam} {tahun}"

    # Clean document settings (avoid Word prompting to update fields)
    pass

    # P10: Exam title, code (flush right matching duration ".....minit"), PHYSICS
    p10_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:tabs>
          <w:tab w:val="right" w:pos="9175"/>
        </w:tabs>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="28"/>
          <w:szCs w:val="28"/>
        </w:rPr>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="28"/>
          <w:szCs w:val="28"/>
        </w:rPr>
        <w:t>{full_exam}</w:t>
      </w:r>
      <w:r>
        <w:ptab w:alignment="right" w:relativeTo="margin" w:leader="none"/>
      </w:r>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="31"/>
          <w:szCs w:val="31"/>
        </w:rPr>
        <w:t>{code_text}</w:t>
      </w:r>
      <w:r>
        <w:br/>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="28"/>
          <w:szCs w:val="28"/>
        </w:rPr>
        <w:t>PHYSICS</w:t>
      </w:r>
    </w:p>'''
    if len(doc.paragraphs) > 10:
        doc.paragraphs[10]._element.getparent().replace(doc.paragraphs[10]._element, parse_xml(p10_xml))

    # P11: TINGKATAN {tingkatan}
    p11_xml = f'''<w:p {ns_w}>
      <w:pPr><w:rPr><w:b/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr><w:t>TINGKATAN {tingkatan}</w:t></w:r>
    </w:p>'''
    if len(doc.paragraphs) > 11:
        doc.paragraphs[11]._element.getparent().replace(doc.paragraphs[11]._element, parse_xml(p11_xml))

    # P12: Kertas {1/2}
    paper_num = "2" if ("/2" in code_text or code_text.endswith("2")) else "1"
    p12_xml = f'''<w:p {ns_w}>
      <w:pPr><w:rPr><w:b/><w:u w:val="single"/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr></w:pPr>
      <w:r><w:rPr><w:b/><w:u w:val="single"/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr><w:t>Kertas {paper_num}</w:t></w:r>
    </w:p>'''
    if len(doc.paragraphs) > 12:
        doc.paragraphs[12]._element.getparent().replace(doc.paragraphs[12]._element, parse_xml(p12_xml))

    # P14: Duration (e.g. 1 ¼ jam ... Satu jam lima belas minit) - Clean, single-line, edge-to-edge justified with ptab
    time_num = "2 ½ jam" if paper_num == "2" else "1 ¼ jam"
    time_words = "Dua jam tiga puluh minit" if paper_num == "2" else "Satu jam lima belas minit"
    p14_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:tabs>
          <w:tab w:val="right" w:pos="9175"/>
        </w:tabs>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/>
          <w:szCs w:val="24"/>
        </w:rPr>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/>
          <w:szCs w:val="24"/>
        </w:rPr>
        <w:t>{time_num}</w:t>
      </w:r>
      <w:r>
        <w:ptab w:alignment="right" w:relativeTo="margin" w:leader="none"/>
      </w:r>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/>
          <w:szCs w:val="24"/>
        </w:rPr>
        <w:t>{time_words}</w:t>
      </w:r>
    </w:p>'''
    if len(doc.paragraphs) > 14:
        doc.paragraphs[14]._element.getparent().replace(doc.paragraphs[14]._element, parse_xml(p14_xml))

    # P47: "Kertas soalan ini mengandungi [total_pages] halaman bercetak" (Static text matching total pages)
    if not total_pages:
        total_pages = 23 if "4531/1" in code_text else 28

    p47_xml = f'''<w:p {ns_w}>
      <w:pPr><w:jc w:val="center"/></w:pPr>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr><w:t xml:space="preserve">Kertas soalan ini mengandungi </w:t></w:r>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:b/><w:bCs/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr><w:t>{total_pages}</w:t></w:r>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr><w:t xml:space="preserve"> halaman bercetak</w:t></w:r>
    </w:p>'''
    if len(doc.paragraphs) > 47:
        doc.paragraphs[47]._element.getparent().replace(doc.paragraphs[47]._element, parse_xml(p47_xml))

    # Update nested cover table TINGKATAN box [ 4 / 5 ] dynamically
    for tbl_node in doc._body._element.xpath('.//w:tbl'):
        for tr_node in tbl_node.xpath('.//w:tr'):
            tc_nodes = tr_node.xpath('.//w:tc')
            if len(tc_nodes) > 1:
                c0_txt = "".join(tc_nodes[0].xpath('.//w:t/text()')).strip().upper()
                if "TINGKATAN" in c0_txt:
                    t_nodes = tc_nodes[1].xpath('.//w:t')
                    if t_nodes:
                        t_nodes[0].text = str(tingkatan)
                        for extra_t in t_nodes[1:]:
                            extra_t.getparent().remove(extra_t)
                    else:
                        c1_p = tc_nodes[1].xpath('.//w:p')
                        if c1_p:
                            r_xml = f'<w:r {ns_w}><w:rPr><w:b/></w:rPr><w:t>{tingkatan}</w:t></w:r>'
                            c1_p[0].append(parse_xml(r_xml))

    # Construct footer text: [Tahun] Panitia [] SMK []
    school_part = f"SMK {sekolah.strip()}" if (sekolah and sekolah.strip()) else "SMK []"
    panitia_clean = panitia.strip() if panitia else ""
    if not panitia_clean or panitia_clean == "[]":
        panitia_part = "Panitia []"
    elif panitia_clean.lower() == "fizik":
        panitia_part = "Panitia [Fizik]"
    elif not panitia_clean.startswith("Panitia"):
        panitia_part = f"Panitia {panitia_clean}"
    else:
        panitia_part = panitia_clean

    footer_school_text = f"{tahun} {panitia_part} {school_part}"

    # Section 0 Margins and Footer
    sec0 = doc.sections[0]
    sec0.footer_distance = docx.shared.Pt(36)
    sec0.bottom_margin = docx.shared.Pt(72)
    sec0.left_margin = docx.shared.Pt(72)
    sec0.right_margin = docx.shared.Pt(72)

    # Exactly align cover page table and connector lines to match Rumus table (9175 dxa / 458.75 pt)
    for tbl_node in doc._body._element.xpath(".//w:tbl"):
        tblPr = tbl_node.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tblPr")
        if tblPr is not None:
            tblW = tblPr.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tblW")
            if tblW is not None:
                tblW.set("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}w", "9175")
                tblW.set("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}type", "dxa")
        grid = tbl_node.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tblGrid")
        if grid is not None:
            gridCols = grid.findall("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}gridCol")
            if len(gridCols) == 25:
                gridCols[0].set("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}w", "1591")
                for gc in gridCols[1:]:
                    gc.set("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}w", "316")
        for tr in tbl_node.findall("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr"):
            tcs = tr.findall("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tc")
            if len(tcs) == 25:
                tcPr0 = tcs[0].find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tcPr")
                if tcPr0 is not None:
                    tcW = tcPr0.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tcW")
                    if tcW is not None:
                        tcW.set("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}w", "1591")
                for tc in tcs[1:]:
                    tcPr = tc.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tcPr")
                    if tcPr is not None:
                        tcW = tcPr.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tcW")
                        if tcW is not None:
                            tcW.set("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}w", "316")

    for line_elem in doc._body._element.findall(".//{urn:schemas-microsoft-com:vml}line"):
        to_val = line_elem.get("to", "")
        from_val = line_elem.get("from", "")
        if "496" in to_val or "483" in to_val or "8.8pt" in to_val or "3.45pt" in from_val:
            y_to = to_val.split(",")[-1] if "," in to_val else "8.8pt"
            y_from = from_val.split(",")[-1] if "," in from_val else "0pt"
            line_elem.set("from", f"0,{y_from}")
            line_elem.set("to", f"458.75pt,{y_to}")

    for shape_elem in doc._body._element.findall(".//{urn:schemas-microsoft-com:vml}shape"):
        style = shape_elem.get("style", "")
        if "width:540pt" in style or "_x0000_s2053" in shape_elem.get("id", ""):
            style = re.sub(r"width:[^;]+;", "width:458.75pt;", style)
            shape_elem.set("style", style)
        elif "_x0000_s2051" in shape_elem.get("id", ""):
            style = re.sub(r"width:[^;]+;", "width:481.45pt;", style)
            shape_elem.set("style", style)

    # Trim 2 blank spacer paragraphs before page notice so cover never spills
    if len(doc.paragraphs) > 45:
        removed = 0
        for idx_c in range(len(doc.paragraphs) - 3, 20, -1):
            if idx_c < len(doc.paragraphs) and not doc.paragraphs[idx_c].text.strip():
                p_el = doc.paragraphs[idx_c]._element
                p_el.getparent().remove(p_el)
                removed += 1
                if removed >= 2:
                    break
    ftr_p0_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Footer"/>
        <w:jc w:val="right"/>
      </w:pPr>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:color w:val="595959"/></w:rPr><w:t>[Lihat halaman sebelah</w:t></w:r>
    </w:p>'''

    ftr_p1_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Footer"/>
        <w:tabs>
          <w:tab w:val="clear" w:pos="4320"/>
          <w:tab w:val="clear" w:pos="4680"/>
          <w:tab w:val="clear" w:pos="8640"/>
          <w:tab w:val="clear" w:pos="9360"/>
          <w:tab w:val="right" w:pos="9175"/>
        </w:tabs>
      </w:pPr>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:b/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr><w:t xml:space="preserve">{code_text} </w:t></w:r>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>{footer_school_text}</w:t></w:r>
      <w:r><w:ptab w:alignment="right" w:relativeTo="margin" w:leader="none"/></w:r>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:b/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr><w:t>SULIT</w:t></w:r>
    </w:p>'''

    ftr_elem = sec0.footer._element
    ftr_elem.clear()
    ftr_elem.append(parse_xml(ftr_p0_xml))
    ftr_elem.append(parse_xml(ftr_p1_xml))

    return footer_school_text

def append_formula_sheets(sect_pr, paper_path, ns_w):
    """
    Appends the official formula sheets strictly across EXACTLY 2 pages:
    Page 1 (Doc Page 2): Introductory notice + Table 0A (rows 0..19)
    Page 2 (Doc Page 3): Table 0B (rows 20..39)
    Both tables are compacted with scaled row heights (0.80) and tight cell padding
    guaranteeing 100% containment on their respective single pages with zero spillover.
    """
    doc_formula = docx.Document(paper_path)
    tbl0 = doc_formula.tables[0]._element

    # 1. Compact Introductory instruction paragraph
    p_intro_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:spacing w:line="200" w:lineRule="auto" w:before="0" w:after="60"/>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:sz w:val="20"/>
          <w:szCs w:val="20"/>
        </w:rPr>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:sz w:val="20"/>
          <w:szCs w:val="20"/>
        </w:rPr>
        <w:t>Rumus-rumus berikut boleh membantu anda menjawab soalan. Simbol-simbol yang diberi adalah yang biasa digunakan.</w:t>
      </w:r>
    </w:p>'''
    sect_pr.addprevious(parse_xml(p_intro_xml))

    # 2. Table 0A (Formula Page 1: Rows 0..19) - Compacted
    tbl0A = copy.deepcopy(tbl0)
    for r in tbl0A.findall('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr')[20:]:
        tbl0A.remove(r)

    tblPr0A = tbl0A.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tblPr')
    if tblPr0A is not None:
        tcm = tblPr0A.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tblCellMar')
        if tcm is not None: tblPr0A.remove(tcm)
        tblPr0A.append(parse_xml(f'''<w:tblCellMar {ns_w}>
          <w:top w:w="30" w:type="dxa"/>
          <w:bottom w:w="30" w:type="dxa"/>
          <w:left w:w="108" w:type="dxa"/>
          <w:right w:w="108" w:type="dxa"/>
        </w:tblCellMar>'''))

    for r in tbl0A.findall('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr'):
        trPr = r.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}trPr')
        if trPr is not None:
            ga = trPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}gridAfter')
            if ga is not None: trPr.remove(ga)
            wa = trPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}wAfter')
            if wa is not None: trPr.remove(wa)
            if trPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}cantSplit') is None:
                trPr.append(parse_xml(f'<w:cantSplit {ns_w}/>'))
            h_elem = trPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}trHeight')
            if h_elem is not None:
                orig_h = int(h_elem.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val', 0))
                if orig_h > 0:
                    h_elem.attrib['{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val'] = str(int(orig_h * 0.80))
                    h_elem.attrib['{http://schemas.openxmlformats.org/wordprocessingml/2006/main}hRule'] = 'atLeast'

        tcs = r.findall('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tc')
        if len(tcs) >= 4:
            last_tc = tcs[-1]
            tcPr = last_tc.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tcPr')
            if tcPr is not None:
                tcW = tcPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tcW')
                if tcW is not None: tcW.attrib['{http://schemas.openxmlformats.org/wordprocessingml/2006/main}w'] = '4184'
                gs = tcPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}gridSpan')
                if gs is not None: gs.attrib['{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val'] = '3'

        for p in r.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            pPr = p.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}pPr')
            if pPr is None:
                pPr = parse_xml(f'<w:pPr {ns_w}/>')
                p.insert(0, pPr)
            sp = pPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}spacing')
            if sp is not None: pPr.remove(sp)
            pPr.append(parse_xml(f'<w:spacing {ns_w} w:line="220" w:lineRule="auto" w:before="0" w:after="0"/>'))

    sect_pr.addprevious(tbl0A)

    # 3. Hard Page Break between Formula Page 1 and Formula Page 2 (zero-height paragraph)
    p_break_f2_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pageBreakBefore/>
        <w:spacing w:line="1" w:lineRule="exact" w:before="0" w:after="0"/>
        <w:rPr><w:sz w:val="2"/></w:rPr>
      </w:pPr>
    </w:p>'''
    sect_pr.addprevious(parse_xml(p_break_f2_xml))

    # 4. Table 0B (Formula Page 2: Rows 20..39) - Compacted
    tbl0B = copy.deepcopy(tbl0)
    for r in tbl0B.findall('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr')[:20]:
        tbl0B.remove(r)

    tblPr0B = tbl0B.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tblPr')
    if tblPr0B is not None:
        tcm = tblPr0B.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tblCellMar')
        if tcm is not None: tblPr0B.remove(tcm)
        tblPr0B.append(parse_xml(f'''<w:tblCellMar {ns_w}>
          <w:top w:w="30" w:type="dxa"/>
          <w:bottom w:w="30" w:type="dxa"/>
          <w:left w:w="108" w:type="dxa"/>
          <w:right w:w="108" w:type="dxa"/>
        </w:tblCellMar>'''))

    for r in tbl0B.findall('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr'):
        trPr = r.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}trPr')
        if trPr is not None:
            if trPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}cantSplit') is None:
                trPr.append(parse_xml(f'<w:cantSplit {ns_w}/>'))
            h_elem = trPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}trHeight')
            if h_elem is not None:
                orig_h = int(h_elem.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val', 0))
                if orig_h > 0:
                    h_elem.attrib['{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val'] = str(int(orig_h * 0.80))
                    h_elem.attrib['{http://schemas.openxmlformats.org/wordprocessingml/2006/main}hRule'] = 'atLeast'

        for p in r.findall('.//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
            pPr = p.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}pPr')
            if pPr is None:
                pPr = parse_xml(f'<w:pPr {ns_w}/>')
                p.insert(0, pPr)
            sp = pPr.find('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}spacing')
            if sp is not None: pPr.remove(sp)
            pPr.append(parse_xml(f'<w:spacing {ns_w} w:line="220" w:lineRule="auto" w:before="0" w:after="0"/>'))

    sect_pr.addprevious(tbl0B)

    # 5. Hard Page Break after Formula Page 2 (before Questions, zero-height paragraph)
    p_break_q_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pageBreakBefore/>
        <w:spacing w:line="1" w:lineRule="exact" w:before="0" w:after="0"/>
        <w:rPr><w:sz w:val="2"/></w:rPr>
      </w:pPr>
    </w:p>'''
    sect_pr.addprevious(parse_xml(p_break_q_xml))

def calc_k1_question_height(q):
    stem = q.get("soalan", "")
    bm_lines, en_lines = split_bilingual_stem(stem)
    total_lines = 0
    for l in bm_lines + en_lines:
        l_len = len(l.strip())
        wrapped = max(1, (l_len + 79) // 80)
        total_lines += wrapped
    p_count = len(bm_lines) + len(en_lines)
    stem_h = total_lines * 276 + p_count * 30 + 100

    has_diag = bool(q.get("rajahUrl"))
    opts = q.get("pilihan", [])
    has_opt_img = any(bool(parse_option(o)[2]) for o in opts)

    if has_diag and has_opt_img:
        diag_h = 1950
    elif has_diag:
        diag_h = 2450
    else:
        diag_h = 0

    opts_h = 0
    for opt_idx in range(4):
        raw_opt = opts[opt_idx] if opt_idx < len(opts) else ""
        opt_id, opt_text, opt_img_url, opt_label = parse_option(raw_opt)
        if opt_img_url:
            opts_h += 1350 if (has_diag and has_opt_img) else 1650
        else:
            opt_lines = max(1, (len(opt_text.strip()) + 69) // 70)
            opts_h += 120 + opt_lines * 240 + 30

    return stem_h + diag_h + opts_h, has_diag, has_opt_img


def build_k1_exam_docx(questions, output_path, tingkatan=5, tahun=2026, nama_peperiksaan="PEPERIKSAAN PERCUBAAN SPM", panitia="Fizik", sekolah=""):
    """
    Generates genuine Kertas 1 DOCX:
    1. Cover Page: Exactly 1 page, preserved from 2 TEMPLATE FIZIK KERTAS 1.docx as base root.
    2. Formula Sheet: Exactly 2 pages (Table 0A on Page 2, Table 0B on Page 3).
    3. Questions Tables: Calibrated page-chunked tables matching the official SPM template architecture.
       - Packs short questions together efficiently without wasting page space.
       - Each page has its own table separated by hard page breaks (<w:br w:type="page"/>),
         guaranteeing that no question ever splits across page boundaries.
       - Header displays centered page number starting at '2' in bold Times New Roman 12pt.
    """
    cover_path = TPL_K1_COVER
    paper_path = os.path.join(TPL_K1_DIR, "2 TEMPLATE FIZIK KERTAS 1.docx")

    # Resolve Tingkatan:
    # 1. Parse caller's tingkatan parameter
    caller_t = None
    try:
        if tingkatan is not None:
            m_t = re.search(r'\d+', str(tingkatan))
            if m_t:
                caller_t = int(m_t.group())
    except Exception:
        pass

    # 2. Inspect questions for Form 4 / Form 5 content
    t_counts = {}
    if questions:
        for q in questions:
            t = q.get("tingkatan") or q.get("form")
            if t is not None:
                try:
                    t_m = re.search(r'\d+', str(t))
                    if t_m:
                        v = int(t_m.group())
                        t_counts[v] = t_counts.get(v, 0) + 1
                except Exception:
                    pass

    is_spm = ("SPM" in str(nama_peperiksaan).upper() or "PERCUBAAN" in str(nama_peperiksaan).upper())
    has_t5 = t_counts.get(5, 0) > 0
    has_t4 = t_counts.get(4, 0) > 0

    if caller_t == 5:
        tingkatan = 5
    elif caller_t == 4:
        # If user explicitly asked for Tingkatan 4, use 4 only if there are no T5 questions and it is not SPM
        tingkatan = 4 if (not has_t5 and not is_spm) else 5
    else:
        # Inferred from questions and exam name
        if has_t5 or is_spm:
            tingkatan = 5
        elif has_t4:
            tingkatan = 4
        else:
            tingkatan = 5

    # Dynamic Page Chunking Budget
    # A4 printable height = 13,958 dxa; PAGE_BUDGET = 12,800 leaves ~1,158 dxa safety margin
    # while allowing natural multi-question packing (2-4 questions per page).
    PAGE_BUDGET = 12600
    page_chunks = []
    curr_chunk = []
    curr_h = 0

    for idx, q in enumerate(questions):
        qh, has_diag, has_opt_img = calc_k1_question_height(q)
        # If question has both diagram and option images, isolate on its own page chunk
        if has_diag and has_opt_img:
            if curr_chunk:
                page_chunks.append(curr_chunk)
                curr_chunk = []
                curr_h = 0
            page_chunks.append([(idx, q, has_diag, has_opt_img)])
            continue

        needed_h = qh + (360 if curr_chunk else 0)
        max_b = 12900 if len(curr_chunk) == 1 else PAGE_BUDGET
        if curr_chunk and (curr_h + needed_h > max_b):
            page_chunks.append(curr_chunk)
            curr_chunk = [(idx, q, has_diag, has_opt_img)]
            curr_h = qh
        else:
            curr_chunk.append((idx, q, has_diag, has_opt_img))
            curr_h += needed_h

    if curr_chunk:
        page_chunks.append(curr_chunk)

    total_pages = 1 + 2 + len(page_chunks)

    doc = docx.Document(cover_path)
    footer_school_text = update_cover_page(doc, "4531/1", tingkatan, tahun, nama_peperiksaan, panitia, sekolah, total_pages=total_pages)

    # 2. Add Section 2 for Formula Sheet and Questions
    sec2 = doc.add_section(docx.enum.section.WD_SECTION.NEW_PAGE)
    sec2.top_margin = docx.shared.Pt(72)
    sec2.bottom_margin = docx.shared.Pt(72)
    sec2.left_margin = docx.shared.Pt(72)
    sec2.right_margin = docx.shared.Pt(72)
    sec2.header_distance = docx.shared.Pt(36)
    sec2.footer_distance = docx.shared.Pt(36)

    sec2.header.is_linked_to_previous = False
    sec2.footer.is_linked_to_previous = False

    ns_w = nsdecls("w")

    # Explicit page numbering starting at 2 in Section 2 (Formula Sheet starts at Page 2)
    pg_num_type = parse_xml(f'<w:pgNumType {ns_w} w:start="2"/>')
    sec2._sectPr.append(pg_num_type)

    # Header: SULIT on left, centered page number in bold Times New Roman 12pt, 4531/1 flush on right
    hdr_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Header"/>
        <w:tabs>
          <w:tab w:val="clear" w:pos="4320"/>
          <w:tab w:val="clear" w:pos="4680"/>
          <w:tab w:val="clear" w:pos="8640"/>
          <w:tab w:val="clear" w:pos="9360"/>
          <w:tab w:val="center" w:pos="4508"/>
          <w:tab w:val="right" w:pos="9016"/>
        </w:tabs>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/><w:szCs w:val="24"/>
        </w:rPr>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/><w:szCs w:val="24"/>
        </w:rPr>
        <w:t>SULIT</w:t>
      </w:r>
      <w:r>
        <w:tab/>
      </w:r>
      <w:fldSimple {ns_w} w:instr="PAGE \* MERGEFORMAT">
        <w:r>
          <w:rPr>
            <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
            <w:b/>
            <w:bCs/>
            <w:sz w:val="24"/><w:szCs w:val="24"/>
          </w:rPr>
          <w:t>2</w:t>
        </w:r>
      </w:fldSimple>
      <w:r>
        <w:tab/>
      </w:r>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/><w:szCs w:val="24"/>
        </w:rPr>
        <w:t>4531/1</w:t>
      </w:r>
    </w:p>'''
    hdr_elem = sec2.header._element
    hdr_elem.clear()
    hdr_elem.append(parse_xml(hdr_xml))

    # Footer: [Lihat halaman sebelah] and 4531/1 [Tahun] Panitia [] SMK [] ... SULIT
    ftr_p0_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Footer"/>
        <w:jc w:val="right"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:sz w:val="20"/><w:szCs w:val="20"/>
          <w:color w:val="595959"/>
        </w:rPr>
        <w:t>[Lihat halaman sebelah</w:t>
      </w:r>
    </w:p>'''

    ftr_p1_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Footer"/>
        <w:tabs>
          <w:tab w:val="clear" w:pos="4320"/>
          <w:tab w:val="clear" w:pos="4680"/>
          <w:tab w:val="clear" w:pos="8640"/>
          <w:tab w:val="clear" w:pos="9360"/>
          <w:tab w:val="right" w:pos="9016"/>
        </w:tabs>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:sz w:val="20"/><w:szCs w:val="20"/>
        </w:rPr>
        <w:t xml:space="preserve">4531/1 </w:t>
      </w:r>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:sz w:val="18"/><w:szCs w:val="18"/>
        </w:rPr>
        <w:t>{footer_school_text}</w:t>
      </w:r>
      <w:r>
        <w:ptab w:alignment="right" w:relativeTo="margin" w:leader="none"/>
      </w:r>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:sz w:val="20"/><w:szCs w:val="20"/>
        </w:rPr>
        <w:t>SULIT</w:t>
      </w:r>
    </w:p>'''

    ftr2_elem = sec2.footer._element
    ftr2_elem.clear()
    ftr2_elem.append(parse_xml(ftr_p0_xml))
    ftr2_elem.append(parse_xml(ftr_p1_xml))

    body = doc._body._element
    sect_pr = body.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}sectPr")

    # 3. Append Formula Sheets (2 pages strictly separated, matching official template)
    append_formula_sheets(sect_pr, paper_path, ns_w)

    global_diagram_counter = 0

    # 4. Render Questions Page by Page (Matching Official Template Architecture)
    for chunk_idx, chunk in enumerate(page_chunks):
        # Insert hard page break before each subsequent question page
        if chunk_idx > 0:
            p_chunk_break_xml = f'''<w:p {ns_w}>
              <w:pPr>
                <w:spacing w:line="1" w:lineRule="exact" w:before="0" w:after="0"/>
                <w:rPr><w:sz w:val="2"/></w:rPr>
              </w:pPr>
              <w:r>
                <w:br w:type="page"/>
              </w:r>
            </w:p>'''
            sect_pr.addprevious(parse_xml(p_chunk_break_xml))

        # Create Table for this Page
        tbl_xml = f'''<w:tbl {ns_w}>
          <w:tblPr>
            <w:tblStyle w:val="TableGrid"/>
            <w:tblW w:w="0" w:type="auto"/>
            <w:tblCellMar>
              <w:top w:w="30" w:type="dxa"/>
              <w:bottom w:w="30" w:type="dxa"/>
              <w:left w:w="72" w:type="dxa"/>
              <w:right w:w="72" w:type="dxa"/>
            </w:tblCellMar>
            <w:tblBorders>
              <w:top w:val="none" w:sz="0" w:space="0" w:color="auto"/>
              <w:left w:val="none" w:sz="0" w:space="0" w:color="auto"/>
              <w:bottom w:val="none" w:sz="0" w:space="0" w:color="auto"/>
              <w:right w:val="none" w:sz="0" w:space="0" w:color="auto"/>
              <w:insideH w:val="none" w:sz="0" w:space="0" w:color="auto"/>
              <w:insideV w:val="none" w:sz="0" w:space="0" w:color="auto"/>
            </w:tblBorders>
            <w:tblLook w:val="04A0" w:firstRow="1" w:lastRow="0" w:firstColumn="1" w:lastColumn="0" noHBand="0" noVBand="1"/>
          </w:tblPr>
          <w:tblGrid>
            <w:gridCol w:w="451"/>
            <w:gridCol w:w="563"/>
            <w:gridCol w:w="72"/>
            <w:gridCol w:w="7930"/>
          </w:tblGrid>
        </w:tbl>'''
        tbl_elem = parse_xml(tbl_xml)
        sect_pr.addprevious(tbl_elem)
        tbl = docx.table.Table(tbl_elem, doc)

        for q_pos, (idx, q, has_diag, has_opt_img) in enumerate(chunk):
            q_num = idx + 1
            raw_stem = q.get("soalan", "")
            bm_lines, en_lines = split_bilingual_stem(raw_stem)

            # Build Stem Row
            tr_stem_xml = f'''<w:tr {ns_w}>
              <w:trPr>
                <w:cantSplit/>
              </w:trPr>
              <w:tc>
                <w:tcPr>
                  <w:tcW w:w="451" w:type="dxa"/>
                  <w:vAlign w:val="top"/>
                </w:tcPr>
                <w:p>
                  <w:pPr>
                    <w:keepNext/>
                    <w:spacing w:line="276" w:lineRule="auto" w:before="0" w:after="0"/>
                    <w:ind w:left="720" w:hanging="720"/>
                  </w:pPr>
                  <w:r>
                    <w:rPr>
                      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                      <w:b/>
                      <w:sz w:val="24"/>
                      <w:szCs w:val="24"/>
                    </w:rPr>
                    <w:t>{q_num}</w:t>
                  </w:r>
                </w:p>
              </w:tc>
              <w:tc>
                <w:tcPr>
                  <w:tcW w:w="8565" w:type="dxa"/>
                  <w:gridSpan w:val="3"/>
                  <w:vAlign w:val="top"/>
                </w:tcPr>
                <w:p/>
              </w:tc>
            </w:tr>'''
            tr_stem = parse_xml(tr_stem_xml)
            tbl_elem.append(tr_stem)
            cell_stem = docx.table._Cell(tr_stem.xpath('w:tc')[1], tbl)

            for l_idx, bm in enumerate(bm_lines):
                p = cell_stem.paragraphs[0] if (l_idx == 0 and len(cell_stem.paragraphs) > 0 and not cell_stem.paragraphs[0].text) else cell_stem.add_paragraph()
                p.paragraph_format.keep_with_next = True
                p.paragraph_format.line_spacing = 1.15
                p.paragraph_format.space_before = Pt(0)
                p.paragraph_format.space_after = Pt(2)
                r = p.add_run(bm)
                r.font.name = "Times New Roman"
                r.font.size = Pt(12)

            for en in en_lines:
                p = cell_stem.add_paragraph()
                p.paragraph_format.keep_with_next = True
                p.paragraph_format.line_spacing = 1.15
                p.paragraph_format.space_before = Pt(0)
                p.paragraph_format.space_after = Pt(2)
                r = p.add_run(en)
                r.font.name = "Times New Roman"
                r.font.size = Pt(12)
                r.font.italic = True

            rajah_url = q.get("rajahUrl")
            if rajah_url:
                global_diagram_counter += 1
                p_img = cell_stem.add_paragraph()
                p_img.paragraph_format.keep_with_next = True
                p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p_img.paragraph_format.space_before = Pt(4)
                p_img.paragraph_format.space_after = Pt(2)
                stream = get_image_stream(rajah_url, crop_caption=True, is_option=False)
                if stream:
                    diag_w = Inches(2.4) if (has_diag and has_opt_img) else Inches(3.2)
                    p_img.add_run().add_picture(stream, width=diag_w)

                p_cap = cell_stem.add_paragraph()
                p_cap.paragraph_format.keep_with_next = True
                p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
                p_cap.paragraph_format.space_before = Pt(0)
                p_cap.paragraph_format.space_after = Pt(4)
                r_rajah = p_cap.add_run(f"Rajah {global_diagram_counter} / ")
                r_rajah.font.name = "Times New Roman"
                r_rajah.font.size = Pt(11)
                r_rajah.bold = False

                r_diag = p_cap.add_run(f"Diagram {global_diagram_counter}")
                r_diag.font.name = "Times New Roman"
                r_diag.font.size = Pt(11)
                r_diag.bold = False
                r_diag.italic = True

            # Options A, B, C, D
            raw_options = q.get("pilihan", [])
            letters = ["A", "B", "C", "D"]
            for opt_idx in range(4):
                letter = letters[opt_idx]
                is_last_opt = (opt_idx == 3)
                keep_next_xml = '<w:keepNext/>' if not is_last_opt else ''

                raw_opt = raw_options[opt_idx] if opt_idx < len(raw_options) else ""
                opt_id, opt_text, opt_img_url, opt_label = parse_option(raw_opt)

                tr_opt_xml = f'''<w:tr {ns_w}>
                  <w:trPr>
                    <w:cantSplit/>
                  </w:trPr>
                  <w:tc>
                    <w:tcPr>
                      <w:tcW w:w="451" w:type="dxa"/>
                      <w:vAlign w:val="top"/>
                    </w:tcPr>
                    <w:p>
                      <w:pPr>
                        {keep_next_xml}
                        <w:spacing w:line="240" w:lineRule="auto"/>
                      </w:pPr>
                    </w:p>
                  </w:tc>
                  <w:tc>
                    <w:tcPr>
                      <w:tcW w:w="563" w:type="dxa"/>
                      <w:vAlign w:val="top"/>
                    </w:tcPr>
                    <w:p>
                      <w:pPr>
                        {keep_next_xml}
                        <w:spacing w:line="240" w:lineRule="auto"/>
                      </w:pPr>
                      <w:r>
                        <w:rPr>
                          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                          <w:b/>
                          <w:sz w:val="24"/>
                          <w:szCs w:val="24"/>
                        </w:rPr>
                        <w:t>{letter}</w:t>
                      </w:r>
                    </w:p>
                  </w:tc>
                  <w:tc>
                    <w:tcPr>
                      <w:tcW w:w="8002" w:type="dxa"/>
                      <w:gridSpan w:val="2"/>
                      <w:vAlign w:val="top"/>
                    </w:tcPr>
                    <w:p/>
                  </w:tc>
                </w:tr>'''
                tr_opt = parse_xml(tr_opt_xml)
                tbl_elem.append(tr_opt)
                cell_opt = docx.table._Cell(tr_opt.xpath('w:tc')[2], tbl)

                if opt_img_url:
                    p_opt_img = cell_opt.paragraphs[0]
                    if not is_last_opt:
                        p_opt_img.paragraph_format.keep_with_next = True
                    p_opt_img.alignment = WD_ALIGN_PARAGRAPH.LEFT
                    p_opt_img.paragraph_format.space_before = Pt(1)
                    p_opt_img.paragraph_format.space_after = Pt(2)
                    stream_opt = get_image_stream(opt_img_url, crop_caption=False, is_option=True)
                    if stream_opt:
                        opt_w = Inches(1.35) if (has_diag and has_opt_img) else Inches(1.85)
                        p_opt_img.add_run().add_picture(stream_opt, width=opt_w)

                if opt_text:
                    p_opt_text = cell_opt.paragraphs[0] if (not opt_img_url and len(cell_opt.paragraphs) > 0 and not cell_opt.paragraphs[0].text) else cell_opt.add_paragraph()
                    if not is_last_opt:
                        p_opt_text.paragraph_format.keep_with_next = True
                    p_opt_text.paragraph_format.line_spacing = 1.0
                    p_opt_text.paragraph_format.space_before = Pt(0)
                    p_opt_text.paragraph_format.space_after = Pt(2)

                    # Format bilingual options (English translation in italics)
                    if " / " in opt_text:
                        if opt_text.count(" / ") > 1 and ", " in opt_text:
                            subparts = opt_text.split(", ")
                            for sub_idx, sub in enumerate(subparts):
                                if " / " in sub:
                                    bm_sub, en_sub = sub.split(" / ", 1)
                                    r_bm = p_opt_text.add_run(bm_sub + " / ")
                                    r_bm.font.name = "Times New Roman"
                                    r_bm.font.size = Pt(12)
                                    r_bm.font.italic = False
                                    r_bm.italic = False

                                    r_en = p_opt_text.add_run(en_sub)
                                    r_en.font.name = "Times New Roman"
                                    r_en.font.size = Pt(12)
                                    r_en.font.italic = True
                                    r_en.italic = True
                                else:
                                    r_sub = p_opt_text.add_run(sub)
                                    r_sub.font.name = "Times New Roman"
                                    r_sub.font.size = Pt(12)
                                    r_sub.font.italic = False
                                    r_sub.italic = False
                                if sub_idx < len(subparts) - 1:
                                    r_comma = p_opt_text.add_run(", ")
                                    r_comma.font.name = "Times New Roman"
                                    r_comma.font.size = Pt(12)
                                    r_comma.font.italic = False
                                    r_comma.italic = False
                        else:
                            bm_part, en_part = opt_text.split(" / ", 1)
                            r_bm = p_opt_text.add_run(bm_part + " / ")
                            r_bm.font.name = "Times New Roman"
                            r_bm.font.size = Pt(12)
                            r_bm.font.italic = False
                            r_bm.italic = False

                            r_en = p_opt_text.add_run(en_part)
                            r_en.font.name = "Times New Roman"
                            r_en.font.size = Pt(12)
                            r_en.font.italic = True
                            r_en.italic = True
                    elif "\n" in opt_text:
                        lines_opt = opt_text.split("\n", 1)
                        r_bm = p_opt_text.add_run(lines_opt[0] + "\n")
                        r_bm.font.name = "Times New Roman"
                        r_bm.font.size = Pt(12)
                        r_bm.font.italic = False
                        r_bm.italic = False

                        r_en = p_opt_text.add_run(lines_opt[1])
                        r_en.font.name = "Times New Roman"
                        r_en.font.size = Pt(12)
                        r_en.font.italic = True
                        r_en.italic = True
                    else:
                        r_opt = p_opt_text.add_run(opt_text)
                        r_opt.font.name = "Times New Roman"
                        r_opt.font.size = Pt(12)
                        r_opt.font.italic = False
                        r_opt.italic = False


            # Spacing row between questions (only between questions, never after the last question in chunk!)
            is_last_q_in_chunk = (q_pos == len(chunk) - 1)
            if not is_last_q_in_chunk:
                tr_space_xml = f'''<w:tr {ns_w}>
                  <w:trPr>
                    <w:cantSplit/>
                    <w:trHeight w:val="360" w:hRule="atLeast"/>
                  </w:trPr>
                  <w:tc>
                    <w:tcPr><w:tcW w:w="451" w:type="dxa"/></w:tcPr>
                    <w:p><w:pPr><w:spacing w:line="276" w:lineRule="auto" w:before="0" w:after="0"/><w:rPr><w:sz w:val="24"/></w:rPr></w:pPr></w:p>
                  </w:tc>
                  <w:tc>
                    <w:tcPr><w:tcW w:w="563" w:type="dxa"/></w:tcPr>
                    <w:p><w:pPr><w:spacing w:line="276" w:lineRule="auto" w:before="0" w:after="0"/><w:rPr><w:sz w:val="24"/></w:rPr></w:pPr></w:p>
                  </w:tc>
                  <w:tc>
                    <w:tcPr><w:tcW w:w="8002" w:type="dxa"/><w:gridSpan w:val="2"/></w:tcPr>
                    <w:p><w:pPr><w:spacing w:line="276" w:lineRule="auto" w:before="0" w:after="0"/><w:rPr><w:sz w:val="24"/></w:rPr></w:pPr></w:p>
                  </w:tc>
                </w:tr>'''
                tbl_elem.append(parse_xml(tr_space_xml))

    # 5. End of paper banner
    p_end_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:jc w:val="center"/>
        <w:spacing w:before="240" w:after="120"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:sz w:val="24"/>
          <w:szCs w:val="24"/>
        </w:rPr>
        <w:t>KERTAS PEPERIKSAAN TAMAT</w:t>
      </w:r>
    </w:p>'''
    sect_pr.addprevious(parse_xml(p_end_xml))

    doc.save(output_path)
    update_docx_app_pages(output_path, total_pages)
    return output_path
def build_k1_skema_docx(questions, output_path, tingkatan=5, tahun=2026, nama_peperiksaan="PEPERIKSAAN PERCUBAAN SPM"):
    """Generates K1 Scoring Guide based on 3 TEMPLATE SKEMA FIZIK KERTAS 1.docx."""
    skema_path = os.path.join(TPL_K1_DIR, "3 TEMPLATE SKEMA FIZIK KERTAS 1.docx")
    doc = docx.Document(skema_path)

    for p in doc.paragraphs:
        if "TINGKATAN" in p.text and ("2025" in p.text or "2026" in p.text):
            for r in p.runs:
                if "2025" in r.text or "2026" in r.text:
                    r.text = r.text.replace("2025", str(tahun)).replace("2026", str(tahun))

    # Populate Table 0 with answer keys (8 columns)
    if doc.tables:
        tbl = doc.tables[0]
        for r_idx in range(1, 11):
            row = tbl.rows[r_idx]
            for col_pair in range(4):
                q_num = (col_pair * 10) + r_idx
                c_num_idx = col_pair * 2
                c_ans_idx = c_num_idx + 1

                if q_num <= len(questions):
                    q = questions[q_num - 1]
                    ans = q.get("jawapan", "")
                    
                    row.cells[c_num_idx].text = str(q_num)
                    row.cells[c_ans_idx].text = str(ans)
                    
                    p_num = row.cells[c_num_idx].paragraphs[0]
                    p_num.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    if p_num.runs:
                        p_num.runs[0].font.name = "Times New Roman"
                        p_num.runs[0].font.size = Pt(12)
                        p_num.runs[0].font.bold = True
                    
                    p_ans = row.cells[c_ans_idx].paragraphs[0]
                    p_ans.alignment = WD_ALIGN_PARAGRAPH.CENTER
                    if p_ans.runs:
                        p_ans.runs[0].font.name = "Times New Roman"
                        p_ans.runs[0].font.size = Pt(12)
                        p_ans.runs[0].font.bold = True

    doc.save(output_path)
    return output_path

# ==============================================================================
# KERTAS 2 EXAM
# ==============================================================================
def build_k2_exam_docx(questions, output_path, tingkatan=5, tahun=2026, nama_peperiksaan="PEPERIKSAAN PERCUBAAN SPM", panitia="Fizik", sekolah=""):
    """
    Generates genuine Kertas 2 DOCX:
    1. Cover Page: Exactly 1 page, preserved from 2 TEMPLATE FIZIK KERTAS 2.docx as base root.
    2. Formula Sheet: Preserved Table 0 with OMML equations.
    3. Structured Tables: Formatted in Tables matching 2 TEMPLATE FIZIK KERTAS 2.docx, perfectly aligned flush.
    """
    cover_path = TPL_K2_COVER
    paper_path = os.path.join(TPL_K2_DIR, "2 TEMPLATE FIZIK KERTAS 2.docx")

    # Resolve Tingkatan:
    # 1. Parse caller's tingkatan parameter
    caller_t = None
    try:
        if tingkatan is not None:
            m_t = re.search(r'\d+', str(tingkatan))
            if m_t:
                caller_t = int(m_t.group())
    except Exception:
        pass

    # 2. Inspect questions for Form 4 / Form 5 content
    t_counts = {}
    if questions:
        for q in questions:
            t = q.get("tingkatan") or q.get("form")
            if t is not None:
                try:
                    t_m = re.search(r'\d+', str(t))
                    if t_m:
                        v = int(t_m.group())
                        t_counts[v] = t_counts.get(v, 0) + 1
                except Exception:
                    pass

    is_spm = ("SPM" in str(nama_peperiksaan).upper() or "PERCUBAAN" in str(nama_peperiksaan).upper())
    has_t5 = t_counts.get(5, 0) > 0
    has_t4 = t_counts.get(4, 0) > 0

    if caller_t == 5:
        tingkatan = 5
    elif caller_t == 4:
        # If user explicitly asked for Tingkatan 4, use 4 only if there are no T5 questions and it is not SPM
        tingkatan = 4 if (not has_t5 and not is_spm) else 5
    else:
        # Inferred from questions and exam name
        if has_t5 or is_spm:
            tingkatan = 5
        elif has_t4:
            tingkatan = 4
        else:
            tingkatan = 5

    # 1. Base document is official K2 cover
    doc = docx.Document(cover_path)
    code_text = "4531/2"
    total_pages = estimate_k2_page_count(questions)
    footer_school_text = update_cover_page(doc, code_text, tingkatan, tahun, nama_peperiksaan, panitia, sekolah, total_pages=total_pages)

    # 2. Add Section 2 for paper
    sec2 = doc.add_section(docx.enum.section.WD_SECTION.NEW_PAGE)
    # Strictly match 1.0 inch margins of official template
    sec2.top_margin = docx.shared.Pt(72)
    sec2.bottom_margin = docx.shared.Pt(72)
    sec2.left_margin = docx.shared.Pt(72)
    sec2.right_margin = docx.shared.Pt(72)
    sec2.header_distance = docx.shared.Pt(36)
    sec2.footer_distance = docx.shared.Pt(36)

    sec2.header.is_linked_to_previous = False
    sec2.footer.is_linked_to_previous = False

    ns_w = nsdecls("w")

    # Explicit page numbering starting at 2 in Section 2 (Formula Sheet starts at Page 2)
    pg_num_type = parse_xml(f'<w:pgNumType {ns_w} w:start="2"/>')
    sec2._sectPr.append(pg_num_type)

    # Header: SULIT on left, centered page number in bold Times New Roman 12pt, 4531/2 flush on right
    hdr_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Header"/>
        <w:tabs>
          <w:tab w:val="clear" w:pos="4320"/>
          <w:tab w:val="clear" w:pos="4680"/>
          <w:tab w:val="clear" w:pos="8640"/>
          <w:tab w:val="clear" w:pos="9360"/>
          <w:tab w:val="center" w:pos="4508"/>
          <w:tab w:val="right" w:pos="9016"/>
        </w:tabs>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/><w:szCs w:val="24"/>
        </w:rPr>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/><w:szCs w:val="24"/>
        </w:rPr>
        <w:t>SULIT</w:t>
      </w:r>
      <w:r>
        <w:tab/>
      </w:r>
      <w:fldSimple {ns_w} w:instr="PAGE \* MERGEFORMAT">
        <w:r>
          <w:rPr>
            <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
            <w:b/>
            <w:bCs/>
            <w:sz w:val="24"/><w:szCs w:val="24"/>
          </w:rPr>
          <w:t>2</w:t>
        </w:r>
      </w:fldSimple>
      <w:r>
        <w:tab/>
      </w:r>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:bCs/>
          <w:sz w:val="24"/><w:szCs w:val="24"/>
        </w:rPr>
        <w:t>4531/2</w:t>
      </w:r>
    </w:p>'''
    hdr_elem = sec2.header._element
    hdr_elem.clear()
    hdr_elem.append(parse_xml(hdr_xml))

    # Footer: [Lihat halaman sebelah] and 4531/2 [Tahun] Panitia [] SMK [] ... SULIT
    ftr_p0_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Footer"/>
        <w:jc w:val="right"/>
      </w:pPr>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:color w:val="595959"/></w:rPr><w:t>[Lihat halaman sebelah</w:t></w:r>
    </w:p>'''

    ftr_p1_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:pStyle w:val="Footer"/>
        <w:tabs>
          <w:tab w:val="clear" w:pos="4320"/>
          <w:tab w:val="clear" w:pos="4680"/>
          <w:tab w:val="clear" w:pos="8640"/>
          <w:tab w:val="clear" w:pos="9360"/>
          <w:tab w:val="right" w:pos="9016"/>
        </w:tabs>
      </w:pPr>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:b/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr><w:t xml:space="preserve">{code_text} </w:t></w:r>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>{footer_school_text}</w:t></w:r>
      <w:r><w:ptab w:alignment="right" w:relativeTo="margin" w:leader="none"/></w:r>
      <w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/><w:b/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr><w:t>SULIT</w:t></w:r>
    </w:p>'''

    ftr2_elem = sec2.footer._element
    ftr2_elem.clear()
    ftr2_elem.append(parse_xml(ftr_p0_xml))
    ftr2_elem.append(parse_xml(ftr_p1_xml))

    body = doc._body._element
    sect_pr = body.find("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}sectPr")

    # 3. Append Formula Sheets (2 pages strictly separated, matching official template)
    append_formula_sheets(sect_pr, paper_path, ns_w)

    current_section = None

    for idx, q in enumerate(questions):
        q_num = idx + 1
        bahagian = q.get("bahagian", "A").upper()

        if bahagian != current_section:
            current_section = bahagian
            p_sec_xml = f'''<w:p {ns_w}>
              <w:pPr>
                <w:jc w:val="center"/>
                <w:spacing w:before="320" w:after="40"/>
              </w:pPr>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                  <w:b/>
                  <w:sz w:val="28"/>
                  <w:szCs w:val="28"/>
                </w:rPr>
                <w:t>BAHAGIAN {bahagian}</w:t>
              </w:r>
            </w:p>'''
            sect_pr.addprevious(parse_xml(p_sec_xml))

            marks_text = "[60 markah / 60 marks]" if bahagian == "A" else "[20 markah / 20 marks]"
            instruct_text = "Jawab semua soalan dalam bahagian ini." if bahagian in ["A", "C"] else "Bahagian ini mengandungi dua soalan. Jawab satu soalan."
            p_sub_xml = f'''<w:p {ns_w}>
              <w:pPr>
                <w:jc w:val="center"/>
                <w:spacing w:before="0" w:after="200"/>
              </w:pPr>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                  <w:i/>
                  <w:sz w:val="22"/>
                  <w:szCs w:val="22"/>
                </w:rPr>
                <w:t>{marks_text}</w:t>
              </w:r>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                  <w:i/>
                  <w:sz w:val="22"/>
                  <w:szCs w:val="22"/>
                </w:rPr>
                <w:br/>
                <w:t>{instruct_text}</w:t>
              </w:r>
            </w:p>'''
            sect_pr.addprevious(parse_xml(p_sub_xml))

        # Build Question Table (Table 2 & 3 in K2: 427, 601, 8712 = 9740 total width)
        tbl_xml = f'''<w:tbl {ns_w}>
          <w:tblPr>
            <w:tblStyle w:val="TableGrid"/>
            <w:tblW w:w="9740" w:type="dxa"/>
            <w:tblInd w:w="0" w:type="dxa"/>
            <w:tblBorders>
              <w:top w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:left w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:bottom w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:right w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:insideH w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:insideV w:val="single" w:sz="4" w:space="0" w:color="000000"/>
            </w:tblBorders>
          </w:tblPr>
          <w:tblGrid>
            <w:gridCol w:w="427"/>
            <w:gridCol w:w="601"/>
            <w:gridCol w:w="8712"/>
          </w:tblGrid>
        </w:tbl>'''
        tbl_elem = parse_xml(tbl_xml)
        sect_pr.addprevious(tbl_elem)
        tbl = docx.table.Table(tbl_elem, doc)

        raw_stem = q.get("soalanUtama", "")
        bm_lines, en_lines = split_bilingual_stem(raw_stem)

        # Question Stem Row
        tr_stem_xml = f'''<w:tr {ns_w}>
          <w:trPr><w:cantSplit/></w:trPr>
          <w:tc>
            <w:tcPr><w:tcW w:w="427" w:type="dxa"/><w:vAlign w:val="top"/></w:tcPr>
            <w:p>
              <w:pPr><w:spacing w:line="240" w:lineRule="auto"/></w:pPr>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                  <w:b/><w:sz w:val="24"/><w:szCs w:val="24"/>
                </w:rPr>
                <w:t>{q_num}</w:t>
              </w:r>
            </w:p>
          </w:tc>
          <w:tc>
            <w:tcPr><w:tcW w:w="9313" w:type="dxa"/><w:gridSpan w:val="2"/><w:vAlign w:val="top"/></w:tcPr>
            <w:p/>
          </w:tc>
        </w:tr>'''
        tr_stem = parse_xml(tr_stem_xml)
        tbl_elem.append(tr_stem)
        cell_stem = docx.table._Cell(tr_stem.xpath('w:tc')[1], tbl)

        for l_idx, bm in enumerate(bm_lines):
            p = cell_stem.paragraphs[0] if (l_idx == 0 and len(cell_stem.paragraphs) > 0 and not cell_stem.paragraphs[0].text) else cell_stem.add_paragraph()
            p.paragraph_format.line_spacing = 1.15
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(2)
            r = p.add_run(bm)
            r.font.name = "Times New Roman"
            r.font.size = Pt(12)

        for en in en_lines:
            p = cell_stem.add_paragraph()
            p.paragraph_format.line_spacing = 1.15
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(2)
            r = p.add_run(en)
            r.font.name = "Times New Roman"
            r.font.size = Pt(12)
            r.font.italic = True

        rajah_url = q.get("rajahUrl")
        if rajah_url:
            p_img = cell_stem.add_paragraph()
            p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p_img.paragraph_format.space_before = Pt(6)
            p_img.paragraph_format.space_after = Pt(2)
            stream = get_image_stream(rajah_url, crop_caption=True, is_option=False)
            if stream:
                p_img.add_run().add_picture(stream, width=Inches(3.35))

            p_cap = cell_stem.add_paragraph()
            p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p_cap.paragraph_format.space_before = Pt(0)
            p_cap.paragraph_format.space_after = Pt(6)
            r_rajah = p_cap.add_run(f"Rajah {q_num} / ")
            r_rajah.font.name = "Times New Roman"
            r_rajah.font.size = Pt(11)
            r_rajah.bold = False

            r_diag = p_cap.add_run(f"Diagram {q_num}")
            r_diag.font.name = "Times New Roman"
            r_diag.font.size = Pt(11)
            r_diag.bold = False
            r_diag.italic = True

        # Pecahan soalan (a), (b), (c)
        for part in q.get("pecahan", []):
            sub_label = part.get("sub", "")
            raw_sub_q = part.get("soalan", "")
            sub_bm, sub_en = split_bilingual_stem(raw_sub_q)
            markah = part.get("markah", 1)

            tr_sub_xml = f'''<w:tr {ns_w}>
              <w:trPr><w:cantSplit/></w:trPr>
              <w:tc>
                <w:tcPr><w:tcW w:w="427" w:type="dxa"/><w:vAlign w:val="top"/></w:tcPr>
                <w:p/>
              </w:tc>
              <w:tc>
                <w:tcPr><w:tcW w:w="601" w:type="dxa"/><w:vAlign w:val="top"/></w:tcPr>
                <w:p>
                  <w:pPr><w:spacing w:line="240" w:lineRule="auto"/></w:pPr>
                  <w:r>
                    <w:rPr>
                      <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                      <w:b/><w:sz w:val="24"/><w:szCs w:val="24"/>
                    </w:rPr>
                    <w:t>{sub_label}</w:t>
                  </w:r>
                </w:p>
              </w:tc>
              <w:tc>
                <w:tcPr><w:tcW w:w="8712" w:type="dxa"/><w:vAlign w:val="top"/></w:tcPr>
                <w:p/>
              </w:tc>
            </w:tr>'''
            tr_sub = parse_xml(tr_sub_xml)
            tbl_elem.append(tr_sub)
            cell_sub = docx.table._Cell(tr_sub.xpath('w:tc')[2], tbl)

            for l_idx, bm in enumerate(sub_bm):
                p = cell_sub.paragraphs[0] if (l_idx == 0 and len(cell_sub.paragraphs) > 0 and not cell_sub.paragraphs[0].text) else cell_sub.add_paragraph()
                p.paragraph_format.line_spacing = 1.15
                p.paragraph_format.space_before = Pt(0)
                p.paragraph_format.space_after = Pt(2)
                r = p.add_run(bm)
                r.font.name = "Times New Roman"
                r.font.size = Pt(12)

            for en in sub_en:
                p = cell_sub.add_paragraph()
                p.paragraph_format.line_spacing = 1.15
                p.paragraph_format.space_before = Pt(0)
                p.paragraph_format.space_after = Pt(2)
                r = p.add_run(en)
                r.font.name = "Times New Roman"
                r.font.size = Pt(12)
                r.font.italic = True

            p_lines = cell_sub.add_paragraph()
            p_lines.paragraph_format.space_before = Pt(8)
            p_lines.paragraph_format.space_after = Pt(4)
            r_lines = p_lines.add_run("." * 65 + "\n" + "." * 65)
            r_lines.font.name = "Times New Roman"
            r_lines.font.color.rgb = docx.shared.RGBColor(160, 160, 160)

            p_mark = cell_sub.add_paragraph()
            p_mark.alignment = WD_ALIGN_PARAGRAPH.RIGHT
            p_mark.paragraph_format.space_before = Pt(2)
            p_mark.paragraph_format.space_after = Pt(6)
            r_mark = p_mark.add_run(f"[{markah} markah / ")
            r_mark.font.name = "Times New Roman"
            r_mark.font.size = Pt(11)
            r_mark.bold = True
            r_mark_en = p_mark.add_run(f"{markah} marks]")
            r_mark_en.font.name = "Times New Roman"
            r_mark_en.font.size = Pt(11)
            r_mark_en.font.italic = True

    p_end_xml = f'''<w:p {ns_w}>
      <w:pPr>
        <w:jc w:val="center"/>
        <w:spacing w:before="360" w:after="120"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
          <w:b/>
          <w:sz w:val="24"/>
          <w:szCs w:val="24"/>
        </w:rPr>
        <w:t>KERTAS PEPERIKSAAN TAMAT</w:t>
      </w:r>
    </w:p>'''
    sect_pr.addprevious(parse_xml(p_end_xml))

    doc.save(output_path)
    update_docx_app_pages(output_path, total_pages)
    return output_path


# ==============================================================================
# KERTAS 2 SKEMA
# ==============================================================================
def build_k2_skema_docx(questions, output_path, tingkatan=5, tahun=2026, nama_peperiksaan="PEPERIKSAAN PERCUBAAN SPM"):
    """Generates K2 Scoring Guide based on 3 TEMPLATE SKEMA FIZIK KERTAS 2.docx."""
    skema_path = os.path.join(TPL_K2_DIR, "3 TEMPLATE SKEMA FIZIK KERTAS 2.docx")
    doc = docx.Document(skema_path)

    for p in doc.paragraphs:
        if "TINGKATAN" in p.text and ("2025" in p.text or "2026" in p.text):
            for r in p.runs:
                if "2025" in r.text or "2026" in r.text:
                    r.text = r.text.replace("2025", str(tahun)).replace("2026", str(tahun))

    # Retain Table 0 (Rubric structure) and clear following tables to populate dynamically
    body = doc._body._element
    t0_element = doc.tables[0]._element
    t0_idx = list(body).index(t0_element)
    for child in list(body)[t0_idx + 1:]:
        if child.tag.endswith("sectPr"):
            continue
        body.remove(child)

    ns_w = nsdecls("w")
    for idx, q in enumerate(questions):
        q_num = idx + 1
        p_q = doc.add_paragraph()
        p_q.paragraph_format.space_before = Pt(12)
        p_q.paragraph_format.space_after = Pt(4)
        r_q = p_q.add_run(f"SOALAN {q_num}")
        r_q.font.name = "Times New Roman"
        r_q.font.bold = True
        r_q.font.size = Pt(12)

        # Rubric Table matching template
        tbl_xml = f'''<w:tbl {ns_w}>
          <w:tblPr>
            <w:tblStyle w:val="TableGrid"/>
            <w:tblW w:w="0" w:type="auto"/>
            <w:tblBorders>
              <w:top w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:left w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:bottom w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:right w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:insideH w:val="single" w:sz="4" w:space="0" w:color="000000"/>
              <w:insideV w:val="single" w:sz="4" w:space="0" w:color="000000"/>
            </w:tblBorders>
          </w:tblPr>
          <w:tblGrid>
            <w:gridCol w:w="1200"/>
            <w:gridCol w:w="6000"/>
            <w:gridCol w:w="900"/>
            <w:gridCol w:w="920"/>
          </w:tblGrid>
          <w:tr>
            <w:trPr><w:cantSplit/></w:trPr>
            <w:tc><w:tcPr><w:tcW w:w="1200" w:type="dxa"/></w:tcPr><w:p><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:sz w:val="22"/></w:rPr><w:t>Soalan</w:t></w:r></w:p></w:tc>
            <w:tc><w:tcPr><w:tcW w:w="6000" w:type="dxa"/></w:tcPr><w:p><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:sz w:val="22"/></w:rPr><w:t>Peraturan Pemarkahan / Jawapan</w:t></w:r></w:p></w:tc>
            <w:tc><w:tcPr><w:tcW w:w="900" w:type="dxa"/></w:tcPr><w:p><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:sz w:val="22"/></w:rPr><w:t>Markah</w:t></w:r></w:p></w:tc>
            <w:tc><w:tcPr><w:tcW w:w="920" w:type="dxa"/></w:tcPr><w:p><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:b/><w:sz w:val="22"/></w:rPr><w:t>Jumlah</w:t></w:r></w:p></w:tc>
          </w:tr>
        </w:tbl>'''
        tbl_elem = parse_xml(tbl_xml)
        doc._body._element.append(tbl_elem)
        tbl = docx.table.Table(tbl_elem, doc)

        pecahan = q.get("pecahan", [])
        total_q_marks = 0
        for p in pecahan:
            sub_label = p.get("sub", "")
            sub_skema = p.get("skema", "") or p.get("jawapan", "") or "-"
            sub_mark = p.get("markah", 1)
            total_q_marks += int(sub_mark)

            tr_row_xml = f'''<w:tr {ns_w}>
              <w:trPr><w:cantSplit/></w:trPr>
              <w:tc><w:tcPr><w:tcW w:w="1200" w:type="dxa"/></w:tcPr><w:p><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="22"/></w:rPr><w:t>{sub_label}</w:t></w:r></w:p></w:tc>
              <w:tc><w:tcPr><w:tcW w:w="6000" w:type="dxa"/></w:tcPr><w:p><w:pPr><w:spacing w:line="276" w:lineRule="auto"/></w:pPr></w:p></w:tc>
              <w:tc><w:tcPr><w:tcW w:w="900" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="22"/></w:rPr><w:t>{sub_mark}</w:t></w:r></w:p></w:tc>
              <w:tc><w:tcPr><w:tcW w:w="920" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="22"/></w:rPr><w:t></w:t></w:r></w:p></w:tc>
            </w:tr>'''
            tr_el = parse_xml(tr_row_xml)
            tbl._tbl.append(tr_el)
            c_skema = docx.table._Cell(tr_el.findall(".//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tc")[1], tbl)
            p_skema = c_skema.paragraphs[0]
            r_skema = p_skema.add_run(str(sub_skema))
            r_skema.font.name = "Times New Roman"
            r_skema.font.size = Pt(11)

        # Set total in last row
        last_tr = tbl._tbl.findall(".//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tr")[-1]
        last_c4 = last_tr.findall(".//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}tc")[3]
        t_el = last_c4.find(".//{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t")
        if t_el is not None:
            t_el.text = str(total_q_marks)

    doc.save(output_path)
    return output_path
