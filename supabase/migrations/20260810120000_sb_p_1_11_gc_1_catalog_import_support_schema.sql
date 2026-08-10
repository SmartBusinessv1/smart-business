-- SB-P-1.11-GC-1: Bulk Catalog import support schema.
--
-- Authorized by communication/live/instruction1.77.md (Build Lock /
-- controlled implementation), executing the physical contract locked in
-- docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md
-- Part K §45.5 (Revision 4.0), independently re-confirmed by Supabase
-- Backend Architecture in communication/live/report1.83.md.
--
-- Two new tables, business-isolated application data -- NOT owned by a
-- SECURITY DEFINER executor, NOT counted in the 19-command Catalog
-- contract, and NEVER treated as authoritative for any Catalog Product
-- Truth mutation. All actual product mutation continues through the
-- existing, unmodified create_catalog_product command via the caller-JWT
-- client (src/server-functions/catalog-import.ts); these tables hold only
-- batch/row bookkeeping written by the narrow server-only bookkeeping
-- client (EIS §45.1.1).
--
-- Migration order (EIS §45.5.4, report1.83.md §11), applied test-project
-- only under this instruction -- production migration requires separate
-- explicit authority (instruction1.77.md §10):
--   1. create both tables with final constraints/indexes;
--   2. neutralize inherited anon/authenticated grants (this repo's
--      supabase/migrations/20260727000000_reconcile_default_grants.sql
--      ALTER DEFAULT PRIVILEGES rule otherwise grants both roles full
--      access to any newly created table);
--   3. enable RLS;
--   4. create the authenticated-executable Owner-only SELECT policy,
--      reusing catalog_categories' own live, working predicate verbatim
--      (business_id IN (SELECT id FROM businesses WHERE owner_id =
--      auth.uid())) -- NOT catalog_internal.resolve_owner_business(), which
--      this schema's own Stage 1 migration grants EXECUTE on only to the
--      seven Catalog executor roles, never to authenticated;
--   5. grant authenticated SELECT only.
--
-- Known limitation, disclosed rather than silently worked around: because
-- matched_product_id/resolved_product_id are tenant-bound composite FKs to
-- catalog_products with no ON DELETE clause (defaulting to NO ACTION, i.e.
-- blocking), a product that has ever been referenced by an import batch
-- row cannot be hard-deleted via the existing, unmodified
-- delete_catalog_product command without first satisfying this
-- constraint. delete_catalog_product's own dependent-history pre-check
-- (four existing event tables) does not examine these new tables, and
-- this migration does not alter that command -- doing so is outside this
-- instruction's authorized scope (instruction1.77.md §4: no signature or
-- authority change to an existing Catalog command without separate
-- authorization). The practical effect is a raw foreign-key-violation
-- database error instead of the command's usual clean
-- DEPENDENT_HISTORY_CONFLICT rejection, in this one narrow case. Archiving
-- an imported/matched product is entirely unaffected (no FK touches
-- archive). See communication/live/report1.84.md for the full disclosure.

-- =============================================================================
-- 1. catalog_import_batches
-- =============================================================================
CREATE TABLE public.catalog_import_batches (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id        uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  initiated_by       uuid NOT NULL,
  original_filename  text NOT NULL,
  file_kind          text NOT NULL CHECK (file_kind IN ('csv', 'xlsx')),
  row_count          integer NOT NULL CHECK (row_count >= 0),
  status             text NOT NULL DEFAULT 'previewed'
                        CHECK (status IN ('previewed', 'committing', 'committed', 'failed')),
  created_at         timestamptz NOT NULL DEFAULT now(),
  committed_at       timestamptz,

  CONSTRAINT catalog_import_batches_business_id_uniq UNIQUE (business_id, id),

  -- Bidirectional coherence (EIS §45.5.1, BA-5): committed_at is set if and
  -- only if status = 'committed'.
  CONSTRAINT catalog_import_batches_committed_at_pair CHECK (
    (status = 'committed') = (committed_at IS NOT NULL)
  )
);

-- Owner-scoped batch history/list reads. No status-only index: the atomic
-- claim in EIS §45.5.5 addresses a single row by primary key.
CREATE INDEX catalog_import_batches_business_history_idx
  ON public.catalog_import_batches (business_id, created_at DESC, id);

-- Neutralize inherited default privileges (BA-1), then apply exact narrow
-- grants -- matching the same pattern already applied to catalog_categories
-- and catalog_products in supabase/migrations/20260806120000_....sql.
REVOKE ALL ON public.catalog_import_batches FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_import_batches TO service_role;
GRANT SELECT ON public.catalog_import_batches TO authenticated;

ALTER TABLE public.catalog_import_batches ENABLE ROW LEVEL SECURITY;

-- Executable Owner-only predicate (BA-2): reused verbatim from
-- catalog_categories' own authenticated_select_own_business_category_columns
-- policy, not catalog_internal.resolve_owner_business (never granted to
-- authenticated).
CREATE POLICY "owner_select_own_business"
  ON public.catalog_import_batches FOR SELECT
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

-- =============================================================================
-- 2. catalog_import_rows
-- =============================================================================
CREATE TABLE public.catalog_import_rows (
  id                          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  batch_id                    uuid NOT NULL,
  business_id                 uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  row_number                  integer NOT NULL CHECK (row_number >= 1),
  status                      text NOT NULL
                                 CHECK (status IN
                                   ('READY', 'NEEDS_CORRECTION', 'POSSIBLE_MATCH', 'SKIPPED',
                                    'CREATED', 'FAILED')),
  -- Allowlisted fields only (EIS §45.8): name, selling_unit, category_label,
  -- sku, barcode, description, selling_price, tax_treatment,
  -- tax_rate_percent, and reference_cost only when
  -- has_reference_cost_authority is true. Enforced at the application
  -- layer (src/server-functions/catalog-import.ts), not a DB JSON schema.
  parsed_snapshot             jsonb NOT NULL,
  has_reference_cost_authority boolean NOT NULL,
  correction_reason           text
                                 CHECK (correction_reason IS NULL OR correction_reason IN
                                   ('MISSING_NAME', 'DUPLICATE_NAME', 'DUPLICATE_SKU',
                                    'DUPLICATE_BARCODE', 'INVALID_UNIT', 'INVALID_CATEGORY',
                                    'INVALID_PRICE', 'INVALID_TAX')),
  matched_product_id          uuid,
  row_idempotency_key         uuid NOT NULL DEFAULT gen_random_uuid(),
  resolved_product_id         uuid,
  resolved_by                 uuid,
  resolved_at                 timestamptz,
  created_at                  timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT catalog_import_rows_batch_row_number_uniq UNIQUE (batch_id, row_number),
  CONSTRAINT catalog_import_rows_business_idempotency_key_uniq
    UNIQUE (business_id, row_idempotency_key),

  -- Tenant-binding composite FK (BA-3): a row whose business_id disagrees
  -- with its own batch's business_id is structurally unrepresentable, even
  -- under a service-role application bug that bypasses RLS. RESTRICT (not
  -- CASCADE): deleting a batch while rows still reference it is refused,
  -- consistent with the non-destructive retention posture (EIS §45.5.3,
  -- BA-6) -- no code path in this design ever deletes a batch or row.
  CONSTRAINT catalog_import_rows_batch_fk
    FOREIGN KEY (business_id, batch_id)
      REFERENCES public.catalog_import_batches (business_id, id)
      ON DELETE RESTRICT,

  -- Same-business composite FKs (BA-3). Postgres's default MATCH SIMPLE
  -- semantics mean these are not evaluated when the referencing column is
  -- NULL, preserving null-safety for unmatched/unresolved rows. No ON
  -- DELETE clause (defaults to NO ACTION/blocking) -- see the migration
  -- header note on the resulting delete_catalog_product interaction.
  CONSTRAINT catalog_import_rows_matched_product_fk
    FOREIGN KEY (business_id, matched_product_id)
      REFERENCES public.catalog_products (business_id, id),
  CONSTRAINT catalog_import_rows_resolved_product_fk
    FOREIGN KEY (business_id, resolved_product_id)
      REFERENCES public.catalog_products (business_id, id),

  -- Status-coupled resolution evidence (BA-5): a CREATED row must carry its
  -- full resolution evidence; a non-CREATED row (including FAILED) can
  -- never carry a forged/stale resolved_product_id.
  CONSTRAINT catalog_import_rows_resolution_pair CHECK (
    (status = 'CREATED' AND resolved_product_id IS NOT NULL
       AND resolved_by IS NOT NULL AND resolved_at IS NOT NULL)
    OR
    (status <> 'CREATED' AND resolved_product_id IS NULL
       AND resolved_by IS NULL AND resolved_at IS NULL)
  )
);

-- Business-scoped batch row delivery, and commit/retry row selection
-- (status IN ('READY','FAILED'), EIS §45.5.5 step 3). No index on
-- parsed_snapshot.
CREATE INDEX catalog_import_rows_batch_delivery_idx
  ON public.catalog_import_rows (business_id, batch_id, row_number);
CREATE INDEX catalog_import_rows_batch_retry_idx
  ON public.catalog_import_rows (business_id, batch_id, status, row_number);

REVOKE ALL ON public.catalog_import_rows FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_import_rows TO service_role;
GRANT SELECT ON public.catalog_import_rows TO authenticated;

ALTER TABLE public.catalog_import_rows ENABLE ROW LEVEL SECURITY;

CREATE POLICY "owner_select_own_business"
  ON public.catalog_import_rows FOR SELECT
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));

-- Not touched by this migration, unchanged: any Catalog command function
-- body/ownership, the 19-command public surface, catalog_products/
-- catalog_categories schema or grants, catalog_internal helper grants, or
-- any privilege for anon (zero access to either new table) beyond what is
-- explicitly granted above.
