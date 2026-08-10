// SB-P-1.11-GC-1 — Bulk Catalog import: shared pure-logic types.
// Framework-independent (no TanStack Start dependency) per EIS §45.15/§37.

export type ImportFileKind = "csv" | "xlsx";

export type RowStatus =
  "READY" | "NEEDS_CORRECTION" | "POSSIBLE_MATCH" | "SKIPPED" | "CREATED" | "FAILED";

export type CorrectionReason =
  | "MISSING_NAME"
  | "DUPLICATE_NAME"
  | "DUPLICATE_SKU"
  | "DUPLICATE_BARCODE"
  | "INVALID_UNIT"
  | "INVALID_CATEGORY"
  | "INVALID_PRICE"
  | "INVALID_TAX";

export type TaxTreatmentField =
  "inherit_business_default" | "product_specific_rate" | "non_taxable";

/** EIS §7 recognized logical fields + §45.8 allowlist. Reference cost is
 * gated separately (§45.7) and only ever present when authorized. */
export interface ParsedSnapshot {
  name: string;
  selling_unit?: string;
  category_label?: string;
  sku?: string;
  barcode?: string;
  description?: string;
  selling_price?: number;
  tax_treatment?: TaxTreatmentField;
  tax_rate_percent?: number;
  reference_cost?: number;
}

/** One raw source row, after column-name mapping to recognized fields only
 * (EIS §45.8) — unrecognized column values are never carried past this
 * stage, only their names (as a batch-level informational note). */
export interface RawImportRow {
  rowNumber: number;
  fields: Partial<Record<RecognizedFieldKey, string>>;
  hasReferenceCostColumn: boolean;
  referenceCostRaw: string | undefined;
}

export type RecognizedFieldKey =
  | "name"
  | "selling_unit"
  | "category"
  | "sku"
  | "barcode"
  | "description"
  | "selling_price"
  | "tax_treatment"
  | "tax_rate_percent";

export interface ParseOutcome {
  rows: RawImportRow[];
  unrecognizedColumnNames: string[];
}

/** Row-validation result before duplicate detection is applied (EIS §9). */
export interface ValidatedRow {
  rowNumber: number;
  snapshot: ParsedSnapshot;
  status: "READY" | "NEEDS_CORRECTION" | "SKIPPED";
  correctionReason: CorrectionReason | null;
}

/** Final per-row classification after duplicate detection (EIS §45.4),
 * ready to persist as a catalog_import_rows record. */
export interface ClassifiedRow {
  rowNumber: number;
  snapshot: ParsedSnapshot;
  status: "READY" | "NEEDS_CORRECTION" | "POSSIBLE_MATCH" | "SKIPPED";
  correctionReason: CorrectionReason | null;
  matchedProductId: string | null;
}

/** Minimal shape of what classify.ts needs from catalog_products_search —
 * kept narrow so the pure module never depends on the Supabase client. */
export interface IdentitySearchFn {
  (query: string): Promise<{ id: string | null; name: string | null; match_rank: number | null }[]>;
}
