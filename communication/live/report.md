# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 5 Failure-Path Correction Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Current stage:** `5 — Independent verification / failure-path assurance correction`

**Current actor:** Claude Code — authorized narrow correction builder

**Status:** `STAGE 5 FAIL ACCEPTED — S5-F-01 THROUGH S5-F-04 NARROW CORRECTION AUTHORIZED`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**Pull request:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Stage 4A correction result

Claude Code corrected both Mission Control findings:

- `S4A-F-01` — explicit closure-envelope location approval now runs before candidate envelope content is read; schema validity and evidence allowlisting no longer substitute for location approval.
- `S4A-F-02` — unreadable / malformed / schema-invalid durable receipt files for the mission being reconciled now block receipt-dependent work and return fail-closed `INVALID_OR_UNSAFE` reconciliation state with safe diagnostics.

Technical correction checkpoint:

`0a3f9f812c84f96c414a2f01aa03987128711046`

Exact-head CI on that checkpoint:

- Team LIPS Application Build Assurance #190 — SUCCESS;
- Team LIPS Markdown Quality Gate #1794 — SUCCESS;
- Team LIPS Full Assurance #63 — SUCCESS.

Fast Tests at the correction checkpoint: `322/322` passing.

Reporting-only follow-up:

`f19c809f4340cc8cc886f934d15efcd81d142e8d`

No candidate, promotion, receipt, closure evidence, dependency, lockfile or workflow file changed in the correction.

## Mission Control Stage 4 decision

Mission Control disposition:

`STAGE 4 — ACCEPTED`

Stage 4 acceptance is bounded to the deterministic reconciliation layer proven in Stage 4A.

A separate Stage 4B is not required for current acceptance. Mature automatic background closure detection/reconciliation, automated model extraction, provider integration, schedulers and trusted publisher/PR creation remain deferred `Build Later` capabilities requiring separate future authority.

Durable decision / Stage 5 authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/23-stage4-acceptance-and-stage5-independent-assurance-authorization.md`

## Stage 5 independent verifier result

**Verifier:** Codex.

**Reviewed head:** `d1f5a429d36ddb62f215b5f7412a9ff06d5deab1`.

**Disposition:** `FAIL`.

Four independent reconciliation findings require Mission Control corrective handling:

- `S5-F-01`: receipt enumeration follows an outside-root Windows junction and accepts external receipt state.
- `S5-F-02`: receipt-directory enumeration failure and receipt-shaped non-file entries are treated as no receipts.
- `S5-F-03`: an approved-prefix envelope junction admits an external envelope through both CLI input paths.
- `S5-F-04`: distinct envelope files for one processing identity produce duplicate harvest intents.

Stage 2 candidates and Stage 3 promotions remain valid with 14/14 factual provenance references resolved in each set, matching revision hashes and Candidate 3 limitations preserved. Context exclusions/screening and bounded local lock ownership were independently verified. Fast Tests passed 322/322; typecheck, build and OLE Prettier passed. Repository-wide local lint failed solely on verified checkout CRLF differences; current Linux CI passed all six checks, including Full Assurance 108/108.

Durable verifier report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/08-stage5-independent-failure-path-assurance.md`

Verifier publication commit:

`9a15466624dfb93b3878c74cd7f569890032e4c6`

The publication commit contains only the durable verifier report and minimum live verifier handoff. Application Build Assurance #197 and Markdown Quality Gate #1801 are successful at the publication head; publication-only Full Assurance #70 was still running when Mission Control opened the corrective gate.

## Mission Control correction decision

Mission Control accepts all four Stage 5 findings as actionable.

Disposition:

`STAGE 5 FAIL ACCEPTED — S5-F-01 THROUGH S5-F-04 NARROW CORRECTION AUTHORIZED`

Durable correction authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/25-stage5-f01-f04-correction-authorization.md`

Correction is limited to:

- preserving the Stage 1 physical-containment trust boundary during receipt discovery/read;
- distinguishing genuine receipt-directory absence from unsafe enumeration failure / unexpected receipt-shaped entries;
- enforcing physical as well as lexical containment for approved envelope files and directory discovery;
- deduplicating equivalent envelope inputs by processing identity and failing closed on conflicting envelopes claiming the same mission + closure revision.

Stage 2, Stage 3, candidate/promotion semantics, context-pack authority boundaries and all broader automation boundaries remain unchanged.

## Boundaries

`STAGE 5 — CORRECTION IN PROGRESS`

`STAGE 6 — NOT AUTHORIZED`

No automated extraction/provider/scheduler/publisher.
No automatic promotion.
No `INSTITUTIONALISED` / `ORGANIZATION_WIDE` authority.
No merge.
No governance/Product Truth mutation.
No production/customer mutation.

`PR #589 — NOT READY TO MERGE`

`SB-P-1.12 — NOT ACTIVATED`

## Required stop

`STAGE 5 F-01/F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

---

## Builder Stage 5 F-01/F-04 correction report

**Status:** `STAGE 5 F-01/F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/07-stage5-f01-f04-correction.md`

**S5-F-01:** reconciliation receipt discovery/read now reuses the exact, unmodified Stage 1 `assertPhysicallyContained` primitive (exported from `receipt-store.ts`, not reimplemented), checked on the mission directory and on every candidate receipt file. An outside-root receipt junction has zero influence on classification in every tested outside-content state (empty, `SCREENED`, `VALIDATION_FAILED`); a synthetic canary in outside content never echoes.

**S5-F-02:** `listReceiptsForMission` now distinguishes genuine absence, physical-indirection failure, `ENOTDIR`/enumeration failure, and a receipt-shaped non-file entry (e.g. a directory named `blocked.json`) -- only genuine absence still means no receipts; every other case fails closed to `INVALID_OR_UNSAFE` before any work-producing branch.

**S5-F-03:** approved envelope-location checking now requires physical containment in addition to the existing lexical check (two independent layers, confirmed independent by a deliberate break/restore proof), and directory discovery (`collectJsonFiles`) refuses to recursively traverse indirection escaping its own starting point. Both `--envelope` and `--envelopes-dir` junction bypasses are closed; nested-junction recursive discovery cannot escape the approved root.

**S5-F-04:** `planReconciliation` groups valid envelopes by `mission_id::closure_revision` and deduplicates/conflict-detects before classification, comparing full validated envelope content via `computeRevisionHash` (Stage 2/3's existing canonical-JSON hash, reused unmodified) rather than classification output alone -- equivalent envelopes produce exactly one deterministic work item; materially conflicting envelopes (including a difference in a field classification itself does not consume) produce zero work items and one safe conflict entry.

**Regression confirmation:** the real Stage 2A `ALREADY_PROCESSED` proof (fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`), `NEW_CLOSURE_REVISION`, reopen/supersede, `FAILED_RETRYABLE`, intermediate recovery, and atomic lock ownership all remain unchanged and passing. No candidate, promotion, receipt, or context-pack file was touched.

**Regression genuineness:** three deliberate, temporary regressions (disabling each of the S5-F-01/F-03/F-04 checks in turn) were independently proven to break exactly the expected tests with no collateral damage, then restored and reconfirmed clean.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **336/336 passing**, 28 files (+14 new, 0 regressions); `npm run build` succeeds; Prettier clean; `package-lock.json` unchanged.

**Applicable CI:** all three applicable workflows `SUCCESS` on PR #589 head `2bb8ece7434df9c5f4fd4d5c93122939fff8152b` (this correction's commit): Team LIPS Application Build Assurance #201 (Lint, Typecheck, Build, Fast Tests), Team LIPS Markdown Quality Gate #1805, and a real (not suppressed) Team LIPS Full Assurance #74 run.

**Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.
