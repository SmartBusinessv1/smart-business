# SMART BUSINESS MISSION CONTROL

# Instruction 1.10 — Stage 10 EIS Review Authorization

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**From:** Mission Control

**To:** Authorized EIS Review Panel

**Status:** ACTIVE

**Date:** 2026-08-04

---

## 1. Mission Objective

Perform Source 18 **Stage 10 — EIS Review** of the draft SB-P-1.11 Engineering Implementation Specification.

The review shall determine whether the draft EIS faithfully translates the locked Product Blueprint into coherent, secure, implementation-ready engineering authority without changing Product Truth.

This instruction authorizes review and findings only.

It does not authorize EIS refinement, EIS acceptance, EIS lock, implementation-package preparation, implementation, deployment, or production work.

---

## 2. Authoritative Inputs

Reviewers shall read and use the repository state on the latest synchronized `origin/main`, including:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/report1.8.md`
- `communication/live/report1.9.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- applicable approved architecture and governance sources named by the EIS
- relevant repository architecture and prior locked implementation precedent, including SB-P-1.10 where cited

The locked Product Blueprint, Sections 1–21, Founder Decisions D-001–D-068, and approved engineering sequencing are immutable authority.

Chat history shall not substitute for repository evidence.

---

## 3. Review Ownership and Separation of Authority

### Mission Control

Mission Control owns the complete EIS review and final Stage 10 disposition.

Mission Control shall consolidate specialist evidence and issue one overall disposition.

### Specialist reviewers

Each specialist reviews only its assigned domain and records findings with evidence.

A specialist may identify risks, contradictions, omissions, and required refinements.

A specialist may not:

- redefine Product Truth;
- approve the complete EIS;
- lock the EIS;
- authorize implementation;
- modify the EIS under this instruction;
- create competing Mission Control instructions.

### Claude Code

Claude Code authored the draft EIS and therefore may not approve or review its own work as the deciding authority.

Claude Code may answer factual questions only when requested. Any EIS refinement requires a separate Mission Control instruction after Stage 10 findings are accepted.

---

## 4. Required Specialist Reviews

### 4.1 Supabase and Backend Architecture Review

Review at minimum:

- all proposed entities, relationships, constraints, uniqueness rules, and lifecycle states;
- business isolation and RLS intent;
- owner, manager, and employee authorization boundaries at database and command layers;
- append-only history and audit architecture;
- idempotency and concurrency handling;
- transaction boundaries and row locking;
- D-047 link mutability boundary;
- D-068 first-time assignment and permitted replacement safeguard;
- price, tax, cost, scheduled-price, archive, restore, and delete write integrity;
- scheduled activation and timezone handling;
- migration and rollback strategy;
- index strategy and query-plan risks;
- destructive-migration and cross-business leakage risks.

Required report:

`communication/live/report1.10-supabase-backend.md`

### 4.2 AI and WhatsApp Architecture Review

Review at minimum:

- WhatsApp, text, voice, and photo dependency boundaries;
- webhook, identity routing, media processing, retries, idempotency, and failure handling;
- intent-to-command separation;
- confirmation requirements before authoritative writes;
- AI Assistant, Not AI Judge compliance;
- merchant decision ownership;
- privacy and permission propagation across conversational channels;
- safe sequencing while the shared conversational engine remains unavailable;
- whether the EIS invents implementation behavior beyond approved Sources 04 and 05.

Required report:

`communication/live/report1.10-ai-whatsapp.md`

### 4.3 Security and Permissions Review

Review at minimum:

- shared permission-engine dependency;
- Owner, Manager, and Employee action boundaries;
- employee default denial of owner financial intelligence;
- permission-aware read paths for cost and margin visibility;
- row-level versus field-level protection;
- least privilege and service-role boundaries;
- authentication, authorization, privacy, and audit requirements;
- cross-business isolation;
- import, RPC, scheduled-job, and conversational-channel abuse risks;
- whether temporary Owner-only sequencing is safe and explicit.

Required report:

`communication/live/report1.10-security-permissions.md`

### 4.4 Frontend and Lovable Architecture Review

Review at minimum:

- frontend versus backend authority;
- use of RPC or command contracts for protected writes;
- D-068 preview, explicit confirmation, cancel, incomplete confirmation, validation failure, and save failure behavior;
- prevention of multi-step client-side financial mutations;
- loading, retry, duplicate-submission, and stale-data behavior;
- multilingual entry, search, and uncertain-match presentation;
- CSV/Excel import preview, validation, correction, and final confirmation experience;
- accessibility, merchant clarity, dignity, and simplicity;
- safe phased delivery while permission and conversational dependencies remain unavailable;
- whether any frontend responsibility could bypass database integrity.

Required report:

`communication/live/report1.10-lovable-frontend.md`

---

## 5. Mandatory Review of Draft EIS Open Parameters

The review panel shall explicitly examine and classify:

1. multilingual similarity algorithm and possible-match threshold;
2. CSV/Excel maximum row count and file-size limits;
3. final index selection and query-plan validation approach;
4. scheduled-price activation polling interval;
5. sequencing and ownership of the shared permission engine;
6. sequencing and ownership of the shared conversational engine;
7. the EIS conclusion that inventory-link removal does not require D-068-style price reconfirmation because removal writes no new unit or price.

Each item shall receive one disposition:

- `ACCEPTED AS WRITTEN`
- `REFINEMENT REQUIRED`
- `FOUNDER DECISION REQUIRED`
- `BLOCKED`

Technical parameters should remain engineering decisions unless they change merchant-visible Product Truth or an approved workflow.

---

## 6. Required Finding Format

Every specialist finding shall include:

- Finding ID
- Severity: `BLOCKING`, `HIGH`, `MEDIUM`, `LOW`, or `NOTE`
- EIS section and exact subject
- locked Blueprint or Founder-decision trace
- repository or governance evidence
- finding description
- risk if unchanged
- required disposition
- recommended refinement, where applicable
- confirmation that the recommendation does not alter Product Truth

Reviewers shall distinguish:

- actual contradiction;
- missing implementation detail;
- unresolved technical parameter;
- cross-mission dependency;
- optional improvement;
- scope note.

No finding shall broaden the mission merely because a future capability could be useful.

---

## 7. Mission Control Consolidation

After all four specialist reports are complete, Mission Control shall create:

`communication/live/report1.10.md`

The consolidated report shall include:

1. exact synchronized base commit;
2. exact specialist reports reviewed;
3. confirmation that the locked Blueprint and Founder Decision Record were unchanged;
4. consolidated finding register without duplication;
5. disposition of every specialist finding;
6. disposition of all seven mandatory open parameters;
7. Product Truth impact assessment;
8. blocking issues, if any;
9. required EIS refinements, grouped by section;
10. cross-mission dependency treatment;
11. exact next lifecycle action;
12. one overall Stage 10 disposition.

Allowed overall dispositions:

- `ACCEPTED — READY FOR EIS LOCK`
- `REFINEMENT REQUIRED`
- `FOUNDER DECISION REQUIRED`
- `BLOCKED`

Mission Control shall not apply EIS lock under this instruction.

If the outcome is `REFINEMENT REQUIRED`, a separate instruction shall authorize Claude Code to modify only the EIS and produce a refinement report.

---

## 8. Authorized Changed Paths

This Stage 10 review may create only:

- `communication/live/report1.10-supabase-backend.md`
- `communication/live/report1.10-ai-whatsapp.md`
- `communication/live/report1.10-security-permissions.md`
- `communication/live/report1.10-lovable-frontend.md`
- `communication/live/report1.10.md`

The following are read-only:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- all prior instructions and reports
- all governance sources

Each specialist may use a separate protected mission branch and pull request, or Mission Control may authorize a coordinated review branch, provided authors do not approve or merge their own work and the changed-file scope remains exact.

---

## 9. Explicitly Unauthorized Work

Do not:

- edit the Product Blueprint;
- edit the Founder Product Decision Record;
- edit the draft EIS;
- create or modify Founder decisions;
- change Build Now, Build Later, Add-on, Separate Product, or Reject classifications;
- perform EIS refinement;
- accept or lock the EIS;
- prepare `engineering-contract.md`;
- prepare `lovable-build-prompt.md`;
- prepare `verification-checklist.md`;
- modify application code or tests;
- create database files, SQL, migrations, RLS policies, RPCs, Edge Functions, webhooks, prompts, or Lovable implementation;
- modify Supabase, infrastructure, deployment, production, or governance sources;
- approve or merge your own pull request.

Implementation authority remains none.

---

## 10. Validation Requirements

Every review report shall pass:

- repository Markdown Quality Gate;
- pre-commit Markdown Quality Gate;
- `git diff --check`;
- exact changed-file scope validation;
- staged secret and credential inspection;
- branch and pull-request verification.

Every report shall identify:

- repository;
- synchronized base commit;
- branch;
- commit SHA;
- pull-request number and state;
- exact changed files;
- confirmation of no self-approval or self-merge.

---

## 11. Completion Boundary

Stage 10 is complete only when:

- all four specialist reports exist;
- Mission Control has reviewed them;
- every finding and mandatory parameter has a disposition;
- `communication/live/report1.10.md` records the overall Stage 10 outcome;
- no protected artifact has changed.

Until then:

```text
SB-P-1.11 EIS: DRAFT
EIS REVIEW: ACTIVE
EIS REFINEMENT: NOT AUTHORIZED
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
