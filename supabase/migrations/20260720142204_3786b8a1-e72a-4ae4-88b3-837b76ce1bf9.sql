
-- SB-P-1.9 — Owner transaction correction: audit + event

-- 1. Allow owners to update their own business's transactions.
CREATE POLICY "Owners can update their business transactions"
ON public.transactions
FOR UPDATE
TO authenticated
USING (
  business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())
)
WITH CHECK (
  business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())
);

-- 2. Keep updated_at fresh on corrections.
DROP TRIGGER IF EXISTS update_transactions_updated_at ON public.transactions;
CREATE TRIGGER update_transactions_updated_at
BEFORE UPDATE ON public.transactions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3. Correction events (audit + event queue).
CREATE TABLE public.transaction_correction_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id uuid NOT NULL REFERENCES public.transactions(id) ON DELETE CASCADE,
  business_id uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  edited_at timestamptz NOT NULL DEFAULT now(),
  edited_by uuid NOT NULL,
  original_values jsonb NOT NULL,
  updated_values jsonb NOT NULL,
  edit_reason text,
  notification_status text NOT NULL DEFAULT 'pending',
  notification_sent_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX transaction_correction_events_transaction_id_idx
  ON public.transaction_correction_events (transaction_id);
CREATE INDEX transaction_correction_events_business_id_idx
  ON public.transaction_correction_events (business_id);

GRANT SELECT ON public.transaction_correction_events TO authenticated;
GRANT ALL ON public.transaction_correction_events TO service_role;

ALTER TABLE public.transaction_correction_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view their correction events"
ON public.transaction_correction_events
FOR SELECT
TO authenticated
USING (
  business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())
);

CREATE TRIGGER update_transaction_correction_events_updated_at
BEFORE UPDATE ON public.transaction_correction_events
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 4. Owner-only correction operation. Updates in place, preserves the
--    transaction ID, and records a correction event.
CREATE OR REPLACE FUNCTION public.correct_transaction(
  p_transaction_id uuid,
  p_transaction_type text,
  p_transaction_date date,
  p_party_name text,
  p_description text,
  p_amount numeric,
  p_payment_method text,
  p_notes text,
  p_edit_reason text
)
RETURNS public.transactions
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_original public.transactions;
  v_updated public.transactions;
  v_is_owner boolean;
  v_party text;
  v_description text;
  v_notes text;
  v_reason text;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT * INTO v_original
  FROM public.transactions
  WHERE id = p_transaction_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Transaction not found';
  END IF;

  SELECT EXISTS(
    SELECT 1 FROM public.businesses
    WHERE id = v_original.business_id AND owner_id = auth.uid()
  ) INTO v_is_owner;

  IF NOT v_is_owner THEN
    RAISE EXCEPTION 'Not authorized to correct this transaction';
  END IF;

  IF p_transaction_type NOT IN ('sale', 'purchase') THEN
    RAISE EXCEPTION 'Invalid transaction type';
  END IF;

  IF p_amount IS NULL OR p_amount <= 0 THEN
    RAISE EXCEPTION 'Amount must be greater than zero';
  END IF;

  v_party := btrim(p_party_name);
  v_description := btrim(p_description);
  v_notes := NULLIF(btrim(coalesce(p_notes, '')), '');
  v_reason := NULLIF(btrim(coalesce(p_edit_reason, '')), '');

  IF v_party = '' THEN RAISE EXCEPTION 'Party name is required'; END IF;
  IF v_description = '' THEN RAISE EXCEPTION 'Description is required'; END IF;

  UPDATE public.transactions SET
    transaction_type = p_transaction_type,
    transaction_date = p_transaction_date,
    party_name = v_party,
    description = v_description,
    amount = p_amount,
    payment_method = p_payment_method,
    notes = v_notes
  WHERE id = p_transaction_id
  RETURNING * INTO v_updated;

  INSERT INTO public.transaction_correction_events (
    transaction_id, business_id, edited_by,
    original_values, updated_values, edit_reason, notification_status
  ) VALUES (
    v_updated.id, v_updated.business_id, auth.uid(),
    to_jsonb(v_original), to_jsonb(v_updated),
    v_reason, 'pending'
  );

  RETURN v_updated;
END;
$$;

REVOKE ALL ON FUNCTION public.correct_transaction(uuid, text, date, text, text, numeric, text, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.correct_transaction(uuid, text, date, text, text, numeric, text, text, text) TO authenticated;
