# SB-ORG-LEARNING-1.1 — Final S5-F-06 Independent Re-verification

**Actor:** Codex — independent verifier

**Date:** 2026-09-18

**Disposition:** `FAIL`

**Reviewed head:** `32591ee7a65852cbffe5712260c40ef2356234c9`

**Technical correction checkpoint:** `289e22a6863b2f70abc5508e8347da1893776d6e`

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**Repository:** `SmartBusinessv1/smart-business`

**PR:** `#589 — OPEN — NOT MERGED`

## 1. Disposition and authorization

The original S5-F-06 ordinary-file ancestry reproduction and all mandatory existing-ancestor cases are corrected. The exact S5-F-05 dangling-final-entry case and original S5-F-01 through S5-F-04 regressions pass. However, the ancestry walk still permits first-processing intent when it finds **no existing ancestor at all**. A read-only Windows check against an absent drive reproduced `ABSENT` and `ELIGIBLE_UNPROCESSED` without any directory ancestry being validated. This is **S5-F-07 — null-ancestor branch treats unresolvable filesystem roots as genuine absence**.

Stage 5 is **not ready for Mission Control completion review**. This review is authorized by the user's final S5-F-06 request, the current live instruction and [Mission Control record 32](../mission-control/32-stage5-f06-rereview-and-final-codex-reauthorization.md). At verification handoff, only this report and a minimum Codex section in `communication/live/report.md` were prepared locally. Mission Control record 33 subsequently authorized publication of those two files only. No implementation was modified and no additional verification pass was performed for publication.

Stage 6 is **NOT AUTHORIZED**. PR #589 remains **OPEN — NOT MERGED**, with no merge authorization. `SB-P-1.12` remains **NOT ACTIVATED**.

## 2. Repository state and history

Fetched origin and fast-forwarded the clean authorized branch from reporting follow-up `baa6a84bc6e435e633d68ae0ec1fe641e6b0b8dc` to the reviewed head. Origin is `https://github.com/SmartBusinessv1/smart-business.git`. GitHub independently reported PR #589 open, `mergedAt: null`, with the expected branch/head and base `main` at `4247cebc9eb6a09ab9549f641247a012b6c9d383`.

| Commit | Evidence role |
| --- | --- |
| `edd4da9077318186c5e6c05158b2fd34432db069` | Initial S5-F-06 implementation; historical Linux CI failure preserved |
| `289e22a6863b2f70abc5508e8347da1893776d6e` | Corrected cross-platform implementation checkpoint |
| `baa6a84bc6e435e633d68ae0ec1fe641e6b0b8dc` | Builder reporting-only CI follow-up |
| `0188031` | Mission Control final re-verification authorization |
| `32591ee7a65852cbffe5712260c40ef2356234c9` | Mission Control live handoff and reviewed head |

All changes after the technical checkpoint are confined to the live instruction/report, builder report 09 and Mission Control record 32. No later implementation mutation is present. Since the previous reviewed head `018be1b3830f62f7d3d4c30470a8cc9384a1161f`, the only implementation/test changes are `organizational-learning/scripts/reconcile.mjs` and `organizational-learning/tests/reconcile.test.ts`, alongside mission communication.

[Report 08](08-stage5-independent-failure-path-assurance.md), [report 09](09-stage5-independent-corrective-reverification.md), [report 10](10-stage5-final-independent-reverification.md), the prior builder correction reports and all historical findings remain intact. This later result does not rewrite their FAIL dispositions or erase the failed first Linux correction push.

## 3. S5-F-06 ancestry and cross-platform results

The current `findDeepestExistingAncestorByLstat` walks upward using non-following `lstatSync`. Its retry predicate accepts ENOENT or ENOTDIR only to continue searching toward an existing ancestor. When such an ancestor is found above the target, following `statSync` must resolve it to a directory; a non-directory or unresolved ancestor returns `INVALID_ANCESTRY`. Receipt discovery maps that status to fixed condition `INVALID_RECEIPT_ROOT_ANCESTRY`, and the existing issue branch returns `INVALID_OR_UNSAFE`.

Independent Windows checks used ordinary files/directories beneath one OS-temporary root, the unchanged genuine Stage 2A envelope, and an isolated locks path. No verifier-created junction or symlink was required. The temporary fixture was removed after checking its resolved path remained below the OS temporary directory.

| Mandatory case | Independent evidence | Result |
| --- | --- | --- |
| Ordinary file as `receiptsDir` | Direct metadata/classifier/planner invocation; leaf lstat error ENOENT | `INVALID_ANCESTRY`, `INVALID_OR_UNSAFE`, retry/human flags true, zero eligible items |
| Ordinary file above `receiptsDir` | Direct invocation through multiple missing child components; leaf error ENOENT | Same fail-closed result and zero eligible items |
| Dangling ancestor above `receiptsDir` | Existing direct and end-to-end repository tests, independently executed; static walk/stat inspection | `INVALID_ANCESTRY`, `INVALID_OR_UNSAFE`; no eligible first processing |
| Existing directory with absent mission child | Direct invocation and existing tests | `ABSENT`, normal `ELIGIBLE_UNPROCESSED`, one eligible item |
| Entire receipt root absent beneath a valid directory | Direct invocation and existing tests | `ABSENT`, normal first processing, one eligible item |

Direct invocation confirms `isGenuineAbsenceError({code: "ENOENT"})` is true and `isGenuineAbsenceError({code: "ENOTDIR"})` is false. Source inspection confirms ENOTDIR was added only to the upward walk's unresolved-path predicate; it was not redefined as genuine absence.

Linux evidence is independent inspection of actual GitHub execution, not a local Linux run. Application #220 genuinely failed three assertions: two expected `INVALID_ANCESTRY` but received `METADATA_UNAVAILABLE`, and the safe-diagnostic test received `ENTRY_METADATA_UNAVAILABLE` instead of `INVALID_RECEIPT_ROOT_ANCESTRY`. The failed run had 358 passed / three failed tests. Its end-to-end ordinary-file blocking tests still passed. Comparing that checkpoint with the corrected source identifies the ENOTDIR retry addition; corrected Ubuntu CI #221 passed all 64 reconciliation tests and all 361 Fast Tests. The logs establish the before/after behavior; they do not contain a separate raw errno trace from the fixture.

**Result:** The demonstrated S5-F-06 existing-invalid-ancestor cases are resolved on Windows and in corrected Linux CI. The overall requirement to trust absence only beneath validated directory ancestry remains incomplete because of S5-F-07.

## 4. S5-F-07 — null-ancestor branch treats unresolvable filesystem roots as genuine absence

### Exact affected path

In `organizational-learning/scripts/reconcile.mjs`:

1. `findDeepestExistingAncestorByLstat`, lines 306–322, reaches the filesystem root after unresolved-path errors and returns `{ ancestorPath: null }` at line 318 when the parent equals the current path.
2. `classifyMissionDirectoryPresence`, lines 385–389, treats that null result as `ABSENT`. It does not validate any directory with `statSync` on this branch.
3. `listReceiptsForMission`, lines 459–462, converts ABSENT to an empty, issue-free receipt set.
4. `classifyEnvelope` therefore bypasses its receipt-issue guard at line 673 and permits `ELIGIBLE_UNPROCESSED`; the planner exposes an eligible work item.

The comment describing this case as practically unreachable does not hold for an absent Windows drive. It also conflicts with the function's preceding statement that absence is never assumed when no entry exists anywhere in the chain.

### Collected evidence

The verifier made read-only metadata/classification calls on Windows, Node `v24.18.0`. `lstatSync('Z:\\')` returned ENOENT on this machine. No drive, mount, junction, symlink or directory on that path was created. The supplied receipt path was `Z:\ole-verifier-nonexistent-root\receipts`; the mission component was the normal hash of the genuine envelope's mission ID.

```text
drive: Z:\
driveLstatError: ENOENT
classifyMissionDirectoryPresence: ABSENT
reconciliation_state: ELIGIBLE_UNPROCESSED
reason: no existing receipt for this mission/fingerprint
retry_eligible: false
needs_human_reconciliation: false
eligible planner items: 1
```

This is not absence beneath a valid, traversable directory. No such ancestor was found or validated. The no-receipt branch nevertheless recommends new work against an unresolved filesystem root. The effect demonstrated is unsafe processing intent; no harvest, receipt write, data loss or production mutation is alleged.

### Expected behavior and narrow correction scope

The no-existing-ancestor/null outcome must fail closed using a safe fixed-condition issue and `INVALID_OR_UNSAFE` or equivalent blocking behavior, with zero eligible new-work intent. A valid existing directory followed by genuinely absent descendants must continue to permit normal first processing.

The narrow recommended scope is the null-ancestor decision in reconciliation presence classification, corresponding documentation, and focused coverage of a path for which no existing directory ancestor can be established. Preserve the working S5-F-06 cases, ENOENT/ENOTDIR walk semantics, S5-F-05 behavior and shared containment helper. This recommendation is for Mission Control's corrective decision, not permission for verifier implementation. No correction was made.

## 5. S5-F-05 and S5-F-01 through S5-F-04

All 64 reconciliation tests passed in the initial independent local full-suite attempt, including all 15 S5-F-06 additions. The two failures elsewhere in that run are recorded separately below. Current Linux runs also passed all 64 reconciliation tests.

- **S5-F-05:** A present dangling final mission entry is still detected with non-following metadata, yields `DANGLING_OR_UNRESOLVED`, and fails closed. Existing direct and end-to-end fixtures passed.
- **S5-F-01:** Outside-root live receipt indirection remains blocked. The shared physical-containment helper and its directory/per-entry use are preserved; existing regression tests passed.
- **S5-F-02:** Original file-at-mission-path, receipt-shaped non-file, malformed JSON and schema-invalid receipt cases still block processing. Fixed-condition diagnostics and canary non-disclosure tests passed. The broader absence guarantee still has the S5-F-07 gap.
- **S5-F-03:** Direct/directory envelope-indirection and recursive discovery tests passed. Location approval precedes content reading; the physical anchor and shared guard remain unchanged.
- **S5-F-04:** Equivalent validated envelopes still produce one deterministic item; conflicting same-identity envelopes produce zero work items with a conflict result. Full validated-envelope hashing, replay and ordering tests passed; this logic is unchanged.

The verifier ran existing isolated repository tests and inspected current code. No new filesystem-indirection experiment was constructed for this review.

## 6. Genuine Stage 2A and reconciliation lifecycle

Direct read-only classification of the genuine Stage 2A envelope and receipt returned `ALREADY_PROCESSED` with fingerprint:

`c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`

Existing genuine-data tests also passed. Genuine receipts, closure envelopes and referenced evidence were not changed by the correction or this review.

Existing tests passed for `NEW_CLOSURE_REVISION`, reopened/superseded closures, `FAILED_RETRYABLE`, intermediate `HARVESTED` recovery, deterministic replay, stable ordering and bounded one-owner/deterministic-loser locking, including separate-process proof. Their implementation remains unchanged. This is a bounded local ownership result, not distributed scheduling or autonomous recovery authority.

## 7. Stage 2 / Stage 3 / provenance / context

Direct read-only validation of the real current artifacts established:

- **4/4 candidates** schema-valid, all `CANDIDATE` / `NONE`; **14/14** claim references independently resolve VALID, with observer actor class `synthesis`.
- Candidate 3 retains **MEDIUM**, SUPPORTS/LIMITS and the unresolved documentary discrepancy.
- **4/4 promotions** schema-valid and bound to matching recomputed candidate revision hashes; all are **VALIDATED / MISSION_SCOPED**, with `mission-control` approval. Their 14 evidence entries match candidate evidence and independently resolve VALID.
- No actual promotion asserts INSTITUTIONALISED, ORGANIZATION_WIDE or Founder approval.
- Matching context includes all four promotions. Raw candidates are excluded. An in-memory candidate revision change invalidates eligibility without any artifact edit. Output retains `context, not authority` and Candidate 3's `LIMITS_OR_CONTRADICTS_PRESENT`.
- Factual references still point to the original CI-architecture acceptance record, closure record and archive manifest, not generated OLE artifacts or live communication. The existing heuristic screened current candidates/promotions and the in-memory context representation CLEAN. Repetition of a source is not independent corroboration.

The initial local context/provenance test-file failures and targeted retry are reported below rather than concealed by these successful direct artifact checks.

## 8. Authority and drift

The correction diff introduces only deterministic filesystem ancestry classification, its issue mapping and focused tests. It adds no automatic promotion/institutionalization, model/provider integration, credentials, network retrieval, scheduler/cron/queue, background worker, trusted publisher, PR creation automation, autonomous commits/merge, governance or Product Truth mutation, or production/customer/merchant/employee mutation path.

No dependency, `package-lock.json`, workflow, application, schema, receipt-store helper, envelope-location implementation, candidate, promotion, context artifact, genuine receipt, closure evidence, provider/deployment configuration, governance or Product Truth change is present in this correction. Tests were extended; no quality gate or assertion was removed. `SB-P-1.12` remains inactive. No external integration suite was run locally, and no external configuration or state was provisioned.

## 9. Independent local validation

| Check | Observed result |
| --- | --- |
| `npm.cmd run test:fast` | Exit 1: **359 passed / two failed**, 26 passed / two failed files, 183.00 seconds |
| Focused reconciliation/S5-F-06 tests | All **64** passed within that run, including all 15 new tests |
| Receipt/path, envelope-location and candidate/promotion/schema tests | Passed within that run |
| Actual candidate/promotion/provenance/context validation | Passed as detailed in section 7 |
| `npx.cmd tsc --noEmit` | Exit 0 |
| `npx.cmd prettier --check organizational-learning/` | Exit 0 |
| `npm.cmd run build` | Exit 0; local build only |
| Repository-wide ESLint via installed API and unchanged rules | Exit 1: **5,429 errors / seven warnings**, 30 error-bearing files |
| OLE subset of ESLint results | Zero errors |

The initial provenance-validator failure was `git commit -q -m commit fixture` failing to write a temporary repository Git object with `Permission denied`. The initial context-pack failure was a 30,000 ms test timeout (reported duration 34,109 ms). These are observed execution failures, not evidence of failed schema/provenance assertions. Their underlying environmental cause is not proven. The full-suite result is recorded as failed and is not relabelled green.

The two failed files were rerun with `npx.cmd vitest run -c vitest.fast.config.ts organizational-learning/tests/provenance-validator.test.ts organizational-learning/tests/context-pack.test.ts --no-file-parallelism`, retaining the original assertions and timeouts. The targeted retry exited 0: **26/26 tests in two files passed**, 76.01 seconds. Both initial failures were non-reproducing on this retry; no implementation, assertion or timeout was changed. This does not turn the initial full-suite attempt into a successful single run.

All repository-wide lint errors were `prettier/prettier: Delete CR`. Every affected file matched its committed HEAD blob after CRLF-to-LF normalization. No unrelated file was normalized or auto-fixed. CI lint independently reports zero errors and seven warnings.

## 10. Actual GitHub CI evidence

Run metadata was independently queried for all three relevant heads; actual Fast Test logs were inspected, including the historical failures and corrected Ubuntu results.

| Head / workflow | Run | Observed result |
| --- | --- | --- |
| Initial `edd4da9`, Application #220 | [35321744783](https://github.com/SmartBusinessv1/smart-business/actions/runs/35321744783) | FAILURE; 358 passed / three failed Fast Tests; exact diagnostic differences in section 3 |
| Initial `edd4da9`, Markdown #1824 | [35321744791](https://github.com/SmartBusinessv1/smart-business/actions/runs/35321744791) | SUCCESS |
| Initial `edd4da9`, Full Assurance #93 | [35321744854](https://github.com/SmartBusinessv1/smart-business/actions/runs/35321744854) | SUCCESS |
| Technical `289e22a`, Application #221 | [35322774171](https://github.com/SmartBusinessv1/smart-business/actions/runs/35322774171) | SUCCESS; Ubuntu 24.04; 64 reconciliation tests and 361/361 Fast Tests, 28 files |
| Technical `289e22a`, Markdown #1825 | [35322774157](https://github.com/SmartBusinessv1/smart-business/actions/runs/35322774157) | SUCCESS |
| Technical `289e22a`, Full Assurance #94 | [35322774158](https://github.com/SmartBusinessv1/smart-business/actions/runs/35322774158) | SUCCESS |
| Reviewed `32591ee`, Application #224 | [35326612854](https://github.com/SmartBusinessv1/smart-business/actions/runs/35326612854) | All four jobs SUCCESS; 361/361 Fast Tests, 28 files; lint zero errors / seven warnings |
| Reviewed `32591ee`, Markdown #1828 | [35326612783](https://github.com/SmartBusinessv1/smart-business/actions/runs/35326612783) | SUCCESS |
| Reviewed `32591ee`, Full Assurance #97 | [35326612751](https://github.com/SmartBusinessv1/smart-business/actions/runs/35326612751) | SUCCESS; actual log shows 108/108 tests, 20 files |

All six current checks are complete and green. Current Application logs identify the separate PR merge-test SHA `d8b7d163bc645325f5ba79d587aab4dbd51f917f`, checked out at depth one. This differs from run head `32591ee7a65852cbffe5712260c40ef2356234c9`; the identities are not conflated. Full Assurance retains the previously reported inventory shared-write-path diagnostic; passing tests do not resolve that historic follow-up.

These CI results belong to the reviewed state, not the later publication commit. They do not cover the independently reproduced missing-root/null-ancestor failure or erase the initial local failures or historical Linux failure. GitHub remains the live source for publication CI.

## 11. Limitations and Mission Control handoff

S5-F-07 is the remaining independently reproduced implementation blocker. Original S5-F-06 existing-ancestor cases pass, but absence is still trusted on a branch that validates no directory ancestry. Literal OS permission/I/O injection, additional indirection variants, races and privileged trust-root replacement were not tested or certified. Existing heuristic-screening and bounded-lock limitations remain unchanged.

[Mission Control record 33](../mission-control/33-stage5-f07-verifier-publication-authorization.md) explicitly authorizes publication of this report and the minimum appended verifier handoff only. Publication handoff head `3aea246842d566b5316aacc7f01b165aed21c6c7` is later than the reviewed head; it does not change the FAIL result, S5-F-07, positive results or local-test nuance. Prior actor sections and reports are preserved. No correction, acceptance, merge or Stage 6 authorization is inferred.

Stage 5 is **not ready for completion review**. Stage 6 remains **NOT AUTHORIZED**; PR #589 remains **OPEN — NOT MERGED**; `SB-P-1.12` remains **NOT ACTIVATED**.

`STAGE 5 S5-F-07 VERIFICATION PUBLISHED — MISSION CONTROL CORRECTION AUTHORIZATION REQUIRED`
