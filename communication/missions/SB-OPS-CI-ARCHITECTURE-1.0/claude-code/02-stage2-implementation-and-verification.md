# Claude Code Stage 2 Report — Implementation and Verification

**Mission ID:** `SB-OPS-CI-ARCHITECTURE-1.0`
**Mission name:** Fast Gate + Full Assurance
**Stage:** Stage 2 -- implementation and verification
**Reporter:** Claude Code
**Status:** `STAGE 2 COMPLETE -- AWAITING MISSION CONTROL`
**Date:** 2026-09-16

**Authority:** `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/03-stage1-review-and-stage2-authorization.md` ("STAGE 1 ACCEPTED -- STAGE 2 AUTHORIZED"), on branch `mission/SB-OPS-CI-ARCHITECTURE-1.0-stage1`, PR [#581](https://github.com/SmartBusinessv1/smart-business/pull/581).

## 1. Objective

Implement the Mission-Control-approved Fast Gate + Full Assurance two-tier CI architecture and the approved unique-marker shared-state correction in `tests/catalog-import/real-http.test.ts`, exactly per the 7 approved decisions in the Stage 1 review/Stage 2 authorization -- without touching dependencies, `package-lock.json`, database/provider state, deployment, branch protection, Product Truth, governance, or Product Mission state.

## 2. Exact files changed

| File | Change | Decision |
|---|---|---|
| `vitest.shared.ts` | New -- shared plugin/alias/timeout constants imported by both new configs | Decision 2 |
| `vitest.fast.config.ts` | New -- Fast Gate suite: 8-file explicit `include`, no `setupFiles`, `fileParallelism: true` | Decision 2 |
| `vitest.full.config.ts` | New -- Full Assurance suite: `include: ["tests/**/*.test.ts"]` minus the 8 fast files via `exclude`, `setupFiles: ["./tests/setup/load-env.ts"]` (unchanged), `fileParallelism: false` (unchanged) | Decision 2 |
| `package.json` | Added `test:fast` and `test:full` scripts only; `test` script unchanged; no dependency/lockfile change | Decision 2 |
| `.github/workflows/build-assurance.yml` | Evolved (file kept, not renamed): `test` job renamed `test-fast` ("Fast Tests"), now runs `npm run test:fast`, `environment:`/`SUPABASE_TEST_*` bindings removed; `lint`/`typecheck`/`build` unchanged; header comment updated | Decision 1 |
| `.github/workflows/full-assurance.yml` | New -- one `test-full` job ("Full Assurance Tests") running `npm run test:full`, `environment: smart-business-test` + the same three `SUPABASE_TEST_*` secret-name bindings, path-filtered `push`/`pull_request` + `workflow_dispatch` | Decisions 1, 3, 7 |
| `tests/catalog-import/real-http.test.ts` | Two tests' assertions changed: unscoped global-count comparison replaced with a unique `randomUUID()` marker + existence check; one `import` added (`randomUUID` from `node:crypto`) | Decision 5 |
| `docs/engineering/assurance/Build_Assurance_Baseline.md` | Extended (not replaced): new/updated Sections 2, 3, 4.3, 5 (Finding 3 resolution), 6, 8, and new Sections 9-10; all prior historical content preserved in place | Decision 4 |
| `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/claude-code/02-stage2-implementation-and-verification.md` | New -- this report | Required deliverable |
| Mission communication (README, handover-log, live report) | Minimal status/handoff updates | Protocol |

**Not changed:** `vitest.config.ts` (confirmed via `git diff --stat vitest.config.ts` -- empty), `package-lock.json`, any `src/**` application file, any other test file, `eslint.config.js`, `tsconfig.json`, `vite.config.ts`, branch protection, database/schema/RLS/grants/RPCs, deployment configuration, Product Truth, or governance.

## 3. Exact Fast vs Full file membership

**Fast Gate (`vitest.fast.config.ts`, 8 files):**

```text
tests/catalog-import/classify.test.ts
tests/catalog-import/content-type.test.ts
tests/catalog-import/fields.test.ts
tests/catalog-import/idempotency.test.ts
tests/catalog-import/parse-isolated.test.ts
tests/catalog-import/parse.test.ts
tests/catalog-import/validate.test.ts
tests/parser-lease/roles-anywhere-decimal-serial.test.ts
```

**Full Assurance (`vitest.full.config.ts`, `tests/**/*.test.ts` minus the 8 above -- 20 files):**

```text
tests/catalog-import/real-http.test.ts
tests/catalog-import/support-schema-rls.test.ts
tests/inventory/archived-item-protection.test.ts
tests/inventory/audit-integrity.test.ts
tests/inventory/business-isolation-views.test.ts
tests/inventory/concurrency.test.ts
tests/inventory/correction-behaviour.test.ts
tests/inventory/correction-link-integrity.test.ts
tests/inventory/cross-business-consistency.test.ts
tests/inventory/idempotency.test.ts
tests/inventory/ledger-correctness.test.ts
tests/inventory/movement-type-direction.test.ts
tests/inventory/negative-stock.test.ts
tests/inventory/opening-stock-invariant.test.ts
tests/inventory/performance.test.ts
tests/inventory/permissions.test.ts
tests/inventory/rls-cross-business.test.ts
tests/inventory/shared-write-path.test.ts
tests/inventory/trusted-event-link.test.ts
tests/parser-lease/guard-lease-rpc.test.ts
```

Identical to the Stage 1 classification (`claude-code/01-stage1-classification-and-design.md`, Section 1); no reclassification occurred during implementation.

## 4. Scripts introduced

`package.json` `scripts` (only these two lines added; every other script, including the unqualified `"test": "vitest run"`, is byte-identical to before):

```json
"test:fast": "vitest run -c vitest.fast.config.ts",
"test:full": "vitest run -c vitest.full.config.ts",
```

## 5. Workflow trigger / path behaviour

- **`build-assurance.yml` (Fast Gate):** `push` to `main`, `pull_request` targeting `main`, no path filter -- unchanged trigger shape from before this mission, only the `test`→`test-fast` job content changed.
- **`full-assurance.yml` (Full Assurance):** `push` to `main` and `pull_request` targeting `main`, both filtered to the approved path list (Decision 3, plus the documented `vitest.shared.ts` addition -- see `docs/engineering/assurance/Build_Assurance_Baseline.md` Section 2 for the exact list and the one-line justification for the addition); plus `workflow_dispatch: {}` for manual triggering. A change touching only `communication/**`/`docs/**`/root Markdown does not start this workflow at all.
- This Stage 2 PR itself touches `tests/**`, `vitest.fast.config.ts`, `vitest.full.config.ts`, `vitest.shared.ts`, `package.json`, and both workflow files -- all on the approved path list -- so it is expected to, and (Section 7) did, trigger Full Assurance, providing a real applicable-change verification case as required (Section 5 of the authorization, "Full Assurance execution evidence on an applicable change").

## 6. Confirmation: Fast Tests require no `SUPABASE_TEST_*` bindings

Two independent lines of evidence:

1. **Static:** `.github/workflows/build-assurance.yml`'s `test-fast` job declares no `environment:` key and no `env:` block referencing any secret (Section 2 diff). `vitest.fast.config.ts` declares no `setupFiles` entry, so `tests/setup/load-env.ts` (the file that throws on missing `SUPABASE_TEST_*`) never executes for this suite.
2. **Dynamic (local, this stage):** ran `npm run test:fast` with `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, and `SUPABASE_TEST_SERVICE_ROLE_KEY` explicitly unset (verified via `env | grep -i supabase` returning no output immediately before the run). Result: **exit `0`; 8 test files, 61 tests, all passed, 10.06s.** See Section 8 for the full local evidence table and Section 9 for the real-CI confirmation (which runs on a fresh runner with no local credentials at all, independently corroborating this).

## 7. Confirmation: Full Assurance retains the approved environment/secret bindings

`.github/workflows/full-assurance.yml`'s `test-full` job declares `environment: smart-business-test` and:

```yaml
env:
  SUPABASE_TEST_URL: ${{ secrets.SUPABASE_TEST_URL }}
  SUPABASE_TEST_ANON_KEY: ${{ secrets.SUPABASE_TEST_ANON_KEY }}
  SUPABASE_TEST_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_TEST_SERVICE_ROLE_KEY }}
```

Identical mechanism and secret names to the binding already approved and provisioned under `SB-OPS-CI-STABILIZATION-1.0` -- only the workflow file it lives in changed (moved from `build-assurance.yml`'s old `test` job to this new file's `test-full` job). No new secret was introduced, requested, or provisioned; no secret value was read, printed, or recorded anywhere in this stage.

## 8. Local validation evidence (this stage)

Run on the normalized (CI-representative `LF`) working tree, per the established methodology (`docs/engineering/assurance/Build_Assurance_Baseline.md` Section 3's `lint` caveat). Only checks possible without provider credentials were run locally, per the authorization's Section 3 item 7.

| Check | Command | Result |
|---|---|---|
| Lint | `npm run lint` | Exit `0`; 0 errors, 7 pre-existing warnings (unchanged, unrelated to this mission) |
| Typecheck | `npx tsc --noEmit` | Exit `0`; no output |
| Build | `npm run build` | Exit `0`; client + SSR bundle produced |
| Fast Tests | `npm run test:fast` (Supabase env vars explicitly unset) | Exit `0`; **8 files, 61 tests, all passed, 10.06s** |
| `package.json` validity | -- | Confirmed valid JSON after the script addition |
| Workflow YAML validity | -- | Both `build-assurance.yml` and `full-assurance.yml` parsed successfully with `yaml.safe_load` |

`test:full` and the default `npm run test` were **not** run locally (would require the same real `SUPABASE_TEST_*` credentials this stage is not authorized to use locally); Section 9 below is the authoritative Full Assurance evidence, gathered from real CI instead.

## 9. Full Assurance execution evidence on an applicable change (real CI)

*(Completed after push -- see the follow-up handover entry / commit for the exact run reference, job result, and test counts once available. This PR's own changes touch `tests/**`, all three Vitest config files, `package.json`, and both workflow files, all on the approved trigger path list, so Full Assurance is expected to run on this PR.)*

## 10. Fast Gate CI timing evidence

*(Completed after push -- see the follow-up handover entry / commit for exact job-level timings from the real CI run on this PR's head.)*

## 11. Exact test counts and outcomes

- **Fast (local, this stage):** 8 files, 61 tests, 0 failures.
- **Full:** unchanged in file/test content from the pre-split suite except the two corrected assertions (Section 12) -- expected total suite count remains 169 tests across 28 files combined (61 fast + 108 full), to be confirmed against real CI in Section 9.

## 12. `real-http.test.ts` correction -- evidence it no longer depends on a global table count

Full design rationale and the `sanitizeFilename` verification are in `docs/engineering/assurance/Build_Assurance_Baseline.md` Section 9. Summary: both previously-flagged tests now generate a `randomUUID()`-derived unique filename marker, pass it as the uploaded file's name, and assert (via `.eq("original_filename", marker)`) that no row exists carrying that exact marker after the rejected request -- rather than comparing a `before`/`after` unscoped `count: "exact"` read of the entire table. `git diff tests/catalog-import/real-http.test.ts` (Section 2) shows the exact change: both `count: "exact", head: true` reads and both `before`/`after` count comparisons are removed; no `before` read remains at all. The auth-rejection assertion (`expect(res.error).toBeTruthy()`) is untouched. This test file is in the Full Assurance tier (Section 3), so its corrected assertions are exercised by `test-full` -- real pass/fail evidence is in Section 9 once available.

## 13. Compliance confirmation

- No dependency was added, removed, or upgraded; `package-lock.json` is byte-unmodified.
- No database/schema/RLS/grant/RPC, provider configuration, production state, deployment, or branch-protection file was changed.
- No test or quality gate was weakened, skipped, muted, or bypassed -- `lint`/`typecheck`/`build` are unchanged; the `real-http.test.ts` change strengthens, not weakens, its assertion (Section 12); no `continue-on-error`, `|| true`, or equivalent bypass exists anywhere in either workflow.
- No secret value was read, printed, or recorded; only secret **names** appear, exactly as in the already-approved binding pattern.
- No `SB-P-1.12` activation, no Product Truth/governance change, no unrelated cleanup.
- No self-approval or self-merge of PR `#581` occurred.

## 14. Residual risks / follow-up recommendations

- **Fast-tier parallelism (`fileParallelism: true` in `vitest.fast.config.ts`) is a genuine behavior change** from the pre-split suite's global `fileParallelism: false`. Local evidence (Section 8) shows all 61 fast tests passing under parallel execution with no observed instability, consistent with the Stage 1 finding that these 8 files share no external mutable state -- but Mission Control/Codex should treat this as worth independent re-confirmation given it is new behavior, not merely a config split.
- **`docs/engineering/assurance/Build_Assurance_Baseline.md` is now a large, multi-mission document** (three missions' historical and current content coexist). This was the explicit, deliberate choice under Decision 4 ("extend... do not create a competing document"), but its size and the density of "historical/corrected/resolved" annotations may eventually warrant a future housekeeping pass -- not proposed or needed now.
- **Decisions 6 and 7 remain deliberately unresolved by design** (scheduled assurance deferred; no required-check promotion in Stage 2) -- carried forward, not overlooked.
- No genuine application/test/environment defect was discovered during implementation; nothing required stopping and reporting under the authorization's "if implementation reveals a genuine defect... stop and report it" clause.

## 15. Next authorized action

Claude Code stops after this Stage 2 report (to be finalized with Section 9/10 CI evidence via a documentation-only follow-up commit once available). Stage 3 (Codex independent review) is not authorized by this work and was not attempted. Mission Control reviews this implementation and evidence, then separately authorizes Stage 3 if it proceeds. PR `#581` remains open, unmerged, unapproved by Claude Code.
