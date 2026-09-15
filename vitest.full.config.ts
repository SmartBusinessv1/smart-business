import { defineConfig } from "vitest/config";
import { sharedPlugins, sharedAlias, sharedTestTimeouts } from "./vitest.shared";

// SB-OPS-CI-ARCHITECTURE-1.0 Stage 2 -- Full Assurance suite.
//
// Every Supabase-dependent test file: everything under tests/** EXCEPT
// the Fast Gate's explicit file list (vitest.fast.config.ts), so a newly
// added test file defaults into Full Assurance -- the safer direction --
// unless a later change deliberately reclassifies it as fast. Requires
// SUPABASE_TEST_URL / SUPABASE_TEST_ANON_KEY / SUPABASE_TEST_SERVICE_ROLE_KEY
// via tests/setup/load-env.ts, exactly as the pre-split suite did. Run
// via `npm run test:full`.
export default defineConfig({
  plugins: sharedPlugins,
  resolve: { alias: sharedAlias },
  test: {
    environment: "node",
    setupFiles: ["./tests/setup/load-env.ts"],
    include: ["tests/**/*.test.ts"],
    exclude: [
      "tests/catalog-import/classify.test.ts",
      "tests/catalog-import/content-type.test.ts",
      "tests/catalog-import/fields.test.ts",
      "tests/catalog-import/idempotency.test.ts",
      "tests/catalog-import/parse-isolated.test.ts",
      "tests/catalog-import/parse.test.ts",
      "tests/catalog-import/validate.test.ts",
      "tests/parser-lease/roles-anywhere-decimal-serial.test.ts",
    ],
    ...sharedTestTimeouts,
    // Preserved from the pre-split vitest.config.ts: these tests share
    // one remote Supabase test project and must not race each other.
    fileParallelism: false,
  },
});
