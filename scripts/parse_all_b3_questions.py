import os
import sys
import json
import re
import fitz

doc = fitz.open('/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 3 T4.pdf')

with open('scratch/t4_b3_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b3_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

from scripts.build_b3_dataset import classify_dskp

print("Setup complete. Starting extraction...")
