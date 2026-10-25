# SB-P-1.18 — Stage 1 Intake: Source Scope, Dependency and Actor Assessment

**Status:** `DRAFT — NOT AUTHORIZED — SUBMITTED FOR MISSION CONTROL STAGE 1 INTAKE PACK REVIEW`
**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Prepared by:** Claude Code, **proposed** Definition / Intake Actor (not appointed; Source 18 §4.3 appointment is Mission Control's)
**Authority for this preparation:** `communication/live/instruction.md` (blob `168643dc2361`); `mission-control/01-stage1-documentary-entry-and-communication-activation.md` (blob `d9ab2c892a7f`); Founder-merged PR #1068
**Intake baseline:** `main@06855599cd83862cc5a4bcaf25d4aeb8a159a852` (PR #1068 merge commit; verified equal to `origin/main` and present in its ancestry at intake)
**Date:** 2026-10-25 (Asia/Kolkata)
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.
**Historical OLE backfill:** NOT VERIFIED COMPLETE — dual intake in force.

This record is preparation, not authority (Source 18 §3.3). It does not open the FCTM, appoint an actor, start Stage 2, or decide any product question. The companion `02-stage1-fctm-opening-and-source-coverage-proposal.md` carries the FCTM opening proposal.

## 1. Intake Pack proposal

Proposed Source 18 Stage 1 Intake Pack contents for Mission Control to issue in its own record:

| Intake Pack element (Source 18 Stage 1) | Proposed content | Where |
|---|---|---|
| Contracts advanced | Contract 01, 06, 16 (Build Plan §9 row `SB-P-1.18`) | §2 |
| Governing Build Plan section | Build Plan §10.7, with §§5.5, 9, 11, 13, 15, 16 | §2, §3 |
| Delegated contracts touched | 2, 3, 4, 5, 7, 9, 10, 11, 12, 15, 17, 18, 19, 21, 22, 23, 24, 25 (touch points only) | §3.2 |
| FCTM opened at baseline with blob SHAs | Proposed scaffold and source coverage | companion `02-…` |
| Definition Actor appointment record | Assessment and recommendation only | §5 |
| Draft workstream register | WS18-A to WS18-D, plus WS18-V | §2.4 |
| Scope flags | Production mutation, migration execution, delivery sync and publication: all `NOT AUTHORIZED` | §2.5 |
| Institutional Learning Intake Record opened | 17 promotions, unchanged since 2026-09-20; guide blob `3da3d6d3` | §4.4 |
| Canonical crossing plan | One Stage 1 PR | §9 |
| Verification-plan preview seed | Verifier preference and separation | §5.5 |
| Topology facts to verify freshly | Provider, delivery and runtime facts | §4.5 |

## 2. Authoritative mission scope and exclusions

### 2.1 Scope source

The scope is fixed by approved sources and is **not** inferred from the SB-P-1.17 handoff or from older staff/HR or order/delivery notes:

- **Build Plan §9** (blob `9dfdd924`): `SB-P-1.18 — Controlled Business Add-ons`; outcome "Smart Order & Delivery, Staff/HR, Compliance as separately gated workstreams"; contracts materially advanced **1, 6, 16**. The assignment is locked (§9 "Assignment lock").
- **Build Plan §10.7**: three separately verifiable workstreams under one mission identity. The required outcomes are A (11 bullets), B (8 bullets) and C (5 bullets), with one runtime scenario each and an exit principle.
- **Build Plan §18 item 8** and **§11** ("`1.18` completes pilot-required controlled add-ons").
- **Global Product Completion View** (blob `ee76d920`) rows 1, 6, 16: all `NOT IMPLEMENTED`; acceptance `NOT YET ACCEPTED AS MATURE FEATURE`; no Contract Reconciliation exists.
- **Inherited assignments into SB-P-1.18** from earlier canonical FCTMs and Founder decisions (§3.3). These include SB-P-1.12 `FPDR-2`, which places the **Shared Location Foundation** workstream inside SB-P-1.18.

Build Plan §10's summaries are "not exhaustive". The full requirement set is the FCTM built from the full text of Contracts 01, 06 and 16 and their touched delegates (Source 18 §3.2).

### 2.2 Mission purpose and outcomes

Exit principle (Build Plan §10.7): the add-ons solve real jobs on the same Smart Business, without becoming surveillance, a marketplace or three new software systems.

| Workstream | Contract | Build commitment / commercial (verbatim) | Founder runtime scenario (Build Plan §10.7) |
|---|---|---|---|
| A — Smart Order & Delivery | 01 (blob `b392c8cb`) | `ADD-ON + BUILD NOW — validate before first 10 pilot merchants`; Ledger + Manager add-on | Ambiguous customer order remains draft until material ambiguity is resolved |
| B — Staff / HR | 06 (blob `ebacd183`) | `ADD-ON + BUILD NOW`; Ledger + Manager add-on | Employee requests own attendance correction; cannot browse another employee or Owner financial intelligence |
| C — Compliance Shield | 16 (blob `420269d8`) | `ADD-ON + BUILD NOW`; Ledger + Manager add-on | Approaching licence expiry produces a reminder linked to the document, without legal-authority claims |
| D — Shared Location Foundation | 22 §16 (blob `61e1bb91`) | `BUILD NOW`, `CORE-ARCH` | None named. Contract 22 §29 scenario 9 is inherited as `22-§29-9` |

### 2.3 Classifications supported by authoritative sources

| Classification | Item | Source |
|---|---|---|
| `ADD-ON + BUILD NOW` | Contracts 01, 06, 16 | Contract headers; GPCV rows 1, 6, 16 |
| `BUILD NOW` (core foundation) | Shared Location Foundation; attendance/delivery location disclosures | Contract 22 §16; SB-P-1.12 `FPDR-2`, `FPDR-3` |
| `BUILD LATER` | None found for these contracts at intake | — |
| `SEPARATE PRODUCT` / separate Founder decision | Broader wholesaler / marketplace network | Contract 01 §4, §30; GPCV §9; Build Plan §15 item 8 |
| `REJECT` (must-not-appear rows) | Public marketplace behaviour; continuous employee GPS surveillance by default; automated wage punishment / fines; AI accusation or misconduct verdicts; customer silence automatically invalidating proven delivery; duplicate channel-specific memory or permission models; separate AI per feature; compliance-only OCR, storage or scheduler; legal certification claims | Build Plan §16; GPCV §9; Contract 01 §§4, 14, 15, 28; Contract 06 §15; Contract 16 §§15, 19, 21 |

`ADD-ON` is commercial availability and does not mean `BUILD LATER` (Source 18 §3.2 item 4).

### 2.4 Draft workstream register (Source 18 §8; not an implementation allocation)

| ID | Scope | Note |
|---|---|---|
| `SB-P-1.18/WS-A` | Smart Order & Delivery (Contract 01) | Build Plan §10.7 A |
| `SB-P-1.18/WS-B` | Staff / HR (Contract 06) | Build Plan §10.7 B |
| `SB-P-1.18/WS-C` | Compliance Shield (Contract 16) | Build Plan §10.7 C |
| `SB-P-1.18/WS-D` | Shared Location Foundation (Contract 22 §16) and the attendance and delivery disclosures | SB-P-1.12 `FPDR-2`, `FPDR-3`. Consumed by WS-A and WS-B, so it must not become two location systems |
| `SB-P-1.18/WS-V` | Acceptance and Founder verification design | Assurance only, following the SB-P-1.17 WS17-G precedent; builds nothing |

Build Plan §10.7 names three workstreams. `FPDR-2` adds a distinct location workstream inside the same mission. Workstreams are free and change no assignment (Build Plan §9), so this is **not** a conflict.

### 2.5 Exclusions and mission boundaries

| Boundary | What stays outside SB-P-1.18 | SB-P-1.18 touch point | Source |
|---|---|---|---|
| SB-P-1.12 | Authority kernel, roles, capability grants, participant identities, entitlement model (21-§16), support access (21-§14), employee self-service *mechanics* (21-§10) | Declares add-on capabilities on the kernel; builds the attendance, correction and order **features** | 1.12 FCTM rows 21-§10-1…6, 21-§13-1…3, 21-§16-1…2 |
| SB-P-1.13 | Conversation/AI kernel, Human Language Layer, Basic Voice, typed tools and confirmation | Consumer reuse and its verification | 1.13 FCTM rows 9-§12-7/9/12, 10-§13-5/7, 24-§18-4, 24-§21-6 |
| SB-P-1.14 | Business Memory, Ledger, UDI, Receipt Cabinet, governed storage | Order, roster, customer-list and licence UDI inputs; linked retrieval; Ledger integration without duplication | 1.14 FCTM rows 3-§…, 5-§… (§3.3) |
| SB-P-1.15 | Reminder Engine, Notification Foundation (`FPDR-1` owner), Daily Intelligence, Ask CFO | Supplies order, HR and compliance facts that 1.15 rows consume (`D18`); consumes reminders and notifications | 1.15 FCTM rows 2-§11-9/10, 4-§3-6…8, 11-§8-2/6/7, 22-§11-2/5 |
| SB-P-1.16 | Financial integrity, payment evidence, reconciliation, customer credit | COD expectation and discrepancy reuse shared payment truth; delivery must not duplicate Ledger income | Contract 01 §16; 1.16 FCTM rows 3-§15-12/13, 17-§10 |
| SB-P-1.17 | Stock, supplier, reorder, POS, Manager workspace core | Availability and substitution read stock truth. Manager views 17-§9 and 17-§10 are assigned to SB-P-1.18 | 1.17 FCTM rows 17-§4-15, 17-§9, 17-§10. Locked 1.17 artifacts are not modified |
| SB-P-1.19 | Subscription and entitlement lifecycle (Contract 18), add-on prices, Support completion, Super Admin, onboarding | Add-on availability gate (`DENT`); purpose-limited support access | Build Plan §9, §10.8; Contract 16 §10; Contract 06 §12 |
| SB-P-1.20 | WhatsApp adapter (Contract 23) and channel verification of applicable workflows | Contract 01 §18, 06 §10, 16 §11 WhatsApp paths are adapter consumers of 1.18 truth | Build Plan §8.4, §9, §10.9 |

Scope flags, each defaulting to and remaining `NOT AUTHORIZED`: production mutation; migration execution; delivery sync and publication; provider/account configuration; builder assignment and app code; runtime or production tests.

## 3. Source / obligation allocation inventory

### 3.1 Canonical sources at `main@06855599`

| Role | Path | Blob |
|---|---|---|
| Source 18 v1.2 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93` |
| Communication Protocol v1.1 | `communication/AI_Communication_and_Handover_Protocol.md` | `aacb1775a5ea` |
| Communication README | `communication/README.md` | `3a32b01139c4` |
| Phase 1 operating pattern | `mission-control/SB-P-Phase 1 operating pattern.md` | `39b1bc366d7a` |
| Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e` |
| Global Product Completion View | `…/00_Global_Product_Completion_View.md` | `ee76d9201460` |
| Source 11 Product Truth Map | `merge/active/11_Smart_Business_Product_Truth_Map.md` | `16897d6c875b` |
| Source 01 Manifesto | `merge/active/01_Smart_Business_Master_System_Manifesto.md` | `785bc627ae3e` |
| Source 09 Master Roadmap v3.0 | `merge/active/09_Master_Roadmap_Command.md` | `ccc847aa8f05` |
| Phase 1 institutional-memory guide | `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md` | `3da3d6d3f9b7` |
| AGENTS.md | `AGENTS.md` | `551fddb46f24` |
| Source Set register | `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md` | `4615c35cc03d` |
| Migration README | `docs/migration/README.md` | `810038e45703` |
| SB-P-1.17 resume register | `communication/missions/SB-P-1.17/mission-control/16-residual-work-exact-resume-register.md` | `df76da1625f9` |
| SB-P-1.17 partial OLE handoff | `communication/missions/SB-P-1.17/mission-control/18-partial-mission-learning-ole-handoff.md` | `513cca1b574b` |

Contract blobs are listed in the companion `02-…` §2.

### 3.2 Delegated contracts touched (touch points only, not imported scope)

| Contract | Touch point | Owning mission | Expected FCTM treatment |
|---|---|---|---|
| 21 Permissions | §§10, 13, 14, 16, 17, 18, 21 for add-on roles, delivery staff, self-service, revocation mid-workflow | SB-P-1.12 | `DELEGATED`; consumer rows `IN SCOPE` where SB-P-1.18 builds the feature |
| 22 Shared Foundations | §5 identities, §12 notification, §13 confirmation, §14 audit, §15 idempotency, **§16 location**, §29-9, §33 identity lifecycle | 1.12; §12 → 1.15 (`FPDR-1`); §16 → **1.18** (`FPDR-2/3`) | §16 rows `IN SCOPE` (inherited); others `DELEGATED` |
| 3 Ledger / Business Memory | §9-3, §11-6, §15-7, §15-12, §15-13 | 1.14 (inherited to 1.18) | `IN SCOPE` (inherited) |
| 5 UDI | §4-11/12/13, §6-10/12, §7-5/6/7 | 1.14 (inherited to 1.18) | `IN SCOPE` (inherited) |
| 25 Document storage | Compliance documents, roster files, delivery proof media | SB-P-1.14 | `DELEGATED` |
| 9 Human Language | §12-7/9/12 | 1.13 (inherited to 1.18) | `IN SCOPE` (inherited) |
| 10 Conversation | §13-5, §13-7 | 1.13 (inherited to 1.18) | `IN SCOPE` (inherited) |
| 12 Voice | §4-4, §7-7 (primary 1.17, secondary 1.18 for orders) | 1.17 / 1.18 | Split requires a Stage 2 ruling (U-08) |
| 24 AI Orchestration | §18-4, §21-6 | 1.13 (inherited to 1.18) | `IN SCOPE` (inherited) |
| 17 Manager workspace | §4-15, §9, §10 | 1.12, 1.16, 1.17 (inherited to 1.18) | `IN SCOPE` (inherited) |
| 11 Reminder, 2 Ask CFO, 4 Daily Intelligence | 1.15 `IN SCOPE` rows carry `D18` | SB-P-1.15 | `DELEGATED`; SB-P-1.18 supplies the facts |
| 15 Payment Verification | COD evidence and reconciliation | SB-P-1.16 | `DELEGATED` |
| 7 Stock | Availability and substitution | SB-P-1.17 | `DELEGATED` |
| 18 Subscription, 19 Super Admin, 8 Support | Add-on entitlement; purpose-limited support access | SB-P-1.19 | `DELEGATED` |
| 23 WhatsApp | Customer, staff and delivery WhatsApp paths | SB-P-1.20 | `ASSIGNED TO LATER MISSION` (Build Plan §9, §10.9) |

### 3.3 Inherited rows assigned to SB-P-1.18 by earlier canonical FCTMs

Source 18 §3.2 item 9 requires the SB-P-1.18 FCTM to rebuild from contract text **and** inherit these assignments:

| Source FCTM (blob) | Rows assigned to SB-P-1.18 | Basis cited in the source row |
|---|---|---|
| SB-P-1.12 `claude-code/03-stage2-populated-fctm.md` (`1650ff95`) | 22-§16-1, 22-§16-3…7, 22-§29-9, 17-§9, 17-§10 | `FPDR-2`, `FPDR-3` (`founder/03-stage3-founder-product-decision-record.md`, merged PR #628, cited 7× in the locked SB-P-1.12 Blueprint); Build Plan §9 |
| SB-P-1.13 `claude-code/02-stage2-populated-fctm.md` (`97ddc752`) | 24-§18-4, 24-§21-6, 9-§12-7, 9-§12-9, 9-§12-12, 10-§13-5, 10-§13-7; secondary on 12-§4-4, 12-§7-7 | A-BP107 |
| SB-P-1.14 `claude-code/02-stage2-populated-fctm.md` (`01e9856a`) | 3-§9-3*, 3-§11-6*, 3-§15-7*, 3-§15-12, 3-§15-13, 5-§4-11, 5-§4-12, 5-§4-13, 5-§6-10, 5-§6-12, 5-§7-5, 5-§7-6, 5-§7-7, BP-§10.3-S2* | A-BP107; A-BP103-S |
| SB-P-1.16 `claude-code/02-stage2-populated-fctm.md` (`94dd5220`) | Restates 3-§9-3*, 3-§15-7*, 3-§15-12, 3-§15-13, BP-§10.3-S2*; 17-§10 (COD consumer) | assignment per FCTM-14; `16:FPDR-1` |
| SB-P-1.17 `claude-code/01-stage2-populated-fctm.md` (`cb79088d`) | 17-§4-15, 17-§9, 17-§10 | A-BP107; I-12 |
| SB-P-1.15 `claude-code/03-stage2-populated-fctm.md` (`65eeaf8d`) | None assigned. Twenty `IN SCOPE` rows carry `D18` as a dependency on SB-P-1.18 data | Reverse dependency |

`*` = shared assignment (`SB-P-1.17 / SB-P-1.18` or `1.16 / 1.17 / 1.18`). The SB-P-1.18 portion must be stated at Stage 2 (U-08).

## 4. Upstream dependency and evidence-status register

### 4.1 Rule

Locked upstream Blueprints, EIS documents and packages are **specifications, not implemented services** (operating pattern §6; SB-P-1.17 OLE item 1). A documented interface is not an implemented interface.

### 4.2 Predecessor state (verified from canonical records at intake)

| Mission | Blueprint | EIS | Package | Implementation Authorization | Suspension records |
|---|---|---|---|---|---|
| SB-P-1.12 | `77d52096` locked | `8b0aaa79` | Stage 13 locked | `WITHHELD` | MC-70/71/72 |
| SB-P-1.13 | `bbf65429` locked | `58199842` | Stage 13 locked | `WITHHELD` | 37–40 |
| SB-P-1.14 | `256828d2` locked | `7dfad7b5` | Stage 13 locked | `WITHHELD` | 44–49 |
| SB-P-1.15 | `0ab2ad6f` | `75dcf385` | locked per 89- | `WITHHELD` (MC-88) | 89–93 |
| SB-P-1.16 | `305571a6` | `46fffd7b` | `1a2e872b`/`7ecb7ca4`/`456f5e3a` | `WITHHELD` (MC-269) | 13–16 |
| SB-P-1.17 | `f65ddd2a` locked | `5d681b0c` | `2728fa68`/`4cc20b08`/`e4f775e5` | `WITHHELD` | 14–18 |

All six are documentation and execution-readiness complete with implementation suspended. None is accepted, so no row can be `ALREADY DEMONSTRATED`.

### 4.3 Dependency register (codes reuse the SB-P-1.17 Blueprint §12.2 vocabulary where it fits)

| Code | Dependency | Documented interface | Verified implemented | SB-P-1.18 consumers |
|---|---|---|---|---|
| `D12` | Authority kernel: memberships, roles, Employee/Manager/Delivery Staff/Customer identities, capability grants, entitlements, isolation, audit | Locked 1.12 spec | **No.** Repository RLS is Owner-scoped; no role or membership tables exist | All workstreams |
| `D13` | Conversation/AI kernel, Human Language, typed tools, confirmation | Locked 1.13 spec | **No** | Natural-language orders, roster, licence and staff instructions |
| `D14` | Business Memory, Ledger, UDI, Receipt Cabinet, governed storage (R2 activation, Build Plan §5.4) | Locked 1.14 spec | **No** | Order, roster and licence intake; proof media; Ledger link |
| `D15` | Reminder Engine, Notification Foundation, Daily Intelligence, Ask CFO | Locked 1.15 spec | **No** | Compliance renewals; staff and order follow-ups |
| `D16` | Financial integrity, payment evidence, FIN-01 PROVISIONAL | Locked 1.16 spec | **No** | COD closure and discrepancy |
| `D17` | Stock, supplier, Manager workspace | Locked 1.17 spec | **No** | Availability, substitution, Manager views |
| `DTX` | One governed transactions-family write path (PQ-2) | Cut-over undecided | **No**; migration NOT AUTHORIZED | COD / Ledger linkage |
| `DSCH` | Scheduler and business timezone | Unverified | **No** | Renewal reminders, shifts, delivery timing |
| `DAI` | AI provider behind the 1.13 gateway | Unverified | **No**; activation NOT AUTHORIZED | Interpretation of orders, rosters, licences |
| `DV` | Basic Voice provider | Unverified | **No** | Voice orders (Contract 01 scenario 2) |
| `DNTF` | Approved out-of-app delivery channel | None before SB-P-1.20 (precedent `17:FPDR-3`, mission-scoped to supplier requests) | **No** | Customer welcome, unsubscribe, status and confirmation; delivery-staff messages (U-01) |
| `DENT` | Commercial add-on entitlement state | Specification only (21-§16; Contract 18 in 1.19) | **No** | All three add-ons are `ADD-ON` |
| `DPAY` | Payment-evidence source | No provider selected | **No** | COD / digital payment evidence |
| `DSEC` | Server-side secret home | Not established | **No** | Only if a provider (map, OTP) is introduced |
| `DLOC` *(new code, proposed)* | Device point-in-time location capture and QR attendance mechanism | None. WS-D owns the primitive | **No** | WS-A, WS-B |
| `DMAP` *(new, proposed)* | Map / address provider for "open address/map" (Contract 01 §13) | None | **No**; a new external provider triggers Build Plan §5.4 and mandatory specialist review | WS-A |
| `DLEG` *(new, proposed)* | Qualified legal and privacy validation for India employment, payroll, location and customer data | SB-P-1.17 U-11 / HOLD-20 precedent | **No** | WS-B, WS-D, WS-A |
| `DPOS` | POS bridge | Not consumed | — | Expected `NOT APPLICABLE` |

Inherited SB-P-1.17 `HOLD-01`…`HOLD-23` concern SB-P-1.17's own scope. They are **not** imported as SB-P-1.18 holds. They stay open in SB-P-1.17 (R17-09) and are referenced only where an SB-P-1.18 row consumes a 1.17 interface.

### 4.4 Repository evidence (fresh at intake, read-only)

- `supabase/migrations/` holds 24 files. Tables are limited to businesses, transactions, inventory, catalog, parser and import tables. There is **no** order, delivery, customer, employee, attendance, payroll, compliance, membership or role table.
- `src/routes/_authenticated/`: catalog, dashboard, inventory, transactions. There is **no** order, staff or compliance route.
- The last change to `supabase/migrations` and `src` was `6c71abe7` (2026-09-14). The Delta since the predecessor intakes is documentary only.
- OLE: 17 promotion records under `organizational-learning/promotions/` (SB-GOV-IV-1.0 ×5, SB-OPS-CI-ARCHITECTURE-1.0 ×4, SB-ORG-LEARNING-1.1 ×8). Last change was 2026-09-20, so nothing has been added since the SB-P-1.17 intake. Per-promotion dispositions are Stage 2 work.

### 4.5 Topology facts to verify freshly before any external action (not verified here)

GitHub, Lovable and Supabase administrative recovery (latest recorded evidence: SB-P-1.12 `72_four_provider_recovery_evidence_and_founder_deferred_options_2026-10-19.md`); the delivery repository and Lovable publication path (Build Plan §5.3); production and test Supabase grants (Build Plan §5.1, `anon` residual still open in repository); CI required checks. No live state was queried for this intake.

## 5. Definition Actor qualification and appointment recommendation (Source 18 §4.3)

### 5.1 Proposed actor

**Claude Code is proposed as the Definition Actor for Stages 2–4. This is a recommendation; Claude Code does not self-appoint.**

### 5.2 Fitness

- Repository-aware, FCTM-led Stage 2–4 practice across SB-P-1.12, 1.13, 1.14, 1.16 and 1.17 at obligation-level row granularity, including cross-contract inheritance.
- Direct knowledge of the inherited assignment chain (§3.3) and the dependency-code vocabulary.
- Can run read-only repository fact-finding at the same time.

### 5.3 Prior contributions (disclosed)

1. Definition Actor for SB-P-1.12 (MC-02). Authored the 1.12 FCTM rows that assign 22-§16 and 17-§9/§10 **to SB-P-1.18**, and transcribed `FPDR-1` to `FPDR-4`.
2. Definition Actor for SB-P-1.13, 1.14, 1.16 and 1.17, and proposed for 1.15. Authored most of the inbound rows in §3.3.
3. Builder Review, Engineering Review, EIS and Stage 12 package author on predecessor missions, including SB-P-1.17.
4. Claude Code is named in the Build Plan's provenance ("Claude Code independent engineering plan"; "CLAUDE CODE ENGINEERING + UX VERIFIED").
5. No authorship of Contracts 01, 06 or 16 is known from repository records. Mission Control should confirm this.

### 5.4 Independence and self-review risks

| Risk | Why | Proposed mitigation |
|---|---|---|
| R-A Correlated assumptions on inherited rows | The Stage 2 actor would accept assignments it wrote in earlier missions | Mission Control's Stage 5 source-text test (Gate 10) covers the inherited rows. Optionally, a non-author (Codex) cross-check of §3.3 against the source FCTMs |
| R-B Definition + Engineering Review + EIS in one actor | Default Claude Code ownership of Stages 6, 7 and 9 (§4.4) | Separation assessment at Stage 1 (this section). SB-P-1.18 is **material-risk** (permissions, employee privacy, location, COD financial integrity), so a parallel specialist who did not author Sections 1–19 reviews the Sections 20–21 feasibility and risk findings |
| R-C Location foundation designed by the same actor that drafted its assignment | `FPDR-2/3` rows were drafted by Claude Code | Security/privacy specialist review of the WS-D disclosure design |
| R-D Verification | Claude Code cannot verify what it defined or built | Stage 19 verifier must be another actor (Codex preferred, §4.9) |

A new session or model label does not create independence (§4.9).

### 5.5 Alternates, specialists and verification-plan preview seed

- **Named alternate Definition Actor: Codex.** Appointing Codex would consume the preferred independent Stage 19 verifier for this material-risk mission. The recommendation is to keep Codex in reserve for the Stage 5 cross-check and Stage 19.
- **Mandatory specialists (Source 18 §4.8):** security/permissions and RLS (authority, roles, isolation); Supabase (planned schema, idempotency, concurrency); financial integrity (COD, Ledger non-duplication).
- **Recommended specialists:** legal/privacy (`DLEG`; SB-P-1.17 SA-02 precedent); AI/integration (interpretation and confirmation of orders, rosters and licences).
- **Conditional mandatory specialist:** a new-provider review if `DMAP`, OTP or another external provider is proposed.
- **Verifier seed:** Codex preferred, with an eligible non-author alternate to be recorded later. Founder-reserved scenarios are the three in Build Plan §10.7. Delegable checks include role denials, cross-business isolation and delivery-staff data minimization.

## 6. FCTM opening / source coverage proposal

See companion `02-stage1-fctm-opening-and-source-coverage-proposal.md`. That file does not claim a populated Stage 2 FCTM.

## 7. T1–T8 screening results (Source 18 Stage 3 definitions)

**Stage 1 determination: no trigger is fired by this intake.** Stage 3 is downstream of the Stage 2 Truth Pack. The candidates below are recorded so that Stage 2 tests them against citations and does not rediscover them.

| Trigger | Result | Evidence |
|---|---|---|
| T1 Unresolved question no approved source answers | **CANDIDATES** U-01, U-03, U-05 | §8 |
| T2 Conflict among approved sources | **CANDIDATES** U-02, U-04 (wording tension between Source 09/11 and the reconciled contracts) | §8 |
| T3 New decision, or approved-unresolved decision the mission needs | **CANDIDATE** U-03 (location retention value) | Build Plan §15 items 3, 5, 7, 8 judged **off critical path** (GPCV §8 examples) |
| T4 `PRODUCT-AFFECTING` Delta | **NOT TRIGGERED at intake.** Code unchanged since 2026-09-14; documentary metadata drift only (U-10) | §4.4 |
| T5 Founder request | **NOT TRIGGERED.** Only the activation direction exists | PR #1068 |
| T6 Material derived constraint | **NONE RAISED.** Stage 2 lists derived constraints and Mission Control judges | — |
| T7 Proposed omission, deferral, pull-forward or reclassification | **NOT TRIGGERED.** This intake proposes none. The WhatsApp paths follow existing assignment sources (Build Plan §9, §10.9) | §2.5 |
| T8 Later-stage Product Truth conflict or infeasibility | **NOT APPLICABLE** at Stage 1. SB-P-1.17's "T8 WATCH" is mission-local and not imported | — |

## 8. Uncertainty and Founder-decision register

| ID | Item | Sources | Classification at intake | Who resolves |
|---|---|---|---|---|
| U-01 | Customer-facing out-of-app communication before SB-P-1.20 (welcome and unsubscribe, status, confirmations, delivery-staff messaging) when no out-of-app channel exists (`DNTF`). Contract 01 §10 permits merchant-recorded customer approval. Whether the remaining Contract 01 §§7 and 17 customer rows are native `IN SCOPE` or assigned to SB-P-1.20 needs a citation test | C01 §§7, 10, 17, 18; BP §10.9; `17:FPDR-3` (mission-scoped precedent) | Potential T1/T7 | Stage 2; Founder only if no assignment source exists |
| U-02 | Whether an opt-in live-tracking experience is `BUILD NOW`. Source 09 pilot scope lists "live tracking", and the Source 11 flow includes "Live tracking (with geofencing …)". Contract 01 §14 permits it only "if separately designed"; Contract 22 §16 limits approved uses to "point-in-time" plus "other explicitly approved" purposes. *Continuous default* tracking is clearly `REJECT` | S09; S11; C01 §§14, 28; C22 §16; BP §16 | Potential T2 | Stage 2 citation reconciliation; Founder if unresolved |
| U-03 | Location disclosures that `FPDR-3` requires SB-P-1.18 to supply for attendance and delivery: purpose, audience, capture timing, **retention duration**, access end. Contracts give purpose and access-end principles, and Contract 01 §14 says "follow current retention policy". `FPDR-3` authorizes no new retention period, and no approved value was found at intake | C22 §16; `FPDR-3`; C01 §14; C25 | Likely T1/T3 (and `DLEG`) | Stage 2 to search C25/C21/C22 §33; then Founder |
| U-04 | Attendance mechanism. Source 09 pilot entry requires "Staff/HR geofence attendance", and Source 11 says "QR attendance with geofencing". Contract 06 §5 says "may include approved QR/location-assisted"; Build Plan §10.7 B says "if used" | S09; S11; C06 §5; BP §10.7 | Potential T2 (mandatory vs optional) | Stage 2 |
| U-05 | "Overtime records" (Source 11 Staff/HR) is not explicit in Contract 06 (§§3, 8) or Contract 17. Hydration claim to be checked | S11; C06 | Potential T1/T2 | Stage 2 |
| U-06 | Employee KYC / national ID (Build Plan §15 item 7) | C06 §§3, 15; GPCV §8 | `UNRESOLVED FOUNDER DECISION`, **off critical path** | Founder later; not a blocker |
| U-07 | Staff/HR and Order & Delivery prices (Build Plan §15 items 3, 5); Compliance ₹99 baseline (Source 01 §14) | BP §15; GPCV §8; S01 | Off critical path; entitlement and price in SB-P-1.19 | — |
| U-08 | Shared and secondary assignments: 3-§9-3, 3-§15-7, BP-§10.3-S2 (1.17/1.18); 3-§11-6 (1.16/1.17/1.18); 12-§4-4, 12-§7-7 (1.17 primary, 1.18 secondary) | §3.3 | Administrative split, not T7 | Stage 2 states the SB-P-1.18 portion |
| U-09 | Pilot gate. Order & Delivery must be ready before the first 10 pilots (BP §5.5; S09), and pilot scope includes WhatsApp customer creation owned by 1.20 | BP §5.5; S09 | Release sequencing, not a product conflict | Mission Control / Source 12 |
| U-10 | Documentary metadata drift: SB-P-1.14, 1.15 and 1.16 README headers and the 1.15 and 1.16 Blueprint headers show pre-lock or pre-suspension status. The SB-P-1.12 FPDR file header still reads `DRAFT` although PR #628 merged and the locked Blueprint cites it | Repository inspection | Delta `NO PRODUCT EFFECT` | Mission Control housekeeping. SB-P-1.18 does not edit predecessor records |
| U-11 | Reverse dependency. Twenty SB-P-1.15 `IN SCOPE` rows require SB-P-1.18 domain facts (`D18`) | 1.15 FCTM | Interface obligation | Stage 2 maps 1.18 fact surfaces |

## 9. Git baseline, changed-file scope and next gate

- **Baseline:** `origin/main@06855599cd83862cc5a4bcaf25d4aeb8a159a852`. Prepared in a detached read worktree at that commit. The primary checkout's untracked SB-P-1.16 drafts were left untouched.
- **Changed-file scope (uncommitted; no Git authority granted):**
  - `communication/missions/SB-P-1.18/claude-code/01-stage1-intake-source-scope-and-actor-assessment.md` (new)
  - `communication/missions/SB-P-1.18/claude-code/02-stage1-fctm-opening-and-source-coverage-proposal.md` (new)
  - `communication/live/report.md` (placeholder replaced by the Stage 1 return pointer; the placeholder is preserved at blob `222649d3bf57` in PR #1068 history)
- **Not modified:** any SB-P-1.17 locked or suspension record; source contracts; Build Plan; GPCV; mission README; decision and handover logs; code; SQL; migrations.
- **Proposed canonical crossing (§3.3 item 3):** one Stage 1 PR holding Mission Control's Intake Pack and appointment record, the FCTM-opened and ILI-opened records, and these two drafts, merged by the Founder.
- **Next required gate:** **STOP.** Mission Control Stage 1 Intake Pack review and formal Definition Actor appointment disposition under §4.3. Stage 2 requires a separate explicit discovery authorization.
