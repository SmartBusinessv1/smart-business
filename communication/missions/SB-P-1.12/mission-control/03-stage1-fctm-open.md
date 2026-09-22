# SB-P-1.12 — FCTM Opening Record (Stage 1)

**Status:** `OPENED — NOT POPULATED`. This record satisfies only the Source 18 §6 Stage 1 requirement to open the Feature Coverage and Product Truth Traceability Matrix "for those contracts at a recorded intake baseline, with each contract's blob SHA." **It contains no row, no disposition and no obligation inventory.** Populating the matrix — one row per applicable, separately verifiable obligation and per numbered acceptance scenario, each with a disposition and citation — is the Stage 2 Definition Actor's task (Source 18 §3.2, §6 Stage 2), reviewed by Mission Control at Stage 5 and tested for completeness again at Stages 8, 10, 11 and 13, and independently re-derived at Stage 19 (Source 18 §3.2 item 6; IV Protocol §6.1). Nothing here may be read as a completeness claim, a disposition, or a substitute for that independent obligation inventory.

**Intake baseline:** `main@d1bffd0d21180daea0613f62b2757ea127ccdc6b`, 2026-09-22.

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

## 2. Governing Build Plan sections

| Section | File | Blob SHA | What it governs |
|---|---|---|---|
| §10.1 | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | Mission-specific product outcome, required work areas, Founder-approved experience, and the two Founder-reserved runtime scenarios (Section 4 below) |
| §7 | (same file) | (same blob) | Founder decision reclassifying the existing Catalog implementation as "Product & Price Master — CORE SHARED FOUNDATION," target treatment "PRESERVE + EVOLVE + DEMOTE SURFACE" |

Build Plan §9 preamble (verbatim, line 392–394): *"Each subsection below summarizes a mission's product outcome, required work areas and Founder-approved experience. **The summaries are not exhaustive.** The complete requirement set of a mission is its FCTM, built from the full text of the mature contracts it advances (Source 18 Section 3.2)…"* — §10.1 and §7 govern the mission but do not themselves substitute for the four contracts as the obligation source.

## 3. Delegated-contract boundary — flagged for Stage 2 confirmation, not decided here

Cross-references found **inside** Contracts 21, 22, 20 and 17 to contracts outside this set:

| Citing contract | Reference | Target | Preliminary read (Stage 2 confirms) |
|---|---|---|---|
| 17, §7 | "the shared Stock/Supplier/Reorder contract" | Contract 7 | Named only for dashboard *inventory/supplier/reorder view* content. SB-P-1.12 builds the authority/identity/permission substrate and dashboard permission enforcement (17 §13–§14), not Contract 7's own feature behaviour or its dashboard rendering — Contract 7 is not itself in Build Plan §9's assignment for SB-P-1.12. **Preliminary recommendation: keep out of this mission's FCTM scope**; Stage 2 confirms against the full contract text. |
| 22, §25 | "`24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md`" | Contract 24 | Forward reference for later-mission (SB-P-1.13+) AI orchestration foundations, not assigned to SB-P-1.12 by Build Plan §9. **Preliminary recommendation: out of scope.** |
| 22, §26 | "`23_WhatsApp_Intelligence_and_Channel_Adapter.md`" | Contract 23 | Forward reference for later-mission WhatsApp channel-adapter work, not assigned to SB-P-1.12. **Preliminary recommendation: out of scope.** |

No cross-reference inside any of the four contracts names "Product & Price Master" as a delegated contract — it is not one of the 25 numbered feature/foundation contracts. It is a Build Plan §7 Founder-decision reclassification of the existing Catalog implementation, layered on Contract 22's shared-identity/shared-foundation ground and on the pre-existing (Contract-7-adjacent) Catalog/Inventory code, per Build Plan §7 and Institutional Memory §6.2. This is recorded as a boundary fact for the Stage 2 owner, not as a disposition.

These three rows are **not** opened as in-scope contracts in Section 1. If the Stage 2 Definition Actor's own reading of the full contract text disagrees with the preliminary read above, that is exactly the kind of finding Source 18 §3.2 item 10 routes to Founder escalation if it would change scope — it is not resolved by this Stage 1 record.

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

Per Source 18 §3.2 items 2, 6 and the Institutional Learning Intake requirement (§3.1): take an independent obligation inventory from the source text of all four contracts (every applicable, separately verifiable obligation, every numbered acceptance scenario — 12 + 14 + 12 + 10 = 48 numbered acceptance scenarios alone, before section-level obligations are counted); resolve the Section 3 boundary question for Contracts 7, 23 and 24; populate every row with disposition and citation; classify the Delta against current repository/runtime state; and complete the Institutional Learning Intake Record's promotion dispositions and mission-start-checklist answers opened in `02-stage1-intake-pack.md` §7.
