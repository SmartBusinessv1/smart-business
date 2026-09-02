-- SB-OPS-PROD-SYNC-1.0 instruction1.7 -- controlled, narrow production
-- repair of the single known Product <-> Inventory corruption: Catalog
-- products `Mango` and `Milma Milk` (business `Bhai Store`,
-- e158fed3-b7ec-4f0f-9797-319ef25702f6) both reference the same
-- Inventory item, `AVT Tea Powder`. Founder/Mission Control
-- interpretation (instruction1.7 §3): neither product owns that
-- identity; each must end with its own dedicated Inventory item, and
-- the controlled `+5` runtime-test Opening Stock movement created
-- during Step-4 verification must not become merchant stock for
-- either product.
--
-- Why this cannot go through the ordinary D-068 merchant flow
-- (preview_catalog_inventory_link_change / assign_or_replace_catalog_
-- inventory_link / remove_catalog_inventory_link): both products were
-- linked to AVT Tea Powder before the one movement on that item was
-- recorded (Milma Milk 2026-08-09T11:49:17Z, Mango 2026-08-15T20:42:13Z,
-- movement 2026-09-02T09:47:15Z), so the existing D-047 dependent-
-- history guard correctly rejects a plain unlink for both -- it cannot
-- distinguish "this link was a data-entry bug" from "this is real
-- history to protect", and it should not be weakened to make that
-- distinction for ordinary merchant workflows. See report1.6.md Phase C
-- and report1.7.md for the full analysis.
--
-- Design: a single precondition-guarded DO block. Every precondition
-- below was independently re-verified via a read-only production query
-- immediately before this file was authorized to run (report1.7.md).
-- Re-verified again here, in-transaction, immediately before any write,
-- exactly matching instruction1.7 Phase 2's requirement -- if any of
-- them no longer holds, this RAISE EXCEPTIONs and the entire migration
-- rolls back with zero effect, rather than silently proceeding against
-- a changed runtime state.
--
-- What is reused from the existing governed command surface rather than
-- invented: the corrective movement is written through the existing,
-- unmodified create_inventory_movement RPC itself (not a raw INSERT),
-- by simulating the business owner's own authenticated context via
-- request.jwt.claims for the duration of this transaction -- so every
-- one of that RPC's own business-rule checks (correction direction must
-- oppose the original, quantity must not exceed the remaining
-- compensable amount, non-future dating, idempotency) is enforced on
-- this write exactly as it would be for any ordinary merchant
-- correction. The two new dedicated Inventory items are created via a
-- plain insert into inventory_items, the same mechanism
-- createInventoryItem (starter-supab-shell) already uses for every
-- ordinary "New item" / "Start tracking stock" action.
--
-- What could not be made to go through the existing governed link
-- command surface, and why: catalog_product_link_events.preview_token_id
-- is NOT NULL, referencing catalog_link_preview_tokens -- there is no
-- honest way to produce one here, since the only function that mints
-- one (preview_catalog_inventory_link_change) would itself reject this
-- exact change via D-047. Fabricating a token or a link_events row
-- would misrepresent how this change happened, so none was written.
-- catalog_audit_events has no such NOT NULL dependency and was used
-- instead (see below) -- but note its executed_by_actor_type, channel,
-- and authority_basis columns are each CHECK-constrained to a single
-- fixed value ('user', 'dashboard', 'owner_via_businesses.owner_id'
-- respectively) with no accommodation for an administrative/migration
-- actor. That is a genuine, pre-existing schema limitation, not
-- something this narrow instruction is authorized to redesign; the true
-- provenance of this change is fully and permanently recorded in this
-- migration file itself (version-controlled, deployed through the
-- standard production migration mechanism) and in report1.7.md, not in
-- those three columns.
--
-- Rehearsed in full against the isolated smart-business-test project
-- (drravyyauixltoihzmwo) with a synthetic mirror of this exact scenario
-- before being run here, then rolled back with zero residue confirmed
-- (report1.7.md).
--
-- Explicitly NOT done here (out of scope for this instruction):
-- Phase B UNIQUE (business_id, inventory_item_id) is not authored,
-- restored, or executed by this file. D-047 is not weakened or removed
-- for any ordinary merchant workflow. No other product, item, movement,
-- business, RLS policy, grant, or Auth setting is touched.

DO $$
DECLARE
  v_business_id uuid := 'e158fed3-b7ec-4f0f-9797-319ef25702f6';
  v_owner_id uuid := '930d41a1-2011-47a0-99f9-777b9164b074';
  v_mango_id uuid := 'e778f555-76f3-4300-8305-f6795addab84';
  v_milma_id uuid := '0c106cab-f573-4e0a-9492-0bd8793f7a52';
  v_avt_item_id uuid := '9cdd9e23-49b5-4788-a454-7e32f342d436';
  v_opening_movement_id uuid := '1bdf7f8a-5135-4043-8136-e5a8445ec32c';
  v_mango_item_id uuid;
  v_milma_item_id uuid;
  v_system_run_id uuid := gen_random_uuid();
BEGIN
  -- Precondition 1: business and owner match exactly.
  PERFORM 1 FROM public.businesses
   WHERE id = v_business_id AND owner_id = v_owner_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: business/owner mismatch';
  END IF;

  -- Precondition 2: Mango matches exactly (id, business, name, status, link).
  PERFORM 1 FROM public.catalog_products
   WHERE id = v_mango_id AND business_id = v_business_id AND name = 'Mango'
     AND status = 'active' AND inventory_item_id = v_avt_item_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: Mango row does not match expected state';
  END IF;

  -- Precondition 3: Milma Milk matches exactly.
  PERFORM 1 FROM public.catalog_products
   WHERE id = v_milma_id AND business_id = v_business_id AND name = 'Milma Milk'
     AND status = 'active' AND inventory_item_id = v_avt_item_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: Milma Milk row does not match expected state';
  END IF;

  -- Precondition 4: AVT Tea Powder item matches exactly.
  PERFORM 1 FROM public.inventory_items
   WHERE id = v_avt_item_id AND business_id = v_business_id AND name = 'AVT Tea Powder'
     AND base_unit = 'Packet' AND status = 'active';
  IF NOT FOUND THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: AVT Tea Powder item does not match expected state';
  END IF;

  -- Precondition 5: exactly Mango and Milma Milk reference this item --
  -- no additional product has started sharing it since report1.7.md's
  -- read.
  IF (SELECT count(*) FROM public.catalog_products WHERE inventory_item_id = v_avt_item_id) <> 2 THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: unexpected number of products reference AVT Tea Powder item';
  END IF;
  IF EXISTS (
    SELECT 1 FROM public.catalog_products
     WHERE inventory_item_id = v_avt_item_id AND id NOT IN (v_mango_id, v_milma_id)
  ) THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: an unexpected product references AVT Tea Powder item';
  END IF;

  -- Precondition 6: exactly one movement on this item, matching the
  -- known controlled test movement exactly -- no additional movement
  -- has been recorded since.
  IF (SELECT count(*) FROM public.inventory_movements WHERE item_id = v_avt_item_id) <> 1 THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: unexpected movement count on AVT Tea Powder item';
  END IF;
  PERFORM 1 FROM public.inventory_movements
   WHERE id = v_opening_movement_id AND item_id = v_avt_item_id AND business_id = v_business_id
     AND movement_type = 'opening_stock' AND direction = 'increase' AND quantity = 5
     AND reason = 'Opening stock bulk import';
  IF NOT FOUND THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: controlled test movement does not match expected state';
  END IF;

  -- Precondition 7: no Catalog product literally named 'AVT Tea Powder'
  -- exists in this business (instruction1.7 §3).
  IF EXISTS (SELECT 1 FROM public.catalog_products WHERE business_id = v_business_id AND name = 'AVT Tea Powder') THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: a Catalog product named AVT Tea Powder already exists';
  END IF;

  -- Precondition 8: no existing Inventory item named 'Mango' or
  -- 'Milma Milk' to collide with (instruction1.7 §3).
  IF EXISTS (SELECT 1 FROM public.inventory_items WHERE business_id = v_business_id AND name IN ('Mango', 'Milma Milk')) THEN
    RAISE EXCEPTION 'instr1.7 repair precondition failed: an Inventory item named Mango or Milma Milk already exists';
  END IF;

  -- All preconditions confirmed against live production state. Proceed.

  -- Step 1/2: fresh, dedicated Inventory items -- no invented Opening
  -- Stock (instruction1.7 §4.6). Same insert pattern createInventoryItem
  -- already uses for every ordinary "New item" action.
  INSERT INTO public.inventory_items (business_id, name, base_unit, created_by)
  VALUES (v_business_id, 'Mango', 'Packet', v_owner_id)
  RETURNING id INTO v_mango_item_id;

  INSERT INTO public.inventory_items (business_id, name, base_unit, created_by)
  VALUES (v_business_id, 'Milma Milk', 'Packet', v_owner_id)
  RETURNING id INTO v_milma_item_id;

  -- Step 3: point Mango at its own new item. Direct UPDATE, not
  -- assign_or_replace_catalog_inventory_link -- see header comment for
  -- why the governed RPC path is not usable here and D-047 is not
  -- weakened to make it usable.
  UPDATE public.catalog_products
     SET inventory_item_id = v_mango_item_id, inventory_link_established_at = now()
   WHERE id = v_mango_id AND business_id = v_business_id;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id, system_run_id)
  VALUES (
    v_business_id, 'catalog_product', v_mango_id, 'inventory_link_replaced',
    jsonb_build_object(
      'before', jsonb_build_object('inventory_item_id', v_avt_item_id, 'selling_unit', 'Packet'),
      'after', jsonb_build_object('inventory_item_id', v_mango_item_id, 'selling_unit', 'Packet')
    ),
    v_owner_id, v_system_run_id
  );

  -- Step 4: point Milma Milk at its own new item.
  UPDATE public.catalog_products
     SET inventory_item_id = v_milma_item_id, inventory_link_established_at = now()
   WHERE id = v_milma_id AND business_id = v_business_id;

  INSERT INTO public.catalog_audit_events
    (business_id, entity_type, entity_id, change_type, change_payload, authorized_by_user_id, system_run_id)
  VALUES (
    v_business_id, 'catalog_product', v_milma_id, 'inventory_link_replaced',
    jsonb_build_object(
      'before', jsonb_build_object('inventory_item_id', v_avt_item_id, 'selling_unit', 'Packet'),
      'after', jsonb_build_object('inventory_item_id', v_milma_item_id, 'selling_unit', 'Packet')
    ),
    v_owner_id, v_system_run_id
  );

  -- Step 5: neutralize the controlled +5 runtime-test movement with an
  -- auditable, history-preserving correction, through the existing
  -- governed create_inventory_movement RPC itself (instruction1.7 §4.1
  -- prefers this over silently erasing history). The original movement
  -- is not deleted or modified -- it remains, permanently, exactly as
  -- it was recorded; this correction is a second, linked row that nets
  -- the item's stock to zero.
  PERFORM set_config('request.jwt.claims', jsonb_build_object('sub', v_owner_id::text)::text, true);

  PERFORM public.create_inventory_movement(
    gen_random_uuid(),
    'sb_ops_prod_sync_1_0_instr1_7_repair_correction',
    v_avt_item_id,
    'correction',
    'decrease',
    5,
    'Administrative correction (SB-OPS-PROD-SYNC-1.0 instruction1.7): this Opening Stock was a controlled Founder runtime test, not real merchant stock. Neutralized while separating Mango and Milma Milk into their own dedicated Inventory identities; the original movement is preserved unchanged.',
    now(),
    v_opening_movement_id,
    false,
    NULL,
    NULL
  );

  -- Final in-transaction assertions -- re-verify the exact state this
  -- repair promises, not merely that no exception was raised along the
  -- way.
  IF (SELECT inventory_item_id FROM public.catalog_products WHERE id = v_mango_id) IS DISTINCT FROM v_mango_item_id THEN
    RAISE EXCEPTION 'instr1.7 repair post-check failed: Mango not pointed at its new item';
  END IF;
  IF (SELECT inventory_item_id FROM public.catalog_products WHERE id = v_milma_id) IS DISTINCT FROM v_milma_item_id THEN
    RAISE EXCEPTION 'instr1.7 repair post-check failed: Milma Milk not pointed at its new item';
  END IF;
  IF v_mango_item_id = v_milma_item_id THEN
    RAISE EXCEPTION 'instr1.7 repair post-check failed: Mango and Milma Milk ended up on the same item';
  END IF;
  IF EXISTS (SELECT 1 FROM public.catalog_products WHERE inventory_item_id = v_avt_item_id) THEN
    RAISE EXCEPTION 'instr1.7 repair post-check failed: a product still references AVT Tea Powder';
  END IF;
  IF (
    SELECT coalesce(sum(CASE WHEN direction = 'increase' THEN quantity ELSE -quantity END), 0)
    FROM public.inventory_movements WHERE item_id = v_avt_item_id
  ) <> 0 THEN
    RAISE EXCEPTION 'instr1.7 repair post-check failed: AVT Tea Powder net stock is not zero after correction';
  END IF;
  IF EXISTS (SELECT 1 FROM public.inventory_movements WHERE item_id = v_mango_item_id) THEN
    RAISE EXCEPTION 'instr1.7 repair post-check failed: Mango''s new item unexpectedly has movement history';
  END IF;
  IF EXISTS (SELECT 1 FROM public.inventory_movements WHERE item_id = v_milma_item_id) THEN
    RAISE EXCEPTION 'instr1.7 repair post-check failed: Milma Milk''s new item unexpectedly has movement history';
  END IF;
END $$;
