# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-1 — Founder Workflow Architecture Reconciliation

**Mission ID:** SB-P-1.11-FWR-1  
**Mission Name:** Founder Workflow Architecture Reconciliation  
**Authorized By:** Mission Control  
**Executing Room:** Claude Code / Engineering Architecture  
**Mode:** PLAN MODE / ARCHITECTURE RECONCILIATION ONLY  
**Mission Status:** ACTIVE  
**Build Mode Authority:** NONE  
**Production Migration Authority:** NONE  
**Lovable Publish Authority:** NONE  
**Production Data Mutation Authority:** NONE

---

## 1. Mission Objective

Convert the merged Founder Workflow Reconciliation Record into a standalone implementation-ready architecture amendment without implementing code.

Canonical Founder record:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`

This mission must reconcile the new workflow against:

- SB-P-1.10 Inventory Foundation and Inventory Truth;
- SB-P-1.11 Product Catalog & Pricing architecture;
- D-001;
- D-023;
- D-047;
- D-053 through D-058;
- D-068;
- the current Catalog import architecture and security boundaries;
- current Supabase schema/RPC boundaries;
- current fail-closed Phase 1 permission posture.

The result must be detailed enough for later Security and Supabase architecture review and, only after those gates pass, a separate Claude Code Build Mode instruction.

---

## 2. Founder Decisions to Preserve

The architecture must preserve all five merged Founder decisions:

### FWR-001 — Inventory Bulk Onboarding

Build Now includes CSV/XLSX Inventory / Opening Stock bulk onboarding.

No spreadsheet row may directly set current stock. Opening quantity must be represented only by an auditable Opening Stock movement.

### FWR-002 — Downloadable Import Templates

Build Now includes downloadable template/sample files for:

- Catalog import;
- Inventory / Opening Stock onboarding.

### FWR-003 — Smart Business SKU

Merchant SKU remains optional.

When absent, Smart Business generates one business-scoped unique tracking SKU.

### FWR-004 — One SKU Rule Across Channels

The same SKU domain rule must apply across dashboard/manual, bulk import, WhatsApp text, voice, photo-assisted creation, and future governed product-creation channels.

### FWR-005 — Inventory-First Catalog Orchestration

Every newly created Inventory item must establish or confirm a corresponding separate Catalog product and governed link before Opening Stock history is created.

Catalog products may remain non-stock until explicitly linked.

Inventory and Catalog remain separate truth models.

---

## 3. Required Architecture Decisions

The report must resolve the following before implementation can be considered.

### ARC-1 — D-023 Amendment

Draft the exact replacement wording for D-023.

The amendment must define:

- one SKU per product in Build Now;
- merchant-supplied SKU optional;
- Smart Business-generated SKU when absent;
- business-scoped uniqueness;
- collision handling;
- source/provenance of SKU if needed internally;
- whether/when a generated SKU may later be replaced by a merchant SKU;
- audit/history implications;
- no dependence on the input channel.

Do not invent merchant-configurable SKU formatting in Build Now.

### ARC-2 — SKU Generation Contract

Specify the smallest safe SKU generation algorithm/contract.

It must be:

- unique within one business;
- concurrency-safe;
- idempotent under retried create/import requests;
- non-sensitive;
- stable after creation unless an authorized governed identity update occurs;
- compatible with existing business-scoped uniqueness and archived-identity rules.

Do not require barcode generation.

### ARC-3 — Inventory Bulk Import Model

Specify the Inventory / Opening Stock import lifecycle, including:

- supported CSV/XLSX template schema;
- required vs optional columns;
- validation order;
- row-state vocabulary;
- valid-row vs invalid-row behavior;
- duplicate/match handling;
- retry/idempotency semantics;
- batch-level status semantics;
- opening-stock audit behavior;
- whether existing Catalog import support tables can safely be extended/reused or whether a separate narrow support structure is required.

Do not assume direct current-quantity writes.

### ARC-4 — Atomic Inventory-First Orchestration

Define the exact order and transaction/compensation model for:

1. resolve existing Catalog match;
2. merchant confirmation where required;
3. create Catalog product if needed;
4. create Inventory entity;
5. establish governed one-to-one link;
6. perform D-068 selling-unit/price confirmation if triggered;
7. create Opening Stock movement if quantity exists.

The architecture must prevent partial truth such as:

- Inventory item created but Catalog product/link absent;
- Catalog product created but failed Inventory workflow leaves an unintended live duplicate;
- Opening Stock created before the governed link is valid;
- a D-068 price reinterpretation occurring silently.

State clearly which operations must be atomic and where compensating/cleanup behavior is required if full database atomicity is not feasible.

### ARC-5 — Match / Duplicate Rules

Define exact candidate matching for inventory-first onboarding.

At minimum reconcile:

- exact name;
- merchant/generated SKU;
- barcode where present;
- existing Catalog ↔ Inventory links;
- archived Catalog products;
- already-linked Catalog products;
- inventory records with stock history.

No fuzzy match may silently create, merge, link, or overwrite truth.

### ARC-6 — Permissions

Define Phase 1 authority for:

- Owner inventory bulk onboarding;
- Manager inventory bulk onboarding;
- Employee access;
- Reference Cost handling if included in any template;
- Inventory link authority.

Current Phase 1 permission infrastructure remains fail-closed where an approved permission does not yet exist.

Do not create permission expansion merely to make the workflow convenient.

### ARC-7 — Template Contract and Versioning

Define merchant-facing template schemas and versioning rules.

At minimum specify:

- Catalog template filename and columns;
- Inventory / Opening Stock template filename and columns;
- example-row policy;
- version identifier strategy;
- backward-compatibility/unsupported-version behavior;
- whether CSV and XLSX use identical logical schema;
- template downloads must contain no merchant/private data.

### ARC-8 — Channel-Neutral Creation Contract

Define the canonical product-creation boundary used by:

- dashboard/manual;
- bulk import;
- WhatsApp text;
- WhatsApp voice;
- WhatsApp photo-assisted creation.

The channel may collect/interpret input, but SKU resolution, identity validation, Catalog creation, Inventory linking, D-068 safeguards, and audit semantics must be governed by shared domain logic.

### ARC-9 — Existing Public Catalog Command Boundary

Determine whether these Founder workflow decisions require any change to the locked exactly nineteen public Catalog commands.

Default expectation: **no twentieth public Catalog command**.

If the architecture cannot satisfy the workflow without modifying the public command boundary, STOP and report the conflict rather than silently expanding it.

### ARC-10 — Supabase and Security Impact Map

List every expected future repository/infrastructure impact, including any proposed:

- table;
- constraint/index;
- RPC/function;
- privileged server path;
- RLS policy;
- idempotency key;
- import support state;
- audit record;
- template asset/endpoint.

Classify each as existing/reused, amended, or new.

No implementation is authorized in this mission.

---

## 4. Mandatory Product Classification

The report must preserve a clean classification:

### Build Now

- Inventory / Opening Stock CSV/XLSX onboarding;
- Catalog and Inventory downloadable templates;
- automatic Smart Business SKU when absent;
- one SKU rule across creation channels;
- inventory-first Catalog establishment/linking before Opening Stock;
- explicit duplicate/match review;
- D-068 safeguard where applicable.

### Build Later

- merchant-configurable SKU formats;
- barcode/SKU label printing;
- batch/lot/expiry import;
- multi-unit conversion/import packaging;
- historical bulk reconciliation tooling unless separately authorized.

### Add-on

None unless the architecture proves an external service is strictly necessary; do not introduce one speculatively.

### Separate Product

None.

### Reject

- Inventory and Catalog as one truth record;
- direct current-stock writes;
- silent duplicate creation/merge/linking;
- post-history silent linking contrary to D-047;
- channel-specific SKU behavior;
- SKU used as barcode/legal identifier substitute;
- twentieth public Catalog command without explicit Mission Control reopening.

---

## 5. Existing Independent Parser Gate

The SB-P-1.11 parser/runtime security gate remains independent.

This architecture reconciliation must not claim that the current Lovable CPU-evidence issue is resolved.

Do not redesign the parser runtime in this mission.

Do not allow the new Inventory bulk workflow to bypass whatever final parser/security architecture is ultimately approved for Catalog import.

The implementation-ready amendment should explicitly identify reusable parser/import infrastructure only where safe and should mark any dependency on the unresolved parser gate.

---

## 6. Required Output

Create:

`communication/live/report1.96.md`

The report must include:

1. exact latest `main` SHA reviewed;
2. canonical sources reviewed;
3. reconciliation of FWR-001 through FWR-005;
4. exact D-023 replacement wording;
5. ARC-1 through ARC-10 decisions;
6. standalone implementation contract;
7. Supabase impact map;
8. Security impact map;
9. test/evidence plan for future Build Mode;
10. Build Now / Build Later / Add-on / Separate Product / Reject classification;
11. unresolved assumptions or conflicts;
12. one final verdict.

Allowed final verdicts:

- `FOUNDER WORKFLOW ARCHITECTURE READY FOR SUPABASE + SECURITY REVIEW`
- `FOUNDER WORKFLOW ARCHITECTURE CHANGES REQUIRED`
- `FOUNDER WORKFLOW ARCHITECTURE STOPPED — AUTHORITY OR EVIDENCE GAP`

---

## 7. Stop Rules

STOP rather than inventing architecture if:

- the Founder decisions conflict irreconcilably with SB-P-1.10 Inventory Truth;
- D-047 or D-068 cannot be preserved;
- a twentieth public Catalog command appears necessary;
- permission behavior cannot remain fail-closed;
- a new authority model would be required;
- the architecture depends on an unapproved external service;
- an unresolved governance conflict is discovered.

Document the exact conflict and stop.

---

## 8. Explicitly Not Authorized

This mission does not authorize:

- application implementation;
- dependency changes;
- database migrations;
- Supabase DDL/DML;
- production-data writes;
- Lovable mutation/publish/deploy;
- domain cutover;
- parser runtime redesign;
- R2 implementation;
- payment/POS work;
- permission expansion;
- Product Truth mutation beyond drafting the D-023 amendment for review;
- a twentieth Catalog command;
- Build Lock;
- production migration.

Human review and merge remain mandatory.

---

## 9. Required Next Gate

A positive `report1.96.md` does **not** authorize Build Mode.

Mission Control must review the merged report and then obtain:

1. Supabase Backend Architecture review for schema/RPC/RLS/atomicity impacts; and
2. Security & Permissions Architecture review for authority, isolation, upload/import, idempotency, abuse, and privileged-path boundaries.

Only after both return positive merged verdicts may Mission Control consider a separate Claude Code Build Lock / Build Mode instruction.

Production migration remains blocked.
