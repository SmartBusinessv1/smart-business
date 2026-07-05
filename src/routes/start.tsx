import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ContentSection,
  PageHeader,
  Prose,
} from "@/components/page-primitives";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Get started — Smart Business" },
      {
        name: "description",
        content:
          "Begin your Smart Business journey. Onboarding will open through the approved governed release.",
      },
      { property: "og:title", content: "Get started — Smart Business" },
      {
        property: "og:description",
        content:
          "Onboarding entry point for Smart Business — your AI Business Manager on WhatsApp.",
      },
    ],
  }),
  component: Start,
});

function Start() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get started"
        title="Begin with Smart Business"
        description="Onboarding will open through the approved governed release. This page will guide new merchants when it becomes available."
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Talk to us
        </Link>
      </PageHeader>
      <ContentSection>
        <Prose>
          <p>
            Smart Business is being rolled out under a governed release process
            that preserves trust, simplicity, and human decision ownership.
          </p>
        </Prose>
      </ContentSection>
    </SiteLayout>
  );
}
