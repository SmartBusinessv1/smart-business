# SMART BUSINESS MISSION CONTROL

# Instruction 1.3

**Mission ID:** SB-GOV-COMMS-1.2

**Mission Name:** Founder Approval, Temporary Compensating Control, and Stage A Activation

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE

**Date:** 2026-08-01

---

# Mission Objective

Record the Founder’s approval of Draft 1.4, record the verified absence of GitHub branch protection, apply a Founder-approved temporary compensating control, and activate Stage A without unnecessary delay.

This mission authorizes the Stage A activation package only.

Stage B remains unauthorized.

---

# Founder Decisions

The Founder has approved Draft 1.4 of the AI Communication and Handover Protocol and now authorizes Stage A activation using a temporary compensating control because GitHub branch protection is not currently configured.

Verified repository evidence:

```text
Repository: SmartBusinessv1/smart-business
Default branch: main
Branch protection verification result: NOT CONFIGURED
Evidence: GitHub Settings → Branches showed "Classic branch protections have not been configured."
```

Founder decision:

```text
DRAFT 1.4: FOUNDER APPROVED
TEMPORARY COMPENSATING CONTROL: APPROVED
STAGE A ACTIVATION: AUTHORIZED
STAGE B ACTIVATION: NOT AUTHORIZED
COMMUNICATION CLOSURE: NOT DECLARED
```

---

# Temporary Phase 1 Compensating Control

Until GitHub branch protection is configured and verified, the following compensating control shall govern:

1. AI Git operations require explicit Founder or Mission Control authorization for each mission.
2. The authorization must identify:
   - AI name;
   - Mission ID;
   - repository;
   - authorized branch;
   - authorized file paths or scope;
   - approved commit message.
3. AI-authored implementation work shall normally use `mission/[MISSION-ID]-[SHORT-SLUG]`.
4. Direct AI push to `main` remains prohibited unless the Founder or Mission Control explicitly authorizes a narrowly scoped governance or communication update and exact-file staging is used.
5. Every automated commit must pass:
   - remote identity verification;
   - branch verification;
   - clean-tree or authorized-change verification;
   - exact staged-file verification;
   - Markdown or applicable quality gates;
   - `git diff --cached --check`;
   - secret or credential inspection.
6. No force push.
7. No history rewriting.
8. No self-approval or self-merge.
9. No silent conflict resolution.
10. No unauthorized branch deletion.
11. No unrelated staging.
12. Mission Control review remains required before merge or acceptance.
13. Founder approval remains required where the mission or governance requires it.
14. The compensating control must be retired when branch protection is configured and verified.

---

# Required Work

## 1. Create Branch-Protection Verification Record

Create:

```text
communication/governance/branch-protection-verification.md
```

Record:

```text
Repository: SmartBusinessv1/smart-business
Branch: main
Verification Date: 2026-08-01
Branch Protection: NOT CONFIGURED
Evidence Source: Founder-provided GitHub Settings screenshot
Compensating Control: FOUNDER APPROVED FOR PHASE 1
Stage A Gate Result: SATISFIED BY APPROVED COMPENSATING CONTROL
Future Action: Configure and verify GitHub branch protection, then retire the compensating control
```

The record must explain that branch protection itself was not verified as active; the Stage A gate is satisfied only through the Founder-approved compensating control permitted by the protocol.

## 2. Activate the Protocol

Update:

```text
communication/AI_Communication_and_Handover_Protocol.md
```

Set activation metadata to:

```text
Version: 1.0
Status: ACTIVE
Approved By: Founder
Activated By: Mission Control
Activation Date: 2026-08-01
Activation Commit: PENDING PUBLICATION
Stage A Status: ACTIVE
Stage B Status: NOT AUTHORIZED
Branch Protection Status: NOT CONFIGURED — TEMPORARY COMPENSATING CONTROL ACTIVE
```

Replace proposal language with governing language:

> This protocol establishes GitHub as the durable communication and handover layer between authorized Smart Business AI participants.

Preserve Draft 1.0 through Draft 1.4 history and append:

```markdown
| 1.0 | SB-GOV-COMMS-ACT-1.0 | Founder-approved activation of AI communication, controlled Git authority, communication housekeeping, closure reconciliation, and archival governance using a temporary Phase 1 compensating control | ACTIVE |
```

Add a clear note that the compensating control is temporary and must be retired after branch protection is configured and verified.

## 3. Activate Stage A Core Instructions

Apply the approved Stage A amendments to:

```text
AGENTS.md
CLAUDE.md
CHATGPT.md
communication/README.md
```

The activated wording must include:

- explicit mission-scoped Git authority;
- mandatory authorization fields;
- governance permission versus actual capability distinction;
- remote identity verification;
- current base branch and SHA verification;
- exact staged-file verification;
- secret-check requirement;
- mission-authority expiry;
- no direct AI push to `main` except the narrow compensating-control exception stated above;
- no self-approval or self-merge;
- no force push or history rewriting;
- no unrelated staging;
- no silent conflict resolution;
- Founder-chat command visibility;
- recurring live instruction/report housekeeping;
- closure reconciliation;
- communication archive rules;
- temporary compensating-control status and retirement requirement.

Do not modify the two Stage B EOS workflows.

## 4. Update Mission Records and Status

Update the SB-GOV-COMMS-1.2 mission records to show:

- Final Mission Control verification: PASSED
- Founder approval: CONFIRMED
- Draft 1.4: APPROVED
- Protocol Version 1.0: ACTIVE
- Branch protection: NOT CONFIGURED
- Temporary compensating control: ACTIVE
- Stage A: ACTIVE
- Stage B: NOT AUTHORIZED
- Communication closure: NOT DECLARED
- Next action: validate Stage A behaviour, then prepare separate Stage B alignment mission

Update at minimum:

```text
communication/missions/SB-GOV-COMMS-1.2/README.md
communication/missions/SB-GOV-COMMS-1.2/decision-log.md
communication/missions/SB-GOV-COMMS-1.2/handover-log.md
communication/missions/SB-GOV-COMMS-1.2/codex/refinement-report.md
communication/missions/SB-GOV-COMMS-1.2/founder/refinement-founder-brief.md
```

## 5. Live Response

Create or replace:

```text
communication/live/report1.3.md
```

It must report:

- Founder approval recorded;
- branch protection verified as not configured;
- compensating control recorded and active;
- protocol Version 1.0 activated;
- Stage A activated;
- Stage B remains unauthorized;
- exact files changed;
- validation results;
- publication status as provisional until closure reconciliation;
- future branch-protection retirement action.

Required completion status:

```text
FOUNDER APPROVAL RECORDED — TEMPORARY COMPENSATING CONTROL ACTIVE — STAGE A ACTIVATED — STAGE B NOT AUTHORIZED
```

---

# Authorized File Scope

Codex may modify only:

```text
communication/governance/branch-protection-verification.md
communication/AI_Communication_and_Handover_Protocol.md
AGENTS.md
CLAUDE.md
CHATGPT.md
communication/README.md
communication/missions/SB-GOV-COMMS-1.2/README.md
communication/missions/SB-GOV-COMMS-1.2/decision-log.md
communication/missions/SB-GOV-COMMS-1.2/handover-log.md
communication/missions/SB-GOV-COMMS-1.2/codex/refinement-report.md
communication/missions/SB-GOV-COMMS-1.2/founder/refinement-founder-brief.md
communication/live/report1.3.md
```

Do not modify:

```text
docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md
docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md
```

Do not modify application code.

---

# Validation

Verify:

- protocol metadata is Version 1.0 and ACTIVE;
- Founder approval and Mission Control activation are recorded;
- branch-protection verification record exists;
- branch protection is honestly recorded as not configured;
- temporary compensating control is active and clearly temporary;
- Stage A includes the protocol and four core instruction files;
- Stage B workflows remain unchanged;
- no application files are changed;
- no direct-AI-push-to-main rule exists except the narrowly stated compensating-control exception;
- recurring communication housekeeping and closure reconciliation remain present;
- Markdown quality gate passes;
- `git diff --check` passes;
- exact staged-file list matches authorized scope;
- no credentials or secrets are staged.

---

# Git Boundary

Current approved instructions still govern commit and push until this Stage A activation publication is complete.

If Founder action is required, show exact pull, commit, and push commands directly in Founder chat and include the affected document name.

Routine publication does not create another numbered communication pair.

---

# Completion Status

FOUNDER APPROVAL RECORDED — TEMPORARY COMPENSATING CONTROL ACTIVE — STAGE A ACTIVATED — STAGE B NOT AUTHORIZED
