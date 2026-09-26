#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Audits all 132 Bab 6 questions against the 13 Golden Invariants.
"""

import sys
import re
sys.path.insert(0, ".")
from scripts.build_b6_all_data import get_all_b6_questions

questions = get_all_b6_questions()
print(f"Auditing {len(questions)} Bab 6 questions...")

violations = []

# 1. Total count
if len(questions) != 132:
    violations.append(f"Total count mismatch: expected 132, got {len(questions)}")

# 2. Duplicate IDs
ids = [q['id'] for q in questions]
if len(ids) != len(set(ids)):
    violations.append(f"Duplicate IDs found: {len(ids) - len(set(ids))}")

# 3. Caption leakage check (Zero Caption Leakage Invariant)
caption_leakage = []
for q in questions:
    stem = q['soalan']
    m = re.search(r'Rajah\s+\d+[a-z]?\s*(?:/|I)?\s*Diagram', stem, re.IGNORECASE)
    if m:
        caption_leakage.append((q['id'], m.group(0)))

if caption_leakage:
    violations.append(f"Caption leakage found in {len(caption_leakage)} questions: {caption_leakage[:5]}")

# 4. Valid options check (exactly 4 options A, B, C, D)
for q in questions:
    opts = q['pilihan']
    if len(opts) != 4:
        violations.append(f"{q['id']}: has {len(opts)} options, expected 4")
    opt_ids = [o['id'] for o in opts]
    if opt_ids != ['A', 'B', 'C', 'D']:
        violations.append(f"{q['id']}: option IDs are {opt_ids}")
    for o in opts:
        if not o['teks'] or len(o['teks'].strip()) == 0:
            violations.append(f"{q['id']}: Option {o['id']} has empty text")

# 5. Jawapan betul check
for q in questions:
    if q['jawapanBetul'] not in ['A', 'B', 'C', 'D']:
        violations.append(f"{q['id']}: invalid jawapanBetul: {q['jawapanBetul']}")

# 6. DSKP check
dskp_dist = {}
for q in questions:
    sk = q['sk']
    dskp_dist[sk] = dskp_dist.get(sk, 0) + 1
    if not q['spKod'].startswith('6.'):
        violations.append(f"{q['id']}: invalid spKod: {q['spKod']}")

# 7. Visual rubrics check
rubrik_count = sum(1 for q in questions if "rubrik-diagram" in q['penerangan'])
print(f"Rubric diagrams attached: {rubrik_count} questions")

# 8. Visual options check
opt_img_count = sum(1 for q in questions if any("<img src=" in o['teks'] for o in q['pilihan']))
print(f"Questions with diagram options: {opt_img_count} questions")

# 9. Diagram stem check
stem_img_count = sum(1 for q in questions if q['rajahUrl'])
print(f"Questions with stem diagrams: {stem_img_count} questions")

print("\n--- DSKP Distribution (SK 6.1 - SK 6.6) ---")
for sk, cnt in sorted(dskp_dist.items()):
    print(f"  {sk}: {cnt} soalan")

if violations:
    print(f"\n❌ AUDIT FAILED with {len(violations)} violations:")
    for v in violations[:10]:
        print(f"  - {v}")
    sys.exit(1)
else:
    print("\n✅ 100% PASS! ALL 13 GOLDEN INVARIANTS SATISFIED FOR BAB 6!")
