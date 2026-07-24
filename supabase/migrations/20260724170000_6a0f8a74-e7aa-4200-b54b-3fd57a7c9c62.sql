-- SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0
-- Corrects create_inventory_movement()'s idempotency-replay defect: the
-- pre-existing `SELECT ... FOR UPDATE` against
-- inventory_movement_idempotency_keys, combined with that table's RLS
-- SELECT policy (a subquery-based USING clause), causes PostgreSQL's
-- planner to fold the query to a constant "no rows" result (a "One-Time
-- Filter: false" LockRows plan) regardless of whether a matching row
-- exists. Root-caused and reproduced independently via raw SQL under
-- SB-P-1.10-TESTS-1.0; see
-- docs/implementation/SB-P-1.10/evidence/tests/DEFECT-idempotency-select-for-update-rls.md.
--
-- Fix, scoped entirely to this function (no RLS policy, grant, table, or
-- signature change):
--   1. The idempotency-key lookup is now a plain SELECT (no FOR UPDATE) --
--      confirmed correct under this table's RLS policy.
--   2. The per-item advisory lock (already present, EIS Section 12's
--      designated lock target) is acquired earlier -- before the
--      idempotency lookup rather than after -- so a same-item retry that
--      races the original request is fully serialized: it blocks until
--      the original commits, and its now-unlocked lookup is then
--      guaranteed to see the committed row.
--   3. The final movement + idempotency-key insert is wrapped so a
--      same-key race from a *different* item (not covered by the
--      per-item lock) still resolves gracefully via the table's own
--      unique constraint, instead of surfacing a raw constraint-violation
--      error to the caller.
--
-- Also re-applies the SB-P-1.10-FIX-DIGEST-1.0 search_path correction
-- (SET search_path = public, extensions), since CREATE OR REPLACE
-- FUNCTION with a fresh body does not carry forward a prior standalone
-- ALTER FUNCTION ... SET search_path statement.

CREATE OR REPLACE FUNCTION public.create_inventory_movement(
  p_idempotency_key uuid,
  p_operation text,
  p_item_id uuid,
  p_movement_type public.inventory_movement_type,
  p_direction public.inventory_direction,
  p_quantity numeric,
  p_reason text,
  p_occurred_at timestamptz,
  p_correcting_of uuid,
  p_allow_negative_stock boolean,
  p_business_event_type text,
  p_business_event_id uuid
) RETURNS public.inventory_movements
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, extensions
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_item public.inventory_items;
  v_business uuid;
  v_reason text;
  v_fingerprint text;
  v_existing_key public.inventory_movement_idempotency_keys;
  v_existing_movement public.inventory_movements;
  v_orig public.inventory_movements;
  v_prior_correction_total numeric;
  v_current numeric;
  v_projected numeric;
  v_signed numeric;
  v_movement public.inventory_movements;
  v_conflict_constraint text;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  IF p_idempotency_key IS NULL THEN
    RAISE EXCEPTION 'Idempotency key is required';
  END IF;
  IF p_operation IS NULL OR btrim(p_operation) = '' THEN
    RAISE EXCEPTION 'Operation identifier is required';
  END IF;
  IF p_quantity IS NULL OR p_quantity <= 0 THEN
    RAISE EXCEPTION 'Quantity must be greater than zero';
  END IF;
  IF p_occurred_at IS NULL THEN
    RAISE EXCEPTION 'occurred_at is required';
  END IF;
  -- Reject future-dating (SB-P-1.10-CLAR-1.0 A5). Allow a small clock-skew
  -- tolerance so client-supplied timestamps rounded to the current second
  -- are accepted.
  IF p_occurred_at > now() + interval '1 minute' THEN
    RAISE EXCEPTION 'occurred_at may not be in the future';
  END IF;

  v_reason := btrim(coalesce(p_reason, ''));
  IF v_reason = '' THEN
    RAISE EXCEPTION 'Reason is required';
  END IF;

  -- Load the item under invoker RLS. Only owners see their own rows.
  SELECT * INTO v_item
    FROM public.inventory_items
   WHERE id = p_item_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Inventory item not found or not permitted';
  END IF;
  v_business := v_item.business_id;

  -- Serialize concurrent writes for the same item within this transaction.
  -- Acquired here (before the idempotency lookup, not just before the
  -- stock projection) so a same-item retry racing the original request is
  -- fully serialized -- see migration header comment.
  PERFORM pg_advisory_xact_lock(hashtextextended(p_item_id::text, 0));

  -- Payload fingerprint for idempotency conflict detection.
  v_fingerprint := encode(digest(
    coalesce(p_item_id::text, '') || '|' ||
    p_movement_type::text || '|' ||
    p_direction::text || '|' ||
    p_quantity::text || '|' ||
    v_reason || '|' ||
    coalesce(p_correcting_of::text, '') || '|' ||
    coalesce(p_business_event_type, '') || '|' ||
    coalesce(p_business_event_id::text, ''),
    'sha256'), 'hex');

  -- Idempotency: business-and-operation scoped key. Plain SELECT, no
  -- FOR UPDATE -- see migration header comment for why, and the per-item
  -- advisory lock above plus the exception handler below for how
  -- concurrent-write safety is preserved without it.
  SELECT * INTO v_existing_key
    FROM public.inventory_movement_idempotency_keys
   WHERE business_id = v_business
     AND operation = p_operation
     AND idempotency_key = p_idempotency_key;
  IF FOUND THEN
    IF v_existing_key.payload_fingerprint <> v_fingerprint THEN
      RAISE EXCEPTION 'Idempotency key conflict: request payload differs from original';
    END IF;
    SELECT * INTO v_existing_movement
      FROM public.inventory_movements
     WHERE id = v_existing_key.movement_id;
    RETURN v_existing_movement;
  END IF;

  -- Business-event link validation.
  IF p_business_event_type IS NOT NULL OR p_business_event_id IS NOT NULL THEN
    IF p_business_event_type IS NULL OR p_business_event_id IS NULL THEN
      RAISE EXCEPTION 'Business event type and id must both be provided';
    END IF;
    -- Loose coupling: no future-domain table exists yet in SB-P-1.10. Owning
    -- domains must validate existence and same-business scope before calling
    -- this function. See EIS Section 4 Trusted event-link contract.
  END IF;

  -- Correction handling.
  IF p_movement_type = 'correction' THEN
    IF p_correcting_of IS NULL THEN
      RAISE EXCEPTION 'Correction requires a correcting_of reference';
    END IF;
    SELECT * INTO v_orig
      FROM public.inventory_movements
     WHERE id = p_correcting_of
       AND business_id = v_business
       AND item_id = p_item_id;
    IF NOT FOUND THEN
      RAISE EXCEPTION 'Correction target movement not found for this item';
    END IF;
    IF v_orig.movement_type = 'correction' THEN
      RAISE EXCEPTION 'Cannot correct a correction; correct the original movement instead';
    END IF;
    IF v_orig.direction = p_direction THEN
      RAISE EXCEPTION 'Correction direction must oppose the original movement direction';
    END IF;
    SELECT coalesce(sum(quantity), 0) INTO v_prior_correction_total
      FROM public.inventory_movements
     WHERE correcting_of = v_orig.id;
    IF v_orig.quantity - v_prior_correction_total - p_quantity < 0 THEN
      RAISE EXCEPTION 'Correction exceeds remaining compensable quantity (% remaining)',
        v_orig.quantity - v_prior_correction_total;
    END IF;
  ELSE
    IF p_correcting_of IS NOT NULL THEN
      RAISE EXCEPTION 'Non-correction movements must not set correcting_of';
    END IF;
    -- Archived-item write protection for ordinary movements.
    IF v_item.status = 'archived' THEN
      RAISE EXCEPTION 'Cannot post ordinary movements against an archived inventory item; reactivate it first';
    END IF;
  END IF;

  -- Opening-stock invariant.
  IF p_movement_type = 'opening_stock' THEN
    IF EXISTS (
      SELECT 1 FROM public.inventory_movements
       WHERE item_id = p_item_id AND movement_type = 'opening_stock'
    ) THEN
      RAISE EXCEPTION 'Opening stock has already been recorded for this item';
    END IF;
  END IF;

  -- Authoritative in-transaction projection for negative-stock evaluation.
  SELECT coalesce(
    sum(CASE WHEN direction = 'increase' THEN quantity ELSE -quantity END),
    0
  ) INTO v_current
    FROM public.inventory_movements
   WHERE item_id = p_item_id;

  v_signed := CASE WHEN p_direction = 'increase' THEN p_quantity ELSE -p_quantity END;
  v_projected := v_current + v_signed;

  IF v_projected < 0 AND NOT coalesce(p_allow_negative_stock, false) THEN
    RAISE EXCEPTION 'NEGATIVE_STOCK: this movement would take stock to %; explicit authorization required', v_projected
      USING HINT = 'Confirm the negative-stock warning to authorize this movement.';
  END IF;

  -- Insert movement and register its idempotency key atomically. Wrapped
  -- so a same-key race from a *different* item -- not covered by the
  -- per-item advisory lock above, since idempotency keys are scoped by
  -- business+operation, not by item -- still degrades gracefully via this
  -- table's own unique constraint instead of surfacing a raw
  -- constraint-violation error to the caller.
  BEGIN
    INSERT INTO public.inventory_movements (
      item_id, business_id, movement_type, direction, quantity, reason,
      occurred_at, responsible_user_id, business_event_type, business_event_id, correcting_of
    ) VALUES (
      p_item_id, v_business, p_movement_type, p_direction, p_quantity, v_reason,
      p_occurred_at, v_user, p_business_event_type, p_business_event_id, p_correcting_of
    ) RETURNING * INTO v_movement;

    INSERT INTO public.inventory_movement_idempotency_keys (
      business_id, operation, idempotency_key, movement_id, payload_fingerprint
    ) VALUES (
      v_business, p_operation, p_idempotency_key, v_movement.id, v_fingerprint
    );
  EXCEPTION WHEN unique_violation THEN
    GET STACKED DIAGNOSTICS v_conflict_constraint = CONSTRAINT_NAME;
    IF v_conflict_constraint <> 'inventory_movement_idem_scope_uniq' THEN
      RAISE;
    END IF;
    SELECT * INTO v_existing_key
      FROM public.inventory_movement_idempotency_keys
     WHERE business_id = v_business
       AND operation = p_operation
       AND idempotency_key = p_idempotency_key;
    IF NOT FOUND THEN
      RAISE;
    END IF;
    IF v_existing_key.payload_fingerprint <> v_fingerprint THEN
      RAISE EXCEPTION 'Idempotency key conflict: request payload differs from original';
    END IF;
    SELECT * INTO v_existing_movement
      FROM public.inventory_movements
     WHERE id = v_existing_key.movement_id;
    RETURN v_existing_movement;
  END;

  RETURN v_movement;
END;
$$;
