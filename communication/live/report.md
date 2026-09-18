# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 5 Corrective Re-verification Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Current stage:** `5 — Independent verification / failure-path assurance corrective re-verification`

**Current actor:** Codex — independent verifier

**Status:** `STAGE 5 CORRECTION RE-REVIEW PASS — CODEX INDEPENDENT CORRECTIVE RE-VERIFICATION AUTHORIZED`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**Pull request:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Stage 4 status

`STAGE 4 — ACCEPTED`

Acceptance remains bounded to the deterministic reconciliation layer. Mature automatic background closure detection/reconciliation, automated model extraction, provider integration, schedulers and trusted publisher/PR creation remain deferred Build Later capabilities.

## Stage 5 original verifier result

Codex independently reviewed head:

`d1f5a429d36ddb62f215b5f7412a9ff06d5deab1`

Disposition:

`FAIL`

Findings:

- `S5-F-01` — receipt physical-indirection bypass;
- `S5-F-02` — receipt-directory failures / unexpected receipt-shaped entries treated as no receipts;
- `S5-F-03` — envelope physical-indirection bypass;
- `S5-F-04` — duplicate envelope processing intent.

Durable verifier report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/08-stage5-independent-failure-path-assurance.md`

Verifier publication commit:

`9a15466624dfb93b3878c74cd7f569890032e4c6`

## Stage 5 narrow correction

Mission Control authorized correction of S5-F-01 through S5-F-04 only under:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/25-stage5-f01-f04-correction-authorization.md`

Claude Code correction checkpoint:

`2bb8ece7434df9c5f4fd4d5c93122939fff8152b`

Reporting-only follow-up:

`93404affcd667ac28f816387ac054d361d77ec69`

### Correction summary

- S5-F-01: reconciliation receipt discovery/read now reuses the accepted Stage 1 `assertPhysicallyContained` primitive on mission receipt directories and candidate receipt files before content can influence classification.
- S5-F-02: only genuine receipt-directory absence may mean no receipts; physical-containment failure, enumeration failure, receipt-shaped non-file entries, malformed receipts and schema-invalid receipts fail closed.
- S5-F-03: approved envelope location now requires both lexical approval and physical containment under `communication/missions/`; recursive discovery separately refuses traversal through physical indirection outside its anchor.
- S5-F-04: validated envelopes are grouped by `mission_id + closure_revision` before classification; equivalent envelopes emit one deterministic work item, while materially conflicting envelopes emit zero work intent and a safe conflict result.

No candidate, promotion, genuine receipt, closure evidence, context-pack output, dependency, lockfile or workflow file changed.

### Correction verification reported by builder

- Fast Tests: `336/336` passing;
- typecheck: clean;
- organizational-learning ESLint: clean;
- build: success;
- Prettier: clean;
- genuine Stage 2A fingerprint preserved:
  `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`;
- correction-head Application Build Assurance #201 — SUCCESS;
- correction-head Markdown Quality Gate #1805 — SUCCESS;
- correction-head Full Assurance #74 — SUCCESS.

Durable builder report:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/07-stage5-f01-f04-correction.md`

## Mission Control correction re-review

Mission Control independently reviewed the correction implementation and found all four narrow corrections substantively aligned with the authorized boundary.

Disposition:

`STAGE 5 CORRECTION RE-REVIEW PASS — CODEX INDEPENDENT CORRECTIVE RE-VERIFICATION AUTHORIZED`

Durable decision:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/26-stage5-correction-rereview-and-codex-reauthorization.md`

This is not Stage 5 acceptance.

Codex must independently attempt to reproduce the four original failure paths against the corrected implementation and regression-check the previously passing Stage 2/3/context-pack/authority boundaries.

Required verifier report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/09-stage5-independent-corrective-reverification.md`

## Codex corrective re-verification result

**Verifier:** Codex.

**Reviewed head:** `0c550155348611919baa1698530f783146eb364e`.

**Disposition:** `FAIL`.

**New finding S5-F-05:** a present dangling filesystem indirection at the derived mission receipt-directory path makes `existsSync` return false. Receipt discovery returns an empty, issue-free store before containment/enumeration checks, and reconciliation incorrectly returns `ELIGIBLE_UNPROCESSED`. Collected metadata confirmed the directory entry still existed. Expected behavior is fail-closed ambiguity handling, with genuine absence preserved as a separate case.

Original S5-F-01 live-target cases, S5-F-03 envelope-location cases and S5-F-04 duplicate/conflict cases passed re-verification. S5-F-02's original enumeration/non-file cases now block work, but its complete absence-versus-ambiguity requirement remains incomplete due to S5-F-05. Original findings and correction history are preserved.

The genuine Stage 2A no-op/fingerprint, reconciliation recovery/order/ownership, and Stage 2/3/context-pack regressions passed. Independent Fast Tests passed 336/336; typecheck, build and OLE Prettier passed. Repository-wide local ESLint failed only on verified checkout CRLF differences; current-head CI checks all passed, including Full Assurance 108/108. No further filesystem-indirection experiments were performed after the user's restriction.

Durable report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/09-stage5-independent-corrective-reverification.md`

Stage 5 is not ready for Mission Control completion review. No implementation was modified. Mission Control record 27 explicitly authorizes publication of the already-completed report and minimum verifier handoff only. The reviewed head, FAIL finding and positive results remain unchanged; the CI results above describe that reviewed state. Mission Control must decide corrective handling of S5-F-05.

## Boundaries

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

`STAGE 5 INDEPENDENT CORRECTIVE RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`

---

## Builder Stage 5 F-05 correction report

**Status:** `STAGE 5 F-05 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/08-stage5-f05-correction.md`

**Root cause:** `listReceiptsForMission`'s absence check (`!existsSync(missionDir)`) followed symlinks/junctions and could not distinguish "no filesystem entry at all" from "an entry exists here, but it is a dangling symlink/junction whose target is missing" -- exactly the ambiguity Codex's collected metadata (`existsSync: false`, `lstatSync(...).isSymbolicLink(): true`) proved.

**S5-F-05 correction:** absence detection now uses non-following `lstatSync` metadata via two small, exported, directly-testable pure functions (`isGenuineAbsenceError`, `classifyMissionDirectoryPresence`) instead of `existsSync` alone. A dangling/unresolved entry is now classified present-but-unsafe and fails closed through the existing, unmodified `INVALID_OR_UNSAFE` path -- never treated as absence. No new reconciliation state was introduced; `assertPhysicallyContained` was not modified.

**Genuine-absence result:** unaffected -- a truly never-created receipts directory still classifies `ELIGIBLE_UNPROCESSED`.

**Dangling-entry result:** a real planted-then-target-removed Windows junction (Codex's exact reproduction shape) now classifies `INVALID_OR_UNSAFE`, `retry_eligible: true`, never `ELIGIBLE_UNPROCESSED`.

**Prior S5-F-01/F-02 regression:** `ENOTDIR`, receipt-shaped non-file entries, malformed/schema-invalid receipts, and the S5-F-01 outside-root live-junction case all remain unchanged and fail closed.

**S5-F-03/F-04 regression:** neither `envelope-location.ts` nor the duplicate/conflict logic was touched this round; their full, unmodified test suites passed unchanged.

**Stage 2A regression:** unchanged -- `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.

**Regression genuineness:** the fix was temporarily reverted in place and the full `reconcile.test.ts` suite re-run -- exactly the 2 expected tests failed, with zero collateral damage to the other 47.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **346/346 passing**, 28 files (+10 new, 0 regressions); `npm run build` succeeds; Prettier clean; `package-lock.json` unchanged.

**Applicable CI:** all three applicable workflows `SUCCESS` on PR #589 head `2b6cf519fbddc7396c0a0cc02c5e562500705701` (this correction's commit): Team LIPS Application Build Assurance #211 (Lint, Typecheck, Build, Fast Tests), Team LIPS Markdown Quality Gate #1815, and a real (not suppressed) Team LIPS Full Assurance #84 run.

**Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation, no candidate/promotion/receipt/closure-evidence/context-pack file touched. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.


---

## Codex final Stage 5 re-verification result

**Disposition:** `FAIL`

**Reviewed head:** `018be1b3830f62f7d3d4c30470a8cc9384a1161f`

**Technical correction:** `2b6cf519fbddc7396c0a0cc02c5e562500705701`; subsequent commits contain communication changes only.

The exact S5-F-05 dangling final-entry case is corrected. **New finding S5-F-06:** on Windows, an ordinary file at the configured receipt-directory parent makes `lstatSync` of the derived mission path throw `ENOENT`. Current presence logic calls that `ABSENT`; receipt discovery returns no issues and reconciliation produces `ELIGIBLE_UNPROCESSED`, one eligible work item and zero rejections. An independent ordinary-file temporary fixture reproduced this without new junction/symlink construction. Invalid ancestry must fail closed; genuine first-processing absence must remain distinct.

S5-F-01, S5-F-03 and S5-F-04 original cases remain corrected. Original S5-F-02 enumeration/non-file/invalid-content cases pass, but its broader genuine-absence boundary remains incomplete due to S5-F-06. Historical reports 08/09 and all correction history are preserved.

The genuine Stage 2A result remains `ALREADY_PROCESSED` with fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`. Recovery, ordering and bounded ownership regressions passed. Candidates are 4/4 valid, provenance 14/14 valid; promotion revision bindings and context exclusions passed; Candidate 3 retains MEDIUM/LIMITS. Authority and dependency/workflow boundaries remain unchanged.

Independent Fast Tests passed 346/346 across 28 files; typecheck, OLE Prettier and build passed. Local repository-wide lint failed on 5,429 verified CRLF-only errors with seven warnings, without normalization; OLE has zero errors. All six current CI checks passed at the reviewed head, including Fast Tests 346/346 and Full Assurance 108/108. No external integration suite was run locally.

Durable report: `communication/missions/SB-ORG-LEARNING-1.1/codex/10-stage5-final-independent-reverification.md`.

Stage 5 is **not ready for Mission Control completion review**. No implementation was changed. Mission Control record 30 authorizes publication of these two prepared verifier communication files only. The reviewed head, FAIL result, finding and positive evidence remain unchanged; no new verification pass was performed. Mission Control must decide corrective handling of S5-F-06. Stage 6 remains **NOT AUTHORIZED**; PR #589 remains **OPEN — NOT MERGED**; `SB-P-1.12` remains **NOT ACTIVATED**.

`STAGE 5 S5-F-06 VERIFICATION PUBLISHED — MISSION CONTROL CORRECTION AUTHORIZATION REQUIRED`

---

## Builder Stage 5 F-06 correction report

**Status:** `STAGE 5 F-06 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/09-stage5-f06-correction.md`

**Root cause:** `classifyMissionDirectoryPresence` treated a bare `lstatSync(missionDir)` `ENOENT` as unconditional proof of genuine absence, without validating that the configured receipt-store ancestry above it is itself a valid, traversable directory hierarchy -- Codex's exact reproduction: an ordinary file occupying `receiptsDir` makes `lstatSync(receiptsDir/<key>)` throw `ENOENT` on Windows, indistinguishable by error code alone from genuine absence.

**S5-F-06 correction:** `classifyMissionDirectoryPresence` now walks upward from the mission directory path (a new small helper, `findDeepestExistingAncestorByLstat`) to find the deepest ancestor that actually exists, then validates that ancestor is a real, resolvable directory (via following `statSync`) before trusting anything below it as absent. A general fix, not a special case for one filename -- it also correctly handles a non-directory or dangling ancestor located *above* `receiptsDir`. A new `INVALID_ANCESTRY` status maps to the existing, unmodified `INVALID_OR_UNSAFE` fail-closed path.

**Ordinary-file receipt-root result:** now `INVALID_ANCESTRY` / `INVALID_OR_UNSAFE`, never `ABSENT` / `ELIGIBLE_UNPROCESSED` -- Codex's exact reproduction is resolved.

**Genuine-absence result:** unaffected -- a truly absent receipts directory (or mission subdirectory) beneath valid ancestry still classifies `ELIGIBLE_UNPROCESSED`.

**Invalid-ancestry result:** both a non-directory ancestor and a dangling/unresolved ancestor above `receiptsDir` fail closed via the same general algorithm.

**S5-F-05/F-01/F-02 regression:** all unchanged and fail closed -- the dangling-final-entry, outside-root live-junction, `ENOTDIR`, receipt-shaped non-file, malformed-JSON and schema-invalid cases all re-verified via dedicated regression tests.

**S5-F-03/F-04 regression:** neither file was touched this round; both full, unmodified test suites passed unchanged.

**Stage 2A regression:** unchanged -- `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.

**Regression genuineness:** the fix was temporarily reverted in place and the full `reconcile.test.ts` suite re-run -- exactly the 8 expected tests failed, with zero collateral damage to the other 56.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **361/361 passing**, 28 files (+15 new, 0 regressions); `npm run build` succeeds; Prettier clean; `package-lock.json` unchanged.

**Methodology note (reported transparently):** the first push of this correction passed every local Windows check but genuinely failed real Linux CI (3 Fast Test failures) -- the walk-up ancestry check's retry condition recognized only `ENOENT`, but an invalid ancestor on Linux correctly surfaces `ENOTDIR` instead (a real platform difference, not anticipated by Windows-only empirical testing during the original fix). This was not a safety regression: the fail-closed result was unaffected, only a more specific diagnostic label and one exact-substring test assertion. Corrected by widening the walk's retry condition to accept both codes, verified not to change any Windows result, and re-pushed. Full detail in the durable report, Section 10.

**Applicable CI:** first push (`edd4da9`) genuinely failed real Linux CI (`Application Build Assurance #220`, 3 Fast Test failures -- see Section 10 above). Corrected, re-pushed (`289e22a`); all three applicable workflows `SUCCESS` on the corrected head, independently confirmed via direct API query: Team LIPS Application Build Assurance #221 (including `Fast Tests` specifically), Team LIPS Markdown Quality Gate #1825, and a real (not suppressed) Team LIPS Full Assurance #94 run.

**Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation, no candidate/promotion/receipt/closure-evidence/context-pack file touched. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.


---

## Codex final S5-F-06 independent re-verification result

**Disposition:** `FAIL`

**Reviewed head:** `32591ee7a65852cbffe5712260c40ef2356234c9`

**Technical correction:** `289e22a6863b2f70abc5508e8347da1893776d6e`; later commits are communication/reporting only.

Original S5-F-06 ordinary-file and dangling-ancestor cases are corrected. Windows ENOENT handling passes independent direct checks; corrected Ubuntu CI passes the same ancestry fixtures with the ENOTDIR walk correction. `isGenuineAbsenceError` remains ENOENT-only. The first correction push's real Linux failure (Application #220, three diagnostic assertion failures) remains preserved.

**New finding S5-F-07: null-ancestor branch treats unresolvable filesystem roots as genuine absence.** When the upward walk reaches a root with no existing ancestor, it returns a null ancestor; the presence classifier returns ABSENT without validating a directory. A read-only check against an absent Windows drive reproduced `ELIGIBLE_UNPROCESSED` and one eligible planner item. No drive, junction or symlink was created. This branch must fail closed; valid-directory ancestry with genuinely absent descendants must remain allowed.

S5-F-05 and original S5-F-01 through S5-F-04 cases pass. The genuine Stage 2A result remains `ALREADY_PROCESSED` with fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`. Reconciliation lifecycle/ordering/ownership tests passed. Four candidates and promotions, 14/14 provenance references in each set, revision binding, MEDIUM/LIMITS retention and context/authority controls passed. No dependency/workflow or other unauthorized drift was found.

Local Fast Tests initially returned 359 passed / two execution failures (temporary Git-object permission failure and context-test timeout). All 64 reconciliation tests passed. A targeted retry of the two failed files, sequentially with unchanged assertions/timeouts, passed 26/26. Typecheck, OLE Prettier and build passed. Repository lint retained 5,429 verified CRLF-only errors and seven warnings; no normalization. All six current CI checks passed, including Fast Tests 361/361 and Full Assurance 108/108. No local external integration run was started.

Durable report: `communication/missions/SB-ORG-LEARNING-1.1/codex/11-stage5-s5-f06-final-independent-reverification.md`.

Stage 5 is **not ready for Mission Control completion review**. Mission Control record 33 authorizes publication of this prepared report and verifier handoff only. The reviewed head, FAIL finding, positive results and local-test nuance remain unchanged; no implementation change or additional verification pass was performed. Prior findings and other actor sections are preserved. Stage 6 remains **NOT AUTHORIZED**; PR #589 remains **OPEN — NOT MERGED**; `SB-P-1.12` remains **NOT ACTIVATED**.

`STAGE 5 S5-F-07 VERIFICATION PUBLISHED — MISSION CONTROL CORRECTION AUTHORIZATION REQUIRED`

---

## Builder Stage 5 F-07 correction report

**Status:** `STAGE 5 F-07 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/10-stage5-f07-correction.md`

**Root cause:** `findDeepestExistingAncestorByLstat`'s walk-up loop returns `{ancestorPath: null}` when it reaches the filesystem root without ever finding an existing entry. `classifyMissionDirectoryPresence` mapped that exact result to `ABSENT`, on the theory (stated in the code's own prior comment) that this branch was "practically unreachable" -- disproved by Codex's read-only reproduction against a genuinely absent Windows drive letter, which has no fallback parent at all and hits this branch on the first walk iteration.

**S5-F-07 correction:** the `ancestorPath === null` branch now returns `INVALID_ANCESTRY` -- the exact same status/condition/fail-closed path the S5-F-06 found-but-invalid-ancestor branch already uses. A one-line, smallest-possible change; no new reconciliation state, no new diagnostic label.

**Null-ancestor result:** a genuinely absent Windows drive (Codex's exact reproduction, read-only, no filesystem creation) now classifies `INVALID_OR_UNSAFE`, never `ELIGIBLE_UNPROCESSED`, with zero eligible work items in the planner.

**Valid genuine-absence result:** unaffected -- a never-created `receiptsDir` beneath valid directory ancestry still classifies `ELIGIBLE_UNPROCESSED`.

**S5-F-06/F-05/F-01 through F-04 regression:** all unaffected -- ordinary-file and invalid-ancestor cases, the dangling-final-entry case, and the outside-root live-junction case re-verified via dedicated regression tests; S5-F-02/F-03/F-04 confirmed via their full, untouched test suites; `ENOENT`/`ENOTDIR` walk semantics unchanged.

**Stage 2A regression:** unchanged -- `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.

**Regression genuineness:** the fix was temporarily reverted in place and the full `reconcile.test.ts` suite re-run -- exactly the 4 expected tests failed, with zero collateral damage to the other 70.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **371/371 passing**, 28 files (+10 new, 0 regressions); `npm run build` succeeds; Prettier clean; `package-lock.json` unchanged.

**Applicable CI:** see the durable report, Section 11, once confirmed (independently verified via direct API query per the S5-F-06 round's lesson).

**Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation, no candidate/promotion/receipt/closure-evidence/context-pack file touched. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.
