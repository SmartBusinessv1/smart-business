# SB-P-1.12 — MC-25 Founder Decision Record and Narrow Blueprint Reconciliation Preparation Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Decision:** MC-25  
**Prepared by:** Smart Business Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY ON FOUNDER/AUTHORIZED-HUMAN MERGE OF THIS SEPARATE COMMUNICATION PR  
**Governing:** Source 18 v1.2 §§3.2–3.3, 4.3–4.4, 6 Stages 3–7 and 10; AI Communication and Handover Protocol v1.1.

## 1. Canonical preceding Stage 6 crossing

Mission Control verified [PR #632](https://github.com/SmartBusinessv1/smart-business/pull/632) human merged on `2026-09-24` at canonical `main@76ff1575e1ca3978f363d7a1daef307513376345`; exact MC-24 reviewed PR head `945ec8f330900f5902493eee9771406f90ceb83d`. The [MC-24 Stage 6 gate record](11-stage6-builder-review-gate-and-founder-decision-handover.md) accepts the Builder Review *as findings*, not as product decisions, technical implementation approval or independent Security review. Blueprint Sections 1–19 were previously approved by MC-21 in PR #630 and remain subject to controlled amendment. Stage 7 is NOT AUTHORIZED.

## 2. Founder choices are already confirmed — do not ask again

The Founder's actual complete confirmation is [PR #632 comment 5819755459](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819755459), and MC-24 recorded the exact effect. This authorization directs transcription and narrow controlled reconciliation; it is not a new Founder-question round.

| ID | Founder choice | Exact commitment to record and reconcile |
|---|---|---|
| F-02 | **Option B** | One person may belong to multiple businesses, holding a distinct role and permissions per business (e.g., Owner of Business A, Manager of Business B). No ambient cross-business access; every action has an unambiguous active-business context. Replace Blueprint §3's unsupported “within exactly one business” wording; do not infer cross-business data sharing or universal authority. Existing `businesses.owner_id UNIQUE` is a schema fact/engineering constraint, not product intent. |
| F-03 | **Option B** | Reference Cost and margin are Owner-only by default. Owner may **explicitly and separately** delegate Reference Cost and/or margin visibility to an authorized Manager. Delegating one does not grant the other; generic product read, selling-price/stock visibility or bounded Manager view does not imply either. No default Employee access inferred. Data-layer/API and UI enforcement; the current unconditional cost read is a future implementation/verification finding, not policy acceptance. Preserve verbatim Founder Runtime Scenario A. |
| F-04(c) | **Option C** | If permission is revoked **during** a multi-row import, preserve successfully committed rows, stop subsequent unauthorized writes, report completed and remaining row counts to the merchant, and guide duplicate-safe completion without re-uploading committed rows. No automatic continuation by a revoked actor; subsequent authorized completion checks current actor/business permissions. Engineering may propose progress/replay/recovery mechanics later, not now. Preserve verbatim Founder Runtime Scenario B's distinct **before-commit** denial. |

The three questions are substantively CLOSED in Founder dialogue; the Founder Decision Record and narrowly reconciled Blueprint are NOT YET CANONICAL. Do not conflate the earlier FPDR-1–4 with these post-Builder decisions: use traceable new decision IDs and clear provenance.

## 3. Narrow authorization and stage custody

Upon human merge of this MC-25 authorization PR, appoint **Claude Code as documentary preparation actor only** to:

1. Prepare a separately numbered **Stage 6 Founder Decision Record** in `communication/missions/SB-P-1.12/founder/`, explicitly preserving original Founder quote/option, exact PR comment, affected Blueprint sections, precise affected FCTM row IDs and existing Build Plan/Contract source citations.
2. Reconcile **only** the affected approved Blueprint Sections 1–19: §3 membership wording, necessary local §8/§9/§10/§12/§15 references to F-02/F-03/F-04(c), and concise §18–19 change/governance/traceability entries. Amend existing sections; do **not** renumber, omit, expand other scope, or change the two Founder Runtime Verification Scenarios A/B. No newly invented behavior (such as automatic resume, one global role, unconditional cost API exposure).
3. Preserve exactly 373 FCTM rows, 371 source-obligation pointers plus 2 documented Contract 17 representation splits, and the existing **228 IN SCOPE / 113 ASSIGNED TO LATER MISSION / 2 DELEGATED / 30 NOT APPLICABLE / 0 ESCALATED** disposition totals. No disposition, commercial/build classification, mission-owner or source-pointer changes. FCTM stays READ-ONLY in this work package. If an actual, necessary row annotation cannot be represented in the Founder record/Blueprint, STOP and request separately scoped Mission Control authority rather than altering the FCTM.
4. Retain FPDR-1–4, the Notification/Location Foundation boundaries and each consuming mission's recurring five location disclosures; staff dignity, permission, separation, privacy and tenant isolation remain binding. T4 residual-`anon` remains a historically PRODUCT-AFFECTING *repository-file* finding; production grant/RLS/function/default-privilege and migration execution remain UNVERIFIED, WS-B unwaived. Existing Stage 6 findings F-01/F-05–11 are inputs, not permission to author Section 20/21/EIS or new decisions.

**Review/separation:** Claude Code prepared Sections 1–19 and Builder Review findings. It may draft the controlled correction but must NOT approve/merge it. Mission Control independently reviews the full Decision Record and changed Blueprint, compares FCTM and Scenario A/B exact text against canonical #632 baseline, runs completeness Gate 10 again and records acceptance in the *same new reconciliation PR*; only then may Founder/authorized human merge. The actual Stage 7 independent Security & Permissions Architecture actor still requires appointment/independence check and cannot be Claude Code self-appointed.

This MC-25 PR is **communication-only**. The Founder Decision Record, corrected Blueprint and FCTM changes do **not** belong to the authorization PR. The accompanying `communication/live/instruction.md` specifies exact bounded repo branch/path/expiry/stop authority effective only on MC-25 human merge. No Stage 7 authorization follows automatically on reconciliation merge.

## 4. Open gates and prohibited work

F-06's database isolation fixtures and evidence lane must be planned, but making Full Assurance/DB isolation a required branch-protection check needs separate verified governance/infrastructure decision. Read-only T4 live-production verification needs separate explicit authorization. No Section 20/21, Stage 7 Engineering Review, full Blueprint lock, EIS, implementation, SQL/migration, provider/production read or write, deployment, delivery or self-merge.

**MC-25 DECISION:** `STAGE 6 CANONICAL; FOUNDERS F-02/B, F-03/B, F-04(c)/C CONFIRMED IN DIALOGUE; AUTHORIZE DOCUMENTARY RECORD PLUS NARROW BLUEPRINT RECONCILIATION ONLY UPON HUMAN MERGE OF THIS PR. STAGE 7 NOT AUTHORIZED.`
