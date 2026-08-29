# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-22 — IMPLEMENTATION PACKAGE RECONCILIATION

**Instruction ID:** instruction1.118  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-22 — Stage 12 Implementation Package Reconciliation  
**Executing Room:** Claude Code / Engineering  
**Authorized By:** Founder / Mission Control  
**Mode:** DOCUMENT RECONCILIATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Build Lock / Build Mode Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Reconcile the existing locked SB-P-1.11 Stage 12 implementation-package documents against the newly locked canonical Lambda Parser EIS contract recorded by `communication/live/report1.126.md`.

This is not a request to create a second implementation package from scratch.

The existing Stage 12 documents already exist and were previously locked:

- `docs/implementation/SB-P-1.11/engineering-contract.md`;
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md`;
- `docs/implementation/SB-P-1.11/verification-checklist.md`.

Those documents must now be compared against the complete current repository authority and revised only where necessary to incorporate the later locked Lambda Parser EIS chain.

The resulting three package documents must be treated as **reconciled draft revisions** pending a separate Mission Control package review.

Required mission report:

`communication/live/report1.127.md`

---

## 2. Entry Gate

Before work begins, verify current merged `main` contains:

- `communication/live/report1.126.md` with final disposition `LAMBDA PARSER EIS — APPROVED — LOCKED`;
- the existing three Stage 12 package documents listed above;
- `communication/live/report1.115.md` Infrastructure PASS;
- `communication/live/report1.123.md` Supabase Backend PASS;
- `communication/live/report1.124.md` Security & Permissions PASS;
- `communication/live/report1.125.md` Mission Control chain review `READY FOR EIS LOCK`.

If the lock record is absent, contradicted, or superseded, STOP.

---

## 3. Canonical Authority for Reconciliation

Use current merged repository truth. Do not rely on chat history.

Read in full at minimum:

- `communication/live/report1.126.md` — authoritative EIS lock record;
- `communication/live/report1.108.md` — Lambda Parser EIS baseline;
- final Infrastructure correction/confirmation chain culminating in `report1.115.md`;
- final Supabase Backend correction/confirmation chain culminating in `report1.123.md`;
- `communication/live/report1.124.md` — Security & Permissions PASS;
- `communication/live/report1.125.md` — three-stage chain review;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — locked Product Blueprint;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`;
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` — earlier locked EIS authority still governing unaffected SB-P-1.11 engineering areas;
- the existing three Stage 12 package documents.

Where an earlier parser/import statement conflicts with a later accepted Lambda Parser correction or confirmation, the later merged correction/confirmation locked by `report1.126.md` governs.

Do not reinterpret unrelated portions of the existing locked package merely because this reconciliation is occurring.

---

## 4. Reconciliation Principle

Use a **minimal-delta, authority-preserving** approach.

For each of the three package documents:

1. identify every statement affected by the newly locked Lambda Parser EIS;
2. identify every statement that remains correct and unaffected;
3. revise only what is required for full consistency;
4. preserve unaffected Product Truth, Founder decisions, permission rules, accounting/inventory boundaries, catalog behavior, and existing package structure;
5. remove or supersede stale parser/import assumptions only where the current locked EIS requires it;
6. do not introduce new product behavior or engineering architecture not present in locked authority.

The reconciliation must not silently weaken or expand any locked boundary.

---

## 5. Mandatory Lambda Parser Contract To Carry Into The Package

Where relevant to each package document, preserve the locked contract including:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- no twentieth Catalog command;
- Catalog / Inventory truth separation;
- Inventory-first product creation resolves/creates Catalog and then follows governed link/opening-stock flow;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 durable/shared per-business pre-parse guard;
- EC-3 parse-before-write;
- AWS Lambda as a narrow external parser runtime only;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second application parser budget;
- finite reserved concurrency;
- transient private S3 parser ingress;
- IAM Roles Anywhere;
- manual AWS4-X509 `CreateSession` path;
- `AWS_IAM` Lambda Function URL;
- `ChecksumMode = ENABLED`;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- hard input limit 5,242,880 bytes;
- XLSX produced-byte ceiling 25 × 1024 × 1024 bytes;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- exact 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- six-state Parser Upload Lease lifecycle including `CLAIMED`;
- one-winner dispatch authority;
- no same-lease redispatch after ambiguous/unknown Lambda outcome;
- enforcement-before-use migration ordering;
- `public.parser_upload_leases` direct `service_role` privilege exactly `{ SELECT }` after explicit broad-privilege neutralization;
- lifecycle mutation only through the accepted narrow helper surface;
- actual effective ACL verification before application cutover;
- unchanged `parser_preview_guards` accepted B3 contract;
- server-derived business identity;
- browser exclusion from AWS credentials and privileged support state;
- Lambda isolation from Supabase/database/Catalog/Inventory/Product Truth authority;
- exact S3 key/byte-length/SHA-256 binding;
- hostile-file containment;
- logging/secrets/data-minimization boundaries;
- Product Truth remains behind the existing Founder Workflow and exactly nineteen public Catalog commands.

---

## 6. Later Verification Obligations Must Remain Unexecuted

The reconciled package must carry forward, as applicable, the later evidence obligations from `report1.126.md` without presenting them as already completed.

At minimum preserve verification requirements for:

- production-equivalent AWS4-X509 / IAM Roles Anywhere `CreateSession` signature acceptance;
- private-key/client-bundle/source-map/log/telemetry exposure checks;
- effective IAM policy inspection and negative authorization tests;
- S3 POST exact-key/length/SHA-256 enforcement;
- Lambda checksum/length verification with `ChecksumMode = ENABLED`;
- browser S3 GET/LIST/DELETE denial;
- effective ACL inspection for `parser_upload_leases`;
- direct `service_role` DML denial and helper-only lifecycle proof;
- one-winner claim/replay/unknown-outcome tests;
- EC-2 concurrency/rate/expiry evidence;
- Lambda cold/warm timing and parser-budget evidence;
- response-ceiling boundary fixtures and deterministic above-ceiling rejection;
- hostile-file fixtures;
- S3 immediate deletion and Lifecycle-backstop verification;
- staged secret scanning and artifact/log review;
- final enforcement-first migration verification before cutover.

Do not mark these PASS merely because the EIS is locked.

---

## 7. Required Document Status After Reconciliation

The reconciled package documents must no longer present their reconciled revisions as already Mission Control accepted or implementation-authorized.

For this reconciliation branch/PR, each revised document must clearly carry a status equivalent to:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

The historical fact that earlier versions were previously locked may be retained in revision history, but the newly reconciled revision itself is not locked until Mission Control separately reviews and accepts it.

Do not erase prior approval history.

---

## 8. Document-Specific Requirements

### 8.1 `engineering-contract.md`

Reconcile the builder-facing engineering obligations with the newly locked Lambda Parser architecture.

Ensure the contract:

- references the canonical EIS lock record and precedence correctly;
- distinguishes the earlier SB-P-1.11 EIS v2.2 from the later locked Lambda Parser EIS correction chain;
- translates the final parser/import architecture into implementation obligations without inventing new behavior;
- preserves all unaffected contract clauses;
- keeps implementation authority at NONE.

### 8.2 `lovable-build-prompt.md`

Reconcile the future builder instructions so Lovable is not asked to perform work that belongs to AWS Lambda, S3, IAM Roles Anywhere, Supabase privileged migration setup, or other separately controlled server/infrastructure boundaries.

Ensure the prompt makes the division of responsibility explicit:

- Lovable remains the main Smart Business application environment;
- expensive CSV/XLSX parsing is externalized to the narrow Lambda runtime;
- Lovable must integrate with, not recreate, that runtime boundary;
- no browser AWS credential exposure;
- no direct parser Product Truth writes;
- no paste-into-Lovable authority is granted by this mission.

Preserve unaffected UI/product instructions.

### 8.3 `verification-checklist.md`

Add or reconcile the verification coverage required by the locked Lambda Parser EIS and `report1.126.md`.

Ensure:

- all newly required evidence remains unexecuted template content;
- no false PASS/FAIL is pre-populated;
- architecture verification, IAM/S3/Supabase ACL, parser limits, hostile-file, replay/failure, logging/secrets and runtime-boundary checks are represented;
- existing unaffected verification items are preserved.

---

## 9. Required Reconciliation Report

Create:

`communication/live/report1.127.md`

The report must state:

1. exact merged `main` SHA reviewed;
2. branch and commit SHA;
3. exact files changed;
4. authority set reviewed;
5. per-document reconciliation summary;
6. stale assumptions removed or corrected;
7. locked Lambda Parser decisions incorporated;
8. unaffected package content preserved;
9. later verification evidence retained as unexecuted obligations;
10. confirmation no new Product Truth or engineering architecture was invented;
11. confirmation no implementation authority was introduced;
12. repository hygiene remains separate and unresolved unless independently completed elsewhere;
13. lifecycle-housekeeping issue for the Blueprint path was not bundled into this mission;
14. final reconciliation disposition.

Allowed final dispositions:

- `SB-P-1.11 IMPLEMENTATION PACKAGE RECONCILIATION — READY FOR MISSION CONTROL REVIEW`
- `SB-P-1.11 IMPLEMENTATION PACKAGE RECONCILIATION — CHANGES REQUIRED`
- `SB-P-1.11 IMPLEMENTATION PACKAGE RECONCILIATION — STOPPED — AUTHORITY OR EVIDENCE GAP`

---

## 10. Repository Scope

Authorized substantive files for this mission are only:

- `docs/implementation/SB-P-1.11/engineering-contract.md`;
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md`;
- `docs/implementation/SB-P-1.11/verification-checklist.md`;
- `communication/live/report1.127.md`.

Do not modify the locked EIS sources or Product Blueprint as part of reconciliation.

Do not move the Blueprint file as part of this mission. Lifecycle path housekeeping must be handled separately.

---

## 11. Prohibited Scope

Do not:

- implement application/parser code;
- create or execute SQL/migrations;
- mutate Supabase;
- create or modify AWS/S3/IAM resources;
- change live grants/RLS/functions/tables;
- change Lovable project state;
- paste prompts into Lovable;
- install/update dependencies;
- change Product Truth;
- expand employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser/runtime limits;
- modify `report1.126.md` or any locked EIS source;
- perform repository hygiene remediation in this mission;
- perform lifecycle file moves;
- enter Build Lock;
- enter Build Mode;
- deploy;
- publish;
- touch production;
- claim SB-P-1.11 acceptance.

---

## 12. Repository Discipline

The executing room shall:

- verify latest merged `main` before beginning;
- use a protected mission branch and pull request;
- preserve unrelated local changes;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed main SHA, branch, commit SHA and PR;
- not self-merge.

---

## 13. Gate After Reconciliation

A human-reviewed and merged reconciliation PR with disposition:

`SB-P-1.11 IMPLEMENTATION PACKAGE RECONCILIATION — READY FOR MISSION CONTROL REVIEW`

allows Mission Control to perform the separate **Stage 13 — Implementation Package Review**.

It does not authorize implementation.

Repository hygiene remains mandatory before any later Build authorization.

---

## 14. Mission Control Decision

`SB-P-1.11-GC-22 — IMPLEMENTATION PACKAGE RECONCILIATION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Claude Code / Engineering → reconcile the existing three Stage 12 package documents and create `communication/live/report1.127.md`.**
