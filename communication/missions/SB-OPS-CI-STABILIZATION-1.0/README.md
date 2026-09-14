# SB-OPS-CI-STABILIZATION-1.0 — CI Baseline Stabilization

## Mission identity

- **Mission ID:** `SB-OPS-CI-STABILIZATION-1.0`
- **Mission name:** CI Baseline Stabilization
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `FOUNDER AUTHORIZED — ACTIVATION PENDING MERGE`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation base:** `main@00a7bc0f261c481a2d0f907f1d7c31f6adc3c6ec`

## Purpose

Convert the accepted CI baseline from `SB-OPS-BUILD-ASSURANCE-1.0` into a useful regression gate before the next Product Mission by resolving the two known red conditions without changing product behavior:

1. pre-existing lint failure;
2. GitHub Actions test job failing before test execution because the dedicated test environment is not yet safely bound to CI.

This mission does **not** reopen `SB-OPS-BUILD-ASSURANCE-1.0`.

## Build Now

### Workstream A — lint stabilization

- inventory the current lint errors/warnings on canonical `main`;
- correct only behavior-preserving formatting/style defects needed for `npm run lint` to exit successfully;
- preserve application behavior, data behavior, routes, permissions, financial logic and UI semantics;
- separately report any lint item that would require semantic/product behavior change rather than silently fixing it;
- verify typecheck and build remain green.

### Workstream B — CI integration-test execution

- wire `.github/workflows/build-assurance.yml` to an approved GitHub Actions test environment dedicated to `smart-business-test`;
- use only the isolated Supabase test project already documented by `docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md`;
- ensure no production project reference or production credential is used;
- keep sensitive values out of repository files, logs and mission records;
- provision required GitHub environment configuration only through a separately authorized human/Infrastructure Operations step;
- make the existing `npm run test` job genuinely execute in GitHub Actions;
- verify the resulting CI signal truthfully.

## Explicitly not authorized

- Product Truth, governance, roadmap, feature or UX changes;
- database/schema/RLS/grant/RPC changes;
- production Supabase access or mutation;
- dependency upgrades or package/lockfile changes merely to make CI green;
- test weakening, skipping, `continue-on-error`, `|| true`, artificial pass conditions, or reduced coverage to manufacture green CI;
- deployment/publishing;
- branch-protection changes;
- unrelated cleanup;
- `SB-P-1.12` activation.

## Stage model

### Stage 0 — Mission Control activation

Create and merge this communication-only activation package.

### Stage 1A — Claude Code repository stabilization

Claude Code audits and resolves behavior-preserving lint debt and prepares the minimal workflow binding needed for the approved CI test environment. It must not invent or expose credentials and must stop on any change requiring broader authority.

### Stage 1B — Infrastructure Operations / Founder environment provisioning

A separately activated Infrastructure Operations or Founder step configures the GitHub Actions test environment and required environment-scoped values for the dedicated `smart-business-test` project. No production environment values are authorized.

### Stage 2 — Claude Code CI verification

After Stage 1B, Claude Code verifies the workflow on the mission branch and records actual GitHub Actions evidence. Target state is truthful execution of all four application-assurance jobs.

### Stage 3 — Codex independent review

Codex independently verifies scope, behavior preservation, CI wiring, test-target isolation and actual CI evidence. Codex does not implement corrections unless separately authorized.

### Stage 4 — Mission Control acceptance / Founder merge

Mission Control reviews the final head and evidence. Founder/human merge remains required. Post-merge verification is required before closure.

## Acceptance target

The mission may be accepted only when:

- `npm run lint` succeeds on the accepted branch without product-behavior changes;
- typecheck succeeds;
- build succeeds;
- GitHub Actions executes the existing automated test suite against the approved isolated test environment;
- tests succeed, or any genuine product/test defect surfaced by real execution is separately classified and resolved under explicit authority before acceptance;
- no production test target or production credential is used;
- no test or quality gate is weakened to manufacture green;
- Codex independent review is complete;
- Mission Control substantive review is complete;
- Founder/human merge and post-merge verification complete.

## Carried but not included

Dependency-vulnerability remediation, routine fixture housekeeping automation and broader Build Later assurance capabilities remain separate future work unless separately activated.

## Product Mission boundary

`SB-P-1.12` remains **not activated**.