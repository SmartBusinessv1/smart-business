# Founder Brief

- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED

## Mission

SB-GOV-COMMS-1.0 — AI Communication and Git Automation Governance Draft

## Current Status

The protocol and exact `AGENTS.md` amendment proposal are drafted but not active.

## What Is Proposed

Authorized AIs could fetch, fast-forward, work on a named mission branch, stage exact files, commit, push that mission branch, and open or update a pull request only when an explicit Mission Control mission permits it.

## Security Implications

Automation would gain limited branch-writing capability. Direct AI push to `main`, self-merge, force push, history rewriting, unrelated staging, silent conflict resolution, and review bypass remain prohibited.

## What Remains Human-Controlled

Founder decisions, governance approval, exceptions, runtime verification, Mission Control review, protocol activation, and merge through the approved repository process remain human-controlled.

## What You Need to Do Now

Review the draft. If it is ready for Mission Control review, publish only the exact files below.

## PowerShell Commands

```powershell
git branch --show-current
git status --short
git diff --check

git add `
  "communication/AI_Communication_and_Handover_Protocol.md" `
  "communication/live/report.md" `
  "communication/missions/SB-GOV-COMMS-1.0/README.md" `
  "communication/missions/SB-GOV-COMMS-1.0/decision-log.md" `
  "communication/missions/SB-GOV-COMMS-1.0/handover-log.md" `
  "communication/missions/SB-GOV-COMMS-1.0/codex/proposed-AGENTS-amendment.md" `
  "communication/missions/SB-GOV-COMMS-1.0/codex/draft-report.md" `
  "communication/missions/SB-GOV-COMMS-1.0/founder/draft-founder-brief.md"

git diff --cached --check
git diff --cached --stat
git commit -m "Draft AI communication and Git automation governance"
git push origin main
git status
git log -1 --oneline
```

## What Success Looks Like

The draft is available to Mission Control on `main`, the working tree is clean, and no Git automation authority has been activated.

## What to Send Back

Send the commit SHA, push output, and Mission Control review result.

## Do Not Do

- Do not edit `AGENTS.md` yet.
- Do not activate the protocol.
- Do not enable direct AI pushes to `main`.
- Do not use force push.
- Do not stage unrelated files.
