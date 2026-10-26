# SB-P-1.18 — Founder Product Decision Record `18:FPDR-5` (`SB-P-1.18 / F-5`): Overtime Records

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate (triggered; remains open)
**Status:** `FOR REVIEW — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor. Drafted read-only under MC-546-A and corrected read-only under MC-547. Neither authorized repository publication
**Publication authority:** the separate, bounded Mission Control Git-write grant under Protocol §16 that follows MC-548 exact-content approval
**Baseline:** `main@1c0211422996f799a926a51ddfdfab90647a345a`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder decision (verbatim)** | Section 1.1 only | The Founder |
| **Accepted packet wording of Option B** | Section 1.2 | None. It is the accepted packet's proposed decision text, not the Founder's words |
| **Mission Control interpretation** | Section 2 | Mission Control, as recorded in MC-546 |
| **Definition Actor analysis** | Sections 3–7 | None. Analysis and boundary accounting for review |

Where Sections 1.2–7 summarize, Section 1.1 prevails. Where Sections 3–7 differ from Section 2, Section 2 prevails.

**Identifier check.** At `main@1c0211422996f799a926a51ddfdfab90647a345a`, the string `18:FPDR-5` appears in no SB-P-1.18 record. `claude-code/11-stage3-founder-product-decision-record-18-fpdr-2.md` §0 reserves `-5` for F-5 "without presuming any outcome". `18:FPDR-1`, `-3` and `-4` stay reserved for F-1, F-3 and F-4.

## 1. The decision

### 1.1 Verbatim Founder statement (MC-546)

> "Founder F-5 decision: I select Option B. Record this selection for Mission Control review under MC-546. Do not make Git changes yet."

The Founder's "Do not make Git changes yet" applied when the selection was made. This record reaches the repository only under the separate, bounded Mission Control Git-write grant that follows MC-548 exact-content approval. That grant is not inferred from the selection, and MC-546-A and MC-547 authorized read-only drafting only.

### 1.2 Option B as worded in the accepted F-5 v2 packet (not the Founder's words)

The F-5 v2 packet ([PR #1084 comment 6416569055](https://github.com/SmartBusinessv1/smart-business/pull/1084#issuecomment-6416569055)) was accepted for Founder consideration under MC-544. Its §5 words Option B as:

> *"Source 11 'overtime records' is a distinct SB-P-1.18 Staff/HR recording obligation. An overtime record may originate from a manual report, a system-proposed entry or a manager entry, including disputed entries. It may cite approved shift and attendance records as evidence, but they do not define overtime. It is reviewed and corrected by authorized humans with audit, is visible only to authorized roles and the employee's own record, and is never punitive. The definition of overtime, eligibility, thresholds and any calculation are not decided here. They remain payroll assistance under Contract 06 §8, subject to qualified Indian employment/payroll validation before the EIS."*

## 2. Mission Control interpretation (as recorded in MC-546)

Recorded in [PR #1084 comment 6417022964](https://github.com/SmartBusinessv1/smart-business/pull/1084#issuecomment-6417022964).

**Option B** treats Source 11's "overtime records" as a **distinct, directly testable SB-P-1.18 Staff/HR recording obligation**.

- **Later rows.** A later, separately authorized FCTM reconciliation may create Source 11-cited rows for record creation, authorized human review, auditable correction, role-scoped access (including the employee's own-record access) and audit.
- **Record origins.** Manual, system-proposed, manager-entered and disputed records are allowed, subject to human review.
- **Shift and attendance facts** may be evidence, **not** a legal definition of overtime.

**Excluded from the selection:**
- any overtime threshold or eligibility definition;
- any statutory multiplier or wage computation;
- autonomous employee judgement or sanction;
- any new legal conclusion, database change or implementation.

**Unchanged:**
- Contract 06 §8 payroll support stays assistive.
- Qualified Indian employment/payroll advice is required before EIS calculation or legal-rule specification.
- Source 11 is not modified.

## 3. Source position and classification (Definition Actor analysis)

| Source | Clause | Position |
|---|---|---|
| Source 11 (`merge/active/11_Smart_Business_Product_Truth_Map.md`, blob `16897d6c875bb3e45e26cd32a99bc0510c4bdea1`) | Staff / HR Assistant Add-on, "Includes:" (L436–444), **L443 "overtime records"**; L444 "payroll assistance"; Employee can/cannot (L446–454); Employee role (L61–77); Upgrade, "Owner/approved manager controls changes" (L759–774) | Overtime records are an explicit Staff/HR inclusion. Source 11 is a constitutional source above the contracts (Source 18 §2) |
| Contract 06 (blob `ebacd183`) | §3 b3 shifts, b4 attendance events, b6 "payroll-support calculations and context"; §4 role model; §7 event and context preservation; §8 payroll support (assistive, human-controlled; p2 "may help calculate or prepare"; b1–b4 prohibitions); §12, §13 | **No unit names overtime** |
| Contract 17 (blob `7943f74a`) | §9 b5 "payroll support/export", under the lead-in "permitted workspace views may include" | No overtime unit |
| FCTM (blob `c97ec77e`) | `6-§3-6`, `6-§8-2`, `17-§9-5` cite `U-05` | None describes creating an overtime record |

**Absence evidence.** Across `merge/active/` and `docs/phase-1-mission-blueprint/`, the word "overtime" appears only at Source 11 L443.

**Classification.**
- **T2:** Source 11 names a record type that Contract 06 does not represent as a distinct, testable obligation (register `05-…` U-05). The Founder's selection resolves it **only as to representation**, by confirming the Source 11 recording obligation as distinct. The matters listed in Section 6 stay unresolved.
- **Not T7:** nothing is omitted, deferred, pulled forward, simplified or reassigned. The selection adds representation of an obligation already in approved truth. It does not add or reduce scope.
- **Not T1 or T3:** the obligation already exists in an approved source. The selection decides how it is represented, not whether it exists.
- **T8:** not applicable at Stage 3. If qualified employment/payroll advice later requires a product-truth change, that is a T8 matter returned to the Founder through Mission Control.

### 3.1 Consequences for Source 11 and Contract 06

| Source | Consequence |
|---|---|
| Source 11 | **Not modified.** L443 "overtime records" is represented, for SB-P-1.18, as a distinct, directly testable recording obligation |
| Contract 06 | **Not amended.** §8 stays assistive; §3, §4, §7, §12 and §13 govern how the record behaves |
| Both | No wording note or amendment is made or authorized by this record |

## 4. What the decision does and does not do (Definition Actor analysis)

**It does:**

1. **Establish** overtime **recording** as a distinct SB-P-1.18 Staff/HR obligation, cited to Source 11 L443.
2. **Allow** a record to originate from a manual report, a system-proposed entry or a manager entry, **including disputed entries**. Each is subject to authorized human review. A disputed entry enters the review and context flow rather than being silently erased (C6 §13 p2). The original entry, its context and its correction provenance are preserved (C6 §7), **subject to the applicable retention, minimisation and lawful deletion or hold rules. This record decides no retention period and does not imply indefinite retention.**
3. **Permit** approved shift and attendance records to be cited as **evidence**. They are not the definition of overtime.
4. **Require** authorized human review, auditable correction that preserves the original and its context (on the same retention terms as item 2), role-scoped visibility (Owner, authorized Manager, and the employee's own record; C6 §4; Source 11 L446–454), and audit.

**It does not:**

1. Define overtime, eligibility, statutory thresholds, multipliers, rates or wage amounts.
2. Authorize automatic wage calculation. Any calculation remains assistance under C6 §8 p2 and must not "fabricate legal/payroll authority" (C6 §8 b4).
3. Permit judgement or sanction of an employee. That stays prohibited: C6 §8 b1–b3; C6 §12 b7; BP §10.7 B b7–b8; BP §16.
4. Make any legal conclusion, database change, Blueprint or EIS text, or implementation.

## 5. Professional-validation holds (retained; before the EIS)

**Hold.** Qualified Indian employment/payroll validation (`DLEG`) is required **before the EIS specifies any calculation or legal rule**.

The questions from the accepted F-5 v2 packet §7 are retained unchanged:

1. **Applicability and commencement** by state, sector and headcount: State Shops and Establishments Acts; the Factories Act 1948 where applicable; the minimum-wages and payment-of-wages regimes; the Code on Wages 2019 and OSH Code 2020, with central and state rules.
2. **Definition, eligibility and thresholds** of overtime.
3. **Rates and wage base**, and whether the product may assist at all.
4. **Registers:** prescribed overtime, attendance and wage registers, and whether an electronic record may serve as or support them.
5. **Record-class retention** for overtime, attendance and wage records. This is distinct from F-1 location retention and is not inferred from lifecycle windows (C22 §33.4).
6. **Consent and caps:** employee consent to overtime and maximum hours.
7. **Data protection:** the DPDP Act 2023 and its Rules. Covers the basis for processing, notice, employee access and correction, and the merchant's role versus Smart Business's role.
8. **Assistive-positioning wording.**

The questions are recorded here as holds, not answers. The Founder confirmation in Section 1.1 does not satisfy them.

## 6. Future FCTM implications (accounting only; no row is changed by this record)

**Existing rows, affected after reconciliation:**

| Row | Current state | Expected reconciliation (proposal; Mission Control decides) |
|---|---|---|
| `6-§3-6` | `IN SCOPE`; cites `U-05 (overtime, S11)` | `U-05` is resolved **as to the recording obligation's representation only**, citing `18:FPDR-5`. The row stays the payroll-support row. Overtime **recording** is carried by the new rows |
| `6-§8-2` | `IN SCOPE`; cites `U-05` | As above. Stays assistive and permissive ("may help calculate or prepare") |
| `17-§9-5` | `IN SCOPE`; cites `U-05` | As above. Whether the payroll export carries overtime fields stays open (Section 7) |

**Not resolved by `18:FPDR-5`, and not to be cleared by any reconciliation citing it:**
- the legal definition of overtime;
- eligibility and thresholds;
- calculation;
- export content;
- record-class retention of overtime records;
- the Section 5 professional-validation holds.

The `DLEG` dependency and any other dependency on these rows stay in place. There is no blanket clearing of dependencies.

**New rows, created only by a later, separately authorized FCTM reconciliation:**
- Source 11-cited rows for (a) record creation (all origins), (b) authorized human review, (c) auditable correction (including disputed entries), (d) role-scoped visibility including the employee's own record, and (e) audit.
- Each: owner SB-P-1.18; disposition `IN SCOPE`; commitment as the GPCV gives for Contract 06 (`ADD-ON + BUILD NOW`, as on the `6-§*` rows); workstream B; Founder decision `18:FPDR-5`.
- Expected dependencies: `D12`, `DSCH`, `DLOC` (attendance as evidence only), and `DLEG` for anything touching definition or calculation.

**Row-ID scheme.** FCTM §0.1 has no form for Source 11-anchored rows today. The reconciliation must fix the identifiers, for example S11-anchored or C6-anchored IDs, as the Brief §3 F-5 item 7 anticipated. This record does not assign identifiers.

**Preserved unchanged:**
- `6-§3-3`, `6-§3-4`, `6-§3-5`;
- `6-§7-1` to `-6`;
- `6-§8-1`, `6-§8-3` to `-7`;
- `6-§12-*`;
- `6-§13-*`;
- `6-§14-8`;
- `17-§9-7`.

**Disposition counts.** No count changes until the reconciliation. Afterwards, `IN SCOPE` increases by the number of new rows created. `ESCALATED` is unaffected by this record.

**Acceptance.** The Stage 4 Blueprint (not authorized) would need §15 acceptance items for overtime create, review, correct, view and audit. That is noted for later stages only.

## 7. Questions that remain unresolved

| Question | State |
|---|---|
| F-1 — location purpose, access expiry, retention and erasure | **Unresolved.** `22-§16-6` stays `ESCALATED`. Qualified Indian legal/privacy advice is a prerequisite to a binding Founder decision |
| F-3 — customer-facing interactions before SB-P-1.20 | **Unresolved** |
| F-4 — permissive mechanisms | **Unresolved**. DC-14 is pending a Mission Control T6 determination |
| F-5 items left open by this decision | Definition, eligibility, thresholds and calculation (validation hold, Section 5); whether `17-§9-5` export carries overtime fields; retention of overtime records (validation item 5) |
| Source-semantics screening of C6 §8 p2 and C17 §9 permissive wording | Separate Mission Control item (MC-544) |

This record decides F-5 only.

## 8. Publication boundary

This record publishes the Founder's F-5 decision and its accounting. **It does not by itself change:**
- the FCTM (`claude-code/03-stage2-populated-fctm.md`) or the Stage 2 registers;
- Source 11, Contract 06 or 17, or the Build Plan;
- any Blueprint, EIS or implementation.

Any FCTM reconciliation needs a separate Mission Control authorization under Source 18, with independent verification.

**Not approved and not implied:** completion of Stage 3; any decision on F-1, F-3 or F-4; any overtime definition or calculation rule; Blueprint drafting; implementation.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** Stage 3: OPEN. Implementation: WITHHELD.
