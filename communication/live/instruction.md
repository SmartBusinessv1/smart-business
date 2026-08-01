# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** SB-GOV-HOUSEKEEPING-1.1

**Mission Name:** Source 18 and EOS Activation Metadata Reconciliation

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE

**Date:** 2026-08-01

---

# Mission Objective

Reconcile two high-priority repository housekeeping inconsistencies identified by mission `SB-GOV-HOUSEKEEPING-1.0`:

1. the approval, status, and active-index treatment of Source 18; and
2. the stale activation metadata in the ChatGPT and Claude EOS GitHub workflow documents.

This mission authorizes evidence-based metadata, status, and index corrections only. It does not authorize redesign of governance, changes to product or application behavior, or unrelated repository cleanup.

---

# Context

The repository-wide status audit found no immediate development block, but identified two high-risk inconsistencies:

- Source 18 is stored under `merge/active/`, while its own metadata or related records may still indicate Draft, review required, pending publication, or incomplete active-index treatment.
- The Stage B EOS GitHub workflow documents were aligned and activated through commit `9c5baf1ed9355d9c3933cb1f7dafb467ee289b14`, but may still declare Draft, Founder Pending, review required, or another stale pre-activation status.

Stage A and Stage B controlled AI Git governance are active. Communication-governance activation was closed and archived in commit `bda6f634bb92e61b1e41520fc2d0a7f87b9ac5dc`.

Mission Control must ensure current governing files accurately represent repository reality and do not mislead Codex, Claude Code, the Founder, or specialist rooms.

---

# Execute According To

Execute according to:

- Lighthouse Constitution and approved Smart Business governance;
- active sources under `merge/active/`;
- `communication/AI_Communication_and_Handover_Protocol.md`;
- `AGENTS.md`;
- `CLAUDE.md`;
- `CHATGPT.md`;
- `communication/README.md`;
- the Stage A activation commit `6971a661c5b43858f424804af3f1c8e23c1eae7e`;
- the Stage B activation commit `9c5baf1ed9355d9c3933cb1f7dafb467ee289b14`;
- the closure commit `bda6f634bb92e61b1e41520fc2d0a7f87b9ac5dc`;
- `communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/approval-candidate-register.md`;
- `communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/conflict-register.md`;
- `communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md`;
- repository-first engineering and evidence rules.

Where evidence is insufficient to prove Founder approval or active authority, do not infer approval. Record the unresolved decision and stop before activation.

---

# Scope

Codex is authorized to inspect all repository records needed to determine:

- Source 18 title, version, declared status, approval history, Mission Control review status, Founder approval status, publication status, and active-index references;
- the current status metadata of both EOS GitHub workflow documents;
- cross-references and mission records needed to reconcile these states accurately.

Codex may modify only the authorized files listed below.

---

# Required Work

## 1. Source 18 Evidence Review

Review at minimum:

```text
merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md
merge/active/README.md
```

Also review all repository records that mention:

- Source 18;
- `SB-GOV-LIFECYCLE-1.0`;
- Mission Lifecycle and Delivery Framework;
- Founder approval;
- Mission Control review;
- publication or active-index status.

Determine and report separately:

- whether final Mission Control review passed;
- whether Founder approval is explicitly evidenced;
- whether publication to `merge/active/` is complete;
- whether the active README index includes Source 18 accurately;
- whether Source 18 metadata matches the evidence;
- whether related lifecycle mission records match the evidence.

## 2. Source 18 Disposition Rule

Apply only the evidence-supported disposition:

### A. Explicit Founder approval exists

If repository evidence explicitly proves Founder approval:

- update Source 18 metadata to its correct approved and active status;
- preserve the document version unless evidence authorizes a version change;
- update `merge/active/README.md` to include Source 18 in the active source index;
- reconcile only directly related `SB-GOV-LIFECYCLE-1.0` status records;
- preserve prior approval and change history.

### B. Founder approval is not explicitly evidenced

If Founder approval is not explicitly evidenced:

- do not mark Source 18 approved or active by assumption;
- do not leave it silently represented as an unqualified active authority;
- apply the minimum safe metadata/index clarification authorized by the existing governing evidence;
- state the exact Founder decision required;
- report whether Source 18 should remain under `merge/active/` pending that decision or requires a separately authorized relocation mission.

Codex shall not invent approval evidence from file location alone.

## 3. EOS Workflow Activation Metadata Reconciliation

Review and update:

```text
docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md
docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md
```

Reconcile stale pre-activation metadata with the verified Stage B activation.

The two files must accurately state, as supported by repository evidence:

- Version: `1.0` unless the file already has a separately governed later version;
- Status: `ACTIVE`;
- Stage B activation: complete;
- activation authority: Founder through Mission Control;
- activation commit: `9c5baf1ed9355d9c3933cb1f7dafb467ee289b14`;
- activation date: `2026-08-01`;
- temporary Phase 1 compensating control: active;
- branch protection: not configured;
- governing references: `AGENTS.md` and `communication/AI_Communication_and_Handover_Protocol.md`.

Remove or reconcile stale declarations such as:

- Draft;
- Founder Pending;
- approval required;
- activation pending;
- Mission Control review required;
- not active;

Do not change the substantive controlled Git rules already approved in Stage B except where a direct contradiction is found and the correction is purely necessary to preserve the active Stage A/Stage B model.

## 4. Cross-Reference and Contradiction Verification

Verify that after the corrections:

- Source 18 is not simultaneously presented as both Draft and unqualified active authority;
- `merge/active/README.md` does not omit an evidence-confirmed active Source 18;
- no EOS workflow still declares a pre-activation state;
- both EOS workflows preserve identical authority boundaries;
- neither workflow grants broader authority than `AGENTS.md` or the active protocol;
- Stage A and Stage B activation records remain consistent;
- historical and archived wording remains unchanged;
- no unrelated status is modified.

## 5. Mission Records

Create:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.1/
```

Required files:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.1/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.1/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.1/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.1/codex/evidence-review.md
communication/missions/SB-GOV-HOUSEKEEPING-1.1/codex/reconciliation-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.1/founder/founder-brief.md
```

The evidence review must clearly distinguish:

- proven facts;
- Mission Control determinations;
- unresolved Founder decisions;
- source-file corrections made;
- corrections not made because authority was insufficient.

## 6. Update Prior Housekeeping Records

Update only the directly relevant records in `SB-GOV-HOUSEKEEPING-1.0` to show that its first two high-priority review items were processed through this mission.

Do not rewrite the original audit findings. Append reconciliation references and current disposition.

## 7. Live Response

Complete:

```text
communication/live/report.md
```

The report must include:

- Source 18 evidence conclusion;
- whether Founder approval was explicitly proven;
- Source 18 final disposition;
- active-index result;
- EOS workflow metadata corrections;
- exact files changed;
- contradictions resolved;
- unresolved decisions, if any;
- validation results;
- commit and push status;
- next authorized Mission Control action.

Required completion status when all evidence-supported corrections are complete:

```text
SOURCE 18 AND EOS METADATA RECONCILED — MISSION CONTROL VERIFICATION REQUIRED
```

If Source 18 requires an unresolved Founder decision, use:

```text
EOS METADATA RECONCILED — SOURCE 18 FOUNDER DECISION REQUIRED
```

---

# Authorized File Scope

Codex may modify only:

```text
merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md
merge/active/README.md
docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md
docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md
communication/live/report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/approval-candidate-register.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/conflict-register.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
communication/missions/SB-GOV-HOUSEKEEPING-1.1/**
```

Codex may modify directly related `SB-GOV-LIFECYCLE-1.0` mission records only if they are first identified by exact path in the evidence review and the change is strictly required to reconcile Source 18 status. Every such path must be listed in the final report.

---

# Constraints

Codex shall not:

- infer Founder approval from file location, implementation, or Mission Control review alone;
- change Source 18 substantive governance rules;
- redesign mission lifecycle or delivery governance;
- modify application code;
- modify Supabase, Lovable, API, webhook, authentication, deployment, RLS, storage, infrastructure, secrets, or environment configuration;
- change branch-protection settings;
- retire the temporary compensating control;
- change Stage A or Stage B substantive authority;
- modify archived communication;
- process migration artifacts, legacy source containment, or unrelated audit findings;
- delete, move, rename, archive, supersede, or deprecate files unless separately authorized;
- use broad staging such as `git add .` unless every working-tree change is explicitly authorized;
- expose credentials or secrets.

If evidence is contradictory or incomplete, stop the affected correction, record the conflict, and request the precise Founder or Mission Control decision required.

---

# Validation

Before commit, Codex shall verify:

- `origin` matches `SmartBusinessv1/smart-business`;
- branch is `main`;
- only authorized files changed;
- every Source 18 status change is supported by explicit evidence;
- both EOS files show active Stage B metadata consistently;
- no substantive governance authority was broadened;
- no archived record was rewritten;
- no application or infrastructure file changed;
- Markdown quality gate passes;
- `git diff --check` passes;
- `git diff --cached --name-status` matches the exact authorized scope;
- staged changes contain no credentials, tokens, keys, passwords, or environment secrets.

---

# Git Authority for This Mission

Founder/Mission Control authorizes Codex for mission `SB-GOV-HOUSEKEEPING-1.1` to operate on repository `SmartBusinessv1/smart-business`, using branch `main` under the active temporary Phase 1 compensating control, limited strictly to the authorized files in this instruction.

Approved commit message:

```text
Reconcile Source 18 and EOS activation metadata
```

Codex may:

- fetch and pull fast-forward only;
- verify repository remote, branch, base commit, and working-tree state;
- inspect all evidence needed for this mission;
- stage exact authorized files only;
- commit using the approved message;
- push this narrowly scoped governance housekeeping update to `main`;
- record final commit and synchronization evidence.

Codex shall stop if:

- the remote does not match the authorized repository;
- the branch is not `main`;
- unrelated working-tree changes exist;
- an unauthorized file is staged;
- evidence does not support an intended approval or activation change;
- validation fails;
- a conflict or non-fast-forward condition occurs;
- credentials or secrets are detected.

---

# Deliverables

Codex shall provide:

- Source 18 evidence review;
- evidence-supported Source 18 disposition;
- active-index correction where authorized;
- corrected ChatGPT EOS metadata;
- corrected Claude EOS metadata;
- updated housekeeping references;
- mission decision and handover records;
- concise Founder Brief;
- completed live report;
- commit and synchronization evidence.

---

# Completion Status

The mission is complete only when:

- Source 18 has an evidence-supported disposition;
- both EOS workflows accurately reflect active Stage B status;
- all changed paths are authorized and documented;
- validation passes;
- the report ends with the applicable required completion status.
