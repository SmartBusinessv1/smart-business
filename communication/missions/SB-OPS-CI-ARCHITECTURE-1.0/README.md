# SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

## Mission identity

- **Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Mission name:** Fast Gate + Full Assurance
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `STAGE 1 COMPLETE — AWAITING MISSION CONTROL`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#580 — MERGED`
- **Activation merge:** `f92d2160cc820f24bd93af31187430622f45155f`
- **Working branch:** `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`
- **Current owner:** Smart Business Mission Control (Stage 1 report awaiting review)

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

## Stage 1 — Classification and design

**COMPLETE — AWAITING MISSION CONTROL.**

All 28 test files classified (8 environment-independent, 20 Supabase-dependent; none uncertain). Fast Gate / Full Assurance split designed, path-trigger model proposed, and the flagged shared-state-sensitive assertion in `tests/catalog-import/real-http.test.ts` analyzed with a concrete fix design (unique-marker existence check replacing an unscoped global-count comparison).

Controlling instruction:

`mission-control/02-stage1-classification-and-design-instruction.md`

Report:

`claude-code/01-stage1-classification-and-design.md`

Stage 1 is documentation-only. No CI/test implementation change is authorized until Mission Control reviews and accepts the design; several explicit decisions are needed first (report Section 9).

## Explicit boundaries

This mission does **not** activate `SB-P-1.12`.

This mission does not authorize product features, UX changes, production deployment, production database access, schema/RLS/grant/RPC changes unless separately authorized, dependency upgrades, or unrelated cleanup.

The closed `SB-OPS-CI-STABILIZATION-1.0` mission remains closed and archived.

## Initial evidence

The current application assurance workflow runs `npm run test` for every pull request and binds that job to `smart-business-test`. A recent documentation-only closeout PR therefore executed the full 169-test integration suite for about 3.5 minutes and exposed a shared-state-sensitive global-count assertion. That evidence motivates this architecture mission; it does not authorize bypassing relevant assurance.
