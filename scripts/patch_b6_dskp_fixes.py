#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Surgical Fix for Bab 6:
1. Attach 18 missing stem diagram URLs in dskp-data.js
2. Fix speed of light units & typos in Q06, Q41, Q42
"""

import json
import re

with open("dskp-data.js", "r", encoding="utf-8") as f:
    js_text = f.read()

# Load diagram urls
with open("scratch/t4_b6_diagram_urls.json", "r", encoding="utf-8") as f:
    diag_urls = json.load(f)

# 18 missing stem diagrams
missing_stem_map = {
    "MODUL_T4_B6_K2_Q06": diag_urls["rajah3"],
    "MODUL_T4_B6_K2_Q12": diag_urls["rajah8"],
    "MODUL_T4_B6_K2_Q18": diag_urls["rajah11"],
    "MODUL_T4_B6_K2_Q25": diag_urls["rajah17"],
    "MODUL_T4_B6_K2_Q29": diag_urls["rajah20"],
    "MODUL_T4_B6_K2_Q37": diag_urls["rajah24"],
    "MODUL_T4_B6_K2_Q60": diag_urls["rajah41"],
    "MODUL_T4_B6_K2_Q62": diag_urls["rajah43"],
    "MODUL_T4_B6_K2_Q63": diag_urls["rajah44"],
    "MODUL_T4_B6_K3_Q01": diag_urls["rajah46"],
    "MODUL_T4_B6_K3_Q06": diag_urls["rajah50"],
    "MODUL_T4_B6_K3_Q44": diag_urls["rajah70"],
    "MODUL_T4_B6_K3_Q45": diag_urls["rajah71"],
    "MODUL_T4_B6_K3_Q49": diag_urls["rajah75"],
    "MODUL_T4_B6_K3_Q51": diag_urls["rajah77"],
    "MODUL_T4_B6_K3_Q52": diag_urls["rajah78"],
    "MODUL_T4_B6_K3_Q59": diag_urls["rajah84"],
    "MODUL_T4_B6_K4_Q01": diag_urls["rajah88"],
}

FIXES = {}

# Add 18 stem fixes
for qid, url in missing_stem_map.items():
    FIXES[qid] = {"rajahUrl": url}

# Add Q06 specific fixes (options + diagram)
FIXES["MODUL_T4_B6_K3_Q06"] = {
    "rajahUrl": diag_urls["rajah50"],
    "pilihan": [
        {"id": "A", "teks": "1.5 × 10⁸ m s⁻¹"},
        {"id": "B", "teks": "2.0 × 10⁸ m s⁻¹"},
        {"id": "C", "teks": "3.0 × 10⁸ m s⁻¹"},
        {"id": "D", "teks": "4.5 × 10⁸ m s⁻¹"}
    ]
}

# Add Q41 specific fixes (stem + options)
FIXES["MODUL_T4_B6_K3_Q41"] = {
    "soalan": "Halaju cahaya di dalam vakum ialah 3.0 × 10⁸ m s⁻¹. Indeks biasan bagi air ialah 1.30. Berapakah halaju cahaya di dalam air?\nThe velocity of light in vacuum is 3.0 × 10⁸ m s⁻¹. The refractive index of water is 1.30. What is the velocity of light in the water?",
    "pilihan": [
        {"id": "A", "teks": "2.11 × 10⁸ m s⁻¹"},
        {"id": "B", "teks": "2.31 × 10⁸ m s⁻¹"},
        {"id": "C", "teks": "3.11 × 10⁸ m s⁻¹"},
        {"id": "D", "teks": "4.26 × 10⁸ m s⁻¹"}
    ]
}

# Add Q42 specific fixes (stem)
FIXES["MODUL_T4_B6_K3_Q42"] = {
    "soalan": "Laju cahaya dalam vakum ialah 3.0 × 10⁸ m s⁻¹. Apabila cahaya melalui satu tingkap kaca, kelajuannya menjadi 1.86 × 10⁸ m s⁻¹. Berapakah indeks biasan kaca tingkap itu?\nThe speed of light in vacuum is 3.0 × 10⁸ m s⁻¹. When the light penetrates a glass window, its speed becomes 1.86 × 10⁸ m s⁻¹. What is the refractive index of the glass window?"
}

updated_count = 0

for qid, fix in FIXES.items():
    # Find position of qid
    needle = f'"id": "{qid}"'
    pos = js_text.find(needle)
    if pos == -1:
        print(f"ERROR: {qid} not found in dskp-data.js")
        continue

    # Find the opening brace of this object
    brace_open = js_text.rfind("{", 0, pos)
    
    # Find the closing brace of this object
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
        for k, v in fix.items():
            obj[k] = v
        new_obj_str = json.dumps(obj, indent=2, ensure_ascii=False)
        # Indent each line by 4 spaces (standard for dskp-data.js array items)
        new_obj_str_indented = "\n".join("  " + line if line else "" for line in new_obj_str.split("\n"))
        js_text = js_text[:brace_open] + new_obj_str_indented.strip() + js_text[brace_close+1:]
        updated_count += 1
        print(f"✓ Updated {qid} via JSON parse")
    except Exception as e:
        print(f"Fallback regex update for {qid}: {e}")
        new_obj_str = obj_str
        if "rajahUrl" in fix:
            escaped_rajah = json.dumps(fix["rajahUrl"])
            new_obj_str = re.sub(r'"rajahUrl":\s*(?:"(?:[^"\\]|\\.)*"|null)', f'"rajahUrl": {escaped_rajah}', new_obj_str)
        if "soalan" in fix:
            escaped_soalan = json.dumps(fix["soalan"], ensure_ascii=False)
            new_obj_str = re.sub(r'"soalan":\s*"(?:[^"\\]|\\.)*"', f'"soalan": {escaped_soalan}', new_obj_str)
        if "pilihan" in fix:
            escaped_pilihan = json.dumps(fix["pilihan"], indent=6, ensure_ascii=False)
            new_obj_str = re.sub(r'"pilihan":\s*\[.*?\]', f'"pilihan": {escaped_pilihan}', new_obj_str, flags=re.DOTALL)

        js_text = js_text[:brace_open] + new_obj_str + js_text[brace_close+1:]
        updated_count += 1
        print(f"✓ Updated {qid} via regex")

# Write to file
with open("dskp-data.js", "w", encoding="utf-8") as f:
    f.write(js_text)

print(f"\nSUCCESS: Successfully patched {updated_count} questions in dskp-data.js!")
