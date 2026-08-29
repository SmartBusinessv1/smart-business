# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-5 — INVENTORY COMPOSITE FK ORDER MICRO-CORRECTION

**Mission ID:** SB-P-1.11-FWR-5  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Founder Workflow Reconciliation  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** PLAN MODE — MICRO-CORRECTION ONLY  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE

---

## 1. Mission Objective

Correct exactly one remaining backend architecture-contract defect identified by the merged Supabase Backend Confirmation Review in:

`communication/live/report1.99.md`

The defect is limited to **BKR-3 composite foreign-key column order**.

`communication/live/report1.98.md` assumes an Inventory composite reference target ordered as:

`inventory_items (business_id, id)`

The canonical Inventory contract instead provides:

`UNIQUE (id, business_id)`

The micro-correction must therefore align every proposed Inventory-side composite foreign key in the Inventory import architecture with the existing referenced-key order:

`(inventory_item_id, business_id) -> inventory_items (id, business_id)`

or the exact equivalent column names used by the proposed import tables.

No new unique constraint is authorized.

No other architecture change is authorized.

---

## 2. Required Inputs

Read before producing the correction:

1. `communication/live/report1.98.md`
2. `communication/live/report1.99.md`
3. `communication/live/report1.97.md` only as prior Supabase baseline where needed
4. the current canonical Inventory migration/schema definition that establishes `UNIQUE (id, business_id)`

Repository evidence prevails over earlier report wording.

---

## 3. Exact Authorized Correction

You are authorized to correct only the Inventory-side composite FK ordering in the architecture contract carried by `report1.98.md`.

The corrected architecture must:

- preserve the existing canonical Inventory unique key `UNIQUE (id, business_id)`;
- define Inventory import references in the same referenced-column order;
- preserve tenant binding;
- preserve `ON DELETE RESTRICT` / fail-closed dependency semantics already locked;
- preserve all other BKR-1 through BKR-5 resolutions exactly as merged;
- preserve Owner-only Phase 1 authority;
- preserve the locked nineteen-command Catalog surface;
- preserve D-047 and D-068 behaviour;
- preserve parser/runtime separation and the still-open parser gate.

Do not introduce a redundant `(business_id, id)` unique key merely to match the prior mistaken wording.

---

## 4. Explicitly Prohibited

Do not:

- change BKR-1;
- change BKR-2;
- change BKR-4;
- change BKR-5;
- redesign `inventory_import_batches` or `inventory_import_rows` beyond the FK column-order correction;
- add columns, states, indexes, constraints, RPCs, grants, policies, or tables beyond what is already locked;
- change Catalog-side composite references unless the Supabase finding explicitly shows the same ordering defect there;
- create or modify application code;
- create or modify dependencies;
- create or apply migrations;
- mutate Supabase test or production projects;
- change RLS or grants;
- expand service-role authority;
- change Lovable;
- redesign the parser;
- modify Product Truth;
- expand permissions;
- add a twentieth Catalog command;
- enter Build Mode;
- authorize Build Lock;
- deploy;
- touch production.

If any additional architecture defect is discovered, record it as an observation and STOP rather than widening this mission.

---

## 5. Required Output

Create exactly one report:

`communication/live/report1.100.md`

The report must be standalone enough for the Supabase specialist to confirm the correction without guessing.

It must include:

1. mission identity and reviewed commit;
2. the exact repository evidence for the canonical Inventory key order;
3. the incorrect prior architecture form;
4. the corrected composite FK form;
5. a statement that no new unique key is required or authorized;
6. confirmation that BKR-1, BKR-2, BKR-4, and BKR-5 remain unchanged;
7. confirmation that no other BKR-3 physical-contract element changed;
8. explicit scope-integrity statement;
9. final disposition.

Allowed final dispositions:

- `FK ORDER MICRO-CORRECTION — READY FOR SUPABASE FINAL CONFIRMATION`
- `STOPPED — ADDITIONAL BACKEND CONTRACT CONFLICT FOUND`
- `STOPPED — EVIDENCE GAP`

---

## 6. Repository and PR Rules

Use repository-first workflow.

Create the report on a protected mission branch and open a pull request for human review.

The report PR must change only:

`communication/live/report1.100.md`

Do not edit `report1.98.md` in place. Preserve the prior report as audit history; `report1.100.md` is the bounded corrective addendum/superseding clause for this single FK-order issue.

Human review and merge are mandatory.

The author must not approve or merge its own work.

---

## 7. Completion Gate

This mission is complete only when:

- the exact FK-order defect is corrected;
- repository evidence supports the corrected order;
- no other architecture term changes;
- the report is committed through a protected PR;
- no implementation or environment mutation occurs.

A positive result does **not** authorize implementation.

After merge, Mission Control will issue one final short Supabase confirmation review limited to this FK-order correction.

Only a PASS from that review may unlock the separate Security & Permissions Architecture review.

---

## Final Mission Control Boundary

Correct the column order.

Do not redesign the architecture.

Preserve the evidence trail.

No Build Mode.
