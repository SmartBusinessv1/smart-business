import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/start", label: "Get started" },
  { to: "/contact", label: "Contact" },
] as const;

function SmartBusinessMark() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 group"
      aria-label="Smart Business — home"
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
          AI Business Manager
        </span>
      </span>
    </Link>
  );
}

function AuthAffordance({
  compact,
  onNavigate,
}: {
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [signingOut, setSigningOut] = useState(false);

  async function handleSignOut() {
    if (signingOut) return;
    setSigningOut(true);
    try {
      await queryClient.cancelQueries();
      queryClient.clear();
      await supabase.auth.signOut();
      onNavigate?.();
      navigate({ to: "/auth", replace: true });
    } finally {
      setSigningOut(false);
    }
  }

  if (loading) {
    return (
      <span
        aria-hidden="true"
        className={
          compact
            ? "inline-block h-10 w-full rounded-md bg-muted/60"
            : "inline-block h-9 w-20 rounded-md bg-muted/60"
        }
      />
    );
  }

  if (session) {
    if (compact) {
      return (
        <>
          <Link
            to="/dashboard"
            onClick={onNavigate}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to workspace
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-transparent px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Sign out
          </button>
        </>
      );
    }
    return (
      <div className="ml-2 flex items-center gap-2">
        <Link
          to="/dashboard"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go to workspace
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          aria-label="Sign out"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    );
  }

  if (compact) {
    return (
      <Link
        to="/auth"
        onClick={onNavigate}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Sign in
      </Link>
    );
  }

  return (
    <Link
      to="/auth"
      className="ml-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    >
      Sign in
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <SmartBusinessMark />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <AuthAffordance />
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
            className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <AuthAffordance compact onNavigate={() => setOpen(false)} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <SmartBusinessMark />
          <p className="mt-3 text-sm text-muted-foreground">
            Smart Business is developed by Team LIPS, the technology unit of
            Lighthouse Information Publishing Service.
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          <Link
            to="/privacy-policy"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Team LIPS · Lighthouse Information
          Publishing Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
