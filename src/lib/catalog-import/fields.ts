// SB-P-1.11-GC-1 — Recognized column allowlist (EIS §7, §45.8) and CSV
// formula-injection neutralization (EIS §45.11).
import type { RecognizedFieldKey } from "./types";

function normalizeHeader(header: string): string {
  return header.trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
}

/** Header text -> recognized field. Anything not listed here is an
 * unrecognized column: its name is reported, its values are never read. */
const HEADER_ALIASES: Record<string, RecognizedFieldKey> = {
  "product name": "name",
  name: "name",
  "selling unit": "selling_unit",
  unit: "selling_unit",
  category: "category",
  sku: "sku",
  barcode: "barcode",
  description: "description",
  "selling price": "selling_price",
  price: "selling_price",
  "tax treatment": "tax_treatment",
  "product tax rate": "tax_rate_percent",
  "tax rate": "tax_rate_percent",
};

const REFERENCE_COST_HEADERS = new Set(["reference cost", "cost", "reference cost price"]);

export interface MappedHeader {
  original: string;
  field: RecognizedFieldKey | null;
  isReferenceCost: boolean;
}

/** Maps one raw header row to recognized fields. Never mutates values. */
export function mapHeaders(headers: string[]): MappedHeader[] {
  return headers.map((original) => {
    const normalized = normalizeHeader(original);
    if (REFERENCE_COST_HEADERS.has(normalized)) {
      return { original, field: null, isReferenceCost: true };
    }
    const field = HEADER_ALIASES[normalized] ?? null;
    return { original, field, isReferenceCost: false };
  });
}

/**
 * CSV/formula-injection neutralization (EIS §45.11, SEC-3). A cell value
 * beginning with =, +, -, or @ (after leading whitespace) is untrusted
 * text: never evaluated on import (neither parser evaluates formulas), and
 * re-emitted with a neutralizing prefix in any downloadable/viewable
 * correction export so reopening it in a spreadsheet application cannot
 * trigger formula evaluation. The app's own UI rendering of the value is
 * never modified by this function — call it only when producing an export.
 */
const FORMULA_TRIGGER_CHARS = new Set(["=", "+", "-", "@"]);

export function isFormulaInjectionCandidate(value: string): boolean {
  const trimmed = value.replace(/^\s+/, "");
  return trimmed.length > 0 && FORMULA_TRIGGER_CHARS.has(trimmed[0]);
}

export function neutralizeForSpreadsheetExport(value: string): string {
  return isFormulaInjectionCandidate(value) ? `'${value}` : value;
}
