# SB-P-1.13 — Stage 2 Populated FCTM

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation (Section 3.2, Section 6)
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; OUTPUT NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`. Stage 2 was authorized by SB-P-1.13-MC-02 (PR #776, merged) (Source 18 Section 3.3).
**Prepared by:** Claude Code, Stage 2–4 Definition Actor (SB-P-1.13-MC-01), under SB-P-1.13-MC-02
**Baseline:** `main@488b16346941e70975edfe849af4aea317cbd6a3`, 2026-10-05
**Opened by:** `mission-control/03-stage1-fctm-open.md` (Stage 1 canonical at `main@e2df36bfe631b7993dfb31a5884f8f65fec20470`)

This matrix is an accounting of approved truth. It adds no product decision and reopens no approved decision. Requirement text lives only in the source contracts. Rows hold pointers, dispositions and citations. The independent obligation inventory is `03-stage2-obligation-inventory.md`.

## 0. How to read this matrix

### 0.1 Columns

| Column | Meaning |
|---|---|
| Row ID | `<contract>-§<section>-<ordinal>`. Build Plan rows use `BP-§<section>-<ordinal>`. A whole-section row has no ordinal. `10-§23-3a` and `10-§23-3b` split one acceptance scenario across two owning missions. |
| Source @ blob | Source code and the first eight characters of the blob SHA at the baseline (full SHAs in Section 0.4). |
| Exact source pointer | The section and the item inside it. It is a pointer, not requirement text. |
| Kind | `OBL` obligation; `NEG` must-not / non-goal check; `SCN` acceptance scenario or worked example; `RULE` architectural rule; `WORK` Build Plan work area; `EXP` Founder-approved experience; `FRV` Founder Runtime Verification scenario; `REJ` Build Plan rejection; `UFD` / `UFQ` unresolved Founder decision or question; `NARR`, `PRIN`, `HIST`, `PROV`, `REUSE`, `DEP`, `GATE` non-obligation sections. |
| Build commitment | Global Product Completion View value, preserved verbatim. |
| Commercial | Commercial classification from the contract header and the Global Product Completion View (Section 0.3). |
| Owning mission | The mission that owns the obligation under an approved source. |
| Disposition | Source 18 Section 3.2 item 3 vocabulary only. |
| Dependency | Dependency state code (Section 0.5). |
| Evidence / citation | Implementation evidence code and the disposition-supporting citation (Section 0.6). |
| Founder decision | Founder Decision ID where a row differs from, or waits on, the approved source. |

### 0.2 Disposition use in this mission

- `IN SCOPE` — `BUILD NOW` in SB-P-1.13 and to be demonstrated here. No row is `ALREADY DEMONSTRATED`: nothing in scope has accepted runtime evidence.
- `ASSIGNED TO LATER MISSION` — always cites an approved assignment source: Build Plan Sections 9, 10, 11 or 12, a contract's own dependency, or the canonical SB-P-1.12 FCTM. The row stays `BUILD NOW`.
- `DELEGATED` — owned by another contract, or by SB-P-1.12 for Contract 22 sections the canonical SB-P-1.12 FCTM holds `IN SCOPE` for SB-P-1.12. SB-P-1.13 consumes the locked specification. It does not treat the runtime behaviour as demonstrated.
- `NOT APPLICABLE` — narrative, history, provenance, cross-reference or synthesis sections, and sections this mission does not touch, each with a reason.
- `OUT OF BUILD SCOPE` — Build Plan `REJECT` items, checked as "must not appear".
- `UNRESOLVED FOUNDER DECISION` — only items on the approved Build Plan Section 15 list. None is on this mission's critical path.
- `ESCALATED` — no row. Stage 2 findings that need Founder or Mission Control determination are reported in `01-stage2-mission-truth-pack.md` Part 6. They are not self-resolved by changing a row.

A row whose obligation cannot be built or demonstrated until an approved upstream or later dependency exists stays `IN SCOPE`. Its Dependency column names the blocker (Source 18 Section 3.2 item 5). No row has been moved because of a dependency.

### 0.3 Commercial classification codes

| Code | Source |
|---|---|
| `CORE-INT` | Contract 24 header and GPCV row 24: core shared intelligence foundation |
| `CORE-FDN` | Core shared foundation (Contracts 9, 21, 5, 11, 25; GPCV) |
| `CORE-CH` | Core shared conversational channel for Ledger + Manager (Contract 10, Contract 23) |
| `CORE-LM` | Core, Ledger + Manager (Contract 12 Basic Voice, Contracts 2 and 3) |
| `ADDON-LM` | Add-on, Ledger + Manager (Contract 12 Voice Plus; GPCV row 12A, `ADD-ON + BUILD NOW`) |
| `CORE-SUP` | Core support foundation (Contract 8) |
| `CORE-ARCH` | Core cross-product architecture (Contract 22) |
| `MGR+LDG`, `ACT`, `MGR/ADDON` | Contracts 17, 20 and 7, as in the SB-P-1.12 FCTM |
| `CORE-COM`, `INTERNAL` | Contract 18 core platform commercial capability; Contract 19 internal platform |
| `per contract`, `per row family` | Build Plan rows inherit the classification of the contract family they govern |
| `REJECT` | Build Plan Section 16 rejection |

### 0.4 Sources and blobs at the baseline

| Code | Path (under `docs/phase-1-mission-blueprint/smart-business-features/`) | Blob |
|---|---|---|
| `C24` | `24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| `C9` | `09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| `C10` | `10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| `C12` | `12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| `C8` | `08_Support_Automation.md` | `97397780114249d027601d0a44dea032214c2073` |
| `C22` | `22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| `C21` | `21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| `C17` | `17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| `C20` | `20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` |
| `C7` | `07_Stock_Supplier_and_Reorder_Intelligence.md` | `65ad91b202def9cb4f42b97383bcc58475f59015` |
| `BP` | `00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| `C2` | `02_Ask_CFO.md` | `53635557fb2907e0e9011613511c9f34b8548edf` |
| `C3` | `03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| `C5` | `05_Universal_Document_and_Receipt_Intelligence.md` | `80ac648e6764f0288f04a4591902ba029d01ab58` |
| `C11` | `11_Smart_Reminder_and_Delegated_Automation.md` | `e802745a93c3bacaebba5099aacfadbe52212bc8` |
| `C18` | `18_Subscription_Payment_and_Account_Lifecycle.md` | `6b96b10aee35036b18afb3bba7a4950e7b36b7fb` |
| `C19` | `19_Super_Admin_and_Platform_Stewardship.md` | `94aa6f2422a3ef5c1b41fca4e17b07a098261cb5` |
| `C23` | `23_WhatsApp_Intelligence_and_Channel_Adapter.md` | `2430e1c6191908bb23a5971405b8214d8d98d7ff` |
| `C25` | `25_Document_Media_Storage_and_Retention_Foundation.md` | `406ce0892451d2a71e28687fd53ad5f818085242` |

All eleven Stage 1 intake blobs (Build Plan, GPCV, Contracts 8, 9, 10, 12, 22, 24, Source 18) are byte-identical at this baseline. Contract 21 and the other sources were not listed with blobs at Stage 1; their blobs above are recorded at this baseline.

### 0.5 Dependency codes

| Code | Dependency | State at this baseline |
|---|---|---|
| `—` | None beyond this mission | — |
| `D12` | SB-P-1.12 authority kernel: identity, membership, roles, permission dimensions, isolation, channel values `conversation` and `ai_tool`, confirmation binding, revalidation, idempotency pattern, authority events and denial contract | SPECIFICATION AVAILABLE (locked Blueprint and EIS); IMPLEMENTATION NOT COMPLETE (Implementation Authorization WITHHELD); EVIDENCE NOT COMPLETE (no Stage 17 or Stage 19; EV-01 OPEN). Consumption conditions: SB-P-1.12 EIS Section 19.5 (EIS-DEP-01). Detail: Truth Pack Part 5 |
| `DAI` | AI provider integration (OpenAI) behind a server-side gateway | No code, dependency or configuration reference in the repository (Delta D-03). Provider account, key custody and data-control settings: `UNVERIFIED — ACCESS REQUIRED` |
| `DV` | Basic Voice provider and environment activation gate (Build Plan Sections 5.4 and 10.2) | No voice code or provider in the repository (Delta D-04). Provider topology: `UNVERIFIED — ACCESS REQUIRED`. Voice-provider purchase or activation: NOT AUTHORIZED |
| `DTX` | A governed create-transaction domain command | Not present. Transaction creation is a client-side table insert (Delta D-02) |
| `D14` | SB-P-1.14: UDI, governed media/object storage, mature four-state Ledger | Not started; Build Plan Section 10.3 |
| `D15` | SB-P-1.15: Reminder Engine, Daily Intelligence, Ask CFO, Notification Foundation (SB-P-1.12 `FPDR-1`) | Not started; Build Plan Section 10.4 |
| `D16`, `D17`, `D18` | SB-P-1.16 credit/payment, SB-P-1.17 stock/supplier, SB-P-1.18 add-ons | Not started |
| `D19` | SB-P-1.19 support completion, onboarding, lifecycle, Voice Plus | Not started |
| `D20` | SB-P-1.20 WhatsApp adapter and channel verification | Not started |
| `DUF6` | Build Plan Section 15 item 6 (long-term retention after cancellation) | Open; not on this mission's critical path |

Several codes in one cell are separated by `;`.

### 0.6 Evidence and citation codes

| Code | Meaning |
|---|---|
| `NI-CONV` | Not implemented: no conversation route, component, kernel or message model exists (Delta D-01) |
| `NI-AI` | Not implemented: no AI orchestration, gateway or tool registry (Delta D-03) |
| `NI-VOICE` | Not implemented: no voice capture, transcription or synthesis (Delta D-04) |
| `NI-FAQ` | Not implemented: no FAQ store or support routing; error capture only (Delta D-07) |
| `NI-ATT` | Not implemented in conversation: only the catalog-specific parser/import path exists (Delta D-06) |
| `NI-TXCMD` | Transaction creation is not a governed command (Delta D-02) |
| `PRECEDENT-CMD` | Governed preview/commit and idempotency precedent exists for catalog and inventory only (Delta D-15); not demonstrated for conversation |
| `A-BP9-13` | Build Plan Section 9 row 2 lists the contract for SB-P-1.13, and no approved source assigns this obligation elsewhere |
| `A-BP102` | Build Plan Section 10.2 names the work area, experience or Founder Runtime scenario |
| `A-BP12` | Build Plan Section 12: SB-P-1.13 establishes the FAQ-before-AI foundation; SB-P-1.19 completes support |
| `A-BP103` to `A-BP109` | Build Plan Section 9 row and Section 10.3 to 10.9 required work areas or scenarios of SB-P-1.14 to SB-P-1.20 |
| `A-FPDR1` | SB-P-1.12 Founder decision `FPDR-1`: Notification Foundation owned by SB-P-1.15 |
| `I-12` | Inherited status from the canonical SB-P-1.12 FCTM (`communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md`, blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`) |
| `L-DEL21` | Contract 21 is wholly assigned to SB-P-1.12 (Build Plan Section 9 row 1). The SB-P-1.12 Blueprint Section 12 records SB-P-1.13 as consumer of `21-§8` and `21-§9` |
| `L-DEL12` | Contract 22 section held `IN SCOPE` for SB-P-1.12 by `I-12`; SB-P-1.13 consumes it under SB-P-1.12 EIS Section 19.5 |
| `L-X20` | The native-channel slice is demonstrated here. The second-channel proof belongs to SB-P-1.20 channel verification of Contracts 9, 10, 12, 22 and 24 (Build Plan Section 9 row 9) |
| `L-NEG` | Contract's own non-goal or must-not, checked as "must not appear" in this mission's deliverable |
| `L-NARR`, `L-HIST`, `L-PROV`, `L-GATE`, `L-REUSE`, `L-DEP` | Narrative, historical, provenance, completion-gate, reuse-list or dependency section; not a separately verifiable obligation |
| `EIS-*` | Requirement IDs in the locked SB-P-1.12 EIS (`docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`) |

### 0.7 Expansion method

A section is expanded to one row per item when its text lists separately testable things. A list stays one row only when the text presents it as illustrative ("such as", "may include", "possible", "examples") of one rule. Each such row says so in its pointer, and `03-stage2-obligation-inventory.md` Section 3 names every one so Mission Control can contest it. A section whose obligations share one non-`IN SCOPE` disposition may be one row (Source 18 Section 3.2 item 2).

## A. Contract 24 — AI Orchestration & OpenAI Intelligence Foundation (full mission-assigned contract)

212 rows: 26 `ASSIGNED TO LATER MISSION`, 180 `IN SCOPE`, 6 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 24-§1 | C24@0c1dcbb2 | §1 Feature Identity (provider capability list; intelligence separated from authority) | NARR | BUILD NOW | CORE-INT | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 24-§4-*, 24-§29-* | — |
| 24-§2 | C24@0c1dcbb2 | §2 Founder Problem Statement (nine-step governed-layer rationale) | NARR | BUILD NOW | CORE-INT | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 24-§5-1, 24-§6-*, 24-§9-*, 24-§21-* | — |
| 24-§3 | C24@0c1dcbb2 | §3 Lighthouse Principles | PRIN | BUILD NOW | CORE-INT | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by operative rows 24-§10, §21, §22, §25 | — |
| 24-§4-1 | C24@0c1dcbb2 | §4 OpenAI is the shared provider for the listed contributions (single permissive list) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 (AI orchestration and provider abstraction) | — |
| 24-§4-2 | C24@0c1dcbb2 | §4 OpenAI must not become the permanent database | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§4-3 | C24@0c1dcbb2 | §4 OpenAI must not become the source of truth for transactions/balances | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§4-4 | C24@0c1dcbb2 | §4 OpenAI must not become the Permission Engine | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§4-5 | C24@0c1dcbb2 | §4 OpenAI must not become the subscription/entitlement authority | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§4-6 | C24@0c1dcbb2 | §4 OpenAI must not become the final executor of destructive business actions | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§4-7 | C24@0c1dcbb2 | §4 OpenAI must not become the sole holder of conversation/business memory | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§4-8 | C24@0c1dcbb2 | §4 OpenAI must not become the product-governance authority | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§5-1 | C24@0c1dcbb2 | §5 shared flow Channel/Input to Identity to Permission/Entitlement Context to Modality to Intent to Context Retrieval to Reasoning to Clarification/Confirmation to Governed Tool to Business Memory to Response | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102; BP §6.2 | — |
| 24-§5-2 | C24@0c1dcbb2 | §5 flow applies to WhatsApp | OBL | BUILD NOW | CORE-INT | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 | — |
| 24-§5-3 | C24@0c1dcbb2 | §5 flow applies to native Conversation Workspace | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§5-4 | C24@0c1dcbb2 | §5 flow applies to approved background/scheduled intelligence | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Daily Intelligence, Reminder Engine) | — |
| 24-§5-5 | C24@0c1dcbb2 | §5 flow applies to voice entry point | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 (Basic Voice) | — |
| 24-§5-6 | C24@0c1dcbb2 | §5 flow applies to document entry point | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 24-§5-7 | C24@0c1dcbb2 | §5 flow applies to future approved channels (channel-neutral kernel) | RULE | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | NI-AI; A-BP102; BP §6.6 | — |
| 24-§5-8 | C24@0c1dcbb2 | §5 channels must not create separate brains | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§6-1 | C24@0c1dcbb2 | §6 not every message is a transaction; intent-first routing is durable | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP9-13 | — |
| 24-§6-2 | C24@0c1dcbb2 | §6 distinguish intent classes (taxonomy list illustrative and evolvable, single obligation); routing to later-mission domains depends on those domains | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI; D14; D15; D16; D17; D18 | NI-AI; A-BP9-13; list introduced 'such as' and 'may evolve' | — |
| 24-§6-3 | C24@0c1dcbb2 | §6 low-confidence consequential intent triggers clarification instead of guessing | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§7-1 | C24@0c1dcbb2 | §7 Text enters language/intent understanding directly | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§7-2 | C24@0c1dcbb2 | §7 Voice is transcribed then enters the same intent/action path as equivalent text | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§7-3 | C24@0c1dcbb2 | §7 Images/receipts produce structured evidence/drafts into UDI | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 24-§7-4 | C24@0c1dcbb2 | §7 PDFs/Excel/CSV parsing follows preview/clarify/confirm/validate | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI; reuse of canonical parser/import) | — |
| 24-§7-5 | C24@0c1dcbb2 | §7 durable rule: modalities converge on one permission-aware intent/action architecture | RULE | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§8-1 | C24@0c1dcbb2 | §8 AI foundation reuses the Human Language Layer for the seven listed language capabilities (realized at 9-§3 to 9-§11 rows) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§8-2 | C24@0c1dcbb2 | §8 language understanding preserves meaning, not merely translation | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§8-3 | C24@0c1dcbb2 | §8 provider/model change must not silently reduce Malayalam/Manglish commitment | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§9-1 | C24@0c1dcbb2 | §9 AI receives only the minimum authorized context for the task | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§9-2 | C24@0c1dcbb2 | §9 possible context sources (list illustrative 'possible'; each source consumed only when its owning domain exists) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; D14; D15; D16; D17; D18 | NI-AI; A-BP9-13 | — |
| 24-§9-3 | C24@0c1dcbb2 | §9 Business Memory remains in approved Smart Business storage | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D14 | NI-AI; A-BP9-13; BP §6.3 | — |
| 24-§9-4 | C24@0c1dcbb2 | §9 model conversation history is not the authoritative long-term record | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§10-1 | C24@0c1dcbb2 | §10 permission evaluation outside/around model reasoning, not prompt wording | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-2 | C24@0c1dcbb2 | §10 enforce user identity before protected data reaches AI or an AI-prepared action executes | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-3 | C24@0c1dcbb2 | §10 enforce business isolation before protected data reaches AI or an AI-prepared action executes | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-4 | C24@0c1dcbb2 | §10 enforce role permissions before protected data reaches AI or an AI-prepared action executes | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-5 | C24@0c1dcbb2 | §10 enforce feature entitlement before protected data reaches AI or an AI-prepared action executes | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-6 | C24@0c1dcbb2 | §10 enforce object/data scope before protected data reaches AI or an AI-prepared action executes | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-7 | C24@0c1dcbb2 | §10 enforce current authorization state before protected data reaches AI or an AI-prepared action executes | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-8 | C24@0c1dcbb2 | §10 example: Employee prompt injection must not reveal Owner profit | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-AI; A-BP102 Scenario A (employee profit denial) | — |
| 24-§10-9 | C24@0c1dcbb2 | §10 example: Manager role must not imply unrestricted Owner intelligence | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§10-10 | C24@0c1dcbb2 | §10 example: supplier/customer conversation must not expose internal merchant data | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; D18; D20 | NI-AI; A-BP9-13; kernel-level design constraint, external-participant channels built later | — |
| 24-§10-11 | C24@0c1dcbb2 | §10 example: revoked permission blocks execution even if AI prepared the action earlier | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§11-1 | C24@0c1dcbb2 | §11 tools/functions must have explicit schemas | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-2 | C24@0c1dcbb2 | §11 tools/functions must validate inputs | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-3 | C24@0c1dcbb2 | §11 tools/functions must use least privilege | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-4 | C24@0c1dcbb2 | §11 tools/functions must enforce business/role scope server-side | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-5 | C24@0c1dcbb2 | §11 tools/functions must distinguish read from write capability | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-6 | C24@0c1dcbb2 | §11 tools/functions must require confirmation/delegation where consequential | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-7 | C24@0c1dcbb2 | §11 tools/functions must be idempotent where retries are plausible | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-8 | C24@0c1dcbb2 | §11 tools/functions must preserve audit/provenance | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-9 | C24@0c1dcbb2 | §11 tools/functions must return structured success/failure information | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§11-10 | C24@0c1dcbb2 | §11 a model choosing a function is not authorization to execute it | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 24-§12 | C24@0c1dcbb2 | §12 Ask CFO Integration (whole section: interpretation, authorized read paths, fact/estimate distinction, read-only, continuation) | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO read-only intelligence); BP §11 (1.13 underpins Ask CFO) | — |
| 24-§13-1 | C24@0c1dcbb2 | §13 AI produces structured reminder drafts; Reminder Engine owns state/recurrence/scheduling/history/delegation | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (shared Reminder Engine) | — |
| 24-§13-2 | C24@0c1dcbb2 | §13 AI brain does not become a hidden scheduler | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§14 | C24@0c1dcbb2 | §14 UDI/OCR Integration (whole section: evidence not truth, extraction, preview, routing, no bypass) | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 24-§15-1 | C24@0c1dcbb2 | §15 voice is an input/output modality over the same AI and domain foundations | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§15-2 | C24@0c1dcbb2 | §15 orchestration coordinates transcription/understanding for voice | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§15-3 | C24@0c1dcbb2 | §15 orchestration coordinates language/context for voice | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§15-4 | C24@0c1dcbb2 | §15 orchestration coordinates intent routing for voice | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§15-5 | C24@0c1dcbb2 | §15 orchestration coordinates confirmation for voice | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§15-6 | C24@0c1dcbb2 | §15 orchestration coordinates response generation for voice | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§15-7 | C24@0c1dcbb2 | §15 orchestration coordinates optional voice output where permitted for voice | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§15-8 | C24@0c1dcbb2 | §15 voice must not create a separate assistant identity or separate business logic | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 24-§16 | C24@0c1dcbb2 | §16 Daily Intelligence Integration (whole section; scheduled AI creates no authority) | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Daily Intelligence) | — |
| 24-§17-1 | C24@0c1dcbb2 | §17 support ladder step 1: deterministic/FAQ answer where suitable | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 24-§17-2 | C24@0c1dcbb2 | §17 support ladder step 2: AI reasoning when FAQ is insufficient | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 24-§17-3 | C24@0c1dcbb2 | §17 support ladder step 3: human/support escalation | OBL | BUILD NOW | CORE-INT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 (FAQ-first to AI fallback to human escalation) | — |
| 24-§17-4 | C24@0c1dcbb2 | §17 no expensive reasoning for simple FAQ matches unless needed | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 24-§17-5 | C24@0c1dcbb2 | §17 support AI bounded by privacy and support-access rules | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; D19 | L-NEG; A-BP9-13 | — |
| 24-§18-1 | C24@0c1dcbb2 | §18 example Receipt to Ledger to Ask CFO to Daily Intelligence | SCN | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103; A-BP104 (secondary SB-P-1.15) | — |
| 24-§18-2 | C24@0c1dcbb2 | §18 example Voice to Reminder to Domain Action | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 Scenario A (reminder continuation) | — |
| 24-§18-3 | C24@0c1dcbb2 | §18 example Stock to Reorder to Supplier to Reminder | SCN | BUILD NOW | CORE-INT | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106 (stock/supplier/reorder) | — |
| 24-§18-4 | C24@0c1dcbb2 | §18 example Roster Document to HR to Attendance/Payroll Support | SCN | BUILD NOW | CORE-INT | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 (Staff/HR) | — |
| 24-§19-1 | C24@0c1dcbb2 | §19 model selection considers the eight listed factors (single obligation) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP9-13 | — |
| 24-§19-2 | C24@0c1dcbb2 | §19 use the least complex model that reliably performs the task | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§19-3 | C24@0c1dcbb2 | §19 do not hard-code Product Truth to a historical model name | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§19-4 | C24@0c1dcbb2 | §19 exact model routing belongs to architecture/EIS and evolves under governance | RULE | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-1 | C24@0c1dcbb2 | §20 prefer validated structured output over free-form parsing where AI drives workflows | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-2 | C24@0c1dcbb2 | §20 validate required fields | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-3 | C24@0c1dcbb2 | §20 validate types/formats | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-4 | C24@0c1dcbb2 | §20 validate enumerated domain states | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-5 | C24@0c1dcbb2 | §20 validate business identity/ownership | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-6 | C24@0c1dcbb2 | §20 validate referenced object existence | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-7 | C24@0c1dcbb2 | §20 validate numerical/date plausibility | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-8 | C24@0c1dcbb2 | §20 validate permission/entitlement | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-9 | C24@0c1dcbb2 | §20 validate duplicate/idempotency conditions | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§20-10 | C24@0c1dcbb2 | §20 invalid structured AI output fails safely and is retried/clarified, never blindly written | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§21-1 | C24@0c1dcbb2 | §21 AI may prepare/recommend; default authority remains human | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§21-2 | C24@0c1dcbb2 | §21 confirmation or valid delegation for recording uncertain financial facts | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DTX | NI-TXCMD; A-BP102 Scenario A | — |
| 24-§21-3 | C24@0c1dcbb2 | §21 confirmation for supplier orders | OBL | BUILD NOW | CORE-INT | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106 | — |
| 24-§21-4 | C24@0c1dcbb2 | §21 confirmation for credit overrides | OBL | BUILD NOW | CORE-INT | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP105 (customer-credit maturity) | — |
| 24-§21-5 | C24@0c1dcbb2 | §21 confirmation for payment match resolution | OBL | BUILD NOW | CORE-INT | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP105 (bank/payment reconciliation) | — |
| 24-§21-6 | C24@0c1dcbb2 | §21 confirmation for roster/attendance corrections | OBL | BUILD NOW | CORE-INT | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 (Staff/HR) | — |
| 24-§21-7 | C24@0c1dcbb2 | §21 confirmation for consequential imports | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI preview-confirm-update) | — |
| 24-§21-8 | C24@0c1dcbb2 | §21 confirmation for other owner commitments prepared through conversation | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§21-9 | C24@0c1dcbb2 | §21 confirmation binds to the exact reviewed action and current state | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§21-10 | C24@0c1dcbb2 | §21 authority revalidated at execution | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§22-1 | C24@0c1dcbb2 | §22 remain a Smart Business assistant, not a generic unrestricted chatbot | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 24-§22-2 | C24@0c1dcbb2 | §22 should redirect unrelated use where appropriate | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§22-3 | C24@0c1dcbb2 | §22 should refuse unsafe/illegal assistance | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§22-4 | C24@0c1dcbb2 | §22 should protect merchant/user/platform interests | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§22-5 | C24@0c1dcbb2 | §22 should avoid unsupported certainty | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§22-6 | C24@0c1dcbb2 | §22 should avoid accusations | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§22-7 | C24@0c1dcbb2 | §22 should avoid hidden manipulation/fear-heavy upsell | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§22-8 | C24@0c1dcbb2 | §22 should respect product scope and role boundaries | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-1 | C24@0c1dcbb2 | §23 handle OpenAI API outage | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-2 | C24@0c1dcbb2 | §23 handle timeout/rate limit | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-3 | C24@0c1dcbb2 | §23 handle malformed/invalid model output | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-4 | C24@0c1dcbb2 | §23 handle low confidence/ambiguity | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-5 | C24@0c1dcbb2 | §23 handle transcription failure | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-6 | C24@0c1dcbb2 | §23 handle vision/OCR failure | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 24-§23-7 | C24@0c1dcbb2 | §23 handle unavailable model/service | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-8 | C24@0c1dcbb2 | §23 handle tool/function failure | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-9 | C24@0c1dcbb2 | §23 handle stale context | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-10 | C24@0c1dcbb2 | §23 handle insufficient permission | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-11 | C24@0c1dcbb2 | §23 handle excessive context/cost condition | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-12 | C24@0c1dcbb2 | §23 failure rule: do not pretend success | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-13 | C24@0c1dcbb2 | §23 failure rule: preserve user input/evidence where safe | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-14 | C24@0c1dcbb2 | §23 failure rule: retry only where safe | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-15 | C24@0c1dcbb2 | §23 failure rule: use deterministic fallback where available | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-16 | C24@0c1dcbb2 | §23 failure rule: request clarification where useful | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-17 | C24@0c1dcbb2 | §23 failure rule: keep unrelated non-AI product functions available | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§23-18 | C24@0c1dcbb2 | §23 failure rule: avoid duplicate actions after retry | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§24-1 | C24@0c1dcbb2 | §24 provenance answers who initiated the request | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-2 | C24@0c1dcbb2 | §24 provenance answers which business/role context applied | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-3 | C24@0c1dcbb2 | §24 provenance answers source channel/modality | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-4 | C24@0c1dcbb2 | §24 provenance answers what evidence/context was used | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-5 | C24@0c1dcbb2 | §24 provenance answers what interpretation/draft AI produced | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-6 | C24@0c1dcbb2 | §24 provenance answers what clarification/confirmation occurred | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-7 | C24@0c1dcbb2 | §24 provenance answers which tool/domain service executed | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-8 | C24@0c1dcbb2 | §24 provenance answers what authoritative record resulted | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-9 | C24@0c1dcbb2 | §24 provenance answers whether the action failed/retried/corrected | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 24-§24-10 | C24@0c1dcbb2 | §24 prompt text/model metadata retention follows privacy/security/cost policy, not indiscriminate storage | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-1 | C24@0c1dcbb2 | §25 AI receives only data required for the authorized task | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-2 | C24@0c1dcbb2 | §25 no cross-business context leakage | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-3 | C24@0c1dcbb2 | §25 no unnecessary Owner financial data in staff interactions | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-4 | C24@0c1dcbb2 | §25 no permanent reliance on model-side memory | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-5 | C24@0c1dcbb2 | §25 careful handling of sensitive HR/customer/payment data | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-6 | C24@0c1dcbb2 | §25 governed logging/redaction | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-7 | C24@0c1dcbb2 | §25 approved data-retention boundaries | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-8 | C24@0c1dcbb2 | §25 provider credentials kept server-side | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§25-9 | C24@0c1dcbb2 | §25 merchant data remains merchant data | RULE | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 24-§26-1 | C24@0c1dcbb2 | §26 AI usage economically sustainable without degrading merchant value | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-2 | C24@0c1dcbb2 | §26 use FAQ/deterministic paths before AI where appropriate | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-3 | C24@0c1dcbb2 | §26 use model routing by task complexity | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-4 | C24@0c1dcbb2 | §26 use bounded context | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-5 | C24@0c1dcbb2 | §26 use structured prompts | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-6 | C24@0c1dcbb2 | §26 use safe caching for non-sensitive/repeatable outputs | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-7 | C24@0c1dcbb2 | §26 use duplicate suppression | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-8 | C24@0c1dcbb2 | §26 use batching/background processing when UX permits | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-9 | C24@0c1dcbb2 | §26 use observability for usage/cost/quality | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§26-10 | C24@0c1dcbb2 | §26 cost controls must not silently remove committed capability | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§27-1 | C24@0c1dcbb2 | §27 consistent assistant across WhatsApp | OBL | BUILD NOW | CORE-INT | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 | — |
| 24-§27-2 | C24@0c1dcbb2 | §27 consistent assistant across native Conversation Workspace | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§27-3 | C24@0c1dcbb2 | §27 consistent assistant across dashboard intelligence surfaces | OBL | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Daily Intelligence, Ask CFO surfaces) | — |
| 24-§27-4 | C24@0c1dcbb2 | §27 consistent assistant across voice | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§27-5 | C24@0c1dcbb2 | §27 consistent assistant across document upload flows | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 24-§27-6 | C24@0c1dcbb2 | §27 core assistant preserves product personality across UI/channel | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§27-7 | C24@0c1dcbb2 | §27 core assistant preserves permissions across UI/channel | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§27-8 | C24@0c1dcbb2 | §27 core assistant preserves Business Memory across UI/channel | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§27-9 | C24@0c1dcbb2 | §27 core assistant preserves clarification behavior across UI/channel | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§27-10 | C24@0c1dcbb2 | §27 core assistant preserves authority boundaries across UI/channel | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§27-11 | C24@0c1dcbb2 | §27 core assistant preserves feature semantics across UI/channel | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-1 | C24@0c1dcbb2 | §28 Blueprint/EIS defines server-side OpenAI integration/gateway | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-2 | C24@0c1dcbb2 | §28 Blueprint/EIS defines prompt/instruction governance | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-3 | C24@0c1dcbb2 | §28 Blueprint/EIS defines model routing | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-4 | C24@0c1dcbb2 | §28 Blueprint/EIS defines structured output validation | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-5 | C24@0c1dcbb2 | §28 Blueprint/EIS defines tool/function registry | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-6 | C24@0c1dcbb2 | §28 Blueprint/EIS defines permission-aware context retrieval | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-7 | C24@0c1dcbb2 | §28 Blueprint/EIS defines conversation context handling | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-8 | C24@0c1dcbb2 | §28 Blueprint/EIS defines domain-service dispatch | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-9 | C24@0c1dcbb2 | §28 Blueprint/EIS defines retries/timeouts/idempotency | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-10 | C24@0c1dcbb2 | §28 Blueprint/EIS defines provider usage/cost telemetry | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-11 | C24@0c1dcbb2 | §28 Blueprint/EIS defines safety/moderation where appropriate | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§28-12 | C24@0c1dcbb2 | §28 Blueprint/EIS defines audit/provenance linkage | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§29-1 | C24@0c1dcbb2 | §29 Product Truth describes behavior, not a historical model identifier | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§29-2 | C24@0c1dcbb2 | §29 domain business logic remains in Smart Business services | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§29-3 | C24@0c1dcbb2 | §29 merchant data truth remains in Smart Business storage | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§29-4 | C24@0c1dcbb2 | §29 permissions independent of provider responses | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§29-5 | C24@0c1dcbb2 | §29 provider/model changes must not alter human-authority rules | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 24-§29-6 | C24@0c1dcbb2 | §29 a provider change requires governed architecture/product review, not silent substitution | RULE | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 24-§30-1 | C24@0c1dcbb2 | §30 non-goal: model conversation as permanent Business Memory | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§30-2 | C24@0c1dcbb2 | §30 non-goal: unrestricted production database access by AI | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§30-3 | C24@0c1dcbb2 | §30 non-goal: free-form destructive SQL execution | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§30-4 | C24@0c1dcbb2 | §30 non-goal: permission decisions based only on prompt instructions | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§30-5 | C24@0c1dcbb2 | §30 non-goal: separate AI brains per channel/feature without architectural reason | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§30-6 | C24@0c1dcbb2 | §30 non-goal: AI-created business authority | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§30-7 | C24@0c1dcbb2 | §30 non-goal: unsupported financial/legal/statutory certainty | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§30-8 | C24@0c1dcbb2 | §30 non-goal: hard-coding behavior to one historical model version | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 24-§31-1 | C24@0c1dcbb2 | §31 acceptance 1: WhatsApp and Conversation Workspace share one AI orchestration/domain-action path | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI; D20 | NI-AI; L-X20; A-BP9-13 | — |
| 24-§31-2 | C24@0c1dcbb2 | §31 acceptance 2: same intent gives equivalent domain semantics across text/voice | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 24-§31-3 | C24@0c1dcbb2 | §31 acceptance 3: role/permission data enforced before protected context/tool execution | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102 | — |
| 24-§31-4 | C24@0c1dcbb2 | §31 acceptance 4: Employee cannot prompt the model into Owner intelligence | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102 Scenario A | — |
| 24-§31-5 | C24@0c1dcbb2 | §31 acceptance 5: ambiguous consequential input triggers clarification | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 | — |
| 24-§31-6 | C24@0c1dcbb2 | §31 acceptance 6: AI structured outputs are schema-validated | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP9-13 | — |
| 24-§31-7 | C24@0c1dcbb2 | §31 acceptance 7: tool/function call does not bypass confirmation/authorization | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102 | — |
| 24-§31-8 | C24@0c1dcbb2 | §31 acceptance 8: receipt/image interpretation goes through UDI confirmation rules | SCN | BUILD NOW | CORE-INT | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 24-§31-9 | C24@0c1dcbb2 | §31 acceptance 9: Ask CFO remains read-only | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 Scenario B (Ask CFO read-only boundary) | — |
| 24-§31-10 | C24@0c1dcbb2 | §31 acceptance 10: reminder creation routes to the shared Reminder Engine | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (shared Reminder Engine) | — |
| 24-§31-11 | C24@0c1dcbb2 | §31 acceptance 11: OpenAI outage does not corrupt or duplicate business state | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102 (graceful AI/provider failure) | — |
| 24-§31-12 | C24@0c1dcbb2 | §31 acceptance 12: deterministic fallback remains available where designed | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 | — |
| 24-§31-13 | C24@0c1dcbb2 | §31 acceptance 13: retry is idempotent for consequential actions | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D12; DTX | NI-TXCMD; PRECEDENT-CMD; A-BP9-13 | — |
| 24-§31-14 | C24@0c1dcbb2 | §31 acceptance 14: model/provider metadata and merchant data handled under privacy policy | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP9-13 | — |
| 24-§31-15 | C24@0c1dcbb2 | §31 acceptance 15: Business Memory persists independently of model conversation history | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | D14 | NI-AI; A-BP9-13 | — |
| 24-§31-16 | C24@0c1dcbb2 | §31 acceptance 16: model routing can evolve without rewriting domain business rules | SCN | BUILD NOW | CORE-INT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP9-13 | — |
| 24-§32 | C24@0c1dcbb2 | §32 Dependencies | DEP | BUILD NOW | CORE-INT | SB-P-1.13 | NOT APPLICABLE | — | L-DEP; delegate register in §J | — |
| 24-§33 | C24@0c1dcbb2 | §33 Provenance | PROV | BUILD NOW | CORE-INT | SB-P-1.13 | NOT APPLICABLE | — | L-PROV | — |
| 24-§34 | C24@0c1dcbb2 | §34 Completion Gate | GATE | BUILD NOW | CORE-INT | SB-P-1.13 | NOT APPLICABLE | — | L-GATE | — |

## B. Contract 9 — Human Language Layer (full mission-assigned contract)

106 rows: 14 `ASSIGNED TO LATER MISSION`, 89 `IN SCOPE`, 3 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 9-§1 | C9@649c55f3 | §1 Feature Identity (English/Malayalam/Manglish first-class, across features) | NARR | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 9-§5 to 9-§7 and 9-§12 rows | — |
| 9-§2 | C9@649c55f3 | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 9-§3-1 | C9@649c55f3 | §3 prioritize meaning over literal translation | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-2 | C9@649c55f3 | §3 understand context: Malayalam written in English letters | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-3 | C9@649c55f3 | §3 understand context: mixed Malayalam-English sentences | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-4 | C9@649c55f3 | §3 understand context: local business vocabulary | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-5 | C9@649c55f3 | §3 understand context: common shorthand | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-6 | C9@649c55f3 | §3 understand context: informal quantity/unit expressions | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-7 | C9@649c55f3 | §3 understand context: names with spelling variations | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-8 | C9@649c55f3 | §3 understand context: conversational corrections and follow-ups | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§3-9 | C9@649c55f3 | §3 answer in language natural for the user and business context | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§4-1 | C9@649c55f3 | §4 language preference business/user scoped | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 9-§4-2 | C9@649c55f3 | §4 language preference changeable | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 9-§4-3 | C9@649c55f3 | §4 language preference respected across supported channels (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 9-§4-4 | C9@649c55f3 | §4 language preference overridden naturally when user clearly switches language | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 9-§4-5 | C9@649c55f3 | §4 language preference not a substitute for understanding mixed-language input | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 9-§5-1 | C9@649c55f3 | §5 English simple and merchant-friendly | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§5-2 | C9@649c55f3 | §5 avoid unnecessary jargon; explain specialist terms plainly | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§6-1 | C9@649c55f3 | §6 Malayalam natural and practical, ordinary Kerala merchant phrasing | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§6-2 | C9@649c55f3 | §6 preserve meaning and tone for numbers, dates, quantities, credit, reminders, instructions | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§7-1 | C9@649c55f3 | §7 Manglish is a first-class interaction mode | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§7-2 | C9@649c55f3 | §7 handle Malayalam meaning in Latin characters with spelling variation | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§7-3 | C9@649c55f3 | §7 must not rely on one fixed slang dictionary as sole interpretation mechanism | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 9-§8-1 | C9@649c55f3 | §8 voice understanding uses the same language/intent layer as text | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 9-§8-2 | C9@649c55f3 | §8 Basic Voice supports natural English/Malayalam/Manglish speech and preserves clarification/permission/confirmation rules | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DV; D12; DAI | NI-VOICE; A-BP102 | — |
| 9-§8-3 | C9@649c55f3 | §8 Voice Plus supports the same languages and rules | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 (Voice Plus); GPCV row 12A | — |
| 9-§8-4 | C9@649c55f3 | §8 transcription uncertainty must not become silent business-record uncertainty | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 9-§9-1 | C9@649c55f3 | §9 ask the smallest useful clarification when ambiguity could materially change a record/action | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§9-2 | C9@649c55f3 | §9 clarify uncertain person/business name | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§9-3 | C9@649c55f3 | §9 clarify ambiguous amount or unit | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§9-4 | C9@649c55f3 | §9 clarify unclear whether money is paid or owed | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§9-5 | C9@649c55f3 | §9 clarify unclear reminder time/date (language capability; reminder creation is SB-P-1.15) | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI; D15 | NI-CONV; A-BP9-13 | — |
| 9-§9-6 | C9@649c55f3 | §9 clarify uncertain stock item | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§9-7 | C9@649c55f3 | §9 clarify multiple plausible meanings of a mixed-language phrase | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§9-8 | C9@649c55f3 | §9 do not over-question harmless phrasing differences | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§10-1 | C9@649c55f3 | §10 identity resolution is a separate controlled step from language normalization | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 9-§10-2 | C9@649c55f3 | §10 likely spelling match must not silently merge different customers/suppliers/employees | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 9-§10-3 | C9@649c55f3 | §10 clarify when multiple candidates remain plausible | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 9-§11-1 | C9@649c55f3 | §11 interpret rupee amounts | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§11-2 | C9@649c55f3 | §11 interpret dates/times | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§11-3 | C9@649c55f3 | §11 interpret quantities | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§11-4 | C9@649c55f3 | §11 interpret weights/units | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§11-5 | C9@649c55f3 | §11 interpret recurring time phrases | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§11-6 | C9@649c55f3 | §11 interpret colloquial business shorthand | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§11-7 | C9@649c55f3 | §11 consequential normalization remains visible through preview/confirmation where uncertain | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 9-§12-1 | C9@649c55f3 | §12 Human Language Layer reused by Ledger / Business Memory (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-2 | C9@649c55f3 | §12 Human Language Layer reused by Ask CFO (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-3 | C9@649c55f3 | §12 Human Language Layer reused by Daily Intelligence (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-4 | C9@649c55f3 | §12 Human Language Layer reused by Conversation Workspace | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP102 | — |
| 9-§12-5 | C9@649c55f3 | §12 Human Language Layer reused by WhatsApp (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-6 | C9@649c55f3 | §12 Human Language Layer reused by Reminder/Delegated Automation (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-7 | C9@649c55f3 | §12 Human Language Layer reused by Staff/HR (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-8 | C9@649c55f3 | §12 Human Language Layer reused by Stock/Supplier/Reorder (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-9 | C9@649c55f3 | §12 Human Language Layer reused by Smart Order & Delivery (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-10 | C9@649c55f3 | §12 Human Language Layer reused by Support Automation (FAQ-first foundation) | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 9-§12-11 | C9@649c55f3 | §12 Human Language Layer reused by Smart Credit Awareness (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP105; SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-12 | C9@649c55f3 | §12 Human Language Layer reused by Compliance and other conversational features (layer provided by SB-P-1.13; reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 (Compliance Shield); SB-P-1.12 Blueprint §12 (SB-P-1.13 provides Human Language Foundation) | — |
| 9-§12-13 | C9@649c55f3 | §12 features must not create incompatible language logic per channel/module | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§13-1 | C9@649c55f3 | §13 AI may interpret intent | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§13-2 | C9@649c55f3 | §13 AI may normalize language for internal structured processing | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§13-3 | C9@649c55f3 | §13 AI may explain terminology | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§13-4 | C9@649c55f3 | §13 AI may adapt response language/tone | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§13-5 | C9@649c55f3 | §13 AI may identify likely corrections | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§13-6 | C9@649c55f3 | §13 AI may ask clarification | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§13-7 | C9@649c55f3 | §13 AI must not fabricate missing business facts | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 9-§13-8 | C9@649c55f3 | §13 AI must not silently choose among materially different interpretations | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 9-§13-9 | C9@649c55f3 | §13 AI must not create permission from language inference | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 9-§13-10 | C9@649c55f3 | §13 AI must not expose unauthorized information because the user phrased a request naturally | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 9-§13-11 | C9@649c55f3 | §13 AI must not make unsupported claims of perfect language understanding | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | L-NEG; A-BP9-13 | — |
| 9-§14-1 | C9@649c55f3 | §14 responses respectful | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§14-2 | C9@649c55f3 | §14 responses calm | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§14-3 | C9@649c55f3 | §14 responses concise by default | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§14-4 | C9@649c55f3 | §14 responses practical | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§14-5 | C9@649c55f3 | §14 responses culturally natural | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§14-6 | C9@649c55f3 | §14 responses non-patronizing | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§14-7 | C9@649c55f3 | §14 responses non-accusatory | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§14-8 | C9@649c55f3 | §14 preserve Lighthouse dignity principles in every language | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§15-1 | C9@649c55f3 | §15 fixed universal confidence thresholds are implementation detail, not Product Truth | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§15-2 | C9@649c55f3 | §15 proceed when interpretation is sufficiently clear and safe | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§15-3 | C9@649c55f3 | §15 clarify when ambiguity is material | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§15-4 | C9@649c55f3 | §15 reject/hand off when understanding is insufficient | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§15-5 | C9@649c55f3 | §15 no fixed 99%+ accuracy promise | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§16-1 | C9@649c55f3 | §16 on language failure preserve the original input | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§16-2 | C9@649c55f3 | §16 ask short clarification or offer simpler phrasing path | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 9-§16-3 | C9@649c55f3 | §16 allow switching text/voice/channel where useful (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DV | NI-CONV; A-BP9-13 | — |
| 9-§16-4 | C9@649c55f3 | §16 avoid creating a consequential record until meaning is safe | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 9-§16-5 | C9@649c55f3 | §16 allow Support escalation when persistent language failure blocks use | OBL | BUILD NOW | CORE-FDN | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 (human escalation) | — |
| 9-§17-1 | C9@649c55f3 | §17 acceptance 1: equivalent Ledger intent in English, Malayalam and Manglish | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI; DTX | NI-AI; NI-TXCMD; A-BP102 | — |
| 9-§17-2 | C9@649c55f3 | §17 acceptance 2: mixed-language sentence handling | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 | — |
| 9-§17-3 | C9@649c55f3 | §17 acceptance 3: spelling variation without unsafe identity merge | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP9-13 | — |
| 9-§17-4 | C9@649c55f3 | §17 acceptance 4: voice input with language uncertainty requiring clarification | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 9-§17-5 | C9@649c55f3 | §17 acceptance 5: reminder date/time clarification | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 Scenario A; C11 §15 | — |
| 9-§17-6 | C9@649c55f3 | §17 acceptance 6: Ask CFO response in user's preferred language | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO) | — |
| 9-§17-7 | C9@649c55f3 | §17 acceptance 7: multilingual Support FAQ answer | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 9-§17-8 | C9@649c55f3 | §17 acceptance 8: natural language switch mid-conversation | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 | — |
| 9-§17-9 | C9@649c55f3 | §17 acceptance 9: role permissions unchanged by language/channel | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12; D20 | NI-AI; L-X20; A-BP102 | — |
| 9-§17-10 | C9@649c55f3 | §17 acceptance 10: no consequential write from materially ambiguous language | SCN | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102 | — |
| 9-§18-1 | C9@649c55f3 | §18 rejected: English-only product behavior | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§18-2 | C9@649c55f3 | §18 rejected: literal machine translation as complete Malayalam strategy | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§18-3 | C9@649c55f3 | §18 rejected: fixed slang dictionary as sole engine | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§18-4 | C9@649c55f3 | §18 rejected: universal hard-coded confidence constant as Product Truth | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§18-5 | C9@649c55f3 | §18 rejected: unsupported absolute accuracy claims | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§18-6 | C9@649c55f3 | §18 rejected: silent guessing for consequential ambiguity | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§18-7 | C9@649c55f3 | §18 rejected: separate incompatible language semantics for WhatsApp vs web app | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 9-§19 | C9@649c55f3 | §19 integrates with Permissions/Conversation/Voice/destination validation; never an independent authority layer | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 9-§20 | C9@649c55f3 | §20 Completion Gate | GATE | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-GATE | — |

## C. Contract 10 — Conversation Workspace & Channel Independence (full mission-assigned contract)

158 rows: 29 `ASSIGNED TO LATER MISSION`, 121 `IN SCOPE`, 8 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 10-§1 | C10@5c145ed7 | §1 Feature Identity (native chat surface; continuity reasons) | NARR | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 10-§4, §5, §14 rows | — |
| 10-§2 | C10@5c145ed7 | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 10-§3 | C10@5c145ed7 | §3 Lighthouse Principles (nine) | PRIN | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 10-§6, §8, §13, §15, §17, §19 rows | — |
| 10-§4-1 | C10@5c145ed7 | §4 input: text | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§4-2 | C10@5c145ed7 | §4 input: voice | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 10-§4-3 | C10@5c145ed7 | §4 input: images/photos (intake and handoff boundary only; interpretation is UDI, SB-P-1.14) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 (attachment handoff into UDI path) | — |
| 10-§4-4 | C10@5c145ed7 | §4 input: Excel (intake and handoff boundary only; interpretation is UDI, SB-P-1.14) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 (attachment handoff into UDI path) | — |
| 10-§4-5 | C10@5c145ed7 | §4 input: CSV (intake and handoff boundary only; interpretation is UDI, SB-P-1.14) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 (attachment handoff into UDI path) | — |
| 10-§4-6 | C10@5c145ed7 | §4 input: PDF (intake and handoff boundary only; interpretation is UDI, SB-P-1.14) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 (attachment handoff into UDI path) | — |
| 10-§4-7 | C10@5c145ed7 | §4 input: other approved business documents (intake and handoff boundary only; interpretation is UDI, SB-P-1.14) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 (attachment handoff into UDI path) | — |
| 10-§4-8 | C10@5c145ed7 | §4 uploaded file is not trusted business truth; interpretation follows UDI rules | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 | — |
| 10-§5-1 | C10@5c145ed7 | §5 output: text responses | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§5-2 | C10@5c145ed7 | §5 output: short voice responses | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 10-§5-3 | C10@5c145ed7 | §5 output: structured visual summaries | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§5-4 | C10@5c145ed7 | §5 output: useful images/media where a feature needs them | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§5-5 | C10@5c145ed7 | §5 output: Ask CFO responses | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO) | — |
| 10-§5-6 | C10@5c145ed7 | §5 output: confirmations and clarification prompts | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§5-7 | C10@5c145ed7 | §5 output: reminders presented for human choice | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Reminder Engine) | — |
| 10-§5-8 | C10@5c145ed7 | §5 output: actions presented for human choice | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§5-9 | C10@5c145ed7 | §5 output: downloadable Excel/CSV/PDF outputs | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§5-10 | C10@5c145ed7 | §5 output: business-document retrieval where permitted | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (Receipt Cabinet; governed document storage) | — |
| 10-§5-11 | C10@5c145ed7 | §5 dense numerical data favors readable text/tables/files over long audio | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV | NI-CONV; A-BP9-13 | — |
| 10-§6-1 | C10@5c145ed7 | §6 Workspace uses the single shared business identity and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-2 | C10@5c145ed7 | §6 Workspace uses the single shared user identity and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-3 | C10@5c145ed7 | §6 Workspace uses the single shared Business Memory and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-4 | C10@5c145ed7 | §6 Workspace uses the single shared conversation/context model where permitted and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-5 | C10@5c145ed7 | §6 Workspace uses the single shared Permission Engine and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-6 | C10@5c145ed7 | §6 Workspace uses the single shared Human Language Layer and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-7 | C10@5c145ed7 | §6 Workspace uses the single shared Universal Document Intelligence and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-8 | C10@5c145ed7 | §6 Workspace uses the single shared Ask CFO reasoning and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D15; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-9 | C10@5c145ed7 | §6 Workspace uses the single shared reminder/automation services and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D15; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-10 | C10@5c145ed7 | §6 Workspace uses the single shared notification/action services and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D15; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-11 | C10@5c145ed7 | §6 Workspace uses the single shared confirmation/clarification rules and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-12 | C10@5c145ed7 | §6 Workspace uses the single shared audit/idempotency foundations and creates no channel-specific copy (second channel verified in SB-P-1.20) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; D20 | NI-CONV; L-X20; A-BP9-13; BP §6.4 | — |
| 10-§6-13 | C10@5c145ed7 | §6 no separate ledgers/permissions/reminders/document parsers/feature truth because the channel differs | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§7-1 | C10@5c145ed7 | §7 begin a workflow in one approved channel and continue in another without duplicate record | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 (move between native app and WhatsApp without duplicate records) | — |
| 10-§7-2 | C10@5c145ed7 | §7 pending confirmation: preserve the pending consequential state safely | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13; BP §6.4 (confirmation state) | — |
| 10-§7-3 | C10@5c145ed7 | §7 pending confirmation: exact reviewed action remains bound to the confirmation | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13; BP §6.4 (confirmation state) | — |
| 10-§7-4 | C10@5c145ed7 | §7 pending confirmation: authority revalidated before execution | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13; BP §6.4 (confirmation state) | — |
| 10-§7-5 | C10@5c145ed7 | §7 pending confirmation: switching channels/sessions must not silently reinterpret or execute the action | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13; BP §6.4 (confirmation state) | — |
| 10-§7-6 | C10@5c145ed7 | §7 context follows the user within privacy/retention policy; stored business state controls over chat memory | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; A-BP9-13 | — |
| 10-§8-1 | C10@5c145ed7 | §8 Owner accesses capabilities available to the business and Owner role | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§8-2 | C10@5c145ed7 | §8 Manager accesses only Owner-delegated capabilities; no automatic Owner profit/Ask CFO/unrestricted intelligence | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§8-3 | C10@5c145ed7 | §8 Employee only explicitly permitted operational actions and approved self-service | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§8-4 | C10@5c145ed7 | §8 Customer/Supplier/Delivery Staff do not receive the Owner's general Workspace | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§9-1 | C10@5c145ed7 | §9 Ask CFO available through the Workspace under the same read-only boundary | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO); BP §11 | — |
| 10-§9-2 | C10@5c145ed7 | §9 Ask CFO may retrieve/explain/compare/identify patterns/suggest/offer continuation (single Ask CFO capability list) | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO) | — |
| 10-§9-3 | C10@5c145ed7 | §9 Ask CFO gains no record-write authority because displayed in the app (kernel read/write tool separation) | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; D15 | L-NEG; A-BP9-13; realized with 24-§11-5 | — |
| 10-§10-1 | C10@5c145ed7 | §10 uploads reuse UDI upload/interpret/preview/clarify/confirm/validated-update | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 10-§10-2 | C10@5c145ed7 | §10 Workspace lets users upload (intake and handoff only) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 (attachment handoff into UDI path) | — |
| 10-§10-3 | C10@5c145ed7 | §10 review extracted/interpreted content | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI preview) | — |
| 10-§10-4 | C10@5c145ed7 | §10 correct uncertainty | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI ambiguity handling) | — |
| 10-§10-5 | C10@5c145ed7 | §10 confirm the intended business action from a document | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (preview-confirm-update) | — |
| 10-§10-6 | C10@5c145ed7 | §10 receive success/failure state of intake and handoff | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 | — |
| 10-§10-7 | C10@5c145ed7 | §10 retrieve permitted documents/exports later | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (Receipt Cabinet; governed document storage) | — |
| 10-§10-8 | C10@5c145ed7 | §10 unsupported/unsafe files fail clearly without affecting unrelated operation | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-ATT; A-BP102; PRECEDENT: catalog import content-type rejection | — |
| 10-§11-1 | C10@5c145ed7 | §11 Basic Voice available according to plan/permission rules | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 10-§11-2 | C10@5c145ed7 | §11 voice supports business input | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV; DTX | NI-VOICE; A-BP102 | — |
| 10-§11-3 | C10@5c145ed7 | §11 voice supports questions | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 10-§11-4 | C10@5c145ed7 | §11 voice supports reminders | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (shared Reminder Engine) | — |
| 10-§11-5 | C10@5c145ed7 | §11 voice supports operational commands | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 10-§11-6 | C10@5c145ed7 | §11 voice supports clarification | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 10-§11-7 | C10@5c145ed7 | §11 voice supports short useful responses | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 10-§11-8 | C10@5c145ed7 | §11 Workspace must not require Voice Plus for basic approved voice interaction | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 10-§12-1 | C10@5c145ed7 | §12 English, Malayalam and Manglish first-class in the Workspace | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§12-2 | C10@5c145ed7 | §12 no formal software terminology needed; mixed expressions via shared Human Language Layer | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§12-3 | C10@5c145ed7 | §12 consequential ambiguity triggers clarification, not guesswork | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§13-1 | C10@5c145ed7 | §13 Workspace may prepare/initiate actions; execution belongs to the underlying feature service | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; DTX | NI-TXCMD; PRECEDENT-CMD; A-BP102 | — |
| 10-§13-2 | C10@5c145ed7 | §13 example action: create a Ledger transaction (through a governed domain command) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; DTX | NI-TXCMD; A-BP102 Scenario A | — |
| 10-§13-3 | C10@5c145ed7 | §13 example action: confirm an interpreted receipt | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 10-§13-4 | C10@5c145ed7 | §13 example action: create a reminder | OBL | BUILD NOW | CORE-CH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 | — |
| 10-§13-5 | C10@5c145ed7 | §13 example action: create an order draft | OBL | BUILD NOW | CORE-CH | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 (Smart Order & Delivery) | — |
| 10-§13-6 | C10@5c145ed7 | §13 example action: approve a reorder | OBL | BUILD NOW | CORE-CH | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106 | — |
| 10-§13-7 | C10@5c145ed7 | §13 example action: submit an attendance correction request | OBL | BUILD NOW | CORE-CH | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 (Staff/HR) | — |
| 10-§13-8 | C10@5c145ed7 | §13 each action inherits current role permission | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§13-9 | C10@5c145ed7 | §13 each action inherits feature-specific confirmation rules | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§13-10 | C10@5c145ed7 | §13 each action inherits idempotency/audit behavior | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§13-11 | C10@5c145ed7 | §13 each action inherits current business state | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§13-12 | C10@5c145ed7 | §13 the chat UI itself is never the source of authority | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§14-1 | C10@5c145ed7 | §14 Workspace remains usable when WhatsApp delivery/API fails (pre-SB-P-1.20: Meta-disconnect proof) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 Scenario B; BP §8.4 | — |
| 10-§14-2 | C10@5c145ed7 | §14 during WhatsApp failure: background jobs continue where dependencies are healthy | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario B (Meta outage degradation) | — |
| 10-§14-3 | C10@5c145ed7 | §14 during WhatsApp failure: POS/API ingestion continues where available | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario B (Meta outage degradation) | — |
| 10-§14-4 | C10@5c145ed7 | §14 during WhatsApp failure: payment reconciliation continues | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario B (Meta outage degradation) | — |
| 10-§14-5 | C10@5c145ed7 | §14 during WhatsApp failure: scheduled business intelligence continues through other approved surfaces | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario B (Meta outage degradation) | — |
| 10-§14-6 | C10@5c145ed7 | §14 during WhatsApp failure: failed WhatsApp delivery reported as channel failure, not as failure of the business action | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario B (Meta outage degradation) | — |
| 10-§14-7 | C10@5c145ed7 | §14 during WhatsApp failure: WhatsApp retry must not duplicate consequential actions | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario B (Meta outage degradation) | — |
| 10-§15-1 | C10@5c145ed7 | §15 authentication method and business identity are separate concepts | RULE | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§15-2 | C10@5c145ed7 | §15 Workspace must require a valid authorized session | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§15-3 | C10@5c145ed7 | §15 Workspace must resolve the correct business/role | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§15-4 | C10@5c145ed7 | §15 Workspace must prevent cross-business context leakage | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§15-5 | C10@5c145ed7 | §15 Workspace must handle session expiry/re-authentication safely | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§15-6 | C10@5c145ed7 | §15 Workspace must revalidate permission before consequential execution | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§15-7 | C10@5c145ed7 | §15 UI visibility does not substitute for server/data authorization | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§16-1 | C10@5c145ed7 | §16 conversation history is not unlimited authority or permanent memory by default | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§16-2 | C10@5c145ed7 | §16 retention follows privacy/account-lifecycle policy | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DUF6 | NI-CONV; A-BP9-13; BP §15 item 6 not on critical path (GPCV §8) | — |
| 10-§16-3 | C10@5c145ed7 | §16 distinguish conversational context | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§16-4 | C10@5c145ed7 | §16 distinguish durable Business Memory | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; A-BP9-13 | — |
| 10-§16-5 | C10@5c145ed7 | §16 distinguish documents/files | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; A-BP9-13 | — |
| 10-§16-6 | C10@5c145ed7 | §16 distinguish audit/history | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§16-7 | C10@5c145ed7 | §16 distinguish temporary preview/confirmation state | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§16-8 | C10@5c145ed7 | §16 not collapsed into one uncontrolled transcript store | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§17-1 | C10@5c145ed7 | §17 ask the smallest useful question when consequential intent is unclear | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§17-2 | C10@5c145ed7 | §17 clarify: ambiguous customer/supplier | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§17-3 | C10@5c145ed7 | §17 clarify: unclear amount/date | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§17-4 | C10@5c145ed7 | §17 clarify: uncertain document extraction | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (ambiguity handling) | — |
| 10-§17-5 | C10@5c145ed7 | §17 clarify: multiple payment matches | OBL | BUILD NOW | CORE-CH | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP105 (bank/payment reconciliation) | — |
| 10-§17-6 | C10@5c145ed7 | §17 clarify: unclear item/quantity | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§17-7 | C10@5c145ed7 | §17 clarify: permission-sensitive action | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; DAI | NI-CONV; A-BP9-13 | — |
| 10-§17-8 | C10@5c145ed7 | §17 confirmation binds to exact reviewed action and current actor/state | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§17-9 | C10@5c145ed7 | §17 execution-time permission revalidation | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§18-1 | C10@5c145ed7 | §18 handle WhatsApp/channel outage (native path with Meta disconnected) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§18-2 | C10@5c145ed7 | §18 handle web session expiry | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§18-3 | C10@5c145ed7 | §18 handle failed file upload | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§18-4 | C10@5c145ed7 | §18 handle unsupported/unsafe file | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§18-5 | C10@5c145ed7 | §18 handle low-confidence interpretation | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§18-6 | C10@5c145ed7 | §18 handle permission change during conversation | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§18-7 | C10@5c145ed7 | §18 handle duplicate submission | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§18-8 | C10@5c145ed7 | §18 handle stale confirmation | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§18-9 | C10@5c145ed7 | §18 handle provider/model failure | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§18-10 | C10@5c145ed7 | §18 handle failed download/render | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§18-11 | C10@5c145ed7 | §18 handle channel switch during pending confirmation | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario A (cross-channel confirmation binding and revalidation) | — |
| 10-§18-12 | C10@5c145ed7 | §18 handle underlying feature service failure | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§18-13 | C10@5c145ed7 | §18 a narrow failure must not freeze unrelated operation | RULE | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§19-1 | C10@5c145ed7 | §19 no cross-business conversation context leakage | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§19-2 | C10@5c145ed7 | §19 no Employee escalation into Owner intelligence through chat | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§19-3 | C10@5c145ed7 | §19 no channel-based permission widening | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§19-4 | C10@5c145ed7 | §19 sensitive audio not played to unauthorized roles | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV; D12 | L-NEG; A-BP9-13 | — |
| 10-§19-5 | C10@5c145ed7 | §19 file access follows business/role authorization | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§19-6 | C10@5c145ed7 | §19 continuity does not justify bypassing security | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§19-7 | C10@5c145ed7 | §19 chat surface is not a platform surveillance channel | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§20-1 | C10@5c145ed7 | §20 common interactions target sub-3-second experience where technically reasonable | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP9-13 | — |
| 10-§20-2 | C10@5c145ed7 | §20 longer operations show progress | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§20-3 | C10@5c145ed7 | §20 longer operations avoid duplicate submission | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§20-4 | C10@5c145ed7 | §20 longer operations allow safe retry/recovery | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§20-5 | C10@5c145ed7 | §20 never trade permission/integrity/confirmation safeguards for speed | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13 | — |
| 10-§20-6 | C10@5c145ed7 | §20 interface calm, familiar and useful, not a complex ERP console | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP9-13 | — |
| 10-§21 | C10@5c145ed7 | §21 Shared Foundations to Reuse (cross-reference list) | REUSE | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | L-REUSE; carried by 10-§6 rows | — |
| 10-§22-1 | C10@5c145ed7 | §22 non-goal: separate web-only Ledger or intelligence engine | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§22-2 | C10@5c145ed7 | §22 non-goal: generic unrestricted AI chatbot | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§22-3 | C10@5c145ed7 | §22 non-goal: replacing WhatsApp as a product decision | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§22-4 | C10@5c145ed7 | §22 non-goal: duplicating data/permissions by channel | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§22-5 | C10@5c145ed7 | §22 non-goal: offline-without-internet operation unless separately approved | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§22-6 | C10@5c145ed7 | §22 non-goal: public customer/supplier portal into Owner intelligence | NEG | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13 | — |
| 10-§23-1 | C10@5c145ed7 | §23 acceptance 1: Owner text transaction with accurate stored-state confirmation | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; DTX; DAI | NI-TXCMD; A-BP102 Scenario A | — |
| 10-§23-2 | C10@5c145ed7 | §23 acceptance 2: Owner voice gets same permission/clarification behavior as text | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 10-§23-3a | C10@5c145ed7 | §23 acceptance 3 (Workspace slice): image/PDF/CSV accepted and handed off; no consequential update without UDI preview | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D14 | NI-ATT; A-BP102 (attachment handoff) | — |
| 10-§23-3b | C10@5c145ed7 | §23 acceptance 3 (UDI slice): UDI preview before consequential update | SCN | BUILD NOW | CORE-CH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 Scenario A | — |
| 10-§23-4 | C10@5c145ed7 | §23 acceptance 4: Owner uses Ask CFO without granting record-write authority | SCN | BUILD NOW | CORE-CH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 Scenario B | — |
| 10-§23-5 | C10@5c145ed7 | §23 acceptance 5: Employee cannot obtain Owner intelligence through conversation prompts | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102 Scenario A | — |
| 10-§23-6 | C10@5c145ed7 | §23 acceptance 6: workflow begins on WhatsApp and continues in the app without duplicates | SCN | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 Scenario A | — |
| 10-§23-7 | C10@5c145ed7 | §23 acceptance 7: WhatsApp outage does not stop healthy app operations (native slice; background-ops slice re-verified SB-P-1.20) | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 Scenario B; BP §8.4 | — |
| 10-§23-8 | C10@5c145ed7 | §23 acceptance 8: permission revoked before execution blocks only the pending action | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§23-9 | C10@5c145ed7 | §23 acceptance 9: duplicate/retry does not duplicate consequential writes | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12; DTX | NI-TXCMD; PRECEDENT-CMD; A-BP9-13 | — |
| 10-§23-10 | C10@5c145ed7 | §23 acceptance 10: cross-business context leakage impossible under server-side authorization | SCN | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP9-13 | — |
| 10-§24 | C10@5c145ed7 | §24 Historical Corrections / Superseded Behavior | HIST | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | L-HIST | — |
| 10-§25 | C10@5c145ed7 | §25 Provenance and Hydration Coverage | PROV | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | L-PROV | — |
| 10-§26 | C10@5c145ed7 | §26 Unresolved Founder Questions: none (visual placement/technology are downstream design) | UFQ | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | Contract 10 §26 text | — |
| 10-§27 | C10@5c145ed7 | §27 Completion Gate | GATE | BUILD NOW | CORE-CH | SB-P-1.13 | NOT APPLICABLE | — | L-GATE | — |

## D. Contract 12 — Basic Voice & Smart Voice Assistant Plus (limited: Basic Voice; Voice Plus is SB-P-1.19)

112 rows: 19 `ASSIGNED TO LATER MISSION`, 85 `IN SCOPE`, 7 `NOT APPLICABLE`, 1 `UNRESOLVED FOUNDER DECISION`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 12-§1 | C12@6d48feff | §1 Feature Identity (Basic Voice core; Voice Plus premium; Basic not a teaser) | NARR | BUILD NOW | CORE-LM | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 12-§4 rows and 12-§20-1 | — |
| 12-§2 | C12@6d48feff | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-LM | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 12-§3 | C12@6d48feff | §3 Lighthouse Principles (nine qualities) | PRIN | BUILD NOW | CORE-LM | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 12-§6, §8, §14, §15 rows | — |
| 12-§3-1 | C12@6d48feff | §3 never force a long AI monologue when readable text is better | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§4-1 | C12@6d48feff | §4 Basic Voice supports Ledger transaction/credit/repayment input | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DTX; D14 | NI-VOICE; NI-TXCMD; A-BP102; credit/repayment states depend on SB-P-1.14 four-state Ledger (BP §10.3) | — |
| 12-§4-2 | C12@6d48feff | §4 Basic Voice supports Ask CFO questions | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO) | — |
| 12-§4-3 | C12@6d48feff | §4 Basic Voice supports reminder creation | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Reminder Engine) | — |
| 12-§4-4 | C12@6d48feff | §4 Basic Voice supports stock/supplier/order instructions where product/role permits | OBL | BUILD NOW | CORE-LM | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106 (stock/supplier); secondary SB-P-1.18 A-BP107 (orders) | — |
| 12-§4-5 | C12@6d48feff | §4 Basic Voice supports document clarification | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | A-BP103 (UDI) | — |
| 12-§4-6 | C12@6d48feff | §4 Basic Voice supports short confirmations | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§4-7 | C12@6d48feff | §4 Basic Voice supports short business summaries/responses | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§4-8 | C12@6d48feff | §4 Basic Voice supports other approved conversational actions | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§4-9 | C12@6d48feff | §4 Basic Voice uses the same intent/action foundation as text | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§5 | C12@6d48feff | §5 Smart Voice Assistant Plus (whole section: depth features; no authority expansion) | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 (Voice Plus); BP §9 row 8 (12A); GPCV row 12A | — |
| 12-§6-1 | C12@6d48feff | §6 input journey capture/transcription/permission-context/clarification/preview-confirmation/feature action/readable confirmation | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§6-2 | C12@6d48feff | §6 distinguish harmless question | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§6-3 | C12@6d48feff | §6 distinguish informational request | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§6-4 | C12@6d48feff | §6 distinguish draft/preparation request | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§6-5 | C12@6d48feff | §6 distinguish consequential write/action | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§6-6 | C12@6d48feff | §6 consequential voice actions receive the same safeguards as text | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§7-1 | C12@6d48feff | §7 clarify material uncertainty about amount | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§7-2 | C12@6d48feff | §7 clarify material uncertainty about date/time | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§7-3 | C12@6d48feff | §7 clarify material uncertainty about customer/supplier/product identity | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§7-4 | C12@6d48feff | §7 clarify material uncertainty about quantity/unit | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§7-5 | C12@6d48feff | §7 clarify material uncertainty about payment state | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§7-6 | C12@6d48feff | §7 clarify material uncertainty about credit vs repayment | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D14 | NI-VOICE; A-BP102; four-state Ledger is SB-P-1.14 (BP §10.3) | — |
| 12-§7-7 | C12@6d48feff | §7 clarify material uncertainty about order/reorder instruction | OBL | BUILD NOW | CORE-LM | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106 (reorder); secondary SB-P-1.18 A-BP107 (orders) | — |
| 12-§7-8 | C12@6d48feff | §7 clarify material uncertainty about permission-sensitive action | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§7-9 | C12@6d48feff | §7 clarify material uncertainty about noisy or incomplete transcription | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§7-10 | C12@6d48feff | §7 do not manufacture certainty from a plausible transcript | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§8-1 | C12@6d48feff | §8 routine response prefers short useful audio (examples illustrative, single rule) | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§8-2 | C12@6d48feff | §8 dense/precise response: concise spoken summary | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§8-3 | C12@6d48feff | §8 dense/precise response: exact details in text/table/file | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§8-4 | C12@6d48feff | §8 deep discussion: Voice Plus multiple focused voice segments | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 (Voice Plus) | — |
| 12-§8-5 | C12@6d48feff | §8 durable principle: concise by default; fixed durations are UX provenance, not rules | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§9-1 | C12@6d48feff | §9 voice works with the shared Human Language Layer | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§9-2 | C12@6d48feff | §9 handle mixed Kerala business speech including English terms inside Malayalam/Manglish (vocabulary examples illustrative) | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§9-3 | C12@6d48feff | §9 correct business meaning over literal formal translation | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§10 | C12@6d48feff | §10 WhatsApp Voice Experience (whole section) | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109; BP §9 row 9 (channel verification of 12) | — |
| 12-§11-1 | C12@6d48feff | §11 Workspace supports voice input | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§11-2 | C12@6d48feff | §11 Workspace supports permitted voice output | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§11-3 | C12@6d48feff | §11 Workspace voice preserves same identity | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§11-4 | C12@6d48feff | §11 Workspace voice preserves same permissions | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§11-5 | C12@6d48feff | §11 Workspace voice preserves same Business Memory | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D14 | NI-VOICE; A-BP102 | — |
| 12-§11-6 | C12@6d48feff | §11 Workspace voice preserves same Ask CFO behavior | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO) | — |
| 12-§11-7 | C12@6d48feff | §11 Workspace voice preserves same confirmation/clarification | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§11-8 | C12@6d48feff | §11 Workspace voice preserves same audit trail | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§11-9 | C12@6d48feff | §11 voice usable from laptop/tablet/desktop where supported | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§12-1 | C12@6d48feff | §12 Basic Voice Ask CFO question: concise voice answer plus text detail | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO) | — |
| 12-§12-2 | C12@6d48feff | §12 Voice Plus deepens Ask CFO conversation | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 (Voice Plus) | — |
| 12-§12-3 | C12@6d48feff | §12 Ask CFO read-only regardless of voice tier | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 Scenario B | — |
| 12-§13-1 | C12@6d48feff | §13 user may create reminders by voice | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Reminder Engine) | — |
| 12-§13-2 | C12@6d48feff | §13 offer a shared Reminder to resume Ask CFO/Voice Plus discussion | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (reminder continuation); Voice Plus slice SB-P-1.19 | — |
| 12-§13-3 | C12@6d48feff | §13 voice must not create a separate reminder engine | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§14-1 | C12@6d48feff | §14 Owner uses voice for all entitled/authorized features | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§14-2 | C12@6d48feff | §14 Manager voice accesses only delegated capabilities/data | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§14-3 | C12@6d48feff | §14 Employee voice only permitted operations/self-service; no Owner profit/full analytics/Ask CFO by default | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 Scenario A | — |
| 12-§14-4 | C12@6d48feff | §14 customer/supplier/delivery voice bounded by the workflow, not general Owner voice access | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | L-NEG; A-BP9-13 | — |
| 12-§15-1 | C12@6d48feff | §15 avoid speaking sensitive Owner data where the user role is not authorized | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§15-2 | C12@6d48feff | §15 avoid speaking sensitive Owner data where the requested output is inappropriate for audio | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§15-3 | C12@6d48feff | §15 avoid speaking sensitive Owner data where the product has context to prefer safer text presentation | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§15-4 | C12@6d48feff | §15 audio/transcription retention follows privacy/account policy | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D14; DUF6 | NI-VOICE; A-BP102; durable raw-audio storage is C25 §12 (SB-P-1.14) | — |
| 12-§15-5 | C12@6d48feff | §15 voice never becomes a route around data-access controls | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | L-NEG; A-BP9-13 | — |
| 12-§16-1 | C12@6d48feff | §16 voice state change preserves actor | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§16-2 | C12@6d48feff | §16 voice state change preserves business scope | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§16-3 | C12@6d48feff | §16 voice state change preserves source channel/modal input | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§16-4 | C12@6d48feff | §16 voice state change preserves interpreted intent | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§16-5 | C12@6d48feff | §16 voice state change preserves confirmation where applicable | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§16-6 | C12@6d48feff | §16 voice state change preserves resulting authoritative record/action | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§16-7 | C12@6d48feff | §16 voice state change preserves correction/audit linkage where needed | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§16-8 | C12@6d48feff | §16 implementation must not assume every recording is permanent | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D14 | L-NEG; A-BP9-13 | — |
| 12-§17-1 | C12@6d48feff | §17 handle noisy/partial audio | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-2 | C12@6d48feff | §17 handle unsupported audio format | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-3 | C12@6d48feff | §17 handle transcription failure | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-4 | C12@6d48feff | §17 handle language ambiguity | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-5 | C12@6d48feff | §17 handle provider/model failure | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-6 | C12@6d48feff | §17 handle interrupted upload | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-7 | C12@6d48feff | §17 handle stale permission | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§17-8 | C12@6d48feff | §17 handle duplicate/replayed voice message | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§17-9 | C12@6d48feff | §17 handle response generation failure | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-10 | C12@6d48feff | §17 handle output audio unavailable while text path healthy | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-11 | C12@6d48feff | §17 required: do not pretend success | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-12 | C12@6d48feff | §17 required: preserve safe retry path | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-13 | C12@6d48feff | §17 required: use text alternative when practical | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-14 | C12@6d48feff | §17 required: do not create records from materially uncertain speech | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§17-15 | C12@6d48feff | §17 required: fail only the affected path | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§18-1 | C12@6d48feff | §18 voice feels immediate enough for counter/work-floor use | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§18-2 | C12@6d48feff | §18 efficient paths for simple deterministic actions; stronger reasoning only when required | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§18-3 | C12@6d48feff | §18 responsiveness without weakening security/accuracy/confirmation | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | L-NEG; A-BP9-13 | — |
| 12-§19 | C12@6d48feff | §19 Shared Foundations to Reuse (cross-reference list) | REUSE | BUILD NOW | CORE-LM | SB-P-1.13 | NOT APPLICABLE | — | L-REUSE | — |
| 12-§20-1 | C12@6d48feff | §20 non-goal: Basic Voice restricted to paid Voice Plus-only usefulness | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§20-2 | C12@6d48feff | §20 non-goal: fixed provider/model as Product Truth | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§20-3 | C12@6d48feff | §20 non-goal: fixed universal response-duration cap | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§20-4 | C12@6d48feff | §20 non-goal: voice-created authority | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§20-5 | C12@6d48feff | §20 non-goal: long audio where text is clearly better | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§20-6 | C12@6d48feff | §20 non-goal: employee access to Owner intelligence through spoken prompts | NEG | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | L-NEG; A-BP9-13 | — |
| 12-§21-1 | C12@6d48feff | §21 acceptance 1: natural sale/expense/credit/repayment voice input | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DTX; D14 | NI-VOICE; NI-TXCMD; A-BP102; credit/repayment blocked by SB-P-1.14 four-state Ledger (BP §10.3) | — |
| 12-§21-2 | C12@6d48feff | §21 acceptance 2: ambiguous amount/name leads to clarification, not guess | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§21-3 | C12@6d48feff | §21 acceptance 3: Basic Ask CFO voice question: short audio plus accurate text detail | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Ask CFO) | — |
| 12-§21-4 | C12@6d48feff | §21 acceptance 4: voice reminder creation | SCN | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 (Reminder Engine) | — |
| 12-§21-5 | C12@6d48feff | §21 acceptance 5: Voice Plus multi-turn discussion with continuity | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 (Voice Plus) | — |
| 12-§21-6 | C12@6d48feff | §21 acceptance 6: Voice Plus summary/action items without autonomous execution | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 (Voice Plus) | — |
| 12-§21-7 | C12@6d48feff | §21 acceptance 7: English/Malayalam/Manglish mixed speech | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; DAI | NI-VOICE; A-BP102 | — |
| 12-§21-8 | C12@6d48feff | §21 acceptance 8: Employee voice prompt cannot access Owner intelligence | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 Scenario A; experience anchor 4 | — |
| 12-§21-9 | C12@6d48feff | §21 acceptance 9: duplicate/replayed voice does not duplicate business write | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12; DTX | NI-VOICE; NI-TXCMD; A-BP102 | — |
| 12-§21-10 | C12@6d48feff | §21 acceptance 10: provider failure offers safe text/retry path | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| 12-§21-11 | C12@6d48feff | §21 acceptance 11: WhatsApp and Conversation Workspace use one voice/action truth | SCN | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109; BP §9 row 9 (channel verification of 12) | — |
| 12-§21-12 | C12@6d48feff | §21 acceptance 12: sensitive information is not spoken to an unauthorized role | SCN | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV; D12 | NI-VOICE; A-BP102 | — |
| 12-§22 | C12@6d48feff | §22 Historical Corrections / Superseded Behavior | HIST | BUILD NOW | CORE-LM | SB-P-1.13 | NOT APPLICABLE | — | L-HIST | — |
| 12-§23 | C12@6d48feff | §23 Provenance and Hydration Coverage | PROV | BUILD NOW | CORE-LM | SB-P-1.13 | NOT APPLICABLE | — | L-PROV | — |
| 12-§24 | C12@6d48feff | §24 Unresolved Founder Question: exact Voice Plus price | UFQ | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | — | BP §15 item 2; GPCV §10 item 2; not on SB-P-1.13 critical path (GPCV §8: Voice Plus price does not block Basic Voice) | BP §15-2 (open) |
| 12-§25 | C12@6d48feff | §25 Completion Gate | GATE | BUILD NOW | CORE-LM | SB-P-1.13 | NOT APPLICABLE | — | L-GATE | — |

## E. Contract 8 — Support Automation (limited: FAQ-before-AI / low-compute foundation; completion is SB-P-1.19)

78 rows: 24 `ASSIGNED TO LATER MISSION`, 50 `IN SCOPE`, 4 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 8-§1 | C8@97397780 | §1 Feature Identity (100+ FAQ direction; FAQ-first; multilingual; AI where useful; ticketing; privacy) | NARR | BUILD NOW | CORE-SUP | SB-P-1.13 | NOT APPLICABLE | — | L-NARR; realized by 8-§3 to 8-§7 rows | — |
| 8-§2 | C8@97397780 | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-SUP | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 8-§3-1 | C8@97397780 | §3 ladder step 1: identify the user's support intent | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§3-2 | C8@97397780 | §3 ladder step 2: match a trusted FAQ/help answer where one exists | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§3-3 | C8@97397780 | §3 ladder step 3: provide concise language-appropriate guidance | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§3-4 | C8@97397780 | §3 ladder step 4: ask a small clarification where intent is ambiguous | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§3-5 | C8@97397780 | §3 ladder step 5: use AI-supported explanation when FAQ alone is insufficient | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§3-6 | C8@97397780 | §3 ladder step 6: create/escalate a support ticket when unresolved or account/platform action is needed | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (human escalation; purpose-limited access) | — |
| 8-§3-7 | C8@97397780 | §3 ladder step 7: enable human review with minimum necessary authorized context | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (human escalation; purpose-limited access) | — |
| 8-§3-8 | C8@97397780 | §3 automation solves what it can without interrupting bookkeeping/business operation | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§4-1 | C8@97397780 | §4 support knowledge base exists as trusted FAQ store in the shared message pipeline (foundation) | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§4-2 | C8@97397780 | §4 knowledge base grows to 100+ questions across the listed topic areas (topic list illustrative 'such as') | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (SB-P-1.19 completes broader support automation); Contract 8 §4 calls the count an implementation/content milestone | — |
| 8-§5-1 | C8@97397780 | §5 English, Malayalam and Manglish first-class in support | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§5-2 | C8@97397780 | §5 responses natural for Kerala merchants, not literal documentation translation | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§5-3 | C8@97397780 | §5 continue naturally when user changes language mid-conversation | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§6-1 | C8@97397780 | §6 FAQ matching preserves trusted answer provenance | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§6-2 | C8@97397780 | §6 FAQ matching preserves current Product Truth | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§6-3 | C8@97397780 | §6 FAQ matching preserves version awareness where product behavior changes | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§6-4 | C8@97397780 | §6 FAQ matching preserves no invention when the knowledge base lacks a reliable answer | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§6-5 | C8@97397780 | §6 if no trusted answer, say so and move to clarification/escalation rather than hallucinate | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§7-1 | C8@97397780 | §7 AI may interpret the user's question | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§7-2 | C8@97397780 | §7 AI may find relevant approved support knowledge | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§7-3 | C8@97397780 | §7 AI may explain steps in plain language | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§7-4 | C8@97397780 | §7 AI may summarize an unresolved issue for human support | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (context-preserving handoff); A-BP108 Scenario B | — |
| 8-§7-5 | C8@97397780 | §7 AI may collect only information needed for the support path | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (context-preserving handoff); A-BP108 Scenario B | — |
| 8-§7-6 | C8@97397780 | §7 AI may distinguish product behavior from account-specific problems | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§7-7 | C8@97397780 | §7 AI must not invent product policy | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§7-8 | C8@97397780 | §7 AI must not change Product Truth | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§7-9 | C8@97397780 | §7 AI must not grant permissions | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP12 | — |
| 8-§7-10 | C8@97397780 | §7 AI must not expose unrelated merchant data | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP12 | — |
| 8-§7-11 | C8@97397780 | §7 AI must not claim an account action succeeded when it did not | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§7-12 | C8@97397780 | §7 AI must not conceal uncertainty | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§8 | C8@97397780 | §8 Ticket Creation (whole section) | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (human escalation) | — |
| 8-§9 | C8@97397780 | §9 Ticket Data (whole section) | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 | — |
| 8-§10 | C8@97397780 | §10 Privacy and Account-Specific Access (whole section) | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (purpose-limited access); C21 §14 (SB-P-1.12) | — |
| 8-§11-1 | C8@97397780 | §11 failed FAQ does not stop transaction entry | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§11-2 | C8@97397780 | §11 an import error does not block unrelated dashboard use | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12; C22 §19 | — |
| 8-§11-3 | C8@97397780 | §11 payment-support ticket does not block safe read-only access unless lifecycle policy requires | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 (lifecycle) | — |
| 8-§11-4 | C8@97397780 | §11 one broken channel does not make all support inaccessible (Workspace support path independent of WhatsApp) | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12; A-BP102 Scenario B | — |
| 8-§11-5 | C8@97397780 | §11 narrow blockers stay narrow | RULE | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§12-1 | C8@97397780 | §12 support reachable through Conversation Workspace | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§12-2 | C8@97397780 | §12 support reachable through WhatsApp where available | OBL | BUILD NOW | CORE-SUP | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 | — |
| 8-§12-3 | C8@97397780 | §12 support reachable through visual support/help surfaces | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (support operating surfaces) | — |
| 8-§12-4 | C8@97397780 | §12 support reachable through other approved contact paths | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 | — |
| 8-§12-5 | C8@97397780 | §12 knowledge base shared across channels (one store) | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12; BP §12 'one support system' | — |
| 8-§12-6 | C8@97397780 | §12 permissions and ticket truth shared across channels | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (ticket and purpose-limited access) | — |
| 8-§13-1 | C8@97397780 | §13 error capture/logging is an input to support, not Support Automation itself | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12; Delta D-07 | — |
| 8-§13-2 | C8@97397780 | §13 safe error/reference identifiers connect merchant reports to technical evidence | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 (support stewardship) | — |
| 8-§14 | C8@97397780 | §14 Founder Review / Quality Improvement (whole section; human-resolution loop) | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; C8 §19 completion gate human-resolution loop | — |
| 8-§15-1 | C8@97397780 | §15 handle no FAQ match | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§15-2 | C8@97397780 | §15 handle multiple plausible FAQ matches | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§15-3 | C8@97397780 | §15 handle stale/retired answer | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§15-4 | C8@97397780 | §15 handle AI unavailable | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§15-5 | C8@97397780 | §15 handle ticket creation failure | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 | — |
| 8-§15-6 | C8@97397780 | §15 handle user disconnected mid-support | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§15-7 | C8@97397780 | §15 handle language misunderstanding | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§15-8 | C8@97397780 | §15 handle account-specific access not authorized | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 | — |
| 8-§15-9 | C8@97397780 | §15 handle duplicate tickets | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 | — |
| 8-§15-10 | C8@97397780 | §15 handle platform outage affecting support channel | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§15-11 | C8@97397780 | §15 failed automated answer degrades toward clarification (human escalation half is SB-P-1.19) | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | D19 | NI-FAQ; A-BP12 | — |
| 8-§16-1 | C8@97397780 | §16 acceptance 1: FAQ-first resolution of common question | SCN | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§16-2 | C8@97397780 | §16 acceptance 2: English/Malayalam/Manglish support | SCN | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§16-3 | C8@97397780 | §16 acceptance 3: ambiguous question triggers clarification | SCN | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§16-4 | C8@97397780 | §16 acceptance 4: no-answer state does not hallucinate | SCN | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§16-5 | C8@97397780 | §16 acceptance 5: AI explanation aligned with approved support knowledge | SCN | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | DAI | NI-FAQ; A-BP12 | — |
| 8-§16-6 | C8@97397780 | §16 acceptance 6: unresolved issue creates a ticket with context | SCN | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 Scenario B | — |
| 8-§16-7 | C8@97397780 | §16 acceptance 7: duplicate ticket handling | SCN | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 Scenario B | — |
| 8-§16-8 | C8@97397780 | §16 acceptance 8: account-specific inspection requires authorization | SCN | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 Scenario B | — |
| 8-§16-9 | C8@97397780 | §16 acceptance 9: merchant continues unrelated operations during support issue | SCN | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| 8-§16-10 | C8@97397780 | §16 acceptance 10: human resolution recorded and can improve approved FAQ content | SCN | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12; A-BP108 Scenario B | — |
| 8-§17-1 | C8@97397780 | §17 non-goal: unrestricted support-agent browsing of merchant data | NEG | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (support operating surfaces, purpose-limited access) | — |
| 8-§17-2 | C8@97397780 | §17 non-goal: AI-generated support policy with no approved source | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§17-3 | C8@97397780 | §17 non-goal: support automation changing Product Truth | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§17-4 | C8@97397780 | §17 non-goal: forcing every question into a ticket | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§17-5 | C8@97397780 | §17 non-goal: replacing all human support | NEG | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 (human escalation) | — |
| 8-§17-6 | C8@97397780 | §17 non-goal: technical error logging alone as proof support is implemented | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| 8-§18 | C8@97397780 | §18 Shared Foundations (cross-reference list) | REUSE | BUILD NOW | CORE-SUP | SB-P-1.13 | NOT APPLICABLE | — | L-REUSE | — |
| 8-§19 | C8@97397780 | §19 Completion Gate (completion is SB-P-1.19) | GATE | BUILD NOW | CORE-SUP | SB-P-1.13 | NOT APPLICABLE | — | L-GATE; A-BP12 | — |

## F. Contract 22 — Shared Product Foundations (sections touched by conversation/AI; every section represented)

109 rows: 8 `ASSIGNED TO LATER MISSION`, 26 `DELEGATED`, 66 `IN SCOPE`, 9 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 22-§1 | C22@61e1bb91 | §1 Feature Identity | NARR | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 22-§2 | C22@61e1bb91 | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 22-§3 | C22@61e1bb91 | §3 Lighthouse Principles | PRIN | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 22-§4-1 | C22@61e1bb91 | §4 one authoritative business-memory model across features/channels | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | I-12 (22-§4 ASSIGNED SB-P-1.14); A-BP103 | — |
| 22-§4-2 | C22@61e1bb91 | §4 no second truth because a new UI/channel is introduced | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP9-13; BP §6.4 | — |
| 22-§5 | C22@61e1bb91 | §5 Identity Foundation (whole section; consumed for party/actor identity) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§5-1 to 22-§5-9 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-1 | C22@61e1bb91 | §6 one permission/isolation model covers UI/workspace | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-1 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-2 | C22@61e1bb91 | §6 one permission/isolation model covers WhatsApp | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-2 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-3 | C22@61e1bb91 | §6 one permission/isolation model covers Conversation Workspace | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-3 IN SCOPE SB-P-1.12); L-DEL12; SB-P-1.13 builds this surface and consumes EIS-KER-06 channel value | — |
| 22-§6-4 | C22@61e1bb91 | §6 one permission/isolation model covers server functions/APIs | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-4 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-5 | C22@61e1bb91 | §6 one permission/isolation model covers database/RLS | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-5 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-6 | C22@61e1bb91 | §6 one permission/isolation model covers background jobs | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-6 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-7 | C22@61e1bb91 | §6 one permission/isolation model covers integrations | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-7 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-8 | C22@61e1bb91 | §6 one permission/isolation model covers exports/files | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-8 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-9 | C22@61e1bb91 | §6 one permission/isolation model covers AI tools | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-9 IN SCOPE SB-P-1.12); L-DEL12; SB-P-1.13 builds this surface and consumes EIS-KER-06 channel value | — |
| 22-§6-10 | C22@61e1bb91 | §6 feature-specific permissions extend but never bypass | NEG | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-10 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§7-1 | C22@61e1bb91 | §7 conversational channels share intent understanding | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-2 | C22@61e1bb91 | §7 conversational channels share role/permission context | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-3 | C22@61e1bb91 | §7 conversational channels share business identity | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-4 | C22@61e1bb91 | §7 conversational channels share clarification rules | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-5 | C22@61e1bb91 | §7 conversational channels share confirmation model | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-6 | C22@61e1bb91 | §7 conversational channels share action dispatch | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-7 | C22@61e1bb91 | §7 conversational channels share Business Memory | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-8 | C22@61e1bb91 | §7 conversational channels share audit/idempotency | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 (22-§7 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§7-9 | C22@61e1bb91 | §7 WhatsApp and Workspace must not implement separate feature logic | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12; A-BP102 | — |
| 22-§7-10 | C22@61e1bb91 | §7 foundation implemented with Contract 24, not independent LLM logic per channel | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12; A-BP102 | — |
| 22-§8-1 | C22@61e1bb91 | §8 English/Malayalam/Manglish support shared across features/channels | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12 (22-§8 ASSIGNED SB-P-1.13); A-BP102 | — |
| 22-§8-2 | C22@61e1bb91 | §8 features must not create independent slang dictionaries or language rules | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 | — |
| 22-§8-3 | C22@61e1bb91 | §8 foundation supports natural Kerala business vocabulary | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12; A-BP102 | — |
| 22-§8-4 | C22@61e1bb91 | §8 foundation supports mixed-language text/voice | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DV; DAI | NI-AI; I-12; A-BP102 | — |
| 22-§8-5 | C22@61e1bb91 | §8 foundation supports name/unit variation | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12; A-BP102 | — |
| 22-§8-6 | C22@61e1bb91 | §8 foundation supports clarification of consequential ambiguity | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12; A-BP102 | — |
| 22-§8-7 | C22@61e1bb91 | §8 foundation supports user language preference where appropriate | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12; A-BP102 | — |
| 22-§9 | C22@61e1bb91 | §9 Universal Document Intelligence Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | I-12; A-BP103 | — |
| 22-§10 | C22@61e1bb91 | §10 Document / Receipt Memory Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | I-12; A-BP103 | — |
| 22-§11 | C22@61e1bb91 | §11 Reminder / Delegated Automation Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12; A-BP104 | — |
| 22-§12 | C22@61e1bb91 | §12 Notification Foundation (whole section; nine obligations rowed in SB-P-1.12 FCTM) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12 (22-§12-1 to -9); A-FPDR1 | SB-P-1.12 FPDR-1 |
| 22-§13-1 | C22@61e1bb91 | §13 clarify uncertain identity/intent before consequential write | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-1 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-2 | C22@61e1bb91 | §13 preview uncertain/material document import | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-2 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-3 | C22@61e1bb91 | §13 bind confirmation to exact actor/action/state/object | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-3 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-4 | C22@61e1bb91 | §13 revalidate permission/state at execution | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-4 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-5 | C22@61e1bb91 | §13 generic/stale Yes is not unlimited authority | NEG | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-5 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§14 | C22@61e1bb91 | §14 Audit / Human Context Foundation (whole section; conversation provenance fields carried by 24-§24 rows) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§14-1 to -9 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§15 | C22@61e1bb91 | §15 Idempotency / Duplicate Protection (single rule incl. AI/tool execution retries; applied via 24-§11-7) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§15 IN SCOPE SB-P-1.12); EIS-CNF-04; L-DEL12 | — |
| 22-§16 | C22@61e1bb91 | §16 Location Foundation | NARR | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | SB-P-1.13 captures and uses no location; owners SB-P-1.12 (22-§16-2) and SB-P-1.18 (FPDR-2/FPDR-3) per I-12 | — |
| 22-§17 | C22@61e1bb91 | §17 Integration/Extension: OpenAI/model and voice-provider services integrate through edge adapters; no client-specific core forks (single rule) | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI; DV | NI-AI; A-BP102 (provider abstraction); I-12 (22-§17 IN SCOPE SB-P-1.12 as design constraint) | — |
| 22-§18 | C22@61e1bb91 | §18 Scheduler / Background Job Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12; A-BP104 | — |
| 22-§19-1 | C22@61e1bb91 | §19 conversation/AI/voice error behavior supports clear failure reason | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 (graceful AI/provider failure); design constraint on this mission's deliverable | — |
| 22-§19-2 | C22@61e1bb91 | §19 conversation/AI/voice error behavior supports safe retry/recovery | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 (graceful AI/provider failure); design constraint on this mission's deliverable | — |
| 22-§19-3 | C22@61e1bb91 | §19 conversation/AI/voice error behavior supports no false success | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 (graceful AI/provider failure); design constraint on this mission's deliverable | — |
| 22-§19-4 | C22@61e1bb91 | §19 conversation/AI/voice error behavior supports preserved user input/evidence | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 (graceful AI/provider failure); design constraint on this mission's deliverable | — |
| 22-§19-5 | C22@61e1bb91 | §19 conversation/AI/voice error behavior supports operational observability | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 (graceful AI/provider failure); design constraint on this mission's deliverable | — |
| 22-§19-6 | C22@61e1bb91 | §19 conversation/AI/voice error behavior supports narrow containment | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 (graceful AI/provider failure); design constraint on this mission's deliverable | — |
| 22-§19-7 | C22@61e1bb91 | §19 one failing provider/module does not freeze Smart Business globally | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-AI; A-BP102 | — |
| 22-§20 | C22@61e1bb91 | §20 Data / Schema Stability Principle (whole section; any SB-P-1.13 schema evolves by governed migration) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§20-1 to -4 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§21 | C22@61e1bb91 | §21 Performance: responsive conversation/voice without weakening authorization/correctness/confirmation/privacy/audit (single rule) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; design constraint on this mission's deliverable; I-12 analogue | — |
| 22-§22-1 | C22@61e1bb91 | §22 platform quality: stable identifiers/test hooks for critical conversation flows | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; design constraint on this mission's deliverable | — |
| 22-§22-2 | C22@61e1bb91 | §22 platform quality: deterministic tests for financial/permission rules | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; design constraint on this mission's deliverable | — |
| 22-§22-3 | C22@61e1bb91 | §22 platform quality: integration failure tests (AI/voice provider) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; design constraint on this mission's deliverable | — |
| 22-§22-4 | C22@61e1bb91 | §22 platform quality: runtime verification | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; design constraint on this mission's deliverable | — |
| 22-§22-5 | C22@61e1bb91 | §22 platform quality: independent verification before acceptance | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; design constraint on this mission's deliverable | — |
| 22-§22-6 | C22@61e1bb91 | §22 green CI alone is not feature acceptance | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; Phase 1 guide §8 | — |
| 22-§23-1 | C22@61e1bb91 | §23 merchant data belongs to merchant | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§23-1 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§23-2 | C22@61e1bb91 | §23 no cross-business leakage (conversation and AI context) | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13; conversation/AI surface of this privacy rule | — |
| 22-§23-3 | C22@61e1bb91 | §23 no routine platform access to merchant private intelligence (AI observability, transcripts) | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13; conversation/AI surface of this privacy rule | — |
| 22-§23-4 | C22@61e1bb91 | §23 support access is purpose-limited | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§23-4 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§23-5 | C22@61e1bb91 | §23 staff data role/purpose limited in conversation | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13; conversation/AI surface of this privacy rule | — |
| 22-§23-6 | C22@61e1bb91 | §23 individual merchant data not sold | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§23-6 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§23-7 | C22@61e1bb91 | §23 aggregate AI/product insight privacy-respecting and governed | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; A-BP9-13; conversation/AI surface of this privacy rule | — |
| 22-§24-1 | C22@61e1bb91 | §24 AI remembers only through authorized Smart Business memory (listed assistive capabilities) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D14; DAI | NI-AI; I-12 (22-§24 ASSIGNED SB-P-1.13) | — |
| 22-§24-2 | C22@61e1bb91 | §24 AI does not independently create permission or final business authority | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | L-NEG; I-12 | — |
| 22-§24-3 | C22@61e1bb91 | §24 Owner final decision-maker unless a valid stored delegation explicitly covers execution | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-AI; I-12 | — |
| 22-§25 | C22@61e1bb91 | §25 AI Orchestration / OpenAI Intelligence Foundation (names Contract 24) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | DAI | I-12 (22-§25 DELEGATED); delegate rows 24-§* | — |
| 22-§26 | C22@61e1bb91 | §26 Dedicated Channel Adapter Contracts (names Contract 23) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.20 | DELEGATED | D20 | I-12 (22-§26 DELEGATED, SB-P-1.20); delegate register §J | — |
| 22-§27-1 | C22@61e1bb91 | §27 mission/EIS states which mature feature(s) it advances | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-2 | C22@61e1bb91 | §27 mission/EIS states which shared foundations it reuses | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-3 | C22@61e1bb91 | §27 mission/EIS states whether it consumes AI orchestration and/or a channel adapter | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-4 | C22@61e1bb91 | §27 mission/EIS states what already exists and must not be duplicated | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-5 | C22@61e1bb91 | §27 mission/EIS states what remains committed but outside the mission | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-6 | C22@61e1bb91 | §27 mission/EIS states exact blockers/dependencies | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-7 | C22@61e1bb91 | §27 mission/EIS states required evidence for acceptance | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§28-1 | C22@61e1bb91 | §28 non-goal: duplicate Business Memory by channel | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-2 | C22@61e1bb91 | §28 non-goal: duplicate Permission Engine per feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-3 | C22@61e1bb91 | §28 non-goal: duplicate AI brain/orchestrator per channel or feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-4 | C22@61e1bb91 | §28 non-goal: duplicate reminder scheduler per feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-5 | C22@61e1bb91 | §28 non-goal: duplicate OCR/document pipeline | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-6 | C22@61e1bb91 | §28 non-goal: duplicate customer/supplier identity silos | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-7 | C22@61e1bb91 | §28 non-goal: continuous employee GPS foundation | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-8 | C22@61e1bb91 | §28 non-goal: subscription-driven create/drop of core domain tables | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-9 | C22@61e1bb91 | §28 non-goal: AI/tool capability treated as authority | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§28-10 | C22@61e1bb91 | §28 non-goal: custom client-specific core forks | NEG | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 (IN SCOPE negative for SB-P-1.12; re-checked for this mission's deliverable) | — |
| 22-§29-1 | C22@61e1bb91 | §29 acceptance 1: WhatsApp and Workspace use one Business Memory/action truth | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D14; D20 | NI-CONV; L-X20; I-12 (SB-P-1.13/SB-P-1.20) | — |
| 22-§29-2 | C22@61e1bb91 | §29 acceptance 2: WhatsApp and Workspace share one permission-aware AI orchestration path | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12; DAI; D20 | NI-AI; L-X20; I-12 (SB-P-1.13) | — |
| 22-§29-3 | C22@61e1bb91 | §29 acceptance 3: cross-business access blocked consistently across channels/services/AI tools (conversation and AI-tool slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-AI; I-12 (services slice SB-P-1.12; channel/AI-tool slices complete cumulatively) | — |
| 22-§29-4 | C22@61e1bb91 | §29 acceptance 4: multiple features reuse one Reminder Engine | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12; A-BP104 | — |
| 22-§29-5 | C22@61e1bb91 | §29 acceptance 5: multiple document types reuse one UDI pipeline | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | ASSIGNED TO LATER MISSION | D14 | I-12; A-BP103 | — |
| 22-§29-6 | C22@61e1bb91 | §29 acceptance 6: customer/supplier identity not duplicated by channel/feature | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§29-7 | C22@61e1bb91 | §29 acceptance 7: consequential confirmation exact and revalidated at execution (conversation slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 (IN SCOPE SB-P-1.12 kernel); conversational confirmation is built here | — |
| 22-§29-8 | C22@61e1bb91 | §29 acceptance 8: duplicate external/retry events idempotent (AI/tool retry slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12; DTX | NI-TXCMD; PRECEDENT-CMD; I-12 (IN SCOPE SB-P-1.12 pattern) | — |
| 22-§29-9 | C22@61e1bb91 | §29 acceptance 9: attendance/delivery location uses purpose-limited primitive | SCN | BUILD NOW | CORE-ARCH | SB-P-1.18 | NOT APPLICABLE | — | SB-P-1.13 captures no location; I-12 (ASSIGNED SB-P-1.18) | — |
| 22-§29-10 | C22@61e1bb91 | §29 acceptance 10: feature/provider failure narrowly contained (AI/voice provider slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI; DV | NI-AI; A-BP102 | — |
| 22-§29-11 | C22@61e1bb91 | §29 acceptance 11: subscription changes do not destroy core schema/history | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§29-12 | C22@61e1bb91 | §29 acceptance 12: audit retains raw evidence plus authorized human context (conversation-originated actions) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 (IN SCOPE SB-P-1.12 foundation) | — |
| 22-§29-13 | C22@61e1bb91 | §29 acceptance 13: OpenAI/model outage does not corrupt authoritative business state | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; I-12 (ASSIGNED SB-P-1.13) | — |
| 22-§29-14 | C22@61e1bb91 | §29 acceptance 14: future implementation documents identify reused foundations first | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | this Truth Pack is partial compliance evidence; see 22-§27 rows | — |
| 22-§30 | C22@61e1bb91 | §30 Historical Corrections / Superseded Behavior | HIST | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | L-HIST | — |
| 22-§31 | C22@61e1bb91 | §31 Provenance and Hydration Coverage | PROV | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | L-PROV | — |
| 22-§32 | C22@61e1bb91 | §32 Completion Gate | GATE | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | L-GATE | — |
| 22-§33 | C22@61e1bb91 | §33 Personal Identity Lifecycle and Governed Deletion | NARR | BUILD NOW | CORE-ARCH | SB-P-1.13 | NOT APPLICABLE | — | Owned by SB-P-1.12 (22-§33-1 to -39, I-12) and SB-P-1.19 evidence boundary; conversation/AI does not touch identity deletion | — |

## G. Contract 21 — Permissions, Business Isolation & Role Authority (delegated-authority compatibility opening)

82 rows: 75 `DELEGATED`, 7 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 21-§1 | C21@f4a05d5c | §1 Feature Identity | NARR | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 21-§2 | C21@f4a05d5c | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 21-§3 | C21@f4a05d5c | §3 Lighthouse Principles | PRIN | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| 21-§4-1 | C21@f4a05d5c | §4 Core Authority Model: Owner (role behavior consumed by conversation/AI) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 | — |
| 21-§4-2 | C21@f4a05d5c | §4 Core Authority Model: Manager (role behavior consumed by conversation/AI) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 | — |
| 21-§4-3 | C21@f4a05d5c | §4 Core Authority Model: Employee (role behavior consumed by conversation/AI) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 | — |
| 21-§4-4 | C21@f4a05d5c | §4 Core Authority Model: Supplier (role behavior consumed by conversation/AI) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 | — |
| 21-§4-5 | C21@f4a05d5c | §4 Core Authority Model: Customer (role behavior consumed by conversation/AI) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 | — |
| 21-§4-6 | C21@f4a05d5c | §4 Core Authority Model: Delivery Staff (role behavior consumed by conversation/AI) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.1; EIS-KER-03 | — |
| 21-§5-1 | C21@f4a05d5c | §5 Permission Dimension: authenticated user | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-2 | C21@f4a05d5c | §5 Permission Dimension: business membership | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-3 | C21@f4a05d5c | §5 Permission Dimension: role | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-4 | C21@f4a05d5c | §5 Permission Dimension: explicit delegated capability | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-5 | C21@f4a05d5c | §5 Permission Dimension: object/record ownership/scope | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-6 | C21@f4a05d5c | §5 Permission Dimension: action type | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-7 | C21@f4a05d5c | §5 Permission Dimension: feature entitlement | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-8 | C21@f4a05d5c | §5 Permission Dimension: channel/context (conversation, ai_tool) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01; EIS-KER-06 | — |
| 21-§5-9 | C21@f4a05d5c | §5 Permission Dimension: temporary/purpose-limited grant | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§5-10 | C21@f4a05d5c | §5 Permission Dimension: current account/subscription/security state | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.2; EIS-KER-01 | — |
| 21-§6-1 | C21@f4a05d5c | §6 server/database prevents cross-business reads | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.3 | — |
| 21-§6-2 | C21@f4a05d5c | §6 server/database prevents cross-business writes | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.3 | — |
| 21-§6-3 | C21@f4a05d5c | §6 server/database prevents cross-business conversation context | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.3 | — |
| 21-§6-4 | C21@f4a05d5c | §6 server/database prevents cross-business file/document access | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.3 | — |
| 21-§6-5 | C21@f4a05d5c | §6 server/database prevents cross-business exports | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.3 | — |
| 21-§6-6 | C21@f4a05d5c | §6 server/database prevents cross-business integration mapping | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.3 | — |
| 21-§6-7 | C21@f4a05d5c | §6 client-provided business_id or route state never trusted alone (AI tool proposals included) | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.3 | — |
| 21-§7 | C21@f4a05d5c | §7 Server-side Authorization (single rule) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.4 | — |
| 21-§8-1 | C21@f4a05d5c | §8 WhatsApp and Workspace use the same permission model | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) | — |
| 21-§8-2 | C21@f4a05d5c | §8 a natural-language prompt cannot widen access | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) | — |
| 21-§8-3 | C21@f4a05d5c | §8 example: Employee asks profit, deny/redirect | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) | — |
| 21-§8-4 | C21@f4a05d5c | §8 example: Employee asks own attendance, allow if permitted | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) | — |
| 21-§8-5 | C21@f4a05d5c | §8 example: Manager asks Ask CFO without delegation, deny/limit | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) | — |
| 21-§8-6 | C21@f4a05d5c | §8 example: Customer asks for another customer's order, deny | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) | — |
| 21-§8-7 | C21@f4a05d5c | §8 AI never infers permission to reveal because data is in context | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-06; SB-P-1.12 FCTM row 21-§8 (single row there) | — |
| 21-§9-1 | C21@f4a05d5c | §9 Ask CFO is Owner intelligence by default | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 | — |
| 21-§9-2 | C21@f4a05d5c | §9 Manager access requires explicit delegation | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 | — |
| 21-§9-3 | C21@f4a05d5c | §9 Employees/suppliers/customers/delivery staff do not receive Owner-wide Ask CFO | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 | — |
| 21-§9-4 | C21@f4a05d5c | §9 boundary is server/data-enforced, not a hidden button | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.5; EIS-KER-07 | — |
| 21-§10 | C21@f4a05d5c | §10 Employee Self-service (whole section; consumed when Employee uses the Workspace) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.6 | — |
| 21-§11-1 | C21@f4a05d5c | §11 scoped creation preserves actor identity (conversation-initiated writes) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.7 | — |
| 21-§11-2 | C21@f4a05d5c | §11 create permission does not grant read-all/edit-all/export/analytics | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.7; EIS-KER-08 | — |
| 21-§12 | C21@f4a05d5c | §12 Delegated Automation Authority (whole section; AI/tool cannot create permission) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.8 | — |
| 21-§13 | C21@f4a05d5c | §13 Supplier/Customer/Delivery Participation (whole section; external participants never get the Owner Workspace) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.9 | — |
| 21-§14 | C21@f4a05d5c | §14 Temporary / Purpose-limited Support Access | NARR | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | Not touched by the FAQ-before-AI foundation; owned by SB-P-1.12 (Blueprint §8.10) and consumed by SB-P-1.19 (A-BP12) | — |
| 21-§15-1 | C21@f4a05d5c | §15 a valid Workspace session alone does not grant business membership | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 | — |
| 21-§15-2 | C21@f4a05d5c | §15 a valid Workspace session alone does not grant Owner role | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 | — |
| 21-§15-3 | C21@f4a05d5c | §15 a valid Workspace session alone does not grant cross-business access | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 | — |
| 21-§15-4 | C21@f4a05d5c | §15 a valid Workspace session alone does not grant feature entitlement | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 | — |
| 21-§15-5 | C21@f4a05d5c | §15 a valid Workspace session alone does not grant admin privileges | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.11; EIS-KER-02 | — |
| 21-§16-1 | C21@f4a05d5c | §16 entitlement plus role both required (Basic Voice per plan) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.12; EIS-KER-05 | — |
| 21-§16-2 | C21@f4a05d5c | §16 no dynamic schema create/drop for entitlement | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.12 | — |
| 21-§17 | C21@f4a05d5c | §17 Permission Changes and Runtime Revalidation (single rule; pending confirmation, long conversation) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.13; EIS-KER-09; EIS-CNF-02 | — |
| 21-§18-1 | C21@f4a05d5c | §18 conversational confirmation binds exact actor | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 | — |
| 21-§18-2 | C21@f4a05d5c | §18 conversational confirmation binds exact business | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 | — |
| 21-§18-3 | C21@f4a05d5c | §18 conversational confirmation binds exact action | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 | — |
| 21-§18-4 | C21@f4a05d5c | §18 conversational confirmation binds exact target/object | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 | — |
| 21-§18-5 | C21@f4a05d5c | §18 conversational confirmation binds exact reviewed state/value | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 | — |
| 21-§18-6 | C21@f4a05d5c | §18 conversational confirmation binds expiry/version | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.14; EIS-CNF-01 | — |
| 21-§19 | C21@f4a05d5c | §19 Auditability (whole section; denials not accusatory incident logs) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.15 | — |
| 21-§20-1 | C21@f4a05d5c | §20 conversational denial: do not leak protected data while explaining | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.16 | — |
| 21-§20-2 | C21@f4a05d5c | §20 conversational denial: say what the user can do next | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.16 | — |
| 21-§20-3 | C21@f4a05d5c | §20 conversational denial: preserve normal product operation | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.16 | — |
| 21-§20-4 | C21@f4a05d5c | §20 conversational denial: avoid accusation/shame | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.16 | — |
| 21-§20-5 | C21@f4a05d5c | §20 conversational denial: escalate only if security/abuse criteria are met | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.16 | — |
| 21-§21 | C21@f4a05d5c | §21 Privacy and Dignity (whole section; no hidden staff scoring through AI) | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.17 | — |
| 21-§22 | C21@f4a05d5c | §22 Shared Foundation Reuse (conversation registers capabilities; never invents role logic) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-DEP-01; EIS §8.2 | — |
| 21-§23 | C21@f4a05d5c | §23 Explicit Non-goals (whole section) | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.18 | — |
| 21-§24-1 | C21@f4a05d5c | §24 acceptance 1: Owner accesses Owner-authorized data in own business only | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-2 | C21@f4a05d5c | §24 acceptance 2: cross-business query/write denied server-side | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-3 | C21@f4a05d5c | §24 acceptance 3: Manager sees only delegated capabilities | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-4 | C21@f4a05d5c | §24 acceptance 4: Employee adds approved transaction, no Owner analytics | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-5 | C21@f4a05d5c | §24 acceptance 5: Employee sees own attendance if permitted | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-6 | C21@f4a05d5c | §24 acceptance 6: Employee cannot gain Ask CFO via natural-language prompt | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-7 | C21@f4a05d5c | §24 acceptance 7: supplier/customer/delivery user sees only own bounded data | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-8 | C21@f4a05d5c | §24 acceptance 8: permission revoked after preview blocks execution | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-9 | C21@f4a05d5c | §24 acceptance 9: entitlement plus role both enforced | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-10 | C21@f4a05d5c | §24 acceptance 10: temporary support access scoped/audited/revoked | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-11 | C21@f4a05d5c | §24 acceptance 11: standing automation cannot exceed delegated scope | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§24-12 | C21@f4a05d5c | §24 acceptance 12: normal denial respectful, no data leak | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; Blueprint 1.12 §8.19; SB-P-1.13 conversational analogue in 10-§23/24-§31 rows | — |
| 21-§25 | C21@f4a05d5c | §25 Historical Corrections / Superseded Behavior | HIST | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-HIST | — |
| 21-§26 | C21@f4a05d5c | §26 Provenance and Hydration Coverage | PROV | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-PROV | — |
| 21-§27 | C21@f4a05d5c | §27 Completion Gate | GATE | BUILD NOW | CORE-FDN | SB-P-1.13 | NOT APPLICABLE | — | L-GATE | — |

## H. Inherited residual rows — Contracts 17, 20 and 7 rows assigned to SB-P-1.13 by the locked SB-P-1.12 FCTM

21 rows: 5 `ASSIGNED TO LATER MISSION`, 16 `IN SCOPE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 17-§5-1 | C17@7943f74a | §5 Conversation Workspace is an explicit first-class app component | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | — | NI-CONV; I-12 (17-§5 ASSIGNED SB-P-1.13); A-BP102 | — |
| 17-§5-2 | C17@7943f74a | §5 Workspace must not disappear into a generic dashboard label or be treated merely as outage fallback | NEG | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | — | L-NEG; I-12 | — |
| 17-§5-3 | C17@7943f74a | §5 visual and conversation workspaces share user/business identity | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 | — |
| 17-§5-4 | C17@7943f74a | §5 visual and conversation workspaces share Business Memory | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; I-12 | — |
| 17-§5-5 | C17@7943f74a | §5 visual and conversation workspaces share Permission Engine | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; I-12 | — |
| 17-§5-6 | C17@7943f74a | §5 visual and conversation workspaces share Human Language Layer | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; I-12 | — |
| 17-§5-7 | C17@7943f74a | §5 visual and conversation workspaces share feature action services | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | D12; DTX | NI-CONV; I-12 | — |
| 17-§5-8 | C17@7943f74a | §5 visual and conversation workspaces share document/reminder/intelligence foundations | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | D14; D15 | NI-CONV; I-12 | — |
| 17-§22-4 | C17@7943f74a | §22 acceptance 4: dashboard and conversation show consistent underlying state | SCN | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; I-12 (ASSIGNED SB-P-1.13) | — |
| 17-§22-8 | C17@7943f74a | §22 acceptance 8: Conversation Workspace is first-class in app navigation/experience | SCN | BUILD NOW | MGR+LDG | SB-P-1.13 | IN SCOPE | — | NI-CONV; I-12 (ASSIGNED SB-P-1.13) | — |
| 20-§13 | C20@56ed4d11 | §13 Conversation-first Onboarding (whole section; Workspace capabilities it reuses are 10-§4/§5/§12 rows) | OBL | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | I-12 (SB-P-1.19/SB-P-1.13 joint label); A-BP108 (/start onboarding) | — |
| 20-§14-1 | C20@56ed4d11 | §14 Human Language foundation: language choice available early (onboarding surface itself is SB-P-1.19) | OBL | BUILD NOW | ACT | SB-P-1.13 | IN SCOPE | DAI; D19 | NI-AI; I-12 (20-§14 SB-P-1.13 primary build) | — |
| 20-§14-2 | C20@56ed4d11 | §14 Human Language foundation: language respected across the journey (onboarding surface itself is SB-P-1.19) | OBL | BUILD NOW | ACT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12 (20-§14 SB-P-1.13 primary build) | — |
| 20-§14-3 | C20@56ed4d11 | §14 Human Language foundation: English/Malayalam/Manglish first-class (onboarding surface itself is SB-P-1.19) | OBL | BUILD NOW | ACT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12 (20-§14 SB-P-1.13 primary build) | — |
| 20-§14-4 | C20@56ed4d11 | §14 Human Language foundation: no forced restart when the user switches language (onboarding surface itself is SB-P-1.19) | OBL | BUILD NOW | ACT | SB-P-1.13 | IN SCOPE | DAI | NI-AI; I-12 (20-§14 SB-P-1.13 primary build) | — |
| 20-§15-1 | C20@56ed4d11 | §15 merchant moves between approved channels after identity linkage | OBL | BUILD NOW | ACT | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | I-12 (SB-P-1.13 Workspace / SB-P-1.20 adapter); A-BP109 | — |
| 20-§15-2 | C20@56ed4d11 | §15 onboarding creates no separate identities or duplicate data by channel | OBL | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | I-12; A-BP108 (Business Identity continuity) | — |
| 20-§15-3 | C20@56ed4d11 | §15 native Conversation Workspace introduced as a first-class alternative | OBL | BUILD NOW | ACT | SB-P-1.13 | IN SCOPE | — | NI-CONV; I-12 (Workspace build SB-P-1.13) | — |
| 20-§23-5 | C20@56ed4d11 | §23 acceptance 5: first text/voice transaction produces correct confirmation (onboarding context; kernel rows 10-§23-1, 12-§21-1) | SCN | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | I-12 (SB-P-1.19/SB-P-1.13 joint label); A-BP108 Scenario A | — |
| 7-§11-1 | C7@65ad91b2 | §11 stock-AI feature behaviors (summaries, low/slow/expiry, reorder suggestions, supplier candidates, anomaly explanation, drafts) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-12 (SB-P-1.17 primary); A-BP106 | — |
| 7-§11-2 | C7@65ad91b2 | §11 kernel slice: AI never invents quantities, infers theft, overwrites history, orders without confirmation, or exposes intelligence to staff/suppliers | NEG | BUILD NOW | MGR/ADDON | SB-P-1.13 | IN SCOPE | D12; D17 | L-NEG; I-12 (SB-P-1.13 AI kernel slice); realized by 24-§10, §21, §22 rows | — |

## I. Build Plan — §5.4, §6, §8, §10.2, §11, §12, §13, §15, §16

76 rows: 1 `ASSIGNED TO LATER MISSION`, 44 `IN SCOPE`, 8 `NOT APPLICABLE`, 21 `OUT OF BUILD SCOPE`, 2 `UNRESOLVED FOUNDER DECISION`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| BP-§5.4-1 | BP@9dfdd924 | §5.4 Basic Voice provider integration: Blueprint/EIS identifies environment activation, credentials, failure behavior, rollback, verification | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; BP §5.4 | — |
| BP-§6.2-1 | BP@9dfdd924 | §6.2 one command path input to interpretation to permission to clarification/preview to confirmation/delegation to deterministic command to write to audit to response | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12; DTX | NI-TXCMD; PRECEDENT-CMD; A-BP102 | — |
| BP-§6.2-2 | BP@9dfdd924 | §6.2 path reusable from structured surfaces, Workspace, UDI, reminders, WhatsApp, POS adapters | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; BP §6.2 | — |
| BP-§6.4-1 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares Business Memory | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; BP §6.4 | — |
| BP-§6.4-2 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares permissions | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; BP §6.4 | — |
| BP-§6.4-3 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares language context | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; BP §6.4 | — |
| BP-§6.4-4 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares conversation context | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; BP §6.4 | — |
| BP-§6.4-5 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares AI orchestration | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; BP §6.4 | — |
| BP-§6.4-6 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares typed tool/action proposals | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; BP §6.4 | — |
| BP-§6.4-7 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares confirmation state | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; BP §6.4 | — |
| BP-§6.4-8 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares deterministic domain commands | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12; DTX | NI-CONV; BP §6.4 | — |
| BP-§6.4-9 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares voice/document handoff | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | DV; D14 | NI-CONV; BP §6.4 | — |
| BP-§6.4-10 | BP@9dfdd924 | §6.4 Conversation and AI kernel shares auditability | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; BP §6.4 | — |
| BP-§6.6-1 | BP@9dfdd924 | §6.6 thin channel adapters; channels do not become separate business engines | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; BP §6.6 | — |
| BP-§8.3-1 | BP@9dfdd924 | §8.3 native Conversation Workspace is a first-class access channel built before WhatsApp | RULE | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; BP §8.3 | — |
| BP-§8.4-1 | BP@9dfdd924 | §8.4 kernel, not the WhatsApp adapter, owns Business Memory, permissions, AI, domain commands, reminder logic, UDI, business rules (single rule) | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; BP §8.4 | — |
| BP-§8.4-2 | BP@9dfdd924 | §8.4 before SB-P-1.20, Meta disconnected completely and approved workflows still proven through the native app | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | IN SCOPE | — | NI-CONV; BP §8.4; A-BP102 Scenario B | — |
| BP-§8.4-3 | BP@9dfdd924 | §8.4 kernel accepts a normalized Smart Business message so the post-SB-P-1.20 path reuses the existing kernel | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; BP §8.4 | — |
| BP-§8.4-4 | BP@9dfdd924 | §8.4 Reject: WhatsApp to separate AI bot to separate rules to separate business logic to database | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §8.4 'Reject'; must-not-appear check | — |
| BP-§10.2-W1 | BP@9dfdd924 | §10.2 required work area: native Conversation Workspace | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 | — |
| BP-§10.2-W2 | BP@9dfdd924 | §10.2 required work area: English/Malayalam/Manglish language understanding | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 | — |
| BP-§10.2-W3 | BP@9dfdd924 | §10.2 required work area: conversation context | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 | — |
| BP-§10.2-W4 | BP@9dfdd924 | §10.2 required work area: Basic Voice | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | DV | NI-CONV; A-BP102 | — |
| BP-§10.2-W5 | BP@9dfdd924 | §10.2 required work area: AI orchestration and provider abstraction | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP102 | — |
| BP-§10.2-W6 | BP@9dfdd924 | §10.2 required work area: typed tool/action proposals | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 | — |
| BP-§10.2-W7 | BP@9dfdd924 | §10.2 required work area: permission-context propagation | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP102 | — |
| BP-§10.2-W8 | BP@9dfdd924 | §10.2 required work area: clarification/preview/confirmation | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP102 | — |
| BP-§10.2-W9 | BP@9dfdd924 | §10.2 required work area: deterministic domain command execution | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D12; DTX | NI-CONV; A-BP102 | — |
| BP-§10.2-W10 | BP@9dfdd924 | §10.2 required work area: audit trail | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP102 | — |
| BP-§10.2-W11 | BP@9dfdd924 | §10.2 required work area: attachment handoff into UDI path | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D14 | NI-CONV; A-BP102 | — |
| BP-§10.2-W12 | BP@9dfdd924 | §10.2 required work area: FAQ-before-AI Support Automation foundation | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 | — |
| BP-§10.2-W13 | BP@9dfdd924 | §10.2 required work area: graceful AI/provider failure behavior | WORK | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP102 | — |
| BP-§10.2-I1 | BP@9dfdd924 | §10.2 infrastructure condition: explicit environment/provider activation gate for Basic Voice | RULE | BUILD NOW | CORE-LM | SB-P-1.13 | IN SCOPE | DV | NI-VOICE; A-BP102 | — |
| BP-§10.2-E1 | BP@9dfdd924 | §10.2 Founder-approved experience: authorized merchant opens native Workspace and uses natural English/Malayalam/Manglish | EXP | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP102 | — |
| BP-§10.2-E2 | BP@9dfdd924 | §10.2 Founder-approved experience: smallest useful clarification for ambiguous consequential amount/item/party/date/unit/action | EXP | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | DAI | NI-CONV; A-BP102 | — |
| BP-§10.2-E3 | BP@9dfdd924 | §10.2 Founder-approved experience: natural-language actions cannot bypass permissions | EXP | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D12 | NI-CONV; A-BP102 | — |
| BP-§10.2-E4 | BP@9dfdd924 | §10.2 Founder-approved experience: structured pages remain available; conversation enriches rather than replaces | EXP | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 | — |
| BP-§10.2-E5 | BP@9dfdd924 | §10.2 Founder-approved experience: Smart Business still works if WhatsApp/Meta is disconnected | EXP | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102 | — |
| BP-§10.2-SA1 | BP@9dfdd924 | §10.2 Founder Runtime Scenario A: natural-language transaction; clarify if required; preview; execute through governed command/RPC; confirm stored state | FRV | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D12; DTX; DAI | NI-TXCMD; NI-AI; A-BP102; Delta D-02 (premise 'existing governed command/RPC' not met for transaction creation) | — |
| BP-§10.2-SA2 | BP@9dfdd924 | §10.2 Founder Runtime Scenario A: Employee request for Owner-only profit denied | FRV | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | D12; DAI | NI-AI; A-BP102; dependency-blocked on SB-P-1.12 implementation (Delta D-05) | — |
| BP-§10.2-SB | BP@9dfdd924 | §10.2 Founder Runtime Scenario B: Meta/WhatsApp unavailable; Owner completes approved native workflow; evidence of no Meta call | FRV | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | NI-CONV; A-BP102; BP §8.4 | — |
| BP-§10.2-X | BP@9dfdd924 | §10.2 Exit principle | NARR | BUILD NOW | per contract | SB-P-1.13 | NOT APPLICABLE | — | L-NARR | — |
| BP-§11-1 | BP@9dfdd924 | §11 SB-P-1.13 underpins Ask CFO, multilingual workflows, Voice, WhatsApp and FAQ-first support (kernel reusable by them) | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | IN SCOPE | — | NI-CONV; BP §11 | — |
| BP-§12-1 | BP@9dfdd924 | §12 SB-P-1.13 establishes the FAQ-before-AI / low-compute support foundation in the shared message pipeline | OBL | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | NI-FAQ; A-BP12 | — |
| BP-§12-2 | BP@9dfdd924 | §12 SB-P-1.19 completes broader support automation, escalation, operating surfaces, purpose-limited access, handoff | OBL | BUILD NOW | CORE-SUP | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP12 | — |
| BP-§12-3 | BP@9dfdd924 | §12 one support system; no separate support implementation for Conversation and lifecycle | NEG | BUILD NOW | CORE-SUP | SB-P-1.13 | IN SCOPE | — | L-NEG; A-BP12 | — |
| BP-§13-1 | BP@9dfdd924 | §13 Completion Report includes an Experience Verification Matrix seeded from §10.2 | RULE | BUILD NOW | per row family | SB-P-1.13 | IN SCOPE | — | process obligation; seeded at Stage 4 | — |
| BP-§15-1 | BP@9dfdd924 | §15 unresolved Founder decision: current free-trial policy | UFD | BUILD NOW | per decision | SB-P-1.13 | NOT APPLICABLE | — | Does not concern SB-P-1.13 scope | — |
| BP-§15-2 | BP@9dfdd924 | §15 unresolved Founder decision: exact Voice Plus price | UFD | BUILD NOW | ADDON-LM | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | — | Not on SB-P-1.13 critical path: Voice Plus is SB-P-1.19; GPCV §8 says it does not block Basic Voice | BP §15-2 (open) |
| BP-§15-3 | BP@9dfdd924 | §15 unresolved Founder decision: exact Staff/HR price | UFD | BUILD NOW | per decision | SB-P-1.13 | NOT APPLICABLE | — | Does not concern SB-P-1.13 scope | — |
| BP-§15-4 | BP@9dfdd924 | §15 unresolved Founder decision: exact Smart Stock price | UFD | BUILD NOW | per decision | SB-P-1.13 | NOT APPLICABLE | — | Does not concern SB-P-1.13 scope | — |
| BP-§15-5 | BP@9dfdd924 | §15 unresolved Founder decision: exact Smart Order & Delivery price | UFD | BUILD NOW | per decision | SB-P-1.13 | NOT APPLICABLE | — | Does not concern SB-P-1.13 scope | — |
| BP-§15-6 | BP@9dfdd924 | §15 unresolved Founder decision: long-term retention/deletion duration after cancellation/non-payment | UFD | BUILD NOW | CORE | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | — | Not on SB-P-1.13 critical path: 10-§16-2 and 12-§15-4 follow policy; no duration needed to build conversation retention controls (GPCV §8 narrow-blocker rule) | BP §15-6 (open) |
| BP-§15-7 | BP@9dfdd924 | §15 unresolved Founder decision: employee KYC/national-ID necessity | UFD | BUILD NOW | per decision | SB-P-1.13 | NOT APPLICABLE | — | Does not concern SB-P-1.13 scope | — |
| BP-§15-8 | BP@9dfdd924 | §15 unresolved Founder decision: wholesaler/marketplace expansion | UFD | BUILD NOW | per decision | SB-P-1.13 | NOT APPLICABLE | — | Does not concern SB-P-1.13 scope | — |
| BP-§15-9 | BP@9dfdd924 | §15 unresolved Founder decision: third-party underwriting/lending ecosystem | UFD | BUILD NOW | per decision | SB-P-1.13 | NOT APPLICABLE | — | Does not concern SB-P-1.13 scope | — |
| BP-§16-1 | BP@9dfdd924 | §16 rejection: Ask CFO as write-capable authority | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-2 | BP@9dfdd924 | §16 rejection: AI accusation/judgment of employees or customers | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-3 | BP@9dfdd924 | §16 rejection: continuous staff GPS surveillance by default | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-4 | BP@9dfdd924 | §16 rejection: automated wage punishment | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-5 | BP@9dfdd924 | §16 rejection: blind supplier procurement without valid Owner delegation | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-6 | BP@9dfdd924 | §16 rejection: hard credit blocking by default | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-7 | BP@9dfdd924 | §16 rejection: custom client-specific POS modification inside core | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-8 | BP@9dfdd924 | §16 rejection: marketplace behavior inside Smart Order & Delivery | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-9 | BP@9dfdd924 | §16 rejection: customer silence invalidating sufficiently proven delivery | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-10 | BP@9dfdd924 | §16 rejection: duplicate channel-specific Business Memory | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-11 | BP@9dfdd924 | §16 rejection: duplicate channel-specific permission models | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-12 | BP@9dfdd924 | §16 rejection: separate AI brains per feature/channel | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-13 | BP@9dfdd924 | §16 rejection: model conversation history as permanent Business Memory | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-14 | BP@9dfdd924 | §16 rejection: uncontrolled binary-media concentration in Supabase | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-15 | BP@9dfdd924 | §16 rejection: provider URLs as permission authority/business identity | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-16 | BP@9dfdd924 | §16 rejection: destructive subscription-driven schema creation/deletion | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-17 | BP@9dfdd924 | §16 rejection: broad routine Super Admin access to merchant private data | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-18 | BP@9dfdd924 | §16 rejection: revival of /survey or obsolete domains/routes | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-19 | BP@9dfdd924 | §16 rejection: old Daily Intelligence timing conflicting with 7:00/10:30/22:00 | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-20 | BP@9dfdd924 | §16 rejection: independent Catalog product expansion | REJ | REJECT | REJECT | SB-P-1.13 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |

## J. Delegate contracts — sections whose behaviour SB-P-1.13 touches at its boundary (Contracts 2, 3, 5, 11, 18, 19, 23, 25)

20 rows: 20 `DELEGATED`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 2-§7 | C2@53635557 | §7 Read-only Intelligence Boundary | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15 | A-BP104; touch: kernel tool registry must expose no write tools to Ask CFO-class intents (24-§11-5, 10-§9-3) | — |
| 2-§14 | C2@53635557 | §14 Smart Business Conversation Workspace (Ask CFO in Workspace) | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15 | A-BP104; touch: Workspace hosts Ask CFO when built (10-§9-1) | — |
| 2-§15 | C2@53635557 | §15 Basic Voice Assistant + Ask CFO | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15 | A-BP104; touch: Basic Voice path reused by Ask CFO (12-§12-1) | — |
| 3-§5 | C3@d8c26c07 | §5 Supported Input Paths (text, voice, documents, forms over one Ledger truth) | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | A-BP103 (mature Ledger); touch: conversational text/voice transaction input (BP-§10.2-SA1; Delta D-02) | — |
| 3-§6 | C3@d8c26c07 | §6 Immediate Confirmation reflecting state actually stored | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | A-BP103 (mature Ledger); touch: truthful stored-state confirmation (10-§23-1, BP-§10.2-SA1) | — |
| 3-§7 | C3@d8c26c07 | §7 Clarification Rules for consequential records | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | A-BP103 (ambiguity handling); touch: conversational clarification (9-§9, 10-§17) | — |
| 3-§12 | C3@d8c26c07 | §12 WhatsApp and Conversation Workspace consistency | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | A-BP103; touch: one transaction semantics across channels (10-§6-3) | — |
| 3-§16 | C3@d8c26c07 | §16 AI Behaviour for Ledger | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | A-BP103; touch: kernel must-nots (24-§10, §22) | — |
| 3-§22 | C3@d8c26c07 | §22 Implementation Dependency Rule (extend, not replace, transaction/correction/audit foundations) | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | A-BP103; touch: any governed transaction command added for Scenario A (Delta D-02) | — |
| 5-§3 | C5@80ac648e | §3 Mandatory Processing Pattern (interpret, preview, clarify, confirm, update) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | A-BP103 (UDI); touch: attachment handoff boundary (10-§4-3 to -8, 10-§23-3a) | — |
| 5-§8 | C5@80ac648e | §8 Channels (document intake through Workspace) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | A-BP103 (UDI); touch: Workspace upload hands off into UDI (10-§10-2) | — |
| 11-§5 | C11@e802745a | §5 Natural-language Creation of reminders | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15 | A-BP104 (Reminder Engine); touch: reminder intent recognized and routed (24-§13-1) | — |
| 11-§15 | C11@e802745a | §15 Human Language and Voice for reminders | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15 | A-BP104; touch: language layer reuse (9-§9-5, 9-§17-5) | — |
| 18-§5 | C18@6b96b10a | §5 Entitlement Model | OBL | BUILD NOW | CORE-COM | SB-P-1.19 | DELEGATED | D19 | A-BP108 (subscription lifecycle); EIS-KER-05 primitive is SB-P-1.12; touch: Basic Voice 'according to plan' and Voice Plus entitlement (10-§11-1) | — |
| 19-§7 | C19@94aa6f24 | §7 Support Operations | OBL | BUILD NOW | INTERNAL | SB-P-1.19 | DELEGATED | D19 | A-BP12; A-BP108; touch: FAQ foundation must hand off to the one support system (BP-§12-3) | — |
| 19-§11 | C19@94aa6f24 | §11 AI Operations / Quality / Cost telemetry (aggregate, no routine conversation reading) | OBL | BUILD NOW | INTERNAL | SB-P-1.19 | DELEGATED | D19 | A-BP108 (Super Admin); touch: AI usage/cost telemetry produced here (24-§26-9, 22-§23-3) | — |
| 23-§9 | C23@2430e1c6 | §9 Shared AI / Intent Pipeline | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | DELEGATED | D20 | A-BP109; touch: kernel accepts normalized messages (BP-§8.4-3) | — |
| 23-§22 | C23@2430e1c6 | §22 Cross-Channel Continuity | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | DELEGATED | D20 | A-BP109; touch: shared context/confirmation design (10-§6, 10-§7) | — |
| 25-§12 | C25@406ce089 | §12 Voice Memory Relationship (raw audio in shared object storage, purpose-limited) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | A-BP103 (governed media/object storage); touch: Basic Voice raw-audio retention (12-§15-4, DC-04) | — |
| 25-§13 | C25@406ce089 | §13 WhatsApp and Conversation Workspace Relationship (one storage foundation) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | A-BP103; touch: attachment/voice media from Workspace (10-§4-3 to -7) | — |
## K. Totals and reproducible counts

Counts below were produced by parsing this file's own table rows, not by hand. Reproduce from the repository root:

```bash
F=communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md
grep -cE '^\| (BP|[0-9]+)-§' "$F"
awk -F'|' '/^\| (BP|[0-9]+)-§/ {gsub(/^ +| +$/,"",$9); print $9}' "$F" | sort | uniq -c
awk -F'|' '/^\| (BP|[0-9]+)-§/ {gsub(/^ +| +$/,"",$5); print $5}' "$F" | grep -c '^SCN$'
```

| Part | Rows | IN SCOPE | ASSIGNED | DELEGATED | N/A | OUT OF BUILD | UFD | ESCALATED |
|---|---|---|---|---|---|---|---|---|
| A Contract 24 | 212 | 180 | 26 | 0 | 6 | 0 | 0 | 0 |
| B Contract 9 | 106 | 89 | 14 | 0 | 3 | 0 | 0 | 0 |
| C Contract 10 | 158 | 121 | 29 | 0 | 8 | 0 | 0 | 0 |
| D Contract 12 | 112 | 85 | 19 | 0 | 7 | 0 | 1 | 0 |
| E Contract 8 | 78 | 50 | 24 | 0 | 4 | 0 | 0 | 0 |
| F Contract 22 | 109 | 66 | 8 | 26 | 9 | 0 | 0 | 0 |
| G Contract 21 | 82 | 0 | 0 | 75 | 7 | 0 | 0 | 0 |
| H Inherited (17, 20, 7) | 21 | 16 | 5 | 0 | 0 | 0 | 0 | 0 |
| I Build Plan | 76 | 44 | 1 | 0 | 8 | 21 | 2 | 0 |
| J Delegates (2, 3, 5, 11, 18, 19, 23, 25) | 20 | 0 | 0 | 20 | 0 | 0 | 0 | 0 |
| **Total** | **974** | **651** | **126** | **121** | **52** | **21** | **3** | **0** |

Acceptance-scenario and worked-example rows (`SCN`): 92. Of these, 85 represent the 84 numbered acceptance scenarios of Contracts 8, 9, 10, 12, 21, 22 and 24 (Contract 10 Scenario 3 is split into two rows); 4 are the Contract 24 Section 18 worked examples; 3 are inherited Contract 17 and 20 scenarios.

Owning-mission distribution: SB-P-1.12 99, SB-P-1.13 724, SB-P-1.14 34, SB-P-1.15 38, SB-P-1.16 4, SB-P-1.17 7, SB-P-1.18 8, SB-P-1.19 41, SB-P-1.20 19.

No row is `ESCALATED`. No row is `ALREADY DEMONSTRATED`. Three rows are `UNRESOLVED FOUNDER DECISION` (`12-§24`, `BP-§15-2`, `BP-§15-6`); none is on this mission's critical path.
