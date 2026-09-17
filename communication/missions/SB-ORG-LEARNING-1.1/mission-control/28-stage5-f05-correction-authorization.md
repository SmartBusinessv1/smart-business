# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 5 S5-F-05 Narrow Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Date:** 2026-09-18

**Authority:** Smart Business Mission Control

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**PR:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Verified publication

Codex corrective re-verification report 09 was published at:

`cbb5b29c4d2cfd255d7701ce01d2c547e854bd47`

The publication preserves reviewed head:

`0c550155348611919baa1698530f783146eb364e`

and disposition:

`FAIL`

The publication changed only the durable verifier report and minimum live verifier handoff. PR #589 remains open and unmerged.

---

## 2. Residual blocker

Mission Control accepts the verifier finding:

`S5-F-05 — dangling receipt-directory indirection is treated as genuine absence`

Affected behavior:

`listReceiptsForMission()` treats `existsSync(missionDir) === false` as sufficient proof that the mission receipt-directory entry is genuinely absent.

Codex collected evidence that a dangling filesystem indirection can still exist at that exact path while `existsSync` returns false. Receipt discovery therefore returns an empty issue-free store and reconciliation may emit `ELIGIBLE_UNPROCESSED` instead of failing closed.

This is a residual gap in the S5-F-02 absence-versus-ambiguity boundary. It does not reopen S5-F-01, S5-F-03 or S5-F-04, which passed corrective re-verification.

---

## 3. Authorized correction

Claude Code is authorized to correct S5-F-05 only.

The correction must distinguish:

1. genuinely absent mission receipt-directory entry; from
2. present but dangling / unresolved / ambiguous filesystem entry.

Only genuine absence may produce an empty receipt set with no issues.

A present but dangling or otherwise unresolved entry must fail closed through the existing safe receipt-issue / `INVALID_OR_UNSAFE` path, with zero new-work intent.

Preferred implementation direction:

- use non-following filesystem metadata or an equivalent narrow mechanism capable of distinguishing missing entry from dangling indirection;
- preserve the existing Stage 1 physical-containment helper and current reconciliation states;
- do not rely on `existsSync(...) === false` alone as proof of absence;
- keep diagnostics non-sensitive and deterministic.

No new reconciliation state is required unless strictly necessary.

---

## 4. Required proof

Focused regression proof must cover at minimum:

- genuinely absent mission receipt-directory entry still allows the normal no-receipt path;
- dangling mission receipt-directory junction/symlink/equivalent fails closed where platform-supported;
- an unresolved entry does not become `ELIGIBLE_UNPROCESSED`;
- prior `ENOTDIR`, receipt-shaped non-file, malformed receipt and schema-invalid receipt cases remain fail closed;
- S5-F-01 live-target outside-root cases remain fail closed;
- genuine Stage 2A remains `ALREADY_PROCESSED` with fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`;
- S5-F-03 and S5-F-04 behavior remain unchanged;
- no raw secret-like bytes are echoed by diagnostics.

If direct dangling-indirection fixture construction is unavailable on a platform, the production branch must still be tested through an isolated deterministic equivalent without weakening the implementation.

---

## 5. Scope boundary

Allowed implementation scope is limited to receipt-discovery absence handling and focused regression tests, plus the minimum durable builder/live reporting required to record the correction.

Do not modify:

- candidates;
- promotions;
- genuine receipts;
- closure envelopes;
- context-pack semantics;
- provider/model integration;
- workflows;
- dependencies or `package-lock.json`;
- governance;
- Product Truth;
- production/customer state.

No Stage 6 authority is granted.
No automated extraction/provider/scheduler/publisher is authorized.
No automatic promotion is authorized.
No merge is authorized.

---

## 6. Required builder report

Create:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/08-stage5-f05-correction.md`

Update only the minimum builder section of `communication/live/report.md`.

Required stop:

`STAGE 5 F-05 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

`STAGE 6 — NOT AUTHORIZED`

`PR #589 — NOT READY TO MERGE`

`SB-P-1.12 — NOT ACTIVATED`
