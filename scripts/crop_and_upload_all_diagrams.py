#!/usr/bin/env python3
"""
Crop and upload all 112 diagrams for Tingkatan 4 Bab 2 to Cloudflare R2
using verified, exact bounding boxes without captions or question text.
"""

import os
import sys
import os
sys.path.append(os.getcwd())
import io
import re
import json
import fitz
from PIL import Image, ImageChops
from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 2 T4.pdf'
BOXES_PATH = 'scratch/t4_b2_resolved_boxes.json'
OUT_DIR = 'scratch/diagrams_b2'
os.makedirs(OUT_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
scale = 200.0 / 72.0

with open(BOXES_PATH, 'r') as f:
    boxes = json.load(f)

def clean_crop(img, pad=6):
    bg = Image.new(img.mode, img.size, (255, 255, 255))
    diff = ImageChops.difference(img, bg)
    bbox = diff.getbbox()
    if bbox:
        w, h = img.size
        return img.crop((max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(w, bbox[2]+pad), min(h, bbox[3]+pad)))
    return img

def render_box(pno, col, y0_pt, y1_pt):
    page = doc[pno - 1]
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale))
    pimg = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    x0_pt = 50 if col == 0 else 305
    x1_pt = 295 if col == 0 else 550
    x0 = int(x0_pt * scale)
    x1 = int(x1_pt * scale)
    y0 = int(y0_pt * scale)
    y1 = int(y1_pt * scale)
    crop = pimg.crop((x0, y0, x1, y1))
    return clean_crop(crop)

diagram_urls = {}

print('Starting high-precision diagram extraction and R2 upload...')
for i in range(1, 113):
    si = str(i)
    try:
        box = boxes.get(si)
        if not box:
            print(f"Error: Box not found for Rajah {si}")
            continue
            
        if box == "stitch" or si == "79":
            # Stitch 79(a) and 79(b)
            img_a = render_box(29, 0, 592.0, 684.0)
            img_b = render_box(29, 1, 65.0, 154.0)
            gap = 20
            w = img_a.width + img_b.width + gap
            h = max(img_a.height, img_b.height)
            comp = Image.new('RGB', (w, h), (255, 255, 255))
            comp.paste(img_a, (0, (h - img_a.height)//2))
            comp.paste(img_b, (img_a.width + gap, (h - img_b.height)//2))
            cropped_img = comp
        else:
            pno, col, y0, y1 = box
            cropped_img = render_box(pno, col, y0, y1)
            
        # Save WebP locally
        local_path = f'{OUT_DIR}/t4_b2_rajah{si}.webp'
        cropped_img.save(local_path, 'WEBP', quality=95)
        
        # Upload to R2
        with open(local_path, 'rb') as f:
            data = f.read()
        r2_key = f'diagrams/modul_konstruk_t4/b2/t4_b2_rajah{si}.webp'
        url = upload_bytes(data, r2_key, 'image/webp')
        diagram_urls[si] = url
        print(f'[{i}/112] Rajah {si}: {cropped_img.size} -> {url}')
    except Exception as e:
        print(f'Error processing Rajah {si}: {e}')

with open('scratch/t4_b2_diagram_urls.json', 'w') as f:
    json.dump(diagram_urls, f, indent=2)

print(f'\nFinished! Successfully processed and uploaded {len(diagram_urls)} / 112 diagrams.')
