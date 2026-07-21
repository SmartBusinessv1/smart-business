// SB-P-1.10 — Inventory item detail: identity, current stock, actions,
// history. Every stock-affecting action routes through the shared
// create_inventory_movement operation via `@/integrations/supabase/inventory`.
import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import {
  Archive,
  ArrowLeft,
  ArrowUpCircle,
  ArrowDownCircle,
  Loader2,
  Pencil,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import {
  createMovement,
  getCurrentStock,
  getInventoryItem,
  isNegativeStockError,
  listMovements,
  movementTypeLabel,
  newIdempotencyKey,
  previewMovement,
  remainingCompensable,
  updateItemStatus,
  type InventoryItem,
  type InventoryMovement,
  type MovementDirection,
  type MovementType,
} from "@/integrations/supabase/inventory";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export const Route = createFileRoute("/_authenticated/inventory/$itemId")({
  head: () => ({
    meta: [
      { title: "Inventory item — Smart Business" },
      {
        name: "description",
        content:
          "Current stock, complete movement history, and authorized stock actions for this inventory item.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: ItemDetailBoundary,
});

function ItemDetailBoundary() {
  const { itemId } = Route.useParams();

  const itemQuery = useQuery({
    queryKey: ["inventory", "item", itemId],
    queryFn: () => getInventoryItem(itemId),
  });

  if (itemQuery.isPending) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-4 h-32 w-full rounded-xl" />
      </section>
    );
  }
  if (itemQuery.isError) {
    console.error("Item load failed:", itemQuery.error);
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">
          We couldn't load this item. Please try again.
        </p>
      </section>
    );
  }
  if (!itemQuery.data) {
    return (
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <Link
          to="/inventory"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to inventory
        </Link>
        <h1 className="mt-4 text-xl font-semibold text-foreground">Item not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This inventory item doesn't exist or you don't have access to it.
        </p>
      </section>
    );
  }
  return <ItemDetail item={itemQuery.data} />;
}

function ItemDetail({ item }: { item: InventoryItem }) {
  const queryClient = useQueryClient();

  const stockQuery = useQuery({
    queryKey: ["inventory", "item", item.id, "stock"],
    queryFn: () => getCurrentStock(item.id),
  });

  const historyQuery = useQuery({
    queryKey: ["inventory", "item", item.id, "history"],
    queryFn: () => listMovements(item.id),
  });

  const hasOpeningStock = useMemo(
    () => (historyQuery.data ?? []).some((m) => m.movement_type === "opening_stock"),
    [historyQuery.data],
  );

  const [openingOpen, setOpeningOpen] = useState(false);
  const [adjustOpen, setAdjustOpen] = useState<null | MovementDirection>(null);
  const [correctingId, setCorrectingId] = useState<string | null>(null);

  const statusMutation = useMutation({
    mutationFn: (status: "active" | "archived") => updateItemStatus(item.id, status),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["inventory"] });
    },
    onError: (err) => {
      console.error("Item status update failed:", err);
    },
  });

  function refreshEverything() {
    void queryClient.invalidateQueries({ queryKey: ["inventory"] });
  }

  const currentStock = stockQuery.data ?? 0;
  const isNegative = currentStock < 0;
  const isArchived = item.status === "archived";

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      <Link
        to="/inventory"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to inventory
      </Link>

      <header className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Inventory item
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {item.name}
            </h1>
            {isArchived ? <Badge variant="outline">Archived</Badge> : null}
            {isNegative ? (
              <Badge variant="outline" className="border-destructive/50 text-destructive">
                Negative stock
              </Badge>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Counted in <span className="font-medium text-foreground">{item.base_unit}</span>
          </p>
        </div>
        <div>
          {isArchived ? (
            <Button
              type="button"
              variant="outline"
              onClick={() => statusMutation.mutate("active")}
              disabled={statusMutation.isPending}
            >
              <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Reactivate
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={() => statusMutation.mutate("archived")}
              disabled={statusMutation.isPending}
            >
              <Archive className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Archive
            </Button>
          )}
        </div>
      </header>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Current stock</CardTitle>
        </CardHeader>
        <CardContent>
          {stockQuery.isPending ? (
            <Skeleton className="h-8 w-40" />
          ) : (
            <p
              className={
                isNegative
                  ? "text-3xl font-semibold text-destructive"
                  : "text-3xl font-semibold text-foreground"
              }
            >
              {formatQuantity(currentStock)}{" "}
              <span className="text-base font-medium text-muted-foreground">
                {item.base_unit}
              </span>
            </p>
          )}
          <p className="mt-2 text-sm text-muted-foreground">
            Derived from the complete movement history below.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {!hasOpeningStock ? (
              <Button
                type="button"
                onClick={() => setOpeningOpen(true)}
                disabled={isArchived}
              >
                Record opening stock
              </Button>
            ) : null}
            <Button
              type="button"
              variant="secondary"
              onClick={() => setAdjustOpen("increase")}
              disabled={isArchived}
            >
              <ArrowUpCircle className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Adjustment increase
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setAdjustOpen("decrease")}
              disabled={isArchived}
            >
              <ArrowDownCircle className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Adjustment decrease
            </Button>
          </div>
          {isArchived ? (
            <p className="mt-3 text-xs text-muted-foreground">
              Reactivate this item before recording new stock movements. Corrections against
              existing history remain available.
            </p>
          ) : null}
        </CardContent>
      </Card>

      <section aria-label="Movement history" className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Stock movement history
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Every recorded movement, newest first. Movements cannot be edited — corrections are
          recorded as new linked entries.
        </p>
        <div className="mt-5">
          {historyQuery.isPending ? (
            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <Skeleton key={i} className="h-20 w-full rounded-xl" />
              ))}
            </div>
          ) : historyQuery.isError ? (
            <p className="text-sm text-muted-foreground">
              We couldn't load the movement history. Please try again.
            </p>
          ) : (historyQuery.data ?? []).length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/70 bg-muted/30 p-8 text-center">
              <p className="text-sm font-medium text-foreground">No movements yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {hasOpeningStock
                  ? "Record an adjustment to get started."
                  : "Record opening stock to start this item's history."}
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {(historyQuery.data ?? []).map((m) => (
                <MovementRow
                  key={m.id}
                  movement={m}
                  itemUnit={item.base_unit}
                  onCorrect={() => setCorrectingId(m.id)}
                />
              ))}
            </ul>
          )}
        </div>
      </section>

      {openingOpen ? (
        <OpeningStockDialog
          open={openingOpen}
          onOpenChange={setOpeningOpen}
          item={item}
          onDone={refreshEverything}
        />
      ) : null}
      {adjustOpen ? (
        <AdjustmentDialog
          open={adjustOpen !== null}
          onOpenChange={(v) => {
            if (!v) setAdjustOpen(null);
          }}
          item={item}
          direction={adjustOpen}
          onDone={refreshEverything}
        />
      ) : null}
      {correctingId ? (
        <CorrectionDialog
          open={correctingId !== null}
          onOpenChange={(v) => {
            if (!v) setCorrectingId(null);
          }}
          item={item}
          movement={(historyQuery.data ?? []).find((m) => m.id === correctingId) ?? null}
          onDone={refreshEverything}
        />
      ) : null}
    </section>
  );
}

function MovementRow({
  movement,
  itemUnit,
  onCorrect,
}: {
  movement: InventoryMovement;
  itemUnit: string;
  onCorrect: () => void;
}) {
  const isIncrease = movement.direction === "increase";
  const label = movementTypeLabel(movement.movement_type);
  const occurred = format(new Date(movement.occurred_at), "d MMM yyyy • h:mm a");
  const isCorrection = movement.movement_type === "correction";
  const canCorrect = !isCorrection;

  return (
    <li className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={
              isIncrease
                ? "border-emerald-600/30 text-emerald-700 dark:text-emerald-400"
                : "border-amber-600/30 text-amber-700 dark:text-amber-400"
            }
          >
            {label}
          </Badge>
          {isCorrection ? (
            <span className="text-xs text-muted-foreground">
              corrects earlier movement
            </span>
          ) : null}
        </div>
        <span
          className={
            isIncrease
              ? "shrink-0 text-sm font-semibold text-emerald-700 dark:text-emerald-400"
              : "shrink-0 text-sm font-semibold text-amber-700 dark:text-amber-400"
          }
        >
          {isIncrease ? "+" : "−"}
          {formatQuantity(Number(movement.quantity))} {itemUnit}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">
        {movement.reason}
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs text-muted-foreground">
        <span>{occurred}</span>
        {canCorrect ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={onCorrect}
          >
            <Pencil className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            Correct
          </Button>
        ) : null}
      </div>
    </li>
  );
}

// --------------------------------------------------------------------------
// Opening stock
// --------------------------------------------------------------------------

const openingStockSchema = z.object({
  quantity: z
    .string()
    .min(1, "Enter the opening quantity.")
    .refine((v) => Number.isFinite(Number(v)) && Number(v) > 0, {
      message: "Quantity must be greater than zero.",
    }),
  occurredAt: z.string().min(1, "Choose the opening date."),
  reason: z.string().trim().min(1, "Enter a short reason (e.g. Onboarding count)."),
});
type OpeningStockForm = z.infer<typeof openingStockSchema>;

function OpeningStockDialog({
  open,
  onOpenChange,
  item,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  item: InventoryItem;
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const form = useForm<OpeningStockForm>({
    resolver: zodResolver(openingStockSchema),
    defaultValues: {
      quantity: "",
      occurredAt: todayLocalISO(),
      reason: "Opening stock recorded during onboarding.",
    },
  });

  const mutation = useMutation({
    mutationFn: async (v: OpeningStockForm) => {
      return createMovement({
        idempotencyKey,
        operation: "opening_stock",
        itemId: item.id,
        movementType: "opening_stock",
        direction: "increase",
        quantity: Number(v.quantity),
        reason: v.reason,
        occurredAt: new Date(v.occurredAt).toISOString(),
      });
    },
    onSuccess: () => {
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      console.error("Opening stock failed:", err);
      const msg = err instanceof Error ? err.message : "Please try again.";
      form.setError("root", { message: msg });
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
          <DialogTitle>Record opening stock</DialogTitle>
          <DialogDescription>
            The opening quantity for {item.name} becomes the first entry in its permanent movement
            history. It can only be recorded once.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((v) => mutation.mutate(v))}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opening quantity ({item.base_unit})</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.0001"
                      placeholder="0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="occurredAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opening date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} />
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
                Save opening stock
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// --------------------------------------------------------------------------
// Adjustment (increase / decrease) with negative-stock preview + confirmation
// --------------------------------------------------------------------------

const adjustmentSchema = z.object({
  quantity: z
    .string()
    .min(1, "Enter a quantity.")
    .refine((v) => Number.isFinite(Number(v)) && Number(v) > 0, {
      message: "Quantity must be greater than zero.",
    }),
  reason: z.string().trim().min(1, "Please explain why this adjustment is needed."),
});
type AdjustmentForm = z.infer<typeof adjustmentSchema>;

function AdjustmentDialog({
  open,
  onOpenChange,
  item,
  direction,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  item: InventoryItem;
  direction: MovementDirection;
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [projection, setProjection] = useState<{
    current: number;
    projected: number;
  } | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [authorizeNegative, setAuthorizeNegative] = useState(false);

  const form = useForm<AdjustmentForm>({
    resolver: zodResolver(adjustmentSchema),
    defaultValues: { quantity: "", reason: "" },
  });

  const movementType: MovementType =
    direction === "increase" ? "adjustment_increase" : "adjustment_decrease";

  const mutation = useMutation({
    mutationFn: async (v: AdjustmentForm) => {
      return createMovement({
        idempotencyKey,
        operation: "adjustment",
        itemId: item.id,
        movementType,
        direction,
        quantity: Number(v.quantity),
        reason: v.reason,
        allowNegativeStock: authorizeNegative,
      });
    },
    onSuccess: () => {
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      console.error("Adjustment failed:", err);
      if (isNegativeStockError(err)) {
        // Server confirmed negative — surface confirmation.
        form.setError("root", {
          message:
            "This movement would take stock below zero. Confirm to authorize negative stock.",
        });
        setAuthorizeNegative(false);
        setConfirming(false);
      } else {
        const msg = err instanceof Error ? err.message : "Please try again.";
        form.setError("root", { message: msg });
      }
    },
  });

  async function onSubmit(v: AdjustmentForm) {
    form.clearErrors("root");
    try {
      const preview = await previewMovement(item.id, direction, Number(v.quantity));
      setProjection({ current: preview.currentStock, projected: preview.projectedStock });
      setConfirming(true);
    } catch (err) {
      console.error("Preview failed:", err);
      form.setError("root", { message: "We couldn't preview this adjustment. Please try again." });
    }
  }

  function confirmCommit() {
    const v = form.getValues();
    setConfirming(false);
    mutation.mutate(v);
  }

  const projectionNegative = projection ? projection.projected < 0 : false;

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(v) => {
          if (mutation.isPending) return;
          if (confirming) return;
          onOpenChange(v);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {direction === "increase" ? "Adjustment increase" : "Adjustment decrease"}
            </DialogTitle>
            <DialogDescription>
              Adjustments are recorded as new inventory movements — they never edit or delete
              earlier entries.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity ({item.base_unit})</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.0001"
                        placeholder="0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={2}
                        placeholder={
                          direction === "increase"
                            ? "e.g. Found extra stock during physical count"
                            : "e.g. Damaged during transport"
                        }
                        {...field}
                      />
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
                  Review adjustment
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={confirming}
        onOpenChange={(v) => {
          if (!v) setConfirming(false);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {projectionNegative ? (
                <span className="inline-flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  This will take stock below zero
                </span>
              ) : (
                "Confirm adjustment"
              )}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {projection ? (
                <>
                  Current stock: <strong>{formatQuantity(projection.current)}</strong>{" "}
                  {item.base_unit}. After this movement, projected stock will be{" "}
                  <strong>{formatQuantity(projection.projected)}</strong> {item.base_unit}.
                  {projectionNegative
                    ? " Negative stock must be explicitly authorized before saving."
                    : ""}
                </>
              ) : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          {projectionNegative ? (
            <label className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={authorizeNegative}
                onChange={(e) => setAuthorizeNegative(e.target.checked)}
              />
              <span>
                I authorize negative stock for this item and understand it will be clearly
                flagged in the ledger.
              </span>
            </label>
          ) : null}
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setAuthorizeNegative(false);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                if (projectionNegative && !authorizeNegative) return;
                confirmCommit();
              }}
              disabled={projectionNegative && !authorizeNegative}
            >
              Yes, save adjustment
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

// --------------------------------------------------------------------------
// Correction: creates a new linked movement compensating the original.
// --------------------------------------------------------------------------

const correctionSchema = z.object({
  quantity: z
    .string()
    .min(1, "Enter a quantity to compensate.")
    .refine((v) => Number.isFinite(Number(v)) && Number(v) > 0, {
      message: "Quantity must be greater than zero.",
    }),
  reason: z.string().trim().min(1, "Explain the correction."),
});
type CorrectionForm = z.infer<typeof correctionSchema>;

function CorrectionDialog({
  open,
  onOpenChange,
  item,
  movement,
  onDone,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  item: InventoryItem;
  movement: InventoryMovement | null;
  onDone: () => void;
}) {
  const [idempotencyKey] = useState(() => newIdempotencyKey());
  const [remaining, setRemaining] = useState<number | null>(null);
  const [pending, setPending] = useState<CorrectionForm | null>(null);

  const form = useForm<CorrectionForm>({
    resolver: zodResolver(correctionSchema),
    defaultValues: { quantity: "", reason: "" },
  });

  useEffect(() => {
    if (!movement) return;
    let cancelled = false;
    remainingCompensable(movement.id)
      .then((r) => {
        if (!cancelled) setRemaining(r);
      })
      .catch((err) => {
        console.error("Failed to load remaining compensable:", err);
      });
    return () => {
      cancelled = true;
    };
  }, [movement]);

  const correctionDirection: MovementDirection | null = useMemo(() => {
    if (!movement) return null;
    return movement.direction === "increase" ? "decrease" : "increase";
  }, [movement]);

  const mutation = useMutation({
    mutationFn: async (v: CorrectionForm) => {
      if (!movement || !correctionDirection) throw new Error("No movement selected.");
      return createMovement({
        idempotencyKey,
        operation: "correction",
        itemId: item.id,
        movementType: "correction",
        direction: correctionDirection,
        quantity: Number(v.quantity),
        reason: v.reason,
        correctingOf: movement.id,
      });
    },
    onSuccess: () => {
      onDone();
      onOpenChange(false);
    },
    onError: (err) => {
      console.error("Correction failed:", err);
      setPending(null);
      const msg = err instanceof Error ? err.message : "Please try again.";
      form.setError("root", { message: msg });
    },
  });

  if (!movement || !correctionDirection) return null;

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(v) => {
          if (mutation.isPending) return;
          if (pending !== null) return;
          onOpenChange(v);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Correct movement</DialogTitle>
            <DialogDescription>
              A correction is recorded as a new linked movement. The original stays visible and is
              never edited or removed.
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-md border border-border/60 bg-muted/40 p-3 text-sm">
            <p className="text-muted-foreground">
              Correcting{" "}
              <span className="font-medium text-foreground">
                {movementTypeLabel(movement.movement_type)}
              </span>{" "}
              of{" "}
              <strong>
                {movement.direction === "increase" ? "+" : "−"}
                {formatQuantity(Number(movement.quantity))} {item.base_unit}
              </strong>
              .
            </p>
            {remaining !== null ? (
              <p className="mt-1 text-xs text-muted-foreground">
                Remaining to correct: <strong>{formatQuantity(remaining)}</strong>{" "}
                {item.base_unit}.
              </p>
            ) : null}
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((v) => setPending(v))}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Compensating quantity ({item.base_unit},{" "}
                      {correctionDirection === "increase" ? "adds to" : "removes from"} stock)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.0001"
                        placeholder="0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={2}
                        placeholder="e.g. Quantity was mistyped"
                        {...field}
                      />
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
                  Review correction
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={pending !== null}
        onOpenChange={(v) => {
          if (!v) setPending(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm correction</AlertDialogTitle>
            <AlertDialogDescription>
              This will record a new correction movement of{" "}
              <strong>
                {correctionDirection === "increase" ? "+" : "−"}
                {pending ? formatQuantity(Number(pending.quantity)) : ""} {item.base_unit}
              </strong>{" "}
              linked to the earlier movement. The original stays untouched. Do you want to
              continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                if (pending) mutation.mutate(pending);
              }}
            >
              Yes, save correction
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function todayLocalISO(): string {
  return format(new Date(), "yyyy-MM-dd");
}

function formatQuantity(n: number): string {
  const abs = Math.abs(n);
  const nf = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  return `${n < 0 ? "-" : ""}${nf.format(abs)}`;
}
