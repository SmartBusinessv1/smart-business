# SB-P-1.14 — Stage 10 Final Security Residual Refinement Authorization

**Mission Control decision ID:** SB-P-1.14-MC-18  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Lifecycle:** Stage 10 — Final Residual EIS Refinement  
**Prepared:** 2026-10-08 IST  
**Canonical baseline:** `main@7477f83ce2acbc29c377b09bc58880fb22a33340`  
**Target draft EIS PR:** #831  
**Current frozen PR head:** `e858a18e00719aed6464822d684c6580fce1f9bf`  
**Current EIS blob:** `d97d23048f0dda76f3f60b0b03569a928d9e45d1`  
**Owner:** Claude Code  
**Status:** DRAFT AUTHORIZATION — EFFECTIVE ONLY AFTER AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION

## 1. Background

All five Stage 10 delta specialist reports are now canonical.

Delta disposition:

- Security: R10-SEC-01 CLOSED; R10-SEC-02 CLOSED; R10-SEC-03 PARTIALLY CLOSED;
- Finance: all assigned findings CLOSED;
- UDI / AI: all assigned findings CLOSED;
- Storage: all assigned findings CLOSED;
- Migration: all assigned findings CLOSED.

The only remaining documentary Stage 10 residual is the Security delta finding in `EIS14-STO-03`.

The defect is narrow: the phrase allowing a privileged service-role handler to rely on **“a documented system-maintenance basis”** creates an alternative to the locked SB-P-1.12 authority-binding contract. A maintenance purpose is not authority.

No new Founder decision, Product Truth, FCTM change, mission reassignment or commercial reclassification is required.

## 2. Authorization

After this authorization becomes canonical, Claude Code may perform exactly one narrow documentary correction on PR #831.

The correction is limited to replacing the requirement text of `EIS14-STO-03` while preserving its existing requirement ID and its existing 26-row FCTM mapping unchanged.

No other EIS requirement may be substantively changed.

## 3. Exact replacement text

Replace the existing requirement text for `EIS14-STO-03` with exactly:

> **Privileged handler binding.** Every service-role storage, reconciliation, discard, deletion, ingest-verification or other privileged handler that can access or mutate merchant-scoped data must satisfy the locked SB-P-1.12 `EIS-ISO-04` authority-binding contract. The operation must execute from a verified interactive principal or an upstream-approved verified automation/system principal, obtain current kernel authorization for the exact business, action and object set, and carry those business/action/object predicates into the privileged query or mutation. A non-interactive maintenance operation may use only an already-approved upstream automation/system-principal path and remains subject to the same current authorization and scope binding. A documented maintenance purpose, server location, scheduled-job context or possession of `service_role` is never authority by itself. `service_role` possession never creates merchant membership, business authority or permission to inspect or mutate merchant content. The source-complete privileged-handler inventory and effective-access verification under `EIS14-VER-01` must prove that no unbound admin, service-role, maintenance or background-job path exists. *(SEC14-S7-08; SEC14-EIS-S10-03; R10-SEC-03).*

Preserve the current 26-row FCTM mapping for `EIS14-STO-03` exactly.

## 4. Writable scope

Authorized substantive writable paths:

1. `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md`
2. `communication/missions/SB-P-1.14/claude-code/14-stage10-final-security-residual-refinement-report.md`

No other file is substantively writable under this authorization.

If PR #831 requires synchronization with canonical main only to preserve governance/evidence files, ordinary merge synchronization is allowed. Conflict resolution must preserve canonical main. No force-push or history rewrite.

## 5. Required checks

Claude Code must verify and report:

- resulting PR #831 head;
- resulting EIS blob;
- exact changed-file list;
- `EIS14-STO-03` requirement ID unchanged;
- its 26-row FCTM mapping byte-for-byte unchanged;
- all 83 EIS requirement IDs unchanged;
- 563/563 IN SCOPE traceability still complete;
- 0 missing / 0 extra / 0 orphan / 0 duplicate requirements;
- locked Blueprint/FCTM/Founder/specialist/MC records unchanged;
- T2/T3/T6/T7/T8 screen;
- all evidence holds and `UNVERIFIED — ACCESS REQUIRED` facts preserved.

## 6. Trigger discipline

Expected result:

- T2 NOT TRIGGERED;
- T3 NOT TRIGGERED;
- T6 NOT TRIGGERED;
- Founder-approved T7 restoration remains the governing basis and should become fully realized if this exact correction is applied cleanly;
- T8 NOT TRIGGERED.

If the correction cannot be made without changing Product Truth, FCTM scope, mission assignment, merchant-visible behavior, or another approved invariant, STOP and return to Mission Control.

## 7. Prohibited work

This authorization does not permit:

- implementation/code;
- SQL/schema/migration creation or execution;
- provider configuration or activation;
- Supabase/R2/AWS mutation;
- production access;
- delivery;
- Stage 10 acceptance;
- Stage 11 EIS lock;
- implementation package preparation;
- self-merge.

## 8. Return gate

Return the updated DRAFT PR #831 and `14-stage10-final-security-residual-refinement-report.md` to Mission Control.

Only Security requires a final delta re-confirmation unless this correction unexpectedly changes another specialist domain.

**STOP FOR MISSION CONTROL DISPOSITION.**
