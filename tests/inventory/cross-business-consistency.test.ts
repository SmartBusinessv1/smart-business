// Engineering Contract §16, item 13: "Cross-business consistency tests
// confirming database rejection independent of application-layer
// validation."
// Enforced by inventory_movements_item_business_fk and
// inventory_movements_correcting_of_fk. Probed with the service-role
// (RLS-bypassing) admin client specifically to prove the database itself
// -- not RLS, not application code -- is what rejects these.
import { describe, it, expect, beforeAll } from "vitest";
import { adminClient, createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import { createItem, createMovement, newIdempotencyKey } from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("cross-business consistency", () => {
  let ownerA: TestOwner;
  let ownerB: TestOwner;
  let itemA: string;
  let itemB: string;
  let movementA: string;

  beforeAll(async () => {
    ownerA = await createTestOwner("xbiz-a");
    ownerB = await createTestOwner("xbiz-b");

    const a = expectSucceeded(
      await createItem(ownerA.client, {
        businessId: ownerA.businessId,
        createdBy: ownerA.userId,
        name: uniqueName("XBiz Item A"),
        baseUnit: "unit",
      }),
    );
    itemA = a.id;
    const b = expectSucceeded(
      await createItem(ownerB.client, {
        businessId: ownerB.businessId,
        createdBy: ownerB.userId,
        name: uniqueName("XBiz Item B"),
        baseUnit: "unit",
      }),
    );
    itemB = b.id;

    const movement = expectSucceeded(
      await createMovement(ownerA.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "opening_stock",
        itemId: itemA,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 20,
        reason: "Opening stock A",
      }),
    );
    movementA = movement.id;
  });

  it("application-level: creating a movement against another business's item fails via RLS (item not visible)", async () => {
    const result = await createMovement(ownerB.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "adjustment_increase",
      itemId: itemA,
      movementType: "adjustment_increase",
      direction: "increase",
      quantity: 1,
      reason: "cross-business attempt via RPC",
    });
    expectRejected(result, "not found or not permitted");
  });

  it("database-level, independent of RLS: service-role insert pairing item A with business B is rejected by the item/business FK", async () => {
    const result = await adminClient.from("inventory_movements").insert({
      item_id: itemA,
      business_id: ownerB.businessId, // wrong business for this item
      movement_type: "adjustment_increase",
      direction: "increase",
      quantity: 1,
      reason: "service-role cross-business attempt",
      responsible_user_id: ownerB.userId,
    });
    expectRejected(result, "inventory_movements_item_business_fk");
  });

  it("database-level, independent of RLS: a correction referencing a movement from a different item/business is rejected by the correcting_of FK", async () => {
    const result = await adminClient.from("inventory_movements").insert({
      item_id: itemB,
      business_id: ownerB.businessId,
      movement_type: "correction",
      direction: "decrease",
      quantity: 1,
      reason: "service-role cross-business correction attempt",
      responsible_user_id: ownerB.userId,
      correcting_of: movementA, // belongs to item A / business A, not item B / business B
    });
    expectRejected(result, "inventory_movements_correcting_of_fk");
  });
});
