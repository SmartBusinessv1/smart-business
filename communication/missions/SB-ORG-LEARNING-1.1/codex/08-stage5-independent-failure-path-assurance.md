# SB-ORG-LEARNING-1.1 — Stage 5 Independent Failure-Path Assurance

## 1. Identity, scope and disposition

- **Verifier:** Codex, independent verifier; not builder, promotion authority or Mission Control.
- **Date:** 2026-09-17.
- **Repository:** `SmartBusinessv1/smart-business`.
- **Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`.
- **PR:** [#589](https://github.com/SmartBusinessv1/smart-business/pull/589), OPEN, `mergedAt: null` at verification.
- **Reviewed head:** `d1f5a429d36ddb62f215b5f7412a9ff06d5deab1`.
- **PR base:** `main`, `4247cebc9eb6a09ab9549f641247a012b6c9d383`.
- **Disposition:** `FAIL`.
- **Stage 6 acceptance-review readiness:** **No**. Four independently reproduced reconciliation defects require Mission Control corrective handling.

Authority is the current live instruction, the supplied Stage 5 execution request and [Mission Control record 23](../mission-control/23-stage4-acceptance-and-stage5-independent-assurance-authorization.md). This is independent verification only. No implementation correction was performed. Stage 4 acceptance is preserved as historical Mission Control evidence; this later verification identifies additional failure paths, without rewriting that acceptance.

The branch was fetched and fast-forwarded before review. Local, remote and PR heads matched the handoff SHA above; no descendant implementation change existed. The technical correction checkpoint is `0a3f9f812c84f96c414a2f01aa03987128711046`; `f19c809f4340cc8cc886f934d15efcd81d142e8d` is its reporting follow-up. Changes after the technical checkpoint are confined to the Stage 4 builder report and Mission Control/live communication. Current-head CI was inspected separately from the checkpoint runs.

## 2. Findings requiring correction

### S5-F-01 — Receipt enumeration follows physical indirection outside its trust root

**Location:** `organizational-learning/scripts/reconcile.mjs`, `listReceiptsForMission`, lines 147–176, particularly lines 149–152 and 161. Compare `organizational-learning/lib/receipt-store.ts`, `assertPhysicallyContained` / `readReceiptIfExists`, lines 178–212.

**Reproduction:** In an isolated OS-temp fixture, create a configured receipts root and a separate sibling directory outside it. Create a Windows junction at `receiptsRoot/computeMissionStorageKey(mission_id)` targeting that sibling. Use the genuine Stage 2A envelope and copies of its receipt, with the real repository used only for pinned Git-object reads. Confirm with `realpathSync` that the mission receipt directory resolves outside the configured root. Change only the external receipt copy between invocations of `classifyEnvelope`.

| External fixture state | Actual reconciliation result |
| --- | --- |
| Outside directory empty | `ELIGIBLE_UNPROCESSED` |
| Valid matching `SCREENED` receipt outside root | `ALREADY_PROCESSED` |
| Same external copy changed to valid `VALIDATION_FAILED` receipt | `FAILED_RETRYABLE` |
| Same junction read through Stage 1 `readReceiptIfExists` | Rejected by physical-containment guard |

**Defect and impact:** Reconciliation uses lexical `resolveContainedPath`, then follows the mission-directory junction with `readdirSync` / `readFileSync`. It bypasses the Stage 1 receipt reader's physical-containment check. Outside-root data can suppress work or change retry classification. Schema validity does not repair this storage-boundary violation.

**Narrow correction scope:** Make reconciliation receipt discovery and reads preserve the configured root's physical-containment boundary, with fail-closed handling and regression coverage for outside-root junction/symlink indirection. Do not modify genuine receipts or their fingerprints. No correction was implemented by this verifier.

**Platform boundary:** An ordinary directory-symlink attempt returned `EPERM`; the Windows junction equivalent was actually created and the bypass reproduced. This is not merely a static suspicion and does not claim separate Linux-symlink execution.

### S5-F-02 — Receipt-directory enumeration failures become an empty receipt store

**Location:** `organizational-learning/scripts/reconcile.mjs`, lines 150–154 and 160.

**Reproduction A:** In a separate temporary receipts root, place an ordinary file at the hashed mission-directory path. `readdirSync` produces deterministic `ENOTDIR`. Calling `classifyEnvelope` returns:

```text
reconciliation_state: ELIGIBLE_UNPROCESSED
reason: no existing receipt for this mission/fingerprint
next_safe_action: run harvest for this closure envelope
retry_eligible: false
needs_human_reconciliation: false
```

**Reproduction B:** Create an ordinary mission directory containing a directory named `blocked.json`. Direct `readAndValidateReceiptFile` reports `UNREADABLE` for that path, but production enumeration skips the entry because `entry.isFile()` is false. Classification again returns `ELIGIBLE_UNPROCESSED`.

**Defect and impact:** The catch returns `{ receipts: [], issues: [] }` for every enumeration error, without distinguishing genuine absence from `ENOTDIR`, permission denial or I/O failure. Unexpected receipt-shaped non-file entries also evade ambiguity reporting. An uninspectable durable store is misrepresented as no prior processing and can produce new harvest intent. The existing unit test of the single-file reader does not establish safety of the discovery path feeding that reader.

**Narrow correction scope:** Distinguish genuine absence from unsafe/unreadable enumeration and receipt-shaped unexpected entries; propagate ambiguity to the existing `INVALID_OR_UNSAFE` branch before receipt-dependent work. Add discovery-path tests. This probe used `ENOTDIR`, the expressly permitted deterministic filesystem-error equivalent; literal `EACCES` was not claimed.

### S5-F-03 — Approved envelope location is bypassed through a Windows junction

**Location:** `organizational-learning/sources/envelope-location.ts`, lines 35–52; `organizational-learning/scripts/reconcile.mjs`, lines 446–456.

**Reproduction:** Create a disposable Git repository with committed synthetic evidence at `communication/missions/SB-TEST-STAGE5-1.0/closure.md`. Construct a schema-valid envelope pinned to that repository's commit. Store the envelope in a separate OS-temp directory outside the repository. Make `communication/missions/linked` a Windows junction to that external directory.

`isApprovedClosureEnvelopeLocation` returns `true` for the linked envelope. `realpathSync` confirms its physical target is outside the repository. `planReconciliation` returns one `ELIGIBLE_UNPROCESSED` item, zero rejected inputs and `next_safe_action: run harvest for this closure envelope`.

A second isolated fixture exercised the actual CLI:

| CLI input | Exit | Work states | Rejected inputs |
| --- | --- | --- | --- |
| Direct external `--envelope` | 0 | None | 1 |
| Direct external `--envelopes-dir` containing valid envelope | 0 | None | 1 |
| `--envelope` through approved-prefix junction | 0 | `ELIGIBLE_UNPROCESSED` | 0 |
| `--envelopes-dir` set to approved-prefix junction | 0 | `ELIGIBLE_UNPROCESSED` | 0 |

**Defect and impact:** The location predicate validates only a lexical relative path. Reading/discovery subsequently follows filesystem indirection. An envelope physically outside the approved repository-native root therefore creates reconciliation work, even though the same file is rejected when supplied by its real path. This does not require forged or unresolvable evidence references.

**Narrow correction scope:** Enforce approved physical envelope containment before content reads and during explicit directory discovery, independently of schema validation and evidence allowlisting. Cover both CLI entry paths with junction/symlink regression tests. Preserve the approved root and genuine closure envelope.

### S5-F-04 — Distinct envelope files for one revision produce duplicate work intent

**Location:** `organizational-learning/scripts/reconcile.mjs`, `planReconciliation`, line 474, and CLI path-string deduplication at lines 541–543.

**Reproduction:** In the disposable Git fixture, write identical valid envelopes to `communication/missions/a.json` and `communication/missions/b.json`. Supply both paths to `planReconciliation` with empty isolated receipt and lock roots. Both resolve the same mission, closure revision and pinned evidence.

```text
work_items.length: 2
reconciliation_state: ELIGIBLE_UNPROCESSED, ELIGIBLE_UNPROCESSED
source_fingerprint, both items:
a4fc53cff214b7046cddf550dbfdc0d94fc36fd42b42c56a5628229c0914f49a
next_safe_action, both items: run harvest for this closure envelope
rejected_inputs.length: 0
repeat invocation: identical result, including both duplicate intents
```

**Defect and impact:** Sorting makes the output deterministic but does not deduplicate processing identity. The CLI's `Set` only removes identical path strings, so two paths remain two inputs to this same planner. This violates the requested no-duplicate-work-intent boundary. No duplicate candidate publication or actual double execution was demonstrated: the wrapper is a planner and its separate exclusive-create lock proof still succeeds.

**Narrow correction scope:** Deduplicate equivalent envelope inputs by processing identity before producing work intent, and fail closed on conflicting envelopes claiming the same mission/revision. Add equivalent-file/replay coverage without changing genuine receipt or candidate evidence.

## 3. Stage 2 candidate regression

All four current candidates were independently parsed and validated with `CandidateLearningItemSchema`: **4/4 valid**. All retain `maturity: CANDIDATE`, `authority_effect: NONE` and `generated_by.actor_class: synthesis`. All **14/14** claim evidence references resolve `VALID` against the claimed pinned commit, path and blob. All 14 observer actor classes are `synthesis`.

The candidate directory is byte-unchanged in Git since correction commit `054f474`. Reports [06](06-stage2b-independent-candidate-verification.md) and [07](07-stage2b-f01-f02-independent-reverification.md) remain unchanged since Stage 2 publication `154c58e`.

- S2B-F-01 remains resolved: Candidate 2 limits the exact Fast Test counts to the implementation head; it does not ascribe those counts to the later communication head. Full Assurance counts remain separately attributed.
- S2B-F-02 remains resolved: the observer is synthesis, distinct from the author/decision authority of the underlying Mission Control files.
- Candidate 3 still reports the five-versus-four follow-up discrepancy, unexplained omission of the branch-protection item, `MEDIUM` confidence and a `LIMITS` reference. No resolution is inferred.
- Evidence remains limited to the two underlying CI-architecture Mission Control acceptance/closure records and their archive manifest at `b60741cce544adb713f7c384bbed09a05e23247e`. No candidate cites itself, a generated context pack or live communication. Repeated references to these sources are not independent corroboration.
- Evidence reach remains the historical CI/tooling mission; it does not establish production, deployment or broader product authority.

## 4. Stage 3 promotion regression

All four promotion records independently validate with `PromotionReviewSchema`. Each remains `VALIDATED`, `MISSION_SCOPED`, approved by `mission-control`, with the actual decision reference pointing to [Mission Control record 19](../mission-control/19-stage2-acceptance-and-stage3a-human-promotion-proof-authorization.md). That record explicitly authorizes the four exact candidate revisions.

| Candidate | Recomputed candidate revision hash; matches promotion |
| --- | --- |
| 1 | `eb13d7f7ebf15b0d6e1759ba5a7498a82a1aae365d24d627c342b741fa33055e` |
| 2 | `3fcc61bac434b6ef651b378290b3453fc1b14e7d3f6d3e36df6b05542d0d14a4` |
| 3 | `b5ee757cb6bddbbfd9237b0e0d2fcf412e341e59394106399d9baf15be6f8e88` |
| 4 | `ede1835962e1c7d8939bd92f760b0957a3aefd755236f03feb02ede04055ff59` |

The promotion directory is unchanged since `f18f5fa`. Its 14 evidence entries exactly equal the corresponding candidates' flattened evidence arrays and independently resolve `VALID`. An in-memory material candidate-summary mutation made the stored promotion ineligible. All current supersession arrays remain empty; no new edge, Founder approval, `INSTITUTIONALISED` maturity or `ORGANIZATION_WIDE` scope was introduced. Candidate 3's approved scope explicitly validates the observation of inconsistency, without resolving it.

## 5. Context-pack assurance

Independent current-artifact probes and the executed 17-test context-pack suite support the bounded Stage 3B behavior:

| Case | Observed result |
| --- | --- |
| Current four promotions, matching CI profile | All four eligible |
| Raw candidate passed as promotion | Rejected at strict promotion schema gate |
| Tampered stored revision hash | Excluded as stale |
| Material candidate mutation | Excluded as stale |
| Nonmatching system scope | Excluded |
| Wrong evidence blob hash | Excluded for provenance failure |
| Nonempty `superseded_by` | Excluded |
| Same inputs, reversed promotion order | Byte-identical built pack |
| Candidate 3 rendering | `LIMITS`, `MEDIUM` and unresolved inconsistency remain visible |
| Synthetic secret-shaped canary in temporary promotion scope | CLI function returned exit 1, `QUARANTINED`, no output file |
| Scanner throws / returns unknown state | `SCANNER_FAILED` / `SCANNER_UNKNOWN`, not clean |

Filtering is structural and ordering is by stable promotion ID; no semantic ranking exists. Output says `context, not authority`. Freshness is limited to stored `promoted_at` and evidence dates, with no current-verification claim. Mission class is explicitly context-only because the evidence scope contract has no matching field. Current candidates, promotions and the generated in-memory pack screened `CLEAN` under the existing heuristic.

The proof covers explicit stored supersession and limitation fields. It does not certify an automatic source-withdrawal monitor, a populated supersession graph or automatic reconciliation of promoted records; these capabilities are not silently inferred from this result.

## 6. Reconciliation states and recovery

Independent isolated receipt probes and the executed reconciliation tests exercised all six states:

| Input / durable state | Result |
| --- | --- |
| Valid envelope, genuinely absent receipt | `ELIGIBLE_UNPROCESSED` |
| Matching `SCREENED` receipt | `ALREADY_PROCESSED`, deterministic no-op |
| Different closure revision from retained receipt | `NEW_CLOSURE_REVISION`, distinct fingerprint |
| Explicit reopen or supersession | `SUPERSEDED_OR_REOPENED`, human reconciliation required |
| Malformed ordinary receipt JSON / invalid pinned source | `INVALID_OR_UNSAFE` |
| Matching `VALIDATION_FAILED` receipt | `FAILED_RETRYABLE`, not no-material-learning |
| Matching intermediate `HARVESTED` receipt | `ELIGIBLE_UNPROCESSED`, explicit resume from `HARVESTED` |

The real Stage 2A no-op regression preserves fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`; the actual receipt remains unchanged since `90f0dba`. Reopen/supersede output explicitly requires human reconciliation before prior learning is treated as current. It does not itself mutate promotions or implement automated invalidation.

These successful state tests do not override S5-F-01/F-02/F-03/F-04. Missing-vs-unreadable storage, physical location and identity deduplication remain unsafe at the discovery/planning boundary.

## 7. Remaining envelope and lock probes

**Envelope paths:** Direct absolute external paths, `..` traversal escaping the root, mixed-separator escapes, prefix look-alikes, other-drive Windows paths, UNC paths and ambiguous-case aliases were rejected. Normal Windows and slash-separated representations of a genuinely approved file were accepted. A nonexistent path under the approved prefix passes the structural predicate but is rejected on read with no work item. Schema-valid content outside the root was rejected through both actual CLI options. Physical indirection is the independently reproduced exception in S5-F-03.

The envelope predicate imports no evidence allowlist. Evidence is separately constrained to explicit references, allowlisted paths and resolvable regular Git blobs. The wider evidence allowance for archived communication therefore does not itself approve an envelope location.

**Locks:** Six independently spawned concurrent Node processes contended for one mission/revision in an isolated lock root: **one acquired ownership, five returned `already-active`, and all observed the same owner**. A non-owner release returned false and the owner remained active. An owner release succeeded in the earlier sequential probe. Malformed lock bytes retained busy state with an unknown owner. Replacing the hashed lock filename with a junction to an outside directory produced busy/unknown-owner and refused non-owner release; outside fixture content was unchanged.

Lock filenames are flat SHA-256 names derived from mission/revision; traversal-like mission input did not escape the configured root. Exclusive-create `wx` prevents a second creator from following an existing lock entry. The configured root is an explicit caller-selected trust anchor; this is not a claim of resistance to a privileged actor replacing that anchor or racing filesystem components. Stale locks have no lease/expiry/recovery service and fail safe by retaining ownership/busy state. No production-grade distributed locking is claimed. These bounded lock results do not deduplicate planner output under S5-F-04.

## 8. Shallow-clone resilience

Inspected `tests/helpers/ephemeral-git-repo.ts`, context-pack fixture construction and the reconciliation real-receipt test. Positive historical-object resolution tests create isolated repositories and remap references to actual commits/blobs created there. Reconciliation preserves the genuine fingerprint by copying Git blob bytes from the current HEAD tree rather than CRLF working-tree bytes. Negative tests that use the ambient root do not require historical resolution to succeed.

Current Fast Test CI explicitly checked out with `fetch-depth: 1` / `--depth=1`, then passed all 322 tests. This supplies actual shallow-checkout execution evidence in addition to local tests and code inspection. Production provenance code was not weakened: missing historical objects remain dangling/invalid rather than accepted. A separate local shallow clone was not necessary or claimed.

## 9. Self-evidence and authority boundaries

Current candidate and promotion factual references resolve to the original three screened historical source objects. Promotion `decision_ref` separately establishes the human decision and is not substituted for factual claim evidence. Candidate 3 remains limited despite its approval. Context packs carry those source references; reconciliation plans carry source identity and an explicit `reconciliation plan, not execution authority` statement. Neither generated output is used as primary evidence for its own claims in the reviewed proof.

The evidence allowlist excludes `organizational-learning/**` outputs and `communication/live/**`. Git-object readers reject nonregular objects and unsafe source paths, read pinned objects rather than dirty source files, and do not recursively follow arbitrary Markdown links. Path eligibility or a valid blob does not prove a claim's meaning or confer authority. Durable builder/verifier reports remain attributed observations; their existence alone is not independent corroboration.

The accumulated PR contains no automatic candidate promotion, organization-wide institutionalization, Founder-decision reinterpretation, governance/Product Truth writer, Product Mission activation, PR creation/merge, deployment, provider/model/network credential integration, scheduler, cron, queue or background publisher. Explicit local CLI output writes are part of the bounded proof, not autonomous publication. No production/customer/merchant/employee data was accessed by these verifier probes.

## 10. Dependency and repository drift

The accumulated base-to-head inventory contains 44 changed files: mission/live communication, the approved Stage 2 closure envelope, four candidates, four promotion records and related proof artifacts, reconciliation/context-pack implementation and tests, and four added Fast Test include entries. Existing test includes were retained.

`package.json`, `package-lock.json`, `.github/**`, application code, deployment/provider configuration, governance and Product Truth have no changes in this PR diff. No dependency was added. Candidates, promotions and the genuine receipt were independently compared against their respective correction/creation checkpoints and have no later mutation. Prior Codex FAIL/correction/PASS history was preserved.

## 11. Independent local execution

| Check | Verifier result |
| --- | --- |
| Full Fast Tests | Exit 0; **28 files / 322 tests passed**, 91.19 seconds |
| Candidate validation / Git provenance | **4/4 valid; 14/14 VALID** |
| Promotion validation / revision binding / provenance | **4/4 valid; 4/4 hashes match; 14/14 VALID** |
| Typecheck, `node node_modules/typescript/bin/tsc --noEmit` | Exit 0 |
| Build, `npm run build` | Exit 0; local generated build outputs only |
| Prettier, `--check organizational-learning` | Exit 0; all matched files formatted |
| ESLint, actual repository-wide invocation | Exit 1; **5,429 CRLF formatting errors, seven warnings**, explained below |
| OLE portion of the actual ESLint results | Zero errors |
| Additional adversarial probes | Four findings above; bounded lock/context/path controls as recorded |
| Full Assurance | Existing current-head GitHub run independently inspected; not rerun locally |

**Local lint distinction:** The Windows checkout produced 5,429 `prettier/prettier` errors, all exactly `Delete CR`, across 30 files. An ESLint API diagnostic independently aggregated every error and compared every affected file with its committed HEAD blob after CRLF-to-LF normalization: all matched. No file was normalized or fixed. Current Linux CI lint succeeds with seven warnings. Therefore the local command is truthfully recorded as failed, with a checkout line-ending explanation, not silently relabelled green and not an additional committed implementation defect. An initial `npm` invocation was blocked by PowerShell script policy; lint was then invoked directly through its installed Node entry point.

No external integration test was launched by the verifier. The independently executed local suite covers all OLE Fast Tests, including screening, schema, path, provenance, context-pack and reconciliation tests. Full Assurance evidence comes from the actual completed CI execution below, not the builder's reported counts.

Temporary fixtures used OS-temp directories, synthetic Git repositories or isolated copies of real JSON. Genuine receipts, closure evidence, candidates and promotions were read-only. Created junctions were unlinked before verified temporary-root cleanup. No implementation source, test or dependency file was edited.

## 12. Current GitHub CI evidence

All three workflow records report `headSha: d1f5a429d36ddb62f215b5f7412a9ff06d5deab1`, status completed and conclusion success. Application/Full Assurance checkout logs identify PR merge-test SHA `8dcad5dd73e52d31a63b652e91c256f385cfe776`; `refs/pull/589/merge` matched it. The PR head and GitHub-generated test merge are distinct identities.

| Workflow | Actual run | Current result / execution evidence |
| --- | --- | --- |
| Application Build Assurance #194 | [35240642556](https://github.com/SmartBusinessv1/smart-business/actions/runs/35240642556) | Lint, typecheck, build and Fast Tests SUCCESS; **28 files / 322 tests**, 10.86 seconds; lint seven warnings, zero errors |
| Markdown Quality Gate #1798 | [35240642518](https://github.com/SmartBusinessv1/smart-business/actions/runs/35240642518) | SUCCESS |
| Full Assurance #67 | [35240642515](https://github.com/SmartBusinessv1/smart-business/actions/runs/35240642515) | SUCCESS; **20 files / 108 tests**, 238.98 seconds; completed 2026-09-17T15:34:33Z |

All six PR checks were successful and PR #589 remained OPEN/unmerged. Green CI does not cover the four independently reproduced adversarial cases and does not change this report's disposition. These are reviewed-head results; GitHub remains the live source for subsequent commits.

## 13. Limitations, handoff and publication boundary

The scanner is the accepted bounded heuristic, not a comprehensive secret/privacy scanner. The Windows junction exploit is proven; ordinary directory symlinks were unavailable without additional privilege. `ENOTDIR` proves the unchecked directory-error catch; literal `EACCES` was not exercised. Local locks are not production leases. Context freshness, supersession and reopening remain limited to the explicit stored fields and human-reconciliation signaling described above. No external system configuration or runtime state was independently changed or certified.

At the initial verification handoff, only this report and the minimum verifier portion of `communication/live/report.md` were prepared; report 08 had not been committed or pushed because the earlier publication grants named reports 06 or 07. Mission Control record 24 subsequently authorized publication of these two files only. Publication preserves the reviewed head, FAIL disposition, all four findings and positive conclusions. No additional implementation verification or corrective work was performed during publication.

Both communication files passed the repository Markdown Quality Gate. Internal report links resolve, report-content heuristic screening is `CLEAN`, and `git diff --check` is clean. The live report's prefix and suffix outside the Stage 5 verifier section were preserved byte-for-byte. At the initial verification handoff, status contained only these two authorized files and nothing was staged. That verification-time PR check reported the reviewed head, OPEN and unmerged. These historical CI and repository observations are not publication-head results.

Mission Control must decide corrective authorization for S5-F-01 through S5-F-04. The suggested correction scopes above are review findings, not permission for this verifier or another actor to implement them.

**Stage 6 is not ready for acceptance review and remains NOT AUTHORIZED. PR #589 is not merged. `SB-P-1.12` remains NOT ACTIVATED.**

`STAGE 5 INDEPENDENT FAILURE-PATH ASSURANCE REPORTED — MISSION CONTROL DECISION REQUIRED`
