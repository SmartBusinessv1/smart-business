# SB-P-1.13 — Independent Stage 7 Security & Permissions Architecture Review

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation  
**Review role:** S7-SP-1 — Security & Permissions Architecture  
**Authority:** `communication/missions/SB-P-1.13/mission-control/14-stage7-security-specialist-instruction.md` and SB-P-1.13-MC-11 / `mission-control/13-stage7-engineering-and-specialist-authorization.md`  
**Canonical repository baseline actually reviewed:** `main@81c7d520a4d226cd9b7bf2165cd2dfcd494d613b`  
**Review type:** Read-only independent specialist review  
**Status:** SUBMITTED TO MISSION CONTROL — NO APPROVAL / IMPLEMENTATION AUTHORITY

## 1. Actor, provider, session and independence statement

**Actual actor/model:** ChatGPT — GPT-5.6 Sol  
**Provider:** OpenAI  
**Session / room:** Team LIPS Smart Business — Security & Permissions Architecture room  
**Specialist role:** Existing Security & Permissions Architecture reviewer

### Prior contribution

This actor/session has substantial prior contribution to **SB-P-1.12** Security & Permissions Architecture review, including Stage 7 and Stage 10 authority/security review artifacts and implementation-readiness review.

This actor/session did **not** author:

- SB-P-1.13 Blueprint Sections 1–19;
- the SB-P-1.13 FCTM;
- the SB-P-1.13 Stage 6 Builder Review;
- the B6 reconciliation;
- FPDR-1 through FPDR-5.

The canonical repository identifies Claude Code as the SB-P-1.13 Stage 2–4 Definition Actor and Stage 6 Builder Review actor.

### Independence assessment

**INDEPENDENCE ESTABLISHED for the appointed specialist purpose.**

Correlated-assumption risk exists because this Security room reviewed the upstream SB-P-1.12 authority design that SB-P-1.13 now consumes. I mitigated that risk by independently re-reading the current canonical SB-P-1.13 Blueprint/FCTM/Stage 6 records and current repository implementation evidence instead of assuming that SB-P-1.12 design acceptance proves SB-P-1.13 readiness.

No prior SB-P-1.13 Sections 1–19 or Stage 6 authorship was found for this actor/session.

## 2. Baseline note

The specialist instruction file itself still names the earlier Stage 7 authorization baseline `dbd8f4c179cba0888afc80c67616cbe4cceabcfc`.

Mission Control activated this review against the later canonical baseline:

`81c7d520a4d226cd9b7bf2165cd2dfcd494d613b`.

I reviewed the later canonical baseline. The governing specialist instruction and MC-11 appointment are present unchanged there. This is treated as a baseline-reference staleness note, not a scope expansion.

## 3. Canonical evidence reviewed

Primary read-only evidence:

- `docs/phase-1-mission-blueprint/active/SB-P-1.13.md` — blob `d9bbc58efe78dc6f597187db161b816c3ca3ec77`;
- `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` — blob `97ddc752dcbbdb6586110a782ef1e24405b6dd22`;
- `communication/missions/SB-P-1.13/claude-code/08-stage6-builder-review-report.md` — blob `c313ed248a9eb301586f27367702889311e5a081`;
- `communication/missions/SB-P-1.13/claude-code/09-b6-reconciliation-report.md` — blob `f3f72fd3e23453e72da555a8f88946ccbe90cdf7`;
- `communication/missions/SB-P-1.13/founder/03-post-stage6-founder-product-decision-record.md` — blob `001de80594cd3b6d4e42d7d802b31dc813ef49c1`;
- locked SB-P-1.12 EIS — `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`, blob `c444f7509477d0e8b997af538440d93bf2ca4d72`;
- locked SB-P-1.12 Blueprint — blob `77d52096c020668311b039721a4de9248ddd460e`;
- current transaction client — `src/integrations/supabase/transactions.ts`, blob `fe12c70255b78693d0c3b9e7c150e0eb52885b15`;
- current transaction creation migration — `supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql`, blob `b79ad8e79f0a13d72ae63ef6a8debe25643ee22d`.

No provider dashboard, Supabase project, production system or runtime environment was accessed.

## 4. Executive security disposition

The SB-P-1.13 documentary design is **security-aligned in principle** with the locked SB-P-1.12 authority architecture:

- authority remains outside the model;
- active business is explicit requested context, not inferred authority;
- permission propagation is through the shared kernel;
- Employee denial is backend-authority dependent;
- confirmation, execution-time revalidation and idempotency consume SB-P-1.12 primitives;
- service-role possession is not authority;
- audit/provenance reuses the shared authority-event foundation;
- no parallel Permission Engine is permitted.

However, **none of those upstream-dependent protections is implementation-proven for SB-P-1.13**.

The principal material Security finding is the transaction write boundary:

> SB-P-1.13's governed create-transaction command must not become a second write path beside the current direct client INSERT path. The locked SB-P-1.12 EIS already requires the transactions family to cut over to kernel-checked command-only writes. DTX acceptance therefore depends on that family cut-over and on the structured transaction surface converging on the same governed command boundary.

Accordingly:

- the documentary architecture does not need a Founder/Product Truth change;
- the affected Stage 7 findings must remain dependency-held until the exact SB-P-1.12 consumption conditions are evidenced;
- all 17 DTX rows must be held from acceptance until the transactions family has one governed command path and the direct client write path is removed from effective access;
- Employee denial, cross-business isolation, revalidation, confirmation/idempotency, service-role and audit claims likewise remain held where they depend on D12.

## 5. Findings

### SEC-13-S7-01 — D12 is a hard consumption gate, not documentary proof

**Severity:** HIGH  
**Finding type:** Dependency / evidence hold  
**Stage 7 disposition:** HOLD affected findings pending upstream implementation evidence

#### Evidence

SB-P-1.13 Blueprint §12.1 correctly states:

- SB-P-1.12 specification is available;
- implementation is not complete;
- 252 `IN SCOPE` SB-P-1.13 rows carry `D12`;
- none is claimed working until independently evidenced;
- consumption follows SB-P-1.12 EIS §19.5 / EIS-DEP-01.

The locked SB-P-1.12 EIS requires, for a specific capability consumed by SB-P-1.13:

- EIS locked;
- WS-A1 / WS-A2 implemented and verified;
- WS-D implemented and verified for confirmation/idempotency consumed;
- WS-E implemented and verified for authority-event/denial behaviour consumed;
- each touched table/data family to complete WS-A3 enforcement cut-over and isolation tests;
- Mission Control acceptance of the dependency evidence.

SB-P-1.12 implementation authorization is not proven complete at this baseline.

#### Security consequence

A Stage 7 engineering finding must not convert "specified correctly" into "feasible and ready to rely on at runtime" without the EIS-DEP-01 conditions.

#### Affected FCTM rows

**All 252 `IN SCOPE` rows carrying `D12`.**

High-risk examples include:

- `24-§10-1`, `24-§10-4`, `24-§10-8`, `24-§10-11`;
- `24-§25-2`;
- `10-§15-4`, `10-§15-6`, `10-§19-1`, `10-§19-2`, `10-§23-5`, `10-§23-8`, `10-§23-10`;
- `12-§21-8`;
- `22-§23-2`, `22-§29-3`, `22-§29-7`, `22-§29-8`;
- `BP-§10.2-SA1`, `BP-§10.2-SA2`, `BP-§10.2-SB`;
- all delegated Contract 21 / Contract 22 authority rows marked `D12`.

#### Required Stage 7 treatment

Engineering may assess documentary buildability, but any finding whose correctness depends on actual kernel/RLS/confirmation/audit behavior must remain **held pending D12 evidence**.

No Product Truth change is required.

---

### SEC-13-S7-02 — Direct transaction INSERT cannot coexist as an authority-bypassing second write path

**Severity:** CRITICAL  
**Finding type:** Security architecture / cut-over requirement  
**Stage 7 disposition:** HOLD all DTX acceptance until single-path cut-over is evidenced

#### Evidence

Current canonical implementation:

- `src/integrations/supabase/transactions.ts` creates a transaction with direct client `.from("transactions").insert(...)`;
- `authenticated` has direct `INSERT` on `public.transactions`;
- RLS allows Owner insert through `businesses.owner_id = auth.uid()`.

SB-P-1.13 Blueprint §8.5 says:

- SB-P-1.13 owns an additive governed create-transaction command;
- consequential execution uses clarification → preview → confirmation binding → execution-time permission revalidation → deterministic command → stored-state confirmation → audit/idempotency.

The locked SB-P-1.12 EIS is more specific about the data-family cut-over:

- commands are the only write boundary for protected tables;
- direct client `INSERT/UPDATE/DELETE` on `transactions` is replaced;
- the transactions family moves to kernel RLS / command enforcement;
- Employee transaction submission uses `create_transaction` through a narrow executor;
- no two authority paths are to remain live for one family.

Stage 6 B6-05 correctly noticed the two-path risk, but its suggestion that removal of direct INSERT might require a fresh authority decision is no longer the controlling security interpretation: the locked SB-P-1.12 EIS already requires replacement of direct transaction DML as part of the authority-family cut-over.

#### Security consequence

If the conversational governed command is added while the structured page retains effective direct INSERT:

- confirmation binding can be bypassed through the structured path;
- execution-time revalidation semantics differ by surface;
- Employee/Manager capability boundaries can differ by path;
- audit/provenance differs by path;
- idempotency guarantees differ by path;
- "one command path" is false;
- model/tool safety would be stronger than ordinary UI safety, creating an authority inconsistency.

#### Affected FCTM rows

All 17 `DTX` rows:

1. `24-§21-2`
2. `24-§31-13`
3. `9-§17-1`
4. `10-§11-2`
5. `10-§13-1`
6. `10-§13-2`
7. `10-§23-1`
8. `10-§23-9`
9. `12-§4-1`
10. `12-§21-1`
11. `12-§21-9`
12. `22-§29-8`
13. `17-§5-7`
14. `BP-§6.2-1`
15. `BP-§6.4-8`
16. `BP-§10.2-W9`
17. `BP-§10.2-SA1`

Related delegated upstream rows include `21-§7`, `21-§17`, `22-§13-4`, `22-§15`, `22-§6-4`.

#### Required Stage 7 treatment

Hold DTX acceptance until evidence proves:

1. the transactions family has completed SB-P-1.12 WS-A3 cut-over;
2. direct `authenticated` DML is no longer an effective alternate write path;
3. structured Transactions UI and Conversation/Voice execution converge on the same kernel-checked domain command boundary;
4. command execution uses EIS-CNF-01 / -02 / -04;
5. role-matrix and cross-business tests cover Owner, Manager and Employee;
6. audit/provenance and idempotency are equivalent across entry surfaces.

No Founder/Product Truth gate is required to enforce the locked one-path security design.

---

### SEC-13-S7-03 — Active-business context and cross-business isolation are correctly specified but not yet demonstrable

**Severity:** HIGH  
**Finding type:** Dependency / verification hold  
**Stage 7 disposition:** HOLD runtime/isolation acceptance

#### Evidence

SB-P-1.13 Blueprint §12.1 now correctly states that every business-scoped Conversation/AI path consumes explicit active-business context and cannot use the current owner-only `maybeSingle()` business inference.

SB-P-1.12 EIS:

- active business is requested context, never trusted;
- the kernel verifies membership in the requested business;
- client-supplied `business_id` is never authority alone;
- no path infers "the one business this person owns";
- RLS is kernel-based per business-scoped table family;
- Conversation/AI context must carry actor, business and channel into the kernel before business context is read or written.

Current application implementation still reflects the pre-kernel owner-only model.

#### Security consequence

Conversation memory/context isolation cannot be accepted merely because the conversation orchestrator passes a business ID. The database/server enforcement underneath every business data read must have completed its corresponding authority cut-over.

#### Affected FCTM rows

Primary SB-P-1.13 rows:

- `24-§25-2`;
- `10-§15-4`;
- `10-§19-1`;
- `10-§23-10`;
- `22-§23-2`;
- `22-§29-3`;
- business-scoped B6-01 rows carrying `D12`, including `BP-§10.2-W1`, `BP-§10.2-W3`, `BP-§10.2-E1`, `BP-§10.2-SB`.

Delegated upstream rows:

- `21-§6-1`, `21-§6-2`, `21-§6-3`;
- `21-§15-3`;
- `21-§24-2`;
- `22-§6-3`, `22-§6-5`, `22-§6-9`.

#### Required Stage 7 treatment

Hold acceptance until the relevant touched families have completed WS-A3 cut-over and isolation tests and Mission Control has accepted D12 consumption evidence.

No new security architecture is required inside SB-P-1.13.

---

### SEC-13-S7-04 — Employee denial must be enforced before protected context reaches the model

**Severity:** HIGH  
**Finding type:** Security verification hold  
**Stage 7 disposition:** HOLD Employee-denial acceptance

#### Evidence

Blueprint §8.4 is security-correct:

- verified principal/business/role/capability/entitlement/channel/object scope come from SB-P-1.12 for every turn and tool proposal;
- the model never chooses authority;
- protected data is withheld from model context unless authorized;
- prompt injection cannot widen access.

The current repository does not yet provide the SB-P-1.12 Employee authority model as implemented evidence.

#### Security consequence

"Model refuses to answer" is not sufficient. Owner intelligence must be unavailable at the data-retrieval/tool boundary before model context construction.

A denial test that sends Owner profit to the model and asks it not to reveal it would fail the architecture even if the final response is polite.

#### Affected FCTM rows

- `24-§10-8`;
- `24-§31-4`;
- `10-§19-2`;
- `10-§23-5`;
- `12-§20-6`;
- `12-§21-8`;
- `BP-§10.2-SA2`;
- related `24-§10-4`, `24-§31-3`;
- delegated `21-§9-1`, `21-§24-6`.

#### Required Stage 7 treatment

Hold until role/capability projection and protected-context retrieval are testable under the implemented kernel/RLS model.

Required verification must prove:

- Employee cannot retrieve Owner-only financial intelligence;
- denied fields are not present in model/tool context;
- natural language, voice, channel or prompt injection cannot alter the result;
- denial does not leak protected values through error text, aggregates or tool metadata.

---

### SEC-13-S7-05 — Execution-time revalidation, confirmation binding and idempotency are correctly consumed, but remain upstream-gated

**Severity:** HIGH  
**Finding type:** Dependency / concurrency evidence hold  
**Stage 7 disposition:** HOLD consequential-action acceptance

#### Evidence

SB-P-1.13 §8.5 correctly consumes:

- EIS-CNF-01 confirmation binding;
- EIS-CNF-02 execution-time serialization/revalidation;
- EIS-CNF-04 shared idempotency.

The locked EIS defines:

- actor/business/action/target/fingerprint-bound confirmation;
- atomic single-use consumption;
- execution-time kernel re-evaluation under deterministic locks;
- authority revocation serialized against in-flight protected writes;
- stored outcome replay rather than duplicate re-execution.

#### Affected FCTM rows

Revalidation/confirmation examples:

- `24-§21-9`;
- `24-§21-10`;
- `10-§7-2`, `10-§7-3`, `10-§7-4`, `10-§7-5`;
- `10-§15-6`;
- `10-§17-8`, `10-§17-9`;
- `10-§18-6`;
- `10-§23-8`;
- `22-§29-7`;
- `24-§31-7`.

Idempotency examples:

- `24-§31-13`;
- `10-§23-9`;
- `12-§21-9`;
- `22-§29-8`;
- `BP-§6.2-1`.

Delegated upstream rows include `21-§17`, `22-§13-3`, `22-§13-4`, `22-§15`.

#### Required Stage 7 treatment

Hold runtime acceptance until WS-D is implemented/verified for the exact command family.

Verification must include:

- permission revoked after preview but before confirm;
- role/grant change racing commit;
- two concurrent confirmations of one binding;
- retry after committed-but-response-lost outcome;
- same key with different payload fingerprint;
- voice/text retry convergence on one stored outcome.

No separate SB-P-1.13 confirmation or idempotency store may be introduced.

---

### SEC-13-S7-06 — Service-role paths must inherit the SB-P-1.12 privileged-operation contract

**Severity:** HIGH  
**Finding type:** Dependency / privileged-path hold  
**Stage 7 disposition:** HOLD any privileged conversational tool path until handler binding is evidenced

#### Evidence

SB-P-1.12 EIS-ISO-04 requires every privileged read/write/claim/lease/bookkeeping operation to bind:

- verified principal;
- business;
- action;
- object set;
- current authorization decision.

`service_role` bypasses RLS and is explicitly not a principal.

SB-P-1.13 Blueprint does not create a parallel service-role authority scheme, which is correct.

#### Affected FCTM rows

Primary delegated authority rows:

- `22-§6-4`;
- `22-§6-7`;
- `21-§6-6`;
- `21-§15-5`.

SB-P-1.13 surfaces that rely on tool/function execution include:

- `24-§11-8`;
- `24-§31-7`;
- `24-§20-8`;
- `BP-§6.2-1`;
- `BP-§6.4-6`;
- `BP-§10.2-W6`.

#### Required Stage 7 treatment

Any Stage 7 finding involving a privileged tool/server handler must remain held until:

- the source-complete privileged-handler inventory exists;
- every admin/service-role query is business/object scoped;
- caller identity/business are not taken from untrusted tool arguments;
- consequential protected operations revalidate under EIS-CNF-02;
- the handler has no unbound fallback path.

---

### SEC-13-S7-07 — Audit/provenance design is directionally correct; durability remains D12-dependent

**Severity:** MEDIUM-HIGH  
**Finding type:** Dependency / audit evidence hold  
**Stage 7 disposition:** HOLD audit-completeness claims

#### Evidence

Blueprint §8.6 requires each consequential Conversation/Voice action to record:

- initiator;
- business and role context;
- channel/modality;
- evidence used;
- interpretation;
- clarification/confirmation;
- executing command;
- resulting record;
- retry/correction state.

That is appropriately layered on SB-P-1.12 authority-event/audit foundations.

The locked EIS additionally requires durable denial audit and non-cascading authority/history references.

#### Affected FCTM rows

- `24-§11-8`;
- `24-§24-1` through `24-§24-9`;
- `24-§28-12`;
- `10-§6-12`;
- `10-§13-10`;
- `10-§16-6`;
- `12-§11-8`;
- `12-§16-7`;
- `22-§7-8`;
- `22-§29-12`;
- `BP-§6.4-10`;
- `BP-§10.2-W10`;
- delegated `22-§14` and `21-§19`.

#### Required Stage 7 treatment

Hold audit-completeness acceptance until WS-E and the relevant transaction/business family cut-over are implemented and verified.

Conversation provenance may add the SB-P-1.13 interpretation/clarification layer, but it must link to the same authoritative business action/audit outcome rather than create a separate AI audit truth.

---

### SEC-13-S7-08 — Permission propagation across text/voice/AI is structurally sound, but channel parity must not be inferred from orchestration reuse alone

**Severity:** MEDIUM  
**Finding type:** Verification requirement  
**Stage 7 disposition:** FOLLOW-UP / HOLD runtime parity evidence

#### Evidence

Blueprint correctly requires the same permission context for Conversation, AI tool execution and Basic Voice. EIS-KER-06 defines channel as an input, not a source of authority.

#### Affected FCTM rows

Representative rows:

- `24-§7-5`;
- `24-§27-7`;
- `9-§17-9`;
- `10-§6-5`;
- `10-§11-1`;
- `10-§13-8`;
- `10-§19-3`;
- `10-§23-2`;
- `12-§11-4`;
- `22-§7-2`;
- `22-§29-2`.

#### Required Stage 7 treatment

Engineering should require the same backend authorization decision for equivalent text/voice/tool intents and must test denial parity across channels. Channel-specific UI behavior may differ; authority outcome may not.

---

## 6. Direct transaction path versus governed command — final Security conclusion

The canonical source set is not ambiguous on the secure target state.

- FPDR-1 gives SB-P-1.13 ownership of the additive governed create-transaction command.
- "Additive" does not authorize a permanent weaker direct-write bypass.
- Build Plan / Blueprint requires one governed action path.
- Locked SB-P-1.12 EIS-ISO-02 requires protected transaction writes to converge on command functions and removes direct client DML during family cut-over.
- EIS-DEP-01 prevents SB-P-1.13 from using the family until that cut-over and isolation evidence is accepted.

Therefore:

> The governed create-transaction command may be added as a new domain capability, but it must become the single effective protected transaction-write boundary for all relevant entry surfaces when the transaction family is activated under the SB-P-1.12 authority model.

A Stage 7 plan that intentionally leaves the structured direct INSERT path effective after governed-command activation would be a **material security conflict with the locked upstream design** and should trigger a finding-scoped stop.

## 7. Stage 7 finding-hold register

The following categories **must be held** rather than accepted as runtime-ready:

| Category | Hold basis |
|---|---|
| All 252 D12 rows where the finding depends on implemented authority behavior | SB-P-1.12 EIS-DEP-01 evidence not yet established for SB-P-1.13 |
| All 17 DTX rows | Transaction family command-only cut-over + confirmation/revalidation/idempotency evidence required |
| Employee Owner-intelligence denial scenarios | Kernel/RLS/protected-context filtering not implemented/proven |
| Cross-business Conversation/AI context isolation | Relevant table/data-family WS-A3 cut-over and isolation tests required |
| Execution-time revalidation / stale confirmation | WS-D implementation/concurrency evidence required |
| Service-role conversational tool paths | EIS-ISO-04 handler-binding evidence required |
| Audit/provenance completeness and denial durability | WS-E plus relevant domain-family implementation evidence required |

These are dependency/evidence holds, not scope removals. Rows remain `IN SCOPE`.

## 8. Trigger screen

| Trigger | Result |
|---|---|
| **T2 — approved-source conflict** | **NOT TRIGGERED.** SB-P-1.13 B6-01 reconciliation now aligns D12/business context with the locked SB-P-1.12 EIS. |
| **T3 — new Product Truth decision** | **NOT TRIGGERED.** FPDR-5 resolves the Stage 6 credit boundary; this Security review needs no new Founder product choice. |
| **T6 — material derived constraint** | **NOT TRIGGERED as a new constraint.** Single effective write path, explicit active business, kernel authority, confirmation binding and revalidation already exist in locked upstream sources. |
| **T7 — omission/deferral/pull-forward/simplification/reclassification** | **NOT TRIGGERED by the current canonical Blueprint/FCTM.** **Finding-scoped T7/T8 screen becomes active if Stage 7 proposes retaining direct transaction INSERT as an accepted permanent parallel authority path or treats D12 as optional.** |
| **T8 — Product Truth conflict / infeasibility / material security conflict** | **NOT TRIGGERED by the canonical source design.** No infeasibility identified. A future Stage 7 finding that accepts dual transaction write paths after command activation would create a material security conflict and must be stopped/escalated rather than accepted. |

## 9. Independence-sensitive conclusion

This review does **not** certify SB-P-1.12 implementation or SB-P-1.13 runtime security.

It confirms only that:

1. the SB-P-1.13 documentary authority model is aligned with the locked upstream authority design after B6-01 reconciliation;
2. the direct transaction path requires a strict single-path cut-over before DTX acceptance;
3. the named D12-dependent Stage 7 findings must remain held until implementation/evidence gates are satisfied;
4. no new Founder/Product Truth decision is required on the evidence reviewed.

No Blueprint, FCTM, Product Truth, code, SQL, provider or production state was modified by this review.

**INDEPENDENT STAGE 7 SECURITY & PERMISSIONS REVIEW SUBMITTED — FINDINGS FOR MISSION CONTROL ONLY**
