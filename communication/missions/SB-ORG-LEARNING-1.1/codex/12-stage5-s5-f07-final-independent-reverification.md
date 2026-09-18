# SB-ORG-LEARNING-1.1 — Final S5-F-07 Independent Re-verification

**Actor:** Codex — independent verifier

**Date:** 2026-09-18

**Disposition:** `PASS`

**Reviewed head:** `25ac06c5384842f7a50b531f6262d9b278080b63`

**Technical correction checkpoint:** `e0dd7d95949ac30c2b7b907adc7fb8d67b42a76a`

**Repository:** `SmartBusinessv1/smart-business`

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**PR:** `#589 — OPEN — NOT MERGED`

## 1. Decision and authority

S5-F-07 is independently resolved. The read-only absent-drive reproduction now returns `INVALID_ANCESTRY`, reaches `INVALID_OR_UNSAFE`, and produces zero eligible new-work items. Valid directory ancestry with absent descendants still permits normal first processing. S5-F-01 through S5-F-06 remain resolved within the verified boundary; no regression blocker remains within the authorized Stage 5 scope.

Stage 5 is **ready for Mission Control completion review only**. This is not Stage 5 acceptance, mission closure, Stage 6 authorization or merge approval.

Authority is the user's final S5-F-07 request and continuation instructions, the current live instruction, and [Mission Control record 35](../mission-control/35-stage5-f07-rereview-and-final-codex-reauthorization.md). This is one continued independent verification pass. The interruption due to execution capacity did not start a new review or change the reviewed head. Previously completed evidence was retained; the missing local typecheck was actually executed after capacity was restored.

At verification handoff, this report and a minimum appended Codex section in `communication/live/report.md` were prepared locally. Mission Control record 36 subsequently authorized publication of those two files only. No implementation was modified or additional verification pass performed for publication.

## 2. Repository state and historical preservation

The authorized branch was fetched and fast-forwarded from reporting checkpoint `fcd160e3f33d430e45e0cbd3d9b1c9cd905a487e` to reviewed head `25ac06c5384842f7a50b531f6262d9b278080b63`. On resumption, a fresh fetch independently confirmed that the remote and local heads still matched this SHA, with a clean worktree before report creation. Origin remains `https://github.com/SmartBusinessv1/smart-business.git`.

PR #589 independently reports OPEN, `mergedAt: null`, the authorized branch/head, and base `main` at `4247cebc9eb6a09ab9549f641247a012b6c9d383`.

| Commit | Role |
| --- | --- |
| `e0dd7d95949ac30c2b7b907adc7fb8d67b42a76a` | Technical S5-F-07 correction |
| `fcd160e3f33d430e45e0cbd3d9b1c9cd905a487e` | Reporting-only CI follow-up |
| `90d3d56` | Mission Control final re-verification authorization |
| `25ac06c5384842f7a50b531f6262d9b278080b63` | Mission Control live handoff and reviewed head |

All changes after the technical checkpoint are communication/reporting only: the live instruction/report, builder report 10 and Mission Control record 35. No implementation commit appeared after that checkpoint.

Since prior reviewed head `32591ee7a65852cbffe5712260c40ef2356234c9`, implementation/test changes are confined to `organizational-learning/scripts/reconcile.mjs` and `organizational-learning/tests/reconcile.test.ts`. The executable correction changes the null-ancestor return from ABSENT to INVALID_ANCESTRY; associated comments and focused tests were added. The upward-walk algorithm and other reconciliation logic remain unchanged.

Historical [report 08](08-stage5-independent-failure-path-assurance.md), [report 09](09-stage5-independent-corrective-reverification.md), [report 10](10-stage5-final-independent-reverification.md), [report 11](11-stage5-s5-f06-final-independent-reverification.md), builder correction records and Mission Control decisions remain intact. This later PASS does not rewrite their FAIL dispositions or the S5-F-01 through S5-F-07 finding chain. In particular, report 11's initial 359 passes / two execution failures and targeted 26/26 retry remain historical observations, not results of this pass.

## 3. S5-F-07 — null ancestor and read-only absent-drive proof

Inspection of `organizational-learning/scripts/reconcile.mjs` confirms the `ancestor.ancestorPath === null` branch at line 401 returns `INVALID_ANCESTRY`. Receipt discovery maps that status to the existing `INVALID_RECEIPT_ROOT_ANCESTRY` issue at line 492. The receipt-issue guard at line 701 reaches `INVALID_OR_UNSAFE` before work-producing classifications. No new reconciliation state, issue label or alternate containment implementation was introduced.

Independent reproduction used Windows, Node `v24.18.0`. Read-only metadata confirmed the `Z:` drive root was absent with ENOENT. The receipt location was `Z:\ole-verifier-nonexistent-root\receipts`, with the ordinary hashed mission component derived from the unchanged genuine Stage 2A envelope. No drive, mount, junction, symlink or object on that absent path was created. A separate ordinary temporary directory held only harmless control fixtures and the isolated locks path.

| Observation | Result |
| --- | --- |
| Derived-path lstat | ENOENT |
| Presence classification | `INVALID_ANCESTRY`, never ABSENT |
| Reconciliation state | `INVALID_OR_UNSAFE`, never ELIGIBLE_UNPROCESSED |
| Retry / human reconciliation flags | `true` / `true` |
| Eligible planner items | **0** |
| Safe reason | Storage key plus `INVALID_RECEIPT_ROOT_ANCESTRY` |
| Raw absent-drive path / distinguishing path text in classification output | Absent, independently asserted |

The plan may contain a blocked work-item record; zero eligible work intent does not mean the planner must omit that diagnostic record. The existing Windows direct-presence, end-to-end, planner and safe-diagnostic tests also executed and passed in the independent full Fast Test run.

**S5-F-07 result: resolved.**

## 4. Genuine-absence controls and S5-F-06

Direct independent checks used ordinary temporary files and directories; the fixture was removed after verifying its resolved cleanup path remained beneath the OS temporary directory.

| Case | Presence / reconciliation | Eligible items |
| --- | --- | --- |
| Existing valid receipt directory, absent mission child | ABSENT / ELIGIBLE_UNPROCESSED | 1 |
| Entire receipt root absent beneath valid directory ancestry | ABSENT / ELIGIBLE_UNPROCESSED | 1 |
| Ordinary file occupying `receiptsDir` | INVALID_ANCESTRY / INVALID_OR_UNSAFE | 0 |
| Ordinary file above `receiptsDir`, with multiple child components | INVALID_ANCESTRY / INVALID_OR_UNSAFE | 0 |

The invalid-file cases independently produced Windows ENOENT from leaf metadata lookup, then correctly failed closed with retry and human-reconciliation flags true. Valid absence has not been over-blocked.

The walk continues upward for ENOENT or ENOTDIR only to locate an existing ancestor; it does not equate either code alone with genuine absence. Found ancestors must resolve to directories before missing descendants are trusted. Direct calls confirmed `isGenuineAbsenceError({code: "ENOENT"})` is true and the ENOTDIR case is false. The retry predicate remains separate and unchanged by S5-F-07.

Linux/POSIX regression evidence comes from actual corrected Ubuntu CI execution of the existing ordinary-file ancestry tests, combined with source inspection. This pass did not run a separate local Linux environment or claim a raw Linux errno trace. Prior S5-F-06 Linux CI failure and its ENOTDIR correction remain preserved in report 11 and the builder record. Current dangling-ancestor tests also passed through the existing isolated fixtures.

**S5-F-06 result: remains resolved.**

## 5. S5-F-05 and S5-F-01 through S5-F-04

The independent Windows full Fast Test run passed all 74 reconciliation tests, including the new S5-F-07 cases and existing regression assertions. Current code inspection confirms:

- **S5-F-05:** A visible dangling final mission entry remains `DANGLING_OR_UNRESOLVED`, maps to a fixed issue and reaches INVALID_OR_UNSAFE, never ordinary absence or eligible new work.
- **S5-F-01:** Live outside-root receipt indirection remains blocked by the shared directory/per-entry physical-containment guard. The accepted receipt-store helper is unchanged.
- **S5-F-02:** The original file-at-mission-path, receipt-shaped non-file, malformed JSON and schema-invalid receipt cases remain fail closed. Safe-diagnostic/canary assertions passed. The later absence/ancestry gaps identified as S5-F-05, F-06 and F-07 are now resolved within the exercised boundary.
- **S5-F-03:** Direct/directory envelope-indirection and recursive-discovery cases passed. Envelope location approval still precedes reading content, and recursive traversal retains its physical anchor.
- **S5-F-04:** Equivalent validated envelopes still deduplicate to one deterministic item. Conflicting same-identity envelopes still produce zero work items with a conflict result. Full validated-envelope hashing and grouping remain before classification.

Existing isolated repository tests and the collected earlier evidence were used; no additional verifier junction/symlink experiment was constructed. All original demonstrated cases remain resolved without claiming certification of arbitrary privileged filesystem changes or races.

## 6. Genuine Stage 2A and broader reconciliation

The current classifier was independently invoked against the genuine Stage 2A envelope and receipt, read-only. It returned:

```text
reconciliation_state: ALREADY_PROCESSED
source_fingerprint:
c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475
repeated classification: byte-identical
```

The corresponding existing real-data tests also passed. Git scope checks and the clean post-verification worktree confirm genuine receipts, closure envelopes and evidence artifacts were not changed.

Existing tests passed for NEW_CLOSURE_REVISION, SUPERSEDED_OR_REOPENED, FAILED_RETRYABLE, intermediate HARVESTED recovery, deterministic replay, stable ordering and bounded one-owner/deterministic-loser behavior, including separate-process ownership proof. These code paths are unchanged. This remains a bounded local ownership result, not a distributed lease or autonomous background service.

## 7. Stage 2 / Stage 3 / provenance / context

Independent read-only validation of current real artifacts established:

- **4/4 candidates** schema-valid, all CANDIDATE / NONE; **14/14** pinned claim references resolve VALID; observer actor classes remain synthesis.
- Candidate 3 retains **MEDIUM**, SUPPORTS/LIMITS and the unresolved documentary discrepancy. No unsupported resolution was inferred.
- **4/4 promotions** schema-valid and bound to matching recomputed candidate revision hashes; all remain **VALIDATED / MISSION_SCOPED**, approved by mission-control. Their 14 evidence entries match candidate evidence and independently resolve VALID.
- No actual promotion asserts INSTITUTIONALISED, ORGANIZATION_WIDE or Founder approval.
- All four promotions are included under the matching operational CI context profile. Raw candidate inputs are excluded; an in-memory changed candidate revision is rejected as stale, without modifying artifacts. Output retains `context, not authority` and Candidate 3's LIMITS_OR_CONTRADICTS_PRESENT disclosure.
- Factual references point to the original CI-architecture acceptance record, closure record and archive manifest, not generated OLE artifacts or live communication. Repeated references to one source are not independent corroboration.
- The existing heuristic screened current candidates, promotions and the in-memory context representation CLEAN. Existing schema, provenance and context tests also passed in the full Fast Test run.

## 8. Authority and scope drift

The correction adds no automatic promotion/institutionalization, model/provider integration, external credentials, network retrieval, scheduler/cron/queue, background worker, trusted publisher, PR creation automation, autonomous commit/merge, governance mutation, Product Truth mutation or production/customer/merchant/employee mutation path.

No dependency, `package-lock.json`, workflow, application code, schema, receipt-store helper, envelope-location code, candidate, promotion, context artifact, genuine receipt, closure evidence, provider/deployment configuration, governance or Product Truth change occurred in the correction. Existing tests were extended, not weakened. The platform gating of new absent-drive tests is explicitly accounted for below; no pre-existing gate was bypassed.

The verifier made no implementation edits, external integration run, provisioning, deployment or external-state mutation. `SB-P-1.12` remains NOT ACTIVATED.

## 9. Independent local validation and interruption history

| Check | Actual result |
| --- | --- |
| `npm.cmd run test:fast` | Exit 0; **371/371 tests**, **28/28 files**, 170.37 seconds; no failures or skipped count on Windows |
| Focused S5-F-07 and reconciliation tests | All **74** reconciliation tests passed within that full run, including four absent-drive tests |
| Receipt/path, envelope-location, candidate/promotion/provenance/context tests | Executed and passed within the same full run |
| Direct artifact schema/provenance/revision/context checks | Passed as recorded in section 7 |
| `npx.cmd tsc --noEmit` | Initially did not execute because automatic approval review hit its usage limit; actually executed on authorized resumption and exited **0** |
| `npx.cmd prettier --check organizational-learning/` | Exit 0 |
| `npm.cmd run build` | Exit 0; completed result recovered from the already-started process after interruption; no deployment |
| Repository-wide ESLint via installed API and unchanged rules | Exit 1; **5,429 errors / seven warnings**, 30 error-bearing files |
| OLE subset of those ESLint results | Zero errors |

All lint errors were `prettier/prettier: Delete CR`. Every error-bearing file matched its committed HEAD blob after CRLF-to-LF normalization. No file was normalized or auto-fixed. The local repository-wide lint command is accurately recorded as failed; independently inspected Linux CI reports zero errors and seven warnings. This verified checkout-only issue is not an implementation blocker in the authorized verification standard.

No local result was manufactured from CI. The missing typecheck was not counted as passed before it ran. Resumption recovered the already-started build/lint results and reused valid Fast Test, probe, provenance and CI-log evidence; expensive successful checks were not restarted. The prior capacity rejection is resolved, and no required local check remains unexecuted.

## 10. Independently inspected GitHub CI

Actual run metadata was queried for the technical checkpoint and reviewed head. Application logs were inspected for execution totals, platform skips and checkout identity; current Full Assurance logs were inspected for actual test execution. PR/check state was independently refreshed after resumption.

| Head / workflow | Run | Observed result |
| --- | --- | --- |
| Technical `e0dd7d9`, Application #230 | [35330731188](https://github.com/SmartBusinessv1/smart-business/actions/runs/35330731188) | SUCCESS; Ubuntu 24.04; **368 passed / four skipped**, 372 registered tests, 28 files |
| Technical `e0dd7d9`, Markdown #1834 | [35330731116](https://github.com/SmartBusinessv1/smart-business/actions/runs/35330731116) | SUCCESS |
| Technical `e0dd7d9`, Full Assurance #103 | [35330731031](https://github.com/SmartBusinessv1/smart-business/actions/runs/35330731031) | SUCCESS |
| Reviewed `25ac06c`, Application #233 | [35331515692](https://github.com/SmartBusinessv1/smart-business/actions/runs/35331515692) | Lint, typecheck, build and Fast Tests SUCCESS; **368 passed / four skipped**, 372 registered tests, 28 files; lint zero errors / seven warnings |
| Reviewed `25ac06c`, Markdown #1837 | [35331515680](https://github.com/SmartBusinessv1/smart-business/actions/runs/35331515680) | SUCCESS |
| Reviewed `25ac06c`, Full Assurance #106 | [35331515622](https://github.com/SmartBusinessv1/smart-business/actions/runs/35331515622) | SUCCESS; **108/108 tests**, 20 files, actually executed |

All six applicable current checks are completed SUCCESS. Current Application checkout logs identify the separate PR merge-test SHA `328999a6b02b7890e7694507f479065e120f6e5f`, checked out at depth one. Run head and checked-out merge-test identity are distinct.

**Platform coverage:** Linux skips the four new Windows absent-drive tests and registers one additional platform-limitation test. Its reconciliation file therefore reports 75 registered tests, four skipped; the overall suite reports 368 passed / four skipped. Windows found an absent drive, executed all four cases and did not register the alternative platform-limitation test, yielding 74 reconciliation tests and 371/371 overall. Linux green CI is not represented as executing the null-ancestor absent-drive branch. That branch is independently proved by the actual Windows direct reproduction and passing Windows tests. The Linux limitation test does not itself exercise the null-ancestor branch.

The current Full Assurance log retains the pre-existing inventory shared-write-path diagnostic. Its successful run does not resolve that historical follow-up. The observed CI totals above take precedence over any shorthand inference that Windows and Linux totals are identical.

## 11. Limitations and Mission Control handoff

No independently reproduced Stage 5 blocker remains within the authorized correction/regression boundary. Evidence is bounded to the inspected implementation, ordinary/read-only verifier controls, existing repository tests, Windows local execution and actual Ubuntu CI. Literal OS permission/I/O fault injection, broader filesystem race conditions and privileged trust-root replacement were not tested or certified. Existing heuristic-screening and local-lock limitations remain unchanged.

S5-F-07 is independently resolved; S5-F-01 through S5-F-06 remain resolved. Stage 5 is **ready for Mission Control completion review**, not already accepted. [Mission Control record 36](../mission-control/36-stage5-final-pass-verifier-publication-authorization.md) authorizes publication of this report and the minimum prepared Codex live handoff only. Publication handoff head `c9d509cad853069f9bad864400288647589cdfa5` is later than the reviewed head and does not change the PASS conclusions or evidence. Historical sections and prior reports are preserved. The CI results above belong to the reviewed state; GitHub remains the live source for publication CI.

`STAGE 6 — NOT AUTHORIZED`

`PR #589 — NOT MERGED`

`SB-P-1.12 — NOT ACTIVATED`

`STAGE 5 FINAL PASS VERIFICATION PUBLISHED — MISSION CONTROL COMPLETION REVIEW REQUIRED`
