# SB-P-1.13 — Stage 2 Founder Decision Brief

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Status:** `DRAFT — QUESTIONS ONLY — MISSION CONTROL REVIEW REQUIRED BEFORE ANY FOUNDER DIALOGUE`
**Prepared by:** Claude Code, Stage 2 Definition Actor
**Basis:** Stage 2 Mission Truth Pack (draft), `claude-code/01-stage2-mission-truth-pack.md` Part 6, at baseline `main@488b16346941e70975edfe849af4aea317cbd6a3`

This brief exists because Stage 2 found genuine Stage 3 trigger evidence: four Delta items are classified `PRODUCT-AFFECTING` (T4), and there are T1, T2 and T6 candidates. It groups that evidence into the decisions the Founder might be asked to make. It does not answer them, recommend an answer, open a Founder dialogue or record a decision. Mission Control decides whether the gate is triggered and, if so, leads the dialogue (Source 18 Stage 3).

## Mission

Create Smart Business's own conversational operating surface independently of WhatsApp (Build Plan §10.2).

## Current Status

Stage 2 Truth Pack prepared as a draft pull request. Stage 3 is not decided. No Blueprint, EIS or implementation work has started.

## What Has Been Completed

- Populated FCTM: 974 rows; every numbered section and acceptance scenario of the opened contracts represented.
- Independent obligation inventory, Delta evidence, Institutional Learning Intake Record.
- SB-P-1.12 dependency reconciliation: every consumed authority capability is specification-available, but not implemented and not evidenced.

## What You Need to Do Now

Nothing yet. Mission Control first reviews the Truth Pack and decides whether a Founder dialogue is needed. If it is, these are the questions that dialogue would cover.

### FDB-1 — The governed command behind Founder Runtime Scenario A (T1, T4; Delta D-02)

**Question:** Scenario A says the assistant "executes through the existing governed command/RPC". For transactions, no such command exists today: the app writes a transaction directly from the browser, with no preview step, confirmation binding or duplicate protection. Who should build the governed create-transaction command, and does Scenario A wait for it?

**Facts:**

- Catalog and inventory already have governed preview-and-commit commands with duplicate protection. Transactions do not.
- Mature Ledger work is assigned to SB-P-1.14 (Build Plan §10.3), which comes after SB-P-1.13.
- Contract 3 §22 says existing transaction foundations are extended, not replaced.
- 17 `IN SCOPE` rows depend on this command, including Scenario A itself.

**Possible directions (not recommendations):** SB-P-1.13 builds an additive governed create-transaction command for the existing sale/purchase types; or Scenario A's runtime verification waits until SB-P-1.14 provides it; or Scenario A is verified first with an existing governed domain (for example inventory movement) and the transaction form follows later. Any change to Scenario A's wording or timing would be a Founder decision.

### FDB-2 — SB-P-1.12 implementation suspension and the permission-dependent anchors (T4; Delta D-05)

**Question:** SB-P-1.12's authority system is fully specified and locked, but its implementation is suspended (MC-70). SB-P-1.13 can be fully specified without it. It cannot be built against real roles, or show the Founder-reserved check "Employee asking for Owner profit is denied", until SB-P-1.12 is implemented. How should SB-P-1.13 proceed past documentation while that holds?

**Facts:**

- 198 `IN SCOPE` rows depend on SB-P-1.12. The SB-P-1.12 EIS (§19.5) lets SB-P-1.13 use the authority system only after it is implemented, verified and accepted by Mission Control, and forbids SB-P-1.13 to build a temporary parallel permission system.
- No row has been moved. Under Source 18 §3.2 item 5, a row blocked by a dependency stays in scope, and only the Founder may change its commitment or timing.

**Possible directions (not recommendations):** continue SB-P-1.13 through Blueprint and EIS documentation only, and hold implementation until SB-P-1.12 resumes; or sequence SB-P-1.13 implementation so Owner-only flows come first, with Manager and Employee flows waiting for SB-P-1.12; or another sequence Mission Control proposes.

### FDB-3 — Basic Voice credit and repayment before the four-state Ledger exists (T2, T4; Delta D-16)

**Question:** Contract 12 says Basic Voice (this mission) should handle spoken sale, expense, credit and repayment entries and clarify "credit versus repayment". The credit and repayment record types are built in SB-P-1.14, after this mission. How should that part of Basic Voice be handled?

**Facts:**

- Today the app records only sales and purchases.
- Three rows are affected: `12-§4-1`, `12-§7-6`, `12-§21-1`. They stay in scope, marked as blocked by SB-P-1.14.

**Possible directions (not recommendations):** SB-P-1.13 demonstrates voice for the types that exist, and the credit/repayment part is demonstrated once SB-P-1.14 lands, recorded as a Founder-approved sequence; or Basic Voice acceptance in SB-P-1.13 waits for SB-P-1.14; or the four-state work moves earlier. Moving work between missions is a Founder decision (Build Plan §9 assignment lock).

### FDB-4 — Behaviour choices the Truth Pack inferred but no source fixes (T6 candidates)

Mission Control will judge which of these, if any, need the Founder. Each would change what a merchant sees.

| ID | Inferred behaviour | Who it affects |
|---|---|---|
| DC-04 | Until durable media storage exists (SB-P-1.14), voice recordings are processed and not kept; only the text and the resulting record are stored | Every voice user |
| DC-05 | Spoken replies switch to text for Owner-sensitive information when the listener or role is uncertain | Owners using voice in the shop |
| DC-06 | If the AI service is down, the merchant's message is kept and they are pointed to the normal pages; nothing queued runs later without a fresh "yes" | Everyone during an outage |
| DC-07 | A preview awaiting "yes" expires, and the merchant is asked to review again | Everyone confirming an action |
| DC-08 | Before SB-P-1.14, a receipt or file sent in chat is acknowledged but not read into the books | Merchants sending documents |
| DC-10 | Support answers come only from a Team LIPS-written FAQ in three languages | Merchants asking for help |
| DC-12 | Chat history for active accounts needs a default keep period; no source sets one | Every user |
| DC-13 | Malayalam and Manglish voice quality depends on the provider chosen later | Voice users |

## Where to Perform the Action

No action now. If Mission Control opens a dialogue, it will say where.

## Exact Text to Copy

None.

## Files Involved

- `communication/missions/SB-P-1.13/claude-code/01-stage2-mission-truth-pack.md` (Parts 3, 5, 6)
- `communication/missions/SB-P-1.13/claude-code/05-stage2-delta-evidence.md` (D-02, D-05, D-16)
- `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md`

## PowerShell Commands

None required now. Merging the Stage 2 pull request is a Mission Control and Founder step under the normal process. This brief does not ask for it.

## What Success Looks Like

Mission Control either records that no Founder dialogue is needed for some of these items, with reasons, or opens a dialogue limited to the items it judges triggering. Any Founder answer is then written into a Founder Product Decision Record and cited by Decision ID in the affected FCTM rows.

## What to Send Back to Mission Control

Nothing until Mission Control asks.

## Do Not Do

- Do not treat this brief as a decision record.
- Do not approve implementation, provider or voice-provider activity on the basis of this brief.
- Do not merge any pull request on the basis of this brief alone.
