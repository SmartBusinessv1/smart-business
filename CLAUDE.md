# CLAUDE.md

> **Smart Business Repository — Claude Code Instructions**
>
> Version: 1.0
> Status: Approved
> Repository: Smart Business
> Organization: Lighthouse Information Publishing Service (LIPS)
> Technology Unit: Team LIPS

---

# Purpose

This document provides Claude Code–specific operating instructions for the Smart Business repository.

It supplements, but does not replace, the repository-wide instructions contained in **AGENTS.md**.

When instructions conflict, **AGENTS.md takes precedence** unless a Claude-specific behavior is explicitly described here.

---

# Repository Reference

Before performing any engineering task, read and follow:

1. `AGENTS.md`
2. Mission instructions
3. Relevant Engineering Operating System (EOS) documentation
4. Repository code and documentation

Do not duplicate repository rules contained in `AGENTS.md`.

---

# Primary Responsibilities

Claude Code is primarily responsible for:

- Feature implementation
- Code modification
- Repository analysis
- Refactoring
- Architecture validation
- Bug fixing
- Engineering review
- Code quality improvement
- Test implementation where authorized

---

# Engineering Principles

When implementing changes:

- Make the smallest safe change.
- Preserve existing architecture unless redesign is explicitly requested.
- Prefer readability over cleverness.
- Avoid unnecessary abstraction.
- Respect existing naming conventions.
- Preserve backwards compatibility whenever practical.

---

# Repository Workflow

Before writing code:

1. Understand the request.
2. Inspect existing implementation.
3. Identify the minimum required change.
4. Explain the proposed approach when appropriate.

After implementation:

1. Verify changes.
2. Report modified files.
3. Report assumptions.
4. Report any remaining risks.

---

# Code Changes

Claude Code should:

- Modify existing files when appropriate.
- Avoid creating unnecessary files.
- Preserve project structure.
- Keep commits logically grouped when commit preparation is requested.

Claude Code should not:

- Rewrite large working sections without justification.
- Introduce new frameworks without approval.
- Rename approved repository structures.
- Remove existing functionality unless requested.

---

# Documentation

When documentation is modified:

- Follow repository Markdown standards.
- Preserve heading hierarchy.
- Keep documentation synchronized with implementation.
- Ensure documentation passes the Markdown Quality Gate.

---

# Verification

Do not state that work is complete unless supported by evidence.

Evidence may include:

- Successful build output
- Test results
- Runtime verification
- Repository inspection
- User confirmation

---

# Git Safety

Claude Code shall never:

- Commit automatically.
- Push automatically.
- Merge automatically.
- Rewrite Git history.
- Delete branches automatically.

Git commands may be suggested but require user approval.

---

# Security

Never:

- Expose secrets.
- Invent credentials.
- Commit API keys.
- Commit access tokens.
- Store sensitive values in source code.

Use existing environment variable patterns.

---

# Communication Style

Responses should be:

- Clear
- Concise
- Technically accurate
- Evidence-based

When uncertain:

- State assumptions clearly.
- Ask for clarification if required.
- Avoid speculation.

---

# Mission Reporting

Implementation reports should include:

- Objective
- Files modified
- Verification performed
- Outstanding issues
- Recommended next steps

Avoid generic completion statements.

---

# Collaboration

Claude Code operates alongside other AI assistants.

Maintain consistency by:

- Following `AGENTS.md`
- Respecting approved governance
- Avoiding conflicting architectural recommendations
- Preserving repository history

---

# Operating Principle

Implement carefully.

Change only what is necessary.

Leave the repository more maintainable than it was before the task began.

When in doubt, prioritize clarity, safety, and long-term maintainability over speed.
