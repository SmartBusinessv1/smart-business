# SB-P-1.15 — MC-18 S7-SP-1 Reviewer Eligibility and Corrected Security Evidence

**Decision:** SB-P-1.15-MC-18  
**Authority:** Source 18 Stage 7 §4.8; MC-03; MC-16; MC-17  
**Verified protected main:** `9764aa7ce3d35c06fe9f5cdbc43c75710eb5aecd`  
**Engineering draft:** PR #870 `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`, OPEN/DRAFT/untouched  
**Status:** PROPOSED — EFFECTIVE ONLY AFTER HUMAN MERGE AND MC VERIFICATION  
**Implementation:** NOT AUTHORIZED

## 1. Candidate and independence disposition

A follow-up read-only candidate assessment self-identifies as **GPT-5.6 Sol / OpenAI / the existing Security Specialist ChatGPT project session**. It reports no SB-P-1.15 Stages 2–7 authorship and discloses that this same session wrote the earlier S7-SP-1 candidate assessment. The original SB-P-1.15 Stages 2–7 author is Claude Code.

**Disposition: ELIGIBLE FOR A SINGLE NON-AUTHOR S7-SP-1 ASSIGNMENT, CONDITIONED ON EXACT ROOM/SESSION CONTINUITY, ACCURATE PROVENANCE DISCLOSURE, AND MC VERIFICATION AT PUBLICATION.** Conversation-level evidence supports non-authorship relative to Claude Code, but does **not** cryptographically authenticate a named human, model-runtime version or provider session ID. Neither this candidate's statement nor MC's repository inspection can prove a negative about all other project sessions. Do not represent the candidate as cryptographically verified or independent of its *own earlier assessment*. This reviewer is **not** S7-PAR and cannot act as the independent challenger of its own security report; S7-PAR must be a different non-author actor/session. If room continuity or authorship separation cannot be established later, eligibility reverts to PENDING and a replacement reviewer is required.

The candidate may continue evidence-based **read-only** specialist work after the canonical crossing. **No exact-path report publication, branch, commit or PR is authorized by this decision**; first issue a reviewer-specific written publication boundary after verifying the actual session and immutable baseline.

## 2. Evidence correction — SEC15-S7-01

MC-17 accurately found that the July migration `supabase/migrations/20260727000000_reconcile_default_grants.sql` (blob `4e2d3fa1bb44a42f2ecfd13ff237b31cf7834303`) broadly granted tables/functions and their `postgres` creator-role defaults.

**Important correction to the earlier risk formulation:** protected main also contains `supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql` (blob `027c482a673814e5286559407a4e5ee9401372fb`), which explicitly:

- Revokes `anon` privileges on three Inventory tables and six Inventory functions, plus `PUBLIC EXECUTE` on two named functions.
- Executes `ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE ALL ON TABLES FROM anon` and `REVOKE EXECUTE ON FUNCTIONS FROM anon` for **future postgres-created objects**.
- Does **not** reset broad `authenticated` or `service_role` defaults, reset `supabase_admin` creator-role defaults, or remove preexisting broad `anon` grants on other tables/functions.
- Documents test-only execution authority and a separate production execution gate; source existence does **not** establish that these corrective statements have been applied in a live environment.

Thus it would be **factually wrong** to claim all future `postgres`-created SB-P-1.15 objects still inevitably inherit the July `anon` defaults at this migration-source baseline. The high-priority `H-BIRTH` hold remains for effective privileges across creator roles, existing ACLs, `PUBLIC`, function overloads, invoker/definer mode, search path, sequences/views, atomic migration hardening, and verified live ledger/rehearsal.

## 3. Candidate specialist findings for publication challenge

Keep five findings as candidate, not approved independent-assurance results:

- SEC15-S7-01 HIGH: object/creator-role-specific birth-safe effective privileges, **as factually corrected in §2**;
- SEC15-S7-02 HIGH: privilege authorization bound to current principal, business, action, object set and each bypass-RLS query/continuation;
- SEC15-S7-03 HIGH: negative effective-access matrix for JWT/RLS, RPCs, definer functions, privileged jobs, views/aggregates, Ask CFO and recipient lookups across businesses;
- SEC15-S7-04 HIGH impact/residual hold: Ask CFO data-level, callable-role and tool-level strictly read-only, with current scope/Manager limits;
- SEC15-S7-05 MEDIUM/residual hold: re-evaluate former-Owner and delegated recipient eligibility at creation, retrieval, processing and delivery handoff.

These are security-design and future proof obligations, not findings that SB-P-1.15 runtime currently exists or that an exploit is demonstrated. Current production privileges, function ownership, ACLs, deployed RLS, services and cross-tenant outcomes remain **UNVERIFIED — ACCESS REQUIRED**. T7 finding-scoped documentary refinement remains a candidate requiring separate Engineering Review reconciliation; no T8 established.

## 4. Next controlled step and unchanged holds

After MC-18 human merge and MC verification, issue a **dedicated S7-SP-1 publication handover** to the existing Security Specialist room if continuity and independence are supportable, authorizing only `communication/missions/SB-P-1.15/specialists/01-stage7-security-rls-grants-isolation-review.md` in an audited DRAFT PR. The report must identify actual reviewer/model/provider/session to the extent verifiable, source baseline/limitations, the corrected July/August migration chronology, five finding IDs, affected canonical FCTM rows, negative-test matrices, Source 18 triggers and non-runtime assurances. It must not claim production execution of the August hardening from the repository alone.

S7-SP-2–6 and distinct non-author S7-PAR remain to be appointed. FPDR-02 T1 prospective-only and FPDR-03 T6 latest-valid briefing are canonical; existing-business timezone default remains undecided. FDB-1(d2) remains unassigned. PR #870 is OPEN/DRAFT/untouched, with final Stage 7 approval withheld.

No Blueprint, FCTM, contract, Product Truth, EIS, schema, SQL, migration, runtime, provider, notification, deployment or implementation change authorized.

**STOP FOR AUTHORIZED-HUMAN MERGE OF MC-18.**
