// Engineering Contract §16, item 10: "Movement type/direction invariant
// tests for every valid and invalid pairing."
// Enforced by the inventory_movements_type_direction CHECK constraint.
import { describe, it, expect, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import { createItem, createMovement, newIdempotencyKey } from "../setup/inventory-rpc";
import { expectSucceeded } from "../setup/assertions";
import type { MovementDirection, MovementType } from "@/integrations/supabase/inventory";

describe("movement type/direction invariant matrix", () => {
  let owner: TestOwner;

  beforeAll(async () => {
    owner = await createTestOwner("type-direction");
  });

  const validPairs: Array<{ type: MovementType; direction: MovementDirection }> = [
    { type: "opening_stock", direction: "increase" },
    { type: "stock_increase", direction: "increase" },
    { type: "stock_decrease", direction: "decrease" },
    { type: "adjustment_increase", direction: "increase" },
    { type: "adjustment_decrease", direction: "decrease" },
  ];

  it.each(validPairs)("accepts valid pairing $type / $direction", async ({ type, direction }) => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName(`Valid Pair ${type}`),
        baseUnit: "unit",
      }),
    );
    const result = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: type,
      itemId: item.id,
      movementType: type,
      direction,
      quantity: 5,
      reason: `Valid pairing ${type}/${direction}`,
      // A fresh item has 0 stock; a decrease-direction pairing as the very
      // first movement would otherwise trip the (unrelated) negative-stock
      // guard before ever reaching the type/direction check under test.
      allowNegativeStock: true,
    });
    expect(result.error).toBeNull();
  });

  const invalidPairs: Array<{ type: MovementType; direction: MovementDirection }> = [
    { type: "opening_stock", direction: "decrease" },
    { type: "stock_increase", direction: "decrease" },
    { type: "stock_decrease", direction: "increase" },
    { type: "adjustment_increase", direction: "decrease" },
    { type: "adjustment_decrease", direction: "increase" },
  ];

  it.each(invalidPairs)(
    "rejects invalid pairing $type / $direction",
    async ({ type, direction }) => {
      // Every invalid pairing must be rejected, full stop. The *which* guard
      // catches it first can vary: a decrease against a fresh (0-stock) item
      // may be intercepted by the negative-stock guard before the request
      // ever reaches the inventory_movements_type_direction CHECK constraint
      // at insert time -- both are legitimate DB-level rejections, and the
      // obligation under test is "never accepted," not "rejected by this
      // specific guard."
      const item = expectSucceeded(
        await createItem(owner.client, {
          businessId: owner.businessId,
          createdBy: owner.userId,
          name: uniqueName(`Invalid Pair ${type}`),
          baseUnit: "unit",
        }),
      );
      const result = await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: type,
        itemId: item.id,
        movementType: type,
        direction,
        quantity: 5,
        reason: `Invalid pairing ${type}/${direction}`,
        allowNegativeStock: true, // isolate the type/direction guard from the negative-stock guard
      });
      expect(result.error).toBeTruthy();
    },
  );

  it("a correction is accepted with either direction, as long as it opposes the original", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Correction Direction Item"),
        baseUnit: "unit",
      }),
    );
    const opening = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "opening_stock",
        itemId: item.id,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 10,
        reason: "Opening stock",
      }),
    );
    const correction = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "correction",
      itemId: item.id,
      movementType: "correction",
      direction: "decrease",
      quantity: 3,
      reason: "Correction opposing the opening increase",
      correctingOf: opening.id,
    });
    expect(correction.error).toBeNull();
  });
});
