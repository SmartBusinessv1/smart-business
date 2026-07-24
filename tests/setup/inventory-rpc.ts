// Client-parameterized mirrors of src/integrations/supabase/inventory.ts's
// RPC/table calls. inventory.ts hard-imports a single process-wide client
// singleton (by design -- the app only ever acts as one signed-in user at a
// time), which makes it unusable for tests that need two simultaneously
// signed-in owners (cross-business RLS) or concurrent requests as the same
// owner (concurrency tests). These call the exact same RPC names and
// parameters against a caller-supplied client instead. Types are imported
// from inventory.ts (type-only -- does not execute or import the app's
// client singleton) so the RPC shape stays a single source of truth.
import { randomUUID } from "node:crypto";
import type { TestClient } from "./test-clients";
import type { MovementDirection, MovementType } from "@/integrations/supabase/inventory";
import type { Tables } from "@/integrations/supabase/types";

export type InventoryItem = Tables<"inventory_items">;
export type InventoryMovement = Tables<"inventory_movements">;

export function newIdempotencyKey(): string {
  return randomUUID();
}

export async function createItem(
  client: TestClient,
  params: { businessId: string; createdBy: string; name: string; baseUnit: string },
) {
  return client
    .from("inventory_items")
    .insert({
      business_id: params.businessId,
      created_by: params.createdBy,
      name: params.name,
      base_unit: params.baseUnit,
    })
    .select()
    .single();
}

export async function updateItemStatus(
  client: TestClient,
  itemId: string,
  status: "active" | "archived",
) {
  return client.from("inventory_items").update({ status }).eq("id", itemId).select().single();
}

export interface CreateMovementParams {
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
  businessEventType?: string | null;
  businessEventId?: string | null;
}

export async function createMovement(client: TestClient, p: CreateMovementParams) {
  return client.rpc("create_inventory_movement", {
    p_idempotency_key: p.idempotencyKey,
    p_operation: p.operation,
    p_item_id: p.itemId,
    p_movement_type: p.movementType,
    p_direction: p.direction,
    p_quantity: p.quantity,
    p_reason: p.reason,
    p_occurred_at: p.occurredAt ?? new Date().toISOString(),
    p_correcting_of: p.correctingOf ?? (null as unknown as string),
    p_allow_negative_stock: p.allowNegativeStock ?? false,
    p_business_event_type: p.businessEventType ?? (null as unknown as string),
    p_business_event_id: p.businessEventId ?? (null as unknown as string),
  });
}

export async function previewMovement(
  client: TestClient,
  itemId: string,
  direction: MovementDirection,
  quantity: number,
) {
  return client.rpc("preview_inventory_movement", {
    p_item_id: itemId,
    p_direction: direction,
    p_quantity: quantity,
  });
}

export async function currentStockBatch(client: TestClient, itemIds: string[]) {
  return client.rpc("inventory_current_stock_batch", { p_item_ids: itemIds });
}

export async function remainingCompensable(client: TestClient, movementId: string) {
  return client.rpc("inventory_movement_remaining_compensable", {
    p_movement_id: movementId,
  });
}

export async function listMovements(client: TestClient, itemId: string) {
  return client
    .from("inventory_movements")
    .select("*")
    .eq("item_id", itemId)
    .order("occurred_at", { ascending: false })
    .order("created_at", { ascending: false });
}

export async function getItem(client: TestClient, itemId: string) {
  return client.from("inventory_items").select("*").eq("id", itemId).maybeSingle();
}
