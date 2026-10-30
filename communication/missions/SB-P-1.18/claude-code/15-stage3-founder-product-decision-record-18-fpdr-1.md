# SB-P-1.18 — Founder Product Decision Record `18:FPDR-1` (`SB-P-1.18 / F-1`): Location Retention and Access Expiry

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.3 Stage 3 — Founder Decision Gate (triggered; remains open)
**Status:** `FOR REVIEW — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor. Drafted read-only under MC-645-A. That handoff did not authorize repository publication
**Publication authority:** only a separate, bounded Mission Control Git-write grant under Protocol §16, issued after Mission Control content review of this text
**Pathway:** F1-R, `mission-control/07-stage3-f1-provisional-research-pathway-gate-amendment.md` (PR #1095), under SB-P-1.12 Founder Decision Record 06 (blob `c3a32f9eee7a4795813b0b9db04244ac25b19b5a`)
**Baseline:** `main@8a1d2479bf8a411036d65b5058159e5b67d2b0a2`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

> **Provisional research-backed Phase One assumption — not professionally validated.** This label applies to every F-1 rule in this record. This record approves no final legal retention schedule, no compliance clearance and no production legal reliance (Founder Decision Record 06 §3; `mission-control/07-…` §2 condition 5).

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder statement (verbatim)** | Section 1.1 only | The Founder |
| **Option text from the research** | Section 1.2 | None. It is the MC-613-B report's text, not the Founder's words |
| **Mission Control record of the selection and interpretation** | Section 2 | Mission Control, as recorded in MC-643 and MC-645 |
| **Definition Actor analysis** | Sections 3–9 | None. Analysis and boundary accounting for review |

Where Sections 1.2–9 summarize, Section 1.1 prevails. Where Sections 3–9 differ from Section 2, Section 2 prevails.

**Two kinds of statement are kept apart throughout:**
- **Product-design assumption.** What Smart Business will provisionally do in Phase One. These are the Founder's choices.
- **Legal finding.** What the law requires. This record makes **no** legal finding. Where the research describes the law, it is cited as provisional non-lawyer research, and its uncertainty is kept (Founder Decision Record 06 §5).

**Identifier check.** At `main@8a1d2479bf8a411036d65b5058159e5b67d2b0a2`, `18:FPDR-1` occurs only as a reservation (FCTM §0.8: "`18:FPDR-1` stays reserved for F-1, which is undecided."). No record uses it as a decision.

## 1. The decision

### 1.1 Verbatim Founder statement

The Founder's statement is reproduced from MC-645 (PR #1098 comment 6521163669, `created_at` = `updated_at` 2026-10-30T11:06:30Z), with only that comment's blockquote markers removed. The whole statement is reproduced. It names MC-644 as the options presentation it answers. MC-644 is not a GitHub record; the options it refers to are those of the published MC-613-B report (Section 1.2).

```text
FOUNDER F-1 DECISION — MC-644
Attendance: A2
Delivery proof: B2
Customer destinations: C123
Specific justified dispute/legal/security hold exceptions: yes
I approve these as provisional research-backed Phase One product-design assumptions only, subject to the MC-643 evidence qualifications, DLEG professional-validation hold, and separate canonical decision recording. No fixed numeric raw-GPS retention period, legal clearance or implementation authorization is approved. Proceed with the decision-record preparation through the official GitHub Communication Protocol.
```

### 1.2 The options the selection refers to (MC-613-B §3, not the Founder's words)

Source: `specialists/f1-location-research/MC-613-B-independent-legal-source-review.md.txt` (blob `5fce5203700e5a0f45754570582dd661d2dc0a01`; SHA-256 `b396c3656e2971b8bfe42f2d6074e011411b26d1d7c154f1119c7c68b4add59b`). Rows are reproduced from the report's tables, with its columns: operational access; raw-coordinate disposition; lawful held record; authority strength; uncertainty.

| Option | Report line | Report text |
|---|---|---|
| **A2** | 45 | "Validation/event fact only" — "Staff/owner sees attendance result, not exact historical coordinates"; "Raw coordinate discarded after event"; "“attendance accepted/rejected”, timestamp, site/geofence ID, actor/audit fact"; "**Strongest provisional option**"; "Exact notice/employee communication requirements remain unresolved" |
| **B2** | 60 | "Event fact only" — "Merchant sees delivery status/proof result"; "No exact coordinate retained"; "Delivery event and related COD/payment/audit facts"; "**Strong**"; "Exact evidentiary sufficiency depends on dispute type" |
| **C1** | 74 | "Statutory/postal address retained; temporary pin discarded" — "Address available for order fulfilment/accounting as needed"; "Temporary navigation pin erased when delivery purpose ends"; "Invoice/delivery address where legally required"; "**Strongest class separation**"; "Need exact merchant/GST applicability" |
| **C2** | 75 | "Saved reusable customer address" — "Available while customer/merchant actively uses it"; "Exact GPS need not be retained merely because postal address is saved"; "Saved address/profile record"; "**Product option, future DPDP-sensitive**"; "Future lawful basis/erasure rights require counsel-ready design" |
| **C3** | 76 | "One-time destination pin" — "Available during active delivery"; "Erase after delivery purpose completes unless dispute/hold"; "Order/delivery event; statutory address separately retained if required"; "**Strong provisional minimization option**"; "No numeric erasure period established" |

For each of the three classes the report states: "**Duration:** **NOT ESTABLISHED**" (lines 49, 64 and 79).

## 2. Mission Control record (verbatim extracts)

**MC-645 (PR #1098 comment 6521163669), interpretation for documentary drafting:** "A2 = point-in-time attendance geofence/validation event and necessary attendance fact, without ordinary raw GPS history. B2 = delivery event/status/proof fact retained without ordinary completed-delivery precise GPS history. C123 = classify required statutory postal/business addresses separately from authorized reusable customer addresses and temporary routing/navigation pins; discard transient location once the legitimate task ends, subject to minimization and lawful exceptions. `yes` = only individually justified, documented and access-restricted dispute, legal or security holds with release/end conditions. Do not treat this as blanket GPS retention permission."

**MC-643 (PR #1098 comment 6521074317), the evidence qualification the Founder's statement is subject to:** "**DECISION — F1-R CONDITION 2 ACCEPTED, WITH EXPLICIT PROVENANCE/LEGAL QUALIFICATIONS, FOR NONNUMERIC, CLASS-SPECIFIC PHASE ONE FOUNDER PRODUCT-OPTION FORMULATION ONLY.** The acceptance records the precise strength of evidence actually present, not professional validation, legal-policy publication, production reliance, a positive numeric duration, historical original-byte attestation, or automatic acceptance of any future retention rule."

## 3. Classification and gate conditions (Definition Actor analysis)

- **Trigger: T1 and T3** (register `05-…` U-03): no approved source gives a value or rule for how long the three location record classes are kept. **`DLEG`** stays.
- **Form of the answer: a rule, not a period.** C22 §16 b8 requires each feature to define "how long it is retained". This record answers with an **event-triggered rule** (Sections 4 and 5), not a number of days, months or years. MC-613-B §4 (lines 83–89) frames this kind of rule "without inventing days" and calls it "a **product-design option**, not a declaration of current statutory law".
- **`12:FPDR-3`.** That decision authorizes no new retention period or capture mode (FCTM §0.8). This record sets no period and adds no capture mode. Mission Control should confirm that an event-triggered rule is within `12:FPDR-3`.

**F1-R gate conditions** (`mission-control/07-…` §2), as they stand for this record:

| # | Condition | State |
|---|---|---|
| 1 | The amendment is canonical | Met: PR #1095, merge `eafa3048` (MC-618) |
| 2 | Research recorded, independently reviewed and accepted | Met with qualifications: PR #1098 (merge `8a1d2479`); MC-638-A and MC-639-B; MC-643 |
| 3 | No material legal or privacy blocker open | MC-643 scoped assessment: no affirmative blocker for narrowly scoped non-numeric options. The research's STOP triggers stay binding on any later design (Section 6) |
| 4 | Values only from research-supported options selected by the Founder | Met: A2, B2, C1–C3 and hold exceptions are research options. No numeric value is proposed |
| 5 | Truthful labelling | Met by the label at the head of this record and on each rule |
| 6 | Validation and holds stay | Met: Section 7 |

## 4. The decision by class (Definition Actor restatement; Section 1.1 prevails)

Each rule below is a **provisional research-backed Phase One assumption — not professionally validated**.

| | Attendance location (A2) | Delivery-proof location (B2) | Customer delivery destination (C1, C2, C3) |
|---|---|---|---|
| **Purpose** | Point-in-time attendance verification (C22 §16 b1) | Point-in-time delivery proof/context (C22 §16 b3) | Customer delivery destination (C22 §16 b2) |
| **When captured** | Only at the attendance event | Only at the delivery-proof event, where location proof is adopted (`1-§15-5`, `L-F4A`) | When the destination is given for an order |
| **Who may use it during the task** | The validation itself; people see the result, not coordinates | The validation itself; the merchant sees the status or proof result | The authorized delivery role for the active order |
| **Raw-coordinate disposition** | Discarded after the validation event | Not retained after the proof event | Temporary navigation or one-time pin erased when the delivery purpose ends (C1, C3); exact GPS is not kept merely because an address is saved (C2) |
| **Record that survives** | The attendance fact: accepted or rejected, time, site or geofence, actor and audit fact | The delivery event and its COD, payment and audit facts | The statutory or postal address where legally required (C1), and a saved reusable address while the customer or merchant actively uses it (C2) |
| **Access to the surviving record** | Ordinary role permissions for attendance facts | Ordinary role permissions for delivery facts | Ordinary role permissions for orders and accounts |
| **Exception** | Section 5 | Section 5 | Section 5 |

**Four distinctions this record keeps (MC-612-B §5, lines 148–161; MC-613-B §4):**
1. **Operational access** ends when the task or validation need ends (C1 §14 b7; `22-§16-7`).
2. **Raw-coordinate storage** ends with the purpose, unless Section 5 applies.
3. **The business or statutory record** survives under its own rule and is never the reason a raw coordinate survives. GST, labour-register, CERT-In and limitation periods are not raw-location periods (MC-613-B §5).
4. **Erasure** applies to the raw location when no continuing basis remains.

**Minimization.** Collect only what is necessary, make the purpose understandable, and prevent unrelated role access (C1 §14 b5, b6, b8). Raw location is not written into broad application or security logs where an event identifier or result is enough (MC-612-B §6, research design implication).

## 5. Narrowly controlled hold exceptions ("yes" in Section 1.1)

As recorded by Mission Control (Section 2), the exception is: "only individually justified, documented and access-restricted dispute, legal or security holds with release/end conditions". It corresponds to the research's hold candidates A3, B3 and C4 (MC-613-B lines 46, 61 and 77). The Founder's statement did not name those labels.

**Elements of a hold, as provisional product-design requirements:**
- **Individual.** One identified dispute, legal matter, investigation or security incident, not a category of records.
- **Necessary.** The raw coordinate itself must be needed as evidence. The surviving business record alone must be insufficient.
- **Documented.** The reason, scope and person responsible are recorded.
- **Restricted.** Access is limited to the people handling that matter.
- **Ended.** The hold has a release or end condition. On release, the ordinary rule in Section 4 applies.

**Not authorized:** blanket or category-wide retention; indefinite retention "for audit"; any default hold (MC-613-B §7, line 142 onward).

**Unresolved, for qualified counsel (`DLEG`):** the formal hold trigger, the reviewer, termination and the deletion process; and when a raw coordinate is genuinely necessary evidence (MC-613-B §8).

## 6. What this record does not decide, and what stays unknown

**No number.** No fixed numeric raw-GPS retention period is approved (Section 1.1). For all three classes the research states a precise numeric raw-location period is "NOT ESTABLISHED" (MC-613-B §5). No period may be inferred from GST, CERT-In, limitation, future DPDP Rule 8 or business-lifecycle windows (C22 §33.4).

**Unknown legal requirements, kept open** (MC-613-B §8; MC-612-B §8):
- merchant versus Team LIPS Data Fiduciary or Processor allocation for each location flow;
- worker notice, consent or contract requirements for geofence attendance;
- whether any Kerala establishment category has a more specific attendance-record rule;
- when a raw coordinate is necessary dispute evidence, and the legal-hold process;
- how future DPDP Rule 8(3) applies to Smart Business and its processors;
- whether Smart Business could fall within a future Third Schedule class;
- which customer-address components must stay with GST or statutory records.

**Phase position, as reported by the research and not a legal finding:**
- the DPDP Act's core provisions are future-effective as of 29 October 2026 (MC-613-B §1–§2);
- 2011 SPDI Rule 5 should not be read as a general location-data erasure rule (MC-613-B §6).

**STOP triggers that stay binding on any later design** (MC-613-B §7; MC-612-B §7):
- routine continuous employee tracking or persistent route surveillance;
- keeping exact coordinates because statutory attendance or GST records survive;
- treating CERT-In logs as a mandate to store GPS;
- one numeric period for all three classes;
- treating future DPDP provisions as operative today;
- indefinite raw-location retention "for audit";
- using exact location for punitive or automated employment decisions.

Any of these requires a STOP and Founder re-escalation.

## 7. Validation and holds that stay (Founder Decision Record 06; `mission-control/07-…` condition 6)

- **Professional validation is deferred, not waived.** Founder Decision Record 06 §4: after SB-P-1.20, professional review of the retention, privacy and compliance positions, with any required changes routed "before final legal-policy publication and any production reliance that requires those legal conclusions".
- **`DLEG` stays** on `22-§16-6` and on every row that carries it.
- **Not converted into legal advice or certified compliance** (Founder Decision Record 06 §3).
- Lawful disposal, minimization and security protections are unchanged.
- This is not legal clearance and not implementation authorization (Section 1.1).

## 8. Consistency with existing decisions and sources (Definition Actor check)

| Source or decision | Check | Result |
|---|---|---|
| `18:FPDR-2` (F-2) | No location-based live tracking in Phase 1; point-in-time location at destination and proof kept | Consistent. Nothing here captures location outside the attendance, proof and destination events |
| `18:FPDR-4` (F-4) | `6-§5-2` QR plus point-in-time geofence conditional on DC-14; `1-§15-5` location proof adoptable | Consistent. A2 needs only the point-in-time event, and DC-14 stays open. If `1-§15-5` is adopted, B2 governs its disposition |
| `12:FPDR-2` and `12:FPDR-3` | Shared, purpose-limited Location Foundation; each feature defines purpose, audience, capture timing, retention and access end; no new period or capture mode | Consistent subject to Mission Control's confirmation (Section 3) |
| C22 §16 | Approved uses b1–b3; continuous employee surveillance rejected; b5–b9 must be defined | Supplies b8 as a rule, and b9 as task end. No new use |
| C22 §33.4 | Record-class-specific; no lifecycle-window inference; minimum attribution | Consistent: rules are class-specific and no window is used |
| C1 §14 | Purpose-limited; collect only what is necessary; stop or expire access when the purpose ends; follow current retention policy | Consistent. This record would become the location "current retention policy" for `1-§14-12` once canonical, subject to the FCTM reconciliation (Section 9) |
| Attendance privacy (C6 §8, §9, §15; `1-§14-6`, `1-§14-7`, `1-§28-4`) | No continuous tracking; no automatic punitive decisions | Consistent: Section 6 STOP triggers |

## 9. Future FCTM implications (accounting only; no row is changed by this record)

A later, **separately authorized** FCTM reconciliation would:
- set Founder decision `18:FPDR-1` on `22-§16-6`, and move it from `ESCALATED` to `IN SCOPE`, keeping `DLOC` and `DLEG`;
- release the `HU-03` hold on `1-§14-12` and `1-§22-11`;
- record the F-1 result on `1-§5-26` (F-1 hold) and on `1-§15-5` ("location proof follows the F-1 decision").

That would change the totals from `591/17/77/27/48/8/1` to `592/17/77/27/48/8/0`, which would satisfy the Source 18 §3.2 item 6(d) zero-`ESCALATED` rule for this row. This needs its own grant, independent review and human merge. Stage 3 completion is a separate Mission Control record (`mission-control/06-…` §9).

## 10. Publication boundary

This record publishes the Founder's F-1 selection and its accounting. **It does not by itself change:**
- the FCTM, the inventory or the Stage 2 registers;
- Contract 01, 06 or 22, Source 09 or 11, or the Build Plan;
- any Blueprint, EIS, schema or implementation.

**Not approved and not implied:**
- a numeric raw-GPS retention period or a retention schedule;
- legal clearance, compliance certification or production legal reliance;
- completion of Stage 3 or entry to Stage 4;
- a DC-14 determination;
- implementation.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** Stage 3: OPEN. Implementation: WITHHELD.
