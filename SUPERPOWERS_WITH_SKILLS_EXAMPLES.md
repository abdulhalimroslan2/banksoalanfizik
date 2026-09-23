# Superpowers + Specialized Skills Examples

This guide shows how to combine **Superpowers workflow skills** with your specialized **design/generation skills** (`infographic-kids` and `chatgpt-page-generator`).

---

## 🎯 The Power Combination

**Superpowers** provides the workflow structure (brainstorming → planning → TDD → review)  
**Specialized Skills** provide domain expertise (infographic design, PDF generation)

When you combine them, you get:
- ✅ Proper design thinking before generation
- ✅ Structured implementation plans
- ✅ Test-driven development
- ✅ Code reviews
- ✅ Professional output

---

## 📚 Example 1: Creating Educational Infographics with Superpowers

### Prompt:
```
Using Superpowers workflow, let's create a comprehensive educational infographic generation system for my Physics SPM question bank. I want to generate infographics about key physics topics like Forces, Energy, Waves, and Electricity using the /infographic-kids skill.

The system should:
1. Take a physics topic as input
2. Generate a student-friendly A4 infographic
3. Save it with proper naming
4. Create a catalog of all generated infographics
```

### What Will Happen:

**Phase 1: brainstorming**
```
Kiro: Let me understand this better:

1. Topic Coverage:
   - What specific physics topics do you want to prioritize?
   - Should infographics follow SPM syllabus order?
   - Do you need Malay or English versions?

2. Content Structure:
   - Should each infographic cover one concept or multiple related concepts?
   - What level of detail? (Basic/Intermediate/Advanced)
   - Do you want worked examples included?

3. Integration:
   - How should this integrate with your existing question bank?
   - Should it link to specific PDF pages?
   - Do you want batch generation capability?

[Presents design document for approval]
```

**Phase 2: writing-plans**
```
Kiro: Implementation Plan (Estimated: 25 minutes)

Task 1: Create physics topic metadata module (3 min)
- File: physics_topics.py
- Define SPM physics topic structure
- Map topics to infographic requirements

Task 2: Build infographic prompt generator (4 min)
- File: infographic_generator.py
- Use /infographic-kids skill template
- Customize for physics topics
- Add Malay/English support

Task 3: Implement topic-to-infographic pipeline (5 min)
- File: generate_physics_infographic.py
- Input: topic name
- Output: A4 infographic PNG
- Error handling for missing topics

Task 4: Create infographic catalog system (4 min)
- File: infographic_catalog.py
- Track all generated infographics
- JSON index with topics, files, dates

Task 5: Add batch generation script (4 min)
- File: batch_generate_infographics.py
- Generate multiple topics
- Progress tracking

Task 6: Write comprehensive tests (5 min)
- File: test_infographic_system.py
- Test topic parsing
- Test prompt generation
- Test catalog indexing
```

**Phase 3: test-driven-development + subagent-driven-development**
```
Kiro: [For each task]
1. Write failing test (RED)
2. Implement minimal code (GREEN)
3. Refactor
4. Review code quality
5. Move to next task
```

**Phase 4: verification-before-completion**
```
Kiro: Running final verification...

✓ All tests pass
✓ Sample infographic generated successfully
✓ Catalog system working
✓ Batch generation tested with 3 topics
✓ Documentation complete

Ready to merge!
```

---

## 🎨 Example 2: Building a PDF Portfolio Generator with Superpowers

### Prompt:
```
Using Superpowers methodology, design and implement a PDF portfolio generator for my Physics project using /chatgpt-page-generator. 

The system should:
1. Generate multi-page portfolios showcasing the question bank
2. Include cover page, about section, sample questions, and statistics
3. Use PaddleOCR to extract sample questions from existing PDFs
4. Follow professional design standards with UI/UX Pro Max integration
5. Output print-ready A4 PDFs
```

### What Will Happen:

**Phase 1: brainstorming**
```
Kiro: Let's explore this portfolio system:

1. Content Structure:
   - What sections should the portfolio have?
   - How many sample questions per topic?
   - Should it include student progress/analytics?

2. Design & Branding:
   - What's your school/institution branding?
   - Do you have logo and color scheme?
   - Preferred layout style? (Modern/Classic/Academic)

3. Integration Points:
   - Which existing PDFs should we extract samples from?
   - Should it auto-update when questions are added?
   - Export format? (PDF/Web/Both)

4. Technical Constraints:
   - ChatGPT session available?
   - Have reference images for logos/gates?
   - Storage location for generated portfolios?

[Creates design document with mockups]
```

**Phase 2: writing-plans**
```
Kiro: Implementation Plan (Estimated: 35 minutes)

Task 1: Set up ChatGPT session management (4 min)
- File: chatgpt_session_manager.py
- Verify login.js works
- Handle session persistence

Task 2: Create portfolio data collector (5 min)
- File: portfolio_data_collector.py
- Extract question bank statistics
- Use PaddleOCR for sample questions
- Aggregate topic coverage

Task 3: Build UI/UX Pro Max design extractor (4 min)
- File: design_system_generator.py
- Query ui-ux-pro-max for palette
- Generate consistent styling
- Lock color schemes

Task 4: Implement page manifest builder (6 min)
- File: portfolio_manifest_builder.py
- Generate manifest.json structure
- Map content to pages
- Include reference images

Task 5: Create prompt generator per page (6 min)
- File: portfolio_prompt_generator.py
- Cover page prompt
- About section prompt
- Sample questions prompt
- Statistics page prompt

Task 6: Integrate with chatgpt-page-generator (5 min)
- File: portfolio_generator.py
- Execute generate.js via subprocess
- Handle multi-page generation
- Monitor progress

Task 7: Add PDF compilation and cleanup (3 min)
- File: pdf_finalizer.py
- Compile pages with PyMuPDF
- Add metadata
- Save to output directory

Task 8: Write comprehensive tests (5 min)
- File: test_portfolio_system.py
- Test each component
- Integration tests
- Mock ChatGPT calls
```

**Phase 3: using-git-worktrees**
```
Kiro: This is a substantial feature. Let me create an isolated branch:

Creating git worktree: portfolio-generator
Branch: feature/portfolio-generator
Path: ../FIZIK_SPM_HUB_PROJEK_portfolio-generator/

Workspace is ready!
```

**Phase 4: subagent-driven-development with TDD**
```
Kiro: Launching subagents for parallel execution...

Subagent 1: Tasks 1-3 (Session + Data + Design)
Subagent 2: Tasks 4-5 (Manifest + Prompts)
Subagent 3: Tasks 6-7 (Generation + PDF)

Each subagent follows TDD cycle:
- Write tests first
- Implement code
- Review and refactor
```

**Phase 5: requesting-code-review**
```
Kiro: Code review complete:

✓ All tests passing (28 tests, 0 failures)
✓ ChatGPT session handling robust
✓ OCR integration working
✓ Design system consistent
✓ PDF output verified
✓ Error handling comprehensive

Minor improvements suggested:
- Add retry logic for ChatGPT timeouts
- Cache design system queries
- Add progress bar for batch generation

Critical issues: None
Ready to merge!
```

**Phase 6: finishing-a-development-branch**
```
Kiro: Feature complete! Options:

1. Merge to main (recommended)
2. Create pull request for review
3. Keep branch for more testing
4. Discard (not recommended - work is good!)

What would you like to do?
```

---

## 🚀 Example 3: Quick Infographic Generation with Structure

### Prompt:
```
Create a single educational infographic about "Newton's Laws of Motion" for SPM Physics students using /infographic-kids. Follow Superpowers workflow but keep it lean since it's a single output.
```

### What Will Happen:

**Phase 1: brainstorming (brief)**
```
Kiro: Quick design check:

1. Content Level: SPM-appropriate (ages 17)?
2. Language: English or Malay?
3. Focus: All 3 laws equally or emphasize one?
4. Examples: Real-world or physics lab scenarios?

[Gets quick approval]
```

**Phase 2: writing-plans (compact)**
```
Kiro: Mini Plan (10 minutes):

Task 1: Prepare infographic content (3 min)
- Research SPM Newton's Laws requirements
- Structure: Intro → Law 1 → Law 2 → Law 3 → Examples

Task 2: Generate infographic prompt (2 min)
- Use /infographic-kids template
- Customize for Newton's Laws
- Ensure A4 portrait, Malay support

Task 3: Execute generation (4 min)
- Invoke skill with formatted prompt
- Save to assets/infographics/
- Verify output quality

Task 4: Quick test (1 min)
- Verify file exists
- Check resolution
- Confirm readability
```

**Phase 3: test-driven-development**
```
Kiro: Writing quick validation test...

Test: Verify infographic generated correctly
- File exists at expected path
- Resolution >= 2480×3508px
- File size reasonable (not corrupted)

[Implements generation]

✓ Test passes!
```

**Phase 4: verification-before-completion**
```
Kiro: Verification:

✓ Infographic generated successfully
✓ File: assets/infographics/newtons_laws_of_motion.png
✓ Resolution: 2480×3508px (A4 portrait)
✓ Content verified: All 3 laws present with examples
✓ Language: English (SPM-appropriate)

Opening file for your review...
```

---

## 🎯 Example 4: Batch Generation with Progress Tracking

### Prompt:
```
Using Superpowers workflow, create a batch generator that produces educational infographics for all major SPM Physics topics using /infographic-kids. Track progress and handle errors gracefully.
```

### Expected Output:

**brainstorming** → Discusses topics, error handling, progress UI  
**writing-plans** → Creates 6 tasks with TDD approach  
**test-driven-development** → Tests before implementation  
**subagent-driven-development** → Parallel execution of tasks  
**systematic-debugging** (if needed) → Handles any generation failures  
**verification-before-completion** → Confirms all infographics generated  

Result: Professional batch generation system with tests, error handling, and progress tracking!

---

## 💡 Key Patterns

### Pattern 1: Always Start with Brainstorming
```
"Using Superpowers, create [X] with /[skill]"
```
This triggers brainstorming BEFORE jumping to generation.

### Pattern 2: Specify Integration Points
```
"Using Superpowers workflow, integrate /infographic-kids with our OCR system"
```
This ensures proper planning of how systems connect.

### Pattern 3: Request TDD Explicitly
```
"Following Superpowers TDD approach, build [X]"
```
This enforces test-first development.

### Pattern 4: Use Git Worktrees for Big Features
```
"Using Superpowers, create a complete [system] in an isolated branch"
```
This triggers using-git-worktrees skill.

---

## 🎨 Example 5: Full Portfolio with Review Cycles

### Prompt:
```
I want to create a comprehensive Physics SPM Question Bank Portfolio using Superpowers + /chatgpt-page-generator. This is a major deliverable, so let's:

1. Brainstorm the complete structure
2. Design with UI/UX Pro Max integration
3. Plan implementation with TDD
4. Execute in isolated git worktree
5. Review thoroughly before finalizing
6. Generate 10-page portfolio with:
   - Cover page with school logo
   - Introduction & mission
   - Physics topics overview
   - Sample questions (with OCR extraction)
   - Student testimonials section
   - Statistics & achievements
   - Technology stack showcase
   - Future roadmap
   - Contact & credits
   - Back cover

Use reference images for school branding and follow professional design standards.
```

### This Will Trigger:
✅ **brainstorming** - Full design session  
✅ **using-git-worktrees** - Isolated branch  
✅ **writing-plans** - Detailed 20+ task breakdown  
✅ **subagent-driven-development** - Parallel execution  
✅ **test-driven-development** - Tests for each component  
✅ **requesting-code-review** - Quality gates  
✅ **verification-before-completion** - Final validation  
✅ **finishing-a-development-branch** - Merge workflow  

---

## 🚨 Common Mistakes to Avoid

### ❌ DON'T: Skip Straight to Generation
```
Bad: "Generate physics infographic about forces"
```
This skips brainstorming and planning!

### ✅ DO: Use Superpowers Workflow
```
Good: "Using Superpowers, create physics infographics system with /infographic-kids"
```

---

### ❌ DON'T: Ignore Test Requirements
```
Bad: "Just make it work, don't worry about tests"
```
This violates TDD principles!

### ✅ DO: Follow TDD
```
Good: "Following Superpowers TDD approach, ensure all generation code is tested"
```

---

### ❌ DON'T: Work Without Design
```
Bad: "Start coding the PDF generator now"
```
This skips brainstorming!

### ✅ DO: Design First
```
Good: "Let's brainstorm the PDF portfolio structure before implementation"
```

---

## 🎓 Summary

**When to combine Superpowers + Specialized Skills:**
- Building complete systems (not one-off generations)
- Need structure and testing
- Want code reviews
- Working on production features
- Collaborating with others
- Need documentation

**The Magic Formula:**
```
"Using Superpowers workflow/methodology, create [SYSTEM] with /[specialized-skill]"
```

This gives you:
- 🎨 Professional design thinking
- 📋 Clear implementation plan
- 🧪 Test-driven development
- 👀 Automatic code reviews
- ✅ Verified results
- 🌳 Proper git workflow

---

**Try it now!** Pick any example above and watch Superpowers structure your entire development process! 🚀
