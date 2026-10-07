# SB-P-1.13 — Stage 10 Consolidated EIS Refinement Authorization

**Mission Control decision ID:** SB-P-1.13-MC-16  
**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation  
**Stage:** 10 — EIS Review / Refinement  
**Prepared:** 2026-10-07 IST  
**Canonical baseline:** `main@ca1ae82bed3c87ca1350b06011e3688995cd1156`  
**EIS candidate:** PR #793 exact head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**Reviewed EIS blob:** `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`  
**Status:** DRAFT AUTHORIZATION — EFFECTIVE ONLY AFTER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION

## 1. Canonical specialist evidence

All three required Stage 10 specialist reports are canonical:

- Security / Permissions: `specialists/04-stage10-eis-security-review.md`, blob `4fd819c0e029d7bf2fc05e7896fc4f937d22dea1`, conclusion `SECURITY REFINEMENT REQUIRED`;
- AI Behavior / Orchestration: `specialists/05-stage10-eis-ai-orchestration-review.md`, blob `6b23ca360362246a06e1dfa9b764e3897c0093f4`, conclusion `AI ORCHESTRATION REFINEMENT REQUIRED`;
- Voice / Provider: `specialists/06-stage10-eis-voice-provider-review.md`, blob `186296cc125eac70c45c1c159dc0a555274f6bb8`, conclusion `VOICE / PROVIDER REFINEMENT REQUIRED`.

No specialist requires a Founder/Product Truth decision.

PR #793 remains `HOLD — DO NOT MERGE`.

## 2. Consolidated Mission Control disposition

The specialist findings overlap materially. Mission Control therefore authorizes one narrow correction cycle rather than fourteen disconnected edits.

The EIS must be refined in these seven consolidated packages:

### C1 — Governed transaction command and coordinated cut-over

Reconcile `EIS13-CMD-02` with the locked SB-P-1.12 command-only/narrow-executor model.

Required invariant:
- no protected transaction write path may depend on re-granting direct authenticated DML;
- the final governed transaction command must consume the locked upstream executor/function-owner contract;
- structured UI, Conversation and Voice converge on the same governed command;
- command creation, caller migration, direct-DML revocation and cut-over verification form one coordinated transactions-family cut-over with no dual-write or broken-command window.

This consolidates Security findings SEC13-EIS-S10-01 and -05 and the AI cross-specialist dependency AI-EIS10-06.

### C2 — New-object access contract and privileged-handler boundary

For new SB-P-1.13 tables/functions, define the complete access posture:
- RLS enable/force posture where applicable;
- exact effective grants and default-privilege treatment;
- object/row scope;
- command-only writes where required;
- function owner/executor model and hardened definer invariants where applicable;
- `PUBLIC` / `anon` / `authenticated` effective access;
- safe response projection;
- server/service-role privileged-handler rules;
- service role never becomes authority.

This consolidates Security findings SEC13-EIS-S10-02 and -04.

### C3 — Revocation-safe conversation, history and cache reuse

Current authorization must control protected content whenever it is:
- served from cache;
- rendered from conversation history;
- reinjected into later model context;
- reused after role/capability/active-business change.

Protected context must bind to sufficient authority/sensitivity/provenance state or be invalidated/re-authorized so historical permission never becomes continuing permission.

This consolidates Security SEC13-EIS-S10-03 and AI AI-EIS10-03.

### C4 — Confirmation, delegation and spoken-confirmation safety

Clarify that:
- role, capability, membership, entitlement or ordinary delegation is not confirmation;
- SB-P-1.13 consequential Conversation/Voice proposals remain bound to the FPDR-1 confirmation path;
- only a separately approved standing-automation/domain contract may define standing delegated execution authority, through a distinct governed path;
- spoken confirm/reject consumes only the frozen proposal;
- spoken confirmation requires an explicit deterministic armed capture context bound to the proposal/binding, actor and active business;
- stale, duplicate, replayed, background or out-of-window audio cannot execute;
- no ambient/bystander surveillance is introduced.

This consolidates AI AI-EIS10-01 and Voice S10-VOICE-02.

### C5 — Tool authority exclusion and instruction/data separation

Make explicit that model/tool payloads cannot authoritatively supply or alter:
- principal;
- active business;
- role;
- capability decision;
- entitlement;
- authority channel;
- object authorization scope;
- confirmation/binding identity or state.

Those values are server-derived after model-output validation.

Also distinguish the authenticated merchant's current request from retrieved/embedded untrusted content:
- the current request may lead to a proposal only among application-allowed tools;
- retrieved records, FAQ text, attachments and embedded instructions cannot independently initiate actions, enable tools, widen capability requirements or override the user's current request.

This consolidates AI AI-EIS10-02 and -04.

### C6 — Transient attachment and raw-audio handling

Define explicit transient-data contracts for both attachments and Voice audio.

For raw audio, cover the complete C-10/FPDR-3 persistence surface:
- client/browser buffers and app-controlled local caches;
- request-body/multipart/stream buffering;
- framework/runtime spill;
- proxy/CDN/edge body capture and diagnostics;
- logs/error/crash/APM/observability;
- queues/dead-letter/retry persistence;
- analytics/test fixtures/backups;
- provider transport boundary, with provider retention separately governed.

For attachments, define:
- allowed staging class;
- verified principal + business binding;
- unguessable references;
- bounded TTL;
- deterministic cleanup on success/failure/expiry/abandonment;
- no telemetry/log/error payload copy, backup or dead-letter persistence;
- reauthorization before status/download/handoff;
- fail closed if a safe transient mechanism is unavailable.

This consolidates Security SEC13-EIS-S10-06 and Voice S10-VOICE-01.

### C7 — Versioned provider/model configuration evidence and re-verification

Bind provider evidence and multilingual evaluation to a versioned configuration identity covering, as applicable:
- provider/service/model;
- organization/account/project;
- routing;
- retention/training/abuse-monitoring/data-control settings;
- regional processing;
- Smart Business adapter/config version;
- evidence date/verifier.

A material provider/model/routing/data-control change invalidates affected evidence and requires re-verification before merchant data continues to flow. Text fallback/kill switch remains available while evidence is stale.

This consolidates AI AI-EIS10-05 and Voice S10-VOICE-03.

## 3. Findings resolved without EIS correction

Mission Control records:

- FPDR-4 authenticated-text fallback when sufficient safe listening context is absent does **not** require new Product Truth. AI S10-SP-2 clears EIS10-MC-02 from the product-boundary perspective.
- D12 hold coverage remains correct.
- all 17 DTX rows remain held.
- confirmation binding/idempotency/unknown-outcome direction remains valid subject to the corrections above.
- provider/runtime facts remain `UNVERIFIED — ACCESS REQUIRED`.
- no T2 or T3 gate is presently triggered.

## 4. Authorized correction target

After this authorization becomes canonical, Claude Code may refine **PR #793 only**.

The target before any correction must still be:
- PR #793 OPEN / DRAFT / UNMERGED;
- head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`;
- reviewed EIS blob `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`.

If that head or EIS blob changes before post-merge activation, STOP and return to Mission Control.

## 5. Writable paths

The correction cycle may write only the existing Stage 9 PR #793 paths:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md`;
- `communication/missions/SB-P-1.13/claude-code/11-stage9-eis-creation-report.md`;
- `communication/missions/SB-P-1.13/README.md`;
- `communication/missions/SB-P-1.13/decision-log.md`;
- `communication/missions/SB-P-1.13/handover-log.md`;
- `communication/live/report.md`.

Use the smallest necessary subset. The EIS is the substantive correction target.

No edit is authorized to Product Truth, Blueprint, FCTM, FPDRs, specialist reports, source contracts, code, schema, SQL, migrations, provider configuration or production state.

## 6. Mandatory post-correction checks

After correction:

- rerun all 651-row coverage checks;
- rerun orphan/unknown requirement checks;
- confirm 72 requirement-ID integrity unless a correction legitimately changes the count, in which case stop for Mission Control review before proceeding;
- confirm all 252 D12 rows still map to the D12 hold;
- confirm all 17 DTX rows still map to the transaction-command and DTX holds;
- confirm locked Blueprint/FCTM/FPDR/source artifacts are unchanged;
- provide exact new PR #793 head and EIS blob;
- provide an exact changed-requirements/sections register mapping each correction to C1–C7 and the originating specialist findings.

## 7. Required delta review after correction

A corrected EIS is not automatically accepted.

After Mission Control verifies the correction package structurally:
- Security delta re-review is required for C1, C2, C3, C6 and relevant C4/C7 intersections;
- AI delta re-review is required for C3, C4, C5 and C7;
- Voice/Provider delta re-review is required for C4, C6 and C7.

Mission Control may narrow each delta review to the exact changed requirements/sections plus cross-cutting invariants if no unrelated EIS area changed.

## 8. Authority boundary

This authorization does not:
- accept or lock the EIS;
- authorize PR #793 merge;
- authorize Stage 11;
- authorize implementation package or implementation;
- authorize SQL/schema/migration execution;
- select or activate a provider;
- mutate production;
- authorize delivery.

**STOP FOR HUMAN MERGE OF THIS AUTHORIZATION.**
