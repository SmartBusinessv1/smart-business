# SMART BUSINESS MISSION CONTROL

# Instruction 1.4

**Mission ID:** SB-GOV-COMMS-1.2

**Mission Name:** Stage B EOS Workflow Alignment

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE

**Date:** 2026-08-01

---

# Mission Objective

Align the two EOS GitHub workflow documents with the now-active Stage A controlled AI Git authority model.

This mission authorizes Stage B workflow alignment only. It does not authorize changes to the active protocol, `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`, `communication/README.md`, application code, branch protection settings, or any unrelated governance source.

---

# Execute According To

Execute according to:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `AGENTS.md`
- `CLAUDE.md`
- `CHATGPT.md`
- `communication/README.md`
- `communication/governance/branch-protection-verification.md`
- `communication/missions/SB-GOV-COMMS-1.2/codex/revised-exact-amendments.md`
- Stage A activation commit `6971a661c5b43858f424804af3f1c8e23c1eae7e`

Stage A is active under the temporary Founder-approved Phase 1 compensating control. Stage B is now authorized through this instruction.

---

# Authorized File Scope

Codex may modify only:

```text
docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md
docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md
communication/live/report1.4.md
communication/missions/SB-GOV-COMMS-1.2/README.md
communication/missions/SB-GOV-COMMS-1.2/decision-log.md
communication/missions/SB-GOV-COMMS-1.2/handover-log.md
communication/missions/SB-GOV-COMMS-1.2/codex/refinement-report.md
communication/missions/SB-GOV-COMMS-1.2/founder/refinement-founder-brief.md
```

Do not modify:

```text
communication/AI_Communication_and_Handover_Protocol.md
AGENTS.md
CLAUDE.md
CHATGPT.md
communication/README.md
communication/governance/branch-protection-verification.md
```

Do not modify application files, Supabase files, Lovable files, deployment configuration, secrets, or branch-protection settings.

---

# Required Work

## 1. ChatGPT EOS Workflow Alignment

Update:

```text
docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md
```

Replace all blanket or absolute statements that ChatGPT/Codex can never commit or push with the controlled mission-scoped exception defined by Stage A.

The workflow must state that ChatGPT Codex may commit and push only when:

- an active Founder or Mission Control mission explicitly authorizes it;
- the mission identifies AI name, Mission ID, repository, branch, authorized paths or scope, and approved commit message;
- actual tool capability, repository access, credentials, and authentication are available;
- remote, branch, base SHA, working tree, exact staged files, validation, whitespace checks, and secret checks pass;
- authority has not expired.

The workflow must preserve:

- no direct AI push to `main`, except the narrow temporary compensating-control exception for explicitly authorized governance or communication updates;
- no self-approval or self-merge;
- no force push or history rewriting;
- no unrelated staging;
- no unauthorized `git add .`;
- no silent conflict resolution;
- no protection bypass;
- no credential exposure;
- merge authority restricted to the Founder, a Mission Control-authorized human maintainer, or a separately approved automated merge mechanism after required checks and reviews;
- Founder-chat command visibility when Founder action is required;
- pull-request handover and communication archive rules from the active protocol.

## 2. Claude EOS Workflow Alignment

Update:

```text
docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md
```

Apply the same controlled authority, capability, expiry, protected-action, merge-authority, Founder-command, PR-handover, and archive rules used in the ChatGPT workflow.

Do not introduce broader authority for Claude Code than is granted in `AGENTS.md` and the active protocol.

## 3. Contradiction Audit

After editing both workflows, verify:

- no uncontrolled statement remains saying ChatGPT Codex can never commit or never push;
- no uncontrolled statement remains saying Claude Code can never commit or never push;
- any retained prohibition is correctly qualified by the controlled mission-scoped exception;
- neither workflow permits direct push to `main` outside the narrow temporary compensating-control exception;
- neither workflow permits self-approval or self-merge;
- neither workflow permits force push, history rewriting, unrelated staging, silent conflict resolution, branch-protection bypass, or credential exposure;
- both workflows reference `AGENTS.md` and the active AI Communication and Handover Protocol;
- both workflows preserve the same merge authority;
- both workflows preserve Founder-chat Git command requirements;
- both workflows preserve PR handover, closure reconciliation, and archival requirements;
- both workflows clearly state that permission does not create capability.

## 4. Mission Record Update

Update the SB-GOV-COMMS-1.2 mission records to show:

- Stage A: ACTIVE
- Temporary Phase 1 compensating control: ACTIVE
- Stage B: APPLIED — MISSION CONTROL VERIFICATION REQUIRED
- Branch protection: NOT CONFIGURED
- Communication closure: NOT DECLARED
- Next action: Mission Control reviews Stage B and, if approved, declares the communication-governance activation complete before closure and archive.

## 5. Live Response

Create:

```text
communication/live/report1.4.md
```

The report must respond exactly to `instruction1.4.md` and include:

- exact files changed;
- summary of ChatGPT EOS changes;
- summary of Claude EOS changes;
- contradiction-audit results;
- confirmation that Stage A files were not modified;
- confirmation that application files were not modified;
- Markdown quality-gate result;
- `git diff --check` result;
- secret-check result or recorded limitation;
- commit and push status as provisional until publication/closure reconciliation;
- next authorized action.

Required completion status:

```text
STAGE B EOS WORKFLOW ALIGNMENT APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED
```

---

# Validation

Codex shall verify:

- only the authorized files changed;
- both EOS workflows align with the active Stage A model;
- no contradictory absolute commit/push rules remain;
- no broader Git authority was introduced;
- direct push to `main` remains controlled by the narrow compensating-control exception only;
- no Stage A file changed;
- no application file changed;
- Markdown quality gate passes;
- `git diff --check` passes;
- staged or proposed changes contain no credentials, tokens, keys, passwords, or environment secrets.

---

# Git Authority for This Mission

Founder/Mission Control authorizes Codex for mission `SB-GOV-COMMS-1.2` to operate on repository `SmartBusinessv1/smart-business`, using branch `main` under the active temporary compensating control, limited strictly to the authorized files listed in this instruction, with commit message:

```text
Align EOS GitHub workflows with controlled AI Git authority
```

Codex may:

- fetch and pull fast-forward only;
- verify the configured remote;
- stage only the exact authorized files;
- commit using the approved message;
- push the narrowly scoped governance update to `main` under the temporary compensating control;
- record the final commit and synchronization evidence in `report1.4.md` and the mission records.

Codex shall stop if:

- the remote does not match `SmartBusinessv1/smart-business`;
- the branch is not `main`;
- unrelated working-tree changes exist;
- an unauthorized file is staged;
- validation fails;
- a conflict or non-fast-forward condition occurs;
- credentials or secrets are detected.

Routine publication does not create another numbered communication pair.

When Founder action is required, the Founder Brief and Codex chat response must include the document name, required action, exact pull/commit/push commands, and expected evidence.

---

# Completion Status

STAGE B EOS WORKFLOW ALIGNMENT APPLIED — FINAL MISSION CONTROL VERIFICATION REQUIRED
