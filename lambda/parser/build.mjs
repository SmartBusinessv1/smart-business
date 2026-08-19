// SB-P-1.11-GC-38R — Lambda parser bundle build (Lambda Parser EIS §13.1).
// esbuild static import-graph bundling into a single minified CommonJS
// Node 24 output file, packaged as a ZIP deployment artifact by the
// deployment workflow. Run with: node lambda/parser/build.mjs
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

await build({
  entryPoints: [resolve(__dirname, "handler.ts")],
  outfile: resolve(__dirname, "dist", "handler.js"),
  bundle: true,
  minify: true,
  platform: "node",
  target: "node24",
  format: "cjs",
  sourcemap: false,
  logLevel: "info",
});
