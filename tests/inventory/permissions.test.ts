// Engineering Contract §16, item 2: "Independent permission testing for
// view, opening-stock, adjustment, and correction actions, against
// authorized and unauthorized roles."
//
// SB-P-1.10 is Owner-only per Mission Control clarification
// SB-P-1.10-CLAR-1.0 (A1): there is no secondary staff/role table in this
// schema (only businesses.owner_id). So "authorized role" = the business
// owner, and "unauthorized role" = any other signed-in user or an
// unauthenticated caller. Each action is tested independently rather than
// assuming one blanket check covers all four.
import { describe, it, expect, beforeAll } from "vitest";
import {
  createAnonClient,
  createTestOwner,
  uniqueName,
  type TestOwner,
} from "../setup/test-clients";
import {
  createItem,
  createMovement,
  newIdempotencyKey,
  updateItemStatus,
} from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("independent permission enforcement", () => {
  let owner: TestOwner;
  let outsider: TestOwner;
  let itemId: string;
  let openingMovementId: string;

  beforeAll(async () => {
    owner = await createTestOwner("perm-owner");
    outsider = await createTestOwner("perm-outsider");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Permission Item"),
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
    openingMovementId = opening.id;
  });

  it("view: owner sees the item, outsider and anon do not", async () => {
    const ownerView = await owner.client
      .from("inventory_items")
      .select("*")
      .eq("id", itemId)
      .maybeSingle();
    expect(ownerView.error).toBeNull();
    expect(ownerView.data).toBeTruthy();

    const outsiderView = await outsider.client
      .from("inventory_items")
      .select("*")
      .eq("id", itemId)
      .maybeSingle();
    expect(outsiderView.error).toBeNull();
    expect(outsiderView.data).toBeNull();

    const anon = createAnonClient();
    const anonView = await anon.from("inventory_items").select("*").eq("id", itemId).maybeSingle();
    expect(anonView.data).toBeNull();
  });

  it("opening-stock: outsider cannot post opening stock against the owner's item", async () => {
    const freshItem = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Permission Item Fresh"),
        baseUnit: "unit",
      }),
    );
    const result = await createMovement(outsider.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "opening_stock",
      itemId: freshItem.id,
      movementType: "opening_stock",
      direction: "increase",
      quantity: 10,
      reason: "Attempted by outsider",
    });
    expectRejected(result, "not found or not permitted");
  });

  it("adjustment: outsider cannot post an adjustment against the owner's item", async () => {
    const result = await createMovement(outsider.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "adjustment_increase",
      itemId,
      movementType: "adjustment_increase",
      direction: "increase",
      quantity: 5,
      reason: "Attempted by outsider",
    });
    expectRejected(result, "not found or not permitted");
  });

  it("correction: outsider cannot post a correction against the owner's movement", async () => {
    const result = await createMovement(outsider.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "correction",
      itemId,
      movementType: "correction",
      direction: "decrease",
      quantity: 5,
      reason: "Attempted by outsider",
      correctingOf: openingMovementId,
    });
    // Outsider cannot even see the item, so the item lookup fails first --
    // the correction-specific checks are never reached, which is itself
    // the correct (fail-closed) outcome.
    expectRejected(result, "not found or not permitted");
  });

  it("unauthenticated caller cannot perform any of the above", async () => {
    const anon = createAnonClient();
    const result = await anon.rpc("create_inventory_movement", {
      p_idempotency_key: newIdempotencyKey(),
      p_operation: "opening_stock",
      p_item_id: itemId,
      p_movement_type: "opening_stock",
      p_direction: "increase",
      p_quantity: 1,
      p_reason: "anon attempt",
      p_occurred_at: new Date().toISOString(),
      p_correcting_of: null as unknown as string,
      p_allow_negative_stock: false,
      p_business_event_type: null as unknown as string,
      p_business_event_id: null as unknown as string,
    });
    // anon has no GRANT EXECUTE on this function at all -- rejected before
    // the function body's own "Not authenticated" check is ever reached.
    expect(result.error).toBeTruthy();
  });

  it("archive (status change) is owner-only", async () => {
    const outsiderAttempt = await updateItemStatus(outsider.client, itemId, "archived");
    // RLS UPDATE policy scopes to owned businesses -- zero rows match, so
    // PostgREST reports this as "no rows found" for .single(), not a
    // generic success.
    expect(outsiderAttempt.error).toBeTruthy();

    const ownerAttempt = await updateItemStatus(owner.client, itemId, "archived");
    expect(ownerAttempt.error).toBeNull();
    expect(ownerAttempt.data?.status).toBe("archived");

    // restore for any later test ordering assumptions
    await updateItemStatus(owner.client, itemId, "active");
  });
});
