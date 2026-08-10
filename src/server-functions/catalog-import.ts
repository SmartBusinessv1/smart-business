// SB-P-1.11-GC-1 — Bulk Catalog import server orchestration (EIS Part K
// §45.1). First real use of createServerFn/requireSupabaseAuth in this
// codebase (both existed only as unused scaffolding before this mission).
//
// Two Supabase clients are used, deliberately never interchanged:
//   - `supabase` (from requireSupabaseAuth's context): the caller's own
//     JWT, `authenticated`-role, RLS-enforced. Used for EVERY Catalog read
//     and write (duplicate search, category list/create, product create,
//     price/tax/cost follow-ups) -- exactly the boundary a browser call
//     would hit.
//   - `supabaseAdmin` (dynamic-imported inside each handler body per the
//     existing client.server.ts bundling-safety convention): service-role,
//     used ONLY for INSERT/UPDATE on catalog_import_batches and
//     catalog_import_rows (EIS §45.1.1). Never used for Catalog Product
//     Truth, never used to call a Catalog command, never given
//     client-influenced table/column selection.
import { createServerFn } from "@tanstack/react-start";
import type { SupabaseClient } from "@supabase/supabase-js";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database, Json } from "@/integrations/supabase/types";
import { parseCsv, parseXlsx } from "@/lib/catalog-import/parse";
import { validateRow } from "@/lib/catalog-import/validate";
import {
  classifyRows,
  resolveCategoryLabel,
  type CategoryLookupEntry,
} from "@/lib/catalog-import/classify";
import { deriveFollowUpIdempotencyKey } from "@/lib/catalog-import/idempotency";
import { ImportLimitError, IMPORT_LIMITS } from "@/lib/catalog-import/limits";
import type { CorrectionReason, ParsedSnapshot } from "@/lib/catalog-import/types";

type AuthedClient = SupabaseClient<Database>;
type CommandResult = Database["public"]["CompositeTypes"]["catalog_command_result"];

// ---------------------------------------------------------------------------
// Shared helpers (caller-JWT client only -- no privileged access here).
// ---------------------------------------------------------------------------

/** Re-derives the caller's own business and Owner status from the
 * authoritative businesses.owner_id relation -- never trusted from client
 * input. A non-owner (Manager/Employee) actor has no matching row and is
 * denied by construction (EIS §14): no permission infrastructure exists
 * yet for either role to hold this authority. */
async function loadOwnedBusinessId(supabase: AuthedClient, userId: string): Promise<string | null> {
  const { data, error } = await supabase
    .from("businesses")
    .select("id")
    .eq("owner_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data?.id ?? null;
}

/** D-016: Owner always holds Reference Cost authority. Manager import is
 * denied entirely in Build Now (EIS §14), so this is a genuine,
 * independent per-actor evaluation tied to the Owner check just performed
 * -- not a hardcoded constant. It will correctly begin returning false for
 * a future Manager actor once real permission infrastructure exists. */
function deriveReferenceCostAuthority(isVerifiedOwner: boolean): boolean {
  return isVerifiedOwner;
}

async function loadCategories(supabase: AuthedClient): Promise<CategoryLookupEntry[]> {
  const { data, error } = await supabase.from("catalog_categories").select("id, name, status");
  if (error) throw error;
  return (data ?? []).map((c) => ({ id: c.id, name: c.name, status: c.status }));
}

async function searchIdentity(supabase: AuthedClient, query: string) {
  const { data, error } = await supabase.rpc("catalog_products_search", {
    p_query: query,
    p_include_archived: true,
    p_limit: 1,
  });
  if (error) throw error;
  return (data ?? []).map((r) => ({ id: r.id, name: r.name, match_rank: r.match_rank }));
}

const CONTROL_CHAR_PATTERN = new RegExp(
  `[${String.fromCharCode(0)}-${String.fromCharCode(31)}]`,
  "g",
);

function sanitizeFilename(name: string): string {
  const stripped = name.replace(/[/\\]/g, "_").replace(CONTROL_CHAR_PATTERN, "").trim();
  return (stripped || "upload").slice(0, 255);
}

function mapRejectionToReason(reason: string | null | undefined): CorrectionReason | null {
  if (reason === "UNIQUENESS_CONFLICT") return "DUPLICATE_NAME";
  return null;
}

// ---------------------------------------------------------------------------
// catalogImportPreview — Stage 1/2/3: parse, validate, classify, persist
// bookkeeping. No Catalog Product Truth mutation.
// ---------------------------------------------------------------------------

export type CatalogImportPreviewResult =
  | { outcome: "rejected"; reason: string; message: string }
  | {
      outcome: "previewed";
      batchId: string;
      totalRows: number;
      ready: number;
      needsCorrection: number;
      possibleMatch: number;
      skipped: number;
      unrecognizedColumnNames: string[];
      additionalWorksheetsIgnored: boolean;
    };

export const catalogImportPreview = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: FormData) => data)
  .handler(async ({ data, context }): Promise<CatalogImportPreviewResult> => {
    const { supabase, userId } = context;
    const businessId = await loadOwnedBusinessId(supabase, userId);
    if (!businessId) {
      return {
        outcome: "rejected",
        reason: "PERMISSION_DENIED",
        message: "Set up your business before importing products.",
      };
    }
    const hasReferenceCostAuthority = deriveReferenceCostAuthority(true);

    const file = data.get("file");
    if (!(file instanceof File)) {
      return {
        outcome: "rejected",
        reason: "UNSUPPORTED_FILE_TYPE",
        message: "No file was uploaded.",
      };
    }
    if (file.size > IMPORT_LIMITS.maxCompressedBytes) {
      return { outcome: "rejected", reason: "FILE_TOO_LARGE", message: "This file is too large." };
    }
    const lowerName = file.name.toLowerCase();
    const fileKind: "csv" | "xlsx" | null = lowerName.endsWith(".csv")
      ? "csv"
      : lowerName.endsWith(".xlsx")
        ? "xlsx"
        : null;
    if (!fileKind) {
      return {
        outcome: "rejected",
        reason: "UNSUPPORTED_FILE_TYPE",
        message: "Only .csv and .xlsx files are supported.",
      };
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    let parseOutcome: Awaited<ReturnType<typeof parseCsv>> & {
      additionalWorksheetsIgnored?: boolean;
    };
    try {
      parseOutcome = fileKind === "csv" ? await parseCsv(buffer) : await parseXlsx(buffer);
    } catch (err) {
      if (err instanceof ImportLimitError) {
        return { outcome: "rejected", reason: err.code, message: err.message };
      }
      throw err;
    }

    const validated = parseOutcome.rows.map((r) => validateRow(r, hasReferenceCostAuthority));
    const categories = await loadCategories(supabase);
    const classified = await classifyRows(validated, categories, (q) =>
      searchIdentity(supabase, q),
    );

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: batch, error: batchErr } = await supabaseAdmin
      .from("catalog_import_batches")
      .insert({
        business_id: businessId,
        initiated_by: userId,
        original_filename: sanitizeFilename(file.name),
        file_kind: fileKind,
        row_count: classified.length,
      })
      .select("id")
      .single();
    if (batchErr || !batch) throw batchErr ?? new Error("Failed to create import batch.");

    if (classified.length > 0) {
      const { error: rowsErr } = await supabaseAdmin.from("catalog_import_rows").insert(
        classified.map((r) => ({
          batch_id: batch.id,
          business_id: businessId,
          row_number: r.rowNumber,
          status: r.status,
          parsed_snapshot: r.snapshot as unknown as Json,
          has_reference_cost_authority: hasReferenceCostAuthority,
          correction_reason: r.correctionReason,
          matched_product_id: r.matchedProductId,
        })),
      );
      if (rowsErr) throw rowsErr;
    }

    const counts = { READY: 0, NEEDS_CORRECTION: 0, POSSIBLE_MATCH: 0, SKIPPED: 0 };
    for (const r of classified) counts[r.status as keyof typeof counts]++;

    return {
      outcome: "previewed",
      batchId: batch.id as string,
      totalRows: classified.length,
      ready: counts.READY,
      needsCorrection: counts.NEEDS_CORRECTION,
      possibleMatch: counts.POSSIBLE_MATCH,
      skipped: counts.SKIPPED,
      unrecognizedColumnNames: parseOutcome.unrecognizedColumnNames,
      additionalWorksheetsIgnored: parseOutcome.additionalWorksheetsIgnored ?? false,
    };
  });

// ---------------------------------------------------------------------------
// catalogImportCommit — Stage 4: atomic claim, then governed per-row
// Catalog mutation through the caller-JWT client only.
// ---------------------------------------------------------------------------

export type CatalogImportCommitResult =
  | { outcome: "not_found" }
  | { outcome: "in_progress" }
  | { outcome: "already_committed" }
  | {
      outcome: "committed" | "failed";
      created: number;
      failed: number;
      skipped: number;
      possibleMatch: number;
      needsCorrection: number;
      warnings: { rowNumber: number; message: string }[];
    };

async function resolveOrCreateCategory(
  supabase: AuthedClient,
  label: string | undefined,
  categories: CategoryLookupEntry[],
  cache: Map<string, string>,
): Promise<{ categoryId: string | null; archivedConflict: boolean }> {
  if (!label) return { categoryId: null, archivedConflict: false };
  const resolution = resolveCategoryLabel(label, categories);
  if (resolution.kind === "active")
    return { categoryId: resolution.categoryId, archivedConflict: false };
  if (resolution.kind === "archived_conflict") return { categoryId: null, archivedConflict: true };

  const norm = label.trim().toLowerCase();
  const cached = cache.get(norm);
  if (cached) return { categoryId: cached, archivedConflict: false };

  const { data, error } = await supabase.rpc("create_catalog_category", {
    p_idempotency_key: crypto.randomUUID(),
    p_name: label.trim(),
  });
  if (error) throw error;
  const result = data as CommandResult;
  if (result.outcome !== "completed" || !result.category_id) {
    throw new Error(
      `Category creation failed for "${label}": ${result.rejection_reason ?? "unknown"}`,
    );
  }
  cache.set(norm, result.category_id);
  categories.push({ id: result.category_id, name: label.trim(), status: "active" });
  return { categoryId: result.category_id, archivedConflict: false };
}

async function summarizeBatch(
  supabaseAdmin: AuthedClient,
  businessId: string,
  batchId: string,
): Promise<{
  created: number;
  failed: number;
  skipped: number;
  possibleMatch: number;
  needsCorrection: number;
}> {
  const { data, error } = await supabaseAdmin
    .from("catalog_import_rows")
    .select("status")
    .eq("business_id", businessId)
    .eq("batch_id", batchId);
  if (error) throw error;
  const counts = { created: 0, failed: 0, skipped: 0, possibleMatch: 0, needsCorrection: 0 };
  for (const r of data ?? []) {
    if (r.status === "CREATED") counts.created++;
    else if (r.status === "FAILED") counts.failed++;
    else if (r.status === "SKIPPED") counts.skipped++;
    else if (r.status === "POSSIBLE_MATCH") counts.possibleMatch++;
    else if (r.status === "NEEDS_CORRECTION") counts.needsCorrection++;
  }
  return counts;
}

export const catalogImportCommit = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: { batchId: string; skipRowNumbers?: number[] }) => data)
  .handler(async ({ data, context }): Promise<CatalogImportCommitResult> => {
    const { supabase, userId } = context;
    const businessId = await loadOwnedBusinessId(supabase, userId);
    if (!businessId) return { outcome: "not_found" };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    if (data.skipRowNumbers && data.skipRowNumbers.length > 0) {
      await supabaseAdmin
        .from("catalog_import_rows")
        .update({ status: "SKIPPED" })
        .eq("business_id", businessId)
        .eq("batch_id", data.batchId)
        .in("row_number", data.skipRowNumbers)
        .in("status", ["POSSIBLE_MATCH", "NEEDS_CORRECTION"]);
    }

    // Atomic compare-and-set claim (EIS §45.5.5 step 2) -- the entire
    // concurrency primitive. Exactly one concurrent request can transition
    // a batch to 'committing'.
    const { data: claimed, error: claimErr } = await supabaseAdmin
      .from("catalog_import_batches")
      .update({ status: "committing" })
      .eq("id", data.batchId)
      .eq("business_id", businessId)
      .in("status", ["previewed", "failed"])
      .select("id")
      .maybeSingle();
    if (claimErr) throw claimErr;

    if (!claimed) {
      const { data: existing } = await supabaseAdmin
        .from("catalog_import_batches")
        .select("status")
        .eq("id", data.batchId)
        .eq("business_id", businessId)
        .maybeSingle();
      if (!existing) return { outcome: "not_found" };
      if (existing.status === "committed") return { outcome: "already_committed" };
      return { outcome: "in_progress" };
    }

    const categories = await loadCategories(supabase);
    const categoryCache = new Map<string, string>();

    const { data: candidateRows, error: rowsErr } = await supabaseAdmin
      .from("catalog_import_rows")
      .select("*")
      .eq("business_id", businessId)
      .eq("batch_id", data.batchId)
      .in("status", ["READY", "FAILED"])
      .order("row_number", { ascending: true });
    if (rowsErr) throw rowsErr;

    const warnings: { rowNumber: number; message: string }[] = [];

    for (const row of candidateRows ?? []) {
      const snapshot = row.parsed_snapshot as unknown as ParsedSnapshot;
      try {
        const { categoryId, archivedConflict } = await resolveOrCreateCategory(
          supabase,
          snapshot.category_label,
          categories,
          categoryCache,
        );
        if (archivedConflict) {
          await supabaseAdmin
            .from("catalog_import_rows")
            .update({ status: "NEEDS_CORRECTION", correction_reason: "INVALID_CATEGORY" })
            .eq("id", row.id);
          continue;
        }

        const createArgs: Database["public"]["Functions"]["create_catalog_product"]["Args"] = {
          p_idempotency_key: row.row_idempotency_key,
          p_name: snapshot.name,
        };
        if (snapshot.description) createArgs.p_description = snapshot.description;
        if (categoryId) createArgs.p_category_id = categoryId;
        if (snapshot.sku) createArgs.p_sku = snapshot.sku;
        if (snapshot.barcode) createArgs.p_barcode = snapshot.barcode;
        if (snapshot.selling_unit) createArgs.p_selling_unit = snapshot.selling_unit;

        const { data: createData, error: createErr } = await supabase.rpc(
          "create_catalog_product",
          createArgs,
        );
        if (createErr) throw createErr;
        const result = createData as CommandResult;

        if (result.outcome !== "completed" || !result.product_id) {
          await supabaseAdmin
            .from("catalog_import_rows")
            .update({
              status: "FAILED",
              correction_reason: mapRejectionToReason(result.rejection_reason),
            })
            .eq("id", row.id);
          continue;
        }

        const productId = result.product_id;

        // Core identity created -- this row is CREATED regardless of any
        // follow-up commercial-field outcome below (EIS §45.5.2:
        // resolved_product_id is defined by product-creation success).
        await supabaseAdmin
          .from("catalog_import_rows")
          .update({
            status: "CREATED",
            resolved_product_id: productId,
            resolved_by: userId,
            resolved_at: new Date().toISOString(),
          })
          .eq("id", row.id);

        if (snapshot.selling_price !== undefined) {
          const key = deriveFollowUpIdempotencyKey(row.row_idempotency_key, "selling_price");
          const { error } = await supabase.rpc("record_catalog_selling_price_change", {
            p_idempotency_key: key,
            p_product_id: productId,
            p_new_price: snapshot.selling_price,
          });
          if (error) {
            warnings.push({
              rowNumber: row.row_number,
              message: "Selling price couldn't be saved.",
            });
          }
        }
        if (snapshot.tax_treatment) {
          const key = deriveFollowUpIdempotencyKey(row.row_idempotency_key, "tax");
          const taxArgs: Database["public"]["Functions"]["record_catalog_tax_change"]["Args"] = {
            p_idempotency_key: key,
            p_product_id: productId,
            p_treatment: snapshot.tax_treatment,
          };
          if (
            snapshot.tax_treatment === "product_specific_rate" &&
            snapshot.tax_rate_percent !== undefined
          ) {
            taxArgs.p_rate_percent = snapshot.tax_rate_percent;
          }
          const { error } = await supabase.rpc("record_catalog_tax_change", taxArgs);
          if (error) {
            warnings.push({ rowNumber: row.row_number, message: "Tax setting couldn't be saved." });
          }
        }
        if (snapshot.reference_cost !== undefined && row.has_reference_cost_authority) {
          const key = deriveFollowUpIdempotencyKey(row.row_idempotency_key, "reference_cost");
          const { error } = await supabase.rpc("record_catalog_reference_cost_change", {
            p_idempotency_key: key,
            p_product_id: productId,
            p_new_cost: snapshot.reference_cost,
          });
          if (error) {
            warnings.push({
              rowNumber: row.row_number,
              message: "Reference cost couldn't be saved.",
            });
          }
        }
      } catch (err) {
        console.error(`[catalog-import] row ${row.row_number} failed:`, err);
        await supabaseAdmin
          .from("catalog_import_rows")
          .update({ status: "FAILED" })
          .eq("id", row.id);
      }
    }

    const { count: stillFailed } = await supabaseAdmin
      .from("catalog_import_rows")
      .select("id", { count: "exact", head: true })
      .eq("business_id", businessId)
      .eq("batch_id", data.batchId)
      .eq("status", "FAILED");

    const finalStatus: "committed" | "failed" = (stillFailed ?? 0) > 0 ? "failed" : "committed";
    await supabaseAdmin
      .from("catalog_import_batches")
      .update({
        status: finalStatus,
        committed_at: finalStatus === "committed" ? new Date().toISOString() : null,
      })
      .eq("id", data.batchId);

    const summary = await summarizeBatch(supabaseAdmin, businessId, data.batchId);
    return { outcome: finalStatus, ...summary, warnings };
  });

// ---------------------------------------------------------------------------
// catalogImportGetBatch — read-only status retrieval for polling/refresh
// recovery. Uses the caller-JWT client only: authenticated already holds
// SELECT under RLS (EIS §45.5.4), so no privileged access is needed here.
// ---------------------------------------------------------------------------

export type CatalogImportBatchStatus = {
  batch: {
    id: string;
    status: string;
    rowCount: number;
    createdAt: string;
    committedAt: string | null;
    originalFilename: string;
    fileKind: string;
  } | null;
  rows: {
    rowNumber: number;
    status: string;
    correctionReason: string | null;
    snapshot: ParsedSnapshot;
    matchedProductId: string | null;
    matchedProductName: string | null;
    resolvedProductId: string | null;
  }[];
};

export const catalogImportGetBatch = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: { batchId: string }) => data)
  .handler(async ({ data, context }): Promise<CatalogImportBatchStatus> => {
    const { supabase } = context;

    const { data: batch, error: batchErr } = await supabase
      .from("catalog_import_batches")
      .select("*")
      .eq("id", data.batchId)
      .maybeSingle();
    if (batchErr) throw batchErr;
    if (!batch) return { batch: null, rows: [] };

    const { data: rows, error: rowsErr } = await supabase
      .from("catalog_import_rows")
      .select("*")
      .eq("batch_id", data.batchId)
      .order("row_number", { ascending: true });
    if (rowsErr) throw rowsErr;

    // Enrich POSSIBLE_MATCH rows with the matched product's name (EIS
    // §45.4: "the matched product's id/name is surfaced to the merchant"),
    // same-business only -- catalog_products_list_batch is already scoped
    // by the existing RLS/executor boundary, no new access introduced.
    const matchedIds = [
      ...new Set((rows ?? []).map((r) => r.matched_product_id).filter((id): id is string => !!id)),
    ];
    const nameById = new Map<string, string>();
    if (matchedIds.length > 0) {
      const { data: matchedProducts, error: matchErr } = await supabase.rpc(
        "catalog_products_list_batch",
        { p_product_ids: matchedIds },
      );
      if (matchErr) throw matchErr;
      for (const p of matchedProducts ?? []) {
        if (p.id && p.name) nameById.set(p.id, p.name);
      }
    }

    return {
      batch: {
        id: batch.id,
        status: batch.status,
        rowCount: batch.row_count,
        createdAt: batch.created_at,
        committedAt: batch.committed_at,
        originalFilename: batch.original_filename,
        fileKind: batch.file_kind,
      },
      rows: (rows ?? []).map((r) => ({
        rowNumber: r.row_number,
        status: r.status,
        correctionReason: r.correction_reason,
        snapshot: r.parsed_snapshot as unknown as ParsedSnapshot,
        matchedProductId: r.matched_product_id,
        matchedProductName: r.matched_product_id
          ? (nameById.get(r.matched_product_id) ?? null)
          : null,
        resolvedProductId: r.resolved_product_id,
      })),
    };
  });
