# SB-P-1.12 — Stage 3 Gate Evidence and 15-Row FCTM Reconciliation (DRAFT)

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Status:** `DRAFT — MISSION CONTROL REVIEW REQUIRED BEFORE FOUNDER HUMAN MERGE`
**Prepared by:** Claude Code, MC-02 appointed Definition Actor, Stage 3 documentary preparation only
**Companion record:** `founder/03-stage3-founder-product-decision-record.md` (Founder Decisions `FPDR-1`–`FPDR-4`)
**FCTM reconciled at:** `claude-code/03-stage2-populated-fctm.md`, Correction note 7 (this same pull request)

---

## 1. Purpose

This document separates (a) the Founder's confirmed product answers, (b) Mission Control's own documented T6/T8 technical assessment, and (c) the security evidence that remains outstanding regardless of the Founder's decision — and provides the before/after FCTM row-ID crosswalk Source 18 §3.2 item 6's completeness test requires. It proposes a Stage 3 gate-closure structure for Mission Control's review; it does not itself close the gate.

---

## 2. Before/after row-ID crosswalk — all 15 reconciled rows

| Row ID | Obligation | Disposition before (canonical, PR #624/MC-12) | Assigned mission before | Disposition after (this DRAFT) | Assigned mission after | Founder Decision |
|---|---|---|---|---|---|---|
| `22-§12-1` | Recipient identity/role | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-2` | Language | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-3` | Channel preference/availability | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-4` | Template/provider requirements | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-5` | Delivery/retry state | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-6` | Duplicate suppression | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-7` | Privacy | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-8` | Link to originating business event | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§12-9` | Delivery tracked separately from business-event completion | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.15` | `FPDR-1` |
| `22-§16-1` | Shared purpose-limited primitive (construction) | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.18` | `FPDR-2` |
| `22-§16-3` | Each feature must define why location is needed | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.18` (named instance: attendance/delivery) | `FPDR-3` |
| `22-§16-4` | Each feature must define who may see it | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.18` (named instance: attendance/delivery) | `FPDR-3` |
| `22-§16-5` | Each feature must define when it is captured | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.18` (named instance: attendance/delivery) | `FPDR-3` |
| `22-§16-6` | Each feature must define how long it is retained | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.18` (named instance: attendance/delivery) | `FPDR-3` |
| `22-§16-7` | Each feature must define when access ends | `ESCALATED` | `PENDING FOUNDER ASSIGNMENT` | `ASSIGNED TO LATER MISSION` | `SB-P-1.18` (named instance: attendance/delivery) | `FPDR-3` |

**Unchanged, not part of this reconciliation (retained here only as adjacent context):** `22-§16-2` (`IN SCOPE`, `SB-P-1.12`) and `22-§29-9` (`ASSIGNED TO LATER MISSION`, `SB-P-1.18`).

**Totals:** 9 rows → `SB-P-1.15`; 6 rows → `SB-P-1.18`. `IN SCOPE` 228 (unchanged) + `ASSIGNED TO LATER MISSION` 113 (was 98, +15) + `DELEGATED` 2 (unchanged) + `NOT APPLICABLE` 30 (unchanged) + `ESCALATED` 0 (was 15) = 373 (unchanged). `grep`-verified in `03-stage2-populated-fctm.md` §G.

---

## 3. The representational gap in `22-§16-3` through `22-§16-7`, and how it is handled here

**The precise ambiguity, named explicitly per the live instruction's own escalation clause:** the FCTM's `Assigned mission` column is designed to name **one current mission owning an obligation**. The Founder's actual decision for these 5 rows is not that kind of single-owner assignment — it is a **standing, recurring rule** ("the owning mission of *each* location-consuming feature defines its own five disclosures") for which `SB-P-1.18` is currently the *only named instance* (attendance and delivery), not the rule's exclusive or permanent owner. A bare `SB-P-1.18` value in that column, without qualification, would misstate the decision by implying `SB-P-1.18` owns every future consuming feature's disclosures — exactly what the live instruction says must not be asserted.

**Resolution attempted, not an escalation-without-delivery:** rather than stop without producing the requested draft, this reconciliation:
1. Writes the `Assigned mission` cell as `SB-P-1.18 (named instance: attendance/delivery)` — not a bare mission ID — on all 5 affected FCTM rows.
2. Carries the full qualification in each row's own citation cell (`03-stage2-populated-fctm.md`), pointing to `FPDR-3` and to this section.
3. States the general, recurring, future-binding rule explicitly and separately here and in `FPDR-3` itself, rather than folding it into a single-mission FCTM cell.

**This is offered for Mission Control's explicit confirmation, not asserted as beyond question.** If Mission Control judges that even this qualified encoding still risks a future reader mis-skimming the table as an exclusive `SB-P-1.18` grant, the alternative is to leave these 5 rows' `Assigned mission` cell **more generic** (e.g. "owning mission of the consuming feature, per Contract 22 §16") and record `SB-P-1.18`'s own attendance/delivery instance only in the citation prose and in `FPDR-3` — a stylistic choice between two truthful encodings, not a further product decision. Mission Control's review of this pull request is the appropriate place to settle which encoding it prefers; both are prepared to be truthful to the Founder's actual decision.

**What is not in question:** no future location-consuming feature's mission is exempted from this recurring obligation by this reconciliation; no future mission is pre-assigned as its owner either. Each future instance is its own future finding, to be recorded against whichever mission actually proposes that feature, at that time.

---

## 4. Founder-confirmed product answers vs. Mission Control's technical assessment — kept separate

**Founder-confirmed (product):** `FPDR-1` (Notification → `SB-P-1.15` workstream), `FPDR-2` (Location primitive → `SB-P-1.18` workstream), `FPDR-3` (per-feature disclosure accountability structure), and the confirmation in `FPDR-4` that no *additional product requirement* follows from T4/T6/T8. These are the Founder's own answers, transcribed, not Mission Control's or Claude Code's technical judgment.

**Mission Control's own technical assessment (not a Founder product decision):** the T6 determination that DC-1/DC-2/DC-3 are design/verification-planning implications of already-approved behavior, not material behavior change — this is Mission Control's documented judgment call under Source 18's T6 text ("a derived constraint that Mission Control judges materially affects product behaviour"), which the instruction explicitly assigns to Mission Control, not the Founder. It is recorded in `mission-control/05-stage3-decision-record-preparation-authorization.md` §2 and restated in `FPDR-4`, kept distinguishable from the Founder's own confirmation that no further product requirement follows.

**Outstanding regardless of either:** live production `anon` grant/RLS/function-privilege/default-privilege state (`UNVERIFIED`); WS-B's actual production execution (`UNVERIFIED`); the Stage 7 independent Security & Permissions Architecture specialist (unappointed). None of these is resolved, certified or waived by the Founder's confirmation or Mission Control's T6/T8 assessment — both explicitly preserve them as open.

---

## 5. Dependency and future-mission verification mapping

- `SB-P-1.15` (Notification Foundation, `FPDR-1`): its own future Stage 1–4 process must itself expand and verify the 9 obligations now cited to it; this record does not pre-verify them.
- `SB-P-1.18` (Location Foundation primitive and named attendance/delivery disclosures, `FPDR-2`/`FPDR-3`): its own future Stage 1–4 process (or an already-scoped later stage of its existing mission lifecycle, if `SB-P-1.18` is already past Stage 4) must itself build and verify the primitive and the 5 disclosures for attendance/delivery specifically.
- `SB-P-1.20` (WhatsApp channel adapter): must demonstrate, at its own verification stage, that it reuses `SB-P-1.15`'s Notification Foundation rather than duplicating notification logic — a dependency this record establishes but does not itself verify.
- Any future location-consuming feature's owning mission: inherits the same 5-disclosure obligation under Contract 22 §16, independently of `SB-P-1.18`, at whatever future stage that feature is actually proposed.
- `SB-P-1.12` (this mission): retains ownership of the authority/permission/isolation rules the Location primitive consumes (`FPDR-2`); retains `22-§16-2`'s surveillance-rejection design constraint (unchanged); does not itself build any of the 15 reconciled rows going forward.

---

## 6. Proposed Stage 3 gate-closure structure (for Mission Control review, not self-declared)

If Mission Control confirms this reconciliation and the Founder human-merges this pull request, the proposed closure record would state: Stage 3 was `TRIGGERED` (T7 by the 15 `ESCALATED` rows, T4 independently by the `PRODUCT-AFFECTING` Delta); the Founder's confirmed decisions (`FPDR-1`–`FPDR-4`) resolve the T7-triggering assignment questions and confirm no additional T4/T6/T8 product requirement; T4's underlying security finding, WS-B's remediation objective, and the Stage 7 independent-review requirement remain open on their own, unaffected basis. **This document does not itself issue that closure record** — Source 18 §6 Stage 3 assigns that act to Mission Control/Founder, exact-head, after review.

---

## 7. Verification performed this cycle

- Independently re-verified `origin/main` at `7e9f9e97734d435154d6c7627434121b08012af3` is PR #627's exact merge commit before treating MC-16 as effective.
- Confirmed zero drift in Source 18, the Build Plan, GPCV, OLE promotions and the mature contracts between the PR #626 baseline (`488874b7`) and the current MC-16 baseline (`7e9f9e97`) — `git diff --stat` for those paths returns empty.
- Re-ran the FCTM's own `grep -c` reconciliation commands against the actual reconciled file content (not hand-computed); caught and fixed one self-introduced false-positive (three rows' Source-pointer prose restated the literal word "ESCALATED," which the disposition-counting `grep` matched despite those rows' actual Disposition cell already reading `ASSIGNED TO LATER MISSION"`) before finalizing the totals in `03-stage2-populated-fctm.md` §G.
- Confirmed `22-§16-2` and `22-§29-9` are byte-for-byte unchanged from the canonical Stage 2 file except for one added confirmation sentence on `22-§16-2` noting the Founder did not reopen it.
- Confirmed no row was added or removed; Contract 22's total row count remains 112; the file's total remains 373.
