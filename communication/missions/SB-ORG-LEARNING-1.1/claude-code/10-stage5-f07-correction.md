# SMART BUSINESS — CLAUDE CODE STAGE 5 S5-F-07 NARROW CORRECTION

# SB-ORG-LEARNING-1.1 — Stage 5: S5-F-07 Narrow Correction

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `5 — Independent verification / failure-path assurance correction`
**Actor:** Claude Code — authorized narrow correction builder
**Status:** `STAGE 5 F-07 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-18
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/34-stage5-f07-correction-authorization.md`
**Independent verifier finding record:** `communication/missions/SB-ORG-LEARNING-1.1/codex/11-stage5-s5-f06-final-independent-reverification.md` (reviewed head `32591ee7a65852cbffe5712260c40ef2356234c9`, disposition `FAIL`; preserved unchanged, not modified by this report)
**Prior builder corrections (preserved, unchanged):** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/07-stage5-f01-f04-correction.md`, `.../08-stage5-f05-correction.md`, `.../09-stage5-f06-correction.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Correct exactly `S5-F-07` — Codex's final independent re-verification found that when the ancestry walk (introduced for S5-F-06) reaches the filesystem root without ever finding an existing entry, the result was mapped to `ABSENT`, even though no valid directory ancestry had ever been established. No other scope.

---

## 2. Pre-execution verification

1. Fetched `origin`; fast-forwarded `mission/SB-ORG-LEARNING-1.1-stage2` from `36c2bdb` to the Mission Control handoff head `1710b1f6c6e2acb840686e182761025b6b4b5a7b` (one new commit: the S5-F-07 correction authorization). Inspected it before relying on it.
2. Confirmed PR #589 `OPEN`, unmerged, mergeable, head exactly `1710b1f...`.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, the S5-F-07 correction authorization (`mission-control/34-...`), Codex's final independent re-verification report (`codex/11-...`), all three prior builder correction reports, and the current `reconcile.mjs`/tests.
5. Confirmed via `git log` that none of the files this correction touches had changed since my own prior Stage 5 correction commit `baa6a84`.

---

## 3. Root cause

`findDeepestExistingAncestorByLstat`'s walk-up loop returns `{ ancestorPath: null }` when it reaches the filesystem root (`dirname(current) === current`) without ever finding a path component that has an actual filesystem entry. `classifyMissionDirectoryPresence` mapped this exact result to `{ status: "ABSENT" }`, on the theory (stated in the code's own prior comment) that this branch was "practically unreachable." Codex's independent re-verification disproved that: a genuinely absent Windows drive letter (e.g. `Z:` with its root separator) has no fallback parent at all -- `dirname` of a drive root returns that same root -- so the walk hits this exact branch on the very first iteration, read-only, with no filesystem object of any kind created. The result was `ABSENT` → `ELIGIBLE_UNPROCESSED` — new-work intent recommended against a filesystem root that was never validated as a real, existing directory at all, the precise opposite of the "genuine absence requires validated ancestry" guarantee the S5-F-05/F-06 corrections established.

---

## 4. Null-ancestor correction

One-line, smallest-possible change: the `ancestorPath === null` branch in `classifyMissionDirectoryPresence` now returns `{ status: "INVALID_ANCESTRY" }` instead of `{ status: "ABSENT" }`. No new internal status, no new reconciliation state, no new diagnostic condition label — `listReceiptsForMission` already maps `INVALID_ANCESTRY` to the existing `INVALID_RECEIPT_ROOT_ANCESTRY` fixed condition, which already reaches the existing, unmodified `INVALID_OR_UNSAFE` fail-closed path in `classifyEnvelope`. This is a deliberate reuse decision: "no existing ancestor could be found anywhere in the chain" is definitionally a form of "no valid directory ancestry could be established" — the exact same category the found-but-invalid-ancestor branch (added for S5-F-06) already represents, so no new terminology was introduced.

`findDeepestExistingAncestorByLstat`'s own retry semantics (`ENOENT`/`ENOTDIR` walk-up, S5-F-06's cross-platform fix), `assertPhysicallyContained`, and every other branch of `classifyMissionDirectoryPresence` were not touched.

---

## 5. Proof — null-ancestor path, absent-drive reproduction

Verified empirically before writing any test, using a genuinely absent drive letter confirmed read-only on this machine (`lstatSync("Z:\\")` → `ENOENT`; only `C:` is mounted):

| Check | Result |
| --- | --- |
| `classifyMissionDirectoryPresence` for a path beneath the absent drive | `INVALID_ANCESTRY` (was `ABSENT`) |
| `classifyEnvelope` end-to-end for the same path | `INVALID_OR_UNSAFE`, `retry_eligible: true`, `needs_human_reconciliation: true` |
| `planReconciliation` work item for the same path | `INVALID_OR_UNSAFE`; zero items reach `ELIGIBLE_UNPROCESSED` |

Committed tests reproduce all three checks directly, guarded by a `findAbsentWindowsDrive()` helper that dynamically locates a genuinely absent drive letter at test time (never hardcoding one, never creating/mounting anything) and platform-gates the tests to Windows only (`process.platform === "win32"`), since POSIX paths always bottom out at `/`, which always exists — the null-ancestor branch is genuinely unreachable there by construction, not merely untested. On any platform where no absent drive can be found (including every Linux CI run), a dedicated test documents this platform limitation explicitly rather than silently omitting coverage.

---

## 6. Valid genuine-absence result (control case)

A dedicated test confirms the unaffected case: a `receiptsDir` that has genuinely never been created, nested beneath a real, valid, existing OS-temp directory, still classifies `ELIGIBLE_UNPROCESSED` exactly as before — normal first-processing behavior is fully preserved.

---

## 7. Regression proof — S5-F-06, S5-F-05, S5-F-01 through F-04, Stage 2A, broader lifecycle

- **S5-F-06:** an ordinary file as `receiptsDir`, and a non-directory ancestor located *above* `receiptsDir`, both re-verified via dedicated regression tests — both remain `INVALID_OR_UNSAFE`, never `ELIGIBLE_UNPROCESSED`. Windows `ENOENT` and Linux `ENOTDIR` walk semantics are unchanged (no code in `findDeepestExistingAncestorByLstat` or `isUnresolvedPathError` was modified this round).
- **S5-F-05:** the exact dangling-final-mission-entry fixture re-verified via a dedicated regression test — still `INVALID_OR_UNSAFE`.
- **S5-F-01:** the outside-root live-junction case re-verified via a dedicated regression test — still `INVALID_OR_UNSAFE`.
- **S5-F-02, S5-F-03, S5-F-04:** none of their respective code paths were touched this round; their full, unmodified test suites passed unchanged in the full Fast Test run.
- **Genuine Stage 2A:** re-verified via a dedicated regression test — still `ALREADY_PROCESSED`, fingerprint still `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.
- **Broader reconciliation lifecycle** (`NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED`, `FAILED_RETRYABLE`, intermediate `HARVESTED` recovery, deterministic replay, stable ordering, bounded lock ownership): none of these code paths were modified; their full, unmodified test coverage passed unchanged.

---

## 8. Regression genuineness (deliberate break/restore proof)

The `ancestorPath === null` branch was temporarily reverted in place to its exact pre-correction `ABSENT` mapping, and the full `reconcile.test.ts` suite (74 tests) was re-run against that regressed code:

- **Exactly 4 tests failed**: every test specifically exercising the absent-drive null-ancestor scenario (the direct `classifyMissionDirectoryPresence` check, the end-to-end `classifyEnvelope` check, the `planReconciliation` zero-eligible-work check, and the safe-diagnostics check).
- **70 of 74 tests still passed**, including the genuine-absence control case and every S5-F-06/F-05/F-01 regression test — confirming the fix is precisely scoped with no collateral breakage.

The file was then restored from a pre-edit backup and reconfirmed byte-identical (clean `eslint`/`tsc`/full 371/371 Fast Tests afterward).

---

## 9. Safe-diagnostic result

The `INVALID_ANCESTRY` status for the null-ancestor case reuses the exact existing `INVALID_RECEIPT_ROOT_ANCESTRY` diagnostic convention already established for S5-F-06 — a fixed condition label plus the receipt-store's sha256 storage key, never raw path content or raw OS error text. A dedicated test confirms the classification result never contains the literal absent-drive path (`Z:\...`) or any distinguishing fixture string.

---

## 10. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean (no issues on first run this round).
- `npm run test:fast` — **371/371 passing**, 28 files (up from 361/28 — 10 new tests in `reconcile.test.ts`; all 361 pre-existing tests unchanged).
- `npm run build` — succeeds.
- `npx prettier --check organizational-learning/` — pass.
- `package-lock.json` — confirmed unchanged (`git status --short package-lock.json package.json` empty).

---

## 11. Real CI

Pending at the time this commit was authored. Recorded in a follow-up, documentation-only commit once the real GitHub Actions checks complete on this correction's head, per the standing rule not to claim CI success before it actually completes. Following the S5-F-06 round's lesson, the actual CI conclusion will be independently confirmed via direct `gh api ... --jq .conclusion` queries per job, not merely a watch-command exit code.

---

## Required return summary

- **Files changed:** 2 modified files (`organizational-learning/scripts/reconcile.mjs`, `organizational-learning/tests/reconcile.test.ts`); 0 new files; 0 dependencies added; `package-lock.json` unchanged.
- **S5-F-07 implementation:** the `ancestorPath === null` branch in `classifyMissionDirectoryPresence` now returns `INVALID_ANCESTRY` (reusing the existing S5-F-06 status/condition/fail-closed path) instead of `ABSENT` — a one-line, smallest-possible correction with no new reconciliation state.
- **Null-ancestor result:** a genuinely absent Windows drive (Codex's exact reproduction, read-only, no filesystem creation) now classifies `INVALID_OR_UNSAFE`, never `ELIGIBLE_UNPROCESSED`, with zero eligible work items in the planner.
- **Valid genuine-absence result:** unaffected — a never-created `receiptsDir` beneath valid directory ancestry still classifies `ELIGIBLE_UNPROCESSED`.
- **S5-F-06 regression:** unaffected — ordinary-file and invalid-non-directory-ancestor cases remain blocked; `ENOENT`/`ENOTDIR` walk semantics unchanged.
- **S5-F-05 regression:** unaffected — the dangling-final-entry case remains blocked.
- **S5-F-01 through F-04 regression:** all unaffected; S5-F-01 confirmed via a dedicated regression test, S5-F-02/F-03/F-04 confirmed via their full, untouched test suites.
- **Stage 2A regression:** unchanged — `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.
- **Broader reconciliation result:** `NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED`, `FAILED_RETRYABLE`, intermediate recovery, deterministic replay, stable ordering, and bounded lock ownership all remain unchanged and passing.
- **Local verification:** typecheck/lint/Fast Gate (371/371)/build/Prettier all pass; deliberate break/restore proof confirms genuine, precisely-scoped regression detection (exactly 4 of 74 tests affected).
- **Real CI:** see Section 11; not yet confirmed at time of writing, will be recorded in a documentation-only follow-up commit, independently verified via direct API queries.
- **Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation, no candidate/promotion/receipt/closure-evidence/context-pack file touched, `assertPhysicallyContained` unmodified. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.

---

## Stop statement

**STAGE 5 F-07 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the single authorized narrow correction (S5-F-07: a null-ancestor result must never be treated as genuine absence) was implemented and proved, reusing the exact existing S5-F-06 `INVALID_ANCESTRY` status and fail-closed path rather than introducing anything new. No Stage 6 work, no automated extraction, no provider/scheduler/publisher, no promotion, no governance/Product Truth/production mutation, and no authority effect occurred. Stage 6 is not authorized by this report. PR #589 is not merged. `SB-P-1.12` remains not activated.
