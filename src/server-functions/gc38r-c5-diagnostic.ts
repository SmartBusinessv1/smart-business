// SB-P-1.11-GC-38R — instruction1.170.md: minimum non-production-only
// status check gating the Phase C C5 diagnostic entry point
// (src/routes/_authenticated/gc38r-c5-diagnostic.tsx). Reveals only a
// boolean; never touches AWS, business data, or any secret. Reports
// enabled only when GC38R_C5_DIAGNOSTIC_ENABLED is set, which is
// deliberately configured only on smart-business-parser-nonprod for the
// duration of this verification and is never present in production.
//
// Removed under this same authorization once C5 evidence is captured
// (instruction1.170.md §7) -- this file, the diagnostic route, and the
// deploy-time env var are all temporary.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const gc38rC5DiagnosticEnabled = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async (): Promise<{ enabled: boolean }> => {
    return { enabled: process.env.GC38R_C5_DIAGNOSTIC_ENABLED === "true" };
  });
