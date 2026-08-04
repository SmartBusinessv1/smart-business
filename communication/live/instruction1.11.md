# SMART BUSINESS MISSION CONTROL

# Instruction 1.11 — SB-P-1.11 EIS Refinement Authorization

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Context:** Source 18 Stage 10 refinement cycle before Stage 11 EIS Lock

**From:** Mission Control

**To:** Claude Code — Engineering Review and Implementation Specification

**Status:** ACTIVE

**Date:** 2026-08-04

---

## 1. Mission Objective

Refine the draft SB-P-1.11 Engineering Implementation Specification so that every accepted finding in the consolidated Stage 10 review is resolved without changing Product Truth.

Authoritative review disposition:

`communication/live/report1.10.md`

Overall Stage 10 disposition:

`REFINEMENT REQUIRED`

This instruction authorizes EIS refinement only.

It does not authorize EIS acceptance, EIS Lock, implementation-package preparation, application implementation, database implementation, deployment, or production work.

---

## 2. Mandatory Inputs

Pull and fast-forward synchronize the latest `origin/main` before beginning.

Read and use:

- `communication/live/report1.10.md`
- `communication/live/report1.10-supabase-backend.md`
- `communication/live/report1.10-ai-whatsapp.md`
- `communication/live/report1.10-security-permissions.md`
- `communication/live/report1.10-lovable-frontend.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `communication/live/report1.8.md`
- `communication/live/report1.9.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- all architecture and governance sources cited by the EIS and consolidated review
- relevant current repository architecture and the locked SB-P-1.10 EIS precedent where still applicable

The locked Product Blueprint, Sections 1–21, Founder Decisions D-001–D-068, and approved sequencing remain immutable.

The consolidated Mission Control report controls finding acceptance and deduplication. Specialist reports provide evidence and detailed correction requirements.

---

## 3. Authorized Changed Paths

Modify only:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

Create only:

- `communication/live/report1.11.md`

No other path may change.

---

## 4. Required Refinement Areas

Resolve every accepted consolidated finding in `report1.10.md`, including at minimum the following.

### 4.1 Scheduled-price state and immutable history

Replace the invalid time-dependent partial-index design.

Use one coherent, implementable architecture separating:

- stable pending-schedule state; and
- immutable price-history evidence.

The refined design must:

- enforce at most one pending scheduled price per product through stable database state;
- avoid `now()` or other volatile expressions in index predicates;
- avoid updating rows declared immutable;
- ensure one logical scheduled change becomes one authoritative effective-price change;
- define create, replace, cancel, activate, missed-run recovery, archive interaction, concurrency, and audit behavior;
- distinguish the merchant who authorized the schedule from the system actor that activated it.

### 4.2 Command-only protected writes

Make protected-write authority technically non-bypassable.

The refined EIS must state:

- direct authenticated DML is denied on protected catalog, schedule, event, audit, import, and idempotency tables;
- protected writes occur only through narrowly scoped commands;
- function ownership, execution grants, safe fixed `search_path`, schema qualification, and `REVOKE EXECUTE FROM PUBLIC` requirements;
- current business membership and action permission are verified server-side;
- no client, AI layer, webhook handler, or caller-supplied object may assert its own authority.

### 4.3 Action-specific permissions

Replace the broad `catalog_manage` authority where it collapses independently governed actions.

The permission contract must preserve separate authority for at least:

- catalog viewing;
- product creation and identity/details maintenance;
- lifecycle archive/reactivate/delete;
- selling-price management;
- tax management;
- reference-cost management;
- inventory-link management;
- sale-use access.

Import may use the approved product-creation authority where consistent with D-058.

History reads must follow the corresponding protected action or visibility permission.

Owner-only interim sequencing remains allowed, but Manager and Employee surfaces remain unavailable until the shared permission engine is implemented and verified.

### 4.4 D-068 authoritative preview and confirmation

Define a non-mutating, server-authoritative preview contract for first assignment and permitted replacement.

The preview must resolve and return the exact confirmed meaning of:

- current link;
- current selling unit;
- current effective selling price;
- proposed inventory item and base unit;
- unit-change consequence;
- whether price reconfirmation is required;
- D-047 eligibility;
- product lifecycle state;
- stable validation categories;
- an expected-state fingerprint, preview token, or equivalent precondition contract.

The final command must recalculate under deterministic row locks and reject stale state without mutation.

A stale preview requires a new preview and fresh merchant confirmation. It must never auto-retry with changed values.

### 4.5 Idempotency and uncertain outcomes

Correct idempotency ordering across protected commands.

After actor and business resolution, a known matching idempotency key and payload fingerprint must return the original result before mutable-state precondition checks.

The design must define:

- deterministic conflict behavior for the same key with a different payload;
- concurrency behavior for simultaneous first use;
- frontend key creation, retention, retry, reconciliation, and rotation;
- distinction between confirmed rollback and unknown client outcome;
- reconciliation through the same idempotency key before any new submission.

### 4.6 D-047 history boundary

Define an enforceable relationship-history contract for assignment, replacement, and removal.

The EIS must identify:

- authoritative sale-history and stock-event-history sources;
- the link-tenure evidence used to associate qualifying history with the product–inventory relationship;
- qualifying event classes;
- event-time and recorded-time treatment;
- deterministic lock and transaction ordering;
- behavior when a required future Sales-domain predicate is unavailable;
- default-deny behavior where the approved boundary cannot be proven;
- concurrency behavior when history is created during a link-change attempt.

Link removal remains accepted without D-068 price reconfirmation because it writes no new unit or price, provided it preserves the current selling unit and price and satisfies D-047.

### 4.7 Dashboard and non-interactive channel authority

Separate interactive dashboard identity from WhatsApp and other server-originated execution.

The future shared channel contract must:

- verify the inbound event and sender;
- resolve one canonical Smart Business identity and business membership;
- recheck current action permission at execution time;
- bind confirmation to a unique pending action, exact payload, actor, business, channel event, preview state, and expiry;
- derive business and actor server-side;
- use a narrowly privileged internal command not exposed to public clients;
- prevent service-role use from becoming general merchant authority;
- safely handle duplicate webhooks, stale confirmations, revoked permissions, delayed messages, and reply-delivery failure.

Remove catalog-owned normative intent taxonomy or receipt-pipeline generalization that belongs to the future shared conversational-engine mission. Preserve only the implementation-neutral contract required by SB-P-1.11.

### 4.8 AI assistance boundaries

Require field-level provenance and uncertainty for extracted product data.

AI must not invent or silently fill consequential values such as:

- product identity;
- unit;
- price;
- tax treatment or rate;
- reference cost;
- barcode or SKU;
- inventory-link target.

Missing consequential values remain blank or require clarification. Every consequential preview must have a durable text representation. Voice-response boundaries must remain consistent with approved role and channel rules.

### 4.9 Permission-aware reads and sensitive financial data

Harden cost, margin, and protected-history reads.

Require:

- no raw client access to protected cost tables;
- dedicated, narrowly authorized read commands or response shapes;
- current server-side permission checks on every call;
- server-derived business scope;
- response types that physically omit unauthorized fields;
- no leakage through errors, imports, logs, metrics, search results, totals, or conversational context;
- explicit `SECURITY DEFINER` ownership, grants, and search-path safeguards where used.

### 4.10 Scheduler authority

Define a least-privilege scheduled activation contract.

Require:

- a dedicated no-login owner or equivalent narrowly privileged execution identity;
- no merchant-client execution;
- fixed search path and qualified objects;
- bounded batching;
- safe work claiming and deterministic locking;
- per-product or per-row failure isolation;
- retry-safe processing;
- missed-run recovery;
- interaction with cancel and archive;
- authorizing-user and system-executor provenance;
- job-run/request identifiers and observable lag.

The proposed one-minute polling interval may remain an initial engineering value, but the EIS must define bounded activation delay and merchant-visible delayed-state behavior.

### 4.11 File, import, and storage security

Business-bind product images and import files through approved metadata references rather than unconstrained text or public URLs.

The import contract must define:

- content and archive-structure inspection;
- accepted types;
- compressed and uncompressed size limits;
- worksheet, row, column, and cell-length limits;
- per-business concurrency and rate limits;
- macro, external-link, and formula handling;
- formula-injection neutralization in every downloadable CSV/XLSX or error report;
- quarantine;
- retention and deletion;
- cancellation and cleanup;
- final job-level confirmation;
- apply-time revalidation;
- row claiming, per-row idempotency, resumability, progress, and partial-success semantics;
- safe unknown-outcome reconciliation.

Exact operational values may remain configurable engineering parameters where the consolidated review allows.

### 4.12 Frontend and Lovable contract

Make the frontend behavior deterministic and testable.

Define:

- server-authoritative D-068 preview rendering;
- stale-state refresh, re-preview, and reconfirmation;
- idempotency-key lifecycle;
- duplicate-submit prevention;
- unknown-outcome reconciliation;
- multilingual possible-match uncertainty presentation;
- import summary, correction, apply, progress, resume, and outcome behavior;
- scheduled-price delayed-activation presentation;
- route and navigation exposure only when the relevant phase is deployed and verified;
- stable identifiers for critical controls;
- keyboard, focus, screen-reader, mobile, non-color, and reduced-motion requirements.

Frontend visibility is never authorization.

### 4.13 Tax-mode lock and future Sales dependency

Replace the invalid claim that a normal table CHECK can enforce a cross-table completed-sales condition.

Define the pricing-mode lock as a server-authoritative command invariant using an approved Sales-domain predicate when Sales exists.

Until that predicate exists, document the safe sequencing boundary and the integration gate required before production sales are enabled.

### 4.14 Conditional hard deletion

Define one closed, atomic deletion-eligibility command contract.

It must:

- lock the product;
- evaluate every current governed dependency;
- default to denial for unknown or unavailable dependency checks;
- preserve the D-065 minimal deletion audit snapshot;
- use restrictive foreign-key behavior for business-history tables;
- delete only when all approved conditions are satisfied;
- commit audit evidence and deletion atomically.

### 4.15 Audit provenance and generic references

Standardize immutable provenance across all dedicated event histories and generic audit evidence.

Include where applicable:

- business;
- actor user;
- actor type;
- authorizing user;
- system executor;
- channel;
- action/permission authority;
- request/correlation ID;
- job or channel-event ID;
- recorded time;
- effective time;
- outcome.

Resolve generic entity-reference integrity through a strongly typed or controlled-command design that prevents unsupported, cross-business, and orphaned references while preserving deletion evidence.

### 4.16 Multilingual matching and index strategy

Preserve deterministic exact normalized matching as authoritative.

Possible matches remain best-effort, business-scoped, clearly uncertain, accessible, and non-authoritative.

Do not represent `pg_trgm` as cross-script language understanding.

Final similarity thresholds and non-critical indexes may remain subject to representative Kerala-language data and query-plan validation. Security-critical uniqueness, RLS, lock, idempotency, and history predicates must be explicitly identified for implementation validation.

---

## 5. Mandatory Open-Parameter Dispositions

The refined EIS must record Mission Control's consolidated disposition for all seven Stage 10 parameters:

1. Multilingual similarity algorithm and threshold — refinement of contract required; exact measured value may remain an engineering parameter.
2. CSV/Excel limits — mandatory multidimensional controls required; exact operating values may remain configurable.
3. Index strategy — invalid scheduled-price index must be replaced; final non-critical indexes remain query-plan validated.
4. Scheduled-price polling — one minute may remain an initial value subject to bounded-lag and recovery requirements.
5. Shared permission-engine sequencing — separate governed shared foundation; Manager/Employee catalog access remains blocked until available.
6. Shared conversational-engine sequencing — separate governed shared foundation; no catalog-specific substitute pipeline.
7. Inventory-link removal — accepted without D-068 price reconfirmation, conditional on D-047 enforcement and preservation of current unit and price.

No item requires a new Founder decision unless refinement discovers a genuine Product Truth conflict not already present in the consolidated review.

---

## 6. Required Report

Create:

`communication/live/report1.11.md`

The report must include:

1. synchronized base commit;
2. branch and PR evidence;
3. exact changed-file list;
4. section-by-section refinement summary;
5. traceability from every consolidated finding to the refined EIS section;
6. disposition of every mandatory open parameter;
7. unresolved issues, if any;
8. specialist re-review recommendations, if any;
9. Product Truth integrity confirmation;
10. confirmation that the Blueprint and Founder Decision Record were unchanged;
11. quality-gate and scope-validation results;
12. final refinement disposition.

Allowed final refinement dispositions:

- `REFINEMENT COMPLETE — READY FOR MISSION CONTROL VERIFICATION`
- `FOUNDER DECISION REQUIRED`
- `BLOCKED`

Claude Code may not declare the EIS accepted, approved, or locked.

---

## 7. Validation Requirements

Before publication:

- run the repository Markdown Quality Gate on both changed files;
- run the pre-commit Markdown Quality Gate;
- run `git diff --check`;
- verify exact changed-file scope;
- inspect the staged diff for credentials, secrets, tokens, and unsafe examples;
- verify the Blueprint and Founder Decision Record are unchanged;
- compare the mission branch against current `main`;
- confirm the branch is based on the synchronized latest `origin/main`;
- open a protected pull request targeting `main`;
- do not approve or merge your own pull request.

---

## 8. Explicitly Unauthorized Work

Do not:

- edit the Product Blueprint;
- edit the Founder Product Decision Record;
- create or modify Founder decisions;
- change scope classifications;
- accept, approve, or lock the EIS;
- create `engineering-contract.md`;
- create `lovable-build-prompt.md`;
- create `verification-checklist.md`;
- modify application code or tests;
- create or modify SQL, migrations, RLS policies, functions, RPC implementations, Edge Functions, webhooks, prompts, or Lovable implementation;
- modify Supabase, storage, infrastructure, deployment, production, or governance sources;
- modify prior instructions or reports;
- approve or merge your own pull request.

Implementation authority remains none.

---

## 9. Completion Boundary

This refinement mission is complete only when:

- the EIS resolves every accepted Stage 10 finding;
- `communication/live/report1.11.md` provides complete traceability and evidence;
- only the two authorized paths changed;
- Product Truth remains unchanged;
- a protected pull request is open for independent review.

Until Mission Control independently verifies and authorizes the next gate:

```text
SB-P-1.11 EIS: DRAFT — REFINED, NOT LOCKED
EIS VERIFICATION: PENDING
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
