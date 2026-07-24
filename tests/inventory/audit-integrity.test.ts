// Engineering Contract §16, item 5: "Audit-integrity tests confirming no
// movement is created without a responsible-user or originating-event
// reference."
// Enforced by the inventory_movements_audit_completeness CHECK constraint,
// which applies to every insert path (function or direct), independent of
// application code.
import { describe, it, expect, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import { createItem, createMovement, newIdempotencyKey } from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("audit integrity", () => {
  let owner: TestOwner;
  let itemId: string;

  beforeAll(async () => {
    owner = await createTestOwner("audit");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Audit Item"),
        baseUnit: "unit",
      }),
    );
    itemId = item.id;
  });

  it("every movement created through the shared write path carries the caller as responsible_user_id", async () => {
    const movement = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "opening_stock",
        itemId,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 10,
        reason: "Opening stock",
      }),
    );
    expect(movement.responsible_user_id).toBe(owner.userId);
    expect(movement.business_event_id).toBeNull();
  });

  it("a direct insert with neither responsible_user_id nor a business_event reference is rejected by the database", async () => {
    const result = await owner.client.from("inventory_movements").insert({
      item_id: itemId,
      business_id: owner.businessId,
      movement_type: "adjustment_increase",
      direction: "increase",
      quantity: 1,
      reason: "attempted un-attributed movement",
      responsible_user_id: null,
      business_event_type: null,
      business_event_id: null,
    });
    expectRejected(result, "audit_completeness");
  });

  it("a direct insert with only a business_event reference (no responsible_user_id) is accepted", async () => {
    const result = await owner.client
      .from("inventory_movements")
      .insert({
        item_id: itemId,
        business_id: owner.businessId,
        movement_type: "adjustment_increase",
        direction: "increase",
        quantity: 1,
        reason: "event-originated movement",
        responsible_user_id: null,
        business_event_type: "test_event",
        business_event_id: crypto.randomUUID(),
      })
      .select()
      .single();
    expect(result.error).toBeNull();
    expect(result.data?.responsible_user_id).toBeNull();
    expect(result.data?.business_event_id).toBeTruthy();
  });
});
