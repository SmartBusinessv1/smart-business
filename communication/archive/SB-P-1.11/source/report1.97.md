# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-2 — SUPABASE BACKEND ARCHITECTURE REVIEW

**Report ID:** report1.97  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Founder Workflow Reconciliation  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** `communication/live/instruction1.91.md`  
**Mode:** REVIEW MODE ONLY  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE

---

## 1. Executive Disposition

Supabase Backend Architecture reviewed the merged Founder Workflow Architecture Reconciliation in `communication/live/report1.96.md` against the current repository backend contracts.

Latest merged `main` reviewed:

`66d2cc3f9f002db24fe6c764189c378526992e18`

The Founder workflow is architecturally compatible with the current Catalog/Inventory truth split, Owner-only Phase 1 authority, D-047, D-068, append-only Inventory ledger, and the locked nineteen-command Catalog surface.

However, `report1.96.md` is **not yet implementation-ready from the Supabase backend perspective** because it makes one material false assumption and leaves two downstream database-contract consequences unresolved:

1. **Inventory-item creation does not currently have a durable idempotency operation.** The repository creates Inventory items through direct authenticated `INSERT` under RLS. A committed insert followed by a server crash before import-bookkeeping completion has no authoritative operation-outcome record for safe replay.
2. **Link-confirm retry cannot use one fixed per-row idempotency key across re-preview.** `assign_or_replace_catalog_inventory_link` persists `STALE_STATE` as a terminal idempotency outcome keyed to the preview token payload. A fresh preview changes `p_preview_token_id`; reusing the same idempotency key would correctly produce `IDEMPOTENCY_CONFLICT` instead of completing the link.
3. **Tenant-bound Inventory-import references to Catalog products create a new hard-delete dependency.** If `inventory_import_rows` persists matched/resolved Catalog Product foreign keys with fail-closed `NO ACTION`/`RESTRICT`, the existing `delete_catalog_product` dependent-history pre-check must be amended internally to include those new references or a raw FK violation can escape instead of the governed `DEPENDENT_HISTORY_CONFLICT` outcome.

These are bounded backend corrections. No Product Truth redesign, permission expansion, parser redesign, twentieth Catalog command, or production authority is required.

**Final verdict:**

`SUPABASE BACKEND ARCHITECTURE REVIEW — CHANGES REQUIRED`

---

## 2. Canonical Sources and Backend Evidence Reviewed

Reviewed from latest merged `main`:

- `communication/live/instruction1.91.md`;
- `communication/live/report1.96.md`;
- `communication/live/instruction1.90.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`;
- current SB-P-1.11 Catalog schema/function migrations;
- current SB-P-1.10 Inventory schema/function migrations;
- `src/integrations/supabase/inventory.ts`;
- `src/integrations/supabase/catalog.ts`;
- `src/integrations/supabase/auth-middleware.ts`;
- `src/integrations/supabase/client.server.ts`;
- current Catalog import support-table migration and security correction;
- current deterministic Catalog-import follow-up idempotency helper.

Relevant repository facts were verified directly rather than inferred from `report1.96.md`.

---

## 3. Verified Existing Backend Contracts

### 3.1 Inventory item creation

There is **no existing Inventory-item creation RPC/function with durable idempotency**.

Current application helper:

`createInventoryItem(...)`

performs a direct authenticated insert into:

`public.inventory_items`

with:

- `business_id`;
- `created_by`;
- `name`;
- `base_unit`.

Authorization is enforced through current Owner-only RLS.

Current `inventory_items` constraints include:

- `PRIMARY KEY (id)`;
- `UNIQUE (id, business_id)`;
- `UNIQUE (business_id, name)`;
- immutable `id`, `business_id`, and `base_unit` after creation.

This write path has no Inventory-item idempotency-key table and no terminal outcome retrieval mechanism.

### 3.2 Inventory movement creation

Verified existing RPC:

```sql
public.create_inventory_movement(
  p_idempotency_key uuid,
  p_operation text,
  p_item_id uuid,
  p_movement_type public.inventory_movement_type,
  p_direction public.inventory_direction,
  p_quantity numeric,
  p_reason text,
  p_occurred_at timestamptz,
  p_correcting_of uuid,
  p_allow_negative_stock boolean,
  p_business_event_type text,
  p_business_event_id uuid
) RETURNS public.inventory_movements
```

Authority pattern:

- `SECURITY INVOKER`;
- caller identity from `auth.uid()`;
- Owner visibility through RLS on `inventory_items` / Inventory tables;
- durable idempotency through `inventory_movement_idempotency_keys` scoped by `(business_id, operation, idempotency_key)`;
- payload-fingerprint conflict detection;
- per-item advisory-lock serialization;
- append-only movement writes;
- responsible actor stored as `responsible_user_id = auth.uid()`.

Opening Stock is already protected by:

- `movement_type = 'opening_stock'` requiring `direction = 'increase'`;
- one-opening-stock-per-item unique index;
- active-item requirement for ordinary movements;
- movement idempotency;
- ledger-derived quantity rather than direct current-stock mutation.

### 3.3 Catalog product creation

Verified existing command:

```sql
public.create_catalog_product(
  p_idempotency_key uuid,
  p_name text,
  p_description text DEFAULT NULL,
  p_category_id uuid DEFAULT NULL,
  p_sku text DEFAULT NULL,
  p_barcode text DEFAULT NULL,
  p_selling_unit text DEFAULT 'piece'
) RETURNS public.catalog_command_result
```

Authority pattern:

- `SECURITY DEFINER` owned by the narrow Catalog identity executor;
- actor/business re-derived internally;
- business-scoped idempotency with payload fingerprint;
- business-scoped normalized SKU uniqueness already enforced by Catalog schema;
- Catalog audit event written inside the successful command transaction.

The public signature does not need to change for automatic SKU generation.

### 3.4 Catalog ↔ Inventory link safeguard

Verified existing preview command:

```sql
public.preview_catalog_inventory_link_change(
  p_product_id uuid,
  p_requested_action text,
  p_target_inventory_item_id uuid DEFAULT NULL
) RETURNS public.catalog_link_preview_result
```

The preview is intentionally not idempotency-tracked because it is a disposable proposal.

Verified existing durable command:

```sql
public.assign_or_replace_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid,
  p_confirmed_price numeric DEFAULT NULL
) RETURNS public.catalog_command_result
```

The existing link path preserves:

- same-business target validation;
- D-047 dependent-history rejection;
- D-068 price/unit confirmation;
- stale/expired/superseded preview rejection;
- existing nineteen-command Catalog surface.

A stale preview is persisted as terminal `STALE_STATE` under the supplied idempotency key.

### 3.5 Catalog import bookkeeping precedent

Current `catalog_import_batches` / `catalog_import_rows` establish the proven support-table pattern:

- separate bookkeeping from Product Truth;
- business-bound composite parent/child FK;
- stable row number and row idempotency uniqueness;
- `authenticated` SELECT-only;
- `anon` denied;
- server-only service-role bookkeeping writes;
- Owner-only authenticated RLS;
- no batch→row cascade deletion;
- durable row follow-up state;
- batch compare-and-set lifecycle.

This pattern is suitable to model Inventory import support, but the Inventory import schema must not be a literal copy because the orchestration state and domain references differ.

---

# 4. SUPA-1 — Inventory Import Support Structure

**Finding: ACCEPTABLE DIRECTION, EXACT CONTRACT REQUIRED.**

Separate `inventory_import_batches` / `inventory_import_rows` are appropriate. Extending the Catalog-shaped support tables would mix Catalog commercial follow-up state with Inventory identity/link/ledger onboarding state and would create unnecessary nullable dual-domain columns.

## 4.1 Minimum batch contract

Required minimum physical contract:

### `inventory_import_batches`

- `id uuid PRIMARY KEY DEFAULT gen_random_uuid()`;
- `business_id uuid NOT NULL`;
- `initiated_by uuid NOT NULL`;
- `original_filename text NOT NULL`;
- `file_kind text NOT NULL CHECK (file_kind IN ('csv','xlsx'))`;
- `row_count integer NOT NULL CHECK (row_count >= 0)`;
- `status text NOT NULL DEFAULT 'previewed' CHECK (status IN ('previewed','committing','committed','failed'))`;
- `created_at timestamptz NOT NULL DEFAULT now()`;
- `committed_at timestamptz NULL`;
- `UNIQUE (business_id, id)`;
- bidirectional `status='committed'` / `committed_at IS NOT NULL` coherence;
- Owner-history index `(business_id, created_at DESC, id)`.

No ordinary delete path is required.

## 4.2 Minimum row contract

Inventory import requires separate classification and execution state rather than one ambiguous overloaded status.

Required minimum fields:

- `id uuid PRIMARY KEY DEFAULT gen_random_uuid()`;
- `batch_id uuid NOT NULL`;
- `business_id uuid NOT NULL`;
- `row_number integer NOT NULL CHECK (row_number >= 1)`;
- `classification_state text NOT NULL` with a closed vocabulary including:
  - `READY`;
  - `POSSIBLE_MATCH`;
  - `NEEDS_CORRECTION`;
  - `SKIPPED`;
- `execution_state text NOT NULL` with a closed lifecycle such as:
  - `PENDING`;
  - `IN_PROGRESS`;
  - `FAILED`;
  - `COMPLETE`;
- `parsed_snapshot jsonb NOT NULL` containing allowlisted Inventory-import fields only;
- `correction_reason text NULL` using closed reason codes, never raw SQL/parser errors;
- `matched_catalog_product_id uuid NULL`;
- `matched_inventory_item_id uuid NULL`;
- `resolved_catalog_product_id uuid NULL`;
- `resolved_inventory_item_id uuid NULL`;
- `opening_stock_movement_id uuid NULL` where Opening Stock was requested and completed;
- `row_idempotency_key uuid NOT NULL DEFAULT gen_random_uuid()`;
- durable step-state / attempt-state data sufficient to distinguish Catalog creation, Inventory creation, link preview/confirm, and Opening Stock completion;
- `attempt_count integer NOT NULL DEFAULT 0 CHECK (attempt_count >= 0)` or equivalent bounded retry metadata;
- `last_attempt_at timestamptz NULL`;
- `resolved_by uuid NULL`;
- `resolved_at timestamptz NULL`;
- `created_at timestamptz NOT NULL DEFAULT now()`;
- `updated_at timestamptz NOT NULL DEFAULT now()`.

Required uniqueness:

- `UNIQUE (batch_id, row_number)`;
- `UNIQUE (business_id, row_idempotency_key)`.

Required tenant binding:

```sql
FOREIGN KEY (business_id, batch_id)
REFERENCES inventory_import_batches (business_id, id)
ON DELETE RESTRICT
```

Same-business Catalog and Inventory references must use composite foreign keys supported by the referenced tables' existing composite unique keys.

No `ON DELETE CASCADE` is acceptable for batch→row audit-adjacent evidence.

**SUPA-1 status:** `CHANGE REQUIRED` only because `report1.96.md` does not yet lock this exact persistence contract.

---

# 5. SUPA-2 — RLS / Grants / Privileged Bookkeeping

**Finding: ACCEPTABLE WITH LOCKED NARROW MODEL.**

Use the already-proven Catalog-import posture.

## 5.1 Authenticated path

For both Inventory import support tables:

- `anon`: no access;
- `authenticated`: SELECT only;
- Owner-only SELECT RLS scoped to `businesses.owner_id = auth.uid()`;
- Manager: no new policy/grant;
- Employee: no new policy/grant;
- no authenticated INSERT/UPDATE/DELETE.

Because this repository has broad forward default privileges, the future migration must immediately neutralize inherited privileges before applying narrow grants.

## 5.2 Server-only bookkeeping

The existing server-only privileged client is acceptable for **support-table bookkeeping only** after caller JWT validation and Owner/business re-derivation.

It must not:

- establish authorization;
- write Catalog Product Truth;
- write Inventory business truth;
- invoke Catalog commands under service-role identity;
- create Inventory items under bypass identity;
- create Opening Stock under bypass identity;
- choose arbitrary tables/columns from client input.

Catalog/Inventory truth mutations remain caller-identity governed.

No broader service-role grant is needed beyond the two new support tables.

**SUPA-2 status:** `PASS WITH CONTRACT CONDITIONS`.

---

# 6. SUPA-3 — Inventory-First Orchestration and Atomicity

**Finding: CHANGES REQUIRED.**

Full atomicity across Catalog command, Inventory item creation, link preview/confirm, and movement creation is not available through the current multi-call server architecture. Deterministic resume is therefore required.

The proposed sequence remains valid:

1. exact candidate discovery;
2. merchant confirmation where required;
3. governed Catalog creation if required;
4. governed Inventory-item creation;
5. fresh link preview;
6. governed link confirmation including D-068;
7. Opening Stock movement.

## 6.1 Material correction — Inventory item creation

`report1.96.md` states that every governed step already carries its own idempotency contract, but then acknowledges that Inventory creation is a direct RLS insert with only a durable support-row flag.

A support-row flag is not equivalent to operation idempotency.

Failure window:

1. Inventory INSERT commits;
2. server times out/crashes;
3. bookkeeping flag was not yet updated;
4. retry cannot know from an authoritative operation record whether the insert committed.

`UNIQUE (business_id, name)` may prevent one duplicate spelling, but it does not provide payload-fingerprint conflict detection or prove that the existing row is the result of this import attempt rather than an independent concurrent merchant action.

Before Build Lock, the architecture must lock one durable Inventory-item creation replay mechanism.

### Preferred minimum correction

Add a narrow, caller-identity, `SECURITY INVOKER` idempotent Inventory-item creation operation, for example an Inventory-domain RPC with:

- idempotency key;
- item name;
- base unit;
- caller-derived business/actor;
- operation-scoped payload fingerprint;
- authoritative outcome retrieval/replay;
- no permission expansion;
- same Owner RLS authority as direct insert.

A dedicated Inventory-item idempotency structure may be used if needed.

This is **not** a Catalog command and does not affect the locked nineteen.

An alternative design may use a preallocated stable Inventory-item ID persisted before mutation plus strict replay/payload verification, but it must provide equivalent unknown-outcome safety. Merely checking a support-row boolean is insufficient.

## 6.2 Partial-failure semantics

### Catalog created, Inventory creation fails

- preserve the successfully created Catalog product;
- record its exact Product ID durably in the import row;
- row remains execution `FAILED`, batch cannot become committed;
- retry resumes from Inventory creation with the same Inventory-create operation identity;
- never create another Catalog product for that row;
- no silent destructive rollback.

The temporary Catalog-only state is acceptable only as an explicit incomplete import outcome that remains retryable and visible in support state; it must never be reported as a completed Inventory onboarding row.

### Inventory created, link cannot complete

- preserve the Inventory entity;
- persist its exact Inventory Item ID;
- do not create Opening Stock;
- row remains `FAILED`/retryable;
- retry obtains a new link preview and attempts the governed link again;
- no batch commit while a required link remains incomplete.

### D-068 preview becomes stale

Re-preview is correct, but the durable link-confirm idempotency key contract must account for the new preview token. See SUPA-4.

### Opening Stock

Opening Stock may execute only after link success is re-read/verified as current truth.

### Timeout / unknown outcome

Every mutating step must resolve through either:

- an existing durable idempotent command outcome; or
- the new locked Inventory-item creation replay contract.

**SUPA-3 status:** `CHANGE REQUIRED`.

---

# 7. SUPA-4 — Idempotency Contract

**Finding: CHANGES REQUIRED.**

One stable `row_idempotency_key` is an appropriate root identity. Deterministic operation-specific keys may be derived with a fixed namespace and operation labels, matching the existing Catalog-import UUIDv5 pattern.

Required operation domains include at minimum:

- `catalog_create`;
- `inventory_create`;
- `catalog_inventory_link_confirm` attempt identity;
- `opening_stock`.

Each governed backend operation must retain its own existing operation namespace/fingerprint semantics.

## 7.1 Link-confirm key must be preview-generation scoped

A fixed key such as:

`derive(row_key, 'catalog_inventory_link_confirm')`

is unsafe across re-preview.

`assign_or_replace_catalog_inventory_link` fingerprints the preview token and persists `STALE_STATE` as a terminal outcome. If the old preview expires:

1. old token + key receives terminal `STALE_STATE`;
2. orchestrator re-previews and receives a new token;
3. same key + new token has a different payload fingerprint;
4. command correctly returns `IDEMPOTENCY_CONFLICT`.

Therefore a re-preview must create a **new deterministic attempt identity** while still remaining replay-stable for that exact preview.

Acceptable contract:

- persist the preview token (or a monotonic link-attempt generation) in support state;
- derive link-confirm key from `(row_idempotency_key, link_attempt_generation)` or `(row_idempotency_key, preview_token_id)`;
- retries of the same preview reuse the same key;
- a newly generated preview receives a new key;
- never reuse the stale terminal key with a different token.

## 7.2 Generated SKU replay

If SKU generation occurs inside `create_catalog_product` only after the command's idempotency lookup, replay of the same create request remains stable because the completed command outcome is replayed rather than generation running again.

The command amendment must not add the generated SKU to the caller-supplied fingerprint, because it is not caller input.

**SUPA-4 status:** `CHANGE REQUIRED`.

---

# 8. SUPA-5 — SKU Generation Backend Contract

**Finding: PASS WITH IMPLEMENTATION CONDITIONS.**

The existing business-scoped normalized SKU uniqueness constraint is sufficient for both merchant-supplied and generated SKU values.

The public `create_catalog_product` signature can remain unchanged.

Required internal behavior when `p_sku` is blank/null:

1. resolve idempotency before generating a new SKU;
2. generate a non-sensitive random candidate using a cryptographically secure source available inside the database/runtime selected by the final implementation;
3. normalize using the existing Catalog identifier normalization rule;
4. attempt insert under the existing business-scoped unique constraint;
5. on `unique_violation`, retry **only** when the violated constraint is the SKU uniqueness constraint for an internally generated SKU;
6. do not retry name/barcode/other uniqueness failures as though they were SKU collisions;
7. use a bounded retry count;
8. on exhaustion, return a governed failure rather than relaxing uniqueness;
9. preserve archived-product SKU reservation because archived rows remain within the same uniqueness constraint;
10. later merchant replacement remains through `update_catalog_product_identity`, preserving the existing audit event.

No new public Catalog command is needed.

**SUPA-5 status:** `PASS WITH CONDITIONS`.

---

# 9. SUPA-6 — Match / Duplicate Backend Rules

**Finding: PASS WITH EXACT-CANDIDATE RULES.**

Candidate discovery and mutation must remain separate.

Catalog-side candidate discovery may reuse `catalog_products_search`, but an exact candidate must be confirmed server-side against canonical normalized identity fields rather than treating a fuzzy/ranked result itself as authoritative.

Required handling:

- normalized exact SKU when supplied;
- normalized exact barcode when supplied;
- normalized exact product name;
- include archived Catalog records in candidate discovery where required to avoid silent identity reuse;
- already-linked Catalog products must never be silently linked to a second Inventory item;
- current `inventory_item_id` link state must be read before presenting/committing a candidate;
- Inventory candidate discovery remains business-scoped under Owner RLS;
- ambiguous or multiple candidates become `POSSIBLE_MATCH`;
- fuzzy rank may surface a candidate but may never authorize mutation;
- foreign/nonexistent identifiers remain non-disclosing through existing scoped reads/commands.

No additional Product Truth is required.

**SUPA-6 status:** `PASS WITH CONDITIONS`.

---

# 10. SUPA-7 — Opening Stock Ledger Integrity

**Finding: PASS.**

Use existing `create_inventory_movement` unchanged for Opening Stock.

Required call contract:

- `p_movement_type = 'opening_stock'`;
- `p_direction = 'increase'`;
- positive quantity only;
- stable operation-specific idempotency key;
- importing Owner remains caller so `responsible_user_id` is correctly attributed;
- no direct quantity update;
- no call before the governed Catalog↔Inventory link is current and valid;
- archived Inventory items are rejected by existing function logic;
- one-opening-stock-per-item remains data-layer enforced.

The existing `business_event_type` / `business_event_id` contract is deliberately loosely coupled. The function does not maintain a registry of allowed event types; the owning domain is responsible for validating event existence and same-business scope before calling.

Therefore no `create_inventory_movement` signature change or event-type registration is required merely to use an `inventory_import_row` event reference. The future server flow must validate that reference before the movement call.

Support-table state is never Inventory truth.

**SUPA-7 status:** `PASS`.

---

# 11. SUPA-8 — D-047 and D-068 Preservation

**Finding: PASS.**

The existing pair is reusable without changing the nineteen-command surface:

- `preview_catalog_inventory_link_change`;
- `assign_or_replace_catalog_inventory_link`.

The preview path already checks dependent linked stock history and returns `DEPENDENT_HISTORY_CONFLICT` where D-047 forbids mutation.

The durable assign path already enforces the preview token and `PRICE_CONFIRMATION_REQUIRED` safeguard needed by D-068.

Inventory-first onboarding must establish the link before Opening Stock so the newly created item has no linked stock-event history at link time.

No twentieth public Catalog command is necessary.

**SUPA-8 status:** `PASS`.

---

# 12. SUPA-9 — Import Lifecycle / Failure Semantics

**Finding: PASS ONLY AFTER THE SUPA-3 / SUPA-4 CORRECTIONS ARE LOCKED.**

Batch lifecycle may reuse:

`previewed → committing → committed`

or:

`previewed → committing → failed → committing`

Atomic batch claim must be one compare-and-set update scoped by:

- opaque batch ID;
- server-derived business ID;
- eligible prior state (`previewed` / retryable `failed`).

Exactly one claimant may proceed.

A batch may become `committed` only when every row requiring truth mutation is complete or explicitly `SKIPPED`/non-actionable under a final merchant decision.

Rows with `NEEDS_CORRECTION`, unresolved `POSSIBLE_MATCH`, or execution `FAILED` may not be silently counted as successfully onboarded.

Recommended separation:

- classification state = validation/match decision;
- execution state = multi-step commit progress.

This is clearer than overloading one row status with both pre-commit and post-commit semantics.

Step completion must be durable before the next step is considered complete, but unknown-outcome windows must resolve against authoritative operation outcomes, not only support flags.

**SUPA-9 status:** `CHANGE REQUIRED` transitively until SUPA-3/SUPA-4 are reconciled.

---

# 13. SUPA-10 — Parser Gate Separation

**Finding: PASS — INDEPENDENT GATE REMAINS OPEN.**

This review does not resolve or redesign the existing Catalog import parser/runtime security gate.

Database-facing invariants remain:

- file parse/structural validation/row classification complete before any Catalog or Inventory truth mutation;
- preview creates support/bookkeeping state only;
- no raw CSV/XLSX binary is retained in Supabase by this workflow;
- support bookkeeping cannot establish business-truth authority;
- parser/runtime failure during preview creates no Catalog, Inventory-item, link, or Opening Stock truth;
- eventual Inventory import implementation must use the same approved parser-security gate rather than bypassing it.

**SUPA-10 status:** `PASS — DEPENDENCY REMAINS OPEN`.

---

# 14. SUPA-11 — Template Backend Impact

**Finding: DATABASE OBJECT NOT REQUIRED.**

Catalog and Inventory downloadable templates are not business truth and contain no merchant-private data.

Preferred backend impact:

- static/versioned application assets; or
- equivalent deterministic read-only application response.

Do not create a Supabase table, Storage truth model, or merchant-scoped database record merely to serve template files.

**SUPA-11 status:** `PASS / NOT REQUIRED`.

---

# 15. Additional Backend Dependency — Catalog Hard Delete

A new `inventory_import_rows` table should use same-business composite FKs for matched/resolved Catalog Product references.

That safe FK posture has a direct consequence already learned from Catalog import: an imported/matched Product referenced by support evidence cannot be physically deleted while the FK remains.

Current `delete_catalog_product` was previously amended to pre-check `catalog_import_rows` so this dependency returns governed `DEPENDENT_HISTORY_CONFLICT` instead of a raw FK violation.

The future Inventory import migration creates the same dependency from `inventory_import_rows`.

Therefore Build Lock must also authorize a bounded internal-body amendment to existing `delete_catalog_product` so its dependent-history pre-check includes `inventory_import_rows` matched/resolved Product references.

Requirements:

- no signature change;
- no authority change;
- no twentieth Catalog command;
- same business scope;
- same sanitized `DEPENDENT_HISTORY_CONFLICT` outcome;
- narrow executor SELECT grant/RLS policy on the new support table only if required by the current executor architecture.

This impact is missing from `report1.96.md`'s backend map.

---

# 16. Required Backend Impact Map

| Backend object | Classification | Required disposition |
|---|---|---|
| `inventory_items` | **EXISTING / REUSED** | Remains Inventory identity truth. Current direct insert path is insufficient for import unknown-outcome idempotency. |
| Inventory-item idempotent creation operation | **NEW** or **EXISTING PATH AMENDED BY LOCKED EQUIVALENT** | Must provide durable replay/conflicting-payload/terminal-outcome semantics under caller identity. Preferred narrow `SECURITY INVOKER` Inventory-domain RPC. |
| Inventory-item creation idempotency structure | **NEW if RPC design uses durable idempotency table** | Business + operation + key scoped, payload fingerprint, result item reference. Not required only if an equivalent preallocated-ID replay design is formally locked. |
| `inventory_movements` | **EXISTING / REUSED** | Opening Stock remains ledger truth. |
| `inventory_movement_idempotency_keys` | **EXISTING / REUSED** | Opening Stock replay protection. |
| `create_inventory_movement` | **EXISTING / REUSED** | No signature change required. |
| `catalog_products` | **EXISTING / REUSED** | Existing business/SKU uniqueness and link fields remain truth. |
| `create_catalog_product` | **EXISTING / AMENDED** | Internal generated-SKU logic only; public signature/authority unchanged. |
| `catalog_products_search` | **EXISTING / REUSED** | Candidate discovery only; exact server comparison required before mutation. |
| `preview_catalog_inventory_link_change` | **EXISTING / REUSED** | Disposable fresh preview; no idempotency key. |
| `assign_or_replace_catalog_inventory_link` | **EXISTING / REUSED** | Durable link; orchestration must use preview-generation-scoped derived idempotency key. |
| `delete_catalog_product` | **EXISTING / AMENDED** | Internal dependent-history check must include future `inventory_import_rows` Product references. No signature/authority change. |
| `catalog_link_preview_tokens` | **EXISTING / REUSED** | Fresh token required after stale/expired attempt. |
| `inventory_import_batches` | **NEW** | Narrow support table, Owner read, server-only bookkeeping, business-bound. |
| `inventory_import_rows` | **NEW** | Narrow support table with classification + execution state, tenant-bound domain references, stable row identity. |
| Batch/row composite FK | **NEW** | `(business_id,batch_id)` → batch `(business_id,id)`, RESTRICT/NO ACTION. |
| Catalog Product support FKs | **NEW** | Same-business matched/resolved Product references. |
| Inventory Item support FKs | **NEW** | Same-business matched/resolved Inventory references. |
| Opening Stock movement support reference | **NEW** | Optional evidence reference after movement success; must preserve same-business/item coherence if implemented as FK. |
| Inventory import RLS policies | **NEW** | Owner SELECT only; no Manager/Employee expansion. |
| Inventory import grants | **NEW** | Explicitly neutralize default ACL; authenticated SELECT only; anon denied. |
| server-only support bookkeeping path | **EXISTING PATTERN / NEW FIXED OPERATIONS** | Extend existing server-only pattern to exactly two new support tables only. |
| deterministic derived step keys | **EXISTING PATTERN / AMENDED OPERATION SET** | Extend UUIDv5-style domain labels; link-confirm key must include preview attempt/token generation. |
| Catalog/Inventory template DB structure | **NOT REQUIRED** | Static/versioned non-truth asset mechanism. |
| twentieth public Catalog command | **NOT REQUIRED / REJECTED** | Must remain absent. |

---

# 17. Exact Required Reconciliation Before Build Lock

Mission Control should require the architecture/EIS package to bind these corrections before Build Mode:

### BKR-1 — Inventory item creation replay safety

Replace the statement that Inventory-item creation "already carries its own durable idempotency contract."

Lock one real unknown-outcome-safe design. Preferred:

- caller-JWT `SECURITY INVOKER` Inventory-item create RPC;
- stable idempotency key;
- payload fingerprint;
- same-business Owner RLS;
- durable completed result replay;
- deterministic conflict on same key/different payload.

### BKR-2 — Link re-preview idempotency

Define link-confirm keys per preview generation/token, not one immutable row-wide link key.

A terminal `STALE_STATE` key may never be reused with a fresh preview token.

### BKR-3 — Inventory-import support-table physical contract

Lock columns, checks, composite tenant FKs, unique row identity, RLS, grants, indexes, no destructive cascade, and classification/execution state semantics.

### BKR-4 — Catalog hard-delete dependency

Amend `delete_catalog_product`'s internal dependent-history pre-check to include `inventory_import_rows` Product references so safe FKs do not create raw database errors.

### BKR-5 — Batch terminal rule

A batch cannot become committed while any required row execution is `FAILED`, `IN_PROGRESS`, unresolved `POSSIBLE_MATCH`, or otherwise incomplete.

---

# 18. Unresolved Backend Assumptions / Evidence Gaps

No evidence gap requires stopping the mission.

The repository is sufficient to establish the current architecture and the bounded corrections above.

The following are Build-implementation verification items, not unresolved architecture authority:

- exact final generated-SKU format/entropy length;
- bounded generated-SKU collision retry count;
- query-plan/index tuning for Inventory import support reads after schema exists;
- exact closed error-code vocabulary for Inventory row validation/runtime failures;
- whether an optional FK from `opening_stock_movement_id` to `inventory_movements` is preferable to a validated loose event reference in the final migration.

The independent parser/runtime gate remains unresolved by design and must stay separate.

---

# 19. Product Classification Confirmation

## Build Now

- Inventory / Opening Stock CSV/XLSX onboarding;
- Catalog downloadable template;
- Inventory / Opening Stock downloadable template;
- automatic Smart Business SKU when merchant SKU is absent;
- one channel-neutral SKU domain rule;
- inventory-first Catalog establishment/linking before Opening Stock;
- explicit duplicate/match review;
- D-068 safeguard;
- bounded backend corrections BKR-1 through BKR-5 required to make the above implementation-safe.

## Build Later

- merchant-configurable SKU formats;
- barcode/SKU label printing;
- batch/lot/expiry import;
- unit-conversion/import packaging;
- historical bulk reconciliation tooling unless separately authorized.

## Add-on

None.

## Separate Product

None.

## Reject

- merged Catalog/Inventory truth;
- direct current-stock writes;
- silent duplicate creation/merge/overwrite/link;
- silent post-history linking contrary to D-047;
- channel-specific SKU logic;
- SKU as barcode/legal identifier substitute;
- permission expansion for convenience;
- twentieth public Catalog command;
- parser-gate bypass;
- service-role mutation of Catalog/Inventory business truth;
- support-row completion flags used as a substitute for authoritative operation idempotency.

---

# 20. No Implementation Confirmation

Under this mission:

- no application code was modified;
- no dependency was installed;
- no migration was created or applied;
- no Supabase schema, function, RLS, grant, role, or data was mutated;
- no dedicated-test-project write occurred;
- no production write occurred;
- no service-role permission was expanded;
- no Lovable mutation occurred;
- no parser architecture was redesigned;
- no Product Truth was modified;
- no Build Lock or Build Mode authority was issued;
- no Catalog command was added.

Only this bounded architecture review report was created.

---

# 21. Next Logical Step

Human-review and merge this report.

Because the verdict is `CHANGES REQUIRED`, Mission Control should **not yet issue the bounded Security & Permissions Architecture review as though the backend gate had passed**.

The next architecture action should be a documentation-only reconciliation of `report1.96.md` / the implementation architecture package against BKR-1 through BKR-5, followed by a narrow Supabase re-confirmation.

The independent parser/runtime gate remains separate.

Production migration and Build Mode remain blocked.

---

# 22. Final Verdict

`SUPABASE BACKEND ARCHITECTURE REVIEW — CHANGES REQUIRED`
