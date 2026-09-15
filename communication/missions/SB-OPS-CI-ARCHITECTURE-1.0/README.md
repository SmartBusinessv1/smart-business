# SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

## Mission identity

- **Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Mission name:** Fast Gate + Full Assurance
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `STAGE 3 ACTIVE — INDEPENDENT REVIEW`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#580 — MERGED`
- **Activation merge:** `f92d2160cc820f24bd93af31187430622f45155f`
- **Working branch:** `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`
- **Implementation PR:** `#581 — OPEN — DO NOT MERGE`
- **Stage 2 accepted implementation head:** `74455d538e984edd1a7fc3b2187d02029d490e84`
- **Current owner:** Codex (Stage 3 independent review)

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

**COMPLETE — ACCEPTED.**

Implemented the approved two-tier architecture: `build-assurance.yml` now provides the always-running Fast Gate (`lint`, `typecheck`, `build`, `test-fast`); new `full-assurance.yml` provides path-filtered Full Assurance (`test-full`) against `smart-business-test`; explicit `vitest.fast.config.ts` / `vitest.full.config.ts` plus `vitest.shared.ts` separate the suites; `test:fast` / `test:full` scripts were added without dependency or lockfile changes; and the two shared-state-sensitive rejected-auth assertions now use request-specific marker existence checks.

Mission Control independently verified final Stage 2 head `74455d538e984edd1a7fc3b2187d02029d490e84`:

- Markdown Quality Gate `#1676` / `35011698130` — SUCCESS;
- Application Build Assurance `#72` / `35011698084` — SUCCESS;
- Full Assurance `#3` / `35011698066` — SUCCESS;
- Fast Tests — 8/8 files, 61/61 tests;
- Full Assurance — 20/20 files, 108/108 tests;
- combined baseline — 28 files, 169 tests.

The earlier transient Auth/JWKS-class failure is retained as a follow-up finding, not silently repaired or dismissed.

Report:

`claude-code/02-stage2-implementation-and-verification.md`

Mission Control Stage 2 acceptance / Stage 3 authority:

`mission-control/04-stage2-review-and-stage3-authorization.md`

## Stage 3 — Independent review

**ACTIVE.**

Codex is authorized to independently review scope integrity, Fast/Full tier correctness and completeness, path filtering, the marker-based security assertion, final-head CI evidence, assurance documentation, and the transient Auth flake classification.

Required report:

`codex/01-stage3-independent-review.md`

No implementation changes or merge are authorized during Stage 3.

## Explicit boundaries

This mission does **not** activate `SB-P-1.12`.

This mission does not authorize product features, UX changes, production deployment, production database access, schema/RLS/grant/RPC changes, dependency upgrades/additions, branch-protection changes, scheduled assurance setup, or unrelated cleanup.

The closed `SB-OPS-CI-STABILIZATION-1.0` mission remains closed and archived.

## Current state

PR `#581` remains open and must not be merged until Stage 3 independent review, Mission Control Stage 4 acceptance, and Founder merge authorization are complete.
