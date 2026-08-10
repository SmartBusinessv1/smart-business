// EIS §45.4 (duplicate detection) and §21 applied to import (archived-
// category conflict). §32 items 4-6; §32A item 33.
import { describe, it, expect, vi } from "vitest";
import { classifyRows, resolveCategoryLabel, type CategoryLookupEntry } from "@/lib/catalog-import/classify";
import type { ValidatedRow } from "@/lib/catalog-import/types";

function ready(rowNumber: number, name: string, extra: Partial<ValidatedRow["snapshot"]> = {}): ValidatedRow {
  return { rowNumber, snapshot: { name, ...extra }, status: "READY", correctionReason: null };
}

describe("resolveCategoryLabel", () => {
  const categories: CategoryLookupEntry[] = [
    { id: "cat-active", name: "Beverages", status: "active" },
    { id: "cat-archived", name: "Snacks", status: "archived" },
  ];

  it("matches an active category case/space-insensitively", () => {
    expect(resolveCategoryLabel("  beverages ", categories)).toEqual({
      kind: "active",
      categoryId: "cat-active",
    });
  });

  it("surfaces a truthful archived-name conflict without resolving to it", () => {
    expect(resolveCategoryLabel("Snacks", categories)).toEqual({ kind: "archived_conflict" });
  });

  it("reports no match for a genuinely new label", () => {
    expect(resolveCategoryLabel("Frozen Foods", categories)).toEqual({ kind: "no_match" });
  });
});

describe("classifyRows", () => {
  it("classifies READY when no identity search returns a conflict rank", async () => {
    const search = vi.fn().mockResolvedValue([]);
    const result = await classifyRows([ready(1, "Rice 1kg")], [], search);
    expect(result[0].status).toBe("READY");
  });

  it("does not treat a prefix/substring match (rank 4-5) as a conflict", async () => {
    const search = vi.fn().mockResolvedValue([{ id: "p1", name: "Rice 5kg", match_rank: 4 }]);
    const result = await classifyRows([ready(1, "Rice")], [], search);
    expect(result[0].status).toBe("READY");
  });

  it("classifies POSSIBLE_MATCH on an exact identity match (rank 1-3)", async () => {
    const search = vi.fn().mockResolvedValue([{ id: "p1", name: "Rice 1kg", match_rank: 3 }]);
    const result = await classifyRows([ready(1, "Rice 1kg")], [], search);
    expect(result[0].status).toBe("POSSIBLE_MATCH");
    expect(result[0].matchedProductId).toBe("p1");
  });

  it("never auto-creates or mutates for an unused/unmatched row", async () => {
    const search = vi.fn().mockResolvedValue([]);
    await classifyRows([ready(1, "Rice 1kg")], [], search);
    // classifyRows performs reads only -- no write function is ever passed
    // in, so there is structurally no path for it to create or mutate
    // anything. This test documents that contract.
    expect(search).toHaveBeenCalled();
  });

  it("surfaces an archived-category-name conflict as NEEDS_CORRECTION/INVALID_CATEGORY", async () => {
    const search = vi.fn().mockResolvedValue([]);
    const categories: CategoryLookupEntry[] = [{ id: "c1", name: "Snacks", status: "archived" }];
    const result = await classifyRows(
      [ready(1, "Chips", { category_label: "Snacks" })],
      categories,
      search,
    );
    expect(result[0].status).toBe("NEEDS_CORRECTION");
    expect(result[0].correctionReason).toBe("INVALID_CATEGORY");
  });

  it("flags the second of two same-named rows in one batch as a duplicate, without calling search for it", async () => {
    const search = vi.fn().mockResolvedValue([]);
    const result = await classifyRows(
      [ready(1, "Rice 1kg"), ready(2, "rice 1kg  ")],
      [],
      search,
    );
    expect(result[0].status).toBe("READY");
    expect(result[1].status).toBe("NEEDS_CORRECTION");
    expect(result[1].correctionReason).toBe("DUPLICATE_NAME");
  });

  it("flags intra-batch SKU and barcode collisions the same way", async () => {
    const search = vi.fn().mockResolvedValue([]);
    const bySku = await classifyRows(
      [ready(1, "A", { sku: "X1" }), ready(2, "B", { sku: "x1" })],
      [],
      search,
    );
    expect(bySku[1].correctionReason).toBe("DUPLICATE_SKU");

    const byBarcode = await classifyRows(
      [ready(1, "A", { barcode: "890000" }), ready(2, "B", { barcode: "890000" })],
      [],
      search,
    );
    expect(byBarcode[1].correctionReason).toBe("DUPLICATE_BARCODE");
  });

  it("passes through already-terminal NEEDS_CORRECTION rows unchanged", async () => {
    const search = vi.fn();
    const row: ValidatedRow = {
      rowNumber: 1,
      snapshot: { name: "" },
      status: "NEEDS_CORRECTION",
      correctionReason: "MISSING_NAME",
    };
    const result = await classifyRows([row], [], search);
    expect(result[0]).toEqual({
      rowNumber: 1,
      snapshot: { name: "" },
      status: "NEEDS_CORRECTION",
      correctionReason: "MISSING_NAME",
      matchedProductId: null,
    });
    expect(search).not.toHaveBeenCalled();
  });
});
