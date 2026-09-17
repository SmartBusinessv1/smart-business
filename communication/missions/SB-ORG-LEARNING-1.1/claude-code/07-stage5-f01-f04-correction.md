# SMART BUSINESS — CLAUDE CODE STAGE 5 F-01 THROUGH F-04 CORRECTION

# SB-ORG-LEARNING-1.1 — Stage 5: S5-F-01 through S5-F-04 Narrow Correction

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `5 — Independent verification / failure-path assurance correction`
**Actor:** Claude Code — authorized narrow correction builder
**Status:** `STAGE 5 F-01/F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-18
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/25-stage5-f01-f04-correction-authorization.md`
**Independent verifier finding record:** `communication/missions/SB-ORG-LEARNING-1.1/codex/08-stage5-independent-failure-path-assurance.md` (reviewed head `d1f5a429d36ddb62f215b5f7412a9ff06d5deab1`, disposition `FAIL`; preserved unchanged, not modified by this report)
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Correct exactly the four independently reproduced reconciliation defects Codex's Stage 5 report identified — `S5-F-01` (receipt physical-indirection bypass), `S5-F-02` (receipt-directory failure collapsing to "no receipts"), `S5-F-03` (envelope physical-indirection bypass), `S5-F-04` (duplicate/conflicting envelope processing intent) — inside the existing bounded reconciliation architecture. No redesign, no Stage 6, no scope expansion.

---

## 2. Pre-execution verification

1. Fetched `origin`; fast-forwarded `mission/SB-ORG-LEARNING-1.1-stage2` from `9a15466` to the Mission Control handoff head `7689b96d0eb0c037f78fd2ce936e6a30af2c48e0` (one new commit: the Stage 5 correction authorization). Inspected it before relying on it.
2. Confirmed PR #589 `OPEN`, unmerged, mergeable, head exactly `7689b96...`.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, `communication/live/report.md`, the Stage 5 correction authorization (`mission-control/25-...`), Codex's independent failure-path assurance report (`codex/08-...`), the current `reconcile.mjs`, `envelope-location.ts`, `receipt-store.ts`, `path-safety.ts`, and the existing reconciliation/receipt-store test suites.
5. Confirmed via `git log` that none of the files this correction touches had changed since my own prior Stage 4A correction commit `0a3f9f8`.

---

## 3. Files changed

| Path                                                       | Change   | Purpose                                                                                                                                             |
| ------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizational-learning/lib/receipt-store.ts`              | modified | Exports the existing, unmodified `assertPhysicallyContained` primitive so reconciliation and envelope-location code can reuse it instead of forking a parallel algorithm. Logic unchanged; only visibility changed. |
| `organizational-learning/sources/envelope-location.ts`      | modified | S5-F-03: approval now requires physical containment (reusing `assertPhysicallyContained`) in addition to the existing lexical check.                |
| `organizational-learning/scripts/reconcile.mjs`             | modified | S5-F-01/F-02: `listReceiptsForMission` rewritten to distinguish genuine absence from physical-indirection failure, enumeration failure, and receipt-shaped non-file entries, all fail-closed. S5-F-03: `collectJsonFiles` refuses to recursively traverse indirection escaping its own starting point. S5-F-04: `planReconciliation` groups valid envelopes by processing identity and deduplicates/conflict-detects before classification, using `computeRevisionHash`. |
| `organizational-learning/tests/envelope-location.test.ts`   | modified | +2 tests: direct physical-containment-bypass proof and a genuine-non-indirected control case.                                                       |
| `organizational-learning/tests/reconcile.test.ts`           | modified | +12 tests across four new describe blocks (S5-F-01, S5-F-02, S5-F-03, S5-F-04); existing tests unchanged.                                            |

No dependency was added. `package-lock.json` is confirmed unchanged. No candidate, promotion, receipt, closure evidence, or workflow file was modified. `vitest.fast.config.ts` was not modified — no new test *file* was created this round, only tests added to the two already-registered files.

---

## 4. S5-F-01 — receipt physical-indirection boundary

**Finding:** `listReceiptsForMission` enumerated/read the mission receipt directory via plain `readdirSync`/`readFileSync`, which transparently follow a symlink/junction — unlike Stage 1's own `readReceiptIfExists`, which calls `assertPhysicallyContained` first. A pre-planted junction at the derived mission storage directory could silently redirect reconciliation to attacker-controlled outside-root receipt state.

**Correction:** `assertPhysicallyContained` (Stage 1's exact, unmodified physical-containment primitive) is now exported from `receipt-store.ts` and called on the mission directory itself, and again on every individual candidate `.json` entry within it, before any content is read. Any physical-containment failure is reported as an `issue` and reaches the existing fail-closed `INVALID_OR_UNSAFE` path — outside-root state can never reach classification.

**Proof:**

- A junction planted at the hashed mission-storage directory, pointing to an outside directory, was tested with three outside states — empty, a valid matching `SCREENED` receipt, and a valid matching `VALIDATION_FAILED` receipt. In every case the result is `INVALID_OR_UNSAFE`, never `ELIGIBLE_UNPROCESSED`/`ALREADY_PROCESSED`/`FAILED_RETRYABLE` — exactly reversing Codex's reproduced table. A synthetic secret-shaped canary placed in the outside receipt's `mission_id` never appears in the classification result.
- A direct test confirms the exact Stage 1 `assertPhysicallyContained` primitive (imported, not reimplemented) is what reconciliation now calls, by invoking it directly against the same junction fixture pattern used in `receipt-store.test.ts` and confirming it throws with the identical `/filesystem indirection/` message.
- The full, unmodified `receipt-store.test.ts` suite (Stage 1's own physical-containment regression tests) continues to pass unchanged — the export is the only change to that file, behavior is identical.

---

## 5. S5-F-02 — receipt-directory failure must not mean "no receipts"

**Finding:** Every enumeration failure — genuine absence, `ENOTDIR` from an ordinary file at the hashed path, permission/I/O error, or a receipt-shaped non-file entry like a directory named `blocked.json` — collapsed to the identical `{receipts: [], issues: []}` result, making unsafe/ambiguous durable state indistinguishable from genuine absence.

**Correction:** `listReceiptsForMission` now distinguishes, in order: (1) genuine absence (`!existsSync`) — the only case producing an empty result with zero issues; (2) physical-containment failure on the directory (S5-F-01, above); (3) any other enumeration failure (`ENOTDIR`, permission, I/O); (4) per entry, physical-containment failure; (5) per entry, a `.json`-named entry that is not a regular file; (6) per entry, unreadable/malformed/schema-invalid (S4A-F-02, unchanged). Every case 2–6 produces a safe `issue` that reaches the existing `INVALID_OR_UNSAFE` fail-closed branch in `classifyEnvelope`, which already runs before every work-producing branch (including reopen/supersede).

**Proof:**

- Genuine absence (receipts directory never created at all) still correctly produces `ELIGIBLE_UNPROCESSED` — a positive control confirming the fix does not over-block the ordinary first-processing case.
- An ordinary file placed at the hashed mission-directory path (`ENOTDIR` on `readdirSync`) produces `INVALID_OR_UNSAFE`, `retry_eligible: true`, never `ELIGIBLE_UNPROCESSED`.
- A directory literally named `blocked.json` inside an otherwise-normal mission directory (Codex's exact reproduction B) produces `INVALID_OR_UNSAFE`, never `ELIGIBLE_UNPROCESSED`.
- Malformed-JSON and schema-invalid receipt blocking (S4A-F-02) remain covered by the existing, unmodified "Stage 4A F-02 correction" test block, still passing.
- All diagnostics use only a fixed condition label (`ENUMERATION_FAILED`, `PHYSICAL_CONTAINMENT_VIOLATION`, `UNEXPECTED_NON_FILE_ENTRY`) plus the receipt-store's own sha256 storage key/filename — never raw content, never a parser error string.

---

## 6. S5-F-03 — envelope physical-indirection boundary

**Finding:** `isApprovedClosureEnvelopeLocation` was purely lexical (`path.relative`, no filesystem access), so a junction placed AT an approved-looking path (e.g. `communication/missions/linked`) was accepted even though it physically resolved outside the repository. Independently reproduced through both `--envelope` and `--envelopes-dir`.

**Correction (two independent layers):**

1. `isApprovedClosureEnvelopeLocation` now requires BOTH the existing lexical check AND physical containment (reusing `assertPhysicallyContained`, anchored at `<repoRoot>/communication/missions`) before returning approved — checked before the envelope file's content is ever read, independent of `ClosureEnvelopeSchema` and evidence allowlisting.
2. `collectJsonFiles` (recursive `--envelopes-dir` discovery) now refuses to descend into any nested directory entry whose physical (symlink/junction-resolved) location escapes wherever the walk itself started — a general recursion-containment invariant, defense-in-depth alongside layer 1, not a replacement for it.

**Proof:**

- A direct `--envelope` path reached through an approved-prefix junction to an outside target is rejected (`envelope location is not an approved closure-envelope location`), with a canary embedded in the outside content never appearing in the plan.
- An `--envelopes-dir` pointed directly at the same junction is rejected identically (zero work items).
- A junction nested one level inside a legitimately-discovered `communication/missions` tree, reachable only through recursion, is never even collected — `collectJsonFiles`'s anchor-escape check stops the walk before layer 1 is even reached, and the canary in the outside file never appears anywhere in the plan.
- The deliberate-regression proof (Section 9) independently confirmed layer 1 and layer 2 are genuinely independent: disabling layer 1 alone left the nested-junction test still passing, because layer 2 alone already blocks that specific case.
- Genuine, non-indirected approved-location envelopes continue to work: confirmed both by a dedicated module-level control test and by the full existing suite (Case A, Case B, the F-01 mixed test, and all Stage 4A tests) passing unchanged.

---

## 7. S5-F-04 — duplicate/conflicting envelope processing intent

**Finding:** Two distinct valid envelope files claiming the same `mission_id` + `closure_revision` each produced their own `ELIGIBLE_UNPROCESSED` work item; the CLI's path-string `Set` only removes identical path strings, not duplicate processing identity.

**Correction:** `planReconciliation` now groups every schema-valid, approved-location envelope by `mission_id::closure_revision` **before** classification, and compares each group's members by `computeRevisionHash` (Stage 2/3's existing, unmodified key-sorted-canonical-JSON sha256 hash) over the full validated envelope object — not over classification output. This is deliberate: the fingerprint/classification algorithm only consumes a subset of an envelope's fields (schema version, closure revision, evidence manifest), so comparing classification output alone would miss a material difference in a field classification does not itself read (e.g. `accepted_scope`). A group with one distinct hash classifies its single representative once; a group with more than one distinct hash emits zero work items and one safe, deterministic conflict entry naming only the `mission_id::closure_revision` identity, never raw envelope content.

**Proof:**

- Two byte-identical envelope files produce exactly one work item, and the result is byte-stable across reversed input order and replay.
- Two envelopes for the same mission/revision with a genuinely different pinned `source_snapshot_ref`/evidence produce zero work items and one conflict entry whose `reason` names the identity and contains "conflicting", with the commit SHA never echoed.
- Two envelopes differing **only** in `accepted_scope` (a field classification does not consume) are still correctly detected as conflicting and produce zero work items, deterministically, across reversed replay — directly validating that conflict detection compares full envelope content, not merely classification output.

---

## 8. Regression confirmation — accepted behavior preserved

- **Real Stage 2A no-op:** unchanged — still `ALREADY_PROCESSED`, fingerprint still `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`, byte-identical replay (Case B, unmodified, still passing).
- **NEW_CLOSURE_REVISION, reopen/supersede:** Cases D, E, F unmodified and still passing.
- **FAILED_RETRYABLE / intermediate recovery:** Cases I, J unmodified and still passing.
- **Atomic lock ownership:** Case H (both the function-level and real two-process CLI proofs) unmodified and still passing.
- **Deterministic ordering / no-authority output:** Cases L, M unmodified and still passing.
- **Stage 2 candidates, Stage 3 promotions, context-pack:** none of `organizational-learning/candidates/`, `organizational-learning/promotions/`, the context-pack script, or their tests were touched by this correction (confirmed by `git status` showing only the 5 files listed in Section 3).

---

## 9. Regression genuineness (deliberate break/restore proof)

Three deliberate, temporary regressions were introduced directly in the working tree and independently confirmed to break exactly the expected tests with no collateral damage, then restored from a pre-edit backup and reconfirmed byte-identical (clean `eslint`/`tsc`/full 336/336 Fast Tests afterward):

1. Neutered the S5-F-01 mission-directory physical-containment check in `reconcile.mjs` (`if (false) assertPhysicallyContained(...)`) → broke exactly the S5-F-01 junction test.
2. Neutered the S5-F-04 conflict branch in `reconcile.mjs` (`if (true)` instead of `if (distinctHashes.size === 1)`) → broke exactly the two S5-F-04 conflict tests.
3. Neutered the S5-F-03 physical check in `envelope-location.ts` (`if (false) assertPhysicallyContained(...)`) → broke the module-level physical-containment test and two of the three S5-F-03 integration tests.

Notably, the third regression did **not** break the "nested junction during recursive discovery" integration test — that test kept passing because `collectJsonFiles`'s independent anchor-escape defense (untouched by this regression) already stops the walk before the location predicate is ever reached. This is confirmation the two S5-F-03 layers are genuinely independent defense-in-depth, not one layer silently doing all the work.

---

## 10. Safe-diagnostic result

Every new diagnostic path follows the existing, unmodified F-03 no-raw-content principle: fixed condition labels (`PHYSICAL_CONTAINMENT_VIOLATION`, `ENUMERATION_FAILED`, `UNEXPECTED_NON_FILE_ENTRY`), the receipt-store's sha256 storage key (never the raw `mission_id`), the caller-supplied envelope path (already the existing convention for every other rejection reason), or the `mission_id::closure_revision` identity string for a conflict — never raw file content, never a parser error string. Every new test that embeds a synthetic secret-shaped canary (`AKIA...`) asserts it never appears anywhere in the rendered plan or classification result.

---

## 11. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean (one Prettier import-formatting issue auto-fixed with `--fix` before commit; no other issues).
- `npm run test:fast` — **336/336 passing**, 28 files (up from 322/28 — 14 new tests: 2 in `envelope-location.test.ts`, 12 in `reconcile.test.ts`; all 322 pre-existing tests unchanged).
- `npm run build` — succeeds.
- `npx prettier --check organizational-learning/` — pass.
- `package-lock.json` — confirmed unchanged (`git status --short package-lock.json package.json` empty).
- One full-suite run showed transient `error: unable to write file .git/objects/... Permission denied` stderr noise from a parallel ephemeral-git-repo test worker; a repeat run showed no such noise, and `git status`/`git fsck` on the real repository confirmed it was never touched (only the 5 intended files show as modified; `fsck` reported only pre-existing dangling objects, not corruption). Recorded truthfully as an observed, non-reproducible, unrelated transient condition, not silently omitted.

---

## 12. Real CI

Pending at the time this commit was authored. Recorded in a follow-up, documentation-only commit once the real GitHub Actions checks complete on this correction's head, per the standing rule not to claim CI success before it actually completes. `vitest.fast.config.ts` was not modified this round, so `full-assurance.yml`'s selective path filter is not expected to trigger from that file; whether Full Assurance runs at all depends on its filter against the actual changed file set, and the real result will be recorded here regardless.

---

## Required return summary

- **Files changed:** 5 modified files (Section 3); 0 new files; 0 dependencies added; `package-lock.json` unchanged.
- **S5-F-01 result:** reconciliation receipt discovery/read now reuses the exact, unmodified Stage 1 `assertPhysicallyContained` primitive; an outside-root receipt junction has zero influence on classification in all three tested outside-content states; a synthetic canary in outside content never echoes.
- **S5-F-02 result:** genuine absence, `ENOTDIR`, physical-indirection failure, and a receipt-shaped non-file entry are all now distinguished and fail closed to `INVALID_OR_UNSAFE`; only genuine absence still means `ELIGIBLE_UNPROCESSED`.
- **S5-F-03 result:** envelope-location approval now requires physical containment in addition to lexical approval (two independent layers, confirmed independent by the regression proof); both `--envelope` and `--envelopes-dir` junction bypasses are closed; nested recursive-discovery indirection is blocked before it is even collected.
- **S5-F-04 result:** `planReconciliation` deduplicates equivalent envelopes (by full validated content hash, not just classification output) to exactly one deterministic work item, and fails closed with zero work items plus a safe conflict entry for materially conflicting envelopes under the same identity — including a difference in a field classification itself does not consume.
- **Physical-indirection tests:** 2 new `envelope-location.test.ts` tests + 5 new `reconcile.test.ts` tests (S5-F-01 ×2, S5-F-03 ×3) directly exercise real planted Windows junctions in isolated fixtures.
- **Duplicate/conflict tests:** 4 new `reconcile.test.ts` tests (S5-F-04) cover equivalence, order-independence/replay, conflict, and conflict-replay-with-a-classification-invisible-field-difference.
- **Stage 2A regression result:** unchanged — `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.
- **Concurrency/recovery regression result:** unchanged and still passing (Cases H, I, J).
- **Local verification:** typecheck/lint/Fast Gate (336/336)/build/Prettier all pass; deliberate break/restore proof confirms genuine regression detection with no collateral damage.
- **Real GitHub CI:** see Section 12; not yet confirmed at time of writing, will be recorded in a documentation-only follow-up commit.
- **Scope confirmation:** no Stage 6, no automated extraction, no provider/scheduler/publisher, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation, no candidate/promotion/receipt/closure-evidence file touched. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.

---

## Stop statement

**STAGE 5 F-01/F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the four authorized narrow corrections (S5-F-01 receipt physical-indirection boundary; S5-F-02 fail-closed receipt-directory-failure handling; S5-F-03 envelope physical-indirection boundary; S5-F-04 duplicate/conflicting envelope deduplication) were implemented and proved, reusing existing Stage 1-3 primitives throughout (`assertPhysicallyContained`, `computeRevisionHash`) rather than forking parallel algorithms. No Stage 6 work, no automated extraction, no provider/scheduler/publisher, no promotion, no governance/Product Truth/production mutation, and no authority effect occurred. Stage 6 is not authorized by this report. PR #589 is not merged. `SB-P-1.12` remains not activated.
