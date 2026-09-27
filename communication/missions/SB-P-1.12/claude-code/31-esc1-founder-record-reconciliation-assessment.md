# SB-P-1.12 — Founder Record 05 Reconciliation Assessment

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Prepared by:** Claude Code, MC-02-appointed Definition Actor, evidence assessor and documentary preparer only (MC-78, `communication/live/instruction1.7.md`, work package `SB-P-1.12-WP-ESC1-RECONCILIATION-ASSESSMENT`)
**Prepared:** 2026-09-27
**Canonical baseline:** `main@7a30afb1a41ed40189faf0fcd40390d1dea36ae2` (PR #656, MC-79)
**Status:** `RECONCILIATION ASSESSMENT AND PROPOSAL — FOR MISSION CONTROL REVIEW — CHANGES NOTHING — NO T1/T7 CLASSIFICATION, NO G-4 CLOSURE, NO T3 ROW ACCEPTANCE`

## 1. Scope and evidence

This assessment identifies what would need reconciling after Founder Record 05 (FR05, `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md`, blob `f52b5ebd8a4040d114f2ca8629f1a56bcbb608c2`, merged through PR #655 at `main@e86159da6c84f3ae09ad0c78308b3d0acb28b0d4`, MC-77). It edits nothing and decides nothing. Line references are to canonical `main@7a30afb1`.

| Short name | Path |
|---|---|
| FR05 | `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md` |
| Blueprint | `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` |
| FCTM | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` |
| C18, C20, C21, C22, C03 | `docs/phase-1-mission-blueprint/smart-business-features/` files `18_…`, `20_…`, `21_…`, `22_…`, `03_…` |
| Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` |
| SEC-01, SEC-03 | `communication/missions/SB-P-1.12/specialists/01-…-original.md`, `03-…-final-focused-verification.md` |

**Evidence classes.** "DDL" means repository migration files only. Nothing was executed. Runtime and production state are `UNVERIFIED` (G-6, T4).

**Source availability.** No separate "Product Truth registry" or "G-4 registry" file exists in the repository. G-4 is held in three canonical ledgers (Section 2). This is recorded as a fact, not treated as a missing source.

## 2. Delta 1 — G-4 multiple-business ownership

**Founder decision:** FR05 Founder Decision ESC1-1 and §7 (lines 205–207). One person may own multiple businesses.

**Where G-4 is currently held**

| Location | Line | Current state | Reconciliation needed |
|---|---|---|---|
| `claude-code/21-stage7-readiness-record.md` (readiness ledger) | 40 | OPEN | Record as answered by FR05. Historical ledger; Mission Control decides whether to annotate it or record closure elsewhere |
| `mission-control/17-stage7-prerequisite-disposition-and-reviewer-appointment-gate.md` (MC-30) | 51, 153 (S-2) | OPEN; S-2 flagged | Same. S-2 (whether a decision was needed) is superseded by the decision |
| `mission-control/21-stage7-engineering-review-activation-record.md` (MC-35 §7) | 113 | Retained dependent gate | Same |
| `specialists/02-…-delta-re-review.md` | 214 | Reviewer's record: OPEN | Specialist record; not amended |

**Blueprint places that assume or hold single ownership**

| Blueprint location | Line | Current content | Would need |
|---|---|---|---|
| §4 Business Purpose | 119 | Repository fact: `owner_id` is the only authority concept | Probably none; it is a statement of current state |
| §7 "Business membership schema" | 165 | Membership distinct from `owner_id`'s "current 1:1 assumption" | Review wording for multiple ownership |
| §8.1 | 184 | `owner_id UNIQUE` is a repository fact, not a product rule | Add the FR05 ownership answer |
| §13 DC-1 | 443 | DC-1 structural constraint | Update the mitigation text to reflect the FR05 answer |
| §16 | 538 | Business membership model as future design | Review |
| §20.3 E1 "Held conclusion (G-4)" | 796 | Held | Lift the hold |
| §20.5 rows `21-§4-1`, `21-§5-2`, `22-§5-2`, `20-§16-1`, `BP-§10.1-2` | 945, 952, 1052, 1131, 1181 | `CONDITIONAL` with "G-4 HOLD" | Reassess the feasibility and gate cells |
| §21.1 EQ-1 | 1219 | Open question | Record as answered |

**FCTM rows (unchanged, all `IN SCOPE`, `SB-P-1.12`):** `21-§4-1` (line 62), `21-§5-2` (69), `22-§5-2` (180), `20-§16-1` (313), `BP-§10.1-2` (466). Their dispositions need no change. Their evidence notes ("only `businesses.owner_id` exists") are repository facts that remain true.

**Mission ownership:** SB-P-1.12 (membership and authority kernel), under FR05 ESC1-8.

## 3. Delta 2 — `22-§20-2` and related durability rows

### 3.1 Rows

| FCTM row | FCTM line | Disposition (unchanged) | Stage 7 state | Blueprint register line |
|---|---|---|---|---|
| `22-§20-2` | 238 | `IN SCOPE — PARTIALLY DEMONSTRATED` | `BLOCKED` (ESC-1 T8) | 1089 |
| `21-§19-1`–`21-§19-8` | 125–132 | `IN SCOPE — NOT YET IMPLEMENTED` (§19-5 partially demonstrated) | `CONDITIONAL`; durability conclusion held | 1008–1015 |
| `22-§29-12` | 281 | `IN SCOPE` | Same | 1124 |
| `22-§14-5` | 221 | `IN SCOPE — PARTIALLY DEMONSTRATED` | Same | 1079 |
| `BP-§7-1` | 478 | `IN SCOPE` | Same | 1193 |

### 3.2 Source wording compared with FR05

| Source | Citation | FR05 |
|---|---|---|
| Durable historical records | C22 §20, line 363 | ESC1-7: history intact until a permitted, governed, law-limited deletion |
| Audit of grants, revocations and security results | C21 §19, lines 315–326 | ESC1-7; ESC1-5 (former-Owner attribution kept, no access) |
| Corrections without silently erasing evidence | C22 §14, line 251 | ESC1-7 |
| Preserve price history and audit | Build Plan §7 (line 278 onward) | ESC1-7 |
| Scheduled and final deletion, "controlled irreversible deletion process", "audit/proof of deletion" | C18 §6 line 70; §12 lines 164–175 | ESC1-3, ESC1-4, ESC1-7 |
| Retention and deletion duration unresolved | C18 §12 line 175; Build Plan §15 line 938 | ESC1-2 to ESC1-4 (the three 90-day periods) |

### 3.3 Evidence for Mission Control's T1-or-T7 classification (not classified here)

Source 18 lines 271 (T1) and 277 (T7) define the triggers.

**Evidence consistent with T1 (clarification of an approved requirement):**

- C22 §20 does not define how long history lasts or say that it can never be deleted.
- C18 §§6 and 12, which are approved sources, already contemplate scheduled or final deletion, a controlled irreversible deletion process and proof of deletion.
- The retention and deletion duration was an acknowledged unresolved Founder decision (C18 §12 line 175; Build Plan §15 item 6), which FR05 now answers.

**Evidence consistent with T7 (change to an approved requirement):**

- The FCTM row `22-§20-2` states the durability obligation for SB-P-1.12 with no deletion carve-out, and C21 §19 audit rows likewise have none.
- FR05 ESC1-4 "Delete now" allows history to end at the merchant's request, which could be read as narrowing durability for this mission's rows.

**Distinctions to keep whichever classification is chosen:**

- Lawful, intentional, governed deletion under FR05 is different from the incidental cascade loss described in ESC-1 (Blueprint §21.1 line 1221; SEC-01 §1).
- `BLOCKED` on `22-§20-2` reflects the unresolved safe-durability architecture, not the product policy. Classifying T1 or T7 does not by itself unblock the row.
- `22-§20-2` stays `IN SCOPE` either way.

**If Mission Control classifies T7:** Source 18 requires a Founder decision for the change. Mission Control determines whether FR05 already constitutes that decision or whether an explicit confirmation is needed.

## 4. Delta 3 — New Founder-approved behaviour (T3 candidates)

Source 18 line 273 defines T3. The behaviours below have no approved source or FCTM row that states them. The candidate obligations are proposals only. None is accepted, and no existing row is moved.

| # | Behaviour | FR05 | Nearest existing source or row | Candidate obligation (proposed) | Proposed owner under ESC1-8 |
|---|---|---|---|---|---|
| T3-1 | One person owns multiple businesses | ESC1-1 | `21-§5-2`, `22-§5-2` (membership); Founder Record 04 F-02 | May be an answer to a held question (G-4) rather than T3; Mission Control decides | SB-P-1.12 |
| T3-2 | Business transfer between Owners | ESC1-5 | C21 §4 Owner definition (line 51); C20 §16 initial Owner (line 233); no transfer source | Authority for Owner transfer as a governed authority event | SB-P-1.12 (authorization foundation); SB-P-1.19 (merchant experience, contact and payment) |
| T3-3 | Bilateral approval through each party's verified channel | ESC1-5 | `21-§18-*` confirmation binding; `21-§17` revalidation | Dual-party confirmation binding for transfer | SB-P-1.12 (binding and verification rules); SB-P-1.19 (flow) |
| T3-4 | Former Owner loses all access on every surface | ESC1-5 | `21-§6-*` isolation; `21-§17`; `22-§6-*` surface coverage | Immediate denial of the former Owner's access and stale paths at transfer completion | SB-P-1.12 |
| T3-5 | Transferred business survives the former Owner's identity deletion | ESC1-5, ESC1-6 | None | Identity deletion cannot affect a business the person no longer owns | SB-P-1.12 (integrity foundation) |
| T3-6 | Identity kept while other memberships remain; deleted only after the final owned business, obligations met and no membership | ESC1-6 | None | Identity lifecycle conditions | SB-P-1.12 (integrity and authority rules); SB-P-1.19 (account experience) |
| T3-7 | Pause up to 90 days, freezing unused paid days, returning without deletion | ESC1-2 | C18 §6 "paused/restricted" (line 70) | Pause lifecycle and paid-time preservation | SB-P-1.19 |
| T3-8 | Cancellation: paid period protected, then 90 days from subscription end | ESC1-3 | C18 §§10–12 (lines 134–175) | Cancellation retention period | SB-P-1.19 |
| T3-9 | Stop is Delete: Delete now, or paid days first then 90 days | ESC1-4 | C18 §§10–12 | Deletion choices and timing | SB-P-1.19 (lifecycle); SB-P-1.12 (governed deletion that preserves integrity until permitted) |

**Dependency and experience notes (not SB-P-1.12 build scope):** FR05 §9 notes business-labelled roster and delivery notifications. Notification Foundation is `SB-P-1.15`; roster and delivery are `SB-P-1.18`; in-app Conversation Workspace is `SB-P-1.13`; the WhatsApp adapter is `SB-P-1.20`. Each consumes the SB-P-1.12 kernel, including transfer denial and business isolation.

**Allocation note:** FR05 ESC1-8 gives SB-P-1.19 the merchant-facing experience. SB-P-1.19 has no FCTM in this mission, so recording T3-7 to T3-9 there is a cross-mission action for Mission Control.

## 5. Delta 4 — Blueprint and FCTM enumeration

Every currently `IN SCOPE` row stays `IN SCOPE`. Nothing below is changed by this assessment.

| Blueprint section | Line | Reason for amendment or review |
|---|---|---|
| Metadata | 3–26 | Version and status after reconciliation |
| §3 Mission Objective | 100 | Consider adding FR05 foundations (transfer authorization, former-Owner denial, identity integrity), if T3 is accepted for SB-P-1.12 |
| §7 Core Deliverables | 160–176 (165) | Membership wording (G-4); any accepted T3 foundations |
| §8.1, §8.2 | 182–192 | G-4 answer |
| §8.13 | 234 | Transfer completion as a revalidation point, if accepted |
| §8.15, §8.23 | 244–278 | Audit of transfer and of permitted deletion |
| §8.26 | 288 | `22-§20-2` wording, after the T1-or-T7 classification |
| §11 Out of Scope | 366 | SB-P-1.19 experience items, if recorded there |
| §12 Dependencies | 416 | SB-P-1.19 dependency on SB-P-1.12 foundations |
| §13 Risks | 438 (443) | DC-1; ESC-1 risk |
| §15 Acceptance Criteria | 465 | Acceptance lines for accepted foundations |
| §16 Future Evolution | 534 (538) | Membership model |
| §18 Change Log, §19 Governance History and traceability | 548 onward | Version entry; any new rows |
| §20.2, §20.3 E1, E5, E13; §20.4.2 M6 | 770–890 | G-4 hold (796); deletion and identity governance design notes |
| §20.5 register | 945–1193 | G-4 and ESC-1 rows, after decisions |
| §21.1 EQ-1, ESC-1; §21.4 | 1219, 1221, 1261 | Record answers; ESC-1 stays until disposition |

Any change to Sections 20–21 is a Stage 7 change. It needs its own finding-scoped authority and an independent specialist delta review of security-sensitive rows.

**Source and contract relationships to identify, not rewrite:**

- C18 §12 (line 175) and Build Plan §15 item 6 (line 938) record the retention duration as unresolved; FR05 supplies it. This is SB-P-1.19 scope.
- C21 §4 (line 51) and C20 §16 (line 233) define Owner authority with no transfer route.
- C22 §20 (line 363) and C21 §19 (line 315) are the durability sources in Section 3.

## 6. Delta 5 — Referral to independent Security & Permissions Architecture review

| Question | Evidence class | Sources |
|---|---|---|
| How is the Owner API `DELETE` path on `businesses` governed or removed so that deletion happens only through FR05's governed route? | DDL finding; runtime `UNVERIFIED` | Blueprint §20.2 (lines 770–772), §21.1 ESC-1; SEC-01 §1 |
| How is `auth.users ON DELETE CASCADE` governed so that identity deletion never cascades into a business, including a transferred business or another person's business? | DDL finding; runtime `UNVERIFIED` | SEC-01 §1 "The separate `auth.users` path matters"; SEC-03 §3 |
| How is financial and audit durability, including authority audit and denial-audit durability, preserved until permitted deletion? | Design question | Blueprint §20.3 E5; SEC-S7-07 |
| How does transfer completion deny the former Owner across every channel, API, export and stale or delegated path, with authority rechecked at execution? | Design question | FR05 ESC1-5; Blueprint §20.3 E4, E9 |
| How are business isolation and other-business membership continuity kept when one identity is deleted or retained? | Design question | FR05 ESC1-1, ESC1-6 |
| How is governed deletion recorded, and limited to what law and policy allow? | Design question; legal input not in repository | FR05 ESC1-7; C18 §12 |

No SQL fix is proposed. The review should state its own evidence classes.

## 7. Mission Control decision sheet

| # | Decision | Who can decide | Basis | Notes |
|---|---|---|---|---|
| D-1 | Record G-4 as answered | Mission Control, administratively | FR05 ESC1-1 is the Founder decision | Blueprint and register text changes still need an authorized reconciliation |
| D-2 | Classify `22-§20-2` and C21 §19 as T1 or T7 | Mission Control | Source 18 lines 271, 277 | If T7, a Founder decision is required; Mission Control decides whether FR05 suffices |
| D-3 | Accept T3-1 to T3-9 as obligations, and create or amend FCTM rows | Founder decision (FR05 exists) plus Mission Control; rows only through an authorized reconciliation | Source 18 line 273 and §3.2 | Owner per ESC1-8; no existing row moved |
| D-4 | Record T3-7 to T3-9 and the retention duration in SB-P-1.19's intake | Mission Control, cross-mission | FR05 ESC1-8; C18 §12 | Outside this mission's FCTM |
| D-5 | Authorize the independent security design review (Section 6) | Mission Control | MC-33 appointment; ESC-1 | Separate scope |
| D-6 | Authorize Blueprint and FCTM reconciliation, including Stage 7 register changes | Mission Control | MC-35 pattern; Source 18 §6 | Needs a specialist delta review of security rows |
| D-7 | Dispose of ESC-1 and unblock `22-§20-2` | Mission Control, after the security review | Blueprint §21.1; SEC-03 | Not possible on policy alone |

## 8. Open questions

No new Founder product question is needed to start reconciliation. FR05 decides the policy. What remains is Mission Control classification (D-1 to D-4) and design work (D-5).

Items that FR05 leaves to later design, not to the Founder: a transfer requested while a Pause, cancellation or deletion period is running; the exact records that law requires to be kept; and payment handling on transfer and Pause (SB-P-1.19).

## 9. Holds

- ESC-1 stays an open T8, including the Owner API delete path and `auth.users ON DELETE CASCADE`. `22-§20-2` stays `BLOCKED` and `IN SCOPE`, and the durability conclusions stay held.
- G-4 is answered by the Founder but still held in the ledgers and Blueprint until Mission Control records it.
- G-3, G-5 to G-8 and S-2 to S-7 are unchanged; G-6/T4 is `UNVERIFIED`.
- No Stage 8, Blueprint lock, EIS, implementation, migration, payment-provider or production authority.

`FR05 RECONCILIATION ASSESSMENT — FOR MISSION CONTROL REVIEW — NOTHING CHANGED — ESC-1 T8 OPEN — 22-§20-2 BLOCKED AND IN SCOPE.`
