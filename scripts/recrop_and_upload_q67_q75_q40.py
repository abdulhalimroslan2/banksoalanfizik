#!/usr/bin/env python3
"""
High-Precision Recrop & Uploader for Q67, Q75, and K3_Q40
Solves:
1. Q67:
   - Rajah 49: Extends y to include horizontal axis (0, 25, 50, Time/s, Masa/s) and caption.
   - Option A: Extends bottom to include complete time labels.
   - Option B: Starts at y=621 to avoid leaked numbers/text from Option A.
   - Options C & D: Precise bounding boxes with complete axes.
2. Q75:
   - Rajah 54: Precise crop starting below (Pahang: 2021) and ending with caption Rajah 54.
   - Options C & D: Starts at x=192 pt to eliminate stray arrow leaked from Options A & B.
3. K3_Q40:
   - Rajah 98: Restricts y to 145..295 pt to isolate ONLY the displacement-time graph of Mei Mei.
   - Option D: Starts at y=658.5 pt to eliminate stray horizontal mark at the top.
"""

import os
import sys
sys.path.append(os.getcwd())
import fitz
from PIL import Image, ImageChops
from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 2 T4.pdf'
OUT_DIR = 'scratch/fixed_diagrams_b2_v2'
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

def crop_exact(pno, x0_pt, y0_pt, x1_pt, y1_pt, pad=6, do_autocrop=True):
    page = doc[pno]
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=fitz.Rect(x0_pt, y0_pt, x1_pt, y1_pt))
    img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
    if do_autocrop:
        return autocrop(img, pad=pad)
    return img

CROPS = {
    # Q67
    't4_b2_rajah49_v2.webp': (17, 330, 330, 530, 460, 6, True),
    't4_b2_k2_q67_opt_a_v2.webp': (17, 320, 528, 540, 620, 6, True),
    't4_b2_k2_q67_opt_b_v2.webp': (17, 320, 621, 540, 715, 6, True),
    't4_b2_k2_q67_opt_c_v2.webp': (18, 55, 65, 260, 159, 6, True),
    't4_b2_k2_q67_opt_d_v2.webp': (18, 55, 160, 260, 240, 6, True),

    # Q75
    't4_b2_rajah54_v2.webp': (20, 65, 151, 290, 260, 6, True),
    't4_b2_k2_q75_opt_a_v2.webp': (20, 60, 355, 185, 420, 6, True),
    't4_b2_k2_q75_opt_b_v2.webp': (20, 60, 422, 185, 490, 6, True),
    't4_b2_k2_q75_opt_c_v2.webp': (20, 192, 355, 295, 420, 6, True),
    't4_b2_k2_q75_opt_d_v2.webp': (20, 192, 422, 295, 490, 6, True),

    # K3_Q40
    't4_b2_rajah98_v2.webp': (34, 65, 145, 290, 295, 6, True),
    't4_b2_k3_q40_opt_a_v2.webp': (34, 75, 365, 290, 445, 6, True),
    't4_b2_k3_q40_opt_b_v2.webp': (34, 75, 450, 290, 538, 6, True),
    't4_b2_k3_q40_opt_c_v2.webp': (34, 75, 545, 290, 638, 6, True),
    't4_b2_k3_q40_opt_d_v2.webp': (34, 75, 658.5, 290, 755, 6, True),
}

if __name__ == '__main__':
    print(f'Recropping and uploading {len(CROPS)} images...')
    for name, (pno, x0, y0, x1, y1, pad, ac) in CROPS.items():
        img = crop_exact(pno, x0, y0, x1, y1, pad=pad, do_autocrop=ac)
        fpath = os.path.join(OUT_DIR, name)
        img.save(fpath, 'WEBP', quality=95)
        with open(fpath, 'rb') as f:
            data = f.read()
        r2_key = f'diagrams/modul_konstruk_t4/b2/{name}'
        url = upload_bytes(data, r2_key, 'image/webp')
        print(f'Uploaded: {name} -> {url}')
