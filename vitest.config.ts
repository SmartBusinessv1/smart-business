import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    // vite-tsconfig-paths resolves the "@/*" alias for type-only imports
    // (erased before resolution runs) but not for value imports from
    // tests/**, which sits outside tsconfig.json's own `include`. This
    // explicit alias is what SB-P-1.11-GC-1's server-function integration
    // tests need to import src/server-functions/catalog-import.ts by value.
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "node",
    setupFiles: ["./tests/setup/load-env.ts"],
    include: ["tests/**/*.test.ts"],
    testTimeout: 30000,
    hookTimeout: 30000,
    fileParallelism: false,
  },
});
