#!/usr/bin/env python3
import fitz
import cv2
import numpy as np
import os
from PIL import Image

pdf_path = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 6 T4.pdf'
doc = fitz.open(pdf_path)

def process_and_save(pix, out_path, pad=14):
    arr = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
    if pix.n == 4:
        arr = cv2.cvtColor(arr, cv2.COLOR_RGBA2BGR)
    elif pix.n == 1:
        arr = cv2.cvtColor(arr, cv2.COLOR_GRAY2BGR)

    gray = cv2.cvtColor(arr, cv2.COLOR_BGR2GRAY)
    ink = (gray < 220).astype(np.uint8)
    coords = cv2.findNonZero(ink)
    if coords is not None:
        x, y, w, h = cv2.boundingRect(coords)
        arr = arr[y:y+h, x:x+w]

    # Add pure white border
    padded = cv2.copyMakeBorder(arr, pad, pad, pad, pad, cv2.BORDER_CONSTANT, value=[255, 255, 255])
    
    # Save as webp
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    pil_img = Image.fromarray(cv2.cvtColor(padded, cv2.COLOR_BGR2RGB))
    pil_img.save(out_path, 'WEBP', quality=95)
    print(f"Saved {out_path} -> size: {pil_img.size}")

# 1. Rajah 48 (Page 18)
page18 = doc[17]
pix48 = page18.get_pixmap(dpi=300, clip=fitz.Rect(75, 486, 285, 582.5))
process_and_save(pix48, 'assets/diagrams/modul_konstruk_t4/b6/t4_b6_rajah48_v2.webp')

# 2. Rajah 57 (Page 21)
page21 = doc[20]
pix57 = page21.get_pixmap(dpi=300, clip=fitz.Rect(320, 55, 560, 174))
process_and_save(pix57, 'assets/diagrams/modul_konstruk_t4/b6/t4_b6_rajah57_v2.webp')

# 3. Rajah 62 (Page 23)
page23 = doc[22]
pix62 = page23.get_pixmap(dpi=300, clip=fitz.Rect(320, 50, 560, 158.5))
process_and_save(pix62, 'assets/diagrams/modul_konstruk_t4/b6/t4_b6_rajah62_v2.webp')

# 4. Q41 Options A, B, C, D (Page 11)
page11 = doc[10]
q41_boxes = {
    'a': fitz.Rect(330, 475, 425, 542),
    'b': fitz.Rect(330, 544.5, 425, 615),
    'c': fitz.Rect(440, 475, 545, 544),
    'd': fitz.Rect(440, 544.5, 545, 615)
}

for opt_id, rect in q41_boxes.items():
    pix = page11.get_pixmap(dpi=300, clip=rect)
    process_and_save(pix, f'assets/diagrams/modul_konstruk_t4/b6/options/t4_b6_k2_q41_opt_{opt_id}.webp')

print("All 7 images processed and saved successfully.")
