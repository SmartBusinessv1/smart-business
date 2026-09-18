# SMART BUSINESS — CLAUDE CODE STAGE 5 S5-F-06 NARROW CORRECTION

# SB-ORG-LEARNING-1.1 — Stage 5: S5-F-06 Narrow Correction

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `5 — Independent verification / failure-path assurance correction`
**Actor:** Claude Code — authorized narrow correction builder
**Status:** `STAGE 5 F-06 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-18
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/31-stage5-f06-correction-authorization.md`
**Independent verifier finding record:** `communication/missions/SB-ORG-LEARNING-1.1/codex/10-stage5-final-independent-reverification.md` (reviewed head `018be1b3830f62f7d3d4c30470a8cc9384a1161f`, disposition `FAIL`; preserved unchanged, not modified by this report)
**Prior builder corrections (preserved, unchanged):** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/07-stage5-f01-f04-correction.md`, `communication/missions/SB-ORG-LEARNING-1.1/claude-code/08-stage5-f05-correction.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Correct exactly `S5-F-06` — Codex's final independent re-verification found that a bare `ENOENT` at the derived mission receipt-directory path is not sufficient proof of genuine absence, because it does not establish that the *configured receipt-store ancestry itself* is a valid, traversable directory hierarchy. No other scope.

---

## 2. Pre-execution verification

1. Fetched `origin`; fast-forwarded `mission/SB-ORG-LEARNING-1.1-stage2` from `b96866e` to the Mission Control handoff head `f6a76cd67f68cd3dbf22ece27c92a62ef0d1f1b3` (one new commit: the S5-F-06 correction authorization). Inspected it before relying on it.
2. Confirmed PR #589 `OPEN`, unmerged, mergeable, head exactly `f6a76cd...`.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, the S5-F-06 correction authorization (`mission-control/31-...`), Codex's final independent re-verification report (`codex/10-...`), both prior builder correction reports (`claude-code/07-...`, `claude-code/08-...`), and the current `reconcile.mjs`/tests.
5. Confirmed via `git log` that none of the files this correction touches had changed since my own prior Stage 5 correction commit `4091d1c`.

---

## 3. Root cause

`classifyMissionDirectoryPresence(missionDir)` (the S5-F-05 fix) called `lstatSync(missionDir)` directly and treated `ENOENT` as unconditional proof of genuine absence. `lstatSync` never follows its final path component, but *resolving* that final component still depends on every ancestor above it being traversable. Codex's independent reproduction: an ordinary file occupies the configured `receiptsDir` path; the derived `missionDir` is `receiptsDir/<mission-storage-key>`; `lstatSync(missionDir)` throws `ENOENT` on Windows (the OS cannot descend through a file as if it were a directory) — indistinguishable, by error code alone, from `missionDir` genuinely never having been created under a valid `receiptsDir`. The prior code took the absence branch and reconciliation reached `ELIGIBLE_UNPROCESSED` against an actively invalid receipt store, not an empty one.

---

## 4. Ancestry-validation design

Rather than special-casing "receiptsDir is a file" (explicitly disallowed by the authorization: "do not merely add a special-case check for one filename or one Windows error string"), the fix generalizes to: *walk upward from `missionDir` to find the deepest ancestor that actually has a filesystem entry, then validate that specific ancestor before trusting anything below it as absent.*

Two new pieces in `reconcile.mjs`:

- **`findDeepestExistingAncestorByLstat(targetPath)`** — walks upward via `dirname`, calling non-following `lstatSync` at each level, until it finds a level that exists (returns `{ancestorPath}`), hits a non-`ENOENT` failure partway up (returns `{ambiguous: true}`), or reaches the filesystem root with nothing found (returns `{ancestorPath: null}`, practically unreachable).
- **`classifyMissionDirectoryPresence(missionDir)`** (same exported signature as the S5-F-05 correction, enhanced) — uses the walk-up result:
  - If the deepest existing entry *is* `missionDir` itself, behavior is byte-for-byte identical to the S5-F-05 correction: `PRESENT` or `DANGLING_OR_UNRESOLVED`, decided the same way as before.
  - If the deepest existing entry is some ancestor *above* `missionDir` (i.e. everything below it is genuinely unwritten), absence is trustworthy only if that ancestor resolves, via *following* `statSync` (deliberately the following variant here — a real directory reached through a valid symlink is legitimate ancestry), to an actual directory. If `statSync` throws (the ancestor is itself dangling/unresolved) or the resolved object is not a directory (an ordinary file — exactly Codex's reproduction), the result is a new status, `INVALID_ANCESTRY` — never absence.
  - If the walk itself is ambiguous (a non-`ENOENT` `lstatSync` failure partway up) or reaches the filesystem root with nothing found, the existing `METADATA_UNAVAILABLE`/`ABSENT` handling applies unchanged.

`listReceiptsForMission` gained one new branch: `INVALID_ANCESTRY` → one issue, `condition: "INVALID_RECEIPT_ROOT_ANCESTRY"`, zero receipts — reaching the existing, unmodified `INVALID_OR_UNSAFE` fail-closed path in `classifyEnvelope`, exactly like every other receipt-discovery issue. No other reconciliation state was introduced. `assertPhysicallyContained` was not modified.

This single algorithm, without any special-casing, correctly handles every case the authorization requires: `receiptsDir` itself being a file, a non-directory ancestor *above* `receiptsDir`, and a dangling/unresolved ancestor *above* `receiptsDir` — verified empirically before writing any test (Section 5).

---

## 5. Proof — ordinary-file receipt root, genuine absence, invalid ancestors

Verified empirically with direct Node invocations before writing the corresponding tests:

| Fixture | `classifyMissionDirectoryPresence` result |
| --- | --- |
| `receiptsDir` is an ordinary file (Codex's exact reproduction) | `INVALID_ANCESTRY` |
| `receiptsDir` genuinely never created, parent is a valid directory | `ABSENT` |
| `receiptsDir` is a real, existing directory; mission child absent | `ABSENT` |
| S5-F-05 dangling final mission-entry (unaffected) | `DANGLING_OR_UNRESOLVED` |
| An ordinary file *above* `receiptsDir` (not `receiptsDir` itself) | `INVALID_ANCESTRY` |
| A dangling junction *above* `receiptsDir` | `INVALID_ANCESTRY` |

Each of these is also proven end-to-end through `classifyEnvelope`/`planReconciliation` in the committed test suite: the ordinary-file and invalid-ancestor cases classify `INVALID_OR_UNSAFE` (`retry_eligible: true`, `needs_human_reconciliation: true`) with zero items reaching `ELIGIBLE_UNPROCESSED` in the planner output; the genuine-absence and valid-directory cases classify `ELIGIBLE_UNPROCESSED` exactly as before.

---

## 6. Regression proof — S5-F-05, S5-F-01, S5-F-02

- **S5-F-05** (dangling final mission-entry): re-run of the exact fixture — still `INVALID_OR_UNSAFE`, never regresses to `ELIGIBLE_UNPROCESSED`. The code path is provably unchanged for this case (Section 4).
- **S5-F-01** (outside-root live receipt junction pointing at a real, non-dangling target): unaffected — the deepest existing ancestor found by the walk-up is `missionDir` itself (the junction entry exists and resolves), so control reaches the unchanged `assertPhysicallyContained` check exactly as before, which still rejects it.
- **S5-F-02** (`ENOTDIR` at the mission storage path, receipt-shaped non-file `.json`, malformed JSON, schema-invalid JSON): all unaffected and re-verified via dedicated regression tests — none of these fixtures' deepest existing ancestor is anything other than `missionDir` itself (an ordinary ENOTDIR-triggering file, or a real, valid `receiptsDir` directory), so the new ancestry branch never activates for them; behavior is identical to before.

---

## 7. Regression proof — S5-F-03, S5-F-04, Stage 2A, broader lifecycle

- **S5-F-03** (envelope physical-indirection): `sources/envelope-location.ts` was not touched this round. Its full, unmodified test suite passed unchanged in the full Fast Test run.
- **S5-F-04** (duplicate/conflicting envelope deduplication): `resolveEnvelopeIdentityGroups`/`planReconciliation`'s dedup logic was not touched this round. Its full, unmodified test suite passed unchanged.
- **Genuine Stage 2A no-op:** re-run of the exact real-data test — still `ALREADY_PROCESSED`, fingerprint still `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.
- **Broader reconciliation lifecycle** (`NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED`, `FAILED_RETRYABLE`, intermediate `HARVESTED` recovery, deterministic replay, bounded lock ownership): none of these code paths were modified; their full, unmodified test coverage (Cases D, E, F, H, I, J) passed unchanged.

---

## 8. Regression genuineness (deliberate break/restore proof)

`classifyMissionDirectoryPresence` was temporarily reverted in place to its exact pre-S5-F-06 logic (the S5-F-05-only version, with no ancestry walk), and the full `reconcile.test.ts` suite (64 tests) was re-run against that regressed code:

- **Exactly 8 tests failed**: every test specifically targeting the new ancestry-validation behavior (ordinary-file-as-receiptsDir ×3, non-directory-ancestor-above-receiptsDir ×2, dangling-ancestor-above-receiptsDir ×2, the safe-diagnostics test ×1).
- **56 of 64 tests still passed**, including every other S5-F-06 test not dependent on the new logic (genuine absence, valid-directory-with-absent-child, all S5-F-05/S5-F-01/S5-F-02 regression tests, the Stage 2A regression test) and the entire rest of the suite — confirming the fix is precisely scoped with no collateral breakage.

The file was then restored from a pre-edit backup and reconfirmed byte-identical (clean `eslint`/`tsc`/full 361/361 Fast Tests afterward).

---

## 9. Safe-diagnostic result

The new `INVALID_RECEIPT_ROOT_ANCESTRY` condition follows the exact existing diagnostic convention: a fixed condition label plus the receipt-store's sha256 storage key (never the raw `mission_id`). A dedicated test embeds a synthetic canary (`AKIA...`) and distinguishing fixture text directly into the ordinary-file `receiptsDir` fixture's bytes and asserts neither ever appears anywhere in the classification result.

---

## 10. A methodology note: cross-platform `lstatSync` error codes (`ENOENT` vs. `ENOTDIR`)

The first push of this correction (commit `edd4da9`) passed every local check on this Windows development machine (typecheck, lint, build, Prettier, and 361/361 Fast Tests) but genuinely **failed** real GitHub Actions CI: the Linux `Fast Tests` job reported 3 failures in `reconcile.test.ts`, all in the new S5-F-06 tests. This is reported transparently rather than silently re-pushed as if it had not happened.

**Root cause of the CI failure:** `findDeepestExistingAncestorByLstat`'s walk-up loop treated any `lstatSync` failure other than `ENOENT` as an unrecoverable ambiguity (`{ambiguous: true}`), stopping the walk immediately. On this Windows machine, an ordinary file occupying an ancestor position empirically produces `ENOENT` when a path attempts to resolve *through* it — confirmed directly before writing the original fix. On Linux (the actual GitHub Actions runner), the POSIX-correct behavior for the identical fixture is `ENOTDIR` (a path component exists but is not a directory), a distinct error code the original walk condition did not recognize. The walk therefore stopped one level too early on Linux, before ever reaching and examining the actual invalid ancestor, and reported the less specific (but still fail-closed) `METADATA_UNAVAILABLE` instead of `INVALID_ANCESTRY` -- failing the tests' exact-status assertions. **This was not a safety regression**: `METADATA_UNAVAILABLE` still maps to the same `INVALID_OR_UNSAFE` fail-closed reconciliation result; only the specific diagnostic label and one test's exact-substring assertion were affected. Confirmed by reading the actual Linux CI job logs (`gh run view --job <id> --log`), not assumed.

**Correction:** introduced a second, narrower helper, `isUnresolvedPathError` (`ENOENT` **or** `ENOTDIR`), used only by the walk-up loop's retry decision. `isGenuineAbsenceError` (the S5-F-05 function, `ENOENT`-only) is completely unchanged in meaning and in every other call site -- this is strictly an addition to the walk's "should I try the parent" condition, not a change to what counts as genuine absence at any single level. The correction was verified against the exact same Windows fixtures used originally (identical results, confirming no Windows regression) before being committed; the actual Linux behavior can only be confirmed by real CI, which this section's own commit records.

---

## 11. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean (no issues on first run this round).
- `npm run test:fast` — **361/361 passing**, 28 files (up from 346/28 — 15 new tests in `reconcile.test.ts`; all 346 pre-existing tests unchanged). Re-confirmed after the Section 10 correction.
- `npm run build` — succeeds.
- `npx prettier --check organizational-learning/` — pass.
- `package-lock.json` — confirmed unchanged (`git status --short package-lock.json package.json` empty).

---

## 12. Real CI

First push, commit `edd4da9077318186c5e6c05158b2fd34432db069`: Application Build Assurance `#220` **FAILED** (`Fast Tests` job, 3 failures -- see Section 10). Markdown Quality Gate `#1824` and Full Assurance `#93` both `SUCCESS` on that same head (neither depends on the Fast Tests job). This genuine failure is recorded here rather than omitted.

Second push (the Section 10 correction), commit `289e22a6863b2f70abc5508e8347da1893776d6e`: all three applicable workflows `SUCCESS`, independently confirmed via `gh api ... --jq .conclusion` (not merely a watch-command exit code, after the first push's discrepancy) --

- Team LIPS Application Build Assurance `#221` — `SUCCESS`, including the `Fast Tests (vitest)` job specifically.
- Team LIPS Markdown Quality Gate `#1825` — `SUCCESS`.
- Team LIPS Full Assurance `#94` — `SUCCESS`, real run, not suppressed.

All three applicable workflows passed on the corrected head.

---

## Required return summary

- **Files changed:** 2 modified files (`organizational-learning/scripts/reconcile.mjs`, `organizational-learning/tests/reconcile.test.ts`); 0 new files; 0 dependencies added; `package-lock.json` unchanged.
- **S5-F-06 implementation:** `classifyMissionDirectoryPresence` now walks upward from the mission directory path (`findDeepestExistingAncestorByLstat`, a new small helper) to find the deepest actually-existing ancestor, and validates that ancestor is a real, resolvable directory (via following `statSync`) before trusting anything below it as genuinely absent. A new `INVALID_ANCESTRY` status maps to the existing, unmodified `INVALID_OR_UNSAFE` fail-closed path via one new fixed condition label.
- **Ordinary-file receipt-root result:** now `INVALID_ANCESTRY` / `INVALID_OR_UNSAFE`, never `ABSENT` / `ELIGIBLE_UNPROCESSED` — Codex's exact reproduction is resolved.
- **Genuine-absence result:** unaffected — a truly absent receipts directory (or mission subdirectory) beneath valid ancestry still classifies `ELIGIBLE_UNPROCESSED`.
- **Invalid-ancestry result:** both a non-directory ancestor and a dangling/unresolved ancestor *above* `receiptsDir` (not just `receiptsDir` itself) correctly fail closed via the same general algorithm, with no special-casing.
- **S5-F-05 regression:** unchanged — the exact dangling-final-entry fixture remains `INVALID_OR_UNSAFE`.
- **S5-F-01 through F-04 regression:** all unaffected; S5-F-01/F-02 confirmed via dedicated regression tests, S5-F-03/F-04 confirmed via their full, untouched test suites passing unchanged.
- **Stage 2A regression:** unchanged — `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.
- **Broader reconciliation result:** `NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED`, `FAILED_RETRYABLE`, intermediate recovery, deterministic replay, and bounded lock ownership all remain unchanged and passing.
- **Local verification:** typecheck/lint/Fast Gate (361/361)/build/Prettier all pass; deliberate break/restore proof confirms genuine, precisely-scoped regression detection (exactly 8 of 64 tests affected).
- **Real CI:** the first push (`edd4da9`) genuinely **failed** real Linux CI (`Application Build Assurance #220`, 3 Fast Test failures, still fail-closed in effect, not a safety regression -- Section 10). Corrected, re-verified locally, and re-pushed (`289e22a`); all three applicable workflows `SUCCESS` on the corrected head, independently confirmed via direct API query -- `Application Build Assurance #221` (including `Fast Tests` specifically), `Markdown Quality Gate #1825`, `Full Assurance #94` (Section 12).
- **Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation, no candidate/promotion/receipt/closure-evidence/context-pack file touched, `assertPhysicallyContained` unmodified. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.

---

## Stop statement

**STAGE 5 F-06 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the single authorized narrow correction (S5-F-06: invalid receipt-directory ancestry must never be treated as genuine absence) was implemented and proved, generalizing rather than special-casing the affected logic, reusing the exact accepted physical-containment primitive unmodified, and introducing no new reconciliation state beyond one internal presence status already mapped to the existing `INVALID_OR_UNSAFE` fail-closed path. No Stage 6 work, no automated extraction, no provider/scheduler/publisher, no promotion, no governance/Product Truth/production mutation, and no authority effect occurred. Stage 6 is not authorized by this report. PR #589 is not merged. `SB-P-1.12` remains not activated.
