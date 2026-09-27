# SB-P-1.12 — ESC-1 Founder-Confirmed Product Decision Record (CANDIDATE)

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** Source 18 v1.2 §6 Stage 3 Founder Product Decision Gate, reopened by T8 for ESC-1 only
**Status:** `CANDIDATE — FOUNDER-CONFIRMED POLICY WORDING — PENDING MISSION CONTROL DOCUMENTARY REVIEW, FOUNDER FINAL RECORD PUBLICATION AND MERGE, AND SEPARATE GOVERNANCE GATES — NOT YET CANONICAL`
**Prepared by:** Claude Code, MC-02-appointed Definition Actor, documentary preparer only (MC-69, `communication/live/instruction1.5.md`, work package `SB-P-1.12-WP-ESC1-FOUNDER-CONFIRMED-FPDR-CANDIDATE`)
**Prepared:** 2026-09-27
**Canonical baseline:** `main@9f8345109cf4d06d0c24e0be1582051f1a5d585e` (PR #652, MC-71)

## 1. What this candidate is

The Founder has now answered every open ESC-1 question and confirmation (Section 2.3). This candidate turns the approved proposal wording (`claude-code/29` ESC1-R1 to R7, as qualified by the Founder's answers) into Founder-confirmed policy wording, with an evidence map back to the Founder's own words.

It is a **candidate**. It becomes a canonical Founder Product Decision Record only after Mission Control's documentary review, Founder final record publication, and human merge. Even then, it does not by itself:

- close ESC-1, which stays an open T8;
- unblock `22-§20-2`, which stays `BLOCKED` and `IN SCOPE`;
- change any FCTM row, Blueprint text, existing Founder Record or G-4 registry entry;
- approve any technical design, security design, test, payment rule, statutory retention period or data-erasure mechanism.

The earlier drafts `claude-code/28` and `claude-code/29` are unchanged historical evidence.

## 2. Founder source evidence (verbatim)

Each block is reproduced exactly, with original spelling, from the merged instruction named.

### 2.1 MC-59 replies (2026-09-26; `instruction1.3.md` §2)

**A. Decision responses**

> Q1: we can give a option to stop or pause smart business, if pausing they can pause upto three months without losing their history. and in stopping we can give two options, either they can delete all the history or their history will be accessible upto three months, after three months of inactivity either through pausing or stopping the account will be deleted automatically.
> but in anycase the merchants can download thier history whenever they want if they are active or if they choose to preserve it for next three months after stopping or pausing.
> Q2: Yes
> Q3: Qualified
> Q4: Qualified
> Additional direction: owner can remove or add any number of managers or staff, and owner can be replaced with another owner (incase of business transfer or selling) but an owner cannot be removed

**B. Lifecycle clarifications**

> 1.If a merchant owns one or more businesses we treat them as separtae business, so stopping or pausing one business will not effect the other.
>
> 2.three month clock begin in two ways
> a)when the merchant selects pause or stop
> b)we will calculate 90 days from the last subscription end date. meaning if the merchant is still active with a paid subscription we will not consider it as an inactive account
>
> 4.Removing a manager or staff will not delete buisness history

**C. Final clarifications**

> FOUNDER ESC-1 FINAL CLARIFICATIONS
> Clock interaction: Yes — automatic 90-day period from subscription expiry
> Owner replacement: Other — qualified ownership rule
> Qualifications: we can give business transfer option so that the current owner can transfer the ownership to new owner. meaning the payment method will obviously change with this transfer, so that the new owner can add his payment details, so the previous owner can allow the new owner also with trasfer of login( whatsapp and email) both previos and new owner must receive valid transfer and receving approvals through mail or whatsapp so that smart business can ensure this is an authorised transfer

### 2.2 Later statements F-1 to F-5 (2026-09-26; `instruction1.4.md` §2)

**F-1**

> ok I approve and understand this working model, now I want to ask you confirmation regarding, will this be the same workflow for our in app conversation workspace which we will establish in SB-P-1.13

**F-2**

> If a owner wants to leave without transferring he can cancel subscription and allow it to automatically delete after 90 days, or he can delete his account immediately with or without downloading his history.
>
> pause is a client taking a break from his business due to renovassion or travel or any personal matter, so that he can save his subscription charges for a maximum of 90 days and can return to smart business within that time.
>
> I am treating stop as deletion, so stop or deletion means a client is no longer intented to use smart business either his business is in lose or he dosent want to use smart business or he sell or closed down his business.
> we are giving a 90 days period for deletion also because if choose to delete becuase of not in profit or he dosent want to use smart business we are giving this time without charging him so that he may think to come back.
>
> but we also give an immediete delete option becuase if he is closing down or selling, he may not need this 90 days retention

**F-3**

> FOUNDER ESC-1 FINAL BUSINESS / PERSONAL IDENTITY DECISION
> Delete personal identity too after obligations

**F-4**

> another very important thing to consider is if a person transfer a business to another person then that transffered business is no longer have any access to the former person.
> in real world example if anwar transfer his cafe to fathima, anwar can no longer access that cafe details and that is now completely under the identity of fathima.

**F-5**

> before merging #650, I just want to mention the reason I explicitly mention this account transfer detailing is, if anwar once owned this cafe and now transfered so that now this cafe owned by fathima and if anwar now deleting the smart business identity, that doesnt means the cafe will lose its operating status

### 2.3 Final answers and Pause clarification (2026-09-27; `instruction1.5.md` §2)

**Final product decisions**

> FOUNDER ESC-1 FINAL PRODUCT DECISIONS
> Q-A End of Pause: Return to normal subscription status
> Q-B Identity with other-business memberships: Retain identity while other authorized memberships remain
> Q-C Paid period and Delete after 90 days: Day 130 after paid period
> FC-1 R1–R7: Approve R1-R7 subject to Q-A Q-B Q-C
> FC-2 G-4 multiple-business ownership: Approve one person may own multiple businesses
> FC-3 mission responsibility split: Approve SB-P-1.12 foundation SB-P-1.19 experience split

**Pause preserves unused paid days**

> I want to explain this, if a person pause while he have 40 paid days remaining, we can give options to pause for a maximum 90 days, and if that pause period is over then thier status will return to their 40 days remining period

## 3. Founder-confirmed policy

Each rule is the Founder's confirmed direction: ESC1-R1 to R7 approved "subject to Q-A Q-B Q-C" (FC-1), G-4 (FC-2), the responsibility split (FC-3), and the Pause clarification. Section 6 maps each rule to its sources.

### CP-1 — One person, independent businesses

A person has one personal Smart Business identity. **One person may own multiple businesses** and may also hold memberships in other people's businesses, with a separate role and permission set in each. Each business has its own ownership, subscription, history and members. Pausing, cancelling, deleting or transferring one business, or a subscription change on it, never changes another business's records, subscription or members. Business data, authority and permissions are never merged or carried across businesses through the shared identity. Conversational work starts with a chosen business, through this mission's single kernel.

### CP-2 — Pause

Pause is a temporary break, for example for renovation, travel or a personal matter, of up to 90 days.

- Pause suspends the use of the unused paid-service period. **A merchant who pauses with 40 paid days remaining and uses the full 90-day Pause returns with 40 paid days remaining.** Resuming earlier also keeps the same unused balance.
- When the Pause reaches day 90 without an earlier return, the business returns to normal subscription status with its preserved paid balance. **Pause never leads to deletion.**
- Pause does not cancel, use up or silently renew the paid entitlement.
- While paused, the business's history is kept and can be downloaded.
- The Founder's intent is that the merchant saves subscription charges during Pause.

### CP-3 — Cancelling the subscription without a transfer

An Owner who leaves without transferring may cancel so that the subscription does not renew. Any remaining paid period is protected. **For 90 days from the subscription end date**, the merchant can return or download the business's history. After that, governed deletion follows under CP-7.

### CP-4 — Stop is Delete

Stop and Delete mean the same thing: the merchant intends to stop using Smart Business for that business, for example because it is not profitable, is being sold or is closing. The merchant chooses one of two options.

- **Delete after 90 days.** Any remaining paid days are used first. Then a separate **90-day reconsideration and download period with no new charge** runs. The business becomes eligible for deletion only after both. Example: with 40 paid days remaining, deletion eligibility is **day 130** from the request, subject to outstanding retention and deletion obligations.
- **Delete now.** An immediate deletion request. Download is offered, not required. The day-130 rule does not apply.

In both cases, deletion follows CP-7.

### CP-5 — Business transfer

Transfer is separate from Pause, cancellation, Stop and Delete. It keeps the business and its data running and changes its Owner.

- A transfer is valid only when **both the current Owner and the incoming Owner approve it**, each through their own verified email or WhatsApp.
- The incoming Owner uses their own contact identity and supplies their own payment details.
- Transfer never means handing over a password, session, token, mailbox, phone number or payment credential.
- **When a transfer completes, the former Owner immediately loses all Smart Business access to the transferred business and its details** on every surface: dashboard, WhatsApp, in-app conversation, Ask CFO, APIs, files, notifications, exports, pending sessions and delegated paths. The business then operates entirely under the new Owner's identity.
- The former Owner keeps no Manager or staff membership, capability or exemption in that business. Any future access would be a new grant approved by the new Owner.
- What the former Owner did before the transfer stays attributed in preserved audit history. That attribution gives no right to view it.
- The former Owner's other businesses and personal identity are unaffected.
- Smart Business cannot recall copies the former Owner lawfully downloaded before the transfer.

### CP-6 — Personal identity lifecycle

- **Final owned business deleted, no other membership:** when a person's final owned business has been deleted as permitted, and they hold no other authorized membership and have no relevant obligation left, their personal identity is deleted after obligations are satisfied.
- **Other memberships remain:** the personal identity is **retained while any authorized membership in another person's business remains**. Keeping the identity gives no ownership of that business.
- **A lost membership** stops only the access it granted. It never deletes that business or its records.
- **Transferred-business independence:** once a business has been validly transferred, deleting the former Owner's identity, whether they request it or it follows automatically, never pauses, stops or deletes that business. It never alters its subscription, operating status, history, staff or records, and never affects the new Owner's identity or entitlements. A transferred business is not counted among the former Owner's businesses.
- No business or identity is ever deleted through an uncontrolled cascade or direct delete.

### CP-7 — History integrity and governed deletion

- Until a deletion this policy permits, the business's financial history and its authority and audit history stay intact, and no individual can erase them through an incidental business, login or staff removal.
- The Owner may add or remove any number of Managers and staff. **Removing a Manager or staff member never deletes business history** or the record of what they were authorized to do and did.
- A permitted deletion is a separate, governed action. It is notified, a download is offered (not required for Delete now), and the deletion is recorded. It covers only the records that the approved retention policy and applicable legal and privacy obligations allow to be deleted.
- Deletion cannot erase records that must lawfully be retained, and it cannot recall files already exported outside Smart Business.

### CP-8 — Responsibility split

- **SB-P-1.12** owns the foundations: authority, business isolation, history integrity, transfer authorization and former-Owner denial.
- **SB-P-1.19** owns the merchant-facing experience: Pause, cancellation, Stop and Delete, transfer, customer and contact handling, and payment.
- `SB-P-1.13` (in-app Conversation Workspace) and `SB-P-1.20` (WhatsApp adapter) use SB-P-1.12's single kernel.
- Existing FCTM rows and mission assignments are unchanged until a separately authorized reconciliation. This split delegates no `SB-P-1.19` implementation to this work package.

## 4. The three 90-day periods are not interchangeable

| Period | Starts when | Ends with | Paid days |
|---|---|---|---|
| Pause (CP-2) | The merchant selects Pause | Return to normal subscription status (never deletion) | Unused paid days are **frozen** and preserved |
| After cancellation (CP-3) | The subscription end date | Governed deletion (CP-7) | Remaining paid period used first, before the subscription end date |
| Delete after 90 days (CP-4) | The end of any remaining paid days | Deletion eligibility (CP-7) | Remaining paid days used first; day 130 in the 40-day example |

"Delete now" has no 90-day period.

## 5. What these decisions do not settle

**Payment and commercial handling (SB-P-1.19):** calendar accounting; adjusting the subscription end date during Pause; gateway charging and suspension; carrying paid time forward; refunds and proration; renewal authorization; and payment handover on transfer. No payment rule is set here.

**Legal retention:** no statutory retention period, and no list of records that must be kept, is decided here.

**Source and contract reconciliation:** whether permitted deletion clarifies (T1) or changes (T7) Contract 22 §20 ("keep historical records durable", `22-§20-2`) and Contract 21 §19 auditability; and how the retention periods reconcile with Contract 18 §12 and Build Plan §15 item 6. Mission Control classifies these.

**Not approved by the Founder's words:** technical architecture, the membership and ownership schema (including whether `businesses.owner_id UNIQUE` remains), the transfer protocol, approval strength, deletion and identity-deletion mechanisms, the governance of the Owner API delete path and the `auth.users ON DELETE CASCADE` path, security design, tests and runtime evidence.

## 6. Evidence map

| Rule | MC-59 (2.1) | F-1 to F-5 (2.2) | Final answers (2.3) | Proposal |
|---|---|---|---|---|
| CP-1 | B item 1 | F-1 | FC-2; FC-1 | R1 |
| CP-2 | A Q1 | F-2 paragraph 2 | Q-A; Pause clarification; FC-1 | R2 |
| CP-3 | B item 2(b); C "Clock interaction" | F-2 paragraph 1 | FC-1 | R3 |
| CP-4 | A Q1 | F-2 paragraphs 1, 3, 4, 5 | Q-C; FC-1 | R4 |
| CP-5 | A "Additional direction"; C "Qualifications" | F-4; F-5 | FC-1 | R5 |
| CP-6 | — | F-3; F-5 | Q-B; FC-1 | R6 |
| CP-7 | A Q2; B item 4 | F-2; F-3 | FC-1 | R7 |
| CP-8 | — | — | FC-3 | `claude-code/29` FC-3 |

"Proposal" refers to the ESC1-R rules in `claude-code/29`, canonical through PR #651.

## 7. G-4 (multiple-business ownership)

The Founder has answered G-4: one person may own multiple businesses (FC-2). This candidate records the answer. It does not update the G-4 registry, the Blueprint or the FCTM, and does not assume the current `owner_id UNIQUE` shape can stay. Those need a controlled reconciliation.

## 8. Affected FCTM rows, triggers and holds (nothing changed)

| Row | Relation |
|---|---|
| `22-§20-2` | `BLOCKED` by ESC-1 and `IN SCOPE`; its durability wording is the T1-or-T7 question |
| `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5`, `BP-§7-1` | Durability conclusions held |
| `21-§5-2`, `22-§5-2`, `21-§4-1`, `20-§16-1` | Membership, Owner identity and G-4 (CP-1, CP-5) |
| `21-§6-1`, `21-§6-2`, `21-§15-3` | Former-Owner and cross-business denial (CP-5, CP-6) |
| `21-§17`, `BP-§10.1-5` | Authority rechecked when a transfer completes (CP-5) |
| `22-§23-1`, `22-§23-5` | Merchant data ownership and staff data (CP-2 to CP-7) |

| Trigger | Status |
|---|---|
| T8 (ESC-1) | Open, including the `auth.users ON DELETE CASCADE` issue, until the final record is merged, the reconciliation is authorized, and deletion and identity governance is designed and independently reviewed |
| T1 or T7 | Disputed; Mission Control classifies (Section 5) |
| T3 | New behaviour without an approved source or FCTM row: transfer, former-Owner denial, transferred-business independence, identity deletion and retention, and Pause freezing paid days |
| Other holds | G-3, G-5 to G-8 and S-2 to S-7 unchanged; G-6/T4 `UNVERIFIED` |

**Stage 8 assertions still held:** that history is durable or governably deletable; that transfer, former-Owner denial and identity deletion are specified in design; that one person's identity deletion cannot cascade into another person's business; and acceptance evidence for the rows above.

## 9. Cross-mission experience note (no scope change)

The Founder described one person serving in several businesses (for example as Manager in two, or with packing or delivery duties in different businesses), with authority never carried between businesses. When an authorized Owner or Manager publishes a roster change or assigns a delivery, the person gets an automatic, business-labelled notification, without switching business to find the work. This is recorded for requirements traceability only. The shared Notification Foundation belongs to `SB-P-1.15`, and roster and delivery features to `SB-P-1.18`. No feature, FCTM row or allocation changes here.

## 10. Next gates, each needing its own authorization

1. Mission Control documentary review of this candidate.
2. Founder final record publication and human merge, for example as `founder/05-esc1-founder-decision-record.md`.
3. A controlled Blueprint, FCTM and G-4 reconciliation.
4. Independent Security & Permissions Architecture design review of deletion, identity, cascade and transfer governance.
5. ESC-1 disposition, then Stage 8 as a separate gate.

`ESC-1 FOUNDER-CONFIRMED FPDR CANDIDATE — PENDING MISSION CONTROL REVIEW AND FOUNDER FINAL RECORD MERGE — ESC-1 T8 OPEN — 22-§20-2 BLOCKED AND IN SCOPE — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/MIGRATION/PAYMENT-PROVIDER/PRODUCTION AUTHORITY.`
