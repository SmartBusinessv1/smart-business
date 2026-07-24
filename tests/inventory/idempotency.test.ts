// Engineering Contract §16, item 15: "Idempotency conflict-handling tests
// for matching-payload retries and mismatched-payload conflicts."
import { describe, it, expect, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import {
  createItem,
  createMovement,
  listMovements,
  newIdempotencyKey,
} from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("idempotency conflict handling", () => {
  let owner: TestOwner;

  beforeAll(async () => {
    owner = await createTestOwner("idempotency");
  });

  it("same key + identical payload returns the original movement, not a duplicate", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Idempotent Replay Item"),
        baseUnit: "unit",
      }),
    );
    const key = newIdempotencyKey();
    const params = {
      idempotencyKey: key,
      operation: "opening_stock",
      itemId: item.id,
      movementType: "opening_stock" as const,
      direction: "increase" as const,
      quantity: 30,
      reason: "Same reason both times",
    };

    const first = expectSucceeded(await createMovement(owner.client, params));
    const second = expectSucceeded(await createMovement(owner.client, params));
    expect(second.id).toBe(first.id);

    const history = expectSucceeded(await listMovements(owner.client, item.id));
    expect(history).toHaveLength(1);
  });

  it("same key + different payload is rejected as a conflict, not treated as a retry", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Idempotent Conflict Item"),
        baseUnit: "unit",
      }),
    );
    const key = newIdempotencyKey();

    expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: key,
        operation: "opening_stock",
        itemId: item.id,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 30,
        reason: "Original payload",
      }),
    );

    const conflict = await createMovement(owner.client, {
      idempotencyKey: key,
      operation: "opening_stock",
      itemId: item.id,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 999, // different quantity -> different payload fingerprint
      reason: "Original payload",
    });
    expectRejected(conflict, "idempotency key conflict");

    const history = expectSucceeded(await listMovements(owner.client, item.id));
    expect(history).toHaveLength(1); // conflicting attempt never persisted
  });

  it("a different key with an otherwise identical payload creates a genuinely new movement (not deduped by content)", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Idempotent Distinct Key Item"),
        baseUnit: "unit",
      }),
    );
    const shared = {
      operation: "adjustment_increase" as const,
      itemId: item.id,
      movementType: "adjustment_increase" as const,
      direction: "increase" as const,
      quantity: 5,
      reason: "Same content, different key",
    };
    // Need an opening stock first so two adjustment_increases are both valid.
    await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "opening_stock",
      itemId: item.id,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 1,
      reason: "Opening stock",
    });

    const first = expectSucceeded(
      await createMovement(owner.client, { ...shared, idempotencyKey: newIdempotencyKey() }),
    );
    const second = expectSucceeded(
      await createMovement(owner.client, { ...shared, idempotencyKey: newIdempotencyKey() }),
    );
    expect(second.id).not.toBe(first.id);

    const history = expectSucceeded(await listMovements(owner.client, item.id));
    expect(history.filter((m) => m.movement_type === "adjustment_increase")).toHaveLength(2);
  });

  it("idempotency keys are scoped per business: the same key value used by two different owners never collides", async () => {
    const otherOwner = await createTestOwner("idempotency-other");
    const item = expectSucceeded(
      await createItem(otherOwner.client, {
        businessId: otherOwner.businessId,
        createdBy: otherOwner.userId,
        name: uniqueName("Idempotent Cross-Owner Item"),
        baseUnit: "unit",
      }),
    );
    const sameKeyValue = newIdempotencyKey();

    // Owner (this describe block's fixture) uses the same literal key value
    // for an unrelated item in their own business.
    const ownItem = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Idempotent Cross-Owner Item Own"),
        baseUnit: "unit",
      }),
    );
    const ownResult = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: sameKeyValue,
        operation: "opening_stock",
        itemId: ownItem.id,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 10,
        reason: "Owner's own movement",
      }),
    );

    const otherResult = expectSucceeded(
      await createMovement(otherOwner.client, {
        idempotencyKey: sameKeyValue,
        operation: "opening_stock",
        itemId: item.id,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 20,
        reason: "Other owner's movement",
      }),
    );

    expect(ownResult.id).not.toBe(otherResult.id);
  });
});
