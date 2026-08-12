# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-2 — Supabase Backend Architecture Review

**Mission ID:** SB-P-1.11-FWR-2  
**Mission Name:** Supabase Backend Architecture Review  
**Authorized By:** Mission Control  
**Executing Room:** Supabase Backend Architecture  
**Mode:** REVIEW MODE ONLY  
**Mission Status:** ACTIVE  
**Build Mode Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Lovable Mutation / Publish Authority:** NONE

---

## 1. Mission Objective

Perform a bounded Supabase Backend Architecture review of the merged Founder Workflow Architecture Reconciliation in:

`communication/live/report1.96.md`

Review only the database, RPC, RLS, idempotency, transaction, lifecycle, tenant-isolation, audit, and support-structure implications of FWR-001 through FWR-005.

This mission does **not** authorize implementation.

The purpose is to determine whether the architecture in `report1.96.md` is safe and implementation-ready from the Supabase backend perspective before Security & Permissions Architecture performs its own bounded review.

---

## 2. Required Source of Truth

Begin from latest merged `main` and record the exact SHA reviewed.

At minimum review:

- `communication/live/report1.96.md`;
- `communication/live/instruction1.90.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`;
- the locked SB-P-1.11 Product Catalog & Pricing architecture and implementation documents;
- the completed SB-P-1.10 Inventory Foundation / Inventory Truth sources;
- current Supabase migrations, RPC/function definitions, RLS policies, grants, constraints, and verification assets relevant to Catalog, Inventory, imports, idempotency, audit, and Catalog↔Inventory linking;
- live dedicated test-project schema/function/policy state where repository evidence alone is insufficient.

Do not infer a missing backend fact when it can be verified directly.

Do not mutate production or the test project during this review.

---

## 3. Review Scope

### SUPA-1 — Inventory Import Support Structure

Review the proposed new narrow support structures:

- `inventory_import_batches`;
- `inventory_import_rows`.

Determine whether separate structures are appropriate rather than extending the Catalog-shaped import support tables.

Specify the minimum safe schema contract, including as applicable:

- business ownership;
- importing user / responsible actor;
- batch and row identifiers;
- row ordinal / source-row identity;
- lifecycle state;
- validation/classification state;
- idempotency linkage;
- retry metadata;
- timestamps;
- auditability;
- error classification without raw sensitive file retention.

Review whether composite tenant foreign keys are required to prevent cross-business references.

Reject unsafe cascade behavior or broad delete authority.

### SUPA-2 — RLS / Grants / Privileged Bookkeeping

Define the narrowest safe access model for import-support rows.

Review whether the existing pattern of authenticated read access plus narrow server-only privileged bookkeeping is appropriate.

Explicitly determine:

- who may SELECT batch/row support records;
- whether inserts/updates must be server-only;
- whether service-role / server-admin bookkeeping is actually necessary and, if so, its smallest permitted scope;
- whether Catalog and Inventory truth mutations must continue to execute under caller identity / caller JWT rather than privileged bypass;
- whether Manager and Employee remain fail-closed in Phase 1.

No permission expansion is authorized.

### SUPA-3 — Inventory-First Orchestration and Atomicity

Review the exact orchestration described in `report1.96.md`:

1. resolve Catalog match;
2. confirm candidate where required;
3. create Catalog product if required;
4. create Inventory entity;
5. preview / establish governed Catalog↔Inventory link;
6. satisfy D-068 confirmation where required;
7. create Opening Stock movement when quantity exists.

Verify the exact existing Inventory creation function/RPC and its current signature, authorization, idempotency behavior, and RLS interaction rather than relying on naming assumptions.

Determine which steps can safely share one database transaction and which necessarily remain separate governed commands.

Where full atomicity across commands is not feasible, require a deterministic retry/resume model that prevents unintended live partial truth.

The review must explicitly address:

- Catalog created but Inventory creation fails;
- Inventory created but link cannot complete;
- D-068 confirmation becomes stale;
- Opening Stock must never exist before the valid governed link;
- client retry after timeout / unknown outcome;
- duplicate request replay;
- crash between downstream steps.

Do not invent silent destructive rollback of valid audited business truth merely for implementation convenience.

### SUPA-4 — Idempotency Contract

Verify that one stable import-row identity can safely derive deterministic per-step idempotency keys for the governed operations required by one row.

Review collision domain, business scoping, replay behavior, conflicting-payload behavior, and terminal-outcome retrieval.

Confirm that generated SKU behavior remains idempotent under retry: the same authoritative create request must not produce a new SKU on replay.

### SUPA-5 — SKU Generation Backend Contract

Review the proposed internal amendment to the existing `create_catalog_product` implementation without changing its public signature.

Confirm whether the existing business-scoped normalized SKU uniqueness constraint is sufficient for both merchant-supplied and Smart Business-generated SKUs.

Review:

- secure/non-sensitive random generation source;
- normalization;
- bounded collision retry;
- behavior after bounded retry exhaustion;
- archived identity reservation;
- idempotency interaction;
- audit/history when a generated SKU is later replaced through the governed identity-update command.

Do not add a new public Catalog command.

### SUPA-6 — Match / Duplicate Backend Rules

Verify that exact candidate resolution can be implemented without cross-tenant leakage or unsafe ambiguity.

Review exact matching on, as applicable:

- normalized product name;
- normalized SKU;
- normalized barcode;
- existing Catalog↔Inventory link state;
- archived Catalog records;
- already-linked products.

No fuzzy result may silently mutate truth.

The review must distinguish candidate discovery from authoritative merchant-confirmed mutation.

### SUPA-7 — Opening Stock Ledger Integrity

Verify the existing `create_inventory_movement` contract used for Opening Stock.

Confirm at minimum:

- Opening Stock is a movement, never a direct current-quantity write;
- one-opening-stock rule remains enforced if that is the current locked contract;
- archived inventory rejection;
- responsible actor attribution;
- idempotency;
- business-event / audit linkage where supported;
- no support-table state may become financial/inventory truth.

### SUPA-8 — D-047 and D-068 Preservation

Reconfirm that the current Catalog↔Inventory link functions preserve the required link-before-history rule and D-068 preview/confirm safeguard.

Verify whether the proposed inventory-first sequencing can reuse the existing:

- `preview_catalog_inventory_link_change`;
- `assign_or_replace_catalog_inventory_link`;

without changing the locked exactly nineteen public Catalog commands.

If a twentieth public Catalog command appears necessary, STOP and report the conflict.

### SUPA-9 — Import Lifecycle / Failure Semantics

Review the proposed batch lifecycle and row states from `report1.96.md`.

Specify backend-safe state transitions for:

- previewed;
- committing;
- committed;
- failed;

and row states such as:

- `READY`;
- `POSSIBLE_MATCH`;
- `NEEDS_CORRECTION`;
- `SKIPPED`.

Require state transitions to be auditable and concurrency-safe.

Valid-row progress must not convert invalid rows into partial Catalog or Inventory truth.

### SUPA-10 — Parser Gate Separation

The unresolved Catalog import parser/runtime security gate remains independent.

Do not claim it is resolved.

Do not redesign parser isolation in this mission.

Review only the database-facing contract that must remain true regardless of the eventual parser runtime:

- parse / validation / classification completes before truth mutation begins;
- no raw file retention in Supabase import-support truth unless separately authorized;
- no privileged import-support bookkeeping may bypass business-truth authorization;
- parser/runtime failure must not leave authoritative partial mutations from preview.

### SUPA-11 — Template Backend Impact

Determine whether downloadable Catalog and Inventory templates require any database structure at all.

Default expectation: static/versioned application assets or an equivalent non-truth mechanism, with no merchant-private data embedded.

Reject unnecessary database persistence for template files unless a concrete requirement proves it necessary.

---

## 4. Required Impact Map

For every backend object affected by the Founder workflow reconciliation, classify it as:

- **EXISTING / REUSED**;
- **EXISTING / AMENDED**;
- **NEW**;
- **NOT REQUIRED**.

Include at minimum:

- tables;
- composite foreign keys;
- unique constraints / indexes;
- RLS policies;
- grants;
- RPCs/functions;
- idempotency structures;
- audit/event structures;
- import-support state;
- privileged server paths.

For any proposed new object, state why an existing object cannot safely satisfy the requirement.

---

## 5. Mandatory Product Classification

Preserve the Founder classification from the reconciliation.

### Build Now

- Inventory / Opening Stock CSV/XLSX onboarding;
- Catalog and Inventory downloadable templates;
- automatic Smart Business SKU when absent;
- channel-neutral SKU domain rule;
- inventory-first Catalog establishment/linking before Opening Stock;
- explicit duplicate/match review;
- D-068 safeguard.

### Build Later

- merchant-configurable SKU formats;
- barcode/SKU label printing;
- batch/lot/expiry import;
- unit conversion/import packaging;
- historical bulk reconciliation tooling unless separately authorized.

### Add-on

None unless strictly required and explicitly identified.

### Separate Product

None.

### Reject

- merged Catalog/Inventory truth;
- direct current-stock writes;
- silent duplicates, merge, overwrite, or link;
- silent post-history linking contrary to D-047;
- channel-specific SKU logic;
- SKU as barcode/legal identifier substitute;
- permission expansion for convenience;
- twentieth public Catalog command;
- parser-gate bypass.

---

## 6. Stop Rules

STOP and report the exact conflict if any of the following is true:

- tenant isolation cannot be proven;
- the proposed support tables require unsafe broad privileged access;
- Inventory-first sequencing cannot preserve D-047;
- D-068 cannot be preserved;
- the workflow requires direct current-stock writes;
- idempotent retry cannot prevent duplicate/partial truth;
- Manager/Employee authority would need expansion;
- a twentieth public Catalog command is required;
- Product Truth must be changed beyond the proposed D-023 amendment under review;
- the unresolved parser gate would have to be bypassed;
- a new external service or new production authority is required.

Do not solve a stop condition by silently widening authority.

---

## 7. Explicitly Not Authorized

This mission does not authorize:

- application code changes;
- dependency changes;
- migration creation or application;
- Supabase DDL/DML;
- test-project mutation;
- production mutation;
- RLS/grant changes;
- service-role expansion;
- Lovable mutation/publish/deploy;
- parser redesign;
- R2 implementation;
- permission expansion;
- Product Truth mutation;
- Build Lock;
- Build Mode;
- production migration;
- a twentieth public Catalog command.

Human review and merge remain mandatory.

---

## 8. Required Output

Create:

`communication/live/report1.97.md`

The report must include:

1. exact latest `main` SHA reviewed;
2. canonical sources and live backend evidence reviewed;
3. SUPA-1 through SUPA-11 findings;
4. exact verified existing RPC/function names and relevant signatures/authority patterns;
5. proposed schema/RLS/grant/idempotency contracts where needed;
6. atomicity / retry / partial-failure analysis;
7. backend impact map using EXISTING / REUSED, EXISTING / AMENDED, NEW, NOT REQUIRED;
8. unresolved backend assumptions or evidence gaps;
9. Build Now / Build Later / Add-on / Separate Product / Reject classification;
10. one final verdict.

Allowed final verdicts:

- `SUPABASE BACKEND ARCHITECTURE REVIEW — PASS`
- `SUPABASE BACKEND ARCHITECTURE REVIEW — CHANGES REQUIRED`
- `SUPABASE BACKEND ARCHITECTURE REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

A PASS means only that the Founder workflow reconciliation is acceptable from the Supabase backend architecture perspective. It does **not** authorize Build Mode.

---

## 9. Required Next Gate

After this report is human-reviewed and merged, Mission Control must review the verdict.

If PASS, Mission Control may issue the bounded Security & Permissions Architecture review using the merged Supabase review as an input.

If CHANGES REQUIRED or STOPPED, do not issue Build Mode and do not treat the Security review as a substitute for resolving the backend finding.

Production migration remains blocked.

**Next logical step:** Supabase Backend Architecture executes this review in Review Mode, commits `communication/live/report1.97.md` through the normal human-review PR flow, and returns the merged report to Mission Control.