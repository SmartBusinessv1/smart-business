import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { LogOut, Menu, X, Loader2, CheckCircle2, Pencil } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import {
  createTransaction,
  correctTransaction,
  listRecentTransactions,
  PAYMENT_METHODS,
  type PaymentMethod,
  type Transaction,
  type TransactionType,
} from "@/integrations/supabase/transactions";
import { formatCurrencyINR, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/_authenticated/transactions")({
  head: () => ({
    meta: [
      { title: "Transactions — Smart Business" },
      {
        name: "description",
        content: "Record sales and purchases and see your recent business activity.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: TransactionsBoundary,
});

// Selecting the same columns and query key as the dashboard's business query
// so both routes always share one consistent React Query cache entry.
type Business = {
  id: string;
  name: string;
  category: string;
  locality: string;
};

function todayISO(): string {
  return format(new Date(), "yyyy-MM-dd");
}

function AuthedHeader({ email, onSignOut }: { email: string | null; onSignOut: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 group"
          aria-label="Smart Business workspace — home"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold shadow-sm transition-transform group-hover:scale-105"
          >
            SB
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Smart Business
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Workspace
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Workspace">
          <Link
            to="/dashboard"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Workspace
          </Link>
          <Link
            to="/transactions"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Transactions
          </Link>
          {email ? (
            <span className="hidden text-xs text-muted-foreground lg:inline" title={email}>
              {email}
            </span>
          ) : null}
          <button
            type="button"
            onClick={onSignOut}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Sign out
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 md:hidden">
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6"
            aria-label="Mobile workspace"
          >
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Workspace
            </Link>
            <Link
              to="/transactions"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Transactions
            </Link>
            {email ? (
              <span className="px-3 pt-2 text-xs text-muted-foreground">{email}</span>
            ) : null}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onSignOut();
              }}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-transparent px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Sign out
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function TransactionsBoundary() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);

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

  async function handleSignOut() {
    setSigningOut(true);
    try {
      await queryClient.cancelQueries();
      queryClient.clear();
      await supabase.auth.signOut();
      navigate({ to: "/auth", replace: true });
    } finally {
      setSigningOut(false);
    }
  }

  if (businessQuery.isError) {
    console.error("Transactions business load failed:", businessQuery.error);
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <AuthedHeader
        email={user?.email ?? null}
        onSignOut={() => {
          if (!signingOut) void handleSignOut();
        }}
      />
      <main className="flex-1">
        {businessQuery.isPending ? (
          <PageLoadingState />
        ) : businessQuery.isError ? (
          <PageErrorState
            message="We couldn't load your business. Please try again or contact support."
            onRetry={() => void businessQuery.refetch()}
          />
        ) : businessQuery.data ? (
          <TransactionsWorkspace business={businessQuery.data} />
        ) : (
          <NoBusinessYet />
        )}
      </main>
    </div>
  );
}

function PageLoadingState() {
  return (
    <section className="mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-24 sm:px-6">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        <span className="text-sm">Loading…</span>
      </div>
    </section>
  );
}

function PageErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
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
          Finish setting up your business identity in your workspace before recording sales and
          purchases.
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

function TransactionsWorkspace({ business }: { business: Business }) {
  const queryClient = useQueryClient();

  const timelineQuery = useQuery({
    queryKey: ["transactions", business.id, "timeline"],
    queryFn: () => listRecentTransactions(business.id, 50),
  });

  function handleCreated() {
    void queryClient.invalidateQueries({ queryKey: ["transactions", business.id] });
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Business operations
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Record a sale or purchase
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Keep a simple, running record of what {business.name} sells and buys. Every entry appears
          in the timeline below as soon as it's saved.
        </p>
      </header>

      <section aria-labelledby="entry-heading" className="mt-10">
        <h2 id="entry-heading" className="sr-only">
          Record a transaction
        </h2>
        <Tabs defaultValue="sale" className="w-full">
          <TabsList>
            <TabsTrigger value="sale">Record a sale</TabsTrigger>
            <TabsTrigger value="purchase">Record a purchase</TabsTrigger>
          </TabsList>
          <TabsContent value="sale">
            <TransactionEntryForm
              key="sale"
              businessId={business.id}
              transactionType="sale"
              onCreated={handleCreated}
            />
          </TabsContent>
          <TabsContent value="purchase">
            <TransactionEntryForm
              key="purchase"
              businessId={business.id}
              transactionType="purchase"
              onCreated={handleCreated}
            />
          </TabsContent>
        </Tabs>
      </section>

      <section aria-labelledby="timeline-heading" className="mt-12">
        <h2
          id="timeline-heading"
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Transaction timeline
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Your most recent sales and purchases, newest first.
        </p>
        <div className="mt-5">
          {timelineQuery.isPending ? (
            <TimelineLoadingState />
          ) : timelineQuery.isError ? (
            <PageErrorState
              message="We couldn't load your transactions. Please try again or contact support."
              onRetry={() => void timelineQuery.refetch()}
            />
          ) : timelineQuery.data.length === 0 ? (
            <TimelineEmptyState />
          ) : (
            <ul className="space-y-3">
              {timelineQuery.data.map((transaction) => (
                <TransactionRow key={transaction.id} transaction={transaction} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </section>
  );
}

function TimelineLoadingState() {
  return (
    <div className="space-y-3">
      {[0, 1, 2].map((i) => (
        <Skeleton key={i} className="h-20 w-full rounded-xl" />
      ))}
    </div>
  );
}

function TimelineEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border/70 bg-muted/30 p-8 text-center">
      <p className="text-sm font-medium text-foreground">No transactions yet</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Record your first sale or purchase above to see it here.
      </p>
    </div>
  );
}

function TransactionRow({ transaction }: { transaction: Transaction }) {
  const isSale = transaction.transaction_type === "sale";
  const paymentLabel =
    PAYMENT_METHODS.find((method) => method.value === transaction.payment_method)?.label ??
    transaction.payment_method;

  return (
    <li className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={cn(
              "shrink-0",
              isSale
                ? "border-emerald-600/30 text-emerald-700 dark:text-emerald-400"
                : "border-amber-600/30 text-amber-700 dark:text-amber-400",
            )}
          >
            {isSale ? "Sale" : "Purchase"}
          </Badge>
          <span className="font-medium text-card-foreground">{transaction.party_name}</span>
        </div>
        <span
          className={cn(
            "shrink-0 text-sm font-semibold",
            isSale
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-amber-700 dark:text-amber-400",
          )}
        >
          {isSale ? "+" : "−"}
          {formatCurrencyINR(Number(transaction.amount))}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{transaction.description}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span>{format(new Date(`${transaction.transaction_date}T00:00:00`), "d MMM yyyy")}</span>
        <span aria-hidden="true">·</span>
        <span>{paymentLabel}</span>
      </div>
    </li>
  );
}

const transactionFormSchema = z.object({
  transactionDate: z.string().min(1, "Please choose a date."),
  partyName: z.string().trim().min(1, "This field is required."),
  description: z.string().trim().min(1, "Description is required."),
  amount: z
    .string()
    .min(1, "Amount is required.")
    .refine((value) => Number.isFinite(Number(value)) && Number(value) > 0, {
      message: "Enter an amount greater than zero.",
    }),
  paymentMethod: z.string().min(1, "Select a payment method."),
  notes: z.string().optional(),
});

type TransactionFormValues = z.infer<typeof transactionFormSchema>;

function emptyFormValues(): TransactionFormValues {
  return {
    transactionDate: todayISO(),
    partyName: "",
    description: "",
    amount: "",
    paymentMethod: "",
    notes: "",
  };
}

function TransactionEntryForm({
  businessId,
  transactionType,
  onCreated,
}: {
  businessId: string;
  transactionType: TransactionType;
  onCreated: () => void;
}) {
  const { user } = useAuth();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const copy =
    transactionType === "sale"
      ? {
          partyLabel: "Customer name",
          partyPlaceholder: "e.g. Walk-in customer",
          descriptionPlaceholder: "e.g. 2 bread loaves, 1 milk packet",
          submitLabel: "Save sale",
          successLabel: "Sale saved.",
        }
      : {
          partyLabel: "Supplier name",
          partyPlaceholder: "e.g. Anand Wholesale Traders",
          descriptionPlaceholder: "e.g. Weekly vegetable restock",
          submitLabel: "Save purchase",
          successLabel: "Purchase saved.",
        };

  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: emptyFormValues(),
  });

  const createMutation = useMutation({
    mutationFn: async (values: TransactionFormValues) => {
      if (!user?.id) {
        throw new Error("You must be signed in to record a transaction.");
      }
      return createTransaction({
        businessId,
        creatorId: user.id,
        transactionType,
        transactionDate: values.transactionDate,
        partyName: values.partyName,
        description: values.description,
        amount: Number(values.amount),
        paymentMethod: values.paymentMethod as PaymentMethod,
        notes: values.notes,
      });
    },
    onSuccess: () => {
      setSuccessMessage(copy.successLabel);
      form.reset(emptyFormValues());
      onCreated();
    },
    onError: (err) => {
      console.error(`Failed to save ${transactionType}:`, err);
      form.setError("root", {
        message: "We couldn't save this. Please check the details and try again.",
      });
    },
  });

  function handleSubmit(values: TransactionFormValues) {
    setSuccessMessage(null);
    createMutation.mutate(values);
  }

  const submitting = createMutation.isPending;

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-base">
          {transactionType === "sale" ? "Sale details" : "Purchase details"}
        </CardTitle>
        <CardDescription>Fields marked required must be filled before saving.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            onChange={() => setSuccessMessage(null)}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="transactionDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" disabled={submitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="partyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{copy.partyLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={copy.partyPlaceholder} disabled={submitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={copy.descriptionPlaceholder}
                      disabled={submitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (₹)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        inputMode="decimal"
                        min="0.01"
                        step="0.01"
                        placeholder="0.00"
                        disabled={submitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ? field.value : undefined}
                      disabled={submitting}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a method" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {PAYMENT_METHODS.map((method) => (
                          <SelectItem key={method.value} value={method.value}>
                            {method.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea rows={2} disabled={submitting} {...field} />
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

            {successMessage ? (
              <p
                role="status"
                className="flex items-center gap-2 rounded-md border border-border/60 bg-muted px-3 py-2 text-sm text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                {successMessage}
              </p>
            ) : null}

            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
              {submitting ? "Saving…" : copy.submitLabel}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
