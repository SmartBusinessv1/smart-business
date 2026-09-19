# AGENTS.md

> **Smart Business Repository — AI Engineering Operating Instructions**
>
> Version: 1.0
> Status: Approved
> Repository: Smart Business
> Organization: Lighthouse Information Publishing Service (LIPS)
> Technology Unit: Team LIPS

> **Pending amendment (`SB-GOV-PRODUCT-EXEC-1.0`).** Provisions below that are marked as taking effect on activation are not operative until the amendment is independently verified, merged by a human and separately activated by Mission Control (the post-merge activation and metadata-reconciliation step defined in the Source 18 header). Until then the operative rules are those of this file as it stood at commit `c3ef55fe0cf94f4491cb2ae257b084f90b49b40b`. The pending provisions are the Product Mission intake pointer, the attribution-trailer rule, the work-package authorization and the work-package expiry.

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

Before mission execution, use [`merge/active/README.md`](merge/active/README.md) as the index for the **Smart Business Canonical Project Source Set v1.0**, then read the foundational and mission-relevant canonical sources identified by Mission Control. The durable package and AI operational-source map are recorded in [`docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`](docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md). When Source 18 Version 1.2 is active, for a Product Mission also follow the Source 18 lifecycle (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`): complete the Institutional Learning Intake Record (Section 3.1, covering both the Phase 1 institutional-memory guide and current validated OLE learning) and the mission's Feature Coverage and Product Truth Traceability Matrix (Section 3.2).

For any migration-related work, read [`docs/migration/README.md`](docs/migration/README.md) first. Migration artifacts and SQL under `supabase/migrations/**` are non-executable by default; execution requires a new explicit mission naming the exact package, environment, actor, scope, safeguards, and reporting workflow. Ambiguity requires a stop report.

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
- the branch authorization: either the repository's standard mission-branch convention `mission/[MISSION-ID]-[SHORT-SLUG]` or a specifically locked branch name;
- authorized file paths or scope;
- the commit-message authorization: either permission to use mission-scoped descriptive commit messages or a specifically locked commit message.

Per the Founder Git-authorization decision, Mission Control may explicitly authorize the standard mission-branch convention and mission-scoped descriptive commit messages. Exact branch text and exact commit text are required only when Mission Control specifically locks them. This changes only the authorization form; it does not weaken explicit mission authority, named repository, authorized scope, the protected-`main` pull-request workflow, exact staged-file verification, required quality and security checks, no self-approval, no self-merge, Mission Control review, or human merge authority.

**Taking effect on activation of Communication and Handover Protocol Version 1.1.** Once that version is active, an authorization also identifies the attribution-trailer rule: the standard `Co-Authored-By` trailer is required, permitted or excluded. A Mission Control work-package authorization additionally identifies the work package, the ordered stages or steps it covers, the listed Git operations it permits (and under a work package the AI may perform only those operations), and an end event and an end date, and is otherwise bound by every rule in this section. It grants Git permission only and never authority to approve, lock, authorize, execute, accept, close or merge.

Mission authority grants governance permission only. It does not create shell, filesystem, Git, GitHub, connector, credential, authentication, or repository capability.

Before an authorized commit or push, the AI shall verify the configured remote, current branch, authorized base branch and SHA, clean tree or authorized changes, exact staged paths using `git diff --cached --name-status`, applicable quality gates, `git diff --cached --check`, and staged content for secrets or credentials.

The AI may fetch, pull fast-forward only, create or use the authorized mission branch, stage exact files, commit with the authorized commit message, push the authorized branch, open or update a pull request, and record repository references.

AI-authored implementation work normally uses `mission/[MISSION-ID]-[SHORT-SLUG]`.

AI assistants shall not:

- push directly to protected `main`; all changes must use the authorized pull-request path;
- approve or merge their own work;
- force push or rewrite history;
- delete branches without separate authorization;
- stage unrelated files;
- use `git add .` unless every working-tree change is explicitly authorized;
- resolve conflicts silently;
- bypass Mission Control review;
- alter branch protection;
- expose credentials or secrets.

Authority expires when the authorized stage completes or mission, branch, scope, commit message, repository, authentication, validation, conflict, fast-forward, or working-tree state changes. Resumption requires renewed authorization and state verification. Once Communication and Handover Protocol Version 1.1 is active, work-package authority also expires when its named end event occurs or its end date passes, and a change of the authorized attribution-trailer rule ends the authority.

When Founder action is required, exact Git commands and expected evidence shall be shown directly in chat.

Recurring live communication, closure reconciliation, and archival shall follow `communication/AI_Communication_and_Handover_Protocol.md`.

GitHub branch protection for `main` is configured and independently verified. The temporary Phase 1 compensating control is retired. The active technical controls are recorded in `communication/governance/branch-protection-verification.md`.

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
