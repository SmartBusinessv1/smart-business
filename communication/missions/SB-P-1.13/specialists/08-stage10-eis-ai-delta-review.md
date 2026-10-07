# SB-P-1.13 — Stage 10 AI Orchestration Delta Review

**Specialist ID:** S10-DR-2  
**Domain:** AI Behavior / Model Orchestration Safety  
**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation  
**Authority:** SB-P-1.13-MC-17  
**Instruction:** `communication/missions/SB-P-1.13/mission-control/28-stage10-ai-delta-review-instruction.md`  
**Exact target PR:** #793  
**Exact target head:** `90311eb7d7ea2a4a4d1619e5a969e69790fe3295`  
**Exact corrected EIS blob:** `821badea37ba349f6aa83ed7d5a83b405c3038bd`  
**Pre-refinement head:** `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**Pre-refinement EIS blob:** `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`  
**Reviewer:** OpenAI GPT-5.6 Sol, current Team LIPS — Smart Business Build HQ specialist session  
**Review type:** Finding-closure delta review only  
**Date:** 2026-10-07 IST  
**Authority limit:** Findings only. No EIS edit, PR #793 edit, EIS acceptance/lock, implementation, migration, provider activation, production or delivery authority.

## 1. Independence / contribution separation

This is the same specialist room that authored:

- the canonical Stage 7 S7-SP-2 AI Behavior / Model Orchestration Safety review; and
- the canonical Stage 10 S10-SP-2 AI Behavior / Model Orchestration Safety review containing `AI-EIS10-01` through `AI-EIS10-08`.

Those earlier findings were inputs to Mission Control and to Claude Code's MC-16 refinement work. That creates an expected correlated-assumption risk.

This room did **not** author, edit or materially shape the MC-16 correction commit on PR #793. Claude Code authored the corrected EIS. This delta review therefore reread the exact corrected requirements at head `90311eb7d7ea2a4a4d1619e5a969e69790fe3295` and did not treat the correction register's closure claims as proof.

Immediately before substantive review:

- PR #793 was OPEN / DRAFT / UNMERGED;
- PR #793 head matched `90311eb7d7ea2a4a4d1619e5a969e69790fe3295`;
- the EIS blob matched `821badea37ba349f6aa83ed7d5a83b405c3038bd`.

**Independence / contribution-separation gate: PASS.**

## 2. Delta scope reviewed

Per MC-17 and the S10-DR-2 instruction, this review is limited to finding closure for:

- **C3** — revocation-safe conversation/history/cache reuse;
- **C4** — confirmation/delegation and spoken-confirmation safety;
- **C5** — tool authority exclusion and instruction/data separation;
- **C7** — versioned provider/model configuration evidence and re-verification;
- AI-relevant command/security intersections affected by the corrected wording.

The exact corrected EIS requirements inspected include:

- `EIS13-WSP-05`;
- `EIS13-GW-02`, `EIS13-GW-05`;
- `EIS13-CTX-01`, `EIS13-CTX-02`, `EIS13-CTX-03`;
- `EIS13-LANG-06`;
- `EIS13-TOOL-01`, `EIS13-TOOL-02`;
- `EIS13-CNF-01`, `EIS13-CNF-02`, `EIS13-CNF-03`;
- `EIS13-CMD-01`, `EIS13-CMD-02`, `EIS13-CMD-03`;
- `EIS13-IDM-01`, `EIS13-IDM-02`;
- `EIS13-TEL-02`;
- `EIS13-VOI-04`, `EIS13-VOI-05`, `EIS13-VOI-10`;
- `EIS13-SNS-01`;
- `EIS13-FAIL-01`, `EIS13-FAIL-03`;
- `EIS13-PRV-01`, `EIS13-PRV-02`;
- `EIS13-ENV-01`;
- `EIS13-VER-01`;
- `EIS13-HOLD-01`, `EIS13-HOLD-02`;
- Sections 12, 13, 14, 18, 20, 21, 24, 27, 28 and 30.

No full 651-row structural audit was repeated because MC-17 independently verified traceability integrity and no concrete mapping defect was found during this delta review.

## 3. Finding-by-finding closure

| Finding | Original status | Corrected EIS evidence | Delta disposition |
|---|---|---|---|
| `AI-EIS10-01` — stored delegation too broad in conversational confirmation | HIGH — correction required | `EIS13-CNF-03` now requires all SB-P-1.13 Conversation and Basic Voice consequential proposals to use `confirmation_bindings`; role, membership, capability, entitlement and ordinary delegated permission are explicitly **not confirmation**. Per-turn confirmation may be absent only under a separately approved standing-automation/delegated-execution contract on a distinct governed path; none is defined in this mission. Section 12 repeats that delegated permission never substitutes for confirmation. `EIS13-VOI-04` further binds spoken confirm/reject to an explicitly armed capture for the exact proposal/binding/fingerprint. | **RESOLVED** |
| `AI-EIS10-02` — tool schemas did not explicitly exclude authority-bearing fields | HIGH — correction required | `EIS13-TOOL-01` now limits model tool inputs to domain arguments and explicitly excludes principal/authenticated actor, active business, role, capability decision, entitlement, authority channel, object authorization scope, confirmation/binding identity and current authorization state. If present, such model fields are rejected as non-authoritative and never merged; the server derives/injects them after validation. `EIS13-TOOL-02` evaluates ownership and permission against server-derived principal/business through the SB-P-1.12 kernel. `EIS13-VER-01` adds authority-field-exclusion tests. | **RESOLVED** |
| `AI-EIS10-03` — cache/history reuse was not sufficiently revocation-aware | HIGH — correction required | `EIS13-WSP-05` records capability, object scope, sensitivity class and source provenance for protected persisted segments. `EIS13-CTX-02` binds caches/conversation state to business, principal, authority epochs and source-state version; allow→deny or active-business change becomes a miss. `EIS13-CTX-03` requires current authorization before every protected cache serve, history render, summary and model reinjection; role/capability/membership/entitlement/business changes invalidate or reauthorize prior context; historical permission never continues. `EIS13-GW-05` makes protected cache hits consume this binding. `EIS13-VER-01` adds revocation-safe reuse verification. | **RESOLVED** |
| `AI-EIS10-04` — instruction/data separation did not clearly distinguish user request from retrieved/embedded content | MEDIUM — correction required | `EIS13-CTX-01` now states that the authenticated merchant's current message may express intent leading to a proposal only among application-available tools, while retrieved records, documents, FAQ content, attachments, quoted/embedded third-party instructions and future WhatsApp payloads cannot independently initiate an action, enable a tool, widen authority, change capability requirements, override the merchant's current request or create delegated authority. Embedded instructions remain content. `EIS13-VER-01` includes retrieved-content and multilingual/document-borne injection tests. | **RESOLVED** |
| `AI-EIS10-05` — provider/model evidence was not invalidated by material configuration changes | MEDIUM — correction required | `EIS13-PRV-01` binds evidence to a versioned provider configuration identity covering provider/service/model/account/project/routing/data controls/region/credential custody/adapter-config/language-quality/latency/evidence metadata; runtime calls carry that identity. Material change invalidates affected evidence and stops merchant data until re-verification. `EIS13-PRV-02` engages the kill switch when active evidence is stale. `EIS13-GW-02` makes provider/model/routing change create a new identity requiring re-verification. `EIS13-LANG-06` binds multilingual results to that identity and requires re-run after material change. `EIS13-ENV-01` makes the active identity versioned configuration. | **RESOLVED** |
| `AI-EIS10-06` — deterministic command semantics correct but command security mode was a cross-specialist hold | HIGH — cross-specialist correction/confirmation required | Section 13 now defines one coordinated transactions-family cut-over with no dual-write or broken-command window. `EIS13-CMD-01` requires protected writes only through kernel-checked commands, never authenticated direct DML. `EIS13-CMD-02` now adopts the SB-P-1.12 narrow-executor `SECURITY DEFINER` contract with a `NOLOGIN NOINHERIT` executor, hardened `search_path`, narrow grants and kernel checks; Structured Transactions UI, Conversation and Voice all call the same command; AI/Voice never expose raw `transactions.insert`. `EIS13-HOLD-02` remains held until cut-over/effective-access evidence proves no alternate write path. | **RESOLVED FOR AI ORCHESTRATION**. Independent S10-DR-1 Security closure remains separately authoritative for database-security correctness; no AI-side bypass or second command path remains in the corrected design. |
| `AI-EIS10-07` — FPDR-4 context-absent authenticated-text fallback is permissible | INFORMATIONAL / cleared | `EIS13-SNS-01` is unchanged: sensitivity is derived from the authorizing capability; unsafe or absent sufficient listening context falls back to authenticated text; no ambient listening, bystander detection, location or new sensing; listening context never changes permission. C4's `EIS13-VOI-04` adds explicitly armed confirmation capture without ambient/bystander inference. Nothing in the correction turns this into a new merchant-visible privacy control or a permission rule. | **REMAINS CLEARED / NO CORRECTION REQUIRED** |
| `AI-EIS10-08` — core Stage 7 AI-safety constraints represented; provider/runtime facts stay evidence-held | INFORMATIONAL / cleared | Corrected EIS preserves authority outside the model, frozen proposals, execution-time revalidation, idempotency and first-class `outcome_unknown`, authoritative-result-only success language, FAQ provenance/no-answer behavior, multilingual evaluation, telemetry minimization, graceful failure, WhatsApp independence and FPDR-5. Section 28 continues to mark provider/account/model/retention/training/region/logging/language-quality/latency/rollback and runtime facts `UNVERIFIED — ACCESS REQUIRED`. `D12`, `DTX`, provider, multilingual, confirmation/idempotency and runtime holds remain explicit in Section 27. | **REMAINS CLEARED / NO REGRESSION** |

## 4. Required minimum-test disposition

### 4.1 Ordinary delegation cannot bypass confirmation

**PASS.**

`EIS13-CNF-03` explicitly separates permission/delegation from exact-action approval. Ordinary delegated permission can establish whether an actor may make a proposal, but it cannot consume or replace the proposal's confirmation binding.

### 4.2 Standing automation/delegated execution remains a separate contract/path

**PASS.**

The corrected EIS permits absence of per-turn confirmation only under a separately approved standing-automation/delegated-execution contract, outside the model, through the shared authority system and on a distinct governed path. It expressly states that none is defined in SB-P-1.13.

This preserves the distinction between:

- permission/delegation to act;
- confirmation of the current Conversation/Voice proposal; and
- separately approved standing automation authority.

### 4.3 Tool schemas cannot carry authority-bearing fields

**PASS.**

`EIS13-TOOL-01` explicitly excludes the authority-bearing field classes identified by S10-SP-2 and rejects them as non-authoritative if the model emits them.

### 4.4 Authority is server-derived after validation

**PASS.**

`EIS13-TOOL-01` states server derivation/injection after model validation. `EIS13-TOOL-02` checks ownership/permission using server-derived principal/business through the SB-P-1.12 kernel. `EIS13-CNF-02` revalidates at commit.

### 4.5 Merchant current request is distinct from retrieved/embedded instructions

**PASS.**

`EIS13-CTX-01` now makes the distinction explicit.

### 4.6 Retrieved content cannot initiate/widen authority/tools

**PASS.**

Retrieved/embedded content cannot independently initiate actions, enable tools, widen authority, change capability requirements, override the merchant request or create delegated authority.

### 4.7 Cache/history/model-context reuse is current-authority/revocation-aware

**PASS.**

C3 now covers protected cache serving, history rendering, summaries and model reinjection—not only proposal preview. Current authorization controls disclosure/reuse.

### 4.8 Provider/model evidence is configuration-version-bound and invalidates on material change

**PASS.**

C7 binds evidence to the active provider configuration identity, requires runtime use of that identity, invalidates stale evidence on material change, blocks merchant data until re-verification and preserves kill-switch/text fallback.

### 4.9 Governed command remains the sole deterministic write path

**PASS FROM AI-ORCHESTRATION PERSPECTIVE.**

`EIS13-CMD-01` / `CMD-02` define one governed transaction command for structured UI, Conversation and Voice, prohibit authenticated direct DML as the target state, prohibit AI/Voice raw insert and keep all 17 DTX rows held until effective-access evidence proves the cut-over.

Database security-mode correctness is independently reviewed by S10-DR-1 and is not re-adjudicated here.

### 4.10 FPDR-4 context-absent authenticated-text fallback stays within existing Product Truth

**PASS.**

No new sensing, speaker inference, bystander detection, geolocation or merchant-visible privacy control is introduced. The fallback changes only output modality, never underlying permission.

## 5. Regression review

**No AI-orchestration regression found in the authorized delta scope.**

Specifically, the MC-16 correction did not weaken:

- model-as-proposer / authority-outside-model separation;
- authorization-before-retrieval;
- frozen proposal immutability;
- execution-time authority revalidation;
- field-level clarification / structured validation;
- deterministic command execution;
- idempotency or first-class unknown outcome;
- authoritative-domain-outcome-only success language;
- stored business truth over conversation history;
- FAQ provenance/version/no-answer/escalation;
- English/Malayalam/Manglish governed evaluation;
- telemetry minimization;
- graceful provider failure;
- WhatsApp independence;
- FPDR-5 credit boundary;
- provider/runtime evidence holds.

No corrected wording gives the model new permission, business-selection authority, confirmation authority, delegated authority or autonomous scheduling authority.

## 6. Provider/runtime evidence status

The corrected EIS improves **evidence binding**, but it does not supply the missing provider/runtime evidence.

The following therefore remain exactly as required:

**UNVERIFIED — ACCESS REQUIRED**, including provider/service/model identity, account/project identity, retention, training/improvement use, abuse-monitoring retention, regional processing, logging/deletion behavior, credential custody, Malayalam/Manglish quality, latency, rollback behavior and other Section 28 runtime/environment facts.

This delta review does not infer any of those facts and does not authorize provider selection or activation.

## 7. Trigger screen

| Trigger | Delta result |
|---|---|
| **T2 — conflict among approved sources** | **NOT TRIGGERED.** The corrected AI requirements align with FPDR-1 through FPDR-5, locked shared-foundation contracts, MC-16 and MC-17. |
| **T3 — new Founder product decision** | **NOT TRIGGERED.** C3/C4/C5/C7 are implementation/safety refinements. FPDR-4 remains inside the existing Mission Control interpretation; no new sensing/control is introduced. Provider/language issues remain conditional future Founder matters only if later evidence proves approved Product Truth cannot be met. |
| **T6 — material derived constraint** | **NOT TRIGGERED anew.** C3/C4/C5/C7 implement already accepted Stage 7/Stage 10 engineering constraints. |
| **T7 — omission/deferral/pull-forward/reclassification/reassignment** | **NOT TRIGGERED.** No mission ownership or FCTM disposition is changed by these corrections. |
| **T8 — conflict/infeasibility/material integrity conflict** | **NOT TRIGGERED by this AI delta review.** The corrected design retains one governed write path and current-authority checks. Independent Security delta review remains the authority for database-security closure. |

## 8. Delta conclusion

AI ORCHESTRATION DELTA READY FOR MISSION CONTROL STAGE 10 DISPOSITION

## 9. Authority boundary

This finding-closure review does **not**:

- accept or lock the EIS;
- authorize merge of PR #793;
- authorize Stage 11;
- authorize an implementation package or implementation;
- authorize code, SQL, schema or migrations;
- select or activate an AI/voice provider;
- mutate production;
- authorize delivery.

PR #793 remains under Mission Control governance.

## 10. Specialist handoff

Repository submission branch:

`mission/SB-P-1.13-stage10-eis-ai-delta-review`

This report is the only repository path authored by S10-DR-2. Final immutable commit SHA, report blob SHA and pull-request number are returned to Mission Control in the specialist handoff after repository submission; they cannot be self-embedded into the report without changing the identifiers they describe.

**STOP.**
