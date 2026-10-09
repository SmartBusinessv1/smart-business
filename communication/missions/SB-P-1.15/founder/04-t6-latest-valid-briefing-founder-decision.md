# SB-P-1.15 — Founder Decision Record: Missed Daily Intelligence Briefings (T6)

**Record:** SB-P-1.15-FPDR-03 — T6 Latest Valid Briefing Availability  
**Founder decision communicated:** 2026-10-09  
**Mission Control baseline:** protected `main@e203b72a1b82ba2acaca0c41653534a8f9126494`  
**Governance status:** PROPOSED — EFFECTIVE ONLY AFTER AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Implementation:** NOT AUTHORIZED

## 1. Reserved question

Stage 7 identified a merchant-visible choice when an expected Daily Intelligence briefing is delayed or missed. Contract 4 retains the fixed schedule **07:00, 10:30, and 22:00 business-local time**; approved sources did not determine whether the missed briefing should be skipped or remain available later.

## 2. Exact Founder decision — Option A

**Show the latest valid briefing when available, with its scheduled time and actual generation timestamp, and no duplicate or misleading notifications.**

This is a product-experience decision about truthful *availability of an existing valid briefing*; it is not a guarantee that a briefing will be generated successfully or delivered externally.

- When the latest valid briefing exists, the authorized in-app experience may show it after its scheduled slot, with **both** the originally scheduled business-local slot time and the actual generation time clearly distinguished.
- Do **not** present a late, stale, failed or partially unavailable briefing as a timely, newly generated or complete one. State age/as-of context and material limitations plainly; if there is no valid briefing, display a truthful unavailable/partial state rather than fabricating it.
- Repeated job runs, refreshes, recipient views and later recovery must not create duplicate briefings or misleading repeated notifications. Idempotent slot identity and recipient eligibility remain mandatory engineering controls.
- Preserve the Founder-approved **native-only interim** under FDB-2 before SB-P-1.20. This decision **does not authorize late WhatsApp/email/SMS/push messages**, retrospective outbound sends, or any outbound channel. Any future channel-specific late-delivery behavior remains subject to separately approved SB-P-1.20/channel policy and current authorization.
- The schedule remains **07:00, 10:30, 22:00 business-local time**; this decision creates no new slot, no automatic payment, no consequential action and no AI adjudication.

## 3. Deliberately unresolved implementation details

The Founder did **not** set a lateness duration, maximum staleness threshold, automatic recompute cutoff, skip policy after expiry, scheduler/provider choice, business-timezone default, migration procedure, or historic Ledger date reinterpretation. Stage 7 engineering may propose constraints and evidence-based recommendations, but must not invent a Founder-approved cutoff or decide a merchant-material display policy without further authority.

An auditable slot key, actual-generation timestamp, source-data as-of time, eligibility checks, deduplication and non-misleading native display are design requirements for specialist challenge, **not proof of implementation**.

## 4. Scope and remaining gates

- **T6 missed-slot product-policy question: FOUNDER ANSWERED (Option A), canonical only after merge and verification.**
- The existing-business timezone default/DC-03 materiality watch is **not resolved** by this decision.
- **T1 historical correction notification policy** is independently resolved as prospective-only under SB-P-1.15-FPDR-02 (PR #872); this T6 decision neither authorizes historical correction replay nor changes retention duties.
- FDB-1 (d2) correction-specific notification integration ownership remains UNASSIGNED; (d1) truthful correction-dialog wording remains separately governed.
- Independent S7-SP-1 through S7-SP-6 and non-author S7-PAR engineering reviews are PENDING. D12/D13/D14, DTX/PQ-2, grants, RLS, scheduler, migration rehearsal, CI/provider/runtime and specialist holds remain.
- Stage 7 Engineering Review draft **PR #870 remains OPEN/DRAFT and UNCHANGED**. Reconciliation of this decision into Blueprint Sections 20–21 requires a separate MC-authorized scope and subsequent validation.
- No Stage 7 final acceptance, Blueprint lock, EIS, code/schema/migration, provider, scheduler activation, dispatch, deployment, production mutation or implementation authority arises from this decision.

## 5. Publication boundary

Publish this Founder Decision Record alone by a **separate single-file governance PR**. Do not edit PR #870, the Blueprint, FCTM, contracts, Build Plan, Product Truth, upstream missions or runtime.

**STOP FOR AUTHORIZED-HUMAN MERGE.**
