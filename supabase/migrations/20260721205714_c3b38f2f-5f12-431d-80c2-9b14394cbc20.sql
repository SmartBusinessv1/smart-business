-- SB-P-1.10 — Inventory Foundation
-- Introduces inventory_items, inventory_movements (append-only ledger),
-- and inventory_movement_idempotency_keys. All stock-affecting writes
-- funnel through create_inventory_movement(). Owner-only per Mission
-- Control clarification SB-P-1.10-CLAR-1.0 (A1).

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1. Enumerations
CREATE TYPE public.inventory_item_status AS ENUM ('active', 'archived');
CREATE TYPE public.inventory_movement_type AS ENUM (
  'opening_stock',
  'stock_increase',
  'stock_decrease',
  'adjustment_increase',
  'adjustment_decrease',
  'correction'
);
CREATE TYPE public.inventory_direction AS ENUM ('increase', 'decrease');

-- 2. inventory_items
CREATE TABLE public.inventory_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  name text NOT NULL CHECK (length(btrim(name)) > 0),
  base_unit text NOT NULL CHECK (length(btrim(base_unit)) > 0),
  status public.inventory_item_status NOT NULL DEFAULT 'active',
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT inventory_items_id_business_uniq UNIQUE (id, business_id),
  CONSTRAINT inventory_items_business_name_uniq UNIQUE (business_id, name)
);

CREATE INDEX inventory_items_business_status_idx
  ON public.inventory_items (business_id, status, name);

GRANT SELECT, INSERT, UPDATE ON public.inventory_items TO authenticated;
GRANT ALL ON public.inventory_items TO service_role;

ALTER TABLE public.inventory_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view their inventory items"
  ON public.inventory_items FOR SELECT
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

CREATE POLICY "Owners can insert their inventory items"
  ON public.inventory_items FOR INSERT
  TO authenticated
  WITH CHECK (
    business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())
    AND created_by = auth.uid()
  );

CREATE POLICY "Owners can update their inventory items"
  ON public.inventory_items FOR UPDATE
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()))
  WITH CHECK (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

CREATE TRIGGER update_inventory_items_updated_at
  BEFORE UPDATE ON public.inventory_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Immutability guard: id / business_id / base_unit cannot change after creation.
CREATE OR REPLACE FUNCTION public.inventory_items_guard()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.id <> OLD.id THEN
    RAISE EXCEPTION 'inventory_items.id is immutable';
  END IF;
  IF NEW.business_id <> OLD.business_id THEN
    RAISE EXCEPTION 'inventory_items.business_id is immutable';
  END IF;
  IF NEW.base_unit <> OLD.base_unit THEN
    RAISE EXCEPTION 'inventory_items.base_unit is immutable';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER inventory_items_guard_trg
  BEFORE UPDATE ON public.inventory_items
  FOR EACH ROW EXECUTE FUNCTION public.inventory_items_guard();

-- 3. inventory_movements (append-only ledger)
CREATE TABLE public.inventory_movements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id uuid NOT NULL,
  business_id uuid NOT NULL,
  movement_type public.inventory_movement_type NOT NULL,
  direction public.inventory_direction NOT NULL,
  quantity numeric(14, 4) NOT NULL CHECK (quantity > 0),
  reason text NOT NULL CHECK (length(btrim(reason)) > 0),
  occurred_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  responsible_user_id uuid,
  business_event_type text,
  business_event_id uuid,
  correcting_of uuid,
  -- Composite uniqueness enabling cross-business consistency FKs below.
  CONSTRAINT inventory_movements_id_business_item_uniq
    UNIQUE (id, business_id, item_id),
  -- Cross-business consistency: movement's item must belong to same business.
  CONSTRAINT inventory_movements_item_business_fk
    FOREIGN KEY (item_id, business_id)
      REFERENCES public.inventory_items (id, business_id)
      ON DELETE RESTRICT,
  -- Cross-business + same-item consistency for corrections.
  CONSTRAINT inventory_movements_correcting_of_fk
    FOREIGN KEY (correcting_of, business_id, item_id)
      REFERENCES public.inventory_movements (id, business_id, item_id)
      ON DELETE RESTRICT,
  -- Audit completeness: responsible user OR originating event must be present.
  CONSTRAINT inventory_movements_audit_completeness
    CHECK (responsible_user_id IS NOT NULL OR business_event_id IS NOT NULL),
  -- Movement type / direction matrix.
  CONSTRAINT inventory_movements_type_direction CHECK (
    (movement_type = 'opening_stock' AND direction = 'increase') OR
    (movement_type = 'stock_increase' AND direction = 'increase') OR
    (movement_type = 'stock_decrease' AND direction = 'decrease') OR
    (movement_type = 'adjustment_increase' AND direction = 'increase') OR
    (movement_type = 'adjustment_decrease' AND direction = 'decrease') OR
    (movement_type = 'correction')
  ),
  -- Corrections must reference a target; non-corrections must not.
  CONSTRAINT inventory_movements_correction_link CHECK (
    (movement_type = 'correction' AND correcting_of IS NOT NULL) OR
    (movement_type <> 'correction' AND correcting_of IS NULL)
  ),
  -- Self-correction rejected.
  CONSTRAINT inventory_movements_no_self_correction
    CHECK (correcting_of IS NULL OR correcting_of <> id),
  -- Business-event link consistency.
  CONSTRAINT inventory_movements_business_event_pair CHECK (
    (business_event_type IS NULL AND business_event_id IS NULL) OR
    (business_event_type IS NOT NULL AND business_event_id IS NOT NULL)
  )
);

-- Single opening-stock movement per item (data-layer enforcement).
CREATE UNIQUE INDEX inventory_movements_opening_stock_unique
  ON public.inventory_movements (item_id)
  WHERE movement_type = 'opening_stock';

CREATE INDEX inventory_movements_item_time_idx
  ON public.inventory_movements (business_id, item_id, occurred_at, id);
CREATE INDEX inventory_movements_business_time_idx
  ON public.inventory_movements (business_id, occurred_at DESC);
CREATE INDEX inventory_movements_correcting_of_idx
  ON public.inventory_movements (correcting_of)
  WHERE correcting_of IS NOT NULL;
CREATE INDEX inventory_movements_event_ref_idx
  ON public.inventory_movements (business_event_type, business_event_id)
  WHERE business_event_id IS NOT NULL;

-- Only SELECT and INSERT granted; UPDATE/DELETE not granted to any app role.
GRANT SELECT, INSERT ON public.inventory_movements TO authenticated;
GRANT ALL ON public.inventory_movements TO service_role;

ALTER TABLE public.inventory_movements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view their inventory movements"
  ON public.inventory_movements FOR SELECT
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

CREATE POLICY "Owners can insert their inventory movements"
  ON public.inventory_movements FOR INSERT
  TO authenticated
  WITH CHECK (
    business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())
    AND (responsible_user_id IS NULL OR responsible_user_id = auth.uid())
  );

-- Defence in depth: hard-reject any UPDATE/DELETE at the trigger layer,
-- regardless of caller privilege. Emergency repair procedures are outside
-- the routine application paths per EIS Section 8.
CREATE OR REPLACE FUNCTION public.inventory_movements_reject_mutation()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  RAISE EXCEPTION 'inventory_movements are append-only; use a linked correction movement instead';
END;
$$;

CREATE TRIGGER inventory_movements_no_update
  BEFORE UPDATE ON public.inventory_movements
  FOR EACH ROW EXECUTE FUNCTION public.inventory_movements_reject_mutation();

CREATE TRIGGER inventory_movements_no_delete
  BEFORE DELETE ON public.inventory_movements
  FOR EACH ROW EXECUTE FUNCTION public.inventory_movements_reject_mutation();

-- 4. Idempotency keys
CREATE TABLE public.inventory_movement_idempotency_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  operation text NOT NULL CHECK (length(btrim(operation)) > 0),
  idempotency_key uuid NOT NULL,
  movement_id uuid NOT NULL REFERENCES public.inventory_movements(id) ON DELETE RESTRICT,
  payload_fingerprint text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT inventory_movement_idem_scope_uniq
    UNIQUE (business_id, operation, idempotency_key)
);

CREATE INDEX inventory_movement_idem_movement_idx
  ON public.inventory_movement_idempotency_keys (movement_id);

GRANT SELECT, INSERT ON public.inventory_movement_idempotency_keys TO authenticated;
GRANT ALL ON public.inventory_movement_idempotency_keys TO service_role;

ALTER TABLE public.inventory_movement_idempotency_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view their idempotency keys"
  ON public.inventory_movement_idempotency_keys FOR SELECT
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

CREATE POLICY "Owners can insert their idempotency keys"
  ON public.inventory_movement_idempotency_keys FOR INSERT
  TO authenticated
  WITH CHECK (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

-- 5. Shared movement-creation operation. Runs SECURITY INVOKER so that RLS on
-- inventory_items and inventory_movements applies for the caller; ordinary
-- ownership visibility is what determines authorization. All stock-affecting
-- writes go through this function.
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
SET search_path = public
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

  -- Idempotency: business-and-operation scoped key.
  SELECT * INTO v_existing_key
    FROM public.inventory_movement_idempotency_keys
   WHERE business_id = v_business
     AND operation = p_operation
     AND idempotency_key = p_idempotency_key
   FOR UPDATE;
  IF FOUND THEN
    IF v_existing_key.payload_fingerprint <> v_fingerprint THEN
      RAISE EXCEPTION 'Idempotency key conflict: request payload differs from original';
    END IF;
    SELECT * INTO v_existing_movement
      FROM public.inventory_movements
     WHERE id = v_existing_key.movement_id;
    RETURN v_existing_movement;
  END IF;

  -- Serialize concurrent writes for the same item within this transaction.
  PERFORM pg_advisory_xact_lock(hashtextextended(p_item_id::text, 0));

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

  -- Insert movement.
  INSERT INTO public.inventory_movements (
    item_id, business_id, movement_type, direction, quantity, reason,
    occurred_at, responsible_user_id, business_event_type, business_event_id, correcting_of
  ) VALUES (
    p_item_id, v_business, p_movement_type, p_direction, p_quantity, v_reason,
    p_occurred_at, v_user, p_business_event_type, p_business_event_id, p_correcting_of
  ) RETURNING * INTO v_movement;

  -- Atomically register the idempotency key with the movement.
  INSERT INTO public.inventory_movement_idempotency_keys (
    business_id, operation, idempotency_key, movement_id, payload_fingerprint
  ) VALUES (
    v_business, p_operation, p_idempotency_key, v_movement.id, v_fingerprint
  );

  RETURN v_movement;
END;
$$;

REVOKE ALL ON FUNCTION public.create_inventory_movement(
  uuid, text, uuid, public.inventory_movement_type, public.inventory_direction,
  numeric, text, timestamptz, uuid, boolean, text, uuid
) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_inventory_movement(
  uuid, text, uuid, public.inventory_movement_type, public.inventory_direction,
  numeric, text, timestamptz, uuid, boolean, text, uuid
) TO authenticated;

-- 6. Preview: informational projection for the negative-stock warning.
-- Purely read-only; the authoritative check is repeated inside
-- create_inventory_movement() at commit time.
CREATE OR REPLACE FUNCTION public.preview_inventory_movement(
  p_item_id uuid,
  p_direction public.inventory_direction,
  p_quantity numeric
) RETURNS TABLE (current_stock numeric, projected_stock numeric)
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
DECLARE
  v_current numeric;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  IF p_quantity IS NULL OR p_quantity <= 0 THEN
    RAISE EXCEPTION 'Quantity must be greater than zero';
  END IF;
  PERFORM 1 FROM public.inventory_items WHERE id = p_item_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Inventory item not found or not permitted';
  END IF;
  SELECT coalesce(
    sum(CASE WHEN direction = 'increase' THEN quantity ELSE -quantity END),
    0
  ) INTO v_current
    FROM public.inventory_movements
   WHERE item_id = p_item_id;
  RETURN QUERY SELECT
    v_current,
    v_current + CASE WHEN p_direction = 'increase' THEN p_quantity ELSE -p_quantity END;
END;
$$;

REVOKE ALL ON FUNCTION public.preview_inventory_movement(
  uuid, public.inventory_direction, numeric
) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.preview_inventory_movement(
  uuid, public.inventory_direction, numeric
) TO authenticated;

-- 7. Batch current-stock aggregation for lists (Phase 1 grouped aggregation;
-- avoids N+1 per item). SELECT runs under invoker RLS.
CREATE OR REPLACE FUNCTION public.inventory_current_stock_batch(
  p_item_ids uuid[]
) RETURNS TABLE (item_id uuid, current_stock numeric)
LANGUAGE sql
SECURITY INVOKER
STABLE
SET search_path = public
AS $$
  SELECT
    m.item_id,
    sum(CASE WHEN m.direction = 'increase' THEN m.quantity ELSE -m.quantity END)
      AS current_stock
    FROM public.inventory_movements m
   WHERE m.item_id = ANY (p_item_ids)
   GROUP BY m.item_id;
$$;

REVOKE ALL ON FUNCTION public.inventory_current_stock_batch(uuid[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.inventory_current_stock_batch(uuid[]) TO authenticated;

-- 8. Correction remaining-compensable helper for the correction UI.
CREATE OR REPLACE FUNCTION public.inventory_movement_remaining_compensable(
  p_movement_id uuid
) RETURNS numeric
LANGUAGE plpgsql
SECURITY INVOKER
STABLE
SET search_path = public
AS $$
DECLARE
  v_orig public.inventory_movements;
  v_used numeric;
BEGIN
  SELECT * INTO v_orig FROM public.inventory_movements WHERE id = p_movement_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Movement not found or not permitted';
  END IF;
  IF v_orig.movement_type = 'correction' THEN
    RETURN 0;
  END IF;
  SELECT coalesce(sum(quantity), 0) INTO v_used
    FROM public.inventory_movements
   WHERE correcting_of = v_orig.id;
  RETURN v_orig.quantity - v_used;
END;
$$;

REVOKE ALL ON FUNCTION public.inventory_movement_remaining_compensable(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.inventory_movement_remaining_compensable(uuid) TO authenticated;
