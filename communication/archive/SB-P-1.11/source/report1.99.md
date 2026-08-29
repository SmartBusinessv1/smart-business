# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-4 — SUPABASE BACKEND CONFIRMATION REVIEW

**Report ID:** report1.99  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Founder Workflow Reconciliation  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** `communication/live/instruction1.93.md`  
**Mode:** REVIEW MODE ONLY  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Build Lock Authority:** NONE

---

## 1. Executive Verdict

Supabase Backend Architecture performed the bounded confirmation review required by `communication/live/instruction1.93.md` against the merged backend correction in `communication/live/report1.98.md`, using `communication/live/report1.97.md` as the prior findings baseline and current repository backend contracts as the controlling technical evidence.

Latest merged `main` reviewed:

`9fdf5b8be33318facb7e4e8423f46b41aa54d21c`

Four prior findings are confirmed resolved at architecture-contract level:

- BKR-1 — durable Inventory-item creation idempotency;
- BKR-2 — preview-generation-scoped link-confirm idempotency;
- BKR-4 — Catalog hard-delete dependency reconciliation;
- BKR-5 — batch terminal-state rule.

BKR-3 is **not fully resolved as written** because `report1.98.md` contains a repository-disproved composite-key claim for Inventory references. It specifies Inventory-side composite foreign keys in `(business_id, inventory_item_id)` order and states that `inventory_items` already has a matching `UNIQUE (business_id, id)` key. The current canonical Inventory migration instead defines:

`UNIQUE (id, business_id)`

on `public.inventory_items`.

PostgreSQL composite foreign-key column order must match an eligible referenced unique/primary key. Therefore the Inventory-reference FK contract in `report1.98.md` is not executable exactly as written unless the contract is corrected to reference the existing `(id, business_id)` key in matching order, or a separately justified matching unique key is explicitly added. The smaller correction is to use the existing key and reverse the referencing-column order in the two Inventory composite FKs.

No stop-rule condition requiring permission expansion, a twentieth Catalog command, service-role Product Truth mutation, Product Truth redesign, parser bypass, D-047/D-068 weakening, or new production authority was found.

**Final verdict:**

`SUPABASE BACKEND CONFIRMATION REVIEW — CHANGES REQUIRED`

---

## 2. Files and Evidence Reviewed

Reviewed from latest merged `main`:

1. `communication/live/instruction1.93.md`;
2. `communication/live/report1.98.md`;
3. `communication/live/report1.97.md`;
4. `communication/live/report1.96.md` only where needed to verify superseded claims;
5. `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` — canonical Inventory foundation schema, RLS, movement ledger, and Inventory composite uniqueness;
6. `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql` — corrected `create_inventory_movement` idempotency behavior;
7. `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` — Catalog composite-key ordering and executor/RLS architecture;
8. `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql` — current Catalog command signatures, idempotency, D-047/D-068 link behavior;
9. `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` — import-support persistence precedent;
10. `supabase/migrations/20260811090000_sb_p_1_11_gc_1_security_correction.sql` — current `delete_catalog_product` import-history reconciliation precedent;
11. `src/integrations/supabase/inventory.ts` — current direct Inventory-item insert and movement RPC client contract;
12. `src/integrations/supabase/client.server.ts` and `src/integrations/supabase/auth-middleware.ts` — current caller-JWT and server-only privileged-client boundaries;
13. `src/lib/catalog-import/idempotency.ts` — current deterministic UUIDv5 follow-up-key derivation pattern.

Repository evidence prevails where it conflicts with `report1.98.md`.

---

## 3. BKR-1 — Inventory-Item Creation Idempotency

**Confirmation result: VERIFIED RESOLVED AT ARCHITECTURE-CONTRACT LEVEL.**

`report1.98.md` replaces the prior unsafe direct-insert replay assumption with one chosen architecture:

- new Inventory-domain `create_inventory_item` operation;
- `SECURITY INVOKER`;
- authenticated caller identity from `auth.uid()`;
- Owner-only Phase 1 authority preserved through the existing Inventory RLS model;
- no service-role Product Truth mutation;
- durable `inventory_item_idempotency_keys` bookkeeping;
- idempotency scope `(business_id, operation, idempotency_key)`;
- payload fingerprint based on normalized/trimmed `name` and `base_unit` inputs;
- same-key/same-payload replay returns the original terminal outcome;
- same-key/different-payload returns `IDEMPOTENCY_CONFLICT`;
- same-key concurrency is serialized before authoritative idempotency evaluation;
- successful result durably identifies the created Inventory item;
- no Catalog command is added or changed by this Inventory-domain operation.

This resolves the unknown-outcome failure window identified in `report1.97.md`: a server failure after Inventory insertion no longer requires guessing from an import-support flag or name uniqueness.

### BKR-1 repository compatibility

Current repository evidence confirms the correction is additive rather than contradictory:

- ordinary Inventory item creation is presently a direct authenticated insert;
- no durable Inventory-item creation idempotency operation exists today;
- `create_inventory_movement` already proves the accepted Inventory-domain pattern of caller-identity execution plus durable operation-scoped idempotency;
- the proposed operation does not need service-role Product Truth authority.

No new BKR-1 blocker was discovered.

**BKR-1 status:** `CONFIRMED RESOLVED`

---

## 4. BKR-2 — Link-Confirm Idempotency After Re-Preview

**Confirmation result: VERIFIED RESOLVED.**

The corrected key contract is:

`derive(row_idempotency_key, "catalog_inventory_link_confirm", preview_token_id)`

This correctly scopes durable confirmation identity to one preview generation.

The resulting behavior is compatible with the existing `preview_catalog_inventory_link_change` / `assign_or_replace_catalog_inventory_link` contract:

- preview remains disposable and intentionally not idempotency-tracked;
- confirmation remains the governed durable command;
- replay of the same preview uses the same derived confirmation key and therefore replays safely;
- a stale/expired/superseded old preview may retain its terminal `STALE_STATE` outcome under its old key;
- a fresh preview returns a fresh `preview_token_id`;
- the new token therefore generates a different confirmation key;
- the new attempt does not collide with the old terminal idempotency record and does not falsely return `IDEMPOTENCY_CONFLICT` merely because a re-preview occurred;
- D-068 confirmation behavior remains inside the unchanged existing Catalog link commands.

No permission, service-role, or Catalog command-surface expansion is introduced.

**BKR-2 status:** `CONFIRMED RESOLVED`

---

## 5. BKR-3 — Inventory Import Persistence Contract

**Confirmation result: CHANGE STILL REQUIRED.**

The correction substantially resolves the prior persistence-design gap. The following parts are acceptable:

- separate `inventory_import_batches` / `inventory_import_rows` rather than overloading Catalog import support;
- business-scoped batch identity with `UNIQUE (business_id, id)`;
- tenant-bound batch→row composite FK with non-cascading deletion;
- separate `classification_state` and `execution_state`;
- stable row ordinal and stable `row_idempotency_key`;
- durable per-step progress including Catalog creation/reuse, Inventory creation/reuse, link preview/confirm, and Opening Stock;
- bounded attempt metadata;
- same-business Catalog references;
- Owner-only authenticated visibility;
- `authenticated` SELECT-only;
- no Manager/Employee permission expansion;
- no `anon` access;
- narrow server-only bookkeeping writes only after caller-JWT authorization;
- explicit neutralization of inherited default privileges before narrow grants;
- no batch→row cascade destruction.

### 5.1 Blocking repository contradiction — Inventory composite FK order

`report1.98.md` specifies Inventory references equivalent to:

```sql
FOREIGN KEY (business_id, matched_inventory_item_id)
REFERENCES inventory_items (business_id, id)

FOREIGN KEY (business_id, resolved_inventory_item_id)
REFERENCES inventory_items (business_id, id)
```

and states that `inventory_items (business_id, id)` is an already-existing composite unique key.

That statement is false against the canonical Inventory migration.

The actual existing key is:

```sql
CONSTRAINT inventory_items_id_business_uniq
  UNIQUE (id, business_id)
```

The Catalog Stage 1 migration explicitly documents this ordering difference and uses `(id, business_id)` when referencing the pre-existing Inventory table.

Therefore the proposed Inventory FKs in `report1.98.md` cannot rely on the claimed existing referenced key in the order written.

### 5.2 Required bounded correction

Use the existing Inventory composite key rather than adding speculative redundancy:

```sql
FOREIGN KEY (matched_inventory_item_id, business_id)
REFERENCES inventory_items (id, business_id)
```

and:

```sql
FOREIGN KEY (resolved_inventory_item_id, business_id)
REFERENCES inventory_items (id, business_id)
```

with nullable `MATCH SIMPLE` semantics as appropriate.

This preserves the same-business guarantee while matching the canonical Inventory key order already used elsewhere in the repository.

If a future correction instead chooses to add `UNIQUE (business_id, id)` to `inventory_items`, that must be explicit and justified; it is not currently present and must not be assumed.

### 5.3 No wider architecture failure

This is a bounded physical-contract correction. It does not require:

- merged Catalog/Inventory truth;
- permission expansion;
- service-role Inventory truth mutation;
- a twentieth Catalog command;
- D-047 or D-068 weakening;
- parser redesign;
- production authority.

**BKR-3 status:** `CHANGE REQUIRED`

---

## 6. BKR-4 — Catalog Hard-Delete Dependency Reconciliation

**Confirmation result: VERIFIED RESOLVED AT ARCHITECTURE-CONTRACT LEVEL.**

The correction correctly requires `delete_catalog_product` to include future `inventory_import_rows` Product references in its dependent-history check before physical deletion.

The intended effect is correct:

- if a Product is referenced by `matched_catalog_product_id` or `resolved_catalog_product_id`, hard delete returns the governed `DEPENDENT_HISTORY_CONFLICT` outcome;
- the database FK remains fail-closed as defense in depth;
- a raw foreign-key exception is not used as the merchant-facing/business-command outcome;
- `catalog_lifecycle_executor` receives only the narrow SELECT + business-scoped RLS access required to perform this dependency check, mirroring the already-implemented `catalog_import_rows` precedent;
- command signature, ownership model, idempotency semantics, and public command count remain unchanged.

This is an internal body/grant-policy amendment to the existing `delete_catalog_product` command, not a twentieth Catalog command.

**BKR-4 status:** `CONFIRMED RESOLVED`

---

## 7. BKR-5 — Batch Terminal-State Rule

**Confirmation result: VERIFIED RESOLVED.**

`report1.98.md` now locks the required concurrency-safe batch lifecycle:

- `previewed → committing` through one conditional compare-and-set claim scoped by server-derived business and eligible batch state;
- `committing → committed` only after all rows are evaluated and every included row has reached an explicitly allowed non-blocking terminal disposition;
- `committing → failed` when any required row remains blocking;
- `failed → committing` remains retryable through the same claim rule;
- a committed batch never reopens.

The row-level terminal rule also closes the prior ambiguity:

- `SKIPPED` may be a terminal non-save disposition;
- `READY` requires `execution_state = COMPLETE` before it can be non-blocking;
- required Catalog creation/reuse, Inventory creation/reuse, link confirmation, and Opening Stock where applicable must all have durable completion evidence before row completion;
- retryable `FAILED`, `PENDING`, or `IN_PROGRESS` execution cannot be hidden beneath a committed batch;
- `POSSIBLE_MATCH` / `NEEDS_CORRECTION` cannot silently mutate Product or Inventory truth and cannot be misreported as successful completion.

This preserves truthful partial-failure reporting and deterministic resume.

**BKR-5 status:** `CONFIRMED RESOLVED`

---

## 8. Cross-Contract Preservation

| Boundary | Result | Confirmation |
|---|---|---|
| Catalog and Inventory remain separate truth models | PASS | New support tables are bookkeeping only; Catalog/Inventory truth mutations remain in their own governed domains. |
| D-047 dependent-history safety | PASS | Existing link preview/confirm path remains reused; Opening Stock occurs only after link establishment. |
| D-068 preview/confirm safeguard | PASS | Existing preview and confirm commands remain unchanged; re-preview changes only idempotency identity for the next confirmation generation. |
| Append-only Inventory movement truth | PASS | Opening Stock remains `create_inventory_movement`; no update/delete current-stock model introduced. |
| No direct current-stock writes | PASS | Import support never becomes Inventory quantity truth. |
| Exactly nineteen public Catalog commands | PASS | BKR-1 adds an Inventory-domain operation; BKR-4 amends an existing Catalog command internally only. |
| Owner-only Phase 1 Inventory bulk authority | PASS | Corrected contracts preserve caller-JWT Owner authority. |
| Manager fail-closed | PASS | No new Manager grant/policy is proposed. |
| Employee fail-closed | PASS | No new Employee grant/policy is proposed. |
| Parser/runtime gate remains independent | PASS | No claim of parser-gate closure or bypass is made. |
| Service-role authorization bypass prohibited | PASS | Privileged client remains support-table bookkeeping only; business truth commands use caller identity. |
| Business-scoped tenant isolation | PASS WITH BKR-3 CORRECTION | Architecture requires same-business composite references; Inventory FK ordering must be corrected to the actual `(id, business_id)` key. |
| No silent duplicate/merge/link | PASS | Candidate discovery and merchant confirmation remain distinct from authoritative mutations. |

No cross-contract regression other than the BKR-3 physical-key mismatch was discovered.

---

## 9. New Blocking Consequence Discovered

One new blocking backend consequence was found:

### NBK-1 — Inventory composite-key order mismatch

**Source claim:** `report1.98.md` states that same-business Inventory references may target `inventory_items (business_id, id)` because that composite unique key already exists.

**Repository truth:** `inventory_items` currently exposes `UNIQUE (id, business_id)` instead.

**Impact:** a migration author following `report1.98.md` literally cannot create the specified `(business_id, inventory_item_id) → (business_id, id)` composite FK against the claimed existing key without an additional matching unique constraint. The architecture therefore remains non-executable exactly as written.

**Required resolution:** amend the backend correction contract to use `(inventory_item_id, business_id) → inventory_items(id, business_id)` for both matched and resolved Inventory references, or explicitly authorize and justify a new matching unique key. Reusing the existing key is the minimum-change path.

This is a bounded schema-contract correction and does not trigger an authority stop rule.

---

## 10. No-Implementation Confirmation

This confirmation mission performed review only.

No:

- application code was changed;
- dependency was changed;
- SQL or migration was created;
- Supabase DDL/DML was executed;
- test or production database was mutated;
- RLS or grant was changed;
- service-role authority was expanded;
- Lovable change occurred;
- parser was redesigned;
- Product Truth was modified;
- permission was expanded;
- twentieth Catalog command was added;
- Build Lock or Build Mode was authorized;
- deployment occurred;
- production system was touched.

Only `communication/live/report1.99.md` was created for human review.

---

## 11. Required Next Gate

Because this report returns:

`SUPABASE BACKEND CONFIRMATION REVIEW — CHANGES REQUIRED`

Mission Control should **not** advance to the Security & Permissions Architecture review as though the backend confirmation had passed.

The smallest next step is a documentation-only backend correction to `report1.98.md`'s BKR-3 Inventory composite-FK contract, followed by a narrow Supabase Backend confirmation of that single correction.

No implementation or Build Mode is authorized by this report.

---

## 12. Final Verdict

`SUPABASE BACKEND CONFIRMATION REVIEW — CHANGES REQUIRED`
