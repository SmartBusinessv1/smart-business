# SB-OPS-BUILD-ASSURANCE-1.0 — Stage 2 Independent Review

**Reviewer:** Codex
**Recipient:** Smart Business Mission Control
**Date:** 2026-09-14
**Status:** `STAGE 2 REPORTED — CORRECTION REQUIRED — AWAITING MISSION CONTROL`
**Recommendation:** `CORRECTION REQUIRED`

## 1. Objective and authority

Independently review Claude Code's workflow, evidence contract, CI results, changed-file scope and authority compliance under [the controlling Stage 2 instruction](../mission-control/04-stage2-codex-review-instruction.md). This recommendation does not accept, merge, close or activate another stage.

Intake covered the complete mission record, live instruction/report, `AGENTS.md`, `CHATGPT.md`, canonical index and inherited Sources 00, 01, 09, 11, 12, 15, 17 and SB-GOV-1.2, communication protocol and Codex EOS workflow. Evidence comes from Git comparisons, workflow/configuration/test source, GitHub PR and Actions APIs/logs, and current branch-protection settings.

## 2. Exact reviewed state

| Reference | Independently observed value |
|---|---|
| Repository / origin | `SmartBusinessv1/smart-business` / `https://github.com/SmartBusinessv1/smart-business.git` |
| Existing branch | `mission/SB-OPS-BUILD-ASSURANCE-1.0-ci-baseline` |
| PR | [#575](https://github.com/SmartBusinessv1/smart-business/pull/575), OPEN, targeting `main`, mergeable at intake, no submitted reviews |
| Fetched base, PR base and merge-base | `4dcb272ebbf8c15410f5e206c71ebc0ec8cfe957` |
| Stage 1 implementation | `8ed3183a2f87900170660c89f1a4eda3f5d61868` |
| Final Stage 1 head | `4766a76ba3d0c676af01ab70a4800588bf23bcf4` |
| Reviewed PR head / Stage 2 starting HEAD | `eb27d3723b59e83e553ef43a07d3fa2a0a6399d1` |

Fetched origin, switched to the requested existing branch and pulled with `--ff-only`. HEAD matched the remote branch and PR head; the working tree was clean before review writes. Six later Mission Control commits contain the Stage 2 handoff. The workflow, baseline and Claude report are unchanged between final Stage 1 head and reviewed head.

## 3. Changed-file verification — PASS

The base-to-final-Stage-1 `git diff --name-status` contains exactly six authorized paths:

| Change | Path |
|---|---|
| Added | `.github/workflows/build-assurance.yml` |
| Added | `docs/engineering/assurance/Build_Assurance_Baseline.md` |
| Added | `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/claude-code/01-stage1-report.md` |
| Modified | `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/README.md` |
| Modified | `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/handover-log.md` |
| Modified | `communication/live/report.md` |

The complete PR at reviewed head has nine changed paths. Additional paths are `communication/live/instruction.md`, the mission `decision-log.md`, and `mission-control/04-stage2-codex-review-instruction.md`, introduced by the later Mission Control handoff. Stage 1 metadata edits and appended handovers are within its allowed communication scope.

Base-to-reviewed-head comparisons show no changes to `src/`, `tests/`, `scripts/`, `package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.js`, `.prettierrc`, `vite.config.ts` or `vitest.config.ts`. No application repair, dependency change, governance change or unrelated branch merge appears in the PR history. Repository scope evidence cannot prove absence of external side effects (F-01).

## 4. Workflow and evidence-contract review

| Review area | Classification | Evidence and limits |
|---|---|---|
| Real commands | PASS | Package scripts define `lint: eslint .`, `build: vite build`, `test: vitest run`; installed TypeScript and root configuration support `npx tsc --noEmit`. |
| Fail-closed behavior | PASS | Four independent jobs run checkout, Node setup, `npm ci` and the real check. No `continue-on-error`, swallowed failure, placeholder success, auto-fix or workflow retry. Install failure also prevents success. |
| Typecheck | PASS, bounded scope | Root configuration includes application TypeScript/TSX and Vite configuration; it is not an empty solution configuration. Tests, Lambda and every repository script are not all checked; `skipLibCheck` is enabled. |
| Build | PASS | CI logs show Vite/Nitro client, SSR and final output generation. No deploy command runs. Buildability does not prove deployed behavior or runtime configuration. |
| Test coverage and non-mutation contract | FAIL | F-01 and F-02 contradict material statements in the new evidence contract. |
| Test environment explanation | FAIL / FOLLOW-UP | Missing process variables are verified; provisioning-only remediation is inaccurate (F-03). Future enablement remains separately authorized. |
| Node/runtime choice | PASS | Existing parser-deploy workflow uses Node major 24 and the same pinned checkout/setup-node action SHAs. Actual initial/current CI uses Node `v24.20.0`, npm `11.19.0`; Claude's local `v24.18.0` / `11.16.0` is reported evidence, not CI runtime. Major 24 has repository precedent; it is not exact patch pinning or production-runtime equivalence. |
| Credential values introduced | PASS, bounded inspection | Read the six-path patch and scanned added lines for common token, AWS key, private-key and JWT patterns: zero matches. No credential values or secret bindings in workflow. No approved automated secret scanner found under `.github/` or `tools/`; inspection is not an exhaustive credential audit. |
| Permissions / required checks | PASS | Workflow has `contents: read`, no OIDC grant, environment, deployment or provider step. Live classic protection requires only `Markdown Quality Gate`, with strict status checks and administrator enforcement; force push disabled. Effective branch rules API returned `[]`. Assurance jobs are not required checks. |
| Setup cost / noise | FOLLOW-UP, non-blocking | Current jobs take approximately 22–28 seconds each, 103 aggregate job-seconds (not a billing measurement). Four fresh installs and all-PR triggers are acceptable here. Persistent red checks and documentation-only runs warrant later review; caching, cancellation or filters are not prerequisites. |
| Product/release acceptance | NOT APPLICABLE | Green commands do not establish Product, security, runtime, release or Founder acceptance. This non-Product mission does not activate `SB-P-1.12`. |

The PASS/FAIL exit-status model and separation from Product acceptance are sound. Red checks remain FAIL even when remediation is FOLLOW-UP. Blockers concern inaccurate evidence and authority claims, not a demand to make all jobs green.

## 5. Independently checked CI evidence

Original and current application CI logs and job metadata were retrieved and inspected:

| Run | Associated PR head | Actual checkout in PR runner |
|---|---|---|
| [34842467495](https://github.com/SmartBusinessv1/smart-business/actions/runs/34842467495) | `8ed3183a2f87900170660c89f1a4eda3f5d61868` | Synthetic merge `8f693f01cfd44190b9b80999220fd83d9a4fded6` into the base above |
| [34843465673](https://github.com/SmartBusinessv1/smart-business/actions/runs/34843465673) | `eb27d3723b59e83e553ef43a07d3fa2a0a6399d1` | Synthetic merge `00c0ab1f8a6c3c99cef0441147f3b84de7cc5fd5` into the same base |

| Check | Original and current result | Independent interpretation |
|---|---|---|
| Install | PASS | All jobs reach checks. Logs report 10 vulnerabilities: 5 moderate, 5 high. Remediation is FOLLOW-UP; no audit gate exists. |
| Lint | FAIL | 159 problems: 152 `prettier/prettier` errors, 6 refresh warnings, 1 hooks warning. |
| Typecheck | PASS | Real `npx tsc --noEmit` step succeeds. |
| Build | PASS | Client, SSR and Nitro output built successfully. |
| Test | FAIL | `tests/setup/load-env.ts:11` throws for three missing `SUPABASE_TEST_*` variables. Vitest reports 28 failed files and **no tests**: setup failure, not 169 failing assertions or silent skips. |

[Markdown run 34843465658](https://github.com/SmartBusinessv1/smart-business/actions/runs/34843465658) passed for reviewed head `eb27d3723b59e83e553ef43a07d3fa2a0a6399d1`.

**Lint classification — PASS verification / FAIL pre-existing baseline:** CI diagnostics name files under unchanged `src/`, `tests/` and `scripts/`. Those entire tracked directories and package/lock/lint configuration are identical to the pre-Stage-1 base. Stage 1 adds no linted application input. Both CI runs produce identical counts. This independently supports pre-existing lint debt without repeating Claude's working-tree normalization or relying on his local result.

**Test classification — PASS verification / FAIL environment setup:** Vitest applies the environment loader to every `tests/**/*.test.ts` file; it throws before test-module execution. CI provides no successful test coverage. Repository Actions secret-name listing returned no names; organization/environment inventories and secret values were not inspected. Logs prove absent runner variables, not every possible secret store's contents.

## 6. Blocking findings

### F-01 — FAIL: Local test evidence conflicts with the non-mutation claim

Locations: baseline Section 7 (line 108), Claude report Sections 5.1 and 7 (lines 48–56 and 93), `tests/setup/test-clients.ts:69`, `tests/inventory/rls-cross-business.test.ts:21`.

Claude reports a credential-backed full-suite local PASS and no Supabase/provider/runtime mutation. The configured suite includes `beforeAll` calls to `createTestOwner`, which calls `auth.admin.createUser`, signs in and inserts a `businesses` row. Inventory setup inserts items and calls the movement-writing RPC; catalog and parser tests also write fixtures/state. These are real clients, not mocks. Successful execution as reported is incompatible with blanket no-provider-mutation. A local Node process can mutate a remote test project.

**Required correction/decision:** Claude must reconcile the local run with its actual non-secret target, execution evidence, fixture effects and authority, and correct the evidence contract/report through Mission Control-authorized correction. Activation expressly prohibits provider/runtime mutation; developer credentials do not establish authority. Codex has **INSUFFICIENT EVIDENCE** to independently establish the actual external target or resulting state and makes no allegation of production mutation. Mission Control must resolve this before acceptance. No rerun or remote cleanup is authorized by this review.

### F-02 — FAIL: Existing test coverage is incorrectly described

Location: baseline Section 3, test limitations paragraph (line 58).

The contract says the suite specifically targets catalog-import logic and Supabase RLS/Auth behavior has no automated coverage. Actual configured inventory is 9 catalog-import files, 17 inventory files and 2 parser-lease files. Inventory cross-business tests check denial; catalog `support-schema-rls.test.ts` checks ACL/RLS and constraints; shared setup exercises real Auth. Comprehensive security acceptance remains unproven, but absence of automated RLS/Auth exercise is false.

**Required correction:** distinguish pure logic, HTTP/integration tests, existing scoped RLS/Auth exercise and remaining gaps. Preserve that current CI executes none successfully and that 169 local passes remain Claude-reported evidence. No new harness or application repair is requested.

### F-03 — FAIL: Secret provisioning alone cannot enable this workflow

Locations: baseline Section 5 finding 3 (line 95), Claude report Section 8 finding 3 (line 103), workflow test job (lines 81–97).

The workflow declares neither an environment nor bindings of `SUPABASE_TEST_*` secrets to process variables. Provisioning a protected-environment secret alone would still leave this job without values. GitHub requires explicit secret access in workflow inputs/environment; see [GitHub secret-use documentation](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

**Required correction:** describe the gap as environment availability **and workflow wiring/authorization**, including external test writes from F-01. Missing wiring may remain deliberately deferred; this review does not require secret injection, provisioning or a green test job. Correct the misleading provisioning-only claim. Future enablement requires an approved target, credential exposure controls and mutation boundary.

## 7. Non-blocking follow-ups and limits

- **FOLLOW-UP:** pre-existing lint debt and install-log vulnerability counts need separate Mission Control disposition. No fixes or dependency upgrades performed.
- **FOLLOW-UP:** record actual runtime versions per run; Node major 24 and `ubuntu-latest` can change. Typecheck scope is the root configuration, not all repository code.
- **FOLLOW-UP / INSUFFICIENT EVIDENCE:** Claude report Section 6 records repository-wide index removal, `reset --hard` and local Git configuration changes for line-ending diagnosis. Clean commit differences support unchanged stored source, but do not independently prove preservation of all prior local work or separate authority for that diagnostic. Mission Control should review this execution boundary. Codex did not repeat it or establish history loss.
- **INSUFFICIENT EVIDENCE:** no raw local execution log in the mission independently establishes 169 passes or absence of external writes. Codex did not perform provider audits or credential-backed tests.

## 8. Recommendation and handoff

**CORRECTION REQUIRED.** Mission Control's provisional interpretation is supported for truthful red lint/setup checks, real commands, unchanged application scope and non-required status. It is insufficient for acceptance while F-01 through F-03 remain unresolved. A corrected, bounded baseline could still be considered with red non-required checks. No waiver, correction activation, acceptance or merge is issued.

Only four Stage 2 communication paths are authorized: this record, README status/next-action metadata, appended handover log and live report. Publication verification is recorded in the handover log. The publication commit is discoverable from this record's Git history and is separate from the reviewed implementation head.

**Codex non-mutation confirmation:** no Stage 1 workflow, baseline or Claude report edited. No application/dependency, Product Truth/governance, infrastructure/authentication/database, deployment/configuration or external-provider changes made. No credential-backed suite, migration, provider command, fixture cleanup, provisioning, branch-protection mutation, self-approval, merge or `SB-P-1.12` activation performed. Mission memory and live instruction remain unchanged.

**Next owner:** Mission Control, to review this record and decide whether to authorize Claude Code correction and evidence reconciliation. Codex stops after publishing on the existing branch.
