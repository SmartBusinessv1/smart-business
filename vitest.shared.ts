import { fileURLToPath, URL } from "node:url";
import tsconfigPaths from "vite-tsconfig-paths";

// SB-OPS-CI-ARCHITECTURE-1.0 Stage 2: settings common to every Vitest
// config in this repository (the default full-suite vitest.config.ts,
// plus vitest.fast.config.ts and vitest.full.config.ts). Kept as plain
// exports rather than a shared defineConfig() call, so each config file
// remains the one place that shows which suite is actually active.

export const sharedPlugins = [tsconfigPaths()];

// vite-tsconfig-paths resolves the "@/*" alias for type-only imports
// (erased before resolution runs) but not for value imports from
// tests/**, which sits outside tsconfig.json's own `include`. This
// explicit alias is what SB-P-1.11-GC-1's server-function integration
// tests need to import src/server-functions/catalog-import.ts by value.
export const sharedAlias = {
  "@": fileURLToPath(new URL("./src", import.meta.url)),
};

export const sharedTestTimeouts = {
  testTimeout: 30000,
  hookTimeout: 30000,
} as const;
