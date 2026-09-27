# SB-P-1.12 — ESC-1 Refined Founder Decision Proposal

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** Source 18 v1.2 §6 Stage 3 Founder Product Decision Gate, reopened by T8 for ESC-1 only
**Status:** `PROPOSAL — PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING — NOT A FOUNDER DECISION RECORD — NOT APPROVED`
**Prepared by:** Claude Code, MC-02-appointed Definition Actor, documentary preparer only (MC-63, `communication/live/instruction1.4.md`, work package `SB-P-1.12-WP-ESC1-REFINED-FPDR-PROPOSAL`)
**Prepared:** 2026-09-27
**Canonical baseline:** `main@a81e90346e4fd1a883279f2cd52445a997c76c8d` (PR #650, MC-66)

## 1. What this proposal is

The Founder refined the ESC-1 direction after the MC-59 draft packet (`claude-code/28-esc1-founder-decision-record-draft.md`, canonical through PR #649 as non-approved historical evidence). This proposal places the Founder's later statements (F-1 to F-5) beside the earlier ones and proposes corrected record wording for Founder confirmation.

`claude-code/28` is not edited. Where this proposal differs from it, Section 4 says so.

This is not a Founder Product Decision Record. It approves nothing, closes no T8, and changes no FCTM row, Blueprint text, Founder Record or classification. It selects no technical mechanism and makes no claim about legal retention, payment handling or production behaviour. ESC-1 stays an open T8, and `22-§20-2` stays `BLOCKED` and `IN SCOPE`.

## 2. Founder source statements

### 2.1 Later statements (verbatim, from `instruction1.4.md` §2)

Reproduced exactly, with original spelling. They come from the live Founder–Mission Control dialogue and are not represented as earlier repository communication.

**F-1 — Operating model confirmation**

> ok I approve and understand this working model, now I want to ask you confirmation regarding, will this be the same workflow for our in app conversation workspace which we will establish in SB-P-1.13

Mission Control's context note (`instruction1.4.md` §2 F-1): the model explained to the Founder was one personal Smart Business identity, multiple independent businesses, per-business ownership, subscription, history and membership, and choosing a business when starting conversational work.

**F-2 — Subscription expiry, Owner departure, Pause versus Stop and Delete**

> If a owner wants to leave without transferring he can cancel subscription and allow it to automatically delete after 90 days, or he can delete his account immediately with or without downloading his history.
>
> pause is a client taking a break from his business due to renovassion or travel or any personal matter, so that he can save his subscription charges for a maximum of 90 days and can return to smart business within that time.
>
> I am treating stop as deletion, so stop or deletion means a client is no longer intented to use smart business either his business is in lose or he dosent want to use smart business or he sell or closed down his business.
> we are giving a 90 days period for deletion also because if choose to delete becuase of not in profit or he dosent want to use smart business we are giving this time without charging him so that he may think to come back.
>
> but we also give an immediete delete option becuase if he is closing down or selling, he may not need this 90 days retention

**F-3 — Personal identity after the final business**

> FOUNDER ESC-1 FINAL BUSINESS / PERSONAL IDENTITY DECISION
> Delete personal identity too after obligations

**F-4 — Former Owner loses access after a completed transfer**

> another very important thing to consider is if a person transfer a business to another person then that transffered business is no longer have any access to the former person.
> in real world example if anwar transfer his cafe to fathima, anwar can no longer access that cafe details and that is now completely under the identity of fathima.

**F-5 — Former Owner's identity deletion cannot harm a transferred business**

> before merging #650, I just want to mention the reason I explicitly mention this account transfer detailing is, if anwar once owned this cafe and now transfered so that now this cafe owned by fathima and if anwar now deleting the smart business identity, that doesnt means the cafe will lose its operating status

### 2.2 Earlier Founder statements and choices still relied on

- The MC-59 replies, verbatim in `claude-code/28` §2.
- As recorded by Mission Control in `instruction1.4.md` §3: C-2 "paid period always protected", with the post-expiry countdown of 90 days from the subscription end date; C-5 "split by responsibility"; staff removal never deletes history; and dual-approved Owner-to-Owner transfer.

## 3. Proposed decisions (provisional IDs)

Every statement in this section is `PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING`.

### ESC1-R1 — One person, independent businesses

**Sources:** MC-59 clarification 1; F-1; `instruction1.4.md` §3; Founder Record 04 F-02.

A person has one personal Smart Business identity. That person may own one or more businesses and may hold memberships in other businesses, with a separate role and permission set in each. Each business has its own ownership, subscription, history and members. Pausing, stopping, deleting, transferring or a subscription change on one business never changes another business's records, subscription or members. Business data and permissions are never merged through the shared personal identity. Conversational work starts with a chosen business, and `SB-P-1.13` uses this mission's kernel for that.

**G-4:** the words "one person may own one or more businesses" would answer G-4 (multiple-business ownership). This is included for explicit Founder confirmation (FC-2). It is not closed by this proposal.

### ESC1-R2 — Pause

**Sources:** F-2 (paragraph 2); MC-59 Q1.

Pause is a temporary break, for example for renovation, travel or a personal matter. It lasts up to 90 days. The merchant can return within that time. While paused, the business's history is kept and can be downloaded. The Founder's intent is that the merchant saves subscription charges during Pause.

**Not decided here:** how charges, remaining paid time, proration or refunds are handled, which is `SB-P-1.19` payment design; and what happens if 90 days pass without a return (Q-A).

### ESC1-R3 — Cancelling the subscription without a transfer

**Sources:** F-2 (paragraph 1); C-2.

An Owner who leaves without transferring may cancel the subscription so that it does not renew. Any remaining paid period is protected. From the subscription end date, the business has 90 days in which the merchant can return or download its history. After that, governed deletion follows under ESC1-R7.

### ESC1-R4 — Stop is Delete

**Sources:** F-2 (paragraphs 1, 3, 4 and 5).

Stop and Delete are the same thing: the merchant intends to stop using Smart Business for that business, for example because it is not profitable, is being sold or is closing. The merchant chooses either:

- **(a) Delete after 90 days:** a 90-day reconsideration and download period with no new charge, after which governed deletion follows; or
- **(b) Delete now:** an immediate deletion request. Download is offered, not required.

In both cases, deletion follows ESC1-R7.

### ESC1-R5 — Business transfer

**Sources:** MC-59 clarifications; F-4; F-5; `instruction1.4.md` §4 item 4.

Transfer is separate from Stop, Delete and cancellation. It keeps the business and its data running and changes its Owner. A transfer is valid only when the current Owner and the incoming Owner each approve it through their own verified email or WhatsApp. The incoming Owner uses their own contact identity and supplies their own payment details. Transfer never means handing over a password, session, token, mailbox, phone number or payment credential.

When a transfer completes:

- the former Owner immediately loses all access to the transferred business and its details, on every surface: dashboard, WhatsApp, in-app conversation, Ask CFO, APIs, files, notifications, exports, pending sessions and delegated paths;
- the incoming Owner holds Owner authority;
- the former Owner keeps no Manager or staff membership, capability or exemption in that business. Any future access would be a new grant that the new Owner approves;
- what the former Owner did before the transfer stays attributed in preserved audit history, without any right to view it, subject to the approved retention and privacy policy;
- the former Owner's other businesses and personal identity are unaffected.

The handover of authority is proposed as a single step with authority rechecked at execution and stale access denied. Smart Business cannot recall copies that the former Owner lawfully downloaded before the transfer.

### ESC1-R6 — Personal identity lifecycle

**Sources:** F-3; F-5; `instruction1.4.md` §4 item 5.

- When a person's **final** owned business has been deleted as permitted, their personal identity is also deleted, after outstanding obligations are met.
- A personal identity is not deleted while the person still owns another business.
- **Transferred-business independence (F-5):** once a business has been validly transferred, deleting the former Owner's identity, whether they request it or it follows automatically, never pauses, stops or deletes that business. It never alters its subscription, operating status, history, staff or records, and never affects the new Owner's identity or entitlements. A transferred business is not counted among the former Owner's businesses.
- Deleting a business or an identity must never happen through an uncontrolled Owner API delete or `auth.users` cascade.

**Open:** whether the identity is deleted when the person owns no business but is still a Manager or staff member of someone else's business (Q-B).

### ESC1-R7 — History integrity and governed deletion

**Sources:** MC-59 Q2 ("Yes"); staff removal direction; F-2; F-3.

Until a deletion this policy permits, the business's financial history and its authority and audit history stay intact. No individual can erase them through an incidental business, login or staff removal. Removing a Manager or staff member never deletes business history.

A permitted deletion is a separate, governed action. It is notified, and a download is offered (not required under ESC1-R4(b)). It covers only the records that the approved retention policy and applicable legal and privacy obligations allow to be deleted, and it is itself recorded. No promise is made to delete all history regardless of law, and no legal retention period is approved here.

## 4. Corrections to the historical draft (`claude-code/28`)

| `claude-code/28` | Proposed correction | Founder source |
|---|---|---|
| D2 Pause "up to three months" | Pause up to **90 days** with return (ESC1-R2) | F-2 paragraph 2 |
| D3 Stop as a choice between deletion and "keep for three months" | **Stop is Delete**, with an optional 90-day reconsideration period or immediate deletion (ESC1-R4) | F-2 paragraphs 3–5 |
| D4 three-month explicit clock beside the 90-day subscription clock | Every Founder period is now **90 days**; paid period protected (Section 5) | F-2; C-2 |
| C-1 meaning of "account" | Deletion is per business; the personal identity is deleted after the final business (ESC1-R6) | F-3 |
| C-3 Owner leaving without transfer | Cancel and wait for automatic deletion, or delete immediately (ESC1-R3, ESC1-R4) | F-2 paragraph 1 |
| D7 transfer | Adds loss of all former-Owner access (F-4) and transferred-business independence (F-5) | F-4; F-5 |

## 5. Periods and clocks

All Founder periods are now stated as 90 days: Pause up to 90 days; the Stop reconsideration period, 90 days; the post-subscription-end period, 90 days from the subscription end date. The earlier "three months" wording is superseded by the Founder's later words and is not treated as equal to 90 days.

Paid period protection (C-2): a deletion deadline that would fall earlier waits while paid access remains active. An active paid subscription is not expired merely because the merchant is not using the product.

The only interaction that affects an honest policy is Q-C (Section 6). Calendar arithmetic, time zones, notifications and payment handling are engineering and `SB-P-1.19` design.

## 6. Minimal Founder confirmation and questions

**Confirmations**

- **FC-1:** ESC1-R1 to ESC1-R7 wording, as corrected.
- **FC-2 (G-4):** one person may own more than one business. On confirmation, G-4 would be recorded as answered in the final record.
- **FC-3 (allocation, C-5):** SB-P-1.12 owns the authority, history-integrity, transfer-authorization and former-Owner-denial foundations. `SB-P-1.19` owns the merchant-facing Pause, Stop and Delete, cancellation, transfer, payment and contact experience. Existing FCTM assignments stay unchanged.

**Questions (only where needed for an implementable policy)**

- **Q-A — End of Pause:** if a paused business is not resumed within 90 days, what happens? Options: governed deletion (as in the MC-59 direction), or the business returns to normal subscription status.
- **Q-B — Identity with memberships only:** if a person's final owned business is deleted but they are still a Manager or staff member in someone else's business, is their personal identity kept for those memberships?
- **Q-C — Stop during a paid period:** if a merchant chooses "Delete after 90 days" with 40 paid days left, do the 90 days run from the Stop date (deletion on day 90) or from the end of the paid period (deletion on day 130)?

**Recorded, not decided here:** the Founder's wish for rotating per-business staff responsibilities and automatic business-labelled notifications for published work assignments. It is a cross-mission experience note needing its own requirements traceability. It is not a change to scope or the FCTM, and it is not built in this work package.

## 7. Source 18 trigger implications

| Trigger | Implication |
|---|---|
| T8 (ESC-1) | Stays open until a final Founder record is merged, the reconciliation is authorized, and deletion and identity governance is designed and independently reviewed. The `auth.users ON DELETE CASCADE` issue stays part of ESC-1 |
| T1 or T7 | Permitted deletion (ESC1-R3, R4, R7) bears on `22-§20-2` "keep historical records durable" and Contract 21 §19. Mission Control classifies whether the Founder's direction clarifies (T1) or changes (T7) these; it is not treated as resolved |
| T3 | New behaviour with no approved source or FCTM row: Owner transfer, loss of all former-Owner access (F-4), transferred-business independence (F-5), and personal-identity deletion after the final business (F-3) |
| Allocation | C-5 assigns the merchant-facing lifecycle to `SB-P-1.19`. No existing SB-P-1.12 `IN SCOPE` row is moved or deferred by it |
| Cross-mission | The retention periods bear on Contract 18 §12 and Build Plan §15 item 6, `SB-P-1.19` scope |

## 8. Affected FCTM rows (unchanged) and held Stage 8 assertions

| Row | Relation |
|---|---|
| `22-§20-2` | `BLOCKED` by ESC-1; its durability wording is the T1/T7 question |
| `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5`, `BP-§7-1` | Durability conclusions held |
| `21-§5-2`, `22-§5-2`, `21-§4-1`, `20-§16-1` | Membership and Owner identity (R1, R5, FC-2) |
| `21-§6-1`, `21-§6-2`, `21-§15-3` | Former-Owner and cross-business denial (R5, R6) |
| `21-§17`, `BP-§10.1-5` | Authority rechecked at transfer completion (R5) |
| `22-§23-1`, `22-§23-5` | Merchant data ownership and staff data (R2 to R7) |

**Stage 8 assertions still held:** that business, financial or authority history is durable or governably deletable; that Owner transfer and former-Owner denial are specified; that identity deletion cannot cascade into another person's business; and acceptance evidence for the rows above.

## 9. Security obligations (conditions, not mechanisms)

- The Owner API delete path and the `auth.users` cascade are blocked or governed before any permitted deletion or identity deletion is built.
- Deleting an identity first finds every current and past ownership link and every membership, and cannot cascade into another person's business (F-5).
- Transfer completion is a single authority change: stale sessions, capabilities and delegated paths of the former Owner are denied on every surface, and authority is rechecked at execution.
- Dual approval through verified channels, protected against takeover; no credential, session or payment handover.
- Deletion is controlled, recorded, export-offered and limited to what policy and law allow.
- Each design needs independent Security & Permissions Architecture review.

## 10. Next steps, each needing its own authorization

1. Mission Control reviews this proposal and brings only FC-1 to FC-3 and Q-A to Q-C to the Founder.
2. The Founder confirms or corrects.
3. A final Founder Product Decision Record is prepared and merged canonically.
4. A separately authorized Blueprint and FCTM reconciliation.
5. Independent security design review.
6. ESC-1 disposition, then Stage 8 as a separate gate.

`ESC-1 REFINED FOUNDER DECISION PROPOSAL — FOUNDER CONFIRMATION PENDING — NOT APPROVED — ESC-1 T8 OPEN — 22-§20-2 BLOCKED AND IN SCOPE — NO STAGE 8/LOCK/EIS/IMPLEMENTATION/MIGRATION/PRODUCTION AUTHORITY.`
