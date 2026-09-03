# SMART BUSINESS — REPOSITORY COMMUNICATION

# Instruction — Active Communication Protocol Alignment

**Mission ID:** `SB-GOV-COMMS-1.3`

**Mission Name:** `Active Communication Protocol Alignment`

**From:** Smart Business Mission Control

**To:** `Claude Code / Repository Governance & Documentation Operator`

**Status:** `ACTIVE AFTER HUMAN MERGE OF ACTIVATION PR`

**Date:** `2026-09-03`

---

## 1. Mission Objective

Reconcile the active Smart Business repository communication rules so a new AI or human can determine, without chat history, exactly:

- what `communication/live/` is for;
- what `communication/missions/[MISSION-ID]/` is for;
- what `communication/archive/[MISSION-ID]/` is for;
- how instructions, reports, handovers, decisions, closure, and archival relate;
- what Git authority an AI actually has;
- when Founder involvement is required;
- which historical communication patterns remain evidence only and are not the default for new missions.

This is a governance-alignment and documentation-clarity mission. It must reduce ambiguity and operational friction without weakening security, human authority, auditability, or historical evidence.

## 2. Canonical Baseline

Start only after the activation PR containing this instruction is human-merged.

Pull latest `SmartBusinessv1/smart-business/main` and verify:

- PR `#475` is present with merge commit `f8341410ee09fed0ff5fd8f01e3366d596e98e82` or a later descendant;
- `communication/live/` contains only the fresh instruction/report pair for this mission;
- no unrelated mission is active.

Before editing, resolve the current canonical Source 18 path through `merge/active/README.md` and read the approved **SB-P Mission Lifecycle and Delivery Framework** together with the repository files listed below.

## 3. Founder Decision — Git Authorization Rule

The Founder has approved the following rule for future AI Git authorization:

> Mission Control may explicitly authorize the repository's standard mission-branch convention and mission-scoped descriptive commit messages. Exact branch or commit text is required only when Mission Control specifically locks them.

Implement this rule consistently across active repository governance.

This changes only the authorization-form requirement. It does **not** weaken any of the following:

- explicit mission authority;
- named repository;
- authorized scope/paths;
- protected-`main` pull-request workflow;
- exact staged-file verification;
- required quality/security checks;
- no self-approval;
- no self-merge;
- no force push/history rewriting;
- no unrelated staging;
- Mission Control review;
- human or separately authorized merge authority.

## 4. Required Governance Reconciliation

Reconcile the following active/current sources as needed:

- `communication/AI_Communication_and_Handover_Protocol.md`
- `communication/README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `CHATGPT.md`
- `mission-control/mission_memory.md`
- current Source 18 / SB-P Mission Lifecycle and Delivery Framework communication wording, but only where necessary to remove an active contradiction
- EOS ChatGPT/Claude GitHub workflow documents only if they still contain an active contradiction after the core files are aligned

Do not modify historical archive bodies merely because they use older paths or numbered communication conventions.

## 5. Target Communication Model

Align active governance to this hierarchy unless direct review of a higher-authority source proves a necessary exception:

### A. `communication/live/` — transient current handoff

Purpose: **What needs attention now?**

- Contains only the current active instruction and current reply/report for the present handoff.
- Default future model is the reusable base pair:
  - `communication/live/instruction.md`
  - `communication/live/report.md`
- Do not accumulate long-lived `instruction1.x.md` / `report1.x.md` chains by default.
- Numbered live chains remain valid historical evidence and may be used only when Mission Control explicitly authorizes a multi-turn compatibility sequence.
- A new active handoff may replace the live base pair only after the preceding handoff state has been durably recorded in the mission record or archived as appropriate.

### B. `communication/missions/[MISSION-ID]/` — durable canonical mission state

Purpose: **Where does this mission stand?**

- Permanent structured mission record.
- Holds the mission README, stage/actor reports, decision log, handover log, Founder briefs, Mission Control acceptance/closure records, and links to authoritative artifacts.
- Completed mission folders remain in `communication/missions/`; they are not automatically moved into `communication/archive/` merely because the mission closes.
- Source 18 stage/lifecycle records remain canonical durable mission evidence.

### C. `communication/archive/[MISSION-ID]/` — frozen transient communication history

Purpose: **What exact transient instruction/report exchange occurred?**

- Archive the completed `communication/live/` exchange after explicit closure.
- Preserve historical truth and source provenance.
- Never present archived communication as current executable authority.
- Define one future archive package format that clearly distinguishes readable chronology/index, immutable source exchange evidence, and final reconciled closure state.

### D. Authoritative implementation/product artifacts

`docs/**`, code, migrations, infrastructure records, and other authoritative artifacts remain in their specialized locations. Communication links to them; it does not replace them.

## 6. Conflicts That Must Be Resolved

At minimum, independently verify and disposition these known issues:

1. The active protocol and `communication/README.md` currently make monotonically numbered `instruction1.x/report1.x` pairs the default recurring live model. Reconcile this with the target transient-base-pair model.
2. Protocol archive wording currently risks treating `communication/missions/[MISSION-ID]/` as something to move into `communication/archive/[MISSION-ID]/`. Reconcile this with Source 18's permanent stage-based mission record.
3. Current archive-format wording is inconsistent between `communication.md`, `report.md`, and exact source-file preservation. Establish one unambiguous future format without rewriting historical archives.
4. Exact branch name and exact literal commit message are currently described as mandatory authorization fields in active Git governance. Apply the Founder decision in §3.
5. Founder notification wording in `communication/README.md` can overstate specialist completion as mission closure and contains stale direct-`main` language. Replace it with status-sensitive PR-based wording.
6. Protocol §28 or equivalent still describes old Git conflicts that are no longer current after branch-protection activation and AGENTS alignment. Preserve history but stop presenting resolved conflicts as current state.
7. `mission-control/mission_memory.md` is stale relative to SB-P-1.11 completion, production recovery, continuity reconciliation, classification cleanup, and this mission activation. Reconcile it to current operational truth.
8. Source 18 or its command templates must not be readable as AI authority for direct push to protected `main`; correct only the smallest necessary wording while preserving lifecycle governance.
9. Remove any wording that makes the Founder a routine manual AI-to-AI message bus when repository handoff is available. Founder chat remains for decisions, approvals, runtime verification, exceptions, and concise briefs.
10. Verify that no active actor-specific/EOS instruction contradicts the final model.

## 7. Design Principles

The final protocol must be:

- repository-first;
- simple enough to use consistently;
- auditable without becoming bureaucratic;
- safe under protected-branch Git operations;
- explicit about authority vs capability;
- clear about current state vs historical evidence;
- compatible with human and AI readers returning after long gaps;
- aligned with Source 18 mission lifecycle;
- consistent with Lighthouse principles: clarity, dignity, usefulness, simplicity, trust, and human decision ownership.

Do not redesign Product Truth or broader governance.

## 8. Historical Preservation

Do not mechanically rewrite:

- `communication/archive/**` historical bodies;
- closed mission-stage records merely because they cite old `communication/live/instruction1.x.md` paths;
- historical PR/commit references;
- old proposal packages already classified as non-governing.

Where a current index could mislead a reader, add the smallest present-state clarification rather than altering historical evidence.

## 9. Git Authority For This Mission

Mission Control authorizes Claude Code for mission `SB-GOV-COMMS-1.3` to operate on repository `SmartBusinessv1/smart-business` using the repository's standard mission-branch convention `mission/SB-GOV-COMMS-1.3-[SHORT-SLUG]`, limited to the governance/documentation files required by §§4–8, with mission-scoped descriptive commit messages, and to fetch, pull fast-forward only, stage exact authorized files, commit, push the authorized mission branch, and open or update one pull request targeting `main`.

Exact branch suffix and exact commit text are not locked for this mission.

No self-approval or self-merge.

If review proves that a file outside the listed governance/documentation surfaces must change, stop and report before expanding scope.

## 10. Verification

Before reporting:

- compare every modified active rule against Source 18 and higher-authority governance;
- verify no duplicate active authority remains between `live/`, `missions/`, and `archive/`;
- verify the Founder Git-authorization decision is consistently represented;
- verify protected-`main`, no-self-merge, exact-scope, and validation controls remain intact;
- search for current references that still mandate numbered live chains as the default;
- search for current wording that says completed mission folders must be moved out of `communication/missions/`;
- search for current direct-AI-push-to-`main` instructions;
- run the Markdown Quality Gate;
- run `git diff --check`;
- perform changed-path scope and secret/credential checks.

## 11. Required Reply

Reply only through:

`communication/live/report.md`

Include:

- files reviewed;
- conflicts confirmed, rejected, or newly discovered;
- exact files changed;
- final communication model;
- Founder Git-authority decision implementation;
- historical items intentionally left untouched;
- verification results;
- PR number and head SHA;
- any unresolved Founder decision genuinely still required;
- final status: `PASS`, `PARTIAL`, or `BLOCKED`.
