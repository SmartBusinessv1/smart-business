# SB-P-1.12 — FCTM Opening Record (Stage 1)

**Status:** `OPENED — NOT POPULATED`. This record satisfies only the Source 18 §6 Stage 1 requirement to open the Feature Coverage and Product Truth Traceability Matrix "for those contracts at a recorded intake baseline, with each contract's blob SHA." **It contains no row, no disposition and no obligation inventory.** Populating the matrix — one row per applicable, separately verifiable obligation and per numbered acceptance scenario, each with a disposition and citation — is the Stage 2 Definition Actor's task (Source 18 §3.2, §6 Stage 2), reviewed by Mission Control at Stage 5 and tested for completeness again at Stages 8, 10, 11 and 13, and independently re-derived at Stage 19 (Source 18 §3.2 item 6; IV Protocol §6.1). Nothing here may be read as a completeness claim, a disposition, or a substitute for that independent obligation inventory.

**Intake baseline:** `main@d1bffd0d21180daea0613f62b2757ea127ccdc6b`, 2026-09-22 (unchanged and re-confirmed during the MC-02/MC-03 correction cycle).

**Correction note (MC-03).** Mission Control's Stage 1 review of PR #622 ([comment `5773270378`](https://github.com/SmartBusinessv1/smart-business/pull/622#issuecomment-5773270378)) directed a limited opening of Contract 7 (§1a below) and a softened, non-final reading of the Contract 23/24 boundary (§3). Mission Control's re-review ([comment `5773562658`](https://github.com/SmartBusinessv1/smart-business/pull/622#issuecomment-5773562658)) then clarified that Contract 7 §15's 12 acceptance scenarios must be individually inventoried at Stage 2, not bundled with the untouched sections that stay with `SB-P-1.17` (§1a below). None of these corrections populates a row or reclassifies any approved requirement.

---

## 1. Contracts advanced (Build Plan §9 assignment)

Build Plan §9 "Locked Nine-Mission Build Sequence" assigns SB-P-1.12, verbatim: *"Role authority, tenant isolation, execution security, shared identity primitives, Product & Price Master reconciliation | Contracts 21, 22, 20, 17 + Product & Price Master reconciliation."*

| # | Contract file | Blob SHA (`origin/main`) | Lines | Sections | Numbered acceptance scenarios |
|---|---|---|---|---|---|
| 21 | `docs/phase-1-mission-blueprint/smart-business-features/21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` | 419 | 27 (§1–§27) | 12, at §24 |
| 22 | `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` | `ca4a0fdaec1ac619663f768ccb2ff10f33c590ff` | 555 | 32 (§1–§32) | 14, at §29 |
| 20 | `docs/phase-1-mission-blueprint/smart-business-features/20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` | 385 | 27 (§1–§27) | 12, at §23 |
| 17 | `docs/phase-1-mission-blueprint/smart-business-features/17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` | 356 | 25 (§1–§25) | 10, at §22 |

All four carry status header `MATURE RECONCILED CONTRACT — FULL HYDRATION PASS`. Section and scenario **counts** above are structural facts (headings present in the file at this blob), recorded to bound the Stage 2 population task — they are not an obligation inventory and do not imply every section becomes exactly one row (Source 18 §3.2 item 2: a section expands to obligation level whenever it is in scope, partially delivered, or mixed).

## 1a. Contract 7 — limited opening (MC-03)

**Mission Control's direction (verbatim basis):** "Build Plan §7 protects product/inventory relationships, §10.1 explicitly assigns contextual product-price-inventory access, and Contract 17 §7 delegates stock-view content to Contract 7; this mission touches permissioned inventory/product context." Contract 7 is therefore opened here — **not excluded, and not fully pulled in** — for the touched Product & Price Master / inventory-view / permission-integration surface only.

| Contract | File | Blob SHA (`origin/main`) | Lines | Sections | Opened scope |
|---|---|---|---|---|---|
| 7 | `docs/phase-1-mission-blueprint/smart-business-features/07_Stock_Supplier_and_Reorder_Intelligence.md` | `65ad91b202def9cb4f42b97383bcc58475f59015` | 264 | 18 (§1–§18) | Limited — see pointers below |

**Section pointers for the opened (touched) scope only** — Stage 2 does the obligation-level assignment reconciliation; nothing below is a row or a disposition:

- **§10 Roles and Permissions** — Owner/Manager/Employee/Supplier stock-authority scoping; directly overlaps WS-A (Authority & Identity Kernel) and Contract 21's permission model this mission builds.
- **§12 Shared Foundations** — names "Catalog/Product identity" and "Permission Engine" as foundations Contract 7 reuses; this is the exact seam SB-P-1.12's Product & Price Master reconciliation (WS-C) and Authority & Identity Kernel (WS-A) must keep consistent with.
- **§9 Manager vs Ledger Packaging** and **§7 POS Relationship** / **§8 Ledger Relationship** — potentially touched wherever dashboard permission-surface integration (WS-D, Contract 17 §7) needs stock-view content; Stage 2 confirms whether any obligation here is separately verifiable in SB-P-1.12 scope or remains entirely with Contract 7's own mission.
- **§15 Acceptance Scenarios (clarified, MC re-review)** — not bundled into "not opened" below. **All 12 of Contract 7's §15 acceptance scenarios must be individually inventoried at Stage 2**, per Source 18 §3.2's requirement that every numbered acceptance scenario of an in-scope contract be represented on its own, with particular attention to its **staff permission-boundary** and **cross-business-isolation** scenarios, which overlap this mission's approved authority/isolation work (WS-A, WS-B). Each receives its own evidence-backed disposition at Stage 2 under the existing approved contract and mission assignments — this is ordinary FCTM population, not a scope expansion, and needs no Founder decision merely to apply an already-approved SB-P-1.12 permission obligation to an overlapping Contract 7 scenario.

**Not opened / explicitly preserved:** Contract 7's Core Stock Capabilities (§2), Supplier Management (§3), Reorder Intelligence (§4), Reorder Authority (§5), Imports and Documents (§6), and AI Behaviour (§11) remain entirely with Contract 7's approved owning mission (Mission Control's review cites `SB-P-1.17` as where Contract 7 remains `BUILD NOW`). This is **not** a `BUILD LATER` reclassification of any part of Contract 7 — it is a scope-boundary clarification only, and opening the touched integration boundary above does not pull this remaining, unrelated stock/supplier/reorder feature behaviour into SB-P-1.12. A Founder decision (T3/T7, Source 18 §3.2 item 10) is needed only for a **genuine assignment/classification change or Product Truth conflict** — for example, if Stage 2 finds SB-P-1.12 must take ownership of a §2–§6/§11 obligation that is not merely an overlapping permission/isolation application of an already-approved obligation. Ordinary Stage 2 disposition of an overlapping §15 scenario, or of the opened §7/§8/§9/§10/§12 pointers above, is not by itself such a finding.

## 2. Governing Build Plan sections

| Section | File | Blob SHA | What it governs |
|---|---|---|---|
| §10.1 | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | Mission-specific product outcome, required work areas, Founder-approved experience, and the two Founder-reserved runtime scenarios (Section 4 below) |
| §7 | (same file) | (same blob) | Founder decision reclassifying the existing Catalog implementation as "Product & Price Master — CORE SHARED FOUNDATION," target treatment "PRESERVE + EVOLVE + DEMOTE SURFACE" |

Build Plan §9 preamble (verbatim, line 392–394): *"Each subsection below summarizes a mission's product outcome, required work areas and Founder-approved experience. **The summaries are not exhaustive.** The complete requirement set of a mission is its FCTM, built from the full text of the mature contracts it advances (Source 18 Section 3.2)…"* — §10.1 and §7 govern the mission but do not themselves substitute for the four contracts as the obligation source.

## 3. Delegated-contract boundary — Contract 7 opened (MC-03), Contracts 23/24 kept as a compatibility screen, not a final exclusion

Cross-references found **inside** Contracts 21, 22, 20 and 17 to contracts outside this set:

| Citing contract | Reference | Target | Disposition at this record |
|---|---|---|---|
| 17, §7 | "the shared Stock/Supplier/Reorder contract" | Contract 7 | **Opened, limited scope — see §1a above (MC-03).** This mission's original Stage 1 draft preliminarily excluded Contract 7; Mission Control corrected that: this mission touches permissioned inventory/product context (Build Plan §7, §10.1) and Contract 17 §7 delegates stock-view content to it, so it is opened for the touched surface only, not fully pulled in. |
| 22, §25 | "`24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md`" | Contract 24 | **Compatibility/dependency screen, not a final exclusion (MC-03).** Forward architectural reference; no AI-orchestration implementation is assigned to SB-P-1.12 by Build Plan §9. Not opened as an in-scope contract at this record, but **not irrevocably classified out of scope merely for being a later mission's contract** — Stage 2 brings it into the FCTM if its own reading of the full text finds actual delegated behaviour touched by this mission. |
| 22, §26 | "`23_WhatsApp_Intelligence_and_Channel_Adapter.md`" | Contract 23 | **Compatibility/dependency screen, not a final exclusion (MC-03).** Forward architectural reference; no WhatsApp-adapter implementation is assigned to SB-P-1.12. Same treatment as Contract 24 above. |

No cross-reference inside any of the four primary contracts names "Product & Price Master" as a delegated contract — it is not one of the 25 numbered feature/foundation contracts. It is a Build Plan §7 Founder-decision reclassification of the existing Catalog implementation, layered on Contract 22's shared-identity/shared-foundation ground and on the pre-existing (Contract-7-adjacent) Catalog/Inventory code, per Build Plan §7 and Institutional Memory §6.2. This is recorded as a boundary fact for the Stage 2 owner, not as a disposition.

**Contract 7 is now opened** as an in-scope-for-limited-purpose contract in Section 1a. Contracts 23 and 24 remain **not opened** at this record, but that is a documented screen for Stage 2 to re-test against the full contract text, not a final disposition — consistent with Mission Control's direction not to classify a later mission's contract irrevocably out of scope merely because it is a later mission's contract. If Stage 2's own reading disagrees with any read on this page, that is exactly the kind of finding Source 18 §3.2 item 10 routes to Founder escalation if it would change scope — it is not resolved by this Stage 1 record.

## 4. Founder-reserved runtime scenarios (Build Plan §10.1, verbatim)

These are the experience anchors the eventual FCTM's material/high-risk rows must trace to (Source 18 §4.2, §13 rule 9). They are preserved here verbatim so they cannot drift during Stage 2–4 assembly-by-reference:

> **A. Bounded delegation.** Owner grants a Manager a bounded contextual product-price-inventory view capability using the shared Product & Price Master. Manager sees only delegated operational areas. Owner financial surfaces remain denied. Evidence must include UI result plus data-layer/RLS denial evidence.
>
> **B. Revocation invalidates stale action.** Manager begins a consequential preview such as a Product & Price Master bulk-import preview. Owner revokes the relevant permission before commit. Commit must fail because authority is rechecked at execution time; no protected write may occur.

Confirmed named "the two Founder-reserved runtime scenarios" in `mission-control/SB-P-1.12_Successor_Mission_Control_Handover.md` §4, in near-identical wording, and in Build Plan §13 rule 9 as the Section 10 scenarios locked into the Experience Verification Matrix at Stage 8.

## 5. Proposed row-ID convention for Stage 2 (proposal only — not locked)

Source 18 §3.2 item 1 defines the row ID form `<contract number>-§<section>-<ordinal>` for contract-sourced rows, e.g. `21-§24-3`. That form does not by itself cover an obligation sourced from a Build Plan section rather than a numbered contract. To keep Build Plan §7/§10.1-sourced obligations traceable in the same matrix without inventing a fifth "contract," this record proposes extending the convention as `BP-§7-<ordinal>` and `BP-§10.1-<ordinal>`. The Stage 2 Definition Actor may adopt, refine or replace this convention; Mission Control confirms it no later than Stage 5.

## 6. GPCV register state at this baseline (context, not a disposition)

| Contract | Product classification | Build commitment | Current implementation | Acceptance state |
|---|---|---|---|---|
| 17 | Manager core; role-appropriate Ledger surfaces | BUILD NOW | `IMPLEMENTED BUT INCOMPLETE` | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 20 | Core activation/conversion | BUILD NOW | `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 21 | Core shared foundation | BUILD NOW | `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` | `NOT YET ACCEPTED AS MATURE FEATURE` |
| 22 | Core cross-product architecture | BUILD NOW | `IMPLEMENTED BUT INCOMPLETE` | `NOT YET ACCEPTED AS MATURE FEATURE` |

Source: `00_Global_Product_Completion_View.md` §5 register rows at this baseline. Per the View's own Register Update Protocol (§12), only Mission Control may edit this register, and only from an accepted Contract Reconciliation at Stage 23 acceptance — nothing in this Stage 1 record changes it.

## 7. What Stage 2 must still do

Per Source 18 §3.2 items 2, 6 and the Institutional Learning Intake requirement (§3.1): take an independent obligation inventory from the source text of all four primary contracts (every applicable, separately verifiable obligation, every numbered acceptance scenario — 12 + 14 + 12 + 10 = 48 numbered acceptance scenarios alone, before section-level obligations are counted) plus the limited Contract 7 opening (§1a); confirm the exact obligations within Contract 7's opened sections that are separately verifiable in this mission versus remaining with Contract 7's own mission; **individually inventory and give an evidence-backed disposition to all 12 of Contract 7's §15 acceptance scenarios**, with particular attention to its staff permission-boundary and cross-business-isolation scenarios that overlap this mission's approved authority/isolation work, applying the existing approved contract and mission assignments rather than treating ordinary overlap as a scope change; and re-test the Contract 23/24 compatibility screen (§3) against the full contract text; populate every row with disposition and citation; classify the Delta against current repository/runtime state; and complete the Institutional Learning Intake Record's promotion dispositions and mission-start-checklist answers opened in `02-stage1-intake-pack.md` §7.
