# SB-OPS-PROD-SYNC-1.0 — Production Runtime Synchronization & Lovable Recovery

**Status:** ACTIVE — FOUNDER PRIORITY EXECUTION — STAGE 01 EXECUTED, AWAITING REVIEW  
**Current stage:** 01 — Runtime synchronization execution (executed; target PR open for review)  
**Current owner:** Mission Control (review) — next stage owner not yet assigned  
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

- [`mission-control/01-runtime-synchronization-instruction.md`](mission-control/01-runtime-synchronization-instruction.md) — `instruction1`, authorizes Claude Code to execute the mapped target-repository synchronization.

### Claude Code

- [`claude-code/01-runtime-synchronization-report.md`](claude-code/01-runtime-synchronization-report.md) — `report1`, stage 01 execution result: `PASS — PRODUCTION RUNTIME SYNCHRONIZATION PR READY FOR REVIEW`.

## Current branch / PR state

- Canonical synchronization map recorded through merged PR `#450`.
- Target implementation branch: `SmartBusinessv1/starter-supab-shell:mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`.
- Target runtime synchronization PR: [`SmartBusinessv1/starter-supab-shell#1`](https://github.com/SmartBusinessv1/starter-supab-shell/pull/1) — commit `d82c9a4`, `OPEN`, not merged, not self-approved.
- This mission-communication update: on branch `mission/SB-OPS-PROD-SYNC-1.0-stage01-report` in `SmartBusinessv1/smart-business`, via a separate PR (not self-merged).

## Known remaining practical gaps after synchronization

1. Catalog bulk-import direct Category/Unit correction dropdown UX — reusable selectors are now present in the target repo via this synchronization but not yet wired into the import review screen.
2. Inventory / Opening Stock merchant-facing CSV/XLSX bulk workflow — not found in canonical runtime during this synchronization; unchanged by stage 01.

These are implementation follow-ups, not blockers to repository synchronization.

## Next authorized action

Mission Control reviews `report1` and target PR `starter-supab-shell#1`, decides on the disclosed `bun.lock`/frozen-install environment deviation (§12 of `report1`), and separately authorizes the next stage (e.g. merge of the target PR, then Lovable-side verification) before publication or domain work proceeds.

## Not yet authorized

- merge to `starter-supab-shell/main` by Claude Code;
- Lovable publication;
- production domain cutover;
- Supabase migration/schema/RLS/Auth/data mutation;
- AWS/Lambda deployment;
- use of the historical Lovable workspace as production source.
