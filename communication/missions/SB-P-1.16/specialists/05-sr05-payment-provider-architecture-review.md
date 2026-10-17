# SB-P-1.16 — Stage 7 SR-05 External Payment Provider Architecture Specialist Review

**Assignment:** SR-05 — External Payment Provider Architecture, under MC-183  
**Authority:** Source 18 v1.2 Stage 7 and §4.8; MC-183  
**Reviewer:** Claude subagent (general-purpose agent), model family Claude (Anthropic), fresh context, spawned and briefed by Claude Code (the Stage 2–4, 6 and 7 author) on 2026-10-17  
**Independence:** NOT INDEPENDENT — same provider and model family as the Stage 7 author, and briefed by that author. Separately attributable only. No prior SB-P-1.16 authorship in this context.  
**Baseline:** `main@abd5e0d547aabc315513e8901edecfd327edaaf9`  
**Status:** DRAFT SPECIALIST REPORT — READ-ONLY — FINDINGS ARE INPUTS, NOT AUTHORITY  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reviewer provenance and limits

- This review was produced by a fresh-context Claude subagent spawned and briefed by Claude Code, which authored Stages 2–4, 6 and 7 of SB-P-1.16. It shares the author's provider and model family, so it is separately attributable but not independent.
- Scope is limited to the external payment provider architecture: Stage 7 draft §20.4.7, §20.4.8, §20.4.9 (settlement), §20.4.10, §20.5 (webhook validation row only), §20.7.1 (provider sandbox row), §20.7.4, the 41 `DPAY` rows of the §20.8 register, §21.4 and §21.5; Stage 6 findings SB16-B6-09 to -13 and -15.
- Out of scope and not assessed: balance algebra (SR-01), RLS beyond webhook authentication (SR-02), lock mechanics (SR-03), migrations (SR-04), retention law (SR-06).
- No provider is selected, recommended or named as a choice. Industry patterns are described generically.
- No live system, provider dashboard, provider documentation, credential, Supabase project, CLI, network call or SQL was used. Provider capabilities (signed webhooks, timestamp headers, account-level identifiers, settlement-line granularity, minor-unit reporting, event-listing APIs, partner or OAuth connect) are therefore **UNVERIFIED — PROVIDER EVALUATION NOT AUTHORIZED**. Every finding that depends on them is stated as an evidence obligation, not a fact.
- The Cloudflare runtime behaviour described (per-deployment secrets, request-time limits, absence of a scheduled handler in this repository) is inferred from `src/server.ts` and `vite.config.ts` and from general platform knowledge; no deployment configuration file (for example a Wrangler file) exists in the repository to confirm bindings.

## 2. Evidence inspected

| Path | Blob |
|---|---|
| `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md` | `1064ab18` |
| `communication/missions/SB-P-1.16/claude-code/19-stage7-engineering-review-report.md` | `a3b644f0` |
| `communication/missions/SB-P-1.16/claude-code/17-stage6-builder-review.md` | `c9a93566` |
| `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `5ff7742f` |
| `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md` | `30b19a80` |
| `docs/phase-1-mission-blueprint/active/SB-P-1.16.md` | `8e79636f` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f750` |
| `docs/phase-1-mission-blueprint/smart-business-features/15_Payment_Verification_and_Bank_Reconciliation.md` | `632f3402` |
| `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` | `61e1bb91` |
| `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924` |
| `src/server.ts` | `20500c7f` |
| `vite.config.ts` | `2b8ccd12` |
| `src/integrations/supabase/client.server.ts` | `f63eeb84` |

## 3. Method

1. Read the in-scope Stage 7 sections and the §20.8 register rows for every FCTM row whose dependency column contains `DPAY`.
2. Re-derived the `DPAY` set from the canonical FCTM: 41 `IN SCOPE` rows carry `DPAY`. Counted register statuses for those rows: 39 `PROVIDER-HELD` and 2 `FOLLOW-UP` (`15-§5-4`, `BP-§10.5-B1`). This matches draft line 709 and §21.4 line 767.
3. Compared §20.4.7 to §20.4.10 against `16:FPDR-6` §§1–9 and `16:FPDR-9` §§1–9 (verbatim text in the decision record, lines 159–203 and 302–457), Contract 15 §§3–6, 12, 13, 20–22, 24, 26, Contract 22 §17 and Build Plan §5.4.
4. Tested the proposed principal route (G-W1) against the exact text of `EIS-KER-02`, `EIS-AUT-01`, `EIS-ID-05`, `EIS-KER-06`, `EIS-CNF-04`, `EIS-CNF-06` and `EIS-ISO-04` (SB-P-1.12 EIS lines 149, 151, 191, 195, 228, 265, 267).
5. Inspected the runtime entry point (`src/server.ts`), build configuration (`vite.config.ts`) and the server-side secret pattern (`client.server.ts`, which reads `process.env`) to judge where a webhook route and per-merchant secrets could live.
6. Walked the generic provider lifecycle (connect, prove account control, receive signed event, verify, route, persist, acknowledge, process, reconcile missed events, ingest settlement, handle refund and dispute, disconnect, switch provider) and recorded each step that the draft does not specify.
7. Checked the `16:FPDR-9` deferred branches (`15-§5-1` direct-bank branch, `15-§5-2`, `15-§1-2`) against Blueprint §11.6 (lines 678–686) and the draft's §20.4.8, §21.4 and §21.5 wording.

## 4. Findings

### SR05-01 — Inbound event routing and proof of provider-account control are unspecified

- **Severity:** HIGH
- **Evidence:** Draft §20.4.8 line 151: "The business for an inbound event is resolved **only** from the verified binding, never from payload fields." Draft §20.5 line 188: "Signature verification with the binding's secret". `16:FPDR-6` §1 (decision record line 170 onward): gateway evidence "must be authenticated and bound to the correct merchant and provider account". Stage 6 SB16-B6-10 (Stage 6 lines 140–146): "an unforgeable mapping from the provider account to the business".
- **Affected FCTM IDs:** `15-§5-1`, `15-§5-3`, `15-§3-7`, `15-§6-1`, `15-§22-1`, `15-§22-3`, `15-§22-6`, `22-§17-3`, `BP-§10.5-W5`
- **Affected Stage 7 draft sections:** §20.4.8, §20.5 (webhook validation row)
- **Related Stage 6 findings:** SB16-B6-10, SB16-B6-09
- **Engineering implication:** To verify a signature with "the binding's secret", the handler must first select a binding, and it can only do so from something in the request. Two generic account models exist and behave differently:
  - Merchant-owned account with a per-account webhook secret: the selector is typically an unguessable per-binding endpoint path or a header; the secret proves control.
  - Platform-level (partner or connected-account) model: one platform secret signs events for all connected accounts, and the account identifier is inside the signed payload. The signature proves provider origin, not which business.

  In the second model the literal rule "never from payload fields" cannot be met. The safe rule is: a routing hint (path token, header or signed payload field) selects a candidate binding; the signature is verified with that binding's (or the platform's) secret; and only after verification is the signed account identifier compared with the account identifier pinned on the binding. The draft also does not say how the Owner proves control of the account when creating the binding. Typing an account identifier proves nothing; an OAuth or partner-connect grant, or a successful authenticated call with merchant-supplied credentials that returns the account identifier, does. Nothing prevents two businesses binding the same provider account.
- **Required correction or evidence obligation:** §20.4.8 should state (a) the routing-hint, verify, then compare-pinned-account sequence for both account models; (b) that account control is proven at connect time by a provider-asserted identifier, never by Owner-typed text; (c) a uniqueness rule of at most one active binding per (provider, provider account) across all businesses, with re-binding requiring disconnection; (d) that a signed event whose account identifier does not match the selected binding is rejected and never routed to another business. The EIS must carry a SEC test for each.
- **Uncertainty:** Which account model is available depends on the provider eventually selected, which is unknown. Some providers may not expose a stable account identifier in events; that would need a per-binding endpoint as the only selector.
- **Trigger screen:** none. The requirement (`16:FPDR-6` §1) is unchanged; this is design precision.

### SR05-02 — No per-business credential and secret storage model for a Cloudflare-hosted server

- **Severity:** HIGH
- **Evidence:** Draft §20.5 line 188: "Endpoint secrets in server environment or secret storage". Draft §20.7.2 M16-3: "no provider secrets in migrations". `src/integrations/supabase/client.server.ts` reads only deployment-level `process.env` values. `vite.config.ts` notes a Cloudflare build target. Stage 6 SB16-B6-10: "no credential store pattern exists beyond server environment variables". Contract 15 §22 b2 (`15-§22-2`). `16:FPDR-6` §7 ("secure credential handling").
- **Affected FCTM IDs:** `15-§22-2`, `15-§22-1`, `15-§22-4`, `BP-§5.4-1`, `22-§17-3`, `15-§3-7`
- **Affected Stage 7 draft sections:** §20.5, §20.4.8, §20.7.4, §20.3 (target component map, E-SRC)
- **Related Stage 6 findings:** SB16-B6-10
- **Engineering implication:** Deployment environment variables hold one value per deployment. They suit a platform-level secret but cannot hold per-merchant webhook secrets, API keys or OAuth refresh tokens. Those must live in the database, encrypted at rest with a key the database alone does not hold (for example a key held only in the server's deployment secrets, or a database vault feature), readable only by a privileged server path, never by `authenticated` or `anon`, never returned to the client after entry, and never logged. The draft does not choose between merchant-entered API keys and an OAuth or partner-connect grant. These differ in risk: API keys are often full-privilege and long-lived, while delegated grants can be scoped to read-only and revoked by the merchant at the provider.
- **Required correction or evidence obligation:** §20.4.8 or §20.5 should state the credential classes (platform secret, per-binding webhook secret, per-binding access credential), where each is stored, how it is encrypted, who can read it, how it is rotated and revoked, and that read-only or least-privilege scopes are required where the provider offers them. Credential preference (delegated grant over pasted keys) should be recorded as an evaluation criterion for the later provider decision, not as a selection. The EIS should add a SEC check that no credential column is readable through client roles and that credentials never appear in logs or error pages.
- **Uncertainty:** Whether the deployment platform exposes a secret store beyond environment variables to this build is not visible in the repository. The database vault option depends on the Supabase project configuration, which is `UNVERIFIED — ACCESS REQUIRED`.
- **Trigger screen:** none.

### SR05-03 — The webhook intake path does not fit `EIS-AUT-01` and `EIS-ISO-04` as written, and the accept-then-process boundary is missing

- **Severity:** HIGH
- **Evidence:** Draft §20.4.8 line 153 (principal route, G-W1). SB-P-1.12 EIS line 151 (`EIS-AUT-01`: "the acting principal is derived from the stored rule and its grantor's current authority"; each run re-evaluates "grantor still holds the capability"). Line 228 (`EIS-ISO-04`: "the server function resolves the verified principal (EIS-KER-02), calls the kernel through the caller's client"). Line 267 (`EIS-CNF-06`: provider failure "denies or fails the one operation"). Contract 15 §20 b2 (`15-§20-2` "preserve evidence safely"). `src/server.ts` (blob `20500c7f`) has a single `fetch` handler and no webhook route.
- **Affected FCTM IDs:** `15-§20-2`, `15-§20-5`, `15-§21-1`, `15-§21-3`, `15-§22-6`, `15-§25-9`, `15-§6-8`, `15-§6-10`, `BP-§10.5-W5`
- **Affected Stage 7 draft sections:** §20.4.8 (principal), §20.5 (webhook validation, service-role use), §21.2 G-W1
- **Related Stage 6 findings:** SB16-B6-09
- **Engineering implication:** Three gaps sit in front of the G-W1 question:
  - A webhook request has no caller session, so `EIS-ISO-04` "calls the kernel through the caller's client" has no caller client. The intake handler necessarily runs privileged before any principal exists. G-W1 therefore covers both the principal type and the privileged-operation contract, not only `EIS-AUT-01`.
  - If the grantor's authority lapses (rule disabled, Owner change, business deleted), `EIS-AUT-01` correctly denies the run. A provider event that arrives in that state must still be durably preserved and visible for recovery, not dropped. Otherwise `15-§20-2` fails and the provider's retries eventually stop.
  - The draft does not separate a minimal synchronous intake step (verify signature and freshness, select binding, persist raw event with its idempotency key, return success) from asynchronous processing (normalize, kernel evaluation, matching). Without that split, a slow or failing kernel call makes the provider see failures and retry, and request-time limits on the hosting platform may be hit. `src/server.ts` also rewrites some JSON 500 responses into HTML pages; status codes are preserved, which is what provider retry logic needs, but this should be confirmed for any new route.
  - Draft line 188 says signature failures are "stored as `unauthenticated`". Requests that cannot be tied to any binding have no `business_id`, which conflicts with "All keys composite with `business_id`" (§20.5 tenant isolation row), and storing arbitrary unauthenticated internet payloads is a storage-abuse vector.
- **Required correction or evidence obligation:** §20.4.8 should (a) widen G-W1 to name `EIS-ISO-04` alongside `EIS-AUT-01` and `EIS-KER-02`; (b) define the intake/processing split, with success returned only after durable persistence; (c) state that kernel denial of a run leaves the raw event preserved in a recoverable state tied to its binding; (d) state that unroutable or signature-failed requests are counted and rate-limited in operational telemetry, not stored as tenant evidence, and that only signature-valid events reach business-scoped storage. Mission Control's G-W1 routing in §21.2 should carry the widened question.
- **Uncertainty:** The SB-P-1.12 owner may read `EIS-ISO-04` as already allowing a server-derived automation principal without a caller client; if so, only (b) to (d) remain.
- **Trigger screen:** none. G-W1 is an upstream engineering-specification question, not a Product Truth conflict, consistent with the draft's §21.5 T8 line.

### SR05-04 — No event-ordering rule and no missed-webhook reconciliation; the scheduler dependency is not recorded for the affected rows

- **Severity:** HIGH
- **Evidence:** Draft §20.4.8 adapter contract (line 152) lists only `verify`, `normalize`, `fetch_settlement` and `map_status`. Draft §20.4.10 (line 169) covers duplicates only. Draft §20.3 line 36: "there is no scheduler and no webhook route". Register rows `15-§12-1` (line 566), `15-§21-1` (line 608) and `15-§25-9` (line 647) list `DPAY` only, without `DSCH` or `D15`.
- **Affected FCTM IDs:** `15-§12-1`, `15-§12-6`, `15-§21-1`, `15-§25-2`, `15-§25-9`, `15-§20-5`, `15-§13-1`, `15-§4-7`, `15-§28-1`
- **Affected Stage 7 draft sections:** §20.4.8, §20.4.10, §20.7.3, §20.8
- **Related Stage 6 findings:** SB16-B6-14, SB16-B6-15
- **Engineering implication:** Providers generally deliver webhooks at least once and not in order. A "captured" event can arrive after "refunded"; a dispute-closed event can arrive before dispute-opened. If `map_status` is applied in arrival order, verification state can move back to "matched/verified" after a reversal. Webhooks can also be lost during an outage on either side. The standard mitigation is a periodic reconciliation pull (list payments, refunds and disputes since a cursor) that compares provider state with stored evidence. That pull needs a scheduler, which does not exist and which this mission receives only through `D15`/`DSCH`.
- **Required correction or evidence obligation:** §20.4.10 should add (a) a per-object state rule: provider status is derived from the provider object's latest authoritative state (by provider-supplied sequence, version or timestamp, or by re-fetching the object), and an older event never overwrites a newer state; (b) a reconciliation-pull operation in the adapter contract (for example `list_changes_since(cursor)`), with the cursor stored per binding; (c) Owner-visible "last successful sync" per binding so a silent gap is not read as "no payments". §20.7.3 and the register entries for `15-§12-1`, `15-§21-1` and `15-§25-9` should record `DSCH` (or `D15`) as a dependency of missed-event recovery, without changing FCTM dependency columns (a register note suffices). Fast Gate fixtures should include out-of-order and missing-event sequences.
- **Uncertainty:** Whether the eventual provider exposes ordering metadata or an event-listing API is unknown. If it does not, re-fetching the object state on every event is the fallback.
- **Trigger screen:** none. Adding a scheduler dependency note is a documentary dependency record, not a deferral.

### SR05-05 — Reversal handling is too coarse for partial refunds and dispute lifecycles

- **Severity:** HIGH
- **Evidence:** Draft §20.4.10 line 170: "A refund, reversal, dispute or chargeback is new evidence linked to the original. It moves the original to `reversed/invalidated`". Contract 15 §4 b7 (`15-§4-7`): "reversed/invalidated where authoritative evidence supports it". `16:FPDR-6` §6: provider "refunds, reversals, disputes, chargebacks and settlement adjustments". Stage 6 SB16-B6-13 (Stage 6 line 173): "refunds can be partial".
- **Affected FCTM IDs:** `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§21-10`, `15-§25-12`, `15-§6-4`, `BP-§10.5-E2`
- **Affected Stage 7 draft sections:** §20.4.10, §20.4.7 (provider status), §20.4.8 (`map_status`)
- **Related Stage 6 findings:** SB16-B6-15, SB16-B6-13
- **Engineering implication:** Two cases are mis-modelled:
  - A partial refund does not invalidate the original payment. Marking the whole original `reversed/invalidated` overstates the adverse change and would flag a target whose net received amount is still mostly intact. The model needs a cumulative refunded amount per original, bounded by the original amount, with an explicit "partially reversed" outcome that is distinct from mismatch and from part-payment (`16:FPDR-3`).
  - A dispute opening is not yet a reversal. Disputes typically progress from opened to won or lost (and funds may be held and returned). Authoritative evidence supports `reversed/invalidated` only when the dispute is lost or funds are finally withdrawn. An opened dispute should set provider status (for example "under dispute") and raise Owner review without moving the verification state; a won dispute should clear the flag with history kept.
- **Required correction or evidence obligation:** §20.4.10 should distinguish full refund, partial refund (cumulative, bounded), dispute opened, dispute won, dispute lost and chargeback, state which ones change the verification state and which only change provider status and raise review, and keep the "no Ledger or balance change until a governed correction" rule for all. Fast Gate fixtures should cover each transition, including a refund exceeding the remaining amount (rejected as malformed) and a dispute won after an Owner correction.
- **Uncertainty:** Exact provider status names belong to integration design (`16:FPDR-6` §6 last paragraph). The verification-state effect of a partial refund on balance presentation is SR-01's domain and may need a Founder view if it affects merchant-visible meaning.
- **Trigger screen:** none fired. T3 watch: if a "partially reversed" label is judged new merchant-visible product behaviour beyond Contract 15 §4, Mission Control should screen it under T3. The finding itself adds no behaviour; it narrows when the existing `15-§4-7` state applies.

### SR05-06 — Idempotency key shapes are inconsistent across provider, binding and actor scopes

- **Severity:** MEDIUM
- **Evidence:** Draft §20.4.10 line 169: provider events keyed on "(business, provider, external event ID)"; commands on "(business, actor, operation, key, payload fingerprint) (`EIS-CNF-04`)". SB-P-1.12 EIS line 265: `EIS-CNF-04` is "One shared idempotency pattern (business, actor, operation, key, payload fingerprint, committed outcome) … for every command and external event intake".
- **Affected FCTM IDs:** `15-§12-1`, `15-§12-6`, `15-§6-11`, `15-§25-2`, `15-§12-3`
- **Affected Stage 7 draft sections:** §20.4.10, §20.4.8 (normalized record, idempotency key)
- **Related Stage 6 findings:** SB16-B6-14
- **Engineering implication:** `EIS-CNF-04` says it covers external event intake but includes `actor`. For provider events the actor is the automation principal derived from a rule; if the rule is recreated, the actor changes and a redelivered event would not deduplicate. Separately, "provider" is too coarse when a business has more than one binding with the same provider kind, and event IDs are not always the right key: the same payment can arrive under several event IDs (created, captured, updated). Event-level deduplication prevents double processing of one delivery; object-level identity (provider payment ID per binding) prevents two evidence records for one payment.
- **Required correction or evidence obligation:** §20.4.10 should define two keys: an intake key (binding, provider event ID) for delivery deduplication, and an evidence identity (binding, provider object ID) so later events update the same evidence item's history rather than creating new evidence. It should state how the provider-event key maps into `EIS-CNF-04` without depending on the derived actor, or record that mismatch as part of G-W1 for SB-P-1.12-owner confirmation.
- **Uncertainty:** SR-03 (concurrency) may address the key shape from the locking side; this finding concerns provider identity semantics only.
- **Trigger screen:** none.

### SR05-07 — Settlement evidence: source authentication, missing line detail and the `15-§5-4` classification

- **Severity:** MEDIUM
- **Evidence:** Draft §20.4.9 line 165 (settlement as separate kind with lines; fee variance; OQ-02). Draft §20.2 actor inference: "that settlement files carry payment-level lines". Contract 15 §5 b4 (`15-§5-4` "verified settlement file"). `16:FPDR-6` §2 and §3. Register line 516: `15-§5-4` is `FOLLOW-UP` with "open: OQ-02 (settlement fees)".
- **Affected FCTM IDs:** `15-§5-4`, `15-§11-5`, `15-§7-8`, `15-§10-2`, `BP-§10.5-W6`, `BP-§10.5-E2`
- **Affected Stage 7 draft sections:** §20.4.9, §20.4.7, §20.8, §21.2 (OQ-02)
- **Related Stage 6 findings:** SB16-B6-11, SB16-B6-13
- **Engineering implication:**
  - The draft does not say how a settlement file becomes "verified". A settlement report fetched through the authenticated adapter (`fetch_settlement`) under a proven binding can be `provider_authenticated`. A settlement file the merchant downloads from a provider dashboard and uploads is `merchant_submitted` and, under `16:FPDR-6` §3, cannot establish provider verification even though it is genuine in practice.
  - If a provider's settlement data has no payment-level lines, line matching is impossible and the settlement can only be shown as a batch with unexplained variance routed to review. The draft does not state this fallback.
  - Fees may carry tax and may be reported as separate adjustment lines; refunds and dispute debits can be netted into a later settlement. Each needs its own explained-variance category so it is not shown as a mismatch.
  - `15-§5-4` ingestion and variance display do not depend on OQ-02; only fee-expense booking does. Classifying the whole row `FOLLOW-UP` may delay the non-dependent part of the design at EIS.
- **Required correction or evidence obligation:** §20.4.9 should state the source-authentication rule for settlement files (authenticated pull versus upload), the batch-only fallback when lines are absent, and the variance categories (fee, tax on fee, refund netted, dispute debit, adjustment, rounding not permitted). The register note for `15-§5-4` should say that only fee booking waits for OQ-02. Settlement status must continue never to be shown as funds in the merchant's bank (`16:FPDR-6` §2), which the draft already states.
- **Uncertainty:** Settlement formats are provider-specific and unverified (draft §20.2).
- **Trigger screen:** none fired. T3-W2 (automatic fee expense) remains a watch; nothing here proposes it.

### SR05-08 — The adapter contract is not yet sufficient to avoid provider lock-in, and `15-§24-3` has no concrete check

- **Severity:** MEDIUM
- **Evidence:** Draft §20.4.8 line 152 (four adapter operations). Contract 22 §17 (lines 297–311: "standardize core business behavior and customize/integrate at the edge"). Contract 15 §3 b7 (`15-§3-7`) and §24 b3 (`15-§24-3`). Register line 635: `15-§24-3` is `DESIGN ACCEPTED — EVIDENCE HOLD`, risk L, verification "DR; negative test where a runtime path exists", related finding SB16-B6-01.
- **Affected FCTM IDs:** `15-§24-3`, `15-§3-7`, `22-§17-3`, `15-§5-7`, `15-§7-8`
- **Affected Stage 7 draft sections:** §20.4.8, §20.8
- **Related Stage 6 findings:** SB16-B6-10
- **Engineering implication:** Lock-in usually enters through the core, not the adapter: provider status strings stored and branched on in core logic, provider-specific columns in evidence tables, or matching rules keyed on one provider's reference format. The draft does not define (a) a closed, provider-neutral provider-status vocabulary that `map_status` targets; (b) a capability declaration per adapter (supports settlement lines, partial refunds, disputes, event listing) so the core degrades predictably; (c) connect and disconnect lifecycle operations; (d) a reconciliation-pull operation (SR05-04). The `15-§26-3` historical row (fixed single provider) is `NOT APPLICABLE` in the FCTM and correctly not assessed, but its current replacement `15-§24-3` is rated low with no test.
- **Required correction or evidence obligation:** §20.4.8 should list the adapter operations as connect, verify, normalize, map_status (to a closed core vocabulary), fetch_settlement, list_changes_since and disconnect, plus a static capability declaration. Core tables keep provider-specific data only in the raw-evidence pointer and an opaque provider reference. The register entry for `15-§24-3` should name a Fast Gate conformance check in which at least two adapters (a fake reference adapter and, later, the selected provider's adapter) pass the same contract suite.
- **Uncertainty:** None material; this is a design-completeness gap independent of provider choice.
- **Trigger screen:** none.

### SR05-09 — Build Plan §5.4 activation items, kill switch, disconnect, rollback and pre-provider test strategy are not specified

- **Severity:** MEDIUM
- **Evidence:** Build Plan §5.4 (lines 189–197): the Blueprint/EIS "must explicitly identify environment activation, credentials, failure behavior, rollback, and verification". Draft §20.7.4 line 267 lists topics but defines none. Draft §20.7.1 line 241: provider sandbox "None; no provider selected … Provider contract tests after authorization only". `16:FPDR-6` §7 and §9.
- **Affected FCTM IDs:** `BP-§5.4-1`, `15-§20-5`, `15-§24-5`, `15-§25-9`, `15-§21-1`, `22-§17-3`
- **Affected Stage 7 draft sections:** §20.7.1, §20.7.4, §20.7.5
- **Related Stage 6 findings:** SB16-B6-10
- **Engineering implication:** Several provider-independent decisions can be fixed now without selecting a provider:
  - A per-binding and per-adapter disable switch that stops intake and outbound calls without affecting the rest of the product (`15-§20-5`, `15-§24-5`).
  - Disconnect semantics: when an Owner disconnects or the provider revokes access, existing evidence and links stay with history, new events are rejected, and stored credentials are destroyed.
  - Rollback: disabling the adapter is the rollback; evidence already ingested is never deleted by rollback.
  - Pre-provider testing: a fake adapter with recorded fixture payloads and known-answer signature vectors (valid, tampered, stale timestamp, replayed, wrong account) lets Fast Gate cover verify, normalize, ordering, reversal and settlement logic before any sandbox exists. Provider sandbox use then needs only a separately authorized evaluation with sandbox credentials, never production credentials.
- **Required correction or evidence obligation:** §20.7.4 should map each of the five Build Plan §5.4 elements to a stated design (activation by Owner-initiated connect behind a disabled-by-default switch; credentials per SR05-02; failure per SR05-03 and SR05-04; rollback by disable; verification by the fake-adapter suite plus sandbox contract tests after authorization). §20.7.1 should state the fake-adapter strategy so the provider-held rows have a Fast Gate path that does not wait for selection.
- **Uncertainty:** Whether Mission Control wants these fixed at Stage 7 or at EIS is a governance choice; the obligation stands either way before `DPAY` activation.
- **Trigger screen:** none.

### SR05-10 — The `16:FPDR-9` deferred branches are labelled `PROVIDER-HELD`, and §21.5 says they are "held, not deferred"

- **Severity:** MEDIUM
- **Evidence:** Register lines 496 (`15-§1-2`), 513 (`15-§5-1`) and 514 (`15-§5-2`): status `PROVIDER-HELD`, dependency `DPAY`, verification "contract tests per adapter; provider activation evidence". Draft §21.5 line 782: "`DPAY`, `DNTF`, `D18` and the `16:FPDR-9` deferred rows are held, not deferred, narrowed or reassigned." `16:FPDR-9` §1 (decision record lines 327–340): "This is an explicit Source 18 T7 deferral decision"; §2: the `15-§5-1` row "must not be marked fulfilled or deferred in a way that conceals either obligation". Blueprint §11.6 (lines 678–686) calls them deferred branches, "still committed — not in this mission's initial channel set". Stage 6 line 463 and Blueprint line 727: F-7 open.
- **Affected FCTM IDs:** `15-§5-1`, `15-§5-2`, `15-§1-2`, `15-§28-1`
- **Affected Stage 7 draft sections:** §20.8 (three rows and the status legend at lines 304–315), §21.4 line 769, §21.5 line 782
- **Related Stage 6 findings:** none (governance carry: F-7; T7-W1 watch at Stage 6 line 513)
- **Engineering implication:** The draft correctly does not design the direct-bank or bank-email adapters (§20.4.8 line 154; §21.4 line 769) and does not drop the rows. However:
  - `PROVIDER-HELD` is defined as "held by `DPAY`: provider selection, credentials and activation". For `15-§5-2`, `15-§1-2` and the direct-bank branch of `15-§5-1`, gateway provider activation releases nothing; release needs a separate scope allocation, mission and authorization (`16:FPDR-9` §§2–3, 9). A reader at Stage 22 could infer that activating a gateway clears these rows.
  - `15-§5-1` carries one status for two branches. When the gateway branch is demonstrated, a single-status row invites marking the whole row fulfilled, which `16:FPDR-9` §2 forbids.
  - The §21.5 sentence contradicts the Founder's own characterization and the approved Blueprint. The rows were deferred by an already-disposed T7 decision; what is true is that Stage 7 adds no new deferral.
- **Required correction or evidence obligation:** Without changing FCTM dispositions or dependency columns, the register should annotate these three rows (and the direct-bank branch of `15-§5-1` separately from its gateway branch) with a distinct note such as "Founder-deferred branch (`16:FPDR-9`), no mission assigned, F-7 open; not released by `DPAY` activation". Their verification column should not cite "contract tests per adapter" for an adapter that is not designed. §21.5 should say: "No new T7 trigger. The `16:FPDR-9` branches remain deferred under the Founder's disposed T7 decision; Stage 7 neither designs nor drops them; F-7 stays open."
- **Uncertainty:** Mission Control may prefer to keep the six-value status vocabulary and rely on the risk-column text, which already mentions the deferral. Whether a new status label is a permitted documentary treatment is Mission Control's call (`16:FPDR-9` §5).
- **Trigger screen:** none fired. T7-W1 (Stage 6 line 513) applies as a watch: the risk is a later silent reclassification, not a present one. No row is omitted, narrowed or reassigned by the draft.

### SR05-11 — Register and record precision: upload rows carry provider risks; payer hints missing from the normalized record

- **Severity:** LOW
- **Evidence:** Register line 517 (`15-§5-5`, merchant upload) and line 520 (`15-§5-8`) carry "unsigned events accepted; provider lock-in; provider-event principal (G-W1)" and "provider activation evidence (Build Plan §5.4)". Draft §20.4.8 lines 137–149 (normalized record fields). Contract 15 §6 b7 (`15-§6-7` "payer/payee/account hints where permitted"). Draft §20.4.9 line 158 uses an "identity hint" in matching.
- **Affected FCTM IDs:** `15-§5-5`, `15-§5-8`, `15-§6-7`, `15-§22-5`
- **Affected Stage 7 draft sections:** §20.8, §20.4.8, §20.4.9
- **Related Stage 6 findings:** SB16-B6-12
- **Engineering implication:** The merchant-upload fallback (`16:FPDR-6` §3) needs no provider. Listing provider activation evidence as its verification approach could make the upload path appear gated on `DPAY`, although its dependency column correctly shows `D14` only. Separately, the normalized record has no field for payer, payee or account hints, although matching relies on an identity hint and Contract 15 requires the field where permitted; minimization (`15-§22-5`) should govern what is kept, for example masked account fragments rather than full numbers.
- **Required correction or evidence obligation:** Replace the provider-specific risk and verification text on `15-§5-5` and `15-§5-8` with upload-path checks (review provenance label, never provider-verified, content-fingerprint duplicate detection). Add a minimized payer or payee hint field to the §20.4.8 record, with masking stated.
- **Uncertainty:** These rows may share a component template by design; the fix is to the row text, not the component.
- **Trigger screen:** none.

## 5. Dissent from the Stage 7 draft

- **§21.5 T7 line.** I dissent from the wording "the `16:FPDR-9` deferred rows are held, not deferred" (line 782). They are deferred by a Founder-authorized, already-disposed T7 decision (`16:FPDR-9` §1; Blueprint §11.6). The correct statement is that Stage 7 raises no new T7 trigger and preserves the disposed deferral and F-7. See SR05-10.
- **§21.5 "held is not T8" for the 39 `PROVIDER-HELD` rows.** I agree, with one condition. The holds rest on Founder decisions (`16:FPDR-6` §§7 and 9) that make provider selection and activation a separately governed step, so "held" records a decided dependency, not infeasibility. However, the feasibility of several rows (`15-§22-1`, `15-§5-3`, `15-§6-4`, `15-§5-4`, `15-§12-6`) relies on actor inferences about provider capabilities: signed and timestamped webhooks, a provable account identifier, minor-unit amounts, payment-level settlement lines and stable object IDs (draft §20.2). If the provider evaluation, once authorized, finds no eligible provider offering authenticated events and provable account binding for the target merchants, `15-§22-1` and `15-§5-3` could not be realized as written, and that would be a T8 matter at that point. I recommend the register state this condition explicitly so the non-T8 classification is not read as proven feasibility.
- **`15-§5-4` as `FOLLOW-UP`.** Minor dissent: only fee booking depends on OQ-02; settlement ingestion and variance display do not (SR05-07).
- **§20.4.10 reversal rule.** Dissent on the rule that a refund or dispute "moves the original to `reversed/invalidated`" (SR05-05).
- **Classification of the 41 `DPAY` rows.** The count (39 + 2) reconciles to the FCTM. Apart from the annotation in SR05-10 for `15-§1-2`, `15-§5-1` and `15-§5-2`, I do not dissent from the classifications.

## 6. Infeasible, unsafe, omitted, narrowed or reassigned rows

None found. No `IN SCOPE` row is shown infeasible or unsafe on the desk evidence available, and the draft omits, narrows or reassigns no row. The `16:FPDR-9` branches (`15-§5-1` direct-bank branch, `15-§5-2`, `15-§1-2`) are neither designed nor dropped, and F-7 remains open in §21.4. The conditional T8 risk in Section 5 depends on a provider evaluation that has not been authorized and is not a present finding.

## 7. Summary

| Finding ID | Severity | Short title | Correction required |
|---|---|---|---|
| SR05-01 | HIGH | Event routing and proof of provider-account control unspecified | yes |
| SR05-02 | HIGH | No per-business credential and secret storage model | yes |
| SR05-03 | HIGH | Webhook intake does not fit `EIS-AUT-01`/`EIS-ISO-04`; no accept-then-process boundary | yes |
| SR05-04 | HIGH | No event-ordering rule or missed-webhook reconciliation; scheduler dependency unrecorded | yes |
| SR05-05 | HIGH | Reversal handling too coarse for partial refunds and disputes | yes |
| SR05-06 | MEDIUM | Inconsistent idempotency key scopes | yes |
| SR05-07 | MEDIUM | Settlement authentication, missing lines and `15-§5-4` classification | yes |
| SR05-08 | MEDIUM | Adapter contract insufficient against lock-in; no check for `15-§24-3` | yes |
| SR05-09 | MEDIUM | Build Plan §5.4 activation, kill switch, rollback and pre-provider testing unspecified | yes |
| SR05-10 | MEDIUM | `16:FPDR-9` branches labelled `PROVIDER-HELD`; §21.5 wording | yes |
| SR05-11 | LOW | Upload rows carry provider risks; payer hints missing | yes |

**STOP FOR MISSION CONTROL SPECIALIST FINDINGS REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
