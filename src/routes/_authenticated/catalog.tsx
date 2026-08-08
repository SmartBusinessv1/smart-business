// SB-P-1.11 — Product Catalog layout route.
// Renders the shared workspace shell and delegates to child routes:
//   /catalog              → catalog.index.tsx (search, list, categories, tax settings)
//   /catalog/$productId   → catalog.$productId.tsx (detail, pricing, link, lifecycle)
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { AuthedHeader } from "@/components/authed-header";

export const Route = createFileRoute("/_authenticated/catalog")({
  component: CatalogLayout,
});

function CatalogLayout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);

  async function handleSignOut() {
    if (signingOut) return;
    setSigningOut(true);
    try {
      await queryClient.cancelQueries();
      queryClient.clear();
      await supabase.auth.signOut();
      navigate({ to: "/auth", replace: true });
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <AuthedHeader
        email={user?.email ?? null}
        onSignOut={() => void handleSignOut()}
      />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
