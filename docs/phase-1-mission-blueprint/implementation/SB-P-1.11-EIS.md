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
| Document Version | 2.0 |
| Status | DRAFT — REFINED, NOT LOCKED |
| Author | Claude Code — Engineering Review and Implementation Specification |
| Governance Basis | SB-P-1.11 Product Blueprint (Builder Review resolved F3–F5, Engineering Review `READY FOR FOUNDER APPROVAL`, Founder Approval granted, Mission Control Blueprint Lock applied — `communication/live/report1.8.md`) |
| Structural and Engineering Precedent | `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` (LOCKED) |
| Prior Review | Source 18 Stage 10 EIS Review — `communication/live/report1.10.md` — `REFINEMENT REQUIRED`, four specialist reports (`report1.10-supabase-backend.md`, `report1.10-security-permissions.md`, `report1.10-ai-whatsapp.md`, `report1.10-lovable-frontend.md`) |
| This Revision | Stage 10 refinement pass authorized by `communication/live/instruction1.11.md`, resolving every accepted finding in `report1.10.md` |
| Authorizing Instruction | `communication/live/instruction1.11.md` |

## 2. Purpose

This document translates the locked SB-P-1.11 Product Blueprint (Sections 1–21, Founder Decisions D-001–D-068) into an implementation-ready engineering specification.

The Product Blueprint remains the single source of product truth. Every engineering decision recorded here exists to implement a requirement already established in the locked Blueprint. Where any statement in this document could be read as introducing new product behaviour, the Product Blueprint prevails and this document is in error.

**This revision (Version 2.0)** resolves every accepted finding from the Source 18 Stage 10 consolidated EIS review (`communication/live/report1.10.md`) and its four specialist reports. No accepted finding required a change to Product Truth. Every correction in this revision is an engineering-implementability fix: replacing an invalid database design, closing an authorization-bypass gap, or making a previously under-specified contract deterministic and testable.

No database schema, SQL migration, RPC implementation, Edge Function, webhook handler, AI prompt, Lovable build prompt, or frontend component is created by this document. Genuine open engineering-parameter choices are proposed with an explicit decision-gate for specialist confirmation during detailed design.

This EIS is a **draft, refined but not locked**. It has not been independently verified, accepted, or locked. It does not authorize an implementation package, application code, database changes, or deployment.

## 3. Implementation Principles

These principles govern every engineering decision in this specification, carried forward from the locked Blueprint, Section 20/21 of the Engineering Review, and strengthened by the Stage 10 review.

- **Catalog truth is not inventory truth.** No catalog table, function, or code path may write to `inventory_items` or `inventory_movements`, or treat a catalog-stored value as stock quantity. The SB-P-1.10 ledger remains the sole stock authority (Blueprint §1, §8 "Catalog Product"; D-001).
- **No silent price reinterpretation.** No code path may allow a previously entered numeric price to acquire a different per-unit meaning without explicit merchant confirmation (D-068).
- **Append-only value history is truly append-only.** A table declared immutable is never the target of an `UPDATE`, including for state-transition purposes. Where a transition must occur (e.g., a schedule being cancelled or activated), it is modelled as a new immutable event plus a change to a *separately designated, explicitly mutable* current-state table — never as a mutation of a row already declared immutable (Stage 10 Finding MC-EIS-001/002, SUPA-1, SUPA-2, SEC-PERM-004).
- **Commands are the only write boundary.** No table carrying protected catalog, schedule, event, audit, import, or idempotency data grants direct `INSERT`/`UPDATE`/`DELETE` to any client-reachable role. Every protected mutation occurs through a narrowly scoped, independently permission-checked command (Stage 10 Finding MC-EIS-002, SEC-PERM-002; Section 7 below).
- **Authority is always re-derived, never trusted.** No command accepts a caller-supplied business ID, actor ID, role, or permission claim as authoritative. Every command independently resolves current business membership and current permission from verified server-side state at the moment of execution, regardless of channel (Stage 10 Findings MC-EIS-002, MC-EIS-007, SEC-PERM-002, SEC-PERM-003).
- **Preview and commit are separate, bound operations.** Any operation requiring merchant confirmation of consequential state (D-068 above all) is preceded by a non-mutating, server-authoritative preview that produces a single-use token binding the exact reviewed state; the commit recomputes and rejects on any drift (Stage 10 Finding MC-EIS-003, SUPA-4, LF-01, LF-02, AIW-004).
- **Idempotency resolves before mutable-state evaluation.** For a given command call, actor and business are resolved first; the idempotency key and payload fingerprint are then checked before any precondition or stale-state evaluation runs, so a legitimate retry after a successful write returns the original result rather than a spurious rejection (Stage 10 Finding MC-EIS-004, SEC-PERM-005).
- **Unknown outcomes are never reported as "nothing changed."** A generic transport/API failure where commit status cannot be determined is an `UNKNOWN_OUTCOME`, resolved only by retrying with the *same* idempotency key or performing a read-only idempotency-outcome lookup — never by generating a new key for the same logical action, and never by asserting non-commit before a definitive result is established (Stage 10 Finding MC-EIS-004, LF-04, AIW-008; confirmed engineering direction, this revision).
- **Permission-first design, action-specific.** Every catalog action checks the single, independently governed permission flag that Blueprint §8 "Permissions" assigns to it — never a broad flag that collapses ordinary maintenance with lifecycle, financial, or linking authority (Stage 10 Finding MC-EIS-006, SEC-PERM-001).
- **Business isolation extends to references, not only rows.** Every stored reference to an external object (a file, a channel event, a pending confirmation) is bound to its owning business through a verifiable, business-scoped record — never an unconstrained text value (Stage 10 Finding MC-EIS-011, SEC-PERM-007).
- **Default-deny on unprovable state.** Where a governed dependency check (a D-047 history predicate, a hard-delete eligibility check) cannot be conclusively evaluated, the command denies the action rather than proceeding on an optimistic assumption (Stage 10 Finding MC-EIS-005, MC-EIS-014, SEC-PERM-006).
- **Auditability with standardized provenance.** Every meaningful catalog change is traceable to a responsible actor, actor type (human or system), channel, request, and time, using the same provenance shape across every dedicated event table — not by convention, and not inconsistently between tables (Stage 10 Finding MC-EIS-015, SEC-PERM-011; D-064).
- **Reuse before invention, corrected where precedent was unsafe.** Every new catalog component reuses an existing, approved pattern where that pattern is itself sound. Where the Stage 10 review found that a literal precedent (e.g., SB-P-1.10's direct-grant-plus-RLS write pattern) does not meet SB-P-1.11's stronger command-only requirement, this EIS explicitly diverges and states why (Section 7).

## 4. Architecture and Scope Map (EIS §8.1)

### Implementation Boundaries

Unchanged from Version 1.0: SB-P-1.11 implements catalog product and category entities; product identity, SKU, barcode, image, description with multilingual entry/display and normalization; one selling unit with inheritance from a linked inventory item; the product–inventory link including the D-068 atomic safeguard; selling price (current + one scheduled + immutable history); tax configuration; reference cost; product lifecycle; a shared, permission-aware audit-event mechanism; CSV/Excel import; and the catalog-side contract a future shared conversational engine must satisfy.

SB-P-1.11 does **not** implement the SB-P-1.10 inventory ledger, a generic Manager/Employee permission engine, or the shared WhatsApp/voice/photo conversational pipeline itself.

### Repository Components Affected (revised)

| Layer | New in v2.0 | Unchanged from v1.0 | Reused unmodified |
|---|---|---|---|
| Database | `catalog_pending_price_schedules`, `catalog_price_schedule_events`, `catalog_link_preview_tokens`, `catalog_channel_pending_actions`, `catalog_file_references`, `catalog_deletion_records`, provenance columns on every event table | `catalog_products`, `catalog_categories`, `catalog_selling_price_events` (redefined shape), `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_write_idempotency_keys`, `catalog_import_jobs`, `catalog_import_rows`, `business_tax_settings`, `businesses.timezone` | `businesses` (other columns), `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, RLS pattern, `system_errors` |
| Execution identities | `catalog_command_executor`, `catalog_channel_executor`, `catalog_scheduler_executor` (three dedicated, narrowly-privileged roles — Section 7) | — | — |
| Commands | `preview_catalog_inventory_link_change`, `get_catalog_command_outcome`, `create_catalog_pending_action`, `confirm_catalog_pending_action`, revised `assign_or_replace_catalog_inventory_link` | All Version 1.0 commands, revised for command-only execution and corrected idempotency ordering | — |
| Frontend | Preview-driven D-068 confirmation flow, stale-state/unknown-outcome UI states, accessibility/stable-ID requirements | Route structure | `authed-header.tsx`, `use-auth.tsx` |

### Explicit Exclusions

Unchanged: unit conversion, packaging, variant hierarchy, multiple barcodes, scanning/labels, price tiers, discounts, multi-currency, margin calculation, richer bulk editing/export, custom POS modification, and any second stock-mutation path remain out of scope, matching Blueprint §11.

### Dependency Map (unchanged shape, updated to name the three execution identities)

```text
SB-P-1.10 Inventory Foundation (implemented, Owner-only)
        │  read-only reference (inventory_item_id link, base_unit)
        │  row-locked during D-047/D-068 evaluation (Section 9)
        ▼
SB-P-1.11 Catalog Core  ──────────────► buildable now (Phase 1, this EIS)
   executed via: catalog_command_executor (dashboard, import)
        │
        ├── depends on ──► Shared Permission Engine (not implemented anywhere)
        │                   → Phase 2a (Section 8)
        │
        ├── depends on ──► Shared Conversational Engine (not implemented anywhere)
        │                   executes via: catalog_channel_executor
        │                   → Phase 3 (Section 15)
        │
        └── extends ─────► file_import_jobs conceptual pattern (Source 02 §3.15A)
                            → Phase 2b (Section 14)

Scheduled activation executes via: catalog_scheduler_executor (Section 12)
```

### Phased Delivery Sequence

Unchanged from Version 1.0 (Phase 1 → Phase 2a/2b in parallel → Phase 3), now with the corrected technical contracts below making every phase implementable as specified rather than requiring redesign at build time.

## 5. Data Model (EIS §8.2)

Implementation-grade entity definitions. No migration or SQL is authored here; this is a data dictionary.

### 5.0 Standardized Event Provenance Shape (applies to every dedicated event table below)

Per Stage 10 Finding MC-EIS-015/SEC-PERM-011, every dedicated event table (5.3–5.6) carries this identical provenance block, in addition to its own value-specific fields:

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `authorized_by_user_id` | uuid | Yes (system-only events) | The merchant/user who authorized this change. Null only for a purely system-executed event (e.g., a scheduled activation with no human action at that instant — the *original* scheduling authorization is separately preserved, Section 12). |
| `executed_by_actor_type` | enum (`user`, `system`) | No | Distinguishes human-initiated from system-initiated execution. |
| `system_run_id` | uuid | Yes | Set only when `executed_by_actor_type = 'system'`; correlates to the scheduler/job invocation that performed the write (Section 12). |
| `channel` | enum (`dashboard`, `import`, `whatsapp`, `voice`, `photo`, `system`) | No | Originating channel. |
| `request_id` | uuid | No | Correlates to the originating command call. |
| `recorded_at` | timestamptz | No | Immutable system insertion time. |

Cost values never appear in any of these provenance fields, in any log, or in any error/metric derived from them (Section 18).

### 5.1 `catalog_products`

Unchanged from Version 1.0 in shape; unchanged fields not repeated here except where affected.

| Field | Type | Nullable | Constraint / Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | FK → `businesses(id)`; composite `UNIQUE (id, business_id)` |
| `name` / `name_normalized` | text | No | Unchanged — `UNIQUE (business_id, name_normalized)` |
| `description`, `category_id`, `sku`/`sku_normalized`, `barcode`/`barcode_normalized` | — | — | Unchanged |
| `image_ref` | uuid | Yes | **Revised (5.11):** FK → `catalog_file_references(id)`, composite `(image_ref, business_id)` → `catalog_file_references(id, business_id)`. No longer unconstrained text (Stage 10 Finding MC-EIS-011, SEC-PERM-007). |
| `inventory_item_id`, `selling_unit`, `status` | — | — | Unchanged |
| `created_by`, `created_at`, `updated_at` | — | — | Unchanged |

No `selling_price`, `reference_cost`, `tax_mode`, or `tax_rate` column — derived from the latest applicable event row, as in Version 1.0.

### 5.2 `catalog_categories`

Unchanged from Version 1.0.

### 5.3 Scheduled Price — Corrected Model (Stage 10 Findings MC-EIS-001, SUPA-1, SUPA-2, SUPA-5, SEC-PERM-004)

The Version 1.0 design used a single `catalog_selling_price_events` table with a `now()`-dependent partial unique index and later mutation of prior rows via `superseded_by`. Both are database-invalid. **Version 2.0 separates stable pending-schedule state from immutable effective-price history into two distinct tables plus a genuinely immutable schedule-transition log**, following the Stage 10-recommended pattern (SUPA-2 option 2 / SEC-PERM-004 option 2).

#### `catalog_pending_price_schedules` — mutable current-state table

Exactly one row exists per product with a pending (not-yet-activated, not-yet-cancelled) schedule. This table is **explicitly designated mutable** — it is never claimed to be append-only — and its rows are deleted (not updated-in-place to a terminal status) when a schedule activates, is cancelled, or is replaced; the transition itself is separately recorded immutably (below).

| Field | Type | Nullable | Constraint / Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | FK, composite consistency with `product_id` |
| `product_id` | uuid | No | FK; composite `(product_id, business_id)` → `catalog_products(id, business_id)`. **`UNIQUE (product_id)`** — a fully stable, non-volatile constraint with no time predicate; this alone enforces D-013's "at most one pending schedule" and is the direct fix for SUPA-1. |
| `scheduled_price` | numeric(12,2) | No | |
| `effective_at` | timestamptz | No | Must be `> created_at` at creation time (future-dated), re-validated at write time — see below |
| `created_at` | timestamptz | No | |
| `authorized_by_user_id` | uuid | No | The merchant who scheduled this price |
| `idempotency_key` | uuid | No | Of the `schedule_catalog_selling_price` (or replace) call that created this row |

#### `catalog_price_schedule_events` — immutable, append-only, never updated

Records every transition of a schedule's lifecycle as a permanent, standalone event. No field on any row in this table is ever modified after insert.

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id`, `business_id`, `product_id` | — | — | Standard |
| `event_type` | enum (`created`, `cancelled`, `replaced`, `activated`) | No | |
| `scheduled_price` | numeric(12,2) | No | The price this event's schedule referred to |
| `effective_at` | timestamptz | No | The scheduled instant this event's schedule referred to |
| `resulting_price_event_id` | uuid | Yes | FK → `catalog_selling_price_events(id)`; set only on `event_type = 'activated'`, linking to the one effective-price event it produced |
| *(standardized provenance block, Section 5.0)* | — | — | `authorized_by_user_id` is the merchant for `created`/`cancelled`/`replaced`; may be null with `executed_by_actor_type = 'system'` for `activated` |

No `UPDATE`/`DELETE` grant on this table for any role, enforced by the same trigger-rejection pattern as `inventory_movements_reject_mutation()`.

#### `catalog_selling_price_events` — immutable effective-price ledger, redefined

Now contains **only** rows representing an actual effective price (never a "proposed future" state). One logical scheduled change produces exactly one row here, written at the moment of activation — resolving SUPA-5's duplication ambiguity directly.

| Field | Type | Nullable | Constraint / Notes |
|---|---|---|---|
| `id`, `business_id`, `product_id` | — | — | Standard |
| `event_type` | enum (`immediate`, `activated`, `link_confirmed`) | No | No `scheduled_*` values remain here — those live in `catalog_price_schedule_events` |
| `old_price` / `new_price` | numeric(12,2) | old nullable on first event | |
| `effective_at` | timestamptz | No | For `activated`, equals the original scheduled instant, not the job's run time |
| *(standardized provenance block, Section 5.0)* | — | — | |

No `superseded_by` field. No `UPDATE`/`DELETE` grant. **Current price** = the single latest row by `effective_at` where `effective_at <= now()`, for the product — unambiguous, since only one row per logical change ever exists. **Pending scheduled price** = the (at most one) row in `catalog_pending_price_schedules` for the product, if any — read from a genuinely current-state table, not derived from history.

#### Write-Command Behavior Against This Model

- `schedule_catalog_selling_price`: row-locks the product, checks (via the stable `UNIQUE (product_id)` constraint, re-verified inside the transaction) that no pending schedule exists; inserts one `catalog_pending_price_schedules` row and one `catalog_price_schedule_events` (`created`) row, atomically.
- `cancel_scheduled_catalog_selling_price`: row-locks the product and the pending-schedule row (deterministic order: product row, then pending-schedule row); deletes the pending row; inserts one `catalog_price_schedule_events` (`cancelled`) row. No `catalog_selling_price_events` row (no price ever became effective).
- Replacement is modelled as cancel-then-create within one transaction, recorded as a single `replaced` event rather than separate `cancelled`+`created` events, preserving "one logical scheduled change."
- `activate_scheduled_catalog_prices` (Section 12): claims a due pending-schedule row (`FOR UPDATE SKIP LOCKED`), locks the corresponding product row, deletes the pending row, inserts one `catalog_price_schedule_events` (`activated`) row and exactly one `catalog_selling_price_events` (`activated`) row, links them via `resulting_price_event_id`, all atomically per schedule.
- Archiving a product with a pending schedule (Blueprint §8 "Scheduled Selling Price") internally invokes the same cancellation path — no duplicated logic.

This design has zero `now()`-dependent index predicates, zero mutation of any row a table declares immutable, and a one-to-one mapping between "one logical scheduled change" and "one effective-price event" — directly resolving MC-EIS-001, SUPA-1, SUPA-2, and SUPA-5.

### 5.4 `catalog_tax_events`

Unchanged value fields (`old_mode`/`new_mode`, `old_rate`/`new_rate`); now includes the standardized provenance block (5.0) instead of the Version 1.0 minimal `responsible_user_id` (Stage 10 Finding MC-EIS-015).

### 5.5 `catalog_reference_cost_events`

Unchanged value fields; now includes the standardized provenance block (5.0).

### 5.6 `catalog_product_link_events`

Unchanged value fields (`event_type`, `old_inventory_item_id`/`new_inventory_item_id`, `old_selling_unit`/`new_selling_unit`, `unit_changed`, `price_event_id`); now includes the standardized provenance block (5.0). Additionally carries `preview_token_id` (FK → `catalog_link_preview_tokens(id)`, Section 5.9) recording exactly which server-issued preview this event's confirmation resolved.

### 5.7 `catalog_audit_events`

Unchanged shape from Version 1.0 (already carried `actor_channel`/`request_id`); field names aligned to the Section 5.0 standardized vocabulary (`actor_channel` → `channel`) for consistency across all event tables.

### 5.8 `catalog_write_idempotency_keys`

Unchanged shape. Its role in the corrected command sequencing is specified in Section 11.

### 5.9 `catalog_link_preview_tokens` — new, D-068 preview binding (Stage 10 Findings MC-EIS-003, SUPA-4, LF-01)

Non-authoritative for permission (the commit command re-checks permission independently) — this table exists purely to bind a merchant-reviewed preview to its eventual commit.

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key — the "preview token" |
| `business_id`, `product_id` | uuid | No | |
| `requested_by_user_id` | uuid | No | |
| `current_inventory_item_id_snapshot` | uuid | Yes | |
| `current_selling_unit_snapshot` | text | No | |
| `current_price_snapshot` | numeric(12,2) | Yes | |
| `proposed_inventory_item_id` | uuid | No | |
| `proposed_base_unit` | text | No | |
| `unit_changed` | boolean | No | |
| `price_confirmation_required` | boolean | No | |
| `d047_eligible` | boolean | No | Result of the Section 9 predicate at preview time |
| `preview_fingerprint` | text | No | Hash of every value above, recomputed and compared at commit time |
| `created_at` / `expires_at` | timestamptz | No | Short-lived (recommended 5 minutes — specialist-reviewable parameter) |
| `consumed_at` | timestamptz | Yes | Set atomically when the token is used (successfully or not) — single-use |

No `UPDATE` after `consumed_at` is set; a consumed or expired token can never be reused (Section 10).

### 5.10 `catalog_channel_pending_actions` — new, non-interactive channel confirmation binding (Stage 10 Findings MC-EIS-007, SEC-PERM-003, AIW-004)

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key — the "pending action" |
| `business_id` | uuid | No | Server-resolved, never caller-supplied |
| `actor_user_id` | uuid | No | Server-resolved canonical Smart Business identity |
| `action_type` | text | No | e.g. `'assign_or_replace_catalog_inventory_link'` |
| `normalized_payload_fingerprint` | text | No | |
| `preview_token_id` | uuid | Yes | FK → `catalog_link_preview_tokens(id)` when the action is a D-068 operation |
| `channel` | enum (`whatsapp`, `voice`, `photo`) | No | |
| `originating_channel_event_id` | text | No | e.g. WhatsApp message ID; `UNIQUE (channel, originating_channel_event_id)` — deduplicates redelivered webhooks at this layer, independent of the command-level idempotency key |
| `preview_text` | text | No | Durable text representation of the preview shown to the merchant (Section 15, AIW-007) |
| `created_at` / `expires_at` | timestamptz | No | |
| `consumed_at` | timestamptz | Yes | Single-use |

### 5.11 `catalog_file_references` — new, business-bound file metadata (Stage 10 Findings MC-EIS-011, SEC-PERM-007)

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | Composite `UNIQUE (id, business_id)` for downstream FK integrity |
| `storage_object_key` | text | No | Reference into the approved storage profile (P00 §41) — never a public URL |
| `content_type` | text | No | Verified server-side by content inspection, not client-asserted MIME alone |
| `byte_size` | bigint | No | |
| `upload_status` | enum (`pending`, `completed`, `failed`) | No | |
| `safety_scan_status` | enum (`pending`, `clean`, `quarantined`, `not_required`) | No | `not_required` reserved for cases where no scan applies; product images and import files always require a scan |
| `purpose` | enum (`product_image`, `import_source`) | No | |
| `uploaded_by` | uuid | No | |
| `created_at` | timestamptz | No | |

`catalog_products.image_ref` and `catalog_import_jobs.file_ref` reference this table (5.1, 5.12) rather than unconstrained text. Commands linking a file reference verify `business_id` match, `upload_status = 'completed'`, and `safety_scan_status IN ('clean','not_required')` before accepting it.

### 5.12 `catalog_import_jobs` / `catalog_import_rows`

Structurally unchanged from Version 1.0 except: `file_ref` is now `uuid` FK → `catalog_file_references(id)` (composite business-scoped), and `catalog_import_rows` gains a `claimed_at`/`claimed_by_worker` pair (nullable) supporting safe concurrent per-row claiming during apply (`FOR UPDATE SKIP LOCKED`), mirroring the scheduler's claiming pattern (Section 12; Stage 10 Finding SUPA-10).

### 5.13 `catalog_deletion_records` — new, D-065 snapshot (Stage 10 Finding SUPA-9)

Deliberately **not** foreign-keyed to `catalog_products` (the row it describes will no longer exist after the same transaction commits).

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | |
| `deleted_product_id` | uuid | No | Plain column, not FK — D-065 minimal identity snapshot |
| `product_name_snapshot` | text | No | |
| `deleted_at` | timestamptz | No | |
| `deleted_by_user_id` | uuid | No | |

### 5.14 `business_tax_settings`

Unchanged shape from Version 1.0. The `pricing_mode` write-time constraint is corrected from a claimed table `CHECK` to a command invariant — see Section 13.

### 5.15 `businesses.timezone`

Unchanged from Version 1.0.

## 6. Business Isolation and RLS Design (EIS §8.3)

### Tenant Ownership Columns

Unchanged: every table in Section 5 carries `business_id` and, for child tables, a composite FK enforcing consistency with its parent, mirroring `inventory_movements_item_business_fk`.

### RLS as a Read Boundary and Defense-in-Depth, Not the Write Boundary

**Revised per Stage 10 Finding MC-EIS-002/SEC-PERM-002.** In Version 1.0, RLS was described as gating both reads and writes, mirroring SB-P-1.10's pattern of granting `authenticated` direct `INSERT`/`UPDATE` on `inventory_items` and `inventory_movements` with RLS as the isolation layer. The Security and Permissions specialist review used that exact precedent as evidence that RLS-plus-grants does not force command use: a caller with table-level DML privilege can call the Supabase table API directly, bypassing every command-layer validation, confirmation, idempotency, and audit-event creation.

**Version 2.0 explicitly does not reuse that write pattern.** For every table in Section 5:

- RLS remains **enabled** on every table, and its `SELECT` policies remain business-scoped exactly as in Version 1.0 (Section 6 table below), serving as read-path isolation and defense-in-depth.
- **No `INSERT`, `UPDATE`, or `DELETE` privilege is granted to the `authenticated` role on any table in Section 5.** There is no RLS `INSERT`/`UPDATE`/`DELETE` policy to write for `authenticated` because there is no underlying grant for such a policy to gate — the absence of the grant is the primary control, not a policy.
- All protected writes occur exclusively through the command layer (Section 7), executing as one of three dedicated, narrowly-privileged roles that do hold the necessary table privileges internally.

This is a deliberate, explicit divergence from the SB-P-1.10 migration precedent, made because SB-P-1.11 carries materially higher-stakes invariants per write (D-068 atomicity across four tables, D-047 history-boundary evaluation, idempotency-before-precondition ordering) that a direct-grant-plus-RLS pattern cannot guarantee — a caller bypassing the command layer could satisfy RLS's row-ownership check while still violating D-068's atomicity or D-047's lock condition, since RLS has no way to express those cross-row, cross-table invariants. This observation may have implications for other missions using the direct-grant pattern; that determination is outside this EIS's authorized scope (Section 24).

### RLS Policy Intent Table (revised)

| Table | SELECT policy intent | INSERT/UPDATE/DELETE grant to `authenticated` |
|---|---|---|
| `catalog_products`, `catalog_categories` | Business-scoped; gated by `catalog_view` once permission engine exists | **None** |
| `catalog_selling_price_events`, `catalog_tax_events`, `catalog_price_schedule_events`, `catalog_product_link_events`, `catalog_audit_events` | Business-scoped and gated by the corresponding action/visibility permission (Section 8) | **None** |
| `catalog_pending_price_schedules` | Business-scoped, gated by `catalog_price_manage` | **None** — mutated only by the scheduling commands under `catalog_command_executor`/`catalog_scheduler_executor` |
| `catalog_reference_cost_events` | Business-scoped **and** gated by `catalog_cost_manage`/owner (Section 10) | **None** |
| `catalog_write_idempotency_keys`, `catalog_link_preview_tokens`, `catalog_channel_pending_actions` | Not directly queried by application roles (command-internal) | **None** |
| `catalog_import_jobs`, `catalog_import_rows`, `catalog_file_references` | Business-scoped, gated by `catalog_product_manage` | **None** |
| `catalog_deletion_records` | Business-scoped, gated by `catalog_lifecycle_manage` | **None** |
| `business_tax_settings` | Business-scoped, owner and `catalog_tax_manage` | **None** |

### Cross-Business Denial Behavior

Unchanged: denial never discloses that a row exists in another business.

### Testing Expectations

See Section 21. Testing must now additionally prove that a direct PostgREST `INSERT`/`UPDATE`/`DELETE` attempt against every table above fails for the `authenticated` role while the corresponding command succeeds (Stage 10 Finding MC-EIS-002 verification requirement).

## 7. Command Execution Identities and Authorization Architecture (new — resolves EIS §8.4's "enforcement locations" more precisely; Stage 10 Findings MC-EIS-002, MC-EIS-007, SEC-PERM-002, SEC-PERM-003, SEC-PERM-010)

Three distinct, narrowly-privileged execution identities are defined. None is `service_role`; none is the raw `authenticated` role holding table grants.

| Identity | Who authenticates as this identity | What it may execute | Table privileges |
|---|---|---|---|
| `catalog_command_executor` | The dedicated, no-login owner of every merchant-facing `SECURITY DEFINER` command (dashboard and import paths). Individual merchant sessions never authenticate as this role directly — they call the commands, which execute *as* this owner. | Every write/read command in Section 16 reachable from the dashboard and import UI | Full DML on every table in Section 5, held only by this role, never granted directly to `authenticated` |
| `catalog_channel_executor` | A distinct, credentialed, no-login role used only by the trusted backend service implementing the future shared conversational engine — never by any client, model, or public endpoint. | Only `create_catalog_pending_action`, `confirm_catalog_pending_action`, and read commands needed to render a conversational preview (Section 16) | No direct table DML; calls the same underlying command logic as `catalog_command_executor` through an internal function boundary, after this role's own permission re-verification |
| `catalog_scheduler_executor` | A distinct, credentialed, no-login role used only by the `pg_cron`-triggered activation job. | Only `activate_scheduled_catalog_prices` | `SELECT`/limited `UPDATE`/`DELETE` on `catalog_pending_price_schedules` and `INSERT` on `catalog_price_schedule_events`/`catalog_selling_price_events`, held only by this role |

### Function-Level Requirements (apply to every command owned by any of the three roles)

- Dedicated no-login function owner (one of the three roles above — never `postgres`, never `service_role`).
- `REVOKE EXECUTE ... FROM PUBLIC` on every function, followed by an explicit, minimal `GRANT EXECUTE` only to the role(s) that legitimately call it (e.g., `catalog_command_executor`'s dashboard-facing commands grant `EXECUTE` to `authenticated`, which then executes the function body as the owner — the standard, safe `SECURITY DEFINER` pattern; `catalog_channel_executor`'s functions grant `EXECUTE` only to that specific role, never to `authenticated`).
- Fixed, safe `SET search_path = public` (or a narrower explicit schema list) on every function definition, preventing search-path injection.
- Fully schema-qualified object references (`public.catalog_products`, not `catalog_products`) inside every function body.
- Every function independently re-derives the caller's identity (`auth.uid()` for dashboard/import calls; the already-server-verified `actor_user_id` parameter for channel calls, itself re-validated against live membership inside the function — never trusted as pre-authorized) and re-checks the specific permission flag(s) the action requires against **current** state — never a cached, prompt-supplied, or webhook-payload-supplied permission claim.

### Why `catalog_channel_executor` Does Not Become General Merchant Authority

The shared conversational engine authenticates to Postgres as `catalog_channel_executor` using its own rotated service credential — this role is never exposed to any client, AI model, or public endpoint, and it is *not* `service_role` (it has no RLS-bypassing blanket privilege; its only privileges are `EXECUTE` on the two named functions). Every function it may call independently re-verifies the passed `actor_user_id`'s *current* business membership and *current* permission flag before performing any action — the role's credential proves only "this call originated from the trusted conversational-engine backend," never "this call is pre-authorized to act as any merchant." This directly satisfies instruction §4.7's "prevent service-role use from becoming general merchant authority."

## 8. Permission-Engine Dependency (EIS §8.4)

### Catalog Permission Capabilities Required — Revised for Action-Specificity (Stage 10 Finding MC-EIS-006, SEC-PERM-001)

Version 1.0's `catalog_manage` collapsed product creation/identity maintenance with lifecycle archive/reactivate/delete authority, contradicting Blueprint §8 "Permissions," which independently controls "product creation and details, lifecycle." **Version 2.0 splits this into two flags:**

| Flag | Blueprint source | Grants |
|---|---|---|
| `catalog_view` | "catalog viewing" | Read product/category list, detail, non-protected history |
| `catalog_product_manage` | "product creation and details" | Create products; edit name/description/image/category/SKU/barcode; run import (D-058 ties import to product-creation authority) |
| `catalog_lifecycle_manage` | "lifecycle" | Archive, reactivate, delete (D-031, D-065) |
| `catalog_price_manage` | "selling price" | Immediate and scheduled price changes; read of price history |
| `catalog_tax_manage` | "tax" | Tax configuration changes; read of tax history |
| `catalog_cost_manage` | "reference cost" (D-016) | Reference-cost read and write — separately protected |
| `catalog_inventory_link_manage` | "inventory linking" (D-048) | Assign/replace/remove the product–inventory link; also requires `inventory_view` from the SB-P-1.10 permission surface |
| `sale_use` | Sale-authorized employee tier (D-035) | View/select active, sale-ready products; see selling price and effective tax only |

A Manager granted `catalog_product_manage` no longer implicitly receives archive, reactivation, or deletion authority — that requires the independently grantable `catalog_lifecycle_manage`, restoring the locked Blueprint boundary exactly as SEC-PERM-001 required.

### History Read Permissions (Stage 10 requirement: "History reads must follow the corresponding protected action or visibility permission")

| History | Required flag |
|---|---|
| `catalog_selling_price_events`, `catalog_pending_price_schedules`, `catalog_price_schedule_events` | `catalog_price_manage` |
| `catalog_tax_events` | `catalog_tax_manage` |
| `catalog_reference_cost_events` | `catalog_cost_manage` |
| `catalog_product_link_events` | `catalog_inventory_link_manage` |
| `catalog_audit_events` (identity/lifecycle/category fields) | `catalog_view` for identity fields; `catalog_lifecycle_manage` for lifecycle-transition entries |

### Owner Defaults, Enforcement Locations, Temporary Sequencing

Unchanged in substance from Version 1.0, with enforcement locations now precisely Section 7's three-identity architecture rather than a single generic "command layer" statement. Until the shared permission engine exists, every command's permission check resolves to Owner-only (`owner_id = auth.uid()`), matching SB-P-1.10's own accepted Phase 1 posture — this remains safe specifically *because* Section 7 already makes command bypass technically non-viable, so "Owner-only" is a real, enforced boundary rather than an aspirational one.

**What must not be exposed prematurely (unchanged, restated):** no UI affordance implying Manager or Employee catalog access ships before the shared engine exists; `sale_use` read access is not exposed until the flag exists to gate it.

## 9. Catalog–Inventory Link Integrity (EIS §8.5)

### One-to-One Business-Scoped Linking

Unchanged from Version 1.0: composite FK plus `UNIQUE (inventory_item_id) WHERE inventory_item_id IS NOT NULL`.

### D-047 History Boundary — Corrected Enforceable Predicate (Stage 10 Findings MC-EIS-005, SUPA-3, SEC-PERM-006)

Version 1.0 stated the lock condition checks `inventory_movements.business_event_type`/`business_event_id`, concluding the lock is "always unlocked today" since no mission writes such references yet. The Stage 10 review correctly identified this as under-specified: it does not define **link-tenure** (whether a stock event occurring on the same inventory item *before* or *after* this product's link window should count), nor a concrete transaction/lock order, nor default-deny behavior for the not-yet-existing Sales predicate.

**Version 2.0 defines two independent sub-predicates, both of which must be clear (`false`) for assignment, replacement, or removal to proceed:**

**1. Sale-history predicate — `catalog_has_qualifying_sale_history(product_id)`.**
Today, hardcoded to always return `false`. This is not a guess or an "unavailable" state requiring default-deny — it is a **definitionally correct** value: no Sales Workflow table exists anywhere in the repository, so no completed sale can possibly have been recorded for any product, by construction. This function is the single, named, versioned integration point a future Sales Workflow mission **must** wire to its own authoritative predicate before production sales are enabled (identical pattern to Section 13's tax-mode-lock integration gate). If, after that integration, a call to the real predicate fails or returns an ambiguous result, the calling command must treat that as "history cannot be proven absent" and **deny** the mutation (fail closed) — the default-deny requirement applies to the *future, real* integration, not to today's deterministic stub.

**2. Linked stock-event-history predicate — `catalog_has_linked_stock_event_history(product_id)`.**
Evaluable today using `catalog_product_link_events` (Section 5.6, which records the exact tenure window of the *current* link — the timestamp of the most recent `assigned`/`replaced` event for this product) joined against `inventory_movements` for the currently-linked `inventory_item_id`, restricted to movements with `occurred_at >= <current link's tenure-start timestamp>`. A movement predating the current link's tenure (e.g., opening stock recorded before this product ever linked to that inventory item) does **not** count — it did not occur "while linked" to this product. **Engineering interpretation flagged for confirmation (Section 24):** this predicate treats *any* qualifying inventory movement during the tenure window as locking the relationship, not only movements tied to a future sale/purchase business event. This is the more conservative (safer) reading of Blueprint §8 "the product has... linked stock-event history," chosen because the Blueprint does not narrow "stock-event history" to sale-driven events specifically, and a narrower reading is a genuine interpretive question this EIS is not authorized to resolve silently.

### Transaction and Lock Ordering

Every command evaluating the D-047 boundary (`assign_or_replace_catalog_inventory_link`, `remove_catalog_inventory_link`, `delete_catalog_product`) acquires locks in this deterministic order, inside one transaction: (1) `catalog_products` row; (2) the currently-linked `inventory_items` row, if any, via `SELECT ... FOR UPDATE`; (3) the proposed target `inventory_items` row, if different from (2) and if the two inventory-item IDs are compared and locked in ascending identifier order to avoid deadlock when two concurrent link operations reference each other's items. Locking the `inventory_items` row explicitly creates real mutual exclusion against a concurrent SB-P-1.10 `create_inventory_movement` call targeting the same item — since that function locks the same row per its own EIS's "Lock Target: the inventory item" — so a stock movement cannot be posted to an item mid-link-change, and a link cannot change mid-movement-post, resolving the "concurrency behavior when history is created during a link-change attempt" requirement precisely.

### First-Time Assignment, Permitted Replacement, and Permitted Removal

Unchanged in outcome from Version 1.0. **Removal's engineering resolution is unchanged and reaffirmed:** removal preserves `selling_unit` and current selling price exactly, writes only the approved `catalog_product_link_events` (`removed`) entry, and remains subject to the corrected D-047 predicate above (Stage 10 open-parameter disposition 7, `ACCEPTED AS WRITTEN` with this clarification).

## 10. D-068 Atomic Safeguard (EIS §8.6)

### Server-Authoritative Preview Command — New (Stage 10 Findings MC-EIS-003, SUPA-4, LF-01, AIW-004, SEC-PERM-003)

```text
preview_catalog_inventory_link_change(
  p_product_id uuid,
  p_target_inventory_item_id uuid
) RETURNS catalog_link_preview_tokens
```

Non-mutating (writes only the token row itself, not any product/link/price state). Resolves, under a `SELECT ... FOR UPDATE` on the product row held only for the duration of this read (released at commit of the preview transaction, since nothing else is written), every value the merchant must review: current link, current unit, current effective price, proposed inventory item and its immutable base unit, `unit_changed`, `price_confirmation_required`, the D-047 predicate result from Section 9, product lifecycle state, and any merchant-visible validation warning. Computes `preview_fingerprint` over all of these values and stores the row in `catalog_link_preview_tokens` with a short expiry. Requires `catalog_inventory_link_manage` + `inventory_view`, exactly as the commit command does — a caller without permission cannot even preview.

### Commit Command — Compare-and-Commit Against the Preview Token

```text
assign_or_replace_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid,
  p_confirmed_price numeric   -- required only when the token's price_confirmation_required = true
) RETURNS catalog_products
```

1. **Auth and permission.** Resolve caller, re-check `catalog_inventory_link_manage` + `inventory_view` against current state.
2. **Idempotency-first (Section 11).** Look up `(business_id, operation, idempotency_key)`. Matching key + matching payload fingerprint → return the original result immediately, skipping every step below. Matching key + different fingerprint → `IDEMPOTENCY_CONFLICT`. New key → continue.
3. **Token resolution.** Load `catalog_link_preview_tokens` by `p_preview_token_id`. Missing, expired, already consumed, or not owned by this caller/business → `STALE_STATE` (no state change; consume the token anyway if found, to prevent any reuse race).
4. **Row locks, deterministic order (Section 9).**
5. **Recompute-and-compare.** Recompute every value the token captured (current link, unit, price, target's base unit, `unit_changed`, D-047 eligibility, product status) under the now-held locks, recompute the fingerprint, and compare to `preview_fingerprint`. **Any mismatch → `STALE_STATE`, no state change, token consumed.** This is the compare-and-commit contract SUPA-4/LF-01 required.
6. **Confirmation completeness.** If `price_confirmation_required = true` on the token, `p_confirmed_price` must be present and valid (D-039-consistent) → else `PRICE_CONFIRMATION_REQUIRED`.
7. **Atomic writes**, same shape as Version 1.0: `catalog_product_link_events` insert (now also storing `preview_token_id`); `catalog_selling_price_events` (`link_confirmed`) insert if price changed; `catalog_products` update; idempotency-key registration — all in one transaction.
8. **Commit.** Consume the token. Return the updated product row.
9. **Any exception at any step → full rollback.** Token consumption itself is committed even on a rejecting path (steps 3, 5, 6), so a rejected token can never be silently retried without a fresh preview — directly satisfying "a stale preview requires a new preview and fresh merchant confirmation; it must never auto-retry with changed values" (instruction §4.4).

### All Four No-Change Failure Modes (unchanged guarantee, now backed by the token mechanism)

| Mode | Mechanism |
|---|---|
| Cancellation | No preview-commit call occurs |
| Incomplete confirmation | Missing `p_confirmed_price` when required → step 6 rejection before any write |
| Validation failure | Steps 3–6 reject → no writes attempted |
| Save failure | Exception during step 7 → full transactional rollback |

## 11. Price, Tax, and Cost Write Integrity (EIS §8.7) — Idempotency Ordering Corrected

### Corrected Command Sequencing (Stage 10 Findings MC-EIS-004, SEC-PERM-005; user-confirmed direction this revision)

**Every** protected write command (not only D-068's) now follows this exact step order, replacing Version 1.0's "validate-then-check-idempotency" sequence:

1. **Resolve actor and business** (from `auth.uid()` or, for channel calls, the already-server-verified `actor_user_id` — Section 7).
2. **Permission check** against current state for the specific flag the action requires.
3. **Idempotency resolution, before any mutable-state precondition check:**
   - Look up `(business_id, operation, idempotency_key)` in `catalog_write_idempotency_keys`.
   - **Matching key + matching payload fingerprint → return the original stored result immediately.** No stale-state, D-047, or other precondition check runs on this path — a legitimate retry after a real success must never be rejected as stale.
   - **Matching key + different payload fingerprint → `IDEMPOTENCY_CONFLICT`**, a non-retriable state requiring fresh review, never silently treated as a valid retry.
   - **No matching key → claim it.** The command performs an `INSERT ... ON CONFLICT (business_id, operation, idempotency_key) DO NOTHING` claim row. If the claim insert reports a conflict (another concurrent call already claimed this exact new key), the command takes a `SELECT ... FOR UPDATE` on the claim row and waits for the first caller's transaction to finish, then returns *that* result rather than proceeding independently — this is the defined "concurrency behavior for simultaneous first use" (instruction §4.5).
   - Only after a key is newly and exclusively claimed does the command proceed to step 4.
4. **Mutable-state precondition checks** (stale-state/preview-token comparison for D-068; D-047 boundary; row locks; ordinary field validation).
5. **Writes**, atomically, including finalizing the idempotency-key row with its `result_ref`.
6. **Commit.**

### Unknown-Outcome Reconciliation (Stage 10 Findings MC-EIS-004, LF-04, AIW-008; confirmed engineering direction)

A generic transport/API failure — a timeout, a dropped connection, an unexpected exception surfaced before the client receives a response — where commit status cannot be determined from the client's perspective is classified as **`UNKNOWN_OUTCOME`**, distinct from every confirmed rejection category above. The system requires:

- **Retain the same idempotency key for the same logical action.** A client experiencing an unknown outcome never generates a new key for that action.
- **Reconciliation occurs through one of two paths, both keyed by the same idempotency key:**
  1. **Same-key retry** — reissue the identical command call with the identical idempotency key and payload. Per step 3 above, if the original call actually committed, this returns the original result deterministically, with no duplicate effect. If the original call never reached the server or never committed, this proceeds as a fresh attempt.
  2. **Read-only outcome lookup** — `get_catalog_command_outcome(p_business_id, p_operation, p_idempotency_key)`, a non-mutating read command returning the claim row's state (`unclaimed`, `in_progress`, `completed` with `result_ref`, or `failed` with the recorded rejection category) without re-attempting the operation. Useful when a caller (e.g., a webhook handler) prefers to check before resubmitting.
- **No "nothing changed" report before a definitive result.** The client — dashboard or conversational — must not tell the merchant the action failed, was not saved, or had no effect until either path above returns a **terminal, non-commit** result (a confirmed rejection category, or `unclaimed` from the outcome lookup meaning the server never received or began the request). Until then, the correct UI state is "checking status," never "not saved" and never a silent assumption of success.
- **Fresh preview and confirmation are required only when:** the reconciled result is `STALE_STATE`; the payload the merchant intends to submit has materially changed since the original attempt; the preview token or pending action has genuinely expired; or reconciliation conclusively establishes the original operation never occurred (an `unclaimed` outcome lookup, or a same-key retry that proceeds as a fresh attempt because no prior claim existed) and the merchant is now initiating a new attempt from current state. In every other case — including a same-key retry that returns the original success or original confirmed rejection — no new preview is required, because no new decision is being made; the system is only resolving the outcome of the decision the merchant already confirmed.

### Remaining Write-Integrity Requirements

Unchanged from Version 1.0: authoritative write paths per value type; append-only history with old/new values (now via the Section 5.0 standardized provenance block); UTC storage with business-timezone presentation; server validation per value type; row-locked concurrency handling; permission enforcement per Section 8; cost/margin confidentiality (Section 17); catalog-price authority versus future Sales Workflow overrides unchanged; failure/rollback behavior now precisely defined by the ordering above rather than stated only in principle.

## 12. Scheduled Pricing and Timezone Handling (EIS §8.8) — Scheduler Authority Corrected

### Storage Timezone, Business Timezone Source of Truth, Activation Timestamp Interpretation, DST Safety

Unchanged from Version 1.0 (Section 11 there): `timestamptz` storage; `businesses.timezone` per-business column defaulting to `Asia/Kolkata`; absolute-instant storage of `effective_at`; DST-safe by construction.

### Scheduler Execution Identity and Least Privilege (Stage 10 Findings MC-EIS-009, SUPA-6, SUPA-11, SEC-PERM-009)

`activate_scheduled_catalog_prices` executes as `catalog_scheduler_executor` (Section 7) — a dedicated, no-login, narrowly-privileged role holding only the specific `SELECT`/`UPDATE`/`DELETE`/`INSERT` privileges its function body requires on `catalog_pending_price_schedules`, `catalog_price_schedule_events`, and `catalog_selling_price_events`. It is **not** the broad `service_role`, correcting Version 1.0's characterization. `pg_cron` invokes the function through this role's credential; no merchant client or public endpoint may execute it (`REVOKE EXECUTE FROM PUBLIC`, no `GRANT` to `authenticated`).

### Bounded Batching, Safe Work Claiming, Per-Row Isolation (SUPA-6, SEC-PERM-009)

The job processes **at most 500 due schedules per invocation** (specialist-reviewable parameter), claimed via `SELECT ... FOR UPDATE SKIP LOCKED` on `catalog_pending_price_schedules WHERE effective_at <= now()`, ordered by `effective_at`. **Each claimed schedule is activated in its own sub-transaction** (commit or rollback independently), so one failing row (e.g., a data-integrity edge case on one product) does not abort or delay the batch. If more than 500 schedules are due, the job re-invokes itself or relies on the next scheduled tick to continue — no unbounded single transaction ever holds locks across an unbounded row set.

### Race Handling with Cancel/Archive

Because cancellation, archival, and activation all acquire the deterministic product-then-pending-schedule lock order (Section 9's ordering principle, applied here), a race resolves to whichever transaction acquires the lock first: if the merchant's cancel commits first, activation's claim finds no row and skips silently (no error, no duplicate); if activation commits first, a concurrent cancel attempt finds no pending-schedule row and returns a clear "already activated" outcome to the merchant rather than a generic failure.

### Missed-Run Recovery

Unchanged principle from Version 1.0: selection on `effective_at <= now()` with no upper time-window bound means a missed run self-heals on the next successful run, now additionally protected by `SKIP LOCKED` claiming against double-processing by an overlapping run.

### Bounded Activation Delay and Merchant-Visible Delayed State (instruction §4.10)

Polling interval remains **1 minute** as an initial engineering value (Stage 10 open-parameter disposition 4, `REFINEMENT REQUIRED` satisfied by the bounds below, not by changing the number). A **maximum acceptable lag budget of 5 minutes** is defined: once `now() > effective_at` for a still-pending schedule, the read path (Section 16) reports the product's price state as **`activating`** — a third UI state distinct from `pending` and `current` — rather than continuing to show the old price as authoritative or prematurely implying the new price is live before the job actually commits it. If lag exceeds the 5-minute budget, this is an operational alert condition (Section 18), not a merchant-facing error — the price still activates correctly once the job runs, just later than the budget target.

### Authorizing-User and System-Executor Provenance

Satisfied structurally by Section 5.0's standardized provenance block: the `activated` events in both `catalog_price_schedule_events` and `catalog_selling_price_events` carry `authorized_by_user_id` copied forward from the original `catalog_pending_price_schedules.authorized_by_user_id` (the merchant who scheduled it), while `executed_by_actor_type = 'system'` and `system_run_id` identify the job invocation that performed the activation — resolving SUPA-11/SEC-PERM-009's requirement to distinguish the two.

### Job-Run Identifiers and Observable Lag

Each job invocation generates one `system_run_id`, attached to every event it writes in that run, and logs (Section 18) its own start time, count processed, count failed, and maximum observed lag for that run.

## 13. Multilingual Normalization and Search (EIS §8.9)

Unchanged substantively from Version 1.0, with language sharpened per Stage 10 convergent findings (SUPA specialist disposition, AIW-*, LF-05, instruction §4.16): **`pg_trgm` (or any same-script similarity technique) is same-script typo/approximate-matching assistance only and must never be represented, in this document or in any implementation surfacing it, as cross-script Malayalam/Manglish/English linguistic understanding.** Deterministic, business-scoped, exact-normalized matching (Section 5.1's generated columns and `UNIQUE` constraints) remains the sole authoritative uniqueness mechanism. Possible-match suggestions remain business-scoped, separately labelled, non-authoritative, and never auto-applied.

**Security-critical vs. specialist-deferred index/threshold items, explicitly separated (instruction §4.16):**

| Must be implemented now (security/correctness-critical) | May remain query-plan/data validated later |
|---|---|
| `UNIQUE (business_id, name_normalized)` / `sku_normalized` / `barcode_normalized` | `pg_trgm` GIN index for possible-match search |
| RLS business-scope indexes supporting every policy in Section 6 | General list/sort/pagination indexes |
| `UNIQUE (product_id)` on `catalog_pending_price_schedules` | Similarity threshold tuning against representative Kerala-language data |
| `catalog_write_idempotency_keys` unique scope index | |
| D-047 predicate support indexes (`catalog_product_link_events` by product+time, `inventory_movements` by item+time) | |
| Effective-price lookup index (`catalog_selling_price_events` by product, `effective_at` descending) | |
| Import row-state and audit-history indexes supporting Section 6 policies | |

### Tax-Mode Lock — Command Invariant, Not a Table CHECK (EIS §8.7 relocation; Stage 10 Findings MC-EIS-013, SUPA-7)

Version 1.0 stated `business_tax_settings.pricing_mode` was protected by a write-time `CHECK` preventing change once any completed sale exists. **A PostgreSQL `CHECK` constraint cannot query another table, so this is corrected:** the pricing-mode lock is a **command invariant** inside `update_business_tax_settings`, which calls the same `catalog_has_qualifying_sale_history`-style integration point defined in Section 9 (specifically, a business-wide variant checking across all of the business's products) — today hardcoded `false` for the identical reason given in Section 9 (no Sales Workflow exists, so no completed sale can exist). This is a **named, versioned cross-mission integration gate**: production enablement of Sales Workflow must not proceed until this predicate is wired to real data, as an explicit acceptance requirement of that future mission, not an optional enhancement. Until wired, `update_business_tax_settings` allows pricing-mode changes freely, matching current reality — no sales exist anywhere to protect.

## 14. CSV and Excel Import Architecture (EIS §8.10) — Hardened

### File Binding

Import files are referenced via `catalog_file_references` (Section 5.11), not unconstrained text — `catalog_import_jobs.file_ref` verified for business ownership, `upload_status = 'completed'`, and `safety_scan_status = 'clean'` before parsing begins (Stage 10 Findings MC-EIS-011, SEC-PERM-007).

### Structural and Resource Limits (Stage 10 Findings MC-EIS-011, SEC-PERM-008)

Multidimensional limits are **mandatory as a category**; exact values remain configurable engineering parameters (Stage 10 open-parameter disposition 2):

- Accepted types: `.csv`, `.xlsx` only, verified by content inspection, not filename extension.
- Compressed **and** uncompressed size limits (protects against archive-expansion abuse in `.xlsx`'s zip container) — proposed starting values: 10 MB compressed, 50 MB uncompressed-equivalent.
- Worksheet count limit (proposed: 1 — reject multi-sheet workbooks for Build Now's single-purpose import), row limit (proposed: 5,000), column count limit, and per-cell content-length limit.
- Per-business concurrent-import-job limit (proposed: 1 active job) and rate limit (proposed: N jobs per hour), consistent with Source 04 §16 cost-protection rules.
- No macros, no external-link formulas, no formula execution of any kind during parsing — every cell is read as literal text.

### Formula-Injection Neutralization (Stage 10 Finding MC-EIS-011, SEC-PERM-008)

Any downloadable artifact this system produces from import data — error reports, correction-queue exports, or any other CSV/XLSX generated from merchant or system-generated text — neutralizes any cell value beginning with `=`, `+`, `-`, `@`, a tab, or a carriage return by prefixing it with a non-executing character before writing the export. This applies to every exported text field, including system-generated messages, since even those could theoretically embed a value beginning with a formula-triggering character.

### Quarantine, Retention, Cleanup

Quarantined files (failed safety scan) are isolated from all processing beyond the scan result itself. Raw uploaded files and raw row payloads are retained only for a bounded review window (proposed: 30 days) then deleted. An explicit cancellation command exists for abandoned import jobs, releasing claimed rows and marking the job `failed` with a clear reason.

### Job-Level Confirmation, Apply-Time Revalidation, Resumability (Stage 10 Findings MC-EIS-011, LF-06, SUPA-10)

- `stage_catalog_import_rows` (parse + validate) never writes `catalog_products`, matching Version 1.0.
- A distinct, explicit final-confirmation step is required before `apply_catalog_import_valid_rows` begins — presenting a summary (counts of valid/invalid/conflict, explicit list of what will and will not be applied) the merchant must confirm.
- **Apply-time revalidation:** immediately before applying each row, its uniqueness/business-rule validity is re-checked against *current* catalog state (not the state at staging time) — a row valid at staging may have become a conflict if another change occurred meanwhile; it is then re-classified rather than force-applied.
- **Per-row, resumable application:** rows are claimed via `catalog_import_rows.claimed_at`/`claimed_by_worker` with `FOR UPDATE SKIP LOCKED`, each applied through the ordinary `create_catalog_product`/update commands (reused, not duplicated) with its own idempotency key, so a worker interruption leaves cleanly resumable state — remaining unclaimed or abandoned-claim rows are simply picked up by the next apply pass. **One active apply operation per job** is enforced (a second concurrent apply call for the same job is rejected, not queued silently).
- Job-level counters (`rows_applied`, etc.) are derived/reconciled from actual row terminal states, never trusted as independently maintained truth (SUPA-10).

### Permission and Security

Unchanged: `catalog_product_manage` required (D-058); employees denied regardless of any other flag; every cell treated as untrusted input requiring the same validation as manual entry.

## 15. WhatsApp, Voice, Text, and Photo Dependency (EIS §8.11) — Channel-Authority Contract

### Removed: Catalog-Owned Intent Taxonomy and Media-Pipeline Generalization (Stage 10 Findings MC-EIS-008, AIW-001, AIW-002)

Version 1.0 defined a specific `catalog_update` intent family with named sub-intents and asserted that Source 04's receipt Vision pipeline "generalizes" to product images. **Both are removed as normative claims.** This EIS states only the capability contract SB-P-1.11 requires from the shared engine; any intent names or pipeline descriptions elsewhere in this document are illustrative only and are subordinate to whatever the future shared-engine mission's own governance defines. SB-P-1.11 does not bind that mission's classifier design, taxonomy, or vision/OCR architecture.

### The Channel-Authority Contract the Shared Engine Must Satisfy (Stage 10 Findings MC-EIS-007, SEC-PERM-003, AIW-003, AIW-004, AIW-005)

Before any catalog command may be invoked from a non-interactive channel, the shared engine, on its own side, must:

1. **Verify the inbound channel event and sender** (webhook signature, Meta verification handshake per Source 04 §2) — this remains entirely the shared engine's own responsibility, not redefined here.
2. **Resolve one canonical Smart Business identity and business membership** for the sender (Source 04 §3 identity router) — server-side, never trusting a client- or model-supplied identity claim.
3. **Call `create_catalog_pending_action`** (executing as `catalog_channel_executor`, Section 7) with the server-resolved `business_id`, `actor_user_id`, the intended `action_type`, a normalized payload fingerprint, the `channel`, and `originating_channel_event_id`. This command independently re-verifies the actor currently holds the required permission for the intended action *before* creating the pending action, and — for a D-068 operation — first calls `preview_catalog_inventory_link_change` internally and stores the resulting `preview_token_id` plus a **durable text representation** of the preview (`preview_text`, satisfying AIW-007's requirement that every consequential preview have a durable text form regardless of voice channel).
4. **Present the durable text preview to the merchant** and await their reply — this messaging/formatting responsibility belongs to the shared engine.
5. **On the merchant's confirming reply** (itself a new inbound webhook event, deduplicated at the `catalog_channel_pending_actions.UNIQUE(channel, originating_channel_event_id)` layer against redelivery), call **`confirm_catalog_pending_action`** with the pending-action ID and the confirming sender's re-resolved identity. This command re-verifies: not expired, not already consumed, confirming actor matches (or is otherwise separately authorized), **current** permission still holds (re-checked fresh — protects against a permission revoked between preview and confirmation), then invokes the underlying command (e.g., `assign_or_replace_catalog_inventory_link`, passing through the stored `preview_token_id`) exactly as the dashboard path would, under the same idempotency and stale-state rules (Sections 10–11).
6. **No client, AI layer, webhook handler, or caller-supplied object may assert its own authority** — every permission and business-scope fact used by the confirm step is re-derived from live state at that moment, never carried forward from step 2's resolution or from any AI-extracted content.

### Duplicate Webhooks, Stale Confirmations, Revoked Permissions, Delayed Messages, Reply-Delivery Failure

- **Duplicate webhooks:** deduplicated at two independent layers — `catalog_channel_pending_actions`'s unique channel-event constraint, and the underlying command's own idempotency key.
- **Stale confirmations:** `expires_at` on the pending action; an expired confirmation attempt is rejected and requires the shared engine to initiate a fresh preview.
- **Revoked permissions:** caught by the fresh permission re-check in `confirm_catalog_pending_action`, independent of whatever permission state existed at preview time.
- **Delayed messages:** if a confirmation arrives after `expires_at`, it is treated identically to a stale confirmation — no special-casing by elapsed time beyond the expiry itself.
- **Reply-delivery failure:** the underlying command's result is already durably committed (or not) before any reply is sent; a failed reply delivery is purely a notification-layer concern and never triggers re-execution of the command (ties directly to Section 11's unknown-outcome contract — the shared engine's own retry of a reply-send is not a retry of the catalog write).

### AI Assistance Boundaries (Stage 10 Finding MC-EIS-008/AIW-006)

Extraction from any channel input must produce field-level provenance/confidence, not a single flattened "extracted" value. Consequential fields — product identity, unit, price, tax treatment/rate, reference cost, barcode/SKU, inventory-link target — are never invented when extraction confidence is insufficient; they remain blank and are explicitly requested from the merchant rather than defaulted. No automatic legal tax classification is ever produced (Blueprint §8 "Tax Treatment").

### Voice Response Boundaries (AIW-007)

Every consequential preview and result has a durable text representation regardless of channel (Section 5.10's `preview_text`). Voice replies remain Owner-only, and only when the voice capability and preference are enabled (Source 04 §7, Source 05 §7); Managers, Employees, Suppliers, and Customers receive text responses only. Cost or other protected financial information is never spoken to a role not authorized to see it.

### Failure Handling (AIW-008)

Channel-level result semantics reuse Section 11's `UNKNOWN_OUTCOME` contract directly: the assistant never acknowledges success before the authoritative command returns a committed result; an uncertain outcome (media-download failure, transcription/OCR failure, model timeout, command-call timeout) triggers the same-key retry or outcome-lookup reconciliation before any status message is sent to the merchant; unresolved failures are logged (Section 18) and escalated without blocking unrelated business functions.

### Deterministic Checks Before Expensive Processing (AIW-009)

Where a request can be resolved deterministically (unsupported role, unrecognized command, missing subscription, safety rejection), identity/role/permission/subscription/safety/business-relevance checks occur before any model, transcription, or vision call — consistent with Source 04 §16 cost-protection rules.

## 16. API, RPC, and Command Contracts (EIS §8.12)

Revised command surface. Every command follows Section 7's identity/grant model and Section 11's idempotency-first ordering.

| Operation | Purpose | Authorization | Executor identity | Idempotent |
|---|---|---|---|---|
| `create_catalog_product` | Create a product | `catalog_product_manage` | `catalog_command_executor` | Yes |
| `update_catalog_product_identity` | Edit name/description/image/category/SKU/barcode | `catalog_product_manage` | `catalog_command_executor` | Yes |
| `update_catalog_product_unit` | Non-stock unit change | `catalog_product_manage`; rejects if stock-tracked or sales history exists | `catalog_command_executor` | Yes |
| `preview_catalog_inventory_link_change` | D-068 non-mutating preview | `catalog_inventory_link_manage` + `inventory_view` | `catalog_command_executor`, `catalog_channel_executor` | N/A (read, produces a token) |
| `assign_or_replace_catalog_inventory_link` | D-068 commit | `catalog_inventory_link_manage` + `inventory_view` | `catalog_command_executor`, `catalog_channel_executor` (via `confirm_catalog_pending_action`) | Yes |
| `remove_catalog_inventory_link` | D-047 removal | `catalog_inventory_link_manage` | `catalog_command_executor` | Yes |
| `record_catalog_selling_price_change` | Immediate price change | `catalog_price_manage` | `catalog_command_executor` | Yes |
| `schedule_catalog_selling_price` / `cancel_scheduled_catalog_selling_price` | Pending price lifecycle | `catalog_price_manage` | `catalog_command_executor` | Yes |
| `activate_scheduled_catalog_prices` | Cron sweep | Least-privilege scheduler identity only | `catalog_scheduler_executor` only | Self-idempotent (Section 12) |
| `record_catalog_tax_change` | Tax configuration change | `catalog_tax_manage` | `catalog_command_executor` | Yes |
| `update_business_tax_settings` | Pricing-mode lock, business tax default | `catalog_tax_manage`; pricing-mode change gated by Section 13's command invariant | `catalog_command_executor` | Yes |
| `record_catalog_reference_cost_change` | Cost change | `catalog_cost_manage` | `catalog_command_executor` | Yes |
| `archive_catalog_product` / `reactivate_catalog_product` | Lifecycle | `catalog_lifecycle_manage` | `catalog_command_executor` | Yes |
| `delete_catalog_product` | Conditional hard delete (Section 23) | `catalog_lifecycle_manage`; default-deny on unresolved dependency | `catalog_command_executor` | Yes |
| `create_catalog_category` / `archive_catalog_category` | Category lifecycle | `catalog_product_manage` | `catalog_command_executor` | Yes |
| `create_catalog_import_job`, `stage_catalog_import_rows`, `apply_catalog_import_valid_rows` | Import pipeline (Section 14) | `catalog_product_manage` | `catalog_command_executor` | Yes (per row for apply) |
| `create_catalog_pending_action` | Channel pending-action creation | Server-verified actor permission for the intended action | `catalog_channel_executor` only | Yes |
| `confirm_catalog_pending_action` | Channel confirmation → underlying command | Fresh server-verified permission at confirm time | `catalog_channel_executor` only | Yes |
| `get_catalog_command_outcome` | Read-only idempotency-outcome lookup (Section 11) | Same permission as the original operation | `catalog_command_executor`, `catalog_channel_executor` | N/A (read) |
| `catalog_products_search` | Permission-aware, multilingual search | `catalog_view` or `sale_use` | `catalog_command_executor`, `catalog_channel_executor` | N/A (read) |
| `catalog_product_read` / `catalog_products_list_batch` | Permission-aware detail/list read, cost/margin physically omitted per caller (Section 17) | `catalog_view` or `sale_use` | `catalog_command_executor`, `catalog_channel_executor` | N/A (read) |

Every command's result shape distinguishes, at minimum: confirmed validation rejection, confirmed permission rejection, confirmed transactional failure (no commit), `IDEMPOTENCY_CONFLICT`, `STALE_STATE`, `UNKNOWN_OUTCOME` (client-inferred, not server-returned — see Section 11), and confirmed success — never a single generic error shape.

## 17. Frontend and Lovable Responsibilities (EIS §8.13) — Deterministic State Handling

### Permission-Aware Reads and Sensitive Financial Data — Hardened (Stage 10 Findings MC-EIS-010, SEC-PERM-010)

`catalog_product_read`/`catalog_products_list_batch` execute as `catalog_command_executor`/`catalog_channel_executor` (Section 7's dedicated no-login owners), never with raw client grants to `catalog_reference_cost_events`. Response shapes are **typed at two distinct levels** — a full shape including cost/margin fields, and a restricted shape that physically omits those keys — never a single shape with a nullable cost field, so omission is structural, not a display-layer convenience. Every call re-derives business scope and permission from server-side state; no caller-supplied scope parameter is ever trusted. Cost values never appear in validation errors, import conflict previews, logs, metrics, search results, list totals, or conversational context for a caller lacking `catalog_cost_manage`.

### D-068 Preview Rendering (Stage 10 Findings MC-EIS-003, MC-EIS-012, LF-01, LF-02)

The frontend calls `preview_catalog_inventory_link_change` and renders exactly the returned state — it never computes `unit_changed`, `price_confirmation_required`, or D-047 eligibility itself. The returned `preview_token_id` is held opaquely and submitted unchanged to the commit call.

### Stale-State Flow (LF-02)

On `STALE_STATE`: the frontend (1) stops the mutation flow immediately; (2) discards any locally held "will succeed" assumption; (3) calls `preview_catalog_inventory_link_change` again; (4) visibly explains that the product changed since the merchant last reviewed it; (5) requires a fresh, explicit confirmation against the new preview; (6) never auto-retries the original mutation with the old or silently updated values.

### Idempotency-Key Lifecycle and Unknown-Outcome Reconciliation (Stage 10 Findings MC-EIS-004, MC-EIS-012, LF-03, LF-04)

- One idempotency key is generated per confirmed logical action and persisted for that action's full lifecycle (surviving reconnect/page-navigation via durable local state keyed to the pending action).
- The confirming control is disabled while the request is pending; no duplicate submission is possible from the same UI instance.
- On a transport/network failure with no server response, the frontend does **not** report failure. It enters a "checking status" state and either retries the identical call with the identical key or calls `get_catalog_command_outcome`, per Section 11 — this is the confirmed engineering direction for this revision, not left open.
- A new idempotency key is generated only after a terminal result (success or a confirmed rejection category) or after the merchant materially edits the payload before resubmitting.
- `IDEMPOTENCY_CONFLICT` is presented as a non-retriable state requiring the merchant to start over with a fresh review, never offered a simple "try again" action.

### Multilingual Possible-Match Presentation (LF-05)

Possible matches are labelled as suggestions, never as duplicates; the original merchant-entered script is shown unchanged; using a suggested existing record requires an explicit user choice, never a preselected default; exact and possible matches are visually and semantically distinct without relying on color alone, with accessible status text for assistive technology.

### Import Summary, Correction, Apply, Progress, Resume (LF-06)

A final confirmation summary (counts and explicit exclusions) precedes apply; apply-time revalidation outcomes are surfaced per row; duplicate "apply" clicks are prevented at the UI layer in addition to the server's one-active-apply-per-job rule; progress is fetched from server-held row state (reconnect-safe, not client-tracked only); applied/skipped/quarantined/conflicted/failed rows use precise, non-implying wording (no row is described as saved unless it was).

### Scheduled-Price Delayed-Activation Presentation (Section 12)

The frontend renders three distinct price states — current, pending (scheduled), and **activating** (past the scheduled instant, awaiting the job) — rather than collapsing "activating" into either of the other two.

### Route and Navigation Exposure (LF-08)

Products navigation is enabled only after Phase 1 commands and Owner-scoped reads are deployed and independently verified; staff/manager controls remain absent until permission enforcement is verified end to end, not merely implemented; conversational entry points remain absent until the shared conversational engine is authorized, available, and verified; no feature-flagged-off route is exposed as a dead link or a misleading "coming soon" affordance inside the active merchant workspace without separate approval.

### Accessibility and Stable Identifiers (LF-07)

Every critical catalog control (product creation submit, D-068 preview/confirm, price/tax/cost edit submit, import stage/apply/cancel, possible-match choice) carries a stable `id`/`data-testid` per Source 03 §13's static-element directive. Required: full keyboard-only completion of every critical flow; focus trapping and restoration in confirmation dialogs (especially D-068's); screen-reader announcement of validation errors, stale-state transitions, save outcomes, import progress, and possible-match uncertainty; responsive/scrollable presentation of wide import tables on mobile; non-color-only indicators for valid/invalid/conflict groupings; reduced-motion-respecting behavior for any loading/progress animation.

## 18. Audit and Observability (EIS §8.14) — Standardized Provenance

Every dedicated event table (Section 5.0) and the generic `catalog_audit_events` table now share the identical provenance vocabulary: business, actor user (where applicable), actor type, authorizing user versus system executor (Section 12), channel, action/permission authority exercised, request/correlation ID, job/run ID for automated execution, recorded time, effective time where applicable, and outcome. Cost values never appear in logs, error messages, metrics, or any provenance field's free-text content (Section 17's response-shape omission is the only path cost ever travels).

Operational metrics now additionally include: `IDEMPOTENCY_CONFLICT` and `STALE_STATE` rates per command (Section 11's reconciliation-health signal); `activate_scheduled_catalog_prices` per-run processed/failed counts and observed lag against the 5-minute budget (Section 12); import job structural-rejection counts (Section 14); channel pending-action expiry/duplicate-webhook counts (Section 15).

Remaining content (correlation IDs, log/ledger separation, retention) unchanged from Version 1.0.

## 19. Security and Privacy (EIS §8.15)

Unchanged core list from Version 1.0, now grounded in the Section 7 identity architecture and the Section 5.11 file-binding model rather than stated at principle level only:

- **Tenant isolation:** Section 6.
- **Least privilege:** Section 7's three narrowly-scoped executor identities, none of which is `service_role`.
- **Command-only writes:** Section 6/7 — no direct DML grant to `authenticated` on any protected table.
- **Protected cost/margin data:** Section 5.5, Section 17 response-shape omission.
- **Upload security:** Section 5.11, Section 14.
- **Malicious spreadsheet content and formula injection:** Section 14.
- **Webhook/media trust boundaries:** the shared engine's own responsibility (Section 15); SB-P-1.11 receives only already-verified input at `catalog_channel_executor`'s boundary.
- **Service-role access:** none of the three executor identities is `service_role`; nothing in SB-P-1.11 uses it.
- **`SECURITY DEFINER` hardening:** Section 7's function-level requirements apply uniformly.
- **Audit-log confidentiality:** Section 18.
- **Rate limiting and abuse protection:** import job/rate limits (Section 14); a per-business channel pending-action creation rate limit is a specialist-reviewable addition worth considering during detailed design.
- **Safe error disclosure:** Section 16 — stable categories only, never raw database detail.

## 20. Migration and Rollout Strategy (EIS §8.16)

Sequence unchanged in shape from Version 1.0, updated for the corrected tables and identities:

1. **Prerequisite checks** — unchanged.
2. **Additive-first rollout** — `businesses.timezone`, then all Section 5 tables as net-new, including the new v2.0 tables (`catalog_pending_price_schedules`, `catalog_price_schedule_events`, `catalog_link_preview_tokens`, `catalog_channel_pending_actions`, `catalog_file_references`, `catalog_deletion_records`).
3. **Backfill** — none required.
4. **Constraints before write access** — every `UNIQUE`/FK/`CHECK` constraint active before any command is reachable, including the corrected stable `UNIQUE (product_id)` on `catalog_pending_price_schedules` (no longer a migration-invalid design).
5. **RLS enabled at creation**, on every table, for every table's `SELECT` policy — with the explicit confirmation step (new in v2.0) that **no** `INSERT`/`UPDATE`/`DELETE` grant to `authenticated` exists on any table before that table is considered rollout-complete (Section 6).
6. **Three execution identities created and privilege-scoped** (Section 7) before any command referencing them is deployed.
7. **Command rollout before frontend** — unchanged principle.
8. **Frontend enablement** — gated per Section 17's route-exposure rule, not merely on command availability.
9. **Feature flags** — unchanged (deployment convenience only).
10. **Permission-engine dependency sequencing** — unchanged.
11. **Conversational-engine dependency sequencing** — now additionally requires `catalog_channel_executor`'s credential to be provisioned and scoped before Phase 3 begins.
12. **Rollback/forward-fix** — unchanged append-only-preserving principle, now cleanly consistent since no table declared immutable is ever a rollback-mutation target.
13. **Production verification gates** — Section 21's expanded test matrix, including the new command-bypass-denial and identity-scoping tests, must pass before any production write access is enabled.

## 21. Testing and Verification Matrix (EIS §8.17)

| Area | Required test coverage (v2.0 additions in **bold**) |
|---|---|
| Unit behavior | Each command independently unit-tested for its validation rules and error categories |
| Schema constraints | Every constraint in Section 5, **including the corrected stable `UNIQUE (product_id)` on `catalog_pending_price_schedules` and absence of any `now()`-dependent index predicate anywhere in the schema** |
| **Command-only write enforcement** | **Direct PostgREST `INSERT`/`UPDATE`/`DELETE` against every protected table fails for `authenticated`, while the corresponding command succeeds and produces complete audit evidence (Section 6)** |
| **Execution-identity scoping** | **Each of the three executor identities can execute only its assigned commands; `catalog_channel_executor` cannot be used to bypass fresh permission re-verification; `catalog_scheduler_executor` cannot be invoked by any client role** |
| RLS and business isolation | Cross-business read/write attempts return no data and no side effect for every table, including negative existence-disclosure tests |
| Permissions | Each of the eight flags (Section 8) independently tested; **Manager granted `catalog_product_manage` alone cannot archive, reactivate, or delete** |
| D-047 history boundaries | Assign/replace/remove rejected once qualifying history exists within the current link's tenure; **movements predating the current link's tenure do not lock it; the sale-history stub returns `false` deterministically and the interface point is covered by a test asserting it is called** |
| D-068 atomicity and preview binding | **Preview-then-commit with matching token succeeds; any drift between preview and commit (unit, price, link, lifecycle state) produces `STALE_STATE` with no state change; a consumed or expired token cannot be reused; all four failure modes verified** |
| **Idempotency ordering and unknown-outcome reconciliation** | **A retry with a matching key and payload after a real success returns the original result even when preconditions would otherwise reject it as stale; a matching key with a different payload is rejected as `IDEMPOTENCY_CONFLICT`; concurrent first-use of the same new key produces exactly one result; `get_catalog_command_outcome` correctly reports `unclaimed`/`in_progress`/`completed`/`failed`** |
| Price/tax/cost histories | Every write produces exactly one correctly old/new-valued, immutable event row; **no scheduled-price transition ever produces more than one effective-price event; no history-table row is ever the target of `UPDATE`** |
| Scheduled pricing and timezone behavior | Activation occurs within the lag budget; a missed cron run self-heals; **cancel-vs-activate race resolves deterministically without duplication; per-schedule failure isolation confirmed under an injected fault on one row within a batch** |
| Multilingual matching | Exact normalized uniqueness rejects true duplicates and accepts distinct entries; possible-match suggestions never auto-apply; **`pg_trgm` explicitly not tested or represented as cross-script correctness** |
| Imports | Valid rows apply, invalid rows never create a product, conflict rows require explicit decision; **apply-time revalidation correctly re-classifies a formerly valid row that became a conflict; formula-injection payloads are neutralized in every exported artifact; oversized/structurally invalid workbooks are rejected before parsing; per-row resumability confirmed after a simulated worker interruption** |
| **Channel-authority contract** | **Forged business/actor claims are rejected; duplicate webhook delivery does not re-execute; stale, expired, or permission-revoked confirmations are rejected; `catalog_channel_executor` credential cannot perform any action outside its two granted commands** |
| Audit history | Every meaningful field change produces a correctly provenance-tagged event row across every table using the Section 5.0 shape |
| Accessibility and critical UI states | Keyboard-only, screen-reader, mobile, non-color, and reduced-motion behavior verified for D-068 confirmation and import correction flows specifically |
| Negative and adversarial cases | Cross-business ID guessing, malformed import files, oversized uploads, replayed idempotency keys with altered payloads, concurrent D-068 calls with conflicting target items, **concurrent link-change and inventory-movement creation on the same item** |

## 22. Traceability Matrix (EIS §8.18)

Version 1.0's matrix is preserved and extended with the following new/revised rows:

| EIS Section | Primary Founder Decisions | Primary Blueprint Sections | Stage 10 Finding(s) Resolved | Governance/Architecture Source | Future Verification Evidence |
|---|---|---|---|---|---|
| §5.3 corrected schedule model | D-011–D-013, D-043 | §8 "Scheduled Selling Price" | MC-EIS-001, SUPA-1, SUPA-2, SUPA-5, SEC-PERM-004 | PostgreSQL immutable-index-predicate requirement | Migration compilation test, concurrent create/replace/cancel test |
| §6, §7 command-only architecture | — (engineering integrity) | Business Rule 24 | MC-EIS-002, SEC-PERM-002 | Source 12 Permission Rules, Source 17 Permission Integrity | Direct-DML-denial test |
| §8 action-specific flags | D-016, D-033, D-034, D-035, D-048 | §8 "Permissions" | MC-EIS-006, SEC-PERM-001 | — | Permission-matrix test |
| §9 D-047 predicate | D-047 | §8 "Product–Inventory Link" | MC-EIS-005, SUPA-3, SEC-PERM-006 | SB-P-1.10 §8 "Units of Measure"; `inventory_movements` schema | Tenure-boundary test |
| §10 D-068 preview/commit | D-047, D-068 | §8, §9, Rule 28 | MC-EIS-003, SUPA-4, LF-01, LF-02, AIW-004, SEC-PERM-003 | — | Compare-and-commit test suite |
| §11 idempotency ordering | D-064, D-068 | — | MC-EIS-004, SEC-PERM-005, LF-03, LF-04, AIW-003, AIW-008 | — | Retry-after-success test |
| §12 scheduler authority | D-043 | §8 "Scheduled Selling Price" | MC-EIS-009, SUPA-6, SUPA-11, SEC-PERM-009 | Source 17 least privilege | Scheduler-privilege inspection |
| §14 file binding, import hardening | D-055–D-058 | §8 "CSV and Excel Bulk Import" | MC-EIS-011, SEC-PERM-007, SEC-PERM-008, LF-06, SUPA-10 | P00 §41–42 storage profile | Formula-injection/resource-limit test |
| §15 channel-authority contract | D-053, D-054 | §8 "WhatsApp, Voice, Text, and Photo Assistance" | MC-EIS-007, MC-EIS-008, SEC-PERM-003, AIW-001–009 | Source 04, Source 05 | Forged-identity/replay test |
| §17 frontend determinism | D-053, D-054, D-068 | §9 | MC-EIS-012, LF-01–08 | Source 03 §13 | Accessibility/state-transition test |
| §18 provenance standardization | D-011, D-037, D-064 | §8 "Audit History" | MC-EIS-015, SEC-PERM-011 | — | Cross-table provenance test |
| §23 hard delete | D-031, D-065 | §8 "Conditional Permanent Deletion" | MC-EIS-014, SUPA-8, SUPA-9 | — | Deletion-eligibility test |
| §13 tax-mode lock | D-061 | §8 "Tax-Inclusive or Tax-Exclusive Pricing" | MC-EIS-013, SUPA-7 | — | Integration-gate test (deferred) |

No material technical requirement in this EIS lacks at least one row above or in the Version 1.0 matrix tracing it to a Founder decision or Blueprint section.

## 23. Conditional Hard Deletion — Closed Contract (EIS §8.14/§4.14; Stage 10 Findings MC-EIS-014, SUPA-8, SUPA-9)

Single atomic command `delete_catalog_product`:

1. Row-lock the product.
2. Evaluate, in the same transaction, **every** current dependency: `catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_import_rows.matched_product_id`, `catalog_pending_price_schedules`, the Section 9 sale-history predicate, and the Section 9 linked-stock-event-history predicate.
3. **Default to denial** if any check is affirmative or if any predicate call (including a future real Sales-domain integration) cannot be conclusively evaluated.
4. If and only if every check clears: write the D-065 minimal snapshot to `catalog_deletion_records` (Section 5.13) first, then delete the live `catalog_products` row, then commit — both writes atomic in one transaction.
5. Every dependency table's FK to `catalog_products` uses `ON DELETE RESTRICT`, not `CASCADE` — a second, database-level line of defense if the eligibility check were ever incomplete.

## 24. Engineering Questions and Risks (Required by Instruction §9)

### Engineering Questions

| # | Question | Disposition | Notes |
|---|---|---|---|
| 1 | Exact `pg_trgm` similarity threshold and algorithm sufficiency | `SPECIALIST REVIEW REQUIRED` | Section 13; unchanged from v1.0, sharpened language only |
| 2 | Final CSV/Excel structural limits (rows, worksheets, columns, cell length, compressed/uncompressed size, concurrency/rate) | `SPECIALIST REVIEW REQUIRED` | Section 14; category now mandatory, exact values remain configurable |
| 3 | Final index set for every new table | `SPECIALIST REVIEW REQUIRED` | Section 13; security-critical subset now explicitly separated from deferred subset |
| 4 | `activate_scheduled_catalog_prices` polling interval and lag budget | `SPECIALIST REVIEW REQUIRED` | Section 12; 1-minute polling / 5-minute budget proposed, both specialist-reviewable |
| 5 | Shared permission-engine and shared conversational-engine sequencing and ownership | `REFINEMENT REQUIRED` (Mission Control sequencing decision, restated per Stage 10 consolidated disposition) | Sections 8, 15; contract fully defined, sequencing itself not decided by this EIS |
| 6 | Selling-unit/price treatment upon inventory-link removal | Resolved, `ACCEPTED AS WRITTEN` per Stage 10 disposition 7 | Section 9; unchanged reasoning from v1.0, reaffirmed by all four specialists |
| 7 | **D-047 "linked stock-event history" scope: does every inventory movement during link tenure count, or only movements tied to a future sale/purchase business event?** | **Flagged for Mission Control/Founder confirmation, not resolved silently** | Section 9; this EIS adopts the conservative (broader-locking) reading as its working design per SEC-PERM-006's explicit instruction to escalate rather than guess; a narrower reading, if intended, would not require reopening Sections 1–21 but should be confirmed before EIS Lock |
| 8 | **Whether the SB-P-1.10 direct-grant-plus-RLS write pattern should also be revisited given the same bypass risk identified here** | **Noted transparently; explicitly out of this EIS's authorized scope** | Section 6; SB-P-1.11 diverges from that pattern for its own tables only — no change to any other mission's artifact is proposed or implied |

### Blocking Issues

None. Item 7 above is a flagged interpretive question with a stated conservative working resolution, not a blocked or unresolved design — the EIS is fully specified either way, and confirming a narrower reading (if that is Mission Control's intent) would only relax, not redesign, the Section 9 predicate.

### Non-Blocking Dependencies, Security Risks, Migration Risks, Operational Risks, Sequencing Risks, Technical-Debt Risks

Carried forward from Version 1.0 with the following updates: the "column-level cost/margin exposure" security risk is now further mitigated by the command-only write architecture (Section 7) eliminating the direct-grant bypass path entirely, not only the read path. The "sequencing risk" of building Phase 2a/3 logic ahead of shared foundations is now additionally mitigated by Section 15's explicit removal of catalog-owned taxonomy, reducing the surface a premature implementation could lock in. No new migration or operational risk category was introduced by this revision beyond those already named in Sections 12 and 14's specialist-reviewable parameters.

## 25. Mandatory Open-Parameter Dispositions — Stage 10 Consolidated (Required by `instruction1.11.md` §5)

Recorded here as the authoritative disposition for each parameter going forward, consistent with Mission Control's consolidated disposition (`report1.10.md` §4):

1. **Multilingual similarity algorithm and threshold** — `REFINEMENT REQUIRED`, satisfied by Section 13's contract refinement; exact measured value remains an engineering parameter.
2. **CSV/Excel limits** — `REFINEMENT REQUIRED`, satisfied by Section 14's mandatory multidimensional controls; exact operating values remain configurable.
3. **Index strategy** — `REFINEMENT REQUIRED`, satisfied by Section 5.3's replacement of the invalid scheduled-price index and Section 13's security-critical/deferred separation; final non-critical indexes remain query-plan validated.
4. **Scheduled-price polling** — `REFINEMENT REQUIRED`, satisfied by Section 12's bounded-lag, missed-run-recovery, and scheduler-privilege requirements; one minute remains an initial value.
5. **Shared permission-engine sequencing** — `REFINEMENT REQUIRED`, satisfied by Section 8's contract; Manager/Employee catalog access remains blocked until the separately governed shared foundation is implemented and verified.
6. **Shared conversational-engine sequencing** — `REFINEMENT REQUIRED`, satisfied by Section 15's contract; no catalog-specific substitute pipeline is authorized.
7. **Inventory-link removal without D-068 price reconfirmation** — `ACCEPTED AS WRITTEN`, with the required clarification (current unit and price preserved, D-047-bound) present in Section 9.

## 26. Definition of Done (for the eventual implementation, not this EIS)

Unchanged in substance from Version 1.0, with the following Phase 1 additions: the D-068 preview-token compare-and-commit contract (Section 10) passes its full test suite including drift-in-every-dimension cases; no table in Section 5 grants direct `INSERT`/`UPDATE`/`DELETE` to `authenticated`, verified by privilege inspection as a release gate; the three execution identities (Section 7) exist with exactly their specified minimal grants, verified by privilege inspection; the scheduled-price model (Section 5.3, Section 12) passes concurrent create/cancel/activate testing with zero duplicate effective-price events and zero mutation of any immutable row.

## 27. Document Change Log

| Version | Description |
|---|---|
| 1.0 | Initial draft Engineering Implementation Specification, translating locked Product Blueprint SB-P-1.11 into an implementation-ready design, per `instruction1.9.md`. |
| 2.0 | Stage 10 refinement pass authorized by `instruction1.11.md`, resolving every accepted finding in `report1.10.md` and its four specialist reports (`report1.10-supabase-backend.md`, `report1.10-security-permissions.md`, `report1.10-ai-whatsapp.md`, `report1.10-lovable-frontend.md`). Key corrections: replaced the invalid `now()`-dependent scheduled-price index and mutable-immutable contradiction with a stable pending-schedule table plus genuinely append-only history (Section 5.3); introduced a command-only, three-identity write architecture with no direct DML grants on protected tables (Sections 6–7); restored action-specific Manager permission flags (Section 8); added a server-authoritative D-068 preview/token compare-and-commit contract (Section 10); corrected idempotency ordering to resolve before mutable-state checks and defined the unknown-outcome reconciliation contract (Section 11); defined an enforceable, tenure-bounded D-047 predicate with an explicit interpretive flag for Mission Control confirmation (Section 9); defined a least-privilege scheduler contract with bounded batching and lag budget (Section 12); removed catalog-owned conversational taxonomy/media-pipeline claims and defined a precise channel-authority contract (Section 15); business-bound file references and hardened import security (Section 14); hardened permission-aware read functions (Section 17); standardized audit provenance across all event tables (Sections 5.0, 18); closed the hard-deletion contract (Section 23); and recorded all seven Stage 10 mandatory open-parameter dispositions (Section 25). No Founder decision was created, modified, or reopened; no Product Truth changed. EIS remains DRAFT — REFINED, NOT LOCKED. |
