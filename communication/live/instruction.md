# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** SB-GOV-HOUSEKEEPING-1.0

**Mission Name:** Repository Pending-Status and Approval Conflict Audit

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE

**Date:** 2026-08-01

---

# Mission Objective

Perform a repository-wide housekeeping audit to identify every document, record, workflow, mission artifact, or governance file that is still marked as pending, draft, awaiting approval, awaiting verification, inactive, not authorized, provisional, or otherwise unresolved.

The purpose is to determine which unresolved states are legitimate, which require Mission Control or Founder approval, which are obsolete historical records, and which create contradictions or operational risk for Smart Business development.

This mission is an audit and recommendation mission only. It does not authorize Codex to approve, activate, supersede, archive, delete, or rewrite any document except the authorized audit records and live response.

---

# Context

Smart Business now has an active AI Communication and Handover Protocol, active Stage A and Stage B Git-governance alignment, and an established communication closure and archive workflow.

The Founder requires a full repository hygiene review before further operations and development continue, so unresolved document states do not silently conflict with active governance, engineering instructions, product architecture, mission status, or implementation work.

The audit must distinguish active governing documents from drafts, historical communication records, superseded material, incomplete missions, templates, examples, placeholders, and stale status text.

---

# Execute According To

Execute according to:

- `00_Lighthouse_Constitution.md` and the approved Lighthouse principles represented in repository governance;
- active Smart Business governance under `merge/active/`;
- `communication/AI_Communication_and_Handover_Protocol.md`;
- `AGENTS.md`;
- `CLAUDE.md`;
- `CHATGPT.md`;
- `communication/README.md`;
- active repository quality gates and documentation conventions;
- repository-first engineering and evidence rules.

Where status language conflicts, prioritize the highest-authority active source and report the conflict rather than resolving it by assumption.

---

# Scope

Codex is authorized to inspect every readable file and directory in repository:

`SmartBusinessv1/smart-business`

The audit shall include, at minimum:

- root instruction files;
- `merge/active/`;
- other governance, architecture, roadmap, product, engineering, legal, support, finance, brand, AI, WhatsApp, Supabase, Lovable, infrastructure, and operational documentation;
- `docs/`;
- `communication/`;
- `communication/missions/`;
- `communication/archive/`;
- `.github/`;
- templates and examples where their status wording could be mistaken for live authority;
- application-adjacent documentation that may affect current implementation decisions.

Binary files, generated dependencies, build outputs, package caches, and non-text artifacts may be listed but need not be semantically audited unless they contain authoritative status metadata.

---

# Required Work

## 1. Repository Inventory

Create an inventory of all text documents and relevant configuration files reviewed.

Record:

- total files scanned;
- file types scanned;
- directories included;
- exclusions and reasons;
- unreadable or unsupported files;
- repository commit used as audit baseline.

Do not claim complete repository coverage unless the evidence supports it.

## 2. Status-Term Search

Search case-insensitively for status language including, but not limited to:

- `DRAFT`;
- `PENDING`;
- `AWAITING APPROVAL`;
- `APPROVAL REQUIRED`;
- `MISSION CONTROL REVIEW REQUIRED`;
- `FOUNDER APPROVAL REQUIRED`;
- `VERIFICATION REQUIRED`;
- `NOT AUTHORIZED`;
- `NOT ACTIVE`;
- `INACTIVE`;
- `PROVISIONAL`;
- `REVIEW PENDING`;
- `APPROVED WITH REQUIRED REFINEMENTS`;
- `READY FOR APPROVAL`;
- `READY FOR REVIEW`;
- `ACTIVATION PENDING`;
- `PENDING PUBLICATION`;
- `PENDING FOUNDER ACTION`;
- `NOT PERFORMED`;
- `INCOMPLETE`;
- `BLOCKED`;
- `OPEN`;
- `TODO`;
- `TBD`;
- `PLACEHOLDER`;
- `DEPRECATED`;
- `SUPERSEDED`;
- `ARCHIVED`.

Also detect semantically equivalent wording not in this list.

## 3. Classification

Classify every meaningful hit into exactly one primary category:

### A. Approval Required Now

A current, authoritative, operationally relevant file that genuinely requires Founder or Mission Control approval, verification, activation, or closure.

### B. Legitimate Active Pending State

A valid open mission, implementation gate, branch-protection follow-up, runtime verification, future phase, or dependency that should remain unresolved for now.

### C. Historical or Archived Status

Status language preserved inside archives, completed communication transcripts, old reports, changelogs, or historical evidence that must not be treated as active.

### D. Template, Example, or Placeholder

Status text intentionally present in reusable templates, examples, schemas, test fixtures, or instructional samples.

### E. Stale or Contradictory Status

A file whose status no longer matches repository reality, conflicts with higher-authority active documents, incorrectly remains pending after completion, or could mislead Codex, Claude, Lovable, Mission Control, or the Founder.

### F. Deprecated or Superseded Material Requiring Containment

An old or replaced document that is still discoverable in a way that could affect current operations and lacks adequate deprecation, archival, or authority labeling.

### G. Informational Only

The term appears in ordinary prose and does not represent document or mission status.

## 4. Authority and Conflict Review

For every Category A, E, or F item, determine:

- exact file path;
- current declared status;
- evidence that the status is current or stale;
- governing higher-authority source;
- whether it can affect operations or development;
- severity: Critical, High, Medium, or Low;
- recommended disposition;
- required decision owner: Founder, Mission Control, specialist room, Codex, Claude Code, or none;
- whether a separate corrective mission is required.

Do not approve or reject documents during the audit.

## 5. Duplicate and Cross-Reference Audit

Identify:

- duplicate documents with conflicting statuses;
- active files that reference drafts as if active;
- drafts that reference deprecated routes, domains, architecture, or old workflow rules;
- unresolved mission records whose implementation is already complete;
- completed missions still presented as active;
- active instructions pointing to archived communication;
- archived material still linked as current authority;
- inconsistent version or approval metadata;
- status conflicts between source documents and mission reports.

Correct old Smart Business domain references in recommendations only; do not edit source files in this mission.

## 6. Operational Risk Assessment

Assess whether any unresolved or conflicting status can affect:

- current Phase 1 implementation;
- authentication and authorization;
- employee permission boundaries;
- financial data visibility;
- Ask CFO behaviour;
- WhatsApp, voice, photo, API, or webhook work;
- Supabase schema, RLS, storage, or edge functions;
- Lovable implementation;
- repository Git behaviour;
- product routes or domains;
- legal, privacy, terms, or customer commitments;
- roadmap sequencing;
- Mission Control mission handover.

## 7. Approval Candidate Register

Create a consolidated register of all documents genuinely requiring approval or verification.

For each candidate include:

- candidate ID;
- file path;
- document title;
- version;
- current status;
- requested decision;
- decision authority;
- prerequisites;
- dependencies;
- recommended decision: Approve, Approve with Corrections, Keep Pending, Supersede, Archive, Deprecate, or Reject;
- rationale;
- risk if left unresolved.

Recommendations are advisory. Mission Control and Founder retain final decision authority.

## 8. Conflict Register

Create a separate conflict register containing only operationally meaningful contradictions.

Each conflict must identify:

- conflict ID;
- affected files;
- competing statements;
- governing authority;
- practical impact;
- recommended correction sequence;
- whether development should pause.

Do not recommend pausing development for low-risk administrative inconsistencies.

## 9. Mission Control Review Queue

Provide an ordered Mission Control queue:

1. Critical approvals or conflicts;
2. High-risk operational issues;
3. Medium-risk governance cleanup;
4. Low-risk archival and metadata corrections;
5. legitimate pending items requiring no current action.

For every queue item, state the next logical mission or review action.

## 10. Live Response

Complete:

`communication/live/report.md`

The report shall respond directly to this instruction and include:

- audit baseline commit;
- total files scanned;
- exclusions;
- total status hits;
- count by classification;
- count of approval candidates;
- count of operational conflicts;
- highest-risk findings;
- confirmation whether immediate development is blocked;
- exact deliverable paths;
- validation results;
- Git publication status;
- next authorized Mission Control action.

Required completion status:

`REPOSITORY STATUS AUDIT COMPLETE — MISSION CONTROL REVIEW REQUIRED`

---

# Authorized Deliverables

Create the mission package:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.0/
```

Required files:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.0/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/repository-inventory.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/status-audit.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/approval-candidate-register.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/conflict-register.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/audit-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/founder/founder-brief.md
```

Codex may update only:

- the files listed above;
- `communication/live/report.md`.

Codex shall not modify any audited source file in this mission.

---

# Constraints

Codex shall not:

- approve or activate any document;
- alter governance status;
- change application code;
- change Supabase, Lovable, deployment, API, webhook, authentication, RLS, or infrastructure configuration;
- delete, archive, move, rename, supersede, or deprecate source files;
- rewrite historical records;
- treat templates or archived wording as active without evidence;
- infer approval merely because implementation exists;
- classify an item as conflicting without identifying the controlling source;
- use broad repository writes outside the authorized deliverables;
- expose secrets or credentials.

The audit must be exhaustive within the repository evidence available, but must clearly disclose limitations.

---

# Git Authority for This Mission

Founder/Mission Control authorizes Codex for mission `SB-GOV-HOUSEKEEPING-1.0` to operate on repository `SmartBusinessv1/smart-business`, using branch `main` under the active temporary Phase 1 compensating control, limited strictly to:

```text
communication/live/report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/**
```

Approved commit message:

```text
Audit repository pending statuses and approval conflicts
```

Codex may:

- fetch and pull using fast-forward only;
- verify `origin` matches `SmartBusinessv1/smart-business`;
- inspect the complete readable repository;
- create the authorized mission records;
- stage only the authorized deliverables;
- commit using the approved message;
- push this narrowly scoped housekeeping update to `main`;
- record final commit and synchronization evidence.

Codex shall stop if:

- the remote does not match the authorized repository;
- the branch is not `main`;
- unrelated working-tree changes exist;
- any audited source file is modified;
- an unauthorized file is staged;
- validation fails;
- a conflict or non-fast-forward condition occurs;
- credentials or secrets are detected.

---

# Validation

Before commit, Codex shall verify:

- only authorized deliverables changed;
- repository inventory and exclusions are explicit;
- every approval candidate has evidence and decision authority;
- every conflict identifies a governing source;
- archived and template statuses are separated from active pending states;
- no source file was modified;
- Markdown quality gate passes;
- `git diff --check` passes;
- staged names and statuses match the authorized scope;
- secret inspection passes or its limitation is recorded.

---

# Deliverables

Codex shall provide:

- complete repository inventory;
- status audit and classification;
- approval candidate register;
- operational conflict register;
- ordered Mission Control review queue;
- audit report;
- concise Founder Brief;
- completed live report;
- commit and synchronization evidence.

---

# Completion Status

The completed report must conclude with:

`REPOSITORY STATUS AUDIT COMPLETE — MISSION CONTROL REVIEW REQUIRED`

The mission is not complete until the repository scan is documented, all meaningful status hits are classified, approval candidates and conflicts are separated, validation passes, and no audited source file has been modified.
