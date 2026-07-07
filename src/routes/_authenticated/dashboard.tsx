import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Workspace — Smart Business" },
      {
        name: "description",
        content:
          "Your Smart Business workspace. Business configuration and operational capabilities arrive in later governed phases.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: WorkspaceFoundation,
});

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

function WorkspaceFoundation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);

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

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <AuthedHeader
        email={user?.email ?? null}
        onSignOut={() => {
          if (!signingOut) void handleSignOut();
        }}
      />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Workspace foundation
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Welcome to Smart Business.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            You've successfully entered Smart Business and your application access has been
            established. This is your protected workspace — the calm, secure space that will
            hold your business tools as they are introduced.
          </p>

          <div className="mt-8 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-card-foreground">
              Your workspace is ready
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Business configuration and operational capabilities — inventory, records,
              insights, and the AI Business Manager experience — will be introduced through
              future governed implementation phases. Nothing here is broken or missing:
              this foundation is intentionally quiet by design.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Application access has been established.
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Your session is protected and will persist across visits.
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Business capabilities will arrive through approved future phases.
              </li>
            </ul>
          </div>

          {user?.email ? (
            <p className="mt-6 text-xs text-muted-foreground">
              Signed in as <span className="text-foreground">{user.email}</span>.
            </p>
          ) : null}
        </section>
      </main>
    </div>
  );
}
