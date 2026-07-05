import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContentSection } from "@/components/page-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Business — Your AI Business Manager on WhatsApp" },
      {
        name: "description",
        content:
          "Smart Business helps Kerala merchants gain clarity, control, and peace of mind — an AI Business Manager that assists while the owner decides.",
      },
      {
        property: "og:title",
        content: "Smart Business — Your AI Business Manager on WhatsApp",
      },
      {
        property: "og:description",
        content:
          "AI assists. The owner decides. A calm, WhatsApp-first business assistant built for Kerala merchants.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 0%, oklch(0.35 0.08 260 / 0.55) 0%, transparent 60%), radial-gradient(50% 50% at 90% 20%, oklch(0.5 0.12 82 / 0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28">
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">
            AI assists · The owner decides
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Your AI Business Manager on WhatsApp.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Smart Business helps business owners gain greater clarity, control,
            and peace of mind — without giving up ownership of their decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/start"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Get started
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <ContentSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "WhatsApp-first",
              body: "Meet business owners where they already work — on the app they use every day.",
            },
            {
              title: "AI Assistant, not AI Judge",
              body: "Insights and clarity for the owner. The decision always stays human.",
            },
            {
              title: "Built for Kerala merchants",
              body: "Designed for grocery stores, bakeries, cafés, pharmacies and local shops.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <h2 className="text-base font-semibold text-card-foreground">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </SiteLayout>
  );
}
