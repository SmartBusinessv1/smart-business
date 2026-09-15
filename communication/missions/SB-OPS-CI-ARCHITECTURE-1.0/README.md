# SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

## Mission identity

- **Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Mission name:** Fast Gate + Full Assurance
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `ACTIVATION PROPOSED — AWAITING FOUNDER MERGE`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation branch:** `mission/SB-OPS-CI-ARCHITECTURE-1.0-activation`
- **Base:** `main@d42e1d4d03a5072b12f7aad0af25ba94310c4385`

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
- Remain manually triggerable; scheduled regression assurance may be added if justified.

### Test isolation hardening

- Identify shared-state-sensitive assertions such as global mutable row-count comparisons.
- Prefer run-scoped/test-scoped identifiers and fixture ownership where practical.
- Preserve security intent and fail-closed behavior.
- Do not weaken, skip, mute or bypass genuine defects.

## Explicit boundaries

This mission does **not** activate `SB-P-1.12`.

This mission does not authorize product features, UX changes, production deployment, production database access, schema/RLS/grant/RPC changes unless a separately reviewed CI-test-isolation correction genuinely requires explicit authority, dependency upgrades, or unrelated cleanup.

The closed `SB-OPS-CI-STABILIZATION-1.0` mission remains closed and archived.

## Initial evidence

The current application assurance workflow runs `npm run test` for every pull request and binds that job to `smart-business-test`. A recent documentation-only closeout PR therefore executed the full 169-test integration suite for about 3.5 minutes and exposed a shared-state-sensitive global-count assertion. That evidence motivates this architecture mission; it does not authorize bypassing relevant assurance.

## Activation condition

No implementation work begins until the activation PR is Founder/human merged. After merge, Mission Control will issue the first specialist implementation/review handoff under this mission.
