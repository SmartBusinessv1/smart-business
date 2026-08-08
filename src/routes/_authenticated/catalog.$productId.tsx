// SB-P-1.11 — Product detail: identity, unit, selling price, tax treatment,
// reference cost, the D-068 inventory-link preview/confirm flow, lifecycle
// actions, and the recorded history. Every write goes through a named
// catalog command in @/integrations/supabase/catalog.
import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import {
  AlertTriangle,
  Archive,
  ArrowLeft,
  Link2,
  Link2Off,
  Loader2,
  Pencil,
  RotateCcw,
  Trash2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import {
  archiveProduct,
  assignOrReplaceInventoryLink,
  deleteProduct,
  listCategories,
  listInventoryItemsForPicker,
  newIdempotencyKey,
  previewInventoryLinkChange,
  reactivateProduct,
  readProduct,
  recordReferenceCostChange,
  recordSellingPriceChange,
  recordTaxChange,
  rejectionMessage,
  removeInventoryLink,
  runCommandWithRecovery,
  taxTreatmentLabel,
  updateProductIdentity,
  updateProductUnit,
  type CatalogCategory,
  type LinkPreviewResult,
  type ProductDetail,
  type ProductHistoryEntry,
  type TaxTreatment,
} from "@/integrations/supabase/catalog";
import { formatCurrencyINR } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const Route = createFileRoute("/_authenticated/catalog/$productId")({
  head: () => ({
    meta: [
      { title: "Product — Smart Business" },
      {
        name: "description",
        content:
          "Product identity, selling price, tax treatment, reference cost, inventory link, and recorded history.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: ProductDetailBoundary,
});

const NO_CATEGORY = "__none__";

function ProductDetailBoundary() {
  const { productId } = Route.useParams();

  const productQuery = useQuery({
    queryKey: ["catalog", "product", productId],
    queryFn: () => readProduct(productId),
  });

  if (productQuery.isPending) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-4 h-32 w-full rounded-xl" />
      </section>
    );
  }
  if (productQuery.isError) {
    console.error("Product load failed:", productQuery.error);
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">
          We couldn't load this product. Please try again.
        </p>
      </section>
    );
  }
  if (!productQuery.data) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to catalog
        </Link>
        <h1 className="mt-4 text-xl font-semibold text-foreground">Product not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We couldn't find that item. It may have been removed.
        </p>
      </section>
    );
  }
  return <ProductDetailView product={productQuery.data} />;
}

function ProductDetailView({ product }: { product: ProductDetail }) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const userId = user?.id ?? null;

  const categoriesQuery = useQuery({
    queryKey: ["catalog", "categories"],
    queryFn: listCategories,
  });

  const businessQuery = useQuery({
    queryKey: ["business", userId],
    enabled: !!userId,
    queryFn: async (): Promise<{ id: string } | null> => {
      const { data, error } = await supabase.from("businesses").select("id").maybeSingle();
      if (error) throw error;
      return (data as { id: string } | null) ?? null;
    },
  });

  const [identityOpen, setIdentityOpen] = useState(false);
  const [unitOpen, setUnitOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [taxOpen, setTaxOpen] = useState(false);
  const [costOpen, setCostOpen] = useState(false);
  const [linkAction, setLinkAction] = useState<null | "assign_or_replace" | "remove">(null);

  function refresh() {
    void queryClient.invalidateQueries({ queryKey: ["catalog"] });
  }

  const isLinked = !!product.inventory_item_id;
  const isArchived = product.status === "archived";
  const hasHistory = (product.history ?? []).length > 0 || isLinked;

  const categories = categoriesQuery.data ?? [];
  const categoryName = product.category_id
    ? categories.find((c) => c.id === product.category_id)?.name
    : undefined;

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      <Link
        to="/catalog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to catalog
      </Link>

      <header className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Catalog product
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>
            {isArchived ? <Badge variant="outline">Archived</Badge> : null}
            <Badge
              variant="outline"
              className={isLinked ? "border-primary/50 text-primary" : undefined}
            >
              {isLinked ? "Stock tracked" : "Non-stock"}
            </Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Sold per <span className="font-medium text-foreground">{product.selling_unit}</span>
            {categoryName ? ` · ${categoryName}` : ""}
          </p>
        </div>
        <Button type="button" variant="outline" onClick={() => setIdentityOpen(true)}>
          <Pencil className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Edit details
        </Button>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl border-border/60">
          <CardHeader>
            <CardTitle className="text-base">Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Selling price
              </p>
              <p className="text-2xl font-semibold text-card-foreground">
                {product.current_selling_price === null
                  ? "Not set"
                  : formatCurrencyINR(Number(product.current_selling_price))}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => setPriceOpen(true)}
              >
                Record new selling price
              </Button>
            </div>
            <div className="border-t border-border/60 pt-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Reference cost
              </p>
              <p className="text-lg font-semibold text-card-foreground">
                {product.current_reference_cost === null
                  ? "Not set"
                  : formatCurrencyINR(Number(product.current_reference_cost))}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => setCostOpen(true)}
              >
                Record reference cost
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/60">
          <CardHeader>
            <CardTitle className="text-base">Tax treatment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-card-foreground">
                {taxTreatmentLabel(product.tax_treatment)}
              </p>
              {product.tax_treatment === "product_specific_rate" ? (
                <p className="text-sm text-muted-foreground">
                  Rate: {Number(product.tax_rate_percent ?? 0)}%
                </p>
              ) : null}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => setTaxOpen(true)}
              >
                Change tax treatment
              </Button>
            </div>
            <div className="border-t border-border/60 pt-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Selling unit
              </p>
              <p className="text-lg font-semibold text-card-foreground">
                {product.selling_unit}
              </p>
              {isLinked ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  This product's unit is set by its linked inventory item and can't be changed
                  directly.
                </p>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => setUnitOpen(true)}
                >
                  Change selling unit
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 rounded-2xl border-border/60">
        <CardHeader>
          <CardTitle className="text-base">Inventory link</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {isLinked
              ? `Linked to an inventory item since ${
                  product.inventory_link_established_at
                    ? format(new Date(product.inventory_link_established_at), "d MMM yyyy, h:mm a")
                    : "—"
                }. Stock for this product is tracked in Inventory.`
              : "This product is not linked to an inventory item, so its stock is not tracked."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setLinkAction("assign_or_replace")}
            >
              <Link2 className="mr-1.5 h-4 w-4" aria-hidden="true" />
              {isLinked ? "Replace inventory link" : "Link an inventory item"}
            </Button>
            {isLinked ? (
              <Button type="button" variant="outline" onClick={() => setLinkAction("remove")}>
                <Link2Off className="mr-1.5 h-4 w-4" aria-hidden="true" />
                Remove inventory link
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <LifecyclePanel product={product} hasHistory={hasHistory} onDone={refresh} />

      <HistorySection history={product.history ?? []} />

      <IdentityDialog
        key={identityOpen ? "id-open" : "id-closed"}
        open={identityOpen}
        onOpenChange={setIdentityOpen}
        product={product}
        categories={categories}
        onDone={refresh}
      />
      <UnitDialog
        key={unitOpen ? "unit-open" : "unit-closed"}
        open={unitOpen}
        onOpenChange={setUnitOpen}
        product={product}
        onDone={refresh}
      />
      <PriceDialog
        key={priceOpen ? "price-open" : "price-closed"}
        open={priceOpen}
        onOpenChange={setPriceOpen}
        product={product}
        onDone={refresh}
      />
      <TaxDialog
        key={taxOpen ? "tax-open" : "tax-closed"}
        open={taxOpen}
        onOpenChange={setTaxOpen}
        product={product}
        onDone={refresh}
      />
      <CostDialog
        key={costOpen ? "cost-open" : "cost-closed"}
        open={costOpen}
        onOpenChange={setCostOpen}
        product={product}
        onDone={refresh}
      />
      <InventoryLinkFlow
        key={linkAction ? `link-${linkAction}` : "link-none"}
        action={linkAction}
        product={product}
        businessId={businessQuery.data?.id ?? null}
        onClose={() => setLinkAction(null)}
        onDone={refresh}
      />
    </section>
  );
}

// --------------------------------------------------------------------------
// History
// --------------------------------------------------------------------------

function HistorySection({ history }: { history: ProductHistoryEntry[] }) {
  return (
    <Card className="mt-6 rounded-2xl border-border/60">
      <CardHeader>
        <CardTitle className="text-base">Recorded history</CardTitle>
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Nothing recorded yet. Price, tax, and cost changes appear here, newest first.
          </p>
        ) : (
          <ul className="divide-y divide-border/60">
            {history.map((h, i) => (
              <li key={`${h.type}-${h.recorded_at}-${i}`} className="py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{historyTypeLabel(h)}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(h.recorded_at), "d MMM yyyy, h:mm a")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-card-foreground">{historyDescription(h)}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function historyTypeLabel(h: ProductHistoryEntry): string {
  if (h.type === "selling_price") return "Selling price";
  if (h.type === "tax") return "Tax";
  return "Reference cost";
}

function historyDescription(h: ProductHistoryEntry): string {
  if (h.type === "selling_price") {
    const from =
      h.previous_price === null ? "not set" : formatCurrencyINR(Number(h.previous_price));
    return `Changed from ${from} to ${formatCurrencyINR(Number(h.new_price))}.`;
  }
  if (h.type === "reference_cost") {
    const from = h.previous_cost === null ? "not set" : formatCurrencyINR(Number(h.previous_cost));
    return `Changed from ${from} to ${formatCurrencyINR(Number(h.new_cost))}.`;
  }
  const from = h.previous_treatment ? taxTreatmentLabel(h.previous_treatment) : "not set";
  const to = taxTreatmentLabel(h.new_treatment);
  const rate =
    h.new_treatment === "product_specific_rate" && h.new_rate_percent !== null
      ? ` at ${Number(h.new_rate_percent)}%`
      : "";
  return `Changed from ${from} to ${to}${rate}.`;
}

// --------------------------------------------------------------------------
// Lifecycle: archive / reactivate / delete
// --------------------------------------------------------------------------

function LifecyclePanel({
  product,
  hasHistory,
  onDone,
}: {
  product: ProductDetail;
  hasHistory: boolean;
  onDone: () => void;
}) {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState<null | "archive" | "reactivate" | "delete">(null);
  const [idempotencyKey, setIdempotencyKey] = useState(() => newIdempotencyKey());
  const [error, setError] = useState<string | null>(null);
  const [reconciling, setReconciling] = useState(false);

  const mutation = useMutation({
    mutationFn: async (action: "archive" | "reactivate" | "delete") => {
      setError(null);
      if (action === "archive") {
        return runCommandWithRecovery(
          "archive_catalog_product",
          idempotencyKey,
          () => archiveProduct({ idempotencyKey, productId: product.id }),
          "default",
          () => setReconciling(true),
        );
      }
      if (action === "reactivate") {
        return runCommandWithRecovery(
          "reactivate_catalog_product",
          idempotencyKey,
          () => reactivateProduct({ idempotencyKey, productId: product.id }),
          "default",
          () => setReconciling(true),
        );
      }
      return runCommandWithRecovery(
        "delete_catalog_product",
        idempotencyKey,
        () => deleteProduct({ idempotencyKey, productId: product.id }),
        "delete",
        () => setReconciling(true),
      );
    },
    onSuccess: (_r, action) => {
      setReconciling(false);
      setConfirm(null);
      setIdempotencyKey(newIdempotencyKey());
      onDone();
      if (action === "delete") navigate({ to: "/catalog" });
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Lifecycle action failed:", err);
      setError(err instanceof Error ? err.message : rejectionMessage(null));
      setIdempotencyKey(newIdempotencyKey());
    },
  });

  const isArchived = product.status === "archived";

  return (
    <Card className="mt-6 rounded-2xl border-border/60">
      <CardHeader>
        <CardTitle className="text-base">Product status</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Archiving keeps the product and its recorded history but removes it from everyday
          lists. Deleting is only possible while a product has no recorded history at all.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {isArchived ? (
            <Button type="button" onClick={() => setConfirm("reactivate")}>
              <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Reactivate product
            </Button>
          ) : (
            <Button type="button" variant="outline" onClick={() => setConfirm("archive")}>
              <Archive className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Archive product
            </Button>
          )}
          {hasHistory ? (
            <div className="flex items-center gap-2">
              <Button type="button" variant="destructive" disabled>
                <Trash2 className="mr-1.5 h-4 w-4" aria-hidden="true" />
                Delete permanently
              </Button>
              <span className="text-xs text-muted-foreground">
                This product has recorded history and can no longer be permanently deleted. You
                can archive it instead.
              </span>
            </div>
          ) : (
            <Button
              type="button"
              variant="destructive"
              onClick={() => setConfirm("delete")}
            >
              <Trash2 className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Delete permanently
            </Button>
          )}
        </div>
        {error ? (
          <p
            role="alert"
            className="mt-3 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          >
            {error}
          </p>
        ) : null}
      </CardContent>

      <AlertDialog
        open={confirm !== null}
        onOpenChange={(v) => {
          if (mutation.isPending) return;
          if (!v) setConfirm(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {confirm === "delete" ? (
                <span className="inline-flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  Delete this product permanently?
                </span>
              ) : confirm === "archive" ? (
                "Archive this product?"
              ) : (
                "Reactivate this product?"
              )}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirm === "delete"
                ? "This cannot be undone. The product will be removed from your catalog completely."
                : confirm === "archive"
                  ? "The product stays in your records but is hidden from everyday lists. You can reactivate it later."
                  : "The product will appear in your everyday catalog lists again."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          {reconciling ? (
            <p className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
              Checking what happened…
            </p>
          ) : null}
          <AlertDialogFooter>
            <AlertDialogCancel disabled={mutation.isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                if (confirm) mutation.mutate(confirm);
              }}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
              ) : null}
              {confirm === "delete"
                ? "Yes, delete permanently"
                : confirm === "archive"
                  ? "Yes, archive"
                  : "Yes, reactivate"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

// --------------------------------------------------------------------------
// Identity (full replace — every value param is always sent)
// --------------------------------------------------------------------------

const identitySchema = z.object({
  name: z.string().trim().min(1, "Please enter a product name."),
  description: z.string().optional(),
  categoryId: z.string().optional(),
  sku: z.string().optional(),
  barcode: z.string().optional(),
});
type IdentityForm = z.infer<typeof identitySchema>;

function IdentityDialog({
  open,
  onOpenChange,
  product,
  categories,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  product: ProductDetail;
  categories: CatalogCategory[];
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [reconciling, setReconciling] = useState(false);
  const form = useForm<IdentityForm>({
    resolver: zodResolver(identitySchema),
    defaultValues: {
      name: product.name,
      description: product.description ?? "",
      categoryId: product.category_id ?? NO_CATEGORY,
      sku: product.sku ?? "",
      barcode: product.barcode ?? "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (v: IdentityForm) =>
      runCommandWithRecovery(
        "update_catalog_product_identity",
        idempotencyKey,
        () =>
          updateProductIdentity({
            idempotencyKey,
            productId: product.id,
            name: v.name.trim(),
            description: v.description?.trim() ? v.description.trim() : null,
            categoryId: v.categoryId && v.categoryId !== NO_CATEGORY ? v.categoryId : null,
            sku: v.sku?.trim() ? v.sku.trim() : null,
            barcode: v.barcode?.trim() ? v.barcode.trim() : null,
          }),
        "default",
        () => setReconciling(true),
      ),
    onSuccess: () => {
      setReconciling(false);
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Identity update failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null),
      });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (mutation.isPending) return;
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-h-[85vh] max-w-md overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit product details</DialogTitle>
          <DialogDescription>
            These details replace the product's current name, category, SKU, barcode, and
            description together.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="No category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={NO_CATEGORY}>No category</SelectItem>
                      {categories.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="barcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Barcode</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {reconciling ? <ReconcilingNote /> : null}
            {form.formState.errors.root ? (
              <RootError message={form.formState.errors.root.message} />
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
                Save details
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function ReconcilingNote() {
  return (
    <p className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
      Checking what happened…
    </p>
  );
}

function RootError({ message }: { message?: string }) {
  return (
    <p
      role="alert"
      className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
    >
      {message}
    </p>
  );
}

// --------------------------------------------------------------------------
// Unit (only when the product has no inventory link)
// --------------------------------------------------------------------------

const unitSchema = z.object({
  sellingUnit: z.string().trim().min(1, "Please enter the selling unit."),
});
type UnitForm = z.infer<typeof unitSchema>;

function UnitDialog({
  open,
  onOpenChange,
  product,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  product: ProductDetail;
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [reconciling, setReconciling] = useState(false);
  const form = useForm<UnitForm>({
    resolver: zodResolver(unitSchema),
    defaultValues: { sellingUnit: product.selling_unit },
  });

  const mutation = useMutation({
    mutationFn: async (v: UnitForm) =>
      runCommandWithRecovery(
        "update_catalog_product_unit",
        idempotencyKey,
        () =>
          updateProductUnit({
            idempotencyKey,
            productId: product.id,
            sellingUnit: v.sellingUnit,
          }),
        "unit",
        () => setReconciling(true),
      ),
    onSuccess: () => {
      setReconciling(false);
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Unit update failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null, "unit"),
      });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (mutation.isPending) return;
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Change selling unit</DialogTitle>
          <DialogDescription>
            The selling unit is how you quote this product's price (for example per piece, per
            kg, per plate).
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-4">
            <FormField
              control={form.control}
              name="sellingUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selling unit</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. piece, kg, plate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {reconciling ? <ReconcilingNote /> : null}
            {form.formState.errors.root ? (
              <RootError message={form.formState.errors.root.message} />
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
                Save unit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// --------------------------------------------------------------------------
// Selling price
// --------------------------------------------------------------------------

const priceSchema = z.object({
  price: z
    .string()
    .min(1, "Enter a selling price.")
    .refine((v) => Number.isFinite(Number(v)) && Number(v) > 0, {
      message: "Selling price must be greater than zero.",
    }),
});
type PriceForm = z.infer<typeof priceSchema>;

function PriceDialog({
  open,
  onOpenChange,
  product,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  product: ProductDetail;
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [reconciling, setReconciling] = useState(false);
  const form = useForm<PriceForm>({
    resolver: zodResolver(priceSchema),
    defaultValues: { price: "" },
  });

  const mutation = useMutation({
    mutationFn: async (v: PriceForm) =>
      runCommandWithRecovery(
        "record_catalog_selling_price_change",
        idempotencyKey,
        () =>
          recordSellingPriceChange({
            idempotencyKey,
            productId: product.id,
            newPrice: Number(v.price),
          }),
        "default",
        () => setReconciling(true),
      ),
    onSuccess: () => {
      setReconciling(false);
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Price change failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null),
      });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (mutation.isPending) return;
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Record new selling price</DialogTitle>
          <DialogDescription>
            Price changes are recorded as history — earlier prices are never overwritten.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New price per {product.selling_unit}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {reconciling ? <ReconcilingNote /> : null}
            {form.formState.errors.root ? (
              <RootError message={form.formState.errors.root.message} />
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
                Save price
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// --------------------------------------------------------------------------
// Tax treatment (rate is required exactly when the treatment is specific)
// --------------------------------------------------------------------------

const taxSchema = z
  .object({
    treatment: z.enum([
      "inherit_business_default",
      "product_specific_rate",
      "non_taxable",
    ]),
    ratePercent: z.string().optional(),
  })
  .refine(
    (v) =>
      v.treatment !== "product_specific_rate" ||
      (!!v.ratePercent?.trim() &&
        Number.isFinite(Number(v.ratePercent)) &&
        Number(v.ratePercent) >= 0),
    {
      message: "Enter the tax rate for this product.",
      path: ["ratePercent"],
    },
  );
type TaxForm = z.infer<typeof taxSchema>;

function TaxDialog({
  open,
  onOpenChange,
  product,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  product: ProductDetail;
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [reconciling, setReconciling] = useState(false);
  const form = useForm<TaxForm>({
    resolver: zodResolver(taxSchema),
    defaultValues: {
      treatment: product.tax_treatment,
      ratePercent:
        product.tax_rate_percent === null ? "" : String(Number(product.tax_rate_percent)),
    },
  });

  const treatment = form.watch("treatment");

  const mutation = useMutation({
    mutationFn: async (v: TaxForm) =>
      runCommandWithRecovery(
        "record_catalog_tax_change",
        idempotencyKey,
        () =>
          recordTaxChange({
            idempotencyKey,
            productId: product.id,
            treatment: v.treatment as TaxTreatment,
            ratePercent:
              v.treatment === "product_specific_rate" ? Number(v.ratePercent) : null,
          }),
        "default",
        () => setReconciling(true),
      ),
    onSuccess: () => {
      setReconciling(false);
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Tax change failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null),
      });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (mutation.isPending) return;
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Change tax treatment</DialogTitle>
          <DialogDescription>
            Choose how tax applies to this product. Tax changes are recorded as history.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-4">
            <FormField
              control={form.control}
              name="treatment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax treatment</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="inherit_business_default">
                        Use business default
                      </SelectItem>
                      <SelectItem value="product_specific_rate">
                        Product-specific rate
                      </SelectItem>
                      <SelectItem value="non_taxable">Non-taxable</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {treatment === "product_specific_rate" ? (
              <FormField
                control={form.control}
                name="ratePercent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax rate %</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        placeholder="e.g. 5"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : null}
            {reconciling ? <ReconcilingNote /> : null}
            {form.formState.errors.root ? (
              <RootError message={form.formState.errors.root.message} />
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
                Save tax treatment
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// --------------------------------------------------------------------------
// Reference cost
// --------------------------------------------------------------------------

const costSchema = z.object({
  cost: z
    .string()
    .min(1, "Enter a reference cost.")
    .refine((v) => Number.isFinite(Number(v)) && Number(v) >= 0, {
      message: "Reference cost cannot be negative.",
    }),
});
type CostForm = z.infer<typeof costSchema>;

function CostDialog({
  open,
  onOpenChange,
  product,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  product: ProductDetail;
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [reconciling, setReconciling] = useState(false);
  const form = useForm<CostForm>({
    resolver: zodResolver(costSchema),
    defaultValues: { cost: "" },
  });

  const mutation = useMutation({
    mutationFn: async (v: CostForm) =>
      runCommandWithRecovery(
        "record_catalog_reference_cost_change",
        idempotencyKey,
        () =>
          recordReferenceCostChange({
            idempotencyKey,
            productId: product.id,
            newCost: Number(v.cost),
          }),
        "default",
        () => setReconciling(true),
      ),
    onSuccess: () => {
      setReconciling(false);
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Reference cost change failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null),
      });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (mutation.isPending) return;
        onOpenChange(v);
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Record reference cost</DialogTitle>
          <DialogDescription>
            Reference cost is what this product costs you per {product.selling_unit}. It is only
            shown here, never in the catalog list.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-4">
            <FormField
              control={form.control}
              name="cost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New reference cost</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {reconciling ? <ReconcilingNote /> : null}
            {form.formState.errors.root ? (
              <RootError message={form.formState.errors.root.message} />
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
                Save reference cost
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// --------------------------------------------------------------------------
// D-068 — inventory link: preview (no idempotency key) → explicit confirm
// (fresh idempotency key). Never a single combined call.
// --------------------------------------------------------------------------

function InventoryLinkFlow({
  action,
  product,
  businessId,
  onClose,
  onDone,
}: {
  action: null | "assign_or_replace" | "remove";
  product: ProductDetail;
  businessId: string | null;
  onClose: () => void;
  onDone: () => void;
}) {
  const [targetItemId, setTargetItemId] = useState<string>("");
  const [preview, setPreview] = useState<LinkPreviewResult | null>(null);
  const [previewing, setPreviewing] = useState(false);
  const [confirmedPrice, setConfirmedPrice] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [reconciling, setReconciling] = useState(false);
  const [idempotencyKey, setIdempotencyKey] = useState(() => newIdempotencyKey());

  const itemsQuery = useQuery({
    queryKey: ["catalog", "inventory-picker", businessId],
    enabled: !!businessId && action === "assign_or_replace",
    queryFn: () => listInventoryItemsForPicker(businessId as string),
  });

  const items = itemsQuery.data ?? [];
  const itemNameById = useMemo(
    () => new Map(items.map((i) => [i.id, `${i.name} (${i.base_unit})`])),
    [items],
  );

  // Live countdown for the 15-minute preview validity window.
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!preview?.expires_at) return;
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, [preview?.expires_at]);

  const expiresAt = preview?.expires_at ? new Date(preview.expires_at) : null;
  const secondsLeft = expiresAt ? Math.max(0, Math.floor((expiresAt.getTime() - now) / 1000)) : 0;

  function discardPreview() {
    setPreview(null);
    setConfirmedPrice("");
    setIdempotencyKey(newIdempotencyKey());
  }

  async function runPreview() {
    if (!action) return;
    setError(null);
    setPreviewing(true);
    try {
      const result = await previewInventoryLinkChange({
        productId: product.id,
        requestedAction: action,
        targetInventoryItemId: action === "assign_or_replace" ? targetItemId : null,
      });
      if (result.outcome !== "completed" || !result.preview_token_id) {
        setError(rejectionMessage(result.rejection_reason, "link"));
        setPreview(null);
        return;
      }
      setConfirmedPrice("");
      setIdempotencyKey(newIdempotencyKey());
      setPreview(result);
    } catch (err) {
      console.error("Link preview failed:", err);
      setError("We couldn't prepare this change. Please try again.");
    } finally {
      setPreviewing(false);
    }
  }

  const priceRequired = preview?.price_confirmation_required === true;

  const confirmMutation = useMutation({
    mutationFn: async () => {
      if (!preview?.preview_token_id) throw new Error("No preview to confirm.");
      setError(null);
      if (action === "remove") {
        return runCommandWithRecovery(
          "remove_catalog_inventory_link",
          idempotencyKey,
          () =>
            removeInventoryLink({
              idempotencyKey,
              previewTokenId: preview.preview_token_id as string,
            }),
          "link",
          () => setReconciling(true),
        );
      }
      return runCommandWithRecovery(
        "assign_or_replace_catalog_inventory_link",
        idempotencyKey,
        () =>
          assignOrReplaceInventoryLink({
            idempotencyKey,
            previewTokenId: preview.preview_token_id as string,
            confirmedPrice: priceRequired ? Number(confirmedPrice) : null,
          }),
        "link",
        () => setReconciling(true),
      );
    },
    onSuccess: () => {
      setReconciling(false);
      discardPreview();
      onDone();
      onClose();
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Link confirm failed:", err);
      setError(err instanceof Error ? err.message : rejectionMessage(null, "link"));
      // A rejected token is never reused — force a fresh preview.
      discardPreview();
    },
  });

  const open = action !== null;
  const priceInvalid =
    priceRequired && (!confirmedPrice.trim() || !(Number(confirmedPrice) > 0));

  return (
    <>
      <Dialog
        open={open && !preview}
        onOpenChange={(v) => {
          if (previewing) return;
          if (!v) {
            setError(null);
            setTargetItemId("");
            onClose();
          }
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {action === "remove"
                ? "Remove inventory link"
                : product.inventory_item_id
                  ? "Replace inventory link"
                  : "Link an inventory item"}
            </DialogTitle>
            <DialogDescription>
              {action === "remove"
                ? "We'll show you exactly what changes before anything is saved."
                : "Choose the inventory item that supplies this product. We'll show you exactly what changes before anything is saved."}
            </DialogDescription>
          </DialogHeader>
          {action === "assign_or_replace" ? (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="link-item">
                Inventory item
              </label>
              {itemsQuery.isPending ? (
                <Skeleton className="h-10 w-full rounded-md" />
              ) : items.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  You don't have any active inventory items yet. Create one in Inventory first.
                </p>
              ) : (
                <Select value={targetItemId} onValueChange={setTargetItemId}>
                  <SelectTrigger id="link-item">
                    <SelectValue placeholder="Choose an inventory item" />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((i) => (
                      <SelectItem key={i.id} value={i.id}>
                        {i.name} ({i.base_unit})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ) : null}
          {error ? <RootError message={error} /> : null}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={previewing}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => void runPreview()}
              disabled={
                previewing || (action === "assign_or_replace" && !targetItemId)
              }
            >
              {previewing ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
              ) : null}
              Review this change
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={open && !!preview}
        onOpenChange={(v) => {
          if (confirmMutation.isPending) return;
          if (!v) {
            discardPreview();
            onClose();
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {action === "remove" ? "Confirm link removal" : "Confirm inventory link"}
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Currently:{" "}
                  {preview?.current_inventory_item_id
                    ? (itemNameById.get(preview.current_inventory_item_id) ??
                      "a linked inventory item")
                    : "not linked to any inventory item"}
                  , sold per {preview?.current_selling_unit ?? product.selling_unit}
                  {preview?.current_selling_price !== null &&
                  preview?.current_selling_price !== undefined
                    ? ` at ${formatCurrencyINR(Number(preview.current_selling_price))}`
                    : ", price not set"}
                  .
                </p>
                <p>
                  After this change:{" "}
                  {preview?.proposed_inventory_item_id
                    ? (itemNameById.get(preview.proposed_inventory_item_id) ??
                      "the selected inventory item")
                    : "not linked to any inventory item"}
                  , sold per {preview?.proposed_selling_unit ?? product.selling_unit}.
                </p>
                <p>
                  This preview is valid for 15 minutes
                  {expiresAt
                    ? ` — until ${format(expiresAt, "h:mm a")} (${formatCountdown(secondsLeft)} left)`
                    : ""}
                  .
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          {priceRequired ? (
            <div className="space-y-2">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="confirmed-price"
              >
                Selling price per {preview?.proposed_selling_unit ?? product.selling_unit}
              </label>
              <Input
                id="confirmed-price"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                placeholder="Enter the price for the new unit"
                value={confirmedPrice}
                onChange={(e) => setConfirmedPrice(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                The unit is changing, so the previous price no longer means the same thing.
                Please enter the price for the new unit.
              </p>
            </div>
          ) : null}

          {reconciling ? <ReconcilingNote /> : null}
          {error ? <RootError message={error} /> : null}

          <AlertDialogFooter>
            <AlertDialogCancel
              disabled={confirmMutation.isPending}
              onClick={() => {
                discardPreview();
                onClose();
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                if (priceInvalid) return;
                confirmMutation.mutate();
              }}
              disabled={confirmMutation.isPending || priceInvalid}
            >
              {confirmMutation.isPending ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
              ) : null}
              {action === "remove" ? "Yes, remove link" : "Yes, save link"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function formatCountdown(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
