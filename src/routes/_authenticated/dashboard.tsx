import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { LogOut, Menu, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Workspace — Smart Business" },
      {
        name: "description",
        content:
          "Your Smart Business workspace. Set up your business identity and enter the calm workspace that will hold your business tools.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: DashboardBoundary,
});

type Business = {
  id: string;
  name: string;
  category: string;
  locality: string;
};

function AuthedHeader({
  email,
  onSignOut,
}: {
  email: string | null;
  onSignOut: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/dashboard" className="flex items-center gap-2 group" aria-label="Smart Business workspace — home">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold shadow-sm transition-transform group-hover:scale-105"
          >
            SB
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">Smart Business</span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Workspace</span>
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

function DashboardBoundary() {
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

  // Log raw query errors for debugging; never render them in the UI.
  if (businessQuery.isError) {
    console.error("Dashboard business load failed:", businessQuery.error);
  }

      <AuthedHeader
        email={user?.email ?? null}
        onSignOut={() => {
          if (!signingOut) void handleSignOut();
        }}
      />
      <main className="flex-1">
        {businessQuery.isPending ? (
          <LoadingState />
        ) : businessQuery.isError ? (
          <ErrorState
            message={businessQuery.error instanceof Error ? businessQuery.error.message : "Unable to load your business."}
            onRetry={() => void businessQuery.refetch()}
          />
        ) : businessQuery.data ? (
          <BusinessWorkspaceFoundation business={businessQuery.data} email={user?.email ?? null} />
        ) : (
          <FirstTimeBusinessSetup userId={userId!} />
        )}
      </main>
    </div>
  );
}

function LoadingState() {
  return (
    <section className="mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-24 sm:px-6">
      <div className="flex items-center gap-3 text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        <span className="text-sm">Preparing your workspace…</span>
      </div>
    </section>
  );
}

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-card-foreground">We couldn't load your workspace</h2>
        <p className="mt-2 text-sm text-muted-foreground">{message}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Try again
        </button>
      </div>
    </section>
  );
}

function FirstTimeBusinessSetup({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [locality, setLocality] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const createBusiness = useMutation({
    mutationFn: async (input: { name: string; category: string; locality: string }) => {
      const { data, error } = await supabase
        .from("businesses")
        .insert({
          owner_id: userId,
          name: input.name.trim(),
          category: input.category.trim(),
          locality: input.locality.trim(),
        })
        .select("id, name, category, locality")
        .single();
      if (error) throw error;
      return data as Business;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["business", userId], data);
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    if (!name.trim() || !category.trim() || !locality.trim()) {
      setErrorMsg("Please fill in all three fields to continue.");
      return;
    }
    createBusiness.mutate(
      { name, category, locality },
      {
        onError: (err) => {
          setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        },
      },
    );
  }

  const submitting = createBusiness.isPending;

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
        First-time setup
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Let's set up your business.
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Tell us a little about your business so Smart Business can prepare your workspace. You can
        keep the details short — this is just to identify your business.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
        <div className="space-y-2">
          <label htmlFor="business-name" className="block text-sm font-medium text-card-foreground">
            Business name
          </label>
          <input
            id="business-name"
            type="text"
            required
            autoComplete="organization"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={submitting}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
            placeholder="e.g. Anand Grocery"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="business-category" className="block text-sm font-medium text-card-foreground">
            Business category
          </label>
          <input
            id="business-category"
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={submitting}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
            placeholder="e.g. Grocery store, Bakery, Pharmacy"
          />
          <p className="text-xs text-muted-foreground">
            Describe your business in your own words.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="business-locality" className="block text-sm font-medium text-card-foreground">
            Business location
          </label>
          <textarea
            id="business-locality"
            required
            rows={3}
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            disabled={submitting}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
            placeholder="Enough detail to identify where your business is"
          />
        </div>

        {errorMsg ? (
          <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {errorMsg}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-70 sm:w-auto"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
          {submitting ? "Setting up…" : "Continue to workspace"}
        </button>
      </form>
    </section>
  );
}

function BusinessWorkspaceFoundation({ business, email }: { business: Business; email: string | null }) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Orientation / welcome */}
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Business workspace
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Welcome, {business.name}.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Your account and your business identity have been successfully established.
          This is your calm, protected workspace — a quiet foundation that will grow, step by step,
          through approved future implementation phases.
        </p>
      </header>

      {/* Identity summary (read-only) */}
      <section aria-labelledby="identity-heading" className="mt-10">
        <SectionHeading id="identity-heading" eyebrow="Your business" title="Business identity" />
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          The details you shared during setup, presented as saved. Editing will arrive through a
          future governed phase.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <IdentityCard label="Business name" value={business.name} />
          <IdentityCard label="Category" value={business.category} />
          <IdentityCard label="Location" value={business.locality} />
        </div>
      </section>

      {/* Forward-visibility of future governed capabilities (non-functional) */}
      <section aria-labelledby="whats-next-heading" className="mt-12">
        <SectionHeading id="whats-next-heading" eyebrow="What's coming next" title="Future capabilities" />
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Smart Business will grow into a trusted assistant for your day-to-day work. These
          capabilities are on the way through approved future phases — nothing here is active yet.
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <ComingSoonCard
            title="Daily records"
            description="Capture sales, purchases, and everyday business activity in a way that fits how you already work."
          />
          <ComingSoonCard
            title="Business reports"
            description="See clear, calm summaries of how your business is doing — without spreadsheets or clutter."
          />
          <ComingSoonCard
            title="Ask CFO"
            description="Ask questions about your business in plain language and receive helpful, non-authoritative guidance."
          />
          <ComingSoonCard
            title="WhatsApp assistant"
            description="Interact with Smart Business through WhatsApp, the way your business already communicates."
          />
        </ul>
      </section>

      {/* Guidance */}
      <section aria-labelledby="guidance-heading" className="mt-12">
        <SectionHeading id="guidance-heading" eyebrow="Guidance" title="What to expect" />
        <div className="mt-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <GuidanceItem>Your business identity is established and safely stored.</GuidanceItem>
            <GuidanceItem>Your session is protected and will persist across visits.</GuidanceItem>
            <GuidanceItem>
              Business capabilities will be introduced only through approved future phases —
              you will always remain in control.
            </GuidanceItem>
            <GuidanceItem>
              Smart Business is an assistant. You make the business decisions.
            </GuidanceItem>
          </ul>
        </div>
      </section>

      {email ? (
        <p className="mt-8 text-xs text-muted-foreground">
          Signed in as <span className="text-foreground">{email}</span>.
        </p>
      ) : null}
    </section>
  );
}

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function IdentityCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4 shadow-sm">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-wrap break-words text-sm font-medium text-card-foreground">
        {value}
      </p>
    </div>
  );
}

function ComingSoonCard({ title, description }: { title: string; description: string }) {
  return (
    <li
      aria-disabled="true"
      className="rounded-xl border border-dashed border-border/70 bg-muted/30 p-5 shadow-none"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <span className="inline-flex shrink-0 items-center rounded-full border border-border/60 bg-background px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Coming soon
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </li>
  );
}

function GuidanceItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  );
}
