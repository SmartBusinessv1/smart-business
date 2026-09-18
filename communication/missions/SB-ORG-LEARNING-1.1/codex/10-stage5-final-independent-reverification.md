# SB-ORG-LEARNING-1.1 — Stage 5 Final Independent Re-verification

**Actor:** Codex — independent verifier

**Date:** 2026-09-18

**Disposition:** `FAIL`

**Reviewed head:** `018be1b3830f62f7d3d4c30470a8cc9384a1161f`

**Technical correction:** `2b6cf519fbddc7396c0a0cc02c5e562500705701`

**Repository:** `SmartBusinessv1/smart-business`

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**PR:** `#589 — OPEN — NOT MERGED`

## 1. Decision and scope

The exact S5-F-05 case is corrected: a dangling entry at the final mission receipt-directory component no longer means absence. However, the broader genuine-absence boundary still fails on Windows when an ordinary file occupies the configured receipt-directory parent. Independent, non-indirection reproduction produced `ABSENT`, then `ELIGIBLE_UNPROCESSED`, with one work item and no rejection. This is **S5-F-06 — invalid receipt-directory ancestry is misclassified as genuine absence**.

Stage 5 is **not ready for Mission Control completion review**. No implementation correction was performed. Stage 6 remains **NOT AUTHORIZED**; PR #589 remains **OPEN — NOT MERGED**; `SB-P-1.12` remains **NOT ACTIVATED**.

Authority is the current live instruction, the user's final Stage 5 request, and [Mission Control record 29](../mission-control/29-stage5-f05-rereview-and-final-codex-reauthorization.md). The verification was completed before publication authorization. Mission Control record 30 subsequently authorized publication of this report and the minimum prepared Codex handoff in `communication/live/report.md` only. Publication preserves the reviewed head and all conclusions; no new verification pass or implementation correction was performed.

## 2. Repository and historical integrity

Fetched origin and fast-forwarded the authorized branch from reporting checkpoint `4091d1cabdddcf12de111d243d3980993aa12295` to reviewed head `018be1b3830f62f7d3d4c30470a8cc9384a1161f`. Origin is `https://github.com/SmartBusinessv1/smart-business.git`. PR #589 targets `main` at `4247cebc9eb6a09ab9549f641247a012b6c9d383`; GitHub reported the authorized head, state OPEN and `mergedAt: null`.

Commits after technical checkpoint `2b6cf519fbddc7396c0a0cc02c5e562500705701` are:

| Commit | Role |
| --- | --- |
| `4091d1cabdddcf12de111d243d3980993aa12295` | Builder reporting-only CI follow-up |
| `f828f25` | Mission Control final re-verification authorization |
| `018be1b3830f62f7d3d4c30470a8cc9384a1161f` | Mission Control live handoff |

Their combined diff changes only the live instruction/report, builder report 08 and Mission Control record 29. There is no later implementation mutation. Since the previous reviewed head `0c550155348611919baa1698530f783146eb364e`, the only implementation/test changes are `organizational-learning/scripts/reconcile.mjs` and `organizational-learning/tests/reconcile.test.ts`.

[Original Stage 5 report 08](08-stage5-independent-failure-path-assurance.md), [corrective report 09](09-stage5-independent-corrective-reverification.md), [builder correction 07](../claude-code/07-stage5-f01-f04-correction.md) and [builder correction 08](../claude-code/08-stage5-f05-correction.md) remain intact. The original four findings and later S5-F-05 are historical evidence; this report neither replaces nor rewrites them.

## 3. S5-F-05 correction result

Current code at `organizational-learning/scripts/reconcile.mjs`, lines 258–304, calls non-following `lstatSync(missionDir)` before `existsSync`. When the final directory entry is visible to `lstatSync` but cannot be resolved by `existsSync`, it returns `DANGLING_OR_UNRESOLVED`. Receipt discovery converts that to `DANGLING_OR_UNRESOLVED_ENTRY`; the existing issue branch at lines 534–560 produces `INVALID_OR_UNSAFE`, with retry and human reconciliation required. It does not produce eligible new-work intent.

The existing direct-presence and end-to-end dangling-entry tests, starting at lines 1541 and 1585 of `organizational-learning/tests/reconcile.test.ts`, passed in the independent complete Fast Test run. They exercise the actual corrected functions and the established isolated fixture. No new verifier junction/symlink construction or bypass attempt was introduced.

Genuine absence also remains functional. An independently created ordinary temporary root with a never-created receipts path produced `ABSENT` and normal `ELIGIBLE_UNPROCESSED` first-processing classification. Existing genuine-absence tests passed.

For actual non-ENOENT errors, static inspection confirms the catch returns `METADATA_UNAVAILABLE`, receipt discovery emits the fixed `ENTRY_METADATA_UNAVAILABLE` label and the classifier fails closed without raw exception content. Existing tests exercise the production error-code predicate with EACCES, EIO, ENOTDIR, an error without a code, and null. These are predicate tests, not an independently forced OS permission/I/O failure. The remaining defect below concerns an ambiguous path that actually returns ENOENT on Windows.

**Result:** S5-F-05's exact final-component dangling-entry reproduction is resolved. This does not establish the full absence-versus-ambiguity guarantee.

## 4. S5-F-06 — invalid receipt-directory ancestry is misclassified as genuine absence

### Affected code path

In `organizational-learning/scripts/reconcile.mjs`:

1. `isGenuineAbsenceError`, lines 258–260, treats any `error.code === "ENOENT"` as genuine absence.
2. `classifyMissionDirectoryPresence`, lines 283–290, applies that rule to `lstatSync(missionDir)` without validating why the parent path cannot be traversed.
3. `listReceiptsForMission`, lines 331–338, returns `{ receipts: [], issues: [] }` for that ABSENT result, before physical containment or enumeration.
4. `classifyEnvelope`, lines 534–545 and 630–643, therefore sees no receipt issue and returns `ELIGIBLE_UNPROCESSED`; `planReconciliation` exposes one eligible work item.

### Independent reproduction and exact evidence

Environment: Windows (`process.platform: win32`), Node `v24.18.0`, reviewed head above.

The verifier created one OS-temporary directory containing an **ordinary file** named `file-receipts`, with harmless fixture text. That file was supplied as `receiptsDir`; the derived `missionDir` was the file path joined with `computeMissionStorageKey(envelope.mission_id)`. The valid, genuine Stage 2A envelope was read without modification. Locks used a separate, never-created path within the same temporary root. No link, junction, external target or genuine receipt was created or modified.

| Observation | Actual result |
| --- | --- |
| `lstatSync(receiptsDir).isFile()` | `true` |
| `lstatSync(missionDir)` | Throws `ENOENT` |
| `classifyMissionDirectoryPresence(missionDir)` | `{ "status": "ABSENT" }` |
| `classifyEnvelope(envelope, options).reconciliation_state` | `ELIGIBLE_UNPROCESSED` |
| Classification reason | `no existing receipt for this mission/fingerprint` |
| Next safe action | `run harvest for this closure envelope` |
| `retry_eligible` / `needs_human_reconciliation` | `false` / `false` |
| Planner result with this valid envelope | One eligible work item; zero rejected inputs |
| Positive control: never-created receipt-directory path under an ordinary temporary directory | Normal `ELIGIBLE_UNPROCESSED` |

The ordinary fixture was removed after checking that its resolved cleanup path was below the OS temporary directory. The working tree remained clean after verification and before report creation.

### Why this remains a blocker

`lstatSync` does not follow its final component, but resolving that component still depends on its ancestors. Here ENOENT means the nested path cannot be resolved through a file; it does not prove a valid, genuinely absent receipt store. The early return suppresses the directory-type/ambiguity failure and recommends new work against an invalid durable-state location.

Builder report 08, section 7, already records that a file at the parent returns ENOENT on Windows. Current source comments also describe that behavior, while the implementation nevertheless classifies every ENOENT as absence. Testing synthetic `{ code: "ENOTDIR" }` does not cover the actual Windows result. This finding does not allege production mutation, receipt loss or external execution; the reproduced effect is an unsafe eligible processing intent.

### Expected behavior and narrow correction scope

Receipt discovery must distinguish a truly missing path from inability to traverse an existing invalid or unresolved ancestor. A file at `receiptsDir` must produce a safe fixed-condition discovery issue, reach `INVALID_OR_UNSAFE` or an equivalent blocked result, require reconciliation of the invalid state and produce zero eligible new-work intent. Truly absent directories beneath a valid ancestry must retain normal first-processing behavior.

The narrow suggested scope is reconciliation's absence/presence decision and focused regression coverage for an ordinary-file receipt parent on Windows, preserving existing containment, genuine-absence, dangling-final-entry and prior correction cases. Corresponding comments/evidence must not equate bare ENOENT with proven genuine absence. This is a correction recommendation for Mission Control, not implementation authorization. The verifier made no correction and did not expand filesystem-indirection experimentation.

## 5. S5-F-01 through S5-F-04 regression

| Historical finding | Current independent result |
| --- | --- |
| S5-F-01: outside-root receipt state | Original live-target cases remain blocked. Existing tests passed; directory and per-entry reads retain the shared physical-containment guard. The helper is unchanged by the F-05 correction. |
| S5-F-02: directory/read failures | Original file-at-hashed-mission-path, receipt-shaped non-file, malformed JSON and schema-invalid cases passed and fail closed. The broader genuine-absence boundary remains incomplete because of S5-F-06. |
| S5-F-03: envelope physical location | Existing direct and directory bypass tests passed, including nested discovery. Location approval remains before reading content; recursive discovery retains its independent physical anchor. Implementation is unchanged this round. |
| S5-F-04: duplicate/conflicting envelopes | Existing equivalent-input, reversed replay and material-conflict tests passed. Full schema-parsed envelope hashes still group by mission/revision before classification; equivalent input yields one item and conflicting input yields zero work items with a conflict result. |

The original independent reproduction evidence in report 09 remains applicable to unchanged paths. Current normal tests and static inspection provide the fresh regression evidence. No claim is made that these bounded cases certify arbitrary races or privileged trust-root replacement.

## 6. Genuine Stage 2A and reconciliation regression

Direct read-only invocation of the current classifier against the genuine Stage 2A envelope and receipt returned:

```text
reconciliation_state: ALREADY_PROCESSED
existing_receipt_processing_state: SCREENED
source_fingerprint:
c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475
next_safe_action: no-op for this exact closure revision
```

The genuine-data regression tests also passed. Git comparisons and the clean post-validation working tree confirm no genuine receipt, closure envelope or underlying evidence artifact changed.

Current reconciliation tests passed for `NEW_CLOSURE_REVISION`, reopened and superseding closures, `FAILED_RETRYABLE`, intermediate `HARVESTED` recovery, deterministic replay and stable ordering. Function-level and separate-process ownership tests passed for one owner and deterministic busy/non-owner behavior. Their implementations are unchanged by the F-05 patch. These remain bounded local ownership controls, not a distributed lease or background service.

## 7. Stage 2, Stage 3 and context-pack regression

Independent read-only validation of the actual current artifacts established:

- Candidates: **4/4 schema-valid**, all `CANDIDATE` with authority effect `NONE`; **14/14** pinned claim references independently resolve `VALID`, with observer actor class `synthesis`.
- Candidate 3: confidence remains `MEDIUM`, with `SUPPORTS` and `LIMITS`; the discrepancy between acceptance and closure follow-up lists is retained without inventing a resolution.
- Promotions: **4/4 schema-valid**, all `VALIDATED` and `MISSION_SCOPED`, approved by `mission-control`. All four recomputed candidate revision hashes match. The 14 promotion evidence entries exactly match corresponding candidate references and independently resolve `VALID`.
- No actual promotion asserts `INSTITUTIONALISED`, `ORGANIZATION_WIDE` or Founder approval.
- The matching operational CI context profile includes all four promotions. Raw candidates are excluded; an in-memory changed candidate revision is rejected as stale without modifying any artifact. Output retains `context, not authority` and Candidate 3's `LIMITS_OR_CONTRADICTS_PRESENT` disclosure.
- The existing heuristic screened the current candidates, promotions and generated in-memory context representation **CLEAN**. All factual references still target the original CI-architecture acceptance/closure records and archive manifest, not generated candidates, promotions, context packs or transient live communication. Repeated references to one source are not independent corroboration.

All related existing schema, provenance, context exclusion, stale-revision and limitation tests passed within the full Fast Test run. The candidate/promotion/context implementation and artifacts did not change in this correction.

## 8. Authority and drift

Inspection of the complete correction diff shows only reconciliation presence logic and its focused tests, plus mission communication. Dependencies, `package-lock.json`, workflow files, schemas, the shared receipt-store helper, envelope-location code, candidates, promotions, genuine receipts, closure evidence, context-pack artifacts, application code, provider/deployment configuration, governance and Product Truth remain unchanged from the prior reviewed state.

The correction introduces no automatic promotion/institutionalization, model/provider integration, external credentials, network retrieval, scheduler/cron/queue, background worker, trusted publisher, PR creation, autonomous commit/merge or production/customer/merchant/employee mutation path. Existing explicitly invoked local proof functions do not grant those authorities. No such external actions were performed in this verification. `SB-P-1.12` remains not activated.

## 9. Independent local validation

| Check | Observed result |
| --- | --- |
| `npm.cmd run test:fast` | Exit 0; **346/346 tests, 28/28 files**, 111.93 seconds; no skipped test count |
| Focused S5-F-05 and reconciliation tests | All 49 reconciliation tests, including the 10 F-05 additions, executed in the full Fast suite |
| Receipt-store/path, envelope-location, candidate/promotion/provenance and context tests | Included and passed in that same complete run; no duplicate full-suite execution needed |
| Actual artifact schema/provenance/revision validation | 4 candidates, 4 promotions, 14 references in each set and 4 revision bindings passed |
| `npx.cmd tsc --noEmit` | Exit 0 |
| `npx.cmd prettier --check organizational-learning/` | Exit 0 |
| `npm.cmd run build` | Exit 0; local build only, no deployment |
| Repository-wide ESLint via the installed API and unchanged rules | Exit 1; **5,429 errors / seven warnings**, 30 error-bearing files |
| OLE subset of those ESLint results | Zero errors |

All local ESLint errors were `prettier/prettier: Delete CR`. Every error-bearing file matched its committed HEAD blob after CRLF-to-LF normalization. No normalization or auto-fix was performed. The local lint result is a failure attributed to verified checkout line endings, not relabelled success. CI independently reports zero lint errors and seven warnings.

No local external integration suite was started. Existing isolated repository tests were run as authorized; the extra verifier fixture used an ordinary file only. No implementation was temporarily broken, patched or restored by the verifier. Passing regression tests do not negate the independently reproduced S5-F-06 gap.

## 10. Independently inspected CI

GitHub run metadata independently confirms these technical-checkpoint runs identify head `2b6cf519fbddc7396c0a0cc02c5e562500705701`:

| Workflow | Run | Result |
| --- | --- | --- |
| Application Build Assurance #211 | [35268396285](https://github.com/SmartBusinessv1/smart-business/actions/runs/35268396285) | SUCCESS; actual Fast Test log: 346 tests / 28 files |
| Markdown Quality Gate #1815 | [35268396270](https://github.com/SmartBusinessv1/smart-business/actions/runs/35268396270) | SUCCESS |
| Full Assurance #84 | [35268396390](https://github.com/SmartBusinessv1/smart-business/actions/runs/35268396390) | SUCCESS; actual log: 108 tests / 20 files |

Current handoff-head runs identify `018be1b3830f62f7d3d4c30470a8cc9384a1161f`:

| Workflow | Run | Result |
| --- | --- | --- |
| Application Build Assurance #214 | [35269380031](https://github.com/SmartBusinessv1/smart-business/actions/runs/35269380031) | Lint, typecheck, build and Fast Tests SUCCESS; 346 tests / 28 files; zero lint errors / seven warnings |
| Markdown Quality Gate #1818 | [35269380185](https://github.com/SmartBusinessv1/smart-business/actions/runs/35269380185) | SUCCESS |
| Full Assurance #87 | [35269380046](https://github.com/SmartBusinessv1/smart-business/actions/runs/35269380046) | SUCCESS; 108 tests / 20 files, genuinely executed |

All six applicable current checks were complete and green. Current Application checkout logs show the separate GitHub PR merge-test SHA `ae5693e627ced4fd254560b7d1b2cee6ab903ff4` at depth one, preserving shallow-checkout evidence. Run head identity and the checked-out merge-test commit are distinct. Full Assurance logs retain the previously reported inventory shared-write-path diagnostic; passing tests do not resolve that historical follow-up.

These results were read from GitHub, not copied solely from Mission Control or builder claims. They apply to the reviewed state and do not validate the later publication commit or cover S5-F-06. GitHub remains the live source for publication CI.

## 11. Limitations and handoff

S5-F-06 is the one independently reproduced remaining blocker in this pass. The exact S5-F-05 case and original S5-F-01/F-03/F-04 cases are corrected; original S5-F-02 cases also pass, but the larger genuine-absence requirement remains incomplete. Literal OS EACCES/I/O injection, additional filesystem-indirection variants, races and privileged trust-root replacement were not tested and are not certified. Builder observations about dangling ancestors are not presented as a new independent verifier reproduction.

The report preserves the existing bounded-lock, heuristic-screening and explicit-human-authority limitations. Mission Control must decide the narrow corrective handling of S5-F-06. Stage 5 is **not ready for completion review**. Stage 6 is **NOT AUTHORIZED**; PR #589 is **OPEN — NOT MERGED** and not authorized for merge; `SB-P-1.12` is **NOT ACTIVATED**.

Only this report and the minimum appended Codex verifier section in the live report are included in publication under [Mission Control record 30](../mission-control/30-stage5-f06-verifier-publication-authorization.md). Earlier actor sections and historical reports are preserved. Publication handoff head `289f74315c866a7f6ca1ad7311d2a9a77d1472c5` is later than the reviewed head; it does not change the FAIL result, S5-F-06 or the positive regression evidence.

`STAGE 5 S5-F-06 VERIFICATION PUBLISHED — MISSION CONTROL CORRECTION AUTHORIZATION REQUIRED`
