#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Reclassify Pantulan Dalam Penuh (TIR) questions into SK 6.2:
- MODUL_T4_B6_K3_Q51
- MODUL_T4_B6_K3_Q54
- MODUL_T4_B6_K3_Q34
- MODUL_T4_B6_K2_Q02
- MODUL_T4_B6_K2_Q30
- MODUL_T4_B6_K2_Q38
- MODUL_T4_B6_K2_Q48 (also attach 4 periscope option diagrams)
"""

import json
import re

with open("dskp-data.js", "r", encoding="utf-8") as f:
    js_text = f.read()

CDN_BASE = "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b6/options"

UPDATES = {
    # 1. User screenshot 1: Semicircular glass block TIR (Pahang 2021)
    "MODUL_T4_B6_K3_Q51": {
        "sk": "SK 6.2 Pantulan Dalam Penuh",
        "topik": "6.2 Pantulan Dalam Penuh",
        "sp": "SP 6.2.4 Menyelesaikan masalah melibatkan pantulan dalam penuh",
        "spKod": "6.2.4",
        "rujukanDskp": "DSKP Fizik T4 ms 80-81",
        "rujukanBukuTeks": "Buku Teks T4 ms 246-249",
        "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4-5"
    },
    # 2. User screenshot 2: Glass prism TIR (SBP 2021)
    "MODUL_T4_B6_K3_Q54": {
        "sk": "SK 6.2 Pantulan Dalam Penuh",
        "topik": "6.2 Pantulan Dalam Penuh",
        "sp": "SP 6.2.4 Menyelesaikan masalah melibatkan pantulan dalam penuh",
        "spKod": "6.2.4",
        "rujukanDskp": "DSKP Fizik T4 ms 80-81",
        "rujukanBukuTeks": "Buku Teks T4 ms 246-249",
        "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4-5",
        "soalan": "Rajah 80 menunjukkan satu sinar cahaya ditujukan secara normal dengan permukaan PQ bagi sebuah prisma kaca. Diberi bahawa indeks biasan prisma tersebut ialah 1.50.\nDiagram 80 shows a light ray directed normally to PQ of a glass prism. Given that the refractive index of the prism is 1.50.\nLintasan manakah A, B, C dan D menunjukkan perambatan cahaya yang betul selepas melalui PR?\nWhich path A, B, C and D shows the correct propagation of light after passing PR?"
    },
    # 3. Critical angle formula n = 1 / sin c (Melaka 2021)
    "MODUL_T4_B6_K3_Q34": {
        "sk": "SK 6.2 Pantulan Dalam Penuh",
        "topik": "6.2 Pantulan Dalam Penuh",
        "sp": "SP 6.2.4 Menyelesaikan masalah melibatkan pantulan dalam penuh",
        "spKod": "6.2.4",
        "rujukanDskp": "DSKP Fizik T4 ms 80-81",
        "rujukanBukuTeks": "Buku Teks T4 ms 246-249",
        "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4-5"
    },
    # 4. Optical devices using TIR - Prism periscope (SBP 2023)
    "MODUL_T4_B6_K2_Q02": {
        "sk": "SK 6.2 Pantulan Dalam Penuh",
        "topik": "6.2 Pantulan Dalam Penuh",
        "sp": "SP 6.2.3 Menerangkan aplikasi pantulan dalam penuh (gentian optik, logamaya, periskop)",
        "spKod": "6.2.3",
        "rujukanDskp": "DSKP Fizik T4 ms 80-81",
        "rujukanBukuTeks": "Buku Teks T4 ms 246-249",
        "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4-5"
    },
    # 5. Which applies TIR (Selangor Set 1 2022)
    "MODUL_T4_B6_K2_Q30": {
        "sk": "SK 6.2 Pantulan Dalam Penuh",
        "topik": "6.2 Pantulan Dalam Penuh",
        "sp": "SP 6.2.3 Menerangkan aplikasi pantulan dalam penuh (gentian optik, logamaya, periskop)",
        "spKod": "6.2.3",
        "rujukanDskp": "DSKP Fizik T4 ms 80-81",
        "rujukanBukuTeks": "Buku Teks T4 ms 246-249",
        "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4-5"
    },
    # 6. Four devices using TIR (Perlis 2022)
    "MODUL_T4_B6_K2_Q38": {
        "sk": "SK 6.2 Pantulan Dalam Penuh",
        "topik": "6.2 Pantulan Dalam Penuh",
        "sp": "SP 6.2.3 Menerangkan aplikasi pantulan dalam penuh (gentian optik, logamaya, periskop)",
        "spKod": "6.2.3",
        "rujukanDskp": "DSKP Fizik T4 ms 80-81",
        "rujukanBukuTeks": "Buku Teks T4 ms 246-249",
        "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4-5"
    },
    # 7. Periscope 45-90-45 prisms arrangement (Selangor Set 1 2021)
    "MODUL_T4_B6_K2_Q48": {
        "sk": "SK 6.2 Pantulan Dalam Penuh",
        "topik": "6.2 Pantulan Dalam Penuh",
        "sp": "SP 6.2.3 Menerangkan aplikasi pantulan dalam penuh (gentian optik, logamaya, periskop)",
        "spKod": "6.2.3",
        "rujukanDskp": "DSKP Fizik T4 ms 80-81",
        "rujukanBukuTeks": "Buku Teks T4 ms 246-249",
        "rujukanCheatnote": "Cheatnote T4 Bab 6 ms 4-5",
        "soalan": "Satu periskop diperbuat daripada dua prisma 45°-90°-45°. Antara gambar rajah berikut yang manakah menunjukkan susunan yang betul prisma itu?\nA periscope is made from two 45°-90°-45° prisms. Which of the following diagrams shows the correct arrangement of the glass prism?",
        "pilihan": [
            {
                "id": "A",
                "teks": f'<img src="{CDN_BASE}/t4_b6_k2_q48_opt_a.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan A">'
            },
            {
                "id": "B",
                "teks": f'<img src="{CDN_BASE}/t4_b6_k2_q48_opt_b.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan B">'
            },
            {
                "id": "C",
                "teks": f'<img src="{CDN_BASE}/t4_b6_k2_q48_opt_c.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan C">'
            },
            {
                "id": "D",
                "teks": f'<img src="{CDN_BASE}/t4_b6_k2_q48_opt_d.webp" style="max-height:130px; border-radius:4px;" alt="Pilihan D">'
            }
        ]
    }
}

updated = 0
for qid, fields in UPDATES.items():
    needle = f'"id": "{qid}"'
    pos = js_text.find(needle)
    if pos == -1:
        print(f"ERROR: {qid} not found in dskp-data.js")
        continue

    brace_open = js_text.rfind("{", 0, pos)
    brace_depth = 0
    brace_close = -1
    for idx in range(brace_open, len(js_text)):
        if js_text[idx] == "{":
            brace_depth += 1
        elif js_text[idx] == "}":
            brace_depth -= 1
            if brace_depth == 0:
                brace_close = idx
                break

    if brace_close == -1:
        print(f"Warning: could not parse closing brace for {qid}")
        continue

    obj_str = js_text[brace_open:brace_close+1]
    try:
        obj = json.loads(obj_str)
        for k, v in fields.items():
            obj[k] = v
        new_obj_str = json.dumps(obj, indent=2, ensure_ascii=False)
        new_obj_str_indented = "\n".join("  " + line if line else "" for line in new_obj_str.split("\n"))
        js_text = js_text[:brace_open] + new_obj_str_indented.strip() + js_text[brace_close+1:]
        updated += 1
        print(f"✓ Reclassified {qid} to SK 6.2")
    except Exception as e:
        print(f"Error updating {qid}: {e}")

with open("dskp-data.js", "w", encoding="utf-8") as f:
    f.write(js_text)

print(f"\nSUCCESS: Reclassified {updated} questions to SK 6.2 Pantulan Dalam Penuh!")
