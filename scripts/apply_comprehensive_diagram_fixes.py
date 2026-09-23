import os
#!/usr/bin/env python3
import json
import re

CDN_PREFIX = "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2"

def make_opts(prefix, suffix=""):
    sfx = f"_{suffix}" if suffix else ""
    return [
        {"id": "A", "teks": f'<img src="{CDN_PREFIX}/{prefix}_opt_a{sfx}.webp" style="max-height:120px; border-radius:4px;" alt="Graf A">'},
        {"id": "B", "teks": f'<img src="{CDN_PREFIX}/{prefix}_opt_b{sfx}.webp" style="max-height:120px; border-radius:4px;" alt="Graf B">'},
        {"id": "C", "teks": f'<img src="{CDN_PREFIX}/{prefix}_opt_c{sfx}.webp" style="max-height:120px; border-radius:4px;" alt="Graf C">'},
        {"id": "D", "teks": f'<img src="{CDN_PREFIX}/{prefix}_opt_d{sfx}.webp" style="max-height:120px; border-radius:4px;" alt="Graf D">'}
    ]

UPDATES = {
    "MODUL_T4_B2_K2_Q01": {
        "rajahUrl": None,
        "pilihan": make_opts("t4_b2_k2_q01")
    },
    "MODUL_T4_B2_K2_Q03": {
        "rajahUrl": f"{CDN_PREFIX}/t4_b2_rajah2_v2.webp"
    },
    "MODUL_T4_B2_K2_Q05": {
        "rajahUrl": f"{CDN_PREFIX}/t4_b2_rajah4_v2.webp"
    },
    "MODUL_T4_B2_K2_Q11": {
        "rajahUrl": None,
        "pilihan": make_opts("t4_b2_k2_q11")
    },
    "MODUL_T4_B2_K2_Q23": {
        "rajahUrl": f"{CDN_PREFIX}/t4_b2_rajah18_v2.webp"
    },
    "MODUL_T4_B2_K2_Q40": {
        "pilihan": make_opts("t4_b2_k2_q40")
    },
    "MODUL_T4_B2_K2_Q56": {
        "pilihan": make_opts("t4_b2_k2_q56")
    },
    "MODUL_T4_B2_K2_Q67": {
        "rajahUrl": f"{CDN_PREFIX}/t4_b2_rajah49_v2.webp",
        "pilihan": make_opts("t4_b2_k2_q67", "v2")
    },
    "MODUL_T4_B2_K2_Q72": {
        "pilihan": make_opts("t4_b2_k2_q72")
    },
    "MODUL_T4_B2_K2_Q75": {
        "rajahUrl": f"{CDN_PREFIX}/t4_b2_rajah54_v2.webp",
        "pilihan": make_opts("t4_b2_k2_q75", "v2")
    },
    "MODUL_T4_B2_K2_Q83": {
        "rajahUrl": None,
        "pilihan": make_opts("t4_b2_k2_q83")
    },
    "MODUL_T4_B2_K2_Q87": {
        "rajahUrl": None,
        "pilihan": make_opts("t4_b2_k2_q87")
    },
    "MODUL_T4_B2_K3_Q05": {
        "pilihan": make_opts("t4_b2_k3_q05")
    },
    "MODUL_T4_B2_K3_Q08": {
        "pilihan": make_opts("t4_b2_k3_q08")
    },
    "MODUL_T4_B2_K3_Q10": {
        "sumber": "Percubaan Perak 2023",
        "rajahUrl": None
    },
    "MODUL_T4_B2_K3_Q17": {
        "pilihan": make_opts("t4_b2_k3_q17")
    },
    "MODUL_T4_B2_K3_Q40": {
        "rajahUrl": f"{CDN_PREFIX}/t4_b2_rajah98_v2.webp",
        "pilihan": make_opts("t4_b2_k3_q40", "v3")
    }
}

print(f"Applying updates to {len(UPDATES)} questions...")

# 1. Update scratch/t4_b2_full_questions.json if it exists
if os.path.exists("scratch/t4_b2_full_questions.json"):
    with open("scratch/t4_b2_full_questions.json", "r", encoding="utf-8") as f:
        qs = json.load(f)
    for q in qs:
        qid = q.get("id")
        if qid in UPDATES:
            for k, v in UPDATES[qid].items():
                q[k] = v
    with open("scratch/t4_b2_full_questions.json", "w", encoding="utf-8") as f:
        json.dump(qs, f, indent=4, ensure_ascii=False)
    print("Updated scratch/t4_b2_full_questions.json")

# 2. Update dskp-data.js
with open("dskp-data.js", "r", encoding="utf-8") as f:
    js_text = f.read()

for qid, fix in UPDATES.items():
    pos = js_text.find(f'"id": "{qid}"')
    if pos == -1:
        pos = js_text.find(f'"id":"{qid}"')
    if pos == -1:
        print(f"Warning: {qid} not found in dskp-data.js")
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
        for k, v in fix.items():
            obj[k] = v
        new_obj_str = json.dumps(obj, indent=8, ensure_ascii=False)
        js_text = js_text[:brace_open] + new_obj_str + js_text[brace_close+1:]
        print(f"Updated {qid} via JSON parse")
    except Exception as e:
        print(f"Fallback regex update for {qid}: {e}")
        new_obj_str = obj_str
        if "rajahUrl" in fix:
            escaped_rajah = json.dumps(fix["rajahUrl"])
            new_obj_str = re.sub(r'"rajahUrl":\s*(?:"(?:[^"\\]|\\.)*"|null)', f'"rajahUrl": {escaped_rajah}', new_obj_str)
        if "sumber" in fix:
            escaped_sumber = json.dumps(fix["sumber"])
            new_obj_str = re.sub(r'"sumber":\s*"([^"\\]|\\.)*"', f'"sumber": {escaped_sumber}', new_obj_str)
        if "pilihan" in fix:
            escaped_pilihan = json.dumps(fix["pilihan"], indent=12, ensure_ascii=False)
            new_obj_str = re.sub(r'"pilihan":\s*\[.*?\]', f'"pilihan": {escaped_pilihan}', new_obj_str, flags=re.DOTALL)

        js_text = js_text[:brace_open] + new_obj_str + js_text[brace_close+1:]
        print(f"Updated {qid} via regex")

with open("dskp-data.js", "w", encoding="utf-8") as f:
    f.write(js_text)

print("dskp-data.js successfully written!")
