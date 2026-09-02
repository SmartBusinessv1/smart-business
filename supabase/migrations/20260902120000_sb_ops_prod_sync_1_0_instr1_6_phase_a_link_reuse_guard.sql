-- SB-OPS-PROD-SYNC-1.0 instruction1.6 Phase A -- server-side reuse guard.
--
-- Closes the gap identified in report1.5.md: assign_or_replace_catalog_
-- inventory_link performed no check that its target Inventory item was
-- not already the dedicated identity of a different Catalog product in
-- the same business. The starter-supab-shell#4 UI-layer fix (removing
-- the merchant-facing item picker) closed the standard UI path, but a
-- direct or concurrent governed RPC call could still produce the same
-- many-products-to-one-item state -- exactly how `Mango` and
-- `Milma Milk` both ended up referencing `AVT Tea Powder`.
--
-- This migration replaces two existing functions in place (their
-- signatures and return shapes are unchanged; only added logic).
-- Neither change touches existing data or any constraint, so it is
-- deployment-order-independent of the known Mango/Milma Milk duplicate:
-- it only affects link attempts made after it is applied, and it does
-- not retroactively re-validate rows that already exist. It is safe to
-- deploy before the duplicate is repaired (see Phase B/Phase C in
-- report1.6.md for the schema-level guarantee and the repair handoff,
-- which are deliberately NOT part of this file).
--
-- Deployment ordering: this file has no dependency on the Phase B
-- uniqueness migration or on the Phase C repair; it may be applied on
-- its own, at any time, to either database in the project-ref map in
-- scripts/supabase-cli.mjs. Applying it against production still
-- requires its own new, explicit execution authorization per
-- docs/migration/README.md -- authoring and isolated-test-project
-- verification here creates no such authorization.
--
-- Lifecycle predicate (documented per instruction1.6 Phase B's request
-- to determine, not assume, how archived rows interact): this reuse
-- guard treats ANY other catalog_products row in the business that
-- already references the target item -- active or archived -- as a
-- conflict. This mirrors the existing, deliberate policy already
-- documented on this exact table for name/SKU/barcode uniqueness
-- ("Archived identities remain reserved: plain, non-partial
-- constraints", 20260806120000_sb_p_1_11_impl_1_stage1_schema.sql) and
-- is chosen for consistency with that precedent, and so this
-- application-level guard can never accept a case Phase B's schema-level
-- constraint would later reject (or vice versa).
--
-- Ownership note (verified directly against the test project, not
-- assumed): both functions below are owned by catalog_link_executor
-- (20260806130000_sb_p_1_11_impl_1_stage2_functions.sql), matching this
-- codebase's SECURITY DEFINER executor-role model. `postgres` (the role
-- migrations run as) already carries a baseline membership in
-- catalog_link_executor -- granted by supabase_admin, not by this or any
-- other repository migration -- but with inherit_option = false, so that
-- membership alone does not let `postgres` CREATE OR REPLACE a function
-- catalog_link_executor owns (confirmed: attempting it without the grant
-- below fails with "must be owner of function ..."). Unlike the bare
-- `GRANT role TO postgres;` used by the 20260811090000 security
-- correction (sufficient there because no conflicting non-inheriting
-- baseline grant existed yet for that particular role), this migration
-- grants WITH INHERIT TRUE explicitly, so it does not depend on which
-- grant edge happens to already exist. The REVOKE immediately afterward
-- removes only this migration's own self-granted edge (verified
-- directly: PG17 tracks multiple grants of the same role to the same
-- member separately by grantor, and a bare REVOKE by the same session
-- that issued the GRANT removes only that session's own edge) --
-- Supabase's own separate supabase_admin-granted baseline is left
-- exactly as it was found, both before and after this migration runs.
GRANT catalog_link_executor TO postgres WITH INHERIT TRUE;

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
  v_actor uuid := catalog_internal.current_actor_uid();
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

    -- instruction1.6 Phase A -- reuse guard (early merchant feedback
    -- only; the authoritative, concurrency-safe check is in
    -- assign_or_replace_catalog_inventory_link, run again immediately
    -- before the write). See this file's header for the chosen
    -- lifecycle predicate and its rationale.
    IF EXISTS (
      SELECT 1 FROM public.catalog_products
       WHERE business_id = v_business
         AND inventory_item_id = p_target_inventory_item_id
         AND id <> v_product.id
    ) THEN
      RETURN ROW('rejected', 'UNIQUENESS_CONFLICT', NULL, p_requested_action, v_product.inventory_item_id,
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
  v_actor uuid := catalog_internal.current_actor_uid();
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

  -- instruction1.6 Phase A -- authoritative, concurrency-safe reuse
  -- guard. The check in preview_catalog_inventory_link_change is only
  -- advisory (early merchant feedback); this is the check that actually
  -- protects the write, so a stale preview or a second confirm racing
  -- against this one cannot both succeed. Locked on (business, target
  -- item), not on the idempotency key -- two different in-flight link
  -- attempts each carry their own idempotency key, so the lock taken
  -- above does not serialize them against each other. Only relevant for
  -- assign_or_replace tokens; a 'remove' token never carries a target.
  IF v_token.requested_action = 'assign_or_replace' AND v_token.target_inventory_item_id IS NOT NULL THEN
    PERFORM pg_advisory_xact_lock(
      catalog_internal.idempotency_lock_key(
        v_business, 'assign_or_replace_catalog_inventory_link:reuse_guard', v_token.target_inventory_item_id));

    IF EXISTS (
      SELECT 1 FROM public.catalog_products
       WHERE business_id = v_business
         AND inventory_item_id = v_token.target_inventory_item_id
         AND id <> v_product.id
    ) THEN
      INSERT INTO public.catalog_write_idempotency_keys
        (business_id, operation, idempotency_key, payload_fingerprint, outcome_status, rejection_reason)
        VALUES (v_business, 'assign_or_replace_catalog_inventory_link', p_idempotency_key, v_fingerprint, 'rejected', 'UNIQUENESS_CONFLICT');
      RETURN ROW('rejected', 'UNIQUENESS_CONFLICT', NULL, NULL, p_idempotency_key, now())::public.catalog_command_result;
    END IF;
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

REVOKE catalog_link_executor FROM postgres;

-- Not touched by this migration, unchanged: both functions' signatures,
-- grants, or ownership; remove_catalog_inventory_link (no reuse is
-- possible on removal, so it needed no change); the Phase B schema
-- constraint (deliberately a separate file, see
-- 20260902130000_..._phase_b_inventory_item_uniqueness.sql); any
-- production data.
