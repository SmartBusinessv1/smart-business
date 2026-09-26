# SB-P-1.12 — ESC-1 Founder Decision Brief

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Prepared by:** Claude Code, MC-02-appointed Definition Actor, as documentary preparer only (MC-54, `communication/live/instruction1.2.md`)
**Prepared:** 2026-09-26
**Canonical baseline:** `main@c39f96802a1814d23506446762f480351a4e5cb1` (PR #645, MC-55), which contains the canonical Stage 7 Engineering Review (PR #641, `main@f12513c509770e3f5e4c268edc0404601f159936`, MC-53)
**Status:** `DRAFT BRIEF — NOT A FOUNDER DECISION RECORD — FOR MISSION CONTROL REVIEW`

## 1. What this brief is

ESC-1 is an open T8 security and integrity finding (MC-40). Under Source 18 §6 Stage 3, a T8 reopens the Founder Product Decision Gate for the triggering item only. This brief frames that one item for the Founder: what should happen to a business, its history and its people's identities when a business or an account ends.

It does not decide anything, select a technical mechanism, or change any Product Truth, FCTM row, Blueprint text or Founder Record. The candidate directions in Section 5 are proposals for discussion, not approved choices.

FPDR-4 (Founder Record 03) confirmed that the Stage 3 T4, T6 and T8 findings added no product requirement. ESC-1 was raised later, at Stage 7, and FPDR-4 does not answer it.

## 2. Approved principles that bear on the decision

Quoted or closely paraphrased. None is changed here.

| Principle | Source |
|---|---|
| "Business owners own their data." | Source 11 (Product Truth Map), line 29 |
| "A business should never lose important documents." | Source 11, line 244 |
| "Keep historical records durable." | Contract 22 §20 (FCTM `22-§20-2`) |
| Human context changes interpretation "without silently erasing original evidence". | Contract 22 §14 |
| "Merchant data belongs to merchant." Staff data is role- and purpose-limited. | Contract 22 §23 (`22-§23-1`, `22-§23-5`) |
| Grants, revocations, grantor, scope, timestamps and security-sensitive results are preserved as applicable. | Contract 21 §19 (`21-§19-1`–`21-§19-8`) |
| Non-goal: "destructive correction that erases prior truth". | Contract 03 §20 |
| On entitlement removal, preserve history "unless current retention policy requires otherwise" and "preserve references needed for financial/audit integrity". | Contract 18 §9 |
| Cancellation distinguishes access state, "data retention/export period", "deletion schedule/policy" and reactivation. The product "must not imply immediate deletion unless that is the actual current policy and the merchant has received required notice/choice". | Contract 18 §10 |
| Before final deletion, merchants get "a clear opportunity to export/retrieve permitted business data". Lockout "must not become a deceptive data-hostage mechanism". | Contract 18 §11 |
| Still unresolved Founder decision: "exact long-term retention/deletion duration after cancellation/non-payment". | Build Plan §15, item 6 |

These principles point towards durable history and merchant data ownership. None of them decides whether a merchant may permanently delete a business, or what happens to shared business history when a person's identity is removed. That silence is the product gap.

## 3. Evidence

All evidence is repository DDL at canonical `main`. Sources: Blueprint §20.2 and §21.1; `claude-code/25-stage7-engineering-review-report.md` §5; the independent reviews `specialists/01-…` §1 (MC-40), `02-…` (MC-42) and `03-…` (MC-44).

### 3.1 Two deletion paths

| Path | Repository evidence | What it means |
|---|---|---|
| **Owner API path** | `authenticated` holds `DELETE` on `businesses`, and an Owner policy permits it where `auth.uid() = owner_id` (`20260708210504_…sql`). No screen offers it | An Owner could request deletion of their business directly through the API |
| **Auth-user path** | `businesses.owner_id` references `auth.users(id) ON DELETE CASCADE` (same file) | Removing the Owner's login identity can initiate cascading deletion of the business, independent of any app action |

### 3.2 What a deletion would reach

| Class | Statement |
|---|---|
| **Evidence (DDL)** | Catalog event, audit, deletion-record and idempotency tables, and `inventory_movements`, have triggers that reject every delete. `transactions` and `transaction_correction_events` cascade from `businesses` and have no delete guard |
| **Inference (reviewer's State A and State B)** | Where protected history rows exist, a cascading delete is expected to fail as a whole. Where none exist, the delete can proceed and remove `transactions` and `transaction_correction_events` |
| **Unverified** | Runtime behaviour; current production grants, policies and constraints (G-6, T4 `UNVERIFIED`); whether any Supabase Auth administrative operation currently completes; the aggregate count of 18 cascading foreign keys, which is Claude Code's inventory and was not independently re-established |

### 3.3 Consequences for this mission

- The authority and audit history this mission must add (grants, revocations, denials) would sit under the same business and identity records. As defined today, it could be removed by the same cascades. Append-only tables are not durable if their parent can be deleted through them.
- Where deletion is blocked by protected rows, the product would meet an undefined failure: a closure or account removal that simply errors.
- **Removing a UI button cannot settle ESC-1.** No UI offers deletion today, and the Auth-user path runs outside the application. The answer has to be a product policy that the database design then enforces.

### 3.4 Evidence gaps, flagged rather than guessed

- No repository source addresses legal or regulatory retention of financial records. If such obligations apply, they are outside this brief and outside engineering evidence.
- No evidence shows whether any business has ever been deleted in production.

## 4. The decision the Founder is asked to make

One product-level decision area, with four parts. Parts 3 and 4 answer different questions and can both hold:

1. **Business end of life.** When an Owner wants to stop, what does "closing" a business mean?
2. **History.** What happens to the business's financial history and its authority and audit history, and can anyone's action remove it?
3. **Login removal and history.** Must removing a person's login (Owner or staff) never, by itself, delete the business or its shared history?
4. **Last active Owner.** Must removing the login of a business's last active Owner wait until that business is closed or otherwise resolved?

This is product policy. How it is enforced (archiving, deletion restrictions, identity detachment, scheduled jobs and so on) is later engineering design.

## 5. Candidate policy directions (proposals, not approved choices)

### 5.1 Business end of life and history

| Direction | What it would mean | Tradeoffs |
|---|---|---|
| **A — Close, never hard-delete by the merchant** | Closing stops use of the business. Its financial and authority history is retained. Any final removal happens only under a later platform retention policy | Strongest fit with "keep historical records durable" and audit. The merchant cannot erase their own history on demand, so export and clear notice matter. Retention duration stays the Build Plan §15 item 6 decision |
| **B — Close, then scheduled deletion after notice and an export window** | Closing starts a defined period with export access; history is retained until the scheduled deletion; the deletion itself is recorded | Matches Contract 18 §§10–11 closely. It depends on the unresolved retention duration, which can stay open if the Founder approves the principle now. Durability holds until the scheduled point, not forever |
| **C — Owner-initiated final deletion** | After explicit confirmation, an export offer and notice, the Owner may request final deletion of the business and of those records that the approved retention policy and any applicable legal or privacy requirements allow to be deleted, leaving at most a minimal record that deletion occurred. Which records may be deleted, and when, stays conditional on a later approved retention policy and technical and legal verification | Maximizes the merchant's control over their data. It is in tension with "keep historical records durable" and Contract 21 §19 auditability, and would need the Founder to state how durability applies. It must also cover history that other members helped create |

### 5.2 Login removal

Two separate questions, not alternatives. The Founder may answer yes to both, no to both, or differently.

| Question | If yes | If no | Notes |
|---|---|---|---|
| **Login removal and history** — removing a person's login never, by itself, deletes the business or its shared financial, authority or audit history | History outlives any login; the person's personal details in it are minimized to what integrity requires. Any final deletion of a business happens only through the separate, governed end-of-life policy in Q1, never as a side effect of login removal | Removing a login could also remove the business and its history, as the repository DDL permits today for an Owner | Protects the business and its other members. It does not decide whether final business deletion is allowed; that is Q1 |
| **Last active Owner** — removing the login of a business's last active Owner must wait until that business is closed or otherwise resolved | An active business is never left without an Owner by a login removal. How it is resolved (closure under Q1, or another route) is decided separately | A last Owner's login may be removed while the business is active; the product must then define what the business's state is | Applies to the last active Owner only. Staff and Manager logins are not affected by this question. Succession or transfer of ownership is not decided here |

Staff and Manager login removal should keep the authority history of what they did, minimized to what integrity requires. This follows from the existing approved audit and staff-data principles and is listed only so the Founder can object.

## 6. Minimal decision questions for Mission Control to pose

1. **Q1 — End of life.** Should a merchant who wants to stop be able to (A) close the business with history retained, (B) close it with history deleted on a schedule after notice and an export window, or (C) request final deletion of the business and of the records that approved retention policy and any applicable legal or privacy requirements allow, or something else? A and B keep history retained until any final removal; C remains conditional on a later approved retention policy and technical and legal verification. The directions are not ranked.
2. **Q2 — History.** Until any final deletion your answer to Q1 allows, must the business's financial history and its record of who was granted or refused what be kept intact, with no individual user able to erase it?
3. **Q3 — Login removal and history (yes or no).** Must removing a person's Smart Business login, whether Owner or staff, never by itself delete the business or its shared financial, authority or audit history? Any final business deletion would then happen only under your Q1 answer.
4. **Q4 — Last active Owner (yes or no).** Must removing the login of a business's last active Owner wait until that business is closed or otherwise resolved? This does not decide who, if anyone, takes over the business.

### Do not decide now

- The retention or deletion duration (Build Plan §15 item 6). It is needed only if the Founder picks B, and even then the principle can be approved first.
- Technical mechanisms: soft delete, deletion restrictions, triggers, archive tables, identity detachment, Auth administrative procedures and backfill.
- Ownership succession or transfer when an Owner leaves.
- G-3 (derived-value inference) and G-4 (multiple-business ownership). Neither is a prerequisite: each direction above works whether one person owns one business or several.
- S-2 to S-7, F-06 required-check governance (G-5), T4 production verification (G-6), topology (G-7).
- Export format and content, which belong to the lifecycle and export work of `SB-P-1.19` (Contracts 18 and 20).
- Any legal or regulatory retention requirement, which needs its own advice.

**Genuine coupling:** direction B, and any final removal under A, depend on the unresolved retention duration. Contract 18 (lifecycle and cancellation) belongs to `SB-P-1.19`. The Founder's ESC-1 answer should state the principle for SB-P-1.12's authority and history records. It does not need to settle `SB-P-1.19`'s cancellation schedule.

## 7. Dependent rows and what stays held

No FCTM disposition, assignment or build commitment changes. All rows stay `IN SCOPE`.

| FCTM row | Stage 7 state | Held until |
|---|---|---|
| `22-§20-2` | `BLOCKED` by ESC-1 T8 | Founder decision, recorded and reconciled |
| `21-§19-1`–`21-§19-8` | `CONDITIONAL`; durability conclusion held | Same |
| `22-§29-12` | `CONDITIONAL`; durability conclusion held | Same |
| `22-§14-5` | `CONDITIONAL`; durability conclusion held | Same |
| `BP-§7-1` | `CONDITIONAL`; durability conclusion held | Same |

**Assertions that stay held** until the steps below are complete: any Stage 8 statement that business, financial or authority history is durable; any EIS design for business deletion, identity removal, cascades or audit retention; and any acceptance evidence for the rows above.

**Steps after the Founder answers:**

1. Mission Control records the answer through a separately authorized Founder Product Decision Record.
2. A separately authorized reconciliation of the affected Blueprint text and register entries, with no silent omission, deferral or reclassification.
3. Engineering design for the chosen policy, with independent Security & Permissions Architecture review.
4. Mission Control disposition of ESC-1, then Stage 8 as a separate gate.

## 8. Handover for Mission Control to pose to the Founder

> **Founder question — what happens when a business or account ends (ESC-1)**
>
> Smart Business's approved principles say owners own their data and business history should be durable. They do not say whether a merchant can permanently delete a business, or what happens to its records when someone's login is removed. The current database would let a business deletion remove its sales and purchase records in some cases, and removing an Owner's login can start the same deletion. No screen offers this today, but hiding a button would not close the gap.
>
> 1. When a merchant wants to stop, should they (A) close with history kept, (B) close with history deleted on a schedule after notice and a chance to export, or (C) ask for final deletion of whatever records the approved retention rules and any legal or privacy requirements allow to be deleted? These options are not ranked, and any final deletion depends on a retention policy and checks that come later.
> 2. Until any final deletion, must financial history and the record of who was allowed or refused what be kept intact, with no individual able to erase it?
> 3. Yes or no: should removing someone's login never, on its own, delete the business or its history?
> 4. Yes or no: must removing the last active Owner's login wait until the business is closed or otherwise sorted out?
>
> Questions 3 and 4 are separate; both can be yes. You do not need to decide how long data is kept, how it is built, or who takes over a business when an Owner leaves.

`ESC-1 FOUNDER DECISION BRIEF — DRAFT FOR MISSION CONTROL REVIEW — NOT A FOUNDER DECISION — ESC-1 T8 OPEN — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/PRODUCTION AUTHORITY.`
