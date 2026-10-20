# SB-P-1.17 — Stage 3 Founder Brief (Draft)

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate, **TRIGGERED; PREPARATION ONLY**\
**Status:** `DRAFT — NOT AUTHORITY; FOR MISSION CONTROL REVIEW BEFORE ANY FOUNDER DIALOGUE`\
**Prepared by:** Claude Code, Definition Actor, under `mission-control/06-stage3-founder-decision-gate-preparation-instruction.md` (blob `3b058f6d`)\
**Baseline:** `main@2591668b995ce3f5e4198edf6f45fa7419cbe0a8`\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

Nothing in this brief is decided. Recommendations are proposals and are marked **NOT APPROVED**. The evidence, source text and exact FCTM rows are in `07-stage3-decision-options-and-evidence-annex.md`.

## What Manager Operations will do

A shop owner sees what stock they have, what is running low or expiring, and which supplier they usually buy from. Smart Business suggests a reorder with its reasons, and **the Owner confirms**, unless the Owner has stored a bounded standing rule. An existing POS keeps working and is connected, not replaced. Unusual discounts or voids show up as **neutral review items, never accusations**. At closing, the counted cash is compared with what the records say. All of this is already approved. Five questions remain that no approved source answers.

## The five questions

| # | Question for the Founder | Options (detail in annex) | Proposal — **NOT APPROVED** |
|---|---|---|---|
| **U-01** | What may an Owner hand to a Manager in Manager Operations, and what stays with the Owner? | **A** each capability delegated separately, within scope · **B** Managers prepare and the Owner confirms everything consequential · **C** as A, plus operator-level counter detail by explicit grant | **A.** Standing-rule creation stays with the Owner in every option, because Contract 7 §5 already says so |
| **U-02** | What does "standard POS bridge" honestly promise in Phase 1? | **A** a vendor-neutral bridge with two connection types (API/webhook, or structured export), minimum required fields, and signals only where the POS supplies the data · **B** first prove one reference POS class, others by export · (a CSV-only bridge is excluded by the approved contract) | **A.** No POS product is named until evidence exists. Founder Scenario B is verified on the first evidenced compatible source |
| **U-05** | Before WhatsApp arrives (SB-P-1.20), how does a confirmed reorder reach the supplier? | **A** Smart Business records the purchase request and prepares a message the merchant sends themselves (copy, share or print) · **B** it records the request only, and the merchant contacts the supplier their own way · **C** dispatch deferred entirely (would need a separate deferral decision) | **A.** Same pattern as the approved `16:FPDR-8` for customer messages; never shown as "sent" |
| **U-06** | Is a supplier's purchase price, shown to a Manager, covered by the Owner-only cost rule (`12:FR-09`)? | **A** yes: the Manager sees it only with the explicit cost permission · **B** no: it is a Ledger purchase fact, visible if the Manager has purchase visibility; no margin is ever computed · **C** Owner-only in Phase 1, whatever the grants | **A.** The safest default; it matches the current provisional hold |
| **U-13** | Can old purchases with a typed-in supplier name be linked to the new supplier records? | **A** yes, only when the Owner confirms each link; nothing is rewritten; unlinked purchases stay visibly unlinked · **B** no: supplier history starts from now; old purchases stay searchable by name | **A.** Same pattern as the approved `16:FPDR-2` |

## What these questions block, and what they do not

- **Each one holds only named behaviours.** None blocks the whole mission (completion report §12, accepted at PR #989).
- Founder Scenario A (low stock → suggestion → Owner confirms → same product identity) does not depend on any answer.
- Founder Scenario B depends on U-02.
- The five Build Plan §15 open items already in the FCTM (Smart Stock price, retention duration, marketplace) are **separate**, and nothing here reopens them.

## Proposed conversation format

- Mission Control conducts the conversation and asks one question at a time.
- The Founder answers with an option letter, optionally with changes.
- Each answer is recorded verbatim. The Founder Decision Record draft (`08-…`) is then filled only under a separate Mission Control instruction.
- Nothing becomes effective until the record is human-merged and verified.
