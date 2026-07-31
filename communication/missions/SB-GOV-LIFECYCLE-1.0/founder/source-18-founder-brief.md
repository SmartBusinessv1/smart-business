# Founder Brief

## Mission

SB-GOV-LIFECYCLE-1.0 — SB-P Mission Lifecycle and Delivery Framework Creation

## Current Status

Source 18 and its communication package are drafted. They require exact-file validation, commit, push, and Mission Control review. The source remains a draft.

## What Has Been Completed

Codex drafted the lifecycle framework, source mapping, mission README, decision log, handover log, source-creation report, and live report.

## What You Need to Do Now

Run the commands below in PowerShell. Stop if the branch is not `main`, validation fails, or unrelated changes appear.

## Where to Perform the Action

`C:\Users\91974\Documents\GitHub\smart-business`

## Exact Text to Copy

No external AI instruction is required at this stage. The next action is repository publication for Mission Control review.

## Files Involved

- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `communication/live/report.md`
- `communication/missions/SB-GOV-LIFECYCLE-1.0/README.md`
- `communication/missions/SB-GOV-LIFECYCLE-1.0/handover-log.md`
- `communication/missions/SB-GOV-LIFECYCLE-1.0/decision-log.md`
- `communication/missions/SB-GOV-LIFECYCLE-1.0/codex/source-creation-report.md`
- `communication/missions/SB-GOV-LIFECYCLE-1.0/founder/source-18-founder-brief.md`

## PowerShell Commands

```powershell
git branch --show-current
git status --short
git diff --check

git add `
  "merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md" `
  "communication/live/report.md" `
  "communication/missions/SB-GOV-LIFECYCLE-1.0/README.md" `
  "communication/missions/SB-GOV-LIFECYCLE-1.0/handover-log.md" `
  "communication/missions/SB-GOV-LIFECYCLE-1.0/decision-log.md" `
  "communication/missions/SB-GOV-LIFECYCLE-1.0/codex/source-creation-report.md" `
  "communication/missions/SB-GOV-LIFECYCLE-1.0/founder/source-18-founder-brief.md"

git diff --cached --check
git diff --cached --stat
git commit -m "Draft SB-P mission lifecycle and delivery framework"
git push origin main
git status
git log -1 --oneline
```

## What Success Looks Like

- The commit uses exactly `Draft SB-P mission lifecycle and delivery framework`.
- Push succeeds without force.
- `main` is synchronized with `origin/main`.
- The working tree is clean.
- Source 18 still says `DRAFT — MISSION CONTROL REVIEW REQUIRED`.

## What to Send Back to Mission Control

Send the commit SHA, push output, final `git status`, and confirmation that Founder and Mission Control review remain pending.

## Do Not Do

- Do not use `git add .`.
- Do not commit unrelated files.
- Do not force push.
- Do not mark Source 18 approved, locked, active, or published.
- Do not modify the legacy Project Source directory or workflow templates.
