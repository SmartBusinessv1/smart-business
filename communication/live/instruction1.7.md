# SMART BUSINESS MISSION CONTROL

# Instruction 1.7

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Engineering Review and Sections 20–21

**From:** Mission Control

**To:** Claude Code — Engineering Review

**Status:** ACTIVE

**Date:** 2026-08-04

---

# Mission Objective

Perform the authorized Engineering Review of the accepted SB-P-1.11 Product Blueprint Sections 1–19 and prepare Product Blueprint Sections 20–21 only.

This authorization begins the Engineering Review stage after completion and acceptance of the Builder Review and resolution of Findings F3, F4, and F5.

This is not Blueprint lock, EIS preparation, implementation planning, application development, database migration work, Supabase execution, Lovable implementation, deployment, or production authorization.

---

# Execute According To

Execute according to the current approved repository sources, including:

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/02_Supabase_Architecture_Framework.md`
- `merge/active/03_Lovable_Build_Framework.md`
- `merge/active/04_API_WhatsApp_OpenAI_Framework.md`
- `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `merge/active/P00_Operational_Profiles.md`
- `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md`
- `communication/live/report1.2.md`
- `communication/live/report1.4.md`
- `communication/live/report1.6.md`

Use the latest `origin/main` as the repository source of truth.

---

# Accepted Product Authority

Treat the following as fixed Product Truth for this review:

- Product Blueprint Sections 1–19 as currently merged.
- Founder decisions D-001 through D-068.
- Builder Review findings F3, F4, and F5 are resolved.
- The SB-P-1.10 inventory ledger remains the sole stock authority.
- No Engineering Review observation may silently reopen or reinterpret accepted Founder Product Truth.

Where engineering feasibility exposes a genuine product contradiction or unresolved merchant-facing decision, report it clearly rather than resolving it by assumption.

---

# Authorized Work

Claude Code is authorized to:

1. Inspect the current repository implementation and approved architecture sources.
2. Perform the Engineering Review required by Source 18.
3. Evaluate technical feasibility, architecture fit, dependencies, sequencing, reuse, security, RLS, data integrity, concurrency, idempotency, auditability, timezone handling, multilingual behavior, imports, and operational risks.
4. Carry forward relevant Engineering Review inputs recorded in `communication/live/report1.2.md`.
5. Add and complete Product Blueprint Section 20 — Engineering Review.
6. Add and complete Product Blueprint Section 21 — Engineering Decision and Readiness.
7. Update only Blueprint metadata or governance-history wording strictly necessary to reflect the Engineering Review stage.
8. Report completion and evidence only in `communication/live/report1.7.md`.

---

# Required Engineering Review Inputs

The Engineering Review must explicitly evaluate the previously recorded inputs, including:

## Permission Engine

- The repository currently implements Owner-only authority patterns.
- Manager and Employee permission tiers assumed by the Product Blueprint are not currently implemented.
- Determine the dependency, sequencing, and single-engine architecture required to avoid feature-specific permission systems.
- Do not weaken the locked rule that employees cannot see owner financial intelligence by default.

## Timezone Handling

- Evaluate scheduled-price activation using business-timezone semantics with stable UTC storage and controlled conversion.
- Prevent divergence from established transaction and inventory timestamp handling.

## CSV and Excel Import

- Evaluate parsing, validation, quarantine, correction queue, preview, error reporting, idempotency, scale limits, and security.
- Treat import as a substantial capability bundle rather than incidental CRUD.

## WhatsApp, Voice, Text, and Photo Assistance

- Evaluate dependency on the shared conversational infrastructure.
- Preserve WhatsApp-first experience and the rule that AI assists but does not judge or silently commit consequential uncertainty.
- Identify what belongs to SB-P-1.11 versus reusable platform infrastructure.

## Shared Audit Architecture

- Evaluate a reusable audit-history mechanism rather than a catalog-specific duplicate.
- Preserve immutable historical meaning and business isolation.

## Price, Tax, and Cost Write Integrity

- Define single authoritative write paths.
- Evaluate database constraints, transactional atomicity, immutability, idempotency, concurrency, scheduled activation, and failure recovery.

## Catalog–Inventory Link Integrity

- Preserve the one-to-one business-scoped relationship.
- Preserve the SB-P-1.10 inventory ledger as the only stock authority.
- Preserve D-047 and D-068, including atomic no-change behavior when unit-changing assignment or replacement is cancelled, incomplete, invalid, or fails to save.

## Build Sequencing

- Distinguish core catalog and pricing capabilities from permission-engine, conversational, and bulk-import dependencies.
- Recommend phased engineering sequencing within the accepted Build Now scope without changing Product Truth.

---

# Section 20 Requirements

Section 20 must provide the Engineering Review, including at minimum:

- current repository state and reusable patterns;
- proposed architecture and bounded components;
- data model and relationship assessment;
- RLS and business-isolation approach;
- permission-engine dependency;
- API, RPC, Edge Function, job, and scheduled-processing boundaries where applicable;
- write-path, concurrency, idempotency, and atomicity requirements;
- audit-history architecture;
- multilingual search and normalization feasibility;
- import architecture and safety controls;
- WhatsApp, voice, text, and photo integration dependencies;
- timezone and scheduled-price handling;
- security, privacy, observability, and failure recovery;
- reuse and duplication controls;
- engineering risks, dependencies, and sequencing;
- verification expectations for the later EIS and implementation stages.

Section 20 must remain an Engineering Review, not an EIS or implementation prompt.

---

# Section 21 Requirements

Section 21 must state the Engineering Decision and Readiness disposition.

Use one overall disposition:

- `READY FOR FOUNDER APPROVAL`
- `FOUNDER DECISION REQUIRED`
- `PRODUCT REFINEMENT REQUIRED`
- `ENGINEERING BLOCKED`

Section 21 must clearly distinguish:

- blocking issues;
- non-blocking engineering risks;
- dependencies that require prior or parallel missions;
- recommended implementation sequencing;
- whether Sections 1–21 are technically coherent enough for Founder approval and later Mission Control lock.

Claude Code does not approve or lock its own Engineering Review.

---

# Authorized Changed Paths

Only the following paths may change during execution:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `communication/live/report1.7.md`

The Founder Product Decision Record is read-only during this Engineering Review.

If a genuine new Founder product decision is required, do not edit the Decision Record. Report the exact question and stop with the appropriate disposition.

---

# Explicitly Prohibited

Do not:

- change Product Blueprint Sections 1–19 except minimal metadata or governance-history wording needed to record the review stage;
- alter Founder decisions D-001 through D-068;
- create new Founder decisions;
- perform Blueprint lock;
- create an EIS;
- create an implementation package, Lovable prompt, migration plan, executable SQL, or deployment checklist;
- modify application code, tests, routes, components, dependencies, configuration, authentication, or environment files;
- modify database schema, SQL, migrations, RLS policies, RPCs, Edge Functions, storage, or Supabase configuration;
- modify WhatsApp, OpenAI, voice, photo, webhook, infrastructure, deployment, or production systems;
- modify governance sources under `merge/active/**`;
- authorize any later lifecycle actor or stage;
- merge or approve your own pull request.

Implementation authority remains none.

---

# Required Report

Create:

`communication/live/report1.7.md`

The report must include:

- overall Engineering Review disposition;
- exact files changed;
- confirmation that only Sections 20–21 and strictly necessary metadata/history wording changed in the Blueprint;
- confirmation that Founder decisions D-001 through D-068 remain unchanged;
- summary of architecture conclusions;
- explicit treatment of all required Engineering Review inputs;
- blockers, risks, dependencies, and recommended sequencing;
- exact Blueprint path;
- branch, commit, and pull-request evidence;
- Markdown, whitespace, changed-scope, and secret-scan validation;
- confirmation that no EIS or implementation work occurred;
- the exact next lifecycle action recommended to Mission Control.

Do not duplicate the full Blueprint inside the report.

---

# Git and Review Requirements

1. Pull and fast-forward synchronize the latest `origin/main`.
2. Create a protected mission branch.
3. Make only the authorized changes.
4. Validate the exact diff and changed-file scope.
5. Run the repository Markdown Quality Gate and pre-commit checks.
6. Run whitespace and secret-pattern checks.
7. Commit with a clear SB-P-1.11 Engineering Review message.
8. Push the branch and open a pull request against `main`.
9. Do not self-approve or self-merge.

---

# Completion Condition

This mission is complete only when:

- Section 20 is present and complete;
- Section 21 is present and states one permitted disposition;
- all required Engineering Review inputs are addressed;
- Product Truth remains unchanged;
- `communication/live/report1.7.md` is created;
- only the authorized paths changed;
- validation passes;
- a pull request is open for authorized human review.

---

# Authority Statement

```text
SB-P-1.11 ENGINEERING REVIEW: AUTHORIZED
SECTIONS 20–21: AUTHORIZED
FOUNDER PRODUCT DECISIONS: READ-ONLY
BLUEPRINT LOCK: NOT AUTHORIZED
EIS: NOT AUTHORIZED
IMPLEMENTATION AUTHORITY: NONE
```
