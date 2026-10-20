# SB-P-1.17 — Stage 2 Populated FCTM

**Mission:** SB-P-1.17 — Manager Operations\
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation (Section 3.2, Section 6)\
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL STAGE 2 REVIEW AND FOUNDER HUMAN MERGE`\
**Prepared by:** Claude Code, Definition Actor (appointed by `02-stage1-intake-pack-and-definition-actor-appointment.md` §4, blob `79c684e8`), under `05-stage2-discovery-authorization.md` (blob `94e1e36d`)\
**Baseline:** `main@44895d2c0b2f4ff46f3f750bb7eec4cc8b80423d` (PR #988 merge), 2026-10-20\
**Opened by:** `communication/missions/SB-P-1.17/mission-control/03-stage1-fctm-opened.md` (blob `e6e97538`); that record is not modified\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This matrix is an accounting of approved truth. It adds no product decision and reopens no approved decision. Requirement text lives only in the source contracts; rows hold pointers, short labels, dispositions and citations. The independent obligation inventory is `02-stage2-obligation-inventory.md`; the set comparison between the two is in `05-stage2-completion-report.md` Section 3.

**No row is `ALREADY DEMONSTRATED` and no row is `DEMONSTRATED`.** Upstream SB-P-1.12 to SB-P-1.16 outputs are locked specifications with Implementation Authorization WITHHELD. The repository foundations named in Section 0.7 (`F-*` codes) are repository text only, never runtime evidence.

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force.`

## 0. How to read this matrix

### 0.1 Columns

| Column | Meaning |
|---|---|
| Row ID | `<contract>-§<section>-<ordinal>`. For C7, C13 and C17 the ordinal counts the section's separately verifiable units (bullets, numbered items, prose paragraphs) in source order, skipping lead-ins. A whole-section row has no ordinal. Suffix `a`/`b` splits one unit between two owning missions or slices. Build Plan rows use `BP-§<section>-<suffix>`; GPCV rows `GPCV-§<section>-<item>` or `GPCV-R<row>`. Upstream identifiers are kept exactly (Section 0.9). |
| Source @ blob | Source code and the first eight characters of its blob at the baseline (full SHAs in Section 0.2). |
| Exact source pointer | Section, subsection label where present, and parser locator (`b<k>` k-th bullet, `n<k>` k-th numbered item, `p<k>` k-th prose paragraph within the section), followed by a short label. The label is a pointer, not requirement text. |
| Kind | Row kind (Section 0.5). |
| Build commitment | Global Product Completion View value, preserved verbatim. |
| Commercial | Commercial classification code (Section 0.4). |
| Owning mission | The mission that owns the obligation under an approved source. Joint upstream assignments are kept verbatim. |
| Disposition | Source 18 Section 3.2 item 3 vocabulary only. |
| Dependency / hold | Dependency or hold code (Section 0.6). A dependency never moves a row (Source 18 §3.2 item 5). |
| Evidence / citation | Implementation-evidence code and disposition citation (Section 0.7). |
| Founder decision | Founder Decision ID where a row rests on one (Section 0.8). |
| WS | Draft documentary workstream from the Intake Pack §5 (`A`–`F` = WS17-A to WS17-F). Populated for `IN SCOPE` rows only. Not an implementation allocation. |
| Verification target | Planned evidence class seed for `IN SCOPE` rows (Section 0.10). Not a test and not a result. |

The Stage 2 authorization's shorthand `IN SCOPE / PARTIAL / OTHER MISSION / OUT OF SCOPE` is mapped onto the Source 18 vocabulary: partial or blocked obligations stay `IN SCOPE` with the dependency named; other-mission obligations are `DELEGATED` or `ASSIGNED TO LATER MISSION`; out-of-scope commitments are `OUT OF BUILD SCOPE` or `NOT APPLICABLE` with a reason.

### 0.2 Sources and blobs at the baseline

Every blob verified with `git rev-parse main@44895d2c:<path>`. Every primary-contract, Build Plan and GPCV blob equals the Stage 1 Intake Pack identities; no source drifted.

| Code | Path (under `docs/phase-1-mission-blueprint/smart-business-features/` unless stated) | Blob |
|---|---|---|
| `C7` | `07_Stock_Supplier_and_Reorder_Intelligence.md` | `65ad91b202def9cb4f42b97383bcc58475f59015` |
| `C13` | `13_POS_Counter_Intelligence_and_Closing_Cash.md` | `4426e8b1f9e856047759bdb03e2f5b83820f8cc0` |
| `C17` | `17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| `BP` | `00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| `GPCV` | `00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| `C1` | `01_Smart_Order_and_Delivery_Assistant.md` | `b392c8cb851683ea7bba1d6351c565a4c0c555ed` |
| `C2` | `02_Ask_CFO.md` | `53635557fb2907e0e9011613511c9f34b8548edf` |
| `C3` | `03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| `C4` | `04_Daily_Intelligence_Rhythm.md` | `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd` |
| `C5` | `05_Universal_Document_and_Receipt_Intelligence.md` | `80ac648e6764f0288f04a4591902ba029d01ab58` |
| `C9` | `09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| `C10` | `10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| `C11` | `11_Smart_Reminder_and_Delegated_Automation.md` | `e802745a93c3bacaebba5099aacfadbe52212bc8` |
| `C12` | `12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| `C15` | `15_Payment_Verification_and_Bank_Reconciliation.md` | `632f34026ee1cfe580f031e888777d50619eea2f` |
| `C18` | `18_Subscription_Payment_and_Account_Lifecycle.md` | `6b96b10aee35036b18afb3bba7a4950e7b36b7fb` |
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
| `FCTM-16` | `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `94dd52202ad040f64394f07f95389d02ffcc5dd0` |
| `BP-12` … `BP-16` | `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md` … `SB-P-1.16.md` | `77d52096`, `bbf65429`, `256828d2`, `0ab2ad6f`, `305571a6` |
| `EIS-12`, `EIS-14`, `EIS-16` | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`, `-1.14-EIS.md`, `-1.16-EIS.md` | `c444f750`, `899a0fe1`, `46fffd7b` |
| `FR-12-04`, `FR-12-09` | `communication/missions/SB-P-1.12/founder/04-stage6-builder-founder-decision-record.md`, `09-reference-cost-margin-permission-semantics.md` | `616b3bb7`, `84d61d4d` |
| `FPDR-16` | `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md` (canonical Founder record) | see `FCTM-16` §0.1 |

C6, C8, C14, C16 and C19 were screened (inventory Section 4) and contain no unit that concerns this mission's subject; they carry no row.

### 0.3 Stage 1 scaffold reconciliation

| Scaffold identity (`03-stage1-fctm-opened.md`) | Recorded blob | Blob at this baseline | Result |
|---|---|---|---|
| C7 — Stock, Supplier & Reorder Intelligence | `65ad91b202def9cb4f42b97383bcc58475f59015` | `65ad91b202def9cb4f42b97383bcc58475f59015` | MATCH |
| C13 — POS/Counter/Closing Cash | `4426e8b1f9e856047759bdb03e2f5b83820f8cc0` | `4426e8b1f9e856047759bdb03e2f5b83820f8cc0` | MATCH |
| C17 — Operational Dashboard/Manager Workspace | `7943f74a88c2922acc697115f336b68baf7a503a` | `7943f74a88c2922acc697115f336b68baf7a503a` | MATCH |
| Build Plan §10.6 | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | MATCH |
| Global Product Completion View | `ee76d920146008056781fced41be938675c4be0b` | `ee76d920146008056781fced41be938675c4be0b` | MATCH |

The scaffold's row schema is preserved. Its `Disposition & citation` field is split into `Disposition` and `Evidence / citation`; its `upstream/delegate dependency and hold` field is `Dependency / hold`; its `verification target and evidence ID` field is `Verification target` (planned class only, since no evidence exists); its `unresolved/T1–T8 trigger` field is carried by `U-nn` citations into Truth Pack Part D.

### 0.4 Commercial classification codes

| Code | Source |
|---|---|
| `MGR/ADDON` | Manager core; Smart Stock add-on path for Ledger (GPCV row 7; C7 header) |
| `MGR-CORE` | Manager core / standard integration layer (GPCV row 13; C13 header) |
| `MGR+LDG` | Manager core; role-appropriate Ledger surfaces (GPCV row 17; C17 header) |
| `CORE-LM` | Core, Ledger + Manager (GPCV rows 2, 3, 4, 12, 15) |
| `CORE-FDN` | Core shared foundation (GPCV rows 5, 9, 11, 21, 25) |
| `CORE-ARCH` | Core cross-product architecture (GPCV row 22) |
| `CORE-INT` | Core shared intelligence foundation (GPCV row 24) |
| `CORE-CH` | Core shared channel or channel adapter (GPCV rows 10, 23) |
| `ADDON-LM` | Add-on for Ledger + Manager (GPCV row 1) |
| `CORE-PLAT` | Core platform commercial capability (GPCV row 18) |
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
| `SEC` | whole section with one disposition (one row) |
| `CONS` | consumer relationship: a reader of this mission's data, or this mission reading another's |
| `UFD` | Build Plan §15 unresolved Founder decision |
| `REJ` | rejection checked as must-not-appear |

### 0.6 Dependency and hold codes

| Code | Dependency | State at this baseline |
|---|---|---|
| `—` | None beyond this mission | — |
| `D12` | SB-P-1.12 authority kernel: memberships and active business (12:FR-04 F-02), roles, capability grants, participant identities incl. Supplier (EIS-ID-03), delegated automation (EIS-AUT-01, 21-§12), entitlements, isolation, audit | Specification locked; Implementation Authorization WITHHELD; not implemented (repository RLS is Owner-only, Δ-01) |
| `D13` | SB-P-1.13 Conversation/AI kernel, Human Language Layer, typed tools and confirmation | Specification locked; WITHHELD; not implemented |
| `D14` | SB-P-1.14 Business Memory: four-state Ledger incl. credit direction (`EIS14-LDG-02`), UDI incl. the opening-stock slice, governed storage, correction/audit | Specification locked; WITHHELD; not implemented (`transaction_type` is still `sale`/`purchase`) |
| `DTX` | The one governed transactions-family write path (PQ-2). No stock-to-Ledger, POS-sale or supplier-payment write may open a second path | Coordinated cut-over undecided; migration NOT AUTHORIZED |
| `D15` | SB-P-1.15 Reminder Engine, delegated-rule triggering, Notification Foundation (native only), Ask CFO, Daily Intelligence | Specification locked; WITHHELD; not implemented |
| `DSCH` | Scheduler / background-job runtime and business timezone | UNVERIFIED; activation NOT AUTHORIZED |
| `DAI` | AI provider behind the SB-P-1.13 gateway | UNVERIFIED; activation NOT AUTHORIZED |
| `DV` | Basic Voice provider behind SB-P-1.13 | UNVERIFIED; activation NOT AUTHORIZED |
| `DR2` | Approved durable object storage (SB-P-1.14) | UNVERIFIED; activation NOT AUTHORIZED |
| `D16` | SB-P-1.16 financial specification: one balance truth, supplier-side `owed_by_business` belongs here, FIN-01 PROVISIONAL, EQ16-01 to EQ16-03, OQ-02, OQ-05, U-08. The Stage 2 authorization's "residual C16 holds" is read as these SB-P-1.16 holds (Contract 16 Compliance Shield is not touched) | Specification locked; WITHHELD; not implemented |
| `DPAY` | Authenticated payment-evidence source (SB-P-1.16) | No source selected; NOT AUTHORIZED |
| `DNTF` | Approved out-of-app delivery channel (supplier or merchant notification) | None before SB-P-1.20; not inferred |
| `DPOS` | **New code.** Standard POS bridge provider/adapter: target POS products or interface, capability evidence (which fields a POS exposes), credentials, routing, failure, rollback (BP §5.4) | No POS selected or evidenced (U-02); external activation NOT AUTHORIZED |
| `DENT` | **New code.** Commercial entitlement state for the Ledger add-on path (SB-P-1.12 entitlement facts; SB-P-1.19 subscription lifecycle) | Specification only; Smart Stock Assistant price unresolved (BP §15 item 4) |
| `DSEC` | **New code.** Approved server-side secret home for POS integration credentials (mirrors SB-P-1.16 EQ16-02) | Not established |
| `D17` | This mission's own stock, supplier, reorder, POS and closing data, as consumed by a row owned elsewhere | Not started (this mission) |
| `D18`, `D19`, `D20` | SB-P-1.18 orders/staff; SB-P-1.19 onboarding/lifecycle; SB-P-1.20 WhatsApp | Not started |
| `DUF6` | Build Plan §15 item 6 (retention after cancellation/non-payment) | Open; screen in Truth Pack Part D (U-11) |

Several codes in one cell are separated by `;`.

### 0.7 Evidence and citation codes

Implementation evidence is **repository text at `main@44895d2c` only** (Truth Pack Δ-01). No runtime, production or delivery-repository state was inspected or is claimed.

| Code | Meaning |
|---|---|
| `F-INV` | Foundation exists in repository text: `inventory_items` (business-scoped, `base_unit`), append-only `inventory_movements` (`opening_stock`, `stock_increase`, `stock_decrease`, `adjustment_*`, `correction`), `inventory_movement_idempotency_keys`, Owner-only RLS (SB-P-1.10). Not demonstrated for this contract |
| `F-PPM` | Product & Price Master foundation in repository text: `catalog_products`, selling price, reference cost and tax event tables, product↔inventory link events, import batches with preview tokens (SB-P-1.11). Not demonstrated for this contract |
| `F-DASH` | Dashboard shell in repository text (`src/routes/_authenticated/dashboard.tsx`): business identity cards and daily totals; Owner-only |
| `F-TXN` | `transactions` with free-text party label ("Supplier name"); no supplier identity |
| `NI-SUP` | Not implemented: no supplier identity, supplier-product relation or purchase-history object |
| `NI-RO` | Not implemented: no threshold, low/slow-stock signal, reorder suggestion, approval or standing rule |
| `NI-EXP` | Not implemented: no batch, expiry/freshness field or wastage/spoilage movement type |
| `NI-POS` | Not implemented: no POS integration, external event identity, mapping or counter signal |
| `NI-CC` | Not implemented: no cash count, expected cash or variance object |
| `NI-ROLE` | Not implemented: no Manager or Employee role or grant; RLS is `owner_id`-scoped |
| `NI-MGR` | Not implemented: no Manager-depth workspace surface |
| `NI-UDI` | Not implemented: no shared UDI pipeline (parser primitives exist, GPCV row 5) |
| `NI-LDG` | Not implemented: no stock↔Ledger event linkage; `transaction_type` is `sale`/`purchase` |
| `NI-ENT` | Not implemented: no entitlement state |
| `NI-CRD`, `NI-PAY` | Not implemented: no customer-credit or payment-evidence objects (SB-P-1.16 codes) |
| `A-BP106` | Build Plan §9 row 6 and §10.6 assign the requirement to SB-P-1.17 |
| `A-BP106-FRV` | Build Plan §10.6 Founder Runtime Verification scenarios |
| `A-BP103-S` | Build Plan §10.3 search-sequencing clarification (SB-P-1.17 / SB-P-1.18) |
| `A-BP107`, `A-BP108`, `A-BP109` | Build Plan §9 rows 7–9 and §§10.7–10.9 (SB-P-1.18 to SB-P-1.20) |
| `I-12` to `I-16` | Assignment or disposition inherited from the canonical SB-P-1.12 to SB-P-1.16 FCTM (blobs in Section 0.2) |
| `L-DEL12` to `L-DEL18` | Owned by that mission; consumed as specification |
| `L-X20` | Native slice here; WhatsApp-channel slice belongs to SB-P-1.20 (BP §9 row 9) |
| `L-NEG` | Contract's own non-goal or must-not, checked as must-not-appear |
| `L-NARR`, `L-HIST`, `L-PROV`, `L-DEP` | Narrative, historical, provenance or dependency cross-reference content |
| `U-nn`, `Δ-nn`, `DC-nn` | Truth Pack Part D unresolved item, Part C Delta item, Part B derived constraint (`03-stage2-mission-truth-pack.md`) |

### 0.8 Founder decision IDs

Namespaced by mission. `12:FR-04` and `12:FR-09`: SB-P-1.12 Founder Decision Records 04 (F-02 multiple strictly isolated memberships; F-03 Reference Cost and margin individually delegable, Owner-only by default) and 09 (Reference Cost and margin output boundary). `14:FPDR-1`: SB-P-1.14 decision underlying `EIS14-LDG-02` credit direction (`owed_to_business` / `owed_by_business`). `16:FPDR-1`: SB-P-1.16 shared customer identity; "SB-P-1.17 and SB-P-1.18 retain their approved later directory, search and related capabilities". No SB-P-1.17 Founder decision exists.

### 0.9 Identifier preservation and inherited-row reconciliation

Upstream identifiers are kept exactly. **Upstream missions did not all use the same ordinal scheme**: SB-P-1.12, SB-P-1.13 and SB-P-1.14 numbered some sections by their own grouping (for example SB-P-1.13 `24-§9-4` is "model history is not authoritative", not the fourth bullet; SB-P-1.14 `3-§9-8` is "linked document"). For delegated contracts this matrix therefore uses the upstream identifier of the touched unit and never a parser ordinal that would collide (Truth Pack Δ-12). For C7, C13 and C17 the parser ordinal is used except where an upstream identifier exists:

| # | Inherited from | Identifier(s) | Upstream disposition | Rows in this FCTM |
|---|---|---|---|---|
| 1 | SB-P-1.12 | `7-§2`, `7-§3`, `7-§4`, `7-§5`, `7-§13`, `7-§14`, `7-§16` (whole-section, ASSIGNED SB-P-1.17) | ASSIGNED TO LATER MISSION | expanded to unit rows `7-§2-1`…`7-§16-6` |
| 2 | SB-P-1.12 | `7-§1`, `7-§17`, `7-§18` (NOT APPLICABLE for SB-P-1.12) | NOT APPLICABLE | `7-§1-1`, `7-§1-2`, `7-§17` (same disposition), `7-§18-1` (GATE) |
| 3 | SB-P-1.12 | `7-§7`, `7-§9`, `7-§12` (limited touched slices, IN SCOPE SB-P-1.12) | IN SCOPE (SB-P-1.12) | kept as `DELEGATED` rows; full obligation rows `7-§7-1`…`-4`, `7-§9-1`…`-3`, `7-§12-1`…`-9` added for SB-P-1.17 |
| 4 | SB-P-1.12 | `7-§8-1`…`7-§8-5` | ASSIGNED TO LATER MISSION | same identifiers (ordinals equal parser ordinals) |
| 5 | SB-P-1.12 | `7-§10-1`…`7-§10-4`, `7-§15-10`, `7-§15-12` | IN SCOPE (SB-P-1.12) | same identifiers, `DELEGATED` (U-09) |
| 6 | SB-P-1.12 / SB-P-1.14 | `7-§15-1`, `7-§15-3`…`-9`, `7-§15-11`; `7-§15-2a`/`-2b` | ASSIGNED / split by SB-P-1.14 | same identifiers |
| 7 | SB-P-1.14 | `7-§6-1`…`7-§6-5` (SB-P-1.14 split of §6 p1 into three, p3, p4) | 1, 3 ASSIGNED SB-P-1.17; 2, 4, 5 IN SCOPE SB-P-1.14 | same identifiers; **new** `7-§6-4b`, `7-§6-5b` add the SB-P-1.17 slice of the p3 and p4 rules that SB-P-1.14 scoped to opening stock (U-09) |
| 8 | SB-P-1.13 | `7-§11-1` (AI-may group), `7-§11-2` (AI must-not kernel slice) | ASSIGNED SB-P-1.17 / IN SCOPE SB-P-1.13 | `7-§11-1` expanded to children `7-§11-1.1`…`-1.6` (b1–b6); `7-§11-2` kept `DELEGATED` and the stock-feature slice added as `7-§11-2.1`…`-2.5` (b7–b11). Dotted children keep the inherited parent identifier unambiguous |
| 9 | SB-P-1.14 | `13-§4`, `13-§6` (DELEGATED to SB-P-1.17, section level) | DELEGATED | expanded to `13-§4-1`…`-10`, `13-§6-1`…`-6` |
| 10 | SB-P-1.16 | `13-§10` (NOT APPLICABLE for SB-P-1.16; "owned SB-P-1.17") | NOT APPLICABLE | expanded to `13-§10-1`…`-8` |
| 11 | SB-P-1.12 | `17-§1`, `17-§2`, `17-§3`, `17-§20`, `17-§23`, `17-§24`, `17-§25` (NOT APPLICABLE for SB-P-1.12) | NOT APPLICABLE | expanded at unit level for SB-P-1.17, which owns the Manager workspace (A-BP106); `17-§24` stays one PROV row |
| 12 | SB-P-1.12 / SB-P-1.16 | `17-§4`, `17-§6`, `17-§7`, `17-§8`, `17-§15`, `17-§17`, `17-§19` | ASSIGNED TO LATER MISSION | expanded to unit rows |
| 13 | SB-P-1.12 | `17-§13-1`…`-4`, `17-§14-1`…`-7`, `17-§16-1`, `17-§18-1`, `-2`, `-4`, `17-§21-4`, `17-§22-2`, `-3`, `-9`, `-10a` | IN SCOPE (SB-P-1.12) | same identifiers, `DELEGATED` (U-09) |
| 14 | SB-P-1.12 | `17-§16-2`, `17-§18-3`, `-5`, `17-§21-1`…`-3`, `-5`, `17-§22-1`, `-5`, `-6`, `-10b` | ASSIGNED TO LATER MISSION | same identifiers, `IN SCOPE`; **new** `17-§16-3` rows §16 p2, which no upstream row carried |
| 15 | SB-P-1.12 | `17-§9`, `17-§10` | ASSIGNED SB-P-1.18 | same identifiers, unchanged |
| 16 | SB-P-1.13 | `17-§5-1`…`-8`, `17-§22-4`, `-8` | IN SCOPE (SB-P-1.13) | same identifiers, `DELEGATED` |
| 17 | SB-P-1.14 / SB-P-1.15 | `17-§12-1`, `-2`; `17-§11-1`…`-3`, `17-§22-7` | IN SCOPE (SB-P-1.14 / SB-P-1.15) | same identifiers, `DELEGATED` |
| 18 | SB-P-1.13 / SB-P-1.14 / SB-P-1.15 / SB-P-1.16 | `9-§12-8`, `10-§13-6`, `12-§4-4`, `12-§7-7`, `24-§18-3`, `24-§21-3`, `5-§4-10`, `22-§17-2`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-10`, `3-§15-11`, `BP-§10.3-S2` | ASSIGNED TO LATER MISSION (SB-P-1.17, joint where stated) | same identifiers, `IN SCOPE`; joint owners kept verbatim |

The five upstream FCTMs hold 157 lines naming SB-P-1.17 or a C7, C13 or C17 identifier: 137 unique identifiers. 102 appear here unchanged; the other 35 are section-level or group identifiers whose unit rows appear here (completion report Section 4). None is missing.

### 0.10 Verification target seeds

`RT` functional runtime test; `NEG` negative or denial test; `IDEM` duplicate, retry and replay test; `INSP` design or document inspection (reuse and rule rows); `EXP` experience and language review; `FRV-A`, `FRV-B` Founder-reserved Build Plan §10.6 Scenarios A and B; `GATE` completion accounting. These are planning seeds for the Stage 4 Verification mapping, not tests, results or evidence.

### 0.11 Expansion method

C7, C13 and C17 are expanded completely: every bullet, numbered item and non-lead-in prose paragraph is its own row, generated by a deterministic parser from the source blob (inventory Section 1). Lead-ins (a prose paragraph ending in `:`) are listed in the inventory and carry no obligation of their own. A section is one row only when the whole section has one non-`IN SCOPE` disposition (`7-§17`, `13-§23`, `17-§9`, `17-§10`, `17-§24`). Delegated contracts are rowed at the touched unit under the owning mission's identifier, or at section level where an upstream row is section level. A contract-wide keyword screen of every other contract checked that no touched unit lacks a row (inventory Section 4).

## A. Contract 7 — Stock, Supplier & Reorder Intelligence (117 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7-§1-1 | C7@65ad91b2 | §1 p1: This feature family helps merchants understand what stock exists, what is moving, what is a… | EXP | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | I-12 (7-§1, expanded here); A-BP106 | — | A | EXP |
| 7-§1-2 | C7@65ad91b2 | §1 p2: It should reduce stock loss, dead capital and mental tracking without forcing a rigid ERP o… | PRIN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | I-12 (7-§1, expanded here); A-BP106 | — | A | EXP |
| 7-§2-1 | C7@65ad91b2 | §2 b1: item/product identity; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | F-INV; F-PPM; I-12 (7-§2); BP-§7-1 (SB-P-1.12) | — | A | RT |
| 7-§2-2 | C7@65ad91b2 | §2 b2: quantity and unit tracking; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV; I-12 (7-§2); A-BP106 | — | A | RT |
| 7-§2-3 | C7@65ad91b2 | §2 b3: stock movement history; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV; I-12 (7-§2); A-BP106 | — | A | RT |
| 7-§2-4 | C7@65ad91b2 | §2 b4: opening stock/imports; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | F-INV (opening_stock movement type); I-12 (7-§2); UDI path rows 7-§6-* | — | A | RT |
| 7-§2-5 | C7@65ad91b2 | §2 b5: corrections with auditability; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV; I-12 (7-§2); A-BP106 | — | A | RT |
| 7-§2-6 | C7@65ad91b2 | §2 b6: low-stock awareness; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§2); A-BP106 (low-stock) | 17:FPDR-6 | A | RT; FRV-A |
| 7-§2-7 | C7@65ad91b2 | §2 b7: expiry/freshness awareness where relevant data exists; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | NI-EXP; I-12 (7-§2); A-BP106 ('where data supports it'); DC-07 | — | A | RT |
| 7-§2-8 | C7@65ad91b2 | §2 b8: slow-moving/dead-capital awareness; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§2); A-BP106 (slow-stock) | — | A | RT |
| 7-§2-9 | C7@65ad91b2 | §2 b9: wastage/spoilage recording where relevant; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-EXP; I-12 (7-§2); A-BP106 (wastage); Δ-07 | — | A | RT |
| 7-§2-10 | C7@65ad91b2 | §2 b10: links to catalog/pricing and business events; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14; DTX | F-PPM (product↔inventory link events); I-12 (7-§2) | — | A | RT |
| 7-§2-11 | C7@65ad91b2 | §2 b11: owner/manager search and summaries. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13 | NI-ROLE; I-12 (7-§2); A-BP106 | — | A | RT |
| 7-§2-12 | C7@65ad91b2 | §2 p2: Exact unit-conversion, batch and costing mechanics belong to Blueprint/EIS design where not… | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | I-12 (7-§2); DC-07 (mechanics deferred to Blueprint/EIS) | — | A | INSP |
| 7-§3-1 | C7@65ad91b2 | §3 p1: Supplier identity should be business-scoped and reusable across purchasing/reorder workflow… | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | NI-SUP; I-12 (7-§3); A-BP106; 22-§5-6 (SB-P-1.12, EIS-ID-03) | — | A | RT |
| 7-§3-2 | C7@65ad91b2 | §3 b1: supplier name/contact; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | NI-SUP; I-12 (7-§3); I-16 (7-§3); A-BP106 | — | A | RT |
| 7-§3-3 | C7@65ad91b2 | §3 b2: supplied products/items; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | NI-SUP; I-12 (7-§3); I-16 (7-§3); A-BP106 | — | A | RT |
| 7-§3-4 | C7@65ad91b2 | §3 b3: purchase history; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-SUP; F-TXN (free-text party only); I-12 (7-§3); U-13 | 17:FPDR-5 | A | RT |
| 7-§3-5 | C7@65ad91b2 | §3 b4: recent/typical prices where supported; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-SUP; I-12 (7-§3); DC-05; U-06 | 12:FR-09; 17:FPDR-4 | A | RT |
| 7-§3-6 | C7@65ad91b2 | §3 b5: order/communication history; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; DNTF | NI-SUP; I-12 (7-§3); U-05 | 17:FPDR-3 | A | RT |
| 7-§3-7 | C7@65ad91b2 | §3 b6: payment/credit relationship where authorized; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14; DTX; D16 | NI-SUP; I-16 (7-§3; supplier-side owed_by_business); DC-04; U-07 | 14:FPDR-1 | A | RT |
| 7-§3-8 | C7@65ad91b2 | §3 b7: preferred/alternate supplier context. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | NI-SUP; I-12 (7-§3); I-16 (7-§3); A-BP106 | — | A | RT |
| 7-§3-9 | C7@65ad91b2 | §3 p3: Suppliers do not receive merchant business intelligence. | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | L-NEG; I-12 (7-§3); 21-§13-1 (SB-P-1.12) | — | A | NEG |
| 7-§4-1 | C7@65ad91b2 | §4 p1: Smart Business may suggest that stock needs replenishment based on authorized data. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14 | NI-RO; I-12 (7-§4); A-BP106 | — | B | RT; FRV-A |
| 7-§4-2 | C7@65ad91b2 | §4 b1: current stock; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14 | NI-RO; I-12 (7-§4); A-BP106 | — | B | RT; FRV-A |
| 7-§4-3 | C7@65ad91b2 | §4 b2: observed movement; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14 | NI-RO; I-12 (7-§4); A-BP106 | — | B | RT; FRV-A |
| 7-§4-4 | C7@65ad91b2 | §4 b3: configured threshold/target; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14 | NI-RO; I-12 (7-§4); A-BP106 | — | B | RT; FRV-A |
| 7-§4-5 | C7@65ad91b2 | §4 b4: recent purchase/supplier context; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14 | NI-RO; I-12 (7-§4); DC-05; U-06 | 12:FR-09; 17:FPDR-4 | B | RT; FRV-A |
| 7-§4-6 | C7@65ad91b2 | §4 b5: expiry or overstock risk where relevant. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14 | NI-RO; I-12 (7-§4); A-BP106 | — | B | RT; FRV-A |
| 7-§4-7 | C7@65ad91b2 | §4 p3: The system must not fabricate demand forecasts or supplier availability. | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14 | L-NEG; I-12 (7-§4); 24-§22 (SB-P-1.13) | — | B | NEG |
| 7-§5-1 | C7@65ad91b2 | §5 p2: observe → suggest → Owner/authorized Manager reviews → confirm/modify/reject → approved sup… | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; DNTF | NI-RO; I-12 (7-§5); A-BP106 ('Owner-confirmed reorder by default'); U-01; U-05 | 17:FPDR-1; 17:FPDR-3 | B | RT; NEG; FRV-A |
| 7-§5-2 | C7@65ad91b2 | §5 p3: Automatic execution is allowed only where the Owner has explicitly created a bounded standi… | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D15; DSCH | NI-RO; I-12 (7-§5); A-BP106 ('bounded delegated reorder'); 21-§12-1–5 (SB-P-1.12); 11-§12-2 (SB-P-1.15) | — | B | RT; NEG; FRV-A |
| 7-§5-3 | C7@65ad91b2 | §5 p4: A trigger firing is not itself permission. | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D15 | L-NEG; I-12 (7-§5); 11-§12-3 (SB-P-1.15) | — | B | NEG |
| 7-§5-4 | C7@65ad91b2 | §5 p5: Examples of bounded rule dimensions may include item, supplier, quantity/value ceiling, fre… | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D15 | I-12 (7-§5); DC-03 (exact schema belongs to EIS) | — | B | INSP; NEG |
| 7-§6-1 | C7@65ad91b2 | §6 p1 (part): stock lists reuse Universal Document Intelligence | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-UDI; I-14 (7-§6-1 ASSIGNED SB-P-1.17); A-BP106 (W12) | — | F | RT |
| 7-§6-2 | C7@65ad91b2 | §6 p1 (part): opening-stock sheets reuse Universal Document Intelligence | OBL | BUILD NOW | MGR/ADDON | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (7-§6-2 IN SCOPE SB-P-1.14); GPCV §11 | — | F | — |
| 7-§6-3 | C7@65ad91b2 | §6 p1 (part): supplier invoices reuse UDI (inventory side; Ledger purchase side is 5-§7-4) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-UDI; NI-SUP; I-14 (7-§6-3 ASSIGNED SB-P-1.17); A-BP106 | — | F | RT |
| 7-§6-4 | C7@65ad91b2 | §6 p3: file/photo → interpretation → preview → clarification → confirmation → validated update (opening-stock slice) | RULE | BUILD NOW | MGR/ADDON | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (7-§6-4 IN SCOPE SB-P-1.14, opening-stock slice) | — | F | — |
| 7-§6-4b | C7@65ad91b2 | §6 p3: same consequential-import pattern for other stock documents and supplier invoices (slice added here) | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-UDI; A-BP106 (W12); split of the unit carried by 7-§6-4; U-09 | — | F | RT; IDEM |
| 7-§6-5 | C7@65ad91b2 | §6 p4: no isolated import truth bypassing inventory audit/idempotency controls (SB-P-1.14 row) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (7-§6-5 IN SCOPE SB-P-1.14) | — | F | — |
| 7-§6-5b | C7@65ad91b2 | §6 p4: same must-not for SB-P-1.17 stock-document and bulk-stock paths (slice added here) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | L-NEG; A-BP106 (W12 'not a third import stack'); split of 7-§6-5; U-09 | — | F | NEG; IDEM |
| 7-§7 | C7@65ad91b2 | §7 limited slice: no competing/duplicate stock-linked pricing path (SB-P-1.12 touched scope) | RULE | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§7 IN SCOPE SB-P-1.12, PARTIAL) | — | — | — |
| 7-§7-1 | C7@65ad91b2 | §7 p1: Inventory must work without POS. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | F-INV (manual stock path); A-BP106 | — | C | RT |
| 7-§7-2 | C7@65ad91b2 | §7 p2: Where a standard POS bridge is enabled, POS data may support sales and stock intelligence. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-12 (7-§7 limited slice, see DELEGATED row 7-§7); A-BP106 | — | C | RT |
| 7-§7-3 | C7@65ad91b2 | §7 p3: Custom client-specific POS modification inside Smart Business core is rejected; use standar… | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-6; BP-§16-7 | — | C | NEG; INSP |
| 7-§7-4 | C7@65ad91b2 | §7 p4: Conflicts between POS, manual, document and conversational stock updates must be resolved t… | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; DC-08 (precedence rules belong to EIS) | — | C | INSP; RT |
| 7-§8-1 | C7@65ad91b2 | §8 p1: stock and Ledger link business events where appropriate without duplicating them | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14; DTX | NI-LDG; I-12 (7-§8-1 ASSIGNED SB-P-1.17); I-14 (7-§8 DELEGATED to SB-P-1.17); 3-§15-10 | — | A | INSP; IDEM |
| 7-§8-2 | C7@65ad91b2 | §8 b1: confirmed purchase may create/associate inventory movement and Ledger expense | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14; DTX | NI-LDG; F-INV; I-12 (7-§8-2); 5-§7-4 (SB-P-1.14 Ledger side) | — | A | RT; IDEM |
| 7-§8-3 | C7@65ad91b2 | §8 b2: confirmed sale/order may affect stock through the approved business-event path | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14; DTX; DPOS | NI-LDG; I-12 (7-§8-3); order-side consumer 1-§10 (SB-P-1.18) | — | A | RT; IDEM |
| 7-§8-4 | C7@65ad91b2 | §8 b3: stock correction should not fabricate a financial transaction | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | L-NEG; F-INV (correction movement type); I-12 (7-§8-4) | — | A | NEG |
| 7-§8-5 | C7@65ad91b2 | §8 b4: supplier payment state is distinct from goods receipt state | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14; DTX; D16 | NI-SUP; I-12 (7-§8-5); DC-04 | 14:FPDR-1 | A | RT; INSP |
| 7-§9 | C7@65ad91b2 | §9 limited slice: no duplicate stock engine (SB-P-1.12 touched scope) | RULE | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§9 IN SCOPE SB-P-1.12) | — | — | — |
| 7-§9-1 | C7@65ad91b2 | §9 p1 <Manager>: Stock Intelligence is included as Manager operational capability. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | F-INV; A-BP106; GPCV row 7 ('Manager core') | — | A | RT |
| 7-§9-2 | C7@65ad91b2 | §9 p2 <Ledger>: Smart Stock Assistant is the add-on path for deeper stock intelligence. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; DENT | NI-ENT; GPCV row 7 ('Smart Stock add-on path for Ledger'); U-10; BP-§15-4 (price, not critical path) | — | A | RT |
| 7-§9-3 | C7@65ad91b2 | §9 p3 <Ledger>: Packaging must not create duplicate inventory engines. Both use the same shared stock found… | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | L-NEG; BP-§16 (no duplicate engines); GPCV row 7 'Not authorized now' | — | A | NEG; INSP |
| 7-§10-1 | C7@65ad91b2 | §10 p1 <Owner>: full authorized stock/supplier/reorder authority | OBL | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§10-1 IN SCOPE SB-P-1.12); U-09 | — | E | — |
| 7-§10-2 | C7@65ad91b2 | §10 p2 <Manager>: delegated operational authority only; reorder action only where explicitly permitted | OBL | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§10-2); U-01; U-09 | — | E | — |
| 7-§10-3 | C7@65ad91b2 | §10 p3 <Employee / Staff>: scoped stock operations if permitted; no Owner financial intelligence | OBL | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§10-3); U-09 | — | E | — |
| 7-§10-4 | C7@65ad91b2 | §10 p4 <Supplier>: only communication required for the approved supplier/order workflow | OBL | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§10-4); EIS-ID-03; U-09 | — | E | — |
| 7-§11-1.1 | C7@65ad91b2 | §11 b1: AI may summarize stock position (child of inherited group row 7-§11-1) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; DAI; D12 | NI-RO; I-13 (7-§11-1 ASSIGNED SB-P-1.17); I-12 (7-§11) | — | A | RT |
| 7-§11-1.2 | C7@65ad91b2 | §11 b2: AI may identify low/slow/expiry-risk items from authorized facts (child of inherited group row 7-§11-1) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; DAI; D12 | NI-RO; I-13 (7-§11-1 ASSIGNED SB-P-1.17); I-12 (7-§11) | — | A | RT |
| 7-§11-1.3 | C7@65ad91b2 | §11 b3: AI may suggest reorder quantities/ranges where evidence supports it (child of inherited group row 7-§11-1) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; DAI; D12 | NI-RO; I-13 (7-§11-1 ASSIGNED SB-P-1.17); I-12 (7-§11) | — | B | RT; FRV-A |
| 7-§11-1.4 | C7@65ad91b2 | §11 b4: AI may suggest supplier candidates from merchant history (child of inherited group row 7-§11-1) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; DAI; D12 | NI-RO; I-13 (7-§11-1 ASSIGNED SB-P-1.17); I-12 (7-§11) | — | B | RT |
| 7-§11-1.5 | C7@65ad91b2 | §11 b5: AI may explain anomalies neutrally (child of inherited group row 7-§11-1) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; DAI; D12 | NI-RO; I-13 (7-§11-1 ASSIGNED SB-P-1.17); I-12 (7-§11) | — | A | RT |
| 7-§11-1.6 | C7@65ad91b2 | §11 b6: AI may prepare drafts and ask clarification (child of inherited group row 7-§11-1) | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; DAI; D12 | NI-RO; I-13 (7-§11-1 ASSIGNED SB-P-1.17); I-12 (7-§11) | — | A | RT |
| 7-§11-2 | C7@65ad91b2 | §11 b7–b11: AI must-not kernel slice (SB-P-1.13 AI kernel) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (7-§11-2 IN SCOPE SB-P-1.13); realized by 24-§10, 24-§21, 24-§22 | — | F | — |
| 7-§11-2.1 | C7@65ad91b2 | §11 b7: AI must not invent stock quantities (stock-feature slice; kernel slice is 7-§11-2) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; D12 | L-NEG; I-13 (7-§11-2 kernel slice SB-P-1.13); A-BP106 | — | F | NEG |
| 7-§11-2.2 | C7@65ad91b2 | §11 b8: AI must not infer theft/fraud from discrepancies (stock-feature slice; kernel slice is 7-§11-2) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; D12 | L-NEG; I-13 (7-§11-2 kernel slice SB-P-1.13); A-BP106 | — | D | NEG |
| 7-§11-2.3 | C7@65ad91b2 | §11 b9: AI must not silently overwrite stock history (stock-feature slice; kernel slice is 7-§11-2) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; D12 | L-NEG; I-13 (7-§11-2 kernel slice SB-P-1.13); A-BP106 | — | F | NEG |
| 7-§11-2.4 | C7@65ad91b2 | §11 b10: AI must not place supplier orders without confirmation/delegated authority (stock-feature slice; kernel slice is 7-§11-2) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; D12 | L-NEG; I-13 (7-§11-2 kernel slice SB-P-1.13); A-BP106 | — | B | NEG |
| 7-§11-2.5 | C7@65ad91b2 | §11 b11: AI must not expose merchant financial intelligence to staff/suppliers (stock-feature slice; kernel slice is 7-§11-2) | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; D12 | L-NEG; I-13 (7-§11-2 kernel slice SB-P-1.13); A-BP106; 12:FR-09 | 12:FR-09 | F | NEG |
| 7-§12 | C7@65ad91b2 | §12 seam: Catalog/Product identity and Permission Engine reuse (SB-P-1.12 touched scope) | RULE | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§12 IN SCOPE SB-P-1.12) | — | — | — |
| 7-§12-1 | C7@65ad91b2 | §12 b1: Catalog/Product identity; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | F-PPM; BP-§7-1–5 (SB-P-1.12) | — | F | INSP |
| 7-§12-2 | C7@65ad91b2 | §12 b2: Business Memory; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | A-BP106; I-12 (7-§12 seam, see DELEGATED row 7-§12) | — | F | INSP |
| 7-§12-3 | C7@65ad91b2 | §12 b3: Permission Engine; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | A-BP106; I-12 (7-§12 seam, see DELEGATED row 7-§12) | — | F | INSP |
| 7-§12-4 | C7@65ad91b2 | §12 b4: Reminder Engine; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D15; DSCH | A-BP106; I-12 (7-§12 seam, see DELEGATED row 7-§12) | — | F | INSP |
| 7-§12-5 | C7@65ad91b2 | §12 b5: Customer/Supplier identity; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | 22-§5-6 (SB-P-1.12, EIS-ID-03); A-BP106 | — | F | INSP |
| 7-§12-6 | C7@65ad91b2 | §12 b6: Universal Document Intelligence; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | A-BP106; I-12 (7-§12 seam, see DELEGATED row 7-§12) | — | F | INSP |
| 7-§12-7 | C7@65ad91b2 | §12 b7: Conversation/Notification Engine; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D13; D15; DNTF | A-BP106; I-12 (7-§12 seam, see DELEGATED row 7-§12) | — | F | INSP |
| 7-§12-8 | C7@65ad91b2 | §12 b8: audit/idempotency foundation; | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | F-INV (idempotency keys); 22-§14, 22-§15 (SB-P-1.12) | — | F | INSP |
| 7-§12-9 | C7@65ad91b2 | §12 b9: POS integration layer where enabled. | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | DPOS | A-BP106; I-12 (7-§12 seam, see DELEGATED row 7-§12) | — | F | INSP |
| 7-§13-1 | C7@65ad91b2 | §13 b1: duplicate movement/import; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV (inventory_movement_idempotency_keys); I-12 (7-§13) | — | F | IDEM |
| 7-§13-2 | C7@65ad91b2 | §13 b2: unknown item; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§13); A-BP106 | — | F | RT; NEG |
| 7-§13-3 | C7@65ad91b2 | §13 b3: ambiguous item name; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§13); A-BP106 | — | F | RT; NEG |
| 7-§13-4 | C7@65ad91b2 | §13 b4: unit mismatch; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§13); A-BP106 | — | F | RT; NEG |
| 7-§13-5 | C7@65ad91b2 | §13 b5: negative/insufficient stock according to approved policy; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§13); A-BP106 | — | F | RT; NEG |
| 7-§13-6 | C7@65ad91b2 | §13 b6: correction conflicts; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§13); A-BP106 | — | F | RT; NEG |
| 7-§13-7 | C7@65ad91b2 | §13 b7: supplier unavailable; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§13); A-BP106 | — | F | RT; NEG |
| 7-§13-8 | C7@65ad91b2 | §13 b8: supplier/order communication failure; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14; DNTF | NI-SUP; I-12 (7-§13); U-05 | 17:FPDR-3 | F | RT; NEG |
| 7-§13-9 | C7@65ad91b2 | §13 b9: POS/manual conflict; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; I-12 (7-§13); DC-08 | — | F | RT; NEG |
| 7-§13-10 | C7@65ad91b2 | §13 b10: document parsing conflict; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | I-12 (7-§13); 7-§6-* UDI rows | — | F | RT; NEG |
| 7-§13-11 | C7@65ad91b2 | §13 b11: retry/idempotency; | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV; I-12 (7-§13) | — | F | IDEM |
| 7-§13-12 | C7@65ad91b2 | §13 b12: expired/invalid delegated automation rule. | OBL | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D15 | NI-RO; I-12 (7-§13); 21-§12-5 (SB-P-1.12) | — | F | RT; NEG |
| 7-§13-13 | C7@65ad91b2 | §13 p2: A stock ambiguity should block only the uncertain update, not unrelated business operations. | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | I-12 (7-§13); A-BP106 | — | F | RT; NEG |
| 7-§14-1 | C7@65ad91b2 | §14 p1: Stock intelligence must report facts and signals without accusation. | PRIN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; I-12 (7-§14); A-BP106; BP-§16-2 | — | D | NEG; EXP |
| 7-§14-2 | C7@65ad91b2 | §14 p2: Counter/POS discrepancy, wastage or shrinkage may be surfaced for review but must not becom… | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; I-12 (7-§14); A-BP106; BP-§16-2 | — | D | NEG; EXP |
| 7-§15-1 | C7@65ad91b2 | §15 b1: opening stock and normal movement history | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV; I-12 (7-§15-1 PARTIAL precedent) | — | A | RT |
| 7-§15-2a | C7@65ad91b2 | §15 b2: document/CSV import with preview and idempotency (opening-stock slice) | SCN | BUILD NOW | MGR/ADDON | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (7-§15-2a IN SCOPE SB-P-1.14) | — | F | — |
| 7-§15-2b | C7@65ad91b2 | §15 b2: document/CSV import with preview and idempotency (other stock documents) | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-UDI; I-14 (7-§15-2b ASSIGNED SB-P-1.17); A-BP106 | — | F | RT; IDEM |
| 7-§15-3 | C7@65ad91b2 | §15 b3: correction with audit trail | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV (correction movements); I-12 (7-§15-3) | — | A | RT |
| 7-§15-4 | C7@65ad91b2 | §15 b4: low-stock awareness | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§15-4) | — | A | RT |
| 7-§15-5 | C7@65ad91b2 | §15 b5: expiry/slow-moving signal where source data supports it | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-EXP; NI-RO; I-12 (7-§15-5) | — | A | RT |
| 7-§15-6 | C7@65ad91b2 | §15 b6: supplier identity/history | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12 | NI-SUP; I-12 (7-§15-6); U-13 | — | A | RT |
| 7-§15-7 | C7@65ad91b2 | §15 b7: reorder suggestion requiring confirmation | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13 | NI-RO; I-12 (7-§15-7); BP-§10.6-A1–A4 | — | B | RT; FRV-A |
| 7-§15-8 | C7@65ad91b2 | §15 b8: bounded standing rule executing only within stored authority | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D15; DSCH | NI-RO; I-12 (7-§15-8); 21-§12 (SB-P-1.12) | — | B | RT; NEG |
| 7-§15-9 | C7@65ad91b2 | §15 b9: POS bridge contribution without custom core modification | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-12 (7-§15-9) | — | C | INSP; RT |
| 7-§15-10 | C7@65ad91b2 | §15 b10: staff permission boundaries | SCN | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§15-10 IN SCOPE SB-P-1.12); U-09 | — | E | — |
| 7-§15-11 | C7@65ad91b2 | §15 b11: neutral handling of stock discrepancy | SCN | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (7-§15-11) | — | D | NEG; EXP |
| 7-§15-12 | C7@65ad91b2 | §15 b12: cross-business isolation | SCN | BUILD NOW | MGR/ADDON | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (7-§15-12 IN SCOPE SB-P-1.12); U-09 | — | E | — |
| 7-§16-1 | C7@65ad91b2 | §16 b1: blind automatic supplier procurement; | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-5; BP-§16-5 | — | F | NEG |
| 7-§16-2 | C7@65ad91b2 | §16 b2: duplicate stock engines for Ledger vs Manager; | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV row 7 'Not authorized now' | — | F | NEG |
| 7-§16-3 | C7@65ad91b2 | §16 b3: custom client POS changes inside core; | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-6; BP-§16-7 | — | F | NEG |
| 7-§16-4 | C7@65ad91b2 | §16 b4: AI accusation of theft/fraud from stock anomalies; | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-2; BP-§16-2 | — | F | NEG |
| 7-§16-5 | C7@65ad91b2 | §16 b5: silent precedence guessing among conflicting sources; | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; I-12 (7-§16); A-BP106 | — | F | NEG |
| 7-§16-6 | C7@65ad91b2 | §16 b6: historical fixed numeric thresholds treated as Product Truth without current validation. | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | L-NEG; DC-06 | 17:FPDR-6 | F | NEG |
| 7-§17 | C7@65ad91b2 | §17 whole section: Dependencies (p1) | SEC | BUILD NOW | MGR/ADDON | SB-P-1.17 | NOT APPLICABLE | — | L-DEP (dependencies carried in the Dependency / hold column); I-12 (7-§17 NOT APPLICABLE, same disposition) | — | — | — |
| 7-§18-1 | C7@65ad91b2 | §18 p1: Stock/Supplier/Reorder is complete only when inventory, supplier memory, advisory reorder,… | GATE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D12; D13; D14; D15; DPOS | I-12 (7-§18); completion requires every C7 BUILD NOW row demonstrated across missions (GPCV §4.4) | — | F | GATE |

## B. Contract 13 — POS Connection, Counter Intelligence & Closing Cash (159 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 13-§1-1 | C13@4426e8b1 | §1 p1: This feature lets Smart Business work beside an existing standard POS, ingest permitted sal… | EXP | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | NI-POS; A-BP106 | — | C | EXP |
| 13-§1-2 | C13@4426e8b1 | §1 p2: Smart Business must respect merchants who already use a POS. The product enriches the exist… | EXP | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | NI-POS; A-BP106 | — | C | EXP |
| 13-§2-1 | C13@4426e8b1 | §2 b1: connected Business Memory; | NARR | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — | — | — |
| 13-§2-2 | C13@4426e8b1 | §2 b2: meaningful stock/counter insight; | NARR | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — | — | — |
| 13-§2-3 | C13@4426e8b1 | §2 b3: visibility into unusual void/discount patterns; | NARR | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — | — | — |
| 13-§2-4 | C13@4426e8b1 | §2 b4: clear closing cash reconciliation; | NARR | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — | — | — |
| 13-§2-5 | C13@4426e8b1 | §2 b5: a conversational explanation of what deserves review. | NARR | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§4, 8, 10, 12) | — | — | — |
| 13-§2-6 | C13@4426e8b1 | §2 p2: The product should add clarity without turning AI into a fraud judge. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106; BP-§10.6-E2 | — | D | EXP |
| 13-§3-1 | C13@4426e8b1 | §3 b1: Respect existing merchant tools. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | D | EXP; INSP |
| 13-§3-2 | C13@4426e8b1 | §3 b2: Standard bridge, not forced replacement. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106; BP-§10.6-E1 | — | D | EXP; INSP |
| 13-§3-3 | C13@4426e8b1 | §3 b3: AI Assistant, Not AI Judge. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | D | EXP; INSP |
| 13-§3-4 | C13@4426e8b1 | §3 b4: Observe/report facts; Owner interprets meaning. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | D | EXP; INSP |
| 13-§3-5 | C13@4426e8b1 | §3 b5: No checkout punishment from model suspicion. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | D | EXP; INSP |
| 13-§3-6 | C13@4426e8b1 | §3 b6: Preserve auditability and source provenance. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | D | EXP; INSP |
| 13-§3-7 | C13@4426e8b1 | §3 b7: Custom client-specific core POS modification is rejected; adapt at integration/extension ed… | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-6; BP-§16-7 | — | D | NEG; INSP |
| 13-§4-1 | C13@4426e8b1 | §4 p1: The approved product direction includes a standard POS integration/bridge. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-14 (13-§4, expanded here); A-BP106 ('standard POS bridge adapters') | 17:FPDR-2 | C | RT |
| 13-§4-2 | C13@4426e8b1 | §4 b1: sales ingestion; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-14 (13-§4, expanded here); A-BP106 ('standard POS bridge adapters') | 17:FPDR-2 | C | RT |
| 13-§4-3 | C13@4426e8b1 | §4 b2: transaction/reference identity; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-14 (13-§4, expanded here); A-BP106 ('standard POS bridge adapters') | 17:FPDR-2 | C | RT; IDEM |
| 13-§4-4 | C13@4426e8b1 | §4 b3: product/item mapping; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; F-PPM; I-14 (13-§4) | 17:FPDR-2 | C | RT |
| 13-§4-5 | C13@4426e8b1 | §4 b4: quantity/price/discount/void information where the POS exposes it; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-14 (13-§4, expanded here); A-BP106 ('standard POS bridge adapters') | 17:FPDR-2 | C | RT |
| 13-§4-6 | C13@4426e8b1 | §4 b5: payment-method information where available; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-14 (13-§4, expanded here); A-BP106 ('standard POS bridge adapters') | 17:FPDR-2 | C | RT |
| 13-§4-7 | C13@4426e8b1 | §4 b6: timestamp/counter/operator identifiers where permitted; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; I-14 (13-§4); U-11 (operator data) | 17:FPDR-2 | C | RT |
| 13-§4-8 | C13@4426e8b1 | §4 b7: stock impact where configured; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14; DTX | NI-POS; I-14 (13-§4, expanded here); A-BP106 ('standard POS bridge adapters') | — | C | RT |
| 13-§4-9 | C13@4426e8b1 | §4 b8: closing/reconciliation support. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; I-14 (13-§4, expanded here); A-BP106 ('standard POS bridge adapters') | — | D | RT |
| 13-§4-10 | C13@4426e8b1 | §4 p3: A manual CSV/file import may coexist as import/fallback, but it must not be used to silentl… | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | I-14 (13-§4, 'CSV import through UDI'); A-BP106; 13-§20-7 | 17:FPDR-2 | C | INSP |
| 13-§5-1 | C13@4426e8b1 | §5 p1: Smart Business must not implement bespoke client-specific changes inside the core platform… | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | L-NEG; GPCV-§9-6; BP-§16-7 | — | C | NEG; INSP |
| 13-§5-2 | C13@4426e8b1 | §5 b1: standard connectors/adapters; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | C | INSP |
| 13-§5-3 | C13@4426e8b1 | §5 b2: documented APIs/files/webhooks where available; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | C | INSP |
| 13-§5-4 | C13@4426e8b1 | §5 b3: extension/integration layers; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | C | INSP |
| 13-§5-5 | C13@4426e8b1 | §5 b4: mapping/configuration at the edge. | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | C | INSP |
| 13-§5-6 | C13@4426e8b1 | §5 p3: If a POS cannot support the standard bridge safely, classify the integration limitation rat… | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106; U-02 | 17:FPDR-2 | C | INSP |
| 13-§6-1 | C13@4426e8b1 | §6 b1: native/manual Smart Business record; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; I-14 (13-§6, expanded here); A-BP106 | — | C | RT; IDEM |
| 13-§6-2 | C13@4426e8b1 | §6 b2: POS-origin sale/event; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; I-14 (13-§6, expanded here); A-BP106 | — | C | RT; IDEM |
| 13-§6-3 | C13@4426e8b1 | §6 b3: correction/reversal; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; I-14 (13-§6, expanded here); A-BP106 | — | C | RT; IDEM |
| 13-§6-4 | C13@4426e8b1 | §6 b4: duplicate/retry; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; I-14 (13-§6, expanded here); A-BP106 | — | C | RT; IDEM |
| 13-§6-5 | C13@4426e8b1 | §6 b5: reconciliation link. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; I-14 (13-§6, expanded here); A-BP106 | — | C | RT; IDEM |
| 13-§6-6 | C13@4426e8b1 | §6 p2: POS ingestion must not create duplicate revenue when the same event is later encountered th… | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14; DTX | L-NEG; I-14 (13-§6); 3-§15-11 | — | C | IDEM; NEG |
| 13-§7-1 | C13@4426e8b1 | §7 b1: product mapping exists; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; F-PPM; A-BP106 | — | C | RT |
| 13-§7-2 | C13@4426e8b1 | §7 b2: units/quantities are reliable; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; F-INV; A-BP106 | — | C | RT |
| 13-§7-3 | C13@4426e8b1 | §7 b3: the event is trusted; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; F-INV; A-BP106 | — | C | RT |
| 13-§7-4 | C13@4426e8b1 | §7 b4: the stock path is configured. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; F-INV; A-BP106 | — | C | RT |
| 13-§7-5 | C13@4426e8b1 | §7 p2: Conflicts between POS, manual stock, imports or documents must not be silently guessed. The… | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-POS; DC-08; 7-§7-4 | — | C | RT; NEG |
| 13-§8-1 | C13@4426e8b1 | §8 b1: voids; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 ('neutral counter review') | — | D | RT; FRV-B |
| 13-§8-2 | C13@4426e8b1 | §8 b2: unusually high discount activity; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 ('neutral counter review') | — | D | RT; FRV-B |
| 13-§8-3 | C13@4426e8b1 | §8 b3: repeated reversals; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 ('neutral counter review') | — | D | RT; FRV-B |
| 13-§8-4 | C13@4426e8b1 | §8 b4: unexpected price overrides; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 ('neutral counter review') | — | D | RT; FRV-B |
| 13-§8-5 | C13@4426e8b1 | §8 b5: unusual transaction timing/frequency; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 ('neutral counter review') | — | D | RT; FRV-B |
| 13-§8-6 | C13@4426e8b1 | §8 b6: closing-cash variance; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-CC; A-BP106 | — | D | RT; FRV-B |
| 13-§8-7 | C13@4426e8b1 | §8 b7: other evidence-backed counter signals. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 ('neutral counter review') | — | D | RT; FRV-B |
| 13-§8-8 | C13@4426e8b1 | §8 p2: The product should present these as review signals, not accusations. | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 ('neutral counter review') | — | D | EXP; FRV-B |
| 13-§8-9 | C13@4426e8b1 | §8 p4: Please review this counter activity. These voids/discounts are higher than the recent patte… | EXP | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106; illustrative wording, not fixed copy | — | D | EXP; FRV-B |
| 13-§8-10 | C13@4426e8b1 | §8 p6: This employee is stealing. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; BP-§16-2; GPCV-§9-2 | — | D | NEG; FRV-B |
| 13-§9-1 | C13@4426e8b1 | §9 p1: Observable anomalies can have legitimate explanations. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | A-BP106; illustrative example | — | D | EXP |
| 13-§9-2 | C13@4426e8b1 | §9 b1: Owner-approved festival discount; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; DPOS | A-BP106; illustrative example | — | D | RT |
| 13-§9-3 | C13@4426e8b1 | §9 b2: damaged-product adjustment; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; DPOS | A-BP106; illustrative example | — | D | RT |
| 13-§9-4 | C13@4426e8b1 | §9 b3: customer relationship discount; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; DPOS | A-BP106; illustrative example | — | D | RT |
| 13-§9-5 | C13@4426e8b1 | §9 b4: POS correction; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; DPOS | A-BP106; illustrative example | — | D | RT |
| 13-§9-6 | C13@4426e8b1 | §9 b5: staff action on Owner instruction. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; DPOS | A-BP106; illustrative example | — | D | RT |
| 13-§9-7 | C13@4426e8b1 | §9 p3: The product should allow authorized human context to be attached without deleting the origi… | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D14 | NI-POS; A-BP106 | — | D | RT; NEG |
| 13-§10-1 | C13@4426e8b1 | §10 b1: POS-reported cash sales; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-CC; I-16 (13-§10, adjacent to SB-P-1.16; owned here); A-BP106 ('closing-cash comparison') | — | D | RT |
| 13-§10-2 | C13@4426e8b1 | §10 b2: other payment methods; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14 | NI-CC; I-16 (13-§10, adjacent to SB-P-1.16; owned here); A-BP106 ('closing-cash comparison') | — | D | RT |
| 13-§10-3 | C13@4426e8b1 | §10 b3: cash opening/closing information; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D14 | NI-CC; I-16 (13-§10, adjacent to SB-P-1.16; owned here); A-BP106 ('closing-cash comparison') | — | D | RT |
| 13-§10-4 | C13@4426e8b1 | §10 b4: recorded expenses or cash movements; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D14; DTX | NI-CC; I-16 (13-§10, adjacent to SB-P-1.16; owned here); A-BP106 ('closing-cash comparison') | — | D | RT |
| 13-§10-5 | C13@4426e8b1 | §10 b5: refunds/voids/discount adjustments; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D14 | NI-CC; I-16 (13-§10, adjacent to SB-P-1.16; owned here); A-BP106 ('closing-cash comparison') | — | D | RT |
| 13-§10-6 | C13@4426e8b1 | §10 b6: actual cash count entered by authorized user; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | NI-CC; I-16 (13-§10); U-03 | 17:FPDR-1 | D | RT |
| 13-§10-7 | C13@4426e8b1 | §10 b7: resulting variance. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D14 | NI-CC; I-16 (13-§10); DC-09 | — | D | RT |
| 13-§10-8 | C13@4426e8b1 | §10 p2: A variance is a fact to review, not automatic proof of misconduct. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; BP-§16-2 | — | D | NEG; EXP |
| 13-§11-1 | C13@4426e8b1 | §11 p1: Night Closing Intelligence may consume approved POS/counter/closing-cash data for the Owner… | CONS | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15; DSCH | NI-CC; A-BP106; consumer 4-§5-10 (SB-P-1.15) | — | D | RT |
| 13-§11-2 | C13@4426e8b1 | §11 b1: sales summary; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15; DSCH | NI-CC; A-BP106; consumer 4-§5-10 (SB-P-1.15) | — | D | RT |
| 13-§11-3 | C13@4426e8b1 | §11 b2: cash variance; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15; DSCH | NI-CC; A-BP106; consumer 4-§5-10 (SB-P-1.15) | — | D | RT |
| 13-§11-4 | C13@4426e8b1 | §11 b3: unusual void/discount pattern; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15; DSCH | NI-CC; A-BP106; consumer 4-§5-10 (SB-P-1.15) | — | D | RT |
| 13-§11-5 | C13@4426e8b1 | §11 b4: stock-impact signal; | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15; DSCH | NI-CC; A-BP106; consumer 4-§5-10 (SB-P-1.15) | — | D | RT |
| 13-§11-6 | C13@4426e8b1 | §11 b5: items requiring review tomorrow. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15; DSCH | NI-CC; A-BP106; consumer 4-§5-10 (SB-P-1.15) | — | D | RT |
| 13-§11-7 | C13@4426e8b1 | §11 p3: Employees must not receive Owner-level closing intelligence merely because they used the PO… | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D15 | L-NEG; A-BP106; 4-§7 (SB-P-1.15) | — | D | NEG |
| 13-§12-1 | C13@4426e8b1 | §12 p1: Ask CFO may reason over authorized POS and closing data. | CONS | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D13; D15 | A-BP106; Ask CFO owned by SB-P-1.15 (2-§11-7) | — | E | RT |
| 13-§12-2 | C13@4426e8b1 | §12 b1: 'Why was cash lower than POS sales yesterday?' | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D13; D15 | A-BP106; Ask CFO owned by SB-P-1.15 (2-§11-7) | — | E | RT |
| 13-§12-3 | C13@4426e8b1 | §12 b2: 'Which discounts changed most this week?' | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D13; D15 | A-BP106; Ask CFO owned by SB-P-1.15 (2-§11-7) | — | E | RT |
| 13-§12-4 | C13@4426e8b1 | §12 b3: 'Did a stock item move unusually?' | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D13; D15 | A-BP106; Ask CFO owned by SB-P-1.15 (2-§11-7) | — | E | RT |
| 13-§12-5 | C13@4426e8b1 | §12 p3: Ask CFO remains read-only and must distinguish fact from hypothesis. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D15 | L-NEG; 2-§7 (SB-P-1.15); BP-§16-1 | — | E | NEG |
| 13-§13-1 | C13@4426e8b1 | §13 p1 <Owner>: Full authorized visibility and review. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | NI-ROLE; A-BP106; F-INV/F-DASH Owner-only RLS precedent | — | E | RT; NEG |
| 13-§13-2 | C13@4426e8b1 | §13 p2 <Manager>: Operational visibility only within Owner-delegated scope. No automatic access to Owner-only… | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | NI-ROLE; A-BP106; U-01 | 17:FPDR-1 | E | RT; NEG |
| 13-§13-3 | C13@4426e8b1 | §13 p3 <Employee/counter staff>: May operate permitted workflows and see only role-appropriate information. A staff user sho… | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | NI-ROLE; A-BP106; U-11 | — | E | NEG |
| 13-§13-4 | C13@4426e8b1 | §13 p4 <Platform/support>: No routine merchant financial browsing. Any support access follows purpose-limited governan… | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | L-NEG; A-BP106; EIS-SUP-01 (SB-P-1.12) | — | E | NEG |
| 13-§14-1a | C13@4426e8b1 | §14 p1: Owners ask about POS/counter/closing in English, Malayalam or Manglish — Conversation Workspace slice | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D13; DAI; D12 | NI-POS; A-BP106; 9-§12 (SB-P-1.13 layer) | — | E | RT |
| 13-§14-1b | C13@4426e8b1 | §14 p1: same — WhatsApp slice | OBL | BUILD NOW | MGR-CORE | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 (BP §9 row 9) | — | — | — |
| 13-§14-2 | C13@4426e8b1 | §14 p2: conversational surface reuses the same POS data and permission rules as the dashboard | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D13 | A-BP106; BP-§8-1 | — | E | INSP; NEG |
| 13-§15-1 | C13@4426e8b1 | §15 b1: lock a register; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106; BP-§16-2 | — | D | NEG |
| 13-§15-2 | C13@4426e8b1 | §15 b2: suspend an employee; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106; BP-§16-2 | — | D | NEG |
| 13-§15-3 | C13@4426e8b1 | §15 b3: reverse a transaction; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D14 | L-NEG; A-BP106; BP-§16-2 | — | D | NEG |
| 13-§15-4 | C13@4426e8b1 | §15 b4: change prices; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106; BP-§7 (price history in Product & Price Master) | — | D | NEG |
| 13-§15-5 | C13@4426e8b1 | §15 b5: block checkout; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106; BP-§16-2 | — | D | NEG |
| 13-§15-6 | C13@4426e8b1 | §15 b6: deduct wages; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; BP-§16-4; GPCV-§9-4 | — | D | NEG |
| 13-§15-7 | C13@4426e8b1 | §15 b7: accuse a person. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106; BP-§16-2 | — | D | NEG |
| 13-§15-8 | C13@4426e8b1 | §15 p2: Any consequential correction/action follows the appropriate human-confirmed feature workflo… | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D13 | A-BP106; BP-§6.2 | — | D | RT |
| 13-§16-1 | C13@4426e8b1 | §16 b1: POS connection unavailable; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | F | RT; NEG |
| 13-§16-2 | C13@4426e8b1 | §16 b2: duplicate event; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | F | IDEM |
| 13-§16-3 | C13@4426e8b1 | §16 b3: missing product mapping; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106 | — | F | RT; NEG |
| 13-§16-4 | C13@4426e8b1 | §16 b4: incompatible unit/price; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | F | RT; NEG |
| 13-§16-5 | C13@4426e8b1 | §16 b5: out-of-order event; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | F | IDEM |
| 13-§16-6 | C13@4426e8b1 | §16 b6: correction/reversal; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | F | RT; NEG |
| 13-§16-7 | C13@4426e8b1 | §16 b7: partial sync; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | F | RT; NEG |
| 13-§16-8 | C13@4426e8b1 | §16 b8: stale integration credentials; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; DSEC | NI-POS; A-BP106; DC-10 | — | F | RT; NEG |
| 13-§16-9 | C13@4426e8b1 | §16 b9: closing count missing; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | NI-CC; A-BP106 | — | F | RT; NEG |
| 13-§16-10 | C13@4426e8b1 | §16 b10: variance unresolved; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | NI-CC; A-BP106 | — | F | RT; NEG |
| 13-§16-11 | C13@4426e8b1 | §16 b11: integration source conflict. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; DC-08 | — | F | RT; NEG |
| 13-§16-12 | C13@4426e8b1 | §16 p2: A POS outage must not stop manual Smart Business operation where safe. | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | F-INV (manual path); A-BP106 | — | F | RT; NEG |
| 13-§17-1 | C13@4426e8b1 | §17 b1: POS/integration identity; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-2 | C13@4426e8b1 | §17 b2: external event/reference ID; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-3 | C13@4426e8b1 | §17 b3: business/product/customer mapping where relevant; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-4 | C13@4426e8b1 | §17 b4: raw/normalized event facts; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-5 | C13@4426e8b1 | §17 b5: ingestion timestamp/source; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-6 | C13@4426e8b1 | §17 b6: dedupe/idempotency state; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | IDEM |
| 13-§17-7 | C13@4426e8b1 | §17 b7: correction/reversal linkage; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-8 | C13@4426e8b1 | §17 b8: counter/operator identity where permitted; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; U-11 | — | F | INSP; RT |
| 13-§17-9 | C13@4426e8b1 | §17 b9: review signal and explanation; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-10 | C13@4426e8b1 | §17 b10: authorized human context; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§17-11 | C13@4426e8b1 | §17 b11: closing-cash inputs/results; | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D14 | NI-CC; A-BP106 | — | F | INSP; RT |
| 13-§17-12 | C13@4426e8b1 | §17 b12: audit history. | OBL | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106; 22-§14 (SB-P-1.12) | — | F | INSP; RT |
| 13-§18-1 | C13@4426e8b1 | §18 b1: No accusation from pattern alone. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | L-NEG; A-BP106 | — | D | NEG; EXP |
| 13-§18-2 | C13@4426e8b1 | §18 b2: No punitive surveillance framing. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | L-NEG; A-BP106 | — | D | NEG; EXP |
| 13-§18-3 | C13@4426e8b1 | §18 b3: Staff data is purpose-limited. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | L-NEG; A-BP106; U-11 | — | D | NEG; EXP |
| 13-§18-4 | C13@4426e8b1 | §18 b4: Merchant-specific data remains business-scoped. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | L-NEG; A-BP106; 21-§6 (SB-P-1.12) | — | D | NEG; EXP |
| 13-§18-5 | C13@4426e8b1 | §18 b5: Counter intelligence should support fair review, not hidden judgement. | PRIN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | L-NEG; A-BP106 | — | D | NEG; EXP |
| 13-§19-1 | C13@4426e8b1 | §19 b1: Business Memory; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D14 | A-BP106 | — | F | INSP |
| 13-§19-2 | C13@4426e8b1 | §19 b2: Catalog/Product identity; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | F-PPM; BP-§7-1–5 (SB-P-1.12) | — | F | INSP |
| 13-§19-3 | C13@4426e8b1 | §19 b3: Inventory movements; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | F-INV; A-BP106 | — | F | INSP |
| 13-§19-4 | C13@4426e8b1 | §19 b4: Permission Engine; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | A-BP106 | — | F | INSP |
| 13-§19-5 | C13@4426e8b1 | §19 b5: Human Language Layer; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D13 | A-BP106 | — | F | INSP |
| 13-§19-6 | C13@4426e8b1 | §19 b6: Ask CFO; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15 | A-BP106 | — | F | INSP |
| 13-§19-7 | C13@4426e8b1 | §19 b7: Daily Intelligence; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15 | A-BP106 | — | F | INSP |
| 13-§19-8 | C13@4426e8b1 | §19 b8: audit/idempotency; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | A-BP106 | — | F | INSP |
| 13-§19-9 | C13@4426e8b1 | §19 b9: integration/extension layer; | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | A-BP106 | — | F | INSP |
| 13-§19-10 | C13@4426e8b1 | §19 b10: Notification foundation where needed. | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D15; DNTF | A-BP106 | — | F | INSP |
| 13-§20-1 | C13@4426e8b1 | §20 b1: custom client-specific POS modifications in core; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-6; BP-§16-7 | — | F | NEG |
| 13-§20-2 | C13@4426e8b1 | §20 b2: replacing all POS systems; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106 | — | F | NEG |
| 13-§20-3 | C13@4426e8b1 | §20 b3: AI fraud verdicts; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-2; BP-§16-2 | — | F | NEG |
| 13-§20-4 | C13@4426e8b1 | §20 b4: hardware/register lockout by AI judgement; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-2 | — | F | NEG |
| 13-§20-5 | C13@4426e8b1 | §20 b5: fixed historic printer-spool mechanism as Product Truth; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106 | — | F | NEG |
| 13-§20-6 | C13@4426e8b1 | §20 b6: fixed universal discount threshold such as 15%; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; DC-06 | — | F | NEG |
| 13-§20-7 | C13@4426e8b1 | §20 b7: CSV-only downgrade of the committed standard bridge. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106 ('standard POS bridge adapters') | — | F | NEG |
| 13-§21-1 | C13@4426e8b1 | §21 n1: Standard POS event ingests with stable external identity. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106 | — | C | RT |
| 13-§21-2 | C13@4426e8b1 | §21 n2: Retry/duplicate does not duplicate revenue/stock. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D14; DTX | NI-POS; A-BP106 | — | C | IDEM |
| 13-§21-3 | C13@4426e8b1 | §21 n3: Product mapping drives valid stock movement where configured. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12; D14 | NI-POS; A-BP106 | — | C | RT |
| 13-§21-4 | C13@4426e8b1 | §21 n4: Unmapped/conflicting event is surfaced without guessing. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106 | — | C | RT; NEG |
| 13-§21-5 | C13@4426e8b1 | §21 n5: Void/discount pattern produces neutral review signal, not accusation. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106 | — | D | RT; FRV-B |
| 13-§21-6 | C13@4426e8b1 | §21 n6: Authorized human context can be added without erasing raw event. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D14 | NI-POS; A-BP106 | — | D | RT |
| 13-§21-7 | C13@4426e8b1 | §21 n7: Closing cash computes factual variance from approved inputs. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D14 | NI-CC; A-BP106; DC-09 | — | D | RT |
| 13-§21-8 | C13@4426e8b1 | §21 n8: Ask CFO explains POS/closing data without write authority. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D13; D15 | NI-POS; A-BP106 | — | E | NEG |
| 13-§21-9 | C13@4426e8b1 | §21 n9: Employee cannot access Owner-only risk/profit intelligence. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12 | NI-POS; A-BP106 | — | E | NEG |
| 13-§21-10 | C13@4426e8b1 | §21 n10: POS outage leaves safe manual workflows available. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | F-INV (manual path); NI-POS | — | F | RT |
| 13-§21-11 | C13@4426e8b1 | §21 n11: Custom integration requirement remains at extension edge. | SCN | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106 | — | C | INSP |
| 13-§22-1 | C13@4426e8b1 | §22 b1: AI labelling counter activity theft/fraud; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-2 | — | F | NEG |
| 13-§22-2 | C13@4426e8b1 | §22 b2: register/keyboard lockout as AI punishment; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-2 | — | F | NEG |
| 13-§22-3 | C13@4426e8b1 | §22 b3: custom POS core modification; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; GPCV-§9-6 | — | F | NEG |
| 13-§22-4 | C13@4426e8b1 | §22 b4: historical fixed trigger thresholds; | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; DC-06 | — | F | NEG |
| 13-§22-5 | C13@4426e8b1 | §22 b5: printer-spool interception as mandatory implementation. | NEG | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106 | — | F | NEG |
| 13-§22-6 | C13@4426e8b1 | §22 p2: Preserved: standard POS bridge, respectful counter intelligence and closing-cash clarity. | HIST | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | L-HIST (preserved behaviour carried by 13-§4, 13-§8, 13-§10 rows) | — | — | — |
| 13-§23 | C13@4426e8b1 | §23 whole section: Provenance and Hydration Coverage (p1, p2) | PROV | BUILD NOW | MGR-CORE | SB-P-1.17 | NOT APPLICABLE | — | L-PROV | — | — | — |
| 13-§24-1 | C13@4426e8b1 | §24 p1: Complete only when the standard bridge, dedupe/audit, stock relationship, counter review si… | GATE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | D12; D13; D14; D15; DPOS | completion requires every C13 BUILD NOW row demonstrated (GPCV §4.4) | — | F | GATE |

## C. Contract 17 — Operational Dashboard & Manager Workspace (143 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 17-§1-1 | C17@7943f74a | §1 p1: The Operational Dashboard & Manager Workspace gives authorized users a calm visual view of… | EXP | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | F-DASH; I-12 (17-§1, expanded here); A-BP106 ('mature Manager workspace') | — | E | EXP |
| 17-§1-2 | C17@7943f74a | §1 p2: The dashboard complements WhatsApp and the Conversation Workspace. It does not replace them… | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | F-DASH; I-12 (17-§1); BP-§6.3 | — | E | INSP |
| 17-§2-1 | C17@7943f74a | §2 b1: reviewing today's sales/purchases; | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-2 | C17@7943f74a | §2 b2: comparing trends; | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-3 | C17@7943f74a | §2 b3: seeing stock/reorder status; | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-4 | C17@7943f74a | §2 b4: checking staff/attendance; | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-5 | C17@7943f74a | §2 b5: reviewing credit/payment issues; | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-6 | C17@7943f74a | §2 b6: monitoring orders/delivery; | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-7 | C17@7943f74a | §2 b7: seeing POS/counter/closing-cash signals; | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-8 | C17@7943f74a | §2 b8: navigating documents, integrations and settings. | NARR | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-NARR (problem statement; obligations carried by §§6–10, 15) | — | — | — |
| 17-§2-9 | C17@7943f74a | §2 p2: The Owner/Manager needs visual clarity without being forced into a complex ERP interface. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | A-BP106; BP-§10.6-O | — | E | EXP |
| 17-§3-1 | C17@7943f74a | §3 b1: Calm, simple, useful workspace. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | I-12 (17-§3, expanded here); A-BP106 | — | E | EXP; INSP |
| 17-§3-2 | C17@7943f74a | §3 b2: Conversation-first; visual surfaces complement rather than replace conversation. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | I-12 (17-§3, expanded here); A-BP106 | — | E | EXP; INSP |
| 17-§3-3 | C17@7943f74a | §3 b3: Role-appropriate visibility. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | I-12 (17-§3, expanded here); A-BP106 | — | E | EXP; INSP |
| 17-§3-4 | C17@7943f74a | §3 b4: Owner intelligence protected by default. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | I-12 (17-§3, expanded here); A-BP106 | — | E | EXP; INSP |
| 17-§3-5 | C17@7943f74a | §3 b5: Same Business Memory/permissions across every surface. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | I-12 (17-§3, expanded here); A-BP106 | — | E | EXP; INSP |
| 17-§3-6 | C17@7943f74a | §3 b6: Stable/testable UI where practical. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | I-12 (17-§3, expanded here); A-BP106 | — | E | EXP; INSP |
| 17-§3-7 | C17@7943f74a | §3 b7: No form clutter merely because backend fields exist. | PRIN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | I-12 (17-§3, expanded here); A-BP106 | — | E | EXP; INSP |
| 17-§4-1 | C17@7943f74a | §4 b1: business identity; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH (business identity cards); I-12 (17-§4) | — | E | RT |
| 17-§4-2 | C17@7943f74a | §4 b2: transaction/business-memory views; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-3 | C17@7943f74a | §4 b3: credit awareness; | CONS | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D16 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-4 | C17@7943f74a | §4 b4: document/receipt memory; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-5 | C17@7943f74a | §4 b5: reminders; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D15 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-6 | C17@7943f74a | §4 b6: Ask CFO access; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D15 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-7 | C17@7943f74a | §4 b7: Daily Intelligence; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D15 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-8 | C17@7943f74a | §4 b8: enabled add-ons. | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DENT | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-9 | C17@7943f74a | §4 b9: inventory/stock intelligence; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | A | RT |
| 17-§4-10 | C17@7943f74a | §4 b10: suppliers/reorder; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | B | RT |
| 17-§4-11 | C17@7943f74a | §4 b11: POS/counter intelligence; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | C | RT |
| 17-§4-12 | C17@7943f74a | §4 b12: closing cash; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | D | RT |
| 17-§4-13 | C17@7943f74a | §4 b13: operational trends; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | RT |
| 17-§4-14 | C17@7943f74a | §4 b14: deeper role-appropriate analytics; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§4); DC-05 | 12:FR-09 | E | RT |
| 17-§4-15 | C17@7943f74a | §4 b15: staff/HR/order-delivery views when add-ons are enabled. | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; I-12 (17-§9, 17-§10 ASSIGNED SB-P-1.18) | — | — | — |
| 17-§4-16 | C17@7943f74a | §4 p4: The exact navigation may evolve; capability truth remains governed by feature contracts. | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§4); I-16 (17-§4); A-BP106 | — | E | INSP |
| 17-§5-1 | C17@7943f74a | §5 p1: Conversation Workspace is an explicit first-class app component | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-1 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§5-2 | C17@7943f74a | §5 p2: must not disappear into a generic dashboard label or outage fallback | NEG | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-2 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§5-3 | C17@7943f74a | §5 b1: shared user/business identity | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-3 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§5-4 | C17@7943f74a | §5 b2: shared Business Memory | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-4 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§5-5 | C17@7943f74a | §5 b3: shared Permission Engine | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-5 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§5-6 | C17@7943f74a | §5 b4: shared Human Language Layer | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-6 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§5-7 | C17@7943f74a | §5 b5: shared feature action services | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-7 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§5-8 | C17@7943f74a | §5 b6: shared document/reminder/intelligence foundations | OBL | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§5-8 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§6-1 | C17@7943f74a | §6 b1: today/period sales/income; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH (daily totals); I-12 (17-§6); I-14 (17-§6); I-16 (17-§6); A-BP106 | — | E | RT |
| 17-§6-2 | C17@7943f74a | §6 b2: expenses/purchases; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH (daily totals); I-12 (17-§6); I-14 (17-§6); I-16 (17-§6); A-BP106 | — | E | RT |
| 17-§6-3 | C17@7943f74a | §6 b3: outstanding credit; | CONS | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D16 | NI-CRD; I-16 (17-§6 downstream consumer of SB-P-1.16 data); A-BP106 | — | E | RT |
| 17-§6-4 | C17@7943f74a | §6 b4: recent activity; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH (daily totals); I-12 (17-§6); I-14 (17-§6); I-16 (17-§6); A-BP106 | — | E | RT |
| 17-§6-5 | C17@7943f74a | §6 b5: payment/reconciliation state; | CONS | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D16; DPAY | NI-PAY; I-16 (17-§6); A-BP106 | — | E | RT |
| 17-§6-6 | C17@7943f74a | §6 b6: relevant comparisons/trends. | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH (daily totals); I-12 (17-§6); I-14 (17-§6); I-16 (17-§6); A-BP106 | — | E | RT |
| 17-§6-7 | C17@7943f74a | §6 p2: Exact metric availability depends on product plan, enabled add-ons and reliable data. | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DENT | F-DASH (daily totals); I-12 (17-§6); I-14 (17-§6); I-16 (17-§6); A-BP106 | — | E | INSP; NEG |
| 17-§6-8 | C17@7943f74a | §6 p3: Do not display fabricated derived metrics when underlying data is insufficient. | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | L-NEG; I-12 (17-§6); 2-§12-15 (SB-P-1.15) | — | E | NEG |
| 17-§7-1 | C17@7943f74a | §7 b1: inventory quantity/state; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-INV; I-12 (17-§7); A-BP106 | — | A | RT |
| 17-§7-2 | C17@7943f74a | §7 b2: low stock; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (17-§7) | — | A | RT |
| 17-§7-3 | C17@7943f74a | §7 b3: expiry/freshness where data exists; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | NI-EXP; I-12 (17-§7) | — | A | RT |
| 17-§7-4 | C17@7943f74a | §7 b4: slow-moving/wastage information; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | NI-EXP; NI-RO; I-12 (17-§7) | — | A | RT |
| 17-§7-5 | C17@7943f74a | §7 b5: supplier history/context; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | NI-SUP; I-12 (17-§7) | — | A | RT |
| 17-§7-6 | C17@7943f74a | §7 b6: reorder recommendations/pending approvals; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; I-12 (17-§7) | — | B | RT; FRV-A |
| 17-§7-7 | C17@7943f74a | §7 b7: purchase/order follow-up. | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14; DNTF | NI-SUP; I-12 (17-§7); U-05 | — | B | RT |
| 17-§7-8 | C17@7943f74a | §7 p2: Do not create dashboard-only stock logic separate from the operational services. | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | L-NEG; I-12 (17-§7); 17-§21-3 | — | A | NEG; INSP |
| 17-§8-1 | C17@7943f74a | §8 b1: POS integration health; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | NI-POS; I-12 (17-§8); A-BP106 | — | C | RT |
| 17-§8-2 | C17@7943f74a | §8 b2: relevant sales/counter data; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | NI-POS; I-12 (17-§8); A-BP106 | — | D | RT |
| 17-§8-3 | C17@7943f74a | §8 b3: void/discount review signals; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | NI-POS; I-12 (17-§8); A-BP106 | — | D | RT; FRV-B |
| 17-§8-4 | C17@7943f74a | §8 b4: closing-cash inputs/results; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | NI-CC; I-12 (17-§8) | — | D | RT |
| 17-§8-5 | C17@7943f74a | §8 b5: factual variances. | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | NI-CC; I-12 (17-§8) | — | D | RT |
| 17-§8-6 | C17@7943f74a | §8 p2: Signal language must remain neutral and non-accusatory. | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | L-NEG; I-12 (17-§8); BP-§10.6-E2 | — | D | NEG; EXP; FRV-B |
| 17-§9 | C17@7943f74a | §9 whole section: Staff / HR Views (b1–b6, p2) | SEC | BUILD NOW | MGR+LDG | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; I-12 (17-§9 ASSIGNED SB-P-1.18) | — | — | — |
| 17-§10 | C17@7943f74a | §10 whole section: Order & Delivery Views (b1–b6, p2) | SEC | BUILD NOW | MGR+LDG | SB-P-1.18 | ASSIGNED TO LATER MISSION | D18 | A-BP107; I-12 (17-§10); I-16 (17-§10 COD consumer) | — | — | — |
| 17-§11-1 | C17@7943f74a | §11 p1: workspace exposes Ask CFO and Daily Intelligence without separate stacks | RULE | BUILD NOW | MGR+LDG | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-15 (17-§11-1 IN SCOPE SB-P-1.15) | — | E | — |
| 17-§11-2 | C17@7943f74a | §11 p2: Ask CFO uses shared read-only business reasoning | NEG | BUILD NOW | MGR+LDG | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-15 (17-§11-2 IN SCOPE SB-P-1.15) | — | E | — |
| 17-§11-3 | C17@7943f74a | §11 p3: Daily Intelligence shows the same schedule/content truth | OBL | BUILD NOW | MGR+LDG | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-15 (17-§11-3 IN SCOPE SB-P-1.15) | — | E | — |
| 17-§12-1 | C17@7943f74a | §12 p1: browse/search permitted documents through the shared UDI/Receipt foundation | OBL | BUILD NOW | MGR+LDG | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (17-§12-1 IN SCOPE SB-P-1.14) | — | E | — |
| 17-§12-2 | C17@7943f74a | §12 p2: richer visual filtering preserves the same storage/permission truth | RULE | BUILD NOW | MGR+LDG | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (17-§12-2 IN SCOPE SB-P-1.14) | — | E | — |
| 17-§13-1 | C17@7943f74a | §13 p1 <Owner>: receives Owner-authorized intelligence | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§13-1 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — | E | — |
| 17-§13-2 | C17@7943f74a | §13 p2 <Manager>: only Owner-delegated scope; role alone grants no Owner intelligence | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§13-2 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — | E | — |
| 17-§13-3 | C17@7943f74a | §13 p3 <Employee>: job-specific tools and permitted self-service; no default Owner profit/Ask CFO/analytics | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§13-3 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — | E | — |
| 17-§13-4 | C17@7943f74a | §13 p4 <Customer/Supplier/Delivery Staff>: no general dashboard access | NEG | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§13-4 IN SCOPE SB-P-1.12); I-16 (17-§13); U-09 | — | E | — |
| 17-§14-1 | C17@7943f74a | §14 p1: role-based cards/navigation are usability, not the security boundary | RULE | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-1 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — | E | — |
| 17-§14-2 | C17@7943f74a | §14 b1: enforce authenticated user | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-2 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — | E | — |
| 17-§14-3 | C17@7943f74a | §14 b2: enforce business isolation | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-3 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — | E | — |
| 17-§14-4 | C17@7943f74a | §14 b3: enforce current role/permission | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-4 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — | E | — |
| 17-§14-5 | C17@7943f74a | §14 b4: enforce feature entitlement where relevant | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-5 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — | E | — |
| 17-§14-6 | C17@7943f74a | §14 b5: enforce object/action scope | OBL | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-6 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — | E | — |
| 17-§14-7 | C17@7943f74a | §14 p3: changing a UI component never widens backend access | NEG | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§14-7 IN SCOPE SB-P-1.12); I-16 (17-§14); U-09 | — | E | — |
| 17-§15-1 | C17@7943f74a | §15 p1: The dashboard should prioritize useful work rather than display every possible module equal… | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§15); A-BP106 | — | E | EXP |
| 17-§15-2 | C17@7943f74a | §15 b1: Ledger vs Manager; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§15); A-BP106 | — | E | RT |
| 17-§15-3 | C17@7943f74a | §15 b2: enabled add-ons; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DENT | F-DASH; I-12 (17-§15); A-BP106 | — | E | RT |
| 17-§15-4 | C17@7943f74a | §15 b3: role; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§15); A-BP106 | — | E | RT |
| 17-§15-5 | C17@7943f74a | §15 b4: unresolved tasks/exceptions; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§15); A-BP106 | — | E | RT |
| 17-§15-6 | C17@7943f74a | §15 b5: merchant business type; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§15); A-BP106 | — | E | RT |
| 17-§15-7 | C17@7943f74a | §15 b6: recently used features. | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§15); A-BP106 | — | E | EXP |
| 17-§15-8 | C17@7943f74a | §15 p3: Avoid manipulative engagement design or fear-based upsell. | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | L-NEG; I-12 (17-§15); 18-§17-2 (SB-P-1.19) | — | E | NEG; EXP |
| 17-§16-1 | C17@7943f74a | §16 p1: stable IDs/test hooks — for the §13/§14 permission surface (SB-P-1.12 slice) | RULE | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§16-1) | — | F | — |
| 17-§16-2 | C17@7943f74a | §16 p1: stable IDs/test hooks — for the remaining Manager-depth workspace surface | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | F-DASH; I-12 (17-§16-2 ASSIGNED SB-P-1.17); A-BP106 | — | F | INSP |
| 17-§16-3 | C17@7943f74a | §16 p2: testability is a product-quality rule, not a visual freeze (not rowed upstream; ordinal follows 16-2) | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | A-BP106; parser p2 | — | F | INSP |
| 17-§17-1 | C17@7943f74a | §17 b1: partial data-provider failure; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§17); A-BP106 | — | E | RT; NEG |
| 17-§17-2 | C17@7943f74a | §17 b2: stale query/state; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§17); A-BP106 | — | E | RT; NEG |
| 17-§17-3 | C17@7943f74a | §17 b3: permission change; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§17); A-BP106 | — | E | RT; NEG |
| 17-§17-4 | C17@7943f74a | §17 b4: feature/add-on unavailable; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§17); A-BP106 | — | E | RT; NEG |
| 17-§17-5 | C17@7943f74a | §17 b5: integration outage; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | F-DASH; I-12 (17-§17); A-BP106 | — | E | RT; NEG |
| 17-§17-6 | C17@7943f74a | §17 b6: empty/first-use state; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§17); A-BP106 | — | E | RT; NEG |
| 17-§17-7 | C17@7943f74a | §17 b7: conflicting data sources; | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14; DPOS | NI-POS; I-12 (17-§17); DC-08 | — | E | RT; NEG |
| 17-§17-8 | C17@7943f74a | §17 b8: failed export/download. | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§17); A-BP106 | — | E | RT; NEG |
| 17-§17-9 | C17@7943f74a | §17 p2: A broken card/module must not globally blank the workspace when unrelated safe data can sti… | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | I-12 (17-§17); A-BP106; 17-§22-6 | — | E | RT; NEG |
| 17-§18-1 | C17@7943f74a | §18 b1: no cross-business data | NEG | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§18-1); U-09 | — | E | — |
| 17-§18-2 | C17@7943f74a | §18 b2: no staff access to Owner intelligence by default | NEG | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§18-2); U-09 | — | E | — |
| 17-§18-3 | C17@7943f74a | §18 b3: no routine platform/admin merchant-data browsing through dashboard shortcuts | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | L-NEG; I-12 (17-§18-3 ASSIGNED SB-P-1.17); EIS-SUP-01 | — | E | NEG |
| 17-§18-4 | C17@7943f74a | §18 b4: sensitive information only to roles with legitimate need | NEG | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§18-4); U-09 | — | E | — |
| 17-§18-5 | C17@7943f74a | §18 b5: dashboard activity/analytics must not become hidden employee surveillance | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | L-NEG; I-12 (17-§18-5 ASSIGNED SB-P-1.17); U-11 | — | E | NEG; EXP |
| 17-§19-1 | C17@7943f74a | §19 p1: Common workspace navigation/summary loads should target responsive experience consistent wi… | OBL | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-DASH; I-12 (17-§19); A-BP106 | — | E | RT |
| 17-§19-2 | C17@7943f74a | §19 p2: Use caching/query optimization where safe, but never bypass authorization or show stale con… | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | L-NEG; I-12 (17-§19) | — | E | NEG |
| 17-§20-1 | C17@7943f74a | §20 b1: Business Memory; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D14 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-2 | C17@7943f74a | §20 b2: Permission Engine; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-3 | C17@7943f74a | §20 b3: Human Language Layer; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D13 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-4 | C17@7943f74a | §20 b4: Conversation Workspace; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D13 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-5 | C17@7943f74a | §20 b5: Ask CFO; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D15 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-6 | C17@7943f74a | §20 b6: Daily Intelligence; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D15 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-7 | C17@7943f74a | §20 b7: Document Intelligence; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D14 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-8 | C17@7943f74a | §20 b8: Reminder Engine; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D15 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-9 | C17@7943f74a | §20 b9: Inventory/Catalog; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | F-INV; F-PPM; A-BP106 | — | F | INSP |
| 17-§20-10 | C17@7943f74a | §20 b10: POS integration; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | DPOS | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§20-11 | C17@7943f74a | §20 b11: shared identities; | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | 22-§5 (SB-P-1.12); A-BP106 | — | F | INSP |
| 17-§20-12 | C17@7943f74a | §20 b12: notification/audit foundations. | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D15 | I-12 (17-§20, expanded here); A-BP106 | — | F | INSP |
| 17-§21-1 | C17@7943f74a | §21 b1: fixed historic four-tab layout as immutable Product Truth | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | L-NEG; I-12 (17-§21-1 ASSIGNED SB-P-1.17) | — | E | INSP |
| 17-§21-2 | C17@7943f74a | §21 b2: ERP-form-first experience | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | L-NEG; I-12 (17-§21-2); BP-§10.6-O | — | E | EXP |
| 17-§21-3 | C17@7943f74a | §21 b3: dashboard-only duplicate business logic | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | L-NEG; I-12 (17-§21-3) | — | E | INSP; NEG |
| 17-§21-4 | C17@7943f74a | §21 b4: employee visibility into Owner-wide financial intelligence by convenience | NEG | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§21-4 IN SCOPE SB-P-1.12); U-09 | — | E | — |
| 17-§21-5 | C17@7943f74a | §21 b5: hiding Conversation Workspace as optional fallback only | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D13 | L-NEG; I-12 (17-§21-5 ASSIGNED SB-P-1.17) | — | E | INSP |
| 17-§22-1 | C17@7943f74a | §22 n1: Owner sees accurate role-authorized summary from shared Business Memory | SCN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14 | F-DASH; I-12 (17-§22-1 ASSIGNED SB-P-1.17) | — | E | RT |
| 17-§22-2 | C17@7943f74a | §22 n2: Manager sees delegated operations, not non-delegated Owner intelligence | SCN | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§22-2); U-01; U-09 | — | E | — |
| 17-§22-3 | C17@7943f74a | §22 n3: Employee limited to permitted operational/self-service surfaces | SCN | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§22-3); U-09 | — | E | — |
| 17-§22-4 | C17@7943f74a | §22 n4: dashboard and conversation show consistent underlying state | SCN | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§22-4 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§22-5 | C17@7943f74a | §22 n5: stock/supplier/POS/order modules consume shared feature services | SCN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D14; DPOS | NI-RO; NI-POS; I-12 (17-§22-5 ASSIGNED SB-P-1.17) | — | E | INSP; RT |
| 17-§22-6 | C17@7943f74a | §22 n6: one integration/module failure leaves unrelated workspace functions usable | SCN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; DPOS | I-12 (17-§22-6 ASSIGNED SB-P-1.17) | — | E | RT |
| 17-§22-7 | C17@7943f74a | §22 n7: Ask CFO remains read-only | SCN | BUILD NOW | MGR+LDG | SB-P-1.15 | DELEGATED | D15 | L-DEL15; I-15 (17-§22-7 IN SCOPE SB-P-1.15) | — | E | — |
| 17-§22-8 | C17@7943f74a | §22 n8: Conversation Workspace is first-class in app navigation/experience | SCN | BUILD NOW | MGR+LDG | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (17-§22-8 IN SCOPE SB-P-1.13) | — | E | — |
| 17-§22-9 | C17@7943f74a | §22 n9: cross-business access is denied server-side | SCN | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§22-9 PARTIAL precedent); U-09 | — | E | — |
| 17-§22-10a | C17@7943f74a | §22 n10: stable identifiers for critical governed flows — §13/§14 surface | SCN | BUILD NOW | MGR+LDG | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (17-§22-10a) | — | F | — |
| 17-§22-10b | C17@7943f74a | §22 n10: stable identifiers for critical governed flows — Manager-depth surface | SCN | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | I-12 (17-§22-10b ASSIGNED SB-P-1.17) | — | F | INSP; RT |
| 17-§23-1 | C17@7943f74a | §23 p1: historical UI tab layouts remain design provenance, not fixed Product Truth | HIST | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-HIST (carried by 17-§21-1) | — | — | — |
| 17-§23-2 | C17@7943f74a | §23 b1: superseded — dashboard as a separate truth system | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | L-NEG; A-BP106; I-12 (17-§23 NOT APPLICABLE for SB-P-1.12) | — | E | INSP |
| 17-§23-3 | C17@7943f74a | §23 b2: superseded — hiding Owner intelligence only in UI while backend remains open | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12 | L-NEG; A-BP106; 17-§14-7 (SB-P-1.12) | — | E | NEG |
| 17-§23-4 | C17@7943f74a | §23 b3: superseded — treating the native Conversation Workspace as non-core | NEG | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D13 | L-NEG; A-BP106; 17-§5-2 (SB-P-1.13) | — | E | INSP |
| 17-§24 | C17@7943f74a | §24 whole section: Provenance and Hydration Coverage (p1, p2) | PROV | BUILD NOW | MGR+LDG | SB-P-1.17 | NOT APPLICABLE | — | L-PROV | — | — | — |
| 17-§25-1 | C17@7943f74a | §25 p1: Complete only when role-aware workspace/navigation, shared-state consistency, Manager opera… | GATE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | D12; D13; D14; D15; DPOS | I-12 (17-§25); completion requires every C17 BUILD NOW row demonstrated across missions (GPCV §4.4) | — | F | GATE |

## D. Delegated, touched, downstream-consumer and adjacent contracts (116 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1-§10-2 | C1@b392c8cb | §10 p2: Owner/authorized staff review stock/availability using current business data | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18; D17 | L-DEL18; A-BP107; BP-§11-6 (SB-P-1.17 stock underpins Order availability) | — | — | — |
| 1-§10-9 | C1@b392c8cb | §10 p5: must not promise inventory the product cannot support with reliable data | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18; D17 | L-DEL18; A-BP107; BP-§11-6 | — | — | — |
| 1-§23-7 | C1@b392c8cb | §23 b7: reuse inventory/catalog where available | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18; D17 | L-DEL18; A-BP107; BP-§11-6 | — | — | — |
| 1-§24-3 | C1@b392c8cb | §24 b3: out-of-stock/substitution handling | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18; D17 | L-DEL18; A-BP107; BP-§11-6 | — | — | — |
| 1-§26-5 | C1@b392c8cb | §26 n5: out-of-stock item → respectful substitution flow | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18; D17 | L-DEL18; A-BP107; BP-§11-6 | — | — | — |
| 1-§27-8 | C1@b392c8cb | §27 b8: dependency on Inventory/Catalog for availability-aware flows | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | DELEGATED | D18; D17 | L-DEL18; A-BP107; BP-§11-6 | — | — | — |
| 2-§3-5 | C2@53635557 | §3 b4 <Owner>: ask about cash, expenses, credits, stock, supplier history, operations | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§3-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§5-13 | C2@53635557 | §5.2 b9: advisory example — can I safely consider a large stock purchase? | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§5-13 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§7-10 | C2@53635557 | §7 b6: Ask CFO must not modify stock merely because a question was asked | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§7-10 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§10-4 | C2@53635557 | §10 b2: business context — low stock is intentional | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§10-4 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§10-6 | C2@53635557 | §10 b4: business context — an unusual discount was authorized for a customer relationship | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§10-6 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§11-5 | C2@53635557 | §11 b4: cross-feature intelligence over stock | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§11-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§11-6 | C2@53635557 | §11 b5: cross-feature intelligence over suppliers | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§11-6 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§11-7 | C2@53635557 | §11 b6: cross-feature intelligence over POS-connected activity | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§11-7 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§12-9 | C2@53635557 | §12 b7 <Manager>: depth from stock intelligence | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§12-9 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§12-10 | C2@53635557 | §12 b8 <Manager>: depth from supplier/reorder data | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§12-10 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§12-11 | C2@53635557 | §12 b9 <Manager>: depth from POS activity | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§12-11 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§12-12 | C2@53635557 | §12 b10 <Manager>: depth from operational dashboard data | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§12-12 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§12-13 | C2@53635557 | §12 b11 <Manager>: deeper business analytics | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§12-13 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§12-14 | C2@53635557 | §12 b12 <Manager>: counter activity observations | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§12-14 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§12-15 | C2@53635557 | §12 p5: no fabricated Manager-only insight for a Ledger merchant without the data/capability | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§12-15 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§25-8 | C2@53635557 | §25 b8: stock query when stock capability enabled | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§25-8 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 2-§25-9 | C2@53635557 | §25 b9: no stock fabrication when capability/data absent | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; D17 | L-DEL15; I-15 (2-§25-9 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the governed reader | — | — | — |
| 3-§3-7 | C3@d8c26c07 | §3 b7: respectful coexistence with existing notebooks, POS and spreadsheets | PRIN | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§3); realized here by 13-§1-2, 13-§3-2 | — | — | — |
| 3-§7-3 | C3@d8c26c07 | §7 clarification case: multiple plausible customers/suppliers | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§7-3 IN SCOPE SB-P-1.14) | — | — | — |
| 3-§9-2 | C3@d8c26c07 | §9 retrieve by customer or supplier — party/counterparty reference level | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§9-2) | — | — | — |
| 3-§9-3 | C3@d8c26c07 | §9 retrieve by customer or supplier — structured directory-indexed identity (supplier side) | OBL | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | NI-SUP; I-14 (3-§9-3 ASSIGNED SB-P-1.17 / SB-P-1.18); A-BP103-S; U-12 | 16:FPDR-1 | A | RT |
| 3-§9-9 | C3@d8c26c07 | §9 retrieve by product or stock relationship where available | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14; D17 | L-DEL14; I-14 (3-§9-9; 'relationship matures under 7-§8 (SB-P-1.17)') | — | — | — |
| 3-§10-4 | C3@d8c26c07 | §10 customer/supplier views (counterparty-reference level; directory form follows 3-§9-3) | OBL | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§10-4) | — | — | — |
| 3-§11-6 | C3@d8c26c07 | §11 Customer/Supplier/Delivery participate only in minimum-information workflows (supplier slice) | OBL | BUILD NOW | CORE-LM | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | I-14 (3-§11-6 jointly assigned); I-16 (customer slice demonstrated by SB-P-1.16; other slices SB-P-1.17 / SB-P-1.18); 21-§13-1 | — | A | NEG |
| 3-§15-7 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Customer/Supplier identity (supplier side) | RULE | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | NI-SUP; I-14 (3-§15-7); I-16 (3-§15-7); U-12 | 16:FPDR-1 | A | INSP |
| 3-§15-10 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: Stock / Supplier / Reorder Intelligence | RULE | BUILD NOW | CORE-LM | SB-P-1.17 | IN SCOPE | D14; DTX | I-14 (3-§15-10 ASSIGNED SB-P-1.17); I-16; 7-§8-1 | — | A | INSP; IDEM |
| 3-§15-11 | C3@d8c26c07 | §15 Ledger integrates with, rather than duplicates: POS bridge where enabled | RULE | BUILD NOW | CORE-LM | SB-P-1.17 | IN SCOPE | D14; DTX; DPOS | I-14 (3-§15-11 ASSIGNED SB-P-1.17); I-16; 13-§6-6 | — | C | INSP; IDEM |
| 3-§22-1 | C3@d8c26c07 | §22 reuse existing transaction, correction, inventory/catalog and audit foundations where aligned | RULE | BUILD NOW | CORE-LM | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (3-§22-1); applied here by F-INV/F-PPM reuse (DC-01) | — | — | — |
| 4-§3-3 | C4@ce940d25 | §3 b2: morning briefing — outstanding customer/supplier credit requiring awareness | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§3-3 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§3-5 | C4@ce940d25 | §3 b4: morning briefing — low-stock/reorder concerns | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§3-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§4-4 | C4@ce940d25 | §4 b3: pulse check — stock or order issues | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§4-4 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§4-7 | C4@ce940d25 | §4 b6: pulse check — Manager POS/counter signals where authorized | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§4-7 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§5-3 | C4@ce940d25 | §5 b2: night closing — cash/payment awareness | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§5-3 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§5-5 | C4@ce940d25 | §5 b4: night closing — stock/reorder issues | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§5-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§5-10 | C4@ce940d25 | §5 p3: for Manager, closing-cash/POS operational depth may be richer when enabled | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§5-10 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§6-5 | C4@ce940d25 | §6 b4: source-of-truth rule — Stock/Supplier/Reorder | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§6-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§6-6 | C4@ce940d25 | §6 b5: source-of-truth rule — POS/Counter Intelligence | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§6-6 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§10-8 | C4@ce940d25 | §10 b8: 'Possible stock risk' is not proof of a stockout | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§10-8 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 4-§11-5 | C4@ce940d25 | §11 b5: action continuation — review reorder suggestion | CONS | BUILD NOW | CORE-LM | SB-P-1.15 | DELEGATED | D15; DSCH; D17 | L-DEL15; I-15 (4-§11-5 IN SCOPE SB-P-1.15); SB-P-1.17 supplies the data | — | — | — |
| 5-§4-7 | C5@80ac648e | §4 supported input: purchase/sales invoices | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (5-§4-7) | — | — | — |
| 5-§4-9 | C5@80ac648e | §4 supported input: opening-stock documents | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (5-§4-9) | — | — | — |
| 5-§4-10 | C5@80ac648e | §4 supported input: other stock documents (stock lists) | OBL | BUILD NOW | CORE-FDN | SB-P-1.17 | IN SCOPE | D12; D14 | NI-UDI; I-14 (5-§4-10 ASSIGNED SB-P-1.17); A-BP106 (W12) | — | F | RT |
| 5-§5-1 | C5@80ac648e | §5 receipt/bill/invoice field: merchant/supplier/customer identity where present | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (5-§5-1); supplier resolution consumes 7-§3-1 | — | — | — |
| 5-§6-11 | C5@80ac648e | §6 retrieve documents by linked inventory record (opening-stock slice SB-P-1.14; other stock links here) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; D17 | L-DEL14; I-14 (5-§6-11; 'other stock links SB-P-1.17'); U-09 | — | — | — |
| 5-§7-3 | C5@80ac648e | §7 example: opening-stock spreadsheet → preview → inventory update | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (5-§7-3); GPCV §11 | — | — | — |
| 5-§7-4 | C5@80ac648e | §7 example: supplier invoice → purchase/stock/ledger preparation (stock side SB-P-1.17) | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; D17 | L-DEL14; I-14 (5-§7-4 'stock side SB-P-1.17'); realized here by 7-§6-3, 7-§8-2 | — | — | — |
| 5-§18-5 | C5@80ac648e | §18 acceptance 5: opening-stock import into shared inventory foundation | SCN | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-14 (5-§18-5) | — | — | — |
| 9-§9-6 | C9@649c55f3 | §9 clarify uncertain stock item | OBL | BUILD NOW | CORE-FDN | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (9-§9-6) | — | — | — |
| 9-§10-2 | C9@649c55f3 | §10 likely spelling match must not silently merge different customers/suppliers/employees | NEG | BUILD NOW | CORE-FDN | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (9-§10-2); applied to supplier identity by DC-02 | — | — | — |
| 9-§12-8 | C9@649c55f3 | §12 Human Language Layer reused by Stock/Supplier/Reorder (reuse verified by consumer) | OBL | BUILD NOW | CORE-FDN | SB-P-1.17 | IN SCOPE | D13; DAI | I-13 (9-§12-8 ASSIGNED SB-P-1.17); A-BP106 | — | E | RT |
| 10-§13-6 | C10@5c145ed7 | §13 example action: approve a reorder (execution belongs to the feature service) | OBL | BUILD NOW | CORE-CH | SB-P-1.17 | IN SCOPE | D12; D13 | I-13 (10-§13-6 ASSIGNED SB-P-1.17); A-BP106 | — | B | RT; FRV-A |
| 10-§14-3 | C10@5c145ed7 | §14 during WhatsApp failure: POS/API ingestion continues where available | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20; DPOS | I-13 (10-§14-3 ASSIGNED SB-P-1.20); A-BP109; native precondition 13-§16-12 | — | — | — |
| 10-§17-2 | C10@5c145ed7 | §17 clarify: ambiguous customer/supplier | OBL | BUILD NOW | CORE-CH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (10-§17-2) | — | — | — |
| 11-§4-7 | C11@e802745a | §4 b7: reminder relates to customer/supplier/employee/document/order/credit/compliance object | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§4-7 IN SCOPE SB-P-1.15); consumer here: 7-§3 | — | — | — |
| 11-§8-3 | C11@e802745a | §8 b3: cross-feature reuse — supplier/reorder follow-up | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§8-3 IN SCOPE SB-P-1.15); consumer here: 7-§12-4 | — | — | — |
| 11-§8-5 | C11@e802745a | §8 b5: cross-feature reuse — stock/expiry review | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§8-5 IN SCOPE SB-P-1.15); consumer here: 7-§12-4 | — | — | — |
| 11-§9-2 | C11@e802745a | §9 b2: reminder vs business event — 'supplier order was placed' is a business event | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§9-2 IN SCOPE SB-P-1.15); consumer here: 7-§5-1 | — | — | — |
| 11-§10-3 | C11@e802745a | §10 b3: reminder → consequential action 'Approve reorder' | OBL | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§10-3 IN SCOPE SB-P-1.15); consumer here: 7-§5-1; BP-§10.6-A3 | — | — | — |
| 11-§12-1 | C11@e802745a | §12 p2: reorder example — low stock → suggest → Owner reviews/approves/edits/defers/cancels | SCN | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§12-1 IN SCOPE SB-P-1.15); consumer here: 7-§5-1; BP-§10.6-A1–A4 | — | — | — |
| 11-§12-2 | C11@e802745a | §12 p3: automatic reorder only within a valid bounded standing rule's exact scope | RULE | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§12-2 IN SCOPE SB-P-1.15); consumer here: 7-§5-2; 7-§15-8 | — | — | — |
| 11-§12-3 | C11@e802745a | §12 p4: a historical background trigger is not authority by itself | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§12-3 IN SCOPE SB-P-1.15); consumer here: 7-§5-3 | — | — | — |
| 11-§13-3 | C11@e802745a | §13 p3 <Employee>: cannot create Owner-level financial/procurement automation by default | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§13-3 IN SCOPE SB-P-1.15); consumer here: 7-§10-3; U-01 | — | — | — |
| 11-§21-3 | C11@e802745a | §21 b3: non-goal — silent financial/procurement commitments | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§21-3 IN SCOPE SB-P-1.15); consumer here: 7-§16-1 | — | — | — |
| 11-§21-5 | C11@e802745a | §21 b5: non-goal — blind supplier orders | NEG | BUILD NOW | CORE-FDN | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (11-§21-5 IN SCOPE SB-P-1.15); consumer here: 7-§16-1 | — | — | — |
| 12-§4-4 | C12@6d48feff | §4 Basic Voice supports stock/supplier/order instructions where product/role permits | OBL | BUILD NOW | CORE-LM | SB-P-1.17 | IN SCOPE | D13; DV | I-13 (12-§4-4 ASSIGNED SB-P-1.17; orders secondary SB-P-1.18); A-BP106 | — | E | RT |
| 12-§7-3 | C12@6d48feff | §7 clarify material uncertainty about customer/supplier/product identity | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13; DV | L-DEL13; I-13 (12-§7-3) | — | — | — |
| 12-§7-7 | C12@6d48feff | §7 clarify material uncertainty about order/reorder instruction | OBL | BUILD NOW | CORE-LM | SB-P-1.17 | IN SCOPE | D13; DV | I-13 (12-§7-7 ASSIGNED SB-P-1.17); A-BP106 | — | B | RT |
| 12-§9-2 | C12@6d48feff | §9 mixed Kerala business speech (illustrative vocabulary incl. stock, supplier, counter) | OBL | BUILD NOW | CORE-LM | SB-P-1.13 | DELEGATED | D13; DV | L-DEL13; I-13 (12-§9-2) | — | — | — |
| 15-§7-5 | C15@632f3402 | §7 b5: matching uses customer/supplier/account identity | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | L-DEL16; I-16 (15-§7-5 IN SCOPE SB-P-1.16); supplier identity supplied by 7-§3-1 | — | — | — |
| 15-§20-4 | C15@632f3402 | §20 b4: reconciliation failure allows unrelated Ledger, inventory, orders and safe operations to continue | OBL | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | L-DEL16; I-16 (15-§20-4) | — | — | — |
| 15-§23-2 | C15@632f3402 | §23 b2: reuse Customer/Supplier identity | RULE | BUILD NOW | CORE-LM | SB-P-1.16 | DELEGATED | D16 | L-DEL16; I-16 (15-§23-2) | 16:FPDR-1 | — | — |
| 18-§4-4 | C18@6b96b10a | §4 p2: exact prices for Voice Plus, Staff/HR, Smart Stock Assistant, Smart Order & Delivery unresolved — must not be guessed | UFD | BUILD NOW | CORE-PLAT | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DENT | BP-§15-4; GPCV §10 item 4; owner SB-P-1.19 (BP §9 row 8); not on SB-P-1.17 critical path (U-10) | — | — | — |
| 18-§25-2 | C18@6b96b10a | §25 n2: unresolved question — exact Smart Stock Assistant (and other add-on) prices | UFD | BUILD NOW | CORE-PLAT | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DENT | BP-§15-4; same item as 18-§4-4; not on SB-P-1.17 critical path (U-10) | — | — | — |
| 20-§5 | C20@56ed4d11 | §5 whole section: first-stage discovery incl. POS habits (b6) and stock needs (b8) | SEC | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19 | A-BP108; I-12 (20-§5 ASSIGNED SB-P-1.19); SB-P-1.17 supplies the stock/POS capabilities discovered | — | — | — |
| 20-§9 | C20@56ed4d11 | §9 whole section: existing-data import incl. POS/catalog exports (b2) | SEC | BUILD NOW | ACT | SB-P-1.19 | ASSIGNED TO LATER MISSION | D19; D14 | A-BP108; I-12 (20-§9); I-14 (20-§9 DELEGATED SB-P-1.19); must reuse UDI (7-§6-*), never a third import stack | — | — | — |
| 21-§4-2 | C21@f4a05d5c | §4 Core Authority Model — Manager (delegated, not assumed) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§4-2 IN SCOPE SB-P-1.12); U-01 | — | — | — |
| 21-§4-3 | C21@f4a05d5c | §4 — Employee (incl. operate stock/order tasks when granted) | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§4-3 IN SCOPE SB-P-1.12); U-09 | — | — | — |
| 21-§4-4 | C21@f4a05d5c | §4 — Supplier: purpose-limited participant in supplier/reorder workflows; no merchant BI | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§4-4 IN SCOPE SB-P-1.12); EIS-ID-03 | — | — | — |
| 21-§11-1 | C21@f4a05d5c | §11 scoped creation (incl. stock events) preserves actor identity | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§11-1 IN SCOPE SB-P-1.12); U-09 | — | — | — |
| 21-§11-2 | C21@f4a05d5c | §11 create-permission ≠ read-all/edit-all/export/analytics | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§11-2 IN SCOPE SB-P-1.12); U-09 | — | — | — |
| 21-§12-1 | C21@f4a05d5c | §12 delegated automation — rule still enabled | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§12-1 IN SCOPE SB-P-1.12); standing reorder rules 7-§5-2 | — | — | — |
| 21-§12-2 | C21@f4a05d5c | §12 — actor/business scope check | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§12-2 IN SCOPE SB-P-1.12); 7-§5-2 | — | — | — |
| 21-§12-3 | C21@f4a05d5c | §12 — exact target/action/limits check | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§12-3 IN SCOPE SB-P-1.12); 7-§5-4 | — | — | — |
| 21-§12-4 | C21@f4a05d5c | §12 — current entitlement/state check | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§12-4 IN SCOPE SB-P-1.12); 7-§5-2 | — | — | — |
| 21-§12-5 | C21@f4a05d5c | §12 — no revocation/permission change since grant | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§12-5 IN SCOPE SB-P-1.12); 7-§13-12 | — | — | — |
| 21-§13-1 | C21@f4a05d5c | §13 participation — Supplier sees only order/request details relevant to that supplier | OBL | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§13-1 IN SCOPE SB-P-1.12); 7-§3-9 | — | — | — |
| 21-§24-3 | C21@f4a05d5c | §24 acceptance 3: Manager sees only delegated capabilities | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§24-3 IN SCOPE SB-P-1.12); U-01; U-09 | — | — | — |
| 21-§24-7 | C21@f4a05d5c | §24 acceptance 7: external participant sees only own bounded workflow data | SCN | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (21-§24-7 IN SCOPE SB-P-1.12); U-09 | — | — | — |
| 22-§4 | C22@61e1bb91 | §4 Business Memory Foundation incl. suppliers (b3) and inventory/catalog (b4) | SEC | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | L-DEL14; I-12 (22-§4 ASSIGNED SB-P-1.14); I-14 (22-§4-4) | — | — | — |
| 22-§5-6 | C22@61e1bb91 | §5 shared identity foundation — supplier | OBL | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§5-6 IN SCOPE SB-P-1.12); EIS-ID-03; consumed by 7-§3-1 | — | — | — |
| 22-§11-3 | C22@61e1bb91 | §11 b3: reminder/delegated automation reuse — supplier/reorder follow-up | OBL | BUILD NOW | CORE-ARCH | SB-P-1.15 | DELEGATED | D15; DSCH | L-DEL15; I-15 (22-§11-3 IN SCOPE SB-P-1.15; consumer SB-P-1.17) | — | — | — |
| 22-§15 | C22@61e1bb91 | §15 idempotency/duplicate protection incl. POS ingestion (b2) | RULE | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§15 single rule, PARTIAL); applied here by 13-§6, 13-§21-2 | — | — | — |
| 22-§17-2 | C22@61e1bb91 | §17 b1: integration/extension adapter pattern — POS | RULE | BUILD NOW | CORE-ARCH | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; I-14 (22-§17-2 ASSIGNED SB-P-1.17); I-15 (same); A-BP106 | — | C | INSP |
| 22-§25 | C22@61e1bb91 | §25 AI orchestration reuse incl. stock/supplier/reorder (b8) | SEC | BUILD NOW | CORE-ARCH | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-12 (22-§25 DELEGATED → C24, SB-P-1.13) | — | — | — |
| 22-§28-6 | C22@61e1bb91 | §28 non-goal — duplicate customer/supplier identity silos | NEG | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§28-6); also IN SCOPE as must-not in SB-P-1.13 to SB-P-1.15; applied here by DC-02 | — | — | — |
| 22-§29-6 | C22@61e1bb91 | §29 acceptance 6: customer/supplier identity not duplicated solely by channel/feature | SCN | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (22-§29-6) | — | — | — |
| 23-§4-4 | C23@2430e1c6 | §4 p4 <Supplier>: bounded supplier communication (purchase-request/reorder responses) via WhatsApp | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; native supplier workflow 7-§5-1; U-05 | — | — | — |
| 23-§10-5 | C23@2430e1c6 | §10 b4: WhatsApp text — updating stock where permitted | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — | — | — |
| 23-§10-6 | C23@2430e1c6 | §10 b5: WhatsApp text — initiating reorder/order workflows | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 | — | — | — |
| 23-§12-4 | C23@2430e1c6 | §12 b2: WhatsApp image/document — stock documents | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; I-14 (23-§12 DELEGATED SB-P-1.20) | — | — | — |
| 23-§16-5 | C23@2430e1c6 | §16 b5: outbound WhatsApp — supplier requests | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; I-16 (23-§16); U-05 | — | — | — |
| 23-§19-3 | C23@2430e1c6 | §19 b1: WhatsApp delivery does not prove a supplier accepted an order | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; DC-11 | — | — | — |
| 23-§20-7 | C23@2430e1c6 | §20 b6: retry/idempotency — supplier requests | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; I-16 (23-§20) | — | — | — |
| 23-§21-4 | C23@2430e1c6 | §21 b4: Meta outage — POS/API/payment reconciliation continue independently | OBL | BUILD NOW | CORE-CH | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; I-16 (23-§21); native precondition 13-§16-12 | — | — | — |
| 24-§6-2 | C24@0c1dcbb2 | §6 distinguish intent classes (illustrative list incl. inventory/stock update, supplier/reorder action) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (24-§6-2; 'routing to later-mission domains depends on those domains') | — | — | — |
| 24-§9-2 | C24@0c1dcbb2 | §9 possible context sources (illustrative; incl. suppliers, inventory/catalog, POS/counter) | OBL | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13; D17 | L-DEL13; I-13 (24-§9-2; each source consumed when its owning domain exists) | — | — | — |
| 24-§10-10 | C24@0c1dcbb2 | §10 example: supplier/customer conversation must not expose internal merchant data | NEG | BUILD NOW | CORE-INT | SB-P-1.13 | DELEGATED | D13 | L-DEL13; I-13 (24-§10-10); feature slice 7-§11-2.5 | — | — | — |
| 24-§18-3 | C24@0c1dcbb2 | §18 example Stock → Reorder → Supplier → Reminder (n13–n17; follow-up uses the shared Reminder Engine) | SCN | BUILD NOW | CORE-INT | SB-P-1.17 | IN SCOPE | D13; D15; DSCH; DNTF | I-13 (24-§18-3 ASSIGNED SB-P-1.17); I-15 (same); A-BP106 | — | B | RT; FRV-A |
| 24-§21-3 | C24@0c1dcbb2 | §21 confirmation required for supplier orders | OBL | BUILD NOW | CORE-INT | SB-P-1.17 | IN SCOPE | D12; D13 | I-13 (24-§21-3 ASSIGNED SB-P-1.17); A-BP106 | — | B | RT; NEG |
| 25-§6-1 | C25@406ce089 | §6 the storage foundation serves listed dependent features incl. Stock/Supplier/Reorder documents (b8) | OBL | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; DR2 | L-DEL14; I-14 (25-§6-1; 'others reuse in their missions') | — | — | — |

## E. Build Plan and Global Product Completion View (95 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BP-§3-1 | BP@9dfdd924 | §3 core philosophy: respect existing merchant habits; enrich rather than replace; human decision ownership visible | PRIN | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §3; realized by 13-§3-*, BP-§10.6-E1 | — | D | EXP |
| BP-§5.3-1 | BP@9dfdd924 | §5.3 canonical vs delivery divergence: mission accounts for delivery path; merge is not production proof | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §5.3; delivery sync NOT AUTHORIZED (MC 05 §5); Δ-06 | — | F | INSP |
| BP-§5.4-1 | BP@9dfdd924 | §5.4 genuinely new external infrastructure (POS provider/adapter) needs activation, credentials, failure, rollback and verification identified | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS | BP §5.4; U-02 | — | C | INSP |
| BP-§6.1-1 | BP@9dfdd924 | §6.1 no UI, AI model, reminder, scheduler, document pipeline or channel may invent authority | NEG | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12 | L-NEG; BP §6.1 | — | E | NEG |
| BP-§6.2-1 | BP@9dfdd924 | §6.2 consequential stock/reorder/POS/closing writes use the one Business Command path (incl. future standard POS adapters) | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12; D13; DTX | BP §6.2 (explicitly names 'future standard POS adapters') | — | F | INSP; RT |
| BP-§6.3-1 | BP@9dfdd924 | §6.3 Supabase/Postgres remains authoritative for structured business truth | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D14 | BP §6.3 | — | F | INSP |
| BP-§6.5-1 | BP@9dfdd924 | §6.5 supplier continuation and reorder timing reuse the one Reminder / Automation kernel | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D15; DSCH | BP §6.5 (names 'supplier continuation'); 22-§11-3 | — | B | INSP |
| BP-§6.6-1 | BP@9dfdd924 | §6.6 thin channel adapters: POS and channels adapt into Smart Business, never separate engines | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS | BP §6.6; 13-§5-* | — | C | INSP |
| BP-§7-1 | BP@9dfdd924 | §7 Product & Price Master preserve list (SB-P-1.12 identifier) | RULE | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (BP-§7-1); consumed by BP-§10.6-W11, 7-§2-1, 13-§4-4 | — | — | — |
| BP-§7-2 | BP@9dfdd924 | §7 preserve import foundations (SB-P-1.12 identifier) | RULE | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (BP-§7-2) | — | — | — |
| BP-§7-3 | BP@9dfdd924 | §7 preserve relationships needed by POS, Orders, Supplier/Reorder, UDI, Transactions, reporting | RULE | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (BP-§7-3); SB-P-1.17 consumes for POS mapping (13-§4-4) and Supplier/Reorder (7-§3-3) | — | — | — |
| BP-§7-4 | BP@9dfdd924 | §7 do not: independent Catalog expansion; delete valid data; collapse into Transactions; Inventory as sole commercial-identity owner | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (BP-§7-4); must-not also checked by BP-§10.6-E3 | — | — | — |
| BP-§7-5 | BP@9dfdd924 | §7 target treatment PRESERVE + EVOLVE + DEMOTE SURFACE; Product & Price Master terminology | RULE | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | L-DEL12; I-12 (BP-§7-5) | — | — | — |
| BP-§8-1 | BP@9dfdd924 | §8 Smart Business must work without WhatsApp: Manager Operations usable natively | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D13 | BP §8; L-X20 for WhatsApp slices | — | E | RT |
| BP-§9-6 | BP@9dfdd924 | §9 row 6: SB-P-1.17 advances Contracts 7, 13, 17 (assignment source) | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | — | INSP |
| BP-§9-AL | BP@9dfdd924 | §9 assignment lock: BUILD NOW assignment changes need a recorded Founder decision | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §9; S18 §3.2 item 5 | — | — | INSP |
| BP-§10.3-S2 | BP@9dfdd924 | §10.3 structured Customer/Supplier-directory-indexed search after identities are established (supplier side) | OBL | BUILD NOW | per contract | SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | NI-SUP; I-14 (BP-§10.3-S2); I-16 (resolved by 16:FPDR-1); U-12 | 16:FPDR-1 | A | RT |
| BP-§10.6-O | BP@9dfdd924 | §10.6 product outcome: useful day-to-day operational management without becoming a heavy ERP | EXP | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | E | EXP |
| BP-§10.6-W1 | BP@9dfdd924 | §10.6 required work area b1: supplier identities and supplier-product relationships | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12 | NI-SUP; A-BP106 | 16:FPDR-1 | A | RT |
| BP-§10.6-W2 | BP@9dfdd924 | §10.6 required work area b2: low-stock / slow-stock intelligence | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D14 | NI-RO; A-BP106 | — | A | RT |
| BP-§10.6-W3 | BP@9dfdd924 | §10.6 required work area b3: expiry/freshness/wastage where data supports it | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D14 | NI-EXP; DC-07; A-BP106 | — | A | RT |
| BP-§10.6-W4 | BP@9dfdd924 | §10.6 required work area b4: reorder intelligence | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D13; D14 | NI-RO; A-BP106 | — | B | RT |
| BP-§10.6-W5 | BP@9dfdd924 | §10.6 required work area b5: Owner-confirmed reorder by default | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12; D13 | NI-RO; U-01; A-BP106 | — | B | RT |
| BP-§10.6-W6 | BP@9dfdd924 | §10.6 required work area b6: bounded delegated reorder where explicitly configured | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12; D15; DSCH | NI-RO; 21-§12; A-BP106 | — | B | RT |
| BP-§10.6-W7 | BP@9dfdd924 | §10.6 required work area b7: standard POS bridge adapters | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; U-02; A-BP106 | 17:FPDR-2 | C | RT |
| BP-§10.6-W8 | BP@9dfdd924 | §10.6 required work area b8: neutral counter review | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS; D12 | NI-POS; A-BP106 | — | D | RT |
| BP-§10.6-W9 | BP@9dfdd924 | §10.6 required work area b9: closing-cash comparison | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12; D14 | NI-CC; DC-09; A-BP106 | — | D | RT |
| BP-§10.6-W10 | BP@9dfdd924 | §10.6 required work area b10: mature Manager workspace | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12 | NI-MGR; NI-ROLE; A-BP106 | — | E | RT |
| BP-§10.6-W11 | BP@9dfdd924 | §10.6 required work area b11: contextual Product & Price Master access | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12 | F-PPM; BP-§7 (SB-P-1.12); A-BP106 | — | A | RT |
| BP-§10.6-W12 | BP@9dfdd924 | §10.6 required work area b12: opening-stock/bulk-stock intake through UDI rather than a third import stack | WORK | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D14 | NI-UDI; F-INV; GPCV §11; 7-§6-2 (SB-P-1.14 opening-stock slice); A-BP106 | — | F | RT |
| BP-§10.6-E1 | BP@9dfdd924 | §10.6 Founder-approved experience p1: existing POS that works is bridged, not insulted or forcibly replaced | EXP | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS | A-BP106 | — | C | EXP; FRV-B |
| BP-§10.6-E2 | BP@9dfdd924 | §10.6 Founder-approved experience p2: POS/counter anomalies are neutral review items, not theft/fraud accusations | EXP | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS | A-BP106 | — | D | EXP; FRV-B |
| BP-§10.6-E3 | BP@9dfdd924 | §10.6 Founder-approved experience p3: product/price management appears where operational work needs it; no Catalog revival as competing top-level product | EXP | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12 | A-BP106; BP §7 | — | A | EXP |
| BP-§10.6-A1 | BP@9dfdd924 | §10.6 Founder Scenario A clause 1: item falls below threshold | FRV | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12; D14 | NI-RO; A-BP106-FRV; Founder-reserved; DC-06 (threshold merchant-configured) | — | B | FRV-A |
| BP-§10.6-A2 | BP@9dfdd924 | §10.6 Founder Scenario A clause 2: evidence-backed reorder suggestion shown | FRV | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12; D13; D14 | NI-RO; A-BP106-FRV; Founder-reserved | — | B | FRV-A |
| BP-§10.6-A3 | BP@9dfdd924 | §10.6 Founder Scenario A clause 3: Owner confirms unless bounded delegation already authorizes it | FRV | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12; D15 | NI-RO; A-BP106-FRV; Founder-reserved; U-01 | — | B | FRV-A |
| BP-§10.6-A4 | BP@9dfdd924 | §10.6 Founder Scenario A clause 4: result links to the same Product & Price Master item identity | FRV | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | D12 | F-PPM; NI-RO; A-BP106-FRV; Founder-reserved | — | B | FRV-A |
| BP-§10.6-B1 | BP@9dfdd924 | §10.6 Founder Scenario B clause 1: standard POS bridge surfaces an unusual discount/counter anomaly | FRV | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106-FRV; Founder-reserved; U-02 | 17:FPDR-2 | D | FRV-B |
| BP-§10.6-B2 | BP@9dfdd924 | §10.6 Founder Scenario B clause 2: UI language remains neutral and asks for review; no accusation of staff | FRV | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | DPOS | NI-POS; A-BP106-FRV; Founder-reserved | — | D | FRV-B |
| BP-§10.6-X | BP@9dfdd924 | §10.6 exit principle: understand the shop without replacing current tools or being accused by the software | EXP | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | A-BP106 | — | E | EXP |
| BP-§11-1 | BP@9dfdd924 | §11 SB-P-1.12 Authority/Identity underpins all later role/permission behaviour | RULE | BUILD NOW | per contract | SB-P-1.12 | DELEGATED | D12 | L-DEL12; BP §11 | — | — | — |
| BP-§11-2 | BP@9dfdd924 | §11 SB-P-1.13 Conversation/AI underpins multilingual conversational workflows and Voice | RULE | BUILD NOW | per contract | SB-P-1.13 | DELEGATED | D13 | L-DEL13; BP §11 | — | — | — |
| BP-§11-3 | BP@9dfdd924 | §11 SB-P-1.14 Business Memory/UDI underpins onboarding imports and document inputs | RULE | BUILD NOW | per contract | SB-P-1.14 | DELEGATED | D14 | L-DEL14; BP §11 | — | — | — |
| BP-§11-4 | BP@9dfdd924 | §11 SB-P-1.15 Reminder/Automation underpins supplier/reorder continuation | RULE | BUILD NOW | per contract | SB-P-1.15 | DELEGATED | D15 | L-DEL15; BP §11 | — | — | — |
| BP-§11-5 | BP@9dfdd924 | §11 SB-P-1.16 Financial Integrity underpins trustworthy credit/payment behaviour (supplier-side credit direction) | RULE | BUILD NOW | per contract | SB-P-1.16 | DELEGATED | D16 | L-DEL16; BP §11; DC-04 | — | — | — |
| BP-§11-6 | BP@9dfdd924 | §11 SB-P-1.17 Stock/Supplier/Reorder underpins Order availability/substitution and supplier-linked workflows | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §11; consumers 1-§10-2, 1-§24-3, 1-§26-5 (SB-P-1.18) | — | A | INSP |
| BP-§11-7 | BP@9dfdd924 | §11 a later mission may complete a contract partly advanced earlier but must not claim earlier work as newly created | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §11; GPCV §7 (SB-P-1.10/SB-P-1.11 inventory and catalog contributors) | — | F | INSP |
| BP-§13-1 | BP@9dfdd924 | §13 Completion Report includes an Experience Verification Matrix seeded from §10.6 at Stage 4 | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §13; process obligation | — | F | GATE |
| BP-§13-9 | BP@9dfdd924 | §13 item 9: §10.6 Founder Runtime Verification scenarios A and B are Founder-reserved and locked at Stage 8 | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §13 item 9; S18 §4.2 | — | F | GATE |
| BP-§14-1 | BP@9dfdd924 | §14 dual-intake rule: consume validated OLE learning and the Phase 1 guide until backfill verified complete | RULE | BUILD NOW | per contract | SB-P-1.17 | IN SCOPE | — | BP §14; S18 §3.1; 04-stage2-institutional-learning-intake.md | — | F | INSP |
| BP-§15-1 | BP@9dfdd924 | §15 unresolved Founder decision item 1: current free-trial policy | UFD | BUILD NOW | per contract | SB-P-1.17 | NOT APPLICABLE | — | Does not concern SB-P-1.17 scope | — | — | — |
| BP-§15-2 | BP@9dfdd924 | §15 unresolved Founder decision item 2: exact Voice Plus price | UFD | BUILD NOW | per contract | SB-P-1.17 | NOT APPLICABLE | — | Does not concern SB-P-1.17 scope | — | — | — |
| BP-§15-3 | BP@9dfdd924 | §15 unresolved Founder decision item 3: exact Staff/HR price | UFD | BUILD NOW | per contract | SB-P-1.17 | NOT APPLICABLE | — | Does not concern SB-P-1.17 scope | — | — | — |
| BP-§15-4 | BP@9dfdd924 | §15 unresolved Founder decision item 4: exact Smart Stock price | UFD | BUILD NOW | per contract | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DENT | BP §15 item 4; GPCV §10 item 4; affects only 7-§9-2 packaging price, not capability definition; not on critical path (U-10) | — | — | — |
| BP-§15-5 | BP@9dfdd924 | §15 unresolved Founder decision item 5: exact Smart Order & Delivery price | UFD | BUILD NOW | per contract | SB-P-1.17 | NOT APPLICABLE | — | Does not concern SB-P-1.17 scope | — | — | — |
| BP-§15-6 | BP@9dfdd924 | §15 unresolved Founder decision item 6: exact long-term retention/deletion duration after cancellation/non-payment | UFD | BUILD NOW | per contract | SB-P-1.19 | UNRESOLVED FOUNDER DECISION | DUF6 | BP §15 item 6; I-16 (U-08); bears on retention of POS operator-level data (U-11); not on SB-P-1.17 definition critical path | — | — | — |
| BP-§15-7 | BP@9dfdd924 | §15 unresolved Founder decision item 7: employee KYC/national-ID necessity and legal/privacy basis | UFD | BUILD NOW | per contract | SB-P-1.17 | NOT APPLICABLE | — | Does not concern SB-P-1.17 scope | — | — | — |
| BP-§15-8 | BP@9dfdd924 | §15 unresolved Founder decision item 8: broader wholesaler/marketplace expansion | UFD | BUILD NOW | per contract | SB-P-1.17 | UNRESOLVED FOUNDER DECISION | — | BP §15 item 8; supplier memory stays merchant-private (7-§3-9); no supplier network or marketplace in scope; not on critical path | — | — | — |
| BP-§15-9 | BP@9dfdd924 | §15 unresolved Founder decision item 9: third-party underwriting/lending ecosystem | UFD | BUILD NOW | per contract | SB-P-1.17 | NOT APPLICABLE | — | Does not concern SB-P-1.17 scope | — | — | — |
| BP-§16-1 | BP@9dfdd924 | §16 rejection b1: Ask CFO as write-capable authority | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-2 | BP@9dfdd924 | §16 rejection b2: AI accusation/judgment of employees or customers | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-3 | BP@9dfdd924 | §16 rejection b3: continuous staff GPS surveillance by default | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-4 | BP@9dfdd924 | §16 rejection b4: automated wage punishment | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-5 | BP@9dfdd924 | §16 rejection b5: blind supplier procurement without valid Owner delegation | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-6 | BP@9dfdd924 | §16 rejection b6: hard credit blocking by default | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-7 | BP@9dfdd924 | §16 rejection b7: custom client-specific POS modification inside core | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-8 | BP@9dfdd924 | §16 rejection b8: marketplace behavior inside Smart Order & Delivery | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-9 | BP@9dfdd924 | §16 rejection b9: customer silence automatically invalidating otherwise sufficiently proven delivery | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-10 | BP@9dfdd924 | §16 rejection b10: duplicate channel-specific Business Memory | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-11 | BP@9dfdd924 | §16 rejection b11: duplicate channel-specific permission models | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-12 | BP@9dfdd924 | §16 rejection b12: separate AI brains per feature/channel | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-13 | BP@9dfdd924 | §16 rejection b13: model conversation history as permanent Business Memory | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-14 | BP@9dfdd924 | §16 rejection b14: uncontrolled binary-media concentration in Supabase for convenience | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-15 | BP@9dfdd924 | §16 rejection b15: provider URLs as permission authority/business identity | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-16 | BP@9dfdd924 | §16 rejection b16: destructive subscription-driven schema creation/deletion | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-17 | BP@9dfdd924 | §16 rejection b17: broad routine Super Admin access to merchant private data | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-18 | BP@9dfdd924 | §16 rejection b18: revival of /survey or obsolete domains/routes | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-19 | BP@9dfdd924 | §16 rejection b19: old Daily Intelligence timing that conflicts with the approved rhythm | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| BP-§16-20 | BP@9dfdd924 | §16 rejection b20: independent Catalog product expansion | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | BP §16 (REJECT preserved verbatim; must-not-appear check) | — | — | NEG |
| GPCV-§9-1 | GPCV@ee76d920 | §9 automatic hard customer-credit blocking by default — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-2 | GPCV@ee76d920 | §9 AI accusation/punishment — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-3 | GPCV@ee76d920 | §9 continuous employee GPS surveillance — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-4 | GPCV@ee76d920 | §9 automatic wage docking/fines — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-5 | GPCV@ee76d920 | §9 blind supplier procurement without Owner-delegated authority — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-6 | GPCV@ee76d920 | §9 custom client-specific POS modifications inside core — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-7 | GPCV@ee76d920 | §9 dynamic CREATE/DROP core schema by subscription state — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-8 | GPCV@ee76d920 | §9 routine broad Super Admin access to merchant private business data — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-9 | GPCV@ee76d920 | §9 public marketplace behavior for current Smart Order & Delivery — REJECT | REJ | REJECT | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-10 | GPCV@ee76d920 | §9 embedded lending/underwriting inside current Smart Business core — REJECT FOR CURRENT CORE | REJ | REJECT FOR CURRENT CORE | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear) | — | — | NEG |
| GPCV-§9-11 | GPCV@ee76d920 | §9 future wholesaler/marketplace expansion — not current core; separate Founder decision | REJ | SEPARATE FOUNDER DECISION | REJECT | SB-P-1.17 | OUT OF BUILD SCOPE | — | GPCV §9 (verbatim; must-not-appear); BP-§15-8 | — | — | NEG |
| GPCV-§11-1 | GPCV@ee76d920 | §11 opening-stock disposition: product capability PRESERVE — STILL CURRENT / BUILD NOW | RULE | BUILD NOW | MGR/ADDON | SB-P-1.14 | DELEGATED | D14 | L-DEL14; GPCV §11; I-14 (7-§6-2); consumed by BP-§10.6-W12 | — | — | — |
| GPCV-§11-2 | GPCV@ee76d920 | §11 Lovable opening-stock code is reusable engineering evidence; direct promotion rejected | NEG | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | D14 | L-NEG; GPCV §11; GPCV row 7 'promote stale Lovable import unchanged' not authorized | — | F | INSP |
| GPCV-R7 | GPCV@ee76d920 | §5 row 7 assignment: Stock/Supplier/Reorder — Manager core; Smart Stock add-on path for Ledger; BUILD NOW; IMPLEMENTED BUT INCOMPLETE | RULE | BUILD NOW | MGR/ADDON | SB-P-1.17 | IN SCOPE | — | GPCV row 7; F-INV; F-PPM | — | A | GATE |
| GPCV-R13 | GPCV@ee76d920 | §5 row 13 assignment: POS/Counter/Closing Cash — Manager core / standard integration layer; BUILD NOW; NOT IMPLEMENTED | RULE | BUILD NOW | MGR-CORE | SB-P-1.17 | IN SCOPE | — | GPCV row 13; NI-POS; NI-CC | — | C | GATE |
| GPCV-R17 | GPCV@ee76d920 | §5 row 17 assignment: Operational Dashboard & Manager Workspace — Manager core; role-appropriate Ledger surfaces; BUILD NOW; IMPLEMENTED BUT INCOMPLETE | RULE | BUILD NOW | MGR+LDG | SB-P-1.17 | IN SCOPE | — | GPCV row 17; F-DASH | — | E | GATE |

## F. Totals

**Total rows: 630.**

| Part | Rows | IN SCOPE | DELEGATED | ASSIGNED TO LATER MISSION | NOT APPLICABLE | OUT OF BUILD SCOPE | UNRESOLVED FOUNDER DECISION | ESCALATED |
|---|---|---|---|---|---|---|---|---|
| A. Contract 7 | 117 | 102 | 14 | 0 | 1 | 0 | 0 | 0 |
| B. Contract 13 | 159 | 151 | 0 | 1 | 7 | 0 | 0 | 0 |
| C. Contract 17 | 143 | 94 | 36 | 3 | 10 | 0 | 0 | 0 |
| D. Delegated, touched, downstream-consumer and adjacent contracts | 116 | 13 | 90 | 11 | 0 | 0 | 2 | 0 |
| E. Build Plan and Global Product Completion View | 95 | 44 | 11 | 0 | 6 | 31 | 3 | 0 |
| **Total** | **630** | **404** | **151** | **15** | **24** | **31** | **5** | **0** |

| Owning mission | Rows |
|---|---|
| SB-P-1.17 | 456 |
| SB-P-1.12 | 52 |
| SB-P-1.15 | 45 |
| SB-P-1.14 | 23 |
| SB-P-1.13 | 21 |
| SB-P-1.20 | 10 |
| SB-P-1.18 | 9 |
| SB-P-1.19 | 6 |
| SB-P-1.16 | 4 |
| SB-P-1.17 / SB-P-1.18 | 3 |
| SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | 1 |

| Kind | Rows |
|---|---|
| `OBL` | 228 |
| `RULE` | 104 |
| `NEG` | 85 |
| `SCN` | 56 |
| `CONS` | 39 |
| `REJ` | 31 |
| `PRIN` | 21 |
| `NARR` | 13 |
| `WORK` | 12 |
| `UFD` | 11 |
| `EXP` | 10 |
| `SEC` | 7 |
| `FRV` | 6 |
| `GATE` | 3 |
| `HIST` | 2 |
| `PROV` | 2 |

| Workstream (IN SCOPE rows) | Rows |
|---|---|
| WS17-A | 59 |
| WS17-B | 31 |
| WS17-C | 47 |
| WS17-D | 73 |
| WS17-E | 81 |
| WS17-F | 111 |
| none (process/assignment rows) | 2 |

| Dependency code (rows citing it) | Rows |
|---|---|
| `D12` | 266 |
| `D14` | 142 |
| `DPOS` | 102 |
| `D15` | 82 |
| `D13` | 70 |
| `D17` | 38 |
| `DSCH` | 35 |
| `DTX` | 13 |
| `D20` | 10 |
| `D16` | 9 |
| `D18` | 9 |
| `DAI` | 8 |
| `DNTF` | 7 |
| `DENT` | 7 |
| `DV` | 4 |
| `D19` | 2 |
| `DSEC` | 1 |
| `DPAY` | 1 |
| `DR2` | 1 |
| `DUF6` | 1 |

| Founder decision cited | Rows |
|---|---|
| `16:FPDR-1` | 5 |
| `12:FR-09` | 4 |
| `14:FPDR-1` | 2 |

**Escalated rows:** none. **`ALREADY DEMONSTRATED` rows:** none. **`DEMONSTRATED` rows:** none.

**Unresolved Founder decision rows (5):** `18-§4-4`, `18-§25-2`, `BP-§15-4`, `BP-§15-6`, `BP-§15-8`. None is judged on the SB-P-1.17 definition critical path (Truth Pack Part D, U-10 and U-11); Mission Control confirmation requested.

**STOP FOR MISSION CONTROL STAGE 2 REVIEW. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
