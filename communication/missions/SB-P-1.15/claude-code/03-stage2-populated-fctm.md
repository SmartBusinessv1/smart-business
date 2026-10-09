# SB-P-1.15 — Stage 2 Populated FCTM

**Mission:** SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO  
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation (Section 3.2, Section 6)  
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`  
**Prepared by:** Claude Code, appointed Definition Actor (SB-P-1.15-MC-03), under SB-P-1.15-MC-05  
**Baseline:** `main@eacc46104b43b4db137693ab5e84728da14a249c`, 2026-10-09  
**Opened by:** `mission-control/03-stage1-fctm-open.md` (Stage 1 canonical, MC-03)

This matrix is an accounting of approved truth. It adds no product decision and reopens no approved decision. Requirement text lives only in the source contracts; rows hold pointers, dispositions and citations. The independent obligation inventory is `04-stage2-obligation-inventory.md`. Derived constraints (`DC-nn`) are in `02-stage2-mission-truth-pack.md` Part 2. Delta items (`Δ-nn`) are in `06-stage2-delta-evidence.md`.

Upstream FCTM statuses are inherited as assignments only. **No upstream row, locked specification or earlier FCTM status is treated as evidence of implemented or verified runtime behaviour.**

## 0. How to read this matrix

### 0.1 Columns

| Column | Meaning |
|---|---|
| Row ID | `<contract>-§<section>-<ordinal>`. A whole-section row has no ordinal. Build Plan rows use `BP-§<section>-<suffix>`. Suffix `a`/`b` splits one acceptance item across two owning missions; both slices cite the same source item. Upstream identifiers are preserved exactly where a row is inherited (Section 0.8). |
| Source @ blob | Source code and the first eight characters of the blob SHA at the baseline (full SHAs in Section 0.4). |
| Exact source pointer | Section, subsection where present, and the parser locator (`b<k>` k-th bullet, `n<k>` k-th numbered item, `p<k>` k-th prose paragraph, counted within the section), followed by a short label. The label is a pointer, not requirement text. |
| Kind | `OBL` obligation; `NEG` must-not check; `RULE` architectural rule; `PRIN` principle; `SCN` acceptance item or worked example; `EXP` approved experience or outcome; `FRV` Founder Runtime Verification scenario part; `WORK` Build Plan work area; `REJ` Build Plan §16 rejection; `ENGQ` engineering question the Blueprint/EIS must answer; `NARR`, `HIST`, `PROV`, `DEP`, `GATE` narrative, history, provenance, dependency-list or completion-gate content. |
| Build commitment | Global Product Completion View value, preserved verbatim. |
| Commercial | Commercial classification (Section 0.3). |
| Owning mission | The mission that owns the obligation under an approved source. |
| Disposition | Source 18 Section 3.2 item 3 vocabulary only. |
| Dependency | Dependency code (Section 0.5). |
| Evidence / citation | Implementation-evidence code and disposition citation (Section 0.6). |
| Founder decision | Founder Decision ID where a row rests on one. In this column `FPDR-1` always means **SB-P-1.12 `FPDR-1`** (Shared Notification Foundation). SB-P-1.14's different `FPDR-1` (four-state Ledger / customer-credit boundary) is cited in the Evidence column as `SB-P-1.14 FPDR-1`. `FDB-n` marks a row touched by an open issue in `founder/01-stage2-decision-brief.md`; it records no decision and changes no disposition. `U-n` marks an unresolved item. |

### 0.2 Disposition use in this mission

- `IN SCOPE` — `BUILD NOW` in SB-P-1.15 and to be demonstrated here. **No row is `ALREADY DEMONSTRATED`.** Nothing in scope has accepted runtime evidence; existing repository surfaces are reuse evidence only (Delta file).
- `ASSIGNED TO LATER MISSION` — always cites an approved assignment source: Build Plan Sections 9–12, a contract's own text, or a canonical upstream FCTM. The row stays `BUILD NOW`. Used here only for WhatsApp-channel slices (SB-P-1.20), Voice Plus slices (SB-P-1.19), adapter slices owned by other missions, and later-mission reuse seams.
- `DELEGATED` — owned by another contract or upstream mission (SB-P-1.12 for Contracts 21 and 22 §§5, 6, 13, 14, 15, 20, 23 parts and 33; SB-P-1.13 for Contract 22 §§7, 8, 24, 25 and kernel rows; SB-P-1.14 for Contract 22 §§4, 9, 10 and Ledger rows). SB-P-1.15 consumes the locked specification and never treats it as demonstrated.
- `NOT APPLICABLE` — narrative, provenance, completion-gate or dependency-list content, or a section this mission does not touch, each with a reason.
- `OUT OF BUILD SCOPE` — Build Plan §16 `REJECT` items, checked as "must not appear".
- `UNRESOLVED FOUNDER DECISION` — only Build Plan §15 item 6 (U-5); not on this mission's critical path.
- `ESCALATED` — **no row.** Stage 3 candidates (Δ-04, DC-01, DC-02) are reported in the Truth Pack Part 4 and the draft decision brief. No row is changed to resolve them.

A row whose obligation cannot be built or demonstrated until an upstream or later dependency exists stays `IN SCOPE`; its Dependency column names the blocker (Source 18 Section 3.2 item 5). **No row has been moved because of a dependency.**

**One inherited row is held, not reassigned.** `20-§23-10` keeps the SB-P-1.12 FCTM assignment verbatim (`SB-P-1.19/SB-P-1.15`) with the marker `HELD: ALLOCATION UNRESOLVED (U-3)`. It is neither moved nor suppressed (MC-05 §2). Its base disposition is counted under `ASSIGNED TO LATER MISSION`.

### 0.3 Commercial classification codes

| Code | Source |
|---|---|
| `CORE-LM` | Core, Ledger + Manager (Contract 2 header "Smart Business Ledger + Smart Business Manager"; Contract 4 header; Contract 3; Contract 12 Basic Voice) |
| `CORE-FDN` | Core shared foundation (Contract 11 header "Ledger + Manager core/shared foundation", GPCV row 11; Contracts 9 and 21) |
| `CORE-ARCH` | Core cross-product architecture (Contract 22; GPCV row 22) |
| `CORE-INT` | Core shared intelligence foundation (Contract 24) |
| `CORE-CH` | Core shared channel (Contract 10) |
| `MGR+LDG` | Contract 17 (Manager core; role-appropriate Ledger surfaces) |
| `ACT` | Contract 20 activation |
| `per contract` | Build Plan rows inherit the classification of the contract family they govern |
| `REJECT` | Build Plan §16 rejection |

### 0.4 Sources and blobs at the baseline

All blobs verified with `git rev-parse main@eacc4610:<path>`. Every blob equals the Stage 1 manifest; no source drifted.

| Code | Path (under `docs/phase-1-mission-blueprint/smart-business-features/` unless stated) | Blob |
|---|---|---|
| `C2` | `02_Ask_CFO.md` | `53635557fb2907e0e9011613511c9f34b8548edf` |
| `C4` | `04_Daily_Intelligence_Rhythm.md` | `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd` |
| `C11` | `11_Smart_Reminder_and_Delegated_Automation.md` | `e802745a93c3bacaebba5099aacfadbe52212bc8` |
| `C22` | `22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| `C21` | `21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| `C24` | `24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| `C9` | `09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| `C10` | `10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| `C12` | `12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| `C3` | `03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| `C17` | `17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| `C20` | `20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` |
| `BP` | `00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| `GPCV` | `00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| `FCTM-12` | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| `FCTM-13` | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` | `97ddc752dcbbdb6586110a782ef1e24405b6dd22` |
| `FCTM-14` | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` | `01e9856aca0afdb1267230a1932fe34054449a4b` |
| `FPDR-12` | `communication/missions/SB-P-1.12/founder/03-stage3-founder-product-decision-record.md` | `6f1a35e9ab93af6a2b7217edaafd12c5e4f77c1a` |
| `FPDR-14` | `communication/missions/SB-P-1.14/founder/02-stage3-founder-product-decision-record.md` | `9717b29dbe08b6d115f512a90450c528d5212773` |

### 0.5 Dependency codes

| Code | Dependency | State at this baseline |
|---|---|---|
| `—` | None beyond this mission | — |
| `D12` | SB-P-1.12 authority kernel: principal, active business, role defaults, capability registry (Ask CFO as a distinct Owner-default capability, EIS-KER-07), isolation, command-only write boundary, confirmation binding, revalidation, audit | Specification locked; Implementation Authorization WITHHELD; not implemented |
| `D13` | SB-P-1.13 Conversation/AI kernel: Workspace, channel-neutral entry, AI gateway, typed tools and frozen proposals, Human Language Layer, Basic Voice, reminder-draft seam (`24-§13-1`) | Specification locked; Implementation Authorization WITHHELD; not implemented |
| `D14` | SB-P-1.14 Business Memory: four-state Ledger (income, expense, credit, repayment), Ledger read model, documents, UDI status | Specification locked; Implementation Authorization WITHHELD; not implemented |
| `DTX` | The one governed transactions-family write path (SB-P-1.12 WS-A3, SB-P-1.13 EIS13-CMD-02, SB-P-1.14 WS-A; PQ-2). A reminder or Ask CFO continuation never creates a second protected write path | Coordinated cut-over undecided; migration NOT AUTHORIZED |
| `DAI` | AI provider behind the SB-P-1.13 gateway, for Ask CFO reasoning and Daily Intelligence explanation | No AI code in the repository; provider configuration `UNVERIFIED — ACCESS REQUIRED`; activation NOT AUTHORIZED |
| `DSCH` | Scheduler / background-job runtime and per-business timezone source | No scheduler, cron or job runtime in the repository (Δ-01); no timezone field (Δ-02); runtime availability `UNVERIFIED — ACCESS REQUIRED`; activation NOT AUTHORIZED |
| `DNTF` | Approved outbound channel or provider beyond in-app surfaces | None evidenced before SB-P-1.20 in approved product sources (U-1, DC-01); not inferred |
| `D16`, `D17`, `D18` | SB-P-1.16 customer-credit maturity and payment evidence; SB-P-1.17 stock, supplier, reorder, POS; SB-P-1.18 orders/delivery, Staff/HR, Compliance | Not started |
| `D19` | SB-P-1.19 onboarding, lifecycle, support completion, Voice Plus | Not started |
| `D20` | SB-P-1.20 WhatsApp adapter and channel verification | Not started |
| `DUF6` | Build Plan §15 item 6 (retention after cancellation/non-payment) | Open; not on this mission's critical path (U-5) |

Several codes in one cell are separated by `;`.

### 0.6 Evidence and citation codes

| Code | Meaning |
|---|---|
| `NI-ACFO` | Not implemented: Ask CFO is a "coming soon" dashboard card only (Δ-05) |
| `NI-DI` | Not implemented: no Daily Intelligence computation, schedule or surface (Δ-01) |
| `NI-REM` | Not implemented: no reminder model, engine or surface (Δ-01) |
| `NI-AUTO` | Not implemented: no standing-rule (delegated automation) model |
| `NI-SCH` | Not implemented: no scheduler or background-job runtime (Δ-01) |
| `NI-NTF` | Not implemented: no notification foundation; `transaction_correction_events.notification_status` has no consumer in the repository (Δ-03) |
| `NI-TZ` | Not implemented: no business timezone field (Δ-02) |
| `A-BP104` | Build Plan Section 9 row 4 lists the contract for SB-P-1.15 and Section 10.4 names the work area |
| `A-BP104-FRV` | Build Plan Section 10.4 Founder Runtime Verification scenarios |
| `A-BP105` to `A-BP109` | Build Plan Section 9 rows and Sections 10.5 to 10.9 for SB-P-1.16 to SB-P-1.20 |
| `A-FPDR12-1` | SB-P-1.12 Founder decision `FPDR-1`: distinct Shared Notification Foundation workstream within SB-P-1.15 |
| `I-12`, `I-13`, `I-14` | Assignment inherited from the canonical SB-P-1.12, SB-P-1.13 or SB-P-1.14 FCTM (blobs in Section 0.4) |
| `L-DEL12`, `L-DEL13`, `L-DEL14`, `L-DEL21` | Owned by SB-P-1.12, SB-P-1.13 or SB-P-1.14, or Contract 21 (wholly SB-P-1.12, Build Plan §9 row 1); consumed as specification |
| `L-X20` | The native slice is demonstrated here; the WhatsApp-channel slice belongs to SB-P-1.20 (Build Plan §9 row 9) |
| `L-VP19` | Voice Plus slice belongs to SB-P-1.19 (Build Plan §9 row 8, 12A) |
| `L-ILL` | The source presents an illustrative list; one row (named in the inventory) |
| `L-NEG` | Contract's own non-goal or must-not, checked as "must not appear" in this mission's deliverable |
| `L-ENGQ` | Engineering question from Contract 2 §29; the Blueprint (Sections 20–21) or EIS must answer it without changing Product Truth |
| `L-NARR`, `L-HIST`, `L-PROV`, `L-GATE`, `L-DEP` | Narrative, history, provenance, completion-gate or dependency-list content |
| `EIS-KER-07` | Locked SB-P-1.12 EIS requirement (specification only, blob `c444f750`) |
| `Δ-nn` | Delta item in `06-stage2-delta-evidence.md` |
| `DC-nn` | Derived constraint in `02-stage2-mission-truth-pack.md` Part 2 (not Product Truth) |

### 0.7 Expansion method

Every numbered section of Contracts 2, 4, 11 and 22 has at least one row. A section is a single row only when the whole section has one non-`IN SCOPE` disposition with one citation. Every other section is expanded: each bullet and numbered item is its own row, and each prose paragraph is either its own row or a declared lead-in (framing sentence, list introduction or example label). Lead-ins are listed in the inventory. Grouping is used for exactly four blocks, each named in the inventory: `2-§2-9` (the stated goal, p2–p5), `2-§17-1` (the worked example dialogue, p2–p10), `2-§18-1` (the continuation offer and its example wording, p1–p2) and `2-§20-5` (the illustrative business-term list, p3 and b4–b11). Each acceptance item has its own row.

### 0.8 Identifier preservation and expansion of inherited section rows

Upstream IDs are kept exactly. Five upstream whole-section rows became `IN SCOPE` here, so Source 18 §3.2 item 2 requires obligation-level rows. They are expanded under the same prefix: `22-§11` → `22-§11-*`, `22-§18` → `22-§18-*`, `24-§12` → `24-§12-*`, `24-§16` → `24-§16-*`, `17-§11` → `17-§11-*`. Section-level `DELEGATED` rows that upstream missions held for primary Contracts 2, 4 and 11 (`2-§7`, `2-§14`, `2-§15`, `4-§6`, `11-§5`, `11-§15`) are rebuilt from the contract text as item rows. **`22-§12-1` to `22-§12-9` keep FPDR-1's nine identifiers exactly; no tenth row was added.** `22-§19-8` is a new identifier for the §19 product-wide rule so that the SB-P-1.13/1.14 numbering `22-§19-1` to `22-§19-7` is unchanged.

## A. Contract 2 — Ask CFO (full mission-assigned contract)

282 rows: 269 `IN SCOPE`, 11 `ASSIGNED TO LATER MISSION`, 2 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 2-§1 | C2@53635557 | §1 Founder Problem Statement (whole section) | NARR | BUILD NOW | CORE-LM | SB-P-1.15 | NOT APPLICABLE | — | L-NARR; question examples realized by 2-§5-*, BP-§10.4-B1 | — |
| 2-§2-1 | C2@53635557 | §2 b1: AI Assistant, Not AI Judge | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-2 | C2@53635557 | §2 b2: Truth should create clarity, not fear | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-3 | C2@53635557 | §2 b3: Human decision ownership remains final | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-4 | C2@53635557 | §2 b4: Explain in language the merchant can understand | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-5 | C2@53635557 | §2 b5: Do not fabricate certainty | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-6 | C2@53635557 | §2 b6: Do not shame the Owner | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-7 | C2@53635557 | §2 b7: Do not accuse employees, suppliers, or customers | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-8 | C2@53635557 | §2 b8: When showing a problem, help the Owner understand a useful next step | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§2-9 | C2@53635557 | §2 p2–p5: stated goal (merchant understanding, not AI display) | EXP | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§3-1 | C2@53635557 | §3 Owner — p1: Default Ask CFO user | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-2 | C2@53635557 | §3 Owner — b1: ask natural business questions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-3 | C2@53635557 | §3 Owner — b2: receive business analytics | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-4 | C2@53635557 | §3 Owner — b3: compare time periods | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-5 | C2@53635557 | §3 Owner — b4: ask about cash, expenses, credits, stock, supplier history, operations, and other authorized bu… | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D16; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§3-6 | C2@53635557 | §3 Owner — b5: continue a business discussion | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-7 | C2@53635557 | §3 Owner — b6: receive suggestions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-8 | C2@53635557 | §3 Owner — b7: request or accept reminders linked to an Ask CFO conversation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-9 | C2@53635557 | §3 Manager — p3: Ask CFO access is not automatic merely because a person has a Manager role | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec); DC-06 | — |
| 2-§3-10 | C2@53635557 | §3 Manager — p4: Any delegated intelligence access must follow explicit Owner permission and current Product Tru… | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec); DC-06 | — |
| 2-§3-11 | C2@53635557 | §3 Employee — b8: no Ask CFO access | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-12 | C2@53635557 | §3 Employee — b9: no profit intelligence | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-13 | C2@53635557 | §3 Employee — b10: no Owner analytics | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-14 | C2@53635557 | §3 Employee — b11: no unrestricted business-level financial reasoning | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-15 | C2@53635557 | §3 Employee — p6: Employee operational access must not become a path to Ask CFO data | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-16 | C2@53635557 | §3 Supplier — p7: No Ask CFO access | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-17 | C2@53635557 | §3 Customer — p8: No Ask CFO access | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§3-18 | C2@53635557 | §3 Delivery Staff — p9: No Ask CFO access | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; EIS-KER-07 (spec) | — |
| 2-§4-1 | C2@53635557 | §4 p1: Ask CFO should feel conversational | EXP | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-2 | C2@53635557 | §4 p2: The merchant asks a normal question instead of building a report or choosing an accounting filt… | EXP | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-3 | C2@53635557 | §4 p4: How is my business this week? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-4 | C2@53635557 | §4 n1: identify what data is relevant | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-5 | C2@53635557 | §4 n2: use only authorized merchant data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-6 | C2@53635557 | §4 n3: calculate or retrieve facts correctly | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-7 | C2@53635557 | §4 n4: distinguish facts from interpretation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-8 | C2@53635557 | §4 n5: explain the answer simply | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-9 | C2@53635557 | §4 n6: identify useful observations | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§4-10 | C2@53635557 | §4 n7: suggest next checks or actions without taking control | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-1 | C2@53635557 | §5 5.1 Data Questions — p2: Questions that can be answered directly from reliable business data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-2 | C2@53635557 | §5 5.1 Data Questions — b1: What were my expenses this week? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-3 | C2@53635557 | §5 5.1 Data Questions — b2: Who owes more than ₹5,000? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; DC-02; SB-P-1.14 FPDR-1 (authoritative owed balance, 3-§9-12 → SB-P-1.16) | FDB-3 |
| 2-§5-4 | C2@53635557 | §5 5.1 Data Questions — b3: Which expense category increased the most? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-5 | C2@53635557 | §5 5.1 Data Questions — b4: Which products expire this week? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§5-6 | C2@53635557 | §5 5.1 Data Questions — b5: How much did bakery sales change compared with last week? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-7 | C2@53635557 | §5 5.1 Data Questions — p4: Where possible, these should use deterministic/database-grounded calculations rather than unnec… | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-8 | C2@53635557 | §5 5.2 Advisory Questions — p5: Questions requiring interpretation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-9 | C2@53635557 | §5 5.2 Advisory Questions — b6: Why might profit be lower this month? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-10 | C2@53635557 | §5 5.2 Advisory Questions — b7: What should I check first? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-11 | C2@53635557 | §5 5.2 Advisory Questions — b8: Is there a business risk in this pattern? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-12 | C2@53635557 | §5 5.2 Advisory Questions — b9: Can I safely consider a large stock purchase? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§5-13 | C2@53635557 | §5 5.2 Advisory Questions — b10: How can I reduce outstanding credit? | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; DC-02; SB-P-1.14 FPDR-1 (authoritative owed balance, 3-§9-12 → SB-P-1.16) | FDB-3 |
| 2-§5-14 | C2@53635557 | §5 5.2 Advisory Questions — b11: authorized merchant data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-15 | C2@53635557 | §5 5.2 Advisory Questions — b12: approved business rules | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-16 | C2@53635557 | §5 5.2 Advisory Questions — b13: AI reasoning | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-17 | C2@53635557 | §5 5.2 Advisory Questions — b14: clearly stated assumptions and uncertainty | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§5-18 | C2@53635557 | §5 5.2 Advisory Questions — p8: AI advice is not a business command | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§6-1 | C2@53635557 | §6 p1: Ask CFO must never invent business facts to make an answer sound complete | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§6-2 | C2@53635557 | §6 p2: If required data is unavailable, it should say so clearly | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§6-3 | C2@53635557 | §6 p4: I can compare your recorded sales and expenses, but I do not have enough walk-in/customer-count… | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§6-4 | C2@53635557 | §6 p5: The system may then explain what information would improve the answer | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§7-1 | C2@53635557 | §7 p1: Ask CFO is a read-only intelligence capability by default | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-2 | C2@53635557 | §7 p2: It may retrieve and analyse authorized data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§7-3 | C2@53635557 | §7 p3: It must not gain destructive database authority through natural-language prompts | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-4 | C2@53635557 | §7 p4: Current canonical implementation rules prohibit destructive/write SQL classes for Ask CFO | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; Δ-08 | — |
| 2-§7-5 | C2@53635557 | §7 b1: delete business records | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-6 | C2@53635557 | §7 b2: alter schemas | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-7 | C2@53635557 | §7 b3: rewrite transactions | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-8 | C2@53635557 | §7 b4: change payroll | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-9 | C2@53635557 | §7 b5: manipulate attendance | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-10 | C2@53635557 | §7 b6: modify stock merely because a question was asked | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-11 | C2@53635557 | §7 b7: create financial commitments without an approved action workflow | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§7-12 | C2@53635557 | §7 p6: If the Owner wants an operational action, that action should move through the relevant authoriz… | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-ACFO; A-BP104 | — |
| 2-§8-1 | C2@53635557 | §8 b1: explain | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-2 | C2@53635557 | §8 b2: calculate | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-3 | C2@53635557 | §8 b3: compare | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-4 | C2@53635557 | §8 b4: summarize | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-5 | C2@53635557 | §8 b5: identify patterns | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-6 | C2@53635557 | §8 b6: identify risks | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-7 | C2@53635557 | §8 b7: suggest options | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-8 | C2@53635557 | §8 b8: recommend what to review | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-9 | C2@53635557 | §8 b9: surface opportunities | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-10 | C2@53635557 | §8 b10: offer reminder continuation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104 | — |
| 2-§8-11 | C2@53635557 | §8 b11: make final business decisions | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-12 | C2@53635557 | §8 b12: tell the Owner that an employee is guilty of theft/fraud | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-13 | C2@53635557 | §8 b13: automatically punish staff | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-14 | C2@53635557 | §8 b14: block an Owner's business decision merely because AI predicts risk | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-15 | C2@53635557 | §8 b15: claim certainty where evidence is incomplete | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§8-16 | C2@53635557 | §8 b16: impersonate a chartered accountant, legal advisor, or statutory authority when not authorized | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§9-1 | C2@53635557 | §9 p1: A major Founder philosophy from planning-origin discussions is that Ask CFO should tell the tru… | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§9-2 | C2@53635557 | §9 p4: Your business is performing badly. You are losing control | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§9-3 | C2@53635557 | §9 p6: Expenses increased faster than sales this week. The biggest change is in supplier purchases. It… | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§9-4 | C2@53635557 | §9 b1: state the fact | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§9-5 | C2@53635557 | §9 b2: explain why it matters | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§9-6 | C2@53635557 | §9 b3: avoid fear | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§9-7 | C2@53635557 | §9 b4: avoid blame | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§9-8 | C2@53635557 | §9 b5: provide a useful next step | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104 | — |
| 2-§10-1 | C2@53635557 | §10 p1: Ask CFO should respect the Smart Business Human Context principle | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§10-2 | C2@53635557 | §10 p2: Raw data may be incomplete without Owner context | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§10-3 | C2@53635557 | §10 b1: an employee is late because the Owner sent them to market | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§10-4 | C2@53635557 | §10 b2: low stock is intentional | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§10-5 | C2@53635557 | §10 b3: a large expense is a planned festival purchase | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§10-6 | C2@53635557 | §10 b4: an unusual discount was authorized for a customer relationship | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§10-7 | C2@53635557 | §10 p4: Ask CFO may identify the observable pattern, but should allow Owner context to change interpret… | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§11-1 | C2@53635557 | §11 p1: Ask CFO should be capable of reasoning over approved data from relevant Smart Business features… | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§11-2 | C2@53635557 | §11 b1: Ledger transactions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§11-3 | C2@53635557 | §11 b2: customer credit | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D16 | NI-ACFO; A-BP104; DC-02; DC-05; SB-P-1.14 FPDR-1 (authoritative owed balance, 3-§9-12 → SB-P-1.16) | FDB-3 |
| 2-§11-4 | C2@53635557 | §11 b3: receipt/document memory | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§11-5 | C2@53635557 | §11 b4: stock | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§11-6 | C2@53635557 | §11 b5: suppliers | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§11-7 | C2@53635557 | §11 b6: POS-connected activity | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§11-8 | C2@53635557 | §11 b7: reminders | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; DSCH | NI-ACFO; A-BP104 | — |
| 2-§11-9 | C2@53635557 | §11 b8: orders/deliveries | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D18 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§11-10 | C2@53635557 | §11 b9: attendance/HR information where Owner is authorized | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D18 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§11-11 | C2@53635557 | §11 b10: Daily Intelligence history | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; DSCH | NI-ACFO; A-BP104 | — |
| 2-§11-12 | C2@53635557 | §11 b11: payment verification | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D16 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§11-13 | C2@53635557 | §11 b12: other current approved business-memory sources | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; DC-05 | — |
| 2-§11-14 | C2@53635557 | §11 p3: Ask CFO must not create separate duplicate data truth | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§11-15 | C2@53635557 | §11 p4: It reads from the shared Business Memory and approved systems | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-1 | C2@53635557 | §12 p1: Ask CFO exists in both subscriptions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-2 | C2@53635557 | §12 p2: The answer depth naturally depends on what approved data/capabilities exist for the merchant | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-3 | C2@53635557 | §12 Ledger — b1: income/expenses | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-4 | C2@53635557 | §12 Ledger — b2: customer credit | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D16 | NI-ACFO; A-BP104; DC-02; SB-P-1.14 FPDR-1 (authoritative owed balance, 3-§9-12 → SB-P-1.16) | FDB-3 |
| 2-§12-5 | C2@53635557 | §12 Ledger — b3: documents | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-6 | C2@53635557 | §12 Ledger — b4: reminders | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-7 | C2@53635557 | §12 Ledger — b5: payment evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D16 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§12-8 | C2@53635557 | §12 Ledger — b6: other enabled Ledger add-ons | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D18 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§12-9 | C2@53635557 | §12 Manager — b7: stock intelligence | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§12-10 | C2@53635557 | §12 Manager — b8: supplier/reorder data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§12-11 | C2@53635557 | §12 Manager — b9: POS activity | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§12-12 | C2@53635557 | §12 Manager — b10: operational dashboard data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-13 | C2@53635557 | §12 Manager — b11: deeper business analytics | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§12-14 | C2@53635557 | §12 Manager — b12: counter activity observations | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§12-15 | C2@53635557 | §12 Manager — p5: The system should not fabricate Manager-only insight for a Ledger merchant who does not have th… | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§13-1 | C2@53635557 | §13 p1: Ask CFO is not limited to a dashboard widget | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; realized natively by 2-§14-* | — |
| 2-§13-2 | C2@53635557 | §13 p2: WhatsApp is an approved conversation channel | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D12; D13; D14; DAI; D20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-3 | C2@53635557 | §13 b1: text | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D12; D13; D14; DAI; D20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-4 | C2@53635557 | §13 b2: voice | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D12; D13; D14; DAI; D20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-5 | C2@53635557 | §13 b3: approved image/document context where relevant | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D12; D13; D14; DAI; D20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§13-6 | C2@53635557 | §13 p4: The same permission and business-memory rules must apply regardless of channel | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; L-X20 | — |
| 2-§13-7 | C2@53635557 | §13 p5: WhatsApp must remain an adapter to the shared Ask CFO intelligence, not a separate CFO implemen… | RULE | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D12; D13; D14; DAI; D20 | NI-ACFO; L-X20; A-BP109 | — |
| 2-§14-1 | C2@53635557 | §14 p1: The dashboard/app Conversation Workspace should expose the same Ask CFO intelligence | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§14-2 | C2@53635557 | §14 b1: identity | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§14-3 | C2@53635557 | §14 b2: permissions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§14-4 | C2@53635557 | §14 b3: conversation context | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§14-5 | C2@53635557 | §14 b4: Business Memory | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§14-6 | C2@53635557 | §14 b5: AI rules | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§14-7 | C2@53635557 | §14 b6: reminder continuation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104 | — |
| 2-§14-8 | C2@53635557 | §14 p3: This supports business continuity if WhatsApp is temporarily unavailable | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§14-9 | C2@53635557 | §14 p4: Ask CFO should therefore be architected as channel-independent intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§15-1 | C2@53635557 | §15 p1: Basic voice assistance is included in both Ledger and Manager according to current Product Truth | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (12-§12-1) | — |
| 2-§15-2 | C2@53635557 | §15 b1: a short voice answer | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (12-§12-1) | — |
| 2-§15-3 | C2@53635557 | §15 b2: a more detailed text analysis | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (12-§12-1) | — |
| 2-§15-4 | C2@53635557 | §15 b3: basic voice response approximately 15 seconds maximum where practical | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (12-§12-1) | — |
| 2-§15-5 | C2@53635557 | §15 b4: detailed explanation in text | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (12-§12-1) | — |
| 2-§15-6 | C2@53635557 | §15 p5: The exact timing is a UX target rather than a hard safety guarantee | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (12-§12-1) | — |
| 2-§15-7 | C2@53635557 | §15 p6: The product principle is that basic voice access should not be a luxury | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (12-§12-1) | — |
| 2-§16 | C2@53635557 | §16 Smart Voice Assistant Plus + Ask CFO (whole section) | OBL | BUILD NOW | CORE-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | L-VP19; A-BP108 (Build Plan §9 row 8, 12A Voice Plus); I-13 (12-§12-2) | — |
| 2-§17-1 | C2@53635557 | §17 p2–p10: worked multi-turn example (fruit/juice counter) | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§17-2 | C2@53635557 | §17 p11: Ask CFO should understand the deferral rather than continuing to talk | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§17-3 | C2@53635557 | §17 b1: topic | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§17-4 | C2@53635557 | §17 b2: observations | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§17-5 | C2@53635557 | §17 b3: suggestion | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§17-6 | C2@53635557 | §17 b4: potential benefit | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§17-7 | C2@53635557 | §17 b5: optional reminder to resume later | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104 | — |
| 2-§17-8 | C2@53635557 | §17 p13: This demonstrates that Ask CFO is connected to Smart Reminder without becoming a duplicate remi… | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104 | — |
| 2-§18-1 | C2@53635557 | §18 p1–p2: Ask CFO offers to remind the Owner to continue later | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104; NI-REM | — |
| 2-§18-2 | C2@53635557 | §18 p3: If the Owner says yes, use the shared Smart Reminder Engine | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104; NI-REM | — |
| 2-§18-3 | C2@53635557 | §18 p4: Do not create a separate CFO-only reminder system | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104; NI-REM | — |
| 2-§18-4 | C2@53635557 | §18 p5: The reminder should preserve enough conversation context to resume usefully | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104; NI-REM | — |
| 2-§19-1 | C2@53635557 | §19 p1: Ask CFO and Daily Intelligence are related but not identical | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-2 | C2@53635557 | §19 Daily Intelligence — p2: Proactively gives clarity at approved scheduled times | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-3 | C2@53635557 | §19 Ask CFO — p3: Responds to Owner questions and conversations | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-4 | C2@53635557 | §19 Ask CFO — b1: Business Memory | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-5 | C2@53635557 | §19 Ask CFO — b2: permission rules | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-6 | C2@53635557 | §19 Ask CFO — b3: calculation logic where appropriate | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-7 | C2@53635557 | §19 Ask CFO — b4: language behavior | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-8 | C2@53635557 | §19 Ask CFO — b5: human-authority principles | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§19-9 | C2@53635557 | §19 Ask CFO — p5: They should not become duplicate intelligence stacks | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; NI-DI | — |
| 2-§20-1 | C2@53635557 | §20 b1: English | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104; I-13 (9-§12-2) | — |
| 2-§20-2 | C2@53635557 | §20 b2: Malayalam | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104; I-13 (9-§12-2) | — |
| 2-§20-3 | C2@53635557 | §20 b3: Manglish | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104; I-13 (9-§12-2) | — |
| 2-§20-4 | C2@53635557 | §20 p2: Malayalam/Manglish responses should preserve local business meaning | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104; I-13 (9-§12-2) | — |
| 2-§20-5 | C2@53635557 | §20 p3 + b4–b11: natural Kerala business-term mixing (illustrative term list) | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104; L-ILL | — |
| 2-§20-6 | C2@53635557 | §20 p4: Understanding matters more than literal translation | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104; I-13 (9-§12-2) | — |
| 2-§21-1 | C2@53635557 | §21 p1: Ask CFO should adapt response structure to the question | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§21-2 | C2@53635557 | §21 Direct answer — p3: Answer the question first | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§21-3 | C2@53635557 | §21 Evidence / observations — p4: Show the important data points | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§21-4 | C2@53635557 | §21 Interpretation — p5: Explain what the pattern may mean | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§21-5 | C2@53635557 | §21 Uncertainty — p6: State what cannot be concluded | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§21-6 | C2@53635557 | §21 Suggested next check — p7: Give one or a few practical next steps | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§21-7 | C2@53635557 | §21 Suggested next check — p8: Do not bury the answer in a long report | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-1 | C2@53635557 | §22 p1: Ask CFO is a high-value interaction and should feel responsive | EXP | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-2 | C2@53635557 | §22 b1: avoid unnecessary AI calls for simple deterministic calculations | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-3 | C2@53635557 | §22 b2: use optimized authorized queries | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-4 | C2@53635557 | §22 b3: keep permission checks efficient | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-5 | C2@53635557 | §22 b4: avoid duplicated processing | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-6 | C2@53635557 | §22 b5: use appropriate models based on complexity | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-7 | C2@53635557 | §22 b6: return clear progress if deeper analysis takes longer | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-8 | C2@53635557 | §22 b7: RLS/authorization | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-9 | C2@53635557 | §22 b8: merchant isolation | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-10 | C2@53635557 | §22 b9: data correctness | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-11 | C2@53635557 | §22 b10: uncertainty handling | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§22-12 | C2@53635557 | §22 b11: privacy | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-1 | C2@53635557 | §23 p1: Ask CFO should create strong customer value while remaining economically sustainable | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-2 | C2@53635557 | §23 b1: FAQ support should not consume Ask CFO reasoning unnecessarily | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-3 | C2@53635557 | §23 b2: simple calculations should not require expensive model reasoning | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-4 | C2@53635557 | §23 b3: model choice should match task complexity | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-5 | C2@53635557 | §23 b4: long context should be controlled | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-6 | C2@53635557 | §23 b5: repeated identical calculations may use safe caching where architecturally appropriate | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-7 | C2@53635557 | §23 b6: abuse/unrelated AI use may be restricted under Fair Usage | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§23-8 | C2@53635557 | §23 p3: Normal genuine business questions should not feel artificially constrained | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-1 | C2@53635557 | §24 b1: missing business data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-2 | C2@53635557 | §24 b2: stale data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-3 | C2@53635557 | §24 b3: conflicting records | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-4 | C2@53635557 | §24 b4: unavailable integrations | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-5 | C2@53635557 | §24 b5: insufficient permission | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§24-6 | C2@53635557 | §24 b6: ambiguous time period | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-7 | C2@53635557 | §24 b7: unclear customer/supplier/product names | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-8 | C2@53635557 | §24 b8: unsupported prediction requests | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-9 | C2@53635557 | §24 b9: provider/model failure | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§24-10 | C2@53635557 | §24 p3: Ask, qualify, or admit uncertainty. Never invent | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-1 | C2@53635557 | §25 Access — b1: Owner can use Ask CFO | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14 | NI-ACFO; A-BP104 | — |
| 2-§25-2 | C2@53635557 | §25 Access — b2: Employee blocked by default | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§25-3 | C2@53635557 | §25 Access — b3: Supplier blocked | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§25-4 | C2@53635557 | §25 Access — b4: Customer blocked | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§25-5 | C2@53635557 | §25 Access — b5: Manager behavior follows explicit permission | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; DC-06 | — |
| 2-§25-6 | C2@53635557 | §25 Data questions — b6: expense comparison | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-7 | C2@53635557 | §25 Data questions — b7: credit query | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; DC-02; SB-P-1.14 FPDR-1 (authoritative owed balance, 3-§9-12 → SB-P-1.16) | FDB-3 |
| 2-§25-8 | C2@53635557 | §25 Data questions — b8: stock query when stock capability enabled | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; D17 | NI-ACFO; A-BP104; DC-05 | — |
| 2-§25-9 | C2@53635557 | §25 Data questions — b9: no stock fabrication when capability/data absent | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-10 | C2@53635557 | §25 Data questions — b10: time-period comparison | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-11 | C2@53635557 | §25 Advisory questions — b11: facts separated from suggestion | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-12 | C2@53635557 | §25 Advisory questions — b12: uncertainty disclosed | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-13 | C2@53635557 | §25 Advisory questions — b13: no fabricated business fact | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-14 | C2@53635557 | §25 Advisory questions — b14: no autonomous consequential action | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-15 | C2@53635557 | §25 Tone — b15: negative trend explained respectfully | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-16 | C2@53635557 | §25 Tone — b16: no accusation | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-17 | C2@53635557 | §25 Tone — b17: practical next action offered | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-18 | C2@53635557 | §25 Voice — b18: Basic Voice short summary + detailed text | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-19 | C2@53635557 | §25 Voice — b19: Voice Plus multi-turn conversation | SCN | BUILD NOW | CORE-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | L-VP19; A-BP108 | — |
| 2-§25-20 | C2@53635557 | §25 Voice — b20: short voice blocks | SCN | BUILD NOW | CORE-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | L-VP19; A-BP108 | — |
| 2-§25-21 | C2@53635557 | §25 Voice — b21: formatted summary | SCN | BUILD NOW | CORE-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | L-VP19; A-BP108 | — |
| 2-§25-22a | C2@53635557 | §25 Voice — b22: reminder continuation (Basic Voice slice) | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-ACFO; A-BP104 | — |
| 2-§25-22b | C2@53635557 | §25 Voice — b22: reminder continuation (Voice Plus slice) | SCN | BUILD NOW | CORE-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | L-VP19; A-BP108 | — |
| 2-§25-23 | C2@53635557 | §25 Channel continuity — b23: WhatsApp and Conversation Workspace use the same Business Memory and permission behavior | SCN | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 2-§25-24 | C2@53635557 | §25 Security — b24: read-only intelligence boundary | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§25-25 | C2@53635557 | §25 Security — b25: RLS/merchant isolation | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12 | NI-ACFO; A-BP104 | — |
| 2-§25-26 | C2@53635557 | §25 Security — b26: no destructive database tool path | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104 | — |
| 2-§25-27 | C2@53635557 | §25 Security — b27: no cross-business leakage | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12 | NI-ACFO; A-BP104 | — |
| 2-§25-28 | C2@53635557 | §25 Performance — b28: simple questions use efficient path | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-29 | C2@53635557 | §25 Performance — b29: deeper analysis provides usable latency/feedback | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§25-30 | C2@53635557 | §25 Performance — b30: security not bypassed for speed | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104 | — |
| 2-§26-1 | C2@53635557 | §26 b1: Business Memory | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-2 | C2@53635557 | §26 b2: Permission Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-3 | C2@53635557 | §26 b3: Identity | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-4 | C2@53635557 | §26 b4: Conversation Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-5 | C2@53635557 | §26 b5: Human Language Layer | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-6 | C2@53635557 | §26 b6: analytics/calculation services | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-7 | C2@53635557 | §26 b7: Smart Reminder Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-8 | C2@53635557 | §26 b8: Document Intelligence where a document is part of the question | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D14 | NI-ACFO; A-BP104; L-DEL14 | — |
| 2-§26-9 | C2@53635557 | §26 b9: Daily Intelligence data services where appropriate | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | DSCH | NI-ACFO; A-BP104 | — |
| 2-§26-10 | C2@53635557 | §26 b10: audit/logging foundations | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§26-11 | C2@53635557 | §26 p2: It must not become an isolated AI chatbot with its own duplicate memory and permissions | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§27-1 | C2@53635557 | §27 p2: Current Product Truth includes Ask CFO in both Ledger and Manager | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§27-2 | C2@53635557 | §27 b1: Ask CFO is not Build Later | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§27-3 | C2@53635557 | §27 b2: Ask CFO is not Manager-only | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§27-4 | C2@53635557 | §27 b3: Employee access remains disabled by default | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§27-5 | C2@53635557 | §27 b4: richer analysis may naturally depend on Manager data or enabled add-ons | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§27-6 | C2@53635557 | §27 b5: Smart Voice Assistant Plus is a premium interaction layer, not a requirement for basic Ask CFO… | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-ACFO; A-BP104 | — |
| 2-§28 | C2@53635557 | §28 Provenance (whole section) | PROV | BUILD NOW | CORE-LM | SB-P-1.15 | NOT APPLICABLE | — | L-PROV | — |
| 2-§29-1 | C2@53635557 | §29 b1: analytics/query abstraction architecture | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-2 | C2@53635557 | §29 b2: deterministic query library vs model-driven orchestration | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-3 | C2@53635557 | §29 b3: safe function/tool schemas | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-4 | C2@53635557 | §29 b4: conversation context windowing | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-5 | C2@53635557 | §29 b5: caching strategy | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-6 | C2@53635557 | §29 b6: source-of-truth timestamping/staleness indicators | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-7 | C2@53635557 | §29 b7: auditability of recommendations | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-8 | C2@53635557 | §29 b8: model routing by complexity | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-9 | C2@53635557 | §29 b9: performance budgets | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-10 | C2@53635557 | §29 b10: voice generation provider and fallback | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |
| 2-§29-11 | C2@53635557 | §29 b11: exact Manager delegated-intelligence permission model | ENGQ | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12 | L-ENGQ; A-BP104; DC-06 | — |
| 2-§29-12 | C2@53635557 | §29 p2: These are implementation questions, not reasons to narrow Ask CFO | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | L-ENGQ; A-BP104 | — |


## B. Contract 4 — Daily Intelligence Rhythm (full mission-assigned contract)

120 rows: 114 `IN SCOPE`, 4 `ASSIGNED TO LATER MISSION`, 2 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 4-§1-1 | C4@ce940d25 | §1 p1: Daily Intelligence is the proactive scheduled clarity layer of Smart Business | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§1-2 | C4@ce940d25 | §1 p2: It turns authorized Business Memory into concise, timely business awareness so the Owner does n… | EXP | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§1-3 | C4@ce940d25 | §1 p3: It is not a generic notification feed and not an autonomous management authority | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§2-1 | C4@ce940d25 | §2 b1: 7:00 AM — Morning Business Briefing | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-TZ | — |
| 4-§2-2 | C4@ce940d25 | §2 b2: 10:30 AM — Business Pulse Check | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-TZ | — |
| 4-§2-3 | C4@ce940d25 | §2 b3: 10:00 PM — Night Closing Intelligence | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-TZ | — |
| 4-§2-4 | C4@ce940d25 | §2 p2: Historical 6:00 AM / 9:15 AM variants are provenance only and must not be rebuilt as current tr… | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-TZ | — |
| 4-§2-5 | C4@ce940d25 | §2 p3: Business timezone controls delivery | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-TZ; DC-03 | — |
| 4-§3-1 | C4@ce940d25 | §3 p1: The morning briefing should prepare the Owner for the day using available authorized facts | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§3-2 | C4@ce940d25 | §3 b1: previous-day sales/purchases and important carry-forward context | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§3-3 | C4@ce940d25 | §3 b2: outstanding customer/supplier credit requiring awareness | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D16 | NI-DI; A-BP104; DC-02; DC-05 | — |
| 4-§3-4 | C4@ce940d25 | §3 b3: reminders due today | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§3-5 | C4@ce940d25 | §3 b4: low-stock/reorder concerns | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17 | NI-DI; A-BP104; DC-05 | — |
| 4-§3-6 | C4@ce940d25 | §3 b5: compliance/renewal deadlines | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§3-7 | C4@ce940d25 | §3 b6: staffing/attendance items where Staff/HR is enabled | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§3-8 | C4@ce940d25 | §3 b7: order/delivery commitments | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§3-9 | C4@ce940d25 | §3 b8: unresolved exceptions requiring human attention | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§3-10 | C4@ce940d25 | §3 p3: It must not fabricate a section merely because the template contains it | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§4-1 | C4@ce940d25 | §4 p1: The 10:30 AM pulse is a short operational check, not a second full morning report | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§4-2 | C4@ce940d25 | §4 b1: sales/purchase activity since opening | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§4-3 | C4@ce940d25 | §4 b2: unusual but factual operational signals | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§4-4 | C4@ce940d25 | §4 b3: stock or order issues | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§4-5 | C4@ce940d25 | §4 b4: reminders becoming urgent | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§4-6 | C4@ce940d25 | §4 b5: payment/credit exceptions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D16 | NI-DI; A-BP104; DC-05 | — |
| 4-§4-7 | C4@ce940d25 | §4 b6: Manager POS/counter signals where authorized | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17 | NI-DI; A-BP104; DC-05 | — |
| 4-§4-8 | C4@ce940d25 | §4 p3: No change is itself valid information; the system should avoid noise when nothing useful changed | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§5-1 | C4@ce940d25 | §5 p1: The 10:00 PM closing view should help the Owner understand the day and what carries forward | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§5-2 | C4@ce940d25 | §5 b1: sales/purchase summary | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§5-3 | C4@ce940d25 | §5 b2: cash/payment awareness | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D16 | NI-DI; A-BP104; DC-05 | — |
| 4-§5-4 | C4@ce940d25 | §5 b3: credit and repayment movement | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§5-5 | C4@ce940d25 | §5 b4: stock/reorder issues | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17 | NI-DI; A-BP104; DC-05 | — |
| 4-§5-6 | C4@ce940d25 | §5 b5: unresolved orders/deliveries | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§5-7 | C4@ce940d25 | §5 b6: reminders not completed | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§5-8 | C4@ce940d25 | §5 b7: operational exceptions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§5-9 | C4@ce940d25 | §5 b8: tomorrow-facing items | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§5-10 | C4@ce940d25 | §5 p3: For Manager, closing-cash/POS operational depth may be richer when those capabilities are enabl… | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-1 | C4@ce940d25 | §6 p1: Daily Intelligence must consume existing shared foundations rather than maintain separate busin… | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§6-2 | C4@ce940d25 | §6 b1: Ledger / Business Memory | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§6-3 | C4@ce940d25 | §6 b2: Smart Credit Awareness | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D16 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-4 | C4@ce940d25 | §6 b3: Payment Verification | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D16 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-5 | C4@ce940d25 | §6 b4: Stock/Supplier/Reorder | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-6 | C4@ce940d25 | §6 b5: POS/Counter Intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-7 | C4@ce940d25 | §6 b6: Smart Reminder Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§6-8 | C4@ce940d25 | §6 b7: Staff/HR | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-9 | C4@ce940d25 | §6 b8: Smart Order & Delivery | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-10 | C4@ce940d25 | §6 b9: Compliance Shield | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§6-11 | C4@ce940d25 | §6 b10: Universal Document Intelligence status | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; L-DEL14 | — |
| 4-§6-12 | C4@ce940d25 | §6 b11: approved support/platform exceptions where user-relevant | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D19 | NI-DI; A-BP104; DC-05 | — |
| 4-§7-1 | C4@ce940d25 | §7 Owner — p1: Receives full authorized Owner-level Daily Intelligence | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-DI; A-BP104 | — |
| 4-§7-2 | C4@ce940d25 | §7 Manager — p2: Receives only information delegated for operational management. Manager does not automatically… | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-DI; A-BP104; DC-06 | — |
| 4-§7-3 | C4@ce940d25 | §7 Employee / Staff — p3: Must not receive Owner Daily Intelligence by default. Staff may receive only explicitly permitt… | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-DI; A-BP104 | — |
| 4-§7-4 | C4@ce940d25 | §7 Employee / Staff — p4: Daily Intelligence must never become a shortcut around the Permission Engine | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-DI; A-BP104 | — |
| 4-§8-1 | C4@ce940d25 | §8 b1: WhatsApp | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20; DNTF | L-X20; A-BP109 | FDB-2 |
| 4-§8-2 | C4@ce940d25 | §8 b2: Smart Business Conversation Workspace | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | FDB-2 |
| 4-§8-3 | C4@ce940d25 | §8 b3: dashboard/workspace surfaces where useful | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | FDB-2 |
| 4-§8-4 | C4@ce940d25 | §8 p2: All channels must display the same underlying business facts and permission boundary | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§8-5 | C4@ce940d25 | §8 p3: WhatsApp failure must not stop Daily Intelligence computation or make the information unavailab… | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 4-§9-1 | C4@ce940d25 | §9 b1: concise | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§9-2 | C4@ce940d25 | §9 b2: calm | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§9-3 | C4@ce940d25 | §9 b3: factual | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§9-4 | C4@ce940d25 | §9 b4: prioritized | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§9-5 | C4@ce940d25 | §9 b5: easy to scan | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§9-6 | C4@ce940d25 | §9 b6: respectful of merchant attention | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§9-7 | C4@ce940d25 | §9 p2: It should not use fear-heavy language, gamified anxiety, accusation or artificial urgency | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§9-8 | C4@ce940d25 | §9 p3: Where no material action is required, say so simply | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104 | — |
| 4-§10-1 | C4@ce940d25 | §10 b1: confirmed facts | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§10-2 | C4@ce940d25 | §10 b2: estimates | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§10-3 | C4@ce940d25 | §10 b3: patterns | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§10-4 | C4@ce940d25 | §10 b4: operational signals | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§10-5 | C4@ce940d25 | §10 b5: missing or stale information | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§10-6 | C4@ce940d25 | §10 b6: ₹12,500 sales recorded today is a fact if supported by Ledger data | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§10-7 | C4@ce940d25 | §10 b7: Sales are lower than your recent Tuesday average is a pattern/analysis | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§10-8 | C4@ce940d25 | §10 b8: Possible stock risk is not proof of a stockout | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§11-1 | C4@ce940d25 | §11 b1: open the relevant record | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§11-2 | C4@ce940d25 | §11 b2: ask Ask CFO for explanation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DAI | NI-DI; A-BP104 | — |
| 4-§11-3 | C4@ce940d25 | §11 b3: create/snooze a reminder | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-DI; A-BP104 | — |
| 4-§11-4 | C4@ce940d25 | §11 b4: review a payment match | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D16 | NI-DI; A-BP104; DC-05 | — |
| 4-§11-5 | C4@ce940d25 | §11 b5: review reorder suggestion | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D17 | NI-DI; A-BP104; DC-05 | — |
| 4-§11-6 | C4@ce940d25 | §11 b6: open an order/delivery exception | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; D18 | NI-DI; A-BP104; DC-05 | — |
| 4-§11-7 | C4@ce940d25 | §11 p2: Daily Intelligence itself does not execute consequential business actions without the normal pe… | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DTX | NI-DI; A-BP104 | — |
| 4-§12-1 | C4@ce940d25 | §12 p1: If a source feature is not enabled or data is insufficient, Daily Intelligence must not invent… | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§12-2 | C4@ce940d25 | §12 b1: omit the section | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§12-3 | C4@ce940d25 | §12 b2: state that no reliable data is available | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§12-4 | C4@ce940d25 | §12 b3: suggest the smallest useful next step | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§12-5 | C4@ce940d25 | §12 p3: One unavailable source must not block unrelated sections | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§13-1 | C4@ce940d25 | §13 b1: delayed scheduler execution | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-SCH | — |
| 4-§13-2 | C4@ce940d25 | §13 b2: duplicate job invocation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-SCH | — |
| 4-§13-3 | C4@ce940d25 | §13 b3: message delivery failure | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-SCH | FDB-2 |
| 4-§13-4 | C4@ce940d25 | §13 b4: WhatsApp outage | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 4-§13-5 | C4@ce940d25 | §13 b5: timezone changes | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-TZ; DC-03 | — |
| 4-§13-6 | C4@ce940d25 | §13 b6: stale source data | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-SCH | — |
| 4-§13-7 | C4@ce940d25 | §13 b7: partial upstream service failure | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-SCH | — |
| 4-§13-8 | C4@ce940d25 | §13 b8: user notification preference changes | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DNTF | NI-DI; A-BP104; NI-SCH | — |
| 4-§13-9 | C4@ce940d25 | §13 p2: Daily jobs must be idempotent enough to avoid duplicate merchant noise | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-SCH | — |
| 4-§14-1 | C4@ce940d25 | §14 p1: Daily Intelligence should support English, Malayalam and Manglish according to user preference… | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104; I-13 (9-§12-3) | — |
| 4-§14-2 | C4@ce940d25 | §14 p2: Language should sound natural for Kerala merchants rather than like literal translation of fina… | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104; I-13 (9-§12-3) | — |
| 4-§15-1 | C4@ce940d25 | §15 b1: expose Owner financial intelligence to unauthorized staff | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-DI; A-BP104 | — |
| 4-§15-2 | C4@ce940d25 | §15 b2: accuse employees/customers from anomaly signals | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-DI; A-BP104 | — |
| 4-§15-3 | C4@ce940d25 | §15 b3: expose sensitive HR/customer data beyond role need | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-DI; A-BP104 | — |
| 4-§15-4 | C4@ce940d25 | §15 b4: infer wrongdoing from missing or inconsistent data | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-DI; A-BP104 | — |
| 4-§15-5 | C4@ce940d25 | §15 p2: Operational risk should be framed as a review opportunity, not a verdict | PRIN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-DI; A-BP104 | — |
| 4-§16-1 | C4@ce940d25 | §16 b1: 7:00 AM briefing in business timezone | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; NI-TZ; DC-03 | — |
| 4-§16-2 | C4@ce940d25 | §16 b2: 10:30 AM pulse without unnecessary duplicate content | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§16-3 | C4@ce940d25 | §16 b3: 10:00 PM closing summary | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§16-4 | C4@ce940d25 | §16 b4: correct handling of no-data/partial-data states | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§16-5 | C4@ce940d25 | §16 b5: no duplicate notifications on retry | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DNTF | NI-DI; A-BP104 | — |
| 4-§16-6 | C4@ce940d25 | §16 b6: WhatsApp delivery failure with web-app continuity | SCN | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 4-§16-7 | C4@ce940d25 | §16 b7: Owner vs Manager permission differences | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; DC-06 | — |
| 4-§16-8 | C4@ce940d25 | §16 b8: Ask CFO/reminder continuation without bypassing authority | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DTX | NI-DI; A-BP104 | — |
| 4-§16-9 | C4@ce940d25 | §16 b9: English/Malayalam/Manglish rendering | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§16-10 | C4@ce940d25 | §16 b10: factual totals matching source systems | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§16-11 | C4@ce940d25 | §16 b11: neutral, non-accusatory handling of operational signals | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104 | — |
| 4-§17-1 | C4@ce940d25 | §17 b1: old 06:00 / 09:15 schedules as current truth | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-DI; A-BP104; L-NEG | — |
| 4-§17-2 | C4@ce940d25 | §17 b2: continuous real-time surveillance disguised as intelligence | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-DI; A-BP104; L-NEG | — |
| 4-§17-3 | C4@ce940d25 | §17 b3: staff access to Owner intelligence by default | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-DI; A-BP104; L-NEG | — |
| 4-§17-4 | C4@ce940d25 | §17 b4: automatic business decisions based on a briefing | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-DI; A-BP104; L-NEG | — |
| 4-§17-5 | C4@ce940d25 | §17 b5: fake certainty when source data is incomplete | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-DI; A-BP104; L-NEG | — |
| 4-§17-6 | C4@ce940d25 | §17 b6: notification volume for its own sake | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | — | NI-DI; A-BP104; L-NEG | — |
| 4-§18 | C4@ce940d25 | §18 Dependencies (whole section) | DEP | BUILD NOW | CORE-LM | SB-P-1.15 | NOT APPLICABLE | — | L-DEP; dependencies carried in the Dependency column (D12, D13, D14, DSCH, DNTF) | — |
| 4-§19 | C4@ce940d25 | §19 Completion Gate (whole section) | GATE | BUILD NOW | CORE-LM | SB-P-1.15 | NOT APPLICABLE | — | L-GATE; gate evaluated at acceptance against 4-§2 to 4-§16 rows | — |


## C. Contract 11 — Smart Reminder & Delegated Automation (full mission-assigned contract)

164 rows: 152 `IN SCOPE`, 2 `ASSIGNED TO LATER MISSION`, 10 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 11-§1-1 | C11@e802745a | §1 p1: Smart Reminder is the shared Smart Business foundation for remembering commitments, follow-ups,… | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§1-2 | C11@e802745a | §1 p2: Other features must reuse this system rather than create separate reminder schedulers | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§2-1 | C11@e802745a | §2 b1: supplier follow-up | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-2 | C11@e802745a | §2 b2: customer credit collection | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-3 | C11@e802745a | §2 b3: licences and renewals | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-4 | C11@e802745a | §2 b4: stock review | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-5 | C11@e802745a | §2 b5: employee matters | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-6 | C11@e802745a | §2 b6: delivery follow-up | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-7 | C11@e802745a | §2 b7: business/personal commitments | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-8 | C11@e802745a | §2 b8: Ask CFO discussions to revisit later | NARR | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 11-§2-9 | C11@e802745a | §2 p2: Smart Business should reduce that mental load without turning reminders into hidden machine aut… | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104 | — |
| 11-§3-1 | C11@e802745a | §3 b1: AI Assistant, Not AI Judge | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§3-2 | C11@e802745a | §3 b2: Human decision ownership | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§3-3 | C11@e802745a | §3 b3: Reminder ≠ proof that an event happened | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§3-4 | C11@e802745a | §3 b4: Trigger ≠ authority | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§3-5 | C11@e802745a | §3 b5: Default consequential behavior is confirmation-first | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§3-6 | C11@e802745a | §3 b6: Standing automation is explicit delegated authority, not autonomous AI sovereignty | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§3-7 | C11@e802745a | §3 b7: Avoid duplicate/noisy reminders | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§3-8 | C11@e802745a | §3 b8: Preserve history and auditability | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-1 | C11@e802745a | §4 b1: business/user scope | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-2 | C11@e802745a | §4 b2: creator | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-3 | C11@e802745a | §4 b3: title/intent | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-4 | C11@e802745a | §4 b4: due date/time | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-5 | C11@e802745a | §4 b5: timezone | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; NI-TZ; DC-03 | — |
| 11-§4-6 | C11@e802745a | §4 b6: recurrence | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-7 | C11@e802745a | §4 b7: related customer/supplier/employee/document/order/credit/compliance object | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; DC-04 | — |
| 11-§4-8 | C11@e802745a | §4 b8: source conversation/context reference | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-9 | C11@e802745a | §4 b9: status | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-10 | C11@e802745a | §4 b10: snooze/reschedule history | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-11 | C11@e802745a | §4 b11: completion actor/time | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§4-12 | C11@e802745a | §4 b12: notification delivery state | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-REM; A-BP104; NI-NTF | — |
| 11-§4-13 | C11@e802745a | §4 p2: The model should be shared across features | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§5-1 | C11@e802745a | §5 p1: Approved users may create reminders through text or voice in WhatsApp or the Conversation Works… | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; L-X20 (WhatsApp creation slice SB-P-1.20) | — |
| 11-§5-2 | C11@e802745a | §5 b1: Remind me tomorrow to call ABC Traders | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; DC-04 | — |
| 11-§5-3 | C11@e802745a | §5 b2: Next Monday remind me to check the FSSAI renewal | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D18 | NI-REM; A-BP104; DC-05 | — |
| 11-§5-4 | C11@e802745a | §5 b3: Remind me at 6 PM to continue this Ask CFO discussion | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-13 (24-§13-1, 9-§9-5) | — |
| 11-§5-5 | C11@e802745a | §5 p3: If timing, target or intent is ambiguous, ask the smallest useful clarification | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-13 (24-§13-1, 9-§9-5) | — |
| 11-§6-1 | C11@e802745a | §6 b1: Done / Already Done | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§6-2 | C11@e802745a | §6 b2: Snooze | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§6-3 | C11@e802745a | §6 b3: Tomorrow | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§6-4 | C11@e802745a | §6 b4: Next week | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§6-5 | C11@e802745a | §6 b5: Custom reschedule | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§6-6 | C11@e802745a | §6 b6: Open related record/action where permitted | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D14 | NI-REM; A-BP104 | — |
| 11-§6-7 | C11@e802745a | §6 p2: Exact buttons are a UX decision; the durable behavior is human acknowledgement/rescheduling wit… | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§7-1 | C11@e802745a | §7 p1: Recurring reminders must preserve the recurrence rule separately from each occurrence | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§7-2 | C11@e802745a | §7 p2: Completing one occurrence must not silently destroy future recurrence | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§7-3 | C11@e802745a | §7 p3: The system must avoid duplicate occurrences caused by retries or channel duplication | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§8-1 | C11@e802745a | §8 b1: Ask CFO continuation | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§8-2 | C11@e802745a | §8 b2: Compliance Shield | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D18 | NI-REM; A-BP104; consumer SB-P-1.18 (A-BP107) | — |
| 11-§8-3 | C11@e802745a | §8 b3: supplier/reorder follow-up | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D17 | NI-REM; A-BP104; consumer SB-P-1.17 (A-BP106) | — |
| 11-§8-4 | C11@e802745a | §8 b4: Smart Credit Awareness | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D16 | NI-REM; A-BP104; consumer SB-P-1.16 (A-BP105) | — |
| 11-§8-5 | C11@e802745a | §8 b5: stock/expiry review | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D17 | NI-REM; A-BP104; consumer SB-P-1.17 (A-BP106) | — |
| 11-§8-6 | C11@e802745a | §8 b6: Staff/HR actions | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D18 | NI-REM; A-BP104; consumer SB-P-1.18 (A-BP107) | — |
| 11-§8-7 | C11@e802745a | §8 b7: Order & Delivery follow-up/exceptions | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D18 | NI-REM; A-BP104; consumer SB-P-1.18 (A-BP107) | — |
| 11-§8-8 | C11@e802745a | §8 b8: approved onboarding/support follow-up | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D19 | NI-REM; A-BP104; consumer SB-P-1.19 (A-BP108) | — |
| 11-§8-9 | C11@e802745a | §8 p2: Feature-specific reminder tables/schedulers are rejected unless architecture demonstrates a gen… | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§9-1 | C11@e802745a | §9 b1: payment happened | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§9-2 | C11@e802745a | §9 b2: supplier order was placed | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§9-3 | C11@e802745a | §9 b3: employee action occurred | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§9-4 | C11@e802745a | §9 b4: licence was renewed | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§9-5 | C11@e802745a | §9 b5: customer paid | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§9-6 | C11@e802745a | §9 b6: delivery completed | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§9-7 | C11@e802745a | §9 p2: The actual business event must be recorded through the appropriate governed feature service | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DTX | NI-REM; A-BP104 | — |
| 11-§10-1 | C11@e802745a | §10 p1: A reminder may offer a bounded action such as | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§10-2 | C11@e802745a | §10 b1: Paid & Log Expense | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104; DC-04 | — |
| 11-§10-3 | C11@e802745a | §10 b2: Mark customer payment received | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX; D16 | NI-AUTO; A-BP104; DC-05 | — |
| 11-§10-4 | C11@e802745a | §10 b3: Approve reorder | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; D17 | NI-AUTO; A-BP104; DC-05 | — |
| 11-§10-5 | C11@e802745a | §10 b4: Open renewal document | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; D14; D18 | NI-AUTO; A-BP104; DC-05 | — |
| 11-§10-6 | C11@e802745a | §10 n1: identify the exact target/action | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§10-7 | C11@e802745a | §10 n2: verify current state | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§10-8 | C11@e802745a | §10 n3: verify actor permission | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§10-9 | C11@e802745a | §10 n4: show/confirm consequential facts unless a valid standing rule already authorizes the action | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§10-10 | C11@e802745a | §10 n5: execute through the authoritative feature service | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§10-11 | C11@e802745a | §10 n6: preserve linked reminder/business audit history | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§11-1 | C11@e802745a | §11 p1: An Owner may deliberately create a bounded standing rule | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-2 | C11@e802745a | §11 p2: A mature standing rule should preserve | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-3 | C11@e802745a | §11 b1: business scope | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-4 | C11@e802745a | §11 b2: exact action type | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-5 | C11@e802745a | §11 b3: trigger conditions | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-6 | C11@e802745a | §11 b4: target/item/person | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-7 | C11@e802745a | §11 b5: quantity/value/limit where relevant | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-8 | C11@e802745a | §11 b6: permitted channel/destination where relevant | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-9 | C11@e802745a | §11 b7: creator/authority provenance | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-10 | C11@e802745a | §11 b8: effective date/time | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-11 | C11@e802745a | §11 b9: enabled/paused/revoked state | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-12 | C11@e802745a | §11 b10: modification history | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-13 | C11@e802745a | §11 b11: trigger/execution history | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-14 | C11@e802745a | §11 b12: failure/retry history | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§11-15 | C11@e802745a | §11 p3: The rule must never expand itself beyond stored authority | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§12-1 | C11@e802745a | §12 p2: Low stock detected → Smart Business suggests reorder → Owner reviews/approves/edits/defers/canc… | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH; D17 | NI-AUTO; A-BP104; DC-05 | — |
| 11-§12-2 | C11@e802745a | §12 p3: Only when the Owner has created a valid bounded standing rule may the approved reorder action e… | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH; D17 | NI-AUTO; A-BP104; DC-05 | — |
| 11-§12-3 | C11@e802745a | §12 p4: A historical background trigger is not authority by itself | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH; D17 | NI-AUTO; A-BP104; DC-05 | — |
| 11-§13-1 | C11@e802745a | §13 Owner — p1: May create/manage reminders and approved standing rules within product limits | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§13-2 | C11@e802745a | §13 Manager — p2: May create reminders and automation only within Owner-delegated authority | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104; DC-06 | — |
| 11-§13-3 | C11@e802745a | §13 Employee — p3: May use permitted self/operational reminders. Employees cannot create Owner-level financial/pro… | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§13-4 | C11@e802745a | §13 Other roles — p4: Only bounded workflow interactions explicitly provided by their feature | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§14-1 | C11@e802745a | §14 p1: Reminder truth is channel-independent | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§14-2 | C11@e802745a | §14 p2: A reminder shown in both WhatsApp and the Conversation Workspace remains one reminder, not two… | OBL | BUILD NOW | CORE-FDN | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 11-§14-3 | C11@e802745a | §14 p3: Notification delivery failure is separate from reminder/business state | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | FDB-2 |
| 11-§15-1 | C11@e802745a | §15 p1: Reminder creation/interaction supports English, Malayalam and Manglish through the shared Human… | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13 | NI-REM; A-BP104; I-13 (9-§12-6, 9-§9-5) | — |
| 11-§15-2 | C11@e802745a | §15 p2: Ambiguous time phrases must be clarified when necessary rather than silently guessed | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13 | NI-REM; A-BP104; I-13 (9-§12-6, 9-§9-5) | — |
| 11-§16-1 | C11@e802745a | §16 b1: bind confirmation to the exact reviewed action/state/actor | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104; L-DEL12 (22-§13) | — |
| 11-§16-2 | C11@e802745a | §16 b2: revalidate authorization immediately before execution | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104; L-DEL12 (22-§13) | — |
| 11-§16-3 | C11@e802745a | §16 b3: use idempotency/duplicate protection | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104; L-DEL12 (22-§13) | — |
| 11-§16-4 | C11@e802745a | §16 b4: record actor and authority provenance | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104; L-DEL12 (22-§13) | — |
| 11-§16-5 | C11@e802745a | §16 b5: fail narrowly if underlying state changed | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104; L-DEL12 (22-§13) | — |
| 11-§16-6 | C11@e802745a | §16 p2: A stale confirmation must not execute a changed action | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104; L-DEL12 (22-§13) | — |
| 11-§17-1 | C11@e802745a | §17 p1: Use the shared Notification foundation | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§17-2 | C11@e802745a | §17 b1: user role | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§17-3 | C11@e802745a | §17 b2: preferred language | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§17-4 | C11@e802745a | §17 b3: channel availability | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | FDB-2 |
| 11-§17-5 | C11@e802745a | §17 b4: quiet/reasonable delivery behavior where appropriate | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§17-6 | C11@e802745a | §17 b5: duplicate suppression | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§17-7 | C11@e802745a | §17 b6: privacy | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§17-8 | C11@e802745a | §17 p3: Notification success does not equal business-action success | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§18-1 | C11@e802745a | §18 b1: ambiguous date/time | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§18-2 | C11@e802745a | §18 b2: missing target/context | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§18-3 | C11@e802745a | §18 b3: stale related business state | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§18-4 | C11@e802745a | §18 b4: duplicate trigger | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-SCH; A-BP104 | — |
| 11-§18-5 | C11@e802745a | §18 b5: notification provider failure | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | FDB-2 |
| 11-§18-6 | C11@e802745a | §18 b6: revoked permission | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§18-7 | C11@e802745a | §18 b7: paused/revoked standing rule | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-AUTO; A-BP104 | — |
| 11-§18-8 | C11@e802745a | §18 b8: failed action execution | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§18-9 | C11@e802745a | §18 b9: recurrence conflict | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§18-10 | C11@e802745a | §18 b10: timezone change | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; NI-TZ; DC-03 | — |
| 11-§18-11 | C11@e802745a | §18 b11: channel outage | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | FDB-2 |
| 11-§18-12 | C11@e802745a | §18 p2: A broken reminder path must not freeze unrelated features | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§19-1 | C11@e802745a | §19 b1: Private/personal reminders must not leak to staff | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§19-2 | C11@e802745a | §19 b2: Feature-linked reminders inherit permission sensitivity of the linked object | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§19-3 | C11@e802745a | §19 b3: Reminder text should avoid exposing sensitive Owner information to unauthorized roles | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§19-4 | C11@e802745a | §19 b4: Automation history must be auditable to the authority that created it | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-AUTO; A-BP104 | — |
| 11-§20-1 | C11@e802745a | §20 b1: Business Memory/linking | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D14 | NI-REM; A-BP104; L-DEL14 | — |
| 11-§20-2 | C11@e802745a | §20 b2: identities | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§20-3 | C11@e802745a | §20 b3: Permission Engine | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104 | — |
| 11-§20-4 | C11@e802745a | §20 b4: Human Language Layer | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13 | NI-REM; A-BP104 | — |
| 11-§20-5 | C11@e802745a | §20 b5: Conversation channels | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13 | NI-REM; A-BP104 | — |
| 11-§20-6 | C11@e802745a | §20 b6: Notification foundation | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§20-7 | C11@e802745a | §20 b7: audit/idempotency | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12 | NI-REM; A-BP104; L-DEL12 (22-§14, 22-§15) | — |
| 11-§20-8 | C11@e802745a | §20 b8: feature action services | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | DTX | NI-REM; A-BP104 | — |
| 11-§21-1 | C11@e802745a | §21 b1: duplicate reminder engines per feature | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG | — |
| 11-§21-2 | C11@e802745a | §21 b2: AI-created permission | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG | — |
| 11-§21-3 | C11@e802745a | §21 b3: silent financial/procurement commitments | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG | — |
| 11-§21-4 | C11@e802745a | §21 b4: due date treated as proof of event | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG | — |
| 11-§21-5 | C11@e802745a | §21 b5: blind supplier orders | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG | — |
| 11-§21-6 | C11@e802745a | §21 b6: global product lock because one reminder failed | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG | — |
| 11-§22-1 | C11@e802745a | §22 n1: Natural-language one-time reminder | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§22-2 | C11@e802745a | §22 n2: Ambiguous timing → clarification | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§22-3 | C11@e802745a | §22 n3: Recurring reminder preserves future occurrences/history | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§22-4 | C11@e802745a | §22 n4: Snooze/reschedule does not create duplicate reminder truth | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§22-5 | C11@e802745a | §22 n5: Same reminder visible across channels without duplication | SCN | BUILD NOW | CORE-FDN | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 11-§22-6 | C11@e802745a | §22 n6: Reminder due does not create payment/event automatically | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DTX | NI-REM; A-BP104 | — |
| 11-§22-7 | C11@e802745a | §22 n7: Consequential action requires valid confirmation or standing authority | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-AUTO; A-BP104 | — |
| 11-§22-8 | C11@e802745a | §22 n8: Standing rule cannot exceed stored limit/scope | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-AUTO; A-BP104 | — |
| 11-§22-9 | C11@e802745a | §22 n9: Revoked permission blocks execution at runtime | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; DTX | NI-AUTO; A-BP104 | — |
| 11-§22-10 | C11@e802745a | §22 n10: Notification failure does not falsely mark completion | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DNTF | NI-NTF; A-FPDR12-1 | — |
| 11-§22-11 | C11@e802745a | §22 n11: Duplicate trigger is idempotent | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-SCH; A-BP104 | — |
| 11-§22-12 | C11@e802745a | §22 n12: Narrow failure leaves unrelated operations available | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§23-1 | C11@e802745a | §23 p1: Preserve proactive assistance | PRIN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104 | — |
| 11-§23-2 | C11@e802745a | §23 b1: blind autonomous-daemon framing | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG (superseded behaviour must not reappear) | — |
| 11-§23-3 | C11@e802745a | §23 b2: trigger interpreted as authority | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG (superseded behaviour must not reappear) | — |
| 11-§23-4 | C11@e802745a | §23 b3: feature-specific duplicate schedulers | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG (superseded behaviour must not reappear) | — |
| 11-§23-5 | C11@e802745a | §23 b4: historical fixed enums/button sets/cron times as immutable Product Truth | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | — | NI-REM; A-BP104; L-NEG (superseded behaviour must not reappear) | — |
| 11-§24 | C11@e802745a | §24 Provenance and Hydration Coverage (whole section) | PROV | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-PROV | — |
| 11-§25 | C11@e802745a | §25 Completion Gate (whole section) | GATE | BUILD NOW | CORE-FDN | SB-P-1.15 | NOT APPLICABLE | — | L-GATE; gate evaluated at acceptance against 11-§4 to 11-§22 rows | — |


## D. Contract 22 — Shared Product Foundations (every section represented; FPDR-1 and SB-P-1.15 slices expanded)

120 rows: 81 `IN SCOPE`, 4 `ASSIGNED TO LATER MISSION`, 26 `DELEGATED`, 9 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 22-§1 | C22@61e1bb91 | §1 Feature Identity (whole section) | NARR | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 22-§2 | C22@61e1bb91 | §2 Founder Problem Statement (whole section) | NARR | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 22-§3 | C22@61e1bb91 | §3 Lighthouse Principles (whole section) | NARR | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | L-NARR | — |
| 22-§4 | C22@61e1bb91 | §4 Business Memory Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (22-§4-1 to -4 IN SCOPE SB-P-1.14); touch: reminder and Daily Intelligence history are Business Memory facts realized by 11-§4-* | — |
| 22-§5 | C22@61e1bb91 | §5 Identity Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 | — |
| 22-§6 | C22@61e1bb91 | §6 Permission / Business Isolation Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12; touch: background jobs and AI tools obey the one permission model (realized by 22-§18-10, 2-§3-*) | — |
| 22-§7 | C22@61e1bb91 | §7 Conversation / Intent-Action Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 | — |
| 22-§8 | C22@61e1bb91 | §8 Human Language Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13; touch: consumed by 2-§20-*, 4-§14-*, 11-§15-*, 22-§12-2 | — |
| 22-§9 | C22@61e1bb91 | §9 Universal Document Intelligence Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 | — |
| 22-§10 | C22@61e1bb91 | §10 Document / Receipt Memory Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 | — |
| 22-§11-1 | C22@61e1bb91 | §11 b1: business/personal reminders | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-12, I-13, I-14 (22-§11 whole-section row, expanded here) | — |
| 22-§11-2 | C22@61e1bb91 | §11 b2: compliance | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D18 | NI-REM; A-BP104; consumer SB-P-1.18 (A-BP107) | — |
| 22-§11-3 | C22@61e1bb91 | §11 b3: supplier/reorder follow-up | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D17 | NI-REM; A-BP104; consumer SB-P-1.17 (A-BP106) | — |
| 22-§11-4 | C22@61e1bb91 | §11 b4: credit follow-up | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D16 | NI-REM; A-BP104; consumer SB-P-1.16 (A-BP105) | — |
| 22-§11-5 | C22@61e1bb91 | §11 b5: HR | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D18 | NI-REM; A-BP104; consumer SB-P-1.18 (A-BP107) | — |
| 22-§11-6 | C22@61e1bb91 | §11 b6: delivery | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D18 | NI-REM; A-BP104; consumer SB-P-1.18 (A-BP107) | — |
| 22-§11-7 | C22@61e1bb91 | §11 b7: Ask CFO continuation | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-12, I-13, I-14 (22-§11 whole-section row, expanded here) | — |
| 22-§11-8 | C22@61e1bb91 | §11 p2: Standing automation rules are stored delegated authority, not AI-created permission | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-AUTO; A-BP104; I-12 | — |
| 22-§11-9 | C22@61e1bb91 | §11 p3: Feature-specific schedulers should be justified by true domain needs rather than convenience | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-12, I-13, I-14 (22-§11 whole-section row, expanded here) | — |
| 22-§12-1 | C22@61e1bb91 | §12 b1: recipient identity/role | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-NTF; A-FPDR12-1; I-12 | FPDR-1 |
| 22-§12-2 | C22@61e1bb91 | §12 b2: language | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-NTF; A-FPDR12-1; I-12; SB-P-1.12 Blueprint (22-§12-2 language integration) | FPDR-1 |
| 22-§12-3 | C22@61e1bb91 | §12 b3: channel preference/availability | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DNTF | NI-NTF; A-FPDR12-1; I-12 | FPDR-1; FDB-2 |
| 22-§12-4 | C22@61e1bb91 | §12 b4: template/provider requirements | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DNTF | NI-NTF; A-FPDR12-1; I-12 | FPDR-1; FDB-2 |
| 22-§12-5 | C22@61e1bb91 | §12 b5: delivery/retry state | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-NTF; A-FPDR12-1; I-12 | FPDR-1 |
| 22-§12-6 | C22@61e1bb91 | §12 b6: duplicate suppression | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-NTF; A-FPDR12-1; I-12 | FPDR-1 |
| 22-§12-7 | C22@61e1bb91 | §12 b7: privacy | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-NTF; A-FPDR12-1; I-12 | FPDR-1 |
| 22-§12-8 | C22@61e1bb91 | §12 b8: link to originating business event | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-NTF; A-FPDR12-1; I-12 | FPDR-1; FDB-1 |
| 22-§12-9 | C22@61e1bb91 | §12 p3: Notification delivery is separate from business-event completion | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-NTF; A-FPDR12-1; I-12 | FPDR-1 |
| 22-§13 | C22@61e1bb91 | §13 Confirmation / Clarification Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§13-1 to -5 IN SCOPE SB-P-1.12); realized for reminders by 11-§10-*, 11-§16-* | — |
| 22-§14 | C22@61e1bb91 | §14 Audit / Human Context Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12; realized for automation history by 11-§11-*, 11-§19-4 | — |
| 22-§15 | C22@61e1bb91 | §15 Idempotency / Duplicate Protection (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12; reminders, automation triggers and notifications realized by 11-§7-3, 11-§16-3, 22-§12-6, 22-§18-8 | — |
| 22-§16 | C22@61e1bb91 | §16 Location Foundation (whole section) | NARR | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | Location Foundation not touched (SB-P-1.12 FPDR-2: SB-P-1.18) | — |
| 22-§17-1 | C22@61e1bb91 | §17 p1: Smart Business should standardize core business behavior and customize/integrate at the edge | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§17-2 | C22@61e1bb91 | §17 b1: POS | RULE | BUILD NOW | CORE-ARCH | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-14 (22-§17-2) | — |
| 22-§17-3 | C22@61e1bb91 | §17 b2: payment/bank providers | RULE | BUILD NOW | CORE-ARCH | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | I-14 (22-§17-3) | — |
| 22-§17-4 | C22@61e1bb91 | §17 b3: WhatsApp | RULE | BUILD NOW | CORE-ARCH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | I-14 (22-§17-4) | — |
| 22-§17-5 | C22@61e1bb91 | §17 b4: OpenAI/model services | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | I-14 (22-§17-5) | — |
| 22-§17-6 | C22@61e1bb91 | §17 b5: billing providers | RULE | BUILD NOW | CORE-ARCH | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | I-14 (22-§17-6) | — |
| 22-§17-7 | C22@61e1bb91 | §17 b6: storage/document services | RULE | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | I-14 (22-§17-7) | — |
| 22-§17-8 | C22@61e1bb91 | §17 b7: future external systems | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | No new external system adapter is approved for this mission (U-1) | — |
| 22-§17-9 | C22@61e1bb91 | §17 p3: Custom client-specific modifications inside core are rejected unless explicitly reclassified th… | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§18-1 | C22@61e1bb91 | §18 b1: Daily Intelligence | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-2 | C22@61e1bb91 | §18 b2: reminders | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-3 | C22@61e1bb91 | §18 b3: safe retries | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-4 | C22@61e1bb91 | §18 b4: retention/cleanup | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | DSCH; D14 | NI-SCH; A-BP104; consumer SB-P-1.14 (I-14; SB-P-1.14 derived constraint 15) | — |
| 22-§18-5 | C22@61e1bb91 | §18 b5: sync/reconciliation | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | DSCH; D16 | NI-SCH; A-BP104; consumer SB-P-1.16 (A-BP105) | — |
| 22-§18-6 | C22@61e1bb91 | §18 b6: other deterministic already-authorized jobs | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-7 | C22@61e1bb91 | §18 p2: A background job may execute maintenance/authorized actions but cannot create new human/busines… | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-8 | C22@61e1bb91 | §18 b7: idempotent where needed | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-9 | C22@61e1bb91 | §18 b8: observable | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-10 | C22@61e1bb91 | §18 b9: narrowly retryable | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§18-11 | C22@61e1bb91 | §18 b10: permission/authority-aware at execution where consequential | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH; DTX | NI-SCH; A-BP104; I-12, I-13, I-14 (22-§18 whole-section row, expanded here) | — |
| 22-§19-8 | C22@61e1bb91 | §19 p2: Block only what is unsafe or unavailable. Keep unrelated safe work available | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§19-1 | C22@61e1bb91 | §19 b1: clear failure reason | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§19-2 | C22@61e1bb91 | §19 b2: safe retry/recovery | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§19-3 | C22@61e1bb91 | §19 b3: no false success | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§19-4 | C22@61e1bb91 | §19 b4: preserved user input/evidence where appropriate | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§19-5 | C22@61e1bb91 | §19 b5: operational observability | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§19-6 | C22@61e1bb91 | §19 b6: narrow containment | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§19-7 | C22@61e1bb91 | §19 p4: One failing provider/module should not automatically freeze Smart Business globally | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; re-checked for this mission's deliverable (I-13, I-14 precedent) | — |
| 22-§20 | C22@61e1bb91 | §20 Data / Schema Stability Principle (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12; any reminder/notification/automation schema evolves only by governed migration (MIG hold) | — |
| 22-§21-1 | C22@61e1bb91 | §21 p1: Current product direction targets a responsive experience (sub-3-second for critical interactio… | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; realized for Ask CFO by 2-§22-* | — |
| 22-§21-2 | C22@61e1bb91 | §21 b1: authorization | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; realized for Ask CFO by 2-§22-* | — |
| 22-§21-3 | C22@61e1bb91 | §21 b2: financial correctness | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; realized for Ask CFO by 2-§22-* | — |
| 22-§21-4 | C22@61e1bb91 | §21 b3: confirmation | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; realized for Ask CFO by 2-§22-* | — |
| 22-§21-5 | C22@61e1bb91 | §21 b4: privacy | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; realized for Ask CFO by 2-§22-* | — |
| 22-§21-6 | C22@61e1bb91 | §21 b5: auditability | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; realized for Ask CFO by 2-§22-* | — |
| 22-§21-7 | C22@61e1bb91 | §21 p2: Shared caching/query/model-selection patterns should be used where safe rather than repeated fe… | RULE | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; realized for Ask CFO by 2-§22-* | — |
| 22-§22-1 | C22@61e1bb91 | §22 b1: stable identifiers/test hooks for critical UI flows where appropriate | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; Δ-06 | — |
| 22-§22-2 | C22@61e1bb91 | §22 b2: deterministic tests for financial/permission rules | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; Δ-06 | — |
| 22-§22-3 | C22@61e1bb91 | §22 b3: integration failure tests | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; Δ-06 | — |
| 22-§22-4 | C22@61e1bb91 | §22 b4: runtime verification | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; Δ-06 | — |
| 22-§22-5 | C22@61e1bb91 | §22 b5: independent verification before Mission Control acceptance | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; Δ-06 | — |
| 22-§22-6 | C22@61e1bb91 | §22 p2: Green CI alone is not feature acceptance | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104; Δ-06 | — |
| 22-§23-1 | C22@61e1bb91 | §23 b1: Merchant data belongs to merchant | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-14 (22-§23-1) | — |
| 22-§23-2 | C22@61e1bb91 | §23 b2: No cross-business leakage | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12 | A-BP104 | — |
| 22-§23-3 | C22@61e1bb91 | §23 b3: No routine platform access to merchant private intelligence | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12 | A-BP104 | — |
| 22-§23-4 | C22@61e1bb91 | §23 b4: Support access is purpose-limited | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-14 (22-§23-4) | — |
| 22-§23-5 | C22@61e1bb91 | §23 b5: Staff data is role/purpose limited | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12 | A-BP104 | — |
| 22-§23-6 | C22@61e1bb91 | §23 b6: Individual merchant data must not be sold for unrelated monetization | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-14 (22-§23-6) | — |
| 22-§23-7 | C22@61e1bb91 | §23 b7: Aggregate product/operational insight must be privacy-respecting/governed | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; aggregate platform insight is not built here | — |
| 22-§24 | C22@61e1bb91 | §24 AI Authority Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (22-§24-1 to -3 IN SCOPE SB-P-1.13); touch: realized for Ask CFO and automation by 2-§8-*, 11-§3-* | — |
| 22-§25 | C22@61e1bb91 | §25 AI Orchestration / OpenAI Intelligence Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13; DAI | L-DEL13; I-13; Ask CFO reasoning and Daily Intelligence explanation consume it (DAI) | — |
| 22-§26 | C22@61e1bb91 | §26 Dedicated Channel Adapter Contracts (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.20 | DELEGATED | D20 | Names Contract 23 (SB-P-1.20); notification reuse by the WhatsApp adapter required by FPDR-1 | — |
| 22-§27-1 | C22@61e1bb91 | §27 n1: which mature feature(s) it advances | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§27-2 | C22@61e1bb91 | §27 n2: which shared foundations it reuses | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§27-3 | C22@61e1bb91 | §27 n3: whether it consumes AI orchestration and/or a channel adapter | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§27-4 | C22@61e1bb91 | §27 n4: what already exists and must not be duplicated | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§27-5 | C22@61e1bb91 | §27 n5: what remains committed but outside current mission | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§27-6 | C22@61e1bb91 | §27 n6: exact blockers/dependencies | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§27-7 | C22@61e1bb91 | §27 n7: required evidence for acceptance | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§27-8 | C22@61e1bb91 | §27 p2: A narrow mission cannot demote unimplemented feature scope to Build Later by convenience | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§28-1 | C22@61e1bb91 | §28 b1: duplicate Business Memory by channel | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-2 | C22@61e1bb91 | §28 b2: duplicate Permission Engine per feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-3 | C22@61e1bb91 | §28 b3: duplicate AI brain/orchestrator per channel or feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-4 | C22@61e1bb91 | §28 b4: duplicate reminder scheduler per feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-5 | C22@61e1bb91 | §28 b5: duplicate OCR/document pipeline | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-6 | C22@61e1bb91 | §28 b6: duplicate customer/supplier identity silos | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-7 | C22@61e1bb91 | §28 b7: continuous employee GPS foundation | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-8 | C22@61e1bb91 | §28 b8: subscription-driven create/drop of core domain tables | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-9 | C22@61e1bb91 | §28 b9: AI/tool capability treated as authority | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§28-10 | C22@61e1bb91 | §28 b10: custom client-specific core forks | NEG | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | L-NEG; re-checked for this mission's deliverable (I-12, I-13, I-14 precedent) | — |
| 22-§29-1 | C22@61e1bb91 | §29 n1: WhatsApp and Conversation Workspace use one Business Memory/action truth | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13; D20 | I-13; I-14 (22-§29-1) | — |
| 22-§29-2 | C22@61e1bb91 | §29 n2: WhatsApp and Conversation Workspace share one permission-aware AI orchestration path rather tha… | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | I-13; I-14 (22-§29-2) | — |
| 22-§29-3 | C22@61e1bb91 | §29 n3: Cross-business access is blocked consistently across channels/services/AI tools | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12 | A-BP104 (reminder, notification, scheduler and Ask CFO slice) | — |
| 22-§29-4 | C22@61e1bb91 | §29 n4: Multiple features reuse one Reminder Engine | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-12, I-13, I-14 (22-§29-4) | — |
| 22-§29-5 | C22@61e1bb91 | §29 n5: Multiple document types reuse one UDI pipeline with domain adapters | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | I-14 (22-§29-5) | — |
| 22-§29-6 | C22@61e1bb91 | §29 n6: Customer/supplier identity is not duplicated solely by channel/feature | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-14 (22-§29-6) | — |
| 22-§29-7 | C22@61e1bb91 | §29 n7: Consequential confirmation is exact and revalidated at execution | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DTX | A-BP104 (reminder continuation and standing-rule slice) | — |
| 22-§29-8 | C22@61e1bb91 | §29 n8: Duplicate external/retry events are idempotent | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12; DSCH | A-BP104 (reminder, automation-trigger and notification slice) | — |
| 22-§29-9 | C22@61e1bb91 | §29 n9: Attendance/delivery location uses purpose-limited shared primitive | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | Location primitive not touched | — |
| 22-§29-10 | C22@61e1bb91 | §29 n10: Feature/provider failure is narrowly contained | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | DSCH; DNTF | A-BP104 (scheduler, notification and Ask CFO slice) | — |
| 22-§29-11 | C22@61e1bb91 | §29 n11: Subscription changes do not dynamically destroy core schema/history | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-14 (22-§29-11) | — |
| 22-§29-12 | C22@61e1bb91 | §29 n12: Audit retains raw evidence plus authorized human context where required | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | D12 | A-BP104 (automation history slice) | — |
| 22-§29-13 | C22@61e1bb91 | §29 n13: OpenAI/model outage does not corrupt authoritative business state | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | DAI | A-BP104 (Ask CFO and Daily Intelligence explanation slice) | — |
| 22-§29-14 | C22@61e1bb91 | §29 n14: Future implementation documents identify reused foundations before introducing new subsystems | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| 22-§30 | C22@61e1bb91 | §30 Historical Corrections / Superseded Behavior (whole section) | NARR | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | L-HIST; superseded duplicate reminders are checked by 22-§28-4, 11-§21-1 | — |
| 22-§31 | C22@61e1bb91 | §31 Provenance and Hydration Coverage (whole section) | PROV | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | L-PROV | — |
| 22-§32 | C22@61e1bb91 | §32 Completion Gate (whole section) | GATE | BUILD NOW | CORE-ARCH | SB-P-1.15 | NOT APPLICABLE | — | L-GATE | — |
| 22-§33 | C22@61e1bb91 | §33 Personal Identity Lifecycle and Governed Deletion (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | L-DEL12; I-12; I-14; touch: former-Owner notification ineligibility (SB-P-1.12 Blueprint FA-6) realized by 22-§12-1 | — |


## E. Delegate contracts — inherited and touched slices (Contracts 21, 24, 9, 10, 12, 3, 17, 20)

71 rows: 53 `IN SCOPE`, 4 `ASSIGNED TO LATER MISSION`, 14 `DELEGATED`. 1 row carries the inherited `HELD — ALLOCATION UNRESOLVED` marker (U-3).

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 21-§8 | C21@f4a05d5c | §8 one permission model across channels; natural-language prompt cannot widen access (incl. Manager asking Ask CFO without delegation) | RULE | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12; realized by 2-§3-*, 2-§25-5 | — |
| 21-§9 | C21@f4a05d5c | §9 Ask CFO / Owner intelligence boundary (rule owned by SB-P-1.12; feature obeys it) | RULE | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12 (21-§9 IN SCOPE SB-P-1.12); EIS-KER-07; realized by 2-§3-*; DC-06 | — |
| 21-§12 | C21@f4a05d5c | §12 Delegated Automation Authority (stored delegation; execution-time checks; trigger creates no permission) | RULE | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12; realized by 11-§11-*, 11-§16-*, 22-§18-7 | — |
| 21-§24-3 | C21@f4a05d5c | §24 acceptance 3: Manager sees only delegated capabilities | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12; realized by 2-§25-5, 4-§16-7; DC-06 | — |
| 21-§24-6 | C21@f4a05d5c | §24 acceptance 6: Employee cannot gain Ask CFO via natural-language prompt | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12; realized by 2-§25-2 | — |
| 21-§24-8 | C21@f4a05d5c | §24 acceptance 8: permission revoked after preview blocks execution at runtime | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12; realized by 11-§22-9 | — |
| 21-§24-11 | C21@f4a05d5c | §24 acceptance 11: standing automation cannot exceed Owner-delegated scope | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12; realized by 11-§22-8 | — |
| 24-§5-4 | C24@0c1dcbb2 | §5 central flow applies to approved background/scheduled intelligence | RULE | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D13; DSCH; DAI | NI-DI; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 24-§12-1 | C24@0c1dcbb2 | §12 Ask CFO is one specialized reasoning experience on the shared AI foundation | RULE | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) (24-§12 whole-section row, expanded here) | — |
| 24-§12-2 | C24@0c1dcbb2 | §12 orchestration may: interpret the business question | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§12-3 | C24@0c1dcbb2 | §12 orchestration may: determine authorized data needs | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§12-4 | C24@0c1dcbb2 | §12 orchestration may: retrieve/calculate through approved read paths | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§12-5 | C24@0c1dcbb2 | §12 orchestration may: reason over verified facts | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§12-6 | C24@0c1dcbb2 | §12 orchestration may: distinguish fact, pattern, estimate, risk, opportunity and recommendation | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§12-7 | C24@0c1dcbb2 | §12 orchestration may: generate a clear explanation | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§12-8 | C24@0c1dcbb2 | §12 Ask CFO remains read-only intelligence | NEG | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§12-9 | C24@0c1dcbb2 | §12 operational continuation moves to the relevant governed domain action/service | RULE | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; DTX | NI-ACFO; A-BP104; I-13 (24-§12) | — |
| 24-§13-1 | C24@0c1dcbb2 | §13 AI produces structured reminder drafts; shared Reminder Engine owns state, recurrence, scheduling, history, delegation | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 24-§13-2 | C24@0c1dcbb2 | §13 AI brain does not become a hidden scheduler | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); re-checked by 11-§21-1 | — |
| 24-§16-1 | C24@0c1dcbb2 | §16 Daily Intelligence uses deterministic aggregation plus AI explanation/prioritization | RULE | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DAI | NI-DI; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) (24-§16 whole-section row, expanded here); DC-07 | — |
| 24-§16-2 | C24@0c1dcbb2 | §16 AI may help: summarize significant changes | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DAI | NI-DI; A-BP104; I-13 (24-§16) | — |
| 24-§16-3 | C24@0c1dcbb2 | §16 AI may help: prioritize what merits Owner attention | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DAI | NI-DI; A-BP104; I-13 (24-§16) | — |
| 24-§16-4 | C24@0c1dcbb2 | §16 AI may help: phrase facts clearly | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DAI | NI-DI; A-BP104; I-13 (24-§16) | — |
| 24-§16-5 | C24@0c1dcbb2 | §16 AI may help: explain patterns | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DAI | NI-DI; A-BP104; I-13 (24-§16) | — |
| 24-§16-6 | C24@0c1dcbb2 | §16 AI may help: suggest next checks | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH; DAI | NI-DI; A-BP104; I-13 (24-§16) | — |
| 24-§16-7 | C24@0c1dcbb2 | §16 scheduled AI creates no new authority to execute business decisions | NEG | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; DSCH | NI-DI; A-BP104; I-13 (24-§16) | — |
| 24-§18-1b | C24@0c1dcbb2 | §18 example Receipt→Ledger→Ask CFO→Daily Intelligence, steps 5–6 | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; DSCH | NI-ACFO; A-BP104; I-14 (24-§18-1b ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 24-§18-2 | C24@0c1dcbb2 | §18 example Voice→Reminder→Domain Action | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; DTX | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 24-§18-3 | C24@0c1dcbb2 | §18 example Stock→Reorder→Supplier→Reminder: follow-up uses the shared Reminder Engine (reuse seam) | SCN | BUILD NOW | CORE-INT | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-13 (24-§18-3 ASSIGNED TO LATER MISSION → SB-P-1.17); A-BP106 | — |
| 24-§27-3 | C24@0c1dcbb2 | §27 consistent assistant across dashboard intelligence surfaces | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 24-§31-9 | C24@0c1dcbb2 | §31 acceptance 9: Ask CFO remains read-only | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 24-§31-10 | C24@0c1dcbb2 | §31 acceptance 10: reminder creation routes to the shared Reminder Engine | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 9-§9-5 | C9@649c55f3 | §9 clarify unclear reminder time/date (language capability) | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); consumed by 11-§5-6, 11-§15-2 | — |
| 9-§12-2 | C9@649c55f3 | §12 Human Language Layer reused by Ask CFO (reuse verified by consumer) | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13 | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 9-§12-3 | C9@649c55f3 | §12 Human Language Layer reused by Daily Intelligence (reuse verified by consumer) | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13 | NI-DI; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 9-§12-6 | C9@649c55f3 | §12 Human Language Layer reused by Reminder/Delegated Automation (reuse verified by consumer) | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13 | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 9-§17-5 | C9@649c55f3 | §17 acceptance 5: reminder date/time clarification | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 9-§17-6 | C9@649c55f3 | §17 acceptance 6: Ask CFO response in user's preferred language | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 10-§5-5 | C10@5c145ed7 | §5 Workspace output: Ask CFO responses | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 10-§5-7 | C10@5c145ed7 | §5 Workspace output: reminders presented for human choice | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | FDB-2 |
| 10-§9-1 | C10@5c145ed7 | §9 Ask CFO available through the Workspace under the same read-only boundary | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 10-§9-2 | C10@5c145ed7 | §9 Ask CFO may retrieve/explain/compare/identify patterns/suggest/offer continuation (single capability list) | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 10-§9-3 | C10@5c145ed7 | §9 Ask CFO gains no record-write authority because displayed in the app (kernel read/write tool separation) | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); re-checked by 2-§25-24 | — |
| 10-§11-4 | C10@5c145ed7 | §11 Workspace voice supports reminders | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | IN SCOPE | D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 10-§13-4 | C10@5c145ed7 | §13 Workspace example action: create a reminder | SCN | BUILD NOW | CORE-CH | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 10-§23-4 | C10@5c145ed7 | §23 acceptance 4: Owner uses Ask CFO without granting record-write authority | SCN | BUILD NOW | CORE-CH | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§4-2 | C12@6d48feff | §4 Basic Voice supports Ask CFO questions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§4-3 | C12@6d48feff | §4 Basic Voice supports reminder creation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§11-6 | C12@6d48feff | §11 Workspace voice preserves the same Ask CFO behavior | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§12-1 | C12@6d48feff | §12 Basic Voice Ask CFO question: concise voice answer plus text detail | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§12-2 | C12@6d48feff | §12 Voice Plus deepens Ask CFO conversation | OBL | BUILD NOW | CORE-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | L-VP19; I-13 (12-§12-2 ASSIGNED TO LATER MISSION → SB-P-1.19); A-BP108 | — |
| 12-§12-3 | C12@6d48feff | §12 Ask CFO read-only regardless of voice tier | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§13-1 | C12@6d48feff | §13 user may create reminders by voice | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§13-2 | C12@6d48feff | §13 offer a shared Reminder to resume an Ask CFO/Voice Plus discussion | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15); Voice Plus depth SB-P-1.19 | — |
| 12-§13-3 | C12@6d48feff | §13 voice must not create a separate reminder engine | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (IN SCOPE SB-P-1.13); re-checked by 11-§21-1 | — |
| 12-§21-3 | C12@6d48feff | §21 acceptance 3: Basic Ask CFO voice question: short audio plus accurate text detail | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 12-§21-4 | C12@6d48feff | §21 acceptance 4: voice reminder creation | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D13; DSCH | NI-REM; A-BP104; I-13 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 3-§13-1 | C3@d8c26c07 | §13 Ask CFO reads authorized Ledger information | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | NI-ACFO; A-BP104; I-14 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 3-§13-2 | C3@d8c26c07 | §13 Ask CFO remains read-only intelligence | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; I-14 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 3-§13-3 | C3@d8c26c07 | §13 Ask CFO continuation into a reminder/action passes through the execution/confirmation service | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DTX; DSCH | NI-ACFO; A-BP104; I-14 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 3-§14-1 | C3@d8c26c07 | §14 Daily Intelligence consumes authorized Ledger events at 7:00 / 10:30 / 22:00 | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; I-14 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 3-§14-2 | C3@d8c26c07 | §14 Ledger is the business-memory source; Daily Intelligence is a scheduled clarity layer over it | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (IN SCOPE SB-P-1.14); consumed by 4-§6-* | — |
| 3-§15-6 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Reminder Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | IN SCOPE | D12; D13; DSCH; D14 | NI-REM; A-BP104; I-14 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 3-§17-7 | C3@d8c26c07 | §17 handle: failed downstream notification (Ledger slice; delivery is 22-§12-*) | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (IN SCOPE SB-P-1.14); delivery state realized by 22-§12-5, 22-§12-9 | — |
| 3-§19-11 | C3@d8c26c07 | §19 acceptance 11: Owner-only financial intelligence boundary (Ledger slice) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D12; D14 | L-DEL14; I-14 (IN SCOPE SB-P-1.14); Ask CFO slice realized by 2-§25-* | — |
| 17-§11-1 | C17@7943f74a | §11 workspace exposes Ask CFO and Daily Intelligence without separate intelligence stacks | RULE | BUILD NOW | MGR+LDG | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI; DSCH | NI-ACFO; A-BP104; I-12 (17-§11 whole-section row ASSIGNED TO LATER MISSION → SB-P-1.15, expanded here) | — |
| 17-§11-2 | C17@7943f74a | §11 Ask CFO uses shared read-only business reasoning | NEG | BUILD NOW | MGR+LDG | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; I-12 (17-§11) | — |
| 17-§11-3 | C17@7943f74a | §11 Daily Intelligence shows the same current schedule/content truth through approved channels | OBL | BUILD NOW | MGR+LDG | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | NI-DI; A-BP104; I-12 (17-§11) | FDB-2 |
| 17-§22-7 | C17@7943f74a | §22 acceptance 7: Ask CFO remains read-only | SCN | BUILD NOW | MGR+LDG | SB-P-1.15 | IN SCOPE | D12; D13 | NI-ACFO; A-BP104; I-12 (ASSIGNED TO LATER MISSION → SB-P-1.15) | — |
| 20-§12-6 | C20@56ed4d11 | §12 first-24-hour journey: scheduled Daily Intelligence when required data/features are available (journey owned by SB-P-1.19) | OBL | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 (Build Plan §9 row 8: Contract 20 onboarding/first value); consumes 4-§2-* | — |
| 20-§23-10 | C20@56ed4d11 | §23 acceptance 10: current Daily Intelligence times used, not historical 06:00/09:15 | SCN | BUILD NOW | ACT | SB-P-1.19/SB-P-1.15 (inherited verbatim) | ASSIGNED TO LATER MISSION — HELD: ALLOCATION UNRESOLVED (U-3) | D19 | I-12 (20-§23-10 SB-P-1.19/SB-P-1.15, inherited verbatim); not moved, not suppressed (MC-05 §2) | U-3 |


## F. Build Plan — §6.2, §6.5, §8, §9 row 4, §10.4, §11, §13, §15 item 6, §16

46 rows: 25 `IN SCOPE`, 20 `OUT OF BUILD SCOPE`, 1 `UNRESOLVED FOUNDER DECISION`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| BP-§9-4 | BP@9dfdd924 | §9 row 4: SB-P-1.15 Reminder, Daily Intelligence & Ask CFO advances Contracts 2, 4, 11 (assignment lock) | RULE | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| BP-§10.4-O | BP@9dfdd924 | §10.4 product outcome: reduce Owner mental load while preserving human authority | EXP | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| BP-§10.4-W1 | BP@9dfdd924 | §10.4 work area 1: shared Reminder Engine | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | A-BP104 | — |
| BP-§10.4-W2 | BP@9dfdd924 | §10.4 work area 2: done/snooze/reschedule | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | A-BP104 | — |
| BP-§10.4-W3 | BP@9dfdd924 | §10.4 work area 3: recurring reminders with occurrence/history discipline | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | A-BP104 | — |
| BP-§10.4-W4 | BP@9dfdd924 | §10.4 work area 4: bounded delegated continuation | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; DTX; DSCH | A-BP104 | — |
| BP-§10.4-W5 | BP@9dfdd924 | §10.4 work area 5: Daily Intelligence at 7:00 AM / 10:30 AM / 10:00 PM | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | A-BP104; DC-03 | — |
| BP-§10.4-W6 | BP@9dfdd924 | §10.4 work area 6: Ask CFO read-only intelligence | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | A-BP104 | — |
| BP-§10.4-W7 | BP@9dfdd924 | §10.4 work area 7: permission-scoped retrieval | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12 | A-BP104 | — |
| BP-§10.4-W8 | BP@9dfdd924 | §10.4 work area 8: fact vs estimate/pattern/risk/recommendation distinction | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | A-BP104 | — |
| BP-§10.4-W9 | BP@9dfdd924 | §10.4 work area 9: insight to action only through explicit continuation or valid bounded delegation | WORK | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DTX | A-BP104 | — |
| BP-§10.4-E1 | BP@9dfdd924 | §10.4 experience: Ask CFO explains and clarifies; it does not execute writes | EXP | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13 | A-BP104 | — |
| BP-§10.4-E2 | BP@9dfdd924 | §10.4 experience: Daily Intelligence prioritizes useful exceptions over information overload | EXP | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; D14; DSCH | A-BP104 | — |
| BP-§10.4-E3 | BP@9dfdd924 | §10.4 experience: Manager/Employee access stays permission-scoped when asked conversationally | EXP | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13 | A-BP104; DC-06 | — |
| BP-§10.4-A1 | BP@9dfdd924 | §10.4 Founder Scenario A part 1: "Remind me Friday to pay this supplier" creates the correct reminder | FRV | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | A-BP104-FRV; DC-04 | FDB-2 |
| BP-§10.4-A2 | BP@9dfdd924 | §10.4 Founder Scenario A part 2: at due time the consequential payment still needs confirmation unless explicit bounded Owner delegation exists | FRV | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DTX; DSCH | A-BP104-FRV; DC-04 | FDB-2 |
| BP-§10.4-B1 | BP@9dfdd924 | §10.4 Founder Scenario B part 1: Owner asks "Who owes me money?" and gets contextual authorized information | FRV | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; D14; DAI | A-BP104-FRV; DC-02; SB-P-1.14 FPDR-1 (authoritative owed balance, 3-§9-12 → SB-P-1.16) | FDB-3 |
| BP-§10.4-B2 | BP@9dfdd924 | §10.4 Founder Scenario B part 2: Manager without that delegated intelligence gets only the permitted subset | FRV | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13 | A-BP104-FRV; DC-06 | — |
| BP-§10.4-B3 | BP@9dfdd924 | §10.4 Founder Scenario B part 3: evidence shows no write occurred from Ask CFO | FRV | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13 | A-BP104-FRV | — |
| BP-§10.4-X | BP@9dfdd924 | §10.4 exit principle (remembers, attends, helps think; never owns the business) | EXP | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| BP-§6.2 | BP@9dfdd924 | §6.2 one Business Command / Action Path, reused from reminders/automation | RULE | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; DTX | A-BP104; L-DEL12 (command path owned by SB-P-1.12) | — |
| BP-§6.5 | BP@9dfdd924 | §6.5 one Reminder / Automation Kernel reused by all time-based behaviour | RULE | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | A-BP104 | — |
| BP-§8 | BP@9dfdd924 | §8 Smart Business works without WhatsApp: native proof possible with Meta disconnected before SB-P-1.20 | RULE | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D13 | A-BP104; L-X20 | FDB-2 |
| BP-§11-4 | BP@9dfdd924 | §11 dependency: 1.15 Reminder/Automation underpins Compliance, supplier/reorder, credit follow-up and other time-based workflows | RULE | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | D12; D13; DSCH | A-BP104 | — |
| BP-§13 | BP@9dfdd924 | §13 Completion Report Experience Verification Matrix (seeded at Stage 4) | RULE | BUILD NOW | per contract | SB-P-1.15 | IN SCOPE | — | A-BP104 | — |
| BP-§15-6 | BP@9dfdd924 | §15 item 6: long-term retention/deletion duration after cancellation/non-payment | DEP | BUILD NOW | per contract | Founder | UNRESOLVED FOUNDER DECISION | DUF6 | Not on this mission's critical path (GPCV §8, §10; U-5) | U-5 |
| BP-§16-1 | BP@9dfdd924 | §16 rejection 1: Ask CFO as write-capable authority | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-2 | BP@9dfdd924 | §16 rejection 2: AI accusation/judgment of employees or customers | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-3 | BP@9dfdd924 | §16 rejection 3: continuous staff GPS surveillance by default | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-4 | BP@9dfdd924 | §16 rejection 4: automated wage punishment | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-5 | BP@9dfdd924 | §16 rejection 5: blind supplier procurement without valid Owner delegation | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-6 | BP@9dfdd924 | §16 rejection 6: hard credit blocking by default | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-7 | BP@9dfdd924 | §16 rejection 7: custom client-specific POS modification inside core | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-8 | BP@9dfdd924 | §16 rejection 8: marketplace behavior inside Smart Order & Delivery | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-9 | BP@9dfdd924 | §16 rejection 9: customer silence automatically invalidating proven delivery | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-10 | BP@9dfdd924 | §16 rejection 10: duplicate channel-specific Business Memory | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-11 | BP@9dfdd924 | §16 rejection 11: duplicate channel-specific permission models | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-12 | BP@9dfdd924 | §16 rejection 12: separate AI brains per feature/channel | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-13 | BP@9dfdd924 | §16 rejection 13: model conversation history as permanent Business Memory | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-14 | BP@9dfdd924 | §16 rejection 14: uncontrolled binary-media concentration in Supabase | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-15 | BP@9dfdd924 | §16 rejection 15: provider URLs as permission authority/business identity | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-16 | BP@9dfdd924 | §16 rejection 16: destructive subscription-driven schema creation/deletion | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-17 | BP@9dfdd924 | §16 rejection 17: broad routine Super Admin access to merchant private data | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-18 | BP@9dfdd924 | §16 rejection 18: revival of /survey or obsolete domains/routes | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-19 | BP@9dfdd924 | §16 rejection 19: old Daily Intelligence timing conflicting with 7:00 / 10:30 / 22:00 | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |
| BP-§16-20 | BP@9dfdd924 | §16 rejection 20: independent Catalog product expansion | REJ | REJECT | REJECT | SB-P-1.15 | OUT OF BUILD SCOPE | — | L-NEG; Build Plan §16 "must not appear" | — |

## G. Totals and reproducible counts

| Part | Rows | IN SCOPE | ASSIGNED TO LATER MISSION | DELEGATED | NOT APPLICABLE | OUT OF BUILD SCOPE | UNRESOLVED FOUNDER DECISION |
|---|---|---|---|---|---|---|---|
| A. Contract 2 | 282 | 269 | 11 | 0 | 2 | 0 | 0 |
| B. Contract 4 | 120 | 114 | 4 | 0 | 2 | 0 | 0 |
| C. Contract 11 | 164 | 152 | 2 | 0 | 10 | 0 | 0 |
| D. Contract 22 | 120 | 81 | 4 | 26 | 9 | 0 | 0 |
| E. Delegates | 71 | 53 | 4 | 14 | 0 | 0 | 0 |
| F. Build Plan | 46 | 25 | 0 | 0 | 0 | 20 | 1 |
| **Total** | **803** | **694** | **25** | **40** | **23** | **20** | **1** |

- `IN SCOPE` rows owned by SB-P-1.15: **694**.
- Rows by kind: `DEP` 2, `ENGQ` 11, `EXP` 10, `FRV` 5, `GATE` 3, `NARR` 14, `NEG` 114, `OBL` 363, `PRIN` 25, `PROV` 3, `REJ` 20, `RULE` 108, `SCN` 116, `WORK` 9.
- Rows by owning mission: Founder 1, SB-P-1.12 20, SB-P-1.13 11, SB-P-1.14 8, SB-P-1.15 737, SB-P-1.16 1, SB-P-1.17 2, SB-P-1.19 8, SB-P-1.19/SB-P-1.15 (inherited verbatim) 1, SB-P-1.20 14.
- Founder-decision column: `FPDR-1` on the 9 Contract 22 §12 rows; draft-brief markers `FDB-1` (1 row), `FDB-2` (15 rows), `FDB-3` (6 rows); `U-3` and `U-5` on one row each.

Counts were produced by a deterministic parser and generator run against the source blobs listed in Section 0.4. The method, commands and completeness results are in `04-stage2-obligation-inventory.md` Section 4 and `07-stage2-completion-report.md`.
