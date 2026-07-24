// Engineering Contract §16, item 16: "Trusted event-link contract tests for
// non-existent/cross-business event references and idempotent retried
// event delivery."
//
// IMPORTANT SCOPE NOTE: per Engineering Contract §11 and EIS §4 "Trusted
// event-link contract", SB-P-1.10 intentionally does NOT validate that
// business_event_id references a real, existing, same-business row --
// no future-domain event table exists yet in this mission's scope, and the
// EIS explicitly assigns that validation to the *owning domain* that will
// eventually call this function, not to create_inventory_movement() itself.
// This file therefore verifies the two things SB-P-1.10 *does* enforce
// today (the type/id pairing CHECK, and idempotent-safe retry of an
// event-originated movement) rather than asserting a non-existence check
// the locked design does not yet implement. This is a scope note, not a
// discovered defect -- see traceability-matrix.md.
import { describe, it, beforeAll } from "vitest";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import { createItem, createMovement, newIdempotencyKey } from "../setup/inventory-rpc";
import { expectRejected, expectSucceeded } from "../setup/assertions";

describe("trusted event-link contract", () => {
  let owner: TestOwner;
  let itemId: string;

  beforeAll(async () => {
    owner = await createTestOwner("event-link");
    const item = expectSucceeded(
      await createItem(owner.client, {
        businessId: owner.businessId,
        createdBy: owner.userId,
        name: uniqueName("Event Link Item"),
        baseUnit: "unit",
      }),
    );
    itemId = item.id;
  });

  it("business_event_type and business_event_id must both be present or both absent", async () => {
    const result = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "adjustment_increase",
      itemId,
      movementType: "adjustment_increase",
      direction: "increase",
      quantity: 1,
      reason: "Only one of the pair supplied",
      businessEventType: "future_domain_event",
      businessEventId: null,
    });
    expectRejected(result, "must both be provided");
  });

  it("a movement with a well-formed (currently unvalidated) event reference is accepted, per the current locked scope", async () => {
    const result = await createMovement(owner.client, {
      idempotencyKey: newIdempotencyKey(),
      operation: "adjustment_increase",
      itemId,
      movementType: "adjustment_increase",
      direction: "increase",
      quantity: 1,
      reason: "Event-originated movement",
      businessEventType: "future_domain_event",
      businessEventId: crypto.randomUUID(), // does not reference any real row -- see scope note above
    });
    expectSucceeded(result);
  });

  it("retried event delivery with the same idempotency key does not create a duplicate movement", async () => {
    const key = newIdempotencyKey();
    const params = {
      idempotencyKey: key,
      operation: "event_adjustment",
      itemId,
      movementType: "adjustment_increase" as const,
      direction: "increase" as const,
      quantity: 2,
      reason: "Event delivery, first attempt",
      businessEventType: "future_domain_event",
      businessEventId: crypto.randomUUID(),
    };
    const first = expectSucceeded(await createMovement(owner.client, params));
    // Simulates the owning domain retrying delivery of the same event.
    const retried = expectSucceeded(await createMovement(owner.client, params));
    if (retried.id !== first.id) {
      throw new Error("retried event delivery created a duplicate movement");
    }
  });
});
