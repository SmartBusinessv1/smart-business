# SMART BUSINESS MISSION CONTROL

# Instruction 1.26 — SB-P-1.11 Verification Checklist Version 1.1 Acceptance and Lock

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Stage 12C — Verification Checklist Acceptance and Lock

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

**Date:** 2026-08-05

---

## 1. Mission Objective

Apply a lock-only lifecycle update to the reviewed and accepted SB-P-1.11 Verification Checklist Version 1.1.

This mission authorizes no substantive verification-checklist change and no live verification run.

After the lock mission is complete, Claude Code must also provide, in its final response only, a separate paste-ready Lovable hydration prompt for the Founder to use with the locked Lovable Build Prompt attached.

The hydration prompt is a context-loading instruction only. It must not authorize, request, or begin implementation.

---

## 2. Accepted Document

Lock only:

`docs/implementation/SB-P-1.11/verification-checklist.md`

Accepted version:

`Version 1.1`

Mission Control review disposition:

```text
VERIFICATION CHECKLIST REVIEW: PASSED
MC-VC-001 THROUGH MC-VC-003: RESOLVED
VERIFICATION CHECKLIST: ACCEPTABLE
FURTHER REFINEMENT REQUIRED: NO
```

---

## 3. Authorized Repository Changes

Modify only:

- `docs/implementation/SB-P-1.11/verification-checklist.md`

Create only:

- `communication/live/report1.26.md`

No other repository file may be created, modified, renamed, moved, or deleted.

The Lovable hydration prompt required by Section 10 must be returned in Claude Code's final response only and must not be committed to the repository under this mission.

---

## 4. Required Lock State

Preserve:

```text
Version: 1.1
```

Apply:

```text
Status: LOCKED — MISSION CONTROL ACCEPTED
Approval Status: ACCEPTED
Lock Status: LOCKED
Approval: GRANTED
Lock: ACTIVE
```

Record the lock date.

Update only lifecycle-adjacent metadata, status statements concerning this document's own draft state, and the document change log.

Add a `1.1 (Lock)` change-log entry.

---

## 5. Content That Must Remain Unchanged

Do not alter the substance of any accepted checklist requirement, including:

- five controlled outcome values;
- ten-field checklist-item structure;
- unexecuted-template placeholders;
- mandatory cross-phase controls;
- phase-exclusive deferred-outcome rule;
- Phase 1, Phase 2a, Phase 2b, Phase 3, and environment-gated scheduler scopes;
- locked 28-command grouping;
- Owner-only Phase 1 boundary;
- prohibition on substitute permission engines;
- shared permission-engine and conversational-engine gates;
- Pattern A scheduler and environment-verification gate;
- command-only writes;
- business isolation and server-derived scope;
- catalog and inventory separation;
- price, tax, and reference-cost integrity;
- D-047 tenure-bounded interpretation;
- D-068 atomic safeguard;
- idempotency, audit, stale-state, rejection-durability, and unknown-outcome rules;
- same-actor confirmation;
- mandatory clean-file scanning and import safeguards;
- employee financial-intelligence restrictions;
- AI Assistant, Not AI Judge;
- English, Malayalam, and Manglish verification;
- standard POS bridge boundary;
- merchant-safe messaging;
- Lovable, Supabase, runtime, production, evidence, defect, and traceability sections;
- Engineering Contract §29.1 and §29.2 separation;
- four locked Stage 12 authority terminology;
- Founder Product Decision Record D-001 through D-068 as an independently traceable mandatory preserved decision source;
- MC-VC-001 through MC-VC-003 resolutions.

---

## 6. Locked Authorities That Must Remain Unchanged

Do not modify:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `docs/implementation/SB-P-1.11/engineering-contract.md`
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md`

Preserve:

```text
PRODUCT BLUEPRINT: LOCKED
EIS VERSION 2.2: LOCKED
ENGINEERING CONTRACT VERSION 1.1: LOCKED
LOVABLE BUILD PROMPT VERSION 1.1: LOCKED
FOUNDER DECISIONS D-001 THROUGH D-068: UNCHANGED
```

---

## 7. Prohibited Repository and Runtime Work

Do not create or modify:

- Founder Lovable Brief;
- prior reports;
- prior instructions;
- implementation authorization;
- application code;
- frontend components;
- backend code;
- SQL;
- migrations;
- schemas;
- RLS policies;
- RPC implementations;
- Edge Functions;
- scheduler workers;
- AI or WhatsApp runtime prompts;
- tests or fixtures;
- Lovable project state;
- infrastructure;
- deployment configuration;
- production data;
- governance sources.

Do not conduct a live verification run.

Do not paste the locked Lovable Build Prompt into Lovable under this mission.

Do not begin implementation.

---

## 8. Required Lifecycle State After Execution

```text
PRODUCT BLUEPRINT: LOCKED
EIS VERSION 2.2: LOCKED
ENGINEERING CONTRACT VERSION 1.1: LOCKED
LOVABLE BUILD PROMPT VERSION 1.1: LOCKED
VERIFICATION CHECKLIST VERSION 1.1: LOCKED — MISSION CONTROL ACCEPTED

FOUNDER LOVABLE BRIEF: NOT YET CREATED
PASTE-INTO-LOVABLE AUTHORITY: NONE
IMPLEMENTATION PACKAGE: DOCUMENTS COMPLETE, IMPLEMENTATION NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```

Locking the Verification Checklist completes the three-document Stage 12 Initial Implementation Package but does not itself authorize implementation.

---

## 9. Repository Execution Requirements

- Pull and fast-forward synchronize the latest `origin/main`.
- Use a new protected mission branch.
- Modify and create only the files authorized in Section 3.
- Run the Markdown quality gate on the modified checklist and the new report.
- Open a pull request against `main`.
- Do not approve or merge your own pull request.
- Human review and merge are required.

---

## 10. Post-Completion Lovable Hydration Prompt

After the lock mission is complete and the repository report is prepared, Claude Code must include a separate section in its final response titled:

`LOVABLE HYDRATION PROMPT`

The prompt must be directly pasteable into Lovable and must instruct Lovable to:

1. read the attached locked file `docs/implementation/SB-P-1.11/lovable-build-prompt.md` Version 1.1 in full;
2. treat that attached file as the complete builder instruction for SB-P-1.11;
3. inspect the current Lovable project and repository context without changing anything;
4. acknowledge the locked authority hierarchy, phase boundaries, shared-system gates, environment gate, and no-go boundaries;
5. report any conflict, missing attachment, stale repository condition, unsupported environment assumption, or ambiguity;
6. summarize its understanding of the authorized phases and dependencies;
7. stop and wait for a separate explicit Mission Control implementation authorization before writing code, creating migrations, changing Supabase, modifying the Lovable project, publishing, or deploying.

The hydration prompt must state clearly:

```text
CONTEXT HYDRATION ONLY
DO NOT IMPLEMENT
DO NOT MODIFY THE PROJECT
DO NOT CREATE SQL OR MIGRATIONS
DO NOT PUBLISH OR DEPLOY
WAIT FOR EXPLICIT IMPLEMENTATION AUTHORIZATION
```

The hydration prompt must tell the Founder to attach the locked Lovable Build Prompt Version 1.1 when pasting it into Lovable.

This requirement authorizes preparation of the hydration prompt in Claude Code's response only. It does not authorize using the prompt, pasting into Lovable, or beginning implementation.

---

## 11. Required Completion Report

Create:

`communication/live/report1.26.md`

The report must include:

- branch name;
- synchronized base `main` SHA;
- substantive branch commit SHA;
- pull-request number and URL;
- exact files changed;
- exact status and lock-metadata changes;
- confirmation that Version 1.1 was preserved;
- confirmation that no substantive checklist content changed;
- confirmation that MC-VC-001 through MC-VC-003 remain resolved;
- quality-gate results;
- confirmation that all locked authorities remain unchanged;
- confirmation that Founder Decisions D-001 through D-068 remain unchanged;
- confirmation that §29.1 and §29.2 remain correctly separated;
- confirmation that no live verification or implementation work occurred;
- Product Truth change status;
- Founder decision requirement;
- Founder Lovable Brief status;
- paste-into-Lovable authority status;
- implementation-authority status;
- confirmation that the post-completion hydration prompt was provided only in the final response and not committed to the repository.

---

## 12. Final Authority Boundary

This instruction authorizes only:

1. the Verification Checklist Version 1.1 lock-only repository mission; and
2. preparation of a non-repository Lovable hydration prompt in Claude Code's final response after completion.

It does not authorize:

- a Founder Lovable Brief repository document;
- paste into Lovable;
- implementation;
- live verification;
- code or database changes;
- publishing or deployment.
