# SMART BUSINESS MISSION CONTROL

# instruction1 — Runtime Synchronization Execution

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`  
**Stage:** `01 — Runtime synchronization execution`  
**From:** Smart Business Mission Control  
**To:** Claude Code / Repository Synchronization Operator  
**Status:** AUTHORIZED — EXECUTE  
**Date:** 2026-09-01

## Purpose

Execute the already-mapped production/runtime synchronization from canonical Smart Business into the intended production delivery repository. This is recovery synchronization, not redesign.

## Explicit mission-scoped Git authorization

Founder/Mission Control authorizes **Claude Code** for mission **SB-OPS-PROD-SYNC-1.0** to operate on repository **SmartBusinessv1/starter-supab-shell**, using branch **mission/SB-OPS-PROD-SYNC-1.0-runtime-sync**, limited to the runtime synchronization scope defined below and directly required runtime dependencies only, with commit message **`Synchronize production runtime through SB-P-1.11`**, and to fetch, pull fast-forward only, stage exact authorized files, commit, push the authorized mission branch, and open or update the pull request targeting `main`.

Claude Code is also authorized to create its mission communication report in **SmartBusinessv1/smart-business** under `communication/missions/SB-OPS-PROD-SYNC-1.0/claude-code/`, and to update this mission's `README.md`, `handover-log.md`, and `decision-log.md` on a separate mission communication branch/PR. It may not push directly to canonical `main` or self-merge.

## Authoritative identities

Canonical implementation repository: `SmartBusinessv1/smart-business`  
Mapped runtime source snapshot: `53b16a464be15e9c6b8f1d74827f9dce8cf9f928`

Production delivery repository: `SmartBusinessv1/starter-supab-shell`  
Target baseline: `fd7c29c11882a164799e00584701a9db46e06cca`  
Authorized branch: `mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`

Production Lovable project: `f3e992ec-06df-4d49-b157-b92ec064c078`

Production Supabase project: `gysgzasfcjvtrgaigfyn`

Excluded historical Lovable project: `64c2b9b1-2461-4045-9acc-19e2658b8ca2`  
Excluded Lovable Cloud project: `wwgqnshcgbukqczqblsm`  
Excluded test Supabase project: `drravyyauixltoihzmwo`

## Required intake

Before modifying target files:

1. Read `AGENTS.md`, `CLAUDE.md`, this mission README, `handover-log.md`, and `decision-log.md`.
2. Read this instruction from the repository; chat text is not authoritative for execution scope.
3. Fetch both repositories.
4. Verify remote URLs.
5. Verify `starter-supab-shell` target branch is `mission/SB-OPS-PROD-SYNC-1.0-runtime-sync` and the working tree is clean.
6. Stop if unrelated local changes exist.

## Authorized runtime synchronization scope

Synchronize exact canonical runtime content as applicable from the mapped source snapshot:

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

If a synchronized file imports another absent or stale runtime dependency, copy only that directly required runtime dependency and record it in `report1`.

## Preserve / do not overwrite merely for parity

- `.lovable/**`
- `.env`
- `.env.*`
- target `README.md`
- target `AGENTS.md`
- `supabase/config.toml`

`supabase/config.toml` must remain bound to `gysgzasfcjvtrgaigfyn`.

## Do not copy

- `communication/**`
- governance/history archives
- evidence packages
- historical reports
- unrelated tests
- secrets or local environment files

The goal is runtime equivalence, not repository identity.

## Build and verification

After synchronization, run the applicable safe local checks:

```bash
bun install --frozen-lockfile
bun run build
bun run lint
git diff --check
```

If frozen install fails because canonical dependency state legitimately requires reconciliation, diagnose and make only the minimum fix; document it.

Do not run broad integration tests against production or any test that may mutate production Supabase.

Before commit verify:

- tracked Supabase project remains `gysgzasfcjvtrgaigfyn`;
- changed runtime files do not introduce `wwgqnshcgbukqczqblsm`;
- changed runtime files do not introduce `drravyyauixltoihzmwo`;
- `.lovable/**` is preserved;
- no environment/secret file is added or modified;
- no `communication/**` or historical material is copied into the delivery repository;
- exact staged paths match authorization;
- `git diff --cached --check` passes;
- staged changes contain no credential or secret.

## Commit / push / PR

Commit message:

`Synchronize production runtime through SB-P-1.11`

Push only:

`mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`

Open a PR to `starter-supab-shell/main` with title:

`Synchronize Smart Business production runtime through SB-P-1.11`

Do not merge or approve your own PR.

The PR must record source SHA, target baseline, changed paths, validation results, production Supabase preservation, target-specific preservation, and mutations not performed.

## Known practical gaps — record, do not expand scope

1. Catalog bulk-import currently lacks direct Category/Unit row-correction dropdown UX in the import review screen, although reusable Category and Selling Unit selectors exist canonically.
2. Dedicated merchant-facing Inventory / Opening Stock CSV/XLSX import route was not verified in canonical runtime.

Do not redesign or implement these gaps under instruction1 unless strictly required for the synchronized canonical runtime to build.

## Explicitly not authorized

- direct push to either repository `main`;
- self-merge/self-approval;
- Lovable publication;
- production domain/DNS change;
- Supabase migration/schema/RLS/grant/Auth/data mutation;
- AWS or Lambda deployment;
- use of historical Lovable implementation as source;
- force push or history rewrite.

## Required repository communication — report1

After opening the target PR, create:

`communication/missions/SB-OPS-PROD-SYNC-1.0/claude-code/01-runtime-synchronization-report.md`

The report must contain:

- canonical source repository and runtime SHA;
- target repository, baseline SHA, branch, commit SHA, PR number;
- exact synchronized paths;
- any additional required dependency path and reason;
- build result;
- lint result;
- diff-check result;
- production Supabase ref verification;
- `.lovable/**` preservation verification;
- environment-file preservation verification;
- forbidden backend-ref search result;
- remaining practical product gaps;
- explicit confirmation of mutations not performed.

Also update this mission's `README.md`, `handover-log.md`, and `decision-log.md` as required by the AI Communication and Handover Protocol on a separate canonical communication branch/PR.

End report1 with exactly one:

`PASS — PRODUCTION RUNTIME SYNCHRONIZATION PR READY FOR REVIEW`

or

`BLOCKED — PRODUCTION RUNTIME SYNCHRONIZATION REQUIRES FOUNDER/MISSION CONTROL DECISION`

or

`FAIL — PRODUCTION RUNTIME SYNCHRONIZATION FAILED`

## Stop conditions

Stop only for a genuine contradiction: unrelated working-tree changes, inaccessible authorized repository/branch, tracked secret exposure, irreconcilable production-only target change, unauthorized backend rebinding, or a requirement for database/infrastructure mutation.

Ordinary stale code, dependency reconciliation, compile errors, missing imports, or fixable build issues are engineering work within scope.
