#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Precision Diagram Cropping & R2 Upload Pipeline
Tingkatan 4 Bab 5: Gelombang (Waves)
Strict Adherence to 13 Golden Invariants (Zero Caption Leakage, 300 DPI WebP)
"""

import os
import sys
sys.path.insert(0, ".")
import io
import re
import json
import fitz
import numpy as np
from PIL import Image
import pytesseract

from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 5 T4.pdf'
LOCAL_DIR = 'assets/diagrams/modul_konstruk_t4/b5'
os.makedirs(LOCAL_DIR, exist_ok=True)

R2_BASE_URL = 'https://pub-833572f7cc244a0d9627cef82c840538.r2.dev'

def clean_crop_diagram(pil_img, thresh=220, pad=10):
    gray = pil_img.convert('L')
    arr = np.array(gray)
    dark_mask = arr < thresh
    if not np.any(dark_mask):
        return pil_img
    y_indices, x_indices = np.where(dark_mask)
    x_min, x_max = max(0, x_indices.min() - pad), min(arr.shape[1], x_indices.max() + pad)
    y_min, y_max = max(0, y_indices.min() - pad), min(arr.shape[0], y_indices.max() + pad)
    return pil_img.crop((x_min, y_min, x_max, y_max))

def check_caption_leakage(pil_img):
    w, h = pil_img.size
    # crop bottom 30%
    bottom_crop = pil_img.crop((0, int(h * 0.70), w, h))
    t = pytesseract.image_to_string(bottom_crop, config='--psm 6').lower()
    return 'rajah' in t or 'diagram' in t

def main():
    doc = fitz.open(PDF_PATH)
    print(f'Opened PDF: {PDF_PATH} ({len(doc)} pages)')
    
    # 1. Map all captions
    captions = {}
    for p_num in range(len(doc)):
        page = doc[p_num]
        blocks = page.get_text('blocks')
        for b in blocks:
            t = b[4].strip()
            norm = re.sub(r'\s+', ' ', t).replace('1 ll', '111').replace('I12', '112').replace('8l', '81').replace('8I', '81').replace('9l', '91').replace('9I', '91')
            if ('rajah' in norm.lower() or 'diagram' in norm.lower()) and 'menunjukkan' not in norm.lower() and 'shows' not in norm.lower():
                m = re.search(r'Rajah\s*([0-9]+)', norm, re.IGNORECASE)
                if m:
                    num = int(m.group(1))
                    if 1 <= num <= 112 and num not in captions:
                        is_right = b[0] >= 285
                        captions[num] = {
                            'page': p_num + 1,
                            'is_right': is_right,
                            'cap_bbox': b[:4],
                            'cap_text': norm
                        }

    print(f'Total captions located: {len(captions)}')
    
    urls = {}
    json_path = 'scratch/t4_b5_diagram_urls.json'
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            urls = json.load(f)

    for num in range(1, 113):
        rajah_key = f'rajah{num}'
        print(f'Processing Rajah {num}...', end=' ', flush=True)
        
        # Handle special multi-part diagrams
        if num == 95:
            # Composite 95(a) on left, 95(b) on right
            page33 = doc[32]
            # 95(a)
            clip_a = fitz.Rect(40.0, 640.0, 290.0, 720.0)
            pix_a = page33.get_pixmap(clip=clip_a, dpi=300)
            img_a = clean_crop_diagram(Image.open(io.BytesIO(pix_a.tobytes('png'))))
            # 95(b)
            clip_b = fitz.Rect(310.0, 60.0, 540.0, 137.0)
            pix_b = page33.get_pixmap(clip=clip_b, dpi=300)
            img_b = clean_crop_diagram(Image.open(io.BytesIO(pix_b.tobytes('png'))))
            
            # Combine vertically with 20px padding
            tot_w = max(img_a.width, img_b.width)
            tot_h = img_a.height + img_b.height + 20
            combined = Image.new('RGB', (tot_w, tot_h), (255, 255, 255))
            combined.paste(img_a, ((tot_w - img_a.width)//2, 0))
            combined.paste(img_b, ((tot_w - img_b.width)//2, img_a.height + 20))
            final_img = combined
            
        elif num == 108:
            # Side by side on page 37
            page37 = doc[36]
            clip_108 = fitz.Rect(40.0, 168.0, 295.0, 260.0)
            pix = page37.get_pixmap(clip=clip_108, dpi=300)
            final_img = clean_crop_diagram(Image.open(io.BytesIO(pix.tobytes('png'))))
            
        elif num == 110:
            # Combined 110(a) and 110(b) on page 38
            page38 = doc[37]
            clip_110 = fitz.Rect(40.0, 90.0, 295.0, 260.0)
            pix = page38.get_pixmap(clip=clip_110, dpi=300)
            final_img = clean_crop_diagram(Image.open(io.BytesIO(pix.tobytes('png'))))
            
        else:
            c_info = captions[num]
            p_idx = c_info['page'] - 1
            page = doc[p_idx]
            is_right = c_info['is_right']
            cap_y0 = c_info['cap_bbox'][1]
            
            blocks = page.get_text('blocks')
            stem_blocks = []
            for b in blocks:
                b_right = b[0] >= 285
                if b_right == is_right and b[3] < cap_y0:
                    t = b[4].strip()
                    if re.search(r'(menunjukkan|shows)', t, re.IGNORECASE) or re.search(r'\([A-Za-z\s]+(:\s*Set\s*\d+)?:\s*\d{4}\)', t) or re.search(r'^\d{1,3}[\.\,]\s*(Rajah|Diagram)', t, re.IGNORECASE):
                        stem_blocks.append(b)
                        
            if stem_blocks:
                stem_y1 = max(b[3] for b in stem_blocks)
                y0 = stem_y1 + 2.0
            else:
                # Diagram is positioned at the top of the column
                y0 = 45.0
                
            x0 = 305.0 if is_right else 35.0
            x1 = 555.0 if is_right else 290.0
            y1 = cap_y0 - 3.0
            
            # Initial crop
            clip = fitz.Rect(x0, y0, x1, y1)
            pix = page.get_pixmap(clip=clip, dpi=300)
            final_img = clean_crop_diagram(Image.open(io.BytesIO(pix.tobytes('png'))))
            
            # Check for caption leakage
            if check_caption_leakage(final_img):
                print('Caption detected, refining y1...', end=' ')
                y1 -= 6.0
                clip = fitz.Rect(x0, y0, x1, y1)
                pix = page.get_pixmap(clip=clip, dpi=300)
                final_img = clean_crop_diagram(Image.open(io.BytesIO(pix.tobytes('png'))))

        # Save local WebP
        local_filename = f't4_b5_rajah{num}_v2.webp'
        local_path = os.path.join(LOCAL_DIR, local_filename)
        
        # Save with quality 92
        out_buf = io.BytesIO()
        final_img.save(out_buf, format='WEBP', quality=92, method=6)
        webp_bytes = out_buf.getvalue()
        
        with open(local_path, 'wb') as lf:
            lf.write(webp_bytes)
            
        # Upload to R2
        r2_key = f'assets/diagrams/modul_konstruk_t4/b5/{local_filename}'
        public_url = upload_bytes(webp_bytes, r2_key)
        urls[rajah_key] = public_url
        print(f'DONE -> {final_img.width}x{final_img.height}px, {len(webp_bytes)} bytes')

    # Save URLs JSON
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(urls, f, indent=2)
        
    print(f'Successfully cropped and uploaded all {len(urls)} diagrams!')
    print(f'Mapping saved to {json_path}')

if __name__ == '__main__':
    main()
