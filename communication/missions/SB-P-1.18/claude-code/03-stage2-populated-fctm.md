# SB-P-1.18 — Stage 2 Populated FCTM

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Lifecycle stage:** Source 18 v1.2, Stage 2 — Mission Truth and Delta Reconciliation (Section 3.2, Section 6)
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL STAGE 2 REVIEW AND FOUNDER HUMAN MERGE`
**Current status note:** The Status line above is the statement made at publication and is kept unchanged as history. This file was Founder-merged in PR #1080 (`main@650249b855a7a1460c9b8d4575c68e52cddeede1`, 2026-10-25T17:11:53Z), and Mission Control accepted the Stage 2 Truth Pack as the basis for Stage 3 (MC-513A; `mission-control/06-…` §1). That acceptance is documentary only: it is not locked Product Truth, implementation evidence or Stage 3 completion. The rows and legend entries that differ from that merge apply the canonical Founder decisions `18:FPDR-2`, `18:FPDR-3`, `18:FPDR-5`, `18:FPDR-4` and `18:FPDR-1`, and Part B2 uses the Source 18 v1.3 §3.2 item 1 exception; no other row changed.
**Prepared by:** Claude Code, Definition Actor (appointed by `mission-control/04-stage1-intake-disposition-and-definition-actor-appointment.md`, PR #1078), under `mission-control/05-stage2-mission-truth-and-delta-authorization.md` (PR #1079)
**Baseline:** `main@ccfdd28a322073be67a0ea7c3658ec8685b7d2cc` (PR #1079 merge), 2026-10-25
**Opened by:** Stage 1 FCTM opening proposal `claude-code/02-stage1-fctm-opening-and-source-coverage-proposal.md` (PR #1076) and Mission Control's opening in `mission-control/04-…` §1; neither record is modified
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This matrix is an accounting of approved truth. It adds no product decision and reopens no approved decision. Requirement text lives only in the source contracts; rows hold pointers, short labels, dispositions and citations. The source-text obligation inventory and the set comparison are in `07-stage2-source-obligation-inventory-and-completeness-evidence.md`.

**No row is `ALREADY DEMONSTRATED` and no row is `DEMONSTRATED`.** SB-P-1.12 to SB-P-1.17 outputs are locked specifications with Implementation Authorization WITHHELD, and the repository contains no order, delivery, customer, staff, attendance, payroll, compliance, role or location object (`08-…` §2).

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force.`

## 0. How to read this matrix

### 0.1 Columns

| Column | Meaning |
|---|---|
| Row ID | `<contract>-§<section>-<ordinal>`. For C1, C6 and C16 the ordinal counts the section's separately verifiable units (bullets, numbered items, prose paragraphs) in source order, across subsections, skipping lead-ins. This is the scheme SB-P-1.14, SB-P-1.16 and SB-P-1.17 used for their C1/C6/C16 rows, and all 21 of their unit identifiers match it (Section 0.9). Suffix `a`/`b` splits one unit between this mission and SB-P-1.20. Delegated-contract units keep the owning mission's identifier. Build Plan rows use `BP-§<section>-<n>` for §15 and §16 bullets (the identifiers every predecessor used), and the parser locator (`BP-§11-b6`, `BP-§13-p1`, `BP-§5.5-p1`) where predecessor ordinals disagree; GPCV rows use `GPCV-§<section>-<n>` or `GPCV-R<row>`. The only other form is `S11-L443-1` to `S11-L443-5` (Part B2), permitted solely by the Source 18 v1.3 §3.2 item 1 exception: five verification-facet rows of the one Source 11 L443 obligation interpreted by `18:FPDR-5`, anchored to line 443 of the pinned Source 11 blob (Section 0.2). No other Source 11 identifier is permitted |
| Source @ blob | Source code and the first eight characters of its blob (full SHAs in Section 0.2) |
| Exact source pointer | Section, `<subsection>` label where present, and parser locator (`b<k>` k-th bullet, `p<k>` k-th prose paragraph, `t<k>` table line) with a short label. The label is a pointer, not requirement text |
| Kind | Row kind (Section 0.5) |
| Build commitment | Global Product Completion View value, verbatim |
| Commercial | Commercial classification code (Section 0.4) |
| Owning mission | The mission that owns the obligation under an approved source; joint upstream assignments kept verbatim |
| Disposition | Source 18 §3.2 item 3 vocabulary only |
| Dependency / hold | Dependency or hold code (Section 0.6). A dependency never moves a row (Source 18 §3.2 item 5) |
| Evidence / citation | Implementation-evidence code and disposition citation (Section 0.7) |
| Founder decision | Founder Decision ID where the row rests on one |
| WS | Draft documentary workstream: `A` Order & Delivery, `B` Staff/HR, `C` Compliance, `D` Shared Location Foundation, `V` assurance and Founder-verification design (Stage 1 disposition §1). `IN SCOPE` rows only; not an implementation allocation |
| Verification target | Planned evidence-class seed for `IN SCOPE` rows (Section 0.10). Not a test or a result |

### 0.2 Sources and blobs at the baseline

Every blob was read with `git rev-parse origin/main:<path>` at `ccfdd28a`. Every primary-contract, Build Plan and GPCV blob equals the Stage 1 manifest (`02-stage1-…` §2): no source drifted (`04-…` Part C, Δ-01).

| Code | File (`docs/phase-1-mission-blueprint/smart-business-features/`) | Blob |
|---|---|---|
| `C1` | `01_Smart_Order_and_Delivery_Assistant.md` | `b392c8cb851683ea7bba1d6351c565a4c0c555ed` |
| `C6` | `06_Staff_and_HR_Assistant.md` | `ebacd1838ec709241c07d3ab911377b6284b90d2` |
| `C16` | `16_Compliance_Shield.md` | `420269d8407485fc659072242fff03cd27f023e4` |
| `C22` | `22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| `C17` | `17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| `C21` | `21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| `C3` | `03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| `C5` | `05_Universal_Document_and_Receipt_Intelligence.md` | `80ac648e6764f0288f04a4591902ba029d01ab58` |
| `C9` | `09_Human_Language_Layer.md` | `649c55f396e3cd53f31e95bbafbd6af5fc7550a7` |
| `C10` | `10_Conversation_Workspace_and_Channel_Independence.md` | `5c145ed72677800893954602d403cc73e957731a` |
| `C12` | `12_Voice_and_Voice_Plus.md` | `6d48feff8f9fddffbbc98ee23a71a541299e48ba` |
| `C24` | `24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md` | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| `C18` | `18_Subscription_Payment_and_Account_Lifecycle.md` | `6b96b10aee35036b18afb3bba7a4950e7b36b7fb` |
| `C23` | `23_WhatsApp_Intelligence_and_Channel_Adapter.md` | `2430e1c6191908bb23a5971405b8214d8d98d7ff` |
| `BP` | `00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| `GPCV` | `00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| `S11` | `merge/active/11_Smart_Business_Product_Truth_Map.md` (Source 11, outside this folder; line 443 only, for rows `S11-L443-*`) | `16897d6c875bb3e45e26cd32a99bc0510c4bdea1` |
| `C2`, `C4`, `C7`, `C8`, `C11`, `C14`, `C15`, `C25` | as in `02-stage1-…` §2 (touched delegates) | `53635557`, `ce940d25`, `65ad91b2`, `97397780`, `e802745a`, `16914a83`, `632f3402`, `406ce089` |

| Code | Predecessor FCTM | Blob |
|---|---|---|
| `FCTM-12` | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| `FCTM-13` | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` | `97ddc752dcbbdb6586110a782ef1e24405b6dd22` |
| `FCTM-14` | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` | `01e9856aca0afdb1267230a1932fe34054449a4b` |
| `FCTM-15` | `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` | `65eeaf8d31b81595b971c22895615a096555f84f` |
| `FCTM-16` | `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `94dd52202ad040f64394f07f95389d02ffcc5dd0` |
| `FCTM-17` | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md` | `cb79088d3fa59f8b3226fd9d11ff9c9573666670` |

Founder decisions cited: SB-P-1.12 `founder/03-stage3-founder-product-decision-record.md` (`FPDR-1` to `FPDR-4`, merged PR #628, cited by the locked SB-P-1.12 Blueprint); `16:FPDR-1` (SB-P-1.16 shared customer identity, canonical per `FCTM-16` §0.1).

### 0.3 Stage 1 scaffold reconciliation

The Stage 1 proposal's twelve columns are kept; its `Pointer` column is `Exact source pointer`, its `Dependency` column is `Dependency / hold`, and a `Verification target` seed is added (as in SB-P-1.17). Its seed counts (C1 31 sections and 14 scenarios, C6 17 and 10, C16 23 and 10, three Founder scenarios) are confirmed by the parser (`07-…` §1). Its "33 unique inherited rows" are confirmed in Section 0.9. Its reverse-dependency seed (20 SB-P-1.15 rows) was **incomplete**: the Stage 2 screen found 18 further rows in SB-P-1.13 and SB-P-1.16 that carry `D18`, and three SB-P-1.15 event-trigger rows that consume this mission's events without carrying `D18` (Part F; Δ-11).

### 0.4 Commercial classification codes

| Code | Source |
|---|---|
| `ADDON-LM` | Add-on for Ledger + Manager (GPCV rows 1, 6, 16; contract headers) |
| `CORE-ARCH` | Core cross-product architecture (GPCV row 22) |
| `CORE-FDN` | Core shared foundation (GPCV rows 5, 9, 11, 21, 25) |
| `CORE-LM` | Core, Ledger + Manager (GPCV rows 3, 12, 15) |
| `CORE-INT` | Core shared intelligence foundation (GPCV row 24) |
| `CORE-CH` | Core shared channel or adapter (GPCV rows 10, 23) |
| `CORE-PLAT` | Core platform commercial capability (GPCV row 18) |
| `MGR+LDG` | Manager core; role-appropriate Ledger surfaces (GPCV row 17) |
| `MGR/ADDON` | Manager core; Smart Stock add-on path for Ledger (GPCV row 7) |
| `per contract` / `per owner` | Build Plan and GPCV rows inherit the family's classification; reverse rows keep the owner's |
| `REJECT` | Build Plan §16, GPCV §9 or a contract non-goal or superseded item |

### 0.5 Row kinds

`OBL` obligation; `NEG` must-not check; `RULE` architectural, reuse or governance rule; `PRIN` principle; `EXP` approved experience; `NARR` problem-statement narrative; `SCN` acceptance scenario or worked example; `FRV` Founder Runtime Verification scenario (Founder-reserved); `WORK` Build Plan required outcome; `GATE` completion gate; `HIST` historical or superseded item; `PROV` provenance; `CONS` consumer relationship; `UFD` Build Plan §15 or contract unresolved Founder question; `REJ` rejection checked as must-not-appear; `EX` permissive implementation example (MC-510): the source introduces the unit with "may include", "as appropriate", "may help propose" or "where supported". The row's citation names the rows that carry the section's mandatory outcome, which are verified in every case. Whether the example itself is mandatory is open and Founder-reserved (U-12 / F-4), so the row stays `IN SCOPE` with its source commitment unchanged until the Founder decides. Current note: `18:FPDR-4` (F-4 Option A; PR #1094, merge `fdd11c34`) has decided this for every `EX` row. Each now cites `L-F4M` or `L-F4A` (Section 0.7); the `6-§5-2` QR plus point-in-time geofence element stays conditional on DC-14.

### 0.6 Dependency and hold codes

| Code | Dependency | State at this baseline (`08-…` §3) |
|---|---|---|
| `—` | None beyond this mission | — |
| `D12` | SB-P-1.12 authority kernel: memberships, Owner/Manager/Employee/Customer/Delivery Staff identities and roles, capability grants, entitlements (21-§16), support access (21-§14), revalidation, isolation, audit, idempotency (22-§15) | Specification locked; WITHHELD; not implemented (RLS is `owner_id`-scoped) |
| `D13` | SB-P-1.13 Conversation/AI kernel, Human Language Layer, typed tools, confirmation | Specification locked; WITHHELD; not implemented |
| `D14` | SB-P-1.14 Business Memory, Ledger, UDI, Receipt Cabinet, governed storage | Specification locked; WITHHELD; not implemented |
| `D15` | SB-P-1.15 Reminder Engine, Notification Foundation (`12:FPDR-1`, native only), Daily Intelligence, Ask CFO | Specification locked; WITHHELD; not implemented |
| `D16` | SB-P-1.16 financial integrity: COD and payment-evidence linkage (15-§15), credit (14-§13), FIN-01 PROVISIONAL | Specification locked; WITHHELD; not implemented |
| `D17` | SB-P-1.17 stock/availability (7-§2) and Manager workspace shell | Specification locked; WITHHELD; not implemented |
| `D18` | This mission's own order, staff, compliance and location facts, as consumed by a row owned elsewhere (Part F) | Not started |
| `D19`, `D20` | SB-P-1.19 subscription, support and stewardship; SB-P-1.20 WhatsApp adapter | Not started |
| `DTX` | One governed transactions-family write path (PQ-2) | Cut-over undecided; migration NOT AUTHORIZED |
| `DSCH` | Scheduler and business timezone | UNVERIFIED; activation NOT AUTHORIZED |
| `DAI`, `DV` | AI provider and Basic Voice provider behind SB-P-1.13 | UNVERIFIED; activation NOT AUTHORIZED |
| `DR2` | Approved durable object storage (SB-P-1.14) | UNVERIFIED; activation NOT AUTHORIZED |
| `DNTF` | Approved out-of-app channel to customers or delivery staff | **None before SB-P-1.20** (U-01) |
| `DENT` | Add-on entitlement state (21-§16 in SB-P-1.12; C18 lifecycle in SB-P-1.19) | Specification only; prices unresolved, not critical path (U-07) |
| `DPAY` | Authenticated payment-evidence source (SB-P-1.16) | No source selected; NOT AUTHORIZED |
| `DLOC` | **Stage 1 code.** Device point-in-time location capture and QR attendance mechanism, behind this mission's Shared Location Foundation (WS-D) | Nothing exists; no provider chosen |
| `DMAP` | **Stage 1 code.** Map/address provider for "open address/map" (C1 §13 b2) | None; a new external provider triggers BP §5.4 and mandatory specialist review |
| `DLEG` | **Stage 1 code.** Qualified legal/privacy validation (India employment, payroll, location and customer data) | Not obtained (SB-P-1.17 U-11 precedent) |
| `HU-03` | Row held by the `ESCALATED` row `22-§16-6` (U-03; F-1) | Released by `18:FPDR-1` (PR #1099, merge `d5a264fd`); no row carries it. `HU-02` (held by `1-§14-5`, U-02) was released by `18:FPDR-2`; no row carries it |

`DPOS` and `DSEC` were screened: no row of this mission needs a POS source; `DSEC` arises only if `DMAP` or an OTP provider is adopted (`08-…` §3).

### 0.7 Evidence and citation codes

Implementation evidence is **repository text at `main@ccfdd28a` only** (`08-…` §2). No runtime, production or delivery-repository state was inspected or is claimed.

| Code | Meaning |
|---|---|
| `NI-ORD` | Not implemented: no order, order-line, delivery, assignment, proof or customer object; no order route |
| `NI-HR` | Not implemented: no employee, shift/roster, attendance, leave or payroll-support object; no staff route |
| `NI-CMP` | Not implemented: no compliance record, renewal or compliance route |
| `NI-LOC` | Not implemented: no location capture, purpose, retention or access-end mechanism |
| `NI-ROLE` | Not implemented: no Manager/Employee/Delivery Staff/Customer role or grant; RLS is `owner_id`-scoped |
| `NI-UDI`, `NI-NTF`, `NI-REM`, `NI-PAY` | Not implemented: shared UDI pipeline; notification foundation; reminder engine; payment evidence |
| `A-BP107` | Build Plan §9 row 7 and §10.7 assign the requirement to SB-P-1.18 |
| `A-BP107-FRV` | Build Plan §10.7 Founder Runtime Verification scenarios |
| `A-BP108`, `A-BP109` | Build Plan §9 rows 8–9 and §§10.8–10.9 (SB-P-1.19, SB-P-1.20) |
| `I-12` to `I-17` | Assignment or disposition inherited from the canonical predecessor FCTM (Section 0.2) |
| `L-X20` | Native slice here; WhatsApp-channel slice belongs to SB-P-1.20 (BP §8.4, §9 row 9, §10.9) |
| `L-F3P` | `18:FPDR-3` Package P: the native leg stays here; the named customer-channel leg (unit after `→`, as defined in the F-3 v2/v2a/v2b instrument) is SB-P-1.20's, reuses the shared engines, and must be accepted there before the first ten pilot merchants (U-09). Until it passes: "customer channel: not demonstrated". L1/L2 show only that the send path works; with L2 only: "provider accepted; customer delivery not independently confirmed". A-STOP and A-WEL are channel acceptance references, not business or consent state. `DNTF` stays on the row until that leg passes. U-01 resolved for the row |
| `L-F3W` | `18:FPDR-3` Package W: the row's customer-channel intake obligation is assigned to SB-P-1.20 by Founder T7 decision (Source 18 §3.2 item 5; BP §11 final paragraph). The shared text, voice, image and document interpretation engines (D13, DV, D14) stay with their owners and are neither moved nor recreated. Commitment unchanged; not accepted until the SB-P-1.20 channel acceptance passes, which must be before the first ten pilot merchants (U-09); `DNTF` stays on the row until then. U-01 resolved for the row |
| `L-F4M` | `18:FPDR-4` named minimum (F-4 Option A; PR #1094, merge `fdd11c34`): the mechanism is a required Stage 3/EIS commitment subject to every linked guard on the row, and the section's independently mandatory outcome rows are always verified. On `6-§5-2` it covers only QR plus point-in-time geofence, conditional on DC-14, which stays open and cannot be bypassed. Citation and verification shorthand only: not a new Source or Contract obligation and not a permission grant |
| `L-F4A` | `18:FPDR-4` permitted and adoptable (F-4 Option A; PR #1094, merge `fdd11c34`): verify if adopted; not universally required and not prohibited. The section's independently mandatory outcome rows are still verified, and every linked guard on the row still applies. Citation and verification shorthand only: not a new Source or Contract obligation and not a permission grant |
| `L-F1` | `18:FPDR-1` (F-1; PR #1099, merge `d5a264fd`): U-03 resolved as a provisional research-backed Phase One assumption — not professionally validated. Event-triggered, class-specific rules for attendance (A2), delivery proof (B2) and customer destinations (C1, C2, C3), and only individually justified, documented, access-restricted holds with an end condition (record §4, §5). No numeric raw-GPS retention period, no new capture mode or use, no legal clearance and no production legal reliance; `DLEG` stays and professional validation is deferred (Founder Decision Record 06 §3, §4). Citation shorthand only: not a new Source or Contract obligation; the record prevails |
| `L-F5` | `18:FPDR-5`: Source 11 L443 "overtime records" is a distinct SB-P-1.18 recording obligation (U-05 resolved as to representation only), carried by the facet rows `S11-L443-1` to `S11-L443-5`. Not decided and not cleared: overtime definition, eligibility, thresholds, multipliers, wage calculation, export content, record-class retention and the professional-validation questions (`DLEG`, before the EIS). No payroll-export obligation arises |
| `L-S11` | Source 18 v1.3 §3.2 item 1 exception (operative from the PR #1091 merge, 2026-10-28T14:52:55Z): the row is one of exactly five verification facets of the one Source 11 L443 obligation, cited to `S11@16897d6c` line 443 and `18:FPDR-5`. Contract 06 and Contract 17 units cited as context are behaviour context only, not the source anchor. Adds no obligation, feature, calculation, payroll export or retention rule |
| `AEG-1` | Mission Control acceptance hold (MC-558-R2): customer-receipt acceptance evidence where L3 is unavailable. Not resolved by assignment |
| `L-NEG`, `L-NARR`, `L-HIST`, `L-PROV`, `L-DEP`, `L-DEL` | Contract non-goal; narrative; historical/superseded; provenance; dependency declaration; owned elsewhere |
| `permissive example` / `permissive proposal option` / `permissive wording` | Citation form of an `EX` row (Section 0.5; MC-510, MC508-F01). It names the mandatory-outcome rows and the open Founder determination (U-12 / F-4, or DC-14 for `6-§5-2`). `17:FPDR-7` settled the same pattern for SB-P-1.17 only and is not applied here. Current note: the F-4 determination is decided by `18:FPDR-4`; on each row the code `L-F4M` or `L-F4A` replaces the open-determination clause, and DC-14 stays open for `6-§5-2` |
| `U-nn`, `Δ-nn`, `DC-nn` | Uncertainty register (`05-…`), Delta register and derived constraint (`04-…`) |

### 0.8 Founder decision IDs

Namespaced by mission. `12:FPDR-1`: Notification Foundation owned by SB-P-1.15. `12:FPDR-2`: distinct, reusable, purpose-limited Shared Location Foundation workstream inside SB-P-1.18. `12:FPDR-3`: each location-consuming feature's owning mission defines and demonstrates purpose, audience, capture timing, retention and access end; SB-P-1.18 supplies them for attendance and delivery, and no new retention period or capture mode is authorized. `16:FPDR-1`: basic shared customer identity in SB-P-1.16; SB-P-1.17 and SB-P-1.18 retain their later directory, search and related capabilities. SB-P-1.18 decisions (canonical): `18:FPDR-2` (F-2, live tracking; PR #1082, merge `959f5099`), `18:FPDR-5` (F-5, overtime records; PR #1085, merge `c86afd9b`), `18:FPDR-3` (F-3, customer-facing interactions before SB-P-1.20; PR #1087, merge `da3a4365`), `18:FPDR-4` (F-4, permissive mechanisms; PR #1094, merge `fdd11c34`), `18:FPDR-1` (F-1, location retention and access expiry; PR #1099, merge `d5a264fd`).

### 0.9 Identifier preservation and inherited-row reconciliation

**Inherited assignments.** The 33 unique identifiers that predecessor FCTMs assign to SB-P-1.18 (Stage 1 intake §3.3) were checked against each source FCTM at the baseline: the row exists, names SB-P-1.18, and has a row here. Result: **all 33 present**.

| Inherited ID | Source FCTM | Row exists | Names SB-P-1.18 | Row(s) in this FCTM |
|---|---|---|---|---|
| `22-§16-1` | SB-P-1.12 | yes | yes | 22-§16-1 |
| `22-§16-3` | SB-P-1.12 | yes | yes | 22-§16-3 |
| `22-§16-4` | SB-P-1.12 | yes | yes | 22-§16-4 |
| `22-§16-5` | SB-P-1.12 | yes | yes | 22-§16-5 |
| `22-§16-6` | SB-P-1.12 | yes | yes | 22-§16-6 |
| `22-§16-7` | SB-P-1.12 | yes | yes | 22-§16-7 |
| `22-§29-9` | SB-P-1.12 | yes | yes | 22-§29-9 |
| `17-§9` | SB-P-1.12 | yes | yes | 17-§9-1, 17-§9-2, 17-§9-3, 17-§9-4, 17-§9-5, 17-§9-6, 17-§9-7 |
| `17-§10` | SB-P-1.12 | yes | yes | 17-§10-1, 17-§10-2, 17-§10-3, 17-§10-4, 17-§10-5, 17-§10-6, 17-§10-7 |
| `24-§18-4` | SB-P-1.13 | yes | yes | 24-§18-4 |
| `24-§21-6` | SB-P-1.13 | yes | yes | 24-§21-6 |
| `9-§12-7` | SB-P-1.13 | yes | yes | 9-§12-7 |
| `9-§12-9` | SB-P-1.13 | yes | yes | 9-§12-9 |
| `9-§12-12` | SB-P-1.13 | yes | yes | 9-§12-12 |
| `10-§13-5` | SB-P-1.13 | yes | yes | 10-§13-5 |
| `10-§13-7` | SB-P-1.13 | yes | yes | 10-§13-7 |
| `12-§4-4` | SB-P-1.13 | yes | yes | 12-§4-4 |
| `12-§7-7` | SB-P-1.13 | yes | yes | 12-§7-7 |
| `3-§9-3` | SB-P-1.14 | yes | yes | 3-§9-3 |
| `3-§11-6` | SB-P-1.14 | yes | yes | 3-§11-6 |
| `3-§15-7` | SB-P-1.14 | yes | yes | 3-§15-7 |
| `3-§15-12` | SB-P-1.14 | yes | yes | 3-§15-12 |
| `3-§15-13` | SB-P-1.14 | yes | yes | 3-§15-13 |
| `5-§4-11` | SB-P-1.14 | yes | yes | 5-§4-11 |
| `5-§4-12` | SB-P-1.14 | yes | yes | 5-§4-12 |
| `5-§4-13` | SB-P-1.14 | yes | yes | 5-§4-13 |
| `5-§6-10` | SB-P-1.14 | yes | yes | 5-§6-10 |
| `5-§6-12` | SB-P-1.14 | yes | yes | 5-§6-12 |
| `5-§7-5` | SB-P-1.14 | yes | yes | 5-§7-5 |
| `5-§7-6` | SB-P-1.14 | yes | yes | 5-§7-6 |
| `5-§7-7` | SB-P-1.14 | yes | yes | 5-§7-7 |
| `BP-§10.3-S2` | SB-P-1.14 | yes | yes | BP-§10.3-S2 |
| `17-§4-15` | SB-P-1.17 | yes | yes | 17-§4-15 |

`17-§9` and `17-§10` were section-level in SB-P-1.12 and SB-P-1.17; this mission takes them in scope and expands them to unit rows (Source 18 §3.2 item 2). `22-§16-8` to `22-§16-11` are **new** unit rows for C22 §16 b1–b4, which no upstream row carried. `3-§9-3`, `3-§11-6`, `3-§15-7`, `12-§4-4`, `12-§7-7` and `BP-§10.3-S2` keep their joint owners verbatim; the SB-P-1.18 slice is named in the citation (U-08).

**Inbound Contract 01/06/16 rows.** 29 rows in SB-P-1.14, SB-P-1.16 and SB-P-1.17 already carry a C1, C6 or C16 identifier marked as owned by SB-P-1.18. Every unit-level identifier among them names the same source unit as this matrix's parser ordinal (`07-…` §4.3); section-level ones are expanded here.

| Upstream ID | Source FCTM | Here |
|---|---|---|
| `1-§10-2` | SB-P-1.17 | unit row 1-§10-2 |
| `1-§10-9` | SB-P-1.17 | unit row 1-§10-9 |
| `1-§12-5` | SB-P-1.16 | unit row 1-§12-5 |
| `1-§13` | SB-P-1.14 | expanded to 1-§13-* unit rows |
| `1-§13-6` | SB-P-1.16 | unit row 1-§13-6 |
| `1-§15-6` | SB-P-1.16 | unit row 1-§15-6 |
| `1-§16` | SB-P-1.14 | expanded to 1-§16-* unit rows |
| `1-§16` | SB-P-1.16 | expanded to 1-§16-* unit rows |
| `1-§17-7` | SB-P-1.16 | unit row 1-§17-7 |
| `1-§21-11` | SB-P-1.16 | unit row 1-§21-11 |
| `1-§22-10` | SB-P-1.16 | unit row 1-§22-10 |
| `1-§23-12` | SB-P-1.16 | unit row 1-§23-12 |
| `1-§23-7` | SB-P-1.17 | unit row 1-§23-7 |
| `1-§24-12` | SB-P-1.16 | unit row 1-§24-12 |
| `1-§24-14` | SB-P-1.16 | unit row 1-§24-14 |
| `1-§24-3` | SB-P-1.17 | unit row 1-§24-3 |
| `1-§26-11` | SB-P-1.16 | unit row 1-§26-11 |
| `1-§26-14` | SB-P-1.16 | unit row 1-§26-14 |
| `1-§26-5` | SB-P-1.17 | unit row 1-§26-5 |
| `1-§27-8` | SB-P-1.17 | unit row 1-§27-8 |
| `1-§27-9` | SB-P-1.16 | unit row 1-§27-9 |
| `1-§5-20` | SB-P-1.16 | unit row 1-§5-20 |
| `1-§5-4` | SB-P-1.16 | unit row 1-§5-4 |
| `1-§6` | SB-P-1.14 | expanded to 1-§6-* unit rows |
| `1-§8` | SB-P-1.14 | expanded to 1-§8-* unit rows |
| `1-§9-17` | SB-P-1.16 | unit row 1-§9-17 |
| `1-§9-9` | SB-P-1.16 | unit row 1-§9-9 |
| `16-§5` | SB-P-1.14 | expanded to 16-§5-* unit rows |
| `6-§6` | SB-P-1.14 | expanded to 6-§6-* unit rows |

### 0.10 Verification target seeds

`RT` functional runtime test; `NEG` negative or denial test; `IDEM` duplicate, retry and replay test; `INSP` design or document inspection; `EXP` experience and language review; `FRV-A`, `FRV-B`, `FRV-C` Founder-reserved Build Plan §10.7 scenarios; `GATE` completion accounting. Planning seeds for the Stage 4 verification mapping only.

### 0.11 Expansion method

C1, C6 and C16 are expanded completely by a deterministic parser over the source blobs: every bullet, numbered item and non-lead-in prose paragraph is its own row. A lead-in (a prose paragraph ending in `:`) carries no obligation of its own and is listed in the inventory. A section is one row only when the whole section has one non-`IN SCOPE` disposition and no upstream identifier exists inside it (`1-§29`, `6-§16`, `16-§22`). Delegated contracts are rowed at the touched unit under the owning mission's identifier. A contract-wide keyword screen of the other 22 contracts checked that no touched unit lacks a row or a recorded owner (`07-…` §5).

## A. Contract 01 — Smart Order & Delivery Assistant (283 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1-§1-1 | C1@b392c8cb | §1 p1: Smart Order & Delivery Assistant gives a local merchant a professional… | EXP | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; A-BP107 | — | A | EXP |
| 1-§1-2 | C1@b392c8cb | §1 p2: It must work with the way Kerala merchants already operate: phone calls… | EXP | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; A-BP107 | — | A | EXP |
| 1-§1-3 | C1@b392c8cb | §1 p3: The feature is a private merchant-customer operating network | EXP | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; A-BP107 | — | A | EXP |
| 1-§2-1 | C1@b392c8cb | §2 b1: orders arrive by phone, WhatsApp, voice note, paper or in person | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§2-2 | C1@b392c8cb | §2 b2: item availability is checked informally | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§2-3 | C1@b392c8cb | §2 b3: addresses are repeatedly requested | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§2-4 | C1@b392c8cb | §2 b4: staff assignment is verbal | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§2-5 | C1@b392c8cb | §2 b5: customers call for status | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§2-6 | C1@b392c8cb | §2 b6: COD collection can be difficult to reconcile | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§2-7 | C1@b392c8cb | §2 b7: delivery proof and exceptions may be poorly recorded | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§2-8 | C1@b392c8cb | §2 p2: Smart Business should reduce that coordination burden without taking ow… | NARR | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; L-NARR; A-BP107 | — | A | EXP |
| 1-§3-1 | C1@b392c8cb | §3 b1: humans serving humans | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§3-2 | C1@b392c8cb | §3 b2: merchant/customer relationship ownership | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§3-3 | C1@b392c8cb | §3 b3: privacy by purpose | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§3-4 | C1@b392c8cb | §3 b4: no public marketplace drift | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | NEG |
| 1-§3-5 | C1@b392c8cb | §3 b5: minimal data collection | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§3-6 | C1@b392c8cb | §3 b6: explicit confirmation before consequential commitments | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§3-7 | C1@b392c8cb | §3 b7: dignified staff treatment | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§3-8 | C1@b392c8cb | §3 b8: no default continuous employee surveillance | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | NEG |
| 1-§3-9 | C1@b392c8cb | §3 b9: clear, recoverable exception handling | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§3-10 | C1@b392c8cb | §3 b10: channel independence | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | INSP |
| 1-§4-1 | C1@b392c8cb | §4 b1: public merchant discovery | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-8; GPCV-§9-9 | — |  | — |
| 1-§4-2 | C1@b392c8cb | §4 b2: cross-merchant product listing | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-8; GPCV-§9-9 | — |  | — |
| 1-§4-3 | C1@b392c8cb | §4 b3: marketplace bidding | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-8; GPCV-§9-9 | — |  | — |
| 1-§4-4 | C1@b392c8cb | §4 b4: marketplace commission logic | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-8; GPCV-§9-9 | — |  | — |
| 1-§4-5 | C1@b392c8cb | §4 b5: an open ordering network for unrelated public users | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-8; GPCV-§9-9 | — |  | — |
| 1-§4-6 | C1@b392c8cb | §4 b6: a Swiggy/Zomato-style marketplace | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-8; GPCV-§9-9 | — |  | — |
| 1-§4-7 | C1@b392c8cb | §4 p2: Any broader marketplace or wholesaler network requires a separate futur… | RULE | not current core — separate future Founder decision and classification (GPCV §9 b11) | not classified (GPCV §9 b11) | none — separately governed future Founder decision (BP §15 b8) | NOT APPLICABLE | — | L-NEG; does not concern this mission: a broader marketplace or wholesaler network is not part of Contract 01 (C1 §30 b2) and awaits a separate Founder decision and classification (BP §15 b8, GPCV §9 b11). Not an SB-P-1.18 acceptance dependency (GPCV §8 b5). The decision itself stays recorded as BP-§15-8, 1-§30-2 and GPCV-§9-11. This mission's must-not boundary is carried by 1-§4-1 … 1-§4-6, BP-§16-8 and GPCV-§9-9 | — |  | — |
| 1-§5-1 | C1@b392c8cb | §5 <Owner> b1: create/import customers | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-2 | C1@b392c8cb | §5 <Owner> b2: create, review, confirm, modify or cancel orders | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-3 | C1@b392c8cb | §5 <Owner> b3: assign permitted delivery staff | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-4 | C1@b392c8cb | §5 <Owner> b4: set/confirm COD amounts | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D16 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-5 | C1@b392c8cb | §5 <Owner> b5: view active and historical deliveries | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-6 | C1@b392c8cb | §5 <Owner> b6: manage customer status and delivery permissions | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-7 | C1@b392c8cb | §5 <Owner> b7: review exceptions and delivery evidence | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-8 | C1@b392c8cb | §5 <Manager> p1: Manager authority is delegated by the Owner. Manager does not automatic… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ROLE; 21-§4 (SB-P-1.12); A-BP107 | — | A | RT |
| 1-§5-9 | C1@b392c8cb | §5 <Employee Staff> b1: create an order draft | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-10 | C1@b392c8cb | §5 <Employee Staff> b2: review item availability | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-11 | C1@b392c8cb | §5 <Employee Staff> b3: prepare/pack an order | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-12 | C1@b392c8cb | §5 <Employee Staff> b4: update permitted order states | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-13 | C1@b392c8cb | §5 <Employee Staff> b5: assign delivery staff where explicitly allowed | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-14 | C1@b392c8cb | §5 <Employee Staff> p2: Employees must not gain unrestricted customer export, Owner profit, Ask… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | NEG |
| 1-§5-15 | C1@b392c8cb | §5 <Delivery Staff> b1: merchant identity | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-16 | C1@b392c8cb | §5 <Delivery Staff> b2: customer name/contact where required | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-17 | C1@b392c8cb | §5 <Delivery Staff> b3: order/item summary | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-18 | C1@b392c8cb | §5 <Delivery Staff> b4: delivery address/location | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-19 | C1@b392c8cb | §5 <Delivery Staff> b5: delivery timing/instructions | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-20 | C1@b392c8cb | §5 <Delivery Staff> b6: COD amount where applicable | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D16 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-21 | C1@b392c8cb | §5 <Delivery Staff> b7: permitted delivery actions | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-22 | C1@b392c8cb | §5 <Delivery Staff> p2: Delivery staff must not receive Owner-wide business intelligence or bro… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | NEG |
| 1-§5-23 | C1@b392c8cb | §5 <Customer> b1: be added to the merchant's approved customer network | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | RT |
| 1-§5-24 | C1@b392c8cb | §5 <Customer> b2: place an order through an approved channel | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → E-1 (1-§18-1) | 18:FPDR-3 | A | RT |
| 1-§5-25 | C1@b392c8cb | §5 <Customer> b3: accept/modify/cancel a proposed order change | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → E-4 (1-§18-4); merchant-recorded path 1-§10-8 (citation corrected from 1-§10-7; DC-02) | 18:FPDR-3 | A | RT |
| 1-§5-26 | C1@b392c8cb | §5 <Customer> b4: provide delivery address/location when needed | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC; DNTF; D20 | NI-ORD; A-BP107; L-F3P → E-6 (1-§18-6); F-1 hold (22-§16-6, U-03) released by 18:FPDR-1 (L-F1) | 18:FPDR-3; 18:FPDR-1 | A | RT |
| 1-§5-27 | C1@b392c8cb | §5 <Customer> b5: receive confirmations/status updates | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15; DNTF; D20 | NI-ORD; A-BP107; L-F3P → E-4/E-5 (1-§18-4, 1-§18-5); AEG-1 | 18:FPDR-3 | A | RT |
| 1-§5-28 | C1@b392c8cb | §5 <Customer> b6: report delivery issues | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → E-6 (1-§18-6) | 18:FPDR-3 | A | RT |
| 1-§5-29 | C1@b392c8cb | §5 <Customer> b7: unsubscribe from permitted messaging | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → A-STOP; native consent/STOP state authoritative; DC-13 | 18:FPDR-3 | A | RT |
| 1-§5-30 | C1@b392c8cb | §5 <Customer> p2: Customer access never includes merchant internal analytics or staff inf… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; NI-ROLE; A-BP107 | — | A | NEG |
| 1-§6-1 | C1@b392c8cb | §6 p1: Customer identity is merchant-scoped and should reuse shared identity f… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; 16:FPDR-1; 22-§5-5 (SB-P-1.12); A-BP107 | 16:FPDR-1 | A | INSP |
| 1-§6-2 | C1@b392c8cb | §6 b1: manual workspace entry | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; 16:FPDR-1; A-BP107 | 16:FPDR-1 | A | RT |
| 1-§6-3 | C1@b392c8cb | §6 b2: conversational quick-add | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; 16:FPDR-1; A-BP107 | 16:FPDR-1 | A | RT |
| 1-§6-4 | C1@b392c8cb | §6 b3: Excel/CSV import through Universal Document Intelligence | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; 16:FPDR-1; A-BP107 | 16:FPDR-1 | A | RT |
| 1-§6-5 | C1@b392c8cb | §6 b4: approved migration/import workflows | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; 16:FPDR-1; A-BP107 | 16:FPDR-1 | A | RT |
| 1-§6-6 | C1@b392c8cb | §6 p3: At minimum, an orderable customer generally needs a usable identity/con… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; 16:FPDR-1; A-BP107 | 16:FPDR-1 | A | RT |
| 1-§6-7 | C1@b392c8cb | §6 p4: The system must detect plausible duplicate customers rather than silent… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; 16:FPDR-1; A-BP107 | 16:FPDR-1 | A | IDEM |
| 1-§7-1 | C1@b392c8cb | §7 p1: When a customer is newly enabled for the merchant's order/delivery comm… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → A-WEL; AEG-1 | 18:FPDR-3 | A | RT |
| 1-§7-2 | C1@b392c8cb | §7 b1: unsubscribe/STOP behavior where applicable | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → A-STOP; native STOP enforcement authoritative; DC-13 | 18:FPDR-3 | A | RT |
| 1-§7-3 | C1@b392c8cb | §7 b2: approved templates/provider rules | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D12; DNTF; D20 | NI-ORD; L-F3W via R-17 (C23 §17) | 18:FPDR-3 |  | — |
| 1-§7-4 | C1@b392c8cb | §7 b3: no repeated welcome spam | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → A-WEL with C23 §16 duplicate suppression | 18:FPDR-3 | A | NEG |
| 1-§7-5 | C1@b392c8cb | §7 b4: no unrelated promotional abuse merely because a customer exists in the… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DNTF; D20 | NI-ORD; A-BP107; L-F3P → R-4/16 (C23 §4, §16) | 18:FPDR-3 | A | NEG |
| 1-§8-1 | C1@b392c8cb | §8 p1: The feature must support the same business workflow regardless of appro… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§8-2 | C1@b392c8cb | §8 <Customer initiated> b1: text | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D13; DNTF; D20 | NI-ORD; L-F3W via E-1 (1-§18-1), text; merchant-initiated text stays 1-§8-8 | 18:FPDR-3 |  | — |
| 1-§8-3 | C1@b392c8cb | §8 <Customer initiated> b2: voice | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D13; DV; DNTF; D20 | NI-ORD; L-F3W via E-1 (1-§18-1), voice; merchant-initiated stays 1-§8-8 | 18:FPDR-3 |  | — |
| 1-§8-4 | C1@b392c8cb | §8 <Customer initiated> b3: image/photo of a handwritten list | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D13; D14; DNTF; D20 | NI-ORD; NI-UDI; L-F3W via E-1 (1-§18-1), image; merchant-initiated stays 1-§8-9 | 18:FPDR-3 |  | — |
| 1-§8-5 | C1@b392c8cb | §8 <Customer initiated> b4: supported document input | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D13; D14; DNTF; D20 | NI-ORD; NI-UDI; L-F3W via E-1 (1-§18-1), document; merchant-initiated stays 1-§8-10 | 18:FPDR-3 |  | — |
| 1-§8-6 | C1@b392c8cb | §8 <Merchant initiated> b1: phone-call information | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§8-7 | C1@b392c8cb | §8 <Merchant initiated> b2: in-person request | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§8-8 | C1@b392c8cb | §8 <Merchant initiated> b3: text/voice instruction | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DV | NI-ORD; A-BP107 | — | A | RT |
| 1-§8-9 | C1@b392c8cb | §8 <Merchant initiated> b4: handwritten/paper list | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-ORD; A-BP107 | — | A | RT |
| 1-§8-10 | C1@b392c8cb | §8 <Merchant initiated> b5: imported order sheet | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-ORD; A-BP107 | — | A | RT |
| 1-§8-11 | C1@b392c8cb | §8 <Document photo intake> p2: input → interpretation → preview → clarify where needed → confirmation… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-UDI; 5-§7-6; A-BP107 | — | A | INSP |
| 1-§8-12 | C1@b392c8cb | §8 <Document photo intake> p3: Uncertain extraction must not silently create a confirmed order | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§9-1 | C1@b392c8cb | §9 p1: Incoming order intent first becomes a draft where consequential facts c… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-2 | C1@b392c8cb | §9 b1: business/customer identity | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-3 | C1@b392c8cb | §9 b2: items | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-4 | C1@b392c8cb | §9 b3: quantities and units | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-5 | C1@b392c8cb | §9 b4: notes/substitution preferences | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-6 | C1@b392c8cb | §9 b5: delivery/pickup intent | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-7 | C1@b392c8cb | §9 b6: requested time | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-8 | C1@b392c8cb | §9 b7: address/location status | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-9 | C1@b392c8cb | §9 b8: payment/COD information | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-10 | C1@b392c8cb | §9 b9: source/channel | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-11 | C1@b392c8cb | §9 b10: creator/actor | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-12 | C1@b392c8cb | §9 b11: current order state | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-13 | C1@b392c8cb | §9 b12: product identity is ambiguous | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-14 | C1@b392c8cb | §9 b13: quantity/unit is unclear | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-15 | C1@b392c8cb | §9 b14: multiple customer identities match | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-16 | C1@b392c8cb | §9 b15: delivery location is missing when required | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-17 | C1@b392c8cb | §9 b16: payment/COD amount is inconsistent | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-18 | C1@b392c8cb | §9 b17: item interpretation from a document is uncertain | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§9-19 | C1@b392c8cb | §9 p4: Never guess a consequential order fact merely to progress the workflow | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§10-1 | C1@b392c8cb | §10 p1: A requested order is not automatically final | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107; BP-§11-6 | — | A | RT |
| 1-§10-2 | C1@b392c8cb | §10 p2: Owner/authorized staff should be able to review stock/availability usin… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | NI-ORD; A-BP107; BP-§11-6 | — | A | RT |
| 1-§10-3 | C1@b392c8cb | §10 b1: quantity change | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | NI-ORD; A-BP107; BP-§11-6; L-F4M | 18:FPDR-4 | A | RT |
| 1-§10-4 | C1@b392c8cb | §10 b2: replacement/substitute | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | NI-ORD; A-BP107; BP-§11-6 | — | A | RT |
| 1-§10-5 | C1@b392c8cb | §10 b3: partial fulfilment | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | NI-ORD; A-BP107; BP-§11-6 | — | A | RT |
| 1-§10-6 | C1@b392c8cb | §10 b4: removal | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | NI-ORD; A-BP107; BP-§11-6; L-F4M | 18:FPDR-4 | A | RT |
| 1-§10-7 | C1@b392c8cb | §10 b5: later fulfilment where supported | EX | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | NI-ORD; A-BP107; permissive proposal option (C1 §10 p3 'may help propose'; b5 'where supported'); mandatory outcome carried by 1-§10-1, 1-§10-8, 1-§10-9 and BP-§10.7-A4; L-F4A | 18:FPDR-4 | A | RT (if adopted) |
| 1-§10-8 | C1@b392c8cb | §10 p4: The customer or authorized merchant user must approve material changes… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107; BP-§10.7-A4; U-01 | — | A | RT |
| 1-§10-9 | C1@b392c8cb | §10 p5: Smart Business must not promise inventory that the product cannot suppo… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | NI-ORD; A-BP107; BP-§11-6 | — | A | NEG |
| 1-§11-1 | C1@b392c8cb | §11 p2: Draft → Confirmed → Preparing/Packing → Ready/Assigned → Out for Delive… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§11-2 | C1@b392c8cb | §11 p3: with explicit exception/cancel states as needed | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§11-3 | C1@b392c8cb | §11 p4: State names may evolve, but state transitions must be auditable and per… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§11-4 | C1@b392c8cb | §11 p5: A historical fixed status enum is implementation detail, not immutable… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; A-BP107 | — | A | INSP |
| 1-§12-1 | C1@b392c8cb | §12 b1: the order is in an assignable state | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§12-2 | C1@b392c8cb | §12 b2: the customer belongs to the merchant | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§12-3 | C1@b392c8cb | §12 b3: the delivery person exists and has permission | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§12-4 | C1@b392c8cb | §12 b4: required address/location exists or has a resolution path | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§12-5 | C1@b392c8cb | §12 b5: COD amount is reviewed where applicable | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§12-6 | C1@b392c8cb | §12 b6: the assignment is not a duplicate/retry of an already completed action | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | IDEM |
| 1-§12-7 | C1@b392c8cb | §12 p2: Natural-language assignment is supported, subject to the same validation | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-1 | C1@b392c8cb | §13 p1: The delivery workflow should be low-friction and need not require a hea… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; A-BP107 | — | A | EXP |
| 1-§13-2 | C1@b392c8cb | §13 b1: acknowledge assignment | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-3 | C1@b392c8cb | §13 b2: open address/map | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DMAP | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-4 | C1@b392c8cb | §13 b3: mark started/out-for-delivery | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-5 | C1@b392c8cb | §13 b4: record delivery proof | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14; DLOC | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-6 | C1@b392c8cb | §13 b5: record COD collected amount | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D16 | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-7 | C1@b392c8cb | §13 b6: mark delivered | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-8 | C1@b392c8cb | §13 b7: report unable-to-deliver/exception | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | RT |
| 1-§13-9 | C1@b392c8cb | §13 p3: The durable requirement is operational usefulness and bounded access, n… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-ORD; A-BP107 | — | A | INSP |
| 1-§14-1 | C1@b392c8cb | §14 p1: Location is purpose-limited | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | INSP |
| 1-§14-2 | C1@b392c8cb | §14 b1: customer delivery destination | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | RT |
| 1-§14-3 | C1@b392c8cb | §14 b2: point-in-time delivery verification | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | RT |
| 1-§14-4 | C1@b392c8cb | §14 b3: proof/event context where appropriate | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | RT |
| 1-§14-5 | C1@b392c8cb | §14 b4: a user-requested or explicitly authorized live-tracking experience if s… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | DLOC | Conditional-purpose guard only; commits no live-tracking feature. 18:FPDR-2 (T2; T7 reduction of the S09 pilot-scope and S11 flow-step live tracking for SB-P-1.18) resolves U-02: Phase 1 provides and authorizes no location-based live tracking, no live or periodically refreshed location view for any role, and no movement-trace record class. Delivery visibility is live order/delivery status (1-§11-1, 1-§13-4, 1-§17-5, 17-§10-1) plus point-in-time destination and proof location (1-§14-1 to 1-§14-4, 22-§16-1, 22-§29-9); order status is not live tracking. Default continuous surveillance stays rejected (1-§14-6, 1-§14-7, 1-§28-4). A future live-tracking purpose needs separate approval under 22-§16-11 with its own 12:FPDR-3 disclosures; S09 and S11 not amended. Kind NEG records the decision's guard; it does not assert that the source states a NEG rule | 18:FPDR-2 | A+D | NEG; INSP |
| 1-§14-6 | C1@b392c8cb | §14 p3: Default continuous route GPS surveillance of delivery staff is not a re… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | NEG |
| 1-§14-7 | C1@b392c8cb | §14 p4: The product must not continuously track an employee merely because a de… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | NEG |
| 1-§14-8 | C1@b392c8cb | §14 b5: collect only what is necessary | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | RT |
| 1-§14-9 | C1@b392c8cb | §14 b6: make purpose understandable | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | RT |
| 1-§14-10 | C1@b392c8cb | §14 b7: stop/expire access when the operational purpose ends | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | RT |
| 1-§14-11 | C1@b392c8cb | §14 b8: prevent unrelated role access | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | RT |
| 1-§14-12 | C1@b392c8cb | §14 b9: follow current retention policy | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; HU-03 released by 18:FPDR-1 (L-F1), the location current retention policy (`18:FPDR-1` §8) | 18:FPDR-1 | A+D | INSP |
| 1-§14-13 | C1@b392c8cb | §14 p6: This rule supersedes older Founder-era/seed wording that implied contin… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-LOC; A-BP107; 12:FPDR-2 | 12:FPDR-2 | A+D | NEG |
| 1-§15-1 | C1@b392c8cb | §15 p1: Completion must rely on configured positive proof/action rather than un… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | RT |
| 1-§15-2 | C1@b392c8cb | §15 b1: delivery staff completion action | EX | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107; permissive example (C1 §15 p2 'may include, as appropriate'); mandatory outcome carried by 1-§15-1, 1-§15-8, 1-§15-9, 1-§15-10; L-F4M | 18:FPDR-4 | A | RT |
| 1-§15-3 | C1@b392c8cb | §15 b2: recipient acknowledgement | EX | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107; permissive example (C1 §15 p2); mandatory outcome carried by 1-§15-1, 1-§15-8, 1-§15-9, 1-§15-10; L-F4A | 18:FPDR-4 | A | RT (if adopted) |
| 1-§15-4 | C1@b392c8cb | §15 b3: OTP/signature/photo or other approved proof | EX | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14; DNTF | NI-ORD; A-BP107; permissive example (C1 §15 p2); mandatory outcome carried by 1-§15-1, 1-§15-8, 1-§15-9, 1-§15-10; OTP needs an out-of-app channel (U-01); L-F4A: F-4 resolved by 18:FPDR-4 (adoptable, if adopted); U-01/DNTF customer channel remains OPEN; OTP not available without separately authorized channel; preserve other proof and mandatory outcome rules; photo and signature proof privacy check before the EIS (`18:FPDR-4` §6) | 18:FPDR-4 | A | RT (if adopted) |
| 1-§15-5 | C1@b392c8cb | §15 b4: point-in-time location evidence | EX | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-LOC; A-BP107; permissive example (C1 §15 p2); mandatory outcome carried by 1-§15-1, 1-§15-8, 1-§15-9, 1-§15-10; location purpose rules 1-§14-*, 22-§16-*; L-F4A; if adopted, location proof follows the F-1 decision, 18:FPDR-1 B2 (L-F1; `18:FPDR-4` §6; `18:FPDR-1` §8) | 18:FPDR-4; 18:FPDR-1 | A+D | RT (if adopted) |
| 1-§15-6 | C1@b392c8cb | §15 b5: COD/payment evidence | EX | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D16; DPAY | NI-PAY; A-BP107; permissive example (C1 §15 p2); mandatory outcome carried by 1-§15-1, 1-§15-8, 1-§15-9, 1-§15-10; COD facts stay mandatory under 1-§16-* and 15-§15-*; L-F4A | 18:FPDR-4 | A | RT (if adopted) |
| 1-§15-7 | C1@b392c8cb | §15 b6: merchant confirmation | EX | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107; permissive example (C1 §15 p2); mandatory outcome carried by 1-§15-1, 1-§15-8, 1-§15-9, 1-§15-10; L-F4M | 18:FPDR-4 | A | RT |
| 1-§15-8 | C1@b392c8cb | §15 p3: The product should select/allow suitable proof according to risk and me… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | RT |
| 1-§15-9 | C1@b392c8cb | §15 <Customer silence rule> p1: Customer silence alone is not an automatic delivery failure or exceptio… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107; BP-§16-9 | — | A | NEG |
| 1-§15-10 | C1@b392c8cb | §15 <Customer silence rule> p2: Absence of a reply must not automatically roll back an otherwise well-p… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107; BP-§16-9 | — | A | NEG |
| 1-§16-1 | C1@b392c8cb | §16 b1: expected collection amount must be explicit | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D16; D14 | NI-ORD; NI-PAY; A-BP107; BP-§11-5 | — | A | RT |
| 1-§16-2 | C1@b392c8cb | §16 b2: delivered/COD-collected are separate facts where needed | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D16; D14 | NI-ORD; NI-PAY; A-BP107; BP-§11-5 | — | A | RT |
| 1-§16-3 | C1@b392c8cb | §16 b3: discrepancies remain visible | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D16; D14 | NI-ORD; NI-PAY; A-BP107; BP-§11-5 | — | A | RT |
| 1-§16-4 | C1@b392c8cb | §16 b4: payment verification/reconciliation should reuse the shared financial-i… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D16; DPAY | NI-PAY; 15-§15 (SB-P-1.16); A-BP107 | — | A | INSP |
| 1-§16-5 | C1@b392c8cb | §16 b5: delivery completion must not silently duplicate Ledger income | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D16; DTX | NI-ORD; NI-PAY; A-BP107; BP-§11-5 | — | A | NEG |
| 1-§16-6 | C1@b392c8cb | §16 p2: The exact Ledger write/link must be idempotent and auditable | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D16; DTX | NI-ORD; NI-PAY; A-BP107; BP-§11-5 | — | A | IDEM |
| 1-§17-1 | C1@b392c8cb | §17 p1: Use the shared Notification foundation | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; A-BP107; 12:FPDR-1 | 12:FPDR-1 | A | INSP |
| 1-§17-2 | C1@b392c8cb | §17 b1: order received/draft requiring action | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; A-BP107; 12:FPDR-1 | 12:FPDR-1 | A | RT |
| 1-§17-3 | C1@b392c8cb | §17 b2: confirmation/change request | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DNTF; D20 | NI-NTF; A-BP107; L-F3P → E-4 (1-§18-4); AEG-1; C1 §17 screening | 18:FPDR-3 | A | RT |
| 1-§17-4 | C1@b392c8cb | §17 b3: assignment | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; A-BP107; 12:FPDR-1 | 12:FPDR-1 | A | RT |
| 1-§17-5 | C1@b392c8cb | §17 b4: delivery started/status | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DNTF; D20 | NI-NTF; A-BP107; L-F3P → E-5 (1-§18-5); no customer live-location view (18:FPDR-2); AEG-1; C1 §17 screening | 18:FPDR-3 | A | RT |
| 1-§17-6 | C1@b392c8cb | §17 b5: delivery completed | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DNTF; D20 | NI-NTF; A-BP107; L-F3P → E-5 (1-§18-5); AEG-1; C1 §17 screening | 18:FPDR-3 | A | RT |
| 1-§17-7 | C1@b392c8cb | §17 b6: payment/COD exception | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; A-BP107; 12:FPDR-1 | 12:FPDR-1 | A | RT |
| 1-§17-8 | C1@b392c8cb | §17 b7: unable-to-deliver exception | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; A-BP107; 12:FPDR-1 | 12:FPDR-1 | A | RT |
| 1-§17-9 | C1@b392c8cb | §17 p3: Do not create a separate order-only notification infrastructure when sh… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; A-BP107; 12:FPDR-1 | 12:FPDR-1 | A | NEG |
| 1-§18-1 | C1@b392c8cb | §18 b1: customer order intake | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§8-4 | — |  | — |
| 1-§18-2 | C1@b392c8cb | §18 b2: merchant/staff order creation | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§8-4 | — |  | — |
| 1-§18-3 | C1@b392c8cb | §18 b3: clarification | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§8-4 | — |  | — |
| 1-§18-4 | C1@b392c8cb | §18 b4: confirmations | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§8-4 | — |  | — |
| 1-§18-5 | C1@b392c8cb | §18 b5: status communication | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§8-4 | — |  | — |
| 1-§18-6 | C1@b392c8cb | §18 b6: approved delivery interactions | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§8-4 | — |  | — |
| 1-§18-7 | C1@b392c8cb | §18 p2: WhatsApp remains an adapter to shared order/customer/delivery truth, no… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§8-4; BP-§11-9 (shared truth here; adapter in SB-P-1.20) | — | A | INSP |
| 1-§19-1 | C1@b392c8cb | §19 b1: text | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§19-2 | C1@b392c8cb | §19 b2: voice | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DV | NI-ORD; A-BP107 | — | A | RT |
| 1-§19-3 | C1@b392c8cb | §19 b3: image/photo | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-ORD; A-BP107 | — | A | RT |
| 1-§19-4 | C1@b392c8cb | §19 b4: Excel/CSV/PDF where relevant | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-ORD; A-BP107 | — | A | RT |
| 1-§19-5 | C1@b392c8cb | §19 p2: The same order record, permissions, identity, confirmations and audit t… | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§20-1 | C1@b392c8cb | §20 p1: Customer and merchant interactions should support English, Malayalam an… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DNTF; D20 | NI-ORD; A-BP107; L-F3P → R-10/16 (C23 §10, §16), reusing the shared language layer | 18:FPDR-3 | A | EXP |
| 1-§20-2 | C1@b392c8cb | §20 p2: The system should understand locally natural units/product expressions… | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-ORD; A-BP107 | — | A | EXP |
| 1-§21-1 | C1@b392c8cb | §21 b1: interpret order intent | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | RT |
| 1-§21-2 | C1@b392c8cb | §21 b2: prepare drafts | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | RT |
| 1-§21-3 | C1@b392c8cb | §21 b3: identify missing information | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | RT |
| 1-§21-4 | C1@b392c8cb | §21 b4: suggest substitutions | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | RT |
| 1-§21-5 | C1@b392c8cb | §21 b5: summarize state | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | RT |
| 1-§21-6 | C1@b392c8cb | §21 b6: surface exceptions | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | RT |
| 1-§21-7 | C1@b392c8cb | §21 b7: recommend follow-up | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | RT |
| 1-§21-8 | C1@b392c8cb | §21 b8: finalize uncertain orders by guessing | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | NEG |
| 1-§21-9 | C1@b392c8cb | §21 b9: expand staff permission | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | NEG |
| 1-§21-10 | C1@b392c8cb | §21 b10: mark delivery completed without configured proof | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | NEG |
| 1-§21-11 | C1@b392c8cb | §21 b11: create payment facts without evidence | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | NEG |
| 1-§21-12 | C1@b392c8cb | §21 b12: expose unrelated customer/Owner information | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | NEG |
| 1-§21-13 | C1@b392c8cb | §21 b13: create public marketplace relationships | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-ORD; A-BP107 | — | A | NEG |
| 1-§22-1 | C1@b392c8cb | §22 b1: merchant/business | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-2 | C1@b392c8cb | §22 b2: customer identity | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-3 | C1@b392c8cb | §22 b3: customer communication preferences | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-4 | C1@b392c8cb | §22 b4: order and order lines | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-5 | C1@b392c8cb | §22 b5: item/product identity where applicable | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-6 | C1@b392c8cb | §22 b6: order state history | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-7 | C1@b392c8cb | §22 b7: assignment actor | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-8 | C1@b392c8cb | §22 b8: delivery state/events | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-9 | C1@b392c8cb | §22 b9: delivery proof | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-10 | C1@b392c8cb | §22 b10: COD/payment evidence/link | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14; D16 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-11 | C1@b392c8cb | §22 b11: address/location with purpose/retention boundary | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14; DLOC | NI-ORD; A-BP107; HU-03 released by 18:FPDR-1 (L-F1) | 18:FPDR-1 | A | INSP |
| 1-§22-12 | C1@b392c8cb | §22 b12: exception history | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-13 | C1@b392c8cb | §22 b13: source channel | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-14 | C1@b392c8cb | §22 b14: confirmation/audit events | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | INSP |
| 1-§22-15 | C1@b392c8cb | §22 p2: Do not duplicate customer/product identities where shared foundations a… | NEG | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§23-1 | C1@b392c8cb | §23 b1: Permission Engine / business isolation | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-2 | C1@b392c8cb | §23 b2: shared identities | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-3 | C1@b392c8cb | §23 b3: Business Memory | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-4 | C1@b392c8cb | §23 b4: Human Language Layer | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-5a | C1@b392c8cb | §23 b5: Conversation Workspace / WhatsApp adapters | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | A-BP107 (Conversation Workspace) | — | A | INSP |
| 1-§23-5b | C1@b392c8cb | §23 b5: Conversation Workspace / WhatsApp adapters | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 (WhatsApp adapter) | — |  | — |
| 1-§23-6 | C1@b392c8cb | §23 b6: Universal Document Intelligence | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-7 | C1@b392c8cb | §23 b7: inventory/catalog where available | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D17 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-8 | C1@b392c8cb | §23 b8: Notification foundation | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-9 | C1@b392c8cb | §23 b9: Reminder Engine | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-10 | C1@b392c8cb | §23 b10: point-in-time location primitive | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | DLOC | A-BP107; BP-§11 | — | A+D | INSP |
| 1-§23-11 | C1@b392c8cb | §23 b11: audit/history/idempotency | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | A | INSP |
| 1-§23-12 | C1@b392c8cb | §23 b12: Payment Verification / Ledger services where relevant | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D16 | A-BP107; BP-§11 | — | A | INSP |
| 1-§24-1 | C1@b392c8cb | §24 b1: unknown/duplicate customer | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-2 | C1@b392c8cb | §24 b2: ambiguous item/quantity | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-3 | C1@b392c8cb | §24 b3: out-of-stock/substitution | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D17 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-4 | C1@b392c8cb | §24 b4: missing address/location | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-5 | C1@b392c8cb | §24 b5: unavailable delivery staff | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-6 | C1@b392c8cb | §24 b6: revoked permission during workflow | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-7 | C1@b392c8cb | §24 b7: duplicate assignment/action retry | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | IDEM |
| 1-§24-8 | C1@b392c8cb | §24 b8: customer modification/cancellation | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-9 | C1@b392c8cb | §24 b9: delivery delay | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-10 | C1@b392c8cb | §24 b10: unable-to-deliver | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-11 | C1@b392c8cb | §24 b11: proof failure | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-12 | C1@b392c8cb | §24 b12: COD mismatch | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D16 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-13 | C1@b392c8cb | §24 b13: channel delivery failure | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15; DNTF; D20 | NI-ORD; A-BP107; L-F3P → R-19/24 (C23 §19, §24); upstream foundation 22-§12-9 (SB-P-1.12 FCTM, owned by SB-P-1.15) | 18:FPDR-3 | A | NEG |
| 1-§24-14 | C1@b392c8cb | §24 b14: payment/linking failure | OBL | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D16 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§24-15 | C1@b392c8cb | §24 p2: A narrow failure must not freeze unrelated merchant operations | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§25-1 | C1@b392c8cb | §25 b1: Merchant owns the customer relationship | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | A | NEG |
| 1-§25-2 | C1@b392c8cb | §25 b2: Customer data is business-scoped | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | A | NEG |
| 1-§25-3 | C1@b392c8cb | §25 b3: Delivery staff sees only task-required information | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | A | NEG |
| 1-§25-4 | C1@b392c8cb | §25 b4: Location is purpose-limited | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | A | NEG |
| 1-§25-5 | C1@b392c8cb | §25 b5: No default continuous staff surveillance | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | A | NEG |
| 1-§25-6 | C1@b392c8cb | §25 b6: No staff access to Owner financial intelligence merely through delivery… | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | A | NEG |
| 1-§25-7 | C1@b392c8cb | §25 b7: No public marketplace reuse of customer data | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | A | NEG |
| 1-§25-8 | C1@b392c8cb | §25 b8: Support/platform access follows separate purpose-limited governance | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D19 | 21-§14-1 (SB-P-1.12); A-BP107 | — | A | NEG |
| 1-§26-1 | C1@b392c8cb | §26 b1: Customer text order → accurate draft → merchant/customer confirmation | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13; DNTF; D20 | NI-ORD; A-BP107; L-F3P → E-1 (1-§18-1) customer leg; a separate full order test is required and neither E-1 nor E-12 (1-§26-12b) substitutes for it | 18:FPDR-3 | A | RT; separate full order test |
| 1-§26-2 | C1@b392c8cb | §26 b2: Voice order → clarification for ambiguity → confirmed draft | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13; DV | NI-ORD; A-BP107 | — | A | RT |
| 1-§26-3 | C1@b392c8cb | §26 b3: Handwritten/photo order → UDI preview → confirmation → draft | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13; D14 | NI-ORD; A-BP107 | — | A | RT |
| 1-§26-4 | C1@b392c8cb | §26 b4: Merchant/staff phone-order capture through conversation | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | RT |
| 1-§26-5 | C1@b392c8cb | §26 b5: Out-of-stock item → respectful substitution flow | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D17 | NI-ORD; A-BP107 | — | A | RT |
| 1-§26-6 | C1@b392c8cb | §26 b6: Missing delivery location requested only when operationally needed | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-ORD; A-BP107 | — | A | RT |
| 1-§26-7 | C1@b392c8cb | §26 b7: Permission-scoped delivery assignment | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§26-8 | C1@b392c8cb | §26 b8: Delivery staff receives only required information | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§26-9 | C1@b392c8cb | §26 b9: Purpose-limited delivery proof/location without default continuous trac… | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-ORD; A-BP107 | — | A+D | NEG |
| 1-§26-10 | C1@b392c8cb | §26 b10: Customer silence does not fail an otherwise sufficiently proven delivery | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | RT; NEG |
| 1-§26-11 | C1@b392c8cb | §26 b11: COD discrepancy remains visible and does not duplicate Ledger revenue | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D16; DTX | NI-ORD; A-BP107 | — | A | RT; IDEM |
| 1-§26-12a | C1@b392c8cb | §26 b12: WhatsApp and Conversation Workspace operate on the same order truth | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 (native workspace leg) | — | A | RT |
| 1-§26-12b | C1@b392c8cb | §26 b12: WhatsApp and Conversation Workspace operate on the same order truth | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§10.9-A (WhatsApp leg) | — |  | — |
| 1-§26-13 | C1@b392c8cb | §26 b13: Cross-business access is denied server-side | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | NEG |
| 1-§26-14 | C1@b392c8cb | §26 b14: Duplicate/retry does not create duplicate order/payment events | SCN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-ORD; A-BP107 | — | A | IDEM |
| 1-§27-1 | C1@b392c8cb | §27 b1: Permissions / Business Isolation | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-2 | C1@b392c8cb | §27 b2: shared customer/product identity | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-3 | C1@b392c8cb | §27 b3: Human Language Layer | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-4 | C1@b392c8cb | §27 b4: Universal Document Intelligence | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-5 | C1@b392c8cb | §27 b5: Conversation Workspace / WhatsApp integration | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-6 | C1@b392c8cb | §27 b6: Notification foundation | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-7 | C1@b392c8cb | §27 b7: audit/idempotency | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-8 | C1@b392c8cb | §27 b8: Inventory/Catalog for availability-aware flows | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-9 | C1@b392c8cb | §27 b9: Payment Verification / Ledger for financial closure | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§27-10 | C1@b392c8cb | §27 b10: bounded location primitive | RULE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration; realised by the Dependency column of the owning rows | — |  | — |
| 1-§28-1 | C1@b392c8cb | §28 p1: Preserve the original Founder intent for a professional private orderin… | PRIN | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | L-HIST; A-BP107 | — | A | INSP |
| 1-§28-2 | C1@b392c8cb | §28 b1: public marketplace interpretation | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-HIST; BP-§16-8; GPCV-§9-9 | — |  | — |
| 1-§28-3 | C1@b392c8cb | §28 b2: customer silence automatically becoming a failure/rollback | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-HIST; BP-§16-9 | — |  | — |
| 1-§28-4 | C1@b392c8cb | §28 b3: default continuous route GPS tracking of delivery staff | REJ | ADD-ON + BUILD NOW — before first 10 pilot merchants | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-HIST; BP-§16-3; GPCV-§9-3 | — |  | — |
| 1-§28-5 | C1@b392c8cb | §28 b4: fixed universal delay thresholds such as 45 minutes | HIST | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-HIST — historical-only, not current Product Truth (C1 §28); fixed thresholds stay out of design | — |  | — |
| 1-§28-6 | C1@b392c8cb | §28 b5: mandatory heavy native driver app | HIST | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-HIST — superseded by C1 §13 p1 (1-§13-1) | — |  | — |
| 1-§28-7 | C1@b392c8cb | §28 b6: old implementation-specific transport/status constants where not reaffi… | HIST | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-HIST — superseded by C1 §11 p5 (1-§11-4) | — |  | — |
| 1-§29 | C1@b392c8cb | §29 whole section: Provenance and Hydration Coverage | PROV | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-PROV — provenance only | — |  | — |
| 1-§30-1 | C1@b392c8cb | §30 b1: Exact current Smart Order & Delivery add-on price remains unresolved | UFD | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | BP-§15-5; GPCV-§8-4 — not critical path | — |  | — |
| 1-§30-2 | C1@b392c8cb | §30 b2: Broader marketplace/wholesaler expansion remains a separate future Foun… | UFD | not part of this contract — separate future Founder decision (C1 §30 b2) | not classified (GPCV §9 b11) | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | BP-§15-8; GPCV-§9-11; GPCV-§8-5 — not critical path; C1 §30 b2: "remains a separate future Founder decision and is not part of this contract" (MC-510, MC508-F02); boundary row 1-§4-7 | — |  | — |
| 1-§31-1 | C1@b392c8cb | §31 p1: The feature is not complete because an order screen exists | GATE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§13 | — | A | GATE |
| 1-§31-2 | C1@b392c8cb | §31 p2: Completion requires the full approved lifecycle across UI/channel, back… | GATE | ADD-ON + BUILD NOW — before first 10 pilot merchants | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§13 | — | A | GATE |

## B. Contract 06 — Staff / HR Assistant (100 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6-§1-1 | C6@ebacd183 | §1 p1: Staff / HR Assistant helps small merchants manage employee records, att… | EXP | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-HR; A-BP107 | — | B | EXP |
| 6-§2-1 | C6@ebacd183 | §2 p1: Local merchants often manage staff through notebooks, WhatsApp, rosters… | NARR | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-HR; L-NARR; A-BP107 | — | B | EXP |
| 6-§3-1 | C6@ebacd183 | §3 b1: employee/staff profiles | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§3-2 | C6@ebacd183 | §3 b2: roles and permission scope | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-ROLE; 21-§4 (SB-P-1.12); A-BP107 | — | B | RT |
| 6-§3-3 | C6@ebacd183 | §3 b3: shift/roster records | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DSCH | NI-HR; A-BP107 | — | B | RT |
| 6-§3-4 | C6@ebacd183 | §3 b4: attendance events | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-HR; A-BP107 | — | B+D | RT |
| 6-§3-5 | C6@ebacd183 | §3 b5: leave/absence recording | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§3-6 | C6@ebacd183 | §3 b6: payroll-support calculations and context | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLEG | NI-HR; A-BP107; U-05 resolved as to overtime-recording representation only (18:FPDR-5): recording is carried by the facet rows S11-L443-1 to S11-L443-5 (Part B2; Source 18 v1.3 §3.2 item 1 exception); this row stays the payroll-support row; L-F5 | 18:FPDR-5 | B | RT |
| 6-§3-7 | C6@ebacd183 | §3 b7: employee self-view of permitted attendance information | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; 21-§10-1 (SB-P-1.12); A-BP107 | — | B | RT |
| 6-§3-8 | C6@ebacd183 | §3 b8: correction/context records | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§3-9 | C6@ebacd183 | §3 b9: reminders/notifications relevant to staff operations | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15 | NI-HR; A-BP107 | — | B | RT |
| 6-§3-10 | C6@ebacd183 | §3 p2: Sensitive KYC/national-ID storage remains an unresolved Founder/legal/p… | UFD | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | BP-§15-7; GPCV-§8-3 — not critical path (U-06) | — |  | — |
| 6-§4-1 | C6@ebacd183 | §4 <Owner> p1: Controls staff access and may view authorized HR/attendance/payroll-sup… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; NI-ROLE; A-BP107 | — | B | RT |
| 6-§4-2 | C6@ebacd183 | §4 <Manager> p1: May receive delegated operational staff authority, but does not automat… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; NI-ROLE; A-BP107 | — | B | RT |
| 6-§4-3 | C6@ebacd183 | §4 <Employee Staff> b1: add permitted operational transactions | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14; DTX | NI-HR; NI-ROLE; A-BP107 | — | B | RT |
| 6-§4-4 | C6@ebacd183 | §4 <Employee Staff> b2: view their own attendance where permitted | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; NI-ROLE; A-BP107 | — | B | RT |
| 6-§4-5 | C6@ebacd183 | §4 <Employee Staff> b3: receive assigned shift/reminder information | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15 | NI-HR; NI-ROLE; A-BP107 | — | B | RT |
| 6-§4-6 | C6@ebacd183 | §4 <Employee Staff> b4: submit approved attendance/leave context | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; NI-ROLE; A-BP107 | — | B | RT |
| 6-§4-7 | C6@ebacd183 | §4 <Employee Staff> p2: Staff cannot see Owner profit intelligence, unrestricted analytics or A… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; NI-ROLE; A-BP107 | — | B | NEG |
| 6-§5-1 | C6@ebacd183 | §5 p1: Attendance must be represented as auditable events rather than silent m… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§5-2 | C6@ebacd183 | §5 p2: Supported mechanisms may include approved QR/location-assisted check-in… | EX | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-HR; NI-LOC; A-BP107; permissive wording (C6 §5 p2 'may include … or other future verified methods'); mandatory outcome carried by 6-§5-1, 6-§5-3, 6-§5-4; Source 11 names QR attendance with geofencing, so DC-14 proposes the QR plus point-in-time geofence capability as BUILD NOW (U-04; Mission Control T6, Founder only if rejected); L-F4M for QR plus point-in-time geofence, conditional on DC-14 (open; cannot be bypassed); L-F4A for any other allowable method | 18:FPDR-4 | B+D | RT (QR + point-in-time geofence per DC-14; other methods if adopted) |
| 6-§5-3 | C6@ebacd183 | §5 <Location rule> p1: Location is point-in-time and purpose-limited for attendance verificati… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | DLOC | NI-LOC; 12:FPDR-2; 12:FPDR-3; A-BP107 | 12:FPDR-2; 12:FPDR-3 | B+D | NEG |
| 6-§5-4 | C6@ebacd183 | §5 <Location rule> p2: Smart Business must not continuously track an employee merely because a… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | DLOC | NI-HR; A-BP107 | — | B+D | NEG |
| 6-§5-5 | C6@ebacd183 | §5 <Location rule> p3: Exact geofence radius is an implementation decision to be validated, no… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | DLOC | DC-04; A-BP107 | — | B+D | INSP |
| 6-§6-1 | C6@ebacd183 | §6 p1: A roster may arrive through photo, PDF, Excel/CSV or other approved for… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-HR; NI-UDI; A-BP107 | — | B | RT |
| 6-§6-2 | C6@ebacd183 | §6 p3: document → interpretation → preview → clarification if needed → confirm… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-UDI; 5-§7-5; 24-§18-4; A-BP107 | — | B | INSP |
| 6-§6-3 | C6@ebacd183 | §6 p4: No separate HR-only OCR/import truth system should be created | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-HR; NI-UDI; A-BP107 | — | B | NEG |
| 6-§7-1 | C6@ebacd183 | §7 p1: Smart Business should record the operational event and preserve approve… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | INSP |
| 6-§7-2 | C6@ebacd183 | §7 b1: employee absent | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§7-3 | C6@ebacd183 | §7 b2: Owner later approves leave | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§7-4 | C6@ebacd183 | §7 b3: attendance event corrected with reason | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§7-5 | C6@ebacd183 | §7 b4: shift changed after discussion | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§7-6 | C6@ebacd183 | §7 p3: The system should preserve raw event + authorized context/audit trail | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | INSP |
| 6-§8-1 | C6@ebacd183 | §8 p1: Payroll capability is assistance, not autonomous punishment | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | NEG |
| 6-§8-2 | C6@ebacd183 | §8 p2: Smart Business may help calculate or prepare payroll-support informatio… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLEG | NI-HR; A-BP107; U-05 resolved as to overtime-recording representation only (18:FPDR-5); stays assistive and permissive ('may help calculate or prepare'); C6 §8 p2 source-semantics screening open (MC-544); L-F5 | 18:FPDR-5 | B | RT |
| 6-§8-3 | C6@ebacd183 | §8 b1: autonomously fine staff | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; BP-§16-4; GPCV-§9-4 | — | B | NEG |
| 6-§8-4 | C6@ebacd183 | §8 b2: dock wages as punishment | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; BP-§16-4; GPCV-§9-4 | — | B | NEG |
| 6-§8-5 | C6@ebacd183 | §8 b3: treat attendance anomalies as misconduct verdicts | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; BP-§16-2; GPCV-§9-2 | — | B | NEG |
| 6-§8-6 | C6@ebacd183 | §8 b4: fabricate legal/payroll authority | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | NEG |
| 6-§8-7 | C6@ebacd183 | §8 p4: Consequential payroll changes remain human-controlled and auditable | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT; INSP |
| 6-§9-1 | C6@ebacd183 | §9 b1: interpret staff/shift instructions | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | RT |
| 6-§9-2 | C6@ebacd183 | §9 b2: summarize attendance patterns | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | RT |
| 6-§9-3 | C6@ebacd183 | §9 b3: prepare roster/leave/payroll-support drafts | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | RT |
| 6-§9-4 | C6@ebacd183 | §9 b4: flag missing/conflicting records | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | RT |
| 6-§9-5 | C6@ebacd183 | §9 b5: ask clarification | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | RT |
| 6-§9-6 | C6@ebacd183 | §9 b6: explain records neutrally | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | RT |
| 6-§9-7 | C6@ebacd183 | §9 b7: accuse an employee of fraud or misconduct from anomaly signals | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; BP-§16-2 | — | B | NEG |
| 6-§9-8 | C6@ebacd183 | §9 b8: continuously surveil employees | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; BP-§16-3 | — | B | NEG |
| 6-§9-9 | C6@ebacd183 | §9 b9: create permission by inference | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | NEG |
| 6-§9-10 | C6@ebacd183 | §9 b10: reveal Owner intelligence to staff | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | NEG |
| 6-§9-11 | C6@ebacd183 | §9 b11: silently modify historical attendance/payroll records | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-HR; A-BP107 | — | B | NEG |
| 6-§10-1a | C6@ebacd183 | §10 p1: Owner/Manager/Staff interactions may occur through approved channels in… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-HR; A-BP107 (native workspace and visual surfaces) | — | B | RT |
| 6-§10-1b | C6@ebacd183 | §10 p1: Owner/Manager/Staff interactions may occur through approved channels in… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; 23-§4-3 (WhatsApp leg) | — |  | — |
| 6-§10-2 | C6@ebacd183 | §10 p2: No channel may bypass role boundaries | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | NEG |
| 6-§11-1 | C6@ebacd183 | §11 b1: Permission Engine | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | B | INSP |
| 6-§11-2 | C6@ebacd183 | §11 b2: Identity foundation | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | B | INSP |
| 6-§11-3 | C6@ebacd183 | §11 b3: Human Language Layer | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | A-BP107; BP-§11 | — | B | INSP |
| 6-§11-4 | C6@ebacd183 | §11 b4: Conversation Engine | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | A-BP107; BP-§11 | — | B | INSP |
| 6-§11-5 | C6@ebacd183 | §11 b5: Universal Document Intelligence | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | A-BP107; BP-§11 | — | B | INSP |
| 6-§11-6 | C6@ebacd183 | §11 b6: Reminder Engine | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | A-BP107; BP-§11 | — | B | INSP |
| 6-§11-7 | C6@ebacd183 | §11 b7: Notification foundation | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | A-BP107; BP-§11 | — | B | INSP |
| 6-§11-8 | C6@ebacd183 | §11 b8: purpose-limited Location foundation | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | DLOC | A-BP107; BP-§11 | — | B+D | INSP |
| 6-§11-9 | C6@ebacd183 | §11 b9: audit/history foundation | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | B | INSP |
| 6-§12-1 | C6@ebacd183 | §12 b1: minimum necessary staff data | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | B | NEG |
| 6-§12-2 | C6@ebacd183 | §12 b2: business isolation | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | B | NEG |
| 6-§12-3 | C6@ebacd183 | §12 b3: role-scoped visibility | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | B | NEG |
| 6-§12-4 | C6@ebacd183 | §12 b4: purpose-limited location use | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | A-BP107 | — | B+D | NEG |
| 6-§12-5 | C6@ebacd183 | §12 b5: auditable corrections | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107 | — | B | NEG |
| 6-§12-6 | C6@ebacd183 | §12 b6: no continuous tracking | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | DLOC | A-BP107 | — | B+D | NEG |
| 6-§12-7 | C6@ebacd183 | §12 b7: no automated humiliation, accusation or punishment | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§16-2; BP-§16-4 | — | B | NEG |
| 6-§12-8 | C6@ebacd183 | §12 b8: no routine Team LIPS access to employee data without legitimate support… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D19 | 21-§14-1 (SB-P-1.12); A-BP107 | — | B | NEG |
| 6-§13-1 | C6@ebacd183 | §13 b1: duplicate check-in/out | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | IDEM |
| 6-§13-2 | C6@ebacd183 | §13 b2: missing shift | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§13-3 | C6@ebacd183 | §13 b3: location unavailable | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-HR; A-BP107 | — | B+D | RT |
| 6-§13-4 | C6@ebacd183 | §13 b4: ambiguous employee identity | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§13-5 | C6@ebacd183 | §13 b5: roster conflict | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§13-6 | C6@ebacd183 | §13 b6: attendance correction request | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§13-7 | C6@ebacd183 | §13 b7: approved leave after an absence event | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§13-8 | C6@ebacd183 | §13 b8: unauthorized staff action | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§13-9 | C6@ebacd183 | §13 b9: retry/idempotency | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | IDEM |
| 6-§13-10 | C6@ebacd183 | §13 b10: payroll-support data inconsistency | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§13-11 | C6@ebacd183 | §13 p2: A disputed HR event should enter review/context flow rather than being… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§14-1 | C6@ebacd183 | §14 b1: Owner creates staff profile and scoped permissions | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§14-2 | C6@ebacd183 | §14 b2: staff can perform permitted action but cannot access Owner intelligence | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§14-3 | C6@ebacd183 | §14 b3: point-in-time attendance location works without continuous tracking | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLOC | NI-HR; A-BP107 | — | B+D | RT; NEG |
| 6-§14-4 | C6@ebacd183 | §14 b4: roster document preview/confirm flow | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-HR; A-BP107 | — | B | RT |
| 6-§14-5 | C6@ebacd183 | §14 b5: leave/absence context preserves original event | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§14-6 | C6@ebacd183 | §14 b6: attendance correction is auditable | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT |
| 6-§14-7 | C6@ebacd183 | §14 b7: staff self-view is limited to permitted own data | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | NEG |
| 6-§14-8 | C6@ebacd183 | §14 b8: payroll-support draft requires human control for consequential outcome | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | RT; INSP |
| 6-§14-9 | C6@ebacd183 | §14 b9: English/Malayalam/Manglish interaction | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13 | NI-HR; A-BP107 | — | B | EXP |
| 6-§14-10 | C6@ebacd183 | §14 b10: cross-business isolation | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-HR; A-BP107 | — | B | NEG |
| 6-§15-1 | C6@ebacd183 | §15 b1: continuous employee GPS surveillance | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-3; GPCV-§9-3 | — |  | — |
| 6-§15-2 | C6@ebacd183 | §15 b2: automated wage punishment/fines | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-4; GPCV-§9-4 | — |  | — |
| 6-§15-3 | C6@ebacd183 | §15 b3: AI misconduct verdicts | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§16-2; GPCV-§9-2 | — |  | — |
| 6-§15-4 | C6@ebacd183 | §15 b4: broad employee access to Owner financial intelligence | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG | — |  | — |
| 6-§15-5 | C6@ebacd183 | §15 b5: destructive rewriting of attendance/payroll history | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG | — |  | — |
| 6-§15-6 | C6@ebacd183 | §15 b6: assumed national-ID/KYC collection without a resolved legal/privacy bas… | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG; BP-§15-7 (U-06) | — |  | — |
| 6-§16 | C6@ebacd183 | §16 whole section: Dependencies | SEC | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-DEP — dependency declaration carried by the Dependency column | — |  | — |
| 6-§17-1 | C6@ebacd183 | §17 p1: Staff / HR is complete only when the permission model, attendance/roste… | GATE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§13 | — | B | GATE |

## B2. Source 11 L443 overtime-recording facet rows (5 rows)

These five rows are the verification facets of **one** Source 11 obligation, line 443 "overtime records" of the pinned Source 11 blob, as interpreted by `18:FPDR-5`. They exist only under the Source 18 v1.3 §3.2 item 1 exception (`L-S11`) and appear in the facet order that item states. They add one source obligation, not five, and leave every contract-section count unchanged. The obligation key and expected-facet set are derived independently in `07-…` §1.7. Contract 06 has no overtime unit (`18:FPDR-5` §3); the Contract 06 and Contract 17 units cited are behaviour context only. No row defines overtime, calculates pay, sets a retention rule or creates an export obligation.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| S11-L443-1 | S11@16897d6c | Staff / HR Assistant Add-on, Includes, L443 'overtime records', facet 1 of 5: record creation from a manual report, a system-proposed entry or a manager entry, including disputed entries | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DSCH; DLOC; DLEG | L-S11; NI-HR; A-BP107; L-F5; context, not anchor: 6-§3-8, 6-§7-1, 6-§7-6, 6-§13-11; approved shift (6-§3-3) and attendance (6-§3-4) records may be cited as evidence only and do not define overtime; a system-proposed entry has no effect until reviewed (S11-L443-2); whether the electronic record may serve as a prescribed register is open (DLEG, F-5 validation item 4) | 18:FPDR-5 | B | RT: a record is created from each of the four origins; IDEM |
| S11-L443-2 | S11@16897d6c | Staff / HR Assistant Add-on, Includes, L443 'overtime records', facet 2 of 5: authorized human review | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | L-S11; NI-HR; NI-ROLE; A-BP107; L-F5; context, not anchor: reviewed by the Owner or an authorized Manager within delegated scope (6-§4-1, 6-§4-2; S11 L774); consequential outcomes human-controlled (6-§8-7, 6-§14-8); no autonomous judgement or sanction (6-§8-3 to 6-§8-6, 6-§12-7) | 18:FPDR-5 | B | RT: authorized review; NEG: unauthorized or autonomous review |
| S11-L443-3 | S11@16897d6c | Staff / HR Assistant Add-on, Includes, L443 'overtime records', facet 3 of 5: auditable correction and dispute | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLEG | L-S11; NI-HR; A-BP107; L-F5; context, not anchor: correction with reason preserves the original entry, its context and provenance (6-§7-4, 6-§7-6, 6-§12-5); the employee requests correction and never edits directly (S11 L451, L454; 6-§13-6); a disputed entry enters the review/context flow and is not silently erased (6-§13-11); no destructive rewrite (6-§15-5); preservation is subject to applicable retention, minimisation and lawful deletion or hold rules, and no retention period is decided or implied (DLEG, F-5 validation item 5) | 18:FPDR-5 | B | RT: correction and dispute preserve the original; NEG: destructive rewrite; IDEM |
| S11-L443-4 | S11@16897d6c | Staff / HR Assistant Add-on, Includes, L443 'overtime records', facet 4 of 5: role-scoped visibility, including the employee's own record | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; DLEG | L-S11; NI-HR; NI-ROLE; A-BP107; L-F5; context, not anchor: visible to the Owner and an authorized Manager within delegated scope (6-§4-1, 6-§4-2, 6-§12-3) and to the employee for their own record only (S11 L446–L454; 6-§4-4); no other employee's record (6-§4-7, 17-§9-7); the data-protection basis for employee access and correction is open (DLEG, F-5 validation item 7) | 18:FPDR-5 | B | RT: role-scoped and own-record views; NEG: another employee's record |
| S11-L443-5 | S11@16897d6c | Staff / HR Assistant Add-on, Includes, L443 'overtime records', facet 5 of 5: audit attribution and provenance | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | L-S11; NI-HR; A-BP107; L-F5; context, not anchor: each creation, review, correction and dispute step is attributed to actor, role, origin and time in the audit trail (6-§7-6, 6-§12-5; audit per D12) | 18:FPDR-5 | B | RT: each step attributed to actor, role, origin and time; INSP: audit trail |

## C. Contract 16 — Compliance Shield (152 rows)

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 16-§1-1 | C16@420269d8 | §1 p1: Compliance Shield helps a merchant organize licences, certificates, ren… | EXP | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; A-BP107 | — | C | EXP |
| 16-§1-2 | C16@420269d8 | §1 p2: It should reduce missed deadlines without making unsupported legal clai… | EXP | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; A-BP107 | — | C | EXP |
| 16-§2-1 | C16@420269d8 | §2 b1: FSSAI registrations/licences | NARR | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; L-NARR; A-BP107 | — | C | EXP |
| 16-§2-2 | C16@420269d8 | §2 b2: Panchayat/Municipal trade licences | NARR | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; L-NARR; A-BP107 | — | C | EXP |
| 16-§2-3 | C16@420269d8 | §2 b3: Fire Safety NOC/certificates where applicable | NARR | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; L-NARR; A-BP107 | — | C | EXP |
| 16-§2-4 | C16@420269d8 | §2 b4: business/vehicle/asset renewals | NARR | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; L-NARR; A-BP107 | — | C | EXP |
| 16-§2-5 | C16@420269d8 | §2 b5: other merchant-specific regulatory or operational documents | NARR | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; L-NARR; A-BP107 | — | C | EXP |
| 16-§2-6 | C16@420269d8 | §2 p2: These are often tracked in files, WhatsApp photos, calendars or memory.… | NARR | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; L-NARR; A-BP107 | — | C | EXP |
| 16-§3-1 | C16@420269d8 | §3 b1: Reduce mental load | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | INSP |
| 16-§3-2 | C16@420269d8 | §3 b2: Tell the merchant what Smart Business knows and does not know | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | INSP |
| 16-§3-3 | C16@420269d8 | §3 b3: Remind/organize; do not impersonate legal authority | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | INSP |
| 16-§3-4 | C16@420269d8 | §3 b4: Reuse shared Document Intelligence and Reminder foundations | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | INSP |
| 16-§3-5 | C16@420269d8 | §3 b5: Ask when document dates/identity are uncertain | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | INSP |
| 16-§3-6 | C16@420269d8 | §3 b6: Do not silently trust low-confidence OCR | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | NEG |
| 16-§3-7 | C16@420269d8 | §3 b7: Preserve privacy of licences/identity/business documents | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | INSP |
| 16-§4-1 | C16@420269d8 | §4 b1: business scope | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-2 | C16@420269d8 | §4 b2: compliance/document type | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-3 | C16@420269d8 | §4 b3: document/licence identifier where relevant | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-4 | C16@420269d8 | §4 b4: issuing authority/source where known | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-5 | C16@420269d8 | §4 b5: issue/start date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-6 | C16@420269d8 | §4 b6: expiry/renewal/due date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-7 | C16@420269d8 | §4 b7: supporting document/file | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-8 | C16@420269d8 | §4 b8: responsible Owner/authorized user | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-9 | C16@420269d8 | §4 b9: reminder configuration | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-10 | C16@420269d8 | §4 b10: status/history | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-11 | C16@420269d8 | §4 b11: source/interpretation confidence | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-12 | C16@420269d8 | §4 b12: human-confirmed corrections | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-13 | C16@420269d8 | §4 b13: notes/context | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§4-14 | C16@420269d8 | §4 p2: Exact fields depend on the document type; avoid a brittle one-size sche… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; A-BP107 | — | C | INSP |
| 16-§5-1 | C16@420269d8 | §5 b1: photo/image | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§5-2 | C16@420269d8 | §5 b2: PDF | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§5-3 | C16@420269d8 | §5 b3: supported file upload | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§5-4 | C16@420269d8 | §5 b4: manual entry | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§5-5a | C16@420269d8 | §5 b5: Conversation Workspace / WhatsApp where appropriate | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 (Conversation Workspace) | — | C | RT |
| 16-§5-5b | C16@420269d8 | §5 b5: Conversation Workspace / WhatsApp where appropriate | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 (WhatsApp) | — |  | — |
| 16-§5-6 | C16@420269d8 | §5 p3: upload → interpret → preview → clarify where needed → confirm → validat… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-UDI; 5-§7-7; A-BP107 | — | C | INSP |
| 16-§5-7 | C16@420269d8 | §5 p4: OCR output alone is not trusted compliance truth when key dates/identit… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-CMP; NI-UDI; A-BP107 | — | C | NEG |
| 16-§6-1 | C16@420269d8 | §6 b1: issue date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14; DAI | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§6-2 | C16@420269d8 | §6 b2: effective/start date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14; DAI | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§6-3 | C16@420269d8 | §6 b3: expiry date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14; DAI | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§6-4 | C16@420269d8 | §6 b4: renewal/due date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14; DAI | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§6-5 | C16@420269d8 | §6 b5: inspection/other date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14; DAI | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§6-6 | C16@420269d8 | §6 p2: If multiple plausible dates exist or the document is unclear, ask the m… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14; DAI | NI-CMP; NI-UDI; A-BP107 | — | C | RT |
| 16-§6-7 | C16@420269d8 | §6 p3: Do not silently choose a date just because OCR returned a value | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14; DAI | NI-CMP; NI-UDI; A-BP107 | — | C | NEG |
| 16-§7-1 | C16@420269d8 | §7 p1: Compliance Shield must use the shared Reminder Engine | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DSCH | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | INSP |
| 16-§7-2 | C16@420269d8 | §7 p2: It may create progressive reminders before a deadline according to appr… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DSCH | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | RT |
| 16-§7-3 | C16@420269d8 | §7 p3: Historical 60 / 30 / 7 / 1 day cadence is useful provenance, not immuta… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | INSP |
| 16-§7-4 | C16@420269d8 | §7 b1: advance notice | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DSCH | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | RT |
| 16-§7-5 | C16@420269d8 | §7 b2: nearer-deadline escalation | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DSCH | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | RT |
| 16-§7-6 | C16@420269d8 | §7 b3: done/renewed acknowledgement | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DSCH | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | RT |
| 16-§7-7 | C16@420269d8 | §7 b4: snooze/reschedule where appropriate | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DSCH | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | RT |
| 16-§7-8 | C16@420269d8 | §7 b5: renewal-cycle continuation | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15; DSCH | NI-CMP; NI-REM; A-BP107; BP-§11-4 | — | C | RT |
| 16-§8-1 | C16@420269d8 | §8 b1: Merchant has a confirmed compliance record/date | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-2 | C16@420269d8 | §8 b2: Shared Reminder Engine schedules notifications | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-3 | C16@420269d8 | §8 b3: Merchant receives timely reminder | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-4 | C16@420269d8 | §8 b4: Merchant opens/retrieves document/context | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-5 | C16@420269d8 | §8 b5: Merchant completes renewal outside or through any separately approved e… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 (no external filing integration is approved: 16-§15-10) | — | C | RT |
| 16-§8-6 | C16@420269d8 | §8 b6: Merchant uploads/records updated evidence | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-7 | C16@420269d8 | §8 b7: Smart Business interprets and previews new details | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-8 | C16@420269d8 | §8 b8: Merchant confirms | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-9 | C16@420269d8 | §8 b9: Current record/history is updated without erasing prior document history | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-10 | C16@420269d8 | §8 b10: Next reminder cycle is established where applicable | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§8-11 | C16@420269d8 | §8 p2: Smart Business must not mark a renewal complete simply because a remind… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14; D15 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§9-1 | C16@420269d8 | §9 p1: Compliance documents should reuse the shared secure document-memory fou… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-CMP; A-BP107 | — | C | INSP |
| 16-§9-2 | C16@420269d8 | §9 p2: The merchant should be able to retrieve approved records/documents conv… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§10-1 | C16@420269d8 | §10 <Owner> p1: Full compliance-record/reminder authority for the business | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; NI-ROLE; A-BP107 | — | C | NEG |
| 16-§10-2 | C16@420269d8 | §10 <Manager> p1: Only Owner-delegated compliance visibility/actions | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; NI-ROLE; A-BP107 | — | C | NEG |
| 16-§10-3 | C16@420269d8 | §10 <Employee> p1: No broad compliance-document access by default. A specific operational… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; NI-ROLE; A-BP107 | — | C | NEG |
| 16-§10-4 | C16@420269d8 | §10 <Support Platform> p1: No routine document browsing. Purpose-limited support access follows cu… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D19 | 21-§14-1 (SB-P-1.12); A-BP107 | — | C | NEG |
| 16-§11-1 | C16@420269d8 | §11 b1: upload a licence/document | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§11-2 | C16@420269d8 | §11 b2: ask what renewals are coming | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§11-3 | C16@420269d8 | §11 b3: retrieve permitted documents | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§11-4 | C16@420269d8 | §11 b4: confirm/correct dates | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§11-5 | C16@420269d8 | §11 b5: mark/upload renewed evidence | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§11-6a | C16@420269d8 | §11 p2: through the same shared compliance/document truth | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 (workspace) | — | C | RT |
| 16-§11-6b | C16@420269d8 | §11 p2: through the same shared compliance/document truth | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109 (WhatsApp leg of §11) | — |  | — |
| 16-§11-7 | C16@420269d8 | §11 p3: Channels must not create duplicate reminders or document records | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; D14 | NI-CMP; A-BP107 | — | C | NEG; IDEM |
| 16-§12-1 | C16@420269d8 | §12 p1: English, Malayalam and Manglish are first-class for reminders/questions… | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-CMP; A-BP107 | — | C | EXP |
| 16-§12-2 | C16@420269d8 | §12 p2: Official document names may remain in their common/legal English form w… | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | NI-CMP; A-BP107 | — | C | EXP |
| 16-§13-1 | C16@420269d8 | §13 b1: Which renewals are due soon? | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-CMP; 2-§11 / 4-§3-6 (SB-P-1.15); A-BP107 | — | C | RT |
| 16-§13-2 | C16@420269d8 | §13 b2: Show my FSSAI document | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-CMP; 2-§11 / 4-§3-6 (SB-P-1.15); A-BP107 | — | C | RT |
| 16-§13-3 | C16@420269d8 | §13 p2: Daily Intelligence may surface a material near-term compliance reminder… | CONS | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-CMP; 2-§11 / 4-§3-6 (SB-P-1.15); A-BP107 | — | C | RT |
| 16-§13-4 | C16@420269d8 | §13 p3: Neither feature should make legal conclusions beyond supported facts | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-CMP; 2-§11 / 4-§3-6 (SB-P-1.15); A-BP107 | — | C | NEG |
| 16-§14-1 | C16@420269d8 | §14 p1: Use the shared Notification foundation | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; 12:FPDR-1; A-BP107 | 12:FPDR-1 | C | INSP |
| 16-§14-2 | C16@420269d8 | §14 b1: what record/deadline is involved | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; 12:FPDR-1; A-BP107 | 12:FPDR-1 | C | RT |
| 16-§14-3 | C16@420269d8 | §14 b2: when it is due/expiring | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; 12:FPDR-1; A-BP107 | 12:FPDR-1 | C | RT |
| 16-§14-4 | C16@420269d8 | §14 b3: what the merchant can do next | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; 12:FPDR-1; A-BP107 | 12:FPDR-1 | C | RT |
| 16-§14-5 | C16@420269d8 | §14 b4: uncertainty where the date is not fully confirmed | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; 12:FPDR-1; A-BP107 | 12:FPDR-1 | C | RT |
| 16-§14-6 | C16@420269d8 | §14 p3: Avoid unsupported penalty claims or alarmist language | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | NI-NTF; 12:FPDR-1; A-BP107 | 12:FPDR-1 | C | NEG |
| 16-§15-1 | C16@420269d8 | §15 b1: interpret documents | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | RT |
| 16-§15-2 | C16@420269d8 | §15 b2: identify candidate dates/fields | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | RT |
| 16-§15-3 | C16@420269d8 | §15 b3: organize records | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | RT |
| 16-§15-4 | C16@420269d8 | §15 b4: remind | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | RT |
| 16-§15-5 | C16@420269d8 | §15 b5: explain stored facts | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | RT |
| 16-§15-6 | C16@420269d8 | §15 b6: suggest that the merchant verify/renew | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | RT |
| 16-§15-7 | C16@420269d8 | §15 b7: certify legal compliance | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | NEG |
| 16-§15-8 | C16@420269d8 | §15 b8: claim the merchant is legally compliant because a document is stored | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | NEG |
| 16-§15-9 | C16@420269d8 | §15 b9: fabricate current law/penalty amounts | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | NEG |
| 16-§15-10 | C16@420269d8 | §15 b10: file/renew with authorities unless a separately approved integration ex… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | NEG |
| 16-§15-11 | C16@420269d8 | §15 b11: silently change confirmed dates based on later OCR | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13; DAI | NI-CMP; A-BP107 | — | C | NEG |
| 16-§16-1 | C16@420269d8 | §16 b1: unreadable/partial document | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-2 | C16@420269d8 | §16 b2: multiple dates | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-3 | C16@420269d8 | §16 b3: expired document discovered late | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-4 | C16@420269d8 | §16 b4: duplicate upload | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | IDEM |
| 16-§16-5 | C16@420269d8 | §16 b5: renewal document superseding old record | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-6 | C16@420269d8 | §16 b6: reminder delivery failure | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-7 | C16@420269d8 | §16 b7: unsupported document type | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-8 | C16@420269d8 | §16 b8: permission denied | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§16-9 | C16@420269d8 | §16 b9: missing document but known deadline | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-10 | C16@420269d8 | §16 b10: law/requirement outside current knowledge | OBL | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§16-11 | C16@420269d8 | §16 p2: Uncertainty must be visible and narrowly contained | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | RT |
| 16-§17-1 | C16@420269d8 | §17 p1: Compliance documents may contain sensitive identity/business information | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§17-2 | C16@420269d8 | §17 b1: business isolation | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§17-3 | C16@420269d8 | §17 b2: permission-scoped retrieval | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§17-4 | C16@420269d8 | §17 b3: no unnecessary staff exposure | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§17-5 | C16@420269d8 | §17 b4: purpose-limited support access | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D19 | 21-§14-1 (SB-P-1.12); A-BP107 | — | C | NEG |
| 16-§17-6 | C16@420269d8 | §17 b5: current retention/deletion policy | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | NI-CMP; 25-§4-8 (SB-P-1.14); C25 §17; DC-09 | — | C | INSP |
| 16-§17-7 | C16@420269d8 | §17 b6: no use of compliance data for secret manipulation/upsell | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§18-1 | C16@420269d8 | §18 b1: Universal Document Intelligence | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-2 | C16@420269d8 | §18 b2: Receipt/Document Cabinet | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-3 | C16@420269d8 | §18 b3: Reminder Engine | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-4 | C16@420269d8 | §18 b4: Notification foundation | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D15 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-5 | C16@420269d8 | §18 b5: Permission Engine | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-6 | C16@420269d8 | §18 b6: Business Memory | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D14 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-7 | C16@420269d8 | §18 b7: Human Language Layer | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-8 | C16@420269d8 | §18 b8: Conversation channels | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D13 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-9 | C16@420269d8 | §18 b9: audit/history | RULE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12 | A-BP107; BP-§11 | — | C | INSP |
| 16-§18-10 | C16@420269d8 | §18 p2: Do not create a compliance-only OCR pipeline, storage system or schedul… | NEG | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§11 | — | C | NEG |
| 16-§19-1 | C16@420269d8 | §19 b1: legal advice/certification | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG — contract non-goal, checked must-not-appear | — |  | — |
| 16-§19-2 | C16@420269d8 | §19 b2: immutable 60/30/7/1 cadence | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG — contract non-goal, checked must-not-appear | — |  | — |
| 16-§19-3 | C16@420269d8 | §19 b3: hardcoded penalty/legal claims without current verification | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG — contract non-goal, checked must-not-appear | — |  | — |
| 16-§19-4 | C16@420269d8 | §19 b4: OCR-to-trusted-date with no review when uncertain | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG — contract non-goal, checked must-not-appear | — |  | — |
| 16-§19-5 | C16@420269d8 | §19 b5: duplicate reminder/document architecture | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-NEG — contract non-goal, checked must-not-appear | — |  | — |
| 16-§20-1 | C16@420269d8 | §20 b1: Clear licence photo → interpreted fields/date → preview → Owner confirm… | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§20-2 | C16@420269d8 | §20 b2: Ambiguous date → clarification before record/reminder | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§20-3 | C16@420269d8 | §20 b3: Renewal reminder uses shared Reminder Engine | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15; DSCH | NI-CMP; A-BP107 | — | C | RT |
| 16-§20-4 | C16@420269d8 | §20 b4: Expired/renewed document preserves historical record | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | RT |
| 16-§20-5 | C16@420269d8 | §20 b5: Reminder due does not falsely mark renewal complete | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§20-6 | C16@420269d8 | §20 b6: Employee cannot access broad compliance documents by default | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§20-7a | C16@420269d8 | §20 b7: WhatsApp and Workspace retrieve the same confirmed record | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D13; D14 | NI-CMP; A-BP107 (workspace leg) | — | C | RT |
| 16-§20-7b | C16@420269d8 | §20 b7: WhatsApp and Workspace retrieve the same confirmed record | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.20 | ASSIGNED TO LATER MISSION | D20 | L-X20; A-BP109; BP-§10.9-A (WhatsApp leg) | — |  | — |
| 16-§20-8 | C16@420269d8 | §20 b8: Duplicate document/upload is handled safely | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D14 | NI-CMP; A-BP107 | — | C | IDEM |
| 16-§20-9 | C16@420269d8 | §20 b9: Ask CFO reports stored renewal facts without legal certification | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D15 | NI-CMP; A-BP107 | — | C | RT; NEG |
| 16-§20-10 | C16@420269d8 | §20 b10: Support cannot routinely browse documents without purpose/authorization | SCN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | D12; D19 | NI-CMP; A-BP107 | — | C | NEG |
| 16-§21-1 | C16@420269d8 | §21 p1: Preserve compliance-memory/reminder intent | PRIN | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | L-HIST | — | C | INSP |
| 16-§21-2 | C16@420269d8 | §21 b1: exact 60/30/7/1 cadence | HIST | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-HIST — historical-only (C16 §21); see 16-§7-3 | — |  | — |
| 16-§21-3 | C16@420269d8 | §21 b2: fixed penalty claims | HIST | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-HIST — historical-only (C16 §21); see 16-§14-3 | — |  | — |
| 16-§21-4 | C16@420269d8 | §21 b3: provider-specific document/storage assumptions | HIST | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-HIST — historical-only (C16 §21); storage choice is C25 (SB-P-1.14) | — |  | — |
| 16-§21-5 | C16@420269d8 | §21 b4: treating OCR as unquestioned authority | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-HIST — superseded (C16 §21); must not appear | — |  | — |
| 16-§21-6 | C16@420269d8 | §21 b5: claiming Smart Business itself makes the merchant legally compliant | REJ | ADD-ON + BUILD NOW | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | L-HIST — superseded (C16 §21); must not appear | — |  | — |
| 16-§22 | C16@420269d8 | §22 whole section: Provenance and Hydration Coverage | PROV | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | NOT APPLICABLE | — | L-PROV — provenance only | — |  | — |
| 16-§23-1 | C16@420269d8 | §23 p1: Complete only when document intake, confirmed compliance facts, retriev… | GATE | ADD-ON + BUILD NOW | ADDON-LM | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§13 | — | C | GATE |

## D. Inherited shared-foundation and delegated-contract units owned here (50 rows)

Contract 22 §16 and §29 b9 (`12:FPDR-2`, `12:FPDR-3`), Contract 17 §4 b15, §9 and §10, and the inherited C3, C5, C9, C10, C12 and C24 units.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 22-§16-1 | C22@61e1bb91 | §16 p1: Where features need location, use a shared purpose-limited primitive ra… | RULE | BUILD NOW | CORE-ARCH | SB-P-1.18 | IN SCOPE | D12 | NI-LOC; I-12 (22-§16-1) | 12:FPDR-2 | D | INSP; NEG |
| 22-§16-2 | C22@61e1bb91 | §16 p3: Default continuous employee surveillance is rejected | NEG | BUILD NOW | CORE-ARCH | SB-P-1.12 / SB-P-1.18 | IN SCOPE | D12 | I-12 (22-§16-2 NEG, SB-P-1.12); primitive owner check here (12:FPDR-2) | 12:FPDR-2 | D | NEG |
| 22-§16-3 | C22@61e1bb91 | §16 b5: why location is needed | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 (attendance/delivery instance) | IN SCOPE | DLOC | I-12 (22-§16-3) | 12:FPDR-3 | D | INSP |
| 22-§16-4 | C22@61e1bb91 | §16 b6: who may see it | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 (attendance/delivery instance) | IN SCOPE | D12; DLOC | I-12 (22-§16-4) | 12:FPDR-3 | D | NEG |
| 22-§16-5 | C22@61e1bb91 | §16 b7: when it is captured | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 (attendance/delivery instance) | IN SCOPE | DLOC | I-12 (22-§16-5) | 12:FPDR-3 | D | RT |
| 22-§16-6 | C22@61e1bb91 | §16 b8: how long it is retained | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 (attendance/delivery instance) | IN SCOPE | DLOC; DLEG | I-12 (22-§16-6); U-03 (T1/T3): no approved duration; C22 §33.4; C25 §17; L-F1: U-03 resolved by 18:FPDR-1 (event-triggered class rules; no numeric period) | 12:FPDR-3; 18:FPDR-1 | D | INSP |
| 22-§16-7 | C22@61e1bb91 | §16 b9: when access ends | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 (attendance/delivery instance) | IN SCOPE | D12; DLOC | I-12 (22-§16-7); C1 §14 b7 | 12:FPDR-3 | D | NEG |
| 22-§16-8 | C22@61e1bb91 | §16 b1: point-in-time attendance verification | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 | IN SCOPE | DLOC | new unit row (no upstream row carried §16 b1); A-BP107 | 12:FPDR-2 | B+D | RT |
| 22-§16-9 | C22@61e1bb91 | §16 b2: customer delivery destination | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 | IN SCOPE | DLOC | new unit row (§16 b2); A-BP107 | 12:FPDR-2 | A+D | RT |
| 22-§16-10 | C22@61e1bb91 | §16 b3: point-in-time delivery proof/context | OBL | BUILD NOW | CORE-ARCH | SB-P-1.18 | IN SCOPE | DLOC | new unit row (§16 b3); A-BP107 | 12:FPDR-2 | A+D | RT |
| 22-§16-11 | C22@61e1bb91 | §16 b4: other explicitly approved operational purposes | RULE | BUILD NOW | CORE-ARCH | SB-P-1.18 | IN SCOPE | DLOC | new unit row (§16 b4): no purpose beyond b1–b3 without explicit approval; U-02 resolved by 18:FPDR-2 and HU-02 released: no Phase 1 live-tracking purpose is approved, and any future one needs separate approval under this rule | 12:FPDR-2; 18:FPDR-2 | D | INSP |
| 22-§29-9 | C22@61e1bb91 | §29 b9: Attendance/delivery location uses purpose-limited shared primitive | SCN | BUILD NOW | CORE-ARCH | SB-P-1.18 | IN SCOPE | D12; DLOC | I-12 (22-§29-9) | 12:FPDR-2 | A+B+D | RT; NEG |
| 17-§4-15 | C17@7943f74a | §4 <Manager oriented surface> b7: staff/HR/order-delivery views when add-ons are enabled | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-17 (17-§4-15); A-BP107 | — | V | RT |
| 17-§9-1 | C17@7943f74a | §9 b1: staff roster | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§9 expanded here); A-BP107 | — | B | RT |
| 17-§9-2 | C17@7943f74a | §9 b2: attendance | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§9) | — | B | RT |
| 17-§9-3 | C17@7943f74a | §9 b3: leave requests | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§9) | — | B | RT |
| 17-§9-4 | C17@7943f74a | §9 b4: correction/context review | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§9) | — | B | RT |
| 17-§9-5 | C17@7943f74a | §9 b5: payroll support/export | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§9); U-05 resolved as to overtime-recording representation only (18:FPDR-5); whether the export carries overtime fields is open and no export obligation is created; C17 §9 'may include' source-semantics screening open (MC-544); L-F5 | 18:FPDR-5 | B | RT |
| 17-§9-6 | C17@7943f74a | §9 b6: role/permission administration where appropriate | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§9); role mechanics 21-§4 (SB-P-1.12) | — | B | RT; NEG |
| 17-§9-7 | C17@7943f74a | §9 p2: Employees may have self-service surfaces only for information/actions e… | NEG | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17 | I-12, I-17 (17-§9); 21-§10-6 | — | B | NEG |
| 17-§10-1 | C17@7943f74a | §10 b1: orders by state | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-16, I-17 (17-§10 expanded here); A-BP107 | — | A | RT |
| 17-§10-2 | C17@7943f74a | §10 b2: pending confirmation | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§10) | — | A | RT |
| 17-§10-3 | C17@7943f74a | §10 b3: preparation/assignment | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§10) | — | A | RT |
| 17-§10-4 | C17@7943f74a | §10 b4: delivery exceptions | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17; DENT | I-12, I-17 (17-§10) | — | A | RT |
| 17-§10-5 | C17@7943f74a | §10 b5: COD/payment issues | CONS | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D16; D17; DENT | I-16 (17-§10 COD consumer); I-17 | — | A | RT |
| 17-§10-6 | C17@7943f74a | §10 b6: delivery history/proof | OBL | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D14; D17; DENT | I-12, I-17 (17-§10) | — | A | RT |
| 17-§10-7 | C17@7943f74a | §10 p2: The dashboard does not create a marketplace and must preserve delivery/… | NEG | BUILD NOW | MGR+LDG | SB-P-1.18 | IN SCOPE | D12; D17 | I-12, I-17 (17-§10); BP-§16-8 | — | A | NEG |
| 24-§18-4 | C24@0c1dcbb2 | §18 <Roster Document HR Atten> b1: roster photo/file enters UDI | SCN | BUILD NOW | CORE-INT | SB-P-1.18 | IN SCOPE | D13; D14; DAI | I-13 (24-§18-4: the Roster Document → HR → Attendance/Payroll Support example, all six steps) | — | B | RT |
| 24-§21-6 | C24@0c1dcbb2 | §21 b5: roster/attendance corrections | OBL | BUILD NOW | CORE-INT | SB-P-1.18 | IN SCOPE | D12; D13 | I-13 (24-§21-6) | — | B | RT |
| 9-§12-7 | C9@649c55f3 | §12 b7: Staff/HR | RULE | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D13 | I-13 (9-§12-7; consumer verification) | — | B | EXP |
| 9-§12-9 | C9@649c55f3 | §12 b9: Smart Order & Delivery | RULE | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D13 | I-13 (9-§12-9) | — | A | EXP |
| 9-§12-12 | C9@649c55f3 | §12 b12: Compliance and other conversational features | RULE | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D13 | I-13 (9-§12-12) | — | C | EXP |
| 10-§13-5 | C10@5c145ed7 | §13 b4: create an order draft | OBL | BUILD NOW | CORE-CH | SB-P-1.18 | IN SCOPE | D12; D13 | I-13 (10-§13-5) | — | A | RT |
| 10-§13-7 | C10@5c145ed7 | §13 b6: submit an attendance correction request | OBL | BUILD NOW | CORE-CH | SB-P-1.18 | IN SCOPE | D12; D13 | I-13 (10-§13-7) | — | B | RT; FRV-B |
| 12-§4-4 | C12@6d48feff | §4 b4: stock/supplier/order instructions where the user's product/role permits | OBL | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 (orders) | IN SCOPE | D13; DV | I-13 (12-§4-4: SB-P-1.17 primary, SB-P-1.18 orders); I-17; U-08 | — | A | RT |
| 12-§7-7 | C12@6d48feff | §7 b7: order/reorder instruction | OBL | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 (orders) | IN SCOPE | D13; DV | I-13 (12-§7-7); I-17; U-08 | — | A | RT |
| 3-§9-3 | C3@d8c26c07 | §9 b2: customer or supplier | OBL | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | I-14, I-16 (3-§9-3; customer slice here, supplier slice SB-P-1.17); U-08 | — | A | RT |
| 3-§11-6 | C3@d8c26c07 | §11 <Customer Supplier Delive> p1: No general Ledger access. They may participate only in specific workflo… | OBL | BUILD NOW | CORE-LM | SB-P-1.16 / SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | I-14 (3-§11-6; customer-order and delivery-staff slice here); U-08 | — | A | NEG |
| 3-§15-7 | C3@d8c26c07 | §15 b7: Customer/Supplier identity | RULE | BUILD NOW | CORE-LM | SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | I-14, I-16 (3-§15-7; customer identity slice here); 16:FPDR-1; U-08 | 16:FPDR-1 | A | INSP |
| 3-§15-12 | C3@d8c26c07 | §15 b12: Smart Order & Delivery | RULE | BUILD NOW | CORE-LM | SB-P-1.18 | IN SCOPE | D14; D16; DTX | I-14, I-16 (3-§15-12) | — | A | INSP; IDEM |
| 3-§15-13 | C3@d8c26c07 | §15 b13: Staff / HR where authorized | RULE | BUILD NOW | CORE-LM | SB-P-1.18 | IN SCOPE | D12; D14 | I-14, I-16 (3-§15-13) | — | B | INSP |
| 5-§4-11 | C5@80ac648e | §4 b10: roster/attendance-related documents | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14 | I-14 (5-§4-11 = parser b10) | — | B | RT |
| 5-§4-12 | C5@80ac648e | §4 b11: customer/order lists | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14 | I-14 (5-§4-12 = parser b11) | — | A | RT |
| 5-§4-13 | C5@80ac648e | §4 b12: compliance/licence documents | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14 | I-14 (5-§4-13 = parser b12) | — | C | RT |
| 5-§6-10 | C5@80ac648e | §6 b5: linked transaction/order/inventory/compliance record | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14 | I-14 (5-§6-10: order slice of parser b5) | — | A | RT |
| 5-§6-12 | C5@80ac648e | §6 b5: linked transaction/order/inventory/compliance record | OBL | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14 | I-14 (5-§6-12: compliance slice of parser b5) | — | C | RT |
| 5-§7-5 | C5@80ac648e | §7 b4: employee roster photo/PDF → HR draft | SCN | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14 | I-14 (5-§7-5) | — | B | RT |
| 5-§7-6 | C5@80ac648e | §7 b5: customer/order sheet → order draft | SCN | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14 | I-14 (5-§7-6) | — | A | RT |
| 5-§7-7 | C5@80ac648e | §7 b6: licence document → Compliance Shield record/reminder preparation | SCN | BUILD NOW | CORE-FDN | SB-P-1.18 | IN SCOPE | D14; D15 | I-14 (5-§7-7) | — | C | RT |
| BP-§10.3-S2 | BP@9dfdd924 | §10.3 <Search sequencing clarif> p2: Structured Customer/Supplier-directory-indexed search matures only afte… | OBL | BUILD NOW | per contract | SB-P-1.17 / SB-P-1.18 | IN SCOPE | D12; D14 | I-14, I-16 (BP-§10.3-S2; customer-directory slice here); 16:FPDR-1; U-08 | 16:FPDR-1 | A | RT |

## E. Delegated touch points (36 rows)

Owned by another mission and consumed here as specification. Each row cites the owner's identifier; the check that it exists in the owner's FCTM is in `07-…` §4.4.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 21-§10-1 | C21@f4a05d5c | §10 b1 own attendance (permission mechanics) | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 6-§3-7, 17-§9-7 | — |  | — |
| 21-§10-2 | C21@f4a05d5c | §10 b2 own correction requests | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 6-§13-6, 10-§13-7 | — |  | — |
| 21-§10-3 | C21@f4a05d5c | §10 b3 own leave/request status | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 6-§7-* | — |  | — |
| 21-§10-4 | C21@f4a05d5c | §10 b4 assigned tasks/orders/deliveries | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 1-§13-* | — |  | — |
| 21-§10-5 | C21@f4a05d5c | §10 b5 other job-specific information | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12 | — |  | — |
| 21-§10-6 | C21@f4a05d5c | §10 p3 no exposure of unrelated staff/Owner intelligence | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 6-§4-6, 17-§9-7 | — |  | — |
| 21-§13-2 | C21@f4a05d5c | §13 b2 Customer sees own order/delivery communication | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12; DNTF | I-12; feature rows 1-§5-*; U-01 | — |  | — |
| 21-§13-3 | C21@f4a05d5c | §13 b3 Delivery Staff sees assigned delivery details | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 1-§5-*, 1-§25-3 | — |  | — |
| 21-§14-1 | C21@f4a05d5c | §14 purpose-limited support access | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 1-§25-8, 6-§12-8, 16-§10-4 | — |  | — |
| 21-§16-1 | C21@f4a05d5c | §16 entitlement AND role jointly required (add-on gate) | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12; DENT | I-12; U-07 | — |  | — |
| 21-§16-2 | C21@f4a05d5c | §16 no dynamic schema create/drop for entitlement | NEG | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; BP-§16-16 | — |  | — |
| 21-§17 | C21@f4a05d5c | §17 permission change and runtime revalidation | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature row 1-§24-6 | — |  | — |
| 21-§18-1 | C21@f4a05d5c | §18 confirmation binding — exact actor | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 1-§10-7, 6-§8-8 | — |  | — |
| 22-§5-4 | C22@61e1bb91 | §5 identity — Employee | CONS | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 | — |  | — |
| 22-§5-5 | C22@61e1bb91 | §5 identity — customer | CONS | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12; 16:FPDR-1 | — |  | — |
| 22-§5-7 | C22@61e1bb91 | §5 identity — delivery staff | CONS | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12 | — |  | — |
| 22-§12-1 | C22@61e1bb91 | §12 Notification Foundation (rows 22-§12-1…9) | CONS | BUILD NOW | CORE-ARCH | SB-P-1.15 | DELEGATED | D15 | I-12 (12:FPDR-1); I-15 | 12:FPDR-1 |  | — |
| 22-§13-1 | C22@61e1bb91 | §13 confirmation/clarification before consequential write | CONS | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D13 | I-12 | — |  | — |
| 22-§14-1 | C22@61e1bb91 | §14 audit — raw/original event plus human context | CONS | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 6-§5-1, 6-§7-* | — |  | — |
| 22-§15 | C22@61e1bb91 | §15 idempotency / duplicate protection | CONS | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 1-§24-7, 6-§13-9, 16-§16-4 | — |  | — |
| 22-§33-1 | C22@61e1bb91 | §33 personal identity deletion separate from employee/statutory records | CONS | BUILD NOW | CORE-ARCH | SB-P-1.12 | DELEGATED | D12; D19 | I-12; C22 §33.4 (U-03 evidence) | — |  | — |
| 7-§2-1 | C7@65ad91b2 | §2 b1 item/product identity (availability reader) | CONS | BUILD NOW | MGR/ADDON | SB-P-1.17 | DELEGATED | D17 | I-17; feature rows 1-§10-* | — |  | — |
| 7-§2-2 | C7@65ad91b2 | §2 b2 quantity/unit tracking (availability reader) | CONS | BUILD NOW | MGR/ADDON | SB-P-1.17 | DELEGATED | D17 | I-17; feature rows 1-§10-* | — |  | — |
| 25-§4-1 | C25@406ce089 | §4 durable object storage for documents/proof media | CONS | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; DR2 | I-14; feature rows 16-§9-*, 1-§15-3 | — |  | — |
| 25-§4-8 | C25@406ce089 | §4 retention state on stored objects | CONS | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14 | I-14; feature row 16-§17-5 | — |  | — |
| 18-§5 | C18@6b96b10a | §5 Entitlement Model — add-on capability access | CONS | BUILD NOW | CORE-PLAT | SB-P-1.19 | DELEGATED | DENT | A-BP108 (BP §9 row 8); U-07 | — |  | — |
| 18-§9 | C18@6b96b10a | §9 add-on removal preserves history | CONS | BUILD NOW | CORE-PLAT | SB-P-1.19 | DELEGATED | DENT | A-BP108 | — |  | — |
| 21-§4-3 | C21@f4a05d5c | §4 Employee role: stock/order tasks, own attendance, correction/leave, assigned delivery | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 6-§4-*, 1-§5-* | — |  | — |
| 21-§4-5 | C21@f4a05d5c | §4 Customer: purpose-limited order/delivery participant | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 1-§5-23…30 | — |  | — |
| 21-§4-6 | C21@f4a05d5c | §4 Delivery Staff: purpose-limited assigned-delivery user | CONS | BUILD NOW | CORE-FDN | SB-P-1.12 | DELEGATED | D12 | I-12; feature rows 1-§5-15…22 | — |  | — |
| 22-§4-3 | C22@61e1bb91 | §4 a feature owns its domain model inside one Business Memory (orders, HR, compliance) | CONS | BUILD NOW | CORE-ARCH | SB-P-1.14 | DELEGATED | D14 | I-14; feature rows 1-§22-*, 16-§4-* | — |  | — |
| 25-§6-1 | C25@406ce089 | §6 dependent features reuse storage (HR uploads, delivery proof, compliance documents) | CONS | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; DR2 | I-14 (illustrative list; this mission's object classes reuse it) | — |  | — |
| 25-§7-1 | C25@406ce089 | §7 eligible object classes incl. delivery proof and compliance evidence; producing feature owns its class | CONS | BUILD NOW | CORE-FDN | SB-P-1.14 | DELEGATED | D14; DR2 | I-14; feature rows 1-§15-4, 16-§9-* | — |  | — |
| 8-§4-2 | C8@97397780 | §4 support knowledge base topics incl. staff/HR and order/delivery where enabled | CONS | BUILD NOW | CORE-FDN | SB-P-1.19 | DELEGATED | D19 | I-13 (8-§4-2 ASSIGNED SB-P-1.19) | — |  | — |
| 23-§4-3 | C23@2430e1c6 | §4 Employee WhatsApp flows incl. attendance | CONS | BUILD NOW | CORE-CH | SB-P-1.20 | DELEGATED | D20 | A-BP109 | — |  | — |
| 23-§4-5 | C23@2430e1c6 | §4 Customer/Delivery Staff WhatsApp order, delivery, proof, status | CONS | BUILD NOW | CORE-CH | SB-P-1.20 | DELEGATED | D20 | A-BP109; U-01 | — |  | — |

## F. Reverse dependencies (41 rows)

Rows owned and `IN SCOPE` elsewhere that need this mission's facts. They stay with their owners; this mission must expose the producer rows named. The three C11 §9 rows carry no `D18` in `FCTM-15` and are reported, not edited (Δ-11).

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2-§11-9 | C2@53635557 | §11 b8 Ask CFO: orders/deliveries | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§11-*, 1-§22-* | — |  | — |
| 2-§11-10 | C2@53635557 | §11 b9 Ask CFO: attendance/HR where Owner authorized | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§5-*, 6-§7-* | — |  | — |
| 2-§12-8 | C2@53635557 | §12 b6 Ask CFO: other enabled Ledger add-ons | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§22-*, 6-§3-*, 16-§4-* | — |  | — |
| 4-§3-6 | C4@ce940d25 | §3 b5 Daily Intelligence: compliance/renewal deadlines | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§4-*, 16-§7-* | — |  | — |
| 4-§3-7 | C4@ce940d25 | §3 b6 staffing/attendance items | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§5-* | — |  | — |
| 4-§3-8 | C4@ce940d25 | §3 b7 order/delivery commitments | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§11-* | — |  | — |
| 4-§4-4 | C4@ce940d25 | §4 b3 stock or order issues | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§24-* | — |  | — |
| 4-§5-6 | C4@ce940d25 | §5 b5 unresolved orders/deliveries | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§11-*, 1-§24-* | — |  | — |
| 4-§6-8 | C4@ce940d25 | §6 b7 Staff/HR | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§* | — |  | — |
| 4-§6-9 | C4@ce940d25 | §6 b8 Smart Order & Delivery | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§* | — |  | — |
| 4-§6-10 | C4@ce940d25 | §6 b9 Compliance Shield | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§* | — |  | — |
| 4-§11-6 | C4@ce940d25 | §11 b6 open an order/delivery exception | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§24-* | — |  | — |
| 11-§5-3 | C11@e802745a | §5 b2 FSSAI renewal reminder example | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§7-* | — |  | — |
| 11-§8-2 | C11@e802745a | §8 b2 Reminder reuse: Compliance Shield | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§7-1, 16-§18-3 | — |  | — |
| 11-§8-6 | C11@e802745a | §8 b6 Reminder reuse: Staff/HR actions | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§3-9, 6-§11-6 | — |  | — |
| 11-§8-7 | C11@e802745a | §8 b7 Reminder reuse: Order & Delivery follow-up | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§23-9 | — |  | — |
| 11-§10-5 | C11@e802745a | §10 b4 Open renewal document | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§8-4 | — |  | — |
| 22-§11-2 | C22@61e1bb91 | §11 b2 Reminder foundation: compliance | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 16-§7-* | — |  | — |
| 22-§11-5 | C22@61e1bb91 | §11 b5 Reminder foundation: HR | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 6-§3-9 | — |  | — |
| 22-§11-6 | C22@61e1bb91 | §11 b6 Reminder foundation: delivery | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; D18 declared); producer rows 1-§23-9 | — |  | — |
| 14-§6-5 | C14@16914a83 | §6 b5 credit entry from order/delivery workflow | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-* | — |  | — |
| 14-§13-1 | C14@16914a83 | §13 b1 order credit status links to same customer identity | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§6-1, 3-§15-7 | — |  | — |
| 14-§13-2 | C14@16914a83 | §13 b2 one order event, no duplicate credit facts | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-6, 1-§26-14 | — |  | — |
| 14-§13-3 | C14@16914a83 | §13 b3 delivery completion distinct from payment/credit state | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-3 | — |  | — |
| 15-§5-6 | C15@632f3402 | §5 b6 COD/order-delivery evidence | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§15-6, 1-§13-6 | — |  | — |
| 15-§7-7 | C15@632f3402 | §7 b7 linked order/credit context | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§22-10 | — |  | — |
| 15-§15-1 | C15@632f3402 | §15 p1 COD collection and delivery completion distinct | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-3 | — |  | — |
| 15-§15-2 | C15@632f3402 | §15 b1 COD expected amount | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-2, 1-§5-4 | — |  | — |
| 15-§15-3 | C15@632f3402 | §15 b2 COD collected amount | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§13-6 | — |  | — |
| 15-§15-4 | C15@632f3402 | §15 b3 delivery proof | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§15-* | — |  | — |
| 15-§15-5 | C15@632f3402 | §15 b4 Ledger/payment record | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-7 | — |  | — |
| 15-§15-6 | C15@632f3402 | §15 b5 verification state | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-5 | — |  | — |
| 15-§15-7 | C15@632f3402 | §15 p3 link without duplicate financial truth | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§16-6 | — |  | — |
| 15-§23-7 | C15@632f3402 | §23 b7 Order & Delivery financial linkage | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§23-12 | — |  | — |
| 15-§25-7 | C15@632f3402 | §25 COD evidence does not duplicate Ledger revenue | CONS | BUILD NOW | per owner | SB-P-1.16 | DELEGATED | D18 (this mission's facts) | I-16 (IN SCOPE SB-P-1.16; D18 declared); producer rows 1-§26-11 | — |  | — |
| 24-§6-2 | C24@0c1dcbb2 | §6 intent classes incl. order/delivery, attendance/HR, compliance | CONS | BUILD NOW | per owner | SB-P-1.13 | DELEGATED | D18 (this mission's facts) | I-13 (IN SCOPE SB-P-1.13; D18 declared); producer rows 1-§21-*, 6-§9-*, 16-§15-* | — |  | — |
| 24-§9-2 | C24@0c1dcbb2 | §9 AI context sources incl. order, staff and compliance records | CONS | BUILD NOW | per owner | SB-P-1.13 | DELEGATED | D18 (this mission's facts) | I-13 (IN SCOPE SB-P-1.13; D18 declared); producer rows 1-§22-*, 6-§3-*, 16-§4-* | — |  | — |
| 24-§10-10 | C24@0c1dcbb2 | §10 customer conversation must not expose internal merchant data | CONS | BUILD NOW | per owner | SB-P-1.13 | DELEGATED | D18 (this mission's facts) | I-13 (IN SCOPE SB-P-1.13; D18 declared); producer rows 1-§5-30, 1-§25-* | — |  | — |
| 11-§9-3 | C11@e802745a | §9 b3 event trigger: employee action occurred | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; consumer found by screen; FCTM-15 row carries no D18 (Δ-11)); producer rows 6-§5-*, 6-§7-* | — |  | — |
| 11-§9-4 | C11@e802745a | §9 b4 event trigger: licence was renewed | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; consumer found by screen; FCTM-15 row carries no D18 (Δ-11)); producer rows 16-§8-* | — |  | — |
| 11-§9-6 | C11@e802745a | §9 b6 event trigger: delivery completed | CONS | BUILD NOW | per owner | SB-P-1.15 | DELEGATED | D18 (this mission's facts) | I-15 (IN SCOPE SB-P-1.15; consumer found by screen; FCTM-15 row carries no D18 (Δ-11)); producer rows 1-§15-* | — |  | — |

## G. Build Plan and Global Product Completion View (102 rows)

Build Plan §5.5, §10.3 (search slice, Part D), §10.7, §11, §13, §15 and §16; GPCV register rows 1, 6, 16 and the touched §8 and §9 units.

| Row ID | Source @ blob | Exact source pointer | Kind | Build commitment | Commercial | Owning mission | Disposition | Dependency / hold | Evidence / citation | Founder decision | WS | Verification target |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BP-§5.5-p1 | BP@9dfdd924 | §5.5 p1: Smart Order & Delivery and other Founder-approved pilot-entry requireme… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; U-09 | — | V | GATE |
| BP-§5.5-p2 | BP@9dfdd924 | §5.5 p2: The mission sequence must not accidentally onboard pilot merchants befo… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | U-09 | — | V | GATE |
| BP-§10.7-W | BP@9dfdd924 | §10.7 p1: This mission contains three separately verifiable workstreams under one… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; 12:FPDR-2 (WS-D) | 12:FPDR-2 | V | INSP |
| BP-§10.7-A1 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b1: capture order from natural text/voice, phone-call note, image/list, or… | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A2 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b2: material ambiguity produces clarification, not invented confirmation | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A3 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b3: stock/availability informs order | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A4 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b4: substitution/partial fulfilment requires confirmation | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A5 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b5: clear lifecycle from draft → confirm → prepare → assign → deliver → clo… | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A6 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b6: delivery staff receives only purpose-limited information/actions | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A7 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b7: proof/COD handling is auditable | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A8 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b8: no default continuous employee GPS surveillance | NEG | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§16-3 | — | A | NEG |
| BP-§10.7-A9 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b9: customer silence alone does not invalidate otherwise sufficiently prove… | NEG | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§16-9 | — | A | NEG |
| BP-§10.7-A10 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b10: COD/payment closure reuses shared Ledger/payment truth | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | A | RT |
| BP-§10.7-A11 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> b11: private merchant-customer network remains private; this is not a market… | NEG | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§16-8 | — | A | NEG |
| BP-§10.7-AS1 | BP@9dfdd924 | §10.7 <A Smart Order Delivery> p2: Runtime scenario: ambiguous customer order must remain draft until mate… | FRV | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107-FRV | — | A | FRV-A |
| BP-§10.7-B1 | BP@9dfdd924 | §10.7 <B Staff HR> b1: Owner manages staff and assigns bounded permissions | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | B | RT |
| BP-§10.7-B2 | BP@9dfdd924 | §10.7 <B Staff HR> b2: permitted Employee can view own attendance/self-service only | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | B | RT |
| BP-§10.7-B3 | BP@9dfdd924 | §10.7 <B Staff HR> b3: employee cannot see unrelated staff or Owner financial intelligence | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | B | RT |
| BP-§10.7-B4 | BP@9dfdd924 | §10.7 <B Staff HR> b4: attendance/geofence, if used, is purpose-limited rather than continuous… | NEG | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§16-2/3/4 | — | B+D | NEG |
| BP-§10.7-B5 | BP@9dfdd924 | §10.7 <B Staff HR> b5: corrections/leave/request workflow is auditable | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | B | RT |
| BP-§10.7-B6 | BP@9dfdd924 | §10.7 <B Staff HR> b6: staff actions in Transactions, Stock, Orders, Documents preserve actor… | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | B | RT |
| BP-§10.7-B7 | BP@9dfdd924 | §10.7 <B Staff HR> b7: no hidden employee scoring/punishment system | NEG | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§16-2/3/4 | — | B | NEG |
| BP-§10.7-B8 | BP@9dfdd924 | §10.7 <B Staff HR> b8: no automated wage punishment or misconduct verdict | NEG | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107; BP-§16-2/3/4 | — | B | NEG |
| BP-§10.7-BS1 | BP@9dfdd924 | §10.7 <B Staff HR> p2: Runtime scenario: Employee requests own attendance correction and can n… | FRV | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107-FRV | — | B | FRV-B |
| BP-§10.7-C1 | BP@9dfdd924 | §10.7 <C Compliance Shield> b1: compliance documents use shared UDI/document path | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | RT |
| BP-§10.7-C2 | BP@9dfdd924 | §10.7 <C Compliance Shield> b2: expiry/renewal/status awareness uses shared Reminder Engine | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | RT |
| BP-§10.7-C3 | BP@9dfdd924 | §10.7 <C Compliance Shield> b3: supporting document/provenance remains retrievable | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | RT |
| BP-§10.7-C4 | BP@9dfdd924 | §10.7 <C Compliance Shield> b4: Smart Business does not claim to be legal authority or guarantee legal… | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | RT |
| BP-§10.7-C5 | BP@9dfdd924 | §10.7 <C Compliance Shield> b5: compliance data remains business-scoped and permission-controlled | WORK | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | C | RT |
| BP-§10.7-CS1 | BP@9dfdd924 | §10.7 <C Compliance Shield> p2: Runtime scenario: approaching licence expiry produces a useful reminder… | FRV | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107-FRV | — | C | FRV-C |
| BP-§10.7-X | BP@9dfdd924 | §10.7 <Exit principle> p1: The add-ons solve real jobs using the same Smart Business I already und… | EXP | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 | — | V | EXP |
| BP-§11-p1 | BP@9dfdd924 | §11 p1: The nine missions are cumulative | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-b1 | BP@9dfdd924 | §11 b1: 1.12 Authority/Identity underpins all later role/permission behavior | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-b2 | BP@9dfdd924 | §11 b2: 1.13 Conversation/AI underpins Ask CFO, multilingual conversational wor… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-b3 | BP@9dfdd924 | §11 b3: 1.14 Business Memory/UDI underpins later financial integrity, Complianc… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-b4 | BP@9dfdd924 | §11 b4: 1.15 Reminder/Automation underpins Compliance reminders, supplier/reord… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-b5 | BP@9dfdd924 | §11 b5: 1.16 Financial Integrity underpins COD/payment closure and trustworthy… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-b6 | BP@9dfdd924 | §11 b6: 1.17 Stock/Supplier/Reorder underpins Order availability/substitution a… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-b7 | BP@9dfdd924 | §11 b7: 1.18 completes pilot-required controlled add-ons | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | A-BP107 (this mission completes pilot-required add-ons) | — | V | INSP |
| BP-§11-b8 | BP@9dfdd924 | §11 b8: 1.19 completes support/lifecycle/stewardship and Voice Plus | RULE | BUILD NOW | per contract | SB-P-1.18 | NOT APPLICABLE | — | concerns SB-P-1.19 only | — |  | — |
| BP-§11-b9 | BP@9dfdd924 | §11 b9: 1.20 may only adapt existing intelligence and actions into WhatsApp; it… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-p3 | BP@9dfdd924 | §11 p3: Cross-mission feature advancement must remain visible in the Global Pro… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-p4 | BP@9dfdd924 | §11 p4: A later mission may complete a contract partly advanced earlier, but it… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§11-p5 | BP@9dfdd924 | §11 p5: The approved sources for assigning a BUILD NOW requirement to a later m… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§11 dependency rule; consumed as Dependency codes | — | V | INSP |
| BP-§13-p1 | BP@9dfdd924 | §13 p1: Every future Product Mission from SB-P-1.12 through SB-P-1.20 must incl… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-T | BP@9dfdd924 | §13 t1: / UX anchor / human outcome / Applicable actor/role / Runtime status /… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 matrix template (table rows t1–t3) | — | V | INSP |
| BP-§13-b1 | BP@9dfdd924 | §13 b1: A merged PR is not sufficient proof | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b2 | BP@9dfdd924 | §13 b2: Green CI is not sufficient proof | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b3 | BP@9dfdd924 | §13 b3: A working backend is not sufficient proof if the intended user experien… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b4 | BP@9dfdd924 | §13 b4: A visually similar screen is not sufficient proof if the real permissio… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b5 | BP@9dfdd924 | §13 b5: Founder Runtime Verification must test the mission’s applicable UX anch… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b6 | BP@9dfdd924 | §13 b6: Independent verification must test protected/denied behavior where the… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b7 | BP@9dfdd924 | §13 b7: DEFERRED is allowed only when the dependency is explicitly approved and… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b8 | BP@9dfdd924 | §13 b8: A later mission cannot use that deferral to erase accountability for th… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b9 | BP@9dfdd924 | §13 b9: The matrix is seeded at Stage 4 from the Founder-approved experience an… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-b10 | BP@9dfdd924 | §13 b10: The matrix is the experience subset of the mission's Contract Reconcili… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§13 Experience Verification Matrix rule | — | V | INSP |
| BP-§13-p5 | BP@9dfdd924 | §13 p5: This rule is accepted as technically and governance-sound | RULE | BUILD NOW | per contract | SB-P-1.18 | NOT APPLICABLE | — | statement of acceptance, no obligation | — |  | — |
| BP-§15-1 | BP@9dfdd924 | §15 b1: current free-trial policy | UFD | BUILD NOW | per contract | SB-P-1.18 | NOT APPLICABLE | — | SB-P-1.19 (trial) | — |  | — |
| BP-§15-2 | BP@9dfdd924 | §15 b2: exact Voice Plus price | UFD | BUILD NOW | per contract | SB-P-1.18 | NOT APPLICABLE | — | SB-P-1.19 (Voice Plus) | — |  | — |
| BP-§15-3 | BP@9dfdd924 | §15 b3: exact Staff/HR price | UFD | BUILD NOW | per contract | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | U-07 — not critical path (GPCV-§8) | — |  | — |
| BP-§15-4 | BP@9dfdd924 | §15 b4: exact Smart Stock price | UFD | BUILD NOW | per contract | SB-P-1.18 | NOT APPLICABLE | — | SB-P-1.17 (Smart Stock) | — |  | — |
| BP-§15-5 | BP@9dfdd924 | §15 b5: exact Smart Order & Delivery price | UFD | BUILD NOW | per contract | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | U-07 — not critical path (GPCV-§8-4) | — |  | — |
| BP-§15-6 | BP@9dfdd924 | §15 b6: exact long-term retention/deletion duration after cancellation/non-paym… | UFD | BUILD NOW | per contract | SB-P-1.18 | NOT APPLICABLE | — | SB-P-1.19 lifecycle; distinct from U-03 location retention | — |  | — |
| BP-§15-7 | BP@9dfdd924 | §15 b7: employee KYC/national-ID necessity and legal/privacy basis | UFD | BUILD NOW | per contract | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | U-06 — not critical path (GPCV-§8-3) | — |  | — |
| BP-§15-8 | BP@9dfdd924 | §15 b8: broader wholesaler/marketplace expansion | UFD | BUILD NOW | per contract | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | not critical path (GPCV-§8-5) | — |  | — |
| BP-§15-9 | BP@9dfdd924 | §15 b9: third-party underwriting/lending ecosystem | UFD | BUILD NOW | per contract | SB-P-1.18 | NOT APPLICABLE | — | no lending in this mission | — |  | — |
| BP-§15-p2 | BP@9dfdd924 | §15 p2: These do not block unrelated Build Now work. An unresolved decision aff… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§15 rule | — | V | INSP |
| BP-§15-p3 | BP@9dfdd924 | §15 p3: Do not guess them in implementation | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§15 rule | — | V | INSP |
| BP-§16-1 | BP@9dfdd924 | §16 b1: Ask CFO as write-capable authority | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-2 | BP@9dfdd924 | §16 b2: AI accusation/judgment of employees or customers | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-3 | BP@9dfdd924 | §16 b3: continuous staff GPS surveillance by default | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-4 | BP@9dfdd924 | §16 b4: automated wage punishment | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-5 | BP@9dfdd924 | §16 b5: blind supplier procurement without valid Owner delegation | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-6 | BP@9dfdd924 | §16 b6: hard credit blocking by default | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-7 | BP@9dfdd924 | §16 b7: custom client-specific POS modification inside core | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-8 | BP@9dfdd924 | §16 b8: marketplace behavior inside Smart Order & Delivery | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-9 | BP@9dfdd924 | §16 b9: customer silence automatically invalidating otherwise sufficiently prov… | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-10 | BP@9dfdd924 | §16 b10: duplicate channel-specific Business Memory | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-11 | BP@9dfdd924 | §16 b11: duplicate channel-specific permission models | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-12 | BP@9dfdd924 | §16 b12: separate AI brains per feature/channel | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-13 | BP@9dfdd924 | §16 b13: model conversation history as permanent Business Memory | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-14 | BP@9dfdd924 | §16 b14: uncontrolled binary-media concentration in Supabase for convenience | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-15 | BP@9dfdd924 | §16 b15: provider URLs as permission authority/business identity | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-16 | BP@9dfdd924 | §16 b16: destructive subscription-driven schema creation/deletion | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-17 | BP@9dfdd924 | §16 b17: broad routine Super Admin access to merchant private data | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-18 | BP@9dfdd924 | §16 b18: revival of /survey or obsolete domains/routes | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-19 | BP@9dfdd924 | §16 b19: old Daily Intelligence timing that conflicts with the approved 7:00 AM… | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-20 | BP@9dfdd924 | §16 b20: independent Catalog product expansion | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | BP-§16 rejection, checked must-not-appear | — |  | — |
| BP-§16-p2 | BP@9dfdd924 | §16 p2: Each explicit rejection is an FCTM OUT OF BUILD SCOPE row that the miss… | RULE | BUILD NOW | per contract | SB-P-1.18 | IN SCOPE | — | BP-§16 rule | — | V | INSP |
| GPCV-R1 | GPCV@ee76d920 | §5 register row: Smart Order & Delivery Assistant | CONS | per contract | per contract | SB-P-1.18 | IN SCOPE | — | register row 1 (Contract 01): updated only from accepted Contract Reconciliation (GPCV §12) | — | A | GATE |
| GPCV-R6 | GPCV@ee76d920 | §5 register row: Staff / HR Assistant | CONS | per contract | per contract | SB-P-1.18 | IN SCOPE | — | register row 6 (Contract 06), same rule | — | B | GATE |
| GPCV-R16 | GPCV@ee76d920 | §5 register row: Compliance Shield | CONS | per contract | per contract | SB-P-1.18 | IN SCOPE | — | register row 16 (Contract 16), same rule | — | C | GATE |
| GPCV-§8-3 | GPCV@ee76d920 | §8 b3: unresolved employee KYC scope does not block ordinary staff profile/att… | RULE | per contract | per contract | SB-P-1.18 | IN SCOPE | — | KYC does not block ordinary staff profile/attendance (U-06) | — | B | INSP |
| GPCV-§8-4 | GPCV@ee76d920 | §8 b4: Smart Order & Delivery price does not block definition of its operation… | RULE | per contract | per contract | SB-P-1.18 | IN SCOPE | — | price does not block order workflow (U-07) | — | A | INSP |
| GPCV-§8-5 | GPCV@ee76d920 | §8 b5: marketplace/wholesaler expansion does not block the approved local Smar… | RULE | per contract | per contract | SB-P-1.18 | IN SCOPE | — | marketplace expansion does not block local add-on | — | A | INSP |
| GPCV-§9-2 | GPCV@ee76d920 | §9 b2: AI accusation/punishment — REJECT | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | AI accusation/punishment — REJECT | — |  | — |
| GPCV-§9-3 | GPCV@ee76d920 | §9 b3: continuous employee GPS surveillance — REJECT | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | continuous employee GPS surveillance — REJECT | — |  | — |
| GPCV-§9-4 | GPCV@ee76d920 | §9 b4: automatic wage docking/fines — REJECT | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | automatic wage docking/fines — REJECT | — |  | — |
| GPCV-§9-7 | GPCV@ee76d920 | §9 b7: dynamic CREATE/DROP core schema by subscription state — REJECT | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | dynamic CREATE/DROP by subscription — REJECT | — |  | — |
| GPCV-§9-8 | GPCV@ee76d920 | §9 b8: routine broad Super Admin access to merchant private business data — RE… | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | routine broad Super Admin access — REJECT | — |  | — |
| GPCV-§9-9 | GPCV@ee76d920 | §9 b9: public marketplace behavior for current Smart Order & Delivery — REJECT | REJ | REJECT | REJECT | SB-P-1.18 | OUT OF BUILD SCOPE | — | public marketplace in Smart Order & Delivery — REJECT | — |  | — |
| GPCV-§9-11 | GPCV@ee76d920 | §9 b11: future wholesaler/marketplace expansion — not current core; requires se… | UFD | per contract | per contract | SB-P-1.18 | UNRESOLVED FOUNDER DECISION | — | wholesaler/marketplace expansion — separate Founder decision; not critical path | — |  | — |

## H. Totals

| Part | `IN SCOPE` | `ASSIGNED TO LATER MISSION` | `DELEGATED` | `NOT APPLICABLE` | `OUT OF BUILD SCOPE` | `UNRESOLVED FOUNDER DECISION` | `ESCALATED` | Rows |
|---|---|---|---|---|---|---|---|---|
| A. Contract 01 | 244 | 13 | 0 | 15 | 9 | 2 | 0 | 283 |
| B. Contract 06 | 91 | 1 | 0 | 1 | 6 | 1 | 0 | 100 |
| B2. Source 11 L443 facet rows | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 5 |
| C. Contract 16 | 138 | 3 | 0 | 4 | 7 | 0 | 0 | 152 |
| D. Inherited units owned here | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 |
| E. Delegated touch points | 0 | 0 | 36 | 0 | 0 | 0 | 0 | 36 |
| F. Reverse dependencies | 0 | 0 | 41 | 0 | 0 | 0 | 0 | 41 |
| G. Build Plan and GPCV | 64 | 0 | 0 | 7 | 26 | 5 | 0 | 102 |
| **Total** | **592** | **17** | **77** | **27** | **48** | **8** | **0** | **769** |

`ESCALATED`: none (`22-§16-6` moved to `IN SCOPE` by `18:FPDR-1`). `UNRESOLVED FOUNDER DECISION` (none on the critical path): `1-§30-1`, `1-§30-2`, `6-§3-10`, `BP-§15-3`, `BP-§15-5`, `BP-§15-7`, `BP-§15-8`, `GPCV-§9-11`. Row volume and effort per contract are in `07-…` §2, which records the Stage 2 totals. Part B2's five rows represent one Source 11 obligation (L443): they are counted as five rows here and as one obligation in any obligation count.

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**
