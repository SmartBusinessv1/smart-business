# SB-GOV-COMMS-1.2 — Final Review Refinement Instruction

- **Status:** APPROVED WITH REQUIRED REFINEMENTS
- **Mission:** Controlled AI Git Authority and Communication Archive Refinement
- **Current owner:** Codex
- **Current stage:** Final draft refinements required before Founder approval and Stage A activation
- **Repository:** `SmartBusinessv1/smart-business`
- **Branch:** `main`
- **Activation:** NOT AUTHORIZED

## Mission Control Instruction

Codex shall refine the draft protocol and revised exact amendments according to the following requirements before any live instruction file is changed.

### 1. Activation wording

For the final activation version, replace proposal language with governing language:

> This protocol establishes GitHub as the durable communication and handover layer between authorized Smart Business AI participants.

The draft may remain proposal language until activation, but the Stage A activation mission must apply the governing wording.

### 2. Approved-protocol reference

Replace references to an “active protocol” with:

> the Founder- and Mission Control-approved AI Communication and Handover Protocol

Apply this precision wherever needed in the proposed amendments.

### 3. Mission branch base verification

Add:

> A new mission branch shall be created only from the Mission Control-authorized base branch after that base has been fetched and verified current.

The handover shall record:

- base branch;
- base commit SHA;
- mission branch;
- mission branch starting SHA.

### 4. Remote identity verification

Add a mandatory preflight check that the configured remote identity matches the authorized repository.

Required command:

```powershell
git remote get-url origin
```

A mismatched remote requires a stop report.

### 5. Exact staged-file verification

Before commit, require:

```powershell
git diff --cached --name-status
```

The staged file list must match the authorized scope exactly. Unexpected files, deletions, or renames require a stop report.

### 6. Secret-check requirement

Before commit, the AI shall run the repository’s approved secret-detection or security check where available.

If no approved automated check exists, the AI shall inspect staged changes for credentials, tokens, keys, passwords, and environment values and record that limitation in the handover.

### 7. Pull-request capability fallback

Add:

> Where the AI can commit and push but cannot create a pull request, it shall record the pushed branch and commit SHA, then provide the Founder or Mission Control with the exact PR creation action required.

Lack of PR-creation capability does not authorize direct push to `main`.

### 8. Archive rule for associated pull requests

A communication folder may be archived only when every associated pull request is:

- merged;
- closed; or
- explicitly accepted by Mission Control as an open follow-up reference.

Any open follow-up pull request must be recorded in the archived README.

### 9. Link preservation after archive

Before archiving, identify repository links pointing to the active communication path.

Where required, update those links or leave an approved redirect/index record at the former active location.

The active and archive locations must not both present themselves as authoritative mission communication.

### 10. Git traceability during archive move

Add:

> The archive operation shall preserve all file content and Git traceability. No communication record may be omitted from the archive commit.

The AI shall verify the complete moved-file list before commit.

### 11. Protocol activation metadata

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

### 12. Correct Stage A scope

Stage A shall include five files:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `AGENTS.md`
- `CLAUDE.md`
- `CHATGPT.md`
- `communication/README.md`

The branch-protection verification record must already exist or be created under the same activation mission before these five files become active.

### 13. Stage B contradiction audit

Stage B must verify:

- no remaining statement says Codex or Claude can “never commit” or “never push” without the controlled exception;
- no workflow permits direct push to `main`;
- no workflow permits self-merge;
- both workflows reference the same approved protocol and `AGENTS.md`;
- both workflows preserve Founder, authorized human maintainer, or separately approved merge authority.

## Authorized Draft Changes

Codex may update only:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/missions/SB-GOV-COMMS-1.2/codex/revised-exact-amendments.md`
- the SB-GOV-COMMS-1.2 mission communication records
- `communication/live/report.md`

Do not modify the five Stage A live files or the two Stage B EOS workflows.

## Required Validation

Codex shall verify:

- all thirteen refinements are present;
- Stage A is defined as five files;
- Stage B contradiction-audit criteria are explicit;
- the protocol remains `DRAFT — MISSION CONTROL REVIEW REQUIRED`;
- no live instruction file is modified;
- Markdown quality gate passes;
- `git diff --check` passes.

## Git Boundary

Current approved instructions still prohibit automatic AI commit and push for this mission.

Codex shall prepare exact Founder PowerShell commands directly in chat and in the Founder Brief.

## Final Handover

After refinement, Codex shall return:

- updated protocol version and status;
- exact files changed;
- validation results;
- confirmation that Stage A and Stage B remain inactive;
- exact Founder publication commands;
- readiness for final Mission Control verification.
