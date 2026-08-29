# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-38R — CA CERTIFICATE SERIALIZATION WORKFLOW CORRECTION REVIEW

**Instruction ID:** `instruction1.152`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Claude Engineering  
**Authorized By:** Mission Control  
**Mode:** BOUNDED WORKFLOW CORRECTION REVIEW + IMPLEMENTATION PROPOSAL ONLY  
**AWS Mutation Authority:** NONE  
**Workflow Rerun Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Trigger

The latest authorized GC-38R Phase B rerun reached:

`Create IAM Roles Anywhere trust anchor`

and failed with:

```text
ValidationException when calling the CreateTrustAnchor operation:
Error creating TrustAnchor. Bad certificate data
```

The prior `rolesanywhere:TagResource` permission gap has already been corrected and independently verified PASS.

Local Founder verification of the public CA certificate established:

- PEM starts with `-----BEGIN CERTIFICATE-----`;
- PEM ends with `-----END CERTIFICATE-----`;
- exactly one BEGIN marker exists;
- exactly one END marker exists;
- certificate Basic Constraints include `CA:TRUE, pathlen:0`.

No evidence currently justifies regenerating or replacing the CA.

Canonical `main` baseline at authorization preparation:

`283105739830aefd43fdcfc7954fa062a04c64f1`

---

## 2. Review Objective

Claude Engineering shall review the current GitHub Actions Trust Anchor creation step and determine whether the `Bad certificate data` failure is caused by certificate-input serialization in the AWS CLI invocation.

The current workflow writes the public CA certificate input to:

`/tmp/parser-pki/ca.pem`

and then constructs the Roles Anywhere `--source` parameter by JSON-escaping the file contents and embedding that output inside AWS CLI shorthand syntax.

Review whether this serialization path can alter or misrepresent the PEM payload presented as `sourceData.x509CertificateData`.

---

## 3. Required Engineering Review

Review at minimum:

1. `.github/workflows/aws-gc38r-parser-deploy.yml` on canonical `main`;
2. the exact `Create IAM Roles Anywhere trust anchor` step;
3. AWS CLI parameter parsing behavior relevant to `rolesanywhere create-trust-anchor --source`;
4. whether AWS-supported file-loading syntax such as `x509CertificateData@=file://...` is the correct narrow replacement;
5. whether a JSON file passed via `--source file://...` or equivalent is safer/more deterministic;
6. whether newline preservation, quoting, escaping, shell parsing, or shorthand parsing could explain `Bad certificate data`;
7. whether the correction can remain limited to certificate serialization only.

Use official AWS documentation where needed for load-bearing CLI syntax conclusions.

Distinguish clearly between:

- provider-observed facts;
- repository facts;
- AWS documentation;
- engineering inference.

---

## 4. Authorized Correction Scope

If the defect is verified, Claude Engineering may prepare the narrowest workflow correction needed to ensure the already-supplied public CA PEM reaches IAM Roles Anywhere exactly as valid certificate data.

The preferred correction should use an AWS-supported deterministic file-loading mechanism rather than custom JSON/string embedding if that is confirmed valid for this command.

The correction may modify only the minimum lines required in:

`.github/workflows/aws-gc38r-parser-deploy.yml`

for Trust Anchor certificate serialization.

No other workflow behavior may change unless strictly necessary for the same serialization fix and explicitly explained.

---

## 5. Explicit Non-Authorization

This instruction does not authorize:

- any AWS API call or mutation;
- any workflow run or rerun;
- any IAM permission change;
- any Roles Anywhere permission change;
- any Trust Anchor manual creation;
- any RuntimeBoundary change;
- any OIDC trust change;
- any GitHub Environment protection change;
- any root or static credential use;
- any CA private-key access, movement, regeneration, replacement, or exposure;
- any change to the public CA certificate itself;
- any Lambda, S3, Supabase, Lovable, production, or Product Truth change;
- Phase C execution;
- later-stage progression.

If the review concludes that any broader change is needed, STOP and report to Mission Control.

---

## 6. Security and Custody Controls to Preserve

The following remain locked:

- Founder-controlled offline CA private-key custody;
- GitHub workflow receives only the public CA certificate;
- no CA private key in GitHub, CI, AWS workflow inputs, repository, chat, or logs;
- deployment identity remains GitHub Actions OIDC → `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- account remains `658980433673`;
- region remains `ap-south-1`;
- protected environment remains `aws-nonprod-parser`;
- existing bounded `rolesanywhere:TagResource` policy remains unchanged;
- RuntimeBoundary Version 2 remains unchanged;
- existing partial non-production resources remain preserved;
- no production authority.

---

## 7. Required Validation Before Handoff

Claude Engineering must statically verify that the proposed workflow correction:

1. passes the exact PEM file contents without unintended escaping or transformation;
2. preserves multiline certificate content correctly;
3. does not print certificate contents unnecessarily to logs;
4. does not expose any private material;
5. retains the exact existing Trust Anchor name, tags, enabled state, account/region execution context, and idempotent reuse behavior;
6. changes no IAM or security boundary;
7. changes no unrelated workflow stage.

No live AWS validation is authorized by this instruction.

---

## 8. Required Deliverable

Return:

`communication/live/report1.160.md`

The report must include:

- exact instruction executed;
- exact canonical `main` SHA reviewed;
- exact workflow lines/path reviewed;
- root-cause classification;
- AWS documentation relied upon, if any;
- exact proposed or implemented workflow correction;
- before/after serialization behavior explanation;
- static validation performed;
- confirmation all locked controls remain unchanged;
- confirmation no AWS/workflow run occurred;
- final disposition exactly one of:

`GC-38R CA SERIALIZATION REVIEW — NARROW WORKFLOW CORRECTION READY`

or

`GC-38R CA SERIALIZATION REVIEW — STOPPED — ROOT CAUSE NOT VERIFIED`

or

`GC-38R CA SERIALIZATION REVIEW — STOPPED — BROADER CHANGE REQUIRED`

If code is changed, submit the workflow change and report through a dedicated human-reviewed PR.

No self-merge.

---

## 9. Next Gate

A successful engineering correction does not authorize a Phase B rerun.

After the correction and report are human-reviewed and merged, Mission Control will assess whether independent review is required and will separately authorize any future rerun.

---

## 10. Mission Control Decision

`SB-P-1.11-GC-38R — BOUNDED CA CERTIFICATE SERIALIZATION WORKFLOW CORRECTION REVIEW AUTHORIZED AFTER HUMAN MERGE`
