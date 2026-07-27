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
    └── .gitkeep
```

As missions progress, `communication/live/` may also contain numbered follow-up files such as:

```text
instruction-1.1.md
report-1.1.md
instruction-1.2.md
report-1.2.md
```

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

---

## Live Communication Rules

`communication/live/` contains only current, active communication.

Use:

- `instruction.md` for the current instruction from Mission Control.
- `report.md` for the current response from the assigned specialist AI.
- Numbered follow-up pairs when back-and-forth communication is required.

Examples:

```text
instruction-1.1.md
report-1.1.md
instruction-1.2.md
report-1.2.md
```

Each instruction and report should clearly identify:

- Mission ID
- Mission name
- Sender
- Recipient
- Status
- Date

Do not place unrelated missions in the same instruction or report file.

---

## Archive Rules

When communication is complete and the mission has been accepted, postponed, cancelled, or otherwise closed:

1. Create a mission folder inside `communication/archive/`.
2. Move the completed instruction/report set into that folder.
3. Name the archive folder using the mission ID.

Example:

```text
communication/archive/SB-INF-1.2/
├── instruction.md
├── report.md
├── instruction-1.1.md
└── report-1.1.md
```

Archived communication is historical evidence and should not be rewritten except to correct an obvious administrative error.

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
