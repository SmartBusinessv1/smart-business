# SMART BUSINESS MISSION CONTROL

# Instruction 1.9 — Engineering Implementation Specification Creation

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**From:** Mission Control

**To:** Claude Code — Engineering Review and Implementation Specification

**Mission Status:** ACTIVE

**Date:** 2026-08-04

---

# 1. Authority

The Founder-approved SB-P-1.11 Product Blueprint has completed Engineering Review and is formally locked.

The locked authority is:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- Founder Decisions D-001 through D-068
- Product Blueprint Sections 1 through 21
- the approved engineering sequencing recorded in Sections 20–21
- `communication/live/report1.8.md`

This instruction authorizes the next lifecycle action only: Engineering Implementation Specification creation.

Under Source 18, this is formally **Stage 9 — EIS Creation** within Part One Point Five — Engineering Implementation Specification.

This instruction does not authorize EIS acceptance, EIS lock, implementation-package creation, or implementation.

---

# 2. Mission Objective

Create an implementation-ready Engineering Implementation Specification for SB-P-1.11 that translates the locked Product Blueprint into precise technical requirements without changing, extending, reinterpreting, or reopening Product Truth.

The EIS must be sufficiently explicit for later Mission Control review and specialist review.

The EIS remains a draft until separately reviewed and locked.

---

# 3. Required Repository Synchronization

Before beginning:

1. Fetch the latest remote state.
2. Fast-forward synchronize with `origin/main`.
3. Confirm the working branch starts from the current `main` containing the accepted Blueprint Lock.
4. Record the synchronized base commit in the completion report.
5. Do not reuse, overwrite, or force-push any Mission Control authorization branch.

Use a new protected mission branch.

Recommended branch:

`mission/SB-P-1.11-eis-creation`

---

# 4. Required Source Pack

Read and apply, in authority order where relevant:

1. `merge/active/00_Lighthouse_Constitution.md`
2. `merge/active/01_Smart_Business_Master_System_Manifesto.md`
3. `merge/active/11_Smart_Business_Product_Truth_Map.md`
4. `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
5. `merge/active/02_Supabase_Architecture_Framework.md`
6. `merge/active/03_Lovable_Build_Framework.md`
7. `merge/active/04_API_WhatsApp_OpenAI_Framework.md`
8. `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md`
9. `merge/active/12_Product_Execution_and_Release_Framework.md`
10. `merge/active/17_AI_Operations_Manual.md`
11. the locked SB-P-1.11 Product Blueprint
12. the SB-P-1.11 Founder Product Decision Record, read-only
13. `communication/live/report1.2.md`
14. `communication/live/report1.4.md`
15. `communication/live/report1.6.md`
16. `communication/live/report1.7.md`
17. `communication/live/report1.8.md`
18. current repository architecture, migrations, functions, tests, and existing mission precedents
19. the locked SB-P-1.10 Blueprint and any approved implementation artifacts that provide reusable engineering precedent

Where a repository path differs from this source-pack shorthand, locate the current approved path without changing source authority.

---

# 5. Authorized Output

Create exactly:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

Create the completion and traceability report at:

`communication/live/report1.9.md`

The report must link to the EIS path and summarize evidence. It must not duplicate the complete EIS.

---

# 6. Required EIS Status

The EIS must clearly state:

```text
DRAFT — MISSION CONTROL REVIEW REQUIRED
```

It must also state:

```text
EIS LOCK: NOT APPLIED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```

Do not label the EIS approved, accepted, locked, implementation-ready by authority, or authorized for build.

Technical readiness may be assessed, but governance approval remains pending.

---

# 7. Product Authority Boundary

Treat the following as immutable:

- Product Blueprint Sections 1–21
- Founder Decisions D-001–D-068
- accepted Builder Review conclusions
- accepted Engineering Review conclusions
- approved three-phase engineering sequencing
- Blueprint Lock metadata and governance history

Do not:

- reopen Product Truth;
- create a new Founder decision;
- modify or reinterpret an existing Founder decision;
- alter Build Now, Build Later, Add-on, Separate Product, or Reject classifications;
- broaden the mission beyond Product Catalog & Pricing;
- silently resolve a product ambiguity through engineering design.

Any genuine Product Truth conflict or unresolved product decision must be reported as:

```text
FOUNDER DECISION REQUIRED
```

Do not edit the Product Blueprint or Founder Product Decision Record during this mission.

---

# 8. Required EIS Coverage

The EIS must, at minimum, define the following implementation domains.

## 8.1 Architecture and Scope Map

- implementation boundaries for SB-P-1.11;
- repository components affected;
- reused architecture versus new architecture;
- explicit exclusions;
- dependency map;
- phased delivery sequence aligned with locked Section 20–21 recommendations.

## 8.2 Data Model

Define implementation-grade entities, fields, types, relationships, constraints, indexes, lifecycle states, and ownership boundaries for at least:

- products;
- product categories;
- product-category relationships where applicable;
- selling units and merchant-defined custom units;
- tax configuration and tax inheritance/override state;
- catalog selling-price state;
- scheduled price changes;
- cost state and protected cost history;
- inventory links;
- product deletion/archive audit records;
- import jobs, import rows, validation outcomes, and idempotency where required;
- audit-history records and request identifiers.

Do not execute migrations or create SQL files in this mission.

## 8.3 Business Isolation and RLS Design

Define:

- tenant/business ownership columns;
- owner, manager, and employee access boundaries;
- RLS policy intent;
- service-role boundaries;
- cross-business denial behavior;
- protected financial-field read paths;
- why row-level security alone is insufficient for cost/margin hiding and the approved permission-aware read approach;
- testing expectations for business isolation.

## 8.4 Permission-Engine Dependency

Document the shared permission-engine dependency identified by Engineering Review.

Specify:

- catalog permission capabilities required;
- owner defaults;
- manager and employee permission checks;
- denial behavior;
- enforcement locations across database, RPC, API, and UI layers;
- temporary sequencing constraints if the shared permission engine is delivered separately;
- what catalog scope may proceed before that shared engine exists;
- what must not be exposed or enabled prematurely.

Do not invent or implement the shared permission engine in this mission.

## 8.5 Catalog–Inventory Link Integrity

Define the complete technical contract for:

- one-to-one business-scoped linking;
- first-time assignment;
- permitted replacement;
- permitted removal under D-047;
- history-based lock conditions;
- archive-state behavior;
- inventory base-unit authority;
- product selling-unit consequences;
- transaction and concurrency behavior;
- stale-client protection;
- audit outcomes.

D-047 and D-068 must be explicitly traceable.

## 8.6 D-068 Atomic Safeguard

Specify a single atomic server-authoritative operation for first-time assignment or permitted replacement when the selling unit changes.

The contract must cover:

- precondition checks;
- current and proposed link identities;
- current and proposed units;
- current selling price;
- confirmed or replacement selling price;
- explicit merchant confirmation;
- validation;
- idempotency key;
- row locking or equivalent concurrency control;
- atomic save behavior;
- all four no-change failure modes:
  - cancellation;
  - incomplete confirmation;
  - validation failure;
  - save failure;
- audit-history writes;
- error responses safe for Lovable and conversational channels.

Do not define this as an unprotected multi-step client-only workflow.

## 8.7 Price, Tax, and Cost Write Integrity

Define:

- authoritative write paths;
- append-only history behavior;
- previous/new values;
- responsible actor;
- business timezone context;
- request/idempotency identifiers;
- server validation;
- concurrency handling;
- permission enforcement;
- cost and margin confidentiality;
- catalog-price authority versus future Sales Workflow overrides;
- failure and rollback behavior.

Reuse accepted SB-P-1.10 ledger and idempotency patterns where applicable without copying incompatible domain assumptions.

## 8.8 Scheduled Pricing and Timezone Handling

Define:

- storage timezone;
- business timezone source of truth;
- activation timestamp interpretation;
- daylight-saving-safe behavior where applicable;
- job/worker or query-time activation model;
- idempotent activation;
- missed-run recovery;
- conflicting schedule handling;
- cancellation/edit rules consistent with locked Product Truth;
- auditability;
- UI and conversational display expectations.

## 8.9 Multilingual Normalization and Search

Define implementation behavior for English, Malayalam, and Manglish entry and search, including:

- storage of merchant-entered canonical text;
- normalization fields;
- business-scoped matching;
- deterministic exact/normalized matching;
- transliteration and spelling-assistance boundaries;
- uncertain-match review requirements;
- no silent rename, merge, translation, overwrite, or cross-business matching;
- indexing strategy;
- test cases.

## 8.10 CSV and Excel Import Architecture

Define:

- accepted file types and size boundaries;
- upload and parsing boundary;
- column mapping;
- validation staging;
- row-level error reporting;
- duplicate and normalization handling;
- dry-run/preview behavior;
- explicit confirmation before write;
- partial-success policy consistent with financial/catalog integrity;
- idempotency and retry behavior;
- audit trail;
- storage cleanup;
- permission requirements;
- security controls for malicious or malformed files.

Do not implement import processing in this mission.

## 8.11 WhatsApp, Voice, Text, and Photo Dependency

Document the shared conversational-engine dependency and the catalog-specific contract it must eventually satisfy.

Define:

- supported catalog intents;
- guided clarification requirements;
- media-handling boundary;
- confidence and merchant-confirmation requirements;
- no autonomous destructive or financially sensitive writes;
- use of the same server-authoritative catalog commands as the dashboard;
- webhook idempotency and retries;
- auditability;
- permission and business-context resolution;
- sequencing constraints before the shared conversational engine exists.

Do not create webhook code, prompts, model configuration, or media-processing implementation in this mission.

## 8.12 API, RPC, and Command Contracts

Specify the required server-authoritative command/query surface, including:

- operation name and purpose;
- input shape;
- authorization requirements;
- validation;
- transaction boundary;
- idempotency behavior;
- result shape;
- stable error categories;
- audit effects;
- expected consumers: dashboard, import pipeline, WhatsApp/voice/photo integration.

Use implementation-neutral contracts where final naming depends on repository convention, but be precise enough for later implementation.

## 8.13 Frontend and Lovable Responsibilities

Define:

- routes and screens within current approved route architecture;
- form and preview states;
- permission-aware presentation;
- protected cost/margin rendering;
- inventory-link confirmation flow;
- import preview/error experience;
- scheduled-price experience;
- multilingual search behavior;
- loading, empty, validation, conflict, and failure states;
- frontend responsibilities versus server-authoritative responsibilities;
- accessibility and mobile merchant usability requirements.

Do not create a Lovable build prompt in this mission.

## 8.14 Audit and Observability

Define:

- append-only audit events;
- correlation/request IDs;
- actor and channel attribution;
- before/after values where permitted;
- protected financial-data handling;
- operational logs;
- failure metrics;
- import metrics;
- scheduled-price activation metrics;
- conversational-channel traceability;
- alerting expectations;
- retention and access boundaries.

## 8.15 Security and Privacy

Define controls for:

- tenant isolation;
- least privilege;
- permission enforcement;
- protected cost/margin data;
- upload security;
- malicious spreadsheet content;
- webhook/media trust boundaries;
- service-role access;
- secret handling;
- audit-log confidentiality;
- rate limiting and abuse protection;
- safe error disclosure.

## 8.16 Migration and Rollout Strategy

Define a proposed future migration sequence without creating or running migrations.

Include:

- prerequisite checks;
- additive-first rollout;
- backfill expectations;
- indexes and constraints ordering;
- RLS rollout;
- RPC/command rollout;
- frontend enablement;
- feature flags where justified;
- permission-engine dependency sequencing;
- conversational-engine dependency sequencing;
- rollback and forward-fix strategy;
- production verification gates.

## 8.17 Testing and Verification Matrix

Define required future tests for:

- unit behavior;
- schema constraints;
- RLS and business isolation;
- permissions;
- D-047 history boundaries;
- D-068 atomicity and all failure modes;
- concurrency and stale clients;
- price/tax/cost histories;
- scheduled pricing and timezone behavior;
- multilingual matching;
- imports;
- conversational command reuse;
- audit history;
- accessibility and critical UI states;
- negative and adversarial cases.

## 8.18 Traceability Matrix

Map each technical requirement to:

- relevant Founder Decision D-001–D-068;
- relevant Blueprint section;
- applicable Engineering Review conclusion;
- applicable governance or architecture source;
- proposed future verification evidence.

No material technical requirement may remain untraceable.

---

# 9. Required Engineering Questions and Risks

The EIS must explicitly identify and classify:

- blocking issues;
- non-blocking dependencies;
- assumptions requiring repository verification;
- areas requiring specialist review;
- Product Truth conflicts, if any;
- security risks;
- migration risks;
- operational risks;
- sequencing risks;
- technical-debt risks.

Use only these dispositions where applicable:

```text
READY FOR MISSION CONTROL REVIEW
SPECIALIST REVIEW REQUIRED
REFINEMENT REQUIRED
FOUNDER DECISION REQUIRED
BLOCKED
```

Do not self-approve.

---

# 10. Required Completion Report

Create:

`communication/live/report1.9.md`

The report must include:

1. mission identity and actor identity;
2. exact synchronized base commit;
3. exact branch name;
4. exact commit SHA or SHAs;
5. pull-request number and state;
6. exact changed-file list;
7. EIS path;
8. EIS status;
9. concise architecture summary;
10. explicit treatment of all required EIS coverage areas;
11. cross-mission dependencies;
12. blocking issues and specialist-review needs;
13. Product Truth integrity confirmation;
14. confirmation that the Blueprint and Founder Decision Record were not modified;
15. validation and quality-gate results;
16. scope-boundary confirmation;
17. final disposition.

The final disposition should normally be:

```text
EIS DRAFT COMPLETE — READY FOR MISSION CONTROL REVIEW
```

Use a different disposition only where evidence requires it.

---

# 11. Authorized Changed Paths

Only these paths may change:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/report1.9.md`

Do not modify:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- any governance source;
- any prior instruction or report;
- application code;
- tests;
- database files;
- SQL;
- migrations;
- RLS policies;
- Supabase configuration;
- Lovable files;
- infrastructure;
- deployment or production state.

---

# 12. Explicitly Prohibited Work

This instruction does not authorize:

- EIS review acceptance;
- EIS lock;
- Blueprint amendment;
- new Founder decisions;
- implementation-package creation;
- `engineering-contract.md`;
- `lovable-build-prompt.md`;
- `verification-checklist.md`;
- application implementation;
- database implementation;
- SQL or migration creation;
- RLS implementation;
- RPC or Edge Function implementation;
- webhook implementation;
- AI prompt or model implementation;
- Lovable implementation;
- testing implementation;
- deployment;
- production changes;
- mission acceptance or closure.

---

# 13. Repository and Review Protocol

1. Work on a protected mission branch.
2. Commit only authorized files.
3. Run repository Markdown quality gates.
4. Run whitespace and secret/credential checks.
5. Verify the exact changed-file scope.
6. Open a pull request against `main`.
7. Do not approve or merge your own pull request.
8. Report only after remote branch and PR verification.
9. Leave the PR ready for Mission Control review.

---

# 14. Mission Control Acceptance Criteria

Mission Control will accept the EIS draft for review only when:

- the locked Blueprint is preserved;
- all EIS coverage areas are addressed;
- technical contracts are implementation-grade;
- D-047 and D-068 are unambiguous and server-authoritative;
- business isolation and permission boundaries are explicit;
- cross-mission dependencies are sequenced without scope expansion;
- all technical requirements are traceable;
- no unauthorized artifact changed;
- the EIS is clearly marked draft;
- EIS lock and implementation remain explicitly unauthorized;
- repository evidence is complete.

---

# 15. Required Final Status

```text
SB-P-1.11 BLUEPRINT: LOCKED
EIS CREATION: AUTHORIZED
EIS REVIEW: NOT YET PERFORMED
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
