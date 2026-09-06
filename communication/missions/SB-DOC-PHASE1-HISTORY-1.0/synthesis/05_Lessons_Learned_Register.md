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

## 12. Register result

The most important Phase 1 learning is not a single technical rule. It is a repeated pattern:

**observe → verify → act narrowly → record evidence → correct openly → preserve history → improve the system.**

That pattern is the strongest reusable Team LIPS capability produced by Smart Business Phase 1.
