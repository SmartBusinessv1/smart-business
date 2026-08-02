# Smart Business AI Communication Workflow

## Purpose

The `communication/` directory is the official repository-based communication channel between Mission Control and specialist AIs.

This allows the Founder–Mission Control chat to remain an executive governance space while operational AI communication is version-controlled, auditable, and available to every authorized AI working on Smart Business.

---

## Structure

```text
communication/
├── README.md
├── live/
│   ├── instruction.md
│   └── report.md
└── archive/
    └── <MISSION-ID>/
        └── communication.md
```

As missions progress, `communication/live/` may also contain numbered follow-up files such as:

```text
instruction1.1.md
report1.1.md
instruction1.2.md
report1.2.md
```

The initial exchange uses `instruction.md` and `report.md`. Each continuation uses exactly one matching numbered pair, beginning with suffix `1.1` and incrementing monotonically (`1.2`, `1.3`, `1.4`, and so on). An instruction and its report must share the exact suffix.

---

## Operating Model

### Founder ↔ Mission Control

The Founder–Mission Control chat is reserved for:

- Founder vision
- Governance
- Product priorities
- Mission authorization
- Mission acceptance
- Strategic decisions
- Roadmap decisions

### Mission Control ↔ Specialist AIs

Operational communication happens in this repository.

Mission Control writes:

- Mission instructions
- Clarifications
- Founder decisions
- Scope corrections
- Acceptance conditions

Specialist AIs write:

- Investigation reports
- Implementation reports
- Questions
- Blockers
- Completion evidence
- Risks and recommendations

The repository is the official operational record for AI-to-AI communication. Chat is used to notify the Founder of repository activity and provide a concise Founder Brief.

---

## Historical Proposal Containment

Mission packages under `communication/missions/` may include preserved historical work and must not be assumed active from location alone.

`SB-GOV-COMMS-1.0` and `SB-GOV-COMMS-1.1` are contained, non-governing, non-executable proposal packages. Their binding containment index is `communication/missions/SB-GOV-COMMS-SUPERSEDED-PROPOSALS.md`. Current communication authority is the active `communication/AI_Communication_and_Handover_Protocol.md` Version 1.0 and the approved SB-GOV-COMMS-1.2 archive record.

---

## Live Communication Rules

`communication/live/` contains only current, active communication.

Use:

- `instruction.md` for the first instruction from Mission Control.
- `report.md` for the first response from the assigned specialist AI.
- Numbered follow-up pairs for additional exchanges.

Examples:

```text
instruction1.1.md
report1.1.md
instruction1.2.md
report1.2.md
```

Each instruction and report must clearly identify:

- Mission ID
- Mission name
- Sender
- Recipient
- Status
- Date

Do not place unrelated missions in the same instruction or report file.

Numbered communication files must preserve chronological order. Their numeric suffix reflects sequence, not mission phase or priority.

No active instruction or report may be silently overwritten. Base templates are restored only after explicit closure, reconciliation of provisional fields, archive creation, and archive verification.

---

## Archive Rules

When communication is complete and the mission has been accepted, postponed, cancelled, or otherwise closed:

1. Create a mission folder inside `communication/archive/`.
2. Combine all mission instruction and report files into one chronological record.
3. Save the complete record as:

```text
communication/archive/<MISSION-ID>/communication.md
```

4. Preserve the exchange in alternating chronological order:

```text
Instruction
Report
Instruction1.1
Report1.1
Instruction1.2
Report1.2
...
```

5. Clearly label every section with its original source file.
6. Include every instruction and every report, even when counts differ. For example, a mission may contain ten instructions and eleven reports.
7. Remove mission-specific numbered files from `communication/live/` only after the combined archive has been created and verified.
8. Restore reusable templates in:

```text
communication/live/instruction.md
communication/live/report.md
```

Archived communication is historical evidence and should not be rewritten except to correct an obvious administrative error.

The earlier two-file archive model using separate `instruction.md` and `report.md` files is retired for future missions. Existing historical archives may remain unchanged unless Mission Control explicitly authorizes normalization.

---

## Founder Notification Standard — Instruction Issued

Whenever Mission Control or another authorized AI writes an instruction for a specialist AI, the response to the Founder must use this format:

```text
Created:

communication/live/instruction1.1.md

Commit:

<full commit SHA>

Pull command:

git pull origin main

Then paste this to <Specialist AI>:

Pull the latest main branch.

Read and execute:

communication/live/instruction1.1.md

Use the repository communication workflow only.

Brief to Founder:

- <minimum three concise bullets>
- <summarize objective, scope, and constraints>
- <maximum ten bullets>
```

Rules:

- Show the exact created file path.
- Show the full commit SHA.
- Provide a pull command only when the Founder must pull manually.
- Provide the exact minimal handoff prompt the Founder must paste into the specialist AI.
- Include a Founder Brief with no fewer than three and no more than ten bullets.
- The brief must summarize the instruction, not repeat the full document.

---

## Founder Notification Standard — Specialist Report Received

Whenever a specialist AI completes work and pushes a report or mission closure, the response to the Founder must use this format:

```text
Mission closure complete.

Commit: <full commit SHA> — "<commit message>" — pushed to origin/main (<previous short SHA>..<new short SHA>).

Files changed:

- <created, updated, moved, or deleted file>
- <created, updated, moved, or deleted file>
- <state whether mission-control/mission_memory.md changed>
- <state whether product, infrastructure, authentication, database, deployment, configuration, or governance changes were made>

<MISSION-ID> CLOSED

Brief to Founder:

- <minimum three concise bullets>
- <summarize outcome, evidence, risks, and next state>
- <maximum ten bullets>
```

Rules:

- Preserve the specialist AI's factual report.
- Show the full commit SHA and commit message.
- Summarize all material file changes.
- State clearly whether `mission-control/mission_memory.md` changed.
- State clearly whether any product, infrastructure, authentication, database, deployment, configuration, or governance changes occurred.
- Include the exact mission status.
- Include a Founder Brief with no fewer than three and no more than ten bullets.
- The brief must summarize the report, not reproduce it.

---

## Controlled Git Operations and Founder Visibility

Codex and Claude Code may perform Git operations only under complete explicit mission authority defined by `AGENTS.md` and `communication/AI_Communication_and_Handover_Protocol.md`.

Authorization must identify AI, mission, repository, branch, authorized paths or scope, and commit message. Permission does not create capability.

Before commit or push, verify remote identity, base branch and SHA, current branch, authorized working-tree state, exact staged names and statuses, quality gates, whitespace checks, and secret or credential safety. Authority expires on any governing state change.

AI-authored implementation work normally uses a mission branch. Direct AI push to `main` is prohibited except for a narrowly scoped governance or communication update explicitly authorized under the temporary Founder-approved Phase 1 compensating control. Self-merge, force push, history rewriting, unrelated staging, and silent conflict resolution remain prohibited.

Recurring live exchanges use exactly paired numbered instruction and report files. At explicit closure, provisional report fields are reconciled, communication is consolidated and archived, numbered live files are removed only after verification, and base templates are restored.

When Founder action or local synchronization is required, exact PowerShell commands, document name, action, and expected evidence must be shown directly in chat. The Founder shall not need to open a Founder Brief to obtain commands.

GitHub connector operations affect the remote only; they do not update a local clone.

The temporary compensating control must be retired after branch protection is configured and verified.

---

## Relationship to Mission Control Memory

`mission-control/mission_memory.md` records the current operational state.

`communication/` records the active and archived AI communication that produced that state.

- `mission_memory.md` answers: **Where does the project stand now?**
- `communication/` answers: **What instruction and report exchange led to the current state?**

---

## Boundaries

Do not use this directory for:

- Source code
- SQL
- Secrets
- Credentials
- Temporary chain-of-thought
- Personal account information
- Unapproved governance changes

Sensitive values must never be recorded in communication files.
