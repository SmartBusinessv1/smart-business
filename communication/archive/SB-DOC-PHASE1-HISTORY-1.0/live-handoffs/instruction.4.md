# SMART BUSINESS — REPOSITORY COMMUNICATION

# Instruction 4 — Narrow UX Terminology Reconciliation

**Mission ID:** `SB-DOC-PHASE1-HISTORY-1.0`

**Mission Name:** `Phase 1 Historical Continuity Reconstruction`

**From:** Smart Business Mission Control

**To:** Claude Code

**Status:** `ACTIVE — NARROW DOCUMENTATION RECONCILIATION ONLY`

---

## 1. Context

Mission Control has reviewed the merged UX anti-drift analysis returned in `communication/live/report.3.md` and the new Section 21 of:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

The substantive UX analysis is accepted.

The `SB-P-1.12` and `SB-P-1.14` sequencing corrections are accepted.

The Completion Report Experience Verification Matrix rule is accepted.

No further architectural, mission-sequencing, feature-scope or UX-content review is requested.

---

## 2. One Remaining Anti-Drift Correction

Section 21.3.1 still contains future-facing verification language that refers to the old `Catalog` product identity, including wording equivalent to:

- `catalog/inventory-view capability`;
- `Catalog import preview`.

This is inconsistent with the merged Founder Product Decision Record:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/founder-decisions/01_Founder_Product_Decision_Record_Product_and_Price_Master.md`

The Founder decision preserves valid Catalog engineering but reclassifies the capability as the shared **Product & Price Master** foundation and prevents `Catalog` from persisting as a competing top-level product identity.

Historical references to existing Catalog code/routes may remain when clearly identified as historical/current-implementation evidence. Future-facing Product Mission UX, verification, acceptance and target-state language must use **Product & Price Master** or contextual product/price terminology instead.

---

## 3. Required Action

Update in place:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

Only:

1. Replace the future-facing `catalog/inventory-view capability` example in Section 21.3.1 with terminology consistent with **Product & Price Master / contextual product-price-inventory access**.
2. Replace the future-facing `Catalog import preview` example in Section 21.3.1 with terminology consistent with the intended target state, while preserving the same permission-revocation / preview-confirm runtime test.
3. Scan Section 21 only for any other future-facing wording that unintentionally treats `Catalog` as the target product identity. Correct such occurrences if found.
4. Do **not** rewrite historical/current-repository evidence that legitimately names existing Catalog code, routes, migrations or prior implementation.
5. Do not otherwise change the accepted UX verdicts, sequencing corrections, runtime scenarios, nine-mission sequence or Experience Verification Matrix rule.

---

## 4. Return Communication

After committing the narrow correction, create:

`communication/live/report.4.md`

The report must state briefly:

- that the terminology reconciliation was completed;
- the exact future-facing references changed;
- whether any additional Section 21 target-state Catalog wording was found;
- confirmation that no substantive UX, architecture, sequencing or implementation change was made;
- branch, commit SHA and PR number/link;
- confirmation that no implementation was performed;
- clear return-to-Mission-Control status.

---

## 5. Boundary

This instruction authorizes documentation reconciliation only.

Do not:

- implement application/database/runtime/platform changes;
- start `SB-P-1.12` or any later Product Mission;
- alter the Founder Product Decision Record;
- reopen the accepted UX analysis beyond the terminology issue above;
- close or archive `SB-DOC-PHASE1-HISTORY-1.0`.

Follow protected-main workflow:

branch → commit → push → PR → CI

Do not self-merge.

When the durable plan update and `report.4.md` are complete, stop and return control to Mission Control.
