# Hub Fizik Educational Infographics System - Design Specification

**Date**: 2026-09-22  
**Project**: Hub Fizik - Bank Soalan Fizik SPM  
**Author**: Kiro AI + Halim Roslan  
**Status**: Approved for Implementation  

---

## Executive Summary

The Hub Fizik Educational Infographics System generates professional, curriculum-aligned physics infographics for SPM teachers. The system uses a two-stage pipeline combining /infographic-kids skill for prompt design and /chatgpt-page-generator for high-quality image rendering via ChatGPT DALL-E.

**Key Benefits for Teachers**:
- 📚 Ready-to-print A4 educational infographics
- 🎨 Professionally designed with scientific accuracy
- 🚀 Automated batch generation
- 📖 Complete master PDF for distribution
- 🔄 Reusable for new topics

---

## System Purpose & Success Criteria

### Primary Goal
Enable teachers to generate professional educational infographics for SPM Physics topics with minimal effort, providing high-quality visual teaching aids that enhance student understanding.

### Success Criteria
- ✅ Generate minimum 6 physics topic infographics covering SPM curriculum
- ✅ Each infographic: A4 portrait format, print-ready (2480×3508px minimum resolution)
- ✅ Scientific accuracy verified against SPM syllabus requirements
- ✅ Bilingual support (English primary, Malay optional for future expansion)
- ✅ Automated PDF compilation for easy classroom distribution
- ✅ Extensible system for adding new topics without code changes

### Target Users
- SPM Physics teachers (Form 4-5, ages 16-17 students)
- 1:1 teacher-to-system ratio (single user generating content)
- Minimal technical expertise required

---

## High-Level Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                    Hub Fizik System                          │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
┌───────▼────────┐   ┌────────▼────────┐   ┌──────▼──────┐
│ Topic Database │   │ Design System   │   │   Output    │
│   Definition   │   │  Integration    │   │  Management │
└───────┬────────┘   └────────┬────────┘   └──────▲──────┘
        │                     │                     │
        └──────────┬──────────┘                     │
                   │                                │
        ┌──────────▼───────────┐                   │
        │  Infographic Prompt  │                   │
        │  Generator           │                   │
        │  (/infographic-kids) │                   │
        └──────────┬───────────┘                   │
                   │                                │
        ┌──────────▼────────────┐                  │
        │   Manifest Builder    │                  │
        │  (manifest.json)      │                  │
        └──────────┬────────────┘                  │
                   │                                │
        ┌──────────▼────────────────┐              │
        │   ChatGPT Generation      │              │
        │   Engine                  │              │
        │   (/chatgpt-page-         │──────────────┘
        │    generator)             │
        └───────────────────────────┘
```

### Technology Stack
- **Python 3.9+**: Core scripting language
- **Node.js + Playwright**: ChatGPT browser automation
- **PaddleOCR**: (Optional) Future OCR integration for question extraction
- **PyMuPDF (fitz)**: PDF compilation
- **ChatGPT DALL-E 3**: Image generation engine
- **Skills**:
  - `/infographic-kids`: Educational prompt design
  - `/chatgpt-page-generator`: Automated generation pipeline
  - `/ui-ux-pro-max`: Design system integration

---

## Detailed Component Specifications

### 1. Topic Definition Module

**File**: `hub_fizik_topics.py`

**Purpose**: Central repository of SPM Physics topics with structured metadata

**Data Structure**:
```python
PHYSICS_TOPICS = [
    {
        "id": 1,
        "title": "Forces and Motion",
        "title_malay": "Daya dan Gerakan",
        "subtopics": [
            "Newton's First Law (Inertia)",
            "Newton's Second Law (F=ma)",
            "Newton's Third Law (Action-Reaction)",
            "Types of Forces",
            "Motion Graphs"
        ],
        "key_concepts": [
            "Force (F) = mass (m) × acceleration (a)",
            "Balanced and unbalanced forces",
            "Velocity vs. Acceleration",
            "Momentum and Impulse"
        ],
        "real_world_examples": [
            "Seatbelts and car crashes",
            "Rocket propulsion",
            "Walking and friction"
        ],
        "spm_chapters": ["Chapter 2"],
        "difficulty": "Core",
        "language": "en"
    },
    {
        "id": 2,
        "title": "Energy",
        "title_malay": "Tenaga",
        "subtopics": [
            "Kinetic Energy",
            "Potential Energy",
            "Law of Conservation of Energy",
            "Work and Power",
            "Energy Efficiency"
        ],
        "key_concepts": [
            "KE = ½mv²",
            "PE = mgh",
            "Energy cannot be created or destroyed",
            "Work = Force × Distance",
            "Power = Work / Time"
        ],
        "real_world_examples": [
            "Roller coasters",
            "Hydroelectric dams",
            "Solar panels"
        ],
        "spm_chapters": ["Chapter 3"],
        "difficulty": "Core",
        "language": "en"
    },
    {
        "id": 3,
        "title": "Waves",
        "title_malay": "Gelombang",
        "subtopics": [
            "Wave Properties (amplitude, wavelength, frequency)",
            "Transverse vs. Longitudinal Waves",
            "Wave Behavior (reflection, refraction, diffraction)",
            "Sound Waves",
            "Electromagnetic Spectrum"
        ],
        "key_concepts": [
            "v = fλ (wave speed = frequency × wavelength)",
            "Wave interference",
            "Doppler effect",
            "Speed of sound in different media"
        ],
        "real_world_examples": [
            "Musical instruments",
            "Ultrasound imaging",
            "Radio communications"
        ],
        "spm_chapters": ["Chapter 5"],
        "difficulty": "Core",
        "language": "en"
    },
    {
        "id": 4,
        "title": "Electricity",
        "title_malay": "Elektrik",
        "subtopics": [
            "Electric Current and Voltage",
            "Resistance and Ohm's Law",
            "Series and Parallel Circuits",
            "Electrical Power and Energy",
            "Domestic Electricity"
        ],
        "key_concepts": [
            "V = IR (Ohm's Law)",
            "P = VI (Power)",
            "Series: same current, voltage divides",
            "Parallel: same voltage, current divides",
            "Electrical safety"
        ],
        "real_world_examples": [
            "Home wiring",
            "Circuit breakers and fuses",
            "Electric bills (kWh)"
        ],
        "spm_chapters": ["Chapter 4"],
        "difficulty": "Core",
        "language": "en"
    },
    {
        "id": 5,
        "title": "Light",
        "title_malay": "Cahaya",
        "subtopics": [
            "Reflection (plane and curved mirrors)",
            "Refraction",
            "Lenses (convex and concave)",
            "Optical Instruments",
            "Dispersion and Color"
        ],
        "key_concepts": [
            "Law of reflection: angle in = angle out",
            "Snell's Law: n₁sin(θ₁) = n₂sin(θ₂)",
            "Lens equation: 1/f = 1/u + 1/v",
            "Total internal reflection",
            "Magnification"
        ],
        "real_world_examples": [
            "Eyeglasses and contact lenses",
            "Cameras and telescopes",
            "Fiber optics",
            "Rainbows"
        ],
        "spm_chapters": ["Chapter 6"],
        "difficulty": "Core",
        "language": "en"
    },
    {
        "id": 6,
        "title": "Heat",
        "title_malay": "Haba",
        "subtopics": [
            "Temperature vs. Heat",
            "Thermal Expansion",
            "Heat Transfer (conduction, convection, radiation)",
            "Specific Heat Capacity",
            "Gas Laws"
        ],
        "key_concepts": [
            "Q = mcΔT (heat energy)",
            "Three methods of heat transfer",
            "Thermal equilibrium",
            "Boyle's Law, Charles's Law",
            "Absolute zero"
        ],
        "real_world_examples": [
            "Thermometers",
            "Cooking and heat transfer",
            "Thermal insulators",
            "Weather and convection currents"
        ],
        "spm_chapters": ["Chapter 7"],
        "difficulty": "Core",
        "language": "en"
    }
]
```

**Functions**:
- `get_topic_by_id(topic_id)` → Returns topic dictionary
- `get_all_topics()` → Returns list of all topics
- `filter_topics_by_language(lang)` → Filters by language
- `filter_topics_by_difficulty(level)` → Filters by difficulty

---

### 2. Infographic Prompt Generator

**File**: `infographic_prompt_generator.py`

**Purpose**: Transform topic metadata into detailed DALL-E prompts using /infographic-kids template

**Core Function**:
```python
def generate_infographic_prompt(topic_data: dict, design_system: dict) -> str:
    """
    Generates a complete DALL-E prompt for educational infographic.
    
    Args:
        topic_data: Topic metadata from hub_fizik_topics
        design_system: Design palette from ui-ux-pro-max
        
    Returns:
        Complete DALL-E prompt string following /infographic-kids template
    """
```

**Prompt Structure** (based on /infographic-kids):

1. **Header**: Format and topic
   ```
   Create a highly detailed, visually engaging, colorful educational 
   infographic about [TOPIC TITLE].
   ```

2. **Core Visual**: Main diagram specification
   - Central illustration showing key physics concept
   - Labels and callouts
   - Scientific accuracy requirements

3. **Content Sections**:
   - Title with question format ("How does [X] work?")
   - Simple explanation (student-friendly language)
   - Key components/concepts
   - Step-by-step breakdown
   - Labeled diagrams
   - Real-world applications
   - Fun facts
   - Important formulas

4. **Layout Specifications**:
   - A4 portrait (1:1.414 ratio)
   - Grid-based educational layout
   - Clear visual hierarchy
   - Rounded information panels
   - Generous margins

5. **Visual Style**:
   - Professional educational infographic
   - Modern scientific illustration
   - Semi-realistic diagrams
   - Vibrant color palette from design system
   - High visual clarity

6. **Typography**:
   - Large readable title
   - Clear section headings
   - Concise body text
   - Professional educational typeface

7. **Color System**:
   - Inject design system colors
   - Strategic color coding for different concepts
   - High contrast for readability

8. **Accuracy Constraints**:
   ```
   STRICT TEXT ACCURACY & ZERO HALLUCINATION: Render ONLY the exact 
   physics concepts, formulas, and facts provided. ABSOLUTELY NO 
   irrelevant mottos, slogans, or decorative filler text. All 
   diagrams must be scientifically accurate.
   ```

9. **Output Specification**:
   - A4 portrait
   - 2480 × 3508px minimum
   - Ultra-sharp details
   - Print-ready appearance

---

### 3. Design System Integration

**File**: `design_system_loader.py`

**Purpose**: Query ui-ux-pro-max for consistent branding and professional appearance

**Function**:
```python
def load_design_system(theme: str = "Physics Education SPM") -> dict:
    """
    Queries ui-ux-pro-max for design system.
    
    Args:
        theme: Theme descriptor for palette generation
        
    Returns:
        dict: {
            "palette": {
                "primary": "#HEX",
                "secondary": "#HEX",
                "accent": "#HEX",
                "background": "#HEX",
                "cards": "#HEX",
                "borders": "#HEX"
            },
            "typography": {
                "title": "Font Name",
                "body": "Font Name"
            },
            "layout_style": "Bento Grid" | "Swiss Modernism" | "Editorial"
        }
    """
```

**Integration Command**:
```bash
python3 ~/.kiro/skills/ui-ux-pro-max/scripts/search.py \
    "Physics Education SPM modern professional" \
    --design-system --json
```

**Color Palette Strategy**:
- **Forces/Motion**: Blue spectrum (trust, stability)
- **Energy**: Orange/yellow (warmth, power)
- **Waves**: Purple/teal (dynamic, flowing)
- **Electricity**: Yellow/green (energy, caution)
- **Light**: Bright spectrum (rainbow elements)
- **Heat**: Red/orange (warmth, intensity)

---

### 4. Manifest Builder

**File**: `manifest_builder.py`

**Purpose**: Create ChatGPT generation manifest JSON

**Structure**:
```python
def build_manifest(topics: list, output_dir: str, design_system: dict) -> dict:
    """
    Builds manifest.json for chatgpt-page-generator.
    
    Args:
        topics: List of topic dictionaries
        output_dir: Output directory path
        design_system: Design system from ui-ux-pro-max
        
    Returns:
        dict: Complete manifest structure
    """
```

**Manifest JSON Format**:
```json
{
  "project_title": "Hub Fizik - SPM Physics Infographics",
  "output_dir": "/Users/halimroslan/Desktop/.../hub_fizik_infographics/png",
  "backup_dir": "/Users/halimroslan/Desktop/.../backups",
  "global_style": "Ultra-premium educational infographic. A4 portrait. Professional scientific illustration. Clean geometric layout. Vibrant educational color palette. High contrast. Print-ready 2480×3508px.",
  "negative_constraints": "STRICTLY NO mottos, taglines, inspirational quotes, or decorative filler text. STRICTLY NO inaccurate physics diagrams. STRICTLY NO cartoon doodles. Keep clean negative space. Scientific accuracy required.",
  "pages": [
    {
      "page": 1,
      "title": "Forces and Motion - Educational Infographic",
      "prompt": "[Generated prompt from infographic_prompt_generator.py]",
      "ref_images": []
    },
    {
      "page": 2,
      "title": "Energy - Educational Infographic",
      "prompt": "[Generated prompt]",
      "ref_images": []
    }
    // ... more pages
  ]
}
```

**Key Fields**:
- `global_style`: Applied to all infographics for consistency
- `negative_constraints`: Prevents common AI hallucination issues
- `pages[]`: Array of infographic specifications
- `ref_images[]`: Optional reference images (empty for now, extensible)

---

### 5. ChatGPT Generation Engine

**File**: `chatgpt_generator.py`

**Purpose**: Execute batch generation via /chatgpt-page-generator

**Workflow**:

1. **Session Check**:
   ```python
   def check_chatgpt_session():
       """Verify ChatGPT login status."""
       subprocess.run([
           'node',
           '/Users/halimroslan/.kiro/skills/chatgpt-page-generator/scripts/login.js'
       ])
   ```

2. **Manifest Generation**:
   - Save manifest.json to temp directory
   - Validate JSON structure

3. **Batch Execution**:
   ```python
   def generate_infographics(manifest_path: str):
       """Execute chatgpt-page-generator with manifest."""
       subprocess.run([
           'node',
           '/Users/halimroslan/.kiro/skills/chatgpt-page-generator/scripts/generate.js',
           manifest_path
       ], check=True)
   ```

4. **Progress Monitoring**:
   - Track generation status per infographic
   - Log completion and errors
   - Display progress to user

5. **Quality Verification**:
   ```python
   def verify_output(image_path: str) -> bool:
       """Check image quality and resolution."""
       img = Image.open(image_path)
       return img.width >= 2000 and img.height >= 2800
   ```

**Error Handling**:
- **Rate Limit**: Wait with exponential backoff
- **Session Timeout**: Re-login and resume
- **Low Quality**: Regenerate with enhanced prompt
- **Network Error**: Retry with max 3 attempts

---

### 6. PDF Compilation

**File**: `pdf_compiler.py`

**Purpose**: Compile individual PNG infographics into master PDF

**Function**:
```python
def compile_master_pdf(
    image_dir: str,
    output_pdf: str,
    total_pages: int
) -> bool:
    """
    Compiles PNG infographics into A4 PDF using PyMuPDF.
    
    Args:
        image_dir: Directory containing page_1.png, page_2.png, etc.
        output_pdf: Output PDF path
        total_pages: Expected number of pages
        
    Returns:
        bool: Success status
    """
```

**Implementation** (using PyMuPDF fitz):
```python
import fitz  # PyMuPDF

doc = fitz.open()
A4_WIDTH, A4_HEIGHT = 595.276, 841.890  # A4 in points

for i in range(1, total_pages + 1):
    img_path = os.path.join(image_dir, f"page_{i}.png")
    if os.path.exists(img_path):
        page = doc.new_page(width=A4_WIDTH, height=A4_HEIGHT)
        page.insert_image(page.rect, filename=img_path)

doc.save(output_pdf, garbage=4, deflate=True)
doc.close()
```

**Features**:
- Standard A4 dimensions
- Maintains image quality
- Adds PDF metadata (title, author, subject)
- No blank page bugs

---

### 7. Main Orchestrator

**File**: `generate_hub_fizik_infographics.py`

**Purpose**: Command-line interface and workflow orchestration

**Usage**:
```bash
python3 generate_hub_fizik_infographics.py [options]

Options:
  --topics all|1,2,3        Topic IDs to generate (default: all)
  --language en|ms|both     Language version (default: en)
  --output <path>           Custom output directory
  --dry-run                 Generate manifest only, no ChatGPT execution
  --skip-pdf               Skip PDF compilation
  --verbose                Enable detailed logging
```

**Workflow**:
```python
def main():
    # 1. Parse arguments
    args = parse_arguments()
    
    # 2. Load topics
    topics = load_topics(args.topics, args.language)
    
    # 3. Load design system
    design_system = load_design_system()
    
    # 4. Generate prompts
    prompts = [generate_prompt(t, design_system) for t in topics]
    
    # 5. Build manifest
    manifest = build_manifest(topics, prompts, args.output)
    
    # 6. Save manifest
    save_manifest(manifest, 'manifest.json')
    
    if args.dry_run:
        print("Dry run complete. Manifest saved.")
        return
    
    # 7. Check ChatGPT session
    check_chatgpt_session()
    
    # 8. Generate infographics
    generate_infographics('manifest.json')
    
    # 9. Verify outputs
    verify_all_outputs(args.output, len(topics))
    
    # 10. Compile PDF
    if not args.skip_pdf:
        compile_master_pdf(args.output, 'Hub_Fizik_Master.pdf', len(topics))
    
    # 11. Create backup
    create_backup(args.output)
    
    print("✅ Generation complete!")
    print(f"📁 Outputs: {args.output}")
```

---

## Output Specifications

### Directory Structure
```
outputs/hub_fizik_infographics/
├── png/
│   ├── page_1.png          # Forces and Motion
│   ├── page_2.png          # Energy
│   ├── page_3.png          # Waves
│   ├── page_4.png          # Electricity
│   ├── page_5.png          # Light
│   └── page_6.png          # Heat
├── pdf/
│   └── Hub_Fizik_Infographics_Master.pdf
├── manifest.json           # Generation configuration
└── generation_log.txt      # Detailed logs

backups/
└── 2026-09-22_hub_fizik/
    ├── png/
    └── pdf/
```

### File Naming Convention
- Individual PNGs: `page_N.png` (where N = topic ID)
- Master PDF: `Hub_Fizik_Infographics_Master.pdf`
- Backups: `YYYY-MM-DD_hub_fizik/`

### Image Specifications
- **Format**: PNG (lossless)
- **Resolution**: 2480×3508px minimum (300 DPI A4)
- **Color Space**: sRGB
- **File Size**: ~2-5 MB per infographic
- **Compression**: None (maximum quality)

### PDF Specifications
- **Format**: PDF 1.4+
- **Page Size**: A4 (595.276×841.890 points)
- **Orientation**: Portrait
- **Color Mode**: RGB
- **Compression**: Deflate
- **Metadata**:
  - Title: "Hub Fizik - SPM Physics Infographics"
  - Author: "Hub Fizik System"
  - Subject: "Educational Physics Infographics"
  - Keywords: "SPM, Physics, Education, Malaysia"

---

## Testing Strategy

### Unit Tests

**File**: `tests/test_hub_fizik_system.py`

**Test Cases**:

1. **Topic Database Tests**:
   ```python
   def test_load_topics()
   def test_get_topic_by_id()
   def test_filter_topics_by_language()
   ```

2. **Prompt Generator Tests**:
   ```python
   def test_generate_prompt_structure()
   def test_prompt_includes_all_sections()
   def test_prompt_scientific_accuracy()
   def test_prompt_length_reasonable()
   ```

3. **Design System Tests**:
   ```python
   def test_load_design_system()
   def test_color_palette_valid_hex()
   def test_typography_fonts_exist()
   ```

4. **Manifest Builder Tests**:
   ```python
   def test_build_manifest_structure()
   def test_manifest_json_valid()
   def test_manifest_paths_correct()
   ```

5. **PDF Compiler Tests**:
   ```python
   def test_compile_pdf_from_images()
   def test_pdf_page_count()
   def test_pdf_metadata()
   ```

### Integration Tests

**File**: `tests/test_integration.py`

**Test Scenarios**:

1. **End-to-End Single Topic**:
   ```python
   def test_generate_single_infographic():
       # Generate infographic for topic 1
       # Verify output exists and meets quality standards
   ```

2. **Manifest Creation to ChatGPT**:
   ```python
   def test_manifest_to_chatgpt():
       # Create manifest
       # Mock ChatGPT generation
       # Verify outputs
   ```

3. **PDF Compilation Pipeline**:
   ```python
   def test_png_to_pdf_pipeline():
       # Use sample PNGs
       # Compile to PDF
       # Verify page count and quality
   ```

### System Tests

**File**: `tests/test_system.py`

**Full System Test**:
```python
def test_complete_generation_cycle():
    """
    Full integration test:
    1. Load all 6 topics
    2. Generate prompts
    3. Build manifest
    4. Mock ChatGPT generation
    5. Compile PDF
    6. Verify all outputs
    """
```

**Test with Real ChatGPT** (manual):
```bash
pytest tests/test_system.py --real-chatgpt
```

### Test Data

**Mock Outputs**:
- `tests/fixtures/sample_infographic.png` - Sample A4 infographic
- `tests/fixtures/sample_manifest.json` - Valid manifest
- `tests/fixtures/sample_design_system.json` - Design palette

---

## Dependencies

### Python Packages
```txt
Pillow>=10.0.0          # Image processing
PyMuPDF>=1.23.0         # PDF compilation
requests>=2.31.0        # HTTP requests
pytest>=7.4.0           # Testing
```

### Node.js Packages
```json
{
  "playwright": "^1.40.0"
}
```

### System Requirements
- Python 3.9+
- Node.js 18+
- macOS (tested) or Linux
- Active ChatGPT account with DALL-E access
- 2GB free disk space
- Stable internet connection

---

## Deployment & Usage

### One-Time Setup

1. **Verify ChatGPT Session**:
   ```bash
   node ~/.kiro/skills/chatgpt-page-generator/scripts/login.js
   ```

2. **Install Python Dependencies**:
   ```bash
   pip3 install Pillow PyMuPDF requests pytest
   ```

3. **Configure Output Directory**:
   ```python
   # In generate_hub_fizik_infographics.py
   DEFAULT_OUTPUT_DIR = "/Users/halimroslan/Desktop/HUB BANK SOALAN FIZIK/FIZIK_SPM_HUB_PROJEK/outputs/hub_fizik_infographics"
   ```

### Running Generation

**Generate All Topics**:
```bash
python3 generate_hub_fizik_infographics.py
```

**Generate Specific Topics**:
```bash
python3 generate_hub_fizik_infographics.py --topics 1,3,5
```

**Dry Run (Test Prompts)**:
```bash
python3 generate_hub_fizik_infographics.py --dry-run --verbose
```

**Custom Output**:
```bash
python3 generate_hub_fizik_infographics.py --output ~/Desktop/my_infographics
```

### Expected Timeline

- **Setup**: 5 minutes (one-time)
- **Prompt Generation**: 10 seconds
- **ChatGPT Generation**: 2-3 minutes per infographic (12-18 min total)
- **PDF Compilation**: 5 seconds
- **Total**: ~20-25 minutes for 6 infographics

---

## Maintenance & Extensibility

### Adding New Topics

1. **Add to Topics Database**:
   ```python
   # In hub_fizik_topics.py
   PHYSICS_TOPICS.append({
       "id": 7,
       "title": "Magnetism",
       "title_malay": "Kemagnetan",
       # ... rest of metadata
   })
   ```

2. **Generate New Topic Only**:
   ```bash
   python3 generate_hub_fizik_infographics.py --topics 7
   ```

3. **Recompile Master PDF**:
   ```bash
   python3 generate_hub_fizik_infographics.py --skip-generation --compile-pdf
   ```

### Updating Existing Infographics

1. **Modify Topic Metadata** (hub_fizik_topics.py)
2. **Regenerate Specific Topic**:
   ```bash
   python3 generate_hub_fizik_infographics.py --topics 3 --force
   ```
3. **Replace in Master PDF** (automatic)

### Supporting Malay Language

1. **Add Malay Topics**:
   ```python
   # Duplicate topics with language: "ms"
   {
       "id": 7,
       "title": "Daya dan Gerakan",
       "language": "ms",
       # ... Malay content
   }
   ```

2. **Generate Malay Version**:
   ```bash
   python3 generate_hub_fizik_infographics.py --language ms
   ```

3. **Generate Both**:
   ```bash
   python3 generate_hub_fizik_infographics.py --language both
   ```

### Customizing Design

**Modify Design System Query**:
```python
# In design_system_loader.py
theme = "Physics Education SPM vibrant modern"  # Adjust theme
```

**Override Colors Manually**:
```python
# In manifest_builder.py
design_system["palette"]["primary"] = "#1E88E5"  # Custom blue
```

---

## Error Handling & Troubleshooting

### Common Issues

**Issue 1: ChatGPT Rate Limit**
- **Symptom**: "Limit for creating images" message
- **Solution**: 
  ```bash
  # Wait 15-30 minutes, then resume
  python3 generate_hub_fizik_infographics.py --resume
  ```
- **Prevention**: Generate in batches (3 topics at a time)

**Issue 2: Session Expired**
- **Symptom**: Login screen appears during generation
- **Solution**:
  ```bash
  node ~/.kiro/skills/chatgpt-page-generator/scripts/login.js
  # Re-run generation
  ```

**Issue 3: Low-Quality Output**
- **Symptom**: Blurry or pixelated infographic
- **Detection**: Automatic (resolution < 2000px)
- **Solution**: System automatically regenerates with enhanced prompt

**Issue 4: Scientific Inaccuracy**
- **Prevention**: Pre-validate prompts against SPM syllabus
- **Solution**: Manual review and regenerate with corrected metadata

**Issue 5: Blank PDF Pages**
- **Symptom**: PDF has blank pages between infographics
- **Prevention**: Using PyMuPDF (fitz) instead of reportlab
- **Solution**: Already implemented in pdf_compiler.py

### Debugging

**Enable Verbose Logging**:
```bash
python3 generate_hub_fizik_infographics.py --verbose
```

**Check Manifest**:
```bash
cat outputs/hub_fizik_infographics/manifest.json | jq
```

**Verify ChatGPT Session**:
```bash
node ~/.kiro/skills/chatgpt-page-generator/scripts/login.js
```

**Manual Generation Test**:
```bash
# Test single infographic
python3 -c "from infographic_prompt_generator import *; print(generate_infographic_prompt(get_topic_by_id(1), {}))"
```

---

## Security & Privacy

### Data Handling
- **No PII**: System does not collect personal data
- **Local Processing**: All data stays on local machine
- **ChatGPT API**: Only prompts sent to OpenAI (no student data)

### Authentication
- ChatGPT session managed locally
- No credentials stored in code
- Session stored in Chromium profile (encrypted by OS)

### Output Distribution
- Teachers responsible for student data when sharing infographics
- Generated content is educational and curriculum-aligned
- No tracking or analytics in outputs

---

## Future Enhancements

### Phase 2 Features
1. **OCR Integration**: Extract questions from existing PDF question banks
2. **Question-Infographic Linking**: Associate questions with relevant infographics
3. **Interactive Web Version**: Browser-based infographic viewer
4. **Student Feedback**: Track which infographics are most effective

### Phase 3 Features
1. **Multi-Language Support**: Full Malay, Mandarin translations
2. **Customizable Templates**: Teachers can modify infographic layouts
3. **Animation Export**: Convert to video format for digital classrooms
4. **Collaboration**: Multiple teachers sharing infographic library

### Technical Debt
- Add caching for design system queries (avoid repeated API calls)
- Implement retry logic with exponential backoff (currently basic)
- Add progress bar for batch generation (currently text-based)
- Optimize prompt generation (currently regenerates from scratch)

---

## Success Metrics

### Quantitative
- ✅ 6 infographics generated successfully
- ✅ Resolution ≥ 2480×3508px (100% pass rate)
- ✅ Generation time < 25 minutes
- ✅ File size 2-5 MB per infographic
- ✅ PDF compilation success rate 100%

### Qualitative
- ✅ Scientific accuracy verified against SPM syllabus
- ✅ Visual appeal rated by teachers
- ✅ Readability for Form 4-5 students
- ✅ Print quality acceptable on A4 paper
- ✅ System usability for non-technical teachers

---

## Conclusion

The Hub Fizik Educational Infographics System provides a complete, automated solution for generating professional physics teaching materials. By combining the educational design expertise of /infographic-kids with the high-quality rendering of /chatgpt-page-generator, teachers gain access to curriculum-aligned, scientifically accurate, visually engaging infographics that enhance student learning.

The system is:
- ✅ **Easy to use**: Single command generates all infographics
- ✅ **Extensible**: Add new topics without code changes
- ✅ **Professional**: Publication-quality outputs
- ✅ **Reliable**: Comprehensive error handling and testing
- ✅ **Maintainable**: Clear architecture and documentation

**Status**: Ready for implementation phase.

---

**Next Step**: Invoke `writing-plans` skill to create detailed implementation plan.
