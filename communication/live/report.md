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
