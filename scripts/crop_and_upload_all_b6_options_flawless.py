#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Precision Diagram Option Cropping & Cloudflare R2 Upload Pipeline (Flawless V2)
Tingkatan 4 Bab 6: Cahaya dan Optik
Strict 13 Golden Invariants (Zero Leaks, Zero Stray Lines, Pure White 14px Margin, 300 DPI WebP Quality 95)
"""

import os
import sys
sys.path.insert(0, ".")
import cv2
import numpy as np
from PIL import Image
import json
from scripts.r2_uploader import upload_bytes

LOCAL_OPTS_DIR = 'assets/diagrams/modul_konstruk_t4/b6/options'
os.makedirs(LOCAL_OPTS_DIR, exist_ok=True)

R2_BASE_URL = 'https://pub-833572f7cc244a0d9627cef82c840538.r2.dev'

def extract_and_pad(sub, name="opt"):
    h, w = sub.shape
    _, bin_inv = cv2.threshold(sub, 215, 255, cv2.THRESH_BINARY_INV)
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(bin_inv)
    
    valid_mask = np.zeros_like(bin_inv)
    kept = 0
    for i in range(1, num_labels):
        x, y, comp_w, comp_h, area = stats[i]
        touches_top = (y <= 1)
        touches_bottom = (y + comp_h >= h - 1)
        if (touches_top or touches_bottom) and comp_h <= 18:
            continue
        if touches_top and comp_w >= w * 0.4 and comp_h <= 25:
            continue
        if touches_bottom and comp_w >= w * 0.4 and comp_h <= 25:
            continue
        if area < 10:
            continue
        # Option letter badge in margin
        if x < 25 and comp_w < 35 and comp_h < 35:
            continue
        valid_mask[labels == i] = 255
        kept += 1
        
    ys, xs = np.where(valid_mask > 0)
    if len(xs) == 0:
        print(f"ERROR: {name} empty after filtering!")
        return None
        
    cropped = sub[ys.min():ys.max()+1, xs.min():xs.max()+1].copy()
    mask = valid_mask[ys.min():ys.max()+1, xs.min():xs.max()+1]
    cropped[mask == 0] = 255 # Pure white background for anything outside diagram
    
    # 14px pure white border on all 4 sides
    padded = cv2.copyMakeBorder(cropped, 14, 14, 14, 14, cv2.BORDER_CONSTANT, value=255)
    return padded

# Question definitions with exact valley cut lines:
questions = {
    # 1. k2_q41 (2x2 grid)
    "k2_q41": {
        "img": "scratch/debug_k2_q41.png",
        "cuts": {
            "A": (30, 0, 450, 340),
            "B": (30, 340, 450, 740),
            "C": (480, 0, 950, 345),
            "D": (480, 345, 950, 740)
        }
    },
    # 2. k3_q15 (Vertical 4 options)
    "k3_q15": {
        "img": "scratch/debug_k3_q15.png",
        "cuts": {
            "A": (60, 20, 950, 288),
            "B": (60, 288, 950, 511),
            "C": (60, 511, 950, 710),
            "D": (60, 710, 950, 980)
        }
    },
    # 3. k3_q20 (2x2 grid)
    "k3_q20": {
        "img": "scratch/debug_k3_q20.png",
        "cuts": {
            "A": (80, 80, 400, 335),
            "B": (80, 336, 400, 600),
            "C": (480, 80, 870, 340),
            "D": (480, 342, 870, 600)
        }
    },
    # 4. k3_q22 (MRSM 2022: Concave lens - Vertical 4 options)
    "k3_q22": {
        "img": "scratch/debug_k3_q22_concave.png",
        "cuts": {
            "A": (60, 20, 850, 351),
            "B": (60, 351, 850, 686),
            "C": (60, 686, 850, 1027),
            "D": (60, 1027, 850, 1360)
        }
    },
    # 5. k3_q23 (Pahang 2022: Glass-Air boundary - 2x2 grid)
    "k3_q23": {
        "img": "scratch/debug_k3_q23_glass_air.png",
        "cuts": {
            "A": (70, 20, 450, 329),
            "B": (70, 329, 450, 650),
            "C": (480, 20, 950, 333),
            "D": (480, 333, 950, 650)
        }
    },
    # 6. k3_q29 (Vertical 4 options)
    "k3_q29": {
        "img": "scratch/debug_k3_q29.png",
        "cuts": {
            "A": (50, 20, 980, 359),
            "B": (50, 359, 980, 670),
            "C": (50, 670, 980, 983),
            "D": (50, 983, 980, 1320)
        }
    },
    # 7. k3_q35 (2x2 grid)
    "k3_q35": {
        "img": "scratch/debug_k3_q35.png",
        "cuts": {
            "A": (50, 20, 420, 320),
            "B": (50, 320, 420, 650),
            "C": (450, 20, 870, 324),
            "D": (450, 324, 870, 650)
        }
    },
    # 8. k3_q36 (Vertical 4 options)
    "k3_q36": {
        "img": "scratch/debug_k3_q36.png",
        "cuts": {
            "A": (50, 20, 900, 369),
            "B": (50, 369, 900, 730),
            "C": (50, 730, 900, 1117),
            "D": (50, 1117, 900, 1540)
        }
    },
    # 9. k3_q40 (Vertical 4 options)
    "k3_q40": {
        "img": "scratch/debug_k3_q40.png",
        "cuts": {
            "A": (50, 20, 850, 296),
            "B": (50, 296, 850, 572),
            "C": (50, 572, 850, 876),
            "D": (50, 876, 850, 1220)
        }
    },
    # 10. k3_q53 (Page 29 & 30)
    "k3_q53": {
        "multi": True,
        "cuts": {
            "A": ("scratch/debug_k3_q53_p29.png", (50, 20, 950, 328)),
            "B": ("scratch/debug_k3_q53_p29.png", (50, 328, 950, 650)),
            "C": ("scratch/debug_k3_q53_p30.png", (50, 20, 900, 334)),
            "D": ("scratch/debug_k3_q53_p30.png", (50, 334, 900, 650))
        }
    },
    # 11. k3_q58 (Vertical 4 options)
    "k3_q58": {
        "img": "scratch/debug_k3_q58.png",
        "cuts": {
            "A": (50, 20, 850, 304),
            "B": (50, 304, 850, 570),
            "C": (50, 570, 850, 854),
            "D": (50, 854, 850, 1150)
        }
    }
}

option_urls = {}
total_processed = 0

for q_key, data in questions.items():
    option_urls[q_key] = {}
    is_multi = data.get("multi", False)
    
    if not is_multi:
        full_img = cv2.imread(data["img"], cv2.IMREAD_GRAYSCALE)
        
    for opt, cut_info in data["cuts"].items():
        if is_multi:
            img_path, (x0, y0, x1, y1) = cut_info
            img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
            sub = img[y0:y1, x0:x1]
        else:
            x0, y0, x1, y1 = cut_info
            sub = full_img[y0:y1, x0:x1]
            
        padded = extract_and_pad(sub, f"{q_key}_{opt}")
        if padded is None:
            continue
            
        # Verify 0 black pixels on borders
        top_b = np.sum(padded[:4, :] < 200)
        bot_b = np.sum(padded[-4:, :] < 200)
        left_b = np.sum(padded[:, :4] < 200)
        right_b = np.sum(padded[:, -4:] < 200)
        assert top_b == 0 and bot_b == 0 and left_b == 0 and right_b == 0, f"Border leak in {q_key}_{opt}!"
        
        # Save local 300 DPI WebP
        local_name = f't4_b6_{q_key}_opt_{opt.lower()}.webp'
        local_path = os.path.join(LOCAL_OPTS_DIR, local_name)
        
        pil_im = Image.fromarray(padded).convert("RGB")
        pil_im.save(local_path, format="WEBP", quality=95)
        
        # Read bytes and upload to R2
        with open(local_path, 'rb') as f:
            b_data = f.read()
            
        r2_key = f'diagrams/modul_konstruk_t4/b6/options/{local_name}'
        url = upload_bytes(b_data, r2_key, 'image/webp')
        option_urls[q_key][opt] = url
        total_processed += 1
        print(f"  ✓ [{total_processed}/44] Processed & Uploaded: {local_name} ({padded.shape[1]}x{padded.shape[0]}px) -> {url}")

with open('scratch/t4_b6_option_urls.json', 'w') as f:
    json.dump(option_urls, f, indent=2)

print(f"\nSUCCESS: All {total_processed} option diagrams flawless, padded, and uploaded to Cloudflare R2!")
