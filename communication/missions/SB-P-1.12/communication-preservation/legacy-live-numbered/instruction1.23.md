# SMART BUSINESS MISSION CONTROL — MC-148

# SB-P-1.12 — Stage 9 EIS Creation Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Lifecycle stage:** Stage 9 — EIS Creation  
**Owner:** Claude Code  
**Date:** 2026-09-30  
**Status:** DRAFT — NOT EFFECTIVE UNTIL THIS INSTRUCTION PR IS HUMAN-MERGED TO CANONICAL `main` AND MISSION CONTROL VERIFIES THE MERGE  
**Repository:** `SmartBusinessv1/smart-business`  
**Communication pair:** `communication/live/instruction1.23.md` → `communication/live/report1.23.md`

## 1. Authority

Source 18 Stage 9 requires:

- locked Product Blueprint + current repository architecture as inputs;
- Claude Code as EIS owner;
- output at:
  `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`;
- specialist findings integrated;
- an FCTM traceability table in which every `IN SCOPE` row maps to EIS requirements and every EIS requirement maps back to FCTM rows;
- Mission Control review before any EIS lock.

Stage 8 is canonically complete under MC-147.

Current canonical baseline:

`main@e1ecbe39f66509d9606d48f09a86b3c3611d64ad`

## 2. Canonical inputs

Read in full before drafting:

1. Locked Blueprint:
   `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md`
   blob `77d52096c020668311b039721a4de9248ddd460e`

2. Canonical FCTM:
   `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md`
   blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`

3. Stage 7 Engineering Review:
   `communication/missions/SB-P-1.12/claude-code/25-stage7-engineering-review-report.md`
   blob `b023b04450869625b75444340785fa5fa6d09a19`

4. Stage 7 final gate disposition:
   `communication/missions/SB-P-1.12/mission-control/26-stage7-final-engineering-review-gate-disposition.md`
   blob `6b63f2d48127135806f625b4d0001ee60b4bfe2b`

5. Founder Stage 8 approval:
   `communication/missions/SB-P-1.12/founder/08-stage8-blueprint-lock-approval.md`

6. Mission Control Stage 8 lock:
   `communication/missions/SB-P-1.12/mission-control/27-stage8-founder-approval-and-blueprint-lock.md`

7. Independent Security findings:
   - `communication/missions/SB-P-1.12/specialists/01-stage7-independent-security-review-original.md`
   - `communication/missions/SB-P-1.12/specialists/02-stage7-independent-security-delta-re-review.md`
   - `communication/missions/SB-P-1.12/specialists/03-stage7-independent-security-final-focused-verification.md`
   - `communication/live/report1.19.md`
   - `communication/live/report1.21.md`

8. R-2 closure record:
   `communication/missions/SB-P-1.12/mission-control/25-r2-source-coverage-gate-closure-record.md`

9. Current repository architecture and migrations relevant to:
   - authentication;
   - businesses / memberships / authority resolution;
   - RLS and grants;
   - Product & Price Master authorization paths;
   - transaction / correction history;
   - audit/event provenance;
   - privileged/service-role handlers;
   - first-run / invitation / active-business resolution;
   - current CI/test architecture.

10. Source 18 current active version:
    `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`

Use repository truth, not chat history.

## 3. Stage 9 objective

Translate the locked Product Blueprint into a **draft implementation-grade engineering specification**.

The EIS must define the architecture needed to faithfully realize all 267 `IN SCOPE` FCTM rows without changing their locked:

- disposition;
- build commitment;
- commercial classification;
- mission assignment.

The EIS may select engineering mechanisms where the locked Blueprint deliberately leaves implementation open.

It may not create new merchant-facing Product Truth.

Any engineering discovery that would require changing locked product behaviour triggers STOP / T3 routing.

## 4. Mandatory EIS content

The draft EIS must include at minimum:

### 4.1 Authority and membership architecture

Define:

- canonical person/business membership model;
- Owner, Manager, Employee, Supplier, Customer and Delivery Staff authority representation as applicable;
- multi-business membership/ownership;
- explicit active-business context;
- execution-time authority resolution;
- revocation semantics;
- scoped delegated capabilities;
- commercial entitlement boundary where applicable;
- temporary/purpose-limited support authority;
- no role/capability truth derived from untrusted client state.

### 4.2 Permission kernel

Define one shared kernel for:

- actor;
- business;
- action;
- target/object;
- role;
- explicit delegated capability;
- entitlement where applicable;
- channel/context;
- temporary purpose-limited authority;
- execution-time revalidation.

The kernel must be reusable by later missions, including SB-P-1.13, without letting them invent parallel authority.

### 4.3 Data-isolation architecture

Define:

- RLS / command / grant strategy;
- deny-by-default boundaries;
- effective-access reconciliation;
- handling of `anon`, `PUBLIC`, `authenticated`, `service_role` and executor/owner roles;
- cross-business denial;
- reference-level isolation;
- privileged function/service-role trust boundaries.

### 4.4 Confirmation and consequential-action binding

Define how consequential actions bind:

- actor;
- business;
- action;
- target;
- reviewed state/value;
- confirmation;
- execution-time revalidation;
- idempotency/replay behavior;
- truthful partial-completion reporting where relevant.

### 4.5 Audit and provenance

Define:

- authority-change events;
- permission/delegation events;
- denial audit where required;
- durable attribution;
- channel and request provenance;
- data minimization;
- how audit survives account/membership changes;
- how denied-action evidence is durably recorded without relying on a transaction that is rolled back.

### 4.6 Product & Price Master permission integration

Define the engineering bridge from current owner-centric paths to the locked permission model.

Include:

- Owner default authority;
- separately delegable Reference Cost and margin;
- prevention of direct and derived disclosure of the undelegated counterpart;
- current Catalog/Product & Price Master command and read paths;
- active-business resolution;
- revoked-permission behavior;
- safe contextualization/demotion of the standalone Catalog surface without breaking valid deep links/data.

### 4.7 First-run / invitation / lifecycle authority integration

Define:

- invite acceptance;
- existing-membership detection;
- prevention of accidentally creating a new Owner business for an invited user;
- authority-aware first run;
- account/membership removal;
- transfer-related authority termination;
- relationship to SB-P-1.19 lifecycle evidence without reassigning its merchant-facing responsibilities.

### 4.8 ESC-1 safe-design direction — mandatory

The EIS must provide a concrete, reviewable engineering direction that removes or safely contains the known ESC-1 risks.

Known repository-evidence manifestations:

1. Owner business API `DELETE`;
2. `businesses.owner_id → auth.users ON DELETE CASCADE`;
3. `transactions.creator_id → auth.users ON DELETE CASCADE`;
4. dependent `transaction_correction_events → transactions ON DELETE CASCADE` consequence.

The EIS must define, at design level:

- how uncontrolled direct business deletion is prevented;
- how deleting an Auth user can no longer destroy a business that must survive;
- how deleting an Auth user can no longer destroy transaction/correction history that must survive;
- how historical actor attribution survives identity deletion without granting authority;
- how lawful, governed deletion remains possible where Product Truth permits it;
- how transfer and deletion remain distinct;
- how a transferred business remains isolated and intact after former-Owner identity deletion;
- how the design supports the future unblocking of `22-§20-2`;
- migration/backfill strategy at design level;
- negative-path verification needed later.

Do not write migration SQL.

Do not mark ESC-1 closed.

Do not mark `22-§20-2` unblocked.

Stage 9 must propose the engineering resolution; Stage 10 review decides whether it is sufficient.

### 4.9 Legal/privacy/retention boundary

Integrate the current provisional Phase One legal/privacy/retention rules only to the extent needed for engineering design.

The EIS must:

- separate personal identity from retained business records;
- avoid inventing a universal retention period;
- preserve record-class-specific treatment;
- allow minimization/pseudonymization where required by the approved rule;
- preserve legal/dispute holds;
- keep professional validation deferred;
- make later legal-rule substitution possible without destructive schema redesign.

No Privacy Policy or Terms text.

No professional-legal-finality claim.

### 4.10 Environment/provider evidence plan

Define what later evidence will be required for:

- test/rehearsal project identity;
- production project identity where relied upon;
- migration ledger state;
- grants/RLS/function/default privileges;
- storage policies where applicable;
- production-shaped rehearsal;
- token lifetime only if materially required.

G-6/T4 must remain `UNVERIFIED` in this draft.

### 4.11 Testing architecture

Specify future verification architecture for:

- Owner/Manager/Employee role matrix;
- multi-business isolation;
- active-business selection;
- stale/revoked authority;
- mid-operation revocation;
- direct and derived financial-field disclosure;
- cross-tenant denial;
- privileged-path trust binding;
- denial-audit durability;
- transfer;
- identity deletion;
- retained-history survival;
- ESC-1 negative paths;
- current repository regression coverage.

The DB isolation/security suite is a mandatory mission verification requirement for affected implementation.

### 4.12 Migration/workstream architecture

Propose bounded workstreams inside SB-P-1.12.

Workstream boundaries must not change mission assignment.

For each workstream state:

- purpose;
- FCTM rows;
- dependencies;
- migration class;
- verification evidence;
- rollback/recovery considerations;
- whether later missions may safely consume it before all SB-P-1.12 workstreams are complete.

Explicitly identify what SB-P-1.13 may depend on and what remains gated.

## 5. FCTM traceability — mandatory completeness test

The EIS must include a bidirectional traceability table.

Requirements:

1. Every one of the 267 `IN SCOPE` FCTM rows must map to one or more EIS requirement IDs.
2. Every EIS requirement ID must map back to one or more FCTM rows, or carry an explicit recorded engineering-only reason.
3. Any orphan EIS item that adds product behavior triggers T3 / STOP.
4. Preserve the locked FCTM blob unchanged:
   `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`.
5. Report exact coverage totals and any one-to-many / many-to-one mappings.
6. Do not treat `FEASIBLE`, `CONDITIONAL`, `PENDING`, `N/R`, or Stage 7 Security review status as implementation evidence.

## 6. Specialist-finding integration

Integrate the Stage 7 Security findings into the EIS architecture itself.

At minimum address:

- SEC-S7-01 through SEC-S7-09;
- SEC-128-02;
- SEC-137-01 through SEC-137-14 where engineering-relevant;
- effective grants/default privileges;
- service-role trust boundaries;
- Reference Cost/margin disclosure;
- revocation/concurrency;
- durable denial audit;
- ESC-1;
- transaction-history cascade;
- evidence-vs-implementation distinction.

Do not merely cite the findings in an appendix.

## 7. EIS status

The new EIS must be marked:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

It must explicitly state:

- Product Blueprint: LOCKED;
- EIS: DRAFT / NOT LOCKED;
- implementation package: NOT AUTHORIZED;
- implementation: NOT AUTHORIZED;
- schema / SQL / migrations: NOT AUTHORIZED;
- production/provider mutation: NOT AUTHORIZED.

## 8. Authorized writable paths

Edit/create only:

1. `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`
2. `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md`
3. `communication/missions/SB-P-1.12/README.md`
4. `communication/missions/SB-P-1.12/decision-log.md`
5. `communication/missions/SB-P-1.12/handover-log.md`
6. `communication/live/report1.23.md`

Do not modify:

- locked Blueprint;
- FCTM;
- source contracts;
- Founder records;
- Stage 7 Security reports;
- Mission Control gate records;
- application code;
- schema;
- SQL;
- migrations;
- provider configuration;
- production.

If another path is necessary, STOP and report.

## 9. Required Stage 9 creation report

Create:

`communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md`

It must include:

- exact canonical baseline;
- sources read;
- resulting EIS blob;
- changed paths;
- EIS requirement count;
- FCTM 267-row coverage count;
- orphan count;
- workstream proposal;
- ESC-1 design summary;
- `22-§20-2` treatment;
- G-6/T4 treatment;
- legal/privacy/retention treatment;
- specialist-finding coverage;
- any unresolved engineering questions;
- any T1–T8 trigger raised by EIS drafting;
- exact validation performed;
- whether the draft is ready for Stage 10 Mission Control / specialist review.

Also create:

`communication/live/report1.23.md`

Return:

- branch;
- exact commit;
- DRAFT PR;
- changed paths;
- resulting blobs;
- CI;
- STOP for Mission Control Stage 10 disposition.

## 10. Git authority

After this instruction is human-merged and Mission Control verifies it, Claude Code is authorized under:

`SB-P-1.12-WP-STAGE9-EIS-CREATION`

to:

- fetch/read;
- create one mission branch from the verified canonical main;
- edit only the six authorized paths;
- run applicable documentation/build checks;
- commit;
- push the mission branch;
- open one DRAFT PR to `main`;
- return through `report1.23.md`.

No direct push to `main`.

No self-merge.

No self-approval.

Authority expires on the earliest of:

- Mission Control Stage 10 disposition;
- material drift of the named canonical baseline before branch creation;
- mission pause/revocation/supersession;
- repository protocol stop event;
- `2026-10-20T23:59:59Z`.

## 11. Stop conditions

STOP and report if:

- faithful EIS design requires changing locked Product Truth;
- an FCTM disposition/assignment/build commitment/commercial classification must change;
- any of the 267 IN SCOPE rows cannot be mapped honestly;
- ESC-1 appears infeasible to resolve without changing approved product behavior;
- the proposed safe deletion design conflicts with competent legal/privacy/retention input;
- a new product behavior is required;
- a required edit falls outside authorized paths;
- repository evidence materially contradicts the locked Blueprint.

## 12. Carried-forward holds

During Stage 9:

- Blueprint remains `APPROVED — LOCKED`.
- R-2 source coverage remains CLOSED / SATISFIED.
- ESC-1 remains OPEN T8.
- `22-§20-2` remains BLOCKED / IN SCOPE.
- G-6/T4 remains UNVERIFIED.
- professional legal/privacy/retention validation remains deferred.
- EIS remains DRAFT until Stage 10/11.
- no implementation package.
- no implementation.
- no schema, SQL or migrations.
- no provider mutation.
- no identity-deletion runtime.
- no production action.

**STOP FOR MISSION CONTROL STAGE 10 REVIEW.**
