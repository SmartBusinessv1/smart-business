# Founder Brief — SB-P-1.12 Stage 1 Intake Pack

## Mission

SB-P-1.12 — Authority, Identity & Product Surface Foundation. Source 18 v1.2, Stage 1 — Mission Initiation and Intake Pack (documentation preparation only).

## Current Status

`STAGE 1 PACKAGE PREPARED, MISSION CONTROL REVIEWED, NARROW CORRECTION APPLIED — AWAITING MISSION CONTROL RE-REVIEW AND FOUNDER MERGE`. Claude Code pushed branch `mission/SB-P-1.12-stage1-intake` and opened one draft pull request (#622) into `main`. Mission Control then reviewed it and issued two decisions in a PR comment — MC-02 (Definition Actor appointment) and MC-03 (Contract 7/23/24 boundary reconciliation) — which Claude Code has now applied as narrow corrections on the same branch. Nothing in it is canonical, and no later stage is authorized, until it is (re-)reviewed and human-merged.

## What Has Been Completed

Claude Code read the full governing source pack, verified intake safety, and drafted the Stage 1 Intake Pack, the FCTM opening record, a draft workstream register, the Institutional Learning Intake opening, and a verification-plan preview seed. Mission Control reviewed that draft and decided:

- **MC-02:** Claude Code is appointed Stage 2–4 Definition Actor — **effective only upon your merge of this pull request**, not before. Mission Control also required a named *Security & Permissions Architecture specialist* to independently review Stage 7 findings (Claude Code also holds Stage 6–7 by default, and this is a material-risk mission), and preserved Codex as the intended Stage 19 verifier rather than spending it on Stage 2–4.
- **MC-03:** Contract 7 is opened in the FCTM (limited to the Product & Price Master / inventory-view / permission-integration touch points), rather than excluded as Claude Code's original draft had preliminarily read it. Contracts 23 and 24 remain a compatibility screen for Stage 2 to re-test, not a final exclusion.

Claude Code applied both decisions to the Stage 1 Intake Pack (`mission-control/02-stage1-intake-pack.md`) and the FCTM opening record (`mission-control/03-stage1-fctm-open.md`), corrected a stale README paragraph that had continued to describe the already-merged PR #621 as pending, and appended both decisions to the durable decision log with a link to Mission Control's review comment. The original Claude Code recommendations are preserved as historical record, not deleted.

## What You Need to Do Now

1. Re-review the pull request — confirm the MC-02 and MC-03 corrections were applied as Mission Control intended.
2. Name the actual Security & Permissions Architecture specialist actor for the MC-02 §4.2 separation condition (or confirm this is deferred to a Stage 2 Mission Control instruction).
3. If satisfied, merge the pull request into `main` yourself, or direct an authorized maintainer to.

Claude Code will not self-approve or self-merge this pull request.

## Where to Perform the Action

GitHub: the pull request from branch `mission/SB-P-1.12-stage1-intake` into `main`, repository `SmartBusinessv1/smart-business`. Merge there (web UI or `gh pr merge`, run by you or an authorized maintainer — not by Claude Code).

## Exact Text to Copy

If you want Mission Control (in a separate AI session) to review first, paste:

```text
Pull the latest main branch.

Review the open pull request from branch mission/SB-P-1.12-stage1-intake (Stage 1 Intake Pack for SB-P-1.12).

Use the repository communication workflow only.
```

## Files Involved

```text
communication/live/report.md
communication/missions/SB-P-1.12/README.md
communication/missions/SB-P-1.12/decision-log.md
communication/missions/SB-P-1.12/handover-log.md
communication/missions/SB-P-1.12/mission-control/02-stage1-intake-pack.md
communication/missions/SB-P-1.12/mission-control/03-stage1-fctm-open.md
communication/missions/SB-P-1.12/claude-code/01-stage1-preparation-report.md
communication/missions/SB-P-1.12/founder/01-stage1-merge-brief.md
```

## PowerShell Commands

To inspect the pull request locally before deciding:

```powershell
git fetch origin
git switch main
git pull --ff-only origin main
git log origin/mission/SB-P-1.12-stage1-intake -1 --oneline
```

To merge (only if you are performing the merge yourself, after review):

```powershell
gh pr merge <PR-NUMBER> --merge
git switch main
git pull --ff-only origin main
```

Replace `<PR-NUMBER>` with the number shown when the pull request was opened; Claude Code reports it directly in chat.

## What Success Looks Like

The pull request shows `MERGED`, `main` fast-forwards cleanly to the merge commit, both `Team LIPS Markdown Quality Gate` and `Team LIPS Application Build Assurance` are green on the merged commit, and the SB-P-1.12 mission README Stage Ledger row for Stage 1 reads as canonical once Mission Control updates it post-merge.

## What to Send Back to Mission Control

Confirmation that the pull request is merged, the final merge commit SHA, and the named Security & Permissions Architecture specialist actor for the Stage 7 separation condition (or confirmation that naming it is deferred to Stage 2).

## Do Not Do

- Do not treat this pull request, while open, as Stage 1 activation or as authorization for any Stage 2 work — MC-02's Definition Actor appointment is recorded but **not effective** until you merge.
- Do not approve or merge this pull request as Claude Code — only you or an authorized maintainer merges.
- Do not infer production, migration or delivery authority from this package; all three flags are `NOT AUTHORIZED`.
- Do not treat the MC-03 limited Contract 7 opening as pulling Contract 7's full stock/supplier/reorder feature into this mission, and do not treat the Contract 23/24 compatibility screen as a final, irrevocable exclusion.
