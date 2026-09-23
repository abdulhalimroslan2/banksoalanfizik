"""
PaddleOCR Utility Functions
This module provides OCR functionality for extracting text from images and PDFs.
"""

from paddleocr import PaddleOCR
import os
import json
from typing import List, Dict, Union
from pathlib import Path


class OCRProcessor:
    """
    A wrapper class for PaddleOCR to simplify text extraction from images and PDFs.
    """
    
    def __init__(self, lang='en', use_gpu=False):
        """
        Initialize the OCR processor.
        
        Args:
            lang (str): Language code. Supports 'en', 'ch', 'ms' (Malay), etc.
            use_gpu (bool): Whether to use GPU acceleration (requires CUDA setup)
        """
        self.ocr = PaddleOCR(
            use_angle_cls=True,  # Enable text direction detection
            lang=lang
        )
        
    def extract_text_from_image(self, image_path: str, output_format='text') -> Union[str, Dict]:
        """
        Extract text from a single image file.
        
        Args:
            image_path (str): Path to the image file
            output_format (str): 'text' for plain text, 'structured' for detailed results
            
        Returns:
            str or dict: Extracted text or structured results
        """
        if not os.path.exists(image_path):
            raise FileNotFoundError(f"Image file not found: {image_path}")
        
        result = self.ocr.ocr(image_path)
        
        if output_format == 'text':
            # Extract plain text
            text_lines = []
            if result and result[0]:
                for line in result[0]:
                    text_lines.append(line[1][0])  # line[1][0] contains the text
            return '\n'.join(text_lines)
        
        elif output_format == 'structured':
            # Return structured data with bounding boxes and confidence
            structured_result = []
            if result and result[0]:
                for line in result[0]:
                    bbox = line[0]  # Bounding box coordinates
                    text_info = line[1]  # (text, confidence)
                    structured_result.append({
                        'text': text_info[0],
                        'confidence': text_info[1],
                        'bbox': bbox
                    })
            return structured_result
        
        return result
    
    def extract_text_from_pdf_pages(self, pdf_images_folder: str) -> Dict[int, str]:
        """
        Extract text from PDF pages (as images).
        
        Args:
            pdf_images_folder (str): Folder containing PDF page images
            
        Returns:
            dict: Dictionary with page numbers as keys and extracted text as values
        """
        results = {}
        
        # Get all image files in the folder
        image_files = sorted([
            f for f in os.listdir(pdf_images_folder)
            if f.lower().endswith(('.png', '.jpg', '.jpeg'))
        ])
        
        for idx, img_file in enumerate(image_files, start=1):
            img_path = os.path.join(pdf_images_folder, img_file)
            text = self.extract_text_from_image(img_path, output_format='text')
            results[idx] = text
        
        return results
    
    def batch_process_images(self, image_folder: str, output_json: str = None) -> Dict[str, str]:
        """
        Process multiple images in a folder.
        
        Args:
            image_folder (str): Path to folder containing images
            output_json (str): Optional path to save results as JSON
            
        Returns:
            dict: Dictionary with filenames as keys and extracted text as values
        """
        results = {}
        
        image_files = [
            f for f in os.listdir(image_folder)
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp'))
        ]
        
        for img_file in image_files:
            img_path = os.path.join(image_folder, img_file)
            try:
                text = self.extract_text_from_image(img_path, output_format='text')
                results[img_file] = text
                print(f"✓ Processed: {img_file}")
            except Exception as e:
                print(f"✗ Error processing {img_file}: {str(e)}")
                results[img_file] = f"ERROR: {str(e)}"
        
        # Save to JSON if requested
        if output_json:
            with open(output_json, 'w', encoding='utf-8') as f:
                json.dump(results, f, ensure_ascii=False, indent=2)
            print(f"\n✓ Results saved to: {output_json}")
        
        return results
    
    def extract_math_formulas(self, image_path: str) -> List[str]:
        """
        Extract mathematical formulas from an image.
        Note: This uses standard text extraction. For better formula recognition,
        consider using PaddleOCR's formula-specific models.
        
        Args:
            image_path (str): Path to the image file
            
        Returns:
            list: List of extracted text lines (may contain formulas)
        """
        result = self.extract_text_from_image(image_path, output_format='structured')
        
        # Return all text lines - you may need additional processing to identify formulas
        return [item['text'] for item in result]


# Convenience function for quick text extraction
def quick_ocr(image_path: str, lang='en') -> str:
    """
    Quick one-liner to extract text from an image.
    
    Args:
        image_path (str): Path to the image file
        lang (str): Language code (default: 'en')
        
    Returns:
        str: Extracted text
    """
    processor = OCRProcessor(lang=lang)
    return processor.extract_text_from_image(image_path, output_format='text')


if __name__ == "__main__":
    # Example usage
    print("PaddleOCR Utility Module")
    print("=" * 50)
    print("\nExample usage:")
    print("""
    from ocr_utils import OCRProcessor, quick_ocr
    
    # Quick extraction
    text = quick_ocr('path/to/image.png')
    print(text)
    
    # Advanced usage
    processor = OCRProcessor(lang='en')
    result = processor.extract_text_from_image('image.png', output_format='structured')
    
    # Batch processing
    processor.batch_process_images('assets/pdf_pages/', output_json='ocr_results.json')
    """)
