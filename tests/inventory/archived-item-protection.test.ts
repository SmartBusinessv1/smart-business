// Engineering Contract §16, item 14: "Archived-inventory write-protection
// tests for rejection, reactivation, and authorized correction."
import { describe, it, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import {
  createItem,
  createMovement,
  newIdempotencyKey,
  updateItemStatus,
} from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("archived-item write protection", () => {
  let owner: TestOwner;
  let itemId: string;
  let openingId: string;

  beforeAll(async () => {
    owner = await createTestOwner("archived");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Archived Protection Item"),
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
        quantity: 50,
        reason: "Opening stock",
      }),
    );
    openingId = opening.id;
  });

  it("ordinary movements are rejected against an archived item", async () => {
    expectSucceeded(await updateItemStatus(owner.client, itemId, "archived"));

    const result = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "adjustment_increase",
      itemId,
      movementType: "adjustment_increase",
      direction: "increase",
      quantity: 5,
      reason: "Attempted while archived",
    });
    expectRejected(result, "archived");
  });

  it("a correction against an archived item's history is explicitly still permitted", async () => {
    // Item is still archived from the previous test.
    const correction = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "correction",
      itemId,
      movementType: "correction",
      direction: "decrease",
      quantity: 5,
      reason: "Correction permitted even while archived",
      correctingOf: openingId,
    });
    expectSucceeded(correction);
  });

  it("reactivation restores ordinary write access", async () => {
    expectSucceeded(await updateItemStatus(owner.client, itemId, "active"));

    const result = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "adjustment_increase",
      itemId,
      movementType: "adjustment_increase",
      direction: "increase",
      quantity: 5,
      reason: "Ordinary movement after reactivation",
    });
    expectSucceeded(result);
  });
});
