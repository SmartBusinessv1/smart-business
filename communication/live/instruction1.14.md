# SMART BUSINESS MISSION CONTROL

# Instruction 1.14 — Focused Verification of SB-P-1.11 EIS v2.1

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Focused verification after second EIS refinement

**Authorized By:** Mission Control

**Status:** ACTIVE AFTER AUTHORIZED MERGE

**Date:** 2026-08-05

---

## 1. Purpose

This instruction authorizes a focused, independent verification of the SB-P-1.11 Engineering Implementation Specification version 2.1.

The verification is limited to:

- MC-VRF-001 through MC-VRF-010 recorded in `communication/live/report1.12.md`;
- the corresponding changes documented in `communication/live/report1.13.md`;
- the exact EIS sections modified by PR #61.

This is not a full EIS re-review.

Previously verified findings must not be reopened unless a v2.1 change materially contradicts or weakens them.

---

## 2. Repository Synchronization

Before verification, synchronize from the latest protected `origin/main` using fast-forward only.

The expected starting commit is:

`3d99785fe8fb154248186569305ded6d5ba5e7b1`

Expected commit message:

`Refine SB-P-1.11 EIS to resolve MC-VRF-001 through MC-VRF-010 (v2.1) (#61)`

If `origin/main` has advanced, record the actual synchronized commit and verify that no later change modifies the protected EIS or the verification sources before proceeding.

---

## 3. Authoritative Materials

Read:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/instruction1.13.md`
- `communication/live/report1.12.md`
- `communication/live/report1.13.md`
- `communication/live/report1.12-supabase-backend.md`
- `communication/live/report1.12-ai-whatsapp.md`
- `communication/live/report1.12-security-permissions.md`
- `communication/live/report1.12-lovable-frontend.md`

Use the locked Product Blueprint and Founder Product Decision Record only as read-only authority when needed to confirm that Product Truth, D-001–D-068, approved sequencing, and the D-047 tenure interpretation remain unchanged.

---

## 4. Authorized Output

Create only:

`communication/live/report1.14.md`

The verification report must be created on a new protected mission branch and submitted through a pull request.

No other file may be created, modified, renamed, moved, or deleted.

---

## 5. Read-Only Artifacts

The following are strictly read-only:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- Product Blueprint
- Founder Product Decision Record
- all prior instructions and reports
- application code and tests
- SQL, migrations, RLS, RPCs, database configuration
- Supabase and Lovable configuration
- prompts, webhooks, Edge Functions, media pipelines
- infrastructure, deployment, production, and governance sources

This mission does not authorize EIS correction during verification.

Any remaining defect must be reported, not silently fixed.

---

## 6. Required Verification Method

For each MC-VRF finding:

1. Restate the accepted requirement from `report1.12.md`.
2. Identify the exact EIS v2.1 section or contract that claims to resolve it.
3. Verify technical implementability and internal consistency.
4. Verify that the change does not reopen a previously resolved finding.
5. Record one disposition:
   - `VERIFIED — RESOLVED`
   - `PARTIALLY VERIFIED — REFINEMENT REQUIRED`
   - `NOT VERIFIED — REFINEMENT REQUIRED`
   - `FOUNDER DECISION REQUIRED`
6. Record evidence and any residual risk.

Do not accept a finding merely because `report1.13.md` says it was resolved. Verify the EIS contract itself.

---

## 7. Mandatory Finding Checks

### MC-VRF-001 — Executor identity separation

Verify that the EIS clearly separates:

- external runtime or service identity;
- any LOGIN-capable database role;
- NOLOGIN function-owner or privilege roles;
- controlled function or procedure execution boundaries.

Confirm that no NOLOGIN role is described as authenticating, storing credentials, or being directly used by an external service.

### MC-VRF-002 — Least-privilege command authority

Verify that the eight command-group-scoped owner roles are actually bounded by:

- command family;
- table;
- operation;
- execution path.

Confirm there is no replacement general-purpose identity with unrestricted merchant catalog DML.

Confirm ordinary authenticated users retain zero direct DML authority on protected tables.

### MC-VRF-003 — Scheduler transaction model

Verify that the chosen procedure or worker model is technically implementable in the stated Supabase/PostgreSQL environment.

Confirm the EIS states truthfully:

- who invokes the procedure;
- whether transaction control is valid in that invocation context;
- row claiming and lock behavior;
- retry and crash recovery;
- partial success;
- audit/run identity;
- bounded batches and lag handling.

Flag any environment assumption that would prevent transaction control from working as written.

### MC-VRF-004 — Durable rejection and rollback semantics

Verify that the EIS distinguishes:

- business writes that roll back;
- successful idempotent outcomes committed with business writes;
- terminal rejection responses;
- durable evidence, where technically valid;
- operational telemetry;
- post-dispatch unknown outcomes.

Confirm structured returns do not accidentally commit prohibited partial business mutations.

Confirm terminal rejection bookkeeping and transaction boundaries are internally consistent.

### MC-VRF-005 — Webhook deduplication and command idempotency binding

Verify distinct but linked identities for:

- inbound event deduplication;
- pending action;
- confirmation event or receipt;
- stable final command idempotency key.

Confirm duplicate webhook delivery cannot create a new command attempt.

Confirm the command remains bound to the exact pending action, actor, business, payload, confirmation, and current authoritative state.

### MC-VRF-006 — Same-actor confirmation

Verify that only the same verified actor who received and reviewed the pending-action preview may confirm it.

Confirm there is no hidden alternate-confirmer or delegated-confirmation path.

Confirm any future delegation is explicitly outside this mission and would require separate Product Truth and permission authority.

### MC-VRF-007 — Failure classification

Verify the EIS distinguishes at least:

- `PRE_COMMAND_PROCESSING_FAILED`;
- `COMMAND_REJECTED`;
- `UNKNOWN_OUTCOME`;
- `CONFIRMED_SUCCESS`.

Confirm only ambiguous failures after authoritative command dispatch use same-key outcome reconciliation.

Confirm pre-command media, model, interpretation, OCR, transcription, or download failures can truthfully state that no protected catalog command was submitted.

### MC-VRF-008 — Audit provenance completeness

Verify the proposed data model can store every provenance claim made by the EIS, including where applicable:

- actor identity and actor type;
- business;
- channel;
- correlation or request identity;
- operation;
- permission or authority basis;
- pending-action or confirmation reference;
- outcome location;
- recorded and effective time;
- system job or run identity.

Confirm the EIS does not claim fields that are absent or stored only in an unrelated, non-authoritative location.

### MC-VRF-009 — Server-derived outcome scope

Verify `get_catalog_command_outcome` and equivalent read paths derive business scope from the authenticated or verified channel identity.

Confirm the caller cannot select authoritative business context.

Confirm cross-business guessing is indistinguishable from a missing record.

Confirm current permission and business-membership checks are performed server-side.

### MC-VRF-010 — Mandatory file scanning

Verify the file-purpose and scan-status matrix prevents `not_required` for every currently defined scan-required purpose.

Confirm catalog imports can be linked, parsed, previewed, or applied only when `scan_status = clean`.

Confirm enforcement is server-side and cannot be bypassed by client metadata.

Confirm future `not_required` purposes require explicit approved policy rather than an open-ended fallback.

---

## 8. Cross-Finding Consistency Checks

The report must also verify that the combined v2.1 changes do not introduce contradictions across findings, especially:

- scoped owner roles versus scheduler and channel execution;
- structured rejection returns versus idempotency and audit outcomes;
- webhook receipt deduplication versus same-actor confirmation;
- server-derived business scope versus channel identity resolution;
- file scanning enforcement versus import retry/resume behavior;
- procedure transaction control versus connection pool and invocation limitations.

---

## 9. Protected Decisions

Confirm explicitly:

```text
PRODUCT TRUTH CHANGE: NONE
D-001–D-068: UNCHANGED
D-047 TENURE INTERPRETATION: PRESERVED
APPROVED SEQUENCING: UNCHANGED
PREVIOUSLY VERIFIED FINDINGS: NOT REOPENED
```

Any discovered Product Truth conflict or need for Founder decision must be reported immediately and must not be resolved by engineering interpretation.

---

## 10. Required Report Structure

`communication/live/report1.14.md` must include:

1. Mission identity and synchronized commit.
2. Exact files reviewed.
3. Exact changed-file confirmation for the verification PR.
4. A traceability table for MC-VRF-001 through MC-VRF-010.
5. Evidence for every disposition.
6. Cross-finding consistency results.
7. Previously verified findings impact assessment.
8. Product Truth and Founder decision assessment.
9. Residual risks and unresolved questions.
10. Final Mission Control disposition.

The final disposition must be exactly one of:

- `VERIFIED — READY FOR FOUNDER EIS REVIEW`
- `REFINEMENT REQUIRED`
- `FOUNDER DECISION REQUIRED`
- `BLOCKED`

---

## 11. Verification Ownership

Mission Control owns the consolidated focused verification.

Mission Control may consult only the specialist domains materially affected by a doubtful finding:

- Supabase and Backend Architecture for MC-VRF-001 through MC-VRF-004;
- AI and WhatsApp Architecture for MC-VRF-005 through MC-VRF-007;
- Security and Permissions Architecture for MC-VRF-001, MC-VRF-002, and MC-VRF-008 through MC-VRF-010.

A full four-room re-review is not required unless the v2.1 changes materially alter a previously verified domain.

Any specialist consultation is advisory evidence. Mission Control remains responsible for the final consolidated disposition.

---

## 12. Prohibited Actions

Do not:

- modify the EIS;
- modify the Product Blueprint or Founder Product Decision Record;
- reopen D-047;
- create or change Founder decisions;
- accept or lock the EIS under this instruction;
- create an implementation package;
- modify code, tests, SQL, migrations, RLS, RPCs, Supabase, Lovable, prompts, webhooks, Edge Functions, infrastructure, deployment, production, or governance;
- authorize implementation;
- approve or merge your own pull request.

---

## 13. Completion Gate

This mission is complete only when:

- all ten findings have evidence-backed dispositions;
- the cross-finding checks are complete;
- only `communication/live/report1.14.md` changed;
- the protected artifacts remain unchanged;
- the report is submitted in a protected pull request;
- an authorized human reviews and merges the report.

Even if the final disposition is `VERIFIED — READY FOR FOUNDER EIS REVIEW`, Founder EIS review and EIS Lock remain separate later lifecycle actions.

---

## 14. Current Authority State

```text
EIS VERSION: 2.1
EIS STATUS: DRAFT — REFINED, NOT LOCKED
FOCUSED VERIFICATION: AUTHORIZED AFTER THIS INSTRUCTION IS MERGED
FOUNDER EIS REVIEW: NOT AUTHORIZED BY THIS INSTRUCTION
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
