# SB-P-1.17 — Stage 10 SA-05 Documentary Supabase / Migration Architecture Review

**Mission:** SB-P-1.17 — Manager Operations  
**Stage:** 10 — Independent EIS Review  
**Reviewer:** Supabase Backend Architecture / Migration & Data-Transition Safety specialist room  
**Authority:** MC-456A; MC-432; MC-455; MC-456; Source 18 v1.2  
**Canonical review baseline:** `main@a0e636b739408b1a309d2188e412e7feb01a9f48`  
**Immutable EIS target:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`  
**Verified EIS blob:** `8280967f2805cfed17778da3fc76c90b2f2f5ead`  
**Locked Blueprint blob:** `bc4615f84959a79e6b242f622aae928901fbe959`  
**Canonical FCTM blob:** `cb79088d3fa59f8b3226fd9d11ff9c9573666670`  
**Implementation Authorization:** WITHHELD  
**Mode:** read-only documentary review only; no provider/runtime/SQL/migration activity

## 1. Reviewer independence and qualification disclosure

This reviewer did not author the SB-P-1.17 Blueprint or EIS and is independent from that author by authorship identity.

This reviewer is **not clean-room independent**:

- it previously performed the SB-P-1.17 Stage 7 migration-assurance review;
- it performed substantial SB-P-1.12 Supabase architecture work;
- it previously read and reused SB-P-1.14 and SB-P-1.16 migration findings.

Those prior conclusions were not treated as automatically correct in this Stage 10 review. The immutable EIS and current locked upstream sources were re-read and challenged directly.

This reviewer is an AI technical specialist. **No human PostgreSQL, Supabase, DBA, security, accounting or legal professional license/certification is claimed.** This report is not a qualified-human practitioner attestation.

No live Supabase, test project, production project, POS, runtime, backup/PITR, CI execution or deployed ACL state was inspected.

## 2. Exact documentary sources relied on

| Source | Blob / identity |
|---|---|
| SB-P-1.17 EIS | `8280967f2805cfed17778da3fc76c90b2f2f5ead` |
| Locked SB-P-1.17 Blueprint | `bc4615f84959a79e6b242f622aae928901fbe959` |
| SB-P-1.17 FCTM | `cb79088d3fa59f8b3226fd9d11ff9c9573666670` |
| Source 18 v1.2 | `0945bda60a93c99909c3b7a247d5427ebe256011` |
| MC-432 Stage 10 review contract | `fad5a75a3f81009c563c9b47459be246fc610490` |
| MC-456A authorization | `097d7bde3b506be536e98e9b71b78bbba248ed1a` |
| SB-P-1.12 EIS | `c444f7509477d0e8b997af538440d93bf2ca4d72` |
| SB-P-1.14 EIS | `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` |
| SB-P-1.16 EIS | `46fffd7b140940854c9b2b847517dde2f17584df` |
| SA-01 Stage 10 report | repository canonical `communication/missions/SB-P-1.17/specialists/05-stage10-sa01-documentary-security-review.md` |
| SA-03 Stage 10 report | `ec4403a6ee31c50b3b91030a1c229ce8a37fd587` |
| SA-05 eligibility disclosure | `2e3f0a20102bf9c51b0a01f82a992f0d0194b64a` |

## 3. Overall disposition

**REFINEMENT REQUIRED — DO NOT LOCK THE EIS ON THE BASIS OF SA-05.**

The EIS is directionally strong on:

- one-command-path intent;
- no second Ledger writer;
- denial of sequential-RPC pseudo-atomicity;
- source-event identity and replay safety;
- install-versus-activate separation;
- birth-safe object intent;
- effective-access verification as database state;
- additive/no-history-rewrite migration posture;
- explicit holds for MC410-R01/R02, EQ17-13 and reversal/closing uncertainty.

However, the reviewed EIS does **not yet provide an executable Supabase/PostgreSQL architecture** for several load-bearing paths.

One cross-EIS contradiction is confirmed:

- **SA05-S10-F08 / EIS17-SUP-06** incorrectly claims reuse of an SB-P-1.16 supplier balance contract that does not exist.

No technical impossibility is proven for EQ17-13, POS intake or dual-domain reversal. They remain unresolved feasibility/architecture holds, not established infeasibility.

## 4. Coverage matrix

| Review area | EIS requirements | SA-05 disposition |
|---|---|---|
| Ledger + stock atomicity | TXN-03, TXN-04, TXN-10, HOLD-17 | **HIGH — unresolved physical composition** |
| POS source authorization | POS-02, ARC-03/-04, AUTH-01, SEC-01/-03, HOLD-15 | **HIGH — unresolved authority route** |
| Trusted/unmapped POS financial timing | TXN-09, HOLD-16 | **HIGH — EIS wording must not imply a timing decision** |
| Dual-domain reversal | TXN-06, TXN-07, HOLD-18 | **HIGH — unresolved atomic compensating primitive** |
| Closing completeness | CC-02, CC-03, CC-06, HOLD-19 | **Directionally sound; hold remains** |
| RLS / effective privileges | AUTH-01/-08, SEC-01 to SEC-04 | **HIGH — write-function security-mode refinement required** |
| Migration sequencing | MIG-01 to MIG-05 | **HIGH — class-specific activation/reversal contract incomplete** |
| Restore / rollback | MIG-03/-04; upstream MIG precedent | **REFINEMENT REQUIRED** |
| CI / regression | VER-01/-02/-04/-10/-11/-12 | **MEDIUM — exact migration/concurrency matrix must become normative** |
| Supplier balance | SUP-06 + upstream EIS14/EIS16 | **HIGH — confirmed cross-EIS contradiction / T8 established** |
| SA-01 intersections | AUTH-02/-03, VER-02, POS-02 | **remain open; not closed by SA-05** |

# 5. Findings

## SA05-S10-F01 — EQ17-13 states the invariant correctly but does not yet define a physically executable one-transaction composition

**Severity:** HIGH  
**EIS IDs:** `EIS17-TXN-03`, `TXN-04`, `TXN-10`, `HOLD-17`, `MIG-01`  
**Classification:** unresolved feasibility / architecture hold  
**Confidence:** HIGH  
**Disposition:** CORRECTION / RESOLUTION REQUIRED; M17-9 and all dual-domain paths remain blocked

### Evidence

`EIS17-TXN-03` correctly requires the Ledger effect, inventory movements, source-event state and event link to commit in **one database transaction or none**, and explicitly rejects:

- sequential independent calls;
- compensating cleanup as a substitute for atomicity;
- eventual reconciliation as a substitute for atomicity.

It also correctly prohibits a second Ledger writer.

The current repository baseline identified by the EIS has distinct domain operations:

- SB-P-1.14 governed Ledger command ownership;
- existing `create_inventory_movement` inventory command;
- POS/source state owned by SB-P-1.17.

A sequence of PostgREST/server calls to these operations would create distinct transactions and therefore cannot satisfy TXN-03.

### Independent challenge

The Stage 7 review treated this mainly as “choose a one-transaction composition later.” Stage 10 needs a stronger contract.

The EIS does not yet state the actual PostgreSQL invocation topology that makes the guarantee true.

At minimum, one database entry point must own the transaction boundary and invoke/perform the approved Ledger and stock sub-effects *inside that same transaction*. The EIS must define whether this is:

1. a new coordinating governed command that calls approved database-internal suboperations; or
2. an upstream refactoring exposing transaction-composable internal primitives while preserving exactly one public Ledger writer.

The EIS must not leave this to application/server orchestration.

### Required physical contract

Before EIS Lock for this path, specify:

- one database transaction entry point;
- exact command owner/security mode;
- authoritative business/principal derivation;
- confirmation/decision binding;
- source-event claim and idempotency key ownership;
- deterministic lock order across source event, authority rows, Ledger target and inventory items;
- same-business validation for every linked row;
- Ledger write(s), movement write(s), source outcome and event-link write in one transaction;
- failure at any intermediate point rolls back all effects;
- unknown outcome resolves by one committed outcome identity before retry;
- no nested path can independently commit;
- no duplicate public Ledger command is introduced.

### Failure mode

A server function:

1. commits `create_transaction_governed`;
2. then calls `create_inventory_movement`;
3. second call fails.

The Ledger now contains revenue/expense without the corresponding stock effect. A retry risks duplicate financial effect unless carefully reconciled. This directly violates INV-A2.

### Correction owner

SB-P-1.17 EIS owner with SB-P-1.14 Ledger command owner and SB-P-1.12 authorization/kernel owner.

### Trigger decision

- **T8: WATCH.**
- No impossibility has been demonstrated.
- If the locked SB-P-1.14/SB-P-1.12 interfaces cannot safely expose a single-transaction composition without contradictory authority or a second Ledger writer, return to Mission Control for T8 disposition.

---

## SA05-S10-F02 — MC410-R01 remains a real principal/authority gap; service_role plus source authentication is not a merchant principal

**Severity:** HIGH  
**EIS IDs:** `EIS17-POS-02`, `ARC-03`, `ARC-04`, `AUTH-01`, `SEC-01`, `SEC-03`, `HOLD-15`  
**Upstream:** SB-P-1.12 `EIS-KER-02`, `EIS-KER-06`, `EIS-ISO-04`, `EIS-ID-05`  
**Classification:** unresolved authorization dependency  
**Disposition:** OPEN; API/webhook protected-write path remains blocked

### Evidence

The EIS correctly states:

- a POS/provider source is authenticated separately from merchant authorization;
- external provider/source identity is business-scoped data, not a principal;
- `integration` is a channel, not authority;
- service-role paths must follow `EIS-ISO-04`;
- no fifth principal is assumed.

The difficulty is deeper than “we have not written the route yet.”

SB-P-1.12 `EIS-ISO-04` assumes a server function can:

1. resolve a verified principal;
2. ask the kernel for a decision;
3. bind privileged operations to that principal/business/action/object decision.

A provider webhook authenticates a **source**, not an Owner/Manager/participant person. Therefore EIS-ISO-04 cannot be satisfied merely by validating the provider credential and then using `service_role`.

### Required correction / resolution

The EIS must choose one governed architecture:

- raw/provider intake is non-authoritative transport state only, and a later merchant-authorized/background rule path performs protected business effects; or
- an existing approved automation/delegation primitive can validly derive an acting principal and business/action/object authority from a stored merchant authorization; or
- a separately governed SB-P-1.12 amendment introduces the needed principal/authority representation.

Whichever is selected must define:

- credential → source identity mapping;
- immutable source → business binding;
- who created/approved that binding;
- action/object limits;
- revocation and authority epochs;
- cross-business denial;
- service-role predicates;
- audit provenance;
- what raw state may be stored before merchant authorization;
- what protected effects remain impossible until a valid merchant authority exists.

### Failure mode

A valid credential mapped to Business A supplies a forged Business B ID and the service-role handler trusts the request body or treats source authentication as business authority.

### Correction owner

SB-P-1.12 authority owner with SB-P-1.17 EIS owner.

### Trigger decision

- **T8: WATCH.**
- No impossibility proven.
- If no route exists inside the approved four-principal/automation architecture, Mission Control must disposition the upstream amendment question.

---

## SA05-S10-F03 — TXN-09 contains a wording ambiguity that can be read as silently deciding MC410-R02

**Severity:** HIGH  
**EIS IDs:** `EIS17-TXN-09`, `HOLD-16`, `MIG-01`  
**Classification:** documentary under-specification / hold-preservation defect  
**Disposition:** FINDING-SCOPED EIS REFINEMENT REQUIRED

### Evidence

TXN-09 contains both statements:

- “Unresolved mapping blocks only the movement that needs it.”
- posting timing for financially trusted but inventory-unmapped events is **held**, with neither automatic posting nor mandatory suppression selected.

Those are not safely equivalent.

The first sentence can be implemented as:

> “Ledger posting may proceed while inventory waits.”

But the second sentence says exactly that timing decision is not yet made.

### Minimum correction

Refine TXN-09 so that:

- inventory mapping failure blocks the stock movement;
- it does **not by itself decide** whether the financial event posts now, later or remains held;
- while MC410-R02 is open, the implementation stores only the evidence/state that the accepted hold allows and does not select either financial policy;
- once Mission Control/SB-P-1.14 authority decides timing, the path must still use one governed Ledger command and one outcome per source event.

### Failure mode

Engineering reads “blocks only the movement” literally and deploys immediate revenue posting before the authority decision.

### Correction owner

SB-P-1.17 EIS owner with SB-P-1.14 Ledger authority / Mission Control.

### Trigger decision

No new T1–T8 trigger established. The existing hold already captures the unresolved product/financial authority question.

---

## SA05-S10-F04 — Dual-domain reversal requires the same atomic coordinator discipline as original posting

**Severity:** HIGH  
**EIS IDs:** `EIS17-TXN-06`, `TXN-07`, `TXN-05`, `HOLD-18`  
**Classification:** unresolved feasibility / architecture hold  
**Disposition:** CORRECTION / RESOLUTION REQUIRED before reversal path acceptance

### Evidence

TXN-06 correctly requires:

- originals never mutate;
- reversals/voids are linked events;
- if the original event wrote both Ledger and stock, compensating effects must happen in both atomically;
- if SB-P-1.14 has no representation for the required financial reversal, the path stops.

That is directionally correct, but not an executable architecture.

### Required contract

The EIS must define:

- reversal identity (source reversal ID and governed request key);
- exact linkage to the original committed source outcome;
- one-winner replay semantics;
- out-of-order reversal hold;
- one DB transaction for financial reversal + compensating movement(s) + source-event/outcome state;
- deterministic lock order;
- authorization at commit;
- unknown-outcome lookup;
- no delete/update of originals;
- no generic “expense” or “sale” fabrication if the upstream Ledger lacks the correct semantic representation.

### Failure mode

Stock compensation commits but financial correction fails, or vice versa, leaving the economic event half-reversed.

### Correction owner

SB-P-1.17 + SB-P-1.14 financial command owner.

### Trigger decision

- **T8: WATCH.**
- Actual impossibility is not established.
- If the upstream Ledger cannot represent the required reversal without changing locked Product Truth, escalate.

---

## SA05-S10-F05 — Closing completeness architecture is directionally sound; HOLD-19 must remain and manual attestation needs a precise authority/evidence contract

**Severity:** MEDIUM  
**EIS IDs:** `EIS17-CC-02`, `CC-03`, `CC-04`, `CC-06`, `HOLD-19`  
**Classification:** refinement required; no contradiction found  
**Disposition:** HOLD PRESERVED

### Evidence

CC-03 correctly rejects “no detected gap” as proof of completeness and requires positive per-source evidence such as:

- sync watermark/cursor;
- declared export interval;
- authorized manual attestation.

CC-02 correctly enforces UNKNOWN > REVIEW-REQUIRED > PARTIAL > COMPLETE and prohibits zero-fill and fabricated timestamps.

### Required refinement

For manual attestation, define:

- which approved capability/principal can attest;
- exact business and period binding;
- source identity being attested;
- cutoff/timezone version;
- what statement is being attested (for example, “this export covers X to Y” rather than “there were no missing sales”);
- immutable audit/provenance;
- how a later correction invalidates/reopens the close;
- no manual attestation can fabricate data a configured source was expected to supply unless the locked decision table expressly permits that case.

### Trigger decision

No new T1–T8 trigger. HOLD-19 remains correct.

---

## SA05-S10-F06 — EIS17-SEC-02 is internally incomplete: protected writes cannot generally be SECURITY INVOKER after direct caller DML is revoked

**Severity:** HIGH  
**EIS IDs:** `EIS17-SEC-01`, `SEC-02`, `SEC-03`, `ARC-04`, `AUTH-01`, `MIG-01`  
**Upstream:** SB-P-1.12 `EIS-ISO-02`, `EIS-ISO-03`, `EIS-ISO-10`  
**Classification:** executable architecture defect / security-mode under-specification  
**Disposition:** EIS REFINEMENT REQUIRED BEFORE LOCK

### Evidence

The EIS says:

- writes go only through commands;
- direct client DML on protected tables is removed;
- `SECURITY INVOKER` is the default;
- any definer function uses the narrow SB-P-1.12 executor model.

In PostgreSQL, a `SECURITY INVOKER` function executes with the caller's privileges.

Therefore, if `authenticated` has had direct INSERT/UPDATE/DELETE removed from a protected table, an invoker write function cannot perform that DML unless the caller still has the underlying table right — which would undermine the command-only boundary.

The current Owner-only inventory command being `SECURITY INVOKER` is not proof that this remains valid after the SB-P-1.12 command-only cut-over.

### Minimum correction

Clarify SEC-02:

- readers and operations that need no privilege elevation may be SECURITY INVOKER;
- a protected write command whose caller lacks underlying DML must use the approved narrow executor / SECURITY DEFINER command pattern, or an explicitly locked equivalent upstream mechanism;
- never re-grant broad direct table DML merely to make an invoker command executable;
- every definer has:
  - NOLOGIN/NOINHERIT owner;
  - minimum object/column grants;
  - hardened fixed/empty `search_path`;
  - schema-qualified references;
  - no PUBLIC/anon EXECUTE;
  - kernel/confirmation checks inside the command;
  - explicit overload/signature retirement at cut-over.

### Failure mode

Implementation preserves “SECURITY INVOKER by default” for a new write command and discovers it cannot write after authenticated DML is revoked; the tempting workaround is to re-grant table DML and silently reopen the bypass.

### Correction owner

SB-P-1.17 EIS owner with SB-P-1.12 security/command architecture owner.

### Trigger decision

No T8. This is a technical representation correction inside approved command-only Product Truth.

---

## SA05-S10-F07 — Migration requirements are correct at principle level but do not yet contain the class-specific rollback/rehearsal contract they require

**Severity:** HIGH  
**EIS IDs:** `EIS17-MIG-01` to `MIG-05`, `VER-10`, `VER-12`  
**Classification:** migration-package under-specification  
**Disposition:** REFINEMENT REQUIRED BEFORE EIS LOCK / migration-plan activation

### Evidence

MIG-03 says:

> Each class states pre-data reversibility and the point after which only forward-fix applies.

The reviewed EIS does not actually provide that M17-1…M17-9 class-by-class matrix.

MIG-04 also says rehearsal requires freshly verified `smart-business-test`, but it does not define the minimum fresh evidence set.

### Required class-specific matrix

For M17-1 through M17-9, the EIS should name:

- upstream dependency that must exist before install;
- install order;
- activation gate;
- transaction boundary of the migration;
- lock-sensitive operations;
- backfill/no-backfill rule;
- historical-data invariant;
- pre-data reversal;
- point of no safe rollback;
- forward-fix strategy after valid new data exists;
- old-app/new-schema compatibility if an interval exists;
- exact generated-type synchronization point;
- required T1/T2/regression evidence.

### Fresh test-rehearsal minimum

Before any migration rehearsal claim:

- exact test project identity;
- current migration ledger;
- current relevant schema/constraints;
- current RLS/policy/effective grant inventory;
- creator-role default privileges;
- function signatures/owners/security modes;
- representative data/row-count/lock characteristics for live-table changes;
- no unexpected drift;
- explicit recording of environment-specific historical migration exceptions.

### Restore/backup distinction

The EIS is correct that PITR is disaster recovery rather than routine rollback.

Before any production execution authorization, require separately verified:

- current backup/PITR/restore capability;
- recoverable point/window;
- operator authority;
- restore runbook/escalation;
- decision boundary for logical forward-fix versus disaster restore.

A backup plan is not a substitute for a reversible migration design.

### Trigger decision

No T1–T8 trigger. This is an implementation-safety refinement.

---

## SA05-S10-F08 — EIS17-SUP-06 has a confirmed cross-EIS contradiction: SB-P-1.16 does not define supplier payable balance

**Severity:** HIGH  
**EIS ID:** `EIS17-SUP-06`  
**Upstream:** SB-P-1.14 `EIS14-LDG-02`; SB-P-1.16 `EIS16-LDG-02`, `EIS16-BAL-01`, `EIS16-CAD-03`  
**Classification:** confirmed documentary contradiction  
**Disposition:** CORRECTION REQUIRED; dependent supplier balance/payable derivation stops  
**T8:** **ESTABLISHED**

### Evidence

SUP-06 states supplier-side `owed_by_business` credit/payment uses:

1. the SB-P-1.14 direction model; and
2. the SB-P-1.16 balance contract.

Part 1 is supported:

- EIS14-LDG-02 defines `owed_to_business` / `owed_by_business`.

Part 2 is contradicted by the locked SB-P-1.16 EIS:

- EIS16-LDG-02 explicitly says supplier-side `owed_by_business` belongs to SB-P-1.17;
- EIS16-BAL-01 defines **customer balance** over attributed `owed_to_business` / credit-method-sale targets;
- EIS16-CAD-03 uses a provisional customer-scoped `owed_by_business` credit for **customer advance**, not supplier payable.

Therefore no locked SB-P-1.16 supplier-balance contract exists to reuse.

### Minimum correction

SUP-06 must say:

- direction reuses EIS14-LDG-02;
- supplier payable/balance semantics are owned by SB-P-1.17 unless/until an explicit shared upstream contract is approved;
- customer `EIS16-BAL-01` is not reused;
- customer advance is not supplier liability;
- no customer/supplier netting;
- goods receipt never creates supplier payment;
- payment/repayment target semantics remain held unless a governed supplier representation is specified.

### Failure mode

Engineering broadens EIS16-BAL-01 to include `owed_by_business`, accidentally mixing customer advances and supplier payables, or it filters only `owed_to_business` and silently omits supplier liabilities.

### Correction owner

SB-P-1.17 EIS owner with SB-P-1.14/SB-P-1.16 financial authority owners.

### Trigger decision

**T8 ESTABLISHED — exact EIS-to-EIS documentary conflict.**

This does not prove the supplier-payable feature is technically infeasible. It proves the current cross-EIS reuse claim is false and must be corrected before dependent lock/implementation.

---

## SA05-S10-F09 — CI and regression clauses need a normative migration/concurrency evidence matrix, not only path-filter inclusion

**Severity:** MEDIUM  
**EIS IDs:** `EIS17-VER-01`, `VER-02`, `VER-04`, `VER-10`, `VER-11`, `VER-12`; `MIG-01` to `MIG-05`  
**Classification:** verification under-specification  
**Disposition:** REFINEMENT REQUIRED BEFORE EIS LOCK

### Evidence

The EIS correctly requires:

- T2 integration tests;
- negative tests;
- replay/concurrency/lost-response tests;
- Full Assurance path-filter inclusion;
- inventory regression;
- one T2 closing test per decision-table row.

What is missing is a single normative migration-safety matrix binding those clauses to the high-risk M17 paths.

### Minimum mandatory T2/migration coverage

At minimum:

**Atomicity / EQ17-13**
- fail after Ledger sub-write before movement → whole transaction absent;
- fail after first movement before Ledger/outcome completion → whole transaction absent;
- lost response after commit → lookup, no replay;
- concurrent same source event → one committed outcome;
- same request key/different fingerprint → reject.

**Reversal**
- dual-domain reversal commits both compensating effects or neither;
- duplicate reversal returns same outcome;
- reversal-before-original held;
- authority revoked before commit → no effect.

**RLS/effective access**
- actual effective ACL matrix for PUBLIC/anon/authenticated/service_role/executor/creator-role defaults;
- every function overload/signature has intended EXECUTE;
- unauthorized direct DML fails;
- service_role alone provides no business authority;
- cross-business source/business forgery fails.

**Migration**
- exact current ledger → candidate migrations → expected ledger;
- class ordering;
- failed migration leaves no usable half-activated authority path;
- pre-data revert where promised;
- post-use forward-fix scenario;
- type regeneration and old/new compatibility;
- all 17 inventory tests unchanged;
- clean-enough fresh-environment replay under documented historical exceptions.

**Closing**
- every §20.9.2 row and precedence;
- missing source never COMPLETE;
- late correction reopens as REVIEW-REQUIRED.

### Trigger decision

No T1–T8 trigger. This is verification contract completion.

# 6. MC410-R01 and MC410-R02 explicit answers

## MC410-R01

**OPEN.**

The current EIS correctly rejects an invented fifth integration principal but does not yet provide a kernel-compatible provider/API intake authority route.

A service-role path cannot convert source authentication into merchant authorization.

HOLD-15 remains load-bearing.

## MC410-R02

**OPEN.**

The current EIS correctly refuses to choose automatic posting or blanket suppression, but TXN-09 should be tightened so “mapping blocks only movement” cannot be interpreted as pre-authorizing Ledger posting.

HOLD-16 remains load-bearing.

# 7. EQ17-13 feasibility judgment

**Feasible in principle, not demonstrated or fully specified.**

PostgreSQL can provide the required atomicity if all domain effects execute under one database transaction boundary.

The current EIS does not yet show that the locked Ledger and inventory interfaces can be composed that way without:

- a second Ledger writer;
- authority bypass;
- re-granting protected table DML;
- non-atomic sequential RPCs.

Therefore:

- no impossibility finding;
- no PASS;
- HOLD-17 remains;
- T8 remains WATCH for feasibility.

# 8. RLS / effective privilege architecture judgment

The EIS has the correct birth-safe direction:

- revoke browser-role privilege;
- RLS before grant;
- neutralize function EXECUTE;
- fixed search path;
- explicit service-role treatment;
- verify effective state and creator defaults.

But the EIS must refine the **function security mode of write commands** as described in F06.

A migration must also ensure default grants cannot create a committed interval where a new object is client-usable before its explicit revokes/policies are in force.

For transactional DDL, create + revoke + RLS + policy/grant installation should commit together wherever PostgreSQL permits. Any non-transactional step must remain unreferenced/unactivated until the full effective-access verification gate passes.

No deployed-state PASS is claimed.

# 9. Migration sequence and cut-over judgment

The EIS install-versus-activate distinction is correct and should remain.

Recommended dependency shape, without authoring SQL:

1. upstream D12/D14/DTX/D15/D16 foundations proven;
2. additive stock/type structures;
3. supplier/threshold/reorder support state;
4. POS raw/normalized/mapping support may install while protected effects remain disabled;
5. RLS/grants/functions born closed;
6. atomic M17-9 coordinating path implemented and independently verified;
7. DTX cut-over complete; no direct transaction DML/legacy competing writer;
8. only then activate POS → Ledger/stock effects;
9. counter/closing readers activate only when source completeness and privacy holds permit;
10. production only after fresh test rehearsal, regression, backup/PITR evidence and separately authorized release.

No M17 class is executable by this report.

# 10. Rollback / forward-fix / restore judgment

Three distinct mechanisms must remain separate:

**Pre-use rollback**
- permitted only where no valid new M17 state depends on the structure;
- must be rehearsed per class.

**Post-use forward fix**
- required once new movements, POS events, mappings, supplier links, threshold state, requests, closing versions or dual-domain event links exist;
- no destructive history rewrite merely to restore the old schema.

**Disaster restore**
- backup/PITR only for catastrophic environment recovery;
- not the normal rollback for a logical migration;
- requires current provider evidence and separate execution authority.

# 11. SA-01 intersections preserved

SA-05 does not close:

- SA01-S10-F01 — POS intake authority;
- SA01-S10-F02 — exact Manager scope encoding;
- SA01-S10-F03 — Manager Reference Cost positive path;
- SA01-S10-F04 — normative negative security matrix.

F06 in this report strengthens, rather than replaces, the SA-01 database-security analysis.

# 12. T1–T8 disposition

| Trigger | SA-05 Stage 10 disposition |
|---|---|
| T1 | NOT ESTABLISHED |
| T2 | NOT ESTABLISHED |
| T3 | NOT ESTABLISHED |
| T4 | NOT ESTABLISHED |
| T5 | NOT ESTABLISHED |
| T6 | Existing WATCH preserved; no new T6 established |
| T7 | NOT ESTABLISHED |
| T8 | **ESTABLISHED for F08 only** — SUP-06 cross-EIS supplier-balance contradiction. **WATCH** remains for EQ17-13, MC410-R01 and dual-domain reversal feasibility. No actual impossibility otherwise demonstrated. |

# 13. Required corrections / owners summary

| Finding | Severity | Owner | Required before |
|---|---|---|---|
| F01 atomic composition topology | HIGH | SB-P-1.17 + SB-P-1.14 + SB-P-1.12 | M17-9 / dual-domain path lock |
| F02 POS authority route | HIGH | SB-P-1.12 + SB-P-1.17 | API/webhook intake lock |
| F03 TXN-09 timing ambiguity | HIGH | SB-P-1.17 + SB-P-1.14 | trusted/unmapped path lock |
| F04 reversal coordinator | HIGH | SB-P-1.17 + SB-P-1.14 | dual-domain reversal lock |
| F05 closing attestation contract | MEDIUM | SB-P-1.17 + source/time owners | COMPLETE closing activation |
| F06 SECURITY INVOKER write-command defect | HIGH | SB-P-1.17 + SB-P-1.12 | EIS Lock / write-command design |
| F07 migration/rollback class matrix | HIGH | SB-P-1.17 migration owner | migration-plan activation |
| F08 SUP-06 cross-EIS contradiction | HIGH | SB-P-1.17 + SB-P-1.14/1.16 financial owners | supplier balance/payable lock |
| F09 normative CI/migration matrix | MEDIUM | SB-P-1.17 verification owner | EIS Lock / implementation evidence |

# 14. Confirmed contradiction vs unresolved feasibility vs proposed representation

## Confirmed contradiction

- **F08 / SUP-06**: EIS17 claims SB-P-1.16 supplier balance reuse; EIS16 explicitly scopes BAL-01 to customer `owed_to_business` and assigns supplier `owed_by_business` to SB-P-1.17.

## Unresolved feasibility

- EQ17-13 atomic Ledger/stock composition;
- POS/API merchant-authority route under four-principal kernel;
- atomic dual-domain reversal.

These are held. None is proven impossible.

## Proposed technical representations needing refinement

- TXN-09 mapping/timing wording;
- write-command invoker/definer boundary;
- class-specific rollback/rehearsal matrix;
- manual closing attestation contract;
- normative migration/concurrency test matrix.

# 15. Runtime/evidence limitation

This review is documentary only.

No SQL was executed.  
No migration or CLI command was executed.  
No Supabase provider/project was accessed.  
No POS was connected.  
No test or runtime scenario was executed.  
No live grant/RLS/function state was inspected.  
No backup/PITR state was inspected.  
No application code was changed.  
No EIS/Blueprint/FCTM source was changed.  
No implementation, deployment, EIS approval or EIS Lock is authorized.

Repository intent is not deployed-state proof.

# 16. Recommendation to Mission Control

**SA-05 RESULT: REFINEMENT REQUIRED.**

Do not lock the EIS until, at minimum:

1. F06 write-command security-mode contract is corrected;
2. F08 SUP-06 cross-EIS contradiction is reconciled;
3. F01/F04 physical atomic composition requirements are made executable enough for later implementation and verification;
4. F02 MC410-R01 remains explicitly held or is governed by a separately approved authority route;
5. F03 preserves MC410-R02 without implying posting timing;
6. F07/F09 migration, rollback and verification obligations become class-specific/normative.

Existing open holds remain open unless Mission Control separately disposes them.

**STOP FOR MISSION CONTROL SA-05 REVIEW DISPOSITION.**
