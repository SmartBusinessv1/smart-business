# SMART BUSINESS MISSION CONTROL

# Report 1.10 — Stage 10 EIS Review Consolidation

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Stage:** Source 18 Stage 10 — EIS Review

**From:** Mission Control

**To:** Founder and Authorized Engineering Actors

**Status:** REVIEW COMPLETE — REFINEMENT REQUIRED

**Date:** 2026-08-04

---

## 1. Mission Control Disposition

Mission Control has reviewed and consolidated all four authorized specialist reports for the draft SB-P-1.11 Engineering Implementation Specification.

```text
SB-P-1.11 STAGE 10 EIS REVIEW: COMPLETE
SPECIALIST REPORTS: 4 OF 4 REVIEWED
OVERALL DISPOSITION: REFINEMENT REQUIRED
PRODUCT TRUTH CHANGE REQUIRED: NO
FOUNDER DECISION REQUIRED: NO
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
NEXT GATE: SEPARATE EIS REFINEMENT AUTHORIZATION
```

The draft EIS is directionally sound and materially aligned with the locked Product Blueprint, but it is not ready for EIS Lock. The accepted findings require engineering refinement only. No accepted finding changes Founder Decisions D-001 through D-068 or the locked Product Blueprint.

---

## 2. Repository and Review Evidence

Repository:

`SmartBusinessv1/smart-business`

Synchronized consolidation base:

`da6f17cb481dd377060cfdc22b9b57e0f44abf06`

Specialist reports reviewed:

- `communication/live/report1.10-supabase-backend.md`
- `communication/live/report1.10-ai-whatsapp.md`
- `communication/live/report1.10-security-permissions.md`
- `communication/live/report1.10-lovable-frontend.md`

Primary draft EIS reviewed:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

Protected product artifacts confirmed unchanged during specialist review:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

---

## 3. Consolidated Finding Register

Mission Control accepts the following deduplicated refinement themes as authoritative Stage 10 findings.

### MC-EIS-001 — Scheduled-price state and immutable history are contradictory

**Severity:** `BLOCKING`

**Accepted sources:** SUPA-1, SUPA-2, SUPA-5, SEC-PERM-004.

The EIS cannot use a `now()`-dependent partial unique index to enforce one pending scheduled price, and it cannot declare price events immutable while later updating prior rows through `superseded_by`.

**Required refinement:** Define one coherent model separating current pending-schedule state from immutable price-history evidence, or use a fully append-only transition model with stable state constraints. One logical scheduled change must produce exactly one authoritative effective-price change.

### MC-EIS-002 — Protected writes are not yet proven command-only

**Severity:** `BLOCKING`

**Accepted sources:** SEC-PERM-002, SUPA command-layer findings.

The EIS states that protected changes use server-authoritative commands, but its grant and RLS intent may still allow authenticated direct DML against protected tables.

**Required refinement:** Explicitly deny direct authenticated insert, update, and delete access to protected catalog and event tables. Define narrow command execution, safe function ownership, fixed search paths, revoked public execution, minimal grants, current permission checks, and proof that PostgREST table access cannot bypass validation, confirmation, idempotency, or audit creation.

### MC-EIS-003 — D-068 requires a server-authoritative preview and compare-and-commit contract

**Severity:** `BLOCKING`

**Accepted sources:** SUPA-4, LF-01, LF-02, AIW-004, SEC-PERM-003.

The final D-068 mutation command is defined, but the EIS lacks a complete server-authoritative preview contract binding the exact state and consequences reviewed by the merchant.

**Required refinement:** Add a non-mutating preview command or equivalent protected preview contract that returns current and proposed link, unit, price, D-047 eligibility, confirmation requirements, validation categories, and a versioned fingerprint or pending-action token. The final command must re-evaluate under lock, reject stale state, and require a fresh preview and confirmation after any drift.

### MC-EIS-004 — Idempotency replay ordering and unknown outcomes are incomplete

**Severity:** `HIGH`

**Accepted sources:** SEC-PERM-005, LF-03, LF-04, AIW-003, AIW-008.

A matching retry may currently encounter stale-state validation before the stored successful result is found. The frontend and conversational contracts also do not distinguish a confirmed rollback from an unknown network outcome.

**Required refinement:** Resolve or atomically register idempotency before mutable-state precondition checks after actor and business resolution. Bind the key to a payload fingerprint. Return the original result for a matching retry, reject a conflicting payload, and define reconciliation behavior for ambiguous client outcomes using the same key or pending-action identifier.

### MC-EIS-005 — D-047 link-history enforcement is not yet an enforceable predicate

**Severity:** `HIGH`

**Accepted sources:** SUPA-3, SEC-PERM-006.

The EIS does not reliably establish whether qualifying stock or completed-sale history occurred during the relevant product-to-inventory link tenure.

**Required refinement:** Define authoritative history sources, qualifying event classes, link-tenure boundaries, transaction and lock order, concurrency behavior, future Sales-domain integration, and default-deny behavior when a required history predicate is unavailable.

### MC-EIS-006 — Manager permissions must remain action-specific

**Severity:** `BLOCKING`

**Accepted source:** SEC-PERM-001.

The broad `catalog_manage` flag combines ordinary product maintenance with archive, reactivation, deletion, and import authority.

**Required refinement:** Preserve separate action permissions for catalog view, product creation and identity/details maintenance, lifecycle actions, selling price, tax, reference cost, and inventory linking. Import may follow the approved product-creation permission boundary. History reads must follow the corresponding sensitive action permission.

### MC-EIS-007 — Non-interactive channel authority is under-specified

**Severity:** `BLOCKING`

**Accepted sources:** SEC-PERM-003, AIW-003, AIW-004, AIW-005.

Dashboard commands may rely on an authenticated user context, but WhatsApp and other server-originated channels cannot safely trust supplied business, actor, role, permission, or AI-derived authority, nor may the service role become general merchant authority.

**Required refinement:** Define a restricted internal channel-authority contract that verifies the channel event and sender, resolves the canonical user and business, checks current permissions at execution, binds confirmation to the exact action and payload, derives authority server-side, records channel evidence, and rejects replay, expiry, revocation, ambiguity, and cross-business mismatch.

### MC-EIS-008 — Conversational-engine ownership boundaries require tightening

**Severity:** `HIGH`

**Accepted sources:** AIW-001, AIW-002, AIW-006, AIW-007, AIW-009.

The EIS should not lock catalog-specific intent taxonomy, receipt-pipeline generalization, model behavior, or media-storage mechanics that belong to the future shared conversational-engine mission.

**Required refinement:** Specify only the capability contract consumed from the shared engine. Keep intent examples non-binding. Require field-level uncertainty and provenance, durable text representation for consequential actions, Owner-only voice responses where already governed, and deterministic permission/help checks before expensive AI processing where possible.

### MC-EIS-009 — Scheduled-job privilege and audit design require least-privilege refinement

**Severity:** `HIGH`

**Accepted sources:** SUPA-6, SUPA-11, SEC-PERM-009.

The scheduled-price activator needs a narrowly privileged execution identity, bounded work claiming, correct concurrency behavior, and distinct authorization-versus-execution provenance.

**Required refinement:** Define a dedicated no-login owner or equivalent narrow execution role, fixed safe search path, revoked public execution, bounded batches, deterministic row locking such as safe work claiming, per-product failure isolation, missed-run recovery, and audit fields identifying both the merchant who authorized the schedule and the system process that activated it.

### MC-EIS-010 — Permission-aware read functions need explicit hardening

**Severity:** `HIGH`

**Accepted source:** SEC-PERM-010.

A `SECURITY DEFINER` read function that omits cost and margin becomes the sole field-level protection boundary and must not trust caller-supplied scope or stale permission context.

**Required refinement:** Require a dedicated no-login owner, safe search path, fully qualified objects, revoked public execution, minimal grants, server-derived actor and business membership, current permission checks on every call, fixed response shapes that physically omit unauthorized fields, and no raw client grants to cost tables.

### MC-EIS-011 — File references and import security are incomplete

**Severity:** `HIGH`

**Accepted sources:** SEC-PERM-007, SEC-PERM-008, LF-06, SUPA-10.

Unconstrained text references do not prove business ownership or safe upload state. Import processing also lacks complete resource, retention, formula-injection, confirmation, revalidation, progress, and resume rules.

**Required refinement:** Bind files to approved business-scoped metadata records. Verify upload status, business ownership, content type, size, safety status, retention state, and intended purpose. Define structural workbook limits, rate limits, formula-leading-cell neutralization in downloadable exports, quarantine and cleanup, job-level final confirmation, apply-time revalidation, per-row idempotency, one active apply operation, and reconnect-safe resumable outcomes.

### MC-EIS-012 — Frontend interaction contracts need deterministic state handling

**Severity:** `HIGH`

**Accepted sources:** LF-02 through LF-08.

The frontend responsibilities are directionally correct but insufficiently deterministic for stale state, retries, duplicate submission, ambiguous outcomes, uncertain multilingual matches, import lifecycle, accessibility, and phased route exposure.

**Required refinement:** Define idempotency-key lifecycle, disabled/pending states, reconciliation, fresh confirmation after stale state, non-authoritative uncertain-match presentation, accessible status announcements, keyboard and focus behavior, stable identifiers, mobile import presentation, and route/navigation exposure only when the relevant phase is deployed and verified.

### MC-EIS-013 — Tax pricing-mode lock is a command invariant, not a static CHECK

**Severity:** `HIGH`

**Accepted source:** SUPA-7.

A table CHECK cannot query future Sales history.

**Required refinement:** Define a server-authoritative command invariant integrated with a stable Sales-domain predicate when that domain exists. Until then, preserve the dependency and prevent production Sales enablement before the lock is enforceable.

### MC-EIS-014 — Hard-delete and audit-reference integrity require closed contracts

**Severity:** `HIGH`

**Accepted sources:** SUPA-8, SUPA-9.

Deletion eligibility and generic audit references are not yet sufficiently constrained.

**Required refinement:** Define a closed, atomic deletion-eligibility command covering all current and future governed dependencies, default denial for unavailable checks, pre-delete minimal identity snapshot, restrictive foreign keys, and deliberate audit evidence that survives deletion without cross-business or orphaned references.

### MC-EIS-015 — Audit provenance must be standardized across all event types

**Severity:** `MEDIUM`

**Accepted source:** SEC-PERM-011.

Dedicated price, tax, cost, and link histories do not consistently carry the actor, channel, request, permission authority, and system-execution provenance claimed elsewhere in the EIS.

**Required refinement:** Standardize immutable provenance across all protected event types while ensuring restricted cost values do not appear in logs, errors, metrics, or unauthorized responses.

---

## 4. Mandatory Open-Parameter Dispositions

### 4.1 Multilingual similarity algorithm and threshold

**Disposition:** `REFINEMENT REQUIRED`

Deterministic business-scoped normalized exact matching remains authoritative. Same-script approximate matching may use measured techniques such as trigram similarity, but the EIS must not imply linguistic or cross-script understanding. Possible matches must remain separately labeled, accessible, non-authoritative, and never auto-merge or overwrite. Final thresholds require representative Kerala-language validation and query-plan evidence.

### 4.2 CSV/Excel row count and file-size limits

**Disposition:** `REFINEMENT REQUIRED`

The proposed 5,000-row and 10-MB values may remain starting configuration candidates, but the EIS must first make multidimensional resource controls, rate limits, workbook-structure limits, formula-injection protection, retention, quarantine, cleanup, and merchant-facing rejection behavior mandatory.

### 4.3 Final index selection and query-plan validation

**Disposition:** `REFINEMENT REQUIRED`

Deferring ordinary index selection to representative query-plan validation is accepted. However, the invalid time-dependent pending-price uniqueness design must be replaced, and security-critical access paths for RLS, idempotency, D-047 checks, effective-price lookup, import state, and audit history must be explicitly included in the validation gate.

### 4.4 Scheduled-price activation polling interval

**Disposition:** `REFINEMENT REQUIRED`

A one-minute default is a reasonable engineering candidate. Before lock, the EIS must define bounded activation lag, missed-run recovery, duplicate invocation behavior, merchant-visible delayed activation, and safe scheduler authority. The exact numeric interval remains an engineering configuration unless later evidence shows merchant-visible Product Truth would materially change.

### 4.5 Shared permission-engine sequencing and ownership

**Disposition:** `REFINEMENT REQUIRED`

Owner-only Phase 1 remains acceptable. Manager and Employee catalog capability must remain unavailable until a separately governed shared permission engine has explicit ownership, schema and command contracts, migration authority, action-specific flags, and end-to-end verification.

### 4.6 Shared conversational-engine sequencing and ownership

**Disposition:** `REFINEMENT REQUIRED`

Dashboard-first delivery remains acceptable. WhatsApp, voice, text, and photo catalog mutations must remain unavailable until the separately governed shared conversational engine supplies verified identity, permission propagation, confirmation binding, retry, media, and audit contracts. No catalog-specific duplicate pipeline is authorized.

### 4.7 Inventory-link removal without D-068 price reconfirmation

**Disposition:** `ACCEPTED AS WRITTEN`, with required clarification.

Removal does not assign a new unit or price and therefore does not reinterpret a populated numeric price under a proposed unit. The refined EIS must explicitly state that permitted removal preserves the current selling unit and current selling price, creates only the approved removal history, and remains subject to the corrected D-047 history boundary.

---

## 5. Product Truth Impact Assessment

Mission Control confirms:

- no new Founder decision is required;
- no Founder Decision D-001 through D-068 is reopened;
- no Build Now, Build Later, Add-on, Separate Product, or Reject classification changes;
- no merchant-visible product behavior needs redesign;
- all accepted findings are engineering refinements required to implement the locked Product Truth safely and verifiably.

The following locked principles remain intact:

- catalog truth remains separate from inventory truth;
- Owner financial intelligence remains protected;
- Manager authority remains action-specific;
- Employee access remains permission-scoped and default-denied for owner intelligence;
- AI remains an assistant, not an authority;
- protected actions remain human-confirmed;
- business isolation remains mandatory;
- D-047 and D-068 safeguards remain authoritative;
- link removal does not silently alter unit or price.

---

## 6. Cross-Mission Dependency Treatment

### Shared permission engine

Classification: `Build Later shared foundation required before SB-P-1.11 Phase 2a`.

It is not implemented by this EIS refinement. The refined EIS must define the exact contract SB-P-1.11 consumes and preserve Owner-only behavior until the dependency is separately authorized, implemented, and verified.

### Shared conversational engine

Classification: `Build Later shared foundation required before SB-P-1.11 Phase 3`.

It is not implemented by this EIS refinement. The refined EIS must describe only the catalog-side contract and must not define a competing webhook, classifier, prompt, media, or identity architecture.

### CSV/Excel import

Classification: `Build Now phased work, not cross-mission blocked`.

It may remain Phase 2b, but implementation must not begin until the EIS and implementation package are separately locked and authorized.

---

## 7. Required EIS Refinement Scope

A separate Mission Control instruction shall authorize Claude Code to modify only:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- one new refinement report path assigned by that instruction

The refinement must address every accepted finding and parameter disposition in this report.

The refinement must not modify:

- the locked Product Blueprint;
- the Founder Product Decision Record;
- Founder Decisions D-001 through D-068;
- prior specialist reports;
- governance sources;
- application code;
- tests;
- database files;
- SQL;
- migrations;
- RLS policies;
- RPC or Edge Function implementations;
- webhooks;
- prompts;
- Lovable implementation;
- infrastructure;
- deployment;
- production.

Claude Code may clarify technical design but may not approve or lock its own refined EIS.

---

## 8. Exact Next Lifecycle Action

The next action is:

```text
MISSION CONTROL: ISSUE SEPARATE EIS REFINEMENT AUTHORIZATION
EXECUTING ACTOR: CLAUDE CODE
AUTHORIZED ARTIFACT: SB-P-1.11-EIS.md ONLY, PLUS REFINEMENT REPORT
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```

After refinement, Mission Control must authorize and obtain independent follow-up verification of the accepted findings before Founder approval and EIS Lock can be considered.

---

## 9. Scope and Boundary Confirmation

- Product Blueprint modified: **NO**
- Founder Product Decision Record modified: **NO**
- Draft EIS modified by this consolidation: **NO**
- Product Truth changed: **NO**
- Founder decision created: **NO**
- EIS refinement performed: **NO**
- EIS accepted or locked: **NO**
- Implementation package created: **NO**
- Application code or tests modified: **NO**
- SQL, migrations, RLS, RPCs, functions, or database state modified: **NO**
- Supabase, Lovable, infrastructure, deployment, or production modified: **NO**
- Governance source modified: **NO**
- Self-approval or self-merge authorized: **NO**

Authorized changed path for this consolidation:

`communication/live/report1.10.md`

---

## 10. Final Stage 10 Disposition

```text
SB-P-1.11 STAGE 10 EIS REVIEW: COMPLETE
MISSION CONTROL DISPOSITION: REFINEMENT REQUIRED
BLOCKING PRODUCT TRUTH CONFLICT: NONE
FOUNDER DECISION REQUIRED: NO
EIS LOCK RECOMMENDED NOW: NO
NEXT ACTION: SEPARATE CLAUDE CODE EIS REFINEMENT AUTHORIZATION
IMPLEMENTATION AUTHORITY: NONE
```
