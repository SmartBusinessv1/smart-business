# SMART BUSINESS — REPOSITORY COMMUNICATION

# Instruction 1 — Independent Engineering Review of Founder-Accepted Build Proposal

**Mission ID:** `SB-DOC-PHASE1-HISTORY-1.0`

**Mission Name:** `Phase 1 Historical Continuity Reconstruction`

**From:** Smart Business Mission Control

**To:** Claude Code

**Status:** `ACTIVE — ENGINEERING BUILD-PLAN REVIEW ONLY`

**Date:** `2026-09-12`

---

## 1. Authority and Scope

This instruction authorizes an **independent engineering review and build-plan response only**.

It does **not** authorize implementation.

Do not:

- modify application code;
- modify database schema;
- run migrations;
- deploy infrastructure;
- publish Lovable changes;
- change Supabase runtime state;
- integrate WhatsApp;
- create future `SB-P-*` mission implementation branches;
- treat this instruction as Product Mission authorization.

The historical mission remains open specifically so Mission Control can reconcile the product/build proposal with an independent repository-grounded Claude Code plan before future Product Missions are authorized.

---

## 2. Required Primary Artifact

Read fully:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/01_Mission_Control_Founder_Accepted_Build_Proposal.md`

This is the Founder-accepted Mission Control proposal, including the Founder amendment that deliberately separates:

- native Smart Business Conversation + AI intelligence; from
- later WhatsApp channel integration.

Do not silently collapse that distinction.

---

## 3. Required Repository Context

Use the complete canonical repository as engineering evidence.

At minimum, inspect and reconcile against:

- current source/governance hierarchy;
- Source 00, Source 01, Source 11, Source 17, Source 18, and applicable frameworks;
- `docs/phase-1-mission-blueprint/smart-business-features/` — all 25 mature contracts;
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`;
- current implementation directories;
- `docs/implementation/SB-P-1.9/` and later implementation evidence where relevant;
- completed mission continuity records `SB-P-1.0` through `SB-P-1.11`;
- current frontend routes/components;
- current Supabase migrations/schema/RPC/RLS/grants/functions;
- parser/import/idempotency foundations;
- transaction/inventory/catalog/product/pricing structures;
- tests and CI;
- any current infrastructure/configuration evidence that materially affects sequencing;
- relevant historical reconciliation artifacts under `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/`.

Do not treat historical summaries as stronger than direct repository/runtime evidence.

Do not treat current code as Product Truth merely because it already exists.

---

## 4. Your Role

Act as the independent engineering counterweight to Mission Control's product/build proposal.

Your task is not to praise or rubber-stamp the proposal.

Your task is to answer:

> Given the current repository and architecture, what is the safest, fastest, most scalable and maintainable engineering path to fully implement the 25 mature Smart Business contracts while preserving valid existing work and correcting drift?

Challenge Mission Control wherever repository evidence supports a better approach.

---

## 5. Mandatory Questions

Your response must answer all of the following.

### A. Current architecture map

Identify the exact current engineering state, including reusable:

- routes;
- components;
- domain modules;
- migrations;
- tables;
- views;
- functions/RPCs;
- RLS policies;
- grants;
- parsers;
- import pipelines;
- idempotency/lease/guard infrastructure;
- tests;
- deployment/integration assumptions.

Call out stale, duplicate, dangerous, tightly coupled, or dead-end structures.

### B. Catalog / Product & Price Master verdict

Review the Founder/Mission Control conclusion that Catalog should not remain a competing top-level product identity, while its engineering should be preserved as a shared Product & Price Master.

Determine:

1. whether this diagnosis is technically sound;
2. what current Catalog structures are safely reusable;
3. what should be renamed/reframed versus physically migrated;
4. whether top-level navigation can be demoted without breaking workflows;
5. what route/deep-link compatibility is required;
6. what should remain as an advanced structured-management surface;
7. what data migrations, if any, are necessary;
8. what must explicitly not be deleted.

### C. Nine-mission sequence review

Review the proposed future sequence:

1. `SB-P-1.12 — Authority, Identity & Product Surface Foundation`
2. `SB-P-1.13 — Native Conversation & AI Intelligence Foundation`
3. `SB-P-1.14 — Business Memory, Documents & Durable Media`
4. `SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO`
5. `SB-P-1.16 — Financial Integrity & Credit`
6. `SB-P-1.17 — Manager Operations`
7. `SB-P-1.18 — Controlled Business Add-ons`
8. `SB-P-1.19 — Activation, Lifecycle & Platform Stewardship`
9. `SB-P-1.20 — WhatsApp Channel Integration`

For each proposed mission, classify:

- `CONFIRM`;
- `CONFIRM WITH CHANGE`;
- `REJECT / REPLACE`;
- `FOUNDER DECISION REQUIRED`;
- `INSUFFICIENT EVIDENCE`.

If recommending a different mission boundary, explain why it improves speed, safety, measurability or architectural coherence.

Do not reduce or increase mission count merely for neatness.

### D. Native Conversation / WhatsApp separation

The Founder intentionally requires Smart Business to remain capable when WhatsApp is temporarily unavailable.

Evaluate whether the proposed separation is technically clean:

- `SB-P-1.13` owns native Conversation Workspace + Human Language + Basic Voice + AI orchestration + permission/action kernel;
- `SB-P-1.20` later integrates WhatsApp as a thin adapter.

You must explicitly answer:

> Can Smart Business be designed so Meta/WhatsApp can be disconnected without disabling the core product, while later allowing WhatsApp to reuse exactly the same Business Memory, permissions, AI orchestration, UDI, confirmation and domain-command paths?

If yes, define the boundary concretely.

If no, explain what must change.

### E. Dependency graph

Provide the actual engineering dependency graph across all 25 contracts.

Identify:

- hard dependencies;
- soft dependencies;
- parallelizable preparation;
- sequencing constraints;
- schema conflicts;
- integration risks;
- critical-path work.

### F. Schema/API/service delta by proposed mission

For every proposed mission, identify likely:

- tables/columns;
- functions/RPCs;
- service boundaries;
- APIs;
- UI surfaces;
- background jobs;
- storage objects/metadata;
- external integrations;
- migration needs.

Do not fabricate exact implementation details where repository evidence is insufficient. Mark them as design work required.

### G. Security architecture

Review:

- tenant isolation;
- Owner/Manager/Employee/external-role boundaries;
- RLS and grants;
- privileged functions;
- service-role boundaries;
- server-only operations;
- webhook validation;
- delegated authority;
- AI tool/action execution;
- document/media retrieval authorization;
- auditability;
- rollback/security migration risks.

Flag any current implementation that should block rapid expansion until corrected.

### H. AI architecture

Define the engineering boundary for:

- model interpretation;
- typed tool calls/action proposals;
- Business Memory retrieval;
- permission propagation;
- confirmation;
- deterministic writes;
- conversation persistence;
- voice;
- documents;
- evaluation;
- observability;
- provider/model portability.

AI must not become the authority layer.

### I. UDI / storage architecture

Define how existing parser/import work should evolve into shared Universal Document Intelligence and durable media/document storage.

Specifically review:

- opening-stock import;
- Catalog import;
- receipt/document interpretation;
- preview-confirm-update;
- provenance;
- binary object storage;
- Supabase metadata/control plane;
- Cloudflare R2 integration boundary;
- retention/lifecycle uncertainty;
- safe retrieval.

### J. Automation architecture

Define a reusable scheduler/continuation/delegation architecture for:

- reminders;
- Daily Intelligence;
- compliance;
- credit follow-up;
- reorder continuation;
- Staff/HR;
- orders/delivery;
- other time-based workflows.

Avoid feature-specific duplicate schedulers.

### K. Migration and rollback

Explain how future missions can preserve current valid business data.

Include:

- forward-compatible migrations;
- backfill expectations;
- feature flags;
- route compatibility;
- rollback boundaries;
- production-data safety;
- builder/runtime sync risks.

### L. Test and evidence architecture

Recommend the acceptance evidence required across future missions:

- unit tests;
- database tests;
- RLS allow/deny tests;
- integration tests;
- end-to-end tests;
- AI evals;
- multilingual evals;
- load/performance tests;
- webhook/idempotency tests;
- failure/retry tests;
- migration/rollback tests;
- runtime evidence.

### M. Observability and scalability

Define how to measure:

- latency;
- error rates;
- DB/query performance;
- AI latency/cost/tokens;
- document processing;
- automation success/lateness;
- storage growth/retrieval;
- channel delivery/retries;
- idempotency suppression;
- permission denials;
- feature adoption where privacy permits.

### N. Reuse map

Explicitly classify major current implementation areas as:

- `PRESERVE`;
- `PRESERVE + EVOLVE`;
- `REUSABLE ENGINEERING EVIDENCE`;
- `NARROW REBASE REQUIRED`;
- `SUPERSEDED`;
- `REJECT`.

### O. Unknowns and Founder decisions

List only genuine unresolved decisions that cannot be settled through engineering evidence.

Do not turn normal engineering design choices into Founder questions.

---

## 6. Required Output Structure

Create exactly this durable response file:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

Recommended structure:

1. Executive Engineering Verdict
2. Repository Evidence Baseline
3. Current Architecture Map
4. Catalog / Product & Price Master Verdict
5. Native Conversation / WhatsApp Separation Verdict
6. 25-Contract Dependency Graph
7. Proposed Mission-by-Mission Review
8. Exact Reuse / Technical Debt Map
9. Schema/API/Service Evolution Plan
10. Security Architecture
11. AI Orchestration Architecture
12. UDI / R2 / Media Architecture
13. Automation Architecture
14. Migration / Compatibility / Rollback Plan
15. Test / Verification / Evidence Plan
16. Observability / Performance / Scale Plan
17. Critical Path and Parallelization
18. Founder Decisions Required
19. Recommended Final Mission Sequence
20. Final `CONFIRM / CHANGE / REJECT` Matrix against Mission Control proposal

Cite concrete repository paths and evidence throughout.

---

## 7. Communication Protocol

This is a deliberately authorized numbered compatibility sequence under the repository communication model.

Current instruction:

`communication/live/instruction.1.md`

Do **not** write the substantive build plan into `communication/live/report.1.md`.

The durable Claude response belongs only in:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

After you commit/push that response:

- report the branch/commit/PR/evidence as appropriate through the normal engineering workflow;
- Mission Control will read the durable response;
- if correction is required, Mission Control will issue `communication/live/instruction.2.md` or later;
- only when Mission Control considers the engineering plan acceptable will Mission Control create the matching final numbered live report.

Do not self-approve the plan.

---

## 8. Stop Condition

Stop after creating and committing the independent build-plan response.

Do not implement the future build.

Do not close the historical mission.

Do not archive historical communications.

Do not begin `SB-P-1.12`.

Return control to Mission Control for independent review.
