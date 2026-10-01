# SB-P-1.12 — MC-159 Stage 10 Independent Security Delta Re-Review Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Security & Permissions Architecture — existing MC-33-appointed specialist room
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.27.md`
**Work package:** `SB-P-1.12-WP-STAGE10-EIS-SECURITY-DELTA-REREVIEW`
**Primary report:** `communication/missions/SB-P-1.12/specialists/05-stage10-eis-security-delta-rereview.md`
**Status:** INDEPENDENT DELTA RE-REVIEW SUBMITTED — ONE DESIGN REFINEMENT REMAINS — EIS NOT ACCEPTED OR LOCKED

## 1. Exact target

| Item | Exact reviewed identity |
|---|---|
| Canonical hydration baseline | `main@1d0307c941c54e16b149ae7210c8131c58401666` |
| PR | `#687` |
| Exact candidate head | `022aefbd49f483b8bca1ad469fd8980718670f67` |
| EIS v0.3 blob | `28f713581ffea5312f36e3508380c38539b05e90` |
| Refinement handover blob | `4a3f7bca9fb16d5b3772a2b03c8005d3809e91d5` |
| Prior Security review blob | `ddaa405f6d3145249fbcc6e29d88c9aaa229285b` |
| Locked Blueprint blob | `77d52096c020668311b039721a4de9248ddd460e` |
| Canonical FCTM blob | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |

The refinement is exactly one commit from the prior reviewed head and remains confined to the six MC-157-authorized paths.

Independent traceability re-check:

- requirements: **80 → 81**;
- only added requirement: `EIS-ISO-10`;
- FCTM row map: **267 → 267**;
- links: **460 → 463**;
- changed mappings: `21-§7`, `BP-§10.1-7`, `BP-§10.1-8`, each adding `EIS-ISO-10`;
- missing IN SCOPE rows: **0**;
- out-of-scope mapped rows: **0**;
- EIS §§12, 15, 16 and 17 are byte-identical to v0.2.

GitHub Actions has **0 workflow runs / 0 commit statuses** on the candidate head. No CI success is claimed.

## 2. Finding-by-finding disposition

| Finding | Status | Remaining dependency / issue |
|---|---|---|
| `SEC-EIS10-01` | **CLOSED AT DESIGN LEVEL** | Implement and test verified principal derivation for person, support, participant and automation paths |
| `SEC-EIS10-02` | **CLOSED AT DESIGN LEVEL** | First-run and intentional additional-business isolation tests |
| `SEC-EIS10-03` | **CLOSED AT DESIGN LEVEL** | Owner invariant and concurrent transfer implementation tests |
| `SEC-EIS10-04` | **REFINEMENT STILL REQUIRED** | Business lifecycle status is used by the kernel but omitted from the explicit business authority-state epoch; bilateral transfer does not define locking/order for both person rows; `EIS-KER-01` still describes the stale membership-version result rather than the §8.1 authority-epoch result |
| `SEC-EIS10-05` | **CLOSED AT DESIGN LEVEL** | Atomic consume/replay/idempotency concurrency tests |
| `SEC-EIS10-06` | **CLOSED AT DESIGN LEVEL** | Source-complete privileged-handler inventory and bound read/write tests |
| `SEC-EIS10-07` | **CLOSED AT DESIGN LEVEL** | Direct-RPC committed-denial and server-boundary-only independent tests |
| `SEC-EIS10-08` | **CLOSED AT DESIGN LEVEL** | Full Assurance effective EXECUTE/search-path/owner/default-ACL evidence |
| `SEC-EIS10-09` | **CLOSED AT DESIGN LEVEL** | Tombstone/retention/legal-hold implementation tests; lifecycle transition must join corrected SEC-EIS10-04 serialization |
| `SEC-EIS10-10` | **CLOSED AT DESIGN LEVEL** | Future evidence package only; `22-§20-2` remains BLOCKED |
| `SEC-EIS10-11` | **CLOSED AT DESIGN LEVEL** | Consumer-specific workstream/cut-over evidence and Mission Control acceptance |

No finding requires a Founder gate.

## 3. Required narrow refinement

For `SEC-EIS10-04` only:

1. place business lifecycle / active-deleted state explicitly under the business authority-state epoch;
2. require lifecycle transitions that can change authorization to take `FOR UPDATE` on that serialization row and increment its epoch;
3. require all person rows a decision relies on to be locked;
4. define deterministic same-type row ordering, including current and incoming Owner person rows during transfer;
5. reconcile `EIS-KER-01` with the §8.1 `principal / authority_epochs / grant_ids / decision_id` result contract.

This is an engineering concurrency refinement within locked Product Truth.

## 4. Carried gates

- `SEC-EIS10-12`: implementation-verification requirement only; Founder Decision Record 09 preserved.
- `SEC-EIS10-13`: effective-access evidence gate; G-6/T4 remains UNVERIFIED.
- `SEC-EIS10-14`: provider/legal/evidence gate; professional legal/privacy/retention validation remains deferred.
- ESC-1 remains **OPEN T8**.
- `22-§20-2` remains **BLOCKED / IN SCOPE**.
- No implementation/runtime/production claim is made.

## 5. Product Truth / FCTM / Blueprint screen

- **New Product Truth question:** none.
- **Founder gate required:** no.
- **FCTM correction required:** no.
- **Locked Blueprint correction required:** no.
- **Finding-scoped delta preserved:** yes.

The non-authorizing tombstone design does not change merchant-visible deletion meaning: the business is inactive, inaccessible and non-reactivatable while a minimal stable identity remains only where retained records or holds require it.

## 6. Stage 10 security disposition

Ten of eleven targeted findings are closed at design level. One narrow concurrency/serialization refinement remains before the EIS is security-sufficient for Mission Control Stage 10 acceptance.

**SECURITY REFINEMENT STILL REQUIRED**

**STOP for Mission Control disposition.**
