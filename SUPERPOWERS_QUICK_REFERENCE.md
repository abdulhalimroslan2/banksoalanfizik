# Superpowers Quick Reference Card

## ✅ Installation Complete
All 15 Superpowers skills are now active in your Kiro environment!

---

## 🎯 The Golden Rule
**Skills auto-trigger when relevant. You don't need to do anything special.**

---

## 🔄 The Basic Workflow

```
1. "Let's build X" 
   ↓
   brainstorming → Asks questions, designs solution
   
2. "Looks good" 
   ↓
   writing-plans → Creates 2-5 min tasks
   
3. "Go ahead"
   ↓
   subagent-driven-development → Executes with TDD
   
4. [Automatic]
   ↓
   requesting-code-review → Quality check
   
5. [Automatic]
   ↓
   finishing-a-development-branch → Merge/PR options
```

---

## 📋 Quick Skill Reference

| Skill | When It Fires | What It Does |
|-------|--------------|--------------|
| 🎨 **brainstorming** | You want to build something | Asks questions, explores alternatives, creates design |
| 📝 **writing-plans** | Design approved | Breaks work into tiny tasks (2-5 min) |
| 🧪 **test-driven-development** | Writing code | Forces RED→GREEN→REFACTOR cycle |
| 🐛 **systematic-debugging** | Bug or failure | 4-phase root cause analysis |
| ✅ **verification-before-completion** | Claiming "done" | Verifies it actually works |
| 👀 **requesting-code-review** | Feature complete | Reviews against plan |
| 💬 **receiving-code-review** | Getting feedback | Responds systematically |
| 🌳 **using-git-worktrees** | Starting feature work | Isolated branch |
| 🏁 **finishing-a-development-branch** | All tasks done | Merge/PR workflow |
| 🚀 **subagent-driven-development** | Executing plan | Parallel subagents with reviews |
| 📋 **executing-plans** | Executing plan | Inline execution (cheaper) |
| 🤝 **dispatching-parallel-agents** | Concurrent work | Parallel workflows |
| 🔍 **diagnosing-superpowers** | Something's wrong | Troubleshoot the session |
| ✍️ **writing-skills** | Creating new skills | Best practices guide |
| 📖 **using-superpowers** | New session | Introduces the system |

---

## 💪 Core Principles

### YAGNI
**You Aren't Gonna Need It**  
Only build what you need right now.

### DRY  
**Don't Repeat Yourself**  
Avoid duplication, extract patterns.

### TDD
**Test-Driven Development**  
1. Write failing test (RED)
2. Write minimal code (GREEN)
3. Refactor
4. Commit

### Evidence Over Claims
Run tests. Verify. Don't assume.

---

## 🎬 Example Sessions

### Building a Feature
```
You: Create a PDF question extractor

Kiro: [brainstorming]
      What format are PDFs?
      What defines a "question"?
      How should questions be stored?
      
You: [answer questions]

Kiro: Here's the design...
      [presents in sections]
      
You: Approved

Kiro: [writing-plans]
      Task 1: PDF page extraction (3 min)
      Task 2: OCR integration (4 min)
      Task 3: Question parser (5 min)
      Task 4: Validation (2 min)
      Task 5: Tests (4 min)
      
You: Go ahead

Kiro: [subagent-driven-development]
      [Creates tests]
      [Implements code]
      [Reviews each task]
      
Kiro: [requesting-code-review]
      All tasks complete ✓
      Tests passing ✓
      Ready to merge
```

### Debugging
```
You: OCR isn't extracting formulas

Kiro: [systematic-debugging]
      Phase 1: Reproducing...
      Phase 2: Isolating...
      Phase 3: Root cause: encoding issue
      Phase 4: Fix + verify
      
Kiro: [verification-before-completion]
      Running tests...
      ✓ All tests pass
      ✓ Formulas extracted correctly
```

---

## 🚨 Troubleshooting

### Skill didn't trigger?
```
"Figure out what went wrong with superpowers in this session"
```

### Want to manually activate?
```
"Use the brainstorming skill to design this"
```

### Check active skills?
```bash
ls ~/.kiro/skills/
```

---

## 🎯 Try It Now!

**Simple test:**
```
"Let's add a function to batch process images with OCR"
```

Watch Kiro:
1. Ask clarifying questions (brainstorming)
2. Present a design
3. Create implementation plan
4. Execute with TDD
5. Review automatically

---

## 📊 What to Expect

### ✅ Normal Behavior
- Many questions during brainstorming
- Detailed plans before coding
- Tests written BEFORE code
- Automatic code reviews
- Git workflow enforcement

### ❌ Red Flags
- Jumping straight to code
- No tests
- No planning
- Working on main branch

---

## 🔗 Get Help

- **Documentation**: `SUPERPOWERS_INSTALLED.md`
- **Discord**: https://discord.gg/35wsABTejz
- **GitHub**: https://github.com/obra/superpowers
- **Issues**: File bugs at GitHub Issues

---

## 🎓 Remember

1. **Let skills guide you** - Don't fight the workflow
2. **Answer questions thoroughly** - Better design up front
3. **Trust TDD** - Tests catch bugs early
4. **Use git worktrees** - Keep work isolated
5. **Review before merge** - Quality gates work

---

**Superpowers is now active! 🚀**

Start your next feature with:
```
"Let's build [your feature]"
```

And watch the magic happen! ✨
