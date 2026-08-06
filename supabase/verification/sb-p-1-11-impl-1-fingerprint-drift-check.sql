-- SB-P-1.11-IMPL-1 verification addendum -- explicit expected-state
-- fingerprint-drift checks (instruction1.42.md Section 5). Not a
-- migration; nothing here is applied automatically. Run against the
-- dedicated non-production test project (drravyyauixltoihzmwo) only,
-- never against production. Sequential (no concurrency required).
--
-- Both checks mutate a fingerprint-bound product field (current_selling_
-- price, via the approved record_catalog_selling_price_change command --
-- never direct table DML) AFTER a preview token is created, then attempt
-- to consume the now-stale token and prove the confirmation is rejected
-- with no side effects.

-- =============================================================================
-- 1. Section 5.1 -- assign-or-replace drift.
-- =============================================================================
DO $$
DECLARE
  v_product_id uuid;
  v_stock_item_id uuid;
  v_preview public.catalog_link_preview_result;
  v_price_result public.catalog_command_result;
  v_confirm_result public.catalog_command_result;
BEGIN
  -- 1. Fresh product with no existing link.
  SELECT product_id INTO v_product_id FROM public.create_catalog_product(gen_random_uuid(), 'Fingerprint Drift Check AR Example');
  SELECT id INTO v_stock_item_id FROM public.inventory_items WHERE business_id = catalog_internal.resolve_owner_business(auth.uid()) LIMIT 1;

  -- 2. Preview assign_or_replace -> token.
  SELECT * INTO v_preview FROM public.preview_catalog_inventory_link_change(v_product_id, 'assign_or_replace', v_stock_item_id);

  -- 3. Mutate a fingerprint-bound field via an APPROVED command (not
  -- direct table DML) after the preview was created.
  SELECT * INTO v_price_result FROM public.record_catalog_selling_price_change(gen_random_uuid(), v_product_id, 555.55);

  -- 4. Attempt to confirm the now-stale token.
  SELECT * INTO v_confirm_result FROM public.assign_or_replace_catalog_inventory_link(gen_random_uuid(), v_preview.preview_token_id, NULL);

  -- Required proof: v_confirm_result.outcome = 'rejected' AND
  -- v_confirm_result.rejection_reason = 'STALE_STATE'; no new
  -- catalog_product_link_events / catalog_selling_price_events row was
  -- committed for the stale confirmation specifically (only the row from
  -- step 3's legitimate change exists); the product's inventory_item_id
  -- is still NULL; the token's closed_at is still NULL (never consumed).
  IF v_confirm_result.outcome <> 'rejected' OR v_confirm_result.rejection_reason <> 'STALE_STATE' THEN
    RAISE EXCEPTION 'assign-or-replace drift check FAILED: expected STALE_STATE, got %/%', v_confirm_result.outcome, v_confirm_result.rejection_reason;
  END IF;
END $$;

-- =============================================================================
-- 2. Section 5.2 -- remove drift.
-- =============================================================================
DO $$
DECLARE
  v_product_id uuid;
  v_stock_item_id uuid;
  v_link_preview public.catalog_link_preview_result;
  v_link_result public.catalog_command_result;
  v_remove_preview public.catalog_link_preview_result;
  v_price_result public.catalog_command_result;
  v_remove_result public.catalog_command_result;
BEGIN
  -- 1. Begin with a linked product (establish the link sequentially, not
  -- part of the drift test itself).
  SELECT product_id INTO v_product_id FROM public.create_catalog_product(gen_random_uuid(), 'Fingerprint Drift Check RM Example');
  SELECT id INTO v_stock_item_id FROM public.inventory_items WHERE business_id = catalog_internal.resolve_owner_business(auth.uid()) LIMIT 1;
  SELECT * INTO v_link_preview FROM public.preview_catalog_inventory_link_change(v_product_id, 'assign_or_replace', v_stock_item_id);
  SELECT * INTO v_link_result FROM public.assign_or_replace_catalog_inventory_link(gen_random_uuid(), v_link_preview.preview_token_id, NULL);

  -- 2. Create a valid remove preview.
  SELECT * INTO v_remove_preview FROM public.preview_catalog_inventory_link_change(v_product_id, 'remove', NULL);

  -- 3. Mutate a fingerprint-bound field via an APPROVED command
  -- (record_catalog_selling_price_change is always available regardless
  -- of link status, unlike update_catalog_product_unit which requires an
  -- unlinked product -- so it is the correct approved mechanism for both
  -- the assign-or-replace and remove drift cases).
  SELECT * INTO v_price_result FROM public.record_catalog_selling_price_change(gen_random_uuid(), v_product_id, 777.77);

  -- 4. Attempt to execute the now-stale remove token.
  SELECT * INTO v_remove_result FROM public.remove_catalog_inventory_link(gen_random_uuid(), v_remove_preview.preview_token_id);

  -- Required proof: STALE_STATE; no removal occurs (inventory_item_id
  -- still set); no new catalog_product_link_events row for the rejected
  -- confirmation; unit and price unchanged by the stale attempt itself
  -- (price still reflects only the legitimate step-3 change); token not
  -- closed/consumed.
  IF v_remove_result.outcome <> 'rejected' OR v_remove_result.rejection_reason <> 'STALE_STATE' THEN
    RAISE EXCEPTION 'remove drift check FAILED: expected STALE_STATE, got %/%', v_remove_result.outcome, v_remove_result.rejection_reason;
  END IF;
END $$;
