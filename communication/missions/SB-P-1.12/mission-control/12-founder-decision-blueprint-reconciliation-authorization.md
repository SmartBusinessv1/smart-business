# SB-P-1.12 — MC-25 Founder Decision Record and Controlled Blueprint Reconciliation Preparation Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Decision:** MC-25  
**Prepared by:** Smart Business Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY ON FOUNDER/AUTHORIZED-HUMAN MERGE OF THIS SEPARATE COMMUNICATION AUTHORIZATION PR  
**Authority:** Source 18 v1.2 §§3.1–3.3, 4.3–4.4, §6 Stages 3–8; canonical MC-21 Stage 5 approval and MC-24 Stage 6 findings. No Stage 7 authorization.

## Canonical predecessor and confirmed Founder answers

PR [#632](https://github.com/SmartBusinessv1/smart-business/pull/632) was human-merged at `2026-09-24T18:37:11Z`, final MC-24 reviewed head `945ec8f330900f5902493eee9771406f90ceb83d`, verified `main@76ff1575e1ca3978f363d7a1daef307513376345`. It canonically accepted **Stage 6 Builder Review findings**, *not* the Blueprint corrections or Stage 7. The [MC-24 gate record](11-stage6-builder-review-gate-and-founder-decision-handover.md) and [complete Founder answer](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819755459) document the three resolved choices. Do **not** re-ask, reinterpret or silently expand them:

| Finding | Founder-confirmed choice | Exact product disposition |
|---|---|---|
| F-02 | **Option B** | One person may hold memberships in multiple businesses, each with its own role and permission set; owning Business A and managing B is allowed; no ambient cross-business access; every action requires unambiguous active-business context. Blueprint §3's “within exactly one business” is unsupported and requires a narrow correction. |
| F-03 | **Option B** | Reference Cost and margin are **individually, separately** Owner-delegable to an authorized Manager; neither visible by default. A grant for either does not imply the other; generic product reads and bounded Manager product views imply neither. Preserve UI *and backend/data-layer* denial by default; do not infer Employee visibility or accept the present unconditional cost read as approved policy. Founder Scenario A remains verbatim. |
| F-04(c) | **Option C** | If permission is revoked during a multi-row import, retain successfully committed rows, stop subsequent unauthorized writes, disclose both completed and remaining row counts, and guide duplicate-safe completion of the remainder. Never auto-resume using revoked authority; all future completion rechecks current actor/business permissions. Keep Founder Scenario B's pre-commit denial verbatim. Future engineering may propose mechanisms; no atomic rollback or a particular resume implementation is approved. |

F-01/F-05–F-11 are Stage 6 recommendations, **not Founder product decisions**. In particular F-06 branch-protection required-check selection is a separate governance/infrastructure decision; T4 privileged read-only live verification separately authorized if pursued, and its production status remains `UNVERIFIED`.

## Narrow preparation decision

Upon **human merge of this MC-25 authorization PR only**, appoint **Claude Code** to transcribe the above confirmed human decisions into a new DRAFT durable Founder Decision Record and reconcile the minimum affected sentences in the **already Mission Control-approved** Blueprint Sections 1–19. This is a specifically authorized exception for a Founder-confirmed product-truth reconciliation after Stage 5, **not** general reopening or redefinition of Sections 1–19. The original `FPDR-1`–`FPDR-4` remains unchanged. Claude Code is the **preparer**, never approver. Mission Control independently reviews source fidelity, FCTM Gate 10, Founder scenarios, scope and final exact head; only a subsequent authorized human merge makes the reconciled record/Blueprint canonical. Stage 6 content remains canonical by #632.

The companion `communication/live/instruction.md` is the complete operative Git and drafting contract. This authorization PR is communication-only: **do not edit the Blueprint, FCTM or create the Founder Record in this PR.**

## Required reconciliation boundaries

- Prepare `communication/missions/SB-P-1.12/founder/04-stage6-builder-founder-decision-record.md` as a **DRAFT transcription by reference to the actual Founder #632 comment**. Preserve choices, actor, provenance, exact wording/limitations, acceptance consequences and references to F-02/F-03/F-04(c), not fabricated new approval.
- Apply only directly necessary changes to `docs/phase-1-mission-blueprint/active/SB-P-1.12.md`: the unsupported §3 cardinality statement and directly dependent §8/§10/§12/§15/§19 references; field-specific permission and negative-path acceptance; mid-batch revocation merchant-facing outcome and recovery accountability. Do not renumber canonical sections, invent a merchant feature, choose membership schema, access-token design, transactional implementation, retries or commercial classification. Preserve the existing Scenarios A/B **verbatim**; clearly separate F-04(c) supplemental outcome from Scenario B.
- The approved canonical FCTM remains **READ ONLY**: 373 representation rows (228 IN SCOPE, 113 ASSIGNED TO LATER MISSION, two DELEGATED, 30 NOT APPLICABLE, 0 ESCALATED); 371 source-obligation pointers and two documented Contract 17 representation splits. If a real row annotation/citation correction is indispensable, **STOP** and request a separate exact-path authorization; do not silently edit. Maintain §11 later-mission accountability and §19 row-to-section/source/assigned-owner table. Add references to new Founder Record where implicated without overwriting original source pointers.
- No new Founder decisions. Product ambiguity or source conflict invokes T1/T2/T3/T7/T8 and stops dependent drafting rather than guessing. No declaration that live runtime security, mid-batch behavior or field-level permission is already implemented.
- T4 historically `PRODUCT-AFFECTING`, WS-B objective open, actual production grant/RLS/function/default-privilege/migration state `UNVERIFIED`; independent Stage 7 Security & Permissions Architecture **actor still unappointed**. No Stage 7 or Sections 20–21 activation, EIS, code, SQL, privileged provider access, migration, production, delivery/publication, Blueprint lock or self-merge.

## Gate

Submit **one DRAFT Founder Record + narrowly reconciled Blueprint PR** after MC-25 human merge, on the exact branch and paths in the live instruction. Include original-to-updated text evidence, decision-by-decision source matching, explicit “no change” confirmation for Founder scenarios and FCTM, row traceability/learning recheck, T4 and independent-review boundary, exact files/head and CI. Stop for Mission Control review and later separate Founder/human merge.

**MC-25 DECISION:** `FOUNDER F-02 OPTION B / F-03 OPTION B / F-04(c) OPTION C CONFIRMED IN CANONICAL STAGE 6 RECORD; FOUNDER DECISION RECORD AND NARROW SECTIONS 1–19 RECONCILIATION PREPARATION AUTHORIZED ONLY AFTER THIS SEPARATE MC-25 PR IS HUMAN-MERGED. STAGE 7 NOT AUTHORIZED.`
