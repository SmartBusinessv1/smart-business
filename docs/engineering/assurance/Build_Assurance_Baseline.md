# Build Assurance Baseline

**Mission ID:** `SB-OPS-BUILD-ASSURANCE-1.0`
**Mission name:** Build Assurance & Automation Foundation
**Owner:** Claude Code (Stage 1 implementation)
**Status:** `STAGE 1 IMPLEMENTATION -- AWAITING CODEX REVIEW AND MISSION CONTROL ACCEPTANCE`
**Date:** 2026-09-14

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

**Proves:** every test file under the repository's Vitest configuration passes at the commit checked out.

**Does not prove:** completeness of test coverage. The current suite (28 files / 169 tests, see Section 4) targets catalog-import classification, idempotency, parsing, and validation logic specifically; large areas of the application (e.g. most UI routes, Supabase RLS/Auth behaviour, WhatsApp/OpenAI integration) have no automated test coverage today. Coverage-percentage measurement is out of scope for this mission.

## 4. Validation results (Stage 1, 2026-09-14)

Run locally against mission branch `mission/SB-OPS-BUILD-ASSURANCE-1.0-ci-baseline` at base commit `4dcb272ebbf8c15410f5e206c71ebc0ec8cfe957`, Node `v24.18.0`, npm `11.16.0`, with the local working tree normalized to the repository's stored (`LF`) line endings to obtain a CI-representative result (see Section 3 caveat). The actual `ubuntu-latest` CI run triggered by this mission's pull request is the authoritative result and is linked from the Stage 1 report; this table is the pre-push local evidence used to design the workflow.

| Check | Command | Local result | Classification |
|---|---|---|---|
| Dependency install | `npm ci` | Exit `0`; 569 packages installed; `npm audit` reports 10 known vulnerabilities (5 moderate, 5 high) in third-party dependencies | `PASS` (install) / `FOLLOW-UP` (vulnerabilities -- see Section 5) |
| Lint | `npm run lint` | Exit `1`; 159 problems (152 errors, 7 warnings) | `FAIL -- PRE-EXISTING` (see Section 5) |
| Typecheck | `npx tsc --noEmit` | Exit `0`; no output | `PASS` |
| Build | `npm run build` | Exit `0`; client + SSR bundle produced in `.output/` | `PASS` |
| Test | `npm run test` | Exit `0`; 28 test files, 169 tests, all passed (147.81s) | `PASS` |

## 5. Known pre-existing findings (not fixed by this mission)

This mission does not authorize application-code repair. The following are reported as findings for Mission Control, not resolved here.

1. **Lint -- 152 pre-existing `prettier/prettier` formatting errors** across many `src/routes/**`, `tests/catalog-import/**`, and config files, plus **7 pre-existing warnings** (6 `react-refresh/only-export-components`, 1 `react-hooks/exhaustive-deps` at `src/routes/_authenticated/inventory.$itemId.tsx:1436`). None were introduced by this mission; none were modified. `npm run lint -- --fix` would mechanically resolve the 152 formatting errors, but running `--fix` against application source is application-code modification and is outside this mission's authorization.
2. **Dependency vulnerabilities** -- `npm audit` reports 10 known vulnerabilities (5 moderate, 5 high) in third-party dependencies at the currently locked versions. Dependency upgrades are explicitly out of scope for this mission ("do not modify dependencies... merely to make CI pass"; also not "merely to make CI pass" since this workflow does not run `npm audit` as a gate). Recorded here as a `FOLLOW-UP` candidate for a future, separately authorized mission.

Neither finding blocks Stage 1 completion: the mission's objective is to stand up real, fail-closed assurance automation and report exactly what it finds, not to reach a fully green baseline.

## 6. Reporting model

- **PASS** -- the command exited `0` against the checked-out commit.
- **FAIL** -- the command exited non-zero. If the failure predates this mission's changes and is unrelated to them, it is labelled `FAIL -- PRE-EXISTING` and reported as a finding rather than silently fixed.
- **FOLLOW-UP** -- a real, evidenced gap or risk that this workflow does not check today (e.g. dependency vulnerability severity, test-coverage completeness, RLS/security automation) and that is explicitly deferred to a future assurance mission per the mission README's "Build Later" list.
- **NOT APPLICABLE** -- a check that does not apply to the current change (for example, a job intentionally not run for a given path-filtered trigger, once/if path filters are added in a future iteration; this workflow currently has no path filters).

## 7. Explicit non-mutation statement

Implementing and running this workflow, and gathering the validation evidence in Section 4, did not modify Product Truth, governance, application/product source code, dependencies, database/schema/RLS/grants/RPCs, Supabase, Lovable, AWS/Lambda, Cloudflare, Meta/WhatsApp, OpenAI, deployment, or any other runtime or provider state. `SB-P-1.12` was not started. The only repository changes made under this mission are the paths listed in the Stage 1 report.

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
