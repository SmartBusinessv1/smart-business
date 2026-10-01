# SB-P-1.12 — Stage 13 Test Environment Reactivation and Baseline Evidence

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Work package:** `SB-P-1.12-WP-TEST-ENVIRONMENT-REACTIVATION-AND-BASELINE-EVIDENCE`  
**Executing specialist:** Supabase Backend Architecture  
**Authorizing instruction:** `communication/live/instruction1.38.md`  
**Governing authority:** MC-175 — `communication/missions/SB-P-1.12/mission-control/45-evidence-disposition-and-test-environment-reactivation-authorization.md`  
**Canonical baseline:** `main@fbb29cc49dc96e5c294e544d55a0e949af9b97fd`  
**SB-MIG-1.4:** NON-EXECUTABLE  
**Implementation Authorization:** WITHHELD

## 1. Exact pre-action identity and status

Before any provider mutation, the exact project was re-read and matched MC-175 in every identity field:

- project ref: `drravyyauixltoihzmwo`;
- project name: `smart-business-test`;
- organization: `himkzepyuyaejqjieugk`;
- region: `ap-south-1`;
- classification: non-production test;
- provider status: `INACTIVE`;
- PostgreSQL engine/version metadata: 17 / `17.6.1.147`.

Production `gysgzasfcjvtrgaigfyn` was not mutated.

## 2. Exact reactivation operation

The only provider-state mutation performed was the provider's existing-project restore/reactivation operation against:

`drravyyauixltoihzmwo`

The provider returned:

`{"success":true}`

Observed status progression:

`INACTIVE -> COMING_UP -> ACTIVE_HEALTHY`

No new project was created. No development branch was created. No replacement environment was created.

### Billing / purchase / plan check

No purchase prompt, plan-upgrade prompt, new-resource cost confirmation, billing confirmation, organization mismatch or target ambiguity was presented by the provider operation.

## 3. Exact post-action identity and accessibility

Post-reactivation project metadata:

- ref: `drravyyauixltoihzmwo`;
- name: `smart-business-test`;
- organization: `himkzepyuyaejqjieugk`;
- region: `ap-south-1`;
- status: `ACTIVE_HEALTHY`;
- database engine: PostgreSQL 17;
- database version metadata: `17.6.1.147`.

Read-only database access then succeeded.

Exact database observation timestamp:

`2026-10-01 15:27:49.209004+00`

Query role reported by the read-only inspection connection:

`postgres`

## 4. EV-03 — test target identity/accessibility

**Proposed status:** `CLOSED`

### Evidence

The historical test project is now:

- positively identified by exact ref/name/org/region;
- explicitly non-production under MC-175;
- `ACTIVE_HEALTHY`;
- accessible to read-only database and migration-ledger inspection.

No target ambiguity remains.

## 5. EV-04 — test migration-ledger alignment

**Proposed status:** `CLOSED`

### 5.1 Canonical repository set

All 24 canonical migration files were individually verified to exist at the authorized repository baseline.

### 5.2 Exact remote test ledger

| # | Version | Canonical repository migration | Remote test migration name | Result |
|---:|---|---|---|---|
| 1 | `20260708210504` | `0a471e2c-a76c-4178-8aa2-79a3744e8bd2` | same | MATCH |
| 2 | `20260719102137` | `55a1dac6-b26a-47e6-aed3-305b9b20636b` | same | MATCH |
| 3 | `20260719140000` | `f24b4d69-127e-4547-9fff-8ed9f31cc8fe` | same | MATCH — historical repair exception |
| 4 | `20260720142204` | `3786b8a1-e72a-4ae4-88b3-837b76ce1bf9` | same | MATCH |
| 5 | `20260720142248` | `97de5be2-ef9f-4283-9318-9eb9f9a6cca1` | same | MATCH |
| 6 | `20260721205714` | `c3b38f2f-5f12-431d-80c2-9b14394cbc20` | same | MATCH |
| 7 | `20260723200622` | `c91f9e51-70ba-4b7c-b952-9e2ac9b4b0a8` | same | MATCH |
| 8 | `20260723200718` | `f9801e9d-3f18-4827-b3db-196e6a11af8d` | same | MATCH — historical repair exception |
| 9 | `20260723200952` | `78716769-3b76-4595-a46c-3a6158ebba0c` | same | MATCH — historical repair exception |
| 10 | `20260724085729` | `272cf407-5ca1-4433-b6e1-f39f9e44c13b` | same | MATCH |
| 11 | `20260724170000` | `6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62` | same | MATCH |
| 12 | `20260727000000` | `reconcile_default_grants` | same | MATCH |
| 13 | `20260806120000` | `sb_p_1_11_impl_1_stage1_schema` | same | MATCH |
| 14 | `20260806130000` | `sb_p_1_11_impl_1_stage2_functions` | same | MATCH |
| 15 | `20260808120000` | `sb_p_1_11_rr_2_category_select_grant` | `sb_p_1_11_rr_2_grant_remediation` | VERSION MATCH; known name metadata divergence |
| 16 | `20260808140000` | `sb_p_1_11_rr_3_tax_lifecycle_rls_remediation` | same | MATCH |
| 17 | `20260810120000` | `sb_p_1_11_gc_1_catalog_import_support_schema` | same | MATCH |
| 18 | `20260811090000` | `sb_p_1_11_gc_1_security_correction` | same | MATCH |
| 19 | `20260819120000` | `sb_p_1_11_gc_38r_parser_support_schema` | same | MATCH |
| 20 | `20260826120000` | `sb_p_1_11_gc_38r_parser_guard_ambiguity_fix` | same | MATCH |
| 21 | `20260830120000` | `sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening` | same | MATCH |
| 22 | `20260902120000` | `sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard` | same | MATCH |
| 23 | `20260902140000` | `sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair` | same | MATCH — historical test-ledger repair exception |
| 24 | `20260902150000` | `sb_ops_prod_sync_1_0_instr1_8_phase_b_inventory_item_uniqueness` | same | MATCH |

### 5.3 Four recorded historical replay/repair exceptions

The four recorded exception versions are all present in the current remote test ledger:

1. `20260719140000` — duplicate transactions migration; historically ledger-repaired rather than replayed as duplicate DDL.
2. `20260723200718` — historical absent-`sandbox_exec` role exception; ledger repair recorded.
3. `20260723200952` — historical absent-`sandbox_exec` role exception; ledger repair recorded.
4. `20260902140000` — production-data-specific repair; test ledger historically reconciled as applied without executing the production-specific data mutation.

No repair was performed in this work package.

### 5.4 Ledger conclusion

- canonical repository migration versions: 24;
- remote test migration versions: 24;
- missing versions: 0;
- extra versions: 0;
- unexpected versions: 0;
- known remote-name metadata divergence: 1 at `20260808120000`;
- historical repair/replay exceptions: 4, all accounted for.

The ledger is aligned at the version level.

## 6. EV-05 — current test schema/grant/function baseline

**Proposed status:** `CLOSED` for current baseline evidence

### 6.1 Relevant schemas and objects

Observed schemas relevant to this package:

- `public`;
- `catalog_internal`;
- platform `auth`;
- platform `storage`.

Observed relevant public application tables: 21.

1. `businesses`
2. `transactions`
3. `transaction_correction_events`
4. `inventory_items`
5. `inventory_movements`
6. `inventory_movement_idempotency_keys`
7. `catalog_categories`
8. `catalog_products`
9. `business_tax_settings`
10. `catalog_link_preview_tokens`
11. `catalog_selling_price_events`
12. `catalog_tax_events`
13. `catalog_reference_cost_events`
14. `catalog_product_link_events`
15. `catalog_audit_events`
16. `catalog_deletion_records`
17. `catalog_write_idempotency_keys`
18. `catalog_import_batches`
19. `catalog_import_rows`
20. `parser_preview_guards`
21. `parser_upload_leases`

Provider table inspection reported RLS enabled on all 21.

Expected future SB-P-1.12 authority structures are not present, as expected because `SB-MIG-1.4` remains non-executable:

- `authz` schema: absent;
- `public.persons`: absent;
- `public.business_memberships`: absent;
- `public.confirmation_bindings`: absent;
- `public.authority_events`: absent.

This is expected baseline state, not drift.

### 6.2 Current RLS/policy architecture

Observed policies remain the pre-SB-P-1.12 Owner-only / executor architecture:

- `businesses`: authenticated Owner INSERT/SELECT/UPDATE/DELETE through `auth.uid() = owner_id`;
- transactions/corrections: authenticated Owner-scoped policies;
- Inventory: authenticated Owner-scoped policies plus narrow Catalog link read paths where required;
- Catalog: dedicated executor-role policies using `catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid())`;
- parser support tables: RLS enabled with no ordinary browser policies.

No RLS or policy mutation occurred.

### 6.3 Effective table grants

Current test grant shape is materially aligned with the repository/current production architecture:

- `anon` still has direct table privileges on legacy:
  - `businesses`;
  - `transactions`;
  - `transaction_correction_events`.
- `anon` has no direct table privileges on the three Inventory tables, Catalog tables or parser support tables.
- `authenticated` retains broad direct table privileges on:
  - legacy business/transaction tables;
  - Inventory tables.
- `authenticated` has selected read-only Catalog support grants such as:
  - `catalog_categories`;
  - `catalog_import_batches`;
  - `catalog_import_rows`.
- `service_role` remains broadly privileged on most support/application tables.
- `parser_upload_leases` is directly `service_role SELECT` only; lifecycle writes are through the parser helper surface.

This evidence does not approve those legacy grants; it records the current baseline.

### 6.4 Schema privileges

Observed:

| Role | `public` USAGE | `public` CREATE | `catalog_internal` USAGE |
|---|---|---|---|
| PUBLIC | yes | no | no |
| anon | yes | no | no |
| authenticated | yes | no | no |
| service_role | yes | no | no |
| postgres | yes | yes | yes |
| supabase_admin | yes | yes | yes |

### 6.5 Default privileges

For objects created by `postgres` in `public`:

- tables: broad defaults remain for `authenticated` and `service_role`; no `anon` table default remains;
- functions: EXECUTE defaults remain for `authenticated` and `service_role`; no `anon` function default remains;
- sequences: the observed `postgres` default ACL does not grant `anon`, `authenticated` or `service_role` sequence rights; this matches the repository hardening migration's recorded expectation that the `postgres` sequence baseline did not require correction.

For objects created by `supabase_admin` in `public`:

- broad table defaults remain for `anon`, `authenticated`, `postgres`, `service_role`;
- function EXECUTE defaults remain for all four;
- sequence SELECT/UPDATE/USAGE defaults remain for all four.

The known `supabase_admin` default-privilege residual therefore exists in test too.

### 6.6 Relevant role membership

Observed current role relationships include:

- `authenticator` has non-inheriting membership paths to `anon`, `authenticated` and `service_role`;
- `postgres` has admin membership in the seven Catalog executor roles with non-inheriting executor membership;
- no application executor was observed inheriting `service_role`.

Platform-managed role membership such as `supabase_realtime_admin` is recorded as provider state, not reclassified as application authority.

### 6.7 Relevant function state

#### Catalog

All nineteen Catalog public command/read functions exist as one observed overload each.

Common live state:

- `SECURITY DEFINER`;
- dedicated Catalog executor owners;
- `search_path=""`;
- `anon EXECUTE=false`;
- `authenticated EXECUTE=true`;
- `service_role EXECUTE=true`.

The signatures match the repository's pre-SB-P-1.12 Catalog surface.

#### Parser support

All nine parser support functions exist as one observed overload each:

- owner: `postgres`;
- `SECURITY DEFINER`;
- `search_path=""`;
- `anon EXECUTE=false`;
- `authenticated EXECUTE=false`;
- `service_role EXECUTE=true`.

This preserves the known future M-13e hardening requirement that parser definers move away from `postgres` ownership under the locked EC-ISO-10 target.

#### Transactions

`correct_transaction(uuid,text,date,text,text,numeric,text,text,text)` is live as:

- owner `postgres`;
- `SECURITY INVOKER`;
- `search_path=public`;
- effective EXECUTE for `anon`, `authenticated`, `service_role`.

This matches the canonical repository/current-production baseline and remains a future M-13b remediation target.

#### Inventory

Observed current Inventory functions remain `SECURITY INVOKER`, including:

- `create_inventory_movement(...)`;
- `preview_inventory_movement(...)`;
- `inventory_current_stock_batch(uuid[])`;
- `inventory_movement_remaining_compensable(uuid)`;
- Inventory guard functions.

The Inventory anon hardening is present: these relevant Inventory functions are not executable by `anon`.

## 7. Drift assessment

### 7.1 Confirmed expected historical metadata drift

One known migration-name metadata divergence remains:

- version `20260808120000`;
- canonical repository filename/name: `sb_p_1_11_rr_2_category_select_grant`;
- remote test ledger name: `sb_p_1_11_rr_2_grant_remediation`.

The version is present. No repair is authorized or required by this report.

### 7.2 No version drift

No missing, extra or unexpected migration version exists in the test ledger.

### 7.3 No SB-P-1.12 implementation drift

The test project has not silently acquired future SB-P-1.12 authority structures. `authz`, `persons`, `business_memberships`, `confirmation_bindings` and `authority_events` are absent as expected.

### 7.4 Current known security debt remains baseline, not newly introduced drift

The following known current-state issues are present in test as expected from the canonical baseline:

- broad legacy anon privileges on businesses/transactions/corrections;
- `correct_transaction` anonymous EXECUTE;
- parser definers owned by `postgres`;
- broad `supabase_admin` default privileges.

These are future migration/hardening targets, not changes performed here.

## 8. Proposed EV dispositions

| EV | Proposed status | Basis |
|---|---|---|
| EV-03 | `CLOSED` | exact test project is positively identified, non-production, ACTIVE_HEALTHY and database-accessible |
| EV-04 | `CLOSED` | 24/24 canonical versions present; 0 missing/extra/unexpected versions; four historical exceptions accounted; one known name divergence recorded |
| EV-05 | `CLOSED` | current object/RLS/policy/grant/schema/function/authority baseline collected read-only |

Mission Control owns formal closure.

## 9. Remaining blockers outside this work package

This mission does not change:

- EV-01 CI / Stage 15 assurance;
- EV-02 test-bound application runtime-verification environment;
- EV-06 clean replay execution;
- EV-09 unresolved record classes;
- EV-12/13 future implementation proof;
- EV-15/16 rehearsal and lock/contention evidence;
- EV-18 backup/PITR;
- EV-19/20 runtime guard/concurrency proof;
- EV-21 G-7 partial evidence;
- EV-22 identity-deletion runtime authorization;
- EV-28 builder appointment / final Implementation Authorization.

## 10. Exact no-mutation confirmation

Provider mutation performed:

- only the explicitly authorized restore/reactivation of the existing test project `drravyyauixltoihzmwo`.

After that reactivation:

- no migration apply/push/repair;
- no DDL;
- no DML;
- no schema change;
- no backfill or cleanup;
- no role, grant or default-privilege change;
- no RLS or policy change;
- no function create/replace/drop;
- no Auth-user creation/deletion;
- no storage mutation;
- no fixture write;
- no runtime product-data write;
- no application deployment;
- no production action.

No implementation and no migration authoring or execution occurred.

**TEST ENVIRONMENT REACTIVATION AND BASELINE EVIDENCE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
