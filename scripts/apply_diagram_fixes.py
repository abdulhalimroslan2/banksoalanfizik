#!/usr/bin/env python3
import json
import re

FIXES = {
    "MODUL_T4_B2_K2_Q39": {
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_q39_carta_pita.webp",
        "pilihan": [
            {"id": "A", "teks": "Carta pita A / Tape chart A"},
            {"id": "B", "teks": "Carta pita B / Tape chart B"},
            {"id": "C", "teks": "Carta pita C / Tape chart C"},
            {"id": "D", "teks": "Carta pita D / Tape chart D"}
        ],
        "jawapanBetul": "A",
        "jawapan": "A",
        "penerangan": "Berdasarkan carta pita detik, panjang jalur pita bertambah secara seragam dari masa ke masa menunjukkan halaju bertambah secara seragam, iaitu objek mengalami pecutan seragam (Carta pita A)."
    },
    "MODUL_T4_B2_K2_Q74": {
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_q74_table.webp"
    },
    "MODUL_T4_B2_K2_Q76": {
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah55_v2.webp"
    },
    "MODUL_T4_B2_K3_Q07": {
        "rajahUrl": "https://pub-833572f7cc244a0d9627cef82c840538.r2.dev/diagrams/modul_konstruk_t4/b2/t4_b2_rajah76_v2.webp"
    }
}

# 1. Update scratch/t4_b2_full_questions.json
with open("scratch/t4_b2_full_questions.json", "r", encoding="utf-8") as f:
    qs = json.load(f)

for q in qs:
    qid = q.get("id")
    if qid in FIXES:
        for k, v in FIXES[qid].items():
            q[k] = v

with open("scratch/t4_b2_full_questions.json", "w", encoding="utf-8") as f:
    json.dump(qs, f, indent=4, ensure_ascii=False)
print("Updated scratch/t4_b2_full_questions.json successfully")

# 2. Update dskp-data.js
with open("dskp-data.js", "r", encoding="utf-8") as f:
    js_text = f.read()

for qid, fix in FIXES.items():
    pos = js_text.find(f'"id": "{qid}"')
    if pos == -1:
        pos = js_text.find(f'"id":"{qid}"')
    if pos == -1:
        print(f"Warning: {qid} not found in dskp-data.js")
        continue

    # Find enclosing object braces
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
        print(f"Updated {qid} via JSON object parse")
    except Exception as e:
        print(f"Using regex update for {qid}: {e}")
        new_obj_str = obj_str
        if "rajahUrl" in fix:
            escaped_rajah = json.dumps(fix["rajahUrl"])
            new_obj_str = re.sub(r'"rajahUrl":\s*"([^"\\]|\\.)*"', f'"rajahUrl": {escaped_rajah}', new_obj_str)
        if "pilihan" in fix:
            escaped_pilihan = json.dumps(fix["pilihan"], indent=12, ensure_ascii=False)
            new_obj_str = re.sub(r'"pilihan":\s*\[.*?\]', f'"pilihan": {escaped_pilihan}', new_obj_str, flags=re.DOTALL)
        if "jawapanBetul" in fix:
            ans_b = fix["jawapanBetul"]
            new_obj_str = re.sub(r'"jawapanBetul":\s*"[A-D]"', f'"jawapanBetul": "{ans_b}"', new_obj_str)
        if "jawapan" in fix:
            ans = fix["jawapan"]
            new_obj_str = re.sub(r'"jawapan":\s*"[A-D]"', f'"jawapan": "{ans}"', new_obj_str)
        if "penerangan" in fix:
            escaped_pen = json.dumps(fix["penerangan"], ensure_ascii=False)
            new_obj_str = re.sub(r'"penerangan":\s*"([^"\\]|\\.)*"', f'"penerangan": {escaped_pen}', new_obj_str)

        js_text = js_text[:brace_open] + new_obj_str + js_text[brace_close+1:]
        print(f"Updated {qid} via regex")

with open("dskp-data.js", "w", encoding="utf-8") as f:
    f.write(js_text)

print("dskp-data.js updated successfully!")
