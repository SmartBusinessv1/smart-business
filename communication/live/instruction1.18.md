# SMART BUSINESS MISSION CONTROL — MC-126

## SB-P-1.12 — Contract 22 §33 FCTM / Blueprint Reconciliation Work Package

**Status:** DRAFT — INEFFECTIVE UNTIL FOUNDER/AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Canonical numbered source:** Contract 22 §33 — Personal Identity Lifecycle and Governed Deletion  
**Canonical Contract 22 blob:** `1a025e8d03a77fb805ef4375abc1e44204a49528`  
**Founder approval:** Founder Record 07  
**Parent records:** MC-120, MC-122, MC-125, MC-117, MC-109  
**Canonical drafting baseline:** `main@5e23b3c8a6639983ee3fbd142c9cfa49a6567d30`  
**Date:** 2026-09-29

## 1. Mission objective

Reconcile the canonical SB-P-1.12 FCTM and active Blueprint against newly canonical Contract 22 §33.

This is a **source-accounting and documentary reconciliation mission only**.

It does not authorize implementation, security design, schema changes, SQL, migrations, auth deletion, business deletion, runtime behavior or production changes.

## 2. Authorized actor

Claude Code is authorized as the definition/documentation preparation actor for this bounded reconciliation.

Claude Code may edit only the files explicitly authorized in §4.

Mission Control remains the accountable governance owner and will independently review exact source coverage, row accounting, Blueprint mapping and residual holds.

## 3. Canonical sources to read before editing

Claude Code must read and reconcile against:

1. `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` — especially canonical §33;
2. `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md`;
3. `communication/missions/SB-P-1.12/founder/07-contract22-personal-identity-deletion-source-approval.md`;
4. `communication/live/instruction1.9.md` — R-2 completion conditions;
5. `communication/live/instruction1.12.md` — MC-109 obligation-set reconciliation;
6. `communication/live/instruction1.15.md` — MC-117 legal-research reconciliation;
7. `communication/live/instruction1.17.md` — MC-122 Founder approval capture / §33 correction;
8. `docs/research/India-Legal-Privacy-Retention-Deep-Research-Report.md`;
9. `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md`;
10. `docs/phase-1-mission-blueprint/active/SB-P-1.12.md`;
11. Source 18 v1.2.

If any source conflict is found, STOP and report it rather than resolving it silently.

## 4. Authorized files

Claude Code may modify only:

1. `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md`
2. `docs/phase-1-mission-blueprint/active/SB-P-1.12.md`

Claude Code may additionally create one bounded completion report under:

`communication/missions/SB-P-1.12/claude-code/`

with a new sequential filename for this work package.

No other file may be modified.

## 5. FCTM reconciliation requirements

Perform a **source-first decomposition** of Contract 22 §33.

### 5.1 Row construction

Create valid Source 18 row IDs using:

`22-§33-<ordinal>`

Each independently testable mandatory obligation must receive its own row.

Do not:

- compress distinct mandatory requirements into one omnibus row;
- invent requirements not present in §33;
- omit a mandatory §33 requirement;
- duplicate an existing row where an existing row already faithfully accounts for the same obligation.

Where §33 materially overlaps an existing Contract 21 or Contract 22 row, preserve the existing row and record the relationship in evidence/notes rather than deleting or silently replacing it.

### 5.2 Ownership

The §33 source rows must preserve Founder Record 07:

- SB-P-1.12 owns personal-identity deletion eligibility, authority, membership/ownership truth, historical attribution integrity, isolation/cascade-prevention foundation and the positive personal-identity deletion source requirement;
- SB-P-1.19 remains owner of merchant-facing business/account lifecycle and provides governed final-business-deletion lifecycle evidence.

If a §33 obligation is a cross-mission evidence dependency rather than an SB-P-1.12 implementation obligation, document that distinction explicitly without reassigning Contract 18.

### 5.3 Disposition

New §33 rows should remain **IN SCOPE** for SB-P-1.12 where they express its approved foundation responsibilities.

Where a requirement depends on SB-P-1.19 evidence, legal validation, ESC-1 security resolution or later runtime verification, keep the row IN SCOPE and mark the relevant dependency/hold rather than moving it out of scope.

Do not classify any §33 requirement as implemented merely because the source now exists.

### 5.4 Counts

Recompute and update:

- Contract 22 row count;
- total FCTM row count;
- disposition totals;
- all metadata/count statements affected by new §33 rows.

Do not hard-code a target count before performing the source-first decomposition.

All totals must be internally consistent and mechanically verifiable.

## 6. Blueprint reconciliation requirements

Update the active SB-P-1.12 Blueprint only as necessary to reconcile §33.

### 6.1 Positive identity-deletion acceptance

Add explicit row-keyed acceptance coverage for the positive personal-identity deletion requirement and each required eligibility/integrity boundary from §33.

The Blueprint must distinguish:

- positive deletion action;
- final-owned-business deletion evidence from SB-P-1.19;
- no surviving ownership;
- no authorized membership;
- no incomplete transfer;
- disposition of relevant obligations;
- history/attribution survival;
- surviving attribution grants no authority;
- authorized/confirmed/audited deletion path;
- no uncontrolled direct/cascade deletion.

Do not treat existing FA-15–FA-18 negative guards as sufficient coverage for the positive deletion action.

### 6.2 R-2 status

Update R-2 wording to reflect the current canonical state accurately:

- the missing numbered source defect is resolved by Contract 22 §33;
- legal-research source-accounting input is provisionally satisfied under Founder Record 06 / MC-117;
- FCTM / Blueprint reconciliation is being performed by this work package;
- R-2 must remain OPEN until independent Security review and the remaining `instruction1.9.md` §4 completion conditions are met.

Do not declare R-2 closed.

### 6.3 Cross-mission trace

The Blueprint must explicitly preserve:

- SB-P-1.12 as the authority/identity/deletion-eligibility foundation;
- SB-P-1.19 as merchant-facing lifecycle owner and provider of final-business-deletion lifecycle evidence;
- combined outcome not fully demonstrated until both missions supply required evidence.

No SB-P-1.19 implementation is authorized by this work package.

## 7. Existing holds that must remain

The reconciliation must preserve, not weaken:

- ESC-1 = OPEN T8;
- Owner business API DELETE risk;
- `businesses.owner_id → auth.users ON DELETE CASCADE` risk;
- `22-§20-2` = IN SCOPE / BLOCKED;
- historical authority/audit/financial durability holds;
- G-6/T4 production state = UNVERIFIED;
- no Stage 8 / Blueprint lock;
- no EIS;
- no implementation;
- no schema / SQL / migration / auth-delete / production authority.

## 8. Legal / retention treatment

Use the canonical research only as provisional Phase One evidence.

Do not invent:

- a universal statutory retention duration;
- a universal tombstone duration;
- a universal historical-actor mapping duration;
- a universal backup deletion period;
- a universal employment/payroll retention period;
- Team LIPS intermediary/CERT-In/RBI classification.

Carry unresolved items as conditional/deferred where needed.

A retained record must not automatically be treated as requiring a retained active identity.

## 9. Required completion report

The completion report must include:

1. exact base SHA;
2. final branch head SHA;
3. exact changed-file list;
4. canonical source blobs read;
5. complete §33 source-to-FCTM decomposition table;
6. duplicate/overlap analysis against existing rows;
7. old and new Contract 22 row counts;
8. old and new total FCTM counts and disposition totals;
9. exact Blueprint sections/acceptance IDs added or changed;
10. R-2 status before/after wording;
11. explicit confirmation that no existing IN SCOPE row was removed or weakened;
12. explicit confirmation that Contract 18 was not reinterpreted or reassigned;
13. explicit confirmation that ESC-1 / `22-§20-2` / G-6/T4 holds remain;
14. validation commands/results;
15. CI status if available;
16. STOP for Mission Control independent review.

## 10. Stop conditions

STOP and report without proceeding if:

- canonical §33 conflicts with another approved numbered source in a way that changes product meaning;
- row ownership cannot be reconciled without changing Founder Record 07;
- a source requirement would need to be omitted/reclassified;
- any existing IN SCOPE row would need deletion or weakening;
- Contract 18 would need reinterpretation;
- the active Blueprint would require a product decision beyond already approved Founder records;
- implementation/security design becomes necessary to complete the documentary mapping.

## 11. Gate status

R-2 remains **OPEN / CRITICAL PATH / SOURCE-COVERAGE HOLD**.

This work package may satisfy the FCTM / Blueprint source-accounting portion of R-2 but cannot close R-2 by itself.

After Mission Control accepts the reconciliation, the next mandatory step is an **independent Security & Permissions Architecture review** of the reconciled §33 obligations and the surviving ESC-1 / cascade / attribution / lifecycle evidence boundary.

**STOP AFTER THE RECONCILIATION REPORT. DO NOT SELF-MERGE.**
