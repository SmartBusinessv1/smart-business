# SMART BUSINESS — REPOSITORY COMMUNICATION

# Report

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**From:** `Claude Code / Repository Synchronization Operator`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction.md`

**Status:** `READY — SYNCHRONIZATION MAP COMPLETE`

**Date:** `2026-09-01`

---

## 1. Source Identity

- Canonical repository: `SmartBusinessv1/smart-business`
- Canonical branch: `main`
- Canonical SHA: `53b16a464be15e9c6b8f1d74827f9dce8cf9f928`

This SHA includes PR #449, which closed the prior live communication cycle and activated `SB-OPS-PROD-SYNC-1.0`.

## 2. Target Identity

- Production delivery repository: `SmartBusinessv1/starter-supab-shell`
- Target branch: `main`
- Target SHA: `fd7c29c11882a164799e00584701a9db46e06cca`
- Last target update observed: `2026-08-15`
- Last commit message observed: `Implemented catalog foundation`

The target is materially stale relative to canonical `smart-business/main`, but the divergence is ordinary implementation drift rather than an architectural contradiction.

## 3. Production Lovable Identity

- Project ID verified: `f3e992ec-06df-4d49-b157-b92ec064c078`
- Display name: `Smart Business Implementation Workspace`
- Lovable project name: `starter-supab-shell`
- Lovable latest commit SHA: `fd7c29c11882a164799e00584701a9db46e06cca`
- Repository relationship verified: `YES`
- Evidence: the Lovable project's latest commit SHA exactly matches `SmartBusinessv1/starter-supab-shell/main`.
- Publish state observed during mapping: `not published`

This verifies that the intended production Lovable workspace is associated with the production delivery repository. The historical Lovable project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` is not an authoritative synchronization source.

## 4. Supabase Runtime Boundary

- Expected production project: `gysgzasfcjvtrgaigfyn`
- Supabase project name: `smart-business`
- Region: `ap-south-1`
- Current project status: `ACTIVE_HEALTHY`
- Current target-repository binding: `gysgzasfcjvtrgaigfyn`
- Canonical repository binding: `gysgzasfcjvtrgaigfyn`
- Current Lovable runtime binding: not independently exposed as a separate connector field during this read-only map; however the repository connected to Lovable is bound through `supabase/config.toml` to the authoritative production project.
- Lovable Cloud project `wwgqnshcgbukqczqblsm` excluded: `YES`
- Test project `drravyyauixltoihzmwo` excluded: `YES`

No production Supabase migration, schema, RLS, grant, Auth, or project rebinding is required to begin repository synchronization.

## 5. Runtime Divergence

### 5.1 Catalog routes

Canonical runtime contains later Catalog implementation not present or stale in the target:

- `src/routes/_authenticated/catalog.import.tsx` — present canonical, absent target
- `src/routes/_authenticated/catalog.$productId.tsx` — newer canonical version
- `src/routes/_authenticated/catalog.index.tsx` — newer canonical version
- `src/routes/_authenticated/catalog.tsx` — already identical
- `src/routeTree.gen.ts` — newer canonical generated route tree

### 5.2 Catalog components

Canonical contains:

- `src/components/catalog/**`

The target does not contain this Catalog component subtree and requires synchronization.

### 5.3 Server functions

Canonical contains:

- `src/server-functions/catalog-import.ts`
- `src/server-functions/parser-lease.ts`

The target does not contain `src/server-functions/**`.

### 5.4 Catalog import library

The target already contains several parser/import files that match canonical exactly, including:

- `src/lib/catalog-import/content-type.ts`
- `src/lib/catalog-import/fields.ts`
- `src/lib/catalog-import/limits.ts`
- `src/lib/catalog-import/parse-isolated.ts`
- `src/lib/catalog-import/parse-worker.ts`
- `src/lib/catalog-import/parse.ts`
- `src/lib/catalog-import/types.ts`

Canonical additionally contains later implementation, including:

- `src/lib/catalog-import/classify.ts`
- `src/lib/catalog-import/idempotency.ts`
- `src/lib/catalog-import/validate.ts`

The canonical and target `src/lib/catalog-import/**` trees therefore differ and the canonical runtime subtree should be synchronized as a unit.

### 5.5 Additional runtime helpers

Canonical includes runtime helpers absent from target, including:

- `src/lib/catalog-presets.ts`
- `src/lib/parser-ingress/**`

These should be synchronized where required by the canonical application dependency graph.

### 5.6 Supabase application integration

Most common Supabase application integration files are already identical, including auth/client, Inventory, and Transactions integration.

Verified later canonical differences include:

- `src/integrations/supabase/catalog.ts`
- `src/integrations/supabase/types.ts`

These require synchronization from canonical.

### 5.7 Inventory runtime

Verified later canonical difference:

- `src/routes/_authenticated/inventory.index.tsx`

Verified already identical:

- `src/routes/_authenticated/inventory.$itemId.tsx`
- `src/routes/_authenticated/inventory.tsx`
- `src/integrations/supabase/inventory.ts`

### 5.8 Parser / Lambda runtime

Canonical contains:

- `lambda/parser/build.mjs`
- `lambda/parser/handler.ts`

The target does not contain `lambda/parser/**`.

Canonical `package.json` includes the associated `build:lambda` script and parser/AWS dependencies absent from the stale target. These runtime files belong in the synchronization scope. Copying them does not itself authorize AWS deployment.

### 5.9 Dependency state

Canonical and target `package.json` differ.

Canonical includes additional current runtime dependencies and scripts needed by the parser/import implementation, including:

- `@aws-sdk/client-s3`
- `aws4fetch`
- `build:lambda`

The Lovable TanStack config dependency version also differs between the repositories. Therefore `package.json` and `bun.lock` should be synchronized together from the canonical approved runtime state rather than manually merged or regenerated first.

## 6. Target-Only Files To Preserve

Do not blindly replace target-delivery-specific files while synchronizing runtime implementation.

Preserve unless a direct runtime requirement proves otherwise:

- `.lovable/project.json`
- `.lovable/plan.md`
- target `README.md`
- target `AGENTS.md`
- target environment files and deployment-specific configuration

The target `.lovable/project.json` represents the production Lovable workspace template metadata and should not be overwritten for simple source parity.

Environment files must not be copied from another repository or historical Lovable workspace as part of runtime synchronization. No secret value is to be inspected, copied, or committed by this mission.

## 7. Deliberate Exclusions

Do not copy canonical institutional/history material merely for repository parity, including:

- `communication/**`
- `Project Source File Archive/**`
- historical mission archives
- governance-only documentation
- evidence packages
- old test evidence
- historical Lovable workaround records
- local secret/environment files
- generated platform drift unrelated to current runtime

Non-runtime material may be copied only when it is demonstrably required for the production build or repository operation.

## 8. Inventory Bulk Workflow

- Canonical implementation status: Inventory runtime is implemented and newer than the Aug-15 target in at least the Inventory index route.
- Merchant-facing dedicated CSV/XLSX upload/import route present: `NO VERIFIED DEDICATED ROUTE`
- Historical product/implementation records approve Inventory / Opening Stock CSV/XLSX onboarding and downloadable templates.
- Remaining practical gap: after synchronization, the merchant-facing Inventory / Opening Stock bulk-upload experience still requires completion unless a hidden runtime surface is discovered during implementation.

This is implementation work and is not a governance blocker to repository synchronization.

## 9. Catalog Bulk Import

- Canonical implementation status: `SUBSTANTIALLY IMPLEMENTED`
- CSV support: `YES`
- XLSX support: `YES`
- Preview present: `YES`
- Explicit confirmation before live creation: `YES`
- Valid/invalid/possible-match handling present: `YES`
- Inventory stock truth kept separate from Catalog import: `YES`
- Category dropdown/correction present in current canonical preview UI: `NO`
- Unit dropdown/correction present in current canonical preview UI: `NO`

The canonical `/catalog/import` route already supports upload, preview, classification, skip/confirm behavior, and distinct outcomes. However, current correction behavior tells the merchant to fix and re-upload problematic rows rather than allowing direct Category/Unit correction in the preview.

Remaining practical gap:

- add direct Category selection/correction through dropdown/select behavior;
- add direct Selling Unit selection/correction through dropdown/select behavior;
- preserve explicit merchant confirmation and the existing import integrity rules.

This is a bounded post-sync UX implementation task in the correct production Lovable project.

## 10. Proposed Synchronization Scope

### Authorized implementation branch

`mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`

### Files/directories proposed for synchronization

Initial runtime scope:

- `src/components/catalog/**`
- `src/routes/_authenticated/catalog.import.tsx`
- `src/routes/_authenticated/catalog.$productId.tsx`
- `src/routes/_authenticated/catalog.index.tsx`
- `src/routes/_authenticated/inventory.index.tsx`
- `src/routeTree.gen.ts`
- `src/lib/catalog-import/**`
- `src/lib/catalog-presets.ts`
- `src/lib/parser-ingress/**`
- `src/server-functions/**`
- `src/integrations/supabase/catalog.ts`
- `src/integrations/supabase/types.ts`
- `lambda/parser/**`
- `package.json`
- `bun.lock`

The synchronization operator may include an additional directly referenced production-runtime file only when the canonical dependency graph proves it is required for build/runtime consistency.

### Files deliberately preserved on target

- `.lovable/project.json`
- `.lovable/plan.md`
- target-specific `README.md`
- target-specific `AGENTS.md`
- target environment/deployment files
- `supabase/config.toml`, because it is already correct and identical at `gysgzasfcjvtrgaigfyn`

### Files deliberately excluded

- `communication/**`
- governance/history/evidence archives
- Project Source File Archive
- unrelated documentation
- secrets/local environment material
- historical Lovable project artifacts

### Build/test commands planned

Minimum non-deployment verification after synchronization:

- install using the synchronized lockfile/runtime dependency state;
- `bun run build`
- `bun run lint`
- targeted non-production-safe test/build checks required to prove the synchronized application compiles and routes resolve;
- no AWS deployment, Lovable publication, domain cutover, Supabase migration, schema/RLS/Auth/grant change, or production data mutation under this synchronization commit.

## 11. Genuine Blockers

`NONE IDENTIFIED`

The observed problems are stale runtime code and incomplete merchant UX, not architectural or governance blockers.

The production delivery path is coherent:

`SmartBusinessv1/smart-business/main`

→ `SmartBusinessv1/starter-supab-shell`

→ Lovable `f3e992ec-06df-4d49-b157-b92ec064c078`

→ later verified publication

→ later `smartbusiness.teamlips.com` cutover.

## Mission Control Synchronization Authorization

Upon human merge of this synchronization-map report into canonical `smart-business/main`, implementation is authorized on:

- repository: `SmartBusinessv1/starter-supab-shell`
- branch: `mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`
- source authority: canonical `SmartBusinessv1/smart-business/main` at the verified baseline above, updated to the latest canonical SHA if only communication-only changes have occurred before implementation begins.

Authorization is limited to production/runtime synchronization described in Section 10.

No direct push to target `main` is authorized. Implementation must return through a pull request for human merge. No publication or domain cutover is authorized by this synchronization branch alone.

## Final Result

`READY — PRODUCTION RUNTIME SYNCHRONIZATION MAPPED`
