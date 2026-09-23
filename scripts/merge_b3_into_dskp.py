import json
import os

DSKP_FILE = 'dskp-data.js'
B3_FILE = 'scratch/t4_b3_full_questions.json'

with open(DSKP_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

prefix = 'const QUESTION_BANK = '
idx_start = content.find(prefix) + len(prefix)
end_marker = ';\n\n/**\n * MODUL ANALITIK PRESTASI'
idx_end = content.find(end_marker)

header = content[:idx_start]
footer = content[idx_end:]

existing_questions = json.loads(content[idx_start:idx_end])
print(f"Existing questions in dskp-data.js: {len(existing_questions)}")

with open(B3_FILE, 'r', encoding='utf-8') as f:
    b3_questions = json.load(f)
print(f"New Bab 3 questions to add: {len(b3_questions)}")

# Filter out any existing B3 questions if already present to ensure idempotency
clean_existing = [q for q in existing_questions if not q['id'].startswith('MODUL_T4_B3')]
combined = clean_existing + b3_questions
print(f"Total combined questions: {len(combined)}")

# Serialize JSON with 2 spaces
new_json_str = json.dumps(combined, indent=2, ensure_ascii=False)

with open(DSKP_FILE, 'w', encoding='utf-8') as f:
    f.write(header + new_json_str + footer)

print(f"Successfully updated {DSKP_FILE} with {len(combined)} questions!")
