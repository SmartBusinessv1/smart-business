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
├── missions/
│   └── <MISSION-ID>/          # durable canonical mission record (stays here)
└── archive/
    └── <MISSION-ID>/
        ├── communication.md    # readable chronology, index, reconciled closure
        ├── instruction.md      # byte-identical former live file(s)
        └── report.md
```

Three locations, three questions:

| Location | Purpose | Question it answers |
|---|---|---|
| `communication/live/` | Transient current handoff | *What needs attention now?* |
| `communication/missions/<MISSION-ID>/` | Durable canonical mission state (Source 18 Section 10) | *Where does this mission stand?* |
| `communication/archive/<MISSION-ID>/` | Frozen transient communication history | *What exact instruction/report exchange occurred?* |

The default live model is the reusable base pair `instruction.md` and `report.md`, reused in place for each new handoff after the preceding handoff has been durably recorded in the mission record or archived. `communication/live/` does not accumulate long-lived numbered chains by default. Monotonically numbered pairs (`instruction1.1.md` with `report1.1.md`, then `1.2`, and so on) are used only when Mission Control explicitly authorizes a multi-turn compatibility sequence for a mission; an instruction and its report must then share the exact suffix. Existing numbered live chains and archived numbered exchanges remain valid historical evidence.

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

- `instruction.md` for the current instruction from Mission Control.
- `report.md` for the current response from the assigned specialist AI.

The base pair is reused in place for each new handoff. It may be reused only after the preceding handoff has been durably recorded in `communication/missions/<MISSION-ID>/` or archived; the earlier content must already be preserved before the base pair is reused, so nothing is lost by overwriting.

Numbered follow-up pairs (`instruction1.1.md` / `report1.1.md`, then `1.2`, and so on) are a non-default option, used only when Mission Control explicitly authorizes a multi-turn compatibility sequence for a mission. When used, they must preserve chronological order; their numeric suffix reflects sequence, not mission phase or priority; and each instruction and its report must share the exact suffix.

Each instruction and report must clearly identify:

- Mission ID
- Mission name
- Sender
- Recipient
- Status
- Date

Do not place unrelated missions in the same instruction or report file.

No active instruction or report may be silently overwritten to conceal an earlier exchange. Base templates are restored only after explicit closure, reconciliation of provisional fields, archive creation, and archive verification.

---

## Archive Rules

When communication is complete and the mission has been accepted, postponed, cancelled, or otherwise closed, the assigned closure AI archives the completed `communication/live/` exchange — not the durable `communication/missions/<MISSION-ID>/` record, which stays where it is with its README status updated in place.

Every archive package uses one format with three distinct roles (defined in full in `AI_Communication_and_Handover_Protocol.md` Section 26):

1. **Readable chronology and index — `communication/archive/<MISSION-ID>/communication.md`.** The human-readable chronology of the exchange, an ordered index of the preserved source files with their Git blob SHAs and sizes, and a clearly labelled **Final Reconciled Closure** section (final disposition, closure authority and date, final commit and pull request, unresolved follow-ups, the durable mission record path where one exists, and confirmation that live templates were restored).
2. **Immutable source exchange evidence.** The exact former `communication/live/` files — `instruction.md`, `report.md`, and any authorized `instruction1.x.md` / `report1.x.md` pairs — preserved byte-identically alongside `communication.md`. These are historical evidence and are never rewritten to modernize status, paths, or later repository state.
3. **Final reconciled closure state.** Normally the labelled section inside `communication.md`; a large or specialist-heavy exchange may instead use a separate `communication/archive/<MISSION-ID>/report.md`, linked from `communication.md`. Exactly one placement per mission.

Procedure:

1. Create `communication/archive/<MISSION-ID>/`.
2. Copy every former live file into it byte-identically; include every instruction and every report even when counts differ.
3. Write `communication.md` as the chronology, the indexed manifest of those files, and the Final Reconciled Closure section.
4. Verify every former live file is represented and every Git blob SHA in the manifest matches.
5. Remove the mission-specific numbered live files only after the archive package is created and verified.
6. Restore the reusable templates `communication/live/instruction.md` and `communication/live/report.md`.

Archived communication is historical evidence and must not be rewritten except to correct an obvious administrative error. Archive packages created before this format was defined remain valid as they stand and are not retrofitted unless Mission Control explicitly authorizes normalization.

---

## Founder Notification Standard — Instruction Issued

Whenever Mission Control or another authorized AI writes an instruction for a specialist AI, the response to the Founder must use this format:

```text
Created:

communication/live/instruction.md

Commit:

<full commit SHA>

Pull command:

git pull origin main

Then paste this to <Specialist AI>:

Pull the latest main branch.

Read and execute:

communication/live/instruction.md

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
- Provide the exact minimal handoff prompt the Founder must paste into the specialist AI. This prompt is an activation pointer only — it names the repository file to read. Instruction content, clarifications, and findings live in the repository; the Founder is not asked to relay them through chat.
- Include a Founder Brief with no fewer than three and no more than ten bullets.
- The brief must summarize the instruction, not repeat the full document.

---

## Founder Notification Standard — Specialist Report Received

Whenever a specialist AI pushes a report, the response to the Founder must use this format. The headline states the **actual** state — specialist work reported is not mission closure.

```text
<HEADLINE — one of:
  "Specialist report pushed — awaiting Mission Control review."
  "Mission Control accepted — <MISSION-ID> ACCEPTED[ WITH FOLLOW-UP]."
  "Mission closed and archived — <MISSION-ID> COMPLETED — FORMALLY ACCEPTED.">

Commit: <full commit SHA> — "<commit message>" — pushed to branch <mission/MISSION-ID-slug> (<previous short SHA>..<new short SHA>).

Pull request: #<NN> → main — <OPEN | MERGED | CLOSED>. <"Not self-approved, not self-merged." when OPEN>

Files changed:

- <created, updated, moved, or deleted file>
- <created, updated, moved, or deleted file>
- <state whether mission-control/mission_memory.md changed>
- <state whether product, infrastructure, authentication, database, deployment, configuration, or governance changes were made>

Mission status: <exact Source 18 / archive status>

Brief to Founder:

- <minimum three concise bullets>
- <summarize outcome, evidence, risks, and next state>
- <maximum ten bullets>
```

Rules:

- Preserve the specialist AI's factual report.
- Use a headline that matches the real state. A pushed report with an open pull request is `awaiting Mission Control review`, not closure. Only Mission Control records acceptance; only documentation closure records `COMPLETED — FORMALLY ACCEPTED`.
- Show the full commit SHA and commit message, the mission branch, and the pull-request number and state. AI changes are pushed to the mission branch and reach `main` only through the pull request; never describe an AI change as pushed directly to `main`.
- Summarize all material file changes.
- State clearly whether `mission-control/mission_memory.md` changed.
- State clearly whether any product, infrastructure, authentication, database, deployment, configuration, or governance changes occurred.
- Include the exact mission status.
- Include a Founder Brief with no fewer than three and no more than ten bullets.
- The brief must summarize the report, not reproduce it.

---

## Controlled Git Operations and Founder Visibility

Codex and Claude Code may perform Git operations only under complete explicit mission authority defined by `AGENTS.md` and `communication/AI_Communication_and_Handover_Protocol.md`.

Authorization must identify AI, mission, repository, the branch authorization (the standard mission-branch convention or a specifically locked branch name), authorized paths or scope, and the commit-message authorization (permission to use mission-scoped descriptive commit messages or a specifically locked commit message). Exact branch text and exact commit text are required only when Mission Control specifically locks them. Permission does not create capability.

Before commit or push, verify remote identity, base branch and SHA, current branch, authorized working-tree state, exact staged names and statuses, quality gates, whitespace checks, and secret or credential safety. Authority expires on any governing state change.

AI-authored work uses a mission branch and reaches `main` only through a pull request. Direct AI push to `main` is prohibited. Self-merge, self-approval, force push, history rewriting, unrelated staging, and silent conflict resolution remain prohibited. Technical branch protection for `main` is configured and independently verified; the temporary Phase 1 compensating control was retired on 2026-08-02.

The default live exchange is the reusable base pair `instruction.md` / `report.md`. Numbered instruction/report chains are used only when Mission Control explicitly authorizes a multi-turn compatibility sequence. At explicit closure, provisional report fields are reconciled, the live exchange is archived using the one archive package format, numbered live files are removed only after verification, and base templates are restored.

When Founder action or local synchronization is required, exact PowerShell commands, document name, action, and expected evidence must be shown directly in chat. The Founder shall not need to open a Founder Brief to obtain commands.

GitHub connector operations affect the remote only; they do not update a local clone.

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
