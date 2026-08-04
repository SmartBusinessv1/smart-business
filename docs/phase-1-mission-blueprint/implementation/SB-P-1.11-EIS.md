# SB-P-1.11 — Engineering Implementation Specification (EIS)

```text
STATUS: DRAFT — REFINED, NOT LOCKED
EIS VERIFICATION: PENDING
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.11 |
| Mission Name | Product Catalog & Pricing |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` (LOCKED — Sections 1–21) |
| Founder Decisions Covered | D-001 through D-068 |
| Document Type | Engineering Implementation Specification (EIS) |
| Document Version | 2.1 |
| Status | DRAFT — REFINED, NOT LOCKED |
| Author | Claude Code — Engineering Review and Implementation Specification |
| Governance Basis | SB-P-1.11 Product Blueprint (Builder Review resolved F3–F5, Engineering Review `READY FOR FOUNDER APPROVAL`, Founder Approval granted, Mission Control Blueprint Lock applied — `communication/live/report1.8.md`) |
| Structural and Engineering Precedent | `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` (LOCKED) |
| Prior Reviews | Stage 10 review (`report1.10.md`, `REFINEMENT REQUIRED`) → v2.0 refinement (`report1.11.md`) → Stage 10 refinement verification (`report1.12.md`, `REFINEMENT REQUIRED` — ten residual engineering-precision findings MC-VRF-001–010) |
| This Revision | Narrow second refinement authorized by `communication/live/instruction1.13.md`, resolving MC-VRF-001 through MC-VRF-010 only |
| Authorizing Instruction | `communication/live/instruction1.13.md` |

## 2. Purpose

This document translates the locked SB-P-1.11 Product Blueprint (Sections 1–21, Founder Decisions D-001–D-068) into an implementation-ready engineering specification.

The Product Blueprint remains the single source of product truth. Every engineering decision recorded here exists to implement a requirement already established in the locked Blueprint. Where any statement in this document could be read as introducing new product behaviour, the Product Blueprint prevails and this document is in error.

**This revision (Version 2.1)** is a narrow, scope-limited corrective pass resolving only the ten residual engineering-precision findings (MC-VRF-001 through MC-VRF-010) identified by the Stage 10 refinement-verification consolidation (`communication/live/report1.12.md`) and its four specialist reports. It does not reopen any finding the verification already accepted as resolved (Version 2.0's scheduled-price model, command-only write denial, action-specific permissions, D-068 preview/compare-and-commit architecture, idempotency-before-precondition ordering, the tenure-bounded D-047 predicate, cost/margin read protection, import hardening in principle, frontend determinism, or the D-047 engineering interpretation itself, which `report1.12.md` §5 explicitly confirmed as `RESOLVED — ENGINEERING INTERPRETATION CONFIRMED` and which this revision preserves unchanged).

No database schema, SQL migration, RPC implementation, Edge Function, webhook handler, AI prompt, Lovable build prompt, or frontend component is created by this document.

This EIS is a **draft, twice-refined but not locked**. It has not been independently verified against this revision, accepted, or locked. It does not authorize an implementation package, application code, database changes, or deployment.

## 3. Implementation Principles

Unchanged from Version 2.0, with three additions responding to this revision's corrections:

- **Catalog truth is not inventory truth.** No catalog table, function, or code path may write to `inventory_items` or `inventory_movements`, or treat a catalog-stored value as stock quantity. The SB-P-1.10 ledger remains the sole stock authority (Blueprint §1, §8 "Catalog Product"; D-001).
- **No silent price reinterpretation.** No code path may allow a previously entered numeric price to acquire a different per-unit meaning without explicit merchant confirmation (D-068).
- **Append-only value history is truly append-only.** A table declared immutable is never the target of an `UPDATE`. Where a transition must occur, it is modelled as a new immutable event plus a change to a separately designated, explicitly mutable current-state table.
- **Commands are the only write boundary.** No table carrying protected catalog, schedule, event, audit, import, or idempotency data grants direct `INSERT`/`UPDATE`/`DELETE` to any client-reachable role.
- **Command authority is narrow and function-group-scoped, not monolithic.** No single executor identity holds unrestricted DML across every protected table; privilege is partitioned by command group so that a defect or compromise in one function's authority cannot reach tables outside that function's legitimate purpose (Section 7 — MC-VRF-002, this revision).
- **Authentication and function ownership are distinct concerns.** A `NOLOGIN` role may own and execute `SECURITY DEFINER` functions but never itself authenticates a connection; wherever an external runtime or scheduled process must connect to the database, that connection uses a separately defined, genuinely login-capable service identity holding only `EXECUTE` privilege — never table DML (Section 7 — MC-VRF-001, this revision).
- **Expected rejections are committed outcomes, not aborted transactions.** A command's own validation, permission, stale-state, or conflict rejections are returned as a normal structured result within a transaction that commits — preserving durable rejection bookkeeping (token consumption, idempotency status) — while the protected business tables remain untouched because no write to them was ever attempted on that path. Only genuinely unexpected errors trigger an exception-driven full rollback, and only that class of failure becomes client-visible `UNKNOWN_OUTCOME` (Sections 10–11 — MC-VRF-004, this revision).
- **Preview and commit are separate, bound operations.** Any operation requiring merchant confirmation of consequential state (D-068 above all) is preceded by a non-mutating, server-authoritative preview that produces a single-use token binding the exact reviewed state; the commit recomputes and rejects on any drift.
- **Idempotency resolves before mutable-state evaluation.** For a given command call, actor and business are resolved first; the idempotency key and payload fingerprint are then checked before any precondition or stale-state evaluation runs.
- **Unknown outcomes are never reported as "nothing changed."** Only ambiguity arising *after* a protected command was actually dispatched may become `UNKNOWN_OUTCOME`; failures occurring before any protected command is invoked are a distinct, confidently-reportable category (`PRE_COMMAND_PROCESSING_FAILED`) precisely because no catalog write was ever attempted (Section 15 — MC-VRF-007, this revision).
- **Only the reviewing actor may confirm what they reviewed.** A pending action created for one verified actor may be confirmed only by that same actor; there is no delegated or alternate-confirmer path in this mission (Section 15 — MC-VRF-006, this revision).
- **Permission-first design, action-specific.** Every catalog action checks the single, independently governed permission flag that Blueprint §8 "Permissions" assigns to it.
- **Business isolation extends to references, not only rows, and scope is never caller-chosen.** Every stored reference to an external object is bound to its owning business through a verifiable, business-scoped record; every read of business-scoped state — including idempotency-outcome lookups — derives that scope server-side from verified identity, never from a caller-supplied parameter (Section 11 — MC-VRF-009, this revision).
- **Default-deny on unprovable state.** Where a governed dependency check cannot be conclusively evaluated, the command denies the action rather than proceeding on an optimistic assumption.
- **Auditability with standardized, complete provenance.** Every meaningful catalog change is traceable to a responsible actor, actor type, channel, request, authority basis, and outcome, using the same provenance shape across every dedicated event table (Section 5.0 — MC-VRF-008, this revision).
- **Mandatory scanning cannot be opted out of by purpose mislabeling.** For every purpose this EIS defines, linking, parsing, previewing, or applying a file is permitted only when its safety scan result is affirmatively `clean` (Section 14 — MC-VRF-010, this revision).

## 4. Architecture and Scope Map (EIS §8.1)

Unchanged from Version 2.0 in substance. The Repository Components Affected table gains the following v2.1 additions, replacing the single `catalog_command_executor` line:

| Layer | New/revised in v2.1 |
|---|---|
| Execution identities | Eight narrow command-group `NOLOGIN` function-owner roles replacing the single `catalog_command_executor` (Section 7); two new `LOGIN`-capable service-account roles (`catalog_channel_service`, `catalog_scheduler_service`) distinct from the `NOLOGIN` owners they invoke |
| Database | New `catalog_channel_confirmation_receipts` table (Section 5.10); `command_idempotency_key` added to `catalog_channel_pending_actions`; `claimed_at`/`run_id` fields added to `catalog_pending_price_schedules`; `authority_basis` field added to the Section 5.0 provenance block; `catalog_write_idempotency_keys.status` simplified to two terminal values |
| Commands | `activate_due_catalog_price_schedules` changed from a `FUNCTION` batch sweep to a `PROCEDURE` with per-iteration commit (Section 12); `get_catalog_command_outcome` signature changed to remove caller-supplied business scope (Section 11) |

Everything else in Section 4 (implementation boundaries, explicit exclusions, dependency map, phased delivery sequence) is unchanged from Version 2.0.

## 5. Data Model (EIS §8.2)

Implementation-grade entity definitions. No migration or SQL is authored here; this is a data dictionary. Unless stated otherwise below, every subsection is unchanged from Version 2.0.

### 5.0 Standardized Event Provenance Shape — Revised (MC-VRF-008)

Version 2.0's provenance block omitted a permission/authority-basis field and an outcome field despite Version 2.0 §18 claiming both were standardized. **Corrected block, applying to every dedicated event table (5.3–5.6):**

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `authorized_by_user_id` | uuid | Yes (system-only events) | The merchant/user who authorized this change. Null only for a purely system-executed event. |
| `executed_by_actor_type` | enum (`user`, `system`) | No | Distinguishes human-initiated from system-initiated execution. |
| `system_run_id` | uuid | Yes | Set only when `executed_by_actor_type = 'system'`; correlates to the scheduler run that performed the write (Section 12). |
| `channel` | enum (`dashboard`, `import`, `whatsapp`, `voice`, `photo`, `system`) | No | Originating channel. |
| `request_id` | uuid | No | Correlates to the originating command call attempt. |
| `authority_basis` | text | No | **New (MC-VRF-008).** The exact permission flag (Section 8) that authorized this specific write, e.g. `'catalog_price_manage'`, or `'system_scheduler'` for scheduler-executed events. Closes the gap between §18's claim and the actual schema. |
| `recorded_at` | timestamptz | No | Immutable system insertion time. |

**On "outcome" (MC-VRF-008):** a row in any of these dedicated event tables exists only when the change it describes actually took effect — rejections never produce a row here (no write was attempted on a rejection path; see Section 10's revised step model). An "outcome" field on these tables would therefore always read "completed" trivially and adds no information. The authoritative per-attempt outcome record — including rejected attempts — is `catalog_write_idempotency_keys.status` (Section 11), which is where Section 18's "outcome" claim now precisely applies. Section 18 is corrected accordingly to attribute "outcome" to the idempotency-key record, not to the dedicated event tables, resolving the internal inconsistency VER-SEC-003/MC-VRF-008 identified.

Cost values never appear in any of these provenance fields, in any log, or in any error/metric derived from them (Section 18).

### 5.1–5.2

Unchanged from Version 2.0.

### 5.3 Scheduled Price — Data Model Unchanged; Claiming Fields Added for the Corrected Scheduler (MC-VRF-003)

The `catalog_pending_price_schedules` / `catalog_price_schedule_events` / `catalog_selling_price_events` three-table model, its stable `UNIQUE (product_id)` constraint, and its write-command behavior (`schedule_...`, `cancel_...`, replacement-as-single-event) are **unchanged from Version 2.0** — this is one of the findings `report1.12.md` §7 explicitly accepted as resolved and this instruction (§17) prohibits reopening.

**Addition only:** `catalog_pending_price_schedules` gains two fields supporting the corrected per-schedule-commit scheduler model (Section 12):

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `claimed_at` | timestamptz | Yes | Set (and immediately committed) when `claim_due_catalog_price_schedules` selects this row within the scheduler procedure's current loop iteration |

No `claimed_by`/lock-recovery field is needed: because the corrected model (Section 12) processes and either activates-and-deletes or releases each row within one committed iteration before moving to the next, there is no window in which a row can be left in a stale "claimed but abandoned" state — a crash mid-iteration simply rolls back that one iteration's implicit transaction, leaving the row exactly as it was (not claimed), so it is naturally due again on the next run. `claimed_at` exists only as a transient marker within a single committed iteration, not as a durable claim-tracking mechanism.

### 5.4–5.9

Unchanged from Version 2.0, except: `catalog_write_idempotency_keys` (5.8) — see Section 11 for its revised, simplified status model (MC-VRF-004). No field is removed from its Version 2.0 shape; `status` is now typed as an enum with exactly two values instead of an open-ended set.

### 5.10 `catalog_channel_pending_actions` and New `catalog_channel_confirmation_receipts` (MC-VRF-005)

`catalog_channel_pending_actions` gains one field:

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `command_idempotency_key` | uuid | No | **New (MC-VRF-005).** Generated once, at pending-action creation, `DEFAULT gen_random_uuid()`. Passed unchanged to the underlying protected command on every confirmation attempt, regardless of how many times the confirming webhook is redelivered. Distinct from `request_id` (Section 5.0), which is generated fresh per call attempt for tracing only. |

Every other field on `catalog_channel_pending_actions` is unchanged from Version 2.0, including `originating_channel_event_id` and its `UNIQUE (channel, originating_channel_event_id)` constraint, which continues to deduplicate only the *initiating* inbound message.

**New table `catalog_channel_confirmation_receipts`** — deduplicates the separate, later *confirming* message, which Version 2.0 incorrectly assumed was covered by the same constraint:

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `pending_action_id` | uuid | No | FK → `catalog_channel_pending_actions(id)` |
| `channel` | enum (`whatsapp`, `voice`, `photo`) | No | |
| `confirming_channel_event_id` | text | No | The confirming message's own channel-native event ID (distinct from `originating_channel_event_id`) |
| `received_at` | timestamptz | No | |

`UNIQUE (channel, confirming_channel_event_id)`. `confirm_catalog_pending_action` first attempts to insert this receipt; a unique-constraint conflict means this exact confirmation event was already processed, and the command returns the previously recorded outcome (looked up via the pending action's stable `command_idempotency_key` against `get_catalog_command_outcome`, Section 11) **without invoking the underlying protected command again** — satisfying "duplicate delivery... must not create a new command attempt" precisely. A confirmation retry that is not a literal duplicate webhook (e.g., the shared engine's own internal retry after a timeout, with no new inbound event) still safely reuses the same `command_idempotency_key` even without a new receipt row, so the underlying command's own idempotency-first check (Section 11) provides a second, independent layer of protection.

### 5.11–5.15

Unchanged from Version 2.0, except 5.11's enforcement is tightened — see Section 14 (MC-VRF-010).

## 6. Business Isolation and RLS Design (EIS §8.3)

Unchanged from Version 2.0 in every respect required by `report1.12.md` §7's acceptance of "denial of direct authenticated DML" as resolved. The RLS Policy Intent table's "INSERT/UPDATE/DELETE grant to `authenticated`" column remains **None** for every table, now additionally **None for every new v2.1 table** (`catalog_channel_confirmation_receipts`) for the same reason — no protected table grants direct DML to any client-reachable role.

## 7. Command Execution Identities and Authorization Architecture — Revised (MC-VRF-001, MC-VRF-002)

### The Version 2.0 Contradiction (MC-VRF-001)

Version 2.0 described `catalog_channel_executor` and `catalog_scheduler_executor` as `NOLOGIN` roles while also saying the shared conversational engine or `pg_cron` "authenticates" using their credentials. A PostgreSQL `NOLOGIN` role has no usable login credential and cannot authenticate a connection — the two claims cannot both be true. **This is corrected below by cleanly separating three distinct concerns that Version 2.0 conflated: the identity that authenticates a connection, the identity that owns and executes protected functions, and the mechanism by which the first reaches the second.**

### Layer 1 — External Runtime / Connection Identity (genuinely `LOGIN`-capable)

| Identity | Used by | Holds |
|---|---|---|
| `authenticated` (existing Supabase role) | Every dashboard/import merchant session | Its ordinary Supabase-Auth-issued JWT identity; `EXECUTE` grants on the merchant-facing command functions listed in Section 16 — **no table DML grant, unchanged from Version 2.0's already-correct posture for this path** |
| `catalog_channel_service` | The trusted backend service implementing the future shared conversational engine — never a client, model, or public endpoint | A real, rotated connection credential (API key or database connection string held only by that backend service's own secure configuration); `EXECUTE` only on `create_catalog_pending_action`, `confirm_catalog_pending_action`, and the channel-permitted read commands (Section 16) — **no table DML grant** |
| `catalog_scheduler_service` | Whatever mechanism actually opens the database connection to invoke the scheduler — a Supabase-managed `pg_cron` job configured to run as this role, or, if the deployed environment's `pg_cron` model instead executes its background worker without requiring the job's configured role to itself hold `LOGIN` (a documented `pg_cron` behavior for its internal, non-client worker connection — confirm against the actual deployed Supabase/PostgreSQL version during implementation rather than assuming either way here) | `EXECUTE` only on `CALL activate_due_catalog_price_schedules()` (Section 12) — **no table DML grant** |

No identity in this layer holds any protected-table DML privilege. This is the layer where genuine authentication happens, and it is the only layer where credentials exist at all.

### Layer 2 — `NOLOGIN` Function-Owner Roles (own privilege, never authenticate)

Eight command-group owner roles (Section 7's revised command-authority model, below) plus `catalog_channel_executor` and `catalog_scheduler_executor` (retained as owner-only role names, now unambiguously scoped to ownership, never described as authenticating). Every function these roles own is `SECURITY DEFINER`; PostgreSQL's standard `SECURITY DEFINER` semantics automatically execute the function body as its owning role regardless of which Layer 1 identity called it, **so no explicit `SET ROLE` step is required for this pattern** — this is the "controlled function invocation" boundary instruction §7 asks for, and it is simply the ordinary, well-understood `SECURITY DEFINER` mechanism, not a bespoke role-assumption procedure.

### Layer 3 — The Invocation Boundary Itself

`GRANT EXECUTE` from a Layer 2 owner's function to the specific Layer 1 identity that is allowed to call it (`authenticated` for dashboard/import functions; `catalog_channel_service` for channel functions; `catalog_scheduler_service` for the scheduler procedure) is the entire controlled-invocation mechanism. No identity in Layer 1 is ever granted `EXECUTE` on a function outside its own narrow list, and no identity in Layer 2 is ever granted a connection credential.

### Why This Resolves MC-VRF-001's Four Required Outcomes

- No `NOLOGIN` role is described as authenticating with credentials — Layer 2 roles never authenticate; only Layer 1 does.
- Credentials belong only to a valid login-capable runtime identity — exactly Layer 1, and only Layer 1.
- Privilege ownership and execution boundaries are explicit — Layer 2 owns table privilege; Layer 1 owns only `EXECUTE`; Layer 3 states exactly which Layer 1 identity may call which Layer 2 function.
- Service-role access does not become unrestricted merchant authority, and all runtime authority remains business-bound and permission-checked — unchanged from Version 2.0: `catalog_channel_service`/`catalog_scheduler_service` hold no `service_role`-equivalent blanket privilege, and every Layer 2 function independently re-verifies current business membership and permission inside its own body (Section 8), regardless of which Layer 1 identity invoked it.

### Least-Privilege Command Authority — Revised (MC-VRF-002)

Version 2.0's single `catalog_command_executor` held full DML across every Section 5 table — broader than any individual command family needs, and a defect in one function's logic could theoretically reach tables that function has no legitimate reason to touch. **Version 2.0's single broad owner is replaced with eight narrow, command-group-scoped `NOLOGIN` owner roles**, each holding only the table privileges its own command group requires:

| Owner role (command group) | Commands owned | Exact table privileges |
|---|---|---|
| `catalog_identity_executor` | `create_catalog_product`, `update_catalog_product_identity`, `update_catalog_product_unit`, `create_catalog_category`, `archive_catalog_category` | `INSERT`/`UPDATE` on `catalog_products`, `catalog_categories`; `INSERT` on `catalog_audit_events`; `SELECT` on `catalog_file_references`; `INSERT` on `catalog_write_idempotency_keys` |
| `catalog_lifecycle_executor` | `archive_catalog_product`, `reactivate_catalog_product`, `delete_catalog_product` | `UPDATE` on `catalog_products` (status only); `INSERT` on `catalog_audit_events`, `catalog_deletion_records`; `INSERT` on `catalog_write_idempotency_keys`; `SELECT` (read-only, for dependency/eligibility checks, Section 23) on every other event table — **no write access to any table it does not own the lifecycle of** |
| `catalog_pricing_executor` | `record_catalog_selling_price_change`, `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price` | `INSERT` on `catalog_selling_price_events`, `catalog_pending_price_schedules`, `catalog_price_schedule_events`; `SELECT` on `catalog_products`; `INSERT` on `catalog_write_idempotency_keys` |
| `catalog_tax_executor` | `record_catalog_tax_change`, `update_business_tax_settings` | `INSERT` on `catalog_tax_events`; `INSERT`/`UPDATE` on `business_tax_settings`; `INSERT` on `catalog_write_idempotency_keys` |
| `catalog_cost_executor` | `record_catalog_reference_cost_change` | `INSERT` on `catalog_reference_cost_events` only, plus `SELECT` on `catalog_products` for the row lock; `INSERT` on `catalog_write_idempotency_keys` — **the narrowest role in the system, matching cost's status as the most protected field (D-014, D-016)** |
| `catalog_link_executor` | `preview_catalog_inventory_link_change`, `assign_or_replace_catalog_inventory_link`, `remove_catalog_inventory_link` | `INSERT` on `catalog_link_preview_tokens`, `catalog_product_link_events`; `INSERT` on `catalog_selling_price_events` (for `link_confirmed` events only); `UPDATE` on `catalog_products` (link/unit fields); `SELECT` on `inventory_items`, `inventory_movements` (read-only cross-mission reference, never written); `INSERT` on `catalog_write_idempotency_keys` |
| `catalog_import_executor` | `create_catalog_import_job`, `stage_catalog_import_rows`, `apply_catalog_import_valid_rows` | `INSERT`/`UPDATE` on `catalog_import_jobs`, `catalog_import_rows`; `SELECT` on `catalog_file_references`. **Deliberately holds no direct `catalog_products` privilege** — `apply_catalog_import_valid_rows` calls `create_catalog_product`/`update_catalog_product_identity` internally (an ordinary cross-function `EXECUTE` call, valid regardless of differing owners, since each function still runs under its own `SECURITY DEFINER` owner when invoked) rather than duplicating product-table access on a second role |
| `catalog_read_executor` | `catalog_product_read`, `catalog_products_list_batch`, `catalog_products_search`, `get_catalog_command_outcome` | `SELECT` only, across every table needed to assemble a permission-filtered response (Section 17); **zero `INSERT`/`UPDATE`/`DELETE` privilege on anything** |

Plus the two channel/scheduler owners from Layer 2 above (`catalog_channel_executor`, `catalog_scheduler_executor`), each retaining exactly the narrow privileges Version 2.0 already assigned them (Sections 12, 15) — those were correctly scoped in Version 2.0; only their Layer 1/authentication description needed correction.

**No single role holds unrestricted DML across Section 5.** The broadest role (`catalog_lifecycle_executor`) holds write access only to its own three tables and read-only access elsewhere strictly for eligibility evaluation — it cannot itself alter price, tax, cost, or link state.

### Function-Level Requirements (unchanged from Version 2.0, restated for the corrected role set)

`REVOKE EXECUTE ... FROM PUBLIC` on every function; explicit, minimal `GRANT EXECUTE` only to the specific Layer 1 identity that legitimately calls it; fixed `SET search_path = public`; fully schema-qualified object references; every function independently re-derives caller identity and re-checks current permission — never a cached or caller-supplied claim.

## 8. Permission-Engine Dependency (EIS §8.4)

Unchanged from Version 2.0 — `report1.12.md` §7 accepted "action-specific Manager permissions" as resolved, and this instruction (§17) prohibits reopening it. The eight permission flags (`catalog_view`, `catalog_product_manage`, `catalog_lifecycle_manage`, `catalog_price_manage`, `catalog_tax_manage`, `catalog_cost_manage`, `catalog_inventory_link_manage`, `sale_use`), history-read mapping, Owner defaults, enforcement locations, and temporary Owner-only sequencing are unchanged. Enforcement locations now correctly reference the eight-role command-authority model of Section 7 rather than Version 2.0's single-role model, with no change to which flag gates which action.

## 9. Catalog–Inventory Link Integrity (EIS §8.5)

Unchanged from Version 2.0. **The D-047 tenure-bounded predicate and its interpretation are unchanged and explicitly preserved** — `report1.12.md` §5, and all four specialist verification reports, independently confirmed `RESOLVED — ENGINEERING INTERPRETATION CONFIRMED` for the exact reading this EIS already used:

```text
Any authoritative inventory movement recorded during the current
product–inventory link tenure counts as linked stock-event history.

Inventory movements recorded before the current link tenure do not count.
```

Instruction §18 requires this interpretation to be preserved without reopening or escalating it; it is preserved verbatim. The item previously listed in Version 2.0 §22/§24 as "flagged for Mission Control/Founder confirmation" is now resolved per this disposition and is removed from the open-questions list (Section 24).

## 10. D-068 Atomic Safeguard — Commit-Step Model Corrected (MC-VRF-004)

### Preview Command

Unchanged from Version 2.0: `preview_catalog_inventory_link_change` remains non-mutating, produces a fingerprinted, single-use `catalog_link_preview_tokens` row (Section 5.9), and every value it resolves is unchanged.

### Commit Command — Corrected Transaction Semantics

Version 2.0 claimed every rejection path both "consumed the token" (a durable write) and was subject to "any exception at any step → full rollback" — these cannot both be true if rejection is implemented by raising an exception, since the exception would roll back the token-consumption write along with everything else. **The correction: expected rejections are not implemented as exceptions.**

```text
assign_or_replace_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid,
  p_confirmed_price numeric
) RETURNS catalog_command_result
```

Where `catalog_command_result` is a structured type distinguishing `status IN ('completed', 'rejected')` plus a `rejection_category` (populated only when `status = 'rejected'`) and a `result_ref` (populated only when `status = 'completed'`) — never a bare row or a thrown error for any *expected* condition.

1. **Auth and permission.** Resolve caller, re-check `catalog_inventory_link_manage` + `inventory_view`. A genuine permission failure at this step is itself a `rejected` result (category `PERMISSION_DENIED`), returned via the normal `RETURN` path below — not an exception — so it too commits its own idempotency bookkeeping (step 8).
2. **Idempotency-first (Section 11).** Existing matching key + matching fingerprint → return the original stored result (whatever it was, `completed` or `rejected`) immediately. Existing key + different fingerprint → `rejected`/`IDEMPOTENCY_CONFLICT`. New key → claim it (Section 11) and continue.
3. **Token resolution.** Missing/expired/consumed/mismatched-owner token → `rejected`/`STALE_STATE`.
4. **Row locks, deterministic order** (Section 9).
5. **Recompute-and-compare.** Any fingerprint mismatch → `rejected`/`STALE_STATE`.
6. **Confirmation completeness.** Missing required `p_confirmed_price` → `rejected`/`PRICE_CONFIRMATION_REQUIRED`.
7. **If every check above passed:** perform the atomic business writes (link event, price event if applicable, product update) — this is the *only* branch that writes to protected catalog tables.
8. **Finalize bookkeeping and RETURN, on every branch (steps 1–3, 5–7):** mark the preview token `consumed_at = now()` (whether the outcome was rejection or success); write the terminal `catalog_write_idempotency_keys` row with `status = 'completed'` or `status = 'rejected'` plus category; `RETURN` the structured result. **The transaction then commits normally** — there was no exception, so there is nothing to roll back; on a rejecting branch, the token-consumption and idempotency-rejection writes commit while the untouched protected tables simply have no new rows because none were ever written on that branch.
9. **Only a genuinely unexpected error** (a constraint violation the code did not anticipate, a deadlock victim, a connection failure, an out-of-memory condition) raises an exception, which rolls back the *entire* transaction — including any bookkeeping attempted in that same attempt — and is the *only* circumstance in which nothing durable is recorded for that specific attempt. This is precisely the case the client must treat as `UNKNOWN_OUTCOME` (Section 11): a subsequent `get_catalog_command_outcome` call finds no matching row at all (not a stale "in progress" row — see Section 11's simplified status model) and safely treats the situation as "this attempt never happened," permitting a same-key retry to proceed as a fresh attempt with no risk of duplication.

### All Four No-Change Failure Modes — Now Transaction-Coherent

| Mode | Mechanism |
|---|---|
| Cancellation | No preview-commit call occurs — nothing to reconcile |
| Incomplete confirmation | Step 6 → `rejected` result, committed normally, token consumed |
| Validation failure | Steps 1, 3, 5 → `rejected` result, committed normally, token consumed |
| Save failure | An unexpected exception during step 7's writes → full rollback of that attempt only; `UNKNOWN_OUTCOME` until reconciled |

A rejected token can never be reused (its `consumed_at` is durably set on the committing rejection path), and a merchant confirming again after any rejection category *other than* a system-level `UNKNOWN_OUTCOME` is, by design, required to obtain a fresh preview — the rejected token is already consumed and cannot be resubmitted.

## 11. Price, Tax, and Cost Write Integrity — Idempotency Model Corrected (MC-VRF-004, MC-VRF-009)

### Corrected Command Sequencing (unchanged ordering principle from Version 2.0; corrected status model)

1. Resolve actor and business.
2. Permission check.
3. **Idempotency resolution before mutable-state checks** — unchanged principle from Version 2.0. **Simplified status model (MC-VRF-004):** because every command now follows Section 10's "expected rejections commit normally, only unexpected errors roll back" pattern, `catalog_write_idempotency_keys.status` needs only two terminal values: `completed` (business write succeeded; `result_ref` populated) and `rejected` (a named rejection category; no business write occurred). **There is no durable `in_progress` or `pending` status** — a row that would have represented "in progress" either finishes and commits as one of the two terminal states, or its containing transaction aborts and the row vanishes with it. A concurrent caller using the same new key is blocked by the claim-row lock (below) only for the duration of the first caller's transaction, not by observing a persisted intermediate state.
   - Matching key + matching payload fingerprint → return the original stored result (`completed` or `rejected`) immediately.
   - Matching key + different payload fingerprint → `rejected`/`IDEMPOTENCY_CONFLICT`.
   - No matching key → claim it via `INSERT ... ON CONFLICT (business_id, operation, idempotency_key) DO NOTHING`; a conflict means a concurrent caller already claimed this exact new key — take `SELECT ... FOR UPDATE` on that claim row and wait for the first caller's transaction to finish, then return *that* committed result (which, per the simplified model, is always terminal — `completed` or `rejected` — never a stale "in progress" state to disambiguate).
4. Mutable-state precondition checks.
5. Writes (only on the success path) or rejection-result assembly (Section 10's model, applied identically to every command, not only D-068).
6. Finalize idempotency-key row and commit.

### `UNKNOWN_OUTCOME` Reconciliation — Unchanged Principle, Now Grounded in the Corrected Model

A generic transport/API failure with no server response is `UNKNOWN_OUTCOME`. Reconciliation via same-key retry or `get_catalog_command_outcome` is unchanged in behavior from Version 2.0, now precisely defined: the lookup returns exactly one of `not_found` (no committed attempt exists for this key — safe to proceed as if fresh, since per Section 10 an aborted attempt leaves nothing behind), `rejected` (with category), or `completed` (with `result_ref`) — three possible states, replacing Version 2.0's less precisely defined four-state sketch.

### `get_catalog_command_outcome` — Server-Derived Scope Only (MC-VRF-009)

Version 2.0's signature accepted a caller-supplied `p_business_id`, contradicting the "business scope is always server-derived, never caller-supplied" principle every other command in this EIS follows. **Corrected signature:**

```text
get_catalog_command_outcome(
  p_operation text,
  p_idempotency_key uuid
) RETURNS catalog_command_outcome
```

`business_id` is no longer a parameter. The function derives it exactly as every other command does: from `auth.uid()`'s current business membership (dashboard/import) or from the verified channel actor's current business membership (channel). The lookup is scoped to `(server_derived_business_id, p_operation, p_idempotency_key)`. A caller attempting to probe another business's idempotency keys — even with a syntactically valid key belonging to a different business — finds nothing, because the query is never scoped to a business the caller did not verify membership in; the result is indistinguishable from a genuinely nonexistent key (`not_found` either way), satisfying "cross-business guessing must return the same result as a missing record." Financial/sensitive fields in `result_ref`-resolved data remain subject to the same permission filtering as the original command's own response shape (Section 17).

### Remaining Write-Integrity Requirements

Unchanged from Version 2.0.

## 12. Scheduled Pricing and Timezone Handling — Scheduler Execution Model Corrected (MC-VRF-003)

### Storage Timezone, Business Timezone, Activation Interpretation, DST Safety, Missed-Run Recovery, Bounded Lag, Provenance

Unchanged from Version 2.0 — none of these were findings in `report1.12.md`, and instruction §17 prohibits reopening them.

### Corrected Transaction Model (MC-VRF-003)

Version 2.0 claimed an ordinary function invocation processing up to 500 rows could have "each claimed schedule activated in its own sub-transaction," which is not valid for a normal PL/pgSQL `FUNCTION` — a function executes entirely inside its caller's single transaction and cannot independently commit mid-execution. **Corrected: `activate_due_catalog_price_schedules` is defined as a PL/pgSQL `PROCEDURE`, not a `FUNCTION`.**

PostgreSQL (11+, available in Supabase's managed Postgres) permits a `PROCEDURE` invoked via a top-level `CALL` statement — which is exactly how `pg_cron` invokes it — to contain explicit `COMMIT` statements inside a loop, genuinely committing each iteration's work independently before proceeding to the next. This is the specific, correct mechanism that makes "bounded batching with per-row independent commit" actually implementable, and is why the scheduler is the one command in this EIS defined as a `PROCEDURE` rather than a `FUNCTION` — every other command remains a `FUNCTION` because it performs exactly one logical unit of work per call and needs no internal commit boundary.

**Procedure body, at the level of behavior (not literal code):**

```text
PROCEDURE activate_due_catalog_price_schedules()
  owned by catalog_scheduler_executor, invoked via CALL by catalog_scheduler_service

  LOOP up to 500 times:
    claim ← SELECT id FROM catalog_pending_price_schedules
             WHERE effective_at <= now()
             ORDER BY effective_at
             FOR UPDATE SKIP LOCKED
             LIMIT 1
    IF no claim found: EXIT LOOP  -- nothing more due this run
    mark claim.claimed_at = now()  -- transient marker, Section 5.3
    BEGIN  -- per-iteration exception scope
      lock the corresponding catalog_products row
      delete the claimed catalog_pending_price_schedules row
      insert one catalog_price_schedule_events ('activated') row
      insert one catalog_selling_price_events ('activated') row, linked via resulting_price_event_id
    EXCEPTION WHEN OTHERS THEN
      ROLLBACK  -- discards only this iteration's partial work; the row remains due
      log the failure with system_run_id and schedule id (Section 18)
      -- loop continues to the next due schedule; this one is naturally retried next run
    END
    COMMIT  -- durably finalizes this iteration; releases all locks it held
  END LOOP
```

### Why This Resolves MC-VRF-003's Every Required Element

- **Claiming:** `FOR UPDATE SKIP LOCKED` on a single row per iteration — unchanged mechanism from Version 2.0, now correctly scoped to one row at a time rather than an unbounded batch selection.
- **Lock ownership and expiry/recovery:** each iteration's lock is held only for that iteration's brief duration and is released at that iteration's `COMMIT` (success) or `ROLLBACK` (failure) — there is no "expiry" concept needed because there is no durable claim state that could go stale; a crashed run simply leaves not-yet-processed rows unclaimed and due again.
- **Batching:** the 500-iteration bound remains, now genuinely per-iteration-committing rather than an unproven "sub-transaction" claim.
- **Transaction boundary:** explicitly one `COMMIT`/`ROLLBACK` pair per due schedule, inside one top-level `CALL`.
- **Retry behavior:** a failed iteration is simply left due; the same schedule row is picked up by the *next* run automatically — no artificial retry counter or dedicated idempotency key is needed for this specific system sweep, because "the row still exists in `catalog_pending_price_schedules`" *is* the complete, sufficient signal that it has not yet been processed (unlike a merchant-facing command, which needs an idempotency key precisely because a merchant's retry could otherwise create a duplicate *new* logical action — the scheduler has no such ambiguity, since there is exactly one row per pending schedule and its deletion is the one-time, irreversible signal of processing).
- **Partial failure:** the `EXCEPTION WHEN OTHERS` block isolates one row's failure from every other row in the same run.
- **Stale schedules:** none can exist under this model — every row is either still pending (due or not-yet-due) or has been definitively activated; there is no intermediate state.
- **Bounded lag:** unchanged 1-minute polling / 5-minute budget from Version 2.0, now grounded in a transaction model that actually delivers per-row timeliness rather than one long-held batch transaction.
- **Audit provenance:** unchanged — `system_run_id` (one per `CALL` invocation, attached to every event the run produces), `authorized_by_user_id` carried forward from the original schedule, `executed_by_actor_type = 'system'`, now additionally `authority_basis = 'system_scheduler'` (Section 5.0).
- **Unknown outcome reconciliation:** not applicable to the scheduler's own internal loop — the loop's per-iteration commit *is* the reconciliation mechanism (a row is either committed-activated or still-pending; there is no ambiguous middle state to reconcile from the scheduler's own perspective). A merchant-facing read of a product's price state during an in-progress activation sees either the pre-activation or post-activation state cleanly, per ordinary transaction isolation, never a partial one.

## 13. Multilingual Normalization and Search, Tax-Mode Lock

Unchanged from Version 2.0. Not a subject of any MC-VRF finding; instruction §17 prohibits reopening.

## 14. CSV and Excel Import Architecture — File Scanning Closed (MC-VRF-010)

### File Binding, Structural/Resource Limits, Formula-Injection Neutralization, Quarantine/Retention, Job-Level Confirmation, Apply-Time Revalidation, Resumability

Unchanged from Version 2.0 — `report1.12.md` §7 accepted "import formula-injection and resource limits" as resolved in principle.

### Mandatory Scanning — Closed Purpose/Status Matrix (MC-VRF-010)

Version 2.0's linking check accepted `safety_scan_status IN ('clean', 'not_required')` for every purpose, even though both purposes it defines (`product_image`, `import_source`) are described elsewhere as always requiring a scan — an exploitable inconsistency if `not_required` were ever mis-assigned. **Corrected: a closed, explicit purpose-to-allowed-status matrix, enforced server-side at every point of use, not only at upload:**

| Purpose | Allowed `safety_scan_status` for linking, parsing, previewing, or applying |
|---|---|
| `product_image` | `clean` **only** |
| `import_source` | `clean` **only** |

**`not_required` is not a valid linking/parsing/previewing/applying state for any purpose this EIS currently defines.** The enum value remains available in `catalog_file_references.safety_scan_status` (Section 5.11) only for a hypothetical future purpose that might be explicitly added to this table with its own documented justification for skipping scanning — no such purpose exists today, and neither `product_image` nor `import_source` may ever use it.

**Server-side enforcement points**, each independently re-checking `safety_scan_status = 'clean'` at the moment of use rather than trusting a status recorded at upload time:

- `create_catalog_product`/`update_catalog_product_identity`, at the moment they accept an `image_ref` — reject with a stable category if the referenced file's current `safety_scan_status <> 'clean'`.
- `create_catalog_import_job`, at the moment it accepts a `file_ref` — same check before any parsing begins.
- `stage_catalog_import_rows`, re-checking the job's bound file's current scan status immediately before parsing (protects against a file being re-flagged after job creation but before staging, if the storage layer ever supports rescanning).

**Client-supplied purpose or scan status is never authoritative** — every check above reads `catalog_file_references`'s own server-recorded `purpose` and `safety_scan_status` columns; no command accepts a purpose or scan-status value as a direct call parameter that could override the stored record.

Rescan/replacement, retention/cleanup, business binding, and audit provenance for `catalog_file_references` are otherwise unchanged from Version 2.0.

## 15. WhatsApp, Voice, Text, and Photo Dependency — Channel-Authority Contract Corrected (MC-VRF-005, MC-VRF-006, MC-VRF-007)

### Channel-Authority Contract Steps 1–4

Unchanged from Version 2.0: verify inbound event and sender (shared engine's own responsibility); resolve canonical identity/business membership server-side; call `create_catalog_pending_action` (now also generating and storing `command_idempotency_key`, Section 5.10); present the durable text preview.

### Step 5 — Confirmation, Corrected for Deduplication and Same-Actor Enforcement

**Deduplication (MC-VRF-005):** on the merchant's confirming reply, `confirm_catalog_pending_action` first inserts into `catalog_channel_confirmation_receipts` (Section 5.10). A unique-constraint conflict (this exact confirming message already processed) short-circuits immediately: the command looks up the prior outcome via the pending action's stable `command_idempotency_key` (using `get_catalog_command_outcome`, Section 11) and returns it **without invoking the underlying protected command again**. Only a genuinely new confirming event proceeds past this check.

**Same-actor enforcement (MC-VRF-006):** Version 2.0's "confirming actor matches (or is otherwise separately authorized)" is corrected to the mandatory safe default instruction §12 requires:

```text
Only the same verified actor who received and reviewed the pending-action
preview may confirm that action.
```

`confirm_catalog_pending_action` requires `p_confirming_actor_user_id = catalog_channel_pending_actions.actor_user_id` **exactly** — any mismatch is an unconditional `rejected`/`ACTOR_MISMATCH` result (Section 10's committed-rejection model), with no exception and no alternate-authorization path. Every other required re-verification is unchanged: business membership, action-specific permission, pending-action ownership (now literally defined as this exact same-actor check), confirmation validity (not expired, not already consumed), and current authoritative state (via the underlying command's own preview-token recompute). **Delegated or alternate confirmation is explicitly out of this mission's scope** and would require separate Product Truth and permission authority if ever desired — this EIS does not define, imply, or leave room for such a path.

On a successful match and current-state validation, `confirm_catalog_pending_action` invokes the underlying protected command (e.g., `assign_or_replace_catalog_inventory_link`), passing through the stored `command_idempotency_key` and `preview_token_id` exactly as Version 2.0 specified.

### Duplicate Webhooks, Stale Confirmations, Revoked Permissions, Delayed Messages, Reply-Delivery Failure

Unchanged in substance from Version 2.0, now additionally covered at the confirmation-event layer by the new receipt table above (previously only the *initial* event was deduplicated).

### AI Assistance Boundaries, Voice Response Boundaries

Unchanged from Version 2.0 — `report1.12.md` §3/§7 confirmed AIW-006 and AIW-007 as `RESOLVED`.

### Failure Handling — Corrected Classification (MC-VRF-007)

Version 2.0 grouped media-download, transcription/OCR, and model-interpretation failures together with genuine post-dispatch command ambiguity under a single `UNKNOWN_OUTCOME` umbrella. This is corrected to the four stable categories instruction §13 requires:

- **`PRE_COMMAND_PROCESSING_FAILED`** — the failure occurred *before* `create_catalog_pending_action` was ever successfully called: media download failure, transcription failure, OCR failure, or model/interpretation failure during extraction. **No protected command was invoked; no `command_idempotency_key` exists yet for this attempt, because a pending action was never created.** Merchant-safe meaning, communicated exactly: *"No catalog change was submitted."* Safe to simply retry the processing step (re-download, re-transcribe, re-interpret) from scratch — there is no idempotency concern because nothing was ever dispatched.
- **`COMMAND_REJECTED`** — `create_catalog_pending_action` or `confirm_catalog_pending_action` (or the underlying protected command it invokes) returned a definitive terminal rejection (Section 10's committed-rejection model): validation, permission, stale state, `ACTOR_MISMATCH`, or `IDEMPOTENCY_CONFLICT`. This is a known, confirmed non-commit outcome — safe to state plainly, distinct from an ambiguous one.
- **`UNKNOWN_OUTCOME`** — reserved *exclusively* for ambiguity arising *after* a protected command was actually dispatched (`create_catalog_pending_action`, `confirm_catalog_pending_action`, or the command they invoke) and a transport/timeout failure prevented the caller from learning the result. Reconciled via same-key retry or `get_catalog_command_outcome`, exactly as Section 11 defines — never applied to a failure that occurred earlier in the pipeline, where no command was ever dispatched.
- **`CONFIRMED_SUCCESS`** — the command completed and the authoritative result is known.

Reply-delivery failure after a terminal result is, as in Version 2.0, purely a notification-layer retry — it never re-executes any command, since the command's outcome is already durably known before any reply is attempted.

### Deterministic Checks Before Expensive Processing

Unchanged from Version 2.0.

## 16. API, RPC, and Command Contracts (EIS §8.12) — Executor Column Revised

The command surface itself (operation names, purposes, authorization flags, idempotency behavior) is **unchanged from Version 2.0**. Only the "Executor identity" column changes, reflecting Section 7's eight-role least-privilege model in place of the single `catalog_command_executor`:

| Operation | Executor identity (v2.1) |
|---|---|
| `create_catalog_product`, `update_catalog_product_identity`, `update_catalog_product_unit`, `create_catalog_category`, `archive_catalog_category` | `catalog_identity_executor` |
| `archive_catalog_product`, `reactivate_catalog_product`, `delete_catalog_product` | `catalog_lifecycle_executor` |
| `record_catalog_selling_price_change`, `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price` | `catalog_pricing_executor` |
| `activate_due_catalog_price_schedules` (now a `PROCEDURE`, Section 12) | `catalog_scheduler_executor`, invoked only via `catalog_scheduler_service` (Section 7) |
| `record_catalog_tax_change`, `update_business_tax_settings` | `catalog_tax_executor` |
| `record_catalog_reference_cost_change` | `catalog_cost_executor` |
| `preview_catalog_inventory_link_change`, `assign_or_replace_catalog_inventory_link`, `remove_catalog_inventory_link` | `catalog_link_executor` |
| `create_catalog_import_job`, `stage_catalog_import_rows`, `apply_catalog_import_valid_rows` | `catalog_import_executor` (internally calls `catalog_identity_executor`'s functions for the actual product write) |
| `create_catalog_pending_action`, `confirm_catalog_pending_action` | `catalog_channel_executor`, invoked only via `catalog_channel_service` (Section 7) |
| `get_catalog_command_outcome` (signature revised, Section 11), `catalog_products_search`, `catalog_product_read`, `catalog_products_list_batch` | `catalog_read_executor` |

Every command's result shape distinguishes, at minimum: `completed` and `rejected` (with a stable category, per Section 10's model) — plus, client-side only, the inferred `UNKNOWN_OUTCOME` and `PRE_COMMAND_PROCESSING_FAILED` states that never appear as a server-returned command status (Section 15).

## 17. Frontend and Lovable Responsibilities (EIS §8.13)

Unchanged from Version 2.0 in every respect — `report1.12.md` §3 recorded the Frontend and Lovable specialist disposition as `VERIFIED — FRONTEND FINDINGS RESOLVED` with no residual finding, and instruction §17 prohibits reopening any of LF-01 through LF-08. The only consequence of this revision for the frontend is that the result categories it consumes now precisely match Section 10's `completed`/`rejected` model and Section 15's four-category failure classification — no frontend *contract* changes, since the frontend was already required to treat every rejection category as a distinct, stable, merchant-understandable state rather than a generic error.

## 18. Audit and Observability (EIS §8.14) — Provenance Claim Corrected (MC-VRF-008)

Section 18's claim is corrected to precisely match the Section 5.0 schema: every dedicated event table (5.3–5.6) and `catalog_audit_events` carry business, actor user (where applicable), actor type, authorizing user versus system executor, channel, **authority basis** (new field, Section 5.0), request/correlation ID, job/run ID for automated execution, recorded time, and effective time where applicable. **"Outcome" is not a field on these tables** (Section 5.0 explains why: their existence already implies success) — the authoritative per-attempt outcome record, including rejected attempts, is `catalog_write_idempotency_keys.status` (Section 11), which Section 18 now correctly identifies as the outcome-of-record.

Operational metrics (unchanged from Version 2.0): `IDEMPOTENCY_CONFLICT` and `STALE_STATE` rates; scheduler per-run processed/failed counts and lag (now correctly attributable to the `PROCEDURE` model's per-iteration exception log, Section 12); import structural-rejection counts; channel pending-action expiry/duplicate-webhook counts, now additionally including duplicate-confirmation-receipt counts (Section 5.10).

## 19. Security and Privacy (EIS §8.15)

Unchanged core list from Version 2.0, now additionally grounded in Section 7's three-layer identity model (rather than three flat roles) and the closed file-scanning matrix (Section 14):

- **Least privilege:** Section 7's eight command-group owners plus two channel/scheduler owners, none holding cross-group DML; two genuinely `LOGIN`-capable service accounts, each with `EXECUTE`-only privilege on one or two functions.
- **Command-only writes, cross-business scope never caller-chosen:** Sections 6, 11.
- **Protected cost/margin data:** `catalog_cost_executor` is now the narrowest role in the system by construction (Section 7), not only by response-shape omission (Section 17).
- **Mandatory scanning:** Section 14's closed matrix — no purpose this EIS defines may use `not_required`.
- Every other item is unchanged from Version 2.0.

## 20. Migration and Rollout Strategy (EIS §8.16)

Unchanged in shape, updated for the corrected identities and scheduler:

1–4. Unchanged.
5. RLS enabled at creation, no `INSERT`/`UPDATE`/`DELETE` grant to `authenticated` — unchanged.
6. **Ten execution identities created and privilege-scoped** (Section 7: eight command-group owners, `catalog_channel_executor`, `catalog_scheduler_executor`) plus **two genuinely `LOGIN`-capable service accounts** (`catalog_channel_service`, `catalog_scheduler_service`) provisioned with real, rotated credentials held only by their respective trusted external services — before any command referencing them is deployed.
7–11. Unchanged.
12. **Scheduler deployment additionally confirms** the deployed Supabase/PostgreSQL environment's `pg_cron` invocation model against Section 7's stated assumption (that the job's configured role need not itself hold `LOGIN` for `pg_cron`'s internal worker connection) before relying on it — an explicit environment-verification step this revision adds, since Version 2.0 did not surface this as something to confirm.
13. Production verification gates — Section 21's expanded test matrix.

## 21. Testing and Verification Matrix (EIS §8.17)

Unchanged from Version 2.0, with the following v2.1 additions:

| Area | v2.1 addition |
|---|---|
| **Execution-identity scoping** | Each of the eight command-group owners can write only its own assigned tables; a defect in one function cannot reach another group's tables even under a crafted input, verified by privilege inspection per role, not only by functional testing |
| **Scheduler procedure semantics** | A fault injected on one due schedule does not prevent any other due schedule in the same run from committing independently; a crash mid-procedure leaves already-committed activations intact and unprocessed schedules cleanly due again next run |
| **Rejection-commit coherence** | Every named rejection category (`STALE_STATE`, `PRICE_CONFIRMATION_REQUIRED`, `IDEMPOTENCY_CONFLICT`, `PERMISSION_DENIED`, `ACTOR_MISMATCH`, etc.) durably persists its idempotency-key row and (for D-068) its token consumption, verified by querying the database directly after a rejected call, not only by inspecting the client-visible response |
| **Channel dedup layering** | A redelivered initiating webhook returns the existing pending action without creating a second one; a redelivered confirming webhook returns the prior outcome without invoking the underlying command a second time; both are independently tested |
| **Same-actor enforcement** | A confirmation attempt from any actor other than the pending action's original `actor_user_id` is rejected unconditionally, including from an actor who independently holds the same permission flag |
| **Failure-category correctness** | A simulated media-download/transcription/OCR/model failure never produces a server-recorded idempotency-key row and is reported as `PRE_COMMAND_PROCESSING_FAILED`, distinctly from a simulated post-dispatch timeout, which is `UNKNOWN_OUTCOME` |
| **Outcome-lookup scope** | `get_catalog_command_outcome` called with another business's valid idempotency key returns the same result as an entirely nonexistent key |
| **Scan-status enforcement** | A file with `safety_scan_status = 'not_required'` cannot be linked as a `product_image` or `import_source` under any code path |

## 22. Traceability Matrix (EIS §8.18)

Version 2.0's matrix is preserved unchanged (every row remains accurate — no Version 2.0 traceability claim was invalidated by this revision) and extended with:

| EIS Section | Primary Founder Decisions | MC-VRF Finding(s) Resolved | Specialist Finding(s) | Future Verification Evidence |
|---|---|---|---|---|
| §7 (Layer 1/2/3 identity model) | — (engineering integrity) | MC-VRF-001 | NEW-SUPA-V2-01, VER-SEC-001 | Role-privilege and connection-model inspection |
| §7 (eight command-group owners) | — | MC-VRF-002 | NEW-SEC-V2-02 (VER-SEC-002) | Per-role privilege-boundary test |
| §12 (`PROCEDURE` scheduler model) | D-043 | MC-VRF-003 | NEW-SUPA-V2-02 | Per-iteration commit/fault-isolation test |
| §10 (commit-not-exception rejection model) | D-047, D-068 | MC-VRF-004 | NEW-SUPA-V2-03 | Rejection-durability test |
| §5.10, §15 (confirmation-receipt table, stable command key) | D-053, D-054 | MC-VRF-005 | AIWV-001 | Duplicate-webhook/duplicate-confirmation test |
| §15 (same-actor enforcement) | D-054 | MC-VRF-006 | AIWV-002 | Alternate-actor rejection test |
| §15 (four-category failure classification) | D-053, D-054 | MC-VRF-007 | AIWV-003 | Pre-command-vs-unknown-outcome classification test |
| §5.0, §18 (`authority_basis` field, corrected outcome claim) | D-064 | MC-VRF-008 | VER-SEC-003 | Cross-table provenance completeness test |
| §11 (`get_catalog_command_outcome` signature) | — | MC-VRF-009 | (Security/Permissions cross-domain finding) | Cross-business-guess indistinguishability test |
| §14 (closed scan-status matrix) | D-055–D-058 | MC-VRF-010 | VER-SEC-004 | Scan-status bypass-attempt test |

No material technical requirement introduced or corrected by this revision lacks a row above tracing it to its originating verification finding.

## 23. Conditional Hard Deletion — Closed Contract

Unchanged from Version 2.0, except the executor identity performing the eligibility evaluation is now `catalog_lifecycle_executor` (Section 7), which holds only `SELECT` on every dependency table it checks and `INSERT`/`UPDATE` on its own tables — consistent with Section 7's least-privilege redesign, with no change to the eligibility logic itself.

## 24. Engineering Questions and Risks

### Engineering Questions — Revised

| # | Question | Disposition | Notes |
|---|---|---|---|
| 1 | Exact `pg_trgm` similarity threshold and algorithm sufficiency | `SPECIALIST REVIEW REQUIRED` | Unchanged from v2.0 |
| 2 | Final CSV/Excel structural limits | `SPECIALIST REVIEW REQUIRED` | Unchanged from v2.0 |
| 3 | Final index set for every new table | `SPECIALIST REVIEW REQUIRED` | Unchanged from v2.0, now additionally covering `catalog_channel_confirmation_receipts` |
| 4 | `activate_due_catalog_price_schedules` polling interval and lag budget | `SPECIALIST REVIEW REQUIRED` | Unchanged values (1-minute polling / 5-minute budget), now grounded in the corrected `PROCEDURE` model (Section 12) |
| 5 | Shared permission-engine and shared conversational-engine sequencing and ownership | `REFINEMENT REQUIRED` (Mission Control sequencing decision) | Unchanged from v2.0 |
| 6 | Selling-unit/price treatment upon inventory-link removal | Resolved, `ACCEPTED AS WRITTEN` | Unchanged from v2.0 |
| 7 | **`pg_cron`'s exact invocation model for the scheduler's connecting role** (whether `catalog_scheduler_service` must itself hold `LOGIN`, or whether `pg_cron`'s internal worker mechanism permits a `NOLOGIN`-equivalent job role in the deployed Supabase environment) | **`SPECIALIST REVIEW REQUIRED`, new in this revision** | Section 7, Section 20 step 12; explicitly flagged as an environment-specific detail to confirm during implementation rather than asserted definitively here, consistent with not overclaiming a PostgreSQL/Supabase operational detail this EIS cannot verify without deployment access |

**Removed from this revision's list (resolved and preserved per instruction §18):** the D-047 "linked stock-event history" scope question from Version 2.0 §24 item 7 is now **closed** — `report1.12.md` §5 and all four specialist verification reports independently confirmed the tenure-bounded reading as the correct engineering interpretation, and instruction §18 requires this interpretation to be preserved without further escalation. It no longer appears as an open question.

**Retained from Version 2.0, unchanged:** the cross-mission observation regarding SB-P-1.10's direct-grant write pattern (Version 2.0 §24 item 8) remains noted transparently, out of this EIS's authorized scope, unchanged by this revision.

### Blocking Issues

None. Question 7 above is a new, narrow, environment-verification item (not a design gap) — Section 7's identity model is fully specified and correct under either possible answer to that question, since it only affects which of the two documented sub-models (LOGIN-required vs. NOLOGIN-sufficient for `pg_cron`'s worker) applies to `catalog_scheduler_service` specifically; it does not change the layered architecture itself.

### Non-Blocking Dependencies, Security Risks, Migration Risks, Operational Risks, Sequencing Risks, Technical-Debt Risks

Carried forward from Version 2.0 unchanged, with one addition: the "column-level cost/margin exposure" security risk is now further mitigated by `catalog_cost_executor`'s role-level narrowness (Section 7), not only by response-shape omission and command-only writes.

## 25. Mandatory Open-Parameter Dispositions — Stage 10 Consolidated

Unchanged from Version 2.0 — none of the seven Stage 10 open-parameter dispositions were the subject of any MC-VRF finding, and instruction §17 prohibits reopening them.

## 26. Definition of Done

Unchanged in substance from Version 2.0, with the following v2.1 additions as Phase 1 release gates: privilege inspection confirms each of the eight command-group owner roles holds exactly its specified table privileges and no others (Section 7); the scheduler's `PROCEDURE`/per-iteration-`COMMIT` model is confirmed valid against the actual deployed Postgres version before reliance; every rejection category is confirmed to durably persist its idempotency-key and token-consumption bookkeeping under injected-fault testing (Section 10); `get_catalog_command_outcome` is confirmed to accept no caller-supplied business parameter in its deployed signature.

## 27. Document Change Log

| Version | Description |
|---|---|
| 1.0 | Initial draft Engineering Implementation Specification, translating locked Product Blueprint SB-P-1.11 into an implementation-ready design, per `instruction1.9.md`. |
| 2.0 | Stage 10 refinement pass authorized by `instruction1.11.md`, resolving every accepted finding in `report1.10.md` and its four specialist reports. |
| 2.1 | Narrow second refinement authorized by `instruction1.13.md`, resolving MC-VRF-001 through MC-VRF-010 from `report1.12.md` (the Stage 10 refinement-verification consolidation) without reopening any previously verified finding. Key corrections: separated genuinely `LOGIN`-capable external/service-account identities from `NOLOGIN` function-owner roles across three explicit layers, resolving the executor-authentication contradiction (MC-VRF-001, Section 7); replaced the single broad `catalog_command_executor` with eight command-group-scoped least-privilege owner roles (MC-VRF-002, Section 7); redefined the scheduler as a PL/pgSQL `PROCEDURE` with genuine per-iteration `COMMIT`, replacing the invalid "sub-transaction" claim (MC-VRF-003, Section 12); corrected the D-068/command rejection model so expected rejections commit their own bookkeeping via a structured `RETURN` rather than an exception that would roll everything back, resolving the durable-evidence-versus-full-rollback contradiction and simplifying the idempotency-key status model to two terminal states (MC-VRF-004, Sections 10–11); added a dedicated confirmation-receipt table and a pending-action-scoped stable command idempotency key, closing the gap between initial-webhook deduplication and final-command idempotency (MC-VRF-005, Section 5.10, 15); replaced the undefined alternate-confirmer allowance with the mandatory same-actor-only default (MC-VRF-006, Section 15); split failure classification into four precise categories, separating pre-command processing failures from genuine post-dispatch `UNKNOWN_OUTCOME` (MC-VRF-007, Section 15); added the missing `authority_basis` provenance field and corrected Section 18's "outcome" claim to point at the idempotency-key record rather than the dedicated event tables (MC-VRF-008, Sections 5.0, 18); removed caller-supplied business scope from `get_catalog_command_outcome` (MC-VRF-009, Section 11); and closed the file-scanning purpose/status matrix so `not_required` cannot be used for any currently-defined purpose (MC-VRF-010, Section 14). The D-047 tenure-bounded interpretation, the Version 2.0 data model, action-specific permissions, D-068 preview architecture, and all frontend contracts are explicitly preserved unchanged. No Founder decision was created, modified, or reopened; no Product Truth changed. EIS remains DRAFT — REFINED, NOT LOCKED. |
