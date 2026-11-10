# SB-P-1.18 — Engineering Implementation Specification

**PARTIAL DRAFT — MISSION CONTROL REVIEW REQUIRED — NOT CANONICAL**

**Stage 9 draft under formal Stage 10 independent review. Stage 10 ACCEPTANCE HELD — NOT GRANTED. Stage 11 LOCK NOT AUTHORIZED. Implementation Authorization WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**

This is a Source 18 Stage 9 working artifact under MC-734-D, amended in place under MC-809 (Section 22). It has undergone independent Stage 10 review but has not received Stage 10 acceptance or a Stage 11 EIS lock; it is not canonical, and Stage 9 draft completion is not claimed. It authorizes no code, SQL, migration, provider activation, test execution, deployment or production change. `PRODUCTION MUTATION: NOT AUTHORIZED`. `MIGRATION EXECUTION: NOT AUTHORIZED`. `DELIVERY SYNC AND PUBLICATION: NOT AUTHORIZED`.

No test named here has been run. Every positive and negative test is **FUTURE**. Nothing in this file is runtime, CI, provider or specialist PASS evidence.

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.18 — Controlled Business Add-ons |
| Document | Engineering Implementation Specification (EIS), partial draft |
| Lifecycle stage | Source 18 v1.3 Stage 9 — EIS Creation, in progress |
| Status | `PARTIAL DRAFT — MISSION CONTROL REVIEW REQUIRED — NOT CANONICAL` |
| Author | Claude Code (Stage 9 EIS author; also author of Stages 2–7 and the Stage 8 lock PR; not independent review) |
| Authorization | MC-734-D ([PR #1110 comment 6602278637](https://github.com/SmartBusinessv1/smart-business/pull/1110#issuecomment-6602278637)), single-use, one draft file; MC-733 authoring basis ([comment 6602204422](https://github.com/SmartBusinessv1/smart-business/pull/1110#issuecomment-6602204422)); amended under MC-809 ([PR #1111 comment 6706451975](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6706451975)), single-use, this file only |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.18.md`, blob `f9bfd0a2f6995f9956c76425fef3bff673cc7266` (Stage 8 `APPROVED — LOCKED`; Track A post-lock verification-seed correction, PR #1123, MC-817). Earlier blob `a7e0266e5e3bf2e2e2c6abce1ecd4f7b98b44d33` is the Stage 8 lock identity and is historical |
| Stage 8 record | `communication/missions/SB-P-1.18/mission-control/09-stage8-founder-approval-and-blueprint-lock-record.md` (`18:S8-FAR`) |
| Canonical FCTM | `communication/missions/SB-P-1.18/claude-code/03-stage2-populated-fctm.md`, blob `ed2ff0f99e6982a15b650b5aee09e01e9355e0fd`: 769 rows, 592 `IN SCOPE` (frozen fields unchanged; Track A verification-seed correction of row `S11-L443-1`, PR #1123). Earlier blob `2bbe6e227d714996bcead10385952c78283e20e8` is historical |
| Founder decisions | `18:FPDR-1` to `-7`, `18:FPDR-4-A` and the supplementary `18:FPDR-8` (F-01 to F-08, F-10; `18:FPDR-8` canonical through PR #1124 and status-reconciled through PR #1125); consumed through SB-P-1.12 EIS v0.5: SB-P-1.12 Founder Decision Record 10 (P-1 Option A, SR-09 Option X, F-OVL Option B, P-3 168 hours; blob `c93ca933`) and Founder Decision Record 11 (P-1 evidence timing; blob `c77f8a5f`) |
| Candidate requirements | 140 (`EIS18-*`). Planning identifiers, renumberable until lock |
| Baseline | Drafted at `main@1c4ecf3494b2ff866018ac957ff486c150f4cd69`; reconciled under MC-809 against `main@6a5b8b83f93bea55c18d6ee221229b80edd9599a`. The PR #1111 base stays pinned to the older `main` (Section 22) |
| Next gate | Mission Control inspection. Formal Stage 10 independent review has occurred under Section 19 gate (a) (MC-814-R; MC-817 exact-delta review), with four unresolved documentary matters carried; the first, the `S11-L443-1` system-proposed trigger, has canonical Founder direction (`18:FPDR-8`) and a positive EIS specification, needs independent security and documentary exact corrections until separately reviewed, and stays activation- and `DLEG`-held. `EQ18-05` source and consumer contract are resolved under MC-817 at the documentary level, not implemented. Stage 10 acceptance (HELD) and Stage 11 lock require their separate Section 19 gates (b) and (c). |

## 2. Purpose, Authority and How to Read

This draft turns the locked Blueprint into testable engineering requirements for the independently specifiable scope. It changes no Product Truth, FCTM row, disposition, commitment, commercial classification, mission assignment or Founder decision. Where the Blueprint and this draft differ, the Blueprint prevails. A requirement with no FCTM row, or one that adds product behaviour, raises T3.

Requirement text stays in the source contracts; this draft cites rows (Source 18 §3.2 item 7). Upstream EIS identifiers are **specifications, not running services** (operating pattern §6).

**Basis codes (as in `EIS17`).**

| Code | Meaning |
|---|---|
| PR | Approved product requirement (locked Blueprint, FCTM, Founder decision or Mission Control ruling) |
| AF | Existing repository fact [R] or locked upstream specification [S]; specified, not built |
| TR | Proposed technical representation for review |
| UQ | Unresolved technical question or hold |
| PD | Provider- or source-dependent; waits for separate authorization |
| FC | Founder-controlled boundary |

**Evidence classes (used in the hold registers).**

| Class | Meaning | Can it support acceptance? |
|---|---|---|
| [R] | Repository text at the baseline | Design fact only. Not runtime or deployment evidence |
| [S] | Locked upstream specification | Contract only. Nothing is implemented |
| [F] | Canonical Founder decision | Product Truth, within its stated limits |
| [MC] | Mission Control ruling or conditional determination | Governance disposition. Not legal, security or runtime clearance |
| [SP] | Specialist finding, proposal or `HELD` assessment | Input to review. Not an approved control and not PASS |
| [NC] | Noncanonical proposal | **No normative use** |
| [U] | Unknown or unverified | Never treated as PASS |
| [Q] | Qualified professional input, not yet obtained | Open |
| [FUT] | Runtime evidence not yet produced | Open |

**`TBD`** marks a value this draft will not invent. Each names who settles it.

## 3. Canonical Inputs Read

| Input | Identity |
|---|---|
| Source 18 v1.3 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f` |
| Operating pattern | `mission-control/SB-P-Phase 1 operating pattern.md`, blob `39b1bc366d7a2e31c80dc22c63aab007a3f5afd6` |
| Migration authority | `docs/migration/README.md`: default-deny; no active migration mission |
| Locked upstream EIS (all `AF` [S]) | SB-P-1.12 **v0.5** `7a5f49182463ec79ecf221d7dd13dfebbc517e3e` (`APPROVED — LOCKED`, effective at `main@6a5b8b83` and verified by MC-802; v0.4 `8b0aaa79` is historical); SB-P-1.13 `58199842319abc78cc50d2b65e18a2eb948b01c4`; SB-P-1.14 `7dfad7b53c370af9e7242b66d863f6eaffc3ebfe`; SB-P-1.15 `75dcf38593f79e17e101e0efa80bef20fe24b31f` (original lock; historical for the notification recipient), with its canonical `EQ18-05` post-lock amendment, current EIS blob `7b78c42d4d1aa43e7e717d47f5a9e67e208f2030` at `main@301dae01` (provenance-only label correction, PR #1122; normative text as reviewed at `ac41034da6c73468e66aa45a6765604fa7623a6c`, `main@8bd38d56`) (MC-817; Section 14.3); SB-P-1.16 `46fffd7b140940854c9b2b847517dde2f17584df`; SB-P-1.17 `5d681b0c169dd12edc54a110a9fc9d54b87e2982` |
| Source contracts (FCTM pins) | C1 `b392c8cb`; C3 `d8c26c07`; C5 `80ac648e`; C6 `ebacd183`; C9 `649c55f3`; C10 `5c145ed7`; C12 `6d48feff`; C16 `420269d8`; C17 `7943f74a`; C22 `61e1bb91`; C24 `0c1dcbb2`; Build Plan `9dfdd924`; GPCV `ee76d920`; Source 11 `16897d6c` |
| Stage 7 specialist findings [SP] | SA-05 #6545596757; SA-03 #6545608601; SA-04 #6545771183; migration #6545872629; SA-02 #6545771818; dispositioned `HELD` by MC-688 (#6547358706) |
| T6 determinations [MC] | DC-14: MC-699 (#6555696141). DC-13: MC-701 (#6555836784). Both conditional and documentary |
| SB-P-1.12 v0.5 provenance [F] [MC] | Founder Decision Record 10 `communication/missions/SB-P-1.12/founder/10-g1g2-participant-binding-founder-product-decision-record.md` (`c93ca933ea014447516505c9427e278e0c24ce26`); Founder Decision Record 11 `…/11-p1-verified-identity-evidence-timing-founder-clarification.md` (`c77f8a5f906d242248bfdb81f19cec025802ef9b`); Stage 10 Record 73 (`41a71bca`) and Stage 11 Record 74 (`34aea800`); MC-802 ([PR #1111 comment 6704673906](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6704673906)) |
| Upstream candidates **not relied on** [NC] | SB-P-1.14 post-lock candidate on `main` (blob `8fb3e8d3`, MC-739-C) and SB-P-1.17 candidate (blob `6f85e404`, MC-739-S, `EIS17-STK-10`). Each header keeps its locked predecessor authoritative: `7dfad7b5` and `5d681b0c`, cited above |
| SB-P-1.12 package | v1.1-D draft at PR #1120: not a source for this EIS and not evidence of package readiness (C-4, PK-0) |
| SB-P-1.18 Founder decisions [F] | `18:FPDR-5`, `communication/missions/SB-P-1.18/claude-code/12-stage3-founder-product-decision-record-18-fpdr-5.md` (`2714f896dc4669b2cd4d20e2de90a8c584b9b4b4`); supplementary `18:FPDR-8`, `…/claude-code/19-stage10-supplementary-founder-product-decision-record-18-fpdr-8.md` (`03fe9ac8548d983d30e447ac9bee8aaa4534fbd6`), canonical through PR #1124 (`4f6700c3`) and status-reconciled through PR #1125 at `main@cda6df55796aa1ba200b248f2bdd1a96178ecbd2` (MC-817, MC-818). `18:FPDR-8` supplements and does not supersede `18:FPDR-5` |
| Contracts for the overtime flow | C6 `ebacd1838ec709241c07d3ab911377b6284b90d2` §4–§10; C21 `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` §4–§8, §12, §17–§20 |
| Q-6 specialist finding [SP] | Security & Permissions Architecture ([PR #1111 comment 6746975626](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6746975626)), accepted as documentary design input ([comment 6748169515](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748169515)) |
| Rulings | MC-734 R1–R5 (Section 15); MC-809 (Section 22) |

## 4. Implementation Principles

1. **Consume, never duplicate.** One authority kernel, identity, memory, UDI, scheduler, notification foundation, stock authority and Ledger path. No interim role model.
2. **No Ledger write from the order domain** and no second stock record.
3. **Server-side authority.** Every read and write goes through `authz.authorize`; the UI is a usability layer (`EIS-UX-02`).
4. **Drafts look like drafts.** Interpretation is a proposal until a human confirms the exact state (`EIS13-CNF-01`).
5. **Original facts are preserved.** Attendance, overtime, compliance history and proof are appended and corrected, never overwritten.
6. **Fail closed and fail narrow** (`EIS-CNF-06`). A held dependency returns a stated outcome; it is never simulated.
7. **A documented dependency is not an implemented dependency.** A mapped row is not a passed row.
8. **Do not invent values.** No numeric retention, threshold, TTL, radius or rate appears without authority.

## 5. Repository Baseline (at `main@1c4ecf34`) [R]

From Blueprint §20.3 and the Stage 6 review, rechecked where stated. Repository text is not runtime evidence.

- **Authority is Owner-only:** `businesses.owner_id` is `UNIQUE`; RLS resolves through `owner_id = auth.uid()` or `resolve_owner_business(current_actor_uid())`. No membership, role, participant, grant or entitlement object exists.
- **No domain objects** exist for customers, orders, delivery, staff, attendance, compliance, location, reminders or notifications.
- **Stock:** `inventory_movement_type` holds `opening_stock`, `stock_increase`, `stock_decrease`, `adjustment_increase`, `adjustment_decrease` and `correction`. `create_inventory_movement` is `SECURITY INVOKER` and Owner-only in effect (through RLS; live privilege unverified), and does not validate `business_event_type` / `business_event_id` against the referenced domain.
- **Auth:** `src/routes/auth.tsx` uses `signInWithPassword`, `signUp` and `signInWithOAuth`. No application code implements intended-email matching or verified-email enforcement (MC-728-S).
- **Error capture paths** `src/lib/error-capture.ts` and `src/lib/lovable-error-reporting.ts` exist and are in scope for coordinate redaction.
- **Layout:** server logic lives under `src/server-functions`; routes under `src/routes`. Later feature-module paths follow the `EIS17-ARC-02` pattern and are `TBD` at implementation.

## 6. Target Architecture and Trust Boundaries

| Component | Module (proposed) | Workstream | Consumes [S] | Sequence (Blueprint §20.7.4) |
|---|---|---|---|---|
| C-HR, C-ATT, C-PAY, C-HRF | `features/staff` | B | `EIS-ID-02`, `EIS-KER-*`, `EIS14-UDI-*`, C-LOC | First (C-HR); C-ATT and C-PAY after |
| C-CMP, C-REN, C-CMF | `features/compliance` | C | `EIS14-UDI-*`, `EIS14-CAB-*`, `EIS15-REM-*`, `EIS15-NTF-*`, `EIS15-TZ-01` | First |
| C-CUS, C-OAU | `features/customers`, registry entries | A | `EIS-ID-03`, `EIS16-ID-*`, `EIS-KER-*` | Second |
| C-ORD, C-AVL, C-DLV | `features/orders` | A, P | `EIS13-TOOL-*`, `EIS13-CNF-*`, `EIS14-UDI-*`, `EIS17-RO-08`, `EIS17-STK-09`, `EIS17-TXN-04`; participant path `EIS-ID-07` to `-09`, `EIS-FRL-06` | Second; participant path after PC-07 readiness |
| C-PRF | `features/orders` | A | `EIS16-ORD-01`, `DTX` | Third |
| C-OFD | `features/orders` | A | `EIS15-NTF-*`, `EIS13-*` | Second and third |
| C-LOC | `features/location` | D | `EIS-KER-*`, `EIS15-SCH-*` | Last, behind its specialist gate |
| C-VIEW | `features/workspace-views` | E | `EIS17-ARC-02` shell, `EIS-KER-05` | After its feature services |
| C-ACC | Records and tests only | E | All | Throughout |

**Trust boundaries.**
- **Browser to server function:** `requireSupabaseAuth`; the principal comes from `authz.current_principal()`, never the request (`EIS-KER-02`). Active business is explicit (`EIS-ID-06`).
- **Server function to database:** commands are the only write boundary (`EIS-ISO-02`). Service-role paths follow `EIS-ISO-04`.
- **Model to tools:** model output is untrusted and validated (`EIS13-TOOL-02`). Document content is untrusted data (`EIS14-UDI-06`). A later OCR read never changes a confirmed date.
- **Device to location validator:** a coordinate crosses once, in a request body, and only a result returns.
- **Participant boundary:** a Delivery Staff participant enters only as an SB-P-1.12 participant principal on one named authority path (Section 7.1; `EIS18-EXT-07`), with authority from binding, registered capability and object assignment only.
- **Out of bounds in this draft:** any out-of-app channel (`DNTF`). The participant assignment notification is native only, through the consumed SB-P-1.15 participant-binding recipient (Section 14.3); nothing is sent outside the app.

## 7. Capability Catalogue

Registry entries under `EIS-KER-03`, with object scope as a kernel input (`EIS-KER-08`). **Proposed resolution of EQ18-03:** existing `target_type` and `target_id` plus the `EIS-KER-04` grant `scope constraint`; no kernel change. Names are `TR`. This catalogue realizes `EIS18-OAU-01`, `-OAU-02`, `-HR-02` and `-CAU-01`. Owner holds each by default, within entitlement (`EIS-KER-05`). Add-on capabilities are entitlement-gated (`DENT`). Manager defaults are `TBD` with the SB-P-1.12 role-default matrix; nothing below is implied for a Manager or Employee without a default or grant.

| Capability | Object scope | Manager | Employee | Never |
|---|---|---|---|---|
| `customer.read`, `customer.create`, `customer.import` | Business | Grant | Grant, for fulfilment fields only | Customer, Delivery Staff |
| `customer.update_status`, `customer.consent_record` | Customer | Grant | No | AI as authority |
| `order.draft.create`, `order.draft.update`, `order.clarify.resolve` | Order | Grant | Grant | Customer (native) |
| `order.read` | Order | Grant | Grant, for assigned or task scope | Customer (native) |
| `order.confirm`, `order.cancel` | Order | Grant | No | AI as authority |
| `order.change.propose`, `order.change.approve` | Order version | Grant | Propose by grant | AI as approver |
| `order.state.transition` | Order | Grant | Grant, for permitted states | — |
| `order.pack.line` | Order line | Grant | Grant | Delivery Staff by default |
| `order.return.confirm` | Packing event | Grant | Grant | Delivery Staff by default; confers no override |
| `order.stock.override_negative` | Packing event | **Explicit grant only** | **Never** | Employee, Delivery Staff, AI, Manager without the grant |
| `delivery.assign` | Order | Grant | Only where explicitly granted | — |
| `delivery.task.read`, `delivery.task.act` | **Assigned delivery only** | Grant | Grant | Unassigned orders |
| `delivery.proof.record` | Assigned delivery | Grant | Grant | — |
| `delivery.proof.review` | Delivery | Grant | No | — |
| `cod.expected.set`, `cod.discrepancy.resolve` | Order | Grant | No | — |
| `cod.collected.record` | Assigned delivery | Grant | Grant | — |
| `staff.record.manage`, `staff.shift.manage` | Staff record | Grant | No | — |
| `staff.record.read` | Staff record | Grant | **Own record only** | Other staff records |
| `attendance.event.record_own`, `attendance.read_own` | Own record | — | Own, if linked | — |
| `attendance.event.record_for_staff`, `attendance.read` | Staff record | Grant | No | — |
| `attendance.correction.request_own`, `leave.request_own` | Own record | — | Own, if linked | — |
| `attendance.correction.review`, `leave.review` | Staff record | Grant | No | AI |
| `overtime.record.create_own`, `overtime.read_own` | Own record | — | Own, if linked | — |
| `overtime.record.create`, `overtime.review`, `overtime.correct`, `overtime.read` | Staff record | Grant | No | AI as reviewer |
| `overtime.flag.read` | Staff record; neutral flag projection only | Grant | **No** | AI as authority; inference from `attendance.read` or `staff.record.read` |
| `overtime.system_proposal.initiate` | Staff record, with a current flag | Grant | **No** | AI, automation rule, background job; a holder of only `overtime.record.create` |
| `overtime.feature.opt_in` | Business | Owner role default only; Manager and Employee have no role default. An explicit grant may exist under the shared kernel but never satisfies this Owner-only opt-in command (rule below) | No | Support, participant, automation, `service_role`; any decision that relies on a grant |
| `payroll_support.read`, `payroll_support.draft` | Business | Grant | No | Employee; Owner-intelligence inference |
| `compliance.record.manage`, `compliance.record.read`, `compliance.date.confirm`, `compliance.renewal.record` | Record | Grant | No | Support without `EIS-SUP-01` |
| `compliance.task.read` | **Specific task** | Grant | Grant, for that task | Broad document browsing |
| `location.validate.attendance` | Own event | — | Own, if enabled | — |
| `location.validate.proof` | Assigned delivery | Grant | Grant, if adopted | — |
| `location.pin.set` | Order | Grant | Grant | — |
| `location.hold.manage` | Hold record | **`TBD`** with `DLEG` | No | Blanket or category hold |

**Rules.**
- `EIS-KER-07` Owner-intelligence capabilities are never inferred from any entry above.
- `EIS-KER-04` grants attach to a **membership** and are not extended. The membership catalogue above gives a participant nothing.
- A grant validator refuses `order.stock.override_negative` for an Employee role. **EQ18-13** (`order.return.confirm`) and **EQ18-14** (override composition) are proposals for SA-03 and the SB-P-1.12 owner at Stage 10.
- The mapping from these names to an `authz.authorize` `action` value is `UNKNOWN` upstream (`EIS18-CAP-01`).
- **Overtime flag read (`EIS18-OVT-02`; Q-6 finding §Q-6.1).** This draft selects a **distinct narrow capability**, `overtime.flag.read`, rather than an all-of composite of shift-read and attendance-read. It is separately delegable and auditable under `EIS-KER-04`; it returns only the minimal neutral projection, so it never implies raw shift or attendance read, payroll data or Owner intelligence; and it avoids composite predicates that must each pass for the same target. A flag's evidence references open only through the reader's own `staff.record.read` and `attendance.read` for that target.
- **Initiation is not creation (`EIS18-OVT-02`; §Q-6.2).** `overtime.system_proposal.initiate` is separate from `overtime.record.create`. `overtime.propose_system` also requires a current `overtime.flag.read` decision for the same target and fixes the origin to `system_proposed`.
- **Opt-in is an Owner-only command predicate (`EIS18-OVT-04`; `18:FPDR-8` F; D3).** This draft claims **no** registry attribute that makes a capability non-delegable; SB-P-1.12 v0.5 defines none. `overtime.set_feature_opt_in` is allowed only when **all** of these hold at commit, using only the locked kernel surface (`EIS-DEP-01`): (1) `authz.authorize` allows `overtime.feature.opt_in` for the exact requested business (`EIS-KER-01`); (2) the decision is a verified membership-path decision for a signed-in person (`EIS-KER-02`), never a support operator, participant or automation run; (3) it qualifies only when its authority basis is `membership_role` and its relied-on `grant_ids` are **empty** (§8.1 step 3; `EIS-AUD-03`); (4) the current active membership role relied on is Owner in the exact business: the Owner holds `overtime.feature.opt_in` through the existing `EIS-KER-03` Owner role default, Manager and Employee have no role default for it, and the membership role and the decision provenance must agree; exactly one active Owner membership exists (`EIS-ID-02`); (5) the business is `active` and the Staff/HR entitlement is current (§8.1 steps 1 and 4; `EIS-KER-05`); (6) a confirmation binding covers the exact business, the current opt-in version and state and the authority epochs (`EIS-CNF-01`), revalidated under `EIS-CNF-02`, which serializes membership role, transfer state and entitlements, so an ownership transfer or revocation racing the command settles in one order (`EIS-FRL-04`, `EIS-KER-09`). An allowed decision based on a delegated grant, a support grant, a participant path or an automation rule never authorizes opt-in or withdrawal, even if a grant of the capability exists; `service_role` possession never does either. Locked precedent: SB-P-1.15 `EIS15-AUTHZ-03` (`tz.confirm`, current Owner at commit). Whether the registry can also refuse to *issue* a grant of this capability is an SB-P-1.12 question and is **not relied on**. The action name stays `TR`.
- **Entitlement and opt-in.** Every overtime-flow capability above also requires the Staff/HR entitlement (`EIS-KER-05`) **and** a current opt-in.
- **Reviewer rule (`EIS18-OVT-03`; `18:FPDR-8` A).** An Owner may review a draft they initiated. A Manager may never review a draft they initiated; a Manager-initiated draft is reviewed by the Owner or by another holder of `overtime.review` scoped to that staff record. No Manager reviews another Manager's draft without that scoped grant.

### 7.1 Delivery Staff participant capabilities (SB-P-1.12 v0.5 PC-05)

SB-P-1.12 owns the participant capability source (Section 8.1 step 3(c)) and its kernel representation. SB-P-1.18 registers the versioned capabilities below for participant type `delivery_staff` (`EIS18-EXT-03`). Each allows only when **all** hold: a current governed binding; the registered capability; a current object assignment for that business, action and delivery; entitlement (PC-06); channel; and current epochs. A target-less helper never allows on this source. Names are `TR`.

| Capability | Object scope | Source rows | Never |
|---|---|---|---|
| `delivery.task.read` | The assigned delivery only | `1-§5-15` to `-21`, `BP-§10.7-A6` | Unassigned or foreign orders; customer lists; Owner intelligence; export |
| `delivery.task.act` (acknowledge, start, complete, report unable) | The assigned delivery only | `1-§13-2`, `-4`, `-7`, `-8`; `1-§15-2` | Any state change outside the assigned delivery |
| `delivery.proof.record` (named minimum only) | The assigned delivery only | `1-§13-5` | Photo, signature or OTP (R2); proof review |
| `cod.collected.record` | The assigned delivery only | `1-§13-6` | Setting the expected amount; resolving a discrepancy; any Ledger effect. Records a fact and confers no financial authority. For SA-03 confirmation at Stage 10 |

**Not registered for a participant:** `order.return.confirm`, `order.stock.override_negative`, `delivery.assign`, any `customer.*`, `order.*`, `staff.*`, `payroll_support.*`, `compliance.*` or support capability. A binding never gives Owner intelligence, unrelated customers or orders, export or support access (`EIS-ID-08`, `EIS-EXT-02`).

**Merchant participant management (consumed, SB-P-1.12 registry).** Issue and revoke are SB-P-1.12 capabilities: Owner by default and any other holder by explicit grant (`EIS-ID-07`, `EIS-ID-09`). SB-P-1.18 supplies only the merchant surfaces (`EIS18-EXT-05`).

**Authority path (F-OVL Option B).** A person holding a membership and a binding in one business names exactly one path per request; the server never infers it and never falls back (`EIS18-EXT-07`; SB-P-1.12 Section 8.1).

## 8. Logical Object Model

Every object has `business_id`, composite references `(business_id, id)`, `created_at` and provenance through `EIS-AUD-03` and `EIS14-CAB-03`. All are born hardened (Section 17.2), with RLS enabled and no direct client DML. Names and columns are `TR`, not Product Truth; physical types are set at the formal draft.

**Customer and order (M18-1, M18-2).**

| Object | Key fields | Rules | Realizes |
|---|---|---|---|
| Participant identity [S] | `(business_id, participant_id)` per `EIS-ID-03`, `EIS16-ID-01` | Consumed. No order-local customer | `EIS18-CUS-01` |
| `customer_messaging_state` | `participant_id`, `purpose`, `welcome_recorded_at`, `stop_state`, `stop_at`, `stop_source`, `version` | One row per customer and purpose. Function `customer_send_guard(...)` is the one check SB-P-1.20 must call. Records no send | `EIS18-CUS-04` |
| `customer_addresses` | `participant_id`, `address_class`, `address_text`, `status` | `address_class` in `statutory_postal`, `saved_reusable`. Holds text only, no coordinate | `EIS18-CUS-05` |
| `customer_duplicate_candidates` | `participant_a`, `participant_b`, `signal`, `state` | Review only. No auto-merge | `EIS18-CUS-03` |
| `orders` | `customer_participant_id` (nullable until resolved), `state`, `state_version`, `source_channel`, `created_by_principal`, `fulfilment_intent`, `requested_time`, `address_status`, `cod_state` | State moves only through `order.transition` | `EIS18-ORD-03`, `-DLV-01` |
| `order_lines` | `order_id`, `catalog_product_id` (nullable), `raw_text`, `quantity`, `unit`, `substitution_pref`, `line_state` | `EIS-ID-05` product identity. Raw text is kept | `EIS18-ORD-03` |
| `order_ambiguities` | `order_id`, `kind`, `state`, `question`, `resolved_by`, `resolved_at` | `order.confirm` refused while any material item is open | `EIS18-ORD-04` |
| `order_state_events` | `order_id`, `from_state`, `to_state`, `actor`, `reason`, `decision_id` | Append-only | `EIS18-DLV-01`, `-AUD-01` |
| `order_change_proposals` | `order_id`, `order_version`, `kind`, `payload`, `state`, `proposed_by` | `kind` in `quantity`, `removal`, `substitute`, `partial`, `later` (`later` only if adopted). Versioned | `EIS18-AVL-02` |
| `order_change_approvals` | `proposal_id`, `approver_kind`, `recorded_by`, `binding_id` | `approver_kind` in `customer_recorded`, `merchant_user`. Bound to exact order state (DC-02) | `EIS18-AVL-02` |
| `order_packing_events` | `order_line_id`, `quantity`, `idempotency_key`, `movement_id`, `override_grant_id`, `state` | Unique per line and packing intent. Decrease occurs once | `EIS18-STK-01`, `-STK-04` |
| `order_return_confirmations` | `packing_event_id`, `quantity`, `confirmed_by`, `movement_id`, `idempotency_key` | Sum per event never exceeds the committed packed quantity | `EIS18-STK-02` |

**Delivery, proof and COD (M18-3; participant slice designed; activation gated).**

| Object | Key fields | Rules | Realizes |
|---|---|---|---|
| `delivery_assignments` | `order_id`, `assignee_kind`, `assignee_membership_id`, `assignee_binding_id`, `state`, `idempotency_key`, `assigned_by` | `assignee_kind` in `employee_membership`, `participant_binding`; exactly one assignee reference matches the kind. This is the PC-05 object assignment: a change serializes under `EIS-CNF-02` and ends authority at the next evaluation (`EIS-ID-09`). The participant value activates only after PC-07 readiness | `EIS18-DLV-02`, `-EXT-04` |
| `delivery_events` | `assignment_id`, `event`, `actor`, `at`, `idempotency_key` | `acknowledged`, `started`, `delivered`, `unable_to_deliver`. Append-only | `EIS18-DLV-03`, `-OFD-05` |
| `delivery_proof_records` | `assignment_id`, `proof_type`, `result`, `recorded_by`, `recorded_at` | `proof_type` in `staff_completion`, `merchant_confirmation`, and if adopted `recipient_ack`, `location_result`, `cod_evidence`. **No `photo`, `signature` or `otp` value and no media reference** (R2) | `EIS18-PRF-01`, `-PRF-02`, `-PRF-03` |
| `order_proof_policy` | `business_id`, `required_types`, `version` | Per-business configuration. Minimum set is non-empty | `EIS18-PRF-01` |
| `cod_expectations` | `order_id`, `amount`, `reviewed_by`, `reviewed_at`, `version` | Explicit amount | `EIS18-COD-01` |
| `cod_collections` | `assignment_id`, `amount`, `collector`, `at`, `idempotency_key` | Separate fact from delivered | `EIS18-COD-01` |
| `cod_discrepancies` | `order_id`, `expected_id`, `collection_id`, `state`, `resolved_by` | Visible until a human resolves it | `EIS18-COD-01` |
| `order_ledger_links` | `order_id`, `collection_id`, `ledger_ref`, `state` | Created only by the `EIS16-ORD-01` adapter. **No activation before `DTX`** | `EIS18-COD-02` |

**Staff and HR (M18-4).** Proposed resolution of EQ18-02: `staff_records` is mission-owned and independent of `persons`.

| Object | Key fields | Rules | Realizes |
|---|---|---|---|
| `staff_records` | `display_name`, `work_role_label`, `status`, `linked_membership_id` (nullable) | Minimum necessary. **No KYC or national-ID field** | `EIS18-HR-01` |
| `staff_shifts` | `staff_record_id`, `version`, `local_start`, `local_end`, `tz_version`, `source_doc_ref`, `state`, `approval_state`, `approved_by`, `approved_at` | `EIS15-TZ-01`. A version is immutable once approved; a change creates a new version. `approval_state` is `approved` only through `staff.shift.save_and_approve` for a manual version or `roster.confirm_import` for an imported row. An unapproved or superseded version never supports an overtime flag (`18:FPDR-8` B, R-c) | `EIS18-HR-04`, `-OVT-02` |
| `staff_shift_attendance_refs` | `staff_record_id`, `staff_shift_id`, `shift_version`, `ref_token_hash`, `state`, `issued_at` | Server-owned explicit assignment reference (D2). Issued by the server only when a shift version becomes approved for that staff record, independently of any attendance event; shown to the employee only inside their own assigned-shift view (`EIS18-HR-03`). Opaque: the client presents the reference and can never name or override a shift id or version. A new approved version supersedes the earlier reference. `state` in `current`, `superseded` | `EIS18-OVT-02` |
| `attendance_events` | `staff_record_id`, `event_type`, `mechanism`, `actor`, `occurred_at`, `result`, `site_id`, `idempotency_key` | Append-only. Holds result, timestamp, site and audit fact; **no coordinate** (A2). `mechanism` in `qr`, `qr_geofence`, `manager_recorded` | `EIS18-ATT-01`, `-ATT-02` |
| `attendance_sites`, `attendance_qr_tokens` | Site policy; token `scope`, `expires_at`, `consumed_at` | Business opt-in. Radius, rotation and replay window `TBD` (EQ18-10) | `EIS18-ATT-02`, `-ATT-03` |
| `attendance_context_records` | `event_id`, `kind`, `reason`, `actor`, `state` | `kind` in `absence`, `leave`, `correction`, `shift_change`. Original event untouched | `EIS18-CTX-01` |
| `attendance_correction_requests` | `event_id`, `requested_by`, `reason`, `state`, `reviewed_by` | Own record only | `EIS18-CTX-01` |
| `leave_records` | `staff_record_id`, `span`, `state`, `decided_by` | Linked context | `EIS18-CTX-01` |
| `overtime_records` | `staff_record_id`, `origin`, `disputed`, `evidence_refs`, `state`, `created_by`; for `system_proposed` also `flag_id`, `evidence_version`, `initiated_by`, `initiation_binding_id` | `origin` in `manual_report`, `manager_entry`, `system_proposed`: three origins; disputed is a condition. **No hours-derived or pay field**. `evidence_refs` cite shift and attendance only as evidence. A `system_proposed` record has no effect until reviewed; its `state` is one of `pending_review`, `revalidation_required`, `reviewed`, `rejected` or `superseded`, and it is shown as frozen whenever Section 11 P0 fails. **Lifecycle-wide identity (D4):** unique `(business_id, staff_record_id, evidence_version)` for `origin = system_proposed`, with **no state predicate**, so exactly one logical `system_proposed` record ever exists per business, staff record and evidence version, whatever its state. Manual and manager records are never merged into it and are not covered by this key | `EIS18-OVT-01`, `-OVT-02`, `-OVT-04` |
| `overtime_review_events` | `record_id`, `decision`, `actor`, `at` | Human only | `EIS18-OVT-01` |
| `overtime_corrections` | `record_id`, `prior_version`, `reason`, `actor` | Keeps original and provenance | `EIS18-OVT-01` |
| `attendance_shift_associations` | `attendance_event_id`, `staff_shift_id`, `shift_version`, `source`, `ref_id`, `recorded_by`, `version`, `state` | One current association per attendance event; same business and same staff record. `source` in `recorded_at_capture` and `human_associated`. **`recorded_at_capture` (D2)** is written only when the capture presents exactly one `current` `staff_shift_attendance_refs` reference that the server resolves to an approved shift version of the **same** business and the **same** staff record already resolved by the capture command. Zero, several, stale, superseded or mismatched references create no association and no flag, and the capture result is unchanged, with no shift field, candidate count or match result disclosed. **`human_associated`** is written only by `attendance.associate_shift`. Never inferred from time overlap. A shift-version change, reference supersession or attendance correction supersedes the association, which supersedes dependent flags through the `evidence_version` lineage (`18:FPDR-8` C, R-d) | `EIS18-OVT-02` |
| `overtime_neutral_flags` | `staff_record_id`, `staff_shift_id`, `shift_version`, `association_id`, `evidence_version`, `state`, `derived_at`, `derived_from_event_id`, `outer_decision_id`, `superseded_at`, `supersede_reason` | Internal derived state, not a merchant action (Q-6 finding §Q-6.5, option 2). Written **only** by the protected internal derivation child (Section 11, D1). Provenance actor type `system` (`EIS-AUD-03`) with the outer command's decision id; the outer attendance actor stays the actor of the evidence event and is never recorded as the flag's actor. Unique `(business_id, staff_record_id, evidence_version)`. `state` in `active`, `superseded`; shown as frozen whenever Section 11 P0 fails. No duration, hours or pay field. Retention `TBD` with `DLEG` | `EIS18-OVT-02`, `-OVT-04` |
| `overtime_feature_optins` | `state`, `recorded_by`, `recorded_at`, `version` | One current row per business; written only by `overtime.set_feature_opt_in` under the Owner command predicate (Section 7, D3); history kept; `version` feeds the confirmation binding. `state` in `enabled`, `withdrawn` | `EIS18-OVT-04` |
| `payroll_support_drafts` | `period_ref`, `line_items`, `state`, `binding_id` | Human-entered figures only. **No calculated field** | `EIS18-PAY-01`, `-PAY-03` |

**Compliance (M18-5).**

| Object | Key fields | Rules | Realizes |
|---|---|---|---|
| `compliance_records` | `record_type`, `identifier`, `issuing_authority`, `responsible_membership_id`, `status`, `version`, `typed_fields` | Typed by document type; no brittle one-size schema | `EIS18-CMP-01` |
| `compliance_record_dates` | `record_id`, `date_kind`, `value`, `confirmation_state`, `confirmed_by`, `source_ref`, `confidence` | `date_kind` in `issue`, `effective`, `expiry`, `renewal_due`, `inspection`, `other` | `EIS18-CMP-03` |
| `compliance_record_versions` | `record_id`, `version`, `snapshot_ref`, `reason`, `actor` | Append-only. History never erased | `EIS18-RNW-01` |
| `compliance_document_links` | `record_id`, `document_id`, `version_id`, `link_kind` | Feature-owned composite reference to `documents` | `EIS18-CAB-01`, `-CAB-02` |
| `reminders` [S] | `related_type`, `related_id` per `EIS15-REM-01` | Created only from a confirmed date. Consumed | `EIS18-REM-01` |

**Location (M18-6).** No object stores an A2 or B2 raw coordinate.

| Object | Key fields | Rules | Realizes |
|---|---|---|---|
| `delivery_destination_pins` | `order_id`, `coordinate`, `erase_state`, `erased_at` | C3 only. Erased at delivery close, with a sweep through `EIS15-SCH-*`. **No numeric period** | `EIS18-LOC-04` |
| `location_holds` | `subject_ref`, `reason`, `owner`, `access_scope`, `end_condition` | Individual, justified, restricted. No blanket hold (`18:FPDR-1` §5). Authority `TBD` with `DLEG` | `EIS18-LOC-04` |
| `location.validate_attendance`, `location.validate_proof` | Input: coordinate, purpose context. Output: result | Functions, not stores. Reject missing purpose | `EIS18-LOC-01`, `-LOC-05` |

**Location rules.** `EIS18-LOC-02`: no object, command, job or reader exists for continuous, background or periodic capture, a movement trace or a live-location view. `EIS18-LOC-03`: at each capture the UI states why, who may see the result, when it is captured and when access ends, using the Blueprint §8.15 disclosure table. Final wording and notices stay with qualified review (MC-699 condition 5).

**Notification (consumed).** `notification_requests` [S] carries a typed `recipient_path` (`membership` or `participant_binding`) with exactly one recipient column (`EIS15-NTF-01` as amended). A membership recipient is a live membership. A `participant_binding` recipient is the delivery's current bound participant, for purpose `delivery.assignment` only. SB-P-1.18 adds no notification schema; see Section 14.3.

## 9. Command Catalogue

Each command is a kernel-checked feature command (`EIS13-CMD-01`, `EIS-ISO-02`). Each revalidates authority at commit (`EIS-CNF-02`), writes audit in the same transaction and returns a committed outcome. **Key** is the `EIS-CNF-04` operation key, unique with business, actor and payload fingerprint. **B** marks a confirmation binding (`EIS-CNF-01`). An unknown outcome is looked up by key and never re-executed (`EIS13-IDM-02`).

| Command | Capability | B | Key composition | Main outcomes | Realizes |
|---|---|---|---|---|---|
| `customer.create` | `customer.create` | Yes | Client intent key | `CUS_DUPLICATE_CANDIDATE` | `EIS18-CUS-02`, `-CUS-03` |
| `customer.record_consent` | `customer.consent_record` | Yes | Customer, purpose, event | Records state only; sends nothing | `EIS18-CUS-04` |
| `order.create_draft` | `order.draft.create` | No | Source ref or client intent | Draft with ambiguity list | `EIS18-ORD-01`, `-ORD-03` |
| `order.update_draft` | `order.draft.update` | No | Order, version | `ORD_VERSION_STALE` | `EIS18-ORD-03` |
| `order.resolve_ambiguity` | `order.clarify.resolve` | No | Ambiguity item | Closes the item; never guesses | `EIS18-ORD-04` |
| `order.confirm` | `order.confirm` | Yes | Order, version | `ORD_AMBIGUITY_OPEN`, `ORD_CHANGE_UNAPPROVED` | `EIS18-ORD-02`, `-ORD-04` |
| `order.transition` | `order.state.transition` | By state | Order, version, target | `ORD_STATE_CONFLICT` | `EIS18-DLV-01` |
| `order.cancel` | `order.cancel` | Yes | Order, version | Stock unchanged until a confirmed return | `EIS18-DLV-01`, `-STK-02` |
| `order.propose_change` | `order.change.propose` | No | Order, version, kind | `ORD_VERSION_STALE`, `MECHANISM_NOT_ADOPTED` | `EIS18-AVL-02` |
| `order.approve_change` | `order.change.approve` | Yes | Proposal | Records approver kind | `EIS18-AVL-02` |
| `order.pack_line` | `order.pack.line` | Yes | Line, packing intent | `STK_NEGATIVE_BLOCKED`, `STK_DEPENDENCY_HELD`; one decrease | `EIS18-STK-01`, `-STK-04` |
| `order.pack_line_override` | `order.stock.override_negative` | Yes | Line, packing intent | `STK_OVERRIDE_DENIED` | `EIS18-STK-03` |
| `order.confirm_return` | `order.return.confirm` | Yes | Packing event, return intent | `RET_EXCEEDS_PACKED` | `EIS18-STK-02` |
| `delivery.assign` | `delivery.assign` | Yes | Order, assignment intent | `ASG_NOT_ASSIGNABLE`, `ASG_CUSTOMER_MISMATCH`, `ASG_ASSIGNEE_NOT_PERMITTED`, `ASG_ADDRESS_UNRESOLVED`, `ASG_COD_UNREVIEWED`, `ASG_DUPLICATE`; kernel `participant_path_not_ready` for a participant before readiness | `EIS18-DLV-02`, `-EXT-04` |
| `delivery.acknowledge`, `delivery.start`, `delivery.report_unable` | `delivery.task.act` | No | Assignment, event | `DLV_NOT_ASSIGNED` | `EIS18-DLV-03` |
| `delivery.complete` | `delivery.task.act` | No | Assignment, event | `PROOF_INSUFFICIENT` | `EIS18-DLV-03`, `-PRF-01` |
| `delivery.record_proof` | `delivery.proof.record` | No | Assignment, proof type | `MECHANISM_NOT_ADOPTED` | `EIS18-PRF-01`, `-PRF-02` |
| `cod.set_expected` | `cod.expected.set` | Yes | Order, version | — | `EIS18-COD-01` |
| `cod.record_collected` | `cod.collected.record` | No | Delivery and collection event (EQ18-09 proposal; final with SB-P-1.16) | `COD_MISMATCH_OPEN` | `EIS18-COD-01`, `-COD-02` |
| `cod.resolve_discrepancy` | `cod.discrepancy.resolve` | Yes | Discrepancy | Human only | `EIS18-COD-01` |
| `staff.create_record`, `staff.update_record`, `staff.link_membership` | `staff.record.manage` | Yes | Record, intent | `HR_AMBIGUOUS_EMPLOYEE` | `EIS18-HR-01`, `-HR-02` |
| `attendance.check_in`, `attendance.check_out` | `attendance.event.record_own` | No | Staff, event window, mechanism | `ATT_DUPLICATE`, `ATT_MECHANISM_NOT_ENABLED`, `ATT_LOCATION_UNAVAILABLE`, `ATT_QR_EXPIRED` | `EIS18-ATT-01`, `-ATT-02` |
| `attendance.record_for_staff` | `attendance.event.record_for_staff` | Yes | Staff, event | Attributed to the recorder | `EIS18-ATT-02` |
| `attendance.request_correction` | `attendance.correction.request_own` | No | Event, request intent | Original kept; `HR_STAFF_UNLINKED` | `EIS18-CTX-01` |
| `attendance.review_correction` | `attendance.correction.review` | Yes | Request | Human only | `EIS18-CTX-01` |
| `leave.request`, `leave.decide` | `leave.request_own`, `leave.review` | Decide only | Span, intent | Linked context | `EIS18-CTX-01` |
| `roster.confirm_import` | `staff.shift.manage` | Yes | `EIS-CNF-05` row fingerprint | Per-row outcomes under revocation | `EIS18-ROS-01` |
| `staff.shift.save_and_approve` | `staff.shift.manage` | Yes | Shift, version | One explicit action saves and approves a manual shift version; a change creates a new version (`18:FPDR-8` B, R-c) | `EIS18-HR-04`, `-OVT-02` |
| `attendance.associate_shift` | `staff.shift.manage` and `attendance.read`, each a current decision for the same staff-record target | Yes | Event, shift version | Records a `human_associated` link to an approved shift version of the same business and staff record, superseding any earlier association; `OVT_ASSOCIATION_UNCERTAIN` when the target is not unique. Both existing capabilities are required; no new grant is introduced (D2) | `EIS18-OVT-02` |
| `overtime.set_feature_opt_in` | `overtime.feature.opt_in` under the Owner command predicate (Section 7, D3) | Yes | Business, opt-in version | `OVT_OWNER_REQUIRED` for any decision that is not the current Owner's membership role default; withdrawal freezes the flow | `EIS18-OVT-04` |
| `overtime.create_manual`, `overtime.create_for_staff` | `overtime.record.create_own`, `overtime.record.create` | No | Staff, intent | Includes disputed flag | `EIS18-OVT-01` |
| `overtime.propose_system` | `overtime.system_proposal.initiate`, plus a current `overtime.flag.read` decision for the same target | Yes | Business, staff record, flag, `evidence_version` | One non-effective `system_proposed` record per business, staff record and evidence version, ever (D4). A concurrent or repeated initiation, including after freeze and restoration or after review or rejection, returns `OVT_DUPLICATE_PROPOSAL` with the existing identity only if the caller may read it, otherwise without detail; it never creates a second record. Also `OVT_FLAG_REQUIRED`, `OVT_FLAG_STALE`, `OVT_FEATURE_NOT_ENABLED`. Replaces the retired `OVT_TRIGGER_HELD` | `EIS18-OVT-02`, `-OVT-04`, `-OVT-05` |
| `overtime.review`, `overtime.correct` | `overtime.review`, `overtime.correct` | Yes | Record, version | Human only; keeps original. For a `system_proposed` draft: `OVT_SELF_REVIEW_DENIED` for the initiating Manager; `OVT_FLAG_STALE` and `revalidation_required` when the evidence version changed; `OVT_FEATURE_NOT_ENABLED` while frozen | `EIS18-OVT-01`, `-OVT-03`, `-OVT-04` |
| `payroll_support.confirm_draft` | `payroll_support.draft` | Yes | Draft, version | `PAY_CALC_HELD` for any calculation request | `EIS18-PAY-01`, `-PAY-03` |
| `compliance.create_from_preview` | `compliance.record.manage` | Yes | Document version, record type | `CMP_DUPLICATE_DOCUMENT` | `EIS18-CMP-01`, `-CMP-02` |
| `compliance.confirm_date` | `compliance.date.confirm` | Yes | Record, date kind, version | `CMP_DATE_UNCONFIRMED` blocks a reminder | `EIS18-CMP-03`, `-REM-01` |
| `compliance.record_renewal` | `compliance.renewal.record` | Yes | Record, document version | New version; `REN_NOT_CONFIRMED` | `EIS18-RNW-01` |
| `location.set_destination_pin` | `location.pin.set` | No | Order, intent | `temporary_pin` under C3 | `EIS18-LOC-04` |
| `location.erase_for_order` | System, on delivery close | No | Order close event | Idempotent erasure | `EIS18-LOC-04` |
| SB-P-1.12 `EIS-ID-07` issue (consumed) | SB-P-1.12 invite capability | Kernel | `EIS-CNF-04` per SB-P-1.12 | Reference shown once (PC-02); lost response → revoke and reissue (PC-03) | `EIS18-EXT-05` |
| SB-P-1.12 `EIS-ID-09` revoke (consumed) | SB-P-1.12 revoke capability | Kernel | Per SB-P-1.12 | Binding and derived capabilities stop at the next evaluation | `EIS18-EXT-05` |
| SB-P-1.12 `EIS-ID-08` accept (consumed, participant surface) | Signed-in person | Invitation is its own binding | Per SB-P-1.12 | Kernel denial codes rendered under PC-12 | `EIS18-EXT-06` |

### 9.1 Governed readers (M18-8)

Kernel-scoped, batched and minimized. Each returns source and freshness, and no reader widens source ownership (`EIS18-RDR-01`).

| Reader | Capability | Returns | Never returns | Realizes |
|---|---|---|---|---|
| `order.availability_for_lines` | `order.read` | `known`, `unknown` or `unavailable` per line, from `EIS17-RO-08` | A promise beyond the reader; a second stock figure | `EIS18-AVL-01` |
| `delivery.tasks_for_participant` | `delivery.task.read` (participant path) | Each assigned delivery after a per-target decision; empty, count and cursor shapes reflect only own assignments (PC-05) | Unassigned, foreign or non-existent orders, indistinguishably (PC-12) | `EIS18-EXT-04` |
| `delivery.task_for_assignee` | `delivery.task.read` | The `1-§5-15` to `-21` fields for the caller's assigned delivery only; a text address for device hand-off | Owner-wide data; unrelated orders; a stored coordinate outside its purpose | `EIS18-DLV-03`, `-DLV-04`, `-OFD-07` |
| `order.board` | `order.read` | Orders by state, pending confirmation, preparation and assignment, exceptions, COD issues, history and proof | Owner intelligence | `EIS18-VW-02` |
| `staff.roster_view`, `attendance.review_view`, `leave.review_view` | `staff.record.read`, `attendance.read` | Roster, attendance results, leave and context within scope | Coordinates (A2); accusation or score | `EIS18-VW-01` |
| `attendance.own_view`, `overtime.own_view` | `attendance.read_own`, `overtime.read_own` | The caller's linked record only. Overtime: the caller's own reviewed records and their correction status, and only a neutral receipt acknowledgement for the caller's own pending manual report (`18:FPDR-8` E, R-a) | Another employee's record; any neutral flag, non-effective draft, unreviewed report detail or pending manager entry | `EIS18-HR-03`, `-OVT-01`, `-OVT-05` |
| `overtime.flags_view` | `overtime.flag.read` | Flags in scope with staff, approved shift version reference, association reference and state, and any active `system_proposed` draft for the same evidence version (`18:FPDR-8` G). During a freeze, frozen history only (R-b) | Hours, duration, pay, eligibility, coordinates, accusation or score; Owner intelligence | `EIS18-OVT-02`, `-OVT-04` |
| `payroll_support.view` | `payroll_support.read` | Human-entered payroll-support records and context. **View baseline** (`18:FPDR-7`) | Export file or format; calculated pay; overtime-derived export field | `EIS18-PAY-02` |
| `compliance.due_soon`, `compliance.record_view` | `compliance.record.read`, `compliance.task.read` | Stored facts, dates with confirmation state, linked document | A legal conclusion; broad documents to an Employee | `EIS18-CCO-01`, `-CAU-01` |

**Export.** No export command, reader or file is specified. If export is later adopted and authorized, it enters by separate requirement, with `RT (export, if adopted)` verifying it.

### 9.2 Typed tools (SB-P-1.13)

Registered under `EIS13-TOOL-01`. Input schemas hold only domain fields; output is validated (`EIS13-TOOL-02`); consequential tools produce a proposal and bind through `EIS13-CNF-01`. A tool never grants a capability. Language goes through `EIS13-LANG-01` (`EIS18-ORD-05`, `-CCH-01`).

| Tool | Class | Effect | Refusals enforced server-side | Realizes |
|---|---|---|---|---|
| `order_draft_propose` | Write, proposal | Interprets intent into a draft with an ambiguity list | Guessing a fact; finalizing | `EIS18-OFD-02`, `-OFD-03`, `-ORD-04` |
| `order_summarize`, `order_exceptions_list` | Read | State and exception summary within scope | Unrelated customer or Owner data | `EIS18-OFD-02`, `-OFD-03` |
| `order_substitution_suggest` | Read | Suggestion only; a change still needs approval | Marking a change approved | `EIS18-OFD-02` |
| `delivery_assign_propose` | Write, proposal | Natural-language assignment through `delivery.assign` checks | Expanding staff permission; external assignee | `EIS18-DLV-02`, `-OFD-03` |
| `staff_instruction_propose`, `roster_draft_propose`, `leave_draft_propose` | Write, proposal | Prepares a draft for human confirmation | Creating permission by inference; editing history | `EIS18-HAI-01`, `-HAI-02` |
| `attendance_pattern_summarize` | Read | Neutral review items (DC-12) | Accusation, misconduct verdict or surveillance | `EIS18-HAI-01`, `-HAI-02` |
| `overtime_system_proposal_request` | Write, proposal | Resolves a verified human's explicit request, on any approved channel, to `overtime.propose_system` bound to the exact flag and evidence version (C6 §10; Q-6 finding §Q-6.4) | Initiating without that explicit request; a generic yes; an inferred target; automated follow-up | `EIS18-OVT-05` |
| `compliance_upload_handoff` | Write | Hands a document to UDI (`EIS14-UDI-01`) | A second parser | `EIS18-CMP-02`, `-CCH-01` |
| `compliance_due_soon`, `compliance_document_retrieve` | Read | Stored facts and permitted documents | Certifying compliance; fabricating law or penalties | `EIS18-CCH-01`, `-CCO-01`, `-CLG-01` |

### 9.3 Reminder and notification emission (SB-P-1.15)

No feature scheduler or notification store (DC-08). A request records that something should be shown; it completes nothing (`EIS15-NTF-01`, `EIS15-REM-08`).

| Source event | Mechanism | Recipient | Customer or non-member leg | Realizes |
|---|---|---|---|---|
| Draft needs action; change request; delivery started or completed; COD or unable-to-deliver exception | `notification_requests` with a `EIS15-NTF-04` dedupe key | Eligible membership | Merchant-visible event. "Customer channel: not demonstrated" | `EIS18-OFD-01`, `-CUS-06` |
| Delivery assigned | Same, created inside the assignment command's transaction | **Employee assignee's membership**, or the **assigned participant's binding** (`recipient_path` `participant_binding`, purpose `delivery.assignment`) | Participant leg native only. An ineligible participant gets zero requests and the merchant sees `NTF_NO_VERIFIED_RECIPIENT`, a denial, not fulfilment (`EIS18-NTF-01`) | `EIS18-OFD-01`, `-NTF-01` |
| Shift or staff reminder | `EIS15-REM-07` | Linked membership | Unlinked staff record: no recipient, no send | `EIS18-HR-03` |
| Confirmed compliance date | `EIS15-REM-07`, typed `related_type` | Responsible membership | — | `EIS18-REM-01`, `-CNT-01` |

**Notice content (compliance).** Record, due date, next step and stated uncertainty. No alarm or unsupported penalty claim (`EIS15-NTF-10`).

## 10. Outcome and Denial Codes

Kernel denials keep the `EIS-UX-01` contract. Feature codes below are `TR` names. Every code carries a calm message, leaks no protected data and accuses no one.

| Code | Meaning | Rows it serves |
|---|---|---|
| `ORD_AMBIGUITY_OPEN` | A material ambiguity is open | `1-§9-19`, `1-§21-8` |
| `ORD_VERSION_STALE`, `ORD_STATE_CONFLICT` | State changed since review | `1-§11-3`, `1-§24-7` |
| `ORD_CHANGE_UNAPPROVED` | Material change lacks recorded approval | `1-§10-8` |
| `MECHANISM_NOT_ADOPTED` | Adoptable mechanism is not enabled | `1-§10-7`, `1-§15-3`, `1-§15-4`, `1-§15-5` |
| `ASG_*` | One named `1-§12-*` condition failed | `1-§12-1` to `-6` |
| Kernel `participant_path_not_ready`, `authority_path_required`, `invitation_unavailable` (consumed) | SB-P-1.12 v0.5 outcomes rendered under PC-12; precise reason in audit only. Code names are working names until the SB-P-1.12 package (PC-10). Replaces the retired `ASG_EXTERNAL_HELD` | `1-§12-3`, `1-§24-6`, `1-§25-3` |
| `DLV_NOT_ASSIGNED` | Target is not the caller's assigned delivery | `1-§25-3` |
| `PROOF_INSUFFICIENT` | No configured positive proof | `1-§15-1`, `1-§21-10` |
| `STK_NEGATIVE_BLOCKED`, `STK_OVERRIDE_DENIED` | Policy blocks, or override not held | `1-§10-9`, `1-§24-3` |
| `STK_DEPENDENCY_HELD`, `LEDGER_LINK_HELD` | Upstream path not available; no effect occurred | `1-§16-6`, `3-§15-12` |
| `RET_EXCEEDS_PACKED` | Return exceeds committed packed quantity | `1-§24-8` |
| `COD_MISMATCH_OPEN` | Discrepancy recorded and visible | `1-§24-12` |
| `ATT_DUPLICATE`, `ATT_QR_EXPIRED`, `ATT_MECHANISM_NOT_ENABLED`, `ATT_LOCATION_UNAVAILABLE` | Attendance outcome with a non-location path offered | `6-§13-1`, `6-§13-3` |
| `HR_AMBIGUOUS_EMPLOYEE`, `HR_STAFF_UNLINKED` | Clarify; self-service needs a linked membership | `6-§13-4`, `6-§3-7` |
| `PAY_CALC_HELD` | Held on qualified validation; no calculation | `6-§8-2` |
| `OVT_FLAG_REQUIRED`, `OVT_FLAG_STALE`, `OVT_ASSOCIATION_UNCERTAIN` | No current neutral flag, the evidence changed, or matching is uncertain: a clarification case, never proof of overtime. Replaces the retired `OVT_TRIGGER_HELD` | `S11-L443-1` |
| `OVT_DUPLICATE_PROPOSAL` | A `system_proposed` record already exists for the same business, staff record and evidence version, in any lifecycle state; no second record is created. The existing identity and its authorized minimal projection are shown only under a fresh, current governed read authorization; without it, a generic non-enumerating outcome discloses no existing-record detail and no existence beyond what the caller is already permitted to know | `S11-L443-1` |
| `OVT_FEATURE_NOT_ENABLED` | Staff/HR entitlement or Owner opt-in is missing: new actions and consequential pending-draft review are frozen | `S11-L443-1`, `S11-L443-3` |
| `OVT_SELF_REVIEW_DENIED` | A Manager cannot review a draft they initiated | `S11-L443-2` |
| `OVT_OWNER_REQUIRED` | Opt-in or withdrawal needs the current Owner's own membership authority; no grant or other path qualifies | `S11-L443-1` |
| `CMP_DATE_UNCONFIRMED`, `CMP_DUPLICATE_DOCUMENT`, `REN_NOT_CONFIRMED` | Compliance outcomes; no legal claim | `16-§6-6`, `16-§16-4`, `16-§8-11` |
| `NTF_NO_VERIFIED_RECIPIENT` | No eligible recipient (a membership, or a participant binding failing an `EIS15-NTF-03` creation check): zero requests, stated to the merchant. A denial or hold, never fulfilment; not a reduction (R4) | `1-§17-4` |

### 10.1 Named exception handling

Each exception is a named state or review item. A narrow failure leaves unrelated operations working (`EIS-CNF-06`). Anomalies are neutral review items, never verdicts (DC-12). Realizes `EIS18-OFD-05`, `-HEX-01` and `-CEX-01`.

| Row | Exception | Handling |
|---|---|---|
| `1-§24-1` | Unknown or duplicate customer | `customer_duplicate_candidates`; clarification |
| `1-§24-2` | Ambiguous item or quantity | `order_ambiguities`; `ORD_AMBIGUITY_OPEN` |
| `1-§24-3` | Out of stock or substitution | Availability state; change proposal |
| `1-§24-4` | Missing address or location | `ASG_ADDRESS_UNRESOLVED`; asked only when operationally required |
| `1-§24-5` | Unavailable delivery staff | Reassign; `ASG_ASSIGNEE_NOT_PERMITTED`. Participant: reassignment ends authority over the order (`EIS-ID-09`) |
| `1-§24-6` | Revoked permission mid-workflow | Kernel denial at next evaluation; pending action rejected only. Participant: binding revocation commits before or rejects the in-flight action (`EIS-ID-09`) |
| `1-§24-7` | Duplicate assignment or retry | Stored outcome; `ASG_DUPLICATE` |
| `1-§24-8` | Customer modification or cancellation | Merchant-recorded proposal; stock only on confirmed return |
| `1-§24-9` | Delivery delay | Review item. No fixed universal threshold |
| `1-§24-10` | Unable to deliver | `delivery.report_unable`; exception state; notification |
| `1-§24-11` | Proof failure | `PROOF_INSUFFICIENT`; review. Customer silence is not proof failure |
| `1-§24-12` | COD mismatch | `cod_discrepancies`; stays visible |
| `1-§24-13` | Channel delivery failure | Native record only; the channel leg belongs to SB-P-1.20 |
| `1-§24-14` | Payment or linking failure | `LEDGER_LINK_HELD` or link state; no duplicate income |
| `1-§24-15` | Narrow failure | One operation fails; other orders continue |
| `6-§13-1` | Duplicate check-in or out | `ATT_DUPLICATE`, stored outcome |
| `6-§13-2` | Missing shift | Review item; event kept |
| `6-§13-3` | Location unavailable | `ATT_LOCATION_UNAVAILABLE`; non-location method offered |
| `6-§13-4` | Ambiguous employee identity | `HR_AMBIGUOUS_EMPLOYEE`; clarification |
| `6-§13-5` | Roster conflict | Preview conflict; confirmation required |
| `6-§13-6` | Attendance correction request | `attendance.review_correction`; original kept |
| `6-§13-7` | Approved leave after an absence | `attendance_context_records` links both |
| `6-§13-8` | Unauthorized staff action | `EIS-UX-01` denial; no accusation |
| `6-§13-9` | Retry | `EIS-CNF-04` stored outcome |
| `6-§13-10` | Payroll-support inconsistency | Neutral review item; `PAY_CALC_HELD` for any calculation request |
| `6-§13-11` | Disputed event | Review and context flow; never silently erased |
| `16-§16-1` | Unreadable or partial document | UDI typed recoverable state (`EIS14-UDI-02`); manual entry offered |
| `16-§16-2` | Multiple dates | Clarify; no silent choice |
| `16-§16-3` | Expired document found late | Stated plainly; no penalty claim |
| `16-§16-4` | Duplicate upload | `CMP_DUPLICATE_DOCUMENT` by content fingerprint |
| `16-§16-5` | Renewal superseding an old record | `compliance.record_renewal`; history kept |
| `16-§16-6` | Reminder delivery failure | Due state stays visible, independent of delivery (`EIS15-REM-06`) |
| `16-§16-7` | Unsupported document type | Typed recoverable state; manual entry |
| `16-§16-8` | Permission denied | `EIS-UX-01` denial |
| `16-§16-9` | Known deadline, no document | Record with missing-document state |
| `16-§16-10` | Law outside current knowledge | Says it does not know; suggests verifying |
| `16-§16-11` | Uncertainty generally | Shown and narrowly contained |

## 11. State Machines and Sequences

**Order state (names `TR`; not Product Truth, `1-§11-4`).**

| From | To | Guard |
|---|---|---|
| `draft` | `confirmed` | No open material ambiguity; each material change approved; `order.confirm` binding |
| `confirmed` | `preparing` | `order.state.transition` |
| `preparing` | `ready` | Applicable lines packed, or a partial approved |
| `ready` | `assigned` | All `1-§12-*` checks |
| `assigned` | `out_for_delivery` | Assignee action, with address or resolution path |
| `out_for_delivery` | `delivered` | At least one configured positive proof. Customer silence is never a guard |
| `delivered` | `closed` | Destination pin erased; COD discrepancy visible if open (it does not block closing the delivery fact) |
| Any active | `exception` | Named review item; unrelated orders unaffected |
| Any before `delivered` | `cancelled` | Binding. After packing, stock returns only through `order.confirm_return` |

**Packing (one transaction).** (1) Consume key `EIS-CNF-04`. (2) Revalidate kernel and binding. (3) Lock the line, in a total order compatible with `EIS16-CNC-02`; final order `TBD` with SA-03. (4) Validate the event: exists, same business, not reversed (`EIS17-TXN-04`). (5) Write `order_packing_events` and call the governed movement path with `stock_decrease`. (6) Audit. A commit with an unknown outcome is looked up by key; retry never guesses.

**Attendance with geofence (only if enabled).** Staff action → server issues a validation context → client sends one coordinate in the body → `location.validate_attendance` returns a result → event commits with the result only → the coordinate is discarded and not logged. Denied GPS, weak signal, no device or accessibility need routes to the non-location method; none of them is a discipline signal.

**Overtime `system_proposed` flow (`EIS18-OVT-02` to `-05`; `18:FPDR-8`; names `TR`).**

| Step | Guard | Effect |
|---|---|---|
| P0 Enablement | Staff/HR entitlement (`EIS-KER-05`) **and** a current Owner opt-in, checked at every step | If either is missing: no derivation, initiation, draft or consequential review; existing flags and pending drafts are shown as frozen, an evaluated condition, so no background process writes a state; authorized history reads remain. Restoration requires current grants and a revalidated evidence version, and restores the same records (D4) |
| S1 Derivation | The protected internal derivation child (D1, below), called only from the committing transaction of `staff.shift.save_and_approve`, `roster.confirm_import`, `attendance.check_out`, `attendance.record_for_staff`, `attendance.associate_shift` or `attendance.review_correction` | For an approved shift version with exactly one current association to a reliable attendance fact that extends beyond the approved shift end (business-local time per `EIS15-TZ-01`, `-04`, `-07`): one `active` neutral flag per `evidence_version`. An earlier flag for the same shift whose evidence version changed becomes `superseded`. No minimum, duration or pay value |
| S2 Initiation | Verified human; `overtime.system_proposal.initiate`; current `overtime.flag.read` for the target; flag `active`; binding to actor, business, staff target, flag, `evidence_version`, authority epochs and channel (`EIS-CNF-01`); key per `EIS-CNF-04` | — |
| S3 Draft | Revalidated at commit (`EIS-CNF-02`); the lifecycle-wide key `(business_id, staff_record_id, evidence_version)` decides under concurrency | One non-effective `system_proposed` record in `pending_review`, or the existing one whatever its state (`OVT_DUPLICATE_PROPOSAL`) |
| S4 Review | `overtime.review` for the target; reviewer rule (`EIS18-OVT-03`); current flag and evidence version; binding | Reviewed or rejected. A changed evidence version sets `revalidation_required`; the reviewer may then reject or mark the record superseded, and a proposal for the new evidence version needs a fresh flag and a fresh human initiation. Nothing auto-approves |
| Evidence change after review | Authorized correction | The flag becomes `superseded` with history kept; the reviewed record changes only through `overtime.correct` |

**Reliable attendance fact.** Authorized and current; a successful result; no pending correction request or dispute on the event or the shift; exactly one current association, either `recorded_at_capture` from exactly one current server-owned shift reference for the same business and staff record (D2) or `human_associated`. A missing check-out, an open event, a pending correction, a dispute or several candidate events is a clarification case (`OVT_ASSOCIATION_UNCERTAIN`), never a flag.

**`evidence_version`.** A collision-resistant digest (SHA-256 or stronger, `TR`) over a canonical serialization of the business id, staff record id, approved shift id and version, association id and version, and the attendance event ids with their current authorized fact versions; the components are also stored. An authorized correction of any component yields a new `evidence_version` and supersedes the earlier flag; it never edits an existing record's identity (D4).

**Protected internal derivation child (D1).** S1 runs as a server-only internal child of an already-authorized evidence command, not a second merchant principal and not an `EIS-AUT-01` automation.

- **Invocation.** A `SECURITY DEFINER` function owned by a dedicated `NOLOGIN NOINHERIT` role (`EIS-ISO-10`), with `EXECUTE` revoked from `PUBLIC`, `anon`, `authenticated` and `service_role`. It is called only from the six evidence command functions named in S1; no server function, support path, background job, scheduler, AI tool or direct RPC can call it.
- **Binding.** Its only input is the outer command's transaction-local context: the outer decision id (`EIS-ISO-04`), and the attendance event, shift version and association rows that the outer command has already resolved and written in the same transaction. It re-reads business and staff record from those rows and requires them to equal the outer decision's bound business and target; any mismatch is an integrity failure. It accepts no caller-supplied business, staff, shift, reference or flag identifier.
- **Effect.** At most one flag insert and supersession of earlier flags for the same shift; it never calls S2, writes an overtime record or grants a read. It runs only when P0 holds; otherwise it does nothing.
- **Response and attribution.** The outer command's response is unchanged by derivation: no flag existence, shift field, candidate count or match result. The evidence event keeps its actor; the flag records actor type `system` and the outer decision id (`EIS-AUD-03`); no merchant actor is fabricated.
- **Failure policy (atomic child).** Derivation is deterministic. Every unmet condition (no approved version, no unique current reference or association, an open correction or dispute, P0 failing, no beyond-end difference) yields **no flag**, not an error, so it never denies an otherwise valid attendance event. An existing flag for the same `evidence_version` is a no-op. Only a shared integrity failure that also invalidates the outer capture (the business or staff binding mismatch above, or a database abort of the whole transaction) fails the command; a transaction abort leaves no partial attendance, association or flag, and the client's idempotent retry (`EIS-CNF-04`) recomputes from scratch. No reconciliation job exists, so no flag is ever created later outside an authorized evidence command.

## 12. Requirements

### A. Order & Delivery, native and employee path

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-PRN-01` | PR | Order & Delivery purpose and principles bind every requirement in this workstream; no public marketplace behaviour. | 24 |
| `EIS18-CUS-01` | PR/AF | Customer is the shared business-scoped participant (`EIS-ID-03`; `16:FPDR-1`; `EIS16-ID-*`). No order-local customer table. | 8 |
| `EIS18-CUS-02` | PR | Customer capture: workspace entry, typed-tool quick-add (`EIS13-TOOL-01`), and sheets through UDI (`EIS14-UDI-01`). No feature parser. | 5 |
| `EIS18-CUS-03` | PR/TR | Orderable-customer minimum check. Duplicates become review candidates and never auto-merge (`EIS16-ID-02`). | 4 |
| `EIS18-CUS-04` | PR/TR | Native consent state on the shared identity (purpose, welcome-once, STOP with time and source), plus one send-guard that SB-P-1.20 must call. No send here. MC-701 T6 conditions apply. | 6 |
| `EIS18-CUS-05` | TR | Address classes `statutory_postal`, `saved_reusable`, `temporary_pin` (`18:FPDR-1` C1–C3). A saved address holds text, not a coordinate. | 5 |
| `EIS18-CUS-06` | PR | Customer has no native principal in Phase 1. Customer decisions are merchant-recorded events (DC-02). Channel legs report "customer channel: not demonstrated" (`18:FPDR-3`). | 5 |
| `EIS18-OAU-01` | PR/AF | Owner and Manager order capabilities as registry entries with object scope (`EIS-KER-01/03/04/08`; Blueprint §20.5). Proposed resolution of EQ18-03, inside the existing `target_type`/`target_id` and grant `scope constraint`. | 7 |
| `EIS18-OAU-02` | PR | Employee order capabilities are object-scoped; no unrestricted customer, export or Ledger reach. | 7 |
| `EIS18-ORD-01` | PR | One order engine for every capture path. Merchant-forwarded WhatsApp text, image and voice is merchant-native capture, not the SB-P-1.20 customer channel. | 20 |
| `EIS18-ORD-02` | PR/AF | Input → interpretation → preview → confirmation. Interpretations are proposals bound to one draft version (`EIS13-CNF-01`, `EIS-CNF-01`). | 3 |
| `EIS18-ORD-03` | PR/TR | Draft object holds the `1-§9-2` to `-12` facts with source channel and actor. | 15 |
| `EIS18-ORD-04` | PR | Ambiguity list on the draft. Confirmation is refused while any material ambiguity is open. Never a guessed consequential fact. | 8 |
| `EIS18-ORD-05` | AF | Language through `EIS13-LANG-01`; no feature language stack. The customer-channel leg stays with SB-P-1.20. | 3 |
| `EIS18-AVL-01` | PR/AF | Availability is read only through `EIS17-RO-08` and shown as known, unknown or unavailable. No second stock record and no promise beyond the reader. | 4 |
| `EIS18-AVL-02` | PR/TR | Versioned change proposals, with approval by the customer (merchant-recorded) or an authorized merchant user, bound to exact draft state. Later fulfilment only if adopted (`18:FPDR-4`). | 10 |
| `EIS18-STK-01` | PR/TR | Stock decreases per packed line through one governed, idempotent, order-linked event (`18:FPDR-6` D2-P). No confirmation-time reservation. The order domain validates event existence, business and non-reversed state (SA-03 F2). | 10 |
| `EIS18-STK-02` | PR/TR | Compensating increase only after a separately granted physical-return confirmation, and only against a committed packed quantity. Never on cancellation alone. Delivery Staff do not hold it by default (EQ18-13). | 4 |
| `EIS18-STK-03` | PR/UQ | Negative-stock override: Owner or explicitly delegated Manager, with confirmation and audit. Proposed composition (EQ18-14): the capability gate precedes the `EIS17-STK-09` policy path and does not amend it. For SA-03 at Stage 10. | 2 |
| `EIS18-DLV-01` | PR/TR | Audited, capability-scoped order state machine with exception and cancel states. State names are not Product Truth. | 7 |
| `EIS18-DLV-02` | PR/TR | Server-side checks of all `1-§12-*` conditions, with one idempotency key per assignment intent. Natural-language assignment passes the same checks. The assignee is an employee membership, or a Delivery Staff participant under `EIS18-EXT-04` (`1-§12-3` external leg). Before readiness an external assignee is refused with the kernel outcome `participant_path_not_ready` (SB-P-1.12 PC-07). | 10 |
| `EIS18-DLV-03` | PR/TR | Assigned-delivery task projection and native actions, for an employee membership (`21-§4-3`) or a Delivery Staff participant (`EIS18-EXT-03`, `-EXT-04`). Deny by default for unassigned orders; low-friction flow. Each path is evidenced separately: employee evidence never discharges the participant path. | 19 |
| `EIS18-DLV-04` | TR/PD | U-13 default: hand the text address to the device maps application. No provider. Any provider needs Build Plan §5.4 and specialist review. | 2 |
| `EIS18-PRF-01` | PR/TR | Completion needs at least one configured positive proof. Named minimum: delivery staff completion action and merchant confirmation (`18:FPDR-4`). | 8 |
| `EIS18-PRF-02` | TR | Adoptable proof types are typed records, verified only if adopted: recipient acknowledgement, and point-in-time location under B2. | 2 |
| `EIS18-PRF-03` | UQ | **Conditional, not adopted (MC-734 R2).** Photo, signature and OTP proof stay `IN SCOPE` as adoptable and are **not normative here**. No media object, consent policy or legal clearance is specified. The `SA02-18-F03` privacy review comes before any normative inclusion; OTP also needs a channel (`DNTF`). | 1 |
| `EIS18-PRF-04` | PR | Customer silence never fails or rolls back a delivery. | 3 |
| `EIS18-COD-01` | PR/TR | Expected, collected (amount, collector, time) and discrepancy are separate facts. Mismatch stays visible until a human resolves it. | 6 |
| `EIS18-COD-02` | PR/AF | The order domain never writes Ledger income. The link goes only through `EIS16-ORD-01` on the single `DTX` path, with one key per delivery-and-collection event (EQ18-09, proposal). Replay creates one outcome (SA-03 F4). | 8 |
| `EIS18-OFD-01` | AF/TR | Order notifications are `EIS15-NTF-01` requests to **membership** recipients with a `EIS15-NTF-04` dedupe key and `EIS15-NTF-03` revalidation. The customer native leg is a merchant-visible event. The one exception is the assignment notification to an assigned Delivery Staff participant, which uses the `participant_binding` recipient path under `EIS18-NTF-01`. No channel states (`EIS15-NTF-02`). No order-only infrastructure. | 10 |
| `EIS18-OFD-02` | PR | AI assists through SB-P-1.13 typed tools only (`EIS13-TOOL-01`). | 7 |
| `EIS18-OFD-03` | PR | AI must-nots are enforced server-side by capability checks and state guards, not prompt wording. | 4 |
| `EIS18-OFD-04` | TR | Order data model carries the remaining `1-§22-*` entities, including confirmation and audit events, as business-scoped objects. | 2 |
| `EIS18-OFD-05` | PR/TR | Every `1-§24-*` exception is a named state or review item. A narrow failure leaves unrelated operations working. | 5 |
| `EIS18-OFD-06` | AF | Consumes the named shared foundations and builds no parallel version. | 6 |
| `EIS18-OFD-07` | PR | Business-scoped, task-required data only. Support follows `EIS-SUP-01`; no routine browsing. | 8 |
| `EIS18-STK-04` | TR/UQ | Packing uses the existing `stock_decrease` type and a return uses `stock_increase` [R], both linked by `business_event_type` and `business_event_id`. `create_inventory_movement` is `SECURITY INVOKER` and Owner-only today [R], so an Employee packer needs the kernel-checked SB-P-1.17 path (`EIS17-ARC-04`, `EIS17-TXN-04`). The cross-mission signature is `TBD`, for SA-03 at Stage 10. | 11 |

### B. Staff / HR

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-PRN-02` | PR | Staff purpose and principles bind this workstream. Unresolved KYC does not block ordinary staff work; no KYC or national-ID field. | 3 |
| `EIS18-HR-01` | TR | Business-scoped `staff_records`, independent of `persons`, with an optional link to an employee membership (proposed resolution of EQ18-02: mission-owned; B6-02). Identity deletion stays separate (`22-§33-1`). | 2 |
| `EIS18-HR-02` | PR/AF | Staff capabilities in the registry; Manager only by explicit delegation (`EIS-KER-04`). | 6 |
| `EIS18-HR-03` | PR | Self-service requires a linked membership: own attendance, assigned shift and correction requests only. An unlinked staff record gets no notification, because no recipient means no send. | 7 |
| `EIS18-HR-04` | TR | Shift and roster records. | 1 |
| `EIS18-ATT-01` | PR/TR | Attendance events are append-only, with mechanism, actor, time and result (`18:FPDR-1` A2 result facts only). | 2 |
| `EIS18-ATT-02` | PR/TR | **MC-699 conditions (i)–(vi) apply.** QR plus point-in-time geofence is a conditional named-minimum design capability, off by default per business, with no legal activation claim. A viable auditable non-location method is always offered (EQ18-08 proposal: QR without location, plus a manager-recorded attributed event; for T3 screen at Stage 10). | 1 |
| `EIS18-ATT-03` | PR/TR | Location only at a staff-initiated event. Radius and QR rotation, scope and replay window are EIS parameters, `TBD` until validated (EQ18-10, DC-04). No compelled personal-phone GPS and no wage or discipline effect. | 3 |
| `EIS18-ROS-01` | PR/AF | Roster through a UDI adapter: preview, clarify, confirm, validated update. No HR-only OCR truth. | 6 |
| `EIS18-CTX-01` | PR/TR | Leave, absence and correction are linked context records. The original event is never edited. | 11 |
| `EIS18-PAY-01` | PR | Payroll is assistance: human-controlled consequence, no autonomous fine, deduction, verdict or fabricated authority. | 8 |
| `EIS18-PAY-02` | PR | Payroll-support **view** is the baseline. Export is verified only if separately adopted and authorized; no format or file (`18:FPDR-7`). | 1 |
| `EIS18-PAY-03` | UQ | **Held (MC-734 R1).** Calculation, eligibility and legal rule are **not specified and never stubbed**: unresolved qualified legal and payroll validation (`18:FPDR-5` §5). Drafts carry only human-entered figures under a confirmation binding. | 2 |
| `EIS18-OVT-01` | PR/TR | Overtime record: origin, dispute flag, review with actor, correction chain, role-scoped view and provenance. No computed hours, threshold or pay effect. Creation from a manual report and a manager entry, review, correction, role scope and audit are specified here (`S11-L443-2` to `-5`; part of `-1`). The `system_proposed` origin is specified in `EIS18-OVT-02` to `-05` under `18:FPDR-8`. | 5 |
| `EIS18-OVT-02` | PR/TR | **System-proposed origin: neutral flag, human initiation, non-effective draft (`18:FPDR-8` B, C, D, H; R-1; R-c, R-d; Section 11).** A neutral flag arises only for an approved shift version (manual: explicit save-and-approve of every version; imported: a human-confirmed row) with exactly one explicit, current, same-business and same-staff association (at capture, only from exactly one current server-owned shift reference; otherwise human-associated) to reliable attendance that extends beyond the approved shift end, compared in business-local time under SB-P-1.15 `EIS15-TZ-01`, `-04` and `-07`. Uncertain, ambiguous, disputed, unpaired or pending-correction facts are clarification cases. Every `system_proposed` draft requires a prior `active` flag and an explicit verified-human initiation (`overtime.system_proposal.initiate` plus a current `overtime.flag.read` decision for the same target), bound and idempotent; no flag creates a draft, and no request without a flag does. The draft holds only neutral evidence references, origin, status and human attribution: **no calculated overtime hours or pay**, minimum, threshold, eligibility, score or sanction. The flag is internal derived state written only by the protected internal derivation child of an authorized evidence command (Section 11, D1), atomic with it and never denying a valid capture; no observer, job, automation or direct call exists, and nothing gains initiation authority. **SPECIFIED DOCUMENTARY / ACTIVATION-HELD:** processing basis, notice, retention and register questions stay `DLEG` (`EIS18-HLD-DLEG`); this is a neutral recording design, not legally ready and not a legal overtime engine. | 1 |
| `EIS18-OVT-03` | PR/TR | **Reviewer rule (`18:FPDR-8` A).** An Owner may review a draft they initiated. A Manager-initiated draft is reviewed by the Owner or another holder of `overtime.review` scoped to that staff record; the initiating Manager is refused (`OVT_SELF_REVIEW_DENIED`). Review is human only, confirmation-bound to the exact record, flag and evidence version, and revalidated against current authority (`EIS-CNF-01`, `-02`). | 1 |
| `EIS18-OVT-04` | PR/TR | **Enablement, duplicates and evidence change (`18:FPDR-8` F, G, I; R-b).** The flow needs the Staff/HR entitlement and a recorded per-business opt-in that only the current Owner can set or withdraw, through the Owner command predicate of Section 7 (D3; no registry non-delegability claimed). If either is missing, new flags, initiations, drafts and consequential pending-draft review freeze until both are restored and grants, evidence and versions are revalidated; authorized history reads remain, subject to `DLEG`. Exactly one logical `system_proposed` record ever per business, staff record and collision-resistant `evidence_version`, in every state; freeze, restoration, review, rejection, replay and concurrent initiation return that same identity and never create a second (D4); an existing active flag or draft is shown; manual and manager records stay distinct and are never merged or overwritten. An evidence change marks the flag `superseded` with history kept and sets affected pending drafts to `revalidation_required`; nothing auto-approves, and a reviewed record changes only through the human correction path. No stale or frozen action can execute. Retention, erasure and holds stay `DLEG`. | 3 |
| `EIS18-OVT-05` | PR/TR | **Visibility and channel parity (`18:FPDR-8` E; R-a; C6 §10; C21 §8).** The employee receives only a neutral receipt for their own pending manual report; the unreviewed report, pending manager entries, flags and drafts are reviewer-only. After review the employee sees their own reviewed record and its correction status, never another employee's data or Owner intelligence. A verified human may initiate through WhatsApp, Conversation Workspace or visual surfaces under the same kernel, only by an explicit action bound to the exact flag and evidence version; AI inference, a generic yes, automated follow-up or autonomous approval is refused. Legally required notice and access stay `DLEG` and prevail where they require more. | 2 |
| `EIS18-HAI-01` | PR | Staff AI assists through typed tools with neutral language. | 6 |
| `EIS18-HAI-02` | PR | Staff AI must-nots are enforced server-side. | 5 |
| `EIS18-HFD-01` | AF | Same role boundary on every channel. Consumes shared foundations, with no parallel version. | 13 |
| `EIS18-HPR-01` | PR | Minimum necessary data, isolation, role scope; support only through `EIS-SUP-01`. | 8 |
| `EIS18-HEX-01` | PR/TR | Every `6-§13-*` exception is a named state or review item, with idempotent check-in and check-out. A disputed event enters review. | 11 |

### C. Compliance Shield

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-PRN-03` | PR | Compliance purpose and principles bind this workstream: remind and organize, never impersonate legal authority. | 16 |
| `EIS18-CMP-01` | PR/TR | Compliance record: typed fields per document type, status history and confirmation state. | 14 |
| `EIS18-CMP-02` | PR/AF | Intake through UDI: upload, interpret, preview, clarify, confirm. OCR alone is never compliance truth. | 10 |
| `EIS18-CMP-03` | PR/TR | Typed dates, each with a confirmation state. Multiple plausible dates force clarification. | 7 |
| `EIS18-REM-01` | PR/AF | Reminders only from a confirmed date, through `EIS15-REM-07` with a typed relation. Cadence is configuration, not fixed truth; timezone `EIS15-TZ-01`. | 13 |
| `EIS18-RNW-01` | PR/TR | Renewal appends a new document and record version; history is never erased. A due occurrence never completes a renewal. | 7 |
| `EIS18-CAB-01` | AF | Documents in the shared Cabinet (`EIS14-CAB-01`) with typed links and provenance. | 4 |
| `EIS18-CCH-01` | PR/AF | Channels act on one compliance truth; no duplicate reminder or document. Languages through `EIS13-LANG-01`. | 10 |
| `EIS18-CCO-01` | AF | Ask CFO and Daily Intelligence read stored renewal facts through governed readers and draw no legal conclusion. | 4 |
| `EIS18-CNT-01` | PR/AF | Reminder notice content through `EIS15-NTF-*`: record, due date, next step, stated uncertainty, no alarmist penalty claim. | 6 |
| `EIS18-CAU-01` | PR/AF | Owner authority, delegated visibility and specific-task scope; support only through `EIS-SUP-01`. | 4 |
| `EIS18-CLG-01` | PR | Assist only; no certification, fabricated law or filing. A later OCR read never changes a confirmed date. | 12 |
| `EIS18-CEX-01` | PR/TR | Every `16-§16-*` exception is a named state, with uncertainty narrowly contained. | 11 |
| `EIS18-CPR-01` | PR | Isolation, permission-scoped retrieval and purpose limits. Retention follows current policy; no new period. | 8 |
| `EIS18-CFD-01` | AF | Consumes the named shared foundations; no compliance-only OCR pipeline or store. | 10 |
| `EIS18-CAB-02` | TR/UQ | `EIS14-CAB-01` names `document_links` for Ledger rows and inventory movements. Compliance documents link through a feature-owned table referencing `documents` by composite key, with no SB-P-1.14 amendment. For SB-P-1.14 owner confirmation at Stage 10. | 4 |

### D. Shared Location Foundation

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-LOC-01` | PR/TR | One server-side validation function per approved purpose. Coordinate sent once in a request body, never a URL; returns a result only. | 11 |
| `EIS18-LOC-02` | PR | No continuous or background tracking; live tracking stays out (`18:FPDR-2`). | 6 |
| `EIS18-LOC-03` | PR/TR | Disclosure of why, who, when and access end at the purpose boundary; result-only viewers; unrelated roles denied. | 6 |
| `EIS18-LOC-04` | PR/TR | No A2 or B2 raw coordinate stored. Only the C3 temporary pin, erased at delivery close plus a sweep (B6-08). No numeric period (`18:FPDR-1`). Provisional, `DLEG` stays. | 5 |
| `EIS18-LOC-05` | TR | Coordinates are redacted from application error capture, server logs and analytics, with no client persistence (B6-07). Design basis: `SA02-18-F01`, as dispositioned in MC-688 (MC-734 R5). This is not verification of any live log, trace, backup or sink; a new logging path re-refers that delta only. | 42 |

### E. Workspace views and acceptance accounting

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-VW-01` | PR/AF | Staff and HR cards in the SB-P-1.17 shell, fed by feature services and gated by role and entitlement (`EIS-KER-05`). No dashboard-only logic. | 7 |
| `EIS18-VW-02` | PR/AF | Order and delivery cards on the same rule; no marketplace behaviour. | 7 |
| `EIS18-ACC-01` | PR | Order acceptance scenarios and completion gate, mapped to named tests. | 16 |
| `EIS18-ACC-02` | PR | Staff acceptance scenarios and completion gate. | 11 |
| `EIS18-ACC-03` | PR | Compliance acceptance scenarios and completion gate. | 11 |
| `EIS18-ACC-04` | FC | Founder-reserved scenarios A, B and C are future plans; none is demonstrated. | 4 |
| `EIS18-ACC-05` | PR | Mission sequencing, cumulative-mission, evidence-sufficiency and unresolved-decision rules govern downstream records; no row accepted on repository, specification or CI evidence. | 34 |

### P. External Delivery Staff consumer path (SB-P-1.12 EIS v0.5; MC-809)

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-EXT-01` | AF | **Consumed kernel contract, specified and locked, not implemented.** SB-P-1.12 EIS v0.5 (`7a5f4918`, effective per MC-802) owns G1 issue, accept and revoke (`EIS-ID-07` to `-09`), the G2 read-only first-run decision (`EIS-FRL-06`), the participant capability source (Section 8.1 step 3(c)) and controls PC-01 to PC-12. SB-P-1.18 consumes them and redefines none of them. Supersedes the v0.4 interface hold (Section 14.1). | 19 |
| `EIS18-EXT-02` | PR/TR | **The five overlapping `DH` external legs are specified** through `EIS18-EXT-03` to `-EXT-08` (Section 14.2). Their status and the census are unchanged. Each external leg is activation-gated (`EIS18-EXT-08`) and is evidenced separately from the employee leg. | 5 |
| `EIS18-EXT-03` | PR/TR | **Participant capability registration (PC-05).** For participant type `delivery_staff`, SB-P-1.18 registers versioned capabilities limited to the `1-§13-*` delivery actions and the `1-§5-15` to `-21` task data (Section 7.1). Registration creates no membership, role default, grant, dashboard or Owner capability, and does not extend `EIS-KER-04`. | 21 |
| `EIS18-EXT-04` | PR/TR | **Object assignment and governed set read (PC-05).** Authority needs a current binding, the registered capability, a current object assignment for that business, action and delivery, entitlement and channel, and current epochs. Task lists come only from a governed read that derives candidates from the participant's own assignments and decides each target. Omitted objects are not disclosed in counts, cursors, ordering or metadata. Assignment change serializes under `EIS-CNF-02` (`EIS-ID-09`). | 23 |
| `EIS18-EXT-05` | PR/TR | **Merchant invitation surfaces.** The merchant enters the intended email (P-1 Option A), calls issue (`EIS-ID-07`), and shares the reference once, through a channel the merchant already controls (PC-02). Revocation and reissue go through `EIS-ID-09`. A lost issue response is handled by revoke and reissue, never by reconstructing the reference (PC-03). The UI states the fixed 168-hour validity (P-3) and that an accepted binding survives the issuer's departure (SR-09 Option X). Nothing is sent by Smart Business. | 19 |
| `EIS18-EXT-06` | PR/TR | **Participant first-run rendering.** SB-P-1.18 renders the `participant_route` decision of `EIS-FRL-06`, the accept step (`EIS-ID-08`) and the assigned-delivery experience. `participant_path_not_ready` is shown calmly, with no business-creation default (PC-07). A person with several contexts sees each, with no silent switch. | 19 |
| `EIS18-EXT-07` | PR/TR | **One authority path per request (F-OVL Option B).** Where a person holds a membership and a Delivery Staff binding in one business, every SB-P-1.18 command and governed read sends exactly one named path in `p_context`. The client may remember a choice; the server never infers it. A denial on one path is final: no retry on the other path and no combining. | 22 |
| `EIS18-EXT-08` | UQ | **Activation gate (PC-07, PC-10).** No participant route, issue or acceptance is usable until: the SB-P-1.12 interface is implemented and verified; SB-P-1.18 capability, entitlement and object registration (M18-7); external route readiness (M18-3); and, for each sign-in method, recorded P-1 identity evidence (`EIS-ID-08`). Until then every step fails closed with `participant_path_not_ready`. This is runtime evidence, not a documentary gap. | 24 |

### X. Cross-cutting (selector-mapped)

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-SEC-01` | AF | Every read and write calls `authz.authorize` with explicit active business (`EIS-ID-06`) and revalidates at execution (`EIS-KER-09`, `EIS-CNF-02`). No interim role model or client-side authority. | 280 |
| `EIS18-SEC-02` | AF/TR | Birth-safe objects: `EIS-ISO-02/03/10`. Invoker only where caller privileges intentionally suffice; protected writes through narrow executor definers (SA-05 correction). `anon` and `PUBLIC` revoked in the creating migration. | 456 |
| `EIS18-SEC-03` | AF/PR | No Owner financial intelligence, Ask CFO, Reference Cost or margin by role, view, export, AI context or error path (`EIS-KER-07`). | 8 |
| `EIS18-IDM-01` | AF/TR | Source-scoped idempotency (`22-§15`). Unknown commit outcome means lookup before retry, never guessed success (SA-03 F4). | 14 |
| `EIS18-AUD-01` | AF | Audit and provenance through `EIS-AUD-01/02/03` and `EIS13-AUD-01`. | 6 |
| `EIS18-MIG-01` | TR | M18-1 to M18-8 design only, `DRAFT OR PROPOSAL — NON-EXECUTABLE`. Each class gets an object birth matrix, backfill statement and rollback boundary (M18-MIG-02/03/04). M18-3 participant slice designed but activation-gated by EIS18-EXT-08, M18-7, PC-07/PC-10; no execution before verified dependencies. | 290 |
| `EIS18-VER-01` | PR | Each row gets a planned test and evidence class from its FCTM seed, unchanged. Runtime evidence decides acceptance (B6-24; Blueprint §20.7.6). Nothing is PASS now. | 592 |
| `EIS18-CAP-01` | TR | Capability catalogue (Section 7) as `EIS-KER-03` registry entries, with object scope as kernel input (`EIS-KER-08`). A tool definition never grants a capability (`EIS13-TOOL-01`). How an `authz.authorize` `action` value selects the evaluated capability is `UNKNOWN` upstream (SB-P-1.14 PQ-12); the names bind to it once SB-P-1.12 determines it. | 280 |
| `EIS18-OBJ-01` | TR | Logical object model (Section 8). Every object is business-scoped with composite references. Names are engineering choices, not Product Truth. | 290 |
| `EIS18-CMD-01` | TR | Command catalogue (Section 9). Consequential writes follow `EIS13-CMD-01` under `EIS-ISO-02`, with a confirmation binding where marked and `EIS-CNF-04` idempotency. | 308 |
| `EIS18-ERR-01` | TR | Feature outcome codes (Section 10) sit under the `EIS-UX-01` denial contract: calm, non-leaking, non-accusing, and narrow (`EIS-CNF-06`). | 101 |
| `EIS18-RDR-01` | TR | Governed readers (M18-8): kernel-scoped, batched, minimized, carrying source and freshness. A reader never widens source ownership. | 23 |
| `EIS18-NEG-01` | PR | Must-not rows are enforced below the UI by grant, command check or server validation, each with a named negative test or inspection item. | 64 |
| `EIS18-MIG-02` | TR | Additive and live-safe. No historical movement, transaction or document is reinterpreted. A missing value stays missing (M18-MIG-03). | 290 |
| `EIS18-MIG-03` | TR | Each class states its pre-data rollback boundary and the point after which only forward-fix applies. PITR is disaster recovery only; restore reconciliation never reissues stock, COD or notification effects (M18-MIG-04). | 42 |
| `EIS18-MIG-04` | PR | No execution. Rehearsal needs a freshly verified `smart-business-test`, separate authorization and an environment breadcrumb (`docs/migration/README.md`). | 294 |
| `EIS18-VER-02` | PR | Rows with an `RT` seed get named integration tests and, where user-visible, runtime evidence. FUTURE. | 306 |
| `EIS18-VER-03` | PR | Rows with a `NEG` seed get named negative tests (Section 16.2). FUTURE. | 124 |
| `EIS18-VER-04` | PR | Rows with an `INSP` seed are verified by design inspection against the final EIS. FUTURE. | 123 |
| `EIS18-VER-05` | PR | Rows with an `IDEM` seed get replay, concurrent-delivery and lost-response tests. FUTURE. | 14 |
| `EIS18-VER-06` | PR | Rows with an `EXP` seed get an experience review, including neutral language and Malayalam review. FUTURE. | 31 |
| `EIS18-VER-07` | PR | Scenario and gate rows each become a named acceptance item. | 43 |

### H. Hold requirements (one per dependency, as in `EIS17-HOLD-*`)

| Requirement | Basis | Specification | Rows |
|---|---|---|---:|
| `EIS18-HLD-D12` | UQ | `D12` kernel gate. | 280 |
| `EIS18-HLD-D13` | UQ | `D13` conversation and tools gate. | 116 |
| `EIS18-HLD-D14` | UQ | `D14` Memory, UDI and storage gate. | 119 |
| `EIS18-HLD-D15` | UQ | `D15` Reminder and Notification gate. | 52 |
| `EIS18-HLD-D16` | UQ | `D16` financial integrity gate. | 17 |
| `EIS18-HLD-D17` | UQ | `D17` stock and shell gate. | 25 |
| `EIS18-HLD-D19` | UQ | `D19` stewardship gate. | 5 |
| `EIS18-HLD-D20` | UQ | `D20` channel gate; native legs only. | 16 |
| `EIS18-HLD-DTX` | UQ | `DTX` single write path (PQ-2 undecided). | 5 |
| `EIS18-HLD-DSCH` | UQ/PD | `DSCH` scheduler and timezone unverified. | 10 |
| `EIS18-HLD-DAI` | UQ/PD | `DAI` provider unverified. | 43 |
| `EIS18-HLD-DV` | UQ/PD | `DV` provider unverified. | 5 |
| `EIS18-HLD-DNTF` | UQ | `DNTF`: no out-of-app channel before SB-P-1.20. | 17 |
| `EIS18-HLD-DENT` | UQ | `DENT`: no add-on acceptance; no schema simulation (DC-07). | 13 |
| `EIS18-HLD-DPAY` | UQ/PD | `DPAY`: no payment-evidence source selected. | 2 |
| `EIS18-HLD-DLOC` | UQ | `DLOC`: nothing exists; device capture unverified. | 42 |
| `EIS18-HLD-DMAP` | UQ/PD | `DMAP` / U-13: no provider. | 1 |
| `EIS18-HLD-DLEG` | UQ | `DLEG`: no legal or calculation claim; recording only. | 6 |
| `EIS18-HLD-DC13` | FC | DC-13: conditional documentary T6 only (MC-701). | 5 |
| `EIS18-HLD-DC14` | FC | DC-14: conditional documentary T6 only (MC-699); PROVISIONAL — PROFESSIONAL VALIDATION PENDING. | 1 |
| `EIS18-NTF-01` | AF/TR | **Participant assignment notification (`EQ18-05` source resolved, MC-817; Section 14.3).** Consumes the canonical SB-P-1.15 amendment (current blob `7b78c42d`; normative text reviewed at `ac41034d`): `EIS15-NTF-01`, `-03`, `-04`, `-08`, `-10` and `EIS15-AUTHZ-07`. **Positive obligation:** when a delivery is assigned to a participant, the assignment command (`EIS18-EXT-04`), inside its own transaction and after its own kernel decision, records one native request with `recipient_path` `participant_binding` and purpose `delivery.assignment`. The recipient is the assignment's current bound participant, derived server-side; a caller-supplied recipient, binding identifier, email or invitation reference is never accepted. **Creation checks:** an accepted, current binding; an `active` business and person; the current object assignment to that binding; `delivery.task.read` registered and current for that target (PC-05); entitlement (PC-06); readiness (PC-07); current authority epochs; the recipient defined by SB-P-1.15 (PC-09). If any check fails, zero requests are written and the merchant sees `NTF_NO_VERIFIED_RECIPIENT`: a denial or hold, never fulfilment (MC-734 R4). **Identity:** one logical request per eligible assignment event or version and recipient; retries converge, and a denied event stays at zero. Reassignment makes the prior request `SUPERSEDED` and creates one for the new participant only if it passes the same checks. Revocation ends eligibility at the next evaluation. **Display:** the participant sees a request only through the SB-P-1.15 governed participant read, on the one named path (F-OVL Option B), with a per-target decision under `delivery.task.read`. Counts, badges, cursors and empty states reflect shown items only, and denials are equivalent (PC-12). No path union, fallback, membership substitution or Owner intelligence. Content is the task reference only (`EIS18-EXT-04`). **Recorded is not delivered:** a recorded request is not display, acknowledgement or delivery. Merchant copy states only that a native notification request was recorded for the verified participant path, and that Smart Business sends nothing through an external channel (`EIS15-NTF-10`). No membership, role default, new capability, channel, provider or OTP. Activation-gated (`EIS18-EXT-08`, PC-10). | 1 |
| `EIS18-HLD-PQ14` | UQ | `PQ-14`: object-scoped Cabinet set reads (search, listing, conversational retrieval) need a target-aware helper accepted under SB-P-1.12; until then a direct request for one document is the fail-closed interim path. Not a narrowing. | 8 |

## 13. Attendance Mechanism Under MC-699 (DC-14)

**[MC] Conditional documentary design only.** MC-699's conditions apply in full:
1. QR plus point-in-time geofence is a conditional named-minimum capability, with no pretence that it can be legally activated for all Kerala employers.
2. A viable, auditable non-location method is offered, including on GPS denial, poor signal, device unavailability, accessibility need or merchant choice.
3. Compelled personal-phone GPS, continuous or background surveillance, covert monitoring and geofence-based discipline or wage decisions are prohibited.
4. Ephemeral raw-location validation, result-only visibility, strict permissions, anti-replay and narrow hold handling are design obligations, not tested claims.
5. Merchant-class suitability, employee notice, device handling, provider choice, capture, final retention schedule, log and backup suppression, worker use and legal-policy assertions are **held** until qualified India and Kerala review and production evidence.
6. Any new legal conflict or scope change returns to the Founder.

**EQ18-08 proposal, `TR`, for a T3 screen at Stage 10:** QR without location, and a manager-recorded attributed event. Contract 6 §5 names "approved QR/location-assisted check-in/out or other future verified methods", and `18:FPDR-4` makes other methods adoptable. If either proves merchant-visible beyond that, it goes to T3.

## 14. Interface Hold Registers

### 14.1 `EQ18-15` register: the 19 external Delivery Staff `DI` rows (reconciled to SB-P-1.12 v0.5)

> **INTERFACE SPECIFIED — LOCKED SB-P-1.12 EIS v0.5 (`7a5f49182463ec79ecf221d7dd13dfebbc517e3e`, MC-802) — NOT IMPLEMENTED — CONSUMPTION GATED (PC-07, PC-10).** The v0.4 record "upstream interface held / not included in authoritative EIS contract" is superseded at the documentary level. `EQ18-15` asked for the vehicle and acceptance of the G1/G2 contract; the locked v0.5 supplies the contract. What remains is implementation, verification and per-method P-1 evidence, which `EIS18-EXT-08` holds fail-closed. Founder: `18:FPDR-6` D1-A; SB-P-1.12 Founder Decision Records 10 and 11 [F].

All 19 stay `IN SCOPE`, Blueprint §20.8 status `DI` and risk H, unchanged; none is deferred, reassigned or marked complete. The `DI` label is frozen Blueprint text; whether it should later read `DH` is for Mission Control, not this EIS. Each row needs the whole contract, because an external person reaches it only through G1 issue and accept and G2 first run, and loses it through G1 revoke. Each path is evidenced separately; employee evidence discharges none of them.

**Evidence class:** kernel contract [S]; Founder decisions [F]; per-method identity proof and end-to-end proof [FUT].

| Row | Source unit | Classification | SB-P-1.18 consumer specification | Still held |
|---|---|---|---|---|
| `1-§5-15` | Merchant identity | Spec now; activation-gated | Field in the participant task projection (`EIS18-EXT-04`) | — |
| `1-§5-16` | Customer name or contact where required | Spec now; activation-gated | Field only where the task requires it | SA02-18-F03 device-data question [SP] |
| `1-§5-17` | Order or item summary | Spec now; activation-gated | Field in projection | — |
| `1-§5-18` | Delivery address or location | Spec now; activation-gated | Text address; `temporary_pin` under C3 for the active order (`EIS18-CUS-05`) | `DLOC`; SA02-18-F03 [SP] |
| `1-§5-19` | Delivery timing or instructions | Spec now; activation-gated | Field in projection | — |
| `1-§5-20` | COD amount where applicable | Spec now; activation-gated | Read-only expected amount | `D16` |
| `1-§5-21` | Permitted delivery actions | Spec now; activation-gated | Actions derived from the registered capabilities (Section 7.1) and state | — |
| `1-§5-22` | Must-not: no Owner-wide business view | Spec now; activation-gated | PC-05 and PC-12; `EIS-ID-08` never grants Owner intelligence, export or support. NT-EXT-04 | — |
| `1-§13-2` | Acknowledge assignment | Spec now; activation-gated | `delivery.acknowledge` on the participant path | — |
| `1-§13-3` | Open address or map | Spec now; activation-gated | Device maps hand-off (`EIS18-DLV-04`) | `DMAP` |
| `1-§13-4` | Mark started | Spec now; activation-gated | `delivery.start` | — |
| `1-§13-5` | Record delivery proof | Spec now; activation-gated | Named-minimum proof (`EIS18-PRF-01`) | `D14`, `DLOC`; photo and signature not adopted (R2) |
| `1-§13-6` | Record COD collected | Spec now; activation-gated | `cod.record_collected` on the assigned delivery: a fact, no Ledger write, no financial authority | `D16`; SA-03 confirmation at Stage 10 |
| `1-§13-7` | Mark delivered | Spec now; activation-gated | `delivery.complete`, gated on configured proof | — |
| `1-§13-8` | Report unable to deliver | Spec now; activation-gated | `delivery.report_unable` | — |
| `1-§17-4` | Assignment notification | Spec now; participant leg activation-gated | Employee membership recipient (`EIS18-OFD-01`); participant-binding recipient (`EIS18-NTF-01`), native only | `EQ18-05` source resolved (MC-817; Section 14.3). PC-10 and runtime evidence |
| `1-§26-7` | Scoped assignment scenario | Spec now; activation-gated | NT-EXT-02 and NT-ASG-01 test design | `D13` |
| `1-§26-8` | Required-information scenario | Spec now; activation-gated | NT-EXT-04 test design | `D13` |
| `BP-§10.7-A6` | Purpose-limited task data | Spec now; activation-gated | Projection rule (`EIS18-EXT-04`) | — |

**Result: all 19 rows are normative consumer specification, activation-gated. `1-§17-4`'s participant leg consumes the canonical SB-P-1.15 `EQ18-05` amendment (MC-817); its Section 21 drafting class was reconciled to `RUN` in Section 21.2 under MC-817, with activation and runtime evidence FUTURE.** None is runtime-ready.

**Consumer obligations under the locked controls.**

| Control | SB-P-1.18 obligation |
|---|---|
| PC-02, PC-03 | Show the reference once, from the issue response only; never log, store or reconstruct it. Lost response → revoke and reissue (`EIS18-EXT-05`) |
| PC-04, PC-12 | No direct table read of invitation or binding state. Render one outward denial shape for not found, wrong business, unassigned, revoked, unregistered and wrong path |
| PC-05 | Capability registration (Section 7.1), object assignment (`delivery_assignments`) and the governed set read (`delivery.tasks_for_participant`) |
| PC-06 | Entitlement-gated (`DENT`); fails closed. ENT-1 retain or end is SB-P-1.12 and SB-P-1.19 business, not decided here |
| PC-07 | Readiness order: kernel implemented and verified → M18-7 registration → M18-3 route → G1 activation |
| PC-09 | Participant recipient defined by the canonical SB-P-1.15 `EQ18-05` amendment and consumed by `EIS18-NTF-01`; native only, no channel or send |
| PC-10 | No consumption before the SB-P-1.12 package is re-locked (C-4, PK-0; PR #1120 is draft) and implemented under separate authorization |
| PC-11 | Any merchant-visible lockout or cooldown from throttling needs a separate product screen |
| Section 8.1 (F-OVL) | One named authority path per request; `authority_path_required` rendered without guessing (`EIS18-EXT-07`) |

**Ownership boundary.**

| SB-P-1.18 (specified here) | SB-P-1.12 (specified in v0.5; not restated here) |
|---|---|
| Participant capability registration, object assignment and governed set read | Commands, binding state, kernel representation and server-side route decision |
| Merchant invite, share, revoke and reissue surfaces; participant accept and task surfaces | Invitation secret, digest, expiry (168 hours, database clock) and identity matching |
| Participant end-to-end negative tests (Section 16.2) | Participant binding suite (SB-P-1.12 Section 18) |
| M18-3 external slice and M18-7 registration, activation-gated | Its own migrations and package |

### 14.2 Five overlapping external execution legs

These rows stay `DH`; the census stays at 19 `DI`. Both legs are now specified (`EIS18-EXT-02`). The external leg is activation-gated (`EIS18-EXT-08`) and is evidenced separately; it claims no acceptance.

| Row | Source unit | Employee leg (specified) | External leg (specified; activation-gated) |
|---|---|---|---|
| `1-§12-3` | Delivery person exists and has permission | `EIS18-DLV-02`: membership and capability check | Current binding, registered capability and entitlement before assignment (`EIS18-EXT-04`); `participant_path_not_ready` before readiness |
| `1-§15-2` | Delivery staff completion action (`18:FPDR-4` named minimum) | `EIS18-PRF-01` | `delivery.task.act` complete on the assigned delivery (Section 7.1) |
| `1-§24-5` | Unavailable delivery staff | `EIS18-DLV-02` | Reassignment; authority over the order ends at the next evaluation (`EIS-ID-09`) |
| `1-§24-6` | Revoked permission during workflow | `EIS-KER-09` on membership | Binding revocation mid-delivery: commit before, or committed rejection with no write (`EIS-ID-09`) |
| `1-§25-3` | Delivery staff sees only task-required information | `EIS18-OFD-07`, `-DLV-03` | PC-05 governed set read and PC-12 equivalent denials (`EIS18-EXT-04`) |

### 14.3 `EQ18-05` participant notification: consumed SB-P-1.15 recipient contract

- **Source status [S].** Resolved at the documentary level. The canonical SB-P-1.15 `EQ18-05` post-lock amendment (current canonical `main@301dae011342fc3bef278096bf403a886abe7534`: EIS blob `7b78c42d4d1aa43e7e717d47f5a9e67e208f2030`, Engineering Contract `08fa43ae5b1b14f8132a3c531a3114a43e8c4481`, Verification Checklist `7c6c974f34939cc69c79877a07915f496f8ee560`; reviewed and first published at `main@8bd38d56c8017863bce06bcbdf46649bafcfcdc0` as EIS `ac41034da6c73468e66aa45a6765604fa7623a6c`, Engineering Contract `815781305954d9d589c7e08f8b3b69cb28ab44d1`, Verification Checklist `251489979413a3ec440882848165b1e77987d22f`) adds a typed `participant_binding` recipient for purpose `delivery.assignment` (`EIS15-NTF-01`, `-03`, `-04`, `-08`, `-10`, `EIS15-ARC-04`, `EIS15-AUTHZ-07`, `EIS15-SEC-05`; NN-01 to NN-16). MC-817 ([PR #1111 comment 6735122273](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6735122273)) records its Stage 10 acceptance, Stage 11 lock disposition, human merge (PR #1121) and canonical verification. At `ac41034d` the amendment's in-file labels read `DRAFT — NOT APPROVED — NOT LOCKED — NOT EFFECTIVE`. The provenance-only correction (PR #1122; MC-817 post-merge verification, [comment 6737859696](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6737859696)) relabels it `APPROVED — LOCKED DOCUMENTARY AMENDMENT, CANONICALLY PUBLISHED (MC-817)` and changes no normative clause. Its retained pre-publication notice is historical. The original lock `75dcf385` is historical for the recipient specification. This meets the SB-P-1.12 v0.5 PC-09 condition that a participant recipient is resolved only if separately verified under SB-P-1.15.
- **Specified now.** Employee membership recipient (`EIS18-OFD-01`) and participant-binding recipient (`EIS18-NTF-01`), both native only, with the per-target display authorization of `EIS15-NTF-03`.
- **Fail-closed.** An ineligible participant recipient yields zero requests and `NTF_NO_VERIFIED_RECIPIENT` to the merchant. That is a merchant-visible denial or hold, never fulfilment of `1-§17-4` (MC-734 R4).
- **Recorded is not delivered.** A recorded request, a governed display, an acknowledgement and an outward delivery are distinct. No out-of-app delivery exists in this mission (`EIS15-NTF-05`, `DNTF`).
- **Not permitted.** A membership, role default, new participant capability, channel, provider or OTP; a path union or fallback; a reduced row.
- **Still held.** Implementation and the SB-P-1.12 PC-10 consumption gate (C-4, PK-0; PR #1120); entitlement (`DENT`, ENT-1); readiness (`EIS18-EXT-08`); grants and RLS evidence; all runtime evidence. SB-P-1.15 NN-01 to NN-16, NT-EXT-06 and NT-NTF-01 are FUTURE.
- **Traceability.** `1-§17-4` stays `IN SCOPE` with its existing links. Its Section 21 drafting class is `RUN`: activation-gated (`EIS18-EXT-08`, PC-10), with runtime evidence FUTURE. It is not `DOC`, and nothing is delivered.
- **Evidence class.** Contract [S] consumed; runtime [FUT].

### 14.4 Other holds

| Hold | Rows | Evidence class | Owner | Earliest gate | Effect here |
|---|---|---|---|---|---|
| `DLEG` calculation and eligibility (R1) | `6-§3-6`, `6-§8-2`, `S11-L443-1` | [Q] open | Qualified India employment counsel, routed by Mission Control | Before any normative rule | Not specified; never stubbed. The `S11-L443-1` neutral flag (`EIS18-OVT-02`) is a recording design under `18:FPDR-8`, not eligibility, hours or pay |
| `DLEG` overtime register, retention, consent, caps, processing basis and notice (`18:FPDR-5` §5 items 1 and 4–8; `18:FPDR-8` §6) | `S11-L443-1` to `-5` | [Q] open | Same | Before activation or reliance | Recording only. Flags, drafts and opt-in history have retention `TBD`. `EIS18-OVT-02` to `-05` are SPECIFIED DOCUMENTARY / ACTIVATION-HELD |
| `SA02-18-F03` photo and signature (R2) | `1-§15-4`; photo variant of `1-§13-5` | [SP] open | Privacy reviewer commissioned by Mission Control | Before normative inclusion or adoption; before Stage 10 can claim the choice dispositioned | Mechanism not adopted; no media object |
| `SA02-18-F01` logging design (R5) | `DLOC` rows | [SP] design only; live sinks [U] | Specialist; test environment | Negative tests at package and implementation | Design requirement `EIS18-LOC-05`. No blanket privacy PASS |
| DC-14 (MC-699) | `6-§5-2` | [MC] conditional; legal [Q] | Mission Control; counsel | Before real employee-location use or policy reliance | Section 13 |
| DC-13 (MC-701) | `1-§7-*`, `1-§5-29` | [MC] conditional | Mission Control | Channel acceptance at SB-P-1.20 | Native state only; no send |
| `18:FPDR-1` retention | `22-§16-6`, `1-§14-12`, `1-§22-11` | [F] provisional; [Q] open | Founder; counsel | Before legal-policy reliance | No numeric period |
| P-1 per-method identity proof (R3; Founder Decision Record 11) | 19 `DI` rows; five legs | [FUT]; email configuration-ready but unverified, Google unverified (MC-728-S); zero signups (MC-732) | SA-05; Founder; Mission Control | Before each sign-in method or participant route is enabled. Not a Stage 9 or Stage 10 documentary gate | `EIS18-EXT-08`; unverified method returns `participant_path_not_ready` |
| ENT-1 pending-invitation retain or end during suspension | 19 `DI` rows | [S] `HELD` in PC-06 | Mission Control; SB-P-1.19 | Before suspension behaviour is relied on | Acceptance and actions fail closed; 168-hour expiry not paused |
| P-3, G2 codes, F-OVL, SR-09 | 19 `DI` rows | [S] [F] decided in v0.5 | SB-P-1.12 | — | Consumed. Field and code names are working names until the SB-P-1.12 package (PC-10) |
| SB-P-1.12 package and consumption gate (C-4, PK-0, PC-10) | 19 `DI` rows; five legs | Package v1.1-D draft (PR #1120); [U] | Mission Control | Before any consumer implementation | `EIS18-EXT-08` |
| Cabinet object-scoped set reads (`PQ-14`) | `EIS18-HLD-PQ14` rows | [S] held in the SB-P-1.14 package | SB-P-1.12 with SB-P-1.14 | Before compliance listing and search are accepted | Direct single-document request only meanwhile; not a narrowing |
| Action-to-capability selector | `D12` rows | [U] `UNKNOWN` | SB-P-1.12 | Before capability names are bound | Recorded on `EIS18-CAP-01` |
| C-1 | Upstream | Met for v0.5 (Records 73, 74; MC-802) | Mission Control; Founder | — | Applies again to any later SB-P-1.12 amendment |
| `DENT` / DC-07 | 13 `DENT` rows | [S] primitive; lifecycle open | SB-P-1.12; SB-P-1.19 | Add-on acceptance | No schema simulation |
| `DNTF`, `D20` | 17 `DNTF` rows | None before SB-P-1.20 | SB-P-1.20 | Channel acceptance | Native legs; "customer channel: not demonstrated" |
| AEG-1, U-09, C1 §17 screening | As Blueprint §12.3 | [MC] | Mission Control | Acceptance and release | Retained |
| `DTX` / PQ-2 | 5 `DTX` rows; COD link | [S]; cut-over undecided | SB-P-1.14 to SB-P-1.16; Mission Control | Before any Ledger link | `LEDGER_LINK_HELD` |
| `D12`–`D17`, `D19` | `EIS18-HLD-*` | [S] not implemented | Upstream missions | Implementation | Consumed as specification |
| `DSCH`, `DAI`, `DV` | `EIS18-HLD-*` | [U] | Upstream missions | Activation | No provider claim |
| `DMAP` / U-13 | `1-§13-3` | None selected; screen N/A, not PASS | Build Plan §5.4 if proposed | If proposed | Device hand-off |
| Stock and concurrency (SA-03 F4) | 13 B6-05 rows | [SP] `HELD`; [FUT] | SA-03 | Implementation | Risk stays H |
| Migration and environment (M18-MIG-01 to 05) | M18-1 to M18-8 | [SP] `HELD`; [U] | Migration specialist; separate mission | Separate authorization | Section 17 |

## 15. R1–R5 Rulings Register (MC-734)

| Ruling | Decision | Representation here |
|---|---|---|
| R1 | Bounded held representation; `S11-L443-1` not complete | `EIS18-PAY-03` held. The `S11-L443-1` system-proposed origin is now specified as a neutral recording design under `18:FPDR-8` (`EIS18-OVT-02` to `-05`; MC-819), activation-held on `DLEG`; calculation stays held. All five facets stay mapped |
| R2 | Conditional partial accept; no waiver | `EIS18-PRF-03`; no photo, signature or OTP value or media object. Named minimum proceeds. Privacy assessment precedes Stage 10 claiming this dispositioned |
| R3 | Auth runtime proof is not a Stage 9 gate; Founder condition preserved | Section 14.1; `EIS18-EXT-08`. No claim of identity proof. SB-P-1.12 v0.5 was re-locked separately (MC-802), not by this EIS |
| R4 | `EQ18-05` needs source-owner reconciliation | Section 14.3; `EIS18-NTF-01`; `NTF_NO_VERIFIED_RECIPIENT` |
| R5 | `SA02-18-F01` admissible for design only | `EIS18-LOC-05`; negative tests in Section 16.2. No blanket PASS |

## 16. Verification Contract (all FUTURE)

**Nothing below has been executed.** Tiers follow Blueprint §20.7.6. CI is a configured-checks signal only, never acceptance evidence (`BP-§13-b2`). A row is accepted only on runtime evidence (B6-24).

### 16.1 Positive acceptance evidence

| ID | Scenario | Tier | Rows | Status |
|---|---|---|---|---|
| PT-ORD-01 | Forwarded order → draft with ambiguity → clarified → confirmed | Integration; Founder A | `1-§9-1`, `1-§9-13`, `BP-§10.7-AS1` | FUTURE |
| PT-AVL-01 | Availability shown as known, unknown or unavailable from the reader | Integration | `1-§10-2`, `1-§10-9` | FUTURE; `D17` |
| PT-STK-01 | Pack one line → one decrease linked to the event | Integration | `1-§10-*`, `BP-§10.7-A3` | FUTURE; `D17` |
| PT-DLV-01 | Employee assigned → acknowledge → start → proof → delivered | Integration; device | `1-§12-*`, `1-§13-1`, `1-§15-1` | FUTURE; employee only |
| PT-COD-01 | Expected, collected and discrepancy recorded as separate facts | Integration | `1-§16-1` to `-3` | FUTURE; `D16` |
| PT-HR-01 | Staff record without a login; link to a membership enables self-view | Integration | `6-§3-1`, `6-§3-7` | FUTURE; `D12` |
| PT-ATT-01 | Non-location attendance event; correction keeps the original | Integration; Founder B | `6-§5-1`, `6-§7-6`, `BP-§10.7-BS1` | FUTURE |
| PT-OVT-01 | Manual and manager records, with dispute → review → correction → audit | Integration | `S11-L443-2` to `-5`, part of `-1` | FUTURE. NOT RUN |
| PT-OVT-02 | Approved shift version and an associated reliable check-out after the approved end → one neutral flag → Owner or scoped Manager initiates, including through a verified conversation channel → one non-effective `system_proposed` draft with references, origin, status and attribution only → authorized review (cases T-01, T-07, T-17 of comment 6748632956) | Integration | `S11-L443-1`, `-2`, `-5` | FUTURE. NOT RUN; activation `DLEG`-held |
| PT-OVT-03 | Employee view: neutral receipt for their own pending manual report; own reviewed record and correction status after review (T-09) | Integration | `S11-L443-4` | FUTURE. NOT RUN |
| PT-CMP-01 | Licence photo → preview → confirmed date → reminder → renewal version | Integration; Founder C | `16-§20-1`, `16-§8-*`, `BP-§10.7-CS1` | FUTURE; `D14`, `D15` |
| PT-LOC-01 | Validation returns a result; destination pin erased at close | Integration | `22-§16-*`, `1-§14-10` | FUTURE; `DLOC` |
| PT-VW-01 | Views render for the permitted role with the add-on enabled | Integration | `17-§9-*`, `17-§10-*` | FUTURE; `DENT`. Payroll view only |

### 16.2 Negative acceptance evidence

| ID | Area | Scenario and required result | Rows | Status |
|---|---|---|---|---|
| NT-FIN-01 | Owner finances | Employee or Manager without a grant: no profit, Ask CFO, Reference Cost or margin through any view, export, AI answer or error path | `1-§5-14`, `1-§25-6`, `6-§4-7`, `6-§9-10` | FUTURE |
| NT-ROLE-01 | Role | Per role, per capability, on every channel including AI: denied without a default or grant | `kind:NEG`; B6-03 | FUTURE |
| NT-EMP-01 | Own record | Employee cannot read another staff record, attendance or overtime | `BP-§10.7-B3`, `6-§14-7`, `S11-L443-4`, `17-§9-7` | FUTURE |
| NT-RLS-01 | RLS | Anonymous access denied on every new object; no direct DML by `authenticated` | M18-1 to M18-8 | FUTURE |
| NT-RLS-02 | Default grants | Effective privileges for `PUBLIC`, `anon`, `authenticated`, `service_role`, executor roles and creator defaults, verified as state (`EIS-ISO-03`) | M18-1 to M18-8 | FUTURE |
| NT-RLS-03 | Definers | Owner, security mode, empty `search_path`, overloads and `EXECUTE` per function (`EIS-ISO-10`) | M18-1 to M18-8 | FUTURE |
| NT-BIZ-01 | Cross-business | Business A cannot read or write business B through table, reader, command or worker | `1-§26-13`, `6-§14-10`, `16-§17-2` | FUTURE |
| NT-ASG-01 | Assignment | Employee cannot read or act on an unassigned or another's delivery; unassigned after revocation at the next call | `1-§25-3`, `1-§24-6`, `1-§26-7`, `1-§26-8` | FUTURE; employee variant |
| NT-ASG-02 | Assignment | Duplicate or retried assignment yields one assignment; each failed `1-§12-*` condition refuses | `1-§12-*`, `1-§24-7` | FUTURE |
| NT-STK-01 | Stock replay | Duplicate, retried and concurrent packing of one line: exactly one decrease | 13 B6-05 rows | FUTURE |
| NT-STK-02 | Return | Cancel alone: no restock. Return above the packed quantity refused. Repeat return idempotent | `1-§24-8`, `1-§10-*` | FUTURE |
| NT-STK-03 | Override | Refused to Employee, Delivery Staff, AI and a Manager without the grant; return capability confers none | `1-§10-9`, `1-§24-3` | FUTURE |
| NT-COD-01 | COD replay | Replay yields one collection and one Ledger outcome; no order-domain income; unknown outcome is looked up | `1-§16-5`, `1-§16-6`, `1-§26-14` | FUTURE; `DTX` |
| NT-PRV-01 | Coordinates | Planted test coordinate absent from every sink after each location event: app, server, gateway, database, analytics, AI context | `DLOC` rows; EQ18-07 | FUTURE; [U] |
| NT-PRV-02 | Retention | No A2 or B2 coordinate in any table or export; pin erased at close; backup and PITR position recorded | `22-§16-6`, `1-§14-12`, `1-§22-11`; EQ18-06 | FUTURE |
| NT-PRV-03 | Surveillance | No live or periodic location view, no movement trace, no background capture | `1-§14-5` to `-7`, `22-§16-2` | FUTURE |
| NT-ATT-01 | Attendance | GPS denial leaves a usable path; no anomaly becomes an accusation, wage or discipline effect | `6-§13-3`, `6-§9-7`, `6-§8-3` to `-5` | FUTURE |
| NT-PAY-01 | Payroll | No calculation, threshold or sanction; no export obligation asserted | `6-§8-*`, `17-§9-5` | FUTURE |
| NT-OVT-01 | Reviewer | Manager reviews a draft they initiated → `OVT_SELF_REVIEW_DENIED`; another Manager without a scoped review grant is denied; a sole Owner may review their own draft (T-01 to T-03) | `S11-L443-2` | FUTURE. NOT RUN |
| NT-OVT-02 | Approval and association | Unapproved manual version, unconfirmed import, missing, multiple or uncertain association, missing check-out, pending correction or dispute → no flag, clarification (T-04, T-05, T-08) | `S11-L443-1` | FUTURE. NOT RUN |
| NT-OVT-03 | Direction and content | Late arrival, early leave or other mismatch → no overtime flag and no wrongdoing wording; no flag or draft holds hours, duration, pay, eligibility, score or Owner intelligence (T-06, T-20) | `S11-L443-1` | FUTURE. NOT RUN |
| NT-OVT-04 | Employee visibility | The employee sees no flag, draft, unreviewed report detail, pending manager entry or other employee's data (T-09) | `S11-L443-4` | FUTURE. NOT RUN |
| NT-OVT-05 | Enablement | Opt-in off or entitlement off → no flag, initiation, draft or consequential review; a Manager cannot record the opt-in; after restoration a stale binding or evidence version is refused (T-10, T-11) | `S11-L443-1`, `S11-L443-3` | FUTURE. NOT RUN |
| NT-OVT-06 | Duplicates | Second initiation on the same evidence version → existing draft shown; concurrent initiations → one draft; same key replay → one outcome, conflicting fingerprint rejected; a manual or manager entry on the same evidence is kept and linked (T-12, T-21). **D4:** freeze → restore → retry; rejected → retry; reviewed → retry; concurrent first insert; changed fingerprint; changed evidence version (new proposal only after supersession, a fresh flag and a fresh initiation) | `S11-L443-1`, `S11-L443-5` | FUTURE. NOT RUN |
| NT-OVT-07 | Evidence change | Correction while a draft is pending → flag superseded with history, draft `revalidation_required`, no auto-approval; after review, no silent change; initiation on a superseded flag refused (T-13 to T-15) | `S11-L443-1`, `S11-L443-3`, `S11-L443-5` | FUTURE. NOT RUN |
| NT-OVT-08 | Initiation authority | AI tool, automation rule, background job, observer or `service_role` → no initiation; holder of only `overtime.record.create` → no `system_proposed` draft and no origin substitution; a verified human on WhatsApp or conversation with an exact binding is allowed, a generic yes or inferred target refused (T-16 to T-18) | `S11-L443-1` | FUTURE. NOT RUN |
| NT-OVT-10 | Internal derivation (D1) | Direct call to the derivation child by `authenticated`, `anon`, `service_role`, support, a job or an AI tool → refused; a caller-supplied business, staff, shift or reference id is ignored; an employee check-out in business A never reads or writes business B or another staff member's shift or flag; the check-out response is identical with and without a derived flag; derivation failure leaves no partial flag and never rejects a valid capture; the flag shows actor type `system`, the event keeps the employee | `S11-L443-1`, `S11-L443-5` | FUTURE. NOT RUN |
| NT-OVT-11 | Capture association (D2) | Capture with no reference, several references, a stale or superseded reference, another staff member's reference or another business's reference → no association, no flag, unchanged capture outcome, no shift or count disclosed; a client-supplied shift id or version is ignored; a shift-version change supersedes the association and its flags | `S11-L443-1` | FUTURE. NOT RUN |
| NT-OVT-12 | Owner opt-in (D3) | A Manager holding every HR and overtime grant, or an explicit grant of `overtime.feature.opt_in`, → `OVT_OWNER_REQUIRED`; support, participant, automation, Employee and `service_role` → refused; ownership transfer or membership revocation racing opt-in settles in one serial order; a stale binding after a version change is refused | `S11-L443-1` | FUTURE. NOT RUN |
| NT-OVT-09 | Flag read scope | Holder of only `attendance.read` or only shift read, wrong staff target, foreign business or revoked grant → denied, with no leakage of flag existence (T-19) | `S11-L443-1`, `S11-L443-4` | FUTURE. NOT RUN |
| NT-CMP-01 | Compliance | No legal assurance; a due reminder never completes a renewal; later OCR never changes a confirmed date | `16-§15-*`, `16-§8-11`, `16-§20-5` | FUTURE |
| NT-NTF-01 | Notification | Ineligible participant recipient (unbound record; pending, expired or consumed invitation; revoked binding; unassigned; entitlement or readiness failed; non-`active` business or person): zero requests, also on retry; the merchant sees `NTF_NO_VERIFIED_RECIPIENT` as a denial, not fulfilment | `1-§17-4`; SB-P-1.15 NN-06 to NN-08, NN-12, NN-16 | FUTURE |
| NT-FRL-01 | First run (consumed) | Invited employee follows `EIS-FRL-02`: not silently made Owner of a new business | Consumed from SB-P-1.12 | FUTURE; upstream |
| NT-EXT-01 | First run | Participant with a pending or bound state: no business or Owner membership created; `participant_path_not_ready` before readiness; several contexts shown without a silent switch; unbound person keeps ordinary first run (`EIS-FRL-06`) | 19 `DI` rows | FUTURE; activation-gated |
| NT-EXT-02 | Assignment and capability | Participant without a current binding, registered capability or assignment denied; reassignment and revocation end access at the next evaluation, including mid-delivery; return confirmation and override refused | `1-§12-3`, `1-§24-5`, `1-§24-6`, `1-§26-7` | FUTURE |
| NT-EXT-03 | Authority path (F-OVL) | Person with a membership and a binding in one business: no named path → `authority_path_required` and no write; membership path never reaches binding scope and the reverse; no retry or combining; audit records the path | Five legs; `1-§5-21` | FUTURE |
| NT-EXT-04 | No enumeration, no Owner data | Zero assignments give the same empty shape; counts, cursors and ordering reflect own assignments only; unassigned and non-existent orders indistinguishable; no Owner intelligence, customer list or export | `1-§5-22`, `1-§25-3`, `1-§26-8`, `BP-§10.7-A6` | FUTURE |
| NT-EXT-05 | Invitation surfaces | Reference shown once and absent from logs, analytics and stores; lost response leads to revoke and reissue; UI states 168 hours; issuer departure leaves an accepted binding active and pending invitations unacceptable (SR-09) | 19 `DI` rows | FUTURE; kernel behaviour itself is SB-P-1.12's suite |
| NT-EXT-06 | Notification | Eligible participant assignment: exactly one native `participant_binding` request for `delivery.assignment`, created in the assignment transaction from the assigned binding; a caller-supplied recipient is rejected or ignored; reassignment supersedes the prior request; revocation hides it; shown only through the governed participant read with a named path and a per-target decision, never through the membership path; counts and empty states unchanged by hidden items; task reference only; merchant copy states only that a request was recorded, with no visible, received, acknowledged, sent or delivered claim; no channel state | `1-§17-4`; SB-P-1.15 NN-01 to NN-05, NN-09 to NN-11, NN-13 to NN-15 | FUTURE; activation-gated |

## 17. Migration Design (Design Only; Not Executed)

`DRAFT OR PROPOSAL — NON-EXECUTABLE`. Under `docs/migration/README.md`, no migration is authorized, no SQL exists and a repository file creates no authority. Each class activates only after its prerequisite is accepted, not merely specified.

### 17.1 Classes

| Class | Objects (Section 8) | Prerequisite | Backfill | Rollback boundary | Held slice |
|---|---|---|---|---|---|
| M18-1 | `customer_messaging_state`, `customer_addresses`, `customer_duplicate_candidates` | SB-P-1.16 identity; `EIS-ID-03` | None; existing rows unaffected | Pre-data drop; after data, forward-fix | — |
| M18-2 | `orders`, `order_lines`, `order_ambiguities`, `order_state_events`, `order_change_*`, `order_packing_events`, `order_return_confirmations` | Kernel; confirmation; SB-P-1.17 movement path | None | Pre-data drop; history never deleted after data | No stock effect until the movement path and per-line contract are accepted |
| M18-3 | `delivery_*`, `order_proof_policy`, `cod_*`, `order_ledger_links` | M18-2; `EIS16-ORD-01`; `DTX` decision; SB-P-1.12 interface verified for the participant slice | None | Same | **Participant slice designed; activates only after M18-7 (PC-07)**. No COD-to-finance before `DTX` |
| M18-4 | `staff_records`, `staff_shifts`, `attendance_*`, `leave_records`, `overtime_*`, `payroll_support_drafts` | Memberships; EQ18-02 | None. No staff inferred from Auth users | Same | `DLEG` fields absent |
| M18-5 | `compliance_*` | Cabinet; Reminder Engine | None | Same | — |
| M18-6 | Validation functions, `delivery_destination_pins`, `location_holds`, QR tokens | Specialist review; DC-14 for the geofence | None | Pre-data drop; erasure unaffected | Hold authority `TBD` |
| M18-7 | Capability and entitlement entries, including the Section 7.1 participant capabilities | Registry; `EIS-KER-05`; SB-P-1.12 participant capability source | Registry rows only | Versioned registry | Override and return wait for EQ18-13 and EQ18-14 |
| M18-8 | Governed readers | Feature tables | None | Drop reader | Never widens ownership |

### 17.2 Object birth matrix (every class)

`REVOKE ALL` from `PUBLIC`, `anon` and `authenticated` at creation, with explicit `service_role` treatment. RLS on and policies present before any grant. Function `EXECUTE` neutralized before intended grants. Definers follow `EIS-ISO-10`: `NOLOGIN NOINHERIT` owner, empty `search_path`, schema-qualified references. Exact signatures and overloads recorded. **No "create now, harden later" interval.** Per-object effective-access proof is [FUT].

### 17.3 Rehearsal

Separate authorization only. Fresh `smart-business-test` identity, schema parity and access checks. Schema evidence through `pg_class` and `pg_namespace`, not `information_schema.tables`. Environment breadcrumb before any destructive statement. CLI only through `scripts/supabase-cli.mjs`. Inventory, catalog and Ledger regressions. Partial-DDL recovery and restore reconciliation. Production is never part of this mission (Source 18 §9.1).

## 18. Specialist Findings and Engineering Questions

All findings are **proposals and `HELD` assessments** [SP], not approved controls.

| Finding | Representation |
|---|---|
| SA-05 `SECURITY INVOKER` correction | `EIS18-SEC-02`; Section 17.2 |
| SA-03 F2, F3, F4 | `EIS18-STK-01` to `-04`, `-COD-02`, `-IDM-01`; NT-STK, NT-COD |
| SA-04 F01 to F03 | Section 14; `EIS18-ORD-01`, `-AVL-01`, `-OFD-01`; M18-3 participant activation gate |
| M18-MIG-01 to 05 | Section 17; `EIS18-MIG-01` to `-04` |
| SA02-18-F01 to F03 | `EIS18-LOC-*`, `-ATT-02`, `-OVT-01`, `-PRF-03`; Section 14.4 |
| Q-6 Security & Permissions finding (#6746975626; accepted #6748169515) | Section 7 rules (distinct flag read, initiation separate from creation, Owner-only opt-in, reviewer rule); `overtime_neutral_flags` as internal derived state (Section 8); bindings (Section 9); Section 11; NT-OVT-05 to -09 |
| New provider screen | Not applicable at this baseline; not a PASS |

| Question | Status in this draft |
|---|---|
| EQ18-01, EQ18-04 | Decided (`18:FPDR-6`) |
| EQ18-02 | Proposed: mission-owned `staff_records`. Stage 10 with the SB-P-1.12 owner |
| EQ18-03 | Proposed: Section 7, no kernel change. Stage 10 |
| EQ18-05 | Source resolved by the canonical SB-P-1.15 amendment (MC-817); consumed in Section 14.3. Independent exact-delta review completed with substantive notification concurrence, followed by a documentary metadata correction on this PR (MC-817); overall SB-P-1.18 Stage 10 acceptance remains HELD |
| EQ18-06, EQ18-07 | Open; [U]. NT-PRV tests |
| EQ18-08 | Proposed (Section 13); T3 screen |
| EQ18-09 | Proposed key (Section 9); final with SB-P-1.16 |
| EQ18-10 | `TBD`: rotation, scope, replay window and radius, at formal specification with SA-05 and the privacy reviewer |
| EQ18-11 | Proposed: SB-P-1.18 unit suites join the Fast Gate; code and migration paths join Full Assurance. Stage 10 |
| EQ18-12 | `TBD`: named devices and browsers, low-end Android first, before device tests |
| EQ18-13, EQ18-14 | Proposed (Section 7, `EIS18-STK-03`). SA-03 and owners at Stage 10 |
| EQ18-15 | **Documentary contract supplied** by locked SB-P-1.12 v0.5 (MC-802). Implementation, verification and per-method P-1 evidence held (`EIS18-EXT-08`) |

## 19. Path to Formal Stage 10 Review, Stage 10 Acceptance and Stage 11 Lock

Three sequential gates apply, each under separate Mission Control authority. Formal Stage 10 independent review under gate (a) has occurred (MC-814-R; MC-817); Stage 10 acceptance under gate (b) remains HELD, and Stage 11 EIS lock under gate (c) is NOT AUTHORIZED.

- **(a) Readiness for formal Stage 10 independent review.** It may be requested with the four named unresolved documentary matters visible and fail-closed: (i) the `S11-L443-1` system-proposed overtime trigger: Founder direction canonical (`18:FPDR-8`); positive EIS specified (`EIS18-OVT-02` to `-05`); independent security and documentary exact corrections required until separately reviewed; activation and `DLEG` held; (ii) the `DLEG` payroll and legal rules; (iii) the `SA02-18-F03` privacy disposition; and (iv) `PQ-14`, the target-aware Cabinet selector and helper. Fail-closed behavior does not fulfil the positive obligation behind any of them. The count of four does not mean there are no other blockers. `EQ18-05` is no longer an open documentary matter: its source and consumer contract were resolved under MC-817 at the documentary level, not implemented (step 2).
- **(b) Stage 10 acceptance.** The Stage 10 reviewer independently performs the full Source 18 §3.2 item 6 source-text completeness and disposition test, and obtains the precise source-owner and specialist findings that acceptance needs. Acceptance does not treat an unfulfilled positive obligation as satisfied.
- **(c) Stage 11 EIS lock.** Only after every review blocker is resolved or given an explicit, valid Source 18 disposition. Where neither is possible, the genuine mandatory earlier-stop applies.

Steps 1 to 6 are the substantive work that gates (b) and (c) depend on. None is waived, reclassified or preapproved by gate (a).

1. **SB-P-1.12: done at documentary level (MC-809).** v0.5 is locked; Section 14 now specifies the consumer path. Remaining: field and code names fixed by the SB-P-1.12 package (C-4, PK-0, PC-10) and ENT-1.
2. **SB-P-1.15: done at documentary level (MC-817).** The canonical `EQ18-05` amendment (current `7b78c42d` at `main@301dae01`; reviewed at `ac41034d`, `main@8bd38d56`) is consumed in Section 14.3, `EIS18-NTF-01` and `1-§17-4`. The Stage 10 exact-delta review gave substantive concurrence (MC-817); Stage 10 acceptance remains HELD. Remaining: implementation and runtime evidence under PC-10.
3. **Qualified inputs:**
   - Payroll and overtime validation settles `EIS18-PAY-03` and the `DLEG` activation conditions of `EIS18-OVT-02` to `-05`. The neutral trigger itself is a product decision, now specified under `18:FPDR-8`; it needs no legal validation to be specified, and it is not legally ready.
   - The `SA02-18-F03` assessment settles `EIS18-PRF-03`.
4. **EIS-level values:** settle the `TBD`s in Sections 7, 8, 11 and 18, and the cross-mission signatures in `EIS18-STK-04` and `EIS18-CAB-02`.
5. **Depth:** physical schema, exact command signatures and per-capability role defaults.
6. **Completeness:** the full Source 18 §3.2 item 6 source-text test is performed in Stage 10, under gate (b). Formal Stage 10 review needs its own separate authorization under gate (a); Stage 10 acceptance and the Stage 11 lock follow only as gates (b) and (c) state.

Steps 2 and 3 are not SB-P-1.18 acts. No step here authorizes editing an upstream contract.

**`S11-L443-1` origin count: resolved upstream, not by this file.** The Founder confirmed exactly three creation origins, with dispute as a condition ([PR #1111 comment 6741589012](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6741589012)). The stale "four origins" verification seeds were corrected canonically in the FCTM (now blob `ed2ff0f99e6982a15b650b5aee09e01e9355e0fd`) and the Blueprint (now blob `f9bfd0a2f6995f9956c76425fef3bff673cc7266`) through PR #1123 (Track A, MC-817). This EIS realizes the three origins as `manual_report`, `system_proposed` and `manager_entry` (Section 8) and changes no source file.

## 20. Source 18 Trigger Screen

| Trigger | Result in this draft |
|---|---|
| T1, T3 | No new product choice is made here. SB-P-1.12 Founder decisions P-1, SR-09, F-OVL and P-3 are consumed as recorded, and the SB-P-1.18 overtime choices are consumed from canonical `18:FPDR-8`, where T1 and T3 were decided. Screens flagged: EQ18-08 mechanisms; EQ18-05 resolution (T3/T7); any throttling lockout (PC-11) |
| T2 | No new Product Truth conflict |
| T4, T5 | None |
| T6 | DC-13 and DC-14 unchanged and conditional |
| T7 | No row narrowed, moved or deferred. All 592 stay `IN SCOPE` |
| T8 | Not fired. The binding is specified and locked upstream, and every open item is representable as a hold |

## 21. Traceability

Generated from the requirement selectors and validated against FCTM blob `ed2ff0f9` (Track A; frozen fields identical to `2bbe6e22`). Mapping shows a planned link, not depth and not PASS.

### 21.1 Integrity checks

| Check | Result |
|---|---|
| `IN SCOPE` FCTM rows; rows mapped to at least one requirement | 592; 592 |
| IDs absent from the FCTM; rows duplicated in the matrix | 0; 0 |
| Candidate requirements; requirements with no FCTM row (orphans) | 140; 0 |
| Row-to-requirement links; per row minimum / maximum | 5597; 2 / 22 |
| §20.8 census from the row data | DA 115, DH 434, HG 24, DI 19; H 100, M 382, L 110 |
| Drafting class | `NOW` 441; `RUN` 147; `DOC` 4; `BLK` 0. Plus 5 activation-gated external legs (flag `X`) inside `NOW` and `RUN` |
| Source pointers checked against pinned blobs (mechanical text match) | 587 of 592 match; the 5 `S11-L443-*` facets use descriptive pointers and were checked at Source 11 line 443 (`- overtime records`) |
| FCTM, Blueprint, Founder-record or upstream changes | 0 |
| Workstream requirements with no dedicated object, command, reader or tool (principle or acceptance-record requirements, enforced by rule and test) | 18: `PRN-01`, `PRF-04`, `OFD-04`, `OFD-06`, `PRN-02`, `HFD-01`, `HPR-01`, `PRN-03`, `CPR-01`, `CFD-01`, `ACC-01`, `ACC-02`, `ACC-03`, `ACC-04`, `ACC-05`, `EXT-01`, `EXT-02`, `EXT-08` |

**Limits.** This is an author's set check, plus a mechanical text match of pointers. It is **not** the independent source-text obligation inventory (Source 18 §3.2 item 6), which Mission Control runs at Stage 10. It proves a pointer's text exists in its source, not that the coverage of that source is complete. The Stage 2 inventory is `claude-code/07-…`.

**Class key.**
- `NOW`: can specify now.
- `RUN`: runtime evidence deferred; a named fact (status `DI`, through `EIS18-EXT-08`; Kind `FRV`; `DLOC`, `DSCH`, `DAI` or `DV`; or finding B6-05, B6-06, B6-08) decides acceptance.
- `DOC`: documentary contract or qualified input required for part of the row.
- `BLK`: genuine source or truth blocker (none).

Every row also needs runtime acceptance later (B6-24). No row is PASS.

### 21.2 FCTM row to EIS requirement (592 rows)

Prefix `EIS18-` omitted. `VER-01` applies to all 592 and is not repeated. Flag `X`: activation-gated external leg (Section 14.2).

| Row | Kind | Component | Status | Risk | Seed | Class | Flag | Requirements |
|---|---|---|---|---|---|---|---|---|
| `1-§1-1` | EXP | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§1-2` | EXP | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§1-3` | EXP | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-1` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-2` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-3` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-4` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-5` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-6` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-7` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§2-8` | NARR | C-CUS | DA | L | EXP | NOW |  | PRN-01, VER-06 |
| `1-§3-1` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§3-2` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§3-3` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§3-4` | NEG | C-CUS | DA | L | NEG | NOW |  | PRN-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `1-§3-5` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§3-6` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§3-7` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§3-8` | NEG | C-CUS | DA | L | NEG | NOW |  | PRN-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `1-§3-9` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§3-10` | PRIN | C-CUS | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§5-1` | OBL | C-OAU | DH | M | RT | NOW |  | CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-2` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-3` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-4` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D16 |
| `1-§5-5` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-6` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-7` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-8` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-01, SEC-01, SEC-02, SEC-03, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-9` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-10` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-11` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-12` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-13` | OBL | C-OAU | DH | M | RT | NOW |  | OAU-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-14` | NEG | C-OAU | DH | M | NEG | NOW |  | OAU-02, SEC-01, SEC-02, SEC-03, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `1-§5-15` | OBL | C-OAU | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-16` | OBL | C-OAU | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-17` | OBL | C-OAU | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-18` | OBL | C-OAU | DI | H | RT | RUN |  | DLV-03, DLV-04, LOC-05, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§5-19` | OBL | C-OAU | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-20` | OBL | C-OAU | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D16 |
| `1-§5-21` | OBL | C-OAU | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-22` | NEG | C-OAU | DI | H | NEG | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, SEC-03, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `1-§5-23` | OBL | C-OAU | DH | M | RT | NOW |  | CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§5-24` | OBL | C-OAU | HG | H | RT | NOW |  | CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF |
| `1-§5-25` | OBL | C-OAU | HG | H | RT | NOW |  | CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF |
| `1-§5-26` | OBL | C-OAU | HG | H | RT | RUN |  | CUS-05, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DLOC |
| `1-§5-27` | OBL | C-OAU | HG | H | RT | NOW |  | CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§5-28` | OBL | C-OAU | HG | H | RT | NOW |  | CUS-06, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF |
| `1-§5-29` | OBL | C-OAU | HG | H | RT | NOW |  | CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§5-30` | NEG | C-OAU | DH | M | NEG | NOW |  | CUS-06, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `1-§6-1` | RULE | C-CUS | DH | M | INSP | NOW |  | CUS-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `1-§6-2` | OBL | C-CUS | DH | M | RT | NOW |  | CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§6-3` | OBL | C-CUS | DH | M | RT | NOW |  | CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `1-§6-4` | OBL | C-CUS | DH | M | RT | NOW |  | CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§6-5` | OBL | C-CUS | DH | M | RT | NOW |  | CUS-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§6-6` | OBL | C-CUS | DH | M | RT | NOW |  | CUS-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§6-7` | OBL | C-CUS | DH | M | IDEM | NOW |  | CUS-03, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `1-§7-1` | OBL | C-CUS | HG | H | RT | NOW |  | CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§7-2` | OBL | C-CUS | HG | H | RT | NOW |  | CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§7-4` | NEG | C-CUS | HG | H | NEG | NOW |  | CUS-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§7-5` | NEG | C-CUS | HG | H | NEG | NOW |  | CUS-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D20, HLD-DNTF, HLD-DC13 |
| `1-§8-1` | RULE | C-ORD | DH | M | INSP | NOW |  | ORD-01, SEC-02, VER-04, HLD-D13 |
| `1-§8-6` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§8-7` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§8-8` | OBL | C-ORD | DH | M | RT | RUN |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `1-§8-9` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§8-10` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§8-11` | RULE | C-ORD | DH | M | INSP | NOW |  | ORD-02, SEC-02, VER-04, HLD-D14 |
| `1-§8-12` | NEG | C-ORD | DH | M | NEG | NOW |  | ORD-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14 |
| `1-§9-1` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-2` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-3` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-4` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-5` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-6` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-7` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-8` | OBL | C-ORD | DH | M | RT | NOW |  | CUS-05, ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-9` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-10` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-11` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-12` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-13` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-14` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-15` | OBL | C-ORD | DH | M | RT | NOW |  | CUS-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-16` | OBL | C-ORD | DH | M | RT | NOW |  | CUS-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-17` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-18` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§9-19` | NEG | C-ORD | DH | M | NEG | NOW |  | ORD-04, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13 |
| `1-§10-1` | RULE | C-AVL | DH | H | RT | RUN |  | AVL-02, STK-01, STK-02, STK-04, SEC-01, SEC-02, CAP-01, VER-02, HLD-D12 |
| `1-§10-2` | OBL | C-AVL | DH | H | RT | RUN |  | AVL-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-3` | OBL | C-AVL | DH | H | RT | RUN |  | AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-4` | OBL | C-AVL | DH | H | RT | RUN |  | AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-5` | OBL | C-AVL | DH | H | RT | RUN |  | AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-6` | OBL | C-AVL | DH | H | RT | RUN |  | AVL-02, STK-01, STK-04, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D17 |
| `1-§10-7` | EX | C-AVL | DH | H | RT (if adopted) | RUN |  | AVL-02, STK-01, STK-04, MIG-03, VER-02, HLD-D17 |
| `1-§10-8` | OBL | C-AVL | DH | H | RT | RUN |  | AVL-02, STK-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§10-9` | NEG | C-AVL | DH | H | NEG | RUN |  | AVL-01, STK-03, STK-04, SEC-02, ERR-01, NEG-01, MIG-03, VER-03, HLD-D17 |
| `1-§11-1` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§11-2` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§11-3` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§11-4` | RULE | C-DLV | DA | L | INSP | NOW |  | DLV-01, SEC-02, VER-04 |
| `1-§12-1` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-2` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-3` | OBL | C-DLV | DH | M | RT | NOW | X | DLV-02, EXT-02, EXT-04, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-4` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-5` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§12-6` | OBL | C-DLV | DH | M | IDEM | NOW |  | DLV-02, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `1-§12-7` | OBL | C-DLV | DH | M | RT | NOW |  | DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `1-§13-1` | RULE | C-DLV | DA | L | EXP | NOW |  | DLV-03, SEC-02, VER-06 |
| `1-§13-2` | OBL | C-DLV | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-3` | OBL | C-DLV | DI | H | RT | RUN |  | DLV-04, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DMAP |
| `1-§13-4` | OBL | C-DLV | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-5` | OBL | C-DLV | DI | H | RT | RUN |  | DLV-03, LOC-05, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14, HLD-DLOC |
| `1-§13-6` | OBL | C-DLV | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D16 |
| `1-§13-7` | OBL | C-DLV | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-8` | OBL | C-DLV | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `1-§13-9` | RULE | C-DLV | DA | L | INSP | NOW |  | DLV-03, SEC-02, VER-04 |
| `1-§14-1` | PRIN | C-LOC | DH | H | INSP | RUN |  | LOC-01, LOC-05, SEC-01, CAP-01, VER-04, HLD-D12, HLD-DLOC |
| `1-§14-2` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-3` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-4` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-5` | NEG | C-LOC | DH | H | NEG; INSP | RUN |  | LOC-02, LOC-05, SEC-02, ERR-01, NEG-01, VER-03, VER-04, HLD-DLOC |
| `1-§14-6` | NEG | C-LOC | DH | H | NEG | RUN |  | LOC-02, LOC-05, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-DLOC |
| `1-§14-7` | NEG | C-LOC | DH | H | NEG | RUN |  | LOC-02, LOC-05, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-DLOC |
| `1-§14-8` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-9` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-10` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-04, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-11` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `1-§14-12` | RULE | C-LOC | DH | H | INSP | RUN |  | LOC-04, LOC-05, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12, HLD-DLOC |
| `1-§14-13` | RULE | C-LOC | DA | L | NEG | NOW |  | LOC-04, SEC-02, VER-03 |
| `1-§15-1` | OBL | C-PRF | DH | M | RT | NOW |  | PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§15-2` | EX | C-PRF | DH | M | RT | NOW | X | PRF-01, EXT-02, EXT-03, EXT-07, EXT-08, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14 |
| `1-§15-3` | EX | C-PRF | DH | M | RT (if adopted) | NOW |  | PRF-02, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14 |
| `1-§15-4` | EX | C-PRF | HG | H | RT (if adopted) | DOC |  | PRF-03, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14, HLD-DNTF |
| `1-§15-5` | EX | C-PRF | DH | H | RT (if adopted) | RUN |  | PRF-02, LOC-05, SEC-01, CAP-01, VER-02, HLD-D12, HLD-DLOC |
| `1-§15-6` | EX | C-PRF | DH | M | RT (if adopted) | RUN |  | COD-01, SEC-01, CAP-01, MIG-03, VER-02, HLD-D12, HLD-D16, HLD-DPAY |
| `1-§15-7` | EX | C-PRF | DH | M | RT | NOW |  | PRF-01, SEC-01, CAP-01, VER-02, HLD-D12, HLD-D14 |
| `1-§15-8` | OBL | C-PRF | DH | M | RT | NOW |  | PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `1-§15-9` | NEG | C-PRF | DH | M | NEG | NOW |  | PRF-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D14 |
| `1-§15-10` | NEG | C-PRF | DH | M | NEG | NOW |  | PRF-04, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D14 |
| `1-§16-1` | OBL | C-PRF | DH | M | RT | RUN |  | COD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D14, HLD-D16 |
| `1-§16-2` | OBL | C-PRF | DH | M | RT | RUN |  | COD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D14, HLD-D16 |
| `1-§16-3` | OBL | C-PRF | DH | M | RT | RUN |  | COD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D14, HLD-D16 |
| `1-§16-4` | RULE | C-PRF | DH | M | INSP | RUN |  | COD-02, SEC-02, MIG-03, VER-04, HLD-D16, HLD-DPAY |
| `1-§16-5` | NEG | C-PRF | DH | H | NEG | RUN |  | COD-02, SEC-02, ERR-01, NEG-01, MIG-03, VER-03, HLD-D14, HLD-D16, HLD-DTX |
| `1-§16-6` | OBL | C-PRF | DH | H | IDEM | RUN |  | COD-02, SEC-02, IDM-01, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-05, HLD-D14, HLD-D16, HLD-DTX |
| `1-§17-1` | RULE | C-OFD | DH | M | INSP | NOW |  | OFD-01, SEC-02, VER-04, HLD-D15 |
| `1-§17-2` | OBL | C-OFD | DH | M | RT | NOW |  | OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `1-§17-3` | OBL | C-OFD | HG | H | RT | NOW |  | OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§17-4` | OBL | C-OFD | DI | H | RT | RUN |  | OFD-01, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, NTF-01 |
| `1-§17-5` | OBL | C-OFD | HG | H | RT | NOW |  | OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§17-6` | OBL | C-OFD | HG | H | RT | NOW |  | OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§17-7` | OBL | C-OFD | DH | M | RT | NOW |  | OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `1-§17-8` | OBL | C-OFD | DH | M | RT | NOW |  | OFD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `1-§17-9` | NEG | C-OFD | DH | M | NEG | NOW |  | OFD-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D15 |
| `1-§18-7` | RULE | C-ORD | DA | L | INSP | NOW |  | ORD-01, SEC-02, VER-04 |
| `1-§19-1` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13 |
| `1-§19-2` | OBL | C-ORD | DH | M | RT | RUN |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `1-§19-3` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§19-4` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `1-§19-5` | RULE | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-01, SEC-02, CAP-01, VER-02, HLD-D12, HLD-D13 |
| `1-§20-1` | OBL | C-ORD | HG | H | EXP | NOW |  | ORD-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-06, HLD-D13, HLD-D20, HLD-DNTF |
| `1-§20-2` | OBL | C-ORD | DH | M | EXP | NOW |  | ORD-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-06, HLD-D13 |
| `1-§21-1` | OBL | C-OFD | DH | M | RT | RUN |  | OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-2` | OBL | C-OFD | DH | M | RT | RUN |  | OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-3` | OBL | C-OFD | DH | M | RT | RUN |  | OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-4` | OBL | C-OFD | DH | M | RT | RUN |  | OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-5` | OBL | C-OFD | DH | M | RT | RUN |  | OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-6` | OBL | C-OFD | DH | M | RT | RUN |  | OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-7` | OBL | C-OFD | DH | M | RT | RUN |  | OFD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `1-§21-8` | NEG | C-OFD | DH | M | NEG | RUN |  | ORD-04, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-9` | NEG | C-OFD | DH | M | NEG | RUN |  | OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-10` | NEG | C-OFD | DH | M | NEG | RUN |  | PRF-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-11` | NEG | C-OFD | DH | M | NEG | RUN |  | OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-12` | NEG | C-OFD | DH | M | NEG | RUN |  | OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§21-13` | NEG | C-OFD | DH | M | NEG | RUN |  | OFD-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `1-§22-1` | OBL | C-OFD | DH | M | INSP | NOW |  | ORD-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-2` | OBL | C-OFD | DH | M | INSP | NOW |  | CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-3` | OBL | C-OFD | DH | M | INSP | NOW |  | CUS-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-4` | OBL | C-OFD | DH | M | INSP | NOW |  | ORD-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-5` | OBL | C-OFD | DH | M | INSP | NOW |  | ORD-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-6` | OBL | C-OFD | DH | M | INSP | NOW |  | DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-7` | OBL | C-OFD | DH | M | INSP | NOW |  | DLV-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-8` | OBL | C-OFD | DH | M | INSP | NOW |  | DLV-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-9` | OBL | C-OFD | DH | M | INSP | NOW |  | PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-10` | OBL | C-OFD | DH | M | INSP | NOW |  | COD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-04, HLD-D12, HLD-D14, HLD-D16 |
| `1-§22-11` | OBL | C-OFD | DH | H | INSP | RUN |  | CUS-05, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14, HLD-DLOC |
| `1-§22-12` | OBL | C-OFD | DH | M | INSP | NOW |  | OFD-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-13` | OBL | C-OFD | DH | M | INSP | NOW |  | ORD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-14` | OBL | C-OFD | DH | M | INSP | NOW |  | OFD-04, SEC-01, SEC-02, AUD-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12, HLD-D14 |
| `1-§22-15` | NEG | C-OFD | DH | M | NEG | NOW |  | CUS-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D14 |
| `1-§23-1` | RULE | C-OFD | DH | M | INSP | NOW |  | OFD-06, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `1-§23-2` | RULE | C-OFD | DH | M | INSP | NOW |  | CUS-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `1-§23-3` | RULE | C-OFD | DH | M | INSP | NOW |  | OFD-06, SEC-02, VER-04, HLD-D14 |
| `1-§23-4` | RULE | C-OFD | DH | M | INSP | NOW |  | ORD-05, SEC-02, VER-04, HLD-D13 |
| `1-§23-5a` | RULE | C-OFD | DH | M | INSP | NOW |  | ORD-01, SEC-02, VER-04, HLD-D13 |
| `1-§23-6` | RULE | C-OFD | DH | M | INSP | NOW |  | OFD-06, SEC-02, VER-04, HLD-D14 |
| `1-§23-7` | RULE | C-OFD | DH | M | INSP | NOW |  | AVL-01, SEC-02, MIG-03, VER-04, HLD-D17 |
| `1-§23-8` | RULE | C-OFD | DH | M | INSP | NOW |  | OFD-01, SEC-02, VER-04, HLD-D15 |
| `1-§23-9` | RULE | C-OFD | DH | M | INSP | NOW |  | OFD-06, SEC-02, VER-04, HLD-D15 |
| `1-§23-10` | RULE | C-OFD | DH | H | INSP | RUN |  | OFD-06, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `1-§23-11` | RULE | C-OFD | DH | M | INSP | NOW |  | OFD-06, SEC-01, SEC-02, AUD-01, CAP-01, VER-04, HLD-D12 |
| `1-§23-12` | RULE | C-OFD | DH | M | INSP | NOW |  | COD-02, SEC-02, MIG-03, VER-04, HLD-D16 |
| `1-§24-1` | OBL | C-OFD | DH | M | NEG | NOW |  | CUS-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-2` | OBL | C-OFD | DH | M | NEG | NOW |  | ORD-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-3` | OBL | C-OFD | DH | H | NEG | RUN |  | AVL-02, STK-01, STK-02, STK-03, STK-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-03, MIG-04, VER-03, HLD-D12, HLD-D17 |
| `1-§24-4` | OBL | C-OFD | DH | H | NEG | RUN |  | CUS-05, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-DLOC |
| `1-§24-5` | OBL | C-OFD | DH | M | NEG | NOW | X | DLV-02, EXT-02, EXT-04, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-6` | OBL | C-OFD | DH | M | NEG | NOW | X | OFD-05, EXT-02, EXT-04, EXT-08, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-7` | OBL | C-OFD | DH | M | IDEM | NOW |  | DLV-02, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `1-§24-8` | OBL | C-OFD | DH | H | NEG | RUN |  | AVL-02, STK-01, STK-02, STK-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-9` | OBL | C-OFD | DH | M | NEG | NOW |  | OFD-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-10` | OBL | C-OFD | DH | M | NEG | NOW |  | OFD-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-11` | OBL | C-OFD | DH | M | NEG | NOW |  | PRF-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `1-§24-12` | OBL | C-OFD | DH | M | NEG | RUN |  | COD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-03, MIG-04, VER-03, HLD-D12, HLD-D16 |
| `1-§24-13` | OBL | C-OFD | HG | H | NEG | NOW |  | OFD-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-D15, HLD-D20, HLD-DNTF |
| `1-§24-14` | OBL | C-OFD | DH | M | NEG | RUN |  | COD-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-03, MIG-04, VER-03, HLD-D12, HLD-D16 |
| `1-§24-15` | RULE | C-OFD | DH | M | NEG | NOW |  | OFD-05, SEC-01, SEC-02, CAP-01, ERR-01, VER-03, HLD-D12 |
| `1-§25-1` | PRIN | C-OFD | DH | M | NEG | NOW |  | OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-2` | PRIN | C-OFD | DH | M | NEG | NOW |  | OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-3` | PRIN | C-OFD | DH | M | NEG | NOW | X | OFD-07, EXT-02, EXT-03, EXT-04, EXT-07, EXT-08, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-4` | PRIN | C-OFD | DH | M | NEG | NOW |  | OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-5` | PRIN | C-OFD | DH | M | NEG | NOW |  | OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-6` | PRIN | C-OFD | DH | M | NEG | NOW |  | OFD-07, SEC-01, SEC-03, CAP-01, VER-03, HLD-D12 |
| `1-§25-7` | PRIN | C-OFD | DH | M | NEG | NOW |  | OFD-07, SEC-01, CAP-01, VER-03, HLD-D12 |
| `1-§25-8` | RULE | C-OFD | DH | M | NEG | NOW |  | OFD-07, SEC-01, SEC-02, CAP-01, VER-03, HLD-D12, HLD-D19 |
| `1-§26-1` | SCN | C-ACC | HG | H | RT; separate full order test | NOW |  | ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D20, HLD-DNTF |
| `1-§26-2` | SCN | C-ACC | DH | M | RT | RUN |  | ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-DV |
| `1-§26-3` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D14 |
| `1-§26-4` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13 |
| `1-§26-5` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-01, SEC-01, CAP-01, MIG-03, VER-02, VER-07, HLD-D12, HLD-D17 |
| `1-§26-6` | SCN | C-ACC | DH | H | RT | RUN |  | LOC-05, ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-DLOC |
| `1-§26-7` | SCN | C-ACC | DI | H | NEG | RUN |  | DLV-03, ACC-01, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-8` | SCN | C-ACC | DI | H | NEG | RUN |  | DLV-03, ACC-01, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-9` | SCN | C-ACC | DH | H | NEG | RUN |  | LOC-05, ACC-01, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-DLOC |
| `1-§26-10` | SCN | C-ACC | DH | M | RT; NEG | NOW |  | ACC-01, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-11` | SCN | C-ACC | DH | H | RT; IDEM | RUN |  | ACC-01, SEC-01, IDM-01, CAP-01, MIG-03, VER-02, VER-05, VER-07, HLD-D12, HLD-D16, HLD-DTX |
| `1-§26-12a` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-01, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13 |
| `1-§26-13` | SCN | C-ACC | DH | M | NEG | NOW |  | ACC-01, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D13 |
| `1-§26-14` | SCN | C-ACC | DH | M | IDEM | RUN |  | ACC-01, SEC-01, IDM-01, CAP-01, VER-05, VER-07, HLD-D12, HLD-D13 |
| `1-§28-1` | PRIN | C-OFD | DA | L | INSP | NOW |  | PRN-01, VER-04 |
| `1-§31-1` | GATE | C-ACC | DA | L | GATE | NOW |  | ACC-01, MIG-04, VER-07 |
| `1-§31-2` | GATE | C-ACC | DA | L | GATE | NOW |  | ACC-01, MIG-04, VER-07 |
| `6-§1-1` | EXP | C-HR | DA | L | EXP | NOW |  | PRN-02, VER-06 |
| `6-§2-1` | NARR | C-HR | DA | L | EXP | NOW |  | PRN-02, VER-06 |
| `6-§3-1` | OBL | C-HR | DH | M | RT | NOW |  | HR-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-2` | OBL | C-HR | DH | M | RT | NOW |  | HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-3` | OBL | C-HR | DH | M | RT | RUN |  | HR-04, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DSCH |
| `6-§3-4` | OBL | C-HR | DH | H | RT | RUN |  | ATT-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `6-§3-5` | OBL | C-HR | DH | M | RT | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-6` | OBL | C-HR | HG | H | RT | DOC |  | PAY-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLEG |
| `6-§3-7` | OBL | C-HR | DH | M | RT | NOW |  | HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-8` | OBL | C-HR | DH | M | RT | NOW |  | HR-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§3-9` | OBL | C-HR | DH | M | RT | NOW |  | HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15 |
| `6-§4-1` | OBL | C-HR | DH | M | RT | NOW |  | HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-2` | OBL | C-HR | DH | M | RT | NOW |  | HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-3` | OBL | C-HR | DH | H | RT | NOW |  | HR-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D14, HLD-DTX |
| `6-§4-4` | OBL | C-HR | DH | M | RT | NOW |  | HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-5` | OBL | C-HR | DH | M | RT | NOW |  | HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15 |
| `6-§4-6` | OBL | C-HR | DH | M | RT | NOW |  | HR-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§4-7` | NEG | C-HR | DH | M | NEG | NOW |  | HR-03, SEC-01, SEC-02, SEC-03, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§5-1` | OBL | C-ATT | DH | M | RT | NOW |  | ATT-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§5-2` | EX | C-ATT | HG | H | RT (QR + point-in-time geofence per D… | RUN |  | ATT-02, LOC-05, SEC-01, CAP-01, VER-02, HLD-D12, HLD-DLOC, HLD-DC14 |
| `6-§5-3` | RULE | C-ATT | DH | H | NEG | RUN |  | ATT-03, LOC-05, SEC-02, VER-03, HLD-DLOC |
| `6-§5-4` | NEG | C-ATT | DH | H | NEG | RUN |  | ATT-03, LOC-05, SEC-02, ERR-01, NEG-01, VER-03, HLD-DLOC |
| `6-§5-5` | RULE | C-ATT | DH | H | INSP | RUN |  | ATT-03, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `6-§6-1` | OBL | C-ATT | DH | M | RT | NOW |  | ROS-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `6-§6-2` | RULE | C-ATT | DH | M | INSP | NOW |  | ROS-01, SEC-02, VER-04, HLD-D14 |
| `6-§6-3` | NEG | C-ATT | DH | M | NEG | NOW |  | ROS-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14 |
| `6-§7-1` | RULE | C-ATT | DH | M | INSP | NOW |  | CTX-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `6-§7-2` | OBL | C-ATT | DH | M | RT | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-3` | OBL | C-ATT | DH | M | RT | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-4` | OBL | C-ATT | DH | M | RT | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-5` | OBL | C-ATT | DH | M | RT | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§7-6` | OBL | C-ATT | DH | M | INSP | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-D12 |
| `6-§8-1` | PRIN | C-PAY | DH | M | NEG | NOW |  | PAY-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§8-2` | OBL | C-PAY | HG | H | RT | DOC |  | PAY-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLEG |
| `6-§8-3` | NEG | C-PAY | DH | M | NEG | NOW |  | PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-4` | NEG | C-PAY | DH | M | NEG | NOW |  | PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-5` | NEG | C-PAY | DH | M | NEG | NOW |  | PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-6` | NEG | C-PAY | DH | M | NEG | NOW |  | PAY-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§8-7` | OBL | C-PAY | DH | M | RT; INSP | NOW |  | PAY-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-04, HLD-D12 |
| `6-§9-1` | OBL | C-HRF | DH | M | RT | RUN |  | HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-2` | OBL | C-HRF | DH | M | RT | RUN |  | HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-3` | OBL | C-HRF | DH | M | RT | RUN |  | HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-4` | OBL | C-HRF | DH | M | RT | RUN |  | HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-5` | OBL | C-HRF | DH | M | RT | RUN |  | HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-6` | OBL | C-HRF | DH | M | RT | RUN |  | HAI-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `6-§9-7` | NEG | C-HRF | DH | M | NEG | RUN |  | HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-8` | NEG | C-HRF | DH | M | NEG | RUN |  | HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-9` | NEG | C-HRF | DH | M | NEG | RUN |  | HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-10` | NEG | C-HRF | DH | M | NEG | RUN |  | HAI-02, SEC-02, SEC-03, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§9-11` | NEG | C-HRF | DH | M | NEG | RUN |  | HAI-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `6-§10-1a` | RULE | C-HRF | DH | M | RT | NOW |  | HFD-01, SEC-01, SEC-02, CAP-01, VER-02, HLD-D12, HLD-D13 |
| `6-§10-2` | NEG | C-HRF | DH | M | NEG | NOW |  | HFD-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§11-1` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `6-§11-2` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `6-§11-3` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-02, VER-04, HLD-D13 |
| `6-§11-4` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-02, VER-04, HLD-D13 |
| `6-§11-5` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-02, VER-04, HLD-D14 |
| `6-§11-6` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-02, VER-04, HLD-D15 |
| `6-§11-7` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-02, VER-04, HLD-D15 |
| `6-§11-8` | RULE | C-HRF | DH | H | INSP | RUN |  | HFD-01, LOC-01, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `6-§11-9` | RULE | C-HRF | DH | M | INSP | NOW |  | HFD-01, SEC-01, SEC-02, AUD-01, CAP-01, VER-04, HLD-D12 |
| `6-§12-1` | PRIN | C-HRF | DH | M | NEG | NOW |  | HPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-2` | PRIN | C-HRF | DH | M | NEG | NOW |  | HPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-3` | PRIN | C-HRF | DH | M | NEG | NOW |  | HPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-4` | PRIN | C-HRF | DH | H | NEG | RUN |  | HPR-01, LOC-05, SEC-01, CAP-01, VER-03, HLD-D12, HLD-DLOC |
| `6-§12-5` | PRIN | C-HRF | DH | M | NEG | NOW |  | HPR-01, SEC-01, AUD-01, CAP-01, VER-03, HLD-D12 |
| `6-§12-6` | NEG | C-HRF | DH | H | NEG | RUN |  | HPR-01, LOC-05, SEC-02, ERR-01, NEG-01, VER-03, HLD-DLOC |
| `6-§12-7` | NEG | C-HRF | DH | M | NEG | NOW |  | HPR-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `6-§12-8` | RULE | C-HRF | DH | M | NEG | NOW |  | HPR-01, SEC-01, SEC-02, CAP-01, VER-03, HLD-D12, HLD-D19 |
| `6-§13-1` | OBL | C-HRF | DH | M | IDEM | NOW |  | HEX-01, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `6-§13-2` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-3` | OBL | C-HRF | DH | H | RT | RUN |  | HEX-01, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-DLOC |
| `6-§13-4` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-5` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-6` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-7` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-8` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-9` | OBL | C-HRF | DH | M | IDEM | NOW |  | HEX-01, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `6-§13-10` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§13-11` | OBL | C-HRF | DH | M | RT | NOW |  | HEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `6-§14-1` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-2` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-3` | SCN | C-ACC | DH | H | RT; NEG | RUN |  | LOC-05, ACC-02, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-DLOC |
| `6-§14-4` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D14 |
| `6-§14-5` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-6` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-02, SEC-01, CAP-01, VER-02, VER-07, HLD-D12 |
| `6-§14-7` | SCN | C-ACC | DH | M | NEG | NOW |  | ACC-02, SEC-01, CAP-01, VER-03, VER-07, HLD-D12 |
| `6-§14-8` | SCN | C-ACC | DH | M | RT; INSP | NOW |  | ACC-02, SEC-01, CAP-01, VER-02, VER-04, VER-07, HLD-D12 |
| `6-§14-9` | SCN | C-ACC | DH | M | EXP | NOW |  | ACC-02, SEC-01, CAP-01, VER-06, VER-07, HLD-D12, HLD-D13 |
| `6-§14-10` | SCN | C-ACC | DH | M | NEG | NOW |  | ACC-02, SEC-01, CAP-01, VER-03, VER-07, HLD-D12 |
| `6-§17-1` | GATE | C-ACC | DA | L | GATE | NOW |  | ACC-02, MIG-04, VER-07 |
| `S11-L443-1` | OBL | C-PAY | HG | H | RT: a record is created from each of… | DOC |  | OVT-01, OVT-02, OVT-04, OVT-05, LOC-05, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-05, HLD-D12, HLD-DSCH, HLD-DLOC, HLD-DLEG |
| `S11-L443-2` | OBL | C-PAY | DH | M | RT: authorized review; NEG: unauthori… | NOW |  | OVT-01, OVT-03, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-03, HLD-D12 |
| `S11-L443-3` | OBL | C-PAY | HG | H | RT: correction and dispute preserve t… | NOW |  | OVT-01, OVT-04, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-03, VER-05, HLD-D12, HLD-DLEG |
| `S11-L443-4` | OBL | C-PAY | HG | H | RT: role-scoped and own-record views;… | NOW |  | OVT-01, OVT-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-03, HLD-D12, HLD-DLEG |
| `S11-L443-5` | OBL | C-PAY | DH | M | RT: each step attributed to actor, ro… | NOW |  | OVT-01, OVT-04, SEC-01, SEC-02, AUD-01, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, VER-04, HLD-D12 |
| `16-§1-1` | EXP | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§1-2` | EXP | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§2-1` | NARR | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§2-2` | NARR | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§2-3` | NARR | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§2-4` | NARR | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§2-5` | NARR | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§2-6` | NARR | C-CMP | DA | L | EXP | NOW |  | PRN-03, VER-06 |
| `16-§3-1` | PRIN | C-CMP | DA | L | INSP | NOW |  | PRN-03, VER-04 |
| `16-§3-2` | PRIN | C-CMP | DA | L | INSP | NOW |  | PRN-03, VER-04 |
| `16-§3-3` | PRIN | C-CMP | DA | L | INSP | NOW |  | PRN-03, VER-04 |
| `16-§3-4` | PRIN | C-CMP | DA | L | INSP | NOW |  | PRN-03, VER-04 |
| `16-§3-5` | PRIN | C-CMP | DA | L | INSP | NOW |  | PRN-03, VER-04 |
| `16-§3-6` | NEG | C-CMP | DA | L | NEG | NOW |  | PRN-03, SEC-02, ERR-01, NEG-01, VER-03 |
| `16-§3-7` | PRIN | C-CMP | DA | L | INSP | NOW |  | PRN-03, VER-04 |
| `16-§4-1` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-2` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-3` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-4` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-5` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-6` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-7` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, CAB-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-8` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-9` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-10` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-11` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-12` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-13` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `16-§4-14` | RULE | C-CMP | DA | L | INSP | NOW |  | CMP-01, SEC-02, VER-04 |
| `16-§5-1` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-2` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-3` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-4` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `16-§5-5a` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§5-6` | RULE | C-CMP | DH | M | INSP | NOW |  | CMP-02, SEC-02, VER-04, HLD-D14 |
| `16-§5-7` | NEG | C-CMP | DH | M | NEG | NOW |  | CMP-02, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14 |
| `16-§6-1` | OBL | C-CMP | DH | M | RT | RUN |  | CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-2` | OBL | C-CMP | DH | M | RT | RUN |  | CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-3` | OBL | C-CMP | DH | M | RT | RUN |  | CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-4` | OBL | C-CMP | DH | M | RT | RUN |  | CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-5` | OBL | C-CMP | DH | M | RT | RUN |  | CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-6` | OBL | C-CMP | DH | M | RT | RUN |  | CMP-03, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-DAI |
| `16-§6-7` | NEG | C-CMP | DH | M | NEG | RUN |  | CMP-03, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-D14, HLD-DAI |
| `16-§7-1` | RULE | C-REN | DH | M | INSP | RUN |  | REM-01, SEC-02, VER-04, HLD-D15, HLD-DSCH |
| `16-§7-2` | OBL | C-REN | DH | M | RT | RUN |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-3` | RULE | C-REN | DA | L | INSP | NOW |  | REM-01, SEC-02, VER-04 |
| `16-§7-4` | OBL | C-REN | DH | M | RT | RUN |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-5` | OBL | C-REN | DH | M | RT | RUN |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-6` | OBL | C-REN | DH | M | RT | RUN |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-7` | OBL | C-REN | DH | M | RT | RUN |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§7-8` | OBL | C-REN | DH | M | RT | RUN |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15, HLD-DSCH |
| `16-§8-1` | OBL | C-REN | DH | M | RT | NOW |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-2` | OBL | C-REN | DH | M | RT | NOW |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-3` | OBL | C-REN | DH | M | RT | NOW |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-4` | OBL | C-REN | DH | M | RT | NOW |  | RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-5` | OBL | C-REN | DH | M | RT | NOW |  | RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-6` | OBL | C-REN | DH | M | RT | NOW |  | RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-7` | OBL | C-REN | DH | M | RT | NOW |  | RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-8` | OBL | C-REN | DH | M | RT | NOW |  | RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-9` | OBL | C-REN | DH | M | RT | NOW |  | RNW-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-10` | OBL | C-REN | DH | M | RT | NOW |  | REM-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14, HLD-D15 |
| `16-§8-11` | NEG | C-REN | DH | M | NEG | NOW |  | RNW-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D14, HLD-D15 |
| `16-§9-1` | RULE | C-REN | DH | M | INSP | NOW |  | CAB-01, CAB-02, SEC-02, VER-04, HLD-D14 |
| `16-§9-2` | OBL | C-REN | DH | M | RT | NOW |  | CAB-01, CAB-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§10-1` | OBL | C-CMF | DH | M | NEG | NOW |  | CAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `16-§10-2` | OBL | C-CMF | DH | M | NEG | NOW |  | CAU-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-PQ14 |
| `16-§10-3` | NEG | C-CMF | DH | M | NEG | NOW |  | CAU-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-PQ14 |
| `16-§10-4` | NEG | C-CMF | DH | M | NEG | NOW |  | CAU-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12, HLD-D19 |
| `16-§11-1` | OBL | C-REN | DH | M | RT | NOW |  | CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§11-2` | OBL | C-REN | DH | M | RT | NOW |  | CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-PQ14 |
| `16-§11-3` | OBL | C-REN | DH | M | RT | NOW |  | CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14, HLD-PQ14 |
| `16-§11-4` | OBL | C-REN | DH | M | RT | NOW |  | CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§11-5` | OBL | C-REN | DH | M | RT | NOW |  | CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-D14 |
| `16-§11-6a` | RULE | C-REN | DH | M | RT | NOW |  | CCH-01, SEC-02, VER-02, HLD-D13, HLD-D14 |
| `16-§11-7` | NEG | C-REN | DH | M | NEG; IDEM | NOW |  | CCH-01, SEC-02, IDM-01, ERR-01, NEG-01, VER-03, VER-05, HLD-D13, HLD-D14 |
| `16-§12-1` | OBL | C-REN | DH | M | EXP | NOW |  | CCH-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-06, HLD-D13 |
| `16-§12-2` | RULE | C-REN | DH | M | EXP | NOW |  | CCH-01, SEC-02, VER-06, HLD-D13 |
| `16-§13-1` | CONS | C-REN | DH | M | RT | NOW |  | CCO-01, RDR-01, VER-02, HLD-D15 |
| `16-§13-2` | CONS | C-REN | DH | M | RT | NOW |  | CCO-01, RDR-01, VER-02, HLD-D15, HLD-PQ14 |
| `16-§13-3` | CONS | C-REN | DH | M | RT | NOW |  | CCO-01, RDR-01, VER-02, HLD-D15 |
| `16-§13-4` | NEG | C-REN | DH | M | NEG | NOW |  | CCO-01, SEC-02, ERR-01, RDR-01, NEG-01, VER-03, HLD-D15 |
| `16-§14-1` | RULE | C-REN | DH | M | INSP | NOW |  | CNT-01, SEC-02, VER-04, HLD-D15 |
| `16-§14-2` | OBL | C-REN | DH | M | RT | NOW |  | CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-3` | OBL | C-REN | DH | M | RT | NOW |  | CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-4` | OBL | C-REN | DH | M | RT | NOW |  | CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-5` | OBL | C-REN | DH | M | RT | NOW |  | CNT-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D15 |
| `16-§14-6` | NEG | C-REN | DH | M | NEG | NOW |  | CNT-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D15 |
| `16-§15-1` | OBL | C-CMF | DH | M | RT | RUN |  | CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-2` | OBL | C-CMF | DH | M | RT | RUN |  | CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-3` | OBL | C-CMF | DH | M | RT | RUN |  | CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-4` | OBL | C-CMF | DH | M | RT | RUN |  | CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-5` | OBL | C-CMF | DH | M | RT | RUN |  | CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-6` | OBL | C-CMF | DH | M | RT | RUN |  | CLG-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DAI |
| `16-§15-7` | NEG | C-CMF | DH | M | NEG | RUN |  | CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-8` | NEG | C-CMF | DH | M | NEG | RUN |  | CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-9` | NEG | C-CMF | DH | M | NEG | RUN |  | CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-10` | NEG | C-CMF | DH | M | NEG | RUN |  | CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§15-11` | NEG | C-CMF | DH | M | NEG | RUN |  | CLG-01, SEC-02, ERR-01, NEG-01, VER-03, HLD-D13, HLD-DAI |
| `16-§16-1` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-2` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-3` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-4` | OBL | C-CMF | DH | M | IDEM | NOW |  | CEX-01, SEC-01, SEC-02, IDM-01, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-05, HLD-D12 |
| `16-§16-5` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-6` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D15 |
| `16-§16-7` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-8` | OBL | C-CMF | DH | M | NEG | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-03, HLD-D12 |
| `16-§16-9` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-10` | OBL | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, ERR-01, MIG-02, MIG-04, VER-02, HLD-D12 |
| `16-§16-11` | RULE | C-CMF | DH | M | RT | NOW |  | CEX-01, SEC-01, SEC-02, CAP-01, ERR-01, VER-02, HLD-D12 |
| `16-§17-1` | PRIN | C-CMF | DH | M | NEG | NOW |  | CPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `16-§17-2` | PRIN | C-CMF | DH | M | NEG | NOW |  | CPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `16-§17-3` | PRIN | C-CMF | DH | M | NEG | NOW |  | CPR-01, SEC-01, CAP-01, VER-03, HLD-D12, HLD-PQ14 |
| `16-§17-4` | PRIN | C-CMF | DH | M | NEG | NOW |  | CPR-01, SEC-01, CAP-01, VER-03, HLD-D12 |
| `16-§17-5` | PRIN | C-CMF | DH | M | NEG | NOW |  | CPR-01, SEC-01, CAP-01, VER-03, HLD-D12, HLD-D19 |
| `16-§17-6` | RULE | C-CMF | DH | M | INSP | NOW |  | CPR-01, SEC-02, VER-04, HLD-D14 |
| `16-§17-7` | NEG | C-CMF | DH | M | NEG | NOW |  | CPR-01, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `16-§18-1` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-02, VER-04, HLD-D14 |
| `16-§18-2` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-02, VER-04, HLD-D14 |
| `16-§18-3` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-02, VER-04, HLD-D15 |
| `16-§18-4` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-02, VER-04, HLD-D15 |
| `16-§18-5` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12 |
| `16-§18-6` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-02, VER-04, HLD-D14 |
| `16-§18-7` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-02, VER-04, HLD-D13 |
| `16-§18-8` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-02, VER-04, HLD-D13 |
| `16-§18-9` | RULE | C-CMF | DH | M | INSP | NOW |  | CFD-01, SEC-01, SEC-02, AUD-01, CAP-01, VER-04, HLD-D12 |
| `16-§18-10` | NEG | C-CMF | DA | L | NEG | NOW |  | CFD-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `16-§20-1` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D14 |
| `16-§20-2` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D14 |
| `16-§20-3` | SCN | C-ACC | DH | M | RT | RUN |  | ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D15, HLD-DSCH |
| `16-§20-4` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D14 |
| `16-§20-5` | SCN | C-ACC | DH | M | NEG | NOW |  | ACC-03, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D15 |
| `16-§20-6` | SCN | C-ACC | DH | M | NEG | NOW |  | ACC-03, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D14, HLD-PQ14 |
| `16-§20-7a` | SCN | C-ACC | DH | M | RT | NOW |  | ACC-03, SEC-01, CAP-01, VER-02, VER-07, HLD-D12, HLD-D13, HLD-D14, HLD-PQ14 |
| `16-§20-8` | SCN | C-ACC | DH | M | IDEM | NOW |  | ACC-03, SEC-01, IDM-01, CAP-01, VER-05, VER-07, HLD-D12, HLD-D14 |
| `16-§20-9` | SCN | C-ACC | DH | M | RT; NEG | NOW |  | ACC-03, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-D15 |
| `16-§20-10` | SCN | C-ACC | DH | M | NEG | NOW |  | ACC-03, SEC-01, CAP-01, VER-03, VER-07, HLD-D12, HLD-D19 |
| `16-§21-1` | PRIN | C-CMF | DA | L | INSP | NOW |  | PRN-03, VER-04 |
| `16-§23-1` | GATE | C-ACC | DA | L | GATE | NOW |  | ACC-03, MIG-04, VER-07 |
| `22-§16-1` | RULE | C-LOC | DH | M | INSP; NEG | NOW |  | LOC-01, SEC-01, SEC-02, CAP-01, VER-03, VER-04, HLD-D12 |
| `22-§16-2` | NEG | C-LOC | DH | M | NEG | NOW |  | LOC-02, SEC-01, SEC-02, CAP-01, ERR-01, NEG-01, VER-03, HLD-D12 |
| `22-§16-3` | OBL | C-LOC | DH | H | INSP | RUN |  | LOC-03, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-DLOC |
| `22-§16-4` | OBL | C-LOC | DH | H | NEG | RUN |  | LOC-03, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-DLOC |
| `22-§16-5` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-03, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-6` | OBL | C-LOC | HG | H | INSP | RUN |  | LOC-04, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-04, HLD-DLOC, HLD-DLEG |
| `22-§16-7` | OBL | C-LOC | DH | H | NEG | RUN |  | LOC-04, LOC-05, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-DLOC |
| `22-§16-8` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-01, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-9` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-01, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-10` | OBL | C-LOC | DH | H | RT | RUN |  | LOC-01, LOC-05, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-DLOC |
| `22-§16-11` | RULE | C-LOC | DH | H | INSP | RUN |  | LOC-01, LOC-05, SEC-02, VER-04, HLD-DLOC |
| `22-§29-9` | SCN | C-LOC | DH | H | RT; NEG | RUN |  | LOC-01, LOC-05, SEC-01, CAP-01, VER-02, VER-03, VER-07, HLD-D12, HLD-DLOC |
| `17-§4-15` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-1` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-2` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-3` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-4` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-5` | OBL | C-VIEW | DH | M | RT (payroll-support view); RT (export… | NOW |  | PAY-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-6` | OBL | C-VIEW | DH | M | RT; NEG | NOW |  | VW-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, VER-03, HLD-D12, HLD-D17, HLD-DENT |
| `17-§9-7` | NEG | C-VIEW | DH | M | NEG | NOW |  | VW-01, SEC-01, SEC-02, CAP-01, ERR-01, RDR-01, NEG-01, MIG-03, VER-03, HLD-D12, HLD-D17 |
| `17-§10-1` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-2` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-3` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-4` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D17, HLD-DENT |
| `17-§10-5` | CONS | C-VIEW | DH | M | RT | RUN |  | VW-02, SEC-01, CAP-01, RDR-01, MIG-03, VER-02, HLD-D12, HLD-D16, HLD-D17, HLD-DENT |
| `17-§10-6` | OBL | C-VIEW | DH | M | RT | NOW |  | VW-02, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, RDR-01, MIG-02, MIG-03, MIG-04, VER-02, HLD-D12, HLD-D14, HLD-D17, HLD-DENT |
| `17-§10-7` | NEG | C-VIEW | DH | M | NEG | NOW |  | VW-02, SEC-01, SEC-02, CAP-01, ERR-01, RDR-01, NEG-01, MIG-03, VER-03, HLD-D12, HLD-D17 |
| `24-§18-4` | SCN | C-ATT | DH | M | RT | RUN |  | ROS-01, VER-02, VER-07, HLD-D13, HLD-D14, HLD-DAI |
| `24-§21-6` | OBL | C-ATT | DH | M | RT | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `9-§12-7` | RULE | C-HRF | DH | M | EXP | NOW |  | HFD-01, SEC-02, VER-06, HLD-D13 |
| `9-§12-9` | RULE | C-ORD | DH | M | EXP | NOW |  | ORD-01, SEC-02, VER-06, HLD-D13 |
| `9-§12-12` | RULE | C-REN | DH | M | EXP | NOW |  | CCH-01, SEC-02, VER-06, HLD-D13 |
| `10-§13-5` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `10-§13-7` | OBL | C-ATT | DH | M | RT; FRV-B | NOW |  | CTX-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D13 |
| `12-§4-4` | OBL | C-ORD | DH | M | RT | RUN |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `12-§7-7` | OBL | C-ORD | DH | M | RT | RUN |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D13, HLD-DV |
| `3-§9-3` | OBL | C-CUS | DH | M | RT | NOW |  | CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `3-§11-6` | OBL | C-OAU | DH | M | NEG | NOW |  | OAU-02, SEC-01, SEC-02, SEC-03, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-03, HLD-D12, HLD-D14 |
| `3-§15-7` | RULE | C-CUS | DH | M | INSP | NOW |  | CUS-01, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12, HLD-D14 |
| `3-§15-12` | RULE | C-PRF | DH | H | INSP; IDEM | RUN |  | COD-02, SEC-02, IDM-01, MIG-03, VER-04, VER-05, HLD-D14, HLD-D16, HLD-DTX |
| `3-§15-13` | RULE | C-HR | DH | M | INSP | NOW |  | HR-02, SEC-01, SEC-02, CAP-01, VER-04, HLD-D12, HLD-D14 |
| `5-§4-11` | OBL | C-ATT | DH | M | RT | NOW |  | ROS-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§4-12` | OBL | C-ORD | DH | M | RT | NOW |  | ORD-01, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§4-13` | OBL | C-CMP | DH | M | RT | NOW |  | CMP-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§6-10` | OBL | C-PRF | DH | M | RT | RUN |  | COD-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§6-12` | OBL | C-CMP | DH | M | RT | NOW |  | CAB-01, CAB-02, SEC-02, MIG-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D14 |
| `5-§7-5` | SCN | C-ATT | DH | M | RT | NOW |  | ROS-01, VER-02, VER-07, HLD-D14 |
| `5-§7-6` | SCN | C-ORD | DH | M | RT | NOW |  | ORD-02, VER-02, VER-07, HLD-D14 |
| `5-§7-7` | SCN | C-CMP | DH | M | RT | NOW |  | CMP-02, VER-02, VER-07, HLD-D14, HLD-D15 |
| `BP-§10.3-S2` | OBL | C-CUS | DH | M | RT | NOW |  | CUS-01, SEC-01, SEC-02, MIG-01, CAP-01, OBJ-01, CMD-01, MIG-02, MIG-04, VER-02, HLD-D12, HLD-D14 |
| `BP-§5.5-p1` | RULE | C-ACC | DA | L | GATE | NOW |  | ACC-05, SEC-02 |
| `BP-§5.5-p2` | RULE | C-ACC | DA | L | GATE | NOW |  | ACC-05, SEC-02 |
| `BP-§10.7-W` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§10.7-A1` | WORK | C-ORD | DA | L | RT | NOW |  | ORD-01, CMD-01, VER-02 |
| `BP-§10.7-A2` | WORK | C-ORD | DA | L | RT | NOW |  | ORD-04, CMD-01, VER-02 |
| `BP-§10.7-A3` | WORK | C-AVL | DA | H | RT | RUN |  | AVL-01, STK-01, STK-04, CMD-01, VER-02 |
| `BP-§10.7-A4` | WORK | C-AVL | DA | H | RT | RUN |  | AVL-02, STK-01, STK-04, CMD-01, VER-02 |
| `BP-§10.7-A5` | WORK | C-DLV | DA | L | RT | NOW |  | DLV-01, CMD-01, VER-02 |
| `BP-§10.7-A6` | WORK | C-DLV | DI | H | RT | RUN |  | DLV-03, EXT-01, EXT-03, EXT-04, EXT-05, EXT-06, EXT-07, EXT-08, CMD-01, VER-02 |
| `BP-§10.7-A7` | WORK | C-PRF | DA | L | RT | RUN |  | PRF-01, CMD-01, VER-02 |
| `BP-§10.7-A8` | NEG | C-LOC | DA | L | NEG | NOW |  | LOC-02, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-A9` | NEG | C-PRF | DA | L | NEG | NOW |  | PRF-04, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-A10` | WORK | C-PRF | DA | L | RT | RUN |  | COD-02, CMD-01, VER-02 |
| `BP-§10.7-A11` | NEG | C-CUS | DA | L | NEG | NOW |  | PRN-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-AS1` | FRV | C-ACC | DA | H | FRV-A | RUN |  | ACC-04 |
| `BP-§10.7-B1` | WORK | C-HR | DA | L | RT | NOW |  | HR-02, CMD-01, VER-02 |
| `BP-§10.7-B2` | WORK | C-ATT | DA | L | RT | NOW |  | CTX-01, CMD-01, VER-02 |
| `BP-§10.7-B3` | WORK | C-HR | DA | L | RT | NOW |  | HR-03, SEC-03, CMD-01, VER-02 |
| `BP-§10.7-B4` | NEG | C-LOC | DA | L | NEG | NOW |  | LOC-02, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-B5` | WORK | C-ATT | DA | L | RT | NOW |  | CTX-01, CMD-01, VER-02 |
| `BP-§10.7-B6` | WORK | C-HRF | DA | L | RT | NOW |  | HFD-01, CMD-01, VER-02 |
| `BP-§10.7-B7` | NEG | C-PAY | DA | L | NEG | NOW |  | PAY-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-B8` | NEG | C-PAY | DA | L | NEG | NOW |  | PAY-01, SEC-02, ERR-01, NEG-01, VER-03 |
| `BP-§10.7-BS1` | FRV | C-ACC | DA | H | FRV-B | RUN |  | ACC-04 |
| `BP-§10.7-C1` | WORK | C-CMP | DA | L | RT | NOW |  | CMP-02, CMD-01, VER-02 |
| `BP-§10.7-C2` | WORK | C-REN | DA | L | RT | NOW |  | REM-01, CMD-01, VER-02 |
| `BP-§10.7-C3` | WORK | C-REN | DA | L | RT | NOW |  | CAB-01, CMD-01, VER-02 |
| `BP-§10.7-C4` | WORK | C-CMF | DA | L | RT | NOW |  | CLG-01, CMD-01, VER-02 |
| `BP-§10.7-C5` | WORK | C-CMF | DA | L | RT | NOW |  | CPR-01, CMD-01, VER-02 |
| `BP-§10.7-CS1` | FRV | C-ACC | DA | H | FRV-C | RUN |  | ACC-04 |
| `BP-§10.7-X` | EXP | C-ACC | DA | L | EXP | NOW |  | ACC-04, VER-06 |
| `BP-§11-p1` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b1` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b2` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b3` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b4` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b5` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b6` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b7` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-b9` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-p3` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-p4` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§11-p5` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-p1` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-T` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b1` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b2` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b3` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b4` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b5` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b6` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b7` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b8` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b9` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§13-b10` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§15-p2` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§15-p3` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `BP-§16-p2` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `GPCV-R1` | CONS | C-ACC | DA | L | GATE | NOW |  | ACC-05 |
| `GPCV-R6` | CONS | C-ACC | DA | L | GATE | NOW |  | ACC-05 |
| `GPCV-R16` | CONS | C-ACC | DA | L | GATE | NOW |  | ACC-05 |
| `GPCV-§8-3` | RULE | C-HR | DA | L | INSP | NOW |  | PRN-02, SEC-02, VER-04 |
| `GPCV-§8-4` | RULE | C-ACC | DA | L | INSP | NOW |  | ACC-05, SEC-02, VER-04 |
| `GPCV-§8-5` | RULE | C-CUS | DA | L | INSP | NOW |  | PRN-01, SEC-02, VER-04 |

### 21.3 EIS requirement to FCTM rows

| Requirement | Basis | Rows | FCTM rows |
|---|---|---:|---|
| `EIS18-PRN-01` | PR | 24 | `1-§1-1` to `-3`, `1-§2-1` to `-8`, `1-§3-1` to `-10`, `1-§28-1`, `BP-§10.7-A11`, `GPCV-§8-5` |
| `EIS18-CUS-01` | PR/AF | 8 | `1-§5-23`, `1-§6-1`, `1-§22-2`, `1-§22-15`, `1-§23-2`, `3-§9-3`, `3-§15-7`, `BP-§10.3-S2` |
| `EIS18-CUS-02` | PR | 5 | `1-§5-1`, `1-§6-2` to `-5` |
| `EIS18-CUS-03` | PR/TR | 4 | `1-§6-6`, `1-§6-7`, `1-§9-15`, `1-§24-1` |
| `EIS18-CUS-04` | PR/TR | 6 | `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§22-3` |
| `EIS18-CUS-05` | TR | 5 | `1-§5-26`, `1-§9-8`, `1-§9-16`, `1-§22-11`, `1-§24-4` |
| `EIS18-CUS-06` | PR | 5 | `1-§5-24`, `1-§5-25`, `1-§5-27`, `1-§5-28`, `1-§5-30` |
| `EIS18-OAU-01` | PR/AF | 7 | `1-§5-2` to `-8` |
| `EIS18-OAU-02` | PR | 7 | `1-§5-9` to `-14`, `3-§11-6` |
| `EIS18-ORD-01` | PR | 20 | `1-§8-1`, `1-§8-6` to `-10`, `1-§18-7`, `1-§19-1` to `-5`, `1-§22-13`, `1-§23-5a`, `9-§12-9`, `10-§13-5`, `12-§4-4`, `12-§7-7`, `5-§4-12`, `BP-§10.7-A1` |
| `EIS18-ORD-02` | PR/AF | 3 | `1-§8-11`, `1-§8-12`, `5-§7-6` |
| `EIS18-ORD-03` | PR/TR | 15 | `1-§9-1` to `-12`, `1-§22-1`, `1-§22-4`, `1-§22-5` |
| `EIS18-ORD-04` | PR | 8 | `1-§9-13`, `1-§9-14`, `1-§9-17` to `-19`, `1-§21-8`, `1-§24-2`, `BP-§10.7-A2` |
| `EIS18-ORD-05` | AF | 3 | `1-§20-1`, `1-§20-2`, `1-§23-4` |
| `EIS18-AVL-01` | PR/AF | 4 | `1-§10-2`, `1-§10-9`, `1-§23-7`, `BP-§10.7-A3` |
| `EIS18-AVL-02` | PR/TR | 10 | `1-§10-1`, `1-§10-3` to `-8`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A4` |
| `EIS18-STK-01` | PR/TR | 10 | `1-§10-1`, `1-§10-3` to `-7`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A3`, `BP-§10.7-A4` |
| `EIS18-STK-02` | PR/TR | 4 | `1-§10-1`, `1-§10-8`, `1-§24-3`, `1-§24-8` |
| `EIS18-STK-03` | PR/UQ | 2 | `1-§10-9`, `1-§24-3` |
| `EIS18-DLV-01` | PR/TR | 7 | `1-§11-1` to `-4`, `1-§22-6`, `1-§22-8`, `BP-§10.7-A5` |
| `EIS18-DLV-02` | PR/TR | 10 | `1-§12-1` to `-7`, `1-§22-7`, `1-§24-5`, `1-§24-7` |
| `EIS18-DLV-03` | PR/TR | 19 | `1-§5-15` to `-22`, `1-§13-1`, `1-§13-2`, `1-§13-4` to `-9`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-DLV-04` | TR/PD | 2 | `1-§5-18`, `1-§13-3` |
| `EIS18-PRF-01` | PR/TR | 8 | `1-§15-1`, `1-§15-2`, `1-§15-7`, `1-§15-8`, `1-§21-10`, `1-§22-9`, `1-§24-11`, `BP-§10.7-A7` |
| `EIS18-PRF-02` | TR | 2 | `1-§15-3`, `1-§15-5` |
| `EIS18-PRF-03` | UQ | 1 | `1-§15-4` |
| `EIS18-PRF-04` | PR | 3 | `1-§15-9`, `1-§15-10`, `BP-§10.7-A9` |
| `EIS18-COD-01` | PR/TR | 6 | `1-§15-6`, `1-§16-1` to `-3`, `1-§22-10`, `1-§24-12` |
| `EIS18-COD-02` | PR/AF | 8 | `1-§16-4` to `-6`, `1-§23-12`, `1-§24-14`, `3-§15-12`, `5-§6-10`, `BP-§10.7-A10` |
| `EIS18-OFD-01` | AF/TR | 10 | `1-§17-1` to `-9`, `1-§23-8` |
| `EIS18-OFD-02` | PR | 7 | `1-§21-1` to `-7` |
| `EIS18-OFD-03` | PR | 4 | `1-§21-9`, `1-§21-11` to `-13` |
| `EIS18-OFD-04` | TR | 2 | `1-§22-12`, `1-§22-14` |
| `EIS18-OFD-05` | PR/TR | 5 | `1-§24-6`, `1-§24-9`, `1-§24-10`, `1-§24-13`, `1-§24-15` |
| `EIS18-OFD-06` | AF | 6 | `1-§23-1`, `1-§23-3`, `1-§23-6`, `1-§23-9` to `-11` |
| `EIS18-OFD-07` | PR | 8 | `1-§25-1` to `-8` |
| `EIS18-STK-04` | TR/UQ | 11 | `1-§10-1`, `1-§10-3` to `-7`, `1-§10-9`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A3`, `BP-§10.7-A4` |
| `EIS18-PRN-02` | PR | 3 | `6-§1-1`, `6-§2-1`, `GPCV-§8-3` |
| `EIS18-HR-01` | TR | 2 | `6-§3-1`, `6-§3-8` |
| `EIS18-HR-02` | PR/AF | 6 | `6-§3-2`, `6-§4-1` to `-3`, `3-§15-13`, `BP-§10.7-B1` |
| `EIS18-HR-03` | PR | 7 | `6-§3-7`, `6-§3-9`, `6-§4-4` to `-7`, `BP-§10.7-B3` |
| `EIS18-HR-04` | TR | 1 | `6-§3-3` |
| `EIS18-ATT-01` | PR/TR | 2 | `6-§3-4`, `6-§5-1` |
| `EIS18-ATT-02` | PR/TR | 1 | `6-§5-2` |
| `EIS18-ATT-03` | PR/TR | 3 | `6-§5-3` to `-5` |
| `EIS18-ROS-01` | PR/AF | 6 | `6-§6-1` to `-3`, `24-§18-4`, `5-§4-11`, `5-§7-5` |
| `EIS18-CTX-01` | PR/TR | 11 | `6-§3-5`, `6-§7-1` to `-6`, `24-§21-6`, `10-§13-7`, `BP-§10.7-B2`, `BP-§10.7-B5` |
| `EIS18-PAY-01` | PR | 8 | `6-§8-1`, `6-§8-3` to `-7`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EIS18-PAY-02` | PR | 1 | `17-§9-5` |
| `EIS18-PAY-03` | UQ | 2 | `6-§3-6`, `6-§8-2` |
| `EIS18-OVT-01` | PR/TR | 5 | `S11-L443-1` to `-5` |
| `EIS18-OVT-02` | PR/TR | 1 | `S11-L443-1` |
| `EIS18-OVT-03` | PR/TR | 1 | `S11-L443-2` |
| `EIS18-OVT-04` | PR/TR | 3 | `S11-L443-1`, `S11-L443-3`, `S11-L443-5` |
| `EIS18-OVT-05` | PR/TR | 2 | `S11-L443-1`, `S11-L443-4` |
| `EIS18-HAI-01` | PR | 6 | `6-§9-1` to `-6` |
| `EIS18-HAI-02` | PR | 5 | `6-§9-7` to `-11` |
| `EIS18-HFD-01` | AF | 13 | `6-§10-1a`, `6-§10-2`, `6-§11-1` to `-9`, `9-§12-7`, `BP-§10.7-B6` |
| `EIS18-HPR-01` | PR | 8 | `6-§12-1` to `-8` |
| `EIS18-HEX-01` | PR/TR | 11 | `6-§13-1` to `-11` |
| `EIS18-PRN-03` | PR | 16 | `16-§1-1`, `16-§1-2`, `16-§2-1` to `-6`, `16-§3-1` to `-7`, `16-§21-1` |
| `EIS18-CMP-01` | PR/TR | 14 | `16-§4-1` to `-14` |
| `EIS18-CMP-02` | PR/AF | 10 | `16-§5-1` to `-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `5-§4-13`, `5-§7-7`, `BP-§10.7-C1` |
| `EIS18-CMP-03` | PR/TR | 7 | `16-§6-1` to `-7` |
| `EIS18-REM-01` | PR/AF | 13 | `16-§7-1` to `-8`, `16-§8-1` to `-3`, `16-§8-10`, `BP-§10.7-C2` |
| `EIS18-RNW-01` | PR/TR | 7 | `16-§8-4` to `-9`, `16-§8-11` |
| `EIS18-CAB-01` | AF | 4 | `16-§9-1`, `16-§9-2`, `5-§6-12`, `BP-§10.7-C3` |
| `EIS18-CCH-01` | PR/AF | 10 | `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `9-§12-12` |
| `EIS18-CCO-01` | AF | 4 | `16-§13-1` to `-4` |
| `EIS18-CNT-01` | PR/AF | 6 | `16-§14-1` to `-6` |
| `EIS18-CAU-01` | PR/AF | 4 | `16-§10-1` to `-4` |
| `EIS18-CLG-01` | PR | 12 | `16-§15-1` to `-11`, `BP-§10.7-C4` |
| `EIS18-CEX-01` | PR/TR | 11 | `16-§16-1` to `-11` |
| `EIS18-CPR-01` | PR | 8 | `16-§17-1` to `-7`, `BP-§10.7-C5` |
| `EIS18-CFD-01` | AF | 10 | `16-§18-1` to `-10` |
| `EIS18-CAB-02` | TR/UQ | 4 | `16-§4-7`, `16-§9-1`, `16-§9-2`, `5-§6-12` |
| `EIS18-LOC-01` | PR/TR | 11 | `1-§14-1` to `-4`, `6-§11-8`, `22-§16-1`, `22-§16-8` to `-11`, `22-§29-9` |
| `EIS18-LOC-02` | PR | 6 | `1-§14-5` to `-7`, `22-§16-2`, `BP-§10.7-A8`, `BP-§10.7-B4` |
| `EIS18-LOC-03` | PR/TR | 6 | `1-§14-8`, `1-§14-9`, `1-§14-11`, `22-§16-3` to `-5` |
| `EIS18-LOC-04` | PR/TR | 5 | `1-§14-10`, `1-§14-12`, `1-§14-13`, `22-§16-6`, `22-§16-7` |
| `EIS18-LOC-05` | TR | 42 | `1-§5-18`, `1-§5-26`, `1-§13-5`, `1-§14-1` to `-12`, `1-§15-5`, `1-§22-11`, `1-§23-10`, `1-§24-4`, `1-§26-6`, `1-§26-9`, `6-§3-4`, `6-§5-2` to `-5`, `6-§11-8`, `6-§12-4`, `6-§12-6`, `6-§13-3`, `6-§14-3`, `S11-L443-1`, `22-§16-3` to `-11`, `22-§29-9` |
| `EIS18-VW-01` | PR/AF | 7 | `17-§4-15`, `17-§9-1` to `-4`, `17-§9-6`, `17-§9-7` |
| `EIS18-VW-02` | PR/AF | 7 | `17-§10-1` to `-7` |
| `EIS18-ACC-01` | PR | 16 | `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `1-§31-1`, `1-§31-2` |
| `EIS18-ACC-02` | PR | 11 | `6-§14-1` to `-10`, `6-§17-1` |
| `EIS18-ACC-03` | PR | 11 | `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `16-§23-1` |
| `EIS18-ACC-04` | FC | 4 | `BP-§10.7-AS1`, `BP-§10.7-BS1`, `BP-§10.7-CS1`, `BP-§10.7-X` |
| `EIS18-ACC-05` | PR | 34 | `BP-§5.5-p1`, `BP-§5.5-p2`, `BP-§10.7-W`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`, `GPCV-R1`, `GPCV-R6`, `GPCV-R16`, `GPCV-§8-4` |
| `EIS18-EXT-01` | AF | 19 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-EXT-02` | PR/TR | 5 | `1-§12-3`, `1-§15-2`, `1-§24-5`, `1-§24-6`, `1-§25-3` |
| `EIS18-EXT-03` | PR/TR | 21 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§15-2`, `1-§17-4`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-EXT-04` | PR/TR | 23 | `1-§5-15` to `-22`, `1-§12-3`, `1-§13-2` to `-8`, `1-§17-4`, `1-§24-5`, `1-§24-6`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-EXT-05` | PR/TR | 19 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-EXT-06` | PR/TR | 19 | `1-§5-15` to `-22`, `1-§13-2` to `-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-EXT-07` | PR/TR | 22 | `1-§5-15` to `-22`, `1-§12-3`, `1-§13-2` to `-8`, `1-§15-2`, `1-§17-4`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-EXT-08` | UQ | 24 | `1-§5-15` to `-22`, `1-§12-3`, `1-§13-2` to `-8`, `1-§15-2`, `1-§17-4`, `1-§24-5`, `1-§24-6`, `1-§25-3`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6` |
| `EIS18-SEC-01` | AF | 280 | `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§10-1`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-1` to `-4`, `1-§14-6` to `-12`, `1-§15-1` to `-10`, `1-§19-5`, `1-§22-1` to `-15`, `1-§23-1`, `1-§23-2`, `1-§23-11`, `1-§24-1` to `-15`, `1-§25-1` to `-8`, `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-2`, `6-§7-1` to `-6`, `6-§8-1` to `-7`, `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-9`, `6-§12-1` to `-5`, `6-§12-7`, `6-§12-8`, `6-§13-1` to `-11`, `6-§14-1` to `-10`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§10-1` to `-4`, `16-§16-1` to `-11`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-5`, `16-§18-9`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-13`, `BP-§10.3-S2` |
| `EIS18-SEC-02` | AF/TR | 456 | `1-§3-4`, `1-§3-8`, `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§8-1`, `1-§8-6` to `-12`, `1-§9-1` to `-19`, `1-§10-1` to `-6`, `1-§10-8`, `1-§10-9`, `1-§11-1` to `-4`, `1-§12-1` to `-7`, `1-§13-1` to `-9`, `1-§14-2` to `-13`, `1-§15-1`, `1-§15-8` to `-10`, `1-§16-1` to `-6`, `1-§17-1` to `-9`, `1-§18-7`, `1-§19-1` to `-5`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-13`, `1-§22-1` to `-15`, `1-§23-1` to `-4`, `1-§23-5a`, `1-§23-6` to `-12`, `1-§24-1` to `-15`, `1-§25-8`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-3` to `-5`, `6-§6-1` to `-3`, `6-§7-1` to `-6`, `6-§8-2` to `-7`, `6-§9-1` to `-11`, `6-§10-1a`, `6-§10-2`, `6-§11-1` to `-9`, `6-§12-6` to `-8`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§3-6`, `16-§4-1` to `-14`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `16-§6-1` to `-7`, `16-§7-1` to `-8`, `16-§8-1` to `-11`, `16-§9-1`, `16-§9-2`, `16-§10-1` to `-4`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `16-§13-4`, `16-§14-1` to `-6`, `16-§15-1` to `-11`, `16-§16-1` to `-11`, `16-§17-6`, `16-§17-7`, `16-§18-1` to `-10`, `22-§16-1` to `-11`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-4`, `17-§10-6`, `17-§10-7`, `24-§21-6`, `9-§12-7`, `9-§12-9`, `9-§12-12`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-12`, `3-§15-13`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2`, `BP-§5.5-p1`, `BP-§5.5-p2`, `BP-§10.7-W`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`, `GPCV-§8-3` to `-5` |
| `EIS18-SEC-03` | AF/PR | 8 | `1-§5-8`, `1-§5-14`, `1-§5-22`, `1-§25-6`, `6-§4-7`, `6-§9-10`, `3-§11-6`, `BP-§10.7-B3` |
| `EIS18-IDM-01` | AF/TR | 14 | `1-§6-7`, `1-§12-6`, `1-§16-6`, `1-§24-7`, `1-§26-11`, `1-§26-14`, `6-§13-1`, `6-§13-9`, `S11-L443-1`, `S11-L443-3`, `16-§11-7`, `16-§16-4`, `16-§20-8`, `3-§15-12` |
| `EIS18-AUD-01` | AF | 6 | `1-§22-14`, `1-§23-11`, `6-§11-9`, `6-§12-5`, `S11-L443-5`, `16-§18-9` |
| `EIS18-MIG-01` | TR | 290 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EIS18-VER-01` | PR | 592 | all 592 `IN SCOPE` rows |
| `EIS18-CAP-01` | TR | 280 | `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§10-1`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-1` to `-4`, `1-§14-6` to `-12`, `1-§15-1` to `-10`, `1-§19-5`, `1-§22-1` to `-15`, `1-§23-1`, `1-§23-2`, `1-§23-11`, `1-§24-1` to `-15`, `1-§25-1` to `-8`, `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-2`, `6-§7-1` to `-6`, `6-§8-1` to `-7`, `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-9`, `6-§12-1` to `-5`, `6-§12-7`, `6-§12-8`, `6-§13-1` to `-11`, `6-§14-1` to `-10`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§10-1` to `-4`, `16-§16-1` to `-11`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-5`, `16-§18-9`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-13`, `BP-§10.3-S2` |
| `EIS18-OBJ-01` | TR | 290 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EIS18-CMD-01` | TR | 308 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2`, `BP-§10.7-A1`, `BP-§10.7-A2`, `BP-§10.7-A3`, `BP-§10.7-A4`, `BP-§10.7-A5`, `BP-§10.7-A6`, `BP-§10.7-A7`, `BP-§10.7-A10`, `BP-§10.7-B1`, `BP-§10.7-B2`, `BP-§10.7-B3`, `BP-§10.7-B5`, `BP-§10.7-B6`, `BP-§10.7-C1`, `BP-§10.7-C2`, `BP-§10.7-C3`, `BP-§10.7-C4`, `BP-§10.7-C5` |
| `EIS18-ERR-01` | TR | 101 | `1-§3-4`, `1-§3-8`, `1-§5-14`, `1-§5-22`, `1-§5-30`, `1-§7-4`, `1-§7-5`, `1-§8-12`, `1-§9-19`, `1-§10-9`, `1-§14-5` to `-7`, `1-§15-9`, `1-§15-10`, `1-§16-5`, `1-§17-9`, `1-§21-8` to `-13`, `1-§22-15`, `1-§24-1` to `-15`, `6-§4-7`, `6-§5-4`, `6-§6-3`, `6-§8-3` to `-6`, `6-§9-7` to `-11`, `6-§10-2`, `6-§12-6`, `6-§12-7`, `6-§13-1` to `-11`, `16-§3-6`, `16-§5-7`, `16-§6-7`, `16-§8-11`, `16-§10-3`, `16-§10-4`, `16-§11-7`, `16-§13-4`, `16-§14-6`, `16-§15-7` to `-11`, `16-§16-1` to `-11`, `16-§17-7`, `16-§18-10`, `22-§16-2`, `17-§9-7`, `17-§10-7`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EIS18-RDR-01` | TR | 23 | `1-§5-5`, `1-§5-7`, `16-§11-2`, `16-§11-3`, `16-§13-1` to `-4`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7` |
| `EIS18-NEG-01` | PR | 64 | `1-§3-4`, `1-§3-8`, `1-§5-14`, `1-§5-22`, `1-§5-30`, `1-§7-4`, `1-§7-5`, `1-§8-12`, `1-§9-19`, `1-§10-9`, `1-§14-5` to `-7`, `1-§15-9`, `1-§15-10`, `1-§16-5`, `1-§17-9`, `1-§21-8` to `-13`, `1-§22-15`, `6-§4-7`, `6-§5-4`, `6-§6-3`, `6-§8-3` to `-6`, `6-§9-7` to `-11`, `6-§10-2`, `6-§12-6`, `6-§12-7`, `16-§3-6`, `16-§5-7`, `16-§6-7`, `16-§8-11`, `16-§10-3`, `16-§10-4`, `16-§11-7`, `16-§13-4`, `16-§14-6`, `16-§15-7` to `-11`, `16-§17-7`, `16-§18-10`, `22-§16-2`, `17-§9-7`, `17-§10-7`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EIS18-MIG-02` | TR | 290 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EIS18-MIG-03` | TR | 42 | `1-§5-4`, `1-§5-20`, `1-§10-2` to `-7`, `1-§10-9`, `1-§13-6`, `1-§15-6`, `1-§16-1` to `-6`, `1-§22-10`, `1-§23-7`, `1-§23-12`, `1-§24-3`, `1-§24-12`, `1-§24-14`, `1-§26-5`, `1-§26-11`, `6-§4-3`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `3-§15-12` |
| `EIS18-MIG-04` | PR | 294 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-7`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-2` to `-6`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1`, `1-§15-8`, `1-§16-1` to `-3`, `1-§16-6`, `1-§17-2` to `-8`, `1-§19-1` to `-4`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-7`, `1-§22-1` to `-14`, `1-§24-1` to `-14`, `1-§31-1`, `1-§31-2`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§6-1`, `6-§7-2` to `-6`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§13-1` to `-11`, `6-§17-1`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§10-1`, `16-§10-2`, `16-§11-1` to `-5`, `16-§12-1`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-10`, `16-§23-1`, `22-§16-3` to `-10`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-4`, `17-§10-6`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `3-§11-6`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `BP-§10.3-S2` |
| `EIS18-VER-02` | PR | 306 | `1-§5-1` to `-13`, `1-§5-15` to `-21`, `1-§5-23` to `-29`, `1-§6-2` to `-6`, `1-§7-1`, `1-§7-2`, `1-§8-6` to `-10`, `1-§9-1` to `-18`, `1-§10-1` to `-8`, `1-§11-1` to `-3`, `1-§12-1` to `-5`, `1-§12-7`, `1-§13-2` to `-8`, `1-§14-2` to `-4`, `1-§14-8` to `-11`, `1-§15-1` to `-8`, `1-§16-1` to `-3`, `1-§17-2` to `-8`, `1-§19-1` to `-5`, `1-§21-1` to `-7`, `1-§26-1` to `-6`, `1-§26-10`, `1-§26-11`, `1-§26-12a`, `6-§3-1` to `-9`, `6-§4-1` to `-6`, `6-§5-1`, `6-§5-2`, `6-§6-1`, `6-§7-2` to `-5`, `6-§8-2`, `6-§8-7`, `6-§9-1` to `-6`, `6-§10-1a`, `6-§13-2` to `-8`, `6-§13-10`, `6-§13-11`, `6-§14-1` to `-6`, `6-§14-8`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§6-1` to `-6`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-10`, `16-§9-2`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§13-1` to `-3`, `16-§14-2` to `-5`, `16-§15-1` to `-6`, `16-§16-1` to `-3`, `16-§16-5` to `-7`, `16-§16-9` to `-11`, `16-§20-1` to `-4`, `16-§20-7a`, `16-§20-9`, `22-§16-5`, `22-§16-8` to `-10`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-6`, `24-§18-4`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7`, `3-§9-3`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `5-§7-5` to `-7`, `BP-§10.3-S2`, `BP-§10.7-A1`, `BP-§10.7-A2`, `BP-§10.7-A3`, `BP-§10.7-A4`, `BP-§10.7-A5`, `BP-§10.7-A6`, `BP-§10.7-A7`, `BP-§10.7-A10`, `BP-§10.7-B1`, `BP-§10.7-B2`, `BP-§10.7-B3`, `BP-§10.7-B5`, `BP-§10.7-B6`, `BP-§10.7-C1`, `BP-§10.7-C2`, `BP-§10.7-C3`, `BP-§10.7-C4`, `BP-§10.7-C5` |
| `EIS18-VER-03` | PR | 124 | `1-§3-4`, `1-§3-8`, `1-§5-14`, `1-§5-22`, `1-§5-30`, `1-§7-4`, `1-§7-5`, `1-§8-12`, `1-§9-19`, `1-§10-9`, `1-§14-5` to `-7`, `1-§14-13`, `1-§15-9`, `1-§15-10`, `1-§16-5`, `1-§17-9`, `1-§21-8` to `-13`, `1-§22-15`, `1-§24-1` to `-6`, `1-§24-8` to `-15`, `1-§25-1` to `-8`, `1-§26-7` to `-10`, `1-§26-13`, `6-§4-7`, `6-§5-3`, `6-§5-4`, `6-§6-3`, `6-§8-1`, `6-§8-3` to `-6`, `6-§9-7` to `-11`, `6-§10-2`, `6-§12-1` to `-8`, `6-§14-3`, `6-§14-7`, `6-§14-10`, `S11-L443-2` to `-4`, `16-§3-6`, `16-§5-7`, `16-§6-7`, `16-§8-11`, `16-§10-1` to `-4`, `16-§11-7`, `16-§13-4`, `16-§14-6`, `16-§15-7` to `-11`, `16-§16-8`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-10`, `16-§20-5`, `16-§20-6`, `16-§20-9`, `16-§20-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§9-6`, `17-§9-7`, `17-§10-7`, `3-§11-6`, `BP-§10.7-A8`, `BP-§10.7-A9`, `BP-§10.7-A11`, `BP-§10.7-B4`, `BP-§10.7-B7`, `BP-§10.7-B8` |
| `EIS18-VER-04` | PR | 123 | `1-§3-1` to `-3`, `1-§3-5` to `-7`, `1-§3-9`, `1-§3-10`, `1-§6-1`, `1-§8-1`, `1-§8-11`, `1-§11-4`, `1-§13-9`, `1-§14-1`, `1-§14-5`, `1-§14-12`, `1-§16-4`, `1-§17-1`, `1-§18-7`, `1-§22-1` to `-14`, `1-§23-1` to `-4`, `1-§23-5a`, `1-§23-6` to `-12`, `1-§28-1`, `6-§5-5`, `6-§6-2`, `6-§7-1`, `6-§7-6`, `6-§8-7`, `6-§11-1` to `-9`, `6-§14-8`, `S11-L443-5`, `16-§3-1` to `-5`, `16-§3-7`, `16-§4-14`, `16-§5-6`, `16-§7-1`, `16-§7-3`, `16-§9-1`, `16-§14-1`, `16-§17-6`, `16-§18-1` to `-9`, `16-§21-1`, `22-§16-1`, `22-§16-3`, `22-§16-6`, `22-§16-11`, `3-§15-7`, `3-§15-12`, `3-§15-13`, `BP-§10.7-W`, `BP-§11-p1`, `BP-§11-b1`, `BP-§11-b2`, `BP-§11-b3`, `BP-§11-b4`, `BP-§11-b5`, `BP-§11-b6`, `BP-§11-b7`, `BP-§11-b9`, `BP-§11-p3`, `BP-§11-p4`, `BP-§11-p5`, `BP-§13-p1`, `BP-§13-T`, `BP-§13-b1`, `BP-§13-b2`, `BP-§13-b3`, `BP-§13-b4`, `BP-§13-b5`, `BP-§13-b6`, `BP-§13-b7`, `BP-§13-b8`, `BP-§13-b9`, `BP-§13-b10`, `BP-§15-p2`, `BP-§15-p3`, `BP-§16-p2`, `GPCV-§8-3` to `-5` |
| `EIS18-VER-05` | PR | 14 | `1-§6-7`, `1-§12-6`, `1-§16-6`, `1-§24-7`, `1-§26-11`, `1-§26-14`, `6-§13-1`, `6-§13-9`, `S11-L443-1`, `S11-L443-3`, `16-§11-7`, `16-§16-4`, `16-§20-8`, `3-§15-12` |
| `EIS18-VER-06` | PR | 31 | `1-§1-1` to `-3`, `1-§2-1` to `-8`, `1-§13-1`, `1-§20-1`, `1-§20-2`, `6-§1-1`, `6-§2-1`, `6-§14-9`, `16-§1-1`, `16-§1-2`, `16-§2-1` to `-6`, `16-§12-1`, `16-§12-2`, `9-§12-7`, `9-§12-9`, `9-§12-12`, `BP-§10.7-X` |
| `EIS18-VER-07` | PR | 43 | `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `1-§31-1`, `1-§31-2`, `6-§14-1` to `-10`, `6-§17-1`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `16-§23-1`, `22-§29-9`, `24-§18-4`, `5-§7-5` to `-7` |
| `EIS18-HLD-D12` | UQ | 280 | `1-§5-1` to `-30`, `1-§6-1` to `-7`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§10-1`, `1-§10-8`, `1-§11-1` to `-3`, `1-§12-1` to `-7`, `1-§13-2` to `-8`, `1-§14-1` to `-4`, `1-§14-6` to `-12`, `1-§15-1` to `-10`, `1-§19-5`, `1-§22-1` to `-15`, `1-§23-1`, `1-§23-2`, `1-§23-11`, `1-§24-1` to `-15`, `1-§25-1` to `-8`, `1-§26-1` to `-11`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§3-1` to `-9`, `6-§4-1` to `-7`, `6-§5-1`, `6-§5-2`, `6-§7-1` to `-6`, `6-§8-1` to `-7`, `6-§10-1a`, `6-§10-2`, `6-§11-1`, `6-§11-2`, `6-§11-9`, `6-§12-1` to `-5`, `6-§12-7`, `6-§12-8`, `6-§13-1` to `-11`, `6-§14-1` to `-10`, `S11-L443-1` to `-5`, `16-§4-1` to `-13`, `16-§10-1` to `-4`, `16-§16-1` to `-11`, `16-§17-1` to `-5`, `16-§17-7`, `16-§18-5`, `16-§18-9`, `16-§20-1` to `-6`, `16-§20-7a`, `16-§20-8` to `-10`, `22-§16-1`, `22-§16-2`, `22-§16-4`, `22-§16-7`, `22-§29-9`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7`, `24-§21-6`, `10-§13-5`, `10-§13-7`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-13`, `BP-§10.3-S2` |
| `EIS18-HLD-D13` | UQ | 116 | `1-§6-3`, `1-§8-1`, `1-§8-6` to `-10`, `1-§9-1` to `-19`, `1-§12-7`, `1-§19-1` to `-5`, `1-§20-1`, `1-§20-2`, `1-§21-1` to `-13`, `1-§23-4`, `1-§23-5a`, `1-§26-1` to `-4`, `1-§26-7`, `1-§26-8`, `1-§26-10`, `1-§26-12a`, `1-§26-13`, `1-§26-14`, `6-§9-1` to `-11`, `6-§10-1a`, `6-§11-3`, `6-§11-4`, `6-§14-9`, `16-§5-5a`, `16-§6-1` to `-7`, `16-§9-2`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§12-1`, `16-§12-2`, `16-§15-1` to `-11`, `16-§18-7`, `16-§18-8`, `16-§20-2`, `16-§20-7a`, `24-§18-4`, `24-§21-6`, `9-§12-7`, `9-§12-9`, `9-§12-12`, `10-§13-5`, `10-§13-7`, `12-§4-4`, `12-§7-7` |
| `EIS18-HLD-D14` | UQ | 119 | `1-§6-4`, `1-§6-5`, `1-§8-9` to `-12`, `1-§13-5`, `1-§15-1` to `-4`, `1-§15-7` to `-10`, `1-§16-1` to `-3`, `1-§16-5`, `1-§16-6`, `1-§19-3`, `1-§19-4`, `1-§22-1` to `-15`, `1-§23-3`, `1-§23-6`, `1-§26-3`, `6-§4-3`, `6-§6-1` to `-3`, `6-§11-5`, `6-§14-4`, `16-§4-1` to `-13`, `16-§5-1` to `-4`, `16-§5-5a`, `16-§5-6`, `16-§5-7`, `16-§6-1` to `-7`, `16-§8-1` to `-11`, `16-§9-1`, `16-§9-2`, `16-§11-1` to `-5`, `16-§11-6a`, `16-§11-7`, `16-§17-6`, `16-§18-1`, `16-§18-2`, `16-§18-6`, `16-§20-1`, `16-§20-2`, `16-§20-4`, `16-§20-6`, `16-§20-7a`, `16-§20-8`, `17-§10-6`, `24-§18-4`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-12`, `3-§15-13`, `5-§4-11` to `-13`, `5-§6-10`, `5-§6-12`, `5-§7-5` to `-7`, `BP-§10.3-S2` |
| `EIS18-HLD-D15` | UQ | 52 | `1-§5-27`, `1-§17-1` to `-9`, `1-§23-8`, `1-§23-9`, `1-§24-13`, `6-§3-9`, `6-§4-5`, `6-§11-6`, `6-§11-7`, `16-§7-1`, `16-§7-2`, `16-§7-4` to `-8`, `16-§8-1` to `-11`, `16-§13-1` to `-4`, `16-§14-1` to `-6`, `16-§16-6`, `16-§18-3`, `16-§18-4`, `16-§20-3`, `16-§20-5`, `16-§20-9`, `5-§7-7` |
| `EIS18-HLD-D16` | UQ | 17 | `1-§5-4`, `1-§5-20`, `1-§13-6`, `1-§15-6`, `1-§16-1` to `-6`, `1-§22-10`, `1-§23-12`, `1-§24-12`, `1-§24-14`, `1-§26-11`, `17-§10-5`, `3-§15-12` |
| `EIS18-HLD-D17` | UQ | 25 | `1-§10-2` to `-7`, `1-§10-9`, `1-§23-7`, `1-§24-3`, `1-§26-5`, `17-§4-15`, `17-§9-1` to `-7`, `17-§10-1` to `-7` |
| `EIS18-HLD-D19` | UQ | 5 | `1-§25-8`, `6-§12-8`, `16-§10-4`, `16-§17-5`, `16-§20-10` |
| `EIS18-HLD-D20` | UQ | 16 | `1-§5-24` to `-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1` |
| `EIS18-HLD-DTX` | UQ | 5 | `1-§16-5`, `1-§16-6`, `1-§26-11`, `6-§4-3`, `3-§15-12` |
| `EIS18-HLD-DSCH` | UQ/PD | 10 | `6-§3-3`, `S11-L443-1`, `16-§7-1`, `16-§7-2`, `16-§7-4` to `-8`, `16-§20-3` |
| `EIS18-HLD-DAI` | UQ/PD | 43 | `1-§21-1` to `-13`, `6-§9-1` to `-11`, `16-§6-1` to `-7`, `16-§15-1` to `-11`, `24-§18-4` |
| `EIS18-HLD-DV` | UQ/PD | 5 | `1-§8-8`, `1-§19-2`, `1-§26-2`, `12-§4-4`, `12-§7-7` |
| `EIS18-HLD-DNTF` | UQ | 17 | `1-§5-24` to `-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5`, `1-§15-4`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1` |
| `EIS18-HLD-DENT` | UQ | 13 | `17-§4-15`, `17-§9-1` to `-6`, `17-§10-1` to `-6` |
| `EIS18-HLD-DPAY` | UQ/PD | 2 | `1-§15-6`, `1-§16-4` |
| `EIS18-HLD-DLOC` | UQ | 42 | `1-§5-18`, `1-§5-26`, `1-§13-5`, `1-§14-1` to `-12`, `1-§15-5`, `1-§22-11`, `1-§23-10`, `1-§24-4`, `1-§26-6`, `1-§26-9`, `6-§3-4`, `6-§5-2` to `-5`, `6-§11-8`, `6-§12-4`, `6-§12-6`, `6-§13-3`, `6-§14-3`, `S11-L443-1`, `22-§16-3` to `-11`, `22-§29-9` |
| `EIS18-HLD-DMAP` | UQ/PD | 1 | `1-§13-3` |
| `EIS18-HLD-DLEG` | UQ | 6 | `6-§3-6`, `6-§8-2`, `S11-L443-1`, `S11-L443-3`, `S11-L443-4`, `22-§16-6` |
| `EIS18-HLD-DC13` | FC | 5 | `1-§5-29`, `1-§7-1`, `1-§7-2`, `1-§7-4`, `1-§7-5` |
| `EIS18-HLD-DC14` | FC | 1 | `6-§5-2` |
| `EIS18-NTF-01` | AF/TR | 1 | `1-§17-4` |
| `EIS18-HLD-PQ14` | UQ | 8 | `16-§10-2`, `16-§10-3`, `16-§11-2`, `16-§11-3`, `16-§13-2`, `16-§17-3`, `16-§20-6`, `16-§20-7a` |

### 21.4 The 177 rows outside `IN SCOPE` (preserved)

Unchanged, as in Blueprint §11. This EIS specifies none of them.

| Disposition | Rows | FCTM rows |
|---|---:|---|
| `ASSIGNED TO LATER MISSION` | 17 | `1-§7-3`, `1-§8-2` to `-5`, `1-§18-1` to `-6`, `1-§23-5b`, `1-§26-12b`, `6-§10-1b`, `16-§5-5b`, `16-§11-6b`, `16-§20-7b` |
| `DELEGATED` | 77 | `21-§10-1` to `-6`, `21-§13-2`, `21-§13-3`, `21-§14-1`, `21-§16-1`, `21-§16-2`, `21-§17`, `21-§18-1`, `22-§5-4`, `22-§5-5`, `22-§5-7`, `22-§12-1`, `22-§13-1`, `22-§14-1`, `22-§15`, `22-§33-1`, `7-§2-1`, `7-§2-2`, `25-§4-1`, `25-§4-8`, `18-§5`, `18-§9`, `21-§4-3`, `21-§4-5`, `21-§4-6`, `22-§4-3`, `25-§6-1`, `25-§7-1`, `8-§4-2`, `23-§4-3`, `23-§4-5`, `2-§11-9`, `2-§11-10`, `2-§12-8`, `4-§3-6` to `-8`, `4-§4-4`, `4-§5-6`, `4-§6-8` to `-10`, `4-§11-6`, `11-§5-3`, `11-§8-2`, `11-§8-6`, `11-§8-7`, `11-§10-5`, `22-§11-2`, `22-§11-5`, `22-§11-6`, `14-§6-5`, `14-§13-1` to `-3`, `15-§5-6`, `15-§7-7`, `15-§15-1` to `-7`, `15-§23-7`, `15-§25-7`, `24-§6-2`, `24-§9-2`, `24-§10-10`, `11-§9-3`, `11-§9-4`, `11-§9-6` |
| `OUT OF BUILD SCOPE` | 48 | `1-§4-1` to `-6`, `1-§28-2` to `-4`, `6-§15-1` to `-6`, `16-§19-1` to `-5`, `16-§21-5`, `16-§21-6`, `BP-§16-1` to `-20`, `GPCV-§9-2` to `-4`, `GPCV-§9-7` to `-9` |
| `NOT APPLICABLE` | 27 | `1-§4-7`, `1-§27-1` to `-10`, `1-§28-5` to `-7`, `1-§29`, `6-§16`, `16-§21-2` to `-4`, `16-§22`, `BP-§11-b8`, `BP-§13-p5`, `BP-§15-1`, `BP-§15-2`, `BP-§15-4`, `BP-§15-6`, `BP-§15-9` |
| `UNRESOLVED FOUNDER DECISION` | 8 | `1-§30-1`, `1-§30-2`, `6-§3-10`, `BP-§15-3`, `BP-§15-5`, `BP-§15-7`, `BP-§15-8`, `GPCV-§9-11` |

## 22. Amendment Record (MC-809)

Amended in place, one file, under MC-809. No requirement text of a locked source, the Blueprint, the FCTM or any upstream EIS changed.

| Change | Where |
|---|---|
| SB-P-1.12 source updated from v0.4 to locked v0.5 (`7a5f49182463ec79ecf221d7dd13dfebbc517e3e`), with Founder Decision Records 10 and 11, Records 73 and 74 and MC-802 | Sections 1, 3 |
| v0.4 "upstream interface held" record replaced by a consumer specification of G1, G2, PC-01 to PC-12, F-OVL, P-3 and SR-09 | Sections 7.1, 8, 9, 10, 14.1, 14.2 |
| New workstream P: `EIS18-EXT-01` to `-08`. `EXT-01` and `EXT-02` rewritten; `EXT-03` to `-08` added | Section 12 |
| New hold `EIS18-HLD-PQ14`; the upstream selector unknown is recorded on `EIS18-CAP-01` | Sections 12, 14.4 |
| `DLV-02`, `DLV-03`, `OFD-01` updated for the participant path | Section 12 |
| Negative tests NT-EXT-01 to -06 replace the held NT-EXT-01 | Section 16.2 |
| M18-3 participant slice designed and activation-gated; M18-7 participant registration | Section 17 |
| `DI` rows reclassified `DOC` → `RUN` (activation-gated), except `1-§17-4` (`DOC`, `EQ18-05`). No FCTM or Blueprint status changed | Section 21 |
| SB-P-1.14 and SB-P-1.17 noncanonical candidates on `main` recorded as not relied on | Section 3 |

**MC-811 corrections.** Amended in place, one file, under MC-811. No requirement ID, row mapping or count changed.

| Change | Where |
|---|---|
| M18-3 participant slice described as designed but activation-gated, not excluded | Section 8 delivery heading; Section 12 `EIS18-MIG-01`; Section 18 SA-04 row |
| Gates for formal Stage 10 review, Stage 10 acceptance and Stage 11 lock separated; step 6 corrected; steps 1 to 5 unchanged | Section 19 |
| `S11-L443-1` ORIGIN-COUNT INCONSISTENCY recorded; Stage 10 Source18 determination pending | Section 19 |
| Final STOP paragraph updated to the locked SB-P-1.12 EIS v0.5 | Section 22 |

**MC-817 correction.** Amended in place, one file, under MC-817 ([PR #1111 comment 6735122273](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6735122273)). Consumes the canonical SB-P-1.15 `EQ18-05` amendment at `main@8bd38d56c8017863bce06bcbdf46649bafcfcdc0`. No requirement ID, row, link, count or Section 21 entry changed.

| Change | Where |
|---|---|
| SB-P-1.15 amended EIS identity added | Section 3 |
| Participant-binding recipient consumed; membership-only and no-send wording replaced | Sections 6, 8, 9.3, 10; `EIS18-OFD-01`, `EIS18-NTF-01` |
| `1-§17-4` register row, result line and PC-09 obligation updated; Section 14.3 rewritten | Sections 14.1, 14.3 |
| NT-NTF-01 and NT-EXT-06 expectations aligned to SB-P-1.15 NN-01 to NN-16 | Section 16.2 |
| `EQ18-05` status updated; Section 19 step 2 status and gate (a) annotation | Sections 18, 19 |

**MC-817 classification and hold-count correction (2026-11-09).** Amended in place, one file, under the MC-817 exact metadata correction grant ([PR #1111 comment 6735515653](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6735515653)), which disposes the MC-817 Stage 10 exact-delta review ([comment 6735475510](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6735475510)). EIS drafting-class and basis metadata only; the FCTM is frozen and unchanged. No row ID, requirement ID, link or notification behavior changed.

| Change | Where |
|---|---|
| `EIS18-NTF-01` basis `UQ` → `AF/TR` | Sections 12, 21.3 |
| `1-§17-4` drafting class `DOC` → `RUN` | Section 21.2 |
| Drafting-class census `NOW` 441, `RUN` 146, `DOC` 5 → `NOW` 441, `RUN` 147, `DOC` 4; `BLK` 0 unchanged | Section 21.1 |
| Five → four unresolved documentary matters; `EQ18-05` recorded as resolved at the documentary level, not implemented | Sections 1, 19 |
| `1-§17-4` traceability wording aligned to `RUN` | Section 14.3 |
| Current canonical identity and STOP text corrected | Section 22 |

**Review status.** Formal Stage 10 independent review has occurred: MC-814-R ([comment 6708809233](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6708809233)) and the MC-817 exact-delta review above. Stage 10 **acceptance remains HELD**. Stage 11 and implementation are NOT AUTHORIZED. The records above for MC-809, MC-811 and the first MC-817 correction are history and are not rewritten.

**PR base.** PR #1111 still targets `main` at merge base `1c4ecf3494b2ff866018ac957ff486c150f4cd69`. Canonical `main` was `6a5b8b83` at MC-809 and is `8bd38d56c8017863bce06bcbdf46649bafcfcdc0` at this correction. This file is absent on all three, so the PR diff is not distorted. Reconciling the base belongs to any later publication step.

**MC-819 positive overtime design and Track A pin refinement (2026-11-10).** Amended in place, one file, under the MC-819 exact-scope grant ([PR #1111 comment 6750418846](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6750418846)), against canonical `main@cda6df55796aa1ba200b248f2bdd1a96178ecbd2`. Consumes canonical `18:FPDR-8` (blob `03fe9ac8`; PR #1124, status PR #1125) and the accepted Q-6 specialist finding. No FCTM, Blueprint, Founder-record or upstream file changed; the Track A pins record corrections made by PR #1123, not by this PR.

| Change | Where |
|---|---|
| FCTM pin `2bbe6e22` → `ed2ff0f9` and Blueprint pin `a7e0266e` → `f9bfd0a2` (earlier blobs historical); `18:FPDR-8` added; requirement count 137 → 140 | Sections 1, 3, 21 |
| Overtime-flow capabilities, objects, commands, readers, tool, codes and sequence | Sections 7, 8, 9, 9.1, 9.2, 10, 11 |
| `EIS18-OVT-02` rewritten from held to positive (`UQ` → `PR/TR`); `EIS18-OVT-03`, `-04` and `-05` added; `EIS18-OVT-01` cross-reference | Section 12 |
| `DLEG` rows restated as activation holds; R1 representation updated | Sections 14.4, 15 |
| PT-OVT-02, PT-OVT-03 and NT-OVT-01 to -09 added (FUTURE, NOT RUN) | Section 16 |
| Q-6 finding row | Section 18 |
| Matter (i) annotated as specified and awaiting review; step 3 reconciled; origin-count block replaced by the resolved upstream record | Sections 1, 19 |
| T1/T3 screen | Section 20 |
| `S11-L443-1` class `DOC` → `RUN`; the five facet rows gain the new links; census, counts and links recomputed | Section 21 |

**PR base.** PR #1111 still targets `main` at merge base `1c4ecf3494b2ff866018ac957ff486c150f4cd69`; canonical `main` is `cda6df55796aa1ba200b248f2bdd1a96178ecbd2` at this refinement. This file is absent on `main`. The records above are history and are not rewritten.

**MC-819 D1–D5 consolidated correction (2026-11-10).** Amended in place, one file, under the one-use corrective grant ([PR #1111 comment 6763165975](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6763165975)), which consolidates the independent Security & Permissions finding ([comment 6750975311](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6750975311)) and the MC-814 documentary review ([comment 6763103985](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6763103985)). No requirement, row, link or FCTM-facing mapping changed.

| Item | Change | Where |
|---|---|---|
| D1 | Protected internal derivation child: invocation, binding, effect, response, attribution and atomic failure policy | Sections 8, 11, 12 (`EIS18-OVT-02`); NT-OVT-10 |
| D2 | `recorded_at_capture` only from one current server-owned shift reference; new `staff_shift_attendance_refs`; manual association needs both existing capabilities | Sections 8, 9, 11, 12; NT-OVT-11 |
| D3 | Registry non-delegability claim removed; Owner-only command predicate from locked kernel outputs; `OVT_OWNER_REQUIRED` | Sections 7, 8, 9, 10, 12 (`EIS18-OVT-04`); NT-OVT-12 |
| D4 | Partial unique constraint replaced by lifecycle-wide `(business_id, staff_record_id, evidence_version)` identity; collision-resistant `evidence_version`; frozen is an evaluated condition | Sections 8, 9, 11, 12 (`EIS18-OVT-04`); NT-OVT-06 |
| D5 | `S11-L443-1` class `RUN` → `DOC`; census `NOW` 441, `RUN` 147, `DOC` 4, `BLK` 0; matter (i) restated; the MC-819 record above stays history | Sections 1, 19, 21 |

**STOP FOR MISSION CONTROL.** This partial draft is not canonical and not a Stage 9 completion claim. Formal Stage 10 independent review has occurred; Stage 10 acceptance remains HELD. Stage 11, Stage 12 and Stage 13 are NOT AUTHORIZED. SB-P-1.12 EIS v0.5 is APPROVED — LOCKED as a documentary contract; the G1/G2 implementation and the PR #1120 v1.1-D package remain unactivated/unlocked respectively. **Implementation Authorization WITHHELD — NOT AUTHORIZED.**
