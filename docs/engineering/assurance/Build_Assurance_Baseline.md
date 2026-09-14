# Build Assurance Baseline

**Mission ID:** `SB-OPS-BUILD-ASSURANCE-1.0`
**Mission name:** Build Assurance & Automation Foundation
**Owner:** Claude Code (Stage 1 implementation; corrected per Codex Stage 2 review)
**Status:** `STAGE 1 EVIDENCE CORRECTED (F-01/F-02/F-03) -- AWAITING MISSION CONTROL`
**Date:** 2026-09-14 (corrected 2026-09-15)

**Correction record:** this document was corrected on 2026-09-15 under `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/mission-control/05-correction-authorization.md`, addressing findings F-01, F-02, and F-03 of the [Codex Stage 2 independent review](../../../communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/codex/02-stage2-independent-review.md). Corrected passages are marked in place; no other content changed.

## 1. Purpose

This document is the evidence contract for `.github/workflows/build-assurance.yml`. It states exactly what each job proves, what it does not prove, and how to read PASS / FAIL / FOLLOW-UP / NOT APPLICABLE results. It does not itself assert Product, runtime, security, or Founder acceptance.

Green CI from this workflow proves only that the listed commands, run against the checked-out commit on a GitHub-hosted `ubuntu-latest` runner, exited with status `0`. It does not prove correctness beyond what each underlying tool checks, does not prove runtime behaviour, and does not prove security, performance, accessibility, or Product acceptance.

## 2. Workflow location

`.github/workflows/build-assurance.yml`

Four independent jobs, each running on a fresh `ubuntu-latest` runner with `actions/checkout` + `actions/setup-node` (Node 24, matching the Node version already used by `.github/workflows/aws-gc38r-parser-deploy.yml` and this repository's local development toolchain) + `npm ci`:

| Job | Command | Trigger |
|---|---|---|
| `lint` | `npm run lint` (ESLint, including `eslint-plugin-prettier`) | push to `main`, pull requests targeting `main` |
| `typecheck` | `npx tsc --noEmit` | push to `main`, pull requests targeting `main` |
| `build` | `npm run build` (`vite build`) | push to `main`, pull requests targeting `main` |
| `test` | `npm run test` (`vitest run`) | push to `main`, pull requests targeting `main` |

Each job fails closed: a non-zero exit from its one command fails that job. No job retries past a failure, suppresses output, or auto-fixes application code. Every command above is an existing `package.json` script or an existing repository-supported CLI invocation (`npx tsc`, using the `typescript` devDependency and the repository's existing `tsconfig.json`) -- none were added or altered to make this workflow pass.

This workflow is **not** a required branch-protection check unless Mission Control or the Founder separately configures it as one in repository settings. This mission does not authorize branch-protection changes.

## 3. What each check proves and does not prove

### `lint` -- ESLint + Prettier (`npm run lint`)

**Proves:** the checked-out source conforms to the repository's configured ESLint rule set (`eslint.config.js`), including `eslint-plugin-prettier` formatting rules, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

**Does not prove:** runtime correctness, logical correctness, type correctness, test coverage, security, or accessibility. A lint PASS is a style/pattern conformance signal only.

**Known environment caveat:** this repository's `.prettierrc` has no `endOfLine` override, so Prettier's default (`lf`) applies, matching how source files are stored in Git. A local Windows checkout with `core.autocrlf=true` converts stored `LF` line endings to `CRLF` on disk, which ESLint/Prettier then flags as formatting violations on every affected line -- this is a local checkout artifact, not a repository defect, and does not reproduce on the `ubuntu-latest` CI runner (verified 2026-09-14 by comparing `git show HEAD:<file>` bytes, which are `LF`, against the Windows working-tree bytes, which were `CRLF`, for a sample of files including `vite.config.ts`). Section 4 below reports the genuine, CI-representative result obtained after normalizing the local working tree to the repository's stored line endings.

### `typecheck` -- TypeScript (`npx tsc --noEmit`)

**Proves:** the codebase compiles under the repository's `tsconfig.json` with zero type errors at the commit checked out. No `.js`/`.mjs` output is emitted or used.

**Does not prove:** runtime behaviour, correctness of `any`-typed or externally-typed boundaries (e.g. Supabase client responses cast without a matching type), or test coverage.

### `build` -- Vite production build (`npm run build`)

**Proves:** the application (client + SSR server bundle) builds successfully end-to-end via `vite build`/Nitro at the commit checked out, with no build-time failures.

**Does not prove:** that the built application runs correctly, that environment variables/secrets required at runtime are present or correct, or that the deployed artifact behaves as built (this workflow does not deploy, publish, or otherwise mutate any runtime, Lovable, Supabase, AWS, or Cloudflare state).

### `test` -- Vitest (`npm run test`)

**Proves:** locally, with the required Supabase test-environment credentials present, every test file under the repository's Vitest configuration passes at the commit checked out. In GitHub Actions today, this job proves nothing -- see the CI-specific limitation below.

**Coverage composition -- corrected 2026-09-15 per Codex Stage 2 review Finding F-02:** the 28-file suite is not uniformly "catalog-import logic only," and this section previously stated that Supabase RLS/Auth behaviour "has no automated coverage" -- that was false and is corrected here. 8 files (`tests/catalog-import/classify.test.ts`, `content-type.test.ts`, `fields.test.ts`, `idempotency.test.ts`, `parse-isolated.test.ts`, `parse.test.ts`, `validate.test.ts`, and `tests/parser-lease/roles-anywhere-decimal-serial.test.ts`) are pure logic/parsing/validation tests with no external network dependency. The remaining 20 files (all 17 `tests/inventory/**` files, `tests/catalog-import/real-http.test.ts` and `support-schema-rls.test.ts`, and `tests/parser-lease/guard-lease-rpc.test.ts`) are integration tests: they sign in real Supabase Auth users via `tests/setup/test-clients.ts`'s `createTestOwner` against a developer-configured `SUPABASE_TEST_URL` project and exercise real RLS/PostgREST behaviour -- for example `tests/inventory/rls-cross-business.test.ts` (cross-business inventory non-disclosure) and `tests/catalog-import/support-schema-rls.test.ts` (catalog-import ACL/RLS/constraint checks). What remains true and is preserved from the original text: this is scoped exercise of the specific tables/flows those 20 files cover, not comprehensive Auth/RLS/security coverage of the application -- most UI routes, the broader RLS/permission matrix outside these tests, and WhatsApp/OpenAI integration remain without automated coverage. Coverage-percentage measurement remains out of scope for this mission.

**CI-specific limitation (genuine finding, not fixed by this mission) -- corrected 2026-09-15 per Codex Stage 2 review Findings F-02 and F-03:** `vitest.config.ts` registers `tests/setup/load-env.ts` as a global `setupFiles` entry applied to **every** `tests/**/*.test.ts` file, including the 8 pure-logic files that need no Supabase credentials at all. It throws immediately if `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, or `SUPABASE_TEST_SERVICE_ROLE_KEY` are missing, before any test module -- pure-logic or integration -- runs. As a direct result, the `test` job in real CI reaches **zero successful test executions**: CI reports 28 failed files and 0 executed tests, not 169 passing assertions minus a failing subset (confirmed in Section 4.2). It fails closed correctly rather than hanging, skipping silently, or using fabricated/placeholder credentials.

This document previously stated that provisioning `SUPABASE_TEST_*` as a GitHub Actions secret would be sufficient to enable the job; that was inaccurate and is corrected here. Enabling real test execution in CI requires two separate things, neither done by this mission: (1) an approved Supabase test-environment target that Mission Control/Founder authorizes exposing to CI -- accepting that running the 20 integration files causes the same real Auth/database writes described in Section 5, Finding 4, not a side-effect-free check -- and (2) explicit workflow wiring: `.github/workflows/build-assurance.yml`'s `test` job currently declares no `environment:` and binds no secret to a process environment variable, so a GitHub Actions secret, even if provisioned, would not reach the test process without a workflow-file change. Making that workflow-file change is out of scope for this correction and requires separate Mission Control authorization. This is reported as a `FOLLOW-UP` finding for Mission Control, not repaired here.

## 4. Validation results (Stage 1, 2026-09-14)

### 4.1 Local pre-push evidence

Run locally against mission branch `mission/SB-OPS-BUILD-ASSURANCE-1.0-ci-baseline` at base commit `4dcb272ebbf8c15410f5e206c71ebc0ec8cfe957`, Node `v24.18.0`, npm `11.16.0`, with the local working tree normalized to the repository's stored (`LF`) line endings to obtain a CI-representative result (see Section 3 caveat), and with a developer's local `.env.test.local` Supabase test credentials present.

| Check | Command | Local result | Classification |
|---|---|---|---|
| Dependency install | `npm ci` | Exit `0`; 569 packages installed; `npm audit` reports 10 known vulnerabilities (5 moderate, 5 high) in third-party dependencies | `PASS` (install) / `FOLLOW-UP` (vulnerabilities -- see Section 5) |
| Lint | `npm run lint` | Exit `1`; 159 problems (152 errors, 7 warnings) | `FAIL -- PRE-EXISTING` (see Section 5) |
| Typecheck | `npx tsc --noEmit` | Exit `0`; no output | `PASS` |
| Build | `npm run build` | Exit `0`; client + SSR bundle produced in `.output/` | `PASS` |
| Test | `npm run test` | Exit `0`; 28 test files, 169 tests, all passed (147.81s) | `PASS` (local only; required Supabase test credentials were present -- **this run wrote real state to the `SUPABASE_TEST_URL` target, it was not side-effect-free; see Section 5, Finding 4 and Section 7**) |

### 4.2 Actual GitHub Actions CI evidence (authoritative)

Pull request [#575](https://github.com/SmartBusinessv1/smart-business/pull/575), run [`34842467495`](https://github.com/SmartBusinessv1/smart-business/actions/runs/34842467495), `ubuntu-latest`, commit `8ed3183a2f87900170660c89f1a4eda3f5d61868`. This is the authoritative result -- it runs on the actual CI platform with no local-environment artifacts and no pre-provisioned secrets.

| Job | CI result | Notes |
|---|---|---|
| `lint` | `FAIL` | 159 problems (152 errors, 7 warnings) -- exact match to the local LF-normalized result. Pre-existing (Section 5). |
| `typecheck` | `PASS` | No errors. |
| `build` | `PASS` | Client + SSR bundle produced. |
| `test` | `FAIL` | Fails immediately (~25s) at `tests/setup/load-env.ts:11` for **all 28 files** -- missing `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, `SUPABASE_TEST_SERVICE_ROLE_KEY`. 28 failed files, **0 tests executed** (not a partial/169-minus-some-failures result). Correctly fails closed rather than skipping; see Section 3's `test` job entry and Section 5, Findings 3-4. |

The `lint` and `test` failures are genuine, pre-existing/structural findings reported to Mission Control (Section 5) -- not repaired by this mission.

## 5. Known pre-existing findings (not fixed by this mission)

This mission does not authorize application-code repair. The following are reported as findings for Mission Control, not resolved here.

1. **Lint -- 152 pre-existing `prettier/prettier` formatting errors** across many `src/routes/**`, `tests/catalog-import/**`, and config files, plus **7 pre-existing warnings** (6 `react-refresh/only-export-components`, 1 `react-hooks/exhaustive-deps` at `src/routes/_authenticated/inventory.$itemId.tsx:1436`). None were introduced by this mission; none were modified. `npm run lint -- --fix` would mechanically resolve the 152 formatting errors, but running `--fix` against application source is application-code modification and is outside this mission's authorization.
2. **Dependency vulnerabilities** -- `npm audit` reports 10 known vulnerabilities (5 moderate, 5 high) in third-party dependencies at the currently locked versions. Dependency upgrades are explicitly out of scope for this mission ("do not modify dependencies... merely to make CI pass"; also not "merely to make CI pass" since this workflow does not run `npm audit` as a gate). Recorded here as a `FOLLOW-UP` candidate for a future, separately authorized mission.
3. **`test` job cannot run in real CI today, and enabling it needs more than a secret -- corrected 2026-09-15 per Codex Stage 2 review Finding F-03.** `npm run test` passes locally (Section 4.1) because a developer's gitignored `.env.test.local` supplies `SUPABASE_TEST_URL` / `SUPABASE_TEST_ANON_KEY` / `SUPABASE_TEST_SERVICE_ROLE_KEY`; GitHub Actions has none of these configured, so the job fails closed for all 28 files at the global `setupFiles` loader (Section 3), correctly rather than skipping or faking a result. This finding previously said provisioning a GitHub Actions secret would be sufficient to enable the job -- that was inaccurate and is corrected here. `.github/workflows/build-assurance.yml`'s `test` job declares no `environment:` and binds no secret to a process variable, so a provisioned secret alone still would not reach the test process; the workflow file itself would need a separately authorized change to reference it, which this correction does not make. Recorded as a `FOLLOW-UP` requiring a Mission Control/Founder decision on **two** separate things: (a) whether to authorize an approved Supabase test-environment target for CI use at all -- given that doing so means CI will perform the same real Auth/database writes described in Finding 4, not a side-effect-free check -- and, only if authorized, (b) a separately authorized workflow-file change to wire the resulting secret(s) into the `test` job.
4. **Local full-suite validation wrote real state to the `SUPABASE_TEST_URL` target -- new finding, 2026-09-15, per Codex Stage 2 review Finding F-01.** The local `PASS` recorded in Section 4.1 was **not** a side-effect-free check. 20 of the 28 test files are integration tests (Section 3) that call `tests/setup/test-clients.ts`'s `createTestOwner`, which calls `auth.admin.createUser` and signs in for real against whichever project the developer's local `SUPABASE_TEST_URL` designates, then inserts a `businesses` row; inventory tests additionally insert items and call the movement-writing RPC, and catalog-import tests insert batch/row fixtures. These are real Supabase Auth/database writes through a live client, not mocks or a dry run. This document and the Stage 1 report previously carried a blanket claim that no Supabase or other provider/runtime state was modified by this mission's evidence-gathering; that claim was false as applied to this local test execution and is withdrawn -- see Section 7 for the corrected, narrower statement. **INSUFFICIENT EVIDENCE:** Claude Code did not independently verify which project `SUPABASE_TEST_URL` designated during this local run, nor the complete resulting remote state beyond the fixture-shaped writes identifiable from the test source cited above, and makes no claim either way about production adjacency or total blast radius. Per the activation instruction, developer-held local credentials do not by themselves establish mission authority to mutate provider state; whether this local execution stayed within that authority is a question for Mission Control, not resolved by this correction. No rerun of these tests and no remote cleanup was performed as part of this correction.

None of these findings block Stage 1 completion: the mission's objective is to stand up real, fail-closed assurance automation and report exactly what it finds, not to reach a fully green baseline.

## 6. Reporting model

- **PASS** -- the command exited `0` against the checked-out commit.
- **FAIL** -- the command exited non-zero. If the failure predates this mission's changes and is unrelated to them, it is labelled `FAIL -- PRE-EXISTING` and reported as a finding rather than silently fixed.
- **FOLLOW-UP** -- a real, evidenced gap or risk that this workflow does not check today (e.g. dependency vulnerability severity, test-coverage completeness, RLS/security automation) and that is explicitly deferred to a future assurance mission per the mission README's "Build Later" list.
- **NOT APPLICABLE** -- a check that does not apply to the current change (for example, a job intentionally not run for a given path-filtered trigger, once/if path filters are added in a future iteration; this workflow currently has no path filters).

## 7. Explicit non-mutation statement

**Corrected 2026-09-15 per Codex Stage 2 review Finding F-01.** This section previously made a blanket claim that gathering *all* validation evidence in Section 4 caused no Supabase or other provider/runtime mutation. That was inaccurate: the local `test` run (Section 4.1) wrote real state to the `SUPABASE_TEST_URL` test-environment target (Section 5, Finding 4). The statement below replaces it with the corrected, narrower scope.

Authoring, committing, and pushing the workflow file, this evidence-contract document, and the mission-communication files listed in the Stage 1 report did not modify Product Truth, governance, application/product source code, or dependencies -- those changes are exactly the Git diff on this mission branch, independently verifiable. Running `npm ci`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` (Section 4.1) did not mutate any external provider: install/lint/typecheck/build do not contact Supabase, Lovable, AWS/Lambda, Cloudflare, Meta/WhatsApp, or OpenAI. Running `npm run test` locally is the one exception (Section 5, Finding 4): it wrote real Auth/database state to the `SUPABASE_TEST_URL` target. Claude Code has **INSUFFICIENT EVIDENCE** to characterize that target's exact identity or the complete resulting state beyond the fixture-shaped writes identifiable from test source, and does not claim either that this stayed within or exceeded mission authority -- that determination belongs to Mission Control. No GitHub Actions CI run in this mission executed any test (Section 3, Section 4.2), so CI itself caused no such writes. `SB-P-1.12` was not started, and no branch-protection, deployment, or governance change was made. The only repository changes made under this mission are the paths listed in the Stage 1 report.

## 8. Deferred assurance capabilities

Per the mission README, the following remain explicitly out of scope for this baseline and are candidate future assurance missions:

- cross-tenant / RLS denial automation;
- migration-ledger vs. production-currency checker;
- canonical-vs-delivery repository drift detector;
- Product Truth to Blueprint/EIS/implementation/test traceability automation;
- idempotency/replay harnesses;
- privileged-function / `SECURITY DEFINER` scanners;
- runtime/provider-state monitoring;
- dependency vulnerability gating (`npm audit`).
