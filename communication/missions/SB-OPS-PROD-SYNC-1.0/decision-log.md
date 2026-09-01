# SB-OPS-PROD-SYNC-1.0 — Decision Log

## D-001 — Production delivery path

**Date:** 2026-09-01  
**Decision:** The intended production delivery path is `smart-business` canonical runtime → `starter-supab-shell` → Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078` → publication → `smartbusiness.teamlips.com`.

The historical Lovable project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` is excluded from production authority.

## D-002 — Production backend identity

**Date:** 2026-09-01  
**Decision:** Production runtime must remain bound to Supabase project `gysgzasfcjvtrgaigfyn`.

Lovable Cloud project `wwgqnshcgbukqczqblsm` and test project `drravyyauixltoihzmwo` are excluded from the production runtime path.

## D-003 — Synchronization map disposition

**Date:** 2026-09-01  
**Decision:** Read-only synchronization mapping completed and recorded through merged canonical PR `#450` with disposition:

`READY — PRODUCTION RUNTIME SYNCHRONIZATION MAPPED`

## D-004 — Claude Code execution authorization

**Date:** 2026-09-01  
**Decision:** Claude Code is the authorized repository synchronization operator for stage 01 and shall execute the mapped runtime synchronization on `SmartBusinessv1/starter-supab-shell` branch `mission/SB-OPS-PROD-SYNC-1.0-runtime-sync` under `mission-control/01-runtime-synchronization-instruction.md`.

No self-merge, publication, domain cutover, Supabase mutation, or AWS/Lambda deployment is authorized at this stage.

## D-005 — AI communication record rule

**Date:** 2026-09-01  
**Decision:** Material execution instructions and reports for this mission must be stored under `communication/missions/SB-OPS-PROD-SYNC-1.0/` according to `AI_Communication_and_Handover_Protocol.md`. Founder chat is not the durable AI-to-AI communication bus.

## D-006 — Stage 01 execution result

**Date:** 2026-09-02  
**Decision:** Stage 01 runtime synchronization was executed against `SmartBusinessv1/starter-supab-shell` branch `mission/SB-OPS-PROD-SYNC-1.0-runtime-sync` (commit `d82c9a4`), producing target PR [`starter-supab-shell#1`](https://github.com/SmartBusinessv1/starter-supab-shell/pull/1). Result: `PASS — PRODUCTION RUNTIME SYNCHRONIZATION PR READY FOR REVIEW`. Full detail in `report1` (`claude-code/01-runtime-synchronization-report.md`). The PR was not merged or self-approved.

## D-007 — Disclosed frozen-lockfile verification deviation

**Date:** 2026-09-02  
**Decision:** `bun install --frozen-lockfile` could not be reproduced in the verification environment because the canonical `bun.lock` records at least one dependency resolved from a Lovable-internal private npm registry not reachable outside Lovable's own build environment. A non-frozen diagnostic install (resolving from public npm) was used for build/lint verification only; its resulting lockfile changes were discarded before commit. The `bun.lock` committed to the target PR is the exact, unmodified canonical file from the mapped source SHA — no local reconciliation was performed on it. This is recorded as an environment-verification limitation for Mission Control/Founder awareness, not as a defect in the synchronized dependency state.
