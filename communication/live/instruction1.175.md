# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE C C5 RUNTIME RETRY AFTER DECIMAL SERIAL CORRECTION

**Instruction ID:** `instruction1.175`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**In Reply To:** merged PR #385 and canonical decimal-serial correction
**Status:** ACTIVE ONLY AFTER FOUNDER HUMAN REVIEW AND MERGE OF THIS INSTRUCTION PR

---

## 1. Objective

Verify whether the human-merged AWS4-X509 certificate-serial correction resolves the Phase C C5 blocker and allows the already-authorized non-production parser path to complete end-to-end.

This is a bounded runtime-verification instruction. It does not authorize new product behavior, new infrastructure design, security-boundary changes, or production action.

---

## 2. Canonical Preconditions

Before execution, verify all of the following:

1. PR #385 is merged into canonical `main`.
2. The merged code changes only the AWS IAM Roles Anywhere Authorization `Credential=` certificate serial representation from hexadecimal to decimal while preserving existing DER/X.509 extraction and all other AWS4-X509 behavior.
3. The existing non-production Worker remains `smart-business-parser-nonprod`.
4. Existing test-only Supabase target remains `smart-business-test` / `drravyyauixltoihzmwo`.
5. Existing AWS non-production parser resources, Trust Anchor, Profile, workload Role, S3 ingress bucket, Lambda, Function URL, and Cloudflare bindings remain unchanged unless this instruction explicitly says otherwise.
6. The existing authenticated diagnostic route, temporary sanitized AWS-layer instrumentation, and throwaway test user/business remain available only because C5 has not yet passed.

If any precondition is not true, STOP and report.

---

## 3. Authorized Deployment

After this instruction is human-reviewed and merged, Claude Engineering may:

1. rebuild from canonical `main` containing the merged PR #385 correction;
2. deploy only to `smart-business-parser-nonprod`;
3. preserve all existing non-production runtime bindings and secrets;
4. verify all required bindings are present and non-empty by safe metadata/name inspection only;
5. confirm the deployed Worker version identity before the diagnostic retry.

Do not display or log secret values.

No production Worker or custom domain is authorized.

---

## 4. C5 Runtime Verification Path

Reattempt the existing authenticated C5 diagnostic using the already-established real merchant/test authentication path and the bounded synthetic fixture only.

Verify, in order:

1. authenticated diagnostic request reaches the existing parser preview flow;
2. parser preview guard succeeds;
3. parser upload lease is issued;
4. AWS Roles Anywhere `CreateSession` is attempted using the corrected decimal certificate serial representation;
5. if successful, short-lived temporary AWS credentials are returned to server memory only and are never logged, displayed, persisted, or sent to the client;
6. S3 presign/upload flow succeeds for the bounded synthetic CSV fixture;
7. confirmation/dispatch reaches the existing AWS IAM-authenticated Lambda Function URL;
8. Lambda executes using the existing non-production parser implementation;
9. bounded synthetic CSV parsing completes with the expected safe result;
10. verify XLSX only if the already-existing path supports it without any new implementation work.

Do not add new parser behavior merely to make this test pass.

---

## 5. Evidence Requirements

Capture only sanitized, non-secret evidence sufficient to establish:

- deployed Worker version identity;
- required binding names present;
- authenticated test path used;
- whether Roles Anywhere `CreateSession` succeeded or failed;
- if successful, confirmation that credentials were short-lived without exposing credential values;
- S3 presign/upload result;
- Lambda Function URL invocation result;
- CSV parse result;
- XLSX result if naturally supported by the existing path;
- confirmation that production was untouched.

Do not expose:

- CA private key or passphrase;
- workload private key;
- certificate PEM bodies;
- raw temporary AWS credentials;
- Authorization headers;
- canonical requests;
- strings-to-sign;
- raw signatures;
- raw provider response bodies;
- presigned S3 fields or URLs containing credentials/signatures;
- Supabase service-role secrets.

---

## 6. Failure Rule

If any new blocker appears at any point:

1. STOP at the first new blocker;
2. do not make a corrective code or AWS configuration change under this instruction;
3. record the exact sanitized failure category / bounded evidence available;
4. open a report-only PR for human review.

No opportunistic fixes are authorized.

---

## 7. Conditional Cleanup After C5 PASS

Cleanup is authorized only if the full required C5 path passes.

If C5 passes:

### 7.1 Repo cleanup

Prepare a separate implementation PR that removes or permanently hard-disables:

- the temporary authenticated GC38R C5 diagnostic route/surface;
- `GC38R_C5_DIAGNOSTIC_ENABLED`-dependent diagnostic entry behavior where no longer required;
- temporary AWS-layer diagnostic categorization added solely for C5 diagnosis, unless a small part is justified as permanent safe production observability and Mission Control explicitly accepts that in review;
- temporary diagnostic-only tests that no longer represent permanent product behavior, while retaining any regression tests that protect the corrected AWS4-X509 decimal-serial requirement.

The cleanup PR must be human-reviewed and merged before redeploying the cleaned Worker.

### 7.2 Runtime/test cleanup

After the cleanup PR is human-merged and the cleaned non-production Worker is deployed, remove only test-only diagnostic runtime bindings that are no longer needed, and delete the throwaway test user/business if safe to do so without affecting retained evidence.

Then verify:

- the temporary diagnostic route is unreachable;
- normal application auth/runtime remains healthy;
- parser secrets remain server-side;
- production remains untouched.

Do not remove the real parser configuration needed by the actual non-production integration.

---

## 8. Reporting

### If C5 fails

Open a report-only PR describing:

- canonical commit deployed;
- Worker version;
- exact sanitized progress point;
- first blocker;
- what was not reached;
- confirmation no unauthorized change occurred.

Disposition:

`GC-38R PHASE C C5 — BLOCKED`

### If C5 passes

Open a report-only PR describing:

- canonical commit deployed;
- Worker version;
- successful Roles Anywhere session result without credential values;
- S3 result;
- Lambda result;
- CSV result;
- XLSX result if applicable;
- cleanup status and any cleanup PR identity if already completed;
- confirmation production was untouched.

Do not declare Phase C fully closed until required cleanup is complete and verified.

---

## 9. Explicitly Not Authorized

This instruction does not authorize:

- any production Supabase migration;
- any production Cloudflare deployment;
- production AWS deployment or migration;
- IAM/security-boundary widening;
- Trust Anchor, Profile, workload Role, permission-policy, or runtime-boundary mutation;
- certificate replacement or CA private-key use;
- Lambda Function URL authentication weakening;
- S3 policy widening;
- new parser/business logic;
- Lovable publication;
- DNS/custom-domain action;
- Product Truth changes;
- Founder acceptance;
- Stage 21+ activity.

---

## 10. Stop Conditions

STOP immediately if execution would require:

- production access or mutation;
- exposing any secret or private key;
- weakening AWS_IAM authentication;
- changing Trust Anchor/Profile/Role permissions;
- replacing certificates;
- adding new product behavior;
- bypassing existing authentication;
- extending scope beyond the existing GC-38R non-production parser integration.

---

**Mission Control Decision:** authorized for bounded non-production runtime retry only after Founder human review and merge of this instruction PR.