# Superpowers for Kiro - Installation Complete ✅

## 🎉 Installation Status
Superpowers has been successfully installed in your Kiro environment!

**Installation Date**: 2026-09-22  
**Location**: `~/.kiro/skills/`  
**Skills Installed**: 15 professional development skills

## 📦 Installed Skills

### 🎨 Design & Planning
- **brainstorming** - Socratic design refinement before coding
- **writing-plans** - Detailed implementation plans with 2-5 minute tasks

### 🧪 Testing & Quality
- **test-driven-development** - RED-GREEN-REFACTOR cycle enforcement
- **verification-before-completion** - Ensure fixes actually work

### 🐛 Debugging
- **systematic-debugging** - 4-phase root cause analysis process
- **diagnosing-superpowers** - Troubleshoot Superpowers sessions

### 👥 Collaboration & Review
- **requesting-code-review** - Pre-merge quality gates
- **receiving-code-review** - Responding to feedback systematically
- **dispatching-parallel-agents** - Concurrent subagent workflows
- **subagent-driven-development** - Fast iteration with reviews

### 🔧 Git Workflow
- **using-git-worktrees** - Parallel development branches
- **finishing-a-development-branch** - Merge/PR decision workflow

### 📋 Execution
- **executing-plans** - Inline plan execution in current session

### 📚 Meta
- **writing-skills** - Create new skills following best practices
- **using-superpowers** - Introduction to the skills system

## 🚀 How Skills Work

Skills **auto-trigger** based on context. You don't need to manually invoke them - Kiro will activate the appropriate skill when needed.

### Example Workflow

```
You: "Let's build a question bank search feature"

Kiro: [brainstorming skill activates automatically]
      - Asks clarifying questions
      - Explores alternatives
      - Presents design for approval
      
You: "Looks good, let's implement it"

Kiro: [writing-plans skill activates]
      - Breaks work into 2-5 minute tasks
      - Shows complete implementation plan
      
You: "Go ahead"

Kiro: [subagent-driven-development or executing-plans activates]
      - Implements each task
      - Enforces TDD for every change
      - Reviews work automatically
      
Kiro: [finishing-a-development-branch activates]
      - Verifies tests pass
      - Offers merge/PR options
```

## 🎯 When Skills Trigger

| Skill | Triggers When |
|-------|--------------|
| **brainstorming** | You ask to build/create something new |
| **writing-plans** | Design is approved and ready for implementation |
| **test-driven-development** | Writing or modifying code |
| **systematic-debugging** | Encountering bugs or test failures |
| **requesting-code-review** | Completing tasks or features |
| **using-git-worktrees** | Starting feature work that needs isolation |
| **finishing-a-development-branch** | All tasks in a branch complete |

## 💡 Key Principles

### YAGNI (You Aren't Gonna Need It)
- Build only what's needed now
- No speculative features

### DRY (Don't Repeat Yourself)
- Avoid code duplication
- Extract common patterns

### TDD (Test-Driven Development)
1. Write a failing test (RED)
2. Watch it fail
3. Write minimal code to pass (GREEN)
4. Watch it pass
5. Refactor if needed
6. Commit

### Evidence Over Claims
- Verify before declaring success
- Run tests to confirm fixes
- Don't assume - check

## 🔍 Checking If Skills Are Active

To see available skills at any time, just ask:
```
Show me available Superpowers skills
```

Or check manually:
```bash
ls ~/.kiro/skills/
```

## 🛠️ Using Superpowers in Your Physics Project

### Example 1: Building a New Feature
```
You: "I want to add OCR-based question extraction from PDFs"

Kiro: [brainstorming activates]
      → Asks about PDF formats, question types, output format
      → Proposes architecture
      → Gets your approval

Kiro: [writing-plans activates]
      → Task 1: Set up PDF page extractor
      → Task 2: Integrate PaddleOCR
      → Task 3: Parse question structure
      → Task 4: Add validation
      → Task 5: Write integration tests

Kiro: [executes with TDD]
      → Writes tests first
      → Implements each task
      → Reviews automatically
```

### Example 2: Debugging Issues
```
You: "The OCR is not extracting formulas correctly"

Kiro: [systematic-debugging activates]
      → Phase 1: Reproduce the issue
      → Phase 2: Isolate the cause
      → Phase 3: Root cause analysis
      → Phase 4: Fix and verify

Kiro: [verification-before-completion activates]
      → Runs tests to confirm fix
      → Verifies edge cases
```

### Example 3: Code Review
```
You: "I've finished the question parsing module"

Kiro: [requesting-code-review activates]
      → Checks against implementation plan
      → Verifies test coverage
      → Reviews code quality
      → Reports issues by severity
```

## 🐛 Troubleshooting

### If a skill doesn't trigger when expected:
```
"Figure out what went wrong with superpowers in this session"
```

The `diagnosing-superpowers` skill will:
- Read the session transcript
- Report what happened with evidence
- Help you file a bug report if needed

### To manually activate a skill:
While skills auto-trigger, you can explicitly request them:
```
"Use the brainstorming skill to help me design this feature"
```

## 📖 Skill Descriptions

### brainstorming
Activates when you want to build something new. Instead of jumping into code, it:
- Asks Socratic questions to understand requirements
- Explores alternatives and tradeoffs
- Presents design in digestible chunks
- Saves a design document for reference

### writing-plans
Activates after design approval. Creates:
- Bite-sized tasks (2-5 minutes each)
- Exact file paths and code snippets
- Verification steps for each task
- Clear acceptance criteria

### test-driven-development
Activates during implementation. Enforces:
- Write test FIRST (it should fail)
- Watch it fail (RED)
- Write minimal code to pass
- Watch it pass (GREEN)
- Refactor if needed
- Commit
- **Deletes code written before tests!**

### systematic-debugging
Activates when facing bugs. Uses:
- Root cause tracing
- Defense-in-depth analysis
- Condition-based waiting
- 4-phase process: reproduce → isolate → analyze → fix

### subagent-driven-development
Activates with an implementation plan:
- Launches fresh subagent per task
- Reviews each task completion
- Two-stage review: spec compliance, then code quality
- Most thorough option for complex features

### executing-plans
Alternative to subagent-driven:
- Implements tasks inline in current session
- One final review at the end
- Cheapest token-wise
- Good for simpler features

### requesting-code-review
Activates between tasks or at completion:
- Reviews against the plan
- Checks test coverage
- Reports issues by severity (critical blocks progress)
- Pre-merge quality gate

### receiving-code-review
Activates when you receive feedback:
- Helps respond systematically
- Verifies feedback is technically sound
- Requires rigor, not blind implementation

### using-git-worktrees
Activates when starting feature work:
- Creates isolated workspace
- New branch for your work
- Runs project setup
- Verifies clean test baseline

### finishing-a-development-branch
Activates when tasks complete:
- Runs full test suite
- Presents options: merge, PR, keep, discard
- Cleans up worktree
- Completes the workflow

### verification-before-completion
Activates before claiming work is done:
- Runs verification commands
- Confirms actual output
- Evidence before assertions
- No success claims without proof

### diagnosing-superpowers
Activates when things go wrong:
- Reads session transcript
- Reports with line-level evidence
- Identifies what triggered/didn't trigger
- Packages scrubbed bug report

### writing-skills
Activates when creating new skills:
- Follows best practices
- Includes testing methodology
- Ensures compatibility across harnesses

### using-superpowers
Bootstrap skill that explains the system:
- How skills work
- When they trigger
- How to work with them

## 🎓 Best Practices

1. **Let skills guide you** - Don't fight the workflow
2. **Answer brainstorming questions thoroughly** - Better design = better code
3. **Review plans before execution** - Catch issues early
4. **Trust the TDD cycle** - Tests first, always
5. **Let reviews happen** - Quality gates prevent bugs
6. **Use git worktrees** - Keep work isolated

## 📊 Expected Behavior

### What's Normal:
- Skills trigger automatically based on context
- Multiple questions during brainstorming
- Detailed plans before implementation
- Tests written before code
- Code reviews between tasks
- Git workflow enforcement

### What's Not Normal:
- No brainstorming before coding
- Code written without tests
- Skipping reviews
- Working directly on main branch

If you see unusual behavior, use `diagnosing-superpowers`.

## 🔗 Resources

- **GitHub**: https://github.com/obra/superpowers
- **Discord**: https://discord.gg/35wsABTejz
- **Issues**: https://github.com/obra/superpowers/issues
- **Release Announcements**: https://primeradiant.com/superpowers/

## 🎉 You're Ready!

Superpowers is now active in your Kiro environment. The next time you ask Kiro to build something, you'll see the structured workflow in action.

**Try it out:**
```
"Let's create a function to batch process PDFs with OCR"
```

Watch as Kiro:
1. Asks clarifying questions (brainstorming)
2. Presents a design
3. Creates an implementation plan
4. Executes with TDD
5. Reviews the work
6. Helps you merge

---

**Happy coding with Superpowers! 🚀**
