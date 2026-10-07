# SB-P-1.13 — Stage 10 Independent Voice / Provider EIS Review

**Specialist ID:** S10-SP-3  
**Domain:** Voice / Provider Readiness  
**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation  
**Review target:** PR #793 exact head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**EIS blob reviewed:** `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`  
**Instruction:** `communication/missions/SB-P-1.13/mission-control/23-stage10-eis-voice-review-instruction.md`  
**Review mode:** read-only EIS review; findings only  
**Date:** 2026-10-07

## 1. Independence and contribution separation

**Actual actor/model:** ChatGPT — GPT-5.6 Sol  
**Provider:** OpenAI  
**Session / room:** the same Smart Business Voice / Provider specialist session that performed S7-SP-3.

This session did not author or materially shape the Stage 9 EIS or PR #793. The Stage 9 EIS is repository-attributed to Claude Code. This session's prior contribution is limited to the canonical Stage 7 independent Voice / Provider review, which is an approved input to the EIS and creates correlated-assumption risk but not authorship overlap.

To reduce that risk, this Stage 10 review:
- reviewed the complete EIS at the exact authorized head rather than assuming Stage 7 recommendations were implemented;
- compared the EIS against the locked Blueprint's accepted Stage 7 constraints C-9 through C-15;
- separately tested the cross-cutting authority, command, idempotency, failure, privacy, provider, verification and hold sections;
- treated provider/runtime facts as unverified where direct evidence is unavailable.

**Independence status:** ESTABLISHED FOR S10-SP-3.

## 2. Executive disposition

The EIS is materially aligned with the accepted Voice architecture:

- Voice is one modality over the shared text/authority/command path;
- STT output is input evidence, never authority;
- finalized transcripts alone can create proposals;
- frozen spoken confirmation is preserved;
- Voice/text semantic and permission parity is specified;
- Smart Business idempotency and first-class unknown outcome are preserved;
- authoritative stored-state outcome alone may produce success language;
- FPDR-4 is implemented without ambient surveillance;
- TTS failure after a successful command does not replay the command;
- provider selection/activation remains separately gated;
- Voice disable/rollback preserves text and reconciles pending/unknown commands;
- telemetry is prohibited from becoming a raw-audio/full-transcript shadow archive;
- provider/runtime facts remain `UNVERIFIED — ACCESS REQUIRED`.

However, three material EIS design refinements are required before the Voice / Provider domain should be considered ready for Mission Control Stage 10 disposition.

No current finding requires a Founder/Product Truth decision.

## 3. Finding summary

| ID | Severity | Classification | Stage 10 implication |
|---|---|---|---|
| S10-VOICE-01 | High | EIS design defect requiring correction | Correct transient-audio boundary before acceptance |
| S10-VOICE-02 | High | EIS design defect requiring correction | Correct spoken-confirmation capture/binding mechanism before acceptance |
| S10-VOICE-03 | Medium | EIS design defect requiring correction | Bind provider evidence to versioned configuration identity and re-verification |

## 4. Material findings

### S10-VOICE-01 — Transient-audio contract does not explicitly cover every accepted accidental-persistence surface

**Severity:** High

**Affected EIS requirements / sections:**  
`EIS13-VOI-02`; Section 17; Section 27 transient-audio hold; `EIS13-VER-01`; related `EIS13-PRV-01`.

**Exact repository/design evidence:**

Locked Blueprint correction C-10 requires the EIS to account for accidental persistence through:

- temporary files;
- request buffering;
- framework and proxy behaviour;
- application and error logs;
- crash/debug capture;
- APM/observability;
- retry/dead-letter queues;
- analytics;
- test fixtures;
- backup inclusion.

The Stage 7 Voice review also called out browser/mobile capture, HTTP request bodies, streaming buffers, reverse proxies/CDN behaviour and provider transport as distinct risk surfaces.

`EIS13-VOI-02` currently states that audio is streamed in memory and prohibits writes to temp files, buckets, logs, error capture, APM, retry/dead-letter queues, analytics, fixtures and backups.

That is strong but narrower than C-10 because it does not explicitly constrain or require evidence for:

- framework request-body buffering;
- reverse-proxy / CDN / edge request capture;
- platform-managed buffering or diagnostic payload capture;
- client/browser recording caches or temporary local persistence;
- provider-transport handoff boundaries distinct from provider retention.

**Merchant / security / operational consequence:**

Smart Business could truthfully avoid creating an audio bucket yet still leave raw merchant audio durably captured by an edge layer, framework buffer, browser cache or diagnostics facility. That would undermine FPDR-3 and the merchant's reasonable expectation that raw Basic Voice audio is transient inside Smart Business.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

Expand `EIS13-VOI-02` and its verification obligation so that the transient-audio contract explicitly covers, at minimum:

1. client/browser capture buffers and application-controlled local caches;
2. HTTP/multipart/stream request-body buffering;
3. framework/runtime buffering and temporary spill;
4. reverse-proxy/CDN/edge body capture and diagnostics;
5. application/error/crash/APM/observability capture;
6. retry/dead-letter/queue persistence;
7. analytics and test-fixture capture;
8. backup inclusion;
9. provider transport boundary, while keeping external provider retention separately governed by `EIS13-PRV-01`.

The EIS should require layer-by-layer evidence showing either memory-only/transient handling or an explicitly bounded temporary mechanism with deterministic disposal where a platform makes pure memory-only transport impossible.

This correction does not require a provider selection and must not claim control over provider-side retention that has not been evidenced.

**T2/T3/T6/T7/T8 screen:**

- T2: not triggered.
- T3: not triggered.
- T6: already-established Stage 7 engineering constraint C-10; correction restores complete realization.
- T7: current EIS wording risks simplifying an accepted constraint; correct before acceptance.
- T8: not triggered because a safe design remains feasible.

**Stage 10 implication:** PR #793 should remain held until the transient-audio requirement fully realizes C-10.

---

### S10-VOICE-02 — Background spoken confirmation is prohibited but the EIS does not specify a deterministic mechanism that prevents it

**Severity:** High

**Affected EIS requirements / sections:**  
`EIS13-VOI-03`, `EIS13-VOI-04`, `EIS13-CNF-01`, `EIS13-CNF-02`, Section 12 proposal state machine, Section 17.

**Exact repository/design evidence:**

Accepted Blueprint constraint C-11 requires:

- spoken confirm/reject to consume only the frozen bound proposal;
- stale or duplicate confirmation to safely no-op or reject;
- execution-time revalidation;
- streaming/interim transcripts to remain non-executable;
- background speech to be unable to execute a command.

The EIS correctly states:

- interim transcripts are display-only;
- proposals use finalized utterances;
- a spoken confirm/reject is matched to the single pending frozen proposal;
- stale or duplicate confirmations no-op/reject;
- execution revalidates authority.

But the EIS does not state what deterministically distinguishes an intentional spoken confirmation from a finalized background utterance such as another person saying "yes" while a proposal is pending.

Because FPDR-4 and the accepted architecture prohibit ambient surveillance/bystander detection, the system cannot solve this by trying to infer who spoke.

**Merchant / security / operational consequence:**

Without an explicit confirmation-capture gate, a valid frozen proposal could still be executed by an unintended finalized audio event while the microphone is active. This is especially material for sales, purchases, corrections and other consequential actions.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

Refine `EIS13-VOI-04` so spoken confirmation requires an explicit deterministic confirmation-capture context tied to the existing binding. The EIS need not mandate one UI design, but the mechanism must prove all of the following:

1. the confirmation audio was captured only after the proposal was previewed and the confirmation state was explicitly armed;
2. the capture is bound to the exact confirmation-binding/proposal identifier and reviewed-state fingerprint;
3. actor and active business match the binding;
4. the confirmation window/binding is still valid and unconsumed;
5. only confirm/reject intent is interpreted — no business fields are regenerated;
6. a second, stale, replayed or out-of-window confirmation cannot execute;
7. no ambient/bystander classification, hidden listening or surveillance is introduced.

Examples of implementation mechanisms may include explicit push-to-confirm / tap-to-talk capture or another equally deterministic user-initiated confirmation window, but the EIS should specify the safety invariant rather than lock a UI unnecessarily.

**T2/T3/T6/T7/T8 screen:**

- T2: not triggered.
- T3: not triggered; this does not add a new merchant capability or privacy control.
- T6: already-established C-11 engineering safety constraint.
- T7: no mission/scope change.
- T8: not triggered; safe mechanisms are feasible.

**Stage 10 implication:** spoken confirmation design is not complete until background-confirmation safety is mechanized rather than asserted.

---

### S10-VOICE-03 — Provider evidence is not yet bound to a versioned data-control/configuration identity with mandatory re-verification

**Severity:** Medium

**Affected EIS requirements / sections:**  
`EIS13-VOI-10`, `EIS13-PRV-01`, `EIS13-PRV-02`, `EIS13-ENV-01`, Section 21, Section 28.

**Exact repository/design evidence:**

Accepted Blueprint constraint C-14 requires:

- normalized STT/TTS provider adapter and error contract;
- provider data-control and configuration identity;
- provider activation evidence pack;
- provider disable/rollback.

The Stage 7 Voice review further required evidence for the exact provider/service/account/project configuration and re-verification after material provider/configuration change.

The EIS correctly requires an activation evidence pack containing provider, service, model, account, credential custody, retention, training use, abuse-monitoring retention, region, logging/deletion controls, language quality and latency. It also marks all actual provider/runtime facts `UNVERIFIED — ACCESS REQUIRED`.

However, it does not explicitly require:

- a stable identifier/version for the verified provider-side data-control configuration;
- evidence that runtime calls are using that verified configuration/account/project;
- mandatory re-verification when material provider-side settings, service/model, account/project, retention/training controls or routing change.

`EIS13-ENV-01` versions Smart Business routing, kill switches and thresholds, but that is not the same thing as identifying and re-verifying external provider-side data-control state.

**Merchant / security / operational consequence:**

An evidence pack could be valid on activation day and become stale after a provider dashboard or account setting changes, while Smart Business continues to present the provider as verified.

**Classification:** EIS design defect requiring correction.

**Precise correction required:**

Refine `EIS13-PRV-01` / `EIS13-VOI-10` so the activation evidence pack records a provider configuration identity sufficient to tie runtime use to the verified state, including:

- provider/service/model;
- organization/account/project;
- applicable data-control/retention configuration identity or captured evidence version;
- Smart Business adapter/config version;
- evidence date and verifier;
- material-change conditions requiring re-verification.

Require re-verification before merchant data continues to flow after a material change to provider/service/model, account/project, routing, retention/training/abuse-monitoring controls, regional processing or other data-handling configuration.

Provider request identifiers may be retained as provenance/diagnostic metadata where policy permits, but remain non-authoritative and are never the idempotency key.

**T2/T3/T6/T7/T8 screen:**

- T2: not triggered.
- T3: not triggered.
- T6: implementation/governance refinement of accepted C-14.
- T7: no scope reassignment.
- T8: not triggered.

**Stage 10 implication:** provider selection remains unverified as expected, but the EIS must define how a future verification remains bound to the configuration actually used.

## 5. Mandatory review lenses with no additional material finding

| Review lens | Result |
|---|---|
| Voice is one modality over common authority/command path | PASS — `EIS13-ARC-02`, `EIS13-VOI-01`, `EIS13-CMD-01/-02` |
| STT output is evidence, not authority | PASS — explicit in `EIS13-VOI-01` |
| External provider retention separate/unverified | PASS — `EIS13-VOI-02`, `EIS13-PRV-01`, Section 28 |
| Finalized transcript vs streaming partials | PASS, subject to S10-VOICE-02 for background confirmation — `EIS13-VOI-03` |
| Malayalam/Manglish/code-switch/noisy-shop evaluation | PASS DESIGN / EVIDENCE HOLD — `EIS13-LANG-06` |
| Amount/name/date/unit/payment/credit safety | PASS DESIGN — `EIS13-LANG-03/-04/-06`, `EIS13-CMD-03`, `EIS13-VOI-06` |
| Voice/text semantic and permission parity | PASS DESIGN / D12 evidence hold — `EIS13-VOI-05` |
| Frozen spoken confirmation | PASS except S10-VOICE-02 — `EIS13-CNF-01/-02`, `EIS13-VOI-04` |
| Stale/double confirmation | PASS — explicit no-op/reject |
| End-to-end idempotency/replay | PASS DESIGN / DTX-D12 evidence hold — `EIS13-IDM-01` |
| Unknown outcome | PASS — `EIS13-IDM-02` |
| Authoritative-result-only spoken success | PASS — `EIS13-TEL-02` |
| FPDR-4 privacy-safe output without surveillance | PASS DESIGN / context evidence hold — `EIS13-SNS-01` |
| TTS failure after command success cannot replay | PASS — `EIS13-TEL-02` |
| Provider disable/rollback/text fallback | PASS DESIGN / runtime evidence hold — `EIS13-PRV-02` |
| Telemetry shadow storage | PASS — `EIS13-TEL-01` |
| Provider/runtime facts not inferred | PASS — Section 28 |
| FPDR-2 sequencing | PASS — `EIS13-VOI-07` |
| FPDR-5 credit boundary | PASS — `EIS13-CMD-03` |
| Voice Plus separation | PASS — `EIS13-VOI-09` |
| D12 / DTX holds | PASS — Section 27 keeps them explicit |

## 6. Evidence / activation holds that remain valid and are not EIS defects

The following remain evidence or activation gates and must not be mistaken for design failures:

- exact AI/Voice provider/service/model;
- provider account/project identity;
- provider retention;
- training/improvement use;
- abuse-monitoring retention;
- regional processing;
- logging/deletion controls;
- credential custody;
- Malayalam/Manglish runtime quality;
- runtime/provider latency;
- provider rollback behavior;
- SB-P-1.12 D12 implementation/evidence;
- DTX transactions-family command-only cut-over;
- transient-audio runtime proof;
- spoken-confirmation runtime proof;
- idempotency/unknown-outcome runtime proof;
- FPDR-4 trustworthy-context evidence;
- production/test/Lovable environment facts listed in Section 28.

## 7. Trigger screen

| Trigger | Result |
|---|---|
| T2 | NOT TRIGGERED |
| T3 | NOT TRIGGERED |
| T6 | No new Product Truth issue. Findings 01–03 are corrections/refinements needed to fully realize already-accepted Stage 7 engineering constraints C-10, C-11 and C-14 |
| T7 | No reassignment, deferral or reclassification proposed. S10-VOICE-01 prevents an accepted constraint from being simplified in the EIS |
| T8 | NOT TRIGGERED; all three defects have feasible safe corrections |

## 8. Stage 10 implication

The EIS is not rejected as an architecture.

Its Voice / Provider design is close to ready and carries the major Stage 7 constraints correctly. The three findings above should be corrected narrowly in PR #793, after which the exact corrected head should be rechecked for:

- C-10 transient-audio completeness;
- C-11 background spoken-confirmation safety;
- C-14 provider configuration identity/re-verification;
- unchanged holds and Product Truth boundaries.

No EIS lock, provider activation, implementation or production action is authorized by this review.

**VOICE / PROVIDER REFINEMENT REQUIRED**
