#!/usr/bin/env node
// SB-ORG-LEARNING-1.1 Stage 1 -- Standalone schema validation CLI.
//
// A small utility, independent of the harvester, for checking whether an
// arbitrary JSON file already conforms to one of the four Stage 1
// contracts. Performs no repository reads, no git calls, no writes.
//
// Usage:
//   node organizational-learning/scripts/validate.mjs <schema> <path.json>
//   <schema> is one of: candidate | promotion | closure-envelope | receipt

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { CandidateLearningItemSchema } from "../schemas/candidate-learning-item.schema.ts";
import { PromotionReviewSchema } from "../schemas/promotion-review.schema.ts";
import { ClosureEnvelopeSchema } from "../schemas/closure-envelope.schema.ts";
import { ReceiptSchema } from "../schemas/receipt.schema.ts";

const SCHEMAS = {
  candidate: CandidateLearningItemSchema,
  promotion: PromotionReviewSchema,
  "closure-envelope": ClosureEnvelopeSchema,
  receipt: ReceiptSchema,
};

export function runValidate(argv) {
  const [schemaName, filePath] = argv;
  if (!schemaName || !SCHEMAS[schemaName]) {
    return {
      exitCode: 1,
      message: `validate: <schema> must be one of: ${Object.keys(SCHEMAS).join(", ")}`,
    };
  }
  if (!filePath) {
    return { exitCode: 1, message: "validate: <path.json> is required" };
  }

  // F-03 correction: see harvest.mjs's equivalent fix for the full
  // rationale -- a JSON parse failure must never interpolate the raw
  // parser error message, since it can include a verbatim snippet of
  // the offending input bytes. A read failure may safely echo the
  // caller-supplied path.
  let fileText;
  try {
    fileText = readFileSync(resolve(filePath), "utf8");
  } catch {
    return { exitCode: 1, message: `validate: could not read file: ${filePath}` };
  }

  let raw;
  try {
    raw = JSON.parse(fileText);
  } catch {
    return { exitCode: 1, message: `validate: ${filePath} is not valid JSON` };
  }

  const result = SCHEMAS[schemaName].safeParse(raw);
  if (result.success) {
    return { exitCode: 0, message: `validate: PASS -- ${filePath} is a valid ${schemaName}` };
  }
  const issues = result.error.issues
    .map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("\n  ");
  return {
    exitCode: 1,
    message: `validate: FAIL -- ${filePath} is not a valid ${schemaName}\n  ${issues}`,
  };
}

// F-04 correction: see harvest.mjs's equivalent fix for the full
// rationale -- the previous naive `file://${process.argv[1]}` prefix
// never equals `import.meta.url`'s canonical file URL form on Windows,
// so this CLI's guarded block silently never ran there. `pathToFileURL`
// is Node's standard, platform-correct conversion.
function isMainModule() {
  const entryPoint = process.argv[1];
  if (typeof entryPoint !== "string" || entryPoint.length === 0) {
    return false;
  }
  return import.meta.url === pathToFileURL(entryPoint).href;
}

if (isMainModule()) {
  const { exitCode, message } = runValidate(process.argv.slice(2));
  if (exitCode === 0) {
    console.log(message);
  } else {
    console.error(message);
  }
  process.exitCode = exitCode;
}
