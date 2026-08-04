# SMART BUSINESS MISSION CONTROL

# SB-P-1.11 — Stage 10 Supabase and Backend Architecture Review

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Review Scope:** Section 4.1 — Supabase and Backend Architecture Review

**Reviewer:** 04_Supabase_Architecture

**Status:** COMPLETE — SPECIALIST REVIEW SUBMITTED

**Repository:** `SmartBusinessv1/smart-business`

**Synchronized Base Commit:** `b98fb214e9a0dd86fed5c80e737dd89ba48a9447`

**Reviewed EIS:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

**EIS Status During Review:** `DRAFT — MISSION CONTROL REVIEW REQUIRED`

---

## 1. Specialist Disposition

```text
REFINEMENT REQUIRED
```

The draft EIS is strongly aligned with the locked Product Blueprint and Founder Decisions D-001–D-068. Its separation of catalog truth from inventory truth, append-only history, command-layer authority, business isolation, D-047 boundary, and D-068 atomic safeguard are architecturally sound in principle.

However, multiple database and transaction details are not implementable safely as currently written. These findings do not change Product Truth. They require engineering refinement before the EIS can become implementation authority.

---

## 2. Review Basis

Reviewed against:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/instruction1.10.md`
- accepted SB-P-1.10 inventory and ledger precedent cited by the draft EIS
- active Supabase, Product Execution, AI Operations, Operational Profile, and Source 18 lifecycle governance

The Product Blueprint, Founder Product Decision Record, and draft EIS were treated as read-only.

---

# 3. Findings

## SUPA-1 — Pending Scheduled-Price Uniqueness Cannot Use `now()` in a Partial Index

- **Severity:** BLOCKING
- **EIS section and exact subject:** Section 5.3 — `catalog_selling_price_events`; pending scheduled-price uniqueness
- **Locked Blueprint / Founder trace:** D-013; Blueprint §8 “Scheduled Selling Price”
- **Repository or governance evidence:** PostgreSQL index predicates must use immutable expressions. `now()` is volatile and cannot provide the proposed partial-unique-index guarantee.
- **Finding type:** Actual implementation contradiction

### Finding description

The EIS proposes a partial unique index shaped as:

```text
UNIQUE (product_id)
WHERE event_type IN ('scheduled_created','scheduled_replaced')
AND superseded_by IS NULL
AND effective_at > now()
```

This cannot be implemented as a PostgreSQL partial unique index because `now()` is not immutable. Even apart from index creation, the meaning of membership would change as time passes without any row update, which an index cannot maintain as a time-driven state transition.

### Risk if unchanged

- migration failure;
- false confidence that D-013 is database-enforced;
- concurrent creation of multiple pending scheduled prices;
- activation and cancellation ambiguity.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Represent pending-state explicitly rather than deriving index membership from wall-clock time. Acceptable patterns include:

- immutable lifecycle status on the schedule row, such as `pending`, `activated`, `cancelled`, or `replaced`, with one partial unique constraint on `(product_id)` where status is `pending`; or
- a separate current pending-schedule table with one row per product, with immutable history events recorded separately.

The write command and activation job must row-lock the product or pending-schedule record, enforce one pending schedule transactionally, and preserve immutable event history.

### Product Truth confirmation

This recommendation preserves D-013 exactly and does not alter merchant-visible behavior.

---

## SUPA-2 — Append-Only Event Rows Conflict With Updating `superseded_by`

- **Severity:** BLOCKING
- **EIS section and exact subject:** Sections 3, 5.3, 10, and 11 — append-only history and `superseded_by`
- **Locked Blueprint / Founder trace:** D-011, D-013, D-037, D-064
- **Repository or governance evidence:** The EIS declares history rows immutable and denies UPDATE/DELETE, but later requires existing scheduled rows to be updated by setting `superseded_by`.
- **Finding type:** Actual contradiction

### Finding description

The EIS simultaneously requires:

- no update or delete of posted history rows; and
- cancellation, replacement, and activation to set the earlier schedule row’s `superseded_by` field.

These cannot both be true under the declared append-only architecture.

### Risk if unchanged

- implementation teams may weaken immutability to support state transitions;
- service-role mutation may become an undocumented bypass;
- audit history may depend on mutable historical rows;
- RLS and trigger behavior may contradict command behavior.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Choose one coherent append-only model:

1. Do not update prior events. Record cancellation, replacement, and activation as new rows referencing the earlier schedule event through an immutable `related_event_id` or `supersedes_event_id`; derive current schedule state from the event chain.

or

2. Separate mutable scheduling state from immutable history. Keep one current pending-schedule record that may transition under controlled commands, while recording every transition in an immutable price-history/event table.

Do not claim strict append-only protection while requiring ordinary updates to prior event rows.

### Product Truth confirmation

This is an engineering consistency correction only. The merchant still sees one pending price and complete immutable history.

---

## SUPA-3 — D-047 History Boundary Is Not Yet Defined as a Reliable Database Predicate

- **Severity:** HIGH
- **EIS section and exact subject:** Sections 5.6, 7, 9, and command contracts — assignment, replacement, and removal lock boundary
- **Locked Blueprint / Founder trace:** D-047 and D-068
- **Repository or governance evidence:** D-047 blocks mutation after either sales history or linked stock-event history exists, but the draft does not define the authoritative records, query, or lock sequence used to prove both conditions.
- **Finding type:** Missing implementation detail / cross-mission dependency

### Finding description

The EIS defines link history but does not fully define how the command atomically determines:

- whether any completed sale exists for the catalog product; and
- whether any inventory movement or linked stock event exists for the currently linked inventory item in the relevant relationship history.

Sales Workflow does not yet exist. Inventory movements do exist, but the exact interpretation of “linked stock-event history” must remain stable when links are assigned, removed, or replaced.

### Risk if unchanged

- one command may check only current link state while another checks historical links;
- replacement may be allowed after stock activity that should lock the relationship;
- future Sales Workflow may use a different predicate and require redesign;
- race conditions may allow history to appear between validation and commit.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Define an explicit lock-boundary contract:

- authoritative sources for sale-history and linked-stock-event-history checks;
- treatment of historical inventory links, not only the current link;
- row-lock and transaction ordering between product, current link state, and relevant inventory item;
- forward-compatible interface for Sales Workflow to expose an authoritative “has completed sale history” predicate without Catalog owning sales truth;
- default-deny behavior while a required dependent predicate is unavailable.

The link command must perform all available checks inside the same transaction immediately before mutation.

### Product Truth confirmation

The recommendation implements D-047 and D-068 without changing their boundary.

---

## SUPA-4 — D-068 Atomic Safeguard Needs an Explicit Compare-and-Commit Contract

- **Severity:** HIGH
- **EIS section and exact subject:** Section 9 — first-time assignment and permitted replacement safeguard
- **Locked Blueprint / Founder trace:** D-068
- **Repository or governance evidence:** The Blueprint requires cancellation, incomplete confirmation, validation failure, or save failure to leave product, link, unit, and price unchanged.
- **Finding type:** Missing implementation detail

### Finding description

The EIS correctly requires one transaction and a row lock, but the server contract needs stronger stale-preview protection. A confirmation based on an earlier preview must not commit if any relevant state changed before confirmation, including:

- current inventory link;
- selling unit;
- current effective selling price;
- target inventory item base unit;
- D-047 history eligibility;
- product lifecycle state.

Idempotency prevents duplicate execution but does not prove that confirmation still applies to the state the merchant reviewed.

### Risk if unchanged

A valid but stale confirmation could reinterpret price or replace a link after another user changed the product between preview and commit.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Require the preview response to include an immutable confirmation token or expected-state fingerprint covering all D-068-relevant values. At commit, after locks are acquired, the command must recompute the fingerprint and reject on mismatch with no state change.

The commit transaction should lock in a deterministic order, at minimum:

1. product;
2. existing linked inventory item, if any;
3. proposed inventory item;
4. idempotency record or equivalent;
5. relevant current-price state.

Inventory items should be locked in stable identifier order where two are involved to avoid deadlock.

### Product Truth confirmation

This strengthens the approved no-silent-reinterpretation guarantee and does not add a new workflow.

---

## SUPA-5 — Scheduled-Price Activation Event Semantics Can Duplicate the Effective Price

- **Severity:** HIGH
- **EIS section and exact subject:** Sections 5.3 and 11 — `scheduled_created`, `scheduled_activated`, and current-price derivation
- **Locked Blueprint / Founder trace:** D-011, D-012, D-013, D-043
- **Repository or governance evidence:** The EIS describes both the scheduled-created row and a later scheduled-activated row as price events carrying values and effective times.
- **Finding type:** Missing implementation detail / data-model ambiguity

### Finding description

If both rows participate in current-price derivation, one logical scheduled change is represented twice. If only the activation row participates, the draft must define how pending display derives before activation and how the activation row references the schedule row. The current derivation language does not make this unambiguous.

### Risk if unchanged

- nondeterministic current price when timestamps tie;
- duplicated history entries that appear as two price changes;
- incorrect “latest effective row” selection;
- fragile activation retries.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Define separate concepts clearly:

- a pending schedule record/state containing proposed price and activation time; and
- one immutable effective-price event created exactly once when activation occurs.

Alternatively, if the scheduled-created event itself becomes effective at `effective_at`, then activation should record an operational transition without creating a second effective-price event. The current-price query must identify exactly one authoritative effective event for each logical price change.

### Product Truth confirmation

This preserves one scheduled price becoming one permanent price-history change.

---

## SUPA-6 — Scheduled Activation Should Not Depend on a Broad Service-Role Sweep

- **Severity:** HIGH
- **EIS section and exact subject:** Sections 6, 10, and 15 — service-role boundaries and `activate_scheduled_catalog_prices`
- **Locked Blueprint / Founder trace:** D-012, D-013, D-043; Source 12 least privilege and merchant isolation
- **Repository or governance evidence:** Service roles bypass RLS. The EIS identifies the activation sweep as cross-business and service-role-based.
- **Finding type:** Security and reliability improvement

### Finding description

A global service-role function may be valid operationally, but the current wording is broader than necessary and does not state a strict function-level privilege boundary, row-count limit, failure isolation, or per-business audit context.

### Risk if unchanged

- one defect could affect multiple businesses;
- accidental invocation surface could be broader than intended;
- long transactions and lock contention may grow with due schedules;
- one failing row could block unrelated businesses.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Specify that scheduled activation runs only through a narrowly granted database function or trusted backend command, with:

- no general table write privilege for the scheduler role;
- fixed search path and explicit schema qualification;
- bounded batch processing;
- row locking with `SKIP LOCKED` or equivalent safe work claiming where appropriate;
- per-row or per-product failure isolation;
- deterministic ordering;
- business-scoped audit attribution to system activation;
- retry-safe state transition;
- no exposure to merchant clients.

### Product Truth confirmation

No product behavior changes. This limits operational authority to the approved scheduling purpose.

---

## SUPA-7 — Tax Pricing-Mode Lock Cannot Be a Static Table Constraint Against Future Sales

- **Severity:** HIGH
- **EIS section and exact subject:** Section 5.9 — `business_tax_settings.pricing_mode`
- **Locked Blueprint / Founder trace:** D-019, D-060, D-061
- **Repository or governance evidence:** A PostgreSQL CHECK constraint cannot query future Sales tables or enforce a cross-table “no completed sales exist” condition.
- **Finding type:** Actual implementation contradiction

### Finding description

The EIS says `pricing_mode` has a write-time CHECK preventing change once any completed sale exists. This cannot be implemented as an ordinary CHECK constraint, and the future Sales table does not yet exist.

### Risk if unchanged

- migration authors may create a false or incomplete constraint;
- future Sales Workflow may bypass the intended lock;
- the setting may become mutable after completed sales.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Define this as a server-authoritative command invariant, not a table CHECK. The command must call an authoritative Sales-domain predicate once Sales exists. Until that predicate exists, Catalog may allow initial selection and pre-sales changes only under an explicit dependency contract. Future Sales implementation must be required to complete the integration before production sales are enabled.

If database-level enforcement is desired, use a controlled trigger or function that calls a stable shared predicate, not a CHECK constraint referencing another table.

### Product Truth confirmation

This implements D-061 without altering the approved pricing-mode rule.

---

## SUPA-8 — Generic Audit Events Lack Database-Enforced Entity Integrity

- **Severity:** MEDIUM
- **EIS section and exact subject:** Section 5.7 — `catalog_audit_events`
- **Locked Blueprint / Founder trace:** D-064 and D-065
- **Repository or governance evidence:** `entity_type` plus `entity_id` is polymorphic and cannot be protected by a normal foreign key.
- **Finding type:** Missing implementation detail

### Finding description

The generic audit table records product and category changes through a polymorphic reference. The draft does not state how it prevents:

- references to non-existent entities;
- cross-business entity references;
- unsupported `entity_type` values;
- orphaned deletion evidence.

D-065 additionally requires minimal audit retention after permitted hard deletion, which means ordinary FK cascade behavior would be incorrect.

### Risk if unchanged

Audit records may become orphaned, cross-business, or unresolvable, weakening meaningful change history.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Define one of these approaches explicitly:

- separate strongly typed audit tables for product and category events; or
- a generic audit table written only by controlled commands, with a closed entity-type constraint, database-enforced business consistency at write time, and deliberate snapshot fields sufficient for retained deletion evidence.

For D-065 deletion, record the minimal identity snapshot before deleting the live product and ensure the retained audit row does not depend on a cascading FK to the deleted entity.

### Product Truth confirmation

This preserves meaningful history and deletion evidence exactly as approved.

---

## SUPA-9 — Hard Delete Eligibility Must Cover All Dependency Tables Atomically

- **Severity:** HIGH
- **EIS section and exact subject:** Sections 5, 15, and lifecycle commands — `delete_catalog_product`
- **Locked Blueprint / Founder trace:** D-031 and D-065
- **Repository or governance evidence:** The EIS states deletion is rejected if dependent history exists but does not enumerate the full database predicate and transactional sequence.
- **Finding type:** Missing implementation detail

### Finding description

Deletion eligibility must account for every current and future dependency named by Product Truth, including at least:

- selling-price events;
- tax events;
- cost events;
- inventory-link events;
- generic audit events;
- import row references;
- scheduled price state;
- sale history when available;
- linked stock-event history under D-047;
- future governed references.

The D-065 minimal deletion record must be committed atomically with deletion.

### Risk if unchanged

A product could be deleted while history or references remain, or deletion could fail after the live row is removed but before audit evidence is preserved.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Create a closed deletion-eligibility contract owned by one command. It must:

1. lock the product;
2. evaluate every current dependency under the same transaction;
3. default to denial for unknown or unavailable governed dependency checks;
4. write the D-065 deletion audit snapshot;
5. delete only the eligible live row;
6. commit atomically.

Foreign-key behavior should default to `RESTRICT` rather than cascade for business-history tables.

### Product Truth confirmation

This enforces the approved conditional-deletion boundary without changing it.

---

## SUPA-10 — Import “Valid Rows Are Applied” Requires Clear Transaction and Retry Semantics

- **Severity:** MEDIUM
- **EIS section and exact subject:** Sections 5.10 and 13 — catalog import apply behavior
- **Locked Blueprint / Founder trace:** D-055, D-056, D-057, D-058
- **Repository or governance evidence:** The draft uses per-row idempotency but also describes applying valid rows and partial success.
- **Finding type:** Missing implementation detail

### Finding description

The EIS needs to state whether `apply_catalog_import_valid_rows` is:

- one transaction for the entire batch;
- one transaction per row; or
- bounded batches with resumable state.

One large transaction increases lock duration and rollback cost. Independent rows support partial success but require deterministic claiming and retry-safe row state.

### Risk if unchanged

- duplicate or skipped rows after timeout;
- two workers applying the same row;
- inconsistent job counters;
- excessive transaction duration for large files.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Use per-row or bounded-batch application through the ordinary catalog commands, with:

- row-level claim/lock state;
- unique `(import_job_id, row_number)`;
- one durable idempotency key per row action;
- atomic update of row terminal state and resulting product reference;
- counters derived or reconciled from row state rather than trusted as independent truth;
- safe resume after worker failure.

### Product Truth confirmation

The valid/quarantined/correction-queue experience remains unchanged.

---

## SUPA-11 — `actor_user_id` Cannot Be Mandatory for System-Activated Events Without a System-Actor Contract

- **Severity:** MEDIUM
- **EIS section and exact subject:** Sections 5.3–5.7 and scheduled activation auditability
- **Locked Blueprint / Founder trace:** D-011, D-037, D-064
- **Repository or governance evidence:** Scheduled activation is system-performed, but several event shapes require a non-null responsible user.
- **Finding type:** Data-model ambiguity

### Finding description

The EIS needs to distinguish:

- the merchant who authorized or scheduled a future change; and
- the system process that later activated it.

Using an arbitrary service user as the responsible user weakens audit meaning. Requiring an authenticated user at activation is impossible for cron.

### Risk if unchanged

- misleading audit attribution;
- nullable fields introduced ad hoc during implementation;
- inconsistent event contracts between immediate and scheduled changes.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Define an actor model with explicit fields or types, such as:

- `authorized_by_user_id` for the merchant who scheduled the change;
- `executed_by_actor_type = system` and optional system operation identifier for activation;
- `recorded_at` and correlation/request identifier.

System actor values must be closed and auditable, not free text.

### Product Truth confirmation

The merchant’s responsible authorization remains visible while system execution is represented accurately.

---

## SUPA-12 — Event-Link Removal Conclusion Is Acceptable, With One Required Invariant

- **Severity:** NOTE
- **EIS section and exact subject:** Mandatory open parameter 7 — inventory-link removal without D-068 price reconfirmation
- **Locked Blueprint / Founder trace:** D-047, D-050, D-051, D-068
- **Repository or governance evidence:** D-068 applies to first-time assignment or permitted replacement when the proposed inventory base unit changes the selling unit. Removal writes no proposed inventory unit or replacement price.
- **Finding type:** Scope note

### Finding description

The EIS conclusion is technically and product-wise acceptable: removal does not require a D-068-style price reconfirmation because it does not assign a new inventory unit or reinterpret the existing numeric price under a proposed replacement unit.

The resulting non-stock product must retain its current selling unit and selling price unless the merchant separately performs an authorized unit or price change.

### Risk if unchanged

Low, provided removal does not silently reset the unit to `piece` or derive a new unit.

### Required disposition

`ACCEPTED AS WRITTEN`, subject to explicitly preserving the current selling unit and price during removal.

### Recommended refinement

Add one sentence confirming that link removal preserves the product’s current selling unit and current selling price and creates only the approved link-removal history event.

### Product Truth confirmation

No Product Truth change.

---

# 4. Mandatory Open-Parameter Dispositions

| Parameter | Specialist disposition | Reason |
|---|---|---|
| 1. Multilingual similarity algorithm and threshold | `REFINEMENT REQUIRED` | `pg_trgm` is suitable for same-script typo assistance but not true Malayalam/Manglish/English cross-script equivalence. Treat cross-script assistance as optional best-effort and keep deterministic exact matching authoritative. Final threshold requires representative Kerala-language test data and query-plan validation. |
| 2. CSV/Excel row and file-size limits | `ACCEPTED AS WRITTEN` | 5,000 rows and 10 MB are reasonable initial engineering safety limits, provided they remain configurable operational parameters and parsing/application remains resumable rather than one large transaction. |
| 3. Final index selection and query-plan validation | `ACCEPTED AS WRITTEN` | Deferring final indexes to representative data plus `EXPLAIN ANALYZE` is correct. Required candidate coverage should include business-scoped normalized lookup, effective-price retrieval, pending schedule state, import row state, audit history, and link-history checks. |
| 4. Scheduled-price polling interval | `REFINEMENT REQUIRED` | The exact interval is an engineering parameter, but the EIS must define bounded activation delay, missed-run recovery, batch safety, and merchant-visible timing semantics before lock. A one-minute default is reasonable subject to operational validation. |
| 5. Shared permission-engine sequencing and ownership | `ACCEPTED AS WRITTEN` | Owner-only Phase 1 with default-deny Manager/Employee behavior is safe. Manager/Employee catalog access must remain blocked until the shared permission engine is separately implemented and verified. |
| 6. Shared conversational-engine sequencing and ownership | `ACCEPTED AS WRITTEN` | Dashboard-first delivery is safe. No catalog-specific conversational pipeline may be created. WhatsApp/voice/photo workflows remain blocked until the shared engine exists. |
| 7. Link removal without D-068 price reconfirmation | `ACCEPTED AS WRITTEN` | Removal assigns no new unit and therefore does not reinterpret price under a proposed unit. Current unit and price must be preserved. |

---

# 5. Positive Architecture Confirmations

The following architecture directions are accepted in principle:

- catalog and inventory remain separate domains;
- SB-P-1.10 ledger remains the only stock truth;
- one-to-one, business-scoped product–inventory linkage;
- composite business consistency requirements;
- append-only price, tax, cost, link, and audit history as a governing intent;
- owner-only safe sequencing before the shared permission engine;
- default denial of employee cost and management access;
- dedicated reference-cost table and permission-aware read contracts;
- command-layer writes instead of direct frontend mutation;
- durable, business-and-operation-scoped idempotency;
- dashboard-first sequencing before the shared conversational engine;
- server-side import parsing, preview, confirmation, quarantine, and correction queue;
- storage of business timestamps as `timestamptz` with IANA business timezone;
- query-plan-based index finalization;
- no direct inventory mutation from Catalog;
- D-068 as one server-authoritative atomic command.

---

# 6. Risk Summary

## Security

**Current risk:** HIGH until blocking findings are refined.

Primary risks:

- invalid scheduled-price uniqueness design;
- mutable history contradiction;
- broad service-role scheduling authority;
- incomplete hard-delete and D-047 predicates;
- stale-preview acceptance for D-068.

## Scalability

**Current risk:** MEDIUM.

The base domain model is scalable, but scheduled-price activation, import application, history queries, and possible-match search require bounded batch design and realistic query-plan validation.

## Reliability

**Current risk:** HIGH until refinement.

The event-state model and D-068 compare-and-commit contract must be made deterministic before implementation.

## Maintainability

**Current risk:** MEDIUM.

The EIS is comprehensive, but mutable schedule state, immutable history, generic audit events, and future Sales predicates need cleaner ownership boundaries to avoid divergent implementations.

---

# 7. Final Specialist Recommendation

```text
SPECIALIST DISPOSITION: REFINEMENT REQUIRED
EIS LOCK: NOT RECOMMENDED AT THIS TIME
PRODUCT TRUTH IMPACT: NONE
FOUNDER DECISION REQUIRED: NO
IMPLEMENTATION AUTHORITY: NONE
```

Mission Control should return the draft EIS to Claude Code under a separate refinement instruction limited to the findings accepted during Stage 10 consolidation.

The highest-priority refinements are:

1. replace the invalid `now()`-based pending-price index;
2. reconcile append-only history with schedule-state transitions;
3. define one unambiguous effective-price event model;
4. strengthen D-047 authoritative history predicates;
5. add stale-preview compare-and-commit protection to D-068;
6. narrow and batch scheduled activation authority;
7. replace the future-sales CHECK concept with a command/dependency invariant;
8. complete hard-delete, generic-audit, import, and system-actor contracts.

No EIS refinement, lock, implementation package, implementation, SQL, migration, RLS, Supabase, infrastructure, deployment, production, or governance change was performed.
