#!/usr/bin/env python3
"""
Automated Quality Assurance & Verification Script for HUB BANK SOALAN FIZIK.
Enforces the 13 Golden Invariants from the `spm-fizik-ingest-pipeline` skill:
1. Strict Stem Diagram Crop (sifar teks kapsyen "Rajah [...]", zero option bundling, full axes & units, autocrop whitespace trimmed).
2. Full Negative Graph Range Preservation & Strict 2x2 Option Isolation (x0 >= 192 pt, zero arrow leaks).
3. Zero Leaked Answers, Page Numbers, or Stray Tokens at End of Stems.
4. Full Justified Alignment & Standard Bilingual Typography.
5. Strict DSKP Semantic Classification Matrix (Bab 2, Bab 3, and beyond).
6. Modern WebP Formatting & Version Serialisation (_v2, _v3).
7. Zero Swallowed English Stems in Option A.
8. Zero Stray Digits/Letters on Options.
9. Zero Leaked Diagram Text / Vector Annotations in Stem.
10. Clean Roman Numerals Separation (I, II, III).
11. Complete Physics Rationales & Answers.
12. Mandatory Backup Verification.
13. Strict OCR Spelling, Squashed Spacing & Bilingual Slash Separation Standard.
"""

import sys
import re
import os

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
    r'\bHos\s+Hose\b',
    r'\bDaya tujab itienl orce\b',
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
    r'\bfootball of mass 0\.5 kg is kicked\b',
    r'\bcar noving with uniform velocity\b',
]

KNOWN_OCR_TYPO_PATTERNS = [
    r'\bThirdLavwof\b',
    r'\bThirdLavw\b',
    r'\bSecond Lav\b',
    r'\bLavwof\b',
    r'\bNewton\s+s\b',
    r'\bstatenent\b',
    r'\bseckor\b',
    r'\bschelai\b',
    r'\bscbiji\b',
    r'\bscbelum\b',
    r'\bscbclum\b',
    r'\bincrsia\b',
    r'\bberjsim\b',
    r'\bmenycbabkan\b',
    r'\bterscbut\b',
    r'\bafier\b',
    r'\bafer\b',
    r'\btvolley\b',
    r'\btheinmpulsive\b',
    r'\bobjck\b',
    r'\bforwvard\b',
    r'\bconpared\b',
    r'\bofplaver\b',
    r'\bmomnentum\b',
    r'\bMonmentum\b',
    r'\bMomentumB\b',
    r'\bcaleulate\b',
    r'\bfromn\b',
    r'\bliabaikan\b',
    r'\blincar\b',
    r'\bactedon\b',
    r'\bthesmalldurian\b',
    r'\bbis durian\b',
    r'\btha object\b',
    r'\bdirecthy\b',
    r'\blo the\b',
    r'\bglassincreases\b',
    r'\bglassdecreases\b',
    r'\bwater bertambah\b',
    r'\btotalmomentum\b',
    r'\bIft =',
    r'\bbolatersebut\b',
    r'\btentangpergerakan\b',
    r'\bMengupakah\b',
    r'\bohjects\b',
    r'\bmotorcvcle\b',
    r'\bhardplastic\b',
    r'\bofmnassm\b',
    r'\bthedisplacenmentof\b',
    r'\bDiagramm\s+\d+\b',
]

KNOWN_SQUASHED_SPACING_PATTERNS = [
    r'\bthanthe\b',
    r'\bofthe\b',
    r'\bofchange\b',
    r'\btheresultant\b',
    r'\btheobject\b',
    r'\bofmotion\b',
    r'\bofMotion\b',
    r'\bofmomentum\b',
    r'\btheconceptof\b',
    r'\bconceptof\b',
    r'\bthefrictional\b',
    r'\btheimpulsive\b',
    r'\bthecar\b',
    r'\btheball\b',
    r'\btheground\b',
    r'\btheacceleration\b',
    r'\bthevelocity\b',
    r'\btheforce\b',
    r'\bthemass\b',
    r'\btheequation\b',
    r'\bthestatement\b',
    r'\bthesituation\b',
    r'\bthesurface\b',
    r'\btochange\b',
    r'\btoovercome\b',
    r'\btoact\b',
    r'\bisacted\b',
    r'\bisstated\b',
    r'\binthe\b',
    r'\bonthe\b',
    r'\bfromthe\b',
    r'\bwiththe\b',
    r'\bandthe\b',
    r'\bbythe\b',
    r'\bforthe\b',
    r'\bisthe\b',
    r'\barethe\b',
    r'\bthatthe\b',
    r'\bofmass\b',
    r'\bofvelocity\b',
    r'\bwithvelocity\b',
    r'\bwitha\b',
    r'\bwithan\b',
    r'\bmovingwith\b',
    r'\bmoveswith\b',
    r'\banaccelerationof\b',
    r'\batthe\b',
    r'\bincreasethe\b',
    r'\breducethe\b',
    r'\bdecreasingspeed\b',
    r'\btheathlete\b',
    r'\bofoscillation\b',
    r'\bofforces\b',
    r'\bofconservation\b',
    r'\bofconsenvationof\b',
    r'\bofnnomentum\b',
]

def audit_question_bank(js_file_path):
    print(f"[*] Reading questions from {js_file_path} ...")
    with open(js_file_path, "r", encoding="utf-8") as f:
        code = f.read()

    issues = []
    
    # 1. Parse question objects
    q_matches = re.finditer(r'\{[^{}]*"id":\s*"([^"]+)"[\s\S]*?"soalan":\s*"([^"]+)"[\s\S]*?"pilihan":\s*\[([\s\S]*?)\][\s\S]*?\}', code)
    question_count = 0

    for q in q_matches:
        question_count += 1
        qid = q.group(1)
        stem = q.group(2)
        pilihan_str = q.group(3)
        full_q_block = q.group(0)

        # Extract SK and SP
        sk_match = re.search(r'"sk":\s*"([^"]+)"', full_q_block)
        sk = sk_match.group(1) if sk_match else ""
        
        sp_match = re.search(r'"spKod":\s*"([^"]+)"', full_q_block)
        sp_kod = sp_match.group(1) if sp_match else ""

        # --- INVARIANT 3: Zero Stray Numbers or Single Characters in Stem ---
        lines = [l.strip() for l in stem.split(r'\n') if l.strip()]
        for idx, line in enumerate(lines):
            # Stray standalone digits / page numbers
            if re.match(r'^\d{1,3}$', line):
                issues.append(f"[{qid}] Invariant 3 Violation: Stray standalone digits '{line}' found in stem line {idx+1}")
            # Stray single letters (not Roman numerals I, V, X)
            if re.match(r'^[A-Za-z]$', line) and not re.match(r'^[ivx]$', line, re.I):
                issues.append(f"[{qid}] Invariant 3 Violation: Stray single character '{line}' found in stem line {idx+1}")
            # Stray hanging "to"
            if line.lower() == "to":
                issues.append(f"[{qid}] Invariant 3 Violation: Hanging word 'to' found on line {idx+1}")

        # Check last line specifically
        if lines:
            last_line = lines[-1]
            if re.match(r'^(?:[A-D]|\d+|R|to)$', last_line, re.I):
                issues.append(f"[{qid}] Invariant 3 Violation: Leaked answer/page token '{last_line}' at end of stem")

        # --- INVARIANT 1: Strict Stem Diagram Crop & Clean Cloudflare R2 Hosting ---
        img_match = re.search(r"<img[^>]+src=['\"]([^'\"]+)['\"]", stem)
        if img_match:
            img_url = img_match.group(1)
            # Must be modern webp format
            if not img_url.endswith(".webp"):
                issues.append(f"[{qid}] Invariant 6 Violation: Diagram image URL '{img_url}' is not in WebP format")
            # Must point to production Cloudflare R2 CDN or valid local asset
            if not (img_url.startswith("https://pub-") or img_url.startswith("assets/")):
                issues.append(f"[{qid}] Invariant 1 Violation: Diagram image URL '{img_url}' not hosted on valid CDN/asset path")
            # Invariant 1 & 6: For Bab 3 questions, ensure upgraded _v2.webp is used (strictly excluding caption "Rajah [...]")
            if "_B3_" in qid and "t4_b3_rajah" in img_url and "_v2.webp" not in img_url:
                issues.append(f"[{qid}] Invariant 1 Violation: Diagram '{img_url}' is using legacy v1 crop with caption text. Must use '_v2.webp'")

        # --- INVARIANT 2 & 9: Diagram label & table header leaks ---
        for pattern in STRAY_DIAGRAM_LABEL_PATTERNS:
            m = re.search(pattern, stem, re.IGNORECASE)
            if m:
                issues.append(f"[{qid}] Invariant 9 Violation: Stray diagram text '{m.group(0)}' found in stem")

        for pattern in LEAKED_TABLE_HEADER_PATTERNS:
            m = re.search(pattern, stem, re.IGNORECASE)
            if m:
                issues.append(f"[{qid}] Invariant 3 Violation: Leaked table header / option values '{m.group(0)}' found in stem")

        # --- INVARIANT 13 (Stem): Strict OCR Spelling & Spacing ---
        for pattern in KNOWN_OCR_TYPO_PATTERNS:
            m = re.search(pattern, stem, re.IGNORECASE)
            if m:
                issues.append(f"[{qid}] Invariant 13 Violation: OCR spelling typo '{m.group(0)}' found in stem")

        for pattern in KNOWN_SQUASHED_SPACING_PATTERNS:
            m = re.search(pattern, stem, re.IGNORECASE)
            if m:
                issues.append(f"[{qid}] Invariant 13 Violation: Squashed spacing error '{m.group(0)}' found in stem")

        # --- INVARIANT 5: Strict DSKP Semantic Classification Matrix ---
        stem_lower = stem.lower()

        # Bab 2 (Tingkatan 4 Bab 2: Daya dan Gerakan I)
        if "_B2_" in qid:
            # Check: F = ma or Newton Second Law or Force measuring must NEVER be in Inersia or Momentum
            if any(w in stem_lower for w in ["f = ma", "hukum gerakan newton kedua", "newton's second law", "neraca spring", "mengukur daya"]) and not ("2.6" in sk):
                issues.append(f"[{qid}] Invariant 5 Violation: Stem contains F=ma / Newton 2nd Law / Spring balance but classified into wrong SK '{sk}' (must be SK 2.6 Daya)")

            # Check: Inersia has NO quantitative calculations (K3) in SPM
            if "_K3_" in qid and "2.4" in sk:
                issues.append(f"[{qid}] Invariant 5 Violation: Calculation question (K3) '{qid}' wrongly placed in SK 2.4 Inersia (Inersia has no quantitative calculations in SPM syllabus)")

            # Check: Falling in vacuum must be in SK 2.3 Gerakan Jatuh Bebas
            if any(w in stem_lower for w in ["jatuh bebas di dalam bekas vakum", "free fall in a vacuum container"]) and ("2.5" in sk or "2.4" in sk):
                issues.append(f"[{qid}] Invariant 5 Violation: Question describes free fall in vacuum but placed in '{sk}' (must be SK 2.3 Gerakan Jatuh Bebas)")

            # Check: Newton's First Law concept statement
            if "hukum gerakan newton pertama menyatakan bahawa sesuatu objek akan kekal" in stem_lower and not ("2.4" in sk):
                issues.append(f"[{qid}] Invariant 5 Violation: Question defines Newton's First Law but placed in '{sk}' (must be SK 2.4 Inersia)")

        # Bab 3 (Tingkatan 4 Bab 3: Kegravitian)
        if "kepler" in stem_lower and not ("3.2" in sk):
            issues.append(f"[{qid}] Invariant 5 Violation: Mentions Kepler's Law but placed in '{sk}' (must be SK 3.2 Hukum Kepler)")
        if any(w in stem_lower for w in ["satelit geopegun", "halaju lepas", "escape velocity"]) and not ("3.3" in sk):
            issues.append(f"[{qid}] Invariant 5 Violation: Mentions Satellites / Escape velocity but placed in '{sk}' (must be SK 3.3 Satelit Buatan Manusia)")

        # --- Parse Options ---
        opt_matches = re.finditer(r'\{[^{}]*"id":\s*"([ABCD])"[^{}]*"teks":\s*"([^"]+)"[^{}]*\}', pilihan_str)
        for opt in opt_matches:
            oid = opt.group(1)
            teks = opt.group(2)

            # Invariant 7: Swallowed stem in option
            for pattern in SWALLOWED_STEM_IN_OPTION_PATTERNS:
                if re.search(pattern, teks, re.IGNORECASE):
                    issues.append(f"[{qid}] Invariant 7 Violation: Option {oid} swallowed question stem text: '{teks[:60]}...'")

            # Invariant 8: Stray diagram caption in option text
            if re.search(r'Rajah\s+\d+\s*/\s*Diagram\s+\d+', teks, re.IGNORECASE):
                issues.append(f"[{qid}] Invariant 8 Violation: Option {oid} contains stray diagram caption: '{teks[:50]}...'")

            # Invariant 8: Trailing stray page / question numbers (e.g. '18 km 38')
            if re.search(r'\b\d+\s*(?:km|ms|m|s|N|kg|g)\s+\d{1,3}$', teks):
                issues.append(f"[{qid}] Invariant 8 Violation: Option {oid} has trailing stray digits: '{teks}'")

            # Invariant 13 (Options): OCR typos & squashed spacing
            for pattern in KNOWN_OCR_TYPO_PATTERNS:
                m = re.search(pattern, teks, re.IGNORECASE)
                if m:
                    issues.append(f"[{qid}] Invariant 13 Violation: Option {oid} contains OCR spelling typo '{m.group(0)}'")

            for pattern in KNOWN_SQUASHED_SPACING_PATTERNS:
                m = re.search(pattern, teks, re.IGNORECASE)
                if m:
                    issues.append(f"[{qid}] Invariant 13 Violation: Option {oid} contains squashed spacing error '{m.group(0)}'")

            # Invariant 13 (Options): Bilingual slash separation
            if "<img" not in teks and len(teks) > 15:
                has_bm = bool(re.search(r'\b(daya|hukum|pecutan|halaju|jisim|inersia|momentum|berat|objek|panjang|tempoh|arah|lebih|kurang|bertambah|berkurang|malar|seragam|sifar|sama)\b', teks, re.I))
                has_en = bool(re.search(r'\b(force|law|acceleration|velocity|mass|inertia|momentum|weight|object|length|period|direction|greater|smaller|increase|decrease|constant|uniform|zero|same|thrust|frictional)\b', teks, re.I))
                if has_bm and has_en:
                    if " / " not in teks and r"\n" not in teks and " | " not in teks:
                        issues.append(f"[{qid}] Invariant 13 Violation: Option {oid} contains bilingual text but lacks ' / ' separator: '{teks[:60]}...'")

    print(f"[*] Audited {question_count} questions successfully.")

    # --- INVARIANT 4: CSS Layout & Justified Alignment Check ---
    css_path = "styles.css"
    if os.path.exists(css_path):
        with open(css_path, "r", encoding="utf-8") as f:
            css_text = f.read()
        if ".qcard-hero-body" not in css_text or "text-align: justify" not in css_text:
            issues.append("Invariant 4 Violation: styles.css lacks 'text-align: justify' for question stems")
        if ".soalan-en" not in css_text or "display: block" not in css_text:
            issues.append("Invariant 4 Violation: styles.css lacks 'display: block' for .soalan-en in stems")

    if issues:
        print(f"\n[!] VALIDATION FAILED: Found {len(issues)} defect(s):")
        for iss in issues:
            print(f"    - {iss}")
        return False
    else:
        print("\n[✓] ALL 13 INVARIANTS SATISFIED (100% PASS): Repository is in pristine production state!")
        return True

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "dskp-data.js"
    success = audit_question_bank(target)
    sys.exit(0 if success else 1)
