# SB-P-1.15 — MC-20 S7-SP-1 Security Specialist Content Review and Disposition

**Decision:** SB-P-1.15-MC-20  
**Reviewed DRAFT PR:** #878 — `mission/SB-P-1.15-stage7-sp1-security-report`  
**Reviewed reviewer head:** `cac1f79fedfa4412be67e39c5d107757eeaab627`  
**Source baseline:** protected `main@c1e51a3679319893dc0e1cafe284301a14571946`  
**Status:** PROPOSED — ACCEPTED FOR AUTHORIZED-HUMAN MERGE; EFFECTIVE ONLY AFTER POST-MERGE MC VERIFICATION  
**Implementation:** NOT AUTHORIZED

## 1. Exact submitted scope and checks

Mission Control directly inspected `communication/missions/SB-P-1.15/specialists/01-stage7-security-rls-grants-isolation-review.md` at reviewer head. GitHub confirms PR #878 OPEN/DRAFT with exactly **one new file, 233 additions**, prior to this MC record. The report declares GPT-5.6 Sol / OpenAI / existing Security Specialist ChatGPT session, no authorship of Stages 2–7, reuse of its own earlier security assessments, and conversation-level rather than cryptographic provenance. This conforms to the **conditional** MC-18/MC-19 non-author appointment. It does not qualify the reviewer as S7-PAR.

Mission Control independently cross-referenced **43 distinct FCTM IDs** appearing in the report against the canonical 803-row matrix; all 43 exist. The report carries all SEC15-S7-01 through -05, source references, negative-test obligations, factual limitations, residual holds and Source 18 trigger discussion. The specialist reports a local Markdown Gate pass and secret scan; MC did **not** independently execute that local gate or claim GitHub Actions success.

## 2. Evidence and substantive findings

**S7-SP-1 specialist report content: ACCEPTED FOR CANONICAL PUBLICATION AS INDEPENDENT NON-AUTHOR DOCUMENTARY SECURITY CHALLENGE**, within its stated provenance limitation; **NOT** accepted as runtime security approval or a claim that production systems passed security tests.

- **SEC15-S7-01 — HIGH, CORRECTION REQUIRED:** precise object/creator-role-specific ACL/default privileges, function EXECUTE (including PUBLIC/overloads), owner/definer/search_path, views/sequences, atomic migration hardening and effective-access proof. This must state the correct chronology: July broad grants followed by August source revoking future `postgres` creator `anon` defaults and a limited Inventory subset. It must not claim the August source was executed in production or that all new `postgres` objects still inherit broad `anon` grants. Retain `H-BIRTH`.
- **SEC15-S7-02 — HIGH, CORRECTION REQUIRED:** current-authorization principal + business/action/object binding for every privileged read, claim, lease, write and continuation. Service-role possession is not authority. Retain `H-PRIV`.
- **SEC15-S7-03 — HIGH, CORRECTION REQUIRED:** effective-access matrix across JWT/RLS, RPC, definer functions, privileged background jobs, aggregates, Ask CFO and notification recipients; Business A/B, revoked/Manager/Employee/anon negatives. Retain `H-ISO`.
- **SEC15-S7-04 — HIGH IMPACT, CONDITIONALLY ACCEPTABLE:** read-only Ask CFO must be proven below prompt/tool-policy level, including database identity, writable RPC/definer/function reachability, authorization-before-retrieval and zero Ask CFO-originated writes. Retain `H-RO`, `H-SEC` and upstream dependencies.
- **SEC15-S7-05 — MEDIUM, REFINEMENT REQUIRED:** current eligibility at notification creation, retrieval/display, processing and adapter handoff, including former Owner and revoked delegation denial. Retain security/isolation holds.

The five findings do not demonstrate a currently exploitable SB-P-1.15 runtime issue; live grants, provider, RLS/function, scheduler, Ask CFO and notification execution remain **UNVERIFIED — ACCESS REQUIRED**.

## 3. Source 18 disposition

**T7: finding-scoped documentary engineering-specification refinement CONFIRMED** for stronger `H-BIRTH`, `H-PRIV`, and `H-ISO` closure criteria. This is not a new Product Truth or FCTM decision and grants no Blueprint/PR #870 edit by itself. No T8 genuine infeasibility was found. No new T1/T2/T3/T4/T5/T6 product change is established.

FPDR-02 prospective-only correction notifications and FPDR-03 latest-valid native briefing (scheduled and actual generation times, no duplicate or misleading notice) are unchanged. DC-03 existing-business timezone default remains held; FDB-1(d2) correction-specific integration owner remains unassigned; U-3/U-5 and DC-06 remain open as previously recorded.

## 4. Crossing and next gates

This MC-20 record is appended to the **same PR #878** under Mission Control authority. The specialist's submitted report is unchanged. The PR now includes the specialist report plus **one MC disposition file**. Human review/merge is necessary; Mission Control must independently verify protected main and both files before declaring S7-SP-1 canonical/accepted.

**Do not modify or merge PR #870.** Specialist results are inputs to a later **separately authorized reconciliation** of the Stage 7 Engineering Review, after MC independently dispositions all relevant reviewers. S7-SP-2 through -6 and a genuinely separate S7-PAR remain pending. Stage 7 final approval, Stage 8 lock, EIS and implementation remain withheld.

No application code, Blueprint/FCTM, contract, source, SQL, schema, migration, provider, notification, runtime, deployment or production mutation is authorized.

**STOP FOR AUTHORIZED-HUMAN MERGE OF PR #878.**
