// Engineering Contract §16, item 3: "RLS cross-business access tests,
// including non-disclosure of another business's inventory."
// EIS §15: "...including negative tests that a lack of permission does not
// disclose that a row exists."
import { describe, it, expect, beforeAll } from "vitest";
import {
  createAnonClient,
  createTestOwner,
  uniqueName,
  type TestOwner,
} from "../setup/test-clients";
import { createItem, createMovement, newIdempotencyKey } from "../setup/inventory-rpc";
import { expectSucceeded } from "../setup/assertions";

describe("RLS cross-business isolation", () => {
  let ownerA: TestOwner;
  let ownerB: TestOwner;
  let itemA: string;
  let movementA: string;

  beforeAll(async () => {
    ownerA = await createTestOwner("rls-a");
    ownerB = await createTestOwner("rls-b");
    const item = expectSucceeded(
      await createItem(ownerA.client, {
        businessId: ownerA.businessId,
        createdBy: ownerA.userId,
        name: uniqueName("RLS Item A"),
        baseUnit: "unit",
      }),
    );
    itemA = item.id;
    const movement = expectSucceeded(
      await createMovement(ownerA.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "opening_stock",
        itemId: itemA,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 40,
        reason: "Opening stock",
      }),
    );
    movementA = movement.id;
  });

  it("owner B's unfiltered list of inventory_items never includes owner A's rows", async () => {
    const { data, error } = await ownerB.client.from("inventory_items").select("id");
    expect(error).toBeNull();
    expect((data ?? []).some((row) => row.id === itemA)).toBe(false);
  });

  it("owner B querying owner A's item by its known id gets nothing, not a 403", async () => {
    const { data, error } = await ownerB.client
      .from("inventory_items")
      .select("*")
      .eq("id", itemA)
      .maybeSingle();
    // Non-disclosure: RLS filters the row out of the result set entirely --
    // this looks identical to "id does not exist", never a distinguishable
    // permission-denied response.
    expect(error).toBeNull();
    expect(data).toBeNull();
  });

  it("owner B's unfiltered list of inventory_movements never includes owner A's rows", async () => {
    const { data, error } = await ownerB.client.from("inventory_movements").select("id");
    expect(error).toBeNull();
    expect((data ?? []).some((row) => row.id === movementA)).toBe(false);
  });

  it("owner B cannot insert a movement against owner A's item even scoped to B's own business_id", async () => {
    // item_id/business_id are FK-tied (inventory_movements_item_business_fk);
    // A's item can never legally pair with B's business_id.
    const result = await ownerB.client.from("inventory_movements").insert({
      item_id: itemA,
      business_id: ownerB.businessId,
      movement_type: "adjustment_increase",
      direction: "increase",
      quantity: 1,
      reason: "cross-business attempt",
      responsible_user_id: ownerB.userId,
    });
    expect(result.error).toBeTruthy();
  });

  it("an unauthenticated (anon) caller sees nothing and cannot write", async () => {
    const anon = createAnonClient();
    const view = await anon.from("inventory_items").select("id").eq("id", itemA).maybeSingle();
    expect(view.data).toBeNull();

    const write = await anon.from("inventory_items").insert({
      business_id: ownerA.businessId,
      name: "anon item",
      base_unit: "unit",
      created_by: ownerA.userId,
    });
    // No GRANT to anon on inventory_items at all.
    expect(write.error).toBeTruthy();
  });
});
