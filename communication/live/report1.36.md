# SMART BUSINESS MISSION CONTROL

# Report 1.36 — Joint Security and Database Contract Review

**Mission ID:** `SB-P-1.11-SR1`

**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`

**Mission Name:** Joint Security and Database Contract Review

**Lead Reviewing Room:** Security & Permissions Architecture

**Supporting Reviewing Room:** Supabase Backend Architecture

**Status:** REVIEW COMPLETE — CORRECTIONS REQUIRED

**Implementation Authority:** NONE

---

## 1. Mission Identity and Review Boundary

This report executes `communication/live/instruction1.36.md` and consolidates the completed Supabase Backend Architecture supporting review with the independent lead Security and Permissions review.

The reviewed evidence is the complete Lovable Plan Mode output titled:

`SB-P-1.11 Initial Phase 1 — Corrected Executable Engineering Contract`

This report is a technical review only. It does not modify or approve Product Truth, the Product Blueprint, the EIS, the Engineering Contract, the Lovable Build Prompt, the Verification Checklist, the Founder Lovable Brief, application code, SQL, migrations, RLS, roles, grants, functions, Supabase state, Lovable state, infrastructure, deployment, or production.

## 2. Sources Reviewed

- `communication/live/instruction1.36.md`
- complete Lovable Plan Mode output: `SB-P-1.11 Initial Phase 1 — Corrected Executable Engineering Contract`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `docs/implementation/SB-P-1.11/engineering-contract.md`
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md`
- `docs/implementation/SB-P-1.11/verification-checklist.md`
- `docs/implementation/SB-P-1.11/founder-lovable-brief.md`
- applicable accepted database, readiness, D-068, token-lifecycle, and file-reference resolutions
- Supabase Backend Architecture supporting review supplied by Mission Control
- current read-only Supabase environment evidence: project `smart-business`, PostgreSQL 17, active and healthy; existing public tables retain RLS

The locked sources remain authoritative. The Lovable proposal is review evidence only.

## 3. Complete Proposal Review Confirmation

The complete corrected proposal was reviewed, including:

- all twelve proposed Phase 1 tables;
- every declared composite/result type;
- the closed public rejection contract;
- all nineteen command signatures;
- server-derived actor and business scope;
- authenticated table and function privileges;
- executor ownership, grants, RLS interaction, and safe search-path requirements;
- idempotency claim, finalization, replay, and outcome lookup;
- reference-cost confidentiality;
- general audit controls;
- D-068 preview, confirmation, lifecycle, replay, expiry, minimization, and retention;
- product search ordering and cursor behavior;
- product-history delivery;
- file-reference validation;
- phase-gated provenance;
- the SR-1 through SR-14 questions.

## 4. Supporting-Room Findings

The supporting review found the proposal directionally aligned but not executable without correction. Its principal findings are accepted by the lead room:

1. authenticated table reads must be opt-in and table-specific;
2. reference cost must have one coherent current-state and immutable-history contract;
3. expired preview rows must not block fresh previews;
4. the search cursor must cover the complete ordering tuple;
5. product history needs a real carrier inside the approved nineteen-command surface;
6. the expected-state fingerprint is integrity evidence, not bearer-secret material;
7. expired interaction classification and retention anchoring must be unambiguous;
8. provenance must use the locked EIS vocabulary;
9. executor-role RLS, SELECT, UPDATE, default-grant, helper-schema, and search-path requirements need exact least-privilege wording.

Supporting-room disposition:

`ACCEPTED WITH REQUIRED CONTRACT CORRECTIONS`

## 5. Lead Security and Permissions Findings

The lead room confirms the proposal preserves several essential boundaries:

- no direct authenticated DML on protected catalog tables;
- server-derived actor and business scope;
- no catalog use of `service_role` as merchant authority;
- action-specific executor groups;
- UUID preview identifier is not authority by possession;
- public token failures collapse to `STALE_STATE`;
- expected rejections can commit idempotency evidence without protected-table mutation;
- D-068 applies to assignment, replacement, and removal;
- Owner-only dashboard Phase 1 remains the active authority boundary;
- Founder decisions FQ-1 through FQ-4 remain applied.

The proposal nevertheless fails the controlled-build readiness gate for these security reasons:

### LS-1 — Global authenticated reads violate least disclosure

The proposal begins from a global assumption that every table grants business-scoped `SELECT` to `authenticated`. RLS business filtering does not justify exposing token, idempotency, audit, event, cost, file-metadata, or current-product rows through the Data API when approved function boundaries already exist.

### LS-2 — Reference-cost confidentiality is internally contradictory

The proposal simultaneously stores `catalog_products.current_reference_cost` and declares `catalog_reference_cost_events` the sole value store. This creates uncertainty about the authoritative current value and increases the chance that an unrestricted product read, executor grant, generated type, or future query leaks owner-only cost data.

### LS-3 — D-068 open-row uniqueness is unsafe after expiry

`UNIQUE (product_id) WHERE consumed_at IS NULL` treats an expired but unconsumed row as permanently open. Fresh preview creation can therefore be denied indefinitely without an authorized cleanup worker.

### LS-4 — Token minimization removes evidence rather than authority

`expected_state_fingerprint` is not a reusable credential. Clearing it weakens proof of the reviewed state without reducing bearer-token risk. Display snapshots may be minimized; the fingerprint should remain for the approved metadata-retention period.

### LS-5 — Audit JSON protection requires a closed allowlist

A short blacklist of cost-like keys can be bypassed by nested, renamed, or indirectly derived values. General audit payloads require a closed allowed-key set per `change_type`, with cost-executor privilege fully withheld.

### LS-6 — Function and helper hardening is insufficiently narrow

`SET search_path = public, extensions` is broader than necessary. Public functions and internal ownership helpers must use a fixed minimal or empty search path and fully schema-qualified object and extension references. Ownership helpers belong in a non-Data-API-exposed internal schema.

### LS-7 — Executor privileges must be column- and command-group-specific

No executor may receive broad table-wide UPDATE or unrestricted SELECT when column-scoped grants can enforce the contract. In particular, non-cost executors must not gain direct visibility of `current_reference_cost` merely because they need to lock or update another product column.

### LS-8 — Outcome lookup must derive business scope

The locked `get_catalog_command_outcome(p_operation, p_idempotency_key)` signature is safe because it contains no business parameter. The function must derive current actor and business from the authenticated request and return byte-equivalent `not_found` results for absent and foreign-business keys.

### LS-9 — Future authority must not be activated by schema vocabulary

Initial Phase 1 permits Owner and dashboard only. Future actor/channel values may be representable only if the active constraints and function contracts make them unusable until a separately authorized migration and permission change.

## 6. SR-1 Through SR-14 Disposition Table

| Item | Disposition | Lead conclusion |
|---|---|---|
| SR-1 — D-068 identifier and authority | `ACCEPTED` | `p_preview_token_id uuid` is a non-secret row identifier. Authority comes only from live server-derived business, same actor, lifecycle, permission, requested action, and expected-state checks. |
| SR-2 — Public rejection and internal reasons | `ACCEPTED WITH CORRECTION` | All invalid, unknown, foreign, expired, closed, replayed, wrong-actor, and drift cases return public `STALE_STATE`; internal reasons remain restricted. |
| SR-3 — Normalized nullable uniqueness | `ACCEPTED` | Ordinary business-scoped uniqueness is valid; multiple NULL SKU/barcode values are allowed; entered archived identities remain reserved. |
| SR-4 — Audit and cost exclusion | `ACCEPTED WITH CORRECTION` | Withhold audit privilege from cost executor and enforce a closed allowed-key set per change type. |
| SR-5 — Expired-token minimization | `ACCEPTED WITH CORRECTION` | Logical expiry is immediate; first authorized interaction closes and minimizes the row; no automatic-cleanup claim. |
| SR-6 — Executor UPDATE enforcement | `ACCEPTED WITH CORRECTION` | Column grants, minimal SELECT, executor-specific RLS, explicit columns, and function guards are all required. |
| SR-7 — Authenticated read rights | `REJECTED` | Global authenticated SELECT is replaced by the matrix in Section 8. |
| SR-8 — Reference-cost source of truth | `REJECTED` | Use an atomic current projection plus immutable history, both writable only through the cost command. |
| SR-9 — Fresh preview after expiry | `REJECTED` | Add stable lifecycle state and `closed_at`; enforce one open preview with a nonvolatile predicate. |
| SR-10 — Search cursor correctness | `REJECTED` | Cursor must include `match_rank`, normalized name, and id. |
| SR-11 — Product-history retrieval | `REJECTED` | Embed permission-filtered history JSON in `catalog_product_read`; add no twentieth command. |
| SR-12 — Secret minimization vs evidence | `REJECTED` | Retain the expected-state fingerprint; clear only display snapshots or actual secrets. |
| SR-13 — Expired interaction and retention | `REJECTED` | Expired use remains `expired_unconsumed`, anchored to `expires_at`; it is not a consumed rejection. |
| SR-14 — Provenance activation | `REJECTED` | Use locked EIS provenance fields and enforce Owner/dashboard in schema and command logic. |

## 7. Exact Replacement Contract Wording

### 7.1 Public Token Rejection Contract

> All invalid, unknown, foreign-business, expired, previously closed, wrong-actor, replayed, or expected-state-drift preview-token conditions return the public category `STALE_STATE`.
>
> Internal reason codes may be stored only in restricted preview-token or idempotency-outcome records. They are not returned through RPC results, direct table reads, general audit JSON, application logs, browser telemetry, or merchant-facing messages.
>
> A foreign-business token identifier and a nonexistent token identifier produce indistinguishable public results.

### 7.2 General Audit and Cost Exclusion

> `catalog_cost_executor` receives no privilege on `catalog_audit_events`.
>
> Reference-cost values and reference-cost-derived values must never be written to general audit JSON.
>
> A database validation trigger enforces a closed allowed-key set for each permitted `change_type` and rejects any key not expressly allowed for that type, including nested structures.
>
> Command-specific grants and command-specific payload construction remain the primary controls. Trigger rejection is an unexpected implementation defect and rolls back the command.

### 7.3 Expired Preview Minimization

> A preview becomes logically unusable exactly when `now() >= expires_at`.
>
> On the first authorized interaction with an expired open preview, including a request to create a fresh preview for the same product, the command locks the row, transitions it to `expired_unconsumed`, clears confirmation-display fields, preserves non-secret integrity and audit evidence, sets `closed_at`, and then permits creation of a new preview in the same transaction.
>
> The thirty-day expired-unconsumed retention period is anchored to `expires_at`. No automatic physical-deletion claim is made because no cleanup worker is authorized.

### 7.4 Executor UPDATE and RLS Contract

> Each executor role receives only the table and column privileges required by its command group.
>
> No executor receives table-wide UPDATE where a narrower column grant is possible. UPDATE-capable executors receive only the minimum column-level SELECT required for row lookup and locking.
>
> Executor-targeted RLS policies explicitly name the executor role and define `USING` and `WITH CHECK` where applicable.
>
> Command functions use explicit column lists, independently verify every permitted transition, and never build generic UPDATE statements from caller-supplied field names.
>
> No executor receives `BYPASSRLS`, table ownership, `service_role` membership, client credentials, or broad inherited membership.

### 7.5 Reference-Cost Authority

> `catalog_products.current_reference_cost` is the authoritative current reference-cost projection.
>
> `catalog_reference_cost_events` is the authoritative immutable history of every reference-cost change.
>
> `record_catalog_reference_cost_change` locks the product, reads the current projection, inserts one immutable old/new event, updates the projection, and finalizes the idempotency result in one transaction. The projection and event always commit or roll back together.
>
> Neither table may be written through another path. Reference cost is returned only through permission-aware read functions and is physically omitted from unauthorized response shapes.

### 7.6 D-068 Lifecycle and Stable Open-Row Constraint

> `catalog_link_preview_tokens` includes `lifecycle_state text NOT NULL` and `closed_at timestamptz NULL`.
>
> Allowed states are `issued`, `consumed_completed`, `consumed_rejected`, `expired_unconsumed`, and `superseded`.
>
> The stable uniqueness rule is `UNIQUE (product_id) WHERE closed_at IS NULL`. No wall-clock function appears in an index predicate.
>
> Creating a fresh preview locks any existing open row. An expired row is closed as `expired_unconsumed`; an unexpired row may be replaced only through an explicit `superseded` transition. The new `issued` row is inserted in the same transaction.

### 7.7 Expected-State Fingerprint Retention

> `expected_state_fingerprint` is non-secret integrity evidence and remains stored for the approved metadata-retention period.
>
> Consumption or expiry minimization clears merchant-display snapshots and any separately authorized secret material, but retains the token row identifier, business, product, initiating actor, requested action, proposed inventory item identifier, expected-state fingerprint, lifecycle timestamps, public rejection category, restricted internal reason, and resulting link-event identifier.
>
> Neither the UUID identifier nor the fingerprint confers authority without live authorization checks.

### 7.8 Expired Confirmation Attempt

> Confirmation attempted at or after `expires_at` returns public `STALE_STATE`, records restricted reason `TOKEN_EXPIRED`, minimizes display fields, sets `closed_at` if necessary, and remains classified `expired_unconsumed`.
>
> It does not set `consumed_at`, does not set a consuming actor, and does not become `consumed_rejected`. Its retention anchor remains `expires_at`.
>
> The command's idempotency record may independently record a terminal rejected outcome.

### 7.9 Provenance Contract

> All dedicated event tables use the locked EIS fields: `authorized_by_user_id`, `executed_by_actor_type`, `system_run_id`, `channel`, `request_id`, `authority_basis`, and `recorded_at`.
>
> Dedicated event rows represent completed changes only and do not contain a general `outcome` field. Rejected command attempts belong in the idempotency/outcome record.
>
> Initial Phase 1 requires a non-null authorizing user, user execution, null system-run identity, dashboard channel, and the specific Owner-authorized permission basis required by the command.
>
> Future Manager, Employee, import, scheduler, WhatsApp, voice, photo, or system execution requires a separately authorized migration and command-permission change.

### 7.10 Function and Helper Hardening

> Every public command is `SECURITY DEFINER`, owned by its designated `NOLOGIN` executor, has `EXECUTE` revoked from `PUBLIC` and `anon`, and grants `EXECUTE` only to approved caller roles.
>
> Each function uses an empty or narrowly controlled fixed search path and fully schema-qualified object and extension references. `public, extensions` is not used as an open lookup path.
>
> Ownership and business-resolution helpers reside in a non-Data-API-exposed internal schema, expose only the minimum boolean or resolved-business contract, use a fixed safe search path, and are executable only by the required executor roles.
>
> Migration verification includes explicit default-privilege revocation so newly created public tables and functions are not unintentionally exposed.

## 8. Table-by-Table Authenticated Read Matrix

| Table | Direct `authenticated` SELECT | Approved read boundary |
|---|---:|---|
| `catalog_products` | No | `catalog_products_search`, `catalog_product_read`, `catalog_products_list_batch` |
| `catalog_categories` | Yes, narrowly scoped | Business-scoped identity and lifecycle columns only, because the nineteen-command surface contains no category-list RPC |
| `catalog_selling_price_events` | No | Permission-filtered history embedded in `catalog_product_read` |
| `catalog_tax_events` | No | Permission-filtered history embedded in `catalog_product_read` |
| `business_tax_settings` | No | Effective tax fields through `catalog_product_read`; mutation through approved tax command |
| `catalog_reference_cost_events` | No | Owner/cost-permitted history through `catalog_product_read` only |
| `catalog_link_preview_tokens` | No | Preview and confirmation functions only |
| `catalog_product_link_events` | No | Permission-filtered history through `catalog_product_read` |
| `catalog_audit_events` | No | No direct Phase 1 client read |
| `catalog_deletion_records` | No | No direct Phase 1 client read |
| `catalog_file_references` | No | Internal same-business, purpose, and clean-status validation only |
| `catalog_write_idempotency_keys` | No | `get_catalog_command_outcome` only |

`anon` receives no table privilege and no catalog command execution privilege.

## 9. Executor-Role Privilege Matrix Corrections

The approved function-owner roles remain:

- `catalog_identity_executor`
- `catalog_lifecycle_executor`
- `catalog_pricing_executor`
- `catalog_tax_executor`
- `catalog_cost_executor`
- `catalog_link_executor`
- `catalog_read_executor`

Mandatory corrections:

1. all function-owner roles are `NOLOGIN`;
2. `postgres` remains table owner;
3. no executor receives `BYPASSRLS` or `service_role` membership;
4. `authenticated` receives only approved function execution;
5. `PUBLIC`, `anon`, and unauthorized roles have execution revoked;
6. DML and SELECT grants are table-, column-, and command-group-specific;
7. non-cost executors receive no read privilege on the cost projection column;
8. executor-specific RLS policies use explicit `TO <executor_role>` and correct `USING`/`WITH CHECK` clauses;
9. authorization helpers remain in a non-exposed internal schema;
10. all public and internal functions use fixed narrow search paths and qualified references;
11. default privileges are explicitly reviewed and revoked where necessary;
12. migration-time verification must prove role creation, function ownership transfer, RLS behavior under each executor, and generated Data API return compatibility before frontend work.

## 10. Corrected Search Cursor and Read-History Contract

### Search cursor

`catalog_products_search` orders by:

`match_rank ASC, name_normalized ASC, id ASC`

Its cursor therefore carries all three values:

- `p_cursor_match_rank smallint DEFAULT NULL`
- `p_cursor_name text DEFAULT NULL`
- `p_cursor_id uuid DEFAULT NULL`

All three are supplied together or all are null. Partial cursors are `INVALID_INPUT`. Continuation is strictly after the complete tuple, and a cursor is valid only with the same query and filters that produced it.

### Product history

`catalog_product_read` is the sole Phase 1 product-history boundary. `catalog_product_detail` includes:

`history jsonb NOT NULL`

The array uses the locked history-entry shape and orders by:

`occurred_at DESC, event_id DESC`

It may contain selling-price, tax, reference-cost, and inventory-link entries. Reference-cost entries are omitted unless the caller currently holds cost visibility. Inventory fields requiring `inventory_view` are omitted or redacted without exposing foreign or unauthorized data. No twentieth command is introduced.

## 11. Whole-Contract Verification Results

- Exact command count remains nineteen: **PASS**
- Command names remain unchanged: **PASS**
- Founder decisions FQ-1 through FQ-4 remain applied: **PASS**
- Product Truth changed: **NO**
- Normalized identity rules preserved: **PASS**
- Archived entered identities reserved: **PASS**
- One `business_tax_settings` row per business: **PASS**
- Authenticated direct DML prohibited: **PASS IN INTENT; exact grants require corrected contract**
- Actor and business server-derived: **PASS**
- Cross-business and absent outcomes indistinguishable: **PASS WITH REQUIRED function wording**
- Expected rejections preserve idempotency evidence without protected-table mutation: **PASS IN INTENT**
- D-068 covers assignment, replacement, and removal: **PASS**
- Token validity exactly fifteen minutes: **PASS**
- Consumed metadata retention ninety days: **PASS**
- Expired-unconsumed retention thirty days: **PASS WITH corrected anchor**
- Cleanup execution excluded: **PASS**
- Image upload, bucket, and scan worker excluded: **PASS**
- Scheduling, employees, import, conversational channels, and `system_errors` excluded: **PASS**
- Contract executable without further correction: **NO**

## 12. Founder Decisions and Scope Confirmation

The review does not reopen or alter:

- FQ-1: archived products hidden by default with explicit Show archived control;
- FQ-2: selling price excluded from product creation and handled through its separate command;
- FQ-3: category archive with assigned products requires explicit confirmation before uncategorization;
- FQ-4: new-business pricing mode defaults to tax-exclusive.

No Founder decision is required. No Product Truth change is required. The required work is a narrow engineering-contract correction.

The nineteen-command scope remains unchanged. No command is added, renamed, split, or combined.

## 13. Environment and Prohibited-Action Confirmation

Read-only Supabase inspection confirmed the `smart-business` project is active and healthy on PostgreSQL 17 and that all existing public tables currently have RLS enabled. This is environment evidence only and does not prove the proposed role/grant contract until migration-time verification occurs.

Lovable was used only to retrieve and read the existing completed Plan Mode artifact. No message was sent, no Plan Mode or Build Mode run was started, no Lovable credit was intentionally consumed, and no project file or application code was modified by this review.

No SQL, migration, schema object, role, grant, RLS policy, function, application file, test, Supabase configuration, infrastructure, deployment, or production state was created or modified.

## 14. Required Next Action

Return the corrected executable engineering contract for a narrow revision incorporating Sections 7 through 10 of this report, then perform independent Security and Supabase verification before Mission Control considers controlled-build authorization.

Build Order Stage 1 remains stopped.

## 15. Final Specialist Verdict

```text
SPECIALIST REVIEW FAILED — CORRECTIONS REQUIRED
```
