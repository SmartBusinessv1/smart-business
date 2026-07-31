# Founder Brief

- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED

## What Becomes Automated After Activation

Codex and Claude Code may fetch, fast-forward, work on a specifically authorized mission branch, stage exact files, commit, push that branch, and open or update a pull request when every authorization and safety field is present.

## What Remains Prohibited

Direct AI push to `main`, self-merge, self-approval, force-push, history rewriting, unrelated staging, silent conflict resolution, branch-protection changes, and review bypass remain prohibited.

## Why Branch Protection Must Be Verified

The governance model depends on `main` rejecting direct or unsafe changes and enforcing required review and status checks. Activation is blocked until Mission Control records that verification or the Founder approves a compensating control.

## AI Communication and Archive

AI-to-AI handovers remain in mission communication folders and must include PR references. After explicit Founder or Mission Control closure, the assigned AI archives the complete communication record. Archived records are historical, non-governing, and protected from silent deletion or reactivation.

## Human Control

Founder decisions, Mission Control authorization and review, exceptions, branch-protection approval, merge authority, archive closure authority, and protocol activation remain human-controlled.

## Two-Stage Activation

Stage A activates the protocol and applies the four core instruction amendments after branch protection is verified. After Mission Control verifies behaviour, Stage B aligns the two EOS workflow documents. The two stages must not be combined into one uncontrolled change.

## Exact Publication Commands

```powershell
git branch --show-current
git status --short
git diff --check

git add `
  "communication/AI_Communication_and_Handover_Protocol.md" `
  "communication/live/report1.2.md" `
  "communication/missions/SB-GOV-COMMS-1.2/README.md" `
  "communication/missions/SB-GOV-COMMS-1.2/decision-log.md" `
  "communication/missions/SB-GOV-COMMS-1.2/handover-log.md" `
  "communication/missions/SB-GOV-COMMS-1.2/codex/revised-exact-amendments.md" `
  "communication/missions/SB-GOV-COMMS-1.2/codex/refinement-report.md" `
  "communication/missions/SB-GOV-COMMS-1.2/founder/refinement-founder-brief.md"

git diff --cached --check
git diff --cached --stat
git commit -m "Refine AI communication, Git authority, and archive governance"
git push origin main
git status
git log -1 --oneline
```

## Do Not Do

- Do not modify the six live target files.
- Do not activate AI Git authority.
- Do not create the branch-protection verification record under this mission.
- Do not archive any active mission communication.
- Do not use force push or stage unrelated files.
