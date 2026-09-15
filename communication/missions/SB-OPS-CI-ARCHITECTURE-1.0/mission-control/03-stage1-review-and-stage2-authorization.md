# SMART BUSINESS MISSION CONTROL

## SB-OPS-CI-ARCHITECTURE-1.0 — Stage 1 Review and Stage 2 Authorization

**Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`  
**Mission name:** Fast Gate + Full Assurance  
**Disposition:** `STAGE 1 ACCEPTED — STAGE 2 AUTHORIZED`  
**Date:** 2026-09-15  
**Authorized by:** Smart Business Mission Control under Founder-approved mission authority

## 1. Stage 1 review

Mission Control independently verified PR `#581` at Claude Code Stage 1 head:

`41cf2243739f4155ca95701896b15d4799fb9757`

Verified facts:

- PR `#581` is open, unmerged and mergeable.
- Stage 1 changed only mission communication/documentation files.
- The repository has one global Vitest setup file, `tests/setup/load-env.ts`, applied through `vitest.config.ts` to every `tests/**/*.test.ts` file.
- `fileParallelism: false` is currently global.
- The current undifferentiated `npm run test` therefore cannot run the environment-independent subset without the Supabase test environment.
- Claude Code classified all 28 test files into 8 environment-independent files and 20 Supabase-dependent files with no uncertain entries.
- The shared-state risk in `tests/catalog-import/real-http.test.ts` is correctly identified: two rejected-auth tests compare a global `catalog_import_batches` row count before/after the request.

Stage 1 is accepted as sufficient design evidence for implementation.

## 2. Mission Control decisions

### Decision 1 — Fast Gate workflow identity

**APPROVED: keep `.github/workflows/build-assurance.yml`.**

Do not rename the existing workflow file during Stage 2. Preserve the existing workflow identity/check lineage and minimize unnecessary branch-protection/check-name churn. Evolve its contents into the Fast Gate.

The new Full Assurance tier shall be introduced separately as:

`.github/workflows/full-assurance.yml`

### Decision 2 — Vitest split mechanism

**APPROVED: explicit config files, not `test.projects`.**

Use explicit `vitest.fast.config.ts` and `vitest.full.config.ts` files. A small shared config helper may be introduced if it materially reduces duplication without obscuring which suite is active.

Preserve the existing unqualified `npm test` developer behavior unless a necessary implementation detail requires a narrow, documented adjustment. `test:fast` and `test:full` must be explicit and independently runnable.

### Decision 3 — Full Assurance path triggers

**APPROVED with a conservative broadening.**

Full Assurance shall trigger for changes to at least:

- `src/**`
- `tests/**`
- `supabase/**`
- `lambda/**`
- `scripts/**`
- `package.json`
- `package-lock.json`
- `vitest.config.ts`
- `vitest.fast.config.ts`
- `vitest.full.config.ts`
- `vite.config.ts`
- `tsconfig*.json`
- `eslint.config.*`
- `.github/workflows/build-assurance.yml`
- `.github/workflows/full-assurance.yml`

Use native GitHub Actions path filtering for Full Assurance in Stage 2 because Full Assurance is not a required branch-protection check.

Do not under-trigger to gain speed. If implementation inspection identifies another repository path that can materially alter runtime/integration behavior, include it and document why.

### Decision 4 — Evidence contract location

**APPROVED: extend the existing assurance contract.**

Update:

`docs/engineering/assurance/Build_Assurance_Baseline.md`

Do not create a competing assurance architecture document unless a later mission explicitly requires one.

### Decision 5 — shared-state test correction

**APPROVED.**

In `tests/catalog-import/real-http.test.ts`, replace the two unscoped global-count comparisons with a unique per-attempt marker/existence assertion as designed in the Stage 1 report.

The correction must preserve or strengthen the original security property:

> a rejected unauthenticated/invalid-token request must not create privileged import state attributable to that request.

Do not weaken the auth rejection assertion itself.

### Decision 6 — scheduled assurance

**DEFERRED / OUT OF STAGE 2.**

No scheduled regression cadence is authorized in this stage. Manual `workflow_dispatch` remains authorized and required.

### Decision 7 — required-check governance

**NO BRANCH-PROTECTION CHANGE IN STAGE 2.**

- Keep the current required-check configuration unchanged during implementation.
- Fast Gate may be proposed for required-check promotion only after the new architecture is independently verified and stable.
- Full Assurance shall not be made a required check while it uses native path filtering, because non-triggering PRs could otherwise remain blocked by an absent required status.
- Product/mission acceptance still requires Full Assurance evidence whenever the approved trigger/risk boundary says it is applicable.

## 3. Stage 2 authorized implementation scope

Claude Code is authorized to implement the approved two-tier architecture on the existing mission branch / PR `#581`.

Authorized implementation scope:

1. Create explicit Fast and Full Vitest configs according to Decision 2.
2. Add `test:fast` and `test:full` package scripts without dependency or lockfile changes.
3. Evolve `.github/workflows/build-assurance.yml` into the always-running Fast Gate containing lint, typecheck, build and Fast Tests.
4. Create `.github/workflows/full-assurance.yml` with the approved path filters, `workflow_dispatch`, `smart-business-test` environment and the same three secret-name bindings already approved.
5. Implement the approved unique-marker correction in `tests/catalog-import/real-http.test.ts` only.
6. Update `docs/engineering/assurance/Build_Assurance_Baseline.md` to describe the two-tier contract and exact proof boundaries.
7. Run appropriate local/non-secret checks that are possible without provider credentials.
8. Push implementation to PR `#581` and allow GitHub Actions to produce CI evidence.
9. Publish a Stage 2 implementation report and minimum handover/status updates.
10. Stop for Mission Control review.

## 4. Explicit prohibitions

Stage 2 does not authorize:

- product feature or UX changes;
- production deployment or production data access;
- Supabase schema, RLS, grant, RPC or migration changes;
- provider configuration changes;
- dependency upgrades/additions or `package-lock.json` mutation;
- weakening/skipping/muting tests or quality gates;
- `continue-on-error`, `|| true`, or equivalent green-by-bypass behavior;
- branch-protection changes;
- scheduled regression setup;
- unrelated cleanup;
- `SB-P-1.12` activation;
- self-approval or self-merge of PR `#581`.

If implementation reveals a genuine defect or requires work outside this scope, stop and report it rather than expanding authority.

## 5. Required Stage 2 evidence

The Stage 2 report must show:

- exact files changed;
- exact Fast vs Full file membership;
- commands/scripts introduced;
- workflow trigger/path behavior;
- confirmation Fast Tests run without `SUPABASE_TEST_*` bindings;
- confirmation Full Assurance retains `smart-business-test` environment and existing secret-name bindings;
- Fast Gate wall-clock/job timing evidence from CI;
- Full Assurance execution evidence on an applicable change;
- exact test counts and outcomes;
- evidence the `real-http` correction passes and no longer depends on a global table count;
- no dependency/lockfile/provider/database/production/branch-protection changes;
- any residual risks or follow-up recommendations.

## 6. Next state

`STAGE 2 ACTIVE — IMPLEMENTATION`

PR `#581` remains open. Do not merge.

`SB-P-1.12` remains not activated.
