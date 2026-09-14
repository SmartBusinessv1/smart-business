# SB-OPS-CI-STABILIZATION-1.0 — CI Baseline Stabilization

## Mission identity

- **Mission ID:** `SB-OPS-CI-STABILIZATION-1.0`
- **Mission name:** CI Baseline Stabilization
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `STAGE 1A ACTIVE — CLAUDE CODE REPOSITORY STABILIZATION`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#577 — MERGED`
- **Activation merge:** `705eaebb8e2fb01e8862666a258d3babff8bd694`
- **Current Stage 1A branch:** `mission/SB-OPS-CI-STABILIZATION-1.0-stage1a`

## Purpose

Resolve the two known red application-CI baseline conditions from the closed Build Assurance mission without changing product behavior:

1. pre-existing lint failure;
2. GitHub Actions tests not yet executing against the approved isolated test environment.

This mission does not reopen `SB-OPS-BUILD-ASSURANCE-1.0`.

## Build Now

### Workstream A — lint stabilization

Correct only behavior-preserving formatting/style defects required for the real repository lint command to succeed. Any finding requiring semantic or product-behavior change must be reported rather than silently fixed. Typecheck and build must remain green.

### Workstream B — CI integration-test execution

Prepare the minimum repository-side workflow binding required for the approved isolated `smart-business-test` environment. Sensitive values must remain outside repository content and logs. Actual environment provisioning is a separate Stage 1B action requiring explicit Infrastructure Operations / Founder authorization.

## Explicitly not authorized

- Product Truth, governance, roadmap, feature or UX changes;
- database/schema/RLS/grant/RPC changes;
- production provider access or mutation;
- dependency or lockfile changes merely to make CI green;
- test weakening, skipping, artificial pass conditions or reduced coverage;
- deployment/publishing;
- branch-protection changes;
- unrelated cleanup;
- `SB-P-1.12` activation.

## Stage status

### Stage 0 — Mission Control activation

**COMPLETE.** PR `#577` merged to canonical `main` at `705eaebb8e2fb01e8862666a258d3babff8bd694`. Post-merge baseline remained truthful: Markdown PASS; typecheck PASS; build PASS; lint FAIL; test FAIL.

### Stage 1A — Claude Code repository stabilization

**ACTIVE.** Controlling instruction:

`mission-control/02-stage1a-claude-instruction.md`

Claude Code is authorized only on:

`mission/SB-OPS-CI-STABILIZATION-1.0-stage1a`

Stage 1A stops after behavior-preserving lint stabilization and repository-side CI binding preparation. It does not authorize environment provisioning.

### Stage 1B — Infrastructure Operations / Founder environment provisioning

**NOT YET AUTHORIZED.** This stage will configure the approved test environment only after Mission Control reviews Stage 1A.

### Stage 2 — Claude Code CI verification

**NOT YET AUTHORIZED.** After Stage 1B, Claude Code will verify actual CI execution and record evidence.

### Stage 3 — Codex independent review

**NOT YET AUTHORIZED.** Codex will independently review scope, behavior preservation, CI wiring, target isolation and actual CI evidence.

### Stage 4 — Mission Control acceptance / Founder merge

**NOT YET AUTHORIZED.** Founder/human merge and post-merge verification remain required for closure.

## Acceptance target

The mission may be accepted only when lint, typecheck and build succeed; GitHub Actions genuinely executes the existing automated tests against the approved isolated test environment; tests succeed or any genuine defect is separately classified and resolved under explicit authority; no production target is used; no test or quality gate is weakened; Codex review and Mission Control acceptance complete; and Founder/human merge plus post-merge verification complete.

## Carried but not included

Dependency-vulnerability remediation, routine fixture-housekeeping automation and broader Build Later assurance capabilities remain separate work.

## Product Mission boundary

`SB-P-1.12` remains **not activated**.
