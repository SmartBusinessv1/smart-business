# SMART BUSINESS MISSION CONTROL

## SB-OPS-CI-STABILIZATION-1.0 — Activation Instruction

**Mission ID:** `SB-OPS-CI-STABILIZATION-1.0`  
**Mission name:** CI Baseline Stabilization  
**Mission type:** Non-Product operational / engineering-assurance mission  
**Authorized by:** Founder Riyas PK through Mission Control  
**Activation status:** `PENDING ACTIVATION MERGE`

## Objective

Stabilize the application CI baseline established by `SB-OPS-BUILD-ASSURANCE-1.0` so future Product Missions receive a meaningful regression signal.

Authorized targets:

1. make the existing lint command pass through behavior-preserving lint/style correction;
2. make the existing GitHub Actions test job execute against the approved isolated `smart-business-test` environment through explicit CI environment wiring.

## Boundary

This mission does not authorize Product Mission work, feature work, dependency upgrades, production provider access, schema/database changes, deployment, branch-protection changes, test weakening, or `SB-P-1.12` activation.

A failing real check is evidence. Do not suppress or weaken it.

## Stage 1A — Claude Code repository stabilization

After this activation package is Founder/human merged to canonical `main`, Mission Control may explicitly activate Claude Code for Stage 1A.

Claude Code shall:

- verify current `main`, repository instructions and the accepted baseline;
- inventory current lint findings before editing;
- correct only behavior-preserving lint/style defects;
- stop and report any finding that would require semantic/product behavior change;
- prepare the minimum workflow change needed to reference the approved GitHub Actions test environment;
- keep environment values out of repository content;
- run lint, typecheck and build where supported;
- record exact changed files, validation and unresolved findings.

Authorized repository scope:

- application/source/test files only where necessary for behavior-preserving lint correction;
- `.github/workflows/build-assurance.yml` only for minimal CI environment binding;
- mission communication records under `communication/missions/SB-OPS-CI-STABILIZATION-1.0/`;
- `communication/live/report.md` and mission-status metadata required by protocol.

Prohibited changes include business logic, user-facing behavior, database/RLS/grants/RPC changes, test deletion or reduced assertions, package/lockfile changes unless separately authorized after a proven blocker, deployment, and `SB-P-1.12` activation.

## Stage 1B — Infrastructure Operations / Founder

Mission Control will separately activate Stage 1B after reviewing Stage 1A's proposed CI binding. Stage 1B is limited to configuring GitHub Actions for the dedicated isolated test environment. Production environment values are not authorized.

Stage 1B is not activated by this file alone.

## Stage 2 — Claude Code CI verification

Stage 2 begins only after Mission Control verifies Stage 1B completion. Claude Code then verifies actual CI behavior and records authoritative GitHub Actions evidence.

## Stage 3 — Codex independent review

Codex independently reviews the final implementation and evidence. Codex may not fix defects unless separately authorized.

## Stop conditions

Stop and return to Mission Control if a lint correction appears behavior-changing, target identity is ambiguous, CI execution requires broader authority, a genuine application/test defect appears, repository state is conflicted, or mission scope becomes ambiguous.

## Merge rule

No AI self-approval or self-merge. Founder/human merge remains required after Mission Control acceptance.

`SB-P-1.12` remains not activated.