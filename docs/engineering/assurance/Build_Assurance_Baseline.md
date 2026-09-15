# Build Assurance Baseline

**Originating Mission ID:** `SB-OPS-BUILD-ASSURANCE-1.0`
**Mission name:** Build Assurance & Automation Foundation
**Owner:** Claude Code (Stage 1 implementation; corrected per Codex Stage 2 review); now extended by `SB-OPS-CI-ARCHITECTURE-1.0`
**Status:** `EXTENDED FOR TWO-TIER ARCHITECTURE (SB-OPS-CI-ARCHITECTURE-1.0 STAGE 2) -- AWAITING MISSION CONTROL`
**Date:** 2026-09-14 (corrected 2026-09-15; extended 2026-09-16)

**Correction record (original):** this document was corrected on 2026-09-15 under `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/mission-control/05-correction-authorization.md`, addressing findings F-01, F-02, and F-03 of the [Codex Stage 2 independent review](../../../communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/codex/02-stage2-independent-review.md). Corrected passages are marked in place; no other content changed.

**Extension record (this mission):** this document is extended, not replaced, on 2026-09-16 under `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2 (`communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/03-stage1-review-and-stage2-authorization.md`, Decision 4), to describe the two-tier Fast Gate / Full Assurance architecture that supersedes the single undifferentiated `test` job described in the original Sections 2-5 below. Per Mission Control's explicit instruction ("extend the existing assurance contract... do not create a competing document"), the original historical content is preserved in place and marked as historical where superseded, rather than deleted -- consistent with this document's own established correction convention. New/updated content for this mission is marked `SB-OPS-CI-ARCHITECTURE-1.0` throughout.

## 1. Purpose

This document is the evidence contract for the repository's application-assurance workflows: `.github/workflows/build-assurance.yml` (Fast Gate) and `.github/workflows/full-assurance.yml` (Full Assurance, added by `SB-OPS-CI-ARCHITECTURE-1.0`). It states exactly what each job proves, what it does not prove, and how to read PASS / FAIL / FOLLOW-UP / NOT APPLICABLE results. It does not itself assert Product, runtime, security, or Founder acceptance.

Green CI from these workflows proves only that the listed commands, run against the checked-out commit on a GitHub-hosted `ubuntu-latest` runner, exited with status `0`. It does not prove correctness beyond what each underlying tool checks, does not prove runtime behaviour, and does not prove security, performance, accessibility, or Product acceptance.

## 2. Workflow location -- two-tier architecture (`SB-OPS-CI-ARCHITECTURE-1.0` Stage 2)

**Historical note:** Sections 2-5 originally described one workflow (`build-assurance.yml`) with a single undifferentiated `test` job running the entire suite. `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2 split that job into two tiers, described below. The historical single-job description, and the evidence gathered against it, are preserved further down (Section 4.1-4.2, Section 5 Findings 1-2 and 4) as an unmodified historical record; this section describes the **current** state.

### Fast Gate -- `.github/workflows/build-assurance.yml`

Always runs: every push to `main`, every pull request targeting `main`, no path filtering (cheap enough to apply universally). Four independent jobs, each on a fresh `ubuntu-latest` runner with `actions/checkout` + `actions/setup-node` (Node 24) + `npm ci`:

| Job | Command | Requires `SUPABASE_TEST_*` / `smart-business-test` environment? |
|---|---|---|
| `lint` | `npm run lint` (ESLint, including `eslint-plugin-prettier`) | No |
| `typecheck` | `npx tsc --noEmit` | No |
| `build` | `npm run build` (`vite build`) | No |
| `test-fast` (named "Fast Tests" in the Actions UI) | `npm run test:fast` (`vitest run -c vitest.fast.config.ts`) | **No** -- confirmed by the job declaring no `environment:` and no `SUPABASE_TEST_*` in its `env:` block; see Section 3's `test-fast` entry |

### Full Assurance -- `.github/workflows/full-assurance.yml`

Selective: triggers only on push to `main` or a pull request targeting `main` that touches at least one path in the approved list below (native GitHub Actions `paths:` filtering -- a non-matching change does not start this workflow at all), plus manual `workflow_dispatch`. One job:

| Job | Command | Requires `SUPABASE_TEST_*` / `smart-business-test` environment? |
|---|---|---|
| `test-full` (named "Full Assurance Tests" in the Actions UI) | `npm run test:full` (`vitest run -c vitest.full.config.ts`) | **Yes** -- `environment: smart-business-test` and the same three `SUPABASE_TEST_*` secret-name bindings already approved under `SB-OPS-CI-STABILIZATION-1.0`, unchanged in value/mechanism, only moved to this workflow |

**Approved trigger paths** (`communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/03-stage1-review-and-stage2-authorization.md`, Decision 3, with one addition documented below): `src/**`, `tests/**`, `supabase/**`, `lambda/**`, `scripts/**`, `package.json`, `package-lock.json`, `vitest.config.ts`, `vitest.fast.config.ts`, `vitest.full.config.ts`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.*`, `.github/workflows/build-assurance.yml`, `.github/workflows/full-assurance.yml`. **Addition:** `vitest.shared.ts` (the small config helper both `vitest.fast.config.ts` and `vitest.full.config.ts` import) is also included -- it did not exist at Stage 1 design time, and a change to it (e.g. the shared path alias or timeouts) can materially alter Full Assurance's actual behaviour, so per Decision 3's "if implementation inspection identifies another repository path that can materially alter runtime/integration behaviour, include it and document why," it is added here.

Full Assurance is **not** a required branch-protection check (Decision 7) -- native path-filter-skip triggering means a non-matching PR never starts this workflow at all, which would leave a required check permanently pending on such a PR.

Every job in both workflows fails closed: a non-zero exit from its one command fails that job. No job retries past a failure, suppresses output, or auto-fixes application code. Every command is an existing `package.json` script or existing repository-supported CLI invocation -- none were added or altered merely to make a workflow pass.

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

### `test` (historical) -- Vitest, single undifferentiated job (`npm run test`)

**Historical section, preserved unmodified.** This described the single `test` job as it existed from `SB-OPS-BUILD-ASSURANCE-1.0` through `SB-OPS-CI-STABILIZATION-1.0`, before the `SB-OPS-CI-ARCHITECTURE-1.0` split. See `test-fast` and `test-full` below for the current jobs.

**Proves:** locally, with the required Supabase test-environment credentials present, every test file under the repository's Vitest configuration passes at the commit checked out. In GitHub Actions today, this job proves nothing -- see the CI-specific limitation below.

**Coverage composition -- corrected 2026-09-15 per Codex Stage 2 review Finding F-02:** the 28-file suite is not uniformly "catalog-import logic only," and this section previously stated that Supabase RLS/Auth behaviour "has no automated coverage" -- that was false and is corrected here. 8 files (`tests/catalog-import/classify.test.ts`, `content-type.test.ts`, `fields.test.ts`, `idempotency.test.ts`, `parse-isolated.test.ts`, `parse.test.ts`, `validate.test.ts`, and `tests/parser-lease/roles-anywhere-decimal-serial.test.ts`) are pure logic/parsing/validation tests with no external network dependency. The remaining 20 files (all 17 `tests/inventory/**` files, `tests/catalog-import/real-http.test.ts` and `support-schema-rls.test.ts`, and `tests/parser-lease/guard-lease-rpc.test.ts`) are integration tests: they sign in real Supabase Auth users via `tests/setup/test-clients.ts`'s `createTestOwner` against a developer-configured `SUPABASE_TEST_URL` project and exercise real RLS/PostgREST behaviour -- for example `tests/inventory/rls-cross-business.test.ts` (cross-business inventory non-disclosure) and `tests/catalog-import/support-schema-rls.test.ts` (catalog-import ACL/RLS/constraint checks). What remains true and is preserved from the original text: this is scoped exercise of the specific tables/flows those 20 files cover, not comprehensive Auth/RLS/security coverage of the application -- most UI routes, the broader RLS/permission matrix outside these tests, and WhatsApp/OpenAI integration remain without automated coverage. Coverage-percentage measurement remains out of scope for this mission.

**CI-specific limitation (resolved by `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2 -- see `test-fast`/`test-full` below; original text preserved) -- corrected 2026-09-15 per Codex Stage 2 review Findings F-02 and F-03:** `vitest.config.ts` registers `tests/setup/load-env.ts` as a global `setupFiles` entry applied to **every** `tests/**/*.test.ts` file, including the 8 pure-logic files that need no Supabase credentials at all. It throws immediately if `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, or `SUPABASE_TEST_SERVICE_ROLE_KEY` are missing, before any test module -- pure-logic or integration -- runs. As a direct result, the `test` job in real CI reaches **zero successful test executions**: CI reports 28 failed files and 0 executed tests, not 169 passing assertions minus a failing subset (confirmed in Section 4.2). It fails closed correctly rather than hanging, skipping silently, or using fabricated/placeholder credentials.

This document previously stated that provisioning `SUPABASE_TEST_*` as a GitHub Actions secret would be sufficient to enable the job; that was inaccurate and is corrected here. Enabling real test execution in CI requires two separate things, neither done by this mission: (1) an approved Supabase test-environment target that Mission Control/Founder authorizes exposing to CI -- accepting that running the 20 integration files causes the same real Auth/database writes described in Section 5, Finding 4, not a side-effect-free check -- and (2) explicit workflow wiring: `.github/workflows/build-assurance.yml`'s `test` job currently declares no `environment:` and binds no secret to a process environment variable, so a GitHub Actions secret, even if provisioned, would not reach the test process without a workflow-file change. Making that workflow-file change is out of scope for this correction and requires separate Mission Control authorization. This is reported as a `FOLLOW-UP` finding for Mission Control, not repaired here.

**Resolution note (`SB-OPS-CI-ARCHITECTURE-1.0` Stage 2, 2026-09-16):** both the structural blocker (global `setupFiles`) and the workflow-wiring gap this section describes are now resolved -- see `test-fast` and `test-full` immediately below, and Section 5 Finding 3's resolution note.

### `test-fast` -- Vitest, Fast Gate tier (`npm run test:fast`) -- `SB-OPS-CI-ARCHITECTURE-1.0`

**Proves:** the 8 environment-independent test files (`vitest.fast.config.ts`'s explicit `include` list -- Section 2) pass at the commit checked out, in real CI, on every pull request and push to `main`, **without any Supabase test-environment dependency**. `vitest.fast.config.ts` carries no `setupFiles` entry at all, so `tests/setup/load-env.ts`'s `SUPABASE_TEST_*` check never runs for this tier, and the `test-fast` job in `.github/workflows/build-assurance.yml` declares no `environment:` and no `SUPABASE_TEST_*` in its `env:` block -- confirmed by inspection of the job definition (Section 2) and by CI evidence (Section 4.3).

**Does not prove:** anything about the 20 Supabase-dependent files (see `test-full`); does not prove runtime correctness beyond what each pure-logic assertion checks; does not prove the application's Supabase-facing behaviour.

### `test-full` -- Vitest, Full Assurance tier (`npm run test:full`) -- `SB-OPS-CI-ARCHITECTURE-1.0`

**Proves:** the 20 Supabase-dependent test files (`vitest.full.config.ts`'s `include: ["tests/**/*.test.ts"]` minus the 8 fast files) pass at the commit checked out, against the approved, isolated `smart-business-test` GitHub Actions environment, **when this job actually runs** -- i.e. when the change touched an approved trigger path (Section 2) or the job was manually dispatched.

**Does not prove:** that Full Assurance ran at all for a given change that did not touch an approved path -- a documentation/communication-only PR will show no `test-full` run, by design (Section 2), and that absence is the intended, correct behaviour, not a gap. Does not prove comprehensive security/RLS coverage beyond the specific tables/flows the 20 files exercise (unchanged from the historical `test` section's coverage-composition note above). Real Auth/database writes occur against the dedicated `smart-business-test` project whenever this job runs -- this is by design (it is the isolated test project created for exactly this purpose, per `docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md`), not a side-effect-free check.

## 4. Validation results (Stage 1, 2026-09-14) -- historical, preserved unmodified

**Historical section.** Sections 4.1-4.2 record `SB-OPS-BUILD-ASSURANCE-1.0` Stage 1's original evidence for the single, now-superseded `test` job. See Section 4.3 for `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2's evidence for the current `test-fast`/`test-full` split.

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

### 4.3 `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2 validation evidence (2026-09-16)

**Local pre-push evidence.** Run on branch `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`, with the working tree normalized to the repository's stored `LF` line endings (same method as Section 4.1) to obtain a CI-representative result. Per Stage 2's explicit authorization to run only checks "possible without provider credentials," `test:full` and the default (unqualified) `npm run test` were **not** run locally -- both would require the same real `SUPABASE_TEST_*` credentials a developer's local `.env.test.local` happens to supply, and Stage 2 does not authorize local credential-backed integration test execution. `test:fast` was deliberately run with `SUPABASE_TEST_URL`/`SUPABASE_TEST_ANON_KEY`/`SUPABASE_TEST_SERVICE_ROLE_KEY` explicitly unset (verified via `env | grep -i supabase` returning nothing) to directly demonstrate the no-dependency claim, not merely assert it.

| Check | Command | Local result |
|---|---|---|
| Lint | `npm run lint` | Exit `0`; 0 errors, 7 pre-existing warnings (unchanged -- Section 5, Finding 1) |
| Typecheck | `npx tsc --noEmit` | Exit `0`; no output |
| Build | `npm run build` | Exit `0`; client + SSR bundle produced |
| Fast Tests | `npm run test:fast` (with all `SUPABASE_TEST_*` vars explicitly unset) | Exit `0`; **8 test files, 61 tests, all passed, 10.06s** -- confirms Fast Tests require no Supabase credentials |
| `vitest.config.ts` (default, unqualified suite) | -- | Confirmed unmodified (`git diff --stat vitest.config.ts` empty); not executed locally per the credential restriction above |

**Actual GitHub Actions CI evidence (authoritative).** Full detail and classification: `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/claude-code/02-stage2-implementation-and-verification.md` Sections 9-10. Summary:

| Job | Result | Notes |
|---|---|---|
| `lint`, `typecheck`, `build` (Fast Gate) | PASS | 22-25s each, run [`35010345432`](https://github.com/SmartBusinessv1/smart-business/actions/runs/35010345432) |
| `test-fast` (Fast Gate) | PASS | 8 files, 61 tests, 28s, same run -- confirms no `SUPABASE_TEST_*` dependency |
| `test-full` (Full Assurance), first run | `FAIL` -- 1 of 108 tests | Run [`35010345588`](https://github.com/SmartBusinessv1/smart-business/actions/runs/35010345588), 3m44s. The one failure was in `tests/catalog-import/real-http.test.ts`'s unmodified "happy path" test -- transient GoTrue JWKS-lookup-class flakiness, not attributable to this mission's changes (both of this mission's own corrected assertions in the same file passed). See the Stage 2 report Section 9 for full classification. |
| `test-full` (Full Assurance), verification rerun | PASS | Run [`35010878815`](https://github.com/SmartBusinessv1/smart-business/actions/runs/35010878815), manually triggered via `workflow_dispatch` (diagnostic re-execution, no code change), 3m39s -- **20 files, 108 tests, 0 failures**, confirming the first run's failure was transient. |

Combined: **28 files, 169 tests total (61 fast + 108 full)** -- exactly matching the pre-split suite's known baseline.

## 5. Known pre-existing findings (not fixed by this mission)

This mission does not authorize application-code repair. The following are reported as findings for Mission Control, not resolved here.

1. **Lint -- 152 pre-existing `prettier/prettier` formatting errors** across many `src/routes/**`, `tests/catalog-import/**`, and config files, plus **7 pre-existing warnings** (6 `react-refresh/only-export-components`, 1 `react-hooks/exhaustive-deps` at `src/routes/_authenticated/inventory.$itemId.tsx:1436`). None were introduced by this mission; none were modified. `npm run lint -- --fix` would mechanically resolve the 152 formatting errors, but running `--fix` against application source is application-code modification and is outside this mission's authorization.
2. **Dependency vulnerabilities** -- `npm audit` reports 10 known vulnerabilities (5 moderate, 5 high) in third-party dependencies at the currently locked versions. Dependency upgrades are explicitly out of scope for this mission ("do not modify dependencies... merely to make CI pass"; also not "merely to make CI pass" since this workflow does not run `npm audit` as a gate). Recorded here as a `FOLLOW-UP` candidate for a future, separately authorized mission.
3. **`test` job cannot run in real CI today, and enabling it needs more than a secret -- corrected 2026-09-15 per Codex Stage 2 review Finding F-03. RESOLVED 2026-09-16 by `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2, see below.** `npm run test` passes locally (Section 4.1) because a developer's gitignored `.env.test.local` supplies `SUPABASE_TEST_URL` / `SUPABASE_TEST_ANON_KEY` / `SUPABASE_TEST_SERVICE_ROLE_KEY`; GitHub Actions has none of these configured, so the job fails closed for all 28 files at the global `setupFiles` loader (Section 3), correctly rather than skipping or faking a result. This finding previously said provisioning a GitHub Actions secret would be sufficient to enable the job -- that was inaccurate and is corrected here. `.github/workflows/build-assurance.yml`'s `test` job declares no `environment:` and binds no secret to a process variable, so a provisioned secret alone still would not reach the test process; the workflow file itself would need a separately authorized change to reference it, which this correction does not make. Recorded as a `FOLLOW-UP` requiring a Mission Control/Founder decision on **two** separate things: (a) whether to authorize an approved Supabase test-environment target for CI use at all -- given that doing so means CI will perform the same real Auth/database writes described in Finding 4, not a side-effect-free check -- and, only if authorized, (b) a separately authorized workflow-file change to wire the resulting secret(s) into the `test` job.

   **Resolution (`SB-OPS-CI-ARCHITECTURE-1.0` Stage 2, 2026-09-16):** (a) was authorized and completed under `SB-OPS-CI-STABILIZATION-1.0` (the `smart-business-test` environment and its three secrets were provisioned and verified executing real tests in CI -- see that mission's closed record). (b) is completed by this mission: `.github/workflows/full-assurance.yml`'s `test-full` job now declares `environment: smart-business-test` and binds all three `SUPABASE_TEST_*` secrets by name into its process environment (Section 2). Both halves of this finding are now resolved; see Section 4.3 for the resulting CI evidence. The structural blocker (global `setupFiles` applying to all 28 files regardless of need) is separately resolved by the `vitest.fast.config.ts`/`vitest.full.config.ts` split (Section 3).
4. **Local full-suite validation wrote real state to the `SUPABASE_TEST_URL` target -- new finding, 2026-09-15, per Codex Stage 2 review Finding F-01.** The local `PASS` recorded in Section 4.1 was **not** a side-effect-free check. 20 of the 28 test files are integration tests (Section 3) that call `tests/setup/test-clients.ts`'s `createTestOwner`, which calls `auth.admin.createUser` and signs in for real against whichever project the developer's local `SUPABASE_TEST_URL` designates, then inserts a `businesses` row; inventory tests additionally insert items and call the movement-writing RPC, and catalog-import tests insert batch/row fixtures. These are real Supabase Auth/database writes through a live client, not mocks or a dry run. This document and the Stage 1 report previously carried a blanket claim that no Supabase or other provider/runtime state was modified by this mission's evidence-gathering; that claim was false as applied to this local test execution and is withdrawn -- see Section 7 for the corrected, narrower statement. **INSUFFICIENT EVIDENCE:** Claude Code did not independently verify which project `SUPABASE_TEST_URL` designated during this local run, nor the complete resulting remote state beyond the fixture-shaped writes identifiable from the test source cited above, and makes no claim either way about production adjacency or total blast radius. Per the activation instruction, developer-held local credentials do not by themselves establish mission authority to mutate provider state; whether this local execution stayed within that authority is a question for Mission Control, not resolved by this correction. No rerun of these tests and no remote cleanup was performed as part of this correction.

5. **Transient Full Assurance test flake, newly surfaced -- `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2, 2026-09-16.** `tests/catalog-import/real-http.test.ts`'s unmodified "happy path" test (`"a valid authenticated Owner request previews a real CSV over real HTTP"`) failed once in real CI (`AssertionError: expected Error: Unauthorized: Invalid token to be null`, run [`35010345588`](https://github.com/SmartBusinessv1/smart-business/actions/runs/35010345588)) on a token obtained moments earlier via a genuine sign-in, then passed cleanly on an immediate, unmodified rerun ([`35010878815`](https://github.com/SmartBusinessv1/smart-business/actions/runs/35010878815): 20/20 files, 108/108 tests). This matches the transient GoTrue JWKS-lookup glitch class already documented in `tests/setup/test-clients.ts` for a different call site (`createTestOwner`'s own sign-in retry); this test's subsequent HTTP call has no equivalent retry protection. Newly observable only because Full Assurance is, as of this mission, the first time this file has ever executed against real CI (every prior CI attempt failed at the missing-environment-variable check before any test ran). Not repaired -- outside this mission's narrow, approved test-code-change scope (Section 9 below). Recorded as a `FOLLOW-UP` candidate: Mission Control may authorize extending retry protection to this call site in a future, separately scoped mission, or accept the residual flakiness.

None of these findings block Stage 1/Stage 2 completion: the mission's objective is to stand up real, fail-closed assurance automation and report exactly what it finds, not to reach a fully green baseline.

## 6. Reporting model

- **PASS** -- the command exited `0` against the checked-out commit.
- **FAIL** -- the command exited non-zero. If the failure predates this mission's changes and is unrelated to them, it is labelled `FAIL -- PRE-EXISTING` and reported as a finding rather than silently fixed.
- **FOLLOW-UP** -- a real, evidenced gap or risk that this workflow does not check today (e.g. dependency vulnerability severity, test-coverage completeness, RLS/security automation) and that is explicitly deferred to a future assurance mission per the mission README's "Build Later" list.
- **NOT APPLICABLE** -- a check that does not apply to the current change. As of `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2, this is a real, current case: `full-assurance.yml`'s `test-full` job does not run at all for a pull request that touches none of the approved trigger paths (Section 2) -- its absence from that PR's checks is the intended, correct `NOT APPLICABLE` outcome, not a gap or a skipped-and-hidden failure. The Fast Gate (`build-assurance.yml`) has no path filtering and always applies.

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
- dependency vulnerability gating (`npm audit`);
- scheduled regression assurance (`SB-OPS-CI-ARCHITECTURE-1.0` Decision 6: deferred/out of Stage 2 scope; `workflow_dispatch` manual triggering remains available on `full-assurance.yml`);
- promoting Fast Gate and/or Full Assurance to required branch-protection checks (`SB-OPS-CI-ARCHITECTURE-1.0` Decision 7: no branch-protection change in Stage 2; Fast Gate may be proposed for required-check promotion only after the new architecture is independently verified and stable, and Full Assurance must not be made required while it uses native path-filter-skip triggering).

## 9. Shared-state test correction (`SB-OPS-CI-ARCHITECTURE-1.0` Stage 2)

`tests/catalog-import/real-http.test.ts` contained two tests (`"a missing Authorization header is rejected before any privileged write occurs"`, `"an invalid/garbage token is rejected before any privileged write occurs"`) that compared an **unscoped global** `catalog_import_batches` row count in the shared `smart-business-test` project before and after a rejected request. A repository-wide search (`communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/claude-code/01-stage1-classification-and-design.md`, Section 6) confirmed this was the suite's only instance of this pattern -- every other test is naturally scoped to its own business/owner via RLS; these two tests could not be, since an unauthenticated/invalid-token request never identifies one.

**Fix implemented:** each test now generates a unique, `randomUUID()`-derived filename marker (e.g. `unauth-missing-header-<uuid>.csv`) passed as the uploaded file's name, and asserts that no `catalog_import_batches` row exists with that exact `original_filename` after the rejected attempt (`adminClient.from("catalog_import_batches").select("id").eq("original_filename", marker)` returns an empty array), replacing the global exact-count comparison. Verified against the server function's actual behaviour (`src/server-functions/catalog-import.ts`): `original_filename: sanitizeFilename(file.name)` sets this column directly from the uploaded file's name, and `sanitizeFilename` only strips path separators/control characters and truncates to 255 characters -- it does not alter the alphanumeric-and-hyphen marker format used here, so the marker survives unchanged and the check is not vacuous.

This preserves, and arguably strengthens, the original security property (a rejected unauthenticated/invalid-token request must not create privileged import state attributable to that request): it is now immune to unrelated concurrent activity in the shared project in either direction (no false failure from another concurrent run's unrelated insert; no false pass from a coincidental unrelated deletion masking a real defect), and it verifies the absence of *this specific attempt's own* row rather than an ambient aggregate. The auth-rejection assertion itself (`expect(res.error).toBeTruthy()`) is unchanged. No other test file needed a corresponding change.

## 10. `SB-OPS-CI-ARCHITECTURE-1.0` Stage 2 non-mutation statement

Implementing the two-tier architecture and the Section 9 correction, and gathering the Section 4.3 local evidence, did not modify Product Truth, governance, application/product *behaviour*, dependencies, `package-lock.json`, database/schema/RLS/grants/RPCs, provider configuration, production state, deployment, or branch protection. `src/**` was not touched; the sole test-code change is the Section 9 correction, which alters test assertions, not application behaviour. No dependency was added, removed, or upgraded, and `package-lock.json` is unmodified (verified: no `npm install`/`npm ci`-driven lockfile write occurred; only `package.json`'s `scripts` object gained two new entries).

`npm run test:fast` was run locally with `SUPABASE_TEST_URL`/`SUPABASE_TEST_ANON_KEY`/`SUPABASE_TEST_SERVICE_ROLE_KEY` explicitly unset (Section 4.3) and, having no Supabase dependency by construction, mutated no provider state. `test:full` and the default `npm run test` were not run locally, so no local credential-backed write occurred under this mission -- unlike the historical Finding 4 (Section 5), which remains a distinct, already-recorded, `SB-OPS-BUILD-ASSURANCE-1.0`-era event with its own `INSUFFICIENT EVIDENCE` status, not reopened or added to by this mission. Any `test-full` execution in real CI (Section 4.3) does write real Auth/database state to the dedicated `smart-business-test` project by design -- that is what Full Assurance is for -- and is not a "mutation" in the sense this statement addresses (provider *configuration*, production state, or state outside the already-approved, isolated test project).

`SB-P-1.12` was not started. No self-approval or self-merge of PR `#581` occurred.
