-- SB-P-1.11-IMPL-1 — Stage 2: Exact Nineteen Command Functions
--
-- Authorized by communication/live/instruction1.40.md Stage 2 and the
-- binding correction package in communication/live/report1.37.md Section 5.
-- Every function below uses the exact signature from that section. No
-- twentieth function, no public overload, no frontend, no production
-- mutation, no migration applied anywhere -- this file is prepared, not
-- executed.
--
-- Shared architecture, applied uniformly across all fifteen write commands:
--   1. Re-derive actor (auth.uid()) and business
--      (catalog_internal.resolve_owner_business) -- never caller-supplied.
--      If either is unavailable, return rejected/PERMISSION_DENIED without
--      any idempotency bookkeeping (a business_id-scoped row cannot be
--      written for a caller whose business could not be resolved at all).
--   2. Compute a payload fingerprint from the raw, unvalidated input
--      (idempotency resolves before mutable-state evaluation, EIS Section 3).
--   3. Acquire catalog_internal.idempotency_lock_key(...) as a transaction-
--      scoped advisory lock (report1.37.md LSF-5) -- a serialization aid
--      only, never authorization or outcome evidence.
--   4. Plain SELECT (no FOR UPDATE) against catalog_write_idempotency_keys
--      for (business_id, operation, idempotency_key). If found: mismatched
--      fingerprint returns rejected/IDEMPOTENCY_CONFLICT; matching
--      fingerprint replays the stored terminal outcome. Neither path
--      touches any other table -- the advisory lock alone is sufficient
--      concurrency protection given the authoritative unique row is always
--      re-verified after acquiring it.
--   5. Validate inputs and preconditions; on an expected rejection, INSERT
--      the terminal 'rejected' idempotency row (committed, not rolled
--      back) and return.
--   6. Perform the atomic business writes.
--   7. INSERT the terminal 'completed' idempotency row and return.
--
-- Only a genuinely unexpected error (constraint violation not already
-- anticipated, internal fault) is allowed to propagate as an exception,
-- which rolls back the whole attempt and becomes UNKNOWN_OUTCOME at the
-- calling layer -- this migration never catches and silently swallows an
-- unanticipated exception.

-- =============================================================================
-- 0. Additional shared internal helper
-- =============================================================================
CREATE OR REPLACE FUNCTION catalog_internal.compute_fingerprint(p_input text)
RETURNS text
LANGUAGE sql
IMMUTABLE
SET search_path = ''
AS $$
  SELECT encode(extensions.digest(p_input, 'sha256'), 'hex');
$$;

REVOKE ALL ON FUNCTION catalog_internal.compute_fingerprint(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION catalog_internal.compute_fingerprint(text) TO
  catalog_identity_executor, catalog_lifecycle_executor, catalog_pricing_executor,
  catalog_tax_executor, catalog_cost_executor, catalog_link_executor;

-- =============================================================================
-- 1. create_catalog_product (catalog_identity_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.create_catalog_product(
  p_idempotency_key uuid,
  p_name text,
  p_description text DEFAULT NULL,
  p_category_id uuid DEFAULT NULL,
  p_sku text DEFAULT NULL,
  p_barcode text DEFAULT NULL,
  p_selling_unit text DEFAULT 'piece'
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_name text;
  v_selling_unit text;
  v_product public.catalog_products;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_name, '') || '|' || coalesce(p_description, '') || '|' ||
    coalesce(p_category_id::text, '') || '|' || coalesce(p_sku, '') || '|' ||
    coalesce(p_barcode, '') || '|' || coalesce(p_selling_unit, '')
  );

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'create_catalog_product', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'create_catalog_product' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(
      v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, (v_existing.result_ref ->> 'category_id')::uuid,
      p_idempotency_key, v_existing.created_at
    )::public.catalog_command_result;
  END IF;

  v_name := btrim(p_name);
  IF v_name IS NULL OR v_name = '' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'create_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_selling_unit := btrim(coalesce(p_selling_unit, 'piece'));
  IF v_selling_unit = '' THEN
    v_selling_unit := 'piece';
  END IF;

  IF p_category_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.catalog_categories WHERE id = p_category_id AND business_id = v_business
  ) THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'create_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  BEGIN
    INSERT INTO public.catalog_products (
      business_id, name, name_normalized, description, category_id,
      sku, sku_normalized, barcode, barcode_normalized, selling_unit, created_by
    ) VALUES (
      v_business, v_name, catalog_internal.normalize_name(v_name), NULLIF(btrim(p_description), ''), p_category_id,
      NULLIF(btrim(p_sku), ''), catalog_internal.normalize_identifier(p_sku),
      NULLIF(btrim(p_barcode), ''), catalog_internal.normalize_identifier(p_barcode),
      v_selling_unit, v_actor
    ) RETURNING * INTO v_product;
  EXCEPTION WHEN unique_violation THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'create_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'UNIQUENESS_CONFLICT');
    RETURN ROW('rejected', 'UNIQUENESS_CONFLICT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_product', v_product.id, 'product_created',
      jsonb_build_object('after', jsonb_build_object(
        'name', v_product.name, 'description', v_product.description, 'category_id', v_product.category_id,
        'sku', v_product.sku, 'barcode', v_product.barcode, 'selling_unit', v_product.selling_unit
      )), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'create_catalog_product', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, v_product.created_at)::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 2. update_catalog_product_identity (catalog_identity_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.update_catalog_product_identity(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_name text,
  p_description text,
  p_category_id uuid,
  p_sku text,
  p_barcode text
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_name text;
  v_before public.catalog_products;
  v_after public.catalog_products;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_product_id::text, '') || '|' || coalesce(p_name, '') || '|' || coalesce(p_description, '') || '|' ||
    coalesce(p_category_id::text, '') || '|' || coalesce(p_sku, '') || '|' || coalesce(p_barcode, '')
  );

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'update_catalog_product_identity', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'update_catalog_product_identity' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(
      v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at
    )::public.catalog_command_result;
  END IF;

  v_name := btrim(p_name);
  IF v_name IS NULL OR v_name = '' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_catalog_product_identity', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_before FROM public.catalog_products WHERE id = p_product_id AND business_id = v_business;
  IF v_before.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_catalog_product_identity', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  IF p_category_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.catalog_categories WHERE id = p_category_id AND business_id = v_business
  ) THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_catalog_product_identity', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  BEGIN
    UPDATE public.catalog_products SET
      name = v_name,
      name_normalized = catalog_internal.normalize_name(v_name),
      description = NULLIF(btrim(p_description), ''),
      category_id = p_category_id,
      sku = NULLIF(btrim(p_sku), ''),
      sku_normalized = catalog_internal.normalize_identifier(p_sku),
      barcode = NULLIF(btrim(p_barcode), ''),
      barcode_normalized = catalog_internal.normalize_identifier(p_barcode)
     WHERE id = p_product_id AND business_id = v_business
     RETURNING * INTO v_after;
  EXCEPTION WHEN unique_violation THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_catalog_product_identity', p_idempotency_key, v_fingerprint, 'rejected', 'UNIQUENESS_CONFLICT');
    RETURN ROW('rejected', 'UNIQUENESS_CONFLICT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_product', v_after.id, 'product_identity_updated',
      jsonb_build_object(
        'before', jsonb_build_object('name', v_before.name, 'description', v_before.description,
          'category_id', v_before.category_id, 'sku', v_before.sku, 'barcode', v_before.barcode),
        'after', jsonb_build_object('name', v_after.name, 'description', v_after.description,
          'category_id', v_after.category_id, 'sku', v_after.sku, 'barcode', v_after.barcode)
      ), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'update_catalog_product_identity', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_after.id));

  RETURN ROW('completed', NULL, v_after.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 3. update_catalog_product_unit (catalog_identity_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.update_catalog_product_unit(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_selling_unit text
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_unit text;
  v_before public.catalog_products;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_product_id::text, '') || '|' || coalesce(p_selling_unit, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'update_catalog_product_unit', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'update_catalog_product_unit' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  v_unit := btrim(p_selling_unit);
  IF v_unit IS NULL OR v_unit = '' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_catalog_product_unit', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_before FROM public.catalog_products WHERE id = p_product_id AND business_id = v_business;
  IF v_before.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_catalog_product_unit', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  -- Stock-tracked products inherit their unit from the linked inventory
  -- item and never independently change it here (catalog/inventory
  -- separation; unit changes on a linked product only ever happen through
  -- the D-068 link flow, commands 13-15).
  IF v_before.inventory_item_id IS NOT NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_catalog_product_unit', p_idempotency_key, v_fingerprint, 'rejected', 'OPERATION_NOT_PERMITTED');
    RETURN ROW('rejected', 'OPERATION_NOT_PERMITTED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  UPDATE public.catalog_products SET selling_unit = v_unit
   WHERE id = p_product_id AND business_id = v_business;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_product', v_before.id, 'product_unit_updated',
      jsonb_build_object('before', jsonb_build_object('selling_unit', v_before.selling_unit),
                          'after', jsonb_build_object('selling_unit', v_unit)), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'update_catalog_product_unit', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_before.id));

  RETURN ROW('completed', NULL, v_before.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 4. create_catalog_category (catalog_identity_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.create_catalog_category(
  p_idempotency_key uuid,
  p_name text
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_name text;
  v_category public.catalog_categories;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(coalesce(p_name, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'create_catalog_category', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'create_catalog_category' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      NULL, (v_existing.result_ref ->> 'category_id')::uuid, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  v_name := btrim(p_name);
  IF v_name IS NULL OR v_name = '' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'create_catalog_category', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  BEGIN
    INSERT INTO public.catalog_categories (business_id, name, name_normalized, created_by)
      VALUES (v_business, v_name, catalog_internal.normalize_name(v_name), v_actor)
      RETURNING * INTO v_category;
  EXCEPTION WHEN unique_violation THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'create_catalog_category', p_idempotency_key, v_fingerprint, 'rejected', 'UNIQUENESS_CONFLICT');
    RETURN ROW('rejected', 'UNIQUENESS_CONFLICT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_category', v_category.id, 'category_created',
      jsonb_build_object('after', jsonb_build_object('name', v_category.name)), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'create_catalog_category', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('category_id', v_category.id));

  RETURN ROW('completed', NULL, NULL, v_category.id, p_idempotency_key, v_category.created_at)::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 5. archive_catalog_category (catalog_identity_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.archive_catalog_category(
  p_idempotency_key uuid,
  p_category_id uuid,
  p_confirm_uncategorize boolean DEFAULT false
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_category public.catalog_categories;
  v_affected_count integer;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_category_id::text, '') || '|' || coalesce(p_confirm_uncategorize::text, 'false'));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'archive_catalog_category', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'archive_catalog_category' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      NULL, (v_existing.result_ref ->> 'category_id')::uuid, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  SELECT * INTO v_category FROM public.catalog_categories
   WHERE id = p_category_id AND business_id = v_business AND status = 'active';
  IF v_category.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'archive_catalog_category', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT count(*) INTO v_affected_count FROM public.catalog_products
   WHERE category_id = p_category_id AND business_id = v_business;

  IF v_affected_count > 0 AND NOT coalesce(p_confirm_uncategorize, false) THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'archive_catalog_category', p_idempotency_key, v_fingerprint, 'rejected', 'CONFIRMATION_REQUIRED');
    RETURN ROW('rejected', 'CONFIRMATION_REQUIRED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  UPDATE public.catalog_categories SET status = 'archived' WHERE id = p_category_id AND business_id = v_business;
  UPDATE public.catalog_products SET category_id = NULL WHERE category_id = p_category_id AND business_id = v_business;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_category', v_category.id, 'category_archived',
      jsonb_build_object('before', jsonb_build_object('status', 'active', 'name', v_category.name),
                          'after', jsonb_build_object('status', 'archived', 'name', v_category.name)), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'archive_catalog_category', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('category_id', v_category.id));

  RETURN ROW('completed', NULL, NULL, v_category.id, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 6. archive_catalog_product (catalog_lifecycle_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.archive_catalog_product(
  p_idempotency_key uuid,
  p_product_id uuid
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_product public.catalog_products;
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
    catalog_internal.idempotency_lock_key(v_business, 'archive_catalog_product', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'archive_catalog_product' AND idempotency_key = p_idempotency_key;
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
      VALUES (v_business, 'archive_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  IF v_product.status <> 'active' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'archive_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'LIFECYCLE_CONFLICT');
    RETURN ROW('rejected', 'LIFECYCLE_CONFLICT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  UPDATE public.catalog_products SET status = 'archived' WHERE id = p_product_id AND business_id = v_business;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_product', v_product.id, 'product_archived',
      jsonb_build_object('before', jsonb_build_object('status', 'active'),
                          'after', jsonb_build_object('status', 'archived')), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'archive_catalog_product', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 7. reactivate_catalog_product (catalog_lifecycle_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.reactivate_catalog_product(
  p_idempotency_key uuid,
  p_product_id uuid
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_product public.catalog_products;
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
    catalog_internal.idempotency_lock_key(v_business, 'reactivate_catalog_product', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'reactivate_catalog_product' AND idempotency_key = p_idempotency_key;
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
      VALUES (v_business, 'reactivate_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  IF v_product.status <> 'archived' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'reactivate_catalog_product', p_idempotency_key, v_fingerprint, 'rejected', 'LIFECYCLE_CONFLICT');
    RETURN ROW('rejected', 'LIFECYCLE_CONFLICT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  UPDATE public.catalog_products SET status = 'active' WHERE id = p_product_id AND business_id = v_business;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_product', v_product.id, 'product_reactivated',
      jsonb_build_object('before', jsonb_build_object('status', 'archived'),
                          'after', jsonb_build_object('status', 'active')), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'reactivate_catalog_product', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 8. delete_catalog_product (catalog_lifecycle_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.delete_catalog_product(
  p_idempotency_key uuid,
  p_product_id uuid
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
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
    EXISTS (SELECT 1 FROM public.catalog_product_link_events WHERE product_id = v_product.id AND business_id = v_business)
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

-- =============================================================================
-- 9. record_catalog_selling_price_change (catalog_pricing_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.record_catalog_selling_price_change(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_new_price numeric
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_product public.catalog_products;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_product_id::text, '') || '|' || coalesce(p_new_price::text, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'record_catalog_selling_price_change', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'record_catalog_selling_price_change' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  IF p_new_price IS NULL OR p_new_price <= 0 THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'record_catalog_selling_price_change', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_product FROM public.catalog_products WHERE id = p_product_id AND business_id = v_business;
  IF v_product.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'record_catalog_selling_price_change', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  INSERT INTO public.catalog_selling_price_events
    (business_id, product_id, previous_price, new_price, source, authorized_by_user_id)
    VALUES (v_business, v_product.id, v_product.current_selling_price, p_new_price, 'direct_change', v_actor);

  UPDATE public.catalog_products SET current_selling_price = p_new_price
   WHERE id = p_product_id AND business_id = v_business;

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'record_catalog_selling_price_change', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 10. record_catalog_tax_change (catalog_tax_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.record_catalog_tax_change(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_treatment text,
  p_rate_percent numeric DEFAULT NULL
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_product public.catalog_products;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_product_id::text, '') || '|' || coalesce(p_treatment, '') || '|' || coalesce(p_rate_percent::text, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'record_catalog_tax_change', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'record_catalog_tax_change' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  IF p_treatment IS NULL OR p_treatment NOT IN ('inherit_business_default', 'product_specific_rate', 'non_taxable') THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'record_catalog_tax_change', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  IF (p_treatment = 'product_specific_rate') <> (p_rate_percent IS NOT NULL) THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'record_catalog_tax_change', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_product FROM public.catalog_products WHERE id = p_product_id AND business_id = v_business;
  IF v_product.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'record_catalog_tax_change', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  INSERT INTO public.catalog_tax_events
    (business_id, product_id, previous_treatment, previous_rate_percent, new_treatment, new_rate_percent, authorized_by_user_id)
    VALUES (v_business, v_product.id, v_product.tax_treatment, v_product.tax_rate_percent,
            p_treatment::public.catalog_tax_treatment, p_rate_percent, v_actor);

  UPDATE public.catalog_products SET tax_treatment = p_treatment::public.catalog_tax_treatment, tax_rate_percent = p_rate_percent
   WHERE id = p_product_id AND business_id = v_business;

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'record_catalog_tax_change', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 11. update_business_tax_settings (catalog_tax_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.update_business_tax_settings(
  p_idempotency_key uuid,
  p_pricing_mode text,
  p_default_tax_rate numeric DEFAULT NULL
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_before public.business_tax_settings;
  v_after public.business_tax_settings;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_pricing_mode, '') || '|' || coalesce(p_default_tax_rate::text, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'update_business_tax_settings', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'update_business_tax_settings' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason, NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  IF p_pricing_mode IS NULL OR p_pricing_mode NOT IN ('tax_inclusive', 'tax_exclusive') THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'update_business_tax_settings', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_before FROM public.business_tax_settings WHERE business_id = v_business;

  INSERT INTO public.business_tax_settings (business_id, pricing_mode, default_tax_rate)
    VALUES (v_business, p_pricing_mode::public.catalog_pricing_mode, p_default_tax_rate)
    ON CONFLICT (business_id) DO UPDATE
      SET pricing_mode = EXCLUDED.pricing_mode,
          default_tax_rate = EXCLUDED.default_tax_rate,
          updated_at = now()
    RETURNING * INTO v_after;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'business_tax_settings', v_after.id, 'business_tax_settings_updated',
      jsonb_build_object(
        'before', jsonb_build_object('pricing_mode', v_before.pricing_mode, 'default_tax_rate', v_before.default_tax_rate),
        'after', jsonb_build_object('pricing_mode', v_after.pricing_mode, 'default_tax_rate', v_after.default_tax_rate)
      ), v_actor);

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'update_business_tax_settings', p_idempotency_key, v_fingerprint, 'completed', '{}'::jsonb);

  RETURN ROW('completed', NULL, NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 12. record_catalog_reference_cost_change (catalog_cost_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.record_catalog_reference_cost_change(
  p_idempotency_key uuid,
  p_product_id uuid,
  p_new_cost numeric
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_product public.catalog_products;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_product_id::text, '') || '|' || coalesce(p_new_cost::text, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'record_catalog_reference_cost_change', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'record_catalog_reference_cost_change' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  IF p_new_cost IS NULL OR p_new_cost < 0 THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'record_catalog_reference_cost_change', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_product FROM public.catalog_products WHERE id = p_product_id AND business_id = v_business;
  IF v_product.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'record_catalog_reference_cost_change', p_idempotency_key, v_fingerprint, 'rejected', 'NOT_FOUND');
    RETURN ROW('rejected', 'NOT_FOUND', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  INSERT INTO public.catalog_reference_cost_events
    (business_id, product_id, previous_cost, new_cost, authorized_by_user_id)
    VALUES (v_business, v_product.id, v_product.current_reference_cost, p_new_cost, v_actor);

  UPDATE public.catalog_products SET current_reference_cost = p_new_cost
   WHERE id = p_product_id AND business_id = v_business;

  -- No catalog_audit_events row: catalog_cost_executor holds no privilege
  -- on that table anywhere in this mission (report1.37.md LSF-10 / SA-10).

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'record_catalog_reference_cost_change', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 13. preview_catalog_inventory_link_change (catalog_link_executor)
-- =============================================================================
-- Not idempotency-tracked (no p_idempotency_key parameter, report1.37.md
-- Section 5.1) -- a preview is a disposable proposal, not a durable
-- business fact. Repeated calls simply supersede the prior open preview for
-- the same product; only the two confirm/remove commands below (14, 15)
-- write durable business state and are idempotency-tracked.
CREATE OR REPLACE FUNCTION public.preview_catalog_inventory_link_change(
  p_product_id uuid,
  p_requested_action text,
  p_target_inventory_item_id uuid DEFAULT NULL
) RETURNS public.catalog_link_preview_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_product public.catalog_products;
  v_target public.inventory_items;
  v_has_dependent_history boolean;
  v_proposed_unit text;
  v_price_confirmation_required boolean;
  v_fingerprint text;
  v_preview public.catalog_link_preview_tokens;
BEGIN
  IF v_actor IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
  END IF;

  IF p_requested_action NOT IN ('assign_or_replace', 'remove') THEN
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
  END IF;

  SELECT * INTO v_product FROM public.catalog_products
   WHERE id = p_product_id AND business_id = v_business FOR UPDATE;
  IF v_product.id IS NULL THEN
    RETURN ROW('rejected', 'NOT_FOUND', NULL, p_requested_action, NULL, NULL, NULL, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
  END IF;

  IF p_requested_action = 'assign_or_replace' THEN
    IF p_target_inventory_item_id IS NULL THEN
      RETURN ROW('rejected', 'INVALID_INPUT', NULL, p_requested_action, v_product.inventory_item_id,
        v_product.selling_unit, v_product.current_selling_price, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
    END IF;
    IF p_target_inventory_item_id = v_product.inventory_item_id THEN
      RETURN ROW('rejected', 'OPERATION_NOT_PERMITTED', NULL, p_requested_action, v_product.inventory_item_id,
        v_product.selling_unit, v_product.current_selling_price, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
    END IF;

    SELECT * INTO v_target FROM public.inventory_items
     WHERE id = p_target_inventory_item_id AND business_id = v_business AND status = 'active';
    IF v_target.id IS NULL THEN
      RETURN ROW('rejected', 'NOT_FOUND', NULL, p_requested_action, v_product.inventory_item_id,
        v_product.selling_unit, v_product.current_selling_price, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
    END IF;

    -- D-047 tenure-bounded dependent-history check: only relevant when
    -- replacing an existing link (a first-time assignment has no prior
    -- linked-tenure movements to protect).
    IF v_product.inventory_item_id IS NOT NULL THEN
      SELECT EXISTS (
        SELECT 1 FROM public.inventory_movements
         WHERE item_id = v_product.inventory_item_id
           AND business_id = v_business
           AND occurred_at >= v_product.inventory_link_established_at
      ) INTO v_has_dependent_history;
      IF v_has_dependent_history THEN
        RETURN ROW('rejected', 'DEPENDENT_HISTORY_CONFLICT', NULL, p_requested_action, v_product.inventory_item_id,
          v_product.selling_unit, v_product.current_selling_price, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
      END IF;
    END IF;

    v_proposed_unit := v_target.base_unit;
    v_price_confirmation_required := (v_proposed_unit IS DISTINCT FROM v_product.selling_unit);
  ELSE
    -- remove
    IF v_product.inventory_item_id IS NULL THEN
      RETURN ROW('rejected', 'OPERATION_NOT_PERMITTED', NULL, p_requested_action, NULL,
        v_product.selling_unit, v_product.current_selling_price, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
    END IF;

    SELECT EXISTS (
      SELECT 1 FROM public.inventory_movements
       WHERE item_id = v_product.inventory_item_id
         AND business_id = v_business
         AND occurred_at >= v_product.inventory_link_established_at
    ) INTO v_has_dependent_history;
    IF v_has_dependent_history THEN
      RETURN ROW('rejected', 'DEPENDENT_HISTORY_CONFLICT', NULL, p_requested_action, v_product.inventory_item_id,
        v_product.selling_unit, v_product.current_selling_price, NULL, NULL, NULL, NULL)::public.catalog_link_preview_result;
    END IF;

    v_proposed_unit := v_product.selling_unit;
    v_price_confirmation_required := false;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    v_product.id::text || '|' || coalesce(v_product.inventory_item_id::text, '') || '|' ||
    coalesce(v_product.selling_unit, '') || '|' || coalesce(v_product.current_selling_price::text, '') || '|' ||
    p_requested_action || '|' || coalesce(p_target_inventory_item_id::text, '')
  );

  -- Supersede any existing open preview for this product before opening a
  -- new one (the partial unique index permits only one open row at a time).
  UPDATE public.catalog_link_preview_tokens
     SET closed_at = now(), closed_by_actor_user_id = v_actor, closure_reason = 'superseded'
   WHERE business_id = v_business AND product_id = p_product_id AND closed_at IS NULL;

  INSERT INTO public.catalog_link_preview_tokens (
    business_id, product_id, initiating_actor_user_id, requested_action,
    current_inventory_item_id, target_inventory_item_id,
    current_selling_unit, proposed_selling_unit, current_selling_price,
    price_confirmation_required, expected_state_fingerprint, expires_at
  ) VALUES (
    v_business, v_product.id, v_actor, p_requested_action::public.catalog_link_action,
    v_product.inventory_item_id, p_target_inventory_item_id,
    v_product.selling_unit, v_proposed_unit, v_product.current_selling_price,
    v_price_confirmation_required, v_fingerprint, now() + interval '15 minutes'
  ) RETURNING * INTO v_preview;

  RETURN ROW(
    'completed', NULL, v_preview.id, v_preview.requested_action::text,
    v_preview.current_inventory_item_id, v_preview.current_selling_unit, v_preview.current_selling_price,
    v_preview.target_inventory_item_id, v_preview.proposed_selling_unit,
    v_preview.price_confirmation_required, v_preview.expires_at
  )::public.catalog_link_preview_result;
END;
$$;

-- =============================================================================
-- 14. assign_or_replace_catalog_inventory_link (catalog_link_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.assign_or_replace_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid,
  p_confirmed_price numeric DEFAULT NULL
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_lookup_product_id uuid;
  v_token public.catalog_link_preview_tokens;
  v_product public.catalog_products;
  v_current_fingerprint text;
  v_price_event_id uuid;
  v_link_event_id uuid;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(
    coalesce(p_preview_token_id::text, '') || '|' || coalesce(p_confirmed_price::text, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'assign_or_replace_catalog_inventory_link' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  -- Unlocked preliminary read, solely to discover which product row to lock
  -- first. Locking product-then-token here (rather than token-then-product)
  -- matches preview_catalog_inventory_link_change's lock order, avoiding a
  -- lock-order deadlock between concurrent preview and confirm calls on the
  -- same product. The authoritative, race-safe token check happens below
  -- only after both rows are locked.
  SELECT product_id INTO v_lookup_product_id
    FROM public.catalog_link_preview_tokens
   WHERE id = p_preview_token_id AND business_id = v_business;
  IF v_lookup_product_id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_product FROM public.catalog_products
   WHERE id = v_lookup_product_id AND business_id = v_business FOR UPDATE;
  IF v_product.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_token FROM public.catalog_link_preview_tokens
   WHERE id = p_preview_token_id AND business_id = v_business FOR UPDATE;

  -- Every foreign, nonexistent, expired, closed, superseded, wrong-actor,
  -- or action-mismatched token collapses to the single public STALE_STATE
  -- rejection (report1.37.md SA-5) -- no internal reason is ever persisted.
  IF v_token.id IS NULL
     OR v_token.closed_at IS NOT NULL
     OR v_token.expires_at < now()
     OR v_token.initiating_actor_user_id <> v_actor
     OR v_token.requested_action <> 'assign_or_replace' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_current_fingerprint := catalog_internal.compute_fingerprint(
    v_product.id::text || '|' || coalesce(v_product.inventory_item_id::text, '') || '|' ||
    coalesce(v_product.selling_unit, '') || '|' || coalesce(v_product.current_selling_price::text, '') || '|' ||
    v_token.requested_action::text || '|' || coalesce(v_token.target_inventory_item_id::text, '')
  );
  IF v_current_fingerprint <> v_token.expected_state_fingerprint THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  IF v_token.price_confirmation_required AND p_confirmed_price IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'PRICE_CONFIRMATION_REQUIRED');
    RETURN ROW('rejected', 'PRICE_CONFIRMATION_REQUIRED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  IF p_confirmed_price IS NOT NULL AND p_confirmed_price <= 0 THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'INVALID_INPUT');
    RETURN ROW('rejected', 'INVALID_INPUT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  IF v_token.price_confirmation_required THEN
    INSERT INTO public.catalog_selling_price_events
      (business_id, product_id, previous_price, new_price, source, authorized_by_user_id)
      VALUES (v_business, v_product.id, v_product.current_selling_price, p_confirmed_price, 'link_confirmed', v_actor)
      RETURNING id INTO v_price_event_id;
  END IF;

  INSERT INTO public.catalog_product_link_events (
    business_id, product_id, action, previous_inventory_item_id, new_inventory_item_id,
    previous_selling_unit, new_selling_unit, resulting_price_event_id, preview_token_id, authorized_by_user_id
  ) VALUES (
    v_business, v_product.id, 'assign_or_replace', v_product.inventory_item_id, v_token.target_inventory_item_id,
    v_product.selling_unit, v_token.proposed_selling_unit, v_price_event_id, v_token.id, v_actor
  ) RETURNING id INTO v_link_event_id;

  -- current_selling_price only changes when price_confirmation_required was
  -- true -- that is the only branch that inserted a corresponding
  -- catalog_selling_price_events row above. A caller-supplied
  -- p_confirmed_price is otherwise ignored, so the product price can never
  -- drift without a matching price-history event.
  UPDATE public.catalog_products SET
    inventory_item_id = v_token.target_inventory_item_id,
    inventory_link_established_at = now(),
    selling_unit = v_token.proposed_selling_unit,
    current_selling_price = CASE WHEN v_token.price_confirmation_required THEN p_confirmed_price ELSE current_selling_price END
   WHERE id = v_product.id AND business_id = v_business;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_product', v_product.id,
      CASE WHEN v_product.inventory_item_id IS NULL THEN 'inventory_link_assigned' ELSE 'inventory_link_replaced' END,
      CASE WHEN v_product.inventory_item_id IS NULL THEN
        jsonb_build_object('after', jsonb_build_object(
          'inventory_item_id', v_token.target_inventory_item_id, 'selling_unit', v_token.proposed_selling_unit))
      ELSE
        jsonb_build_object(
          'before', jsonb_build_object('inventory_item_id', v_product.inventory_item_id, 'selling_unit', v_product.selling_unit),
          'after', jsonb_build_object('inventory_item_id', v_token.target_inventory_item_id, 'selling_unit', v_token.proposed_selling_unit))
      END,
      v_actor);

  UPDATE public.catalog_link_preview_tokens SET
    closed_at = now(), closed_by_actor_user_id = v_actor, closure_reason = 'consumed',
    resulting_link_event_id = v_link_event_id,
    current_selling_unit = NULL, proposed_selling_unit = NULL, current_selling_price = NULL
   WHERE id = v_token.id AND business_id = v_business;

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 15. remove_catalog_inventory_link (catalog_link_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.remove_catalog_inventory_link(
  p_idempotency_key uuid,
  p_preview_token_id uuid
) RETURNS public.catalog_command_result
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_fingerprint text;
  v_existing public.catalog_write_idempotency_keys;
  v_lookup_product_id uuid;
  v_token public.catalog_link_preview_tokens;
  v_product public.catalog_products;
  v_current_fingerprint text;
  v_link_event_id uuid;
BEGIN
  IF v_actor IS NULL OR p_idempotency_key IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;
  v_business := catalog_internal.resolve_owner_business(v_actor);
  IF v_business IS NULL THEN
    RETURN ROW('rejected', 'PERMISSION_DENIED', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_fingerprint := catalog_internal.compute_fingerprint(coalesce(p_preview_token_id::text, ''));

  PERFORM pg_advisory_xact_lock(
    catalog_internal.idempotency_lock_key(v_business, 'remove_catalog_inventory_link', p_idempotency_key));

  SELECT * INTO v_existing FROM public.catalog_write_idempotency_keys
   WHERE business_id = v_business AND operation = 'remove_catalog_inventory_link' AND idempotency_key = p_idempotency_key;
  IF v_existing.id IS NOT NULL THEN
    IF v_existing.payload_fingerprint <> v_fingerprint THEN
      RETURN ROW('rejected', 'IDEMPOTENCY_CONFLICT', NULL, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
    END IF;
    RETURN ROW(v_existing.outcome_status, v_existing.rejection_reason,
      (v_existing.result_ref ->> 'product_id')::uuid, NULL, p_idempotency_key, v_existing.created_at)::public.catalog_command_result;
  END IF;

  -- Lock product before token (see matching comment in
  -- assign_or_replace_catalog_inventory_link) to keep lock order consistent
  -- with preview_catalog_inventory_link_change and avoid deadlocks.
  SELECT product_id INTO v_lookup_product_id
    FROM public.catalog_link_preview_tokens
   WHERE id = p_preview_token_id AND business_id = v_business;
  IF v_lookup_product_id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'remove_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_product FROM public.catalog_products
   WHERE id = v_lookup_product_id AND business_id = v_business FOR UPDATE;
  IF v_product.id IS NULL THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'remove_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  SELECT * INTO v_token FROM public.catalog_link_preview_tokens
   WHERE id = p_preview_token_id AND business_id = v_business FOR UPDATE;

  IF v_token.id IS NULL
     OR v_token.closed_at IS NOT NULL
     OR v_token.expires_at < now()
     OR v_token.initiating_actor_user_id <> v_actor
     OR v_token.requested_action <> 'remove' THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'remove_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  v_current_fingerprint := catalog_internal.compute_fingerprint(
    v_product.id::text || '|' || coalesce(v_product.inventory_item_id::text, '') || '|' ||
    coalesce(v_product.selling_unit, '') || '|' || coalesce(v_product.current_selling_price::text, '') || '|' ||
    v_token.requested_action::text || '|' || coalesce(v_token.target_inventory_item_id::text, '')
  );
  IF v_current_fingerprint <> v_token.expected_state_fingerprint THEN
    INSERT INTO public.catalog_write_idempotency_keys
      (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
      VALUES (v_business, 'remove_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'STALE_STATE');
    RETURN ROW('rejected', 'STALE_STATE', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
  END IF;

  INSERT INTO public.catalog_product_link_events (
    business_id, product_id, action, previous_inventory_item_id, new_inventory_item_id,
    previous_selling_unit, new_selling_unit, resulting_price_event_id, preview_token_id, authorized_by_user_id
  ) VALUES (
    v_business, v_product.id, 'remove', v_product.inventory_item_id, NULL,
    v_product.selling_unit, v_product.selling_unit, NULL, v_token.id, v_actor
  ) RETURNING id INTO v_link_event_id;

  UPDATE public.catalog_products SET
    inventory_item_id = NULL,
    inventory_link_established_at = NULL
   WHERE id = v_product.id AND business_id = v_business;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id)
    VALUES (v_business, 'catalog_product', v_product.id, 'inventory_link_removed',
      jsonb_build_object('before', jsonb_build_object(
        'inventory_item_id', v_product.inventory_item_id, 'selling_unit', v_product.selling_unit)),
      v_actor);

  UPDATE public.catalog_link_preview_tokens SET
    closed_at = now(), closed_by_actor_user_id = v_actor, closure_reason = 'consumed',
    resulting_link_event_id = v_link_event_id,
    current_selling_unit = NULL, proposed_selling_unit = NULL, current_selling_price = NULL
   WHERE id = v_token.id AND business_id = v_business;

  INSERT INTO public.catalog_write_idempotency_keys
    (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, result_ref)
    VALUES (v_business, 'remove_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'completed',
      jsonb_build_object('product_id', v_product.id));

  RETURN ROW('completed', NULL, v_product.id, NULL, p_idempotency_key, now())::public.catalog_command_result;
END;
$$;

-- =============================================================================
-- 16. get_catalog_command_outcome (catalog_read_executor)
-- =============================================================================
-- Pure lookup, never claims a key. Foreign and nonexistent keys are
-- indistinguishable: both produce found = false.
CREATE OR REPLACE FUNCTION public.get_catalog_command_outcome(
  p_operation text,
  p_idempotency_key uuid
) RETURNS public.catalog_command_outcome
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_row public.catalog_write_idempotency_keys;
BEGIN
  IF v_actor IS NOT NULL THEN
    v_business := catalog_internal.resolve_owner_business(v_actor);
  END IF;

  IF v_business IS NOT NULL THEN
    SELECT * INTO v_row FROM public.catalog_write_idempotency_keys
     WHERE business_id = v_business AND operation = p_operation AND idempotency_key = p_idempotency_key;
  END IF;

  IF v_row.id IS NULL THEN
    RETURN ROW(false, NULL, NULL, NULL, NULL)::public.catalog_command_outcome;
  END IF;

  RETURN ROW(true, v_row.outcome_status, v_row.rejection_reason, v_row.result_ref, v_row.created_at)::public.catalog_command_outcome;
END;
$$;

-- =============================================================================
-- 17. catalog_products_search (catalog_read_executor)
-- =============================================================================
-- Deterministic five-tier ranking (report1.37.md LSF-4 / SA-4 / CP-5).
-- Always cost-redacted -- catalog_product_summary has no cost field.
CREATE OR REPLACE FUNCTION public.catalog_products_search(
  p_query text DEFAULT NULL,
  p_include_archived boolean DEFAULT false,
  p_category_id uuid DEFAULT NULL,
  p_limit integer DEFAULT 25,
  p_cursor_match_rank smallint DEFAULT NULL,
  p_cursor_name_normalized text DEFAULT NULL,
  p_cursor_id uuid DEFAULT NULL
) RETURNS SETOF public.catalog_product_summary
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_query_name text;
  v_query_id text;
  v_cursor_ok boolean;
BEGIN
  IF v_actor IS NOT NULL THEN
    v_business := catalog_internal.resolve_owner_business(v_actor);
  END IF;
  IF v_business IS NULL THEN
    RETURN;
  END IF;

  IF p_limit IS NULL OR p_limit < 1 OR p_limit > 100 THEN
    RAISE EXCEPTION 'INVALID_INPUT: p_limit must be between 1 and 100';
  END IF;

  IF NOT (
    (p_cursor_match_rank IS NULL AND p_cursor_name_normalized IS NULL AND p_cursor_id IS NULL) OR
    (p_cursor_match_rank IS NOT NULL AND p_cursor_name_normalized IS NOT NULL AND p_cursor_id IS NOT NULL)
  ) THEN
    RAISE EXCEPTION 'INVALID_INPUT: cursor fields must be all-null or all-provided';
  END IF;

  v_query_name := catalog_internal.normalize_name(p_query);
  v_query_id := catalog_internal.normalize_identifier(p_query);

  IF p_cursor_id IS NOT NULL THEN
    SELECT EXISTS (
      SELECT 1 FROM public.catalog_products p
       WHERE p.business_id = v_business
         AND (p_include_archived OR p.status = 'active')
         AND (p_category_id IS NULL OR p.category_id = p_category_id)
         AND p.id = p_cursor_id
         AND p.name_normalized = p_cursor_name_normalized
         AND (
           CASE
             WHEN v_query_name IS NULL AND v_query_id IS NULL THEN 0::smallint
             WHEN v_query_id IS NOT NULL AND p.barcode_normalized = v_query_id THEN 1::smallint
             WHEN v_query_id IS NOT NULL AND p.sku_normalized = v_query_id THEN 2::smallint
             WHEN v_query_name IS NOT NULL AND p.name_normalized = v_query_name THEN 3::smallint
             WHEN v_query_name IS NOT NULL AND length(p.name_normalized) >= length(v_query_name)
                  AND left(p.name_normalized, length(v_query_name)) = v_query_name THEN 4::smallint
             WHEN v_query_name IS NOT NULL AND strpos(p.name_normalized, v_query_name) > 0 THEN 5::smallint
             ELSE NULL::smallint
           END
         ) = p_cursor_match_rank
    ) INTO v_cursor_ok;

    IF NOT v_cursor_ok THEN
      RAISE EXCEPTION 'INVALID_INPUT: cursor is not valid for the current query context';
    END IF;
  END IF;

  RETURN QUERY
  WITH candidates AS (
    SELECT
      p.id, p.name, p.sku, p.barcode, p.category_id, p.selling_unit, p.current_selling_price,
      p.status::text AS status, (p.inventory_item_id IS NOT NULL) AS is_stock_tracked, p.name_normalized,
      CASE
        WHEN v_query_name IS NULL AND v_query_id IS NULL THEN 0::smallint
        WHEN v_query_id IS NOT NULL AND p.barcode_normalized = v_query_id THEN 1::smallint
        WHEN v_query_id IS NOT NULL AND p.sku_normalized = v_query_id THEN 2::smallint
        WHEN v_query_name IS NOT NULL AND p.name_normalized = v_query_name THEN 3::smallint
        WHEN v_query_name IS NOT NULL AND length(p.name_normalized) >= length(v_query_name)
             AND left(p.name_normalized, length(v_query_name)) = v_query_name THEN 4::smallint
        WHEN v_query_name IS NOT NULL AND strpos(p.name_normalized, v_query_name) > 0 THEN 5::smallint
        ELSE NULL::smallint
      END AS match_rank
    FROM public.catalog_products p
    WHERE p.business_id = v_business
      AND (p_include_archived OR p.status = 'active')
      AND (p_category_id IS NULL OR p.category_id = p_category_id)
  )
  SELECT c.id, c.name, c.sku, c.barcode, c.category_id, c.selling_unit, c.current_selling_price,
         c.status, c.is_stock_tracked, c.match_rank, c.name_normalized
    FROM candidates c
   WHERE c.match_rank IS NOT NULL
     AND (
       p_cursor_match_rank IS NULL OR
       (c.match_rank, c.name_normalized, c.id) > (p_cursor_match_rank, p_cursor_name_normalized, p_cursor_id)
     )
   ORDER BY c.match_rank ASC, c.name_normalized ASC, c.id ASC
   LIMIT p_limit;
END;
$$;

-- =============================================================================
-- 18. catalog_product_read (catalog_read_executor)
-- =============================================================================
-- Phase 1 hardcodes cost visibility to true for any successfully-authorized
-- Owner caller -- this is the exact point a future Phase 2a permission
-- check would plug in, without building any permission engine now.
CREATE OR REPLACE FUNCTION catalog_internal.build_product_detail_base(p_product public.catalog_products)
RETURNS jsonb
LANGUAGE sql
STABLE
SET search_path = ''
AS $$
  SELECT jsonb_build_object(
    'id', p_product.id,
    'name', p_product.name,
    'description', p_product.description,
    'category_id', p_product.category_id,
    'sku', p_product.sku,
    'barcode', p_product.barcode,
    'selling_unit', p_product.selling_unit,
    'current_selling_price', p_product.current_selling_price,
    'tax_treatment', p_product.tax_treatment,
    'tax_rate_percent', p_product.tax_rate_percent,
    'inventory_item_id', p_product.inventory_item_id,
    'inventory_link_established_at', p_product.inventory_link_established_at,
    'status', p_product.status,
    'created_at', p_product.created_at,
    'updated_at', p_product.updated_at,
    'history', COALESCE((
      SELECT jsonb_agg(h.entry ORDER BY h.recorded_at DESC) FROM (
        SELECT recorded_at, jsonb_build_object(
                 'type', 'selling_price', 'previous_price', previous_price, 'new_price', new_price,
                 'source', source, 'recorded_at', recorded_at) AS entry
          FROM public.catalog_selling_price_events
         WHERE product_id = p_product.id AND business_id = p_product.business_id
        UNION ALL
        SELECT recorded_at, jsonb_build_object(
                 'type', 'tax', 'previous_treatment', previous_treatment, 'previous_rate_percent', previous_rate_percent,
                 'new_treatment', new_treatment, 'new_rate_percent', new_rate_percent, 'recorded_at', recorded_at) AS entry
          FROM public.catalog_tax_events
         WHERE product_id = p_product.id AND business_id = p_product.business_id
      ) h
    ), '[]'::jsonb)
  );
$$;

CREATE OR REPLACE FUNCTION catalog_internal.build_product_detail_with_cost(p_product public.catalog_products)
RETURNS jsonb
LANGUAGE sql
STABLE
SET search_path = ''
AS $$
  SELECT catalog_internal.build_product_detail_base(p_product)
    || jsonb_build_object('current_reference_cost', p_product.current_reference_cost)
    || jsonb_build_object('history', COALESCE((
      SELECT jsonb_agg(h.entry ORDER BY h.recorded_at DESC) FROM (
        SELECT recorded_at, jsonb_build_object(
                 'type', 'selling_price', 'previous_price', previous_price, 'new_price', new_price,
                 'source', source, 'recorded_at', recorded_at) AS entry
          FROM public.catalog_selling_price_events
         WHERE product_id = p_product.id AND business_id = p_product.business_id
        UNION ALL
        SELECT recorded_at, jsonb_build_object(
                 'type', 'tax', 'previous_treatment', previous_treatment, 'previous_rate_percent', previous_rate_percent,
                 'new_treatment', new_treatment, 'new_rate_percent', new_rate_percent, 'recorded_at', recorded_at) AS entry
          FROM public.catalog_tax_events
         WHERE product_id = p_product.id AND business_id = p_product.business_id
        UNION ALL
        SELECT recorded_at, jsonb_build_object(
                 'type', 'reference_cost', 'previous_cost', previous_cost, 'new_cost', new_cost,
                 'recorded_at', recorded_at) AS entry
          FROM public.catalog_reference_cost_events
         WHERE product_id = p_product.id AND business_id = p_product.business_id
      ) h
    ), '[]'::jsonb));
$$;

REVOKE ALL ON FUNCTION catalog_internal.build_product_detail_base(public.catalog_products) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION catalog_internal.build_product_detail_with_cost(public.catalog_products) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION catalog_internal.build_product_detail_base(public.catalog_products) TO catalog_read_executor;
GRANT EXECUTE ON FUNCTION catalog_internal.build_product_detail_with_cost(public.catalog_products) TO catalog_read_executor;

CREATE OR REPLACE FUNCTION public.catalog_product_read(
  p_product_id uuid
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
  v_product public.catalog_products;
BEGIN
  IF v_actor IS NOT NULL THEN
    v_business := catalog_internal.resolve_owner_business(v_actor);
  END IF;

  IF v_business IS NOT NULL THEN
    SELECT * INTO v_product FROM public.catalog_products
     WHERE id = p_product_id AND business_id = v_business;
  END IF;

  -- Unauthenticated caller and nonexistent/foreign product both produce the
  -- same NULL result -- no existence-leaking branch.
  IF v_product.id IS NULL THEN
    RETURN NULL;
  END IF;

  RETURN catalog_internal.build_product_detail_with_cost(v_product);
END;
$$;

-- =============================================================================
-- 19. catalog_products_list_batch (catalog_read_executor)
-- =============================================================================
CREATE OR REPLACE FUNCTION public.catalog_products_list_batch(
  p_product_ids uuid[]
) RETURNS SETOF public.catalog_product_summary
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = ''
AS $$
DECLARE
  v_actor uuid := auth.uid();
  v_business uuid;
BEGIN
  IF v_actor IS NOT NULL THEN
    v_business := catalog_internal.resolve_owner_business(v_actor);
  END IF;
  IF v_business IS NULL THEN
    RETURN;
  END IF;

  IF p_product_ids IS NULL OR array_length(p_product_ids, 1) IS NULL THEN
    RETURN;
  END IF;

  IF array_length(p_product_ids, 1) > 100 THEN
    RAISE EXCEPTION 'INVALID_INPUT: p_product_ids exceeds the maximum batch size of 100';
  END IF;

  -- Cross-business or nonexistent ids are silently excluded from the
  -- result set, never individually erroring or leaking existence.
  RETURN QUERY
  SELECT p.id, p.name, p.sku, p.barcode, p.category_id, p.selling_unit, p.current_selling_price,
         p.status::text, (p.inventory_item_id IS NOT NULL), NULL::smallint, p.name_normalized
    FROM public.catalog_products p
   WHERE p.business_id = v_business
     AND p.id = ANY (p_product_ids);
END;
$$;

-- =============================================================================
-- 20. Grants, revocations, and ownership transfer for all nineteen functions
-- =============================================================================
-- Default privileges (20260727000000_reconcile_default_grants.sql) grant
-- EXECUTE on every new function to anon, authenticated, service_role. Each
-- function below has its PUBLIC and anon default EXECUTE explicitly
-- neutralized, then is given exactly one narrow additional grant: EXECUTE
-- to authenticated (every command re-derives auth.uid() internally and is
-- safe to expose broadly; anon is never granted). service_role is left
-- untouched, matching the same principle applied to every table and
-- catalog_internal helper in Stage 1 -- it already holds BYPASSRLS at the
-- platform level, and none of these commands behave usefully called
-- without an authenticated user context anyway (auth.uid() resolves NULL,
-- so every command deterministically returns PERMISSION_DENIED). Ownership
-- is then transferred to the function's designated executor role
-- (report1.37.md Section 8) so SECURITY DEFINER runs as that narrow role,
-- not postgres.

REVOKE ALL ON FUNCTION public.create_catalog_product(uuid, text, text, uuid, text, text, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_catalog_product_identity(uuid, uuid, text, text, uuid, text, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_catalog_product_unit(uuid, uuid, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.create_catalog_category(uuid, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.archive_catalog_category(uuid, uuid, boolean) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.archive_catalog_product(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.reactivate_catalog_product(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.delete_catalog_product(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.record_catalog_selling_price_change(uuid, uuid, numeric) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.record_catalog_tax_change(uuid, uuid, text, numeric) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_business_tax_settings(uuid, text, numeric) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.record_catalog_reference_cost_change(uuid, uuid, numeric) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.preview_catalog_inventory_link_change(uuid, text, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.assign_or_replace_catalog_inventory_link(uuid, uuid, numeric) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.remove_catalog_inventory_link(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.get_catalog_command_outcome(text, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.catalog_products_search(text, boolean, uuid, integer, smallint, text, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.catalog_product_read(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.catalog_products_list_batch(uuid[]) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.create_catalog_product(uuid, text, text, uuid, text, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.update_catalog_product_identity(uuid, uuid, text, text, uuid, text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.update_catalog_product_unit(uuid, uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.create_catalog_category(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.archive_catalog_category(uuid, uuid, boolean) TO authenticated;
GRANT EXECUTE ON FUNCTION public.archive_catalog_product(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.reactivate_catalog_product(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.delete_catalog_product(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.record_catalog_selling_price_change(uuid, uuid, numeric) TO authenticated;
GRANT EXECUTE ON FUNCTION public.record_catalog_tax_change(uuid, uuid, text, numeric) TO authenticated;
GRANT EXECUTE ON FUNCTION public.update_business_tax_settings(uuid, text, numeric) TO authenticated;
GRANT EXECUTE ON FUNCTION public.record_catalog_reference_cost_change(uuid, uuid, numeric) TO authenticated;
GRANT EXECUTE ON FUNCTION public.preview_catalog_inventory_link_change(uuid, text, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.assign_or_replace_catalog_inventory_link(uuid, uuid, numeric) TO authenticated;
GRANT EXECUTE ON FUNCTION public.remove_catalog_inventory_link(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_catalog_command_outcome(text, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.catalog_products_search(text, boolean, uuid, integer, smallint, text, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.catalog_product_read(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.catalog_products_list_batch(uuid[]) TO authenticated;

-- Ownership transfer: SECURITY DEFINER executes as the function owner, so
-- each command now runs as its narrow, NOLOGIN executor role rather than
-- postgres (report1.37.md Section 8 executor matrix).
ALTER FUNCTION public.create_catalog_product(uuid, text, text, uuid, text, text, text) OWNER TO catalog_identity_executor;
ALTER FUNCTION public.update_catalog_product_identity(uuid, uuid, text, text, uuid, text, text) OWNER TO catalog_identity_executor;
ALTER FUNCTION public.update_catalog_product_unit(uuid, uuid, text) OWNER TO catalog_identity_executor;
ALTER FUNCTION public.create_catalog_category(uuid, text) OWNER TO catalog_identity_executor;
ALTER FUNCTION public.archive_catalog_category(uuid, uuid, boolean) OWNER TO catalog_identity_executor;

ALTER FUNCTION public.archive_catalog_product(uuid, uuid) OWNER TO catalog_lifecycle_executor;
ALTER FUNCTION public.reactivate_catalog_product(uuid, uuid) OWNER TO catalog_lifecycle_executor;
ALTER FUNCTION public.delete_catalog_product(uuid, uuid) OWNER TO catalog_lifecycle_executor;

ALTER FUNCTION public.record_catalog_selling_price_change(uuid, uuid, numeric) OWNER TO catalog_pricing_executor;

ALTER FUNCTION public.record_catalog_tax_change(uuid, uuid, text, numeric) OWNER TO catalog_tax_executor;
ALTER FUNCTION public.update_business_tax_settings(uuid, text, numeric) OWNER TO catalog_tax_executor;

ALTER FUNCTION public.record_catalog_reference_cost_change(uuid, uuid, numeric) OWNER TO catalog_cost_executor;

ALTER FUNCTION public.preview_catalog_inventory_link_change(uuid, text, uuid) OWNER TO catalog_link_executor;
ALTER FUNCTION public.assign_or_replace_catalog_inventory_link(uuid, uuid, numeric) OWNER TO catalog_link_executor;
ALTER FUNCTION public.remove_catalog_inventory_link(uuid, uuid) OWNER TO catalog_link_executor;

ALTER FUNCTION public.get_catalog_command_outcome(text, uuid) OWNER TO catalog_read_executor;
ALTER FUNCTION public.catalog_products_search(text, boolean, uuid, integer, smallint, text, uuid) OWNER TO catalog_read_executor;
ALTER FUNCTION public.catalog_product_read(uuid) OWNER TO catalog_read_executor;
ALTER FUNCTION public.catalog_products_list_batch(uuid[]) OWNER TO catalog_read_executor;

-- =============================================================================
-- 21. Sanity assertions
-- =============================================================================
-- Exactly nineteen public catalog command functions exist, each owned by
-- its designated executor -- never postgres, never a mismatched executor,
-- never a twentieth function.
DO $$
DECLARE
  v_count integer;
BEGIN
  SELECT count(*) INTO v_count
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    JOIN pg_roles r ON r.oid = p.proowner
   WHERE n.nspname = 'public'
     AND r.rolname LIKE 'catalog_%_executor'
     AND p.proname IN (
       'create_catalog_product','update_catalog_product_identity','update_catalog_product_unit',
       'create_catalog_category','archive_catalog_category',
       'archive_catalog_product','reactivate_catalog_product','delete_catalog_product',
       'record_catalog_selling_price_change',
       'record_catalog_tax_change','update_business_tax_settings',
       'record_catalog_reference_cost_change',
       'preview_catalog_inventory_link_change','assign_or_replace_catalog_inventory_link','remove_catalog_inventory_link',
       'get_catalog_command_outcome','catalog_products_search','catalog_product_read','catalog_products_list_batch'
     );
  IF v_count <> 19 THEN
    RAISE EXCEPTION 'Expected exactly 19 executor-owned public catalog command functions, found %', v_count;
  END IF;
END $$;
