# SB-P-1.15 — MC-27 S7-SP-4 AI Behaviour Specialist Candidate Disposition

**Decision:** SB-P-1.15-MC-27  
**Authority:** Source 18 Stage 7, MC-16, canonical FPDR-01/02/03  
**Verified protected main:** `e30d30b32035d891ca70bd5873c5491b81949e7b`  
**Engineering Review challenged:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` — OPEN / DRAFT  
**Status:** PROPOSED; canonical only after authorized-human merge and MC protected-main verification  
**Implementation:** NOT AUTHORIZED

## 1. Candidate identity / independence

Mission Control received a **READ-ONLY S7-SP-4 AI Behaviour candidate assessment** identifying the reviewer as ChatGPT / GPT-5.6 Sol / OpenAI in the existing AI Behaviour project conversation. It declares prior SB-P-1.13 AI/orchestration and SB-P-1.14 AI interpretation specialist work; no authorship of SB-P-1.15 Stages 2–7 or PR #870; and no participation in S7-SP-1 Security, S7-SP-2 Infrastructure, S7-SP-3 Finance, S7-SP-5/6 or S7-PAR.

**Candidate disposition: CONDITIONALLY ELIGIBLE as a non-author S7-SP-4 reviewer, subject to a second explicit same-room continuity and cross-specialist independence reconfirmation.** This is evidence at the repository and conversation-declaration level, not cryptographic authentication of session/provider identities. The common GPT-5.6 Sol/OpenAI model-provider lineage and correlated upstream AI architecture must remain disclosed. An eventual S7-SP-4 report author cannot serve as the separately independent S7-PAR.

No reviewer-specific report-publication, repository branch/file/PR, Engineering Review edit or implementation authority is conveyed by MC-27.

## 2. Findings accepted for candidate triage

Seven AI Behaviour findings are accepted **for further independent challenge and report proposal**, not as implementation clearance or final proof:

- **AI15-S7-01 HIGH — CORRECTION REQUIRED:** PR #870 continues to treat delayed/missed Daily Intelligence briefing as an open T6. Mission Control independently reconfirmed canonical FPDR-03 (blob `2382846bc802df25f3e581d58648b6492f3316eb`): latest valid *native* briefing when available, truthful scheduled business-local slot, actual generation, source as-of and partial/unavailable limits. No invented lateness cutoff or outbound delivery. DC-03 existing-business timezone-default hold remains.
- **AI15-S7-02 HIGH — CORRECTION REQUIRED:** text retrieved from financial records, documents, receipts, database strings and tool outputs is **untrusted data**, not control-plane permission or tool instruction. Prompt injection must not override current authority, enable write tools or switch business.
- **AI15-S7-03 HIGH — CORRECTION REQUIRED:** authorize before every protected context exposure/reuse, not just initial retrieval. Revalidate business/principal/capability/source-state, prevent service-role Ask CFO retrieval, invalidate stale caches on delegation revocation, active-business change or membership change.
- **AI15-S7-04 HIGH — CORRECTION REQUIRED:** zero-write Ask CFO enforced below the model prompt (DB identity, grants, tool registry, RPC); consequential intent only a proposal/handoff to separately authorized workflow. DTX/PQ-2 governs financial writes.
- **AI15-S7-05 HIGH — CORRECTION REQUIRED:** provenance classes for Ledger-recorded fact, deterministic calculation, advisory AI interpretation, and unavailable evidence; no fabricated causal or customer-balance authority; SB-P-1.16 owns receivables reconciliation.
- **AI15-S7-06 MEDIUM — CORRECTION / TEST REFINEMENT:** strengthen adversarial dignity/no-accusation tests, preserve human judgment and non-coercive response for employee/customer/supplier allegations; anomaly is not proof of wrongdoing.
- **AI15-S7-07 MEDIUM — ACCEPT DIRECTION / HOLD:** Manager intelligence strictly explicit, current, capability-scoped Owner delegation; Employee operational permission never implies Owner financial intelligence. Coordinate authority tests with S7-SP-1 Security.

The eight proposed adversarial/zero-write verification families (permission/retrieval, prompt-injection, zero-write, handoff, grounding, dignity, Daily Intelligence, provider failure) are **future test proposals, not executed evidence**. Maintain `H-RO`, `H-SEC`, `H-ISO`, `H-AI`, `H-PROV`, `H-FIN`, `H-T6` only insofar as an evidence/corrective hold rather than unresolved Founder policy, D12/D13/D14, and applicable `H-TZDEF`, `H-PRIV`, `H-IDEM`, DTX and notification/timezone holds. No blanket hold clearance is authorized.

## 3. Source 18 controls

The stale PR #870 T6 wording requires **restorative finding-scoped reconciliation** to FPDR-03 before Stage 7 acceptance. FPDR-02 similarly resolves prospective-only correction notification policy. A restorative update to an unmerged draft does not itself propose a new T7 requirement movement, but any omission/deferral/pull-forward/reclassification of canonical approved scope requires T7; genuinely infeasible/unsafe requirements require T8, not weakened safeguards. No T8 is established by documentary evidence.

The report must distinguish source evidence from runtime/provider deployment: production tool registry, system prompts, effective SQL/RLS privileges, cache invalidation, Malayalam/Manglish quality, isolation, Ask CFO deployment, model behavior, CI and actual Daily Intelligence remain **UNVERIFIED — ACCESS REQUIRED**.

## 4. Next crossing

After human merge of MC-27 and MC post-merge verification, ask the **same existing AI Behaviour room** for read-only reconfirmation of same-session continuity, independence and a specific one-branch/one-file/DRAFT PR proposal for the reserved path:

`communication/missions/SB-P-1.15/specialists/04-stage7-ai-behaviour-review.md`

Only a later, separately merged reviewer-specific MC publication authority may permit publication. Do not modify PR #870, Blueprint, FCTM, Founder records, source contracts, other specialist reports, prompts, tools, code, SQL/migrations, provider or production. No EIS, implementation, financial effect or model activation is authorized.

**STOP FOR AUTHORIZED-HUMAN MERGE OF MC-27.**
