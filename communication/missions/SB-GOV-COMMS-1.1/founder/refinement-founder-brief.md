# Founder Brief

- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED

## Mission

SB-GOV-COMMS-1.1 — Controlled AI Git Authority Refinement

## Current Status

The protocol refinement and exact instruction-file amendments are prepared but not active.

## What Changes Are Proposed

Codex and Claude Code could automatically fetch, fast-forward, create or use an authorized mission branch, stage exact files, commit, push that branch, and open or update a pull request only when an active Founder or Mission Control mission explicitly authorizes those operations.

## What Remains Protected

Direct AI push to `main`, self-merge, force-push, history rewriting, unrelated staging, silent conflict resolution, branch-protection changes, and review bypass remain prohibited.

## What You Need to Do Now

Publish this draft package for Mission Control review. This commit does not activate the amendments.

## PowerShell Commands

```powershell
git branch --show-current
git status --short
git diff --check

git add `
  "communication/AI_Communication_and_Handover_Protocol.md" `
  "communication/live/report.md" `
  "communication/missions/SB-GOV-COMMS-1.1/README.md" `
  "communication/missions/SB-GOV-COMMS-1.1/decision-log.md" `
  "communication/missions/SB-GOV-COMMS-1.1/handover-log.md" `
  "communication/missions/SB-GOV-COMMS-1.1/codex/exact-amendments.md" `
  "communication/missions/SB-GOV-COMMS-1.1/codex/refinement-report.md" `
  "communication/missions/SB-GOV-COMMS-1.1/founder/refinement-founder-brief.md"

git diff --cached --check
git diff --cached --stat
git commit -m "Refine controlled AI Git authority proposal"
git push origin main
git status
git log -1 --oneline
```

## What Success Looks Like

The draft package is available for Mission Control review, the working tree is clean, and approved instruction files remain unchanged.

## Do Not Do

- Do not apply the target-file amendments yet.
- Do not treat the draft as active Git authority.
- Do not use force push.
- Do not stage unrelated files.
