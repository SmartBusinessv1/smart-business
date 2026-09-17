import { defineConfig } from "vitest/config";
import { sharedPlugins, sharedAlias, sharedTestTimeouts } from "./vitest.shared";

// SB-OPS-CI-ARCHITECTURE-1.0 Stage 2 -- Fast Gate suite.
//
// Exactly the 8 environment-independent test files classified in Stage 1
// (communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/claude-code/
// 01-stage1-classification-and-design.md, Section 1). None of these
// files import tests/setup/test-clients.ts or otherwise contact
// Supabase, so this config intentionally carries no `setupFiles` entry:
// it never requires SUPABASE_TEST_URL / SUPABASE_TEST_ANON_KEY /
// SUPABASE_TEST_SERVICE_ROLE_KEY, and can run on every pull request
// without the shared smart-business-test environment. Run via
// `npm run test:fast`.
export default defineConfig({
  plugins: sharedPlugins,
  resolve: { alias: sharedAlias },
  test: {
    environment: "node",
    include: [
      "tests/catalog-import/classify.test.ts",
      "tests/catalog-import/content-type.test.ts",
      "tests/catalog-import/fields.test.ts",
      "tests/catalog-import/idempotency.test.ts",
      "tests/catalog-import/parse-isolated.test.ts",
      "tests/catalog-import/parse.test.ts",
      "tests/catalog-import/validate.test.ts",
      "tests/parser-lease/roles-anywhere-decimal-serial.test.ts",
      // SB-ORG-LEARNING-1.1 Stage 1 -- repository-native, no Supabase
      // dependency: schema/security/idempotency contracts plus a
      // harvester CLI that only ever touches isolated ephemeral git
      // repositories and temp directories it creates itself.
      "organizational-learning/tests/path-safety.test.ts",
      "organizational-learning/tests/allowlist.test.ts",
      "organizational-learning/tests/fingerprint.test.ts",
      "organizational-learning/tests/revision-hash.test.ts",
      "organizational-learning/tests/provenance.schema.test.ts",
      "organizational-learning/tests/provenance-validator.test.ts",
      "organizational-learning/tests/closure-envelope.schema.test.ts",
      "organizational-learning/tests/candidate-learning-item.schema.test.ts",
      "organizational-learning/tests/promotion-review.schema.test.ts",
      "organizational-learning/tests/receipt.schema.test.ts",
      "organizational-learning/tests/screening.test.ts",
      "organizational-learning/tests/git-object-reader.test.ts",
      "organizational-learning/tests/receipt-store.test.ts",
      "organizational-learning/tests/harvest-cli.test.ts",
      "organizational-learning/tests/validate-cli.test.ts",
      "organizational-learning/tests/cli-process.test.ts",
      "organizational-learning/tests/context-pack.test.ts",
    ],
    ...sharedTestTimeouts,
    // Safe to parallelize, unlike Full Assurance: these files share no
    // external mutable state (no Supabase, no shared filesystem/global
    // singleton dependency identified in the Stage 1 review).
    fileParallelism: true,
  },
});
