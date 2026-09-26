# SMART BUSINESS MISSION CONTROL — MC-59

## SB-P-1.12 — Founder ESC-1 Decision Evidence and Narrow FPDR Drafting

**From:** Smart Business Mission Control  
**To:** Claude Code — MC-02-appointed Definition Actor, FPDR preparer only  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-09-26  
**Status:** DRAFT — NOT EXECUTABLE before this separate instruction PR is human-merged and Mission Control verifies actual canonical merge  
**Explicitly authorized numbered pair:** `communication/live/instruction1.3.md` → `communication/live/report1.3.md`  
**Repository:** `SmartBusinessv1/smart-business`

## 1. Scope and provenance

MC-58 independently verified the human merge of the narrow ESC-1 Founder Brief, PR #646, to `main@a619ae8381a4598e4097eb125e44a015a11c7d18`. Stage 7 Engineering Review and MC-40/42/44 Security reviews are already canonical. The Founder, Riyas PK, subsequently gave the following product direction **directly to Mission Control in Founder–MC chat on 2026-09-26** in three consecutive turns. The next section accurately transmits the Founder's words into the repository, so the Founder need not ferry text between rooms. This is evidence of Founder direction for drafting, **not yet an approved/merged Founder Product Decision Record**. A proposed formulation below is not itself Founder approval.

ESC-1 remains OPEN T8, `22-§20-2` remains IN SCOPE and BLOCKED for Stage 7 engineering, and applicable dependent durability conclusions are held. No Stage 8/lock/EIS/implementation/migration/production authority.

## 2. Founder's source replies — preserve original words

### A. Founder ESC-1 decision responses

> Q1: we can give a option to stop or pause smart business, if pausing they can pause upto three months without losing their history. and in stopping we can give two options, either they can delete all the history or their history will be accessible upto three months, after three months of inactivity either through pausing or stopping the account will be deleted automatically.
> but in anycase the merchants can download thier history whenever they want if they are active or if they choose to preserve it for next three months after stopping or pausing.
> Q2: Yes
> Q3: Qualified
> Q4: Qualified
> Additional direction: owner can remove or add any number of managers or staff, and owner can be replaced with another owner (incase of business transfer or selling) but an owner cannot be removed

### B. Founder ESC-1 lifecycle clarifications

> 1.If a merchant owns one or more businesses we treat them as separtae business, so stopping or pausing one business will not effect the other.
>
> 2.three month clock begin in two ways
> a)when the merchant selects pause or stop
> b)we will calculate 90 days from the last subscription end date. meaning if the merchant is still active with a paid subscription we will not consider it as an inactive account
>
> 4.Removing a manager or staff will not delete buisness history

### C. Founder final clarifications

> FOUNDER ESC-1 FINAL CLARIFICATIONS
> Clock interaction: Yes — automatic 90-day period from subscription expiry
> Owner replacement: Other — qualified ownership rule
> Qualifications: we can give business transfer option so that the current owner can transfer the ownership to new owner. meaning the payment method will obviously change with this transfer, so that the new owner can add his payment details, so the previous owner can allow the new owner also with trasfer of login( whatsapp and email) both previos and new owner must receive valid transfer and receving approvals through mail or whatsapp so that smart business can ensure this is an authorised transfer

These are verbatim Founder statements; any later normalized policy text must be labelled `PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING`, not silently treated as the Founder's exact wording.

## 3. Intended product direction to reconcile without filling gaps

Prepare a narrow Source 18 T8 Founder Product Decision Record (FPDR) draft using the source statements above and the canonical ESC-1 brief. Clearly distinguish:

1. **Per-business independence.** The Owner may have one or more businesses. Pause, Stop, subscription expiry and eventual deletion are assessed per business; action affecting business A never implicitly pauses/stops/deletes business B or the human's entire login.
2. **Pause vs Stop and history/export.** Pause up to THREE CALENDAR MONTHS without losing history during preservation period; Stop presents a choice of requesting immediate history deletion or retaining accessible history for up to THREE MONTHS; active merchants and merchants in an applicable retention/export window can download their permitted history. Final deletion is subject to retention, privacy and legal constraints, not an unconditional promise to erase every record immediately or on a timer.
3. **Separate clock statements.** Explicit Pause/Stop begins a three-month clock, per the Founder. Subscription expiry automatically starts a 90-DAY inactivity clock; a business with an active paid subscription is not inactive **solely due to subscription expiry**. DO NOT silently declare three months equal to 90 days, decide clock precedence if both exist, or override an explicit pause/stop with the paid-subscription exception without further Founder clarification.
4. **Integrity until permissible deletion.** Founder Q2=YES: financial/authority/audit history remains intact while it must be retained, with no ordinary individual able to erase it through incidental business, authentication or staff deletion. Founder Q3/Q4 were QUALIFIED, not categorical yes/no answers. Never silently mark them YES.
5. **Staff access.** An Owner may add/remove Managers and staff under the separately approved permission-scoped model. Their removal NEVER deletes shared business history or the records of their prior authorized activity; staff cannot gain Owner financial intelligence by default.
6. **Owner/business transfer.** Owner is not simply removed; Founder wants an explicit current-Owner-to-new-Owner transfer route, including business authority, incoming Owner's verified email and WhatsApp identity/contact ownership and incoming Owner setting new payment details. Both previous and receiving Owners must complete valid authorization and acceptance approvals via their verified email or WhatsApp channel. Do NOT interpret “transfer of login” as password sharing, session/token transfer, mailbox/phone possession transfer, handing over previous Owner payment credentials, or auto-acceptance. Preserve business/financial/authority/audit continuity; do not infer a final account-deletion policy from transfer. Record exact multi-identity verification, channel-change and payment-integration design as security/engineering obligations, not settled technical mechanisms.
7. **Placement and governing truth.** If the Founder's new transfer or timed-deletion direction adds behaviour, changes a build commitment, classification, mission allocation or conflicts with Source 11/Contracts 03/18/21/22, surface T3/T7/T8 reconciliation explicitly. The lifecycle owner SB-P-1.19 is not an excuse to silently reassign or defer obligations that are already IN SCOPE in SB-P-1.12. Do not assume new owner-transfer implementation is already in scope; identify precise existing source/row or request a bounded Founder decision on its allocation.

## 4. Unresolved details must remain visible, not gate unrelated work

Do not invent Founder answers to: whether a merchant can resume Pause or Stop during the preservation window; what happens when explicit Pause/Stop and paid subscription overlap; precedence where both clocks run; which actions constitute inactivity apart from subscription expiry; exact calendar arithmetic/timezone and notification/grace process; what “account deleted” means in the context of per-business independence (business workspace vs human identity); the exact records removable under applicable legal/approved retention requirements; staff/Owner identity treatment if the last Owner wishes to leave without transfer or business closure; payment refunds/settlement/subscription changeover and payment-method verification; channel possession and strong approval methods; how direct Owner-API delete and Auth-user cascade are blocked or governed before any authorized deletion; how new transfer behaviour is assigned to this/later mission. Only present a MINIMAL Founder-only clarification request if a specific ambiguity actually blocks honest FPDR approval/Stage 8; separate future technical implementation details and SB-P-1.19 work from now.

No unsupported claim about legal retention periods or actual production deletion behaviour. Three months and 90 days are recorded separately. Existing data ownership, audit and dignity principles remain intact; note any apparent tension rather than silently resolve it.

## 5. Exact draft deliverables and current communication

Create on a new locked branch `mission/SB-P-1.12-esc1-fpdr-draft` from canonical main VERIFIED AFTER THIS INSTRUCTION PR merges:

- `communication/missions/SB-P-1.12/claude-code/28-esc1-founder-decision-record-draft.md` — proposed FPDR document or approval-ready packet following Source 18 and existing FPDR style. Explicit Founder source replies as evidence, concise proposed normalized decisions, decision IDs PROVISIONAL until Founder confirmation, exact affected FCTM dependencies, unresolved/conditional matters, security/identity/payment conditions, reconciliation proposal for subsequent separate authorization, and a short Founder confirmation section. NEVER label it `APPROVED`, assign a binding new Product Truth status, or close T8.
- `communication/live/report1.3.md` — current matching MC-59 handover, actual main/head/PR/CI, truthful unresolved matters and exact two-path diff.

Read canonical Source 18 §6 Stage 3; active communication protocol; existing Founder FPDR records, current FCTM, Source 11, Contracts 03/18/21/22, Build Plan §15, Stage 7 Blueprint §§20–21, MC-40/42/44 specialist reports, and canonical `claude-code/27` ESC-1 Founder Brief. Reuse, do not redo substantive reviews.

**Git grant:** After verified human merge of THIS instruction PR, Mission Control authorizes ONLY Claude Code, mission SB-P-1.12, work package `SB-P-1.12-WP-ESC1-FPDR-DRAFT`, repository `SmartBusinessv1/smart-business`, locked branch above, exactly the two NEW writable paths above. Read/fetch and verify correct remote, current main, clean worktree, branch/paths absent; create branch; edit/stage exact paths (no `git add .`); verify whitespace/secrets/Markdown, commit truthfully with standard `Co-Authored-By` trailer for actual Claude contribution, push only named branch without force, open one DRAFT PR, report exact-head CI/filenames in PR comment. No self-approval, mark-ready, self-merge, rebase, force push, other file change or unauthorized conflict resolution. Expiry: MC final exact-head acceptance/rejection/PR closure, `2026-10-17T23:59:59Z`, or Protocol §21 stop/revocation, whichever first.

**Prohibited edits:** Blueprint, FCTM, existing Founder Records, logs, README, instructions/reports 1.1/1.2/base pair, Security reports, source contracts, payment code/configuration, SQL/migrations/workflows/production/provider, archive. No hidden production or PCI/payment-processor action.

## 6. Subsequent gate

Mission Control reviews the DRAFT packet, brings ONLY indispensable remaining product questions to Founder, and seeks explicit Founder approval of the final record before its separate canonical decision merge. A later exact-scope Blueprint/FCTM reconciliation and appropriate independent security design review are distinct gates. Avoid extra paperwork cycles where current evidence suffices, but never silently close ESC-1 or approve Stage 8.

**MC-59 FOUNDER-DIRECTION HANDOFF — HOLD UNTIL INSTRUCTION PR HUMAN MERGE AND MC POST-MERGE VERIFICATION — PREPARE FPDR DRAFT ONLY — ESC-1 OPEN T8; NO STAGE 8/LOCK/EIS/IMPLEMENTATION/PRODUCTION AUTHORITY.**
