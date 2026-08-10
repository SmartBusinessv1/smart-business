-- SB-P-1.11-GC-1: Security Implementation Correction.
--
-- Authorized by communication/live/instruction1.79.md, correcting the
-- defects identified in communication/live/report1.85.md (SEC-IMP-5,
-- SEC-IMP-6). Applied to the dedicated test Supabase project only.
--
-- =============================================================================
-- SEC-IMP-5 -- durable multi-command row follow-up state.
--
-- report1.85.md §6: a row was marked CREATED (and the batch could reach
-- committed) even when a required selling-price/tax/reference-cost
-- follow-up command failed, was rejected, or returned an ambiguous
-- outcome -- the failure became a transient in-memory warning only, never
-- persisted, never retried with the correct operation identity.
--
-- Minimum-necessary correction per instruction1.79.md §9's persistence
-- rule: one new column recording each row's required-follow-up
-- completion state, plus a relaxed status-coupled CHECK so a FAILED row
-- may legitimately carry resolution evidence (product already created,
-- a follow-up still outstanding) alongside the existing, still-supported
-- case of a FAILED row whose product was never created at all. No third
-- support table; no change to catalog_import_batches.
-- =============================================================================

ALTER TABLE public.catalog_import_rows
  ADD COLUMN follow_up_state jsonb NOT NULL DEFAULT '{}'::jsonb;

COMMENT ON COLUMN public.catalog_import_rows.follow_up_state IS
  'Per-required-operation durable state for this row''s commercial-field '
  'follow-up commands (selling_price/tax/reference_cost), each one of '
  '"pending" | "complete" | "failed" | "rejected". Keys exist only for '
  'operations this row''s parsed_snapshot actually requires. Written '
  'exclusively by the server-only bookkeeping client (EIS §45.1.1), never '
  'by authenticated -- same narrow write boundary as every other column '
  'on this table.';

ALTER TABLE public.catalog_import_rows
  DROP CONSTRAINT catalog_import_rows_resolution_pair;

-- Corrected rule: the three resolution-evidence columns still always move
-- together (all set, or all null) -- BA-5's original guarantee, preserved
-- verbatim. CREATED must carry evidence, as before. Any status other than
-- CREATED/FAILED must never carry evidence, as before. What changes is
-- FAILED: it may now legitimately carry evidence too (create_catalog_product
-- already succeeded; a required follow-up has not yet reached "complete"),
-- which is exactly the new, correctly-representable durable-retry state
-- this correction introduces. A FAILED row with no evidence (product
-- creation itself failed or was rejected) remains representable exactly
-- as before.
ALTER TABLE public.catalog_import_rows
  ADD CONSTRAINT catalog_import_rows_resolution_pair CHECK (
    (
      (resolved_product_id IS NOT NULL AND resolved_by IS NOT NULL AND resolved_at IS NOT NULL)
      OR
      (resolved_product_id IS NULL AND resolved_by IS NULL AND resolved_at IS NULL)
    )
    AND (
      status <> 'CREATED'
      OR (resolved_product_id IS NOT NULL AND resolved_by IS NOT NULL AND resolved_at IS NOT NULL)
    )
    AND (
      status IN ('CREATED', 'FAILED')
      OR (resolved_product_id IS NULL AND resolved_by IS NULL AND resolved_at IS NULL)
    )
  );

-- =============================================================================
-- SEC-IMP-6 -- governed hard-delete rejection for imported/matched products.
--
-- report1.85.md §9: delete_catalog_product pre-checks only its four prior
-- dependent-history sources; a physical DELETE against a product still
-- referenced by catalog_import_rows (matched_product_id or
-- resolved_product_id) could raise a raw FK violation instead of the
-- command's normal sanitized DEPENDENT_HISTORY_CONFLICT outcome.
--
-- Correction: catalog_lifecycle_executor (the existing, unmodified owner
-- of delete_catalog_product) is granted the same narrow, business-scoped
-- SELECT already granted to every other executor role that reads a
-- Catalog-adjacent table for its own dependent-history checks -- reusing
-- the exact catalog_internal.resolve_owner_business(...) predicate already
-- proven on this exact table pattern throughout Stage 1/RR-3, not a new
-- access model. delete_catalog_product's own dependent-history EXISTS
-- check gains one more source. Signature, authority model, idempotency
-- behavior, and every other rejection path are unchanged -- this is a
-- pure internal-body correction to an existing command per
-- instruction1.79.md §4 item 17.
-- =============================================================================

GRANT SELECT ON public.catalog_import_rows TO catalog_lifecycle_executor;

CREATE POLICY "lifecycle_executor_select_own_business"
  ON public.catalog_import_rows FOR SELECT
  TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid()));

-- The original Stage 1/2 migrations transfer function ownership to each
-- executor role after CREATE (ALTER FUNCTION ... OWNER TO catalog_..._
-- executor), matching the SECURITY DEFINER privilege model those roles
-- exist for. `postgres` (the role migrations run as) is therefore not the
-- owner and cannot CREATE OR REPLACE this function directly, and (being
-- NOT superuser here, only CREATEROLE) cannot re-take ownership either.
-- postgres's CREATEROLE privilege lets it grant itself membership in this
-- non-superuser role; because postgres itself is rolinherit=true, that
-- membership alone (no SET ROLE) is sufficient for Postgres to treat it
-- as owner-equivalent for this CREATE OR REPLACE, while postgres keeps
-- its own session identity (and its own schema-level CREATE privilege,
-- which the target role does not separately hold). No ownership transfer
-- occurs at any point.
--
-- Verified directly against the test project (not assumed): `postgres`
-- already holds this same membership in every OTHER Catalog executor role
-- this migration never touches (confirmed via pg_auth_members), so this
-- is Supabase's own platform-level baseline for the `postgres` role, not
-- a privilege this migration introduces. The REVOKE below removes only
-- the grant edge this migration itself adds, restoring the exact
-- pre-migration state -- it does not and should not attempt to remove
-- Supabase's own separate, pre-existing baseline grant, which every other
-- executor role already carries identically.
GRANT catalog_lifecycle_executor TO postgres;

CREATE OR REPLACE FUNCTION public.delete_catalog_product(
  p_idempotency_key uuid,
  p_product_id uuid
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := catalog_internal.current_actor_uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_product public.catalog_products;
  v_has_history boolean;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(coalesce(p_product_id::text, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'delete_catalog_product', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'delete_catalog_product' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  SELECT * INTO v_product FROM public.catalog_products WHERE id = p_product_id AND business_id = v_business;
  IF v_product.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'delete_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT
    EXISTS (SELECT 1 FROM public.catalog_selling_price_events WHERE product_id = v_product.id AND business_id = v_business) OR
    EXISTS (SELECT 1 FROM public.catalog_tax_events WHERE product_id = v_product.id AND business_id = v_business) OR
    EXISTS (SELECT 1 FROM public.catalog_reference_cost_events WHERE product_id = v_product.id AND business_id = v_business) OR
    EXISTS (SELECT 1 FROM public.catalog_product_link_events WHERE product_id = v_product.id AND business_id = v_business) OR
    EXISTS (
      SELECT 1 FROM public.catalog_import_rows
       WHERE business_id = v_business
         AND (matched_product_id = v_product.id OR resolved_product_id = v_product.id)
    )
    INTO v_has_history;

  IF v_has_history THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'delete_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'DEPENDENT_HISTORY_CONFLICT');
    RETURN ROW('rejected', 'DEPENDENT_HISTORY_CONFLICT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  INSERT INTO public.catalog_deletion_records
    (business_id, deleted_product_id, product_name_snapshot, deleted_by_user_id)
    VALUES (v_business, v_product.id, v_product.name, v_actor);

  DELETE FROM public.catalog_products WHERE id = p_product_id AND business_id = v_business;

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'delete_catalog_product', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

REVOKE catalog_lifecycle_executor FROM postgres;

-- Not touched by this migration, unchanged: delete_catalog_product's
-- signature, grants, ownership, or any other Catalog command; the
-- 19-command public surface; catalog_import_batches; any RLS/grant on
-- catalog_import_rows for anon or authenticated (still zero write access,
-- SELECT-only for authenticated, per the original Build Lock migration).
