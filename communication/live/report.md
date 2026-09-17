# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 4A Correction Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Current stage:** `4 — Background automation / reconciliation implementation`

**Current sub-gate:** `4A — Bounded deterministic reconciliation wrapper correction`

**Current actor:** Claude Code — authorized narrow correction builder

**Status:** `STAGE 4A SUBSTANTIVE REVIEW — NARROW CORRECTION REQUIRED`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**Pull request:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Stage 4A builder result reviewed

Claude Code implemented the bounded deterministic reconciliation wrapper and reported:

- six reconciliation states;
- real Stage 2A `ALREADY_PROCESSED` proof with the genuine source fingerprint;
- new-revision, reopen and supersession classification;
- local atomic same-revision ownership;
- recovery/retry and failure-state distinction;
- malformed-envelope safe diagnostics;
- deterministic ordering/replay;
- 306/306 Fast Tests;
- no dependency, provider, scheduler, publisher, promotion or authority expansion.

Technical implementation checkpoint:

`5e54168dd628e0e694c379b4cf680821d15d3e43`

Exact-head workflows on that implementation checkpoint:

- Team LIPS Application Build Assurance #185 — SUCCESS;
- Team LIPS Markdown Quality Gate #1789 — SUCCESS;
- Team LIPS Full Assurance #58 — SUCCESS.

A later reporting-only commit `8762bfc546b28dc02ec7fc1ab9144851ba12b714` changed only this live report and the durable builder report to record the completed CI result.

## Mission Control substantive review

Mission Control found two narrow blockers.

### S4A-F-01 — approved envelope-location boundary

The current CLI structurally accepts explicit JSON envelope paths/directories but does not enforce that the closure-envelope file itself resides in an explicitly approved repository location. Schema validity and evidence allowlisting do not establish envelope-location approval.

Required correction: add the smallest explicit repository-native approved-path/approved-root boundary and prove a schema-valid envelope outside that boundary creates no work.

### S4A-F-02 — malformed receipt ambiguity

Receipt discovery currently skips unreadable/malformed/schema-invalid receipt files. For the mission being reconciled this can make ambiguous durable state look absent and allow new work planning.

Required correction: relevant malformed/unreadable/schema-invalid receipt state must block work/fail closed until repaired, with safe non-sensitive diagnostics.

Durable correction authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/22-stage4a-f01-f02-correction-authorization.md`

## Boundaries

`STAGE 4A — NOT YET ACCEPTED`

`STAGE 4B — NOT AUTHORIZED`

`STAGE 5 — NOT AUTHORIZED`

No automated extraction/provider integration/scheduler/publisher.
No automatic promotion.
No `INSTITUTIONALISED`.
No `ORGANIZATION_WIDE`.
No merge.
No governance/Product Truth mutation.
No production/customer mutation.
No dependency/lockfile/workflow change.

`SB-P-1.12 — NOT ACTIVATED`

## Required stop

`STAGE 4A F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

---

## Builder Stage 4A F-01/F-02 correction report

**Status:** `STAGE 4A F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/06-stage4a-bounded-reconciliation-proof.md` (Section 13; original Stage 4A proof preserved unchanged in Sections 1-12).

**S4A-F-01:** new, independent module `organizational-learning/sources/envelope-location.ts` (`isApprovedClosureEnvelopeLocation`, approved root `communication/missions/`), checked in `planReconciliation` before any envelope file is opened — never derived from evidence allowlisting. Proven: the real Stage 2A envelope's location is approved; a byte-identical copy at an unapproved path, and an unapproved `--envelopes-dir`, are both rejected with zero work items and no content echo; no bypass via direct `--envelope`; approved and unapproved envelopes in the same run are classified independently.

**S4A-F-02:** `listReceiptsForMission` now returns `{receipts, issues}` instead of silently skipping unreadable/malformed/schema-invalid receipt files; `classifyEnvelope` unconditionally returns `INVALID_OR_UNSAFE` (`retry_eligible: true`, `needs_human_reconciliation: true`) whenever any receipt issue exists for the mission being reconciled, before every other receipt-dependent branch. Proven: malformed-JSON and schema-invalid receipts both block work and are never `ELIGIBLE_UNPROCESSED`/`ALREADY_PROCESSED`; the equivalent unreadable-file branch proven directly and portably (`EISDIR` on a directory path, verified empirically); deterministic across replay; normal classification resumes once the fixture is repaired; no canary echo; a reopening envelope with a malformed receipt is also blocked.

**Regression confirmation:** the real Stage 2A `ALREADY_PROCESSED` proof, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`, new-revision/reopen/supersede classification, concurrency (function-level and real two-process CLI), recovery/retry distinction, deterministic ordering, and no-authority output all remain unchanged and passing.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **322/322 passing**, 28 files (+16 new, 0 regressions); `npm run build` succeeds; Prettier clean; Markdown Quality Gate PASS; `package-lock.json` unchanged.

**Applicable CI:** all three applicable workflows `SUCCESS` on PR #589 head `0a3f9f812c84f96c414a2f01aa03987128711046` (this correction's commit): Team LIPS Application Build Assurance #190 (Lint, Typecheck, Build, Fast Tests), Team LIPS Markdown Quality Gate #1794, and a real (not suppressed) Team LIPS Full Assurance #63 run.

**Scope confirmation:** no Stage 4B, no automated extraction, no provider/scheduler/publisher, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.
