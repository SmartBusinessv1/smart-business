// Engineering Contract §16, item 4: "Correction tests confirming
// original-movement immutability, correction linkage, and independent
// correction-permission enforcement."
import { describe, it, expect, beforeAll } from "vitest";
import { adminClient, createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import { createItem, createMovement, getItem, newIdempotencyKey } from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("correction behaviour", () => {
  let owner: TestOwner;
  let outsider: TestOwner;
  let itemId: string;
  let originalMovementId: string;

  beforeAll(async () => {
    owner = await createTestOwner("corr-owner");
    outsider = await createTestOwner("corr-outsider");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Correction Item"),
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
        quantity: 100,
        reason: "Opening stock, later found overstated",
      }),
    );
    originalMovementId = opening.id;
  });

  it("original movement is byte-for-byte unchanged after a correction is posted against it", async () => {
    const before = expectSucceeded(await getItem(owner.client, itemId));

    const correction = expectSucceeded(
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "correction",
        itemId,
        movementType: "correction",
        direction: "decrease",
        quantity: 20,
        reason: "Opening count was overstated by 20",
        correctingOf: originalMovementId,
      }),
    );

    const { data: originalAfter, error } = await owner.client
      .from("inventory_movements")
      .select("*")
      .eq("id", originalMovementId)
      .single();
    expect(error).toBeNull();
    expect(originalAfter?.quantity).toBe(100);
    expect(originalAfter?.direction).toBe("increase");
    expect(originalAfter?.movement_type).toBe("opening_stock");
    expect(originalAfter?.correcting_of).toBeNull();

    // Correction is linked and independently visible/queryable.
    expect(correction.correcting_of).toBe(originalMovementId);
    const { data: correctionRow } = await owner.client
      .from("inventory_movements")
      .select("*")
      .eq("id", correction.id)
      .single();
    expect(correctionRow?.movement_type).toBe("correction");
    expect(correctionRow?.correcting_of).toBe(originalMovementId);

    const after = expectSucceeded(await getItem(owner.client, itemId));
    expect(after.updated_at).toBe(before.updated_at); // item row itself untouched by a movement write
  });

  it("an ordinary owner's UPDATE attempt never mutates the row (RLS defines no UPDATE policy, so zero rows match)", async () => {
    // inventory_movements has RLS enabled with only SELECT and INSERT
    // policies defined (see supabase/migrations -- no UPDATE/DELETE
    // policy exists). Under RLS's default-deny, that means an ordinary
    // `authenticated` UPDATE matches zero rows and PostgREST reports
    // success with no error -- the row is provably never mutated, but the
    // mechanism is RLS row-matching, not the BEFORE UPDATE trigger firing.
    const result = await owner.client
      .from("inventory_movements")
      .update({ reason: "trying to rewrite history" })
      .eq("id", originalMovementId);
    expect(result.error).toBeNull();

    const { data: unchanged } = await owner.client
      .from("inventory_movements")
      .select("reason")
      .eq("id", originalMovementId)
      .single();
    expect(unchanged?.reason).toBe("Opening stock, later found overstated");
  });

  it("defence-in-depth: the append-only trigger itself rejects mutation even for a caller RLS does not block (service_role)", async () => {
    // Confirms the BEFORE UPDATE/DELETE triggers are a real, independent
    // second guard -- not dead code -- for any context where RLS isn't the
    // thing standing in the way (e.g. an emergency-repair service-role
    // session, per the migration's own comment on inventory_movements_
    // reject_mutation()).
    const result = await adminClient
      .from("inventory_movements")
      .update({ reason: "service-role mutation attempt" })
      .eq("id", originalMovementId);
    expectRejected(result, "append-only");
  });

  it("correction permission is enforced independently: an outsider cannot correct the owner's movement", async () => {
    const result = await createMovement(outsider.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "correction",
      itemId,
      movementType: "correction",
      direction: "decrease",
      quantity: 1,
      reason: "outsider attempt",
      correctingOf: originalMovementId,
    });
    expectRejected(result, "not found or not permitted");
  });
});
