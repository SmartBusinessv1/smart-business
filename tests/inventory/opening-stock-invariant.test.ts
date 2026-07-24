// Engineering Contract §16, item 11: "Opening-stock invariant tests
// rejecting a second opening-stock movement."
// EIS §15: "...an opening-stock error is only correctable via a linked
// compensating movement."
import { describe, it, expect, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import {
  createItem,
  createMovement,
  currentStockBatch,
  listMovements,
  newIdempotencyKey,
} from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("opening-stock invariant", () => {
  let owner: TestOwner;
  let itemId: string;
  let openingId: string;

  beforeAll(async () => {
    owner = await createTestOwner("opening-invariant");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Opening Invariant Item"),
        baseUnit: "unit",
      }),
    );
    itemId = item.id;
    const opening = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "opening_stock",
        itemId,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 40,
        reason: "First opening stock, entered wrong",
      }),
    );
    openingId = opening.id;
  });

  it("a second opening-stock movement for the same item is rejected", async () => {
    const result = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "opening_stock",
      itemId,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 40,
      reason: "Attempted second opening stock",
    });
    expectRejected(result, "already been recorded");

    const history = expectSucceeded(await listMovements(owner.client, itemId));
    expect(history.filter((m) => m.movement_type === "opening_stock")).toHaveLength(1);
  });

  it("an incorrect opening-stock value is fixed via a linked correction, not a replacement opening-stock row", async () => {
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId,
        movementType: "correction",
        direction: "decrease",
        quantity: 15,
        reason: "Original opening stock was overstated by 15",
        correctingOf: openingId,
      }),
    );
    const stock = expectSucceeded(await currentStockBatch(owner.client, [itemId]));
    expect(Number(stock[0].current_stock)).toBe(25); // 40 - 15

    const history = expectSucceeded(await listMovements(owner.client, itemId));
    expect(history.filter((m) => m.movement_type === "opening_stock")).toHaveLength(1);
    expect(history.filter((m) => m.movement_type === "correction")).toHaveLength(1);
  });
});
