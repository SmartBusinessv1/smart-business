# SB-DOC-PHASE1-HISTORY-1.0 — Lessons Learned Register

**Document status:** PHASE B — RECONCILIATION PASS 1 — EVIDENCE-BACKED DRAFT  
**Purpose:** Preserve the operational lessons Smart Business and Team LIPS learned through actual Phase 1 execution, including mistakes, corrections, failure modes and mature judgement.  
**Boundary:** Lessons are institutional memory unless separately promoted through approved governance. They do not automatically become new Product Truth or governance.

## 1. Classification model

Each lesson is recorded as:

`What happened → What we learned → What changed → Applicability`

Applicability is classified as one or more of:

- `Project-specific`
- `Smart Business governance candidate`
- `Team LIPS organization-wide capability`
- `Lighthouse principle reinforcement`

## 2. Evidence and infrastructure lessons

### L-01 — Prove before changing

**What happened:** Early Domain Verification deliberately required ownership/DNS evidence before subdomain changes. The same pattern later reappeared in runtime, migration and security work.

**Learned:** Consequential change should begin from verified target state, not assumptions.

**Changed:** Mission Control increasingly required observable evidence and explicit environment identity before execution.

**Applicability:** Team LIPS organization-wide capability.

### L-02 — Do not guess provider targets

**What happened:** SB-P-1.2 explicitly refused to invent the Lovable DNS target.

**Learned:** Missing provider configuration is an evidence gap, not permission to improvise.

**Changed:** Exact provider values became prerequisites for infrastructure steps.

**Applicability:** Team LIPS organization-wide capability.

### L-03 — Intermediate UI/provider messages are not final runtime truth

**What happened:** Browser/HTTP/HTTPS and later platform-state observations could appear contradictory until the exact request and final runtime were checked.

**Learned:** Interpret provider messages in context; verify the resulting runtime state.

**Changed:** Runtime verification increasingly separated provider metadata from actual behavior.

**Applicability:** Team LIPS organization-wide capability.

## 3. Identity, access and platform lessons

### L-04 — Email alias is not authentication identity

**What happened:** A Team LIPS email alias could receive mail but could not serve as an independent Google OAuth identity.

**Learned:** Email reachability, mailbox identity, Google login identity, SaaS account ownership and authorization are separate states.

**Changed:** Platform accounts were established through explicit authenticated identities and 2FA/MFA where appropriate.

**Applicability:** Team LIPS organization-wide capability.

### L-05 — Platform provisioning is not product implementation

**What happened:** `SB-INF-1.0 — Supabase Project Provisioning` created a healthy project while explicitly leaving schema/migrations/product implementation untouched.

**Learned:** A platform existing and being healthy does not mean a product capability exists.

**Changed:** Provisioning, connection and implementation became separate checkpoints.

**Applicability:** Team LIPS organization-wide capability.

### L-06 — Capability does not equal readiness or authority

**What happened:** Claude and later Lovable/Supabase connectors demonstrated broad capabilities before Smart Business had authorized their use.

**Learned:** Tool capability, Smart Business readiness and mission authority are different facts.

**Changed:** This matured into Source 17's capability/access/permission/authority discipline.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide capability.

### L-07 — Visible repository paths do not prove live synchronization provenance

**What happened:** ChatGPT/Claude-oriented contexts could display repository-style paths without proving whether the content came from live GitHub sync, Project Knowledge or attachments.

**Learned:** Content visibility does not prove connector provenance or current branch state.

**Changed:** Repository state is verified directly when provenance matters.

**Applicability:** Team LIPS organization-wide capability.

## 4. Product sequencing and builder lessons

### L-08 — Test AI restraint, not only build ability

**What happened:** Bootstrap calibration explicitly tested whether Lovable would avoid out-of-scope features such as inventory, WhatsApp, Ask CFO, staff, payments and unauthorized schema.

**Learned:** An AI builder is trustworthy only when it can respect boundaries as well as produce code.

**Changed:** Build prompts and contracts increasingly state prohibited scope explicitly.

**Applicability:** Team LIPS organization-wide capability.

### L-09 — Do not simulate capabilities in foundation UI

**What happened:** Early workspace/bootstrap work deliberately kept placeholder cards informational and non-interactive rather than displaying fake metrics or fake business functionality.

**Learned:** Foundation interfaces must not create false product truth.

**Changed:** Placeholder state became explicit, and real functionality was introduced mission by mission.

**Applicability:** Smart Business product-quality lesson; Team LIPS organization-wide capability.

### L-10 — Build access before business identity; identity before workspace; workspace before operations

**What happened:** SB-P-1.5 → 1.8 followed a dependency sequence from authentication to business identity to workspace to transaction operations.

**Learned:** Protected business systems should be built in dependency order, not demo-value order.

**Changed:** Later missions rely explicitly on accepted upstream foundations.

**Applicability:** Team LIPS organization-wide capability.

### L-11 — Error states are part of the security boundary

**What happened:** Business Workspace required error-masking refinement after implementation.

**Learned:** Internal errors can expose architecture or confuse users even when the happy path works.

**Changed:** Error responses became part of security/usability verification.

**Applicability:** Team LIPS organization-wide capability.

## 5. Repository and engineering-process lessons

### L-12 — GitHub storage is not enough; repository state must become canonical and auditable

**What happened:** Early repositories/documents evolved into a repository-first operating model with mission artifacts, migrations, evidence and AI instructions.

**Learned:** Durable implementation truth cannot depend on chat memory.

**Changed:** Source 17/18 formalized repository-first continuity and mission communication.

**Applicability:** Team LIPS organization-wide capability.

### L-13 — Fix the control path; do not bypass the control

**What happened:** A required Markdown Quality Gate could not run for a non-Markdown PR, creating a CI deadlock.

**Learned:** A broken required-check trigger should be corrected; weakening the check or adding meaningless files would corrupt the control system.

**Changed:** The CI path was repaired narrowly.

**Applicability:** Team LIPS organization-wide capability.

### L-14 — Report-writing loops can consume builder effort without improving product truth

**What happened:** SB-P-1.9 and SB-P-1.10 accumulated repeated report/version corrections and transient verification-document churn.

**Learned:** Evidence should be gathered first and reports stabilized outside expensive builder loops where possible.

**Changed:** Later Source 18 separates Builder Completion Report, independent verification, Evidence Package and formal Completion Report.

**Applicability:** Team LIPS organization-wide capability.

### L-15 — Preserve correction history rather than silently overwriting it

**What happened:** Earlier mission reports and findings sometimes moved through correction states before later acceptance.

**Learned:** A corrected outcome does not erase the earlier failure or evidence gap.

**Changed:** Later lifecycle rules preserve prior reports and corrective cycles.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide capability.

## 6. Runtime and verification lessons

### L-16 — Repository state is not runtime state

**What happened:** Later production recovery showed approved canonical code could differ from the delivery repository/Lovable production state.

**Learned:** Code being present or accepted in canonical GitHub does not prove it is running in production.

**Changed:** Repository, delivery, publish, domain and backend state are reconciled independently.

**Applicability:** Team LIPS organization-wide capability.

### L-17 — Evidence gap is not incompatibility

**What happened:** Initial parser runtime verification stopped because exact worker behavior could not be proven.

**Learned:** Inability to prove compatibility or incompatibility is its own state.

**Changed:** A separately authorized probe later established actual incompatibility.

**Applicability:** Team LIPS organization-wide capability.

### L-18 — Provider reachability is not application compatibility

**What happened:** A Cloudflare Worker default response proved the provider/runtime could be reached but not that the Smart Business parser could execute correctly there.

**Learned:** “Hello World”/provider health is weaker evidence than application-specific runtime proof.

**Changed:** Compatibility claims became scoped to the tested behavior.

**Applicability:** Team LIPS organization-wide capability.

### L-19 — Founder/operator attestation and independent technical verification are different evidence tiers

**What happened:** Runtime verification often required Founder screenshots/observations while technical verification came from repository/database/security evidence.

**Learned:** Neither should impersonate the other.

**Changed:** Later lifecycle explicitly separates Founder runtime findings from independent verification.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide capability.

## 7. Database and financial-integrity lessons

### L-20 — Idempotency is a concurrency contract, not just a UUID column

**What happened:** SB-P-1.10 automated tests exposed a real idempotency replay failure involving `SELECT ... FOR UPDATE`, RLS and query planning.

**Learned:** Idempotency must define serialization, payload fingerprints, replay behavior, terminal outcomes and residual races.

**Changed:** Inventory idempotency was corrected with earlier locking, plain lookup and targeted uniqueness handling; later Catalog contracts became more explicit.

**Applicability:** Team LIPS organization-wide engineering capability.

### L-21 — Financial/operational correction should preserve identity and audit history

**What happened:** SB-P-1.9 corrected transactions in place while preserving transaction ID and recording audit events.

**Learned:** User corrections should not destroy the history needed to explain financial truth.

**Changed:** Auditability became a core requirement for consequential changes.

**Applicability:** Smart Business product principle; Team LIPS organization-wide capability.

### L-22 — UI visibility is not authorization

**What happened:** RLS/business-isolation testing repeatedly proved permissions at the database boundary, not merely by hidden buttons/routes.

**Learned:** Permission truth belongs at the authoritative server/data boundary.

**Changed:** RLS and server-derived authority became mandatory design concerns.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide capability.

## 8. Security lessons

### L-23 — Security truth is effective privilege state, not intended SQL

**What happened:** Catalog/Supabase review identified that `GRANT SELECT` is additive and can leave broader inherited privileges unless they are explicitly revoked.

**Learned:** Security must verify the resulting ACL/role state, not assume the migration text produced least privilege.

**Changed:** Privilege-neutralize → narrow grant → verify effective state became the correct pattern.

**Applicability:** Team LIPS organization-wide security capability.

### L-24 — Confidentiality can require physical response-shape separation

**What happened:** Reference-cost review found that returning a protected field as `NULL` still exposes the field's existence/type to unauthorized clients.

**Learned:** Sensitive data can require structurally different server-selected response shapes.

**Changed:** Base and cost-authorized response shapes were separated.

**Applicability:** Team LIPS organization-wide security capability.

### L-25 — Confirmation must bind to the exact reviewed action

**What happened:** Catalog/WhatsApp specialist review found redundant client identifiers and weak confirmation binding could create mismatch/oracle risks.

**Learned:** A confirmation token should bind the exact action, target, expected state and actor context reviewed by the user.

**Changed:** Server-issued preview state became authoritative; redundant client-supplied identifiers were reduced.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide capability.

### L-26 — Revalidate permissions at execution time

**What happened:** AI/WhatsApp specialist review highlighted that permission at preview time may differ from permission at confirmation/execution time.

**Learned:** Consequential operations need current authority checks immediately before execution.

**Changed:** Execution contracts re-derive actor/business/authority from server state.

**Applicability:** Team LIPS organization-wide capability.

### L-27 — Authority provenance must describe what actually authorized the action

**What happened:** Catalog review rejected storing future permission-flag names as though they authorized current Owner-only operations.

**Learned:** Audit records must describe real current authority, not future conceptual permissions.

**Changed:** Owner authority provenance was bound to the actual business-owner relationship.

**Applicability:** Team LIPS organization-wide capability.

### L-28 — Bootstrap privilege is not permanent deployment/runtime privilege

**What happened:** IAM Roles Anywhere setup needed a one-time service-linked-role bootstrap permission.

**Learned:** One-time administration should not permanently broaden a deploy role.

**Changed:** Founder-controlled bootstrap was preferred over steady-state privilege expansion.

**Applicability:** Team LIPS organization-wide security capability.

### L-29 — Resource scoping alone may not protect a runtime invocation boundary

**What happened:** IAM review tightened Lambda invocation so direct invoke remained constrained to the intended Function URL/AWS_IAM path.

**Learned:** Invocation path can be part of the security boundary; resource ARN scope alone may be insufficient.

**Changed:** IAM conditions incorporated the intended call path.

**Applicability:** Team LIPS organization-wide security capability.

### L-30 — Missing safe production test fixtures are a prerequisite gap

**What happened:** A live cross-tenant security probe stopped because no clearly designated safe production test identities/businesses existed.

**Learned:** Verification authority does not authorize creating production identities/data just to manufacture evidence.

**Changed:** The test stopped and escalated the fixture gap.

**Applicability:** Team LIPS organization-wide security capability.

## 9. Production and platform-topology lessons

### L-31 — “Connection successful” does not prove exact backend identity

**What happened:** Lovable/Supabase history later exposed ambiguity between Lovable Cloud-managed backend state and the external Smart Business Supabase project.

**Learned:** Connectivity must be reconciled to exact project/environment identity.

**Changed:** Backend refs, migrations and runtime topology are verified explicitly.

**Applicability:** Team LIPS organization-wide capability.

### L-32 — Preserve target-specific platform state during synchronization

**What happened:** Later Lovable production recovery showed wholesale package/repository mirroring could overwrite target-specific state or bind the wrong runtime.

**Learned:** Synchronization should preserve intentionally different destination configuration while transferring the approved implementation.

**Changed:** Canonical→delivery reconciliation became scoped rather than naïve mirroring.

**Applicability:** Team LIPS organization-wide capability.

### L-33 — Reconcile before transfer or publication

**What happened:** Successor Mission Control and production recovery had to compare canonical GitHub, delivery repo, Lovable, Supabase and production domain state.

**Learned:** Handover/publication should begin from reconciled present truth.

**Changed:** Reconciliation became a precondition to transfer.

**Applicability:** Team LIPS organization-wide capability.

## 10. Mission Control judgement lessons

### L-34 — Close only the exact workstream proven complete

**What happened:** Later Mission Control rooms separated product acceptance, migration completion, runtime synchronization and communication closure instead of treating them as one generic “done”.

**Learned:** Closure must be scoped to the proven workstream.

**Changed:** Mission dispositions became narrower and more evidence-specific.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide capability.

### L-35 — Resume from the failed checkpoint, not from the beginning

**What happened:** Transient infrastructure/security failures were recovered by resuming the exact blocked checkpoint.

**Learned:** Preserve completed evidence and retry only the failed segment.

**Changed:** Corrective missions became narrower and less destructive.

**Applicability:** Team LIPS organization-wide capability.

### L-36 — Claim only what the evidence demonstrates

**What happened:** Multiple rooms corrected overstatements around platform readiness, runtime compatibility, security findings and publication state.

**Learned:** Precision increases trust more than confident language.

**Changed:** `PASS`, `FAIL`, `FOLLOW-UP`, `UNVERIFIED`, evidence-gap and current-vs-historical distinctions became more explicit.

**Applicability:** Lighthouse principle reinforcement; Team LIPS organization-wide capability.

### L-37 — Maximum clarity, minimum necessary ceremony

**What happened:** Mission Control matured from evidence-first caution into proportional controls, while correcting unnecessary procedural layers when existing protocol already managed the risk.

**Learned:** Strong governance and low bureaucracy are compatible when authority, evidence and scope are clear.

**Changed:** Use the narrowest control that genuinely protects trust, security, Product Truth and continuity.

**Applicability:** Inferred Mission Control doctrine — not automatically governance.

## 11. Historical-memory lessons

### L-38 — Current truth, historical truth and organizational learning are separate records

**What happened:** Later handover/recovery work found mission memory could be stale while historical communication remained true for its time and current runtime had moved again.

**Learned:** Do not overwrite history to make it resemble current state.

**Changed:** Historical continuity records now separate contemporaneous facts, later supersession and current authority.

**Applicability:** Team LIPS organization-wide capability.

### L-39 — Do not retroactively fabricate mature governance for early missions

**What happened:** Source 18 was created only after many early Product Missions were already executed.

**Learned:** A clean historical index must not pretend those missions had modern Blueprint/EIS/stage-gate artifacts at the time.

**Changed:** Early continuity files will be labeled `Historical Mission Continuity Record — NOT A RETROACTIVE PRODUCT BLUEPRINT`.

**Applicability:** Smart Business historical-governance requirement; Team LIPS organization-wide archival capability.

### L-40 — Preserve how the organization learned to know what was true

**What happened:** The reconstruction exposed not just features and commits, but failed assumptions, corrections, evidence upgrades and changing platform topology.

**Learned:** Institutional memory is strongest when it preserves reasoning quality and truth-discovery methods, not only final outcomes.

**Changed:** Lessons, capability evolution and evidence gaps are first-class outputs of this mission.

**Applicability:** Lighthouse principle reinforcement; Team LIPS organization-wide capability.

## 12. Founder-vision preservation and execution-speed lessons

### L-41 — Product Truth summary depth can still lose Founder workflow depth

**What happened:** The historical reconstruction showed that several Founder-developed capabilities survived in active sources only as short feature summaries. The original planning conversations often contained much richer detail about actors, workflow, exceptions, permissions, language, failure states, cross-feature relationships and intended merchant experience. Later engineering missions therefore inherited the feature name and broad boundary without always inheriting the full product behaviour the Founder had already worked through.

**Learned:** A feature name plus a short bullet list is insufficient for a product whose value lives in workflow detail. Compression can become product drift even when the summary is technically accurate.

**Changed:** A durable `docs/phase-1-mission-blueprint/smart-business-features/` layer is being created so confirmed Founder capabilities can be preserved at feature depth and inherited by future Product Blueprints, EIS work and Claude Code implementation.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide product-development capability.

### L-42 — `Add-on`, `Build Later`, `pilot sequencing` and `not in this mission` are different states

**What happened:** Historical planning used labels such as MVP, later, after pilot and add-on while later Founder decisions and current Product Truth sometimes promoted or clarified those same capabilities. Narrow SB-P missions also correctly rejected work outside their authorized scope. Across many handoffs, those different meanings could be interpreted as one generic reason not to build a confirmed capability.

**Learned:** Commercial packaging, roadmap timing, mission scope and product existence must never be conflated. `Add-on` does not mean `Build Later`. `Not authorized in this mission` does not mean `not part of Smart Business`. A superseded planning-era `later` suggestion cannot override a later Founder decision.

**Changed:** Feature records shall state current Founder intent, packaging, build classification, dependencies and superseded historical sequencing separately.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide execution capability.

### L-43 — Narrow mission safety requires a master product-completion view

**What happened:** Source 18 correctly evolved Smart Business toward tightly bounded Product Missions, explicit stage ownership and independent verification. However, mission-local scope discipline can create a fragmented experience when there is no equally strong persistent view of every confirmed capability the finished app must contain.

**Learned:** Narrow missions are good for safety, but product completeness must be tracked above the individual mission. Otherwise every room can be locally correct while the overall Founder vision advances too slowly or incompletely.

**Changed:** The Feature Definition Library shall act as a persistent product-completion input. Mission Control should know not only the current mission status but also which approved features are `UNDEFINED`, `DEFINED`, `BLUEPRINTED`, `EIS LOCKED`, `IMPLEMENTED`, `VERIFIED`, or `ACCEPTED`.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide program-management capability.

### L-44 — Governance must protect implementation, not become a substitute for implementation

**What happened:** As Smart Business matured, source files, evidence requirements, security review, communication protocols, lifecycle stages and historical continuity controls expanded substantially. Many of those controls solved real problems, but report/version loops and repeated narrow reviews also consumed significant execution attention.

**Learned:** More governance is not automatically safer. A control is valuable when it prevents a real failure, clarifies authority or produces necessary proof. Ceremony that repeats already-proven work slows the product and can indirectly increase drift by separating the Founder decision from eventual implementation.

**Changed:** Apply the existing doctrine `Maximum clarity, minimum necessary ceremony`: reuse evidence, resume from the exact failed checkpoint, parallelize independent reviews where safe, and avoid reopening already-settled Product Truth.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide capability.

### L-45 — A real blocker should have the narrowest possible blast radius

**What happened:** Phase 1 produced legitimate security, RLS, IAM, runtime, CI and evidence blockers. Those blockers were necessary and in several cases prevented unsafe execution. But a blocker affecting one dependency can be perceived or operationally treated as a reason to defer broader approved product work.

**Learned:** Security cannot be bypassed, but it also must not silently become product de-scoping. A blocker should stop only the unsafe dependent action unless evidence proves a wider stop is required.

**Changed:** Mission Control should record each blocker with: affected capability, exact dependency, why the block exists, what remains safe to continue, owner, evidence needed to unblock, and the precise resumption checkpoint.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide security/program capability.

### L-46 — Current-source inconsistency creates conservative AI behaviour and accidental delay

**What happened:** Historical and current source evolution left some lower-level framework wording behind later Founder decisions and Product Truth—for example voice packaging, Staff/HR classification, older voice-add-on terminology and earlier Daily Intelligence timing assumptions. An implementation AI facing two approved-looking statements may pause, narrow scope or preserve the older restriction rather than risk violating governance.

**Learned:** AI conservatism is often a rational response to inconsistent authority. Fast execution requires synchronized truth, not instructions telling builders to ignore conflicts.

**Changed:** After historical extraction, run a narrow source-reconciliation mission that compares each detailed feature record against Source 01, Source 11 and relevant frameworks; patch only proven conflicts under Founder/Mission Control authority and preserve historical wording in archives rather than active execution sources.

**Applicability:** Smart Business governance candidate; Team LIPS organization-wide knowledge-management capability.

### L-47 — Build vertically from a complete feature contract

**What happened:** Rich capabilities such as Smart Order & Delivery and Ask CFO span frontend, backend, permissions, AI, messaging, database state, failure handling and acceptance evidence. Building only a page, table or API slice does not complete the merchant capability.

**Learned:** The fastest secure path is not to reduce a feature into disconnected tasks; it is to define the whole capability once, then implement it vertically in bounded increments against one shared feature contract.

**Changed:** Remaining SB-P work should use the chain: `Founder Feature Definition → Product Blueprint → EIS → implementation package → frontend/backend/integration build → runtime verification → independent verification → acceptance`, while reusing existing foundations and avoiding duplicate architecture.

**Applicability:** Smart Business product-quality lesson; Team LIPS organization-wide engineering capability.

## 13. Prevention model — build fast, secure and faithful to Founder vision

The combined lessons now require five protections for the remainder of Phase 1:

1. **Preserve complete feature intent before implementation.** Every confirmed feature gets a durable feature record with purpose, users, workflows, permissions, edge cases, dependencies, non-goals and acceptance expectations.
2. **Keep one product-completion register.** Mission-local status must roll up to a complete view of the finished Smart Business app.
3. **Keep blockers narrow and explicit.** Record what is blocked, what is not blocked, why, and the exact unblock condition.
4. **Reconcile conflicting active sources once, not repeatedly inside every build mission.** Current Product Truth must be internally consistent before builders inherit it.
5. **Use security as a design property, not a late-stage stop sign.** RLS, tenant isolation, confirmation, auditability, privacy and least privilege should be designed into the feature EIS so secure implementation and fast implementation become the same path.

The intended operating result is:

**Founder vision preserved in full → one authoritative feature contract → narrow secure engineering design → vertical implementation → evidence-backed acceptance → next feature.**

## 14. Register result

The most important Phase 1 learning is now two connected patterns.

Truth-discovery pattern:

**observe → verify → act narrowly → record evidence → correct openly → preserve history → improve the system.**

Product-delivery pattern:

**preserve Founder intent → reconcile current truth → define the complete feature → design security into it → build vertically → verify once with strong evidence → move forward without reopening settled decisions.**

Together these protect the two things Smart Business needs at the same time:

**original Founder vision and secure execution velocity.**