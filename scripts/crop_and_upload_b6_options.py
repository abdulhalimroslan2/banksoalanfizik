#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Crops diagram options (A, B, C, D) for questions in Tingkatan 4 Bab 6
and uploads them to Cloudflare R2.
"""

import os
import sys
sys.path.insert(0, ".")
import json
import fitz
from PIL import Image, ImageChops
from scripts.r2_uploader import upload_bytes

LOCAL_OPTS_DIR = 'assets/diagrams/modul_konstruk_t4/b6/options'
os.makedirs(LOCAL_OPTS_DIR, exist_ok=True)

R2_BASE_URL = 'https://pub-833572f7cc244a0d9627cef82c840538.r2.dev'

def autocrop(im, pad=6):
    bg = Image.new(im.mode, im.size, (255, 255, 255))
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    if bbox:
        w, h = im.size
        return im.crop((max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(w, bbox[2]+pad), min(h, bbox[3]+pad)))
    return im

doc = fitz.open('/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 6 T4.pdf')

# Precise bounding boxes (page_num 1-indexed, fitz.Rect in points)
# We will render at 300 DPI (scale=300/72)
option_specs = {
    # 1. K2 Q41 (Page 11 col 2: 4 graphs u vs v)
    "k2_q41": {
        "page": 11,
        "opts": {
            "A": fitz.Rect(310, 420, 425, 485),
            "B": fitz.Rect(310, 490, 425, 555),
            "C": fitz.Rect(425, 420, 540, 485),
            "D": fitz.Rect(425, 490, 540, 555)
        }
    },
    # 2. K3 Q15 (Page 20 col 2: Concave mirror ray diagrams)
    "k3_q15": {
        "page": 20,
        "opts": {
            "A": fitz.Rect(330, 485, 560, 538),
            "B": fitz.Rect(330, 538, 560, 595),
            "C": fitz.Rect(330, 595, 560, 642),
            "D": fitz.Rect(330, 642, 560, 698)
        }
    },
    # 3. K3 Q20 (Page 22 col 1 top: Critical angle ray diagrams)
    "k3_q20": {
        "page": 22,
        "opts": {
            "A": fitz.Rect(75, 40, 185, 115),
            "B": fitz.Rect(75, 115, 185, 185),
            "C": fitz.Rect(185, 40, 290, 115),
            "D": fitz.Rect(185, 115, 290, 185)
        }
    },
    # 4. K3 Q22 (Page 22 col 2 top: Glass-air boundary ray paths)
    "k3_q22": {
        "page": 22,
        "opts": {
            "A": fitz.Rect(330, 115, 440, 185),
            "B": fitz.Rect(330, 185, 440, 260),
            "C": fitz.Rect(440, 115, 550, 185),
            "D": fitz.Rect(440, 185, 550, 260)
        }
    },
    # 5. K3 Q23 (Page 22 col 1 middle: Convex lens / Concave mirror ray paths)
    "k3_q23": {
        "page": 22,
        "opts": {
            "A": fitz.Rect(75, 375, 290, 455),
            "B": fitz.Rect(75, 458, 290, 540),
            "C": fitz.Rect(75, 542, 290, 625),
            "D": fitz.Rect(75, 625, 290, 705)
        }
    },
    # 6. K3 Q29 (Page 23 col 2: Definition of critical angle)
    "k3_q29": {
        "page": 23,
        "opts": {
            "A": fitz.Rect(310, 380, 560, 455),
            "B": fitz.Rect(310, 455, 560, 528),
            "C": fitz.Rect(310, 528, 560, 605),
            "D": fitz.Rect(310, 605, 560, 680)
        }
    },
    # 7. K3 Q35 (Page 25 col 1 bottom: Concave lens ray paths)
    "k3_q35": {
        "page": 25,
        "opts": {
            "A": fitz.Rect(70, 575, 180, 635),
            "B": fitz.Rect(70, 635, 180, 705),
            "C": fitz.Rect(180, 575, 290, 635),
            "D": fitz.Rect(180, 635, 290, 705)
        }
    },
    # 8. K3 Q36 (Page 26 col 1: Convex lens virtual image)
    "k3_q36": {
        "page": 26,
        "opts": {
            "A": fitz.Rect(65, 325, 290, 412),
            "B": fitz.Rect(65, 412, 290, 500),
            "C": fitz.Rect(65, 500, 290, 592),
            "D": fitz.Rect(65, 592, 290, 685)
        }
    },
    # 9. K3 Q40 (Page 27 col 1: Magnifying glass ray diagrams)
    "k3_q40": {
        "page": 27,
        "opts": {
            "A": fitz.Rect(75, 280, 290, 345),
            "B": fitz.Rect(75, 345, 290, 412),
            "C": fitz.Rect(75, 412, 290, 485),
            "D": fitz.Rect(75, 485, 290, 560)
        }
    },
    # 10. K3 Q53 (Page 29 col 2 bottom & Page 30 col 1 top)
    "k3_q53": {
        "cross_page": True,
        "opts": {
            "A": (29, fitz.Rect(325, 615, 560, 680)),
            "B": (29, fitz.Rect(325, 680, 560, 750)),
            "C": (30, fitz.Rect(65, 55, 290, 125)),
            "D": (30, fitz.Rect(65, 125, 290, 195))
        }
    },
    # 11. K3 Q58 (Page 31 col 1 top: Concave mirror reflection)
    "k3_q58": {
        "page": 31,
        "opts": {
            "A": fitz.Rect(75, 70, 290, 132),
            "B": fitz.Rect(75, 132, 290, 198),
            "C": fitz.Rect(75, 198, 290, 262),
            "D": fitz.Rect(75, 262, 290, 330)
        }
    }
}

option_urls = {}

for q_key, spec in option_specs.items():
    option_urls[q_key] = {}
    is_cross = spec.get("cross_page", False)
    
    for opt_letter, rect_data in spec["opts"].items():
        if is_cross:
            p_num, r = rect_data
            page = doc[p_num - 1]
        else:
            page = doc[spec["page"] - 1]
            r = rect_data
            
        pix = page.get_pixmap(dpi=300, clip=r)
        temp_png = f'scratch/temp_{q_key}_{opt_letter}.png'
        pix.save(temp_png)
        
        im = Image.open(temp_png)
        clean = autocrop(im)
        
        local_name = f't4_b6_{q_key}_opt_{opt_letter.lower()}.webp'
        local_path = os.path.join(LOCAL_OPTS_DIR, local_name)
        clean.save(local_path, format='WEBP', quality=95)
        
        # Upload to R2
        r2_key = f'diagrams/modul_konstruk_t4/b6/options/{local_name}'
        with open(local_path, 'rb') as fp:
            upload_bytes(fp.read(), r2_key, content_type='image/webp')
            
        r2_url = f'{R2_BASE_URL}/{r2_key}'
        option_urls[q_key][opt_letter] = r2_url
        print(f'Uploaded {q_key} Opt {opt_letter}: {clean.size} -> {r2_url}')

with open('scratch/t4_b6_option_urls.json', 'w') as fp:
    json.dump(option_urls, fp, indent=2)

print(f'Successfully cropped and uploaded all option diagrams to scratch/t4_b6_option_urls.json!')
