# SB-OPS-PROD-SYNC-1.0 — Production Runtime Synchronization & Lovable Recovery

**Status:** ACTIVE — FOUNDER PRIORITY EXECUTION  
**Current stage:** 01 — Runtime synchronization execution  
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

- [`mission-control/01-runtime-synchronization-instruction.md`](mission-control/01-runtime-synchronization-instruction.md) — `instruction1`, authorizes Claude Code to execute the mapped target-repository synchronization.

### Claude Code

- Expected next record: `claude-code/01-runtime-synchronization-report.md` — `report1` after the target PR is opened.

## Current branch / PR state

- Canonical synchronization map recorded through merged PR `#450`.
- Target implementation branch already exists: `SmartBusinessv1/starter-supab-shell:mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`.
- Target runtime synchronization PR: not yet opened.

## Known remaining practical gaps after synchronization

1. Catalog bulk-import direct Category/Unit correction dropdown UX.
2. Inventory / Opening Stock merchant-facing CSV/XLSX bulk workflow.

These are implementation follow-ups, not blockers to repository synchronization.

## Next authorized action

Claude Code reads the repository communication record, executes `instruction1`, opens the target PR, and writes `report1` into this mission folder according to the AI Communication and Handover Protocol.

## Not yet authorized

- merge to `starter-supab-shell/main` by Claude Code;
- Lovable publication;
- production domain cutover;
- Supabase migration/schema/RLS/Auth/data mutation;
- AWS/Lambda deployment;
- use of the historical Lovable workspace as production source.
