# SMART BUSINESS MISSION CONTROL

# SB-P-1.11 — EIS Refinement Verification: Supabase and Backend Architecture

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Verification Scope:** Supabase and Backend Architecture

**Reviewer:** 04_Supabase_Architecture

**Status:** COMPLETE — SPECIALIST VERIFICATION SUBMITTED

**Repository:** `SmartBusinessv1/smart-business`

**Synchronized Base Commit:** `935ccaffe8394467444c20b369755e14bb67fccc`

**Refined EIS Commit:** `0e16a7de5d51a1e49a0d78fe5a010ae617220a61`

**Refined EIS Version:** 2.0 — DRAFT, REFINED, NOT LOCKED

**Branch:** `mission/SB-P-1.11-stage12-supabase-backend-verification`

---

## 1. Specialist Disposition

```text
PARTIALLY VERIFIED — REFINEMENT REQUIRED
```

The refined EIS resolves the original scheduled-price model contradiction, removes direct authenticated DML paths, defines a strong D-068 preview and compare-and-commit contract, improves D-047 predicate and lock ordering, separates tax pricing-mode enforcement from invalid table constraints, closes deletion eligibility, strengthens imports, and standardizes audit provenance.

Three implementation-level contradictions remain before the EIS can safely proceed to lock:

1. the document calls executor roles `NOLOGIN` while also saying backend services or `pg_cron` authenticate through those roles' credentials;
2. the scheduler promises per-row independent commits inside one database function invocation without defining a PostgreSQL-valid transaction boundary;
3. rejection, token-consumption, and failed-idempotency outcomes are described as durable while other language says exceptions fully roll back the same transaction.

These are engineering corrections only. They do not alter Product Truth or Founder Decisions D-001–D-068.

---

## 2. Verification Basis

Verified against:

- `communication/live/instruction1.12.md`
- `communication/live/report1.10.md`
- `communication/live/report1.10-supabase-backend.md`
- `communication/live/report1.11.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- locked Product Blueprint and Founder Product Decision Record
- the accepted SB-P-1.10 inventory locking and ledger precedent cited by the EIS
- active Supabase, Product Execution, AI Operations, Operational Profile, and Source 18 governance

All authoritative and prior-review files were treated as read-only.

---

# 3. Original Supabase Finding Verification Matrix

| Original finding | Original severity | Refined EIS section and correction | Result | Remaining risk | Product Truth impact | Required next action |
|---|---|---|---|---|---|---|
| SUPA-1 — invalid `now()`-dependent pending-price uniqueness | BLOCKING | §5.3 introduces `catalog_pending_price_schedules` with stable `UNIQUE (product_id)` and removes wall-clock index membership | `RESOLVED` | None at specification level | None | No further refinement for this finding |
| SUPA-2 — append-only history contradicted by `superseded_by` updates | BLOCKING | §5.3 separates mutable pending state from immutable schedule and effective-price event ledgers; no `superseded_by` mutation remains | `RESOLVED` | None at specification level | None | No further refinement for this finding |
| SUPA-3 — D-047 boundary lacked an authoritative predicate and lock sequence | HIGH | §9 defines sale-history and tenure-bounded stock-history predicates and deterministic product/inventory lock ordering | `RESOLVED` | Future Sales integration must replace the named deterministic stub before production sales enablement | None | Preserve the future integration gate; D-047 interpretation disposition recorded in Section 7 below |
| SUPA-4 — D-068 lacked stale-preview compare-and-commit | HIGH | §§5.9 and 10 introduce server-issued preview tokens, actor/business binding, state fingerprints, expiry, row locks, recomputation, stale rejection, and atomic writes | `PARTIALLY RESOLVED` | Durable token consumption on rejection conflicts with full-rollback/exception language; see NEW-SUPA-V2-03 | None | Clarify transaction-safe rejection bookkeeping before lock |
| SUPA-5 — scheduled activation could create duplicate effective-price meaning | HIGH | §5.3 makes pending schedules current state, schedule transitions immutable history, and creates exactly one effective-price row at activation | `RESOLVED` | None at specification level | None | No further refinement for this finding |
| SUPA-6 — broad service-role scheduler | HIGH | §§7 and 12 replace service role with dedicated scheduler authority, bounded batches, claiming, audit attribution, and no client execution | `PARTIALLY RESOLVED` | `NOLOGIN` authentication contradiction and per-row commit ambiguity remain; see NEW-SUPA-V2-01 and NEW-SUPA-V2-02 | None | Refine executor/invoker model and valid transaction boundary |
| SUPA-7 — pricing-mode lock incorrectly described as a CHECK constraint | HIGH | §13 defines `update_business_tax_settings` command invariant and a named future Sales-domain predicate | `RESOLVED` | Future Sales mission must wire and test the predicate before sales production enablement | None | Preserve as non-bypassable future integration acceptance requirement |
| SUPA-8 — generic audit references lacked integrity | MEDIUM | §§5.0, 5.7, 5.13, 18, and 23 constrain writes to commands, standardize provenance, preserve snapshots, and avoid deletion-dependent FK requirements | `RESOLVED` | Detailed schema must implement closed entity/action vocabularies and business consistency as specified | None | Verify during migration design and testing |
| SUPA-9 — hard-delete eligibility incomplete | HIGH | §23 enumerates dependency checks, fail-closed behavior, product lock, snapshot-before-delete atomicity, and `ON DELETE RESTRICT` | `RESOLVED` | Future dependency-owning missions must extend the closed eligibility contract | None | Add cross-mission extension requirement to future dependent missions |
| SUPA-10 — import concurrency and retries under-specified | MEDIUM | §§5.12 and 14 add business-bound files, per-row claims, one active apply, apply-time revalidation, per-row idempotency, resumability, and derived counters | `RESOLVED` | Claim timeout/recovery values remain implementation parameters, not architectural gaps | None | Finalize limits and abandoned-claim recovery during detailed design |
| SUPA-11 — scheduler/system attribution incomplete | HIGH | §§5.0, 12, and 18 preserve human authorizer separately from system executor and attach `system_run_id`, channel, request, time, and outcome | `RESOLVED` | Executor-role authentication wording still requires correction; provenance model itself is sound | None | Resolve NEW-SUPA-V2-01 without changing event provenance |
| SUPA-12 — link removal and D-068 price reconfirmation | NOTE | §9 reaffirms removal preserves selling unit and price, writes no replacement unit/price, and remains D-047-gated | `RESOLVED` | None | None | Accept as written |

---

# 4. Consolidated Backend Finding Verification

| Consolidated finding | Verification result | Evidence summary |
|---|---|---|
| MC-EIS-001 — scheduled-price state and immutable history | `RESOLVED` | Stable pending-state table plus immutable schedule/effective ledgers; no volatile index or history mutation |
| MC-EIS-002 — protected writes not command-only | `PARTIALLY RESOLVED` | Direct authenticated DML is denied and commands are hardened, but executor owner versus authenticating invoker identity is internally contradictory |
| MC-EIS-003 — D-068 preview and compare-and-commit | `PARTIALLY RESOLVED` | Strong preview/fingerprint/lock model exists; rejection bookkeeping transaction semantics remain contradictory |
| MC-EIS-004 — idempotency ordering and unknown outcomes | `PARTIALLY RESOLVED` | Idempotency is checked before mutable preconditions and same-key reconciliation is defined; durable failed/rejected outcome persistence needs transaction clarification |
| MC-EIS-005 — D-047 enforceable predicate | `RESOLVED` | Named predicates, tenure boundary, fail-closed future integration behavior, and lock ordering are specified |
| MC-EIS-009 — scheduler privilege and audit design | `PARTIALLY RESOLVED` | Least-privilege intent and batch controls are strong; PostgreSQL-valid per-row transaction execution is not yet defined |
| MC-EIS-011 — file references/import security | `RESOLVED` | Business-bound file metadata, scan states, parser/resource limits, neutralization, revalidation, and resumability are defined |
| MC-EIS-013 — tax pricing-mode lock | `RESOLVED` | Correctly relocated to a command invariant with a versioned Sales predicate integration gate |
| MC-EIS-014 — hard delete and audit integrity | `RESOLVED` | Closed dependency predicate, fail-closed behavior, retained deletion snapshot, and restrictive FKs are specified |
| MC-EIS-015 — audit provenance | `RESOLVED` | Business, human authorizer, executor type, authority, channel, correlation, time, result, and system-run identity are standardized |

---

# 5. New Verification Findings

## NEW-SUPA-V2-01 — `NOLOGIN` Executor Roles Cannot Authenticate Using Credentials

- **Severity:** BLOCKING
- **EIS section and subject:** §7 execution identities; §12 scheduler identity; §20 rollout
- **Finding type:** New implementation contradiction

### Correction found

The refined EIS correctly separates command, channel, and scheduler authority and avoids broad `service_role` access.

### Verification issue

The same roles are described as:

- dedicated `NOLOGIN` function owners; and
- identities through whose credentials a trusted backend service or `pg_cron` authenticates.

A PostgreSQL role with `NOLOGIN` cannot authenticate and has no usable login credential. Function ownership and connection identity are separate concerns.

### Risk if unchanged

Implementation may either:

- grant `LOGIN` to a powerful function owner unnecessarily;
- expose broad table privileges to the backend connection role; or
- fail to provision a working execution path.

### Required refinement

Define two layers explicitly:

1. **Function-owner roles:** `NOLOGIN`, own hardened `SECURITY DEFINER` functions and hold only internal table privileges.
2. **Invoker/login roles or managed execution identities:** may authenticate where required and hold only `EXECUTE` on the exact approved functions, with no direct table DML.

For `pg_cron`, state the actual invocation model supported by the selected Supabase/PostgreSQL environment. Do not describe a credential belonging to a `NOLOGIN` owner.

### Product Truth impact

None.

---

## NEW-SUPA-V2-02 — Scheduler Per-Row Independent Commit Is Not Yet PostgreSQL-Implementable as Written

- **Severity:** HIGH
- **EIS section and subject:** §12 bounded batching and per-row isolation
- **Finding type:** New transaction-boundary ambiguity

### Correction found

The EIS correctly specifies bounded selection, deterministic ordering, `FOR UPDATE SKIP LOCKED`, retry-safe state transitions, missed-run recovery, and per-row failure isolation.

### Verification issue

The EIS says one invocation claims up to 500 schedules and that each claimed schedule activates in its own sub-transaction that can independently commit or roll back.

A normal PostgreSQL function runs inside one outer transaction and cannot independently commit each loop iteration. PL/pgSQL exception blocks can create rollback scopes, but they do not independently commit and release all row locks before the outer transaction ends. A stored procedure with transaction control has different invocation restrictions, and a backend worker invoking one command per row is another architecture.

### Risk if unchanged

- locks may remain held for the entire batch;
- one outer transaction may still roll back every successful row;
- `SKIP LOCKED` work claiming may not provide the stated recovery behavior;
- scheduler throughput and failure isolation may differ materially from the specification.

### Required refinement

Select one implementable model:

- an external/Edge Function or job worker claims a bounded set and invokes one atomic activation command per schedule;
- `pg_cron` invokes a procedure designed and validated for transaction control in the deployed environment; or
- one transaction processes a bounded batch, with the specification accurately describing rollback and lock duration rather than claiming independent commits.

Retain least privilege, idempotency, audit attribution, and bounded lag regardless of the chosen model.

### Product Truth impact

None.

---

## NEW-SUPA-V2-03 — Durable Rejection State Conflicts With Full-Rollback Exception Semantics

- **Severity:** HIGH
- **EIS section and subject:** §§10–11 D-068 token consumption, idempotency claim lifecycle, failed outcomes, and `UNKNOWN_OUTCOME`
- **Finding type:** New transaction-consistency contradiction

### Correction found

The EIS correctly requires:

- idempotency resolution before mutable-state checks;
- same-key/same-payload replay returning the original result;
- payload mismatch returning `IDEMPOTENCY_CONFLICT`;
- token consumption after stale or incomplete confirmation;
- outcome lookup with `unclaimed`, `in_progress`, `completed`, or `failed`;
- all catalog business-state writes to remain atomic.

### Verification issue

The EIS also says:

- any exception at any step causes full rollback;
- token consumption remains committed on rejecting paths; and
- failed idempotency outcomes can be read later.

These outcomes cannot all occur in one transaction if rejection is implemented by raising an exception that rolls back the transaction. The token update and idempotency failure record would roll back with the protected business writes.

The D-068 sequence also says incomplete confirmation rejects before protected writes while the token should become single-use. That requires a controlled committed rejection result, not an unqualified transaction-aborting exception.

### Risk if unchanged

- stale or invalid tokens may remain reusable;
- outcome lookup may return `unclaimed` after a real rejected attempt;
- clients may repeat an action under a new preview when the original command state is uncertain;
- implementation teams may persist rejection state outside the intended atomic contract inconsistently.

### Required refinement

Define explicit command-result semantics:

- expected business rejections return a structured terminal result and commit only rejection bookkeeping (`consumed_at`, idempotency status/error category), while leaving product/link/price state unchanged;
- unexpected database/runtime exceptions roll back the complete transaction and are reported as `UNKNOWN_OUTCOME` unless independently reconciled;
- an idempotency claim state must distinguish at least `in_progress`, `completed`, and terminal `rejected/failed`, with a clear rule for abandoned claims after rollback or worker failure;
- same-key retry and outcome lookup behavior must be defined for each state.

The implementation may use one controlled transaction with non-exception result paths, or a separately justified durable-operation-record pattern. It must not claim durable rejection writes survive a full rollback without specifying how.

### Product Truth impact

None.

---

# 6. Mandatory Backend Verification Items

## Scheduled-price model

**Disposition:** `RESOLVED`

Confirmed:

- stable pending state with no time-dependent index membership;
- immutable history rows are never updated;
- cancellation, replacement, activation, and missed-run recovery are coherent at the domain-model level;
- one logical scheduled change creates one effective-price event;
- `UNIQUE (product_id)` prevents multiple pending schedules.

Scheduler transaction execution remains separately covered by NEW-SUPA-V2-02.

## Command-only authority

**Disposition:** `PARTIALLY RESOLVED`

Confirmed:

- no direct protected-table DML for `authenticated`;
- protected writes use narrow commands;
- safe `search_path`, schema qualification, explicit grants, and live authorization checks are specified.

Unresolved:

- function-owner and authenticating-invoker identities are conflated. See NEW-SUPA-V2-01.

## D-068 preview and commit

**Disposition:** `PARTIALLY RESOLVED`

Confirmed:

- server-authoritative, non-mutating preview;
- exact current/proposed merchant-visible state;
- actor, business, action, payload/state, permission, and expiry binding;
- lock-time recomputation and fingerprint comparison;
- stale-state rejection and fresh-preview requirement;
- protected product/link/unit/price writes are one atomic transaction.

Unresolved:

- durable token consumption and rejection outcome persistence require transaction-semantics clarification. See NEW-SUPA-V2-03.

## Idempotency and unknown outcomes

**Disposition:** `PARTIALLY RESOLVED`

Confirmed:

- matching known results are resolved before mutable-state checks;
- same key/payload returns original result;
- changed payload fails deterministically;
- generic transport uncertainty is `UNKNOWN_OUTCOME`;
- the same key is retained;
- reconciliation uses same-key retry or read-only outcome lookup;
- clients cannot claim no change without a definitive result.

Unresolved:

- persistent terminal rejection and abandoned/in-progress claim semantics are not fully coherent with full rollback. See NEW-SUPA-V2-03.

## Permission granularity

**Disposition:** `RESOLVED`

`catalog_product_manage` and `catalog_lifecycle_manage` are separate. Price, tax, cost, inventory link, and sale-use authority remain independently scoped.

## Import and storage safety

**Disposition:** `RESOLVED`

Business-bound file references, upload and safety states, parser constraints, compressed/uncompressed limits, formula neutralization, retention, cleanup, revalidation, idempotency, one-active-apply control, and resumability are specified.

## Audit provenance

**Disposition:** `RESOLVED`

The event model records business, human authorizer, executor type, authority basis, channel, correlation/request, recorded/effective time, outcome, and system run where applicable.

## Migration and index readiness

**Disposition:** `PARTIALLY RESOLVED`

The stable schedule constraint, tenant/index-critical subset, additive rollout, no-direct-DML checks, and migration ordering are sound. Executor role provisioning and scheduler execution architecture must be corrected before the migration design can be considered implementation-ready.

---

# 7. D-047 Interpretive Disposition

## Exact question

Whether "linked stock-event history" means:

1. every inventory movement occurring while the product is linked to the inventory item; or
2. only inventory movements tied to a future sale or purchase business event.

## Applicable authority

- D-047 locks assignment, removal, or replacement after linked stock-event history exists.
- D-068 applies only while the D-047 mutation remains permitted.
- The locked Blueprint does not narrow stock-event history to sale- or purchase-linked events.

## Specialist determination

```text
RESOLVED — ENGINEERING INTERPRETATION CONFIRMED
```

The refined EIS's tenure-bounded predicate is the faithful engineering interpretation:

- movements before the product's link tenure do not count because they were not linked to that product;
- any inventory movement during the active link tenure counts because the Blueprint says linked stock-event history without limiting the event's origin;
- narrowing the rule only to future sale/purchase-linked events would add a qualification not present in D-047 and could allow identity replacement after real stock activity occurred under the relationship.

This interpretation is conservative, deterministic, database-enforceable, and does not change merchant-visible Product Truth. A new Founder decision is not required.

The future Sales predicate remains separate: completed product sale history independently locks the relationship.

---

# 8. Unresolved Risks

1. **Executor provisioning risk:** an implementation may accidentally grant login or broad DML to a powerful function owner unless owner/invoker roles are separated.
2. **Scheduler reliability risk:** the stated independent per-row commit behavior may not exist under the chosen `pg_cron` function architecture.
3. **Reconciliation risk:** rejection bookkeeping may roll back, making token and idempotency state inconsistent with client-visible outcomes.
4. **Future integration risk:** Sales Workflow must wire both product sale-history and business pricing-mode predicates before production sales enablement.
5. **Cross-mission observation:** the EIS correctly avoids SB-P-1.10's direct-grant write pattern for new catalog tables. Any SB-P-1.10 review remains outside this mission.

---

# 9. Product Truth Assessment

- Product Blueprint changed: **NO**
- Founder Decision Record changed: **NO**
- D-001–D-068 altered: **NO**
- Product behavior redesigned: **NO**
- New Founder decision required: **NO**
- Build classification changed: **NO**

All remaining corrections concern PostgreSQL role mechanics, transaction boundaries, and durable operation-state semantics.

---

# 10. Final Specialist Recommendation

```text
FINAL SPECIALIST DISPOSITION:
PARTIALLY VERIFIED — REFINEMENT REQUIRED

D-047 DISPOSITION:
RESOLVED — ENGINEERING INTERPRETATION CONFIRMED

EIS LOCK RECOMMENDATION:
NOT READY FOR LOCK

FOUNDER DECISION REQUIRED:
NO

IMPLEMENTATION AUTHORITY:
NONE
```

A narrow EIS refinement should resolve only:

1. separation of `NOLOGIN` function owners from authenticating invoker identities;
2. one PostgreSQL-valid scheduler transaction/worker model;
3. durable rejection, token-consumption, idempotency-failure, and abandoned-claim semantics.

After those corrections, the backend architecture should be eligible for final re-verification without reopening the resolved data model, permission model, D-047 interpretation, D-068 merchant workflow, or Product Truth.

---

# 11. Scope and Repository Confirmation

Created only:

`communication/live/report1.12-supabase-backend.md`

No EIS, Product Blueprint, Founder Product Decision Record, prior report, code, test, database, SQL, migration, RLS, Supabase configuration, infrastructure, deployment, production, or governance file was modified.

The reviewer did not approve or merge its own pull request.
