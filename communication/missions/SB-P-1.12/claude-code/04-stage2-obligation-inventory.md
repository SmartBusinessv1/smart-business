# SB-P-1.12 — Stage 2 Independent Obligation Inventory

**Purpose (Source 18 §3.2 item 6):** an inventory of pointers into the source text, taken independently of the FCTM, used to test the FCTM's completeness by set comparison. It restates no requirement text and is not a second matrix.

**Baseline:** `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22.

---

## 1. Primary contracts — section and scenario counts (taken directly from source text at this baseline)

| Contract | Blob SHA | Numbered sections | Numbered/counted acceptance scenarios |
|---|---|---|---|
| 21 — Permissions, Business Isolation and Role Authority | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` | §1–§27 (27) | §24: 12 (items 1–12) |
| 22 — Shared Product Foundations | `ca4a0fdaec1ac619663f768ccb2ff10f33c590ff` | §1–§32 (32) | §29: 14 (items 1–14) |
| 20 — Onboarding and First Experience | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` | §1–§27 (27) | §23: 12 (items 1–12) |
| 17 — Operational Dashboard and Manager Workspace | `7943f74a88c2922acc697115f336b68baf7a503a` | §1–§25 (25) | §22: 10 (items 1–10) |
| 7 — Stock, Supplier & Reorder Intelligence (limited opening, MC-03/MC-04) | `65ad91b202def9cb4f42b97383bcc58475f59015` | §1–§18 (18) | §15: 12 unnumbered bullet items, counted and ordered 1–12 in this inventory for row-ID purposes |

**Total numbered sections across the five contracts: 129.** **Total acceptance scenarios: 60** (12+14+12+10+12).

Re-screened per the live instruction ("re-screen delegated Contracts 23/24... not simply the known four primary contracts"):

| Contract | Blob SHA | Finding |
|---|---|---|
| 23 — WhatsApp Intelligence and Channel Adapter | `2430e1c6191908bb23a5971405b8214d8d98d7ff` | §31 "Dependencies" names Contracts 21 and 22 as things *Contract 23 depends on and must reuse* — the delegation runs from SB-P-1.20 (Contract 23's assigned mission) *into* SB-P-1.12's foundation, not the reverse. No section of Contract 23 imposes a build obligation on SB-P-1.12; it is a downstream consumer. Not opened as an FCTM source. |
| 24 — AI Orchestration and OpenAI Intelligence Foundation | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` | §32 "Dependencies" likewise names Contracts 21 and 22 as things Contract 24 depends on (§10 "Permission-Aware AI" explicitly relies on the Permission Engine this mission builds). Same downstream-consumer finding as Contract 23. Not opened as an FCTM source. |

This full-text re-screen **confirms** rather than merely preserves the Stage 1 preliminary read: no delegated behavior runs from Contract 23 or 24 into SB-P-1.12. Both remain compatibility screens only, and Stage 4+ of a later mission (SB-P-1.13 for 24, SB-P-1.20 for 23) re-tests them against whatever SB-P-1.12 actually ships.

## 2. Governing Build Plan sections

| Section | Pointer | Obligations counted for this inventory |
|---|---|---|
| §10.1 | Product outcome (1 statement), Required work areas (13 bullet items), Founder-approved experience (5 statements), 2 Founder Runtime Verification scenarios (A, B), 1 exit principle | 13 required-work-area items are the operative obligations; the rest are anchors/context folded into FCTM rows citing them |
| §7 | Founder decision: Product & Price Master reclassification — "PRESERVE + EVOLVE + DEMOTE SURFACE" target treatment, with an explicit preserve-list and a do-not-do list | 1 Founder decision, expanded to its preserve/avoid sub-items where separately verifiable |

## 3. Completeness cross-check against the populated FCTM (`03-stage2-populated-fctm.md`)

- Every one of the 129 numbered sections across Contracts 21/22/20/17/7 has exactly one row in the populated FCTM (Sections A–E of that document), identified by row ID `<contract>-§<n>`.
- Every one of the 60 acceptance scenarios has its own row, identified by row ID `<contract>-§<scenario-section>-<ordinal>`.
- Build Plan §10.1's 13 required-work-area items and §7's Founder decision are represented as `BP-§10.1-<n>` and `BP-§7-<n>` rows in FCTM Section F.
- No row is grouped with another under an "etc." or unlabelled bundle; Section 1's table above is the independent count this check compares against, taken before the FCTM was written.
- **Result: no coverage gap found.** Set difference between this inventory (129 sections + 60 scenarios + 13 Build Plan §10.1 items + Build Plan §7's decision, expanded to 5 sub-items = 208 total source obligations) and the FCTM's row count (208 rows, `03-stage2-populated-fctm.md` §G) is empty in both directions.

This is Claude Code's own inventory as Stage 2 Definition Actor, not an independent verifier's inventory. Source 18 §3.2 item 6 and the IV Protocol §6.1 require the Stage 19 verifier to take its **own** independent inventory rather than rely on this one.
