# SB-P-1.15 — S7-PAR Checkpoint 1: Independent Scheduler Foundation Review

**Status:** INDEPENDENT DOCUMENTARY REVIEW — §8.3 ONLY; S7-PAR OVERALL INCOMPLETE — NOT FOR MERGE.  
**Actor:** Continuing Independent Engineering Review conversation, GPT-6 / OpenAI.  
**Authority:** MC-39; Source 18 Stage 7; MC-16, MC-36, MC-37, MC-38.  
**Protected main at source lock:** `5196d31ce0ec6072bf3fae7573ffd4ef89667300`.  
**Challenged Engineering Review:** PR #870, OPEN/DRAFT at `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`.  
**Coverage:** Exactly 12 canonical `IN SCOPE` FCTM IDs, distinct from remaining 682 IDs and future master.  
**Evidence warning:** No job, migration, fault injection, provider dispatch, financial mutation or live-production test was executed in this review.

## 1. Reviewer and evidence independence

This GPT-6/OpenAI session continues the dedicated Independent Engineering Review conversation, not the GPT-6/OpenAI S7-SP-6 Notification Foundation conversation. It has not authored or materially contributed to SB-P-1.15 Stages 2–7, FCTM, Blueprint or PR #870, and has not served as S7-SP-1 through SP-6. Conversation-level identity is not cryptographic proof; shared OpenAI provider and source corpus create correlated-assumption risk.

Product Truth (PT) is authoritative; PR #870 §8.3/§19/§20.6 are challenged draft design (DD). Specialist reports and Stage 6 are documentary evidence only (SR). Direct checked code (RC) shows `src/server.ts` has a fetch handler but no scheduled handler, and the checked business migration has no timezone field; this is not proof of absent external/live infrastructure. Upstream EIS artifacts are locked specifications, not executed software. All individual findings below have **PT + DD and relevant RC/SR evidence**, with **live/e2e/runtime outcome UNVERIFIED — ACCESS REQUIRED**.

## 2. Immutable source ledger

| Evidence | Blob / revision |
| --- | --- |
| MC-39 (`communication/missions/SB-P-1.15/mission-control/40-stage7-par-nine-artifact-execution-publication-authority.md`) | `ad8341e4bfee00fa63f42c7a8655445f6f5486e3` |
| Source 18 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`) | `0945bda60a93c99909c3b7a247d5427ebe256011` |
| Canonical FCTM (`communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md`) | `65eeaf8d31b81595b971c22895615a096555f84f` |
| Blueprint §8.3/§19/§20.6 (PR #870) | `da1628804379cc58764a9adaa2819ce19884ab7a` |
| PR #870 Engineering Review report | `5d3a23696b8a9c13e7a9d05e654463f56e204721` |
| C22 §18, Scheduler / Background Job Foundation | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| C24 §5, Central Orchestration Flow | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| C4 §§2, 7, 8, 12, 13, Daily Intelligence | `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd` |
| C11, Reminders and Delegated Automation | `e802745a93c3bacaebba5099aacfadbe52212bc8` |
| C21, Roles / Isolation | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| FPDR-01 / FPDR-02 / FPDR-03 | `0e0928fec1215ff91fa82386663d6a8f17f43bd2` / `373a31dfff67b11c9d342abe21554b777ccb89b8` / `2382846bc802df25f3e581d58648b6492f3316eb` |
| Stage 6 Builder Review | `ac92759f9d02b1344c25840b2e8b26b9f121a50b` |
| S7-SP-1 / SP-2 / SP-3 | `43b3b7a7a49b6acd3b8aaf3e75b2e0e081bcd6c2` / `bd5041b6296e2e9723bd6424f8cd4f4892728580` / `34148818d6b8293b59a830f43c392aecbc6f0451` |
| S7-SP-4 / SP-5 / SP-6 | `e0c512c3a4292742ca4694b719cd69db3315a6bf` / `6561110273b07644181a67a4b8d0085cad1f0883` / `d1096aae3f0d92111e78005d12714565ed58d257` |
| Locked EIS SB-P-1.12 / 1.13 / 1.14 | `c444f7509477d0e8b997af538440d93bf2ca4d72` / `9a1e723d4874011b6870a680f2a2080154537c30` / `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` |
| Directly read `src/server.ts`, founding businesses migration, generated types | `20500c7f347db7dd59ff59e295be226aa317757f` / `982ce1509589f7c6d7847ceddd7db36e88e203d0` / `ac1d0a42ecdfd7606c0d8482a730e6fd1efb0a09` |

## 3. Independent review criterion

Independent **CORRECTION REQUIRED** signifies design-specification incompleteness with a credible harmful failure path; it is not a claim of demonstrated production vulnerability. **POLICY / DEPENDENCY HOLD** reserves approved scope pending a necessary legal/Founder boundary. **DIRECTION ACCEPTED / EVIDENCE HOLD** is not PASS: the integration shape is defensible but cannot claim demonstrated maturity. Severity is independently justified by the consequence described for the particular requirement, not copied from the draft's blanket High labels.

## 4. Per-ID substantive engineering assessments

### 22-§18-1 — Daily Intelligence scheduling

- **Canonical FCTM:** `22-§18-1`, `C22@61e1bb91`, pointer `§18 b1: Daily Intelligence`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; D14; DSCH`.
- **Independent Product Truth obligation:** Business-scoped Daily Intelligence must materialize for the approved 07:00 morning, 10:30 pulse and 22:00 closing business-local slots; a briefing is advice and factual clarity, not a consequential automated command.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-D13`, `H-D14`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'Daily Intelligence'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, SB-P-1.14 Business Memory exist. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The §8.3 common scheduler is architecturally plausible, but it lacks a durable named-slot key and three distinct timestamps (scheduled, generated, source-as-of). Identifying work by attempt time risks duplicates and false freshness after delays or timezone moves.
- **Independent severity and consequence:** **HIGH**. An Owner could see a stale or foreign-business closing summary as current, creating harmful financial confidence.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Use a business + local-date + named-slot logical identity, immutable original slot provenance, authorized reader scope, validity marker and source cutoff. Apply FPDR-03 latest-valid *native* display without defining an unauthorized expiry, skip rule or outbound catch-up; DC-03 is still unresolved.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Delay the 10:30 job, crash and retry it, then change business timezone. Verify one slot result with original slot, actual generation time and source-as-of, and an honest partial/unavailable state; a second tenant must never see the result.
- **Specialist reconciliation references:** SP2-01/05/06/07/08; AI15-S7-01/05; NTF15-06; SEC15-S7-03. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** T6 resolved FPDR-03; DC-03 remains; no T7/T8.

### 22-§18-2 — Reminder due-state and delivery separation

- **Canonical FCTM:** `22-§18-2`, `C22@61e1bb91`, pointer `§18 b2: reminders`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`.
- **Independent Product Truth obligation:** Authorized reminders must be scheduled and made visible as native due state, even if provider transport is unavailable; they may not imply an out-of-app message or execute the reminded business action.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'reminders'. Blocked until SB-P-1.12 kernel exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.3 groups reminder jobs without a specification boundary between a due occurrence, native presentation, notification request and channel delivery. A successful scheduler attempt is not proof that a merchant was notified.
- **Independent severity and consequence:** **HIGH**. Confusing due-state with sent-state deceives users and may expose reminders to revoked Owners or unauthorized staff.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Preserve stable recurrence/occurrence identity and per-business current-viewer eligibility. Native presentation is independent of future outbound delivery; under FPDR-01, WhatsApp, email, push and SMS are not enabled by an otherwise successful scheduling job.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Disable the provider and worker, query the native due surface as current Owner, then as revoked Owner and unrelated staff. Due state remains truthful for the first viewer; the latter two get no access; no outbound request or duplicate occurrence is created on retry.
- **Specialist reconciliation references:** SP2-04/07; SEC15-S7-03/05; NTF15-01/03/05. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No new trigger; FDB-2 native-only, FDB-1(d2) unassigned.

### 22-§18-3 — Safe retries following ambiguous downstream commits

- **Canonical FCTM:** `22-§18-3`, `C22@61e1bb91`, pointer `§18 b3: safe retries`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`.
- **Independent Product Truth obligation:** Scheduled maintenance and authorized actions need safe retries across worker failure, including a crash after the domain effect was committed but before completion was acknowledged.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'safe retries'. Blocked until SB-P-1.12 kernel exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft feasibility relies on generic retry/isolation wording rather than a durable link between logical occurrence, worker attempt, fenced lease and exact downstream effect. Worker exactly-once execution cannot be assumed.
- **Independent severity and consequence:** **HIGH**. An ambiguous retry can double-post a governed financial command or create duplicate merchant-visible notifications.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Model one stable logical work ID, individual attempt IDs, atomic claim/lease and fencing, and a stable downstream idempotency key. After unknown commit outcome enter RECONCILE and query authoritative effect state before reattempting. Financial effects remain only under DTX/PQ-2.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Crash after a downstream effect commit, reclaim with worker B, resume stale worker A. Assert one downstream effect, distinct attempt log entries, fencing rejection, explicit unknown-outcome recovery and no new financial command ID.
- **Specialist reconciliation references:** SP2-02/03; FIN15-S7-01/02; MIG15-S7-04; NTF15-04/08. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No T8: engineering correction and D12/DTX/DSCH holds.

### 22-§18-4 — Retention and cleanup policy safety

- **Canonical FCTM:** `22-§18-4`, `C22@61e1bb91`, pointer `§18 b4: retention/cleanup`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `DSCH; D14`.
- **Independent Product Truth obligation:** Scheduler foundation must accommodate lawful, separately authorized cleanup/retention maintenance without granting itself authority to erase financial, audit, security or personal identity evidence.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D14`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'retention/cleanup'. Blocked until SB-P-1.14 Business Memory exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **POLICY / DEPENDENCY HOLD**. §8.3 says 'retention/cleanup' but specifies no object class, legal/policy basis, hold check, audit tombstone or restore reconciliation. The source authorizes a capability, not a deletion deadline; U-5 remains unresolved.
- **Independent severity and consequence:** **HIGH**. Destructive cleanup with guessed 90-day/cancellation rules could destroy legally retained records or erase audit attribution, while unchecked indefinite retention threatens privacy.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Allow typed reversible housekeeping where safe, but place irreversible disposal behind an approved class-specific retention/disposition policy, active legal/dispute holds and restoration-proof boundaries. Do not select a retention period or rewrite legacy correction notification statuses.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Stage deletion-eligible, retention-mandated, disputed and unknown-policy records; only the genuinely eligible class may undergo an auditable operation. Failed restore tests must detect reappearance of erased material. Unknown policy denies deletion.
- **Specialist reconciliation references:** SP2-02/07 safeguards; MIG15-S7-05/06; SEC15-S7-02/03. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** U-5 remains open on its canonical route; T3/T6 only if a new material decision is proven necessary; not T8.

### 22-§18-5 — Authorized reconciliation and later-system sync

- **Canonical FCTM:** `22-§18-5`, `C22@61e1bb91`, pointer `§18 b5: sync/reconciliation`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `DSCH; D16`.
- **Independent Product Truth obligation:** Common infrastructure supports source-scoped synchronization/reconciliation jobs but must not manufacture SB-P-1.16 customer-credit maturity or overwrite canonical Ledger truth.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`FOLLOW-UP` / H**; original holds `H-SCHED`, `H-LATER`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'sync/reconciliation'. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **DIRECTION ACCEPTED / EVIDENCE HOLD**. The draft FOLLOW-UP appropriately avoids a runtime PASS. The shared-job direction is acceptable only if sync ownership, source version, checkpoint and conflict handling are specified, rather than treating a batch import as an authoritative financial command.
- **Independent severity and consequence:** **MEDIUM**. Duplicates or out-of-order updates could silently corrupt financial evidence or present entry-level credit records as reconciled balances.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Retain a typed business-bound reconcile interface with idempotent source identifiers, explicit version/watermark and truthful conflicts. For financial mutations hand off solely through a currently authorized governed command. Keep D16 authoritative balance work in its assigned mission.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Replay identical and out-of-order external records, then supply a foreign-business object. Assert one source record per identity, conflict instead of silent overwrite, no foreign-read or balance claim, and no direct financial table write.
- **Specialist reconciliation references:** SP2-02/07; FIN15-S7-01/04/05; MIG15-S7-04. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No T7 reassignment: later downstream source maturity is not an excuse to omit this in-scope scheduler obligation.

### 22-§18-6 — Other deterministic already-authorized jobs

- **Canonical FCTM:** `22-§18-6`, `C22@61e1bb91`, pointer `§18 b6: other deterministic already-authorized jobs`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`.
- **Independent Product Truth obligation:** Background workers may execute *other* deterministic jobs only when exact operations and business scopes were already authorized. The word 'other' is not blanket permission to dispatch arbitrary code or new business commands.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'other deterministic already-authorized jobs'. Blocked until SB-P-1.12 kernel exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.3 provides a broad execution category without a default-deny registry of job kinds, effect classes, trusted provenance and target scope. Determinism alone cannot establish authorization.
- **Independent severity and consequence:** **HIGH**. A crafted job payload that chooses its own handler or business ID may exploit privileged worker credentials to mutate another merchant's data.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Use a versioned allowlist of typed job handlers; bind immutable tenant, grantor or maintenance provenance, allowed objects, limits and effect class. Unknown type, cross-business identifier or new command type must fail closed.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Attempt unknown handler, foreign tenant override and write instruction masquerading as read-only maintenance. All three deny without executing; a correctly bound maintenance job runs only within its domain.
- **Specialist reconciliation references:** SP2-04/07; SEC15-S7-02/03; MIG15-S7-03. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No product scope addition authorized; any proposed new consequential job type must undergo T3/T7 screening.

### 22-§18-7 — No background creation of human or merchant authority

- **Canonical FCTM:** `22-§18-7`, `C22@61e1bb91`, pointer `§18 p2: A background job may execute maintenance/authorized actions but cannot create new human/busines…`, kind `NEG`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`.
- **Independent Product Truth obligation:** The scheduled worker can perform maintenance and currently authorized acts but cannot grant roles, create ownership, invent permissions or derive authority from a service-role token or model-generated text.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §10.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-SCHED`, `H-SEC`, `H-PRIV`, `H-IDEM`; original cited specialists SP-1, SP-2. Original draft rationale: Must-not 'A background job may execute maintenance/authorized actions but cannot create n…': enforce below the user interface and prove with a negative test. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The original NEG finding is sound as a principle but cannot be proven by a front-end prohibition. The draft lacks binding of trusted grantor, business, object set and current grant version at privileged reads/effects; historical approval at enqueue is insufficient.
- **Independent severity and consequence:** **HIGH**. Revoked or transferred business authority could persist through queued work and leak Owner intelligence or initiate an unauthorized mutation.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Require trusted persisted actor provenance, current effective rights, target/limit checks, delegation status/version and a scoped worker interface. Distinguish platform maintenance from human-delegated action; guard sensitive calls even if server credentials bypass RLS.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Enqueue a valid standing rule, then revoke the grant, transfer ownership, alter a payload business ID and resume after lease expiry. All unauthorized continuations deny; job scheduling never creates a membership or permission.
- **Specialist reconciliation references:** SP2-04/07; SEC15-S7-02/03; FIN15-S7-03/07. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No T8; DC-06 permission granularity remains independently governed.

### 22-§18-8 — Idempotency of logical work and effects

- **Canonical FCTM:** `22-§18-8`, `C22@61e1bb91`, pointer `§18 b7: idempotent where needed`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`.
- **Independent Product Truth obligation:** Repeated invocation of a potentially consequential scheduler operation must not repeat the same underlying reminder, briefing, notification request or governed financial effect.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'idempotent where needed'. Blocked until SB-P-1.12 kernel exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The word 'idempotent' has inadequate effect-specific design. Per-attempt worker IDs are necessarily different, so they cannot dedupe the stable merchant obligation; a lease does not bridge a committed downstream effect and lost completion acknowledgement.
- **Independent severity and consequence:** **HIGH**. A failed scheduler acknowledgement can create repeated financial state changes or misleading duplicate alerts.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Derive idempotency from logical occurrence and authorized effect identity, maintain separate attempt/claim identities and enforce dedupe at the downstream domain boundary. Preserve explicit unknown/reconciliation outcomes and restore-safe keys.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Execute two concurrent claims for one logical reminder and force the winner to crash after committing the native event. Exactly one event and one logical occurrence must survive, with distinct attempts, stale fencing failure and no financial write.
- **Specialist reconciliation references:** SP2-02/03; FIN15-S7-02; MIG15-S7-04; NTF15-04/08. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No T8; retain H-IDEM, H-SCHED and migration/DTX holds.

### 22-§18-9 — Observable outcomes without sensitive-data leakage

- **Canonical FCTM:** `22-§18-9`, `C22@61e1bb91`, pointer `§18 b8: observable`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`.
- **Independent Product Truth obligation:** Operators need observable claimed/retried/completed/reconciled job states and failure signals, but no merchant may view another business's scheduler history; internal logs should not expose full sensitive payloads.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'observable'. Blocked until SB-P-1.12 kernel exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft says observable without defining what an honest status proves. Worker HTTP success need not equal successful financial command, approved notification delivery or successful Daily Intelligence generation.
- **Independent severity and consequence:** **MEDIUM**. False success hides incomplete work and hinders incident response; unrestricted logs can reveal customer, financial or HR data.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Store business-scoped correlation, logical occurrence, attempt, lease/fence, bounded failure codes, actual domain outcome and source/generation timestamps. Minimize personal payloads and separate operator diagnostics from merchant status.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Crash before claim and after downstream success in separate cases; statuses must differ and permit recovery. Business B must see zero Business A run records; no 'delivered' status appears without provider evidence; diagnostics contain no raw secrets/customer content.
- **Specialist reconciliation references:** SP2-02/03/07; SEC15-S7-03; NTF15-01/07/08. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No new Source 18 trigger; legal/privacy observability evidence stays held.

### 22-§18-10 — Narrow retriability and tenant failure containment

- **Canonical FCTM:** `22-§18-10`, `C22@61e1bb91`, pointer `§18 b9: narrowly retryable`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`.
- **Independent Product Truth obligation:** Retries must be limited to safely repeatable transient failures. Revoked grants, invalid jobs and unknown downstream outcomes may not enter an unconditional replay loop; one business's poisoned job must not block another's work.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-MIG`; original cited specialists SP-1, SP-2, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'narrowly retryable'. Blocked until SB-P-1.12 kernel exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. A numeric retry cap cannot distinguish whether a protected command already succeeded or the principal lost authority. The draft does not give error-class policy, fenced reclaim or dead-letter/reconcile contracts.
- **Independent severity and consequence:** **HIGH**. Blind retries can repeatedly notify merchants, strain provider systems, repeat writes or starve unrelated businesses.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Define transient/terminal/unknown result classes, bounded backoff, tenant-scoped dead-letter, lease refresh and current-authorization checks. Reconcile ambiguous commit before new effect; terminal authorization failure must never retry as though transient.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Inject a rate-limit, invalid payload, revoked rule and committed-but-unacknowledged action. Only first safely retries; next two stop; last reconciles one effect. A failing Business A queue does not delay Business B.
- **Specialist reconciliation references:** SP2-02/03/04/07; FIN15-S7-02; NTF15-08. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No T8; DSCH/D12/DTX and retry proof remain held.

### 22-§18-11 — Effective current authority on consequential execution

- **Canonical FCTM:** `22-§18-11`, `C22@61e1bb91`, pointer `§18 b10: permission/authority-aware at execution where consequential`, kind `OBL`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH; DTX`.
- **Independent Product Truth obligation:** Every consequential scheduled action must be authorized for its exact business, actor, target, quantity/limit and permission state at execution; financial mutations occur through the unique governed transactions-family command.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D12`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-FIN`, `H-MIG`; original cited specialists SP-1, SP-2, SP-3, SP-5. Original draft rationale: Feasible within the scheduler foundation: 'permission/authority-aware at execution where consequential'. Blocked until SB-P-1.12 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.3 acknowledges authority but does not close the claim-to-commit revocation race or service-role path. 'Authorized at creation' is not equivalent to 'authorized now', and scheduler credentials are not a merchant principal.
- **Independent severity and consequence:** **HIGH**. Former Owners or revoked staff could access financial intelligence or cause a transaction after their authority ceased.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Bind trusted grantor/current-role context, rule version, object-set and limits into protected reads and commit; deny narrowed/revoked/deleted/transfer states, with a second command-level check at the guarded write. Scheduler must not directly INSERT financial state.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Claim a scheduled financial rule, pause, revoke permission or narrow target scope, then attempt commit. Assert no mutation and no notification. Valid unchanged authority can proceed only through the single audited DTX/PQ-2 interface.
- **Specialist reconciliation references:** SP2-04/07; SEC15-S7-02/03; FIN15-S7-01/03/07; MIG15-S7-03. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** No T8. D12 and DTX/PQ-2 unresolved; no alternative write path or T7 scope change.

### 24-§5-4 — Central orchestration applies to background intelligence

- **Canonical FCTM:** `24-§5-4`, `C24@0c1dcbb2`, pointer `§5 central flow applies to approved background/scheduled intelligence`, kind `RULE`, commitment `BUILD NOW`, mission `SB-P-1.15`, original disposition **`IN SCOPE`**; canonical dependencies `D13; DSCH; DAI`.
- **Independent Product Truth obligation:** Approved background/scheduled intelligence must follow Contract 24 §5 shared identity → permission/entitlement → retrieval → reasoning → governed tool/service → Business Memory → response/notification sequence; a scheduler is not a separate AI permission authority.
- **Blueprint mapping / challenged engineering judgment:** Blueprint §8.3; §19 `§8.3, §10.2, §12`; PR #870 §20.6 original **`BLOCKED` / H**; original holds `H-D13`, `H-PROV`, `H-SCHED`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-TZ`, `H-AI`; original cited specialists SP-1, SP-2, SP-4, SP-5. Original draft rationale: Rule '§5 central flow applies to approved background/scheduled intelligence': realized as a design constraint of the scheduler foundation. Blocked until SB-P-1.13 kernel exists. Risk: background or aggregate work must run in a per-business context so no other business can see the result.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The shared-orchestration sentence is inadequate for noninteractive jobs: the draft does not define trusted principal derivation, context freshness, typed read-only tool boundaries or permitted post-generation behavior. AI instructions from retrieved data are untrusted.
- **Independent severity and consequence:** **HIGH**. A malicious merchant note or stale cached role context could trigger an unauthorized tool call or deliver cross-tenant/false financial intelligence.
- **Evidence quality:** PT + DD + relevant RC/SR; no executed acceptance, concurrency, RLS/ACL, restoration, provider or live scheduler result. Implementation evidence remains **UNVERIFIED — ACCESS REQUIRED**.
- **Correction, accepted direction or retained hold:** Persist a business-scoped job principal/recipient, revalidate authority at generation and display, restrict tools to approved read/explanation effects, and ground each briefing in time-stamped permitted sources. FPDR-03 allows latest-valid native display only, not outbound catch-up.
- **Falsifiable negative test / acceptance proof (PROPOSED, NOT EXECUTED):** Insert prompt-injection text requesting a tool write, revoke permission after queueing, and fail one data source. Assert no write/tool escalation, no revoked or foreign data, clear partial/source-as-of caveat, and no provider dispatch.
- **Specialist reconciliation references:** SP2-01/04/05/07; AI15-S7-01/02/03/05; SEC15-S7-02; NTF15-05/06. These specialist findings are challenged documentary context, not presumed runtime proof.
- **Source 18 / Founder trigger screening:** T6 resolved FPDR-03; DC-03 open. No T7/T8 at this documentary stage.

## 5. Independent accounting

| Classification | Count |
| --- | ---: |
| Canonical §8.3 IN SCOPE | 12 |
| PR #870 draft BLOCKED / FOLLOW-UP / provisional PASS | 11 / 1 / 0 |
| PR #870 draft High / Medium / Low | 12 / 0 / 0 |
| Independent CORRECTION REQUIRED | 10 |
| Independent POLICY / DEPENDENCY HOLD | 1 |
| Independent DIRECTION ACCEPTED / EVIDENCE HOLD | 1 |
| Independent High / Medium / Low / Critical | 10 / 2 / 0 / 0 |
| Runtime PASS / implemented and tested | **0** |

The original FOLLOW-UP is `22-§18-5`, assessed independently as direction accepted with a downstream dependency/evidence hold. No change to any row's canonical FCTM classification, commercial commitment or owning mission is authorized or proposed.

## 6. Distinct effects and six-specialist reconciliation

1. **Occurrence, attempt, lease, fencing and effect are different identifiers.** SP2-02/03 provide relevant architectural concerns; independent inspection of C22 and the draft establishes that no §8.3 contract yet guarantees effect-level idempotency after post-commit crash. Scheduler retries must not mint new financial command identity or imply provider delivery (FIN15-S7-02; NTF15-01/04/08).
2. **Worker possession is not merchant authority.** C22 §18 prohibits new authority. The draft leaves execution/commit-time current grant and business/target checks insufficiently specified; privileged service-role use and broad grants require actual negative-access proof (SP2-04/07, SEC15-S7-02/03, FIN15-S7-03/07).
3. **Business-local slot continuity and truthful provenance.** Current slots are 07:00, 10:30 and 22:00; historical 06:00/09:15 must not return as current configuration. FPDR-03 permits latest-valid *native* display with original scheduled time, generation time and source-as-of, without invented staleness threshold or outbound catch-up (SP2-01/05/06/08, AI15-S7-01/05, NTF15-06).
4. **Legal cleanup and sync are not generic domain writes.** Cleanup cannot select a retention period under unresolved U-5; migration/restore and audit remain protected (MIG15-S7-05/06). Sync/reconciliation requires owning-system provenance; authoritative customer credit is not invented before SB-P-1.16 (FIN15-S7-04/05).
5. **AI reasoning has no independent command authority.** Scheduled intelligence shares C24 §5's identity/permission/retrieval/grounding flow; no model, prompt or stale context may cross tenant/access boundaries or bypass governed tools (AI15-S7-02/03/05, SEC15-S7-03).

## 7. Founder and Source 18 screening

**FPDR-01:** native-only interim and truthful delivery limitations, correction Owner-notification commitment and qualified read-only Ask CFO preserved. **FPDR-02/T1:** historical correction replay prohibited; prospective-only after separately approved activation, no synthetic legacy `notification_status` rewrite or invented cutoff; **FDB-1(d2) integration owner remains UNASSIGNED**. **FPDR-03/T6:** latest-valid native briefing with scheduled/generated/source timestamps; no invented lateness threshold, automatic skip, expiry or outbound catch-up. **DC-03:** existing-business timezone default unresolved; no silent default/backfill or historic Ledger DATE reinterpretation. **U-3:** held `20-§23-10` outside scope; **U-5** retention and **DC-06** permission granularity retain canonical governance.

Source 18 **T1/T6 are resolved**, not reopened. No new T2 competing canonical source established; stale unmerged PR #870 wording is restorative alignment, not automatically T7. No new T3/T4/T5 condition demonstrated in this annex. Genuine approved-scope alteration would require **T7**, while **T8** is not established merely by a draft BLOCKED dependency or identified design correction.

Retain D12/D13/D14, DTX/PQ-2, DSCH, business timezone, privileged-worker/RLS/birth-safe grants, restoration/retention, AI gateway/context, provider/recipient and CI/runtime evidence holds. Job scheduling and legal deletion are not authorized by this documentary report.

## 8. Annex completeness and checkpoint boundary

Exact §8.3 `IN SCOPE` FCTM IDs = 12; PR #870 §20.6 §8.3 IDs = 12; this annex contains each exactly once as a substantive `###` finding: **missing 0, extra 0, duplicates 0**. Each includes an exact canonical source pointer, requirement kind, original risk/status/holds, independent risk and justification, original/independent feasibility, correction or hold, a distinct falsifiable proposed test, specialist references and Source 18 screen.

**No tests or live verification were executed.** Document release at Checkpoint 1 does not constitute Stage 7 acceptance, implementation authorization, EIS, migration permission, valid notification delivery or financial transaction readiness. Other seven annexes and the 694-ID master are not written. This branch/PR must remain DRAFT, marked **S7-PAR IN PROGRESS — INDEPENDENT ENGINEERING REVIEW INCOMPLETE — NOT FOR MERGE**.

**STOP FOR MISSION CONTROL CHECKPOINT 1 CONTENT AND PUBLICATION DISPOSITION.**
