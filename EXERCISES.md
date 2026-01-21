# Git/GitHub Practice Exercises

Follow these exercises in order to practice real tech company workflows.

---

## Setup (Do Once)

```bash
# 1. Initialize git repository
git init

# 2. Make your first commit
git add .
git commit -m "chore: initial project setup"

# 3. Create repository on GitHub (github.com/new)
#    Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/git-practice-project.git
git branch -M main
git push -u origin main
```

---

## Exercise 1: Feature Branch Workflow

**Goal:** Add a new `power` function using proper workflow.

```bash
# 1. Make sure you're on main and up to date
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/add-power-function

# 3. Edit calculator.js - Add this function:
#    function power(base, exponent) {
#      return Math.pow(base, exponent);
#    }
#    Don't forget to export it!

# 4. Add a test in calculator.test.js

# 5. Stage and commit
git add .
git commit -m "feat: add power function"

# 6. Push branch to GitHub
git push -u origin feature/add-power-function

# 7. Go to GitHub and create a Pull Request
#    Watch the CI/CD pipeline run!

# 8. After review/merge, clean up:
git checkout main
git pull origin main
git branch -d feature/add-power-function
```

---

## Exercise 2: Fix a Bug

**Goal:** Practice the bugfix workflow.

```bash
# 1. Create bugfix branch
git checkout main
git pull
git checkout -b bugfix/improve-divide-error

# 2. Improve the divide function error handling
#    Add check for non-numeric inputs

# 3. Add tests for the new validation

# 4. Commit with proper message
git add .
git commit -m "fix: add input validation to divide function"

# 5. Push and create PR
git push -u origin bugfix/improve-divide-error
```

---

## Exercise 3: Handle Merge Conflict

**Goal:** Learn to resolve conflicts.

```bash
# 1. Create two branches from main
git checkout main
git checkout -b feature/modify-add-v1

# 2. Modify the add function, commit, push

# 3. Go back and create another branch
git checkout main
git checkout -b feature/modify-add-v2

# 4. Modify the SAME line differently, commit, push

# 5. Merge v1 to main first (via PR)

# 6. Try to merge v2 - you'll get a conflict!
#    Resolve it locally:
git checkout feature/modify-add-v2
git merge main
# Fix conflicts in the file
git add .
git commit -m "fix: resolve merge conflict"
git push
```

---

## Exercise 4: Interactive Rebase (Advanced)

**Goal:** Clean up commit history before PR.

```bash
# 1. Create a branch and make 3 messy commits
git checkout -b feature/messy-commits
# make change, commit "wip"
# make change, commit "fix typo"
# make change, commit "actually working now"

# 2. Squash into one clean commit
git rebase -i HEAD~3
# Change 'pick' to 'squash' for commits 2 and 3
# Write a clean commit message

# 3. Force push (only OK on feature branches!)
git push -f origin feature/messy-commits
```

---

## Exercise 5: Hotfix

**Goal:** Practice emergency production fix.

```bash
# 1. Create hotfix from main
git checkout main
git pull
git checkout -b hotfix/critical-security-fix

# 2. Make the fix
# 3. Commit
git commit -m "fix: patch security vulnerability"

# 4. Push and create PR marked as urgent
git push -u origin hotfix/critical-security-fix

# Hotfixes get priority review and fast-tracked merge
```

---

## Exercise 6: Code Review Practice

When reviewing PRs, check:

- [ ] Does the code work?
- [ ] Are there tests?
- [ ] Does CI/CD pass?
- [ ] Is the code readable?
- [ ] Are there security issues?
- [ ] Does it follow project conventions?

**Review Comments:**
- Use "suggestion" for improvements
- Use "question" for clarification
- Use "issue" for problems that must be fixed

---

## Common Commands Cheatsheet

```bash
# Status and info
git status              # Current state
git log --oneline -10   # Recent commits
git diff                # Unstaged changes
git diff --staged       # Staged changes

# Branching
git branch -a           # All branches
git checkout -b name    # Create + switch
git branch -d name      # Delete branch

# Syncing
git fetch               # Download without merge
git pull                # Download and merge
git push                # Upload

# Undo
git checkout -- file    # Discard changes
git reset HEAD file     # Unstage file
git reset --soft HEAD~1 # Undo last commit (keep changes)
git reset --hard HEAD~1 # Undo last commit (discard changes)

# Stash (save work temporarily)
git stash               # Save changes
git stash pop           # Restore changes
git stash list          # Show stashes
```

---

## CI/CD Pipeline Explanation

When you push or create a PR, GitHub Actions runs:

1. **Lint** - Checks code style (eslint)
2. **Test** - Runs all tests (jest)
3. **Build** - Verifies app runs
4. **Deploy** - Only on main branch merge

Check `.github/workflows/ci.yml` to see how it works!
