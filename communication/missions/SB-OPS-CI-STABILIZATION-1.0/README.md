# SB-OPS-CI-STABILIZATION-1.0 — CI Baseline Stabilization

## Mission identity

- **Mission ID:** `SB-OPS-CI-STABILIZATION-1.0`
- **Mission name:** CI Baseline Stabilization
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `STAGE 2 ACTIVE — CI VERIFICATION`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#577 — MERGED`
- **Activation merge:** `705eaebb8e2fb01e8862666a258d3babff8bd694`
- **Implementation PR:** `#578 — OPEN`
- **Current implementation branch:** `mission/SB-OPS-CI-STABILIZATION-1.0-stage1a`

## Purpose

Resolve the two known red application-CI baseline conditions from the closed Build Assurance mission without changing product behavior:

1. pre-existing lint failure;
2. GitHub Actions tests not yet executing against the approved isolated test environment.

This mission does not reopen `SB-OPS-BUILD-ASSURANCE-1.0`.

## Build Now

### Workstream A — lint stabilization

Correct only behavior-preserving formatting/style defects required for the real repository lint command to succeed. Any finding requiring semantic or product-behavior change must be reported rather than silently fixed. Typecheck and build must remain green.

### Workstream B — CI integration-test execution

Prepare and provision the minimum approved GitHub Actions binding required for the isolated `smart-business-test` environment. Sensitive values must remain outside repository content and logs.

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

**COMPLETE.** PR `#577` merged to canonical `main` at `705eaebb8e2fb01e8862666a258d3babff8bd694`.

### Stage 1A — Claude Code repository stabilization

**COMPLETE — ACCEPTED BY MISSION CONTROL.**

Claude Code corrected all 152 prior `prettier/prettier` lint errors through formatting-only changes. Authoritative CI showed lint PASS, typecheck PASS, build PASS, and test FAIL only because the approved CI test environment had not yet been provisioned.

Seven pre-existing warnings remain reported and intentionally unresolved because they require structural/semantic judgment rather than formatting-only correction.

Accepted report: `claude-code/01-stage1a-report.md`

Mission Control disposition: `mission-control/03-stage1a-review-and-stage1b-authorization.md`

### Stage 1B — Infrastructure Operations / Founder environment provisioning

**COMPLETE.** Founder reported that the existing GitHub Actions environment `smart-business-test` now contains the three required environment-scoped secret names. No secret value is recorded in mission artifacts.

### Stage 2 — Claude Code CI verification

**ACTIVE.** Claude Code is authorized to verify actual GitHub Actions execution on PR `#578` against `smart-business-test`, record exact CI evidence, and stop. If genuine test execution surfaces a defect, it must be reported rather than repaired without separate authority.

Controlling authorization: `mission-control/04-stage1b-completion-and-stage2-authorization.md`

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
