// EIS §9. Per-row field validation, independent of any Supabase client.
import { describe, it, expect } from "vitest";
import { validateRow } from "@/lib/catalog-import/validate";
import type { RawImportRow } from "@/lib/catalog-import/types";

function row(fields: RawImportRow["fields"], overrides: Partial<RawImportRow> = {}): RawImportRow {
  return { rowNumber: 1, fields, hasReferenceCostColumn: false, referenceCostRaw: undefined, ...overrides };
}

describe("validateRow", () => {
  it("marks a row READY when only the required name is present", () => {
    const result = validateRow(row({ name: "Rice 1kg" }), true);
    expect(result.status).toBe("READY");
    expect(result.snapshot.name).toBe("Rice 1kg");
  });

  it("flags a missing product name (MISSING_NAME)", () => {
    const result = validateRow(row({}), true);
    expect(result.status).toBe("NEEDS_CORRECTION");
    expect(result.correctionReason).toBe("MISSING_NAME");
  });

  it("flags a non-positive selling price (INVALID_PRICE)", () => {
    const result = validateRow(row({ name: "Rice", selling_price: "0" }), true);
    expect(result.correctionReason).toBe("INVALID_PRICE");
  });

  it("accepts a valid selling price", () => {
    const result = validateRow(row({ name: "Rice", selling_price: "120.50" }), true);
    expect(result.status).toBe("READY");
    expect(result.snapshot.selling_price).toBe(120.5);
  });

  it("flags a negative reference cost only when authority is granted and present", () => {
    const authorized = validateRow(
      row({ name: "Rice" }, { hasReferenceCostColumn: true, referenceCostRaw: "-5" }),
      true,
    );
    expect(authorized.correctionReason).toBe("INVALID_PRICE");
  });

  it("omits reference cost entirely when the actor lacks authority, never storing the withheld value", () => {
    const result = validateRow(
      row({ name: "Rice" }, { hasReferenceCostColumn: true, referenceCostRaw: "42" }),
      false,
    );
    expect(result.snapshot.reference_cost).toBeUndefined();
  });

  it("requires a rate when tax treatment is product_specific_rate (INVALID_TAX)", () => {
    const result = validateRow(row({ name: "Rice", tax_treatment: "product_specific_rate" }), true);
    expect(result.correctionReason).toBe("INVALID_TAX");
  });

  it("accepts a valid product-specific tax rate", () => {
    const result = validateRow(
      row({ name: "Rice", tax_treatment: "product_specific_rate", tax_rate_percent: "5" }),
      true,
    );
    expect(result.status).toBe("READY");
    expect(result.snapshot.tax_rate_percent).toBe(5);
  });

  it("rejects an out-of-range tax rate", () => {
    const result = validateRow(
      row({ name: "Rice", tax_treatment: "product_specific_rate", tax_rate_percent: "150" }),
      true,
    );
    expect(result.correctionReason).toBe("INVALID_TAX");
  });

  it("rejects a rate supplied alongside a non-specific-rate treatment (ambiguous)", () => {
    const result = validateRow(
      row({ name: "Rice", tax_treatment: "non_taxable", tax_rate_percent: "5" }),
      true,
    );
    expect(result.correctionReason).toBe("INVALID_TAX");
  });
});
