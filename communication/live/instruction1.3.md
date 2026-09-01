# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction1.3 — Production Catalog Import Parser Runtime Correction

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`  
**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`  
**Sequence:** `1.3`  
**From:** Smart Business Mission Control  
**To:** Claude Code / Repository Engineering Operator  
**Status:** `AUTHORIZED — BOUNDED RUNTIME CORRECTION`  
**Date:** `2026-09-02`

---

## 1. Context

The repository synchronization and Lovable tooling correction are complete and merged.

Production delivery repository `SmartBusinessv1/starter-supab-shell/main` is at merge commit:

`cec810d7f01eb0dabef23f06975bcc444c9f6c98`

The intended new Lovable production workspace:

`f3e992ec-06df-4d49-b157-b92ec064c078`

has ingested that exact commit and remains unpublished.

Its tracked Supabase binding remains:

`gysgzasfcjvtrgaigfyn`

During practical pre-publication runtime verification, the Founder signed in successfully and opened Catalog → Import products. A four-row sample CSV was selected and `Upload and preview` was executed.

Observed merchant-visible result:

`This file took too long to process.`

The sample file is only four rows, so this is not a legitimate file-size or workload timeout.

## 2. Reproduction evidence

Current runtime code enforces:

`IMPORT_LIMITS.maxParseMs = 10_000`

and `catalogImportPreview` calls:

`parseInIsolatedWorker(buffer, fileKind, IMPORT_LIMITS.maxParseMs)`.

Current `parseInIsolatedWorker` launches Node `worker_threads` against a CWD-resolved TypeScript source path:

`src/lib/catalog-import/parse-worker.ts`

and terminates it after the 10-second budget.

The source comment itself records that this mechanism was verified for a real `vite dev` test target and carries runtime/platform compatibility limitations.

The Lovable preview reproduces the timeout on the four-row CSV, so the current production-delivery parser execution path is not usable in the actual new Lovable runtime.

## 3. Objective

Correct the Catalog CSV/XLSX preview parser so a normal small merchant file parses successfully in the actual production-delivery/Lovable runtime while preserving the existing safety boundaries.

This is a runtime compatibility correction, not a redesign of Catalog import.

Do **not** solve the known Category/Unit correction-dropdown gap or Inventory bulk-upload gap in this instruction.

## 4. Safety invariants that must remain

Preserve server-enforced limits and protections, including:

- maximum compressed upload size: 5 MB;
- maximum decompressed XLSX processing size: 25 MB;
- maximum rows: 2,000;
- maximum columns: 40;
- maximum characters per cell: 2,000;
- bounded parser execution / resource protection;
- malformed/encrypted/macro file rejection as currently intended;
- no Catalog Product Truth mutation during preview;
- no Inventory stock import through Catalog;
- existing owner/auth/business-isolation boundaries;
- sanitized error handling;
- explicit merchant confirmation before commit.

Do not simply increase or remove the 10-second timeout to conceal the compatibility failure.

## 5. Required engineering diagnosis

Determine the smallest production-compatible parsing architecture for the current TanStack Start/Lovable runtime.

Specifically inspect:

- `src/lib/catalog-import/parse-isolated.ts`
- `src/lib/catalog-import/parse-worker.ts`
- `src/lib/catalog-import/parse.ts`
- `src/lib/catalog-import/limits.ts`
- `src/server-functions/catalog-import.ts`
- build/runtime output behavior relevant to worker execution

Establish why the worker does not complete in the Lovable preview/runtime.

Prefer evidence over assumptions. The correction must work in the actual target runtime model, not only local `vite dev`.

## 6. Authorized implementation scope

Repository:

`SmartBusinessv1/starter-supab-shell`

Create/use branch:

`mission/SB-OPS-PROD-SYNC-1.0-parser-runtime-correction`

Base:

`main@cec810d7f01eb0dabef23f06975bcc444c9f6c98`

Authorized paths are limited to parser/import runtime and directly required build/dependency state:

- `src/lib/catalog-import/parse-isolated.ts`
- `src/lib/catalog-import/parse-worker.ts`
- `src/lib/catalog-import/parse.ts`
- `src/lib/catalog-import/limits.ts`
- `src/lib/catalog-import/types.ts`
- `src/server-functions/catalog-import.ts`
- `package.json`
- `bun.lock`
- narrowly scoped parser tests or fixtures directly required to prove the correction

A directly required additional runtime file may be changed only when its necessity is demonstrated and documented in `report1.3.md`.

Do not change unrelated Catalog, Inventory, authentication, Supabase schema/types, styling, routes, governance, or other product code.

## 7. Implementation expectations

The corrected design must ensure:

1. a normal small CSV can complete preview well inside the bounded processing budget;
2. CSV parsing remains bounded and validates all existing row/column/cell limits;
3. XLSX parsing retains decompression/resource protection and file-type safeguards;
4. timeout/resource failures return controlled merchant-facing rejection rather than crash/hang;
5. the preview path does not mutate Catalog Product Truth;
6. existing classification, duplicate detection, batch bookkeeping, and explicit-confirmation flow remain intact;
7. no production Supabase schema/RLS/Auth/data mutation is required;
8. no AWS/Lambda deployment is required merely to make the Lovable Catalog preview work unless Mission Control separately authorizes it.

If the correct architecture requires a materially different infrastructure boundary rather than a bounded application-runtime correction, stop and report the exact evidence instead of inventing deployment authority.

## 8. Required verification

At minimum run the safe applicable checks:

```bash
bun install --frozen-lockfile
bun run build
git diff --check
```

Run targeted non-production-mutating parser tests sufficient to prove:

- the exact four-row sample CSV structure parses successfully;
- malformed/unsupported input remains rejected;
- row/column/cell/file limits remain enforced;
- parser timeout/resource protection still exists and is testable;
- XLSX handling is not accidentally weakened.

Do not run integration tests that write to production Supabase.

If a preview-level test can be performed without production mutation, record it.

## 9. Runtime verification requirement

A local build/test PASS alone is not enough to close this correction.

After opening the target PR, clearly identify what must be merged/ingested by Lovable for the Founder to rerun the same practical sample upload.

The final acceptance check remains the actual Lovable preview:

- sign in;
- Catalog → Import products;
- upload the same small sample CSV;
- `Upload and preview` must return a preview rather than `PARSE_TIMEOUT`.

Claude Code must not publish the Lovable project or alter the production domain.

## 10. Git authority

Claude Code is authorized for mission `SB-OPS-PROD-SYNC-1.0` to:

- fetch/pull fast-forward only;
- create or use `mission/SB-OPS-PROD-SYNC-1.0-parser-runtime-correction` from the verified target `main` baseline;
- modify only the authorized scope;
- stage exact authorized files;
- commit with message:

`Fix Catalog import parser runtime compatibility`

- push only that mission branch;
- open a PR to `starter-supab-shell/main`.

No direct push to `main`.

No force push/history rewrite.

No self-merge/self-approval.

## 11. Explicitly not authorized

- Lovable publication;
- production domain/DNS cutover;
- Supabase migration/schema/RLS/grant/Auth/data mutation;
- AWS/Lambda deployment;
- Inventory/Opening Stock bulk import implementation;
- Catalog Category/Unit correction-dropdown implementation;
- unrelated dependency upgrades;
- historical Lovable reuse;
- weakening file safety limits merely to make the test pass.

## 12. Required reply — `report1.3.md`

After completing the bounded correction and opening/updating the target PR, write the active reply to:

`communication/live/report1.3.md`

The instruction/report suffix must match exactly per the communication protocol.

The report must identify:

1. reproduction and root cause;
2. target repo, branch, baseline, correction commit, and PR;
3. exact files changed;
4. parser architecture before and after;
5. why the new path is compatible with the Lovable production runtime;
6. safety limits/protections preserved;
7. frozen-install result;
8. build result;
9. targeted parser-test results;
10. diff/secret/backend-ref checks;
11. confirmation that Supabase config, `.lovable/**`, and `.env*` were untouched unless explicitly required (environment contents must never be exposed);
12. confirmation no publication/domain/AWS/Supabase mutation occurred;
13. exact Founder runtime retest steps after merge/Lovable ingestion;
14. any genuine remaining blocker.

End `report1.3.md` with exactly one:

`PASS — CATALOG IMPORT PARSER RUNTIME CORRECTION READY FOR LOVABLE RETEST`

or

`BLOCKED — CATALOG IMPORT PARSER RUNTIME REQUIRES MISSION CONTROL DECISION`

or

`FAIL — CATALOG IMPORT PARSER RUNTIME CORRECTION FAILED`

## 13. Communication rule

`communication/live/instruction1.3.md` is the active authority for this exchange.

The earlier stage-01 and stage-02 mission-folder records have been normalized into matching `communication/live/instruction1.1.md` / `report1.1.md` and `instruction1.2.md` / `report1.2.md` files without rewriting their original historical contents.

Do not place the active reply only in chat or only under `communication/missions/`.

## 14. Stop conditions

Stop and report if:

- the target branch baseline differs materially from `cec810d7...` before work begins;
- unrelated local changes are present;
- the correction requires production database/infrastructure mutation;
- safe XLSX resource protection cannot be preserved in the available runtime;
- a tracked secret is encountered;
- a broader architecture decision is genuinely required.

Ordinary parser code/build/test errors are engineering work within this instruction and should be resolved without creating a new governance loop.
