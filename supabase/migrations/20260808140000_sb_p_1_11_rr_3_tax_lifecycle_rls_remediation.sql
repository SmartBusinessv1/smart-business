-- SB-P-1.11-RR-3: RLS/grant remediation for Defect 2 (product tax change)
-- and Defect 3 (permanent product delete).
--
-- Authorized by communication/live/instruction1.63.md Section 3, following
-- from communication/live/report1.67.md Section 4 -- SB-P-1.11-RR-2 proved
-- that the GRANT-only correction attempted there was necessary but not
-- sufficient: a table-level GRANT only permits a role to attempt a
-- statement; Row-Level Security then independently decides which rows, if
-- any, that statement may actually touch. Both roles below already hold a
-- GRANT for an operation with no matching RLS policy for that exact
-- (role, command) pair, so the grant alone is silently neutered to zero
-- affected rows. This migration adds exactly the missing GRANT plus the
-- one matching RLS policy for each gap -- nothing else. Every new policy
-- predicate is copied verbatim from the already-accepted, already-deployed
-- Owner/business-scoped executor pattern used throughout this schema
-- (e.g. cost_executor_update_own_business on catalog_products,
-- read_executor_select_own_business on the four history tables), read
-- directly from production immediately before writing this migration.
--
-- Defect 2 (report1.67.md Section 4.2): record_catalog_tax_change runs as
-- catalog_tax_executor and already correctly holds SELECT on
-- catalog_products (to resolve the target row); it has never held UPDATE,
-- nor any RLS UPDATE policy, though the function body performs
-- `UPDATE public.catalog_products SET tax_treatment = ..., tax_rate_percent
-- = ... WHERE ...`.
GRANT UPDATE ON TABLE public.catalog_products TO catalog_tax_executor;

CREATE POLICY tax_executor_update_own_business
  ON public.catalog_products
  FOR UPDATE
  TO catalog_tax_executor
  USING (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()));

-- Defect 3 (report1.67.md Sections 4.2, 4.5): delete_catalog_product runs
-- as catalog_lifecycle_executor. Its dependent-history check reads four
-- event tables via EXISTS(...) subqueries; catalog_lifecycle_executor held
-- no GRANT and no RLS SELECT policy on any of them, so -- once the GRANT
-- alone is added without a matching policy -- the check always evaluates
-- "no history" regardless of the truth, which is unsafe. The function's
-- own DELETE statement against catalog_products also requires DELETE,
-- which catalog_lifecycle_executor never held, with no RLS DELETE policy
-- existing for any role on that table.
GRANT SELECT ON TABLE
  public.catalog_selling_price_events,
  public.catalog_tax_events,
  public.catalog_reference_cost_events,
  public.catalog_product_link_events
TO catalog_lifecycle_executor;

CREATE POLICY lifecycle_executor_select_own_business
  ON public.catalog_selling_price_events
  FOR SELECT
  TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()));

CREATE POLICY lifecycle_executor_select_own_business
  ON public.catalog_tax_events
  FOR SELECT
  TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()));

CREATE POLICY lifecycle_executor_select_own_business
  ON public.catalog_reference_cost_events
  FOR SELECT
  TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()));

CREATE POLICY lifecycle_executor_select_own_business
  ON public.catalog_product_link_events
  FOR SELECT
  TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()));

GRANT DELETE ON TABLE public.catalog_products TO catalog_lifecycle_executor;

CREATE POLICY lifecycle_executor_delete_own_business
  ON public.catalog_products
  FOR DELETE
  TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()));

-- Not touched by this migration, unchanged: any function body, function
-- ownership, table schema/columns/triggers/enums, existing policies on any
-- table, or any privilege for authenticated/anon (still hold zero direct
-- UPDATE/DELETE on catalog_products or the four history tables -- writes
-- to all of them remain exclusively through the accepted SECURITY DEFINER
-- command functions).
