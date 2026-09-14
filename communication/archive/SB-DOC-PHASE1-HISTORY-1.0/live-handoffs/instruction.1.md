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

The historical mission remains open specifically so Mission Control can reconcile the Founder-accepted product/build proposal with an independent repository-grounded Claude Code plan before future Product Missions are authorized.

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

Answer:

> Given the current repository and architecture, what is the safest, fastest, most scalable and maintainable engineering path to fully implement the 25 mature Smart Business contracts while preserving valid existing work and correcting drift?

Challenge Mission Control wherever repository evidence supports a better approach.

---

## 5. Mandatory Review Areas

Your durable response must cover all of the following.

### A. Current architecture map

Identify the exact current engineering state, including reusable routes, components, domain modules, migrations, tables, views, functions/RPCs, RLS policies, grants, parsers, import pipelines, idempotency/lease/guard infrastructure, tests, and deployment/integration assumptions.

Call out stale, duplicate, dangerous, tightly coupled, or dead-end structures.

### B. Catalog / Product & Price Master verdict

Review the Founder/Mission Control conclusion that Catalog should not remain a competing top-level product identity, while valid engineering should be preserved as a shared Product & Price Master.

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

Explicitly answer:

> Can Smart Business be designed so Meta/WhatsApp can be disconnected without disabling the core product, while later allowing WhatsApp to reuse exactly the same Business Memory, permissions, AI orchestration, UDI, confirmation and domain-command paths?

If yes, define the boundary concretely. If no, explain what must change.

### E. Dependency graph

Provide the actual engineering dependency graph across all 25 contracts, identifying hard dependencies, soft dependencies, parallelizable preparation, sequencing constraints, schema conflicts, integration risks, and critical-path work.

### F. Schema/API/service delta by proposed mission

For every proposed mission, identify likely tables/columns, functions/RPCs, service boundaries, APIs, UI surfaces, background jobs, storage objects/metadata, external integrations, and migration needs.

Do not fabricate exact implementation details where repository evidence is insufficient. Mark them as design work required.

### G. Security architecture

Review tenant isolation; Owner/Manager/Employee/external-role boundaries; RLS and grants; privileged functions; service-role boundaries; server-only operations; webhook validation; delegated authority; AI tool/action execution; document/media retrieval authorization; auditability; and rollback/security migration risks.

Flag current implementation that should block rapid expansion until corrected.

### H. AI architecture

Define the engineering boundary for model interpretation, typed tool calls/action proposals, Business Memory retrieval, permission propagation, confirmation, deterministic writes, conversation persistence, voice, documents, evaluation, observability, and provider/model portability.

AI must not become the authority layer.

### I. UDI / storage architecture

Define how existing parser/import work should evolve into shared Universal Document Intelligence and durable media/document storage, including opening-stock import, Catalog import, receipt/document interpretation, preview-confirm-update, provenance, binary object storage, Supabase metadata/control plane, Cloudflare R2 boundary, retention/lifecycle uncertainty, and safe retrieval.

### J. Automation architecture

Define a reusable scheduler/continuation/delegation architecture for reminders, Daily Intelligence, compliance, credit follow-up, reorder continuation, Staff/HR, orders/delivery, and other time-based workflows.

Avoid feature-specific duplicate schedulers.

### K. Migration and rollback

Explain how future missions can preserve current valid business data, including forward-compatible migrations, backfills, feature flags, route compatibility, rollback boundaries, production-data safety, and builder/runtime sync risks.

### L. Test and evidence architecture

Recommend acceptance evidence across unit, database, RLS allow/deny, integration, end-to-end, AI, multilingual, load/performance, webhook/idempotency, failure/retry, migration/rollback, and runtime verification.

### M. Observability and scalability

Define measurements for latency, errors, DB/query performance, AI latency/cost/tokens, document processing, automation success/lateness, storage growth/retrieval, channel delivery/retries, idempotency suppression, permission denials, and privacy-respecting feature adoption.

### N. Reuse map

Classify major current implementation areas as:

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

## 6. Required Durable Output

Create exactly this substantive response file:

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

## 7. Required Live Return Communication

This is a deliberately authorized numbered compatibility sequence under the repository communication model.

Current instruction:

`communication/live/instruction.1.md`

After creating and committing the durable response file above, Claude Code must create:

`communication/live/report.1.md`

`report.1.md` is **Claude Code's short return communication to Mission Control**. It is not the substantive engineering plan and it is not Mission Control acceptance.

Keep `report.1.md` concise. It must record at minimum:

- that `02_Claude_Code_Independent_Build_Plan.md` was created;
- the branch and commit SHA containing the response;
- PR number/link if a PR was opened;
- a short engineering briefing of the major conclusions;
- the Catalog / Product & Price Master verdict;
- the Native Conversation / WhatsApp separation verdict;
- whether the nine-mission sequence is confirmed, confirmed with changes, or materially challenged;
- the most important blockers, technical-debt risks, security concerns, and Founder decisions requiring attention;
- confirmation that no implementation was performed;
- a clear return-to-Mission-Control status.

Do **not** duplicate the full durable build plan inside `report.1.md`.

Mission Control will use `report.1.md` as the communication record and will independently read the durable plan.

If Mission Control requires changes after review, it will issue:

`communication/live/instruction.2.md`

Claude Code should then respond through:

`communication/live/report.2.md`

and so on for later correction rounds.

The numbered instruction/report pair is therefore the auditable communication channel; substantive planning artifacts remain durable under the historical mission folder.

Claude Code must not self-approve its plan.

---

## 8. Stop Condition

Stop only after:

1. creating and committing `02_Claude_Code_Independent_Build_Plan.md`; and
2. creating `communication/live/report.1.md` with the short completion/briefing record defined above.

Do not implement the future build.

Do not close the historical mission.

Do not archive historical communications.

Do not begin `SB-P-1.12`.

Return control to Mission Control for independent review.
