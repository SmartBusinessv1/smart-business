# SMART BUSINESS MISSION CONTROL — MC-153

# SB-P-1.12 — Stage 10 Independent EIS Security Review Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Lifecycle stage:** Stage 10 — EIS Review  
**Reviewer:** Existing Security & Permissions Architecture specialist room appointed under MC-33  
**Date:** 2026-09-30  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Reviewed EIS candidate:** PR #687 exact head `a1beda8c006ab69b28f5354b686c941384cd1e86`  
**EIS v0.2 blob:** `0ebd7c2b4298a81b467021dfb8a52cf42b8c293d`

## 1. Purpose

Authorize the appointed independent Security & Permissions Architecture specialist to review the complete SB-P-1.12 EIS v0.2 at the exact reviewed head above.

This is a specialist review only.

It does not accept the EIS, lock the EIS, authorize an implementation package, or authorize implementation.

## 2. Independence and provenance

The reviewer is the existing specialist room previously appointed under MC-33.

The reviewer must:

- independently inspect the exact EIS candidate and relevant repository architecture;
- treat earlier Stage 7 findings as evidence and context, not as automatic proof that the EIS resolves them;
- disclose any correlated assumption from earlier SB-P-1.11 or SB-P-1.12 work;
- distinguish design sufficiency from implementation verification and production evidence.

## 3. Review scope

Review the full EIS, not only the MC-151 correction.

At minimum evaluate:

### 3.1 Authority / membership model

- `persons`, memberships, roles and scoped capabilities;
- multi-business identity and active-business context;
- execution-time authorization;
- delegation and revocation;
- participant / external-role handling;
- entitlement and temporary support authority.

### 3.2 Data isolation and privilege model

- RLS / command boundaries;
- deny-by-default behavior;
- `anon`, `PUBLIC`, `authenticated`, `service_role`, function owners and executor roles;
- default privileges;
- cross-business denial;
- reference-level isolation;
- privileged handler trust binding.

### 3.3 Concurrency / revocation / confirmation

- execution-time revalidation;
- membership-version strategy;
- row-lock or serialization assumptions;
- stale preview and mid-operation revocation;
- idempotency and replay;
- partial-completion truthfulness.

### 3.4 Audit and denial durability

- authority-event durability;
- denial audit outside rollback-prone transactions;
- provenance;
- attribution after identity deletion;
- minimization of private context.

### 3.5 Reference Cost / margin boundary

Review v0.2 against Founder Decision Record 09.

Confirm that:

- the EIS does not recreate aggregate-only margin semantics;
- no margin formula is invented;
- cost and margin remain separately delegated;
- exact cost + otherwise-authorized selling price is not incorrectly blocked;
- Smart Business-provided margin output is denied without margin permission;
- no current response path can bypass the projection boundary.

### 3.6 ESC-1 safe-design direction

Review Sections 14–16 and related requirements closely.

Evaluate whether the EIS design can safely address:

1. Owner business API `DELETE`;
2. `businesses.owner_id → auth.users ON DELETE CASCADE`;
3. `transactions.creator_id → auth.users ON DELETE CASCADE`;
4. `transaction_correction_events → transactions ON DELETE CASCADE`;
5. any other source-complete cascade discovered during review.

Specifically review:

- stable `persons` identity design;
- relation between `persons.id` and Supabase Auth user identity;
- `persons.auth_user_id` lifecycle;
- `RESTRICT` behavior and governed unlink sequencing;
- whether proposed guards actually protect against bypass by privileged roles;
- removal of client/API business-delete authority;
- historical actor references;
- retained-record `business_id` handling;
- transfer survival after former-Owner identity deletion;
- governed identity deletion;
- governed business deletion;
- legal/dispute hold compatibility;
- migration/backfill order;
- rollback/recovery risks;
- evidence required before any proposal to unblock `22-§20-2`.

Do not treat the design as implemented.

Do not close ESC-1.

Do not unblock `22-§20-2`.

### 3.7 SB-P-1.13 consumption boundary

Assess whether the EIS correctly limits what SB-P-1.13 may consume early and prevents SB-P-1.13 from inventing a second authority system.

## 4. Required finding format

For each material finding provide:

- finding ID;
- severity;
- affected EIS section / requirement IDs;
- exact evidence;
- security consequence;
- whether it is:
  - design defect requiring EIS correction;
  - evidence gate only;
  - implementation verification requirement;
  - Product Truth conflict requiring Mission Control / Founder routing;
- precise correction needed if any.

Do not redesign unrelated product behavior.

## 5. Required conclusion

Conclude with exactly one of:

- `SECURITY READY FOR MISSION CONTROL STAGE 10 DISPOSITION`
- `SECURITY REFINEMENT REQUIRED`
- `PRODUCT TRUTH / FOUNDER DECISION REQUIRED`

The conclusion applies only to EIS design sufficiency.

It is not implementation or production certification.

## 6. Authorized writable paths

The appointed Security & Permissions Architecture specialist may create only:

1. `communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md`
2. `communication/live/report1.25.md`

No other repository path is writable.

Do not edit PR #687.

Do not edit the EIS.

Do not edit Product Truth, FCTM, Blueprint, Founder records, Mission Control records, code, schema, SQL, migrations or provider configuration.

## 7. Git authority

After this authorization becomes canonical, the specialist may:

- fetch/read;
- branch from the verified canonical main;
- create only the two authorized report paths;
- commit;
- push the specialist branch;
- open one DRAFT PR to `main`;
- report the branch, exact commit, exact changed paths, blobs and CI.

No direct push to main.

No self-merge.

No self-approval.

## 8. Source requirements

Read at minimum:

- PR #687 exact head `a1beda8c006ab69b28f5354b686c941384cd1e86`;
- EIS v0.2 blob `0ebd7c2b4298a81b467021dfb8a52cf42b8c293d`;
- locked Blueprint;
- canonical FCTM;
- Founder Records 04, 05, 06, 07 and 09;
- MC-143, MC-144, MC-145, MC-149, MC-150, MC-152;
- Stage 7 specialist reports 01–03;
- `communication/live/report1.19.md`;
- `communication/live/report1.21.md`;
- current repository migrations/functions/server handlers relevant to the reviewed design.

Use repository truth, not chat summaries.

## 9. Holds

Preserve:

- R-2 CLOSED / SATISFIED;
- ESC-1 OPEN T8;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED;
- professional legal/privacy/retention validation deferred;
- EIS DRAFT / NOT LOCKED;
- implementation package NOT AUTHORIZED;
- implementation NOT AUTHORIZED.

**STOP FOR MISSION CONTROL STAGE 10 DISPOSITION.**
