# SMART BUSINESS — REPOSITORY COMMUNICATION

# report1.8 — Phase B Product ↔ Inventory Structural Uniqueness Result

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Sequence:** `1.8`

**From:** `Claude Code / Repository Engineering Operator`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction1.8.md`

**Date:** `2026-09-02`

**Final status:** `PASS`

---

## 1. Verified Baseline

Pulled `smart-business/main` fresh to `4558080` before any work began — confirmed present: `communication/live/report1.7.md` and `supabase/migrations/20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair.sql` (the merged repair from instruction1.7). Production migration state confirmed in sync at 22/22 (`local == remote` for every tracked file, including both the repair and Phase A) before this instruction's own work began.

## 2. Duplicate Precheck — the Explicit Stop Condition

Read fresh from production, before any write:

```sql
SELECT business_id, inventory_item_id, count(*) ...
FROM public.catalog_products
WHERE inventory_item_id IS NOT NULL
GROUP BY business_id, inventory_item_id
HAVING count(*) > 1;
```

Result: **zero rows.** No duplicate `(business_id, inventory_item_id)` group exists anywhere in production. Per the explicit stop condition on this instruction, execution proceeded because the precheck was zero; had it returned any row, this report would instead state the exact rows and stop without further action.

## 3. Exact Migration Authored

`supabase/migrations/20260902150000_sb_ops_prod_sync_1_0_instr1_8_phase_b_inventory_item_uniqueness.sql` — the exact, unmodified invariant from `communication/evidence/SB-OPS-PROD-SYNC-1.0-instr1-6/phase-b-design-and-proof.md`:

```sql
ALTER TABLE public.catalog_products
  ADD CONSTRAINT catalog_products_business_inventory_item_uniq
  UNIQUE (business_id, inventory_item_id);
```

Nothing about the invariant was redesigned; only its header commentary was updated to record that the blocking duplicate is now repaired (instruction1.7) and re-confirmed absent (§2), and that this file is the promotion of the already-verified design into an executable migration.

## 4. Test-Project Rehearsal

Applied via the repository-approved mechanism (`node scripts/supabase-cli.mjs test db push --include-all`) against the isolated `smart-business-test` project (`drravyyauixltoihzmwo`), which was already at zero duplicate groups. Result: `"Finished supabase db push."`, confirmed via direct inspection afterward:

- `pg_constraint`: `catalog_products_business_inventory_item_uniq`, type `u` (unique), columns exactly `(business_id, inventory_item_id)`.
- Data unchanged: 165 products, 903 items, 0 duplicate groups.

**Note on the instruction1.7 repair migration's presence in `supabase/migrations/**` during this rehearsal:** that file is production-specific (its precondition checks hardcode `Bhai Store`'s exact production business/product/item ids) and was never genuinely applied to the test project — only its logic was rehearsed there earlier with substituted synthetic ids (`report1.7.md`). Running `db push` on the test project with that file still present and still unrecorded in the test project's own migration history correctly triggered its own precondition guard (`RAISE EXCEPTION 'instr1.7 repair precondition failed: business/owner mismatch'`) — proof the guard genuinely refuses to run against data it doesn't recognize, exactly as designed, rather than a defect. To let `db push` reach the new Phase B file for this rehearsal, that repair file was temporarily held outside `supabase/migrations/**`, the Phase B rehearsal was run and verified, and the repair file was then restored unchanged before continuing. This has no bearing on production, where that repair file is already correctly recorded as applied for real.

**Proof the database now rejects a second product reusing an already-referenced item** (instruction1.8 §8), performed live against the test project inside a transaction:

1. Linked an already-unlinked fixture product (`Apple Juice`) to an existing, unclaimed fixture item (`Test Stock Item`) — succeeded.
2. Attempted to link a second, different fixture product (`Apple Pie`, same business) to that same now-claimed item — result:

   ```text
   ERROR: 23505: duplicate key value violates unique constraint "catalog_products_business_inventory_item_uniq"
   DETAIL: Key (business_id, inventory_item_id)=(...) already exists.
   ```

The transaction aborted on this error (both statements rolled back); confirmed immediately after that the fixture data and global counts were unchanged (165 products, 903 items, 0 duplicate groups).

## 5. Production Execution

`CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --include-all` — the same repository-approved production migration wrapper used for Phase A and the repair (instruction1.7), with explicit production confirmation. Result: `{"upToDate":false,"dryRun":false,"migrations":["20260902150000_sb_ops_prod_sync_1_0_instr1_8_phase_b_inventory_item_uniqueness.sql"],...,"message":"Finished supabase db push."}` — exactly and only the new Phase B file applied (the repair migration was already correctly recorded as applied from instruction1.7, so it was not re-attempted).

## 6. Post-Deployment Verification (Instruction1.8 §7, All Confirmed)

Independently re-read from production immediately after deployment:

| Check | Result |
|---|---|
| Constraint exists with exact intended columns | `catalog_products_business_inventory_item_uniq`, type `u`, columns exactly `(business_id, inventory_item_id)` |
| Production duplicate groups | `[]` — zero, unchanged from the precheck |
| `Mango`'s dedicated link | unchanged: `inventory_item_id = 6067f128-d62c-42c2-8136-0a108c31e4e8`, `inventory_link_established_at = 2026-09-02T15:39:37.579426Z` — identical to the state `report1.7.md` recorded after the repair; this deployment touched no row |
| `Milma Milk`'s dedicated link | unchanged: `inventory_item_id = 502daf11-1987-4770-8c57-712ecfc27b8b`, same timestamp as above — likewise untouched |
| Phase A RPC guard | present: both `preview_catalog_inventory_link_change` and `assign_or_replace_catalog_inventory_link` still carry the `UNIQUENESS_CONFLICT` reuse-guard logic |
| RLS policy counts | `catalog_products`: 15, `inventory_items`: 4 — identical to the counts observed immediately after instruction1.7's repair; no policy added, removed, or altered |
| Affected business totals | 3 products, 3 Inventory items — identical to the count after the repair; no merchant data changed |
| Migration tracking | `supabase migration list`: 23 of 23 migrations `local == remote`, including `20260902150000` |

## 7. Boundaries Confirmed

No further production data repair was performed. No Product/Inventory UX was touched. D-047 and the Phase A reuse guard were not weakened — both are byte-for-byte unchanged from `report1.6.md`/`report1.7.md`; §6 confirms the guard is still present, and this migration is purely additive (one new constraint) with no function or RLS/grant statement in it at all. No RLS, Auth, or grant change occurred (§6). No Lovable publication or domain cutover. The verified Phase B invariant was deployed exactly as designed, not redesigned. No self-merge.

## 8. Final Status

`PASS`. The duplicate precheck was zero, so execution proceeded per instruction. The migration was authored as the exact, unmodified verified invariant; rehearsed successfully against the isolated test project, including a live proof of rejection; deployed to production via the repository-approved mechanism; and every item in instruction1.8 §7's required post-deployment verification was independently confirmed true. The Product ↔ Inventory one-to-one integrity gap opened in `report1.5.md` and worked through `report1.6.md`/`report1.7.md` is now closed at the schema level in production.
