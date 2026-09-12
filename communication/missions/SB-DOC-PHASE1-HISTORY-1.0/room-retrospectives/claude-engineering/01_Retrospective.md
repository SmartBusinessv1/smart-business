# Claude Engineering — Phase 1 Institutional Retrospective

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Room:** Claude Engineering  
**Primary Identity:** Implementation Engineering  
**Scope:** Documentation and institutional-memory capture only  
**Implementation Authority:** None

This retrospective is subordinate to the merged Institutional Learning Capture Protocol and records engineering judgement learned during Phase 1. It deliberately distinguishes product intent, specification, code, merge state, infrastructure state, runtime proof, independent verification, and Mission Control acceptance.

---

## 1. Lessons Learned

### 1.1 The delivery-state ladder must never be collapsed

`CURRENT — STILL VALID`

The most important engineering lesson is to preserve the following distinctions:

1. Founder/Product Truth requirement;
2. authorized mission scope;
3. Blueprint;
4. Engineering Implementation Specification (EIS);
5. implementation package;
6. code committed;
7. PR merged;
8. schema/migration applied;
9. runtime deployed;
10. Founder Runtime Verification;
11. independent engineering/security verification;
12. Mission Control acceptance.

> A plan is not implementation.  
> Code is not runtime.  
> Merge is not deployment.  
> Green CI is not acceptance.  
> A working happy path is not complete feature delivery.

`MISTAKE / FAILURE MODE` — Earlier engineering discussions sometimes treated the existence of a contract, implementation artifact, merged PR, provisioned infrastructure, or successful happy path as stronger proof than it actually was. The current 25-contract baseline corrects this: mature product definition is substantially broader than proven implementation.

`CORRECTION / LESSON` — Future reviews must name the exact state reached and cite the evidence that proves that state. “Implemented” is insufficient unless the reviewer states whether that means code present, merged, migrated, deployed, runtime-verified, independently verified, and/or accepted.

### 1.2 Mature product definition is not the current implementation

`CURRENT — STILL VALID`

The Phase 1 blueprint and Global Product Completion View define the mature intended product surface. The current implementation baseline shows only a subset as implemented or partially implemented. The 25 mature contracts must not be described as complete merely because the contract set exists.

Engineering evidence supports meaningful foundations around application access/workspace, Ledger/Transactions, transaction correction/audit, Inventory/Catalog-related foundations, permissions/isolation work, and parser/Lambda infrastructure. Many mature capabilities remain partial, foundation-only, unwired, or planned.

### 1.3 Database, schema and RPC work requires explicit safety discipline

`CAPABILITY PROVEN`

Phase 1 established practical experience with Supabase/Postgres schema work, migrations, RPCs, RLS, ownership boundaries, audit fields, and financial write paths.

`CORRECTION / LESSON`

- Verify the target project/environment before any migration or mutation.
- Prefer backward-compatible, additive migration paths where practical.
- Make write operations deterministic and validate inputs before mutation.
- Design for idempotency and duplicate prevention where retried or event-driven writes are possible.
- Treat `security definer`, service-role, or otherwise privileged operations as explicit trust boundaries, not ordinary application permissions.
- Preserve business/tenant ownership in every data path.
- Keep implementation-specific historical schema choices subordinate to current Product Truth and current authorized architecture.

### 1.4 RLS and backend authorization are not optional companions to UI permissions

`CURRENT — STILL VALID`

A hidden button is not authorization. Owner/Manager/Employee boundaries and business isolation must be enforced in the database/backend as well as the UI. Denial paths are first-class verification cases.

`MISTAKE / FAILURE MODE` — Treating UI visibility or route access as sufficient proof of permission safety.

`CORRECTION / LESSON` — Verify positive and negative paths: allowed owner operations, denied staff operations, cross-business denial, and privileged-operation boundaries.

### 1.5 Financial integrity requires stricter implementation discipline than ordinary UI work

`CURRENT — STILL VALID`

Transaction history affects merchant trust, reporting, reconciliation, and later AI explanations. Financial changes therefore require auditability, deterministic calculations, duplicate prevention, explicit confirmation for consequential writes, and preserved history.

The transaction-correction direction is a durable lesson: correction/audit is preferable to destructive mutation. Transaction timestamps must preserve UTC storage while presenting the business-local time correctly. Credit, repayment, and payment evidence must remain semantically distinct from business truth rather than being flattened into one ambiguous transaction meaning.

### 1.6 Catalog engineering evolved into Product & Price Master direction

`HISTORICAL — SUPERSEDED`

Catalog-related engineering and data structures were useful foundations, but Catalog is no longer protected as a separate top-level product concept.

`CURRENT — STILL VALID`

Founder-approved direction is a shared **Product & Price Master — CORE SHARED FOUNDATION**. Product & Price Master owns reusable commercial/item identity; Inventory owns quantity/state; Transactions are events rather than master records. Future implementation evolution belongs to authorized `SB-P-1.12` work.

`CORRECTION / LESSON` — Preserve valid existing Catalog data/code and migrate/rebase deliberately. Do not destructively delete useful foundations simply because the product concept evolved. Avoid duplicate product models, bind identity consistently, and treat opening stock, price history, imports, and contextual access as coordinated concerns rather than isolated feature-local schemas.

### 1.7 Parser/AWS Lambda infrastructure is not equivalent to UDI completion

`CURRENT — STILL VALID`

Parser/Lambda work reached a meaningful infrastructure/prototype state, but later review correctly distinguished “Lambda exists” from “UDI/document workflow is production-complete.” Remaining work was characterized as narrow rebase/wiring rather than a justification to rebuild the whole parser.

`CORRECTION / LESSON` — Production-complete claims require evidence of current canonical code, correct environment, deployed runtime, integration into the shared document/UDI flow, authorization/security boundaries, error/denial behavior, and end-to-end runtime verification.

> Lambda exists does not mean UDI exists.

No parser reactivation is authorized by this retrospective.

### 1.8 Repository/runtime drift must be treated as an engineering risk

`CURRENT — STILL VALID`

Phase 1 exposed the need to distinguish canonical repository state, delivery history, Lovable output, Supabase runtime, and production deployment. A patch against the wrong branch/repository/environment can be technically correct and operationally useless or dangerous.

`CORRECTION / LESSON` — Future engineering should prove the chain `commit → merged PR → deployment/migration → identified runtime → runtime evidence`. Stale delivery branches and invisible canonical/runtime divergence must not be allowed to persist.

### 1.9 Testing and CI were useful but incomplete

`CAPABILITY PROVEN`

Repository CI included documentation/Markdown quality controls, and application work used a mix of implementation checks, targeted tests and Founder/manual runtime verification. Testing frameworks such as Vitest exist in the engineering history where evidenced.

`UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION`

Broad automated application build/lint/unit/integration gating was not consistently proven as a comprehensive PR gate across the mature product surface.

> Green documentation CI does not prove application correctness.

Future `SB-P-1.12` engineering should establish stronger automated application CI early, but any specific tooling choice remains a recommendation until authorized.

### 1.10 Engineering review is a counterweight to implementation optimism

`CAPABILITY PROVEN`

Claude Engineering added value by asking whether a claimed feature actually existed, inspecting schema/RPC/RLS implications, separating demo-ready from production-ready, checking denial/error paths, testing assumptions about idempotency/auditability, surfacing stale architecture, and resisting “PR merged = feature complete.”

Its limitation is equally important: engineering review cannot substitute for runtime evidence, independent security verification, environment proof, Founder decisions, or Mission Control acceptance.

---

## 2. Capabilities Acquired

### Engineering implementation capability

`CAPABILITY PROVEN`

- Schema/migration reasoning and review.
- RPC and database-write design.
- Transaction logic and correction/audit flow design.
- Inventory and product/catalog foundation reasoning.
- Backend integration planning and review.
- Financial-integrity design with auditability, validation and duplicate prevention.

These are engineering capabilities, not claims that all associated mature product features are complete.

### Engineering verification capability

`CAPABILITY PROVEN`

- Repository-grounded implementation review.
- Migration and schema inspection.
- RLS/RPC boundary review.
- Idempotency and auditability review.
- Implementation-vs-spec comparison.
- Evidence-pack and completion-report review.
- Distinguishing code/merge/deploy/runtime/acceptance states.

### Delivery/repository capability

`CAPABILITY PROVEN`

- Branch/commit/PR workflow.
- Canonical-repository discipline.
- Patch/review and correction workflows.
- Reconciliation reasoning across repository, migration, deployment and runtime evidence.

### Engineering-governance capability

`CAPABILITY PROVEN`

- Stop at authority boundaries.
- Keep EIS distinct from implementation authorization and implementation execution.
- Escalate Product Truth ambiguity rather than hardcode it.
- Separate engineering choices from Founder/Mission Control decisions.
- Preserve evidence-over-assumption methodology.

---

## 3. Tools We Have

### 3A. Tools / Infrastructure Actually Used or Proven by Claude Engineering

| Tool / infrastructure | Proven use | Limit / authority boundary |
|---|---|---|
| GitHub | Canonical repository reading, branch/commit/PR review, evidence and history inspection | Merge/deploy/acceptance are separate states; no self-merge in this mission |
| Claude / Claude Engineering | Large-context engineering reasoning, EIS/prompt review, code/architecture review, evidence analysis | Engineering assistant; no Product Truth or Mission Control authority |
| Claude Code | Used in governed engineering workflows where mission evidence explicitly records it | Must operate against verified repo/branch and authorized mission scope |
| Supabase / PostgreSQL | Schema, migration, RPC, RLS and backend architecture work/review | Environment identity and privileged/service-role boundaries must be proven |
| Lovable | Frontend/build execution context reviewed by engineering | Lovable output is not canonical truth until reconciled with GitHub/runtime |
| AWS / Lambda | Parser infrastructure/prototype work and later engineering review | Provisioned/deployed infrastructure does not prove product integration |
| Repository CI / Markdown Quality Gate | Documentation quality and repository checks | Does not prove application correctness or runtime behavior |
| Application test tooling where present | Targeted unit/integration validation and implementation checks | Coverage remained incomplete across the mature product surface |

### 3B. Approved / Planned Providers or Integrations

`CURRENT — STILL VALID`

Do not collapse these categories: tool used by engineering; infrastructure provisioned; code implemented; current product integration; approved future direction.

Future OpenAI orchestration, Meta WhatsApp integration, Cloudflare R2 media/storage flows, broader CI platforms, and other planned systems are not classified here as “tools proven by Claude Engineering” unless repository/runtime evidence proves actual current use.

---

## 4. Suggested Tools to Have

All items below are `RECOMMENDATION — NOT YET ADOPTED` unless separately authorized elsewhere.

- Automated application build/lint/test CI on pull requests.
- Migration drift detection and schema diffing.
- RLS/policy test harness with explicit cross-tenant denial fixtures.
- API/RPC contract tests.
- Migration dry-run and rollback/backward-compatibility checks.
- Environment identity verification before database/infrastructure mutations.
- Canonical-commit-to-runtime deployment parity verification.
- Structured application observability/logging.
- Dependency and security scanning integrated with engineering review.
- Reusable test-data fixtures for owner/manager/employee and multi-business isolation.

Vendor selection should remain implementation-neutral until Mission Control authorizes a provider.

---

## 5. Suggestions to Improve This Project

- Prove repository, branch, Supabase project, AWS account/function and deployment target identity before mutations.
- Require explicit implementation evidence for each acceptance scenario, including denial/error paths.
- Keep EIS implementation-neutral where Product Truth does not require provider lock-in.
- Make migration rollback/backward-compatibility thinking part of design review.
- Maintain one shared foundation per cross-cutting concern; avoid duplicate domain/schema models.
- Tie every future Product Mission to the Global Product Completion Register.
- Establish automated build/lint/unit/integration checks early in `SB-P-1.12`.
- Preserve commit/deployment/runtime traceability in completion evidence.
- Store engineering corrections and superseded assumptions in durable repository artifacts rather than chat memory alone.
- Require independent security review where privileged RPCs, service-role access, RLS boundaries, or sensitive financial writes are materially changed.

---

## 6. What Future Rooms Must Know Before Touching This Area

1. Start from merged `main` and verify the exact environment before changing anything.
2. Read the current Product Truth/contract and the current implementation baseline; do not infer completeness from mature contracts.
3. Identify the exact delivery state being discussed: planned, specified, coded, merged, migrated, deployed, runtime-verified, independently verified, accepted.
4. Treat GitHub as canonical implementation history, but reconcile it with actual runtime before making runtime claims.
5. Never use UI hiding as the security boundary; inspect backend/RLS/privileged paths.
6. Financial changes require preserved history, deterministic logic, confirmation, idempotency/duplicate protection, and auditability.
7. Preserve valid Catalog engineering while following the current Product & Price Master shared-foundation direction.
8. Do not equate parser/Lambda infrastructure with an integrated UDI feature.
9. Do not revive old provider-specific or feature-specific architecture merely because historical code exists.
10. Stop and escalate unresolved Product Truth, authority, environment, or scope questions.

---

## 7. Do-Not-Repeat Register

- `MISTAKE / FAILURE MODE` — Do not assume merged PR = deployed runtime.
- `MISTAKE / FAILURE MODE` — Do not assume deployed infrastructure = integrated feature.
- `MISTAKE / FAILURE MODE` — Do not patch before verifying repository, branch and environment.
- `MISTAKE / FAILURE MODE` — Do not run migrations against an assumed Supabase project.
- `MISTAKE / FAILURE MODE` — Do not use UI hiding as authorization.
- `MISTAKE / FAILURE MODE` — Do not destroy financial history to “edit” transactions.
- `MISTAKE / FAILURE MODE` — Do not duplicate product/item identity models.
- `MISTAKE / FAILURE MODE` — Do not let feature-specific document parsers bypass the shared UDI direction.
- `MISTAKE / FAILURE MODE` — Do not treat service-role access as ordinary application permission.
- `MISTAKE / FAILURE MODE` — Do not skip denial-path tests.
- `MISTAKE / FAILURE MODE` — Do not hardcode unresolved Founder decisions.
- `MISTAKE / FAILURE MODE` — Do not create custom POS logic in core for one merchant; use standard bridges/extensions.
- `MISTAKE / FAILURE MODE` — Do not let provider-specific engineering silently become Product Truth.
- `MISTAKE / FAILURE MODE` — Do not call a feature complete because its happy path works.
- `MISTAKE / FAILURE MODE` — Do not allow stale delivery/canonical repository divergence to remain invisible.
- `MISTAKE / FAILURE MODE` — Do not convert implementation-specific historical schema into permanent Product Truth.
- `MISTAKE / FAILURE MODE` — Do not use green Markdown/documentation CI as evidence of application correctness.

---

## 8. Current Truth vs Historical Truth

| Area | Historical implementation / assumption | Current engineering truth | Preserve | Do not revive |
|---|---|---|---|---|
| Catalog | Catalog treated as a stronger standalone product concept | Product & Price Master is the Founder-approved shared commercial/item identity foundation | Valid Catalog data structures, identity and import lessons | Separate competing product/item master models |
| Transactions | Direct editing could appear simpler | Correction/audit model preserves financial history and accountability | Existing IDs, deterministic totals, correction history | Destructive financial-history mutation |
| Inventory/Catalog/Dashboard | Foundation/happy-path implementation could look close to feature completion | Mature contracts remain substantially incomplete across the full product | Proven foundations and reusable components | “Foundation = mature feature complete” claims |
| Parser/Lambda | Existing/deployed Lambda could be read as document feature completion | Parser remains subject to narrow rebase/wiring and end-to-end UDI integration proof | Proven parser logic/infrastructure | “Lambda exists, therefore UDI exists” |
| Permissions | UI controls were an easy visible signal | Backend/RLS/privileged-operation enforcement is required | Permission UX plus database/backend enforcement | UI-only authorization |
| Repository/runtime | Merged code could be treated as delivery completion | Runtime state requires deployment/environment evidence | Canonical history and commit traceability | Merge = deployment/acceptance assumptions |
| Architecture | Feature-local mechanisms accumulated during early implementation | Shared foundations are preferred for cross-cutting concerns | Useful proven code and data | Duplicate schemas/services for the same concern |
| Messaging | WhatsApp-specific logic could be implemented directly | Current direction favors common core/event logic with channel adapters where authorized | WhatsApp-first UX intent | Channel-specific business truth duplicated in adapters |
| Provider mechanisms | Historical provider choices solved immediate implementation needs | Provider choice remains subordinate to Product Truth and current authorized architecture | Proven integration lessons | Provider-specific behavior elevated into permanent Product Truth |

---

## 9. Evidence Pointers

Durable/current evidence reviewed or identified for future engineering continuity includes:

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/01_Mission_Control_Retrospective_Dispatch_Pack.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/founder-room/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/research-intelligence/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/final-reconciliation/07_Current_Implementation_Baseline_Refresh_25_Contract_Model.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`
- `docs/phase-1-mission-blueprint/smart-business-features/` — current mature feature/foundation contracts and EIS artifacts.
- `communication/missions/` — durable mission reports, evidence packages and correction records for transaction/correction/audit, Inventory/Catalog, security, infrastructure, Supabase and parser work.
- `supabase/migrations/` — canonical migration history relevant to schema/RPC/RLS implementation.
- `supabase/functions/` — current server-side/edge-function implementation where applicable.
- `src/` — current application implementation.
- `communication/evidence/` — mission-specific evidence packages where present.
- Source 18: `18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` in approved project governance sources — lifecycle authority for distinguishing planned/specification/implementation/verification/acceptance states.

Historical `communication/live/` material may be used only as explicitly historical evidence and must not override merged current authority.

---

## 10. Open Questions / Residual Risks

- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — The mature 25-contract product remains only partially implemented; future missions must continue to report contract-by-contract implementation state rather than infer completion.
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Parser/Lambda continuity still requires the authorized narrow rebase/wiring path and end-to-end integration evidence before production-complete claims. Owner: Mission Control / Infrastructure / relevant implementation rooms.
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Broad automated application CI remains weaker than the desired future engineering standard. Owner: Mission Control / Infrastructure / Engineering.
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Migration/environment identity remains a recurring operational risk whenever database changes are authorized. Owner: Supabase Architecture / Infrastructure.
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Product & Price Master evolution may require careful rebase/migration from useful Catalog-era structures; destructive replacement would create unnecessary risk. Owner: future authorized `SB-P-1.12` mission.
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Test coverage and denial-path coverage remain uneven across the mature product. Owner: Engineering / Security as applicable.
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Any remaining anonymous/default grants, privileged RPC concerns, or security findings must be judged against the latest Security baseline rather than assumed resolved from historical engineering evidence. Owner: Security & Permissions Architecture.
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Repository/runtime parity must continue to be explicitly proven after future deployments. Owner: Infrastructure Operations with implementation rooms supplying commit evidence.

---

**Retrospective boundary:** This document records institutional engineering memory only. It performs no code, schema, runtime, infrastructure, Product Truth, governance, parser, or Product Mission implementation.