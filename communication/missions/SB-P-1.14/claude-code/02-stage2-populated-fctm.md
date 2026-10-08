# SB-P-1.14 — Stage 2 Populated FCTM

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation (Section 3.2, Section 6)
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; OUTPUT NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`. Stage 2 was authorized by SB-P-1.14-MC-02 (PR #812, merged) (Source 18 Section 3.3).
**Prepared by:** Claude Code, Stage 2–4 Definition Actor (SB-P-1.14-MC-01), under SB-P-1.14-MC-02
**Baseline:** `main@5a464e55f3365cbb4689d70f9c42dbe320ebb558`, 2026-10-07
**Opened by:** `mission-control/03-stage1-fctm-open.md` (Stage 1 canonical at `main@8747a1bcd0816e79fad7158e52a4113708664d2d`)

This matrix is an accounting of approved truth. It adds no product decision and reopens no approved decision. Requirement text lives only in the source contracts. Rows hold pointers, dispositions and citations. The independent obligation inventory is `03-stage2-obligation-inventory.md`.

## 0. How to read this matrix

### 0.1 Columns

| Column | Meaning |
|---|---|
| Row ID | `<contract>-§<section>-<ordinal>`. Build Plan rows use `BP-§<section>-<ordinal>`. A whole-section row has no ordinal. A suffix `a`/`b` splits one obligation or acceptance scenario across two owning missions; both slices trace to the same source item. `25-§FP` is the unnumbered Final Principle of Contract 25. |
| Source @ blob | Source code and the first eight characters of the blob SHA at the baseline (full SHAs in Section 0.4). |
| Exact source pointer | The section and the item inside it. It is a pointer, not requirement text. |
| Kind | `OBL` obligation; `NEG` must-not / non-goal check; `SCN` acceptance scenario or worked example; `RULE` architectural rule; `WORK` Build Plan work area; `EXP` Founder-approved experience or outcome; `FRV` Founder Runtime Verification scenario; `REJ` Build Plan rejection; `UFD` unresolved Founder decision; `GATE` mandatory gate; `NARR`, `PRIN`, `HIST`, `PROV`, `DEP` non-obligation sections. |
| Build commitment | Global Product Completion View value, preserved verbatim. |
| Commercial | Commercial classification from the contract header and the Global Product Completion View (Section 0.3). |
| Owning mission | The mission that owns the obligation under an approved source. |
| Disposition | Source 18 Section 3.2 item 3 vocabulary only. |
| Dependency | Dependency state code (Section 0.5). |
| Evidence / citation | Implementation evidence code and the disposition-supporting citation (Section 0.6). `D-nn` refers to `05-stage2-delta-evidence.md`; `DC-nn` to the derived constraints in `01-stage2-mission-truth-pack.md` Part 3. |
| Founder decision | Founder Decision ID where a row differs from, or waits on, an approved source. `FDB-n` marks a row touched by an open question in `founder/01-stage2-decision-brief.md`; it records no decision and changes no disposition. |

### 0.2 Disposition use in this mission

- `IN SCOPE` — `BUILD NOW` in SB-P-1.14 and to be demonstrated here. No row is `ALREADY DEMONSTRATED`: nothing in scope has accepted runtime evidence for this mission's obligations. Existing foundations (SB-P-1.9A transactions and corrections, SB-P-1.11 parser/import) are reuse evidence (`PART-*`, `PRECEDENT-*`), not demonstration.
- `ASSIGNED TO LATER MISSION` — always cites an approved assignment source: Build Plan Sections 9, 10, 11 or 12, a contract's own dependency, or a canonical upstream FCTM. The row stays `BUILD NOW`.
- `DELEGATED` — owned by another contract and its owning mission, or by SB-P-1.12/SB-P-1.13 for Contract 22 sections their canonical FCTMs hold `IN SCOPE`. SB-P-1.14 consumes the locked specification. It does not treat the runtime behaviour as demonstrated.
- `NOT APPLICABLE` — narrative, history, provenance, dependency-list or completion-gate sections, and sections this mission does not touch, each with a reason.
- `OUT OF BUILD SCOPE` — Build Plan `REJECT` items, checked as "must not appear".
- `UNRESOLVED FOUNDER DECISION` — only items on the approved Build Plan Section 15 list. None is on this mission's critical path.
- `ESCALATED` — no row. Stage 2 findings that need Founder or Mission Control determination are reported in `01-stage2-mission-truth-pack.md` Part 6 and in the Stage 2 decision brief. They are not self-resolved by changing a row.

A row whose obligation cannot be built or demonstrated until an approved upstream or later dependency exists stays `IN SCOPE`. Its Dependency column names the blocker (Source 18 Section 3.2 item 5). No row has been moved because of a dependency.

**Assignment boundary preserved.** Four-state Ledger widening (income, expense, credit, repayment) is `IN SCOPE` here (Build Plan Section 10.3 engineering correction, `BP-§10.3-C1`). Customer-credit-specific maturity and financial integrity stay with SB-P-1.16 (`BP-§9-2`, `BP-§10.3-C2`, Contract 14 rows in Part G). Rows on the line between the two carry `FDB-1`.

### 0.3 Commercial classification codes

| Code | Source |
|---|---|
| `CORE-LM` | Core, Ledger + Manager (Contract 3 header "Smart Business Ledger + Smart Business Manager core"; GPCV row 3; also Contracts 2, 4, 12 Basic Voice, 14, 15) |
| `CORE-FDN` | Core shared foundation (Contract 5 "Core cross-feature capability", GPCV row 5; Contract 25 "Shared across Ledger, Manager and approved add-ons", GPCV row 25 "Core shared storage foundation"; Contracts 9 and 21) |
| `CORE-ARCH` | Core cross-product architecture (Contract 22; GPCV row 22) |
| `CORE-INT` | Core shared intelligence foundation (Contract 24) |
| `CORE-CH` | Core shared channel (Contracts 10 and 23) |
| `MGR+LDG`, `MGR/ADDON`, `MGR-CORE` | Contract 17; Contract 7 (Manager core, Smart Stock add-on path for Ledger); Contract 13 (Manager core / standard integration layer) |
| `ADDON-LM` | Add-on, Ledger + Manager (Contracts 1, 6, 16) |
| `CORE-COM`, `INTERNAL`, `ACT` | Contract 18 core platform commercial capability; Contract 19 internal platform; Contract 20 activation |
| `per contract` | Build Plan rows inherit the classification of the contract family they govern |
| `REJECT` | Build Plan Section 16 rejection |

### 0.4 Sources and blobs at the baseline

| Code | Path (under `docs/phase-1-mission-blueprint/smart-business-features/`) | Blob |
|---|---|---|
| `C3` | `03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| `C5` | `05_Universal_Document_and_Receipt_Intelligence.md` | `80ac648e6764f0288f04a4591902ba029d01ab58` |
| `C22` | `22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| `C25` | `25_Document_Media_Storage_and_Retention_Foundation.md` | `406ce0892451d2a71e28687fd53ad5f818085242` |
| `BP` | `00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| `GPCV` | `00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| `C24` | `24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| `C10` | `10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| `C9` | `09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| `C12` | `12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| `C17` | `17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| `C7` | `07_Stock_Supplier_and_Reorder_Intelligence.md` | `65ad91b202def9cb4f42b97383bcc58475f59015` |
| `C21` | `21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| `C14` | `14_Smart_Credit_Awareness.md` | `16914a834c3dd3abcc5a41029d78cb96edb1a72f` |
| `C15` | `15_Payment_Verification_and_Bank_Reconciliation.md` | `632f34026ee1cfe580f031e888777d50619eea2f` |
| `C18` | `18_Subscription_Payment_and_Account_Lifecycle.md` | `6b96b10aee35036b18afb3bba7a4950e7b36b7fb` |
| `C19` | `19_Super_Admin_and_Platform_Stewardship.md` | `94aa6f2422a3ef5c1b41fca4e17b07a098261cb5` |
| `C23` | `23_WhatsApp_Intelligence_and_Channel_Adapter.md` | `2430e1c6191908bb23a5971405b8214d8d98d7ff` |
| `C2` | `02_Ask_CFO.md` | `53635557fb2907e0e9011613511c9f34b8548edf` |
| `C4` | `04_Daily_Intelligence_Rhythm.md` | `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd` |
| `C1` | `01_Smart_Order_and_Delivery_Assistant.md` | `b392c8cb851683ea7bba1d6351c565a4c0c555ed` |
| `C6` | `06_Staff_and_HR_Assistant.md` | `ebacd1838ec709241c07d3ab911377b6284b90d2` |
| `C16` | `16_Compliance_Shield.md` | `420269d8407485fc659072242fff03cd27f023e4` |
| `C20` | `20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` |
| `C13` | `13_POS_Counter_Intelligence_and_Closing_Cash.md` | `4426e8b1f9e856047759bdb03e2f5b83820f8cc0` |

All eight Stage 1 intake blobs (Build Plan, GPCV, Contracts 3, 5, 22, 25, the Phase 1 guide and Source 18) are byte-identical at this baseline. The other sources were not listed with blobs at Stage 1; their blobs above are recorded at this baseline. Upstream FCTMs: SB-P-1.12 `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`; SB-P-1.13 `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22`.

### 0.5 Dependency codes

| Code | Dependency | State at this baseline |
|---|---|---|
| `—` | None beyond this mission | — |
| `D12` | SB-P-1.12 authority kernel: verified principal, explicit active business, memberships and role defaults, capability registry, action types and object scope, isolation (incl. files/exports/object storage, EIS-ISO-05), command-only write boundary, confirmation bindings, revalidation, shared idempotency, multi-row import under revocation, authority events, denial contract, provenance widening, record-class retention registry | SPECIFICATION AVAILABLE (locked Blueprint and EIS); IMPLEMENTATION NOT COMPLETE (Implementation Authorization WITHHELD; MC-70 suspension); EVIDENCE NOT COMPLETE (no Stage 17 or 19). Consumption contract: SB-P-1.12 EIS-DEP-01 / Section 19.5. Detail: Truth Pack Part 5 |
| `D13` | SB-P-1.13 Conversation/AI kernel: Workspace surface, channel-neutral kernel entry, AI gateway and provider abstraction, instruction/data separation, typed tools and frozen proposals, Basic Voice, attachment intake and handoff (EIS13-ATT-01) | SPECIFICATION AVAILABLE (locked Blueprint, EIS and v1.0 package); IMPLEMENTATION NOT COMPLETE (Implementation Authorization WITHHELD; MC-38 suspension); EVIDENCE NOT COMPLETE. Detail: Truth Pack Part 5 |
| `DTX` | The one governed create-transaction command (`create_transaction_governed`, SB-P-1.13 EIS13-CMD-02) under the SB-P-1.12 narrow-executor contract and WS-A3 transactions-family cut-over. Four-state widening extends this command; no second protected transaction-write path | Specified (SB-P-1.13 FPDR-1; resume register §D); not implemented; transactions are written by direct client insert today (Delta D-02) |
| `DAI` | AI provider interpretation (OpenAI, Contract 22 §25) behind the SB-P-1.13 gateway, for image, PDF and handwriting interpretation | No AI code in the repository; provider account, key custody and data controls `UNVERIFIED — ACCESS REQUIRED` (Delta D-14). Activation NOT AUTHORIZED |
| `DR2` | Durable object storage activation gate (Cloudflare R2 / approved durable object storage, Build Plan Section 5.4) | No storage client, bucket, policy or credential in the repository (Delta D-06). Provider account and availability `UNVERIFIED — ACCESS REQUIRED`. Selection, purchase, configuration and activation NOT AUTHORIZED |
| `DLEG` | Record-class retention and legal basis. No retention duration is created by inference; rules follow the applicable validated policy (Contract 25 §17, Contract 22 §33.7, SB-P-1.12 EIS-LEG-01 to -03, SB-P-1.12 Founder Record 06) | Provisional Phase One research basis exists for identity/record-class separation (MC-117); no document-class retention rule is approved |
| `D15` | SB-P-1.15: Reminder Engine, Scheduler foundation (Contract 22 §18), Notification Foundation, Daily Intelligence, Ask CFO | Not started; Build Plan Section 10.4 |
| `D16`, `D17`, `D18` | SB-P-1.16 customer credit and payment evidence; SB-P-1.17 stock/supplier/POS and Customer/Supplier directory; SB-P-1.18 add-ons and Customer identity for orders | Not started |
| `D19` | SB-P-1.19 lifecycle, export path, support completion, onboarding, Voice Plus | Not started |
| `D20` | SB-P-1.20 WhatsApp adapter and channel verification | Not started |
| `DUF6` | Build Plan Section 15 item 6 (long-term retention after cancellation/non-payment) | Open; not on this mission's critical path (GPCV Section 8) |

Several codes in one cell are separated by `;`.

### 0.6 Evidence and citation codes

| Code | Meaning |
|---|---|
| `NI-LDG4` | Not implemented: `transactions.transaction_type` is `CHECK ('sale','purchase')`; `correct_transaction` rejects other types; no credit/repayment linkage (Delta D-01) |
| `PART-LDG` | Partial foundation: manual sale/purchase entry, `correct_transaction` with `transaction_correction_events` (SB-P-1.9A); reuse evidence, not demonstration (Delta D-01, D-03, D-08) |
| `NI-UDI` | Not implemented: no image/PDF/handwriting interpretation and no document preview-confirm-update into the Ledger; only catalog CSV/XLSX import exists (Delta D-04) |
| `PART-IMP` | Partial foundation: catalog CSV/XLSX import with server-side limits, content-type and macro checks, preview/commit, row idempotency, parser lease/guard and an unwired AWS Lambda offload (SB-P-1.11; Delta D-04, D-05) |
| `NI-STO` | Not implemented: no durable object storage, no Supabase Storage bucket or policy, no R2 client or credential (Delta D-06) |
| `NI-CAB` | Not implemented: no Receipt Cabinet and no document-to-record linkage (Delta D-06, D-08) |
| `NI-PROV` | Not implemented: no document provenance record (Delta D-08) |
| `NI-SRCH` | Not implemented: no search or filter; recent-50 list and daily totals only (Delta D-09) |
| `NI-EXP` | Not implemented: no export (Delta D-09) |
| `PRECEDENT-IDM` | Idempotency and preview-binding precedents exist for catalog and inventory only (`catalog_write_idempotency_keys`, `row_idempotency_key`, inventory idempotency key and fingerprint, `catalog_link_preview_tokens`, parser lease SHA-256); none for transactions or documents (Delta D-07) |
| `A-BP103` | Build Plan Section 9 row 3 lists the contract for SB-P-1.14 and Section 10.3 names the work area; no approved source assigns this obligation elsewhere |
| `A-BP103-C` | Build Plan Section 10.3 "Important engineering correction" |
| `A-BP103-S` | Build Plan Section 10.3 "Search sequencing clarification" |
| `A-BP103-FRV` | Build Plan Section 10.3 Founder Runtime Verification scenarios |
| `A-BP104` to `A-BP109` | Build Plan Section 9 row and Sections 10.4 to 10.9 for SB-P-1.15 to SB-P-1.20 |
| `A-FPDR12-1` | SB-P-1.12 Founder decision `FPDR-1`: Notification Foundation owned by SB-P-1.15 |
| `L-X20` | The native slice is demonstrated here; the WhatsApp-channel proof belongs to SB-P-1.20 channel verification (Build Plan Section 9 row 9) |
| `I-12` | Inherited status from the canonical SB-P-1.12 FCTM (blob `1650ff95`) |
| `I-13` | Inherited status from the canonical SB-P-1.13 FCTM (blob `97ddc752`) |
| `L-DEL12`, `L-DEL13` | Contract 22 section held `IN SCOPE` for SB-P-1.12 (`I-12`) or SB-P-1.13 (`I-13`); SB-P-1.14 consumes the locked specification |
| `L-DEL21` | Contract 21 is wholly assigned to SB-P-1.12 (Build Plan Section 9 row 1) |
| `L-ILL` | The source presents the list as illustrative ("such as", "may include"); one row, named in `03-stage2-obligation-inventory.md` Section 3 |
| `L-NEG` | Contract's own non-goal or must-not, checked as "must not appear" in this mission's deliverable |
| `L-NARR`, `L-HIST`, `L-PROV`, `L-GATE`, `L-DEP` | Narrative, historical, provenance, completion-gate or dependency-list section; not a separately verifiable obligation |
| `EIS-*`, `EIS13-*` | Requirement IDs in the locked SB-P-1.12 EIS (blob `c444f750`) and SB-P-1.13 EIS (blob `9a1e723d`) |

### 0.7 Expansion method

A section is expanded to one row per item when its text lists separately testable things, including lists introduced by "such as" or "examples include" where each item is a distinct merchant-visible case (for example Contract 3 §7 clarification cases and Contract 5 §9 preview contents). A list stays one row only when the text presents it as illustrative of one rule and no item is separately testable on its own; each such row is marked `L-ILL` and named in `03-stage2-obligation-inventory.md` Section 3 so Mission Control can contest it. A section whose obligations share one non-`IN SCOPE` disposition may be one row (Source 18 Section 3.2 item 2). Every numbered acceptance scenario has its own row, including Contract 22 §33.8, which is wholly `DELEGATED`.

## A. Contract 3 — Ledger & Business Memory (full mission-assigned contract)

164 rows: 143 `IN SCOPE`, 16 `ASSIGNED TO LATER MISSION`, 1 `DELEGATED`, 4 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 3-§1 | C3@d8c26c07 | §1 Feature Identity | NARR | BUILD NOW | CORE-LM | SB-P-1.14 | NOT APPLICABLE | — | L-NARR; the business-memory rule is carried by 3-§9-*, 3-§23 | — |
| 3-§2-1 | C3@d8c26c07 | §2 Founder Problem Statement (merchant habits) | NARR | BUILD NOW | CORE-LM | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 3-§2-2 | C3@d8c26c07 | §2 product must not force an ERP-first operating style | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 3-§3 | C3@d8c26c07 | §3 Lighthouse Principle: Ledger behaviour must preserve the seven listed principles (single rule; realized by 3-§6-*, 3-§8-*, 3-§16-*, 3-§20-*) | PRIN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | A-BP103; principle stated as 'must preserve' | — |
| 3-§4-1 | C3@d8c26c07 | §4 core state 1: Income persists | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4 (D-01); A-BP103 | — |
| 3-§4-2 | C3@d8c26c07 | §4 core state 2: Expense persists | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4 (D-01); A-BP103 | — |
| 3-§4-3 | C3@d8c26c07 | §4 core state 3: Credit (owed to or by a relevant party, per approved workflow) persists | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4 (D-01); A-BP103; A-BP103-C | FDB-1 (open question; Stage 2 brief) |
| 3-§4-4 | C3@d8c26c07 | §4 core state 4: Repayment (settlement against an existing credit relationship) persists | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4 (D-01); A-BP103; A-BP103-C | FDB-1 (open question; Stage 2 brief) |
| 3-§4-5 | C3@d8c26c07 | §4 must not reduce product behaviour to a permanent sale/purchase-only model | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103-C; D-01 | — |
| 3-§4-6 | C3@d8c26c07 | §4 richer internal event types permitted (implementation choice) | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | A-BP103 ('additive transaction-type widening') | — |
| 3-§5-1 | C3@d8c26c07 | §5 Ledger recording available through the approved shared conversation and document foundations | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | A-BP103; BP §6.2 | — |
| 3-§5-2 | C3@d8c26c07 | §5 text example 1: sale/income stated in text | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | NI-LDG4; A-BP103 | — |
| 3-§5-3 | C3@d8c26c07 | §5 text example 2: payment to supplier (expense) stated in text | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | NI-LDG4; A-BP103 | — |
| 3-§5-4 | C3@d8c26c07 | §5 text example 3: 'Shameer owes' (credit) stated in text | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| 3-§5-5 | C3@d8c26c07 | §5 text example 4: received against credit (repayment) stated in text | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| 3-§5-6 | C3@d8c26c07 | §5 same business facts spoken in English/Malayalam/Manglish through Basic Voice (Ledger semantics; modality built by SB-P-1.13) | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | NI-LDG4; A-BP103; I-13 (12-§4-1 FPDR-2 waits on this mission) | SB-P-1.13 FPDR-2 |
| 3-§5-7 | C3@d8c26c07 | §5 images/receipts/invoices via UDI capture→interpret→preview→clarify→confirm→validated Ledger update | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; D13; DAI; DR2 | NI-UDI (D-04); A-BP103 | — |
| 3-§5-8 | C3@d8c26c07 | §5 Excel/CSV/PDF bulk or structured input reuses UDI | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DAI | PART-IMP (D-04); A-BP103 | — |
| 3-§5-9 | C3@d8c26c07 | §5 no separate financial-import truth system | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 3-§5-10 | C3@d8c26c07 | §5 manual forms are a visual surface over the same Ledger truth and permission model | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (D-01, D-03); A-BP103 | — |
| 3-§6-1 | C3@d8c26c07 | §6 human-readable confirmation after a consequential write reflecting the state actually stored | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; A-BP103; I-13 (3-§6 DELEGATED to SB-P-1.14) | — |
| 3-§6-2 | C3@d8c26c07 | §6 confirmation shows, as relevant: event type | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; A-BP103 | — |
| 3-§6-3 | C3@d8c26c07 | §6 confirmation shows, as relevant: amount | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; A-BP103 | — |
| 3-§6-4 | C3@d8c26c07 | §6 confirmation shows, as relevant: party | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; A-BP103 | — |
| 3-§6-5 | C3@d8c26c07 | §6 confirmation shows, as relevant: date/time | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; A-BP103 | — |
| 3-§6-6 | C3@d8c26c07 | §6 confirmation shows, as relevant: payment method | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; A-BP103 | — |
| 3-§6-7 | C3@d8c26c07 | §6 confirmation shows, as relevant: purpose/description | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; A-BP103 | — |
| 3-§6-8 | C3@d8c26c07 | §6 confirmation shows, as relevant: credit/repayment linkage | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| 3-§6-9 | C3@d8c26c07 | §6 confirmation shows, as relevant: whether any information remains uncertain | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | NI-LDG4; A-BP103 | — |
| 3-§6-10 | C3@d8c26c07 | §6 a model-generated interpretation is not proof that storage succeeded | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§7-1 | C3@d8c26c07 | §7 smallest useful clarification when a consequential record is ambiguous | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | NI-LDG4; A-BP103; I-13 (3-§7 DELEGATED to SB-P-1.14) | — |
| 3-§7-2 | C3@d8c26c07 | §7 clarification case: unclear amount | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | NI-LDG4; A-BP103 | — |
| 3-§7-3 | C3@d8c26c07 | §7 clarification case: multiple plausible customers/suppliers | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | NI-LDG4; A-BP103 | — |
| 3-§7-4 | C3@d8c26c07 | §7 clarification case: unclear whether paid or still owed | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| 3-§7-5 | C3@d8c26c07 | §7 clarification case: uncertain transaction type | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | NI-LDG4; A-BP103 | — |
| 3-§7-6 | C3@d8c26c07 | §7 clarification case: ambiguous date | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | NI-LDG4; A-BP103 | — |
| 3-§7-7 | C3@d8c26c07 | §7 clarification case: conflicting document values | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | NI-LDG4; A-BP103 | — |
| 3-§7-8 | C3@d8c26c07 | §7 clarification case: plausible duplicate entry | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | NI-LDG4; A-BP103 | — |
| 3-§7-9 | C3@d8c26c07 | §7 must not fabricate missing facts to complete a transaction | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 3-§8-1 | C3@d8c26c07 | §8 correct mistakes conversationally | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | PART-LDG (correct_transaction, D-08); A-BP103 | — |
| 3-§8-2 | C3@d8c26c07 | §8 correct mistakes through the visual workspace | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (correct_transaction, D-08); A-BP103 | — |
| 3-§8-3 | C3@d8c26c07 | §8 correction kind: wrong amount | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (sale/purchase only, D-01); A-BP103 | — |
| 3-§8-4 | C3@d8c26c07 | §8 correction kind: wrong party | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (sale/purchase only, D-01); A-BP103 | — |
| 3-§8-5 | C3@d8c26c07 | §8 correction kind: wrong payment method | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (sale/purchase only, D-01); A-BP103 | — |
| 3-§8-6 | C3@d8c26c07 | §8 correction kind: wrong date | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (sale/purchase only, D-01); A-BP103 | — |
| 3-§8-7 | C3@d8c26c07 | §8 correction kind: wrong description | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (sale/purchase only, D-01); A-BP103 | — |
| 3-§8-8 | C3@d8c26c07 | §8 correction kind: incorrect credit/repayment association | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| 3-§8-9 | C3@d8c26c07 | §8 correction preserves: original record identity | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (transaction_correction_events, D-08); A-BP103 | — |
| 3-§8-10 | C3@d8c26c07 | §8 correction preserves: original values | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (transaction_correction_events, D-08); A-BP103 | — |
| 3-§8-11 | C3@d8c26c07 | §8 correction preserves: updated values | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (transaction_correction_events, D-08); A-BP103 | — |
| 3-§8-12 | C3@d8c26c07 | §8 correction preserves: actor | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (transaction_correction_events, D-08); A-BP103 | — |
| 3-§8-13 | C3@d8c26c07 | §8 correction preserves: time | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (transaction_correction_events, D-08); A-BP103 | — |
| 3-§8-14 | C3@d8c26c07 | §8 correction preserves: reason/context where required | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (transaction_correction_events, D-08); A-BP103 | — |
| 3-§8-15 | C3@d8c26c07 | §8 correction preserves: links to consequential downstream effects | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (transaction_correction_events, D-08); A-BP103 | — |
| 3-§8-16 | C3@d8c26c07 | §8 financial correction must not silently destroy prior truth | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG; D-08 (cascade risk); A-BP103 | — |
| 3-§9-1 | C3@d8c26c07 | §9 retrieve history by date or period | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-SRCH (D-09); A-BP103-S | — |
| 3-§9-2 | C3@d8c26c07 | §9 retrieve by customer or supplier — party/counterparty reference level | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-SRCH; A-BP103-S | — |
| 3-§9-3 | C3@d8c26c07 | §9 retrieve by customer or supplier — structured directory-indexed identity | OBL | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | ASSIGNED TO LATER MISSION | D17; D18 | A-BP103-S (SB-P-1.17 / SB-P-1.18) | — |
| 3-§9-4 | C3@d8c26c07 | §9 retrieve by category/purpose | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-SRCH; A-BP103-S | — |
| 3-§9-5 | C3@d8c26c07 | §9 retrieve by payment method | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-SRCH; A-BP103 | — |
| 3-§9-6 | C3@d8c26c07 | §9 retrieve by amount range where useful | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-SRCH; A-BP103 | — |
| 3-§9-7 | C3@d8c26c07 | §9 retrieve by credit/repayment state | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-SRCH; NI-LDG4; A-BP103-FRV (Scenario B 'retrieve correctly') | FDB-1 (open question; Stage 2 brief) |
| 3-§9-8 | C3@d8c26c07 | §9 retrieve by linked document | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB (D-06); A-BP103-S | — |
| 3-§9-9 | C3@d8c26c07 | §9 retrieve by product or stock relationship where available | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D17 | NI-SRCH; no transaction-product link exists (D-01); relationship matures under 7-§8 (SB-P-1.17) | — |
| 3-§9-10 | C3@d8c26c07 | §9 example: spend on bakery supplies last month (purpose + period) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; D13 | NI-SRCH; A-BP103-S | — |
| 3-§9-11 | C3@d8c26c07 | §9 example: payments to ABC Traders in August (counterparty + period) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; D13 | NI-SRCH; A-BP103-S | — |
| 3-§9-12 | C3@d8c26c07 | §9 example: what does Shameer still owe me (credit state by counterparty) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; D13 | NI-SRCH; NI-LDG4; A-BP103-S | FDB-1 (open question; Stage 2 brief) |
| 3-§9-13 | C3@d8c26c07 | §9 example: find the receipt for that mixer purchase (linked document) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; D13; DR2 | NI-CAB; A-BP103-S | — |
| 3-§9-14 | C3@d8c26c07 | §9 conversational and dashboard/report retrieval read the same underlying truth | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | A-BP103; BP §6.3 | — |
| 3-§10-1 | C3@d8c26c07 | §10 summaries and exports are permission-scoped | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-EXP (D-09); A-BP103 | — |
| 3-§10-2 | C3@d8c26c07 | §10 period summaries | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG (daily totals only, D-03); A-BP103 | — |
| 3-§10-3 | C3@d8c26c07 | §10 income/expense views | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-LDG4; A-BP103 | — |
| 3-§10-4 | C3@d8c26c07 | §10 customer/supplier views (counterparty-reference level; directory form follows 3-§9-3) | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-EXP; A-BP103-S | — |
| 3-§10-5 | C3@d8c26c07 | §10 credit/repayment views | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| 3-§10-6 | C3@d8c26c07 | §10 CSV export | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-EXP; A-BP103 | — |
| 3-§10-7 | C3@d8c26c07 | §10 Excel export | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-EXP; A-BP103 | — |
| 3-§10-8 | C3@d8c26c07 | §10 PDF export | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-EXP; A-BP103 | — |
| 3-§10-9 | C3@d8c26c07 | §10 exports consistent with source totals; no alternate financial truth | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 3-§11-1 | C3@d8c26c07 | §11 Owner: full authorized Ledger records, corrections and exports | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | owner-only RLS precedent (D-11); A-BP103 | — |
| 3-§11-2 | C3@d8c26c07 | §11 Manager: delegated access only; not automatically Owner access | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 3-§11-3 | C3@d8c26c07 | §11 Employee/Staff: add or view only permitted operational records | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 3-§11-4 | C3@d8c26c07 | §11 Staff do not receive Owner profit intelligence, Ask CFO or unrestricted analytics by default | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 3-§11-5 | C3@d8c26c07 | §11 Customer/Supplier/Delivery Staff: no general Ledger access | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 3-§11-6 | C3@d8c26c07 | §11 Customer/Supplier/Delivery participate only in specific minimum-information workflows | OBL | BUILD NOW | CORE-LM | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | ASSIGNED TO LATER MISSION | D16; D17; D18 | A-BP105; A-BP106; A-BP107 (the workflows); C21 §13 (SB-P-1.12) | — |
| 3-§11-7 | C3@d8c26c07 | §11 every record remains business-scoped | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | owner-only RLS precedent; A-BP103 | — |
| 3-§12-1 | C3@d8c26c07 | §12 consistent Ledger behaviour across WhatsApp | OBL | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 3-§12-2 | C3@d8c26c07 | §12 consistent Ledger behaviour across the Conversation Workspace | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | A-BP103; I-13 (3-§12 DELEGATED to SB-P-1.14) | — |
| 3-§12-3 | C3@d8c26c07 | §12 consistent Ledger behaviour across approved visual workspace flows | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG; A-BP103 | — |
| 3-§12-4 | C3@d8c26c07 | §12 channels have no separate transaction semantics, permissions or Business Memory | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§12-5 | C3@d8c26c07 | §12 WhatsApp outage does not make the Ledger unavailable through web or background services | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | no Meta dependency exists (D-14); final channel proof L-X20 | — |
| 3-§13-1 | C3@d8c26c07 | §13 Ask CFO reads authorized Ledger information | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 | — |
| 3-§13-2 | C3@d8c26c07 | §13 Ask CFO remains read-only intelligence | NEG | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 | — |
| 3-§13-3 | C3@d8c26c07 | §13 Ask CFO continuation into action passes through execution/confirmation service | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 | — |
| 3-§14-1 | C3@d8c26c07 | §14 Daily Intelligence consumes authorized Ledger events at 7:00 / 10:30 / 22:00 | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 | — |
| 3-§14-2 | C3@d8c26c07 | §14 Ledger is the business-memory source; Daily Intelligence is a clarity layer over it (no copy) | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | A-BP103; BP §6.3 | — |
| 3-§15-1 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Universal Document Intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | A-BP103 | — |
| 3-§15-2 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Human Language Layer | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | A-BP103; I-13 (9-§12-1 assigned here) | — |
| 3-§15-3 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Basic Voice / Voice Plus | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | A-BP103; Voice Plus SB-P-1.19 (A-BP108) | — |
| 3-§15-4 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Permission Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103; L-DEL12 | — |
| 3-§15-5 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Conversation Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | A-BP103; L-DEL13 | — |
| 3-§15-6 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Reminder Engine | RULE | BUILD NOW | CORE-LM | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | A-BP104 | — |
| 3-§15-7 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Customer/Supplier identity | RULE | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | ASSIGNED TO LATER MISSION | D17; D18 | A-BP103-S (SB-P-1.17 / SB-P-1.18) | — |
| 3-§15-8 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Credit Awareness | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP103-C; A-BP105 | — |
| 3-§15-9 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Payment Verification / Bank Reconciliation | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP105 | — |
| 3-§15-10 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Stock / Supplier / Reorder Intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106; opening-stock convergence is rowed at 5-§18-5 and 7-§6-2 | — |
| 3-§15-11 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: POS bridge where enabled | RULE | BUILD NOW | CORE-LM | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106 | — |
| 3-§15-12 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Smart Order & Delivery | RULE | BUILD NOW | CORE-LM | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 | — |
| 3-§15-13 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Staff / HR where authorized | RULE | BUILD NOW | CORE-LM | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 | — |
| 3-§16-1 | C3@d8c26c07 | §16 AI may: interpret natural-language business events | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | A-BP103; I-13 (3-§16 DELEGATED to SB-P-1.14) | — |
| 3-§16-2 | C3@d8c26c07 | §16 AI may: structure drafts | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | A-BP103; I-13 (3-§16 DELEGATED to SB-P-1.14) | — |
| 3-§16-3 | C3@d8c26c07 | §16 AI may: identify likely parties using authorized business context | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | A-BP103; I-13 (3-§16 DELEGATED to SB-P-1.14) | — |
| 3-§16-4 | C3@d8c26c07 | §16 AI may: ask clarification | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | A-BP103; I-13 (3-§16 DELEGATED to SB-P-1.14) | — |
| 3-§16-5 | C3@d8c26c07 | §16 AI may: summarize history | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | A-BP103; I-13 (3-§16 DELEGATED to SB-P-1.14) | — |
| 3-§16-6 | C3@d8c26c07 | §16 AI may: identify possible duplicate/conflicting input | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | A-BP103; I-13 (3-§16 DELEGATED to SB-P-1.14) | — |
| 3-§16-7 | C3@d8c26c07 | §16 AI may: explain what was recorded | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DAI | A-BP103; I-13 (3-§16 DELEGATED to SB-P-1.14) | — |
| 3-§16-8 | C3@d8c26c07 | §16 AI must not: invent amounts, parties or payment status | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§16-9 | C3@d8c26c07 | §16 AI must not: treat due date as proof of payment | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§16-10 | C3@d8c26c07 | §16 AI must not: guess among plausible payment matches | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§16-11 | C3@d8c26c07 | §16 AI must not: expose Owner intelligence to unauthorized users | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§16-12 | C3@d8c26c07 | §16 AI must not: silently overwrite financial history | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§16-13 | C3@d8c26c07 | §16 AI must not: create permission through inference | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§16-14 | C3@d8c26c07 | §16 AI must not: accuse users of wrongdoing from anomalous data | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 3-§17-1 | C3@d8c26c07 | §17 handle: duplicate submissions | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-2 | C3@d8c26c07 | §17 handle: network retry/idempotency | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-3 | C3@d8c26c07 | §17 handle: conflicting document data | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DAI | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-4 | C3@d8c26c07 | §17 handle: ambiguous identity | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-5 | C3@d8c26c07 | §17 handle: invalid amount/date | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-6 | C3@d8c26c07 | §17 handle: correction conflicts | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-7 | C3@d8c26c07 | §17 handle: failed downstream notification (notification delivery is SB-P-1.15) | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D15 | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-8 | C3@d8c26c07 | §17 handle: stale linked records | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-9 | C3@d8c26c07 | §17 handle: unauthorized write/read attempts | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-10 | C3@d8c26c07 | §17 handle: cross-business access attempts | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (D-07); A-BP103 | — |
| 3-§17-11 | C3@d8c26c07 | §17 an uncertain or failed write stops that write safely without blocking unrelated operations | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | A-BP103; C22 §19 | — |
| 3-§18-1 | C3@d8c26c07 | §18 strict business isolation | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 3-§18-2 | C3@d8c26c07 | §18 permission-scoped access | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 3-§18-3 | C3@d8c26c07 | §18 auditable consequential corrections | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG; A-BP103 | — |
| 3-§18-4 | C3@d8c26c07 | §18 purpose-limited support access | OBL | BUILD NOW | CORE-LM | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§23-4, 21-§14 IN SCOPE SB-P-1.12); support surfaces SB-P-1.19 | — |
| 3-§18-5 | C3@d8c26c07 | §18 no broad routine Super Admin visibility into merchant financial detail | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 3-§18-6 | C3@d8c26c07 | §18 no unsupported financial certainty claims | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 3-§19-1 | C3@d8c26c07 | §19 acceptance 1: text income/expense recording | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | NI-LDG4; A-BP103 | — |
| 3-§19-2 | C3@d8c26c07 | §19 acceptance 2: credit and repayment recording | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| 3-§19-3 | C3@d8c26c07 | §19 acceptance 3: voice-created Ledger event | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13; DTX | NI-LDG4; A-BP103 | SB-P-1.13 FPDR-2 |
| 3-§19-4 | C3@d8c26c07 | §19 acceptance 4: image/document-created draft with preview/confirmation | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DAI; DR2 | NI-UDI; A-BP103 | — |
| 3-§19-5 | C3@d8c26c07 | §19 acceptance 5: ambiguous-input clarification | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | NI-LDG4; A-BP103 | — |
| 3-§19-6 | C3@d8c26c07 | §19 acceptance 6: duplicate/retry protection | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM; A-BP103 | — |
| 3-§19-7 | C3@d8c26c07 | §19 acceptance 7: correction with durable audit history | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | PART-LDG; A-BP103 | — |
| 3-§19-8 | C3@d8c26c07 | §19 acceptance 8: period/party search | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-SRCH; A-BP103 | — |
| 3-§19-9 | C3@d8c26c07 | §19 acceptance 9: receipt/document retrieval linkage | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| 3-§19-10 | C3@d8c26c07 | §19 acceptance 10: permission-scoped staff contribution | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 3-§19-11 | C3@d8c26c07 | §19 acceptance 11: Owner-only financial intelligence boundary (Ledger slice; Ask CFO is SB-P-1.15) | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 3-§19-12 | C3@d8c26c07 | §19 acceptance 12: CSV/Excel/PDF export consistency | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | NI-EXP; A-BP103 | — |
| 3-§19-13a | C3@d8c26c07 | §19 acceptance 13 (Workspace slice): identical business semantics across channels | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | A-BP103; L-X20 | — |
| 3-§19-13b | C3@d8c26c07 | §19 acceptance 13 (WhatsApp slice): identical business semantics across channels | SCN | BUILD NOW | CORE-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 3-§19-14 | C3@d8c26c07 | §19 acceptance 14: cross-business isolation | SCN | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 3-§20-1 | C3@d8c26c07 | §20 non-goal: destructive correction that erases prior truth | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 3-§20-2 | C3@d8c26c07 | §20 non-goal: permanent two-type income/expense-only or sale/purchase-only scope | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 3-§20-3 | C3@d8c26c07 | §20 non-goal: unrestricted generated SQL against production | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 3-§20-4 | C3@d8c26c07 | §20 non-goal: employee access to Owner intelligence by default | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 3-§20-5 | C3@d8c26c07 | §20 non-goal: AI-autonomous financial decision authority | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 3-§20-6 | C3@d8c26c07 | §20 non-goal: historical provider/model/table names as product requirements | NEG | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 3-§21 | C3@d8c26c07 | §21 Historical Corrections Preserved | HIST | BUILD NOW | CORE-LM | SB-P-1.14 | NOT APPLICABLE | — | L-HIST | — |
| 3-§22-1 | C3@d8c26c07 | §22 reuse existing transaction, correction, inventory/catalog and audit foundations where aligned | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | PART-LDG; PRECEDENT-IDM; I-13 (3-§22 DELEGATED to SB-P-1.14) | — |
| 3-§22-2 | C3@d8c26c07 | §22 extend rather than destructively replace accepted integrity work unless an EIS proves replacement necessary and migration-safe | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | DTX | A-BP103 ('additive'); D-01, D-02 | — |
| 3-§23 | C3@d8c26c07 | §23 Completion Gate | GATE | BUILD NOW | CORE-LM | SB-P-1.14 | NOT APPLICABLE | — | L-GATE | — |

## B. Contract 5 — Universal Document & Receipt Intelligence (full mission-assigned contract)

153 rows: 137 `IN SCOPE`, 11 `ASSIGNED TO LATER MISSION`, 1 `DELEGATED`, 4 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 5-§1 | C5@80ac648e | §1 Feature Identity (Receipt Intelligence and Receipt Cabinet inside one shared foundation; carried by 22-§10-7) | NARR | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 5-§2-1 | C5@80ac648e | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 5-§2-2 | C5@80ac648e | §2 must not trade convenience for silent data corruption | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 5-§3-1 | C5@80ac648e | §3 canonical pattern for uncertain or consequential updates: document → interpret → preview → clarify → confirm → validated update | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DAI | NI-UDI (D-04); A-BP103; I-13 (5-§3 DELEGATED to SB-P-1.14) | — |
| 5-§3-2 | C5@80ac648e | §3 preview exposes important interpreted fields in human-readable form | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; PART-IMP (catalog preview only); A-BP103 | — |
| 5-§3-3 | C5@80ac648e | §3 insufficient confidence or conflicting fields → smallest useful clarification, not a guess | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§4-1 | C5@80ac648e | §4 supported input: camera/photo images | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI; DR2 | NI-UDI; A-BP103 | — |
| 5-§4-2 | C5@80ac648e | §4 supported input: uploaded images | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI; DR2 | NI-UDI; A-BP103 | — |
| 5-§4-3 | C5@80ac648e | §4 supported input: PDF documents | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI; DR2 | NI-UDI; A-BP103 | — |
| 5-§4-4 | C5@80ac648e | §4 supported input: Excel spreadsheets | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog XLSX, D-04); A-BP103 | — |
| 5-§4-5 | C5@80ac648e | §4 supported input: CSV files | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog CSV, D-04); A-BP103 | — |
| 5-§4-6 | C5@80ac648e | §4 supported input: receipts | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§4-7 | C5@80ac648e | §4 supported input: purchase/sales invoices | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§4-8 | C5@80ac648e | §4 supported input: handwritten or partially handwritten documents where technically interpretable | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§4-9 | C5@80ac648e | §4 supported input: opening-stock documents | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP; A-BP103 ('opening-stock/import convergence into UDI'); GPCV §11 | — |
| 5-§4-10 | C5@80ac648e | §4 supported input: other stock documents (stock lists) | OBL | BUILD NOW | CORE-FDN | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106; C7 §6; I-12 (7-§6 'SB-P-1.17/SB-P-1.14') | — |
| 5-§4-11 | C5@80ac648e | §4 supported input: roster/attendance-related documents | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; C6 §6 | — |
| 5-§4-12 | C5@80ac648e | §4 supported input: customer/order lists | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; C1 §6, §8 | — |
| 5-§4-13 | C5@80ac648e | §4 supported input: compliance/licence documents | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; C16 §5 | — |
| 5-§4-14 | C5@80ac648e | §4 parser/provider/file-size choice belongs to implementation, not Product Truth | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103 | — |
| 5-§5-1 | C5@80ac648e | §5 receipt/bill/invoice field: merchant/supplier/customer identity where present | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-2 | C5@80ac648e | §5 receipt/bill/invoice field: date | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-3 | C5@80ac648e | §5 receipt/bill/invoice field: total amount | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-4 | C5@80ac648e | §5 receipt/bill/invoice field: tax where available | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-5 | C5@80ac648e | §5 receipt/bill/invoice field: line items where reliably extractable | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-6 | C5@80ac648e | §5 receipt/bill/invoice field: payment information where present | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-7 | C5@80ac648e | §5 receipt/bill/invoice field: document number/reference | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-8 | C5@80ac648e | §5 receipt/bill/invoice field: other business-relevant fields | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§5-9 | C5@80ac648e | §5 missing or unclear information surfaced, not invented | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | L-NEG; A-BP103 | — |
| 5-§6-1 | C5@80ac648e | §6 originals retained according to approved storage/retention policy | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; DLEG; DUF6 | NI-STO (D-06); A-BP103 | FDB-2 (open question; Stage 2 brief) |
| 5-§6-2 | C5@80ac648e | §6 originals linked to the relevant business records | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-CAB; A-BP103 | — |
| 5-§6-3 | C5@80ac648e | §6 retrieval by conversational search | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; D13; DR2 | NI-CAB; A-BP103 | — |
| 5-§6-4 | C5@80ac648e | §6 retrieval by visual search | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103; 17-§12 inherited | — |
| 5-§6-5 | C5@80ac648e | §6 retrieve documents by: date/period | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| 5-§6-6 | C5@80ac648e | §6 retrieve documents by: party | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| 5-§6-7 | C5@80ac648e | §6 retrieve documents by: amount | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| 5-§6-8 | C5@80ac648e | §6 retrieve documents by: document type | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| 5-§6-9 | C5@80ac648e | §6 retrieve documents by: linked transaction record | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| 5-§6-10 | C5@80ac648e | §6 retrieve documents by: linked order record | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 | — |
| 5-§6-11 | C5@80ac648e | §6 retrieve documents by: linked inventory record (opening-stock slice here; other stock links SB-P-1.17) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2; D17 | NI-CAB; A-BP103 | — |
| 5-§6-12 | C5@80ac648e | §6 retrieve documents by: linked compliance record | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107 | — |
| 5-§6-13 | C5@80ac648e | §6 historical fixed storage-migration dates are not product requirements | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 5-§7-1 | C5@80ac648e | §7 UDI shared by feature families rather than duplicated | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (two parser stacks, D-04); A-BP103 | — |
| 5-§7-2 | C5@80ac648e | §7 example: Ledger receipt → preview → Ledger update | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DAI; DTX; DR2 | NI-UDI; A-BP103 | — |
| 5-§7-3 | C5@80ac648e | §7 example: opening-stock spreadsheet → preview → inventory update | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP; A-BP103; GPCV §11 | — |
| 5-§7-4 | C5@80ac648e | §7 example: supplier invoice → purchase/stock/ledger preparation (Ledger purchase here; stock side SB-P-1.17) | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DAI; D17 | NI-UDI; A-BP103; A-BP106 | — |
| 5-§7-5 | C5@80ac648e | §7 example: employee roster photo/PDF → HR draft | SCN | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; C6 §6 | — |
| 5-§7-6 | C5@80ac648e | §7 example: customer/order sheet → order draft | SCN | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; C1 §8 | — |
| 5-§7-7 | C5@80ac648e | §7 example: licence document → Compliance Shield record/reminder preparation | SCN | BUILD NOW | CORE-FDN | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; C16 §5 | — |
| 5-§7-8 | C5@80ac648e | §7 each destination feature remains responsible for its own permission, validation and write rules | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103; BP §6.2 | — |
| 5-§8-1 | C5@80ac648e | §8 document intake through WhatsApp | OBL | BUILD NOW | CORE-FDN | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109; L-X20 | — |
| 5-§8-2 | C5@80ac648e | §8 document intake through the Conversation Workspace | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | A-BP103; I-13 (5-§8 DELEGATED; EIS13-ATT-01 handoff) | — |
| 5-§8-3 | C5@80ac648e | §8 document intake through visual upload/import surfaces | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP; A-BP103 | — |
| 5-§8-4 | C5@80ac648e | §8 same document not interpreted under materially different rules because of channel (Workspace/visual slice; WhatsApp slice SB-P-1.20) | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103; L-X20 | — |
| 5-§9-1 | C5@80ac648e | §9 preview makes consequential interpretation understandable before commit | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | PART-IMP (catalog preview); A-BP103 | — |
| 5-§9-2 | C5@80ac648e | §9 preview may show: recognized document type | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§9-3 | C5@80ac648e | §9 preview may show: key fields | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§9-4 | C5@80ac648e | §9 preview may show: line items | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§9-5 | C5@80ac648e | §9 preview may show: destination feature/record | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§9-6 | C5@80ac648e | §9 preview may show: fields requiring confirmation | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§9-7 | C5@80ac648e | §9 preview may show: possible duplicates | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§9-8 | C5@80ac648e | §9 preview may show: warnings about unreadable/unsupported content | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§9-9 | C5@80ac648e | §9 confirmation applies to the proposed business update, not merely to file upload | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103-FRV (Scenario A); EIS-CNF-01 | — |
| 5-§10-1 | C5@80ac648e | §10 clarify or safely reject when the document is unreadable | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-2 | C5@80ac648e | §10 clarify or safely reject when two plausible parties match | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-3 | C5@80ac648e | §10 clarify or safely reject when totals conflict | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-4 | C5@80ac648e | §10 clarify or safely reject when line items cannot be interpreted reliably | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-5 | C5@80ac648e | §10 clarify or safely reject when a spreadsheet schema is unknown | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-6 | C5@80ac648e | §10 clarify or safely reject when required fields are missing | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-7 | C5@80ac648e | §10 clarify or safely reject when a duplicate import is possible | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-8 | C5@80ac648e | §10 clarify or safely reject when the document appears unrelated to the current business task | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-9 | C5@80ac648e | §10 clarify or safely reject when the user lacks permission for the destination action | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP (catalog NEEDS_CORRECTION / POSSIBLE_MATCH, D-04); A-BP103 | — |
| 5-§10-10 | C5@80ac648e | §10 an uncertain document write stops safely without blocking unrelated operations | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103; C22 §19 | — |
| 5-§11-1 | C5@80ac648e | §11 no duplicate business event when the same file is uploaded again | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (no file-content dedupe on import batches, D-07); A-BP103 | — |
| 5-§11-2 | C5@80ac648e | §11 no duplicate business event on network retry | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM; A-BP103 | — |
| 5-§11-3 | C5@80ac648e | §11 no duplicate business event on parser job replay | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (parser lease, D-07); A-BP103 | — |
| 5-§11-4 | C5@80ac648e | §11 no duplicate business event when the same document arrives through another supported channel (Workspace/visual here; WhatsApp SB-P-1.20) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; D13; D20 | PRECEDENT-IDM; A-BP103; L-X20 | — |
| 5-§11-5 | C5@80ac648e | §11 EIS defines practical fingerprint/idempotency behaviour per destination workflow | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103 ('reuse of canonical ... idempotency foundations') | — |
| 5-§12-1 | C5@80ac648e | §12 document visibility and actions are role-scoped | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 5-§12-2 | C5@80ac648e | §12 Owner: business documents and destination workflows within Owner authority | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 5-§12-3 | C5@80ac648e | §12 Manager: operational documents only where delegated | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 5-§12-4 | C5@80ac648e | §12 Employee: upload/use documents only for permitted operational tasks | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103; C21 §4, §11 | — |
| 5-§12-5 | C5@80ac648e | §12 Employee gains no Owner financial intelligence through document access | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 5-§12-6 | C5@80ac648e | §12 Support/Super Admin: no routine broad access to merchant documents | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 5-§12-7 | C5@80ac648e | §12 account-specific support access purpose-limited, authorized and auditable | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (21-§14 IN SCOPE SB-P-1.12; EIS-SUP-01); C19 §15 (SB-P-1.19) | — |
| 5-§13-1 | C5@80ac648e | §13 AI may: classify document type | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DAI | NI-UDI; A-BP103 | — |
| 5-§13-2 | C5@80ac648e | §13 AI may: extract candidate fields | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DAI | NI-UDI; A-BP103 | — |
| 5-§13-3 | C5@80ac648e | §13 AI may: normalize text/units where safe | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DAI | NI-UDI; A-BP103 | — |
| 5-§13-4 | C5@80ac648e | §13 AI may: identify likely linked business records | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DAI | NI-UDI; A-BP103 | — |
| 5-§13-5 | C5@80ac648e | §13 AI may: flag conflicts/duplicates | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DAI | NI-UDI; A-BP103 | — |
| 5-§13-6 | C5@80ac648e | §13 AI may: prepare a human-readable preview | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DAI | NI-UDI; A-BP103 | — |
| 5-§13-7 | C5@80ac648e | §13 AI may: ask clarification | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DAI | NI-UDI; A-BP103 | — |
| 5-§13-8 | C5@80ac648e | §13 AI must not: invent missing values | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 5-§13-9 | C5@80ac648e | §13 AI must not: silently resolve material conflicts | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 5-§13-10 | C5@80ac648e | §13 AI must not: write consequential records from ambiguous documents | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 5-§13-11 | C5@80ac648e | §13 AI must not: expose document contents across businesses/roles | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 5-§13-12 | C5@80ac648e | §13 AI must not: claim unsupported legal/compliance validity | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | L-NEG; A-BP103 | — |
| 5-§14-1 | C5@80ac648e | §14 handle imperfect documents where technically possible: folds | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§14-2 | C5@80ac648e | §14 handle imperfect documents where technically possible: shadows | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§14-3 | C5@80ac648e | §14 handle imperfect documents where technically possible: stamps | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§14-4 | C5@80ac648e | §14 handle imperfect documents where technically possible: skew | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§14-5 | C5@80ac648e | §14 handle imperfect documents where technically possible: photographed paper | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§14-6 | C5@80ac648e | §14 handle imperfect documents where technically possible: mixed printed/handwritten content | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§14-7 | C5@80ac648e | §14 handle imperfect documents where technically possible: low-quality scans | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§14-8 | C5@80ac648e | §14 no fixed or absolute OCR accuracy promise is Product Truth | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 5-§15-1 | C5@80ac648e | §15 preserve concept: business-scoped original file identity | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-2 | C5@80ac648e | §15 preserve concept: uploader/actor | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-3 | C5@80ac648e | §15 preserve concept: upload timestamp | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-4 | C5@80ac648e | §15 preserve concept: parser/interpretation result | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-5 | C5@80ac648e | §15 preserve concept: preview state | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-6 | C5@80ac648e | §15 preserve concept: confirmation/rejection state | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-7 | C5@80ac648e | §15 preserve concept: destination linkage | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-8 | C5@80ac648e | §15 preserve concept: idempotency/duplicate handling | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-9 | C5@80ac648e | §15 preserve concept: errors/exceptions | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-10 | C5@80ac648e | §15 preserve concept: audit trail for consequential updates | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); PART-IMP (catalog batch/row status); A-BP103 | — |
| 5-§15-11 | C5@80ac648e | §15 exact table/service names belong to EIS design | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103 | — |
| 5-§16-1 | C5@80ac648e | §16 strict business isolation | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 5-§16-2 | C5@80ac648e | §16 secure storage/access | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO; A-BP103; EIS-ISO-05 | — |
| 5-§16-3 | C5@80ac648e | §16 minimum necessary retention | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DLEG | NI-STO; A-BP103 | FDB-2 (open question; Stage 2 brief) |
| 5-§16-4 | C5@80ac648e | §16 malware/content-type/size validation as appropriate | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog content-type, limits, macro rejection, D-04); A-BP103 | — |
| 5-§16-5 | C5@80ac648e | §16 least-privilege parser access | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (parser lease, Roles Anywhere, D-05); A-BP103 | — |
| 5-§16-6 | C5@80ac648e | §16 no cross-business retrieval | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 5-§16-7 | C5@80ac648e | §16 no silent use of merchant documents for unrelated purposes | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | L-NEG; A-BP103 | — |
| 5-§17-1 | C5@80ac648e | §17 recoverable state for: unsupported type | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-2 | C5@80ac648e | §17 recoverable state for: corrupted file | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-3 | C5@80ac648e | §17 recoverable state for: parser timeout/failure | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-4 | C5@80ac648e | §17 recoverable state for: partial extraction | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-5 | C5@80ac648e | §17 recoverable state for: duplicate import | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-6 | C5@80ac648e | §17 recoverable state for: destination-write failure | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DTX | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-7 | C5@80ac648e | §17 recoverable state for: expired preview | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-8 | C5@80ac648e | §17 recoverable state for: permission failure | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-9 | C5@80ac648e | §17 recoverable state for: storage failure | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-10 | C5@80ac648e | §17 recoverable state for: retry/replay | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP (catalog error codes, parser lease states, D-04, D-05); A-BP103 | — |
| 5-§17-11 | C5@80ac648e | §17 parser failure must not create partially trusted production records | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 5-§18-1 | C5@80ac648e | §18 acceptance 1: receipt photo → preview → confirmed Ledger update | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DAI; DTX; DR2 | NI-UDI; A-BP103 | — |
| 5-§18-2 | C5@80ac648e | §18 acceptance 2: ambiguous receipt requires clarification | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| 5-§18-3 | C5@80ac648e | §18 acceptance 3: PDF invoice interpretation | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI; DR2 | NI-UDI; A-BP103 | — |
| 5-§18-4 | C5@80ac648e | §18 acceptance 4: Excel/CSV preview before consequential import | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP; A-BP103 | — |
| 5-§18-5 | C5@80ac648e | §18 acceptance 5: opening-stock import into shared inventory foundation | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP; GPCV §11; A-BP103 | — |
| 5-§18-6 | C5@80ac648e | §18 acceptance 6: duplicate upload/retry protection | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM; A-BP103 | — |
| 5-§18-7 | C5@80ac648e | §18 acceptance 7: original document retrieval from linked business record | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| 5-§18-8a | C5@80ac648e | §18 acceptance 8 (Workspace slice): WhatsApp and Workspace use the same interpretation rules | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | A-BP103; L-X20 | — |
| 5-§18-8b | C5@80ac648e | §18 acceptance 8 (WhatsApp slice): WhatsApp and Workspace use the same interpretation rules | SCN | BUILD NOW | CORE-FDN | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 5-§18-9 | C5@80ac648e | §18 acceptance 9: permission-scoped staff upload | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 5-§18-10 | C5@80ac648e | §18 acceptance 10: cross-business isolation | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 5-§18-11 | C5@80ac648e | §18 acceptance 11: parser failure with no silent partial write | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP; A-BP103 | — |
| 5-§19-1 | C5@80ac648e | §19 non-goal: direct OCR-to-production write where material uncertainty exists | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 5-§19-2 | C5@80ac648e | §19 non-goal: duplicated parser systems per feature without architectural need | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; D-04 (two existing parser stacks; no third) | — |
| 5-§19-3 | C5@80ac648e | §19 non-goal: fixed historical provider/model choices as Product Truth | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 5-§19-4 | C5@80ac648e | §19 non-goal: unsupported 99%+ accuracy claims | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 5-§19-5 | C5@80ac648e | §19 non-goal: historical automatic 180-day purge as current default retention | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 5-§20 | C5@80ac648e | §20 Dependencies (Permission Engine, storage, parser infrastructure, Human Language, destination services, channel intake) | DEP | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-DEP; carried by dependency codes D12, DR2, DAI, D13 and destination-mission codes | — |
| 5-§21 | C5@80ac648e | §21 Completion Gate | GATE | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-GATE | — |

## C. Contract 22 — Shared Product Foundations (every section represented; SB-P-1.14 obligations expanded)

120 rows: 61 `IN SCOPE`, 8 `ASSIGNED TO LATER MISSION`, 42 `DELEGATED`, 9 `NOT APPLICABLE`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 22-§1 | C22@61e1bb91 | §1 Feature Identity | NARR | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 22-§2 | C22@61e1bb91 | §2 Founder Problem Statement | NARR | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 22-§3 | C22@61e1bb91 | §3 Lighthouse Principles | PRIN | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | L-NARR; realized by 22-§28-* and 22-§29-* | — |
| 22-§4-1 | C22@61e1bb91 | §4 one authoritative business-memory model across approved features/channels | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12 | I-12 (22-§4 ASSIGNED SB-P-1.14); I-13 (22-§4-1 ASSIGNED SB-P-1.14); A-BP103 | — |
| 22-§4-2 | C22@61e1bb91 | §4 Business Memory links domain facts such as those listed (illustrative; this mission delivers Ledger events and documents) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12 | L-ILL; I-12; A-BP103 | — |
| 22-§4-3 | C22@61e1bb91 | §4 a feature may own its domain model while contributing to one connected Business Memory | RULE | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | I-12; A-BP103 | — |
| 22-§4-4 | C22@61e1bb91 | §4 no second truth because a new UI/channel is introduced | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-13 (22-§4-2 IN SCOPE SB-P-1.13, re-checked here) | — |
| 22-§5 | C22@61e1bb91 | §5 Identity Foundation (whole section; consumed for actor and counterparty linkage; matching clarifies before consequential linking) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§5-1 to -9 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-1 | C22@61e1bb91 | §6 one permission/isolation model covers UI/workspace | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-1 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-2 | C22@61e1bb91 | §6 one permission/isolation model covers WhatsApp | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-2 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-3 | C22@61e1bb91 | §6 one permission/isolation model covers Conversation Workspace | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-3 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-4 | C22@61e1bb91 | §6 one permission/isolation model covers server functions/APIs | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-4 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-5 | C22@61e1bb91 | §6 one permission/isolation model covers database/RLS | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-5 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-6 | C22@61e1bb91 | §6 one permission/isolation model covers background jobs | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-6 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-7 | C22@61e1bb91 | §6 one permission/isolation model covers integrations | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-7 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-8 | C22@61e1bb91 | §6 one permission/isolation model covers exports/files (incl. stored documents; EIS-ISO-05) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-8 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-9 | C22@61e1bb91 | §6 one permission/isolation model covers AI tools (incl. UDI interpretation) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-9 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§6-10 | C22@61e1bb91 | §6 feature-specific permissions extend but never bypass the model | NEG | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§6-10 IN SCOPE SB-P-1.12); EIS-DEP-01; L-DEL12 | — |
| 22-§7 | C22@61e1bb91 | §7 Conversation / Intent-Action Foundation (whole section; document actions dispatch through the same confirmation/action model) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | I-13 (22-§7-1 to -10 IN SCOPE SB-P-1.13); L-DEL13 | — |
| 22-§8 | C22@61e1bb91 | §8 Human Language Foundation (whole section; document text normalization reuses it) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | I-13 (22-§8-1 to -7 IN SCOPE SB-P-1.13); L-DEL13 | — |
| 22-§9-1 | C22@61e1bb91 | §9 one shared document-intelligence pipeline supports feature-specific document types through domain adapters | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DAI | PART-IMP (D-04); I-12 (22-§9 ASSIGNED SB-P-1.14); I-13; A-BP103 | — |
| 22-§9-2 | C22@61e1bb91 | §9 core pattern capture/upload → interpret → preview → clarify → confirm → validated domain update | RULE | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DAI | NI-UDI; I-12; A-BP103 | — |
| 22-§9-3 | C22@61e1bb91 | §9 feature modules do not build separate OCR/file parsers because their target record differs | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; D-04; I-12; A-BP103 | — |
| 22-§10-1 | C22@61e1bb91 | §10 original/relevant business documents use a shared secure storage/retrieval model | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO (D-06); I-12 (22-§10 ASSIGNED SB-P-1.14); A-BP103 | — |
| 22-§10-2 | C22@61e1bb91 | §10 shared document memory carries: business/actor/source linkage | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; I-12; A-BP103 | — |
| 22-§10-3 | C22@61e1bb91 | §10 shared document memory carries: document identity/version | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; I-12; A-BP103 | — |
| 22-§10-4 | C22@61e1bb91 | §10 shared document memory carries: permission-scoped retrieval | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; I-12; A-BP103 | — |
| 22-§10-5 | C22@61e1bb91 | §10 shared document memory carries: retention/privacy | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DR2; DLEG | NI-CAB; I-12; A-BP103 | FDB-2 (open question; Stage 2 brief) |
| 22-§10-6 | C22@61e1bb91 | §10 shared document memory carries: links to resulting business records | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; I-12; A-BP103 | — |
| 22-§10-7 | C22@61e1bb91 | §10 Receipt Cabinet is a named capability inside shared document memory, not a duplicate storage universe | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12; A-BP103 | — |
| 22-§11 | C22@61e1bb91 | §11 Reminder / Delegated Automation Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12; A-BP104 | — |
| 22-§12 | C22@61e1bb91 | §12 Notification Foundation (whole section) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12 (22-§12-1 to -9); A-FPDR12-1 | — |
| 22-§13-1 | C22@61e1bb91 | §13 clarify uncertain identity/intent before consequential write | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-1 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-2 | C22@61e1bb91 | §13 preview uncertain/material document import (realized for documents by 5-§9-* here) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-2 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-3 | C22@61e1bb91 | §13 bind confirmation to exact actor/action/state/object | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-3 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-4 | C22@61e1bb91 | §13 revalidate permission/state at execution | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-4 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§13-5 | C22@61e1bb91 | §13 generic/stale Yes is not unlimited authority | NEG | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§13-5 IN SCOPE SB-P-1.12); EIS-CNF-01 to -03; L-DEL12 | — |
| 22-§14 | C22@61e1bb91 | §14 Audit / Human Context Foundation (whole section; document provenance realized by 5-§15-*, 25-§23-*) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§14-1 to -9 IN SCOPE SB-P-1.12); EIS-AUD-04; L-DEL12 | — |
| 22-§15 | C22@61e1bb91 | §15 Idempotency / Duplicate Protection (single rule; document imports and Ledger writes realized by 5-§11-*, 25-§14-*) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§15 IN SCOPE SB-P-1.12); EIS-CNF-04; L-DEL12 | — |
| 22-§16 | C22@61e1bb91 | §16 Location Foundation | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | SB-P-1.14 captures no location; owners SB-P-1.12 and SB-P-1.18 per I-12 | — |
| 22-§17-1 | C22@61e1bb91 | §17 standardize core behaviour; customize/integrate at the edge | RULE | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | I-13 (22-§17 IN SCOPE SB-P-1.13 for AI/voice); A-BP103 | — |
| 22-§17-2 | C22@61e1bb91 | §17 adapter pattern: POS | RULE | BUILD NOW | CORE-ARCH | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | A-BP106 | — |
| 22-§17-3 | C22@61e1bb91 | §17 adapter pattern: payment/bank providers | RULE | BUILD NOW | CORE-ARCH | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP105 | — |
| 22-§17-4 | C22@61e1bb91 | §17 adapter pattern: WhatsApp | RULE | BUILD NOW | CORE-ARCH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109 | — |
| 22-§17-5 | C22@61e1bb91 | §17 adapter pattern: OpenAI/model services | RULE | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | I-13 (22-§17 IN SCOPE SB-P-1.13); L-DEL13 | — |
| 22-§17-6 | C22@61e1bb91 | §17 adapter pattern: billing providers | RULE | BUILD NOW | CORE-ARCH | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108 | — |
| 22-§17-7 | C22@61e1bb91 | §17 adapter pattern: storage/document services | RULE | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103; BP §5.4 | — |
| 22-§17-8 | C22@61e1bb91 | §17 adapter pattern: future external systems | RULE | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | no future external system is in this mission's scope | — |
| 22-§17-9 | C22@61e1bb91 | §17 custom client-specific modifications inside core rejected | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 22-§18 | C22@61e1bb91 | §18 Scheduler / Background Job Foundation (whole section; this mission's retention/cleanup and reconciliation jobs consume it, DC-15) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12; A-BP104 | — |
| 22-§19-1 | C22@61e1bb91 | §19 document/storage/Ledger error behaviour supports clear failure reason | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | PART-IMP (sanitized error boundary, D-04); A-BP103 | — |
| 22-§19-2 | C22@61e1bb91 | §19 document/storage/Ledger error behaviour supports safe retry/recovery | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DR2 | PART-IMP (sanitized error boundary, D-04); A-BP103 | — |
| 22-§19-3 | C22@61e1bb91 | §19 document/storage/Ledger error behaviour supports no false success | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | PART-IMP (sanitized error boundary, D-04); A-BP103 | — |
| 22-§19-4 | C22@61e1bb91 | §19 document/storage/Ledger error behaviour supports preserved user input/evidence where appropriate | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | PART-IMP (sanitized error boundary, D-04); A-BP103 | — |
| 22-§19-5 | C22@61e1bb91 | §19 document/storage/Ledger error behaviour supports operational observability | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | PART-IMP (sanitized error boundary, D-04); A-BP103 | — |
| 22-§19-6 | C22@61e1bb91 | §19 document/storage/Ledger error behaviour supports narrow containment | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DR2 | PART-IMP (sanitized error boundary, D-04); A-BP103 | — |
| 22-§19-7 | C22@61e1bb91 | §19 one failing provider/module (storage, parser, AI interpretation) does not freeze Smart Business globally | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DR2; DAI | A-BP103 | — |
| 22-§20 | C22@61e1bb91 | §20 Data / Schema Stability Principle (whole section; four-state widening and document schema evolve by governed migration) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§20-1 to -4 IN SCOPE SB-P-1.12); L-DEL12; docs/migration/README.md default-deny | — |
| 22-§21 | C22@61e1bb91 | §21 Performance: responsive retrieval/recording (sub-3-second where technically reasonable) without weakening authorization, correctness, confirmation, privacy or audit (single rule) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DR2 | A-BP103 | — |
| 22-§22-1 | C22@61e1bb91 | §22 platform quality: stable identifiers/test hooks for critical Ledger and document flows | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | no Ledger/transaction tests exist (D-13); A-BP103 | — |
| 22-§22-2 | C22@61e1bb91 | §22 platform quality: deterministic tests for financial/permission rules | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | no Ledger/transaction tests exist (D-13); A-BP103 | — |
| 22-§22-3 | C22@61e1bb91 | §22 platform quality: integration failure tests (storage, parser, AI interpretation) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | no Ledger/transaction tests exist (D-13); A-BP103 | — |
| 22-§22-4 | C22@61e1bb91 | §22 platform quality: runtime verification | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | no Ledger/transaction tests exist (D-13); A-BP103 | — |
| 22-§22-5 | C22@61e1bb91 | §22 platform quality: independent verification before acceptance | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | no Ledger/transaction tests exist (D-13); A-BP103 | — |
| 22-§22-6 | C22@61e1bb91 | §22 green CI alone is not feature acceptance | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; Phase 1 guide §8 | — |
| 22-§23-1 | C22@61e1bb91 | §23 merchant data belongs to merchant | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§23-1 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§23-2 | C22@61e1bb91 | §23 no cross-business leakage (Ledger, documents, stored media) | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 22-§23-3 | C22@61e1bb91 | §23 no routine platform access to merchant private documents/financial detail | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 22-§23-4 | C22@61e1bb91 | §23 support access is purpose-limited | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§23-4 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§23-5 | C22@61e1bb91 | §23 staff data role/purpose limited (document visibility) | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12 | L-NEG; A-BP103 | — |
| 22-§23-6 | C22@61e1bb91 | §23 individual merchant data not sold | NEG | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§23-6 IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§23-7 | C22@61e1bb91 | §23 aggregate insight privacy-respecting and governed (storage capacity/cost metrics) | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; 25-§26-14 | — |
| 22-§24 | C22@61e1bb91 | §24 AI Authority Foundation (whole section; UDI-specific must-nots realized by 5-§13-*) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | I-13 (22-§24-1 to -3 IN SCOPE SB-P-1.13); L-DEL13 | — |
| 22-§25 | C22@61e1bb91 | §25 AI Orchestration / OpenAI Intelligence Foundation (names Contract 24; UDI consumes it) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13; DAI | I-13 (22-§25 DELEGATED); inherited 24-* rows in Part E | — |
| 22-§26 | C22@61e1bb91 | §26 Dedicated Channel Adapter Contracts (names Contract 23) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.20 | DELEGATED | D20 | I-12, I-13 (22-§26 DELEGATED, SB-P-1.20) | — |
| 22-§27-1 | C22@61e1bb91 | §27 mission/EIS states which mature feature(s) it advances | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-2 | C22@61e1bb91 | §27 mission/EIS states which shared foundations it reuses | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-3 | C22@61e1bb91 | §27 mission/EIS states whether it consumes AI orchestration and/or a channel adapter | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-4 | C22@61e1bb91 | §27 mission/EIS states what already exists and must not be duplicated | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-5 | C22@61e1bb91 | §27 mission/EIS states what remains committed but outside the mission | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-6 | C22@61e1bb91 | §27 mission/EIS states exact blockers/dependencies | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-7 | C22@61e1bb91 | §27 mission/EIS states required evidence for acceptance | OBL | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; completed at Blueprint/EIS | — |
| 22-§27-8 | C22@61e1bb91 | §27 a narrow mission cannot demote unimplemented scope to Build Later by convenience | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; Source 18 §3.2 item 5 | — |
| 22-§28-1 | C22@61e1bb91 | §28 non-goal: duplicate Business Memory by channel | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-2 | C22@61e1bb91 | §28 non-goal: duplicate Permission Engine per feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-3 | C22@61e1bb91 | §28 non-goal: duplicate AI brain/orchestrator per channel or feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-4 | C22@61e1bb91 | §28 non-goal: duplicate reminder scheduler per feature | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-5 | C22@61e1bb91 | §28 non-goal: duplicate OCR/document pipeline | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable); D-04, D-05 | — |
| 22-§28-6 | C22@61e1bb91 | §28 non-goal: duplicate customer/supplier identity silos | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-7 | C22@61e1bb91 | §28 non-goal: continuous employee GPS foundation | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-8 | C22@61e1bb91 | §28 non-goal: subscription-driven create/drop of core domain tables | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-9 | C22@61e1bb91 | §28 non-goal: AI/tool capability treated as authority | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§28-10 | C22@61e1bb91 | §28 non-goal: custom client-specific core forks | NEG | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12, I-13 (re-checked for this mission's deliverable) | — |
| 22-§29-1 | C22@61e1bb91 | §29 acceptance 1: WhatsApp and Workspace use one Business Memory/action truth | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13; D20 | I-13 (22-§29-1 IN SCOPE SB-P-1.13, D14); this mission supplies the Business Memory | — |
| 22-§29-2 | C22@61e1bb91 | §29 acceptance 2: WhatsApp and Workspace share one permission-aware AI orchestration path | SCN | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | I-13 (22-§29-2 IN SCOPE SB-P-1.13) | — |
| 22-§29-3 | C22@61e1bb91 | §29 acceptance 3: cross-business access blocked consistently (Ledger, document, storage and UDI slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12 | I-12 (services slice SB-P-1.12); I-13 (channel/AI slice SB-P-1.13); A-BP103 | — |
| 22-§29-4 | C22@61e1bb91 | §29 acceptance 4: multiple features reuse one Reminder Engine | SCN | BUILD NOW | CORE-ARCH | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-12; A-BP104 | — |
| 22-§29-5 | C22@61e1bb91 | §29 acceptance 5: multiple document types reuse one UDI pipeline with domain adapters | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DAI | I-12 (22-§29-5 ASSIGNED SB-P-1.14); I-13; A-BP103 | — |
| 22-§29-6 | C22@61e1bb91 | §29 acceptance 6: customer/supplier identity not duplicated by channel/feature | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§29-7 | C22@61e1bb91 | §29 acceptance 7: consequential confirmation exact and revalidated at execution (document and Ledger slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DTX | I-12 (kernel SB-P-1.12); A-BP103-FRV (Scenario A) | — |
| 22-§29-8 | C22@61e1bb91 | §29 acceptance 8: duplicate external/retry events idempotent (upload, import, parser replay and Ledger-write slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM; I-12 (pattern SB-P-1.12); A-BP103 | — |
| 22-§29-9 | C22@61e1bb91 | §29 acceptance 9: attendance/delivery location uses a purpose-limited primitive | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | SB-P-1.14 captures no location; I-12 (ASSIGNED SB-P-1.18) | — |
| 22-§29-10 | C22@61e1bb91 | §29 acceptance 10: feature/provider failure narrowly contained (storage, parser and UDI slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DR2; DAI | A-BP103 | — |
| 22-§29-11 | C22@61e1bb91 | §29 acceptance 11: subscription changes do not destroy core schema/history | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (IN SCOPE SB-P-1.12); L-DEL12 | — |
| 22-§29-12 | C22@61e1bb91 | §29 acceptance 12: audit retains raw evidence plus authorized human context (original documents and corrections) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | D12; DR2 | I-12 (foundation SB-P-1.12, EIS-AUD-04); A-BP103 | — |
| 22-§29-13 | C22@61e1bb91 | §29 acceptance 13: OpenAI/model outage does not corrupt authoritative business state (UDI interpretation slice) | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | DAI | I-13 (conversation slice SB-P-1.13); A-BP103 | — |
| 22-§29-14 | C22@61e1bb91 | §29 acceptance 14: future implementation documents identify reused foundations first | SCN | BUILD NOW | CORE-ARCH | SB-P-1.14 | IN SCOPE | — | this Truth Pack is partial compliance evidence; see 22-§27 rows | — |
| 22-§30 | C22@61e1bb91 | §30 Historical Corrections / Superseded Behavior | HIST | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | L-HIST | — |
| 22-§31 | C22@61e1bb91 | §31 Provenance and Hydration Coverage | PROV | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | L-PROV | — |
| 22-§32 | C22@61e1bb91 | §32 Completion Gate | GATE | BUILD NOW | CORE-ARCH | SB-P-1.14 | NOT APPLICABLE | — | L-GATE | — |
| 22-§33-1 | C22@61e1bb91 | §33.1–§33.7 Personal Identity Lifecycle and Governed Deletion (touch: uploader/creator attribution on documents and Ledger records survives as non-authorizing, §33.5) | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 (22-§33-1 to -39 IN SCOPE SB-P-1.12); EIS §15, EIS-ESC-03; L-DEL12 | — |
| 22-§33-2 | C22@61e1bb91 | §33.8 acceptance boundary item 1 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-3 | C22@61e1bb91 | §33.8 acceptance boundary item 2 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-4 | C22@61e1bb91 | §33.8 acceptance boundary item 3 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-5 | C22@61e1bb91 | §33.8 acceptance boundary item 4 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-6 | C22@61e1bb91 | §33.8 acceptance boundary item 5 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-7 | C22@61e1bb91 | §33.8 acceptance boundary item 6 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-8 | C22@61e1bb91 | §33.8 acceptance boundary item 7 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-9 | C22@61e1bb91 | §33.8 acceptance boundary item 8 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |
| 22-§33-10 | C22@61e1bb91 | §33.8 acceptance boundary item 9 | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12 (22-§33 rows IN SCOPE SB-P-1.12; lifecycle evidence SB-P-1.19); L-DEL12 | — |

## D. Contract 25 — Document, Media Storage & Retention Foundation (full mission-assigned contract)

166 rows: 156 `IN SCOPE`, 2 `ASSIGNED TO LATER MISSION`, 7 `NOT APPLICABLE`, 1 `UNRESOLVED FOUNDER DECISION`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 25-§1 | C25@406ce089 | §1 Feature Identity (separation of metadata, objects, authorization, lifecycle and provider; carried by 25-§4-*) | NARR | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 25-§2 | C25@406ce089 | §2 Founder Problem Statement (Founder-approved R2 direction; carried by 25-§4-1, 25-§5-1) | NARR | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 25-§3 | C25@406ce089 | §3 Lighthouse Principles (realized by 25-§6-2, 25-§17-*, 25-§19-*) | PRIN | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |
| 25-§4-1 | C25@406ce089 | §4 Cloudflare R2 stores eligible binary objects/files | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO (D-06); A-BP103; BP §5.4 | — |
| 25-§4-2 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: merchant/business ownership | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-3 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: actor/source identity | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-4 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: permissions | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-5 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: object metadata | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-6 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: business-record linkage | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-7 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: lifecycle state | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-8 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: retention state | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DLEG | NI-STO; A-BP103 | — |
| 25-§4-9 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: retrieval authorization | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-10 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: audit/provenance | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-11 | C25@406ce089 | §4 Supabase/Smart Business data layer controls: references required to locate/retrieve the object | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§4-12 | C25@406ce089 | §4 clients must not treat a raw object URL as the authorization model | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | L-NEG; EIS-ISO-05 | — |
| 25-§5-1 | C25@406ce089 | §5 keep control plane and Business Memory metadata authoritative in Supabase while moving eligible binary storage to R2 | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103; BP §6.3 | — |
| 25-§5-2 | C25@406ce089 | §5 bucket topology, lifecycle classes and access mechanism belong to implementation architecture/EIS | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103 | — |
| 25-§6-1 | C25@406ce089 | §6 the foundation serves the listed dependent features (illustrative; this mission delivers Ledger, UDI and Receipt Cabinet use; others reuse in their missions) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-ILL; A-BP103 | — |
| 25-§6-2 | C25@406ce089 | §6 a new feature reuses this foundation unless a materially different storage requirement is justified | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103; D-05 (transient parser staging, DC-09) | — |
| 25-§7-1 | C25@406ce089 | §7 eligible object classes such as those listed (illustrative; producing features own their classes) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-ILL; A-BP103 | — |
| 25-§7-2 | C25@406ce089 | §7 feature-specific validation remains controlled by the feature contract | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103 | — |
| 25-§8-1 | C25@406ce089 | §8 ingest step 1: authenticated/identified source | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP (parser lease issue/confirm/claim, D-05); NI-STO; A-BP103 | — |
| 25-§8-2 | C25@406ce089 | §8 ingest step 2: business and actor resolution | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PART-IMP (parser lease issue/confirm/claim, D-05); NI-STO; A-BP103 | — |
| 25-§8-3 | C25@406ce089 | §8 ingest step 3: permission/entitlement validation | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§8-4 | C25@406ce089 | §8 ingest step 4: file safety/type/size validation | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PART-IMP (parser lease issue/confirm/claim, D-05); NI-STO; A-BP103 | — |
| 25-§8-5 | C25@406ce089 | §8 ingest step 5: object upload to the approved storage path | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | PART-IMP (parser lease issue/confirm/claim, D-05); NI-STO; A-BP103 | — |
| 25-§8-6 | C25@406ce089 | §8 ingest step 6: authoritative metadata record in Smart Business/Supabase | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§8-7 | C25@406ce089 | §8 ingest step 7: link to the relevant domain record/document memory | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§8-8 | C25@406ce089 | §8 ingest step 8: interpretation pipeline where required | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | NI-STO; A-BP103 | — |
| 25-§8-9 | C25@406ce089 | §8 ingest step 9: confirmation before consequential domain updates where required | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DTX | NI-STO; A-BP103 | — |
| 25-§8-10 | C25@406ce089 | §8 ingest step 10: audit/provenance capture | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§8-11 | C25@406ce089 | §8 a binary upload without authoritative metadata/business linkage is not completed business memory | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-NEG; A-BP103 | — |
| 25-§9-1 | C25@406ce089 | §9 retrieval step 1: identify the current user/business/session | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§9-2 | C25@406ce089 | §9 retrieval step 2: verify the actor may access the linked object | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§9-3 | C25@406ce089 | §9 retrieval step 3: resolve the current storage reference | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§9-4 | C25@406ce089 | §9 retrieval step 4: issue a controlled retrieval path | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO; A-BP103 | — |
| 25-§9-5 | C25@406ce089 | §9 retrieval step 5: client retrieves the object | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§9-6 | C25@406ce089 | §9 retrieval step 6: record access/audit events where required | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; A-BP103 | — |
| 25-§9-7 | C25@406ce089 | §9 Supabase remains the retrieval control plane even when bytes reside in R2 | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | A-BP103; EIS-ISO-05 | — |
| 25-§9-8 | C25@406ce089 | §9 signed/temporary URLs or controlled proxy/edge retrieval; exact mechanism is security/engineering design | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103 | — |
| 25-§10-1 | C25@406ce089 | §10 R2 does not become Business Memory by itself | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 25-§10-2 | C25@406ce089 | §10 Business Memory lives in the connected Smart Business domain model | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103; BP §6.3 | — |
| 25-§10-3 | C25@406ce089 | §10 Smart Business can answer: which merchant/business owns the object | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-4 | C25@406ce089 | §10 Smart Business can answer: who created/uploaded it | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-5 | C25@406ce089 | §10 Smart Business can answer: which channel/source produced it | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-6 | C25@406ce089 | §10 Smart Business can answer: what feature/domain record it belongs to | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-7 | C25@406ce089 | §10 Smart Business can answer: what document/media type it is | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-8 | C25@406ce089 | §10 Smart Business can answer: whether it has been interpreted | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-9 | C25@406ce089 | §10 Smart Business can answer: which current object location/version is authoritative | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-10 | C25@406ce089 | §10 Smart Business can answer: who may retrieve it | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-11 | C25@406ce089 | §10 Smart Business can answer: what retention state applies | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DLEG | NI-STO; NI-PROV; A-BP103 | — |
| 25-§10-12 | C25@406ce089 | §10 Smart Business can answer: whether it was deleted/replaced/migrated | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-STO; NI-PROV; A-BP103 | — |
| 25-§11-1 | C25@406ce089 | §11 UDI may read/interpret eligible stored objects | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI; DR2 | NI-UDI; A-BP103 | — |
| 25-§11-2 | C25@406ce089 | §11 UDI must not create its own independent storage universe | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; D-05 (DC-09) | — |
| 25-§11-3 | C25@406ce089 | §11 UDI uses this foundation for originals and links interpretation/preview/confirmation/domain-write state through authoritative metadata | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-UDI; A-BP103 | — |
| 25-§11-4 | C25@406ce089 | §11 stored object ≠ interpreted fact ≠ confirmed business record; all three distinguishable | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | NI-UDI; A-BP103; DC-04 | — |
| 25-§12-1 | C25@406ce089 | §12 original voice audio, where retention is justified, belongs to the shared object-storage foundation | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DR2; DLEG | I-13 (25-§12 DELEGATED to SB-P-1.14); A-BP103 | SB-P-1.13 FPDR-3; FDB-2 (open question; Stage 2 brief) |
| 25-§12-2 | C25@406ce089 | §12 transcription/structured meaning and resulting record remain governed Smart Business data | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | A-BP103; SB-P-1.13 EIS13-VOI-02 | — |
| 25-§12-3 | C25@406ce089 | §12 raw voice retention purpose-limited; not longer than needed because storage is cheap | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DLEG | L-NEG; A-BP103 | SB-P-1.13 FPDR-3; FDB-2 (open question; Stage 2 brief) |
| 25-§13-1a | C25@406ce089 | §13 Conversation Workspace uses the same storage foundation for equivalent media | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DR2 | I-13 (25-§13 DELEGATED to SB-P-1.14); A-BP103 | — |
| 25-§13-1b | C25@406ce089 | §13 WhatsApp uses the same storage foundation for equivalent media | OBL | BUILD NOW | CORE-FDN | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | A-BP109; C23 §18 | — |
| 25-§13-2 | C25@406ce089 | §13 no separate channel-specific copies because media arrived through different interfaces | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 25-§13-3 | C25@406ce089 | §13 channel metadata may differ; ownership, permissions, retrieval and durable object identity remain shared | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 25-§14-1 | C25@406ce089 | §14 stable internal object identity independent of provider URL shape | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§14-2 | C25@406ce089 | §14 where technically appropriate: idempotent upload handling | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (parser lease sha256, D-07); A-BP103 | — |
| 25-§14-3 | C25@406ce089 | §14 where technically appropriate: duplicate external event protection | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (parser lease sha256, D-07); A-BP103 | — |
| 25-§14-4 | C25@406ce089 | §14 where technically appropriate: duplicate-content detection where useful and privacy-safe | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | PRECEDENT-IDM (parser lease sha256, D-07); A-BP103 | — |
| 25-§14-5 | C25@406ce089 | §14 where technically appropriate: retry without multiple authoritative object records | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | PRECEDENT-IDM (parser lease sha256, D-07); A-BP103 | — |
| 25-§14-6 | C25@406ce089 | §14 where technically appropriate: orphan detection and cleanup | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D15 | PRECEDENT-IDM (parser lease sha256, D-07); A-BP103 | — |
| 25-§14-7 | C25@406ce089 | §14 a changing provider URL must not silently create a new business document identity | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 25-§15-1 | C25@406ce089 | §15 provider-independent internal references wherever practical | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103; DC-08 | — |
| 25-§15-2 | C25@406ce089 | §15 provider object keys, bucket names and URL formats are infrastructure details | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103 | — |
| 25-§15-3 | C25@406ce089 | §15 domain records must not become impossible to migrate because a provider URL is embedded as product truth | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; BP §16 item 15 | — |
| 25-§15-4 | C25@406ce089 | §15 support future provider migration without changing merchant semantics or losing linkage | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103 | — |
| 25-§16-1 | C25@406ce089 | §16 lifecycle states such as active/recent, archived, pending deletion, deleted, quarantined, failed/orphaned (illustrative) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-ILL; A-BP103 | — |
| 25-§16-2 | C25@406ce089 | §16 exact transition timings are not locked by this contract | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DLEG | A-BP103 | — |
| 25-§16-3 | C25@406ce089 | §16 historical 60-day Supabase-to-R2 migration timing remains provenance unless an EIS deliberately re-adopts it | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; candidate conflict CF-1 (Source 02 §8) | — |
| 25-§17-1 | C25@406ce089 | §17 exact long-term retention/deletion duration after cancellation/non-payment | UFD | BUILD NOW | CORE-FDN | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DUF6 | BP §15 item 6; GPCV §8 and §10 item 6: not on this mission's critical path (does not block non-destructive storage/control-plane work) | BP §15-6 (open) |
| 25-§17-2 | C25@406ce089 | §17 merchant data remains exportable through the approved lifecycle path (stored documents exportable; lifecycle path SB-P-1.19) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D19 | A-BP103; C18 §11 | — |
| 25-§17-3 | C25@406ce089 | §17 deletion deliberate, auditable and permission/governance controlled | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 25-§17-4 | C25@406ce089 | §17 cancellation/non-payment must not trigger uncontrolled destructive deletion by a fixed timer | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§17-5 | C25@406ce089 | §17 legal/compliance retention needs may differ by object/domain (record-class-specific; no inferred duration) | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DLEG | A-BP103; SB-P-1.12 EIS-LEG-01; Founder Record 06 | — |
| 25-§17-6 | C25@406ce089 | §17 privacy minimization applies even when storage is cheap | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DLEG | A-BP103 | FDB-2 (open question; Stage 2 brief) |
| 25-§17-7 | C25@406ce089 | §17 historical 180-day destructive purge/cascade behaviour is not current authority | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§18-1 | C25@406ce089 | §18 Supabase not forced to carry unpredictable binary-media growth | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103; BP §16 item 14 | — |
| 25-§18-2 | C25@406ce089 | §18 R2 absorbs file/object growth to reduce Supabase pressure and cost, scale predictably and separate structured truth from media (single rule) | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103 | — |
| 25-§18-3 | C25@406ce089 | §18 cost optimization must not weaken retrieval latency, durability, security or merchant access | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-NEG | — |
| 25-§19-1 | C25@406ce089 | §19 storage protects merchant isolation, customer and employee privacy, document confidentiality, financial and compliance evidence, credentials (single protected-class rule) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | A-BP103 | — |
| 25-§19-2 | C25@406ce089 | §19 requirement: no public-by-default merchant object access | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | L-NEG; A-BP103 | — |
| 25-§19-3 | C25@406ce089 | §19 requirement: no guessable authorization through raw object paths | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | L-NEG; A-BP103 | — |
| 25-§19-4 | C25@406ce089 | §19 requirement: purpose-limited access | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | A-BP103 | — |
| 25-§19-5 | C25@406ce089 | §19 requirement: least-privilege service credentials | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | A-BP103 | — |
| 25-§19-6 | C25@406ce089 | §19 requirement: no credentials in client code | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; A-BP103 | — |
| 25-§19-7 | C25@406ce089 | §19 requirement: access governed by current permissions, not historical access | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | A-BP103 | — |
| 25-§19-8 | C25@406ce089 | §19 requirement: appropriate validation/scanning/safety checks for uploaded content | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | A-BP103; PART-IMP (content checks) | — |
| 25-§20-1 | C25@406ce089 | §20 handle: failed upload | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-2 | C25@406ce089 | §20 handle: interrupted upload | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-3 | C25@406ce089 | §20 handle: metadata written but object missing | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-4 | C25@406ce089 | §20 handle: object written but metadata write failed | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-5 | C25@406ce089 | §20 handle: provider timeout | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-6 | C25@406ce089 | §20 handle: temporary R2 outage | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-7 | C25@406ce089 | §20 handle: expired/invalid signed access | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-8 | C25@406ce089 | §20 handle: corrupted object | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-9 | C25@406ce089 | §20 handle: missing object/reference drift | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-10 | C25@406ce089 | §20 handle: duplicate webhook/upload retry | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-11 | C25@406ce089 | §20 handle: lifecycle/migration failure | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-12 | C25@406ce089 | §20 handle: orphan object | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-13 | C25@406ce089 | §20 handle: retrieval permission change between request and delivery | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D12 | NI-STO; PART-IMP (parser lease states HEAD_* checks, D-05); A-BP103 | — |
| 25-§20-14 | C25@406ce089 | §20 failure explicit and recoverable; no claim of durable storage while object and metadata are inconsistent | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-NEG; A-BP103 | — |
| 25-§21-1 | C25@406ce089 | §21 reconciliation detects and repairs mismatches between Supabase metadata and R2 objects | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D15 | NI-STO; A-BP103; DC-15 | — |
| 25-§21-2 | C25@406ce089 | §21 reconciliation detects and repairs mismatches between object references and current provider keys | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D15 | NI-STO; A-BP103; DC-15 | — |
| 25-§21-3 | C25@406ce089 | §21 reconciliation detects and repairs mismatches between domain records and stored media | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D15 | NI-STO; A-BP103; DC-15 | — |
| 25-§21-4 | C25@406ce089 | §21 reconciliation detects and repairs mismatches between deletion state and actual object presence | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D15 | NI-STO; A-BP103; DC-15 | — |
| 25-§21-5 | C25@406ce089 | §21 recovery preserves auditability and does not invent lost business content | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-NEG | — |
| 25-§22-1 | C25@406ce089 | §22 storage architecture documents provider durability assumptions | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; provider facts UNVERIFIED — ACCESS REQUIRED (D-14); A-BP103 | — |
| 25-§22-2 | C25@406ce089 | §22 storage architecture documents backup/recovery expectations | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; provider facts UNVERIFIED — ACCESS REQUIRED (D-14); A-BP103 | — |
| 25-§22-3 | C25@406ce089 | §22 storage architecture documents how metadata and object recovery are coordinated | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; provider facts UNVERIFIED — ACCESS REQUIRED (D-14); A-BP103 | — |
| 25-§22-4 | C25@406ce089 | §22 storage architecture documents restore testing where required | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; provider facts UNVERIFIED — ACCESS REQUIRED (D-14); A-BP103 | — |
| 25-§22-5 | C25@406ce089 | §22 storage architecture documents behaviour when one side of the metadata/object pair is restored without the other | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; provider facts UNVERIFIED — ACCESS REQUIRED (D-14); A-BP103 | — |
| 25-§22-6 | C25@406ce089 | §22 a database backup alone is not a complete media-memory backup | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103 | — |
| 25-§23-1 | C25@406ce089 | §23 audit event where material: upload/creation | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-2 | C25@406ce089 | §23 audit event where material: actor/source/channel | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-3 | C25@406ce089 | §23 audit event where material: object identity | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-4 | C25@406ce089 | §23 audit event where material: domain linkage | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-5 | C25@406ce089 | §23 audit event where material: interpretation/processing state | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-6 | C25@406ce089 | §23 audit event where material: storage migration | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-7 | C25@406ce089 | §23 audit event where material: replacement/version change | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-8 | C25@406ce089 | §23 audit event where material: retrieval/access where sensitive | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-9 | C25@406ce089 | §23 audit event where material: retention state change | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-10 | C25@406ce089 | §23 audit event where material: deletion request/execution | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-11 | C25@406ce089 | §23 audit event where material: recovery/reconciliation action | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | NI-PROV (D-08); A-BP103 | — |
| 25-§23-12 | C25@406ce089 | §23 audit data belongs in governed Smart Business storage, not only provider logs | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 25-§24-1 | C25@406ce089 | §24 merchant retrieval responsive under normal conditions | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103 | — |
| 25-§24-2 | C25@406ce089 | §24 implementation considers latency, signed-URL/proxy overhead, media size, progressive loading, privacy-safe caching, avoiding repeated transfers, thumbnails without duplicate-object sprawl (single design-consideration rule) | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | L-ILL; A-BP103 | — |
| 25-§24-3 | C25@406ce089 | §24 performance optimization must not bypass authorization | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | L-NEG | — |
| 25-§25-1 | C25@406ce089 | §25 R2 responsibility: durable object storage, provider-level availability, storage API operations | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | A-BP103 | — |
| 25-§25-2 | C25@406ce089 | §25 Supabase/Smart Business responsibility: identity, ownership, permissions/RLS/control-plane authorization, metadata, linkage, lifecycle, retrieval authorization, audit (single rule; detailed by 25-§4-*) | RULE | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12 | A-BP103 | — |
| 25-§25-3 | C25@406ce089 | §25 OpenAI/AI orchestration never owns storage or retrieval authority | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI | L-NEG; BP §16 item 15 | — |
| 25-§25-4 | C25@406ce089 | §25 WhatsApp/Conversation Workspace never own storage truth or authorization | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | L-NEG | — |
| 25-§26-1 | C25@406ce089 | §26 acceptance 1: a receipt/image/document/voice object stored in R2 with authoritative merchant metadata in Supabase | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2; D13 | NI-STO; A-BP103 | — |
| 25-§26-2 | C25@406ce089 | §26 acceptance 2: an unauthorized actor cannot retrieve another business's object even with a known reference | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO; A-BP103 | — |
| 25-§26-3 | C25@406ce089 | §26 acceptance 3: an authorized merchant request resolves metadata and retrieves the correct object | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO; A-BP103 | — |
| 25-§26-4a | C25@406ce089 | §26 acceptance 4 (Workspace slice): channels resolve the same durable object identity | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13; DR2 | A-BP103; L-X20 | — |
| 25-§26-4b | C25@406ce089 | §26 acceptance 4 (WhatsApp slice): channels resolve the same durable object identity | SCN | BUILD NOW | CORE-FDN | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — |
| 25-§26-5 | C25@406ce089 | §26 acceptance 5: UDI interprets an authorized stored object without owning storage permissions | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DAI; DR2 | NI-STO; A-BP103 | — |
| 25-§26-6 | C25@406ce089 | §26 acceptance 6: failed object upload does not create a false completed document record | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§26-7 | C25@406ce089 | §26 acceptance 7: failed metadata write after upload is detected/reconciled rather than silently orphaned | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2; D15 | NI-STO; A-BP103 | — |
| 25-§26-8 | C25@406ce089 | §26 acceptance 8: duplicate upload/retry does not create duplicate authoritative business memory | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO; A-BP103 | — |
| 25-§26-9 | C25@406ce089 | §26 acceptance 9: provider URL/key migration does not break domain linkage | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§26-10 | C25@406ce089 | §26 acceptance 10: R2/provider outage narrowly contained and clearly surfaced | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§26-11 | C25@406ce089 | §26 acceptance 11: object access revoked when the underlying permission is revoked | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO; A-BP103 | — |
| 25-§26-12 | C25@406ce089 | §26 acceptance 12: retention/deletion follows current lifecycle policy, not historical purge timing | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DLEG; DUF6 | NI-STO; A-BP103 | FDB-2 (open question; Stage 2 brief) |
| 25-§26-13 | C25@406ce089 | §26 acceptance 13: backup/recovery verifies metadata/object consistency | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§26-14 | C25@406ce089 | §26 acceptance 14: storage metrics observable for capacity/cost without exposing private content | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| 25-§27-1 | C25@406ce089 | §27 non-goal: storing all unpredictable binary media in Supabase for convenience | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§27-2 | C25@406ce089 | §27 non-goal: R2 as the authoritative permission system | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§27-3 | C25@406ce089 | §27 non-goal: public permanent merchant-file URLs by default | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§27-4 | C25@406ce089 | §27 non-goal: duplicate media silos per feature/channel | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG; D-05 (DC-09) | — |
| 25-§27-5 | C25@406ce089 | §27 non-goal: provider-specific URLs as permanent business identity | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§27-6 | C25@406ce089 | §27 non-goal: deleting Business Memory on obsolete historical timers | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§27-7 | C25@406ce089 | §27 non-goal: cheap storage as permission for indefinite unnecessary retention | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§27-8 | C25@406ce089 | §27 non-goal: AI/provider tools bypassing Smart Business authorization | NEG | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | — | L-NEG | — |
| 25-§28 | C25@406ce089 | §28 Historical Corrections / Evolution | HIST | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-HIST; candidate conflict CF-1 | — |
| 25-§29 | C25@406ce089 | §29 Provenance | PROV | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-PROV | — |
| 25-§30 | C25@406ce089 | §30 Completion Gate (eleven items realized by 25-§4 to 25-§26 rows) | GATE | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-GATE | — |
| 25-§FP | C25@406ce089 | Final Principle | PRIN | BUILD NOW | CORE-FDN | SB-P-1.14 | NOT APPLICABLE | — | L-NARR | — |

## E. Inherited residual rows — rows the canonical SB-P-1.12 and SB-P-1.13 FCTMs assign to SB-P-1.14 (Contracts 24, 10, 9, 12, 17, 7)

38 rows: 34 `IN SCOPE`, 4 `ASSIGNED TO LATER MISSION`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 24-§5-6 | C24@0c1dcbb2 | §5 central orchestration flow applies to document entry points | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13 (ASSIGNED SB-P-1.14); A-BP103 | — |
| 24-§7-3 | C24@0c1dcbb2 | §7 images/receipts: vision/OCR produces structured evidence/drafts that enter UDI and the domain workflow | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 24-§7-4 | C24@0c1dcbb2 | §7 PDFs/Excel/CSV: deterministic parsers and AI interpretation; final updates follow preview/clarify/confirm/validate | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | DAI | I-13; PART-IMP; A-BP103 | — |
| 24-§14-1 | C24@0c1dcbb2 | §14 OCR/vision output is evidence, not automatically business truth | RULE | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | DAI | I-13 (24-§14 whole section ASSIGNED SB-P-1.14; expanded here); A-BP103 | — |
| 24-§14-2 | C24@0c1dcbb2 | §14 AI foundation may: identify document type | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 24-§14-3 | C24@0c1dcbb2 | §14 AI foundation may: extract relevant fields | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 24-§14-4 | C24@0c1dcbb2 | §14 AI foundation may: normalize language/units | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 24-§14-5 | C24@0c1dcbb2 | §14 AI foundation may: identify uncertainty/conflicts | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 24-§14-6 | C24@0c1dcbb2 | §14 AI foundation may: prepare a human-readable preview | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 24-§14-7 | C24@0c1dcbb2 | §14 AI foundation may: route to the relevant domain adapter | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 24-§14-8 | C24@0c1dcbb2 | §14 UDI then applies interpret → preview → clarify → confirm → validated update | RULE | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D12; DAI | I-13; A-BP103 | — |
| 24-§14-9 | C24@0c1dcbb2 | §14 the model must not bypass this safety pattern for consequential uncertain input | NEG | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13 | L-NEG; I-13 | — |
| 24-§18-1a | C24@0c1dcbb2 | §18 example Receipt → Ledger: steps 1–4 (receipt enters Workspace/WhatsApp; UDI/AI interprets; user confirms validated Ledger event; Ledger becomes Business Memory) | SCN | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI; DTX; D20 | I-13 (24-§18-1 ASSIGNED SB-P-1.14); A-BP103; WhatsApp entry L-X20 | — |
| 24-§18-1b | C24@0c1dcbb2 | §18 example: steps 5–6 (Ask CFO reasons over the event; Daily Intelligence includes impact) | SCN | BUILD NOW | CORE-INT | SB-P-1.15 | ASSIGNED TO LATER MISSION | D15 | I-13 (secondary SB-P-1.15); A-BP104 | — |
| 24-§21-7 | C24@0c1dcbb2 | §21 consequential imports require confirmation or valid stored delegation | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D12 | I-13; A-BP103 | — |
| 24-§23-6 | C24@0c1dcbb2 | §23 handle vision/OCR failure | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | DAI | I-13; A-BP103 | — |
| 24-§27-5 | C24@0c1dcbb2 | §27 consistent assistant across document upload flows | OBL | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13 | I-13; A-BP103 | — |
| 24-§31-8 | C24@0c1dcbb2 | §31 acceptance 8: receipt/image interpretation goes through UDI confirmation rules | SCN | BUILD NOW | CORE-INT | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 9-§12-1 | C9@649c55f3 | §12 Human Language Layer reused by Ledger / Business Memory (reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | IN SCOPE | D13 | I-13 (ASSIGNED SB-P-1.14); A-BP103 | — |
| 10-§5-10 | C10@5c145ed7 | §5 Workspace output: business-document retrieval where permitted | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D12; D13; DR2 | I-13; A-BP103 | — |
| 10-§10-1 | C10@5c145ed7 | §10 Workspace uploads reuse UDI upload → interpret → preview → clarify → confirm → validated update | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 10-§10-3 | C10@5c145ed7 | §10 users review extracted/interpreted content | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 10-§10-4 | C10@5c145ed7 | §10 users correct uncertainty | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D13 | I-13; A-BP103 | — |
| 10-§10-5 | C10@5c145ed7 | §10 users confirm the intended business action from a document | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D12; D13 | I-13; A-BP103 | — |
| 10-§10-7 | C10@5c145ed7 | §10 users retrieve permitted documents/exports later | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D12; D13; DR2 | I-13; A-BP103 | — |
| 10-§13-3 | C10@5c145ed7 | §13 example action: confirm an interpreted receipt | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D12; D13; DTX | I-13; A-BP103 | — |
| 10-§17-4 | C10@5c145ed7 | §17 clarification case: uncertain document extraction | OBL | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D13; DAI | I-13; A-BP103 | — |
| 10-§23-3b | C10@5c145ed7 | §23 acceptance 3 (UDI slice): UDI preview before consequential update | SCN | BUILD NOW | CORE-CH | SB-P-1.14 | IN SCOPE | D13; DAI | I-13 (10-§23-3a intake slice stays SB-P-1.13); A-BP103-FRV | — |
| 12-§4-5 | C12@6d48feff | §4 Basic Voice supports document clarification | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | IN SCOPE | D13 | I-13; A-BP103 | — |
| 17-§12-1 | C17@7943f74a | §12 authorized users browse/search permitted documents and receipts through the shared UDI/Receipt foundation | OBL | BUILD NOW | MGR+LDG | SB-P-1.14 | IN SCOPE | D12; DR2 | I-12 (17-§12 ASSIGNED SB-P-1.14; expanded here); A-BP103 | — |
| 17-§12-2 | C17@7943f74a | §12 workspace richer visual filtering preserves the same storage/permission truth used in conversation | RULE | BUILD NOW | MGR+LDG | SB-P-1.14 | IN SCOPE | D12 | I-12; A-BP103 | — |
| 7-§6-1 | C7@65ad91b2 | §6 stock lists reuse UDI | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-12 (7-§6 'SB-P-1.17/SB-P-1.14'; split here); A-BP106 | — |
| 7-§6-2 | C7@65ad91b2 | §6 opening-stock sheets reuse UDI | OBL | BUILD NOW | MGR/ADDON | SB-P-1.14 | IN SCOPE | D12 | I-12; A-BP103 ('opening-stock/import convergence into UDI'); GPCV §11 | — |
| 7-§6-3 | C7@65ad91b2 | §6 supplier invoices reuse UDI (inventory side; Ledger purchase side is 5-§7-4) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-12; A-BP106 | — |
| 7-§6-4 | C7@65ad91b2 | §6 consequential imports follow file/photo → interpretation → preview → clarification → confirmation → validated inventory update (opening-stock slice) | RULE | BUILD NOW | MGR/ADDON | SB-P-1.14 | IN SCOPE | D12 | I-12; PART-IMP; A-BP103 | — |
| 7-§6-5 | C7@65ad91b2 | §6 no isolated import truth that bypasses inventory audit/idempotency controls | NEG | BUILD NOW | MGR/ADDON | SB-P-1.14 | IN SCOPE | — | L-NEG; I-12; inventory idempotency precedent (D-07) | — |
| 7-§15-2a | C7@65ad91b2 | §15 scenario 2 (opening-stock slice): document/CSV import with preview and idempotency | SCN | BUILD NOW | MGR/ADDON | SB-P-1.14 | IN SCOPE | D12 | I-12 (7-§15-2 'SB-P-1.17/SB-P-1.14'; split here); A-BP103 | — |
| 7-§15-2b | C7@65ad91b2 | §15 scenario 2 (other stock documents): document/CSV import with preview and idempotency | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | ASSIGNED TO LATER MISSION | D17 | I-12; A-BP106 | — |

## F. Build Plan — §5.1–§5.4, §6.1–§6.3, §7, §8.4, §9, §10.3, §11, §13, §15, §16

68 rows: 33 `IN SCOPE`, 3 `ASSIGNED TO LATER MISSION`, 3 `DELEGATED`, 8 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 1 `UNRESOLVED FOUNDER DECISION`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| BP-§5.1-1 | BP@9dfdd924 | §5.1 residual anon grant on businesses, transactions, transaction_correction_events (mandatory SB-P-1.12 gate; this mission writes to transactions) | GATE | BUILD NOW | per contract | SB-P-1.12 | DELEGATED | D12 | BP §5.1 assigns to SB-P-1.12 (WS-B); D-12 | — |
| BP-§5.2-1 | BP@9dfdd924 | §5.2 CI baseline gate (SB-P-1.12 owns; this mission keeps the Fast Gate green at checkpoints) | GATE | BUILD NOW | per contract | SB-P-1.12 | DELEGATED | D12 | BP §5.2; D-13 | — |
| BP-§5.3-1 | BP@9dfdd924 | §5.3 mission accounts for canonical vs delivery repository, Lovable publication, Supabase migration alignment and production verification; declares need at Stage 1 and in the early delivery plan | OBL | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | SB-P-1.14-MC-01 §3 scope flags; D-14 | — |
| BP-§5.4-1 | BP@9dfdd924 | §5.4 Cloudflare R2 / approved durable object storage activation: Blueprint/EIS identifies environment activation, credentials, failure behaviour, rollback and verification | GATE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; BP §5.4 names SB-P-1.14 | — |
| BP-§6.1-1 | BP@9dfdd924 | §6.1 no document pipeline (or UI, AI, reminder, scheduler, channel) may invent authority | NEG | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12 | L-NEG; BP §6.1 | — |
| BP-§6.2-1 | BP@9dfdd924 | §6.2 UDI/document interpretation and Ledger writes use the one Business Command path (input → interpretation → permission → clarification/preview → confirmation → deterministic command → write → audit → response) | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; D13; DTX | BP §6.2 lists UDI as a reusing surface; I-13 (BP-§6.2-1 IN SCOPE SB-P-1.13 for the path) | — |
| BP-§6.3-1 | BP@9dfdd924 | §6.3 Supabase/Postgres remains authoritative for structured business truth | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | BP §6.3; A-BP103 | — |
| BP-§6.3-2 | BP@9dfdd924 | §6.3 binary originals and durable media use the approved object-storage foundation; Smart Business authoritative for ownership, permissions, provenance, lifecycle, linkage and retrieval authorization | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; BP §6.3 | — |
| BP-§7-1 | BP@9dfdd924 | §7 Product & Price Master: preserve import foundations and product relationships needed by UDI and Transactions; no independent Catalog expansion | RULE | BUILD NOW | per contract | SB-P-1.12 | DELEGATED | D12 | BP §7 ('SB-P-1.12 owns future implementation design/authorization'); SB-P-1.12 EIS-PPM-05 | — |
| BP-§8.4-1 | BP@9dfdd924 | §8.4 the Smart Business kernel, not the WhatsApp adapter, owns UDI and Business Memory (UDI/Business Memory slice) | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | BP §8.4; I-13 (BP-§8.4-1 IN SCOPE SB-P-1.13 for the kernel) | — |
| BP-§9-1 | BP@9dfdd924 | §9 row 3: SB-P-1.14 materially advances Contracts 3, 5, 25, 22 (assignment source; assignment lock) | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | BP §9 row 3 | — |
| BP-§9-2 | BP@9dfdd924 | §9 row 5: SB-P-1.16 advances 'Contract 3 completion' (assignment source for the credit-specific residual) | RULE | BUILD NOW | per contract | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | BP §9 row 5; A-BP103-C | FDB-1 (open question; Stage 2 brief) |
| BP-§10.3-O | BP@9dfdd924 | §10.3 product outcome: trustworthy Business Memory accepting the real documents merchants already use | EXP | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DAI; DR2 | A-BP103 | — |
| BP-§10.3-W1 | BP@9dfdd924 | §10.3 required work area: mature Ledger/Business Memory | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DTX | PART-LDG; A-BP103 | — |
| BP-§10.3-W2 | BP@9dfdd924 | §10.3 required work area: four-state transaction maturity required by Contract 3 (income, expense, credit, repayment) | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4; A-BP103 | FDB-1 (open question; Stage 2 brief) |
| BP-§10.3-W3 | BP@9dfdd924 | §10.3 required work area: additive transaction-type widening where required | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | DTX | NI-LDG4 (D-01); A-BP103 | — |
| BP-§10.3-W4 | BP@9dfdd924 | §10.3 required work area: UDI for approved images/PDF/Excel/CSV/document inputs | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DAI; DR2 | NI-UDI; PART-IMP; A-BP103 | — |
| BP-§10.3-W5 | BP@9dfdd924 | §10.3 required work area: receipt/document provenance | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-PROV; A-BP103 | — |
| BP-§10.3-W6 | BP@9dfdd924 | §10.3 required work area: ambiguity handling | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | DAI | NI-UDI; A-BP103 | — |
| BP-§10.3-W7 | BP@9dfdd924 | §10.3 required work area: preview-confirm-update | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DTX | PRECEDENT-IDM (catalog preview binding); A-BP103 | — |
| BP-§10.3-W8 | BP@9dfdd924 | §10.3 required work area: Receipt Cabinet | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-CAB; A-BP103 | — |
| BP-§10.3-W9 | BP@9dfdd924 | §10.3 required work area: governed media/object storage | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | DR2 | NI-STO; A-BP103 | — |
| BP-§10.3-W10 | BP@9dfdd924 | §10.3 required work area: ownership/permission metadata | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-STO; A-BP103 | — |
| BP-§10.3-W11 | BP@9dfdd924 | §10.3 required work area: correction/audit continuity | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12 | PART-LDG; A-BP103 | — |
| BP-§10.3-W12 | BP@9dfdd924 | §10.3 required work area: reuse of canonical parser/import/idempotency foundations | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | PART-IMP; PRECEDENT-IDM; A-BP103 | — |
| BP-§10.3-W13 | BP@9dfdd924 | §10.3 required work area: opening-stock/import convergence into UDI rather than a separate parser product | WORK | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12 | PART-IMP; GPCV §11; A-BP103 | — |
| BP-§10.3-C1 | BP@9dfdd924 | §10.3 engineering correction: four-state Ledger transaction-type widening belongs to SB-P-1.14, not SB-P-1.16 | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | DTX | A-BP103-C | — |
| BP-§10.3-C2 | BP@9dfdd924 | §10.3 engineering correction: SB-P-1.16 builds customer-credit-specific structures and financial integrity on top of the mature Ledger | RULE | BUILD NOW | per contract | SB-P-1.16 | ASSIGNED TO LATER MISSION | D16 | A-BP103-C; A-BP105 | FDB-1 (open question; Stage 2 brief) |
| BP-§10.3-S1 | BP@9dfdd924 | §10.3 search by available human concepts: period, party/counterparty reference, purpose, document | OBL | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DR2 | NI-SRCH; A-BP103-S | — |
| BP-§10.3-S2 | BP@9dfdd924 | §10.3 structured Customer/Supplier-directory-indexed search after identities are established | OBL | BUILD NOW | per contract | SB-P-1.17 / SB-P-1.18 | ASSIGNED TO LATER MISSION | D17; D18 | A-BP103-S | — |
| BP-§10.3-SA1 | BP@9dfdd924 | §10.3 Founder Runtime Scenario A: upload receipt/invoice/image/PDF, correct an ambiguous interpreted field, confirm; committed record uses the exact reviewed interpretation | FRV | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; D13; DAI; DTX; DR2 | NI-UDI; A-BP103-FRV; Experience anchors 1, 3 | — |
| BP-§10.3-SA2 | BP@9dfdd924 | §10.3 Founder Runtime Scenario A: if the resolvable target changes between preview and commit, re-prompt rather than silently retarget | FRV | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DTX | NI-UDI; A-BP103-FRV; Experience anchor 2; EIS-CNF-01 fingerprint | — |
| BP-§10.3-SB1 | BP@9dfdd924 | §10.3 Founder Runtime Scenario B: Owner records income, expense, credit and repayment; all four persist and retrieve correctly | FRV | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DTX | NI-LDG4; A-BP103-FRV; Experience anchor 4 | FDB-1 (open question; Stage 2 brief) |
| BP-§10.3-SB2 | BP@9dfdd924 | §10.3 Founder Runtime Scenario B: without damaging existing sale/purchase history | FRV | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | DTX | NI-LDG4; D-01, D-03; A-BP103-FRV; Experience anchor 5 | FDB-1 (open question; Stage 2 brief) |
| BP-§10.3-X | BP@9dfdd924 | §10.3 exit principle: give messy documents, review what was understood, later find both the business fact and the original proof (testable experience statement) | EXP | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | D12; DAI; DR2 | A-BP103; Experience anchors 1, 3 | — |
| BP-§11-1 | BP@9dfdd924 | §11 SB-P-1.14 Business Memory/UDI underpins later financial integrity, Compliance documents, onboarding imports and Order/Delivery document inputs (adapter-ready design) | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | BP §11 | — |
| BP-§11-2 | BP@9dfdd924 | §11 a later mission may complete a contract partly advanced earlier but must not claim earlier work as newly created (SB-P-1.9A, SB-P-1.11 foundations) | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | BP §11; GPCV §7 | — |
| BP-§11-3 | BP@9dfdd924 | §11 cross-mission feature advancement stays visible in the Global Product Completion Register (rows 3, 5, 22, 25; updated by Mission Control at acceptance) | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | BP §11; GPCV §12 | — |
| BP-§13-1 | BP@9dfdd924 | §13 Completion Report includes an Experience Verification Matrix seeded from §10.3 | RULE | BUILD NOW | per contract | SB-P-1.14 | IN SCOPE | — | process obligation; seeded at Stage 4 | — |
| BP-§15-1 | BP@9dfdd924 | §15 unresolved Founder decision: current free-trial policy | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§15-2 | BP@9dfdd924 | §15 unresolved Founder decision: exact Voice Plus price | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§15-3 | BP@9dfdd924 | §15 unresolved Founder decision: exact Staff/HR price | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§15-4 | BP@9dfdd924 | §15 unresolved Founder decision: exact Smart Stock price | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§15-5 | BP@9dfdd924 | §15 unresolved Founder decision: exact Smart Order & Delivery price | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§15-6 | BP@9dfdd924 | §15 unresolved Founder decision: long-term retention/deletion duration after cancellation/non-payment | UFD | BUILD NOW | per contract | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DUF6 | Not on SB-P-1.14 critical path: GPCV §8 ('does not block non-destructive R2 adapter/control-plane work'); rows 25-§17-1, 25-§26-12 | BP §15-6 (open) |
| BP-§15-7 | BP@9dfdd924 | §15 unresolved Founder decision: employee KYC/national-ID necessity | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§15-8 | BP@9dfdd924 | §15 unresolved Founder decision: wholesaler/marketplace expansion | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§15-9 | BP@9dfdd924 | §15 unresolved Founder decision: third-party underwriting/lending ecosystem | UFD | BUILD NOW | per contract | SB-P-1.14 | NOT APPLICABLE | — | Does not concern SB-P-1.14 scope | — |
| BP-§16-1 | BP@9dfdd924 | §16 rejection: Ask CFO as write-capable authority | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-2 | BP@9dfdd924 | §16 rejection: AI accusation/judgment of employees or customers | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-3 | BP@9dfdd924 | §16 rejection: continuous staff GPS surveillance by default | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-4 | BP@9dfdd924 | §16 rejection: automated wage punishment | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-5 | BP@9dfdd924 | §16 rejection: blind supplier procurement without valid Owner delegation | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-6 | BP@9dfdd924 | §16 rejection: hard credit blocking by default | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-7 | BP@9dfdd924 | §16 rejection: custom client-specific POS modification inside core | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-8 | BP@9dfdd924 | §16 rejection: marketplace behaviour inside Smart Order & Delivery | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-9 | BP@9dfdd924 | §16 rejection: customer silence invalidating sufficiently proven delivery | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-10 | BP@9dfdd924 | §16 rejection: duplicate channel-specific Business Memory | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-11 | BP@9dfdd924 | §16 rejection: duplicate channel-specific permission models | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-12 | BP@9dfdd924 | §16 rejection: separate AI brains per feature/channel | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-13 | BP@9dfdd924 | §16 rejection: model conversation history as permanent Business Memory | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-14 | BP@9dfdd924 | §16 rejection: uncontrolled binary-media concentration in Supabase for convenience | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-15 | BP@9dfdd924 | §16 rejection: provider URLs as permission authority/business identity | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-16 | BP@9dfdd924 | §16 rejection: destructive subscription-driven schema creation/deletion | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-17 | BP@9dfdd924 | §16 rejection: broad routine Super Admin access to merchant private data | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-18 | BP@9dfdd924 | §16 rejection: revival of /survey or obsolete domains/routes | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-19 | BP@9dfdd924 | §16 rejection: old Daily Intelligence timing conflicting with 7:00 / 10:30 / 22:00 | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |
| BP-§16-20 | BP@9dfdd924 | §16 rejection: independent Catalog product expansion | REJ | REJECT | REJECT | SB-P-1.14 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — |

## G. Delegate contracts — sections whose behaviour SB-P-1.14 touches at its boundary (Contracts 21, 24, 10, 12, 9, 14, 15, 7, 17, 18, 19, 23, 2, 4, 1, 6, 16, 20, 13)

57 rows: 57 `DELEGATED`.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency | Evidence / citation | Founder decision |
|---|---|---|---|---|---|---|---|---|---|---|
| 21-§4 | C21@f4a05d5c | §4 Core Authority Model (Employee may upload permitted receipts/documents; Manager not automatically Owner) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; touch: document and Ledger capabilities registered by this mission (EIS-KER-03, §8.2) | — |
| 21-§5 | C21@f4a05d5c | §5 Permission Dimensions (action type read/create/update/approve/export/admin; object scope) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-KER-08; touch: document retrieval and export actions | — |
| 21-§6 | C21@f4a05d5c | §6 Business Isolation (cross-business file/document access and exports denied; client business_id untrusted) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-ISO-01, EIS-ISO-05; touch: stored objects and exports | — |
| 21-§7 | C21@f4a05d5c | §7 Server-side Authorization | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-ISO-02; touch: transactions command-only boundary (D-02) | — |
| 21-§8 | C21@f4a05d5c | §8 Conversation / AI Permission Boundary (UDI interpretation through AI tools) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12; D13 | L-DEL21; EIS-ISO-06; touch: document-borne content never grants authority | — |
| 21-§11 | C21@f4a05d5c | §11 Permission-scoped Transaction / Operational Contribution (create ≠ read-all/edit-all/export/analytics; actor preserved) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; touch: staff receipt upload (5-§18-9, DC-07) | — |
| 21-§13 | C21@f4a05d5c | §13 Supplier / Customer / Delivery Participation | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-EXT-02; touch: no general Ledger or document access (3-§11-5) | — |
| 21-§14 | C21@f4a05d5c | §14 Temporary / Purpose-limited Support Access | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-SUP-01; touch: support access to documents (5-§12-7) | — |
| 21-§17 | C21@f4a05d5c | §17 Permission Changes and Runtime Revalidation | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-CNF-02, EIS-CNF-05; touch: revocation during document import and object retrieval (25-§26-11) | — |
| 21-§18 | C21@f4a05d5c | §18 Confirmation Binding | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-CNF-01; touch: Scenario A binding and stale-target re-prompt | — |
| 21-§19 | C21@f4a05d5c | §19 Auditability | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-AUD-01 to -04; touch: document and Ledger provenance | — |
| 21-§20 | C21@f4a05d5c | §20 Error and Denial Behavior | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; EIS-UX-01; touch: denied document retrieval leaks no content | — |
| 21-§24 | C21@f4a05d5c | §24 Acceptance Scenarios touched: 1, 2, 3, 4, 8, 10 | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL21; I-12 (21-§24-* IN SCOPE SB-P-1.12) | — |
| 24-§10 | C24@0c1dcbb2 | §10 Permission-Aware AI (document context retrieved only within authority) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-CTX-02 | — |
| 24-§20 | C24@0c1dcbb2 | §20 Structured Outputs and Validation (extraction outputs schema-validated) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13; DAI | L-DEL13; EIS13-TOOL-02 | — |
| 24-§22 | C24@0c1dcbb2 | §22 AI Safety / Business Boundary (document-borne instructions are untrusted data) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-CTX-01 | — |
| 24-§24 | C24@0c1dcbb2 | §24 Auditability and Provenance (interpretation model/provider metadata) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-AUD-01 | — |
| 24-§25 | C24@0c1dcbb2 | §25 Privacy and Data Minimization (merchant documents sent to the provider) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13; DAI | L-DEL13; EIS13-PRV-01; DC-16 | — |
| 24-§29 | C24@0c1dcbb2 | §29 OpenAI Provider Abstraction and Anti-Lock Principle | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13; DAI | L-DEL13; EIS13-GW-02 | — |
| 10-§4 | C10@5c145ed7 | §4 Supported Inputs (attachment intake; rows 10-§4-3 to -8 wait on this mission, D14 in SB-P-1.13) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-ATT-01 handoff targets this mission's UDI contract | — |
| 10-§16 | C10@5c145ed7 | §16 Conversation History and Retention (rows 10-§16-4, -5 wait on this mission) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; touch: attachments referenced from history resolve through governed storage | — |
| 10-§18 | C10@5c145ed7 | §18 Error and Exception Behavior (failed upload, unsafe file) | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-FAIL-02 | — |
| 12-§4 | C12@6d48feff | §4 Basic Voice — Ledger transaction/credit/repayment input (12-§4-1 waits on this mission) | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-VOI-07 | SB-P-1.13 FPDR-2; FPDR-5 |
| 12-§15 | C12@6d48feff | §15 Voice privacy (12-§15-4 raw-audio retention waits on this mission) | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-VOI-02 | SB-P-1.13 FPDR-3; FDB-2 (open question; Stage 2 brief) |
| 12-§16 | C12@6d48feff | §16 Voice audit/provenance (12-§16-8 waits on this mission) | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13 | — |
| 12-§21 | C12@6d48feff | §21 Acceptance 1: credit voice input (12-§21-1 waits on this mission) | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-CMD-03 | SB-P-1.13 FPDR-2; FPDR-5 |
| 9-§9 | C9@649c55f3 | §9 Clarification — paid-versus-owed (9-§9-4: an owed balance is mature credit truth) | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | DELEGATED | D13 | L-DEL13; EIS13-CMD-03 | SB-P-1.13 FPDR-5; FDB-1 (open question; Stage 2 brief) |
| 14-§4 | C14@16914a83 | §4 Customer Credit Identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: credit/repayment recorded here at counterparty-reference level (A-BP103-S) | FDB-1 (open question; Stage 2 brief) |
| 14-§5 | C14@16914a83 | §5 Core Credit Facts (incl. outstanding balance) | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: 3-§9-7, 3-§9-12 | FDB-1 (open question; Stage 2 brief) |
| 14-§6 | C14@16914a83 | §6 Credit Recording through approved Ledger input paths | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: 3-§4-3 | FDB-1 (open question; Stage 2 brief) |
| 14-§7 | C14@16914a83 | §7 Repayment (distinct current Ledger state; identify correct credit relationship; update outstanding balance) | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: 3-§4-4, 3-§8-8 | FDB-1 (open question; Stage 2 brief) |
| 14-§17 | C14@16914a83 | §17 Corrections and Audit through the Ledger correction/audit model | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: 3-§8-* | — |
| 14-§21 | C14@16914a83 | §21 non-goal: duplicate customer-credit database separate from Ledger/customer identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: this mission's credit state is the base SB-P-1.16 must extend | FDB-1 (open question; Stage 2 brief) |
| 14-§22 | C14@16914a83 | §22 Acceptance 1 and 2 (credit entry creates correct customer balance; repayment reduces correct balance without duplicate revenue) | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: DC-02 | FDB-1 (open question; Stage 2 brief) |
| 15-§5 | C15@632f3402 | §5 Evidence Sources (merchant-uploaded evidence requires review; not automatically payment truth) | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: uploaded payment screenshots enter UDI/storage as evidence only | — |
| 15-§6 | C15@632f3402 | §6 Evidence Ingestion (raw evidence for audit; retention rules) | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: 25-§4-*, 25-§17-* | — |
| 15-§22 | C15@632f3402 | §22 Privacy and Security of financial evidence | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | A-BP105; touch: 25-§19-* | — |
| 7-§8 | C7@65ad91b2 | §8 Ledger Relationship (stock and Ledger link without duplication) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | DELEGATED | D17 | A-BP106; touch: 3-§9-9, 5-§7-4 | — |
| 17-§6 | C17@7943f74a | §6 Financial / Business Summary (sales/income, expenses/purchases, outstanding credit; no fabricated metrics) | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | DELEGATED | D17 | I-12 (17-§6 ASSIGNED SB-P-1.17); touch: existing dashboard totals after widening (D-03, DC-02) | FDB-1 (open question; Stage 2 brief) |
| 18-§9 | C18@6b96b10a | §9 Downgrade / Add-on Removal (preserve historical records) | OBL | BUILD NOW | CORE-COM | SB-P-1.19 | DELEGATED | D19 | A-BP108; touch: stored documents survive downgrade | — |
| 18-§11 | C18@6b96b10a | §11 Export and Merchant Data Rights | OBL | BUILD NOW | CORE-COM | SB-P-1.19 | DELEGATED | D19 | A-BP108; touch: 25-§17-2, 3-§10-* | — |
| 18-§12 | C18@6b96b10a | §12 Retention and Final Deletion (duration unresolved) | OBL | BUILD NOW | CORE-COM | SB-P-1.19 | DELEGATED | D19; DUF6 | A-BP108; touch: 25-§17-* | — |
| 19-§13 | C19@94aa6f24 | §13 Backup / Storage / Recovery visibility | OBL | BUILD NOW | INTERNAL | SB-P-1.19 | DELEGATED | D19 | A-BP108; touch: 25-§22-*, 25-§26-14 | — |
| 19-§15 | C19@94aa6f24 | §15 Merchant-content Access Boundary | OBL | BUILD NOW | INTERNAL | SB-P-1.19 | DELEGATED | D19 | A-BP108; touch: 5-§12-6, 3-§18-5 | — |
| 23-§12 | C23@2430e1c6 | §12 Image / Receipt / Document Experience reuses UDI | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | DELEGATED | D20 | A-BP109; touch: 5-§8-1 | — |
| 23-§18 | C23@2430e1c6 | §18 Media Storage and Retrieval (Meta URLs never permanent Business Memory) | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | DELEGATED | D20 | A-BP109; touch: 25-§13-1b | — |
| 2-§7 | C2@53635557 | §7 Read-only Intelligence Boundary over Ledger | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15 | A-BP104; touch: Ledger read model exposes no write path | — |
| 4-§6 | C4@ce940d25 | §6 Source-of-Truth Rule (Daily Intelligence reads Ledger and UDI status) | OBL | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15 | A-BP104; touch: 3-§14-2 | — |
| 1-§6 | C1@b392c8cb | §6 Customer Identity — Excel/CSV customer import through UDI | OBL | BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | A-BP107; touch: UDI domain adapter | — |
| 1-§8 | C1@b392c8cb | §8 Order Intake Channels — document/photo intake through UDI | OBL | BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | A-BP107; touch: 5-§7-6 | — |
| 1-§13 | C1@b392c8cb | §13 Delivery Staff Experience — delivery proof stored through the shared foundation | OBL | BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | A-BP107; touch: 25-§7-1 | — |
| 1-§16 | C1@b392c8cb | §16 COD and Payment Relationship — idempotent, auditable Ledger write/link | OBL | BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | A-BP107; touch: governed Ledger command (DTX) | — |
| 6-§6 | C6@ebacd183 | §6 Roster and Document Intake through UDI | OBL | BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | A-BP107; touch: 5-§7-5 | — |
| 16-§5 | C16@420269d8 | §5 Document Intake through UDI | OBL | BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18 | A-BP107; touch: 5-§7-7 | — |
| 20-§9 | C20@56ed4d11 | §9 Existing Data Import through UDI | OBL | BUILD NOW | ACT | SB-P-1.19 | DELEGATED | D19 | A-BP108; BP §11 (onboarding imports); touch: UDI adapters | — |
| 13-§4 | C13@4426e8b1 | §4 Standard POS Bridge (manual CSV/file import coexists as fallback) | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | DELEGATED | D17 | A-BP106; touch: CSV import through UDI | — |
| 13-§6 | C13@4426e8b1 | §6 POS Data and Business Memory (imported events preserve source identity) | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | DELEGATED | D17 | A-BP106; touch: four-state Ledger provenance | — |

## H. Totals and reproducible counts

Counts below were produced by parsing this file's own table rows, not by hand. Reproduce from the repository root:

```bash
F=communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md
grep -cE '^\| (BP|[0-9]+)-§' "$F"
awk -F'|' '/^\| (BP|[0-9]+)-§/ {gsub(/^ +| +$/,"",$9); print $9}' "$F" | sort | uniq -c
awk -F'|' '/^\| (BP|[0-9]+)-§/ {gsub(/^ +| +$/,"",$5); print $5}' "$F" | grep -c '^SCN$'
```

| Part | Rows | IN SCOPE | ASSIGNED | DELEGATED | N/A | OUT OF BUILD | UFD | ESCALATED |
|---|---|---|---|---|---|---|---|---|
| A Contract 3 | 164 | 143 | 16 | 1 | 4 | 0 | 0 | 0 |
| B Contract 5 | 153 | 137 | 11 | 1 | 4 | 0 | 0 | 0 |
| C Contract 22 | 120 | 61 | 8 | 42 | 9 | 0 | 0 | 0 |
| D Contract 25 | 166 | 156 | 2 | 0 | 7 | 0 | 1 | 0 |
| E Inherited (24, 10, 9, 12, 17, 7) | 38 | 34 | 4 | 0 | 0 | 0 | 0 | 0 |
| F Build Plan | 68 | 33 | 3 | 3 | 8 | 20 | 1 | 0 |
| G Delegates | 57 | 0 | 0 | 57 | 0 | 0 | 0 | 0 |
| **Total** | **766** | **564** | **44** | **104** | **32** | **20** | **2** | **0** |

Acceptance-scenario and worked-example rows (`SCN`): 85. Section 3 of `03-stage2-obligation-inventory.md` reconciles them to the numbered acceptance scenarios of each opened source.

Owning-mission distribution: SB-P-1.12 52, SB-P-1.13 21, SB-P-1.14 616, SB-P-1.15 12, SB-P-1.16 15, SB-P-1.16 / SB-P-1.17 / SB-P-1.18 1, SB-P-1.17 11, SB-P-1.17 / SB-P-1.18 3, SB-P-1.18 16, SB-P-1.19 9, SB-P-1.20 10.

Dependency incidence across `IN SCOPE` rows (a row may carry several codes): `D12` 226, `D13` 93, `D15` 7, `D17` 3, `D19` 1, `D20` 2, `DAI` 97, `DLEG` 11, `DR2` 124, `DTX` 42, `DUF6` 2.

Rows touched by open Stage 2 questions: `FDB-1` 24, `FDB-2` 8. These marks record no decision and change no disposition.

No row is `ESCALATED`. No row is `ALREADY DEMONSTRATED`. Two rows are `UNRESOLVED FOUNDER DECISION` (`25-§17-1`, `BP-§15-6`), both the Build Plan Section 15 item 6 retention duration; neither is on this mission's critical path.
