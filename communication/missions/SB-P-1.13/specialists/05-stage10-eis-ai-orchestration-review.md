# SB-P-1.13 — Stage 10 AI Behavior / Model Orchestration EIS Review

**Specialist ID:** S10-SP-2  
**Domain:** AI Behavior / Model Orchestration Safety  
**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation  
**Target PR:** #793  
**Target head:** `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**Target EIS blob:** `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`  
**Authority:** SB-P-1.13-MC-15 / `22-stage10-eis-ai-review-instruction.md`  
**Reviewer:** OpenAI GPT-5.6 Sol, current Team LIPS — Smart Business Build HQ specialist session  
**Date:** 2026-10-07 IST  
**Authority limit:** Findings only. No EIS edit, EIS acceptance/lock, implementation, provider activation, migration or production authority.

## 1. Independence gate

This is the same specialist room that authored the canonical Stage 7 S7-SP-2 AI Behavior / Model Orchestration Safety review. That prior report was an authorized input to the Stage 9 EIS.

This room did **not** participate in Claude Code's Stage 9 EIS drafting, requirement wording, traceability generation, repository edits or PR #793 preparation. The EIS author is Claude Code. The expected influence of the canonical Stage 7 findings creates correlated-assumption risk, so this review does not treat the EIS author's claims that those findings were "carried" as proof. The exact EIS was reread independently against the locked Founder decisions, accepted Mission Control dispositions and the Stage 7 specialist constraints.

PR #793 was rechecked immediately before completion and remained open/draft/unmerged at exact head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`. The reviewed file blob remained `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`.

**Independence gate:** PASS.

## 2. Findings

### AI-EIS10-01 — Stored delegation is too broad in the conversational confirmation rule

**Severity:** HIGH

**Affected EIS requirements / sections:** `EIS13-CNF-03`; Section 12; interacts with `EIS13-CNF-01`, `EIS13-CNF-02`, `EIS13-VOI-04`.

**Exact repository / design evidence:**

- `EIS13-CNF-03` says: consequential proposals never execute without confirmation **or valid stored delegation**.
- FPDR-1 requires the SB-P-1.13 governed create-transaction path to support: interpretation → clarification → preview → **confirmation binding** → execution-time permission revalidation → deterministic command → authoritative stored-state confirmation → audit/idempotency.
- Contract 22 §11 defines standing automation rules as stored delegated authority.
- Contract 22 §24–§25 preserves human decision ownership except where an explicit valid standing delegation covers execution.
- The same EIS states that the assistant does not itself schedule work.

**Merchant / security / operational consequence:**

Without a narrower rule, implementation could incorrectly treat a role/capability grant, Manager/Employee delegation, or ordinary permission as delegated confirmation. That would turn "allowed to do this kind of work" into "already authorized this exact consequential action" and weaken FPDR-1 human decision ownership.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

Refine `EIS13-CNF-03` so that:

- SB-P-1.13 Conversation Workspace and Basic Voice consequential proposals execute only through the exact `confirmation_bindings` path required by FPDR-1 / `EIS13-CNF-01`;
- a role, capability, membership, entitlement or ordinary delegated permission is **not** delegated confirmation;
- per-turn confirmation may be absent only where a separately approved domain/automation contract explicitly defines standing delegated execution authority;
- such automation/delegation is resolved outside the model through the shared authority system and is a distinct execution path, not a generic Conversation/Voice confirmation bypass.

No Founder decision is needed to make this distinction; it follows the existing Founder decision and shared-foundation contracts.

**T2/T3/T6/T7/T8 screen:** T2 no; T3 no; T6 no new trigger; T7 no; T8 no.

**Stage 10 implication:** Correction required before AI-orchestration Stage 10 disposition.

---

### AI-EIS10-02 — Typed tool schemas do not yet explicitly exclude all authority-bearing fields

**Severity:** HIGH

**Affected EIS requirements / sections:** `EIS13-TOOL-01`, `EIS13-TOOL-02`, `EIS13-AUTH-01`, `EIS13-AUTH-02`, `EIS13-CNF-01`; Sections 8, 10 and 12.

**Exact repository / design evidence:**

- Stage 7 AI-S7-05 was accepted by Mission Control as requiring an explicit typed-registry authority-exclusion contract.
- The locked Stage 7 Blueprint records this as an engineering constraint.
- `EIS13-TOOL-01` currently says a tool definition cannot grant or relax a capability, but it does not explicitly prohibit the model/tool payload from supplying principal, business, role, entitlement, capability decision, authority channel or confirmation state.
- `EIS13-TOOL-02` includes validation of business ownership and permission, which is safe only if those values are evaluated against server-derived authority rather than accepted from model output.

**Merchant / security / operational consequence:**

A schema can be syntactically valid while still containing authority-like fields. If implementation code accidentally trusts those fields, a model proposal could influence business selection, role/capability interpretation or confirmation state even though the overall architecture says authority is outside the model.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

Expand the typed-tool contract to state explicitly:

- model output may contain only domain/business arguments permitted by the tool schema;
- principal, active business, role, capability decision, entitlement, authority channel, object authorization scope, confirmation/binding identity and current authority state are never authoritative model fields;
- these values are derived or injected server-side after model-output validation;
- if model output contains an authority-bearing field, it is rejected or ignored as non-authoritative rather than merged into the execution context;
- business ownership and permission validation in `EIS13-TOOL-02` use the server-derived business/principal and the SB-P-1.12 kernel.

**T2/T3/T6/T7/T8 screen:** none triggered.

**Stage 10 implication:** Correction required before AI-orchestration Stage 10 disposition.

---

### AI-EIS10-03 — Cache and conversation-history reuse are not revocation-aware enough

**Severity:** HIGH

**Affected EIS requirements / sections:** `EIS13-GW-05`, `EIS13-CTX-02`, `EIS13-CTX-03`, `EIS13-AUTH-04`, `EIS13-WSP-05`; Sections 7–10.

**Exact repository / design evidence:**

- `EIS13-GW-05` permits safe caching keyed by business and principal.
- `EIS13-CTX-02` scopes caches and conversation state by business and principal.
- Stage 7 AI-S7-06, accepted by Mission Control, additionally required contextual/cached authority to be invalidated or re-evaluated after business switch or permission revocation.
- `EIS13-CTX-03` checks record versions and authority epochs before proposal preview, but it does not govern every cached read, previously generated conversational response, history render, or re-injection of old protected content into a later model turn.

**Merchant / security / operational consequence:**

A user whose role or capability changes could receive or re-feed previously cached Owner-only data because the business ID and principal ID are unchanged. Conversation history can likewise become a stale disclosure path after demotion/revocation even if new database retrieval is correctly denied.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

The EIS should require that:

- a protected cache hit never bypasses current authorization;
- protected cached/contextual material is reauthorized before serving, rendering or reinjecting into model context;
- cache entries either bind to relevant authority epoch/capability and source-state version or are invalidated when those states change;
- active-business change invalidates incompatible conversation/cache context;
- persisted conversation segments derived from protected business data carry enough capability/sensitivity/provenance metadata to withhold them when current authorization no longer permits disclosure;
- current authorization, not historical authorization at message creation time, controls protected re-display and model reuse.

**T2/T3/T6/T7/T8 screen:** none triggered; this is incomplete realization of an already accepted Stage 7 safety constraint.

**Stage 10 implication:** Correction required before AI-orchestration Stage 10 disposition.

---

### AI-EIS10-04 — Instruction/data separation needs a clearer user-request versus retrieved-content rule

**Severity:** MEDIUM

**Affected EIS requirements / sections:** Section 10 preamble; `EIS13-CTX-01`; `EIS13-GW-03`; `EIS13-VER-01`.

**Exact repository / design evidence:**

Section 10 states that merchant text, retrieved records, FAQ entries, attachment text and future WhatsApp payloads are all untrusted data and also says the gateway never lets data blocks "select tools." At the same time, `EIS13-GW-03` and the typed-tool pipeline require the merchant's own request to drive intent classification and a possible tool proposal.

`EIS13-CTX-01` is closer to the correct safety boundary because it says retrieved content cannot **enable** tools or alter capability requirements and embedded document instructions are content.

**Merchant / security / operational consequence:**

The current wording can be implemented in two unsafe directions:

- too permissive: document/FAQ/retrieved text is treated like the user's direct action request and induces an unrelated write proposal; or
- too restrictive: implementers weaken/ignore the rule because direct merchant requests necessarily influence tool proposals.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

Clarify the data-plane roles:

- all external content remains untrusted for authority;
- the authenticated merchant's current message may express an intent that can lead the model to propose a tool **only among application-allowed tools**;
- retrieved records, FAQ text, documents, attachments and quoted/embedded instructions cannot independently initiate a tool/action, enable a tool, widen capability requirements, or override the merchant's current request;
- tool availability and authority remain application/kernel decisions before execution;
- multilingual and document-borne prompt/tool-injection tests remain in `EIS13-VER-01`.

**T2/T3/T6/T7/T8 screen:** no new trigger; this refines the already accepted Stage 7 T6 instruction/data-separation constraint rather than creating new Product Truth.

**Stage 10 implication:** Correction required.

---

### AI-EIS10-05 — Provider/model evidence is gated initially but not explicitly invalidated by material routing/configuration changes

**Severity:** MEDIUM

**Affected EIS requirements / sections:** `EIS13-GW-02`, `EIS13-LANG-06`, `EIS13-PRV-01`, `EIS13-ENV-01`, Section 28.

**Exact repository / design evidence:**

- `EIS13-GW-02` makes model routing configurable and permits model/provider evolution under governance.
- `EIS13-PRV-01` correctly requires an evidence pack for provider, service, model, account, credential custody, retention, training use, abuse-monitoring retention, region, logging/deletion controls, language quality and latency before merchant data reaches the provider.
- `EIS13-LANG-06` gates provider activation/acceptance on governed multilingual evaluation.
- The EIS does not explicitly state that a material provider/service/model/routing or provider data-control configuration change invalidates the affected evidence and requires re-verification before merchant traffic continues.

**Merchant / security / operational consequence:**

A later "configuration-only" model switch could silently change Malayalam/Manglish quality, latency, data retention, regional handling, safety behavior or supported structured-output behavior while relying on evidence collected for a different model/configuration.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

Bind the provider evidence pack and multilingual evaluation to a versioned provider/service/model/routing/data-control configuration identity. A material change to any of those elements must:

- invalidate the affected evidence;
- require the relevant data-control and language/semantic evaluations again;
- remain behind the provider activation gate until re-verification is accepted;
- preserve the kill-switch/text fallback while evidence is stale.

This does not require Product Truth change and does not select a provider.

**T2/T3/T6/T7/T8 screen:** T3 remains conditional only if verified provider options cannot meet approved Product Truth; no trigger now.

**Stage 10 implication:** Correction required.

---

### AI-EIS10-06 — Deterministic command semantics are correct, but the command execution security mode remains a cross-specialist hold

**Severity:** HIGH

**Affected EIS requirements / sections:** `EIS13-CMD-01`, `EIS13-CMD-02`, `EIS13-HOLD-02`; Section 13.

**Exact repository / design evidence:**

- AI and Voice are correctly forbidden from raw `transactions.insert`.
- `EIS13-CMD-02` converges all protected transaction creation on `create_transaction_governed`.
- Mission Control Stage 10 preliminary finding EIS10-MC-01 identifies that the draft's proposed `SECURITY INVOKER` mode may be incompatible with the locked SB-P-1.12 command-only target once authenticated direct DML is removed.

**Merchant / security / operational consequence:**

The AI orchestration layer is safe only if the deterministic command it invokes is itself an effective, authorized write boundary. An orchestration-safe model cannot compensate for a command that either lacks required privilege after cut-over or requires an authority-bypassing grant.

**Classification:** Implementation/security design dependency requiring specialist correction/confirmation.

**Precise correction required:**

S10-SP-1 must determine the compatible database execution boundary. From the AI-orchestration side, the EIS must preserve only this invariant: AI/Voice call the single security-approved governed command and never obtain a raw/direct transaction write alternative. This report does not prescribe `SECURITY INVOKER` versus `SECURITY DEFINER`.

**T2/T3/T6/T7/T8 screen:** no AI-specific trigger established; T8 only if Security review finds no implementation-compatible command boundary, which is not established here.

**Stage 10 implication:** AI readiness remains dependent on S10-SP-1 disposition of EIS10-MC-01.

---

### AI-EIS10-07 — FPDR-4 "context absent" text fallback is a permissible EIS safety mechanism, not a new Founder decision

**Severity:** INFORMATIONAL

**Affected EIS requirements / sections:** `EIS13-SNS-01`; Section 18.

**Exact repository / design evidence:**

- FPDR-4 requires sensitive authorized content not to be spoken when sufficient context shows spoken delivery is inappropriate/unsafe; listening context never changes underlying permission.
- Mission Control's accepted Stage 6 B6-07 disposition explicitly states: where sufficient listening-context evidence is absent, implementation must choose a privacy-safe presentation consistent with FPDR-4 without changing underlying permission; no new sensing or merchant-visible privacy control is approved.
- `EIS13-SNS-01` chooses authenticated text when trustworthy unsafe context is present **or sufficient context is absent**, derives sensitivity from the authorizing capability, and prohibits ambient listening, bystander detection, geolocation or new sensing.

**Merchant / security / operational consequence:**

The mechanism errs toward private presentation while preserving the user's underlying authorization and avoids inventing surveillance signals.

**Classification:** Implementation verification requirement; no EIS Product Truth defect.

**Precise correction required:** None for the product-boundary point. Runtime verification must prove that the fallback changes presentation only, not permission, and that sensitivity comes from deterministic capability metadata rather than model judgment.

**T2/T3/T6/T7/T8 screen:** T3 NOT TRIGGERED. A later proposal for new sensing or a new merchant-visible privacy control would return under T3/T7.

**Stage 10 implication:** EIS10-MC-02 is cleared from the AI-specialist perspective.

---

### AI-EIS10-08 — Core Stage 7 AI-safety constraints are materially represented; remaining provider/runtime claims stay evidence-held

**Severity:** INFORMATIONAL

**Affected EIS requirements / sections:** `EIS13-AUTH-01`–`05`, `EIS13-CTX-01`–`03`, `EIS13-CNF-01`–`02`, `EIS13-IDM-01`–`02`, `EIS13-TEL-01`–`02`, `EIS13-FAQ-01`–`04`, `EIS13-LANG-06`, `EIS13-PRV-01`–`02`, `EIS13-FAIL-01`–`03`, `EIS13-CMD-03`, `EIS13-HOLD-01`–`03`.

**Exact repository / design evidence:**

The EIS correctly carries the principal Stage 7 AI findings:

- AI remains interpreter/proposer, never permission authority;
- protected retrieval is authorized before model exposure;
- frozen proposal prevents post-confirmation reinterpretation;
- field-level clarification and structured validation precede consequential writes;
- idempotency and `outcome_unknown` are first-class;
- "Recorded/Saved/Done" comes only from committed domain outcome;
- stored business truth overrides conversation memory;
- FAQ answers require approved provenance/version/no-answer handling;
- multilingual business-semantic evaluation is required;
- provider data controls are a hard pre-merchant-data gate;
- telemetry excludes prompt/transcript/raw-audio shadow archives;
- provider failure is narrow and honest;
- WhatsApp remains a later thin adapter and Meta-independent native operation is explicitly verified;
- FPDR-5 permits existing credit-payment-method sales but not mature owed-state/repayment truth.

Provider account/model/retention/training/region/logging/language-quality/latency/rollback and runtime implementation facts remain correctly marked `UNVERIFIED — ACCESS REQUIRED`.

**Merchant / security / operational consequence:**

The architecture preserves human decision ownership and deterministic business truth if the refinements above are applied and the held dependencies are later evidenced.

**Classification:** Evidence/activation gate only plus implementation verification requirements.

**Precise correction required:** No additional Product Truth correction. Do not convert any Section 28 or hold item into a positive implementation claim without evidence.

**T2/T3/T6/T7/T8 screen:** none newly triggered. Existing Stage 7 T6 constraints remain resolved engineering constraints.

**Stage 10 implication:** These areas do not independently block disposition after the required design refinements and cross-specialist command-security issue are resolved.

## 3. Stage 10 conclusion

AI ORCHESTRATION REFINEMENT REQUIRED
