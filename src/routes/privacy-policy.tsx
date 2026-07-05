import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ContentSection,
  PageHeader,
  Prose,
} from "@/components/page-primitives";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Smart Business" },
      {
        name: "description",
        content:
          "Placeholder Privacy Policy for Smart Business. The final policy will be published through the approved governed release.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Placeholder page. The final Privacy Policy will be published through the approved governed release."
      />
      <ContentSection>
        <Prose>
          <p>
            Smart Business is being prepared under a governed release process.
            Formal privacy terms will be added here before any production use.
          </p>
        </Prose>
      </ContentSection>
    </SiteLayout>
  );
}
