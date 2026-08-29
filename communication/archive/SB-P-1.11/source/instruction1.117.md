# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-21 — EIS LOCK AUTHORIZATION

**Instruction ID:** instruction1.117  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-21 — Engineering Implementation Specification Lock  
**Executing Authority:** Mission Control  
**Authorized By:** Founder / Mission Control  
**Mode:** EIS LOCK DECISION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Build Lock / Build Mode Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Apply the Stage 11 EIS Lock gate after the completed three-stage specialist review and Mission Control chain review.

The purpose is to determine whether the reviewed Lambda Parser EIS and its accepted correction/confirmation chain may now be formally locked as the authoritative engineering contract for later implementation-package preparation.

Required output:

`communication/live/report1.126.md`

This mission may lock the EIS if and only if all required entry evidence remains valid on current merged `main`.

This mission does not authorize implementation, SQL/migration execution, Supabase mutation, AWS/S3/IAM resource creation, dependency changes, Lovable changes, Build Lock, Build Mode, deployment, publication, production use, or SB-P-1.11 acceptance.

---

## 2. Entry Gate

Current merged `main` must contain:

- `communication/live/report1.115.md` with final Infrastructure verdict `LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — PASS`;
- `communication/live/report1.123.md` with final Supabase verdict `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`;
- `communication/live/report1.124.md` with final Security verdict `LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — PASS`;
- `communication/live/report1.125.md` with final Mission Control disposition `LAMBDA PARSER EIS THREE-STAGE CHAIN REVIEW — READY FOR EIS LOCK`.

If any entry item is missing, contradicted, superseded, or no longer authoritative, STOP.

---

## 3. Canonical EIS Set To Lock

The locked EIS is the authoritative combined engineering contract formed by:

- `communication/live/report1.108.md` — standalone Lambda Parser EIS baseline;
- the final accepted Infrastructure corrections and confirmation chain culminating in `report1.115.md`;
- the final accepted Supabase Backend corrections and confirmation chain culminating in `report1.123.md`;
- `communication/live/report1.124.md` — final Security & Permissions PASS;
- `communication/live/report1.125.md` — Mission Control cross-stage readiness confirmation.

Where an earlier EIS statement conflicts with a later accepted correction, the later merged correction/confirmation governs.

The lock record shall identify this set explicitly so later implementation-package work does not rely on chat history or stale intermediate findings.

---

## 4. Frozen Product and Engineering Boundaries

The EIS lock must preserve without redesign:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- Inventory-first product creation resolves/creates Catalog and then follows governed link/opening-stock flow;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 durable/shared per-business pre-parse guard;
- EC-3 parse-before-write;
- AWS Lambda narrow parser runtime only;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second parser budget;
- finite reserved concurrency;
- transient private S3 parser ingress;
- IAM Roles Anywhere;
- manual AWS4-X509 `CreateSession` path;
- `AWS_IAM` Lambda Function URL;
- `ChecksumMode = ENABLED`;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- 5,242,880-byte hard input limit;
- 25 × 1024 × 1024 XLSX produced-byte limit;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- exact 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- six-state Parser Upload Lease lifecycle including `CLAIMED`;
- no same-lease redispatch after ambiguous/unknown dispatch outcome;
- enforcement-before-use migration ordering;
- `public.parser_upload_leases` direct `service_role` privilege exactly `{ SELECT }` after explicit broad-privilege neutralization;
- lifecycle mutation only through the accepted narrow helper surface;
- actual effective ACL verification before application cutover;
- `parser_preview_guards` accepted B3 contract;
- Lambda has no Supabase/database/Product Truth authority;
- Product Truth remains behind the existing Founder Workflow and exactly nineteen public Catalog commands.

No employee/manager financial-authority expansion is permitted.

---

## 5. Later Evidence That Must Remain Explicitly Unlocked

EIS lock must not misrepresent later implementation/acceptance evidence as already completed.

The lock record must preserve the later verification obligations from `report1.125.md`, including at minimum:

- production-equivalent AWS4-X509 / IAM Roles Anywhere signature acceptance;
- client-bundle/source-map/log secret-exposure checks;
- effective IAM policy verification and negative authorization tests;
- S3 POST exact-key/length/SHA-256 verification;
- Lambda checksum/length verification with `ChecksumMode = ENABLED`;
- browser S3 GET/LIST/DELETE denial;
- effective ACL verification for `parser_upload_leases`;
- direct service-role DML denial and helper-only lifecycle mutation proof;
- one-winner dispatch/replay/unknown-outcome tests;
- EC-2 concurrency/rate/expiry evidence;
- Lambda cold/warm timing and parser-budget measurements;
- response-ceiling boundary fixtures and deterministic rejection evidence;
- hostile-file containment fixtures;
- S3 deletion/Lifecycle cleanup evidence;
- staged secret scanning and artifact/log review;
- final pre-cutover enforcement-first migration verification.

These are later package/build/acceptance evidence requirements, not completed facts.

---

## 6. Repository Hygiene Boundary

Repository hygiene remains a separate mandatory prerequisite before Build authorization.

This EIS lock mission must not declare repository hygiene complete.

The existing hygiene workstream remains required before any implementation authorization, including safe handling of tracked environment files, local AI-tool artifacts, ignore rules, and secret-scan outputs.

Hygiene does not block EIS lock because `report1.125.md` found no immediate architecture contradiction, but it must block later Build authorization until separately completed and verified.

---

## 7. Stage 11 Lock Decision

If all entry conditions remain satisfied and no new repository contradiction exists, Mission Control shall record the EIS status as:

`APPROVED — LOCKED`

The lock applies to the canonical EIS set in Section 3 and freezes the accepted engineering contract for implementation-package preparation.

After the EIS is locked, the next lifecycle stage becomes eligible:

**Stage 12 — Initial Implementation Package**

Owner:

**Claude Code / Engineering**

The initial implementation package may contain only:

- `engineering-contract.md`;
- `lovable-build-prompt.md`;
- `verification-checklist.md`.

It must remain:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

No package may authorize its own implementation.

---

## 8. Allowed Final Dispositions

Use exactly one:

- `LAMBDA PARSER EIS — APPROVED — LOCKED`
- `LAMBDA PARSER EIS LOCK — CHANGES REQUIRED`
- `LAMBDA PARSER EIS LOCK — STOPPED — AUTHORITY OR EVIDENCE GAP`

If locked, state explicitly:

- the exact canonical EIS set locked;
- all three specialist PASS stages remain authoritative;
- `report1.125.md` remains `READY FOR EIS LOCK`;
- no unresolved load-bearing architecture blocker remains;
- later verification evidence remains outstanding by design;
- repository hygiene remains outstanding and mandatory before Build authorization;
- Stage 12 implementation-package preparation becomes eligible;
- no implementation authorization is granted.

---

## 9. Required Output

Create only:

`communication/live/report1.126.md`

The report must state:

1. mission and authority;
2. exact merged `main` SHA reviewed;
3. Stage A/B/C PASS evidence;
4. `report1.125.md` readiness evidence;
5. exact canonical EIS set being locked;
6. frozen Product Truth / Founder Workflow result;
7. frozen infrastructure/runtime result;
8. frozen Supabase support-state result;
9. frozen security/permissions result;
10. later implementation/acceptance evidence still outstanding;
11. repository hygiene status and Build-authorization restriction;
12. unresolved blocker, if any;
13. final disposition;
14. whether Stage 12 implementation-package preparation is now eligible;
15. explicit confirmation that implementation/Build Mode/deployment/production are not authorized;
16. confirmation no implementation/resource/database/environment mutation occurred.

---

## 10. Repository Discipline

Mission Control shall:

- verify current merged `main` before lock decision;
- create only `communication/live/report1.126.md`;
- use a protected mission branch and pull request;
- preserve unrelated changes;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed main SHA, branch, commit SHA, and PR;
- not self-merge.

---

## 11. Prohibited Scope

Do not:

- create or modify application/parser implementation code;
- create or execute SQL/migrations;
- mutate Supabase;
- create or modify AWS/S3/IAM resources;
- modify live grants/RLS/functions/tables;
- change Lovable;
- add/update dependencies;
- change Product Truth;
- expand employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser/runtime limits;
- create implementation authorization;
- enter Build Lock;
- enter Build Mode;
- deploy;
- publish;
- touch production;
- claim SB-P-1.11 acceptance.

---

## 12. Gate After Lock

Only a human-reviewed and merged:

`LAMBDA PARSER EIS — APPROVED — LOCKED`

may allow Mission Control to authorize Stage 12 Initial Implementation Package preparation.

Stage 12 package preparation is not implementation authorization.

Repository hygiene must still be completed and verified before any later Build authorization.

---

## 13. Mission Control Decision

`SB-P-1.11-GC-21 — EIS LOCK AUTHORIZATION ISSUED`

Current authorized next action after human merge of this instruction:

**Mission Control → communication/live/report1.126.md**
