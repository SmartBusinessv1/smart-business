# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-43D — SINGLE-CONTROL SECURITY RE-VERIFICATION

**Instruction ID:** `instruction1.143`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `SB-P-1.11-GC-43D — Single-Control Security Re-Verification`  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Founder / Mission Control  
**Mode:** READ-ONLY INDEPENDENT SECURITY RE-VERIFICATION  
**Affected Control:** `SEC-GC43-07 — Runtime Permission Boundary`  
**Affected Finding:** `GC43B-SEC-01`  
**AWS / GitHub Mutation Authority:** NONE  
**Application / Parser Implementation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Independently re-verify only the corrected security control:

`SEC-GC43-07 — Runtime Permission Boundary`

and the corresponding finding:

`GC43B-SEC-01`.

The correction was executed under:

`communication/live/instruction1.142.md`

and recorded in:

`communication/live/report1.152.md`.

The primary corrected evidence package is:

`communication/evidence/SB-P-1.11-GC-43C/`.

This mission must determine whether the corrected runtime permissions boundary now structurally preserves the locked workload path:

`IAM Roles Anywhere → workload role → AWS_IAM Lambda Function URL`

and prevents the future workload role from obtaining effective ordinary direct Lambda invocation authority outside the Function URL path.

Required completion report:

`communication/live/report1.153.md`

---

## 2. Canonical Entry State

Execute only after this instruction is human-reviewed and merged to `main`.

Canonical baseline when this authorization was prepared:

`536f695cb3fa1c1608245ae84956f0428d3b5e59`

Commit:

`SB-P-1.11-GC-43C: record runtime-boundary correction evidence (#328)`

Before verification, read at minimum:

1. `communication/live/instruction1.141.md`;
2. `communication/live/report1.151.md`;
3. `communication/live/instruction1.142.md`;
4. `communication/live/report1.152.md`;
5. `communication/evidence/SB-P-1.11-GC-43A/aws-runtime-boundary.json`;
6. `communication/evidence/SB-P-1.11-GC-43C/manifest.md`;
7. every evidence file referenced by the GC-43C manifest;
8. current canonical repository state relevant to this control.

Use official AWS documentation only where necessary to confirm load-bearing policy semantics.

---

## 3. Scope Is Intentionally Narrow

This mission is not a full GC-43 re-review.

The prior GC-43B report classified the other controls as PASS. Those PASS classifications remain inherited unless the GC-43C correction itself materially changed their underlying state.

Security must therefore verify only:

- whether the corrected RuntimeBoundary closes `GC43B-SEC-01`;
- whether the correction preserved the specific adjacent properties necessary to trust that conclusion;
- whether GC-43C introduced any material contradiction affecting the previously passing controls.

Do not reopen unrelated controls merely because they exist in earlier reports.

If evidence shows GC-43C changed a previously passing control, record that contradiction and stop. Otherwise preserve the prior PASS classifications.

---

## 4. Required Evidence Basis

Security must independently inspect the evidence itself and must not treat `report1.152.md` as proof merely because Infrastructure Operations authored it.

At minimum inspect:

### 4.1 Corrected policy document

`communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`

Verify that the corrected default policy contains:

1. `lambda:InvokeFunctionUrl` only on the exact parser Lambda resource namespace and only when:

   `lambda:FunctionUrlAuthType = AWS_IAM`

2. `lambda:InvokeFunction` only on the exact parser Lambda resource namespace and only when:

   `lambda:InvokedViaFunctionUrl = true`

3. no second unconditional or broader `lambda:InvokeFunction` Allow statement;
4. no wildcard Lambda resource that reintroduces direct invocation;
5. no alternate statement that defeats the intended Function-URL-only ceiling.

### 4.2 Version/default evidence

Inspect:

`communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-version-evidence.md`

Verify that:

- Version 2 is the current default version;
- Version 1 is retained but is no longer default;
- the semantic change is limited to the direct-invocation restriction;
- the provider evidence is internally consistent with the Version 2 JSON.

### 4.3 Structural authorization analysis

Inspect:

`communication/evidence/SB-P-1.11-GC-43C/authorization-verification.md`

Independently evaluate whether the permissions-boundary intersection model actually prevents a future workload-role identity policy from granting effective ordinary direct `lambda:InvokeFunction` when the request is not made through a Function URL.

Do not simply repeat Infrastructure Operations' conclusion.

### 4.4 Root / static-credential posture

Inspect:

`communication/evidence/SB-P-1.11-GC-43C/post-correction-root-static-credential-posture.md`

Confirm only for scope-preservation purposes that:

- the one-time Founder root+MFA correction session was exited;
- root access keys remain `0`;
- no IAM user or long-lived credential was introduced;
- the correction did not replace the steady-state GitHub OIDC → STS deployment path.

This is not a re-opening of SEC-GC43-11 or SEC-GC43-13 unless the evidence contradicts their prior PASS state.

---

## 5. Required Security Questions

Security must answer each question explicitly.

### Q1 — Direct invocation ceiling

Does the corrected Version 2 permissions boundary make ordinary direct parser `lambda:InvokeFunction` unavailable when `lambda:InvokedViaFunctionUrl` is absent or false?

### Q2 — Function URL path

Does the corrected boundary still represent the required AWS_IAM Function URL authorization path using both:

- `lambda:InvokeFunctionUrl` with `lambda:FunctionUrlAuthType = AWS_IAM`; and
- `lambda:InvokeFunction` with `lambda:InvokedViaFunctionUrl = true`?

### Q3 — Resource scope

Are both Lambda invocation permissions still limited to the exact non-production parser Lambda namespace in AWS account `658980433673`, region `ap-south-1`?

### Q4 — No alternate bypass

Does the corrected policy contain any alternate unconditional/broader Lambda invocation statement or policy interaction that reintroduces direct invocation authority inside the boundary ceiling?

### Q5 — Boundary immutability

Is the previously verified deploy-role inability to create/promote versions of `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` still supported by canonical evidence, given that GC-43C did not modify the deploy-role policy?

### Q6 — Scope preservation

Did GC-43C alter OIDC trust, GitHub Environment protections, deploy-role policy, `iam:PassRole`, non-production isolation, parser resources, Supabase, Lovable, production state, or other previously passing controls?

### Q7 — Evidence sufficiency

Is the corrected provider-derived Version 2 JSON plus version/default evidence sufficient for a reliable independent PASS even though a new post-correction IAM Policy Simulator run was not performed?

A simulator run is not automatically required if the corrected policy semantics are directly and sufficiently established from provider-derived policy evidence and AWS permission-boundary behavior. Conversely, do not issue PASS if the missing runtime simulation leaves a material unresolved ambiguity.

---

## 6. Treatment of the Missing Post-Correction Policy Simulator Run

GC-43C explicitly records that a fresh IAM Policy Simulator run was not performed because:

- the exceptional Founder root session had already been exited;
- no separate non-root simulator-capable identity currently exists;
- reopening root solely for simulation would exceed the narrow exceptional-root purpose;
- creating an IAM user or broadening the deploy role would violate the security model.

Security must independently decide whether the provider-derived corrected policy document and AWS-supported policy semantics are sufficient to close the finding without a new simulator run.

Do not penalize the mission merely for refusing to create a weaker credential model to obtain additional evidence.

If a simulator result is genuinely required for PASS, state the exact unresolved security ambiguity and return `STOPPED — SECURITY OR EVIDENCE BLOCKER`. Do not authorize or perform any provider mutation from this room.

---

## 7. Read-Only Authority Boundary

Security & Permissions Architecture may:

- read canonical repository files;
- inspect GC-43C provider-derived evidence;
- compare Version 1 and Version 2 boundary documents;
- inspect prior canonical Policy Simulator evidence relevant to boundary immutability;
- inspect current repository state for scope-preservation confirmation;
- consult official AWS documentation for policy semantics;
- classify the single corrected control;
- document any material contradiction.

Security may not:

- modify AWS IAM, policies, permission boundaries, OIDC, Lambda, S3, Roles Anywhere, account or root state;
- modify GitHub Environment, workflows, rulesets or branch protections;
- create or request credentials, IAM users, access keys, certificates, tokens or secrets;
- trigger implementation/deployment workflows;
- implement Lambda/parser resources;
- mutate Supabase or Lovable;
- perform production actions;
- reactivate GC-38.

---

## 8. Required Classification

The report must classify:

`SEC-GC43-07 / GC43B-SEC-01`

as exactly one of:

- **PASS**;
- **FAIL**;
- **NOT VERIFIED**.

The report must state the evidence inspected and reasoning sufficient for an independent reviewer to understand the classification.

Previously passing GC-43 controls should be recorded as inherited PASS / not reopened unless a correction-induced contradiction is found.

---

## 9. Required Final Disposition

`report1.153.md` must end with exactly one of:

- `AWS EXECUTION-ACCESS RUNTIME-BOUNDARY SECURITY RE-VERIFICATION — PASS — GC-38 REACTIVATION DECISION ELIGIBLE`
- `AWS EXECUTION-ACCESS RUNTIME-BOUNDARY SECURITY RE-VERIFICATION — CORRECTION REQUIRED`
- `AWS EXECUTION-ACCESS RUNTIME-BOUNDARY SECURITY RE-VERIFICATION — STOPPED — SECURITY OR EVIDENCE BLOCKER`

A PASS means only that Mission Control may consider a separate explicit GC-38 reactivation authorization.

A PASS does not itself reactivate GC-38 and does not authorize Lambda/parser implementation.

---

## 10. Required Report

Security & Permissions Architecture shall produce:

`communication/live/report1.153.md`

The report must include:

- exact instruction executed;
- exact canonical `main` SHA reviewed;
- exact GC-43C evidence files inspected;
- Version 1 → Version 2 semantic comparison;
- explicit answers to Q1–Q7;
- classification of `SEC-GC43-07 / GC43B-SEC-01`;
- treatment of the missing post-correction simulator run;
- confirmation whether any prior PASS control was materially affected;
- explicit no-mutation confirmation;
- final disposition.

Submit through a dedicated human-reviewed PR.

No self-merge.

---

## 11. Next Gate

Only if `report1.153.md` returns:

`AWS EXECUTION-ACCESS RUNTIME-BOUNDARY SECURITY RE-VERIFICATION — PASS — GC-38 REACTIVATION DECISION ELIGIBLE`

and that report is human-reviewed and merged may Mission Control consider a separate explicit reactivation decision for:

`SB-P-1.11-GC-38 — AWS Lambda Parser Implementation`.

Until then, GC-38 remains stopped.

---

## 12. Mission Control Decision

`SB-P-1.11-GC-43D — SINGLE-CONTROL SECURITY RE-VERIFICATION AUTHORIZED AFTER HUMAN MERGE`
