# Smart Business — Phase 1 Institutional Memory, Lessons, Capabilities and Operational Guardrails

**Document role:** Canonical operational handover from reconstructed Phase 1 history into future Smart Business Product Missions  
**Status at creation:** Historical closeout candidate; becomes the durable institutional-memory guide when the closeout PR is Founder-merged and Mission Control verifies `main`.  
**Authority boundary:** This guide summarizes accepted history and operational judgement. It does not supersede the Lighthouse Constitution, Source 01, Source 11, current approved governance, Founder decisions, mature feature contracts, or mission-specific authority.

---

## 1. How to use this guide

A future Smart Business room should use this guide to avoid relearning Phase 1 mistakes, but must still read the current authority and evidence relevant to its mission.

Before consequential work:

1. pull/read current canonical `main`;
2. identify the exact active mission and lifecycle stage;
3. read current Product Truth and relevant mature feature contracts;
4. verify the actual repository/environment/runtime target;
5. distinguish what is already proven from what is merely expected;
6. operate only within explicit authority;
7. preserve evidence and correction history;
8. stop/escalate when Product Truth, authority or target state is ambiguous.

Historical documents explain lineage. They do not automatically authorize present action.

---

## 2. Authority model

Smart Business execution must preserve this operating hierarchy:

**Founder → Lighthouse Constitution → Phase 1 constitutional Product authority (Source 01 + Source 11 jointly) → approved governance → Mission Control → authorized specialist/engineering actors → repository/platform/mission instructions.**

Permanent distinctions:

- Founder remains final human authority.
- Mission Control coordinates; it does not manufacture authority.
- Specialists contribute domain judgement within authorized scope.
- Builders implement; they do not self-accept.
- Verifiers verify evidence; they do not automatically approve their own report.
- Tool access and technical capability do not create authority.
- Historical authorization expires with its mission unless explicitly reactivated.
- Current Product Truth outranks historical product assumptions.

No actor approves its own work.

---

## 3. Lighthouse product doctrine

Smart Business must remain aligned with these principles:

- Humans serving humans.
- AI Assistant, Not AI Judge.
- Technology is a tool; human improvement is the purpose.
- Build for clarity, dignity, usefulness and peace of mind.
- Respect merchant habits; enrich rather than insult old methods.
- Human decision ownership is preserved for consequential business choices.
- Business value should be earned by providing value.
- Simplicity, trust and sustainability matter more than feature theatre.

For merchant-facing AI:

- explain rather than command;
- warn rather than accuse;
- clarify uncertainty rather than fabricate confidence;
- ask for confirmation where consequential;
- respect permissions and privacy;
- never convert model confidence into authority.

---

## 4. Current product completion model

The mature Smart Business Product Definition Library contains **25 feature/foundation contracts**.

They are the current program-level product-definition frame, subordinate to constitutional Product Truth and Founder decisions.

A mature contract is not proof of implementation.

Permanent completion distinctions:

`product committed ≠ implemented ≠ merged ≠ migrated/configured ≠ deployed ≠ runtime-verified ≠ independently verified ≠ accepted ≠ globally complete`.

Mission Control must maintain the Global Product Completion Register. Every `SB-P-*` mission must name which confirmed feature/foundation contracts it advances.

No mature feature is globally complete merely because one earlier local mission completed a foundational slice.

---

## 5. Current future-build sequence

The accepted future Product Mission sequence is exactly:

1. `SB-P-1.12 — Authority, Identity & Product Surface Foundation`
2. `SB-P-1.13 — Native Conversation & AI Intelligence Foundation`
3. `SB-P-1.14 — Business Memory, Documents & Durable Media`
4. `SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO`
5. `SB-P-1.16 — Financial Integrity & Credit`
6. `SB-P-1.17 — Manager Operations`
7. `SB-P-1.18 — Controlled Business Add-ons`
8. `SB-P-1.19 — Activation, Lifecycle & Platform Stewardship`
9. `SB-P-1.20 — WhatsApp Channel Integration`

Do not invent `A/B/C` mission IDs merely from engineering decomposition. Use internal stages/workstreams/gates unless current Source 18 or Mission Control explicitly requires a separate Product Mission identity.

This historical closeout does not activate any of these missions.

---

## 6. Architecture that future work must preserve

### 6.1 Channel-independent conversational core

Native Conversation and shared AI/action services come before WhatsApp integration.

Core flow:

`merchant input → language understanding → Business Memory → permission → clarification/preview → confirmation → deterministic action → audit → response`.

WhatsApp flow:

`Meta webhook → identity/channel validation → normalized message → existing kernel/action engine → normalized response → delivery`.

Reject:

- a second WhatsApp business brain;
- a separate WhatsApp database;
- separate channel-specific permissions;
- separate channel-specific Business Memory;
- duplicate channel-specific AI/action rules.

The core must survive Meta disconnect.

### 6.2 Product & Price Master / Inventory / Transactions

Preserve separate truth ownership:

- Product & Price Master = item/commercial identity, pricing/tax/import history;
- Inventory = quantity/state/movements;
- Transactions/Ledger = business and financial events.

Product & Price Master is a shared foundation, not a 26th feature.

Preserve valid engineering; evolve and contextualize surfaces rather than destructively deleting historical Catalog capability.

### 6.3 Shared foundations before feature-specific duplication

Before creating a new subsystem, inspect/reuse existing or planned shared foundations for:

- permissions/business isolation;
- Business Memory;
- AI orchestration;
- Human Language;
- Conversation/intent/action;
- UDI;
- document/media storage;
- reminders/delegation;
- channel adapters;
- notifications;
- identities;
- audit/history;
- location;
- entitlements/lifecycle;
- idempotency/error/security handling.

Reuse before duplication.

---

## 7. Product-specific locked lessons

- Ask CFO is read-only clarity/intelligence, not write authority.
- Smart Credit warns and informs; Owner decides.
- Basic Voice is a modality of the shared Conversation architecture; Voice Plus adds premium depth without a duplicate voice brain.
- Employee access is permission-scoped. Staff do not see Owner financial intelligence by default.
- Attendance/location is purpose-limited, not continuous surveillance.
- AI must not accuse employees/customers or impose punishment.
- Standard POS bridge is allowed; client-specific core POS modification is rejected.
- Smart Order & Delivery is not a marketplace and remains Build Now before the first 10 pilot merchants.
- Reorder triggers do not create permission; consequential execution requires confirmation or valid bounded delegation.
- `/survey` is deprecated; use `/start`.
- Public/internal route boundaries remain governed by current Product Truth.

---

## 8. Evidence doctrine

Evidence must be claim-specific.

Use this strength order where applicable:

1. direct runtime/repository/provider evidence tied to exact target;
2. authorized operator attestation with reproducible detail;
3. durable historical reports/artifacts;
4. inference;
5. unresolved.

For product/authorization decisions, Founder/current governance authority outranks technical inference.

Permanent rules:

- green CI proves configured checks only;
- static code review does not prove runtime;
- repository state does not prove deployed state;
- test environment does not prove production;
- migration file does not prove migration execution;
- UI existence does not prove workflow completion;
- Builder report does not prove independent verification;
- verifier report is itself evidence subject to review;
- merge does not prove Mission Control acceptance;
- absence of failure is not PASS;
- unknown remains unknown.

Claim only what the evidence demonstrates.

---

## 9. Security and permission guardrails

Every sensitive feature should account for both success and denial/error behavior.

At minimum, as relevant:

- authenticated vs unauthenticated;
- correct business vs cross-business;
- correct role vs unauthorized role;
- permitted vs revoked permission;
- valid vs malformed input;
- first request vs retry/duplicate/concurrent request;
- current state vs stale preview/confirmation state;
- normal dependency vs dependency failure.

Rules:

- enforce authorization server-side/database-side;
- revalidate permission at execution;
- never treat frontend hiding as security;
- service role is not product authorization;
- justify `SECURITY DEFINER` explicitly; prefer narrower privilege where possible;
- verify effective grants/RLS/IAM state, not intended text alone;
- bootstrap privilege must not become steady-state breadth;
- provider credentials intentionally unavailable to a verifier are a security boundary, not a problem to bypass.

---

## 10. Financial and data-integrity guardrails

- Preserve monetary precision, including paise where business meaning supports it.
- Prefer correction events/history over destructive rewriting.
- Preserve original evidence plus authorized correction context.
- Payment evidence is not automatically payment truth.
- Reconciliation requires deterministic/idempotent matching and ambiguity review.
- Confirmation must bind exact actor, target, action and reviewed state.
- Idempotency requires server-side semantics, not only disabled buttons.
- Concurrent/retry paths need explicit handling.
- Where a committed outcome cannot be safely confirmed, preserve a narrow unknown-outcome semantic rather than inventing success/failure.

---

## 11. Repository, migration and runtime guardrails

Canonical implementation repository:

`SmartBusinessv1/smart-business`.

Historical/point-in-time delivery topology includes `SmartBusinessv1/starter-supab-shell`, Lovable publication, production Supabase and the product domain. These external/platform states are volatile and require fresh verification before mutation.

Rules:

- reconcile before moving code between repositories;
- never silently overwrite newer canonical work from an older builder/delivery snapshot;
- use narrow rebase/sync when platform-specific state differs intentionally;
- migration presence is not migration authority;
- rehearse consequential schema/data repair before production;
- match rehearsal to the real trigger path;
- repair the evidence layer rather than rerun production merely to improve report wording;
- generated types/schema dumps must be regenerated from source truth rather than hand-edited.

---

## 12. Builder and reviewer responsibilities

### Builder

A Builder must:

- implement only authorized scope;
- preserve Product Truth and UX anchors;
- report what was and was not verified;
- preserve denial/error behavior;
- avoid speculative product decisions;
- stop rather than broaden authority.

### Independent reviewer

A reviewer must:

- be willing to contradict Builder confidence;
- inspect actual repository/evidence state;
- map findings to locked acceptance criteria;
- classify findings precisely;
- test/inspect negative paths where authorized;
- preserve `INSUFFICIENT EVIDENCE` when proof is missing;
- avoid solving Product questions through engineering preference;
- avoid claiming another actor’s work.

### Mission Control

Mission Control must:

- coordinate authority and stage ownership;
- protect global product completeness;
- maintain the Global Product Completion Register;
- use proportionate gates;
- issue narrow corrections;
- prevent self-approval;
- keep unresolved matters visible;
- produce handover sufficient for successor execution without guessing.

---

## 13. UX anti-drift guardrail

The Founder-approved build plan makes UX acceptance a permanent engineering constraint.

For each future Product Mission:

- Blueprint maps Founder/runtime experience anchors to acceptance scenarios;
- EIS may operationalize but not weaken those anchors;
- implementation must preserve error/denial experience as well as happy path;
- Founder Runtime Verification covers real merchant experience;
- Completion Report includes an Experience Verification Matrix;
- backend correctness, CI, merged code or visible UI do not independently prove experience completion;
- if engineering convenience conflicts with locked UX, escalate to Mission Control/Founder rather than silently weakening UX.

---

## 14. Institutional memory and attribution guardrails

- Durable repository evidence should outlive chat memory.
- Preserve old reports even when corrected; append or supersede rather than erase the correction trail.
- Current truth, historical truth and institutional learning belong in separate conceptual layers.
- Do not retroactively fabricate modern Blueprints/EIS/stages for early missions.
- Attribute work by artifact provenance/byline, not by model-family or role plausibility.
- Historical sessions that cannot be recovered stay inaccessible; reconstruct only what durable evidence supports.
- Historical provider/account state is point-in-time evidence, not a permanent current-state assertion.

---

## 15. Team LIPS capabilities acquired in Phase 1

Evidence supports durable capability in:

- multi-room AI coordination under Founder/Mission Control authority;
- Git/GitHub repository-first delivery and protected-main workflows;
- Markdown/document quality gating and durable evidence practices;
- Lovable public/app building and runtime/publish verification;
- Supabase/Postgres/Auth/RLS multi-tenant architecture;
- schema/migration, audit, idempotency and concurrency reasoning;
- security/effective-permission verification;
- Claude/Claude Code repository-aware engineering and verification;
- Codex independent technical review and repository archaeology;
- production topology reconciliation;
- AWS IAM/OIDC/Lambda/Roles Anywhere foundations;
- Founder-origin Product Truth recovery and reconciliation;
- mature feature-contract authoring;
- global product-completion tracking and anti-drift controls.

A capability is reusable competence, not blanket authority.

---

## 16. Recommended future tooling

The retrospective set repeatedly recommends automating known verification burdens.

Priority candidates, each requiring separate adoption/implementation authority:

- application build/lint/test CI;
- cross-tenant RLS denial harness;
- permission-matrix regression harness;
- schema/generated-type drift checker;
- migration-environment currency ledger;
- canonical/delivery/runtime drift detector;
- `SECURITY DEFINER`/grant/service-role scanner;
- idempotency/retry/concurrency harness;
- contract-to-code/test/runtime traceability;
- Builder-report-vs-evidence checker;
- runtime evidence manifests;
- stale/overclaim language scanner;
- actor/byline convention.

Automation should reduce repeated mechanical verification and protect Founder judgement time, not transfer product authority to automation.

---

## 17. Current unresolved Founder decision queue

Do not guess:

1. current free-trial policy;
2. exact Voice Plus price;
3. exact Staff/HR price;
4. exact Smart Stock Assistant price;
5. exact Smart Order & Delivery price;
6. exact long-term retention/deletion duration after cancellation/non-payment;
7. employee KYC/national-ID requirement and legal/privacy basis;
8. broader wholesaler/marketplace expansion;
9. future third-party underwriting/lending/financial ecosystem.

Only surface the subset relevant to an active Product Mission.

---

## 18. Mission-start checklist for future rooms

Before touching a future `SB-P-*` mission, answer:

- What exact contracts does this mission advance?
- What current Founder/Product Truth controls this behavior?
- What UX anchors apply?
- What is already implemented and proven?
- What is historical only?
- What repository/environment/runtime is authoritative for this step?
- What permissions/security boundaries are involved?
- What success and denial/error scenarios prove the behavior?
- What shared foundations must be reused?
- What remains outside this mission but still committed?
- What requires Founder or Mission Control decision?
- Who builds, who verifies, who accepts?

If these cannot be answered without guessing, stop and reconcile first.

---

## 19. Compact Mission Control doctrine

The Phase 1 historical evidence supports this operating doctrine:

> **Maximum clarity, minimum necessary ceremony.**  
> **Reconcile before writing.**  
> **Close only what is proven.**  
> **Resume only the failed checkpoint.**  
> **Claim only what evidence demonstrates.**  
> **Local mission safety must never create global product incompleteness.**  
> **Build complete approved feature vertically, secure it by design, prove it, then move forward.**

---

## 20. Handover boundary

This guide closes the need to broadly reconstruct Phase 1 before every future mission.

Future work should start from current Product Truth, the mature contracts, the Founder-approved build plan, the Global Product Completion Register, current repository/runtime evidence and this institutional guide.

Raw historical extraction should be reopened only for a specific provenance question that cannot be safely resolved from durable current records.

**Historical extraction is provenance. Current Product Truth is authority. Product Missions are execution. Evidence is proof. Human judgement remains the owner.**