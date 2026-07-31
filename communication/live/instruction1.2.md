# SMART BUSINESS MISSION CONTROL

# Instruction 1.2

**Mission ID:** SB-GOV-COMMS-1.2

**Mission Name:** Closure-State Reconciliation and Live Communication Housekeeping Refinement

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE — REFINEMENT REQUIRED

**Date:** 2026-08-01

---

# Mission Objective

Refine the Draft 1.3 AI Communication and Handover Protocol so that provisional Git and repository status recorded during an active communication cycle is reconciled only at formal communication closure.

This mission also formalizes the rule that recurring AI-to-AI exchanges use numbered instruction/report pairs and that closure consolidates the communication into the archive while restoring `communication/live/` to its default template state.

Stage A and Stage B activation remain unauthorized.

---

# Context

Current approved repository instructions still restrict Codex and Claude Code from committing and pushing automatically. As a result, active reports may correctly contain provisional fields such as:

- `Commit SHA: PENDING FOUNDER ACTION`
- `Push status: NOT PERFORMED`
- `Working tree: MODIFIED — AUTHORIZED FILES ONLY`

These provisional fields should not trigger repeated correction cycles after every Founder publication.

The correct rule is:

- provisional publication fields may remain during the active communication cycle;
- after the Founder or Mission Control declares the communication or mission complete, the assigned closure AI must reconcile all provisional fields using the final verified repository state before consolidation and archival.

---

# Execute According To

- Lighthouse Constitution
- Smart Business Master System Manifesto
- `AGENTS.md`
- `CLAUDE.md`
- `CHATGPT.md`
- `communication/README.md`
- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/live/instruction1.1.md`
- `communication/live/report1.1.md`
- existing SB-GOV-COMMS-1.2 mission records

---

# Scope

Codex may modify only:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/live/report1.1.md` only as needed to acknowledge this rule without falsely finalizing the communication
- `communication/missions/SB-GOV-COMMS-1.2/` records
- `communication/live/report1.2.md`

Codex shall not modify:

- `AGENTS.md`
- `CLAUDE.md`
- `CHATGPT.md`
- `communication/README.md`
- either EOS GitHub workflow
- application code

Stage A and Stage B remain inactive.

---

# Required Work

## 1. Add Provisional Status Rule

Add a protocol rule that during an active communication cycle, reports may contain provisional publication state, including:

- pending commit SHA;
- push not yet performed;
- working tree modified;
- Founder action required;
- remote synchronization pending.

These provisional values are valid while the communication is still active and must not cause an unnecessary new correction instruction after every Founder publication.

## 2. Add Closure-State Reconciliation Rule

Add:

> When the Founder or Mission Control explicitly declares the communication or mission complete, the assigned closure AI shall reconcile every live report before archival. All provisional Git, commit, push, synchronization, branch, pull-request, working-tree, and completion fields shall be replaced with the final verified repository state or an explicit final `NOT APPLICABLE` value.

The closure AI shall update all applicable files, including:

- `report.md`;
- `report1.1.md`;
- `report1.2.md`;
- every later numbered report created during the same communication cycle.

## 3. Define Final Status Values

At closure, provisional values such as:

```text
PENDING FOUNDER ACTION
NOT PERFORMED
MODIFIED — AUTHORIZED FILES ONLY
REMOTE SYNCHRONIZATION PENDING
```

must be replaced where applicable by verified final values such as:

```text
Commit SHA: [FINAL SHA]
Push status: SUCCESS
Branch: [FINAL BRANCH]
Remote synchronization: SUCCESS
Working tree: CLEAN
Communication status: COMPLETED
Archive status: ARCHIVED
```

Where a field genuinely does not apply, use:

```text
NOT APPLICABLE — [REASON]
```

Do not invent a successful state without repository evidence.

## 4. Preserve Historical Truth

The closure update must preserve both historical accuracy and final clarity.

Add the following requirement:

> When a provisional field is replaced at closure, the consolidated archive record shall retain the original provisional event in the chronological communication transcript while the final closure summary records the reconciled repository state.

This prevents silent rewriting of history while avoiding stale pending statuses in final reports.

## 5. Recurring Live Communication Sequence

Formalize the live exchange sequence:

```text
instruction.md
report.md
instruction1.1.md
report1.1.md
instruction1.2.md
report1.2.md
instruction1.3.md
report1.3.md
...
```

Rules:

- every numbered instruction must have the exact matching numbered report;
- numbering must increase monotonically;
- existing files must not be silently overwritten;
- a new instruction/report pair is created only for a real new communication turn;
- routine publication of already-authorized files does not itself require another correction pair unless Mission Control identifies a substantive issue.

## 6. Closure Consolidation

When the Founder or Mission Control confirms closure, the assigned closure AI shall:

1. read every live instruction and report in chronological order;
2. reconcile all provisional status fields using final verified repository evidence;
3. create one consolidated communication record preserving the full instruction/report sequence;
4. create one final closure report summarizing decisions, work, verification, final Git state, unresolved follow-ups, and archive references;
5. archive the consolidated communication and final report under the canonical communication archive path;
6. verify all source live files are represented in the archive;
7. remove all numbered `instruction1.N.md` and `report1.N.md` files only after archive verification;
8. restore `communication/live/instruction.md` and `communication/live/report.md` to their approved default templates;
9. verify no mission-specific content remains in the live templates;
10. report to the Founder:

> Communication is completed and archived. The live folder is returned to the default template state and is ready for new communication.

## 7. Archive Output Structure

The protocol shall define two final archive outputs for each closed live communication cycle:

```text
communication/archive/[MISSION-ID]/communication.md
communication/archive/[MISSION-ID]/report.md
```

`communication.md` shall preserve the chronological instruction/report transcript.

`report.md` shall contain the final reconciled closure report.

Where the canonical repository archive already contains mission records, Codex shall use a non-conflicting approved subpath and record that mapping.

## 8. Founder Chat Git Command Rule

Add a permanent rule:

> Whenever an instruction or report is created or updated on GitHub and the Founder must synchronize the local repository, the assistant briefing in Founder chat shall include the exact document name, the action required, and the safe pull command.

When Founder-side commit or push is required, exact commit and push commands shall also be shown directly in chat.

The Founder shall not be required to open a Founder Brief merely to obtain pull, commit, or push commands.

## 9. Current Report Treatment

Do not falsely change `report1.1.md` to a final successful publication state unless the current correction commit and synchronization state are verified.

Instead, ensure the protocol makes clear that its pending fields are valid until closure reconciliation.

## 10. Protocol Versioning

Advance the protocol draft version from Draft 1.3 to Draft 1.4 and append a change-log row covering:

- provisional live-report status;
- closure-state reconciliation;
- chronological transcript preservation;
- numbered exchange lifecycle;
- archive consolidation;
- live-template restoration;
- Founder-chat pull/push command visibility.

The protocol remains:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

---

# Constraints

- Do not activate controlled AI Git authority.
- Do not modify Stage A live target files.
- Do not modify Stage B EOS workflows.
- Do not archive or delete the current live communication.
- Do not restore the live templates yet; closure has not been declared.
- Do not mark pending Git fields as successful without repository evidence.
- Do not create a new numbered exchange merely to reflect routine publication unless a substantive Mission Control instruction exists.

---

# Deliverables

Create:

- `communication/live/report1.2.md`

Update as authorized:

- `communication/AI_Communication_and_Handover_Protocol.md`
- SB-GOV-COMMS-1.2 mission README, decision log, handover log, refinement report, and Founder Brief

`report1.2.md` must include:

- files changed;
- protocol version;
- exact new housekeeping rules;
- confirmation that provisional fields remain valid during active communication;
- confirmation that closure reconciliation is mandatory;
- confirmation that current live files were not archived or deleted;
- validation results;
- Stage A and Stage B status;
- exact Founder publication commands directly in the Codex chat response.

---

# Validation

Codex shall verify:

- Draft 1.4 metadata is correct;
- provisional status rule is present;
- closure reconciliation applies to every report in the cycle;
- historical provisional events remain in the consolidated transcript;
- only final closure summary uses reconciled values;
- exact numbered pairing is defined;
- routine publication does not automatically create another communication pair;
- archive outputs are defined;
- numbered files are removed only after archive verification;
- base templates remain until formal closure;
- Founder chat pull/commit/push command rule is present;
- no Stage A or Stage B live target was modified;
- Markdown quality gate passes;
- `git diff --check` passes.

---

# Completion Status

`HOUSEKEEPING AND CLOSURE-RECONCILIATION RULES APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED`
