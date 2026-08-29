# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-27 — D-023 FOUNDER DECISION-RECORD AMENDMENT RECONCILIATION

**Instruction ID:** instruction1.123  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-27 — Founder Decision-Record Amendment Reconciliation  
**Authorized By:** Founder / Mission Control  
**Executing Room:** Claude Code / Engineering  
**Mode:** GOVERNANCE RECORD CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Build Lock / Build Mode Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Formally reconcile the Founder Product Decision Record with the already Founder-approved and downstream-locked generated-SKU behavior recorded in the Founder Workflow Reconciliation Record and carried into the locked SB-P-1.11 Version 1.2 implementation package.

The outstanding governance item is the obsolete D-023 wording:

`Build Now includes one optional merchant-defined SKU. SKU does not block product creation.`

The Founder Workflow Reconciliation Record explicitly classifies D-023 as:

`AMENDMENT REQUIRED`

This mission performs that bounded decision-record amendment only. It does not create new Product Truth and does not reopen the locked implementation package.

Required completion report:

`communication/live/report1.132.md`

---

## 2. Entry Gate

Before any change, synchronize to current merged `main` and verify:

- PR #280 is merged;
- merge commit `36cc718b1da3161664cebf0b347aab655ad67ce3` or a later `main` commit containing it is current;
- the three Version 1.2 Stage 12 implementation-package documents are `LOCKED — MISSION CONTROL ACCEPTED`;
- `communication/live/report1.131.md` exists with final disposition `SB-P-1.11 IMPLEMENTATION PACKAGE VERSION 1.2 LOCK COMPLETE — MISSION CONTROL VERIFICATION REQUIRED`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md` still records FWR-003 and FWR-004 and classifies D-023 as `AMENDMENT REQUIRED`;
- no later Founder/Mission Control decision supersedes the generated-SKU rule.

If any entry condition is absent, contradicted, or superseded, STOP and report the evidence gap. Do not modify the Founder Product Decision Record.

---

## 3. Governing Founder-Approved SKU Rule

Preserve the already accepted behavior exactly:

1. Merchant-supplied SKU input is optional.
2. Every newly created Catalog product must resolve to one SKU.
3. If the merchant supplies a SKU, validate and use it if permitted.
4. If the merchant does not supply a SKU, Smart Business generates one business-scoped unique tracking SKU automatically.
5. A generated SKU must not collide with merchant-supplied or generated SKUs within the same business.
6. Different businesses may use the same SKU value.
7. SKU generation must not encode sensitive information unnecessarily.
8. The same canonical rule applies across dashboard/manual creation, Catalog CSV/XLSX import, Inventory-first creation, WhatsApp text, voice, photo-assisted creation, and future governed creation channels.
9. SKU identity remains governed by the existing audit/history obligations.
10. Absence of a merchant-supplied SKU must never block product creation solely because the merchant left that field blank.

This is a governance-record reconciliation of already accepted Product Truth, not a new product decision.

---

## 4. Authorized Files

Modify only:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`

Create only:

`communication/live/report1.132.md`

No other file may be created, modified, renamed, moved, or deleted.

---

## 5. Required D-023 Amendment

Replace D-023's obsolete wording with wording equivalent in meaning to:

`D-023 | Build Now uses one SKU per Catalog product. Merchant-supplied SKU input is optional: when supplied, Smart Business validates and uses it if permitted; when absent, Smart Business automatically assigns a business-scoped unique tracking SKU. Absence of a merchant-supplied SKU does not block product creation.`

The final wording may be polished for consistency with the existing decision table, but must not change the meaning above.

### D-024 consistency alignment

D-024 currently includes the phrase `at most one optional SKU`. Because the accepted FWR-003 rule now ensures a product resolves to one SKU, that phrase becomes textually stale once D-023 is amended.

A **minimal wording-only consistency alignment of D-024 is authorized**, limited to removing that obsolete optionality implication while preserving its existing uniqueness/business-scope rule. Acceptable meaning:

`D-024 | A product has one SKU, unique within its business; different businesses may use the same SKU.`

Do not add any new SKU behavior beyond the governing rule in Section 3.

---

## 6. Required Record Metadata / Audit Note

Preserve the original decision history. Do not erase the fact that D-023 originally used the optional merchant-defined wording.

Add a concise append-only amendment/audit note in the Founder Product Decision Record stating:

- D-023 was formally amended under SB-P-1.11-GC-27 / `instruction1.123.md`;
- the amendment implements the already Founder-approved FWR-003/FWR-004 rule;
- D-024 received only the minimum consistency wording needed to remove obsolete optionality language;
- no other Founder decision was reopened;
- no implementation authority was granted.

If the document has no suitable amendment-history section, add one near the existing `Superseded Decisions` / final governance notes without restructuring unrelated content.

---

## 7. Locked Package Boundary

Do not modify or reopen:

- `docs/implementation/SB-P-1.11/engineering-contract.md`;
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md`;
- `docs/implementation/SB-P-1.11/verification-checklist.md`;
- `communication/live/report1.126.md` through `report1.131.md`;
- the Product Blueprint;
- the EIS or canonical Lambda Parser EIS.

The locked Version 1.2 package already carries the accepted generated-SKU behavior. GC-27 aligns the older Founder decision record to that accepted rule; it does not alter the package.

---

## 8. Residual Governance Items After GC-27

This mission resolves only the formal D-023/D-024 textual consistency issue.

The following remain outside this mission:

1. `docs/implementation/SB-P-1.11/founder-lovable-brief.md` stale twenty-eight-command terminology — must be corrected before Stage 14 Founder Lovable Brief authorization/use.
2. Repository hygiene — remains mandatory before implementation authorization / Build.
3. Blueprint `active/` lifecycle-path inconsistency — non-blocking housekeeping.

Do not fix any of these here.

---

## 9. Mandatory Exclusions

Do not:

- change any Founder decision other than D-023 and the minimum D-024 consistency wording authorized above;
- change Product Blueprint content;
- change locked package content;
- implement code;
- create or execute SQL/migrations;
- mutate Supabase, RLS, grants, AWS, S3, IAM, Lovable, dependencies, infrastructure, deployment, or production state;
- perform repository hygiene remediation;
- correct the Founder Lovable Brief;
- move the Blueprint lifecycle path;
- authorize implementation, Build Lock, Build Mode, paste-into-Lovable use, deployment, publication, or production.

---

## 10. Repository Discipline

1. Start from current merged `main`.
2. Fetch and fast-forward synchronize before work.
3. Use a new protected mission branch.
4. Modify/create only the two authorized paths.
5. Do not use `git add .`.
6. Preserve unrelated local modifications and untracked files.
7. Run the repository Markdown quality gate on both files.
8. Run whitespace and secret-pattern checks.
9. Confirm the locked package, Product Blueprint, EIS, application code, SQL, infrastructure, and repository-hygiene scope remain unchanged.
10. Open a PR for Mission Control verification.
11. Do not approve or merge your own PR.

---

## 11. Required Completion Report

Create:

`communication/live/report1.132.md`

Include:

- exact starting merged `main` SHA;
- branch name;
- final branch commit SHA reported externally if self-hash cannot be embedded;
- PR number and URL;
- exact files changed;
- exact before/after D-023 wording;
- exact before/after D-024 wording;
- confirmation the amendment matches FWR-003/FWR-004 and introduces no new behavior;
- confirmation no other Founder decision changed;
- confirmation the locked Version 1.2 package remained untouched;
- quality-gate, secret-scan, and whitespace results;
- remaining residual governance items;
- implementation-authority status.

Required final disposition:

`SB-P-1.11 D-023 FOUNDER DECISION-RECORD AMENDMENT — COMPLETE — MISSION CONTROL VERIFICATION REQUIRED`

---

## 12. Next Gate

After human review and merge of the GC-27 amendment PR, Mission Control must verify the decision-record diff on current `main`.

If verified, the D-023 amendment prerequisite identified by `report1.130.md` is satisfied.

Mission Control may then separately authorize the next lifecycle action. Before Stage 14 Founder Lovable Brief authorization/use, the stale Founder Lovable Brief command taxonomy remains to be corrected. Before implementation authorization / Build, repository hygiene remains mandatory.

No implementation authorization is implied.

---

## 13. Mission Control Decision

`SB-P-1.11-GC-27 — D-023 FOUNDER DECISION-RECORD AMENDMENT RECONCILIATION AUTHORIZED`
