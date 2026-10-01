# SB-P-1.12 — Stage 10 Independent EIS Security Delta Re-Review

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** 10 — EIS Review
**Reviewer:** Security & Permissions Architecture — existing MC-33-appointed specialist room
**Authority:** MC-159 / `communication/live/instruction1.27.md` and `communication/missions/SB-P-1.12/mission-control/32-stage10-security-delta-rereview-authorization.md`
**Work package:** `SB-P-1.12-WP-STAGE10-EIS-SECURITY-DELTA-REREVIEW`
**Review type:** Independent finding-scoped exact-delta re-review
**Status:** SUBMITTED FOR MISSION CONTROL DISPOSITION — EIS NOT ACCEPTED OR LOCKED

## 1. Exact target and canonical basis

| Item | Exact identity reviewed |
|---|---|
| Canonical main used to hydrate and branch | `1d0307c941c54e16b149ae7210c8131c58401666` |
| PR | `#687` |
| PR state at final pre-report check | OPEN / DRAFT / UNMERGED |
| Exact candidate head | `022aefbd49f483b8bca1ad469fd8980718670f67` |
| EIS v0.3 path | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` |
| Exact EIS v0.3 blob | `28f713581ffea5312f36e3508380c38539b05e90` |
| Refinement handover | `communication/live/report1.26.md` |
| Refinement handover blob | `4a3f7bca9fb16d5b3772a2b03c8005d3809e91d5` |
| Prior Security review | `communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md` |
| Prior Security review blob | `ddaa405f6d3145249fbcc6e29d88c9aaa229285b` |
| Locked Blueprint blob | `77d52096c020668311b039721a4de9248ddd460e` |
| Canonical FCTM blob | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| Founder Decision Record 09 blob | `84d61d4d62cc33ae81ec372ac725059665ebc9d9` |

Independent delta verification:

- candidate head `022aefbd49f483b8bca1ad469fd8980718670f67` is exactly one commit ahead of the prior reviewed head `a1beda8c006ab69b28f5354b686c941384cd1e86`;
- the delta changes exactly the six MC-157-authorized paths;
- EIS requirements: **80 → 81**;
- the only added requirement is `EIS-ISO-10`;
- row-to-requirement map: **267 → 267** rows;
- requirement-to-row links: **460 → 463**;
- only the row mappings for `21-§7`, `BP-§10.1-7`, and `BP-§10.1-8` changed, each by adding `EIS-ISO-10`;
- all 267 canonical `IN SCOPE` FCTM rows are represented exactly once in the reverse table;
- no FCTM row outside `IN SCOPE` is introduced;
- EIS §§12, 15, 16 and 17 are byte-identical to EIS v0.2;
- Founder Decision Record 09 is therefore preserved unchanged in the reviewed delta.

GitHub Actions has no workflow run or commit status on candidate head `022aefbd49f483b8bca1ad469fd8980718670f67`. This is missing automation evidence, not CI success.

## 2. Review boundary

This is not a whole-EIS restart.

Only `SEC-EIS10-01` through `SEC-EIS10-11` were re-reviewed against EIS v0.3.

The prior review remains controlling context for all other material security areas. Findings `SEC-EIS10-12` through `SEC-EIS10-14` are carried as implementation/evidence gates unless the refinement delta conflicts with them.

No SQL was executed. No application code, schema, migration, provider or production state was changed or inspected as runtime evidence.

## 3. Executive disposition

EIS v0.3 materially corrects ten of the eleven prior design findings.

The verified-principal model, multi-business first-run rule, active-Owner invariant, atomic confirmation consumption, privileged service-role binding, direct-RPC denial durability, `SECURITY DEFINER` hardening, governed-deletion tombstone design, `22-§20-2` future evidence list and SB-P-1.13 consumption boundary are sufficient at the documentary design level.

One prior design defect remains open:

> `SEC-EIS10-04` is **not fully closed** because the new authority-epoch serialization omits a mutable fact explicitly used by the kernel — business lifecycle status — and does not define a deterministic lock set/order for the two person rows whose current state is revalidated during bilateral transfer completion.

The same correction also leaves `EIS-KER-01` describing the kernel return in terms of `membership_version`, while §8.1 now defines `authority_epochs`; this stale contract wording should be reconciled with the completed epoch model.

No new Founder/Product Truth question is created by these defects. A narrow EIS design refinement is sufficient.

---

## 4. Finding-by-finding delta re-review

### SEC-EIS10-01 — Verified-principal derivation

**Prior defect:** principal derivation was inconsistent across ordinary persons, participants, support actors and automation.

**Corrected EIS:** §7.4 `EIS-ID-01`, `EIS-ID-03`, `EIS-AUT-01`, `EIS-SUP-01`; §8.1 verified-principal table; `EIS-KER-02`; §18.1 verified-principal suite.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

EIS v0.3 now requires:

- signed-in persons to resolve from the verified JWT subject through a unique live `persons.auth_user_id`;
- support operators to use the same Auth-to-person binding and a live support grant;
- an unbound participant record to be data only, with no authority;
- participant authority only through a governed verified-principal binding to a person;
- automation to be a server-only trusted invocation derived from the stored rule and grantor authority, never caller-supplied actor data and never `service_role` possession;
- all principal types to enter one kernel and the same EIS-CNF-02 serialization.

`persons.auth_user_id` is explicitly unique when non-null, and link/unlink/relink are governed audited writes.

**New risk:** none identified at design level.

**Remaining implementation/evidence dependency**

Full Assurance must prove unique Auth binding, governed relink, unbound-participant denial, support-principal derivation, automation derivation and rejection of caller-supplied actor/service-role-as-authority.

---

### SEC-EIS10-02 — Multi-business first-run rule

**Prior defect:** first-run wording globally prohibited business creation for a person who already held any membership or invitation, conflicting with approved multi-business ownership.

**Corrected EIS:** §13 existing-membership detection; `EIS-FRL-02`.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

The correction now limits the membership/invitation check to automatic first-business creation. It explicitly permits an already-known person to intentionally create an additional business where approved lifecycle rules permit, creates an independent Owner membership, switches explicit active-business context and carries no authority across businesses.

This matches Founder Record 05 ESC1-1 and the locked Blueprint's multi-business rule.

**New risk:** none.

**Remaining implementation/evidence dependency**

First-run and additional-business tests must prove that invited users are not silently made Owner of an empty business and that intentional additional-business creation creates independent authority and isolation.

---

### SEC-EIS10-03 — Active-Owner removal invariant

**Prior defect:** generic membership revocation could be read to include the active Owner.

**Corrected EIS:** `EIS-ID-02`; §13 Removal; `EIS-FRL-03`; `EIS-FRL-04`; §18.1 Transfer and Owner invariant suite.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

The EIS now states:

- generic membership removal applies only to non-Owner memberships;
- the active Owner cannot be revoked, ended or removed through the generic path;
- Owner authority can cease only inside atomic valid transfer or governed business deletion;
- transfer updates the former/new Owner memberships and `owner_id` mirror in the same transaction;
- exactly one active Owner exists before and after the transfer commit;
- negative tests cover generic membership APIs and non-Owner principals.

**New risk:** none identified.

**Remaining implementation/evidence dependency**

DB constraints/commands and transfer tests must prove the invariant under concurrency and failure injection.

---

### SEC-EIS10-04 — Complete authority serialization

**Prior defect:** the v0.2 lock model serialized membership and explicit grants but not every mutable authority fact relied on by an allow decision.

**Corrected EIS:** §10.2; `EIS-CNF-02`; `EIS-KER-09`; `EIS-AUT-01`; `EIS-FRL-04`; §18.1 revocation/concurrency suite.

**Status: REFINEMENT STILL REQUIRED**

**What is corrected**

The new three-row epoch/lock abstraction is materially stronger:

1. global authority-registry row for capability registry / role defaults;
2. person row for principal status and Auth binding;
3. business authority-state row for membership, grants, entitlements/account-security state, participant bindings, support grants, automation rules and transfer state.

Allow-affecting changes take `FOR UPDATE`; protected operations take `FOR SHARE`; epochs detect preview drift but are not the serialization mechanism; fixed row-type order reduces deadlock risk.

This closes the original membership/grant-only defect for the authority facts it enumerates.

**Remaining design gap 1 — business lifecycle status**

The kernel's first authorization step explicitly requires the requested business lifecycle status to be `active` and denies a tombstoned `deleted` business (§8.1).

Governed business deletion explicitly mutates that lifecycle status to `deleted` (EIS-ESC-06).

However, §10.2 and `EIS-CNF-02` do not list business lifecycle status among the facts versioned/serialized by the business authority-state row.

That leaves a direct allow→deny fact outside the explicit epoch contract. A protected operation could otherwise evaluate an active business while governed deletion concurrently changes the lifecycle state unless the deletion transition is required to contend on the same business authority-state row.

**Remaining design gap 2 — bilateral transfer and multiple person rows**

`EIS-FRL-04` says transfer completion revalidates both parties.

The serialization model defines "the principal's persons row" in the singular and gives a fixed order only among row types. It does not say that transfer completion locks both the current Owner's and incoming Owner's person-state rows, nor how multiple person rows of the same type are deterministically ordered.

A transfer relies on the continuing validity of both identities/approvals. The specification therefore needs a deterministic same-type order, such as sorted person ID, and must require both relevant person rows whenever the decision depends on both.

This is the deadlock/order ambiguity MC-159 expressly required this re-review to test.

**Related contract inconsistency**

§8.1 now defines the kernel result as including `principal` and `authority_epochs`, but `EIS-KER-01` still describes the result as returning the membership version and grant identifiers. That stale wording is inconsistent with non-membership principal paths and the new epoch design.

**Precise correction required**

A narrow correction is sufficient:

1. explicitly place business lifecycle/active-deleted state under the business authority-state epoch;
2. require every lifecycle state transition capable of changing authorization, including governed business deletion, to take `FOR UPDATE` on that row and increment the epoch in the same transaction;
3. define that a decision depending on more than one person locks every relevant person row;
4. define deterministic ordering among multiple person rows, and any other repeated serialization-row type, before moving to the next row type;
5. state that transfer completion locks/revalidates both current and incoming Owner person rows plus the business authority-state row under that order;
6. reconcile `EIS-KER-01` with the §8.1 `principal / authority_epochs / grant_ids / decision_id` contract.

**New risk:** the correction itself creates no Product Truth conflict; the residual risk is a concurrency race/deadlock ambiguity in the current v0.3 design.

**Remaining implementation/evidence dependency after correction**

Full Assurance must cover lifecycle deletion racing a protected operation, person disable/unlink racing transfer, opposite-order concurrent multi-person operations, every enumerated authority fact type, and deadlock/retry behavior.

---

### SEC-EIS10-05 — Atomic confirmation consumption and replay

**Prior defect:** "single use" had no atomic consume rule.

**Corrected EIS:** §10.1; `EIS-CNF-01`; §18.1 revocation/concurrency suite.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

The commit now:

- takes authority serialization locks;
- locks the confirmation row;
- checks unused/expiry/binding/fingerprint;
- revalidates authority;
- checks idempotency;
- performs the protected write;
- stores the confirmation and idempotency outcomes in the same transaction.

Exactly one transaction performs unused→consumed. A concurrent contender waits, then receives the committed replay/consumed outcome and performs no protected write. Later replay returns the stored result without re-execution.

**New risk:** none material identified in the finding scope.

**Remaining implementation/evidence dependency**

Concurrency tests must demonstrate two simultaneous commits, process retry after commit, stale fingerprint, authority change, consumed binding and idempotency replay.

---

### SEC-EIS10-06 — Privileged service-role reads and writes

**Prior defect:** privileged writes were bound more strongly than privileged reads.

**Corrected EIS:** `EIS-ISO-04`; §9.1 handler inventory; §18.1 privileged-path suite.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

The privileged-operation contract now covers every:

- read;
- write;
- claim;
- lease;
- bookkeeping query;
- follow-up operation.

Each is bound to verified principal, business, action and object set. Query predicates must carry bound business/object scope even under `service_role`. No privileged query may derive business or actor from request values. Protected/consequential reads revalidate under EIS-CNF-02. The handler inventory must prove no unbound admin-client path remains.

**New risk:** none identified.

**Remaining implementation/evidence dependency**

The source-complete handler inventory and Full Assurance must verify all current and future admin-client paths, including catalog import and parser lease behavior.

---

### SEC-EIS10-07 — Direct-RPC denial durability

**Prior defect:** denial durability relied on a server-layer fallback even though authenticated callers could invoke RPCs directly.

**Corrected EIS:** §9.3 authenticated EXECUTE target state; §11; `EIS-AUD-02`; §18.1 denial-audit suite.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

The design now separates command families into two safe forms:

1. direct authenticated RPC is allowed only where authorization/validation denial is returned as a non-throwing committed structured outcome before protected writes, so the denial audit commits;
2. a family that can still abort after a security-relevant denial is server-boundary-only, with no authenticated `EXECUTE`, and the audited server boundary records through a separate short transaction.

Tests explicitly include direct authenticated RPC denial and proof that server-boundary-only families are not executable by `authenticated`.

**New risk:** none identified at design level.

**Remaining implementation/evidence dependency**

Independent testing remains mandatory before treating SEC-S7-07 denial durability as implemented or resolved in runtime evidence.

---

### SEC-EIS10-08 — SECURITY DEFINER hardening

**Prior defect:** the EIS did not state the accepted hardening invariants for new/replaced definer functions.

**Corrected EIS:** §9.3; new `EIS-ISO-10`; §18.1 effective-access suite; `EIS-TST-03`.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

`EIS-ISO-10` requires:

- explicit hardened empty `search_path`;
- schema-qualified references;
- immediate `PUBLIC` / `anon` EXECUTE revocation unless a separately approved anonymous workflow requires otherwise;
- narrow grants;
- `NOLOGIN NOINHERIT` owner roles with required privileges only;
- no user-controlled dynamic object names;
- Full Assurance checks of owner, security mode, search path and effective EXECUTE grants.

The new requirement's mappings are legitimate:

- `21-§7` — server/DB authorization enforcement;
- `BP-§10.1-7` — RLS/grants/function-security review;
- `BP-§10.1-8` — residual anonymous privilege remediation.

No Product Truth or FCTM disposition is changed.

**New risk:** none identified.

**Remaining implementation/evidence dependency**

Implementation must reconcile real creator-role default ACLs and effective EXECUTE grants. G-6/T4 remains the production evidence gate.

---

### SEC-EIS10-09 — Stable business identity after governed deletion

**Prior defect:** retained child rows under `RESTRICT` were incompatible with unconditional physical deletion of the parent business row.

**Corrected EIS:** §8.1 business lifecycle denial; §14.2; §14.3; `EIS-ESC-06`; §18.3 items 8–9.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

The EIS now selects a coherent tombstone mechanism:

- where retained records or holds survive, the stable `businesses.id` remains;
- lifecycle status becomes `deleted`;
- active operational state is removed;
- memberships end;
- profile fields are minimized according to record-class rules;
- retained records keep stable `business_id` scope and attribution;
- legal/dispute holds remain attached;
- the kernel denies every action on a deleted business;
- no command may reactivate it;
- it never appears as an active business;
- physical tombstone removal occurs only when no retained/held record references it and its own rule permits.

This does not change merchant-visible Product Truth: the merchant-facing business remains deleted while a non-authorizing internal identity persists only to preserve required history/holds.

**New risk:** the tombstone lifecycle transition must be added to SEC-EIS10-04 serialization; that is a concurrency correction, not a defect in the tombstone concept itself.

**Remaining implementation/evidence dependency**

Record-class, mixed-retention, hold, selector, authorization and tombstone-removal tests remain required. Legal/retention conclusions remain provisional.

---

### SEC-EIS10-10 — Future 22-§20-2 unblocking evidence

**Prior defect:** the evidence list omitted governed deletion and migration/backfill evidence mapped to the blocked durability row.

**Corrected EIS:** `EIS-ESC-07`; §18.3 items 8–10; `EIS-TST-03`.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

The future evidence list now requires:

- EIS acceptance and lock;
- implementation and independent verification of `EIS-ESC-01` through `EIS-ESC-06`;
- completed/reconciled `EIS-ESC-08` migration and backfill evidence for the target;
- post-migration source-complete FK/trigger/delete-guard inventory;
- mixed retained/deletable governed-business-deletion tests;
- legal/dispute-hold survival with stable business attribution;
- transferred-business history after former-Owner identity deletion;
- independent Security review and Mission Control disposition;
- provider/production evidence when the corresponding production claim is made.

`22-§20-2` remains explicitly **BLOCKED / IN SCOPE**.

**New risk:** none beyond the open SEC-EIS10-04 serialization refinement, which must be resolved before EIS acceptance/lock and is therefore upstream of any unblocking proposal.

**Remaining implementation/evidence dependency**

All listed evidence is future work. Nothing in v0.3 unblocks the row or closes ESC-1.

---

### SEC-EIS10-11 — SB-P-1.13 consumption boundary

**Prior defect:** SB-P-1.13 could consume the kernel contract before all enforcement/audit work it relied upon had completed.

**Corrected EIS:** §19.1 workstream consumption column; §19.5; `EIS-DEP-01`.

**Status: CLOSED AT DESIGN LEVEL**

**Evidence**

SB-P-1.13 may consume a specific capability only after:

- the EIS is locked;
- WS-A1 and WS-A2 are implemented and verified;
- WS-D is implemented/verified where confirmation or idempotency is consumed;
- WS-E is implemented/verified where authority events or denial behavior is consumed;
- every table/data family touched by SB-P-1.13 has completed its WS-A3 enforcement cut-over and isolation tests;
- Mission Control explicitly accepts the dependency evidence for that consumer.

The EIS also prohibits inferred production enforcement and temporary parallel authorization while a family awaits cut-over.

**New risk:** none identified.

**Remaining implementation/evidence dependency**

Consumer-specific evidence and Mission Control acceptance remain mandatory; G-6/T4 production state remains unverified.

---

## 5. Finding status table

| Finding | Exact corrected EIS location | Status | Remaining implementation/evidence dependency | New risk |
|---|---|---|---|---|
| `SEC-EIS10-01` | §7.4, §8.1, `EIS-ID-01`, `EIS-ID-03`, `EIS-AUT-01`, `EIS-SUP-01`, `EIS-KER-02`, §18.1 | **CLOSED AT DESIGN LEVEL** | Principal-binding and automation/support/participant tests | None |
| `SEC-EIS10-02` | §13, `EIS-FRL-02` | **CLOSED AT DESIGN LEVEL** | First-run/additional-business isolation tests | None |
| `SEC-EIS10-03` | §13, `EIS-ID-02`, `EIS-FRL-03`, `EIS-FRL-04`, §18.1 | **CLOSED AT DESIGN LEVEL** | DB invariant and concurrent transfer tests | None |
| `SEC-EIS10-04` | §10.2, `EIS-CNF-02`, `EIS-KER-09`, `EIS-FRL-04` | **REFINEMENT STILL REQUIRED** | After correction: lifecycle/transfer race and deadlock tests | Business lifecycle status omitted from explicit epoch set; bilateral transfer same-type person lock order undefined; stale `EIS-KER-01` result contract |
| `SEC-EIS10-05` | §10.1, `EIS-CNF-01` | **CLOSED AT DESIGN LEVEL** | Concurrent consume/replay/idempotency tests | None |
| `SEC-EIS10-06` | `EIS-ISO-04`, §9.1, §18.1 | **CLOSED AT DESIGN LEVEL** | Source-complete handler inventory and privileged-path tests | None |
| `SEC-EIS10-07` | §9.3, §11, `EIS-AUD-02`, §18.1 | **CLOSED AT DESIGN LEVEL** | Direct-RPC/server-boundary independent tests | None |
| `SEC-EIS10-08` | §9.3, `EIS-ISO-10`, `EIS-TST-03`, §18.1 | **CLOSED AT DESIGN LEVEL** | Effective grants/default ACL and Full Assurance proof | None |
| `SEC-EIS10-09` | §8.1, §14.2–14.3, `EIS-ESC-06`, §18.3 | **CLOSED AT DESIGN LEVEL** | Tombstone/retention/hold tests; legal input remains provisional | Lifecycle transition must participate in SEC-EIS10-04 serialization |
| `SEC-EIS10-10` | `EIS-ESC-07`, §18.3, `EIS-TST-03` | **CLOSED AT DESIGN LEVEL** | Entire future unblocking evidence package | None beyond open SEC-EIS10-04 |
| `SEC-EIS10-11` | §19.1, §19.5, `EIS-DEP-01` | **CLOSED AT DESIGN LEVEL** | Workstream implementation, family cut-over and MC consumer acceptance | None |

No finding requires a Founder gate.

## 6. Carried findings

### SEC-EIS10-12 — Reference Cost / margin

**Status:** carried as an implementation-verification requirement.

EIS §12 is byte-identical to v0.2. Founder Decision Record 09 is not reopened.

No margin formula or aggregate-only margin behavior is introduced. Reference Cost and margin remain separately delegated and Smart Business-provided margin remains separately permission-gated.

### SEC-EIS10-13 — Effective access

**Status:** carried as an evidence gate.

The addition of `EIS-ISO-10` strengthens function-security design but does not replace G-6/T4 effective-production-grant evidence.

### SEC-EIS10-14 — Provider/legal evidence

**Status:** carried as a provider/legal/evidence gate.

EIS §§15–17 are byte-identical to v0.2. Provider Auth deletion, backups/PITR and professional legal/privacy/retention validation remain deferred/evidence-gated.

## 7. Product Truth / FCTM / locked Blueprint screen

### Product Truth

**No new Founder/Product Truth question identified.**

The tombstone design is an internal non-authorizing representation required to preserve retained history and legal/dispute holds. It does not make a merchant-deleted business active, visible or reactivatable and therefore does not change approved merchant-visible deletion meaning.

The remaining SEC-EIS10-04 correction is purely an engineering concurrency/serialization refinement.

### FCTM

**No FCTM correction required.**

The canonical FCTM remains blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`.

All 267 `IN SCOPE` rows remain represented. The new `EIS-ISO-10` mappings to `21-§7`, `BP-§10.1-7` and `BP-§10.1-8` are legitimate security-mechanism traceability, not new product behavior.

### Locked Blueprint

**No locked Blueprint correction required.**

The canonical locked Blueprint remains blob `77d52096c020668311b039721a4de9248ddd460e`.

The delta implements already-approved isolation, execution-time authorization, multi-business, governed deletion and history-integrity obligations. It does not alter the locked Product Truth.

## 8. Delta-scope screen

The refinement remained finding-scoped.

- exactly one commit on the authorized EIS v0.2 head;
- exactly six MC-157 writable paths changed;
- no code, schema, SQL, migration, contract, FCTM, Blueprint, Founder record or prior specialist report changed;
- only one new EIS requirement, `EIS-ISO-10`;
- 267/267 FCTM coverage preserved;
- zero behavior-adding orphan identified;
- EIS §§12, 15, 16 and 17 unchanged.

The residual SEC-EIS10-04 issue is an incomplete correction inside the authorized finding, not evidence of unrelated architectural drift.

## 9. Holds and authority boundaries

Preserved:

- R-2 — **CLOSED / SATISFIED**.
- ESC-1 — **OPEN T8**.
- `22-§20-2` — **BLOCKED / IN SCOPE**.
- G-6/T4 — **UNVERIFIED**.
- Professional legal/privacy/retention validation — **deferred**.
- EIS — **DRAFT / NOT LOCKED**.
- Implementation package — **NOT AUTHORIZED**.
- Implementation — **NOT AUTHORIZED**.
- Schema / SQL / migrations — **NOT AUTHORIZED**.
- Provider mutation / production action — **NOT AUTHORIZED**.
- No implementation/runtime/production security claim is made.

## 10. Required next action

Return EIS v0.3 for one narrow finding-scoped refinement of `SEC-EIS10-04` only:

- add business lifecycle state to the business authority-state epoch;
- serialize lifecycle state transitions on that row;
- define deterministic locking for all person rows a decision depends on, including both parties to transfer;
- reconcile `EIS-KER-01` with the authority-epoch kernel result.

The other ten re-reviewed design findings need no further EIS correction on the evidence reviewed.

**SECURITY REFINEMENT STILL REQUIRED**

**STOP for Mission Control disposition.**
