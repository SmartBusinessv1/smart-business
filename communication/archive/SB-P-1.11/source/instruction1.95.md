# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-6 — BKR-3 FINAL SUPABASE CONFIRMATION REVIEW

**Instruction ID:** instruction1.95
**Mission ID:** SB-P-1.11-FWR-6
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing
**Workstream:** Founder Workflow Reconciliation
**Authorized By:** Mission Control
**Mode:** REVIEW MODE — FINAL BKR-3 CONFIRMATION ONLY
**Implementation Authority:** NONE
**Database Migration Authority:** NONE
**Production Mutation Authority:** NONE

---

## 1. Mission Objective

Perform one final, bounded Supabase Backend Architecture confirmation review of the BKR-3 Inventory composite foreign-key order correction recorded in:

- `communication/live/report1.100.md`

The purpose is only to determine whether the single remaining backend defect identified in `communication/live/report1.99.md` has been corrected consistently with the canonical repository and current backend contract.

This mission must not reopen already-confirmed BKR-1, BKR-2, BKR-4, or BKR-5 architecture unless the BKR-3 correction directly and demonstrably invalidates one of them. If such evidence exists, STOP and report it without redesigning anything.

---

## 2. Required Review Inputs

Read and compare:

1. `communication/live/report1.97.md`
2. `communication/live/report1.98.md`
3. `communication/live/report1.99.md`
4. `communication/live/report1.100.md`
5. the canonical Inventory migration and current repository schema evidence relevant to `inventory_items`

Repository evidence prevails over earlier report wording where they conflict.

---

## 3. Exact BKR-3 Question to Confirm

Confirm whether the Inventory-side composite foreign keys in the proposed `inventory_import_rows` contract are now correctly defined to reference the existing canonical Inventory composite key:

```text
inventory_items (id, business_id)
```

The corrected conceptual form to verify is:

```sql
FOREIGN KEY (matched_inventory_item_id, business_id)
REFERENCES inventory_items (id, business_id)
ON DELETE RESTRICT

FOREIGN KEY (resolved_inventory_item_id, business_id)
REFERENCES inventory_items (id, business_id)
ON DELETE RESTRICT
```

Also confirm that:

- the existing `UNIQUE (id, business_id)` is reused;
- no redundant `UNIQUE (business_id, id)` is required or authorized;
- Catalog-side composite foreign keys remain unchanged and correct;
- no other BKR-3 physical-contract element was altered by `report1.100.md`;
- BKR-1, BKR-2, BKR-4, and BKR-5 remain unaffected by this correction.

---

## 4. Review Boundaries

This is a confirmation review only.

Do not:

- implement application code;
- create or modify SQL or migrations;
- mutate Supabase test or production projects;
- change RLS or grants;
- expand service-role authority;
- change Lovable;
- redesign parser architecture;
- modify Product Truth;
- expand permissions;
- add or redesign Catalog commands;
- create a twentieth Catalog command;
- redesign BKR-1, BKR-2, BKR-4, or BKR-5;
- enter Build Mode;
- grant Build Lock;
- deploy;
- touch production.

Read-only repository inspection and read-only schema verification are permitted where needed to confirm the key order and referenced constraint.

---

## 5. Required Output

Create only:

`communication/live/report1.101.md`

The report must contain:

1. exact merged `main` SHA reviewed;
2. evidence used to confirm the canonical `inventory_items` composite key order;
3. verification of the two corrected Inventory-side composite FK clauses;
4. explicit confirmation whether a new unique constraint is unnecessary;
5. confirmation that Catalog-side FKs remain correct and unchanged;
6. confirmation that no other BKR-3 physical-contract element changed;
7. confirmation that BKR-1, BKR-2, BKR-4, and BKR-5 remain unaffected;
8. any blocking evidence gap or contradiction;
9. one final verdict.

Allowed verdicts are exactly:

- `SUPABASE BKR-3 FINAL CONFIRMATION — PASS`
- `SUPABASE BKR-3 FINAL CONFIRMATION — CHANGES REQUIRED`
- `SUPABASE BKR-3 FINAL CONFIRMATION — STOPPED — AUTHORITY OR EVIDENCE GAP`

---

## 6. PASS Standard

PASS only when all of the following are supported by repository/backend evidence:

- the existing `inventory_items` reference target is `UNIQUE (id, business_id)`;
- both Inventory-side import FKs are ordered to match `(id, business_id)` exactly;
- same-business referential integrity remains preserved;
- no redundant new unique key is needed;
- no unrelated BKR-3 contract element changed;
- no previously-resolved BKR finding is invalidated;
- no new blocking backend defect is discovered within this correction's direct scope.

A PASS does not authorize implementation.

A PASS authorizes Mission Control only to proceed to the separate Security & Permissions Architecture review of the corrected Founder Workflow architecture.

---

## 7. Failure / Escalation Rule

If the correction still conflicts with canonical schema evidence, use `CHANGES REQUIRED` and identify the exact mismatch.

If required evidence cannot be obtained or authority is unclear, use `STOPPED — AUTHORITY OR EVIDENCE GAP`.

Do not invent a workaround, new key, migration, or architecture change in this review.

---

## 8. Repository Workflow

Use the normal repository-first protected-branch and pull-request flow.

Human review and merge are mandatory.

The author must not approve or merge its own report.

---

## 9. Next Gate

Only this verdict unlocks the Security & Permissions Architecture review:

`SUPABASE BKR-3 FINAL CONFIRMATION — PASS`

Any other verdict keeps Security review blocked and returns the finding to Mission Control.

---

## 10. Final Authority Boundary

This instruction authorizes one final BKR-3 confirmation review only.

It does not authorize implementation, Build Lock, database change, deployment, production action, or acceptance of SB-P-1.11.

Mission Control retains sequencing authority.
