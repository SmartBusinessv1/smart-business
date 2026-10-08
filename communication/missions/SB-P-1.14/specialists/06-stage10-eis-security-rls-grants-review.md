# SB-P-1.14 — Stage 10 Security / Permissions / RLS & Grants EIS Review

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Specialist:** S10-SP-1 — Security / Permissions / RLS & Grants
**Authority:** `communication/missions/SB-P-1.14/mission-control/22-stage10-eis-security-specialist-instruction.md` and SB-P-1.14-MC-14
**Review type:** Independent complete-EIS documentary security review
**Status:** SUBMITTED TO MISSION CONTROL — NO EIS ACCEPTANCE / LOCK / IMPLEMENTATION AUTHORITY

## 1. Actor, prior contribution and independence

**Actual actor/model:** ChatGPT — GPT-5.6 Sol
**Provider:** OpenAI
**Session / room:** Team LIPS Smart Business — Security & Permissions Architecture room

### Prior contribution

This room/session:

- authored the canonical SB-P-1.14 Stage 7 Security / Permissions / RLS & Grants specialist review;
- has prior upstream SB-P-1.12 and SB-P-1.13 Security / Permissions review history.

This room/session did **not** author or materially contribute to the SB-P-1.14 Stage 9 EIS under review.

Canonical repository evidence identifies **Claude Code** as the Stage 9 EIS author.

### Independence conclusion

**INDEPENDENCE ESTABLISHED for S10-SP-1.**

Correlated-assumption risk exists because this room previously reviewed the upstream authority model and the Stage 7 Security constraints now consumed by the EIS. I therefore re-read the complete EIS, locked Blueprint, Founder decisions, Stage 7 Security report, upstream locked SB-P-1.12 EIS and current repository security evidence rather than treating prior Security acceptance as proof.

No provider dashboard, live Supabase project, production system or runtime environment was accessed.

## 2. Exact target reviewed

| Item | Exact identity |
|---|---|
| Canonical Stage 10 authorization main | `0cde7444bfdf4502f534bc5eb99797dd13ff6bf6` |
| PR | `#831` |
| PR state at review | OPEN / DRAFT / UNMERGED |
| Exact PR head | `254e40a723e4c74af69d425cb918bb03dc9817e2` |
| EIS path | `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` |
| Exact EIS blob | `20fd97177348ad9b02bbb8d1be9e53f05ad18bde` |
| Locked Blueprint blob | `256828d2c26fba7dab6f52975efb8b574b1563f1` |
| Canonical FCTM blob | `01e9856aca0afdb1267230a1932fe34054449a4b` |
| Stage 7 Security report blob | `93252bba5b7d133d4db14efb7cfc838ff035b944` |
| Locked SB-P-1.12 EIS blob | `c444f7509477d0e8b997af538440d93bf2ca4d72` |

Mission Control's preliminary structural checks are accepted as documentary inputs only:

- 83 unique EIS requirements;
- 563/563 IN SCOPE rows mapped;
- Stage 7 classifications and residual holds preserved;
- no implementation/provider/migration/production action occurred.

This report independently evaluates the Security mechanism, not merely the mapping count.

## 3. Executive Security disposition

The EIS faithfully carries most of the accepted Stage 7 Security direction:

- one SB-P-1.12 authority kernel;
- explicit active-business context;
- action/object capability separation;
- Owner/Manager/Employee defaults consumed upstream rather than reinvented;
- create does not imply read-all/export-all;
- one governed transaction write path;
- confirmation binding and execution-time revalidation remain separate controls;
- `service_role` is not authority;
- revocation-safe retrieval is explicitly required;
- provider logs are supplemental to Smart Business provenance;
- D12, D13, DTX, H-BIRTH, H-REVOKE and H-PRIV holds are preserved;
- current live grants/provider/storage facts remain `UNVERIFIED — ACCESS REQUIRED`.

However, the EIS is **not yet security-sufficient for Stage 10 acceptance**.

Two design defects require correction:

1. `EIS14-SEC-02` uses one mechanically incorrect hardening rule across tables, views and functions and does not explicitly preserve the upstream command-only write boundary for new protected tables.
2. `EIS14-STO-03` requires a caller-derived binding for scheduled reconciliation/discard jobs that may run without a merchant caller, creating an undefined privileged-principal model.

A third area, revocation-safe retrieval, is acceptable as an EIS invariant but remains evidence-held: ordinary non-revocable presigned URLs do not satisfy the zero-stale-access requirement.

No new Product Truth / Founder decision is required by the corrections below.

## 4. Findings

### SEC14-EIS10-01 — EIS14-SEC-02 is technically incorrect across object types and incomplete for protected-table writes

**Severity:** CRITICAL
**Blocks Stage 10 acceptance:** YES
**Primary EIS requirement:** `EIS14-SEC-02`
**Related requirements:** `EIS14-MIG-02`, `EIS14-MIG-03`, `EIS14-TOT-01`, `EIS14-CMD-03`, `EIS14-VER-01`
**Mission Control intersection:** MC10-PRE-01

#### Exact evidence

`EIS14-SEC-02` currently says:

> Every new table, view and function is created with RLS enabled...

That is not technically correct.

- PostgreSQL RLS applies to **tables** (and table-like relations that support policies), not ordinary views or functions.
- Views require explicit view security semantics; a view can otherwise execute with owner privileges and bypass the intended caller/base-table isolation.
- Functions/RPCs require owner/security-mode/`search_path`/EXECUTE-grant treatment; they do not "have RLS enabled."
- Sequences and other callable/support objects can also acquire privileges through creator-role/default ACL state and are omitted from the wording.
- The locked SB-P-1.12 EIS additionally requires **no direct authenticated DML on protected tables**. The SB-P-1.14 EIS explicitly removes direct DML for the transactions family but does not state the same command-only rule for the new document/media/provenance/import protected tables.

Current repository evidence makes the omission material:

- `20260727000000_reconcile_default_grants.sql` grants broad table access to `anon`, `authenticated`, `service_role`;
- it grants EXECUTE on all public functions to those roles;
- it sets broad future default privileges for `postgres`-created tables/functions.

Therefore a vague "RLS enabled" statement is not enough to guarantee birth-safe objects.

#### Affected FCTM rows

The 60 rows explicitly mapped to `EIS14-SEC-02`:

- `3-§9-8`;
- `5-§6-1`–`5-§6-2`;
- `5-§15-1`–`5-§15-11`;
- `22-§10-1`–`22-§10-7`;
- `25-§4-2`–`25-§4-11`;
- `25-§10-1`–`25-§10-12`;
- `25-§23-1`–`25-§23-12`;
- `25-§26-1`;
- `17-§12-1`;
- `BP-§10.3-W5`, `BP-§10.3-W8`, `BP-§10.3-W10`.

Also security-affected because they may be realized as a view/function under `EIS14-TOT-01`:

- `3-§9-10`, `3-§9-11`;
- `3-§10-2`–`3-§10-5`;
- `3-§10-9`;
- `3-§19-12`;
- `BP-§10.3-SB1`.

#### Security consequence

Without object-type-specific semantics, implementation can accidentally:

- create a view that bypasses caller RLS through owner execution;
- leave PUBLIC/anon/authenticated EXECUTE on a protected RPC;
- create a SECURITY DEFINER function with unsafe search path or overpowered owner;
- inherit broad creator-role defaults;
- allow direct authenticated writes to a new protected table and thereby bypass confirmation/revalidation/audit commands;
- expose a sequence or helper object more broadly than intended.

That would violate the locked one-kernel / one-write-boundary model.

#### Precise required refinement — born-hardened formulation

Replace the generic sentence with an object-type-specific rule equivalent to:

**Tables / partitions**

- Every business-protected table is created with RLS enabled before exposure.
- Policies are deny-by-default and call approved SB-P-1.12 kernel helpers using authoritative business/object scope.
- `PUBLIC` and `anon` receive no business-data privileges.
- `authenticated` receives only intentional direct `SELECT` where direct read is part of the design.
- **No direct authenticated INSERT/UPDATE/DELETE is granted on protected tables; protected writes occur only through kernel-checked commands under the upstream EIS-ISO-02 contract.**
- Table owner / service roles do not become merchant authority.
- Required business-scoped foreign/reference constraints are created in the same migration.

**Views**

- Do not claim RLS on the view itself.
- A user-callable protected view must use invoker semantics that preserve underlying base-table RLS (for supported PostgreSQL versions, `security_invoker = true`), or an equivalent mechanism that cannot execute as a privileged owner bypass.
- Base tables remain RLS-protected.
- Explicit `SELECT` grants are narrow; `PUBLIC` / `anon` are revoked unless separately approved.
- A view requiring elevated logic must not silently rely on owner privileges; use an explicitly governed function/command with the correct security contract instead.
- Effective-access verification records owner and view security options.

**Functions / RPCs**

- Classify each function as caller-invoker read helper, protected command, or server-boundary-only function.
- Protected write commands use the locked SB-P-1.12 narrow-executor model where applicable:
  - `SECURITY DEFINER`;
  - owner is a `NOLOGIN NOINHERIT` narrow executor role;
  - hardened empty `search_path`;
  - schema-qualified references;
  - no user-controlled dynamic object names;
  - immediate `PUBLIC` / `anon` EXECUTE revocation;
  - only intended `authenticated` or server-boundary EXECUTE grants;
  - narrow underlying table/column grants.
- Direct authenticated RPC exposure is allowed only where the denial/audit and response-projection contract supports it.
- Superseded/legacy callable identities are revoked/dropped in the cut-over.

**Sequences / supporting database objects**

- Explicitly inventory and grant only the minimum USAGE/SELECT needed.
- Do not rely on broad creator-role default ACLs.

**Creator-role/default privileges and verification**

- Reconcile defaults for every real creator role (`postgres`, `supabase_admin`, and any other actual creator).
- Verify effective privileges for `PUBLIC`, `anon`, `authenticated`, `service_role`, function-owner/executor roles and object owners in Full Assurance.
- New protected objects must never exist temporarily with inherited broad access.

#### T-screen

- **T2:** NOT TRIGGERED — approved sources are aligned; the draft EIS wording is the defect.
- **T3:** NOT TRIGGERED.
- **T6:** NOT TRIGGERED anew; object-type hardening derives from already accepted upstream Security architecture.
- **T7:** NOT TRIGGERED; no row moves or changes disposition.
- **T8:** **TRIGGERED finding-scoped if the EIS remains as written** because "RLS on views/functions" is not executable security architecture and command-only protection of new protected tables is under-specified.

#### Required disposition

**EIS CORRECTION REQUIRED.**
All H-BIRTH rows remain held.

---

### SEC14-EIS10-02 — Scheduled reconciliation/discard cannot depend on a caller-derived authority binding

**Severity:** HIGH
**Blocks Stage 10 acceptance:** YES
**Primary EIS requirements:** `EIS14-STO-03`, `EIS14-STO-05`, `EIS14-RET-01`, `EIS14-ARC-01`
**Upstream dependency:** SB-P-1.12 `EIS-ISO-04`, `EIS-AUT-01`

#### Exact evidence

`EIS14-STO-03` says:

> Any service-role storage handler (ingest verification, reconciliation, discard) carries a caller-derived authority binding...

But:

- `EIS14-STO-05` says reconciliation may run through the shared SB-P-1.15 Scheduler;
- `EIS14-RET-01` allows discard reconciliation after lifecycle expiry;
- `EIS14-ARC-01` defines a jobs module for scheduler/on-demand maintenance.

A scheduled maintenance job may have **no merchant caller**.

The locked SB-P-1.12 EIS distinguishes:

- caller-originated privileged operations under `EIS-ISO-04`; and
- server-only automation invocations under `EIS-AUT-01`, whose principal/scope is derived from authoritative stored rule/state and never from `service_role` possession or request-supplied actor data.

#### Affected FCTM rows

The 26 rows mapped to `EIS14-STO-03`:

- `25-§8-1`–`25-§8-11`;
- `25-§9-1`–`25-§9-8`;
- `25-§14-6`;
- `25-§17-3`;
- `25-§21-1`–`25-§21-5`.

The scheduler/reconciliation intersection also materially affects the rows mapped through `EIS14-STO-05` and `EIS14-RET-01`.

#### Security consequence

If a scheduled service-role job is forced into a "caller-derived" model, implementation is likely to invent one of the following unsafe patterns:

- reuse the uploader/Owner as a fake caller;
- trust a stored caller ID without current authority;
- treat `service_role` as the principal;
- run unscoped cross-business reconciliation because "system job" is assumed trusted.

Any of these breaks the one-kernel principal model.

#### Precise required refinement

Split privileged storage execution into two explicit classes:

**A. User-initiated privileged operation**

- resolve the verified caller through the ordinary authenticated path;
- authorize principal + active business + action + object set through the kernel;
- bind the privileged operation to the short-lived decision record under `EIS-ISO-04`;
- every privileged query carries authoritative business/object predicates;
- revalidate current authority for protected/consequential access.

**B. Scheduled/platform maintenance operation**

- no merchant caller is fabricated;
- execution is a server-only trusted maintenance/automation invocation under the upstream automation/system-maintenance contract accepted by Mission Control;
- `service_role` is never the principal;
- business/object scope comes from authoritative metadata/state, not request input;
- operation is limited to the exact maintenance capability (for example orphan-state reconciliation or expiry cleanup);
- no document content or merchant-facing data is read beyond the minimum needed for that maintenance task;
- destructive action rechecks the object's current lifecycle/hold state immediately before change;
- provenance records the maintenance actor/rule/job identity and exact object/business scope;
- if SB-P-1.12/SB-P-1.15 does not yet provide an approved automation principal for this job class, the scheduled path remains held rather than inventing one locally.

#### T-screen

- **T2:** NOT TRIGGERED.
- **T3:** NOT TRIGGERED.
- **T6:** NOT TRIGGERED anew; this is faithful use of the upstream principal model.
- **T7:** NOT TRIGGERED.
- **T8:** finding-scoped security conflict if `service_role` or a fabricated caller becomes the authority source.

#### Required disposition

**EIS CORRECTION REQUIRED.**
H-PRIV and related scheduled-maintenance findings remain held.

---

### SEC14-EIS10-03 — Revocation-safe retrieval direction is correct, but ordinary presigned URLs do not satisfy it

**Severity:** HIGH
**Blocks Stage 10 acceptance:** NO, provided the invariant remains explicit and the mechanism stays evidence-held
**Primary EIS requirements:** `EIS14-RTV-01`, `EIS14-SRC-02`, `EIS14-STO-03`, `EIS14-PRV-02`
**Stage 7 source:** SEC14-S7-06 / H-REVOKE

#### Exact evidence

`EIS14-RTV-01` requires:

- kernel authorization at retrieval request time;
- authorization-checked delivery;
- either server proxy or a provider-signed mechanism whose validity cannot outlive revocation;
- short expiry alone is not considered revocation;
- any intentional non-zero stale window returns as a T3 candidate.

This faithfully preserves the accepted Stage 7 rule.

The provider capability needed to realize the second option is not evidenced.

#### Affected FCTM rows

The 35 rows mapped to `EIS14-RTV-01`:

- `3-§9-13`;
- `3-§10-1`, `3-§10-6`–`3-§10-9`;
- `3-§19-9`;
- `5-§6-3`–`5-§6-9`, `5-§6-11`;
- `5-§18-7`;
- `25-§9-1`–`25-§9-8`;
- `25-§19-7`;
- `25-§20-7`, `25-§20-13`;
- `25-§26-2`, `25-§26-3`, `25-§26-11`;
- `10-§5-10`, `10-§10-7`;
- `17-§12-1`, `17-§12-2`;
- `BP-§10.3-X`.

#### Security interpretation

A conventional self-validating presigned object URL generally remains usable until expiry after issuance. Rechecking authority only when issuing it does not revoke an already-issued URL.

Therefore only one of the following can satisfy the current zero-stale-access requirement:

- an authorization-checked proxy/edge path that performs current kernel authorization on each delivery request; or
- a provider/token system with **actual online revocation / immediate server-controlled invalidation** equivalent to the proxy.

A normal short-lived presigned URL is not sufficient unless Mission Control/Founder later approves a bounded stale window through the T3 path already declared by the EIS.

#### Live fact

Provider/R2 revocable-link capability: **UNVERIFIED — ACCESS REQUIRED**.

#### T-screen

- **T2:** NOT TRIGGERED.
- **T3:** NOT TRIGGERED now; becomes a candidate only if a non-zero stale window is proposed.
- **T6:** NOT TRIGGERED anew.
- **T7:** NOT TRIGGERED.
- **T8:** NOT TRIGGERED at documentary level because a compliant proxy path exists.

#### Required disposition

No wording correction is mandatory if Mission Control preserves the strict interpretation above.

**H-REVOKE remains an evidence/implementation hold.**

---

### SEC14-EIS10-04 — Create/read/replace/delete/export capability separation is faithfully realized

**Severity:** INFO / FAVORABLE
**Blocks Stage 10 acceptance:** NO
**Primary EIS requirements:** `EIS14-LDG-06`, `EIS14-SEC-03`, `EIS14-SRC-02`, `EIS14-SEC-04`

#### Evidence

The EIS correctly requires:

- Ledger read/create/correct/export as distinct kernel capabilities;
- document upload/create/read/replace/delete/export as distinct actions;
- create does not imply read-all or export;
- an Employee upload cannot expose Owner intelligence;
- Customer/Supplier/Delivery participants receive no Ledger capability;
- no routine platform/support document access outside purpose-limited SB-P-1.12 support grants;
- exports are kernel-checked commands using current authorization and revocation-safe delivery.

#### Affected FCTM rows

Primary `EIS14-SEC-03` rows:

- `3-§11-1`–`3-§11-5`, `3-§11-7`;
- `5-§12-1`–`5-§12-6`;
- `5-§18-9`;
- `22-§23-5`.

Export rows include:

- `3-§10-1`, `3-§10-6`–`3-§10-9`, `3-§19-12`.

#### Required evidence hold

D12 implementation evidence must still prove actual Owner/Manager/Employee defaults, object-scope projection and negative tests.

#### T-screen

T2/T3/T6/T7/T8: **NOT TRIGGERED**.

---

### SEC14-EIS10-05 — Confirmation binding and execution-time revalidation are correctly kept independent

**Severity:** INFO / FAVORABLE
**Blocks Stage 10 acceptance:** NO
**Primary EIS requirements:** `EIS14-CNF-03`, `EIS14-CNF-04`, `EIS14-CMD-01`, `EIS14-CMD-02`

#### Evidence

The EIS correctly distinguishes:

- merchant-reviewed material fingerprint / stale-target re-prompt;
- independent SB-P-1.12 execution-time authority revalidation.

A target can remain unchanged and still be denied because role, membership, capability, entitlement or business state changed.

No local SB-P-1.14 confirmation-token system is introduced.

#### Required evidence hold

D12 / DTX remains open until the upstream confirmation/serialization and transaction-family command path are implemented and independently verified.

#### T-screen

T2/T3/T6/T7/T8: **NOT TRIGGERED**.

---

### SEC14-EIS10-06 — Direct transaction DML elimination is faithfully carried, but runtime proof remains held

**Severity:** HIGH / EVIDENCE HOLD
**Blocks Stage 10 acceptance:** NO
**Primary EIS requirements:** `EIS14-CMD-01`, `EIS14-CMD-02`, `EIS14-CMD-03`, `EIS14-MIG-01`, `EIS14-HOLD-03`

#### Exact evidence

The EIS requires:

- one governed create command for all callers;
- governed correction with audit event;
- revocation of authenticated direct `INSERT`/`UPDATE` on `transactions`;
- revocation of direct correction-event insert;
- retirement/revocation of legacy callable identities;
- effective-access verification showing no alternate callable path.

This correctly realizes Stage 7 SEC14-S7-04 and the locked upstream command-only target.

#### Affected FCTM rows

`EIS14-CMD-03`:

- `3-§22-1`, `3-§22-2`;
- `22-§28-9`;
- `24-§14-9`;
- `BP-§6.1-1`;
- `BP-§6.2-1`.

All 42 DTX rows remain held by `EIS14-HOLD-03`.

#### Required evidence hold

Current canonical repository still contains the pre-cut-over direct DML model. The EIS does not falsely claim otherwise.

Acceptance requires later effective-access evidence from the migrated target.

#### T-screen

T2/T3/T6/T7/T8: **NOT TRIGGERED**.

---

### SEC14-EIS10-07 — Audit/provenance design is acceptable, with D12 denial-durability evidence still required

**Severity:** MEDIUM / EVIDENCE HOLD
**Blocks Stage 10 acceptance:** NO
**Primary EIS requirements:** `EIS14-CAB-03`, `EIS14-SEC-01`, `EIS14-STO-03`

#### Evidence

`EIS14-CAB-03` correctly makes Smart Business governed audit/provenance authoritative and provider logs supplemental.

It covers:

- upload;
- interpretation;
- preview;
- confirmation/rejection;
- linkage;
- sensitive retrieval;
- retention change;
- deletion;
- reconciliation.

This faithfully carries SEC14-S7-09.

The underlying authority/denial durability still belongs to the locked SB-P-1.12 audit contract and remains D12-held.

#### Affected FCTM rows

`EIS14-CAB-03`:

- `5-§15-2`, `5-§15-3`, `5-§15-10`;
- `25-§23-1`–`25-§23-12`.

#### Required evidence hold

Later verification must prove:

- authoritative authority-event linkage;
- durable security-relevant denial recording;
- no private document content copied into audit/telemetry;
- provider logs are not substituted for Smart Business authority truth.

#### T-screen

T2/T3/T6/T7/T8: **NOT TRIGGERED**.

---

## 5. Mission Control preliminary findings

### MC10-PRE-01 — object-type-specific hardening

**Specialist conclusion: CONFIRMED; Mission Control's concern is correct.**

The current `EIS14-SEC-02` wording is technically invalid because RLS cannot be applied generically to views/functions.

The correction must be stronger than a wording cleanup: it must also preserve the locked command-only write boundary for new protected tables, explicit function security, view invoker semantics and sequence/default-ACL treatment.

This is **blocking**.

### MC10-PRE-02 — sales/income vs purchases/expenses vocabulary

This is primarily S10-SP-2 Transaction / Financial Integrity scope.

Security has one narrow intersection:

- whichever canonical financial classification is approved/refined must feed the **same** permission-scoped query/export layer;
- an export or view must not relabel/aggregate data differently from authorized interactive readers;
- Owner/Manager/Employee projection must remain capability-scoped.

I do **not** independently accept or reject the financial semantics here. No Security-specific Product Truth trigger is identified from MC10-PRE-02.

## 6. Stage 7 finding/hold realization

| Stage 7 Security finding | Stage 10 EIS realization |
|---|---|
| SEC14-S7-01 — D12 hard gate | **Faithfully preserved** by `EIS14-HOLD-01` |
| SEC14-S7-02 — birth-safe objects | **INADEQUATELY REALIZED** by current `EIS14-SEC-02`; correction required |
| SEC14-S7-03 — action/capability separation | **Faithfully realized** by `EIS14-LDG-06`, `EIS14-SEC-03` |
| SEC14-S7-04 — governed command / no direct transaction DML | **Faithfully realized** by `EIS14-CMD-01` to `-03`, held by DTX |
| SEC14-S7-05 — confirmation vs execution revalidation | **Faithfully realized** by `EIS14-CNF-03`, `EIS14-CNF-04` |
| SEC14-S7-06 — revocation-safe retrieval | **Faithfully stated as invariant**, evidence-held by H-REVOKE / DR2 |
| SEC14-S7-07 — active-business isolation | **Faithfully realized** by `EIS14-SEC-01`, storage metadata and kernel checks |
| SEC14-S7-08 — privileged handlers | **PARTIALLY REALIZED**; user-caller case is correct, scheduled maintenance case needs correction |
| SEC14-S7-09 — audit/provenance | **Faithfully realized**, D12 evidence still required |
| SEC14-S7-10 — exports | **Faithfully realized** by `EIS14-SRC-02`, H-REVOKE / D12 remains |

## 7. Stage 7 findings that must remain held

The EIS must not be read as satisfying these runtime/evidence holds:

- **225 D12 rows** — upstream authority implementation/acceptance required;
- **42 DTX rows** — governed transaction-family cut-over/effective-access proof required;
- **60 H-BIRTH rows** — remain held, and their EIS wording currently needs correction;
- **35 H-REVOKE rows** — current-permission delivery mechanism/provider capability required;
- **26 H-PRIV rows** — privileged-handler binding required; scheduled-maintenance principal model needs correction;
- storage/provider-dependent rows under H-STO / DR2;
- provider evidence rows marked `UNVERIFIED — ACCESS REQUIRED`;
- audit/denial durability where the SB-P-1.12 runtime foundation is not yet accepted.

No held row may be promoted merely because the EIS names a target mechanism.

## 8. UNVERIFIED — ACCESS REQUIRED

The following remain unavailable live facts and are not inferred:

- live effective grants / RLS policies / object owners / function identities / ACLs;
- creator-role default privileges in the target project;
- R2 signed-link/revocation capability;
- R2 account/bucket/CORS/credential/lifecycle state;
- production/test migration ledger;
- backup/PITR/restore readiness;
- provider/runtime storage behavior.

These remain exactly:

**UNVERIFIED — ACCESS REQUIRED**

## 9. Product Truth / FCTM / Blueprint screen

### Product Truth

No new Product Truth / Founder decision is required for SEC14-EIS10-01 or SEC14-EIS10-02.

They are security implementation-mechanism corrections under already locked authority principles.

The only potential Founder/Product Truth re-entry remains the one already declared by Stage 7/EIS:

- if an intentional non-zero post-revocation access window is proposed for document/media retrieval, return to Mission Control as a T3 candidate.

### FCTM

No FCTM disposition, ownership, build-commitment or commercial-classification change is required.

All affected rows remain `IN SCOPE`.

### Locked Blueprint

No locked Blueprint correction is required.

The required EIS refinements realize, rather than change:

- current-permission retrieval;
- one shared authority model;
- action/object separation;
- no parallel protected write path;
- birth-safe protected objects;
- privileged-handler binding.

## 10. Trigger screen

| Trigger | Specialist conclusion |
|---|---|
| **T2 — approved-source conflict** | **NOT TRIGGERED.** The draft EIS is the only conflicting layer; locked sources are aligned. |
| **T3 — new Product Truth** | **NOT TRIGGERED now.** Existing conditional candidate remains only if a non-zero post-revocation access window is proposed. |
| **T6 — material derived constraint** | **NOT TRIGGERED anew.** Required object hardening and privileged-principal separation derive from locked SB-P-1.12 Security contracts. |
| **T7 — omission / deferral / reassignment / reclassification** | **NOT TRIGGERED.** No row moves or changes classification. |
| **T8 — material security/integrity conflict** | **TRIGGERED finding-scoped for SEC14-EIS10-01 and SEC14-EIS10-02 until corrected.** No mission-wide infeasibility is established. |

## 11. Final Stage 10 Security classification

### Blocking corrections

1. **SEC14-EIS10-01 — EIS14-SEC-02 object-type hardening / command-only protected writes**
2. **SEC14-EIS10-02 — privileged scheduled-maintenance principal/binding model**

### Evidence holds that remain but do not require additional Product Truth

- D12 authority implementation;
- DTX cut-over;
- H-REVOKE retrieval/provider evidence;
- H-PRIV implementation evidence;
- H-BIRTH migration/effective-access evidence after the wording correction;
- audit/denial durability;
- storage/provider activation facts.

### Security recommendation

PR #831 EIS v0.1 is **not yet ready for Mission Control Stage 10 acceptance**.

Return the EIS for narrow finding-scoped refinement of SEC14-EIS10-01 and SEC14-EIS10-02.

A subsequent Security delta re-review can remain limited to those exact corrections if the EIS head/blobs and locked Product Truth boundaries otherwise remain unchanged.

**SECURITY REFINEMENT REQUIRED — STOP FOR MISSION CONTROL DISPOSITION**
