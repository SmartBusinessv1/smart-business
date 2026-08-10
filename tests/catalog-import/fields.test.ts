// EIS §7, §45.8, §45.11.
import { describe, it, expect } from "vitest";
import {
  mapHeaders,
  isFormulaInjectionCandidate,
  neutralizeForSpreadsheetExport,
} from "@/lib/catalog-import/fields";

describe("mapHeaders", () => {
  it("maps recognized header aliases case/spacing-insensitively", () => {
    const mapped = mapHeaders(["product name", "SKU", "Tax Rate", "Reference Cost", "Weird Col"]);
    expect(mapped[0]).toMatchObject({ field: "name" });
    expect(mapped[1]).toMatchObject({ field: "sku" });
    expect(mapped[2]).toMatchObject({ field: "tax_rate_percent" });
    expect(mapped[3]).toMatchObject({ field: null, isReferenceCost: true });
    expect(mapped[4]).toMatchObject({ field: null, isReferenceCost: false });
  });
});

describe("formula-injection neutralization", () => {
  it.each(["=1+1", "+cmd", "-1", "@SUM(A1)"])("flags %s as a formula-injection candidate", (v) => {
    expect(isFormulaInjectionCandidate(v)).toBe(true);
  });

  it.each(["Rice 1kg", "5", "Filter Coffee - 250ml"])("does not flag %s", (v) => {
    expect(isFormulaInjectionCandidate(v)).toBe(false);
  });

  it("prefixes only flagged values for spreadsheet export, leaving others untouched", () => {
    expect(neutralizeForSpreadsheetExport("=1+1")).toBe("'=1+1");
    expect(neutralizeForSpreadsheetExport("Rice 1kg")).toBe("Rice 1kg");
  });
});
