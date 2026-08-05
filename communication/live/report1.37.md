# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-SR2 — FINAL SPECIALIST ACCEPTANCE

## SECURITY & PERMISSIONS ARCHITECTURE — CONSOLIDATED LEAD REVIEW

**Required repository path:** `communication/live/report1.37.md`

---

# 1. Executive Status

| Field                               | Status                                                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| Mission ID                          | `SB-P-1.11-SR2`                                                                     |
| Parent Mission                      | `SB-P-1.11 — Product Catalog & Pricing`                                             |
| Review Role                         | Security & Permissions Architecture — Lead Specialist and Consolidating Authority   |
| Contract Reviewed                   | `SB-P-1.11 Initial Phase 1 — Regenerated Corrected Executable Engineering Contract` |
| Contract Status Reviewed            | Plan Mode artifact; no implementation occurred                                      |
| Supabase Supporting Verdict         | `SUPABASE SUPPORTING ACCEPTANCE PASSED — READY FOR SECURITY LEAD REVIEW`            |
| Lead Review Status                  | FINAL SPECIALIST ACCEPTANCE PASSED WITH BINDING CORRECTION PACKAGE                  |
| Product Truth Change                | NONE                                                                                |
| Founder Decision Required           | NONE                                                                                |
| Implementation Authority            | NONE                                                                                |
| Build Mode Authority                | NONE                                                                                |
| Migration Authority                 | NONE                                                                                |
| Publication or Deployment Authority | NONE                                                                                |

## 1.1 Sources Applied

This lead review applied:

* the complete regenerated corrected executable engineering contract;
* the complete Supabase Backend Architecture supporting acceptance review;
* `communication/live/instruction1.39.md`;
* `communication/live/instruction1.37.md`;
* `communication/live/report1.36.md`;
* the locked SB-P-1.11 Product Blueprint;
* historical EIS Version 2.0;
* historical EIS Version 2.1;
* locked EIS Version 2.2;
* locked Engineering Contract Version 1.1;
* locked Lovable Build Prompt Version 1.1;
* locked Verification Checklist Version 1.1;
* locked Founder Lovable Brief;
* later accepted corrections over earlier historical material.

Superseded behaviour was not revived.

The regenerated contract correctly preserves the Owner-only, dashboard-only, exactly nineteen-command boundary, but its uncorrected text still contains proposed implementation details requiring specialist acceptance.

The Supabase supporting review examined PostgreSQL validity, Supabase compatibility, all nineteen signatures, result mechanisms, RLS interaction, executor privileges, D-068 lifecycle, normalization, table count, idempotency, event ordering, and migration risks. It concluded that the contract is acceptable for Security Lead review only with its exact correction package attached.

## 1.2 Final Interpretation

The accepted executable engineering contract is:

> the regenerated corrected executable engineering contract
> **plus**
> the complete binding correction package in this report.

The unamended regenerated Plan Mode artifact must not be treated as implementation-ready by itself.

No further broad specialist review cycle is required.

A narrow Mission Control incorporation check must confirm that this correction package is copied into the controlled implementation authority without deviation.

---

# 2. Lead Findings

## LSF-1 — Product-Read Response Must Use Physically Distinct JSON Shapes

**Severity:** BLOCKING IN THE UNAMENDED CONTRACT — RESOLVED BY THIS REPORT

**Affected sections:**

* result types;
* command 18;
* reference-cost confidentiality;
* generated client types;
* product history.

### Evidence

A fixed PostgreSQL composite cannot conditionally omit one attribute. A composite containing `reference_cost` would expose the field’s existence even when its value is returned as `NULL`.

That would violate the accepted requirement that unauthorized callers receive:

* no `reference_cost` attribute;
* no cost-history entries;
* no cost-visibility flag;
* no generated default client type containing the protected field.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> Create fixed PostgreSQL composite types only for:
>
> * `catalog_command_result`;
> * `catalog_command_outcome`;
> * `catalog_product_summary`;
> * `catalog_link_preview_result`.
>
> Do not create a PostgreSQL composite type named `catalog_product_detail`.
>
> `catalog_product_read(p_product_id uuid)` returns `jsonb`.
>
> The function re-derives the authenticated actor and business and verifies current Owner authority through `businesses.owner_id = auth.uid()` before constructing any product response.
>
> The client cannot request, select, or influence the response branch.
>
> The public function invokes one of two non-public JSON constructors:
>
> 1. a cost-visible Owner response constructor;
> 2. a cost-redacted response constructor.
>
> The cost-redacted object physically omits:
>
> * `reference_cost`;
> * any reference-cost history entry;
> * any cost-visibility marker;
> * any null placeholder representing a protected cost field.
>
> Both constructors use equivalent product lookup and authorization sequencing. Foreign-business and nonexistent products return the same public outcome and follow equivalent observable handling.
>
> Response generation must not perform a cost-history existence-dependent branch for a cost-redacted response.
>
> `history` is always present as a JSON array and is `[]` when empty.
>
> The generated Supabase RPC type is `Json`.
>
> Application code defines separate runtime-validated schemas:
>
> * `CatalogProductDetailBase`;
> * `CatalogProductDetailWithCost`.
>
> The base schema contains no reference-cost property.
>
> No direct authenticated table access exposes:
>
> * `catalog_products.current_reference_cost`;
> * `catalog_reference_cost_events`;
> * audit or history data containing reference cost.

---

## LSF-2 — D-068 Confirmation Must Not Repeat Token-Bound Authority Inputs

**Severity:** HIGH IN THE UNAMENDED CONTRACT — RESOLVED

**Affected sections:**

* commands 14 and 15;
* preview confirmation;
* identifier-oracle resistance;
* same-business validation.

### Evidence

The preview row already binds:

* business;
* initiating actor;
* product;
* requested action;
* current linked item;
* proposed item;
* expected state;
* price-confirmation requirement.

Repeating product or target identifiers in the confirmation call creates unnecessary mismatch paths and risks treating caller repetition as authority.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement signatures

```text
assign_or_replace_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid,
  p_confirmed_price numeric
) RETURNS catalog_command_result
```

```text
remove_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid
) RETURNS catalog_command_result
```

Binding rule:

> Product, action, target inventory item, business, initiating actor, expected-state fingerprint, unit transition, and price-confirmation requirement are obtained only from the locked preview row and current server state.
>
> `p_confirmed_price` may be SQL `NULL` when the preview states that price confirmation is not required.
>
> The function must not accept repeated caller-supplied product, target, business, actor, permission, expected-state, or authority values.

---

## LSF-3 — Owner-Only Authority Must Not Be Represented as Future Runtime Permission

**Severity:** HIGH — RESOLVED WITH LEAD CORRECTION

**Affected sections:**

* `authority_basis`;
* provenance;
* future permission activation;
* command authorization.

### Evidence

Initial Phase 1 authorizes commands solely through:

```text
businesses.owner_id = auth.uid()
```

The contract may retain future permission vocabulary for documentation, but recording a future permission flag as the current authorization basis would misstate what actually authorized the operation.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> Initial Phase 1 runtime authorization uses only:
>
> `businesses.owner_id = auth.uid()`.
>
> No function:
>
> * queries a future permission store;
> * checks a future permission flag;
> * simulates Manager or Employee permission;
> * reads permission authority from a parameter;
> * creates a substitute permission system;
> * treats documentation vocabulary as executable authority.
>
> Initial Phase 1 event provenance records:
>
> * `authorized_by_user_id = auth.uid()`;
> * `executed_by_actor_type = 'user'`;
> * `system_run_id IS NULL`;
> * `channel = 'dashboard'`;
> * `authority_basis = 'owner_via_businesses.owner_id'`.
>
> Future permission names may remain in documentation as non-runtime traceability labels.
>
> They must not be written into Phase 1 event rows as if they authorized the command.
>
> Activating Manager, Employee, import, scheduler, WhatsApp, voice, photo, service, or system authority requires a separately authorized migration and permission-engine mission.

---

## LSF-4 — Search Cursor Must Be Bound to the Active Search Context

**Severity:** HIGH — RESOLVED

**Affected sections:**

* command 17;
* ranking;
* pagination;
* business isolation.

### Evidence

The complete ordering tuple is necessary but not sufficient. A caller must not be able to reuse a cursor with different:

* query text;
* archive selection;
* category filter;
* business;
* ranking semantics.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> The search function first re-derives the authenticated actor and business and applies Owner authorization.
>
> Eligible rows are restricted to the resolved business before matching, ranking, filtering, cursor validation, ordering, and limiting.
>
> For a null or blank-after-trim query, every eligible row receives:
>
> `match_rank = 0`.
>
> For a nonblank query, the first matching tier applies:
>
> 1. exact normalized barcode — rank 1;
> 2. exact normalized SKU — rank 2;
> 3. exact normalized product name — rank 3;
> 4. normalized product-name prefix — rank 4;
> 5. normalized product-name substring — rank 5.
>
> Nonmatching rows are excluded.
>
> Prefix matching uses a length comparison or equivalent parameterized expression and must not interpret caller input as an uncontrolled `LIKE` pattern.
>
> Substring matching uses a safe parameterized operation such as `strpos`.
>
> Search introduces no:
>
> * trigram extension;
> * fuzzy matching;
> * phonetic matching;
> * transliteration;
> * similarity score;
> * AI normalization.
>
> Final ordering is:
>
> `(match_rank ASC, name_normalized ASC, id ASC)`.
>
> Cursor input consists of:
>
> * `p_cursor_match_rank`;
> * `p_cursor_name_normalized`;
> * `p_cursor_id`.
>
> All cursor components must be null or all must be non-null.
>
> Partial or malformed cursor input returns `INVALID_INPUT`.
>
> Before continuation, the function validates that the cursor anchor:
>
> * belongs to the resolved business;
> * is included by the same archive filter;
> * is included by the same category filter;
> * matches the same normalized query;
> * has the supplied computed rank;
> * has the supplied normalized name.
>
> A cursor mismatch returns `INVALID_INPUT` without revealing whether the supplied identifier belongs to another business.
>
> Archived products remain excluded unless `p_include_archived = true`.

---

## LSF-5 — Advisory Lock Collisions Must Not Become Authorization or Outcome Collisions

**Severity:** HIGH — RESOLVED

**Affected sections:**

* idempotency;
* transaction concurrency;
* command outcome;
* tenant isolation.

### Evidence

Transaction-scoped advisory locking is acceptable for serialization, but advisory keys have a finite namespace. A hash collision must not cause:

* cross-business outcome reuse;
* incorrect idempotency matching;
* authority transfer;
* protected-row access.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> Every idempotent write derives an advisory-lock namespace from:
>
> * server-derived `business_id`;
> * the fixed command operation name;
> * `p_idempotency_key`.
>
> The derivation must be deterministic and domain-separated.
>
> It may use a cryptographic digest reduced into the PostgreSQL advisory-lock key space.
>
> An advisory-lock collision may cause only temporary serialization contention.
>
> It must never determine:
>
> * authorization;
> * business scope;
> * idempotency ownership;
> * payload equality;
> * command outcome.
>
> After obtaining the advisory lock, the command independently verifies the authoritative unique row boundary:
>
> `(business_id, operation, idempotency_key)`.
>
> Payload equality is determined from the persisted payload fingerprint, not from the advisory-lock key.
>
> Therefore, even an advisory-key collision cannot cause one tenant or operation to receive another tenant’s result.
>
> Expected rejections write a terminal `rejected` outcome and commit.
>
> Successful commands write a terminal `completed` outcome and commit.
>
> Unexpected exceptions roll back the complete transaction and create no terminal row.
>
> No durable `in_progress` state exists.
>
> Reuse of the same authoritative key with a different payload returns `IDEMPOTENCY_CONFLICT`.
>
> Concurrent matching requests serialize and return the same terminal outcome.
>
> `get_catalog_command_outcome` returns indistinguishable `not_found` results for foreign-business and nonexistent keys.

---

## LSF-6 — Eleven Tables Is the Correct Initial Phase 1 Boundary

**Severity:** HIGH SCOPE CONTROL — RESOLVED

**Affected sections:**

* table count;
* `catalog_file_references`;
* `catalog_products.image_ref`;
* file grants and RLS;
* audit keys;
* public rejection categories.

### Evidence

Initial Phase 1 includes no:

* storage bucket;
* upload path;
* scanner;
* file-reference creation command;
* client image field;
* executable producer of validated file metadata.

Creating an unused table and image foreign key would introduce dormant schema, grants, RLS, audit, and verification obligations without an authorized capability.

### Disposition

**ACCEPT ELEVEN-TABLE INITIAL PHASE 1**

### Exact replacement wording

> The SB-P-1.11 initial Phase 1 database contract contains exactly eleven tables.
>
> Defer:
>
> * `catalog_file_references`;
> * `catalog_products.image_ref`;
> * file-reference validation helpers;
> * file-reference privileges;
> * file-reference RLS policies;
> * file-reference audit keys;
> * file-reference verification cases;
> * image inputs in commands 1 and 2;
> * image fields in product results;
> * `FILE_REFERENCE_INVALID` from the initial Phase 1 public rejection set.
>
> Product creation and editing remain fully functional without an image.
>
> Optional product images remain approved **Build Later** capability.
>
> They are not rejected Product Truth.
>
> A future image mission must separately authorize:
>
> * storage ownership;
> * upload path;
> * server-created metadata;
> * content validation and scanning;
> * same-business reference checks;
> * signed access;
> * deletion and retention;
> * client experience;
> * migration;
> * verification.

---

## LSF-7 — Executor RLS Is Valid Only With Explicit Role Policies and Double Isolation

**Severity:** BLOCKING IN AN INCOMPLETE IMPLEMENTATION — RESOLVED CONTRACTUALLY

**Affected sections:**

* role ownership;
* RLS;
* grants;
* security-definer functions;
* internal helpers.

### Evidence

The seven `NOLOGIN` function-owner roles are acceptable because they do not own tables and do not have `BYPASSRLS`. Their function execution remains subject to table grants and RLS.

The supporting review correctly rejects broad authenticated table access and requires executor-specific policies.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> `postgres` owns all eleven catalog tables.
>
> Exactly seven `NOLOGIN` executor roles own the nineteen public functions:
>
> * `catalog_identity_executor`;
> * `catalog_lifecycle_executor`;
> * `catalog_pricing_executor`;
> * `catalog_tax_executor`;
> * `catalog_cost_executor`;
> * `catalog_link_executor`;
> * `catalog_read_executor`.
>
> No executor role:
>
> * owns a table;
> * has `BYPASSRLS`;
> * has login credentials;
> * is a member of `service_role`;
> * inherits another executor;
> * receives broad schema ownership;
> * receives `CREATE` on an exposed schema;
> * performs runtime `SET ROLE`.
>
> RLS is enabled on every created catalog table.
>
> Every executor policy explicitly names its executor role.
>
> Every mutable-table UPDATE policy contains:
>
> * a `USING` predicate restricting existing rows to the authenticated Owner’s resolved business;
> * a `WITH CHECK` predicate preventing the resulting row from moving outside that business.
>
> Function bodies independently re-derive:
>
> * `auth.uid()`;
> * the Owner’s business;
> * current Owner authority.
>
> RLS and function checks are both mandatory.
>
> `FORCE ROW LEVEL SECURITY` is not required in initial Phase 1 because:
>
> * executor roles do not own the tables;
> * executor roles do not bypass RLS;
> * the table owner is the controlled migration role;
> * client-reachable execution is already subject to executor policies.
>
> This decision does not authorize routine table-owner mutation.
>
> Emergency or migration-level intervention remains separately controlled and audited.

---

## LSF-8 — Security-Definer and Helper Exposure Must Be Closed

**Severity:** HIGH — RESOLVED

**Affected sections:**

* `SECURITY DEFINER`;
* helper functions;
* search paths;
* PUBLIC and anon grants.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> Every public catalog RPC:
>
> * is `SECURITY DEFINER`;
> * is owned by its designated executor;
> * uses `SET search_path = ''` or an equivalently closed fixed search path;
> * references database objects with full schema qualification;
> * schema-qualifies extension functions, including digest functions;
> * is revoked from `PUBLIC`;
> * is revoked from `anon`;
> * is executable by `authenticated` only when it is one of the nineteen approved commands.
>
> Internal ownership, business-resolution, normalization, JSON-construction, fingerprint, and audit-validation helpers:
>
> * reside in a non-Data-API-exposed internal schema;
> * are not executable by `PUBLIC`, `anon`, or ordinary `authenticated`;
> * expose only the minimum required scalar or closed internal result;
> * accept no caller-selected business or authority;
> * use fixed safe search paths;
> * are executable only by the minimum executor roles that need them.
>
> Default privileges are reviewed and explicitly revoked where required so that later objects are not unintentionally exposed.

---

## LSF-9 — Normalization Must Be Server-Controlled and Behaviourally Proven

**Severity:** HIGH — RESOLVED

**Affected sections:**

* normalized columns;
* uniqueness;
* Malayalam and Manglish preservation;
* identifier handling.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> `name_normalized`, `sku_normalized`, `barcode_normalized`, and category normalized names are ordinary stored columns.
>
> They are populated only by approved internal normalization functions during command execution.
>
> Clients cannot:
>
> * submit authoritative normalized values;
> * directly update normalized columns;
> * bypass normalization through direct DML.
>
> Product and category display text is preserved as entered, subject only to approved validation.
>
> Malayalam and Manglish are not transliterated, translated, phonetic-normalized, or AI-normalized.
>
> The implementation must not claim full Unicode case folding unless the exact deployed PostgreSQL behaviour has been proven.
>
> Migration and function tests must contain fixed expected vectors covering:
>
> * Malayalam text;
> * Manglish text;
> * ASCII case;
> * repeated internal whitespace;
> * leading and trailing whitespace;
> * punctuation;
> * blank SKU;
> * blank barcode;
> * nonblank SKU;
> * nonblank barcode.
>
> Blank optional SKU and barcode values normalize to SQL `NULL`.
>
> Ordinary business-scoped uniqueness applies to:
>
> * product normalized name;
> * product normalized SKU;
> * product normalized barcode;
> * category normalized name.
>
> Archived identities remain reserved.

---

## LSF-10 — Event and Audit Data Must Use Closed, Non-Cost Contracts

**Severity:** HIGH — RESOLVED

**Affected sections:**

* price events;
* audit events;
* deletion records;
* event references;
* cost executor.

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact replacement wording

> Initial Phase 1 selling-price events use `recorded_at` as the effective timestamp.
>
> Remove `effective_at`.
>
> Backdated and scheduled prices remain excluded.
>
> Event references are one-directional:
>
> * price events do not reference link events;
> * link events may reference the resulting price event;
> * the mutable preview row may reference the resulting link event after insertion.
>
> Immutable event rows are never updated.
>
> Only the preview lifecycle row may be updated with the resulting link-event identifier.
>
> `catalog_audit_events` uses a closed top-level and nested-key allowlist for each permitted `change_type`.
>
> Unexpected top-level or nested keys cause the write to fail before audit insertion.
>
> General audit JSON contains no:
>
> * reference cost;
> * old cost;
> * new cost;
> * margin;
> * profit;
> * value derived from reference cost.
>
> `catalog_cost_executor` has no privilege on `catalog_audit_events`.
>
> `catalog_deletion_records` contains only:
>
> * deleted product identifier;
> * business identifier;
> * product-name snapshot;
> * deletion timestamp;
> * deleting Owner identifier.
>
> It contains no cost, selling price, tax value, margin, file metadata, free-text description, or unnecessary sensitive snapshot.

---

## LSF-11 — Public Rejection Set Must Exclude Deferred File Capability

**Severity:** MEDIUM — RESOLVED

**Affected section:** public and restricted rejection contract

### Disposition

**ACCEPTED WITH CORRECTION**

### Exact initial Phase 1 public rejection categories

```text
PERMISSION_DENIED
INVALID_INPUT
NOT_FOUND
UNIQUENESS_CONFLICT
LIFECYCLE_CONFLICT
DEPENDENT_HISTORY_CONFLICT
IDEMPOTENCY_CONFLICT
STALE_STATE
CONFIRMATION_REQUIRED
PRICE_CONFIRMATION_REQUIRED
OPERATION_NOT_PERMITTED
UNKNOWN_OUTCOME
```

`FILE_REFERENCE_INVALID` is removed from initial Phase 1 because file references are deferred.

---

# 3. Supabase Correction Dispositions

| Correction                        | Lead disposition         | Lead note                                                                                 |
| --------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| CP-1 — Initial Table Count        | ACCEPTED                 | Exactly eleven tables; file references and image reference deferred                       |
| CP-2 — Result Types               | ACCEPTED                 | Fixed composites only for command, outcome, summary, and preview                          |
| CP-3 — Product Read JSON Contract | ACCEPTED WITH CORRECTION | Require equivalent lookup handling and no cost-existence-dependent redacted branch        |
| CP-4 — Exact Signatures           | ACCEPTED                 | Final signatures are listed in Section 5                                                  |
| CP-5 — Deterministic Search       | ACCEPTED WITH CORRECTION | Cursor anchor must be validated under current business, query, and filters                |
| CP-6 — Normalization              | ACCEPTED                 | Stored server-controlled normalized columns with regression vectors                       |
| CP-7 — Immediate Price Events     | ACCEPTED                 | Remove `effective_at`; use `recorded_at`                                                  |
| CP-8 — Reference Cost             | ACCEPTED                 | Atomic current projection plus immutable history                                          |
| CP-9 — Preview Lifecycle          | ACCEPTED                 | Business-scoped stable open-row uniqueness and row-lock sequencing                        |
| CP-10 — Event Foreign Keys        | ACCEPTED                 | One-directional event linkage                                                             |
| CP-11 — Idempotency               | ACCEPTED WITH CORRECTION | Advisory collisions may affect contention only; authoritative unique row remains decisive |
| CP-12 — Roles                     | ACCEPTED                 | Exactly seven `NOLOGIN` function-owner roles                                              |
| CP-13 — RLS and Ownership         | ACCEPTED                 | Tables owned by `postgres`; executors remain subject to RLS                               |
| CP-14 — Category Read             | ACCEPTED WITH CORRECTION | Column-scoped Owner-business read only; no other direct authenticated catalog read        |
| CP-15 — FQ Traceability           | ACCEPTED                 | Documentation aliases only                                                                |
| CP-16 — No Future Scaffolding     | ACCEPTED WITH CORRECTION | `authority_basis` records actual Owner authority, not future permission-flag vocabulary   |

The Supabase correction package is accepted as binding with the lead refinements above. The complete supporting correction set CP-1 through CP-16 is documented in the supporting review.

---

# 4. Mandatory Acceptance Items

| Item                                                  | Final disposition                   |
| ----------------------------------------------------- | ----------------------------------- |
| SA-1 — Product-read response and cost confidentiality | ACCEPTED WITH BINDING CORRECTION    |
| SA-2 — Nineteen signatures                            | ACCEPTED WITH BINDING CORRECTIONS   |
| SA-3 — Owner-only authorization                       | ACCEPTED WITH BINDING CORRECTION    |
| SA-4 — Deterministic search                           | ACCEPTED WITH BINDING CORRECTION    |
| SA-5 — Preview lifecycle and D-068                    | ACCEPTED                            |
| SA-6 — Idempotency                                    | ACCEPTED WITH BINDING CORRECTION    |
| SA-7 — Executor roles, grants, RLS and ownership      | ACCEPTED                            |
| SA-8 — Normalization and uniqueness                   | ACCEPTED                            |
| SA-9 — Eleven-table recommendation                    | ACCEPT ELEVEN-TABLE INITIAL PHASE 1 |
| SA-10 — Event and audit integrity                     | ACCEPTED                            |

## SA-1 — Final Product-Read Design

Accepted exactly as stated in LSF-1.

Additional binding safeguards:

* clients cannot select the response branch;
* cost authorization is evaluated server-side;
* foreign and nonexistent products are publicly indistinguishable;
* redacted construction does not query or branch on cost-history existence;
* generated RPC types expose only generic `Json`;
* no direct authenticated cost table access exists.

## SA-2 — Nineteen Signatures

Accepted exactly as listed in Section 5.

No public overload is permitted.

No twentieth command is permitted.

## SA-3 — Owner-Only Authorization

Accepted exactly as stated in LSF-3.

`authority_basis` may store documentation vocabulary only when that vocabulary truthfully describes the authority actually exercised.

For initial Phase 1, the only accurate value is:

```text
owner_via_businesses.owner_id
```

Future permission names cannot be recorded as current authorization evidence.

## SA-4 — Deterministic Search

Accepted exactly as stated in LSF-4.

The cursor tuple is:

```text
(match_rank, name_normalized, id)
```

The cursor grants no access and cannot make an excluded row visible.

## SA-5 — Preview Lifecycle and D-068

**ACCEPTED**

Binding contract:

* UUID possession provides no authority.
* Actor and business are re-derived.
* The initiating actor must perform confirmation.
* Product, action, target, and expected state come from the preview row.
* Foreign, nonexistent, expired, closed, superseded, replayed, wrong-actor, and drifted previews return public `STALE_STATE`.
* Restricted reasons remain internal.
* Expected-state fingerprint is retained.
* Merchant display snapshots are minimized on closure.
* Expiry remains `expired_unconsumed`.
* Expired-unconsumed retention is anchored to `expires_at`.
* Consumed-state retention is anchored to `closed_at`.
* No cleanup worker is required for functional availability.
* Open-row uniqueness is:

```text
UNIQUE (business_id, product_id) WHERE closed_at IS NULL
```

Concurrency sequence:

1. lock product row;
2. lock any current open preview row;
3. close or supersede the existing preview where required;
4. insert the new preview;
5. rely on the stable unique constraint as final concurrency protection.

## SA-6 — Idempotency

Accepted exactly as stated in LSF-5.

The advisory lock is a concurrency aid, not an authority or identity store.

## SA-7 — Roles, Grants, RLS and Ownership

Accepted exactly as stated in LSF-7 and LSF-8.

`FORCE ROW LEVEL SECURITY` is not required for initial Phase 1.

## SA-8 — Normalization and Uniqueness

Accepted exactly as stated in LSF-9.

No implementation may make broader Unicode-normalization claims than its regression tests prove.

## SA-9 — Eleven Tables

Final disposition:

```text
ACCEPT ELEVEN-TABLE INITIAL PHASE 1
```

Optional product images remain:

```text
BUILD LATER
```

They are not rejected Product Truth.

## SA-10 — Event and Audit Integrity

Accepted exactly as stated in LSF-10.

---

# 5. Nineteen-Command Review

## 5.1 Final Signature List

### 1. `create_catalog_product`

**Disposition:** ACCEPTED WITH CORRECTION

```text
create_catalog_product(
  p_idempotency_key uuid,
  p_name text,
  p_description text DEFAULT NULL,
  p_category_id uuid DEFAULT NULL,
  p_sku text DEFAULT NULL,
  p_barcode text DEFAULT NULL,
  p_selling_unit text DEFAULT 'piece'
) RETURNS catalog_command_result
```

No selling-price or image parameter.

---

### 2. `update_catalog_product_identity`

**Disposition:** ACCEPTED WITH CORRECTION

```text
update_catalog_product_identity(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_name text,
  p_description text,
  p_category_id uuid,
  p_sku text,
  p_barcode text
) RETURNS catalog_command_result
```

Full-replacement semantics:

* `p_name` is required and nonblank;
* nullable optional parameters clear their corresponding value;
* no `p_clear_fields`;
* no caller-supplied column names;
* no dynamic SQL.

---

### 3. `update_catalog_product_unit`

**Disposition:** ACCEPTED

```text
update_catalog_product_unit(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_selling_unit text
) RETURNS catalog_command_result
```

---

### 4. `create_catalog_category`

**Disposition:** ACCEPTED

```text
create_catalog_category(
  p_idempotency_key uuid,
  p_name text
) RETURNS catalog_command_result
```

---

### 5. `archive_catalog_category`

**Disposition:** ACCEPTED

```text
archive_catalog_category(
  p_idempotency_key uuid,
  p_category_id uuid,
  p_confirm_uncategorize boolean DEFAULT false
) RETURNS catalog_command_result
```

---

### 6. `archive_catalog_product`

**Disposition:** ACCEPTED

```text
archive_catalog_product(
  p_idempotency_key uuid,
  p_product_id uuid
) RETURNS catalog_command_result
```

---

### 7. `reactivate_catalog_product`

**Disposition:** ACCEPTED

```text
reactivate_catalog_product(
  p_idempotency_key uuid,
  p_product_id uuid
) RETURNS catalog_command_result
```

---

### 8. `delete_catalog_product`

**Disposition:** ACCEPTED

```text
delete_catalog_product(
  p_idempotency_key uuid,
  p_product_id uuid
) RETURNS catalog_command_result
```

---

### 9. `record_catalog_selling_price_change`

**Disposition:** ACCEPTED WITH CORRECTION

```text
record_catalog_selling_price_change(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_new_price numeric
) RETURNS catalog_command_result
```

Remove `p_precondition_current_price`.

Idempotency and server-side locking provide the accepted command integrity contract.

---

### 10. `record_catalog_tax_change`

**Disposition:** ACCEPTED WITH CORRECTION

```text
record_catalog_tax_change(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_treatment text,
  p_rate_percent numeric DEFAULT NULL
) RETURNS catalog_command_result
```

Closed treatments:

```text
inherit_business_default
product_specific_rate
non_taxable
```

A product-specific rate is required only for `product_specific_rate`.

---

### 11. `update_business_tax_settings`

**Disposition:** ACCEPTED WITH CORRECTION

```text
update_business_tax_settings(
  p_idempotency_key uuid,
  p_pricing_mode text,
  p_default_tax_rate numeric DEFAULT NULL
) RETURNS catalog_command_result
```

`p_pricing_mode` is required.

D-061 is enforced server-side.

---

### 12. `record_catalog_reference_cost_change`

**Disposition:** ACCEPTED

```text
record_catalog_reference_cost_change(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_new_cost numeric
) RETURNS catalog_command_result
```

---

### 13. `preview_catalog_inventory_link_change`

**Disposition:** ACCEPTED

```text
preview_catalog_inventory_link_change(
  p_product_id uuid,
  p_requested_action text,
  p_target_inventory_item_id uuid DEFAULT NULL
) RETURNS catalog_link_preview_result
```

This may mutate restricted preview-lifecycle state only.

It does not mutate merchant catalog or inventory truth.

---

### 14. `assign_or_replace_catalog_inventory_link`

**Disposition:** ACCEPTED WITH CORRECTION

```text
assign_or_replace_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid,
  p_confirmed_price numeric
) RETURNS catalog_command_result
```

No repeated product or target identifier.

---

### 15. `remove_catalog_inventory_link`

**Disposition:** ACCEPTED WITH CORRECTION

```text
remove_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid
) RETURNS catalog_command_result
```

---

### 16. `get_catalog_command_outcome`

**Disposition:** ACCEPTED — LOCKED

```text
get_catalog_command_outcome(
  p_operation text,
  p_idempotency_key uuid
) RETURNS catalog_command_outcome
```

No business parameter.

---

### 17. `catalog_products_search`

**Disposition:** ACCEPTED WITH CORRECTION

```text
catalog_products_search(
  p_query text DEFAULT NULL,
  p_include_archived boolean DEFAULT false,
  p_category_id uuid DEFAULT NULL,
  p_limit integer DEFAULT 25,
  p_cursor_match_rank smallint DEFAULT NULL,
  p_cursor_name_normalized text DEFAULT NULL,
  p_cursor_id uuid DEFAULT NULL
) RETURNS SETOF catalog_product_summary
```

Rules:

* null or blank query lists all eligible rows;
* `p_limit` must be between 1 and 100;
* partial cursor returns `INVALID_INPUT`;
* cursor anchor is revalidated under the active search context.

---

### 18. `catalog_product_read`

**Disposition:** ACCEPTED WITH CORRECTION

```text
catalog_product_read(
  p_product_id uuid
) RETURNS jsonb
```

No public overload.

---

### 19. `catalog_products_list_batch`

**Disposition:** ACCEPTED

```text
catalog_products_list_batch(
  p_product_ids uuid[]
) RETURNS SETOF catalog_product_summary
```

Maximum array size:

```text
100
```

Oversized input returns `INVALID_INPUT` and is not silently truncated.

## 5.2 Command-Surface Confirmation

No command accepts:

* `business_id`;
* `actor_id`;
* a permission flag;
* caller-selected authority;
* a normalized value;
* a repeated product or target value already bound by a preview token.

Exactly nineteen public commands exist.

No twentieth command or public overload is authorized.

---

# 6. Final Table Review

| Table                            | Disposition              | Binding condition                                                                             |
| -------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| `catalog_products`               | ACCEPTED WITH CORRECTION | Remove image reference; normalized fields server-controlled; current reference cost protected |
| `catalog_categories`             | ACCEPTED WITH CORRECTION | Server normalization; narrow direct Owner-business read                                       |
| `catalog_selling_price_events`   | ACCEPTED WITH CORRECTION | Immutable; `recorded_at` only; no `effective_at`                                              |
| `catalog_tax_events`             | ACCEPTED                 | Immutable and immediate                                                                       |
| `business_tax_settings`          | ACCEPTED                 | Owner-only command access                                                                     |
| `catalog_reference_cost_events`  | ACCEPTED                 | Immutable, function-only, cost-confidential                                                   |
| `catalog_link_preview_tokens`    | ACCEPTED WITH CORRECTION | Stable business/product open-row uniqueness                                                   |
| `catalog_product_link_events`    | ACCEPTED                 | Immutable; one-directional event references                                                   |
| `catalog_audit_events`           | ACCEPTED WITH CORRECTION | Closed JSON allowlists; no cost                                                               |
| `catalog_deletion_records`       | ACCEPTED                 | Minimal non-cost deletion snapshot                                                            |
| `catalog_write_idempotency_keys` | ACCEPTED WITH CORRECTION | Terminal outcomes only; authoritative unique boundary                                         |
| `catalog_file_references`        | REJECTED / DEFERRED      | Build Later image infrastructure                                                              |

## Final table count

```text
CREATED IN INITIAL PHASE 1: 11
DEFERRED: 1
DEFERRED TABLE: catalog_file_references
```

---

# 7. Final Access Matrix

Legend:

* `—` means no privilege.
* “Function only” means no direct browser-table access.
* Every executor action is additionally restricted by an executor-specific RLS policy and function-body Owner verification.

| Table                            | `anon`                      | Direct `authenticated`                                       | Identity executor                                                             | Lifecycle executor                                   | Pricing executor                          | Tax executor                            | Cost executor                                                  | Link executor                                                         | Read executor                                                               |
| -------------------------------- | --------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------- | --------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `catalog_products`               | —                           | —                                                            | INSERT; scoped SELECT; UPDATE identity, category, unit and normalized columns | scoped SELECT; UPDATE status; DELETE under command 8 | scoped SELECT for lock and validation     | scoped SELECT for tax validation        | scoped SELECT including current cost; UPDATE current cost only | scoped SELECT; UPDATE inventory link, selling unit and timestamp      | column-scoped SELECT required for commands 17–19                            |
| `catalog_categories`             | —                           | SELECT `id`, `business_id`, `name`, `status` under Owner RLS | INSERT; scoped SELECT; UPDATE status and timestamp                            | —                                                    | —                                         | —                                       | —                                                              | —                                                                     | scoped SELECT                                                               |
| `catalog_selling_price_events`   | —                           | —                                                            | —                                                                             | —                                                    | INSERT; minimum scoped SELECT if required | —                                       | —                                                              | INSERT for link-confirmed price; scoped SELECT if required            | scoped SELECT                                                               |
| `catalog_tax_events`             | —                           | —                                                            | —                                                                             | —                                                    | —                                         | INSERT; minimum scoped SELECT           | —                                                              | —                                                                     | scoped SELECT                                                               |
| `business_tax_settings`          | —                           | —                                                            | —                                                                             | —                                                    | —                                         | SELECT; INSERT; UPDATE approved columns | —                                                              | —                                                                     | scoped SELECT                                                               |
| `catalog_reference_cost_events`  | —                           | —                                                            | —                                                                             | —                                                    | —                                         | —                                       | INSERT; scoped SELECT                                          | —                                                                     | scoped SELECT, released only through authorized JSON construction           |
| `catalog_link_preview_tokens`    | —                           | —                                                            | —                                                                             | —                                                    | —                                         | —                                       | —                                                              | INSERT; scoped SELECT; UPDATE lifecycle and minimization columns only | no general direct client release                                            |
| `catalog_product_link_events`    | —                           | —                                                            | —                                                                             | —                                                    | —                                         | —                                       | —                                                              | INSERT; scoped SELECT                                                 | scoped SELECT                                                               |
| `catalog_audit_events`           | —                           | —                                                            | INSERT                                                                        | INSERT                                               | INSERT where approved                     | INSERT                                  | —                                                              | INSERT                                                                | scoped SELECT only if an approved read contract requires it; otherwise none |
| `catalog_deletion_records`       | —                           | —                                                            | —                                                                             | INSERT                                               | —                                         | —                                       | —                                                              | —                                                                     | no Phase 1 client release                                                   |
| `catalog_write_idempotency_keys` | —                           | —                                                            | terminal SELECT/INSERT                                                        | terminal SELECT/INSERT                               | terminal SELECT/INSERT                    | terminal SELECT/INSERT                  | terminal SELECT/INSERT                                         | terminal SELECT/INSERT                                                | scoped SELECT for command 16                                                |
| `inventory_items`                | Existing protected contract | Existing protected contract                                  | —                                                                             | —                                                    | —                                         | —                                       | —                                                              | narrow SELECT for same-business target validation                     | narrow SELECT only if required by approved product result                   |
| `inventory_movements`            | Existing protected contract | Existing protected contract                                  | —                                                                             | —                                                    | —                                         | —                                       | —                                                              | narrow SELECT for D-047 predicate                                     | —                                                                           |

## Direct Authenticated Table Access

The only new direct authenticated catalog-table access is:

```text
catalog_categories:
SELECT (id, business_id, name, status)
```

It is restricted by Owner-business RLS.

No other catalog table grants direct authenticated SELECT, INSERT, UPDATE, or DELETE.

---

# 8. Final Executor Matrix

| Role                         | Command ownership | Table ownership | Principal grants                                                                               | RLS                         | Helper access                                       | Prohibited                                             |
| ---------------------------- | ----------------- | --------------- | ---------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------- | ------------------------------------------------------ |
| `catalog_identity_executor`  | 1–5               | None            | Product/category identity operations; audit insert; terminal idempotency                       | Explicit identity policies  | Owner/business, normalization, audit validation     | Login, BYPASSRLS, service-role membership, cost access |
| `catalog_lifecycle_executor` | 6–8               | None            | Product lifecycle and deletion snapshot; audit; idempotency                                    | Explicit lifecycle policies | Owner/business and lifecycle validation             | Price, cost, tax, link mutation                        |
| `catalog_pricing_executor`   | 9                 | None            | Product lock/read; price-event insert; audit; idempotency                                      | Explicit pricing policies   | Owner/business and price validation                 | Cost access, product identity mutation                 |
| `catalog_tax_executor`       | 10–11             | None            | Tax-event and business-tax-setting operations; audit; idempotency                              | Explicit tax policies       | Owner/business and tax validation                   | Cost and link mutation                                 |
| `catalog_cost_executor`      | 12                | None            | Current-cost projection update; cost-event insert; idempotency                                 | Explicit cost policies      | Owner/business and cost validation                  | Audit-table privilege; general product disclosure      |
| `catalog_link_executor`      | 13–15             | None            | Preview lifecycle; product link columns; link events; link-confirmed price events; idempotency | Explicit link policies      | Owner/business, D-047, preview, fingerprint helpers | Cost access, inventory mutation                        |
| `catalog_read_executor`      | 16–19             | None            | Narrow SELECT needed for outcome, search, product read and batch list                          | Explicit read policies      | Owner/business and internal JSON constructors       | INSERT, UPDATE, DELETE                                 |

## Executor Binding Rules

* All seven roles are `NOLOGIN`.
* All tables are owned by `postgres`.
* Functions are owned by their designated executor.
* No executor has `BYPASSRLS`.
* No executor owns a table.
* No executor receives `service_role` membership.
* No broad inherited executor membership exists.
* No executor receives exposed-schema `CREATE`.
* No runtime `SET ROLE` is used.
* Every policy names the exact executor role.
* UPDATE policies use both `USING` and `WITH CHECK`.
* Helpers remain in a non-exposed internal schema.
* PUBLIC and anon execution are revoked.
* `authenticated` receives execution only on the nineteen approved functions.
* `FORCE ROW LEVEL SECURITY` is not enabled for initial Phase 1.

---

# 9. Final Public and Restricted Rejection Contract

## 9.1 Public Categories

```text
PERMISSION_DENIED
INVALID_INPUT
NOT_FOUND
UNIQUENESS_CONFLICT
LIFECYCLE_CONFLICT
DEPENDENT_HISTORY_CONFLICT
IDEMPOTENCY_CONFLICT
STALE_STATE
CONFIRMATION_REQUIRED
PRICE_CONFIRMATION_REQUIRED
OPERATION_NOT_PERMITTED
UNKNOWN_OUTCOME
```

## 9.2 Restricted Internal Reasons

```text
TOKEN_NOT_FOUND
TOKEN_WRONG_BUSINESS
TOKEN_EXPIRED
TOKEN_ALREADY_CLOSED
TOKEN_SUPERSEDED
TOKEN_REPLAYED
TOKEN_ACTOR_MISMATCH
TOKEN_ACTION_MISMATCH
EXPECTED_STATE_DRIFT
CURSOR_ANCHOR_INVALID
CURSOR_CONTEXT_MISMATCH
AUDIT_PAYLOAD_VIOLATION
IDEMPOTENCY_PAYLOAD_MISMATCH
INTERNAL_CONSTRAINT_FAILURE
```

## 9.3 Mandatory Mapping Rules

* Unknown and foreign-business product identifiers return the same public result.
* Unknown and foreign-business category identifiers return the same public result.
* Foreign and nonexistent outcome keys return indistinguishable `not_found`.
* Unknown, foreign, expired, closed, superseded, replayed, wrong-actor, action-mismatched, or drifted preview tokens return `STALE_STATE`.
* D-047 history lock returns `DEPENDENT_HISTORY_CONFLICT`.
* Category archive requiring confirmation returns `CONFIRMATION_REQUIRED`.
* Link unit change requiring a confirmed price returns `PRICE_CONFIRMATION_REQUIRED`.
* Same-business normalized identity collision returns `UNIQUENESS_CONFLICT`.
* Unexpected rollback or indeterminate transport outcome returns `UNKNOWN_OUTCOME`.

## 9.4 Restricted-Reason Non-Disclosure

Restricted reasons must never appear in:

* public RPC output;
* direct authenticated reads;
* category read results;
* general audit JSON;
* product history;
* browser telemetry;
* merchant messages;
* frontend exception text;
* ordinary application logs;
* analytics events;
* support-visible error text by default.

Database constraint names, SQLSTATE detail, internal role names, row counts, foreign identifiers, and raw PostgreSQL exceptions are not returned to the client.

Restricted reasons may exist only in a separately controlled internal diagnostic boundary when such a boundary is explicitly authorized.

No `system_errors` table is created in initial Phase 1.

---

# 10. Final Correction Package

The following package is binding in full.

## 10.1 Scope and Tables

1. Change every initial Phase 1 table-count statement from twelve to eleven.
2. Defer `catalog_file_references`.
3. Remove `catalog_products.image_ref`.
4. Remove all file-reference helpers, grants, RLS, checks, audit keys, result fields, and command parameters.
5. Record optional product images as Build Later.

## 10.2 Product Read and Cost

6. Do not create `catalog_product_detail` as a PostgreSQL composite.
7. Make `catalog_product_read` return `jsonb`.
8. Use one public RPC and two non-public response constructors.
9. Physically omit all cost keys and cost-history entries from a redacted response.
10. Use equivalent product lookup and authorization handling for foreign and nonexistent identifiers.
11. Do not branch on cost-history existence when constructing a redacted response.
12. Generate the RPC result as `Json`.
13. Maintain separate base and cost-visible runtime schemas.
14. Prohibit direct authenticated access to cost projection and history.
15. Keep reference cost out of general audit JSON.

## 10.3 Commands

16. Use the nineteen exact signatures in Section 5.
17. Remove `p_clear_fields`.
18. Remove `p_precondition_current_price`.
19. Remove product and target identifiers from commands 14 and 15.
20. Permit no public overload.
21. Permit no twentieth command.
22. Enforce a maximum batch size of 100.

## 10.4 Owner Authority

23. Derive actor through `auth.uid()`.
24. Derive business through current Owner ownership.
25. Authorize only through `businesses.owner_id`.
26. Store `authority_basis = 'owner_via_businesses.owner_id'`.
27. Do not query or simulate future permission state.
28. Do not store a future permission flag as current authorization evidence.

## 10.5 Search

29. Use the five deterministic exact/prefix/substring tiers.
30. Use rank 0 for blank list-all queries.
31. Order by `(match_rank, name_normalized, id)`.
32. Require all-null or all-present cursor components.
33. Revalidate the cursor anchor under the current business, query, archive filter, category filter, and ranking contract.
34. Use no uncontrolled `LIKE`.
35. Add no fuzzy, trigram, phonetic, transliteration, similarity, or AI normalization.

## 10.6 Preview and D-068

36. Use `UNIQUE (business_id, product_id) WHERE closed_at IS NULL`.
37. Lock the product and current preview rows.
38. Enforce same-actor confirmation.
39. Treat token possession as non-authoritative.
40. Collapse invalid token states to `STALE_STATE`.
41. Retain the expected-state fingerprint.
42. Minimize merchant display snapshots on closure.
43. Keep expired use as `expired_unconsumed`.
44. Use the correct retention anchor.
45. Require no cleanup worker for functional availability.

## 10.7 Idempotency

46. Use a transaction-scoped advisory lock derived from business, operation, and idempotency key.
47. Treat the advisory lock only as a serialization mechanism.
48. Use `(business_id, operation, idempotency_key)` as the authoritative uniqueness boundary.
49. Store only terminal `completed` or `rejected` outcomes.
50. Commit expected rejections.
51. Roll back unexpected exceptions.
52. Create no durable in-progress state.
53. Return `IDEMPOTENCY_CONFLICT` for mismatching payload fingerprints.
54. Return indistinguishable not-found outcomes for foreign and nonexistent keys.

## 10.8 Roles, Grants and RLS

55. Create exactly seven `NOLOGIN` executor roles.
56. Keep all tables owned by `postgres`.
57. Keep functions owned by their designated executor.
58. Grant no executor `BYPASSRLS`.
59. Grant no executor table ownership.
60. Grant no executor service-role membership.
61. Use explicit executor-targeted RLS policies.
62. Use both `USING` and `WITH CHECK` for applicable UPDATE policies.
63. Do not enable `FORCE ROW LEVEL SECURITY` in initial Phase 1.
64. Revoke PUBLIC and anon execution.
65. Grant authenticated execution only on the nineteen functions.
66. Limit direct authenticated table read to the approved category columns.
67. Keep internal helpers in a non-exposed schema.
68. Use closed security-definer search paths and schema-qualified references.
69. Verify managed Supabase ownership-transfer, role, grant, RLS, extension-schema, and PostgREST behaviour during the later authorized migration stage.

## 10.9 Normalization

70. Use ordinary stored normalized columns.
71. Populate them only through approved internal functions.
72. Preserve merchant-entered Malayalam and Manglish display text.
73. Do not claim unproven Unicode case-folding behaviour.
74. Normalize blank optional SKU and barcode values to SQL `NULL`.
75. Preserve archived identities through ordinary business-scoped uniqueness.
76. Execute fixed normalization regression vectors during authorized migration verification.

## 10.10 Events and Audit

77. Remove selling-price `effective_at`.
78. Use `recorded_at` as the immediate effective instant.
79. Keep event references one-directional.
80. Never update immutable event rows.
81. Permit only the mutable preview row to receive the resulting link-event identifier.
82. Enforce closed per-change-type audit JSON allowlists.
83. Reject unexpected nested audit keys.
84. Give the cost executor no audit-table privilege.
85. Keep deletion records minimal and cost-free.

## 10.11 Rejections

86. Use the exact public rejection set in Section 9.
87. Remove `FILE_REFERENCE_INVALID` from initial Phase 1.
88. Keep restricted internal reasons out of every merchant-visible and ordinary operational surface.
89. Sanitize database exceptions and constraint names.

---

# 11. Final Authority Boundary

This lead review performed no:

* repository modification;
* `.lovable/plan.md` modification;
* SQL creation;
* migration creation;
* Supabase change;
* role or grant creation;
* RLS creation;
* application implementation;
* dependency repair;
* Lovable Build Mode execution;
* publication;
* deployment;
* Product Truth change;
* lifecycle transition.

Implementation authority remains:

```text
NONE
```

Build Mode authority remains:

```text
NONE
```

Mission Control retains exclusive authority to determine whether a later controlled build-authorization mission may begin.

---

# 12. Final Verdict

The unamended regenerated contract contains implementation proposals that must not be executed alone.

The regenerated contract, combined with the complete binding correction package in this report:

* is executable without unresolved Product Truth invention;
* preserves Owner-only authorization through `businesses.owner_id`;
* preserves business isolation;
* preserves command-only writes;
* establishes least-privilege executor separation;
* physically protects reference cost;
* provides deterministic search and cursor behaviour;
* secures D-068 preview confirmation;
* defines terminal idempotency;
* limits the public surface to exactly nineteen commands;
* reduces the initial schema to eleven justified tables;
* introduces no unauthorized future capability;
* requires no further broad specialist review cycle.

Minor wording or formatting repairs that do not change this executable behaviour are non-blocking.

FINAL SPECIALIST ACCEPTANCE PASSED — CONTRACT READY FOR MISSION CONTROL BUILD-AUTHORIZATION DECISION
