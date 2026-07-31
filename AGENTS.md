# AGENTS.md

> **Smart Business Repository — AI Engineering Operating Instructions**
>
> Version: 1.0
> Status: Approved
> Repository: Smart Business
> Organization: Lighthouse Information Publishing Service (LIPS)
> Technology Unit: Team LIPS

---

# Purpose

This document defines how AI coding assistants must operate within the Smart Business repository.

Its purpose is to ensure that every AI assistant produces engineering work that is:

- Safe
- Consistent
- Reviewable
- Evidence-based
- Aligned with the Smart Business governance framework

This file supplements the Engineering Operating System (EOS). It does not replace or modify approved governance.

---

# Repository Identity

**Product**

Smart Business

**Organization**

Lighthouse Information Publishing Service (LIPS)

**Technology Unit**

Team LIPS

**Primary Domain**

smartbusiness.teamlips.com

**Corporate Domain**

teamlips.com

---

# Engineering Philosophy

Every contribution to this repository shall follow these principles:

- Humans serving humans.
- AI Assistant, Not AI Judge.
- Simplicity over unnecessary complexity.
- Trust before automation.
- Incremental improvement over disruptive redesign.
- Existing working systems are respected.
- Engineering exists to improve human decision making.

---

# Authority Order

When instructions conflict, follow this order of precedence:

1. Founder-approved governance
2. Lighthouse Constitution
3. Smart Business Master System Manifesto
4. Engineering Operating System (EOS)
5. Repository instruction files (`AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`)
6. Mission-specific instructions
7. User implementation requests

No lower-level instruction may override a higher-level authority.

---

# Product Boundaries

The following product decisions are locked unless explicitly changed by the Founder.

## Product Domain

- smartbusiness.teamlips.com

## Public Routes

- /
- /how-it-works
- /start
- /contact
- /dashboard (Login)

## Footer

- /contact
- /privacy-policy
- /terms-of-service

## Internal Routes

- /super-admin
- /api/whatsapp-webhook

## Deprecated

- /survey

Use:

- /start

---

# Target Users

Smart Business is built primarily for:

- Bakeries
- Grocery stores
- Mini marts
- Supermarkets
- Restaurants
- Cafés
- Local retail businesses
- Brick-and-mortar merchants in Kerala

---

# Core Product Principles

AI must preserve these principles.

- WhatsApp-first experience
- Voice-first support
- Photo-first data capture
- Text input support
- Human ownership of decisions
- Ask CFO is an advisory feature only
- Permission-based employee access
- Standard POS integration only
- No custom POS modifications inside the core platform

---

# Repository Rules

AI assistants shall:

- Respect the existing folder structure.
- Preserve approved file names.
- Preserve approved document numbering.
- Preserve approved architecture.
- Avoid unnecessary file movement.
- Avoid unnecessary rewrites.
- Make the smallest safe change.

---

# Git Rules

Codex and Claude Code may perform automatic Git operations only when an active Founder or Mission Control mission explicitly authorizes them and identifies:

- AI name;
- Mission ID;
- repository;
- authorized branch;
- authorized file paths or scope;
- approved commit message.

Mission authority grants governance permission only. It does not create shell, filesystem, Git, GitHub, connector, credential, authentication, or repository capability.

Before an authorized commit or push, the AI shall verify the configured remote, current branch, authorized base branch and SHA, clean tree or authorized changes, exact staged paths using `git diff --cached --name-status`, applicable quality gates, `git diff --cached --check`, and staged content for secrets or credentials.

The AI may fetch, pull fast-forward only, create or use the authorized mission branch, stage exact files, commit with the approved message, push the authorized branch, open or update a pull request, and record repository references.

AI-authored implementation work normally uses `mission/[MISSION-ID]-[SHORT-SLUG]`.

AI assistants shall not:

- push directly to `main`, except for a narrowly scoped governance or communication update explicitly authorized by Founder or Mission Control under the active temporary compensating control;
- approve or merge their own work;
- force push or rewrite history;
- delete branches without separate authorization;
- stage unrelated files;
- use `git add .` unless every working-tree change is explicitly authorized;
- resolve conflicts silently;
- bypass Mission Control review;
- alter branch protection;
- expose credentials or secrets.

Authority expires when the authorized stage completes or mission, branch, scope, commit message, repository, authentication, validation, conflict, fast-forward, or working-tree state changes. Resumption requires renewed authorization and state verification.

When Founder action is required, exact Git commands and expected evidence shall be shown directly in chat.

Recurring live communication, closure reconciliation, and archival shall follow `communication/AI_Communication_and_Handover_Protocol.md`.

GitHub branch protection is not configured. The Founder-approved Phase 1 compensating control recorded in `communication/governance/branch-protection-verification.md` is active temporarily and must be retired after branch protection is configured and verified.

Without explicit mission-scoped authority, AI may prepare commands but shall not commit or push.

---

# Coding Standards

AI assistants should:

- Prefer readable code.
- Prefer maintainability.
- Avoid premature optimization.
- Avoid unnecessary abstractions.
- Keep changes focused.
- Follow existing project conventions.

---

# Documentation Standards

Documentation must:

- Be written in Markdown.
- Use clear headings.
- Be readable.
- Be version controlled.
- Preserve approved terminology.
- Avoid duplicated documentation.

---

# Markdown Quality Gate

Before considering documentation complete:

- No trailing whitespace
- Valid Markdown formatting
- Consistent heading hierarchy
- Functional internal links
- Clean formatting

Quality Gate failures must be corrected before completion.

---

# Evidence Before Completion

AI assistants must never claim:

- "Completed"
- "Implemented"
- "Verified"

unless supported by evidence.

Acceptable evidence includes:

- Build output
- Test results
- Repository verification
- Screenshots
- Runtime verification
- User confirmation

---

# Security

Never:

- Expose secrets.
- Invent credentials.
- Hardcode passwords.
- Commit API keys.
- Commit tokens.

Use environment variables where appropriate.

---

# Approval Boundaries

AI assistants may:

- Explain
- Review
- Refactor
- Generate documentation
- Generate implementation plans
- Generate code
- Suggest improvements

AI assistants shall not:

- Change governance
- Approve releases
- Approve production deployments
- Override Founder decisions

without explicit authorization.

---

# Engineering Workflow

Every engineering task should follow this sequence:

1. Understand the mission.
2. Review existing implementation.
3. Minimize changes.
4. Explain proposed work.
5. Implement.
6. Verify.
7. Report evidence.
8. Await further instruction.

---

# Mission Reports

Completion reports should include:

- Mission identifier
- Objective
- Work completed
- Verification performed
- Evidence collected
- Outstanding issues
- Recommended next steps

Avoid vague success statements.

---

# AI Behaviour Expectations

AI assistants should:

- Be concise.
- Be factual.
- Admit uncertainty.
- Prefer evidence over assumptions.
- Ask clarifying questions when necessary.
- Preserve existing architecture unless redesign is explicitly requested.

---

# Prohibited Actions

Do not:

- Invent completed work.
- Claim testing without testing.
- Fabricate logs.
- Fabricate screenshots.
- Fabricate repository state.
- Invent APIs.
- Invent database tables.
- Invent environment variables.
- Invent product features.

---

# Collaboration

When multiple AI assistants are used:

- Maintain a single source of truth.
- Respect repository history.
- Avoid conflicting recommendations.
- Reference approved documentation rather than duplicating it.

---

# Continuous Improvement

Engineering guidance may evolve through approved governance updates.

Repository instruction files should remain lightweight and should not duplicate the Engineering Operating System.

---

# Operating Principle

Every change should leave the repository:

- clearer,
- safer,
- easier to maintain,
- easier to review,
- and closer to delivering value for Smart Business users.

When in doubt, choose the simplest solution that preserves trust, clarity, and maintainability.
