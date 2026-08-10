// SB-P-1.11-GC-1 — Per-row field validation (EIS §9). Pure, synchronous,
// no I/O: duplicate/category resolution (which need a business's existing
// data) happen afterward in classify.ts.
import type {
  CorrectionReason,
  ParsedSnapshot,
  RawImportRow,
  TaxTreatmentField,
  ValidatedRow,
} from "./types";

const TAX_TREATMENTS: readonly TaxTreatmentField[] = [
  "inherit_business_default",
  "product_specific_rate",
  "non_taxable",
];

function normalizeTaxTreatment(raw: string): TaxTreatmentField | null {
  const v = raw
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
  if ((TAX_TREATMENTS as readonly string[]).includes(v)) return v as TaxTreatmentField;
  if (v === "inclusive" || v === "default" || v === "business_default") {
    return "inherit_business_default";
  }
  if (v === "specific" || v === "product_specific" || v === "custom_rate") {
    return "product_specific_rate";
  }
  if (v === "exempt" || v === "not_taxable" || v === "no_tax") return "non_taxable";
  return null;
}

function fail(rowNumber: number, snapshot: ParsedSnapshot, reason: CorrectionReason): ValidatedRow {
  return { rowNumber, snapshot, status: "NEEDS_CORRECTION", correctionReason: reason };
}

/**
 * Validates one raw row's field formats (EIS §9). Does not check
 * product-identity duplicates or category existence -- see classify.ts.
 */
export function validateRow(row: RawImportRow, hasReferenceCostAuthority: boolean): ValidatedRow {
  const name = (row.fields.name ?? "").trim();
  const snapshot: ParsedSnapshot = { name };

  if (row.fields.selling_unit) snapshot.selling_unit = row.fields.selling_unit;
  if (row.fields.category) snapshot.category_label = row.fields.category;
  if (row.fields.sku) snapshot.sku = row.fields.sku;
  if (row.fields.barcode) snapshot.barcode = row.fields.barcode;
  if (row.fields.description) snapshot.description = row.fields.description;

  if (!name) {
    return fail(row.rowNumber, snapshot, "MISSING_NAME");
  }

  // Selling unit: no forced preset match (D-052 allows merchant custom
  // units); only reject values that clearly aren't a unit word at all.
  if (snapshot.selling_unit && snapshot.selling_unit.length > 60) {
    return fail(row.rowNumber, snapshot, "INVALID_UNIT");
  }

  if (row.fields.selling_price) {
    const price = Number(row.fields.selling_price.replace(/,/g, ""));
    if (!Number.isFinite(price) || price <= 0) {
      return fail(row.rowNumber, snapshot, "INVALID_PRICE");
    }
    snapshot.selling_price = price;
  }

  if (row.hasReferenceCostColumn && hasReferenceCostAuthority && row.referenceCostRaw) {
    const cost = Number(row.referenceCostRaw.replace(/,/g, ""));
    if (!Number.isFinite(cost) || cost < 0) {
      return fail(row.rowNumber, snapshot, "INVALID_PRICE");
    }
    snapshot.reference_cost = cost;
  }

  const rawTreatment = row.fields.tax_treatment;
  const rawRate = row.fields.tax_rate_percent;
  if (rawTreatment || rawRate) {
    const treatment = rawTreatment ? normalizeTaxTreatment(rawTreatment) : "product_specific_rate";
    if (!treatment) {
      return fail(row.rowNumber, snapshot, "INVALID_TAX");
    }
    if (treatment === "product_specific_rate") {
      if (!rawRate) return fail(row.rowNumber, snapshot, "INVALID_TAX");
      const rate = Number(rawRate.replace(/%/g, "").trim());
      if (!Number.isFinite(rate) || rate < 0 || rate > 100) {
        return fail(row.rowNumber, snapshot, "INVALID_TAX");
      }
      snapshot.tax_rate_percent = rate;
    } else if (rawRate) {
      // A rate was supplied alongside a non-specific-rate treatment --
      // ambiguous merchant intent, needs interactive correction.
      return fail(row.rowNumber, snapshot, "INVALID_TAX");
    }
    snapshot.tax_treatment = treatment;
  }

  return { rowNumber: row.rowNumber, snapshot, status: "READY", correctionReason: null };
}
