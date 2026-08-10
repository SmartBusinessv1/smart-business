// SB-P-1.11 — Catalog list: keyset search, product creation, flat category
// management, and the write-only business tax settings control. Every write
// goes through a named catalog command in @/integrations/supabase/catalog.
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Loader2, Plus, Search, Archive, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import {
  archiveCategoryRaw,
  createCategory,
  createProduct,
  listAllCategories,
  newIdempotencyKey,
  rejectionMessage,
  runCommandWithRecovery,
  searchProducts,
  updateBusinessTaxSettings,
  type CatalogCategory,
  type PricingMode,
  type ProductSummary,
} from "@/integrations/supabase/catalog";
import { formatCurrencyINR } from "@/lib/utils";
import { SellingUnitSelector } from "@/components/catalog/selling-unit-selector";
import {
  CategorySelector,
  type CreateCategoryResult,
} from "@/components/catalog/category-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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

export const Route = createFileRoute("/_authenticated/catalog/")({
  head: () => ({
    meta: [
      { title: "Product catalog — Smart Business" },
      {
        name: "description",
        content:
          "Your product catalog: names, units, selling prices, tax treatment, and inventory links.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: CatalogIndexBoundary,
});

type Business = { id: string; name: string };

const PAGE_SIZE = 25;
const ALL_CATEGORIES = "__all__";
const NO_CATEGORY = "__none__";

function CatalogIndexBoundary() {
  const { user } = useAuth();
  const userId = user?.id ?? null;

  const businessQuery = useQuery({
    queryKey: ["business", userId],
    enabled: !!userId,
    queryFn: async (): Promise<Business | null> => {
      const { data, error } = await supabase.from("businesses").select("id, name").maybeSingle();
      if (error) throw error;
      return (data as Business | null) ?? null;
    },
  });

  if (businessQuery.isPending) {
    return (
      <section className="mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-24 sm:px-6">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          <span className="text-sm">Loading catalog…</span>
        </div>
      </section>
    );
  }
  if (businessQuery.isError) {
    console.error("Catalog business load failed:", businessQuery.error);
    return (
      <ErrorSection
        message="We couldn't load your workspace. Please try again or contact support."
        onRetry={() => void businessQuery.refetch()}
      />
    );
  }
  if (!businessQuery.data) return <NoBusinessYet />;
  return <CatalogWorkspace />;
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
        <h1 className="text-xl font-semibold text-card-foreground">Set up your business first</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Finish setting up your business identity before building your catalog.
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

function CatalogWorkspace() {
  const [search, setSearch] = useState("");
  const [includeArchived, setIncludeArchived] = useState(false);
  const [categoryId, setCategoryId] = useState<string>(ALL_CATEGORIES);
  const [pages, setPages] = useState<ProductSummary[][]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);

  const allCategoriesQuery = useQuery({
    queryKey: ["catalog", "categories", "all"],
    queryFn: listAllCategories,
  });

  const listKey = ["catalog", "products", { search, includeArchived, categoryId }] as const;

  const productsQuery = useQuery({
    queryKey: listKey,
    queryFn: async () => {
      const rows = await searchProducts({
        query: search,
        includeArchived,
        categoryId: categoryId === ALL_CATEGORIES ? null : categoryId,
        limit: PAGE_SIZE,
      });
      setPages([]);
      setLoadMoreError(null);
      return rows;
    },
  });

  const firstPage = productsQuery.data ?? [];
  const rows: ProductSummary[] = [...firstPage, ...pages.flat()];
  const lastRow = rows[rows.length - 1];
  const canLoadMore =
    (pages.length === 0 ? firstPage.length : (pages[pages.length - 1]?.length ?? 0)) === PAGE_SIZE;

  async function loadMore() {
    if (!lastRow || loadingMore) return;
    setLoadingMore(true);
    setLoadMoreError(null);
    try {
      const next = await searchProducts({
        query: search,
        includeArchived,
        categoryId: categoryId === ALL_CATEGORIES ? null : categoryId,
        limit: PAGE_SIZE,
        cursor: {
          matchRank: lastRow.match_rank,
          nameNormalized: lastRow.name_normalized,
          id: lastRow.id,
        },
      });
      setPages((prev) => [...prev, next]);
    } catch (err) {
      console.error("Catalog load more failed:", err);
      setLoadMoreError("We couldn't load more products. Please try again.");
    } finally {
      setLoadingMore(false);
    }
  }

  const allCategories = allCategoriesQuery.data ?? [];
  const categories = allCategories.filter((c) => c.status === "active");
  const categoryNameById = new Map(categories.map((c) => [c.id, c.name]));

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Business operations
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Product catalog
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            What you sell, how it is priced, and how it is taxed. Selling prices, tax treatment, and
            cost are recorded on each product after it is created.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/catalog/import"
            className="inline-flex items-center justify-center rounded-md border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/40"
          >
            <Upload className="mr-1.5 h-4 w-4" aria-hidden="true" />
            Import products
          </Link>
          <Button type="button" onClick={() => setCreateOpen(true)}>
            <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
            New product
          </Button>
        </div>
      </header>

      <section aria-label="Filters" className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
        <label className="relative">
          <span className="sr-only">Search products</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, SKU, or barcode"
            className="pl-9"
          />
        </label>
        <Select value={categoryId} onValueChange={setCategoryId}>
          <SelectTrigger className="sm:w-[200px]" aria-label="Category filter">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL_CATEGORIES}>All categories</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="button"
          variant={includeArchived ? "secondary" : "outline"}
          onClick={() => setIncludeArchived((v) => !v)}
          aria-pressed={includeArchived}
        >
          {includeArchived ? "Hiding nothing — showing archived" : "Show archived"}
        </Button>
      </section>

      <section aria-label="Products" className="mt-6">
        {productsQuery.isPending ? (
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-xl" />
            ))}
          </div>
        ) : productsQuery.isError ? (
          <ErrorSection
            message="We couldn't load your catalog. Please try again."
            onRetry={() => void productsQuery.refetch()}
          />
        ) : rows.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/70 bg-muted/30 p-8 text-center">
            <p className="text-sm font-medium text-foreground">
              {search || categoryId !== ALL_CATEGORIES
                ? "No products match your filters"
                : "No products yet"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {search || categoryId !== ALL_CATEGORIES
                ? "Clear a filter or adjust your search to see more products."
                : "Create your first product to start building your catalog."}
            </p>
            {!search && categoryId === ALL_CATEGORIES ? (
              <Button type="button" onClick={() => setCreateOpen(true)} className="mt-4">
                <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
                Create your first product
              </Button>
            ) : null}
          </div>
        ) : (
          <>
            <ul className="space-y-3">
              {rows.map((p) => (
                <ProductRow
                  key={p.id ?? ""}
                  product={p}
                  categoryName={p.category_id ? categoryNameById.get(p.category_id) : undefined}
                />
              ))}
            </ul>
            {loadMoreError ? (
              <p
                role="alert"
                className="mt-3 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {loadMoreError}
              </p>
            ) : null}
            {canLoadMore ? (
              <div className="mt-4 flex justify-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void loadMore()}
                  disabled={loadingMore}
                >
                  {loadingMore ? (
                    <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : null}
                  Load more
                </Button>
              </div>
            ) : null}
          </>
        )}
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <CategoriesPanel categories={categories} loading={allCategoriesQuery.isPending} />
        <TaxSettingsPanel />
      </div>

      <CreateProductDialog
        key={createOpen ? "open" : "closed"}
        open={createOpen}
        onOpenChange={setCreateOpen}
        allCategories={allCategories}
      />
    </section>
  );
}

function ProductRow({ product, categoryName }: { product: ProductSummary; categoryName?: string }) {
  return (
    <li className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
      <Link
        to="/catalog/$productId"
        params={{ productId: product.id ?? "" }}
        className="flex items-start justify-between gap-3"
        aria-label={`Open ${product.name ?? "product"}`}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-base font-semibold text-card-foreground">
              {product.name}
            </h3>
            {product.status === "archived" ? (
              <Badge variant="outline" className="shrink-0">
                Archived
              </Badge>
            ) : null}
            <Badge
              variant="outline"
              className={
                product.is_stock_tracked ? "shrink-0 border-primary/50 text-primary" : "shrink-0"
              }
            >
              {product.is_stock_tracked ? "Stock tracked" : "Non-stock"}
            </Badge>
          </div>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            Sold per {product.selling_unit}
            {categoryName ? ` · ${categoryName}` : ""}
            {product.sku ? ` · SKU ${product.sku}` : ""}
            {product.barcode ? ` · ${product.barcode}` : ""}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-right">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Selling price
            </p>
            <p className="text-lg font-semibold text-card-foreground">
              {product.current_selling_price === null || product.current_selling_price === undefined
                ? "Not set"
                : formatCurrencyINR(Number(product.current_selling_price))}
            </p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </div>
      </Link>
    </li>
  );
}

// --------------------------------------------------------------------------
// Create product — no selling price is collected at creation (none exists).
// --------------------------------------------------------------------------

const createProductSchema = z.object({
  name: z.string().trim().min(1, "Please enter a product name."),
  description: z.string().trim().optional(),
  categoryId: z.string().optional(),
  sku: z.string().trim().optional(),
  barcode: z.string().trim().optional(),
  sellingUnit: z.string().trim().min(1, "Please enter the selling unit."),
});
type CreateProductForm = z.infer<typeof createProductSchema>;

function CreateProductDialog({
  open,
  onOpenChange,
  allCategories,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  allCategories: CatalogCategory[];
}) {
  const queryClient = useQueryClient();
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [reconciling, setReconciling] = useState(false);

  async function handleCreateCategory(name: string): Promise<CreateCategoryResult> {
    try {
      const key = newIdempotencyKey();
      const result = await runCommandWithRecovery(
        "create_catalog_category",
        key,
        () => createCategory({ idempotencyKey: key, name }),
        "default",
      );
      if (result.outcome === "completed" && result.category_id) {
        void queryClient.invalidateQueries({ queryKey: ["catalog", "categories"] });
        return { id: result.category_id };
      }
      return { error: rejectionMessage(result.rejection_reason) };
    } catch (err) {
      return { error: err instanceof Error ? err.message : rejectionMessage(null) };
    }
  }

  const form = useForm<CreateProductForm>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      categoryId: NO_CATEGORY,
      sku: "",
      barcode: "",
      sellingUnit: "piece",
    },
  });

  const mutation = useMutation({
    mutationFn: async (v: CreateProductForm) =>
      runCommandWithRecovery(
        "create_catalog_product",
        idempotencyKey,
        () =>
          createProduct({
            idempotencyKey,
            name: v.name,
            description: v.description?.trim() ? v.description.trim() : null,
            categoryId: v.categoryId && v.categoryId !== NO_CATEGORY ? v.categoryId : null,
            sku: v.sku?.trim() ? v.sku.trim() : null,
            barcode: v.barcode?.trim() ? v.barcode.trim() : null,
            sellingUnit: v.sellingUnit,
          }),
        "default",
        () => setReconciling(true),
      ),
    onSuccess: () => {
      setReconciling(false);
      void queryClient.invalidateQueries({ queryKey: ["catalog"] });
      onOpenChange(false);
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Create product failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null),
      });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (mutation.isPending) return;
        onOpenChange(next);
      }}
    >
      <DialogContent className="max-h-[85vh] max-w-md overflow-y-auto">
        <DialogHeader>
          <DialogTitle>New product</DialogTitle>
          <DialogDescription>
            Create the product first. Selling price, tax treatment, cost, and any inventory link are
            recorded afterwards on the product's own page.
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
                    <Input placeholder="e.g. Filter coffee (250 ml)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sellingUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selling unit</FormLabel>
                  <FormControl>
                    <SellingUnitSelector value={field.value} onChange={field.onChange} />
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
                  <FormLabel>Category (optional)</FormLabel>
                  <FormControl>
                    <CategorySelector
                      value={field.value ?? NO_CATEGORY}
                      onChange={field.onChange}
                      categories={allCategories}
                      onCreateCategory={handleCreateCategory}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your own product code" {...field} />
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
                  <FormLabel>Barcode (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Printed barcode number" {...field} />
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
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <Textarea rows={2} placeholder="Short description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {reconciling ? (
              <p className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
                Checking what happened…
              </p>
            ) : null}
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
                Create product
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// --------------------------------------------------------------------------
// Categories — flat list, create + archive (with the two-step confirmation).
// --------------------------------------------------------------------------

function CategoriesPanel({
  categories,
  loading,
}: {
  categories: CatalogCategory[];
  loading: boolean;
}) {
  const [createOpen, setCreateOpen] = useState(false);
  const [archiving, setArchiving] = useState<CatalogCategory | null>(null);

  return (
    <Card className="rounded-2xl border-border/60">
      <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
        <CardTitle className="text-base">Categories</CardTitle>
        <Button type="button" variant="outline" size="sm" onClick={() => setCreateOpen(true)}>
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          New category
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-16 w-full rounded-xl" />
        ) : categories.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No categories yet. Categories are optional and grouped in a single flat list.
          </p>
        ) : (
          <ul className="divide-y divide-border/60">
            {categories.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3 py-2.5">
                <span className="truncate text-sm text-card-foreground">{c.name}</span>
                <Button type="button" variant="ghost" size="sm" onClick={() => setArchiving(c)}>
                  <Archive className="mr-1.5 h-4 w-4" aria-hidden="true" />
                  Archive
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CreateCategoryDialog
        key={createOpen ? "cat-open" : "cat-closed"}
        open={createOpen}
        onOpenChange={setCreateOpen}
      />
      <ArchiveCategoryFlow
        key={archiving ? `arch-${archiving.id}` : "arch-none"}
        category={archiving}
        onClose={() => setArchiving(null)}
      />
    </Card>
  );
}

const categorySchema = z.object({
  name: z.string().trim().min(1, "Please enter a category name."),
});
type CategoryForm = z.infer<typeof categorySchema>;

function CreateCategoryDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [reconciling, setReconciling] = useState(false);
  const form = useForm<CategoryForm>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "" },
  });

  const mutation = useMutation({
    mutationFn: async (v: CategoryForm) =>
      runCommandWithRecovery(
        "create_catalog_category",
        idempotencyKey,
        () => createCategory({ idempotencyKey, name: v.name }),
        "default",
        () => setReconciling(true),
      ),
    onSuccess: () => {
      setReconciling(false);
      void queryClient.invalidateQueries({ queryKey: ["catalog"] });
      onOpenChange(false);
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Create category failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null),
      });
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (mutation.isPending) return;
        onOpenChange(next);
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>New category</DialogTitle>
          <DialogDescription>
            Categories are a flat list used to group products in your catalog.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Beverages" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {reconciling ? (
              <p className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
                Checking what happened…
              </p>
            ) : null}
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
                Create category
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Category archive. The first attempt runs without confirmation; if the
 * backend answers rejected/CONFIRMATION_REQUIRED we resubmit the SAME
 * idempotency key with p_confirm_uncategorize: true.
 */
function ArchiveCategoryFlow({
  category,
  onClose,
}: {
  category: CatalogCategory | null;
  onClose: () => void;
}) {
  const queryClient = useQueryClient();
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  // The explicit confirmed attempt (p_confirm_uncategorize: true) is a
  // materially different command from the initial attempt, not a retry of
  // it -- the backend's payload fingerprint differs, so reusing the initial
  // key would make the confirmed call collide as IDEMPOTENCY_CONFLICT
  // instead of completing. Minted exactly once, the first time the backend
  // reports CONFIRMATION_REQUIRED, and reused for any retry of that same
  // confirmed attempt (duplicate-submit and unknown-outcome safety intact).
  const [confirmIdempotencyKey, setConfirmIdempotencyKey] = useState<string | null>(null);
  const [needsConfirm, setNeedsConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reconciling, setReconciling] = useState(false);

  const mutation = useMutation({
    mutationFn: async (confirmUncategorize: boolean) => {
      if (!category) throw new Error("No category selected.");
      setError(null);
      const key = confirmUncategorize ? (confirmIdempotencyKey as string) : idempotencyKey;
      const result = await runCommandWithRecovery(
        "archive_catalog_category",
        key,
        async () =>
          archiveCategoryRaw({
            idempotencyKey: key,
            categoryId: category.id,
            confirmUncategorize,
          }),
        "default",
        () => setReconciling(true),
      );
      return result;
    },
    onSuccess: (result) => {
      setReconciling(false);
      if (result.outcome === "completed") {
        void queryClient.invalidateQueries({ queryKey: ["catalog"] });
        setNeedsConfirm(false);
        onClose();
        return;
      }
      if (result.rejection_reason === "CONFIRMATION_REQUIRED") {
        setConfirmIdempotencyKey((prev) => prev ?? newIdempotencyKey());
        setNeedsConfirm(true);
        return;
      }
      setError(rejectionMessage(result.rejection_reason));
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Archive category failed:", err);
      setError(err instanceof Error ? err.message : rejectionMessage(null));
    },
  });

  const open = !!category;

  return (
    <AlertDialog
      open={open}
      onOpenChange={(v) => {
        if (mutation.isPending) return;
        if (!v) {
          setNeedsConfirm(false);
          setError(null);
          onClose();
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {needsConfirm ? "This category still has products" : "Archive this category?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {needsConfirm
              ? "This category still has products in it. Archiving it will leave those products uncategorized."
              : `Archiving "${category?.name ?? ""}" removes it from the category list for new products.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {reconciling ? (
          <p className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
            Checking what happened…
          </p>
        ) : null}
        {error ? (
          <p
            role="alert"
            className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          >
            {error}
          </p>
        ) : null}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={mutation.isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              mutation.mutate(needsConfirm);
            }}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
            ) : null}
            {needsConfirm ? "Yes, archive and uncategorize" : "Archive category"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// --------------------------------------------------------------------------
// Business tax settings — WRITE-ONLY in this phase. There is no read RPC and
// the table grants no SELECT to `authenticated`, so nothing here claims to
// show the currently stored value.
// --------------------------------------------------------------------------

const taxSettingsSchema = z
  .object({
    pricingMode: z.enum(["tax_inclusive", "tax_exclusive"], {
      message: "Please choose how your prices are quoted.",
    }),
    defaultTaxRate: z.string().optional(),
  })
  .refine(
    (v) =>
      !v.defaultTaxRate?.trim() ||
      (Number.isFinite(Number(v.defaultTaxRate)) && Number(v.defaultTaxRate) >= 0),
    { message: "Enter a valid tax rate, or leave it blank.", path: ["defaultTaxRate"] },
  );
type TaxSettingsForm = z.infer<typeof taxSettingsSchema>;

// EIS Part E §26-27: this is a copy/relationship-clarity fix, not a tax-
// model change. Tax-exclusive does not mean the rate is irrelevant -- it
// means the entered price excludes tax, and applicable tax is added
// separately using the configured rate. The Default Tax Rate field itself
// is never disabled based on mode (see the field below, unchanged).
function PricingModeHelperText({ mode }: { mode: PricingMode | undefined }) {
  if (!mode) return null;
  return (
    <p className="rounded-md border border-border/60 bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
      {mode === "tax_inclusive"
        ? "Tax-inclusive: the prices you enter on products already include tax where tax applies. Nothing is added at the time of sale."
        : "Tax-exclusive: the prices you enter on products exclude tax. Applicable tax is added separately using your default tax rate below (or a product's own rate, if set)."}
    </p>
  );
}

function TaxSettingsPanel() {
  const [idempotencyKey, setIdempotencyKey] = useState(() => newIdempotencyKey());
  const [lastSubmitted, setLastSubmitted] = useState<{
    mode: PricingMode;
    rate: string | null;
  } | null>(null);
  const [reconciling, setReconciling] = useState(false);

  const form = useForm<TaxSettingsForm>({
    resolver: zodResolver(taxSettingsSchema),
    defaultValues: { pricingMode: undefined, defaultTaxRate: "" },
  });

  const mutation = useMutation({
    mutationFn: async (v: TaxSettingsForm) =>
      runCommandWithRecovery(
        "update_business_tax_settings",
        idempotencyKey,
        () =>
          updateBusinessTaxSettings({
            idempotencyKey,
            pricingMode: v.pricingMode,
            defaultTaxRate: v.defaultTaxRate?.trim() ? Number(v.defaultTaxRate) : null,
          }),
        "default",
        () => setReconciling(true),
      ),
    onSuccess: (_r, v) => {
      setReconciling(false);
      setLastSubmitted({
        mode: v.pricingMode,
        rate: v.defaultTaxRate?.trim() ? v.defaultTaxRate.trim() : null,
      });
      setIdempotencyKey(newIdempotencyKey());
    },
    onError: (err) => {
      setReconciling(false);
      console.error("Tax settings update failed:", err);
      form.setError("root", {
        message: err instanceof Error ? err.message : rejectionMessage(null),
      });
    },
  });

  return (
    <Card className="rounded-2xl border-border/60">
      <CardHeader>
        <CardTitle className="text-base">Set your business tax settings</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Saving here records how your prices are quoted and your default tax rate. Your stored
          settings can't be read back on this screen, so nothing below is shown as a current value.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="pricingMode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing mode</FormLabel>
                  <Select value={field.value ?? ""} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a pricing mode" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tax_inclusive">Tax-inclusive</SelectItem>
                      <SelectItem value="tax_exclusive">Tax-exclusive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <PricingModeHelperText mode={form.watch("pricingMode")} />
            <FormField
              control={form.control}
              name="defaultTaxRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default tax rate % (optional)</FormLabel>
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
            {reconciling ? (
              <p className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
                Checking what happened…
              </p>
            ) : null}
            {form.formState.errors.root ? (
              <p
                role="alert"
                className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {form.formState.errors.root.message}
              </p>
            ) : null}
            {lastSubmitted ? (
              <p className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
                Saved just now:{" "}
                {lastSubmitted.mode === "tax_inclusive" ? "Tax-inclusive" : "Tax-exclusive"}
                {lastSubmitted.rate ? `, default rate ${lastSubmitted.rate}%` : ""}.
              </p>
            ) : null}
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
              ) : null}
              Save tax settings
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
