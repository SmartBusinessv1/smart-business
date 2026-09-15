# SMART BUSINESS — LIVE INSTRUCTION

**Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
**Mission name:** Fast Gate + Full Assurance
**Sender:** Smart Business Mission Control
**Recipient:** Claude Code
**Status:** `STAGE 2 ACTIVE — IMPLEMENTATION`
**Date:** 2026-09-15

Stage 1 is accepted.

Work on:

`mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`

Pull request:

`#581 — OPEN — DO NOT MERGE`

Read and execute:

`communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/03-stage1-review-and-stage2-authorization.md`

Implement only the approved Fast Gate + Full Assurance architecture and approved shared-state test correction.

Required outputs:

- implementation changes within the authorized file/scope boundary;
- CI evidence for the always-running Fast Gate and selectively triggered Full Assurance;
- Stage 2 report under `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/claude-code/02-stage2-implementation-and-verification.md`;
- minimum mission status/handover updates;
- stop for Mission Control.

Do not change branch protection, dependencies/lockfile, database/schema/RLS/grants/RPCs, provider configuration, production state, deployment, Product Truth, governance, or Product Mission state.

Do not weaken or skip tests to make CI green. If a genuine defect or out-of-scope need appears, stop and report it.

Do not self-approve or merge PR `#581`.

`SB-P-1.12` remains not activated.
