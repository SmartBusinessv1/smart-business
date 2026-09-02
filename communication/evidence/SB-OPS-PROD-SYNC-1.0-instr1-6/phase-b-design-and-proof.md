# instruction1.6 Phase B — Verified Design, Not Yet a Runnable Main-Branch Migration

## Status

`VERIFIED DESIGN — NOT PRESENT AS AN EXECUTABLE MIGRATION IN `main``

This document is the sole record of Phase B (schema-level product↔Inventory one-to-one enforcement) following Mission Control's packaging correction on `smart-business#463`. It was **removed** from `supabase/migrations/**` because that migration is mechanically proven (below) to fail against production's current known duplicate state, and leaving it in `supabase/migrations/**` while that duplicate exists would create a real deployment hazard: a future ordinary migration run could reach it before the Phase C repair is complete and fail mid-run.

Nothing in this document is executable by its presence here. Per `docs/migration/README.md`'s Default-Deny Execution Rule, turning this design into a runnable migration file, and then executing it, both require their own separate, explicit, current mission authorization — and, specifically for this design, only *after* the Phase C repair (`communication/live/report1.6.md` §5) has itself been separately authorized and executed against production so the known duplicate no longer exists.

## Chosen invariant

```sql
ALTER TABLE public.catalog_products
  ADD CONSTRAINT catalog_products_business_inventory_item_uniq
  UNIQUE (business_id, inventory_item_id);
```

A plain, non-partial `UNIQUE` constraint — not a partial index filtered by `status`.

## Rationale

`report1.6.md`'s first draft (before this correction) had speculated a `WHERE status <> 'archived'` partial predicate. That guess was wrong. The correct predicate, read directly from `catalog_products`'s own existing sibling identity constraints (`supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`), is to **not** filter by status at all: those constraints' own schema comment states the deliberate policy this design extends for consistency —

> "Archived identities remain reserved: plain, non-partial constraints"

An archived product's `inventory_item_id` therefore remains permanently reserved, exactly like its name/SKU/barcode. Reactivation needs no special handling under this rule: `archive_catalog_product`/`reactivate_catalog_product` never touch `inventory_item_id`, so a reactivated product's link was never released and this constraint was never at risk of being violated by it. A plain (non-partial) `UNIQUE` constraint is sufficient, not a partial index: Postgres treats each `NULL` `inventory_item_id` (a non-stock-tracked product) as distinct from every other `NULL`, so any number of non-stock-tracked products remain unaffected — exactly how the existing SKU/barcode constraints already handle products with no SKU/barcode.

This design is the sole intended authoritative guarantee. The Phase A application-level guard (`supabase/migrations/20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql`, still executable and unaffected by this correction) uses the identical predicate — `(business_id, inventory_item_id)`, excluding the row's own id — so neither layer can ever accept a case the other would reject, once this design is eventually deployed.

## Mechanical proof (verified against the isolated `smart-business-test` project only; never against production)

Two things were directly proven by executing SQL against the isolated test project (`drravyyauixltoihzmwo`), inside transactions rolled back afterward with the state confirmed unchanged — not asserted from reasoning alone:

1. **The constraint works and does not break normal use.** Applied to the clean test project (0 pre-existing duplicate groups across 165 products / 903 items): the `ADD CONSTRAINT` succeeded outright, both via direct SQL and via a real, tracked `supabase db push`. A subsequent attempt to make a second product reference an already-claimed item failed with `23505: duplicate key value violates unique constraint "catalog_products_business_inventory_item_uniq"`.
2. **The constraint cannot be silently deployed against production's current shape.** Inside a rolled-back transaction: the constraint was dropped, a genuine duplicate was forced (two products referencing the same item — modeling production's exact known `Mango`/`Milma Milk`/`AVT Tea Powder` state), and the identical `ADD CONSTRAINT` statement above was re-run. Result:

   ```text
   ERROR: 23505: could not create unique index "catalog_products_business_inventory_item_uniq"
   DETAIL: Key (business_id, inventory_item_id)=(...) is duplicated.
   ```

   Postgres itself refuses this migration while a duplicate exists. This is a mechanical guarantee, not a comment-based guardrail — exactly the property Mission Control's packaging correction is protecting by keeping this design out of `supabase/migrations/**` until that guarantee is no longer needed as a safety net (i.e., until the duplicate is actually gone).

Both transactions were rolled back; the test project was left with only the Phase A functions applied and zero duplicate groups, confirmed directly afterward.

## Intended future migration

Once the Phase C repair (`communication/live/report1.6.md` §5) has been designed, separately authorized, and executed against production so `Mango`, `Milma Milk`, and `AVT Tea Powder` no longer collide, a new migration file may be authored under `supabase/migrations/**` containing exactly the statement in "Chosen invariant" above (with header commentary updated to reflect the repair's completion), and that new file's own production execution separately authorized per `docs/migration/README.md`. This document is the complete, ready-to-copy source for that future file — nothing about the invariant itself needs to change; only its packaging (a runnable migration, timestamped at the time it is authorized) does.
