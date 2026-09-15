# SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

## Mission identity

- **Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Mission name:** Fast Gate + Full Assurance
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `STAGE 2 ACTIVE — IMPLEMENTATION`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#580 — MERGED`
- **Activation merge:** `f92d2160cc820f24bd93af31187430622f45155f`
- **Working branch:** `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`
- **Implementation PR:** `#581 — OPEN — DO NOT MERGE`
- **Current owner:** Claude Code (Stage 2 implementation)

## Purpose

Graduate the current CI model from "run everything everywhere" into a two-speed architecture that preserves assurance while reducing unnecessary PR latency.

## Build Now

### Fast Gate — every PR

- Markdown quality checks where applicable.
- Lint.
- Typecheck.
- Build.
- Fast/local tests that do not require the shared `smart-business-test` Supabase environment.
- Target a practical PR feedback time of roughly 60–90 seconds where repository reality allows, without weakening correctness.

### Full Assurance — selective and mandatory at the right boundaries

- Real Supabase integration tests.
- Real HTTP/security-boundary tests.
- RLS, concurrency, database-behavior and other environment-dependent regression tests.
- Run when relevant application, database, security, integration or test paths change.
- Run before final Product Mission acceptance where applicable.
- Run on `main` after relevant implementation merges.
- Remain manually triggerable.

### Test isolation hardening

- Remove the identified shared-state-sensitive global-count assertion pattern in `tests/catalog-import/real-http.test.ts`.
- Use request-specific unique markers and scoped existence assertions.
- Preserve or strengthen the original security intent.
- Do not weaken, skip, mute or bypass genuine defects.

## Stage 1 — Classification and design

**COMPLETE — ACCEPTED.**

All 28 test files were classified: 8 environment-independent and 20 Supabase-dependent, none uncertain. The global `setupFiles` coupling in `vitest.config.ts` was confirmed as the structural blocker preventing the pure test subset from running without Supabase credentials.

Report:

`claude-code/01-stage1-classification-and-design.md`

Mission Control review / Stage 2 authority:

`mission-control/03-stage1-review-and-stage2-authorization.md`

## Stage 2 — Implementation

**ACTIVE.**

Authorized decisions:

- keep `.github/workflows/build-assurance.yml` as the existing Fast Gate workflow identity;
- create `.github/workflows/full-assurance.yml` for selective Full Assurance;
- use explicit fast/full Vitest config files rather than Vitest projects;
- use conservative path filtering including `src/**`, `tests/**`, `supabase/**`, `lambda/**`, `scripts/**`, package/config files and both assurance workflows;
- extend `docs/engineering/assurance/Build_Assurance_Baseline.md` rather than fork a competing assurance contract;
- implement the unique-marker existence assertion in `tests/catalog-import/real-http.test.ts`;
- keep scheduled regression assurance out of Stage 2;
- make no branch-protection changes in Stage 2.

## Explicit boundaries

This mission does **not** activate `SB-P-1.12`.

This mission does not authorize product features, UX changes, production deployment, production database access, schema/RLS/grant/RPC changes, dependency upgrades/additions, branch-protection changes, scheduled assurance setup, or unrelated cleanup.

The closed `SB-OPS-CI-STABILIZATION-1.0` mission remains closed and archived.

## Current state

PR `#581` remains open and must not be merged until Stage 2 implementation, CI evidence, independent review, Mission Control acceptance and Founder merge authorization are complete.
