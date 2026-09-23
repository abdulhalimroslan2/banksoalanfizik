#!/usr/bin/env python3
"""
Production Dataset Generator for Tingkatan 4 Bab 3: Kegravitian.
Adheres strictly to the 13 Golden Invariants (spm-fizik-ingest-pipeline).
"""

import os
import sys
import json
import re
import fitz

sys.path.insert(0, '.')
from scripts.build_b3_dataset import classify_dskp, SK_SP_MAP

with open('scratch/t4_b3_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b3_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

doc = fitz.open('/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 3 T4.pdf')

def clean_text_typos(text):
    if not text:
        return ""
    t = text
    # Fix specific OCR typos
    replacements = [
        (r'\btenpoh\b', 'tempoh'),
        (r'\bjcjari\b', 'jejari'),
        (r'\bsatclit\b', 'satelit'),
        (r'\bSatclit\b', 'Satelit'),
        (r'\bclips\b', 'elips'),
        (r'\bconimunication\b', 'communication'),
        (r'\bdirectlh\b', 'directly'),
        (r'\bsquae\b', 'square'),
        (r'\banyplanet\b', 'any planet'),
        (r'\btinme\b', 'time'),
        (r'\bthemasses\b', 'the masses'),
        (r'\bofboth\b', 'of both'),
        (r'\bbetveen\b', 'between'),
        (r'\bthesquare\b', 'the square'),
        (r'\binthe\b', 'in the'),
        (r'\bofthe\b', 'of the'),
        (r'\bthanthe\b', 'than the'),
        (r'\btochange\b', 'to change'),
        (r'\bisacted\b', 'is acted'),
        (r'\bmovingwith\b', 'moving with'),
        (r'\bNewton\s+s\b', "Newton's"),
        (r'\bNewton\s+\'s\b', "Newton's"),
        (r'\bKepler\s+s\b', "Kepler's"),
        (r'\bEarth\s+s\b', "Earth's"),
        (r'\bEarth\s+\'s\b', "Earth's"),
        (r'\bMars\s+s\b', "Mars'"),
        (r'\bofEarth\b', 'of Earth'),
        (r'\bofa\b', 'of a'),
        (r'\bofgravitational\b', 'of gravitational'),
        (r'\bdiscbabkan\b', 'disebabkan'),
        (r'\bKebolchan\b', 'Kebolehan'),
        (r'\bpermyataan\b', 'pernyataan'),
        (r'\br\s*>\s*R\b', 'r ≥ R'),
        (r'\br>\s*R\b', 'r ≥ R'),
        (r'\bmanakalh\b', 'manakah'),
        (r'\bvater\b', 'water'),
        (r'\bDiagrann\b', 'Diagram'),
        (r'\bdiagran\b', 'diagram'),
        (r'\bcksperimen\b', 'eksperimen'),
        (r'\bFartl\b', 'Earth'),
        (r'\bBulsn\b', 'Bulan'),
        (r'\bSatelt\b', 'Satelit'),
        (r'\bPloner\b', 'Planet'),
        (r'\bUrannus\b', 'Uranus'),
        (r'\blincar\b', 'linear'),
        (r'\bkg1\b', 'kg⁻¹'),
        (r'\bNm²kg\'\b', 'N m² kg⁻²'),
        (r'\bNm²kg\b', 'N m² kg⁻²'),
        (r'\bNm²\s*kg\b', 'N m² kg⁻²'),
        (r'\b1o-!\b', '10⁻¹¹'),
        (r'\b1o-!!\b', '10⁻¹¹'),
        (r'\b10°\b', '10⁶'),
        (r'\b10\*\b', '10²⁴'),
        (r'\b10!\b', '10¹¹'),
        (r'\bms!\b', 'm s⁻¹'),
        (r'\bms-!\b', 'm s⁻¹'),
        (r'\bms\b', 'm s⁻¹'),
        (r'\bms\?\b', 'm s⁻²'),
    ]
    for p, r in replacements:
        t = re.sub(p, r, t)
    # clean extra spaces
    t = re.sub(r'[ \t]+', ' ', t)
    return t.strip()

print("build_t4_b3_dataset.py initialized.")
