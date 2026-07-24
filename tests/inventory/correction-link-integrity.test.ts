// Engineering Contract §16, item 12: "Correction-link integrity tests for
// self-reference, cycles, duplicate full reversal, and over-compensation."
import { describe, it, expect, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import {
  createItem,
  createMovement,
  newIdempotencyKey,
  remainingCompensable,
} from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("correction-link integrity", () => {
  let owner: TestOwner;

  beforeAll(async () => {
    owner = await createTestOwner("link-integrity");
  });

  it("a movement cannot reference itself as correcting_of (self-reference)", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Self Reference Item"),
        baseUnit: "unit",
      }),
    );
    const selfId = crypto.randomUUID();
    const result = await owner.client.from("inventory_movements").insert({
      id: selfId,
      item_id: item.id,
      business_id: owner.businessId,
      movement_type: "correction",
      direction: "decrease",
      quantity: 1,
      reason: "self-correction attempt",
      responsible_user_id: owner.userId,
      correcting_of: selfId,
    });
    expectRejected(result, "no_self_correction");
  });

  it("a correction cannot itself be corrected (cycle prevention)", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Cycle Item"),
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
        quantity: 100,
        reason: "Opening stock",
      }),
    );
    const correction1 = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId: item.id,
        movementType: "correction",
        direction: "decrease",
        quantity: 10,
        reason: "First correction",
        correctingOf: opening.id,
      }),
    );
    const cycleAttempt = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "correction",
      itemId: item.id,
      movementType: "correction",
      direction: "increase",
      quantity: 5,
      reason: "Attempting to correct a correction",
      correctingOf: correction1.id,
    });
    expectRejected(cycleAttempt, "cannot correct a correction");
  });

  it("a duplicate full reversal of an already fully-compensated movement is rejected", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Full Reversal Item"),
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
        quantity: 100,
        reason: "Opening stock",
      }),
    );
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId: item.id,
        movementType: "correction",
        direction: "decrease",
        quantity: 100,
        reason: "Full reversal",
        correctingOf: opening.id,
      }),
    );
    const remaining = expectSucceeded(await remainingCompensable(owner.client, opening.id));
    expect(Number(remaining)).toBe(0);

    const duplicateReversal = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "correction",
      itemId: item.id,
      movementType: "correction",
      direction: "decrease",
      quantity: 1,
      reason: "Attempted second full reversal",
      correctingOf: opening.id,
    });
    expectRejected(duplicateReversal, "exceeds remaining compensable quantity");
  });

  it("partial/multiple compensations are accepted while cumulative compensation stays within the original quantity, and rejected once it would exceed it", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Partial Compensation Item"),
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
        quantity: 100,
        reason: "Opening stock",
      }),
    );

    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId: item.id,
        movementType: "correction",
        direction: "decrease",
        quantity: 40,
        reason: "Partial correction 1",
        correctingOf: opening.id,
      }),
    );
    let remaining = expectSucceeded(await remainingCompensable(owner.client, opening.id));
    expect(Number(remaining)).toBe(60);

    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId: item.id,
        movementType: "correction",
        direction: "decrease",
        quantity: 50,
        reason: "Partial correction 2",
        correctingOf: opening.id,
      }),
    );
    remaining = expectSucceeded(await remainingCompensable(owner.client, opening.id));
    expect(Number(remaining)).toBe(10);

    // 40 + 50 + 20 = 110 > 100 -- must be rejected.
    const overCompensation = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "correction",
      itemId: item.id,
      movementType: "correction",
      direction: "decrease",
      quantity: 20,
      reason: "Would over-compensate",
      correctingOf: opening.id,
    });
    expectRejected(overCompensation, "exceeds remaining compensable quantity");

    // Exactly the remaining 10 is accepted.
    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId: item.id,
        movementType: "correction",
        direction: "decrease",
        quantity: 10,
        reason: "Final partial correction using exact remainder",
        correctingOf: opening.id,
      }),
    );
    remaining = expectSucceeded(await remainingCompensable(owner.client, opening.id));
    expect(Number(remaining)).toBe(0);
  });
});
