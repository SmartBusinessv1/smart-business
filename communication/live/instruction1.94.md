# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-5 — BKR-3 INVENTORY COMPOSITE FK ORDER MICRO-CORRECTION

**Mission ID:** SB-P-1.11-FWR-5  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Founder Workflow Reconciliation  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** PLAN MODE / DOCUMENTATION CORRECTION ONLY  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE

---

## 1. Mission Objective

Apply one narrowly bounded architecture-contract correction to the merged Founder workflow backend architecture.

The merged Supabase confirmation review in:

`communication/live/report1.99.md`

confirmed BKR-1, BKR-2, BKR-4, and BKR-5 resolved, but found one remaining BKR-3 defect:

`communication/live/report1.98.md` assumes an existing Inventory composite unique key ordered as:

```text
(business_id, id)
```

while the canonical Inventory schema defines:

```text
UNIQUE (id, business_id)
```

The Inventory-side composite foreign-key contract must therefore use the existing referenced-key order:

```text
(id, business_id)
```

This mission authorizes correction of that ordering only.

---

## 2. Governing Inputs

Read and inherit:

- `communication/live/report1.98.md`
- `communication/live/report1.99.md`
- the current canonical Inventory migration/schema evidence establishing `UNIQUE (id, business_id)`
- relevant active governance and backend architecture sources already governing SB-P-1.11

Repository evidence overrides prior report assumptions.

---

## 3. Exact Authorized Correction

Correct only the Inventory-side composite foreign-key portions of the architecture contract so that every FK referencing the existing Inventory item composite unique key matches the referenced column order:

```text
(id, business_id)
```

Where a referencing support table stores columns such as:

```text
matched_inventory_item_id
resolved_inventory_item_id
business_id
```

the foreign-key pairing must be expressed in the matching order, for example:

```sql
FOREIGN KEY (matched_inventory_item_id, business_id)
REFERENCES inventory_items (id, business_id)
```

and equivalently for any other Inventory-item reference covered by the BKR-3 contract.

Do not add a redundant `UNIQUE (business_id, id)` merely to preserve the incorrect prior wording.

Do not alter Catalog-side FK ordering unless repository evidence shows it is part of the exact same BKR-3 defect. If any additional discrepancy is discovered, report it as an observation and stop rather than expanding scope.

---

## 4. Prohibited Changes

This mission does **not** authorize:

- code changes;
- dependency changes;
- SQL or migration creation;
- migration application;
- Supabase writes or mutations;
- RLS or grant changes;
- service-role expansion;
- Lovable changes;
- parser redesign;
- Product Truth changes;
- permission expansion;
- BKR-1 redesign;
- BKR-2 redesign;
- BKR-4 redesign;
- BKR-5 redesign;
- SKU architecture changes;
- D-068 behaviour changes;
- inventory-import lifecycle redesign;
- new tables or new public commands;
- a twentieth Catalog command;
- Build Lock;
- Build Mode;
- deployment;
- production action.

Do not reopen already confirmed backend decisions.

---

## 5. Required Output

Create only:

`communication/live/report1.100.md`

The report must:

1. identify the exact incorrect composite FK wording inherited from `report1.98.md`;
2. identify the canonical referenced key as `inventory_items (id, business_id)`;
3. state the exact corrected FK ordering for every affected Inventory reference;
4. confirm no redundant unique constraint is required;
5. confirm BKR-1, BKR-2, BKR-4, and BKR-5 were not modified;
6. confirm no implementation, migration, Supabase, RLS/grant, permission, Lovable, parser, Product Truth, deployment, or production change occurred;
7. state whether BKR-3 is now ready for final Supabase confirmation review.

Allowed final dispositions:

```text
BKR-3 MICRO-CORRECTION — READY FOR FINAL SUPABASE CONFIRMATION REVIEW
```

or

```text
BKR-3 MICRO-CORRECTION — STOPPED — EVIDENCE OR SCOPE CONFLICT
```

No broader mission verdict is authorized.

---

## 6. Repository Workflow

After this instruction is human-reviewed and merged:

1. synchronize latest `origin/main` using fast-forward-only workflow;
2. read the merged instruction and required inputs;
3. create a protected mission branch;
4. produce only `communication/live/report1.100.md`;
5. verify exact file scope;
6. commit and push;
7. open a pull request;
8. do not approve or merge your own work.

Human review and merge remain mandatory.

---

## 7. Completion Criteria

This micro-correction is complete only when:

- the Inventory composite FK order matches the existing canonical key exactly;
- no redundant schema object is introduced in the architecture;
- no other BKR decision is modified;
- no implementation authority is implied;
- `report1.100.md` is committed through the protected-branch PR workflow;
- Mission Control can hand the corrected contract back to Supabase for one final bounded confirmation review.

---

## Next logical step

After `report1.100.md` is merged with a positive disposition, Mission Control shall issue a final short Supabase confirmation review limited to BKR-3. Security & Permissions Architecture review remains blocked until that confirmation passes.
