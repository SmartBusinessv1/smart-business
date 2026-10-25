# SB-P-1.18 — Stage 2 Uncertainty, Founder Decision and T1–T8 Register

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL STAGE 2 REVIEW AND FOUNDER HUMAN MERGE`
**Prepared by:** Claude Code, Definition Actor, under `mission-control/05-stage2-mission-truth-and-delta-authorization.md` (PR #1079)
**Baseline:** `main@ccfdd28a322073be67a0ea7c3658ec8685b7d2cc`, 2026-10-25
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This record is Part 4 of the Mission Truth Pack. It tests each Stage 1 uncertainty against the cited sources and screens all eight Source 18 Stage 3 triggers. It proposes **no answer** to any Founder question: options are listed with their consequences, and the Founder decides. The Definition Actor does not decide Stage 3 (the Stage 2 grant excludes it).

**Bottom line.** The Founder Decision Gate **cannot be `NOT TRIGGERED`**. The FCTM holds two `ESCALATED` rows (`1-§14-5`, `22-§16-6`), and Source 18 Stage 3 permits a `NOT TRIGGERED` record only when there is none. Four items need the Founder (F-1 to F-4) and one needs a Founder confirmation (F-5). Mission Control can settle the remaining items.

## 1. Uncertainty register

### U-01 — Customer-facing communication before SB-P-1.20

| Field | Content |
|---|---|
| Question | Before the WhatsApp adapter exists, how are customer-facing interactions delivered: welcome, purpose and unsubscribe (C1 §7), customer-initiated orders (C1 §8), confirmations and status (C1 §5, §17), proof by OTP (C1 §15 b3), and the customer leg of acceptance scenario 1? |
| Sources | C1 §5 Customer b2–b7, §7, §8 customer-initiated b1–b4, §17 b2/b4/b5, §20 p1, §26 b1; C21 §13 b2; C23 §4 "Customer / Delivery Staff may participate only in approved purpose-limited workflows such as order, delivery, proof or status communication" (WhatsApp, SB-P-1.20); BP §8.3 (Native Conversation Workspace for merchant users), §10.9 ("Customers, suppliers, and delivery staff receive only purpose-limited WhatsApp workflows"); BP §15 has no entry; `12:FPDR-1` (Notification Foundation is native only) |
| Finding | No approved source names an out-of-app customer channel before SB-P-1.20, and none assigns the customer-channel legs of Contract 01 to SB-P-1.20. C1 §10 p4 lets an authorized merchant user record a customer's approval (DC-02). The SB-P-1.17 precedent `17:FPDR-3` (supplier requests are merchant-sent) is mission-scoped and is **not** applied here |
| Rows affected | 22 `IN SCOPE` rows with `DNTF`: `1-§5-24`…`-29`, `1-§7-1`…`-5`, `1-§8-2`…`-5`, `1-§15-4`, `1-§17-3`, `1-§17-5`, `1-§17-6`, `1-§20-1`, `1-§24-13`, `1-§26-1`; also DC-02 and DC-13 |
| Trigger | **T1** (no approved source answers) and **T3** (decision needed). Any option that moves a customer-channel leg to SB-P-1.20 is also **T7**, because it changes mission assignment |
| Options for the Founder (not a recommendation) | (A) SB-P-1.18 builds merchant-mediated customer interactions natively: merchant-recorded approvals and statuses, plus stored consent and STOP state (DC-13). The customer's own out-of-app legs are assigned to SB-P-1.20, recorded as a Founder assignment decision. (B) SB-P-1.18 introduces a non-WhatsApp out-of-app channel, such as SMS. That is a new external provider (BP §5.4; mandatory specialist review; possible regulatory registration) and a product decision. (C) The rows stay `IN SCOPE` and blocked until SB-P-1.20 exists, so SB-P-1.18 acceptance waits for SB-P-1.20 |
| Critical path | **Yes**: acceptance scenario 1 and Founder Scenario A involve a customer order |

### U-02 — Opt-in live tracking

| Field | Content |
|---|---|
| Question | Is a user-requested or explicitly authorized live-tracking experience a `BUILD NOW` obligation of SB-P-1.18, or is it permitted but not committed? |
| Sources | Source 09 v3.0 "Smart Order & Delivery Assistant Pilot Scope", Required list: "live tracking"; Source 11 Smart Order & Delivery flow: "Live tracking (with geofencing where applicable for authorised delivery operations)"; C1 §14 b4: may use location for such an experience "if separately designed under current privacy/security rules"; C1 §14 p3, p4, p6 (default continuous tracking superseded); C22 §16 b1–b4 (approved uses are point-in-time, plus "other explicitly approved operational purposes"); BP §10.7 A8, §16 b3; GPCV §9 b3 |
| Finding | *Default continuous* tracking is settled as `REJECT` and is not in question. The open point is whether the opt-in experience is mandatory: Source 09 lists it as required pilot scope, and Source 11, a constitutional source above the contracts, lists it as a flow step. C1 makes it optional and conditional on a separate design, and C22 §16 requires explicit approval of any further purpose. This is a reconciliation the Definition Actor cannot make by citation |
| Rows affected | `1-§14-5` (`ESCALATED`); `22-§16-11` (held, `HU-02`) |
| Trigger | **T2** (conflict among approved sources) |
| Options | (A) Not committed: only point-in-time location in SB-P-1.18; any live-tracking design is a future, separately approved purpose. (B) `BUILD NOW` in SB-P-1.18 as an opt-in, purpose-limited, time-bounded experience under C22 §16, needing its own disclosures under `12:FPDR-3`, including retention (links to U-03) |
| Critical path | **Yes** for the lock of `1-§14-5`; it is not part of a Founder runtime scenario |

### U-03 — Retention period for attendance and delivery location data

| Field | Content |
|---|---|
| Question | How long are attendance location points, delivery-destination locations and delivery-proof location points kept, and do the three differ? |
| Sources | C22 §16 b8 ("each feature must define how long it is retained"); `12:FPDR-3` (SB-P-1.18 supplies the value for attendance and delivery; no new retention period is authorized); C1 §14 b9 ("follow current retention policy"); C22 §33.4 ("retention periods must remain record-class-specific and must not be inferred from Smart Business business-lifecycle windows"); C25 §17 (no exact long-term duration locked; "legal/compliance retention needs may differ by object/domain"); BP §15 b6 concerns retention after cancellation and is a different item |
| Finding | No approved source gives a value or a rule. C1 §14 b9 points to a "current retention policy" that does not exist for location data. Using the 90-day business-lifecycle window or any other lifecycle timer is forbidden (C22 §33.4; Stage 1 disposition §3) |
| Rows affected | `22-§16-6` (`ESCALATED`); `1-§14-12`, `1-§22-11` (held, `HU-03`) |
| Trigger | **T1** and **T3**, with a legal input (`DLEG`) |
| What the Founder needs to decide | A retention duration or rule for each of the three location record classes, with qualified legal/privacy input on India employment and personal-data law; whether access ends before deletion (`22-§16-7` already requires an access-end rule) |
| Critical path | **Yes**: `22-§16-6` blocks the WS-D lock |

### U-04 — Is geofenced attendance mandatory?

| Field | Content |
|---|---|
| Sources | Source 11 Staff/HR Add-on ("QR attendance with geofencing") and Staff/HR Upgrade ("QR based; Geofencing protected; Employee can mark attendance at approved location"); Source 09 pilot-entry list ("Staff/HR geofence attendance"); C6 §3 p1 ("where enabled and lawful"), §5 p2 ("may include approved QR/location-assisted check-in/out"), §5 location rule; BP §10.7 B4 ("attendance/geofence, if used") |
| Finding | The sources can be read together: the QR and geofence capability must exist and be verifiable (Source 11; Source 09), while each business enables location or not, and location stays point-in-time (C6, BP). That is DC-14 |
| Trigger | **T2 candidate resolved by citation**, subject to Mission Control's **T6** judgement on DC-14. Escalate to the Founder only if Mission Control rejects DC-14 |
| Rows affected | `6-§5-2`; `BP-§10.7-B4`; `6-§14-3` |

### U-05 — Overtime records

| Field | Content |
|---|---|
| Sources | Source 11 Staff/HR Add-on "Includes … overtime records"; C6 §3 (shift/roster, attendance events, payroll-support calculations and context) and §8, which do not name overtime; C17 §9 b5 (payroll support/export). C6 has no hydration-coverage section, unlike C1 §29 and C16 §22 |
| Finding | Source 11, the higher authority, names a capability for which C6 has no explicit unit. It may be covered by "payroll-support calculations and context" (C6 §3 b6), or it may be an omission from the contract |
| Trigger | **T2** (Source 11 versus contract). Raised as a confirmation, not a new product question |
| Rows affected | `6-§3-6`, `6-§8-2`, `17-§9-5` (cited `U-05`) |
| Options | (A) Overtime records are part of the payroll-support context, so no new row is needed. (B) Overtime records are a separate obligation, with new rows cited to Source 11 under a Founder Decision ID |

### U-06 — Employee KYC / national ID

Build Plan §15 item 7; C6 §3 p2, §15 b6; GPCV §8 b3 ("does not block ordinary staff profile/attendance architecture"). `UNRESOLVED FOUNDER DECISION` rows `6-§3-10`, `BP-§15-7`. **Off the critical path; no trigger.** Collection of national-ID data stays excluded (`6-§15-6`).

### U-07 — Add-on prices and entitlement

Build Plan §15 items 3 and 5 (Staff/HR, Order & Delivery prices); the Compliance Shield ₹99/month baseline (Source 01 §14; C18 §4 b3); GPCV §8 b4. `UNRESOLVED FOUNDER DECISION` rows `BP-§15-3`, `BP-§15-5`, `1-§30-1`. **Off the critical path; no trigger.** Entitlement mechanics are `DENT` (21-§16 in SB-P-1.12; C18 §5 and §9 in SB-P-1.19). DC-07 records that add-on enablement cannot be demonstrated before `DENT` exists.

### U-08 — Shared inherited rows

Resolved by citation, with no change of assignment, so **no trigger**. The joint owners are kept verbatim and the SB-P-1.18 slice is named:

- `3-§9-3`, `3-§15-7`, `BP-§10.3-S2`: the customer side here; the supplier side stays with SB-P-1.17.
- `3-§11-6`: the customer-order and delivery-staff participation here; the customer-credit side stays with SB-P-1.16 and the supplier side with SB-P-1.17.
- `12-§4-4`, `12-§7-7`: SB-P-1.17 keeps the primary stock, supplier and reorder scope (`FCTM-17`); SB-P-1.18 has the order instructions, as `FCTM-13` records ("secondary SB-P-1.18").

### U-09 — Pilot gate sequencing

Build Plan §5.5 and Source 09 require the SB-P-1.18 add-ons to be ready before the first 10 pilot merchants. Source 09's pilot scope also lists WhatsApp customer creation and the welcome/unsubscribe flow, which depend on SB-P-1.20. This is release sequencing under Source 12 and Mission Control, not a SB-P-1.18 product decision. **No trigger at Stage 2**; it interacts with U-01. Rows: `BP-§5.5-p1`, `BP-§5.5-p2`.

### U-10 — Predecessor documentary drift

Δ-09. Mission Control housekeeping; **no trigger**; not edited.

### U-11 — Reverse dependencies and undeclared consumers

Δ-10, Δ-11. 41 rows in FCTM Part F. **No trigger** for SB-P-1.18. Mission Control may record the three C11 §9 consumers in the SB-P-1.15 resume register.

### U-12 — Permissive "may include" units

| Field | Content |
|---|---|
| Sources | C1 §15 p2 and b1–b6 (proof mechanisms that "may include, as appropriate"), §15 p3 ("select/allow suitable proof according to risk and merchant configuration"); C1 §10 b5 ("later fulfilment where supported"); C6 §5 p2 ("supported mechanisms may include"); `17:FPDR-7`, which settled the same pattern for SB-P-1.17 only |
| Finding | Without a SB-P-1.18 decision, every listed mechanism stays `IN SCOPE` and would have to be built and verified, OTP included (which needs an out-of-app channel, U-01). Narrowing the list at Stage 4 or in the EIS would be a simplification (T7). Neither the Definition Actor nor Mission Control may decide which mechanisms are optional |
| Rows affected | `1-§10-7`, `1-§15-2`…`-7`, `6-§5-2` |
| Trigger | **T3**: a decision is needed that is analogous to `17:FPDR-7` but scoped to SB-P-1.18 |
| Options | (A) Treat the listed mechanisms as permissive examples, as `17:FPDR-7` did for SB-P-1.17: the section's mandatory rules (configured positive proof, the customer-silence rule, purpose limitation) are always verified, and each example is verified only if the EIS adopts it. (B) Treat every listed mechanism as mandatory |

### U-13 — Map/address provider

C1 §13 b2 "open address/map" (`1-§13-3`, `DMAP`). Whether this means a link handed to the device's own maps application or an integrated map provider is an engineering choice (BP §5.4), not Product Truth. **No trigger**; EIS item.

### U-14 — Legal and privacy validation

Employee attendance location, payroll-support data and customer location are personal data under India's employment and data-protection law. Qualified validation (`DLEG`) is required before the Blueprint lock. It is a specialist input, consistent with the SB-P-1.17 SA-02 precedent and the Stage 1 disposition §2 item 3. **It is not a Founder product trigger today**; it becomes T6 or T8 if the validation changes behaviour.

### U-15 — Repository visibility and branch protection

Δ-06. A governance and security observation for Mission Control. **No product trigger.** No setting was changed.

## 2. T1–T8 screen

| Trigger | Result | Items and evidence |
|---|---|---|
| T1 — unresolved product question no approved source answers | **FIRED** | U-01, U-03 |
| T2 — conflict among approved sources | **FIRED** | U-02 (Source 09/11 vs C1 §14, C22 §16); U-05 (Source 11 vs C6). U-04 is a candidate proposed as resolved by citation (DC-14) |
| T3 — new decision, or an approved-unresolved decision the mission needs | **FIRED** | U-03 (retention value); U-01 (channel or assignment); U-12 (permissive-example rule). No Build Plan §15 item is on the critical path (U-06, U-07) |
| T4 — `PRODUCT-AFFECTING` Delta | **PRESENT — ALREADY FOUNDER-DECIDED** | Δ-04 (`12:FPDR-2`, `12:FPDR-3`) and Δ-05 (`12:FPDR-1`, `16:FPDR-1`) changed product facts after the contracts were approved, but the Founder already decided them. Proposed for acknowledgement in the Stage 3 record; no new question |
| T5 — Founder request | **NOT TRIGGERED** | No Founder request at this baseline |
| T6 — material derived constraint | **FOR MISSION CONTROL** | DC-02 and DC-13 (both tied to U-01), DC-14 (U-04), DC-07 (no add-on acceptance before `DENT`). The Definition Actor flags them; Mission Control judges |
| T7 — proposed omission, deferral, pull-forward, simplification or reclassification | **NOT TRIGGERED BY THIS RECORD** | No row was moved. Every `ASSIGNED TO LATER MISSION` row cites BP §8.4, §9 row 9 or §10.9. U-01 option A and U-12 option A would each become T7 only if adopted, and then they need a Founder decision ID |
| T8 — Product Truth conflict or infeasibility at a later stage | **NOT APPLICABLE AT STAGE 2** | Watch: U-14 legal validation |

## 3. Founder decision candidates for Stage 3 (preparation only)

| # | Item | Trigger | Rows that unblock |
|---|---|---|---|
| F-1 | Location retention for attendance and delivery (U-03) | T1, T3 | `22-§16-6`, `1-§14-12`, `1-§22-11` |
| F-2 | Opt-in live tracking commitment (U-02) | T2 | `1-§14-5`, `22-§16-11` |
| F-3 | Customer-facing interactions before SB-P-1.20 (U-01, with DC-02 and DC-13) | T1, T3 (T7 if an assignment moves) | 22 `DNTF` rows |
| F-4 | Permissive "may include" mechanisms (U-12) | T3 | `1-§10-7`, `1-§15-2`…`-7`, `6-§5-2` |
| F-5 | Overtime records: confirmation (U-05) | T2 | `6-§3-6`, `6-§8-2`, `17-§9-5` |
| Ack | Already-decided product-affecting Deltas (Δ-04, Δ-05) | T4 | none (acknowledgement) |

Mission Control-only items: DC-02, DC-13 and DC-14 (T6); U-08, U-09, U-10, U-11, U-13; Δ-06 and Δ-14. Specialist input before lock: U-14 (`DLEG`).

The Stage 3 dialogue, the Founder Brief and the Founder Product Decision Record are **not** prepared here. They need Mission Control's separate Stage 3 instruction (Source 18 §4.3, Stage 3).

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**
