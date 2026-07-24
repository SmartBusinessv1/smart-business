// Engineering Contract §16, item 7: "Negative-stock tests for unauthorized
// blocking, authorized warning/confirmation, and full auditability."
// "Unauthorized" here means p_allow_negative_stock was not explicitly set
// true -- SB-P-1.10 has no separate negative-stock permission/role; the
// authorization is the explicit confirmation flag itself (Blueprint §8
// "Negative Stock Policy", EIS §7/§11).
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

describe("negative stock", () => {
  let owner: TestOwner;
  let itemId: string;

  beforeAll(async () => {
    owner = await createTestOwner("negstock");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Negative Stock Item"),
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
      quantity: 10,
      reason: "Opening stock",
    });
  });

  it("without explicit authorization, a movement that would take stock negative is blocked and nothing is persisted", async () => {
    const before = expectSucceeded(await listMovements(owner.client, itemId));

    const result = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "adjustment_decrease",
      itemId,
      movementType: "adjustment_decrease",
      direction: "decrease",
      quantity: 20,
      reason: "Would go negative",
      allowNegativeStock: false,
    });
    expectRejected(result, "NEGATIVE_STOCK");

    const after = expectSucceeded(await listMovements(owner.client, itemId));
    expect(after).toHaveLength(before.length);
  });

  it("with explicit authorization, the same movement succeeds and is fully auditable", async () => {
    const movement = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "adjustment_decrease",
        itemId,
        movementType: "adjustment_decrease",
        direction: "decrease",
        quantity: 20,
        reason: "Authorized negative-stock adjustment",
        allowNegativeStock: true,
      }),
    );
    expect(movement.quantity).toBe(20);
    expect(movement.direction).toBe("decrease");
    expect(movement.responsible_user_id).toBe(owner.userId);
    expect(movement.reason).toBe("Authorized negative-stock adjustment");

    const stock = expectSucceeded(await currentStockBatch(owner.client, [itemId]));
    expect(Number(stock[0].current_stock)).toBe(-10);

    // Fully identifiable in history -- not hidden or specially flagged away.
    const history = expectSucceeded(await listMovements(owner.client, itemId));
    expect(history.some((m) => m.id === movement.id)).toBe(true);
  });
});
