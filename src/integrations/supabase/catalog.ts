// SB-P-1.11 — Product Catalog data access (Phase 1, owner-only).
// Mirrors src/integrations/supabase/inventory.ts: thin typed wrappers around
// the deployed catalog RPC surface, one function per backend command. Every
// catalog write goes through these commands — the client never writes to a
// catalog table directly. RLS at the database scopes every request to the
// caller's owned business.
import { supabase } from "@/integrations/supabase/client";
import type { Database, Json } from "./types";

export type CommandResult = Database["public"]["CompositeTypes"]["catalog_command_result"];
export type CommandOutcome = Database["public"]["CompositeTypes"]["catalog_command_outcome"];
export type LinkPreviewResult = Database["public"]["CompositeTypes"]["catalog_link_preview_result"];
export type ProductSummary = Database["public"]["CompositeTypes"]["catalog_product_summary"];
export type TaxTreatment = Database["public"]["Enums"]["catalog_tax_treatment"];
export type PricingMode = Database["public"]["Enums"]["catalog_pricing_mode"];
export type LifecycleStatus = Database["public"]["Enums"]["catalog_lifecycle_status"];

export function newIdempotencyKey(): string {
  return crypto.randomUUID();
}

// --------------------------------------------------------------------------
// Rejection categories (the 11 exact backend strings) → merchant-safe copy.
// --------------------------------------------------------------------------

export type RejectionReason =
  | "PERMISSION_DENIED"
  | "NOT_FOUND"
  | "INVALID_INPUT"
  | "UNIQUENESS_CONFLICT"
  | "IDEMPOTENCY_CONFLICT"
  | "STALE_STATE"
  | "PRICE_CONFIRMATION_REQUIRED"
  | "CONFIRMATION_REQUIRED"
  | "LIFECYCLE_CONFLICT"
  | "DEPENDENT_HISTORY_CONFLICT"
  | "OPERATION_NOT_PERMITTED";

export type RejectionContext = "default" | "delete" | "link" | "unit";

export function rejectionMessage(
  reason: string | null | undefined,
  context: RejectionContext = "default",
): string {
  switch (reason) {
    case "PERMISSION_DENIED":
      return "You don't have permission to do this. Please make sure you're signed in as the business owner.";
    case "NOT_FOUND":
      return "We couldn't find that item. It may have been removed.";
    case "INVALID_INPUT":
      return "Please check the details you entered.";
    case "UNIQUENESS_CONFLICT":
      return "That name, SKU, or barcode is already used by another product or category in your business.";
    case "IDEMPOTENCY_CONFLICT":
      return "We couldn't confirm the result of your last attempt. Please review the latest details and try again.";
    case "STALE_STATE":
      return "This information has changed since you opened this screen. Please review the latest details and try again.";
    case "PRICE_CONFIRMATION_REQUIRED":
      return "We still need the selling price for the new unit before this change can be saved.";
    case "CONFIRMATION_REQUIRED":
      return "This category still has products in it. Archiving it will leave those products uncategorized.";
    case "LIFECYCLE_CONFLICT":
      return "This action can't be completed because of the product's current status.";
    case "DEPENDENT_HISTORY_CONFLICT":
      return context === "link"
        ? "This inventory link can't be changed because stock movements have already been recorded against it since it was linked."
        : "This product has recorded history and can no longer be permanently deleted. You can archive it instead.";
    case "OPERATION_NOT_PERMITTED":
      return context === "unit"
        ? "This product's unit is set by its linked inventory item and can't be changed directly."
        : "This action isn't available for this product right now.";
    default:
      return "We couldn't complete this action. Please review the latest details and try again.";
  }
}

/** Thrown when a command returns outcome = "rejected". */
export class CatalogRejection extends Error {
  readonly reason: string | null;
  constructor(reason: string | null, context: RejectionContext = "default") {
    super(rejectionMessage(reason, context));
    this.name = "CatalogRejection";
    this.reason = reason;
  }
}

function assertCompleted(
  result: CommandResult | null,
  context: RejectionContext = "default",
): CommandResult {
  if (!result) throw new CatalogRejection(null, context);
  if (result.outcome !== "completed") {
    throw new CatalogRejection(result.rejection_reason ?? null, context);
  }
  return result;
}

// --------------------------------------------------------------------------
// Reads
// --------------------------------------------------------------------------

export type SearchCursor = {
  matchRank: number | null;
  nameNormalized: string | null;
  id: string | null;
};

export type SearchParams = {
  query?: string | null;
  includeArchived?: boolean;
  categoryId?: string | null;
  limit?: number;
  cursor?: SearchCursor | null;
};

export async function searchProducts(params: SearchParams = {}): Promise<ProductSummary[]> {
  const args: Database["public"]["Functions"]["catalog_products_search"]["Args"] = {
    p_include_archived: params.includeArchived ?? false,
    p_limit: params.limit ?? 25,
  };
  const q = params.query?.trim();
  if (q) args.p_query = q;
  if (params.categoryId) args.p_category_id = params.categoryId;

  const c = params.cursor;
  // Keyset cursor: all three values together, or all three omitted.
  if (c && c.id && c.nameNormalized !== null && c.nameNormalized !== undefined) {
    if (c.matchRank !== null && c.matchRank !== undefined) {
      args.p_cursor_match_rank = c.matchRank;
    }
    args.p_cursor_name_normalized = c.nameNormalized;
    args.p_cursor_id = c.id;
  }

  const { data, error } = await supabase.rpc("catalog_products_search", args);
  if (error) throw error;
  return (data ?? []) as ProductSummary[];
}

export async function listProductsBatch(productIds: string[]): Promise<ProductSummary[]> {
  const { data, error } = await supabase.rpc("catalog_products_list_batch", {
    p_product_ids: productIds,
  });
  if (error) throw error;
  return (data ?? []) as ProductSummary[];
}

export type ProductHistoryEntry =
  | {
      type: "selling_price";
      previous_price: number | null;
      new_price: number;
      source: string | null;
      recorded_at: string;
    }
  | {
      type: "tax";
      previous_treatment: TaxTreatment | null;
      previous_rate_percent: number | null;
      new_treatment: TaxTreatment;
      new_rate_percent: number | null;
      recorded_at: string;
    }
  | {
      type: "reference_cost";
      previous_cost: number | null;
      new_cost: number;
      recorded_at: string;
    };

export type ProductDetail = {
  id: string;
  name: string;
  description: string | null;
  category_id: string | null;
  sku: string | null;
  barcode: string | null;
  selling_unit: string;
  current_selling_price: number | null;
  tax_treatment: TaxTreatment;
  tax_rate_percent: number | null;
  inventory_item_id: string | null;
  inventory_link_established_at: string | null;
  status: LifecycleStatus;
  created_at: string;
  updated_at: string;
  current_reference_cost: number | null;
  history: ProductHistoryEntry[];
};

/** Returns null when the product does not exist or is not owned by the caller. */
export async function readProduct(productId: string): Promise<ProductDetail | null> {
  const { data, error } = await supabase.rpc("catalog_product_read", {
    p_product_id: productId,
  });
  if (error) throw error;
  if (!data) return null;
  return data as unknown as ProductDetail;
}

export type CatalogCategory = { id: string; name: string; status: LifecycleStatus };

/**
 * Direct client SELECT — the only catalog table readable this way (existing
 * RLS grants `authenticated` SELECT scoped to the caller's own business).
 */
export async function listCategories(): Promise<CatalogCategory[]> {
  const { data, error } = await supabase
    .from("catalog_categories")
    .select("id, name, status")
    .eq("status", "active")
    .order("name");
  if (error) throw error;
  return (data ?? []) as CatalogCategory[];
}

/**
 * Active AND archived categories, for the preset selector's archived-name
 * conflict detection (SB-P-1.11-GC-1, EIS §21) — an archived category's
 * name must never be silently reused, so the selector needs to see it to
 * surface the truthful conflict message. Same narrow authenticated grant
 * as listCategories(); no new access introduced.
 */
export async function listAllCategories(): Promise<CatalogCategory[]> {
  const { data, error } = await supabase
    .from("catalog_categories")
    .select("id, name, status")
    .order("name");
  if (error) throw error;
  return (data ?? []) as CatalogCategory[];
}

export type InventoryPickerItem = { id: string; name: string; base_unit: string };

/** Read-only inventory items, used to populate the D-068 link picker. */
export async function listInventoryItemsForPicker(
  businessId: string,
): Promise<InventoryPickerItem[]> {
  const { data, error } = await supabase
    .from("inventory_items")
    .select("id, name, base_unit")
    .eq("business_id", businessId)
    .eq("status", "active")
    .order("name");
  if (error) throw error;
  return (data ?? []) as InventoryPickerItem[];
}

// --------------------------------------------------------------------------
// Commands
// --------------------------------------------------------------------------

export async function createProduct(input: {
  idempotencyKey: string;
  name: string;
  description?: string | null;
  categoryId?: string | null;
  sku?: string | null;
  barcode?: string | null;
  sellingUnit?: string;
}): Promise<CommandResult> {
  const args: Database["public"]["Functions"]["create_catalog_product"]["Args"] = {
    p_idempotency_key: input.idempotencyKey,
    p_name: input.name,
  };
  if (input.description) args.p_description = input.description;
  if (input.categoryId) args.p_category_id = input.categoryId;
  if (input.sku) args.p_sku = input.sku;
  if (input.barcode) args.p_barcode = input.barcode;
  if (input.sellingUnit) args.p_selling_unit = input.sellingUnit;

  const { data, error } = await supabase.rpc("create_catalog_product", args);
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

export async function updateProductIdentity(input: {
  idempotencyKey: string;
  productId: string;
  name: string;
  description: string | null;
  categoryId: string | null;
  sku: string | null;
  barcode: string | null;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("update_catalog_product_identity", {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
    p_name: input.name,
    p_description: input.description as unknown as string,
    p_category_id: input.categoryId as unknown as string,
    p_sku: input.sku as unknown as string,
    p_barcode: input.barcode as unknown as string,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

export async function updateProductUnit(input: {
  idempotencyKey: string;
  productId: string;
  sellingUnit: string;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("update_catalog_product_unit", {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
    p_selling_unit: input.sellingUnit,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult, "unit");
}

export async function createCategory(input: {
  idempotencyKey: string;
  name: string;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("create_catalog_category", {
    p_idempotency_key: input.idempotencyKey,
    p_name: input.name,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

/**
 * Raw (non-throwing) category archive — the caller needs to distinguish the
 * CONFIRMATION_REQUIRED rejection to run the two-step confirm with the SAME
 * idempotency key.
 */
export async function archiveCategoryRaw(input: {
  idempotencyKey: string;
  categoryId: string;
  confirmUncategorize?: boolean;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("archive_catalog_category", {
    p_idempotency_key: input.idempotencyKey,
    p_category_id: input.categoryId,
    p_confirm_uncategorize: input.confirmUncategorize ?? false,
  });
  if (error) throw error;
  return data as CommandResult;
}

export async function archiveProduct(input: {
  idempotencyKey: string;
  productId: string;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("archive_catalog_product", {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

export async function reactivateProduct(input: {
  idempotencyKey: string;
  productId: string;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("reactivate_catalog_product", {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

export async function deleteProduct(input: {
  idempotencyKey: string;
  productId: string;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("delete_catalog_product", {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult, "delete");
}

export async function recordSellingPriceChange(input: {
  idempotencyKey: string;
  productId: string;
  newPrice: number;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("record_catalog_selling_price_change", {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
    p_new_price: input.newPrice,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

export async function recordTaxChange(input: {
  idempotencyKey: string;
  productId: string;
  treatment: TaxTreatment;
  ratePercent?: number | null;
}): Promise<CommandResult> {
  const args: Database["public"]["Functions"]["record_catalog_tax_change"]["Args"] = {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
    p_treatment: input.treatment,
  };
  // Rate is required if and only if the treatment is a product-specific rate.
  if (input.treatment === "product_specific_rate") {
    args.p_rate_percent = input.ratePercent as number;
  }
  const { data, error } = await supabase.rpc("record_catalog_tax_change", args);
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

export async function recordReferenceCostChange(input: {
  idempotencyKey: string;
  productId: string;
  newCost: number;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("record_catalog_reference_cost_change", {
    p_idempotency_key: input.idempotencyKey,
    p_product_id: input.productId,
    p_new_cost: input.newCost,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

export async function updateBusinessTaxSettings(input: {
  idempotencyKey: string;
  pricingMode: PricingMode;
  defaultTaxRate?: number | null;
}): Promise<CommandResult> {
  const args: Database["public"]["Functions"]["update_business_tax_settings"]["Args"] = {
    p_idempotency_key: input.idempotencyKey,
    p_pricing_mode: input.pricingMode,
  };
  if (input.defaultTaxRate !== null && input.defaultTaxRate !== undefined) {
    args.p_default_tax_rate = input.defaultTaxRate;
  }
  const { data, error } = await supabase.rpc("update_business_tax_settings", args);
  if (error) throw error;
  return assertCompleted(data as CommandResult);
}

// --------------------------------------------------------------------------
// D-068 — inventory link preview / confirm (always two calls, in order)
// --------------------------------------------------------------------------

export type LinkAction = Database["public"]["Enums"]["catalog_link_action"];

/** Non-mutating; mints a fresh preview token. No idempotency key exists here. */
export async function previewInventoryLinkChange(input: {
  productId: string;
  requestedAction: LinkAction;
  targetInventoryItemId?: string | null;
}): Promise<LinkPreviewResult> {
  const args: Database["public"]["Functions"]["preview_catalog_inventory_link_change"]["Args"] = {
    p_product_id: input.productId,
    p_requested_action: input.requestedAction,
  };
  if (input.targetInventoryItemId) {
    args.p_target_inventory_item_id = input.targetInventoryItemId;
  }
  const { data, error } = await supabase.rpc("preview_catalog_inventory_link_change", args);
  if (error) throw error;
  return data as LinkPreviewResult;
}

export async function assignOrReplaceInventoryLink(input: {
  idempotencyKey: string;
  previewTokenId: string;
  confirmedPrice?: number | null;
}): Promise<CommandResult> {
  const args: Database["public"]["Functions"]["assign_or_replace_catalog_inventory_link"]["Args"] =
    {
      p_idempotency_key: input.idempotencyKey,
      p_preview_token_id: input.previewTokenId,
    };
  if (input.confirmedPrice !== null && input.confirmedPrice !== undefined) {
    args.p_confirmed_price = input.confirmedPrice;
  }
  const { data, error } = await supabase.rpc("assign_or_replace_catalog_inventory_link", args);
  if (error) throw error;
  return assertCompleted(data as CommandResult, "link");
}

export async function removeInventoryLink(input: {
  idempotencyKey: string;
  previewTokenId: string;
}): Promise<CommandResult> {
  const { data, error } = await supabase.rpc("remove_catalog_inventory_link", {
    p_idempotency_key: input.idempotencyKey,
    p_preview_token_id: input.previewTokenId,
  });
  if (error) throw error;
  return assertCompleted(data as CommandResult, "link");
}

// --------------------------------------------------------------------------
// Unknown-outcome reconciliation
// --------------------------------------------------------------------------

/** Operation names are the RPC function names themselves. */
export type CatalogOperation =
  | "create_catalog_product"
  | "update_catalog_product_identity"
  | "update_catalog_product_unit"
  | "create_catalog_category"
  | "archive_catalog_category"
  | "archive_catalog_product"
  | "reactivate_catalog_product"
  | "delete_catalog_product"
  | "record_catalog_selling_price_change"
  | "record_catalog_tax_change"
  | "update_business_tax_settings"
  | "record_catalog_reference_cost_change"
  | "assign_or_replace_catalog_inventory_link"
  | "remove_catalog_inventory_link";

export async function getCommandOutcome(
  operation: CatalogOperation,
  idempotencyKey: string,
): Promise<CommandOutcome> {
  const { data, error } = await supabase.rpc("get_catalog_command_outcome", {
    p_operation: operation,
    p_idempotency_key: idempotencyKey,
  });
  if (error) throw error;
  return data as CommandOutcome;
}

export function taxTreatmentLabel(t: TaxTreatment): string {
  switch (t) {
    case "inherit_business_default":
      return "Use business default";
    case "product_specific_rate":
      return "Product-specific rate";
    case "non_taxable":
      return "Non-taxable";
  }
}

export type { Json };

/**
 * Runs a catalog command and reconciles an unknown outcome.
 *
 * A `CatalogRejection` is a definitive backend answer and is rethrown as-is.
 * Any other failure (network/timeout) may have been recorded server-side, so
 * we ask `get_catalog_command_outcome` with the exact same operation name and
 * idempotency key before deciding. `found: false` means nothing was recorded
 * and the SAME key may safely be retried.
 */
export async function runCommandWithRecovery(
  operation: CatalogOperation,
  idempotencyKey: string,
  run: () => Promise<CommandResult>,
  context: RejectionContext = "default",
  onReconciling?: () => void,
): Promise<CommandResult> {
  try {
    return await run();
  } catch (err) {
    if (err instanceof CatalogRejection) throw err;
    console.error(`[catalog] ${operation} call failed, reconciling outcome:`, err);
    onReconciling?.();
    let outcome: CommandOutcome;
    try {
      outcome = await getCommandOutcome(operation, idempotencyKey);
    } catch (checkErr) {
      console.error(`[catalog] outcome check failed for ${operation}:`, checkErr);
      throw new Error(
        "We couldn't confirm whether this was saved. Please check your connection and try again.",
      );
    }
    if (outcome?.found) {
      if (outcome.outcome === "completed") {
        return {
          outcome: "completed",
          rejection_reason: null,
          product_id: null,
          category_id: null,
          idempotency_key: idempotencyKey,
          recorded_at: outcome.recorded_at ?? null,
        };
      }
      throw new CatalogRejection(outcome.rejection_reason ?? null, context);
    }
    throw new Error("We couldn't reach the server, and nothing was saved. Please try again.");
  }
}
