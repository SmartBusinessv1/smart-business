# SB-OPS-CI-ARCHITECTURE-1.0 — Fast Gate + Full Assurance

## Mission identity

- **Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Mission name:** Fast Gate + Full Assurance
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Founder:** Riyas PK
- **Mission Control:** Smart Business Mission Control
- **Status:** `STAGE 2 COMPLETE — AWAITING MISSION CONTROL`
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Activation PR:** `#580 — MERGED`
- **Activation merge:** `f92d2160cc820f24bd93af31187430622f45155f`
- **Working branch:** `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`
- **Implementation PR:** `#581 — OPEN — DO NOT MERGE`
- **Current owner:** Smart Business Mission Control (Stage 2 report awaiting review)

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

**COMPLETE — AWAITING MISSION CONTROL.**

Implemented exactly the 7 approved decisions: `build-assurance.yml` kept and evolved into the Fast Gate (`lint`, `typecheck`, `build`, new `test-fast` running the 8 environment-independent files, no `SUPABASE_TEST_*` binding); new `full-assurance.yml` created for the path-filtered, selective Full Assurance tier (`test-full`, the 20 Supabase-dependent files, `smart-business-test` environment + the same three secret-name bindings already approved); explicit `vitest.fast.config.ts`/`vitest.full.config.ts` (plus a small `vitest.shared.ts` helper) added, `vitest.config.ts` untouched; `docs/engineering/assurance/Build_Assurance_Baseline.md` extended, not forked; the unique-marker existence-assertion correction implemented in `tests/catalog-import/real-http.test.ts`; scheduled assurance and branch-protection changes correctly left out of scope.

Local evidence: `lint`/`typecheck`/`build` PASS; `test:fast` run with all `SUPABASE_TEST_*` vars explicitly unset -- 8 files, 61 tests, all passed, 10.06s, confirming no Supabase dependency.

Real CI evidence: Fast Gate all-parallel jobs 22-28s (well within the 60-90s target). Full Assurance correctly triggered on this PR's own applicable changes; first run found 1 of 108 tests failing in an *unmodified* file (`real-http.test.ts`'s "happy path" test) -- classified as pre-existing, transient GoTrue JWKS-lookup-class Auth flakiness, not attributable to this mission (this mission's own two corrected assertions in the same file passed cleanly); a diagnostic rerun confirmed 20/20 files, 108/108 tests, 0 failures. Combined total 169 tests across 28 files, matching the pre-split baseline. Reported as a new `FOLLOW-UP` finding, not repaired (outside this mission's narrow scope).

Report:

`claude-code/02-stage2-implementation-and-verification.md`

## Explicit boundaries

This mission does **not** activate `SB-P-1.12`.

This mission does not authorize product features, UX changes, production deployment, production database access, schema/RLS/grant/RPC changes, dependency upgrades/additions, branch-protection changes, scheduled assurance setup, or unrelated cleanup.

The closed `SB-OPS-CI-STABILIZATION-1.0` mission remains closed and archived.

## Current state

PR `#581` remains open and must not be merged until Stage 2 implementation, CI evidence, independent review, Mission Control acceptance and Founder merge authorization are complete.
