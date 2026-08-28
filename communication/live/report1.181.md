# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-39 — PRODUCTION MIGRATION READINESS & EXECUTION PACKAGE REVIEW

**Report ID:** `report1.181`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-39 — Production Migration Readiness & Execution Package Review`  
**Sender:** Mission Control  
**Recipient:** Founder / Claude Engineering / Infrastructure Operations  
**In Reply To:** `communication/live/instruction1.187.md`  
**Date:** 2026-08-28  
**Status:** REPORT ONLY — PENDING HUMAN MERGE

---

## 1. Purpose and Authority Boundary

This report records the read-only production/test migration-readiness review authorized by `instruction1.187.md`.

No production SQL write, migration application, data mutation, role mutation, configuration mutation, AWS/Cloudflare/Lovable change, bulk-import enablement, or lifecycle progression was performed.

Stage 21 remains unauthorized.

---

## 2. Exact Repository Baseline Reviewed

Repository:

`SmartBusinessv1/smart-business`

Exact `main` SHA reviewed:

`d909a330b84837fd78ceab681185c966e5d883bf`

This is the human-merged commit for PR #408, `Authorize SB-P-1.11 GC-39 production migration readiness review`.

The immediately preceding governance closure on `main` is PR #407 / merge commit:

`cc6c87e8f64133c70d246b60f787fb9248c9866b`

which records `GC-38R POST-C5 CLEANUP — PASS`.

No later `main` commit existed at review start.

---

## 3. Environment Identities Verified

### Production

- Project name: `smart-business`
- Project ref: `gysgzasfcjvtrgaigfyn`
- Region: `ap-south-1`
- Status at review: `ACTIVE_HEALTHY`
- PostgreSQL major version: 17

### Test

- Project name: `smart-business-test`
- Project ref: `drravyyauixltoihzmwo`
- Region: `ap-south-1`
- Status at review: `ACTIVE_HEALTHY`
- PostgreSQL major version: 17

Only read-only metadata and `SELECT` queries were used.

---

## 4. Exact Relevant Migration State

### Production — applied through SB-P-1.11 baseline

Production currently contains the SB-P-1.11 migrations through:

- `20260806120000` — `sb_p_1_11_impl_1_stage1_schema`
- `20260806130000` — `sb_p_1_11_impl_1_stage2_functions`
- `20260808120000` — recorded remotely as `sb_p_1_11_rr_2_category_select_grant`
- `20260808140000` — `sb_p_1_11_rr_3_tax_lifecycle_rls_remediation`

The remote name at version `20260808120000` differs from the test project's recorded name, but the version is present in both environments. This is historical migration-name metadata divergence, not a missing-version condition for GC-39.

Production has none of the four candidate GC-39 migrations below.

### Test — applied through current GC-38R correction

Test contains all four candidate migrations:

1. `20260810120000` — `sb_p_1_11_gc_1_catalog_import_support_schema`
2. `20260811090000` — `sb_p_1_11_gc_1_security_correction`
3. `20260819120000` — `sb_p_1_11_gc_38r_parser_support_schema`
4. `20260826120000` — `sb_p_1_11_gc_38r_parser_guard_ambiguity_fix`

### Exact missing-production set

Production is therefore exactly four relevant migrations behind test:

1. `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
2. `20260811090000_sb_p_1_11_gc_1_security_correction.sql`
3. `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`
4. `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

Read-only production object checks confirmed that the following objects are currently absent:

- `public.catalog_import_batches`
- `public.catalog_import_rows`
- `public.parser_preview_guards`
- `public.parser_upload_leases`
- `public.acquire_parser_preview_guard(uuid)`
- `public.issue_parser_upload_lease(uuid,uuid,text,integer,text,text,uuid)`

The same read-only checks confirmed those objects are present in test.

---

## 5. Locked Catalog Boundary Verification

A read-only exact-name count was executed against both projects for the nineteen locked public Catalog commands.

Result:

- Production: `19`
- Test: `19`

GC-39 found no evidence of a twentieth Catalog Product Truth command.

The four candidate migrations do not add a twentieth Catalog command. The parser-support functions are support-state lifecycle helpers and are not Catalog Product Truth commands.

Inventory remains the sole stock authority. None of the candidate migrations introduces direct Inventory stock mutation or changes Opening Stock semantics.

---

## 6. Migration-by-Migration Disposition

### 6.1 `20260810120000` — Catalog import support schema

**Required for production:** YES  
**Risk:** MEDIUM

Purpose:

- creates `catalog_import_batches` and `catalog_import_rows`;
- establishes business-bound foreign keys, indexes, constraints, RLS, and narrow grants;
- stores import bookkeeping only, not Catalog Product Truth;
- keeps Product Truth writes behind the existing Catalog command boundary.

Dependency:

- depends on existing `businesses` and `catalog_products` structures already present in production;
- must precede `20260811090000` because that correction alters `catalog_import_rows` and extends `delete_catalog_product` to inspect it.

Important operational characteristic:

The initial migration deliberately leaves imported/matched product references as blocking foreign keys. The next migration is therefore part of the required production package, not optional follow-up.

### 6.2 `20260811090000` — GC-1 security correction

**Required for production:** YES  
**Risk:** MEDIUM-HIGH

Purpose:

- adds durable `follow_up_state` to import rows;
- corrects the resolution-evidence constraint for durable retry state;
- grants the lifecycle executor narrow SELECT access to import rows;
- extends `delete_catalog_product` so import history produces governed `DEPENDENT_HISTORY_CONFLICT` rather than a raw FK error;
- preserves the existing command signature and the nineteen-command boundary.

Dependency:

- requires `20260810120000` first.

Operational sensitivity:

- performs `CREATE OR REPLACE FUNCTION` on the existing `delete_catalog_product` command;
- temporarily grants `catalog_lifecycle_executor` membership to `postgres` solely to replace the function and revokes that membership in the same migration;
- requires immediate postflight ownership/grant/signature verification.

### 6.3 `20260819120000` — GC-38R parser support schema

**Required for production-equivalent parser support:** YES  
**Risk:** HIGH

Purpose:

- creates `parser_preview_guards` and `parser_upload_leases`;
- installs the lease six-state lifecycle and EC-2 shared business guard;
- installs nine narrow `SECURITY DEFINER` support helpers;
- narrows browser and `service_role` privilege surfaces according to the locked parser EIS;
- stores transport/lifecycle support state only, never Catalog/Inventory Product Truth.

Dependency:

- depends on existing `businesses`;
- does not semantically require the two GC-1 import tables, but should be applied after them to preserve canonical migration order and to keep production history identical to the validated test sequence.

Security sensitivity:

- privilege and `SECURITY DEFINER` posture is part of the safety boundary;
- production execution must stop if effective grants differ from the locked expected state after application.

### 6.4 `20260826120000` — Parser guard ambiguity fix

**Required for production:** YES, whenever `20260819120000` is applied  
**Risk:** LOW-MEDIUM

Purpose:

- forward-corrects PostgreSQL `42702` ambiguity in exactly two parser-support functions;
- adds `#variable_conflict use_column` to `acquire_parser_preview_guard` and `issue_parser_upload_lease`;
- changes no table, RLS policy, index, constraint, function signature, or Product Truth boundary.

Dependency:

- requires `20260819120000` first because it replaces functions created by that migration.

This migration is not test-only. It is a required forward correction for any environment receiving the parser-support schema.

---

## 7. Recommended Production Package and Exact Order

GC-39 recommends applying all four migrations, unchanged and in canonical chronological order, only under a later explicit production execution authorization:

1. `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
2. `20260811090000_sb_p_1_11_gc_1_security_correction.sql`
3. `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`
4. `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

No candidate migration is recommended for exclusion, folding, rewriting, or squashing.

Reason: test has validated the historical forward-migration sequence, including the later corrective migrations. Rewriting history would create a production-only migration path that was not the path actually validated.

---

## 8. Pre-Migration Human Checkpoints

Before any later production execution, all of the following must be true:

1. A new, explicit Mission Control production migration authorization has been human-merged.
2. Production project identity is re-verified as `gysgzasfcjvtrgaigfyn` immediately before execution.
3. Test project remains migration-current and no newer corrective migration has appeared on `main`.
4. `main` is unchanged in any migration-relevant way from the separately authorized execution baseline, or drift has been reviewed and accepted.
5. Production still shows exactly the four migrations above as missing; if the missing set changes, STOP.
6. Production still exposes exactly nineteen locked Catalog commands before execution; otherwise STOP.
7. A recoverable production backup / PITR checkpoint appropriate to the Supabase plan is confirmed immediately before the migration window. If recoverability cannot be confirmed, STOP.
8. No bulk-import production traffic is enabled during the migration window.
9. The operator has the exact postflight queries ready before the first migration is applied.
10. The operator has authority to stop after any migration and must not continue merely to complete the sequence after a failed checkpoint.

---

## 9. Exact Read-Only Preflight SQL

The following SQL is suitable for the later authorized production window as read-only preflight evidence.

```sql
-- A. Confirm the four versions are still absent from production.
select version, name
from supabase_migrations.schema_migrations
where version in (
  '20260810120000',
  '20260811090000',
  '20260819120000',
  '20260826120000'
)
order by version;

-- Expected before execution: zero rows.

-- B. Confirm target objects are still absent before first migration.
select
  to_regclass('public.catalog_import_batches') as catalog_import_batches,
  to_regclass('public.catalog_import_rows') as catalog_import_rows,
  to_regclass('public.parser_preview_guards') as parser_preview_guards,
  to_regclass('public.parser_upload_leases') as parser_upload_leases,
  to_regprocedure('public.acquire_parser_preview_guard(uuid)') as acquire_parser_preview_guard,
  to_regprocedure('public.issue_parser_upload_lease(uuid,uuid,text,integer,text,text,uuid)') as issue_parser_upload_lease;

-- Expected before execution: all NULL.

-- C. Confirm the locked nineteen-command surface is intact.
with command_names(name) as (values
 ('create_catalog_product'),
 ('update_catalog_product_identity'),
 ('update_catalog_product_unit'),
 ('create_catalog_category'),
 ('archive_catalog_category'),
 ('archive_catalog_product'),
 ('reactivate_catalog_product'),
 ('delete_catalog_product'),
 ('record_catalog_selling_price_change'),
 ('record_catalog_tax_change'),
 ('update_business_tax_settings'),
 ('record_catalog_reference_cost_change'),
 ('preview_catalog_inventory_link_change'),
 ('assign_or_replace_catalog_inventory_link'),
 ('remove_catalog_inventory_link'),
 ('get_catalog_command_outcome'),
 ('catalog_products_search'),
 ('catalog_product_read'),
 ('catalog_products_list_batch')
)
select count(*) as present_command_count
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
join command_names c on c.name = p.proname
where n.nspname = 'public';

-- Expected: 19.
```

Any unexpected row/object/count is a STOP condition requiring Mission Control review.

---

## 10. Post-Migration Verification SQL

After the later separately authorized package is applied, run the following read-only checks before any production feature enablement.

```sql
-- A. Confirm all four versions are recorded.
select version, name
from supabase_migrations.schema_migrations
where version in (
  '20260810120000',
  '20260811090000',
  '20260819120000',
  '20260826120000'
)
order by version;

-- Expected: exactly four rows in the required order by version.

-- B. Confirm required objects now exist.
select
  to_regclass('public.catalog_import_batches') as catalog_import_batches,
  to_regclass('public.catalog_import_rows') as catalog_import_rows,
  to_regclass('public.parser_preview_guards') as parser_preview_guards,
  to_regclass('public.parser_upload_leases') as parser_upload_leases,
  to_regprocedure('public.acquire_parser_preview_guard(uuid)') as acquire_parser_preview_guard,
  to_regprocedure('public.issue_parser_upload_lease(uuid,uuid,text,integer,text,text,uuid)') as issue_parser_upload_lease;

-- Expected: all six non-NULL.

-- C. Confirm RLS is enabled on all four new support/bookkeeping tables.
select n.nspname as schema_name, c.relname as table_name, c.relrowsecurity
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in (
    'catalog_import_batches',
    'catalog_import_rows',
    'parser_preview_guards',
    'parser_upload_leases'
  )
order by c.relname;

-- Expected: four rows, relrowsecurity = true for each.

-- D. Confirm browser-role table privileges remain narrow.
select grantee, table_name, privilege_type
from information_schema.role_table_grants
where table_schema = 'public'
  and table_name in (
    'catalog_import_batches',
    'catalog_import_rows',
    'parser_preview_guards',
    'parser_upload_leases'
  )
  and grantee in ('anon', 'authenticated', 'service_role')
order by table_name, grantee, privilege_type;

-- Required interpretation:
-- * anon: no privilege on any of the four tables.
-- * authenticated: SELECT only on catalog_import_batches/catalog_import_rows;
--   no direct parser-support table privilege.
-- * parser_upload_leases service_role direct privilege must match the locked
--   narrowed contract; no broad direct mutation privilege may survive.

-- E. Confirm the corrected parser functions contain the ambiguity directive.
select p.proname, pg_get_functiondef(p.oid) as function_definition
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in ('acquire_parser_preview_guard', 'issue_parser_upload_lease')
order by p.proname;

-- Expected: both definitions include '#variable_conflict use_column'.

-- F. Reconfirm nineteen Catalog commands after the package.
with command_names(name) as (values
 ('create_catalog_product'),
 ('update_catalog_product_identity'),
 ('update_catalog_product_unit'),
 ('create_catalog_category'),
 ('archive_catalog_category'),
 ('archive_catalog_product'),
 ('reactivate_catalog_product'),
 ('delete_catalog_product'),
 ('record_catalog_selling_price_change'),
 ('record_catalog_tax_change'),
 ('update_business_tax_settings'),
 ('record_catalog_reference_cost_change'),
 ('preview_catalog_inventory_link_change'),
 ('assign_or_replace_catalog_inventory_link'),
 ('remove_catalog_inventory_link'),
 ('get_catalog_command_outcome'),
 ('catalog_products_search'),
 ('catalog_product_read'),
 ('catalog_products_list_batch')
)
select count(*) as present_command_count
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
join command_names c on c.name = p.proname
where n.nspname = 'public';

-- Expected: 19.
```

A later production authorization should also include direct function-ownership, `SECURITY DEFINER`, EXECUTE-grant, policy-count, constraint, and index comparisons against test before feature enablement.

---

## 11. Backup / Recovery / Forward-Fix Posture

### Package-level posture

Preferred recovery strategy is **STOP + forward-fix**, not ad-hoc down migration.

Reason:

- migrations introduce security-sensitive tables, grants, constraints, and functions;
- destructive rollback could erase import/parser support evidence or create a production-only state not exercised in test;
- `20260811090000` and `20260826120000` are explicit forward corrective migrations and should remain historically intact.

### Required recoverability checkpoint

Before production execution, the operator must verify a usable Supabase backup/PITR recovery point for the production project and record the checkpoint evidence in the execution report. GC-39 does not change or test backup configuration.

### Per-migration recovery guidance

| Migration | Primary recovery posture |
|---|---|
| `20260810120000` | STOP on failure; do not manually drop partially-created objects unless a separately reviewed recovery plan requires it. Prefer platform transaction rollback where applicable, otherwise forward-fix after exact state inspection. |
| `20260811090000` | STOP immediately if function replacement, constraint update, role membership cleanup, RLS, or grants are unexpected. Verify `catalog_lifecycle_executor`/`postgres` membership returns to intended post-migration state before continuing. |
| `20260819120000` | STOP on any table/helper/grant/RLS mismatch. Do not enable production parser traffic. Forward-fix from exact observed ACL/schema state. |
| `20260826120000` | STOP if either target function is missing or signature differs. Do not invent an alternate fix during the production window. |

No production bulk-import or parser feature should be enabled until every postflight check passes.

---

## 12. Risk and Stop-Condition Matrix

| Area | Risk | Required STOP condition |
|---|---|---|
| Migration-set identity | Medium | Production missing set differs from the exact four reviewed migrations. |
| Catalog import schema | Medium | Existing unexpected import table/object found before migration; FK/constraint application differs from test. |
| `delete_catalog_product` correction | Medium-High | Function signature/ownership/grants differ, replacement fails, or temporary role membership is not restored. |
| Parser support schema | High | Any unexpected browser/service-role direct privilege, missing RLS, helper mismatch, or support-state contract drift. |
| Parser ambiguity correction | Low-Medium | Target functions/signatures do not match reviewed baseline. |
| Catalog Product Truth boundary | High | Catalog command count becomes anything other than 19. |
| Environment identity | Critical | Project ref is not exactly `gysgzasfcjvtrgaigfyn`. |
| Recoverability | High | No confirmed usable backup/PITR checkpoint for the migration window. |
| Repository drift | High | New migration/security correction lands after the authorized execution baseline without review. |
| Runtime activation | High | Any attempt is made to enable production bulk import before schema/security postflight passes. |

Overall production package risk classification: **HIGH but bounded and execution-ready under a separate, explicit production authorization with checkpoints**.

The HIGH classification reflects security-sensitive privilege/function changes and production irreversibility, not an identified defect in the package.

---

## 13. Recommended Later Execution Sequence

A later production authorization should direct the operator to proceed one checkpoint at a time:

1. Re-verify exact production project identity.
2. Confirm backup/PITR recoverability checkpoint.
3. Run preflight SQL and compare migration state against this report.
4. Apply `20260810120000`; verify its objects/RLS/grants/constraints.
5. Human checkpoint: continue only if PASS.
6. Apply `20260811090000`; verify constraint, function, executor access, and role cleanup.
7. Human checkpoint: continue only if PASS.
8. Apply `20260819120000`; verify parser tables, RLS, helper surface, and effective ACLs.
9. Human checkpoint: continue only if PASS.
10. Apply `20260826120000`; verify both corrected function bodies/signatures.
11. Run full postflight SQL and nineteen-command check.
12. Record exact production migration state and security evidence.
13. Do not enable bulk import yet unless a separate activation/deployment authority explicitly says to do so.

Each human checkpoint is a real stop point. Failure at step N does not authorize automatically attempting step N+1.

---

## 14. Migrations Deliberately Excluded

None of the four reviewed candidate migrations is excluded.

No other migration is added to the GC-39 recommended package.

GC-39 does not authorize any migration created after the reviewed `main` baseline. Any newer migration must receive separate review before entering a production package.

---

## 15. Product and Security Boundary Confirmation

GC-39 confirms from repository inspection and read-only environment checks:

- exactly nineteen public Catalog commands remain the locked Product Truth boundary;
- parser support state remains non-Product-Truth infrastructure;
- the import bookkeeping tables do not become Catalog Product Truth;
- Product Truth writes remain behind existing governed command paths;
- Inventory remains sole stock authority;
- Opening Stock semantics are not changed;
- Phase 1 import authority is not expanded to Manager/Employee roles by these migrations;
- no twentieth Catalog command is introduced;
- no production mutation occurred during this review.

---

## 16. Final Disposition

`GC-39 PRODUCTION MIGRATION PACKAGE — READY FOR SEPARATE PRODUCTION AUTHORIZATION`

Mission Control may now consider issuing a new, narrowly bounded production migration execution authorization for the exact four-migration package and sequence in this report.

This report itself does **not** authorize execution.

Stage 21 remains unauthorized.

Human merge of this report is required before Mission Control relies on it as the repository-recorded GC-39 completion state.
