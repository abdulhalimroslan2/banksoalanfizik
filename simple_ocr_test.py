"""
Simple PaddleOCR Test - Quick verification
Run this when you're ready to test OCR functionality
"""

from paddleocr import PaddleOCR
import os

# Initialize OCR (English)
print("Initializing PaddleOCR...")
ocr = PaddleOCR(use_angle_cls=True, lang='en')
print("✓ PaddleOCR ready!\n")

# Test with an existing image
test_image = 'assets/pdf_pages/pdf_page_1.png'

if os.path.exists(test_image):
    print(f"Processing: {test_image}")
    result = ocr.ocr(test_image)
    
    print("\n" + "="*60)
    print("EXTRACTED TEXT:")
    print("="*60)
    
    if result and result[0]:
        for line in result[0]:
            text = line[1][0]
            confidence = line[1][1]
            print(f"{text} (confidence: {confidence:.2f})")
    
    print("="*60)
    print("\n✓ OCR test completed!")
else:
    print(f"Test image not found: {test_image}")
    print("Please update the 'test_image' variable with a valid image path.")
