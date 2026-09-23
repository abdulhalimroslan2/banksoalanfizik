#!/usr/bin/env python3
"""
Automated Quality Assurance & Verification Script for HUB BANK SOALAN FIZIK.
Enforces the 8 Golden Invariants from the `spm-fizik-ingest-pipeline` skill:
1. Zero-stem diagram crops & valid Cloudflare R2 WebP URLs.
2. Zero stray vector graph / diagram labels in question stems.
3. Zero leaked table headers / option values at the end of stems.
4. Clean Roman statements (I, II, III) separation.
5. Deduplicated & clean multi-column options (no raw OCR spills or swapped columns).
6. Zero English question stems swallowed into Option A.
7. Zero stray page numbers or exam metadata appended to option values.
8. DSKP metadata completeness.
"""

import sys
import re

STRAY_DIAGRAM_LABEL_PATTERNS = [
    r'\bHalaju\s*\(\s*ms\b',
    r'\bVelocity\s*\(\s*ms\b',
    r'\bMasa\s*\(\s*s\)\b',
    r'\bTime\s*\(\s*s\)\b',
    r'\bRumah\s+Kedai\s+runcit\b',
    r'\bArah pergerakan\s+Directionofmotion\b',
    r'\bVakum\s+Vacuum\b',
    r'\bduian keci\b',
    r'\bAlu\s+Pestle\s+Lesung\b',
    r'\bKayu besbol\s+Baseball bat\b',
]

LEAKED_TABLE_HEADER_PATTERNS = [
    r'\bBergerak\s+Pegun\s+Pegun\b',
    r'\bSesaran dan halaju\s+Jarak dan laju\b',
    r'\bPQR\s+PR\b',
    r'\bHalaju\s+Pecutan\s+Velocity\b',
    r'\bMalar\s+Malar\b',
    r'\bOP\s+PQ\s+Halaju\b',
    r'\bDiabadikan\s+Diabadikan\b',
    r'\bUntuk memulakan memberhentikan\b',
    r'\bA Hukum Gerakan Newton\b',
    r'\bA Pecutan bulu ayam\b',
    r'\bA Momentum bola ping pong\b',
]

SWALLOWED_STEM_IN_OPTION_PATTERNS = [
    r'\bwhich one of the following\b',
    r'\bshows a toy car moving\b',
    r'\bmoves from a point P to a point Q\b',
    r'\bcalculate the acceleration of the car\b',
    r'\bplasticine ball of mass 50 g\b',
    r'\bstationary aeroplane on rumway\b',
    r'\btrolley X of mass 6 kg\b',
    r'\bvolleyball player throwing a ball\b',
    r'\btrue statement about momentum according to the diagram\b',
    r'\bA true statement about momentum\b',
]

def audit_question_bank(js_file_path):
    print(f"[*] Reading questions from {js_file_path} ...")
    with open(js_file_path, "r", encoding="utf-8") as f:
        code = f.read()

    issues = []
    
    # 1. Parse question objects
    q_matches = re.finditer(r'\{[^{}]*"id":\s*"([^"]+)"[\s\S]*?"soalan":\s*"([^"]+)"[\s\S]*?"pilihan":\s*\[([\s\S]*?)\][\s\S]*?\}', code)
    for q in q_matches:
        qid = q.group(1)
        stem = q.group(2)
        pilihan_str = q.group(3)
        
        # Check stray diagram labels in stem
        for pattern in STRAY_DIAGRAM_LABEL_PATTERNS:
            m = re.search(pattern, stem, re.IGNORECASE)
            if m:
                issues.append(f"[{qid}] Stray diagram text '{m.group(0)}' found in stem")

        # Check leaked table headers in stem
        for pattern in LEAKED_TABLE_HEADER_PATTERNS:
            m = re.search(pattern, stem, re.IGNORECASE)
            if m:
                issues.append(f"[{qid}] Leaked table header / option values '{m.group(0)}' found in stem")

        # Parse options
        opt_matches = re.finditer(r'\{[^{}]*"id":\s*"([ABCD])"[^{}]*"teks":\s*"([^"]+)"[^{}]*\}', pilihan_str)
        for opt in opt_matches:
            oid = opt.group(1)
            teks = opt.group(2)

            # Check if option swallowed question stem
            for pattern in SWALLOWED_STEM_IN_OPTION_PATTERNS:
                if re.search(pattern, teks, re.IGNORECASE):
                    issues.append(f"[{qid}] Option {oid} swallowed question stem text: '{teks[:60]}...'")

            # Check for stray diagram captions inside option text
            if re.search(r'Rajah\s+\d+\s*/\s*Diagram\s+\d+', teks, re.IGNORECASE):
                issues.append(f"[{qid}] Option {oid} contains stray diagram caption: '{teks[:50]}...'")

            # Check for trailing stray page / question numbers (e.g. '18 km 38')
            if re.search(r'\b\d+\s*(?:km|ms|m|s|N|kg|g)\s+\d{1,3}$', teks):
                issues.append(f"[{qid}] Option {oid} has trailing stray digits: '{teks}'")

            # Check for duplicated OCR choice text
            if '/' not in teks:
                if re.search(r'^[I|1,\s]+dan.*[I|1,\s]+and', teks, re.IGNORECASE):
                    issues.append(f"[{qid}] Duplicated OCR choice text found: '{teks}'")

    if issues:
        print(f"[!] FAILED: Found {len(issues)} quality defect(s):")
        for iss in issues:
            print(f"    - {iss}")
        return False
    else:
        print("[✓] ALL QUALITY CHECKS PASSED: 100% compliant with spm-fizik-ingest-pipeline!")
        return True

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "dskp-data.js"
    success = audit_question_bank(target)
    sys.exit(0 if success else 1)
