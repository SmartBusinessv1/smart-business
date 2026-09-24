# SMART BUSINESS MISSION CONTROL — MC-25 CONTROLLED RECONCILIATION INSTRUCTION

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**From:** Smart Business Mission Control  
**To:** Claude Code — appointed documentary preparation actor (no acceptance authority)  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER/AUTHORIZED HUMAN MERGE OF THE SEPARATE MC-25 AUTHORIZATION PR  
**Verified prior crossing:** PR #632 human merged, `main@76ff1575e1ca3978f363d7a1daef307513376345`, reviewed head `945ec8f330900f5902493eee9771406f90ceb83d`.  
**Companion authority:** `communication/missions/SB-P-1.12/mission-control/12-founder-decision-and-blueprint-reconciliation-authorization.md`.  
**Founder source:** [PR #632 comment 5819755459](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819755459); [MC-24 gate](../missions/SB-P-1.12/mission-control/11-stage6-builder-review-gate-and-founder-decision-handover.md).

## 1. Intake — only after MC-25 human merge

Fetch fresh `origin/main`, independently verify this MC-25 PR's actual human merge SHA and PR #632's ancestry; verify clean worktree, precise branch absence, unmodified source blobs, current repository architecture and the actual canonical Blueprint. Read `AGENTS.md`, `CLAUDE.md`, source hierarchy, Source 18 v1.2, communication/handover and independent-verification protocols, mission README/decision/handover and relevant MC-21–25, the full Stage 6 Builder Review F-01–11, PR #632 human-decision comments, Founder FPDR-1–4, canonical 373-row FCTM, Stage 2 Delta, Build Plan §10.1, mature Contracts 21/22/20/17/7 and applicable delegated clauses, Phase 1 guide, validated OLE and current live instruction. Do not rely on old chat or the current README's historic pre-merge status as newer authority. Record exact source and repo baseline.

## 2. Prepare only the confirmed Founder choices

Draft a **new, separately numbered Founder Decision Record**:

`communication/missions/SB-P-1.12/founder/04-stage6-founder-product-decision-record.md`

Use new IDs distinguishable from original `FPDR-1`–`FPDR-4` (e.g. `FPDR-5`–`FPDR-7`) and explicitly map F-02/F-03/F-04(c). Transcribe actual Founder Option B/B/C from the full [comment](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819755459), not inferred options or paraphrases that lose constraints:

- F-02 / B: one person may belong to multiple businesses, distinct role/permissions for each; unambiguous active-business context **for every action**; no ambient cross-business access.
- F-03 / B: Reference Cost and margin Owner-only by default; each *separately* explicitly delegable by Owner to an authorized Manager; grant of one never grants the other; general product read/price/stock view grants neither. No default Employee visibility or acceptance of existing unconditional Reference Cost read. Enforce backend/data layer as well as UI.
- F-04(c) / C: if permission revoked during multi-row import, retain committed rows, stop further unauthorized writes; show count successfully uploaded and remaining; guide **duplicate-safe** completion of remainder. No auto-resume under revoked authority; future completion rechecks current actor/business permission. Engineering implementation choice stays open.

## 3. Controlled Blueprint reconciliation

Edit ONLY necessary approved Sections 1–19 of `docs/phase-1-mission-blueprint/active/SB-P-1.12.md`, predominantly §3 and relevant local §8, §9, §10, §12, §15 plus §18 change log/§19 governance history. Provide a before/after section-to-Decision-ID/row/source reconciliation table in the Founder Record or report. Do not use this authorization to invent navigation/UX patterns, schema, permission version implementation, auto-resume mechanics, extra commercial commitments or other product behaviour beyond the three explicit decisions. Retain the approved 19-section structure and existing Section 19 traceability. No Sections 20 or 21. If the correct reconciliation needs a source conflict, row-level annotation or expanded paths beyond those authorized, STOP and request narrow additional authority before writing them.

**FCTM is READ ONLY and must remain byte-identical**. Preserve 373 rows (228 IN SCOPE; 113 ASSIGNED TO LATER MISSION; 2 DELEGATED; 30 NOT APPLICABLE; zero ESCALATED), all 371 original source-obligation pointers and two disclosed Contract 17 splits, individual assigned owners, Build NOW/commercial classification and FPDR-1–4. Founder Runtime Verification Scenarios **A and B must remain byte-identical in text** to canonical PR #632/Build Plan §10.1; an additional clearly labelled F-04(c) acceptance scenario MAY be added as a consequence of the now-confirmed Founder decision, but must not be presented as replacement of Scenario B or a newly invented Founder scenario. Do not assert acceptance or current runtime proof.

T4 residual-`anon` remains PRODUCT-AFFECTING repository-file risk; production grant/RLS/function/default-privilege and migration state UNVERIFIED. Independent Stage 7 Security & Permissions Architecture specialist remains unappointed. Carry F-06 required-check and T4 read-only verification as separate gates.

## 4. Exact scoped Git authority (effective only upon MC-25 human merge)

Founder/Mission Control authorizes **Claude Code**, for **SB-P-1.12**, to operate on **`SmartBusinessv1/smart-business`**, locked branch **`mission/SB-P-1.12-stage6-founder-blueprint-reconciliation`**, limited to the exact writable paths below, using mission-scoped descriptive **`docs(SB-P-1.12):` commit messages** with standard `Co-Authored-By` trailer **permitted**; may fetch, pull **fast-forward only**, stage exact authorized files, commit, push that branch only and open/update **one DRAFT PR** to main. Authority ends **2026-10-09 23:59 IST**, earlier upon submission, revocation, drift, changed scope, branch conflict, failed checks or other protocol stop condition; branch-protection/approved compensating control mandatory.

Writable paths ONLY:

- `communication/missions/SB-P-1.12/founder/04-stage6-founder-product-decision-record.md` (NEW, DRAFT)
- `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` (narrow Sections 1–19 reconciliation only)
- `communication/missions/SB-P-1.12/claude-code/18-stage6-founder-blueprint-reconciliation-report.md` (NEW, DRAFT)
- `communication/live/report.md`
- `communication/missions/SB-P-1.12/README.md`
- `communication/missions/SB-P-1.12/decision-log.md`
- `communication/missions/SB-P-1.12/handover-log.md`

Read-only: `communication/live/instruction.md`, FCTM, prior FPDR, contracts/Build Plan, delta, governance and MC-authored records, migrations, app, SQL, provider/runtime and other paths. No `git add .`, direct `main` write, force-push, self-review, self-approval or self-merge.

## 5. Deliver and stop

Submit one DRAFT PR from fresh canonical main with exact changed paths, row/owner/source invariant verification, unchanged Founder Scenario A/B text, each Founder choice correctly reflected in Record and Blueprint, local Markdown gate and exact-head CI. Mission Control independently reviews and writes the acceptance gate **in the same reconciliation PR** before human merge; the Record/Blueprint are NOT canonical simply because Claude Code pushed them.

**No Stage 7 Engineering Review or independent security certification, Sections 20/21, Blueprint lock, EIS, implementation, migration, provider/production access or delivery action.**

**Required closing:** `FOUNDER DECISION RECORD AND NARROW BLUEPRINT RECONCILIATION DRAFT SUBMITTED — AWAITING MISSION CONTROL REVIEW; STAGE 7/SECTIONS 20–21/EIS/IMPLEMENTATION/PRODUCTION NOT AUTHORIZED.`

**Before MC-25 human merge:** `STAGE 6 CANONICAL; FOUNDER DECISIONS CONFIRMED IN DIALOGUE; MC-25 RECONCILIATION AUTHORIZATION PENDING HUMAN MERGE.`
