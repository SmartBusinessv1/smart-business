# SMART BUSINESS MISSION CONTROL

# Instruction 1.1

**Mission ID:** SB-GOV-COMMS-1.2

**Mission Name:** Final Administrative Correction and Recurring Live Communication Housekeeping Rule

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE — CORRECTION AND PROTOCOL REFINEMENT REQUIRED

**Date:** 2026-08-01

---

# Mission Objective

Correct the live report with the verified repository synchronization state, create the corresponding `report1.1.md`, and refine the AI Communication and Handover Protocol so recurring AI-to-AI exchanges in `communication/live/` follow a numbered instruction/report sequence and are consolidated and archived when the communication or mission is formally closed.

This mission does not authorize Stage A or Stage B activation.

---

# Context

The current live communication cycle began with:

- `communication/live/instruction.md`
- `communication/live/report.md`

Mission Control issued a further instruction after reviewing the report. Therefore the next instruction must be stored as:

- `communication/live/instruction1.1.md`

Codex shall respond through:

- `communication/live/report1.1.md`

Further exchanges shall continue in sequence:

- `instruction1.2.md` → `report1.2.md`
- `instruction1.3.md` → `report1.3.md`
- and so on.

The verified repository state that must replace the outdated publication status is:

- Commit SHA: `7b43f75`
- Commit message: `Refine AI communication, Git authority, and archive governance`
- Push: SUCCESS
- Branch: `main`
- Remote synchronization: SUCCESS
- Working tree: CLEAN
- Stage A activation: NOT AUTHORIZED
- Stage B activation: NOT AUTHORIZED
- Next action: Final Mission Control verification

Required status:

`REFINEMENTS APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED`

---

# Execute According To

Execute according to:

- Lighthouse Constitution
- Smart Business Master System Manifesto
- approved repository instructions
- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/missions/SB-GOV-COMMS-1.2/`
- the current live instruction/report templates
- exact-file staging and repository safety rules

---

# Scope

Codex is authorized to:

1. Correct the Git and repository status in `communication/live/report.md`.
2. Create `communication/live/report1.1.md` using the report template structure.
3. Refine `communication/AI_Communication_and_Handover_Protocol.md` to add the recurring live communication housekeeping rule.
4. Update the SB-GOV-COMMS-1.2 mission records as required.
5. Prepare exact staged amendments if a later live instruction file update is required.
6. Return exact Founder pull or push commands directly in chat whenever Founder synchronization or publication action is required.

Codex is not authorized to activate Stage A or Stage B.

---

# Required Work

## 1. Correct `communication/live/report.md`

Replace the outdated Git status with:

```text
Commit SHA: 7b43f75
Commit message: Refine AI communication, Git authority, and archive governance
Push status: SUCCESS
Branch: main
Remote synchronization: SUCCESS
Working tree: CLEAN
Stage A activation: NOT AUTHORIZED
Stage B activation: NOT AUTHORIZED
Next action: Final Mission Control verification
```

Keep the completion status as:

```text
REFINEMENTS APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED
```

Do not alter the substantive mission findings.

## 2. Create `communication/live/report1.1.md`

Use the report template and record:

- Mission ID
- Mission name
- From: Codex
- To: Mission Control
- correction applied to `report.md`
- protocol housekeeping refinement applied
- exact files changed
- validation results
- Git status
- Stage A and Stage B remain inactive
- readiness for final Mission Control verification

Required final status:

```text
CORRECTIONS APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED
```

## 3. Add Recurring Live Communication Housekeeping Rule

Refine `communication/AI_Communication_and_Handover_Protocol.md` with a new section governing recurring AI communication inside `communication/live/`.

The rule shall establish:

### Initial Exchange

- first instruction: `communication/live/instruction.md`
- first response: `communication/live/report.md`

### Recurring Exchange

When Mission Control or Founder issues another instruction based on the current report:

- next instruction: `instruction1.1.md`
- next response: `report1.1.md`

Further exchanges continue sequentially:

- `instruction1.2.md` → `report1.2.md`
- `instruction1.3.md` → `report1.3.md`
- continue monotonically without reusing numbers.

### Pairing Rule

Each numbered instruction must have exactly one corresponding numbered report with the same suffix.

Examples:

- `instruction1.4.md` pairs with `report1.4.md`
- `instruction1.5.md` pairs with `report1.5.md`

A report may not respond to a differently numbered instruction.

### Ordering Rule

The live folder shall preserve chronological communication order.

No file may be silently overwritten to conceal an earlier instruction or report.

Corrections shall be issued through the next numbered instruction/report pair unless Mission Control explicitly authorizes an administrative correction to the base template files.

### Founder Brief and Chat Command Rule

Whenever a pull, push, branch synchronization, commit, publication, or other Founder Git action is required:

- exact commands must be shown directly in Founder chat;
- the same commands may also appear in the Founder Brief;
- the Founder shall not be required to open a repository file merely to obtain commands;
- completion evidence expected from the Founder must be stated in chat.

This rule applies to instructions, reports, corrections, publication, archival, and synchronization.

## 4. Add Live Communication Closure and Consolidation Rule

When Founder or Mission Control confirms that the communication cycle or mission is complete, the assigned AI shall:

1. verify that all instruction/report pairs are complete;
2. verify that there is no unresolved active instruction;
3. verify that final repository, commit, pull-request, decision, and follow-up references are recorded;
4. consolidate the complete live communication sequence into the mission archive as one coherent communication record and one coherent final report;
5. preserve the chronological content of all base and numbered instruction/report files;
6. move the consolidated archive record to the approved communication archive path;
7. remove temporary numbered live files such as `instruction1.1.md`, `report1.1.md`, and later numbered files only after archive verification succeeds;
8. restore `communication/live/instruction.md` to the approved instruction template;
9. restore `communication/live/report.md` to the approved report template;
10. verify that no numbered live communication files remain;
11. update `communication/live/` to a clean default state ready for the next communication cycle;
12. commit and push the closure/archive change when authorized, or provide exact Founder commands directly in chat.

## 5. Required Archive Outputs

The archive shall contain at minimum:

- one consolidated communication file containing the complete chronological instruction/report exchange;
- one final consolidated report containing outcomes, decisions, repository references, unresolved follow-ups, closure authority, and archive verification;
- reference to the original mission ID;
- closure authority and date;
- final commit and pull-request references;
- confirmation that the live folder was reset to templates.

Suggested names:

```text
communication/archive/[MISSION-ID]/communication-record.md
communication/archive/[MISSION-ID]/final-report.md
```

Use the repository's canonical archive path if different.

## 6. Live Folder Final State

After confirmed closure and successful archival, `communication/live/` shall contain only the approved default live files and any separately approved index file.

At minimum:

```text
communication/live/instruction.md
communication/live/report.md
```

Both must be restored to their approved templates.

The assigned AI shall brief the Founder in chat with:

```text
Communication is completed and archived.
The live folder has been returned to the default template state and is ready for new communication.
```

The brief shall also include any required pull command and the expected verification output.

## 7. Archive Safety

The consolidation process must not:

- lose any instruction or report content;
- silently delete unresolved decisions;
- rewrite historical meaning;
- archive while an instruction remains unanswered;
- leave duplicate active authority in both live and archive locations;
- remove numbered files before archive content and Git traceability are verified.

## 8. Protocol Change Log

Append a Draft 1.3 entry describing:

- recurring live instruction/report numbering;
- exact pair matching;
- consolidation at closure;
- archive creation;
- live-folder template restoration;
- Founder-chat pull/push command visibility.

Do not activate the protocol.

---

# Constraints

Codex shall not:

- activate Stage A;
- activate Stage B;
- modify application code;
- push directly to `main` under AI authority;
- merge its own work;
- remove numbered live files before archive verification;
- treat communication closure as authorized without explicit Founder or Mission Control confirmation;
- omit required Founder commands from chat when Founder action is needed.

---

# Deliverables

Codex shall produce:

1. corrected `communication/live/report.md`;
2. new `communication/live/report1.1.md`;
3. refined `communication/AI_Communication_and_Handover_Protocol.md`;
4. updated SB-GOV-COMMS-1.2 mission records;
5. protocol change-log entry for Draft 1.3;
6. validation report;
7. exact Founder PowerShell pull or push commands directly in chat when required;
8. readiness statement for final Mission Control verification.

---

# Validation

Verify:

- `report.md` contains commit `7b43f75` and successful synchronization state;
- `report1.1.md` exists and matches this instruction;
- recurring numbering rule is present;
- instruction/report pairing rule is present;
- Founder-chat command rule is present;
- closure consolidation rule is present;
- archive output rule is present;
- numbered live files are removed only after archive verification;
- base templates are restored at closure;
- protocol remains draft and inactive;
- Stage A remains unauthorized;
- Stage B remains unauthorized;
- Markdown quality gate passes;
- `git diff --check` passes.

---

# Git Boundary

Current approved instructions remain controlling.

If Codex cannot commit or push automatically, it shall provide exact Founder commands directly in chat and in the Founder Brief.

If a pull is required after this instruction is written to GitHub, Founder chat must include the exact pull commands.

---

# Completion Status

Codex shall conclude `communication/live/report1.1.md` with:

```text
CORRECTIONS APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED
```
