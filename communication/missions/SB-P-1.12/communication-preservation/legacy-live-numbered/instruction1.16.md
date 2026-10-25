# SMART BUSINESS MISSION CONTROL — MC-120

## SB-P-1.12 — R-2 Numbered Source-Text Proposal for Positive Personal-Identity Deletion

**Status:** DRAFT — PROPOSAL ONLY — INEFFECTIVE UNTIL FOUNDER/AUTHORIZED-HUMAN APPROVAL, MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Instruction/Proposal Record:** `communication/live/instruction1.16.md`  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Parent records:** MC-109 `instruction1.12.md`, MC-117 `instruction1.15.md`, Founder Record 05, Founder Decision Record 06  
**Canonical drafting baseline:** `main@18f8d977f15dc010651c608ce063ac56d21bd856`  
**Date:** 2026-09-28

## 1. Purpose

Propose the exact numbered-source location and source text needed to close the R-2A source-coverage gap for the **positive personal-identity deletion action**, while preserving the already approved SB-P-1.12 / SB-P-1.19 boundary and all current legal/security holds.

This proposal does **not** amend the numbered source itself.

## 2. Source-accounting finding

Mission Control reaffirms:

- Founder Record 05 ESC1-6 already approves the positive personal-identity deletion outcome;
- existing Contract 21 / Contract 22 sections faithfully anchor authority, membership, isolation, confirmation, audit and durability guards, but do not state the positive deletion obligation;
- Contract 18 governs subscription/payment/account/business lifecycle under SB-P-1.19, but its current `account/business` wording does not explicitly define the distinct Smart Business personal identity;
- therefore the positive personal-identity deletion action needs a new explicit numbered source statement;
- existing source text must not be stretched or silently reinterpreted.

## 3. Proposed numbered source location

### Proposed source

`docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md`

### Proposed new section

**Contract 22 — new §30: Personal Identity Lifecycle and Governed Deletion**

### Why Contract 22

Contract 22 already contains the shared identity, confirmation, audit, durability and data-ownership foundations used by SB-P-1.12.

Placing the positive personal-identity deletion obligation in a new standalone section:

- keeps the requirement in the shared identity/foundation contract rather than forcing Contract 18 to mean something it does not currently say;
- avoids renumbering or weakening existing Contract 22 sections;
- preserves existing Contract 18 ownership by SB-P-1.19;
- makes the cross-mission evidence boundary explicit;
- creates a faithful Source 18 numbered anchor for the owning mission's future FCTM row.

## 4. Proposed exact source text

The proposed Contract 22 §30 text is:

---

## 30. Personal Identity Lifecycle and Governed Deletion

### 30.1 Positive personal-identity deletion

Smart Business shall support governed deletion of a person's Smart Business personal identity after the approved deletion-eligibility conditions are satisfied.

Deletion of the personal identity is separate from deletion or retention of business, financial, audit, employee, statutory or other records whose approved retention purpose survives.

### 30.2 Eligibility conditions

A personal identity may become eligible for deletion only when all of the following are true:

1. the person owns no surviving business;
2. the person's final formerly owned business has completed its permitted governed deletion lifecycle;
3. the person has no remaining authorized membership in any other business;
4. no ownership transfer involving a business still owned by the person remains pending or incomplete;
5. no authoritatively established relevant obligation remains that genuinely requires the active personal identity to continue;
6. required business, financial, authority, audit and statutory history can survive without preserving active authority;
7. the deletion proceeds through an authorized, confirmed, recorded and auditable path.

A deletion request, cancellation request, pause state, scheduled deletion, hidden state or support ticket is not by itself proof that these conditions are satisfied.

### 30.3 Cross-mission evidence boundary

SB-P-1.12 owns the authority, ownership, membership, isolation, historical-attribution and deletion-eligibility foundation for the personal identity.

SB-P-1.19 owns the merchant-facing business/account lifecycle experience and the governed lifecycle evidence that a final owned business has actually completed permitted deletion.

Personal-identity deletion eligibility therefore requires evidence from both domains where applicable. Neither SB-P-1.12 ownership state alone nor SB-P-1.19 lifecycle state alone is sufficient to prove final eligibility.

### 30.4 Relevant obligations and retention

A retained record does not automatically require the active personal identity to remain.

Relevant obligations must be established under an applicable legal, privacy, retention, commercial, claims, security or lifecycle basis and must be distinguished from ordinary historical record retention.

Where a surviving record legitimately requires personal attribution, only the minimum necessary attribution may survive, and that attribution must not grant authority, recreate membership or restore access.

Retention periods must remain record-class-specific and must not be inferred from Smart Business business-lifecycle windows.

### 30.5 History and attribution integrity

Personal-identity deletion must not:

- erase or corrupt required business, financial, authority or audit history;
- destroy a transferred business;
- reassign historical actions to another actor;
- recreate current authority from historical attribution;
- cascade-delete another person's business, employee history or other independently retained record.

Historical attribution may survive only as a non-authorizing relationship subject to the applicable retention/privacy rule.

### 30.6 Governed deletion and proof

Personal-identity deletion must be deliberate, authorized, confirmed, recorded and independently auditable.

Smart Business may retain bounded deletion-proof evidence where required for accountability, provided that the proof does not become a substitute copy of the deleted live profile and follows the applicable retention/privacy rule.

Deletion must not rely on an uncontrolled direct-delete or authentication-cascade path.

### 30.7 Legal and privacy boundary

Smart Business shall distinguish:

- deletion of active identity/account data;
- retention of merchant statutory/business records;
- Team LIPS's own independently required records;
- legal/dispute holds;
- security logs;
- historical audit attribution.

No universal legal-retention duration is created by this section.

Any legally required retention period, personal-data minimization rule, backup treatment or other jurisdiction-specific requirement shall follow the applicable validated policy and law.

### 30.8 Acceptance boundary

The personal-identity deletion requirement is accepted only when:

1. all eligibility conditions are authoritatively proven;
2. final-owned-business deletion has governed lifecycle proof;
3. no authorized membership remains;
4. no incomplete ownership transfer remains;
5. relevant obligations have been dispositioned;
6. required retained history remains intact;
7. surviving attribution grants no authority;
8. deletion proof is recorded as required;
9. no uncontrolled direct/cascade deletion path is used.

---

## 5. Proposed Source 18 accounting

If Founder approves Contract 22 §30 substantially as proposed:

- the positive personal-identity deletion obligation receives a new Contract 22 row in the SB-P-1.12 FCTM;
- row IDs should follow Source 18 format `22-§30-<ordinal>`;
- each independently testable obligation in §30 must be mapped separately rather than collapsed into one omnibus row;
- existing Contract 21 / Contract 22 rows remain unchanged unless a later reconciliation finds a direct overlap;
- existing `22-§20-2` remains IN SCOPE / BLOCKED until ESC-1 durability architecture is separately resolved;
- Contract 18 remains assigned to SB-P-1.19 and is not reinterpreted by this proposal.

## 6. Proposed mission ownership

Mission Control proposes:

### SB-P-1.12

Owns:

- personal-identity deletion eligibility truth;
- authoritative ownership and membership facts;
- pending-transfer eligibility guard;
- historical attribution / non-authorizing integrity;
- business isolation and cascade-prevention foundation;
- positive personal-identity deletion source requirement in Contract 22 §30.

### SB-P-1.19

Owns:

- merchant-facing Pause / cancellation / Stop / Delete lifecycle;
- business/account deletion experience;
- notification/export/grace lifecycle;
- governed proof that the final owned business actually completed permitted deletion;
- merchant-facing transfer lifecycle and related payment/contact experience.

### Cross-mission rule

SB-P-1.19 supplies lifecycle evidence needed by SB-P-1.12 eligibility. SB-P-1.12 does not absorb the merchant-facing business lifecycle, and SB-P-1.19 does not become the authority source for membership/ownership truth.

## 7. Founder-approval requirement

This proposal does **not** reopen the Product Truth outcome.

However, the canonical R-2 assessment found that the positive personal-identity deletion action had **no explicit approved mission owner**.

By proposing that the positive source requirement live in Contract 22 §30 and be owned by SB-P-1.12, this record resolves a previously explicit mission-accounting ambiguity.

Therefore:

**FOUNDER APPROVAL IS REQUIRED for the proposed source location / mission ownership before Contract 22 is amended.**

Founder may:

- approve the proposed Contract 22 §30 + SB-P-1.12 ownership;
- approve with specific corrections;
- direct another numbered source location / ownership arrangement.

No source edit may occur before that disposition.

## 8. Legal-research boundary

The proposed §30 intentionally avoids hard-coding unresolved statutory periods.

It incorporates only the provisional Phase One boundaries accepted by MC-117:

- identity deletion and record retention are separate;
- no universal retention duration;
- reversible pseudonymization remains personal-data treatment;
- record-class-specific retention;
- scoped legal holds;
- no backup resurrection;
- no active authority from historical attribution.

Professional validation remains deferred until after SB-P-1.20 under Founder Decision Record 06.

## 9. Security boundary

ESC-1 remains separate and open.

Approval of Contract 22 §30 would establish the source requirement; it would **not** prove the current repository deletion paths are safe.

The current Owner direct-business-DELETE and `businesses.owner_id → auth.users ON DELETE CASCADE` risks must remain separately resolved before identity-deletion implementation can be relied upon.

## 10. What this proposal does not authorize

This proposal does not authorize:

- editing Contract 22;
- editing Contract 18;
- FCTM modification;
- Blueprint modification;
- Stage 8 / Blueprint lock;
- EIS;
- schema/table design;
- tombstone design;
- actor-ID design;
- retention engine design;
- SQL/migrations;
- auth-user deletion;
- business deletion;
- production deployment.

## 11. Required next disposition

Mission Control requests a Founder decision on exactly this question:

> **Do you approve adding Contract 22 §30 — Personal Identity Lifecycle and Governed Deletion — substantially as proposed above, with SB-P-1.12 owning the positive personal-identity deletion source requirement and eligibility/integrity foundation, while SB-P-1.19 remains owner of merchant-facing business/account lifecycle and supplies final-business-deletion lifecycle evidence?**

If approved, Mission Control may separately authorize the actual Contract 22 source amendment package.

If corrected, Mission Control must incorporate the correction before source editing.

If rejected, Mission Control must return to source-accounting without inventing an alternate anchor.

## 12. Current gate status

R-2 remains **OPEN / CRITICAL PATH / SOURCE-COVERAGE HOLD**.

The legal-research dependency is provisionally satisfied for Phase One source accounting.

The positive numbered-source requirement remains unresolved until Founder disposition and canonical source amendment.

ESC-1 remains **OPEN T8**.  
`22-§20-2` remains **BLOCKED / IN SCOPE**.  
Historical authority/audit/financial durability remains HELD.  
G-6/T4 remains UNVERIFIED.

**STOP: FOUNDER DISPOSITION REQUIRED BEFORE ANY CONTRACT 22 SOURCE EDIT OR FCTM/BLUEPRINT RECONCILIATION.**
