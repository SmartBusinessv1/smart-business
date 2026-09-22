# Founder Brief — SB-P-1.12 Stage 1 Intake Pack

## Mission

SB-P-1.12 — Authority, Identity & Product Surface Foundation. Source 18 v1.2, Stage 1 — Mission Initiation and Intake Pack (documentation preparation only).

## Current Status

`STAGE 1 PACKAGE PREPARED — AWAITING MISSION CONTROL REVIEW AND FOUNDER MERGE`. Claude Code has pushed branch `mission/SB-P-1.12-stage1-intake` and opened one draft pull request into `main`, exactly as authorized. Nothing in it is canonical, and no later stage is authorized, until it is reviewed and human-merged.

## What Has Been Completed

Claude Code read the full governing source pack (Source 18 v1.2, the Communication Protocol, the Independent Verification Efficiency Protocol, Build Plan §§4–15, the Global Product Completion View, Contracts 21/22/20/17, the Phase 1 institutional-memory guide, and all 17 current OLE promotion records), verified intake safety (remote, base commit, no open PR, no conflicting branch, green CI), and drafted, on the authorized branch only:

- The DRAFT Stage 1 Intake Pack (`mission-control/02-stage1-intake-pack.md`), including a reasoned Definition Actor recommendation — **not an appointment** — with the tradeoff between using Claude Code or Codex explicitly laid out for your and Mission Control's decision.
- The FCTM opening record (`mission-control/03-stage1-fctm-open.md`) — the matrix is opened (contracts, blob SHAs, baseline) but **not populated**; row population is Stage 2 work.
- A draft workstream register, the Institutional Learning Intake Record opening, and a verification-plan preview seed naming Codex as the intended Stage 19 verifier for this authority/permissions-shaped mission.
- Updated mission README, decision log and handover log; this brief; and the Claude Code Stage 1 preparation report.

## What You Need to Do Now

1. Review the pull request (Mission Control review first is expected; your merge is the canonical act).
2. Decide the Definition Actor appointment described in Intake Pack §4 — or explicitly defer that decision to Mission Control's own review comment on the pull request.
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

Confirmation that the pull request is merged, the final merge commit SHA, and your Definition Actor decision (or confirmation that you are leaving it to Mission Control's review comment).

## Do Not Do

- Do not treat this pull request, while open, as Stage 1 activation, as a Definition Actor appointment, or as authorization for any Stage 2 work.
- Do not approve or merge this pull request as Claude Code — only you or an authorized maintainer merges.
- Do not infer production, migration or delivery authority from this package; all three flags are `NOT AUTHORIZED`.
- Do not skip reviewing Intake Pack §4 (Definition Actor) and FCTM opening §3 (Contract 7/23/24 boundary) — both are flagged recommendations, not decisions.
