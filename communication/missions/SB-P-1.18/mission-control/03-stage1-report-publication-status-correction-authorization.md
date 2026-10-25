# SB-P-1.18 — PR #1076 Single-File Factual Correction Authorization

**Status:** PROPOSED — becomes effective only after Founder human merge and Mission Control verification on canonical `main`.  
**Date:** 2026-10-25 (Asia/Kolkata).  
**Mission:** SB-P-1.18, Stage 1 documentary intake.  
**Authority:** Source 18 v1.2, Communication Protocol v1.1 §16 and §16.1, Founder-merged PR #1075 publication grant (expired at first draft PR), Mission Control PR #1076 review MC-507DL.  
**Repository:** `SmartBusinessv1/smart-business`.  
**Authorization preparation baseline:** `9f472d5394a94051271bf9c5bca9f39b030b8f9f`.

## 1. Exact corrective authority

Founder/Mission Control authorizes **Claude Code — SB-P-1.18 Stage 1 Intake Preparation Actor** to make ONE narrow correction on its existing branch **`mission/SB-P-1.18-stage1-intake`**, to the already open draft **PR #1076**, starting from approved head **`0b2631b8b0bf3981e810822a360b79946c2e794e`**.

**Only writable path:** `communication/live/report.md`.

**Only permitted content change:** Replace the factually obsolete paragraph in the section `## Git scope` beginning `No Git authority was granted.` and ending `no PR has been opened.` with an accurate retrospective record that:
- PR #1075 granted and completed a bounded three-file publication authorization; Founder merge `9f472d5394a94051271bf9c5bca9f39b030b8f9f`;
- PR #1076 is OPEN/DRAFT, original submission head `0b2631b8b0bf3981e810822a360b79946c2e794e`; `mission/SB-P-1.18-stage1-intake` was branched from the PR #1075 merge;
- the three previously authorized files were committed and pushed under that grant, which **expired when PR #1076 was first submitted**;
- original content preparation at `06855599cd83862cc5a4bcaf25d4aeb8a159a852` remains a historic intake baseline, **not the publication branch's base**.

This corrective grant does not authorize rewriting any additional heading, source allocation, substantive Intake Pack or FCTM text, actor assessment, uncertainty, or restriction. Do not modify the live instruction or historical numbered live files.

## 2. Bounded operations and preconditions

After this authorization is Founder-merged and Mission Control verifies it on canonical `main`, actor may fetch and inspect current refs; check that PR #1076 still uses the exact designated branch and that its head is the authorized original head; edit solely the paragraph above; stage **only** `communication/live/report.md`; commit with a descriptive `docs(SB-P-1.18):` prefix and standard `Co-Authored-By` trailer **permitted**; push only the existing PR branch; and update PR #1076. Fast-forward pull only; no direct `main` write, force push, branch reset, unrelated staging, self-merge or second PR. Do not substitute a stale or mismatched PR head: STOP if the branch moved or conflicts arise.

**Expiry:** on first corrective push/update of PR #1076; or 2026-11-15 23:59 IST; or revocation/Protocol §21 stop, whichever earliest. Further modifications need a new grant.

## 3. Acceptance and stop

Return changed-paragraph diff, original and new PR head, changed-file list, current base commit, local SHA-256 for corrected report, and refreshed CI (Markdown gate plus application assurance/individual checks). The two new Stage 1 Intake Pack source files must remain byte-identical to their original submitted SHA-256 values:
- `01-stage1-intake-source-scope-and-actor-assessment.md`: `d0a1ce54679bd41e17fa4ce16d03094b2f8e65a7ec8f61dc6f853089807179f4`
- `02-stage1-fctm-opening-and-source-coverage-proposal.md`: `dcefdc2c38e4432581b071522f0ea605ab173ba035b482aad1021b841ea9268b`

Mission Control performs independent head/diff/content/CI review. Founder alone merges PR #1076 after review. No Definition Actor appointment, Stage 2, implementation, migrations, provider activation or formal mission closure. Track B remains paused and PR #1074 remains OPEN/DRAFT.

**STOP after single corrective push of PR #1076.**
