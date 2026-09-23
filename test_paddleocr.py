"""
Test script for PaddleOCR installation
"""

import os
from ocr_utils import OCRProcessor, quick_ocr


def test_installation():
    """Test if PaddleOCR is properly installed"""
    print("=" * 60)
    print("Testing PaddleOCR Installation")
    print("=" * 60)
    
    try:
        # Initialize OCR processor
        print("\n[1/3] Initializing PaddleOCR...")
        processor = OCRProcessor(lang='en')
        print("✓ PaddleOCR initialized successfully!")
        
        # Check if we have test images
        print("\n[2/3] Checking for test images...")
        test_folders = [
            'assets/pdf_pages',
            'assets/pdf_pages_matematik',
            'assets/chatgpt_generated'
        ]
        
        available_images = []
        for folder in test_folders:
            if os.path.exists(folder):
                images = [f for f in os.listdir(folder) 
                         if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
                if images:
                    available_images.append((folder, images[0]))
        
        if available_images:
            print(f"✓ Found {len(available_images)} folders with images")
            
            # Test OCR on first available image
            print("\n[3/3] Testing OCR on sample image...")
            test_folder, test_image = available_images[0]
            test_path = os.path.join(test_folder, test_image)
            
            print(f"Processing: {test_path}")
            text = quick_ocr(test_path)
            
            print("\n" + "=" * 60)
            print("EXTRACTED TEXT (first 500 characters):")
            print("=" * 60)
            print(text[:500] if len(text) > 500 else text)
            print("=" * 60)
            
            print(f"\n✓ OCR test completed successfully!")
            print(f"✓ Total text length: {len(text)} characters")
            
        else:
            print("⚠ No test images found in standard folders")
            print("PaddleOCR is installed but not tested with actual images")
        
        print("\n" + "=" * 60)
        print("✓ Installation test PASSED")
        print("=" * 60)
        print("\nYou can now use PaddleOCR in your project!")
        print("\nQuick usage examples:")
        print("  from ocr_utils import quick_ocr")
        print("  text = quick_ocr('path/to/image.png')")
        
        return True
        
    except Exception as e:
        print(f"\n✗ Error: {str(e)}")
        print("\nInstallation test FAILED")
        return False


if __name__ == "__main__":
    test_installation()
