import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Smart Business" },
      {
        name: "description",
        content:
          "Sign in to Smart Business — your AI Business Manager. Access is protected; only authorized owners may proceed.",
      },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "Sign in — Smart Business" },
      {
        property: "og:description",
        content: "Sign in to Smart Business — your AI Business Manager.",
      },
    ],
  }),
  component: AuthPage,
});

type Mode = "sign-in" | "sign-up" | "forgot-password";

function AuthPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const { session, loading } = useAuth();

  const [mode, setMode] = useState<Mode>("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ kind: "error" | "info"; text: string } | null>(null);

  // If a signed-in user lands on /auth, send them into the workspace.
  useEffect(() => {
    if (!loading && session) {
      navigate({ to: "/dashboard", replace: true });
    }
  }, [loading, session, navigate]);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setBusy(true);
    try {
      if (mode === "sign-in") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          setMessage({ kind: "error", text: error.message });
          return;
        }
        router.invalidate();
        navigate({ to: "/dashboard", replace: true });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/dashboard` },
        });
        if (error) {
          setMessage({ kind: "error", text: error.message });
          return;
        }
        if (data.session) {
          router.invalidate();
          navigate({ to: "/dashboard", replace: true });
        } else {
          setMessage({
            kind: "info",
            text: "Account created. Please check your email to confirm your address before signing in.",
          });
        }
      }
    } catch (err) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Unexpected error." });
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setMessage(null);
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) {
        setMessage({ kind: "error", text: result.error.message ?? "Google sign-in failed." });
        return;
      }
      if (result.redirected) return;
      router.invalidate();
      navigate({ to: "/dashboard", replace: true });
    } catch (err) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Google sign-in failed." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <SiteLayout>
      <section className="mx-auto flex w-full max-w-md flex-col px-4 py-16 sm:py-24">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Application access
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-card-foreground">
            {mode === "sign-in" ? "Sign in to Smart Business" : "Create your Smart Business account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "sign-in"
              ? "Access is restricted to authorized business owners."
              : "Set up your access to Smart Business. Business setup is introduced in a later phase."}
          </p>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={busy}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-60"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.9 2.3 2.8 6.4 2.8 11.5S6.9 20.7 12 20.7c6.9 0 9.5-4.8 9.5-8.8 0-.6-.1-1-.2-1.7H12z" />
            </svg>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary focus:ring-2"
              />
            </div>

            {message ? (
              <div
                role="alert"
                className={`rounded-md border px-3 py-2 text-sm ${
                  message.kind === "error"
                    ? "border-destructive/40 bg-destructive/10 text-destructive"
                    : "border-border bg-muted text-foreground"
                }`}
              >
                {message.text}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={busy}
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {busy
                ? "Please wait…"
                : mode === "sign-in"
                  ? "Sign in"
                  : "Create account"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "sign-in" ? (
              <>
                New to Smart Business?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("sign-up");
                    setMessage(null);
                  }}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have access?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("sign-in");
                    setMessage(null);
                  }}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
