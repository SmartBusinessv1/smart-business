# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-RR-4 — RELEASE-READINESS DECISION & CONTROLLED PREVIEW GATE

**Mission ID:** SB-P-1.11-RR-4  
**Mission Name:** Release-Readiness Decision & Controlled Preview Gate  
**Mission Status:** AUTHORIZED AFTER MERGE  
**Authorized By:** Mission Control  
**Public Publish / Production Deployment:** NOT AUTHORIZED  
**Domain Cutover:** NOT AUTHORIZED

---

## 1. Purpose

Record Mission Control's consolidated release-readiness decision for `SB-P-1.11` after completion of the frontend implementation, specialist verification, and the RR-2/RR-3 defect-remediation chain.

This instruction does not authorize public release.

It establishes whether the current implementation is ready to move from engineering verification into a controlled preview and Founder visual-acceptance stage.

---

## 2. Canonical Baseline

Repository:

`SmartBusinessv1/smart-business`

Decision baseline:

`1d0a7e25f28cb159196824e3e040b908c3410f2e`

Relevant evidence includes:

- `communication/live/report1.63.md`
- `communication/live/report1.64.md`
- `communication/live/report1.65.md`
- `communication/live/report1.66.md`
- `communication/live/report1.67.md`
- `communication/live/report1.68.md`
- `communication/live/report1.69.md`
- `communication/live/report1.70.md`
- `docs/verification/SB-P-1.11-catalog-frontend-verification.md`

Authorized Lovable execution project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Production Supabase:

`gysgzasfcjvtrgaigfyn`

Dedicated test Supabase:

`drravyyauixltoihzmwo`

Legacy Lovable Cloud backend that must remain absent:

`wwgqnshcgbukqczqblsm`

Original Lovable project remains legacy/reference only and must not be modified:

`64c2b9b1-2461-4045-9acc-19e2658b8ca2`

GitHub remains the sole canonical source of truth.

---

## 3. Consolidated Technical Decision

Mission Control accepts the RR-3 completion evidence.

All four original release blockers are now resolved:

1. Category archive confirmation — `RESOLVED`.
2. Product tax change — `RESOLVED`.
3. Permanent product delete — `RESOLVED`.
4. Category list/filter/picker — `RESOLVED`.

The targeted security regression also passed:

- Owner/business isolation remains enforced;
- browser writes remain RPC-only;
- no direct authenticated product UPDATE/DELETE privilege was introduced;
- executor privileges are narrowly scoped;
- accepted public command count remains exactly 19;
- function ownership remains unchanged;
- no new cross-business visibility or mutation was introduced.

Therefore the RR-1 functional FAIL is considered closed.

---

## 4. Business Tax Settings Decision

### 4.1 Current limitation

`business_tax_settings` has an accepted Owner-facing write command but no accepted Owner-facing read path under the locked 19-command contract.

The current frontend therefore cannot reliably display the presently stored business-wide tax setting before the Owner chooses to replace it.

The UI must not invent, cache, infer, or fabricate a current value.

### 4.2 Specialist positions

The Frontend specialist and the Security & Permissions specialist each independently recorded:

`ACCEPT FOR PHASE 1`

The Security review specifically found that the current write-only behavior fails closed rather than creating an improvised read path or confidentiality risk.

### 4.3 Mission Control decision

**Decision: `ACCEPT FOR PHASE 1 — NON-BLOCKING RELEASE LIMITATION`**

The limitation does not block controlled preview or the initial Phase 1 release provided all of the following remain true:

1. the UI clearly states that the currently stored business-wide tax setting cannot yet be read back in this version;
2. the UI does not present any assumed or default value as if it were the saved current value;
3. saving clearly communicates that the Owner is setting/replacing the business-wide tax setting;
4. no twentieth public command is added under this decision;
5. no direct-table read workaround, local cache workaround, or security relaxation is introduced;
6. a future read-path improvement may be evaluated as a separately authorized Build Later mission if merchant feedback shows the limitation creates meaningful confusion or support burden.

This is an explicit Phase 1 product decision, not a claim that write-only settings are the ideal long-term UX.

---

## 5. Release-Readiness Verdict

**Mission Control Verdict: `READY FOR CONTROLLED PREVIEW`**

The implementation is sufficiently verified to proceed to a controlled preview and Founder visual-acceptance stage.

This verdict does **not** mean publicly released.

This verdict does **not** authorize domain cutover.

This verdict does **not** authorize production merchant/test write activity merely for demonstration.

---

## 6. Controlled Preview — What May Be Authorized Next

A separate execution mission may now authorize controlled preview of the verified Lovable project for Founder acceptance.

That preview mission should verify, at minimum:

- the authorized Lovable project still matches canonical GitHub source/dependency state before preview;
- backend binding remains exactly `gysgzasfcjvtrgaigfyn`;
- Lovable Cloud remains absent;
- no legacy backend reference has returned;
- Catalog routes render in the actual Lovable runtime;
- representative mobile and desktop visual behavior;
- navigation and dashboard regression;
- the business-tax-settings disclosure is clear and non-misleading;
- no production behavioral writes are performed solely to obtain preview evidence;
- screenshots/equivalent visual evidence are captured for Founder review.

Founder visual acceptance is required before any public publish/deploy/domain-cutover authorization.

---

## 7. Public Publish Gate

Public publish, deployment, and movement of `smartbusiness.teamlips.com` remain **ON HOLD**.

They may be considered only after:

1. controlled preview passes;
2. Founder visually accepts the Phase 1 Catalog experience;
3. canonical Lovable equivalence is re-confirmed immediately before publish;
4. the exact current owner of `smartbusiness.teamlips.com` / existing production-domain binding is verified;
5. a rollback-safe domain/publish plan is documented;
6. a separate explicit Mission Control authorization is merged.

No implicit publish authority exists.

---

## 8. Scope Classification

### Build Now

- controlled preview mission;
- Founder visual acceptance;
- pre-publish canonical/backend/domain-binding verification.

### Build Later

- Owner-facing read path for `business_tax_settings`, if justified by merchant clarity/support evidence and separately designed without violating the locked command architecture.

### Add-on

None authorized by this decision.

### Separate Product

None.

### Reject

- adding a twentieth public command casually to solve the tax-settings read limitation;
- fabricating/caching a current tax value in the browser;
- weakening RLS or business isolation for convenience;
- reintroducing Lovable Cloud;
- using the original Lovable project for new execution work;
- publishing directly from an unverified or drifted Lovable state.

---

## 9. Hard Boundaries

This decision does not authorize:

- new product features;
- backend/schema changes;
- new RPCs;
- dependency modernization;
- production behavioral write tests;
- Lovable Cloud;
- Lovable native GitHub repository connection;
- modification of the original Lovable project;
- public publish;
- deployment;
- domain cutover;
- self-approval or self-merge.

---

## 10. Decision Summary

`SB-P-1.11` engineering release blockers: **CLOSED**.

Security release blocker: **NONE OPEN** within the verified Catalog scope.

Business-tax-settings read limitation: **ACCEPTED FOR PHASE 1 as a non-blocking limitation with explicit clarity safeguards**.

Current gate:

**READY FOR CONTROLLED PREVIEW — NOT YET AUTHORIZED FOR PUBLIC PUBLISH.**

---

## 11. Next Logical Step

After human review and merge of this decision, authorize and execute a separate controlled-preview mission against the verified Lovable project, capture visual/runtime evidence, obtain Founder acceptance, and return to Mission Control for the final publish/domain-cutover decision.
