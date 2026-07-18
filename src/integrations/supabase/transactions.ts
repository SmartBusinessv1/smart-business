// Transaction data access for the Business Operations Foundation (SB-P-1.8).
// Reads and writes go through the anon client; Row Level Security enforces
// that a business can only ever see or create its own transactions.
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type TransactionType = "sale" | "purchase";

export type PaymentMethod = "cash" | "upi" | "card" | "bank_transfer" | "credit" | "other";

export const PAYMENT_METHODS: ReadonlyArray<{ value: PaymentMethod; label: string }> = [
  { value: "cash", label: "Cash" },
  { value: "upi", label: "UPI" },
  { value: "card", label: "Card" },
  { value: "bank_transfer", label: "Bank transfer" },
  { value: "credit", label: "Credit" },
  { value: "other", label: "Other" },
];

export type Transaction = Tables<"transactions">;

export type CreateTransactionInput = {
  businessId: string;
  creatorId: string;
  transactionType: TransactionType;
  transactionDate: string;
  partyName: string;
  description: string;
  amount: number;
  paymentMethod: PaymentMethod;
  notes?: string | null;
};

export async function createTransaction(input: CreateTransactionInput): Promise<Transaction> {
  const partyName = input.partyName.trim();
  const description = input.description.trim();
  const notes = input.notes?.trim() ? input.notes.trim() : null;

  if (!partyName) {
    throw new Error("Party name is required.");
  }
  if (!description) {
    throw new Error("Description is required.");
  }
  if (!Number.isFinite(input.amount) || input.amount <= 0) {
    throw new Error("Amount must be a positive number.");
  }

  const { data, error } = await supabase
    .from("transactions")
    .insert({
      business_id: input.businessId,
      creator_id: input.creatorId,
      transaction_type: input.transactionType,
      transaction_date: input.transactionDate,
      party_name: partyName,
      description,
      amount: input.amount,
      payment_method: input.paymentMethod,
      notes,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function listRecentTransactions(
  businessId: string,
  limit = 50,
): Promise<Transaction[]> {
  const { data, error } = await supabase
    .from("transactions")
    .select()
    .eq("business_id", businessId)
    .order("transaction_date", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data ?? [];
}

export type DailyTotals = {
  date: string;
  salesTotal: number;
  purchasesTotal: number;
};

export async function getDailyTotals(businessId: string, date: string): Promise<DailyTotals> {
  const { data, error } = await supabase
    .from("transactions")
    .select("transaction_type, amount")
    .eq("business_id", businessId)
    .eq("transaction_date", date);

  if (error) throw error;

  return (data ?? []).reduce<DailyTotals>(
    (totals, row) => {
      if (row.transaction_type === "sale") {
        totals.salesTotal += Number(row.amount);
      } else if (row.transaction_type === "purchase") {
        totals.purchasesTotal += Number(row.amount);
      }
      return totals;
    },
    { date, salesTotal: 0, purchasesTotal: 0 },
  );
}
