# SMART BUSINESS MISSION CONTROL

# Instruction 1.1

**Mission ID:** SB-GOV-HOUSEKEEPING-1.1

**Mission Name:** Source 18 and EOS Activation Metadata Reconciliation

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE — ADMINISTRATIVELY RESEQUENCED

**Date:** 2026-08-01

---

# Administrative Sequencing Correction

This file is the authoritative numbered continuation of the still-open housekeeping communication cycle.

Commit `2def1480a8372d2ae85191b231b83f7a86d8995c` incorrectly placed this mission in `communication/live/instruction.md`, overwriting the active base instruction for `SB-GOV-HOUSEKEEPING-1.0`.

The approved communication protocol requires:

```text
communication/live/instruction.md   -> SB-GOV-HOUSEKEEPING-1.0
communication/live/report.md        -> SB-GOV-HOUSEKEEPING-1.0
communication/live/instruction1.1.md -> SB-GOV-HOUSEKEEPING-1.1
communication/live/report1.1.md      -> SB-GOV-HOUSEKEEPING-1.1
```

The complete substantive mission instruction originally published in commit `2def1480a8372d2ae85191b231b83f7a86d8995c` is preserved in Git history and incorporated into this numbered instruction by reference.

Codex shall review it with:

```powershell
git show 2def1480a8372d2ae85191b231b83f7a86d8995c:communication/live/instruction.md
```

All substantive mission requirements, evidence rules, authorized source paths, constraints, validation requirements, and Git authority from that instruction remain unchanged except for the live communication path corrections stated in this file.

Where the prior misfiled instruction refers to `communication/live/report.md`, it shall now be read as:

```text
communication/live/report1.1.md
```

This is an administrative sequencing correction only. It does not broaden scope, create new approval authority, close the housekeeping communication, or authorize restoration of the default live templates.

---

# Mission Objective

Reconcile the two highest-priority inconsistencies identified by `SB-GOV-HOUSEKEEPING-1.0`:

1. Source 18 approval, status, publication, and active-index treatment; and
2. stale activation metadata in the ChatGPT and Claude EOS GitHub workflow documents.

Corrections must be evidence-based. Founder approval must never be inferred from file location, implementation, or Mission Control review alone.

---

# Required Work

Codex shall execute the complete work defined in commit `2def1480a8372d2ae85191b231b83f7a86d8995c`, including:

1. review all repository evidence concerning Source 18 and `SB-GOV-LIFECYCLE-1.0`;
2. determine separately whether Mission Control review passed, Founder approval is explicitly evidenced, publication is complete, and active-index treatment is correct;
3. apply only the evidence-supported Source 18 disposition;
4. reconcile both EOS workflow files to the verified Stage B activation state without broadening Git authority;
5. create the `SB-GOV-HOUSEKEEPING-1.1` mission package;
6. append directly relevant reconciliation references to the prior housekeeping records without rewriting the original audit;
7. complete `communication/live/report1.1.md` with evidence, changed files, validation, Git publication state, unresolved decisions, and the next authorized action.

---

# Corrected Live Response Path

Codex shall create:

```text
communication/live/report1.1.md
```

The report must respond exactly to this `instruction1.1.md`.

Do not overwrite or modify:

```text
communication/live/report.md
```

That file remains the historical live response to the original `SB-GOV-HOUSEKEEPING-1.0` base instruction until explicit closure reconciliation and archival.

---

# Authorized File Scope

The authorized scope from the original mission remains unchanged, except that the authorized live response path is corrected from `communication/live/report.md` to `communication/live/report1.1.md`.

Codex may modify only:

```text
merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md
merge/active/README.md
docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md
docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md
communication/live/report1.1.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/approval-candidate-register.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/conflict-register.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
communication/missions/SB-GOV-HOUSEKEEPING-1.1/**
```

Directly related `SB-GOV-LIFECYCLE-1.0` records may be modified only under the evidence and exact-path conditions stated in the incorporated mission instruction.

---

# Communication Boundary

The housekeeping communication remains open.

Codex shall not:

- restore `instruction.md` or `report.md` to default templates;
- remove the base pair;
- skip `report1.1.md`;
- create a differently numbered response;
- close or archive the communication;
- alter historical or archived communication;
- treat this administrative correction as a new communication cycle.

Default-template restoration is authorized only after explicit Founder or Mission Control closure, final reconciliation, archive verification, and removal of numbered live files under the active protocol.

---

# Git Authority

Founder/Mission Control authorizes Codex for mission `SB-GOV-HOUSEKEEPING-1.1` to operate on repository `SmartBusinessv1/smart-business`, using branch `main` under the active temporary Phase 1 compensating control, limited strictly to the authorized files stated above and in the incorporated instruction.

Approved commit message:

```text
Reconcile Source 18 and EOS activation metadata
```

All preflight, exact staging, validation, secret inspection, stop conditions, and synchronization requirements from the incorporated instruction remain mandatory.

---

# Completion Status

When all evidence-supported corrections are complete, the report must conclude with:

```text
SOURCE 18 AND EOS METADATA RECONCILED — MISSION CONTROL VERIFICATION REQUIRED
```

If explicit Founder approval for Source 18 cannot be proven, use:

```text
EOS METADATA RECONCILED — SOURCE 18 FOUNDER DECISION REQUIRED
```
