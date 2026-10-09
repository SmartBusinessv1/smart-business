# SB-P-1.15 — MC-17 S7-SP-1 Security Candidate Assessment Disposition

**Decision:** SB-P-1.15-MC-17  
**Authority:** Source 18 Stage 7 and §4.8; MC-03, MC-15, MC-16  
**Protected main:** `9e61bae2b9b37d1bf9245a847256420caf093c82`  
**Working Engineering Review:** PR #870, `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` (DRAFT, unmerged)  
**Status:** PROPOSED — EFFECTIVE ONLY AFTER AUTHORIZED-HUMAN MERGE AND MC POST-MERGE VERIFICATION  
**Implementation:** NOT AUTHORIZED

## 1. Candidate evidence received

Mission Control received a **read-only S7-SP-1 candidate assessment** self-identifying as "GPT-5.6 Sol," provider OpenAI, "this current ChatGPT project session," declaring no SB-P-1.15 Stages 2–7 prior involvement and separate historical SB-P-1.14 security work. The candidate reports no live Supabase, deployed services, runtime or production access.

The candidate's identity/session, claimed authorship separation and specialized qualification are **self-reported and not independently authenticated**. The label "this current ChatGPT project session" is insufficient to uniquely identify a reviewer or prove separation from Mission Control and prior authorship. **Eligibility: PENDING INDEPENDENCE VERIFICATION.** Do not state that an appointed independent specialist has been accepted or that Stage 7 security assurance is complete.

## 2. Findings accepted for correction triage, not as signed-off assurance

The candidate provided three HIGH correction-required documentary findings:

- **SEC15-S7-01 — Object creation/ACL birth safety**: `H-BIRTH` needs creator-role default ACL inspection, separate table/function/view/sequence treatment, PUBLIC/anon function grants, exact overloads, function owner and definer/invoker/search_path, atomic hardening and effective-access evidence.
- **SEC15-S7-02 — Bound privilege authority**: `H-PRIV` needs an explicit verified principal + *current* business/action/object authorization bound to every privileged/background read/claim/lease/write/continuation; service-role credential possession or job context cannot substitute for permission.
- **SEC15-S7-03 — Tenant isolation proof**: `H-ISO` requires an effective-access matrix covering JWT/RLS, RPC, definer functions, service-role jobs, views/aggregates, Ask CFO reads and recipient lookup, with business A/B, revoked user, Manager and anon negatives.

Two residual-hold findings:

- **SEC15-S7-04 — Ask CFO** read-only design is directionally acceptable, but `H-RO` closure needs effective database/function/tool negative proofs, not prompt instruction alone.
- **SEC15-S7-05 — Former Owner** current eligibility must be revalidated at every display/processing/dispatch boundary; stored recipient identity does not confer lasting permission.

Mission Control independently re-read migration `supabase/migrations/20260727000000_reconcile_default_grants.sql` (blob `4e2d3fa1bb44a42f2ecfd13ff237b31cf7834303`) and confirmed the explicit broad `GRANT ALL`/`EXECUTE` and `ALTER DEFAULT PRIVILEGES FOR ROLE postgres` statements. These are **repository facts, not demonstrated live data exposure**. Other conclusions remain specialist-candidate proposals requiring independent evidence challenge.

## 3. Source 18 trigger and gates

**T7 — finding-scoped documentary specification refinement candidate: ACCEPTED FOR CORRECTION TRIAGE ONLY.** Sharpening the existing security hold/effective-access criteria does not itself authorize Product Truth, FCTM row, scope, mission or implementation changes. Actual Stage 7 correction is separately authorized only after reviewed specialist publication and MC disposition. **No T8 finding established.**

S7-SP-1 is **NOT YET PUBLISHED OR ACCEPTED AS AN INDEPENDENT REVIEW**. The received candidate text is not itself a signed repository specialist artifact. Before exact-path report publication, MC must independently verify a concrete reviewer/session and no authorship/correlation conflicts, record the actor/model/provider, prior involvement, evidence access and reviewer role boundaries, then issue an explicit reviewer-specific branch/one-file permission. If proof cannot be established, recruit another genuinely non-author reviewer; do not use the candidate's declaration alone to pass Source 18 §4.8.

## 4. Next authorized operational step after crossing

After human-merge and MC protected-main verification of this MC-17 record, request a **verifiable S7-SP-1 identity and independence packet**. Until its review, allow only read-only candidate investigation. The reserved future report path is `communication/missions/SB-P-1.15/specialists/01-stage7-security-rls-grants-isolation-review.md`, but **no branch, file, PR or specialist appointment is granted by this record**.

S7-SP-2 through S7-SP-6 and S7-PAR remain unappointed/pending. S7-PAR must be independent of the actual S7-SP-1–6 reviewers. The T1 prospective-only policy (FPDR-02) and T6 latest-valid native briefing policy (FPDR-03) are canonical. Existing-merchant timezone default/DC-03, FDB-1 (d2) unassigned, legal retention and provider/runtime/CI holds remain. PR #870 stays OPEN/DRAFT/UNMODIFIED; no final Stage 7 acceptance.

No Blueprint/FCTM/contract/Product Truth edit, EIS, SQL, migration, service-role adjustment, code change, scheduler/provider activation, notification dispatch, production modification or implementation authorized.

**STOP FOR AUTHORIZED-HUMAN MERGE AND INDEPENDENCE VERIFICATION.**
