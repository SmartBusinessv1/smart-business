import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ContentSection,
  PageHeader,
  Prose,
} from "@/components/page-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Smart Business" },
      {
        name: "description",
        content:
          "Reach the Smart Business team at Team LIPS. Contact channels will be published through the approved governed release.",
      },
      { property: "og:title", content: "Contact — Smart Business" },
      {
        property: "og:description",
        content: "Contact the Smart Business team at Team LIPS.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Smart Business is developed by Team LIPS, the technology unit of Lighthouse Information Publishing Service."
      />
      <ContentSection>
        <Prose>
          <p>
            Official contact channels will be published here through the
            approved governed release process.
          </p>
        </Prose>
      </ContentSection>
    </SiteLayout>
  );
}
