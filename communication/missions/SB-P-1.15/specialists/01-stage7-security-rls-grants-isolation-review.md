# SB-P-1.15 — Stage 7 S7-SP-1 Security / RLS / Grants / Isolation Review

**Assignment:** S7-SP-1 — independent non-author security specialist review  
**Authority:** SB-P-1.15-MC-16, MC-17, MC-18 and MC-19  
**Reviewer:** GPT-5.6 Sol  
**Provider:** OpenAI  
**Session:** existing S7-SP-1 Security Specialist ChatGPT project session  
**Protected-main baseline:** `c1e51a3679319893dc0e1cafe284301a14571946`  
**Engineering draft challenged:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`  
**Status:** DRAFT SPECIALIST REPORT FOR MISSION CONTROL CONTENT REVIEW

## 1. Reviewer independence and limits

This is the same GPT-5.6 Sol / OpenAI session that produced the earlier S7-SP-1 candidate assessment and the MC-17/MC-18 follow-up. I did not author SB-P-1.15 Stages 2–7, the Stage 6 Builder Review or the Stage 7 Engineering Review; repository provenance attributes those to Claude Code. I am therefore non-author relative to PR #870, but I am not independent of my own earlier SEC15-S7-01 through SEC15-S7-05 assessments and I am not S7-PAR.

Session provenance is limited to continuity visible in this ChatGPT project conversation and repository attribution. No cryptographic session identifier, OpenAI internal audit record or proof concerning invisible project sessions is available. MC-18/MC-19 conditionally accepted this conversation-level provenance for this one assignment.

Competence relevant to this review includes PostgreSQL/Supabase RLS, ACL/default-ACL design, function `EXECUTE`, `SECURITY INVOKER`/`SECURITY DEFINER`, function-owner/search-path hardening, service-role/BYPASSRLS boundaries, tenant isolation, authorization binding and negative-access testing.

No live Supabase project, production database, deployed scheduler/provider, runtime secrets or production traffic was accessed. Current production ACLs, RLS, function ownership/security mode, deployed service-role use and runtime isolation remain **`UNVERIFIED — ACCESS REQUIRED`** unless separately evidenced.

## 2. Evidence baseline

Reviewed against protected `main@c1e51a3679319893dc0e1cafe284301a14571946` and PR #870 at the exact head above:

- Source 18: `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` @ `0945bda60a93c99909c3b7a247d5427ebe256011`.
- Canonical FCTM: `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` @ `65eeaf8d31b81595b971c22895615a096555f84f`.
- Stage 6 Builder Review: `communication/missions/SB-P-1.15/claude-code/09-stage6-builder-review.md` @ `ac92759f9d02b1344c25840b2e8b26b9f121a50b`.
- MC-16/17/18/19: blobs `d93e645c1b71c0ba9ec22cacecef89f6fafaa7f4`, `7325d9d2e1d153dde4630296452a57ba11084a3b`, `cba066d814a947b16587d00839f4bfc600acfd25`, `62c1105db780c2d2e9bfdebefa89595786ef884b`.
- FPDR-01/02/03: blobs `0e0928fec1215ff91fa82386663d6a8f17f43bd2`, `373a31dfff67b11c9d342abe21554b777ccb89b8`, `2382846bc802df25f3e581d58648b6492f3316eb`.
- July broad-grant migration: `20260727000000_reconcile_default_grants.sql` @ `4e2d3fa1bb44a42f2ecfd13ff237b31cf7834303`.
- August anonymous-hardening migration: `20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql` @ `027c482a673814e5286559407a4e5ee9401372fb`.
- Server service-role client: `src/integrations/supabase/client.server.ts` @ `f63eeb841c3a7954fc501f2c9f225429dd35cf2d`.
- PR #870 Engineering draft blob: `da1628804379cc58764a9adaa2819ce19884ab7a`.

Repository source proves what the files declare. It does not by itself prove production execution or exploitability.

## 3. Overall disposition

| Finding | Severity | Disposition |
|---|---|---|
| `SEC15-S7-01` Birth-safe database permissions | HIGH | Correction required |
| `SEC15-S7-02` Privileged execution authority | HIGH | Correction required |
| `SEC15-S7-03` Cross-business effective-access proof | HIGH | Correction required |
| `SEC15-S7-04` Ask CFO read-only enforcement | HIGH impact | Conditionally acceptable with residual hold |
| `SEC15-S7-05` Former-Owner/current-recipient eligibility | MEDIUM | Direction accepted; refinement and residual hold required |

These are Stage 7 documentary/evidence findings, not claims that an SB-P-1.15 runtime vulnerability currently exists.

## 4. SEC15-S7-01 — Birth-safe database permissions

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

### Evidence and chronology

The July migration explicitly grants `ALL` on six named public tables to `anon`, `authenticated` and `service_role`, grants `EXECUTE ON ALL FUNCTIONS IN SCHEMA public` to those roles, and installs matching `postgres` creator-role defaults.

The August migration later revokes `anon` privileges on the authorized Inventory subset, revokes `PUBLIC EXECUTE` on two named functions, and executes:

- `ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE ALL ON TABLES FROM anon`;
- `ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE EXECUTE ON FUNCTIONS FROM anon`.

Therefore this report **does not claim all future `postgres`-created SB-P-1.15 objects still inherit broad `anon` privileges**. The August source also leaves `authenticated`/`service_role` defaults untouched, does not remediate all pre-existing objects, and records a separate `supabase_admin` creator-role residual. Its repository presence **does not prove production execution**.

### Required Stage 7 refinement

`H-BIRTH` should close only on object-specific effective privilege proof. Require:

1. actual creator-role/default-ACL inventory;
2. table-specific grants plus RLS/policy proof where row isolation is required;
3. exact function signatures/overloads and `PUBLIC`/`anon`/`authenticated`/executor/service-role `EXECUTE` inventory;
4. owner, `SECURITY INVOKER`/`SECURITY DEFINER` mode and hardened `search_path` for privileged functions;
5. view/materialized-view and sequence privilege checks where applicable;
6. atomic creation/hardening or proof that no object is externally usable before narrowing;
7. resulting effective-access verification rather than accepting `REVOKE` or `ENABLE ROW LEVEL SECURITY` statements alone.

Validated affected/representative FCTM IDs: `22-§23-2`, `22-§29-3`, `2-§25-25`, `2-§25-27`, `11-§4-2`, `11-§20-2`, `11-§22-8`, `11-§22-9`, `22-§12-1`, `4-§16-7`, `24-§31-10`, `BP-§10.4-W1`.

PR #870 carries `H-BIRTH` on **265** Stage 7 register rows.

Negative evidence must include fresh migration rehearsal, creator/default ACL inventory, `PUBLIC`/`anon` negatives, overload checks, function owner/security/search-path inspection, authenticated cross-business negatives, view/aggregate checks, and sequence checks where relevant.

**Residual hold:** keep `H-BIRTH`; live ACL/migration state remains **`UNVERIFIED — ACCESS REQUIRED`**.

## 5. SEC15-S7-02 — Privileged execution authority

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

`src/integrations/supabase/client.server.ts` creates `supabaseAdmin` from `SUPABASE_SERVICE_ROLE_KEY` and documents that it bypasses RLS. That proves a privileged primitive exists, not that future SB-P-1.15 jobs use it unsafely.

Every privileged/background operation that can access merchant-scoped data should be required to:

1. derive a verified interactive or upstream-approved automation/system principal from trusted server context;
2. obtain **current** authorization for the exact business, action and object/object-set;
3. bind that decision to the privileged operation;
4. carry the business/object predicates into every protected read, claim, lease, mutation, bookkeeping and follow-up query;
5. revalidate at the required execution boundary when authority may have changed;
6. deny targets outside the bound object set even when `service_role` is held;
7. maintain a source-complete privileged-handler inventory proving no unbound admin/service-role/background path exists.

Server location, maintenance purpose, scheduled-job context or possession of `service_role` is never merchant authority by itself.

Validated affected/representative FCTM IDs: `11-§11-1`, `11-§11-9`, `11-§11-15`, `11-§16-1`, `11-§16-2`, `11-§16-3`, `11-§16-4`, `11-§16-5`, `11-§16-6`, `22-§18-7`, `22-§18-11`, `11-§22-8`, `11-§22-9`.

PR #870 carries `H-PRIV` on **169** Stage 7 register rows.

Negative tests: service role without a bound decision; forged business ID; Business A authority against Business B; foreign object outside the decision; revocation between preview/claim and consequence; grantor authority loss before a later run; retry/follow-up scope escape; and generic maintenance-job context without a verified principal.

**Residual hold:** keep `H-PRIV` until source-complete privileged-handler and runtime evidence exists.

## 6. SEC15-S7-03 — Cross-business effective-access matrix

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

The draft correctly requires no cross-business leakage, but an authenticated RLS test alone cannot prove isolation across RPCs, definer functions, RLS-bypassing jobs, aggregates, Ask CFO retrieval or notification recipient lookup.

Required future matrix:

| Access path | Minimum negative proof |
|---|---|
| Caller JWT / RLS | Business A cannot CRUD Business B; revoked actor loses access |
| RPC / ordinary function | Foreign business/object parameters cannot widen access |
| `SECURITY DEFINER` | Owner rights cannot cross business/object scope; owner/search path verified |
| Service-role/background | Decision binding plus explicit predicates prevent cross-tenant access despite BYPASSRLS |
| Views/aggregates/intelligence | Current Owner/Manager sees only authorized business/subset |
| Ask CFO retrieval | Pre-retrieval authorization applies to every source and delegated subset |
| Notification recipient lookup | Event/business/recipient linkage cannot select foreign or stale authority |

Fixtures should cover Owner A, Owner B, permitted Manager A, non-permitted Manager A, Employee A, revoked actor, `anon`, and approved automation/system principal where supported.

Validated affected/representative FCTM IDs: `22-§23-2`, `22-§29-3`, `2-§25-25`, `2-§25-27`, `4-§16-7`, `2-§25-5`, `BP-§10.4-B2`, `2-§3-9`, `2-§3-15`, `22-§12-1`.

PR #870 carries `H-ISO` on **133** Stage 7 register rows.

**Residual hold:** keep `H-ISO` until this matrix is executed against the authorized implementation. No current cross-business exploit is asserted.

## 7. SEC15-S7-04 — Ask CFO read-only enforcement

**Severity:** HIGH impact  
**Disposition:** CONDITIONALLY ACCEPTABLE WITH RESIDUAL HOLD

The Stage 7 direction is sound: read-only data path, no write tools, authorization before retrieval, invoker-scoped reads and negative tests. FPDR-01 also preserves qualified, permission-scoped, read-only Ask CFO.

`H-RO` must not close from prompt wording or a tool list alone. The actual Ask CFO execution path must be unable to:

- mutate protected tables;
- invoke write-capable RPC/functions;
- reach `supabaseAdmin` as an unbound path;
- exploit a definer callable to mutate or widen scope;
- convert conversational intent into a consequential write without handing off to the separately governed feature/command path.

Manager role alone does not imply Ask CFO access, and Employee operational access must not become Owner intelligence.

Validated affected/representative FCTM IDs: `2-§7-1`, `2-§7-3`, `2-§7-12`, `24-§12-8`, `2-§25-24`, `2-§25-26`, `BP-§10.4-B3`, `2-§25-5`, `BP-§10.4-E3`, `2-§3-9`, `2-§3-15`.

PR #870 carries `H-RO` on **306** rows and `H-SEC` on **232** rows; these counts overlap.

Negative tests: prompt-induced create/update/delete; direct consequential-action prompt; enumerate callable RPC/functions; privileged-client reachability; Manager with no delegation; narrow Manager delegation; Employee denial; Business A prompt with Business B IDs; delegation revocation mid-conversation; and `BP-§10.4-B3` proof of no Ask-CFO-originated write.

**Residual hold:** retain `H-RO`, applicable `H-SEC`, and D12/D13/D14 dependencies. DC-06 remains an engineering/security granularity question unless a proposal changes approved role behavior.

## 8. SEC15-S7-05 — Former-Owner/current-recipient eligibility

**Severity:** MEDIUM  
**Disposition:** DIRECTION ACCEPTED; REFINEMENT AND RESIDUAL HOLD REQUIRED

The draft correctly requires eligibility at notification creation/display, including former-Owner denial. The stronger invariant is that stored recipient identity or historical role is data, not durable authority.

Require current authorization at:

1. notification request creation;
2. retrieval/display;
3. background claim/processing when recipient-sensitive content is selected;
4. eventual adapter handoff/dispatch once a channel is separately authorized.

Ownership transfer or delegated-permission revocation between these boundaries must deny the stale recipient.

Validated affected FCTM IDs: `22-§12-1`, `22-§12-2`, `22-§12-3`, `22-§12-4`, `22-§12-5`, `22-§12-6`, `22-§12-7`, `22-§12-8`, `22-§12-9`; also `4-§16-7`, `2-§25-5`, `BP-§10.4-B2` where current Manager/delegation eligibility affects recipient-visible intelligence.

Negative tests: Owner transfer after request creation; former Owner direct retrieval; stale recipient during processing; current Owner only when currently eligible; Manager revocation after request creation; foreign recipient ID; cross-business substitution; adapter-time revalidation.

**Residual hold:** keep applicable `H-SEC`, `H-PRIV` and `H-ISO` until notification/runtime evidence exists.

## 9. Founder and policy compatibility

This report does not reopen Product Truth.

- **T1 / FPDR-02:** prospective-only correction notifications. No automatic historical replay, no invented backlog, no historical status rewrite.
- **T6 / FPDR-03:** show the latest valid native briefing when available with scheduled business-local slot and actual generation timestamp; no invented staleness cutoff or late outbound delivery.
- **DC-03:** existing-business timezone default remains unresolved.
- **FDB-1 (d2):** correction-specific notification integration ownership remains unassigned.
- **U-3/U-5:** unchanged.
- **DC-06:** remains a Manager-permission engineering/security question.

## 10. Repository facts versus live facts

Repository-supported facts:

- July contains broad table/function grants and broad `postgres` defaults;
- August source revokes the authorized Inventory `anon` subset and future `postgres`-creator `anon` table/function defaults;
- August leaves `authenticated`/`service_role` defaults and a documented `supabase_admin` residual;
- `supabaseAdmin` exists in source and is documented as RLS-bypassing;
- PR #870 carries `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-RO` and `H-SEC`.

Still **`UNVERIFIED — ACCESS REQUIRED`** in this review: production execution of August hardening; current live ACL/default-ACL state; live function owner/overload/security/search-path state; deployed RLS drift; actual SB-P-1.15 use of `supabaseAdmin`; scheduler isolation; Ask CFO runtime identity/callables; notification recipient runtime; execution/passing of this report's negative tests; implementation CI success.

## 11. Source 18 trigger analysis

| Trigger | S7-SP-1 result |
|---|---|
| T1 | No new trigger; FPDR-02 consumed as canonical. |
| T2 | **NOT TRIGGERED.** No approved-source conflict identified. |
| T3 | **NOT TRIGGERED.** No ownership/scope reassignment; FDB-1 (d2) stays unassigned. |
| T4 | No new item. |
| T5 | **NOT TRIGGERED.** |
| T6 | No new Security T6; FPDR-03 preserved and DC-03 stays unresolved. |
| T7 | **TRIGGERED — finding-scoped documentary refinement recommended** for `H-BIRTH`, `H-PRIV` and `H-ISO` closure criteria. No Product Truth, FCTM, mission ownership or implementation change is authorized. |
| T8 | **NOT TRIGGERED.** No requirement is shown infeasible. |

## 12. Mission Control disposition requested

- `SEC15-S7-01`: HIGH correction required, using the corrected July/August chronology.
- `SEC15-S7-02`: HIGH correction required.
- `SEC15-S7-03`: HIGH correction required.
- `SEC15-S7-04`: accept direction only with `H-RO`/`H-SEC` residual holds and database/callable/tool negatives.
- `SEC15-S7-05`: accept direction only with current-eligibility refinement and residual holds.

No modification to PR #870, Blueprint §§20–21, FCTM, contracts, Founder records, source documents, code, migrations, provider configuration, database or production is made or authorized by this report. Engineering Review reconciliation requires a separate Mission Control instruction.

**STOP FOR MISSION CONTROL S7-SP-1 CONTENT REVIEW.**
