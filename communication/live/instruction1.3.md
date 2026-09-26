# SMART BUSINESS MISSION CONTROL — MC-59

## SB-P-1.12 — ESC-1 Founder Direction Preservation and Decision Record Preparation

**From:** Smart Business Mission Control  
**To:** Claude Code — MC-02-appointed Definition Actor, documentary record preparer only  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-09-26  
**Status:** DRAFT / NOT EXECUTABLE until this instruction PR is human-merged and Mission Control verifies its canonical merge  
**Repository:** `SmartBusinessv1/smart-business`  
**Explicitly authorized numbered communication pair:** `communication/live/instruction1.3.md` → `communication/live/report1.3.md`  
**Canonical preparation baseline:** `main@a619ae8381a4598e4097eb125e44a015a11c7d18` (MC-58 PR #646 Founder Brief merge verification)

### 1. Purpose

The Founder answered the four ESC-1 Founder Brief questions in Mission Control chat and gave direct subsequent lifecycle, inactivity and ownership-transfer clarifications. Mission Control shall not substitute Claude's former proposed A/B/C or I-1/I-2 options for what the Founder actually said. The actual Founder answers, set out in §2, are the authorized drafting input. Prepare a Founder Product Decision Record (FPDR) for narrow Founder review, with evidence and exact unresolved boundaries. The FPDR is NOT self-approved, is not effective before Founder approval and canonical human merge, and by itself does not authorize Blueprint/FCTM edits, Stage 8, EIS, implementation or production.

Do not repeat Security's MC-40/42/44 review or Claude's Stage 7 review. The approved acceleration proposal is non-governing; use its delta-only speed principle without waiving Source 18 T8, Founder authority, or security verification.

### 2. Founder responses — exact decision substance, not a model-selected substitute

**Original ESC-1 responses (Founder chat, 2026-09-26):**
- Q1: `we can give a option to stop or pause smart business, if pausing they can pause upto three months without losing their history. and in stopping we can give two options, either they can delete all the history or their history will be accessible upto three months, after three months of inactivity either through pausing or stopping the account will be deleted automatically. but in anycase the merchants can download thier history whenever they want if they are active or if they choose to preserve it for next three months after stopping or pausing.`
- Q2: `Yes` — financial and authority/audit history remains intact until any separately permitted final deletion.
- Q3 and Q4: `Qualified`.
- Additional: `owner can remove or add any number of managers or staff, and owner can be replaced with another owner (incase of business transfer or selling) but an owner cannot be removed`.

**Next clarifications (Founder chat, 2026-09-26):**
- `If a merchant owns one or more businesses we treat them as separtae business, so stopping or pausing one business will not effect the other.`
- `three month clock begin in two ways a)when the merchant selects pause or stop b)we will calculate 90 days from the last subscription end date. meaning if the merchant is still active with a paid subscription we will not consider it as an inactive account`.
- `Removing a manager or staff will not delete buisness history`.

**Final clarification (Founder chat, 2026-09-26):**
- Clock: `Yes — automatic 90-day period from subscription expiry`.
- Owner replacement: `we can give business transfer option so that the current owner can transfer the ownership to new owner. meaning the payment method will obviously change with this transfer, so that the new owner can add his payment details, so the previous owner can allow the new owner also with trasfer of login( whatsapp and email) both previos and new owner must receive valid transfer and receving approvals through mail or whatsapp so that smart business can ensure this is an authorised transfer`.

Do not invent a quote about pause resumption, immediate deletion implementation, retention law, owner successor rules, treatment of expired subscriptions followed by renewal, or the interaction of clocks when multiple triggers overlap. The Founder did NOT pick A/B/C or I-1/I-2 from the earlier brief. Preserve the distinction `three months` for explicit Pause/Stop and `90 days` from subscription end unless Founder explicitly equates them; both deadlines must be represented honestly.

### 3. Source-backed framing and non-negotiable truthful qualifications

Read actual canonical Source 18 §6 Stage 3, applicable Source 11, Contracts 03/18/21/22, Build Plan §15 item 6, FCTM `22-§20-2` and named dependent rows, Blueprint §§20–21, Founder Records 03/04, Stage 7 report, canonical specialist-authored MC-40/42/44 reports, and the approved brief `claude-code/27-esc1-founder-decision-brief.md`. The brief's options were PROPOSALS, not Founder selections.

The future record must distinguish these product-policy elements:

1. **Per-business isolation:** each independently owned/operated business retains independent paid state, pause, stop, lifecycle and data; action on one cannot delete or affect the Owner's other business or personal identity by cascade.
2. **Pause:** explicit merchant pause, history retained and downloadable for up to **three months**, subject to final approved retention obligations; resumption rules were NOT expressly selected.
3. **Stop:** merchant chooses immediate final deletion request or a history-access/export period of up to **three months** before final deletion process; do not promise indiscriminate physical deletion of financial/audit/legal records or declare impossible rights. When the Founder said `delete all the history`, record that as requested product outcome with a prominent `CONDITIONAL ON approved retention, privacy/legal obligations and security design` qualification, not secretly erase or reject the request.
4. **Subscription expiry:** where paid subscription ends and is not renewed, a separate **90-day inactivity period** begins automatically at subscription end. Paid-active business is NOT inactive. Do not assume last-interaction inactivity, silently delete on a missed payment while subscription is still active, or choose precedence rules for overlapping pause/stop/expiry dates.
5. **Download:** available during active access and any Founder-described pause or chosen stop preservation/export window, with the governing data-access/privacy restrictions; do not assert an always-available download after deletion or payment-method transfer.
6. **History:** no user may erase protected financial, grant/revoke, refusal or audit evidence casually while the applicable preservation window/obligation applies. After a separately authorized final lifecycle decision, disposition is governed; full erasure may be limited by binding law, retention, audit obligations or another approved exception (none presumed adjudicated here).
7. **Identity and staff:** Owner may add/remove any number of Managers/staff within permission-scoped access, and removing them does not delete business history. Ownership replacement through an authenticated, authorized transfer is permitted; unilateral Owner removal is NOT the same thing.
8. **Business transfer:** current Owner initiates transfer, new Owner accepts, BOTH must complete valid verifiable approvals by registered/verified email or WhatsApp channel, with audit trail and no unauthorized transfer. New Owner can set their own payment method and assume business-associated WhatsApp/email login/contact arrangements after authorized transfer. This is a required product EXPERIENCE/authority boundary, not authorization to hand over passwords, OTPs, existing sessions, stored payment credentials or another person's personal account. Later Security/Payments architecture decides verified identity/channel rebinding, session invalidation, payment mandate transition, fraud protection, rollback, unresolved balances, and whether new-owner account is pre-existing; do not silently select these mechanisms. Existing business/history must persist on transfer.
9. **Ownership-cardinality caution:** Founder states one merchant can have multiple independently treated businesses, which has possible relevance to existing G-4/S-2 and `businesses.owner_id UNIQUE`; do NOT silently declare G-4 closed or change that schema or FCTM as part of this T8 documentation-only scope. Flag the exact coupling for separate MC disposition and avoid interpreting one merchant's multiple businesses as permission to reach another merchant's business.
10. **Three-month/90-day interplay:** the exact calendar-day definition, overlap/precedence of two clocks, paid renewal during pause or stop, notices, reset and cancellation/resume operations require later bounded product clarification where materially needed; mark OPEN, not invented. A separate SB-P-1.19 lifecycle responsibility exists; do not assign ESC-1 integrity obligation out of SB-P-1.12 by implication.

Do not treat a product decision as proof that existing repository-defined Owner DELETE grants or Auth-user ON DELETE CASCADE are safe. MC-40's ESC-1 T8 remains OPEN; `22-§20-2` stays BLOCKED/IN SCOPE and history-dependent rows held until separately reviewed security design and actual relevant evidence. G-3–G-8, S-2–S-7 and G-6/T4 production UNVERIFIED retain current recorded status. The FPDR is a policy input, not runtime certification.

### 4. Deliverable and visible qualifications

Create exactly one new Founder decision DRAFT file at:

`communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md`

Include: decision ID (new, unambiguous), Mission/Source 18 stage/T8/MC provenance, exact quote block of Founder §2 answers, structured decision statements distinguishing *expressly approved Founder direction* from preparer's proposed precise wording, constraints and open subsidiary operational questions; annotated links to existing source and Security evidence; specific affected FCTM rows; statements of no FCTM/build-commitment change yet; explicit Founder review/confirmation and human-merge effectiveness block. Prefer neutral factual language and do not claim Founder approved the technical qualifiers as independent legal judgments. Include an explicit minimal Founder review checklist that flags ONLY genuine ambiguity and asks for one grouped correction if needed. Do not request Founder to re-answer already answered questions.

Create present-day paired handover `communication/live/report1.3.md` indicating this is an FPDR DRAFT for Mission Control exact-head review, NOT Founder approval, its exact two-file change inventory, evidence boundaries, CI and blockers. Exact head and CI may be reported in the PR comment because file cannot contain own commit hash.

### 5. Exact Git grant — only effective after instruction PR human merge and MC verification

Mission Control authorizes **Claude Code**, mission **SB-P-1.12**, repository **SmartBusinessv1/smart-business**, work package **SB-P-1.12-WP-ESC1-FPDR-DRAFT**, ordered steps (1) verified canonical read-only intake, (2) prepare the decision DRAFT using only §2 actual Founder responses and §3 source checks, (3) prepare current numbered handover, (4) submit one separate DRAFT PR with exact-head evidence.

**Locked NEW branch:** `mission/SB-P-1.12-esc1-founder-record`, from the actual, newly verified canonical main after THIS instruction PR merges. Confirm branch/path absence and remote identity, clean working tree, and no intervening material authority change.

**Exactly TWO writable paths:** `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md` and `communication/live/report1.3.md`, both new. Do NOT edit existing Founder Records, Blueprint, FCTM, mission README/logs, current or earlier live files, Security reports, contracts, Source 18, code, SQL, payments, auth or provider state.

**Permitted Git operations:** read, fetch, verify current main and branch, fast-forward-only local pull, new locked branch create, exact-file stage (never `git add .`), whitespace/Markdown/secrets and local quality validation, mission-scoped truthful descriptive commit(s) with standard `Co-Authored-By` trailer REQUIRED for Claude contributions, push only locked branch without force, open ONE DRAFT PR to main and post exact-head/CI/evidence comment. No self-approval, marking ready, human merge, rebase, force push, branch-protection/workflow changes or resolving unexpected conflicts. STOP under Protocol §21 or if scope insufficient; no improvisation.

**Expiry:** final Mission Control exact-head acceptance/rejection or closure of the draft FPDR PR; `2026-10-17T23:59:59Z`; Protocol §21 event or revocation, whichever is first. Git grant only. Does not authorize Founder approval, deletion lifecycle implementation, Stage 8, Blueprint lock, EIS, migration, provider/production work.

### 6. Next action after report

Mission Control will review the TWO-file FPDR draft against the Founder's actual answers and canonical Source 18. Before any Founder decision is treated as effective, route the document for the Founder's **explicit review/approval** and authorized-human merge. Any subsequent Blueprint/FCTM reconciliation, decision-specific security design and runtime/provider verification require separate written authorization with their original roles and gates, using the next numbered repository instruction/report pair. No automatic selection of a permanent-deletion mechanism or retention interval.

**MC-59 FOUNDER DIRECTION RECEIVED — FPDR DRAFT PREPARATION ONLY — HOLD FOR THIS INSTRUCTION PR HUMAN MERGE AND MC POST-MERGE VERIFICATION — ESC-1 OPEN T8 — NO STAGE 8/LOCK/EIS/IMPLEMENTATION/PRODUCTION AUTHORITY.**
