# SB-P-1.11 Production Post-Migration Verification Checklist

**Mission:** SB-P-1.11-PROD-PREP-1 — Production Migration Runbook and Preflight
**Status:** `PREPARED — NOT EXECUTABLE ON ITS OWN — USE ONLY DURING AN AUTHORIZED PRODUCTION EXECUTION MISSION`

> **Lifecycle continuity note (added 2026-09-03, `SB-DOC-1.10-1.11-CONTINUITY-1.0`).** This checklist's companion migration (`docs/operations/SB-P-1.11-production-migration-runbook.md`) was subsequently executed against production; see that document's own continuity note and `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`. Whether this specific checklist's rows were filled in with observed values during that execution is not established by this audit; the checklist's expected structural/security state was independently reconfirmed by later SB-P-1.11 Stage 19 verification and the GC-40 evidence package regardless.
**Use:** Run in full immediately after `docs/operations/SB-P-1.11-production-migration-runbook.md` Section 6 completes, before Section 15 sign-off. Every check is **read-only**. All queries target project `gysgzasfcjvtrgaigfyn` only — reconfirm via `docs/operations/SB-P-1.11-production-migration-runbook.md` Section 3 before running any query here if any time has passed since Section 6.

Mark each row ☐ / ☑ with the observed value, not just pass/fail — a checklist entry without the actual observed number is not acceptable evidence for Section 15 sign-off.

---

## 1. Structural Verification

| # | Check | Expected | Observed |
|---|---|---|---|
| 1.1 | `SELECT count(*) FROM pg_tables WHERE schemaname='public' AND tablename IN ('catalog_products','catalog_categories','catalog_selling_price_events','catalog_tax_events','business_tax_settings','catalog_reference_cost_events','catalog_link_preview_tokens','catalog_product_link_events','catalog_audit_events','catalog_deletion_records','catalog_write_idempotency_keys') AND tableowner='postgres'` | `11` | ☐ |
| 1.2 | `SELECT count(*) FROM pg_roles WHERE rolname IN ('catalog_identity_executor','catalog_lifecycle_executor','catalog_pricing_executor','catalog_tax_executor','catalog_cost_executor','catalog_link_executor','catalog_read_executor') AND rolcanlogin=false AND rolbypassrls=false` | `7` | ☐ |
| 1.3 | `SELECT count(*) FROM pg_auth_members am JOIN pg_roles m ON m.oid=am.member JOIN pg_roles r ON r.oid=am.roleid WHERE m.rolname LIKE 'catalog_%executor' AND r.rolname='service_role'` | `0` | ☐ |
| 1.4 | `SELECT count(*) FROM pg_tables WHERE tableowner IN ('catalog_identity_executor','catalog_lifecycle_executor','catalog_pricing_executor','catalog_tax_executor','catalog_cost_executor','catalog_link_executor','catalog_read_executor')` | `0` | ☐ |
| 1.5 | `SELECT count(*) FROM pg_class c JOIN pg_namespace n ON n.oid=c.relnamespace WHERE n.nspname='public' AND c.relname IN (<11 table names>) AND c.relrowsecurity=true` | `11` | ☐ |
| 1.6 | `SELECT count(*) FROM information_schema.role_column_grants WHERE grantee='authenticated' AND table_schema='public' AND table_name IN (<11 table names>)` | `4` (all on `catalog_categories`: `id`,`business_id`,`name`,`status`) | ☐ |
| 1.7 | `SELECT count(*) FROM information_schema.role_table_grants WHERE grantee='authenticated' AND table_schema='public' AND table_name IN (<10 tables excluding catalog_categories>)` | `0` | ☐ |
| 1.8 | `SELECT count(*) FROM information_schema.role_table_grants WHERE grantee='anon' AND table_schema='public' AND table_name IN (<11 table names>)` | `0` | ☐ |
| 1.9 | `SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace JOIN aclexplode(p.proacl) a ON true JOIN pg_roles r ON r.oid=a.grantee WHERE n.nspname='catalog_internal' AND r.rolname IN ('PUBLIC','anon') AND a.privilege_type='EXECUTE'` | `0` | ☐ |
| 1.10 | `SELECT count(*) FROM pg_namespace n JOIN aclexplode(n.nspacl) a ON true JOIN pg_roles r ON r.oid=a.grantee WHERE n.nspname='catalog_internal' AND r.rolname IN ('anon','authenticated')` | `0` | ☐ |
| 1.11 | Dashboard: `Settings → API → Exposed schemas` does not list `catalog_internal` | not listed | ☐ |
| 1.12 | `SELECT count(*) FROM (SELECT table_name FROM information_schema.role_table_grants WHERE grantee='service_role' AND table_schema='public' AND table_name IN (<11 table names>) GROUP BY table_name) t` | `11` | ☐ |
| 1.13 | `SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace JOIN pg_roles r ON r.oid=p.proowner WHERE n.nspname='public' AND r.rolname LIKE 'catalog_%_executor' AND p.proname IN (<19 function names>)` | `19` | ☐ |
| 1.14 | Exact per-group ownership: 1–5 owned by `catalog_identity_executor`; 6–8 by `catalog_lifecycle_executor`; 9 by `catalog_pricing_executor`; 10–11 by `catalog_tax_executor`; 12 by `catalog_cost_executor`; 13–15 by `catalog_link_executor`; 16–19 by `catalog_read_executor` (see `report1.37.md` §8 for the full 19-function list) | exact match | ☐ |

---

## 2. Security Verification

| # | Check | Expected | Observed |
|---|---|---|---|
| 2.1 | `SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace JOIN aclexplode(p.proacl) a ON true JOIN pg_roles r ON r.oid=a.grantee WHERE n.nspname='public' AND r.rolname IN ('PUBLIC','anon') AND a.privilege_type='EXECUTE' AND p.proname IN (<19 function names>)` | `0` | ☐ |
| 2.2 | `SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace JOIN aclexplode(p.proacl) a ON true JOIN pg_roles r ON r.oid=a.grantee WHERE n.nspname='public' AND r.rolname='authenticated' AND a.privilege_type='EXECUTE' AND p.proname IN (<19 function names>)` | `19` | ☐ |
| 2.3 | **Command 9 correction** — `SELECT has_column_privilege('catalog_pricing_executor', 'public.catalog_products', 'current_selling_price', 'UPDATE')` | `true` | ☐ |
| 2.4 | **Command 9 correction** — `SELECT has_table_privilege('catalog_pricing_executor', 'public.catalog_products', 'UPDATE')` (whole-table, must be false — confirms the grant is still column-restricted, not accidentally widened) | `false` | ☐ |
| 2.5 | **Command 9 correction** — `SELECT count(*) FROM pg_policies WHERE tablename='catalog_products' AND policyname='pricing_executor_update_own_business'` | `1` | ☐ |
| 2.6 | `SELECT count(*) FROM information_schema.role_table_grants WHERE grantee IN ('authenticated','anon') AND table_schema='public' AND table_name='catalog_reference_cost_events'` | `0` | ☐ |
| 2.7 | `SELECT count(*) FROM pg_auth_members am JOIN pg_roles m ON m.oid=am.member JOIN pg_roles g ON g.oid=am.grantor WHERE m.rolname='postgres' AND am.roleid IN (SELECT oid FROM pg_roles WHERE rolname LIKE 'catalog_%executor') AND g.rolname <> 'supabase_admin'` | `0` (any `postgres` membership must be attributable only to the known platform `CREATEROLE` auto-grant, not a separately introduced one) | ☐ |
| 2.8 | `SELECT rolbypassrls FROM pg_roles WHERE rolname='service_role'` (confirms platform boundary unchanged, not that this mission touched it) | `true` | ☐ |
| 2.9 | Repository check (not SQL): confirm no service-role key or admin client is referenced anywhere reachable from client-shipped code as of this commit — `git grep -n "SERVICE_ROLE" -- '*.ts' '*.tsx'` and manually confirm every match is server-only | no client-reachable match | ☐ |

---

## 3. Owner-Only / RLS Spot Confirmation (structural proxy only — see runbook Section 10 for why no live write test is performed)

| # | Check | Expected | Observed |
|---|---|---|---|
| 3.1 | `SELECT policyname, cmd, roles::text FROM pg_policies WHERE tablename='catalog_products' ORDER BY policyname` | 7 executor-scoped policies, each `USING`/`WITH CHECK` referencing `catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid())` | ☐ |
| 3.2 | `SELECT policyname, cmd, roles::text FROM pg_policies WHERE tablename='businesses' AND policyname='catalog_executors_select_own_business'` | 1 policy, `FOR SELECT`, all 7 executor roles | ☐ |
| 3.3 | `SELECT policyname, cmd, roles::text FROM pg_policies WHERE tablename='inventory_items' AND policyname='catalog_link_executor_select_own_business'` | 1 policy, `FOR SELECT`, `catalog_link_executor` only | ☐ |
| 3.4 | `SELECT policyname, cmd, roles::text FROM pg_policies WHERE tablename='inventory_movements' AND policyname='catalog_link_executor_select_own_business'` | 1 policy, `FOR SELECT`, `catalog_link_executor` only | ☐ |
| 3.5 | Every function's `prosecdef` (SECURITY DEFINER) — `SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace WHERE n.nspname='public' AND p.proname IN (<19 function names>) AND p.prosecdef=true` | `19` | ☐ |
| 3.6 | Every function's `search_path` set empty — `SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace WHERE n.nspname='public' AND p.proname IN (<19 function names>) AND EXISTS (SELECT 1 FROM unnest(p.proconfig) c WHERE c = 'search_path=')` | `19` | ☐ |

---

## 4. Idempotency and Immutability Structure

| # | Check | Expected | Observed |
|---|---|---|---|
| 4.1 | `SELECT count(*) FROM pg_trigger t JOIN pg_class c ON c.oid=t.tgrelid WHERE c.relname='catalog_write_idempotency_keys' AND NOT t.tgisinternal` | `2` (`_no_update`, `_no_delete`, both firing `catalog_event_provenance_guard()`) | ☐ |
| 4.2 | `SELECT count(*) FROM pg_policies WHERE tablename='catalog_write_idempotency_keys' AND cmd='UPDATE'` | `0` | ☐ |
| 4.3 | `SELECT count(*) FROM pg_policies WHERE tablename='catalog_write_idempotency_keys' AND cmd='DELETE'` | `0` | ☐ |
| 4.4 | `SELECT count(*) FROM pg_policies WHERE tablename='catalog_write_idempotency_keys' AND cmd='SELECT'` | `7` (one per executor) | ☐ |
| 4.5 | `SELECT count(*) FROM pg_policies WHERE tablename='catalog_write_idempotency_keys' AND cmd='INSERT'` | `6` (the six write executors; `catalog_read_executor` excluded) | ☐ |

---

## 5. Advisor Comparison

| # | Check | Expected | Observed |
|---|---|---|---|
| 5.1 | Security advisors (`type=security`) | Zero findings, matching the `report1.47.md` pre-migration baseline (production had zero security findings before migration; the migration must not introduce any) | ☐ |
| 5.2 | Performance advisors — new findings beyond the `report1.47.md` baseline | Only: up to 19 `authenticated_security_definer_function_executable` (one per new RPC, by design); up to 1 `auth_rls_initplan` on the new `catalog_categories` direct policy (matches the existing unfixed pattern on the six pre-existing tables) | ☐ |
| 5.3 | Any advisor finding not explained by 5.2 | none present | ☐ |

---

## 6. Final Object Count Sanity (defense in depth against partial application)

| # | Check | Expected | Observed |
|---|---|---|---|
| 6.1 | Total Phase 1 catalog tables | exactly `11`, never `12` | ☐ |
| 6.2 | Total public catalog command functions | exactly `19`, never `20` | ☐ |
| 6.3 | Total executor roles | exactly `7`, never `8` | ☐ |
| 6.4 | `supabase_migrations.schema_migrations` contains both `20260806120000` and `20260806130000` | both present | ☐ |
| 6.5 | Pre-existing 12 migrations still all present, unchanged | all 12 present | ☐ |

---

## Acceptance

This checklist is complete and accepted only when every row above is checked with an **observed value recorded**, not merely a checkmark, and Section 5 shows no unexplained finding. Attach the completed checklist (with observed values) to the execution mission's closure evidence per `docs/operations/SB-P-1.11-production-migration-runbook.md` Section 14.
