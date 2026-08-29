# SMART BUSINESS MISSION CONTROL

# Instruction 1.16 — Final Focused Verification of MC-VRF-003

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Final single-finding verification before Founder EIS Review

**Authorized By:** Mission Control

**Status:** ACTIVE AFTER AUTHORIZED MERGE

**Date:** 2026-08-05

---

## 1. Purpose

This instruction authorizes the final focused verification of:

`MC-VRF-003 — Scheduler transaction model`

The verification shall assess the SB-P-1.11 Engineering Implementation Specification version 2.2 after the single-finding correction completed through PR #65.

This mission is limited to determining whether the corrected external-worker scheduler contract fully resolves the three defects recorded in:

`communication/live/report1.14.md`

This is not a full EIS re-review.

This instruction does not authorize Founder EIS Review, EIS Lock, an implementation package, or implementation.

---

## 2. Repository Synchronization

Before verification, synchronize from the latest protected `origin/main` using fast-forward only.

Expected starting commit:

`adb4fcdc9825a7f7804fba01d4995ea5f3725ae7`

Expected commit message:

`Correct SB-P-1.11 EIS MC-VRF-003: Pattern A external-worker scheduler (#65)`

If `origin/main` has advanced, record the actual synchronized commit and verify that no later commit modified the EIS or the verification sources before proceeding.

---

## 3. Authoritative Materials

Read:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/instruction1.15.md`
- `communication/live/report1.14.md`
- `communication/live/report1.15.md`
- PR #65 changed-file diff and merge metadata

Use these only as read-only verification sources.

Previously verified findings may be consulted only to confirm that the v2.2 correction did not reopen them.

---

## 4. Authorized Output

Create only:

`communication/live/report1.16.md`

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
- SQL, migrations, RLS, RPC implementations, and database configuration
- Supabase and Lovable configuration
- prompts, webhooks, Edge Functions, scheduled workers, and media pipelines
- infrastructure, deployment, production, and governance sources

Any defect must be reported, not silently corrected.

---

## 6. Verification Scope

Verify only whether the v2.2 Pattern A scheduler contract resolves all three defects from `report1.14.md`:

### Defect A — Invalid transaction control

Verify that:

- no scheduler function or procedure relies on internal `COMMIT` or `ROLLBACK`;
- no transaction control occurs inside a PL/pgSQL exception subtransaction;
- the trusted external worker invokes one ordinary database command per candidate schedule;
- each activation call owns one independent transaction;
- no transaction spans multiple candidates or a network round-trip.

### Defect B — Contradictory claim durability

Verify that:

- `claimed_at` and any equivalent unnecessary durable claim field are removed;
- candidate claiming is transaction-scoped and non-durable;
- row locks release naturally on commit, rollback, connection failure, or worker crash;
- an interrupted activation leaves the pending schedule safely retryable;
- no stale-claim expiry or reconciliation mechanism is falsely required by the chosen model.

### Defect C — Candidate starvation

Verify that:

- the candidate list is fetched once per worker run;
- the run processes a bounded set of distinct candidate IDs;
- each candidate is attempted at most once during that run;
- failure, rejection, timeout, or unknown outcome for one candidate does not prevent later candidates in the fixed list from being attempted;
- a repeatedly failing earliest-due schedule cannot consume the entire run bound repeatedly.

---

## 7. Full Scheduler Contract Checks

The verification must also confirm that the corrected contract states truthfully and consistently:

- the trusted worker identity and invocation boundary;
- the candidate-list function contract;
- the atomic activation-function contract;
- ordering and batch limits;
- concurrency behavior and `FOR UPDATE SKIP LOCKED` use;
- due-state revalidation inside the activation transaction;
- duplicate or already-processed behavior;
- retry behavior after ordinary failure;
- `UNKNOWN_OUTCOME` handling after dispatch ambiguity;
- partial-success behavior across a run;
- crash recovery between candidate calls;
- run correlation through one `system_run_id`;
- audit provenance for system-executed activation;
- operational metrics and failure visibility;
- least-privilege execution authority;
- deployment dependencies that remain implementation-time checks rather than design gaps.

Do not accept the correction solely because `report1.15.md` says it is resolved. Verify the EIS v2.2 contract itself.

---

## 8. Previously Verified Findings Protection

Confirm explicitly that the v2.2 correction did not reopen:

- MC-VRF-001;
- MC-VRF-002;
- MC-VRF-004 through MC-VRF-010;
- scheduled-price state and immutable-history separation;
- direct authenticated DML denial;
- action-specific permissions;
- D-068 preview and compare-and-commit behavior;
- idempotency-before-precondition ordering;
- D-047 tenure interpretation;
- protected cost and margin reads;
- import security controls;
- frontend determinism and route gating.

Only scheduler-related consistency edits directly required by MC-VRF-003 are permitted in the v2.2 diff.

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

Any Product Truth conflict or need for a Founder product decision must be reported and must not be resolved by engineering interpretation.

---

## 10. Required Verification Method

The report must:

1. Restate the accepted MC-VRF-003 requirement.
2. Identify the exact EIS v2.2 sections implementing Pattern A.
3. Verify each of Defects A, B, and C independently.
4. Verify cross-contract consistency across identity, transactions, locking, retries, audit, and observability.
5. Identify residual implementation dependencies separately from EIS design defects.
6. Record whether previously verified findings remained protected.
7. Produce one final disposition from Section 12.

---

## 11. Required Report Structure

`communication/live/report1.16.md` must include:

1. Mission identity and synchronized commit.
2. Exact files and PR evidence reviewed.
3. Exact changed-file confirmation for the verification PR.
4. MC-VRF-003 accepted requirement.
5. Defect A verification and evidence.
6. Defect B verification and evidence.
7. Defect C verification and evidence.
8. Full scheduler contract and cross-consistency review.
9. Previously verified findings impact assessment.
10. Product Truth and Founder decision assessment.
11. Residual implementation dependencies.
12. Final Mission Control disposition.

---

## 12. Final Disposition

The final report must use exactly one of:

- `VERIFIED — READY FOR FOUNDER EIS REVIEW`
- `REFINEMENT REQUIRED`
- `FOUNDER DECISION REQUIRED`
- `BLOCKED`

Use `VERIFIED — READY FOR FOUNDER EIS REVIEW` only when:

- all three scheduler defects are fully resolved;
- the Pattern A contract is technically coherent and implementable;
- no previously verified finding was reopened;
- Product Truth remains unchanged;
- no Founder product decision is required.

Implementation-environment checks such as worker availability, credential provisioning, scheduling reliability, and runtime validation may be recorded as non-blocking implementation dependencies when the EIS contract itself is complete and truthful.

---

## 13. Authority Boundary

This instruction does not authorize:

- EIS modification;
- Product Blueprint or Founder Product Decision Record modification;
- Founder EIS Review;
- Founder approval;
- EIS acceptance or lock;
- implementation-package creation;
- code, test, SQL, migration, RLS, RPC, Supabase, Lovable, prompt, webhook, Edge Function, scheduled-worker, infrastructure, deployment, or production changes;
- implementation.

Founder EIS Review may begin only after this verification report is human-reviewed, merged, and records:

`VERIFIED — READY FOR FOUNDER EIS REVIEW`

EIS Lock remains a separate later authorization after explicit Founder approval.

---

## 14. Completion Gate

This mission is complete only when:

- Defects A, B, and C each have evidence-backed verification;
- the full corrected scheduler contract has been reviewed;
- only `communication/live/report1.16.md` changed;
- protected artifacts remain unchanged;
- the report is submitted through a protected pull request;
- an authorized human reviews and merges the report.

The author must not approve or merge its own pull request.

---

## 15. Current Authority State

```text
EIS VERSION: 2.2
EIS STATUS: DRAFT — REFINED, NOT LOCKED
MC-VRF-003 CORRECTION: COMPLETE
FINAL MC-VRF-003 VERIFICATION: AUTHORIZED AFTER THIS INSTRUCTION IS MERGED
FOUNDER EIS REVIEW: NOT AUTHORIZED BY THIS INSTRUCTION
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
