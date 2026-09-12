# SB-DOC-PHASE1-HISTORY-1.0 — Lessons Learned Register

**Document status:** FINAL HISTORICAL SYNTHESIS — FOUNDER-ORIGIN Q1–100 + RECONCILIATION CONSOLIDATED  
**Purpose:** Preserve what happened, what failed, what Team LIPS learned, what changed, and which lessons now matter beyond one mission.  
**Boundary:** Institutional memory only unless separately promoted through approved governance. Lessons do not automatically become new Product Truth.

---

## 1. Classification model

Each lesson follows:

`What happened → What we learned → What changed → Applicability`

Applicability may be:

- Project-specific;
- Smart Business governance candidate;
- Team LIPS organization-wide capability;
- Lighthouse principle reinforcement.

---

## 2. Evidence and infrastructure lessons

### L-01 — Prove before changing

**What happened:** Domain/DNS, Supabase, runtime, IAM and production-sync work repeatedly exposed the risk of acting on assumed state.

**Learned:** consequential change starts from verified target state.

**Changed:** exact environment/provider identity and observable evidence became prerequisites.

### L-02 — Do not guess missing provider configuration

**What happened:** early subdomain work deliberately refused to invent the Lovable target.

**Learned:** missing data is an evidence gap, not permission to improvise.

### L-03 — Provider health is weaker than application proof

**What happened:** generic runtime/provider reachability did not prove parser compatibility.

**Learned:** scope claims to the behavior actually tested.

---

## 3. Identity, access and authority lessons

### L-04 — Email identity, login identity, account ownership and authorization are different states

This lesson emerged from Google Workspace / SaaS setup and later became broadly applicable across GitHub, Lovable, Supabase and AWS.

### L-05 — Capability does not equal readiness or authority

Claude, Lovable, Supabase, OpenAI, AWS and connectors may technically support an action while Smart Business has not authorized it.

**Changed:** authority became mission-scoped and explicit.

### L-06 — UI visibility is not authorization

RLS and server-derived authority must protect data even if UI routes/buttons are hidden.

---

## 4. Product sequencing and builder lessons

### L-07 — Build in dependency order, not demo-value order

`Access → Business Identity → Workspace → Operations → Inventory → Catalog` worked because each layer depended on the previous one.

Founder-origin recovery later extended this principle to future sequencing through shared Permissions, Conversation, AI, UDI, Reminder and Business Memory foundations.

### L-08 — Test AI restraint, not only build ability

Bootstrap work proved that a trustworthy builder must avoid out-of-scope features as reliably as it creates in-scope ones.

### L-09 — Foundation UI must not simulate product truth

Placeholder cards and fake metrics can mislead users and governance.

### L-10 — Respect existing merchant habits

Founder-origin evidence repeatedly reinforced that Smart Business should enrich notebook, WhatsApp and POS habits rather than insult or force replacement.

---

## 5. Repository and engineering-process lessons

### L-11 — Durable truth cannot depend on chat memory

**Changed:** GitHub became canonical implementation/evidence authority, while governance remains higher authority.

### L-12 — Fix the control path; do not bypass the control

A CI/Markdown gate deadlock demonstrated that broken controls should be repaired narrowly rather than weakened.

### L-13 — Preserve correction history

A corrected report or implementation does not erase the earlier failure, evidence gap or correction cycle.

### L-14 — Maximum clarity, minimum necessary ceremony

Strong governance works best when controls are proportional, evidence-backed and narrow.

---

## 6. Runtime and verification lessons

### L-15 — Repository state is not runtime state

Production recovery showed that accepted canonical code can still diverge from delivery/Lovable/runtime state.

### L-16 — Evidence gap is not incompatibility

An inability to prove runtime behavior must remain an evidence gap until a separate authorized probe establishes the truth.

### L-17 — Founder runtime evidence and independent technical verification are different evidence tiers

Neither should impersonate the other.

### L-18 — Mission completion is not feature completion

A local SB-P mission may advance one confirmed feature without completing the mature feature globally.

**Changed:** Mission Control now maintains the Global Product Completion Register.

---

## 7. Database and financial-integrity lessons

### L-19 — Idempotency is a concurrency contract

SB-P-1.10 exposed a real RLS/query-planning interaction defect.

**Learned:** idempotency needs serialization, replay semantics, payload binding and residual-race analysis—not just a key column.

### L-20 — Corrections should preserve identity and audit history

Financial/operational correction must remain explainable.

### L-21 — Confirmation must bind the exact reviewed action

A user confirmation is trustworthy only if target, state, actor and action remain bound and are revalidated at execution.

This lesson later blocked direct promotion of the Lovable opening-stock import as-is.

---

## 8. Security lessons

### L-22 — Security truth is effective privilege state

Migration text and intended grants are weaker than actual resulting ACL/RLS/IAM state.

### L-23 — Confidentiality may require different response shapes

Returning a sensitive field as `NULL` can still expose its existence/type.

### L-24 — Revalidate permission at execution time

Preview-time permission does not guarantee execution-time permission.

### L-25 — Bootstrap privilege is not steady-state privilege

One-time setup rights should not permanently broaden deploy/runtime roles.

### L-26 — Invocation path can be part of the security boundary

Resource ARN scope alone may be insufficient where direct invoke vs approved Function URL matters.

---

## 9. Production topology lessons

### L-27 — “Connected” does not prove exact backend identity

A Lovable↔Supabase connection must be reconciled to the exact project/environment.

### L-28 — Preserve target-specific platform state during sync

Whole-repo mirroring can overwrite intentionally different destination configuration.

### L-29 — Reconcile before transfer/publication

Canonical repo, delivery repo, Lovable project, Supabase and production domain must be compared before claiming parity.

### L-30 — Builder-side code is evidence, not canonical completion

The opening-stock/import reconciliation established that useful builder implementation may still require rebase, architecture correction and current verification before promotion.

---

## 10. Founder-origin product lessons

### L-31 — Preserve the merchant problem even when the mechanism changes

Historical recovery showed many old mechanisms were obsolete while the underlying Founder-created capability remained valid.

**Changed:** use the five-bucket reconciliation model rather than binary keep/delete thinking.

### L-32 — Add-on does not mean Build Later

Commercial packaging and build commitment are different dimensions.

### L-33 — AI Assistant, Not AI Judge

Historical hard blocking, accusatory fraud/loss language, continuous staff surveillance, automatic punishment and uncontrolled automation conflict with current dignity/authority principles.

### L-34 — Trigger does not create permission

Reminder due dates, reorder thresholds or AI confidence do not create authority. Consequential action requires current permission plus explicit confirmation or valid bounded delegation.

### L-35 — Ask CFO is clarity, not authority

Insight may continue into a governed action flow, but Ask CFO itself remains read-only and non-authoritative.

### L-36 — Warn-not-block for Smart Credit

Credit intelligence supports Owner decisions; it does not silently overrule the Owner.

---

## 11. Product-definition and anti-drift lessons

### L-37 — Short source descriptions can compress real Founder intent

Planning summaries and current sources sometimes preserved the headline but lost workflow depth.

**Changed:** Q1–100 recovery + mature Feature Definition Library preserve depth explicitly.

### L-38 — Historical evidence may expose source drift but may not silently rewrite constitutional Product Truth

**Changed:** Current-Source Reconciliation Ledger separates clarification/amendment candidates from historical provenance.

### L-39 — One anti-drift register cannot answer every question

Different controls now answer different questions:

- what survives/evolves/rejects;
- whether any recovered behavior disappeared;
- what the product is;
- how much is implemented;
- what blocks it;
- whether current source wording needs clarification.

### L-40 — Zero unexplained residuals is stronger than “looks complete”

The coverage pass requires every preserved behavior to have a mature destination, delegated shared foundation or explicit unresolved Founder decision.

---

## 12. Historical-memory lessons

### L-41 — Current truth, historical truth and organizational learning are separate records

Do not rewrite an old topology or decision merely because current state changed.

### L-42 — Do not retroactively fabricate mature governance for early missions

Source 18 came later. Early mission continuity should be reconstructed faithfully, not made artificially compliant with future rules.

### L-43 — Institutional memory should preserve judgement, not just events

The point of historical reconstruction is not archival volume. It is to preserve why decisions changed, what failed, and what Team LIPS should not have to relearn.

---

## 13. Final lessons result

The strongest organization-level lessons are:

**prove before changing; distinguish authority from capability; preserve correction/evidence history; protect merchant dignity and human decision ownership; sequence by dependencies; verify effective runtime/security state; reconcile topology before claims; preserve Founder intent without reviving obsolete mechanisms; and maintain durable anti-drift controls.**

**Lessons Learned Register status: FINAL for the recovered Phase 1 evidence currently in scope.**
