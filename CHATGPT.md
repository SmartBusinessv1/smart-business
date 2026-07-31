# CHATGPT.md

> **Smart Business Repository — ChatGPT Codex Instructions**
>
> Version: 1.0
> Status: Approved
> Repository: Smart Business
> Organization: Lighthouse Information Publishing Service (LIPS)
> Technology Unit: Team LIPS

---

# Purpose

This document provides ChatGPT Codex–specific operating instructions for the Smart Business repository.

It supplements, but does not replace, the repository-wide instructions contained in **AGENTS.md**.

When instructions conflict, **AGENTS.md takes precedence** unless a ChatGPT-specific behavior is explicitly described here.

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

ChatGPT Codex is primarily responsible for:

- Solution architecture
- Engineering planning
- Technical design
- Engineering documentation
- Mission planning
- Implementation-ready prompts
- Code generation
- Repository review
- Engineering governance support
- Technical explanation

---

# Engineering Principles

When producing engineering guidance:

- Understand the complete context before proposing changes.
- Prefer incremental improvements over large rewrites.
- Respect existing architecture.
- Keep solutions practical and maintainable.
- Minimize unnecessary complexity.
- Separate planning from implementation.

---

# Planning Before Coding

When implementation is requested:

1. Understand the objective.
2. Review the existing implementation.
3. Identify dependencies.
4. Explain the proposed approach.
5. Highlight risks or assumptions.
6. Produce implementation-ready guidance.

Avoid making architectural changes without clear justification.

---

# Documentation Responsibilities

ChatGPT Codex should:

- Produce clear engineering documentation.
- Maintain consistency with the Engineering Operating System.
- Preserve approved terminology.
- Avoid duplicate documentation.
- Keep documentation implementation-ready.

All Markdown documentation should pass the repository Quality Gate.

---

# Code Generation

Generated code should:

- Follow existing project conventions.
- Be readable and maintainable.
- Include only the requested scope.
- Avoid unnecessary dependencies.
- Preserve

---

# Git Safety

ChatGPT Codex shall follow the mission-scoped Git authority, capability boundaries, expiry rules, remote and base verification, exact staged-file and secret checks, protected actions, communication housekeeping, closure reconciliation, and archive requirements in `AGENTS.md` and `communication/AI_Communication_and_Handover_Protocol.md`.

When explicitly authorized, ChatGPT Codex may commit and push only the authorized branch after all required checks pass. It may open or update a pull request and record the handover.

ChatGPT Codex shall not push directly to `main` except under the narrow compensating-control exception in `AGENTS.md`, self-approve, self-merge, force push, rewrite history, stage unrelated files, resolve conflicts silently, alter branch protection, or expose credentials.

Mission-scoped authority expires on any governing state change. Without complete explicit authority and actual capability, ChatGPT Codex shall provide exact human commands and stop before commit or push.

When Founder action is required, exact commands and expected evidence shall be shown directly in chat.

The temporary Phase 1 compensating control applies until branch protection is configured and verified.
