# SB-P-1.13 — Stage 2 Founder Decision Brief

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; QUESTIONS ONLY; NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`. No Founder dialogue is opened by this brief.
**Prepared by:** Claude Code, Stage 2 Definition Actor
**Basis:** Stage 2 Mission Truth Pack, `claude-code/01-stage2-mission-truth-pack.md` Part 6, at baseline `main@488b16346941e70975edfe849af4aea317cbd6a3`; narrowed under Mission Control corrections C-3, C-4 and C-5 on PR #777

Mission Control has determined that the Stage 3 Founder Decision Gate is triggered once this Stage 2 output is canonically merged: T1 (D-02), T2 (D-16) and T4 (D-02, D-16). This brief groups only the genuinely unresolved product and mission questions. It does not answer them, recommend an answer, open a Founder dialogue or record a decision. Mission Control leads any dialogue (Source 18 Stage 3).

## Mission

Create Smart Business's own conversational operating surface independently of WhatsApp (Build Plan §10.2).

## Current Status

Stage 2 Truth Pack prepared and corrected on draft PR #777. Stage 3 is triggered on canonical merge. No Blueprint, EIS or implementation work has started.

## What Has Been Completed

- Populated FCTM: 974 rows; every numbered section and acceptance scenario of the opened contracts represented.
- Independent obligation inventory, Delta evidence, Institutional Learning Intake Record.
- SB-P-1.12 dependency reconciliation: every consumed authority capability is specification-available, but not implemented and not evidenced.

## What You Need to Do Now

Nothing yet. After the Stage 2 output is merged, Mission Control opens the Stage 3 dialogue limited to the questions below.

### FDB-1 — The governed command behind Founder Runtime Scenario A (T1, T4; Delta D-02; includes DC-14)

**Question:** Scenario A says the assistant "executes through the existing governed command/RPC". For transactions, no such command exists today: the app writes a transaction directly from the browser, with no preview step, confirmation binding or duplicate protection. Who should build the governed create-transaction command, and when is Scenario A verified?

**Facts:**

- Catalog and inventory already have governed preview-and-commit commands with duplicate protection. Transactions do not.
- Mature Ledger work is assigned to SB-P-1.14 (Build Plan §10.3), which comes after SB-P-1.13. Mission Control has confirmed the mature Ledger is not pulled into SB-P-1.13 (MC-Q7).
- Contract 3 §22 says existing transaction foundations are extended, not replaced (DC-14).
- 17 `IN SCOPE` rows depend on this command, including Scenario A itself.

**Possible directions (not recommendations):** SB-P-1.13 builds an additive governed create-transaction command for the existing sale/purchase types; or Scenario A's runtime verification waits until SB-P-1.14 provides it; or Scenario A is first verified with an existing governed domain (for example inventory movement) and the transaction form follows later. Moving Scenario A or changing mission ownership or timing would itself be a T7 decision.

### FDB-2 — Basic Voice credit and repayment before the four-state Ledger exists (T2, T4; Delta D-16)

**Question:** Contract 12 says Basic Voice (this mission) should handle spoken sale, expense, credit and repayment entries and clarify "credit versus repayment". The credit and repayment record types are built in SB-P-1.14, after this mission. How should that part of Basic Voice be sequenced?

**Facts:**

- Today the app records only sales and purchases.
- Three rows are affected: `12-§4-1`, `12-§7-6`, `12-§21-1`. They stay `IN SCOPE`, dependency-blocked on SB-P-1.14, until the Founder decides; they are not moved (Mission Control C-6).

**Possible directions (not recommendations):** SB-P-1.13 demonstrates voice for the types that exist, and the credit/repayment part is demonstrated once SB-P-1.14 lands, recorded as a Founder-approved sequence; or Basic Voice acceptance in SB-P-1.13 waits for SB-P-1.14; or the four-state work moves earlier. Pulling four-state Ledger work forward or changing timing would itself be a T7 decision.

### FDB-3 — Two voice and privacy behaviours no approved source fixes (T6; DC-04, DC-05)

| ID | Inferred behaviour | Who it affects |
|---|---|---|
| DC-04 | Until durable media storage exists (SB-P-1.14), voice recordings are processed and not kept; only the text and the resulting record are stored | Every voice user |
| DC-05 | Spoken replies switch to text for Owner-sensitive information when the listener or role is uncertain | Owners using voice in the shop |

### Dependency note — SB-P-1.12 implementation suspension (not a Founder question)

SB-P-1.12's authority system is specified and locked, but its implementation is suspended (MC-70). This is already governed by the Founder-directed documentation-acceleration lane (SB-P-1.12 MC-70 §1, §7): later missions continue documentary and readiness work; SB-P-1.12-dependent implementation and runtime proof stay blocked; no temporary parallel permission system may be created (SB-P-1.12 EIS §19.5). 198 `IN SCOPE` rows, including the Employee-denial check in Scenario A, stay in scope and dependency-blocked. No new Founder decision is asked.

### Not in this brief

Mission Control dispositioned the other derived constraints (C-5): DC-01, DC-02, DC-03, DC-06, DC-07 and DC-11 are engineering realization already constrained by approved sources and the locked SB-P-1.12 design; DC-08 is bounded by the approved SB-P-1.13/SB-P-1.14 split; DC-10 was corrected to FAQ-first use of trusted, versioned, approved support knowledge; DC-12 is an open policy/legal-retention dependency off the critical path; DC-13 is an activation-gate risk that becomes a Founder question only if no provider can meet the approved Malayalam/Manglish commitment; DC-14 is part of FDB-1.

## Where to Perform the Action

No action now. Mission Control will say where when it opens the dialogue.

## Exact Text to Copy

None.

## Files Involved

- `communication/missions/SB-P-1.13/claude-code/01-stage2-mission-truth-pack.md` (Parts 3, 5, 6)
- `communication/missions/SB-P-1.13/claude-code/05-stage2-delta-evidence.md` (D-02, D-16)
- `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md`

## PowerShell Commands

None required now. Merging the Stage 2 pull request is a Mission Control and Founder step under the normal process. This brief does not ask for it.

## What Success Looks Like

Mission Control opens a Stage 3 dialogue limited to FDB-1, FDB-2 and FDB-3. Each Founder answer is written into a Founder Product Decision Record and cited by Decision ID in the affected FCTM rows.

## What to Send Back to Mission Control

Nothing until Mission Control asks.

## Do Not Do

- Do not treat this brief as a decision record.
- Do not approve implementation, provider or voice-provider activity on the basis of this brief.
- Do not merge any pull request on the basis of this brief alone.
