// SB-P-1.11-GC-1 — Duplicate detection and category resolution (EIS §45.4,
// §21 applied to the import path). Takes pre-fetched category data and an
// injected identity-search function so this module stays framework/DB
// independent (EIS §45.15) -- the server function supplies both, backed by
// the caller-JWT-scoped client exactly as an interactive browser call
// would use.
import type { ClassifiedRow, IdentitySearchFn, ValidatedRow } from "./types";

export interface CategoryLookupEntry {
  id: string;
  name: string;
  status: "active" | "archived";
}

function normalizeLoose(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export type CategoryResolution =
  { kind: "active"; categoryId: string } | { kind: "archived_conflict" } | { kind: "no_match" };

/** Mirrors the truthful archived-name-conflict rule locked in EIS §21: an
 * archived same-name category is never silently reused or reactivated. */
export function resolveCategoryLabel(
  label: string,
  categories: readonly CategoryLookupEntry[],
): CategoryResolution {
  const norm = normalizeLoose(label);
  const active = categories.find((c) => c.status === "active" && normalizeLoose(c.name) === norm);
  if (active) return { kind: "active", categoryId: active.id };
  const archived = categories.find(
    (c) => c.status === "archived" && normalizeLoose(c.name) === norm,
  );
  if (archived) return { kind: "archived_conflict" };
  return { kind: "no_match" };
}

function terminal(v: ValidatedRow): ClassifiedRow {
  return {
    rowNumber: v.rowNumber,
    snapshot: v.snapshot,
    status: v.status === "READY" ? "READY" : "NEEDS_CORRECTION",
    correctionReason: v.correctionReason,
    matchedProductId: null,
  };
}

/**
 * Classifies already-field-validated rows against existing Catalog
 * identity (POSSIBLE_MATCH, §45.4/§10) and, defensively, against
 * identities already claimed earlier in the same batch -- two rows in one
 * file silently racing to create the same product would otherwise only
 * surface as a confusing FAILED outcome for the second row at commit time.
 */
export async function classifyRows(
  validated: readonly ValidatedRow[],
  categories: readonly CategoryLookupEntry[],
  searchIdentity: IdentitySearchFn,
): Promise<ClassifiedRow[]> {
  const results: ClassifiedRow[] = [];
  const seenNames = new Set<string>();
  const seenSkus = new Set<string>();
  const seenBarcodes = new Set<string>();

  for (const v of validated) {
    if (v.status !== "READY") {
      results.push(terminal(v));
      continue;
    }

    if (v.snapshot.category_label) {
      const resolution = resolveCategoryLabel(v.snapshot.category_label, categories);
      if (resolution.kind === "archived_conflict") {
        results.push({
          rowNumber: v.rowNumber,
          snapshot: v.snapshot,
          status: "NEEDS_CORRECTION",
          correctionReason: "INVALID_CATEGORY",
          matchedProductId: null,
        });
        continue;
      }
    }

    const normName = normalizeLoose(v.snapshot.name);
    const normSku = v.snapshot.sku ? normalizeLoose(v.snapshot.sku) : null;
    const normBarcode = v.snapshot.barcode ? normalizeLoose(v.snapshot.barcode) : null;

    if (seenNames.has(normName)) {
      results.push({
        rowNumber: v.rowNumber,
        snapshot: v.snapshot,
        status: "NEEDS_CORRECTION",
        correctionReason: "DUPLICATE_NAME",
        matchedProductId: null,
      });
      continue;
    }
    if (normSku && seenSkus.has(normSku)) {
      results.push({
        rowNumber: v.rowNumber,
        snapshot: v.snapshot,
        status: "NEEDS_CORRECTION",
        correctionReason: "DUPLICATE_SKU",
        matchedProductId: null,
      });
      continue;
    }
    if (normBarcode && seenBarcodes.has(normBarcode)) {
      results.push({
        rowNumber: v.rowNumber,
        snapshot: v.snapshot,
        status: "NEEDS_CORRECTION",
        correctionReason: "DUPLICATE_BARCODE",
        matchedProductId: null,
      });
      continue;
    }

    const identityQueries = [v.snapshot.name, v.snapshot.sku, v.snapshot.barcode].filter(
      (x): x is string => !!x,
    );
    let matchedProductId: string | null = null;
    for (const q of identityQueries) {
      const hits = await searchIdentity(q);
      const hit = hits.find((r) => r.match_rank !== null && r.match_rank >= 1 && r.match_rank <= 3);
      if (hit) {
        matchedProductId = hit.id;
        break;
      }
    }
    if (matchedProductId) {
      results.push({
        rowNumber: v.rowNumber,
        snapshot: v.snapshot,
        status: "POSSIBLE_MATCH",
        correctionReason: null,
        matchedProductId,
      });
      continue;
    }

    seenNames.add(normName);
    if (normSku) seenSkus.add(normSku);
    if (normBarcode) seenBarcodes.add(normBarcode);

    results.push({
      rowNumber: v.rowNumber,
      snapshot: v.snapshot,
      status: "READY",
      correctionReason: null,
      matchedProductId: null,
    });
  }

  return results;
}
