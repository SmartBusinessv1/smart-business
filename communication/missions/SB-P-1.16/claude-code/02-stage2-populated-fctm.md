# SB-P-1.16 — Stage 2 Populated FCTM

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation (Section 3.2, Section 6)  
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`  
**Prepared by:** Claude Code, Definition Actor (MC-107 §13.1), under MC-106 (`communication/missions/SB-P-1.16/mission-control/05-stage2-truth-pack-and-fctm-instruction.md`, blob `49996ffefb2049036ca8b522069be5389f07ace8`) as activated by MC-109  
**Baseline:** `main@e4e382c73824f02e83ad4ee2497e5e046fd74086` (PR #959 merge), 2026-10-14  
**Opened by:** `communication/missions/SB-P-1.16/mission-control/03-stage1-fctm-opened.md` (blob `466780f0db6a5097204596063a7011452b3c7dc2`); that record is not modified  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This matrix is an accounting of approved truth. It adds no product decision and reopens no approved decision. Requirement text lives only in the source contracts; rows hold pointers, short labels, dispositions and citations. The independent obligation inventory is `03-stage2-obligation-inventory.md`; the set comparison between the two is in `06-stage2-completion-report.md` Section 3.

**No row is `ALREADY DEMONSTRATED`.** Upstream SB-P-1.12 to SB-P-1.15 outputs are locked specifications with Implementation Authorization WITHHELD; no upstream FCTM status is treated as evidence of implemented or verified runtime behaviour.

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force.`

## 0. How to read this matrix

### 0.1 Columns

| Column | Meaning |
|---|---|
| Row ID | `<contract>-§<section>-<ordinal>`. The ordinal counts the section's separately verifiable units (bullets, numbered items, prose paragraphs) in source order, skipping lead-ins. A whole-section row has no ordinal. Suffix `a`/`b` splits one unit between two owning missions; both cite the same unit. Build Plan rows use `BP-§<section>-<suffix>`; GPCV rows `GPCV-§<section>-<item>`. Upstream identifiers are kept exactly (Section 0.8). |
| Source @ blob | Source code and the first eight characters of its blob at the baseline (full SHAs in Section 0.2). |
| Exact source pointer | Section, subsection where present, and parser locator (`b<k>` k-th bullet, `n<k>` k-th numbered item, `p<k>` k-th prose paragraph, counted within the section), followed by a short label. The label is a pointer, not requirement text. |
| Kind | Row kind (Section 0.5). |
| Build commitment | Global Product Completion View value, preserved verbatim. |
| Commercial | Commercial classification code (Section 0.4). |
| Owning mission | The mission that owns the obligation under an approved source. |
| Disposition | Source 18 Section 3.2 item 3 vocabulary only. |
| Dependency / hold | Dependency or blocking code (Section 0.6). A dependency never moves a row (Source 18 §3.2 item 5). |
| Evidence / citation | Implementation-evidence code and disposition citation (Section 0.7). |
| Founder decision | Founder Decision ID where a row rests on one, namespaced by mission: `14:FPDR-n` is SB-P-1.14's record, `12:FPDR-1` SB-P-1.12's, `15:FDB-3` SB-P-1.15's. |

The scaffold's `Downstream trace` column is not populated at Stage 2. Under Source 18 §3.2 item 7 each later deliverable (Blueprint from Stage 4) carries its own mapping keyed by these row IDs.

### 0.2 Sources and blobs at the baseline

Every blob verified with `git rev-parse main@e4e382c7:<path>`. Every contract blob equals the Stage 1 return's identities (Sections A.3, A.5 and L.2); no source drifted.

| Code | Path (under `docs/phase-1-mission-blueprint/smart-business-features/` unless stated) | Blob |
|---|---|---|
| `C14` | `14_Smart_Credit_Awareness.md` | `16914a834c3dd3abcc5a41029d78cb96edb1a72f` |
| `C15` | `15_Payment_Verification_and_Bank_Reconciliation.md` | `632f34026ee1cfe580f031e888777d50619eea2f` |
| `C3` | `03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| `BP` | `00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| `GPCV` | `00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| `C1` | `01_Smart_Order_and_Delivery_Assistant.md` | `b392c8cb851683ea7bba1d6351c565a4c0c555ed` |
| `C2` | `02_Ask_CFO.md` | `53635557fb2907e0e9011613511c9f34b8548edf` |
| `C4` | `04_Daily_Intelligence_Rhythm.md` | `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd` |
| `C5` | `05_Universal_Document_and_Receipt_Intelligence.md` | `80ac648e6764f0288f04a4591902ba029d01ab58` |
| `C7` | `07_Stock_Supplier_and_Reorder_Intelligence.md` | `65ad91b202def9cb4f42b97383bcc58475f59015` |
| `C9` | `09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| `C10` | `10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| `C11` | `11_Smart_Reminder_and_Delegated_Automation.md` | `e802745a93c3bacaebba5099aacfadbe52212bc8` |
| `C12` | `12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| `C13` | `13_POS_Counter_Intelligence_and_Closing_Cash.md` | `4426e8b1f9e856047759bdb03e2f5b83820f8cc0` |
| `C16` | `16_Compliance_Shield.md` | `420269d8407485fc659072242fff03cd27f023e4` |
| `C17` | `17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| `C18` | `18_Subscription_Payment_and_Account_Lifecycle.md` | `6b96b10aee35036b18afb3bba7a4950e7b36b7fb` |
| `C19` | `19_Super_Admin_and_Platform_Stewardship.md` | `94aa6f2422a3ef5c1b41fca4e17b07a098261cb5` |
| `C20` | `20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` |
| `C21` | `21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| `C22` | `22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| `C23` | `23_WhatsApp_Intelligence_and_Channel_Adapter.md` | `2430e1c6191908bb23a5971405b8214d8d98d7ff` |
| `C24` | `24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| `C25` | `25_Document_Media_Storage_and_Retention_Foundation.md` | `406ce0892451d2a71e28687fd53ad5f818085242` |
| `FCTM-12` | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| `FCTM-13` | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` | `97ddc752dcbbdb6586110a782ef1e24405b6dd22` |
| `FCTM-14` | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` | `01e9856aca0afdb1267230a1932fe34054449a4b` |
| `FCTM-15` | `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` | `65eeaf8d31b81595b971c22895615a096555f84f` |
| `EIS-12` | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f7509477d0e8b997af538440d93bf2ca4d72` |
| `FPDR-14a` | `communication/missions/SB-P-1.14/founder/02-stage3-founder-product-decision-record.md` | `9717b29dbe08b6d115f512a90450c528d5212773` |
| `FPDR-14b` | `communication/missions/SB-P-1.14/founder/03-post-stage6-founder-product-decision-record.md` | `3f36c06da8a7327766ada44248ce2953cd8e3a2c` |
| `BP-15` | `docs/phase-1-mission-blueprint/completed/SB-P-1.15.md` | `0ab2ad6f12cedc54836d766bac7a2e9c0e1e03e5` |
| `S1-RET` | `communication/missions/SB-P-1.16/claude-code/01-stage1-source-inventory-return.md` | `2304876ce529d8c76a1deaa9d716a14f1adc9927` |

### 0.3 Stage 1 scaffold reconciliation

| Scaffold identity (`03-stage1-fctm-opened.md`) | Recorded blob | Blob at this baseline | Result |
|---|---|---|---|
| Contract 03 Ledger & Business Memory | `d8c26c073b669b561def887e36d16b19ff759205` | `d8c26c073b669b561def887e36d16b19ff759205` | MATCH |
| Contract 14 Smart Credit Awareness | `16914a834c3dd3abcc5a41029d78cb96edb1a72f` | `16914a834c3dd3abcc5a41029d78cb96edb1a72f` | MATCH |
| Contract 15 Payment Verification & Bank Reconciliation | `632f34026ee1cfe580f031e888777d50619eea2f` | `632f34026ee1cfe580f031e888777d50619eea2f` | MATCH |
| Founder-approved Build Plan §10.5 | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | MATCH |
| Global Product Completion View | `ee76d920146008056781fced41be938675c4be0b` | `ee76d920146008056781fced41be938675c4be0b` | MATCH |

The scaffold required the actor to expand the header with every delegation contract before any claim of exhaustiveness. Section 0.2 is that expansion. The scaffold's row schema is preserved; its `Disposition & citation` column is split into `Disposition` and `Evidence / citation`, and its `Hold/dependency` column is `Dependency / hold`.

### 0.4 Commercial classification codes

| Code | Source |
|---|---|
| `CORE-LM` | Core, Ledger + Manager (GPCV rows 2, 3, 4, 12, 14, 15; C14 and C15 headers) |
| `CORE-FDN` | Core shared foundation (GPCV rows 5, 9, 11, 21, 25) |
| `CORE-ARCH` | Core cross-product architecture (GPCV row 22) |
| `CORE-INT` | Core shared intelligence foundation (GPCV row 24) |
| `CORE-CH` | Core shared channel or channel adapter (GPCV rows 10, 23) |
| `ADDON-LM` | Add-on for Ledger + Manager (GPCV row 1) |
| `MGR/ADDON` | Manager core; Smart Stock add-on path for Ledger (GPCV row 7) |
| `MGR-CORE` | Manager core / standard integration layer (GPCV row 13) |
| `MGR+LDG` | Manager core; role-appropriate Ledger surfaces (GPCV row 17) |
| `CORE-PLAT` | Core platform commercial capability (GPCV row 18) |
| `INTERNAL` | Internal platform (GPCV row 19) |
| `ACT` | Core activation/conversion (GPCV row 20) |
| `per contract` | Build Plan rows inherit the classification of the contract family they govern |
| `REJECT` | Build Plan §16 or GPCV §9 rejection |

### 0.5 Row kinds

| Kind | Meaning |
|---|---|
| `OBL` | obligation |
| `NEG` | must-not check |
| `RULE` | architectural or reuse rule |
| `PRIN` | principle |
| `EXP` | approved experience or outcome |
| `SCN` | acceptance item or worked example |
| `FRV` | Founder Runtime Verification scenario clause (Founder-reserved) |
| `WORK` | Build Plan required work area |
| `GATE` | contract completion gate |
| `NARR` | problem-statement narrative |
| `HIST` | historical or provenance-only item |
| `PROV` | provenance section |
| `SEC` | whole section owned elsewhere (one row, one disposition) |
| `CONS` | downstream consumer of this mission's data (MC-101 L.3) |
| `ADJ` | adjacent domain, not owned by this mission (MC-101 L.3) |
| `UFD` | Build Plan §15 unresolved Founder decision |
| `REJ` | rejection checked as must-not-appear |

### 0.6 Dependency and hold codes

| Code | Dependency | State at this baseline |
|---|---|---|
| `—` | None beyond this mission | — |
| `D12` | SB-P-1.12 authority kernel: identity incl. participant identities (EIS-ID-03), roles, capability, isolation, confirmation binding, execution-time revalidation, audit | Specification locked; Implementation Authorization WITHHELD; not implemented |
| `D13` | SB-P-1.13 Conversation/AI kernel, Human Language Layer, Basic Voice, typed tools and confirmation | Specification locked; WITHHELD; not implemented |
| `D14` | SB-P-1.14 Business Memory: four-state Ledger incl. credit and repayment facts, repayment target (14:FPDR-4), correction/audit model, UDI, governed storage | Specification locked; WITHHELD; not implemented (`transaction_type` is still `sale`/`purchase`, Δ-01) |
| `D15` | SB-P-1.15 Reminder Engine, Scheduler, Notification Foundation, Ask CFO, Daily Intelligence | Specification locked; WITHHELD; not implemented |
| `DTX` | The one governed transactions-family write path (SB-P-1.12 WS-A3, SB-P-1.13 EIS13-CMD-02, SB-P-1.14 WS-A; PQ-2). No credit, repayment, link or correction write may open a second path | Coordinated cut-over undecided; migration NOT AUTHORIZED |
| `DAI` | AI provider behind the SB-P-1.13 gateway | UNVERIFIED — ACCESS REQUIRED; activation NOT AUTHORIZED |
| `DSCH` | Scheduler / background-job runtime and business timezone | UNVERIFIED; activation NOT AUTHORIZED |
| `DNTF` | Approved out-of-app delivery channel | None before SB-P-1.20; not inferred |
| `DPAY` | **New code.** Authenticated payment-evidence source and adapter (bank/payment API or webhook, authenticated bank email, gateway record, settlement file) under 22-§17-3 | No source selected (U-06); no credentials; external activation NOT AUTHORIZED (BP §5.4) |
| `D16` | This mission's own credit and payment data, as consumed by a row owned upstream | Not started (this mission) |
| `D17`, `D18`, `D19`, `D20` | SB-P-1.17 stock/supplier/POS/dashboard; SB-P-1.18 orders/delivery/COD; SB-P-1.19 onboarding/lifecycle/support; SB-P-1.20 WhatsApp | Not started |
| `DUF6` | Build Plan §15 item 6 (retention after cancellation/non-payment), U-5 | Open; critical-path screen in Truth Pack Part D (U-08) |
| `ESC-U01` | Blocked by the `ESCALATED` row `BP-§10.3-S2` (customer identity ownership, U-01) | Awaiting Founder; the dependent row stays `IN SCOPE` but cannot be locked, authorized or accepted until decided |

Several codes in one cell are separated by `;`.

### 0.7 Evidence and citation codes

| Code | Meaning |
|---|---|
| `NI-CRD` | Not implemented: no customer-credit balance, ageing, threshold, decision or follow-up object in repository text (Truth Pack Δ-01) |
| `NI-PAY` | Not implemented: no payment-evidence, verification-state, matching or reconciliation object in repository text (Δ-01) |
| `NI-LDG4` | Not implemented: four-state Ledger widening absent (`transaction_type` check is `sale`, `purchase`) (Δ-01) |
| `A-BP105` | Build Plan §9 row 5 and §10.5 assign the requirement to SB-P-1.16 |
| `A-BP105-FRV` | Build Plan §10.5 Founder Runtime Verification scenarios |
| `A-BP106` to `A-BP109` | Build Plan §9 rows and §§10.6–10.9 for SB-P-1.17 to SB-P-1.20 |
| `I-12` to `I-15` | Assignment inherited from the canonical SB-P-1.12 to SB-P-1.15 FCTM (blobs in Section 0.2) |
| `L-DEL12` to `L-DEL19` | Owned by that mission (SB-P-1.12 … SB-P-1.19); consumed as specification |
| `L-X20` | Native slice here; WhatsApp-channel slice belongs to SB-P-1.20 (BP §9 row 9) |
| `L-NEG` | Contract's own non-goal or must-not, checked as must-not-appear |
| `L-NARR`, `L-HIST`, `L-PROV` | Narrative, historical/provenance-only or provenance content |
| `MC101-L2`, `MC101-L3` | Stage 1 return Section L.2 (S5 ledger) and L.3 (supplemental reclassification), blob `S1-RET` |
| `U-nn` | Unresolved question in Truth Pack Part D (`04-stage2-mission-truth-pack.md`) |
| `Δ-nn` | Delta item in Truth Pack Part C |
| `DC-nn` | Derived constraint in Truth Pack Part B (not Product Truth) |

### 0.8 Disposition use in this mission

- `IN SCOPE` — `BUILD NOW` in SB-P-1.16 under Build Plan §9 row 5 / §10.5 or an upstream FCTM assignment. A row whose obligation cannot be built or demonstrated until a dependency exists stays `IN SCOPE` and names the dependency. **No row was moved because of a dependency.**
- `DELEGATED` — owned by another contract or another mission's canonical FCTM; this mission consumes the locked specification or supplies data to it. Used for SB-P-1.12 to SB-P-1.15 foundations, SB-P-1.14 Contract 03 rows, and downstream owners (SB-P-1.18 C01, SB-P-1.19 C19).
- `ASSIGNED TO LATER MISSION` — always cites an approved source (Build Plan §§9–12 or an upstream FCTM). Stays `BUILD NOW`. Used for WhatsApp slices (SB-P-1.20) and downstream consumer sections (C17, C20, C07, C23).
- `NOT APPLICABLE` — narrative, history, provenance, adjacent domains (C13 §10, C18 §§15, 18 under MC-101 L.3) and Build Plan §15 items outside this mission, each with a reason.
- `OUT OF BUILD SCOPE` — Build Plan §16 and GPCV §9 rejections, checked as must-not-appear.
- `UNRESOLVED FOUNDER DECISION` — Build Plan §15 items 6 and 9 and the mirrored `25-§17-1`. Critical-path screen in Truth Pack Part D.
- `ESCALATED` — exactly one row, `BP-§10.3-S2` (U-01, candidate T2). Dependent rows carry `ESC-U01`.
- `ALREADY DEMONSTRATED` — **no row.**

### 0.9 Identifier preservation and inherited-row reconciliation

Upstream identifiers are kept exactly. Where an upstream FCTM held a C14 or C15 section as one `DELEGATED` row, this mission owns the whole contract, so Source 18 §3.2 item 2 requires obligation-level rows: `14-§4` becomes `14-§4-*`, and so on. The bundled SB-P-1.14 row `14-§22` (acceptance 1 and 2) becomes `14-§22-1` and `14-§22-2`. The predecessor's row is not altered. The 21 unique inherited identifiers recorded in Stage 1 (Section D.5) map as follows:

| # | Inherited from | Identifier | Upstream disposition | Rows in this FCTM |
|---|---|---|---|---|
| 1 | SB-P-1.13 | `24-§21-4` | ASSIGNED TO LATER MISSION | `24-§21-4` |
| 2 | SB-P-1.13 | `24-§21-5` | ASSIGNED TO LATER MISSION | `24-§21-5` |
| 3 | SB-P-1.13 | `9-§12-11` | ASSIGNED TO LATER MISSION | `9-§12-11` |
| 4 | SB-P-1.13 | `10-§17-5` | ASSIGNED TO LATER MISSION | `10-§17-5` |
| 5 | SB-P-1.14 | `3-§9-12` | ASSIGNED TO LATER MISSION (14:FPDR-1 T7) | `3-§9-12` |
| 6 | SB-P-1.14 | `3-§15-8` | ASSIGNED TO LATER MISSION | `3-§15-8` |
| 7 | SB-P-1.14 | `3-§15-9` | ASSIGNED TO LATER MISSION | `3-§15-9` |
| 8 | SB-P-1.14 | `22-§17-3` | ASSIGNED TO LATER MISSION | `22-§17-3` |
| 9 | SB-P-1.14 | `BP-§9-2` | ASSIGNED TO LATER MISSION | `BP-§9-2` |
| 10 | SB-P-1.14 | `BP-§10.3-C2` | ASSIGNED TO LATER MISSION | `BP-§10.3-C2` |
| 11 | SB-P-1.14 | `3-§11-6` | ASSIGNED TO LATER MISSION (SB-P-1.16 / SB-P-1.17 / SB-P-1.18) | `3-§11-6` |
| 12 | SB-P-1.14 | `14-§4` | DELEGATED (section level) | `14-§4-1` … `14-§4-6` (6 rows) |
| 13 | SB-P-1.14 | `14-§5` | DELEGATED (section level) | `14-§5-1` … `14-§5-13` (13 rows) |
| 14 | SB-P-1.14 | `14-§6` | DELEGATED (section level) | `14-§6-1` … `14-§6-6` (6 rows) |
| 15 | SB-P-1.14 | `14-§7` | DELEGATED (section level) | `14-§7-1` … `14-§7-7` (7 rows) |
| 16 | SB-P-1.14 | `14-§17` | DELEGATED (section level) | `14-§17-1` … `14-§17-5` (5 rows) |
| 17 | SB-P-1.14 | `14-§21` | DELEGATED (section level) | `14-§21-1` … `14-§21-6` (6 rows) |
| 18 | SB-P-1.14 | `14-§22` | DELEGATED (section level) | `14-§22-1`, `14-§22-2` |
| 19 | SB-P-1.14 | `15-§5` | DELEGATED (section level) | `15-§5-1` … `15-§5-8` (8 rows) |
| 20 | SB-P-1.14 | `15-§6` | DELEGATED (section level) | `15-§6-1` … `15-§6-12` (12 rows) |
| 21 | SB-P-1.14 | `15-§22` | DELEGATED (section level) | `15-§22-1` … `15-§22-6` (6 rows) |
| — | SB-P-1.15 | `22-§17-3` | ASSIGNED TO LATER MISSION (same row; counted once) | `22-§17-3` |

Unique inherited identifiers: **21**. Every one maps to at least one row; none is missing. The 21 is an intake reference, not the FCTM total.

### 0.10 Expansion method

C14 and C15 are expanded completely: every bullet, numbered item and non-lead-in prose paragraph is its own row, generated by a deterministic parser from the source blob. Lead-ins (a prose paragraph ending in `:`) are listed in the inventory and carry no obligation of their own. A section is one row only when the whole section has one non-`IN SCOPE` disposition (C14 §24, C15 §27). For C03, sections where SB-P-1.16 holds any part (§§9, 11, 15) and the acceptance section (§19) are expanded using SB-P-1.14's canonical row identifiers; §23 is SB-P-1.16's completion gate; every other section is one row owned elsewhere. Delegated contracts are rowed at the touched unit, or at section level where the whole section has one disposition. A contract-wide keyword screen of every delegated contract checked that no touched credit/payment unit lacks a row (completion report Section 3.5).

## A. Contract 14 — Smart Credit Awareness (151 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 14-§1-1 | C14@16914a83 | §1 p1: Smart Credit Awareness helps a merchant remember who owes money, how much is outstanding,… | EXP | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | NI-CRD; A-BP105 | — |
| 14-§1-2 | C14@16914a83 | §1 p2: It is an awareness and memory capability, not an autonomous credit-control authority | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105; S11 Smart Credit Awareness | — |
| 14-§2-1 | C14@16914a83 | §2 p1: Neighborhood merchants often extend informal credit based on trust and memory | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-2 | C14@16914a83 | §2 b1: multiple small balances accumulate | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-3 | C14@16914a83 | §2 b2: repayments are not linked correctly | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-4 | C14@16914a83 | §2 b3: Owner/staff forget prior credit | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-5 | C14@16914a83 | §2 b4: one customer crosses a comfort threshold | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-6 | C14@16914a83 | §2 b5: collection follow-up becomes awkward | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-7 | C14@16914a83 | §2 b6: the system treats a trusted relationship like a bank underwriting model | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 4, 7, 9, 10, 21) | — |
| 14-§2-8 | C14@16914a83 | §2 p3: Smart Business should create clarity without humiliating customers or taking the Owner's… | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 14-§3-1 | C14@16914a83 | §3 b1: AI Assistant, Not AI Judge | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 14-§3-2 | C14@16914a83 | §3 b2: Credit relationship belongs to merchant and customer | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 14-§3-3 | C14@16914a83 | §3 b3: Warn, do not automatically block by default | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 14-§3-4 | C14@16914a83 | §3 b4: Preserve dignity in collection language | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 14-§3-5 | C14@16914a83 | §3 b5: Human override/decision is explicit and auditable | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 14-§3-6 | C14@16914a83 | §3 b6: Repayment must reduce the correct credit relationship | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | A-BP105 | 14:FPDR-4 |
| 14-§3-7 | C14@16914a83 | §3 b7: Do not fabricate customer risk scores | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105; U-03 | — |
| 14-§4-1 | C14@16914a83 | §4 p1: Credit is linked to the correct merchant-scoped customer identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§4) | 14:FPDR-1 |
| 14-§4-2 | C14@16914a83 | §4 b1: name spelling variations | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§4) | 14:FPDR-1 |
| 14-§4-3 | C14@16914a83 | §4 b2: phone-number variants | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§4) | 14:FPDR-1 |
| 14-§4-4 | C14@16914a83 | §4 b3: duplicate customer creation | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§4) | 14:FPDR-1 |
| 14-§4-5 | C14@16914a83 | §4 b4: channel-specific identities | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§4) | 14:FPDR-1 |
| 14-§4-6 | C14@16914a83 | §4 p3: Where identity is ambiguous, ask rather than silently assigning credit to the wrong custo… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§4) | 14:FPDR-3 |
| 14-§5-1 | C14@16914a83 | §5 b1: customer identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-2 | C14@16914a83 | §5 b2: credit transaction(s) | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-3 | C14@16914a83 | §5 b3: amount | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-4 | C14@16914a83 | §5 b4: date/time | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-5 | C14@16914a83 | §5 b5: description/items where relevant | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-6 | C14@16914a83 | §5 b6: due/expected follow-up information if used | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5); U-04 | 14:FPDR-1 |
| 14-§5-7 | C14@16914a83 | §5 b7: outstanding balance | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5); I-14 (3-§9-12) | 14:FPDR-1 |
| 14-§5-8 | C14@16914a83 | §5 b8: repayment events | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-9 | C14@16914a83 | §5 b9: owner-defined threshold/limit where configured | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-10 | C14@16914a83 | §5 b10: owner decisions/overrides | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-11 | C14@16914a83 | §5 b11: reminder/collection history | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; D15 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-12 | C14@16914a83 | §5 b12: linked payment evidence where available | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-CRD; NI-PAY; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§5-13 | C14@16914a83 | §5 b13: actor/audit history | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105; I-14 (14-§5) | 14:FPDR-1 |
| 14-§6-1 | C14@16914a83 | §6 b1: text | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13; D14; DTX | NI-CRD; A-BP105; I-14 (14-§6) | 14:FPDR-1 |
| 14-§6-2 | C14@16914a83 | §6 b2: voice | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13; D14; DTX | NI-CRD; A-BP105; I-14 (14-§6); I-13 (12-§4-1) | 14:FPDR-1 |
| 14-§6-3 | C14@16914a83 | §6 b3: manual workspace entry | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; DTX | NI-CRD; A-BP105; I-14 (14-§6) | 14:FPDR-1 |
| 14-§6-4 | C14@16914a83 | §6 b4: receipt/document workflow where appropriate | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-CRD; A-BP105; I-14 (14-§6) (UDI path owned by SB-P-1.14) | 14:FPDR-1 |
| 14-§6-5 | C14@16914a83 | §6 b5: order/delivery workflow where credit is permitted | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX; D18 | NI-CRD; A-BP105; I-14 (14-§6); order workflow SB-P-1.18 (A-BP107) | 14:FPDR-1 |
| 14-§6-6 | C14@16914a83 | §6 p2: A credit entry must be confirmed accurately when consequential facts are ambiguous | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13; D14 | NI-CRD; A-BP105; I-14 (14-§6) | 14:FPDR-3 |
| 14-§7-1 | C14@16914a83 | §7 p1: Repayment is a distinct current Ledger state | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-LDG4; A-BP105; I-14 (14-§7); four-state widening owned by SB-P-1.14 (I-14 (BP-§10.3-C1)) | 14:FPDR-1 |
| 14-§7-2 | C14@16914a83 | §7 b1: identify the correct customer/credit relationship | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-CRD; A-BP105; I-14 (14-§7) | 14:FPDR-4 |
| 14-§7-3 | C14@16914a83 | §7 b2: preserve repayment amount/date/source | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-CRD; A-BP105; I-14 (14-§7) | 14:FPDR-4 |
| 14-§7-4 | C14@16914a83 | §7 b3: update outstanding balance consistently | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-CRD; A-BP105; I-14 (14-§7) | 14:FPDR-4 |
| 14-§7-5 | C14@16914a83 | §7 b4: avoid creating duplicate income/credit facts | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; I-14 (14-§7) | 14:FPDR-4 |
| 14-§7-6 | C14@16914a83 | §7 b5: preserve correction/audit linkage | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-CRD; A-BP105; I-14 (14-§7) | 14:FPDR-4 |
| 14-§7-7 | C14@16914a83 | §7 p3: If multiple plausible balances/credits could receive the payment, require human confirmat… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13; D14; DTX | NI-CRD; A-BP105; I-14 (14-§7) | 14:FPDR-3 |
| 14-§8-1 | C14@16914a83 | §8 p1: An Owner may configure a credit comfort threshold or limit | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105 | — |
| 14-§8-2 | C14@16914a83 | §8 p2: The threshold is an awareness input | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | NI-CRD; A-BP105 | — |
| 14-§8-3 | C14@16914a83 | §8 b1: show current outstanding balance/context | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105 | — |
| 14-§8-4 | C14@16914a83 | §8 b2: make the Owner aware at a useful time | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | NI-CRD; A-BP105 | — |
| 14-§8-5 | C14@16914a83 | §8 b3: optionally suggest follow-up | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | NI-CRD; A-BP105 | — |
| 14-§8-6 | C14@16914a83 | §8 b4: allow Owner decision | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105 | — |
| 14-§8-7 | C14@16914a83 | §8 p4: The product must not convert an old fixed value such as ₹5,000 into universal Product Tru… | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§9-1 | C14@16914a83 | §9 p1: Current Product Truth rejects hard autonomous credit blocking as the default behavior | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105; S11 Smart Credit Awareness; BP §16; GPCV §9 | — |
| 14-§9-2 | C14@16914a83 | §9 p3 (introduced by lead-in p2 'Example:'): worked example of a merchant-facing threshold warning — ILLUSTRATIVE, NON-FIXED | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | A-BP105; A-BP105-FRV (Scenario A). ILLUSTRATIVE, NON-FIXED (MC-112): the customer name, rupee amounts and wording are not requirements and need not be reproduced. The example illustrates binding requirements carried by their own rows: factual outstanding balance and context against an Owner-configured threshold (14-§8-1 to 14-§8-6); Owner/merchant decision authority and the available choices (14-§9-3 to 14-§9-8), with the decision recorded (14-§9-9); no automatic hard credit block (14-§9-1, 14-§21-1); no invented customer-risk judgement (14-§3-7, 14-§19-5; U-03); no universal ₹5,000 limit (14-§8-7, 14-§21-5) | — |
| 14-§9-3 | C14@16914a83 | §9 b1: approve the sale/credit | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DTX | NI-CRD; A-BP105; A-BP105-FRV; U-03 | — |
| 14-§9-4 | C14@16914a83 | §9 b2: decline | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DTX | NI-CRD; A-BP105; A-BP105-FRV; U-03 | — |
| 14-§9-5 | C14@16914a83 | §9 b3: adjust amount | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DTX | NI-CRD; A-BP105; A-BP105-FRV; U-03 | — |
| 14-§9-6 | C14@16914a83 | §9 b4: grant grace | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DTX | NI-CRD; A-BP105; A-BP105-FRV; U-03 | — |
| 14-§9-7 | C14@16914a83 | §9 b5: change the threshold | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DTX | NI-CRD; A-BP105; A-BP105-FRV; U-03 | — |
| 14-§9-8 | C14@16914a83 | §9 b6: review customer history | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105; A-BP105-FRV | — |
| 14-§9-9 | C14@16914a83 | §9 p5: The system records the material decision where relevant | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105; A-BP105-FRV | — |
| 14-§10-1 | C14@16914a83 | §10 p1: Smart Business may help the Owner remember/follow up on outstanding credit through the sh… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DSCH | NI-CRD; A-BP105; consumes 11-§8-4, 22-§11-4 (SB-P-1.15) | — |
| 14-§10-2 | C14@16914a83 | §10 p2: Collection communication should be respectful and merchant-controlled | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DNTF | NI-CRD; A-BP105; U-05 | — |
| 14-§10-3 | C14@16914a83 | §10 b1: shame the customer | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DNTF | L-NEG; A-BP105 | — |
| 14-§10-4 | C14@16914a83 | §10 b2: threaten them | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DNTF | L-NEG; A-BP105 | — |
| 14-§10-5 | C14@16914a83 | §10 b3: send confrontational messages autonomously | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DNTF | L-NEG; A-BP105 | — |
| 14-§10-6 | C14@16914a83 | §10 b4: disclose their balance to unrelated people | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DNTF | L-NEG; A-BP105 | — |
| 14-§11-1 | C14@16914a83 | §11 b1: 'Who owes me the most?' | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-CRD; A-BP105; 15:FDB-3 (authoritative balances SB-P-1.16); consumer rows 2-§5-3, 2-§11-3 (SB-P-1.15) | 15:FDB-3 |
| 14-§11-2 | C14@16914a83 | §11 b2: 'How much credit is outstanding?' | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-CRD; A-BP105; 15:FDB-3 (authoritative balances SB-P-1.16); consumer rows 2-§5-3, 2-§11-3 (SB-P-1.15) | 15:FDB-3 |
| 14-§11-3 | C14@16914a83 | §11 b3: 'Which balances are old?' | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-CRD; A-BP105; 15:FDB-3 (authoritative balances SB-P-1.16); consumer rows 2-§5-3, 2-§11-3 (SB-P-1.15) | 15:FDB-3 |
| 14-§11-4 | C14@16914a83 | §11 b4: 'How much was repaid this week?' | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-CRD; A-BP105; 15:FDB-3 (authoritative balances SB-P-1.16); consumer rows 2-§5-3, 2-§11-3 (SB-P-1.15) | 15:FDB-3 |
| 14-§11-5 | C14@16914a83 | §11 p2: Ask CFO may identify patterns and suggest review, but cannot change limits, block custome… | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | L-NEG; A-BP105; BP §16 (Ask CFO write authority REJECT) | — |
| 14-§12-1 | C14@16914a83 | §12 b1: total outstanding credit | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DSCH | NI-CRD; A-BP105; consumer rows 4-§3-3, 4-§5-3 (SB-P-1.15) | — |
| 14-§12-2 | C14@16914a83 | §12 b2: meaningful change since prior period | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DSCH | NI-CRD; A-BP105; consumer rows 4-§3-3, 4-§5-3 (SB-P-1.15) | — |
| 14-§12-3 | C14@16914a83 | §12 b3: customers crossing Owner-configured thresholds | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DSCH | NI-CRD; A-BP105; consumer rows 4-§3-3, 4-§5-3 (SB-P-1.15) | — |
| 14-§12-4 | C14@16914a83 | §12 b4: repayments received | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DSCH | NI-CRD; A-BP105; consumer rows 4-§3-3, 4-§5-3 (SB-P-1.15) | — |
| 14-§12-5 | C14@16914a83 | §12 b5: follow-ups due | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DSCH | NI-CRD; A-BP105; consumer rows 4-§3-3, 4-§5-3 (SB-P-1.15) | — |
| 14-§12-6 | C14@16914a83 | §12 p2: Staff must not receive Owner-wide customer-credit intelligence by default | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | L-NEG; A-BP105 | — |
| 14-§13-1 | C14@16914a83 | §13 b1: credit status must link to the same customer identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; ESC-U01 | NI-CRD; A-BP105; credit-side rule here, order-side demonstration needs SB-P-1.18 (A-BP107); BP §11 | — |
| 14-§13-2 | C14@16914a83 | §13 b2: one order event must not create duplicate credit facts | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; DTX | L-NEG; A-BP105; BP §11 | — |
| 14-§13-3 | C14@16914a83 | §13 b3: delivery completion and payment/credit state remain distinct facts where necessary | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18 | NI-CRD; A-BP105; BP §11 | — |
| 14-§14-1 | C14@16914a83 | §14 <Owner> p1: Can view/manage credit awareness, thresholds, decisions and history | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105; C21 §§4, 11 | — |
| 14-§14-2 | C14@16914a83 | §14 <Manager> p2: Only Owner-delegated credit operations/visibility | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105; U-07; SB-P-1.15 DC-06 (proposed only) | — |
| 14-§14-3 | C14@16914a83 | §14 <Employee> p3: May record permitted credit transactions or repayments if explicitly allowed, but does no… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105; C21 §§4, 11 | — |
| 14-§14-4 | C14@16914a83 | §14 <Customer> p4: May receive only merchant-approved communications relevant to their own relationship | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D15; DNTF | NI-CRD; A-BP105; C21 §13; U-05 | — |
| 14-§15-1a | C14@16914a83 | §15 p1 (native Conversation Workspace slice): Credit input/review should work through WhatsApp and Conversation Workspace in English, M… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-CRD; A-BP105; I-13 (9-§12-11) | — |
| 14-§15-1b | C14@16914a83 | §15 p1 (WhatsApp channel slice): Credit input/review should work through WhatsApp and Conversation Workspace in English, M… | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 (BP §9 row 9) | — |
| 14-§15-2 | C14@16914a83 | §15 p2: Natural local expressions for 'kadam', 'balance', 'paid', 'gave', etc. should be interpre… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-CRD; A-BP105; I-13 (9-§12-11) | — |
| 14-§16-1 | C14@16914a83 | §16 b1: customer identity is ambiguous | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-CRD; A-BP105 | 14:FPDR-3 |
| 14-§16-2 | C14@16914a83 | §16 b2: amount is unclear | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-CRD; A-BP105 | 14:FPDR-3 |
| 14-§16-3 | C14@16914a83 | §16 b3: credit vs cash/paid state is unclear | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-CRD; A-BP105 | 14:FPDR-3 |
| 14-§16-4 | C14@16914a83 | §16 b4: repayment could match multiple customers/credits | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-CRD; A-BP105 | 14:FPDR-3 |
| 14-§16-5 | C14@16914a83 | §16 b5: a threshold override is unclear | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-CRD; A-BP105 | 14:FPDR-3 |
| 14-§16-6 | C14@16914a83 | §16 p2: Never guess a financial link to keep the flow moving | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | L-NEG; A-BP105; C03 §16 (row 3-§16; I-14 (3-§16-10)) | — |
| 14-§17-1 | C14@16914a83 | §17 p1: Consequential credit/repayment corrections must preserve prior truth through the Ledger c… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-CRD; A-BP105; I-14 (14-§17); correction model owned by SB-P-1.14 (3-§8) | — |
| 14-§17-2 | C14@16914a83 | §17 b1: original amount | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; I-14 (14-§17) | — |
| 14-§17-3 | C14@16914a83 | §17 b2: repayment linkage | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; I-14 (14-§17) | — |
| 14-§17-4 | C14@16914a83 | §17 b3: Owner override | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; I-14 (14-§17) | — |
| 14-§17-5 | C14@16914a83 | §17 b4: reminder/collection history | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; I-14 (14-§17) | — |
| 14-§18-1 | C14@16914a83 | §18 b1: duplicate customer identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; ESC-U01 | NI-CRD; A-BP105 | — |
| 14-§18-2 | C14@16914a83 | §18 b2: duplicate credit entry | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§18-3 | C14@16914a83 | §18 b3: repayment greater than expected balance | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§18-4 | C14@16914a83 | §18 b4: missing/ambiguous customer | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§18-5 | C14@16914a83 | §18 b5: stale balance during confirmation | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§18-6 | C14@16914a83 | §18 b6: permission revoked before write | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§18-7 | C14@16914a83 | §18 b7: reminder delivery failure | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | NI-CRD; A-BP105 | — |
| 14-§18-8 | C14@16914a83 | §18 b8: payment evidence mismatch | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-CRD; NI-PAY; A-BP105 | — |
| 14-§18-9 | C14@16914a83 | §18 p2: A credit ambiguity should block only the uncertain write/link, not unrelated merchant ope… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§19-1 | C14@16914a83 | §19 b1: Credit information is business-sensitive | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105 | — |
| 14-§19-2 | C14@16914a83 | §19 b2: Staff views are permission-scoped | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; A-BP105 | — |
| 14-§19-3 | C14@16914a83 | §19 b3: Customer balances are not public | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | L-NEG; A-BP105 | — |
| 14-§19-4 | C14@16914a83 | §19 b4: No accusation or shame language | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105; BP §16 item 2 | — |
| 14-§19-5 | C14@16914a83 | §19 b5: No model-generated moral judgement about whether a customer is 'good' or 'bad' | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DAI | L-NEG; A-BP105; U-03 | — |
| 14-§20-1 | C14@16914a83 | §20 b1: Ledger / Business Memory | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | A-BP105; I-14 (3-§15-8) | 14:FPDR-1 |
| 14-§20-2 | C14@16914a83 | §20 b2: Customer Identity | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; ESC-U01 | A-BP105; 22-§5-5; U-01 | — |
| 14-§20-3 | C14@16914a83 | §20 b3: Permission Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | A-BP105 | — |
| 14-§20-4 | C14@16914a83 | §20 b4: Human Language Layer | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | A-BP105; I-13 (9-§12-11) | — |
| 14-§20-5 | C14@16914a83 | §20 b5: Reminder Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | A-BP105; 11-§8-4 | — |
| 14-§20-6 | C14@16914a83 | §20 b6: Notification foundation | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | A-BP105; 22-§12 | 12:FPDR-1 |
| 14-§20-7 | C14@16914a83 | §20 b7: Ask CFO | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | A-BP105; C02 | — |
| 14-§20-8 | C14@16914a83 | §20 b8: Daily Intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | A-BP105; C04 | — |
| 14-§20-9 | C14@16914a83 | §20 b9: Payment Verification where applicable | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105; reuse obligation (consumer verifies reuse) | — |
| 14-§20-10 | C14@16914a83 | §20 b10: audit/idempotency | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | A-BP105; 22-§14, 22-§15 | — |
| 14-§21-1 | C14@16914a83 | §21 b1: automatic hard credit blocker by default | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105; BP-§16-6; GPCV §9 REJECT | — |
| 14-§21-2 | C14@16914a83 | §21 b2: underwriting/lending score | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105; GPCV §9 REJECT FOR CURRENT CORE; BP-§15-9 (U-10) | — |
| 14-§21-3 | C14@16914a83 | §21 b3: public customer reputation system | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§21-4 | C14@16914a83 | §21 b4: confrontational automated collection | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§21-5 | C14@16914a83 | §21 b5: fixed universal ₹5,000 limit | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§21-6 | C14@16914a83 | §21 b6: duplicate customer-credit database separate from Ledger/customer identity | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | L-NEG; A-BP105; I-14 (14-§21) | 14:FPDR-1 |
| 14-§22-1 | C14@16914a83 | §22 n1: Credit entry creates correct customer balance | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; DTX; ESC-U01 | NI-CRD; A-BP105; I-14 (14-§22, bundled 1 and 2: split here) | 14:FPDR-1 |
| 14-§22-2 | C14@16914a83 | §22 n2: Repayment reduces correct balance without duplicate revenue | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; DTX | NI-CRD; A-BP105; I-14 (14-§22, bundled 1 and 2: split here) | 14:FPDR-4 |
| 14-§22-3 | C14@16914a83 | §22 n3: Ambiguous customer triggers clarification | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13; ESC-U01 | NI-CRD; A-BP105 | — |
| 14-§22-4 | C14@16914a83 | §22 n4: Owner-configured threshold produces warning/context, not automatic block | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§22-5 | C14@16914a83 | §22 n5: Owner can approve/decline/adjust/grant grace | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§22-6 | C14@16914a83 | §22 n6: Material override is auditable | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§22-7 | C14@16914a83 | §22 n7: Employee can record credit only when permitted and cannot see Owner-wide analytics by def… | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§22-8 | C14@16914a83 | §22 n8: Ask CFO retrieves accurate credit facts without write authority | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-CRD; A-BP105; 15:FDB-3 | 15:FDB-3 |
| 14-§22-9 | C14@16914a83 | §22 n9: Respectful collection reminder requires approved workflow | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DNTF | NI-CRD; A-BP105; U-05 | — |
| 14-§22-10 | C14@16914a83 | §22 n10: Cross-business credit leakage is blocked | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§22-11 | C14@16914a83 | §22 n11: Correction preserves audit history | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105 | — |
| 14-§23-1 | C14@16914a83 | §23 b1: default hard block when limit exceeded | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§23-2 | C14@16914a83 | §23 b2: fixed universal historical credit limit | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§23-3 | C14@16914a83 | §23 b3: silent warning that does not reach Owner usefully | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§23-4 | C14@16914a83 | §23 b4: automated confrontational collection language | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 14-§23-5 | C14@16914a83 | §23 p2: Preserved: customer credit memory, thresholds as awareness, repayment tracking and Owner… | HIST | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-HIST (preserved behaviour carried by 14-§5, 14-§7, 14-§8, 14-§9 rows) | — |
| 14-§24 | C14@16914a83 | §24 Provenance and Hydration Coverage (whole section: p1, p2) | PROV | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-PROV | — |
| 14-§25-1 | C14@16914a83 | §25 p1: Complete only when customer identity, credit/repayment memory, thresholds, Owner decision… | GATE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13; D14; D15; D20 | A-BP105; completion requires every C14 BUILD NOW row demonstrated (GPCV §4.4) | — |

## B. Contract 15 — Payment Verification & Bank Reconciliation (172 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 15-§1-1 | C15@632f3402 | §1 p1: Payment Verification & Bank Reconciliation determines whether a recorded payment is suppo… | EXP | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | NI-PAY; A-BP105 | — |
| 15-§1-2 | C15@632f3402 | §1 p2: This feature includes the historical Bank Email Sync direction as one possible secure evi… | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105; U-06 | — |
| 15-§2-1 | C15@632f3402 | §2 b1: Ledger entries marked paid | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-2 | C15@632f3402 | §2 b2: UPI/bank/card evidence arriving separately | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-3 | C15@632f3402 | §2 b3: bank emails/notifications | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-4 | C15@632f3402 | §2 b4: screenshots or receipts | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-5 | C15@632f3402 | §2 b5: cash/COD events | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-6 | C15@632f3402 | §2 b6: multiple transactions with similar amounts | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-7 | C15@632f3402 | §2 b7: missing Ledger records discovered from bank evidence | NARR | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§3, 8–12) | — |
| 15-§2-8 | C15@632f3402 | §2 p2: Without reconciliation, Smart Business can either falsely trust an unverified claim or cr… | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 15-§3-1 | C15@632f3402 | §3 b1: Never fabricate payment certainty | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 15-§3-2 | C15@632f3402 | §3 b2: Preserve both business record and external evidence | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 15-§3-3 | C15@632f3402 | §3 b3: Strong match verifies; it does not duplicate the transaction | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 15-§3-4 | C15@632f3402 | §3 b4: Ambiguous match requires human confirmation | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 15-§3-5 | C15@632f3402 | §3 b5: Narrow uncertainty blocks only the uncertain link/write | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 15-§3-6 | C15@632f3402 | §3 b6: Auditability over silent overwrite | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105 | — |
| 15-§3-7 | C15@632f3402 | §3 b7: Provider choice is implementation detail; authenticity and integrity are product requirem… | PRIN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | A-BP105; U-06 | — |
| 15-§4-1 | C15@632f3402 | §4 b1: pending/unverified | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; U-02 (BP §10.5 'partially matched') | — |
| 15-§4-2 | C15@632f3402 | §4 b2: evidence received | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; U-02 (BP §10.5 'partially matched') | — |
| 15-§4-3 | C15@632f3402 | §4 b3: matched/verified | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; U-02 (BP §10.5 'partially matched') | — |
| 15-§4-4 | C15@632f3402 | §4 b4: ambiguous/review required | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; U-02 (BP §10.5 'partially matched') | — |
| 15-§4-5 | C15@632f3402 | §4 b5: mismatched | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; U-02 (BP §10.5 'partially matched') | — |
| 15-§4-6 | C15@632f3402 | §4 b6: unlinked evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; U-02 (BP §10.5 'partially matched') | — |
| 15-§4-7 | C15@632f3402 | §4 b7: reversed/invalidated where authoritative evidence supports it | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; U-02; U-09 | — |
| 15-§4-8 | C15@632f3402 | §4 p2: Exact enum names are implementation choices. The durable behavior is that verification st… | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; U-02 | — |
| 15-§5-1 | C15@632f3402 | §5 b1: bank/payment provider API/webhook | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105; I-14 (15-§5); U-06 | — |
| 15-§5-2 | C15@632f3402 | §5 b2: authenticated bank email ingestion | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105; I-14 (15-§5); U-06 | — |
| 15-§5-3 | C15@632f3402 | §5 b3: payment gateway record | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105; I-14 (15-§5); U-06 | — |
| 15-§5-4 | C15@632f3402 | §5 b4: verified settlement file | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105; I-14 (15-§5); U-06 | — |
| 15-§5-5 | C15@632f3402 | §5 b5: merchant-uploaded evidence requiring appropriate review | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; I-14 (15-§5); UDI/storage SB-P-1.14 (5-§6-1, 25-§6-1); U-06 | — |
| 15-§5-6 | C15@632f3402 | §5 b6: COD/order-delivery evidence where the workflow supports it | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18 | NI-PAY; A-BP105; I-14 (15-§5); 1-§16 (SB-P-1.18); U-06 | — |
| 15-§5-7 | C15@632f3402 | §5 b7: other approved financial integrations | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105; I-14 (15-§5); U-06 | — |
| 15-§5-8 | C15@632f3402 | §5 p2: An unauthenticated message or arbitrary text claim must not automatically become authorit… | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105; I-14 (15-§5) | — |
| 15-§6-1 | C15@632f3402 | §6 b1: business scope | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-2 | C15@632f3402 | §6 b2: source/provider | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-3 | C15@632f3402 | §6 b3: external reference/UTR where available | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-4 | C15@632f3402 | §6 b4: amount | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-5 | C15@632f3402 | §6 b5: direction | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-6 | C15@632f3402 | §6 b6: timestamp | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-7 | C15@632f3402 | §6 b7: payer/payee/account hints where permitted | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DPAY | NI-PAY; A-BP105; I-14 (15-§6); U-08 | — |
| 15-§6-8 | C15@632f3402 | §6 b8: raw evidence/reference sufficient for audit | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-9 | C15@632f3402 | §6 b9: ingestion time | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-10 | C15@632f3402 | §6 b10: authenticity/validation state | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; I-14 (15-§6) | — |
| 15-§6-11 | C15@632f3402 | §6 b11: dedupe/idempotency key | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DPAY | NI-PAY; A-BP105; I-14 (15-§6); 22-§15 | — |
| 15-§6-12 | C15@632f3402 | §6 p2: Sensitive financial evidence must follow current privacy/security/retention rules | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DUF6 | NI-PAY; A-BP105; I-14 (15-§6); 25-§17; U-08 | 14:FPDR-2 |
| 15-§7-1 | C15@632f3402 | §7 b1: amount | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§7-2 | C15@632f3402 | §7 b2: reference/UTR | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105 | — |
| 15-§7-3 | C15@632f3402 | §7 b3: timestamp/time window | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§7-4 | C15@632f3402 | §7 b4: direction | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§7-5 | C15@632f3402 | §7 b5: customer/supplier/account identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; ESC-U01 | NI-PAY; A-BP105; U-01 | — |
| 15-§7-6 | C15@632f3402 | §7 b6: payment method | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§7-7 | C15@632f3402 | §7 b7: linked order/credit context | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; D18 | NI-PAY; A-BP105; order context SB-P-1.18 | — |
| 15-§7-8 | C15@632f3402 | §7 b8: provider-specific identifiers | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105 | — |
| 15-§7-9 | C15@632f3402 | §7 p2: Historical fixed formulas/windows (for example five minutes or 24 hours) are implementati… | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§7-10 | C15@632f3402 | §7 p3: Matching logic should be deterministic/idempotent where possible and explainable enough f… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§8-1 | C15@632f3402 | §8 b1: link the evidence to that record | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105; A-BP105-FRV | 14:FPDR-1 |
| 15-§8-2 | C15@632f3402 | §8 b2: mark/derive verification state appropriately | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105; A-BP105-FRV | 14:FPDR-1 |
| 15-§8-3 | C15@632f3402 | §8 b3: preserve the original transaction identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105; A-BP105-FRV | 14:FPDR-1 |
| 15-§8-4 | C15@632f3402 | §8 b4: do not create a duplicate sale/income/payment | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; A-BP105-FRV | 14:FPDR-1 |
| 15-§8-5 | C15@632f3402 | §8 b5: preserve source/reference/audit history | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105; A-BP105-FRV | 14:FPDR-1 |
| 15-§8-6 | C15@632f3402 | §8 b6: notify/surface success where useful | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | NI-PAY; A-BP105 | — |
| 15-§8-7 | C15@632f3402 | §8 p2: Verification is a property/link of the existing business truth, not a second financial tr… | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; BP-§10.5-E4 | 14:FPDR-1 |
| 15-§9-1 | C15@632f3402 | §9 b1: do not choose silently | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | L-NEG; A-BP105; A-BP105-FRV; C03 §16 (row 3-§16; I-14 (3-§16-10)) | — |
| 15-§9-2 | C15@632f3402 | §9 b2: present the relevant candidates/context to an authorized human | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; A-BP105-FRV (Scenario B); I-13 (10-§17-5, 24-§21-5) | 14:FPDR-3 |
| 15-§9-3 | C15@632f3402 | §9 b3: ask for the smallest useful confirmation | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; A-BP105-FRV (Scenario B); I-13 (10-§17-5, 24-§21-5) | 14:FPDR-3 |
| 15-§9-4 | C15@632f3402 | §9 b4: bind the confirmation to the exact evidence/candidate state | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; A-BP105-FRV (Scenario B); I-13 (10-§17-5, 24-§21-5) | 14:FPDR-3 |
| 15-§9-5 | C15@632f3402 | §9 b5: revalidate state/permission before linking | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; A-BP105-FRV (Scenario B); I-13 (10-§17-5, 24-§21-5) | 14:FPDR-3 |
| 15-§9-6 | C15@632f3402 | §9 p2: If no safe choice is made, evidence remains in review/unlinked state | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; A-BP105-FRV | — |
| 15-§10-1 | C15@632f3402 | §10 b1: preserve both pieces of evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§10-2 | C15@632f3402 | §10 b2: show the variance | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§10-3 | C15@632f3402 | §10 b3: do not overwrite one with the other | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | L-NEG; A-BP105 | — |
| 15-§10-4 | C15@632f3402 | §10 b4: allow authorized correction/review through normal Ledger/payment workflows | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; DTX | NI-PAY; A-BP105 | — |
| 15-§10-5 | C15@632f3402 | §10 b5: keep audit history | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105 | — |
| 15-§11-1 | C15@632f3402 | §11 p1: Authoritative evidence may arrive without a corresponding Ledger transaction | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§11-2 | C15@632f3402 | §11 b1: preserve it as unlinked evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§11-3 | C15@632f3402 | §11 b2: surface it to the Owner/authorized user | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D15 | NI-PAY; A-BP105 | — |
| 15-§11-4 | C15@632f3402 | §11 b3: allow classification/linking or creation through a governed flow | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14; DTX | NI-PAY; A-BP105 | — |
| 15-§11-5 | C15@632f3402 | §11 b4: do not auto-create income/expense if business meaning is ambiguous | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | L-NEG; A-BP105 | — |
| 15-§12-1 | C15@632f3402 | §12 p1: The same bank/provider event may arrive more than once | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105 | — |
| 15-§12-2 | C15@632f3402 | §12 b1: duplicate evidence records where avoidable | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; A-BP105-FRV (Scenario B replay) | — |
| 15-§12-3 | C15@632f3402 | §12 b2: duplicate verification actions | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; A-BP105-FRV (Scenario B replay) | — |
| 15-§12-4 | C15@632f3402 | §12 b3: duplicate revenue/payment entries | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105; A-BP105-FRV (Scenario B replay) | — |
| 15-§12-5 | C15@632f3402 | §12 b4: repeated notifications/actions caused by retries | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | L-NEG; A-BP105; I-12 (22-§12-6) | — |
| 15-§12-6 | C15@632f3402 | §12 p3: External reference/provider identity should support idempotent processing | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; DPAY | NI-PAY; A-BP105; 22-§15; 22-§5-9 | — |
| 15-§13-1 | C15@632f3402 | §13 p1: If authoritative evidence later changes (for example reversal/failure/chargeback where ap… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; U-09 | — |
| 15-§13-2 | C15@632f3402 | §13 p2: Do not silently erase the prior verified state | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | L-NEG; A-BP105 | — |
| 15-§13-3 | C15@632f3402 | §13 p3: Ledger correction rules continue to apply to consequential business-record changes | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105; C03 §8 (SB-P-1.14) | — |
| 15-§14-1 | C15@632f3402 | §14 p1: Repayments/customer credit may use Payment Verification to support whether money was actu… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; NI-CRD; A-BP105 | 14:FPDR-4 |
| 15-§14-2 | C15@632f3402 | §14 b1: duplicating income | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | L-NEG; A-BP105 | 14:FPDR-4 |
| 15-§14-3 | C15@632f3402 | §14 b2: reducing the wrong customer's balance | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX; ESC-U01 | L-NEG; A-BP105 | 14:FPDR-4 |
| 15-§14-4 | C15@632f3402 | §14 b3: guessing when multiple matches exist | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | L-NEG; A-BP105 | — |
| 15-§15-1 | C15@632f3402 | §15 p1: COD collection and delivery completion are related but distinct facts | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18 | NI-PAY; A-BP105; BP §11 | — |
| 15-§15-2 | C15@632f3402 | §15 b1: expected amount | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; D14 | NI-PAY; A-BP105; BP §11 (SB-P-1.16 underpins COD/payment closure); 1-§16 (SB-P-1.18) | — |
| 15-§15-3 | C15@632f3402 | §15 b2: collected amount | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; D14 | NI-PAY; A-BP105; BP §11 (SB-P-1.16 underpins COD/payment closure); 1-§16 (SB-P-1.18) | — |
| 15-§15-4 | C15@632f3402 | §15 b3: delivery proof | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; D14 | NI-PAY; A-BP105; BP §11 (SB-P-1.16 underpins COD/payment closure); 1-§16 (SB-P-1.18) | — |
| 15-§15-5 | C15@632f3402 | §15 b4: Ledger/payment record | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; D14 | NI-PAY; A-BP105; BP §11 (SB-P-1.16 underpins COD/payment closure); 1-§16 (SB-P-1.18) | — |
| 15-§15-6 | C15@632f3402 | §15 b5: verification state | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; D14 | NI-PAY; A-BP105; BP §11 (SB-P-1.16 underpins COD/payment closure); 1-§16 (SB-P-1.18) | — |
| 15-§15-7 | C15@632f3402 | §15 p3: must link consistently without duplicate financial truth | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; DTX | L-NEG; A-BP105; BP §11 | — |
| 15-§16-1 | C15@632f3402 | §16 b1: unverified payments | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-PAY; A-BP105; consumer rows 2-§11-12, 2-§12-7, 4-§4-6 (SB-P-1.15) | — |
| 15-§16-2 | C15@632f3402 | §16 b2: mismatches | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-PAY; A-BP105; consumer rows 2-§11-12, 2-§12-7, 4-§4-6 (SB-P-1.15) | — |
| 15-§16-3 | C15@632f3402 | §16 b3: unlinked evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-PAY; A-BP105; consumer rows 2-§11-12, 2-§12-7, 4-§4-6 (SB-P-1.15) | — |
| 15-§16-4 | C15@632f3402 | §16 b4: verified receipts | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-PAY; A-BP105; consumer rows 2-§11-12, 2-§12-7, 4-§4-6 (SB-P-1.15) | — |
| 15-§16-5 | C15@632f3402 | §16 b5: ageing review queue | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-PAY; A-BP105; consumer rows 2-§11-12, 2-§12-7, 4-§4-6 (SB-P-1.15) | — |
| 15-§16-6 | C15@632f3402 | §16 p2: They must not convert uncertainty into certainty | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | L-NEG; A-BP105 | — |
| 15-§17-1 | C15@632f3402 | §17 <Owner> p1: Default authority to review/resolve financial reconciliation | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105; C21 | — |
| 15-§17-2 | C15@632f3402 | §17 <Manager> p2: Only delegated financial/reconciliation scope | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105; U-07; SB-P-1.15 DC-06 (proposed only) | — |
| 15-§17-3 | C15@632f3402 | §17 <Employee> p3: May record permitted operational payment information but should not automatically receive… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105; C21 | — |
| 15-§17-4 | C15@632f3402 | §17 <Platform/support> p4: No routine access to merchant banking/financial evidence. Support access follows separate… | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D19 | L-NEG; A-BP105; 19-§15; 21-§14 | — |
| 15-§18-1a | C15@632f3402 | §18 p1 (Workspace slice): Authorized review/clarification may occur through Workspace/WhatsApp where secure and sui… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | NI-PAY; A-BP105 | — |
| 15-§18-1b | C15@632f3402 | §18 p1 (WhatsApp channel slice): Authorized review/clarification may occur through Workspace/WhatsApp where secure and sui… | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 (BP §9 row 9) | — |
| 15-§18-2 | C15@632f3402 | §18 p2: Sensitive evidence should not be exposed in an inappropriate channel merely for convenien… | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D13 | L-NEG; A-BP105 | — |
| 15-§19-1 | C15@632f3402 | §19 b1: multiple plausible matches exist | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; I-13 (24-§21-5) | 14:FPDR-3 |
| 15-§19-2 | C15@632f3402 | §19 b2: a mismatch correction changes business truth | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; I-13 (24-§21-5) | 14:FPDR-3 |
| 15-§19-3 | C15@632f3402 | §19 b3: unlinked evidence is being classified into a consequential record | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; I-13 (24-§21-5) | 14:FPDR-3 |
| 15-§19-4 | C15@632f3402 | §19 b4: current authority/record state requires review | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; I-13 (24-§21-5) | 14:FPDR-3 |
| 15-§19-5 | C15@632f3402 | §19 p2: Confirmation must bind exact evidence/record/action and current actor | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; I-13 (24-§21-5) | 14:FPDR-3 |
| 15-§20-1 | C15@632f3402 | §20 b1: stop only the uncertain link/write | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§20-2 | C15@632f3402 | §20 b2: preserve evidence safely | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§20-3 | C15@632f3402 | §20 b3: show recovery/review path | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§20-4 | C15@632f3402 | §20 b4: allow unrelated Ledger, inventory, orders and other safe operations to continue | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§20-5 | C15@632f3402 | §20 p2: A bank integration outage must not globally freeze Smart Business | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | L-NEG; A-BP105 | — |
| 15-§21-1 | C15@632f3402 | §21 b1: provider outage | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105 | — |
| 15-§21-2 | C15@632f3402 | §21 b2: malformed/unsupported evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§21-3 | C15@632f3402 | §21 b3: authenticity failure | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105 | — |
| 15-§21-4 | C15@632f3402 | §21 b4: duplicate event | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§21-5 | C15@632f3402 | §21 b5: multiple candidates | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§21-6 | C15@632f3402 | §21 b6: no candidate | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§21-7 | C15@632f3402 | §21 b7: amount/reference mismatch | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§21-8 | C15@632f3402 | §21 b8: stale candidate state | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| 15-§21-9 | C15@632f3402 | §21 b9: permission revoked during review | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105 | — |
| 15-§21-10 | C15@632f3402 | §21 b10: reversal/chargeback where relevant | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; U-09 | — |
| 15-§21-11 | C15@632f3402 | §21 b11: channel notification failure | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | NI-PAY; A-BP105 | — |
| 15-§22-1 | C15@632f3402 | §22 b1: Authenticate/validate evidence source where authoritative status is claimed | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105; I-14 (15-§22) | — |
| 15-§22-2 | C15@632f3402 | §22 b2: Encrypt/protect sensitive financial information according to architecture policy | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105; I-14 (15-§22); 25-§19-1 | — |
| 15-§22-3 | C15@632f3402 | §22 b3: Business isolation is mandatory | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105; I-14 (15-§22) | — |
| 15-§22-4 | C15@632f3402 | §22 b4: Limit staff/platform exposure | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105; I-14 (15-§22) | — |
| 15-§22-5 | C15@632f3402 | §22 b5: Preserve audit without unnecessary disclosure | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | NI-PAY; A-BP105; I-14 (15-§22) | — |
| 15-§22-6 | C15@632f3402 | §22 b6: Never accept an unauthenticated arbitrary message as authoritative bank evidence | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | L-NEG; A-BP105; I-14 (15-§22) | — |
| 15-§23-1 | C15@632f3402 | §23 b1: Ledger / Business Memory | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14 | A-BP105; I-14 (3-§15-9) | 14:FPDR-1 |
| 15-§23-2 | C15@632f3402 | §23 b2: Customer/Supplier identity | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; ESC-U01 | A-BP105; 22-§5-5; U-01 | — |
| 15-§23-3 | C15@632f3402 | §23 b3: Permission Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | A-BP105 | — |
| 15-§23-4 | C15@632f3402 | §23 b4: audit/idempotency | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12 | A-BP105; 22-§14, 22-§15 | — |
| 15-§23-5 | C15@632f3402 | §23 b5: Notification foundation | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | A-BP105; 22-§12 | 12:FPDR-1 |
| 15-§23-6 | C15@632f3402 | §23 b6: Smart Credit | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | A-BP105; reuse obligation (consumer verifies reuse) | — |
| 15-§23-7 | C15@632f3402 | §23 b7: Order & Delivery financial linkage | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18 | A-BP105; 1-§16 | — |
| 15-§23-8 | C15@632f3402 | §23 b8: Ask CFO/Daily Intelligence read paths | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15 | A-BP105; C02, C04 | — |
| 15-§24-1 | C15@632f3402 | §24 b1: guessing among plausible matches | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§24-2 | C15@632f3402 | §24 b2: duplicate revenue creation from bank evidence | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§24-3 | C15@632f3402 | §24 b3: permanent dependence on SendGrid or any one provider | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§24-4 | C15@632f3402 | §24 b4: immutable historic five-minute/24-hour matching formula | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§24-5 | C15@632f3402 | §24 b5: global system lock on reconciliation failure | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§24-6 | C15@632f3402 | §24 b6: accepting unauthenticated evidence as authoritative | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§25-1 | C15@632f3402 | §25 n1: Strong unique match verifies existing transaction without duplication | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105 | 14:FPDR-1 |
| 15-§25-2 | C15@632f3402 | §25 n2: Duplicate provider event is idempotent | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105 | — |
| 15-§25-3 | C15@632f3402 | §25 n3: Multiple candidates require human selection | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105; A-BP105-FRV (Scenario B) | — |
| 15-§25-4 | C15@632f3402 | §25 n4: No candidate becomes unlinked evidence, not fabricated transaction | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-PAY; A-BP105 | — |
| 15-§25-5 | C15@632f3402 | §25 n5: Mismatch preserves both facts and variance | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-PAY; A-BP105 | — |
| 15-§25-6 | C15@632f3402 | §25 n6: Repayment links to correct customer credit | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DTX; ESC-U01 | NI-PAY; NI-CRD; A-BP105 | 14:FPDR-4 |
| 15-§25-7 | C15@632f3402 | §25 n7: COD evidence does not duplicate Ledger revenue | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D18; DTX | NI-PAY; A-BP105; 1-§16 | — |
| 15-§25-8 | C15@632f3402 | §25 n8: Permission revocation before confirmation blocks only pending link | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-PAY; A-BP105 | — |
| 15-§25-9 | C15@632f3402 | §25 n9: Provider outage leaves unrelated product operational | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; A-BP105 | — |
| 15-§25-10 | C15@632f3402 | §25 n10: Ask CFO cannot report ambiguous evidence as verified | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D15; DAI | NI-PAY; A-BP105 | — |
| 15-§25-11 | C15@632f3402 | §25 n11: Cross-business financial evidence access is denied | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | NI-PAY; A-BP105 | — |
| 15-§25-12 | C15@632f3402 | §25 n12: Reversal preserves history rather than erasing prior state | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105; U-09 | — |
| 15-§26-1 | C15@632f3402 | §26 b1: exact five-minute/24-hour matching windows | HIST | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-HIST (provenance only; current rule is 15-§7 p2) | — |
| 15-§26-2 | C15@632f3402 | §26 b2: UTR-specific formulas | HIST | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-HIST (provenance only; current rule is 15-§7 p2) | — |
| 15-§26-3 | C15@632f3402 | §26 b3: SendGrid as fixed provider | HIST | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-HIST (provenance only; current rule is 15-§3 b7, 15-§24 b3) | — |
| 15-§26-4 | C15@632f3402 | §26 b4: guessing ambiguous matches | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§26-5 | C15@632f3402 | §26 b5: unauthenticated evidence treated as authoritative | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§26-6 | C15@632f3402 | §26 b6: reconciliation failure globally blocking unrelated work | NEG | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | — | L-NEG; A-BP105 | — |
| 15-§27 | C15@632f3402 | §27 Provenance and Hydration Coverage (whole section: p1, p2) | PROV | BUILD NOW | CORE-LM | SB-P-1.16 | NOT APPLICABLE | — | L-PROV | — |
| 15-§28-1 | C15@632f3402 | §28 p1: Complete only when authenticated evidence ingestion, deterministic/idempotent matching, a… | GATE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13; D14; D15; DPAY | A-BP105; completion requires every C15 BUILD NOW row demonstrated (GPCV §4.4) | — |

## C. Contract 03 — Ledger & Business Memory, credit-specific completion (68 rows)

SB-P-1.14 owns the four-state Ledger foundation (14:FPDR-1, 14:FPDR-4). SB-P-1.16 owns authoritative per-customer balance truth (`3-§9-12`), the integration rows `3-§15-8` and `3-§15-9`, its slice of the joint row `3-§11-6`, and the Contract 03 completion gate (`3-§23`, BP §9 row 5 'Contract 3 completion'). Every SB-P-1.14 row is specification only, not demonstrated.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 3-§1 | C3@d8c26c07 | §1 Feature Identity (whole section: p1, p2, p3) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | NOT APPLICABLE | — | I-14 (3-§1: NOT APPLICABLE in FCTM-14) | — |
| 3-§2 | C3@d8c26c07 | §2 Founder Problem Statement (whole section: b1, b2, b3, b4, b5, b6, b7, b8, p2, p3) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§2-1…3-§2-2: SB-P-1.14 2) | — |
| 3-§3 | C3@d8c26c07 | §3 Lighthouse Principle (whole section: b1, b2, b3, b4, b5, b6, b7) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§3…3-§3: SB-P-1.14 1) | — |
| 3-§4 | C3@d8c26c07 | §4 Core Business States (whole section: n1, n2, n3, n4, p2) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§4-1…3-§4-6: SB-P-1.14 6) | 14:FPDR-1; 14:FPDR-4 |
| 3-§5 | C3@d8c26c07 | §5 Supported Input Paths (whole section: p1, b1, b2, b3, b4, p3, p5, p6, p7) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§5-1…3-§5-10: SB-P-1.14 10) | — |
| 3-§6 | C3@d8c26c07 | §6 Immediate Confirmation (whole section: p1, b1, b2, b3, b4, b5, b6, b7, b8, p3) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§6-1…3-§6-10: SB-P-1.14 10) | — |
| 3-§7 | C3@d8c26c07 | §7 Clarification Rules (whole section: p1, b1, b2, b3, b4, b5, b6, b7, p3) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§7-1…3-§7-9: SB-P-1.14 9) | — |
| 3-§8 | C3@d8c26c07 | §8 Correction and Audit History (whole section: p1, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, p4) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§8-1…3-§8-16: SB-P-1.14 16) | 14:FPDR-1; 14:FPDR-4 |
| 3-§9-1 | C3@d8c26c07 | §9 retrieve history by date or period | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-1) | — |
| 3-§9-2 | C3@d8c26c07 | §9 retrieve by customer or supplier — party/counterparty reference level | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-2) | — |
| 3-§9-3 | C3@d8c26c07 | §9 retrieve by customer or supplier — structured directory-indexed identity | OBL | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | ASSIGNED TO LATER MISSION | D17; D18 | I-14 (3-§9-3); assignment per FCTM-14 | — |
| 3-§9-4 | C3@d8c26c07 | §9 retrieve by category/purpose | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-4) | — |
| 3-§9-5 | C3@d8c26c07 | §9 retrieve by payment method | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-5) | — |
| 3-§9-6 | C3@d8c26c07 | §9 retrieve by amount range where useful | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-6) | — |
| 3-§9-7 | C3@d8c26c07 | §9 retrieve by credit/repayment state | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-7) | — |
| 3-§9-8 | C3@d8c26c07 | §9 retrieve by linked document | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-8) | — |
| 3-§9-9 | C3@d8c26c07 | §9 retrieve by product or stock relationship where available | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-9) | — |
| 3-§9-10 | C3@d8c26c07 | §9 example: spend on bakery supplies last month (purpose + period) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-10) | — |
| 3-§9-11 | C3@d8c26c07 | §9 example: payments to ABC Traders in August (counterparty + period) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-11) | — |
| 3-§9-12 | C3@d8c26c07 | §9 example: what does Shameer still owe me (authoritative customer owed-balance truth) | SCN | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D14; ESC-U01 | I-14 (3-§9-12); A-BP105 | 14:FPDR-1 |
| 3-§9-13 | C3@d8c26c07 | §9 example: find the receipt for that mixer purchase (linked document) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-13) | — |
| 3-§9-14 | C3@d8c26c07 | §9 conversational and dashboard/report retrieval read the same underlying truth | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-14) | — |
| 3-§10 | C3@d8c26c07 | §10 Reports and Exports (whole section: b1, b2, b3, b4, b5, p2) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§10-1…3-§10-9: SB-P-1.14 9) | — |
| 3-§11-1 | C3@d8c26c07 | §11 Owner: full authorized Ledger records, corrections and exports | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§11-1) | — |
| 3-§11-2 | C3@d8c26c07 | §11 Manager: delegated access only; not automatically Owner access | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§11-2) | — |
| 3-§11-3 | C3@d8c26c07 | §11 Employee/Staff: add or view only permitted operational records | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§11-3) | — |
| 3-§11-4 | C3@d8c26c07 | §11 Staff do not receive Owner profit intelligence, Ask CFO or unrestricted analytics by default | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§11-4) | — |
| 3-§11-5 | C3@d8c26c07 | §11 Customer/Supplier/Delivery Staff: no general Ledger access | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§11-5) | — |
| 3-§11-6 | C3@d8c26c07 | §11 Customer/Supplier/Delivery participate only in specific minimum-information workflows | OBL | BUILD NOW | CORE-LM | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | I-14 (3-§11-6, jointly assigned SB-P-1.16 / SB-P-1.17 / SB-P-1.18: SB-P-1.16 demonstrates the customer-credit/payment participation slice; other slices remain with SB-P-1.17 / SB-P-1.18); A-BP105 | — |
| 3-§11-7 | C3@d8c26c07 | §11 every record remains business-scoped | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§11-7) | — |
| 3-§12 | C3@d8c26c07 | §12 WhatsApp and Conversation Workspace (whole section: b1, b2, b3, p2, p3) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 and others per FCTM-14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§12-1…3-§12-5: SB-P-1.20 1, SB-P-1.14 4) | — |
| 3-§13 | C3@d8c26c07 | §13 Relationship to Ask CFO (whole section: p1, p2, p3) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§13-1…3-§13-3: SB-P-1.15 3) | — |
| 3-§14 | C3@d8c26c07 | §14 Relationship to Daily Intelligence (whole section: b1, b2, b3, p2) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 and others per FCTM-14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§14-1…3-§14-2: SB-P-1.15 1, SB-P-1.14 1) | — |
| 3-§15-1 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Universal Document Intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§15-1) | — |
| 3-§15-2 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Human Language Layer | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§15-2) | — |
| 3-§15-3 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Basic Voice / Voice Plus | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§15-3) | — |
| 3-§15-4 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Permission Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§15-4) | — |
| 3-§15-5 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Conversation Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§15-5) | — |
| 3-§15-6 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Reminder Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-14 (3-§15-6) | — |
| 3-§15-7 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Customer/Supplier identity | RULE | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | ASSIGNED TO LATER MISSION | D17; D18 | I-14 (3-§15-7); assignment per FCTM-14 | — |
| 3-§15-8 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Credit Awareness | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | I-14 (3-§15-8); A-BP105 | — |
| 3-§15-9 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Payment Verification / Bank Reconciliation | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D14 | I-14 (3-§15-9); A-BP105 | — |
| 3-§15-10 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Stock / Supplier / Reorder Intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-14 (3-§15-10); assignment per FCTM-14 | — |
| 3-§15-11 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: POS bridge where enabled | RULE | BUILD NOW | CORE-LM | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-14 (3-§15-11); assignment per FCTM-14 | — |
| 3-§15-12 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Order & Delivery | RULE | BUILD NOW | CORE-LM | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | I-14 (3-§15-12); assignment per FCTM-14 | — |
| 3-§15-13 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Staff / HR where authorized | RULE | BUILD NOW | CORE-LM | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | I-14 (3-§15-13); assignment per FCTM-14 | — |
| 3-§16 | C3@d8c26c07 | §16 AI Behaviour (whole section: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§16-1…3-§16-14: SB-P-1.14 14) | — |
| 3-§17 | C3@d8c26c07 | §17 Failure and Exception Principles (whole section: b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, p2) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§17-1…3-§17-11: SB-P-1.14 11) | — |
| 3-§18 | C3@d8c26c07 | §18 Privacy and Integrity (whole section: p1, b1, b2, b3, b4, b5, b6) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 and others per FCTM-14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§18-1…3-§18-6: SB-P-1.14 5, SB-P-1.12 1) | — |
| 3-§19-1 | C3@d8c26c07 | §19 acceptance 1: text income/expense recording | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-1) | — |
| 3-§19-2 | C3@d8c26c07 | §19 acceptance 2: credit and repayment recording | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-2) | — |
| 3-§19-3 | C3@d8c26c07 | §19 acceptance 3: voice-created Ledger event | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-3) | — |
| 3-§19-4 | C3@d8c26c07 | §19 acceptance 4: image/document-created draft with preview/confirmation | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-4) | — |
| 3-§19-5 | C3@d8c26c07 | §19 acceptance 5: ambiguous-input clarification | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-5) | — |
| 3-§19-6 | C3@d8c26c07 | §19 acceptance 6: duplicate/retry protection | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-6) | — |
| 3-§19-7 | C3@d8c26c07 | §19 acceptance 7: correction with durable audit history | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-7) | — |
| 3-§19-8 | C3@d8c26c07 | §19 acceptance 8: period/party search | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-8) | — |
| 3-§19-9 | C3@d8c26c07 | §19 acceptance 9: receipt/document retrieval linkage | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-9) | — |
| 3-§19-10 | C3@d8c26c07 | §19 acceptance 10: permission-scoped staff contribution | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-10) | — |
| 3-§19-11 | C3@d8c26c07 | §19 acceptance 11: Owner-only financial intelligence boundary (Ledger slice; Ask CFO is SB-P-1.15) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-11) | — |
| 3-§19-12 | C3@d8c26c07 | §19 acceptance 12: CSV/Excel/PDF export consistency | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-12) | — |
| 3-§19-13a | C3@d8c26c07 | §19 acceptance 13 (Workspace slice): identical business semantics across channels | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-13a) | — |
| 3-§19-13b | C3@d8c26c07 | §19 acceptance 13 (WhatsApp slice): identical business semantics across channels | SCN | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | I-14 (3-§19-13b); assignment per FCTM-14 | — |
| 3-§19-14 | C3@d8c26c07 | §19 acceptance 14: cross-business isolation | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§19-14) | — |
| 3-§20 | C3@d8c26c07 | §20 Non-goals / Rejected Historical Behaviour (whole section: b1, b2, b3, b4, b5, b6) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§20-1…3-§20-6: SB-P-1.14 6) | — |
| 3-§21 | C3@d8c26c07 | §21 Historical Corrections Preserved (whole section: p1, p2) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | NOT APPLICABLE | — | I-14 (3-§21: NOT APPLICABLE in FCTM-14) | — |
| 3-§22 | C3@d8c26c07 | §22 Implementation Dependency Rule (whole section: p1, p2) | SEC | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (FCTM-14 rows 3-§22-1…3-§22-2: SB-P-1.14 2) | — |
| 3-§23 | C3@d8c26c07 | §23 Completion Gate (p1) | GATE | BUILD NOW | CORE-LM | SB-P-1.16 | IN SCOPE | D12; D13; D14; D15; D20 | BP-§9-2 ('Contract 3 completion' in SB-P-1.16); FCTM-14 3-§23 was NOT APPLICABLE to SB-P-1.14 (L-GATE) | — |

## D. Delegated, touched, downstream-consumer and adjacent contracts (91 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 24-§21-4 | C24@0c1dcbb2 | §21 b3: confirmation required for credit overrides | OBL | BUILD NOW | CORE-INT | SB-P-1.16 | IN SCOPE | D12; D13 | NI-CRD; I-13 (24-§21-4); A-BP105 | — |
| 24-§21-5 | C24@0c1dcbb2 | §21 b4: confirmation required for payment match resolution | OBL | BUILD NOW | CORE-INT | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; I-13 (24-§21-5); A-BP105; A-BP105-FRV (Scenario B) | — |
| 9-§12-11 | C9@649c55f3 | §12 b11: Human Language Layer reused by Smart Credit Awareness (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.16 | IN SCOPE | D13 | I-13 (9-§12-11); A-BP105 | — |
| 10-§17-5 | C10@5c145ed7 | §17 b4: clarify: multiple payment matches | OBL | BUILD NOW | CORE-CH | SB-P-1.16 | IN SCOPE | D13 | NI-PAY; I-13 (10-§17-5); A-BP105; A-BP105-FRV (Scenario B) | — |
| 22-§17-3 | C22@61e1bb91 | §17 b2: adapter pattern: payment/bank providers | RULE | BUILD NOW | CORE-ARCH | SB-P-1.16 | IN SCOPE | DPAY | NI-PAY; I-14 (22-§17-3); I-15 (22-§17-3, same row); A-BP105; BP §5.4 | — |
| 22-§4-1 | C22@61e1bb91 | §4 p1; b2; b8: one authoritative business-memory model across features/channels (customers/credit, payments/reconciliation listed) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-13 (22-§4-1); I-14 | — |
| 22-§5-5 | C22@61e1bb91 | §5 b5: shared identity: customer | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; ESC-U01 | L-DEL12; I-12 (22-§5-5); SB-P-1.12 EIS-ID-03; U-01 (see BP-§10.3-S2) | — |
| 22-§5-9 | C22@61e1bb91 | §5 b9: shared identity: external integration/provider references | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§5-9) | — |
| 22-§11-4 | C22@61e1bb91 | §11 b4: reminder foundation use: credit follow-up | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (22-§11-4, consumer SB-P-1.16) | — |
| 22-§12 | C22@61e1bb91 | §12 whole section: Notification Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-12 (22-§12-1 to -9); I-13 (22-§12) | 12:FPDR-1 |
| 22-§14 | C22@61e1bb91 | §14 whole section: Audit / Human Context Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§14-1 to -9); I-13 (22-§14) | — |
| 22-§15 | C22@61e1bb91 | §15 whole section: Idempotency / Duplicate Protection (single rule) | RULE | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§15) | — |
| 22-§18-5 | C22@61e1bb91 | §18 b5: scheduler job type: sync/reconciliation | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (22-§18-5, consumer SB-P-1.16) | — |
| 21-§4-5 | C21@f4a05d5c | §4 p9: Customer as a bounded external role (purpose-limited participant in customer-credit workflows) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§4-5); U-05 | — |
| 21-§13-2 | C21@f4a05d5c | §13 b2: Customer sees their own order/delivery/credit communication | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§13-2); U-05 | — |
| 21-§14 | C21@f4a05d5c | §14 whole section: Temporary / Purpose-limited Support Access (whole section) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§14-1 to -7); 15-§17 p4 | — |
| 24-§9-1 | C24@0c1dcbb2 | §9 p1: AI receives only the minimum authorized context for the task | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (24-§9-1) | — |
| 24-§9-2 | C24@0c1dcbb2 | §9 b2; b10: possible context sources incl. customer/credit records and payment verification (consumed when owning domain exists) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (24-§9-2); SB-P-1.16 supplies the credit and payment domains | — |
| 9-§6-2 | C9@649c55f3 | §6 p2: preserve meaning and tone for numbers, dates, quantities, credit | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (9-§6-2) | — |
| 9-§9-4 | C9@649c55f3 | §9 b3: clarify unclear whether money is paid or owed | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (9-§9-4) | — |
| 10-§14-4 | C10@5c145ed7 | §14 b4: during WhatsApp failure: payment reconciliation continues | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | I-13 (10-§14-4); A-BP109 | — |
| 12-§4-1 | C12@6d48feff | §4 b1: Basic Voice supports Ledger transaction/credit/repayment input | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (12-§4-1) | — |
| 12-§7-5 | C12@6d48feff | §7 b5: clarify material uncertainty about payment state | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (12-§7-5) | — |
| 12-§7-6 | C12@6d48feff | §7 b6: clarify material uncertainty about credit vs repayment | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (12-§7-6) | — |
| 12-§21-1 | C12@6d48feff | §21 n1: acceptance 1: natural sale/expense/credit/repayment voice input | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (12-§21-1) | — |
| 2-§5-3 | C2@53635557 | §5 b2: data question: who owes more than ₹5,000? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§5-3); 15:FDB-3 | 15:FDB-3 |
| 2-§5-13 | C2@53635557 | §5 b10: advisory question: how can I reduce outstanding credit? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§5-13); 15:FDB-3 | 15:FDB-3 |
| 2-§11-3 | C2@53635557 | §11 b2: cross-feature intelligence: customer credit | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§11-3) | 15:FDB-3 |
| 2-§11-12 | C2@53635557 | §11 b11: cross-feature intelligence: payment verification | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§11-12) | — |
| 2-§12-4 | C2@53635557 | §12 b2: Ledger depth: customer credit | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§12-4) | 15:FDB-3 |
| 2-§12-7 | C2@53635557 | §12 b5: Ledger depth: payment evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§12-7) | — |
| 2-§25-7 | C2@53635557 | §25 b7: acceptance (data questions): credit query | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§25-7) | 15:FDB-3 |
| 4-§3-3 | C4@ce940d25 | §3 b2: morning briefing: outstanding customer/supplier credit requiring awareness | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (4-§3-3) | — |
| 4-§4-6 | C4@ce940d25 | §4 b5: pulse check: payment/credit exceptions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (4-§4-6) | — |
| 4-§5-3 | C4@ce940d25 | §5 b2: night closing: cash/payment awareness | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (4-§5-3) | — |
| 4-§5-4 | C4@ce940d25 | §5 b3: night closing: credit and repayment movement | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (4-§5-4) | — |
| 4-§6-3 | C4@ce940d25 | §6 b2: source of truth: Smart Credit Awareness | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (4-§6-3) | — |
| 4-§6-4 | C4@ce940d25 | §6 b3: source of truth: Payment Verification | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (4-§6-4) | — |
| 4-§11-4 | C4@ce940d25 | §11 b4: action continuation: review a payment match | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (4-§11-4) | — |
| 11-§8-4 | C11@e802745a | §8 b4: cross-feature reuse: Smart Credit Awareness | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (11-§8-4) | — |
| 11-§10-3 | C11@e802745a | §10 b2: consequential action example: mark customer payment received | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; D16; DTX | L-DEL15; I-15 (11-§10-3) | — |
| 5-§5-6 | C5@80ac648e | §5 b6: receipt field: payment information where present | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (5-§5-6) | — |
| 5-§6-1 | C5@80ac648e | §6 p1: originals retained per approved storage/retention policy | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; DUF6 | L-DEL14; I-14 (5-§6-1); U-08 | 14:FPDR-2 |
| 5-§6-2 | C5@80ac648e | §6 p1: originals linked to the relevant business records | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (5-§6-2) | — |
| 25-§6-1 | C25@406ce089 | §6 b12: dependent features include payment/reconciliation evidence | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (25-§6-1) | — |
| 25-§17-1 | C25@406ce089 | §17 p1: exact long-term retention/deletion duration after cancellation/non-payment | UFD | BUILD NOW | CORE-FDN | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DUF6 | I-14 (25-§17-1); BP §15 item 6; U-08 | — |
| 25-§17-5 | C25@406ce089 | §17 b4: legal/compliance retention needs may differ by object/domain | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; DUF6 | L-DEL14; I-14 (25-§17-5); U-08 | — |
| 25-§19-1 | C25@406ce089 | §19 b5: storage protects financial and compliance evidence (protected classes) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (25-§19-1) | — |
| 1-§16 | C1@b392c8cb | §16 whole section: COD and Payment Relationship (reuses shared financial-integrity foundation) | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; I-14 (1-§16); MC101-L2; BP §11 | — |
| 7-§3 | C7@65ad91b2 | §3 whole section: Supplier Management (supplier payment/credit relationship; adjacent workflow) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-12 (7-§3); A-BP106; MC101-L2 | — |
| 13-§10 | C13@4426e8b1 | §10 whole section: Closing Cash (POS cash-count/payment-method variance) | ADJ | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | MC101-L3: adjacent domain, not owned by SB-P-1.16; distinct from C15 evidence matching; shared foundations via 22-§14, 22-§15, 22-§17 rows; owned SB-P-1.17 (BP §9 row 6) | — |
| 17-§4 | C17@7943f74a | §4 whole section: Workspace Layers (lists credit awareness) | CONS | BUILD NOW | MGR+LDG | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17; D16 | I-12 (17-§4); A-BP106; MC101-L3 downstream consumer of SB-P-1.16 data | — |
| 17-§6 | C17@7943f74a | §6 whole section: Financial / Business Summary (outstanding credit; payment/reconciliation state) | CONS | BUILD NOW | MGR+LDG | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17; D16 | I-12 (17-§6); A-BP106; MC101-L3 downstream consumer of SB-P-1.16 data | — |
| 17-§13 | C17@7943f74a | §13 whole section: Users and Permissions (visibility restriction) | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§13-1 to -4); MC101-L2 | — |
| 17-§14 | C17@7943f74a | §14 whole section: Permission Enforcement (backend enforcement) | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-1 to -7); MC101-L2 | — |
| 18-§15 | C18@6b96b10a | §15 whole section: Billing / Payment Provider Independence (subscription billing reconciliation) | ADJ | BUILD NOW | CORE-PLAT | SB-P-1.19 | NOT APPLICABLE | — | MC101-L3: separate adjacent domain (Smart Business's own billing); not merchant-payment ownership; shared idempotency/provider-resilience via 22-§15, 22-§17 | — |
| 18-§18 | C18@6b96b10a | §18 whole section: Error and Exception Behavior (subscription billing ambiguity) | ADJ | BUILD NOW | CORE-PLAT | SB-P-1.19 | NOT APPLICABLE | — | MC101-L3: separate adjacent domain; not merchant-payment ownership | — |
| 19-§15 | C19@94aa6f24 | §15 whole section: Merchant-content Access Boundary (no routine browsing of credit/customer records) | NEG | BUILD NOW within approved scope | INTERNAL | SB-P-1.19 | DELEGATED | D19 | L-DEL19; I-14 (19-§15); 15-§17 p4 | — |
| 20-§11 | C20@56ed4d11 | §11 whole section: First Practical Win (verify/reconcile a payment where applicable) | CONS | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19; D16 | I-12 (20-§11); A-BP108; MC101-L3 downstream consumer | — |
| 20-§12 | C20@56ed4d11 | §12 whole section: First 24-hour Experience (first reminder/credit/payment action) | CONS | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19; D16 | I-12 (20-§12); A-BP108; MC101-L3 downstream consumer | — |
| 23-§16 | C23@2430e1c6 | §16 whole section: Outbound WhatsApp Communication (payment/credit awareness) | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 (BP §9 row 9); MC101-L2 | — |
| 23-§20 | C23@2430e1c6 | §20 whole section: Retry and Idempotency (payment/credit updates) | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109; MC101-L2 | — |
| 23-§21 | C23@2430e1c6 | §21 whole section: WhatsApp Outage / Degradation (payment reconciliation continues) | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109; MC101-L2 | — |
| 1-§5-4 | C1@b392c8cb | §5 b4: <Owner> set/confirm COD amounts | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§5-20 | C1@b392c8cb | §5 b18: <Delivery Staff> COD amount where applicable | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§9-9 | C1@b392c8cb | §9 b8: order draft: payment/COD information | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§9-17 | C1@b392c8cb | §9 b16: clarify when payment/COD amount is inconsistent | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§12-5 | C1@b392c8cb | §12 b5: COD amount reviewed where applicable | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§13-6 | C1@b392c8cb | §13 b5: Delivery Staff record COD collected amount | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§15-6 | C1@b392c8cb | §15 b5: delivery proof includes COD/payment evidence | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§17-7 | C1@b392c8cb | §17 b6: notification: payment/COD exception | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§21-11 | C1@b392c8cb | §21 b11: AI must not create payment facts without evidence | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§22-10 | C1@b392c8cb | §22 b10: business memory: COD/payment evidence/link | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§23-12 | C1@b392c8cb | §23 b12: reuse Payment Verification / Ledger services | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§24-12 | C1@b392c8cb | §24 b12: handle COD mismatch | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§24-14 | C1@b392c8cb | §24 b14: handle payment/linking failure | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§26-11 | C1@b392c8cb | §26 n11: acceptance 11: COD discrepancy remains visible and does not duplicate Ledger revenue | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§26-14 | C1@b392c8cb | §26 n14: acceptance 14: duplicate/retry does not create duplicate order/payment events | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 1-§27-9 | C1@b392c8cb | §27 b9: dependency: Payment Verification / Ledger for financial closure | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | L-DEL18; MC101-L2 (C01 consumes the shared financial-integrity foundation); C14 §13, C15 §15 consumer | — |
| 2-§3-5 | C2@53635557 | §3 b4: <Owner> ask about cash, expenses, credits and other authorized business data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (2-§3-5) | — |
| 2-§20-5 | C2@53635557 | §20 b7: natural business-term mixing (illustrative list incl. 'credit'; grouped p3 + b4–b11 upstream) | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-15 (2-§20-5) | — |
| 11-§4-7 | C11@e802745a | §4 b7: reminder model: related customer/supplier/employee/document/order/credit/compliance object | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; D16 | L-DEL15; I-15 (11-§4-7) | — |
| 11-§9-1 | C11@e802745a | §9 b1: a reminder does not mean the payment happened | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-15 (11-§9-1) | — |
| 11-§9-5 | C11@e802745a | §9 b5: a reminder does not mean the customer paid | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-15 (11-§9-5) | — |
| 11-§9-7 | C11@e802745a | §9 p2: the actual business event is recorded through the governed feature service | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DTX | L-DEL15; I-15 (11-§9-7); SB-P-1.16 is the governed credit/payment service | — |
| 11-§22-6 | C11@e802745a | §22 n6: acceptance 6: reminder due does not create payment/event automatically | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DTX | L-DEL15; I-15 (11-§22-6) | — |
| 12-§9-2 | C12@6d48feff | §9 b6: mixed Kerala business speech (illustrative vocabulary incl. 'credit') | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (12-§9-2) | — |
| 24-§6-2 | C24@0c1dcbb2 | §6 b9: intent classes (illustrative; includes payment/credit query) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (24-§6-2) | — |
| 24-§25-5 | C24@0c1dcbb2 | §25 b4: careful handling of sensitive HR/customer/payment data | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (24-§25-5) | — |
| 17-§10 | C17@7943f74a | §10 whole section: Order & Delivery Views (COD/payment issues) | CONS | BUILD NOW | MGR+LDG | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18; D16 | I-12 (17-§10); A-BP107; MC101-L3 downstream consumer | — |
| 25-§17-4 | C25@406ce089 | §17 b3: cancellation/non-payment must not trigger uncontrolled destructive deletion by a fixed timer | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; DUF6 | L-DEL14; I-14 (25-§17-4); U-08 | — |

## E. Build Plan and Global Product Completion View (73 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| BP-§5.3-1 | BP@9dfdd924 | §5.3 canonical repository vs delivery divergence: mission accounts for delivery path; merge is not production proof | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | — | BP §5.3; delivery sync NOT AUTHORIZED (MC-106 §12) | — |
| BP-§5.4-1 | BP@9dfdd924 | §5.4 genuinely new external infrastructure (payment/bank evidence provider) needs activation, credentials, failure, rollback and verification identified in Blueprint/EIS | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | DPAY | BP §5.4; 22-§17-3; U-06 | — |
| BP-§6.1-1 | BP@9dfdd924 | §6.1 no UI, AI model, reminder, scheduler, document pipeline or channel may invent authority | NEG | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12 | L-NEG; BP §6.1 | — |
| BP-§6.2-1 | BP@9dfdd924 | §6.2 consequential credit/repayment/link writes use the one Business Command path ending in a deterministic domain command, authoritative write and audit | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D13; DTX | BP §6.2; PQ-2 | — |
| BP-§6.3-1 | BP@9dfdd924 | §6.3 Supabase/Postgres remains authoritative for structured business truth | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14 | BP §6.3 | — |
| BP-§6.5-1 | BP@9dfdd924 | §6.5 credit follow-up reuses the one Reminder / Automation kernel | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D15 | BP §6.5; 22-§11-4 | — |
| BP-§8-1 | BP@9dfdd924 | §8 Smart Business must work without WhatsApp: credit and payment flows usable natively | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D13 | BP §8; L-X20 for WhatsApp slices | — |
| BP-§9-2 | BP@9dfdd924 | §9 row 5: SB-P-1.16 advances 'Contract 3 completion', 14, 15 (assignment source) | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | — | I-14 (BP-§9-2); A-BP105 | 14:FPDR-1 |
| BP-§9-AL | BP@9dfdd924 | §9 assignment lock: BUILD NOW assignment changes need a recorded Founder decision; technical incompleteness never authorizes a change | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | — | BP §9; S18 §3.2 item 5 | — |
| BP-§10.3-C2 | BP@9dfdd924 | §10.3 engineering correction: SB-P-1.16 builds customer-credit-specific structures and financial integrity on the mature Ledger | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14 | I-14 (BP-§10.3-C2); A-BP105 | 14:FPDR-1 |
| BP-§10.3-S2 | BP@9dfdd924 | §10.3 Customer/Supplier identities 'established in later missions (SB-P-1.17 / SB-P-1.18)' before directory-indexed search | OBL | BUILD NOW | per contract | SB-P-1.17 / SB-P-1.18 | ESCALATED | D17; D18 | ESCALATED (U-01, T2): conflicts with SB-P-1.12 EIS-ID-03 / FCTM-12 22-§5-5 (customer identity, SB-P-1.12) and C14 §4 (customer credit identity, SB-P-1.16); FCTM-14 3-§15-7 follows this row. Inherited FCTM-14 assignment kept verbatim pending Founder | — |
| BP-§10.5-O | BP@9dfdd924 | §10.5 product outcome: complete credit, repayment, payment evidence and reconciliation without turning uncertainty into false truth | EXP | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D14 | A-BP105 | — |
| BP-§10.5-W1 | BP@9dfdd924 | §10.5 required work area b1: customer-credit-specific records and balances | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; ESC-U01 | NI-CRD; A-BP105 | — |
| BP-§10.5-W2 | BP@9dfdd924 | §10.5 required work area b2: repayment history | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DTX | NI-CRD; NI-LDG4; A-BP105 | — |
| BP-§10.5-W3 | BP@9dfdd924 | §10.5 required work area b3: ageing/follow-up awareness | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; D15 | NI-CRD; U-04; A-BP105 | — |
| BP-§10.5-W4 | BP@9dfdd924 | §10.5 required work area b4: Smart Credit warn-not-block behavior | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12 | NI-CRD; U-03; A-BP105 | — |
| BP-§10.5-W5 | BP@9dfdd924 | §10.5 required work area b5: payment evidence | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; U-06; A-BP105 | — |
| BP-§10.5-W6 | BP@9dfdd924 | §10.5 required work area b6: bank/payment reconciliation | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DPAY; DTX | NI-PAY; A-BP105 | — |
| BP-§10.5-W7 | BP@9dfdd924 | §10.5 required work area b7: deterministic candidate matching | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14 | NI-PAY; A-BP105 | — |
| BP-§10.5-W8 | BP@9dfdd924 | §10.5 required work area b8: ambiguity review | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105 | — |
| BP-§10.5-W9 | BP@9dfdd924 | §10.5 required work area b9: idempotent linking | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105 | — |
| BP-§10.5-W10 | BP@9dfdd924 | §10.5 required work area b10: visible unresolved discrepancies | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; D15 | NI-PAY; U-02; A-BP105 | — |
| BP-§10.5-W11 | BP@9dfdd924 | §10.5 required work area b11: auditable correction/reconciliation decisions | WORK | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D14; DTX | NI-CRD; NI-PAY; A-BP105 | — |
| BP-§10.5-E1 | BP@9dfdd924 | §10.5 Founder-approved experience p1: Smart Credit warns the Owner but does not automatically refuse a sale or customer relatio… | EXP | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12 | A-BP105; S11 Smart Credit Awareness | — |
| BP-§10.5-E2 | BP@9dfdd924 | §10.5 Founder-approved experience p2: Payment evidence may be verified, unmatched, partially matched, or ambiguous | EXP | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DPAY | A-BP105; U-02 ('partially matched' has no C15 §4 counterpart; Stage 3 candidate) | — |
| BP-§10.5-E3 | BP@9dfdd924 | §10.5 Founder-approved experience p3: Ambiguous matches require review | EXP | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D13 | A-BP105 | — |
| BP-§10.5-E4 | BP@9dfdd924 | §10.5 Founder-approved experience p4: Reconciliation cannot duplicate income or repayment | EXP | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DTX | A-BP105; 14:FPDR-1; 14:FPDR-4 | — |
| BP-§10.5-A1 | BP@9dfdd924 | §10.5 Founder Scenario A clause 1: customer has overdue balance; Owner attempts another credit sale | FRV | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105-FRV; U-04 (overdue without due date); Founder-reserved (BP §13 item 9) | — |
| BP-§10.5-A2 | BP@9dfdd924 | §10.5 Founder Scenario A clause 2: shows ageing/risk clearly | FRV | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D14 | NI-CRD; A-BP105-FRV; U-03 (factual risk only; no fabricated score, C14 §3 b7); Founder-reserved | — |
| BP-§10.5-A3 | BP@9dfdd924 | §10.5 Founder Scenario A clause 3: allows the Owner to proceed, override, or decline | FRV | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; DTX | NI-CRD; A-BP105-FRV; Founder-reserved | — |
| BP-§10.5-B1 | BP@9dfdd924 | §10.5 Founder Scenario B clause 1: one payment-evidence item plausibly matches multiple open transactions; candidates shown | FRV | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DPAY | NI-PAY; A-BP105-FRV; Founder-reserved | — |
| BP-§10.5-B2 | BP@9dfdd924 | §10.5 Founder Scenario B clause 2: system requires review | FRV | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D13 | NI-PAY; A-BP105-FRV; Founder-reserved | — |
| BP-§10.5-B3 | BP@9dfdd924 | §10.5 Founder Scenario B clause 3: repeating the confirmed link creates no duplicate financial entries | FRV | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D14; DTX | NI-PAY; A-BP105-FRV; Founder-reserved | — |
| BP-§10.5-X | BP@9dfdd924 | §10.5 exit principle: know who owes what and what was actually paid; never pretend uncertain money is settled or make credit decisions for the Owner | EXP | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D12; D14 | A-BP105 | — |
| BP-§11-1 | BP@9dfdd924 | §11 SB-P-1.16 Financial Integrity underpins COD/payment closure and trustworthy credit/payment behaviour (adapter-ready for SB-P-1.18) | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | D18 | BP §11; A-BP105 | — |
| BP-§11-2 | BP@9dfdd924 | §11 SB-P-1.12 Authority/Identity underpins all later role/permission behaviour | RULE | BUILD NOW | per contract | SB-P-1.12 | DELEGATED | D12 | L-DEL12; BP §11 | — |
| BP-§11-3 | BP@9dfdd924 | §11 SB-P-1.14 Business Memory/UDI underpins later financial integrity | RULE | BUILD NOW | per contract | SB-P-1.14 | DELEGATED | D14 | L-DEL14; BP §11 | — |
| BP-§11-4 | BP@9dfdd924 | §11 SB-P-1.15 Reminder/Automation underpins credit follow-up | RULE | BUILD NOW | per contract | SB-P-1.15 | DELEGATED | D15 | L-DEL15; BP §11 | — |
| BP-§11-5 | BP@9dfdd924 | §11 a later mission may complete a contract partly advanced earlier but must not claim earlier work as newly created | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | — | BP §11; C03 completion | — |
| BP-§13-1 | BP@9dfdd924 | §13 Completion Report includes an Experience Verification Matrix seeded from §10.5 at Stage 4 | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | — | BP §13; process obligation | — |
| BP-§13-9 | BP@9dfdd924 | §13 item 9: §10.5 Founder Runtime Verification scenarios A and B are Founder-reserved and locked at Stage 8 | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | — | BP §13 item 9; S18 §4.2 | — |
| BP-§14-1 | BP@9dfdd924 | §14 dual-intake rule: consume validated OLE learning and the Phase 1 guide until backfill verified complete | RULE | BUILD NOW | per contract | SB-P-1.16 | IN SCOPE | — | BP §14; S18 §3.1; Truth Pack Part E (05-stage2-institutional-learning-intake.md) | — |
| BP-§15-1 | BP@9dfdd924 | §15 unresolved Founder decision item 1: current free-trial policy | UFD | BUILD NOW | per contract | SB-P-1.16 | NOT APPLICABLE | — | Does not concern SB-P-1.16 scope | — |
| BP-§15-2 | BP@9dfdd924 | §15 unresolved Founder decision item 2: exact Voice Plus price | UFD | BUILD NOW | per contract | SB-P-1.16 | NOT APPLICABLE | — | Does not concern SB-P-1.16 scope | — |
| BP-§15-3 | BP@9dfdd924 | §15 unresolved Founder decision item 3: exact Staff/HR price | UFD | BUILD NOW | per contract | SB-P-1.16 | NOT APPLICABLE | — | Does not concern SB-P-1.16 scope | — |
| BP-§15-4 | BP@9dfdd924 | §15 unresolved Founder decision item 4: exact Smart Stock price | UFD | BUILD NOW | per contract | SB-P-1.16 | NOT APPLICABLE | — | Does not concern SB-P-1.16 scope | — |
| BP-§15-5 | BP@9dfdd924 | §15 unresolved Founder decision item 5: exact Smart Order & Delivery price | UFD | BUILD NOW | per contract | SB-P-1.16 | NOT APPLICABLE | — | Does not concern SB-P-1.16 scope | — |
| BP-§15-6 | BP@9dfdd924 | §15 unresolved Founder decision item 6: exact long-term retention/deletion duration after cancellation/non-payment | UFD | BUILD NOW | per contract | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DUF6 | BP §15 item 6; I-13/I-14 (owner SB-P-1.19); not on SB-P-1.16 product-definition critical path for non-destructive evidence retention (INF, Mission Control to confirm); U-08 | — |
| BP-§15-7 | BP@9dfdd924 | §15 unresolved Founder decision item 7: employee KYC/national-ID necessity and legal/privacy basis | UFD | BUILD NOW | per contract | SB-P-1.16 | NOT APPLICABLE | — | Does not concern SB-P-1.16 scope | — |
| BP-§15-8 | BP@9dfdd924 | §15 unresolved Founder decision item 8: broader wholesaler/marketplace expansion | UFD | BUILD NOW | per contract | SB-P-1.16 | NOT APPLICABLE | — | Does not concern SB-P-1.16 scope | — |
| BP-§15-9 | BP@9dfdd924 | §15 unresolved Founder decision item 9: third-party underwriting/lending ecosystem | UFD | BUILD NOW | per contract | SB-P-1.16 | UNRESOLVED FOUNDER DECISION | — | BP §15 item 9; GPCV §9 REJECT FOR CURRENT CORE; C14 §21 b2; not on SB-P-1.16 critical path (U-10) | — |
| BP-§16-1 | BP@9dfdd924 | §16 rejection b1: Ask CFO as write-capable authority | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-2 | BP@9dfdd924 | §16 rejection b2: AI accusation/judgment of employees or customers | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-3 | BP@9dfdd924 | §16 rejection b3: continuous staff GPS surveillance by default | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-4 | BP@9dfdd924 | §16 rejection b4: automated wage punishment | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-5 | BP@9dfdd924 | §16 rejection b5: blind supplier procurement without valid Owner delegation | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-6 | BP@9dfdd924 | §16 rejection b6: hard credit blocking by default | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-7 | BP@9dfdd924 | §16 rejection b7: custom client-specific POS modification inside core | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-8 | BP@9dfdd924 | §16 rejection b8: marketplace behavior inside Smart Order & Delivery | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-9 | BP@9dfdd924 | §16 rejection b9: customer silence automatically invalidating otherwise sufficiently proven delivery | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-10 | BP@9dfdd924 | §16 rejection b10: duplicate channel-specific Business Memory | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-11 | BP@9dfdd924 | §16 rejection b11: duplicate channel-specific permission models | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-12 | BP@9dfdd924 | §16 rejection b12: separate AI brains per feature/channel | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-13 | BP@9dfdd924 | §16 rejection b13: model conversation history as permanent Business Memory | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-14 | BP@9dfdd924 | §16 rejection b14: uncontrolled binary-media concentration in Supabase for convenience | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-15 | BP@9dfdd924 | §16 rejection b15: provider URLs as permission authority/business identity | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-16 | BP@9dfdd924 | §16 rejection b16: destructive subscription-driven schema creation/deletion | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-17 | BP@9dfdd924 | §16 rejection b17: broad routine Super Admin access to merchant private data | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-18 | BP@9dfdd924 | §16 rejection b18: revival of '/survey' or obsolete domains/routes | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-19 | BP@9dfdd924 | §16 rejection b19: old Daily Intelligence timing that conflicts with the approved 7:00 AM / 10:30 AM / 10:00… | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-20 | BP@9dfdd924 | §16 rejection b20: independent Catalog product expansion | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| GPCV-§9-1 | GPCV@ee76d920 | §9 automatic hard customer-credit blocking by default — REJECT | REJ | REJECT | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | GPCV §9 (REJECT verbatim; must-not-appear; same behaviour as BP-§16-6, 14-§21-1) | — |
| GPCV-§9-10 | GPCV@ee76d920 | §9 embedded lending/underwriting inside current Smart Business core — REJECT FOR CURRENT CORE | REJ | REJECT FOR CURRENT CORE | REJECT | SB-P-1.16 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear); BP-§15-9 broader ecosystem unresolved | — |

## F. Totals

**Total rows: 555.**

| Part | Rows | IN SCOPE | DELEGATED | ASSIGNED TO LATER MISSION | NOT APPLICABLE | OUT OF BUILD SCOPE | UNRESOLVED FOUNDER DECISION | ESCALATED |
|---|---|---|---|---|---|---|---|---|
| A. Contract 14 | 151 | 141 | 0 | 1 | 9 | 0 | 0 | 0 |
| B. Contract 15 | 172 | 160 | 0 | 1 | 11 | 0 | 0 | 0 |
| C. Contract 03 | 68 | 5 | 54 | 7 | 2 | 0 | 0 | 0 |
| D. Delegates | 91 | 5 | 72 | 10 | 3 | 0 | 1 | 0 |
| E. Build Plan / GPCV | 73 | 38 | 3 | 0 | 7 | 22 | 2 | 1 |
| **Total** | **555** | **349** | **129** | **19** | **32** | **22** | **3** | **1** |

| Owning mission | Rows |
|---|---|
| SB-P-1.16 | 398 |
| SB-P-1.14 | 61 |
| SB-P-1.15 | 28 |
| SB-P-1.18 | 20 |
| SB-P-1.13 | 11 |
| SB-P-1.12 | 10 |
| SB-P-1.19 | 7 |
| SB-P-1.20 | 7 |
| SB-P-1.17 | 6 |
| SB-P-1.14 and others per FCTM-14 | 3 |
| SB-P-1.17 / SB-P-1.18 | 3 |
| SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | 1 |

| Kind | Rows |
|---|---|
| `OBL` | 246 |
| `NEG` | 66 |
| `RULE` | 66 |
| `SCN` | 55 |
| `REJ` | 22 |
| `SEC` | 18 |
| `PRIN` | 16 |
| `NARR` | 14 |
| `WORK` | 11 |
| `UFD` | 10 |
| `EXP` | 8 |
| `FRV` | 6 |
| `CONS` | 5 |
| `HIST` | 4 |
| `ADJ` | 3 |
| `GATE` | 3 |
| `PROV` | 2 |

**Escalated row:** `BP-§10.3-S2`. **Rows blocked by it (`ESC-U01`):** 19 — `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-1`, `14-§13-1`, `14-§18-1`, `14-§20-2`, `14-§22-1`, `14-§22-3`, `15-§7-5`, `15-§14-3`, `15-§23-2`, `15-§25-6`, `3-§9-12`, `22-§5-5`, `BP-§10.5-W1`.

**Unresolved Founder decision rows:** `25-§17-1`, `BP-§15-6`, `BP-§15-9`. None is judged on the SB-P-1.16 product-definition critical path; Mission Control confirmation requested (Truth Pack Part D, U-08 and U-10).

**STOP FOR MISSION CONTROL STAGE 2 REVIEW. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
