-- SB-REL-1.10-1.11-Gate2A-C1: Inventory Anonymous-Privilege Hardening.
--
-- Authorized by communication/live/instruction.md (Gate 2A-C1 -- Inventory
-- Anonymous-Privilege Hardening Preparation & Test Validation), correcting
-- the Gate 2A Security & Permissions Architecture disposition
-- (`HARDENING REQUIRED BEFORE RELEASE APPROVAL`, canonical at
-- 259ca4acd71b524f653e5be5ebea92361db20bcf).
--
-- Gate 2A's own direct read-only production inspection found:
--   - `anon` holds SELECT/INSERT/UPDATE/DELETE/TRUNCATE/REFERENCES/
--     TRIGGER/MAINTAIN on all three Inventory tables;
--   - `anon` holds EXECUTE on six Inventory-domain functions, two of
--     which (`inventory_items_guard`, `inventory_movements_reject_
--     mutation`) are additionally reachable via a blanket PUBLIC EXECUTE
--     grant, not only anon's own grant edge;
--   - the public-schema default-privilege baseline for objects created
--     by `postgres` (the role every `supabase db push` migration runs
--     as) automatically re-grants this same broad anon authority to any
--     future table/function unless corrected.
-- Root cause: 20260727000000_reconcile_default_grants.sql's blanket
-- `GRANT ALL ... TO anon, authenticated, service_role` and matching
-- `ALTER DEFAULT PRIVILEGES ... GRANT ... TO anon, authenticated,
-- service_role`, applied uniformly without the REVOKE-first narrowing
-- every Catalog/parser migration already uses.
--
-- Gate 2A's own direct anon read probe already confirmed RLS makes
-- anonymous row access on these tables functionally default-deny today
-- (zero applicable anon/PUBLIC policy on any of the three tables); this
-- migration removes the unnecessary underlying database authority itself
-- -- the intended real gate is RLS plus the absence of unneeded grants,
-- not RLS alone. No RLS policy, function body, schema, business logic,
-- or role membership is touched.
--
-- Scope, exactly as authorized -- anon only, and only the three named
-- Inventory tables and their six domain functions. `authenticated`,
-- `service_role`, and the narrow `catalog_link_executor` read path are
-- completely untouched. `businesses`, `transactions`, and
-- `transaction_correction_events` share the same root-cause migration
-- and the same underlying issue, but are explicitly out of this gate's
-- authorized scope and are not touched here.
--
-- Disclosed residual, not corrected here: 20260727000000 documents an
-- equivalent broad default-privilege baseline for objects created by
-- `supabase_admin` (Supabase's own platform-internal admin role, used
-- when an object is created via the dashboard/Management API rather
-- than a SQL migration). Correcting that second baseline would require
-- `postgres` to act with `supabase_admin`'s own privilege, which is not
-- achievable without a role-membership change -- explicitly prohibited
-- by this instruction's authorized scope ("Do not change ... role
-- membership"). This migration corrects only the `postgres`-role default
-- baseline, which is the sole creator role this repository's own
-- migration-driven schema-change process ever uses.
--
-- Authorized for execution against the isolated Smart Business test
-- project (drravyyauixltoihzmwo) only under this instruction. Production
-- (gysgzasfcjvtrgaigfyn) execution requires a separate, later, explicit
-- Mission Control production-execution authorization.

-- =============================================================================
-- Step 1 -- revoke anon's unnecessary table privileges on the three
-- Inventory tables. authenticated, service_role, and
-- catalog_link_executor's existing grants are untouched; RLS (already
-- enabled, already scoped only to authenticated/catalog_link_executor)
-- is not modified.
-- =============================================================================

REVOKE ALL ON public.inventory_items FROM anon;
REVOKE ALL ON public.inventory_movements FROM anon;
REVOKE ALL ON public.inventory_movement_idempotency_keys FROM anon;

-- =============================================================================
-- Step 2 -- revoke anon's unnecessary EXECUTE on the six Inventory-domain
-- functions. No canonical Product Truth or implementation requirement
-- authorizes anonymous invocation of any Inventory action -- every
-- Inventory workflow requires an authenticated Owner session (locked
-- Engineering Contract, SB-P-1.10). All six are SECURITY INVOKER
-- (independently confirmed via direct inspection, both at Gate 2A against
-- production and freshly against this test project before this
-- migration), so revoking anon's EXECUTE cannot itself affect
-- authenticated/service_role/postgres's own independently-granted EXECUTE
-- rights, and cannot change the functions' own invoker-rights behavior.
--
-- inventory_items_guard() and inventory_movements_reject_mutation() are
-- additionally reachable via a blanket PUBLIC EXECUTE grant (confirmed
-- directly, not assumed); revoking only anon's own edge would leave anon
-- able to execute via that PUBLIC path, so PUBLIC is revoked for exactly
-- these two, in addition to anon. authenticated, service_role, and
-- postgres each hold their own separate, explicit EXECUTE grant on both
-- functions (confirmed directly), so revoking the PUBLIC grant does not
-- affect their access.
-- =============================================================================

REVOKE EXECUTE ON FUNCTION public.create_inventory_movement(
  uuid, text, uuid, public.inventory_movement_type, public.inventory_direction,
  numeric, text, timestamp with time zone, uuid, boolean, text, uuid
) FROM anon;

REVOKE EXECUTE ON FUNCTION public.inventory_current_stock_batch(uuid[]) FROM anon;

REVOKE EXECUTE ON FUNCTION public.inventory_items_guard() FROM PUBLIC, anon;

REVOKE EXECUTE ON FUNCTION public.inventory_movement_remaining_compensable(uuid) FROM anon;

REVOKE EXECUTE ON FUNCTION public.inventory_movements_reject_mutation() FROM PUBLIC, anon;

REVOKE EXECUTE ON FUNCTION public.preview_inventory_movement(
  uuid, public.inventory_direction, numeric
) FROM anon;

-- =============================================================================
-- Step 3 -- correct the public-schema default-privilege baseline for
-- objects created by `postgres` (20260727000000_reconcile_default_
-- grants.sql's own ALTER DEFAULT PRIVILEGES statements) so future
-- postgres-created tables/functions no longer automatically re-grant
-- anon broad table/EXECUTE authority. authenticated and service_role
-- default privileges are unchanged, matching the original migration's
-- own stated intent for those two roles. Confirmed directly beforehand
-- (pg_default_acl) that the `postgres`-role default for sequences never
-- included anon in the first place -- no sequence correction is needed
-- or made.
-- =============================================================================

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  REVOKE ALL ON TABLES FROM anon;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  REVOKE EXECUTE ON FUNCTIONS FROM anon;

-- Not touched by this migration: authenticated/service_role/postgres
-- table or function grants; catalog_link_executor's existing narrow
-- SELECT path; any RLS policy, function body, schema, business logic,
-- role membership, or Product Truth; businesses/transactions/
-- transaction_correction_events (same root cause, explicitly out of this
-- gate's scope); the supabase_admin-role default-privilege baseline
-- (disclosed residual above); production (gysgzasfcjvtrgaigfyn) in any
-- respect.
