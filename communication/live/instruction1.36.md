# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-SR1 — JOINT SECURITY AND DATABASE CONTRACT REVIEW

**Instruction ID:** `instruction1.36`

**Mission ID:** `SB-P-1.11-SR1`

**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`

**Mission Name:** Joint Security and Database Contract Review

**Mission Status:** ACTIVE UPON MERGE

**Authorized By:** Mission Control

**Lead Reviewing Room:** Security & Permissions Architecture

**Supporting Reviewing Room:** Supabase Backend Architecture

**Required Consolidated Report:** `communication/live/report1.36.md`

---

## 1. Mission Objective

Perform one focused specialist review of the Lovable Plan Mode output titled:

> `SB-P-1.11 Initial Phase 1 — Corrected Executable Engineering Contract`

The purpose is to determine whether the proposed engineering contract is safe, internally consistent, PostgreSQL-valid, compatible with the locked SB-P-1.11 architecture, and sufficiently exact to resume the controlled initial Phase 1 build.

This is a technical review mission only.

This mission does not authorize implementation.

---

## 2. Authority Order

Review according to the following authority order:

1. Lighthouse Constitution.
2. Smart Business Master System Manifesto.
3. Smart Business Product Truth Map.
4. Founder Product Decisions D-001 through D-068.
5. Locked SB-P-1.11 Product Blueprint.
6. Locked SB-P-1.11 EIS v2.2.
7. Locked SB-P-1.11 Engineering Contract v1.1.
8. Locked SB-P-1.11 Lovable Build Prompt v1.1.
9. Locked SB-P-1.11 Verification Checklist v1.1.
10. Locked SB-P-1.11 Founder Lovable Brief.
11. Accepted database, readiness, D-068, and token-lifecycle resolutions.
12. The corrected Lovable Plan Mode engineering-contract proposal as review evidence only.

If the proposal conflicts with a higher-authority locked source, the locked source prevails.

The proposal must not be treated as Product Truth or implementation authority.

---

## 3. Review Input

Mission Control shall provide both reviewing rooms with the complete, unedited Lovable Plan Mode output titled:

`SB-P-1.11 Initial Phase 1 — Corrected Executable Engineering Contract`

The review must cover the whole proposal, not excerpts alone.

The proposal already records Founder decisions:

- archived products hidden by default with an explicit Show archived control;
- selling price excluded from product creation and handled through its separate audited command;
- category archive with assigned products requires explicit confirmation before uncategorization;
- new-business pricing mode defaults to tax-exclusive.

These Founder decisions are closed and must not be reopened.

---

## 4. Room Responsibilities

### 4.1 Lead Room — Security & Permissions Architecture

The lead room shall review:

- authentication and actor derivation;
- business isolation;
- RLS policy design;
- command-only writes;
- direct client privilege boundaries;
- `SECURITY DEFINER` safety;
- executor-role ownership and grants;
- cross-business non-disclosure;
- idempotency visibility and reconciliation;
- D-068 same-actor, business, state, expiry, replay, and retention safeguards;
- token-secret and token-identifier interpretation;
- audit-data sensitivity;
- reference-cost non-disclosure;
- future-phase authority leakage;
- service-role boundaries.

The lead room owns the final consolidated disposition.

### 4.2 Supporting Room — Supabase Backend Architecture

The supporting room shall review:

- PostgreSQL validity;
- table and column definitions;
- primary, unique, check, and foreign-key constraints;
- composite business-scoped foreign keys;
- normalized identity constraints;
- archived identity reservation;
- function signatures and PostgreSQL return types;
- cursor and batch-read correctness;
- transaction boundaries;
- idempotency claim/finalization mechanics;
- append-only event enforcement;
- RLS interaction with `NOLOGIN` executor roles;
- column-level grants;
- managed Supabase compatibility;
- D-068 state transitions and retention anchors;
- schema and migration-order risks.

The supporting room shall provide its findings to the lead room in a concise review response. It shall not issue implementation authority.

---

## 5. Mandatory Review Items

For each item below, return exactly one disposition:

- `ACCEPTED`
- `ACCEPTED WITH CORRECTION`
- `REJECTED`

For every correction, provide exact replacement contract wording.

### SR-1 — D-068 identifier and authority

Confirm whether `p_preview_token_id uuid` is safely interpreted as a non-secret internal row identifier whose use is authorized only by server-derived business, same-actor, valid state, and expected-state checks.

If a bearer secret is required, state whether the locked signature must change.

### SR-2 — Public rejection and internal reason codes

Confirm that public token/state failures remain `STALE_STATE`, while internal reason codes remain server-only, non-disclosing audit data.

### SR-3 — Normalized uniqueness with nullable identifiers

Confirm ordinary business-scoped uniqueness on:

- `catalog_products.name_normalized`
- `catalog_products.sku_normalized`
- `catalog_products.barcode_normalized`
- `catalog_categories.name_normalized`

Confirm that multiple NULL SKU/barcode values remain permitted and every entered archived identity remains reserved.

### SR-4 — General audit and reference-cost exclusion

Confirm whether grant separation is sufficient to prevent reference-cost leakage.

Review the proposed audit key-inspection trigger and determine whether it strengthens safety or creates avoidable write-path risk.

### SR-5 — Expired-token minimization

Confirm the allowed physical-retention window for expired-unconsumed token state when no cleanup worker exists.

Preserve immediate logical unusability at `expires_at`, first-authorized-interaction minimization, 30-day expired-unconsumed retention, and no cleanup implementation.

### SR-6 — Executor UPDATE enforcement

Confirm whether column-level UPDATE grants are the intended control, whether function bodies require additional field guards, and whether the design is compatible with the managed environment.

### SR-7 — Table-by-table authenticated read rights

Replace any global authenticated `SELECT` assumption with an exact table-by-table read matrix.

At minimum, verify that the following are not directly readable by `authenticated`:

- `catalog_link_preview_tokens`;
- `catalog_write_idempotency_keys`;
- restricted reference-cost data;
- sensitive audit fields not required by an approved read contract.

State which reads occur only through approved functions.

### SR-8 — Reference-cost source of truth

Resolve the inconsistency between:

- `catalog_products.current_reference_cost`; and
- the claim that `catalog_reference_cost_events` is the sole value store.

Choose one exact authorized model and preserve owner-only visibility.

### SR-9 — Fresh previews after expiry

Reject or correct any design where an expired-unconsumed preview permanently blocks a fresh preview.

Do not use `now()` in a partial-index predicate.

Define an exact PostgreSQL-valid lifecycle mechanism such as supersession, explicit state transition, or another deterministic approach that does not depend on an unauthorized cleanup worker.

### SR-10 — Search cursor correctness

Ensure the keyset cursor covers the complete search ordering tuple.

If ordering includes `match_rank`, the cursor contract must include it, or the ordering must be changed accordingly.

### SR-11 — Product-history retrieval within 19 commands

Define exactly how price, tax, reference-cost, and inventory-link histories are returned without adding a twentieth command.

State whether they are embedded in `catalog_product_read`, read through narrowly authorized event-table access, or otherwise covered by a locked read contract.

### SR-12 — Secret minimization versus audit evidence

Distinguish secret material from non-secret expected-state evidence.

Confirm whether `expected_state_fingerprint` remains through the approved metadata-retention period or is minimized at consumption.

### SR-13 — Expired-token interaction state and retention anchor

Define whether an attempted use after expiry remains `expired_unconsumed` anchored to `expires_at`, or becomes `consumed_rejected` anchored to `consumed_at`.

Ensure the outcome preserves single-use, auditability, replay rejection, and the approved 30/90-day retention rules.

### SR-14 — Provenance phase activation

Confirm the exact mechanism that limits initial Phase 1 to:

- `actor_type = owner`
- `channel = dashboard`

Clarify whether schema checks, command permissions, or both carry the phase gate, and acknowledge any later migration required to activate future values.

---

## 6. Whole-Contract Verification

In addition to SR-1 through SR-14, verify:

- the exact 19-command count and names remain unchanged;
- no scheduling, scheduler-runtime, employee, import, conversational, upload, cleanup, or `system_errors` scope is introduced;
- Product Truth and Founder Decisions remain unchanged;
- normalized name/SKU/barcode rules match the accepted resolutions exactly;
- archived identities remain reserved;
- `business_tax_settings` remains one row maximum per business;
- authenticated client DML remains prohibited;
- business and actor identity remain server-derived;
- cross-business and not-found outcomes remain indistinguishable;
- expected rejections commit idempotency evidence without protected-table mutation;
- D-068 applies to assignment, replacement, and removal;
- token validity remains exactly 15 minutes;
- consumed full non-secret metadata retention remains 90 days;
- expired-unconsumed full non-secret metadata retention remains 30 days;
- cleanup execution remains excluded;
- product image upload remains excluded;
- no storage bucket or scan worker is introduced.

---

## 7. Required Consolidated Report

The lead room shall produce one consolidated response suitable for repository recording as:

`communication/live/report1.36.md`

The report must include:

1. mission identity;
2. sources reviewed;
3. confirmation that the complete corrected proposal was reviewed;
4. supporting-room findings;
5. lead-room findings;
6. SR-1 through SR-14 disposition table;
7. exact replacement wording for every correction;
8. table-by-table authenticated read matrix;
9. executor-role privilege matrix corrections;
10. corrected D-068 state-transition and retention contract;
11. corrected search cursor and read-history contract;
12. confirmation that Founder decisions remain applied;
13. confirmation that the 19-command scope remains unchanged;
14. confirmation that no implementation or Lovable use occurred;
15. final specialist verdict.

Conclude with exactly one:

```text
SPECIALIST REVIEW PASSED — CONTRACT READY FOR CONTROLLED BUILD
```

or

```text
SPECIALIST REVIEW FAILED — CORRECTIONS REQUIRED
```

---

## 8. Prohibited Actions

Neither room may:

- create or modify SQL;
- create or modify migrations;
- create schema objects;
- change RLS, roles, grants, functions, tables, or constraints;
- modify application code or tests;
- modify locked SB-P-1.11 sources;
- create implementation authorization;
- use Lovable Plan Mode or Build Mode;
- consume Lovable credits;
- publish or deploy;
- introduce a new command;
- reopen the approved 19-command scope;
- reopen Founder decisions FQ-1 through FQ-4.

---

## 9. Communication Protocol

1. Mission Control provides this merged instruction and the complete corrected proposal to both rooms.
2. Supabase Backend Architecture completes its supporting review first and returns its findings to Mission Control.
3. Mission Control provides the supporting findings to Security & Permissions Architecture.
4. Security & Permissions Architecture completes the lead review and produces the consolidated report.
5. The consolidated report is returned to Mission Control for acceptance.
6. Build Mode remains stopped until Mission Control accepts a passing specialist report.

No room may self-authorize the next phase.

---

## 10. Current Authority State

```text
LOVABLE PLAN MODE AUTHORITY:
NONE FOR THIS MISSION

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE

PUBLISHING OR DEPLOYMENT AUTHORITY:
NONE
```

---

## 11. Completion Condition

This mission is complete only when Mission Control receives one consolidated specialist report that either:

- passes the contract for controlled build; or
- identifies exact corrections still required.

Until then, SB-P-1.11 Build Order Stage 1 remains stopped.
