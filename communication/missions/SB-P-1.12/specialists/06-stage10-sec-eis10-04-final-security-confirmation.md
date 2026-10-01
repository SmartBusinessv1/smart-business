# SB-P-1.12 — Final Security Confirmation of SEC-EIS10-04

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Stage:** 10 — EIS Review  
**Reviewer:** Security & Permissions Architecture — existing specialist room  
**Authority:** MC-163 / `communication/live/instruction1.29.md` and `communication/missions/SB-P-1.12/mission-control/35-stage10-sec-eis10-04-final-security-confirmation-authorization.md`  
**Work package:** `SB-P-1.12-WP-STAGE10-SEC-EIS10-04-FINAL-CONFIRMATION`  
**Review type:** Final finding-scoped exact-delta confirmation  
**Status:** SUBMITTED FOR MISSION CONTROL DISPOSITION — EIS NOT ACCEPTED OR LOCKED

## 1. Exact target and canonical basis

| Item | Exact identity reviewed |
|---|---|
| Canonical main used to hydrate and branch | `2e9531b2ce20604bd0e4b0500f8b54a2aa30e893` |
| PR | `#687` |
| Exact candidate head | `fd94d09fcc3a581bad7ae1a3d345cef92f464c81` |
| EIS v0.4 path | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` |
| Exact EIS v0.4 blob | `7879c106474b71d2ea70f7355db69a4ee61f0e37` |
| Refinement handover | `communication/live/report1.28.md` |
| Refinement handover blob | `d52fb1efad8ccfd09090d04dbfd8ad09f5e72a4b` |
| Prior Security delta re-review | `communication/missions/SB-P-1.12/specialists/05-stage10-eis-security-delta-rereview.md` |
| Prior Security delta re-review blob | `363da0024c86f11055a4954b13aa63af3f0ec999` |
| Locked Blueprint blob | `77d52096c020668311b039721a4de9248ddd460e` |
| Canonical FCTM blob | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| Founder Decision Record 09 blob | `84d61d4d62cc33ae81ec372ac725059665ebc9d9` |

Independent delta verification:

- candidate head `fd94d09fcc3a581bad7ae1a3d345cef92f464c81` is exactly one commit ahead of the previously reviewed head `022aefbd49f483b8bca1ad469fd8980718670f67`;
- the exact delta touches the six MC-161-authorized paths only;
- EIS requirement count remains 81;
- requirement-to-row links remain 463;
- 267/267 `IN SCOPE` FCTM rows remain represented;
- no behavior-adding orphan is introduced;
- EIS §§12, 15, 16, 17 and 22 remain unchanged from v0.3;
- GitHub Actions has no workflow run/status on the exact candidate head; no CI success is claimed.

## 2. Review boundary

This review confirms `SEC-EIS10-04` only.

The ten findings already closed at design level under the prior Security delta re-review were not reopened except to check whether the v0.4 change directly conflicted with them.

No SQL, schema, migration, application, provider or production action was executed.

## 3. SEC-EIS10-04 final status

**Status: CLOSED AT DESIGN LEVEL**

EIS v0.4 fully resolves the exact residual design defects identified in the prior Security re-review.

### 3.1 Business lifecycle state is serialized

EIS §10.2 now explicitly places **business lifecycle status** on the business authority-state row alongside memberships, grants, entitlements/account-security state, participant bindings, support grants, automation rules and transfer state.

`EIS-CNF-02` mirrors that rule and explicitly includes business lifecycle status `active` / `deleted` among the mutable authority facts the kernel can rely on.

This aligns the serialization set with §8.1, where authorization requires the requested business to exist with lifecycle status `active`.

**Finding:** satisfied at design level.

### 3.2 Lifecycle transitions contend and increment the epoch in the same transaction

Section 10.2 now states that any change capable of turning an allow into a deny takes `FOR UPDATE` on its serialization row, applies the change and increments the epoch in the same transaction.

It expressly includes every business lifecycle transition that can change authorization, including governed deletion and tombstoning under `EIS-ESC-06`.

The stated consequence is correct: a protected operation cannot commit on an allow decision based on an active business after the business has concurrently become deleted.

**Finding:** satisfied at design level.

### 3.3 Every relied-on person row is locked

The correction no longer limits serialization to the initiating principal's person row.

A consequential command or protected read must now take `FOR SHARE` on **every person row whose current state the decision relies on**.

`EIS-CNF-02` repeats this requirement explicitly.

This closes the prior gap for decisions involving multiple current identities, including bilateral transfer.

**Finding:** satisfied at design level.

### 3.4 Multiple same-type rows use deterministic ordering

The EIS now defines lock order by row type:

1. global authority-registry row;
2. person rows;
3. business authority-state row.

Within a row type, rows are locked in **ascending canonical UUID order**.

That is sufficiently explicit at design level to remove the prior same-type ordering/deadlock ambiguity.

**Finding:** satisfied at design level.

### 3.5 Ownership transfer locks and revalidates both Owner persons plus the business row

`EIS-FRL-04` now requires transfer completion to:

- lock the current Owner person row;
- lock the incoming Owner person row;
- order those person locks by ascending UUID;
- then take `FOR UPDATE` on the business authority-state row;
- revalidate both identities and both approvals in the same transaction;
- perform former/new Owner membership changes, `owner_id` mirror update and authority-event recording in that transaction.

This is coherent with the one-active-Owner invariant and with the complete authority serialization rule.

**Finding:** satisfied at design level.

### 3.6 EIS-KER-01 matches the §8.1 authority-epochs result contract

`EIS-KER-01` now states that the kernel returns:

- allow or deny;
- reason code;
- verified principal;
- authority epochs of the serialization rows relied on;
- grant identifiers used;
- decision identifier.

This matches the §8.1 contract.

`membership_version` remains only a non-authoritative change detector under §10.2 / `EIS-CNF-02`, not the kernel's serialization contract.

**Finding:** satisfied at design level.

### 3.7 Directly dependent concurrency tests are sufficient at design level

Section 18.1 now explicitly includes:

- business lifecycle transition / governed deletion racing a protected operation;
- transfer completion racing a change to either Owner person row;
- lock-order determinism with several person rows;
- stale/revoked authority for every authority fact type;
- existing confirmation/idempotency concurrency cases.

This is an appropriate implementation verification plan for the corrected design.

**Finding:** sufficient at design level.

## 4. Remaining implementation and evidence dependencies

Closing `SEC-EIS10-04` at design level does **not** establish implementation/runtime correctness.

Later authorized implementation verification must still demonstrate:

1. every allow-affecting authority mutation actually takes the intended `FOR UPDATE` serialization lock and increments the correct epoch;
2. protected commands and protected service-role reads take the required `FOR SHARE` rows before authorization and remain in one transaction through the protected outcome;
3. lifecycle deletion racing an already-started protected operation exhibits the specified commit-before-change or deny-after-change behavior;
4. transfer racing disable/unlink/revocation of either Owner behaves correctly;
5. multiple-person lock acquisition follows canonical UUID ordering in implementation and does not deadlock;
6. automation, support, participant and ordinary membership paths use the same serialization abstraction;
7. error/retry handling does not bypass the lock/epoch protocol;
8. Full Assurance concurrency fixtures pass under realistic contention.

These are implementation-verification requirements, not unresolved EIS design defects.

## 5. Effect on the ten previously closed findings

No direct material conflict was introduced by EIS v0.4.

The prior design-level closure therefore remains intact for:

- `SEC-EIS10-01` — verified-principal derivation;
- `SEC-EIS10-02` — multi-business first-run rule;
- `SEC-EIS10-03` — active-Owner invariant;
- `SEC-EIS10-05` — atomic confirmation consumption;
- `SEC-EIS10-06` — privileged service-role reads/writes;
- `SEC-EIS10-07` — direct-RPC denial durability;
- `SEC-EIS10-08` — `SECURITY DEFINER` hardening;
- `SEC-EIS10-09` — non-authorizing business tombstone design;
- `SEC-EIS10-10` — future `22-§20-2` evidence package;
- `SEC-EIS10-11` — SB-P-1.13 consumption boundary.

The v0.4 transfer-lock wording strengthens, rather than weakens, the already-closed active-Owner invariant.

The lifecycle-epoch correction also removes the concurrency dependency noted under the tombstone finding without changing the tombstone design itself.

## 6. Product Truth / FCTM / Blueprint screen

### Product Truth

**No new Product Truth or Founder decision issue exists.**

The correction is strictly an engineering serialization refinement within already-approved authority, transfer, lifecycle and deletion semantics.

Founder Decision Record 09 remains unchanged and is not reopened.

### FCTM

**No FCTM correction is required.**

The canonical FCTM remains blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`.

No row, disposition, mission assignment or commercial classification changed.

### Locked Blueprint

**No locked Blueprint correction is required.**

The locked Blueprint remains blob `77d52096c020668311b039721a4de9248ddd460e`.

The v0.4 change realizes the already-approved execution-time authorization and lifecycle integrity obligations; it does not alter Product Truth.

## 7. Stage 10 security sufficiency

With `SEC-EIS10-04` now closed at design level, the eleven design findings from the independent Stage 10 Security review are all closed at the EIS design level.

Accordingly, **EIS v0.4 is security-sufficient for Mission Control Stage 10 acceptance**, subject to Mission Control's independent exact-candidate disposition.

This statement does not:

- accept or lock the EIS;
- authorize Stage 11;
- authorize implementation;
- close ESC-1;
- unblock `22-§20-2`;
- verify production state;
- replace deferred professional legal/privacy/retention validation.

## 8. Holds and authority boundaries preserved

Preserved exactly:

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
- No implementation/runtime/production claim is made.

**SECURITY DELTA ACCEPTABLE FOR MISSION CONTROL STAGE 10 DISPOSITION**

**STOP FOR MISSION CONTROL DISPOSITION.**
