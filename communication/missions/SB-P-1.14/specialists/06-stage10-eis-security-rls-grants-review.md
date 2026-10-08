Review complete. The security disposition is **Stage 10 EIS acceptance blocked pending three documentary refinements**. The principal blocker is `MC10-PRE-01`: `EIS14-SEC-02` incorrectly applies “RLS enabled” to tables, views, and functions uniformly.

# SMART BUSINESS MISSION CONTROL

## SB-P-1.14 — Stage 10 Security / Permissions / RLS & Grants Specialist Review

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Appointment:** S10-SP-1  
**Review type:** Independent Stage 10 EIS specialist review  
**PR reviewed:** #831 — Stage 9 EIS draft  
**Exact reviewed head:** `254e40a723e4c74af69d425cb918bb03dc9817e2`  
**EIS blob:** `20fd97177348ad9b02bbb8d1be9e53f05ad18bde`  
**Mission Control authorization supplied:** `main@0cde7444bfdf4502f534bc5eb99797dd13ff6bf6`  
**EIS:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md`  
**Status:** FINDINGS SUBMITTED — NO IMPLEMENTATION OR MISSION APPROVAL AUTHORITY

---

## 1. Independence basis

This current room/session **did not author or materially contribute to the Stage 9 EIS**. The EIS identifies Claude Code as the Stage 9 author.

There is, however, a material correlated-context risk: the canonical Stage 7 Security / Permissions / RLS & Grants report identifies **ChatGPT — GPT-5.6 Sol** in the Team LIPS Security & Permissions Architecture context as its reviewer. Prior Stage 7 participation is permitted by the Stage 10 instruction, but I have not treated that earlier report as independent proof. I rechecked its conclusions against the locked SB-P-1.12 EIS, locked SB-P-1.13 EIS, locked SB-P-1.14 Blueprint/FCTM, Stage 9 EIS wording, and current PostgreSQL/Supabase security semantics.

**Independence conclusion:** sufficient for the assigned Stage 10 specialist review, with disclosed correlated-context risk.

No PR, file, SQL, migration, Supabase environment, provider account, R2 configuration, production state or credentials were modified.

---

## 2. Reviewed-head and evidence boundary

PR #831 was verified as open/draft at the requested exact head:

`254e40a723e4c74af69d425cb918bb03dc9817e2`

No later PR head was reviewed.

The PR currently has no CI run proving this EIS. Absence of a run is **not** treated as a pass.

The review also preserves the canonical product permission model: Owner is highest authority; Manager authority is delegated; Employee access is bounded operational access and does not include Owner financial intelligence by default. :chatgpt-content-reference{index="0"} The Receipt Cabinet likewise promises retrieval only for documents the user is permitted to access. :chatgpt-content-reference{index="1"} Source 12 requires database-level merchant isolation, permission-scoped access, RLS or equivalent server-side enforcement, and explicitly rejects UI visibility as a security boundary. :chatgpt-content-reference{index="2"}

---

# 3. Executive specialist disposition

**Documentary/design result: BLOCKED FOR REFINEMENT.**

Three findings prevent Stage 10 Security acceptance of the EIS as currently worded:

| Finding | Severity | Result |
|---|---|---|
| `SEC14-EIS-S10-01` | **CRITICAL** | `EIS14-SEC-02` incorrectly treats RLS as a uniform table/view/function mechanism and omits required object-specific birth-hardening semantics |
| `SEC14-EIS-S10-02` | **HIGH** | Audit/provenance wording does not explicitly preserve the SB-P-1.12 authority-event and durable-denial boundary |
| `SEC14-EIS-S10-03` | **HIGH** | Full-Assurance/effective-access verification is not specific enough to prove view/function/RPC/default-ACL/privileged-handler hardening |

These are **engineering-specification defects**, not Product Truth defects. I found no need to change the locked Blueprint, FCTM dispositions, commercial classification, ownership, mission assignment or Founder decisions.

Other major Security areas are correctly structured at documentary level, but their implementation/runtime/provider evidence remains held.

---

# 4. Scope-by-scope disposition

| Review area | Stage 10 disposition |
|---|---|
| SB-P-1.12 authority-kernel consumption | **DESIGN CORRECT / D12 EVIDENCE HOLD** |
| Explicit active-business isolation | **DESIGN CORRECT / D12 EVIDENCE HOLD** |
| Owner / Manager / Employee boundaries | **DESIGN CORRECT / D12 EVIDENCE HOLD** |
| Create/read/replace/delete/export separation | **DESIGN CORRECT / D12 EVIDENCE HOLD** |
| Confirmation binding vs execution-time revalidation | **DESIGN CORRECT / D12 EVIDENCE HOLD** |
| Transaction direct-DML removal | **DESIGN CORRECT / DTX HOLD** |
| Legacy callable retirement | **DESIGN CORRECT / MIGRATION EVIDENCE HOLD** |
| Protected-table RLS | **CORRECT DIRECTION, but SEC-02 formulation defective** |
| Views | **BLOCKING REFINEMENT REQUIRED** |
| Function/RPC security mode, owner, search path and grants | **BLOCKING REFINEMENT REQUIRED** |
| Default privileges | **CORRECT DIRECTION; verification specification incomplete** |
| Service-role / privileged handlers | **DESIGN CORRECT / H-PRIV + D12 HOLD** |
| Revocation-safe document retrieval | **DESIGN CORRECT / H-REVOKE + DR2 HOLD** |
| Signed-URL assumption | **CORRECTLY NOT ACCEPTED AS REVOCATION BY EXPIRY ALONE** |
| Export authorization | **DESIGN CORRECT / D12 + H-REVOKE HOLD** |
| Audit/provenance | **BLOCKING REFINEMENT REQUIRED** |
| Effective-access verification | **BLOCKING REFINEMENT REQUIRED** |
| Production/provider assertions | **UNVERIFIED — ACCESS REQUIRED** |

The role/action separation direction is consistent with canonical Product Truth and Source 12. Exports must preserve the same permissions and business isolation and must not expose unauthorized fields. :chatgpt-content-reference{index="3"} Supabase's governing profile likewise requires RLS, least privilege, cross-merchant isolation tests, service-role restriction and audit logging where required. :chatgpt-content-reference{index="4"}

---

# 5. Findings

## SEC14-EIS-S10-01 — `MC10-PRE-01`: `EIS14-SEC-02` is technically incorrect for views and functions

**Severity:** CRITICAL  
**Classification:** Documentary/design correctness defect  
**Stage 10 acceptance:** **BLOCKS**

### Exact EIS requirements

Primary:

- `EIS14-SEC-02`
- `EIS14-MIG-02`
- `EIS14-VER-01`

Security-sensitive dependent requirement:

- `EIS14-TOT-01` where the canonical aggregation is implemented as a SQL view or function.

### Affected FCTM rows

All 60 rows mapped by `EIS14-SEC-02`:

`3-§9-8`;  
`5-§6-1`, `5-§6-2`;  
`5-§15-1` through `5-§15-11`;  
`22-§10-1` through `22-§10-7`;  
`25-§4-2` through `25-§4-11`;  
`25-§10-1` through `25-§10-12`;  
`25-§23-1` through `25-§23-12`;  
`25-§26-1`;  
`17-§12-1`;  
`BP-§10.3-W5`, `BP-§10.3-W8`, `BP-§10.3-W10`.

Where `EIS14-TOT-01` becomes a database view/function, additionally:

`3-§9-10`, `3-§9-11`, `3-§10-2`, `3-§10-3`, `3-§10-4`, `3-§10-5`, `3-§10-9`, `3-§19-12`, `BP-§10.3-SB1`.

### Evidence and reasoning

`EIS14-SEC-02` currently states that every new “table, view and function is created with RLS enabled”.

That is not a valid PostgreSQL object model.

PostgreSQL row-level security is enabled on **tables** and policies are table-specific. Once enabled, absence of an applicable policy produces default denial; table owners and `BYPASSRLS` roles are important exceptions requiring separate treatment. :chatgpt-content-reference{index="5"}

A normal **view does not acquire its own RLS policies**. Its security depends on view permissions and on whether underlying relations are evaluated using the view owner's or invoking user's privileges. For directly exposed protected views, PostgreSQL's `security_invoker` view mode causes underlying RLS and privileges to be evaluated as the invoking user. :chatgpt-content-reference{index="6"} Supabase explicitly warns that an ordinary privileged-owner view can bypass the RLS protection expected on its base tables. :chatgpt-content-reference{index="7"}

A **function** likewise does not have RLS “enabled”. Functions have `EXECUTE` privileges and execute as either invoker or definer. PostgreSQL grants `EXECUTE` to `PUBLIC` by default for newly created functions unless hardened defaults or explicit revocation remove it. `SECURITY DEFINER` requires special protection of its privilege context and `search_path`. :chatgpt-content-reference{index="8"} Supabase also recommends `SECURITY INVOKER` by default and calls out the combination of `SECURITY DEFINER`, `search_path`, and narrow executable grants. :chatgpt-content-reference{index="9"}

Finally, locked SB-P-1.12 already distinguishes these objects:

- `EIS-ISO-01`: table-family RLS;
- `EIS-ISO-03`: effective-access reconciliation for tables, **views, sequences and functions**;
- `EIS-ISO-10`: special invariant for `SECURITY DEFINER`.

Therefore the Stage 9 wording simplifies an already-locked security distinction.

### Required object-type-specific born-hardened formulation

Mission Control should require `EIS14-SEC-02` to preserve one invariant — **no protected object is ever externally reachable under unintended authority** — while specifying the mechanism by object type:

**Protected tables.** Every business-scoped protected table must be born with RLS enabled, kernel-based deny-by-default policies appropriate to its action/object capabilities, unauthorized `PUBLIC`/`anon` grants removed, and only intentionally required `authenticated`, executor or service privileges present. Command-only objects must not gain a parallel client-DML route. Table ownership and roles capable of bypassing RLS must be included in effective-access verification.

**Protected views.** Do not say that RLS is enabled “on the view”. A view directly exposed to caller roles must have explicit view grants and use invoker-security semantics so the caller's underlying permissions/RLS apply, where the target PostgreSQL version supports that mechanism. Otherwise it must remain unexposed to `anon`/`authenticated` and be reachable only through a separately kernel-authorized controlled path. View owner and security mode must be verified. A canonical totals view under `EIS14-TOT-01` is subject to this rule.

**Functions/RPCs.** Every new or replaced function must explicitly declare its intended invoker/definer model. `SECURITY INVOKER` is the default safe choice where elevated authority is unnecessary. Any `SECURITY DEFINER` function must inherit the locked SB-P-1.12 `EIS-ISO-10` contract: a narrow `NOLOGIN NOINHERIT` owner, only the underlying object privileges required by that command family, hardened empty `search_path` with schema-qualified references, no caller-controlled dynamic object names, immediate removal of `PUBLIC`/`anon` execution, and only the exact intended executable grants. Direct-RPC exposure is permitted only when the function is itself kernel-safe for direct invocation. Exact function signatures and overloads must be inventoried.

**Sequences.** Any sequence introduced or consumed by the protected schema must be part of effective-access and default-privilege reconciliation. A client receives no sequence privilege merely because a table uses it. Executor access must be limited to what the owning command actually needs.

**Default privileges.** Reconciliation must be performed for **every real object creator role and each relevant object class**, not merely assumed from the schema. PostgreSQL default privileges apply to future objects and differ by object class; function defaults are particularly important because of default `PUBLIC EXECUTE`. :chatgpt-content-reference{index="10"}

**Birth-safety.** The object's creation/replacement, grants, revokes, RLS/policy setup where applicable, function/view security attributes and default-ACL reconciliation must form one atomic migration boundary before the object becomes externally usable. PostgreSQL specifically recommends revoking default function access within the same transaction as creation to avoid an exposure window. :chatgpt-content-reference{index="11"}

This is the technically correct expression of the already-locked **born hardened** requirement. It does not modify Product Truth.

### Trigger screen

| Trigger | Disposition |
|---|---|
| T2 — source conflict | **NOT TRIGGERED.** Locked upstream sources support the refinement. |
| T3 — new Product Truth / merchant-visible behaviour | **NOT TRIGGERED.** |
| T6 — material derived constraint | **NOT TRIGGERED as new Product Truth.** The formulation is compelled by existing `EIS-ISO-03`/`EIS-ISO-10`, Stage 7 and PostgreSQL mechanics. |
| T7 — omission/simplification | **TRIGGERED.** Stage 9 collapsed distinct locked security mechanisms into the inaccurate phrase “RLS enabled”. |
| T8 — infeasibility/security conflict | **NOT TRIGGERED.** The locked born-hardened outcome is feasible through object-specific mechanisms. |

**Stage 10 blocker:** YES.

---

## SEC14-EIS-S10-02 — Domain provenance is not explicitly separated from authority audit and durable denial handling

**Severity:** HIGH  
**Classification:** Documentary security/audit boundary omission  
**Stage 10 acceptance:** **BLOCKS**

### Exact EIS requirements

- `EIS14-CAB-03`
- `EIS14-SEC-01`
- `EIS14-STO-07`
- `EIS14-MIG-02`
- `EIS14-VER-01`

### Affected FCTM rows

Primary audit/provenance rows:

`5-§15-2`, `5-§15-3`, `5-§15-10`;  
`25-§23-1` through `25-§23-12`.

Cross-cutting authorization/isolation acceptance also touches `22-§29-3` and remains D12-held.

### Evidence and reasoning

`EIS14-CAB-03` correctly says that provider logs are supplemental and that Smart Business must retain authoritative provenance. That preserves an important Stage 7 conclusion.

However, the EIS does not explicitly mention the locked SB-P-1.12 `authority_events` or durable denial contract at all.

That matters because the locked upstream boundary is deliberately split:

- **domain provenance** records what happened to a document/business record;
- **authority events** record the authorization basis and decision;
- **durable denial handling** ensures a security-relevant denial does not disappear merely because the protected operation aborts;
- **provider logs** are operational evidence only.

SB-P-1.12 `EIS-DEP-01` makes its `authority_events` and denial contract part of the only authority surface a later mission may consume. Its `EIS-AUD-02` defines specific durability semantics for denied direct-RPC and server-boundary operations.

The Stage 7 Security report explicitly required the later EIS to distinguish domain provenance, authority/audit events and provider operational logs. Stage 9 distinguishes only Smart Business audit versus provider logs. That leaves room for a new SB-P-1.14 provenance table to accidentally become a parallel authorization-audit truth source or for denials to be omitted.

### Required refinement

`EIS14-CAB-03` or its security companion must explicitly state:

- SB-P-1.14 provenance tables contain **domain provenance**, not a second permission/authority ledger;
- allow/deny authorization evidence and security-relevant denial durability consume the SB-P-1.12 `authority_events` and denial contract;
- domain provenance may reference the kernel decision ID, verified principal, business, action and target/object identifiers as appropriate, without duplicating mutable authority truth;
- denial recording must follow the upstream durable-denial mechanism and must survive the relevant protected-operation failure semantics;
- sensitive retrieval audit records identifiers and security metadata, not private document contents;
- provider logs remain supplemental and never determine whether an actor was authorized.

### Trigger screen

| Trigger | Disposition |
|---|---|
| T2 | **NOT TRIGGERED.** |
| T3 | **NOT TRIGGERED.** |
| T6 | **NOT TRIGGERED.** Existing upstream audit contracts already define this boundary. |
| T7 | **TRIGGERED.** An approved Stage 7/upstream security requirement is incompletely carried into the Stage 9 EIS. |
| T8 | **NOT TRIGGERED.** Technically feasible. |

**Stage 10 blocker:** YES.

---

## SEC14-EIS-S10-03 — Effective-access verification is materially under-specified for the objects being introduced

**Severity:** HIGH  
**Classification:** Verification/evidence design omission  
**Stage 10 acceptance:** **BLOCKS**

### Exact EIS requirements

- `EIS14-SEC-02`
- `EIS14-CMD-03`
- `EIS14-STO-03`
- `EIS14-MIG-05`
- `EIS14-VER-01`

### Affected FCTM rows

All 60 `EIS14-SEC-02` rows listed in `SEC14-EIS-S10-01`, plus:

`EIS14-CMD-03` rows:  
`3-§22-1`, `3-§22-2`, `22-§28-9`, `24-§14-9`, `BP-§6.1-1`, `BP-§6.2-1`.

`EIS14-STO-03` rows:  
`25-§8-1` through `25-§8-11`;  
`25-§9-1` through `25-§9-8`;  
`25-§14-6`;  
`25-§17-3`;  
`25-§21-1` through `25-§21-5`.

`EIS14-VER-01` rows:  
`22-§22-1` through `22-§22-6`;  
`BP-§13-1`.

### Evidence and reasoning

`EIS14-VER-01` currently requires “RLS/grant/default-privilege negatives”. That is directionally correct but too broad to prove the actual security contract after `MC10-PRE-01` is resolved.

Locked SB-P-1.12 is more exact:

- `EIS-ISO-03` requires effective privilege computation across tables, views, sequences and functions for `PUBLIC`, `anon`, `authenticated`, `service_role`, executor roles and every real creator role;
- `EIS-ISO-10` requires verification of function owner, security mode, `search_path` and effective executable grants;
- `EIS-TST-03` makes that inventory mandatory;
- `EIS-ISO-04` requires a source-complete privileged-handler inventory.

Locked SB-P-1.13 similarly requires Full Assurance to prove grants/default privileges/RLS/function owner/security mode/`search_path`, privileged-handler inventory, and the absence of any effective alternate transaction-write path.

The Stage 9 verification wording does not explicitly preserve all of those evidence dimensions.

### Required refinement

The Stage 17/19 Full Assurance contract for this mission must produce an effective-access inventory covering, for every new or replaced protected object:

- object type and stable identity;
- owning role;
- effective privileges for `PUBLIC`, `anon`, `authenticated`, `service_role` and every executor/creator role;
- table RLS enabled state and installed policies;
- view owner and invoker/owner security semantics;
- sequence privileges where applicable;
- function exact signature/overload inventory, owner, `SECURITY INVOKER`/`SECURITY DEFINER` status, effective `search_path` and executable grants;
- creator-role default ACLs for the relevant object classes;
- any role attribute that materially bypasses normal enforcement, including service-role/RLS-bypass behavior;
- disappearance/revocation of legacy callable identities and superseded overloads;
- a source-complete privileged-handler inventory proving no unbound admin/service-role path;
- direct-DML negative evidence for the transactions/corrections command-only cut-over;
- cross-business denial, Manager-not-Owner, Employee-no-Owner-intelligence, create-does-not-imply-read/export, revoked retrieval/export, `anon` denial and stale-link/revocation tests.

Source 12 already makes permission/RLS testing and real workflow testing mandatory implementation evidence. :chatgpt-content-reference{index="12"}

Current live evidence for this inventory is:

**`UNVERIFIED — ACCESS REQUIRED`**

### Trigger screen

| Trigger | Disposition |
|---|---|
| T2 | **NOT TRIGGERED.** |
| T3 | **NOT TRIGGERED.** |
| T6 | **NOT TRIGGERED.** These are inherited verification obligations. |
| T7 | **TRIGGERED.** Stage 9 simplifies mandatory upstream/Stage 7 verification detail. |
| T8 | **NOT TRIGGERED.** |

**Stage 10 blocker:** YES.

---

# 6. Security controls confirmed as correct at documentary level

## 6.1 Kernel and active-business isolation

`EIS14-SEC-01` correctly requires every Ledger/document/object action to begin with the SB-P-1.12 verified principal and explicit active business, with `authz.authorize` as authority and client `business_id` rejected as authority.

This faithfully carries the locked rule that a session, request value, object key or `service_role` possession does not create membership or business authority.

**Disposition:** DESIGN PASS.  
**Evidence status:** D12 remains unresolved; no runtime claim is permitted.

---

## 6.2 Owner / Manager / Employee capability boundary

`EIS14-LDG-06` plus `EIS14-SEC-03` correctly maintain separate capabilities rather than collapsing access into role names:

- Owner authority remains broad within the business;
- Manager is delegated rather than automatically Owner;
- Employee operational contribution does not imply Owner intelligence;
- Customer/Supplier/Delivery users do not receive general Ledger capability.

This matches canonical Product Truth. :chatgpt-content-reference{index="13"}

`EIS14-SEC-03` also correctly preserves create/read/replace/delete/export separation.

**Disposition:** DESIGN PASS.  
**Runtime:** D12-held.

---

## 6.3 Confirmation binding versus execution-time authorization

`EIS14-CNF-03` and `EIS14-CNF-04` preserve the critical separation:

- the fingerprint determines whether the merchant-reviewed material target changed;
- execution independently revalidates current authority.

A valid confirmation therefore cannot preserve authority after membership, capability, entitlement, object scope or business state is revoked.

That faithfully carries locked SB-P-1.12 `EIS-CNF-01/-02`.

**Disposition:** DESIGN PASS.  
**Runtime/concurrency evidence:** not available; D12-held.

---

## 6.4 Direct-DML removal and governed command convergence

`EIS14-CMD-01` correctly widens the one SB-P-1.13 governed transaction command rather than creating a second write path.

`EIS14-CMD-02` moves correction into a governed atomic command and prohibits direct client writes to correction events.

`EIS14-CMD-03` requires authenticated direct transaction `INSERT`/`UPDATE` and direct correction-event `INSERT` to disappear, and requires the legacy `correct_transaction` callable/superseded identity to be removed or revoked.

This faithfully realizes Stage 7 `SEC14-S7-04`.

The current repository baseline still contains the old direct path. That is **known pre-implementation state**, not a contradiction in the EIS.

**Disposition:** DESIGN PASS.  
**Implementation:** all 42 `DTX` rows remain held.  
**Live effective access:** **`UNVERIFIED — ACCESS REQUIRED`**.

---

## 6.5 Service role and privileged storage handlers

`EIS14-STO-03` explicitly inherits SB-P-1.12 `EIS-ISO-04` and says `service_role` possession is never document authority.

That is the correct architecture: the privileged operation must carry the verified-principal/business/action/object binding and explicit object/business predicates because service-role database access bypasses RLS.

For later scheduled reconciliation, “verified principal” must include the upstream-approved automation principal where applicable; a background job does not become authorized merely because there is no interactive caller.

**Disposition:** DESIGN PASS.  
**Implementation/runtime:** `H-PRIV` + D12 hold.  
The source-complete privileged-handler inventory is required under `SEC14-EIS-S10-03`.

---

## 6.6 Revocation-safe document retrieval and signed URLs

`EIS14-RTV-01` correctly adopts the strongest Stage 7 interpretation:

- permission is checked when retrieval is requested;
- delivery must remain authorization-controlled;
- short URL expiry alone is **not** represented as immediate revocation;
- a server authorization proxy or equivalently revocable mechanism may satisfy the requirement;
- an intentional non-zero post-revocation access window returns to Mission Control as a T3 candidate.

That is correct.

No actual R2/token/proxy mechanism has been selected and proven.

**Provider mechanism:** **`UNVERIFIED — ACCESS REQUIRED`**  
**R2 account/configuration:** **`UNVERIFIED — ACCESS REQUIRED`**  
**Revocation behavior:** **`UNVERIFIED — ACCESS REQUIRED`**

`H-REVOKE` and `DR2` therefore remain valid evidence holds.

---

## 6.7 Export authorization

`EIS14-SRC-02` correctly requires exports to use the same permission projection and aggregation as ordinary reads and to use revocation-safe delivery.

Create permission therefore cannot silently become export permission.

**Disposition:** DESIGN PASS.  
**Runtime:** D12/H-REVOKE held.

---

## 6.8 No routine platform access

`EIS14-SEC-04` correctly avoids turning `/super-admin`, support operations or platform staff into a standing merchant-data authority. It consumes purpose-limited SB-P-1.12 support grants instead.

**Disposition:** DESIGN PASS.

---

# 7. MC10-PRE-02 — totals classification security intersection

`EIS14-TOT-01` does not collapse purchases/expenses into sales/income or treat repayments/standalone credit as new income. From the Security specialist's limited intersection, I found no permission or information-classification defect in that wording.

I do **not** independently approve the accounting/financial semantics; that belongs to the relevant financial-integrity review.

The security requirement is that whichever SQL implementation is chosen — view or function — must comply with `SEC14-EIS-S10-01`. A correct financial aggregation implemented as a privileged leaking view would still be security-invalid.

**MC10-PRE-02 security disposition:** NO ADDITIONAL SECURITY FINDING.

---

# 8. Evidence-state separation

## Documentary/design correctness

Verified from the exact Stage 9 EIS head and canonical repository sources.

Design is sound for kernel use, active-business isolation, role/capability separation, confirmation/revalidation, transaction-command convergence, privileged-handler binding, revocation objective, export authorization and provider-independent ownership.

Three documentary defects remain: `SEC14-EIS-S10-01` through `-03`.

## Implementation evidence

SB-P-1.12 implementation dependency: **NOT COMPLETE / D12 HOLD**.  
SB-P-1.13 governed-command dependency: **NOT COMPLETE / D13 + DTX HOLD**.  
SB-P-1.14 schema/RLS/functions/storage implementation: **NOT IMPLEMENTED by this Stage 9 EIS**.

No EIS wording may convert those specifications into implementation evidence.

## Runtime evidence

Current isolated test-project state: **`UNVERIFIED — ACCESS REQUIRED`**  
Current effective grants/RLS/function owner/signature/search-path state: **`UNVERIFIED — ACCESS REQUIRED`**  
Current migration-ledger/constraint state: **`UNVERIFIED — ACCESS REQUIRED`**  
Current revocation concurrency behavior: **`UNVERIFIED — ACCESS REQUIRED`**  
Current document retrieval/export runtime behavior: **`UNVERIFIED — ACCESS REQUIRED`**

PR #831 itself has no CI result proving these behaviors.

## Production/provider facts

Production grants/RLS/ACLs: **`UNVERIFIED — ACCESS REQUIRED`**  
Production database contents: **`UNVERIFIED — ACCESS REQUIRED`**  
Backup/PITR and restore readiness: **`UNVERIFIED — ACCESS REQUIRED`**  
Cloudflare R2 account/bucket/credential state: **`UNVERIFIED — ACCESS REQUIRED`**  
R2 lifecycle behavior for transient discard: **`UNVERIFIED — ACCESS REQUIRED`**  
Actual signed/revocable delivery capability: **`UNVERIFIED — ACCESS REQUIRED`**  
Live hosting/runtime isolation behavior: **`UNVERIFIED — ACCESS REQUIRED`**

No production/provider fact is inferred from the EIS.

---

# 9. Consolidated T2 / T3 / T6 / T7 / T8 screen

| Trigger | Stage 10 Security result |
|---|---|
| **T2 — conflict among approved sources** | **NOT TRIGGERED.** I found no Product Truth conflict among the locked Blueprint, FCTM and upstream security contracts. |
| **T3 — new Product Truth / merchant-visible behavior** | **NOT TRIGGERED now.** Conditional T3 remains if Engineering proposes an intentional non-zero post-revocation access window. |
| **T6 — material new derived constraint** | **NOT TRIGGERED.** Findings prescribe implementation of already-locked security rules rather than creating new Product Truth. |
| **T7 — omission/simplification** | **TRIGGERED, finding-scoped**, by `SEC14-EIS-S10-01`, `-02`, and `-03`. Mission Control should require Stage 9 EIS refinement rather than allowing those omissions to survive into implementation. No FCTM disposition changes are authorized. |
| **T8 — technical/security infeasibility** | **NOT TRIGGERED.** All three documentary defects have technically feasible remedies consistent with locked Product Truth. Conditional T8 remains only where the locked Blueprint already records it—for example if no compliant bounded-discard or security mechanism can ultimately be provided. |

---

# 10. Stage 10 Security acceptance boundary

I do **not** certify:

- SB-P-1.12 implementation or acceptance;
- SB-P-1.13 implementation or acceptance;
- transaction-family cut-over;
- any new SB-P-1.14 RLS policy;
- any GRANT/REVOKE/default-privilege state;
- any database function owner or security mode;
- any view security mode;
- any privileged handler;
- any R2/provider configuration;
- any signed-link revocation behavior;
- any audit-event runtime durability;
- any export runtime security;
- any migration;
- production state;
- whole-EIS acceptance;
- mission acceptance or implementation authorization.

The correct Stage 10 Security disposition is:

**EIS SECURITY ACCEPTANCE: BLOCKED PENDING DOCUMENTARY REFINEMENT**

Required before Security reconsideration:

1. correct `EIS14-SEC-02` into object-type-specific table/view/function/sequence/default-ACL hardening while preserving one born-hardened invariant;
2. explicitly preserve SB-P-1.12 authority-event/durable-denial truth separately from SB-P-1.14 domain provenance;
3. strengthen `EIS14-VER-01`/related verification text to require the complete effective-access, callable-surface and privileged-handler evidence inventory.

After those documentary corrections, the remaining D12, D13, DTX, H-BIRTH, H-PRIV, H-REVOKE, DR2 and other evidence holds may remain unresolved without themselves preventing documentary EIS acceptance, provided the EIS continues to state them truthfully and does not claim implementation/runtime readiness.

No Product Truth correction or Founder decision is required for the three present findings.

**STAGE 10 SECURITY / PERMISSIONS / RLS & GRANTS SPECIALIST REPORT SUBMITTED**

**STOP FOR MISSION CONTROL DISPOSITION.**

I made no changes to PR #831 or any implementation/environment.