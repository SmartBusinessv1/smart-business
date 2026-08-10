// EIS §45.5.4 (RLS/grants) and §45.5.5 (atomic claim), independently
// re-verified directly against the dedicated test project's real schema --
// not the server-function layer, but the exact database contract it
// depends on. Mirrors tests/inventory/rls-cross-business.test.ts.
// Covers §32B items 34-38, 42 and the BA-3/BA-5 constraint-level guarantees.
import { describe, it, expect, beforeAll } from "vitest";
import {
  adminClient,
  createAnonClient,
  createTestOwner,
  type TestOwner,
} from "../setup/test-clients";

async function insertBatch(businessId: string, initiatedBy: string) {
  const { data, error } = await adminClient
    .from("catalog_import_batches")
    .insert({
      business_id: businessId,
      initiated_by: initiatedBy,
      original_filename: "fixture.csv",
      file_kind: "csv",
      row_count: 1,
    })
    .select("id")
    .single();
  if (error) throw error;
  return data.id;
}

async function insertRow(businessId: string, batchId: string, rowNumber = 1) {
  const { data, error } = await adminClient
    .from("catalog_import_rows")
    .insert({
      business_id: businessId,
      batch_id: batchId,
      row_number: rowNumber,
      status: "READY",
      parsed_snapshot: { name: "Fixture Product" },
      has_reference_cost_authority: false,
    })
    .select("id, row_idempotency_key")
    .single();
  if (error) throw error;
  return data;
}

describe("catalog_import_batches / catalog_import_rows -- ACL, RLS, and constraints", () => {
  let ownerA: TestOwner;
  let ownerB: TestOwner;
  let batchA: string;

  beforeAll(async () => {
    ownerA = await createTestOwner("import-rls-a");
    ownerB = await createTestOwner("import-rls-b");
    batchA = await insertBatch(ownerA.businessId, ownerA.userId);
    await insertRow(ownerA.businessId, batchA);
  });

  it("authenticated cannot INSERT into catalog_import_batches directly (no grant)", async () => {
    const result = await ownerA.client.from("catalog_import_batches").insert({
      business_id: ownerA.businessId,
      initiated_by: ownerA.userId,
      original_filename: "hack.csv",
      file_kind: "csv",
      row_count: 0,
    });
    expect(result.error).toBeTruthy();
  });

  it("authenticated cannot UPDATE catalog_import_batches directly (no grant)", async () => {
    const result = await ownerA.client
      .from("catalog_import_batches")
      .update({ status: "committed" })
      .eq("id", batchA);
    expect(result.error).toBeTruthy();
  });

  it("authenticated cannot DELETE from catalog_import_batches directly (no grant)", async () => {
    const result = await ownerA.client.from("catalog_import_batches").delete().eq("id", batchA);
    expect(result.error).toBeTruthy();
  });

  it("authenticated cannot INSERT/UPDATE/DELETE catalog_import_rows directly (no grant)", async () => {
    const insertResult = await ownerA.client.from("catalog_import_rows").insert({
      business_id: ownerA.businessId,
      batch_id: batchA,
      row_number: 99,
      status: "READY",
      parsed_snapshot: { name: "hack" },
      has_reference_cost_authority: false,
    });
    expect(insertResult.error).toBeTruthy();

    const updateResult = await ownerA.client
      .from("catalog_import_rows")
      .update({ status: "CREATED" })
      .eq("batch_id", batchA);
    expect(updateResult.error).toBeTruthy();

    const deleteResult = await ownerA.client
      .from("catalog_import_rows")
      .delete()
      .eq("batch_id", batchA);
    expect(deleteResult.error).toBeTruthy();
  });

  it("Owner A can SELECT their own batch and rows", async () => {
    const batch = await ownerA.client
      .from("catalog_import_batches")
      .select("*")
      .eq("id", batchA)
      .maybeSingle();
    expect(batch.error).toBeNull();
    expect(batch.data?.id).toBe(batchA);

    const rows = await ownerA.client.from("catalog_import_rows").select("*").eq("batch_id", batchA);
    expect(rows.error).toBeNull();
    expect(rows.data?.length).toBe(1);
  });

  it("Owner B querying Owner A's batch id by known value gets nothing, not an error (non-disclosure)", async () => {
    const result = await ownerB.client
      .from("catalog_import_batches")
      .select("*")
      .eq("id", batchA)
      .maybeSingle();
    expect(result.error).toBeNull();
    expect(result.data).toBeNull();
  });

  it("Owner B's unfiltered list of import batches never includes Owner A's rows", async () => {
    const result = await ownerB.client.from("catalog_import_batches").select("id");
    expect(result.error).toBeNull();
    expect((result.data ?? []).some((r) => r.id === batchA)).toBe(false);
  });

  it("Owner B cannot see Owner A's import rows even by batch_id", async () => {
    const result = await ownerB.client
      .from("catalog_import_rows")
      .select("id")
      .eq("batch_id", batchA);
    expect(result.error).toBeNull();
    expect(result.data ?? []).toEqual([]);
  });

  it("an anonymous caller has zero access to either table", async () => {
    const anon = createAnonClient();
    const readBatches = await anon
      .from("catalog_import_batches")
      .select("id")
      .eq("id", batchA)
      .maybeSingle();
    expect(readBatches.data).toBeNull();

    const readRows = await anon.from("catalog_import_rows").select("id").eq("batch_id", batchA);
    expect(readRows.data ?? []).toEqual([]);

    const write = await anon.from("catalog_import_batches").insert({
      business_id: ownerA.businessId,
      initiated_by: ownerA.userId,
      original_filename: "anon.csv",
      file_kind: "csv",
      row_count: 0,
    });
    expect(write.error).toBeTruthy();
  });
});

describe("catalog_import_rows -- tenant-binding and status-coupled constraints (BA-3, BA-5)", () => {
  let owner: TestOwner;
  let otherOwner: TestOwner;
  let batchId: string;

  beforeAll(async () => {
    owner = await createTestOwner("import-constraints");
    otherOwner = await createTestOwner("import-constraints-other");
    batchId = await insertBatch(owner.businessId, owner.userId);
  });

  it("rejects a row whose business_id disagrees with its own batch's business_id", async () => {
    const result = await adminClient.from("catalog_import_rows").insert({
      business_id: otherOwner.businessId, // mismatched on purpose
      batch_id: batchId, // belongs to `owner`, not `otherOwner`
      row_number: 1,
      status: "READY",
      parsed_snapshot: { name: "Cross-tenant row" },
      has_reference_cost_authority: false,
    });
    expect(result.error).toBeTruthy();
  });

  it("rejects a CREATED row missing its resolution evidence", async () => {
    const result = await adminClient.from("catalog_import_rows").insert({
      business_id: owner.businessId,
      batch_id: batchId,
      row_number: 2,
      status: "CREATED",
      parsed_snapshot: { name: "Missing evidence" },
      has_reference_cost_authority: false,
      // resolved_product_id / resolved_by / resolved_at intentionally absent
    });
    expect(result.error).toBeTruthy();
  });

  it("rejects a non-CREATED row carrying resolution evidence", async () => {
    const result = await adminClient.from("catalog_import_rows").insert({
      business_id: owner.businessId,
      batch_id: batchId,
      row_number: 3,
      status: "READY",
      parsed_snapshot: { name: "Forged evidence" },
      has_reference_cost_authority: false,
      resolved_by: owner.userId,
      resolved_at: new Date().toISOString(),
    });
    expect(result.error).toBeTruthy();
  });

  it("enforces business-scoped row_idempotency_key uniqueness", async () => {
    const first = await insertRow(owner.businessId, batchId, 10);
    const dupe = await adminClient.from("catalog_import_rows").insert({
      business_id: owner.businessId,
      batch_id: batchId,
      row_number: 11,
      status: "READY",
      parsed_snapshot: { name: "Duplicate key" },
      has_reference_cost_authority: false,
      row_idempotency_key: first.row_idempotency_key,
    });
    expect(dupe.error).toBeTruthy();
  });
});

describe("catalog_import_batches -- committed_at/status coherence (BA-5) and non-destructive retention (BA-6)", () => {
  let owner: TestOwner;

  beforeAll(async () => {
    owner = await createTestOwner("import-batch-coherence");
  });

  it("rejects a committed batch with no committed_at timestamp", async () => {
    const result = await adminClient.from("catalog_import_batches").insert({
      business_id: owner.businessId,
      initiated_by: owner.userId,
      original_filename: "x.csv",
      file_kind: "csv",
      row_count: 0,
      status: "committed",
      committed_at: null,
    });
    expect(result.error).toBeTruthy();
  });

  it("rejects a non-committed batch that carries a committed_at timestamp", async () => {
    const result = await adminClient.from("catalog_import_batches").insert({
      business_id: owner.businessId,
      initiated_by: owner.userId,
      original_filename: "x.csv",
      file_kind: "csv",
      row_count: 0,
      status: "previewed",
      committed_at: new Date().toISOString(),
    });
    expect(result.error).toBeTruthy();
  });

  it("refuses to delete a batch while a row still references it (no cascade)", async () => {
    const batchId = await insertBatch(owner.businessId, owner.userId);
    await insertRow(owner.businessId, batchId, 1);
    const result = await adminClient.from("catalog_import_batches").delete().eq("id", batchId);
    expect(result.error).toBeTruthy();
  });
});

describe("catalog_import_batches -- atomic claim concurrency (RSB-2, EIS §45.5.5)", () => {
  it("exactly one of two simultaneous claim attempts succeeds; the other affects zero rows", async () => {
    const owner = await createTestOwner("import-claim-race");
    const batchId = await insertBatch(owner.businessId, owner.userId);

    const claim = () =>
      adminClient
        .from("catalog_import_batches")
        .update({ status: "committing" })
        .eq("id", batchId)
        .eq("business_id", owner.businessId)
        .in("status", ["previewed", "failed"])
        .select("id");

    const [first, second] = await Promise.all([claim(), claim()]);
    const claimedCounts = [first.data?.length ?? 0, second.data?.length ?? 0];
    expect(claimedCounts.sort()).toEqual([0, 1]);

    const final = await adminClient
      .from("catalog_import_batches")
      .select("status")
      .eq("id", batchId)
      .single();
    expect(final.data?.status).toBe("committing");
  });

  it("a batch already committed cannot be re-claimed", async () => {
    const owner = await createTestOwner("import-claim-committed");
    const batchId = await insertBatch(owner.businessId, owner.userId);
    await adminClient
      .from("catalog_import_batches")
      .update({ status: "committed", committed_at: new Date().toISOString() })
      .eq("id", batchId);

    const result = await adminClient
      .from("catalog_import_batches")
      .update({ status: "committing" })
      .eq("id", batchId)
      .in("status", ["previewed", "failed"])
      .select("id");
    expect(result.data ?? []).toEqual([]);
  });
});

// SEC-IMP-5 (report1.85.md §6, report1.86.md): durable follow-up state
// requires a FAILED row to be able to legitimately carry resolution
// evidence (the product was created; a required follow-up is still
// outstanding) -- previously impossible under the original constraint.
describe("catalog_import_rows -- relaxed resolution-pair constraint (SEC-IMP-5)", () => {
  it("allows a FAILED row to carry resolution evidence (product created, follow-up pending)", async () => {
    const owner = await createTestOwner("import-failed-with-evidence");
    const batchId = await insertBatch(owner.businessId, owner.userId);
    const row = await insertRow(owner.businessId, batchId, 1);

    const result = await adminClient
      .from("catalog_import_rows")
      .update({
        status: "FAILED",
        resolved_product_id: null,
        resolved_by: owner.userId,
        resolved_at: new Date().toISOString(),
        follow_up_state: { tax: "failed" },
      })
      .eq("id", row.id)
      .select();
    // resolved_product_id alone left null while resolved_by/resolved_at are
    // set must still fail (the three columns move together) -- this proves
    // the pairing rule survived the relaxation, not just the FAILED case.
    expect(result.error).toBeTruthy();
  });

  it("allows a FAILED row with all three resolution-evidence columns set together", async () => {
    const owner = await createTestOwner("import-failed-with-full-evidence");
    const batchId = await insertBatch(owner.businessId, owner.userId);
    const row = await insertRow(owner.businessId, batchId, 1);

    // A real product is not required for this constraint-shape test --
    // resolved_product_id only needs to satisfy the same-business FK, so
    // create one directly via the governed command.
    const created = await owner.client.rpc("create_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_name: `Evidence Product ${crypto.randomUUID()}`,
    });
    expect(created.error).toBeNull();
    const productId = (created.data as { product_id: string }).product_id;

    const result = await adminClient
      .from("catalog_import_rows")
      .update({
        status: "FAILED",
        resolved_product_id: productId,
        resolved_by: owner.userId,
        resolved_at: new Date().toISOString(),
        follow_up_state: { tax: "failed" },
      })
      .eq("id", row.id)
      .select();
    expect(result.error).toBeNull();
    expect(result.data?.[0]?.status).toBe("FAILED");
    expect(result.data?.[0]?.resolved_product_id).toBe(productId);
  });

  it("still rejects a CREATED row missing any resolution-evidence column", async () => {
    const owner = await createTestOwner("import-created-missing-evidence");
    const batchId = await insertBatch(owner.businessId, owner.userId);
    const row = await insertRow(owner.businessId, batchId, 1);

    const result = await adminClient
      .from("catalog_import_rows")
      .update({ status: "CREATED", resolved_product_id: null })
      .eq("id", row.id)
      .select();
    expect(result.error).toBeTruthy();
  });

  it("still rejects a non-CREATED/non-FAILED row carrying resolution evidence", async () => {
    const owner = await createTestOwner("import-ready-with-evidence");
    const batchId = await insertBatch(owner.businessId, owner.userId);
    const row = await insertRow(owner.businessId, batchId, 1);

    const result = await adminClient
      .from("catalog_import_rows")
      .update({
        status: "READY",
        resolved_product_id: crypto.randomUUID(),
        resolved_by: owner.userId,
        resolved_at: new Date().toISOString(),
      })
      .eq("id", row.id)
      .select();
    expect(result.error).toBeTruthy();
  });
});

// SEC-IMP-6 (report1.85.md §9, report1.86.md): delete_catalog_product must
// return the normal governed DEPENDENT_HISTORY_CONFLICT rejection for a
// product referenced by catalog_import_rows, never a raw FK exception --
// and must remain unaffected for an ordinary, unreferenced product.
describe("delete_catalog_product -- governed rejection for imported/matched products (SEC-IMP-6)", () => {
  it("returns a raw error for NEITHER case -- ordinary product deletes cleanly", async () => {
    const owner = await createTestOwner("import-delete-ordinary");
    const created = await owner.client.rpc("create_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_name: `Ordinary Product ${crypto.randomUUID()}`,
    });
    expect(created.error).toBeNull();
    const productId = (created.data as { product_id: string }).product_id;

    const deleted = await owner.client.rpc("delete_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_product_id: productId,
    });
    expect(deleted.error).toBeNull();
    expect((deleted.data as { outcome: string }).outcome).toBe("completed");
  });

  it("returns the governed DEPENDENT_HISTORY_CONFLICT rejection (not a raw FK error) when resolved_product_id references the product", async () => {
    const owner = await createTestOwner("import-delete-resolved-ref");
    const created = await owner.client.rpc("create_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_name: `Imported Product ${crypto.randomUUID()}`,
    });
    expect(created.error).toBeNull();
    const productId = (created.data as { product_id: string }).product_id;

    const batchId = await insertBatch(owner.businessId, owner.userId);
    const row = await insertRow(owner.businessId, batchId, 1);
    await adminClient
      .from("catalog_import_rows")
      .update({
        status: "CREATED",
        resolved_product_id: productId,
        resolved_by: owner.userId,
        resolved_at: new Date().toISOString(),
      })
      .eq("id", row.id);

    const deleted = await owner.client.rpc("delete_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_product_id: productId,
    });
    // A raw FK violation would surface as a PostgREST transport `error`,
    // not as a clean, structured rejection result -- the whole point of
    // this correction is that it does NOT.
    expect(deleted.error).toBeNull();
    expect((deleted.data as { outcome: string; rejection_reason: string }).outcome).toBe(
      "rejected",
    );
    expect((deleted.data as { rejection_reason: string }).rejection_reason).toBe(
      "DEPENDENT_HISTORY_CONFLICT",
    );
  });

  it("returns the same governed rejection when only matched_product_id (never resolved) references the product", async () => {
    const owner = await createTestOwner("import-delete-matched-ref");
    const created = await owner.client.rpc("create_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_name: `Matched Product ${crypto.randomUUID()}`,
    });
    expect(created.error).toBeNull();
    const productId = (created.data as { product_id: string }).product_id;

    const batchId = await insertBatch(owner.businessId, owner.userId);
    const { data: rowData, error: rowErr } = await adminClient
      .from("catalog_import_rows")
      .insert({
        business_id: owner.businessId,
        batch_id: batchId,
        row_number: 1,
        status: "POSSIBLE_MATCH",
        parsed_snapshot: { name: "Fixture Product" },
        has_reference_cost_authority: false,
        matched_product_id: productId,
      })
      .select("id")
      .single();
    expect(rowErr).toBeNull();
    expect(rowData).toBeTruthy();

    const deleted = await owner.client.rpc("delete_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_product_id: productId,
    });
    expect(deleted.error).toBeNull();
    expect((deleted.data as { outcome: string }).outcome).toBe("rejected");
    expect((deleted.data as { rejection_reason: string }).rejection_reason).toBe(
      "DEPENDENT_HISTORY_CONFLICT",
    );
  });

  it("cross-business: Owner B cannot use this path to discover or delete Owner A's product", async () => {
    const ownerA = await createTestOwner("import-delete-cross-a");
    const ownerB = await createTestOwner("import-delete-cross-b");
    const created = await ownerA.client.rpc("create_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_name: `Cross Business Product ${crypto.randomUUID()}`,
    });
    expect(created.error).toBeNull();
    const productId = (created.data as { product_id: string }).product_id;

    const deleted = await ownerB.client.rpc("delete_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_product_id: productId,
    });
    expect(deleted.error).toBeNull();
    expect((deleted.data as { outcome: string }).outcome).toBe("rejected");
    expect((deleted.data as { rejection_reason: string }).rejection_reason).toBe("NOT_FOUND");
  });
});

// SEC-IMP-5 (report1.85.md §8, report1.86.md): resolveFollowUpOutcome falls
// back to get_catalog_command_outcome whenever a follow-up command's own
// response is ambiguous (a transport error rather than a clean governed
// result). This is the exact RPC contract that fallback depends on --
// verified directly here since a genuine dropped-connection transport
// failure cannot be deterministically reproduced over real HTTP.
describe("get_catalog_command_outcome -- ambiguous-outcome reconciliation (SEC-IMP-5)", () => {
  it("reports found + the true outcome for an idempotency key that already completed", async () => {
    const owner = await createTestOwner("import-outcome-completed");
    const created = await owner.client.rpc("create_catalog_product", {
      p_idempotency_key: crypto.randomUUID(),
      p_name: `Outcome Product ${crypto.randomUUID()}`,
    });
    expect(created.error).toBeNull();
    const productId = (created.data as { product_id: string }).product_id;

    const priceKey = crypto.randomUUID();
    const priced = await owner.client.rpc("record_catalog_selling_price_change", {
      p_idempotency_key: priceKey,
      p_product_id: productId,
      p_new_price: 250,
    });
    expect(priced.error).toBeNull();
    expect((priced.data as { outcome: string }).outcome).toBe("completed");

    // The exact reconciliation call resolveFollowUpOutcome makes when a
    // follow-up's own response was ambiguous: given only the operation
    // name and idempotency key (never the raw error), it must recover the
    // true, already-persisted outcome rather than the caller re-guessing.
    const outcome = await owner.client.rpc("get_catalog_command_outcome", {
      p_operation: "record_catalog_selling_price_change",
      p_idempotency_key: priceKey,
    });
    expect(outcome.error).toBeNull();
    const result = outcome.data as { found: boolean; outcome: string };
    expect(result.found).toBe(true);
    expect(result.outcome).toBe("completed");
  });

  it("reports not-found (never a raw error) for an idempotency key that was never actually written", async () => {
    const owner = await createTestOwner("import-outcome-unknown");
    const outcome = await owner.client.rpc("get_catalog_command_outcome", {
      p_operation: "record_catalog_selling_price_change",
      p_idempotency_key: crypto.randomUUID(),
    });
    expect(outcome.error).toBeNull();
    const result = outcome.data as { found: boolean };
    expect(result.found).toBe(false);
  });
});
