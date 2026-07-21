// SB-P-1.10 — Inventory list, creation, search, filtering.
// Item creation is a separate step from opening stock (opening stock is
// recorded on the item detail view). Current stock is derived from the
// ledger via one batch aggregation per page.
import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Plus, Search, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import {
  createInventoryItem,
  listInventoryItems,
  type InventoryListEntry,
  type ItemStatusFilter,
} from "@/integrations/supabase/inventory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const Route = createFileRoute("/_authenticated/inventory/")({
  head: () => ({
    meta: [
      { title: "Inventory — Smart Business" },
      {
        name: "description",
        content:
          "Track your stock. Every quantity change is recorded as an auditable inventory movement.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: InventoryIndexBoundary,
});

type Business = { id: string; name: string; category: string; locality: string };

function InventoryIndexBoundary() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  const businessQuery = useQuery({
    queryKey: ["business", userId],
    enabled: !!userId,
    queryFn: async (): Promise<Business | null> => {
      const { data, error } = await supabase
        .from("businesses")
        .select("id, name, category, locality")
        .maybeSingle();
      if (error) throw error;
      return (data as Business | null) ?? null;
    },
  });

  if (businessQuery.isPending) return <LoadingSection />;
  if (businessQuery.isError) {
    console.error("Inventory business load failed:", businessQuery.error);
    return (
      <ErrorSection
        message="We couldn't load your workspace. Please try again or contact support."
        onRetry={() => void businessQuery.refetch()}
      />
    );
  }
  if (!businessQuery.data) return <NoBusinessYet />;
  return <InventoryList business={businessQuery.data} />;
}

function LoadingSection() {
  return (
    <section className="mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-24 sm:px-6">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        <span className="text-sm">Loading inventory…</span>
      </div>
    </section>
  );
}

function ErrorSection({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-card-foreground">Something didn't load</h2>
        <p className="mt-2 text-sm text-muted-foreground">{message}</p>
        <Button type="button" variant="outline" onClick={onRetry} className="mt-4">
          Try again
        </Button>
      </div>
    </section>
  );
}

function NoBusinessYet() {
  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-card-foreground">
          Set up your business first
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Finish setting up your business identity before recording inventory.
        </p>
        <Link
          to="/dashboard"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go to workspace
        </Link>
      </div>
    </section>
  );
}

function InventoryList({ business }: { business: Business }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ItemStatusFilter>("active");
  const [stockFilter, setStockFilter] = useState<"all" | "in_stock" | "no_stock" | "negative">(
    "all",
  );
  const [createOpen, setCreateOpen] = useState(false);

  const itemsQuery = useQuery({
    queryKey: ["inventory", business.id, "list", { status, search }],
    queryFn: () => listInventoryItems(business.id, { search, status }),
  });

  const filtered = useMemo<InventoryListEntry[]>(() => {
    const rows = itemsQuery.data ?? [];
    if (stockFilter === "all") return rows;
    return rows.filter((r) => {
      const s = r.current_stock;
      if (stockFilter === "in_stock") return s > 0;
      if (stockFilter === "no_stock") return s === 0;
      return s < 0; // negative
    });
  }, [itemsQuery.data, stockFilter]);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Business operations
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Inventory
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Every stock change is recorded as an auditable inventory movement. Current stock is
            derived from the complete movement history — quantities are never edited directly.
          </p>
        </div>
        <Button type="button" onClick={() => setCreateOpen(true)}>
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          New item
        </Button>
      </header>

      <section aria-label="Filters" className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
        <label className="relative">
          <span className="sr-only">Search inventory</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by item name"
            className="pl-9"
          />
        </label>
        <Select value={status} onValueChange={(v) => setStatus(v as ItemStatusFilter)}>
          <SelectTrigger className="sm:w-[160px]" aria-label="Item status">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
            <SelectItem value="all">All statuses</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={stockFilter}
          onValueChange={(v) => setStockFilter(v as typeof stockFilter)}
        >
          <SelectTrigger className="sm:w-[180px]" aria-label="Stock status">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All stock levels</SelectItem>
            <SelectItem value="in_stock">In stock</SelectItem>
            <SelectItem value="no_stock">No stock</SelectItem>
            <SelectItem value="negative">Negative stock</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section aria-label="Items" className="mt-6">
        {itemsQuery.isPending ? (
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-xl" />
            ))}
          </div>
        ) : itemsQuery.isError ? (
          <ErrorSection
            message="We couldn't load your inventory. Please try again."
            onRetry={() => void itemsQuery.refetch()}
          />
        ) : filtered.length === 0 ? (
          <EmptyState
            hasAnyItems={(itemsQuery.data ?? []).length > 0}
            onCreate={() => setCreateOpen(true)}
          />
        ) : (
          <ul className="space-y-3">
            {filtered.map((item) => (
              <ItemRow key={item.id} item={item} />
            ))}
          </ul>
        )}
      </section>

      <CreateItemDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        businessId={business.id}
      />
    </section>
  );
}

function EmptyState({
  hasAnyItems,
  onCreate,
}: {
  hasAnyItems: boolean;
  onCreate: () => void;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border/70 bg-muted/30 p-8 text-center">
      <p className="text-sm font-medium text-foreground">
        {hasAnyItems ? "No items match your filters" : "No inventory yet"}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {hasAnyItems
          ? "Clear a filter or adjust your search to see more items."
          : "Create your first inventory item to start recording stock movements."}
      </p>
      {!hasAnyItems ? (
        <Button type="button" onClick={onCreate} className="mt-4">
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Create your first item
        </Button>
      ) : null}
    </div>
  );
}

function ItemRow({ item }: { item: InventoryListEntry }) {
  const stock = item.current_stock;
  const isNegative = stock < 0;
  const isEmpty = stock === 0;

  return (
    <li className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
      <Link
        to="/inventory/$itemId"
        params={{ itemId: item.id }}
        className="flex items-start justify-between gap-3"
        aria-label={`Open ${item.name}`}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-base font-semibold text-card-foreground">
              {item.name}
            </h3>
            {item.status === "archived" ? (
              <Badge variant="outline" className="shrink-0">
                Archived
              </Badge>
            ) : null}
            {isNegative ? (
              <Badge variant="outline" className="shrink-0 border-destructive/50 text-destructive">
                Negative stock
              </Badge>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">Counted in {item.base_unit}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-right">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Current stock
            </p>
            <p
              className={
                isNegative
                  ? "text-lg font-semibold text-destructive"
                  : isEmpty
                    ? "text-lg font-semibold text-muted-foreground"
                    : "text-lg font-semibold text-card-foreground"
              }
            >
              {formatQuantity(stock)} {item.base_unit}
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </div>
      </Link>
    </li>
  );
}

const createItemSchema = z.object({
  name: z.string().trim().min(1, "Please enter an item name."),
  baseUnit: z.string().trim().min(1, "Please enter the base counting unit."),
});
type CreateItemForm = z.infer<typeof createItemSchema>;

function CreateItemDialog({
  open,
  onOpenChange,
  businessId,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  businessId: string;
}) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const form = useForm<CreateItemForm>({
    resolver: zodResolver(createItemSchema),
    defaultValues: { name: "", baseUnit: "" },
  });

  const mutation = useMutation({
    mutationFn: async (values: CreateItemForm) => {
      if (!user?.id) throw new Error("You must be signed in.");
      return createInventoryItem({
        businessId,
        createdBy: user.id,
        name: values.name,
        baseUnit: values.baseUnit,
      });
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["inventory", businessId] });
      form.reset();
      onOpenChange(false);
    },
    onError: (err) => {
      console.error("Failed to create inventory item:", err);
      const msg =
        err instanceof Error && err.message.includes("duplicate key")
          ? "An item with this name already exists in your business."
          : "We couldn't create this item. Please check the details and try again.";
      form.setError("root", { message: msg });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (mutation.isPending) return;
        if (!next) form.reset();
        onOpenChange(next);
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>New inventory item</DialogTitle>
          <DialogDescription>
            Give the item a clear name and choose its base counting unit (for example kg, pcs,
            litre). The base unit cannot be changed later.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((v) => mutation.mutate(v))}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Rice, Idli batter, Milk (1L)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="baseUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Base counting unit</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. kg, pcs, litre, packet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.formState.errors.root ? (
              <p
                role="alert"
                className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {form.formState.errors.root.message}
              </p>
            ) : null}
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={mutation.isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Create item
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function formatQuantity(n: number): string {
  const abs = Math.abs(n);
  const nf = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  return `${n < 0 ? "-" : ""}${nf.format(abs)}`;
}
