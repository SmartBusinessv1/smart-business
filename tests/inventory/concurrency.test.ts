// Engineering Contract §16, item 9: "Concurrency tests confirming correct
// negative-stock decisions under contention and idempotency-key protection
// against duplicate creation, including serialization/deadlock retries."
// Enforced by the per-item pg_advisory_xact_lock in create_inventory_movement
// (EIS §12), which serializes concurrent writers against the same item.
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

describe("concurrency", () => {
  let owner: TestOwner;

  beforeAll(async () => {
    owner = await createTestOwner("concurrency");
  });

  it("two concurrent decrease requests that would together go negative: exactly one succeeds", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Concurrency Race Item"),
        baseUnit: "unit",
      }),
    );
    await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "opening_stock",
      itemId: item.id,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 10,
      reason: "Opening stock",
    });

    // Each individually valid against 10; together they'd overdraw to -6.
    // Two distinct idempotency keys -- these are two genuinely separate
    // movement attempts, not a retry of the same request.
    const [first, second] = await Promise.all([
      createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "adjustment_decrease",
        itemId: item.id,
        movementType: "adjustment_decrease",
        direction: "decrease",
        quantity: 8,
        reason: "Concurrent decrease A",
      }),
      createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "adjustment_decrease",
        itemId: item.id,
        movementType: "adjustment_decrease",
        direction: "decrease",
        quantity: 8,
        reason: "Concurrent decrease B",
      }),
    ]);

    const results = [first, second];
    const succeeded = results.filter((r) => !r.error);
    const failed = results.filter((r) => r.error);
    expect(succeeded).toHaveLength(1);
    expect(failed).toHaveLength(1);
    expect(String(failed[0].error?.message)).toContain("NEGATIVE_STOCK");

    const stock = expectSucceeded(await currentStockBatch(owner.client, [item.id]));
    expect(Number(stock[0].current_stock)).toBe(2); // 10 - 8, the second correctly rejected
  }, 30_000);

  it("concurrent requests with the SAME idempotency key produce exactly one movement", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Concurrency Idempotency Item"),
        baseUnit: "unit",
      }),
    );
    const sharedKey = newIdempotencyKey();

    const [first, second] = await Promise.all([
      createMovement(owner.client, {
        idempotencyKey: sharedKey,
        operation: "opening_stock",
        itemId: item.id,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 50,
        reason: "Concurrent identical retry",
      }),
      createMovement(owner.client, {
        idempotencyKey: sharedKey,
        operation: "opening_stock",
        itemId: item.id,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 50,
        reason: "Concurrent identical retry",
      }),
    ]);

    expect(first.error).toBeNull();
    expect(second.error).toBeNull();
    expect(first.data?.id).toBe(second.data?.id);

    const history = expectSucceeded(await listMovements(owner.client, item.id));
    expect(history).toHaveLength(1);
  }, 30_000);

  it("a sequential retry with the same key and payload after the original committed returns the original movement", async () => {
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Concurrency Sequential Retry Item"),
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
      quantity: 25,
      reason: "Retried after serialization/deadlock failure",
    };

    const original = expectSucceeded(await createMovement(owner.client, params));
    const retry = expectSucceeded(await createMovement(owner.client, params));
    expect(retry.id).toBe(original.id);

    const history = expectSucceeded(await listMovements(owner.client, item.id));
    expect(history).toHaveLength(1);
  });
});
