# SMART BUSINESS MISSION CONTROL — TEST ENVIRONMENT REACTIVATION / BASELINE HANDOVER

**Mission:** SB-P-1.12 — Test Environment Reactivation and Baseline Evidence  
**Work package:** `SB-P-1.12-WP-TEST-ENVIRONMENT-REACTIVATION-AND-BASELINE-EVIDENCE`  
**Instruction:** `communication/live/instruction1.38.md`  
**Canonical baseline:** `main@fbb29cc49dc96e5c294e544d55a0e949af9b97fd`  
**Detailed report:** `communication/missions/SB-P-1.12/specialists/10-stage13-test-environment-reactivation-and-baseline-evidence.md`  
**SB-MIG-1.4:** NON-EXECUTABLE  
**Implementation Authorization:** WITHHELD

## Provider action

Exact authorized test project before action:

- ref: `drravyyauixltoihzmwo`
- name: `smart-business-test`
- organization: `himkzepyuyaejqjieugk`
- region: `ap-south-1`
- classification: non-production test
- status: `INACTIVE`

Only the existing-project restore/reactivation operation was invoked for that exact ref.

Provider result:

`success=true`

Observed state transition:

`INACTIVE -> COMING_UP -> ACTIVE_HEALTHY`

No purchase, plan upgrade, new-resource cost, billing confirmation, organization mismatch or target ambiguity appeared.

No project or branch was created.

## Post-action identity

After reactivation, the exact project remained:

- ref `drravyyauixltoihzmwo`
- name `smart-business-test`
- organization `himkzepyuyaejqjieugk`
- region `ap-south-1`
- status `ACTIVE_HEALTHY`
- PostgreSQL 17 / observed provider version metadata `17.6.1.147`

Read-only database access succeeded.

Exact DB evidence timestamp:

`2026-10-01 15:27:49.209004+00`

## Proposed EV status

| EV | Proposed status |
|---|---|
| EV-03 | `CLOSED` |
| EV-04 | `CLOSED` |
| EV-05 | `CLOSED` |

Mission Control owns formal closure.

## EV-03

The approved historical test target is now positively identified, non-production, `ACTIVE_HEALTHY`, and database-accessible.

## EV-04

Remote test migration ledger:

- 24 versions present;
- 24 canonical repository migration versions;
- missing: 0;
- extra: 0;
- unexpected: 0.

Four historical repair/replay exceptions are present and accounted for without re-execution:

- `20260719140000`;
- `20260723200718`;
- `20260723200952`;
- `20260902140000`.

One known metadata-name divergence remains:

- version `20260808120000`;
- canonical: `sb_p_1_11_rr_2_category_select_grant`;
- remote test ledger: `sb_p_1_11_rr_2_grant_remediation`.

No migration repair was performed.

## EV-05

Current test baseline was captured read-only.

Key observations:

- 21 relevant public application tables;
- RLS enabled on all 21;
- current policies remain pre-SB-P-1.12 Owner-only / executor scoped;
- future SB-P-1.12 structures `authz`, `persons`, `business_memberships`, `confirmation_bindings`, and `authority_events` are absent as expected;
- legacy anon table privileges remain on `businesses`, `transactions`, and `transaction_correction_events`;
- Inventory anon hardening is present;
- 19 Catalog functions are dedicated-owner `SECURITY DEFINER` functions with empty search path and no anon EXECUTE;
- 9 parser-support functions are `SECURITY DEFINER`, owner `postgres`, empty search path, service-role-only among application roles;
- `correct_transaction` is `SECURITY INVOKER`, owner `postgres`, `search_path=public`, with effective anon/authenticated/service_role EXECUTE;
- `postgres` public-schema default ACL no longer grants anon table/function defaults;
- `supabase_admin` public-schema default ACL still broadly grants anon/authenticated/service_role access;
- no unplanned SB-P-1.12 schema state was found.

Detailed grants, schema privileges, function signatures, owners, security modes, search paths and effective EXECUTE are recorded in the specialist report.

## Drift / blocker

No migration-version drift was found.

Known expected metadata drift remains at `20260808120000`.

Known security debt remains baseline state and was not repaired:

- legacy anonymous grants;
- anonymous `correct_transaction` EXECUTE;
- parser definer ownership by `postgres`;
- broad `supabase_admin` defaults.

These remain future migration/hardening concerns only.

## No-mutation confirmation

The only provider mutation was the explicitly authorized reactivation of the exact existing test project.

After reactivation there was:

- no migration apply/push/repair;
- no DDL or DML;
- no schema/data mutation;
- no backfill/cleanup;
- no grant/default-privilege/RLS/policy/function change;
- no Auth or storage mutation;
- no fixture/runtime product-data write;
- no application deployment;
- no production action.

No implementation. No migration authoring or execution.

**TEST ENVIRONMENT REACTIVATION AND BASELINE EVIDENCE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
