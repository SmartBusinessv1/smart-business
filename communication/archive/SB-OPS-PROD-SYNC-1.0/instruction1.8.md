# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction1.8 — Phase B Product ↔ Inventory Structural Uniqueness

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Sequence:** `1.8`

**From:** Mission Control

**To:** Claude Code / Repository Engineering Operator

**Status:** ACTIVE

## Objective

Close the remaining Product ↔ Inventory integrity gap by promoting the already-verified Phase B design into an executable production migration now that the known duplicate state has been repaired and independently verified at zero duplicate groups.

## Authorized scope

1. Pull latest `smart-business/main` and verify merged `report1.7.md` / repair migration are present.
2. Re-read production immediately before any write and confirm there are **zero** duplicate `(business_id, inventory_item_id)` groups where `inventory_item_id IS NOT NULL`.
3. If any duplicate exists, **STOP** and report the exact rows. Do not attempt cleanup under this instruction.
4. Author one new migration implementing exactly the verified invariant from `communication/evidence/SB-OPS-PROD-SYNC-1.0-instr1-6/phase-b-design-and-proof.md`:

```sql
ALTER TABLE public.catalog_products
  ADD CONSTRAINT catalog_products_business_inventory_item_uniq
  UNIQUE (business_id, inventory_item_id);
```

5. Rehearse against the isolated test project using the repository-approved migration mechanism.
6. Deploy that migration to production using the repository-approved production migration wrapper and explicit production confirmation.
7. Verify after deployment:
   - the constraint exists with the exact intended columns;
   - production still has zero duplicate Product ↔ Inventory groups;
   - existing Mango and Milma Milk dedicated links remain unchanged;
   - the Phase A RPC guard remains present;
   - no RLS, Auth, grants, unrelated schema, or merchant data changed.
8. Where practical and safe in the isolated test project, prove the database now rejects a second product attempting to reuse an already-referenced Inventory item.

## Boundaries

- No further production data repair.
- No changes to Product/Inventory UX.
- No weakening of D-047 or Phase A reuse protection.
- No RLS/Auth/grant changes.
- No Lovable publication or domain cutover.
- Do not redesign the verified Phase B invariant.
- No self-merge.

## Required reply

Return only through:

`communication/live/report1.8.md`

Report `PASS`, `PARTIAL`, or `BLOCKED` with exact migration, test, production execution, and post-deployment evidence.