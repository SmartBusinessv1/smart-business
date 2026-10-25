# SB-P-1.18 — Bounded Stage 1 Intake Publication Git Authorization

**Status:** PROPOSED — effective ONLY after Founder human merge and Mission Control canonical-main verification.  
**Date:** 2026-10-25 (Asia/Kolkata).  
**Mission:** SB-P-1.18; **stage:** Stage 1 documentary intake submission only.  
**Authority:** Source 18 v1.2 §4.3; active Communication Protocol v1.1 §16 and §16.1; Founder-merged PR #1068 Stage 1 activation; Founder Track A priority decision.  
**Repository:** `SmartBusinessv1/smart-business`.  
**Prepared on main baseline:** `b2d68c26cb9a9b6a4d7771589b65fc551dfa259e`.

## 1. Narrow actor and Git scope

Founder/Mission Control authorizes **Claude Code — SB-P-1.18 Stage 1 Intake Preparation Actor** for **SB-P-1.18** on locked branch **`mission/SB-P-1.18-stage1-intake`** to publish *only* these three existing local drafts:

1. `communication/missions/SB-P-1.18/claude-code/01-stage1-intake-source-scope-and-actor-assessment.md` (new)
2. `communication/missions/SB-P-1.18/claude-code/02-stage1-fctm-opening-and-source-coverage-proposal.md` (new)
3. `communication/live/report.md` (Stage 1 placeholder replacement; preserve the existing original in Git history at blob `222649d3bf57b381c206189b9404f48f4dceda94`)

Permitted: fetch and inspect current `main`; preserve existing drafts; create/switch exact locked mission branch from latest verified `main`; stage **only** three named paths; commit with `docs(SB-P-1.18):` descriptive message and standard `Co-Authored-By` trailer **permitted**; push only locked mission branch; open **one draft PR** against `main`. Fast-forward pulls only; no force push, direct main mutation, broad staging, self-merge or unrelated file edits.

This grant ends at first draft PR submission, revocation, Protocol §21 stop or **2026-11-15 23:59 IST**, whichever is earliest. Any later changes or PR corrections require fresh bounded authority.

## 2. Existing local drafts and fingerprint gate

Actor reports a detached local worktree at historical PR #1068 merge `06855599cd83862cc5a4bcaf25d4aeb8a159a852`, not current canonical main, containing ONLY the three draft changes. Actor-reported SHA-256s (not independently verified by Mission Control):

- Intake/scope/actor proposal: `d0a1ce54679bd41e17fa4ce16d03094b2f8e65a7ec8f61dc6f853089807179f4`
- FCTM opening/source coverage proposal: `dcefdc2c38e4432581b071522f0ea605ab173ba035b482aad1021b841ea9268b`
- Live Stage 1 report return: `cf8f0f95e3d3e784e1850305217a5a4ca84124c0c56fbb4136d2797d52d6cd97`

After this authorization is merged and verified, actor MUST fetch canonical `main`, compare changed upstream context against source baseline, and port the exact drafts to fresh branch without overwriting unrelated files. Recompute and report all three SHA-256s; if any mismatch, merge conflict, newly relevant authoritative source or required substantive edit is discovered, **STOP and return to Mission Control** rather than publish under this unchanged-draft grant. Do not confuse historical `origin/main@06855599` with current main. Actor's existing main checkout and unrelated untracked files remain untouched.

## 3. Submission constraints and gates

Output is an **Intake Pack proposal and FCTM opening only**, not accepted/locked Product Truth or a populated FCTM. Confirm exact Build Plan/Product Truth/Contracts 01, 06, 16, 22 §16 and Founder FPDR evidence before substantive Stage 1 acceptance. Claude Code is a *candidate*, **not self-appointed** Definition Actor. Mission Control must separately assess §4.3 prior contributions and actor independence and record formal Stage 1 appointment before Stage 2.

Actor must return PR link, exact head, changed-file list, full fingerprints, exact main baseline, relevant CI evidence, source uncertainties and outstanding T1–T8 candidate issues. Mission Control independently reviews the three actual documents and the Stage 1 source pack; Founder alone merges.

**Prohibited:** editing `communication/live/instruction.md`, any numbered historical `communication/live/` file, SB-P-1.17 artifacts, active source contracts, mission README, code/SQL, migrations, integrations, production and any Stage 2+ outputs. No implementation or formal closure. Track B remains **PRESERVATION SECURED — HOUSEKEEPING PAUSED — REFERENCE VERIFICATION PENDING — REMOVAL NOT AUTHORIZED**, with PR #1074 OPEN/DRAFT.

**STOP at the first draft Stage 1 intake PR for Mission Control content review.**
