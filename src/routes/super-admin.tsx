import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ContentSection,
  PageHeader,
  Prose,
} from "@/components/page-primitives";

export const Route = createFileRoute("/super-admin")({
  head: () => ({
    meta: [
      { title: "Super Admin — Smart Business" },
      {
        name: "description",
        content:
          "Reserved internal route for Smart Business super administration. Functionality is not implemented during Bootstrap.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: SuperAdmin,
});

function SuperAdmin() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Internal"
        title="Super Admin"
        description="Reserved internal route. Functionality is not implemented during Bootstrap and will be authorized through a future governed mission."
      />
      <ContentSection>
        <Prose>
          <p>
            This route exists only to reserve the approved internal address.
            Access controls and administrative functionality are out of scope
            for the Bootstrap Build.
          </p>
        </Prose>
      </ContentSection>
    </SiteLayout>
  );
}
