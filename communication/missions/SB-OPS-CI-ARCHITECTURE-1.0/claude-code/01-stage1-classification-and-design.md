# Claude Code Stage 1 Report — Classification and Implementation Design

**Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
**Mission name:** Fast Gate + Full Assurance
**Stage:** Stage 1 -- CI/test classification and implementation design
**Reporter:** Claude Code
**Status:** `STAGE 1 COMPLETE -- AWAITING MISSION CONTROL`
**Date:** 2026-09-15

**Authority:** `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/02-stage1-classification-and-design-instruction.md`, on branch `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`, from canonical activation merge `f92d2160cc820f24bd93af31187430622f45155f`.

This is investigation and design only. No application code, test code, workflow YAML, package script, dependency, lockfile, database/provider state, deployment, or branch-protection file was changed to produce this report.

## 1. Complete test classification table

All 28 files under `tests/**/*.test.ts` (the exact set `vitest.config.ts`'s `include: ["tests/**/*.test.ts"]` currently matches), independently re-enumerated and classified via import analysis and source inspection (not assumed from prior mission memory).

| File | Primary category | Secondary tags | Supabase-dependent | Notes |
|---|---|---|---|---|
| `tests/catalog-import/classify.test.ts` | Local/environment-independent | -- | No | Categorization logic; 11 cases |
| `tests/catalog-import/content-type.test.ts` | Local/environment-independent | -- | No | CSV/XLSX structure sniffing; 10 cases |
| `tests/catalog-import/fields.test.ts` | Local/environment-independent | -- | No | Header mapping, formula-injection neutralization; 4 cases |
| `tests/catalog-import/idempotency.test.ts` | Local/environment-independent | -- | No | Pure idempotency-key derivation function; 4 cases |
| `tests/catalog-import/parse-isolated.test.ts` | Local/environment-independent | -- | No | Spawns a Node `worker_threads` worker; no network; 4 cases |
| `tests/catalog-import/parse.test.ts` | Local/environment-independent | -- | No | CSV/XLSX parsing; 11 cases |
| `tests/catalog-import/validate.test.ts` | Local/environment-independent | -- | No | Row validation logic; 10 cases |
| `tests/parser-lease/roles-anywhere-decimal-serial.test.ts` | Local/environment-independent | -- | No | AWS cert serial decimal/hex conversion against a throwaway self-signed cert; mocked, no network; 2 cases |
| `tests/catalog-import/real-http.test.ts` | Real-HTTP / provider-integration | Authorization/security-boundary; **shared-state-sensitive** (Section 6) | Yes | Spawns its own `vite dev` app server (`beforeAll`/`afterAll`, ~10-15s startup, by its own header comment); real HTTP calls through the compiled server-function boundary; 13 cases |
| `tests/catalog-import/support-schema-rls.test.ts` | Authorization/RLS | Database behavior; concurrency (one `describe` block: "atomic claim concurrency") | Yes | Direct schema-level RLS/ACL/constraint re-verification; 28 cases across 5 `describe` blocks |
| `tests/inventory/archived-item-protection.test.ts` | Database behavior | -- | Yes | Business-rule enforcement; 3 cases |
| `tests/inventory/audit-integrity.test.ts` | Database behavior | -- | Yes | Audit-trail integrity; 3 cases |
| `tests/inventory/business-isolation-views.test.ts` | Authorization/RLS | -- | Yes | Cross-business isolation via views; 4 cases |
| `tests/inventory/concurrency.test.ts` | Concurrency | -- | Yes | Advisory-lock/race-condition tests (`pg_advisory_xact_lock`); 3 cases |
| `tests/inventory/correction-behaviour.test.ts` | Database behavior | -- | Yes | Correction/reversal logic; 4 cases |
| `tests/inventory/correction-link-integrity.test.ts` | Database behavior | -- | Yes | Referential integrity of correction links; 4 cases |
| `tests/inventory/cross-business-consistency.test.ts` | Authorization/RLS | -- | Yes | Cross-business consistency; 3 cases |
| `tests/inventory/idempotency.test.ts` | Database behavior | Concurrency-adjacent | Yes | Idempotency-key conflict handling; 4 cases |
| `tests/inventory/ledger-correctness.test.ts` | Database behavior | -- | Yes | Ledger arithmetic correctness; 1 top-level case (parameterized internally) |
| `tests/inventory/movement-type-direction.test.ts` | Database behavior | -- | Yes | Constraint matrix, `it.each` over invalid type/direction pairs; 3 cases |
| `tests/inventory/negative-stock.test.ts` | Database behavior | -- | Yes | Business-rule enforcement; 2 cases |
| `tests/inventory/opening-stock-invariant.test.ts` | Database behavior | -- | Yes | Invariant enforcement; 2 cases |
| `tests/inventory/performance.test.ts` | Performance | -- | Yes | 60 real movements, 5000ms bound; 2 cases |
| `tests/inventory/permissions.test.ts` | Authorization/RLS | -- | Yes | Owner-vs-non-owner permission enforcement, 4 independent actions; 6 cases |
| `tests/inventory/rls-cross-business.test.ts` | Authorization/RLS | -- | Yes | Cross-business non-disclosure; 5 cases |
| `tests/inventory/shared-write-path.test.ts` | Database behavior | Security (documents a known, already-tracked characteristic from the closed `SB-P-1.10` mission -- see `docs/implementation/SB-P-1.10/evidence/tests/traceability-matrix.md`) | Yes | 2 cases |
| `tests/inventory/trusted-event-link.test.ts` | Database behavior | -- | Yes | Trusted-event linkage contract; 3 cases |
| `tests/parser-lease/guard-lease-rpc.test.ts` | Provider/integration (RPC regression) | Concurrency-adjacent (lease/locking RPCs) | Yes | Postgres error-code `42702` ambiguity regression; 5 cases |

**Totals:** 8 files / ~56 cases local & environment-independent; 20 files / ~113 cases Supabase-dependent. (Case counts are static `it(`/`it.each(` occurrences, not runtime-expanded counts; the CI-observed total is 169 tests across all 28 files.) No file was classified `uncertain` -- import analysis plus source/comment inspection was sufficient in every case.

## 2. Current workflow observations

- `.github/workflows/build-assurance.yml` (`Team LIPS Application Build Assurance`): 4 independent jobs -- `lint`, `typecheck`, `build`, `test` -- each its own `runs-on: ubuntu-latest` with its own checkout + `actions/setup-node` + `npm ci`. Triggers on **every** `push` to `main` and **every** `pull_request` targeting `main`, with **no path filtering at all**. The `test` job (added in `SB-OPS-CI-STABILIZATION-1.0`) runs `npm run test` bound to the `smart-business-test` GitHub Actions environment.
- `.github/workflows/markdown-quality-gate.yml` (`Team LIPS Markdown Quality Gate`): already path-filtered on its `push` trigger (`paths: **/*.md`, `**/*.markdown`, `.markdown-gate.yml`, `tools/markdown/**`, the workflow file itself), but **not** on its `pull_request` trigger -- it always triggers for PRs and instead self-detects via `git diff` whether any matching file changed, reporting an explicit "no eligible Markdown files changed... PASS" when not. This is currently the **only required branch-protection status check** on this repository (per prior mission evidence); `Team LIPS Application Build Assurance`'s jobs are not required checks today.
- `vitest.config.ts` registers `tests/setup/load-env.ts` as a single, global `setupFiles` entry applied to **every** file matched by `include: ["tests/**/*.test.ts"]`, with `fileParallelism: false` (all files run sequentially within one process). `load-env.ts` unconditionally throws if `SUPABASE_TEST_URL`/`SUPABASE_TEST_ANON_KEY`/`SUPABASE_TEST_SERVICE_ROLE_KEY` are missing -- **this is why even the 8 environment-independent files cannot run today without the full Supabase test-environment binding**: the global setup step throws before any file, fast or slow, gets a chance to execute. This is the central structural blocker Stage 2 must resolve to make a genuinely fast Fast Gate possible.
- `package.json`'s only test script is `"test": "vitest run"` -- an undifferentiated run of the entire suite. No `test:fast`/`test:full` split exists today.
- Direct evidence of the cost this mission exists to fix: the most recent `SB-OPS-CI-STABILIZATION-1.0` administrative closeout PR (documentation/communication-only) still triggered the full `test` job, which took 206-209 seconds of genuine Supabase-backed execution across the runs this investigation inspected -- for a PR that touched no application, test, or workflow file.

## 3. Fast Gate composition (proposed)

Every pull request, every push to `main`, no path filtering (Fast Gate must always run -- it is cheap and universally applicable regardless of what changed):

1. **Markdown Quality Gate** -- keep `markdown-quality-gate.yml` exactly as-is, unchanged. It already self-scopes and is already fast. Treated as part of the Fast Gate conceptual bundle without requiring file consolidation (see Section 7, Decision 1).
2. **Lint** (`npm run lint`) -- unchanged from today.
3. **Typecheck** (`npx tsc --noEmit`) -- unchanged from today.
4. **Build** (`npm run build`) -- unchanged from today.
5. **Fast Tests** (new) -- exactly the 8 environment-independent files from Section 1, run via a new `npm run test:fast` script, with **no** `SUPABASE_TEST_*` requirement and **no** environment binding.

**Timing evidence supporting the 60-90s target:** in the two most recent real CI runs this investigation inspected (`34873965633`, `34874732652`), the existing `lint`/`typecheck`/`build` jobs -- each including its own checkout, Node setup, and `npm ci` -- individually completed in 21-32 seconds. Because these are already independent parallel jobs (no `needs:` dependency between them), a PR's Fast Gate wall-clock time is bounded by the **slowest single job**, not their sum. Adding one more equally-cheap parallel job (`test:fast`, 8 pure-logic files with no network calls) should not materially change that ceiling. **The 60-90s target is very likely already achievable today for lint/typecheck/build/fast-tests as parallel jobs; the only thing currently preventing it is that the slow `test` job is bundled into every PR at all.** Optional further optimization: `actions/setup-node`'s built-in `cache: npm` input would likely cut the observed ~13-16s `npm ci` step further, if Mission Control wants extra margin (not required to hit the stated target; noted in Section 8).

## 4. Full Assurance composition (proposed)

1. **Full Tests** (new) -- the 20 Supabase-dependent files from Section 1, run via a new `npm run test:full` script, bound to the `smart-business-test` GitHub Actions environment exactly as the current `test` job is bound today (unchanged secret/environment wiring pattern).

Full Assurance is intentionally a single job/tier in this design -- the mission's own scope groups "real Supabase integration tests," "real HTTP/security-boundary tests," "RLS, concurrency, database-behavior... tests" together as one selective-but-mandatory-at-the-right-boundaries tier, not further split by sub-category. Sub-splitting (e.g. a separate "concurrency-only" or "performance-only" job) is not proposed here as it adds CI ceremony without a stated need; it remains available as a future refinement if a specific sub-tier's runtime or flakiness profile later justifies it.

## 5. Triggering / path-filter model (proposed)

**Full Assurance runs when a PR or push to `main` touches any of:**

```text
src/**
tests/**
supabase/migrations/**
supabase/config.toml
lambda/**
scripts/**
package.json
package-lock.json
vitest.config.ts
vite.config.ts
tsconfig.json
eslint.config.js
.github/workflows/full-assurance.yml
.github/workflows/fast-gate.yml   (renaming/content changes to the Fast Gate definition itself are CI-relevant)
```

Plus: `workflow_dispatch:` (manual trigger, satisfying "remain manually triggerable"), and `push: branches: [main]` with the **same** path filter (so a merge that only touched documentation does not retrigger Full Assurance on `main` either, matching "run on `main` after relevant implementation merges" -- "relevant" is the operative word).

**Full Assurance does *not* run when a PR touches only:** `communication/**`, `docs/**`, root-level Markdown (`README.md`, `CLAUDE.md`, `AGENTS.md`, etc.), or any other path outside the list above. This directly fixes the evidence in Section 2's closing paragraph.

**Mechanism:** native GitHub Actions `on.pull_request.paths` / `on.push.paths` filtering (the workflow simply does not trigger for non-matching changes), **not** the "always trigger, self-detect, no-op-pass" pattern `markdown-quality-gate.yml` uses. This distinction matters and is explicitly a **decision item** (Section 9): native path-filter-skip is safe and simple *only* because Full Assurance is not currently a required branch-protection check. If a future decision makes Full Assurance required, a skipped (never-started) run can leave that required check permanently pending on non-matching PRs -- at that point the workflow would need to switch to the self-detecting pattern instead. Fast Gate's jobs need no path filtering since they are cheap and apply universally, so this concern does not affect Fast Gate.

**Scheduled regression assurance:** the mission README notes this "may be added if justified." No concrete cadence or justification was supplied to this investigation, so no schedule is proposed in this design; it is listed as an open, deferred option in Section 9 rather than default scope.

## 6. Shared-state / flakiness findings

### 6.1 The flagged assertion (`tests/catalog-import/real-http.test.ts`)

Two tests -- `"a missing Authorization header is rejected before any privileged write occurs"` (line 88) and `"an invalid/garbage token is rejected before any privileged write occurs"` (line 107) -- each do:

```ts
const before = await adminClient.from("catalog_import_batches").select("id", { count: "exact", head: true });
// ... attempt a request expected to be rejected ...
expect(res.error).toBeTruthy();
const after = await adminClient.from("catalog_import_batches").select("id", { count: "exact", head: true });
expect(after.count).toBe(before.count);
```

This reads the **entire table's row count** in the shared `smart-business-test` project, with no `business_id`/owner scoping. A repository-wide search (`count: "exact"` and `.count).toBe(`) confirms this pattern occurs **only** in these two tests -- nowhere else in the 28-file suite.

**Why this is the only instance:** every other integration test creates its own uniquely-named test owner/business via `createTestOwner()` and reads/writes exclusively through that owner's own RLS-scoped, authenticated client -- RLS structurally isolates those assertions from any other concurrent test run in the same shared project, by construction. These two tests are different: they test **rejection of unauthenticated/invalid-token requests**, so there is no legitimate business/owner context to scope to at all -- the attempted request never identifies one. That gap is exactly why the test fell back to an unscoped global count, and exactly why it is the one place in the suite genuinely exposed to cross-run interference: two CI runs (e.g. two PRs' Full Assurance jobs) executing concurrently against the same shared project, or a developer running `npm run test`/`test:full` locally while CI also runs, can each insert/observe rows the other doesn't expect, producing a false failure unrelated to any real defect. (The reverse risk -- a coincidental unrelated deletion masking a genuine auth-bypass defect -- is comparatively unlikely but not zero, and is itself an argument for a more precise assertion, not just a less flaky one.)

**Proposed fix (design only; not implemented in Stage 1):** give each of the two attempts a unique, per-invocation identifier -- consistent with the `uniqueName()`/`randomUUID()` convention already used throughout the rest of the suite -- by passing a unique, `randomUUID()`-derived filename into the existing `csvFormData()` helper's second argument, instead of relying on its default value of `"import.csv"`, and replace the global count comparison with an existence check scoped to that unique marker:

```ts
const after = await adminClient
  .from("catalog_import_batches")
  .select("id")
  .eq("original_filename", uniqueFilename);
expect(after.data).toEqual([]);
```

This proves the **same security property** the original assertion intended (no privileged write resulted from this specific rejected request) with a **stronger, not weaker** guarantee: it is now immune to any concurrent, unrelated activity in the shared project in either direction, and it verifies the absence of *this attempt's own* row rather than an ambient aggregate that could theoretically hide or fake a pass/fail for unrelated reasons. No `before` read is needed under this design, which also removes one round-trip per test.

### 6.2 Nothing else found

No other unscoped table-wide count/aggregate assertion exists elsewhere in the suite. Every other file's assertions are naturally business/owner-scoped by RLS and by construction. This is treated as a complete finding, not a sample -- the repository-wide search covered all 28 files.

## 7. Exact Stage 2 file-change plan

All items below are **proposed for Stage 2**, not made in Stage 1:

| # | Change | File(s) | Type |
|---|---|---|---|
| 1 | Split `vitest.config.ts` into a fast config (no `setupFiles`, `include` limited to the 8 environment-independent files, `fileParallelism` left at its default `true` since pure-logic files share no external mutable state) and a full config (current behavior: `setupFiles: ["./tests/setup/load-env.ts"]`, `include` limited to the 20 Supabase-dependent files, `fileParallelism: false` preserved) | New: `vitest.fast.config.ts`, `vitest.full.config.ts`; a small shared base (e.g. `vitest.shared.ts`) factoring out the common `resolve.alias`/`testTimeout`/`hookTimeout` to avoid duplication | Config |
| 2 | Add CI-facing test scripts; keep the existing unqualified `test` script meaning "run everything" for local developer convenience | `package.json`: add `"test:fast": "vitest run -c vitest.fast.config.ts"`, `"test:full": "vitest run -c vitest.full.config.ts"` | Script |
| 3 | Fast Gate workflow: `lint`, `typecheck`, `build`, new `test-fast` job running `npm run test:fast`, no environment/secret binding, no path filter, triggers on every push/PR to `main` (plus `workflow_dispatch`) | `.github/workflows/build-assurance.yml` (see Decision 1, Section 9, for rename-vs-keep) | Workflow |
| 4 | Full Assurance workflow: one `test-full` job running `npm run test:full`, `environment: smart-business-test` and the three `SUPABASE_TEST_*` secret-name bindings moved here unchanged, path-filtered per Section 5, plus `workflow_dispatch` | New: `.github/workflows/full-assurance.yml` | Workflow |
| 5 | Fix the two shared-state-sensitive assertions per Section 6.1 | `tests/catalog-import/real-http.test.ts` | Test code |
| 6 | Update the evidence contract to describe the two-tier model, what each new job proves/does not prove, and the corrected assertion | `docs/engineering/assurance/Build_Assurance_Baseline.md` (extend the existing, already-accepted contract rather than fork a new document -- see Decision 4, Section 9) | Documentation |

No change to `package-lock.json`, no dependency added or upgraded -- Vitest's multi-config-file invocation (`vitest run -c <file>`) is existing, already-installed CLI capability.

## 8. Risks and tradeoffs

- **Coarse `src/**`/`tests/**` path triggers.** Section 5's Full Assurance path list is deliberately broad (whole-directory, not fine-grained per-subpath) to avoid under-triggering on an indirect dependency. The tradeoff is that some source changes that provably cannot affect integration behavior will still trigger Full Assurance. This is the safer failure direction for an assurance mission and is recommended as the Stage 2 default; finer-grained path rules remain a future refinement if the coarse version proves too eager in practice.
- **Workflow rename/restructuring changes GitHub's check names.** If `build-assurance.yml` is renamed (Decision 1), the `Team LIPS Application Build Assurance` check name PRs currently display will change. Confirmed not a required branch-protection check today, so this is low-risk, but Mission Control should decide deliberately rather than by side effect.
- **Native path-filter-skip is unsafe for a future required check**, as detailed in Section 5. This is a forward-looking risk, not a Stage 2 blocker, but should be recorded now so it is not rediscovered the hard way later.
- **The `real-http.test.ts` fix is a test-code semantic change**, not pure formatting -- unlike the lint-stabilization precedent in the closed `SB-OPS-CI-STABILIZATION-1.0` mission, this genuinely changes what the test asserts (from a global count delta to a scoped existence check). It preserves and arguably strengthens the original security intent (Section 6.1), but Stage 3 independent review should specifically re-verify that equivalence rather than treat it as routine formatting.
- **Enabling parallelism for the fast project** is a real behavior change to how those 8 files execute (today they run serialized with everything else via the single global `fileParallelism: false`). It is proposed because pure-logic files share no external mutable state, so parallel execution is safe and strictly faster -- but Stage 2 should confirm no fast-tier file has a hidden shared-state dependency (e.g. a shared temp file or global mutable module singleton) before enabling it. A quick scan during this investigation found no such dependency among the 8 files, but Stage 2's implementer should re-verify at the point of making the change.
- **Doubled `npm ci` cost is not new.** Splitting `test` into `test-fast` (Fast Gate) and `test-full` (Full Assurance) as separate jobs continues the existing one-`npm ci`-per-job pattern already used by all 4 current jobs; it does not introduce a new inefficiency class, though `cache: npm` (Section 3) would benefit all jobs equally if adopted.

## 9. Decisions needed from Mission Control or Founder

1. **Fast Gate workflow identity:** rename `.github/workflows/build-assurance.yml` to `fast-gate.yml` for naming clarity (matches the mission's own vocabulary, but changes the GitHub check name), or keep the existing file name/job set and only change the `test` job's body (lower diff, preserves current check names)?
2. **Vitest split mechanism:** two separate config files (`vitest.fast.config.ts` / `vitest.full.config.ts`, this report's recommendation -- simpler, explicit about which config is active in any given CI log) or Vitest's built-in `test.projects` workspace feature inside one `vitest.config.ts`?
3. **Full Assurance path-trigger list:** confirm or amend the exact path list in Section 5 -- in particular, confirm `lambda/**` and `scripts/**` should be included (proposed here out of caution given the parser-lease tests' indirect relationship to the Lambda ingestion pipeline) and confirm nothing else app-relevant is missing.
4. **Evidence-contract documentation location:** extend the existing, already-accepted `docs/engineering/assurance/Build_Assurance_Baseline.md`, or create a separate architecture document for the two-tier model? This report recommends extending the existing contract to avoid fragmenting the assurance record, but that document belongs to the lineage of the closed `SB-OPS-BUILD-ASSURANCE-1.0`/`SB-OPS-CI-STABILIZATION-1.0` missions and Mission Control may prefer a fresh document under this mission's own name instead.
5. **`real-http.test.ts` fix approval:** confirm the Section 6.1 design (unique-marker existence check replacing the global count comparison) before Stage 2 implements it, since it is a genuine test-semantic change requiring explicit sign-off rather than routine formatting.
6. **Scheduled regression assurance:** confirm this remains out of Stage 2 scope (no cadence/justification was supplied) or provide the cadence/justification needed to include it.
7. **Required-check configuration:** whether/when Fast Gate and/or Full Assurance should become required branch-protection checks is explicitly Founder/Mission-Control governance territory, not authorized to Claude Code at any stage of this mission. Flagged here only so it is considered alongside Decision 3 (the path-filter-skip mechanism becomes unsafe if Full Assurance is later made required without also changing its triggering mechanism).

## 10. Compliance confirmation

No application code, test code, workflow YAML, package script, dependency, lockfile, database/provider state, deployment, or branch-protection file was changed. No `npm run test`/`test:fast`/`test:full` or any credential-backed integration test was run during this investigation -- all classification was performed via static source/import inspection. No secret value was read, printed, or recorded. `SB-P-1.12` was not started. No self-approval or self-merge occurred; PR `#581` was not approved or merged by Claude Code.

## 11. Next authorized action

Claude Code stops after this Stage 1 report. Stage 2 (implementation) is not authorized by this work and was not attempted. Mission Control reviews this design, resolves the Section 9 decisions, and separately authorizes Stage 2 if it proceeds.
