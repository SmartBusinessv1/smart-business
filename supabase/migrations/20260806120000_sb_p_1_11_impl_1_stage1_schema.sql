-- SB-P-1.11-IMPL-1 — Stage 1: Schema and Immutable Foundations
--
-- Authorized by communication/live/instruction1.40.md, binding correction
-- package communication/live/report1.37.md, and Mission Control's Stage 1
-- acceptance dispositions. Creates exactly eleven initial Phase 1 catalog
-- tables, seven NOLOGIN executor roles, four fixed result composite types,
-- internal normalization/validation helpers, and executor-targeted RLS.
-- No public command functions are created here (Stage 2). No frontend, no
-- production mutation, no cleanup worker, no system_errors, no
-- catalog_file_references, no image reference.
--
-- Default-privilege handling: 20260727000000_reconcile_default_grants.sql
-- installed ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
-- granting ALL on tables / EXECUTE on functions to anon, authenticated,
-- service_role for every future object created by postgres in this schema.
-- report1.37.md LSF-8 explicitly anticipates this ("Default privileges are
-- reviewed and explicitly revoked where required so that later objects are
-- not unintentionally exposed."). Every table and function below is
-- therefore followed immediately by an explicit REVOKE neutralizing that
-- inherited default before the exact narrow grants in report1.37.md
-- Sections 7-8 are applied. service_role is left with ALL, matching
-- existing precedent on every other table in this schema and the fact
-- that service_role already holds BYPASSRLS at the platform level.
--
-- Composite-key ordering: every new catalog-to-catalog foreign key uses
-- (business_id, id) ordering per Mission Control's explicit Stage 1
-- instruction. The one foreign key into the pre-existing SB-P-1.10
-- inventory_items table matches that table's own existing constraint
-- order, (id, business_id) -- see inventory_items_id_business_uniq in
-- 20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql.

-- =============================================================================
-- 0. Internal (non-Data-API-exposed) schema
-- =============================================================================
-- Supabase only exposes schemas explicitly added to the API's exposed-schema
-- list (public, graphql_public by default). catalog_internal is never added
-- to that list, so nothing here is reachable through PostgREST regardless of
-- role grants -- satisfying report1.37.md LSF-8's "non-Data-API-exposed
-- internal schema" requirement structurally, not just by convention.
CREATE SCHEMA IF NOT EXISTS catalog_internal;

REVOKE ALL ON SCHEMA catalog_internal FROM PUBLIC, anon, authenticated;
GRANT USAGE ON SCHEMA catalog_internal TO
  catalog_identity_executor, catalog_lifecycle_executor, catalog_pricing_executor,
  catalog_tax_executor, catalog_cost_executor, catalog_link_executor, catalog_read_executor;

-- Neutralize default privileges for anything future work adds to this schema.
ALTER DEFAULT PRIVILEGES IN SCHEMA catalog_internal
  REVOKE ALL ON TABLES FROM anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA catalog_internal
  REVOKE EXECUTE ON FUNCTIONS FROM anon, authenticated;

-- =============================================================================
-- 1. Seven NOLOGIN executor roles (report1.37.md Section 8)
-- =============================================================================
-- No LOGIN, no BYPASSRLS, no table ownership, no service_role membership,
-- no inheritance from one another. Each owns only its own command group's
-- functions (Stage 2) and receives only the narrow table grants below.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'catalog_identity_executor') THEN
    CREATE ROLE catalog_identity_executor NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'catalog_lifecycle_executor') THEN
    CREATE ROLE catalog_lifecycle_executor NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'catalog_pricing_executor') THEN
    CREATE ROLE catalog_pricing_executor NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'catalog_tax_executor') THEN
    CREATE ROLE catalog_tax_executor NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'catalog_cost_executor') THEN
    CREATE ROLE catalog_cost_executor NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'catalog_link_executor') THEN
    CREATE ROLE catalog_link_executor NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'catalog_read_executor') THEN
    CREATE ROLE catalog_read_executor NOLOGIN NOINHERIT;
  END IF;
END $$;

-- None of the seven may ever become members of service_role or hold
-- BYPASSRLS. Asserted here defensively; also verified by the Stage 1
-- privilege-inspection script.
DO $$
DECLARE
  r text;
BEGIN
  FOREACH r IN ARRAY ARRAY[
    'catalog_identity_executor','catalog_lifecycle_executor','catalog_pricing_executor',
    'catalog_tax_executor','catalog_cost_executor','catalog_link_executor','catalog_read_executor'
  ] LOOP
    IF EXISTS (
      SELECT 1 FROM pg_roles WHERE rolname = r AND (rolbypassrls OR rolcanlogin)
    ) THEN
      RAISE EXCEPTION 'Executor role % must be NOLOGIN and must not BYPASSRLS', r;
    END IF;
  END LOOP;
END $$;

-- =============================================================================
-- 2. Enumerations
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE public.catalog_lifecycle_status AS ENUM ('active', 'archived');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.catalog_link_action AS ENUM ('assign_or_replace', 'remove');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.catalog_tax_treatment AS ENUM (
    'inherit_business_default', 'product_specific_rate', 'non_taxable'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.catalog_pricing_mode AS ENUM ('tax_inclusive', 'tax_exclusive');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- 3. Fixed result composite types (report1.37.md LSF-1 / Section 10.2)
-- =============================================================================
-- Exactly these four. No catalog_product_detail composite is created --
-- catalog_product_read returns jsonb (Stage 2), constructed from two
-- non-public JSON constructors so a redacted response can physically omit
-- reference_cost rather than merely nulling a shared attribute.
DO $$ BEGIN
  CREATE TYPE public.catalog_command_result AS (
    outcome              text,        -- 'completed' | 'rejected'
    rejection_reason     text,        -- one of the twelve public categories, or NULL
    product_id           uuid,
    category_id          uuid,
    idempotency_key      uuid,
    recorded_at          timestamptz
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.catalog_command_outcome AS (
    found                boolean,
    outcome              text,        -- 'completed' | 'rejected' | NULL when not found
    rejection_reason     text,
    result_ref           jsonb,       -- small, non-sensitive result summary only
    recorded_at          timestamptz
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.catalog_product_summary AS (
    id                     uuid,
    name                   text,
    sku                    text,
    barcode                text,
    category_id            uuid,
    selling_unit           text,
    current_selling_price  numeric,
    status                 text,
    is_stock_tracked       boolean,
    match_rank             smallint,
    name_normalized        text       -- required for client cursor continuation
    -- Deliberately no reference_cost field: search/list results are always
    -- cost-redacted, never cost-history-existence-dependent (LSF-1).
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.catalog_link_preview_result AS (
    outcome                       text,   -- 'completed' | 'rejected'
    rejection_reason              text,
    preview_token_id              uuid,
    requested_action              text,
    current_inventory_item_id     uuid,
    current_selling_unit          text,
    current_selling_price         numeric,
    proposed_inventory_item_id    uuid,
    proposed_selling_unit         text,
    price_confirmation_required   boolean,
    expires_at                    timestamptz
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- 4. Internal helpers (catalog_internal schema)
-- =============================================================================

-- 4.1 Name normalization: trim, collapse repeated internal whitespace, case-fold.
-- Used for catalog_products.name_normalized and catalog_categories.name_normalized.
-- Does not claim Unicode-normalization behaviour beyond plain lower(); Malayalam
-- and Manglish text is passed through unchanged by both regexp_replace and
-- lower() beyond ordinary Latin-letter case folding (report1.37.md item 73).
CREATE OR REPLACE FUNCTION catalog_internal.normalize_name(p_value text)
RETURNS text
LANGUAGE sql
IMMUTABLE
SET search_path = ''
AS $$
  SELECT NULLIF(lower(regexp_replace(btrim(p_value), '\s+', ' ', 'g')), '');
$$;

-- 4.2 Identifier normalization (SKU / barcode): trim, case-fold, preserve
-- internal spacing exactly, blank-after-trim becomes NULL.
CREATE OR REPLACE FUNCTION catalog_internal.normalize_identifier(p_value text)
RETURNS text
LANGUAGE sql
IMMUTABLE
SET search_path = ''
AS $$
  SELECT NULLIF(lower(btrim(p_value)), '');
$$;

REVOKE ALL ON FUNCTION catalog_internal.normalize_name(text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION catalog_internal.normalize_identifier(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION catalog_internal.normalize_name(text) TO
  catalog_identity_executor, catalog_read_executor;
GRANT EXECUTE ON FUNCTION catalog_internal.normalize_identifier(text) TO
  catalog_identity_executor, catalog_read_executor;

-- 4.3 Owner/business resolution helper: re-derives the caller's business
-- through current Owner authority only. Used by every Stage 2 command.
-- Returns NULL (never raises) when the caller is not an authenticated
-- Owner, so callers can produce a deterministic PERMISSION_DENIED rather
-- than leaking a distinguishable exception.
CREATE OR REPLACE FUNCTION catalog_internal.resolve_owner_business(p_actor uuid)
RETURNS uuid
LANGUAGE sql
STABLE
SET search_path = ''
AS $$
  SELECT id FROM public.businesses WHERE owner_id = p_actor;
$$;

REVOKE ALL ON FUNCTION catalog_internal.resolve_owner_business(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION catalog_internal.resolve_owner_business(uuid) TO
  catalog_identity_executor, catalog_lifecycle_executor, catalog_pricing_executor,
  catalog_tax_executor, catalog_cost_executor, catalog_link_executor, catalog_read_executor;

-- 4.4 Advisory-lock key derivation (report1.37.md LSF-5). Domain-separated,
-- deterministic digest reduced into the bigint advisory-lock key space. A
-- collision can only cause temporary serialization contention -- it is
-- never treated as authorization, business scope, or idempotency ownership
-- (Stage 2 always re-verifies the authoritative unique row afterward).
CREATE OR REPLACE FUNCTION catalog_internal.idempotency_lock_key(
  p_business_id uuid, p_operation text, p_idempotency_key uuid
) RETURNS bigint
LANGUAGE sql
IMMUTABLE
SET search_path = ''
AS $$
  SELECT ('x' || substr(encode(extensions.digest(
    'catalog_write_idempotency_keys|' || p_business_id::text || '|' ||
    p_operation || '|' || p_idempotency_key::text,
    'sha256'
  ), 'hex'), 1, 16))::bit(64)::bigint;
$$;

REVOKE ALL ON FUNCTION catalog_internal.idempotency_lock_key(uuid, text, uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION catalog_internal.idempotency_lock_key(uuid, text, uuid) TO
  catalog_identity_executor, catalog_lifecycle_executor, catalog_pricing_executor,
  catalog_tax_executor, catalog_cost_executor, catalog_link_executor;

-- =============================================================================
-- 5. catalog_categories
-- =============================================================================
CREATE TABLE public.catalog_categories (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id       uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  name              text NOT NULL CHECK (length(btrim(name)) > 0),
  name_normalized   text NOT NULL,
  status            public.catalog_lifecycle_status NOT NULL DEFAULT 'active',
  created_by        uuid NOT NULL,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT catalog_categories_business_id_uniq UNIQUE (business_id, id),
  -- Archived identities remain reserved: this is a plain, non-partial
  -- constraint, matching inventory_items_business_name_uniq precedent.
  CONSTRAINT catalog_categories_business_name_normalized_uniq
    UNIQUE (business_id, name_normalized)
);

CREATE INDEX catalog_categories_business_status_idx
  ON public.catalog_categories (business_id, status, name_normalized);

CREATE TRIGGER update_catalog_categories_updated_at
  BEFORE UPDATE ON public.catalog_categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Neutralize inherited default privileges, then apply exact narrow grants.
REVOKE ALL ON public.catalog_categories FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_categories TO service_role;
GRANT INSERT, SELECT, UPDATE ON public.catalog_categories TO catalog_identity_executor;
GRANT SELECT ON public.catalog_categories TO catalog_read_executor;
-- The one approved direct authenticated read (report1.37.md Section 7).
GRANT SELECT (id, business_id, name, status) ON public.catalog_categories TO authenticated;

ALTER TABLE public.catalog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "identity_executor_select_own_business"
  ON public.catalog_categories FOR SELECT
  TO catalog_identity_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "identity_executor_insert_own_business"
  ON public.catalog_categories FOR INSERT
  TO catalog_identity_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "identity_executor_update_own_business"
  ON public.catalog_categories FOR UPDATE
  TO catalog_identity_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "read_executor_select_own_business"
  ON public.catalog_categories FOR SELECT
  TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- Narrow, column-limited direct authenticated read, Owner-business scoped.
CREATE POLICY "authenticated_select_own_business_category_columns"
  ON public.catalog_categories FOR SELECT
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

-- =============================================================================
-- 6. catalog_products
-- =============================================================================
CREATE TABLE public.catalog_products (
  id                            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id                   uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  name                          text NOT NULL CHECK (length(btrim(name)) > 0),
  name_normalized               text NOT NULL,
  description                   text,
  category_id                   uuid,
  sku                           text,
  sku_normalized                text,
  barcode                       text,
  barcode_normalized            text,
  selling_unit                  text NOT NULL DEFAULT 'piece' CHECK (length(btrim(selling_unit)) > 0),
  current_selling_price         numeric(14, 2) CHECK (current_selling_price IS NULL OR current_selling_price > 0),
  current_reference_cost        numeric(14, 2) CHECK (current_reference_cost IS NULL OR current_reference_cost >= 0),
  tax_treatment                 public.catalog_tax_treatment NOT NULL DEFAULT 'inherit_business_default',
  tax_rate_percent               numeric(5, 2),
  inventory_item_id             uuid,
  inventory_link_established_at timestamptz,
  status                        public.catalog_lifecycle_status NOT NULL DEFAULT 'active',
  created_by                    uuid NOT NULL,
  created_at                    timestamptz NOT NULL DEFAULT now(),
  updated_at                    timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT catalog_products_business_id_uniq UNIQUE (business_id, id),

  -- Archived identities remain reserved: plain, non-partial constraints.
  CONSTRAINT catalog_products_business_name_normalized_uniq
    UNIQUE (business_id, name_normalized),
  CONSTRAINT catalog_products_business_sku_normalized_uniq
    UNIQUE (business_id, sku_normalized),
  CONSTRAINT catalog_products_business_barcode_normalized_uniq
    UNIQUE (business_id, barcode_normalized),

  -- New catalog-to-catalog FK: (business_id, id) ordering per this mission's
  -- explicit Stage 1 instruction.
  CONSTRAINT catalog_products_category_fk
    FOREIGN KEY (business_id, category_id)
      REFERENCES public.catalog_categories (business_id, id)
      ON DELETE RESTRICT,

  -- Existing SB-P-1.10 table: matches its own constraint order, (id, business_id).
  CONSTRAINT catalog_products_inventory_item_fk
    FOREIGN KEY (inventory_item_id, business_id)
      REFERENCES public.inventory_items (id, business_id)
      ON DELETE RESTRICT,

  CONSTRAINT catalog_products_tax_rate_pair CHECK (
    (tax_treatment = 'product_specific_rate' AND tax_rate_percent IS NOT NULL) OR
    (tax_treatment <> 'product_specific_rate' AND tax_rate_percent IS NULL)
  ),

  CONSTRAINT catalog_products_link_established_pair CHECK (
    (inventory_item_id IS NULL AND inventory_link_established_at IS NULL) OR
    (inventory_item_id IS NOT NULL AND inventory_link_established_at IS NOT NULL)
  )
);

CREATE INDEX catalog_products_business_status_idx
  ON public.catalog_products (business_id, status, name_normalized);
CREATE INDEX catalog_products_category_idx
  ON public.catalog_products (business_id, category_id)
  WHERE category_id IS NOT NULL;
CREATE INDEX catalog_products_inventory_item_idx
  ON public.catalog_products (business_id, inventory_item_id)
  WHERE inventory_item_id IS NOT NULL;

CREATE TRIGGER update_catalog_products_updated_at
  BEFORE UPDATE ON public.catalog_products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- id / business_id / created_by are immutable after creation.
CREATE OR REPLACE FUNCTION public.catalog_products_guard()
RETURNS trigger LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  IF NEW.id <> OLD.id THEN
    RAISE EXCEPTION 'catalog_products.id is immutable';
  END IF;
  IF NEW.business_id <> OLD.business_id THEN
    RAISE EXCEPTION 'catalog_products.business_id is immutable';
  END IF;
  IF NEW.created_by <> OLD.created_by THEN
    RAISE EXCEPTION 'catalog_products.created_by is immutable';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER catalog_products_guard_trg
  BEFORE UPDATE ON public.catalog_products
  FOR EACH ROW EXECUTE FUNCTION public.catalog_products_guard();

REVOKE ALL ON public.catalog_products FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_products TO service_role;
GRANT INSERT, SELECT, UPDATE ON public.catalog_products TO catalog_identity_executor;
GRANT SELECT, UPDATE ON public.catalog_products TO catalog_lifecycle_executor;
GRANT SELECT ON public.catalog_products TO catalog_pricing_executor;
GRANT SELECT ON public.catalog_products TO catalog_tax_executor;
GRANT SELECT ON public.catalog_products TO catalog_cost_executor;
GRANT UPDATE (current_reference_cost) ON public.catalog_products TO catalog_cost_executor;
GRANT SELECT, UPDATE ON public.catalog_products TO catalog_link_executor;
GRANT SELECT ON public.catalog_products TO catalog_read_executor;
-- No direct authenticated access of any kind (Section 7: not listed as an
-- approved direct-access table).

ALTER TABLE public.catalog_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "identity_executor_select_own_business"
  ON public.catalog_products FOR SELECT TO catalog_identity_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "identity_executor_insert_own_business"
  ON public.catalog_products FOR INSERT TO catalog_identity_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "identity_executor_update_own_business"
  ON public.catalog_products FOR UPDATE TO catalog_identity_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "lifecycle_executor_select_own_business"
  ON public.catalog_products FOR SELECT TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "lifecycle_executor_update_own_business"
  ON public.catalog_products FOR UPDATE TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "pricing_executor_select_own_business"
  ON public.catalog_products FOR SELECT TO catalog_pricing_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "tax_executor_select_own_business"
  ON public.catalog_products FOR SELECT TO catalog_tax_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "cost_executor_select_own_business"
  ON public.catalog_products FOR SELECT TO catalog_cost_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "cost_executor_update_own_business"
  ON public.catalog_products FOR UPDATE TO catalog_cost_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "link_executor_select_own_business"
  ON public.catalog_products FOR SELECT TO catalog_link_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_update_own_business"
  ON public.catalog_products FOR UPDATE TO catalog_link_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

CREATE POLICY "read_executor_select_own_business"
  ON public.catalog_products FOR SELECT TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- =============================================================================
-- 7. business_tax_settings
-- =============================================================================
CREATE TABLE public.business_tax_settings (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id        uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  pricing_mode       public.catalog_pricing_mode NOT NULL,
  default_tax_rate   numeric(5, 2),
  created_at         timestamptz NOT NULL DEFAULT now(),
  updated_at         timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT business_tax_settings_business_id_uniq UNIQUE (business_id)
);

CREATE TRIGGER update_business_tax_settings_updated_at
  BEFORE UPDATE ON public.business_tax_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

REVOKE ALL ON public.business_tax_settings FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.business_tax_settings TO service_role;
GRANT SELECT, INSERT, UPDATE ON public.business_tax_settings TO catalog_tax_executor;
GRANT SELECT ON public.business_tax_settings TO catalog_read_executor;

ALTER TABLE public.business_tax_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "tax_executor_select_own_business"
  ON public.business_tax_settings FOR SELECT TO catalog_tax_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "tax_executor_insert_own_business"
  ON public.business_tax_settings FOR INSERT TO catalog_tax_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "tax_executor_update_own_business"
  ON public.business_tax_settings FOR UPDATE TO catalog_tax_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "read_executor_select_own_business"
  ON public.business_tax_settings FOR SELECT TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- =============================================================================
-- 8. catalog_link_preview_tokens (mutable D-068 lifecycle row)
-- =============================================================================
CREATE TABLE public.catalog_link_preview_tokens (
  id                             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id                    uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  product_id                     uuid NOT NULL,
  initiating_actor_user_id       uuid NOT NULL,
  requested_action               public.catalog_link_action NOT NULL,
  current_inventory_item_id      uuid,
  target_inventory_item_id       uuid,
  current_selling_unit           text,
  proposed_selling_unit          text,
  current_selling_price          numeric(14, 2),
  price_confirmation_required    boolean NOT NULL,
  expected_state_fingerprint     text NOT NULL,
  issued_at                      timestamptz NOT NULL DEFAULT now(),
  expires_at                     timestamptz NOT NULL,
  closed_at                      timestamptz,
  closed_by_actor_user_id        uuid,
  closure_reason                 text CHECK (closure_reason IN ('consumed', 'superseded')),
  resulting_link_event_id        uuid,

  CONSTRAINT catalog_link_preview_tokens_business_id_uniq UNIQUE (business_id, id),
  CONSTRAINT catalog_link_preview_tokens_product_fk
    FOREIGN KEY (business_id, product_id)
      REFERENCES public.catalog_products (business_id, id)
      ON DELETE RESTRICT,
  CONSTRAINT catalog_link_preview_tokens_closure_pair CHECK (
    (closed_at IS NULL AND closed_by_actor_user_id IS NULL AND closure_reason IS NULL) OR
    (closed_at IS NOT NULL AND closure_reason IS NOT NULL)
  ),
  CONSTRAINT catalog_link_preview_tokens_action_target_pair CHECK (
    (requested_action = 'assign_or_replace' AND target_inventory_item_id IS NOT NULL) OR
    (requested_action = 'remove' AND target_inventory_item_id IS NULL)
  )
);

-- The mandatory D-068 open-row uniqueness (report1.37.md SA-5).
CREATE UNIQUE INDEX catalog_link_preview_tokens_open_uniq
  ON public.catalog_link_preview_tokens (business_id, product_id)
  WHERE closed_at IS NULL;

CREATE INDEX catalog_link_preview_tokens_expiry_idx
  ON public.catalog_link_preview_tokens (expires_at)
  WHERE closed_at IS NULL;

-- Immutable-field guard: only lifecycle-closure columns and the resulting
-- link-event back-reference may ever be updated (SA-5: "the mutable preview
-- row may reference the resulting link-event identifier after insertion").
CREATE OR REPLACE FUNCTION public.catalog_link_preview_tokens_guard()
RETURNS trigger LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  IF NEW.id <> OLD.id OR NEW.business_id <> OLD.business_id OR
     NEW.product_id <> OLD.product_id OR
     NEW.initiating_actor_user_id <> OLD.initiating_actor_user_id OR
     NEW.requested_action <> OLD.requested_action OR
     NEW.expected_state_fingerprint <> OLD.expected_state_fingerprint OR
     NEW.issued_at <> OLD.issued_at OR NEW.expires_at <> OLD.expires_at THEN
    RAISE EXCEPTION 'catalog_link_preview_tokens identity and issuance fields are immutable';
  END IF;
  -- Once closed, no further mutation is permitted.
  IF OLD.closed_at IS NOT NULL THEN
    RAISE EXCEPTION 'catalog_link_preview_tokens row is already closed';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER catalog_link_preview_tokens_guard_trg
  BEFORE UPDATE ON public.catalog_link_preview_tokens
  FOR EACH ROW EXECUTE FUNCTION public.catalog_link_preview_tokens_guard();

REVOKE ALL ON public.catalog_link_preview_tokens FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_link_preview_tokens TO service_role;
GRANT INSERT, SELECT, UPDATE ON public.catalog_link_preview_tokens TO catalog_link_executor;
-- No general direct client release (report1.37.md Section 7); read_executor
-- receives no grant here because none of commands 16-19 read this table.

ALTER TABLE public.catalog_link_preview_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "link_executor_select_own_business"
  ON public.catalog_link_preview_tokens FOR SELECT TO catalog_link_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_insert_own_business"
  ON public.catalog_link_preview_tokens FOR INSERT TO catalog_link_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_update_own_business"
  ON public.catalog_link_preview_tokens FOR UPDATE TO catalog_link_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- =============================================================================
-- 9. Immutable event tables: shared provenance shape
-- =============================================================================
-- catalog_selling_price_events, catalog_tax_events, catalog_reference_cost_events,
-- and catalog_product_link_events all carry the same standardized provenance
-- block (EIS Section 5.0, corrected authority_basis per report1.37.md LSF-3 /
-- SA-3). Phase 1 hardcodes channel='dashboard' and authority_basis to the one
-- truthful value; no future-permission vocabulary is stored as authorization
-- evidence.

CREATE OR REPLACE FUNCTION public.catalog_event_provenance_guard()
RETURNS trigger LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  RAISE EXCEPTION '% is append-only and immutable', TG_TABLE_NAME;
END;
$$;

-- 9.1 catalog_selling_price_events
CREATE TABLE public.catalog_selling_price_events (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id             uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  product_id              uuid NOT NULL,
  previous_price          numeric(14, 2),
  new_price               numeric(14, 2) NOT NULL CHECK (new_price > 0),
  source                  text NOT NULL CHECK (source IN ('direct_change', 'link_confirmed')),
  authorized_by_user_id   uuid NOT NULL,
  executed_by_actor_type  text NOT NULL DEFAULT 'user' CHECK (executed_by_actor_type = 'user'),
  system_run_id           uuid,
  channel                 text NOT NULL DEFAULT 'dashboard' CHECK (channel = 'dashboard'),
  request_id              uuid NOT NULL DEFAULT gen_random_uuid(),
  authority_basis         text NOT NULL DEFAULT 'owner_via_businesses.owner_id'
                             CHECK (authority_basis = 'owner_via_businesses.owner_id'),
  recorded_at             timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT catalog_selling_price_events_business_id_uniq UNIQUE (business_id, id),
  CONSTRAINT catalog_selling_price_events_product_fk
    FOREIGN KEY (business_id, product_id)
      REFERENCES public.catalog_products (business_id, id)
      ON DELETE RESTRICT
);

CREATE INDEX catalog_selling_price_events_product_idx
  ON public.catalog_selling_price_events (business_id, product_id, recorded_at DESC);

CREATE TRIGGER catalog_selling_price_events_no_update
  BEFORE UPDATE ON public.catalog_selling_price_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();
CREATE TRIGGER catalog_selling_price_events_no_delete
  BEFORE DELETE ON public.catalog_selling_price_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();

REVOKE ALL ON public.catalog_selling_price_events FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_selling_price_events TO service_role;
GRANT INSERT, SELECT ON public.catalog_selling_price_events TO catalog_pricing_executor;
GRANT INSERT, SELECT ON public.catalog_selling_price_events TO catalog_link_executor;
GRANT SELECT ON public.catalog_selling_price_events TO catalog_read_executor;

ALTER TABLE public.catalog_selling_price_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "pricing_executor_select_own_business"
  ON public.catalog_selling_price_events FOR SELECT TO catalog_pricing_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "pricing_executor_insert_own_business"
  ON public.catalog_selling_price_events FOR INSERT TO catalog_pricing_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_select_own_business"
  ON public.catalog_selling_price_events FOR SELECT TO catalog_link_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_insert_own_business"
  ON public.catalog_selling_price_events FOR INSERT TO catalog_link_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "read_executor_select_own_business"
  ON public.catalog_selling_price_events FOR SELECT TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- 9.2 catalog_tax_events
CREATE TABLE public.catalog_tax_events (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id             uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  product_id              uuid NOT NULL,
  previous_treatment      public.catalog_tax_treatment,
  previous_rate_percent   numeric(5, 2),
  new_treatment           public.catalog_tax_treatment NOT NULL,
  new_rate_percent        numeric(5, 2),
  authorized_by_user_id   uuid NOT NULL,
  executed_by_actor_type  text NOT NULL DEFAULT 'user' CHECK (executed_by_actor_type = 'user'),
  system_run_id           uuid,
  channel                 text NOT NULL DEFAULT 'dashboard' CHECK (channel = 'dashboard'),
  request_id              uuid NOT NULL DEFAULT gen_random_uuid(),
  authority_basis         text NOT NULL DEFAULT 'owner_via_businesses.owner_id'
                             CHECK (authority_basis = 'owner_via_businesses.owner_id'),
  recorded_at             timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT catalog_tax_events_business_id_uniq UNIQUE (business_id, id),
  CONSTRAINT catalog_tax_events_product_fk
    FOREIGN KEY (business_id, product_id)
      REFERENCES public.catalog_products (business_id, id)
      ON DELETE RESTRICT,
  CONSTRAINT catalog_tax_events_rate_pair CHECK (
    (new_treatment = 'product_specific_rate' AND new_rate_percent IS NOT NULL) OR
    (new_treatment <> 'product_specific_rate' AND new_rate_percent IS NULL)
  )
);

CREATE INDEX catalog_tax_events_product_idx
  ON public.catalog_tax_events (business_id, product_id, recorded_at DESC);

CREATE TRIGGER catalog_tax_events_no_update
  BEFORE UPDATE ON public.catalog_tax_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();
CREATE TRIGGER catalog_tax_events_no_delete
  BEFORE DELETE ON public.catalog_tax_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();

REVOKE ALL ON public.catalog_tax_events FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_tax_events TO service_role;
GRANT INSERT, SELECT ON public.catalog_tax_events TO catalog_tax_executor;
GRANT SELECT ON public.catalog_tax_events TO catalog_read_executor;

ALTER TABLE public.catalog_tax_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "tax_executor_select_own_business"
  ON public.catalog_tax_events FOR SELECT TO catalog_tax_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "tax_executor_insert_own_business"
  ON public.catalog_tax_events FOR INSERT TO catalog_tax_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "read_executor_select_own_business"
  ON public.catalog_tax_events FOR SELECT TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- 9.3 catalog_reference_cost_events (cost-confidential: no audit-table
-- privilege for catalog_cost_executor anywhere in this migration).
CREATE TABLE public.catalog_reference_cost_events (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id             uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  product_id              uuid NOT NULL,
  previous_cost           numeric(14, 2),
  new_cost                numeric(14, 2) NOT NULL CHECK (new_cost >= 0),
  authorized_by_user_id   uuid NOT NULL,
  executed_by_actor_type  text NOT NULL DEFAULT 'user' CHECK (executed_by_actor_type = 'user'),
  system_run_id           uuid,
  channel                 text NOT NULL DEFAULT 'dashboard' CHECK (channel = 'dashboard'),
  request_id              uuid NOT NULL DEFAULT gen_random_uuid(),
  authority_basis         text NOT NULL DEFAULT 'owner_via_businesses.owner_id'
                             CHECK (authority_basis = 'owner_via_businesses.owner_id'),
  recorded_at             timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT catalog_reference_cost_events_business_id_uniq UNIQUE (business_id, id),
  CONSTRAINT catalog_reference_cost_events_product_fk
    FOREIGN KEY (business_id, product_id)
      REFERENCES public.catalog_products (business_id, id)
      ON DELETE RESTRICT
);

CREATE INDEX catalog_reference_cost_events_product_idx
  ON public.catalog_reference_cost_events (business_id, product_id, recorded_at DESC);

CREATE TRIGGER catalog_reference_cost_events_no_update
  BEFORE UPDATE ON public.catalog_reference_cost_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();
CREATE TRIGGER catalog_reference_cost_events_no_delete
  BEFORE DELETE ON public.catalog_reference_cost_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();

REVOKE ALL ON public.catalog_reference_cost_events FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_reference_cost_events TO service_role;
GRANT INSERT, SELECT ON public.catalog_reference_cost_events TO catalog_cost_executor;
-- read_executor may SELECT only for authorized cost-visible JSON
-- construction (Stage 2); still never exposed through search/list/summary.
GRANT SELECT ON public.catalog_reference_cost_events TO catalog_read_executor;

ALTER TABLE public.catalog_reference_cost_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "cost_executor_select_own_business"
  ON public.catalog_reference_cost_events FOR SELECT TO catalog_cost_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "cost_executor_insert_own_business"
  ON public.catalog_reference_cost_events FOR INSERT TO catalog_cost_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "read_executor_select_own_business"
  ON public.catalog_reference_cost_events FOR SELECT TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- 9.4 catalog_product_link_events
CREATE TABLE public.catalog_product_link_events (
  id                        uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id               uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  product_id                uuid NOT NULL,
  action                    public.catalog_link_action NOT NULL,
  previous_inventory_item_id uuid,
  new_inventory_item_id     uuid,
  previous_selling_unit     text,
  new_selling_unit          text,
  -- One-directional reference: a link event may point at the price event it
  -- caused; price events never reference link events (report1.37.md item 79).
  resulting_price_event_id  uuid REFERENCES public.catalog_selling_price_events(id),
  preview_token_id          uuid NOT NULL REFERENCES public.catalog_link_preview_tokens(id),
  authorized_by_user_id     uuid NOT NULL,
  executed_by_actor_type    text NOT NULL DEFAULT 'user' CHECK (executed_by_actor_type = 'user'),
  system_run_id             uuid,
  channel                   text NOT NULL DEFAULT 'dashboard' CHECK (channel = 'dashboard'),
  request_id                uuid NOT NULL DEFAULT gen_random_uuid(),
  authority_basis           text NOT NULL DEFAULT 'owner_via_businesses.owner_id'
                               CHECK (authority_basis = 'owner_via_businesses.owner_id'),
  recorded_at               timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT catalog_product_link_events_business_id_uniq UNIQUE (business_id, id),
  CONSTRAINT catalog_product_link_events_product_fk
    FOREIGN KEY (business_id, product_id)
      REFERENCES public.catalog_products (business_id, id)
      ON DELETE RESTRICT,
  CONSTRAINT catalog_product_link_events_action_target_pair CHECK (
    (action = 'assign_or_replace' AND new_inventory_item_id IS NOT NULL) OR
    (action = 'remove' AND new_inventory_item_id IS NULL)
  )
);

CREATE INDEX catalog_product_link_events_product_idx
  ON public.catalog_product_link_events (business_id, product_id, recorded_at DESC);

CREATE TRIGGER catalog_product_link_events_no_update
  BEFORE UPDATE ON public.catalog_product_link_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();
CREATE TRIGGER catalog_product_link_events_no_delete
  BEFORE DELETE ON public.catalog_product_link_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();

REVOKE ALL ON public.catalog_product_link_events FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_product_link_events TO service_role;
GRANT INSERT, SELECT ON public.catalog_product_link_events TO catalog_link_executor;
GRANT SELECT ON public.catalog_product_link_events TO catalog_read_executor;

ALTER TABLE public.catalog_product_link_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "link_executor_select_own_business"
  ON public.catalog_product_link_events FOR SELECT TO catalog_link_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_insert_own_business"
  ON public.catalog_product_link_events FOR INSERT TO catalog_link_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "read_executor_select_own_business"
  ON public.catalog_product_link_events FOR SELECT TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- =============================================================================
-- 10. catalog_audit_events (closed JSON allowlist, no cost data)
-- =============================================================================
CREATE TABLE public.catalog_audit_events (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id             uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  entity_type             text NOT NULL CHECK (entity_type IN ('catalog_product', 'catalog_category')),
  entity_id               uuid NOT NULL,
  change_type             text NOT NULL CHECK (change_type IN (
                             'product_created', 'product_identity_updated', 'product_unit_updated',
                             'category_created', 'category_archived',
                             'product_archived', 'product_reactivated',
                             'inventory_link_assigned', 'inventory_link_replaced', 'inventory_link_removed'
                           )),
  change_payload          jsonb NOT NULL,
  authorized_by_user_id   uuid NOT NULL,
  executed_by_actor_type  text NOT NULL DEFAULT 'user' CHECK (executed_by_actor_type = 'user'),
  system_run_id           uuid,
  channel                 text NOT NULL DEFAULT 'dashboard' CHECK (channel = 'dashboard'),
  request_id              uuid NOT NULL DEFAULT gen_random_uuid(),
  authority_basis         text NOT NULL DEFAULT 'owner_via_businesses.owner_id'
                             CHECK (authority_basis = 'owner_via_businesses.owner_id'),
  recorded_at             timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT catalog_audit_events_business_id_uniq UNIQUE (business_id, id)
);

CREATE INDEX catalog_audit_events_entity_idx
  ON public.catalog_audit_events (business_id, entity_type, entity_id, recorded_at DESC);

-- Closed top-level and nested-key allowlist per change_type. Rejects the
-- write (before insertion) if change_payload contains any key outside the
-- allowlist for its change_type, or any cost-adjacent key anywhere at all
-- (report1.37.md items 82-84).
CREATE OR REPLACE FUNCTION catalog_internal.validate_audit_payload(
  p_change_type text, p_payload jsonb
) RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE
SET search_path = ''
AS $$
DECLARE
  v_allowed_top text[];
  v_allowed_nested text[];
  v_key text;
  v_nested_key text;
  v_side text;
BEGIN
  -- Defence in depth: no cost-adjacent key is ever permitted, regardless of
  -- change_type or nesting depth.
  IF p_payload::text ~* '"(reference_cost|old_cost|new_cost|margin|profit)"' THEN
    RETURN false;
  END IF;

  v_allowed_top := CASE p_change_type
    WHEN 'product_created' THEN ARRAY['after']
    WHEN 'product_identity_updated' THEN ARRAY['before', 'after']
    WHEN 'product_unit_updated' THEN ARRAY['before', 'after']
    WHEN 'category_created' THEN ARRAY['after']
    WHEN 'category_archived' THEN ARRAY['before', 'after']
    WHEN 'product_archived' THEN ARRAY['before', 'after']
    WHEN 'product_reactivated' THEN ARRAY['before', 'after']
    WHEN 'inventory_link_assigned' THEN ARRAY['after']
    WHEN 'inventory_link_replaced' THEN ARRAY['before', 'after']
    WHEN 'inventory_link_removed' THEN ARRAY['before']
    ELSE NULL
  END;

  IF v_allowed_top IS NULL THEN
    RETURN false;
  END IF;

  FOR v_key IN SELECT jsonb_object_keys(p_payload) LOOP
    IF NOT (v_key = ANY (v_allowed_top)) THEN
      RETURN false;
    END IF;
  END LOOP;

  v_allowed_nested := CASE p_change_type
    WHEN 'product_created' THEN
      ARRAY['name', 'description', 'category_id', 'sku', 'barcode', 'selling_unit']
    WHEN 'product_identity_updated' THEN
      ARRAY['name', 'description', 'category_id', 'sku', 'barcode']
    WHEN 'product_unit_updated' THEN
      ARRAY['selling_unit']
    WHEN 'category_created' THEN
      ARRAY['name']
    WHEN 'category_archived' THEN
      ARRAY['status', 'name']
    WHEN 'product_archived' THEN
      ARRAY['status']
    WHEN 'product_reactivated' THEN
      ARRAY['status']
    WHEN 'inventory_link_assigned' THEN
      ARRAY['inventory_item_id', 'selling_unit']
    WHEN 'inventory_link_replaced' THEN
      ARRAY['inventory_item_id', 'selling_unit']
    WHEN 'inventory_link_removed' THEN
      ARRAY['inventory_item_id', 'selling_unit']
    ELSE ARRAY[]::text[]
  END;

  FOREACH v_side IN ARRAY v_allowed_top LOOP
    FOR v_nested_key IN SELECT jsonb_object_keys(p_payload -> v_side) LOOP
      IF NOT (v_nested_key = ANY (v_allowed_nested)) THEN
        RETURN false;
      END IF;
    END LOOP;
  END LOOP;

  RETURN true;
END;
$$;

REVOKE ALL ON FUNCTION catalog_internal.validate_audit_payload(text, jsonb) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION catalog_internal.validate_audit_payload(text, jsonb) TO
  catalog_identity_executor, catalog_lifecycle_executor, catalog_tax_executor, catalog_link_executor;

ALTER TABLE public.catalog_audit_events
  ADD CONSTRAINT catalog_audit_events_closed_payload
  CHECK (catalog_internal.validate_audit_payload(change_type, change_payload));

CREATE TRIGGER catalog_audit_events_no_update
  BEFORE UPDATE ON public.catalog_audit_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();
CREATE TRIGGER catalog_audit_events_no_delete
  BEFORE DELETE ON public.catalog_audit_events
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();

REVOKE ALL ON public.catalog_audit_events FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_audit_events TO service_role;
GRANT INSERT ON public.catalog_audit_events TO
  catalog_identity_executor, catalog_lifecycle_executor, catalog_tax_executor, catalog_link_executor;
-- catalog_cost_executor deliberately receives no privilege here at all
-- (report1.37.md LSF-10 / SA-10). catalog_pricing_executor is not granted
-- here either: price changes are fully captured by
-- catalog_selling_price_events and do not additionally write audit_events
-- in this design, avoiding redundant/duplicated history.
-- No Phase 1 read contract requires exposing this table, so
-- catalog_read_executor receives no SELECT grant here (Section 7).

ALTER TABLE public.catalog_audit_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "identity_executor_insert_own_business"
  ON public.catalog_audit_events FOR INSERT TO catalog_identity_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "lifecycle_executor_insert_own_business"
  ON public.catalog_audit_events FOR INSERT TO catalog_lifecycle_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "tax_executor_insert_own_business"
  ON public.catalog_audit_events FOR INSERT TO catalog_tax_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_insert_own_business"
  ON public.catalog_audit_events FOR INSERT TO catalog_link_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- =============================================================================
-- 11. catalog_deletion_records (minimal, non-cost deletion snapshot)
-- =============================================================================
CREATE TABLE public.catalog_deletion_records (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id            uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  deleted_product_id     uuid NOT NULL,
  product_name_snapshot  text NOT NULL,
  deleted_at             timestamptz NOT NULL DEFAULT now(),
  deleted_by_user_id     uuid NOT NULL
);

CREATE INDEX catalog_deletion_records_business_idx
  ON public.catalog_deletion_records (business_id, deleted_at DESC);

CREATE TRIGGER catalog_deletion_records_no_update
  BEFORE UPDATE ON public.catalog_deletion_records
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();
CREATE TRIGGER catalog_deletion_records_no_delete
  BEFORE DELETE ON public.catalog_deletion_records
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();

REVOKE ALL ON public.catalog_deletion_records FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_deletion_records TO service_role;
GRANT INSERT ON public.catalog_deletion_records TO catalog_lifecycle_executor;
-- No Phase 1 client release (report1.37.md Section 7); read_executor
-- receives no grant.

ALTER TABLE public.catalog_deletion_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lifecycle_executor_insert_own_business"
  ON public.catalog_deletion_records FOR INSERT TO catalog_lifecycle_executor
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- =============================================================================
-- 12. catalog_write_idempotency_keys (shared outcome-of-record)
-- =============================================================================
CREATE TABLE public.catalog_write_idempotency_keys (
  id                   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id          uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  operation            text NOT NULL CHECK (length(btrim(operation)) > 0),
  idempotency_key      uuid NOT NULL,
  payload_fingerprint  text NOT NULL,
  outcome_status       text NOT NULL CHECK (outcome_status IN ('completed', 'rejected')),
  rejection_reason     text,
  result_ref           jsonb,
  created_at           timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT catalog_write_idempotency_keys_scope_uniq
    UNIQUE (business_id, operation, idempotency_key),
  CONSTRAINT catalog_write_idempotency_keys_rejection_pair CHECK (
    (outcome_status = 'rejected' AND rejection_reason IS NOT NULL) OR
    (outcome_status = 'completed' AND rejection_reason IS NULL)
  )
);

CREATE TRIGGER catalog_write_idempotency_keys_no_update
  BEFORE UPDATE ON public.catalog_write_idempotency_keys
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();
CREATE TRIGGER catalog_write_idempotency_keys_no_delete
  BEFORE DELETE ON public.catalog_write_idempotency_keys
  FOR EACH ROW EXECUTE FUNCTION public.catalog_event_provenance_guard();

REVOKE ALL ON public.catalog_write_idempotency_keys FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_write_idempotency_keys TO service_role;
GRANT SELECT, INSERT ON public.catalog_write_idempotency_keys TO
  catalog_identity_executor, catalog_lifecycle_executor, catalog_pricing_executor,
  catalog_tax_executor, catalog_cost_executor, catalog_link_executor;
-- catalog_read_executor needs SELECT only, for command 16
-- (get_catalog_command_outcome); it never claims a key.
GRANT SELECT ON public.catalog_write_idempotency_keys TO catalog_read_executor;

ALTER TABLE public.catalog_write_idempotency_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "identity_executor_all_own_business"
  ON public.catalog_write_idempotency_keys FOR ALL TO catalog_identity_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "lifecycle_executor_all_own_business"
  ON public.catalog_write_idempotency_keys FOR ALL TO catalog_lifecycle_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "pricing_executor_all_own_business"
  ON public.catalog_write_idempotency_keys FOR ALL TO catalog_pricing_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "tax_executor_all_own_business"
  ON public.catalog_write_idempotency_keys FOR ALL TO catalog_tax_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "cost_executor_all_own_business"
  ON public.catalog_write_idempotency_keys FOR ALL TO catalog_cost_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "link_executor_all_own_business"
  ON public.catalog_write_idempotency_keys FOR ALL TO catalog_link_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()))
  WITH CHECK (business_id = catalog_internal.resolve_owner_business(auth.uid()));
CREATE POLICY "read_executor_select_own_business"
  ON public.catalog_write_idempotency_keys FOR SELECT TO catalog_read_executor
  USING (business_id = catalog_internal.resolve_owner_business(auth.uid()));

-- =============================================================================
-- 13. Table-owner sanity assertions
-- =============================================================================
-- All eleven tables must be owned by postgres; no executor may own a table.
DO $$
DECLARE
  t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'catalog_products','catalog_categories','catalog_selling_price_events',
    'catalog_tax_events','business_tax_settings','catalog_reference_cost_events',
    'catalog_link_preview_tokens','catalog_product_link_events','catalog_audit_events',
    'catalog_deletion_records','catalog_write_idempotency_keys'
  ] LOOP
    IF NOT EXISTS (
      SELECT 1 FROM pg_tables
       WHERE schemaname = 'public' AND tablename = t AND tableowner = 'postgres'
    ) THEN
      RAISE EXCEPTION 'Table % is not owned by postgres', t;
    END IF;
  END LOOP;
END $$;
