# SB-P-1.15 — Stage 7 Independent Specialist Review Authorization

**Mission Control decision:** SB-P-1.15-MC-16  
**Source authority:** Source 18 Stage 7 and §4.8; MC-03, MC-14, MC-15; FPDR-02 and FPDR-03  
**Baseline:** protected `main@22dbbb803dc205b521922b337f6545c5c3c4592f`  
**Stage 7 working draft:** PR #870 `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` — OPEN/DRAFT/UNMERGED  
**Status:** PROPOSED — EFFECTIVE ONLY AFTER AUTHORIZED-HUMAN MERGE AND INDEPENDENT MC VERIFICATION  
**Implementation:** NOT AUTHORIZED

## 1. Purpose and trust separation

Authorize a **bounded Stage 7 independent specialist review program**, subject to human merge. This record authorizes read-only evidence examination and independently authored specialist-report publication once concrete reviewer identity and independence have been verified by Mission Control. It **does not appoint or impersonate any particular reviewer**, and it is not independent assurance itself.

Claude Code authored SB-P-1.15 Stages 2–7 draft and may not write specialist reports, mark its own findings independently approved, or act as the non-author parallel reviewer. Each actual reviewer must declare name/actor, model/provider, session/room, prior authorship/contribution, exact evidence accessed, tools and limitations. A different chat label or session alone does not establish substantive independence; disclose any common assumptions, shared authoring, and reliance on Claude's register. Independent review findings must challenge rather than reproduce the draft.

## 2. Review scopes and exactly authorized proposed artifact locations

Each review is a distinct independent assignment. **No specialist is automatically appointed by this decision**. After MC verifies a proposed actor, the actor is allowed read-only source inspection and one dedicated DRAFT report under the listed path, via separately verified branch/PR scope. No shared writing rights to PR #870; no alteration of Product Truth or operational systems.

| Assignment | Domain and minimum challenge | Reserved report path |
|---|---|---|
| **S7-SP-1** | RLS, default grants to `anon` and function `EXECUTE`, privileged service-role boundary, current-grant vs repository difference, job tenant isolation, former Owner denial, Manager capability, Ask CFO access restrictions; negative-test design and failure severity | `communication/missions/SB-P-1.15/specialists/01-stage7-security-rls-grants-isolation-review.md` |
| **S7-SP-2** | Business-authoritative timezone/merchant-visible business day, fixed 07:00/10:30/22:00 local slots, occurrence/slot keys, lease/retries, duplicate prevention, DST and timezone changes, delayed briefing availability without inventing staleness cutoff | `communication/missions/SB-P-1.15/specialists/02-stage7-scheduler-concurrency-time-review.md` |
| **S7-SP-3** | DTX/PQ-2 single transaction write path, reminders not payments, financial integrity, sale with credit payment method distinct from credit state, Ask CFO qualified answers vs SB-P-1.16 authoritative balances, reconciliation and negative cases | `communication/missions/SB-P-1.15/specialists/03-stage7-financial-integrity-review.md` |
| **S7-SP-4** | Read-only AI tool/data-layer boundary, pre-retrieval permission checks, grounding, hallucinated causes/accusations, prompt-induced writes, bounded owner/manager views, advisory-only assistance | `communication/missions/SB-P-1.15/specialists/04-stage7-ai-behaviour-review.md` |
| **S7-SP-5** | Test-rehearsed birth-safe migrations and explicit ACL/revocations, timezone column migration, historical data/DATE preservation, legacy correction-event state and prospective-only activation boundary without modifying past statuses or assuming a production backlog | `communication/missions/SB-P-1.15/specialists/05-stage7-migration-data-transition-review.md` |
| **S7-SP-6** | Reusable notification request/state foundation, native-only before SB-P-1.20, eligible current recipient/former Owner denial, event/recipient/channel deduplication, FDB-1 (d2) owner unassigned, truthful interim copy separate, no accidental external send or replay | `communication/missions/SB-P-1.15/specialists/06-stage7-notification-foundation-review.md` |
| **S7-PAR** | Non-author independent engineering feasibility challenge of **all 694** register ID/home/status/risk semantics, including the 10 provisional PASS rows and cross-cutting dangerous false negatives. Re-derive assumptions rather than trust generated risk keywords; check the B6/E evidence and sample BLOCKED/FOLLOW-UP cases | `communication/missions/SB-P-1.15/specialists/07-stage7-parallel-engineering-feasibility-review.md` |

S7-PAR must be performed by an actor/session substantively independent of the authors of S7-SP-1–6 as well as Claude Code. The six topical specialist reports may use different independent reviewers; their relevant competence and separation must be evidenced, not asserted. If independent review is unavailable, the affected gate remains **PENDING**. This decision does not authorize inventing identities or fabricating reviews.

## 3. Evidence and report contract

Each report must contain: (1) actual reviewer identity/model/provider/session/independence statement; (2) immutable baseline and exact files/sections inspected; (3) challenge method, negative cases and limits (repository findings versus unverified live state); (4) individually numbered findings with severity, evidence references, affected FCTM row IDs, and cross-links to proposed Blueprint §§20–21; (5) recommendations categorized as correction needed / conditionally acceptable / accepted with residual hold / blocked / escalated question; (6) explicit T1/T6/FPDR compatibility; (7) checklist of unverified assertions and actual tests, distinguishing documentary review from executed checks; (8) Source 18 T1–T8 triggers if found; (9) independent final conclusion and required MC dispositions.

S7-PAR additionally must reconcile all **694 IDs** bidirectionally to canonical FCTM (803 total, 694 in scope), verify §19 homes, scrutinize all ten PASS findings individually, sample risk/hold allocation across all eight §8 subsections, and report any missing/incorrect row classification. A mechanical validator is necessary but does not replace independent judgment.

## 4. Sequencing, branch and publication protection

After MC-16 human merge and MC post-merge verification:

1. Mission Control confirms suitable **real independent actors and separate sessions** and issues a concrete reviewer-specific handover with a unique branch and the **one exact reserved file path** above. No actor may begin publication without appointment and explicit branch authorization.
2. Each reviewer independently reads canonical protected `main`, PR #870 at a recorded head, Stage 6 Builder Review, Source 18, FCTM, FPDR-01/02/03 and MC-14/15/16. Source drift/ambiguity is reported and held. No edits to these inputs.
3. Publish each specialist's sole report by a separate **DRAFT PR**, or by another distinctly MC-authorized audited route. No unapproved changes to PR #870 or unrelated repo paths. Reviewer returns exact PR, head, scope, conflicts, evidence and limitations; **no self-merge**.
4. MC independently reviews and dispositions each specialist report. Only after all seven are accepted or exceptions explicitly Founder/MC-gated may Claude Code be separately authorized to reconcile the existing PR #870. Re-run every-row validator and independent critical-row sampling after reconciliation.
5. Stage 7 acceptance, Stage 8 Founder Blueprint lock and any future Implementation Authorization remain **separate decisions**.

## 5. Founder policy gates and excluded decisions

**T1 resolved:** FPDR-02 mandates **prospective-only correction notifications**; historical correction records are retained under valid obligations, not automatically replayed, deleted or bulk status rewritten. Production backlog/delivery history unverified. Activation cutoff, migration mechanics, grant posture and FDB-1 (d2) integration owner require later governance; do not invent them.

**T6 resolved:** FPDR-03 mandates **latest valid native briefing shown when available**, with scheduled slot and actual generation timestamps, no duplicate/misleading notification. No guaranteed generation, lateness cutoff or outbound delayed dispatch. The fixed 07:00/10:30/22:00 business-local rhythm stays.

**DC-03 timezone-default materiality:** still OPEN for existing merchants; no `Asia/Kolkata` backfill or historical DATE reinterpretation is approved. A specialist can compare options and recommend a Founder review, but cannot decide merchant-visible policy. U-3, U-5, DC-06, unassigned FDB-1 (d2), separate correction-dialog-copy repair, D12/D13/D14/DTX, scheduler, AI, migration, CI/provider/runtime and privileged-client holds continue.

## 6. Explicit non-authorization

No modifications to PR #870, Blueprint, FCTM, contracts, Founder Decisions, Product Truth, Build Plan, source documents, `src/**`, `supabase/**`, `communication/live/**`, provider systems, production, or any other paths beyond the specific separately authorized independent review reports. No EIS, feature implementation, SQL, migrations, job activation, external messages, historical replay, deployment, production writes or self-merge. No CI success or specialist appointment implied by this authorization.

**STOP FOR AUTHORIZED-HUMAN MERGE OF MC-16.**
