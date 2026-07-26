-- SB-MIG-1.2E-C: Reconciliation migration.
--
-- Closes a structural reproducibility gap found while replaying this
-- repository's migrations against a fresh Supabase project (SB-MIG-1.2E-B).
-- Tables and functions created via Supabase's own platform tooling
-- (dashboard, Management API -- which is what created every object on the
-- Team LIPS production project, most likely via Lovable's AI schema
-- editor) automatically receive broad default privileges for
-- anon/authenticated/service_role, courtesy of the `supabase_admin` role's
-- default ACLs on the `public` schema. Objects created via plain SQL
-- migrations (as `postgres`, which is how `supabase db push` runs and
-- which owns every table in this schema -- verified via pg_tables) do NOT
-- receive this automatic grant: `postgres`'s own default privileges for
-- this schema only include TRUNCATE/REFERENCES/TRIGGER/MAINTAIN for those
-- three roles, not SELECT/INSERT/UPDATE/DELETE on tables or EXECUTE on
-- functions.
--
-- This was discovered concretely in SB-MIG-1.2E-B as a missing
-- GRANT UPDATE, DELETE on inventory_movements (verified against
-- production's actual pg_catalog/information_schema state, not guessed),
-- and confirmed here via a full comparison across all 6 tables and all 8
-- functions against production's real, current grants.
--
-- This migration makes that grant baseline explicit and tracked, matching
-- production's verified real state exactly, so any future fresh replay of
-- this migration set (test project, disaster recovery, or an eventual
-- production re-provisioning) reproduces a fully functional database
-- without any manual SQL step. It is intentionally broad (GRANT ALL /
-- EXECUTE ON ALL FUNCTIONS) rather than a narrow per-privilege patch,
-- because that is what production's verified state actually is -- Row
-- Level Security (confirmed enabled on every table, policies scoped to
-- `authenticated`) remains the real access-control gate, exactly as
-- Supabase's own documented default-privilege design intends.

GRANT ALL ON TABLE
  public.businesses,
  public.inventory_items,
  public.inventory_movement_idempotency_keys,
  public.inventory_movements,
  public.transaction_correction_events,
  public.transactions
TO anon, authenticated, service_role;

GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated, service_role;

-- Forward-compatible: any table or function created by a future migration
-- (which runs as, and is owned by, `postgres` -- verified via pg_tables)
-- automatically receives the same grant baseline that Supabase's own
-- tooling gives objects created as `supabase_admin`, without needing an
-- explicit GRANT statement to be remembered each time.
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT ALL ON TABLES TO anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT EXECUTE ON FUNCTIONS TO anon, authenticated, service_role;
