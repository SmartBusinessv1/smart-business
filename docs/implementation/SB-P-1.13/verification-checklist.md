# SB-P-1.13 — Verification Checklist

```text
STATUS: APPROVED — LOCKED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: APPROVED — LOCKED (STAGE 13, SB-P-1.13-MC-21)
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PROVIDER SELECTION / ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DELIVERY: NOT AUTHORIZED
```

## Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.13 |
| Mission Name | Native Conversation & AI Intelligence Foundation |
| Document | Verification Checklist (Source 18 Stage 12; package template Phase C) |
| Version | 1.0 |
| Status | `APPROVED — LOCKED` |
| Author | Claude Code — initial implementation package owner |
| Canonical baseline | `main@654811df61fb59a0f0de35af7be2bc6614aae9ef` (Stage 11 EIS lock, PR #806) |
| Date | 2026-10-07 |
| Execution state | **Not executed.** Every item is a planned check. Nothing here is evidence |

## How to Use This Checklist

Sections 1 to 14 follow package template Phase C. Each item names its planned evidence class and the obligations or FCTM rows it supports. Section 13.4 is the row-keyed authority: one item per `IN SCOPE` row, with that row's obligations, evidence classes, named negative-path checks and named runtime scenarios.

## Evidence Classes

| Class | Meaning |
|---|---|
| `UNIT` | Unit or component test in the Fast Gate (mocked provider) |
| `INT` | Server-function integration test on the isolated test project with a mocked or recorded provider |
| `DB` | Database-level behavioural test on the isolated test project (Full Assurance) |
| `CONC` | Database-level concurrency, race or replay test |
| `INV` | Machine-generated inventory: grants, default privileges, RLS, policies, function owner, security mode and `search_path`, bundle and secret scan |
| `AUDIT` | Inspection of provenance and `authority_events` rows produced by a test |
| `EVAL` | Governed English/Malayalam/Manglish text or speech evaluation run against a recorded provider configuration identity, outside CI |
| `TRANS` | Per-layer transient-data evidence (memory-only handling or bounded deterministic disposal) for audio or attachments |
| `NET` | Outbound-request evidence from the runtime (for Scenario B: no Meta call) |
| `PERF` | Per-stage latency measurement against the recorded budget |
| `RT` | Human runtime verification in an authorized non-production environment: environment, role, route, expected and actual result, capturer |
| `FRT` | Founder runtime observation of a Founder Runtime Verification Scenario |
| `REG` | Regression re-run of existing suites and routes |
| `REPO` | Repository evidence: commit range, diff, file inventory, locked documents unchanged |
| `PROV` | Separately authorized provider, environment or production evidence; never inferred from repository files |
| `DOC` | Documentary design review; not implementation, runtime or production evidence |

## 1. Locked Authority Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-AUTH-01 | The locked Blueprint on canonical `main` is blob `bbf65429e3c1f18b9dacdda62e1c175d9eb395a1` at every checkpoint. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-02 | The locked EIS on canonical `main` is blob `9a1e723d4874011b6870a680f2a2080154537c30` at every checkpoint. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-03 | The canonical FCTM is blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22`; its `IN SCOPE` set is the same 651 rows as Section 13.4, by set difference. | `REPO` | 651 rows via ALL |
| VC-AUTH-04 | Founder records `founder/02` (blob `78f9afdb`) and `founder/03` (blob `001de805`) are unchanged and applied exactly (Engineering Contract Section 10). | `REPO`, `DOC` | `EC13-CMD-02`, `EC13-CMD-03`, `EC13-VOI-02`, `EC13-VOI-07`, `EC13-SNS-01` |
| VC-AUTH-05 | The three package documents are `APPROVED — LOCKED` (Stage 13) and an Implementation Authorization names the builder, workstreams, paths, environments and Git authority before any build. | `REPO`, `DOC` | Process item; no FCTM row; adds no behaviour |
| VC-AUTH-06 | Every migration written or executed is covered by an explicit migration mission meeting `docs/migration/README.md`. | `REPO`, `DOC` | `EC13-MIG-01`, `EC13-MIG-02` |

## 2. Repository Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-REPO-01 | Diff touches only the paths the Implementation Authorization lists; locked documents, FCTM, Founder records and governance sources are untouched. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-REPO-02 | Module boundaries match EIS Section 6 (`conversation`, `orchestration`, `tools`, `commands`, `language`, `voice`, `support`, `attachments`, `telemetry`); no module holds its own permission logic. | `REPO`, `DOC` | `EC13-ARC-01` |
| VC-REPO-03 | No provider secret, `VITE_*` provider value, credential or merchant audio fixture is committed. | `REPO`, `INV` | `EC13-ENV-01`, `EC13-GW-01`; NP-15 |
| VC-REPO-04 | Prompts and routing configuration are versioned repository artifacts and each turn records the prompt version. | `REPO`, `UNIT` | `EC13-GW-04` |
| VC-REPO-05 | No channel-specific table, rule set, identity or memory copy is introduced. | `REPO`, `INV` | `EC13-WSP-03`; NP-13 |

## 3. Backend Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-BE-01 | Every SB-P-1.13 server function uses `requireSupabaseAuth` and the caller's RLS-bound client; principal and active business come from SB-P-1.12. | `INT`, `INV` | `EC13-AUTH-01`; NP-01, NP-02 |
| VC-BE-02 | `authz.authorize` runs with channel `conversation` or `ai_tool` before protected data reaches the model and before any proposal is previewed or executed. | `INT`, `DB` | `EC13-AUTH-02`; NP-06, NP-07 |
| VC-BE-03 | Gateway enforces timeouts, Worker-sized limits, streaming, idempotent-only retries and structured error mapping. | `UNIT`, `INT` | `EC13-GW-01` |
| VC-BE-04 | Model output is parsed into the tool schema; authority-bearing fields are rejected; ownership and permission are evaluated against server-derived context. | `UNIT`, `INT` | `EC13-TOOL-01`, `EC13-TOOL-02`; NP-17 |
| VC-BE-05 | Every adapter and gateway call carries an accepted provider configuration identity; calls without one are refused. | `UNIT`, `INT` | `EC13-PRV-01`, `EC13-VOI-10`, `EC13-GW-02`; NP-16 |
| VC-BE-06 | Kill switch disables AI or voice, including automatically when evidence is stale; text path and structured pages stay usable. | `INT`, `RT` | `EC13-PRV-02`; NP-39 |

## 4. Frontend Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-FE-01 | Workspace route and navigation entries exist on desktop and mobile; structured pages stay reachable. | `UNIT`, `RT` | `EC13-WSP-01` |
| VC-FE-02 | One shared business-context provider replaces per-page `businesses.maybeSingle()` on SB-P-1.13 surfaces. | `UNIT`, `RT` | `EC13-WSP-04` |
| VC-FE-03 | Malayalam-capable font and per-message `lang` attributes render English, Malayalam and Manglish correctly. | `UNIT`, `RT` | `EC13-LANG-01` |
| VC-FE-04 | Preview shows every material field; confirmation controls bind to the shown binding; spoken confirmation requires an armed capture. | `UNIT`, `RT` | `EC13-CNF-01`, `EC13-VOI-04` |
| VC-FE-05 | Interim transcripts render display-only; sensitive segments render as text under `FPDR-4`. | `UNIT`, `RT` | `EC13-VOI-03`, `EC13-SNS-01` |

### 4.1 Named Runtime Scenarios

Each experience row has at least one named runtime scenario. Every scenario is a verification procedure for existing acceptance lines and Blueprint Section 9 and 15 expectations. None is a new Founder Runtime Verification Scenario, and none adds behaviour.

| Scenario | Name | Source anchor | Planned evidence class | FCTM rows |
|---|---|---|---|---|
| RS-01 | Founder Scenario A: natural-language governed transaction (clarify if needed, preview, confirm, governed command, stored state confirmed) | Blueprint §15.1 Scenario A; anchor 1 | `FRT`, `RT`, `DB` | 91 rows (Section 13.4) |
| RS-02 | Founder Scenario A: Employee request for Owner-only profit denied | Blueprint §15.1 Scenario A; anchor 2 | `FRT`, `RT`, `DB` | 47 rows (Section 13.4) |
| RS-03 | Founder Scenario B: Meta/WhatsApp unavailable; Owner completes a native workflow; no Meta call | Blueprint §15.1 Scenario B; anchor 3 | `FRT`, `RT`, `NET` | 7 rows (Section 13.4) |
| RS-04 | Anchor 4: Basic Voice uses the same authority and confirmation truth as text (paired run) | Blueprint §15.2 anchor 4 | `RT`, `DB` | 92 rows (Section 13.4) |
| RS-05 | Workspace as a first-class destination on desktop and mobile with the shared business context | Blueprint §8.1, §9 | `RT` | 41 rows (Section 13.4) |
| RS-06 | English, Malayalam and Manglish input with code switching and one clarification | Blueprint §8.2, §9 | `RT`, `EVAL` | 93 rows (Section 13.4) |
| RS-07 | Support question answered FAQ-first; no-answer state and escalation path; support failure isolated | Blueprint §8.8, §9 | `RT` | 58 rows (Section 13.4) |
| RS-08 | Attachment accepted, unsafe file rejected, status shown, no consequential update | Blueprint §8.9, §9 | `RT` | 11 rows (Section 13.4) |
| RS-09 | Provider outage or malformed output: narrow failure, text path and structured pages usable, kill switch | Blueprint §8.10, §9 | `RT` | 157 rows (Section 13.4) |
| RS-10 | Timeout after dispatch: unknown outcome shown and reconciled; retry produces no second write | Blueprint §8.5, §8.10 | `RT`, `DB` | 11 rows (Section 13.4) |
| RS-11 | `FPDR-4`: sensitive authorized content rendered as text | Blueprint §15.4 `FPDR-4` | `RT` | 5 rows (Section 13.4) |
| RS-12 | Voice failure keeps the text path usable | Blueprint §8.7 | `RT` | 10 rows (Section 13.4) |
| RS-13 | Language preference set, respected across surfaces and overridden by an in-conversation switch | Blueprint §8.2 | `RT` | 10 rows (Section 13.4) |
| RS-14 | `FPDR-5`: credit sale recorded; owed-balance or repayment statement clarified or dependency-blocked | Blueprint §15.4 `FPDR-5`, `FPDR-2` | `RT`, `DB` | 5 rows (Section 13.4) |
| RS-15 | Conversation history separate from Business Memory; withheld after authority change | Blueprint §8.1, §8.4 | `RT`, `DB` | 12 rows (Section 13.4) |
| RS-16 | Streaming, progress, disabled resubmission and safe retry | Blueprint §8.1, §9 | `RT`, `PERF` | 6 rows (Section 13.4) |
| RS-17 | Armed spoken confirmation of a previewed proposal; stale or background speech has no effect | Blueprint §8.7 | `RT`, `DB` | 12 rows (Section 13.4) |
| RS-18 | Unrelated or unsafe request redirected within the business boundary | Blueprint §8.4 | `RT` | 8 rows (Section 13.4) |
| RS-19 | Model routing changed by configuration only: domain rules and stored outcomes unchanged; the new provider configuration identity is re-verified before merchant data flows | Contract 24 §31 acceptance 16 | `INT`, `RT` | 11 rows (Section 13.4) |
| RS-20 | Implementation-document review: reused foundations identified before new work (documentary scenario, no runtime surface) | Contract 22 §29 acceptance 14 | `DOC` | 8 rows (Section 13.4) |

## 5. Database Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-DB-01 | Expected objects only (EIS Section 23): `conversation_threads`, `conversation_messages`, `ai_tool_proposals`, `create_transaction_governed` with idempotency and outcome records, `support_faq_entries`, transcript and result records with no audio, aggregate telemetry. | `INV` | `EC13-MIG-01` |
| VC-DB-02 | Every business-scoped new table has RLS enabled and forced, kernel-helper policies and composite `(business_id, id)` references. | `INV`, `DB` | `EC13-MIG-01`; NP-14 |
| VC-DB-03 | `create_transaction_governed` is `SECURITY DEFINER` owned by a `NOLOGIN NOINHERIT` executor with EIS-ISO-10 invariants; `PUBLIC`/`anon` `EXECUTE` revoked in the creating migration. | `INV` | `EC13-CMD-02`; NP-22 |
| VC-DB-04 | Each migration is rehearsed on the isolated test project with rollback or forward-fix evidence, in EIS Section 23 order. | `DB`, `REPO` | `EC13-MIG-02` |

## 6. Security and RLS Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-SEC-01 | Effective-access inventory of every new object and the transactions family: grants, default privileges, RLS, function owner, security mode and `search_path`. | `INV` | `EC13-VER-01`, `EC13-MIG-01`; NP-14, NP-22 |
| VC-SEC-02 | Privileged-handler inventory is source-complete and contains no unbound `service_role` path. | `INV`, `REPO` | `EC13-AUTH-01`; NP-02 |
| VC-SEC-03 | Transactions-family cut-over steps 1 to 8 are evidenced in order; steps 5 and 6 are atomic; no alternate protected write path remains. | `INV`, `DB` | `EC13-CMD-02`, `EC13-HOLD-02`; NP-21, NP-22 |

### 6.1 Named Negative-Path Checks

Each permission, isolation and denial row has at least one named negative-path check (rule in Section 13.1).

| Check | Name | Realizes | Planned evidence class | FCTM rows |
|---|---|---|---|---|
| NP-01 | Request naming another business, or a client-supplied business, actor or capability, is ignored; the server-derived business is used and another business's data is never returned (Owner-of-A / Manager-of-B fixtures) | `EC13-ARC-02`, `EC13-WSP-04`, `EC13-AUTH-01`, `EC13-AUTH-04` | `DB`, `INT` | 48 rows (Section 13.4) |
| NP-02 | No SB-P-1.13 handler uses `service_role` for business data, model context, proposals, outcomes, attachments or telemetry; the privileged-handler inventory is empty or each entry is EIS-ISO-04-bound | `EC13-AUTH-01`, `EC13-CTX-02` | `INV`, `REPO` | 13 rows (Section 13.4) |
| NP-03 | A conversation thread or message of another actor or business is not readable through any surface; business membership alone grants no access | `EC13-WSP-05`, `EC13-AUTH-04` | `DB` | 32 rows (Section 13.4) |
| NP-04 | An Employee asking for Owner-only profit receives the SB-P-1.12 denial contract and the Owner-only aggregate is never retrieved into model context | `EC13-AUTH-03` | `DB`, `INT` | 4 rows (Section 13.4) |
| NP-05 | After an allow→deny, role, membership, entitlement or active-business change, a cached result, history segment, summary or re-injected context produced earlier is withheld or redacted in UI and model context | `EC13-WSP-05`, `EC13-GW-05`, `EC13-CTX-02`, `EC13-CTX-03` | `DB`, `CONC`, `INT` | 24 rows (Section 13.4) |
| NP-06 | Prompt or message text claiming a role, permission or exception does not change the `authz.authorize` outcome | `EC13-AUTH-02` | `UNIT`, `INT` | 21 rows (Section 13.4) |
| NP-07 | A tool proposal for a capability the principal lacks is rejected by `authz.authorize` (channel `ai_tool`) before preview | `EC13-AUTH-02` | `INT`, `DB` | 21 rows (Section 13.4) |
| NP-08 | Unrelated, unsafe or manipulative requests are redirected or refused without accusation, unsupported certainty or role-boundary breach | `EC13-AUTH-05` | `UNIT`, `EVAL` | 8 rows (Section 13.4) |
| NP-09 | A non-transaction intent or an intent owned by a later mission produces no write and returns a routed or not-yet-available response | `EC13-GW-03`, `EC13-HOLD-03` | `UNIT`, `INT` | 55 rows (Section 13.4) |
| NP-10 | Instructions embedded in retrieved records, FAQ entries, documents, attachments or quoted content, including Malayalam and Manglish fixtures, cannot initiate an action, enable a tool, widen authority or override the current request | `EC13-CTX-01` | `UNIT` | 2 rows (Section 13.4) |
| NP-11 | No English-only or literal-translation path and no feature-specific dictionary as the sole language mechanism | `EC13-LANG-01` | `UNIT`, `DOC` | 45 rows (Section 13.4) |
| NP-12 | Ambiguous amount, unit, party, item, date or payment state, or an unmatched or multiply matched identity, creates no consequential record and no silent identity merge; one clarification is asked | `EC13-ARC-03`, `EC13-LANG-03`, `EC13-LANG-04`, `EC13-LANG-05`, `EC13-TOOL-02` | `UNIT`, `DB` | 54 rows (Section 13.4) |
| NP-13 | No channel-specific table, rule set, memory copy or identity exists (catalog and repository inventory) | `EC13-WSP-03` | `INV`, `REPO` | 23 rows (Section 13.4) |
| NP-14 | Effective-access inventory of every new SB-P-1.13 object: RLS enabled and forced, no `PUBLIC`/`anon` privilege, default privileges reconciled, minimal `authenticated`, protected writes only through command functions, definers under EIS-ISO-10 | `EC13-MIG-01`, `EC13-VER-01` | `INV` | 6 rows (Section 13.4) |
| NP-15 | No provider secret appears in the client bundle, a `VITE_*` variable, the repository or a log | `EC13-GW-01`, `EC13-ENV-01` | `REPO`, `INV` | 5 rows (Section 13.4) |
| NP-16 | Merchant data does not flow to a provider without an accepted provider configuration identity, or after a material configuration change, until re-verification; an adapter call without the identity is refused | `EC13-GW-02`, `EC13-VOI-10`, `EC13-PRV-01` | `UNIT`, `INT` | 367 rows (Section 13.4) |
| NP-17 | Model output carrying principal, actor, business, role, capability decision, entitlement, channel, object scope, binding identity or authorization state is rejected as non-authoritative and never merged | `EC13-TOOL-01`, `EC13-TOOL-02` | `UNIT` | 23 rows (Section 13.4) |
| NP-18 | A material change (target, amount, party, type, payment method, date, quantity) after preview invalidates the binding; no post-confirmation model call changes a material field; the changed proposal cannot execute | `EC13-CNF-01`, `EC13-VOI-04` | `UNIT`, `DB` | 20 rows (Section 13.4) |
| NP-19 | A revocation, role change, membership change or active-business switch between preview and commit rejects only the pending action | `EC13-CNF-02` | `DB`, `CONC` | 3 rows (Section 13.4) |
| NP-20 | Role, membership, capability, entitlement or delegated permission never substitutes for confirmation; no standing-automation execution path exists | `EC13-CNF-03` | `UNIT`, `DB` | 3 rows (Section 13.4) |
| NP-21 | AI and Voice cannot reach raw `transactions.insert`; protected writes succeed only through kernel-checked command functions | `EC13-CMD-01`, `EC13-CMD-02` | `DB`, `INV` | 24 rows (Section 13.4) |
| NP-22 | Before cut-over step 5 the command has no `authenticated` `EXECUTE`; after step 6 no effective authenticated direct DML on `transactions` remains; no dual-write window; rollback restores one path | `EC13-CMD-02`, `EC13-HOLD-02` | `INV`, `DB` | 17 rows (Section 13.4) |
| NP-23 | A credit-payment-method sale creates no customer-credit balance, owed state, repayment allocation or four-state Ledger state; balance or repayment statements are clarified or returned as dependency-blocked | `EC13-CMD-03`, `EC13-VOI-07` | `DB`, `UNIT` | 5 rows (Section 13.4) |
| NP-24 | A duplicate submission, retry or replay (including voice) returns the stored outcome with no second write; an unknown outcome is never re-executed automatically | `EC13-IDM-01`, `EC13-IDM-02` | `DB`, `CONC` | 11 rows (Section 13.4) |
| NP-25 | No raw audio and no full transcript or prompt shadow archive exists in telemetry, logs or analytics | `EC13-TEL-01` | `INV`, `TRANS` | 2 rows (Section 13.4) |
| NP-26 | Success text or speech appears only after a committed outcome; a rendering or TTS failure after success never re-runs the command | `EC13-TEL-02` | `UNIT`, `INT` | 1 rows (Section 13.4) |
| NP-27 | A support answer never invents policy, changes Product Truth, grants permission, exposes merchant data or claims an account action; `support_faq_entries` holds no business data | `EC13-FAQ-01`, `EC13-FAQ-03` | `UNIT`, `DB` | 29 rows (Section 13.4) |
| NP-28 | A support-path failure does not block transaction entry or unrelated pages | `EC13-FAQ-04` | `INT` | 5 rows (Section 13.4) |
| NP-29 | An STT transcript never writes directly or carries authority; voice applies the same roles and denials as text | `EC13-VOI-01`, `EC13-VOI-09` | `UNIT`, `INT` | 44 rows (Section 13.4) |
| NP-30 | Raw audio is not persisted at any of the nine EIS13-VOI-02 layers (per-layer evidence) | `EC13-VOI-02` | `TRANS`, `INV` | 3 rows (Section 13.4) |
| NP-31 | Interim, partial, background, out-of-window, stale, duplicate or replayed speech cannot execute; spoken confirm or reject is accepted only in an armed capture bound to the binding | `EC13-VOI-03`, `EC13-VOI-04` | `UNIT`, `DB` | 12 rows (Section 13.4) |
| NP-32 | Paired text and voice runs of the same denied intent produce the same denial | `EC13-VOI-05` | `INT`, `DB` | 11 rows (Section 13.4) |
| NP-33 | Unsupported format, transcription, provider, upload or output-audio failure fails only the voice path and creates no record from uncertain speech | `EC13-VOI-08` | `INT` | 10 rows (Section 13.4) |
| NP-34 | A sensitive segment is not spoken when trustworthy context indicates it is inappropriate or context is absent; listening context never changes permission; no ambient, bystander or location sensing is added | `EC13-SNS-01` | `UNIT` | 5 rows (Section 13.4) |
| NP-35 | Attachment content is treated as data: no consequential update, no storage bucket, reauthorization through the kernel before status, retrieval, download or handoff | `EC13-ATT-01` | `UNIT`, `INT` | 11 rows (Section 13.4) |
| NP-36 | A staged attachment is in-request memory only, bound to principal and business, referenced unguessably, deleted on success, failure, expiry and abandonment, and absent from logs, telemetry, error payloads, backups and dead-letter stores | `EC13-ATT-01` | `TRANS`, `INT` | 11 rows (Section 13.4) |
| NP-37 | Provider outage, timeout, rate limit, malformed output or operation failure gives no false success, preserves input and leaves unrelated functions working | `EC13-FAIL-01`, `EC13-FAIL-02` | `UNIT`, `INT` | 33 rows (Section 13.4) |
| NP-38 | With Meta unreachable, the native workflow completes and outbound-request evidence shows no Meta call | `EC13-FAIL-03` | `NET` | 6 rows (Section 13.4) |
| NP-39 | Disabling and restoring a provider keeps committed records intact, keeps pending and unknown commands reconcilable and never replays a consequential command | `EC13-PRV-02` | `INT` | 122 rows (Section 13.4) |
| NP-40 | Per-row must-not check: the behaviour the row prohibits is absent, by design inspection and a negative test where testable | `EC13-NG-01`, every `NEG`-kind row | `DOC`, `UNIT` | 115 rows (Section 13.4) |

## 7. Validation Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-VAL-01 | Structured output validation covers required fields, types, enumerated states, ownership, referenced-object existence, numeric and date plausibility, permission and duplicates; invalid output never writes. | `UNIT`, `INT` | `EC13-TOOL-02` |
| VC-VAL-02 | Clarification triggers on field-level uncertainty and not on harmless variation; thresholds are configuration. | `UNIT`, `EVAL` | `EC13-LANG-03`; NP-12 |
| VC-VAL-03 | Attachment content-type and size checks reuse the catalog-import checks; unsafe files are rejected. | `UNIT`, `INT` | `EC13-ATT-01`; NP-35 |
| VC-VAL-04 | Injection fixtures (multilingual, document-borne, retrieved content) cannot initiate or widen action. | `UNIT` | `EC13-CTX-01`; NP-10 |

## 8. Concurrency and Idempotency Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-CONC-01 | Concurrent duplicate confirmations of one binding produce one write; the binding is consumed once. | `CONC` | `EC13-CNF-01`, `EC13-IDM-01`; NP-24 |
| VC-CONC-02 | Revocation racing commit rejects the commit under EIS-CNF-02 serialization. | `CONC` | `EC13-CNF-02`; NP-19 |
| VC-CONC-03 | Timeout after dispatch enters `outcome_unknown`; lookup reconciles; no automatic re-execution. | `DB`, `INT` | `EC13-IDM-02`; NP-24 |
| VC-CONC-04 | Voice replays and provider request IDs never act as the duplicate-prevention key. | `CONC` | `EC13-IDM-01`, `EC13-VOI-05` |

## 9. Performance Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-PERF-01 | Per-stage latency budgets for text and voice are recorded and measured without bypassing permission, integrity or confirmation safeguards. | `PERF` | `EC13-WSP-06` |
| VC-PERF-02 | Provider and end-to-end latency are measured against a recorded provider configuration identity (EIS Section 28 fact until evidenced). | `PERF`, `PROV` | `EC13-PRV-01`, `EC13-LANG-06` |

## 10. Automated Testing Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-TEST-01 | Fast Gate: lint, typecheck, build and unit tests for registry and authority-field exclusion, validation, instruction/data separation, frozen-proposal immutability, armed spoken-confirmation rules and `FPDR-4` rendering. | `UNIT`, `REPO` | `EC13-VER-01` |
| VC-TEST-02 | Full Assurance on the isolated test project: isolation, idempotency and concurrency, unknown outcome, revalidation, revocation-safe reuse, effective-access inventory and absence of a direct transaction write path. | `DB`, `CONC`, `INV` | `EC13-VER-01` |
| VC-TEST-03 | Live provider evaluation runs outside CI against a recorded provider configuration identity; never with live keys in CI. | `EVAL` | `EC13-LANG-06`, `EC13-PRV-01` |
| VC-TEST-04 | Existing suites and routes re-run green at every checkpoint. | `REG` | Process item; no FCTM row; adds no behaviour |
| VC-TEST-05 | Missing GitHub Actions runs are recorded as missing; local gate output is recorded with exact commands. | `REPO` | Process item; no FCTM row; adds no behaviour |

## 11. Evidence Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-EV-01 | Evidence lives under `docs/implementation/SB-P-1.13/evidence/`, manifest-first, with provenance per package template Section 13. | `REPO` | Process item; no FCTM row; adds no behaviour |
| VC-EV-02 | Per-layer transient evidence exists for all nine audio layers and for attachments. | `TRANS`, `PROV` | `EC13-VOI-02`, `EC13-ATT-01`; NP-30, NP-36 |
| VC-EV-03 | Provider evidence pack is accepted for the configuration identity in use before merchant data flows. | `PROV` | `EC13-PRV-01` |
| VC-EV-04 | `D12` consumption evidence is accepted by Mission Control for each consumed SB-P-1.12 family before dependent rows are built. | `PROV`, `DOC` | `EC13-HOLD-01` |
| VC-EV-05 | No EIS Section 28 fact is stated as verified without separately authorized evidence. | `DOC` | Process item; no FCTM row; adds no behaviour |

## 12. Completion Verification

| Item | Check | Planned evidence class | Supports |
|---|---|---|---|
| VC-COMP-01 | Builder Completion Report records a status per assigned row; no builder self-verification. | `REPO`, `DOC` | Process item; no FCTM row; adds no behaviour |
| VC-COMP-02 | `FPDR-2` rows are reported `PARTIALLY DEMONSTRATED` or dependency-blocked for their credit and repayment portion. | `DOC` | `EC13-VOI-07` |
| VC-COMP-03 | Completion Report carries the Experience Verification Matrix seeded from Blueprint Section 15.5. | `DOC` | `EC13-VER-02` |

## 13. Product Truth Coverage and Drift Verification

### 13.1 Classification rules

- **Permission, isolation and denial row:** a row whose FCTM kind is `NEG`, or a row realized by any of `EC13-ARC-02`, `EC13-WSP-03`, `EC13-WSP-04`, `EC13-WSP-05`, `EC13-AUTH-01`, `EC13-AUTH-02`, `EC13-AUTH-03`, `EC13-AUTH-04`, `EC13-AUTH-05`, `EC13-GW-05`, `EC13-CTX-01`, `EC13-CTX-02`, `EC13-CTX-03`, `EC13-TOOL-01`, `EC13-TOOL-02`, `EC13-CNF-01`, `EC13-CNF-02`, `EC13-CNF-03`, `EC13-CMD-01`, `EC13-CMD-02`, `EC13-CMD-03`, `EC13-IDM-01`, `EC13-FAQ-03`, `EC13-VOI-03`, `EC13-VOI-04`, `EC13-VOI-05`, `EC13-VOI-09`, `EC13-SNS-01`, `EC13-ATT-01`, `EC13-ENV-01`, `EC13-NG-01`. Each carries at least one named negative-path check; every `NEG` row also carries NP-40.
- **Experience row:** a row whose FCTM kind is `SCN`, `EXP` or `FRV`, a row listed in Blueprint Section 15, or a row realized by a user-visible obligation (`EC13-WSP-01`, `EC13-WSP-02`, `EC13-WSP-06`, `EC13-AUTH-03`, `EC13-AUTH-05`, `EC13-LANG-02`, `EC13-LANG-03`, `EC13-LANG-05`, `EC13-IDM-02`, `EC13-TEL-02`, `EC13-FAQ-02`, `EC13-FAQ-03`, `EC13-VOI-04`, `EC13-VOI-06`, `EC13-VOI-08`, `EC13-SNS-01`, `EC13-ATT-01`, `EC13-FAIL-01`, `EC13-FAIL-02`). Each carries at least one named runtime scenario.
- **Planned evidence class:** the union of the classes of the row's obligations, negative-path checks and runtime scenarios.
- **Finding and holds:** the Blueprint Section 20.6 Stage 7 finding (documentary, not evidence) and remaining-hold codes. `BLOCKED` and `FOLLOW-UP` rows stay `IN SCOPE`.

### 13.2 Coverage summary

| Measure | Value |
|---|---|
| `IN SCOPE` FCTM rows | 651 |
| Rows with a checklist item and planned evidence class | 651 of 651 |
| Rows missing a checklist item | 0 |
| Permission, isolation and denial rows (rule in 13.1) | 329; all 329 carry a named negative-path check |
| Rows carrying at least one named negative-path check | 597 |
| Experience rows | 255; all 255 carry a named runtime scenario |
| Named negative-path checks | 40, each used by at least one row |
| Named runtime scenarios | 20, each used by at least one row |
| `ALREADY DEMONSTRATED` rows | 0 in the FCTM; no regression-only item is needed |
| Rows `BLOCKED` / `FOLLOW-UP` / `PASS` (Stage 7 finding) | 252 / 271 / 128, all `IN SCOPE` |
| Behaviour-adding orphan items | 0 |

### 13.3 Drift and completeness checks to execute

| Item | Check | Planned evidence class | FCTM rows |
|---|---|---|---|
| VC-PT-01 | Every `IN SCOPE` row has an Engineering Contract obligation and a Section 13.4 item, by set difference against the FCTM. | `REPO` | 651 rows via ALL |
| VC-PT-02 | Each row's disposition, build commitment, commercial classification and mission assignment equal the locked FCTM. | `REPO` | 651 rows via ALL |
| VC-PT-03 | No obligation, checklist item, test or built behaviour lacks a row, except the recorded non-behavioural items. | `REPO`, `DOC` | 651 rows via ALL |
| VC-PT-04 | Every permission, isolation and denial row has a named negative-path item, and every experience row a named runtime scenario. | `REPO` | 488 rows; each listed in Section 13.4 |
| VC-PT-05 | The verifier takes its own obligation inventory from the source text and finds no numbered section, obligation or acceptance scenario without a row (Source 18 Section 3.2 item 6). | `DOC` | 651 rows via ALL |
| VC-PT-06 | None of the 21 `OUT OF BUILD SCOPE` rows appears in the built product (must-not-appear checks). | `REPO`, `DOC` | `BP-§8.4-4`, `BP-§16-1`, `BP-§16-2`, `BP-§16-3`, `BP-§16-4`, `BP-§16-5`, `BP-§16-6`, `BP-§16-7`, `BP-§16-8`, `BP-§16-9`, `BP-§16-10`, `BP-§16-11`, `BP-§16-12`, `BP-§16-13`, `BP-§16-14`, `BP-§16-15`, `BP-§16-16`, `BP-§16-17`, `BP-§16-18`, `BP-§16-19`, `BP-§16-20` |
| VC-PT-07 | No row assigned to a later mission or delegated is built here as hidden scope (Blueprint Section 11). | `REPO`, `DOC` | 323 non-`IN SCOPE` rows |

### 13.4 Row-keyed checklist items

| Item | FCTM row | Obligations | Planned evidence class | Negative-path checks | Runtime scenarios | Finding | Holds |
|---|---|---|---|---|---|---|---|
| VC-R-001 | `24-§4-1` | `EC13-GW-01`, `EC13-PRV-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV` | NP-15, NP-16 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-002 | `24-§4-2` | `EC13-PRV-01`, `EC13-NG-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | — | FOLLOW-UP | H-PROV |
| VC-R-003 | `24-§4-3` | `EC13-PRV-01`, `EC13-NG-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | — | FOLLOW-UP | H-PROV |
| VC-R-004 | `24-§4-4` | `EC13-PRV-01`, `EC13-NG-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | — | FOLLOW-UP | H-PROV |
| VC-R-005 | `24-§4-5` | `EC13-PRV-01`, `EC13-NG-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | — | FOLLOW-UP | H-PROV |
| VC-R-006 | `24-§4-6` | `EC13-PRV-01`, `EC13-NG-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | — | FOLLOW-UP | H-PROV |
| VC-R-007 | `24-§4-7` | `EC13-PRV-01`, `EC13-NG-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | — | FOLLOW-UP | H-PROV |
| VC-R-008 | `24-§4-8` | `EC13-PRV-01`, `EC13-NG-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | — | FOLLOW-UP | H-PROV |
| VC-R-009 | `24-§5-1` | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-01, NP-16 | RS-04 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-010 | `24-§5-3` | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-01, NP-16 | RS-04 | BLOCKED | H-D12, H-PROV |
| VC-R-011 | `24-§5-5` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-012 | `24-§5-7` | `EC13-ARC-02` | `UNIT`, `INT`, `DB`, `RT` | NP-01 | RS-04 | PASS | — |
| VC-R-013 | `24-§5-8` | `EC13-ARC-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-014 | `24-§6-1` | `EC13-GW-03`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-09, NP-16 | RS-06 | FOLLOW-UP | H-PROV |
| VC-R-015 | `24-§6-2` | `EC13-GW-03`, `EC13-PRV-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-09, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LATER |
| VC-R-016 | `24-§6-3` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-017 | `24-§7-1` | `EC13-ARC-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-01, NP-16 | RS-04 | FOLLOW-UP | H-PROV |
| VC-R-018 | `24-§7-2` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-AUDIO |
| VC-R-019 | `24-§7-5` | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-01, NP-16 | RS-04 | BLOCKED | H-D12, H-PROV |
| VC-R-020 | `24-§8-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-021 | `24-§8-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-022 | `24-§8-3` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | RS-19 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-023 | `24-§9-1` | `EC13-CTX-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-10, NP-16 | — | BLOCKED | H-D12, H-PROV |
| VC-R-024 | `24-§9-2` | `EC13-CTX-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `REPO`, `PROV`, `DOC` | NP-02, NP-05, NP-09 | — | BLOCKED | H-D12, H-LATER |
| VC-R-025 | `24-§9-3` | `EC13-ARC-03`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `DOC` | NP-09, NP-12 | RS-01 | FOLLOW-UP | H-LATER |
| VC-R-026 | `24-§9-4` | `EC13-ARC-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `DOC` | NP-12, NP-40 | RS-01 | PASS | — |
| VC-R-027 | `24-§10-1` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-028 | `24-§10-2` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-029 | `24-§10-3` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-030 | `24-§10-4` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-031 | `24-§10-5` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-032 | `24-§10-6` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-033 | `24-§10-7` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-034 | `24-§10-8` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-035 | `24-§10-9` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-036 | `24-§10-10` | `EC13-AUTH-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-09, NP-40 | RS-02 | BLOCKED | H-D12, H-LATER |
| VC-R-037 | `24-§10-11` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-038 | `24-§11-1` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-039 | `24-§11-2` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-040 | `24-§11-3` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-041 | `24-§11-4` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-042 | `24-§11-5` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-043 | `24-§11-6` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-044 | `24-§11-7` | `EC13-CNF-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-18 | RS-01 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-045 | `24-§11-8` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-046 | `24-§11-9` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-047 | `24-§11-10` | `EC13-TOOL-01`, `EC13-HOLD-01` | `UNIT`, `PROV`, `DOC` | NP-17, NP-40 | — | BLOCKED | H-D12 |
| VC-R-048 | `24-§13-2` | `EC13-CNF-03` | `UNIT`, `DB`, `RT`, `FRT`, `DOC` | NP-20, NP-40 | RS-01 | PASS | — |
| VC-R-049 | `24-§15-1` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-050 | `24-§15-2` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-AUDIO |
| VC-R-051 | `24-§15-3` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-052 | `24-§15-4` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-053 | `24-§15-5` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-054 | `24-§15-6` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-055 | `24-§15-7` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-056 | `24-§15-8` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-057 | `24-§17-1` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-058 | `24-§17-2` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-059 | `24-§17-4` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-060 | `24-§17-5` | `EC13-FAQ-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-09, NP-27, NP-40 | RS-07 | BLOCKED | H-D12, H-LATER |
| VC-R-061 | `24-§19-1` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16 | RS-19 | FOLLOW-UP | H-PROV |
| VC-R-062 | `24-§19-2` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16 | RS-19 | FOLLOW-UP | H-PROV |
| VC-R-063 | `24-§19-3` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-40 | RS-19 | FOLLOW-UP | H-PROV |
| VC-R-064 | `24-§19-4` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16 | RS-19 | FOLLOW-UP | H-PROV |
| VC-R-065 | `24-§20-1` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-066 | `24-§20-2` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-067 | `24-§20-3` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-068 | `24-§20-4` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-069 | `24-§20-5` | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-12, NP-16, NP-17 | RS-01 | BLOCKED | H-D12, H-PROV |
| VC-R-070 | `24-§20-6` | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-12, NP-16, NP-17 | RS-01 | BLOCKED | H-D12, H-PROV |
| VC-R-071 | `24-§20-7` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-072 | `24-§20-8` | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-12, NP-16, NP-17 | RS-01 | BLOCKED | H-D12, H-PROV |
| VC-R-073 | `24-§20-9` | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-12, NP-16, NP-17 | RS-01 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-074 | `24-§20-10` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-075 | `24-§21-1` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12 |
| VC-R-076 | `24-§21-2` | `EC13-CNF-03`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-20, NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX, H-CONF |
| VC-R-077 | `24-§21-8` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-078 | `24-§21-9` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-079 | `24-§21-10` | `EC13-CNF-02`, `EC13-HOLD-01` | `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-19 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-080 | `24-§22-1` | `EC13-AUTH-05`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-08, NP-16, NP-40 | RS-18 | FOLLOW-UP | H-PROV |
| VC-R-081 | `24-§22-2` | `EC13-AUTH-05`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-08, NP-16 | RS-18 | FOLLOW-UP | H-PROV |
| VC-R-082 | `24-§22-3` | `EC13-AUTH-05`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-08, NP-16 | RS-18 | FOLLOW-UP | H-PROV |
| VC-R-083 | `24-§22-4` | `EC13-AUTH-05`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-08, NP-16 | RS-18 | FOLLOW-UP | H-PROV |
| VC-R-084 | `24-§22-5` | `EC13-AUTH-05`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-08, NP-16 | RS-18 | FOLLOW-UP | H-PROV |
| VC-R-085 | `24-§22-6` | `EC13-AUTH-05`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-08, NP-16 | RS-18 | FOLLOW-UP | H-PROV |
| VC-R-086 | `24-§22-7` | `EC13-AUTH-05`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-08, NP-16 | RS-18 | FOLLOW-UP | H-PROV |
| VC-R-087 | `24-§22-8` | `EC13-AUTH-05`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-08, NP-16 | RS-18 | BLOCKED | H-D12, H-PROV |
| VC-R-088 | `24-§23-1` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-089 | `24-§23-2` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-090 | `24-§23-3` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-091 | `24-§23-4` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-092 | `24-§23-5` | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37, NP-39 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-093 | `24-§23-7` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-094 | `24-§23-8` | `EC13-IDM-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV` | NP-16, NP-24 | RS-10 | FOLLOW-UP | H-PROV |
| VC-R-095 | `24-§23-9` | `EC13-CTX-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-05, NP-16 | RS-15 | BLOCKED | H-D12, H-PROV |
| VC-R-096 | `24-§23-10` | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-37 | RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-097 | `24-§23-11` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-098 | `24-§23-12` | `EC13-IDM-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV` | NP-16, NP-24 | RS-10 | FOLLOW-UP | H-PROV |
| VC-R-099 | `24-§23-13` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-100 | `24-§23-14` | `EC13-IDM-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV` | NP-16, NP-24 | RS-10 | FOLLOW-UP | H-PROV, H-CONF |
| VC-R-101 | `24-§23-15` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-102 | `24-§23-16` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-103 | `24-§23-17` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-104 | `24-§23-18` | `EC13-IDM-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-24 | RS-10 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-105 | `24-§24-1` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-106 | `24-§24-2` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-107 | `24-§24-3` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-108 | `24-§24-4` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-109 | `24-§24-5` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-110 | `24-§24-6` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-111 | `24-§24-7` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-112 | `24-§24-8` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-113 | `24-§24-9` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-114 | `24-§24-10` | `EC13-AUD-01`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `AUDIT`, `RT`, `FRT`, `PROV` | NP-16 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-115 | `24-§25-1` | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV |
| VC-R-116 | `24-§25-2` | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV |
| VC-R-117 | `24-§25-3` | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV |
| VC-R-118 | `24-§25-4` | `EC13-WSP-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `PROV` | NP-03, NP-05, NP-16 | RS-15 | FOLLOW-UP | H-PROV |
| VC-R-119 | `24-§25-5` | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV |
| VC-R-120 | `24-§25-6` | `EC13-AUTH-04`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV` | NP-01, NP-03, NP-16 | RS-02 | FOLLOW-UP | H-PROV |
| VC-R-121 | `24-§25-7` | `EC13-AUTH-04`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV` | NP-01, NP-03, NP-16 | RS-02 | FOLLOW-UP | H-PROV |
| VC-R-122 | `24-§25-8` | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-ENV-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV` | NP-01, NP-03, NP-15, NP-16 | RS-02 | FOLLOW-UP | H-PROV |
| VC-R-123 | `24-§25-9` | `EC13-AUTH-04` | `INT`, `DB`, `INV`, `RT`, `FRT` | NP-01, NP-03 | RS-02 | PASS | — |
| VC-R-124 | `24-§26-1` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-125 | `24-§26-2` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-126 | `24-§26-3` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-127 | `24-§26-4` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-128 | `24-§26-5` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-129 | `24-§26-6` | `EC13-GW-05`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV`, `DOC` | NP-05, NP-16 | — | BLOCKED | H-D12, H-PROV |
| VC-R-130 | `24-§26-7` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV, H-CONF |
| VC-R-131 | `24-§26-8` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-132 | `24-§26-9` | `EC13-GW-05`, `EC13-TEL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `TRANS`, `REPO`, `PROV` | NP-05, NP-16, NP-25 | — | FOLLOW-UP | H-PROV |
| VC-R-133 | `24-§26-10` | `EC13-GW-05` | `UNIT`, `INT`, `DB`, `CONC`, `DOC` | NP-05, NP-40 | — | PASS | — |
| VC-R-134 | `24-§27-2` | `EC13-ARC-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-01, NP-16 | RS-04 | FOLLOW-UP | H-PROV |
| VC-R-135 | `24-§27-4` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-16, NP-32, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-136 | `24-§27-6` | `EC13-ARC-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-01, NP-16 | RS-04 | FOLLOW-UP | H-PROV |
| VC-R-137 | `24-§27-7` | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV |
| VC-R-138 | `24-§27-8` | `EC13-ARC-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-12, NP-16 | RS-01 | BLOCKED | H-D12, H-PROV |
| VC-R-139 | `24-§27-9` | `EC13-ARC-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-01, NP-16 | RS-04 | FOLLOW-UP | H-PROV |
| VC-R-140 | `24-§27-10` | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV |
| VC-R-141 | `24-§27-11` | `EC13-ARC-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-01, NP-16 | RS-04 | FOLLOW-UP | H-PROV |
| VC-R-142 | `24-§28-1` | `EC13-GW-01`, `EC13-PRV-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV` | NP-15, NP-16 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-143 | `24-§28-2` | `EC13-GW-04`, `EC13-PRV-01` | `UNIT`, `INT`, `REPO`, `PROV` | NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-144 | `24-§28-3` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16 | RS-19 | FOLLOW-UP | H-PROV |
| VC-R-145 | `24-§28-4` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-146 | `24-§28-5` | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-16, NP-17 | — | BLOCKED | H-D12, H-PROV |
| VC-R-147 | `24-§28-6` | `EC13-CTX-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `PROV`, `DOC` | NP-10, NP-16 | — | BLOCKED | H-D12, H-PROV |
| VC-R-148 | `24-§28-7` | `EC13-WSP-05`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `PROV`, `DOC` | NP-03, NP-05, NP-16 | RS-15 | BLOCKED | H-D12, H-PROV |
| VC-R-149 | `24-§28-8` | `EC13-CMD-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-21 | RS-01 | BLOCKED | H-D12, H-PROV |
| VC-R-150 | `24-§28-9` | `EC13-GW-01`, `EC13-PRV-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV` | NP-15, NP-16 | RS-09 | FOLLOW-UP | H-PROV, H-CONF |
| VC-R-151 | `24-§28-10` | `EC13-GW-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `CONC`, `PROV` | NP-05, NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-152 | `24-§28-11` | `EC13-GW-04`, `EC13-PRV-01` | `UNIT`, `INT`, `REPO`, `PROV` | NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-153 | `24-§28-12` | `EC13-AUD-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-16 | RS-01 | BLOCKED | H-D12, H-PROV |
| VC-R-154 | `24-§29-1` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16 | RS-19 | FOLLOW-UP | H-PROV |
| VC-R-155 | `24-§29-2` | `EC13-ARC-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-156 | `24-§29-3` | `EC13-ARC-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16 | RS-01 | FOLLOW-UP | H-PROV |
| VC-R-157 | `24-§29-4` | `EC13-GW-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-16 | RS-19 | BLOCKED | H-D12, H-PROV |
| VC-R-158 | `24-§29-5` | `EC13-GW-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-16 | RS-19 | BLOCKED | H-D12, H-PROV |
| VC-R-159 | `24-§29-6` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16 | RS-19 | FOLLOW-UP | H-PROV |
| VC-R-160 | `24-§30-1` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-161 | `24-§30-2` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-162 | `24-§30-3` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-163 | `24-§30-4` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-164 | `24-§30-5` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-165 | `24-§30-6` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-166 | `24-§30-7` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-167 | `24-§30-8` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-168 | `24-§31-1` | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-01, NP-09, NP-16 | RS-04 | BLOCKED | H-D12, H-PROV, H-LATER, H-EVID |
| VC-R-169 | `24-§31-2` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-32, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-170 | `24-§31-3` | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-171 | `24-§31-4` | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-04, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-172 | `24-§31-5` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| VC-R-173 | `24-§31-6` | `EC13-TOOL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-12, NP-16, NP-17 | RS-01 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-174 | `24-§31-7` | `EC13-CNF-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-18 | RS-01 | BLOCKED | H-D12, H-PROV, H-CONF, H-EVID |
| VC-R-175 | `24-§31-11` | `EC13-IDM-02`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-24 | RS-10 | BLOCKED | H-D12, H-PROV, H-CONF, H-EVID |
| VC-R-176 | `24-§31-12` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-177 | `24-§31-13` | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22, NP-24 | RS-01, RS-10 | BLOCKED | H-D12, H-DTX, H-CONF, H-EVID |
| VC-R-178 | `24-§31-14` | `EC13-AUD-01`, `EC13-TEL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `INV`, `AUDIT`, `TRANS`, `RT`, `FRT`, `REPO`, `PROV` | NP-16, NP-25 | RS-01 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-179 | `24-§31-15` | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-12 | RS-01 | BLOCKED | H-D12, H-LATER, H-EVID |
| VC-R-180 | `24-§31-16` | `EC13-GW-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16 | RS-19 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-181 | `9-§3-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-182 | `9-§3-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-183 | `9-§3-3` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-184 | `9-§3-4` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-185 | `9-§3-5` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-186 | `9-§3-6` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-187 | `9-§3-7` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-188 | `9-§3-8` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-189 | `9-§3-9` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-190 | `9-§4-1` | `EC13-LANG-02`, `EC13-HOLD-01` | `UNIT`, `DB`, `RT`, `PROV`, `DOC` | — | RS-13 | BLOCKED | H-D12, H-LANG |
| VC-R-191 | `9-§4-2` | `EC13-LANG-02` | `UNIT`, `DB`, `RT` | — | RS-13 | PASS | H-LANG |
| VC-R-192 | `9-§4-3` | `EC13-LANG-02` | `UNIT`, `DB`, `RT` | — | RS-13 | PASS | H-LANG |
| VC-R-193 | `9-§4-4` | `EC13-LANG-02` | `UNIT`, `DB`, `RT` | — | RS-13 | PASS | H-LANG |
| VC-R-194 | `9-§4-5` | `EC13-LANG-02` | `UNIT`, `DB`, `RT` | — | RS-13 | PASS | H-LANG |
| VC-R-195 | `9-§5-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-196 | `9-§5-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-197 | `9-§6-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-198 | `9-§6-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-199 | `9-§7-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-200 | `9-§7-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-201 | `9-§7-3` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16, NP-40 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-202 | `9-§8-1` | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16, NP-39 | RS-06, RS-09 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-203 | `9-§8-2` | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-16, NP-39 | RS-06, RS-09 | BLOCKED | H-D12, H-PROV, H-LANG, H-CONF |
| VC-R-204 | `9-§8-4` | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16, NP-39 | RS-06, RS-09 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-205 | `9-§9-1` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-206 | `9-§9-2` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG |
| VC-R-207 | `9-§9-3` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-208 | `9-§9-4` | `EC13-LANG-03`, `EC13-CMD-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16, NP-23 | RS-06, RS-14 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-209 | `9-§9-5` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-09, NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG, H-LATER |
| VC-R-210 | `9-§9-6` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG |
| VC-R-211 | `9-§9-7` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-212 | `9-§9-8` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-213 | `9-§10-1` | `EC13-LANG-04`, `EC13-HOLD-01` | `UNIT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12 | RS-06 | BLOCKED | H-D12, H-LANG |
| VC-R-214 | `9-§10-2` | `EC13-LANG-04`, `EC13-HOLD-01` | `UNIT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-40 | RS-06 | BLOCKED | H-D12, H-LANG |
| VC-R-215 | `9-§10-3` | `EC13-LANG-04`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG |
| VC-R-216 | `9-§11-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-217 | `9-§11-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-218 | `9-§11-3` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-219 | `9-§11-4` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-220 | `9-§11-5` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-221 | `9-§11-6` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-222 | `9-§11-7` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG, H-CONF |
| VC-R-223 | `9-§12-4` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-224 | `9-§12-10` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-225 | `9-§12-13` | `EC13-LANG-01` | `UNIT`, `EVAL`, `RT`, `DOC` | NP-11, NP-40 | RS-06 | PASS | H-LANG |
| VC-R-226 | `9-§13-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-227 | `9-§13-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-228 | `9-§13-3` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-229 | `9-§13-4` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-230 | `9-§13-5` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-231 | `9-§13-6` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-232 | `9-§13-7` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16, NP-40 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-233 | `9-§13-8` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16, NP-40 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-234 | `9-§13-9` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-235 | `9-§13-10` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-236 | `9-§13-11` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16, NP-40 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-237 | `9-§14-1` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-238 | `9-§14-2` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-239 | `9-§14-3` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-240 | `9-§14-4` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-241 | `9-§14-5` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-242 | `9-§14-6` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-243 | `9-§14-7` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-244 | `9-§14-8` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-245 | `9-§15-1` | `EC13-LANG-03` | `UNIT`, `DB`, `EVAL`, `RT`, `DOC` | NP-12, NP-40 | RS-06 | PASS | H-LANG |
| VC-R-246 | `9-§15-2` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-247 | `9-§15-3` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-248 | `9-§15-4` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-249 | `9-§15-5` | `EC13-LANG-03` | `UNIT`, `DB`, `EVAL`, `RT`, `DOC` | NP-12, NP-40 | RS-06 | PASS | H-LANG |
| VC-R-250 | `9-§16-1` | `EC13-LANG-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-251 | `9-§16-2` | `EC13-LANG-05`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-252 | `9-§16-3` | `EC13-LANG-05`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16, NP-39 | RS-06, RS-09 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-253 | `9-§16-4` | `EC13-LANG-05`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG |
| VC-R-254 | `9-§17-1` | `EC13-LANG-06`, `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `EVAL`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-21, NP-22 | RS-01, RS-06 | BLOCKED | H-D12, H-DTX, H-PROV, H-LANG, H-EVID |
| VC-R-255 | `9-§17-2` | `EC13-LANG-06`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| VC-R-256 | `9-§17-3` | `EC13-LANG-04`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG, H-EVID |
| VC-R-257 | `9-§17-4` | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16, NP-39 | RS-06, RS-09 | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| VC-R-258 | `9-§17-7` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-259 | `9-§17-8` | `EC13-LANG-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16 | RS-13 | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| VC-R-260 | `9-§17-9` | `EC13-AUTH-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-09 | RS-02 | BLOCKED | H-D12, H-LANG, H-LATER, H-EVID |
| VC-R-261 | `9-§17-10` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG, H-EVID |
| VC-R-262 | `9-§18-1` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-263 | `9-§18-2` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-264 | `9-§18-3` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-265 | `9-§18-4` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-266 | `9-§18-5` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-267 | `9-§18-6` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-268 | `9-§18-7` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-269 | `9-§19` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-270 | `10-§4-1` | `EC13-WSP-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16 | RS-05 | FOLLOW-UP | H-PROV |
| VC-R-271 | `10-§4-2` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-AUDIO |
| VC-R-272 | `10-§4-3` | `EC13-ATT-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | FOLLOW-UP | H-LATER |
| VC-R-273 | `10-§4-4` | `EC13-ATT-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | FOLLOW-UP | H-LATER |
| VC-R-274 | `10-§4-5` | `EC13-ATT-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | FOLLOW-UP | H-LATER |
| VC-R-275 | `10-§4-6` | `EC13-ATT-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | FOLLOW-UP | H-LATER |
| VC-R-276 | `10-§4-7` | `EC13-ATT-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | FOLLOW-UP | H-LATER |
| VC-R-277 | `10-§4-8` | `EC13-ATT-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `DOC` | NP-09, NP-35, NP-36, NP-40 | RS-08 | FOLLOW-UP | H-LATER |
| VC-R-278 | `10-§5-1` | `EC13-WSP-02` | `UNIT`, `RT` | — | RS-05 | PASS | — |
| VC-R-279 | `10-§5-2` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-280 | `10-§5-3` | `EC13-WSP-02` | `UNIT`, `RT` | — | RS-05 | PASS | — |
| VC-R-281 | `10-§5-4` | `EC13-WSP-02` | `UNIT`, `RT` | — | RS-05 | PASS | — |
| VC-R-282 | `10-§5-6` | `EC13-WSP-02` | `UNIT`, `RT` | — | RS-05 | PASS | H-CONF |
| VC-R-283 | `10-§5-8` | `EC13-WSP-02`, `EC13-HOLD-01` | `UNIT`, `RT`, `PROV`, `DOC` | — | RS-05 | BLOCKED | H-D12 |
| VC-R-284 | `10-§5-9` | `EC13-WSP-02`, `EC13-HOLD-01` | `UNIT`, `RT`, `PROV`, `DOC` | — | RS-05 | BLOCKED | H-D12 |
| VC-R-285 | `10-§5-11` | `EC13-WSP-02`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-39 | RS-05, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-286 | `10-§6-1` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-287 | `10-§6-2` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-288 | `10-§6-3` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-289 | `10-§6-4` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-290 | `10-§6-5` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-291 | `10-§6-6` | `EC13-WSP-03`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `DOC` | NP-09, NP-13 | RS-05 | FOLLOW-UP | H-LATER |
| VC-R-292 | `10-§6-7` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-293 | `10-§6-8` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-294 | `10-§6-9` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-295 | `10-§6-10` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-296 | `10-§6-11` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-CONF, H-LATER |
| VC-R-297 | `10-§6-12` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-CONF, H-LATER |
| VC-R-298 | `10-§6-13` | `EC13-WSP-03` | `UNIT`, `INV`, `RT`, `REPO`, `DOC` | NP-13, NP-40 | RS-05 | PASS | — |
| VC-R-299 | `10-§7-2` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-300 | `10-§7-3` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-301 | `10-§7-4` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-302 | `10-§7-5` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-303 | `10-§7-6` | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-12 | RS-01 | BLOCKED | H-D12, H-LATER |
| VC-R-304 | `10-§8-1` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-305 | `10-§8-2` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-306 | `10-§8-3` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-307 | `10-§8-4` | `EC13-AUTH-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-40 | RS-01 | BLOCKED | H-D12 |
| VC-R-308 | `10-§9-3` | `EC13-CNF-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-20, NP-40 | RS-01 | BLOCKED | H-D12, H-LATER |
| VC-R-309 | `10-§10-2` | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `PROV`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | BLOCKED | H-D12, H-LATER |
| VC-R-310 | `10-§10-6` | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `PROV`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | BLOCKED | H-D12, H-LATER |
| VC-R-311 | `10-§10-8` | `EC13-ATT-01` | `UNIT`, `INT`, `TRANS`, `RT` | NP-35, NP-36 | RS-08 | PASS | — |
| VC-R-312 | `10-§11-1` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-313 | `10-§11-2` | `EC13-CMD-02`, `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-21, NP-22, NP-29, NP-39 | RS-01, RS-04, RS-09 | BLOCKED | H-D12, H-DTX, H-PROV |
| VC-R-314 | `10-§11-3` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-315 | `10-§11-5` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-316 | `10-§11-6` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-317 | `10-§11-7` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-318 | `10-§11-8` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-319 | `10-§12-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-320 | `10-§12-2` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-321 | `10-§12-3` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-322 | `10-§13-1` | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX |
| VC-R-323 | `10-§13-2` | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX |
| VC-R-324 | `10-§13-8` | `EC13-CMD-01`, `EC13-HOLD-01` | `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-21 | RS-01 | BLOCKED | H-D12 |
| VC-R-325 | `10-§13-9` | `EC13-CMD-01`, `EC13-HOLD-01` | `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-21 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-326 | `10-§13-10` | `EC13-CMD-01`, `EC13-HOLD-01` | `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-21 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-327 | `10-§13-11` | `EC13-CMD-01`, `EC13-HOLD-01` | `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-21 | RS-01 | BLOCKED | H-D12 |
| VC-R-328 | `10-§13-12` | `EC13-CMD-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-40 | RS-01 | BLOCKED | H-D12 |
| VC-R-329 | `10-§14-1` | `EC13-FAIL-03`, `EC13-HOLD-01` | `NET`, `RT`, `FRT`, `PROV`, `DOC` | NP-38 | RS-03 | BLOCKED | H-D12 |
| VC-R-330 | `10-§15-1` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-331 | `10-§15-2` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-332 | `10-§15-3` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-333 | `10-§15-4` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-334 | `10-§15-5` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-335 | `10-§15-6` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-336 | `10-§15-7` | `EC13-AUTH-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02, NP-40 | RS-01 | BLOCKED | H-D12 |
| VC-R-337 | `10-§16-1` | `EC13-WSP-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `DOC` | NP-03, NP-05, NP-40 | RS-15 | PASS | — |
| VC-R-338 | `10-§16-2` | `EC13-WSP-05`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `DOC` | NP-03, NP-05, NP-09 | RS-15 | FOLLOW-UP | H-LATER |
| VC-R-339 | `10-§16-3` | `EC13-WSP-05`, `EC13-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `RT`, `PROV`, `DOC` | NP-03, NP-05 | RS-15 | BLOCKED | H-D12 |
| VC-R-340 | `10-§16-4` | `EC13-WSP-05`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `DOC` | NP-03, NP-05, NP-09 | RS-15 | FOLLOW-UP | H-LATER |
| VC-R-341 | `10-§16-5` | `EC13-WSP-05`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `DOC` | NP-03, NP-05, NP-09 | RS-15 | FOLLOW-UP | H-LATER |
| VC-R-342 | `10-§16-6` | `EC13-WSP-05`, `EC13-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `RT`, `PROV`, `DOC` | NP-03, NP-05 | RS-15 | BLOCKED | H-D12 |
| VC-R-343 | `10-§16-7` | `EC13-WSP-05`, `EC13-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `RT`, `PROV`, `DOC` | NP-03, NP-05 | RS-15 | BLOCKED | H-D12, H-CONF |
| VC-R-344 | `10-§16-8` | `EC13-WSP-05` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `RT`, `DOC` | NP-03, NP-05, NP-40 | RS-15 | PASS | — |
| VC-R-345 | `10-§17-1` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-346 | `10-§17-2` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG |
| VC-R-347 | `10-§17-3` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-348 | `10-§17-6` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG |
| VC-R-349 | `10-§17-7` | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV`, `DOC` | NP-12, NP-16 | RS-06 | BLOCKED | H-D12, H-PROV, H-LANG |
| VC-R-350 | `10-§17-8` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-351 | `10-§17-9` | `EC13-CNF-02`, `EC13-HOLD-01` | `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-19 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-352 | `10-§18-1` | `EC13-FAIL-03`, `EC13-HOLD-01` | `NET`, `RT`, `FRT`, `PROV`, `DOC` | NP-38 | RS-03 | BLOCKED | H-D12 |
| VC-R-353 | `10-§18-2` | `EC13-FAIL-02` | `UNIT`, `INT`, `RT` | NP-37 | RS-09 | PASS | — |
| VC-R-354 | `10-§18-3` | `EC13-FAIL-02` | `UNIT`, `INT`, `RT` | NP-37 | RS-09 | PASS | — |
| VC-R-355 | `10-§18-4` | `EC13-FAIL-02` | `UNIT`, `INT`, `RT` | NP-37 | RS-09 | PASS | — |
| VC-R-356 | `10-§18-5` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-357 | `10-§18-6` | `EC13-FAIL-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-37 | RS-09 | BLOCKED | H-D12 |
| VC-R-358 | `10-§18-7` | `EC13-IDM-01`, `EC13-HOLD-01` | `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-24 | RS-10 | BLOCKED | H-D12, H-CONF |
| VC-R-359 | `10-§18-8` | `EC13-FAIL-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-37 | RS-09 | BLOCKED | H-D12, H-CONF |
| VC-R-360 | `10-§18-9` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-361 | `10-§18-10` | `EC13-FAIL-02` | `UNIT`, `INT`, `RT` | NP-37 | RS-09 | PASS | — |
| VC-R-362 | `10-§18-12` | `EC13-FAIL-02` | `UNIT`, `INT`, `RT` | NP-37 | RS-09 | PASS | — |
| VC-R-363 | `10-§18-13` | `EC13-FAIL-02` | `UNIT`, `INT`, `RT` | NP-37 | RS-09 | PASS | — |
| VC-R-364 | `10-§19-1` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-365 | `10-§19-2` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-366 | `10-§19-3` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-367 | `10-§19-4` | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-16, NP-39, NP-40 | RS-02, RS-09 | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| VC-R-368 | `10-§19-5` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-369 | `10-§19-6` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-370 | `10-§19-7` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-371 | `10-§20-1` | `EC13-WSP-06`, `EC13-PRV-01` | `UNIT`, `INT`, `PERF`, `RT`, `PROV` | NP-16 | RS-16 | FOLLOW-UP | H-PROV |
| VC-R-372 | `10-§20-2` | `EC13-WSP-06` | `PERF`, `RT` | — | RS-16 | PASS | — |
| VC-R-373 | `10-§20-3` | `EC13-WSP-06` | `PERF`, `RT` | — | RS-16 | PASS | H-CONF |
| VC-R-374 | `10-§20-4` | `EC13-WSP-06` | `PERF`, `RT` | — | RS-16 | PASS | H-CONF |
| VC-R-375 | `10-§20-5` | `EC13-WSP-06`, `EC13-HOLD-01` | `UNIT`, `PERF`, `RT`, `PROV`, `DOC` | NP-40 | RS-16 | BLOCKED | H-D12, H-CONF |
| VC-R-376 | `10-§20-6` | `EC13-WSP-01` | `UNIT`, `RT` | — | RS-05 | PASS | — |
| VC-R-377 | `10-§22-1` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-378 | `10-§22-2` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-379 | `10-§22-3` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-380 | `10-§22-4` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-381 | `10-§22-5` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-382 | `10-§22-6` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-383 | `10-§23-1` | `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX, H-PROV, H-CONF, H-EVID |
| VC-R-384 | `10-§23-2` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-32, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-385 | `10-§23-3a` | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `PROV`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | BLOCKED | H-D12, H-LATER, H-EVID |
| VC-R-386 | `10-§23-5` | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-04, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-387 | `10-§23-7` | `EC13-FAIL-03`, `EC13-HOLD-01` | `NET`, `RT`, `FRT`, `PROV`, `DOC` | NP-38 | RS-03 | BLOCKED | H-D12, H-EVID |
| VC-R-388 | `10-§23-8` | `EC13-CNF-02`, `EC13-HOLD-01` | `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-19 | RS-01 | BLOCKED | H-D12, H-EVID |
| VC-R-389 | `10-§23-9` | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22, NP-24 | RS-01, RS-10 | BLOCKED | H-D12, H-DTX, H-CONF, H-EVID |
| VC-R-390 | `10-§23-10` | `EC13-AUTH-04`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03 | RS-02 | BLOCKED | H-D12, H-EVID |
| VC-R-391 | `12-§3-1` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-392 | `12-§4-1` | `EC13-CMD-02`, `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-16, NP-21, NP-22, NP-23, NP-39 | RS-01, RS-09, RS-14 | BLOCKED | H-D12, H-DTX, H-PROV, H-LATER |
| VC-R-393 | `12-§4-6` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-CONF |
| VC-R-394 | `12-§4-7` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-395 | `12-§4-8` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-396 | `12-§4-9` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-397 | `12-§6-1` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-398 | `12-§6-2` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-399 | `12-§6-3` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-400 | `12-§6-4` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-401 | `12-§6-5` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-402 | `12-§6-6` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-403 | `12-§7-1` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-404 | `12-§7-2` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-405 | `12-§7-3` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-406 | `12-§7-4` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-407 | `12-§7-5` | `EC13-CMD-03`, `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-23, NP-39 | RS-04, RS-09, RS-14 | FOLLOW-UP | H-PROV |
| VC-R-408 | `12-§7-6` | `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-09, NP-16, NP-23, NP-39 | RS-09, RS-14 | FOLLOW-UP | H-PROV, H-LATER |
| VC-R-409 | `12-§7-8` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-410 | `12-§7-9` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-411 | `12-§7-10` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-412 | `12-§8-1` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-413 | `12-§8-2` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-414 | `12-§8-3` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-415 | `12-§8-5` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-416 | `12-§9-1` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-417 | `12-§9-2` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-418 | `12-§9-3` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-419 | `12-§11-1` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-AUDIO |
| VC-R-420 | `12-§11-2` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-421 | `12-§11-3` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-422 | `12-§11-4` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-423 | `12-§11-5` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-09, NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-LATER |
| VC-R-424 | `12-§11-7` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-425 | `12-§11-8` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-426 | `12-§11-9` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-29, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-427 | `12-§13-3` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-428 | `12-§14-1` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-32, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-429 | `12-§14-2` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-32, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-430 | `12-§14-3` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-32, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-431 | `12-§14-4` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-32, NP-39, NP-40 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-432 | `12-§15-1` | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-34, NP-39 | RS-09, RS-11 | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| VC-R-433 | `12-§15-2` | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-34, NP-39 | RS-09, RS-11 | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| VC-R-434 | `12-§15-3` | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-34, NP-39 | RS-09, RS-11 | BLOCKED | H-D12, H-PROV, H-FPDR4 |
| VC-R-435 | `12-§15-4` | `EC13-VOI-02`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `INV`, `TRANS`, `RT`, `PROV`, `DOC` | NP-09, NP-16, NP-30, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-AUDIO, H-LATER |
| VC-R-436 | `12-§15-5` | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-34, NP-39, NP-40 | RS-09, RS-11 | BLOCKED | H-D12, H-PROV |
| VC-R-437 | `12-§16-1` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV |
| VC-R-438 | `12-§16-2` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV |
| VC-R-439 | `12-§16-3` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV |
| VC-R-440 | `12-§16-4` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV |
| VC-R-441 | `12-§16-5` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-442 | `12-§16-6` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV |
| VC-R-443 | `12-§16-7` | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-18, NP-31, NP-39 | RS-09, RS-17 | BLOCKED | H-D12, H-PROV |
| VC-R-444 | `12-§16-8` | `EC13-VOI-02`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `INV`, `TRANS`, `RT`, `PROV`, `DOC` | NP-09, NP-16, NP-30, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-AUDIO, H-LATER |
| VC-R-445 | `12-§17-1` | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-31, NP-39 | RS-09, RS-17 | FOLLOW-UP | H-PROV, H-AUDIO |
| VC-R-446 | `12-§17-2` | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-31, NP-39 | RS-09, RS-17 | FOLLOW-UP | H-PROV, H-AUDIO |
| VC-R-447 | `12-§17-3` | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-31, NP-39 | RS-09, RS-17 | FOLLOW-UP | H-PROV |
| VC-R-448 | `12-§17-4` | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-31, NP-39 | RS-09, RS-17 | FOLLOW-UP | H-PROV |
| VC-R-449 | `12-§17-5` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV |
| VC-R-450 | `12-§17-6` | `EC13-VOI-02`, `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `INV`, `TRANS`, `RT`, `PROV` | NP-16, NP-30, NP-33, NP-39 | RS-04, RS-09, RS-12 | FOLLOW-UP | H-PROV, H-AUDIO |
| VC-R-451 | `12-§17-7` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-33, NP-39 | RS-09, RS-12 | BLOCKED | H-D12, H-PROV |
| VC-R-452 | `12-§17-8` | `EC13-IDM-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `CONC`, `RT`, `PROV`, `DOC` | NP-16, NP-24, NP-39 | RS-09, RS-10 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-453 | `12-§17-9` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV |
| VC-R-454 | `12-§17-10` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV |
| VC-R-455 | `12-§17-11` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV |
| VC-R-456 | `12-§17-12` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV, H-CONF |
| VC-R-457 | `12-§17-13` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV |
| VC-R-458 | `12-§17-14` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV |
| VC-R-459 | `12-§17-15` | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-33, NP-39 | RS-09, RS-12 | FOLLOW-UP | H-PROV |
| VC-R-460 | `12-§18-1` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-461 | `12-§18-2` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-462 | `12-§18-3` | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-39, NP-40 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-CONF |
| VC-R-463 | `12-§20-1` | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-464 | `12-§20-2` | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-465 | `12-§20-3` | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-466 | `12-§20-4` | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-467 | `12-§20-5` | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-468 | `12-§20-6` | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-29, NP-39, NP-40 | RS-04, RS-09 | FOLLOW-UP | H-PROV |
| VC-R-469 | `12-§21-1` | `EC13-CMD-02`, `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-16, NP-21, NP-22, NP-23, NP-39 | RS-01, RS-09, RS-14 | BLOCKED | H-D12, H-DTX, H-PROV, H-LATER, H-EVID |
| VC-R-470 | `12-§21-2` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-16, NP-32, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-471 | `12-§21-7` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-16, NP-32, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| VC-R-472 | `12-§21-8` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-32, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-473 | `12-§21-9` | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-21, NP-22, NP-24, NP-39 | RS-01, RS-09, RS-10 | BLOCKED | H-D12, H-DTX, H-PROV, H-CONF, H-EVID |
| VC-R-474 | `12-§21-10` | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV` | NP-16, NP-32, NP-39 | RS-04, RS-09 | FOLLOW-UP | H-PROV, H-CONF, H-EVID |
| VC-R-475 | `12-§21-12` | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-34, NP-39 | RS-09, RS-11 | BLOCKED | H-D12, H-PROV, H-FPDR4, H-EVID |
| VC-R-476 | `8-§3-1` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | — |
| VC-R-477 | `8-§3-2` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | — |
| VC-R-478 | `8-§3-3` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | — |
| VC-R-479 | `8-§3-4` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | — |
| VC-R-480 | `8-§3-5` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-481 | `8-§3-8` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | — |
| VC-R-482 | `8-§4-1` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-483 | `8-§5-1` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-484 | `8-§5-2` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-485 | `8-§5-3` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-486 | `8-§6-1` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-487 | `8-§6-2` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-488 | `8-§6-3` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-489 | `8-§6-4` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-490 | `8-§6-5` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-491 | `8-§7-1` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-492 | `8-§7-2` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-493 | `8-§7-3` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-494 | `8-§7-6` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-495 | `8-§7-7` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-496 | `8-§7-8` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-497 | `8-§7-9` | `EC13-FAQ-03`, `EC13-HOLD-01` | `UNIT`, `DB`, `RT`, `PROV`, `DOC` | NP-27, NP-40 | RS-07 | BLOCKED | H-D12 |
| VC-R-498 | `8-§7-10` | `EC13-FAQ-03`, `EC13-HOLD-01` | `UNIT`, `DB`, `RT`, `PROV`, `DOC` | NP-27, NP-40 | RS-07 | BLOCKED | H-D12 |
| VC-R-499 | `8-§7-11` | `EC13-TEL-02` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `DOC` | NP-26, NP-40 | RS-01 | PASS | — |
| VC-R-500 | `8-§7-12` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-501 | `8-§11-1` | `EC13-FAQ-04` | `INT`, `RT` | NP-28 | RS-07 | PASS | — |
| VC-R-502 | `8-§11-2` | `EC13-FAQ-04` | `INT`, `RT` | NP-28 | RS-07 | PASS | — |
| VC-R-503 | `8-§11-4` | `EC13-FAQ-04` | `INT`, `RT` | NP-28 | RS-07 | PASS | — |
| VC-R-504 | `8-§11-5` | `EC13-FAQ-04` | `INT`, `RT` | NP-28 | RS-07 | PASS | — |
| VC-R-505 | `8-§12-1` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | — |
| VC-R-506 | `8-§12-5` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-507 | `8-§13-1` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-508 | `8-§15-1` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-509 | `8-§15-2` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-510 | `8-§15-3` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-511 | `8-§15-4` | `EC13-FAQ-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16, NP-27 | RS-07 | FOLLOW-UP | H-PROV |
| VC-R-512 | `8-§15-6` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-513 | `8-§15-7` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-514 | `8-§15-10` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-515 | `8-§15-11` | `EC13-FAQ-03`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `DOC` | NP-09, NP-27 | RS-07 | FOLLOW-UP | H-LATER |
| VC-R-516 | `8-§16-1` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | H-EVID |
| VC-R-517 | `8-§16-2` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| VC-R-518 | `8-§16-3` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-519 | `8-§16-4` | `EC13-FAQ-02` | `UNIT`, `EVAL`, `RT` | — | RS-07 | PASS | H-EVID |
| VC-R-520 | `8-§16-5` | `EC13-FAQ-02`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV` | NP-16 | RS-07 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-521 | `8-§16-9` | `EC13-FAQ-04` | `INT`, `RT` | NP-28 | RS-07 | PASS | H-EVID |
| VC-R-522 | `8-§17-2` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-523 | `8-§17-3` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-524 | `8-§17-4` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-525 | `8-§17-6` | `EC13-FAQ-03` | `UNIT`, `DB`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-526 | `22-§4-2` | `EC13-WSP-03` | `UNIT`, `INV`, `RT`, `REPO`, `DOC` | NP-13, NP-40 | RS-05 | PASS | — |
| VC-R-527 | `22-§7-1` | `EC13-ARC-01`, `EC13-PRV-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-528 | `22-§7-2` | `EC13-WSP-03`, `EC13-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13 | RS-05 | BLOCKED | H-D12 |
| VC-R-529 | `22-§7-3` | `EC13-WSP-03`, `EC13-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13 | RS-05 | BLOCKED | H-D12 |
| VC-R-530 | `22-§7-4` | `EC13-ARC-01`, `EC13-PRV-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-531 | `22-§7-5` | `EC13-WSP-03`, `EC13-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13 | RS-05 | BLOCKED | H-D12, H-CONF |
| VC-R-532 | `22-§7-6` | `EC13-WSP-03`, `EC13-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13 | RS-05 | BLOCKED | H-D12 |
| VC-R-533 | `22-§7-7` | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-12 | RS-01 | BLOCKED | H-D12, H-LATER |
| VC-R-534 | `22-§7-8` | `EC13-WSP-03`, `EC13-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13 | RS-05 | BLOCKED | H-D12, H-CONF |
| VC-R-535 | `22-§7-9` | `EC13-ARC-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-536 | `22-§7-10` | `EC13-ARC-01`, `EC13-PRV-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-537 | `22-§8-1` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-538 | `22-§8-2` | `EC13-LANG-01` | `UNIT`, `EVAL`, `RT`, `DOC` | NP-11, NP-40 | RS-06 | PASS | H-LANG |
| VC-R-539 | `22-§8-3` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-540 | `22-§8-4` | `EC13-LANG-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16, NP-39 | RS-06, RS-09 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-541 | `22-§8-5` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-542 | `22-§8-6` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-543 | `22-§8-7` | `EC13-LANG-01`, `EC13-PRV-01` | `UNIT`, `INT`, `EVAL`, `RT`, `PROV`, `DOC` | NP-11, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-544 | `22-§17` | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-16, NP-39 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-545 | `22-§19-1` | `EC13-FAIL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-546 | `22-§19-2` | `EC13-FAIL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV, H-CONF |
| VC-R-547 | `22-§19-3` | `EC13-FAIL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-548 | `22-§19-4` | `EC13-FAIL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-549 | `22-§19-5` | `EC13-FAIL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-550 | `22-§19-6` | `EC13-FAIL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-551 | `22-§19-7` | `EC13-FAIL-02`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-552 | `22-§21` | `EC13-WSP-06`, `EC13-PRV-01` | `UNIT`, `INT`, `PERF`, `RT`, `PROV` | NP-16 | RS-16 | FOLLOW-UP | H-PROV, H-CONF |
| VC-R-553 | `22-§22-1` | `EC13-VER-01` | `UNIT`, `DB`, `INV`, `REPO` | NP-14 | — | PASS | — |
| VC-R-554 | `22-§22-2` | `EC13-VER-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `INV`, `REPO`, `PROV`, `DOC` | NP-14 | — | BLOCKED | H-D12 |
| VC-R-555 | `22-§22-3` | `EC13-VER-01` | `UNIT`, `DB`, `INV`, `REPO` | NP-14 | — | PASS | — |
| VC-R-556 | `22-§22-4` | `EC13-VER-01` | `UNIT`, `DB`, `INV`, `REPO` | NP-14 | — | PASS | — |
| VC-R-557 | `22-§22-5` | `EC13-VER-01` | `UNIT`, `DB`, `INV`, `REPO` | NP-14 | — | PASS | — |
| VC-R-558 | `22-§22-6` | `EC13-VER-01` | `UNIT`, `DB`, `INV`, `REPO`, `DOC` | NP-14, NP-40 | — | PASS | — |
| VC-R-559 | `22-§23-2` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-560 | `22-§23-3` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-561 | `22-§23-5` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-562 | `22-§23-7` | `EC13-AUTH-04`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-563 | `22-§24-1` | `EC13-ARC-03`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-12, NP-16 | RS-01 | BLOCKED | H-D12, H-PROV, H-LATER |
| VC-R-564 | `22-§24-2` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07, NP-40 | RS-02 | BLOCKED | H-D12 |
| VC-R-565 | `22-§24-3` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12 |
| VC-R-566 | `22-§27-1` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-567 | `22-§27-2` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-568 | `22-§27-3` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-569 | `22-§27-4` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | H-CONF |
| VC-R-570 | `22-§27-5` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-571 | `22-§27-6` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-572 | `22-§27-7` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | — |
| VC-R-573 | `22-§28-1` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | H-CONF |
| VC-R-574 | `22-§28-2` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | H-CONF |
| VC-R-575 | `22-§28-3` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | H-CONF |
| VC-R-576 | `22-§28-4` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | H-CONF |
| VC-R-577 | `22-§28-5` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | H-CONF |
| VC-R-578 | `22-§28-6` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | H-CONF |
| VC-R-579 | `22-§28-7` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-580 | `22-§28-8` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-581 | `22-§28-9` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-582 | `22-§28-10` | `EC13-NG-01` | `UNIT`, `REPO`, `DOC` | NP-40 | — | PASS | — |
| VC-R-583 | `22-§29-1` | `EC13-ARC-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-01, NP-09 | RS-04 | BLOCKED | H-D12, H-LATER, H-EVID |
| VC-R-584 | `22-§29-2` | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-01, NP-09, NP-16 | RS-04 | BLOCKED | H-D12, H-PROV, H-LATER, H-EVID |
| VC-R-585 | `22-§29-3` | `EC13-AUTH-04`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-01, NP-03 | RS-02 | BLOCKED | H-D12, H-EVID |
| VC-R-586 | `22-§29-7` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF, H-EVID |
| VC-R-587 | `22-§29-8` | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22, NP-24 | RS-01, RS-10 | BLOCKED | H-D12, H-DTX, H-CONF, H-EVID |
| VC-R-588 | `22-§29-10` | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37, NP-39 | RS-09 | FOLLOW-UP | H-PROV, H-EVID |
| VC-R-589 | `22-§29-12` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12, H-EVID |
| VC-R-590 | `22-§29-13` | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16, NP-37 | RS-09 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-591 | `22-§29-14` | `EC13-DOC-01` | `REPO`, `DOC` | — | RS-20 | PASS | H-EVID |
| VC-R-592 | `17-§5-1` | `EC13-WSP-01` | `UNIT`, `RT` | — | RS-05 | PASS | — |
| VC-R-593 | `17-§5-2` | `EC13-WSP-01` | `UNIT`, `RT`, `DOC` | NP-40 | RS-05 | PASS | — |
| VC-R-594 | `17-§5-3` | `EC13-WSP-03`, `EC13-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13 | RS-05 | BLOCKED | H-D12 |
| VC-R-595 | `17-§5-4` | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-09, NP-12 | RS-01 | BLOCKED | H-D12, H-LATER |
| VC-R-596 | `17-§5-5` | `EC13-WSP-03`, `EC13-HOLD-01` | `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13 | RS-05 | BLOCKED | H-D12 |
| VC-R-597 | `17-§5-6` | `EC13-WSP-03`, `EC13-PRV-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-13, NP-16 | RS-05 | FOLLOW-UP | H-PROV |
| VC-R-598 | `17-§5-7` | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX |
| VC-R-599 | `17-§5-8` | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-13 | RS-05 | BLOCKED | H-D12, H-LATER |
| VC-R-600 | `17-§22-4` | `EC13-WSP-04`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-01, NP-09 | RS-05 | BLOCKED | H-D12, H-LATER, H-EVID |
| VC-R-601 | `17-§22-8` | `EC13-WSP-01` | `UNIT`, `RT` | — | RS-05 | PASS | H-EVID |
| VC-R-602 | `20-§14-1` | `EC13-LANG-02`, `EC13-PRV-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-09, NP-16 | RS-13 | FOLLOW-UP | H-PROV, H-LANG, H-LATER |
| VC-R-603 | `20-§14-2` | `EC13-LANG-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16 | RS-13 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-604 | `20-§14-3` | `EC13-LANG-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16 | RS-13 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-605 | `20-§14-4` | `EC13-LANG-02`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV` | NP-16 | RS-13 | FOLLOW-UP | H-PROV, H-LANG |
| VC-R-606 | `20-§15-3` | `EC13-WSP-01` | `UNIT`, `RT` | — | RS-05 | PASS | — |
| VC-R-607 | `7-§11-2` | `EC13-AUTH-03`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-04, NP-09, NP-40 | RS-02 | BLOCKED | H-D12, H-CONF, H-LATER |
| VC-R-608 | `BP-§5.4-1` | `EC13-VOI-10`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16, NP-39 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-609 | `BP-§6.2-1` | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX, H-CONF |
| VC-R-610 | `BP-§6.2-2` | `EC13-CMD-01`, `EC13-HOLD-01` | `DB`, `INV`, `RT`, `FRT`, `PROV`, `DOC` | NP-21 | RS-01 | BLOCKED | H-D12 |
| VC-R-611 | `BP-§6.4-1` | `EC13-ARC-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-09 | — | BLOCKED | H-D12, H-LATER |
| VC-R-612 | `BP-§6.4-2` | `EC13-ARC-01`, `EC13-HOLD-01` | `UNIT`, `REPO`, `PROV`, `DOC` | — | — | BLOCKED | H-D12 |
| VC-R-613 | `BP-§6.4-3` | `EC13-ARC-01`, `EC13-PRV-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-614 | `BP-§6.4-4` | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16 | — | BLOCKED | H-D12, H-PROV |
| VC-R-615 | `BP-§6.4-5` | `EC13-ARC-01`, `EC13-PRV-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16 | — | FOLLOW-UP | H-PROV |
| VC-R-616 | `BP-§6.4-6` | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `REPO`, `PROV`, `DOC` | NP-16 | — | BLOCKED | H-D12, H-PROV |
| VC-R-617 | `BP-§6.4-7` | `EC13-ARC-01`, `EC13-HOLD-01` | `UNIT`, `REPO`, `PROV`, `DOC` | — | — | BLOCKED | H-D12, H-CONF |
| VC-R-618 | `BP-§6.4-8` | `EC13-ARC-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `UNIT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX |
| VC-R-619 | `BP-§6.4-9` | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `RT`, `REPO`, `PROV`, `DOC` | NP-09, NP-16, NP-39 | RS-09 | BLOCKED | H-D12, H-PROV, H-LATER |
| VC-R-620 | `BP-§6.4-10` | `EC13-ARC-01`, `EC13-HOLD-01` | `UNIT`, `REPO`, `PROV`, `DOC` | — | — | BLOCKED | H-D12 |
| VC-R-621 | `BP-§6.6-1` | `EC13-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-622 | `BP-§8.3-1` | `EC13-WSP-01` | `UNIT`, `RT` | — | RS-05 | PASS | — |
| VC-R-623 | `BP-§8.4-1` | `EC13-ARC-02` | `UNIT`, `INT`, `DB`, `RT` | NP-01 | RS-04 | PASS | — |
| VC-R-624 | `BP-§8.4-2` | `EC13-FAIL-03`, `EC13-HOLD-01` | `NET`, `RT`, `FRT`, `PROV`, `DOC` | NP-38 | RS-03 | BLOCKED | H-D12 |
| VC-R-625 | `BP-§8.4-3` | `EC13-ARC-02` | `UNIT`, `INT`, `DB`, `RT` | NP-01 | RS-04 | PASS | — |
| VC-R-626 | `BP-§10.2-W1` | `EC13-WSP-01`, `EC13-HOLD-01` | `UNIT`, `RT`, `PROV`, `DOC` | — | RS-05 | BLOCKED | H-D12 |
| VC-R-627 | `BP-§10.2-W2` | `EC13-LANG-01` | `UNIT`, `EVAL`, `RT`, `DOC` | NP-11 | RS-06 | PASS | H-LANG |
| VC-R-628 | `BP-§10.2-W3` | `EC13-WSP-05`, `EC13-HOLD-01` | `INT`, `DB`, `CONC`, `INV`, `RT`, `PROV`, `DOC` | NP-03, NP-05 | RS-15 | BLOCKED | H-D12 |
| VC-R-629 | `BP-§10.2-W4` | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `PROV`, `DOC` | NP-16, NP-29, NP-39 | RS-04, RS-09 | BLOCKED | H-D12, H-PROV |
| VC-R-630 | `BP-§10.2-W5` | `EC13-GW-01`, `EC13-PRV-01` | `UNIT`, `INT`, `INV`, `RT`, `REPO`, `PROV` | NP-15, NP-16 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-631 | `BP-§10.2-W6` | `EC13-TOOL-01`, `EC13-HOLD-01` | `UNIT`, `PROV`, `DOC` | NP-17 | — | BLOCKED | H-D12 |
| VC-R-632 | `BP-§10.2-W7` | `EC13-AUTH-01`, `EC13-HOLD-01` | `INT`, `DB`, `INV`, `RT`, `FRT`, `REPO`, `PROV`, `DOC` | NP-01, NP-02 | RS-01 | BLOCKED | H-D12 |
| VC-R-633 | `BP-§10.2-W8` | `EC13-CNF-01`, `EC13-HOLD-01` | `UNIT`, `DB`, `CONC`, `RT`, `FRT`, `PROV`, `DOC` | NP-18 | RS-01 | BLOCKED | H-D12, H-CONF |
| VC-R-634 | `BP-§10.2-W9` | `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` | `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX |
| VC-R-635 | `BP-§10.2-W10` | `EC13-AUD-01`, `EC13-HOLD-01` | `DB`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | — | RS-01 | BLOCKED | H-D12 |
| VC-R-636 | `BP-§10.2-W11` | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` | `UNIT`, `INT`, `TRANS`, `RT`, `PROV`, `DOC` | NP-09, NP-35, NP-36 | RS-08 | BLOCKED | H-D12, H-LATER |
| VC-R-637 | `BP-§10.2-W12` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-638 | `BP-§10.2-W13` | `EC13-FAIL-01`, `EC13-PRV-01` | `UNIT`, `INT`, `RT`, `PROV` | NP-16, NP-37 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-639 | `BP-§10.2-I1` | `EC13-VOI-10`, `EC13-PRV-01`, `EC13-PRV-02` | `UNIT`, `INT`, `RT`, `REPO`, `PROV` | NP-16, NP-39 | RS-09 | FOLLOW-UP | H-PROV |
| VC-R-640 | `BP-§10.2-E1` | `EC13-WSP-01`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `RT`, `PROV`, `DOC` | NP-16 | RS-05 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-641 | `BP-§10.2-E2` | `EC13-LANG-03`, `EC13-PRV-01` | `UNIT`, `INT`, `DB`, `EVAL`, `RT`, `PROV` | NP-12, NP-16 | RS-06 | FOLLOW-UP | H-PROV, H-LANG, H-EVID |
| VC-R-642 | `BP-§10.2-E3` | `EC13-AUTH-02`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-06, NP-07 | RS-02 | BLOCKED | H-D12, H-EVID |
| VC-R-643 | `BP-§10.2-E4` | `EC13-WSP-01` | `UNIT`, `RT` | — | RS-05 | PASS | H-EVID |
| VC-R-644 | `BP-§10.2-E5` | `EC13-FAIL-03`, `EC13-HOLD-01` | `NET`, `RT`, `FRT`, `PROV`, `DOC` | NP-38 | RS-03 | BLOCKED | H-D12, H-EVID |
| VC-R-645 | `BP-§10.2-SA1` | `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` | `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `RT`, `FRT`, `PROV`, `DOC` | NP-16, NP-21, NP-22 | RS-01 | BLOCKED | H-D12, H-DTX, H-PROV, H-CONF, H-EVID |
| VC-R-646 | `BP-§10.2-SA2` | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` | `UNIT`, `INT`, `DB`, `RT`, `FRT`, `PROV`, `DOC` | NP-04, NP-16 | RS-02 | BLOCKED | H-D12, H-PROV, H-EVID |
| VC-R-647 | `BP-§10.2-SB` | `EC13-FAIL-03`, `EC13-HOLD-01` | `NET`, `RT`, `FRT`, `PROV`, `DOC` | NP-38 | RS-03 | BLOCKED | H-D12, H-EVID |
| VC-R-648 | `BP-§11-1` | `EC13-ARC-01` | `UNIT`, `REPO`, `DOC` | — | — | PASS | — |
| VC-R-649 | `BP-§12-1` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT` | NP-27 | RS-07 | PASS | — |
| VC-R-650 | `BP-§12-3` | `EC13-FAQ-01` | `UNIT`, `DB`, `INV`, `RT`, `DOC` | NP-27, NP-40 | RS-07 | PASS | — |
| VC-R-651 | `BP-§13-1` | `EC13-VER-02` | `DB`, `NET`, `RT`, `FRT`, `DOC` | — | RS-01, RS-02, RS-03, RS-04 | PASS | — |

## 14. Final Acceptance Statement

Not executed. To be completed only after the package is locked, implementation is authorized and performed, and Stages 16 to 19 have produced their records. Mission Control decides acceptance. Nothing in this locked checklist is acceptance, demonstration or evidence.

```text
CHECKLIST EXECUTION: NOT STARTED
ROWS DEMONSTRATED: 0 OF 651
D12: HELD (252 ROWS)
DTX: HELD (17 ROWS)
PROVIDER EVIDENCE: NOT ACCEPTED (367 ROWS)
UNVERIFIED — ACCESS REQUIRED: 17 FACTS
```

## Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-07 | Claude Code (MC-19) | Initial Stage 12 draft |
| 1.0-L | 2026-10-07 | Claude Code under SB-P-1.13-MC-21 (Mission Control Stage 13 disposition, record 36) | Stage 13 lock-only transition: status `DRAFT — MISSION CONTROL REVIEW REQUIRED` → `APPROVED — LOCKED`, version 1.0, lock metadata. No obligation, row, mapping, workstream, hold, check, scenario, evidence class or builder instruction changed. Not an implementation authorization |
