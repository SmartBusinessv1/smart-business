# SB-ORG-LEARNING-1.1 — Stage 5 Independent Corrective Re-verification

## 1. Verifier, authority and result

- **Verifier:** Codex, independent verifier only.
- **Date:** 2026-09-18.
- **Repository:** `SmartBusinessv1/smart-business`.
- **Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`.
- **PR:** [#589](https://github.com/SmartBusinessv1/smart-business/pull/589), OPEN, NOT MERGED; `mergedAt: null`.
- **Reviewed head:** `0c550155348611919baa1698530f783146eb364e`.
- **Technical correction checkpoint:** `2bb8ece7434df9c5f4fd4d5c93122939fff8152b`.
- **Reporting-only follow-up:** `93404affcd667ac28f816387ac054d361d77ec69`.
- **Disposition:** `FAIL`.
- **Stage 5 ready for Mission Control completion review:** **No — S5-F-05 remains a blocker.**

Controlling sources are the current live instruction, [Mission Control record 26](../mission-control/26-stage5-correction-rereview-and-codex-reauthorization.md), the user's corrective re-verification request and subsequent restriction to collected evidence, safe inspection, existing tests and non-adversarial isolated fixtures. No additional filesystem-indirection construction was performed after that restriction. This report uses the already-collected reproductions and completes the remaining checks within that boundary.

Read the [builder correction report](../claude-code/07-stage5-f01-f04-correction.md), [original verifier report 08](08-stage5-independent-failure-path-assurance.md), [correction authorization 25](../mission-control/25-stage5-f01-f04-correction-authorization.md), corrected implementation and relevant tests. The original four findings and correction history remain intact. This report neither replaces the historical FAIL nor rewrites Mission Control's correction re-review.

## 2. Repository and checkpoint reconciliation

The working tree was clean before verification. Origin was confirmed as `https://github.com/SmartBusinessv1/smart-business.git`; the authorized branch was fetched and fast-forwarded from `93404af` to the stated handoff. Local and PR heads matched `0c550155348611919baa1698530f783146eb364e` before and after verification.

Commits after the technical checkpoint were inspected: `93404af` updates correction reporting, and `af3e8a7`, `2cefc88`, `0c55015` record Mission Control authorization/handoff. Their aggregate changed paths are only live instruction/report, the builder correction report and Mission Control record 26. They contain no later implementation change.

The PR base remains `main` at `4247cebc9eb6a09ab9549f641247a012b6c9d383`. The reviewed implementation identity, current communication head and GitHub merge-test identity are kept separate below.

## 3. New blocker — S5-F-05

### Dangling receipt-directory indirection is misclassified as genuine absence

**Affected path:** `organizational-learning/scripts/reconcile.mjs`, `listReceiptsForMission`, lines 221–237, especially the `!existsSync(missionDir)` early return at lines 225–230. `classifyEnvelope` consumes that empty result, bypasses its receipt-issue branch and reaches its final `ELIGIBLE_UNPROCESSED` return. This is the production discovery path used by the planner.

**Collected evidence:** Before the user's restriction on further indirection experiments, an isolated fixture used the genuine Stage 2A envelope for read-only pinned evidence resolution and a separate temporary receipts root. A Windows junction existed at the derived hashed mission-directory path. Its empty temporary target was removed, leaving the junction itself present. No genuine receipt or source file was changed.

The same invocation independently observed:

```text
existsSync(missionDir): false
lstatSync(missionDir).isSymbolicLink(): true

classifyEnvelope result:
reconciliation_state: ELIGIBLE_UNPROCESSED
reason: no existing receipt for this mission/fingerprint
retry_eligible: false
needs_human_reconciliation: false
source_fingerprint:
c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475
```

This is a real filesystem observation, not a mocked `existsSync` return. The temporary junction was removed during fixture cleanup. No further construction or reproduction was needed after the user restricted experimentation.

**Why it fails:** `existsSync` follows the indirection when determining existence. Its false result does not prove that the directory entry is absent: the entry still exists while its target is unavailable. The early return reports `{ receipts: [], issues: [] }` before either `assertPhysicallyContained` or directory enumeration runs. Consequently, no ambiguity reaches the existing fail-closed branch. The code comment claiming this branch is never reached for dangling/unreadable indirection is contradicted by the collected metadata and classification result.

**Impact:** Ambiguous durable state becomes ordinary first-processing/harvest intent. This violates the requirement that only genuine absence may mean no receipts. The evidence establishes unsafe classification, not actual duplicate harvesting, candidate publication or production mutation; none was performed.

**Expected behavior:** A present dangling entry, unresolved indirection or metadata/read failure must create a safe receipt-discovery issue and result in `INVALID_OR_UNSAFE` or equivalent zero-new-work behavior, with retry/human-reconciliation signaling. Genuine directory absence must retain its normal empty-store behavior. Diagnostics must not echo raw content or parser snippets.

**Narrow correction scope:** Correct receipt-discovery absence detection so it distinguishes a genuinely absent entry from a present but unresolved/ambiguous filesystem entry; use non-following entry metadata and explicit filesystem-error classification where appropriate. Preserve the accepted Stage 1 containment primitive and existing safe classifications. Merely interpreting `existsSync === false` as absence is insufficient. Add focused coverage for a dangling mission receipt-directory entry, genuine absence, existing enumeration failures and safe diagnostics. No candidate, promotion, genuine receipt, envelope, dependency, schema or workflow change is required by this finding. Implementation and any further adversarial fixture execution require separate authority.

This new identifier records the remaining gap in the S5-F-02 correction. It does not erase S5-F-02 or renumber the original findings.

## 4. Original findings and correction results

| Historical finding | Independent corrective result |
| --- | --- |
| S5-F-01 — outside-root receipt state | Original three live-target cases now fail closed; shared Stage 1 containment primitive is reused unchanged |
| S5-F-02 — directory failures / unexpected entries | Original `ENOTDIR` and receipt-shaped-directory failures now block work; complete absence/ambiguity boundary is still not resolved because of S5-F-05 |
| S5-F-03 — envelope indirection | Original direct/directory junction bypasses and nested discovery case no longer produce work |
| S5-F-04 — duplicate/conflicting identity | Equivalent validated inputs deduplicate before classification; tested material conflicts produce zero work |

### S5-F-01 — original receipt-indirection reproduction

The already-collected isolated probes exercised an outside-root junction at `receiptsRoot/computeMissionStorageKey(mission_id)` with an existing outside directory in each of these states:

| Outside content | Corrected classification |
| --- | --- |
| Empty | `INVALID_OR_UNSAFE` |
| Valid matching `SCREENED` receipt copy | `INVALID_OR_UNSAFE` |
| Valid matching `VALIDATION_FAILED` receipt copy | `INVALID_OR_UNSAFE` |

All three reported `PHYSICAL_CONTAINMENT_VIOLATION`, with retry and human-reconciliation flags true. Direct invocation of the shared helper against that fixture rejected it. The receipt-store diff changes only export visibility and explanatory comments; its containment algorithm is unchanged. Reconciliation calls that helper for the mission directory and each candidate receipt path. These successful live-target cases do not establish safety of the earlier dangling-entry return identified as S5-F-05.

### S5-F-02 — directory and content failures

| Collected case | Result |
| --- | --- |
| Genuinely absent mission receipt directory | `ELIGIBLE_UNPROCESSED`, correct positive control |
| Ordinary file at hashed directory path (`ENOTDIR`) | `INVALID_OR_UNSAFE`, `ENUMERATION_FAILED` |
| Directory named `blocked.json` | `INVALID_OR_UNSAFE`, `UNEXPECTED_NON_FILE_ENTRY` |
| Malformed ordinary receipt JSON | `INVALID_OR_UNSAFE`, `INVALID_JSON` |
| Schema-invalid ordinary receipt JSON | `INVALID_OR_UNSAFE`, `SCHEMA_INVALID` |
| Present dangling mission-directory junction | Incorrect `ELIGIBLE_UNPROCESSED`; S5-F-05 |

The malformed/schema-invalid fixtures included a synthetic secret-shaped canary. It was absent from all collected classification output. Diagnostics used fixed conditions and storage-key/filename information rather than raw input or parser errors.

Static inspection confirms enumeration exceptions that actually reach `readdirSync` now become `ENUMERATION_FAILED`. `ENOTDIR` was reproduced. Literal operating-system `EACCES`/I/O fault injection was not performed and is not claimed; a false existence check cannot be assumed to prove safe absence. The dangling case alone establishes the blocker without further offensive experimentation.

### S5-F-03 — envelope location and recursive discovery

Previously gathered actual CLI results, completed before the restriction, were:

| Input | Work items | Rejections |
| --- | --- | --- |
| `--envelope` through approved-prefix external junction | 0 | 1 |
| `--envelopes-dir` directly targeting that junction | 0 | 1 |
| Recursive discovery of a nested external junction | 0 | 0; unsafe entry omitted |
| Direct external envelope | 0 | 1 |
| External envelope directory | 0 | 1 |
| Valid envelope under prefix look-alike | 0 | 1 |
| Traversal into prefix look-alike | 0 | 1 |
| Genuine approved envelope | 1 `ELIGIBLE_UNPROCESSED` | 0 |

Safe subsequent inspection confirms `isLexicallyApprovedLocation` and physical containment are separate checks in `sources/envelope-location.ts`, lines 62–90. The approved root remains `communication/missions/`. The predicate imports the Stage 1 physical helper, not the evidence allowlist. Planner approval precedes envelope content reading. Directory discovery independently bounds recursive physical traversal to its anchor; encountered entries must still pass envelope location approval before classification. Current tests covering these paths passed in the normal Fast Test run.

This closes the original demonstrated bypass within the reviewed boundary. It is not a certification of every possible filesystem race, platform or privileged trust-root replacement.

### S5-F-04 — equivalent and conflicting validated semantics

Three ordinary isolated envelope files represented identical validated semantics, including different JSON key order/formatting and omission of defaulted nullable/empty fields. Direct planner and actual CLI runs each produced exactly one work item and zero rejections. Reversing input order and replay produced byte-identical planner output.

Separate pairs sharing the same mission/revision were tested with differing `source_snapshot_ref`, `accepted_scope`, `final_disposition`, evidence references, `reopens` and `supersedes_closure`. Each produced zero work items and one explicit conflict result, identical across reversed order. The source-commit case used a second real commit in the same ephemeral repository; conflict detection was not dependent on an unresolvable synthetic SHA.

Static inspection confirms `resolveEnvelopeIdentityGroups` hashes complete schema-parsed envelopes with the existing canonical revision helper and groups by mission/revision before calling classification. Path-string deduplication and later lock acquisition are not substitutes for this planner-level decision. Stable ordering across different mission IDs also remained intact.

## 5. Genuine Stage 2A and reconciliation regression

The genuine Stage 2A envelope and receipt were independently read through the current classifier without modifying either artifact:

```text
reconciliation_state: ALREADY_PROCESSED
source_fingerprint:
c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475
repeat result: byte-identical
```

Isolated ordinary receipt copies independently confirmed:

- Matching `SCREENED` receipt remains `ALREADY_PROCESSED`.
- Matching `VALIDATION_FAILED` remains `FAILED_RETRYABLE`, with explicit retry and no no-material-learning assertion.
- Intermediate `HARVESTED` remains resumable with the stored intermediate state identified.
- A changed closure revision produces `NEW_CLOSURE_REVISION` and a distinct fingerprint.
- Reopen and supersede each produce `SUPERSEDED_OR_REOPENED` with human reconciliation required.
- Replay and mission/revision ordering remain deterministic.

Four concurrent Node processes using ordinary temporary lock files yielded one owner and three deterministic busy results, all naming the same owner. Non-owner release returned false and the lock remained active. Existing owner/loser regression tests also passed. This remains a bounded local lock proof, not a production lease or distributed recovery service.

Git comparisons confirm the genuine receipt, closure evidence and prior verifier reports were not changed by the correction or this verification.

## 6. Stage 2, Stage 3 and context-pack regression

Read-only independent validation on the current branch established:

- **Candidates:** 4/4 schema-valid, all `CANDIDATE` / `NONE`, all 14 observer actor classes `synthesis`; **14/14** pinned claim references resolve `VALID`.
- **Candidate 3:** `MEDIUM`, `LIMITS` and the unresolved documentary discrepancy remain visible. No resolution was inferred.
- **Promotions:** 4/4 schema-valid, all `VALIDATED` / `MISSION_SCOPED` with `mission-control` approval; all four recomputed revision hashes match. Their 14 evidence entries exactly match the corresponding candidate references and independently resolve `VALID`.
- **Authority:** No current promotion claims `INSTITUTIONALISED`, `ORGANIZATION_WIDE` or Founder approval. Human decision references remain distinct from underlying factual evidence.
- **Context:** All four current promotions remain eligible for the matching CI profile; raw candidate input is excluded. Existing stale-revision, candidate exclusion and limitation-rendering tests passed. Output retains `context, not authority` and renders Candidate 3's `LIMITS`.
- **Screening/self-evidence:** Current candidates, promotions and the in-memory context pack screened `CLEAN` under the existing heuristic. All factual references still point to the original two CI-architecture acceptance/closure records and archive manifest, not generated artifacts or live communication. Repeated underlying sources are not independent corroboration.

Candidates, promotions, context-pack implementation/output, evidence and their schemas are unchanged from the earlier reviewed head. The original S2B-F-01/F-02 corrections therefore retain both their unchanged artifacts and passing current validation. No new claim of automatic freshness, source-withdrawal monitoring or promotion authority is made.

## 7. Scope and authority inspection

Implementation changes since the original Stage 5 review are confined to `receipt-store.ts` export visibility, `envelope-location.ts`, `reconcile.mjs` and their two focused test files, alongside authorized communication records. Existing tests were extended; the correction did not weaken the Fast Test include list or change CI workflow logic.

There is no change to dependencies, `package-lock.json`, schemas, candidates, promotions, genuine receipts, closure evidence, context-pack output, workflows, application code, deployment/provider configuration, governance or Product Truth. The five implementation/test paths align with correction authorization 25.

The inspected correction adds no model/provider integration, credentials, network retrieval, scheduler/cron/queue, background worker, trusted publisher, PR creator, autonomous Git operation, automatic merge, automatic promotion or production/customer/merchant/employee mutation. Existing Git evidence reads and explicitly invoked local proof outputs do not confer those authorities. `SB-P-1.12` remains NOT ACTIVATED.

## 8. Independent local validation

| Check | Actual result |
| --- | --- |
| `npm.cmd run test:fast` | Exit 0; **28 files / 336 tests passed**, 133.38 seconds |
| Focused reconciliation, envelope-location, receipt-store/path-safety and context-pack tests | Executed and passed as part of that complete Fast Test run |
| Candidate / promotion / provenance validation | 4/4 candidates, 4/4 promotions, 14/14 references valid in each set; four revision bindings match |
| TypeScript `tsc --noEmit` | Exit 0 |
| Prettier `--check organizational-learning` | Exit 0 |
| `npm.cmd run build` | Exit 0; local build only |
| Repository-wide ESLint with unchanged rules, via installed API | Exit 1; **5,429 errors / seven warnings**, detailed below |
| OLE subset of those ESLint results | Zero errors |

The ESLint errors are all `prettier/prettier: Delete CR`, across 30 files. Every affected file matched its committed HEAD blob after CRLF-to-LF normalization. No file was normalized or auto-fixed. Current Linux CI lint separately passed with zero errors and seven warnings. The local command is recorded as failed, not relabelled green; the collected evidence attributes its errors to checkout line endings rather than the correction's committed source content.

Normal tests and safe static inspection supplement, rather than override, S5-F-05. No external integration suite was started locally. The Full Assurance result below is independently read GitHub execution evidence. Temporary probes used isolated roots, read-only genuine evidence or ordinary copies; their cleanup completed. No verifier implementation edits or additional post-restriction indirection experiments occurred.

## 9. Current CI, inspected independently

All workflow metadata below reports current head `0c550155348611919baa1698530f783146eb364e`, completed with conclusion success. The Application workflow checkout logs identify GitHub's separate merge-test SHA `31d420592becc79f6f29edd182aaa5266b4cdd67`; `refs/pull/589/merge` matched it.

| Workflow | Run | Independently observed result |
| --- | --- | --- |
| Application Build Assurance #205 | [35262617104](https://github.com/SmartBusinessv1/smart-business/actions/runs/35262617104) | Lint, typecheck, build, Fast Tests SUCCESS; **28 files / 336 tests**; lint zero errors / seven warnings |
| Markdown Quality Gate #1809 | [35262614634](https://github.com/SmartBusinessv1/smart-business/actions/runs/35262614634) | SUCCESS |
| Full Assurance #78 | [35262614633](https://github.com/SmartBusinessv1/smart-business/actions/runs/35262614633) | SUCCESS; **20 files / 108 tests**, 200.98 seconds |

These are current-head results, not a repetition of Mission Control's technical-checkpoint #201/#1805/#74 claims. Current Fast Test logs also show an actual depth-one checkout, preserving the earlier shallow-clone assurance. All six checks were green; PR #589 remained OPEN and unmerged. Green CI does not cover the independently reproduced dangling-entry failure.

## 10. Limitations and Mission Control handoff

The unresolved blocker is the precisely reproduced S5-F-05 absence/ambiguity defect. Literal permission-denied/I/O fault injection, additional indirection variants and broader filesystem-race experiments were not performed. No result is inferred for those untested cases. Existing scanner and local-lock limitations remain unchanged. This is corrective re-verification, not formal Stage 5 acceptance or Stage 6 authority.

At the initial verification handoff, only this report and a minimum new Codex verifier section in `communication/live/report.md` were prepared, with publication reserved for separate authorization. Mission Control record 27 subsequently authorized publication of these two files only. Original report 08, builder correction evidence and Mission Control records remain unchanged by this publication. The reviewed head, FAIL disposition, S5-F-05 and positive re-verification results are preserved. The CI results above belong to the reviewed state; no additional verification pass or implementation correction was performed for publication.

Mission Control must decide the narrow corrective handling of S5-F-05. The suggested scope is not implementation authorization. Stage 5 is **not ready for completion review**, Stage 6 remains **NOT AUTHORIZED**, PR #589 remains **OPEN — NOT MERGED**, and `SB-P-1.12` remains **NOT ACTIVATED**.

`STAGE 5 INDEPENDENT CORRECTIVE RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`
