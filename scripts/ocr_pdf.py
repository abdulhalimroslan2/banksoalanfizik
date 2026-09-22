#!/usr/bin/env python3
"""Extract text from scanned PDFs using fitz + pytesseract."""
import sys
import os
import fitz
from PIL import Image
import pytesseract

def ocr_pdf(pdf_path, output_path, dpi=200):
    """OCR each page of a PDF and write combined text to output_path."""
    doc = fitz.open(pdf_path)
    all_text = []

    for page_num in range(len(doc)):
        page = doc[page_num]
        # Render page to image at high DPI for better OCR
        mat = fitz.Matrix(dpi / 72, dpi / 72)
        pix = page.get_pixmap(matrix=mat)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

        text = pytesseract.image_to_string(img, lang='eng+msa')
        all_text.append(f"=== Page {page_num + 1} ===\n{text}\n")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_text))

    n_pages = len(doc)
    n_chars = sum(len(t) for t in all_text)
    doc.close()
    print(f"  Pages: {n_pages}, Chars: {n_chars}")

if __name__ == '__main__':
    files = [
        ('Kertas 1.pdf', 'Kertas_1_OCR.txt'),
        ('Kertas 2.pdf', 'Kertas_2_OCR.txt'),
        ('Skema Kertas 1.pdf', 'Skema_Kertas_1_OCR.txt'),
        ('Skema Kertas 2.pdf', 'Skema_Kertas_2_OCR.txt'),
    ]

    src_dir = '/Users/halimroslan/Downloads/untitled folder 6'
    out_dir = '/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/FIZIK_SPM_HUB_PROJEK/converted_docs'
    os.makedirs(out_dir, exist_ok=True)

    for src, out in files:
        src_path = os.path.join(src_dir, src)
        out_path = os.path.join(out_dir, out)
        print(f"OCR: {src}")
        ocr_pdf(src_path, out_path)
