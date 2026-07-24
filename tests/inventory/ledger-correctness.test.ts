// Engineering Contract §16, item 1: "Ledger correctness across opening
// stock, increases, decreases, adjustments, and corrections."
// EIS §15: "Derived current stock equals the sum of signed movement
// quantities for an item at any point in its history."
import { describe, it, expect, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import {
  createItem,
  createMovement,
  currentStockBatch,
  listMovements,
  newIdempotencyKey,
} from "../setup/inventory-rpc";
import { expectSucceeded } from "../setup/assertions";

describe("ledger correctness", () => {
  let owner: TestOwner;
  let itemId: string;

  beforeAll(async () => {
    owner = await createTestOwner("ledger");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Ledger Item"),
        baseUnit: "unit",
      }),
    );
    itemId = item.id;
  });

  it("accumulates opening stock, increases, decreases, adjustments, and a correction to the correct running total", async () => {
    // opening_stock +100
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "opening_stock",
        itemId,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 100,
        reason: "Opening stock",
      }),
    );

    // stock_increase +20
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "stock_increase",
        itemId,
        movementType: "stock_increase",
        direction: "increase",
        quantity: 20,
        reason: "Restock",
      }),
    );

    // stock_decrease -15
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "stock_decrease",
        itemId,
        movementType: "stock_decrease",
        direction: "decrease",
        quantity: 15,
        reason: "Sale",
      }),
    );

    // adjustment_increase +5
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "adjustment_increase",
        itemId,
        movementType: "adjustment_increase",
        direction: "increase",
        quantity: 5,
        reason: "Recount found extra",
      }),
    );

    // adjustment_decrease -30
    const decreaseToCorrect = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "adjustment_decrease",
        itemId,
        movementType: "adjustment_decrease",
        direction: "decrease",
        quantity: 30,
        reason: "Damage write-off",
      }),
    );

    // Running total so far: 100 + 20 - 15 + 5 - 30 = 80
    let stock = expectSucceeded(await currentStockBatch(owner.client, [itemId]));
    expect(Number(stock[0].current_stock)).toBe(80);

    // correction: the damage write-off was overstated by 10 -> compensate +10
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId,
        movementType: "correction",
        direction: "increase",
        quantity: 10,
        reason: "Correcting overstated damage write-off",
        correctingOf: decreaseToCorrect.id,
      }),
    );

    // 80 + 10 = 90
    stock = expectSucceeded(await currentStockBatch(owner.client, [itemId]));
    expect(Number(stock[0].current_stock)).toBe(90);

    // Independently recompute from the full movement history to confirm
    // current stock is exactly the sum of signed movement quantities.
    const movements = expectSucceeded(await listMovements(owner.client, itemId));
    expect(movements).toHaveLength(6);
    const recomputed = movements.reduce(
      (sum, m) => sum + (m.direction === "increase" ? Number(m.quantity) : -Number(m.quantity)),
      0,
    );
    expect(recomputed).toBe(90);
  });
});
