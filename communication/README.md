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
instruction-1.md
report-1.md
instruction-2.md
report-2.md
```

The numbering may continue for as many exchanges as the mission requires.

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

## Live Communication Rules

`communication/live/` contains only current, active communication.

Use:

- `instruction.md` for the first instruction from Mission Control.
- `report.md` for the first response from the assigned specialist AI.
- Numbered follow-up pairs for additional exchanges.

Examples:

```text
instruction-1.md
report-1.md
instruction-2.md
report-2.md
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
Instruction-1
Report-1
Instruction-2
Report-2
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

communication/live/instruction-1.md

Commit:

<full commit SHA>

Pull command:

git pull origin main

Then paste this to <Specialist AI>:

Pull the latest main branch.

Read and execute:

communication/live/instruction-1.md

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

## Pull and Push Visibility Rule

Claude Code, Codex, and other authorized specialist AIs may commit and push automatically when the active instruction authorizes repository writes.

Git commands must be shown to the Founder only when Founder involvement is required.

- Provide `git pull origin main` when the Founder must refresh a local repository before handing work to a specialist AI.
- Provide push commands only when the Founder must perform the push manually.
- Do not show unnecessary Git commands when the AI has already committed and pushed successfully.
- AI-to-AI instructions and reports remain in the repository even when the Founder performs a required pull or push.

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
