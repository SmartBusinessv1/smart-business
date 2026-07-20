import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset password — Smart Business" },
      {
        name: "description",
        content: "Set a new password for your Smart Business account.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [linkValid, setLinkValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<
    { kind: "error" | "info" | "success"; text: string } | null
  >(null);

  // SB-P-1.9: This page is the redirect target of the Supabase recovery link.
  // Supabase parses the recovery tokens from the URL fragment automatically
  // and fires a `PASSWORD_RECOVERY` auth event. We stay on this page for that
  // event and only enable the password form when a recovery session exists.
  useEffect(() => {
    let cancelled = false;

    // If Supabase already established a recovery session before this effect
    // runs, `getSession` will surface it. If not, `onAuthStateChange` will
    // fire `PASSWORD_RECOVERY` once the fragment is parsed.
    supabase.auth.getSession().then(({ data }) => {
      if (cancelled) return;
      if (data.session) setLinkValid(true);
      setReady(true);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" && session) {
        setLinkValid(true);
        setReady(true);
      }
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (password.length < 6) {
      setMessage({ kind: "error", text: "Password must be at least 6 characters." });
      return;
    }
    if (password !== confirmPassword) {
      setMessage({ kind: "error", text: "The two passwords don't match." });
      return;
    }

    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setMessage({ kind: "error", text: error.message });
        return;
      }
      setMessage({
        kind: "success",
        text: "Your password has been updated. Redirecting you to sign in…",
      });
      // Sign out of the temporary recovery session so the user signs in fresh
      // with their new password through the existing authentication flow.
      await supabase.auth.signOut();
      setTimeout(() => {
        navigate({ to: "/auth", replace: true });
      }, 1200);
    } catch (err) {
      setMessage({
        kind: "error",
        text: err instanceof Error ? err.message : "Unexpected error.",
      });
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
            Set a new password
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a new password for your Smart Business account.
          </p>

          {!ready ? (
            <p className="mt-6 text-sm text-muted-foreground">Preparing your recovery link…</p>
          ) : !linkValid ? (
            <div className="mt-6 space-y-3">
              <p className="text-sm text-foreground">
                This recovery link is invalid or has expired. Please request a new one.
              </p>
              <Link
                to="/auth"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Back to sign in
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  New password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  minLength={6}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-foreground">
                  Confirm new password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  minLength={6}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                {busy ? "Saving…" : "Update password"}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/auth"
              className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
