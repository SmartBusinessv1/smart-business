import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ContentSection,
  PageHeader,
  Prose,
} from "@/components/page-primitives";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Smart Business" },
      {
        name: "description",
        content:
          "Placeholder Terms of Service for Smart Business. Final terms will be published through the approved governed release.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Placeholder page. Final Terms of Service will be published through the approved governed release."
      />
      <ContentSection>
        <Prose>
          <p>
            Smart Business is being prepared under a governed release process.
            Formal terms of service will be added here before any production
            use.
          </p>
        </Prose>
      </ContentSection>
    </SiteLayout>
  );
}
