import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ContentSection,
  PageHeader,
  Prose,
} from "@/components/page-primitives";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Smart Business" },
      {
        name: "description",
        content:
          "An overview of how Smart Business supports business owners as an AI Business Manager on WhatsApp.",
      },
      { property: "og:title", content: "How it works — Smart Business" },
      {
        property: "og:description",
        content:
          "How Smart Business assists merchants with clarity and calm — while the owner stays in charge.",
      },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Overview"
        title="How Smart Business works"
        description="Smart Business is designed as an AI Business Manager — calm, simple, and always in service of the owner."
      />
      <ContentSection>
        <Prose>
          <p>
            This page introduces the Smart Business experience. Product
            capabilities will be added through future governed missions.
          </p>
          <p>
            Content here is intentionally minimal during project initialization.
          </p>
        </Prose>
      </ContentSection>
    </SiteLayout>
  );
}
