# PaddleOCR Installation Guide

## ✅ Installation Status
PaddleOCR has been successfully installed in your project!

## 📦 Installed Packages
- `paddleocr` v3.7.0
- `paddlepaddle` v3.3.1
- All required dependencies

## 🚀 Quick Start

### Basic Usage

```python
from ocr_utils import quick_ocr

# Extract text from an image
text = quick_ocr('path/to/image.png')
print(text)
```

### Advanced Usage

```python
from ocr_utils import OCRProcessor

# Initialize OCR processor
processor = OCRProcessor(lang='en')

# Extract plain text
text = processor.extract_text_from_image('image.png', output_format='text')

# Get structured results with bounding boxes and confidence scores
structured = processor.extract_text_from_image('image.png', output_format='structured')

for item in structured:
    print(f"Text: {item['text']}")
    print(f"Confidence: {item['confidence']:.2f}")
    print(f"BBox: {item['bbox']}")
```

### Batch Processing

```python
from ocr_utils import OCRProcessor

processor = OCRProcessor(lang='en')

# Process all images in a folder
results = processor.batch_process_images(
    'assets/pdf_pages/',
    output_json='ocr_results.json'
)

# Access results
for filename, text in results.items():
    print(f"{filename}:")
    print(text)
    print("-" * 50)
```

### Process PDF Pages

```python
from ocr_utils import OCRProcessor

processor = OCRProcessor(lang='en')

# Extract text from PDF pages (assuming pages are exported as images)
pdf_results = processor.extract_text_from_pdf_pages('assets/pdf_pages/')

# Access by page number
for page_num, text in pdf_results.items():
    print(f"Page {page_num}:")
    print(text)
```

## 🌍 Supported Languages

PaddleOCR supports 100+ languages:

- **English**: `lang='en'`
- **Chinese**: `lang='ch'`
- **Malay**: `lang='ms'` (Bahasa Melayu)
- **Japanese**: `lang='japan'`
- **Korean**: `lang='korean'`
- **Arabic**: `lang='ar'`
- **Hindi**: `lang='hi'`
- And many more...

## 📂 Project Structure

```
FIZIK_SPM_HUB_PROJEK/
├── ocr_utils.py           # OCR utility functions
├── test_paddleocr.py      # Test script
├── PADDLEOCR_README.md    # This file
└── assets/
    ├── pdf_pages/         # PDF page images
    ├── pdf_pages_matematik/
    └── chatgpt_generated/
```

## 💡 Use Cases for Your Physics Project

### 1. Extract Text from Question Bank PDFs
```python
from ocr_utils import OCRProcessor

processor = OCRProcessor(lang='en')

# Process all pages
results = processor.extract_text_from_pdf_pages('assets/pdf_pages/')

# Save to file
with open('extracted_questions.txt', 'w', encoding='utf-8') as f:
    for page_num, text in results.items():
        f.write(f"=== Page {page_num} ===\n")
        f.write(text)
        f.write("\n\n")
```

### 2. Extract Mathematical Formulas
```python
from ocr_utils import OCRProcessor

processor = OCRProcessor(lang='en')

# Extract formulas from physics worksheets
formulas = processor.extract_math_formulas('physics_worksheet.png')

for formula in formulas:
    print(formula)
```

### 3. Create Searchable Database from Scanned Materials
```python
from ocr_utils import OCRProcessor
import json

processor = OCRProcessor(lang='en')

# Batch process all question images
all_questions = processor.batch_process_images(
    'assets/pdf_pages/',
    output_json='question_database.json'
)

# Now you can search through the text
search_term = "momentum"
matching_questions = {
    filename: text 
    for filename, text in all_questions.items() 
    if search_term.lower() in text.lower()
}
```

## 🔧 Troubleshooting

### First Run is Slow
The first time you run PaddleOCR, it downloads model files (~100MB). This is normal and only happens once.

### Models Location
Models are cached at: `~/.paddlex/official_models/`

### Memory Usage
For large batches, process images one at a time to avoid memory issues.

## 📚 Documentation

- [PaddleOCR GitHub](https://github.com/PaddlePaddle/PaddleOCR)
- [Official Documentation](https://paddlepaddle.github.io/PaddleOCR/)
- [Model Zoo](https://github.com/PaddlePaddle/PaddleOCR/blob/main/doc/doc_en/models_list_en.md)

## 🎯 Next Steps

1. **Test the installation**: Run a simple OCR test on your existing PDF images
2. **Batch process**: Extract text from all your question bank PDFs
3. **Build database**: Create a searchable question database
4. **Integrate with app.js**: Add OCR functionality to your web application

## Example Integration with Your App

```javascript
// In app.js - call Python OCR script
const { spawn } = require('child_process');

function extractTextFromImage(imagePath) {
    return new Promise((resolve, reject) => {
        const python = spawn('python3', [
            '-c',
            `from ocr_utils import quick_ocr; print(quick_ocr('${imagePath}'))`
        ]);
        
        let result = '';
        python.stdout.on('data', (data) => {
            result += data.toString();
        });
        
        python.on('close', (code) => {
            if (code === 0) {
                resolve(result);
            } else {
                reject(new Error('OCR failed'));
            }
        });
    });
}
```

---

**Installation Date**: 2026-09-22  
**PaddleOCR Version**: 3.7.0  
**Python Version**: 3.9.6  
**Platform**: macOS (Apple Silicon)
