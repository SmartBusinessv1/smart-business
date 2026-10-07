# SB-P-1.13 — Engineering Implementation Specification

STATUS: APPROVED — LOCKED

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.13 — Native Conversation & AI Intelligence Foundation |
| Document | Engineering Implementation Specification (EIS) |
| Lifecycle stage | Source 18 v1.2 Stage 11 — EIS Lock |
| Status | `APPROVED — LOCKED` |
| Author | Claude Code (Stage 9 EIS author) |
| Authorization | SB-P-1.13-MC-14, `communication/missions/SB-P-1.13/mission-control/19-stage9-eis-creation-authorization.md` (blob `b1c7455a5e042e3bb8cbdb2826edfe0a8dadc860`), canonical at `main@0b83960113fb12a8258a2c4fdfc783f942b64ac3` (PR #792) |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.13.md`, blob `bbf65429e3c1f18b9dacdda62e1c175d9eb395a1` (`APPROVED — LOCKED`, Sections 1–21) |
| Canonical FCTM | blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22`: 974 rows, 651 `IN SCOPE` |
| Founder decisions | `FPDR-1` to `FPDR-4` (`founder/02`, blob `78f9afdb`); `FPDR-5` (`founder/03`, blob `001de805`) |
| Date | 2026-10-07 |
| Revision | Stage 10 refinement under SB-P-1.13-MC-16 (correction packages C1–C7); requirement IDs, count (72) and FCTM row mappings unchanged |
| Next gate | Stage 12 — Initial Implementation Package |

## 2. Purpose and Authority

This EIS specifies how the locked SB-P-1.13 Blueprint is to be built. It realizes the locked product intent and the Stage 7 accepted constraints; it does not change Product Truth, FCTM dispositions, owning missions, build commitments, commercial classifications or Founder decisions. Where Product Truth does not fix a mechanism, the EIS chooses the simplest architecture that preserves human decision ownership, permission and isolation truth, deterministic domain truth, provider replaceability, graceful failure, evidenceability and sustainability (SB-P-1.13-MC-14 §6).

This EIS is locked by Mission Control at Source 18 Stage 11. It authorizes preparation of the Stage 12 Initial Implementation Package only after this Stage 11 lock is canonical. It does not authorize code, SQL, schema or migration work, provider selection or activation, production access, implementation, or delivery.

## 3. Canonical Inputs Read

| Input | Path | Blob |
|---|---|---|
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.13.md` | `bbf65429e3c1f18b9dacdda62e1c175d9eb395a1` |
| FCTM | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` | `97ddc752dcbbdb6586110a782ef1e24405b6dd22` |
| Founder decisions `FPDR-1`–`FPDR-4` | `communication/missions/SB-P-1.13/founder/02-stage3-founder-product-decision-record.md` | `78f9afdb64b152060381c2eee61f68ec5c6e1468` |
| Founder decision `FPDR-5` | `communication/missions/SB-P-1.13/founder/03-post-stage6-founder-product-decision-record.md` | `001de80594cd3b6d4e42d7d802b31dc813ef49c1` |
| S7-SP-1 Security & Permissions | `communication/missions/SB-P-1.13/specialists/01-stage7-security-permissions-review.md` | `e6158bc64944a4ddde915c613ea91e245362fcc7` |
| S7-SP-2 AI Behaviour / Orchestration | `communication/missions/SB-P-1.13/specialists/02-stage7-ai-behavior-orchestration-review.md` | `395517167ba6b1d3eebecc8990687cc950b09f9b` |
| S7-SP-3 Voice / Provider | `communication/missions/SB-P-1.13/specialists/03-stage7-voice-provider-review.md` | `277cbcb4ba31d690ddd4369c08524bea6bc76612` |
| SB-P-1.12 Blueprint (locked) | `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md` | `77d52096c020668311b039721a4de9248ddd460e` |
| SB-P-1.12 EIS (locked) | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f7509477d0e8b997af538440d93bf2ca4d72` |
| Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` |

Contracts and delegates mapped by the FCTM are read at the blobs recorded in FCTM §0.4. The Stage 7 Engineering Review is Blueprint Sections 20–21.

## 4. Implementation Principles

1. **Authority outside the model.** The model proposes; the SB-P-1.12 kernel decides; deterministic commands write.
2. **One kernel, many entries.** Text, voice and future channels converge on one normalized pipeline.
3. **Consume, never duplicate, SB-P-1.12.** No authority tables, no single-ownership business lookup, no temporary parallel authorization (SB-P-1.12 EIS §19.5).
4. **Frozen proposals.** What the user confirms is exactly what executes.
5. **Fail narrow and honest.** No false success; unknown outcome is a state, not a guess.
6. **Data minimization by design.** Authorization before retrieval; no content archives for convenience.
7. **Provider-replaceable.** Interfaces in Smart Business; providers behind adapters and evidence gates.
8. **Holds stay visible.** A described mechanism is not evidence that a held dependency is met (SB-P-1.13-MC-14 §7).

## 5. Repository Baseline (at `main@0b83960113fb12a8258a2c4fdfc783f942b64ac3`)

| Area | Current state | EIS consequence |
|---|---|---|
| Runtime | TanStack Start built by Nitro with a Cloudflare default target via `@lovable.dev/vite-tanstack-config`; Worker-style server entry (`src/server.ts`) | Gateway sized to Worker limits; streaming responses |
| Server auth | `requireSupabaseAuth` verifies the Bearer JWT and builds an RLS-bound client | All new server functions use it |
| Business resolution | Each page reads `businesses` with `maybeSingle()` under owner-only RLS | Replaced for SB-P-1.13 surfaces by SB-P-1.12 active-business context (EIS13-WSP-04, EIS13-AUTH-01) |
| Transactions | Direct client `insert`; `correct_transaction` RPC; types `sale`/`purchase`; payment methods include `credit` | EIS13-CMD-02 under EIS-ISO-02 cut-over |
| Command precedent | `create_inventory_movement` (`SECURITY INVOKER`, idempotency key, payload fingerprint); `get_catalog_command_outcome` | Idempotency and outcome-lookup pattern for EIS13-CMD-02 and EIS13-IDM-02; its `SECURITY INVOKER` mode is not reused for transactions, which follow the SB-P-1.12 executor contract (Stage 10 C1); production state of `20260724170000` is `UNVERIFIED — ACCESS REQUIRED` |
| Files | Catalog-only `.csv`/`.xlsx` checks and transient S3 parser lease | Reused checks for EIS13-ATT-01; no new bucket |
| AI, voice, FAQ | None | New modules in Section 6 |
| Navigation | Desktop and mobile menus in `authed-header.tsx` | EIS13-WSP-01 |
| Language rendering | `lang="en"`; Inter font without Malayalam glyphs | Malayalam-capable font and per-message `lang` (EIS13-LANG-01) |
| CI | `build-assurance.yml`, `full-assurance.yml`, Markdown gate; Actions impaired since 2026-09-30 | EIS13-VER-01 |

## 6. Target Architecture Overview

Request path for a consequential text or voice turn:

1. Client sends a `NormalizedMessage` (text, or finalized transcript from the voice module) with a client message ID.
2. Server function (`requireSupabaseAuth`) resolves principal and active business through SB-P-1.12, using the caller's RLS-bound client; no SB-P-1.13 handler uses `service_role` (EIS13-AUTH-01).
3. `orchestration` classifies intent, retrieves only authorized context, calls the model through the gateway with control data and untrusted data separated.
4. Model output is validated into a typed tool proposal containing domain arguments only; the server injects principal, business and authority context and `tools` checks capability with `authz.authorize` (channel `ai_tool`) (EIS13-TOOL-01).
5. A consequential proposal is canonicalized, previewed, fingerprinted and bound (`confirmation_bindings`).
6. On confirmation (tap, or speech through an armed confirmation-capture context bound to the proposal), `commands` executes the exact bound proposal through a governed database command that revalidates authority and applies idempotency (EIS13-CNF-01, EIS13-VOI-04).
7. The authoritative outcome produces the response text or speech; audit and telemetry record identifiers, not content archives.

| Module | Responsibility | Never owns |
|---|---|---|
| `conversation` | Workspace route, threads, messages, rendering, business-context provider | Authority, business rules |
| `orchestration` | Gateway, routing, prompts, intent, context retrieval, validation | Permission, writes |
| `tools` | Typed registry, proposals, previews, bindings | Capability grants |
| `commands` | Governed domain command functions under the SB-P-1.12 executor contract | Interpretation, direct client DML |
| `language` | Normalization, clarification, identity matching, evaluation hooks | Provider choice as Product Truth |
| `voice` | Capture, STT/TTS adapters, partial handling, spoken confirmation | Audio persistence |
| `support` | FAQ store and matching, no-answer and escalation states | Merchant data access |
| `attachments` | Transient intake, checks, UDI handoff interface | Interpretation, storage |
| `telemetry` | Aggregate operational metrics | Content archives |

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-ARC-01` | Module boundaries. Server logic lives in TanStack Start server functions behind `requireSupabaseAuth`, split into `conversation` (Workspace surface and thread API), `orchestration` (AI gateway, prompt assembly, model routing, output validation), `tools` (typed registry and proposals), `commands` (governed domain commands as database functions), `language` (normalization, clarification, evaluation hooks), `voice` (capture, STT/TTS adapters), `support` (FAQ knowledge and matching), `attachments` (transient intake and handoff) and `telemetry`. No module holds its own permission logic, Business Memory or channel-specific rules. | `24-§5-8`, `22-§7-1`, `22-§7-4`, `22-§7-9`, `22-§7-10`, `22-§17`, `BP-§6.4-1`, `BP-§6.4-2`, `BP-§6.4-3`, `BP-§6.4-4`, `BP-§6.4-5`, `BP-§6.4-6`, `BP-§6.4-7`, `BP-§6.4-8`, `BP-§6.4-9`, `BP-§6.4-10`, `BP-§6.6-1`, `BP-§11-1` (18) |
| `EIS13-ARC-02` | One channel-neutral kernel entry. Every input (Workspace text, Workspace voice, future WhatsApp) is normalized into one `NormalizedMessage` (channel, modality, content parts, client message id) and enters the same pipeline; the server derives principal, business and authority context. The future SB-P-1.20 adapter targets this contract and adds no business logic. | `24-§5-1`, `24-§5-3`, `24-§5-7`, `24-§7-1`, `24-§7-5`, `24-§27-2`, `24-§27-6`, `24-§27-9`, `24-§27-11`, `24-§31-1`, `22-§29-1`, `22-§29-2`, `BP-§8.4-1`, `BP-§8.4-3` (14) |
| `EIS13-ARC-03` | Business Memory stays in Smart Business storage. Conversation, model context and caches never become the authoritative record; domain records are read and written only through Smart Business data access and governed commands. | `24-§9-3`, `24-§9-4`, `24-§27-8`, `24-§29-2`, `24-§29-3`, `24-§31-15`, `10-§7-6`, `22-§7-7`, `22-§24-1`, `17-§5-4` (10) |

## 7. Conversation Workspace

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-WSP-01` | Workspace route and navigation. A new authenticated route (for example `/_authenticated/conversation`) with entries in both the desktop and mobile navigation of `authed-header.tsx`; structured pages remain reachable and unchanged in role. The Workspace is a first-class destination, not a fallback. | `10-§20-6`, `17-§5-1`, `17-§5-2`, `17-§22-8`, `20-§15-3`, `BP-§8.3-1`, `BP-§10.2-W1`, `BP-§10.2-E1`, `BP-§10.2-E4` (9) |
| `EIS13-WSP-02` | Workspace input and output surfaces. Text input; responses as text, structured visual summaries, media where a feature supplies it, clarification and confirmation prompts, action proposals for human choice and downloadable outputs produced by authorized feature services; dense numerical content rendered as text or tables rather than audio. | `10-§4-1`, `10-§5-1`, `10-§5-3`, `10-§5-4`, `10-§5-6`, `10-§5-8`, `10-§5-9`, `10-§5-11` (8) |
| `EIS13-WSP-03` | Shared foundations, no channel copies. The Workspace consumes the single shared identity, Business Memory, conversation model, Permission Engine, language layer, UDI, Ask CFO, reminder, notification/action, confirmation and audit foundations through their owning modules or missions, and creates no channel-specific table, rule set or copy. | `10-§6-1`, `10-§6-2`, `10-§6-3`, `10-§6-4`, `10-§6-5`, `10-§6-6`, `10-§6-7`, `10-§6-8`, `10-§6-9`, `10-§6-10`, `10-§6-11`, `10-§6-12`, `10-§6-13`, `22-§4-2`, `22-§7-2`, `22-§7-3`, `22-§7-5`, `22-§7-6`, `22-§7-8`, `17-§5-3`, `17-§5-5`, `17-§5-6`, `17-§5-8` (23) |
| `EIS13-WSP-04` | Shared business-context provider. One client-side provider supplies the SB-P-1.12 explicit active-business context to all authenticated pages, replacing per-page `businesses.maybeSingle()` lookups for SB-P-1.13 surfaces; dashboard and conversation read the same underlying state. | `17-§22-4` (1) |
| `EIS13-WSP-05` | Conversation store and retention separation. Kernel-scoped `conversation_threads` and `conversation_messages` hold conversational context only; durable Business Memory, documents, audit and pending confirmations live in their own stores. Each persisted segment derived from protected business data records the capability, object scope, sensitivity class and source provenance under which it was produced, so it can be withheld when current authority no longer permits it (Stage 10 C3). Retention follows the applicable privacy/account policy; the active-account default is an open policy dependency (DC-12) and the store supports policy-driven expiry. | `24-§25-4`, `24-§28-7`, `10-§16-1`, `10-§16-2`, `10-§16-3`, `10-§16-4`, `10-§16-5`, `10-§16-6`, `10-§16-7`, `10-§16-8`, `BP-§10.2-W3` (11) |
| `EIS13-WSP-06` | Responsiveness. Streaming responses, progress indication for longer operations, disabled resubmission while a turn is in flight, and safe retry; latency budgets measured per stage (B6-15; VOICE-S7-12) without trading away permission, integrity or confirmation safeguards. | `10-§20-1`, `10-§20-2`, `10-§20-3`, `10-§20-4`, `10-§20-5`, `22-§21` (6) |

## 8. Active-Business Context and Server-Side Authority Propagation

SB-P-1.12 surfaces consumed (EIS §19.5): `authz.authorize` and reason codes; capability registry (SB-P-1.13 registers `conversation.*` and `ai_tool.*` capabilities); channel values `conversation`, `ai_tool`; `confirmation_bindings`; the shared idempotency pattern; `authority_events` and the denial contract; explicit active-business context. All are `SPECIFICATION AVAILABLE / IMPLEMENTATION NOT COMPLETE / EVIDENCE NOT COMPLETE` (EIS13-HOLD-01).

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-AUTH-01` | Server-derived principal and business. Every conversational request resolves the verified principal (`authz.current_principal()`) and the SB-P-1.12 explicit active-business context server-side; the client never supplies authority; no single-ownership lookup and no temporary parallel path (SB-P-1.12 EIS §19.5, EIS-KER-02). Privileged-handler boundary (Stage 10 C2; SEC13-EIS-S10-04): the caller-JWT RLS-bound client is the default for all business data in every SB-P-1.13 handler; `service_role` possession is never authority; SB-P-1.13 needs no service-role path for conversation, proposals, outcomes, attachments, telemetry or model context, and none is permitted unless a later EIS revision justifies it under the SB-P-1.12 EIS-ISO-04 decision-binding contract (bound principal, business, action and object set carried as predicates in every privileged query, EIS-CNF-02 revalidation, nothing taken from request, model or tool payload); a source-complete privileged-handler inventory is an acceptance artifact. | `10-§8-1`, `10-§8-2`, `10-§8-3`, `10-§8-4`, `10-§15-1`, `10-§15-2`, `10-§15-3`, `10-§15-4`, `10-§15-5`, `10-§15-6`, `10-§15-7`, `BP-§10.2-W7` (12) |
| `EIS13-AUTH-02` | Permission outside the model. Before any protected data reaches the model and before any tool proposal is executed, the server calls `authz.authorize(business, action, target_type, target_id, channel, context)` with channel `conversation` or `ai_tool`; prompt text never decides permission. | `24-§10-1`, `24-§10-2`, `24-§10-3`, `24-§10-4`, `24-§10-5`, `24-§10-6`, `24-§10-7`, `24-§10-8`, `24-§10-9`, `24-§10-10`, `24-§10-11`, `24-§27-7`, `24-§27-10`, `24-§31-3`, `9-§13-9`, `9-§13-10`, `9-§17-9`, `9-§19`, `22-§24-2`, `22-§24-3`, `BP-§10.2-E3` (21) |
| `EIS13-AUTH-03` | Employee denial of Owner-only intelligence. Owner-intelligence capabilities (SB-P-1.12 EIS-KER-07) gate retrieval; for principals without them, Owner-only aggregates are never retrieved into model context (SEC-13-S7-04), and the response follows the SB-P-1.12 denial contract (no leak, useful next step, no accusation). | `24-§31-4`, `10-§23-5`, `7-§11-2`, `BP-§10.2-SA2` (4) |
| `EIS13-AUTH-04` | Isolation and privacy surfaces. Conversation data, caches, telemetry and files are scoped by business through the kernel; conversation threads and messages are readable only by the actor and object scope the kernel allows, not by business membership alone; no sharing of a thread beyond its actor is assumed (default deny until a separately approved behaviour exists); no cross-business context, no Employee escalation, no channel widening, no surveillance use of the chat surface, staff data role-limited, aggregate insight governed. (Stage 10 C2) | `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-5`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§25-9`, `10-§19-1`, `10-§19-2`, `10-§19-3`, `10-§19-4`, `10-§19-5`, `10-§19-6`, `10-§19-7`, `10-§23-10`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§29-3` (21) |
| `EIS13-AUTH-05` | AI business boundary. The assistant redirects unrelated use, refuses unsafe assistance, avoids unsupported certainty, accusation and manipulation, and stays within role boundaries; enforced by system policy plus output checks, never by trusting the model to self-limit authority. | `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§22-8` (8) |

## 9. AI Gateway and Provider Abstraction

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-GW-01` | AI gateway. One server-side gateway module owns all model calls: provider client, timeouts, streaming, retries limited to idempotent model calls, size limits sized to Worker constraints (B6-03), and structured error mapping. Provider keys are server-only `process.env` values; never `VITE_*`. | `24-§4-1`, `24-§28-1`, `24-§28-9`, `BP-§10.2-W5` (4) |
| `EIS13-GW-02` | Provider abstraction. A `ModelProvider` interface (generate, structured-generate, embed if needed) with provider adapters behind configuration; Product Truth names no model; routing table maps task class to model; changing provider, model or routing is a governed configuration change that creates a new provider configuration identity and requires re-verification under EIS13-PRV-01 before merchant data flows (AI-S7-15; Stage 10 C7). | `24-§8-3`, `24-§19-1`, `24-§19-2`, `24-§19-3`, `24-§19-4`, `24-§28-3`, `24-§29-1`, `24-§29-4`, `24-§29-5`, `24-§29-6`, `24-§31-16` (11) |
| `EIS13-GW-03` | Intent-first routing. The orchestrator classifies intent before acting; non-transaction intents never become writes; intents owned by later missions are recognized and answered with a clear not-yet-available or routed response, never executed ad hoc. | `24-§6-1`, `24-§6-2` (2) |
| `EIS13-GW-04` | Prompt and instruction governance. System and developer prompts are versioned repository artifacts with review; prompt version is recorded with each turn; safety and moderation hooks are part of the gateway pipeline. | `24-§28-2`, `24-§28-11` (2) |
| `EIS13-GW-05` | Cost and sustainability controls. FAQ and deterministic paths first, routing by task complexity, bounded context, structured prompts, duplicate suppression, background batching where UX permits, and usage/cost observability; caching only for non-sensitive repeatable outputs or, for protected outputs, under the current-authority binding of EIS13-CTX-02 so that a cache hit never bypasses current authorization (Stage 10 C3); cost controls never remove committed capability. | `24-§26-1`, `24-§26-2`, `24-§26-3`, `24-§26-4`, `24-§26-5`, `24-§26-6`, `24-§26-7`, `24-§26-8`, `24-§26-9`, `24-§26-10`, `24-§28-10` (11) |

## 10. Instruction/Data Separation, Context Minimization and Retrieval Authorization

Model input is assembled from: (a) control data — versioned system/developer policy and the tool registry; (b) the authenticated merchant's current request, which may lead to a proposal only among the tools made available to that principal; (c) untrusted content — retrieved records, FAQ entries, documents, attachment text, quoted or embedded instructions and, later, WhatsApp payloads — each in a delimited data block marked as data. Untrusted content can never initiate an action, enable a tool, change capability requirements or override the current request; tool availability is computed before the call from the principal's capabilities; authority fields are injected by the server after validation, never taken from model output (Stage 10 C5).

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-CTX-01` | Instruction/data separation (C-4; AI-S7-01; Stage 10 C5: AI-EIS10-04). System/developer policy and the application tool registry are control data. All other content is untrusted for authority. The authenticated merchant's current message may express an intent that leads the model to propose a tool only among the tools the application has made available for that principal. Retrieved records, documents, FAQ content, attachments, quoted instructions, embedded third-party content and future WhatsApp payloads are passed in delimited data channels and cannot independently initiate an action, enable a tool, widen authority, change capability requirements, override the merchant's current request or create delegated authority; embedded instructions are treated as content. | `24-§9-1`, `24-§28-6` (2) |
| `EIS13-CTX-02` | Authorization-before-retrieval and minimization (AI-S7-06). Context retrieval runs with the caller's RLS-bound client after `authz.authorize`, fetches only the fields the task needs, and never uses the service-role client for model context. Caches and conversation state are bound to business, principal, the relevant SB-P-1.12 authority epochs and source-state version; an allow→deny authority change or active-business change makes them a miss (Stage 10 C3). | `24-§9-2` (1) |
| `EIS13-CTX-03` | Conversation truth precedence and revocation-safe reuse (AI-S7-13; Stage 10 C3: SEC13-EIS-S10-03, AI-EIS10-03). Stored business state always overrides conversation memory. Current authorization, not authorization at the time content was produced, controls every reuse of protected content: before a cached result is served, a history segment is rendered, or prior content is re-injected into model context or a summary, the segment's recorded capability and object scope are re-checked against the current kernel decision; content no longer permitted is withheld or redacted in both UI and model context. Role, capability, membership, entitlement and active-business changes therefore invalidate or re-authorize prior protected context. Record version and authority epochs are also checked before any proposal is previewed. Historical permission never becomes continuing permission. | `24-§23-9` (1) |

## 11. Human Language Layer and Evaluation Architecture

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-LANG-01` | Shared language layer. One `language` module normalizes English, Malayalam (script) and Manglish input for intent and entity extraction through the gateway, preserves meaning over literal translation, handles code-switching, shorthand, units and spelling variation, and is reused by every consumer; no feature-specific dictionary is the sole mechanism. | `24-§8-1`, `24-§8-2`, `9-§3-1`, `9-§3-2`, `9-§3-3`, `9-§3-4`, `9-§3-5`, `9-§3-6`, `9-§3-7`, `9-§3-8`, `9-§3-9`, `9-§5-1`, `9-§5-2`, `9-§6-1`, `9-§6-2`, `9-§7-1`, `9-§7-2`, `9-§7-3`, `9-§11-1`, `9-§11-2`, `9-§11-3`, `9-§11-4`, `9-§11-5`, `9-§11-6`, `9-§12-4`, `9-§12-13`, `9-§13-1`, `9-§13-2`, `9-§13-3`, `9-§13-4`, `9-§13-5`, `9-§13-6`, `9-§13-7`, `9-§13-8`, `9-§13-11`, `10-§12-1`, `10-§12-2`, `22-§8-1`, `22-§8-2`, `22-§8-3`, `22-§8-4`, `22-§8-5`, `22-§8-6`, `22-§8-7`, `BP-§10.2-W2` (45) |
| `EIS13-LANG-02` | Language preference. A business/user-scoped preference stored with the user profile in the active business, changeable, respected across surfaces, overridden by a clear in-conversation switch, never replacing mixed-language understanding; available early for the SB-P-1.19 onboarding surface to consume. | `9-§4-1`, `9-§4-2`, `9-§4-3`, `9-§4-4`, `9-§4-5`, `9-§17-8`, `20-§14-1`, `20-§14-2`, `20-§14-3`, `20-§14-4` (10) |
| `EIS13-LANG-03` | Clarification engine. Field-level uncertainty (amount, unit, party, item, date, paid-versus-owed, mixed-language ambiguity, permission-sensitive) triggers the smallest single clarification; harmless variation does not; thresholds are calibrated configuration, not Product Truth; no consequential write from ambiguous input. | `24-§6-3`, `24-§31-5`, `9-§9-1`, `9-§9-2`, `9-§9-3`, `9-§9-4`, `9-§9-5`, `9-§9-6`, `9-§9-7`, `9-§9-8`, `9-§11-7`, `9-§15-1`, `9-§15-2`, `9-§15-3`, `9-§15-4`, `9-§15-5`, `9-§17-10`, `10-§12-3`, `10-§17-1`, `10-§17-2`, `10-§17-3`, `10-§17-6`, `10-§17-7`, `BP-§10.2-E2` (24) |
| `EIS13-LANG-04` | Identity matching. Party and item names are matched against the active business's records with candidate lists; a likely spelling match never silently merges identities; multiple candidates trigger clarification. | `9-§10-1`, `9-§10-2`, `9-§10-3`, `9-§17-3` (4) |
| `EIS13-LANG-05` | Language failure recovery. Preserve original input, offer a short clarification or simpler phrasing, allow switching text/voice, and create no consequential record until meaning is safe. | `9-§16-1`, `9-§16-2`, `9-§16-3`, `9-§16-4` (4) |
| `EIS13-LANG-06` | Governed evaluation architecture (C-13; AI-S7-10; VOICE-S7-04). A versioned English/Malayalam/Manglish evaluation suite (text and speech) covering code switching, Kerala accents, noise, amounts, units, dates, names, payment methods, credit versus repayment, corrections, ambiguity and denial parity, scored on business-semantic correctness; corpus size is an EIS/test-design choice, not Product Truth; results are recorded against the provider configuration identity they were produced for and must be re-run after a material configuration change (Stage 10 C7); results gate provider activation and acceptance. | `9-§8-1`, `9-§8-2`, `9-§8-4`, `9-§14-1`, `9-§14-2`, `9-§14-3`, `9-§14-4`, `9-§14-5`, `9-§14-6`, `9-§14-7`, `9-§14-8`, `9-§17-1`, `9-§17-2`, `9-§17-4` (14) |

## 12. Typed Tools, Clarification, Preview and Frozen Confirmation

Proposal states: `draft` → `previewed` (bound) → `confirmed` → `executing` → `committed` | `rejected` | `outcome_unknown` | `expired`. Material fields (target, amount, party, type, payment method, date, quantity) are part of the fingerprint; any change returns the proposal to `draft`. Confirmation is the user's act on this exact binding: role, membership, capability, entitlement or delegated permission never substitutes for it (EIS13-CNF-03). A spoken confirmation is accepted only in an explicitly armed confirmation-capture context bound to the `previewed` proposal (EIS13-VOI-04). A change of role, capability, membership, entitlement or active business before commit causes the commit's revalidation to reject (EIS13-CNF-02) (Stage 10 C4).

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-TOOL-01` | Typed tool registry (AI-S7-05; Stage 10 C5: AI-EIS10-02). Each tool is a versioned schema (input, output, read/write class, required capability, consequential flag, idempotent flag) validated with the existing schema library; the registry is application-controlled; a tool definition cannot grant or relax a capability; read tools and write tools are separate. Tool input schemas contain only domain arguments. Principal, authenticated actor, active business, role, capability decision, entitlement, authority channel, object authorization scope, confirmation or binding identity and current authorization state are never model fields: if model output contains any of them it is rejected as non-authoritative, never merged; the server derives and injects them after validation. | `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-8`, `24-§11-9`, `24-§11-10`, `24-§28-5`, `BP-§10.2-W6` (11) |
| `EIS13-TOOL-02` | Structured output validation. Model output is parsed into the tool schema and validated for required fields, types, enumerated states, business ownership, referenced-object existence, numeric/date plausibility, permission and duplicate conditions; ownership and permission are evaluated against the server-derived principal and business through the SB-P-1.12 kernel, never against values in model output (Stage 10 C5); invalid output fails safely into retry or clarification and is never written. | `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-5`, `24-§20-6`, `24-§20-7`, `24-§20-8`, `24-§20-9`, `24-§20-10`, `24-§28-4`, `24-§31-6` (12) |
| `EIS13-CNF-01` | Frozen confirmed proposal (C-5; AI-S7-02). Model proposes → server canonicalizes and validates → preview → reviewed-state fingerprint and SB-P-1.12 `confirmation_bindings` row → user confirms → deterministic execution of exactly that bound proposal. No model call after confirmation may change material fields; a material change requires a new preview and binding. | `24-§11-7`, `24-§21-1`, `24-§21-8`, `24-§21-9`, `24-§31-7`, `10-§7-2`, `10-§7-3`, `10-§7-4`, `10-§7-5`, `10-§17-8`, `22-§29-7`, `BP-§10.2-W8` (12) |
| `EIS13-CNF-02` | Execution-time revalidation. The commit consumes the binding and re-evaluates `authz.authorize` under SB-P-1.12 EIS-CNF-02 serialization in the same transaction; a revoked or changed authority rejects only the pending action. | `24-§21-10`, `10-§17-9`, `10-§23-8` (3) |
| `EIS13-CNF-03` | Human authority and read-only intelligence (Stage 10 C4; AI-EIS10-01). SB-P-1.13 Conversation and Basic Voice consequential proposals execute only through the `confirmation_bindings` path of EIS13-CNF-01 (FPDR-1). Role, membership, capability, entitlement and ordinary delegated permission are not confirmation; they determine whether a proposal is allowed, not that this exact action was approved. Per-turn confirmation may be absent only under a separately approved standing-automation or delegated-execution contract, resolved outside the model through the shared authority system on a distinct governed execution path; none is defined in this mission. Ask CFO-class intents receive read tools only; the assistant never schedules work itself. | `24-§13-2`, `24-§21-2`, `10-§9-3` (3) |

## 13. Governed Command Path and Transaction-Command Convergence

Coordinated transactions-family cut-over (Stage 10 C1; SEC13-EIS-S10-01, -05; AI-EIS10-06). The `transactions` family moves to the command-only model as one package, delivered under a separately authorized migration mission with SB-P-1.12 WS-A3 (never two authority paths live on one family):

1. SB-P-1.12 prerequisites implemented and verified: verified principal, kernel, active-business context, `confirmation_bindings`, idempotency pattern, authority events (`D12`).
2. Create `create_transaction_governed` under the narrow-executor contract (EIS13-CMD-02) with no `authenticated` `EXECUTE` grant yet, so authenticated direct DML remains the only live write path and the command is reachable only by test fixtures.
3. Add its idempotency, outcome and audit support.
4. Verify the command against Owner, Manager, Employee and cross-business fixtures on the test project.
5. In one release, grant the narrow `authenticated` `EXECUTE` on the command and move the structured Transactions UI, Conversation and Voice callers to it.
6. In the same governed cut-over window, revoke authenticated direct DML on `transactions` and remove or replace the direct-insert policy.
7. Verify effective access: no alternate protected write path remains.
8. Only then is `EIS13-HOLD-02` (`DTX`) satisfiable.

Steps 5 and 6 form one atomic cut-over so there is neither a dual-write window nor a window where direct DML is revoked before every caller uses a valid command. Rollback follows the SB-P-1.12 per-family revert pattern and restores the previous single path, never both.

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-CMD-01` | Governed command path. Consequential actions follow input → interpretation → permission → clarification/preview → confirmation → deterministic domain command → authoritative write → audit → response (Build Plan §6.2), executed by feature-owned command functions under the locked SB-P-1.12 command-only model (EIS-ISO-02): protected writes go only through kernel-checked command functions, never through authenticated direct DML; the chat UI is never the source of authority. (Stage 10 C1) | `24-§28-8`, `10-§13-1`, `10-§13-2`, `10-§13-8`, `10-§13-9`, `10-§13-10`, `10-§13-11`, `10-§13-12`, `17-§5-7`, `BP-§6.2-1`, `BP-§6.2-2` (11) |
| `EIS13-CMD-02` | FPDR-1 governed create-transaction command and convergence (C-8; SEC-13-S7-02; AI-S7-04; Stage 10 C1: SEC13-EIS-S10-01, -05; AI-EIS10-06). One command function `create_transaction_governed` for transaction types available at implementation (currently `sale`, `purchase`; payment methods per schema including `credit` under FPDR-5), consuming the confirmation binding, kernel revalidation (EIS-CNF-02) and the idempotency pattern inside one protected transaction; additive to the transaction and correction foundations. Execution security: the command adopts the locked SB-P-1.12 narrow-executor contract — a `SECURITY DEFINER` function owned by a `NOLOGIN NOINHERIT` executor role holding only the `transactions` table/column privileges the command needs, with the EIS-ISO-10 invariants (empty hardened `search_path`, schema-qualified references, `PUBLIC`/`anon` `EXECUTE` revoked in the creating migration, narrow `authenticated` `EXECUTE` granted only at the cut-over step and only because the function is direct-RPC-safe through its own kernel checks, no dynamic object names). It does not rely on, or restore, authenticated direct DML on `transactions`. Structured Transactions UI, Conversation and Voice all call this one command; AI and Voice never expose raw `transactions.insert`. Delivery is one coordinated transactions-family cut-over (Section 13 sequence) with no dual-write window and no window where direct DML is revoked before the command is valid. | `24-§21-2`, `24-§31-13`, `9-§17-1`, `10-§11-2`, `10-§13-1`, `10-§13-2`, `10-§23-1`, `10-§23-9`, `12-§4-1`, `12-§21-1`, `12-§21-9`, `22-§29-8`, `17-§5-7`, `BP-§6.2-1`, `BP-§6.4-8`, `BP-§10.2-W9`, `BP-§10.2-SA1` (17) |
| `EIS13-CMD-03` | FPDR-5 credit boundary. A sale with `payment_method = credit` is recordable through EIS13-CMD-02; no customer-credit balance, owed state, repayment allocation or four-state Ledger state is created; statements implying balance or repayment semantics clarify or return a dependency-blocked response (AI-S7-14). | `9-§9-4`, `12-§4-1`, `12-§7-5`, `12-§7-6`, `12-§21-1` (5) |

## 14. Idempotency and Unknown Outcome

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-IDM-01` | Idempotency. Every consequential proposal carries a client-held idempotency key bound to business, actor, operation and payload fingerprint (SB-P-1.12 EIS-CNF-04); retries and replays (including voice) return the stored outcome; provider or channel request IDs are provenance only (C-12; VOICE-S7-08). | `24-§23-18`, `24-§31-13`, `10-§18-7`, `10-§23-9`, `12-§17-8`, `12-§21-9`, `22-§29-8` (7) |
| `EIS13-IDM-02` | First-class unknown outcome (AI-S7-03; VOICE-S7-09). When a command's result is not known (timeout after dispatch), the proposal enters `outcome_unknown`; the merchant sees that state; an outcome-lookup call keyed by the idempotency key (modelled on `get_catalog_command_outcome`) reconciles it; no automatic re-execution. | `24-§23-8`, `24-§23-12`, `24-§23-14`, `24-§31-11` (4) |

## 15. Audit, Provenance and Telemetry

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-AUD-01` | Provenance record. For every consequential AI- or voice-assisted action, record initiator, business and role context, channel and modality, evidence references, interpretation, clarification and confirmation, executing command, resulting record and retry/correction state, linked to SB-P-1.12 authority events; prompt and model metadata kept per policy, not indiscriminately. | `24-§24-1`, `24-§24-2`, `24-§24-3`, `24-§24-4`, `24-§24-5`, `24-§24-6`, `24-§24-7`, `24-§24-8`, `24-§24-9`, `24-§24-10`, `24-§28-12`, `24-§31-14`, `22-§29-12`, `BP-§10.2-W10` (14) |
| `EIS13-TEL-01` | Privacy-minimized telemetry (C-15; AI-S7-12; VOICE-S7-17). Operational telemetry stores identifiers, configuration and prompt versions, latency, errors, retries, usage, cost and domain outcome; no raw-audio or full transcript/prompt shadow archive for telemetry convenience; aggregate reporting only. | `24-§26-9`, `24-§31-14` (2) |
| `EIS13-TEL-02` | Authoritative success language (AI-S7-07; VOICE-S7-10). User-facing "Recorded", "Saved" or "Done" text or speech is generated only from the committed domain outcome; a rendering or TTS failure after success never re-runs the command. | `8-§7-11` (1) |

## 16. FAQ-Before-AI Support Foundation

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-FAQ-01` | FAQ knowledge store (C-7; AI-S7-09). Business-independent `support_faq_entries` with stable ID, language variants (English, Malayalam, Manglish), provenance, effective and version dates, approval reference for Product-Truth-bearing content and stale/retired state; authored and stewarded by Team LIPS Support/CX per MC-08 §5. | `8-§4-1`, `8-§6-1`, `8-§6-2`, `8-§6-3`, `8-§12-5`, `BP-§10.2-W12`, `BP-§12-1`, `BP-§12-3` (8) |
| `EIS13-FAQ-02` | FAQ-first resolution. Support intent is identified, deterministic or retrieval matching runs before any model reasoning, answers are language-appropriate, ambiguous questions get one clarification, and AI explanation runs only when the FAQ is insufficient, grounded in approved knowledge. | `24-§17-1`, `24-§17-2`, `24-§17-4`, `9-§12-10`, `9-§17-7`, `8-§3-1`, `8-§3-2`, `8-§3-3`, `8-§3-4`, `8-§3-5`, `8-§3-8`, `8-§5-1`, `8-§5-2`, `8-§5-3`, `8-§7-1`, `8-§7-2`, `8-§7-3`, `8-§7-6`, `8-§12-1`, `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5` (24) |
| `EIS13-FAQ-03` | No-answer and escalation. Without a trusted answer the system says so and offers clarification or the escalation path (escalation itself is SB-P-1.19); it never invents policy, changes Product Truth, grants permission, exposes merchant data, claims account actions or hides uncertainty. | `24-§17-5`, `8-§6-4`, `8-§6-5`, `8-§7-7`, `8-§7-8`, `8-§7-9`, `8-§7-10`, `8-§7-12`, `8-§13-1`, `8-§15-1`, `8-§15-2`, `8-§15-3`, `8-§15-4`, `8-§15-6`, `8-§15-7`, `8-§15-10`, `8-§15-11`, `8-§17-2`, `8-§17-3`, `8-§17-4`, `8-§17-6` (21) |
| `EIS13-FAQ-04` | Support isolation from business operation. Support failures never block transaction entry or unrelated pages; the Workspace support path works without WhatsApp. | `8-§11-1`, `8-§11-2`, `8-§11-4`, `8-§11-5`, `8-§16-9` (5) |

## 17. Basic Voice Pipeline

Pipeline: capture (browser audio) → streaming upload to a voice server function → STT adapter (in memory) → interim results to the client for display only → finalized utterance → `NormalizedMessage` → Section 6 path → response text → optional TTS adapter → audio streamed to the client and not stored. Every layer of this path is covered by the transient raw-audio contract and its per-layer evidence (EIS13-VOI-02). Spoken confirmation uses a separate, explicitly armed capture bound to one proposal (EIS13-VOI-04) (Stage 10 C4, C6).

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-VOI-01` | Voice modality convergence (C-9; VOICE-S7-01). Captured audio → STT adapter → finalized transcript → `NormalizedMessage` → the same language, proposal, authority and command path as text; STT output is evidence/input only, never authority or a direct write. | `24-§5-5`, `24-§7-2`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-8`, `10-§4-2`, `10-§11-1`, `10-§11-2`, `10-§11-3`, `10-§11-5`, `10-§11-6`, `10-§11-7`, `10-§11-8`, `12-§4-6`, `12-§4-7`, `12-§4-8`, `12-§4-9`, `12-§6-1`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§6-6`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§11-1`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§11-9`, `12-§13-3`, `BP-§10.2-W4` (38) |
| `EIS13-VOI-02` | Transient raw-audio contract (FPDR-3; C-10; VOICE-S7-02, -03; Stage 10 C6: S10-VOICE-01, SEC13-EIS-S10-06). Raw audio is never default durable Smart Business data. The contract covers every layer: (1) client/browser capture buffers and application-controlled local caches (released after upload; no persistent client storage); (2) HTTP request-body, multipart and stream buffering; (3) framework/runtime buffering and temporary spill; (4) reverse proxy, CDN and edge body capture and diagnostics; (5) application logs, error capture, crash/debug capture, APM and observability (audio payloads redacted or excluded); (6) retry, queue and dead-letter persistence (none for audio); (7) analytics and test fixtures (no real merchant audio); (8) backup inclusion (none); (9) the provider transport boundary. Each layer needs evidence of memory-only handling or, where a platform makes that impossible, explicitly bounded temporary storage with deterministic disposal. Only transcript, structured result and required audit persist under policy. Provider-side retention is governed separately by EIS13-PRV-01 and is not assumed controlled (`UNVERIFIED — ACCESS REQUIRED`). | `12-§15-4`, `12-§16-8`, `12-§17-6` (3) |
| `EIS13-VOI-03` | Non-executable partials (C-11; VOICE-S7-11). Interim/streaming transcripts are display-only; proposals are created only from finalized utterances; background speech or partial text cannot execute anything. | `12-§17-1`, `12-§17-2`, `12-§17-3`, `12-§17-4` (4) |
| `EIS13-VOI-04` | Spoken confirmation binding (C-11; VOICE-S7-07; Stage 10 C4: S10-VOICE-02, AI-EIS10-01). Spoken confirm or reject is accepted only through an explicit, deterministic confirmation-capture context: (1) capture is armed only after the proposal preview is shown and the user deliberately starts confirmation capture (for example a confirm control or push-to-confirm); (2) the capture is bound to the exact proposal and confirmation-binding identifier and the reviewed-state fingerprint; (3) actor and active business must match the binding; (4) the binding must be valid, unexpired and unconsumed; (5) only confirm or reject intent is interpreted and no business field is regenerated; (6) stale, duplicate, replayed, background or out-of-window speech cannot execute; (7) no ambient listening, speaker or bystander inference, or hidden capture is introduced. Execution revalidates authority (EIS13-CNF-02). | `24-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7` (8) |
| `EIS13-VOI-05` | Voice/text semantic parity (C-12; VOICE-S7-05). Paired verification of equivalent text and voice intents at proposal, authority result, confirmation requirement, command, idempotency and stored state; voice applies the same roles and denials. | `24-§27-4`, `24-§31-2`, `10-§23-2`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-10` (11) |
| `EIS13-VOI-06` | Voice output. Concise audio for routine responses, spoken summary plus exact text for dense data, no long monologues, text always available; voice-specific uncertainty handling for amount, date, identity, quantity, payment state and noisy transcripts (VOICE-S7-06). | `24-§15-6`, `24-§15-7`, `10-§5-2`, `12-§3-1`, `12-§7-1`, `12-§7-2`, `12-§7-3`, `12-§7-4`, `12-§7-5`, `12-§7-8`, `12-§7-9`, `12-§7-10`, `12-§8-1`, `12-§8-2`, `12-§8-3`, `12-§8-5`, `12-§18-1`, `12-§18-2`, `12-§18-3` (19) |
| `EIS13-VOI-07` | FPDR-2 sequencing. Basic Voice is built and verified for available transaction capabilities; credit/repayment persistence and final acceptance of `12-§4-1`, `12-§7-6`, `12-§21-1` wait for SB-P-1.14; no complete claim before then. | `12-§4-1`, `12-§7-6`, `12-§21-1` (3) |
| `EIS13-VOI-08` | Voice failure behaviour. Handle unsupported format, transcription failure, provider failure, interrupted upload, response failure and unavailable output audio by failing only the voice path, keeping text usable, and never creating records from uncertain speech. | `12-§17-5`, `12-§17-6`, `12-§17-7`, `12-§17-9`, `12-§17-10`, `12-§17-11`, `12-§17-12`, `12-§17-13`, `12-§17-14`, `12-§17-15` (10) |
| `EIS13-VOI-09` | Basic Voice is never gated behind Voice Plus; no fixed provider, model or duration is Product Truth; voice creates no authority. | `12-§20-1`, `12-§20-2`, `12-§20-3`, `12-§20-4`, `12-§20-5`, `12-§20-6` (6) |
| `EIS13-VOI-10` | Voice provider adapter (C-14; VOICE-S7-14; Stage 10 C7: S10-VOICE-03). `SpeechToText` and `TextToSpeech` interfaces with normalized results, confidence, language tags and error codes; provider-specific code isolated in adapters; adapter selection by configuration; every adapter call carries the provider configuration identity accepted under EIS13-PRV-01. | `BP-§5.4-1`, `BP-§10.2-I1` (2) |

## 18. FPDR-4 Sensitive Output Without Surveillance

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-SNS-01` | Sensitive spoken output (FPDR-4; AI-S7-11; VOICE-S7-13; MC-08 §4). Output segments carry a sensitivity class derived from the capability that authorized them (for example Owner-intelligence); when trustworthy existing context indicates speaking is inappropriate, or sufficient context is absent, sensitive segments render as authenticated text; no ambient listening, bystander detection, location or new sensing; listening context never changes permission. | `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-5`, `12-§21-12` (5) |

## 19. Attachment Handoff Toward SB-P-1.14 UDI

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-ATT-01` | Attachment intake and handoff (Stage 10 C6: SEC13-EIS-S10-06). The Workspace accepts images, PDF, Excel, CSV and approved documents under content-type and size checks (reusing the catalog-import checks), acknowledges receipt and status, treats content as untrusted data and performs no consequential update; no Supabase storage bucket is created (Build Plan §16). Transient-attachment contract: one allowed staging class, in-request server memory; any other staging class requires a later EIS revision with its own evidence; each staged item is bound to the verified principal and active business and referenced by an unguessable identifier; bounded TTL; deterministic deletion on success, failure, expiry and abandonment; no copy in logs, telemetry or error payloads; no backup or dead-letter persistence; reauthorization through the kernel before status, retrieval, download or handoff; provider handoff only through the authorized interface and evidence gate. The handoff interface targets the SB-P-1.14 UDI contract. If a safe transient mechanism cannot be shown for the runtime, attachment intake stays held rather than adding durable storage. | `10-§4-3`, `10-§4-4`, `10-§4-5`, `10-§4-6`, `10-§4-7`, `10-§4-8`, `10-§10-2`, `10-§10-6`, `10-§10-8`, `10-§23-3a`, `BP-§10.2-W11` (11) |

## 20. Graceful Failure and WhatsApp-Independent Operation

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-FAIL-01` | AI and provider failure. Outage, timeout, rate limit, malformed output, low confidence, unavailable model, transcription failure, tool failure and excessive context each map to a typed failure state: no false success, input preserved, safe retry only, deterministic fallback to structured pages, clarification where useful, unrelated functions unaffected. | `24-§23-1`, `24-§23-2`, `24-§23-3`, `24-§23-4`, `24-§23-5`, `24-§23-7`, `24-§23-10`, `24-§23-11`, `24-§23-13`, `24-§23-15`, `24-§23-16`, `24-§23-17`, `24-§31-12`, `10-§18-5`, `10-§18-9`, `22-§29-10`, `22-§29-13`, `BP-§10.2-W13` (18) |
| `EIS13-FAIL-02` | Workspace error handling. Session expiry, failed upload, unsafe file, permission change, stale confirmation, failed download and feature-service failure are handled per operation; a narrow failure never freezes unrelated operation. | `10-§18-2`, `10-§18-3`, `10-§18-4`, `10-§18-6`, `10-§18-8`, `10-§18-10`, `10-§18-12`, `10-§18-13`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7` (15) |
| `EIS13-FAIL-03` | WhatsApp independence (Scenario B). The kernel has no Meta dependency; Scenario B is verified with Meta unreachable and outbound-request evidence showing no Meta call (B6-14). | `10-§14-1`, `10-§18-1`, `10-§23-7`, `BP-§8.4-2`, `BP-§10.2-E5`, `BP-§10.2-SB` (6) |

## 21. Provider Data-Control, Activation, Disable and Rollback Gates

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-PRV-01` | Provider data-control and activation gate (C-6; C-14; AI-S7-08; VOICE-S7-15, -16; Stage 10 C7: AI-EIS10-05, S10-VOICE-03). No merchant data reaches an AI or voice provider until an evidence pack is accepted for a versioned provider configuration identity recording: provider, service, model, organization/account/project, routing, retention controls, training/improvement settings, abuse-monitoring retention, logging/deletion controls, regional processing, credential custody, Smart Business adapter/config version, language-quality and latency results, evidence date and verifier. Runtime calls carry that configuration identity. A material change to provider, service, model, account/project, routing, retention/training/abuse-monitoring controls, region or other data-handling configuration invalidates the affected evidence; merchant data does not flow through the changed configuration until re-verification is accepted; the kill switch and text fallback stay available while evidence is stale. Provider request IDs are provenance only. Activation, purchase and selection need separate authorization. | 367 rows: all `IN SCOPE` rows carrying `DAI` or `DV` (Section 29.2) |
| `EIS13-PRV-02` | Provider disable and rollback (C-14). A per-provider kill switch disables AI or voice, including automatically when the active configuration's evidence is stale (EIS13-PRV-01); the text path and structured pages stay usable; committed records stay intact; pending or unknown commands stay reconcilable; restoration never replays a consequential command. (Stage 10 C7) | 122 rows: all `IN SCOPE` rows carrying `DV` (Section 29.2) |

## 22. Environment, Secrets and Configuration

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-ENV-01` | Secrets and configuration. Provider credentials are server-only Lovable Cloud environment values read in server functions; model routing, kill switches, thresholds and the active provider configuration identity are versioned configuration; nothing provider-secret is shipped to the browser or committed. (Stage 10 C7) | `24-§25-8` (1) |

## 23. Migration Expectations and Rehearsal (Design Only)

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-MIG-01` | Expected additive schema (design only, not executed): `conversation_threads`, `conversation_messages`, `ai_tool_proposals` (referencing SB-P-1.12 `confirmation_bindings`), `create_transaction_governed` with idempotency/outcome records, `support_faq_entries`, transcript/result records (no audio), aggregate telemetry. Access contract for every new object (Stage 10 C2; SEC13-EIS-S10-02): RLS enabled and forced on every business-scoped table, deny by default, policies calling SB-P-1.12 kernel helpers for capability and object scope (EIS-ISO-01), never a bare `business_id` or client state; composite `(business_id, id)` references (EIS-ISO-07); no `PUBLIC` or `anon` privilege on any business-data object, revoked in the creating migration, and creator-role default privileges reconciled (EIS-ISO-03); `authenticated` gets only the minimum read or `EXECUTE` intentionally allowed; writes to proposals, bindings, outcomes, transcripts and messages go through command functions where they are protected; definer functions follow EIS-ISO-10 with a `NOLOGIN NOINHERIT` owner; outcome and proposal reads return safe projections; `support_faq_entries` holds no business data and is readable to `authenticated` only. | None — non-product reason: Engineering design expectation for later migration missions; realizes rows mapped to WSP-05, CNF-01, CMD-02, FAQ-01, VOI-02 and TEL-01; adds no product behavior |
| `EIS13-MIG-02` | Migration ordering and rehearsal. Each migration runs only under a separately authorized migration mission (`docs/migration/README.md`), rehearsed on the isolated test project with rollback or forward-fix evidence. SB-P-1.13 objects that consume SB-P-1.12 run after the SB-P-1.12 families they depend on, except the transactions family, which is delivered as the single coordinated cut-over package in Section 13 (SB-P-1.12 WS-A3: never two authority paths live on one family). Production state of earlier migrations (for example `20260724170000`) is `UNVERIFIED — ACCESS REQUIRED` and must be re-verified first. (Stage 10 C1) | None — non-product reason: Migration governance; no product behavior |

## 24. CI and Verification Architecture

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-VER-01` | CI tiers. Fast Gate: lint, typecheck, build, unit tests for registry and authority-field exclusion, validation, instruction/data separation fixtures (including multilingual, document-borne and retrieved-content injection), frozen-proposal immutability, armed spoken-confirmation rules and FPDR-4 rendering. Full Assurance on the test project: isolation, idempotency/concurrency, unknown outcome, revalidation, revocation-safe cache/history reuse, the effective-access inventory of every new SB-P-1.13 object and the transactions family (grants, default privileges, RLS, function owner/security mode/`search_path`), the privileged-handler inventory, and absence of any effective direct transaction write path. Transient-data evidence for audio and attachments is collected per layer (Sections 17 and 19). Live provider evaluation runs outside CI against a recorded provider configuration identity (EIS13-PRV-01). (Stage 10 C1, C2, C3, C4, C5, C6, C7) | `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6` (6) |
| `EIS13-VER-02` | Acceptance and experience verification. Each acceptance scenario, Founder Runtime scenario and experience anchor in scope maps to a Verification Checklist item with an evidence class; the Completion Report carries the Experience Verification Matrix. | `BP-§13-1` (1) |

## 25. Non-Goals and Must-Not Checks

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-NG-01` | Must-not checks. Each listed non-goal is verified by design review and a negative test where testable: no model as database, permission engine, entitlement authority, executor or governance authority; no unrestricted DB access or free-form SQL by AI; no prompt-based permission; no per-channel brain; no AI-created authority; no false certainty; no English-only or literal-translation strategy; no generic chatbot; no duplicated memory, permissions, schedulers, OCR or identities; no GPS surveillance; no schema create/drop by subscription; no client-specific forks. | `24-§4-2`, `24-§4-3`, `24-§4-4`, `24-§4-5`, `24-§4-6`, `24-§4-7`, `24-§4-8`, `24-§30-1`, `24-§30-2`, `24-§30-3`, `24-§30-4`, `24-§30-5`, `24-§30-6`, `24-§30-7`, `24-§30-8`, `9-§18-1`, `9-§18-2`, `9-§18-3`, `9-§18-4`, `9-§18-5`, `9-§18-6`, `9-§18-7`, `10-§22-1`, `10-§22-2`, `10-§22-3`, `10-§22-4`, `10-§22-5`, `10-§22-6`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10` (38) |

## 26. Dependency-Rule Disclosures

| Contract 22 §27 item | This EIS |
|---|---|
| Features advanced | Contracts 9, 10, 24 (full); 8 (FAQ foundation); 12 (Basic Voice); 22 (touched); inherited 17, 20, 7 rows |
| Shared foundations reused | SB-P-1.12 kernel and surfaces (Section 8); existing transaction/correction and inventory command patterns (Section 5) |
| AI orchestration / channel adapter | Consumes and provides the AI orchestration kernel; no channel adapter (WhatsApp is SB-P-1.20) |
| Existing assets not duplicated | Authority model, Business Memory, catalog/inventory commands, catalog-import checks |
| Committed but outside the mission | 126 `ASSIGNED TO LATER MISSION` and 121 `DELEGATED` rows (Blueprint §11) |
| Blockers and dependencies | Section 27 |
| Acceptance evidence | Section 24; Blueprint §15 |

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-DOC-01` | Dependency-rule disclosures (Contract 22 §27). This EIS states the advanced contracts, reused foundations, consumed orchestration, existing assets not duplicated, committed out-of-mission scope, blockers and acceptance evidence (Sections 3, 5, 27, 28). | `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§29-14` (8) |

## 27. Holds and Dependency Gates

Holds carried through the lock (SB-P-1.13-MC-13 §4; MC-14 §7). Describing a mechanism here does not satisfy a hold.

| Hold | Condition | Requirement |
|---|---|---|
| `D12` | SB-P-1.12 consumption evidence accepted for each consumed family | EIS13-HOLD-01 |
| `DTX` | Transactions-family command-only cut-over and governed-command evidence | EIS13-HOLD-02 |
| Provider evidence | Section 28 evidence pack | EIS13-PRV-01 |
| Multilingual evaluation | Governed suite results | EIS13-LANG-06 |
| Transient-audio proof | Every persistence channel in EIS13-VOI-02 verified | EIS13-VOI-02 |
| Confirmation / idempotency | Binding, revalidation and replay evidence | EIS13-CNF-01, -02, EIS13-IDM-01, -02 |
| FPDR-4 context | Trustworthy-context evidence | EIS13-SNS-01 |
| Later-mission dependencies | Owning mission delivers its slice | EIS13-HOLD-03 |
| Runtime / acceptance evidence | Stage 17 and Stage 19 | EIS13-VER-02 |

| ID | Requirement | FCTM rows |
|---|---|---|
| `EIS13-HOLD-01` | SB-P-1.12 consumption gate (`D12`; SEC-13-S7-01). No requirement mapped to a `D12` row is implemented until the SB-P-1.12 workstreams it consumes are implemented, verified and accepted for SB-P-1.13 (EIS §19.5). | 252 rows: all `IN SCOPE` rows carrying `D12` (Section 29.2) |
| `EIS13-HOLD-02` | Transactions-family gate (`DTX`). All 17 `DTX` rows stay held until the coordinated transactions-family cut-over in Section 13 has completed step 8: the governed command exists under the executor contract, all callers use it, authenticated direct DML on `transactions` is revoked, and effective-access verification shows no alternate protected write path. (Stage 10 C1) | `24-§21-2`, `24-§31-13`, `9-§17-1`, `10-§11-2`, `10-§13-1`, `10-§13-2`, `10-§23-1`, `10-§23-9`, `12-§4-1`, `12-§21-1`, `12-§21-9`, `22-§29-8`, `17-§5-7`, `BP-§6.2-1`, `BP-§6.4-8`, `BP-§10.2-W9`, `BP-§10.2-SA1` (17) |
| `EIS13-HOLD-03` | Later-mission dependencies. Rows carrying `D14`, `D15`, `D16`–`D18`, `D19`, `D20` or `DUF6` realize only their SB-P-1.13 slice here; the dependent slice waits for the owning mission. | 54 rows: all `IN SCOPE` rows carrying `D14`, `D15`, `D16`–`D18`, `D19`, `D20` or `DUF6` (Section 29.2) |

## 28. UNVERIFIED — ACCESS REQUIRED Register

None of these facts is inferred in this EIS:

| Fact | State |
|---|---|
| Exact AI provider, service and model | `UNVERIFIED — ACCESS REQUIRED` |
| Exact voice provider, service and model | `UNVERIFIED — ACCESS REQUIRED` |
| Provider account or project identity | `UNVERIFIED — ACCESS REQUIRED` |
| Provider retention | `UNVERIFIED — ACCESS REQUIRED` |
| Training or improvement use | `UNVERIFIED — ACCESS REQUIRED` |
| Abuse-monitoring retention | `UNVERIFIED — ACCESS REQUIRED` |
| Regional processing | `UNVERIFIED — ACCESS REQUIRED` |
| Provider logging and deletion behaviour | `UNVERIFIED — ACCESS REQUIRED` |
| Credential custody | `UNVERIFIED — ACCESS REQUIRED` |
| Malayalam/Manglish quality (text and speech) | `UNVERIFIED — ACCESS REQUIRED` |
| Runtime latency (provider and end-to-end) | `UNVERIFIED — ACCESS REQUIRED` |
| Provider rollback behaviour | `UNVERIFIED — ACCESS REQUIRED` |
| Current production migration state (including `20260724170000`) | `UNVERIFIED — ACCESS REQUIRED` |
| Test-project state | `UNVERIFIED — ACCESS REQUIRED` |
| Lovable Cloud environment administration access | `UNVERIFIED — ACCESS REQUIRED` (impaired per SB-P-1.12 MC-70) |
| Platform, proxy, CDN and edge buffering, spill and diagnostic capture of audio and attachment request bodies | `UNVERIFIED — ACCESS REQUIRED` (evidence required per layer, EIS13-VOI-02, EIS13-ATT-01) |
| Accepted provider configuration identity (none yet) | `UNVERIFIED — ACCESS REQUIRED` (EIS13-PRV-01) |

## 29. Traceability

### 29.1 Integrity checks

| Check | Result |
|---|---|
| `IN SCOPE` FCTM rows | 651 |
| Rows mapped to at least one EIS requirement | 651 / 651 |
| Missing rows | 0 |
| Extra FCTM IDs (mapped but not `IN SCOPE`) | 0 |
| Mapped IDs absent from the FCTM | 0 |
| EIS requirements | 72 |
| Duplicate requirement IDs | 0 |
| Requirements with FCTM rows | 70 |
| Requirements with a recorded non-product reason and no rows | 2 (`EIS13-MIG-01`, `EIS13-MIG-02`) |
| Orphan requirements adding product behaviour | 0 |
| Row-to-requirement links | 1486 |
| FCTM disposition, owner, build commitment, commercial classification or assignment changes | 0 (FCTM read-only; blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22`) |

Rules for cross-cutting requirements: `EIS13-HOLD-01` selects every row carrying `D12`; `EIS13-HOLD-02` every row carrying `DTX`; `EIS13-HOLD-03` every row carrying a later-mission or policy code; `EIS13-PRV-01` every row carrying `DAI` or `DV`; `EIS13-PRV-02` every row carrying `DV`; `EIS13-CMD-02`, `EIS13-CMD-03`, `EIS13-VOI-02`, `EIS13-VOI-07` and `EIS13-SNS-01` also select every row whose Founder-decision cell carries `FPDR-1`, `FPDR-5`, `FPDR-3`, `FPDR-2` and `FPDR-4` respectively.

### 29.2 FCTM row to EIS requirement (651 rows)

| FCTM row | Blueprint | Source | Disposition | EIS requirements |
|---|---|---|---|---|
| `24-§4-1` | §8.3 | C24 §4 | IN SCOPE | EIS13-GW-01, EIS13-PRV-01 |
| `24-§4-2` | §8.12 | C24 §4 | IN SCOPE | EIS13-PRV-01, EIS13-NG-01 |
| `24-§4-3` | §8.12 | C24 §4 | IN SCOPE | EIS13-PRV-01, EIS13-NG-01 |
| `24-§4-4` | §8.12 | C24 §4 | IN SCOPE | EIS13-PRV-01, EIS13-NG-01 |
| `24-§4-5` | §8.12 | C24 §4 | IN SCOPE | EIS13-PRV-01, EIS13-NG-01 |
| `24-§4-6` | §8.12 | C24 §4 | IN SCOPE | EIS13-PRV-01, EIS13-NG-01 |
| `24-§4-7` | §8.12 | C24 §4 | IN SCOPE | EIS13-PRV-01, EIS13-NG-01 |
| `24-§4-8` | §8.12 | C24 §4 | IN SCOPE | EIS13-PRV-01, EIS13-NG-01 |
| `24-§5-1` | §8.3 | C24 §5 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§5-3` | §8.3 | C24 §5 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§5-5` | §8.7 | C24 §5 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§5-7` | §8.3 | C24 §5 | IN SCOPE | EIS13-ARC-02 |
| `24-§5-8` | §8.3 | C24 §5 | IN SCOPE | EIS13-ARC-01 |
| `24-§6-1` | §8.3 | C24 §6 | IN SCOPE | EIS13-GW-03, EIS13-PRV-01 |
| `24-§6-2` | §8.3 | C24 §6 | IN SCOPE | EIS13-GW-03, EIS13-PRV-01, EIS13-HOLD-03 |
| `24-§6-3` | §8.2 | C24 §6 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `24-§7-1` | §8.3 | C24 §7 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01 |
| `24-§7-2` | §8.7 | C24 §7 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§7-5` | §8.3 | C24 §7 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§8-1` | §8.2 | C24 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `24-§8-2` | §8.2 | C24 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `24-§8-3` | §8.2 | C24 §8 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§9-1` | §8.3 | C24 §9 | IN SCOPE | EIS13-CTX-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§9-2` | §8.3 | C24 §9 | IN SCOPE | EIS13-CTX-02, EIS13-HOLD-01, EIS13-HOLD-03 |
| `24-§9-3` | §8.3 | C24 §9 | IN SCOPE | EIS13-ARC-03, EIS13-HOLD-03 |
| `24-§9-4` | §8.3 | C24 §9 | IN SCOPE | EIS13-ARC-03 |
| `24-§10-1` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-2` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-3` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-4` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-5` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-6` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-7` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-8` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-9` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§10-10` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01, EIS13-HOLD-03 |
| `24-§10-11` | §8.4 | C24 §10 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `24-§11-1` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-2` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-3` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-4` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-5` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-6` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-7` | §8.5 | C24 §11 | IN SCOPE | EIS13-CNF-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-8` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-9` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§11-10` | §8.5 | C24 §11 | IN SCOPE | EIS13-TOOL-01, EIS13-HOLD-01 |
| `24-§13-2` | §8.5 | C24 §13 | IN SCOPE | EIS13-CNF-03 |
| `24-§15-1` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§15-2` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§15-3` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§15-4` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§15-5` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `24-§15-6` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§15-7` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§15-8` | §8.7 | C24 §15 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§17-1` | §8.8 | C24 §17 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `24-§17-2` | §8.8 | C24 §17 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `24-§17-4` | §8.8 | C24 §17 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `24-§17-5` | §8.8 | C24 §17 | IN SCOPE | EIS13-FAQ-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `24-§19-1` | §8.3 | C24 §19 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§19-2` | §8.3 | C24 §19 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§19-3` | §8.3 | C24 §19 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§19-4` | §8.3 | C24 §19 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§20-1` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§20-2` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§20-3` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§20-4` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§20-5` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§20-6` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§20-7` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§20-8` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§20-9` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§20-10` | §8.5 | C24 §20 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§21-1` | §8.5 | C24 §21 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `24-§21-2` | §8.5 | C24 §21 | IN SCOPE | EIS13-CNF-03, EIS13-CMD-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `24-§21-8` | §8.5 | C24 §21 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `24-§21-9` | §8.5 | C24 §21 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `24-§21-10` | §8.5 | C24 §21 | IN SCOPE | EIS13-CNF-02, EIS13-HOLD-01 |
| `24-§22-1` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01 |
| `24-§22-2` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01 |
| `24-§22-3` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01 |
| `24-§22-4` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01 |
| `24-§22-5` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01 |
| `24-§22-6` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01 |
| `24-§22-7` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01 |
| `24-§22-8` | §8.4 | C24 §22 | IN SCOPE | EIS13-AUTH-05, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§23-1` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-2` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-3` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-4` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-5` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§23-7` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-8` | §8.10 | C24 §23 | IN SCOPE | EIS13-IDM-02, EIS13-PRV-01 |
| `24-§23-9` | §8.10 | C24 §23 | IN SCOPE | EIS13-CTX-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§23-10` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§23-11` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-12` | §8.10 | C24 §23 | IN SCOPE | EIS13-IDM-02, EIS13-PRV-01 |
| `24-§23-13` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-14` | §8.10 | C24 §23 | IN SCOPE | EIS13-IDM-02, EIS13-PRV-01 |
| `24-§23-15` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-16` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-17` | §8.10 | C24 §23 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§23-18` | §8.10 | C24 §23 | IN SCOPE | EIS13-IDM-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§24-1` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-2` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-3` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-4` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-5` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-6` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-7` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-8` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-9` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `24-§24-10` | §8.6 | C24 §24 | IN SCOPE | EIS13-AUD-01, EIS13-PRV-01 |
| `24-§25-1` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§25-2` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§25-3` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§25-4` | §8.4 | C24 §25 | IN SCOPE | EIS13-WSP-05, EIS13-PRV-01 |
| `24-§25-5` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§25-6` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01 |
| `24-§25-7` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01 |
| `24-§25-8` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01, EIS13-ENV-01 |
| `24-§25-9` | §8.4 | C24 §25 | IN SCOPE | EIS13-AUTH-04 |
| `24-§26-1` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§26-2` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§26-3` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§26-4` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§26-5` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§26-6` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§26-7` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§26-8` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§26-9` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05, EIS13-TEL-01, EIS13-PRV-01 |
| `24-§26-10` | §8.3 | C24 §26 | IN SCOPE | EIS13-GW-05 |
| `24-§27-2` | §8.3 | C24 §27 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01 |
| `24-§27-4` | §8.7 | C24 §27 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02 |
| `24-§27-6` | §8.3 | C24 §27 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01 |
| `24-§27-7` | §8.3 | C24 §27 | IN SCOPE | EIS13-AUTH-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§27-8` | §8.3 | C24 §27 | IN SCOPE | EIS13-ARC-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§27-9` | §8.3 | C24 §27 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01 |
| `24-§27-10` | §8.3 | C24 §27 | IN SCOPE | EIS13-AUTH-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§27-11` | §8.3 | C24 §27 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01 |
| `24-§28-1` | §8.3 | C24 §28 | IN SCOPE | EIS13-GW-01, EIS13-PRV-01 |
| `24-§28-2` | §8.3 | C24 §28 | IN SCOPE | EIS13-GW-04, EIS13-PRV-01 |
| `24-§28-3` | §8.3 | C24 §28 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§28-4` | §8.3 | C24 §28 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§28-5` | §8.3 | C24 §28 | IN SCOPE | EIS13-TOOL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§28-6` | §8.3 | C24 §28 | IN SCOPE | EIS13-CTX-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§28-7` | §8.3 | C24 §28 | IN SCOPE | EIS13-WSP-05, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§28-8` | §8.3 | C24 §28 | IN SCOPE | EIS13-CMD-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§28-9` | §8.3 | C24 §28 | IN SCOPE | EIS13-GW-01, EIS13-PRV-01 |
| `24-§28-10` | §8.3 | C24 §28 | IN SCOPE | EIS13-GW-05, EIS13-PRV-01 |
| `24-§28-11` | §8.3 | C24 §28 | IN SCOPE | EIS13-GW-04, EIS13-PRV-01 |
| `24-§28-12` | §8.3 | C24 §28 | IN SCOPE | EIS13-AUD-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§29-1` | §8.3 | C24 §29 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§29-2` | §8.3 | C24 §29 | IN SCOPE | EIS13-ARC-03, EIS13-PRV-01 |
| `24-§29-3` | §8.3 | C24 §29 | IN SCOPE | EIS13-ARC-03, EIS13-PRV-01 |
| `24-§29-4` | §8.3 | C24 §29 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§29-5` | §8.3 | C24 §29 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§29-6` | §8.3 | C24 §29 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `24-§30-1` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§30-2` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§30-3` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§30-4` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§30-5` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§30-6` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§30-7` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§30-8` | §8.12 | C24 §30 | IN SCOPE | EIS13-NG-01 |
| `24-§31-1` | §8.3 | C24 §31 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `24-§31-2` | §8.7 | C24 §31 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `24-§31-3` | §8.4 | C24 §31 | IN SCOPE | EIS13-AUTH-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§31-4` | §8.4 | C24 §31 | IN SCOPE | EIS13-AUTH-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§31-5` | §8.2 | C24 §31 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `24-§31-6` | §8.3 | C24 §31 | IN SCOPE | EIS13-TOOL-02, EIS13-PRV-01 |
| `24-§31-7` | §8.5 | C24 §31 | IN SCOPE | EIS13-CNF-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§31-11` | §8.10 | C24 §31 | IN SCOPE | EIS13-IDM-02, EIS13-PRV-01, EIS13-HOLD-01 |
| `24-§31-12` | §8.10 | C24 §31 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `24-§31-13` | §8.5 | C24 §31 | IN SCOPE | EIS13-CMD-02, EIS13-IDM-01, EIS13-HOLD-01, EIS13-HOLD-02 |
| `24-§31-14` | §8.3 | C24 §31 | IN SCOPE | EIS13-AUD-01, EIS13-TEL-01, EIS13-PRV-01 |
| `24-§31-15` | §8.3 | C24 §31 | IN SCOPE | EIS13-ARC-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `24-§31-16` | §8.3 | C24 §31 | IN SCOPE | EIS13-GW-02, EIS13-PRV-01 |
| `9-§3-1` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-2` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-3` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-4` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-5` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-6` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-7` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-8` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§3-9` | §8.2 | C9 §3 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§4-1` | §8.2 | C9 §4 | IN SCOPE | EIS13-LANG-02, EIS13-HOLD-01 |
| `9-§4-2` | §8.2 | C9 §4 | IN SCOPE | EIS13-LANG-02 |
| `9-§4-3` | §8.2 | C9 §4 | IN SCOPE | EIS13-LANG-02 |
| `9-§4-4` | §8.2 | C9 §4 | IN SCOPE | EIS13-LANG-02 |
| `9-§4-5` | §8.2 | C9 §4 | IN SCOPE | EIS13-LANG-02 |
| `9-§5-1` | §8.2 | C9 §5 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§5-2` | §8.2 | C9 §5 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§6-1` | §8.2 | C9 §6 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§6-2` | §8.2 | C9 §6 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§7-1` | §8.2 | C9 §7 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§7-2` | §8.2 | C9 §7 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§7-3` | §8.2 | C9 §7 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§8-1` | §8.2 | C9 §8 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01, EIS13-PRV-02 |
| `9-§8-2` | §8.2 | C9 §8 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `9-§8-4` | §8.2 | C9 §8 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01, EIS13-PRV-02 |
| `9-§9-1` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `9-§9-2` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `9-§9-3` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `9-§9-4` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-CMD-03, EIS13-PRV-01 |
| `9-§9-5` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-03 |
| `9-§9-6` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `9-§9-7` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `9-§9-8` | §8.2 | C9 §9 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `9-§10-1` | §8.2 | C9 §10 | IN SCOPE | EIS13-LANG-04, EIS13-HOLD-01 |
| `9-§10-2` | §8.2 | C9 §10 | IN SCOPE | EIS13-LANG-04, EIS13-HOLD-01 |
| `9-§10-3` | §8.2 | C9 §10 | IN SCOPE | EIS13-LANG-04, EIS13-PRV-01, EIS13-HOLD-01 |
| `9-§11-1` | §8.2 | C9 §11 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§11-2` | §8.2 | C9 §11 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§11-3` | §8.2 | C9 §11 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§11-4` | §8.2 | C9 §11 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§11-5` | §8.2 | C9 §11 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§11-6` | §8.2 | C9 §11 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§11-7` | §8.2 | C9 §11 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `9-§12-4` | §8.2 | C9 §12 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§12-10` | §8.8 | C9 §12 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `9-§12-13` | §8.2 | C9 §12 | IN SCOPE | EIS13-LANG-01 |
| `9-§13-1` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-2` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-3` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-4` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-5` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-6` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-7` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-8` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§13-9` | §8.4 | C9 §13 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `9-§13-10` | §8.4 | C9 §13 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `9-§13-11` | §8.2 | C9 §13 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `9-§14-1` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§14-2` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§14-3` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§14-4` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§14-5` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§14-6` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§14-7` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§14-8` | §8.2 | C9 §14 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§15-1` | §8.2 | C9 §15 | IN SCOPE | EIS13-LANG-03 |
| `9-§15-2` | §8.2 | C9 §15 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `9-§15-3` | §8.2 | C9 §15 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `9-§15-4` | §8.2 | C9 §15 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `9-§15-5` | §8.2 | C9 §15 | IN SCOPE | EIS13-LANG-03 |
| `9-§16-1` | §8.2 | C9 §16 | IN SCOPE | EIS13-LANG-05, EIS13-PRV-01 |
| `9-§16-2` | §8.2 | C9 §16 | IN SCOPE | EIS13-LANG-05, EIS13-PRV-01 |
| `9-§16-3` | §8.2 | C9 §16 | IN SCOPE | EIS13-LANG-05, EIS13-PRV-01, EIS13-PRV-02 |
| `9-§16-4` | §8.2 | C9 §16 | IN SCOPE | EIS13-LANG-05, EIS13-PRV-01, EIS13-HOLD-01 |
| `9-§17-1` | §8.2 | C9 §17 | IN SCOPE | EIS13-LANG-06, EIS13-CMD-02, EIS13-PRV-01, EIS13-HOLD-01, EIS13-HOLD-02 |
| `9-§17-2` | §8.2 | C9 §17 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01 |
| `9-§17-3` | §8.2 | C9 §17 | IN SCOPE | EIS13-LANG-04, EIS13-PRV-01, EIS13-HOLD-01 |
| `9-§17-4` | §8.2 | C9 §17 | IN SCOPE | EIS13-LANG-06, EIS13-PRV-01, EIS13-PRV-02 |
| `9-§17-7` | §8.8 | C9 §17 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `9-§17-8` | §8.2 | C9 §17 | IN SCOPE | EIS13-LANG-02, EIS13-PRV-01 |
| `9-§17-9` | §8.2 | C9 §17 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01, EIS13-HOLD-03 |
| `9-§17-10` | §8.2 | C9 §17 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `9-§18-1` | §8.12 | C9 §18 | IN SCOPE | EIS13-NG-01 |
| `9-§18-2` | §8.12 | C9 §18 | IN SCOPE | EIS13-NG-01 |
| `9-§18-3` | §8.12 | C9 §18 | IN SCOPE | EIS13-NG-01 |
| `9-§18-4` | §8.12 | C9 §18 | IN SCOPE | EIS13-NG-01 |
| `9-§18-5` | §8.12 | C9 §18 | IN SCOPE | EIS13-NG-01 |
| `9-§18-6` | §8.12 | C9 §18 | IN SCOPE | EIS13-NG-01 |
| `9-§18-7` | §8.12 | C9 §18 | IN SCOPE | EIS13-NG-01 |
| `9-§19` | §8.4 | C9 §19 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `10-§4-1` | §8.1 | C10 §4 | IN SCOPE | EIS13-WSP-02, EIS13-PRV-01 |
| `10-§4-2` | §8.7 | C10 §4 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `10-§4-3` | §8.9 | C10 §4 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-03 |
| `10-§4-4` | §8.9 | C10 §4 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-03 |
| `10-§4-5` | §8.9 | C10 §4 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-03 |
| `10-§4-6` | §8.9 | C10 §4 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-03 |
| `10-§4-7` | §8.9 | C10 §4 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-03 |
| `10-§4-8` | §8.9 | C10 §4 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-03 |
| `10-§5-1` | §8.1 | C10 §5 | IN SCOPE | EIS13-WSP-02 |
| `10-§5-2` | §8.7 | C10 §5 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `10-§5-3` | §8.1 | C10 §5 | IN SCOPE | EIS13-WSP-02 |
| `10-§5-4` | §8.1 | C10 §5 | IN SCOPE | EIS13-WSP-02 |
| `10-§5-6` | §8.1 | C10 §5 | IN SCOPE | EIS13-WSP-02 |
| `10-§5-8` | §8.1 | C10 §5 | IN SCOPE | EIS13-WSP-02, EIS13-HOLD-01 |
| `10-§5-9` | §8.1 | C10 §5 | IN SCOPE | EIS13-WSP-02, EIS13-HOLD-01 |
| `10-§5-11` | §8.1 | C10 §5 | IN SCOPE | EIS13-WSP-02, EIS13-PRV-01, EIS13-PRV-02 |
| `10-§6-1` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-2` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-3` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-4` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-5` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-6` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-03 |
| `10-§6-7` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-8` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-9` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-10` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-11` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-12` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§6-13` | §8.1 | C10 §6 | IN SCOPE | EIS13-WSP-03 |
| `10-§7-2` | §8.5 | C10 §7 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `10-§7-3` | §8.5 | C10 §7 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `10-§7-4` | §8.5 | C10 §7 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `10-§7-5` | §8.5 | C10 §7 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `10-§7-6` | §8.1 | C10 §7 | IN SCOPE | EIS13-ARC-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§8-1` | §8.4 | C10 §8 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§8-2` | §8.4 | C10 §8 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§8-3` | §8.4 | C10 §8 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§8-4` | §8.4 | C10 §8 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§9-3` | §8.5 | C10 §9 | IN SCOPE | EIS13-CNF-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§10-2` | §8.9 | C10 §10 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§10-6` | §8.9 | C10 §10 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§10-8` | §8.9 | C10 §10 | IN SCOPE | EIS13-ATT-01 |
| `10-§11-1` | §8.7 | C10 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `10-§11-2` | §8.7 | C10 §11 | IN SCOPE | EIS13-CMD-02, EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `10-§11-3` | §8.7 | C10 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `10-§11-5` | §8.7 | C10 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `10-§11-6` | §8.7 | C10 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `10-§11-7` | §8.7 | C10 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `10-§11-8` | §8.7 | C10 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `10-§12-1` | §8.2 | C10 §12 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `10-§12-2` | §8.2 | C10 §12 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `10-§12-3` | §8.2 | C10 §12 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `10-§13-1` | §8.5 | C10 §13 | IN SCOPE | EIS13-CMD-01, EIS13-CMD-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `10-§13-2` | §8.5 | C10 §13 | IN SCOPE | EIS13-CMD-01, EIS13-CMD-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `10-§13-8` | §8.5 | C10 §13 | IN SCOPE | EIS13-CMD-01, EIS13-HOLD-01 |
| `10-§13-9` | §8.5 | C10 §13 | IN SCOPE | EIS13-CMD-01, EIS13-HOLD-01 |
| `10-§13-10` | §8.5 | C10 §13 | IN SCOPE | EIS13-CMD-01, EIS13-HOLD-01 |
| `10-§13-11` | §8.5 | C10 §13 | IN SCOPE | EIS13-CMD-01, EIS13-HOLD-01 |
| `10-§13-12` | §8.5 | C10 §13 | IN SCOPE | EIS13-CMD-01, EIS13-HOLD-01 |
| `10-§14-1` | §8.10 | C10 §14 | IN SCOPE | EIS13-FAIL-03, EIS13-HOLD-01 |
| `10-§15-1` | §8.4 | C10 §15 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§15-2` | §8.4 | C10 §15 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§15-3` | §8.4 | C10 §15 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§15-4` | §8.4 | C10 §15 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§15-5` | §8.4 | C10 §15 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§15-6` | §8.4 | C10 §15 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§15-7` | §8.4 | C10 §15 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `10-§16-1` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05 |
| `10-§16-2` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05, EIS13-HOLD-03 |
| `10-§16-3` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05, EIS13-HOLD-01 |
| `10-§16-4` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05, EIS13-HOLD-03 |
| `10-§16-5` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05, EIS13-HOLD-03 |
| `10-§16-6` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05, EIS13-HOLD-01 |
| `10-§16-7` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05, EIS13-HOLD-01 |
| `10-§16-8` | §8.1 | C10 §16 | IN SCOPE | EIS13-WSP-05 |
| `10-§17-1` | §8.2 | C10 §17 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `10-§17-2` | §8.2 | C10 §17 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `10-§17-3` | §8.2 | C10 §17 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `10-§17-6` | §8.2 | C10 §17 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `10-§17-7` | §8.2 | C10 §17 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `10-§17-8` | §8.5 | C10 §17 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `10-§17-9` | §8.5 | C10 §17 | IN SCOPE | EIS13-CNF-02, EIS13-HOLD-01 |
| `10-§18-1` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-03, EIS13-HOLD-01 |
| `10-§18-2` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02 |
| `10-§18-3` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02 |
| `10-§18-4` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02 |
| `10-§18-5` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `10-§18-6` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02, EIS13-HOLD-01 |
| `10-§18-7` | §8.10 | C10 §18 | IN SCOPE | EIS13-IDM-01, EIS13-HOLD-01 |
| `10-§18-8` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02, EIS13-HOLD-01 |
| `10-§18-9` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `10-§18-10` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02 |
| `10-§18-12` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02 |
| `10-§18-13` | §8.10 | C10 §18 | IN SCOPE | EIS13-FAIL-02 |
| `10-§19-1` | §8.4 | C10 §19 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `10-§19-2` | §8.4 | C10 §19 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `10-§19-3` | §8.4 | C10 §19 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `10-§19-4` | §8.4 | C10 §19 | IN SCOPE | EIS13-AUTH-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `10-§19-5` | §8.4 | C10 §19 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `10-§19-6` | §8.4 | C10 §19 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `10-§19-7` | §8.4 | C10 §19 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `10-§20-1` | §8.1 | C10 §20 | IN SCOPE | EIS13-WSP-06, EIS13-PRV-01 |
| `10-§20-2` | §8.1 | C10 §20 | IN SCOPE | EIS13-WSP-06 |
| `10-§20-3` | §8.1 | C10 §20 | IN SCOPE | EIS13-WSP-06 |
| `10-§20-4` | §8.1 | C10 §20 | IN SCOPE | EIS13-WSP-06 |
| `10-§20-5` | §8.1 | C10 §20 | IN SCOPE | EIS13-WSP-06, EIS13-HOLD-01 |
| `10-§20-6` | §8.1 | C10 §20 | IN SCOPE | EIS13-WSP-01 |
| `10-§22-1` | §8.12 | C10 §22 | IN SCOPE | EIS13-NG-01 |
| `10-§22-2` | §8.12 | C10 §22 | IN SCOPE | EIS13-NG-01 |
| `10-§22-3` | §8.12 | C10 §22 | IN SCOPE | EIS13-NG-01 |
| `10-§22-4` | §8.12 | C10 §22 | IN SCOPE | EIS13-NG-01 |
| `10-§22-5` | §8.12 | C10 §22 | IN SCOPE | EIS13-NG-01 |
| `10-§22-6` | §8.12 | C10 §22 | IN SCOPE | EIS13-NG-01 |
| `10-§23-1` | §8.5 | C10 §23 | IN SCOPE | EIS13-CMD-02, EIS13-PRV-01, EIS13-HOLD-01, EIS13-HOLD-02 |
| `10-§23-2` | §8.7 | C10 §23 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `10-§23-3a` | §8.9 | C10 §23 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `10-§23-5` | §8.4 | C10 §23 | IN SCOPE | EIS13-AUTH-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `10-§23-7` | §8.10 | C10 §23 | IN SCOPE | EIS13-FAIL-03, EIS13-HOLD-01 |
| `10-§23-8` | §8.5 | C10 §23 | IN SCOPE | EIS13-CNF-02, EIS13-HOLD-01 |
| `10-§23-9` | §8.5 | C10 §23 | IN SCOPE | EIS13-CMD-02, EIS13-IDM-01, EIS13-HOLD-01, EIS13-HOLD-02 |
| `10-§23-10` | §8.4 | C10 §23 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `12-§3-1` | §8.7 | C12 §3 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§4-1` | §8.7 | C12 §4 | IN SCOPE | EIS13-CMD-02, EIS13-CMD-03, EIS13-VOI-07, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01, EIS13-HOLD-02, EIS13-HOLD-03 |
| `12-§4-6` | §8.7 | C12 §4 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§4-7` | §8.7 | C12 §4 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§4-8` | §8.7 | C12 §4 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§4-9` | §8.7 | C12 §4 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§6-1` | §8.7 | C12 §6 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§6-2` | §8.7 | C12 §6 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§6-3` | §8.7 | C12 §6 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§6-4` | §8.7 | C12 §6 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§6-5` | §8.7 | C12 §6 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§6-6` | §8.7 | C12 §6 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§7-1` | §8.7 | C12 §7 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§7-2` | §8.7 | C12 §7 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§7-3` | §8.7 | C12 §7 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§7-4` | §8.7 | C12 §7 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§7-5` | §8.7 | C12 §7 | IN SCOPE | EIS13-CMD-03, EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§7-6` | §8.7 | C12 §7 | IN SCOPE | EIS13-CMD-03, EIS13-VOI-07, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-03 |
| `12-§7-8` | §8.7 | C12 §7 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§7-9` | §8.7 | C12 §7 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§7-10` | §8.7 | C12 §7 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§8-1` | §8.7 | C12 §8 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§8-2` | §8.7 | C12 §8 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§8-3` | §8.7 | C12 §8 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§8-5` | §8.7 | C12 §8 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§9-1` | §8.7 | C12 §9 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§9-2` | §8.7 | C12 §9 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§9-3` | §8.7 | C12 §9 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§11-1` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§11-2` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§11-3` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§11-4` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§11-5` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01, EIS13-HOLD-03 |
| `12-§11-7` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§11-8` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§11-9` | §8.7 | C12 §11 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§13-3` | §8.7 | C12 §13 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§14-1` | §8.7 | C12 §14 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§14-2` | §8.7 | C12 §14 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§14-3` | §8.7 | C12 §14 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§14-4` | §8.7 | C12 §14 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§15-1` | §8.7 | C12 §15 | IN SCOPE | EIS13-SNS-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§15-2` | §8.7 | C12 §15 | IN SCOPE | EIS13-SNS-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§15-3` | §8.7 | C12 §15 | IN SCOPE | EIS13-SNS-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§15-4` | §8.7 | C12 §15 | IN SCOPE | EIS13-VOI-02, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01, EIS13-HOLD-03 |
| `12-§15-5` | §8.7 | C12 §15 | IN SCOPE | EIS13-SNS-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-1` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-2` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-3` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-4` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-5` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-6` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-7` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-04, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§16-8` | §8.7 | C12 §16 | IN SCOPE | EIS13-VOI-02, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-03 |
| `12-§17-1` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-03, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-2` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-03, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-3` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-03, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-4` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-03, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-5` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-6` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-02, EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-7` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§17-8` | §8.7 | C12 §17 | IN SCOPE | EIS13-IDM-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§17-9` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-10` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-11` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-12` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-13` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-14` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§17-15` | §8.7 | C12 §17 | IN SCOPE | EIS13-VOI-08, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§18-1` | §8.7 | C12 §18 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§18-2` | §8.7 | C12 §18 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§18-3` | §8.7 | C12 §18 | IN SCOPE | EIS13-VOI-06, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§20-1` | §8.7 | C12 §20 | IN SCOPE | EIS13-VOI-09, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§20-2` | §8.7 | C12 §20 | IN SCOPE | EIS13-VOI-09, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§20-3` | §8.7 | C12 §20 | IN SCOPE | EIS13-VOI-09, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§20-4` | §8.7 | C12 §20 | IN SCOPE | EIS13-VOI-09, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§20-5` | §8.7 | C12 §20 | IN SCOPE | EIS13-VOI-09, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§20-6` | §8.7 | C12 §20 | IN SCOPE | EIS13-VOI-09, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§21-1` | §8.7 | C12 §21 | IN SCOPE | EIS13-CMD-02, EIS13-CMD-03, EIS13-VOI-07, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01, EIS13-HOLD-02, EIS13-HOLD-03 |
| `12-§21-2` | §8.7 | C12 §21 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§21-7` | §8.7 | C12 §21 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§21-8` | §8.7 | C12 §21 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `12-§21-9` | §8.7 | C12 §21 | IN SCOPE | EIS13-CMD-02, EIS13-IDM-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `12-§21-10` | §8.7 | C12 §21 | IN SCOPE | EIS13-VOI-05, EIS13-PRV-01, EIS13-PRV-02 |
| `12-§21-12` | §8.7 | C12 §21 | IN SCOPE | EIS13-SNS-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `8-§3-1` | §8.8 | C8 §3 | IN SCOPE | EIS13-FAQ-02 |
| `8-§3-2` | §8.8 | C8 §3 | IN SCOPE | EIS13-FAQ-02 |
| `8-§3-3` | §8.8 | C8 §3 | IN SCOPE | EIS13-FAQ-02 |
| `8-§3-4` | §8.8 | C8 §3 | IN SCOPE | EIS13-FAQ-02 |
| `8-§3-5` | §8.8 | C8 §3 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§3-8` | §8.8 | C8 §3 | IN SCOPE | EIS13-FAQ-02 |
| `8-§4-1` | §8.8 | C8 §4 | IN SCOPE | EIS13-FAQ-01 |
| `8-§5-1` | §8.8 | C8 §5 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§5-2` | §8.8 | C8 §5 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§5-3` | §8.8 | C8 §5 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§6-1` | §8.8 | C8 §6 | IN SCOPE | EIS13-FAQ-01 |
| `8-§6-2` | §8.8 | C8 §6 | IN SCOPE | EIS13-FAQ-01 |
| `8-§6-3` | §8.8 | C8 §6 | IN SCOPE | EIS13-FAQ-01 |
| `8-§6-4` | §8.8 | C8 §6 | IN SCOPE | EIS13-FAQ-03 |
| `8-§6-5` | §8.8 | C8 §6 | IN SCOPE | EIS13-FAQ-03 |
| `8-§7-1` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§7-2` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§7-3` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§7-6` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§7-7` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-03 |
| `8-§7-8` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-03 |
| `8-§7-9` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-03, EIS13-HOLD-01 |
| `8-§7-10` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-03, EIS13-HOLD-01 |
| `8-§7-11` | §8.8 | C8 §7 | IN SCOPE | EIS13-TEL-02 |
| `8-§7-12` | §8.8 | C8 §7 | IN SCOPE | EIS13-FAQ-03 |
| `8-§11-1` | §8.8 | C8 §11 | IN SCOPE | EIS13-FAQ-04 |
| `8-§11-2` | §8.8 | C8 §11 | IN SCOPE | EIS13-FAQ-04 |
| `8-§11-4` | §8.8 | C8 §11 | IN SCOPE | EIS13-FAQ-04 |
| `8-§11-5` | §8.8 | C8 §11 | IN SCOPE | EIS13-FAQ-04 |
| `8-§12-1` | §8.8 | C8 §12 | IN SCOPE | EIS13-FAQ-02 |
| `8-§12-5` | §8.8 | C8 §12 | IN SCOPE | EIS13-FAQ-01 |
| `8-§13-1` | §8.8 | C8 §13 | IN SCOPE | EIS13-FAQ-03 |
| `8-§15-1` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03 |
| `8-§15-2` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03 |
| `8-§15-3` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03 |
| `8-§15-4` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03, EIS13-PRV-01 |
| `8-§15-6` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03 |
| `8-§15-7` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03 |
| `8-§15-10` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03 |
| `8-§15-11` | §8.8 | C8 §15 | IN SCOPE | EIS13-FAQ-03, EIS13-HOLD-03 |
| `8-§16-1` | §8.8 | C8 §16 | IN SCOPE | EIS13-FAQ-02 |
| `8-§16-2` | §8.8 | C8 §16 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§16-3` | §8.8 | C8 §16 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§16-4` | §8.8 | C8 §16 | IN SCOPE | EIS13-FAQ-02 |
| `8-§16-5` | §8.8 | C8 §16 | IN SCOPE | EIS13-FAQ-02, EIS13-PRV-01 |
| `8-§16-9` | §8.8 | C8 §16 | IN SCOPE | EIS13-FAQ-04 |
| `8-§17-2` | §8.8 | C8 §17 | IN SCOPE | EIS13-FAQ-03 |
| `8-§17-3` | §8.8 | C8 §17 | IN SCOPE | EIS13-FAQ-03 |
| `8-§17-4` | §8.8 | C8 §17 | IN SCOPE | EIS13-FAQ-03 |
| `8-§17-6` | §8.8 | C8 §17 | IN SCOPE | EIS13-FAQ-03 |
| `22-§4-2` | §8.1 | C22 §4 | IN SCOPE | EIS13-WSP-03 |
| `22-§7-1` | §8.3 | C22 §7 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01 |
| `22-§7-2` | §8.3 | C22 §7 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01 |
| `22-§7-3` | §8.3 | C22 §7 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01 |
| `22-§7-4` | §8.3 | C22 §7 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01 |
| `22-§7-5` | §8.3 | C22 §7 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01 |
| `22-§7-6` | §8.3 | C22 §7 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01 |
| `22-§7-7` | §8.3 | C22 §7 | IN SCOPE | EIS13-ARC-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `22-§7-8` | §8.3 | C22 §7 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01 |
| `22-§7-9` | §8.3 | C22 §7 | IN SCOPE | EIS13-ARC-01 |
| `22-§7-10` | §8.3 | C22 §7 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01 |
| `22-§8-1` | §8.2 | C22 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `22-§8-2` | §8.2 | C22 §8 | IN SCOPE | EIS13-LANG-01 |
| `22-§8-3` | §8.2 | C22 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `22-§8-4` | §8.2 | C22 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01, EIS13-PRV-02 |
| `22-§8-5` | §8.2 | C22 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `22-§8-6` | §8.2 | C22 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `22-§8-7` | §8.2 | C22 §8 | IN SCOPE | EIS13-LANG-01, EIS13-PRV-01 |
| `22-§17` | §8.3 | C22 §17 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01, EIS13-PRV-02 |
| `22-§19-1` | §8.10 | C22 §19 | IN SCOPE | EIS13-FAIL-02, EIS13-PRV-01 |
| `22-§19-2` | §8.10 | C22 §19 | IN SCOPE | EIS13-FAIL-02, EIS13-PRV-01 |
| `22-§19-3` | §8.10 | C22 §19 | IN SCOPE | EIS13-FAIL-02, EIS13-PRV-01 |
| `22-§19-4` | §8.10 | C22 §19 | IN SCOPE | EIS13-FAIL-02, EIS13-PRV-01 |
| `22-§19-5` | §8.10 | C22 §19 | IN SCOPE | EIS13-FAIL-02, EIS13-PRV-01 |
| `22-§19-6` | §8.10 | C22 §19 | IN SCOPE | EIS13-FAIL-02, EIS13-PRV-01 |
| `22-§19-7` | §8.10 | C22 §19 | IN SCOPE | EIS13-FAIL-02, EIS13-PRV-01 |
| `22-§21` | §8.11 | C22 §21 | IN SCOPE | EIS13-WSP-06, EIS13-PRV-01 |
| `22-§22-1` | §8.11 | C22 §22 | IN SCOPE | EIS13-VER-01 |
| `22-§22-2` | §8.11 | C22 §22 | IN SCOPE | EIS13-VER-01, EIS13-HOLD-01 |
| `22-§22-3` | §8.11 | C22 §22 | IN SCOPE | EIS13-VER-01 |
| `22-§22-4` | §8.11 | C22 §22 | IN SCOPE | EIS13-VER-01 |
| `22-§22-5` | §8.11 | C22 §22 | IN SCOPE | EIS13-VER-01 |
| `22-§22-6` | §8.11 | C22 §22 | IN SCOPE | EIS13-VER-01 |
| `22-§23-2` | §8.4 | C22 §23 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `22-§23-3` | §8.4 | C22 §23 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `22-§23-5` | §8.4 | C22 §23 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `22-§23-7` | §8.4 | C22 §23 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `22-§24-1` | §8.3 | C22 §24 | IN SCOPE | EIS13-ARC-03, EIS13-PRV-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `22-§24-2` | §8.4 | C22 §24 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `22-§24-3` | §8.4 | C22 §24 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `22-§27-1` | §8.11 | C22 §27 | IN SCOPE | EIS13-DOC-01 |
| `22-§27-2` | §8.11 | C22 §27 | IN SCOPE | EIS13-DOC-01 |
| `22-§27-3` | §8.11 | C22 §27 | IN SCOPE | EIS13-DOC-01 |
| `22-§27-4` | §8.11 | C22 §27 | IN SCOPE | EIS13-DOC-01 |
| `22-§27-5` | §8.11 | C22 §27 | IN SCOPE | EIS13-DOC-01 |
| `22-§27-6` | §8.11 | C22 §27 | IN SCOPE | EIS13-DOC-01 |
| `22-§27-7` | §8.11 | C22 §27 | IN SCOPE | EIS13-DOC-01 |
| `22-§28-1` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-2` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-3` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-4` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-5` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-6` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-7` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-8` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-9` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§28-10` | §8.12 | C22 §28 | IN SCOPE | EIS13-NG-01 |
| `22-§29-1` | §8.3 | C22 §29 | IN SCOPE | EIS13-ARC-02, EIS13-HOLD-01, EIS13-HOLD-03 |
| `22-§29-2` | §8.3 | C22 §29 | IN SCOPE | EIS13-ARC-02, EIS13-PRV-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `22-§29-3` | §8.4 | C22 §29 | IN SCOPE | EIS13-AUTH-04, EIS13-HOLD-01 |
| `22-§29-7` | §8.5 | C22 §29 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `22-§29-8` | §8.5 | C22 §29 | IN SCOPE | EIS13-CMD-02, EIS13-IDM-01, EIS13-HOLD-01, EIS13-HOLD-02 |
| `22-§29-10` | §8.10 | C22 §29 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01, EIS13-PRV-02 |
| `22-§29-12` | §8.6 | C22 §29 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `22-§29-13` | §8.10 | C22 §29 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `22-§29-14` | §8.11 | C22 §29 | IN SCOPE | EIS13-DOC-01 |
| `17-§5-1` | §8.1 | C17 §5 | IN SCOPE | EIS13-WSP-01 |
| `17-§5-2` | §8.1 | C17 §5 | IN SCOPE | EIS13-WSP-01 |
| `17-§5-3` | §8.1 | C17 §5 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01 |
| `17-§5-4` | §8.1 | C17 §5 | IN SCOPE | EIS13-ARC-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `17-§5-5` | §8.1 | C17 §5 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01 |
| `17-§5-6` | §8.1 | C17 §5 | IN SCOPE | EIS13-WSP-03, EIS13-PRV-01 |
| `17-§5-7` | §8.5 | C17 §5 | IN SCOPE | EIS13-CMD-01, EIS13-CMD-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `17-§5-8` | §8.1 | C17 §5 | IN SCOPE | EIS13-WSP-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `17-§22-4` | §8.1 | C17 §22 | IN SCOPE | EIS13-WSP-04, EIS13-HOLD-01, EIS13-HOLD-03 |
| `17-§22-8` | §8.1 | C17 §22 | IN SCOPE | EIS13-WSP-01 |
| `20-§14-1` | §8.2 | C20 §14 | IN SCOPE | EIS13-LANG-02, EIS13-PRV-01, EIS13-HOLD-03 |
| `20-§14-2` | §8.2 | C20 §14 | IN SCOPE | EIS13-LANG-02, EIS13-PRV-01 |
| `20-§14-3` | §8.2 | C20 §14 | IN SCOPE | EIS13-LANG-02, EIS13-PRV-01 |
| `20-§14-4` | §8.2 | C20 §14 | IN SCOPE | EIS13-LANG-02, EIS13-PRV-01 |
| `20-§15-3` | §8.1 | C20 §15 | IN SCOPE | EIS13-WSP-01 |
| `7-§11-2` | §8.4 | C7 §11 | IN SCOPE | EIS13-AUTH-03, EIS13-HOLD-01, EIS13-HOLD-03 |
| `BP-§5.4-1` | §8.7 | BP §5.4 | IN SCOPE | EIS13-VOI-10, EIS13-PRV-01, EIS13-PRV-02 |
| `BP-§6.2-1` | §8.5 | BP §6.2 | IN SCOPE | EIS13-CMD-01, EIS13-CMD-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `BP-§6.2-2` | §8.5 | BP §6.2 | IN SCOPE | EIS13-CMD-01, EIS13-HOLD-01 |
| `BP-§6.4-1` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `BP-§6.4-2` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-HOLD-01 |
| `BP-§6.4-3` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01 |
| `BP-§6.4-4` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `BP-§6.4-5` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01 |
| `BP-§6.4-6` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `BP-§6.4-7` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-HOLD-01 |
| `BP-§6.4-8` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-CMD-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `BP-§6.4-9` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01, EIS13-HOLD-03 |
| `BP-§6.4-10` | §8.3 | BP §6.4 | IN SCOPE | EIS13-ARC-01, EIS13-HOLD-01 |
| `BP-§6.6-1` | §8.3 | BP §6.6 | IN SCOPE | EIS13-ARC-01 |
| `BP-§8.3-1` | §8.1 | BP §8.3 | IN SCOPE | EIS13-WSP-01 |
| `BP-§8.4-1` | §8.3 | BP §8.4 | IN SCOPE | EIS13-ARC-02 |
| `BP-§8.4-2` | §8.10 | BP §8.4 | IN SCOPE | EIS13-FAIL-03, EIS13-HOLD-01 |
| `BP-§8.4-3` | §8.3 | BP §8.4 | IN SCOPE | EIS13-ARC-02 |
| `BP-§10.2-W1` | §8.1 | BP §10.2 | IN SCOPE | EIS13-WSP-01, EIS13-HOLD-01 |
| `BP-§10.2-W2` | §8.2 | BP §10.2 | IN SCOPE | EIS13-LANG-01 |
| `BP-§10.2-W3` | §8.1 | BP §10.2 | IN SCOPE | EIS13-WSP-05, EIS13-HOLD-01 |
| `BP-§10.2-W4` | §8.7 | BP §10.2 | IN SCOPE | EIS13-VOI-01, EIS13-PRV-01, EIS13-PRV-02, EIS13-HOLD-01 |
| `BP-§10.2-W5` | §8.3 | BP §10.2 | IN SCOPE | EIS13-GW-01, EIS13-PRV-01 |
| `BP-§10.2-W6` | §8.5 | BP §10.2 | IN SCOPE | EIS13-TOOL-01, EIS13-HOLD-01 |
| `BP-§10.2-W7` | §8.4 | BP §10.2 | IN SCOPE | EIS13-AUTH-01, EIS13-HOLD-01 |
| `BP-§10.2-W8` | §8.5 | BP §10.2 | IN SCOPE | EIS13-CNF-01, EIS13-HOLD-01 |
| `BP-§10.2-W9` | §8.5 | BP §10.2 | IN SCOPE | EIS13-CMD-02, EIS13-HOLD-01, EIS13-HOLD-02 |
| `BP-§10.2-W10` | §8.6 | BP §10.2 | IN SCOPE | EIS13-AUD-01, EIS13-HOLD-01 |
| `BP-§10.2-W11` | §8.9 | BP §10.2 | IN SCOPE | EIS13-ATT-01, EIS13-HOLD-01, EIS13-HOLD-03 |
| `BP-§10.2-W12` | §8.8 | BP §10.2 | IN SCOPE | EIS13-FAQ-01 |
| `BP-§10.2-W13` | §8.10 | BP §10.2 | IN SCOPE | EIS13-FAIL-01, EIS13-PRV-01 |
| `BP-§10.2-I1` | §8.7 | BP §10.2 | IN SCOPE | EIS13-VOI-10, EIS13-PRV-01, EIS13-PRV-02 |
| `BP-§10.2-E1` | §8.1 | BP §10.2 | IN SCOPE | EIS13-WSP-01, EIS13-PRV-01, EIS13-HOLD-01 |
| `BP-§10.2-E2` | §8.2 | BP §10.2 | IN SCOPE | EIS13-LANG-03, EIS13-PRV-01 |
| `BP-§10.2-E3` | §8.4 | BP §10.2 | IN SCOPE | EIS13-AUTH-02, EIS13-HOLD-01 |
| `BP-§10.2-E4` | §8.1 | BP §10.2 | IN SCOPE | EIS13-WSP-01 |
| `BP-§10.2-E5` | §8.10 | BP §10.2 | IN SCOPE | EIS13-FAIL-03, EIS13-HOLD-01 |
| `BP-§10.2-SA1` | §8.5 | BP §10.2 | IN SCOPE | EIS13-CMD-02, EIS13-PRV-01, EIS13-HOLD-01, EIS13-HOLD-02 |
| `BP-§10.2-SA2` | §8.4 | BP §10.2 | IN SCOPE | EIS13-AUTH-03, EIS13-PRV-01, EIS13-HOLD-01 |
| `BP-§10.2-SB` | §8.10 | BP §10.2 | IN SCOPE | EIS13-FAIL-03, EIS13-HOLD-01 |
| `BP-§11-1` | §8.3 | BP §11 | IN SCOPE | EIS13-ARC-01 |
| `BP-§12-1` | §8.8 | BP §12 | IN SCOPE | EIS13-FAQ-01 |
| `BP-§12-3` | §8.8 | BP §12 | IN SCOPE | EIS13-FAQ-01 |
| `BP-§13-1` | §8.11 | BP §13 | IN SCOPE | EIS13-VER-02 |

### 29.3 EIS requirement to FCTM rows

| Requirement | Section | FCTM rows | Basis |
|---|---|---|---|
| `EIS13-ARC-01` | 6 | 18 | explicit rows |
| `EIS13-ARC-02` | 6 | 14 | explicit rows |
| `EIS13-ARC-03` | 6 | 10 | explicit rows |
| `EIS13-WSP-01` | 7 | 9 | explicit rows |
| `EIS13-WSP-02` | 7 | 8 | explicit rows |
| `EIS13-WSP-03` | 7 | 23 | explicit rows |
| `EIS13-WSP-04` | 7 | 1 | explicit rows |
| `EIS13-WSP-05` | 7 | 11 | explicit rows |
| `EIS13-WSP-06` | 7 | 6 | explicit rows |
| `EIS13-AUTH-01` | 8 | 12 | explicit rows |
| `EIS13-AUTH-02` | 8 | 21 | explicit rows |
| `EIS13-AUTH-03` | 8 | 4 | explicit rows |
| `EIS13-AUTH-04` | 8 | 21 | explicit rows |
| `EIS13-AUTH-05` | 8 | 8 | explicit rows |
| `EIS13-GW-01` | 9 | 4 | explicit rows |
| `EIS13-GW-02` | 9 | 11 | explicit rows |
| `EIS13-GW-03` | 9 | 2 | explicit rows |
| `EIS13-GW-04` | 9 | 2 | explicit rows |
| `EIS13-GW-05` | 9 | 11 | explicit rows |
| `EIS13-CTX-01` | 10 | 2 | explicit rows |
| `EIS13-CTX-02` | 10 | 1 | explicit rows |
| `EIS13-CTX-03` | 10 | 1 | explicit rows |
| `EIS13-LANG-01` | 11 | 45 | explicit rows |
| `EIS13-LANG-02` | 11 | 10 | explicit rows |
| `EIS13-LANG-03` | 11 | 24 | explicit rows |
| `EIS13-LANG-04` | 11 | 4 | explicit rows |
| `EIS13-LANG-05` | 11 | 4 | explicit rows |
| `EIS13-LANG-06` | 11 | 14 | explicit rows |
| `EIS13-TOOL-01` | 12 | 11 | explicit rows |
| `EIS13-TOOL-02` | 12 | 12 | explicit rows |
| `EIS13-CNF-01` | 12 | 12 | explicit rows |
| `EIS13-CNF-02` | 12 | 3 | explicit rows |
| `EIS13-CNF-03` | 12 | 3 | explicit rows |
| `EIS13-CMD-01` | 13 | 11 | explicit rows |
| `EIS13-CMD-02` | 13 | 17 | explicit rows + decision rule |
| `EIS13-CMD-03` | 13 | 5 | dependency/decision rule |
| `EIS13-IDM-01` | 14 | 7 | explicit rows |
| `EIS13-IDM-02` | 14 | 4 | explicit rows |
| `EIS13-AUD-01` | 15 | 14 | explicit rows |
| `EIS13-TEL-01` | 15 | 2 | explicit rows |
| `EIS13-TEL-02` | 15 | 1 | explicit rows |
| `EIS13-FAQ-01` | 16 | 8 | explicit rows |
| `EIS13-FAQ-02` | 16 | 24 | explicit rows |
| `EIS13-FAQ-03` | 16 | 21 | explicit rows |
| `EIS13-FAQ-04` | 16 | 5 | explicit rows |
| `EIS13-VOI-01` | 17 | 38 | explicit rows |
| `EIS13-VOI-02` | 17 | 3 | explicit rows + decision rule |
| `EIS13-VOI-03` | 17 | 4 | explicit rows |
| `EIS13-VOI-04` | 17 | 8 | explicit rows |
| `EIS13-VOI-05` | 17 | 11 | explicit rows |
| `EIS13-VOI-06` | 17 | 19 | explicit rows |
| `EIS13-VOI-07` | 17 | 3 | dependency/decision rule |
| `EIS13-VOI-08` | 17 | 10 | explicit rows |
| `EIS13-VOI-09` | 17 | 6 | explicit rows |
| `EIS13-VOI-10` | 17 | 2 | explicit rows |
| `EIS13-SNS-01` | 18 | 5 | explicit rows + decision rule |
| `EIS13-ATT-01` | 19 | 11 | explicit rows |
| `EIS13-FAIL-01` | 20 | 18 | explicit rows |
| `EIS13-FAIL-02` | 20 | 15 | explicit rows |
| `EIS13-FAIL-03` | 20 | 6 | explicit rows |
| `EIS13-PRV-01` | 21 | 367 | dependency/decision rule |
| `EIS13-PRV-02` | 21 | 122 | dependency/decision rule |
| `EIS13-ENV-01` | 22 | 1 | explicit rows |
| `EIS13-MIG-01` | 23 | 0 | non-product reason |
| `EIS13-MIG-02` | 23 | 0 | non-product reason |
| `EIS13-VER-01` | 24 | 6 | explicit rows |
| `EIS13-VER-02` | 24 | 1 | explicit rows |
| `EIS13-NG-01` | 25 | 38 | explicit rows |
| `EIS13-DOC-01` | 26 | 8 | explicit rows |
| `EIS13-HOLD-01` | 27 | 252 | dependency/decision rule |
| `EIS13-HOLD-02` | 27 | 17 | dependency/decision rule |
| `EIS13-HOLD-03` | 27 | 54 | dependency/decision rule |

## 30. Trigger Screen and Open Engineering Questions

| Trigger | Result |
|---|---|
| T2 — conflict among approved sources | NOT TRIGGERED |
| T3 — new merchant-visible Product Truth or orphan behaviour | NOT TRIGGERED. Every requirement maps to FCTM rows except EIS13-MIG-01 and EIS13-MIG-02, which carry recorded non-product reasons |
| T6 — material derived constraint | NOT TRIGGERED anew; Stage 7 constraints were resolved as engineering constraints by Mission Control and are carried here |
| T7 — omission, deferral, pull-forward, simplification, reclassification, reassignment | NOT TRIGGERED. No row moved or narrowed; held rows stay `IN SCOPE` |
| T8 — conflict, infeasibility or material security/integrity conflict | NOT TRIGGERED after Stage 10 correction. The finding-scoped T8 conditions raised by SEC13-EIS-S10-01, -02, -03 and -05 are addressed by C1–C3: EIS13-CMD-02 now adopts the SB-P-1.12 narrow-executor contract under EIS-ISO-02 and EIS-ISO-10 with a coordinated cut-over, new objects carry an explicit access contract, and protected-context reuse follows current authorization |

Engineering choices made here (not Product Truth): module split, `NormalizedMessage`, proposal state machine, table names in EIS13-MIG-01, sensitivity classes derived from capabilities, kill-switch configuration. Stage 10 may change any of them without a Founder decision.

Open questions for Stage 10:

| ID | Question |
|---|---|
| EQ-1 | Confirm gateway placement and streaming within Worker limits once a provider is evidenced |
| EQ-4 | Sequence the transactions-family cut-over and the structured Transactions UI migration with SB-P-1.12 WS-A3 |
| EQ-5 | Active-account conversation retention default (open policy dependency) |
| EQ-6 | Re-verify production state of `20260724170000` before relying on the idempotency precedent |
| EQ-7 | Timing of the SB-P-1.12 workstreams this EIS consumes |
| EQ-8 | CI evidence path while GitHub Actions are impaired |
