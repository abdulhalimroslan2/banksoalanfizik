#!/usr/bin/env python3
"""
Precision Recrop & Cloudflare R2 Upload Engine for Tingkatan 4 Bab 3 (Kegravitian)
Audits, extracts at 300 DPI, autocrops, and uploads all 32 stem diagrams and 20 option diagrams.
Strictly eliminates prompt leaks, trial paper stamps, and stray option letters.
"""

import os
import sys
import io
import json
import fitz
from PIL import Image, ImageChops

sys.path.insert(0, '.')
from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 3 T4.pdf'
OUT_DIR = 'assets/diagrams/modul_konstruk_t4/b3'
os.makedirs(OUT_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
scale = 300.0 / 72.0

def autocrop(im, pad=8):
    bg = Image.new(im.mode, im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    if bbox:
        w, h = im.size
        crop_box = (
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(w, bbox[2] + pad),
            min(h, bbox[3] + pad)
        )
        return im.crop(crop_box)
    return im

# 32 STEM DIAGRAM SPECS
# Format: (page_num_1_indexed, is_right_col, y0, y1, filename_stem)
RAJAH_SPECS = [
    # Rajah 1: p2, Right col. Stem ends y=239.5. Caption y=317.5-324.3
    (2, True, 242, 315.0, 't4_b3_rajah1'),
    # Rajah 2: p4, Left col. Stem ends y=509.5. Diagram starts y~540. Caption y=647.9-657.4
    (4, False, 513, 645.4, 't4_b3_rajah2'),
    # Rajah 3: p5, Right col. Top of col. Caption y=156.8-164.9
    (5, True, 60, 154.3, 't4_b3_rajah3'),
    # Rajah 4: p5, Right col. Stem ends y=457.8. Caption y=587.4-597.3
    (5, True, 461, 584.9, 't4_b3_rajah4'),
    # Rajah 5: p6, Left col. Stem ends y=231.7. Caption y=304.2-312.4
    (6, False, 235, 301.7, 't4_b3_rajah5'),
    # Rajah 6: p7, Left col. Stem ends y=505.2. Caption y=600.1-610.1
    (7, False, 508, 597.6, 't4_b3_rajah6'),
    # Rajah 7: p7, Right col. Stem ends y=187.6. Caption y=305.5-314.4
    (7, True, 191, 303.0, 't4_b3_rajah7'),
    # Rajah 8: p8, Left col. Top of col. Caption y=143.6-155.5
    (8, False, 60, 141.1, 't4_b3_rajah8'),
    # Rajah 9: p8, Left col. Stem ends y=468.2. Caption y=595.8-606.7
    (8, False, 472, 593.3, 't4_b3_rajah9'),
    # Rajah 10: p8, Right col. Stem ends y=469.3. Caption y=578.3-587.3
    (8, True, 473, 575.8, 't4_b3_rajah10'),
    # Rajah 11: p9, Right col. Stem ends y=335.8. Caption y=483.7-494.1
    (9, True, 339, 481.2, 't4_b3_rajah11'),
    # Rajah 12: p10, Left col. Stem ends y=138.7. Caption y=245.6-253.8
    (10, False, 142, 243.1, 't4_b3_rajah12'),
    # Rajah 13: p10, Left col. Stem ends y=591.7. Caption y=678.0-686.3
    (10, False, 595, 675.5, 't4_b3_rajah13'),
    # Rajah 14: p10, Right col. Stem ends y=321.1. Caption y=389.0-397.8
    (10, True, 325, 386.5, 't4_b3_rajah14'),
    # Rajah 15: p11, Left col. Stem ends y=607.9. Caption y=707.1-717.5
    (11, False, 611, 704.6, 't4_b3_rajah15'),
    # Rajah 16: p11, Right col. Stem ends y=452.3. Caption y=530.3-538.9
    (11, True, 456, 527.8, 't4_b3_rajah16'),
    # Rajah 17: p13, Left col. Top of col. Caption y=184.3-193.6
    (13, False, 60, 181.8, 't4_b3_rajah17'),
    # Rajah 18: p13, Right col. Stem ends y=440.3. Caption y=603.7-613.0
    (13, True, 444, 601.2, 't4_b3_rajah18'),
    # Rajah 19: p14, Left col. Stem ends y=108.6. Caption y=205.9-215.0
    (14, False, 112, 203.4, 't4_b3_rajah19'),
    # Rajah 20: p14, Right col. Stem ends y=636.3. Caption y=749.4-759.7
    (14, True, 640, 746.9, 't4_b3_rajah20'),
    # Rajah 21: p15, Left col. Stem ends y=385.6. Caption y=507.4-516.0
    (15, False, 389, 504.9, 't4_b3_rajah21'),
    # Rajah 22: p15, Right col. Stem ends y=657.8. Caption y=759.8-767.9
    (15, True, 661, 757.3, 't4_b3_rajah22'),
    # Rajah 23: p16, Left col. Stem ends y=242.1. Caption y=350.6-359.7
    (16, False, 246, 348.1, 't4_b3_rajah23'),
    # Rajah 24: p16, Right col. Stem ends y=98.4. Caption y=217.5-226.8
    (16, True, 102, 215.0, 't4_b3_rajah24'),
    # Rajah 25: p17, Left col. Stem ends y=649.2. Caption y=738.6-747.9
    (17, False, 653, 736.1, 't4_b3_rajah25'),
    # Rajah 26: p18, Left col. Top of col. Caption y=186.1-194.8
    (18, False, 60, 183.6, 't4_b3_rajah26'),
    # Rajah 27: p18, Right col. Stem ends y=194.6. Caption y=295.7-305.0
    (18, True, 198, 293.2, 't4_b3_rajah27'),
    # Rajah 28: p18, Right col. Stem ends y=611.2. Caption y=741.0-751.2
    (18, True, 615, 738.5, 't4_b3_rajah28'),
    # Rajah 29: p19, Left col. Stem ends y=279.5. Caption y=368.2-376.3
    (19, False, 283, 365.7, 't4_b3_rajah29'),
    # Rajah 30: p19, Left col. Stem ends y=598.4. Caption y=745.5-754.0
    (19, False, 602, 743.0, 't4_b3_rajah30'),
    # Rajah 31: p19, Right col. Stem ends y=479.4. Caption y=614.5-621.5
    (19, True, 483, 612.0, 't4_b3_rajah31'),
    # Rajah 32: p20, Left col. Stem ends y=443.1. Caption y=551.0-560.1
    (20, False, 447, 548.5, 't4_b3_rajah32')
]

# 20 OPTION DIAGRAM SPECS
# Isolated graph boxes excluding option letters and question prompts
OPTION_SPECS = [
    # Q06 (Page 3, Right col):
    (3, 't4_b3_k2_q06_opt_a', (344, 70, 436, 134)),
    (3, 't4_b3_k2_q06_opt_c', (454, 70, 545, 134)),
    (3, 't4_b3_k2_q06_opt_b', (344, 136, 436, 208)),
    (3, 't4_b3_k2_q06_opt_d', (454, 136, 545, 208)),

    # Q07 (Page 3, Right col):
    (3, 't4_b3_k2_q07_opt_a', (344, 320, 436, 390)),
    (3, 't4_b3_k2_q07_opt_c', (454, 320, 545, 390)),
    (3, 't4_b3_k2_q07_opt_b', (344, 392, 436, 470)),
    (3, 't4_b3_k2_q07_opt_d', (454, 392, 545, 470)),

    # Q34 (Page 9, Left col):
    (9, 't4_b3_k2_q34_opt_a', (95, 262, 285, 344)),
    (9, 't4_b3_k2_q34_opt_b', (95, 346, 285, 426)),
    (9, 't4_b3_k2_q34_opt_c', (95, 428, 285, 506)),
    (9, 't4_b3_k2_q34_opt_d', (95, 508, 285, 592)),

    # Q46 (Page 12, Left col):
    (12, 't4_b3_k2_q46_opt_a', (85, 160, 182, 248)),
    (12, 't4_b3_k2_q46_opt_c', (196, 160, 288, 248)),
    (12, 't4_b3_k2_q46_opt_b', (85, 250, 182, 342)),
    (12, 't4_b3_k2_q46_opt_d', (196, 250, 288, 342)),

    # K3_Q07 (Page 14, Right col):
    (14, 't4_b3_k3_q07_opt_a', (338, 55, 535, 168)),
    (14, 't4_b3_k3_q07_opt_b', (338, 172, 535, 290)),
    (14, 't4_b3_k3_q07_opt_c', (338, 295, 535, 412)),
    (14, 't4_b3_k3_q07_opt_d', (338, 418, 535, 545))
]

# Load existing diagram URLs mapping
urls_file = 'scratch/t4_b3_diagram_urls.json'
with open(urls_file, 'r', encoding='utf-8') as f:
    diagram_urls = json.load(f)

print(f"=== Starting Recrop & Cloudflare R2 Upload for 52 Bab 3 Diagrams ===")

# 1. Process 32 Stem Diagrams
for pno, is_right, y0, y1, name in RAJAH_SPECS:
    page = doc[pno - 1]
    x0_pt = 300 if is_right else 45
    x1_pt = 545 if is_right else 286
    
    rect = fitz.Rect(x0_pt, y0, x1_pt, y1)
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect)
    raw_img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
    trimmed_img = autocrop(raw_img, pad=8)
    
    fname = f"{name}.webp"
    local_path = os.path.join(OUT_DIR, fname)
    trimmed_img.save(local_path, 'WEBP', quality=95, method=6)
    
    with open(local_path, 'rb') as f:
        img_bytes = f.read()
    
    r2_key = f"assets/diagrams/modul_konstruk_t4/b3/{fname}"
    cdn_url = upload_bytes(img_bytes, r2_key, 'image/webp')
    
    # Store with cache buster query parameter for immediate client invalidation
    versioned_url = f"{cdn_url}?v=20260924_v3"
    diagram_urls[name] = versioned_url
    print(f"✅ Stem [{name}]: {trimmed_img.size} -> {versioned_url}")

# 2. Process 20 Option Diagrams
for pno, name, rect_tuple in OPTION_SPECS:
    page = doc[pno - 1]
    rect = fitz.Rect(*rect_tuple)
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect)
    raw_img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
    trimmed_img = autocrop(raw_img, pad=8)
    
    fname = f"{name}.webp"
    local_path = os.path.join(OUT_DIR, fname)
    trimmed_img.save(local_path, 'WEBP', quality=95, method=6)
    
    with open(local_path, 'rb') as f:
        img_bytes = f.read()
        
    r2_key = f"assets/diagrams/modul_konstruk_t4/b3/{fname}"
    cdn_url = upload_bytes(img_bytes, r2_key, 'image/webp')
    
    versioned_url = f"{cdn_url}?v=20260924_v3"
    diagram_urls[name] = versioned_url
    print(f"✅ Option [{name}]: {trimmed_img.size} -> {versioned_url}")

# Save updated diagram URLs
with open(urls_file, 'w', encoding='utf-8') as f:
    json.dump(diagram_urls, f, indent=2)

print("\n🎉 All 52 diagrams successfully recropped, saved locally, and uploaded to Cloudflare R2!")
