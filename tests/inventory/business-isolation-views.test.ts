// Engineering Contract §16, item 6: "Business-isolation tests across list,
// detail, history, and summary views."
import { describe, it, expect, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import {
  createItem,
  createMovement,
  currentStockBatch,
  getItem,
  listMovements,
  newIdempotencyKey,
} from "../setup/inventory-rpc";
import { expectSucceeded } from "../setup/assertions";

describe("business isolation across views", () => {
  let ownerA: TestOwner;
  let ownerB: TestOwner;
  let itemA: string;
  let itemB: string;

  beforeAll(async () => {
    ownerA = await createTestOwner("views-a");
    ownerB = await createTestOwner("views-b");

    const a = expectSucceeded(
      await createItem(ownerA.client, {
        businessId: ownerA.businessId,
        createdBy: ownerA.userId,
        name: uniqueName("Views Item A"),
        baseUnit: "unit",
      }),
    );
    itemA = a.id;
    await createMovement(ownerA.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "opening_stock",
      itemId: itemA,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 30,
      reason: "Opening stock A",
    });

    const b = expectSucceeded(
      await createItem(ownerB.client, {
        businessId: ownerB.businessId,
        createdBy: ownerB.userId,
        name: uniqueName("Views Item B"),
        baseUnit: "unit",
      }),
    );
    itemB = b.id;
    await createMovement(ownerB.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "opening_stock",
      itemId: itemB,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 70,
      reason: "Opening stock B",
    });
  });

  it("list view: each owner's item list contains only their own items", async () => {
    const { data: aList } = await ownerA.client.from("inventory_items").select("id");
    const { data: bList } = await ownerB.client.from("inventory_items").select("id");
    expect((aList ?? []).map((r) => r.id)).toContain(itemA);
    expect((aList ?? []).map((r) => r.id)).not.toContain(itemB);
    expect((bList ?? []).map((r) => r.id)).toContain(itemB);
    expect((bList ?? []).map((r) => r.id)).not.toContain(itemA);
  });

  it("detail view: owner B cannot fetch owner A's item detail", async () => {
    const detail = expectSucceeded(await getItem(ownerB.client, itemB));
    expect(detail.id).toBe(itemB);
    const { data: crossDetail } = await ownerB.client
      .from("inventory_items")
      .select("*")
      .eq("id", itemA)
      .maybeSingle();
    expect(crossDetail).toBeNull();
  });

  it("history view: movement history never mixes across businesses", async () => {
    const historyA = expectSucceeded(await listMovements(ownerA.client, itemA));
    expect(historyA.every((m) => m.business_id === ownerA.businessId)).toBe(true);
    const historyBAttemptedByA = expectSucceeded(await listMovements(ownerA.client, itemB));
    expect(historyBAttemptedByA).toHaveLength(0);
  });

  it("summary view: batch current-stock aggregation silently drops ids the caller does not own", async () => {
    // Owner A requests stock for both items; B's item id is simply absent
    // from the result, not an error and not a leaked value.
    const result = expectSucceeded(await currentStockBatch(ownerA.client, [itemA, itemB]));
    const byId = new Map(result.map((r) => [r.item_id, Number(r.current_stock)]));
    expect(byId.get(itemA)).toBe(30);
    expect(byId.has(itemB)).toBe(false);
  });
});
