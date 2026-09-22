#!/usr/bin/env python3
"""
Automated Verbatim Transcription & R2 Diagram Ingestion Pipeline
Hub Bank Soalan Fizik SPM (KSSM Kod 4531)

Usage:
  python3 scripts/ingest_spm_paper.py --pdf <path_to_pdf> --sumber "Percubaan SBP 2024" --kertas 1
"""

import os
import sys
import json
import argparse
import fitz  # PyMuPDF
from PIL import Image
import io

# Import R2 Uploader
sys.path.insert(0, os.path.dirname(__file__))
from r2_uploader import upload_bytes, trim_and_optimize_image

def extract_pdf_pages_and_images(pdf_path: str, source_name: str, kertas_no: int, dpi: int = 300):
    """
    Extracts text verbatim and high-DPI images/diagrams from a PDF exam paper.
    """
    if not os.path.exists(pdf_path):
        raise FileNotFoundError(f"PDF file not found: {pdf_path}")

    doc = fitz.open(pdf_path)
    print(f"[*] Processing '{pdf_path}' ({len(doc)} pages)...")
    print(f"[*] Sumber Soalan: '{source_name}', Kertas: {kertas_no}")

    extracted_pages = []
    source_slug = source_name.lower().replace(" ", "_").replace("/", "_")

    for page_idx, page in enumerate(doc):
        page_num = page_idx + 1
        page_text = page.get_text("text")

        # Extract embedded images
        image_list = page.get_images(full=True)
        uploaded_diagrams = []

        for img_idx, img_info in enumerate(image_list):
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]

            try:
                pil_img = Image.open(io.BytesIO(image_bytes))
                # Skip tiny icons/lines smaller than 80x80
                if pil_img.width < 80 or pil_img.height < 80:
                    continue

                webp_bytes = trim_and_optimize_image(pil_img)
                r2_key = f"diagrams/{source_slug}/k{kertas_no}_p{page_num}_img{img_idx + 1}.webp"
                
                print(f"    [+] Uploading diagram from page {page_num} to R2: {r2_key} ...")
                r2_url = upload_bytes(webp_bytes, r2_key, "image/webp")
                uploaded_diagrams.append({
                    "r2_url": r2_url,
                    "r2_key": r2_key,
                    "width": pil_img.width,
                    "height": pil_img.height
                })
            except Exception as e:
                print(f"    [-] Error processing image {xref} on page {page_num}: {e}")

        extracted_pages.append({
            "page_num": page_num,
            "text": page_text,
            "diagrams": uploaded_diagrams
        })

    return extracted_pages

def save_extracted_manifest(extracted_data: list, output_json: str):
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(extracted_data, f, ensure_ascii=False, indent=2)
    print(f"[*] Extraction manifest saved to: {output_json}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Ingest SPM Physics PDF Paper with R2 Diagram Upload")
    parser.add_argument("--pdf", required=True, help="Path to PDF exam paper")
    parser.add_argument("--sumber", required=True, help="Question source (e.g. 'Percubaan SBP 2024')")
    parser.add_argument("--kertas", type=int, default=1, choices=[1, 2, 3], help="Kertas 1, 2, or 3")
    parser.add_argument("--out", default="scratch/extracted_paper.json", help="Output JSON path")
    
    args = parser.parse_args()
    os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)
    
    data = extract_pdf_pages_and_images(args.pdf, args.sumber, args.kertas)
    save_extracted_manifest(data, args.out)
    print("[SUCCESS] PDF parsed, diagrams uploaded to Cloudflare R2, manifest ready for question structuring!")
