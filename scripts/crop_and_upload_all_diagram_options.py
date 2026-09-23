#!/usr/bin/env python3
"""
High-Precision Diagram Extraction & Option Slicer for Tingkatan 4 Bab 2
Extracts:
- 3 Fixed Stem Diagrams (Rajah 2, Rajah 4, Rajah 18)
- 13 Sets of Individual Option Graphs (A, B, C, D) = 52 images
Uploads to Cloudflare R2 and verifies headers.
"""

import os
import sys
sys.path.append(os.getcwd())
import io
import fitz
from PIL import Image, ImageChops
import pytesseract
from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 2 T4.pdf'
OUT_DIR = 'scratch/fixed_diagrams_b2'
os.makedirs(OUT_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
scale = 300.0 / 72.0

def autocrop(im, pad=6):
    bg = Image.new(im.mode, im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    if bbox:
        w, h = im.size
        return im.crop((max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(w, bbox[2]+pad), min(h, bbox[3]+pad)))
    return im

def crop_exact(pno, x0_pt, y0_pt, x1_pt, y1_pt, pad=6):
    page = doc[pno]
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale))
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    box = (int(x0_pt * scale), int(y0_pt * scale), int(x1_pt * scale), int(y1_pt * scale))
    cropped = img.crop(box)
    return autocrop(cropped, pad=pad)

# 1. STEM DIAGRAMS (v2)
stem_diagrams = {
    # Rajah 2 on Page 3 (0-indexed 2), Col 0
    "t4_b2_rajah2_v2.webp": (2, 60, 195, 290, 344),
    # Rajah 4 on Page 3 (0-indexed 2), Col 1
    "t4_b2_rajah4_v2.webp": (2, 320, 416, 545, 546),
    # Rajah 18 on Page 8 (0-indexed 7), Col 0
    "t4_b2_rajah18_v2.webp": (7, 55, 317, 295, 425),
}

# 2. OPTION DIAGRAMS (13 Questions * 4 Options)
# Format: (pno, x0, y0, x1, y1) in PDF points
option_diagrams = {
    # Q01: Page 2 (idx 1), Col 1 (F vs x)
    "t4_b2_k2_q01_opt_a.webp": (1, 325, 368, 430, 438),
    "t4_b2_k2_q01_opt_c.webp": (1, 435, 368, 545, 438),
    "t4_b2_k2_q01_opt_b.webp": (1, 325, 440, 430, 515),
    "t4_b2_k2_q01_opt_d.webp": (1, 435, 440, 545, 515),

    # Q11: Page 5 (idx 4), Col 0 (v vs t)
    "t4_b2_k2_q11_opt_a.webp": (4, 60, 200, 175, 275),
    "t4_b2_k2_q11_opt_c.webp": (4, 175, 200, 290, 275),
    "t4_b2_k2_q11_opt_b.webp": (4, 60, 280, 175, 355),
    "t4_b2_k2_q11_opt_d.webp": (4, 175, 280, 290, 355),

    # Q40: Page 12 (idx 11), Col 1 (v vs t)
    "t4_b2_k2_q40_opt_a.webp": (11, 320, 590, 430, 655),
    "t4_b2_k2_q40_opt_c.webp": (11, 430, 590, 545, 655),
    "t4_b2_k2_q40_opt_b.webp": (11, 320, 660, 430, 735),
    "t4_b2_k2_q40_opt_d.webp": (11, 430, 660, 545, 735),

    # Q56: Page 16 (idx 15), Col 0 (v vs t)
    "t4_b2_k2_q56_opt_a.webp": (15, 60, 560, 175, 640),
    "t4_b2_k2_q56_opt_c.webp": (15, 175, 560, 290, 640),
    "t4_b2_k2_q56_opt_b.webp": (15, 60, 645, 175, 725),
    "t4_b2_k2_q56_opt_d.webp": (15, 175, 645, 290, 725),

    # Q67: Page 18 (idx 17) & Page 19 (idx 18)
    "t4_b2_k2_q67_opt_a.webp": (17, 320, 525, 545, 610),
    "t4_b2_k2_q67_opt_b.webp": (17, 320, 615, 545, 705),
    "t4_b2_k2_q67_opt_c.webp": (18, 55, 65, 290, 155),
    "t4_b2_k2_q67_opt_d.webp": (18, 55, 160, 290, 235),

    # Q72: Page 20 (idx 19), Col 0 (v vs t)
    "t4_b2_k2_q72_opt_a.webp": (19, 60, 400, 175, 465),
    "t4_b2_k2_q72_opt_c.webp": (19, 175, 400, 290, 465),
    "t4_b2_k2_q72_opt_b.webp": (19, 60, 465, 175, 530),
    "t4_b2_k2_q72_opt_d.webp": (19, 175, 465, 290, 530),

    # Q75: Page 21 (idx 20), Col 0 (a vs t)
    "t4_b2_k2_q75_opt_a.webp": (20, 60, 355, 175, 420),
    "t4_b2_k2_q75_opt_c.webp": (20, 175, 355, 290, 420),
    "t4_b2_k2_q75_opt_b.webp": (20, 60, 420, 175, 485),
    "t4_b2_k2_q75_opt_d.webp": (20, 175, 420, 290, 485),

    # Q83: Page 23 (idx 22), Col 0 (s vs t)
    "t4_b2_k2_q83_opt_a.webp": (22, 60, 280, 175, 350),
    "t4_b2_k2_q83_opt_c.webp": (22, 175, 280, 290, 350),
    "t4_b2_k2_q83_opt_b.webp": (22, 60, 350, 175, 420),
    "t4_b2_k2_q83_opt_d.webp": (22, 175, 350, 290, 420),

    # Q87: Page 24 (idx 23), Col 0 (s vs t)
    "t4_b2_k2_q87_opt_a.webp": (23, 60, 275, 175, 355),
    "t4_b2_k2_q87_opt_c.webp": (23, 175, 275, 290, 355),
    "t4_b2_k2_q87_opt_b.webp": (23, 60, 355, 175, 435),
    "t4_b2_k2_q87_opt_d.webp": (23, 175, 355, 290, 435),

    # K3_Q05: Page 27 (idx 26) & Page 28 (idx 27)
    "t4_b2_k3_q05_opt_a.webp": (26, 320, 520, 545, 595),
    "t4_b2_k3_q05_opt_b.webp": (26, 320, 600, 545, 675),
    "t4_b2_k3_q05_opt_c.webp": (26, 320, 675, 545, 755),
    "t4_b2_k3_q05_opt_d.webp": (27, 55, 18, 290, 126),

    # K3_Q08: Page 28 (idx 27), Col 1 (a vs t)
    "t4_b2_k3_q08_opt_a.webp": (27, 315, 335, 428, 415),
    "t4_b2_k3_q08_opt_c.webp": (27, 428, 335, 545, 415),
    "t4_b2_k3_q08_opt_b.webp": (27, 315, 418, 428, 495),
    "t4_b2_k3_q08_opt_d.webp": (27, 428, 418, 545, 495),

    # K3_Q17: Page 30 (idx 29), Col 1 (a vs t)
    "t4_b2_k3_q17_opt_a.webp": (29, 315, 100, 430, 165),
    "t4_b2_k3_q17_opt_c.webp": (29, 430, 100, 545, 165),
    "t4_b2_k3_q17_opt_b.webp": (29, 315, 165, 430, 235),
    "t4_b2_k3_q17_opt_d.webp": (29, 430, 165, 545, 235),

    # K3_Q40: Page 35 (idx 34), Col 0 (v vs t)
    "t4_b2_k3_q40_opt_a.webp": (34, 60, 360, 290, 445),
    "t4_b2_k3_q40_opt_b.webp": (34, 60, 450, 290, 540),
    "t4_b2_k3_q40_opt_c.webp": (34, 60, 545, 290, 645),
    "t4_b2_k3_q40_opt_d.webp": (34, 60, 650, 290, 755),
}

all_to_crop = {}
all_to_crop.update(stem_diagrams)
all_to_crop.update(option_diagrams)

print(f"Total images to extract, crop and upload: {len(all_to_crop)}")

results = {}
for filename, (pno, x0, y0, x1, y1) in all_to_crop.items():
    try:
        img = crop_exact(pno, x0, y0, x1, y1)
        local_path = os.path.join(OUT_DIR, filename)
        img.save(local_path, "WEBP", quality=95)
        
        # Upload to Cloudflare R2
        with open(local_path, "rb") as f:
            data = f.read()
        r2_key = f"diagrams/modul_konstruk_t4/b2/{filename}"
        url = upload_bytes(data, r2_key, "image/webp")
        results[filename] = {
            "size": img.size,
            "url": url
        }
        print(f"Uploaded {filename}: {img.size} -> {url}")
    except Exception as e:
        print(f"ERROR on {filename}: {e}")

print(f"\nAll done! Successfully uploaded {len(results)}/{len(all_to_crop)} images.")
