#!/usr/bin/env python3
"""
Crop and upload all 112 diagrams for Tingkatan 4 Bab 2 to Cloudflare R2.
"""

import os
import sys
import io
import re
import json
import fitz
from PIL import Image, ImageChops
from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 2 T4.pdf'
PAGES_DIR = 'scratch/bab2_pages'
OUT_DIR = 'scratch/diagrams_b2'
os.makedirs(OUT_DIR, exist_ok=True)

doc = fitz.open(PDF_PATH)
scale = 200.0 / 72.0

def norm_num(s):
    s = s.replace('l', '1').replace('I', '1').replace('O', '0').replace('o', '0').replace('S', '5')
    return re.sub(r'\s+', '', s)

# Collect all real caption blocks
real_captions = {}
for pno in range(len(doc)):
    page = doc[pno]
    blocks = page.get_text('blocks')
    for b in blocks:
        if b[6] != 0: continue
        t = b[4].strip()
        lines = [l.strip() for l in t.split('\n') if l.strip()]
        for l_idx, l in enumerate(lines):
            comb = l
            if l in ['Rajah', 'Rajalh', 'Rujah', 'Diagram'] and l_idx + 1 < len(lines):
                comb = l + ' ' + lines[l_idx + 1]
            m = re.search(r'(?:^|\b)(?:[0-9.]+\s+)?(?:Rajah|Rajalh|Rujah|Diagram)\s*([0-9lIOoS]+(?:\s*\([a-z]\))?)', comb, re.IGNORECASE)
            if m:
                if any(sw in comb.lower() for sw in ['menunjukkan', 'shows', 'ialah', 'sebuah', 'seorang']):
                    continue
                if len(comb) < 45 or '/' in comb:
                    num = norm_num(m.group(1))
                    col = 0 if (b[0]+b[2])/2 < 299 else 1
                    cap_y0 = b[1]
                    if num not in real_captions:
                        real_captions[num] = []
                    real_captions[num].append({
                        'pno': pno + 1,
                        'col': col,
                        'cap_y0': cap_y0,
                        'b': b[:4],
                        'text': comb
                    })

special_specs = {
    '26': (10, 1, 480, 596),
    '66': (25, 1, 75, 198),
    '111': (39, 1, 280, 384)
}

def clean_crop(img, pad=6):
    bg = Image.new(img.mode, img.size, (255, 255, 255))
    diff = ImageChops.difference(img, bg)
    bbox = diff.getbbox()
    if bbox:
        w, h = img.size
        return img.crop((max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(w, bbox[2]+pad), min(h, bbox[3]+pad)))
    return img

def crop_box(pno, col, y_top_pt, y_bottom_pt):
    pimg = Image.open(f'{PAGES_DIR}/page_{pno:02d}.png')
    x0_pt = 48 if col == 0 else 300
    x1_pt = 298 if col == 0 else 555
    x0 = int(x0_pt * scale)
    x1 = int(x1_pt * scale)
    y0 = int(y_top_pt * scale)
    y1 = int(y_bottom_pt * scale)
    crop = pimg.crop((x0, y0, x1, y1))
    return clean_crop(crop)

diagram_urls = {}

print('Starting diagram extraction and R2 upload...')
for i in range(1, 113):
    si = str(i)
    try:
        if si == '79':
            # Stitch 79(a) and 79(b)
            img_a = crop_box(29, 0, 580, 685)
            img_b = crop_box(29, 1, 75, 155)
            # Create side-by-side composite
            gap = 20
            w = img_a.width + img_b.width + gap
            h = max(img_a.height, img_b.height)
            comp = Image.new('RGB', (w, h), (255, 255, 255))
            comp.paste(img_a, (0, (h - img_a.height)//2))
            comp.paste(img_b, (img_a.width + gap, (h - img_b.height)//2))
            cropped_img = comp
        elif si in special_specs:
            pno, col, y0, y1 = special_specs[si]
            cropped_img = crop_box(pno, col, y0, y1)
        else:
            caps = real_captions.get(si, [])
            if not caps:
                print(f'Error: Caption not found for Rajah {si}')
                continue
            c = max(caps, key=lambda x: x['cap_y0'])
            pno = c['pno']
            col = c['col']
            cap_y0 = c['cap_y0']
            
            page = doc[pno - 1]
            words = [w for w in page.get_text('words') if w[1] < 780]
            col_words = [w for w in words if (0 if (w[0]+w[2])/2 < 299 else 1) == col]
            words_above = [w for w in col_words if w[3] < cap_y0 - 15]
            
            y_top = max([w[3] for w in words_above]) + 2 if words_above else 75
            y_bottom = cap_y0 - 2
            if y_bottom - y_top < 25:
                y_top = 75
            cropped_img = crop_box(pno, col, y_top, y_bottom)
        
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
