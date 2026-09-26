#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Crops answer rubric diagrams from Modul Konstruk Jawapan T4.pdf (pages 6, 7, 8)
and uploads them to Cloudflare R2.
"""

import os
import sys
sys.path.insert(0, ".")
from PIL import Image, ImageChops
import json
from scripts.r2_uploader import upload_bytes

LOCAL_RUBRIK_DIR = 'assets/diagrams/modul_konstruk_t4/b6/rubrik'
os.makedirs(LOCAL_RUBRIK_DIR, exist_ok=True)

R2_BASE_URL = 'https://pub-833572f7cc244a0d9627cef82c840538.r2.dev'

def autocrop(im, pad=8):
    bg = Image.new(im.mode, im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    if bbox:
        w, h = im.size
        return im.crop((max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(w, bbox[2]+pad), min(h, bbox[3]+pad)))
    return im

# Load skema page images (3513 x 2492)
p6 = Image.open('scratch/b6_skema_pages/page_6.png')
p7 = Image.open('scratch/b6_skema_pages/page_7.png')
p8 = Image.open('scratch/b6_skema_pages/page_8.png')

# Precise pixel coordinates (x0, y0, x1, y1)
rubrik_coords = {
    # Page 6: Right column (x: 2750 to 3450 approx)
    # Q2: Cermin cekung u=2f
    "k3_q02": (p6, 2800, 220, 3450, 480),
    # Q5: Cermin cekung u<f
    "k3_q05": (p6, 2800, 1150, 3450, 1550),
    # Q7: Kanta cekung u=2f
    "k3_q07": (p6, 2800, 1750, 3450, 2180),

    # Page 7:
    # Q10 (col 1): Cermin cekung u=2f
    "k3_q10": (p7, 300, 240, 950, 520),
    # Q13 (col 1): Cermin cekung f<u<2f
    "k3_q13": (p7, 300, 1280, 950, 1620),
    # Q14 (col 1): Kanta cekung u=2f
    "k3_q14": (p7, 300, 1650, 950, 2020),
    # Q15 (col 1): 1 Kotak, 2 Fokus, 3 Centre
    "k3_q15": (p7, 300, 2050, 950, 2450),
    # Q16 (col 2): Kanta cembung f<u<2f
    "k3_q16": (p7, 1000, 80, 1680, 410),
    # Q22 (col 2): Kanta cekung u=2f
    "k3_q22": (p7, 1000, 2000, 1680, 2450),
    # Q23 (col 3): Sinar kaca-udara (sudut genting)
    "k3_q23": (p7, 1750, 70, 2420, 350),
    # Q32 (col 4): Sinar kaca-udara (pembiasan)
    "k3_q32": (p7, 2500, 260, 3200, 560),
    # Q35 (col 4): Kanta cekung
    "k3_q35": (p7, 2500, 1050, 3200, 1480),
    # Q36 (col 4): Kanta cembung f<u
    "k3_q36": (p7, 2500, 1490, 3200, 1870),

    # Page 8:
    # Q40 (col 1): Kanta cembung u<f
    "k3_q40": (p8, 100, 110, 850, 480),
    # Q44 (col 1): Cermin cekung f<u<2f
    "k3_q44": (p8, 100, 1310, 850, 1640),
    # Q46 (col 1): Kanta cembung u<f
    "k3_q46": (p8, 100, 2030, 850, 2400),
    # Q47 (col 2): Cermin cekung u>2f
    "k3_q47": (p8, 900, 60, 1650, 360),
    # Q48 (col 2): Blok kaca
    "k3_q48": (p8, 900, 380, 1650, 920),
    # Q53 (col 3): Cermin cekung menumpukan alur
    "k3_q53": (p8, 1720, 80, 2450, 450),
    # Q55 (col 3): Kanta cekung mencapahkan alur
    "k3_q55": (p8, 1720, 850, 2450, 1250),
    # Q58 (col 3): Cermin cekung u>2f
    "k3_q58": (p8, 1720, 1950, 2450, 2450),
    # Q60 (col 4): Cermin cekung u=2f
    "k3_q60": (p8, 2500, 280, 3350, 620),
    # Q62 (col 4): Intan / Diamond
    "k3_q62": (p8, 2500, 1360, 3350, 1750)
}

rubrik_urls = {}
for q_key, (src_img, x0, y0, x1, y1) in rubrik_coords.items():
    cropped = src_img.crop((x0, y0, x1, y1))
    clean = autocrop(cropped)
    local_name = f't4_b6_{q_key}_rubrik_v2.webp'
    local_path = os.path.join(LOCAL_RUBRIK_DIR, local_name)
    clean.save(local_path, format='WEBP', quality=95)
    
    # Upload to R2
    with open(local_path, 'rb') as fp:
        upload_bytes(fp.read(), f'diagrams/modul_konstruk_t4/b6/rubrik/{local_name}', content_type='image/webp')
    
    rubrik_url = f'{R2_BASE_URL}/diagrams/modul_konstruk_t4/b6/rubrik/{local_name}'
    rubrik_urls[q_key] = rubrik_url
    print(f'Uploaded rubric diagram {q_key}: {clean.size} -> {rubrik_url}')

with open('scratch/t4_b6_rubrik_urls.json', 'w') as fp:
    json.dump(rubrik_urls, fp, indent=2)
print(f'Done! Saved {len(rubrik_urls)} rubric diagram URLs to scratch/t4_b6_rubrik_urls.json')
