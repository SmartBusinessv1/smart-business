# SMART BUSINESS MISSION CONTROL

# Instruction 1.12 — EIS Refinement Verification Authorization

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**From:** Mission Control

**To:** Authorized EIS Verification Panel

**Status:** ACTIVE

**Date:** 2026-08-04

---

## 1. Mission Objective

Verify that the refined SB-P-1.11 Engineering Implementation Specification version 2.0 fully and correctly resolves every accepted finding recorded in:

- `communication/live/report1.10.md`
- `communication/live/report1.10-supabase-backend.md`
- `communication/live/report1.10-ai-whatsapp.md`
- `communication/live/report1.10-security-permissions.md`
- `communication/live/report1.10-lovable-frontend.md`

The refined EIS under verification is:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

The refinement completion report is:

`communication/live/report1.11.md`

This instruction authorizes verification findings only.

It does not authorize EIS modification, EIS acceptance, Founder approval, EIS Lock, implementation-package preparation, implementation, deployment, or production work.

---

## 2. Verification Standard

The panel shall determine whether the refined EIS:

1. resolves every accepted Stage 10 finding;
2. removes all identified contradictions and bypass paths;
3. preserves locked Product Truth and Founder Decisions D-001 through D-068;
4. remains internally coherent across data, permissions, commands, frontend, imports, conversational channels, scheduling, audit, security, migration, and testing;
5. provides implementation-ready authority without creating application code or implementation artifacts;
6. introduces no new unresolved blocking issue;
7. records every remaining dependency and interpretive boundary transparently;
8. is suitable to proceed to Founder review and the separate EIS Lock gate.

A claim in `report1.11.md` is not sufficient evidence by itself. Reviewers must inspect the refined EIS text and trace each accepted finding to the actual corrected section.

---

## 3. Authoritative Inputs

Reviewers shall synchronize the latest `origin/main` and read:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/instruction1.10.md`
- `communication/live/report1.10.md`
- all four `report1.10-*` specialist reports
- `communication/live/instruction1.11.md`
- `communication/live/report1.11.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- applicable approved architecture and governance sources cited by the EIS
- relevant repository implementation precedent, including SB-P-1.10 where the EIS relies on or intentionally diverges from it

The locked Product Blueprint, Sections 1–21, Founder Decisions D-001–D-068, and approved sequencing remain immutable authority.

Chat history shall not substitute for repository evidence.

---

## 4. Verification Ownership and Separation of Authority

### Mission Control

Mission Control owns the complete verification and final verification disposition.

Mission Control shall:

- inspect the refined EIS independently;
- review all specialist verification reports;
- resolve duplicated or conflicting verification findings;
- decide whether every accepted Stage 10 finding is resolved;
- decide whether the EIS is ready for Founder review and a later EIS Lock instruction.

Mission Control shall not apply EIS Lock under this instruction.

### Specialist reviewers

Each specialist verifies only its assigned domain.

A specialist may classify an accepted finding as:

- `RESOLVED`
- `PARTIALLY RESOLVED`
- `UNRESOLVED`
- `NEW BLOCKING ISSUE`
- `NOT APPLICABLE TO THIS SPECIALIST`

A specialist may not:

- edit the EIS;
- redefine Product Truth;
- create a Founder decision;
- approve the complete EIS;
- apply EIS Lock;
- authorize implementation;
- approve or merge its own pull request.

### Claude Code

Claude Code authored both the original EIS and the refinement.

Claude Code may answer factual clarification questions when requested, but may not act as the deciding verifier of its own refinement.

Any further EIS modification requires a separate Mission Control instruction after this verification is complete.

---

## 5. Required Specialist Verification Reports

### 5.1 Supabase and Backend Architecture Verification

Verify the corrected EIS treatment of:

- stable pending scheduled-price state;
- genuinely immutable price and schedule history;
- removal of the invalid `now()`-dependent partial index;
- one authoritative effective-price event per logical change;
- command-only protected writes;
- executor identities and database privilege boundaries;
- direct authenticated DML denial;
- row locks, concurrency, idempotency, and atomicity;
- D-047 authoritative history predicate and lock ordering;
- D-068 preview token and compare-and-commit contract;
- scheduler batching, `SKIP LOCKED`, failure isolation, retry, and attribution;
- tax pricing-mode command invariant;
- hard-delete eligibility and deletion evidence;
- import transaction and retry semantics;
- migration feasibility and index decision gates.

Required output:

`communication/live/report1.12-supabase-backend.md`

### 5.2 AI and WhatsApp Architecture Verification

Verify the corrected EIS treatment of:

- removal of catalog-owned intent taxonomy authority;
- removal of unsupported product-photo pipeline assumptions;
- shared conversational-engine ownership;
- sender verification and canonical user/business resolution;
- current permission re-verification at execution time;
- pending-action and confirmation-token binding;
- duplicate webhook handling;
- delayed, stale, ambiguous, or expired confirmation handling;
- voice/text response boundaries;
- AI uncertainty and field-level provenance;
- no invention of price, tax, cost, units, identifiers, or legal classification;
- generic API and transport errors as `UNKNOWN_OUTCOME`;
- same-idempotency-key reconciliation;
- no re-execution after reply-delivery failure;
- no catalog-specific webhook or media implementation before the shared engine exists.

Required output:

`communication/live/report1.12-ai-whatsapp.md`

### 5.3 Security and Permissions Verification

Verify the corrected EIS treatment of:

- action-specific Manager permissions;
- separation of product-detail management from lifecycle authority;
- Employee default denial of owner financial intelligence;
- Owner-only temporary sequencing;
- command-only mutation enforcement;
- direct table API denial;
- dedicated executor identities;
- safe `SECURITY DEFINER` ownership, grants, and `search_path` requirements;
- business-derived rather than caller-supplied authority;
- cost and margin omission through permission-aware read contracts;
- business-bound file metadata references;
- import formula-injection and resource-abuse controls;
- scheduled-job least privilege;
- audit provenance across user, system, channel, request, and permission authority;
- cross-business isolation for tables, storage, functions, imports, jobs, and conversational execution.

Required output:

`communication/live/report1.12-security-permissions.md`

### 5.4 Frontend and Lovable Architecture Verification

Verify the corrected EIS treatment of:

- server-authoritative D-068 preview;
- token or fingerprint binding between preview and commit;
- stale-state refresh and fresh confirmation;
- idempotency-key lifecycle;
- duplicate submission prevention;
- `UNKNOWN_OUTCOME` presentation and reconciliation;
- distinction between confirmed failure and unknown commit status;
- import final confirmation, apply-time revalidation, progress, resume, and partial-success presentation;
- multilingual possible-match uncertainty;
- non-authoritative suggestions and no silent merge;
- accessibility and stable selectors for critical flows;
- route and navigation exposure by deployed and verified phase;
- absence of frontend authority over protected financial or relationship mutations.

Required output:

`communication/live/report1.12-lovable-frontend.md`

---

## 6. Mandatory Cross-Domain Verification Items

Every relevant specialist and Mission Control shall explicitly verify the following:

### 6.1 Scheduled-price model

Confirm that:

- pending schedule state is represented using stable state, not wall-clock index membership;
- immutable history rows are never updated;
- cancellation, replacement, activation, and missed-run recovery are coherent;
- one logical scheduled change produces one authoritative effective-price event;
- concurrency cannot create multiple pending schedules.

### 6.2 Command-only authority

Confirm that:

- authenticated clients have no direct protected-table DML path;
- every protected write uses a narrow command contract;
- function ownership, grants, safe search path, and internal authorization are specified;
- frontend, import, WhatsApp, scheduler, and service processes cannot bypass the same rules.

### 6.3 D-068 preview and commit

Confirm that:

- preview is server-authoritative and non-mutating;
- it includes the exact merchant-visible current and proposed state;
- confirmation is bound to actor, business, permission, action, payload, relevant state, and expiry;
- commit recalculates under lock;
- any drift requires a new preview and fresh confirmation;
- cancellation, incomplete confirmation, validation failure, stale state, or save failure leaves all protected state unchanged.

### 6.4 Idempotency and unknown outcomes

Confirm that:

- known matching idempotency results are resolved before mutable-state checks;
- the same key and payload return the original result;
- the same key with a different payload fails deterministically;
- generic transport/API errors are treated as `UNKNOWN_OUTCOME`;
- the client retains the same idempotency key;
- reconciliation uses same-key retry or a read-only outcome lookup;
- the client never states “nothing changed” without a definitive non-commit result;
- fresh confirmation is required only after terminal stale state, changed payload/state, expiry, or verified absence of the original operation.

### 6.5 D-047 interpretive question

The refined EIS reportedly leaves one interpretive question for Mission Control.

Mission Control and the Supabase, Security, and Frontend specialists shall identify the exact question and determine whether it is:

- fully answered by D-047, D-068, and the locked Blueprint;
- an engineering predicate that can be resolved without changing Product Truth;
- a genuine Founder decision because multiple merchant-visible interpretations remain possible;
- a blocker to EIS Lock.

No reviewer may silently invent or broaden the D-047 boundary.

The final report must quote the exact EIS subject in paraphrased form, identify the applicable Founder decisions, and record one disposition:

- `RESOLVED — ENGINEERING INTERPRETATION CONFIRMED`
- `FOUNDER DECISION REQUIRED`
- `BLOCKED`

### 6.6 Permission granularity

Confirm that ordinary product identity/detail maintenance does not automatically grant archive, reactivation, deletion, cost, tax, price, or inventory-link authority.

### 6.7 Conversational authority

Confirm that server-originated channels do not impersonate users, trust AI-supplied authority, or use broad service-role access as merchant authorization.

### 6.8 Import and storage safety

Confirm business-bound file references, parser limits, formula neutralization, retention, cleanup, safe error exports, revalidation, idempotency, and resumability.

### 6.9 Audit provenance

Confirm every protected action records sufficient evidence of:

- business;
- human authorizer where applicable;
- executing actor type;
- current permission or authority basis;
- channel;
- request or correlation ID;
- time;
- result;
- system job identity where applicable.

---

## 7. Finding Verification Format

Each specialist report shall contain a verification matrix with one row for every Stage 10 finding in its domain.

Each row must include:

- original finding ID;
- original severity;
- refined EIS section and subject;
- exact correction found;
- verification evidence;
- verification result;
- remaining risk;
- Product Truth impact;
- required next action.

Allowed verification results:

- `RESOLVED`
- `PARTIALLY RESOLVED`
- `UNRESOLVED`
- `NEW BLOCKING ISSUE`
- `NOT APPLICABLE`

Every `PARTIALLY RESOLVED`, `UNRESOLVED`, or `NEW BLOCKING ISSUE` result must state precisely what remains missing and why the EIS cannot yet be locked.

Reviewers shall not reopen an accepted design merely because they prefer a different valid implementation pattern.

Verification asks whether the accepted risk was resolved safely and coherently, not whether the reviewer would have authored the same design.

---

## 8. Mission Control Consolidation

After all four specialist verification reports are complete, Mission Control shall create:

`communication/live/report1.12.md`

The consolidated report shall include:

1. synchronized base commit;
2. refined EIS commit and version;
3. exact specialist verification reports reviewed;
4. confirmation that the Blueprint and Founder Decision Record remained unchanged;
5. verification status for every accepted Stage 10 finding;
6. disposition of every mandatory cross-domain verification item;
7. explicit resolution of the D-047 interpretive question;
8. new issues, if any;
9. Product Truth impact assessment;
10. Founder-decision requirement, if any;
11. remaining refinement requirements, if any;
12. exact next lifecycle action;
13. one overall verification disposition.

Allowed overall dispositions:

- `VERIFIED — READY FOR FOUNDER EIS REVIEW`
- `PARTIALLY VERIFIED — REFINEMENT REQUIRED`
- `FOUNDER DECISION REQUIRED`
- `BLOCKED`

This instruction does not authorize Mission Control to label the EIS locked.

If the outcome is `VERIFIED — READY FOR FOUNDER EIS REVIEW`, a separate Founder approval and EIS Lock process must follow.

If the outcome requires refinement, a separate scope-limited refinement instruction must be issued.

---

## 9. Authorized Changed Paths

This verification mission may create only:

- `communication/live/report1.12-supabase-backend.md`
- `communication/live/report1.12-ai-whatsapp.md`
- `communication/live/report1.12-security-permissions.md`
- `communication/live/report1.12-lovable-frontend.md`
- `communication/live/report1.12.md`

All other paths are read-only.

Specifically read-only:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/report1.10.md`
- all four Stage 10 specialist reports
- `communication/live/report1.11.md`
- all prior instructions and reports
- all governance sources
- all application, test, database, migration, Supabase, Lovable, infrastructure, deployment, and production files

Each specialist shall use a separate protected mission branch and pull request unless Mission Control explicitly coordinates another branch model.

No author may approve or merge their own pull request.

---

## 10. Explicitly Unauthorized Work

Do not:

- edit the Product Blueprint;
- edit the Founder Product Decision Record;
- edit the refined EIS;
- edit prior instructions or reports;
- create or change Founder decisions;
- change Build Now, Build Later, Add-on, Separate Product, or Reject classifications;
- perform another EIS refinement;
- accept or lock the EIS;
- prepare the implementation package;
- create `engineering-contract.md`;
- create `lovable-build-prompt.md`;
- create `verification-checklist.md` for implementation;
- modify application code or tests;
- create or modify SQL, migrations, RLS, functions, RPCs, Edge Functions, webhooks, prompts, models, Supabase configuration, Lovable files, infrastructure, deployment, production, or governance sources;
- approve or merge your own pull request.

Implementation authority remains none.

---

## 11. Validation Requirements

Every verification report shall pass:

- repository Markdown Quality Gate;
- pre-commit Markdown Quality Gate;
- `git diff --check`;
- exact changed-file scope validation;
- staged secret and credential inspection;
- branch and pull-request verification.

Every report shall identify:

- repository;
- synchronized base commit;
- branch;
- commit SHA;
- pull-request number and state;
- exact changed file;
- confirmation of no self-approval or self-merge.

---

## 12. Completion Boundary

This verification mission is complete only when:

- all four specialist verification reports exist and are merged;
- Mission Control has independently inspected the refined EIS;
- every accepted Stage 10 finding has a verification result;
- the D-047 interpretive question has an explicit disposition;
- every mandatory cross-domain verification item has a disposition;
- `communication/live/report1.12.md` records the overall verification outcome;
- no protected artifact has changed.

Until then:

```text
SB-P-1.11 EIS: DRAFT — REFINED, NOT LOCKED
EIS REFINEMENT VERIFICATION: ACTIVE
FOUNDER EIS REVIEW: NOT YET AUTHORIZED
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
