# SMART BUSINESS — CLAUDE CODE STAGE 5 S5-F-05 NARROW CORRECTION

# SB-ORG-LEARNING-1.1 — Stage 5: S5-F-05 Narrow Correction

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `5 — Independent verification / failure-path assurance correction`
**Actor:** Claude Code — authorized narrow correction builder
**Status:** `STAGE 5 F-05 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-18
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/28-stage5-f05-correction-authorization.md`
**Independent verifier finding record:** `communication/missions/SB-ORG-LEARNING-1.1/codex/09-stage5-independent-corrective-reverification.md` (reviewed head `0c550155348611919baa1698530f783146eb364e`, disposition `FAIL`; preserved unchanged, not modified by this report)
**Prior builder correction (preserved, unchanged):** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/07-stage5-f01-f04-correction.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Correct exactly `S5-F-05` — a residual gap in the S5-F-02 absence-versus-ambiguity boundary that Codex's independent corrective re-verification found: a dangling receipt-directory filesystem indirection is misclassified as genuine absence, letting reconciliation reach `ELIGIBLE_UNPROCESSED` instead of failing closed. No other scope.

---

## 2. Pre-execution verification

1. Fetched `origin`; fast-forwarded `mission/SB-ORG-LEARNING-1.1-stage2` from `cbb5b29` to the Mission Control handoff head `7a68bfe96eb5f8e96405d35a67e4749f3bd72b73` (one new commit: the S5-F-05 correction authorization). Inspected it before relying on it.
2. Confirmed PR #589 `OPEN`, unmerged, mergeable, head exactly `7a68bfe...`.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, the S5-F-05 correction authorization (`mission-control/28-...`), Codex's independent corrective re-verification report (`codex/09-...`), the prior builder correction report (`claude-code/07-...`), and the current `reconcile.mjs`/`receipt-store.ts` implementation and tests.
5. Confirmed via `git log` that none of the files this correction touches had changed since my own prior Stage 5 correction commit `93404af`.

---

## 3. Root cause

`listReceiptsForMission`'s absence check was `if (!existsSync(missionDir)) return { receipts: [], issues: [] };`. `existsSync` internally follows symlinks/junctions and reports `false` whenever the final resolved target cannot be found — it does not distinguish "no filesystem entry at all" from "an entry exists here, but it is a symlink/junction whose target is missing" (a dangling link). Codex's independent corrective re-verification collected real, non-mocked filesystem metadata proving both are true simultaneously for a planted-then-target-removed junction: `existsSync(missionDir): false` and `lstatSync(missionDir).isSymbolicLink(): true`. The prior code's own comment claiming this early return was "never reached... for a dangling/unreadable indirection" was directly contradicted by that evidence — the early return fired first, before `assertPhysicallyContained` or directory enumeration ever ran, and reconciliation classified the dangling case as `ELIGIBLE_UNPROCESSED`.

---

## 4. Corrected absence-detection design

Replaced the single `!existsSync` check with `lstatSync` (which never follows the final path component) as the entry-existence authority, isolated into two small, directly-testable pure functions in `reconcile.mjs`:

- `isGenuineAbsenceError(error)` — `true` only when an `lstatSync` failure's `.code` is exactly `"ENOENT"` (no entry at all). Exported so the classification decision itself is unit-testable with synthetic error objects, since a genuine non-`ENOENT` `lstatSync` failure is not portably constructible on this platform (Section 7).
- `classifyMissionDirectoryPresence(missionDir)` — calls `lstatSync`; on success, additionally checks `existsSync` to distinguish a fully-resolvable entry (`PRESENT`) from a dangling/unresolved one (`DANGLING_OR_UNRESOLVED`); on an `lstatSync` failure, returns `ABSENT` only for `ENOENT`, otherwise `METADATA_UNAVAILABLE`. Exported for direct testing.

`listReceiptsForMission` now branches on this classification before doing anything else:

1. `ABSENT` → `{receipts: [], issues: []}` — the only truthful no-receipt case.
2. `DANGLING_OR_UNRESOLVED` → one issue, `condition: "DANGLING_OR_UNRESOLVED_ENTRY"`, zero receipts.
3. `METADATA_UNAVAILABLE` → one issue, `condition: "ENTRY_METADATA_UNAVAILABLE"`, zero receipts.
4. `PRESENT` → proceeds exactly as before: `assertPhysicallyContained` (S5-F-01, unmodified), then `readdirSync` enumeration (S5-F-02, unmodified), then the unchanged per-entry loop.

`classifyEnvelope`'s existing `receiptIssues.length > 0` fail-closed branch (unchanged) already treats both new conditions identically to every other receipt-discovery issue — `INVALID_OR_UNSAFE`, `retry_eligible: true`, `needs_human_reconciliation: true`. No new reconciliation state was introduced. `assertPhysicallyContained` was not modified.

---

## 5. Genuine-absence proof

- `classifyMissionDirectoryPresence` against a receipts-directory path that was never created at all returns `{status: "ABSENT"}`.
- `classifyEnvelope` against a `receiptsDir` path that was never created still classifies `ELIGIBLE_UNPROCESSED` — the normal first-processing path is unaffected.

---

## 6. Dangling-entry proof

A real, platform-supported Windows junction fixture was used (not a simulated one): `plantDirectoryIndirection` creates the junction pointing at a real target directory, then the target is removed, leaving the junction entry itself dangling — the exact fixture shape Codex's evidence described.

Verified empirically before writing the fix (see Section 7 for the raw output):

```text
existsSync(link): false
lstatSync(link) succeeds: true (isSymbolicLink: true)
```

- `classifyMissionDirectoryPresence` against this fixture returns `{status: "DANGLING_OR_UNRESOLVED"}`, never `"ABSENT"`.
- `classifyEnvelope` against this exact fixture — Codex's exact reproduction — now classifies `INVALID_OR_UNSAFE`, `retry_eligible: true`, `needs_human_reconciliation: true`, never `ELIGIBLE_UNPROCESSED`.

---

## 7. Cross-platform discipline — `METADATA_UNAVAILABLE`

Per the authorization's explicit allowance, a genuine non-`ENOENT` `lstatSync` failure was investigated empirically rather than assumed:

- An ordinary file placed where the mission-directory's own *parent* (`receiptsDir` itself) should be a directory: `lstatSync` on the nested path returned `ENOENT`, not a distinct code.
- The mission directory path nested under an already-dangling parent junction: `lstatSync` also returned `ENOENT`.

Both experiments (full commands and output preserved in this round's working notes) confirm that on this Windows environment, essentially every "cannot resolve this path at all" condition normalizes to `ENOENT` through `lstatSync`, exactly like the earlier F-02 round's finding that permission-denial is not portably constructible here either. Rather than weaken the production branch or claim untested coverage, the actual decision function (`isGenuineAbsenceError`) is exported and directly unit-tested with synthetic error objects (`{code: "EACCES"}`, `{code: "EIO"}`, `{code: "ENOTDIR"}`, a plain `Error` with no `.code`, and `null`) — proving the real production logic correctly treats every one of them as *not* absence, without fabricating a filesystem condition that cannot be genuinely reproduced here.

---

## 8. Regression proof — prior S5-F-01/F-02 cases

- **`ENOTDIR`** (an ordinary file at the hashed mission-directory path): `lstatSync` succeeds (it is a genuine entry, just the wrong type) and `existsSync` is `true`, so the new branches are skipped entirely and control reaches the unchanged `readdirSync` call, which still throws `ENOTDIR` → `INVALID_OR_UNSAFE`, `condition: "ENUMERATION_FAILED"`, exactly as before. Verified empirically and by a dedicated regression test.
- **Receipt-shaped non-file `.json` entry** (a directory literally named `blocked.json`): unaffected, still `INVALID_OR_UNSAFE`.
- **Malformed-JSON receipt** and **schema-invalid receipt**: unaffected, still `INVALID_OR_UNSAFE`; a synthetic canary embedded in the malformed content never appears in the classification result.
- **S5-F-01 outside-root live junction** (a junction at the mission directory pointing to a real, non-dangling outside directory containing receipt-shaped content): unaffected — `existsSync` is `true` for this case (the junction resolves to a real, existing target), so `classifyMissionDirectoryPresence` correctly returns `PRESENT` and control reaches the unchanged `assertPhysicallyContained` check, which still rejects it as `PHYSICAL_CONTAINMENT_VIOLATION`.

---

## 9. Regression proof — S5-F-03, S5-F-04, Stage 2A, and broader behavior

- **S5-F-03** (envelope physical-indirection): no file in `sources/envelope-location.ts` was touched this round; unrelated to receipt discovery. Its full test suite (unmodified) passed unchanged.
- **S5-F-04** (duplicate/conflict deduplication): no file touched this round beyond `reconcile.mjs`'s receipt-discovery function; `resolveEnvelopeIdentityGroups`/`planReconciliation` were not modified. Its full test suite (unmodified) passed unchanged.
- **Genuine Stage 2A no-op:** re-run of the exact real-data test — still `ALREADY_PROCESSED`, fingerprint still `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`. A dedicated regression test for this exact case was included in this round's additions as well.
- **Retry/recovery/new-revision/reopen/supersession/lock behavior:** none of the code paths implementing these (`FAILED_RETRYABLE`, `HARVESTED` resume, `NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED`, `attemptReconciliationOwnership`/`releaseReconciliationOwnership`/`isLocked`) were modified; their full, unmodified test coverage (Cases D, E, F, H, I, J) passed unchanged in the full suite run.

---

## 10. Regression genuineness (deliberate break/restore proof)

The `classifyMissionDirectoryPresence` fix was temporarily reverted in place to its exact pre-correction `!existsSync`-only logic, and the full `reconcile.test.ts` suite (49 tests) was re-run against that regressed code:

- **Exactly 2 tests failed**: the direct `classifyMissionDirectoryPresence` unit test for the dangling fixture, and the end-to-end `classifyEnvelope` test reproducing Codex's exact scenario (both correctly reverted to `ABSENT`/`ELIGIBLE_UNPROCESSED`).
- **47 of 49 tests still passed**, including every S5-F-01/F-02/F-03/F-04 regression test and the genuine Stage 2A test — confirming the regression was precisely scoped to the S5-F-05 fix, with no collateral breakage and no collateral false-pass.

The file was then restored from a pre-edit backup and reconfirmed byte-identical (clean `eslint`/`tsc`/full 346/346 Fast Tests afterward).

---

## 11. Safe-diagnostic result

Both new conditions (`DANGLING_OR_UNRESOLVED_ENTRY`, `ENTRY_METADATA_UNAVAILABLE`) follow the exact existing diagnostic convention: a fixed condition label plus the receipt-store's sha256 storage key (never the raw `mission_id`, never raw path content, never a parser error string). The malformed-receipt regression test's embedded synthetic canary (`AKIA...`) is asserted to never appear anywhere in the classification result.

---

## 12. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean (no issues on first run this round).
- `npm run test:fast` — **346/346 passing**, 28 files (up from 336/28 — 10 new tests in `reconcile.test.ts`; all 336 pre-existing tests unchanged).
- `npm run build` — succeeds.
- `npx prettier --check organizational-learning/` — pass.
- `package-lock.json` — confirmed unchanged (`git status --short package-lock.json package.json` empty).

---

## 13. Real CI

On PR #589 head `2b6cf519fbddc7396c0a0cc02c5e562500705701` (this correction's commit):

- Team LIPS Application Build Assurance `#211` — `SUCCESS` (Lint, Typecheck, Build, Fast Tests all `SUCCESS`).
- Team LIPS Markdown Quality Gate `#1815` — `SUCCESS`.
- Team LIPS Full Assurance `#84` — `SUCCESS`, real run, not suppressed.

All three applicable workflows passed on this head.

---

## Required return summary

- **Files changed:** 2 modified files (`organizational-learning/scripts/reconcile.mjs`, `organizational-learning/tests/reconcile.test.ts`); 0 new files; 0 dependencies added; `package-lock.json` unchanged.
- **S5-F-05 implementation:** `listReceiptsForMission`'s absence check now uses non-following `lstatSync` metadata (via two small, exported, directly-testable pure functions — `isGenuineAbsenceError`, `classifyMissionDirectoryPresence`) instead of `existsSync` alone; a dangling/unresolved symlink or junction is now classified as present-but-unsafe rather than absent, and fails closed through the existing, unmodified `INVALID_OR_UNSAFE` path.
- **Genuine-absence result:** unaffected — still `{receipts: [], issues: []}` / `ELIGIBLE_UNPROCESSED` for a truly never-created receipts directory.
- **Dangling-entry result:** a real planted-then-target-removed Windows junction (Codex's exact reproduction shape) now classifies `INVALID_OR_UNSAFE`, `retry_eligible: true`, never `ELIGIBLE_UNPROCESSED`.
- **Prior S5-F-01/F-02 regression result:** `ENOTDIR`, receipt-shaped non-file entries, malformed/schema-invalid receipts, and the S5-F-01 outside-root live-junction case all remain unchanged and fail closed, confirmed by dedicated regression tests and the full existing suite passing unchanged.
- **S5-F-03/F-04 regression result:** neither file was touched this round; their full, unmodified test suites passed unchanged.
- **Stage 2A regression result:** unchanged — `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.
- **Local verification:** typecheck/lint/Fast Gate (346/346)/build/Prettier all pass; deliberate break/restore proof confirms genuine, precisely-scoped regression detection.
- **Real CI:** all three applicable workflows `SUCCESS` on PR #589 head `2b6cf51` — Application Build Assurance #211 (Lint, Typecheck, Build, Fast Tests), Markdown Quality Gate #1815, and a real (not suppressed) Full Assurance #84 run (Section 13).
- **Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation, no candidate/promotion/receipt/closure-evidence/context-pack file touched, `assertPhysicallyContained` unmodified. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.

---

## Stop statement

**STAGE 5 F-05 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the single authorized narrow correction (S5-F-05: dangling receipt-directory indirection must never be treated as genuine absence) was implemented and proved, reusing the existing Stage 1 `assertPhysicallyContained` primitive unmodified and introducing no new reconciliation state. No Stage 6 work, no automated extraction, no provider/scheduler/publisher, no promotion, no governance/Product Truth/production mutation, and no authority effect occurred. Stage 6 is not authorized by this report. PR #589 is not merged. `SB-P-1.12` remains not activated.
