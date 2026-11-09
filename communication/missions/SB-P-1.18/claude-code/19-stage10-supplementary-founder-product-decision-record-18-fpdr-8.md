# SB-P-1.18 — Supplementary Founder Product Decision Record `18:FPDR-8`: System-Proposed Overtime Flow (Supplementary to `18:FPDR-5`)

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.3, during Stage 10 (EIS review HELD); after the Stage 8 Blueprint Lock and the Track A post-lock correction (PR #1123)
**Status:** APPROVED — CANONICAL; Founder-human-merged PR #1124, commit 4f6700c3525a6d73435f9e0d8ea028bdc0bdc8c1, 2026-11-09T19:43:25Z; Mission Control postmerge verified in PR #1124 comment 6749713505. Previous state: DRAFT — NOT EFFECTIVE until human merge and verification.
**Decides:** the product behaviour of the `system_proposed` overtime origin already allowed by `18:FPDR-5` Option B, and the related reviewer, visibility, enablement, duplicate, content and evidence-change choices (Founder selections A–I, R-a and R-b). No other row, record or source is decided or edited.
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor. Drafted read-only as a candidate ([PR #1111 comment 6748632956](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748632956)) and published as a draft under the Mission Control one-use grant below
**Publication authority:** Mission Control's separate one-use draft-PR grant ([PR #1111 comment 6748856795](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748856795) §IV). The Founder did not authorize Git edits, and this draft is not Founder approval of its bytes
**Decision identifier:** `18:FPDR-8` is FINAL and CANONICAL, effective through the PR #1124 merge and Mission Control post-merge verification. *History:* proposed at drafting; a full-tree preflight at the baseline found no `18:FPDR-8` occurrence (the `16:FPDR-8` identifiers belong to SB-P-1.16)
**Baseline:** `main@90b84eebbf66c047c9b6bd87f12bc1dc21e1ec8f`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

**Supplementary, not superseding.** This record adds to canonical `18:FPDR-5` (`claude-code/12-stage3-founder-product-decision-record-18-fpdr-5.md`, blob `2714f896dc4669b2cd4d20e2de90a8c584b9b4b4`), which stays canonical and unchanged. It amends no Source, contract, FCTM, Blueprint, EIS or earlier Founder record, and it creates no new Source 11 obligation.

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder statements (verbatim)** | Section 1.1 and 1.2 | The Founder |
| **Earlier Founder decisions** | Section 1.3, by reference only | The Founder, in the cited records |
| **Mission Control interpretation (verbatim extracts)** | Section 2 | Mission Control, subordinate to Section 1 |
| **Definition Actor accounting** | Sections 3 to 9 | None. Sections 1 and 2 prevail |

The Founder statements in Section 1 were given directly to Mission Control and transcribed by Mission Control into the cited GitHub comments. They are not Founder-authored GitHub comments. Each is reproduced below exactly as recorded there, with only the blockquote marker removed.

## 1. Founder statements

### 1.1 Selections A–I (verbatim)

Source: [PR #1111 comment 6748310308](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748310308), §I.

```text
**FOUNDER MC-817 — Product decision direction for SB-P-1.18. My selected choices are:**

**A.** Owner may review their own draft; a Manager's draft needs the Owner or another separately authorized reviewer

**B.** An authorized Owner/Manager explicitly saves and approves it in one action

**C.** Use an explicit recorded association; request clarification where matching is uncertain

**D.** Only reliable attendance extending beyond the approved shift end

**E.** Their own reviewed overtime record and correction status; preliminary flags/drafts remain authorized reviewer-only

**F.** Separate, recorded Owner opt-in for each business, in addition to Staff/HR entitlement

**G.** Show an existing active flag/draft and prevent duplicate system proposals for the same evidence version

**H.** Neutral evidence references, origin, status and human attribution; no calculated overtime hours or pay

**I.** Automatically mark the neutral flag as superseded, preserve audit history and require human review of affected drafts

**Additional comments: None**

**These are my product-experience decisions only. Existing human review, permissions, three overtime origins, audit protections and dignity safeguards remain mandatory. DLEG legal/retention matters remain held. Do not interpret this response alone as Git edit, EIS lock, merge, or implementation authorization.**
```

### 1.2 Final product clarifications R-a and R-b (verbatim)

Source: [PR #1111 comment 6748856795](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748856795), §I.

```text
FOUNDER MC-817 — Final product clarifications. R-a employee pending manual report: Only a neutral receipt acknowledgement; the unreviewed report remains reviewer-only. Pending manager entries remain reviewer-only, subject to DLEG. R-b withdrawal/lapse: Freeze new actions and consequential pending-draft review until entitlement and Owner opt-in are restored; preserve authorized status/history access subject to DLEG. These are Founder product decisions, not authorization for Git edits, EIS lock, merge or implementation.
```

### 1.3 Earlier Founder decisions (by reference; not restated)

| Decision | Record |
|---|---|
| Three overtime-record creation origins (manual report, system-proposed entry, manager entry); disputed is a condition, not a fourth origin | [PR #1111 comment 6741589012](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6741589012) §I, Track A. Applied canonically in FCTM blob `ed2ff0f99e6982a15b650b5aee09e01e9355e0fd` and Blueprint blob `f9bfd0a2f6995f9956c76425fef3bff673cc7266` (PR #1123) |
| Track B product direction (neutral assistant; no automatic eligibility, pay, accusation or penalty; proposals non-effective until review) | [PR #1111 comment 6741589012](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6741589012) §I, Track B |
| Initiation clarification | [PR #1111 comment 6741773963](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6741773963) §I |
| R-1: every `system_proposed` draft requires a prior neutral flag; human initiation and human review are mandatory | [PR #1111 comment 6744151231](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6744151231) §I |

## 2. Mission Control interpretation (verbatim extracts; subordinate to Section 1)

Source: [PR #1111 comment 6748856795](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748856795), §II. Mission Control's mapping of A–I to the open questions is in [PR #1111 comment 6748310308](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748310308), §II.

> **R-a (E, employee view):** Following submission of their own *manual* overtime report, the employee receives **only a neutral acknowledgement of receipt** before authorized review. The *unreviewed underlying report/details* remain reviewer-only, as do preliminary S1 flags, non-effective system drafts and pending Manager-entered overtime entries. After review, the employee's permitted own-record view includes the reviewed overtime record and its correction status. Required legal notice, employee access/correction rights and the lawful basis are separate **DLEG** issues; this product preference cannot override those duties.

> **R-b (F, Owner opt-in/entitlement lapse):** When either recorded per-business Owner opt-in **or** active Staff/HR entitlement is missing, **no new S1 flag, S2 human initiation, S3 system draft or S4 consequential pending-draft review** is authorized. Existing pending work freezes until both requirements are restored **and** current grant/authority, evidence and review requirements are revalidated; it does not silently resume on stale facts. An appropriately authorized status/history view may remain to the extent lawful and allowed by the existing kernel. No silent erasure, automatic review, automatic payroll effect or continuing unattended proposal processing. Retention, notice, access, deletion, legal holds and any regulatory duty to process pre-existing items remain **DLEG-held**; product freeze cannot prohibit legally mandatory action.

> **R-c (B)** was already accepted as a narrow interpretation: each current changed manual-shift version needs an explicit authorized save-and-approve before use for an S1 flag. **R-d (C)** was already accepted narrowly: a deterministic linkage recorded at attendance capture qualifies as an explicit recorded association *only if* the exact approved shift version and attendance evidence relationship is persisted, authorized, unambiguous, auditable and current; mere time-overlap guessing does not. No new Founder interpretation required. Multiple ambiguous/split events fail closed to clarification.

## 3. Combined product behaviour (Definition Actor accounting; Sections 1 and 2 prevail)

| Step | Behaviour | Founder or Mission Control basis |
|---|---|---|
| Prerequisite | The business holds the Staff/HR entitlement **and** a separate, recorded, per-business Owner opt-in. If either is missing, no new flag, initiation, draft or consequential pending-draft review proceeds; existing pending work freezes until both are restored and revalidated | F; R-b |
| S1a — approved shift | An imported roster shift is approved only after human confirmation. A manual shift, and each changed manual-shift version, is approved only by an explicit save-and-approve action by an authorized Owner or Manager | B; R-c; Contract 06 §6 |
| S1b — association | Shift and attendance correspond only through an explicit recorded association. A deterministic link recorded at capture qualifies only if persisted, authorized, unambiguous, auditable and current. Uncertain, multiple or split cases go to clarification. No time-overlap inference | C; R-d |
| S1c — neutral flag | A neutral flag arises only where reliable, associated attendance extends beyond the approved shift end. Late arrival, early leave and other mismatches never produce an overtime flag. Missing, conflicting or pending-correction facts are clarification cases | D; R-1 |
| S2 — initiation | The Owner or a currently authorized Manager affirmatively initiates on a prior flag. No automatic draft and no initiation without a flag | R-1 |
| S3 — draft | Non-effective, origin `system_proposed`, containing only neutral evidence references, origin, status and human attribution; no calculated overtime hours or pay. An existing active flag or draft is shown and a duplicate system proposal for the same evidence version is prevented; separately created manual or manager entries are kept | H; G |
| S4 — review | The Owner may review their own draft. A Manager's draft needs the Owner or another separately authorized reviewer | A |
| Employee view | After submitting a manual report, the employee receives only a neutral receipt acknowledgement; the unreviewed report, flags, drafts and pending manager entries stay reviewer-only. After review, the employee sees their own reviewed record and its correction status | E; R-a |
| Evidence change | The flag is automatically marked superseded with audit history preserved, and affected drafts require human review. No automatic approval and no silent change to an effective record | I |

Unchanged: the three creation origins; dispute as a condition; human review; permissions; audit; dignity safeguards; the `18:FPDR-5` Section 2 exclusions and Section 5 professional-validation holds, which D and H reinforce.

## 4. Source mapping (accounting only; nothing is modified)

| Item | Identity | Effect of this record |
|---|---|---|
| Source 11 obligation | `merge/active/11_Smart_Business_Product_Truth_Map.md`, blob `16897d6c875bb3e45e26cd32a99bc0510c4bdea1`, line 443 "overtime records" | One existing obligation. No new obligation |
| FCTM facet rows | `claude-code/03-stage2-populated-fctm.md`, blob `ed2ff0f99e6982a15b650b5aee09e01e9355e0fd`, rows `S11-L443-1` to `-5` (lines 644 to 648) | Unchanged. `-1` creation: R-1, B, C, D, F, G, H; `-2` review: A; `-3` correction and dispute: I, G; `-4` visibility: E, R-a; `-5` attribution: H, I |
| Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.18.md`, blob `f9bfd0a2f6995f9956c76425fef3bff673cc7266`: §8.10, §15.4, §19 rows `S11-L443-*`, §20.4.9, §20.8 rows `S11-L443-*` | Unchanged |
| Stage 8 frozen fields | Disposition, build commitment, commercial classification and mission assignment of the five rows | Unchanged |
| FCTM and Blueprint citation of `18:FPDR-8` | Source 18 §3.2 item 1 | Not made by this record. Whether any citation is required is a separate Mission Control determination; the locked FCTM and Blueprint stay unchanged unless a separately authorized correction is issued |

## 5. Product choice, engineering design and legal holds

| Kind | Content | Owner |
|---|---|---|
| **Product choice (this record)** | Sections 1 and 3 | The Founder |
| **Engineering design (later EIS)** | Flag-read capability or same-target composite; separate governed initiation boundary; reviewer eligibility per A; approved-shift versions; association record; reliability conditions; flag materialization; duplicate key per evidence version; supersession state; opt-in record and freeze behaviour; confirmation binding, revocation and idempotency under the locked SB-P-1.12 kernel. No key, schema or command is adopted here | The SB-P-1.18 EIS author, under a later separate grant, with independent review |
| **`DLEG` (qualified validation)** | Employment and payroll applicability; statutory overtime status, hours, rates and registers; DPDP processing basis, notice and employee access and correction; retention, erasure and lawful holds (including superseded flags, pending and rejected drafts and opt-in history); consent and caps; assistive wording | Qualified Indian employment, payroll and data-protection review. A product choice here does not override a legal duty |

## 6. Source 18 classification (Definition Actor analysis)

| Trigger | Position |
|---|---|
| T1 — question no approved source answers | Fires. No source specified the system-proposed trigger or these behaviours |
| T3 — new product decision | Fires. Recorded here; effective only on human merge (Source 18 §3.3 item 4) |
| T7 — omission, deferral or simplification | Screened, not fired. All three origins stay reachable; no requirement is reduced |
| T8 — later conflict or infeasibility | Conditional on `DLEG` findings |
| T2, T6 | None identified; no determination made |

## 7. Negative controls (binding as product direction)

- No automatic overtime eligibility, legal hours, payable-hour logic, rate, wage or payroll change.
- No calculated overtime hours or pay in any flag or draft.
- No minimum or numeric threshold, and no time-window inference.
- No overtime flag from late arrival, early leave or other mismatch; no accusation, score, sanction or misconduct inference.
- No automatic draft creation; no AI-inferred, automation-rule or background-job initiation; no initiation without a prior flag.
- No AI or autonomous review; no Manager review of their own draft.
- No continuous surveillance and no new reuse of location data.
- No exposure of flags, drafts or unreviewed reports to the employee, and no exposure of another employee's data or Owner intelligence.
- No silent erasure, automatic approval or silent amendment of an effective record.

## 8. Effect on the EIS

None now. In draft EIS PR #1111 (head `8410e949d7eb6627ab33bea9d50672014221c688`, blob `cd3835eaef103a29cb7081652eca2eb334ca7f54`), `overtime.propose_system` stays `OVT_TRIGGER_HELD` and `EIS18-OVT-02` stays held. `S11-L443-1` stays `IN SCOPE` and incomplete. Any positive EIS contract needs a later separate grant and independent exact-delta review.

## 9. Governance trace

| Step | Record |
|---|---|
| No-selection brief | [PR #1111 comment 6740880347](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6740880347) |
| Q-6 security specialist finding and acceptance | [PR #1111 comment 6746975626](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6746975626); [comment 6748169515](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748169515) |
| Founder A–I | [PR #1111 comment 6748310308](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748310308) |
| Consolidated candidate | [PR #1111 comment 6748632956](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748632956) |
| Founder R-a and R-b; publication grant | [PR #1111 comment 6748856795](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6748856795) |
| Publication gate record | `mission-control/10-stage10-supplementary-founder-decision-record-publication-gate.md` |

## 10. Publication boundary

This record is a draft. It becomes the canonical supplementary decision only on Founder human merge and Mission Control post-merge verification. It does not change `18:FPDR-5`, Source 11, Source 18, Contract 06, Contract 21, the FCTM, the Blueprint or any EIS, and it authorizes no implementation, SQL, migration, provider action or runtime test.

**Holds unchanged:** `DLEG`, `SA02-18-F03`, `PQ-14`, the §19 role, Stock, Cabinet and COD signatures, and `OVT_TRIGGER_HELD`. SB-P-1.18 Stage 10 acceptance HELD; Stage 11 EIS lock NOT AUTHORIZED.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** Implementation: WITHHELD.
