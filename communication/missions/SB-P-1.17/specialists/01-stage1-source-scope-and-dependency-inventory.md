# SB-P-1.17 — Stage 1 Specialist Source, Scope and Dependency Inventory

**Status:** SPECIALIST INTAKE RETURN — PROPOSED; NOT A STAGE 1 COMPLETION/DEFINITION ACTOR APPOINTMENT  
**Baseline:** `main@7cd78f08af99e5fdb47ef3ca0bbcc70d14bc2f95` (Founder-merged PR #985)  
**Mission:** Manager Operations — documentary/readiness lane only  
**Governing:** `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` (blob `0945bda60a93c99909c3b7a247d5427ebe256011`), Phase 1 operating pattern (blob `39b1bc366d7a2e31c80dc22c63aab007a3f5afd6`), Founder Build Plan §10.6 (blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`).

## 1. Source inventory (verified exact paths and blobs)

| Role | Canonical path | Git blob |
|---|---|---|
| Primary Contract 7 | `docs/phase-1-mission-blueprint/smart-business-features/07_Stock_Supplier_and_Reorder_Intelligence.md` | `65ad91b202def9cb4f42b97383bcc58475f59015` |
| Primary Contract 13 | `docs/phase-1-mission-blueprint/smart-business-features/13_POS_Counter_Intelligence_and_Closing_Cash.md` | `4426e8b1f9e856047759bdb03e2f5b83820f8cc0` |
| Primary Contract 17 | `docs/phase-1-mission-blueprint/smart-business-features/17_Operational_Dashboard_and_Manager_Workspace.md` | `7943f74a88c2922acc697115f336b68baf7a503a` |
| Predecessor OLE | `communication/missions/SB-P-1.16/mission-control/16-partial-mission-learning-ole-handoff.md` | `bf76216d0dcde52b3652489de7c43a8992e3269a` |
| Predecessor resume | `communication/missions/SB-P-1.16/mission-control/14-residual-work-exact-resume-register.md` | `42d7202055cd0e6567e96fb55ddc750a1b39de3c` |
| Stage 1 conditional entry | `communication/missions/SB-P-1.17/mission-control/01-stage1-documentary-entry-and-communication-activation.md` | `15242830f7d294536355d63288ac6334bce3cfb3` |

All contract and scenario descriptions below derive from their actual files. This return is an inventory, **not** a populated FCTM, final scope reassignment or authority to execute.

## 2. Candidate classification / mission boundary ledger

| Capability | Candidate classification and rule | Contract references |
|---|---|---|
| Stock quantities, movements, low/slow stock, supported expiry/wastage | BUILD NOW (Manager core), consume shared Inventory | C7 §§2,9,12–15; Build Plan §10.6 |
| Supplier business-scoped identities, product relations and purchasing history | BUILD NOW; no supplier access to merchant intelligence | C7 §§3,10,14–15 |
| Evidence-based reorder suggestion and review | BUILD NOW; Owner confirmation by default | C7 §§4–5,11,15 |
| Bounded delegated reorder | BUILD NOW only under an explicit stored Owner-delegated rule; no blind auto-procurement | C7 §§5,10,13,15 |
| Smart Stock Assistant | ADD-ON: Ledger add-on; do not conflate commercial packaging with Manager core | C7 §1, §9 |
| Opening/bulk inventory intake | BUILD NOW via governed UDI and approved audit/idempotency controls; no third import truth | C7 §6; Build Plan §10.6 |
| Standard POS bridge, source ID and deduplication | BUILD NOW; adapter edge, no forced replacement | C13 §§4–7,17,21 |
| Counter/discount/void anomaly awareness | BUILD NOW with neutral language and review, no misconduct verdict | C13 §§8–9,18,21 |
| Closing-cash calculation and discrepancy review | BUILD NOW from approved inputs, with human context and audit | C13 §§10,15,17,21 |
| Role-aware Manager workspace | BUILD NOW; shared-state readers, no separate truth/permission engine | C17 §§4–8,13–18,22 |
| Staff/HR full workflow, Order & Delivery full product | LATER MISSION SB-P-1.18, although C17 may surface authorized previews; do not pull implementation into SB-P-1.17 | C17 §§9–10; Build Plan §10.7 |
| Channel integration / notifications | LATER MISSION SB-P-1.20; no delivery authority by this intake | Build Plan §10.9 |
| Custom POS core modifications, AI fraud accusation, punitive lockouts, independent duplicate stock engine | REJECTED per existing contracts | C7 §16; C13 §§20,22; C17 §21 |

## 3. Acceptance scenario inventory seed

- **C7 §15:** 12 separately listed scenarios: opening stock and movements; preview/idempotent import; audited correction; low stock; evidence-supported expiry/slow stock; supplier identity; confirmation-gated reorder; stored bounded delegation; standard POS contribution; staff permissions; neutral discrepancy; tenant isolation.
- **C13 §21:** 11 numbered scenarios: stable POS source identity; retry dedupe; valid product-to-stock mapping; unmapped/conflict no-guessing; neutral discount/void review; additive authorized human context; factual closing cash; read-only Ask CFO; Employee restriction; outage fallback; custom edge-only.
- **C17 §22:** 10 numbered scenarios: Owner role-authorized view; Manager delegation; Employee minimal scope; dashboard/conversation consistency; shared module services; failure isolation; read-only Ask CFO; first-class Conversation Workspace; server-side tenant isolation; stable test identifiers.
- **Founder Scenario A:** stock threshold → evidence-backed reorder suggestion → Owner confirms absent bounded delegation → same Product & Price Master identity.
- **Founder Scenario B:** standard POS unusual discount/counter event → neutral human review, not fraud allegation.

These are **33 acceptance-scenario seeds**, not final FCTM rows or demonstrated tests. Stage 1 formal FCTM opening must individually enumerate all numbered scenario obligations and every section of every contract actually advanced/touched.

## 4. Dependency and evidence holds

| Hold | Why it matters | Current treatment |
|---|---|---|
| D12 authority/business identity/tenant isolation | Supplier, Manager, Employee and POS actor permissions | Upstream approved specifications only; no claimed runtime |
| D13 gateway, UDI and AI intake | Stock file/photo and POS input routing, idempotency | Upstream specification; verification later |
| D14, DTX/PQ-2 ledger and single write boundary | Closing cash, expenses, stock-to-ledger events, avoid double counting | Upstream specification; no ledger implementation claimed |
| D15, DSCH | Reorder timing, reminders, merchant-local closing rhythm | Upstream specification; verification later |
| SB-P-1.16 financial credit/advance | Supplier-side `owed_by_business` direction, no duplicate balance truth | FIN-01 PROVISIONAL; carry predecessor OLE and exact holds; no credit runtime |
| Staff and notifications | Cross-mission touch without scope capture | SB-P-1.18/1.20 remain separate |
| Provider and CI integration | GitHub flag provider-cleared, Founder Supabase access restored; Lovable sync, Actions and permanent administrative resilience independently unverified | Parallel evidence, not documentary blocker or implementation clearance |
| Provider/POS-specific compatibility | Standard adapter depends on actual authorized POS capabilities | Stage 1/2 feasibility evidence needed; do not invent POS vendor commitments |
| Security/privacy | Multi-merchant, least privilege, source provenance, delegated rules and audit | Specialist risk review before any future engineering lock |
| Migration/runtime/assurance | Test, branch, scopes, provider and rollback assumptions | NOT AUTHORIZED; Stage 17/19 and implementation evidence absent |

## 5. Draft workstream register (documentary candidates)

- WS17-A: Inventory/supplier identities, product associations and stock facts.
- WS17-B: Reorder intelligence and permission-scoped delegation.
- WS17-C: Standard POS bridge, source reconciliation and error containment.
- WS17-D: Closing cash and non-accusatory counter review.
- WS17-E: Manager workspace, shared-source readers and scoped access.
- WS17-F: Shared UDI, audit, dependency mapping and assurance design.

This register proposes **definition decomposition only**. No builder assignment or executable writable paths.

## 6. Real trigger screen — preliminary, not a Stage 3 disposition

- **T1/T3:** no novel Founder Product Truth decision demonstrated by this Stage 1 inventory. Test only genuine unresolved questions found in detailed contract-by-contract FCTM.
- **T2:** no conflict established between the three primary contracts and Build Plan §10.6 by this inspection. Adjacent contracts still require exact checking.
- **T6:** vendor adapter feasibility, delegation safety and closing-cash source precedence may yield material derived constraints. Keep open for factual Stage 2 screening.
- **T7:** not triggered by existing Manager-core / Ledger-add-on packaging or keeping HR/Orders in 1.18; any new omission/reclassification requires a Founder gate.
- **T8:** future evidence may reveal Product Truth vs security/engineering infeasibility; fail closed and escalate then.
- **T4/T5:** material deltas and new Founder direction must be screened at applicable gate, not invented now.

## 7. Definition Actor recommendation and separation

**Recommendation (not appointment):** Claude Code for Stages 2–4, given existing repository-aware contract/FCTM work across preceding missions; **named alternate: Codex**, subject to availability and independent-verification allocation. This is a competence/dependency proposal, not an assertion that any actor has been appointed in SB-P-1.17.

Because contract scope involves permissions, tenant isolation, consequential reorder delegation, POS financial source identity and cash integrity, Stage 7 security/permissions and POS/financial integration specialist perspectives should be separately reviewed if Source 18 §4.3 requires it. The Stage 19 independent verification actor must not be pre-consumed without a separation decision.

Mission Control must confirm the formal Stage 1 Definition Actor appointment record, actor prior-contributions/separation reasoning and alternates; open the FCTM with exact rows and baseline; open the Institutional Learning Intake Record and crossing plan; and issue the Stage 1 Intake Pack disposition **before** allowing Stage 2.

## 8. Source 18 Stage 1 outstanding elements / exact next gate

**Already established:** canonical Stage 1 entry PR #985 merged; live instruction/report active; source/contract/scenario candidate inventory; draft workstreams; Founder scenario anchors; execution scope flagged NOT AUTHORIZED.

**NOT YET COMPLETE:** formally opened FCTM covering advanced contracts/delegates with per-section/per-scenario ledger; explicit Definition Actor appointment; institutional-learning intake opening; Source 18 delivery/production flags in formal Intake Pack; formal canonical crossing and verification-plan seed; further exact delegated contract inventory where touched.

**STOP FOR MISSION CONTROL STAGE 1 INTAKE-PACK / ACTOR DISPOSITION.** No Stage 2 start, Blueprint/EIS rework, implementation work or provider mutation is approved by this return. SB-P-1.16 stays suspended at its preserved implementation authorization boundary.
