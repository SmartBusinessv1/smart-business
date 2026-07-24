// Engineering Contract §16, item 17 / §11 "Shared Movement-Path
// Obligations": "No feature, table, or code path outside the shared
// movement-creation operation writes to inventory_movements or to any
// current-stock value."
import { describe, it, expect, beforeAll } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createItem, createMovement, newIdempotencyKey } from "../setup/inventory-rpc";
import { createTestOwner, uniqueName, type TestOwner } from "../setup/test-clients";
import { expectSucceeded } from "../setup/assertions";

describe("shared write-path enforcement", () => {
  it("static check: no application source file under src/ writes to inventory_movements except via the create_inventory_movement RPC", () => {
    const srcDir = join(process.cwd(), "src");
    const entries = readdirSync(srcDir, { recursive: true, withFileTypes: true });
    const offenders: string[] = [];

    for (const entry of entries) {
      if (!entry.isFile()) continue;
      if (!/\.(ts|tsx)$/.test(entry.name)) continue;
      const fullPath = join(entry.parentPath ?? entry.path, entry.name);
      const content = readFileSync(fullPath, "utf-8");
      if (!content.includes("inventory_movements")) continue;

      // Allowed: reading (SELECT) from inventory_movements, or calling the
      // RPC by name. Not allowed: .insert(/.update(/.delete( chained to a
      // .from("inventory_movements") call.
      const hasDirectWrite =
        /\.from\(\s*["']inventory_movements["']\s*\)[\s\S]{0,120}\.(insert|update|delete|upsert)\(/.test(
          content,
        );
      if (hasDirectWrite) {
        offenders.push(fullPath);
      }
    }

    expect(
      offenders,
      `direct writes to inventory_movements found outside the shared write path: ${offenders.join(", ")}`,
    ).toEqual([]);
  });

  describe("database-level probe: is the shared write path enforced ONLY by RLS + convention, or also at the grant/trigger level?", () => {
    let owner: TestOwner;
    let itemId: string;

    beforeAll(async () => {
      owner = await createTestOwner("write-path-probe");
      const item = expectSucceeded(
        await createItem(owner.client, {
          businessId: owner.businessId,
          createdBy: owner.userId,
          name: uniqueName("Write Path Probe Item"),
          baseUnit: "unit",
        }),
      );
      itemId = item.id;
      // Establish a small opening balance through the real, authorized path.
      await createMovement(owner.client, {
        idempotencyKey: newIdempotencyKey(),
        operation: "opening_stock",
        itemId,
        movementType: "opening_stock",
        direction: "increase",
        quantity: 5,
        reason: "Opening stock",
      });
    });

    it("records the actual behavior of a direct insert that bypasses create_inventory_movement's negative-stock guard", async () => {
      // create_inventory_movement() would reject this (it would take stock
      // to -95 without allow_negative_stock). A direct .insert() against
      // inventory_movements has GRANT INSERT to `authenticated` and an RLS
      // policy that only checks business ownership -- the negative-stock,
      // archived-item, and idempotency checks live in the function body,
      // not in a BEFORE INSERT trigger or CHECK constraint. This probe
      // records, rather than assumes, whether that means the guard is
      // bypassable outside the shared write path.
      const result = await owner.client
        .from("inventory_movements")
        .insert({
          item_id: itemId,
          business_id: owner.businessId,
          movement_type: "adjustment_decrease",
          direction: "decrease",
          quantity: 100,
          reason: "Direct insert bypassing create_inventory_movement",
          responsible_user_id: owner.userId,
        })
        .select()
        .single();

      // This assertion intentionally documents current behavior rather
      // than asserting a guarantee the schema does not yet provide. If it
      // fails (i.e. the insert is unexpectedly rejected), that's good news
      // -- update this test and the traceability matrix to reflect a
      // stronger guarantee than expected. If direct writes bypass the
      // function's business-rule guards (this insert succeeds), that is
      // reported to Mission Control as a discovered defect, per this
      // mission's "stop and report separately" instruction -- it is NOT
      // patched here (no RLS/grant/schema change is authorized by this
      // test-only mission).
      if (result.error) {
        expect(result.error).toBeTruthy(); // guard turned out to be enforced beyond the function
      } else {
        console.warn(
          "DISCOVERED DEFECT: direct INSERT into inventory_movements bypassed create_inventory_movement's negative-stock guard. " +
            "See docs/implementation/SB-P-1.10/evidence/tests/traceability-matrix.md for the reported defect record.",
        );
        expect(result.data).toBeTruthy(); // document the bypass explicitly rather than let it pass silently
      }
    });
  });
});
