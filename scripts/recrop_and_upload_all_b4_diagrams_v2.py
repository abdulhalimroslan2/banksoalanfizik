#!/usr/bin/env python3
"""
Precision Re-crop and R2 Upload Pipeline for Tingkatan 4 Bab 4 (Haba) Diagrams (Version 2)
Enforces Invariant 1 (Strict Stem Crop, Sifar Kapsyen 'Rajah []', Sifar Teks Soalan)
"""

import os
import sys
sys.path.insert(0, ".")
import json
import fitz
import numpy as np
import pytesseract
from PIL import Image

from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 4 T4.pdf'
LOCAL_DIR = 'assets/diagrams/modul_konstruk_t4/b4'
os.makedirs(LOCAL_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
scale = 300 / 72

def clean_crop_diagram(pil_img, thresh=210, pad=8):
    gray = pil_img.convert('L')
    arr = np.array(gray)
    dark_mask = arr < thresh
    if not np.any(dark_mask):
        return pil_img
    y_indices, x_indices = np.where(dark_mask)
    x_min, x_max = max(0, x_indices.min() - pad), min(arr.shape[1], x_indices.max() + pad)
    y_min, y_max = max(0, y_indices.min() - pad), min(arr.shape[0], y_indices.max() + pad)
    return pil_img.crop((x_min, y_min, x_max, y_max))

PERFECT_COORDS = {
    1:  {"page": 1,  "is_right": False, "y0": 514.0, "y1": 564.0},
    2:  {"page": 1,  "is_right": True,  "y0": 603.0, "y1": 714.0},
    3:  {"page": 2,  "is_right": False, "y0": 241.0, "y1": 351.0},
    4:  {"page": 2,  "is_right": False, "y0": 548.0, "y1": 634.0},
    5:  {"page": 2,  "is_right": True,  "y0": 176.0, "y1": 270.0},
    6:  {"page": 2,  "is_right": True,  "y0": 608.0, "y1": 695.0},
    7:  {"page": 3,  "is_right": False, "y0": 320.0, "y1": 425.0},
    8:  {"page": 3,  "is_right": True,  "y0": 70.0,  "y1": 154.0},  # Corrected from wrong column!
    9:  {"page": 3,  "is_right": True,  "y0": 336.0, "y1": 468.0},
    10: {"page": 4,  "is_right": False, "y0": 48.0,  "y1": 127.0},
    11: {"page": 4,  "is_right": False, "y0": 476.0, "y1": 596.0},
    12: {"page": 4,  "is_right": True,  "y0": 510.0, "y1": 588.0},
    13: {"page": 5,  "is_right": False, "y0": 178.0, "y1": 233.0},
    14: {"page": 5,  "is_right": False, "y0": 685.0, "y1": 769.0},
    15: {"page": 5,  "is_right": True,  "y0": 408.0, "y1": 508.0},
    16: {"page": 6,  "is_right": False, "y0": 98.0,  "y1": 194.0},
    17: {"page": 6,  "is_right": False, "y0": 522.0, "y1": 608.0},
    18: {"page": 6,  "is_right": True,  "y0": 208.0, "y1": 313.0},
    19: {"page": 7,  "is_right": False, "y0": 48.0,  "y1": 163.0},
    20: {"page": 7,  "is_right": False, "y0": 590.0, "y1": 690.0},
    21: {"page": 7,  "is_right": True,  "y0": 228.0, "y1": 346.0},
    22: {"page": 8,  "is_right": False, "y0": 48.0,  "y1": 181.0},
    23: {"page": 8,  "is_right": False, "y0": 350.0, "y1": 454.0},
    24: {"page": 8,  "is_right": True,  "y0": 111.0, "y1": 178.0},
    25: {"page": 8,  "is_right": True,  "y0": 474.0, "y1": 579.0},
    26: {"page": 9,  "is_right": False, "y0": 281.0, "y1": 412.0},
    27: {"page": 9,  "is_right": False, "y0": 617.0, "y1": 689.0},
    28: {"page": 9,  "is_right": True,  "y0": 611.0, "y1": 719.0},
    29: {"page": 10, "is_right": False, "y0": 436.0, "y1": 549.0},
    30: {"page": 11, "is_right": False, "y0": 126.0, "y1": 242.0},
    31: {"page": 11, "is_right": True,  "y0": 48.0,  "y1": 148.0},
    32: {"page": 12, "is_right": False, "y0": 330.0, "y1": 427.0},
    33: {"page": 12, "is_right": False, "y0": 634.0, "y1": 758.0},
    34: {"page": 13, "is_right": False, "y0": 68.0,  "y1": 214.0},
    35: {"page": 13, "is_right": False, "y0": 564.0, "y1": 699.0},
    36: {"page": 13, "is_right": True,  "y0": 370.0, "y1": 473.0},
    37: {"page": 14, "is_right": False, "y0": 164.0, "y1": 275.0},
    38: {"page": 14, "is_right": True,  "y0": 55.0,  "y1": 135.0},
    39: {"page": 14, "is_right": True,  "y0": 401.0, "y1": 510.0},
    40: {"page": 15, "is_right": False, "y0": 539.0, "y1": 649.0},
    41: {"page": 15, "is_right": True,  "y0": 268.0, "y1": 361.0},
    42: {"page": 16, "is_right": False, "y0": 48.0,  "y1": 192.0},
    43: {"page": 16, "is_right": True,  "y0": 125.0, "y1": 224.0},
    44: {"page": 16, "is_right": True,  "y0": 473.0, "y1": 534.0},
    45: {"page": 17, "is_right": False, "y0": 125.0, "y1": 208.0},
    46: {"page": 17, "is_right": False, "y0": 552.0, "y1": 627.0},
    47: {"page": 17, "is_right": True,  "y0": 219.0, "y1": 324.0},
    48: {"page": 17, "is_right": True,  "y0": 675.0, "y1": 772.0},
    49: {"page": 18, "is_right": True,  "y0": 191.0, "y1": 260.0},
    50: {"page": 19, "is_right": False, "y0": 371.0, "y1": 423.0},
    51: {"page": 19, "is_right": False, "y0": 659.0, "y1": 750.0},
    52: {"page": 19, "is_right": True,  "y0": 498.0, "y1": 613.0},
    53: {"page": 20, "is_right": True,  "y0": 507.0, "y1": 620.0},
    54: {"page": 21, "is_right": False, "y0": 176.0, "y1": 292.0},
    55: {"page": 21, "is_right": False, "y0": 498.0, "y1": 617.0},
    56: {"page": 21, "is_right": True,  "y0": 576.0, "y1": 639.0},
    57: {"page": 22, "is_right": False, "special": "dual_syringe"},
    58: {"page": 22, "is_right": True,  "y0": 66.0,  "y1": 150.0},
    59: {"page": 22, "is_right": True,  "y0": 361.0, "y1": 394.0},
    60: {"page": 23, "is_right": False, "y0": 370.0, "y1": 508.0},
    61: {"page": 23, "is_right": True,  "y0": 48.0,  "y1": 189.0},
    62: {"page": 23, "is_right": True,  "y0": 565.0, "y1": 667.0},
    63: {"page": 25, "is_right": False, "y0": 331.0, "y1": 420.0},
    64: {"page": 25, "is_right": True,  "y0": 262.0, "y1": 344.0},
    65: {"page": 26, "is_right": False, "y0": 60.0,  "y1": 178.0},
    66: {"page": 26, "is_right": False, "special": "dual_diagram_66"},
    67: {"page": 26, "is_right": True,  "y0": 490.0, "y1": 585.0},
    68: {"page": 27, "is_right": False, "y0": 638.0, "y1": 756.0},
    69: {"page": 27, "is_right": True,  "y0": 607.0, "y1": 743.0},
    70: {"page": 28, "is_right": False, "y0": 310.0, "y1": 430.0},
    71: {"page": 28, "is_right": True,  "y0": 231.0, "y1": 352.0}
}

DIAGRAM_URLS_V2 = {}
audit_failures = []

print("=== Starting Precision Re-crop and R2 Upload for Bab 4 (71 Diagrams) ===")

for r in range(1, 72):
    cfg = PERFECT_COORDS[r]
    p_num = cfg['page']
    page = doc[p_num - 1]
    
    if cfg.get("special") == "dual_syringe":
        # Syringe 57(a) & 57(b) stacked
        rect_a = fitz.Rect(45, 330.0, 286, 375.0)
        pix_a = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect_a)
        img_a = clean_crop_diagram(Image.frombytes('RGB', [pix_a.width, pix_a.height], pix_a.samples))
        rect_b = fitz.Rect(45, 387.0, 286, 433.0)
        pix_b = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect_b)
        img_b = clean_crop_diagram(Image.frombytes('RGB', [pix_b.width, pix_b.height], pix_b.samples))
        w = max(img_a.width, img_b.width)
        h = img_a.height + img_b.height + 20
        cropped = Image.new('RGB', (w, h), (255, 255, 255))
        cropped.paste(img_a, ((w - img_a.width)//2, 0))
        cropped.paste(img_b, ((w - img_b.width)//2, img_a.height + 20))
    elif cfg.get("special") == "dual_diagram_66":
        # Diagram 66(a) & 66(b) stacked
        rect_a = fitz.Rect(45, 540.0, 286, 632.0)
        pix_a = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect_a)
        img_a = clean_crop_diagram(Image.frombytes('RGB', [pix_a.width, pix_a.height], pix_a.samples))
        rect_b = fitz.Rect(45, 650.0, 286, 754.0)
        pix_b = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect_b)
        img_b = clean_crop_diagram(Image.frombytes('RGB', [pix_b.width, pix_b.height], pix_b.samples))
        w = max(img_a.width, img_b.width)
        h = img_a.height + img_b.height + 20
        cropped = Image.new('RGB', (w, h), (255, 255, 255))
        cropped.paste(img_a, ((w - img_a.width)//2, 0))
        cropped.paste(img_b, ((w - img_b.width)//2, img_a.height + 20))
    else:
        is_right = cfg['is_right']
        x0 = 300 if is_right else 45
        x1 = 545 if is_right else 286
        y0 = cfg['y0']
        y1 = cfg['y1']
        rect = fitz.Rect(x0, y0, x1, y1)
        pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect)
        raw = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
        cropped = clean_crop_diagram(raw, thresh=210, pad=8)

    # Save v2 WebP
    local_path_v2 = f"{LOCAL_DIR}/t4_b4_rajah{r}_v2.webp"
    cropped.save(local_path_v2, "WEBP", quality=95)
    # Also overwrite base webp
    local_path_base = f"{LOCAL_DIR}/t4_b4_rajah{r}.webp"
    cropped.save(local_path_base, "WEBP", quality=95)

    with open(local_path_v2, "rb") as f:
        data = f.read()

    r2_key_v2 = f"assets/diagrams/modul_konstruk_t4/b4/t4_b4_rajah{r}_v2.webp"
    url_v2 = upload_bytes(data, r2_key_v2)
    DIAGRAM_URLS_V2[f"rajah{r}"] = url_v2

    # Also upload base key
    r2_key_base = f"assets/diagrams/modul_konstruk_t4/b4/t4_b4_rajah{r}.webp"
    upload_bytes(data, r2_key_base)

    # OCR QA Check
    txt = pytesseract.image_to_string(cropped, config='--psm 6').strip().lower()
    has_cap = "rajah" in txt or "diagram" in txt
    has_source = any(s in txt for s in ['(spm', '(kelantan', '(terengganu', '(selangor', '(perlis', '(perak', '(johor', '(pahang', '(melaka', '(kedah', '(negeri', '(sbp'])
    has_stem = any(s in txt for s in ['menunjukkan', 'shows a', 'shows the', 'which of the following', 'antara berikut'])

    if has_cap or has_source or has_stem:
        audit_failures.append((r, f"cap={has_cap}, src={has_source}, stem={has_stem}", txt[:60]))
        print(f"Rajah {r:2d} ({cropped.width}x{cropped.height}) -> FAIL: cap={has_cap}, src={has_source}, stem={has_stem}")
    else:
        print(f"Rajah {r:2d} ({cropped.width}x{cropped.height}) -> PASS: {url_v2}")

os.makedirs("scratch", exist_ok=True)
with open("scratch/t4_b4_v2_urls.json", "w", encoding="utf-8") as f:
    json.dump(DIAGRAM_URLS_V2, f, indent=2, ensure_ascii=False)

print(f"\n==========================================")
print(f"Total Diagrams Processed: {len(DIAGRAM_URLS_V2)}")
print(f"Audit Failures: {len(audit_failures)}")
if audit_failures:
    for fail in audit_failures:
        print(f"  Fail Rajah {fail[0]}: {fail[1]} | {fail[2]}")
else:
    print("🎯 100% PERFECT QA PASS: Zero caption leaks, zero stem leaks, zero source tag leaks across ALL 71 diagrams!")
