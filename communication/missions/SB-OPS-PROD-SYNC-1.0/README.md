# SB-OPS-PROD-SYNC-1.0 — Production Runtime Synchronization & Lovable Recovery

**Status:** ACTIVE — FOUNDER PRIORITY EXECUTION — STAGE 02 AUTHORIZED  
**Current stage:** 02 — Lovable tooling compatibility correction  
**Current owner:** Claude Code / Repository Synchronization Operator  
**Mission Control:** Smart Business Mission Control  
**Date activated:** 2026-09-01

## Objective

Synchronize the approved production/runtime implementation from `SmartBusinessv1/smart-business` into `SmartBusinessv1/starter-supab-shell`, preserve the intended production Supabase binding, restore the intended Lovable production implementation path, then verify the remaining practical bulk-import gaps before publication.

## Authoritative identities

- Canonical implementation repository: `SmartBusinessv1/smart-business`
- Mapped canonical runtime snapshot: `53b16a464be15e9c6b8f1d74827f9dce8cf9f928`
- Production delivery repository: `SmartBusinessv1/starter-supab-shell`
- Target baseline: `fd7c29c11882a164799e00584701a9db46e06cca`
- Authorized target branch: `mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`
- Production Lovable project: `f3e992ec-06df-4d49-b157-b92ec064c078`
- Production Supabase project: `gysgzasfcjvtrgaigfyn`
- Historical Lovable project excluded: `64c2b9b1-2461-4045-9acc-19e2658b8ca2`
- Lovable Cloud project excluded: `wwgqnshcgbukqczqblsm`
- Test Supabase project excluded: `drravyyauixltoihzmwo`

## Material communication

### Mission Control

- [`mission-control/01-runtime-synchronization-instruction.md`](mission-control/01-runtime-synchronization-instruction.md) — `instruction1`, authorized Claude Code to execute the mapped target-repository synchronization.
- [`mission-control/02-lovable-tooling-compatibility-correction-instruction.md`](mission-control/02-lovable-tooling-compatibility-correction-instruction.md) — `instruction2`, narrowly authorizes correction of the target-specific Lovable tooling dependency/lockfile state before target PR #1 may merge.

### Claude Code

- [`claude-code/01-runtime-synchronization-report.md`](claude-code/01-runtime-synchronization-report.md) — `report1`, stage 01 execution result: `PASS — PRODUCTION RUNTIME SYNCHRONIZATION PR READY FOR REVIEW`.
- Expected next record: `claude-code/02-lovable-tooling-compatibility-correction-report.md` — `report2` after target PR #1 is updated.

## Current branch / PR state

- Canonical synchronization map recorded through merged PR `#450`.
- Stage 01 communication/report recorded through merged canonical PR `#452`.
- Target implementation branch: `SmartBusinessv1/starter-supab-shell:mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`.
- Target runtime synchronization PR: [`SmartBusinessv1/starter-supab-shell#1`](https://github.com/SmartBusinessv1/starter-supab-shell/pull/1) — current stage-01 commit `d82c9a4`, `OPEN`, not merged, not self-approved.

## Stage 01 Mission Control review result

The application/runtime synchronization is accepted for correction-and-review continuation, but target PR #1 is not yet approved for merge because stage 01 replaced the target production Lovable tooling package `@lovable.dev/vite-tanstack-config` version `2.13.1` with canonical version `2.7.7` and copied the corresponding canonical lockfile state.

This is classified as target-specific platform compatibility drift created by an overly broad synchronization instruction, not as a failure of Claude Code's execution.

## Known remaining practical gaps after synchronization

1. Catalog bulk-import direct Category/Unit correction dropdown UX — reusable selectors are present in the target repo but are not yet wired into the import review screen.
2. Inventory / Opening Stock merchant-facing CSV/XLSX bulk workflow — not found in canonical runtime during stage 01.

These remain implementation follow-ups and are not part of stage 02.

## Next authorized action

Claude Code reads `mission-control/02-lovable-tooling-compatibility-correction-instruction.md` (`instruction2`), performs the narrow dependency/tooling correction on the existing target branch, updates `starter-supab-shell#1`, and writes `report2` plus required mission handover records.

## Not yet authorized

- merge to `starter-supab-shell/main` by Claude Code;
- Lovable publication;
- production domain cutover;
- Supabase migration/schema/RLS/Auth/data mutation;
- AWS/Lambda deployment;
- Catalog dropdown wiring;
- Inventory bulk-import implementation;
- use of the historical Lovable workspace as production source.
