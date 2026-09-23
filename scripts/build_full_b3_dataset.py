#!/usr/bin/env python3
"""
Full Dataset Builder for Tingkatan 4 Bab 3: Kegravitian.
Processes all 93 questions adhering strictly to the 13 Golden Invariants.
"""

import os
import sys
import json
import re

sys.path.insert(0, '.')
from scripts.build_b3_dataset import classify_dskp, SK_SP_MAP

with open('scratch/t4_b3_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b3_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

print(f"Loaded {len(ANSWERS)} verified answers and {len(DIAGRAM_URLS)} diagram URLs.")
