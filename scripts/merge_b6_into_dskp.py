import os, sys, json, shutil, time, subprocess
sys.path.insert(0, ".")
from scripts.build_b6_all_data import get_all_b6_questions

DSKP_FILE = 'dskp-data.js'
BACKUP_DIR = 'scratch/backups'
os.makedirs(BACKUP_DIR, exist_ok=True)

def main():
    ts = int(time.time())
    backup_file = os.path.join(BACKUP_DIR, f'dskp-data.js.bak_b6_{ts}')
    shutil.copy2(DSKP_FILE, backup_file)
    print(f'Backed up {DSKP_FILE} to {backup_file}')
    
    with open(DSKP_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        
    prefix = 'const QUESTION_BANK = '
    idx_start = content.find(prefix) + len(prefix)
    
    target_phrase = 'MODUL ANALITIK PRESTASI'
    phrase_pos = content.find(target_phrase, idx_start)
    idx_end = content.rfind(';', idx_start, phrase_pos)
    
    header = content[:idx_start]
    footer = content[idx_end:]
    
    existing_questions = json.loads(content[idx_start:idx_end])
    print(f'Current questions in dskp-data.js: {len(existing_questions)}')
    
    b6_questions = get_all_b6_questions()
    print(f'Loaded {len(b6_questions)} Bab 6 questions.')
    
    clean_existing = [q for q in existing_questions if not q['id'].startswith('MODUL_T4_B6_')]
    combined = clean_existing + b6_questions
    print(f'Total combined questions: {len(combined)}')
    
    json_str = json.dumps(combined, indent=2, ensure_ascii=False)
    
    with open(DSKP_FILE, 'w', encoding='utf-8') as f:
        f.write(header + json_str + footer)
        
    print(f'Successfully wrote updated QUESTION_BANK to {DSKP_FILE}!')
    
    res = subprocess.run(['node', '-c', DSKP_FILE], capture_output=True, text=True)
    if res.returncode == 0:
        print('Node syntax check: PASSED!')
    else:
        print("Node syntax check: FAILED!")
        print(res.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
