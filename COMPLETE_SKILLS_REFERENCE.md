# Complete Skills Reference - Your Kiro Superpowers

## 🎯 What You Have Installed

### 🦸 Superpowers Skills (15 workflow skills)
Professional development methodology that structures your work

### 🎨 Specialized Skills (3 domain-specific skills)
- **infographic-kids** - Educational infographic generator
- **chatgpt-page-generator** - Multi-page PDF portfolio system
- **ui-ux-pro-max** - Design system & UI intelligence

### 🔧 Tech Stack
- **PaddleOCR** - OCR text extraction from PDFs/images
- **Python 3.9** - Core language
- **Node.js** - ChatGPT automation

---

## 🚀 Quick Prompt Templates

### Template 1: Structured Feature Development
```
Using Superpowers workflow, create [FEATURE] that [DOES WHAT].

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Use TDD approach and create isolated git branch.
```

### Template 2: Educational Content Generation
```
Using Superpowers + /infographic-kids, design a system to generate 
educational infographics for [TOPIC].

The system should:
1. [Function 1]
2. [Function 2]
3. [Function 3]

Target audience: [AGE/LEVEL]
Language: [ENGLISH/MALAY]
```

### Template 3: PDF Portfolio Creation
```
Using Superpowers + /chatgpt-page-generator, create a [X]-page 
professional portfolio for [PROJECT].

Pages should include:
1. [Page 1 description]
2. [Page 2 description]
...

Branding: [Logo/colors/style]
```

### Template 4: Quick Single Output
```
Following Superpowers TDD approach, create [SINGLE ITEM] 
using /[skill].

Keep it lean but structured.
```

### Template 5: Integration Project
```
Using Superpowers methodology, integrate:
- PaddleOCR for [purpose]
- /infographic-kids for [purpose]
- /chatgpt-page-generator for [purpose]

Into a unified system that [GOAL].
```

---

## 🎯 Skill Combinations

### Combo 1: Question Bank → Infographic
```
Input: PDF question pages
↓ PaddleOCR
Extract: Questions text
↓ infographic-kids
Output: Educational infographic
```

**Prompt:**
```
Using Superpowers, create a pipeline that:
1. Extracts questions from assets/pdf_pages/ using PaddleOCR
2. Generates infographics for each topic using /infographic-kids
3. Catalogs all outputs with metadata
```

### Combo 2: Full Portfolio Generation
```
Input: Question bank data
↓ PaddleOCR + Data aggregation
Process: Statistics + Samples
↓ ui-ux-pro-max (design system)
Design: Consistent branding
↓ chatgpt-page-generator
Output: Multi-page PDF portfolio
```

**Prompt:**
```
Using Superpowers + /chatgpt-page-generator, create a comprehensive
10-page portfolio showcasing my Physics question bank with:
- Professional design from /ui-ux-pro-max
- Sample questions extracted via PaddleOCR
- Statistics and achievements
- School branding (logo/colors)
```

### Combo 3: Batch Educational Content
```
Input: List of physics topics
↓ Topic research
Content: Structured information
↓ infographic-kids (batch)
Output: Multiple A4 infographics
↓ chatgpt-page-generator
Final: Combined into master PDF
```

**Prompt:**
```
Using Superpowers workflow:
1. Generate infographics for 10 SPM Physics topics using /infographic-kids
2. Compile them into a master reference PDF using /chatgpt-page-generator
3. Add cover page and table of contents
4. Track generation progress and handle errors
```

---

## 📊 Decision Matrix

### When to Use What?

| Need | Skills to Use | Example Prompt Start |
|------|--------------|---------------------|
| Build complete system | Superpowers only | "Using Superpowers, create a..." |
| Single infographic | /infographic-kids only | "Create an infographic about..." |
| Structured infographic system | Superpowers + /infographic-kids | "Using Superpowers + /infographic-kids..." |
| PDF portfolio | /chatgpt-page-generator + /ui-ux-pro-max | "Using /chatgpt-page-generator, create..." |
| Professional portfolio system | All | "Using Superpowers + /chatgpt-page-generator..." |
| Extract text from PDF | PaddleOCR only | "Use PaddleOCR to extract..." |
| OCR + generation pipeline | PaddleOCR + Superpowers + specialized skill | "Using Superpowers, create pipeline..." |
| Fix bug systematically | systematic-debugging | "Help me debug this systematically..." |
| Add tests to existing code | test-driven-development | "Following TDD, add tests for..." |
| Review before merge | requesting-code-review | "Review this code before merge..." |

---

## 🎨 Your Complete Toolkit

### Development Workflow (Superpowers)
1. **brainstorming** - Design before coding
2. **writing-plans** - Break into tasks
3. **test-driven-development** - Tests first
4. **subagent-driven-development** - Parallel execution
5. **systematic-debugging** - Fix bugs properly
6. **requesting-code-review** - Quality gates
7. **verification-before-completion** - Confirm it works
8. **using-git-worktrees** - Isolated branches
9. **finishing-a-development-branch** - Merge workflow

### Content Generation (Specialized)
10. **infographic-kids** - Educational infographics
11. **chatgpt-page-generator** - PDF portfolios
12. **ui-ux-pro-max** - Design systems

### Technical Tools
13. **PaddleOCR** - Text extraction
14. **Python utilities** - Automation
15. **Node.js scripts** - Browser automation

---

## 💡 Real-World Scenarios

### Scenario 1: New Feature Request
**User says:** "I need a question extraction system"

**You say:**
```
Using Superpowers workflow, create a question extraction system that:
1. Scans assets/pdf_pages/ folder
2. Uses PaddleOCR to extract questions
3. Identifies question boundaries
4. Extracts formulas and diagrams
5. Saves structured JSON output
6. Includes comprehensive tests

Follow TDD approach.
```

### Scenario 2: Educational Content
**User says:** "Make physics posters for my students"

**You say:**
```
Using Superpowers + /infographic-kids, create an educational 
infographic generation system for SPM Physics.

Generate A4 posters for these topics:
- Forces and Motion
- Energy
- Waves
- Electricity

Target: Form 4-5 students (ages 16-17)
Language: English and Malay versions
Style: Colorful, engaging, scientifically accurate
```

### Scenario 3: Portfolio for Showcase
**User says:** "I need a professional document to show my school"

**You say:**
```
Using Superpowers + /chatgpt-page-generator, create a 12-page 
professional portfolio showcasing my Physics Question Bank project.

Include:
- Cover with school logo (assets/logo_atom_premium.png)
- Project overview
- Technology stack (PaddleOCR, Python, etc.)
- Sample questions with beautiful layout
- Statistics (1000+ questions, 10 topics)
- Future roadmap
- Contact page

Design: Follow /ui-ux-pro-max professional standards
Branding: Blue/purple/teal theme, modern educational style
```

### Scenario 4: Bug Fixing
**User says:** "OCR isn't extracting formulas correctly"

**You say:**
```
Help me debug this systematically using Superpowers systematic-debugging:

Issue: PaddleOCR extracts regular text fine but mathematical 
formulas come out garbled.

Files involved: ocr_utils.py, test_paddleocr.py
Sample input: assets/pdf_pages/pdf_page_2.png (has formulas)
Expected: Properly extracted formula text
Actual: Garbled symbols

Use 4-phase debugging process.
```

---

## 🎓 Learning Path

### Week 1: Master Basic Superpowers
1. Try simple feature with brainstorming
2. Experience writing-plans workflow
3. Practice TDD with small module
4. Get familiar with code reviews

### Week 2: Add Specialized Skills
1. Generate single infographic
2. Create batch infographic system
3. Try chatgpt-page-generator with 3 pages
4. Explore ui-ux-pro-max integration

### Week 3: Combine Everything
1. Full pipeline: PDF → OCR → Infographic
2. Complete portfolio generation
3. Batch processing with error handling
4. Professional deliverable output

---

## 🚨 Troubleshooting

### Issue: Superpowers not triggering
**Solution:**
```
"Figure out what went wrong with superpowers in this session"
```
Use diagnosing-superpowers skill.

### Issue: PaddleOCR slow on first run
**Solution:** First run downloads models (~100MB). Wait patiently.

### Issue: ChatGPT session expired
**Solution:**
```bash
node ~/.gemini/config/skills/chatgpt-page-generator/scripts/login.js
```

### Issue: Not sure which skill to use
**Solution:** Check the Decision Matrix above or ask:
```
"Which skills should I use for [TASK]?"
```

---

## 📚 Documentation Files

All docs in your project directory:

1. **SUPERPOWERS_INSTALLED.md** - Complete Superpowers guide
2. **SUPERPOWERS_QUICK_REFERENCE.md** - Quick reference card
3. **SUPERPOWERS_WITH_SKILLS_EXAMPLES.md** - Integration examples
4. **COMPLETE_SKILLS_REFERENCE.md** - This file
5. **PADDLEOCR_README.md** - OCR documentation

---

## 🎯 Your Next Steps

### Immediate (Try Now!)
```
"Using Superpowers + /infographic-kids, create a colorful A4 
educational infographic about Newton's Laws of Motion for SPM students."
```

### Short Term (This Week)
```
"Using Superpowers workflow, build a complete question extraction 
system using PaddleOCR with tests and error handling."
```

### Long Term (Full Project)
```
"Using Superpowers + all specialized skills, create a comprehensive 
Physics Question Bank Management System with:
- OCR-based question import
- Automated infographic generation
- Professional portfolio output
- Question tagging and search
- Statistics dashboard
- Student progress tracking"
```

---

## 🎉 You're Fully Equipped!

You now have:
- ✅ 15 Superpowers workflow skills
- ✅ 3 specialized domain skills
- ✅ PaddleOCR for text extraction
- ✅ Complete documentation
- ✅ Example prompts for every scenario

**The magic formula:**
```
"Using Superpowers [+ specialized skills], create [WHAT] that [DOES]"
```

**Start building! 🚀**
