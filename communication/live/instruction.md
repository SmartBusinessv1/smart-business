# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** SB-GOV-COMMS-1.2

**Mission Name:** Final AI Communication, Git Authority, and Archive Governance Refinement

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE — REQUIRED REFINEMENTS

**Date:** 2026-08-01

---

# Mission Objective

Refine the draft AI Communication and Handover Protocol and the revised exact staged amendments before any live instruction file is changed.

This mission authorizes draft-governance refinement only. Stage A and Stage B activation remain unauthorized.

---

# Context

Mission Control reviewed:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/missions/SB-GOV-COMMS-1.2/codex/revised-exact-amendments.md`

The overall structure is approved, but thirteen governance-precision refinements are required before Founder approval and activation planning.

The live report file was previously used incorrectly to carry instructions. `communication/live/report.md` has now been restored to its report-template state. This instruction is the authoritative live Mission Control directive.

---

# Execute According To

- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/missions/SB-GOV-COMMS-1.2/codex/revised-exact-amendments.md`
- approved repository instructions currently in force

---

# Scope

Codex may update only:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/missions/SB-GOV-COMMS-1.2/codex/revised-exact-amendments.md`
- SB-GOV-COMMS-1.2 mission communication records
- `communication/live/report.md` only when submitting the completion report

Codex shall not modify:

- `AGENTS.md`
- `CLAUDE.md`
- `CHATGPT.md`
- `communication/README.md`
- `docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md`
- `docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md`

---

# Required Work

## 1. Activation wording

For the final activation version, replace proposal language with governing language:

> This protocol establishes GitHub as the durable communication and handover layer between authorized Smart Business AI participants.

The draft may retain proposal language until activation, but the Stage A activation mission must apply the governing wording.

## 2. Approved-protocol reference

Replace references to an “active protocol” with:

> the Founder- and Mission Control-approved AI Communication and Handover Protocol

Apply this precision throughout the proposed amendments.

## 3. Mission branch base verification

Add:

> A new mission branch shall be created only from the Mission Control-authorized base branch after that base has been fetched and verified current.

The handover shall record:

- base branch;
- base commit SHA;
- mission branch;
- mission branch starting SHA.

## 4. Remote identity verification

Add a mandatory preflight requirement that the configured remote identity matches the authorized repository.

Required command:

```powershell
git remote get-url origin
```

A mismatched remote requires a stop report.

## 5. Exact staged-file verification

Before commit, require:

```powershell
git diff --cached --name-status
```

The staged list must match the authorized scope exactly. Unexpected files, deletions, or renames require a stop report.

## 6. Secret-check requirement

Before commit, the AI shall run the repository’s approved secret-detection or security check where available.

If no approved automated check exists, the AI shall inspect staged changes for credentials, tokens, keys, passwords, and environment values and record that limitation in the handover.

## 7. Pull-request capability fallback

Add:

> Where the AI can commit and push but cannot create a pull request, it shall record the pushed branch and commit SHA, then provide the Founder or Mission Control with the exact PR creation action required.

Lack of PR-creation capability does not authorize direct push to `main`.

## 8. Archive rule for associated pull requests

A communication folder may be archived only when every associated pull request is:

- merged;
- closed; or
- explicitly accepted by Mission Control as an open follow-up reference.

Any open follow-up pull request must be recorded in the archived README.

## 9. Link preservation after archive

Before archiving, identify repository links pointing to the active communication path.

Where required, update those links or leave an approved redirect/index record at the former active location.

The active and archive locations must not both present themselves as authoritative mission communication.

## 10. Git traceability during archive move

Add:

> The archive operation shall preserve all file content and Git traceability. No communication record may be omitted from the archive commit.

The AI shall verify the complete moved-file list before commit.

## 11. Protocol activation metadata

The Stage A activation mission shall set:

```text
Version: 1.0
Status: ACTIVE
Approved By: Founder
Activated By: Mission Control
Activation Commit: [SHA]
Activation Date: [DATE]
```

Preserve Draft 1.0 through Draft 1.2 in the change log and append:

```markdown
| 1.0 | SB-GOV-COMMS-ACT-1.0 | Founder-approved activation of AI communication, controlled Git authority, and archival governance | ACTIVE |
```

## 12. Correct Stage A scope

Stage A shall include five files:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `AGENTS.md`
- `CLAUDE.md`
- `CHATGPT.md`
- `communication/README.md`

The branch-protection verification record must already exist or be created under the same activation mission before these five files become active.

## 13. Stage B contradiction audit

Stage B must verify:

- no remaining statement says Codex or Claude can “never commit” or “never push” without the controlled exception;
- no workflow permits direct push to `main`;
- no workflow permits self-merge;
- both workflows reference the same approved protocol and `AGENTS.md`;
- both workflows preserve Founder, authorized human maintainer, or separately approved merge authority.

---

# Constraints

- Keep the protocol at `DRAFT — MISSION CONTROL REVIEW REQUIRED`.
- Do not activate Stage A or Stage B.
- Do not modify the five Stage A live files.
- Do not modify the two Stage B EOS workflow files.
- Do not push directly to `main` automatically under the current approved instructions.
- Do not treat this instruction as activation authority.

---

# Deliverables

Codex shall provide:

- updated draft protocol;
- updated revised exact amendments;
- updated SB-GOV-COMMS-1.2 mission communication records;
- a completed `communication/live/report.md` using the report template;
- validation results;
- exact Founder PowerShell publication commands directly in chat and in the Founder Brief;
- confirmation that Stage A and Stage B remain inactive;
- readiness statement for final Mission Control verification.

---

# Completion Status

The completion report must conclude with:

`REFINEMENTS APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED`

The mission is not complete until all thirteen refinements are present, validation passes, and no live instruction or EOS workflow file has been modified.
