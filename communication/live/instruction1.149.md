# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-GC-38R — One-Time Founder Administrative Correction Authorization

**Instruction ID:** `instruction1.149`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Infrastructure Operations  
**Authorized By:** Founder / Mission Control  
**Mode:** ONE-TIME EXCEPTIONAL ADMINISTRATIVE CORRECTION + EVIDENCE ONLY  
**Production Authority:** NONE  
**Phase B Rerun Authority:** NONE

## 1. Basis

`communication/live/report1.157.md` records that the bounded correction authorized by `instruction1.148.md` could not proceed because no currently authenticated administrative console session was available and the prior exceptional account-owner session was not reusable authority.

Canonical baseline at authorization preparation: `3167d4dd588bdfc5cd6619b565031c812a63167e`.

## 2. Authorization

Mission Control explicitly authorizes one fresh, one-time Founder account-owner console session protected by MFA solely to apply the exact bounded deploy-role policy amendment already approved in `instruction1.148.md` and recommended in `report1.156.md`.

Target policy only: `TeamLIPS-SB-NonProd-Parser-DeployPolicy`.

Authorized addition only: `rolesanywhere:TagResource`, restricted to the approved non-production Trust Anchor and Profile ARN namespaces in account `658980433673`, region `ap-south-1`, and constrained to the six locked GC-38R request tags already defined in `instruction1.148.md`.

No broader resource scope or additional permission is authorized.

## 3. Boundary

The one-time session may be used only to apply the exact policy amendment, inspect the resulting provider state, capture non-secret verification evidence, confirm no persistent account-owner access key was created, and then sign out immediately.

This authority expires when that exact correction and evidence capture are complete and is not reusable for any future mission.

## 4. Explicit Non-Authorization

No other AWS mutation is authorized. Do not create IAM users, static credentials, access keys, new trust paths, broader Roles Anywhere permissions, RuntimeBoundary changes, OIDC changes, GitHub Environment changes, CA private-key handling, manual Trust Anchor/Profile creation, Supabase/Lovable changes, production actions, Phase B reruns, Phase C verification, or later-stage progression.

If anything beyond the exact approved policy amendment is required, STOP and return to Mission Control.

## 5. Existing State

Preserve all existing authorized partial GC-38R non-production resources. Do not delete, recreate, repair, replace, or manually mutate them under this authorization.

## 6. Required Evidence

Continue the existing evidence package under `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/` and capture non-secret provider evidence showing the approved TagResource statement, exact resource/account/region scope, six request-tag constraints, absence of broader Roles Anywhere authority, unchanged deploy-role trust, unchanged RuntimeBoundary Version 2, unchanged OIDC/environment protections, no new IAM user/static credential/persistent access key, no CA private-key handling, no Phase B rerun, and completed sign-out.

## 7. Required Completion Report

Return `communication/live/report1.158.md` through a dedicated human-reviewed PR. The report must record the exact instruction, canonical main SHA, execution path, exact amendment, evidence files, verification results, preservation of existing partial resources, no Phase B rerun, sign-out confirmation, and any blocker.

Final disposition must be exactly one of:

`GC-38R TAGRESOURCE ADMIN CORRECTION — READY FOR INDEPENDENT SECURITY VERIFICATION`

or

`GC-38R TAGRESOURCE ADMIN CORRECTION — STOPPED — BLOCKER`

No self-merge.

## 8. Next Gate

This instruction does not authorize a Phase B rerun. After the evidence and `report1.158.md` are merged, Mission Control shall separately authorize Security & Permissions Architecture to independently verify the correction and session-closure evidence. Only after that PASS may Mission Control consider another Phase B rerun authorization.

## 9. Mission Control Decision

`SB-P-1.11-GC-38R — ONE-TIME FOUNDER ADMINISTRATIVE TAGRESOURCE CORRECTION AUTHORIZED AFTER HUMAN MERGE`
