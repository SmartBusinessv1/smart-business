# SB-P-1.18 — Founder Product Decision Record `18:FPDR-6`: External Delivery Staff Participation and Order Stock Timing

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.3 Stage 7 — Engineering Review (gated); Founder decisions on two T3 items found at Stage 7
**Status:** `FOR REVIEW — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor. Drafted read-only under MC-664. That handoff did not authorize repository publication
**Publication authority:** only a separate, bounded Mission Control Git-write grant under Protocol §16
**Decision identifier:** `18:FPDR-6` is proposed; Mission Control assigns the final identifier (MC-663)
**Baseline:** `main@02bdfd51a8077c74e8fcc5c7500b399936a262e0`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This record amends no Source, contract, Blueprint, FCTM row or upstream EIS. It records two Founder Product Truth selections and one authority rule. Their FCTM, Blueprint and engineering-document consequences are reconciled separately (Section 7).

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder statement (verbatim)** | Section 1.1 only | The Founder |
| **Option text the selections refer to** | Section 1.2 | None. It is MC-663's wording, not the Founder's |
| **Mission Control interpretation and boundaries** | Section 2 | Mission Control (MC-664), subordinate to Section 1.1 |
| **Definition Actor restatement and accounting** | Sections 3 to 7 | None. Section 1.1 prevails |

## 1. The decision

### 1.1 Verbatim Founder statement

The statement is reproduced from MC-664 (PR #1101 comment 6533009822, `created_at` = `updated_at` 2026-10-30T20:40:08Z), with only that comment's blockquote markers removed. The whole statement is reproduced.

```text
FOUNDER DECISION — MC-663
D1: D1-A — Approve limited external Delivery Staff invitation and acceptance through existing sign-in and purpose-scoped participant binding.
D2: D2-P — Stock consumption at packing, with authorized staff confirmation of physical return before restocking.
Negative-stock override: Owner and explicitly delegated Manager only.
Record these selections against MC-663 on PR #1101; do not modify Git or treat as Blueprint lock.
```

The Founder's "do not modify Git" applied when the selection was made. This record reaches the repository only under a separate Mission Control grant.

### 1.2 The options the selections refer to (MC-663, PR #1101 comment 6532962431; not the Founder's words)

**D1-A:**

> **D1-A — Approve limited external Delivery Staff invitation/acceptance (recommended for source-complete delivery capability):** Merchant with the relevant permission issues a purpose-limited invitation to an identified external delivery person, shares the invitation through an existing merchant-controlled channel (no new outbound Smart Business messaging integration or OTP), person signs in with supported email/password or Google and explicitly accepts the pending business participant binding. First-run detects the pending binding and does **not** divert the person into business creation. Only assigned deliveries accessible; invitation/binding revocable, auditable, and scoped. SB-P-1.12 owns kernel/binding; SB-P-1.18 owns delivery actions. Any additional onboarding/channel behavior needs distinct approval.

**D2-P:**

> **D2-P — Deduct when each line quantity is packed**: displayed stock reflects packed goods sooner; packing staff see shortage/negative-stock warning; stock and financial recognition are separate events; changed/cancelled/failed deliveries require linked compensating movements. Founder must specify restock rule for goods returned from a failed/cancelled delivery: only after authorized staff confirm physical return (recommended for food/perishables) or automatically.

**Negative-stock gate:**

> **D2 common negative-stock gate:** Founder to specify who may approve a negative-stock override: Owner only, or Owner and explicitly delegated Manager (recommended); never default to Employee/Delivery Staff/AI. Retain existing negative-stock confirmation and audit.

The Founder selected D1-A, D2-P with "authorized staff confirmation of physical return before restocking", and "Owner and explicitly delegated Manager only".

## 2. Mission Control interpretation and boundaries (MC-664, verbatim extracts)

> **D1-A:** The merchant-authorized, purpose-scoped invitation and explicit acceptance for an external Delivery Staff participant is APPROVED as narrowly presented in MC-663. Use existing supported sign-in (email/password or Google), verified signed-in person and SB-P-1.12 governed participant binding; no phone OTP, new auth provider, new messaging channel, global staff membership, separate authority kernel, or unrestricted dashboard access.

> **D2-P:** Stock **decreases when each applicable line quantity is packed**, via a governed, idempotent order-linked stock event; no confirmation-time reservation is approved. If a packed line is cancelled, undelivered or physically brought back, stock may be increased only **after authorized staff confirm the goods have physically returned** (and any necessary condition/wastage treatment follows the already-approved stock rules); do not automatically restock on cancellation/failed delivery alone.

> Negative-stock override may be approved only by **Owner or explicitly delegated Manager** with precise action confirmation and audit; Employee, Delivery Staff, AI and unpermitted Manager cannot override.

The full MC-664 text prevails over these extracts.

## 3. Classification (Definition Actor analysis)

| Trigger | Treatment |
|---|---|
| **T3 — D1, external participant invitation experience (G4)** | Fired at MC-663. **Decided:** D1-A |
| **T3 — D2, stock timing** | Fired at MC-662. **Decided:** D2-P with confirmed physical return |
| **T3 — negative-stock override authority** | **Decided:** Owner and explicitly delegated Manager only |
| T7 | Not fired. No row is omitted, deferred, simplified or reclassified; all 32 rows stay `IN SCOPE` in SB-P-1.18 |
| T8 | Not fired (MC-663). The participant binding is viable in specification; the issuance and first-run interface is an upstream dependency (Section 6) |

## 4. What the decision does and does not do (Definition Actor restatement; Section 1.1 prevails)

**D1-A does:**
1. Approve a **merchant-issued, purpose-limited invitation** to an identified external delivery person. The merchant shares it through a channel the merchant already controls; Smart Business adds no outbound messaging integration.
2. Approve **sign-in with the existing methods** (email and password, or Google) and **explicit acceptance** of the pending participant binding.
3. Require that **first run detects the pending binding** and does not divert the person into business creation.
4. Limit the participant to **assigned deliveries only**. The invitation and the binding are revocable, auditable and scoped.

**D1-A does not:** add phone OTP, a new authentication provider, a new messaging channel, a global staff membership, a separate authority kernel or dashboard access. It does not make employee delivery evidence count for external staff. It does not claim the upstream kernel is built. Any other onboarding or channel behaviour needs distinct approval.

**D2-P does:**
1. Decrease stock **when each applicable line quantity is packed**, through one governed, idempotent, order-linked stock event.
2. When a packed line is cancelled, undelivered or physically brought back, increase stock **only after authorized staff confirm the goods have physically returned**. Condition or wastage treatment follows the already-approved stock rules. **No automatic restock** on cancellation or failed delivery alone.
3. Keep partial fulfilment and changes independently mandatory (`1-§10-4`, `1-§10-5`). Reversal uses compensating movements.
4. Keep stock accounting distinct from COD and Ledger sale recognition.

**D2-P does not:** approve a confirmation-time reservation, a returns product, new payroll behaviour or any change of financial-truth ownership.

**Negative-stock override:** only the Owner, or a Manager with an explicit delegated grant, may approve it, with precise action confirmation and audit. Employee, Delivery Staff, AI and a Manager without the grant cannot override. The existing negative-stock confirmation is retained.

## 5. Affected FCTM rows (accounting only; no row is changed by this record)

**D1-A — 19 rows:** `1-§5-15`, `1-§5-16`, `1-§5-17`, `1-§5-18`, `1-§5-19`, `1-§5-20`, `1-§5-21`, `1-§5-22`, `1-§13-2`, `1-§13-3`, `1-§13-4`, `1-§13-5`, `1-§13-6`, `1-§13-7`, `1-§13-8`, `1-§17-4`, `1-§26-7`, `1-§26-8`, `BP-§10.7-A6`. Consumed delegates (unchanged): `21-§4-3`, `21-§4-6`, `21-§13-3`, `22-§5-7`.

**D2-P and the override — 13 rows:** `1-§10-1`, `1-§10-2`, `1-§10-3`, `1-§10-4`, `1-§10-5`, `1-§10-6`, `1-§10-7`, `1-§10-8`, `1-§10-9`, `1-§24-3`, `1-§24-8`, `BP-§10.7-A3`, `BP-§10.7-A4`. Consumed delegates (unchanged): `7-§2-1`, `7-§2-2`.

All 32 rows stay `IN SCOPE`. Their build commitment, commercial classification and owning mission are unchanged. Existing decision citations stay: `12:FPDR-1` on `1-§17-4`, and `18:FPDR-4` on `1-§10-3`, `1-§10-6`, `1-§10-7`.

## 6. Interfaces and holds this record does not resolve

- **SB-P-1.12 (MC-663, MC-664).** SB-P-1.12 owns governed participant-binding issuance and acceptance, and participant-aware first run. Its locked EIS defines the participant principal (`EIS-ID-03`, `EIS-KER-02`, `EIS-EXT-02`) but no binding invitation (`EIS-FRL-01` covers memberships) and no binding-aware first run (`EIS-FRL-02`). The upstream addendum needs its own disposition; this record does not amend SB-P-1.12.
- **SB-P-1.18 owns** the assigned-delivery-only capabilities, object scope, audit, revocation, negative tests and end-to-end proof.
- **SB-P-1.17 stock foundation.** The packing decrease and the confirmed-return increase are order-linked movements through the existing stock path; the order domain validates its event links. Negative-stock behaviour follows the approved policy exposed by `p_allow_negative_stock` (`EIS17-STK-09`); this record supplies the override authority for SB-P-1.18 order-linked events only.
- **SB-P-1.16.** Sale recognition for orders stays with the order and COD link (`EIS16-ORD-01`) and is not decided here.
- **Holds unchanged:** DC-14 (legal input before the Blueprint lock), MC-544, `DLEG`, `DNTF`, `DENT`, DC-13, AEG-1, U-09 and every unbuilt upstream dependency.

## 7. Future reconciliation (accounting only; no row is changed by this record)

A later, separately authorized reconciliation would:
- add `18:FPDR-6` to the Founder-decision cell of the 32 rows in Section 5;
- add FCTM legend codes for D1-A and for D2-P with the override;
- add the `18:FPDR-6` entry to FCTM §0.8 and to Blueprint §10.1;
- update the Blueprint Metadata decision list, §18 and the §19 map Founder-decision cells for the 32 rows.

No disposition, build commitment, assignment or total changes: `592/17/77/27/48/8/0` over 769 rows.

## 8. Publication boundary

**This section grants no Git-write authority.** This record cannot authorize its own publication. Publication needs a separate, explicit Mission Control Git-write authorization under Communication Protocol §16, issued before any write. The Founder alone human-merges. This record becomes effective on that merge and on Mission Control's verification on `main`.

**STOP — MISSION CONTROL REVIEW, FOUNDER HUMAN MERGE AND POST-MERGE VERIFICATION REQUIRED.** Implementation Authorization: WITHHELD.
