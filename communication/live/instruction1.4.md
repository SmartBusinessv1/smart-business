# SMART BUSINESS MISSION CONTROL — MC-63

## SB-P-1.12 — ESC-1 Later Founder Clarifications and Final FPDR Reconciliation Proposal

**From:** Smart Business Mission Control  
**To:** Claude Code — MC-02-appointed Definition Actor, documentary preparer only  
**Date:** 2026-09-26  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Status:** DRAFT — HOLD until this instruction PR receives human merge and Mission Control verifies actual canonical merge  
**Explicit numbered communication pair:** `communication/live/instruction1.4.md` → `communication/live/report1.4.md`  
**Repository:** `SmartBusinessv1/smart-business`

## 1. Canonical basis and scope

MC-62 independently verified PR #649 merged the NON-APPROVED ESC-1 FPDR preparation packet to canonical `main@7d37d32badccb8d8efa6464047493e8ba4c1806e`. Existing `communication/missions/SB-P-1.12/claude-code/28-esc1-founder-decision-record-draft.md` is historical prepared evidence, not an approved FPDR. Stage 7 Engineering Review, MC-40/42/44 independent Security documentary reviews and the Founder ESC-1 Brief are also canonical. Do not restart those reviews.

The Founder clarified product meaning in later 2026-09-26 Founder–Mission Control chat AFTER MC-59, including an explicit final-business personal-identity disposition. Your task is to put the new source statements alongside the earlier canonical Founder words, propose the narrow corrected FPDR wording, isolate genuine remaining decisions, and return it FOR FOUNDER CONFIRMATION. Do not silently rewrite the historical draft, approve your own normalization or close T8.

## 2. New source statements — direct Founder evidence

The following are direct Founder statements reproduced here from the live Founder–Mission Control dialogue, with original spelling. They are **not** retroactively represented as prior repository communication.

### F-1 — Confirmation of one-person/multiple-independent-business operating model

> ok I approve and understand this working model, now I want to ask you confirmation regarding, will this be the same workflow for our in app conversation workspace which we will establish in SB-P-1.13

In the Founder discussion, the model explained to the Founder was one personal Smart Business identity, multiple independent businesses, per-business ownership/subscription/history/membership and selection of a business when initiating conversational work. The Founder later raised rotating cross-business staff and proactive assignment notification as additional experience considerations. The approved existing Stage 6 F-02 expressly already allows one person to hold multiple business memberships with distinct roles and permission sets. Owner-of-multiple-businesses G-4 was previously held; this is a later Founder confirmation of the discussed operating model, and any proposal to update G-4 must be identified and explicitly included in the final Founder confirmation, not self-closed.

### F-2 — Subscription expiry, owner departure, Pause versus Stop/Delete (verbatim)

> If a owner wants to leave without transferring he can cancel subscription and allow it to automatically delete after 90 days, or he can delete his account immediately with or without downloading his history.
>
> pause is a client taking a break from his business due to renovassion or travel or any personal matter, so that he can save his subscription charges for a maximum of 90 days and can return to smart business within that time.
>
> I am treating stop as deletion, so stop or deletion means a client is no longer intented to use smart business either his business is in lose or he dosent want to use smart business or he sell or closed down his business.
> we are giving a 90 days period for deletion also because if choose to delete becuase of not in profit or he dosent want to use smart business we are giving this time without charging him so that he may think to come back.
>
> but we also give an immediete delete option becuase if he is closing down or selling, he may not need this 90 days retention

### F-3 — Final-business personal identity deletion (verbatim)

> FOUNDER ESC-1 FINAL BUSINESS / PERSONAL IDENTITY DECISION
> Delete personal identity too after obligations

## 3. Already confirmed, preserved from MC-59 and subsequent dialogue

- Each business is independently managed, even under a common Owner identity; Pause/Stop/deletion of business A must not alter business B's records or paid subscription.
- One person may own several businesses, and may hold memberships in multiple businesses with different role/permission scope; do not merge business data or permissions through the shared person identity.
- The earlier Founder choice C-2 is **paid period always protected**: any deletion deadline that would finish earlier waits while applicable paid access remains active. Automatic post-subscription-expiry inactivity countdown is **90 days from the subscription end date**; active paid subscription is not deemed expired merely because the customer has not interacted.
- The earlier Founder choice C-5 is **split by responsibility**: SB-P-1.12 owns authority/history-integrity/transfer-authorization foundations; SB-P-1.19 owns merchant-facing Pause/Stop/deletion lifecycle and transfer/customer/payment/contact experience, subject to correct contractual and mission-allocation reconciliation. SB-P-1.13 builds native conversation/AI and SB-P-1.20 WhatsApp adapter using SB-P-1.12's one kernel; other mission assignments from the canonical Blueprint stay unchanged.
- The Founder wants existing staff memberships/permissions and rotated per-business responsibilities, with automatic business-labelled notifications for published work assignments as discussed. Treat this as a separately scoped cross-mission experience note requiring truthful requirements traceability, not as approval to modify Scope/FCTM or implement notifications within this ESC-1 work package.
- Removing Managers or staff never deletes business history. Explicit Owner-to-Owner transfer requires valid outgoing and incoming party authorization/acceptance through each person's verified email or WhatsApp, incoming Owner own contact identity and payment information, and preservation of business history; do not mean password/session/token/payment-credential handover.

## 4. Correct the decision formulation, not the original words

Treat Section 2 direct statements as the source, and treat older `claude-code/28` as a prior draft that the Founder has refined. Produce a proposed normalized record that:

1. Defines **Pause** as temporary break for up to 90 days, with ability to resume, preserved permissible history/export and the Founder's intended subscription-charge relief. Do not silently assert actual payment-proration, refund or gateway suspension implementation or declare existing paid time forfeit.
2. Defines **subscription cancellation without transfer** as nonrenewal with any remaining paid period protected and a 90-day post-subscription-end opportunity to return/export, followed by governed deletion as permissible.
3. Defines **Stop = Delete** as intentional departure with (a) an optional **90-day, no-new-charge reconsideration/export period**, or (b) an **immediate deletion request**, with export offered but not imposed as mandatory. Correct historical `claude-code/28` wording that treats Stop as a distinct preserve-only status or Pause as three months; the Founder clarified these meanings after it merged.
4. Separates these from **business transfer**, which preserves continuing business data and changes its authorized Owner with two valid approvals; transfer is not equivalent to selling/closing a business workspace or giving away a login.
5. Distinguishes per-business lifecycle from the person's shared identity: **when the final business is permissibly deleted, the Founder directs that the personal identity also be deleted after obligations are satisfied**. This does NOT allow deletion of the human login when other independently owned businesses still exist; flag for separate decision if the person retains memberships in other people's businesses or otherwise still needs a permitted account, rather than silently deleting those permissions or inventing an exception. Deletion of a business must never be an uncontrolled `auth.users` or Owner API cascade.
6. Honors existing approved financial/authority/audit durability obligations until permitted deletion. Immediate/automatic deletion covers only records allowed by the finally approved retention policy and applicable law/privacy obligations; neither an unconditional “delete all history regardless of law” promise nor a specific legal retention period is approved. Financial/audit tensions with Contracts 21/22 must remain identified T8/T7 as applicable until explicit Founder decision/approved reconciliation; do not self-classify them solved.
7. Reconciles the **90-day** Pause/Stop/subscription-expiry terms accurately (do not silently equate three calendar months to 90 days). Paid period protection applies; ask for further clock precedence ONLY where necessary for an honestly implementable policy, and present the smallest concrete scenario. Clearly separate product policy from engineering clock arithmetic and payment handling.
8. Proposes the minimum Founder confirmation of any new or materially revised decisions, including G-4 owner-of-multiple-businesses and the scope of the split mission allocation/transfer behaviour; do not convert observed membership F-02 into G-4 closure without explicit Founder record.
9. Includes an exact list of affected FCTM rows/Source 18 T3/T7/T8 implications and which Stage 8 assertions remain held. Do not change any FCTM row, Blueprint, approved Founder Record or classification in this work package.

## 5. Exact deliverables and bounded Git authority

**Effective only after this instruction PR is human merged, actual merge is independently verified by MC, and MC issues a minimal repository activation pointer.**

The appointed actor is ONLY Claude Code, mission `SB-P-1.12`, work package `SB-P-1.12-WP-ESC1-REFINED-FPDR-PROPOSAL`, repo `SmartBusinessv1/smart-business`, new locked branch `mission/SB-P-1.12-esc1-refined-fpdr-proposal` from then verified canonical main.

Exactly TWO NEW writable paths:
- `communication/missions/SB-P-1.12/claude-code/29-esc1-refined-founder-decision-proposal.md` (present-day refined PROPOSAL, not Founder record);
- `communication/live/report1.4.md` (matched current handover).

The actor may read canonical source/governance/FPDR/Blueprint/FCTM/Security records; fetch/verify main/remote/clean tree and absence of locked branch and paths; create branch; edit and stage ONLY these two exact paths; run Markdown/whitespace/secret gates; commit with truthful standard `Co-Authored-By` trailer; push named branch without force; create ONE DRAFT PR; report exact head, CI, file inventory and questions in PR handover. No generic staging, other paths, rebase/force push, self-approval, mark-ready, self-merge, production/payment/provider action, conflict resolution without new instruction. Expires upon MC final exact-head acceptance/rejection or PR closure, `2026-10-17T23:59:59Z`, or protocol stop/revocation, whichever first.

Do NOT edit historical `claude-code/28`, existing `instruction1.3.md`/`report1.3.md` or other numbered/base live exchange, Founder Records, FCTM, Blueprint, contracts, mission logs, README, security evidence, archive, code, SQL, migrations, workflows, payment or live external systems. STOP if honest preparation requires more authority.

## 6. Next decision gate

Mission Control reviews the proposed revised wording and asks Founder ONLY if a material policy choice remains. Founder approval of an eventual final FPDR requires a separate explicit confirmation and repository authorization/merge. A separate affected Blueprint/FCTM reconciliation and independent Security design review follow. The existing non-approved historical FPDR draft remains historical truth.

**MC-63 PREPARATION ONLY — NOT EFFECTIVE BEFORE HUMAN MERGE AND MC VERIFICATION — ESC-1 OPEN T8; `22-§20-2` BLOCKED/IN SCOPE; NO STAGE 8/LOCK/EIS/IMPLEMENTATION/MIGRATION/PRODUCTION AUTHORITY.**
