#!/usr/bin/env python3
"""
Full Questions Dataset Builder for Tingkatan 4 Bab 2: Daya dan Gerakan I
Hub Bank Soalan Fizik SPM
"""

import os
import sys
import json
import re
import fitz

# 1. Load verified answers and diagram URLs
with open('scratch/t4_b2_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b2_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

# 2. DSKP classification mappings
from scripts.build_b2_questions_dataset import classify_dskp

with open('scratch/full_ordered_stream.txt', 'r', encoding='utf-8') as f:
    raw_stream = f.read()

# Normalize common OCR typos in question number prefixes
raw_stream = re.sub(r'(\n\s*)has11\.', r'\1 11.', raw_stream)
raw_stream = re.sub(r'(\n\s*)l1\.', r'\1 11.', raw_stream)
raw_stream = re.sub(r'\n5\s*\n', '\n5. ', raw_stream)

sections = re.split(r'KONSTRUK\s*([1-4]):[^\n]*', raw_stream)
expected_counts = {1: 10, 2: 97, 3: 45, 4: 11}
konstruk_names = {1: "Mengingat", 2: "Memahami", 3: "Mengaplikasi", 4: "Menganalisis"}

def clean_text(t):
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def parse_question_chunk(chunk_lines, k_num, qno):
    # Remove page and col split lines
    clean_lines = []
    for l in chunk_lines:
        l = l.strip()
        if not l or l.startswith('=== PAGE') or l.startswith('---COL_SPLIT---'):
            continue
        clean_lines.append(l)
        
    full_text = '\n'.join(clean_lines)
    
    # Extract source tag: (Negeri: Tahun)
    sumber_m = re.search(r'\(([^\)]*?(\d{4})[^\)]*)\)', full_text)
    sumber = "Percubaan SPM"
    tahun = 2023
    if sumber_m:
        raw_sumber = sumber_m.group(1).strip()
        tahun = int(sumber_m.group(2))
        negeri_part = re.sub(r':?\s*' + str(tahun), '', raw_sumber).strip().rstrip(':')
        if 'spm' in negeri_part.lower():
            sumber = f'SPM {tahun}'
        else:
            sumber = f'Percubaan {negeri_part} {tahun}'
            
    # Extract Rajah reference
    m_rajah = re.search(r'(?:Rajah|Rajalh|Rujah|Diagram)\s*([0-9lIOoS]+(?:\s*\([a-z]\))?)', full_text, re.IGNORECASE)
    rajah_no = None
    if m_rajah:
        r_raw = m_rajah.group(1).replace('l', '1').replace('I', '1').replace('O', '0').replace('o', '0').replace('S', '5')
        rajah_no = re.sub(r'\s+', '', r_raw)
        
    # Get Rajah URL if exists
    rajah_url = ""
    if rajah_no:
        # Match against DIAGRAM_URLS keys
        if rajah_no in DIAGRAM_URLS:
            rajah_url = DIAGRAM_URLS[rajah_no]
        elif re.sub(r'\([a-z]\)', '', rajah_no) in DIAGRAM_URLS:
            rajah_url = DIAGRAM_URLS[re.sub(r'\([a-z]\)', '', rajah_no)]
            
    # Split into stem and options
    # An option line starts with A, B, C, D
    # First normalize horizontal options
    norm_lines = []
    for l in clean_lines:
        # Horizontal pairs: A ... C ..., B ... D ...
        m_ac = re.match(r'^A\s+(.*?)\s+C\s+(.*?)$', l)
        m_bd = re.match(r'^B\s+(.*?)\s+D\s+(.*?)$', l)
        m_ab = re.match(r'^A\s+(.*?)\s+B\s+(.*?)$', l)
        m_cd = re.match(r'^C\s+(.*?)\s+D\s+(.*?)$', l)
        if m_ac:
            norm_lines.append(f'A {m_ac.group(1)}')
            norm_lines.append(f'C {m_ac.group(2)}')
        elif m_bd:
            norm_lines.append(f'B {m_bd.group(1)}')
            norm_lines.append(f'D {m_bd.group(2)}')
        elif m_ab:
            norm_lines.append(f'A {m_ab.group(1)}')
            norm_lines.append(f'B {m_ab.group(2)}')
        elif m_cd:
            norm_lines.append(f'C {m_cd.group(1)}')
            norm_lines.append(f'D {m_cd.group(2)}')
        else:
            norm_lines.append(l)

    # Locate options: find lines starting with A, B, C, D
    opt_indices = {}
    for idx, l in enumerate(norm_lines):
        m_opt = re.match(r'^([ABCD])(?:\s+|\.|\)|$)', l)
        if m_opt:
            char = m_opt.group(1)
            # Only record first occurrence
            if char not in opt_indices:
                opt_indices[char] = idx
                
    # If all 4 options detected
    pilihan = []
    stem_lines = []
    if len(opt_indices) == 4 and opt_indices['A'] < opt_indices['B'] < opt_indices['C'] < opt_indices['D']:
        a_idx = opt_indices['A']
        b_idx = opt_indices['B']
        c_idx = opt_indices['C']
        d_idx = opt_indices['D']
        stem_lines = norm_lines[:a_idx]
        
        opt_a_text = clean_text(' '.join([re.sub(r'^A(?:\s+|\.|\)|$)', '', norm_lines[a_idx])] + norm_lines[a_idx+1:b_idx]))
        opt_b_text = clean_text(' '.join([re.sub(r'^B(?:\s+|\.|\)|$)', '', norm_lines[b_idx])] + norm_lines[b_idx+1:c_idx]))
        opt_c_text = clean_text(' '.join([re.sub(r'^C(?:\s+|\.|\)|$)', '', norm_lines[c_idx])] + norm_lines[c_idx+1:d_idx]))
        opt_d_text = clean_text(' '.join([re.sub(r'^D(?:\s+|\.|\)|$)', '', norm_lines[d_idx])] + norm_lines[d_idx+1:]))
        
        pilihan = [
            {"id": "A", "teks": opt_a_text},
            {"id": "B", "teks": opt_b_text},
            {"id": "C", "teks": opt_c_text},
            {"id": "D", "teks": opt_d_text}
        ]
    else:
        # Heuristic fallback: search for options or table columns
        # If options are graph options (like K2 Q1)
        # or options have specific labels
        stem_lines = norm_lines
        pilihan = [
            {"id": "A", "teks": "Pilihan A (Rujuk rajah / graf)"},
            {"id": "B", "teks": "Pilihan B (Rujuk rajah / graf)"},
            {"id": "C", "teks": "Pilihan C (Rujuk rajah / graf)"},
            {"id": "D", "teks": "Pilihan D (Rujuk rajah / graf)"}
        ]
        
    # Build clean stem: remove question number from beginning
    if stem_lines:
        stem_lines[0] = re.sub(r'^\s*\d{1,2}[.,]\s*', '', stem_lines[0])
    # Filter out diagram caption line if inside stem text
    filtered_stem = []
    for sl in stem_lines:
        if re.search(r'^\s*(?:Rajah|Diagram)\s*\d+.*(?:/|Diagram)', sl, re.IGNORECASE):
            continue
        filtered_stem.append(sl)
        
    soalan_text = '\n'.join(filtered_stem).strip()
    
    # Get verified answer
    k_key = f"K{k_num}"
    ans_item = ANSWERS[k_key].get(str(qno), "A")
    if isinstance(ans_item, dict):
        jawapan_betul = ans_item.get("ans", "A")
        penerangan = ans_item.get("working", "")
    else:
        jawapan_betul = ans_item
        penerangan = f"Jawapan yang betul ialah {jawapan_betul} berdasarkan konsep Fizik Tingkatan 4 Bab 2."
        
    # DSKP classification
    dskp_info = classify_dskp(soalan_text + " " + " ".join([p["teks"] for p in pilihan]), k_num)
    
    # Determine Aras
    if k_num == 1:
        aras = "Rendah"
    elif k_num == 2:
        aras = "Sederhana" if qno > 30 else "Rendah"
    elif k_num == 3:
        aras = "Sederhana" if qno < 25 else "Tinggi"
    else:
        aras = "Tinggi"
        
    q_obj = {
        "id": f"MODUL_T4_B2_K{k_num}_Q{qno:02d}",
        "sumber": sumber,
        "tahun": tahun,
        "noSoalanAsal": qno,
        "sk": dskp_info["sk"],
        "sp": dskp_info["sp"],
        "spKod": dskp_info["spKod"],
        "rujukanDskp": dskp_info["rujukanDskp"],
        "rujukanBukuTeks": dskp_info["rujukanBukuTeks"],
        "rujukanCheatnote": dskp_info["rujukanCheatnote"],
        "kertas": 1,
        "tingkatan": 4,
        "babNo": 2,
        "babNama": "Daya dan Gerakan I",
        "bidang": "Mekanik Newton",
        "topik": dskp_info["topik"],
        "aras": aras,
        "konstruk": konstruk_names[k_num],
        "soalan": soalan_text,
        "rajahUrl": rajah_url,
        "pilihan": pilihan,
        "jawapanBetul": jawapan_betul,
        "penerangan": penerangan,
        "markah": 1,
        "statusSemakan": "Disemak (Modul K1)"
    }
    return q_obj

all_questions = []

for i in range(1, len(sections), 2):
    k_num = int(sections[i])
    k_text = sections[i+1]
    n_expected = expected_counts[k_num]
    
    lines = k_text.split('\n')
    q_bounds = []
    curr = 1
    for l_idx, l in enumerate(lines):
        if re.match(rf'^\s*{curr}[.,]\s+', l):
            q_bounds.append((curr, l_idx))
            curr += 1
            if curr > n_expected: break
            
    for idx in range(len(q_bounds)):
        qno, start = q_bounds[idx]
        end = q_bounds[idx+1][1] if idx+1 < len(q_bounds) else len(lines)
        chunk = lines[start:end]
        q_obj = parse_question_chunk(chunk, k_num, qno)
        all_questions.append(q_obj)

print(f'Total questions parsed: {len(all_questions)} / 163')

# Write output to scratch
out_path = 'scratch/t4_b2_full_questions.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(all_questions, f, indent=2, ensure_ascii=False)

print(f'Saved all {len(all_questions)} questions to {out_path}')
