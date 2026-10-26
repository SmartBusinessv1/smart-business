# SB-P-1.18 — Founder Product Decision Record `18:FPDR-2` (`SB-P-1.18 / F-2`): Live Tracking

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate (triggered; remains open)
**Status:** `FOR REVIEW — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor, under MC-528, executing §8 of `mission-control/06-stage3-founder-decision-gate-and-f2-record-publication-authorization.md` (blob `da541d46c4ddb16648045368ebf5b82662108ccc`, merged in PR #1081)
**Baseline:** `main@e1e39482a8801063f0564ee67100dc87b26f9624`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder decision (verbatim)** | Section 1.1 only | The Founder |
| **Accepted brief wording of Option A** | Section 1.2 | None. It is the brief's proposed decision text, not the Founder's words |
| **Mission Control disposition** | Section 2 | Mission Control, as recorded in `mission-control/06-…` §4 |
| **Definition Actor analysis** | Sections 3–7 | None. Analysis and boundary accounting for review |

Where Sections 1.2–7 summarize, Section 1.1 prevails.

**Identifier check.** `18:FPDR-2` and its alias `SB-P-1.18 / F-2` were verified unused on `main@650249b8` (`mission-control/06-…` §4.5). They are still unused at `main@e1e39482`, where the only occurrences are in that authorization record. `18:FPDR-1`, `-3`, `-4` and `-5` are reserved for F-1, F-3, F-4 and F-5, without presuming any outcome.

## 1. The decision

### 1.1 Verbatim Founder statement (MC-520)

> "Founder F-2 decision: I select Option A. Please record the decision for Mission Control review, including its Source 09/11 and T7 consequences. Do not make Git changes yet."

The Founder's "Do not make Git changes yet" applied when the selection was made. This publication is made under the separate bounded authority of MC-528 and `mission-control/06-…` §8. That authority is not inferred from the selection (`mission-control/06-…` §4.4).

### 1.2 Option A as worded in the accepted Founder Brief (not the Founder's words)

The accepted brief is published alongside this record as `claude-code/10-stage3-founder-decision-brief-and-annex.md` (SHA-256 `372e81f97e9c6e19a23c644996bfaca526a6b244fe19642654c01079a1eff52d`). Its §3, F-2, item 7(A) words Option A as:

> *"I approve reducing the Source 09/11 live-tracking step for SB-P-1.18: delivery visibility is live order/delivery status plus point-in-time location at destination and proof. Location-based live tracking is not committed in Phase 1 and needs a separately approved future purpose under Contract 22 §16."*

The brief is published byte-identical to the accepted version. Its header still reads "LOCAL DRAFT — NOT A REPOSITORY RECORD", which was its status when accepted, and is not edited.

## 2. Mission Control disposition (as recorded in `mission-control/06-…` §4)

- The Founder selected **F-2 Option A** (MC-520).
- The selection resolves a **T2** conflict between approved sources and is a **T7** scope reduction under the classification lock (Source 18 §3.2 item 5). It does not reinterpret the sources. Order-status updates are not treated as satisfying Source 11 under existing truth.
- Independent Engineering verified the treatment as documentary governance verification. That was not legal/privacy certification, implementation testing, FCTM reconciliation or canonical publication (`mission-control/06-…` §2).
- No row moves to another mission.

## 3. Source conflict and classification (Definition Actor analysis)

| Source | Clause | Position |
|---|---|---|
| Source 09 v3.0 (2026-07-30) | Smart Order & Delivery Assistant Pilot Scope, Required: "live tracking" | Live tracking required in pilot scope |
| Source 11 (2026-07-29) | Add-on flow: "Start delivery ↓ Live tracking (with geofencing where applicable for authorised delivery operations) ↓ Proof capture" | Live tracking is a flow step; constitutional source, above the contracts (Source 18 §2) |
| Contract 01 §14 b4 (2026-09-12) | Location may be used for "a user-requested or explicitly authorized live-tracking experience if separately designed under current privacy/security rules" | Optional and conditional |
| Contract 01 §14 p3, p4, p6 | Default continuous route GPS surveillance "is not a required/current behavior"; "must not continuously track an employee merely because a delivery assignment exists"; supersedes older seed wording | Default continuous tracking rejected |
| Contract 22 §16 | Approved uses: point-in-time attendance, delivery destination, point-in-time delivery proof, "other explicitly approved operational purposes"; default continuous employee surveillance rejected | Purpose-limited primitive |
| Build Plan §10.7 A (2026-09-12) | No live-tracking outcome; "no default continuous employee GPS surveillance" | — |

**Classification.**

- **T2:** the conflict is between Source 09/11 on one side and Contract 01 §14 and Contract 22 §16 on the other.
- **T7:** Option A reduces an approved Source 09/11 requirement. That is a change of commitment, which the classification lock reserves to the Founder.

### 3.1 Consequences for Source 09 and Source 11

| Source | Consequence |
|---|---|
| Source 09 (pilot scope "live tracking") | For SB-P-1.18, the pilot-scope requirement is met by live order/delivery status plus point-in-time location at destination and proof. Location-based live tracking is not a Phase 1 pilot commitment |
| Source 11 (flow step "Live tracking") | For SB-P-1.18, the step is reduced in the same way. The reduction is made by this decision, not by reinterpreting Source 11 |
| Both | **Neither source is amended.** Their text is unchanged. Any wording note or amendment to Source 09 or 11 is a separate governance action, outside this record and not authorized here |

## 4. What the decision does (Definition Actor analysis)

1. **Removes, intentionally,** mandatory Phase 1 location-based live GPS movement tracking from SB-P-1.18. This is recorded as a reduction.
2. **Preserves** live order and delivery status and purpose-limited point-in-time location at destination and proof, as the Phase 1 means of delivery visibility.
3. **Leaves** any future location-based live tracking possible only as a separately approved purpose under Contract 22 §16 b4. That purpose would need its own FPDR-3 disclosures and a retention decision.
4. **Does not** permit default continuous staff surveillance. That stays rejected (C1 §14 p3–p4; C22 §16 p3; BP §16 b3; GPCV §9 b3).

## 5. Affected and preserved FCTM rows (accounting only; no row is changed by this record)

**Affected**, pending a separately authorized reconciliation:

| Row | Current state | Expected reconciliation after merge (proposal; Mission Control decides) |
|---|---|---|
| `1-§14-5` | C1 §14 b4, live-tracking experience; `ESCALATED` (U-02) | No longer `ESCALATED`. Re-dispositioned with the `18:FPDR-2` citation, for example `OUT OF BUILD SCOPE`, or a reduced form recording "not committed in Phase 1; future separately approved purpose" |
| `22-§16-11` | C22 §16 b4, other explicitly approved purposes; `IN SCOPE`, held `HU-02` | Hold `HU-02` released. The rule stays `IN SCOPE`: no purpose beyond b1–b3 without explicit approval, now citing `18:FPDR-2` |

**Preserved unchanged:**

- **Order and delivery status:** `1-§11-1` (lifecycle), `1-§13-4` (mark started/out-for-delivery), `1-§17-5` (delivery started/status notification; its customer leg is still subject to F-3), `17-§10-1` (orders by state).
- **Point-in-time location:**
  - C1 §14: `1-§14-1` to `1-§14-4` and `1-§14-6` to `1-§14-13`;
  - C22 §16: `22-§16-1`, `22-§16-3` to `22-§16-5`, `22-§16-7` to `22-§16-10`, and `22-§16-6` (still `ESCALATED` under F-1);
  - proof, scenario and acceptance rows: `1-§15-5` (still `EX` under F-4), `22-§29-9`, `1-§26-9`.
- **No default continuous surveillance:** `1-§3-8`, `1-§14-6`, `1-§14-7`, `1-§25-5`, `22-§16-2`, `BP-§10.7-A8`; must-not-appear rows `1-§28-4`, `BP-§16-3`, `GPCV-§9-3`.

**Disposition counts.** No count changes until the reconciliation. Afterwards the expected change is `ESCALATED` 2 → 1, with `1-§14-5` moving to the disposition Mission Control chooses.

## 6. Questions that remain unresolved

| Question | State |
|---|---|
| F-1 — location purpose, access expiry, retention and erasure | **Unresolved.** `22-§16-6` stays `ESCALATED`. Option A fixes the Phase 1 location record classes as attendance location, delivery-proof location and customer destination, with no movement-trace class. Qualified Indian legal/privacy advice remains a prerequisite to a binding Founder decision |
| F-3 — customer-facing interactions before SB-P-1.20 | **Unresolved.** Option A creates no customer-visible live-location view. Customer status messages stay within F-3 |
| F-4 — permissive mechanisms | **Unresolved** and unaffected |
| F-5 — overtime records | **Unresolved** and unaffected |

This record decides F-2 only.

## 7. Publication boundary

This record publishes the Founder's F-2 decision and its accounting. **It does not by itself change:**

- the FCTM (`claude-code/03-stage2-populated-fctm.md`) or the Stage 2 register;
- Source 09 or Source 11, Contract 01 or 22, or the Build Plan;
- any Blueprint, EIS or implementation.

Any FCTM reconciliation, Blueprint citation or Source wording note needs a separate Mission Control authorization under Source 18, with independent verification (`mission-control/06-…` §6).

**Not approved and not implied:** completion of Stage 3; any decision on F-1, F-3, F-4 or F-5; Blueprint drafting; implementation.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** Stage 3: OPEN. Implementation: WITHHELD.
