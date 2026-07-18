CREATE TABLE public.transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  creator_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('sale', 'purchase')),
  transaction_date DATE NOT NULL DEFAULT CURRENT_DATE,
  party_name TEXT NOT NULL CHECK (length(btrim(party_name)) > 0),
  description TEXT NOT NULL CHECK (length(btrim(description)) > 0),
  amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  payment_method TEXT NOT NULL CHECK (payment_method IN ('cash', 'upi', 'card', 'bank_transfer', 'credit', 'other')),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_transactions_business_timeline
  ON public.transactions (business_id, transaction_date DESC, created_at DESC);

CREATE INDEX idx_transactions_business_type_date
  ON public.transactions (business_id, transaction_type, transaction_date);

-- Reuses the existing update_updated_at_column() function created for
-- public.businesses; not authorized-role-reachable today (no UPDATE grant
-- below) but keeps the column correct for service_role and any future
-- authorized update path.
CREATE TRIGGER update_transactions_updated_at
  BEFORE UPDATE ON public.transactions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Editing and deletion are not authorized in SB-P-1.8; only SELECT and INSERT
-- are granted so the database itself enforces the append-only boundary.
GRANT SELECT, INSERT ON public.transactions TO authenticated;
GRANT ALL ON public.transactions TO service_role;

ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view their business transactions"
  ON public.transactions FOR SELECT
  TO authenticated
  USING (
    business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())
  );

CREATE POLICY "Owners can create their business transactions"
  ON public.transactions FOR INSERT
  TO authenticated
  WITH CHECK (
    creator_id = auth.uid()
    AND business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())
  );
