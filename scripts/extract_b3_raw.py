import fitz
import re
import json

doc = fitz.open('/Users/halimroslan/Downloads/Modul Konstruk K1 Objektif/Tingkatan 4/Modul Konstruk K1 BAB 3 T4.pdf')

def clean_ocr(text):
    text = re.sub(r'\s+', ' ', text).strip()
    return text

print("PyMuPDF loaded successfully.")
