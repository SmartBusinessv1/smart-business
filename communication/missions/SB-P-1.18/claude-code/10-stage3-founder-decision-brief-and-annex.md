# SB-P-1.18 — Stage 3 Founder Decision Brief (Corrected under MC-516)

**Status:** PROPOSAL — LOCAL DRAFT — NOT A FOUNDER DECISION — NOT A REPOSITORY RECORD
**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor (read-only; MC-513A, corrected under MC-516; F-3 editorial correction under MC-518)
**Canonical baseline:** `main@650249b855a7a1460c9b8d4575c68e52cddeede1` (PR #1080 merge; content equal to the reviewed head `4d141b32`)
**Inputs:** MC-513A proposed brief; MC-515 findings MC515-01 to MC515-05, as stated in MC-516. The MC-508 to MC-515 records themselves are not on `main` or on PR #1080 and were not read
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

Nothing in this document decides anything. Every "recommendation" is a proposal for the Founder. Row references are to the merged Stage 2 FCTM (`communication/missions/SB-P-1.18/claude-code/03-stage2-populated-fctm.md` at `650249b8`).

## 1. Brief summary

The Stage 3 Founder Decision Gate is triggered. The FCTM holds two `ESCALATED` rows, `1-§14-5` (live tracking) and `22-§16-6` (location retention). Five questions go to the Founder:

| # | Question | Trigger | Professional input before a binding decision |
|---|---|---|---|
| F-1 | Retention, access expiry and erasure of attendance, delivery-proof and destination location data | T1, T3 | **Required: qualified Indian legal/privacy** |
| F-2 | Is opt-in live tracking a Phase 1 commitment, a reduced or reinterpreted commitment, or later-mission work? | T2 (and T7 for Options A and C) | Required if Option B is chosen |
| F-3 | Customer-facing interactions before SB-P-1.20: confirm or reject the row-specific reconciliation of 22 rows between native SB-P-1.18 obligations and expressly approved SB-P-1.20 channel units | **T7** (mission assignment) | No |
| F-4 | Permissive mechanisms in 10 rows: which, if any, form the required minimum set | T3 | No (privacy check on photo/signature proof before the EIS) |
| F-5 | Overtime records (Source 11): a directly testable obligation, and how it is held | T2 | Employment/payroll-law validation before the EIS |

Proposed order:

1. F-2, because it fixes which location record classes exist.
2. F-1, after legal advice.
3. F-3, F-4 and F-5, in parallel.

## 2. Matters already settled — no further Founder decision

| Matter | Settled by |
|---|---|
| Default continuous GPS tracking of staff is rejected | C1 §14 p3, p4, p6; C22 §16 p3; BP §16 b3; GPCV §9 b3 |
| Not a marketplace; any broader network is a future, separately governed decision outside SB-P-1.18 | C1 §4, §30 b2; BP §15 b8, §16 b8; GPCV §9 b9, b11; rows `1-§4-7`, `1-§30-2` |
| No automated wage punishment, misconduct verdict or hidden scoring | C6 §8, §9, §15; BP §10.7 B7–B8, §16 b2, b4 |
| Customer silence never fails a sufficiently proven delivery | C1 §15 customer-silence rule; BP §10.7 A9, §16 b9 |
| Completion needs configured positive proof, selected by risk and configuration | C1 §15 p1, p3 (`1-§15-1`, `1-§15-8`) |
| Substitution and partial fulfilment require confirmation | C1 §10 p4; BP §10.7 A4; C1 §26 b5 (`1-§10-4`, `1-§10-5`, `1-§10-8`) |
| A customer's approval may be recorded by an authorized merchant user | C1 §10 p4 |
| The 12 existing SB-P-1.20 WhatsApp assignments | BP §8.4, §9 row 9, §10.9; rows `1-§18-1`…`-6`, `1-§23-5b`, `1-§26-12b`, `6-§10-1b`, `16-§5-5b`, `16-§11-6b`, `16-§20-7b` |
| Notification Foundation owned by SB-P-1.15 (native only); Shared Location Foundation and its attendance/delivery disclosures in SB-P-1.18 | SB-P-1.12 `FPDR-1`, `FPDR-2`, `FPDR-3` |
| Geofence radius is an implementation parameter | C6 §5 location rule p3 |
| No employee national-ID/KYC collection | C6 §3 p2, §15 b6; GPCV §8 b3 |
| Compliance Shield is not a legal authority | C16 §15, §19; BP §10.7 C4 |
| `ADD-ON + BUILD NOW` for Contracts 01, 06, 16 | GPCV rows 1, 6, 16 |

## 3. Founder questions

### F-2 — Live tracking (decide first)

**1. Source clauses and existing approved truth**

- Source 09 v3.0, "Smart Order & Delivery Assistant Pilot Scope" (2026-07-30). Its Required list includes "live tracking".
- Source 11, Smart Order & Delivery add-on flow (2026-07-29): "Start delivery ↓ Live tracking (with geofencing where applicable for authorised delivery operations) ↓ Proof capture".
- C1 §14 b4 (reconciled 2026-09-12): location may be used for "a user-requested or explicitly authorized live-tracking experience if separately designed under current privacy/security rules". C1 §14 p3, p4 and p6 reject default continuous tracking.
- C22 §16 b4: approved uses beyond point-in-time need "other explicitly approved operational purposes".
- Build Plan §10.7 A (2026-09-12) names no live-tracking outcome.
- Feature library README: a conflict with canonical Product Truth "must be surfaced and reconciled through Founder/Mission Control".

**2. Why it is unresolved.** Source 11 and Source 09 name live tracking as a step and a requirement. The later contract makes it optional and conditional. Source 11 outranks the contracts. **Order-status updates do not satisfy the Source 11 "Live tracking" step under existing approved truth**, and no approved source equates the two. Row `1-§14-5` is `ESCALATED`.

**3. Options and consequences**

| Option | What it means | Scope consequence | Privacy and dignity | Mission assignment |
|---|---|---|---|---|
| A | **A Founder-approved reduction or reinterpretation of the existing live-tracking commitment.** For Phase 1, delivery visibility is provided by live order and delivery *status* plus point-in-time location at destination and proof. Location-based live tracking is not committed and becomes a future, separately approved purpose under C22 §16 b4 | Reduces an approved Source 09/11 requirement; needs an explicit Founder decision ID cited in `1-§14-5` | Least location data; no capture of staff movement | No row moves to another mission; it changes a commitment (T7 classification lock, Source 18 §3.2 item 5) |
| B | Opt-in, time-bounded location live tracking is Build Now in SB-P-1.18 | Adds a separately designed experience (C1 §14 b4) with its own FCTM rows and five FPDR-3 disclosures, retention included | Highest-risk data class: staff location during deliveries. Needs explicit authorization, a visible purpose and an access-end rule | Stays in SB-P-1.18. A customer-visible view needs the SB-P-1.20 channel (links to F-3) |
| C | Location live tracking is committed but assigned to a later mission (for example SB-P-1.20, with the customer channel) | Keeps the commitment; SB-P-1.18 builds only status and point-in-time location | As B, later | **T7**: no approved source names a later mission for it |

**4. Proposed recommendation: Option A.** It is a reduction of an approved requirement and is offered on that basis:

- It matches the later Founder-approved Build Plan §10.7 outcomes.
- It avoids capturing employee movement before F-1 and the legal review are complete.
- A future, separately designed purpose remains open.

If the Founder wants the Source 11 step preserved, B is the coherent alternative.

**5. Implications.** Under A, no staff-movement data is stored. Under B and C, legal and privacy review is required, plus FPDR-3 disclosures, an explicit purpose, consent and authorization handling, and strict access expiry.

**6. Effect on FCTM, Blueprint and acceptance**

| Option | Effect |
|---|---|
| A | `1-§14-5` → `OUT OF BUILD SCOPE`, or a reduced form with the decision ID; `22-§16-11` released; no live-tracking acceptance item |
| B | `1-§14-5` → `IN SCOPE`, with new disclosure rows and a Blueprint §15 acceptance scenario |
| C | `1-§14-5` → `ASSIGNED TO LATER MISSION`, with the decision ID |

**7. Decision wording requested**

- (A) *"I approve reducing the Source 09/11 live-tracking step for SB-P-1.18: delivery visibility is live order/delivery status plus point-in-time location at destination and proof. Location-based live tracking is not committed in Phase 1 and needs a separately approved future purpose under Contract 22 §16."*
- (B) *"Opt-in, time-bounded location live tracking is Build Now in SB-P-1.18, subject to its own disclosures and retention decision."*
- (C) *"Location live tracking remains committed and is assigned to [mission]."*

**8. Professional evidence.** Not needed for A. Legal/privacy review is required before choosing B or C.

### F-1 — Location purpose, access expiry, retention and erasure (after F-2; legal advice first)

**1. Source clauses and existing approved truth**

- C22 §16 b5–b9: each feature defines why location is needed, who may see it, when it is captured, how long it is retained, and when access ends.
- SB-P-1.12 `FPDR-3`: SB-P-1.18 supplies these for attendance and delivery, and "does not authorize any new … retention period".
- C1 §14 b5–b9: collect only what is necessary, make the purpose understandable, "stop/expire access when the operational purpose ends", prevent unrelated access, and "follow current retention policy" (no such policy exists for location).
- C1 §6 p3: address/location "may remain missing until delivery actually requires it".
- C22 §33.4: retention is record-class-specific and "must not be inferred from Smart Business business-lifecycle windows".
- C25 §17: no exact duration is locked, and legal needs "may differ by object/domain".
- BP §15 b6 (retention after cancellation) is a different item.

**2. Why it is unresolved.** No approved value or rule exists, and nobody below the Founder may set one. Row `22-§16-6` is `ESCALATED`; `1-§14-12` and `1-§22-11` are held.

**3. Separate analysis per record class**

No numbers are proposed. Each blank is a Founder decision, informed by legal advice.

| Element | Attendance location (check-in/out) | Delivery-proof location | Customer destination (address/location) |
|---|---|---|---|
| Purpose | Verify presence at an approved place for that event (C6 §5; C22 §16 b1) | Evidence of a completed or attempted delivery (C1 §15 b4; C22 §16 b3) | Deliver the specific order (C1 §14 b1; C22 §16 b2) |
| Minimum data (proposal) | Store the verification result (inside/outside, time); keep raw coordinates only as long as the correction window requires | Coordinates attached to the proof event | Address or location needed for the active delivery |
| Audience | Owner; authorized Manager; the employee's own record (22-§16-4; C21 §10) | Owner and authorized users reviewing that delivery; delivery staff only during the task (C1 §5 Delivery Staff) | Delivery staff only for the assigned task (C1 §5, §25 b3); Owner and authorized users |
| Access expiry | When attendance is finalized or a correction closes [Founder: trigger] | When the delivery and any COD/payment reconciliation closes [Founder: trigger] | **At task completion for delivery staff** (C1 §14 b7); for others [Founder: trigger] |
| Retention | [Founder: duration or rule, after legal advice] | [Founder] | [Founder]. **The continued existence of a customer record does not by itself justify keeping precise destination location** (C1 §14 b5, b7; C22 §16 b8; C22 §33.4). Any retention for repeat deliveries needs its own purpose and legal basis |
| Erasure | Raw coordinates erased at [Founder]; derived result follows the attendance-record rule | At [Founder] | On customer removal, correction or request, and at [Founder] |
| Lawful or operational exceptions (to validate) | An open attendance dispute or correction; statutory attendance registers (these concern the attendance record, not the coordinates) | An open delivery dispute or COD discrepancy; financial audit links (C15 §15) | An open order; a legal hold |

**4. Proposed recommendation.** Minimisation first, with separate rules per class as above. The derived result replaces raw attendance coordinates, and destination location is never kept merely because the customer exists. Durations, triggers and erasure points are set only after qualified advice.

**5. Implications.** All three classes are personal data under Indian data-protection and employment law. Employee and customer dignity and trust are at stake (C6 §12; C1 §25). Erasure and expiry must be auditable and must not corrupt business or financial history (C22 §33.5).

**6. Effect on FCTM, Blueprint and acceptance.** Unblocks `22-§16-6`, `22-§16-7` (access end), `1-§14-10`, `1-§14-12` and `1-§22-11`. Adds Blueprint §15 acceptance items for expiry and erasure per class.

**7. Decision wording requested.** Each blank is filled by the Founder after advice:

- Attendance: purpose [ ], audience [ ], access ends [ ], raw coordinates erased [ ], result retained [ ], exceptions [ ].
- Delivery proof: [same fields].
- Destination: [same fields]. Retention is not justified by the customer record alone.

**8. Professional evidence.** **Qualified Indian legal/privacy advice is a prerequisite to a binding decision.** The Founder may give a provisional direction on minimisation in advance.

### F-3 — Customer-facing interactions before SB-P-1.20 (T7 mission-assignment question)

**1. Source clauses and existing approved truth**

- The customer obligations: C1 §5 Customer, §7, §8 customer-initiated, §15 b3, §17, §20, §24 b13, §26 b1.
- BP §8.1: "WhatsApp-first".
- BP §10.9: "Customers, suppliers, and delivery staff receive only purpose-limited WhatsApp workflows".
- BP §11 b9: SB-P-1.20 "must not create missing core business behavior inside the adapter".
- C23 §4: Customer/Delivery Staff participate in WhatsApp order, delivery, proof and status workflows.
- Source 09 pilot scope: WhatsApp customer creation; welcome + unsubscribe.
- C1 §10 p4: a merchant-recorded approval is valid.
- No approved source names SMS or any other non-WhatsApp customer channel.

**2. Why it is unresolved.** The 22 rows are `IN SCOPE` in SB-P-1.18 and carry `DNTF`, but no out-of-app customer channel exists before SB-P-1.20.

- Some rows already have an approved SB-P-1.20 counterpart for their WhatsApp leg (`1-§18-1`, `-4`, `-5`, `-6`).
- Those 1-§18 counterparts assign only the WhatsApp channel unit itself; none assigns the C1 §5, §7, §8, §17 or §20 obligation.
- No approved assignment source (Build Plan §§9–12 or the contract's own dependency) names SB-P-1.20 for those specific units.

Narrowing them to a native core in SB-P-1.18 is therefore a **change of mission assignment (T7)** and needs a Founder decision. The 12 existing SB-P-1.20 assignments are unaffected.

**3. Options**

| Option | What it means | Consequence |
|---|---|---|
| A | Approve the row-specific reconciliation in Annex B: native obligations stay in SB-P-1.18, and only the expressly approved channel-specific units go to SB-P-1.20 | SB-P-1.18 can be accepted on its native core. The customer legs are verified at SB-P-1.20. Pilot readiness needs both missions |
| B | Introduce a non-WhatsApp out-of-app channel in SB-P-1.18 | New product and provider decision; BP §5.4; mandatory specialist review; possible regulatory registration |
| C | No split: the 22 rows stay `IN SCOPE`, held until SB-P-1.20 exists | SB-P-1.18 cannot be accepted before SB-P-1.20 |

**4. Proposed recommendation: Option A.** It follows WhatsApp-first (BP §8.1) and keeps core behaviour in SB-P-1.18 (BP §11 b9). It is still a Founder assignment decision.

**5. Implications.** Consent and STOP state, and the welcome purpose, must exist natively before any channel exists (DC-13), so that SB-P-1.20 honours them. Merchant-recorded approvals must bind to the exact order state (DC-02; C21 §18).

**6. Effect on the FCTM.** Annex B lists every row. For each of the 22 obligations, preserve the source obligation and its Build Now commitment. Where both a distinct native-domain obligation and a channel obligation exist, the Founder-approved reconciliation may represent them as separate traceable units. Where Annex B identifies no independent native customer-initiation or provider-specific obligation, do not create an empty or duplicate `a` row. Retain existing native obligations under their current IDs, and assign only the expressly approved channel-specific unit to SB-P-1.20, citing the Founder Decision ID. There is no `BUILD NOW` downgrade.

**7. Decision wording requested.** *"For SB-P-1.18, I approve the row-specific reconciliation of the 22 customer-facing rows listed in Annex B: native obligations stay in SB-P-1.18 under their current IDs, and only the channel-specific units listed there are assigned to SB-P-1.20. No non-WhatsApp customer channel is introduced in Phase 1."* Or Option B or C wording.

**8. Professional evidence.** None for the decision itself.

### F-4 — Permissive mechanisms (exactly ten rows)

**1. Rows, sources and the mandatory outcomes that are not in question**

| Affected row | Source | Wording | Mandatory outcome already sourced (not decided here) |
|---|---|---|---|
| `1-§10-3` quantity change | C1 §10 p3 b1 | "may help propose" | `1-§10-1` (not automatically final), `1-§10-8` (approve material changes), `1-§10-9` (no unsupported inventory promise) |
| `1-§10-6` removal | C1 §10 p3 b4 | "may help propose" | same |
| `1-§10-7` later fulfilment | C1 §10 p3 b5 | "may help propose … where supported" | same |
| `1-§15-2` staff completion action | C1 §15 p2 b1 | "may include, as appropriate" | `1-§15-1` (configured positive proof), `1-§15-8` (proof selected by risk and configuration), `1-§15-9`, `1-§15-10` (silence rule) |
| `1-§15-3` recipient acknowledgement | C1 §15 p2 b2 | same | same |
| `1-§15-4` OTP/signature/photo | C1 §15 p2 b3 | same; OTP needs an out-of-app channel | same (also in F-3) |
| `1-§15-5` point-in-time location | C1 §15 p2 b4 | same | same, plus F-1 |
| `1-§15-6` COD/payment evidence | C1 §15 p2 b5 | same | same; COD facts stay mandatory under `1-§16-*`, 15-§15 |
| `1-§15-7` merchant confirmation | C1 §15 p2 b6 | same | same |
| `6-§5-2` attendance mechanisms | C6 §5 p2 | "may include … or other future verified methods" | `6-§5-1` (auditable events), `6-§5-3`, `6-§5-4` (location rule). QR + geofence per DC-14 (Mission Control) |

`1-§10-4` (substitute) and `1-§10-5` (partial fulfilment) are already mandatory (BP §10.7 A4; C1 §26 b5) and are **not** affected.

**2. Why it is unresolved.** Without a decision, every mechanism must be built and verified. Choosing a subset is the Founder's call (T3), and the SB-P-1.17 decision 17:FPDR-7 is not applied to SB-P-1.18.

**3. Options**

- **A.** A permissive-menu rule. The mandatory outcomes above are always verified. The Founder names a minimum set the EIS must deliver. Other listed mechanisms remain permitted and may be adopted. None is prohibited or removed.
- **B.** All ten are mandatory.
- **C.** The Founder fixes the exact set now.

**4. Proposed recommendation: Option A,** with this **proposed Founder-selected minimum**. It is a proposal: it neither adds nor removes any mandatory outcome, and the Founder may choose differently.

| Row | Proposed in the minimum? |
|---|---|
| `1-§10-3` quantity change | Yes |
| `1-§10-6` removal | Yes |
| `1-§10-7` later fulfilment | No (adoptable where supported) |
| `1-§15-2` staff completion action | Yes |
| `1-§15-7` merchant confirmation | Yes |
| `1-§15-3`, `1-§15-4`, `1-§15-5`, `1-§15-6` | No (adoptable by the EIS). OTP becomes adoptable only once a customer channel exists |
| `6-§5-2` | QR with point-in-time geofence (subject to DC-14); other methods adoptable later |

**5. Implications.** Photo and signature proof of customers is personal data and needs its own retention (F-1 style) before the EIS. A smaller mandatory set reduces verification load; dignity is unaffected.

**6. Effect on the FCTM.** Decision ID added to the ten rows. Dispositions stay `IN SCOPE`. Verification set to "mandatory" for minimum rows and "if adopted" for others.

**7. Decision wording requested.** *"In SB-P-1.18, the C1 §10 p3, C1 §15 p2 and C6 §5 p2 lists are permissive except for the minimum set [rows]. The sections' mandatory outcomes are always verified, and no listed mechanism is prohibited."*

**8. Professional evidence.** Not needed for the decision. A privacy check on photo/signature proof is needed before the EIS.

### F-5 — Overtime records

**1. Source clauses and existing approved truth**

- Source 11, Staff/HR Add-on, "Includes: … shift tracking · leave tracking · overtime records · payroll assistance".
- C6 §3 b3 (shift/roster), b4 (attendance events), b6 (payroll-support calculations and context); C6 §8 (payroll support, human-controlled and auditable, "must not … fabricate legal/payroll authority"); C6 §7 (corrections with context); C6 §4 (role visibility); C17 §9 b5 (payroll support/export view).
- None of these names overtime.

**2. Why it is unresolved.** Source 11 names a record type that C6 does not represent as a distinct, testable obligation (T2).

**3. Distinguishing the existing data from the overtime record**

| Element | Already sourced in C6 | Not explicit for overtime |
|---|---|---|
| Inputs | Approved shifts (C6 §3 b3), attendance events (b4), leave (C6 §7) | — |
| Record creation | Payroll-support calculations (C6 §3 b6, §8 p2) | An overtime record as its own item |
| Review | Consequential payroll changes human-controlled (C6 §8 p4) | Review of the overtime record |
| Correction | Corrections preserve the original plus context (C6 §7, §13 b6) | Correcting an overtime record |
| Visibility | Owner and authorized Manager; employee own data (C6 §4) | Who sees overtime |
| Auditability | Audit of corrections (C6 §12 b5) | Audit of overtime |

**4. Options**

- **A.** Overtime is held inside the payroll-support context. The existing rows (`6-§3-6`, `6-§8-2`, `17-§9-5`) get explicit verification items for overtime creation, review, correction, visibility and audit.
- **B.** Overtime records become a distinct obligation, with new FCTM rows cited to Source 11 under the decision ID, covering creation (derived from approved shift and attendance), human review, auditable correction, role-scoped visibility (employee own) and audit.

**5. Proposed recommendation: Option B.** It gives a directly testable overtime-record obligation, as MC515-05 requires, and it mirrors existing approved truth (Source 11) without inventing behaviour. Option A would make overtime testable only indirectly.

**6. Implications.** Overtime rules depend on Indian labour law. The product must assist, not determine legal entitlement (C6 §8 b4), and must never be punitive (C6 §8 b1–b3).

**7. Effect on the FCTM.** Under B: new rows (for example `S11-StaffHR-OT-1`…`-5` or C6-anchored rows), with decision-ID citations, plus Blueprint §15 acceptance items. Under A: verification items added to the three existing rows.

**8. Decision wording requested.** *"Source 11 'overtime records' is a distinct SB-P-1.18 Staff/HR obligation. Overtime records are derived from approved shift and attendance records, reviewed and corrected by authorized humans with audit, visible only to authorized roles and the employee's own record, and never punitive."* Or Option A wording.

**9. Professional evidence.** Founder confirmation is required. Employment/payroll-law validation is required before the EIS defines calculation rules.

## 4. Mission Control matters (not Founder product decisions)

| Item | Finding | Proposed disposition |
|---|---|---|
| DC-02: merchant-recorded customer approval | Directly sourced: C1 §10 p4 | Accept as a derived constraint; applies under any F-3 option |
| DC-13: consent and STOP state stored with the customer identity before any channel | Follows from C1 §5 Customer b7, §7 and BP §11 b9 | Accept; it adds no product behaviour |
| DC-14: QR + point-in-time geofence is Build Now; each business decides whether to enable location | Reconciles S11 and S09 with C6 §3, §5 and BP §10.7 B4 | Mission Control T6 judgement. Legal input on employee location before the Blueprint lock. To the Founder only if rejected |
| Δ-06: repository PUBLIC; `main` unprotected, with no rules (re-verified 2026-10-25 at `650249b8`) | Governance and security, not product | The **Founder as repository owner/administrator** decides visibility and protection under a separate admin mission, with a credential-exposure review and a CLAUDE.md correction. Not Stage 3 |
| Δ-14: live `instruction.md` still holds Stage 1 | Mission Control owns the file | Mission Control updates it in its next record |
| Build Plan §15 (trial, prices, KYC, post-cancellation retention, marketplace, lending) | None is on SB-P-1.18's critical path (GPCV §8 b3–b5); Compliance has a ₹99/month baseline (S01 §14; C18 §4 b3) | Exclude from Stage 3. Fix the generic `BUILD NOW` value on the §15 rows in a later documentary pass |

## 5. Stage 3 gate boundary (proposed)

- **Inside Stage 3**, under explicit Mission Control grants with paths, branch and Git authority:
  - the Founder Brief, this annex and a draft, unapproved Founder Product Decision Record for F-1 to F-5, plus the T4 acknowledgement of Δ-04 and Δ-05;
  - the Founder dialogue, run by an actor Mission Control designates;
  - legal/privacy input recorded before F-1 is decided;
  - employment/payroll-law input noted for F-5.
- **After the decisions merge:** a separately authorized FCTM reconciliation of the affected rows only (F-1 to F-5, the two `ESCALATED` rows, and the F-3 row-specific reconciliation if Option A is chosen).
- **Outside Stage 3:** Blueprint or EIS drafting or lock, code, SQL, migrations, providers, repository settings (Δ-06 goes to an admin track), Track B, and any SB-P-1.19 or SB-P-1.20 work.

**STOP — MISSION CONTROL REVIEW AND INDEPENDENT RE-VERIFICATION REQUIRED.** Implementation Authorization: WITHHELD.

---

# Annex A — Source and option evidence

| Ref | Source (path at `650249b8`) | Blob | Clause used |
|---|---|---|---|
| S09 | `merge/active/09_Master_Roadmap_Command.md` | `ccc847aa` | Pilot Scope "live tracking"; Pilot Entry "Staff/HR geofence attendance"; WhatsApp customer creation, welcome + unsubscribe |
| S11 | `merge/active/11_Smart_Business_Product_Truth_Map.md` | `16897d6c` | Order flow "Live tracking (with geofencing…)"; Staff/HR "QR attendance with geofencing", "overtime records"; Customer role |
| C1 | `…/01_Smart_Order_and_Delivery_Assistant.md` | `b392c8cb` | §5, §6 p3, §7, §8, §10, §14, §15, §17, §18, §20, §24 b13, §25, §26 |
| C6 | `…/06_Staff_and_HR_Assistant.md` | `ebacd183` | §3, §4, §5, §7, §8, §12, §13 |
| C22 | `…/22_Shared_Product_Foundations.md` | `61e1bb91` | §16 (location), §33.4–33.5 |
| C23 | `…/23_WhatsApp_Intelligence_and_Channel_Adapter.md` | `2430e1c6` | §4 Customer/Delivery Staff; §5 b6; §17 |
| C25 | `…/25_Document_Media_Storage_and_Retention_Foundation.md` | `406ce089` | §17 |
| BP | `…/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924` | §5.4, §5.5, §8.1–8.4, §9, §10.7, §10.9, §11 b9, §15, §16 |
| GPCV | `…/00_Global_Product_Completion_View.md` | `ee76d920` | rows 1, 6, 16; §8 b3–b5; §9 |
| FPDR-12 | `communication/missions/SB-P-1.12/founder/03-stage3-founder-product-decision-record.md` | (merged PR #628) | FPDR-1, FPDR-2, FPDR-3 |
| S18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda6` | §3.2 items 3, 5, 10; Stage 3 T1–T8 |

**Approval order relevant to F-2:** S09 (2026-07-30) and S11 (2026-07-29) came before the reconciled C1 (2026-09-12) and the Build Plan (2026-09-12). S11 ranks above contracts in the authority order (Source 18 §2).

**Absence evidence (F-3):** a repository-wide search of `merge/active/` and the feature contracts for "SMS", "text message" and "OTP" finds only C1 §15 b3 ("OTP/signature/photo"). No approved source names a non-WhatsApp customer channel.

# Annex B — F-3 exact 22-row impact table

Every row today:

- **Owner:** SB-P-1.18.
- **Disposition:** `IN SCOPE`.
- **Commitment:** `ADD-ON + BUILD NOW — before first 10 pilot merchants`.
- **Dependency:** `DNTF`.

**Build Now:** unchanged in every option; nothing becomes Build Later.

**Pilot:** the Source 09 pilot customer flows need SB-P-1.20 in every option except B.

**Approval:** "Founder approval?" is **Yes (T7)** for every row, because no approved source names SB-P-1.20 for these units. The "Existing SB-P-1.20 counterpart" column shows where a WhatsApp channel unit is already assigned.

**Reconciliation is row-specific (§3, F-3 item 6).** Where the native column reads "None…", or names an existing row, no new native row is created: existing native obligations keep their current IDs. Only the channel-specific unit the Founder expressly approves goes to SB-P-1.20.

| # | Row (obligation) | Proposed native SB-P-1.18 behaviour | Proposed SB-P-1.20 channel behaviour | Source authority for the reconciliation | Existing SB-P-1.20 counterpart | Founder approval? |
|---|---|---|---|---|---|---|
| 1 | `1-§5-24` C1 §5 Customer b2 — place an order through an approved channel | Order record from a customer request captured by an authorized merchant user (`1-§8-6`…`-10`) | Customer places the order over WhatsApp | BP §10.9; C23 §4; C1 §18 b1 | `1-§18-1` | Yes (T7) |
| 2 | `1-§5-25` b3 — accept/modify/cancel a proposed change | Merchant-recorded customer decision bound to the exact order state (C1 §10 p4; DC-02) | Customer accepts or rejects over WhatsApp | C1 §10 p4; BP §10.9 | `1-§18-4` | Yes (T7) |
| 3 | `1-§5-26` b4 — provide address/location when needed | Merchant enters the address; the location primitive stores it under F-1 rules | Customer shares location over WhatsApp | C23 §5 b6; BP §10.9 | `1-§18-6` (partial) | Yes (T7) |
| 4 | `1-§5-27` b5 — receive confirmations/status | Notification events with the customer as recipient are generated and stored (D15) | Delivery of those messages to the customer | BP §10.9; `12:FPDR-1` (native only) | `1-§18-4`, `1-§18-5` | Yes (T7) |
| 5 | `1-§5-28` b6 — report delivery issues | Merchant records a customer-reported issue on the order | Customer reports the issue over WhatsApp | BP §10.9; C23 §4 | `1-§18-6` (partial) | Yes (T7) |
| 6 | `1-§5-29` b7 — unsubscribe | Consent and STOP state stored on the customer identity and honoured by every sender (DC-13) | Customer's STOP over WhatsApp | BP §10.9 "template/consent handling" | none explicit | Yes (T7) |
| 7 | `1-§7-1` C1 §7 p1 — identify the merchant and the purpose when newly enabled | Welcome content, enabled state, once-only flag | Sending the welcome message | BP §10.9; S09 "welcome + unsubscribe" | none explicit | Yes (T7) |
| 8 | `1-§7-2` §7 b1 — unsubscribe/STOP | STOP state enforced natively (DC-13) | Channel STOP keyword handling | BP §10.9 | none explicit | Yes (T7) |
| 9 | `1-§7-3` §7 b2 — approved templates/provider rules | None beyond the purpose rules (provider-specific) | Template and provider compliance | BP §10.9; C23 §17 | none explicit | Yes (T7) — almost entirely channel |
| 10 | `1-§7-4` §7 b3 — no repeated welcome spam | Once-only rule state | Channel enforcement | BP §10.9 | none explicit | Yes (T7) |
| 11 | `1-§7-5` §7 b4 — no unrelated promotional abuse | Purpose restriction on customer messaging | Channel enforcement | BP §10.9 | none explicit | Yes (T7) |
| 12 | `1-§8-2` §8 customer-initiated b1 — text | None for customer initiation; merchant-initiated text stays `IN SCOPE` (`1-§8-8`) | Customer text order over WhatsApp | BP §10.9; C1 §18 b1 | `1-§18-1` | Yes (T7) |
| 13 | `1-§8-3` b2 — voice | As 12 (`1-§8-8`) | Customer voice order | as 12 | `1-§18-1` | Yes (T7) |
| 14 | `1-§8-4` b3 — image of a handwritten list | As 12 (`1-§8-9`) | Customer image order | as 12 | `1-§18-1` | Yes (T7) |
| 15 | `1-§8-5` b4 — supported document | As 12 (`1-§8-10`) | Customer document order | as 12 | `1-§18-1` | Yes (T7) |
| 16 | `1-§15-4` C1 §15 b3 — OTP/signature/photo | Signature or photo captured on the delivery staff device (subject to F-4) | OTP sent to the customer | C1 §15; BP §10.9 | none explicit | Yes (T7); also F-4 |
| 17 | `1-§17-3` §17 b2 — confirmation/change request | Notification event; merchant and staff recipients natively | Customer recipient | `12:FPDR-1`; BP §10.9 | `1-§18-4` | Yes (T7) |
| 18 | `1-§17-5` §17 b4 — delivery started/status | as 17 | as 17 | as 17 | `1-§18-5` | Yes (T7) |
| 19 | `1-§17-6` §17 b5 — delivery completed | as 17 | as 17 | as 17 | `1-§18-5` | Yes (T7) |
| 20 | `1-§20-1` §20 p1 — customer and merchant interactions in English/Malayalam/Manglish | Merchant interactions natively; the customer's language preference stored (S11 Customer "choose preferred language") | Customer-language messaging | BP §10.9 | none explicit | Yes (T7) |
| 21 | `1-§24-13` §24 b13 — channel delivery failure | Notification delivery state kept separate from business state (22-§12-9, SB-P-1.15) | WhatsApp delivery failure handling | C23 §19, §24 | none explicit | Yes (T7) |
| 22 | `1-§26-1` §26 b1 — customer text order → draft → confirmation (acceptance scenario) | Merchant-captured order → draft → merchant-recorded confirmation (also Founder Scenario A, `BP-§10.7-AS1`) | The customer-initiated text leg, verified at SB-P-1.20 | BP §10.9 Scenario A "same record across channels" | `1-§26-12b` (related) | Yes (T7) |

Preserved and untouched: the 12 existing SB-P-1.20 assignments (Section 2).

# Annex C — Consolidated five-question register

| ID | Decision owner | Trigger | Rows affected | Professional prerequisite | Sequence |
|---|---|---|---|---|---|
| F-2 | Founder | T2; T7 for A and C | `1-§14-5` (`ESCALATED`), `22-§16-11` | Legal/privacy if B or C | 1 |
| F-1 | Founder | T1, T3 | `22-§16-6` (`ESCALATED`), `22-§16-7`, `1-§14-10`, `1-§14-12`, `1-§22-11` | **Qualified Indian legal/privacy advice before a binding decision** | 2 |
| F-3 | Founder | T7 | 22 rows (Annex B) | None | Parallel |
| F-4 | Founder | T3 | 10 rows (§3, F-4 table) | Privacy check on photo/signature before the EIS | Parallel |
| F-5 | Founder (confirmation) | T2 | `6-§3-6`, `6-§8-2`, `17-§9-5`, plus any new rows under B | Employment/payroll-law before the EIS | Parallel |

# Annex D — Authority split

| Matter | Founder (product) | Founder (repository owner) | Mission Control | Specialist |
|---|---|---|---|---|
| F-1 to F-5 | Decides | — | Frames, records and reconciles the FCTM afterwards | Legal/privacy (F-1, and F-2 if B or C); employment law (F-5) |
| DC-02, DC-13, DC-14 | Only if Mission Control rejects DC-14 | — | Decides (T6) | Legal input on DC-14 before the Blueprint lock |
| Δ-04, Δ-05 (already decided) | Acknowledges | — | Records | — |
| Δ-06 visibility and protection | — | Decides | Records and governs | Security review of credential exposure |
| Δ-14 live instruction | — | — | Updates | — |
| Build Plan §15 items | Later, in their own missions | — | Keeps them off Stage 3 | — |

# Annex E — Legal/privacy prerequisites and unresolved dependencies

**Prerequisites before a binding decision**

- F-1: qualified Indian legal/privacy advice on employee attendance location, delivery-proof location and customer destination data. This covers purpose limitation, retention, erasure, lawful exceptions and access expiry.
- F-2: the same advice, if Option B or C is chosen.

**Before the EIS**

- F-5: employment/payroll-law validation of overtime handling.
- F-4: a privacy check on photo/signature proof.
- DC-14: legal input on employee location.

**Unresolved dependencies.** These block demonstration, not decisions:

- **Specified but not implemented:** `D12`–`D17` (upstream kernels), `DTX`, `DSCH`, `DAI`, `DV`, `DR2`, `DENT`, `DPAY`.
- **No channel until SB-P-1.20:** `DNTF` (the out-of-app customer channel).
- **Not yet existing:** `DLOC`, `DMAP`, `DLEG`.

# Annex F — Correction summary (MC515-01 to MC515-05)

| Finding | Before (MC-513A brief) | After (this document) |
|---|---|---|
| MC515-01 F-2 | Option A said status updates "satisfy the Source 09/11 wording" | Option A is a **Founder-approved reduction or reinterpretation** of an approved requirement (T7 classification lock). It is stated that order-status updates do not satisfy Source 11 under existing truth. Options B and C are retained, with privacy, scope and assignment consequences |
| MC515-02 F-4 | Register said "11 rows"; quantity change and removal were called "mandatory" | Exactly **ten** rows, listed. The sourced mandatory outcomes (`1-§10-1`, `-4`, `-5`, `-8`, `-9`; `1-§15-1`, `-8`, `-9`, `-10`; `6-§5-1`, `-3`, `-4`) are separated from a **proposed** Founder-selected minimum, which adds and removes no mandatory mechanism |
| MC515-03 F-3 | Proposed to move F-3 to Mission Control by citation | F-3 is **kept in the Founder gate as a T7 question**. No pre-existing authorization names SB-P-1.20 for these units. An exact **22-row impact table** (Annex B) is added. The 12 existing assignments are preserved |
| MC515-04 F-1 | Destination "retained with the customer record until removed" | **Customer-record existence does not justify retention.** Separate purpose, audience, access-expiry, retention, erasure and exception analysis is given for each class. No numbers. Legal advice is a prerequisite to a binding decision |
| MC515-05 F-5 | Option A recommended with "no new rows" | Creation, review, correction, visibility and audit are distinguished from existing payroll-support data. Option B (a directly testable obligation) is now recommended. Founder confirmation and employment-law validation are preserved |
