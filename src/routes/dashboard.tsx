import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Login — Smart Business" },
      {
        name: "description",
        content:
          "Login entry point for Smart Business. Authentication will be enabled through a future governed mission.",
      },
      { name: "robots", content: "noindex,nofollow" },
      { property: "og:title", content: "Login — Smart Business" },
      {
        property: "og:description",
        content: "Login entry point for Smart Business.",
      },
    ],
  }),
  component: DashboardLogin,
});

function DashboardLogin() {
  return (
    <SiteLayout>
      <section className="mx-auto flex w-full max-w-md flex-col px-4 py-16 sm:py-24">
        <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Login
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-card-foreground">
            Sign in to Smart Business
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            This page is the approved Login entry point. Authentication is not
            enabled yet — it will be introduced through a future governed
            mission.
          </p>

          <div className="mt-6 rounded-md border border-dashed border-border/70 bg-background/40 p-4 text-sm text-muted-foreground">
            Sign-in is unavailable during Bootstrap.
          </div>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
