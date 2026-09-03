# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction1.7 — Controlled Production Product ↔ Inventory Repair

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**Sequence:** `1.7`

**From:** Mission Control

**To:** Claude Code / Repository Engineering Operator

**Status:** `AUTHORIZED — NARROW PRODUCTION REPAIR GATE`

**Date:** `2026-09-02`

---

## 1. Objective

Close the single known Product ↔ Inventory corruption discovered during Founder runtime verification, without broad data cleanup, without redesigning Inventory, and without activating Phase B schema uniqueness yet.

This instruction is the separate execution-authorization gate required after `report1.6.md`.

## 2. Accepted product rule

For ordinary stock-tracked Smart Business products:

- one Catalog product owns one dedicated system-managed Inventory identity;
- merchants do not link unrelated products to arbitrary Inventory items;
- Catalog remains Product Truth;
- Inventory remains stock truth.

`starter-supab-shell#4` already closed the merchant-facing arbitrary-picker path. `smart-business#463` provides the accepted Phase A server-side reuse guard. Phase B schema uniqueness remains non-executable design/evidence only until this repair is complete and independently verified.

## 3. Known production state to repair

Mission Control independently verified the following production state for the affected business:

- Catalog product `Milma Milk` is linked to the Inventory item named `AVT Tea Powder`.
- Catalog product `Mango` is also linked to that same Inventory item.
- `Milma Milk` was linked first; `Mango` was linked later.
- the only known Inventory movement on that shared item is the controlled Founder runtime-test Opening Stock movement `+5`, reason `Opening stock bulk import`, created on 2026-09-02 during Step-4 verification.
- there is no Catalog product named `AVT Tea Powder` in that business.
- there are no existing dedicated Inventory items named `Mango` or `Milma Milk` available to reuse.

Founder/Mission Control product interpretation for this repair:

> Neither `Mango` nor `Milma Milk` owns the `AVT Tea Powder` Inventory identity. `Mango` and `Milma Milk` must each end with their own dedicated Inventory identity. The controlled `+5` runtime-test stock must not become merchant stock for either product.

## 4. Authorized execution order

Execute only in this order.

### Phase 1 — Deploy accepted Phase A reuse guard

Deploy only the already-merged Phase A migration from `report1.6.md` to production using the repository-approved production migration mechanism.

Do not create or deploy Phase B uniqueness in this instruction.

Verify the Phase A migration is recorded as applied before continuing.

### Phase 2 — Re-read exact production preconditions

Immediately before any repair write, re-read the affected business and confirm the known state still matches §3 materially.

If additional products now share the item, unexpected movements exist, IDs/business ownership differ, or any other material precondition changed: **STOP without repair and report the divergence.**

### Phase 3 — Perform one narrow, auditable repair

Use the repository's safest existing administrative/data-repair pattern. Do not weaken or remove the ordinary D-047 merchant-history guard globally.

The repair must achieve all of the following while preserving auditability:

1. The controlled `+5` runtime-test effect is neutralized so it is not treated as real merchant stock. Prefer an auditable corrective movement/history-preserving approach rather than silently erasing financial/stock history, unless the repository's approved repair convention requires another equivalently auditable mechanism.
2. `Mango` no longer references the `AVT Tea Powder` Inventory item.
3. `Milma Milk` no longer references the `AVT Tea Powder` Inventory item.
4. `Mango` receives a fresh dedicated Inventory identity named for `Mango`, using the product's appropriate counting/base unit.
5. `Milma Milk` receives a fresh dedicated Inventory identity named for `Milma Milk`, using the product's appropriate counting/base unit.
6. Neither new dedicated item receives invented Opening Stock. Their stock begins from truthful Inventory movement history only.
7. The existing `AVT Tea Powder` Inventory item is not repurposed as `Mango` or `Milma Milk`.

The repair must be bounded to these known records and must include explicit precondition checks so it cannot silently affect another business or a changed runtime state.

## 5. Required production verification

After execution, independently verify and report:

- Phase A reuse guard migration is applied in production.
- `Mango` and `Milma Milk` have different non-null `inventory_item_id` values.
- neither points to the `AVT Tea Powder` Inventory item.
- the dedicated Inventory item names/base units are correct.
- no duplicate `(business_id, inventory_item_id)` groups remain anywhere in `catalog_products`.
- the controlled test `+5` no longer contributes to merchant stock truth.
- no unrelated Catalog products, Inventory items, movements, RLS policies, grants, Auth settings, or business data changed.
- Phase B uniqueness is still not executable/present as a migration.

If any verification fails, stop and report `BLOCKED` or `PARTIAL`; do not continue into Phase B.

## 6. Phase B remains deferred

Do **not** author, restore, or execute the Phase B `UNIQUE (business_id, inventory_item_id)` migration under this instruction.

Successful completion of this repair only makes Phase B eligible for a subsequent explicit authorization.

## 7. Boundaries

Not authorized:

- broad production cleanup;
- deleting unrelated test/demo data;
- changing product philosophy;
- changing Inventory movement semantics globally;
- weakening D-047 protections for ordinary merchant workflows;
- RLS/Auth/grant redesign beyond what the already-approved Phase A migration contains;
- Lovable publication or domain cutover;
- Phase B uniqueness deployment.

## 8. Required reply

Return through:

`communication/live/report1.7.md`

The report must include:

- exact precondition evidence;
- exact repair mechanism and why it preserves auditability;
- exact production execution mechanism;
- before/after evidence for the three affected identities and the controlled test movement;
- global duplicate-group verification;
- confirmation that Phase B remains deferred;
- final status: `PASS`, `PARTIAL`, or `BLOCKED`.

No self-merge.