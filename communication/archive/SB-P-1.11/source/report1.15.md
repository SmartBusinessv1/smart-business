# SMART BUSINESS MISSION CONTROL

# Report 1.15 — Single-Finding EIS Correction of MC-VRF-003

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Single-finding EIS correction (Scheduler transaction model)

**From:** Claude Code

**To:** Mission Control

**Status:** CORRECTION COMPLETE — SUBMITTED FOR REVIEW

**Date:** 2026-08-05

---

## 1. Synchronized Base Commit

Instruction1.15.md §2 expected base commit `94ac188fbb6be4d527da4844053eea564e0bb4db` ("Focused verification of SB-P-1.11 EIS v2.1 (#63)").

At sync time, `origin/main` had advanced by exactly one commit:

`46016ec57c848df89762a4119ab579c16e3980b0` — "Authorize single-finding MC-VRF-003 EIS correction (#64)"

That single advancing commit added only `communication/live/instruction1.15.md` itself (verified via `git diff --name-only`). No later change modified the EIS or any authoritative verification report. This correction is built on `46016ec57c848df89762a4119ab579c16e3980b0`, fast-forward synchronized before work began.

---

## 2. Branch Name

`mission/SB-P-1.11-eis-vrf003-correction`

---

## 3. Exact Changed Files

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (modified — authorized)
- `communication/live/report1.15.md` (created — authorized)

No other file was created, modified, renamed, moved, or deleted.

---

## 4. Scheduler Model — Before and After Correction

### Before (Version 2.1, defective)

`activate_due_catalog_price_schedules` was defined as a PL/pgSQL `PROCEDURE`, invoked via top-level `CALL` by `catalog_scheduler_service`, looping up to 500 times. Each iteration wrapped its work in a `BEGIN ... EXCEPTION WHEN OTHERS ... END` block and then issued `ROLLBACK` (on the exception path) or `COMMIT` (on success) from inside that same iteration.

### After (Version 2.2, corrected — Pattern A)

The in-database multi-commit `PROCEDURE` is removed entirely. A trusted external scheduled worker (`catalog_scheduler_service`, unconditionally `LOGIN`-capable) runs the scheduler in two ordinary steps:

1. Call `list_due_catalog_price_schedule_candidates(p_limit)` once per run — an ordinary `FUNCTION` returning a bounded, run-scoped, ordered list of candidate schedule IDs.
2. Call `activate_catalog_price_schedule(p_schedule_id)` once per candidate, in order — an ordinary `FUNCTION`, each call its own independent transaction.

Both are plain `FUNCTION`s. Neither contains any internal `COMMIT`, `ROLLBACK`, or exception-block transaction control.

---

## 5. Selected Implementation Pattern and Why It Is Valid

**Pattern A — External worker, one command per schedule** (instruction1.15.md §7, the "preferred safe model") was selected over Pattern B.

Pattern A is valid because it removes the entire problem category rather than attempting to place transaction-control statements correctly inside PL/pgSQL: an ordinary `FUNCTION` call issued by an external client is, by definition, one single transaction owned by the caller. There is no PL/pgSQL exception subtransaction inside which a `COMMIT`/`ROLLBACK` could be misplaced, because no `COMMIT`/`ROLLBACK` statement appears anywhere in either function. This structurally satisfies instruction1.15.md §6's requirement that "the EIS must not rely on invalid transaction control inside a PL/pgSQL exception subtransaction" — there is no such construct left in the design to be invalid.

Pattern B (supported procedure framework) was not selected: it would have required proving PostgreSQL/Supabase-specific procedure-framework transaction semantics that cannot be verified without deployment access, and instruction1.15.md §7 requires such proof before Pattern B may be used. Pattern A requires no such proof because it uses no procedure-level transaction control at all.

---

## 6. Transaction-Boundary Explanation

- `list_due_catalog_price_schedule_candidates(p_limit)` — one read-only transaction, owned by the calling worker, returns a `SETOF uuid`. No writes occur.
- `activate_catalog_price_schedule(p_schedule_id)` — one transaction per call, owned by the calling worker. Within that single transaction: lock candidate row → verify due → lock product row → write immutable events → delete pending row → return outcome. The transaction commits on normal return (including `already_processed`/`not_due`/`rejected` outcomes, which write only their own stable-outcome return, not protected business state) or rolls back entirely only on a genuinely unexpected error (Section 12's step 8, mirroring the already-verified MC-VRF-004 commit-not-exception model from Section 10, applied here to the scheduler's own internal failure path — not a reopening of MC-VRF-004, which governs merchant-facing commands).
- No transaction spans more than one candidate. No transaction is held open across a network round-trip to the worker.

---

## 7. Claim and Crash-Recovery Semantics

**Selected model: non-durable, lock-only claim** (instruction1.15.md §8), not a durable claim.

A candidate is claimed only via `SELECT ... FROM catalog_pending_price_schedules WHERE id = p_schedule_id FOR UPDATE SKIP LOCKED` inside `activate_catalog_price_schedule`'s own transaction. The lock is held only for that one call's duration and is released automatically when the transaction ends — on commit (row deleted, activation durable) or on rollback (row untouched, lock released, naturally due again).

No `claimed_at` field, or any other durable claim-state field, exists in the corrected data model. Version 2.1's `claimed_at` field — previously described inconsistently as both "immediately committed" and "rolled back on crash" (`report1.14.md` §6, Defect B) — is removed from `catalog_pending_price_schedules` (Section 5.3), per instruction1.15.md §8's explicit direction to remove a field with "no necessary authoritative purpose under the chosen model" rather than retain contradictory state.

**Crash recovery:** a crash at any point — mid-worker-run, mid-call, or between calls — leaves every already-committed `activate_catalog_price_schedule` call durably `activated` and every not-yet-called or in-flight-and-rolled-back candidate as an ordinary pending row, indistinguishable from one that was never attempted. No reconciliation step, stale-claim sweep, or expiry logic is needed, because no durable claim state exists to go stale.

---

## 8. Starvation-Prevention Mechanism

**Selected mechanism: run-scoped candidate list, fetched once** (instruction1.15.md §9, first listed option).

`list_due_catalog_price_schedule_candidates(p_limit)` is called exactly once at the start of each run, producing a fixed list of up to 500 candidate IDs. The worker iterates this fixed list exactly once, calling `activate_catalog_price_schedule` once per candidate regardless of any earlier candidate's outcome. The list is never re-queried mid-run, so a repeatedly failing earliest-due row cannot be reselected within the same run — it simply is not present a second time in the list the worker is iterating. This directly resolves Defect C (`report1.14.md` §6): the 500-candidate bound is now spent on 500 distinct rows, never repeatedly on one failing row, guaranteeing every later-due candidate in the fetched list is attempted in the same run regardless of an earlier candidate's failure.

---

## 9. Retry and Partial-Success Behavior

- **Retry:** a failed or not-yet-attempted candidate remains a pending row in `catalog_pending_price_schedules` and is naturally re-listed by the *next* run's `list_due_catalog_price_schedule_candidates` call — no retry counter, backoff timestamp, or dedicated idempotency key is needed for this system-internal sweep, because the row's continued existence is itself the complete "not yet processed" signal (the same principle Version 2.0/2.1 already established and instruction1.15.md §11 requires be preserved).
- **Partial success:** fully representable and expected under normal operation — each candidate's outcome (`activated`, `already_processed`, `not_due`, `rejected`, or `UNKNOWN_OUTCOME`) is independent and durable the instant its own call returns; one candidate's rejection or unknown outcome has no effect on any other candidate's transaction.

---

## 10. Audit and Run-Identity Behavior

Every write produced by `activate_catalog_price_schedule` carries the standard Section 5.0 provenance block: `system_run_id` (one value generated by the worker at the start of the run and passed to every call in that run, correlating every result back to one worker execution), `authorized_by_user_id` (carried forward from the original schedule, unchanged), `executed_by_actor_type = 'system'`, `authority_basis = 'system_scheduler'`, `channel = 'system'`, and `recorded_at`. Operational metrics (Section 18) are now attributable to the external worker's own per-call result log, correlated by `system_run_id`, rather than a `PROCEDURE`'s per-iteration exception log — a wording correction to Section 18 strictly required by this model change, not a reopening of MC-VRF-008.

---

## 11. Exact EIS Sections Changed

- **§1 Document Metadata** — version 2.1→2.2; Prior Reviews, This Revision, Authorizing Instruction rows updated.
- **§2 Purpose** — revision-scope paragraph updated to describe the single-finding v2.2 correction; "twice-refined" → "three-times-refined."
- **§4 Architecture and Scope Map** — Database and Commands rows of the Repository Components Affected table updated to reflect `claimed_at` removal and the two-`FUNCTION` Pattern A model.
- **§5.3 Scheduled Price** — heading and body replaced: `claimed_at` field removed from the data model; non-durable lock-only claim explained.
- **§7 Command Execution Identities** — Layer 1 table's `catalog_scheduler_service` row rewritten (external Edge Function worker, unconditionally `LOGIN`); Layer 3 wording updated ("the scheduler procedure" → "the scheduler's two activation functions").
- **§12 Scheduled Pricing and Timezone Handling** — major rewrite: the entire invalid "Corrected Transaction Model (MC-VRF-003)" subsection (Version 2.1's `PROCEDURE` pseudocode) replaced with "Corrected Transaction Model — Pattern A," "Runtime Identity and Invocation Boundary," "Run Sequence," "`activate_catalog_price_schedule` — Atomic Contract," and "Why This Resolves Every Element" subsections.
- **§16 API, RPC, and Command Contracts** — intro sentence and command table row updated: `activate_due_catalog_price_schedules` (`PROCEDURE`) replaced with `list_due_catalog_price_schedule_candidates` + `activate_catalog_price_schedule` (two `FUNCTION`s).
- **§18 Audit and Observability** — scheduler metrics attribution sentence updated (per-iteration exception log → per-call result log correlated by `system_run_id`).
- **§20 Migration and Rollout Strategy** — step 12 updated (removed `pg_cron`-role `LOGIN`/`NOLOGIN` confirmation; added Edge Function/`pg_net` availability and credential-provisioning confirmation).
- **§21 Testing and Verification Matrix** — "Scheduler procedure semantics" row renamed "Scheduler run semantics" with a corrected description covering fault isolation, crash recovery, and starvation prevention.
- **§22 Traceability Matrix** — MC-VRF-003 row updated to cite the Pattern A model and `report1.14.md` §6 Defects A–C.
- **§24 Engineering Questions and Risks** — Question 4 renamed ("scheduler worker run interval and lag budget"); Question 7 narrowed (Edge Function/`pg_net` availability only, `LOGIN`/`NOLOGIN` ambiguity resolved); Blocking Issues paragraph updated accordingly.
- **§26 Definition of Done** — scheduler release gate replaced (Edge Function availability/credentialing and no-internal-transaction-control confirmation, replacing the `PROCEDURE`/per-iteration-`COMMIT` gate).
- **§27 Document Change Log** — new Version 2.2 row appended, documenting every correction above.

No other section was modified.

---

## 12. Confirmation — MC-VRF-001, MC-VRF-002, MC-VRF-004 Through MC-VRF-010 Not Reopened

Every edit above is either (a) inside Section 12 or Section 5.3 directly, or (b) a narrowly scoped wording-consistency edit in Sections 4, 7, 16, 18, 20, 21, 22, 24, and 26 strictly required because those sections previously *described* the now-corrected `PROCEDURE`/`claimed_at` model in passing (e.g., an executor-identity table row naming the old operation, a metrics sentence attributing counts to the old mechanism). No edit altered:

- the Layer 1/2/3 identity-separation architecture itself (MC-VRF-001) — only the `catalog_scheduler_service` row's *description* of how it connects, not the layer model;
- the eight command-group-scoped owner roles or their privileges (MC-VRF-002) — `catalog_scheduler_executor`'s privileges are unchanged, only the functions it owns are renamed/split;
- the commit-not-exception rejection model, D-068 nine-step commit sequence, or simplified two-state idempotency-key status (MC-VRF-004);
- the confirmation-receipt table, stable command idempotency key, or channel dedup layering (MC-VRF-005);
- the same-actor-only confirmation rule (MC-VRF-006);
- the four-category failure classification (MC-VRF-007);
- the `authority_basis` provenance field or the outcome-of-record correction (MC-VRF-008);
- the `get_catalog_command_outcome` server-derived-scope signature (MC-VRF-009);
- the closed file-scanning purpose/status matrix (MC-VRF-010).

`MC-VRF-001, MC-VRF-002, MC-VRF-004 THROUGH MC-VRF-010: NOT REOPENED — CONFIRMED UNCHANGED IN SUBSTANCE.`

---

## 13. Confirmation — Product Truth and Founder Decisions D-001–D-068 Unchanged

```text
PRODUCT TRUTH CHANGE: NONE
D-001–D-068: UNCHANGED
D-047 TENURE INTERPRETATION: PRESERVED (Section 9, verbatim, untouched by this correction)
APPROVED SEQUENCING: UNCHANGED
FOUNDER DECISION CREATED: NO
FOUNDER DECISION MODIFIED: NO
```

This correction is exclusively an engineering-implementability fix to the scheduler's internal transaction mechanics. It does not alter merchant-visible behavior, permissions, confirmation rules, idempotency ordering, audit-authority fields, file-scanning rules, channel behavior, or frontend contracts, consistent with instruction1.15.md §11.

---

## 14. Unresolved Environment Assumptions

- **Supabase Scheduled Edge Function or `pg_cron` + `pg_net` availability** in the actual deployed environment is not verified by this document-only correction and remains Engineering Question 7 (Section 24), flagged `SPECIALIST REVIEW REQUIRED` — to be confirmed during implementation, not assumed here.
- **`catalog_scheduler_service` credential provisioning** (a real, rotated connection credential held only by the Edge Function's own secure configuration) is specified as a migration-step requirement (Section 20, step 12) but not itself verified against a deployed environment by this correction.
- No other unresolved environment assumption was introduced. This EIS remains a design document; no deployment-environment verification has been performed as part of this instruction.

---

## 15. Final Author Disposition

```text
MC-VRF-003 CORRECTION COMPLETE — FOCUSED VERIFICATION REQUIRED
```

All three defects recorded in `report1.14.md` §6 (invalid exception-block transaction control; contradictory `claimed_at` durability; starvation risk) are resolved by the Pattern A external-worker model in EIS Section 12. The EIS now describes one coherent, internally consistent, implementable scheduler architecture with no reliance on transaction control inside a PL/pgSQL exception subtransaction. MC-VRF-001, MC-VRF-002, and MC-VRF-004 through MC-VRF-010 remain unchanged in substance. Product Truth, Founder Decisions D-001–D-068, approved sequencing, and the D-047 tenure interpretation are preserved unchanged. The EIS remains `DRAFT — REFINED, NOT LOCKED`; Founder EIS review, EIS Lock, implementation package creation, and implementation remain not authorized. This correction is submitted through a protected pull request for Mission Control's single-finding focused verification and has not been self-approved or self-merged.
