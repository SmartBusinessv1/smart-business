-- SB-P-1.11-IMPL-1 — Stage 1 privilege-inspection queries.
--
-- Read-only verification only. Not a migration; nothing here is applied
-- automatically. Prepared under Mission Control's Stage 1 acceptance
-- ("You may prepare... SQL verification scripts; privilege-inspection
-- queries"). Intended to run against the dedicated non-production test
-- project (drravyyauixltoihzmwo) once Mission Control separately
-- authorizes reactivating it for SB-P-1.11 verification (Stage 3). Do not
-- run against production.
--
-- Each query's "Expect" comment states the required passing result per
-- instruction1.40.md Stage 1 / Mission Control's Default-Privilege
-- Handling directive.

-- 1. Table ownership — every catalog table must be owned by postgres.
-- Expect: 11 rows, all with tableowner = 'postgres'.
SELECT schemaname, tablename, tableowner
  FROM pg_tables
 WHERE schemaname = 'public'
   AND tablename IN (
     'catalog_products','catalog_categories','catalog_selling_price_events',
     'catalog_tax_events','business_tax_settings','catalog_reference_cost_events',
     'catalog_link_preview_tokens','catalog_product_link_events','catalog_audit_events',
     'catalog_deletion_records','catalog_write_idempotency_keys'
   )
 ORDER BY tablename;

-- 2. Executor role hygiene — all seven must be NOLOGIN, must not BYPASSRLS,
-- must not be a member of service_role, and must own no table.
-- Expect: 7 rows; rolcanlogin = false, rolbypassrls = false for every row.
SELECT rolname, rolcanlogin, rolbypassrls, rolinherit
  FROM pg_roles
 WHERE rolname IN (
   'catalog_identity_executor','catalog_lifecycle_executor','catalog_pricing_executor',
   'catalog_tax_executor','catalog_cost_executor','catalog_link_executor','catalog_read_executor'
 )
 ORDER BY rolname;

-- Expect: 0 rows (no executor is a member of service_role).
SELECT m.rolname AS executor, r.rolname AS member_of
  FROM pg_auth_members am
  JOIN pg_roles m ON m.oid = am.member
  JOIN pg_roles r ON r.oid = am.roleid
 WHERE m.rolname LIKE 'catalog_%executor'
   AND r.rolname = 'service_role';

-- Expect: 0 rows (no executor owns any table).
SELECT tablename, tableowner
  FROM pg_tables
 WHERE tableowner IN (
   'catalog_identity_executor','catalog_lifecycle_executor','catalog_pricing_executor',
   'catalog_tax_executor','catalog_cost_executor','catalog_link_executor','catalog_read_executor'
 );

-- 3. RLS enabled on every catalog table.
-- Expect: 11 rows, relrowsecurity = true for every row.
SELECT c.relname, c.relrowsecurity, c.relforcerowsecurity
  FROM pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
 WHERE n.nspname = 'public'
   AND c.relname IN (
     'catalog_products','catalog_categories','catalog_selling_price_events',
     'catalog_tax_events','business_tax_settings','catalog_reference_cost_events',
     'catalog_link_preview_tokens','catalog_product_link_events','catalog_audit_events',
     'catalog_deletion_records','catalog_write_idempotency_keys'
   )
 ORDER BY c.relname;

-- 4. Direct `authenticated` table privileges — must be empty except the one
-- approved catalog_categories column read.
-- Expect: exactly 4 rows, all table_name = 'catalog_categories',
-- privilege_type = 'SELECT', column_name IN ('id','business_id','name','status').
SELECT table_name, column_name, privilege_type
  FROM information_schema.role_column_grants
 WHERE grantee = 'authenticated'
   AND table_schema = 'public'
   AND table_name IN (
     'catalog_products','catalog_categories','catalog_selling_price_events',
     'catalog_tax_events','business_tax_settings','catalog_reference_cost_events',
     'catalog_link_preview_tokens','catalog_product_link_events','catalog_audit_events',
     'catalog_deletion_records','catalog_write_idempotency_keys'
   )
 ORDER BY table_name, column_name;

-- Expect: 0 rows (no whole-table authenticated grant on any of the eleven).
SELECT table_name, privilege_type
  FROM information_schema.role_table_grants
 WHERE grantee = 'authenticated'
   AND table_schema = 'public'
   AND table_name IN (
     'catalog_products','catalog_selling_price_events','catalog_tax_events',
     'business_tax_settings','catalog_reference_cost_events','catalog_link_preview_tokens',
     'catalog_product_link_events','catalog_audit_events','catalog_deletion_records',
     'catalog_write_idempotency_keys'
   );

-- 5. Direct `anon` table privileges — must be empty on every catalog table.
-- Expect: 0 rows.
SELECT table_name, privilege_type
  FROM information_schema.role_table_grants
 WHERE grantee = 'anon'
   AND table_schema = 'public'
   AND table_name IN (
     'catalog_products','catalog_categories','catalog_selling_price_events',
     'catalog_tax_events','business_tax_settings','catalog_reference_cost_events',
     'catalog_link_preview_tokens','catalog_product_link_events','catalog_audit_events',
     'catalog_deletion_records','catalog_write_idempotency_keys'
   );

-- 6. PUBLIC and anon function EXECUTE on catalog_internal helpers.
-- Expect: 0 rows.
SELECT p.proname, r.rolname AS grantee
  FROM pg_proc p
  JOIN pg_namespace n ON n.oid = p.pronamespace
  JOIN aclexplode(p.proacl) a ON true
  JOIN pg_roles r ON r.oid = a.grantee
 WHERE n.nspname = 'catalog_internal'
   AND r.rolname IN ('PUBLIC', 'anon')
   AND a.privilege_type = 'EXECUTE';

-- 7. Confirm catalog_internal schema is not in Supabase's exposed-schema
-- configuration (manual cross-check against Project Settings > API; this
-- query lists schema USAGE grants as a proxy signal only).
-- Expect: no USAGE for anon/authenticated on catalog_internal.
SELECT n.nspname, r.rolname AS grantee, a.privilege_type
  FROM pg_namespace n
  JOIN aclexplode(n.nspacl) a ON true
  JOIN pg_roles r ON r.oid = a.grantee
 WHERE n.nspname = 'catalog_internal'
   AND r.rolname IN ('anon', 'authenticated');

-- 8. service_role retains full access (intentional; matches existing
-- repository precedent and service_role's platform-level BYPASSRLS).
-- Expect: 11 rows (one per catalog table) with ALL-equivalent privileges.
SELECT table_name, string_agg(privilege_type, ', ' ORDER BY privilege_type) AS privileges
  FROM information_schema.role_table_grants
 WHERE grantee = 'service_role'
   AND table_schema = 'public'
   AND table_name IN (
     'catalog_products','catalog_categories','catalog_selling_price_events',
     'catalog_tax_events','business_tax_settings','catalog_reference_cost_events',
     'catalog_link_preview_tokens','catalog_product_link_events','catalog_audit_events',
     'catalog_deletion_records','catalog_write_idempotency_keys'
   )
 GROUP BY table_name
 ORDER BY table_name;
