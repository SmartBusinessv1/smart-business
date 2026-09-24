# SB-P-1.12 — MC-24 Stage 6 Builder Review Decision and Founder Decision Reconciliation Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Decision:** MC-24  
**Prepared by:** Smart Business Mission Control  
**Status:** STAGE 6 CONTENT ACCEPTED — EFFECTIVE ONLY AFTER FOUNDER/AUTHORIZED HUMAN MERGE OF PR #632  
**PR:** [#632](https://github.com/SmartBusinessv1/smart-business/pull/632)  
**Builder report reviewed at:** `0041f682a44a0ea966357462b116137eb4c12f6e`  
**Canonical base:** `main@5e64d84b4b6c58a4dedecc7f3b97da9a6c5ec5f0` (MC-22 PR #631 human merge)  
**Governing:** Source 18 v1.2 §§3.2–3.3, §6 Stages 3, 5–7; MC-21 canonical Stage 5 approval (PR #630), MC-22 Stage 6 authority (PR #631).

## 1. Builder Review disposition

Mission Control reviewed the actual `communication/missions/SB-P-1.12/claude-code/16-stage6-builder-review-report.md`, F-01–F-11, its evidence class, the approved Blueprint and FCTM references, the Source 18 gates, and PR #632's exact five Claude Code-authorized paths. The report is **accepted as Stage 6 Builder Review findings**, not as independent security verification, an Engineering Review, approved implementation design or production verification.

- **F-01, F-05, F-07, F-08, F-09, F-11:** accepted as documented Stage 7/EIS technical, security or experience inputs/reusable precedents, **not approved implementation decisions**.
- **F-06:** tests and Manager/Employee fixtures must be planned to prove existing approved isolation/role scenarios, without claiming a particular branch-protection rule is already approved. Promoting DB-level isolation to a required CI check is a **separate governance/infrastructure decision** after actual branch-protection/readiness verification.
- **F-10 / T4:** the original `PRODUCT-AFFECTING` residual-`anon` file-level risk and WS-B remain; production effective grants, RLS, function/default privileges and migration execution remain **UNVERIFIED**. Any privileged read-only production verification requires separate explicit authorization.
- **F-02, F-03 and F-04(c):** the Founder has resolved the product questions in the actual PR conversation. The resolutions are recorded below **as confirmation of human dialogue, not canonical until a separate Founder Decision Record is human-merged**. Blueprint reconciliation and any dependent Stage 7 design are held until that separate record/correction crosses its gate.

## 2. Confirmed Founder input — exact PR evidence

[Founder decision comment 5819755459](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819755459) records all three answers. Earlier [clarification 5819236703](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819236703) covered F-03 and F-04(c), but the later complete comment supersedes it for the exact wording of all three. No new question or guess is authorized.

| ID | Confirmed choice | Product-level meaning, preserved for the distinct Founder Decision Record |
|---|---|---|
| F-02 | **Option B** | One person may hold memberships in multiple businesses, with a separate role and permissions per business; owning Business A and managing Business B is allowed. No ambient cross-business access; every action must have unambiguous active-business context. Correct approved Blueprint §3's unsupported “within exactly one business” phrase by narrow, approved reconciliation. |
| F-03 | **Option B** | Reference Cost and margin are **individually and explicitly delegable** by Owner to authorized Manager, separately; neither is Manager-visible by default. A grant for either field never implies the other. Generic product read or bounded Manager view implies neither. Keep Owner intelligence protected at UI **and backend/data layer**. No Employee grant inferred. Scenario A stays verbatim. |
| F-04(c) | **Option C** | On revocation during a multi-row import: retain successfully committed rows; stop subsequent unauthorized writes; tell the merchant both completed and remaining row counts; guide duplicate-safe completion of remaining rows. No automatic resumed work under a revoked actor. Any completion rechecks current actor/business permissions. Implementation mechanics are future engineering proposals. Existing Scenario B's **pre-commit** denial stays verbatim. |

**Trigger treatment:** F-02/F-03 source-silent Product Truth questions and F-04(c) new observable merchant outcome were valid Founder decision triggers; Founder choices close the substantive question **in dialogue**, not their required canonical record or controlled Blueprint incorporation. Do not treat the existing `owner_id UNIQUE` limitation as a one-business membership rule; do not treat unconditional catalog Reference Cost return as accepted visibility policy; do not claim any particular mid-batch transactional implementation is already chosen.

## 3. Separate authority and stop conditions

Stage 6 Builder Review **content is approved for human merge of this PR at the final exact-reviewed head**. Stage 6 becomes canonical on that merge. The next authority-bearing step is a **separate Mission Control-scoped Founder Decision Record and narrow Blueprint reconciliation preparation authorization**, followed by a separately submitted, reviewed and human-merged record/reconciled Blueprint PR. Those are NOT silently completed by this Builder Review report, comment or this gate record.

No FCTM disposition, Build commitment, commercial class or receiving-mission assignment change is inferred by these decisions. Any necessary exact row annotation must preserve FCTM source pointers and require a separately scoped, reviewed change. Founder Scenarios A/B and FPDR-1–4 stay intact. The independent Stage 7 Security & Permissions Architecture actual actor remains unappointed. F-06 required-check governance and T4 read-only live verification remain separate gates.

**MC-24 decision:** `STAGE 6 BUILDER REVIEW CONTENT ACCEPTED — STOP FOR FOUNDER/AUTHORIZED HUMAN MERGE OF PR #632. FOUNDER F-02/F-03/F-04(c) INPUT CONFIRMED, CANONICAL RECORD AND BLUEPRINT RECONCILIATION PENDING. STAGE 7/SECTIONS 20–21/BLUEPRINT LOCK/EIS/IMPLEMENTATION/MIGRATION/PRODUCTION NOT AUTHORIZED.`
