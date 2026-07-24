// Engineering Contract §16, item 8: "Performance tests confirming
// acceptable bounds as movement volume grows, and confirming grouped
// aggregation rather than N+1 list queries."
//
// This file exercises the runtime-bound claim (history/aggregation stay
// fast and correct as row count grows). The structural "one grouped query,
// not N+1" claim is a query-shape property of inventory_current_stock_batch
// (a single SQL statement with GROUP BY -- see the migration) verified via
// EXPLAIN plan evidence captured separately at
// docs/implementation/SB-P-1.10/evidence/tests/query-plan-evidence.txt,
// since a network round-trip count from the client can't observe the
// server-side query plan.
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

const MOVEMENT_COUNT = 60;
const MAX_ACCEPTABLE_MS = 5000;

describe("performance bounds as volume grows", () => {
  let owner: TestOwner;
  let itemId: string;

  beforeAll(async () => {
    owner = await createTestOwner("perf");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Performance Item"),
        baseUnit: "unit",
      }),
    );
    itemId = item.id;

    await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "opening_stock",
      itemId,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 10_000,
      reason: "Opening stock for volume test",
    });

    for (let i = 0; i < MOVEMENT_COUNT; i++) {
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "adjustment_increase",
        itemId,
        movementType: "adjustment_increase",
        direction: "increase",
        quantity: 1,
        reason: `Volume test movement ${i}`,
      });
    }
  }, 120_000);

  it(`history retrieval stays within ${MAX_ACCEPTABLE_MS}ms and returns every row for ${MOVEMENT_COUNT + 1} movements`, async () => {
    const start = performance.now();
    const history = expectSucceeded(await listMovements(owner.client, itemId));
    const elapsed = performance.now() - start;
    expect(history).toHaveLength(MOVEMENT_COUNT + 1);
    expect(elapsed).toBeLessThan(MAX_ACCEPTABLE_MS);
  });

  it(`grouped current-stock aggregation stays within ${MAX_ACCEPTABLE_MS}ms and is correct`, async () => {
    const start = performance.now();
    const stock = expectSucceeded(await currentStockBatch(owner.client, [itemId]));
    const elapsed = performance.now() - start;
    expect(Number(stock[0].current_stock)).toBe(10_000 + MOVEMENT_COUNT);
    expect(elapsed).toBeLessThan(MAX_ACCEPTABLE_MS);
  });
});
