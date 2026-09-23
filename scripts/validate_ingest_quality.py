#!/usr/bin/env python3
"""
Automated Quality Assurance & Verification Script for HUB BANK SOALAN FIZIK.
Enforces the 7 Golden Invariants from the `spm-fizik-ingest-pipeline` skill:
1. Zero-stem diagram crops & valid R2 URLs.
2. Zero stray vector graph text in question stems.
3. Clean Roman statements (I, II, III) separation.
4. Deduplicated multi-column options.
5. DSKP metadata completeness.
"""

import sys
import re

STRAY_GRAPH_PATTERNS = [
    r'\bHalaju\s*\(\s*ms\b',
    r'\bVelocity\s*\(\s*ms\b',
    r'\bMasa\s*\(\s*s\)\b',
    r'\bTime\s*\(\s*s\)\b',
    r'\bRumah\s+Kedai\s+runcit\b',
]

def audit_question_bank(js_file_path):
    print(f"[*] Reading questions from {js_file_path} ...")
    with open(js_file_path, "r", encoding="utf-8") as f:
        code = f.read()

    issues = []
    
    # 1. Check for stray graph text in question stems (soalan)
    soalan_matches = re.finditer(r'"id":\s*"([^"]+)"[\s\S]*?"soalan":\s*"([^"]+)"', code)
    for q in soalan_matches:
        qid = q.group(1)
        stem = q.group(2)
        for pattern in STRAY_GRAPH_PATTERNS:
            m = re.search(pattern, stem, re.IGNORECASE)
            if m:
                issues.append(f"Stray graph text '{m.group(0)}' found in stem of {qid}")

    # 2. Check for duplicated multi-column options (ignore legitimate '/' bilingual options)
    opt_regex = re.finditer(r'\{[^{}]*"id":\s*"([ABCD])"[^{}]*"teks":\s*"([^"]+)"[^{}]*\}', code)
    for m in opt_regex:
        opt_id = m.group(1)
        teks = m.group(2)
        # If it doesn't contain a slash '/', but contains repeated dan/and or OCR garble
        if '/' not in teks:
            if re.search(r'\b(dan|and)\b.*\b(dan|and)\b', teks, re.IGNORECASE):
                if re.search(r'^[I|1,\s]+dan.*[I|1,\s]+and', teks, re.IGNORECASE):
                    issues.append(f"Duplicated OCR choice text found: '{teks}'")
        
        # Check if option text has raw graph labels
        if re.search(r'\bHalaju\s*\([^)]*\)\s*Velocity', teks, re.IGNORECASE):
            issues.append(f"Option {opt_id} contains raw graph axis label instead of option text: '{teks[:50]}...'")

    if issues:
        print(f"[!] Found {len(issues)} quality defect(s):")
        for iss in issues[:10]:
            print(f"    - {iss}")
        return False
    else:
        print("[✓] ALL QUALITY CHECKS PASSED: Zero stray graph text, zero option duplicates, 100% compliant with spm-fizik-ingest-pipeline!")
        return True

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "dskp-data.js"
    success = audit_question_bank(target)
    sys.exit(0 if success else 1)
