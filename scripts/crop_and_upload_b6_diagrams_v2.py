#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Precision Diagram Cropping & R2 Upload Pipeline
Tingkatan 4 Bab 6: Cahaya dan Optik (Light and Optics)
Strict Adherence to 13 Golden Invariants:
- Zero Caption Leakage (Rajah / Diagram captions excluded)
- Zero Stem Text Leakage (English translation & source tags excluded)
- Zero Vertical Column Line Leakage (safe column margins & edge line stripping)
- 300 DPI WebP Rendering with 95 Quality
"""

import os
import sys
sys.path.insert(0, ".")
import io
import re
import json
import fitz
import numpy as np
from PIL import Image
import pytesseract

pytesseract.pytesseract.tesseract_cmd = '/Users/halimroslan/.local/bin/tesseract'

from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 6 T4.pdf'
LOCAL_DIR = 'assets/diagrams/modul_konstruk_t4/b6'
os.makedirs(LOCAL_DIR, exist_ok=True)

R2_BASE_URL = 'https://pub-833572f7cc244a0d9627cef82c840538.r2.dev'

def get_page_divider(page):
    pix = page.get_pixmap(dpi=72)
    arr = np.array(Image.frombytes('RGB', [pix.width, pix.height], pix.samples).convert('L'))
    h, w = arr.shape
    vlines = []
    for x in range(270, 325):
        if np.sum(arr[80:h-80, x] < 180) > (h - 160) * 0.40:
            vlines.append(x)
    return int(np.mean(vlines)) if vlines else 295

def strip_edge_vertical_lines(arr, thresh=200):
    h, w = arr.shape
    new_arr = arr.copy()
    for x in range(min(35, w//4)):
        if np.sum(arr[:, x] < thresh) > h * 0.55:
            new_arr[:, max(0, x-2):min(w, x+3)] = 255
    for x in range(max(0, w - 35), w):
        if np.sum(arr[:, x] < thresh) > h * 0.55:
            new_arr[:, max(0, x-2):min(w, x+3)] = 255
    return new_arr

def clean_crop_diagram(pil_img, thresh=220, pad=10):
    gray = pil_img.convert('L')
    arr = np.array(gray)
    arr = strip_edge_vertical_lines(arr)
    dark_mask = arr < thresh
    if not np.any(dark_mask):
        return pil_img
    y_indices, x_indices = np.where(dark_mask)
    x_min, x_max = max(0, x_indices.min() - pad), min(arr.shape[1], x_indices.max() + pad)
    y_min, y_max = max(0, y_indices.min() - pad), min(arr.shape[0], y_indices.max() + pad)
    return Image.fromarray(arr).crop((x_min, y_min, x_max, y_max))

def check_caption_leakage(pil_img):
    w, h = pil_img.size
    bottom_crop = pil_img.crop((0, int(h * 0.70), w, h))
    t = pytesseract.image_to_string(bottom_crop, config='--psm 6').lower()
    return 'rajah' in t or 'diagram' in t or 'rajalh' in t

def main():
    doc = fitz.open(PDF_PATH)
    print(f'Opened PDF: {PDF_PATH} ({len(doc)} pages)')
    
    captions = {}
    for p_num in range(len(doc)):
        page = doc[p_num]
        blocks = page.get_text('blocks')
        for b in blocks:
            t = b[4].strip()
            norm = re.sub(r'\s+', ' ', t).replace('1 ll', '111').replace('I12', '112').replace('8l', '81').replace('8I', '81').replace('9l', '91').replace('9I', '91')
            if ('rajah' in norm.lower() or 'rajalh' in norm.lower() or 'rujah' in norm.lower() or 'diagram' in norm.lower()) \
               and 'menunjukkan' not in norm.lower() and 'shows' not in norm.lower() and ' show ' not in norm.lower() and len(norm) < 60:
                m = re.search(r'(?:Rajah|Rajalh|Rujah|Diagram)\s*([0-9]+[a-z]?(?:\s*\([a-z]\))?)', norm, re.IGNORECASE)
                if m:
                    r_key = m.group(1).replace(' ', '')
                    is_right = b[0] >= 285
                    if r_key not in captions:
                        captions[r_key] = {
                            'page': p_num + 1,
                            'is_right': is_right,
                            'cap_bbox': b[:4],
                            'cap_text': norm
                        }

    print(f'Total captions located: {len(captions)}')
    
    urls = {}
    json_path = 'scratch/t4_b6_diagram_urls.json'
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            urls = json.load(f)

    all_keys = []
    for i in range(1, 92):
        si = str(i)
        if si in captions:
            all_keys.append(si)
        if f'{i}(a)' in captions:
            all_keys.append(f'{i}(a)')
        if f'{i}(b)' in captions:
            all_keys.append(f'{i}(b)')

    print(f'Diagram keys to process: {len(all_keys)}')

    for r_key in all_keys:
        rajah_key = f'rajah{r_key}'.replace('(', '').replace(')', '')
        print(f'Processing Rajah {r_key}...', end=' ', flush=True)

        c_info = captions[r_key]
        p_idx = c_info['page'] - 1
        page = doc[p_idx]
        is_right = c_info['is_right']
        cap_y0 = c_info['cap_bbox'][1]

        # Calculate exact page divider coordinate
        x_div = get_page_divider(page)

        # Detect horizontal boundaries strictly outside divider line
        if is_right:
            x0 = max(x_div + 6.0, 316.0)
            x1 = 565.0
        else:
            x0 = 35.0
            x1 = min(x_div - 6.0, 276.0)

        # Word-level detection for stem text above caption
        words = page.get_text('words')
        stem_y_list = []
        for w in words:
            w_right = w[0] >= 285
            if w_right == is_right and w[3] < cap_y0:
                t = w[4].strip()
                # If word belongs to stem, question number, or source tag
                if re.search(r'(\d{1,2}\.|menunjukkan|shows|dilihat|keadaan|perkataan|rajah|diagram|\d{4}|\:)', t, re.IGNORECASE):
                    stem_y_list.append(w[3])

        if stem_y_list:
            y0 = max(stem_y_list) + 3.0
        else:
            blocks = page.get_text('blocks')
            stem_blocks = []
            for b in blocks:
                b_right = b[0] >= 285
                if b_right == is_right and b[3] < cap_y0:
                    t = b[4].strip()
                    if re.search(r'(menunjukkan|shows)', t, re.IGNORECASE) or re.search(r'\([A-Za-z\s]+(:\s*Set\s*\d+)?:\s*\d{4}\)', t) or re.search(r'^\d{1,3}[\.\,]\s*(Rajah|Diagram)', t, re.IGNORECASE):
                        stem_blocks.append(b)
            if stem_blocks:
                y0 = max(b[3] for b in stem_blocks) + 3.0
            else:
                y0 = 45.0

        # Special overrides for diagrams where text layout requires custom bounds
        if r_key == '21': # K2 Q33 AUDIT magnifying glass
            y0 = 262.0
            y1 = 344.0
        elif r_key == '59': # K3 Q24 marble in glass container
            x0 = 316.0
            y0 = 367.0
            x1 = 560.0
            y1 = 508.0
        elif r_key == '61': # K3 Q27 ray directed into glass block
            x0 = 35.0
            y0 = 576.0
            x1 = 276.0
            y1 = 694.0
        elif r_key == '90(b)':
            x0 = 35.0
            y0 = 305.0
            x1 = 276.0
            y1 = 415.0
        elif r_key == '91(a)':
            x0 = 316.0
            y0 = 55.0
            x1 = 435.0
            y1 = 163.0
        elif r_key == '91(b)':
            x0 = 440.0
            y0 = 55.0
            x1 = 560.0
            y1 = 163.0
        else:
            y1 = cap_y0 - 3.0

        if y0 >= y1 - 10.0:
            y0 = max(45.0, y1 - 150.0)

        clip = fitz.Rect(x0, y0, x1, y1)
        pix = page.get_pixmap(clip=clip, dpi=300)
        final_img = clean_crop_diagram(Image.open(io.BytesIO(pix.tobytes('png'))))

        if check_caption_leakage(final_img):
            y1 = cap_y0 - 15.0
            clip = fitz.Rect(x0, y0, x1, y1)
            pix = page.get_pixmap(clip=clip, dpi=300)
            final_img = clean_crop_diagram(Image.open(io.BytesIO(pix.tobytes('png'))))

        local_filename = f't4_b6_{rajah_key}_v2.webp'
        local_filepath = os.path.join(LOCAL_DIR, local_filename)
        final_img.save(local_filepath, format='WEBP', quality=95)

        with open(local_filepath, 'rb') as f:
            webp_bytes = f.read()
        r2_key = f'diagrams/modul_konstruk_t4/b6/{local_filename}'
        upload_bytes(webp_bytes, r2_key, content_type='image/webp')

        public_url = f'{R2_BASE_URL}/{r2_key}'
        urls[rajah_key] = public_url
        print(f'Done ({final_img.width}x{final_img.height}) -> {public_url}')

    # Composite diagrams
    if '88(a)' in captions and '88(b)' in captions:
        img_a = Image.open(os.path.join(LOCAL_DIR, 't4_b6_rajah88a_v2.webp'))
        img_b = Image.open(os.path.join(LOCAL_DIR, 't4_b6_rajah88b_v2.webp'))
        tot_w = max(img_a.width, img_b.width)
        tot_h = img_a.height + img_b.height + 20
        combined = Image.new('RGB', (tot_w, tot_h), (255, 255, 255))
        combined.paste(img_a, ((tot_w - img_a.width)//2, 0))
        combined.paste(img_b, ((tot_w - img_b.width)//2, img_a.height + 20))
        c_path = os.path.join(LOCAL_DIR, 't4_b6_rajah88_v2.webp')
        combined.save(c_path, format='WEBP', quality=95)
        with open(c_path, 'rb') as f:
            upload_bytes(f.read(), 'diagrams/modul_konstruk_t4/b6/t4_b6_rajah88_v2.webp', content_type='image/webp')
        urls['rajah88'] = f'{R2_BASE_URL}/diagrams/modul_konstruk_t4/b6/t4_b6_rajah88_v2.webp'
        print('Created and uploaded combined Rajah 88!')

    if '90(a)' in captions and '90(b)' in captions:
        img_a = Image.open(os.path.join(LOCAL_DIR, 't4_b6_rajah90a_v2.webp'))
        img_b = Image.open(os.path.join(LOCAL_DIR, 't4_b6_rajah90b_v2.webp'))
        tot_w = max(img_a.width, img_b.width)
        tot_h = img_a.height + img_b.height + 20
        combined = Image.new('RGB', (tot_w, tot_h), (255, 255, 255))
        combined.paste(img_a, ((tot_w - img_a.width)//2, 0))
        combined.paste(img_b, ((tot_w - img_b.width)//2, img_a.height + 20))
        c_path = os.path.join(LOCAL_DIR, 't4_b6_rajah90_v2.webp')
        combined.save(c_path, format='WEBP', quality=95)
        with open(c_path, 'rb') as f:
            upload_bytes(f.read(), 'diagrams/modul_konstruk_t4/b6/t4_b6_rajah90_v2.webp', content_type='image/webp')
        urls['rajah90'] = f'{R2_BASE_URL}/diagrams/modul_konstruk_t4/b6/t4_b6_rajah90_v2.webp'
        print('Created and uploaded combined Rajah 90!')

    if '91(a)' in captions and '91(b)' in captions:
        img_a = Image.open(os.path.join(LOCAL_DIR, 't4_b6_rajah91a_v2.webp'))
        img_b = Image.open(os.path.join(LOCAL_DIR, 't4_b6_rajah91b_v2.webp'))
        tot_w = max(img_a.width, img_b.width)
        tot_h = img_a.height + img_b.height + 20
        combined = Image.new('RGB', (tot_w, tot_h), (255, 255, 255))
        combined.paste(img_a, ((tot_w - img_a.width)//2, 0))
        combined.paste(img_b, ((tot_w - img_b.width)//2, img_a.height + 20))
        c_path = os.path.join(LOCAL_DIR, 't4_b6_rajah91_v2.webp')
        combined.save(c_path, format='WEBP', quality=95)
        with open(c_path, 'rb') as f:
            upload_bytes(f.read(), 'diagrams/modul_konstruk_t4/b6/t4_b6_rajah91_v2.webp', content_type='image/webp')
        urls['rajah91'] = f'{R2_BASE_URL}/diagrams/modul_konstruk_t4/b6/t4_b6_rajah91_v2.webp'
        print('Created and uploaded combined Rajah 91!')

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(urls, f, indent=2)
    print(f'\nTotal diagram URLs saved to {json_path}: {len(urls)}')

if __name__ == '__main__':
    main()
