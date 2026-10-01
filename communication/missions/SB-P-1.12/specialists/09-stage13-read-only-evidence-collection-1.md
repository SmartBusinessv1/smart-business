# SB-P-1.12 — Stage 13 Read-Only Evidence Collection 1

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Work package:** `SB-P-1.12-WP-READ-ONLY-EVIDENCE-COLLECTION-1`  
**Executing specialist:** Supabase Backend Architecture  
**Authorizing instruction:** `communication/live/instruction1.37.md`  
**Governing authority:** MC-174 — `communication/missions/SB-P-1.12/mission-control/44-plan-q1-disposition-and-evidence-collection-authorization.md`  
**Canonical refined plan:** `communication/missions/SB-P-1.12/claude-code/38-stage13-migration-plan-refinement-and-evidence-closure.md`, blob `29f45b436697c13e481c4b8509cef3cabd4a214a`  
**Canonical baseline:** `main@5d5b06e764d0351edd3988713d7f2548d1cbc3f2`  
**Mode:** read-only evidence collection only  
**SB-MIG-1.4:** NON-EXECUTABLE  
**Implementation Authorization:** WITHHELD

## 1. Authority and PLAN-Q-1

MC-174 is canonical at the authorized baseline. PLAN-Q-1 is already decided:

**OPTION B — preserve the locked EIS order.**

Between M-13d and M-15, **no non-Owner principal may hold, receive, be granted, or exercise any Catalog capability.**

This report does not reopen that decision and creates no migration or implementation authority.

## 2. Collection boundary and observation window

No DDL, DML, migration execution, repair, backfill, mutating RPC, provider-setting change, role/grant/policy mutation, storage mutation, Auth mutation, backup/restore action, link-state change or application implementation was performed.

Provider/database inspection occurred during the 2026-10-01 mission session beginning at approximately **20:15 IST (+05:30)**. The production database supplied an exact server-side observation timestamp of **2026-10-01 14:50:51.2956+00** (20:20:51.2956 IST) and a collection-end timestamp of **2026-10-01 14:51:38.581593+00** (20:21:38.581593 IST). Provider-management responses for project metadata do not themselves expose an observation timestamp; those observations were made within that bounded collection window.

Production target:
- project name: `smart-business`
- project ref: `gysgzasfcjvtrgaigfyn`
- region: `ap-south-1`
- provider status observed: `ACTIVE_HEALTHY`
- PostgreSQL engine: 17
- observed database version: `17.6.1.141`

Historical test target:
- project name: `smart-business-test`
- project ref: `drravyyauixltoihzmwo`
- region: `ap-south-1`
- provider status observed: `INACTIVE`
- PostgreSQL engine: 17
- observed database version metadata: `17.6.1.147`

## 3. EV-03 — test target identity/accessibility

**Exact target:** `drravyyauixltoihzmwo` / `smart-business-test`, `ap-south-1`  
**Observation time:** within 2026-10-01 20:15–20:21:38 IST collection window  
**Method:** Supabase provider project listing plus direct read-only project lookup by exact historical ref; then read-only migration/catalog access attempt  
**Proposed status:** `PARTIALLY EVIDENCED`

### Evidence obtained

- The default visible project list exposed production only.
- A direct provider lookup of the historical ref succeeded and positively identified:
  - ref `drravyyauixltoihzmwo`;
  - name `smart-business-test`;
  - region `ap-south-1`;
  - current provider status `INACTIVE`;
  - database host metadata corresponding to that ref.
- A subsequent read-only database/migration access attempt failed with a connection timeout while the project remained `INACTIVE`.

### Limitation

The project is positively identifiable in provider metadata but its database is not presently query-accessible through the available connection while inactive. This report does **not** infer deletion, transfer, loss of ownership or any reason beyond the observed `INACTIVE` provider status and connection timeout.

The EV-03 closure condition requires positive identity, accessibility and non-production classification. Identity/non-production classification are evidenced; live database accessibility is not.

## 4. EV-04 — test migration-ledger alignment

**Exact target:** `drravyyauixltoihzmwo` / `smart-business-test`  
**Observation time:** within 2026-10-01 20:15–20:21:38 IST collection window  
**Method:** attempted provider read-only migration-list operation after positive project identification  
**Proposed status:** `OPEN`

### Evidence obtained

The target was positively identified, but the read-only migration-list operation could not establish a database connection and timed out while the project was `INACTIVE`.

Canonical comparison baseline remains the repository's 24 migration files, with the already-recorded historical test/replay exceptions:

- `20260719140000` duplicate transaction-table history treatment;
- `20260723200718` and `20260723200952` absent-role repair treatments;
- `20260902140000` production-data-specific repair that must not execute on non-matching test data and whose test ledger was historically reconciled by metadata repair.

### Limitation

No current remote test migration-version list was obtained. Therefore no current missing, extra or unexpected test versions can be asserted.

## 5. EV-05 — test schema/grant baseline

**Exact target:** `drravyyauixltoihzmwo` / `smart-business-test`  
**Observation time:** within 2026-10-01 20:15–20:21:38 IST collection window  
**Method:** attempted read-only catalog access after direct target identification  
**Proposed status:** `OPEN`

### Evidence obtained

Provider metadata identifies the target, but the inactive database did not accept the read-only database connection used for migration/catalog inspection.

### Limitation

No current test objects, RLS policies, grants, functions, schema privileges or authority surfaces were observed. Historical repository/test records are not substituted for current EV-05 evidence.

## 6. EV-07 — production actor-reference census

**Exact target:** production `gysgzasfcjvtrgaigfyn`  
**Observation time:** production SQL window ending 2026-10-01 14:51:38.581593+00  
**Method:** one read-only SQL census over the exact 18 repository-identified actor columns, left-joined to `auth.users(id)`; no rows changed  
**Proposed status:** `CLOSED`

### Per-source census

| ID | Source | Row refs | Distinct identities | Unresolved vs `auth.users` |
|---|---|---:|---:|---:|
| A-01 | `businesses.owner_id` | 3 | 3 | 0 |
| A-02 | `transactions.creator_id` | 0 | 0 | 0 |
| A-03 | `transaction_correction_events.edited_by` | 0 | 0 | 0 |
| A-04 | `inventory_items.created_by` | 5 | 3 | 0 |
| A-05 | `inventory_movements.responsible_user_id` | 3 | 1 | 0 |
| A-06 | `catalog_categories.created_by` | 1 | 1 | 0 |
| A-07 | `catalog_products.created_by` | 5 | 3 | 0 |
| A-08 | `catalog_link_preview_tokens.initiating_actor_user_id` | 2 | 1 | 0 |
| A-09 | `catalog_link_preview_tokens.closed_by_actor_user_id` | 2 | 1 | 0 |
| A-10 | `catalog_selling_price_events.authorized_by_user_id` | 3 | 1 | 0 |
| A-11 | `catalog_tax_events.authorized_by_user_id` | 0 | 0 | 0 |
| A-12 | `catalog_reference_cost_events.authorized_by_user_id` | 0 | 0 | 0 |
| A-13 | `catalog_product_link_events.authorized_by_user_id` | 2 | 1 | 0 |
| A-14 | `catalog_audit_events.authorized_by_user_id` | 10 | 3 | 0 |
| A-15 | `catalog_deletion_records.deleted_by_user_id` | 0 | 0 | 0 |
| A-16 | `catalog_import_batches.initiated_by` | 4 | 1 | 0 |
| A-17 | `catalog_import_rows.resolved_by` | 1 | 1 | 0 |
| A-18 | `parser_upload_leases.created_by` | 0 | 0 | 0 |

Across all 18 columns: **41 non-null row references, 3 distinct identity UUIDs, 0 unresolved identities against current `auth.users`.**

### Limitation

This is the exact 18-column relational census authorized by MC-174. It does not classify possible UUID-like values embedded inside arbitrary JSON/text payloads, and it does not create or validate future `persons` rows. Historical attribution was not modified.

## 7. EV-09 — live FK/cascade inventory

**Exact target:** production `gysgzasfcjvtrgaigfyn`  
**Observation time:** exact DB observation at 2026-10-01 14:50:51.2956+00  
**Method:** read-only `pg_constraint` / catalog inspection for the repository-identified public table set  
**Proposed status:** `PARTIALLY EVIDENCED`

### Evidence obtained

- **37 relevant public foreign-key edges** are live.
- **17 direct `ON DELETE CASCADE` edges to `public.businesses(id)`** are live, matching the corrected repository count in the refined plan.
- **2 public-to-`auth.users` cascade edges** are live:
  - `businesses_owner_id_fkey`: `businesses.owner_id -> auth.users(id) ON DELETE CASCADE`;
  - `transactions_creator_id_fkey`: `transactions.creator_id -> auth.users(id) ON DELETE CASCADE`.
- The live names/actions for the repository F-01 through F-37 set match the refined-plan inventory, including:
  - `transaction_correction_events_transaction_id_fkey` — CASCADE;
  - `inventory_movements_item_business_fk` — RESTRICT;
  - `inventory_movements_correcting_of_fk` — RESTRICT;
  - `catalog_products_category_fk` — RESTRICT;
  - `catalog_products_inventory_item_fk` — RESTRICT;
  - Catalog event product FKs — RESTRICT;
  - import batch FK — RESTRICT;
  - matched/resolved product FKs — NO ACTION;
  - parser business FKs — NO ACTION.

### Record-class status preserved

The live catalog evidence does not resolve the eight refined-plan record-class questions. They remain **UNRESOLVED**:

1. `inventory_items`;
2. `inventory_movement_idempotency_keys`;
3. `catalog_categories`;
4. `catalog_products`;
5. `business_tax_settings`;
6. `catalog_write_idempotency_keys`;
7. `catalog_import_batches`;
8. `catalog_import_rows`.

No lifecycle or legal/retention semantic is invented here. Accordingly EV-09 remains partial even though the live FK shape is now evidenced.

## 8. EV-10 — live function/definer state

**Exact target:** production `gysgzasfcjvtrgaigfyn`  
**Observation time:** production SQL collection window ending 2026-10-01 14:51:38.581593+00  
**Method:** read-only `pg_proc`, `pg_namespace`, `pg_roles` and effective `has_function_privilege` inspection  
**Proposed status:** `CLOSED` for the requested live-state inventory

### 8.1 Catalog command/read functions

All nineteen repository Catalog functions exist as exactly one live overload each. All are `SECURITY DEFINER`, all have effective `search_path=""`, all are executable by `authenticated`, `service_role` and `postgres`, and not executable by `anon`.

| Function signature | Live owner |
|---|---|
| `archive_catalog_category(uuid,uuid,boolean)` | `catalog_identity_executor` |
| `archive_catalog_product(uuid,uuid)` | `catalog_lifecycle_executor` |
| `assign_or_replace_catalog_inventory_link(uuid,uuid,numeric)` | `catalog_link_executor` |
| `catalog_product_read(uuid)` | `catalog_read_executor` |
| `catalog_products_list_batch(uuid[])` | `catalog_read_executor` |
| `catalog_products_search(text,boolean,uuid,integer,smallint,text,uuid)` | `catalog_read_executor` |
| `create_catalog_category(uuid,text)` | `catalog_identity_executor` |
| `create_catalog_product(uuid,text,text,uuid,text,text,text)` | `catalog_identity_executor` |
| `delete_catalog_product(uuid,uuid)` | `catalog_lifecycle_executor` |
| `get_catalog_command_outcome(text,uuid)` | `catalog_read_executor` |
| `preview_catalog_inventory_link_change(uuid,text,uuid)` | `catalog_link_executor` |
| `reactivate_catalog_product(uuid,uuid)` | `catalog_lifecycle_executor` |
| `record_catalog_reference_cost_change(uuid,uuid,numeric)` | `catalog_cost_executor` |
| `record_catalog_selling_price_change(uuid,uuid,numeric)` | `catalog_pricing_executor` |
| `record_catalog_tax_change(uuid,uuid,text,numeric)` | `catalog_tax_executor` |
| `remove_catalog_inventory_link(uuid,uuid)` | `catalog_link_executor` |
| `update_business_tax_settings(uuid,text,numeric)` | `catalog_tax_executor` |
| `update_catalog_product_identity(uuid,uuid,text,text,uuid,text,text)` | `catalog_identity_executor` |
| `update_catalog_product_unit(uuid,uuid,text)` | `catalog_identity_executor` |

**Repository comparison:** live state matches the refined-plan D-01 through D-17, D-27 and D-28 ownership/security/search-path/execution expectations. These are the old signatures that M-13d plans to retire when the requested-business signatures are installed. No additional overload was observed.

### 8.2 Parser-support definers

All nine repository parser-support functions exist as exactly one live overload each. All are `SECURITY DEFINER`, owner `postgres`, `search_path=""`, executable by `service_role` and `postgres`, and not executable by `anon` or `authenticated`.

- `acquire_parser_preview_guard(uuid)`
- `release_parser_preview_guard(uuid,uuid,uuid)`
- `issue_parser_upload_lease(uuid,uuid,text,integer,text,text,uuid)`
- `confirm_parser_upload_lease(uuid,uuid)`
- `claim_parser_upload_lease(uuid,uuid)`
- `mark_parser_upload_lease_dispatched(uuid,uuid)`
- `complete_parser_upload_lease(uuid,uuid)`
- `fail_parser_upload_lease(uuid,uuid,text)`
- `expire_parser_upload_lease(uuid,uuid)`

**Repository comparison:** live state matches D-18 through D-26. The owner remains `postgres`, therefore the refined plan's EC-ISO-10 owner-clause non-compliance remains a real live finding for future M-13e hardening; no mutation was made.

### 8.3 `correct_transaction`

Exact live signature:

`public.correct_transaction(uuid,text,date,text,text,numeric,text,text,text)`

Live state:

- owner: `postgres`;
- security mode: **SECURITY INVOKER**;
- `search_path=public`;
- effective `EXECUTE`: `anon=true`, `authenticated=true`, `service_role=true`, `postgres=true`;
- overload count observed: one.

This confirms the refined-plan repository interpretation: the final live function is not a definer, but it retains effective anonymous execution and a non-hardened `search_path`. M-13b remains the planned replacing family; no change was made.

### 8.4 Other name-matched invoker helpers

The live query also surfaced Catalog guard/trigger helpers such as `catalog_event_provenance_guard()`, `catalog_link_preview_tokens_guard()` and `catalog_products_guard()` as `SECURITY INVOKER`, owner `postgres`, `search_path=""`. Their presence is consistent with repository guard infrastructure and does not alter the 28-definer count.

## 9. EV-17 — G-6 effective-access inventory

**Exact target:** production `gysgzasfcjvtrgaigfyn`  
**Observation time:** production SQL collection window ending 2026-10-01 14:51:38.581593+00  
**Method:** read-only relation, RLS/policy, function, schema, role-membership and `pg_default_acl` inspection  
**Proposed status:** `CLOSED` for current-state inventory; Mission Control still owns target-diff disposition

### 9.1 Public relation effective privileges

All 21 relevant public tables observed have RLS enabled.

Key live effective privilege findings:

- `anon` has full table privilege set (`SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER`) on:
  - `businesses`;
  - `transactions`;
  - `transaction_correction_events`.
- `anon` has no table privileges on the Inventory tables, Catalog tables or parser-support tables in the relevant set.
- `authenticated` retains the full table privilege set on:
  - `businesses`;
  - `transactions`;
  - `transaction_correction_events`;
  - `inventory_items`;
  - `inventory_movements`;
  - `inventory_movement_idempotency_keys`.
- `authenticated` has `SELECT` only on:
  - `catalog_categories`;
  - `catalog_import_batches`;
  - `catalog_import_rows`.
- Other protected Catalog tables expose no direct authenticated table privilege in this inventory.
- `service_role` has broad table privileges on most relevant application tables. `parser_upload_leases` is narrower in the observed ACL (`SELECT`); parser functions provide the controlled mutation surface.

RLS is therefore a load-bearing control on legacy tables that still retain broad underlying grants. This is evidence, not a claim that every policy is acceptable.

### 9.2 RLS/policy state

Every relevant public table reported `relrowsecurity=true`.

Observed policy state is still predominantly the current Owner-only architecture:

- `businesses` includes authenticated Owner SELECT/INSERT/UPDATE/**DELETE** policies using `auth.uid() = owner_id`;
- Catalog executor policies use `catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid())`;
- Catalog authenticated direct reads that exist remain Owner-scoped;
- parser support tables have RLS enabled and no public-table RLS policies in the observed policy inventory, consistent with their privileged service-role function boundary.

No policy was changed.

### 9.3 Function effective execution

EV-10 supplies the detailed relevant function inventory.

Material G-6 observations:

- 19 Catalog definers: `anon=false`, `authenticated=true`, `service_role=true`;
- 9 parser definers: `anon=false`, `authenticated=false`, `service_role=true`;
- `correct_transaction`: `anon=true`, `authenticated=true`, `service_role=true`.

### 9.4 Schema privileges

Observed effective schema privileges:

| Role | `public` USAGE | `public` CREATE | `catalog_internal` USAGE |
|---|---|---|---|
| PUBLIC | yes | no | no |
| anon | yes | no | no |
| authenticated | yes | no | no |
| service_role | yes | no | no |
| postgres | yes | yes | yes |
| supabase_admin | yes | yes | yes |

### 9.5 Relevant role membership/inheritance

Observed membership facts include:

- `authenticator` can set/use `anon`, `authenticated` and `service_role` with non-inheriting membership semantics;
- `postgres` has admin memberships in `anon`, `authenticated`, `service_role` and the seven Catalog executor roles, with the executor memberships observed as non-inheriting;
- no evidence was observed that an executor role itself inherits `service_role`.

This is current catalog evidence only; it does not change role design.

### 9.6 Default privileges — `postgres`

For objects created by `postgres` in `public`:

- **tables:** full default table privileges remain for `authenticated`, `service_role` and `postgres`; no `anon` table default grant is present;
- **functions:** EXECUTE default remains for `authenticated`, `service_role` and `postgres`; no `anon` function default grant is present;
- **sequences:** `anon`, `authenticated` and `service_role` retain UPDATE by default; `postgres` holds SELECT/UPDATE/USAGE.

This confirms the earlier Inventory hardening removed `anon` from the `postgres` table/function default baseline but did not narrow authenticated/service-role defaults.

### 9.7 Default privileges — `supabase_admin`

For `supabase_admin`-created objects in `public`:

- **tables:** `anon`, `authenticated`, `postgres` and `service_role` each receive the broad table privilege set by default;
- **functions:** `anon`, `authenticated`, `postgres` and `service_role` receive EXECUTE by default;
- **sequences:** `anon`, `authenticated`, `postgres` and `service_role` receive SELECT/UPDATE/USAGE by default.

This confirms the repository-described `supabase_admin` residual is live current state.

### Limitation

EV-17 records current effective-access facts. It does not decide EV-26's approved anonymous-workflow list and does not itself authorize M-17. Mission Control must compare this inventory with the accepted target before claiming G-6 closure for execution.

## 10. EV-18 — backup/PITR provider observation

**Exact target:** production `gysgzasfcjvtrgaigfyn`  
**Observation time:** within 2026-10-01 20:15–20:21:38 IST collection window  
**Method:** available Supabase provider management surface inspection only  
**Proposed status:** `OPEN`

### Evidence obtained

The provider surface available to this specialist exposes project identity/health/database-version metadata but exposes no read-only backup/PITR endpoint or fields for:

- backup status;
- backup retention window;
- PITR enablement;
- latest recoverable point;
- restore/recovery capability metadata.

No restore, backup or configuration action was attempted.

### Limitation

Absence from the available connector surface is not evidence that backups or PITR are absent. EV-18 remains OPEN until an authorized provider surface that exposes these facts is inspected.

## 11. EV-21 — G-7 provider/storage evidence

**Exact target:** production `gysgzasfcjvtrgaigfyn`  
**Observation time:** production SQL collection window ending 2026-10-01 14:51:38.581593+00  
**Method:** read-only `storage.buckets`, `pg_policies`, relation privilege and FK catalog inspection  
**Proposed status:** `PARTIALLY EVIDENCED`

### 11.1 Storage state

Observed:

- `storage.buckets`: **0 buckets**;
- no policies on `storage.objects` or `storage.buckets`;
- both `storage.objects` and `storage.buckets` report RLS enabled;
- underlying ACLs expose SELECT/INSERT/UPDATE/DELETE capability to both `anon` and `authenticated`, but with no storage policies observed, RLS remains the row-level gate.

There is therefore no current Smart Business bucket/object-policy surface to classify for M-20, but the platform storage relations themselves exist.

### 11.2 Auth-deletion interaction observable from live database

Current application-level public references to `auth.users` include:

- `businesses.owner_id -> auth.users(id) ON DELETE CASCADE`;
- `transactions.creator_id -> auth.users(id) ON DELETE CASCADE`.

Provider-managed Auth schema also contains its own internal user-dependent relationships, which are platform implementation details and are not reclassified here.

The production application has not yet installed the future `persons.auth_user_id ... RESTRICT` design, so this read-only collection cannot demonstrate provider behavior against that future constraint without mutation/test execution, which MC-174 expressly prohibits.

### Limitation

EV-21's storage-policy portion is evidenced for current production state. Provider Auth-deletion behavior **against the future retained-record RESTRICT design** is not observable without a suitable test/runtime exercise or provider-specific evidence not exposed by the current read-only surface. No user deletion was attempted.

## 12. Evidence status summary

| EV | Proposed status | Principal result |
|---|---|---|
| EV-03 | `PARTIALLY EVIDENCED` | Test ref/name/non-production identity confirmed; project `INACTIVE`; DB connection unavailable |
| EV-04 | `OPEN` | Current test migration ledger unavailable because inactive DB timed out |
| EV-05 | `OPEN` | Current test schema/grants/functions unavailable |
| EV-07 | `CLOSED` | 18-column production census: 3 distinct identities, 0 unresolved |
| EV-09 | `PARTIALLY EVIDENCED` | Live 37-FK shape / 17 business cascades confirmed; 8 record classes remain unresolved |
| EV-10 | `CLOSED` | Relevant signatures/owners/security/search path/effective EXECUTE and overload state captured live |
| EV-17 | `CLOSED` | Current G-6 effective-access inventory captured; Mission Control still owns target-diff disposition |
| EV-18 | `OPEN` | Backup/PITR fields not exposed by available read-only provider surface |
| EV-21 | `PARTIALLY EVIDENCED` | Current storage state captured; future RESTRICT/Auth-deletion behavior not observable |

The specialist proposes these statuses only. Mission Control owns formal gate closure.

## 13. Material evidence implications

1. **EV-07 is materially favorable:** current relational actor references contain no unresolved Auth identities across the exact 18-column inventory. This removes the presently-observed orphan condition, but M-04 implementation/rehearsal remains separately gated.
2. **EV-09 confirms the refined-plan repository inventory is current in production.** It does not resolve the eight record-class decisions and therefore does not unblock M-10.
3. **EV-10 confirms two live hardening targets rather than merely repository hypotheses:** parser definers are still owned by `postgres`, and `correct_transaction` still has anonymous execution.
4. **EV-17 confirms G-6 needs an explicit M-17 reconciliation:** broad legacy anon grants remain on `businesses`, `transactions` and correction events, and `supabase_admin` default privileges still grant broad future public-schema access to `anon`.
5. **EV-03/04/05 remain operationally linked:** the historical test project still exists in provider metadata but is inactive, so its current database state cannot be used as implementation evidence without separate authority to make it accessible.
6. **EV-18 remains a production-execution blocker.**
7. **EV-21 does not authorize identity-deletion runtime.**

## 14. No-mutation confirmation

During this work package:

- no application code was implemented;
- no SQL/migration artifact was authored;
- no migration was executed;
- no test or production data was changed;
- no schema, function, trigger, RLS policy, grant, default privilege or role was changed;
- no migration ledger was repaired;
- no Supabase project was resumed/restored/paused;
- no backup or PITR action was initiated;
- no storage object or bucket was created/changed/deleted;
- no Auth user was created/changed/deleted;
- no identity-deletion runtime was executed;
- no Lovable action occurred;
- no implementation or production authority was issued.

**READ-ONLY EVIDENCE COLLECTION 1 SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
