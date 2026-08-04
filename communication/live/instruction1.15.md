# SMART BUSINESS MISSION CONTROL

# Instruction 1.15 — Single-Finding EIS Correction for MC-VRF-003

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Single-finding EIS correction

**Authorized By:** Mission Control

**Status:** ACTIVE AFTER AUTHORIZED MERGE

**Date:** 2026-08-05

---

## 1. Purpose

This instruction authorizes one final, narrowly scoped correction of the SB-P-1.11 Engineering Implementation Specification.

The correction is limited exclusively to:

`MC-VRF-003 — Scheduler transaction model`

The authoritative defect record is:

`communication/live/report1.14.md`

This instruction does not reopen MC-VRF-001, MC-VRF-002, or MC-VRF-004 through MC-VRF-010. Those findings are verified and must remain unchanged except for the smallest wording consistency edit strictly required by the MC-VRF-003 correction.

---

## 2. Repository Synchronization

Before beginning, pull and fast-forward synchronize the latest protected `origin/main`.

Expected base commit:

`94ac188fbb6be4d527da4844053eea564e0bb4db`

Expected commit message:

`Focused verification of SB-P-1.11 EIS v2.1 (#63)`

If `origin/main` has advanced, record the actual synchronized commit and confirm that no later change modifies the EIS or the authoritative verification reports before proceeding.

---

## 3. Authoritative Materials

Read:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/instruction1.14.md`
- `communication/live/report1.14.md`
- `communication/live/report1.13.md`
- `communication/live/report1.12.md`

Use the locked Product Blueprint and Founder Product Decision Record only as read-only authority.

---

## 4. Authorized Changed Paths

Modify only:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

Create only:

`communication/live/report1.15.md`

No other file may be created, modified, renamed, moved, or deleted.

---

## 5. Single Authorized Finding

### MC-VRF-003 — Scheduler transaction model

The v2.1 scheduler contract is not technically implementable as written.

The correction must resolve all three defects recorded by Mission Control:

1. Transaction control is shown inside a PL/pgSQL exception block that creates a subtransaction where transaction termination is not valid.
2. `claimed_at` is described inconsistently as both immediately committed and rolled back when the current iteration fails or crashes.
3. A repeatedly failing earliest-due row can be selected repeatedly during one run and starve later due schedules.

No other finding is authorized for correction.

---

## 6. Required Scheduler Contract

The refined EIS must define one coherent and implementable scheduler architecture.

The preferred safe model is an external or trusted scheduled worker that invokes one atomic database command per due schedule row.

The final contract must explicitly define:

- the scheduler runtime identity;
- how the runtime obtains a bounded set of candidate schedule IDs;
- how each candidate is processed through one independent database transaction;
- how row locking prevents duplicate activation;
- how already-completed or no-longer-due rows return an idempotent no-op outcome;
- how a failed row is recorded for the current run without being selected repeatedly in that same run;
- how later due rows continue even when an earlier row fails;
- how retries occur on later runs;
- how crash recovery works;
- how partial success is represented;
- how `system_run_id`, schedule ID, result, and failure category are audited;
- the maximum batch size and lag budget;
- the exact Supabase/PostgreSQL invocation boundary.

The EIS must not rely on invalid transaction control inside a PL/pgSQL exception subtransaction.

---

## 7. Acceptable Implementation Patterns

The correction may choose one of these patterns, provided it is specified consistently and is valid in the target environment.

### Pattern A — External worker, one command per schedule

A trusted scheduler worker:

1. starts a run and creates `system_run_id`;
2. fetches a bounded ordered candidate list;
3. invokes one protected atomic activation command per candidate;
4. records each result;
5. continues after a candidate failure;
6. does not retry the same failed candidate again during the same run unless an explicit bounded retry policy is defined.

Each activation command owns one ordinary database transaction. No mid-function commit is required.

### Pattern B — Supported procedure framework

A procedure or job framework may be used only if the EIS proves that:

- its invocation context permits transaction control;
- transaction termination occurs outside any active PL/pgSQL exception subtransaction;
- failure handling does not depend on invalid `COMMIT` or `ROLLBACK` placement;
- failed rows do not starve later rows;
- deployment support in the actual Supabase/PostgreSQL environment is confirmed rather than assumed.

Pattern B must not retain the invalid v2.1 pseudocode.

---

## 8. Claiming and Failure Semantics

The corrected EIS must use one truthful claim model.

### Non-durable lock-only claim

A candidate is claimed only through a transaction-scoped row lock. A crash releases the lock automatically. No `claimed_at` field may be described as durable claim state.

### Durable claim state

A durable claim may be used only if the EIS defines:

- `claimed_by` or equivalent run identity;
- claim time;
- claim expiry or recovery;
- status transitions;
- how abandoned claims become eligible again;
- how concurrent workers avoid duplicate processing.

Do not combine these two models.

If `claimed_at` has no necessary authoritative purpose under the chosen model, remove it from the EIS data model rather than preserving contradictory state.

---

## 9. Starvation Prevention

The corrected scheduler must guarantee that one failing earliest-due schedule does not prevent later due schedules from being attempted in the same run.

The EIS must define at least one of:

- a run-scoped set of candidate IDs fetched once and processed at most once per run;
- a durable per-run attempt marker;
- a bounded retry count followed by skip-for-this-run behavior;
- another implementable mechanism with equivalent fairness.

An unbounded loop that repeatedly selects the same failing row is prohibited.

---

## 10. Atomic Activation Command

The per-schedule activation operation must be atomic and idempotent.

Within one transaction it must:

1. derive business and scheduler authority server-side;
2. lock the pending schedule row;
3. verify that the row still exists and is due;
4. lock the related product row in the established deterministic order;
5. write the required immutable schedule and selling-price events;
6. update or delete the pending current-state row as defined by the verified scheduled-price model;
7. attach `system_run_id` and the approved audit provenance;
8. return a stable outcome.

Permitted stable outcomes should distinguish at minimum:

- `activated`;
- `already_processed` or equivalent idempotent no-op;
- `not_due`;
- `rejected` with a stable category;
- transport-level `UNKNOWN_OUTCOME`, reconciled through authoritative state.

The correction must preserve the already verified scheduled-price current-state and immutable-history architecture.

---

## 11. Protected Findings and Decisions

The following must remain unchanged:

```text
MC-VRF-001: VERIFIED
MC-VRF-002: VERIFIED
MC-VRF-004 THROUGH MC-VRF-010: VERIFIED
PRODUCT TRUTH: UNCHANGED
D-001–D-068: UNCHANGED
D-047 TENURE INTERPRETATION: PRESERVED
APPROVED SEQUENCING: UNCHANGED
```

Do not alter merchant-visible behavior, permissions, confirmation rules, idempotency ordering, audit authority fields, file-scanning rules, channel behavior, or frontend contracts.

---

## 12. Required Completion Report

Create:

`communication/live/report1.15.md`

The report must include:

1. synchronized base commit;
2. branch name;
3. exact changed files;
4. the scheduler model before and after correction;
5. the selected implementation pattern and why it is valid;
6. transaction-boundary explanation;
7. claim and crash-recovery semantics;
8. starvation-prevention mechanism;
9. retry and partial-success behavior;
10. audit and run-identity behavior;
11. exact EIS sections changed;
12. confirmation that MC-VRF-001, MC-VRF-002, and MC-VRF-004 through MC-VRF-010 were not reopened;
13. confirmation that Product Truth and D-001–D-068 remain unchanged;
14. unresolved environment assumptions, if any;
15. final author disposition.

The final author disposition must state one of:

- `MC-VRF-003 CORRECTION COMPLETE — FOCUSED VERIFICATION REQUIRED`
- `BLOCKED — ENVIRONMENT DECISION REQUIRED`
- `FOUNDER DECISION REQUIRED`

---

## 13. Prohibited Actions

Do not:

- modify the Product Blueprint;
- modify the Founder Product Decision Record;
- modify prior instructions or reports;
- change any finding other than MC-VRF-003;
- create SQL, migrations, RLS, RPC implementations, application code, tests, prompts, webhooks, Edge Functions, Lovable changes, infrastructure, deployment, or production changes;
- accept or lock the EIS;
- create an implementation package;
- authorize implementation;
- approve or merge your own pull request.

---

## 14. Completion Gate

This correction mission is complete only when:

- the EIS contains one technically coherent scheduler model;
- all three defects from `report1.14.md` are resolved;
- only the two authorized paths changed;
- protected decisions and verified findings remain unchanged;
- `report1.15.md` provides exact traceability;
- the work is submitted through a protected pull request;
- an authorized human reviews and merges it.

After merge, Mission Control must perform one final focused verification of MC-VRF-003 only.

Founder EIS review and EIS Lock remain separate later lifecycle actions.

---

## 15. Current Authority State

```text
EIS VERSION: 2.1
EIS STATUS: DRAFT — REFINED, NOT LOCKED
MC-VRF-003 CORRECTION: AUTHORIZED AFTER THIS INSTRUCTION IS MERGED
FOUNDER EIS REVIEW: NOT AUTHORIZED
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
