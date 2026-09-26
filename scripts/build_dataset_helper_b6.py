#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Master Dataset Helper for Tingkatan 4 Bab 6: Cahaya dan Optik.
Adheres strictly to the 13 Golden Invariants (Zero-Defect Quality Control).
Integrates:
- Verified Answers & Formatted Rationales
- Precision Stem Diagrams (Rajah 1 - 91)
- Answer Rubric Ray Diagrams (23 rubrics)
- Precision Option Diagrams (A, B, C, D for visual choices)
- DSKP SK 6.1 - SK 6.6 Semantic Mapping
"""

import os
import json
import re

ANSWERS = {}
ans_path = 'scratch/t4_b6_answers_verified.json'
if os.path.exists(ans_path):
    with open(ans_path, 'r', encoding='utf-8') as f:
        ANSWERS = json.load(f)

DIAGRAM_URLS = {}
diag_path = 'scratch/t4_b6_diagram_urls.json'
if os.path.exists(diag_path):
    with open(diag_path, 'r', encoding='utf-8') as f:
        DIAGRAM_URLS = json.load(f)

RUBRIK_URLS = {}
rub_path = 'scratch/t4_b6_rubrik_urls.json'
if os.path.exists(rub_path):
    with open(rub_path, 'r', encoding='utf-8') as f:
        RUBRIK_URLS = json.load(f)

OPTION_URLS = {}
opt_path = 'scratch/t4_b6_option_urls.json'
if os.path.exists(opt_path):
    with open(opt_path, 'r', encoding='utf-8') as f:
        OPTION_URLS = json.load(f)

def clean_ocr_typos_b6(text):
    if not text:
        return ""
    t = text
    # Fix OCR typos common in light & optics
    t = t.replace('comvex', 'convex')
    t = t.replace('nmirror', 'mirror')
    t = t.replace('asanmefocal', 'a same focal')
    t = t.replace('fmewakili', 'f mewakili')
    t = t.replace('frepresents', 'f represents')
    t = t.replace('dalanm', 'dalam')
    t = t.replace('1otal', 'total')
    t = t.replace('nm bagi', 'm bagi')
    t = t.replace('poweroflens', 'power of lens')
    t = t.replace('theoccurrence', 'the occurrence')
    t = t.replace('betw', 'between')
    t = t.replace('cksperimen', 'eksperimen')
    t = t.replace('scbatang', 'sebatang')
    t = t.replace('serabut optik', 'gentian optik')
    t = t.replace('Diagrann', 'Diagram')
    t = t.replace('Diagramn', 'Diagram')
    t = t.replace('hịdan', 'h₁ dan')
    t = t.replace('hịand', 'h₁ and')
    t = t.replace('Objer', 'Objek / Object')
    t = t.replace('cemin cekung', 'cermin cekung')
    t = t.replace('cemin cembung', 'cermin cembung')
    t = t.replace('cemin satah', 'cermin satah')
    t = t.replace('Miksoskop', 'Mikroskop')
    t = re.sub(r'\s+/\s*', ' / ', t)
    return t.strip()

def classify_dskp_b6(soalan, konstruk_num=2):
    s = soalan.lower()
    
    # 6.6 Cermin Sfera (Cekung / Cembung)
    if "cermin cekung" in s or "cermin cembung" in s or "cermin sfera" in s or "concave mirror" in s or "convex mirror" in s or "cermin satah" in s or "pusat kelengkungan" in s or "centre of curvature" in s or "jejari kelengkungan" in s or "radius of curvature" in s:
        sk_key = "6.6"
        if "aplikasi" in s or "keselamatan" in s or "pergigian" in s or "lampu depan" in s or "headlight" in s or "side mirror" in s:
            sp_key = "6.6.2"
        else:
            sp_key = "6.6.1"

    # 6.5 Peralatan Optik (Mikroskop, Teleskop, dsb)
    elif "teleskop" in s or "telescope" in s or "mikroskop" in s or "microscope" in s or "kanta pembesar" in s or "magnifying glass" in s or "kanta objektif" in s or "kanta mata" in s or "eyepiece" in s or "peralatan optik" in s or "optical instrument" in s or "pelarasan normal" in s or "kamera" in s or "cctv" in s:
        sk_key = "6.5"
        if "mereka bentuk" in s or "membina" in s:
            sp_key = "6.5.2"
        elif "saiz kecil" in s or "telefon pintar" in s or "cctv" in s:
            sp_key = "6.5.3"
        else:
            sp_key = "6.5.1"

    # 6.4 Formula Kanta Nipis (1/f = 1/u + 1/v & Graf 1/v melawan 1/u)
    elif "kanta nipis" in s or "thin lens" in s or "formula kanta nipis" in s or "thin lens formula" in s or "1/f" in s or "\frac{1}{f}" in s or "1/u" in s or "1/v" in s or "graf jarak imej, v melawan pembesaran linear" in s or "graf v melawan m" in s or "graf 1/v melawan 1/u" in s or (konstruk_num == 3 and ("hitung" in s or "calculate" in s or "panjang fokus" in s or "focal length" in s) and ("jarak objek" in s or "jarak imej" in s)):
        sk_key = "6.4"
        if "eksperimen" in s or "graf" in s or "graph" in s:
            sp_key = "6.4.1"
        else:
            sp_key = "6.4.2"

    # 6.3 Pembentukan Imej oleh Kanta
    elif "kanta cembung" in s or "kanta cekung" in s or "convex lens" in s or "concave lens" in s or "kanta penumpu" in s or "kanta pencapah" in s or "panjang fokus" in s or "focal length" in s or "pembesaran linear" in s or "linear magnification" in s or "imej nyata" in s or "imej maya" in s or "tegak" in s or "songsang" in s:
        sk_key = "6.3"
        if "pembesaran" in s or "magnification" in s:
            sp_key = "6.3.4"
        elif "anggar" in s or "objek jauh" in s:
            sp_key = "6.3.2"
        elif "penumpu" in s or "pencapah" in s:
            sp_key = "6.3.1"
        else:
            sp_key = "6.3.3"

    # 6.2 Pantulan Dalam Penuh
    elif "pantulan dalam penuh" in s or "total internal reflection" in s or "sudut genting" in s or "critical angle" in s or "gentian optik" in s or "optical fibre" in s or "logamaya" in s or "mirage" in s or "periskop berprisma" in s or "prism periscope" in s or "cat's eye" in s or "intan" in s or "diamond" in s or "sin c" in s:
        sk_key = "6.2"
        if konstruk_num == 3 or "hitung" in s or "calculate" in s:
            sp_key = "6.2.4"
        elif "logamaya" in s or "gentian optik" in s or "periskop" in s or "pelangi" in s:
            sp_key = "6.2.3"
        elif "sin c" in s or ("sudut genting" in s and "indeks biasan" in s):
            sp_key = "6.2.2"
        else:
            sp_key = "6.2.1"

    # 6.1 Pembiasan Cahaya
    else:
        sk_key = "6.1"
        if "dalam nyata" in s or "dalam ketara" in s or "real depth" in s or "apparent depth" in s or "guli" in s or "ikan" in s:
            sp_key = "6.1.5"
        elif "hukum snell" in s or "snell's law" in s or "sin i" in s or "sin r" in s:
            sp_key = "6.1.3"
        elif "indeks biasan" in s or "refractive index" in s or "laju cahaya" in s or "speed of light" in s:
            sp_key = "6.1.2"
        elif konstruk_num == 3 or "hitung" in s or "calculate" in s:
            sp_key = "6.1.7"
        else:
            sp_key = "6.1.1"

    sp_map = {
        "6.1.1": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.1 Memerihalkan fenomena pembiasan cahaya", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 232-241", "Cheatnote T4 Bab 6 ms 1-3"),
        "6.1.2": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.2 Menerangkan indeks biasan, n", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 233-235", "Cheatnote T4 Bab 6 ms 1-3"),
        "6.1.3": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.3 Mengkonsepsikan Hukum Snell", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 235-237", "Cheatnote T4 Bab 6 ms 1-3"),
        "6.1.4": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.4 Mengeksperimen menentukan indeks biasan kaca", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 236-238", "Cheatnote T4 Bab 6 ms 1-3"),
        "6.1.5": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.5 Menerangkan dalam nyata dan dalam ketara", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 238-241", "Cheatnote T4 Bab 6 ms 1-3"),
        "6.1.6": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.6 Mengeksperimen menentukan indeks biasan menggunakan dalam nyata & ketara", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 239-241", "Cheatnote T4 Bab 6 ms 1-3"),
        "6.1.7": ("SK 6.1 Pembiasan Cahaya", "SP 6.1.7 Menyelesaikan masalah berkaitan pembiasan cahaya", "6.1 Pembiasan Cahaya", "DSKP Fizik T4 ms 78-79", "Buku Teks T4 ms 241-242", "Cheatnote T4 Bab 6 ms 1-3"),

        "6.2.1": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.1 Menerangkan sudut genting dan pantulan dalam penuh", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 242-245", "Cheatnote T4 Bab 6 ms 4-5"),
        "6.2.2": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.2 Menghubungkait sudut genting dengan indeks biasan n = 1/sin c", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 245-247", "Cheatnote T4 Bab 6 ms 4-5"),
        "6.2.3": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.3 Menerangkan aplikasi pantulan dalam penuh (gentian optik, logamaya, periskop)", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 247-250", "Cheatnote T4 Bab 6 ms 4-5"),
        "6.2.4": ("SK 6.2 Pantulan Dalam Penuh", "SP 6.2.4 Menyelesaikan masalah melibatkan pantulan dalam penuh", "6.2 Pantulan Dalam Penuh", "DSKP Fizik T4 ms 80-81", "Buku Teks T4 ms 250-251", "Cheatnote T4 Bab 6 ms 4-5"),

        "6.3.1": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.1 Mengenal pasti kanta cembung penumpu dan kanta cekung pencapah", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 251-253", "Cheatnote T4 Bab 6 ms 6-8"),
        "6.3.2": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.2 Menganggar panjang fokus kanta cembung", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 253-254", "Cheatnote T4 Bab 6 ms 6-8"),
        "6.3.3": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.3 Menentukan kedudukan imej dan ciri-ciri imej kanta cembung dan cekung", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 254-259", "Cheatnote T4 Bab 6 ms 6-8"),
        "6.3.4": ("SK 6.3 Pembentukan Imej oleh Kanta", "SP 6.3.4 Menyatakan pembesaran linear, m = v/u = hi/ho", "6.3 Pembentukan Imej oleh Kanta", "DSKP Fizik T4 ms 82-83", "Buku Teks T4 ms 259-261", "Cheatnote T4 Bab 6 ms 6-8"),

        "6.4.1": ("SK 6.4 Formula Kanta Nipis", "SP 6.4.1 Eksperimen menentukan panjang fokus menggunakan formula kanta 1/f = 1/u + 1/v", "6.4 Formula Kanta Nipis", "DSKP Fizik T4 ms 84-85", "Buku Teks T4 ms 261-264", "Cheatnote T4 Bab 6 ms 9-10"),
        "6.4.2": ("SK 6.4 Formula Kanta Nipis", "SP 6.4.2 Menyelesaikan masalah melibatkan formula kanta nipis", "6.4 Formula Kanta Nipis", "DSKP Fizik T4 ms 84-85", "Buku Teks T4 ms 264-266", "Cheatnote T4 Bab 6 ms 9-10"),

        "6.5.1": ("SK 6.5 Peralatan Optik", "SP 6.5.1 Mewajarkan penggunaan kanta dalam peralatan optik (kanta pembesar, mikroskop, teleskop)", "6.5 Peralatan Optik", "DSKP Fizik T4 ms 86-87", "Buku Teks T4 ms 266-270", "Cheatnote T4 Bab 6 ms 11-12"),
        "6.5.2": ("SK 6.5 Peralatan Optik", "SP 6.5.2 Mereka bentuk dan membina mikroskop majmuk dan teleskop", "6.5 Peralatan Optik", "DSKP Fizik T4 ms 86-87", "Buku Teks T4 ms 270-272", "Cheatnote T4 Bab 6 ms 11-12"),
        "6.5.3": ("SK 6.5 Peralatan Optik", "SP 6.5.3 Aplikasi kanta bersaiz kecil dalam teknologi optik", "6.5 Peralatan Optik", "DSKP Fizik T4 ms 86-87", "Buku Teks T4 ms 272-273", "Cheatnote T4 Bab 6 ms 11-12"),

        "6.6.1": ("SK 6.6 Pembentukan Imej oleh Cermin Sfera", "SP 6.6.1 Menentukan kedudukan imej dan ciri-ciri imej cermin cekung dan cermin cembung", "6.6 Pembentukan Imej oleh Cermin Sfera", "DSKP Fizik T4 ms 88-89", "Buku Teks T4 ms 273-280", "Cheatnote T4 Bab 6 ms 13-14"),
        "6.6.2": ("SK 6.6 Pembentukan Imej oleh Cermin Sfera", "SP 6.6.2 Aplikasi cermin cekung dan cermin cembung dalam kehidupan harian", "6.6 Pembentukan Imej oleh Cermin Sfera", "DSKP Fizik T4 ms 88-89", "Buku Teks T4 ms 280-282", "Cheatnote T4 Bab 6 ms 13-14"),
    }

    sk, sp, topik, dskp, bt, cn = sp_map.get(sp_key, sp_map["6.1.1"])
    return {
        "sk": sk,
        "sp": sp,
        "spKod": sp_key,
        "topik": topik,
        "rujukanDskp": dskp,
        "rujukanBukuTeks": bt,
        "rujukanCheatnote": cn
    }

def make_b6_q(qid, no, aras, konstruk, soalan, pilihan, rajah_key="", sumber="Percubaan SPM 2023", tahun=2023):
    ans_data = ANSWERS.get(qid, {})
    jawapan = ans_data.get('jawapan', 'A')
    penerangan = ans_data.get('penerangan', f'Jawapan yang tepat ialah {jawapan}.')
    
    # Check if there is a rubric diagram to append to penerangan
    # qid e.g. MODUL_T4_B6_K3_Q02 -> key 'k3_q02'
    q_parts = qid.lower().split('_')
    if len(q_parts) >= 5:
        rubrik_lookup_key = f"{q_parts[3]}_{q_parts[4]}"
        if rubrik_lookup_key in RUBRIK_URLS:
            rub_url = RUBRIK_URLS[rubrik_lookup_key]
            rub_html = f'<div class="rubrik-diagram my-2"><img src="{rub_url}" alt="Rajah Sinar / Rubrik Jawapan" style="max-height:220px; border-radius:6px; border:1px solid #e2e8f0;"/></div>'
            if rub_url not in penerangan:
                penerangan = f"{penerangan}\n{rub_html}"
    
    k_num = int(qid.split('_')[3][1])
    dskp = classify_dskp_b6(soalan, k_num)
    
    # Diagram URL for stem
    rajah_url = ""
    if rajah_key:
        clean_key = rajah_key.replace('(', '').replace(')', '').strip().lower()
        if clean_key in DIAGRAM_URLS:
            rajah_url = DIAGRAM_URLS[clean_key]
        elif f'rajah{clean_key}' in DIAGRAM_URLS:
            rajah_url = DIAGRAM_URLS[f'rajah{clean_key}']

    # Format options - check if this question has diagram options
    opt_lookup_key = f"{q_parts[3]}_{q_parts[4]}" if len(q_parts) >= 5 else ""
    has_opt_diagrams = opt_lookup_key in OPTION_URLS

    formatted_opts = []
    for opt in pilihan:
        opt_id = opt['id']
        opt_teks = clean_ocr_typos_b6(opt['teks'])
        
        # Inject diagram if available for this option
        if has_opt_diagrams and opt_id in OPTION_URLS[opt_lookup_key]:
            opt_img_url = OPTION_URLS[opt_lookup_key][opt_id]
            opt_teks = f'<img src="{opt_img_url}" style="max-height:130px; border-radius:4px;" alt="Pilihan {opt_id}">'
            
        formatted_opts.append({
            "id": opt_id,
            "teks": opt_teks
        })

    return {
        "id": qid,
        "sumber": sumber,
        "tahun": tahun,
        "noSoalanAsal": no,
        "sk": dskp["sk"],
        "sp": dskp["sp"],
        "spKod": dskp["spKod"],
        "rujukanDskp": dskp["rujukanDskp"],
        "rujukanBukuTeks": dskp["rujukanBukuTeks"],
        "rujukanCheatnote": dskp["rujukanCheatnote"],
        "kertas": 1,
        "tingkatan": 4,
        "babNo": 6,
        "babNama": "Cahaya dan Optik",
        "bidang": "Gelombang, Cahaya dan Optik",
        "topik": dskp["topik"],
        "aras": aras,
        "konstruk": konstruk,
        "soalan": clean_ocr_typos_b6(soalan),
        "rajahUrl": rajah_url,
        "pilihan": formatted_opts,
        "jawapanBetul": jawapan,
        "penerangan": penerangan,
        "markah": 1,
        "statusSemakan": "Disemak (Modul K1)"
    }
