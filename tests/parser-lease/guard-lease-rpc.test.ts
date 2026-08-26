// SB-P-1.11-GC-38R -- regression verification for the forward corrective
// migration 20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql
// (instruction1.171.md §2.6 / report1.169.md's PostgreSQL 42702 finding).
//
// These tests exercise acquire_parser_preview_guard and
// issue_parser_upload_lease directly against the dedicated test project's
// real schema (mirrors tests/catalog-import/support-schema-rls.test.ts),
// not the server-function layer. They will fail with PostgreSQL error
// 42702 against the historical (unfixed) schema and are expected to pass
// only once the corrective migration above has been applied to the
// target project.
import { describe, it, expect } from "vitest";
import { adminClient, createTestOwner } from "../setup/test-clients";

describe("acquire_parser_preview_guard -- 42702 regression", () => {
  it("first acquisition for an eligible business succeeds and never raises 42702", async () => {
    const owner = await createTestOwner("guard-first-acquire");

    const { data, error } = await adminClient.rpc("acquire_parser_preview_guard", {
      p_business_id: owner.businessId,
    });

    expect(error?.code).not.toBe("42702");
    expect(error).toBeNull();
    expect(data).toHaveLength(1);
    expect(data![0].business_id).toBe(owner.businessId);
    expect(data![0].guard_token).toBeTruthy();
  });

  it("a currently-held guard does not allow an unauthorized duplicate acquisition", async () => {
    const owner = await createTestOwner("guard-duplicate-blocked");

    const first = await adminClient.rpc("acquire_parser_preview_guard", {
      p_business_id: owner.businessId,
    });
    expect(first.error).toBeNull();
    expect(first.data).toHaveLength(1);
    const firstToken = first.data![0].guard_token as string;

    // The first guard has not expired yet -- a second acquisition attempt
    // for the same business must return no row (guard already held), and
    // must never mint a new, different guard_token.
    const second = await adminClient.rpc("acquire_parser_preview_guard", {
      p_business_id: owner.businessId,
    });
    expect(second.error).toBeNull();
    expect(second.data).toHaveLength(0);

    const { data: row, error: rowErr } = await adminClient
      .from("parser_preview_guards")
      .select("guard_token")
      .eq("business_id", owner.businessId)
      .single();
    expect(rowErr).toBeNull();
    expect(row!.guard_token).toBe(firstToken);
  });

  it("release_parser_preview_guard (called with the lease bound to it, matching the app's only real call pattern) makes the guard immediately re-acquirable", async () => {
    const owner = await createTestOwner("guard-release-reacquire");

    const acquired = await adminClient.rpc("acquire_parser_preview_guard", {
      p_business_id: owner.businessId,
    });
    expect(acquired.error).toBeNull();
    const guardToken = acquired.data![0].guard_token as string;

    // release_parser_preview_guard is only ever called by the app after a
    // lease has been issued and bound to the guard (parser-lease.ts's
    // releaseGuard helper); its WHERE clause requires an exact
    // lease_id = p_lease_id match, which a NULL/NULL comparison can never
    // satisfy, so a lease must be issued first for this call to succeed.
    const issued = await adminClient.rpc("issue_parser_upload_lease", {
      p_business_id: owner.businessId,
      p_guard_token: guardToken,
      p_object_key: `parser-ingress/${crypto.randomUUID()}`,
      p_expected_byte_length: 1,
      p_expected_sha256_b64: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
      p_file_kind: "csv",
      p_created_by: owner.userId,
    });
    expect(issued.error).toBeNull();
    const leaseId = issued.data![0].lease_id as string;

    const released = await adminClient.rpc("release_parser_preview_guard", {
      p_business_id: owner.businessId,
      p_guard_token: guardToken,
      p_lease_id: leaseId,
    });
    expect(released.error).toBeNull();
    expect(released.data).toBe(true);

    const reacquired = await adminClient.rpc("acquire_parser_preview_guard", {
      p_business_id: owner.businessId,
    });
    expect(reacquired.error).toBeNull();
    expect(reacquired.data).toHaveLength(1);
    expect(reacquired.data![0].guard_token).not.toBe(guardToken);
  });
});

describe("issue_parser_upload_lease -- 42702 regression", () => {
  it("issues a lease against a freshly acquired guard and never raises 42702", async () => {
    const owner = await createTestOwner("lease-first-issue");

    const guard = await adminClient.rpc("acquire_parser_preview_guard", {
      p_business_id: owner.businessId,
    });
    expect(guard.error).toBeNull();
    const guardToken = guard.data![0].guard_token as string;

    const { data, error } = await adminClient.rpc("issue_parser_upload_lease", {
      p_business_id: owner.businessId,
      p_guard_token: guardToken,
      p_object_key: `parser-ingress/${crypto.randomUUID()}`,
      p_expected_byte_length: 42,
      p_expected_sha256_b64: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
      p_file_kind: "csv",
      p_created_by: owner.userId,
    });

    expect(error?.code).not.toBe("42702");
    expect(error).toBeNull();
    expect(data).toHaveLength(1);
    expect(data![0].lease_id).toBeTruthy();
    expect(new Date(data![0].expires_at).getTime()).toBeGreaterThan(Date.now());
  });

  it("does not introduce any Catalog/Inventory Product Truth data as a side effect", async () => {
    const owner = await createTestOwner("lease-no-product-truth");

    const guard = await adminClient.rpc("acquire_parser_preview_guard", {
      p_business_id: owner.businessId,
    });
    expect(guard.error).toBeNull();

    await adminClient.rpc("issue_parser_upload_lease", {
      p_business_id: owner.businessId,
      p_guard_token: guard.data![0].guard_token,
      p_object_key: `parser-ingress/${crypto.randomUUID()}`,
      p_expected_byte_length: 1,
      p_expected_sha256_b64: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
      p_file_kind: "csv",
      p_created_by: owner.userId,
    });

    const products = await adminClient
      .from("catalog_products")
      .select("id")
      .eq("business_id", owner.businessId);
    expect(products.data).toHaveLength(0);
  });
});
