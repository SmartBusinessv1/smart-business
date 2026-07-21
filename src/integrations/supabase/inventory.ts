// Inventory data access for SB-P-1.10 — Inventory Foundation.
// Every stock-affecting write funnels through create_inventory_movement()
// (the shared movement-creation operation). Reads use grouped ledger
// aggregation for current-stock derivation (Phase 1). RLS at the database
// scopes every request to the caller's owned businesses.
import { supabase } from "@/integrations/supabase/client";
import type { Database, Tables } from "./types";

export type InventoryItem = Tables<"inventory_items">;
export type InventoryMovement = Tables<"inventory_movements">;
export type MovementType = Database["public"]["Enums"]["inventory_movement_type"];
export type MovementDirection = Database["public"]["Enums"]["inventory_direction"];
export type ItemStatus = Database["public"]["Enums"]["inventory_item_status"];

export type InventoryListEntry = InventoryItem & { current_stock: number };

export type StockStatusFilter = "all" | "in_stock" | "no_stock" | "negative";
export type ItemStatusFilter = "active" | "archived" | "all";

export function newIdempotencyKey(): string {
  return crypto.randomUUID();
}

export function isNegativeStockError(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err ?? "");
  return msg.includes("NEGATIVE_STOCK");
}

export async function listInventoryItems(
  businessId: string,
  opts: { search?: string; status?: ItemStatusFilter } = {},
): Promise<InventoryListEntry[]> {
  let q = supabase
    .from("inventory_items")
    .select("*")
    .eq("business_id", businessId)
    .order("name", { ascending: true });

  const status = opts.status ?? "active";
  if (status !== "all") q = q.eq("status", status);

  const search = opts.search?.trim();
  if (search) q = q.ilike("name", `%${search}%`);

  const { data: items, error } = await q;
  if (error) throw error;
  if (!items || items.length === 0) return [];

  const { data: stocks, error: stockErr } = await supabase.rpc(
    "inventory_current_stock_batch",
    { p_item_ids: items.map((i) => i.id) },
  );
  if (stockErr) throw stockErr;

  const stockMap = new Map<string, number>(
    (stocks ?? []).map((s) => [s.item_id, Number(s.current_stock)]),
  );
  return items.map((i) => ({ ...i, current_stock: stockMap.get(i.id) ?? 0 }));
}

export async function getInventoryItem(itemId: string): Promise<InventoryItem | null> {
  const { data, error } = await supabase
    .from("inventory_items")
    .select("*")
    .eq("id", itemId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function getCurrentStock(itemId: string): Promise<number> {
  const { data, error } = await supabase.rpc("inventory_current_stock_batch", {
    p_item_ids: [itemId],
  });
  if (error) throw error;
  const row = (data ?? [])[0];
  return row ? Number(row.current_stock) : 0;
}

export async function listMovements(itemId: string): Promise<InventoryMovement[]> {
  const { data, error } = await supabase
    .from("inventory_movements")
    .select("*")
    .eq("item_id", itemId)
    .order("occurred_at", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function createInventoryItem(input: {
  businessId: string;
  createdBy: string;
  name: string;
  baseUnit: string;
}): Promise<InventoryItem> {
  const name = input.name.trim();
  const baseUnit = input.baseUnit.trim();
  if (!name) throw new Error("Item name is required.");
  if (!baseUnit) throw new Error("Base unit is required.");

  const { data, error } = await supabase
    .from("inventory_items")
    .insert({
      business_id: input.businessId,
      created_by: input.createdBy,
      name,
      base_unit: baseUnit,
    })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateItemStatus(
  itemId: string,
  status: ItemStatus,
): Promise<InventoryItem> {
  const { data, error } = await supabase
    .from("inventory_items")
    .update({ status })
    .eq("id", itemId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export type CreateMovementInput = {
  idempotencyKey: string;
  operation: string;
  itemId: string;
  movementType: MovementType;
  direction: MovementDirection;
  quantity: number;
  reason: string;
  occurredAt?: string;
  correctingOf?: string | null;
  allowNegativeStock?: boolean;
};

export async function createMovement(
  input: CreateMovementInput,
): Promise<InventoryMovement> {
  const { data, error } = await supabase.rpc("create_inventory_movement", {
    p_idempotency_key: input.idempotencyKey,
    p_operation: input.operation,
    p_item_id: input.itemId,
    p_movement_type: input.movementType,
    p_direction: input.direction,
    p_quantity: input.quantity,
    p_reason: input.reason,
    p_occurred_at: input.occurredAt ?? new Date().toISOString(),
    p_correcting_of: input.correctingOf ?? (null as unknown as string),
    p_allow_negative_stock: input.allowNegativeStock ?? false,
    p_business_event_type: null as unknown as string,
    p_business_event_id: null as unknown as string,
  });
  if (error) throw error;
  return data as unknown as InventoryMovement;
}

export async function previewMovement(
  itemId: string,
  direction: MovementDirection,
  quantity: number,
): Promise<{ currentStock: number; projectedStock: number }> {
  const { data, error } = await supabase.rpc("preview_inventory_movement", {
    p_item_id: itemId,
    p_direction: direction,
    p_quantity: quantity,
  });
  if (error) throw error;
  const row = (data ?? [])[0];
  return {
    currentStock: row ? Number(row.current_stock) : 0,
    projectedStock: row ? Number(row.projected_stock) : 0,
  };
}

export async function remainingCompensable(movementId: string): Promise<number> {
  const { data, error } = await supabase.rpc(
    "inventory_movement_remaining_compensable",
    { p_movement_id: movementId },
  );
  if (error) throw error;
  return Number(data ?? 0);
}

export function movementTypeLabel(type: MovementType): string {
  switch (type) {
    case "opening_stock":
      return "Opening stock";
    case "stock_increase":
      return "Stock increase";
    case "stock_decrease":
      return "Stock decrease";
    case "adjustment_increase":
      return "Adjustment (increase)";
    case "adjustment_decrease":
      return "Adjustment (decrease)";
    case "correction":
      return "Correction";
  }
}
