// SEC-IMP-1 (report1.85.md §3, §7): a bounded, real-HTTP verification
// harness exercising the actual compiled TanStack Start server-function
// boundary -- requireSupabaseAuth, real FormData, the real seroval wire
// protocol -- against a real `vite dev` server pointed at the dedicated
// test Supabase project. See tests/catalog-import/http-harness.ts for the
// exact mechanism (URL derivation, request/response encoding) and how it
// is started/authenticated/executed/torn down.
//
// This file alone spawns and tears down its own app server (beforeAll/
// afterAll) so it can run standalone; being part of the default `npm
// test` sweep, this does add real wall-clock time (~10-15s server
// startup) to the full suite, accepted here as the cost of genuine
// end-to-end evidence -- consistent with this suite's existing practice
// of exercising the real dedicated test project rather than mocks.
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createClient } from "@supabase/supabase-js";
import { adminClient, createTestOwner, type TestOwner } from "../setup/test-clients";
import {
  callFormDataServerFn,
  callJsonServerFn,
  startAppServer,
  type RunningAppServer,
} from "./http-harness";

async function getAccessToken(owner: TestOwner): Promise<string> {
  const { data } = await owner.client.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error(`No session token for test owner`);
  return token;
}

function csvFormData(csv: string, filename = "import.csv"): FormData {
  const formData = new FormData();
  formData.append("file", new File([csv], filename, { type: "text/csv" }));
  return formData;
}

type PreviewResult = {
  outcome: string;
  reason?: string;
  batchId?: string;
  ready?: number;
};
type CommitResult = { outcome: string; created?: number; failed?: number };
type GetBatchResult = {
  batch: { id: string; status: string } | null;
  rows: { rowNumber: number; status: string; snapshot: { reference_cost?: number } }[];
};

describe("catalog import -- real authenticated HTTP boundary (SEC-IMP-1)", () => {
  let server: RunningAppServer;

  beforeAll(async () => {
    server = await startAppServer(8099);
  }, 45_000);

  afterAll(async () => {
    await server?.stop();
  });

  it("a valid authenticated Owner request previews a real CSV over real HTTP", async () => {
    const owner = await createTestOwner("http-preview-happy");
    const token = await getAccessToken(owner);

    const res = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name,SKU\nHTTP Test Product,SKU-HTTP-1\n"),
      { authorization: `Bearer ${token}` },
    );

    expect(res.error).toBeNull();
    const result = res.result as PreviewResult;
    expect(result.outcome).toBe("previewed");
    expect(result.ready).toBe(1);
    expect(result.batchId).toBeTruthy();

    // Direct DB confirmation the privileged write actually happened for
    // the *correct* business.
    const batch = await adminClient
      .from("catalog_import_batches")
      .select("business_id")
      .eq("id", result.batchId as string)
      .single();
    expect(batch.data?.business_id).toBe(owner.businessId);
  });

  it("a missing Authorization header is rejected before any privileged write occurs", async () => {
    const before = await adminClient
      .from("catalog_import_batches")
      .select("id", { count: "exact", head: true });

    const res = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name\nShould Not Be Created\n"),
      {}, // no authorization header at all
    );

    expect(res.error).toBeTruthy();
    const after = await adminClient
      .from("catalog_import_batches")
      .select("id", { count: "exact", head: true });
    expect(after.count).toBe(before.count);
  });

  it("an invalid/garbage token is rejected before any privileged write occurs", async () => {
    const before = await adminClient
      .from("catalog_import_batches")
      .select("id", { count: "exact", head: true });

    const res = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name\nShould Not Be Created\n"),
      { authorization: "Bearer not-a-real-token-at-all" },
    );

    expect(res.error).toBeTruthy();
    const after = await adminClient
      .from("catalog_import_batches")
      .select("id", { count: "exact", head: true });
    expect(after.count).toBe(before.count);
  });

  it("a well-formed but foreign JWT (signed for a different, nonexistent session) is rejected", async () => {
    // A syntactically valid-looking JWT (three base64url segments) that
    // does not correspond to any real session -- proves the middleware
    // validates against Supabase Auth itself, not merely token shape.
    const fakeJwt = [
      Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url"),
      Buffer.from(JSON.stringify({ sub: "00000000-0000-0000-0000-000000000000" })).toString(
        "base64url",
      ),
      "fake-signature",
    ].join(".");

    const res = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name\nShould Not Be Created\n"),
      { authorization: `Bearer ${fakeJwt}` },
    );
    expect(res.error).toBeTruthy();
  });

  it("an authenticated user with no owned business is denied (PERMISSION_DENIED), not crashed", async () => {
    // Sign up a real auth user directly, deliberately skipping the
    // `businesses` row createTestOwner() normally creates.
    const email = `sb-http-no-biz+${crypto.randomUUID()}@example.com`;
    const password = `NoBiz!${crypto.randomUUID()}`;
    const { data: userData, error: userErr } = await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    expect(userErr).toBeNull();
    const anon = createClient(process.env.SUPABASE_TEST_URL!, process.env.SUPABASE_TEST_ANON_KEY!, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
    const { data: signInData, error: signInErr } = await anon.auth.signInWithPassword({
      email,
      password,
    });
    expect(signInErr).toBeNull();
    const token = signInData.session!.access_token;

    const res = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name\nNo Business Owner\n"),
      { authorization: `Bearer ${token}` },
    );
    expect(res.error).toBeNull();
    const result = res.result as PreviewResult;
    expect(result.outcome).toBe("rejected");
    expect(result.reason).toBe("PERMISSION_DENIED");
    await adminClient.auth.admin.deleteUser(userData.user!.id);
  });

  it("full real-HTTP preview -> getBatch -> commit creates a real product via the caller-JWT command path", async () => {
    const owner = await createTestOwner("http-full-flow");
    const token = await getAccessToken(owner);
    const authHeader = { authorization: `Bearer ${token}` };

    const previewRes = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name,Selling Price\nFull Flow Product,150\n"),
      authHeader,
    );
    const preview = previewRes.result as PreviewResult;
    expect(preview.outcome).toBe("previewed");
    const batchId = preview.batchId as string;

    const getBatchRes = await callJsonServerFn(
      server.baseUrl,
      "catalogImportGetBatch",
      { batchId },
      authHeader,
    );
    const batchStatus = getBatchRes.result as GetBatchResult;
    expect(batchStatus.batch?.status).toBe("previewed");
    expect(batchStatus.rows).toHaveLength(1);

    const commitRes = await callJsonServerFn(
      server.baseUrl,
      "catalogImportCommit",
      { batchId },
      authHeader,
    );
    const commit = commitRes.result as CommitResult;
    expect(commit.outcome).toBe("committed");
    expect(commit.created).toBe(1);

    // Product Truth confirmation: a real row in catalog_products, owned by
    // the correct business, created through the unmodified command --
    // never written directly by the privileged bookkeeping client.
    const product = await adminClient
      .from("catalog_products")
      .select("business_id, name, current_selling_price")
      .eq("business_id", owner.businessId)
      .eq("name", "Full Flow Product")
      .maybeSingle();
    expect(product.data).toBeTruthy();
    expect(Number(product.data?.current_selling_price)).toBe(150);
  });

  it("cross-business getBatch and commit are non-disclosing over real HTTP", async () => {
    const ownerA = await createTestOwner("http-cross-a");
    const ownerB = await createTestOwner("http-cross-b");
    const tokenA = await getAccessToken(ownerA);
    const tokenB = await getAccessToken(ownerB);

    const previewRes = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name,Selling Price\nOwner A Private Product,100\n"),
      { authorization: `Bearer ${tokenA}` },
    );
    const batchId = (previewRes.result as PreviewResult).batchId as string;

    const getBatchAsB = await callJsonServerFn(
      server.baseUrl,
      "catalogImportGetBatch",
      { batchId },
      { authorization: `Bearer ${tokenB}` },
    );
    const asB = getBatchAsB.result as GetBatchResult;
    expect(asB.batch).toBeNull();
    expect(asB.rows).toEqual([]);

    const commitAsB = await callJsonServerFn(
      server.baseUrl,
      "catalogImportCommit",
      { batchId },
      { authorization: `Bearer ${tokenB}` },
    );
    expect((commitAsB.result as CommitResult).outcome).toBe("not_found");

    // Owner A's own product was never created by B's commit attempt.
    const leaked = await adminClient
      .from("catalog_products")
      .select("id")
      .eq("business_id", ownerB.businessId)
      .eq("name", "Owner A Private Product");
    expect(leaked.data ?? []).toEqual([]);
  });

  it("client-supplied business/actor spoof fields in the commit payload have no effect", async () => {
    const owner = await createTestOwner("http-spoof");
    const otherOwner = await createTestOwner("http-spoof-target");
    const token = await getAccessToken(owner);

    const previewRes = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name,Selling Price\nSpoof Attempt Product,100\n"),
      { authorization: `Bearer ${token}` },
    );
    const batchId = (previewRes.result as PreviewResult).batchId as string;

    // The commit validator only ever reads `batchId`/`skipRowNumbers` --
    // these extra fields are not part of its type and must be silently
    // ignored, never redirecting authority to otherOwner's business.
    const commitRes = await callJsonServerFn(
      server.baseUrl,
      "catalogImportCommit",
      {
        batchId,
        businessId: otherOwner.businessId,
        userId: otherOwner.userId,
        actorId: otherOwner.userId,
        resolved_by: otherOwner.userId,
      },
      { authorization: `Bearer ${token}` },
    );
    expect((commitRes.result as CommitResult).outcome).toBe("committed");

    const product = await adminClient
      .from("catalog_products")
      .select("business_id")
      .eq("business_id", owner.businessId)
      .eq("name", "Spoof Attempt Product")
      .maybeSingle();
    expect(product.data?.business_id).toBe(owner.businessId);
    expect(product.data?.business_id).not.toBe(otherOwner.businessId);
  });

  it("concurrent real-HTTP commit requests: exactly one wins, the loser performs zero mutations", async () => {
    const owner = await createTestOwner("http-concurrent-commit");
    const token = await getAccessToken(owner);
    const authHeader = { authorization: `Bearer ${token}` };

    const previewRes = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name,Selling Price\nConcurrent Commit Product,100\n"),
      authHeader,
    );
    const batchId = (previewRes.result as PreviewResult).batchId as string;

    const [first, second] = await Promise.all([
      callJsonServerFn(server.baseUrl, "catalogImportCommit", { batchId }, authHeader),
      callJsonServerFn(server.baseUrl, "catalogImportCommit", { batchId }, authHeader),
    ]);
    const outcomes = [
      (first.result as CommitResult).outcome,
      (second.result as CommitResult).outcome,
    ].sort();
    // One request actually processes the batch (committed/failed); the
    // other observes it already in flight or already done.
    expect(outcomes.some((o) => o === "in_progress" || o === "already_committed")).toBe(true);
    expect(outcomes.some((o) => o === "committed" || o === "failed")).toBe(true);

    // Exactly one product was created -- not zero, not two.
    const products = await adminClient
      .from("catalog_products")
      .select("id")
      .eq("business_id", owner.businessId)
      .eq("name", "Concurrent Commit Product");
    expect(products.data ?? []).toHaveLength(1);
  });

  it("replaying commit (with skipRowNumbers) after a batch is already committed mutates nothing", async () => {
    const owner = await createTestOwner("http-replay-commit");
    const token = await getAccessToken(owner);
    const authHeader = { authorization: `Bearer ${token}` };

    const previewRes = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      // 2nd row -> intra-batch duplicate, NEEDS_CORRECTION
      csvFormData("Product Name,Selling Price\nReplay Product,100\nReplay Product,100\n"),
      authHeader,
    );
    const batchId = (previewRes.result as PreviewResult).batchId as string;

    const firstCommit = await callJsonServerFn(
      server.baseUrl,
      "catalogImportCommit",
      { batchId },
      authHeader,
    );
    expect((firstCommit.result as CommitResult).outcome).toBe("committed");

    const beforeRows = await adminClient
      .from("catalog_import_rows")
      .select("row_number, status")
      .eq("batch_id", batchId)
      .order("row_number");

    // Replay with an explicit attempt to skip the NEEDS_CORRECTION row --
    // SEC-IMP-4's fix must mean this has zero effect on an already-
    // committed batch (the claim fails before any skip write).
    const replay = await callJsonServerFn(
      server.baseUrl,
      "catalogImportCommit",
      { batchId, skipRowNumbers: [2] },
      authHeader,
    );
    expect((replay.result as CommitResult).outcome).toBe("already_committed");

    const afterRows = await adminClient
      .from("catalog_import_rows")
      .select("row_number, status")
      .eq("batch_id", batchId)
      .order("row_number");
    expect(afterRows.data).toEqual(beforeRows.data);
  });

  it("Reference Cost is visible to the authorized Owner through the real preview/getBatch HTTP path", async () => {
    const owner = await createTestOwner("http-refcost");
    const token = await getAccessToken(owner);
    const authHeader = { authorization: `Bearer ${token}` };

    const previewRes = await callFormDataServerFn(
      server.baseUrl,
      "catalogImportPreview",
      csvFormData("Product Name,Reference Cost\nCost Visible Product,42\n"),
      authHeader,
    );
    const batchId = (previewRes.result as PreviewResult).batchId as string;

    const getBatchRes = await callJsonServerFn(
      server.baseUrl,
      "catalogImportGetBatch",
      { batchId },
      authHeader,
    );
    const batch = getBatchRes.result as GetBatchResult;
    expect(batch.rows[0]?.snapshot.reference_cost).toBe(42);
  });

  it("a real thrown server-side error is sanitized at the actual HTTP response boundary", async () => {
    const owner = await createTestOwner("http-sanitized-error");
    const token = await getAccessToken(owner);

    // A nonexistent batch id on commit reaches the "not_found" branch
    // cleanly (already covered elsewhere); to force a genuine internal
    // error path, supply a syntactically invalid UUID, which the
    // database layer itself will reject as a raw Postgres error if it
    // were ever allowed to leak.
    const res = await callJsonServerFn(
      server.baseUrl,
      "catalogImportCommit",
      { batchId: "not-a-valid-uuid" },
      { authorization: `Bearer ${token}` },
    );
    expect(res.error).toBeTruthy();
    const message = String(res.error?.message ?? "");
    expect(message).not.toMatch(/constraint|SQLSTATE|syntax error|invalid input syntax/i);
    expect(message.length).toBeLessThan(200);
  });

  it("a retry after a partial follow-up failure does not duplicate the product and does not re-invoke an already-complete follow-up", async () => {
    const owner = await createTestOwner("http-retry-skip");
    const token = await getAccessToken(owner);
    const authHeader = { authorization: `Bearer ${token}` };

    // Directly construct the durable state SEC-IMP-5 leaves behind after
    // an interrupted first commit attempt: the product already exists and
    // one required follow-up already reports "complete" in
    // `follow_up_state`. The commit handler's contract is that such an
    // operation is never re-invoked on retry -- verified below by
    // confirming `current_selling_price` (which only a real invocation of
    // record_catalog_selling_price_change would set) stays untouched.
    const { data: batch, error: batchErr } = await adminClient
      .from("catalog_import_batches")
      .insert({
        business_id: owner.businessId,
        initiated_by: owner.userId,
        original_filename: "retry-fixture.csv",
        file_kind: "csv",
        row_count: 1,
        status: "failed",
      })
      .select("id")
      .single();
    if (batchErr || !batch) throw batchErr ?? new Error("insert failed");

    const { data: row, error: rowErr } = await adminClient
      .from("catalog_import_rows")
      .insert({
        business_id: owner.businessId,
        batch_id: batch.id,
        row_number: 1,
        status: "FAILED",
        parsed_snapshot: { name: "Retry Skip Product", selling_price: 999 },
        has_reference_cost_authority: false,
      })
      .select("id, row_idempotency_key")
      .single();
    if (rowErr || !row) throw rowErr ?? new Error("insert failed");

    // Create the product with the row's own idempotency key -- exactly
    // what create_catalog_product would already have done on a first
    // attempt -- WITHOUT ever invoking the selling-price follow-up.
    const { data: createData, error: createErr } = await owner.client.rpc(
      "create_catalog_product",
      {
        p_idempotency_key: row.row_idempotency_key,
        p_name: "Retry Skip Product",
      },
    );
    if (createErr) throw createErr;
    const productId = (createData as { product_id: string }).product_id;

    await adminClient
      .from("catalog_import_rows")
      .update({
        resolved_product_id: productId,
        resolved_by: owner.userId,
        resolved_at: new Date().toISOString(),
        follow_up_state: { selling_price: "complete" },
      })
      .eq("id", row.id);

    const commitRes = await callJsonServerFn(
      server.baseUrl,
      "catalogImportCommit",
      { batchId: batch.id },
      authHeader,
    );
    expect((commitRes.result as CommitResult).outcome).toBe("committed");

    const products = await adminClient
      .from("catalog_products")
      .select("id, current_selling_price")
      .eq("business_id", owner.businessId)
      .eq("name", "Retry Skip Product");
    // Retrying create_catalog_product with the same idempotency key must
    // not create a second product.
    expect(products.data ?? []).toHaveLength(1);
    // The selling-price follow-up, already marked "complete", was never
    // re-invoked -- a real invocation would have set this to 999.
    expect(products.data?.[0]?.current_selling_price).toBeNull();

    const finalRow = await adminClient
      .from("catalog_import_rows")
      .select("status")
      .eq("id", row.id)
      .single();
    expect(finalRow.data?.status).toBe("CREATED");
  });
});
