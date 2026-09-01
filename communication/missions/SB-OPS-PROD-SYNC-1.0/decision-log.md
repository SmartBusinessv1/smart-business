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

## D-008 — Preserve target-specific production Lovable tooling compatibility

**Date:** 2026-09-02  
**Decision:** Mission Control review found that stage 01 changed `SmartBusinessv1/starter-supab-shell` from its pre-synchronization target-specific `@lovable.dev/vite-tanstack-config` version `2.13.1` to canonical version `2.7.7`. Because `starter-supab-shell` is the delivery repository intentionally created for production Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078`, its pre-synchronization Lovable tooling state is treated as target-specific platform compatibility configuration unless direct evidence proves a downgrade is required.

Target PR `starter-supab-shell#1` is therefore held from merge pending a narrow correction under `mission-control/02-lovable-tooling-compatibility-correction-instruction.md` (`instruction2`). Claude Code is authorized to preserve `2.13.1`, retain all SB-P-1.10/SB-P-1.11 runtime dependencies and scripts required by the synchronized application, and narrowly reconcile `package.json`/`bun.lock` on the existing target branch. This finding corrects an overly broad synchronization instruction and is not classified as a Claude Code execution failure.

No target merge, Lovable publication, production domain cutover, Supabase mutation, AWS/Lambda deployment, or unrelated feature work is authorized by this decision.

## D-009 — Stage 02 execution result

**Date:** 2026-09-02  
**Decision:** Stage 02 (`instruction2`) was executed against `SmartBusinessv1/starter-supab-shell` branch `mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`, updating target PR [`starter-supab-shell#1`](https://github.com/SmartBusinessv1/starter-supab-shell/pull/1) to commit `1b84c6462ee4a49c57c866e77e1e4b91935fdc80`. `@lovable.dev/vite-tanstack-config` is restored to `2.13.1`; the SB-P-1.11 additions (`@aws-sdk/client-s3`, `aws4fetch`, `build:lambda`) are retained; the three `2.7.7`-only devDependencies (`@tanstack/router-core`, `esbuild`, `seroval`) are removed, proven unnecessary by a passing build. Result: `PASS — LOVABLE TOOLING COMPATIBILITY CORRECTION READY FOR REVIEW`. Full detail in `report2` (`claude-code/02-lovable-tooling-compatibility-correction-report.md`). The PR was updated but not merged or self-approved.

## D-010 — Frozen-lockfile deviation resolved

**Date:** 2026-09-02  
**Decision:** The `bun install --frozen-lockfile` deviation disclosed in `D-007` (stage 01) does not recur after the stage 02 correction. The lockfile reconciled in stage 02 — built from the target baseline's own `2.13.1` lockfile plus only the newly-required SB-P-1.11 entries — is fully self-consistent and passes `bun install --frozen-lockfile` cleanly. This is recorded so Mission Control/the Founder do not need to carry the stage 01 deviation forward as an open concern into stage 02's review.
