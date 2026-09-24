import os
import sys
sys.path.append(os.getcwd())
import json
import fitz
from PIL import Image, ImageChops
from scripts.r2_uploader import upload_bytes

PDF_PATH = '/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 3 T4.pdf'
OUT_DIR = 'assets/diagrams/modul_konstruk_t4/b3'
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

# 32 Diagram Specs strictly excluding 'Rajah [...]' / 'Diagram [...]' captions
# y1 is strictly (caption_y0 - 3.0 pt)
SPECS = [
    # (rajah_num, pno_1_indexed, col, y0, cap_y0)
    (1,  2, 1, 239.5, 317.5),
    (2,  4, 0, 509.5, 647.9),
    (3,  5, 1,  55.0, 156.8),
    (4,  5, 1, 457.8, 587.4),
    (5,  6, 0, 231.7, 304.2),
    (6,  7, 0, 505.2, 600.1),
    (7,  7, 1, 187.6, 305.5),
    (8,  8, 0,  55.0, 143.6),
    (9,  8, 0, 468.2, 595.8),
    (10, 8, 1, 469.3, 578.3),
    (11, 9, 1, 335.8, 474.0),
    (12, 10, 0, 138.7, 245.6),
    (13, 10, 0, 591.7, 678.0),
    (14, 10, 1, 321.1, 389.0),
    (15, 11, 0, 607.9, 707.1),
    (16, 11, 1, 452.3, 530.3),
    (17, 13, 0,  55.0, 184.3),
    (18, 13, 1, 440.3, 603.7),
    (19, 14, 0, 108.6, 205.9),
    (20, 14, 1, 636.3, 749.4),
    (21, 15, 0, 385.6, 507.4),
    (22, 15, 1, 657.8, 759.8),
    (23, 16, 0, 242.1, 350.6),
    (24, 16, 1,  85.1, 217.5),
    (25, 17, 0, 649.2, 738.6),
    (26, 18, 0,  55.0, 186.1),
    (27, 18, 1, 194.6, 295.7),
    (28, 18, 1, 611.2, 741.0),
    (29, 19, 0, 279.5, 368.2),
    (30, 19, 0, 598.4, 740.4),
    (31, 19, 1, 475.0, 614.5),
    (32, 20, 0, 443.1, 551.0),
]

urls_file = 'scratch/t4_b3_diagram_urls.json'
with open(urls_file, 'r', encoding='utf-8') as f:
    urls_data = json.load(f)

print(f"Recropping and uploading {len(SPECS)} diagrams without captions (Rajah [] excluded)...")

for r_num, pno, col, y0, cap_y0 in SPECS:
    page = doc[pno - 1]
    x0 = 45.0 if col == 0 else 300.0
    x1 = 286.0 if col == 0 else 545.0
    y1 = cap_y0 - 3.0 # strictly exclude caption text
    
    rect = fitz.Rect(x0, y0, x1, y1)
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=rect)
    img = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
    trimmed = autocrop(img)
    
    fname = f't4_b3_rajah{r_num}_v2.webp'
    local_path = os.path.join(OUT_DIR, fname)
    trimmed.save(local_path, 'WEBP', quality=95)
    
    with open(local_path, 'rb') as f:
        data = f.read()
    r2_key = f'assets/diagrams/modul_konstruk_t4/b3/{fname}'
    url = upload_bytes(data, r2_key, 'image/webp')
    
    # Store both the base key and v2 key to ensure seamless compatibility
    urls_data[f't4_b3_rajah{r_num}'] = url
    urls_data[f't4_b3_rajah{r_num}_v2'] = url
    print(f"Uploaded Rajah {r_num:02d} ({trimmed.size[0]}x{trimmed.size[1]} px) -> {url}")

with open(urls_file, 'w', encoding='utf-8') as f:
    json.dump(urls_data, f, indent=2)

print("\nSuccessfully updated scratch/t4_b3_diagram_urls.json with all 32 v2 diagram URLs.")
