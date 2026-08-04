# SB-P-1.11 — Engineering Implementation Specification (EIS)

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
EIS LOCK: NOT APPLIED
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
| Document Version | 1.0 |
| Status | DRAFT — MISSION CONTROL REVIEW REQUIRED |
| Author | Claude Code — Engineering Review and Implementation Specification |
| Governance Basis | SB-P-1.11 Product Blueprint (Builder Review resolved F3–F5, Engineering Review `READY FOR FOUNDER APPROVAL`, Founder Approval granted, Mission Control Blueprint Lock applied — `communication/live/report1.8.md`) |
| Structural and Engineering Precedent | `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` (LOCKED) |
| Prior Review | Not yet reviewed |
| Authorizing Instruction | `communication/live/instruction1.9.md` |

## 2. Purpose

This document translates the locked SB-P-1.11 Product Blueprint (Sections 1–21, Founder Decisions D-001–D-068) into an implementation-ready engineering specification.

The Product Blueprint remains the single source of product truth. Every engineering decision recorded here exists to implement a requirement already established in the locked Blueprint. Where any statement in this document could be read as introducing new product behaviour, the Product Blueprint prevails and this document is in error.

This EIS does not redefine what the product is. It describes how the locked Product Catalog & Pricing capability is implemented: the technical domain model, data design, write-integrity mechanics, permission and RLS strategy, service contracts, validation, concurrency, multilingual and import architecture, migration, testing, observability, build sequence, risks, and completion criteria required to build it.

No database schema, SQL migration, RPC implementation, Edge Function, webhook handler, AI prompt, Lovable build prompt, or frontend component is created by this document. Genuine open engineering-parameter choices (index sets, similarity thresholds, import size limits, polling intervals) are proposed with an explicit decision-gate for specialist confirmation during detailed design, mirroring the discipline SB-P-1.10's EIS used for its own index-selection gate.

This EIS is a **draft**. It has not been reviewed, refined, or locked. It does not authorize an implementation package, application code, database changes, or deployment.

## 3. Implementation Principles

These principles govern every engineering decision in this specification, carried forward from the locked Blueprint and Section 20/21 of the Engineering Review, and consistent with the principles SB-P-1.10's EIS established for the domain SB-P-1.11 builds beside.

- **Catalog truth is not inventory truth.** No catalog table, function, or code path may write to `inventory_items` or `inventory_movements`, or treat a catalog-stored value as stock quantity. The SB-P-1.10 ledger remains the sole stock authority (Blueprint §1, §8 "Catalog Product"; D-001).
- **No silent price reinterpretation.** No code path may allow a previously entered numeric price to acquire a different per-unit meaning without explicit merchant confirmation (D-068).
- **Append-only value history.** Selling-price, tax, and reference-cost changes are immutable once posted. A correction or later change is a new event, never an update or delete of a prior event (Blueprint §8 "Selling-Price History," "Tax History"; D-011, D-037, D-064).
- **Single write path per capability.** Every catalog-mutating action, regardless of originating channel (dashboard, import, WhatsApp/voice/photo), passes through the same server-authoritative command for that action. No channel implements its own parallel write logic (Source 12 §4, §10; Blueprint §8 "Audit History," "Business Ownership and Isolation").
- **Permission-first design.** No catalog read or write path is designed first and restricted afterward; every operation is designed against its Blueprint §8 "Permissions" requirement from the outset, even where full enforcement is sequenced behind a shared permission-engine dependency (Engineering Review, Section 20 "Permission-Engine Dependency").
- **Business isolation.** Every table, query, and command carries business scope as a first-class constraint, reusing the `business_id`-plus-`owner_id`-subquery pattern already established by `inventory_items` and `inventory_movements`.
- **Auditability.** Every meaningful catalog change is traceable to a responsible actor, channel, and time, by construction — not by convention (D-064).
- **Atomic no-change guarantee.** The D-068 safeguard's four failure modes (cancellation, incomplete confirmation, validation failure, save failure) each reduce to "no transaction committed" — Postgres transactional semantics provide the guarantee; the command layer only needs well-defined rejection points.
- **Reuse before invention.** Every new catalog component reuses an existing, approved pattern (business isolation, idempotency keys, append-only ledgers, `file_import_jobs`, `system_errors`, `pg_cron`) unless no such pattern exists, in which case a new *shared* (not catalog-specific) capability is proposed (audit events, permission flags) per Source 12 §10.

## 4. Architecture and Scope Map (EIS §8.1)

### Implementation Boundaries

SB-P-1.11 implements: catalog product and category entities; product identity, SKU, barcode, image, description with multilingual entry/display and normalization; one selling unit with inheritance from a linked inventory item; the product–inventory link including the D-068 atomic safeguard; selling price (current + one scheduled + immutable history); tax configuration (business default, product override, non-taxable) with immutable history; reference cost (protected, immutable history); product lifecycle (Active/Archived, conditional deletion); a shared, permission-aware audit-event mechanism first consumed by Catalog; CSV/Excel import with a correction queue; and the catalog-side contract that a future shared conversational engine must satisfy.

SB-P-1.11 does **not** implement: the SB-P-1.10 inventory ledger itself (consumed, not modified); a generic Manager/Employee permission engine (consumed once available — see Section 8); the shared WhatsApp/voice/photo conversational pipeline itself (consumed once available — see Section 15); Sales Workflow, Purchase Workflow, POS Integration, Financial Reports, or Ask CFO (Blueprint §11 "Separate Product or Governed Mission").

### Repository Components Affected

| Layer | New | Reused unmodified |
|---|---|---|
| Database | `catalog_products`, `catalog_categories`, `catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_write_idempotency_keys`, `catalog_import_jobs`, `catalog_import_rows`, `business_tax_settings`, `businesses.timezone` column | `businesses` (all other columns), `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, RLS pattern, `system_errors` |
| Commands (RPC-equivalent) | All commands listed in Section 12 | `create_inventory_movement`, `preview_inventory_movement`, `inventory_current_stock_batch` (read-only cross-reference for stock-tracked product display) |
| Scheduled processing | `activate_scheduled_catalog_prices` job | `pg_cron` extension and secure-endpoint automation pattern (Source 02 §7) |
| Frontend | `src/routes/_authenticated/products.tsx` (+ nested routes), catalog components | `src/components/authed-header.tsx` (extended with a Products nav entry), `src/hooks/use-auth.tsx`, authenticated route guard pattern |
| Conversational | Catalog intent handler (future, once shared engine exists) | None yet — shared engine does not exist |

### Explicit Exclusions

Unit conversion, packaging, variant hierarchy, multiple barcodes, scanning/labels, price tiers, discounts, multi-currency, margin calculation, richer bulk editing/export, custom POS modification, and any second stock-mutation path are explicitly out of this EIS's scope, matching Blueprint §11 verbatim. Nothing in this EIS proposes a workaround for any Reject item.

### Dependency Map

```text
SB-P-1.10 Inventory Foundation (implemented, Owner-only)
        │  read-only reference (inventory_item_id link, base_unit)
        ▼
SB-P-1.11 Catalog Core  ──────────────► buildable now (Phase 1, this EIS)
        │
        ├── depends on ──► Shared Permission Engine (not implemented anywhere)
        │                   → Phase 2a (Section 8)
        │
        ├── depends on ──► Shared Conversational Engine (not implemented anywhere)
        │                   → Phase 3 (Section 15)
        │
        └── extends ─────► file_import_jobs conceptual pattern (Source 02 §3.15A, not implemented)
                            → Phase 2b (Section 14)
```

### Phased Delivery Sequence (aligned to locked Blueprint §20–21)

- **Phase 1 — no cross-mission dependency.** Catalog/category data model, Owner-scoped RLS, D-068 atomic safeguard, price/tax/cost history, multilingual normalization, scheduled-price activation, dashboard CRUD.
- **Phase 2a — depends on shared permission engine.** Manager/Employee catalog permission enforcement.
- **Phase 2b — sizeable, no cross-mission blocker.** CSV/Excel import and correction queue.
- **Phase 3 — depends on shared conversational engine.** Guided WhatsApp/voice/photo catalog workflows.

This EIS specifies the complete technical contract for all four phases so that Phase 2a/2b/3 can begin immediately once their dependency is satisfied, without redesign.

## 5. Data Model (EIS §8.2)

Implementation-grade entity definitions. No migration or SQL is authored here; this is a data dictionary. Naming follows the existing repository convention (`snake_case`, `business_id` ownership column, `id`/`created_at`/`updated_at` on mutable entities).

### 5.1 `catalog_products`

| Field | Type | Nullable | Constraint / Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | FK → `businesses(id)`; composite `UNIQUE (id, business_id)` for downstream FK integrity, mirroring `inventory_items_id_business_uniq` |
| `name` | text | No | `CHECK (length(btrim(name)) > 0)` |
| `name_normalized` | text | No | Generated: trimmed, internal-whitespace-collapsed, lower-cased. `UNIQUE (business_id, name_normalized)` — enforces D-026/Rule 8 at the data layer |
| `description` | text | Yes | Free text; English/Malayalam/Manglish (D-027) |
| `category_id` | uuid | Yes | FK → `catalog_categories(id)`; composite FK `(category_id, business_id)` → `catalog_categories(id, business_id)` |
| `sku` | text | Yes | Merchant display value preserved verbatim (D-023) |
| `sku_normalized` | text | Yes | Generated when `sku IS NOT NULL`: trimmed, lower-cased. Partial `UNIQUE (business_id, sku_normalized) WHERE sku_normalized IS NOT NULL` (D-024/Rule 9) |
| `barcode` | text | Yes | Merchant display value preserved verbatim (D-020) |
| `barcode_normalized` | text | Yes | Generated when present: trimmed, lower-cased. Partial `UNIQUE (business_id, barcode_normalized) WHERE barcode_normalized IS NOT NULL` (D-022/Rule 9) |
| `image_ref` | text | Yes | Object-storage reference (metadata only; file lives in approved storage profile per P00 §41) |
| `inventory_item_id` | uuid | Yes | FK → `inventory_items(id)`; composite FK `(inventory_item_id, business_id)` → `inventory_items(id, business_id)`. `UNIQUE (inventory_item_id) WHERE inventory_item_id IS NOT NULL` — enforces the inventory-item side of the one-to-one (D-004) |
| `selling_unit` | text | No | Free text; mirrors `inventory_items.base_unit` while linked (mandatorily kept equal — see Section 7); merchant-editable while non-stock and pre-sales-history (D-051, D-052) |
| `status` | enum `catalog_product_status` (`active`, `archived`) | No | Default `active` (D-029) |
| `created_by` | uuid | No | Responsible-user reference |
| `created_at` / `updated_at` | timestamptz | No | Standard audit timestamps; `updated_at` reflects only `catalog_products` row writes, not history-table events |

Note: **no** `selling_price`, `reference_cost`, `tax_mode`, or `tax_rate` column exists on `catalog_products`. These are derived from the latest applicable row in their respective event tables (Section 5.3–5.5), mirroring SB-P-1.10's "current stock is never stored, always derived" principle (D-066; Engineering Review "Overall Engineering Feasibility"). Unlike inventory's current-stock aggregation (a running `SUM` across potentially many rows), current price/tax/cost derivation is a single indexed "latest effective row for this product" lookup — inherently cheap, with no aggregation-performance concern analogous to SB-P-1.10's index-selection gate.

### 5.2 `catalog_categories`

| Field | Type | Nullable | Constraint / Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | FK → `businesses(id)`; composite `UNIQUE (id, business_id)` |
| `name` | text | No | Merchant display value (D-008) |
| `name_normalized` | text | No | Generated (trim, collapse whitespace, lower-case). `UNIQUE (business_id, name_normalized)` (D-045/Rule 27) |
| `status` | enum (`active`, `archived`) | No | Default `active` (D-046) |
| `created_at` / `updated_at` | timestamptz | No | Standard |

Archiving a category never deletes the row or cascades to products; `catalog_products.category_id` is set to `NULL` for affected products as part of the same archive command, with the removal recorded as a `catalog_audit_events` entry per affected product (D-046).

### 5.3 `catalog_selling_price_events` (append-only)

| Field | Type | Nullable | Constraint / Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | FK, composite consistency with `product_id` (see below) |
| `product_id` | uuid | No | FK; composite `(product_id, business_id)` → `catalog_products(id, business_id)` |
| `event_type` | enum (`immediate`, `scheduled_created`, `scheduled_activated`, `scheduled_cancelled`, `scheduled_replaced`, `link_confirmed`) | No | `link_confirmed` is used only when this price event is written as part of the D-068 atomic operation (Section 9) |
| `old_price` | numeric(12,2) | Yes | Null only for a product's first-ever price event |
| `new_price` | numeric(12,2) | Yes | Null only for a `scheduled_cancelled` event (no new effective price) |
| `effective_at` | timestamptz | No | When the price takes/took effect (business-relevant time; UTC-stored, see Section 10) |
| `recorded_at` | timestamptz | No | Immutable system insertion time, default `now()` |
| `responsible_user_id` | uuid | No | D-011 |
| `idempotency_key` | uuid | No | See Section 9 durable idempotency contract |
| `superseded_by` | uuid | Yes | Self-FK; set when a `scheduled_created` row is later cancelled or replaced, linking to the cancelling/replacing event — preserves visibility of both per D-013 |

`CHECK`: `event_type = 'scheduled_created' OR event_type = 'scheduled_replaced'` requires `effective_at > recorded_at` (future-dated); `event_type IN ('immediate','scheduled_activated','link_confirmed')` requires `effective_at <= recorded_at + tolerance` (no backdating without an explicit authorized workflow, mirroring SB-P-1.10 EIS §4 "Event Time and Record Time Semantics"). No `UPDATE`/`DELETE` grant on this table for any application role (trigger-enforced, mirroring `inventory_movements_reject_mutation()`).

**Current price** = latest row by `effective_at` where `effective_at <= now()` and not itself superseded, for the product. **Pending scheduled price** = the row with `event_type = 'scheduled_created'` (or `'scheduled_replaced'`) with `effective_at > now()` and `superseded_by IS NULL`, if any (D-013: at most one — enforced by a partial unique index `UNIQUE (product_id) WHERE event_type IN ('scheduled_created','scheduled_replaced') AND superseded_by IS NULL AND effective_at > now()`, re-validated at write time since `now()` is not index-static — see Section 9 validation).

### 5.4 `catalog_tax_events` (append-only)

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id`, `business_id`, `product_id`, `recorded_at`, `responsible_user_id`, `idempotency_key` | — | — | Same shape as 5.3 |
| `old_mode` / `new_mode` | enum (`inherit`, `product_rate`, `non_taxable`) | old nullable on first event | D-036 |
| `old_rate` / `new_rate` | numeric(5,2) | Yes | Only meaningful when mode = `product_rate` |

No `effective_at` distinct from `recorded_at` — tax changes are immediate only in Build Now (D-038); `effective_at = recorded_at` always. No `UPDATE`/`DELETE` grant.

### 5.5 `catalog_reference_cost_events` (append-only)

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id`, `business_id`, `product_id`, `recorded_at`, `responsible_user_id`, `idempotency_key` | — | — | Same shape as 5.3 |
| `old_cost` / `new_cost` | numeric(12,2) | old nullable on first event | `new_cost >= 0` (D-040) |

Immediate only (D-063). No `UPDATE`/`DELETE` grant. Read access to this table and to the derived current cost is permission-gated separately from `catalog_selling_price_events` (D-014, D-016) — see Section 7.

### 5.6 `catalog_product_link_events` (append-only)

Dedicated, strongly-typed history for D-047/D-068 link lifecycle, distinct from the generic `catalog_audit_events` table because its fields are structurally meaningful (queried for the D-047 lock-boundary check, not just displayed).

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id`, `business_id`, `product_id`, `recorded_at`, `responsible_user_id`, `idempotency_key` | — | — | Same shape as 5.3 |
| `event_type` | enum (`assigned`, `replaced`, `removed`) | No | D-047 |
| `old_inventory_item_id` / `new_inventory_item_id` | uuid | Yes | Null appropriately for `assigned` (old null) / `removed` (new null) |
| `old_selling_unit` / `new_selling_unit` | text | Yes | Captures unit consequence |
| `unit_changed` | boolean | No | `true` when `old_selling_unit <> new_selling_unit` |
| `price_event_id` | uuid | Yes | FK → `catalog_selling_price_events(id)`; set only when `unit_changed = true` and this operation also wrote a `link_confirmed` price event (D-068) |

### 5.7 `catalog_audit_events` (generic, append-only)

Shared audit mechanism per Engineering Review §20 "Audit-History Architecture," covering every mutable field not already carried by a dedicated history table: `name`, `description`, `image_ref`, `category_id`, `sku`, `barcode`, `selling_unit` (non-link-driven changes), `status` (lifecycle).

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | FK, isolation boundary |
| `entity_type` | text | No | `'catalog_product'` or `'catalog_category'` (designed for reuse beyond Catalog per Engineering Review reuse guidance) |
| `entity_id` | uuid | No | Row identifier in the entity's own table |
| `field_name` | text | No | e.g. `'name'`, `'sku'`, `'status'` |
| `old_value` | jsonb | Yes | Null on first-ever value |
| `new_value` | jsonb | Yes | |
| `actor_user_id` | uuid | No | D-064 |
| `actor_channel` | enum (`dashboard`, `import`, `whatsapp`, `voice`, `photo`) | No | Supports Section 13 traceability |
| `request_id` | uuid | No | Correlates to the originating command call |
| `occurred_at` | timestamptz | No | Default `now()` |

jsonb old/new value shape mirrors the existing `transaction_correction_events.original_values`/`updated_values` pattern, generalized beyond transactions.

### 5.8 `catalog_write_idempotency_keys`

Mirrors `inventory_movement_idempotency_keys` exactly in contract (not literal schema, since it must reference multiple possible target tables rather than one):

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id` | uuid | No | Primary key |
| `business_id` | uuid | No | Isolation boundary |
| `operation` | text | No | e.g. `'assign_or_replace_catalog_inventory_link'` |
| `idempotency_key` | uuid | No | Caller-supplied |
| `result_ref` | text | No | Free-form pointer (table+id) to the row(s) produced |
| `payload_fingerprint` | text | No | Conflict detection |
| `created_at` | timestamptz | No | Default `now()` |

`UNIQUE (business_id, operation, idempotency_key)`. Registration and the operation's writes occur in the same transaction, identical to SB-P-1.10 EIS §6 "Durable Idempotency Contract."

### 5.9 `business_tax_settings`

Single current-state row per business (not a ledger — only the *product-level* tax state needs transaction-time evidence per D-037; the business-wide default and pricing mode are simpler current settings, D-018/D-019).

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `business_id` | uuid | No | Primary key, FK → `businesses(id)` |
| `pricing_mode` | enum (`tax_inclusive`, `tax_exclusive`) | No | D-019, D-060; `CHECK` at write time that mode cannot change once any completed sale exists (D-061) — the check itself is a forward-compatible no-op in Build Now since Sales Workflow does not yet exist, but the constraint must be present so no future mission can bypass it (see Section 16 migration note) |
| `default_tax_rate` | numeric(5,2) | Yes | D-018 |
| `updated_at` / `updated_by` | timestamptz / uuid | No | |

### 5.10 `catalog_import_jobs` / `catalog_import_rows`

Extends the approved (not-yet-implemented) `file_import_jobs` conceptual pattern (Source 02 §3.15A) with `import_type = 'catalog'`, plus a dedicated row-level correction-queue table since D-057's per-row update/skip/correct decision is more granular than a job-level status.

**`catalog_import_jobs`**

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id`, `business_id`, `created_by`, `created_at`, `completed_at` | — | — | Standard |
| `status` | enum (`pending`, `parsing`, `validating`, `awaiting_correction`, `completed`, `partial_success`, `failed`) | No | Extends `file_import_jobs.status` vocabulary with `awaiting_correction` for D-057 |
| `file_ref` | text | No | Storage reference, not the file itself |
| `rows_total` / `rows_valid` / `rows_quarantined` / `rows_applied` | integer | No | Default 0 |
| `error_report_ref` | text | Yes | |

**`catalog_import_rows`**

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `id`, `business_id` | — | — | Standard |
| `import_job_id` | uuid | No | FK, composite `(import_job_id, business_id)` |
| `row_number` | integer | No | 1-based, for merchant-facing error reporting |
| `raw_payload` | jsonb | No | Original parsed row |
| `parsed_payload` | jsonb | No | Normalized/typed candidate product fields |
| `validation_status` | enum (`valid`, `invalid`, `conflict`) | No | D-056 |
| `validation_errors` | jsonb | Yes | |
| `match_type` | enum (`none`, `name`, `sku`, `barcode`) | No | Which normalized field matched an existing product, if any |
| `matched_product_id` | uuid | Yes | FK → `catalog_products(id)` |
| `correction_decision` | enum (`pending`, `update`, `skip`, `correct`) | No | Default `pending` for `conflict` rows (D-057) |
| `decided_by` / `decided_at` | uuid / timestamptz | Yes | |
| `applied_at` | timestamptz | Yes | Set only after the row's decision is committed through the ordinary product write commands (Section 9) |

### 5.11 `businesses.timezone` (additive column on the existing table)

| Field | Type | Nullable | Notes |
|---|---|---|---|
| `timezone` | text | No | IANA identifier; `DEFAULT 'Asia/Kolkata'`. No such column exists today (confirmed by direct migration inspection) |

**EIS recommendation (Section 10 elaborates):** a per-business column defaulting to Kerala/India's timezone, rather than a hardcoded application constant. Cost is negligible; it satisfies D-043's literal "business timezone" phrase most directly and avoids a future migration if a non-Kerala market is ever approved. This is an implementation choice within already-approved Product Truth, not a new Founder decision (Engineering Review §20 "Timezone and Scheduled-Price Handling").

## 6. Business Isolation and RLS Design (EIS §8.3)

### Tenant Ownership Columns

Every table in Section 5 carries `business_id` and, for child tables of `catalog_products`/`catalog_categories`, a composite FK enforcing that the child's `business_id` matches its parent's — the exact `..._item_business_fk`-style pattern already used by `inventory_movements_item_business_fk`. This is a database-enforced constraint, not an application-layer check alone (SB-P-1.10 EIS §5 "Cross-Business Consistency Enforcement" is the direct precedent and is reused verbatim as a design requirement here).

### Owner, Manager, and Employee Access Boundaries

RLS design must express three tiers even though only the Owner tier is enforceable today:

- **Owner:** full access to every catalog table and column for their own business — reuses `business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())` unmodified.
- **Manager:** access gated per action by the permission flags defined in Section 7 (`catalog_view`, `catalog_manage`, `catalog_price_manage`, `catalog_tax_manage`, `catalog_cost_manage`, `catalog_inventory_link_manage`), once the shared permission table exists.
- **Employee (`sale_use`):** a narrower read grant — active, sale-ready products only, selling price and effective tax only, via the permission-aware read command (Section 9), never a direct `SELECT` against `catalog_products` or the cost/history tables.

### RLS Policy Intent (design-level, no SQL authored)

| Table | SELECT policy intent | INSERT/UPDATE policy intent |
|---|---|---|
| `catalog_products`, `catalog_categories` | Business-scoped; once permission engine exists, further gated by `catalog_view` for non-owners | Business-scoped; gated by `catalog_manage` for non-owners |
| `catalog_selling_price_events`, `catalog_tax_events` | Business-scoped; row-level SELECT does not itself hide cost/margin (only `catalog_reference_cost_events` needs column-level protection) | INSERT only, via command layer; no UPDATE/DELETE grant to any application role (trigger-enforced immutability, mirroring `inventory_movements_reject_mutation()`) |
| `catalog_reference_cost_events` | Business-scoped **and** gated by `catalog_cost_manage`/owner — see "Protected Financial-Field Read Paths" below | INSERT only, gated by `catalog_cost_manage` |
| `catalog_product_link_events`, `catalog_audit_events` | Business-scoped; further gated by `catalog_view` once available | INSERT only, via command layer |
| `catalog_write_idempotency_keys` | Not directly queried by application roles (command-internal) | INSERT only, via command layer (`SECURITY DEFINER` context) |
| `catalog_import_jobs`, `catalog_import_rows` | Business-scoped; gated by `catalog_manage` (import requires product-creation permission, D-058) | INSERT/UPDATE via command layer only, gated by `catalog_manage` |
| `business_tax_settings` | Business-scoped, owner and `catalog_tax_manage` | Business-scoped, owner and `catalog_tax_manage` |

### Service-Role Boundaries

`activate_scheduled_catalog_prices` (Section 10) is the only command expected to run under a service-role/`SECURITY DEFINER` context without an interactive `auth.uid()`; it operates across all businesses by design (it is a scheduled sweep), and its own internal logic — not RLS — must enforce that each write it performs is scoped correctly to the product's own `business_id`. No other command requires service-role execution; every merchant- or employee-initiated command executes under `SECURITY INVOKER` with the caller's own RLS context, matching `create_inventory_movement`'s existing pattern exactly.

### Cross-Business Denial Behavior

Denial must never disclose that a row exists in another business (Blueprint §8 "Business Ownership and Isolation"). A request for a product ID belonging to a different business returns the same "not found" response as a request for a non-existent ID — never a distinct "forbidden" response that would confirm existence.

### Protected Financial-Field Read Paths

Postgres RLS operates at row granularity, not column granularity. Hiding `catalog_reference_cost_events` (and derived current cost/margin) from employees by default (D-014, D-016, D-035) cannot be reliably achieved by RLS alone if a table also contains non-protected columns readable by the same role — but in this design, cost lives in its own dedicated table (Section 5.5), so table-level RLS *is* sufficient for cost specifically: employees simply have no `SELECT` grant on `catalog_reference_cost_events` at all. Where a single response needs to combine protected and unprotected fields for one caller (e.g., a manager with `catalog_price_manage` but not `catalog_cost_manage` viewing a product), the read path is a permission-aware `SECURITY DEFINER` command (`catalog_product_read`, Section 9) that omits cost/margin fields for callers lacking `catalog_cost_manage`, mirroring how `inventory_current_stock_batch` already abstracts inventory reads rather than exposing raw table access. No dashboard or conversational surface may query `catalog_reference_cost_events` directly.

### Testing Expectations for Business Isolation

See Section 17 (Testing and Verification Matrix) for the concrete test list; this section states the design requirement that every test category SB-P-1.10 required for `inventory_items`/`inventory_movements` isolation applies identically here.

## 7. Permission-Engine Dependency (EIS §8.4)

Per Engineering Review §20 "Permission-Engine Dependency" (Finding F7): no Manager/Employee permission model exists anywhere in the repository today. This section specifies the contract SB-P-1.11 needs from that shared engine, without implementing it.

### Catalog Permission Capabilities Required

Derived directly and mechanically from Blueprint §8 "Permissions" (D-016, D-033, D-034, D-035, D-048) — no new capability is invented beyond what that section already enumerates:

| Flag | Blueprint source | Grants |
|---|---|---|
| `catalog_view` | §8 "Permissions" — "catalog viewing" | Read product/category list, detail, non-protected history |
| `catalog_manage` | "product creation and details, lifecycle" | Create, edit identity fields, archive/reactivate/delete, run import (D-058) |
| `catalog_price_manage` | "selling price" | Immediate and scheduled price changes |
| `catalog_tax_manage` | "tax" | Tax configuration changes |
| `catalog_cost_manage` | "reference cost" (D-016) | Reference-cost read and write — separately protected from the above |
| `catalog_inventory_link_manage` | "inventory linking" (D-048) | Assign/replace/remove the product–inventory link; **also requires** `inventory_view` from the SB-P-1.10 permission surface |
| `sale_use` | §8 "Permissions" — sale-authorized employee tier (D-035) | View/select active, sale-ready products; see selling price and effective tax only |

### Owner Defaults

The Owner holds every flag above implicitly, with no explicit grant row required — matching SB-P-1.10's existing Owner-default pattern.

### Manager and Employee Permission Checks

Each command in Section 9 independently checks the single flag it requires (or `sale_use` for the employee-facing read command), never a coarse "is this user staff" check. `catalog_inventory_link_manage` performs a second check against the SB-P-1.10 `inventory_view` flag, consistent with D-048's explicit two-permission requirement.

### Denial Behavior

Identical to Section 6: denial never discloses row existence, and the frontend must never render an action the caller cannot execute (Blueprint §9 "Permission Behaviour"), so every list/detail response already omits actions the caller lacks the flag for, rather than returning them disabled with a reason that leaks other-business state.

### Enforcement Locations

Enforcement is layered, not single-point: (1) **database** — RLS gated on the flag once the permission table exists (Section 6); (2) **command layer** — every command in Section 9 explicitly re-checks its required flag before any write, independent of RLS, mirroring `create_inventory_movement`'s pattern of validating permission inside the function body; (3) **API surface** — no additional layer beyond the command layer, since commands are the API surface (Section 12); (4) **UI** — presentation-only convenience hiding of unavailable actions; UI-level hiding is never treated as a security boundary (Source 12 §13, Source 17 §B11: "frontend visibility is not authorization").

### Temporary Sequencing Constraints (Phase 1, before the shared engine exists)

Until the shared permission engine and its flag table exist:

- Every catalog command still performs its permission check, but the check resolves to **Owner-only** (`owner_id = auth.uid()`), identical to SB-P-1.10's own Phase 1 posture. This is not a design gap — it is the same accepted interim state SB-P-1.10 shipped with, and it is forward-compatible: once the shared flag table exists, each command's single permission check is repointed from the Owner-only condition to the flag lookup, with no change to the command's input/output contract.
- **What may proceed before the shared engine exists:** all of Phase 1 (Section 4) for the Owner. A solo-owner merchant experiences the complete Build Now catalog capability with no functional gap.
- **What must not be exposed or enabled prematurely:** any UI affordance implying Manager or Employee catalog access (e.g., a "manage team catalog permissions" screen) must not ship until the shared engine exists — shipping such UI ahead of enforcement would create exactly the "capability does not equal authority" risk Source 17 §A4 warns against. Employee `sale_use` read access likewise must not be exposed until the flag exists to gate it; before then, only the Owner (and, if already implemented by another mission, an equivalent existing staff-facing surface) can be granted dashboard access to any catalog view.

### Explicitly Not Implemented Here

This EIS does not define the shared flag table's own schema, RLS pattern, or cross-mission ownership (that belongs to whichever mission builds the shared engine). It defines only the seven catalog-specific flags above and where SB-P-1.11's own commands must check them.

## 8. Catalog–Inventory Link Integrity (EIS §8.5)

### One-to-One Business-Scoped Linking

Enforced at the data layer: `catalog_products.inventory_item_id` composite FK `(inventory_item_id, business_id)` → `inventory_items(id, business_id)` (cross-business consistency, same mechanism as `inventory_movements_item_business_fk`), plus `UNIQUE (inventory_item_id) WHERE inventory_item_id IS NOT NULL` (one inventory item → at most one product, D-004). The product side (`catalog_products.id` primary key) already guarantees at most one link per product (D-003).

### History-Based Lock Condition

D-047 locks assignment/removal/replacement once "the product has sales or linked stock-event history." In the current repository, Sales Workflow and Purchase Workflow (the future missions that would create such history) do not exist. The lock check is therefore defined as: *no lock exists if and only if no `inventory_movements` row exists whose `business_event_type`/`business_event_id` (columns already present on `inventory_movements`) reference a sale or purchase event tied to this product.* Because no such event type is ever written by any currently implemented mission, the lock condition is always **unlocked** for every product today — this is the correct and expected Build Now state, not a gap, and the check is written now (rather than deferred) so that Purchase/Sales Workflow missions inherit a lock condition that already works without SB-P-1.11 needing to change once they land, consistent with SB-P-1.10's own principle that "downstream missions must use the same movement-creation path" (SB-P-1.10 EIS §4 "Trusted event-link contract").

### First-Time Assignment, Permitted Replacement, and Permitted Removal

All three D-047 actions share one atomic command boundary (`assign_or_replace_catalog_inventory_link` for assign/replace; `remove_catalog_inventory_link` for removal — kept as two commands because their risk profiles differ, per below) and the same lock-condition check.

- **Assignment / Replacement** — may change `selling_unit` to the target inventory item's `base_unit`. Triggers the full D-068 safeguard (Section 9) whenever the unit would actually change.
- **Removal** — sets `inventory_item_id = NULL`. **Engineering resolution:** removal does **not** modify `selling_unit` or the current selling price. The stored unit value at the moment of removal already equals what the (now-former) linked item's base unit was — nothing about that value changes at removal; the product simply becomes a non-stock product whose unit is now editable going forward under the ordinary D-051 rule ("may change only before sales history exists"), the same rule that already governs every other non-stock unit edit. No new price/unit-reinterpretation risk is introduced by removal itself, because removal writes no new unit or price value — only a *future*, separately merchant-initiated D-051 edit could change the unit, and that edit is already fully governed by existing Blueprint rules without needing a D-068-style safeguard. This is a deliberate "leave existing data untouched" default, not an invented product behaviour, and is recorded in Section 19 as a resolved (not escalated) design question, with the reasoning above available for Mission Control to confirm or override.

### Archive-State Behavior

Archiving the linked inventory item never mutates `catalog_products` (D-030). The product's read path (`catalog_product_read`, Section 9) independently checks the linked item's status at read time and surfaces "active product linked to archived inventory — resolution required" without writing anything; sale-readiness evaluation (Blueprint §8 "Sale Readiness") treats this state as not sale-ready.

### Inventory Base-Unit Authority and Selling-Unit Consequences

`inventory_items.base_unit` is immutable per SB-P-1.10 (§8 "Units of Measure"). A stock-tracked product's `selling_unit` is therefore only ever set as a direct copy of the linked item's `base_unit`, written exclusively by the link commands (Section 9) — no other command may write `catalog_products.selling_unit` for a currently-linked product.

### Transaction and Concurrency Behavior; Stale-Client Protection

The link commands acquire a row lock (`SELECT ... FOR UPDATE`) on the `catalog_products` row before evaluating any precondition, mirroring SB-P-1.10's per-item lock target for `inventory_movements`. Every link-mutating call additionally accepts a `p_precondition_current_link_id` and (when applicable) `p_precondition_current_price` parameter; if either does not match the row's actual current state at lock-acquisition time, the command rejects with a distinct `STALE_STATE` error rather than proceeding — this is the mechanism preventing a merchant from confirming against a preview that has since become outdated (e.g., another session changed the price between preview and confirm).

### Audit Outcomes

Every assignment, replacement, or removal writes one `catalog_product_link_events` row (Section 5.6) and, when a price event also occurs (D-068), one `catalog_selling_price_events` row with `event_type = 'link_confirmed'` — reusing the same price-history mechanism ordinary price edits use, rather than a parallel recording path.

## 9. D-068 Atomic Safeguard (EIS §8.6)

Single command, `assign_or_replace_catalog_inventory_link`, server-authoritative, covering both first-time assignment and permitted replacement.

### Signature (implementation-neutral; final naming is a repository-convention decision)

```text
assign_or_replace_catalog_inventory_link(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_target_inventory_item_id uuid,
  p_precondition_current_inventory_item_id uuid,   -- NULL for first-time assignment
  p_precondition_current_price numeric,             -- caller's last-seen price, for stale-state detection
  p_confirmed_price numeric,                        -- required and validated only when the unit would change
  p_link_confirmed boolean                          -- baseline confirmation required for every link action, per §9 "Inventory-Link Experience"
) RETURNS catalog_products
```

### Contract

1. **Auth.** Reject if `auth.uid()` is null.
2. **Row lock.** `SELECT ... FOR UPDATE` the `catalog_products` row.
3. **Stale-client check.** Compare `p_precondition_current_inventory_item_id`/`p_precondition_current_price` against the row's actual current state (current price = latest `catalog_selling_price_events` row). Mismatch → `STALE_STATE` (no change).
4. **D-047 lock check.** Per Section 8. Locked → `LINK_LOCKED_HISTORY_EXISTS` (no change).
5. **Target validation.** Target inventory item exists, `status = 'active'`, same `business_id`, and not already linked to a different product (defense-in-depth alongside the DB-level `UNIQUE` constraint) → else `TARGET_INVALID` (no change).
6. **Baseline confirmation.** `p_link_confirmed` must be `true` (§9 general linking-confirmation rule) → else `CONFIRMATION_REQUIRED` (no change).
7. **Unit-change evaluation.** Compare current `selling_unit` to target's `base_unit`.
   - **No change:** proceed to step 9 without price re-confirmation.
   - **Change:** `p_confirmed_price` must be non-null and satisfy the same validity rule as an ordinary price entry (D-039: must be `> 0` for sale eligibility, though it may also legitimately be left effectively unset if the merchant is not yet ready to price the product — the command accepts `NULL` here only if the product's price was already unset, since D-068 exists specifically to prevent a *populated* price from silently changing meaning) → else `PRICE_CONFIRMATION_REQUIRED` (no change).
8. **Idempotency check.** Look up `(business_id, 'assign_or_replace_catalog_inventory_link', p_idempotency_key)` in `catalog_write_idempotency_keys`. Existing key + matching payload fingerprint → return the original result. Existing key + different fingerprint → `IDEMPOTENCY_CONFLICT`. New key → proceed.
9. **Atomic writes (single transaction):**
   - Insert `catalog_product_link_events` (event_type `assigned`/`replaced`, old/new item IDs, old/new units, `unit_changed`).
   - If unit changed: insert `catalog_selling_price_events` (`event_type = 'link_confirmed'`, old_price = precondition price, new_price = `p_confirmed_price`, `effective_at = now()`), and set `catalog_product_link_events.price_event_id` to it.
   - Update `catalog_products.inventory_item_id` and `catalog_products.selling_unit`.
   - Register the idempotency key with a pointer to the link-event row.
10. **Commit.** Return the updated `catalog_products` row.
11. **Any exception at any step → transaction rolls back in full.** No product, unit, price, or link column is left partially updated — Postgres transactional atomicity is the enforcement mechanism, not application-level cleanup logic.

### All Four No-Change Failure Modes

| Mode | Mechanism |
|---|---|
| **Cancellation** | Merchant declines before calling the command at all — no RPC invocation occurs, trivially no state change. |
| **Incomplete confirmation** | `p_link_confirmed = false` or `p_confirmed_price` omitted when required → step 6/7 rejection, transaction never begins its write phase. |
| **Validation failure** | Steps 3–5 reject → no writes attempted. |
| **Save failure** | Any error during step 9 (constraint violation, connection loss, etc.) → transaction rolls back atomically; no partial write is observable. |

### Error Responses Safe for Lovable and Conversational Channels

Every rejection returns one of the stable error categories above (`STALE_STATE`, `LINK_LOCKED_HISTORY_EXISTS`, `TARGET_INVALID`, `CONFIRMATION_REQUIRED`, `PRICE_CONFIRMATION_REQUIRED`, `IDEMPOTENCY_CONFLICT`) rather than a raw database error message, so both the dashboard and a future conversational surface can render a merchant-appropriate explanation without parsing SQL error text or leaking schema detail (Source 17 §A10, §B9).

### `remove_catalog_inventory_link`

Simpler sibling command: same auth/lock/D-047-check/idempotency structure, no price-confirmation branch (Section 8's resolution), single `catalog_product_link_events` insert (`event_type = 'removed'`), sets `inventory_item_id = NULL`, leaves `selling_unit`/price untouched.

## 10. Price, Tax, and Cost Write Integrity (EIS §8.7)

### Authoritative Write Paths

One command per value type, each the sole writer to its event table: `record_catalog_selling_price_change` (immediate), `schedule_catalog_selling_price` / `cancel_scheduled_catalog_selling_price` (deferred), `record_catalog_tax_change`, `record_catalog_reference_cost_change`. The D-068 command (Section 9) is the only other writer to `catalog_selling_price_events`, and only for its own `link_confirmed` event type.

### Append-Only History, Previous/New Values, Responsible Actor

All four event tables (Section 5.3–5.5) carry old/new value, `recorded_at`, and `responsible_user_id` by construction; no `UPDATE`/`DELETE` grant exists on any of them for any application role, mirroring `inventory_movements_reject_mutation()`.

### Business Timezone Context

`effective_at`/`recorded_at` are stored as `timestamptz` (UTC internally, per Postgres convention), matching SB-P-1.10 EIS §4's committed approach. Presentation converts to `businesses.timezone` (Section 5.11) at the read/display layer only — never stored pre-converted.

### Request/Idempotency Identifiers

Every write command accepts a caller-supplied `idempotency_key`, checked against `catalog_write_idempotency_keys` exactly as described for the D-068 command (Section 9), scoped `(business_id, operation, idempotency_key)`.

### Server Validation

Price: `new_price IS NULL OR new_price > 0` for any write intended to make the product sale-ready-eligible (D-039); the command itself does not enforce sale-readiness (that is a read-time derived state per Blueprint §8 "Sale Readiness"), only that a non-null price is non-negative and non-zero when supplied. Tax: `new_mode IN ('inherit','product_rate','non_taxable')`; `new_rate` required and non-negative only when `new_mode = 'product_rate'`. Cost: `new_cost IS NULL OR new_cost >= 0` (D-040).

### Concurrency Handling

Row lock on `catalog_products` before evaluating current state, identical pattern to Section 9 step 2, for every price/tax/cost write — prevents two near-simultaneous edits (e.g., dashboard and import-driven) from both reading stale "current" state and silently overwriting each other's history entry.

### Permission Enforcement

`record_catalog_selling_price_change`/`schedule_...`/`cancel_...` require `catalog_price_manage`; `record_catalog_tax_change` requires `catalog_tax_manage`; `record_catalog_reference_cost_change` requires `catalog_cost_manage` — each independently, per Section 7.

### Cost and Margin Confidentiality

`record_catalog_reference_cost_change` and any read of `catalog_reference_cost_events` are the only paths touching cost; no other command ever includes a cost value in its return shape unless the caller holds `catalog_cost_manage` (Section 6 "Protected Financial-Field Read Paths"). Build Now performs no margin calculation anywhere (D-062) — no command computes `price - cost`.

### Catalog-Price Authority versus Future Sales Workflow Overrides

`catalog_selling_price_events` is exclusively the catalog's own price history. A future Sales Workflow's sale-time price overrides (Blueprint §8 "Selling Price": "Discounts and authorized sale-time overrides belong to the future Sales Workflow and must never rewrite catalog price history") must write to that future mission's own transaction-time evidence table, never to `catalog_selling_price_events` — this EIS does not define that future table, only states the boundary its design must respect (D-066).

### Failure and Rollback Behavior

Identical principle to Section 9: any exception during a write command's transaction rolls back atomically; no history table ever contains a partially-written row.

## 11. Scheduled Pricing and Timezone Handling (EIS §8.8)

### Storage Timezone

`timestamptz` (UTC-normalized storage) throughout, per Section 10.

### Business Timezone Source of Truth

`businesses.timezone` (Section 5.11), IANA identifier, `DEFAULT 'Asia/Kolkata'`. **EIS decision:** a stored per-business column rather than a hardcoded constant, chosen because it costs one additive column and default value, satisfies D-043's "business timezone" phrasing without ambiguity, and avoids a future migration if a non-Kerala market is ever approved — while the fixed default means every Build Now merchant behaves identically to a hardcoded-IST design in practice. This resolves the open item Engineering Review §20 flagged; it is an implementation choice within already-approved Product Truth, not a new Founder decision.

### Activation Timestamp Interpretation

A merchant schedules a price using a wall-clock date/time in their business's timezone; the frontend converts that to an absolute `timestamptz` (`effective_at`) before calling `schedule_catalog_selling_price`. The stored value is the absolute instant, not a timezone-relative string — activation logic never re-interprets timezone at activation time, only at entry and display time.

### Daylight-Saving-Safe Behavior

`Asia/Kolkata` observes no daylight saving, so this is a non-issue for Build Now's Kerala-only market. The design remains correct for any future IANA-zone business, since `timestamptz` conversion is DST-aware by construction at the point of entry (when the wall-clock time is converted to an absolute instant) — no additional handling is required.

### Job/Worker or Query-Time Activation Model

A `pg_cron`-scheduled job, `activate_scheduled_catalog_prices`, running every **1 minute** (chosen over a coarser interval such as 5 minutes to stay close to D-043's "exact future date and time" language; the resulting activation lag is at most 1 minute — flagged here as a specific, reasoned recommendation subject to specialist confirmation, not an unquestionable final value, mirroring SB-P-1.10 EIS's index-selection decision-gate discipline). The job selects every `catalog_selling_price_events` row with `event_type IN ('scheduled_created','scheduled_replaced')`, `superseded_by IS NULL`, and `effective_at <= now()`, and for each: inserts a new `event_type = 'scheduled_activated'` row with `effective_at = ` the original scheduled instant (not the job's run time) and `recorded_at = now()` (the actual activation moment), and sets `superseded_by` on the original scheduled row to the new activated row. This reuses the existing `pg_cron`-plus-secure-endpoint automation pattern already approved for the Daily Intelligence Engine (Source 02 §7).

### Idempotent Activation

The job itself is naturally idempotent: a row already bearing a non-null `superseded_by` is excluded from the next run's selection, so a job that is somehow invoked twice for the same tick cannot double-activate the same scheduled price. No caller-supplied idempotency key is needed for this specific internal job (unlike merchant-initiated commands), because its trigger condition is itself the idempotency guard.

### Missed-Run Recovery

Because the job selects on `effective_at <= now()` rather than `effective_at = <this tick's window>`, a missed run (e.g., the cron infrastructure was down for 10 minutes) self-heals on the next successful run — every price whose activation instant has already passed is activated then, in `effective_at` order, with no manual backfill procedure required.

### Conflicting Schedule Handling

D-013 permits at most one pending scheduled price per product; `schedule_catalog_selling_price` and the replace/cancel commands enforce this via the partial unique index described in Section 5.3, re-validated inside the write transaction (not relied upon as index-only enforcement, since `now()`-based partial indexes require the check to also run at write time for correctness under Postgres's index semantics).

### Cancellation/Edit Rules Consistent with Locked Product Truth

`cancel_scheduled_catalog_selling_price` writes `event_type = 'scheduled_cancelled'` and sets the original row's `superseded_by` — the cancelled schedule remains permanently visible in history, never deleted (D-013). Archiving a product with a pending schedule cancels it with the same audit trail, per Blueprint §8 "Scheduled Selling Price" ("Archiving requires confirmation and cancels a pending scheduled price with an audit record") — `archive_catalog_product` (Section 12) internally calls the same cancellation path rather than duplicating its logic.

### Auditability

Every scheduled-price state transition (`scheduled_created` → `scheduled_activated` **or** `scheduled_cancelled`/`scheduled_replaced`) is its own immutable event row; the full chain remains reconstructable from `catalog_selling_price_events` alone.

### UI and Conversational Display Expectations

Per Blueprint §9 "Price Experience": current and pending price are visually distinct, and scheduled activation displays in the business's local timezone (converted at render time from the stored `timestamptz`), never as a raw UTC value.

## 12. Multilingual Normalization and Search (EIS §8.9)

### Storage of Merchant-Entered Canonical Text

`catalog_products.name`/`description`, `sku`, `barcode`, `catalog_categories.name` all store the merchant-entered text verbatim, in whatever script/language mix was typed (UTF-8 native to Postgres `text`). No transliteration, translation, or rewriting ever occurs on write.

### Normalization Fields

Generated columns `name_normalized`, `sku_normalized`, `barcode_normalized`, `catalog_categories.name_normalized` (Section 5.1, 5.2) apply only mechanical, language-agnostic transforms: trim, collapse repeated internal whitespace to a single space, Unicode lower-case fold for Latin-script characters. **No** transliteration or cross-script normalization occurs at this layer — Malayalam text is compared byte-for-byte (after whitespace/case handling) against other Malayalam text, never folded against a Manglish or English rendering, matching Rule 8/9/27's explicit boundary ("do not treat different Malayalam spellings, Manglish transliterations, or translated names as automatically equivalent").

### Business-Scoped Deterministic Exact/Normalized Matching

Enforced via the `UNIQUE (business_id, <field>_normalized)` constraints in Section 5 — a hard, deterministic, database-level guarantee, not an application-layer check (mirroring the discipline SB-P-1.10 EIS required for its own uniqueness constraints).

### Transliteration and Spelling-Assistance Boundaries

A "possible match" suggestion (for a name/category that appears related across Malayalam spelling, Manglish transliteration, or translation) is a **read-time, best-effort** feature, not a write-time constraint: `catalog_products_search` (Section 13) may additionally run a trigram-similarity (`pg_trgm`) comparison against `name_normalized` within the business, surfacing candidates above a similarity threshold as "possible match — review" results, separate from exact matches. **Specialist-review decision gate:** the exact similarity threshold (e.g., `similarity() > 0.3`) and whether `pg_trgm` alone is sufficient for cross-script Malayalam/Manglish/English relatedness (it is not linguistically aware — it only catches literal character-sequence overlap, e.g. "Amul milk" vs "amul milk" typo variants, not true semantic equivalence across scripts) is left open for specialist review before implementation; this EIS commits only to the requirement that the mechanism be disclosed as best-effort and never presented as authoritative.

### Uncertain-Match Review Requirement; No Silent Rename/Merge/Translation/Overwrite/Cross-Business Match

`catalog_products_search`'s possible-match results are returned as a distinct, separately labeled result category from exact matches; no command anywhere auto-applies a possible match to rename, merge, or overwrite a record (Rule 27; Blueprint §5, §8 "Search and Filtering"). Possible-match search is always business-scoped by the same `business_id` filter as every other query — never cross-business.

### Indexing Strategy

`UNIQUE` constraints above double as B-tree indexes for exact-match uniqueness/lookup. A `pg_trgm` GIN index on `name_normalized` (and optionally `catalog_categories.name_normalized`) supports the possible-match similarity query without a full table scan; final index confirmation is part of the same specialist decision gate as the threshold question above, consistent with SB-P-1.10 EIS §5's "Index Strategy Decision Gate" precedent of deferring final index selection to query-plan-validated detailed design.

### Test Cases

See Section 17.

## 13. CSV and Excel Import Architecture (EIS §8.10)

### Accepted File Types and Size Boundaries

`.csv`, `.xlsx`. **Recommended, specialist-reviewable limits:** 5,000 rows and 10 MB per file — proposed as a starting operational parameter (not asserted as final), sized to keep synchronous parsing/validation responsive without a background-job architecture more complex than Phase 2b warrants; revisit with real merchant data if evidence shows this is too restrictive.

### Upload and Parsing Boundary

File is uploaded to the approved storage profile (metadata in Supabase, object in R2/Supabase Storage per P00 §41) and referenced by `catalog_import_jobs.file_ref`; parsing happens server-side (Edge Function or equivalent backend process, not client-side), consistent with "never trust client-side validation alone."

### Column Mapping

A fixed, documented header-to-field mapping (name, description, category, SKU, barcode, selling_unit, selling_price, reference_cost, tax_mode, tax_rate) with case-insensitive header matching; unmapped columns are ignored and reported as informational, not treated as errors.

### Validation Staging

Two-phase: (1) **parse + structural validation** (required field present, price/cost numeric and non-negative, tax_mode one of the allowed values) populates `catalog_import_rows.validation_status`; (2) **business-rule validation** (name/SKU/barcode uniqueness against existing products and against other rows in the same file) determines `match_type`/`matched_product_id` and elevates `valid` rows with a match to `conflict`.

### Row-Level Error Reporting

Every `invalid` or `conflict` row carries its own `validation_errors`/`match_type` in `catalog_import_rows`, surfaced per-row in the import summary (Blueprint §9 "Import and Correction Queue").

### Duplicate and Normalization Handling

Matching uses the same `name_normalized`/`sku_normalized`/`barcode_normalized` comparison as ordinary product uniqueness (Section 12) — an import row is never held to a looser or stricter matching standard than dashboard entry.

### Dry-Run/Preview Behavior; Explicit Confirmation Before Write

`stage_catalog_import_rows` performs parsing and validation only — it writes `catalog_import_rows` but never `catalog_products`. A separate, explicit `apply_catalog_import_row`/`apply_catalog_import_valid_rows` command (invoked only after the merchant reviews the staged preview) performs the actual product writes, reusing the ordinary `create_catalog_product`/product-update commands (Section 14) rather than a parallel import-specific write path — so an imported product is created through exactly the same validated, audited path as a dashboard-created one (D-056).

### Partial-Success Policy

Valid rows are applied; invalid rows are never applied; conflict rows wait for an explicit per-row correction decision (`update`/`skip`/`correct`) before being applied (D-057). The job's `status` becomes `partial_success` whenever any row was quarantined or left pending, `completed` only when every row reached a terminal applied/skipped state.

### Idempotency and Retry Behavior

`apply_catalog_import_row` accepts an idempotency key scoped per row (not per job), so a retried apply of the same row cannot double-create a product.

### Audit Trail

Every applied row's resulting product write generates the same `catalog_audit_events`/history-table entries an equivalent dashboard action would, with `actor_channel = 'import'` and `request_id` correlating back to the `catalog_import_jobs.id`.

### Storage Cleanup

Uploaded files are retained only as long as needed for error review and re-download, per a retention policy to be confirmed with the existing storage lifecycle rules (P00 §42) — not defined further here.

### Permission Requirements

`catalog_manage` (owner or manager with product-creation permission, D-058); employees are denied at the command layer regardless of any other flag.

### Security Controls for Malicious or Malformed Files

Server-side parsing only (never `eval`-style spreadsheet formula execution); reject files exceeding size/row limits before parsing begins; reject non-`.csv`/`.xlsx` content type by content inspection, not filename extension alone; treat every cell value as untrusted text requiring the same validation as manually typed input (no special trust for spreadsheet-sourced data).

## 14. WhatsApp, Voice, Text, and Photo Dependency (EIS §8.11)

Per Engineering Review §20 "WhatsApp, Voice, Text, and Photo Integration Dependencies" (Finding F14): the full pipeline (webhook → identity router → multi-modal processing → intent classification → role-based response) described in Source 04/05 does not exist anywhere in the repository. This section defines the catalog-specific contract that pipeline must eventually satisfy — it does not build the pipeline.

### Supported Catalog Intents

An extension of the Source 05 §3 intent taxonomy (which already includes `inventory_update`): a `catalog_update` intent family covering create-product, edit-price, edit-tax, search/find-product, and link/unlink-inventory sub-intents.

### Guided Clarification Requirements

Any extraction with confidence below the pipeline's own threshold (Source 05 §3: "If confidence is low, ask clarification. Never guess.") must produce a structured preview requiring explicit merchant confirmation before any catalog command is called — the conversational layer never calls a write command directly from raw extracted text.

### Media-Handling Boundary

Photo-assisted product capture (e.g., a shelf/label photo) follows the existing approved Vision pipeline (Source 04 §5: receipt image → Vision OCR → GPT parser) generalized to product images; Source 05 §5 "Vision Safety Rules" (safety check, then business-relevance check, only then store) applies identically to catalog photo capture. This EIS does not define new vision-processing logic.

### Confidence and Merchant-Confirmation Requirements

Identical to the dashboard's D-054 requirement: every conversational catalog mutation requires the same structured-preview-then-explicit-confirmation flow as any other channel — the conversational layer is a UI adapter over the same commands, not a separate authority (Source 12 §4 "Business logic shall never be duplicated for individual channels").

### No Autonomous Destructive or Financially Sensitive Writes

The catalog intent handler never calls `delete_catalog_product`, `archive_catalog_product`, or any price/tax/cost-write command without a prior confirmed preview step in the same conversation turn or an explicitly confirmed follow-up turn — never on first extraction.

### Use of the Same Server-Authoritative Catalog Commands as the Dashboard

The intent handler calls the exact commands in Section 15 (Section 12 below) with `actor_channel` set to `whatsapp`/`voice`/`photo` — no parallel catalog-write logic is implemented inside the conversational layer.

### Webhook Idempotency and Retries

Any catalog command invoked from the conversational layer supplies an idempotency key derived from the inbound WhatsApp message ID (or equivalent), consistent with Source 12 §24/Meta webhook-retry-safety requirements, reusing the same `catalog_write_idempotency_keys` contract every other channel uses.

### Auditability

`catalog_audit_events.actor_channel` and `request_id` (Section 5.7) already carry conversational provenance; no separate conversational audit log is needed.

### Permission and Business-Context Resolution

The identity router (Source 04 §3: Owner → Employee → Supplier → Unknown) resolves the sender to a business and role before any catalog intent is processed; the catalog intent handler receives an already-resolved `business_id`/permission context, exactly as every other command does — it does not perform its own identity resolution.

### Sequencing Constraints Before the Shared Conversational Engine Exists

Until the shared pipeline exists, the dashboard-based guided creation experience (structured preview, explicit confirmation; D-053, D-054) is fully buildable in Phase 1 using the same commands, satisfying the "guided" and "confirmation" requirements without WhatsApp/voice/photo specifically. No catalog-specific webhook, intent classifier, or media pipeline may be built ahead of or in place of the shared engine (Source 12 §4/§10 single-implementation principle) — Phase 3 begins only once that shared foundation exists.

## 15. API, RPC, and Command Contracts (EIS §8.12)

Implementation-neutral command surface (final naming/transport is a repository-convention decision at build time). Every write command shares the shape established by `create_inventory_movement`: `SECURITY INVOKER`, `search_path = public`, caller-supplied idempotency key, explicit permission check, row lock where concurrent mutation is possible, single-transaction atomicity.

| Operation | Purpose | Key inputs | Authorization | Idempotent | Consumers |
|---|---|---|---|---|---|
| `create_catalog_product` | Create a product | name, optional fields | `catalog_manage` | Yes | Dashboard, import, conversational |
| `update_catalog_product_identity` | Edit name/description/image/category/SKU/barcode | product_id, changed fields | `catalog_manage` | Yes | Dashboard, import, conversational |
| `update_catalog_product_unit` | Non-stock unit change | product_id, new unit | `catalog_manage`; rejects if stock-tracked or sales history exists | Yes | Dashboard, conversational |
| `assign_or_replace_catalog_inventory_link` | D-068 atomic safeguard | see Section 9 | `catalog_inventory_link_manage` + `inventory_view` | Yes | Dashboard, conversational |
| `remove_catalog_inventory_link` | D-047 removal | product_id | `catalog_inventory_link_manage` | Yes | Dashboard, conversational |
| `record_catalog_selling_price_change` | Immediate price change | product_id, new_price | `catalog_price_manage` | Yes | Dashboard, import, conversational |
| `schedule_catalog_selling_price` | Create pending price | product_id, new_price, effective_at | `catalog_price_manage` | Yes | Dashboard, conversational |
| `cancel_scheduled_catalog_selling_price` | Cancel pending price | product_id | `catalog_price_manage` | Yes | Dashboard, conversational |
| `activate_scheduled_catalog_prices` | Cron sweep | — (job-internal) | Service-role | Self-idempotent (Section 11) | `pg_cron` only |
| `record_catalog_tax_change` | Tax configuration change | product_id, mode, rate | `catalog_tax_manage` | Yes | Dashboard, import, conversational |
| `record_catalog_reference_cost_change` | Cost change | product_id, new_cost | `catalog_cost_manage` | Yes | Dashboard, conversational |
| `archive_catalog_product` / `reactivate_catalog_product` | Lifecycle | product_id | `catalog_manage` | Yes | Dashboard, conversational |
| `delete_catalog_product` | Conditional hard delete | product_id | `catalog_manage`; rejects if any dependent history exists (D-031) | Yes | Dashboard |
| `create_catalog_category` / `archive_catalog_category` | Category lifecycle | name / category_id | `catalog_manage` | Yes | Dashboard, import |
| `create_catalog_import_job`, `stage_catalog_import_rows`, `apply_catalog_import_row` | Import pipeline (Section 13) | file_ref / job_id / row decision | `catalog_manage` | Yes (per row for apply) | Dashboard |
| `catalog_products_search` | Permission-aware, multilingual search | business scope, term | `catalog_view` or `sale_use` (narrower shape) | N/A (read) | Dashboard, conversational |
| `catalog_product_read` / `catalog_products_list_batch` | Permission-aware detail/list read, cost/margin omitted per caller | product_id(s) | `catalog_view` or `sale_use` | N/A (read) | Dashboard, conversational |

Every command's result shape distinguishes success, validation failure, and permission failure as stable, distinct categories (never a generic "error"), so the frontend can never present a blocked action as successful (Blueprint §9 "Permission Behaviour," mirrored from SB-P-1.10 EIS §10).

## 16. Frontend and Lovable Responsibilities (EIS §8.13)

### Routes and Screens

Within the current approved route architecture (TanStack Router, `src/routes/_authenticated/`): `products.tsx` (list + creation entry), `products.index.tsx`, `products.$productId.tsx` (detail: identity, selling info, tax, inventory relationship, lifecycle, histories — per Blueprint §9 "Product Detail"), `products.import.tsx` (Phase 2b). `authed-header.tsx` gains a "Products" nav entry, following its own stated purpose ("so nav-link additions do not drift").

### Form and Preview States

Creation starts with required name only, optional fields visibly optional (Blueprint §9 "Product Creation Experience"). The inventory-link flow renders the D-068 preview (Section 9: current/proposed unit and price) as a distinct confirmation step, never inline with the link-selection form.

### Permission-Aware Presentation

Every screen renders only actions the caller's resolved permission flags allow (Section 7); unavailable actions are hidden or disabled without revealing other-business or higher-privilege state (Blueprint §9 "Permission Behaviour").

### Protected Cost/Margin Rendering

Cost fields render only when `catalog_product_read`'s response includes them (i.e., only for callers with `catalog_cost_manage`) — the frontend never independently decides to hide a field it already received; the omission happens server-side (Section 6).

### Inventory-Link Confirmation Flow

Two-step: (1) select target inventory item, see baseline confirmation (§9 general rule); (2) if the unit would change, see the D-068 preview and confirm/replace price — implemented as a single guided flow that calls `assign_or_replace_catalog_inventory_link` exactly once at final confirmation, never as two separate command calls.

### Import Preview/Error Experience

Staged rows (valid/invalid/conflict) render in three visually distinct groups (Blueprint §9 "Import and Correction Queue"), with conflict rows offering per-row update/skip/correct actions.

### Scheduled-Price Experience

Current and pending price rendered as visually distinct (Blueprint §9 "Price Experience"), pending price's activation time displayed in the business's local timezone (Section 11).

### Multilingual Search Behavior

Search input accepts any script; results separate "matches" from "possible matches — review" (Section 12), never merging the two.

### Loading, Empty, Validation, Conflict, and Failure States

Every command's distinct error categories (Section 15) map to a distinct, merchant-understandable UI state — never a generic error toast for a `STALE_STATE` versus a `PRICE_CONFIRMATION_REQUIRED` versus a permission denial.

### Frontend Responsibilities versus Server-Authoritative Responsibilities

The frontend never computes sale-readiness, normalized uniqueness, or D-068's atomic outcome itself — it only renders server-returned state and calls commands. All business-rule enforcement lives server-side (Sections 9–11), consistent with "frontend visibility is not authorization."

### Accessibility and Mobile Merchant Usability

Per Blueprint §9 "Accessibility Expectations" and "Mobile and Conversational Experience": labels, validation, focus, contrast, and confirmations perceivable without relying on color alone; critical creation/search/confirmation flows usable on a merchant's phone.

## 17. Audit and Observability (EIS §8.14)

- **Append-only audit events:** `catalog_audit_events` (generic fields) plus the four dedicated ledger-style tables (price, tax, cost, link) — see Section 5.
- **Correlation/request IDs:** every command call carries a `request_id`, propagated into whichever audit/history row it produces, enabling cross-table reconstruction of "what happened in this one user action."
- **Actor and channel attribution:** `actor_user_id`/`responsible_user_id` plus `actor_channel` on every audit-relevant write (Section 5.7, 5.3–5.6).
- **Before/after values where permitted:** full old/new values in every history table except that cost values are only ever returned to callers holding `catalog_cost_manage` (Section 6).
- **Protected financial-data handling:** `catalog_reference_cost_events` never appears in logs or metrics in raw form; if operational logging needs to reference a cost-write event, it logs the event's `id`, not its `old_cost`/`new_cost` values.
- **Operational logs:** command-level success/failure logged with business/product scope, operation name, and outcome category (mirroring SB-P-1.10 EIS §16's non-negotiable boundary: logs are diagnostic only, never a substitute business record — the history tables remain the sole audit authority).
- **Failure metrics:** rejection rate by error category (Section 15) tracked per operation, to detect misuse or UX confusion patterns (e.g., a spike in `STALE_STATE` suggesting a concurrency UX problem).
- **Import metrics:** rows_total/valid/quarantined/applied per job, tracked over time to catch systemic import-quality issues.
- **Scheduled-price activation metrics:** count and lag (activation time minus `effective_at`) per `activate_scheduled_catalog_prices` run, to catch cron-reliability regressions.
- **Conversational-channel traceability:** `actor_channel`/`request_id` already satisfy this (Section 14) — no separate mechanism.
- **Alerting expectations:** sustained increase in `IDEMPOTENCY_CONFLICT` or `STALE_STATE` rates, or any `activate_scheduled_catalog_prices` run exceeding its expected lag budget, warrants operational attention — thresholds are a specialist-review parameter, not fixed here.
- **Retention and access boundaries:** history tables are never purged (they are the permanent audit trail by Product Truth requirement); operational logs follow the repository's existing log-retention practice, independent of and never a substitute for history-table retention.

## 18. Security and Privacy (EIS §8.15)

- **Tenant isolation:** Section 6 — `business_id`-plus-RLS on every table, database-enforced cross-table consistency.
- **Least privilege:** every command checks the single, narrowest permission flag it needs (Section 7); no command performs an action broader than its stated purpose.
- **Permission enforcement:** layered database + command-layer + presentation (Section 7 "Enforcement Locations").
- **Protected cost/margin data:** Section 6, Section 10 — dedicated table, permission-aware read path only.
- **Upload security:** Section 13 — server-side parsing, size/type limits, content inspection over filename trust.
- **Malicious spreadsheet content:** never executed; every cell treated as untrusted text (Section 13).
- **Webhook/media trust boundaries:** the future conversational engine's own webhook-signature verification and media-safety checks (Source 04 §2, §25; Source 05 §5) apply before any catalog intent is processed — this EIS's catalog intent handler receives already-verified, already-safety-checked input, and does not re-implement those checks itself.
- **Service-role access:** limited to `activate_scheduled_catalog_prices` (Section 6 "Service-Role Boundaries"); no other command runs outside caller RLS context.
- **Secret handling:** no secret is introduced by this EIS; any future webhook/API credential belongs to the shared conversational-engine mission, not to catalog-specific configuration.
- **Audit-log confidentiality:** Section 17 — cost values never appear in logs; access to audit tables themselves follows the same permission flags as the entity they describe.
- **Rate limiting and abuse protection:** import job creation and scheduled-price creation are natural candidates for a per-business rate limit (e.g., N import jobs per hour) to prevent accidental or malicious resource exhaustion; exact limits are a specialist-review parameter, consistent with Source 04 §16 "Cost Protection Rules."
- **Safe error disclosure:** Section 9/15 — stable error categories only, never raw database or stack-trace detail returned to a client.

## 19. Migration and Rollout Strategy (EIS §8.16)

No migration is created or run by this EIS. Proposed sequence for detailed design:

1. **Prerequisite checks.** Confirm `businesses`, `inventory_items` schema shape matches Section 5's assumed composite-FK targets (already verified directly against current migrations for this EIS).
2. **Additive-first rollout.** Add `businesses.timezone` (additive, defaulted, non-breaking) before any catalog table. Add all Section 5 tables as net-new — no existing data requires transformation, since no prior catalog schema exists anywhere in the repository (confirmed by direct migration inspection).
3. **Backfill expectations.** None required — greenfield tables.
4. **Indexes and constraints ordering.** All `UNIQUE`/FK/`CHECK` constraints (Sections 5–11) must exist and be active before any write access is granted — no rollout step grants write access ahead of the constraints protecting it, mirroring SB-P-1.10 EIS §14 step 2.
5. **RLS rollout.** Enable RLS on every new table at creation time, before any application code path is granted access (SB-P-1.10 EIS §14 step 3 precedent).
6. **Command rollout.** Introduce the shared command layer (Section 15) before any UI surface is built against it (SB-P-1.10 EIS §14 step 5 precedent), so no feature can bypass server-authoritative validation from day one.
7. **Frontend enablement.** Ship dashboard routes (Section 16) only after their backing commands are live and tested.
8. **Feature flags.** A flag gating the Products nav entry and routes is justified for Phase 1 rollout (allows database/command layer to land ahead of merchant-visible UI) but is not required for any Product-Truth reason — purely a deployment-sequencing convenience.
9. **Permission-engine dependency sequencing.** Phase 2a (Manager/Employee enforcement) begins only once the shared flag table exists; until then, every command's permission check resolves to Owner-only (Section 7).
10. **Conversational-engine dependency sequencing.** Phase 3 begins only once the shared pipeline (Source 04/05) exists; the catalog intent handler is the only new component built at that time — no catalog-specific webhook infrastructure is built earlier.
11. **Rollback and forward-fix strategy.** Once any history-table row exists, rollback never deletes it (append-only principle, SB-P-1.10 EIS §14 "Migration Safety and Rollback" precedent, adopted verbatim here); a needed reversal is a forward-fix migration.
12. **Production verification gates.** Per Source 12 §65/§69: RLS and business-isolation tests (Section 17) pass before any production write access is enabled; a smoke test of `create_catalog_product` → `record_catalog_selling_price_change` → `assign_or_replace_catalog_inventory_link` → read-back, against a test business, before general availability.

## 20. Testing and Verification Matrix (EIS §8.17)

| Area | Required test coverage |
|---|---|
| Unit behavior | Each command in Section 15 independently unit-tested for its stated validation rules and error categories |
| Schema constraints | Every `UNIQUE`/`CHECK`/FK constraint in Section 5 verified to reject the violating case it exists to prevent |
| RLS and business isolation | Cross-business read/write attempts against every new table return no data and no side effect, including negative tests that denial never discloses existence (Section 6) |
| Permissions | Each of the seven flags (Section 7) independently tested against authorized and unauthorized callers, for both the Owner-only interim state and the future flag-based state |
| D-047 history boundaries | Assign/replace/remove all rejected once a (simulated) sale/linked-stock-event reference exists for the product; all permitted before then |
| D-068 atomicity and all failure modes | Cancellation, incomplete confirmation, validation failure, and save failure each leave product/unit/price/link completely unchanged; successful confirm-and-save is fully atomic under injected mid-transaction failure |
| Concurrency and stale clients | Two near-simultaneous calls to any price/tax/cost/link command against the same product: one succeeds, the other receives `STALE_STATE` or an equivalent rejection, never a silent overwrite |
| Price/tax/cost histories | Every write produces exactly one correctly old/new-valued, immutable event row; no `UPDATE`/`DELETE` path exists at any privilege level |
| Scheduled pricing and timezone behavior | Activation occurs within the defined lag budget (Section 11); a missed cron run self-heals; cancellation/replacement preserve full history; timezone conversion is correct for `Asia/Kolkata` at minimum |
| Multilingual matching | Exact normalized uniqueness rejects true duplicates and accepts genuinely distinct Malayalam/Manglish/English entries; possible-match suggestions never auto-apply |
| Imports | Valid rows apply, invalid rows never create a product, conflict rows require an explicit per-row decision, retried `apply_catalog_import_row` calls do not duplicate |
| Conversational command reuse | (Deferred to Phase 3, but the contract is testable now against Section 15's commands directly, simulating conversational-channel calls) |
| Audit history | Every meaningful field change (Section 5.7 field list) produces a `catalog_audit_events` row with correct old/new/actor/channel |
| Accessibility and critical UI states | Section 16 states rendered with correct labels/contrast/focus per Blueprint §9 "Accessibility Expectations" |
| Negative and adversarial cases | Cross-business ID guessing, malformed import files, oversized uploads, replayed idempotency keys with altered payloads, concurrent D-068 calls with conflicting target items |

## 21. Traceability Matrix (EIS §8.18)

| EIS Section | Primary Founder Decisions | Primary Blueprint Sections | Engineering Review Conclusion | Governance/Architecture Source | Future Verification Evidence |
|---|---|---|---|---|---|
| §5.1 `catalog_products` | D-001–D-005, D-020–D-028, D-051, D-052 | §7, §8 "Catalog Product," "Product Name and Description," "SKU," "Barcode," "Selling Unit" | "Data Model and Relationship Assessment" | Source 02 §3 (business-scoped table convention) | Schema test, uniqueness test |
| §5.2 `catalog_categories` | D-006–D-008, D-045, D-046 | §8 "Categories" | — | — | Schema test |
| §5.3–§5.5 history tables | D-009–D-019, D-036–D-043, D-062–D-064 | §8 "Selling Price," "Tax Treatment," "Reference Cost Price," "Selling-Price History," "Tax History" | "Write-Path, Concurrency, Idempotency, and Atomicity"; "Audit-History Architecture" | `inventory_movements` append-only precedent | Immutability test, history-correctness test |
| §5.6 link events, §8–§9 link integrity | D-001–D-005, D-047, D-068 | §8 "Product–Inventory Link," "Selling Unit"; §9 "Inventory-Link Experience"; Rule 28 | "Catalog–Inventory Link Integrity" | SB-P-1.10 §8 "Units of Measure" | D-068 atomicity test suite (§20) |
| §5.7 `catalog_audit_events` | D-064 | §8 "Audit History" | "Audit-History Architecture" (F18) | `transaction_correction_events` precedent | Audit-completeness test |
| §5.8 idempotency keys | — (engineering integrity, not product truth) | — | "Write-Path, Concurrency, Idempotency, and Atomicity" | `inventory_movement_idempotency_keys` precedent | Idempotency-conflict test |
| §5.9 `business_tax_settings` | D-018, D-019, D-059–D-061 | §8 "Tax Treatment," "Tax-Inclusive or Tax-Exclusive Pricing" | — | — | Pricing-mode-lock test |
| §5.10 import tables, §13 | D-055–D-058 | §8 "CSV and Excel Bulk Import"; §9 "Import and Correction Queue" | "Import Architecture and Safety Controls" (F13) | Source 02 §3.15A `file_import_jobs` | Import correctness/quarantine test |
| §5.11 timezone, §11 | D-043 | §8 "Scheduled Selling Price"; §9 "Price Experience" | "Timezone and Scheduled-Price Handling" (F12) | SB-P-1.10 EIS §4 "Event Time and Record Time Semantics" | Activation-lag/timezone test |
| §6 RLS design | D-047, Rule 4 | §8 "Business Ownership and Isolation" | "Row-Level Security and Business Isolation" | `inventory_items`/`inventory_movements` RLS precedent | Cross-business isolation test |
| §7 permission engine | D-016, D-033–D-035, D-048 | §8 "Permissions" | "Permission-Engine Dependency" (F7) | Source 02 §3.5 `employees` flag concept; Source 12 §13 | Permission-flag test |
| §9 D-068 command | D-047, D-068 | §8 "Product–Inventory Link," "Selling Unit"; §9; Rule 28 | "D-068 Atomic Safeguard" reasoning throughout | `create_inventory_movement`/`preview_inventory_movement` precedent | §20 D-068 test suite |
| §12 multilingual | D-023, D-024, D-026, Rules 8, 9, 27 | §5 "AI Assistant, Not AI Judge"; §8 "Product Name and Description," "SKU," "Barcode," "Categories," "Search and Filtering" | "Multilingual Search and Normalization Feasibility" | Source 11/12 Human Language Layer | Normalization/possible-match test |
| §14 conversational dependency | D-053, D-054 | §8 "WhatsApp, Voice, Text, and Photo Assistance" | "WhatsApp, Voice, Text, and Photo Integration Dependencies" (F14) | Source 04 (full pipeline); Source 05 §3, §14 | Deferred to Phase 3; contract testable now |
| §15 command surface | D-064, D-066 | §8 (all functional areas) | "API, RPC, and Command Contracts" boundary in §20 | `create_inventory_movement` contract shape | Per-command unit tests |
| §16 frontend | D-053, D-054 | §9 (all subsections) | — | Source 03 (routing, static-ID directive) | UI/accessibility test |
| §17 audit/observability | D-064 | §8 "Audit History" | "Security, Privacy, Observability, and Failure Recovery" | Source 02 §3.13 `system_errors` | Metrics/alerting review |
| §18 security/privacy | D-014, D-016, D-035 | §8 "Permissions" | "Security, Privacy, Observability, and Failure Recovery" | Source 17 Part A (capability governance) | Security test suite |
| §19 migration | — (engineering sequencing) | — | "Build Sequencing" | SB-P-1.10 EIS §14 precedent | Rollout gate checklist |

No material technical requirement in this EIS lacks at least one row above tracing it to a Founder decision or Blueprint section.

## 22. Engineering Questions and Risks (Required by Instruction §9)

### Engineering Questions

| # | Question | Disposition | Notes |
|---|---|---|---|
| 1 | Exact `pg_trgm` similarity threshold and whether it is sufficient for Malayalam/Manglish possible-match detection | `SPECIALIST REVIEW REQUIRED` | Section 12; not a Product Truth question — the Blueprint already permits a best-effort approach |
| 2 | Final import file size/row limits (proposed: 5,000 rows / 10 MB) | `SPECIALIST REVIEW REQUIRED` | Section 13; proposed value, not final |
| 3 | Final index set for every new table | `SPECIALIST REVIEW REQUIRED` | Deferred to query-plan-validated detailed design, mirroring SB-P-1.10 EIS §5's own decision gate |
| 4 | `activate_scheduled_catalog_prices` polling interval (proposed: 1 minute) | `SPECIALIST REVIEW REQUIRED` | Section 11; tradeoff between activation precision and job load |
| 5 | Whether the shared permission engine and shared conversational engine are sequenced as separate governed missions, parallel workstreams, or later phases within SB-P-1.11's own implementation | `REFINEMENT REQUIRED` | Not resolved by this EIS — this is a Mission Control sequencing decision per Engineering Review §21; this EIS defines the contract for either outcome without deciding it |
| 6 | Selling-unit/price treatment upon inventory-link **removal** | Resolved in this EIS (Section 8) — no product ambiguity found; documented for Mission Control confirmation rather than silently asserted | Not `FOUNDER DECISION REQUIRED`: removal writes no new unit/price value, so no reinterpretation risk analogous to D-068 exists; flagged here per instruction §7's "report any genuine unresolved decision" so Mission Control can override this reasoning if it disagrees |

No item above is `BLOCKED` or `FOUNDER DECISION REQUIRED`. Item 6 is deliberately not escalated as a Founder decision because, on the reasoning in Section 8, it is not a Product Truth ambiguity — it is flagged transparently so Mission Control can check that reasoning rather than have it silently embedded.

### Non-Blocking Dependencies

The permission-engine and conversational-engine dependencies (Sections 7, 14) are cross-mission, non-catalog-specific, and do not block Phase 1. They block only Phase 2a and Phase 3 respectively.

### Assumptions Requiring Repository Verification (before implementation begins)

- `businesses` table shape (Section 5.11) — verified directly for this EIS against current migrations; must be re-verified if any other mission alters `businesses` before implementation begins.
- No other mission has, since this EIS was written, introduced a `products`/`catalog` table or a permission/employees table — must be re-checked immediately before implementation.

### Areas Requiring Specialist Review

Supabase/architecture specialist review is recommended for: RLS policy correctness (Section 6), the D-068 transaction design (Section 9) under load, and the `pg_trgm`/index decisions (Engineering Questions 1–4) — consistent with SB-P-1.10's own precedent of an explicit Supabase Architecture and Security Review pass before EIS lock.

### Product Truth Conflicts

None identified. Every design decision in this EIS traces to an existing Founder decision or Blueprint section (Section 21); no conflict required escalation.

### Security Risks

Column-level cost/margin exposure if a future code change queries `catalog_reference_cost_events` directly instead of through the permission-aware read path (Section 6) — mitigated by keeping cost in its own dedicated table with no non-owner/non-`catalog_cost_manage` grant at all, so the risk requires a privilege-grant mistake, not merely an application-logic mistake, to materialize.

### Migration Risks

None beyond the standard additive-rollout risks addressed in Section 19; no destructive or data-transforming migration is required since the domain is greenfield.

### Operational Risks

`activate_scheduled_catalog_prices` job reliability — mitigated by the missed-run self-healing design (Section 11).

### Sequencing Risks

Building Phase 2a or Phase 3 catalog-specific logic ahead of the shared permission/conversational engines would create exactly the duplicate-implementation risk Source 12 §10 warns against — mitigated by this EIS explicitly gating those phases behind the shared foundations (Sections 7, 14) rather than describing a workaround.

### Technical-Debt Risks

Two: (1) if a future mission needs cost history but does not reuse `catalog_reference_cost_events`'s shape, a divergent pattern could emerge — mitigated by this EIS explicitly recommending the shape be reused; (2) the generic `catalog_audit_events` table (Section 5.7) is designed for reuse but is not yet used by any other mission — its first real multi-consumer validation will only occur once a second mission adopts it.

## 23. Definition of Done (for the eventual implementation, not this EIS)

Implementation of SB-P-1.11 Phase 1 is complete when:

- Every table in Section 5 (excluding Phase 2b/3-specific import/conversational tables) exists with RLS enabled and every constraint specified.
- Every Phase 1 command in Section 15 is the sole write path to its target table(s), verified by code review and the absence of any alternate write path.
- The D-068 command passes the full atomicity test suite (Section 20) including all four failure modes.
- Current price/tax/cost/unit are always correctly derivable and match the latest applicable history-table row in all test scenarios.
- Business isolation and Owner-scoped permission enforcement pass the full test suite (Section 20), with the flag-based Manager/Employee path structurally ready (Section 7) even though not yet enabled.
- Multilingual normalization enforces exact uniqueness correctly and possible-match suggestions never auto-apply.
- Scheduled-price activation meets its lag budget and self-heals after a missed run.
- Logging, error categorization, and metrics (Section 17) are in place and respect the observability boundaries stated there.
- No implementation detail in this EIS or the resulting code contradicts Sections 1–21 of the locked Product Blueprint.

Phase 2a is additionally complete when the shared permission engine exists and every flag in Section 7 is enforced through it. Phase 2b is additionally complete when the full import pipeline (Section 13) passes its test suite. Phase 3 is additionally complete when the shared conversational engine exists and the catalog intent handler (Section 14) passes its test suite.

## 24. Document Change Log

| Version | Description |
|---|---|
| 1.0 | Initial draft Engineering Implementation Specification, translating locked Product Blueprint SB-P-1.11 (Sections 1–21, D-001–D-068) into an implementation-ready design, per `instruction1.9.md`. Not yet reviewed, refined, or locked. |
