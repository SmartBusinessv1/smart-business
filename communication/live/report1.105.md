# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE REVIEW REPORT

## SB-P-1.11-GC-2 — AWS Lambda Specialist Review Gate — Stage B

**Report ID:** report1.105  
**Mission:** SB-P-1.11-GC-2 — AWS Lambda Specialist Review Gate  
**Authorized By:** `communication/live/instruction1.98.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** REVIEW ONLY — STAGE B  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Final Verdict

`AWS LAMBDA SECURITY & PERMISSIONS REVIEW — CHANGES REQUIRED`

The selected AWS Lambda parser boundary is directionally sound and materially stronger than the rejected Lovable/Cloudflare in-process parser path for execution isolation. Standard Lambda default compute, a private transient S3 transport bridge, AWS_IAM/SigV4 invocation, the existing EC-2 per-business guard, strict parse-before-write ordering, and a parser with no Supabase/Product Truth authority can satisfy the locked security outcomes.

However, Stage B identified three load-bearing security architecture gaps that must be corrected and re-reviewed before Mission Control may treat the Lambda boundary as ready for an implementation specification:

1. **SEC-L-B1 — Smart Business → AWS workload credentials are not closed.** The reviewed architecture prefers IAM/SigV4, but it does not select and prove the exact credential source for the external Lovable/Cloudflare server runtime. AWS recommends temporary credentials for non-AWS workloads. A long-lived IAM user key in server environment storage is technically possible but must not be silently accepted as the target architecture without an explicit risk decision, least-privilege policy, storage boundary, and rotation/revocation contract.
2. **SEC-L-B2 — the presigned S3 upload is replayable/mutable until expiry unless its uploaded bytes are cryptographically bound to the parse request.** AWS documents presigned capabilities as bearer capabilities usable until expiry. Exact key + size is necessary but does not by itself stop the same signed upload capability from overwriting that same key before Lambda reads it. The final architecture must bind the upload to an expected checksum and verify that checksum before parsing.
3. **SEC-L-B3 — object locator tenancy and exceptional-retention semantics are not yet explicit enough.** Smart Business must prove that a browser cannot submit another merchant's opaque key for parsing merely because it knows/obtains that key, and the dedicated transient bucket must have deletion semantics that do not preserve raw historical versions after “immediate deletion.”

These are bounded security corrections. They do not require a parser redesign, a second backend, R2, Product Truth changes, permission expansion, a twentieth Catalog command, or broad AWS architecture.

The existing parser/runtime security chain remains preserved: EC-2 per-business abuse protection is mandatory; EC-3 parse-before-write and opaque failure sanitization remain mandatory; all locked file/decompression/data-shape limits remain unchanged.

---

## 2. Exact Canonical Baseline Reviewed

Latest merged GitHub `main` reviewed at Stage B start:

`b881b1eb775899164a35b7691fda3d41ddf760e2`

Required merged inputs reviewed:

- `communication/live/instruction1.98.md`;
- `communication/live/report1.103.md` — AWS Lambda selection;
- `communication/live/report1.104.md` — merged Stage A Infrastructure Operations PASS and exact S3/Lambda transport proposal;
- `communication/live/report1.90.md` through `communication/live/report1.95.md` — preserved parser/runtime security evidence chain;
- especially `report1.93.md` and `report1.94.md` for EC-2 and EC-3 requirements.

This Stage B review did not reopen the Founder Workflow Reconciliation security PASS and did not change Product Truth, Catalog commands, RLS/grants, role authority, or the Supabase/service-role boundary.

---

## 3. Authoritative AWS Security Sources Reviewed

Load-bearing AWS facts were checked against current AWS documentation only:

- AWS Lambda Function URL authentication and authorization (`AWS_IAM`, SigV4, `lambda:InvokeFunctionUrl`, `lambda:InvokeFunction`, `lambda:InvokedViaFunctionUrl`);
- AWS Lambda reserved concurrency;
- AWS IAM security best practices for workloads and temporary credentials;
- AWS IAM access-key update/rotation procedure;
- AWS IAM Roles Anywhere for non-AWS workloads;
- Amazon S3 presigned URLs/capabilities and expiry;
- Amazon S3 SigV4 browser POST policy conditions;
- Amazon S3 checksum support for object uploads and `HeadObject`;
- Amazon S3 Block Public Access and default server-side encryption;
- Amazon S3 Lifecycle expiration behavior.

Provider evidence relevant to this decision:

- Function URLs using `AWS_IAM` require SigV4 and Lambda validates the signature before processing the request.
- New Function URL authorization requires both `lambda:InvokeFunctionUrl` and `lambda:InvokeFunction`; the `lambda:InvokedViaFunctionUrl` condition can restrict the latter so the principal cannot use other Lambda invocation methods.
- AWS recommends temporary credentials with IAM roles for workloads, including workloads outside AWS; IAM Roles Anywhere is one AWS-native option for non-AWS workloads, but requires X.509 workload identity and therefore is not automatically compatible merely because it exists.
- Presigned S3 capabilities remain usable until expiry and should be treated as bearer capabilities.
- S3 SigV4 POST policies support exact-match conditions and `content-length-range`.
- S3 supports SHA-256 object checksums; uploaded checksum metadata can be returned by object metadata APIs when supplied during upload.
- Reserved concurrency is both a lower/upper allocation boundary for the function and can cap function scale; it is not a per-business authorization mechanism.

---

# SEC-L-1 — Authentication Boundary

## 4. AWS_IAM / SigV4 Is the Correct Invocation Boundary

**Architecture disposition:** ACCEPTABLE IN PRINCIPLE, WITH SEC-L-B1 BLOCKER.

The parser Function URL must use:

`AuthType = AWS_IAM`

and every Smart Business server invocation must be SigV4-signed.

No `AuthType = NONE` path is acceptable for the production parser.

The parser must not implement its own shared-secret bearer header as a substitute for AWS_IAM merely for convenience.

### 4.1 Direct invocation prevention

Later infrastructure/IAM configuration must enforce all of the following together:

1. the Smart Business AWS principal has only the permissions required for the exact parser Function URL and parser-ingress upload signing;
2. Function URL invocation requires `lambda:InvokeFunctionUrl` and `lambda:InvokeFunction` for the exact function ARN/alias;
3. `lambda:InvokeFunction` is restricted with `lambda:InvokedViaFunctionUrl = true` so the same principal cannot bypass the URL boundary using the ordinary `InvokeFunction` API;
4. the function resource policy grants no public principal and no wildcard external principal;
5. `AuthType = NONE` is prohibited;
6. administrative Lambda actions (`UpdateFunctionCode`, `UpdateFunctionConfiguration`, `CreateFunctionUrlConfig`, `UpdateFunctionUrlConfig`, IAM policy mutation, concurrency mutation) are not granted to the runtime caller principal.

This closes unauthorized direct Lambda invocation at the AWS policy boundary rather than trusting URL secrecy.

### 4.2 Credential placement

No AWS signing secret may exist in:

- browser JavaScript;
- `VITE_*` or other client-exposed environment variables;
- HTML, serialized server-function payloads, browser storage, cookies, local storage, service workers, source maps, logs, telemetry, analytics, error responses, downloadable files, or merchant-visible debug output.

The signer executes only inside the authenticated Smart Business server runtime.

The browser may receive a narrowly scoped S3 POST policy/signature as an upload capability. That capability is not permission to receive or possess the underlying AWS secret access key. The complete AWS signing credential set must never be delivered to browser code.

### 4.3 SEC-L-B1 — exact workload credential source is unresolved

The existing Smart Business server runtime is outside AWS. It therefore does not automatically receive an AWS execution role the way Lambda itself does.

AWS security guidance prefers temporary credentials for external workloads. The reviewed architecture does not yet choose and prove one exact production credential mechanism compatible with the Lovable/Cloudflare server runtime.

Security therefore does **not** approve an unspecified long-lived IAM access key by default.

Before a positive Stage B verdict, the corrected architecture must select exactly one of the following classes and prove compatibility:

- an AWS-supported temporary-credential federation mechanism for the actual Smart Business server runtime, with exact issuer/trust/rotation semantics; or
- if Mission Control explicitly accepts the residual risk of a long-lived machine access key for Phase 1, a dedicated non-human least-privilege IAM principal whose access key is stored only in server-secret storage and whose permissions are constrained to the exact S3 upload-signing scope and exact Lambda Function URL invocation scope.

If the long-lived-key exception is selected, the minimum rotation/revocation contract is:

1. two-key overlap rotation using AWS's documented access-key update workflow;
2. create second key while old key remains active;
3. update only server-side secret storage;
4. verify production-equivalent signed S3/Lambda calls with the new key;
5. deactivate the old key;
6. verify no remaining use via AWS access-key last-used evidence;
7. delete the old key after the bounded rollback window;
8. immediate deactivate/delete on suspected compromise;
9. no self-service IAM permission for the runtime principal to create/rotate its own keys;
10. credential rotation evidence must be operationally documented before production acceptance.

A calendar rotation interval should be set by the Infrastructure/Operations security standard; this review does not invent an arbitrary interval unsupported by the current governance source. Compromise-triggered rotation is immediate.

**SEC-L-1 disposition:** `CHANGES REQUIRED — SEC-L-B1`.

---

# SEC-L-2 — Execution Isolation

## 5. Standard Lambda Isolation Is Acceptable

**Disposition:** PASS AS ARCHITECTURE REQUIREMENT.

Stage A selected standard Lambda default compute and rejected Lambda Managed Instances. That is the correct security choice for this parser.

Security distinguishes three separate controls:

1. **Provider execution isolation:** standard Lambda default compute isolates concurrent invocations into separate execution environments. This protects one active parse from sharing the same application execution context with another concurrent parse.
2. **Application-level abuse control:** EC-2 remains mandatory and still permits at most one expensive import preview in flight per authoritative business, with bounded short-window attempt control. Lambda isolation does not replace this.
3. **AWS account/function scale/cost control:** reserved concurrency and monitoring cap account-level blast radius. They do not authorize a merchant and are not a substitute for EC-2.

Warm environment reuse between sequential requests must not make globals or `/tmp` authoritative. Parser code must not persist merchant file bytes, parsed rows, business identity, or secrets in reusable global state.

---

# SEC-L-3 — Authority Minimization

## 6. Parser Must Remain a Pure Parsing Boundary

**Disposition:** PASS AS LOCKED REQUIREMENT.

The Lambda parser execution role must have no:

- Supabase service-role key;
- Supabase anon/publishable key unless later proven strictly necessary (none is needed in the reviewed architecture);
- merchant caller JWT;
- Catalog command credentials;
- Product Truth write access;
- database connection string;
- business decision authority;
- RLS-bypass authority;
- ability to invoke any of the nineteen Catalog commands;
- ability to mutate import-support tables;
- permission to call arbitrary AWS services.

The parser execution role needs only the minimum provider permissions required to:

- read the exact private parser-ingress object supplied by trusted Smart Business control flow;
- delete that object;
- write bounded operational logs/metrics where configured.

It must not have `s3:PutObject`, `s3:ListBucket`, public ACL permissions, bucket-policy administration, IAM administration, or Lambda administration.

The parser input contract is raw object locator + allowlisted non-authoritative parse metadata. The output contract is the allowlisted parser result only.

---

# SEC-L-4 — Business Identity and Tenancy

## 7. Parser Does Not Need Authoritative Business Identity

**Disposition:** CHANGES REQUIRED ONLY FOR LOCATOR BINDING — SEC-L-B3.

The parser should not receive `businessId` as an authorization primitive.

The authoritative tenant decision remains entirely inside Smart Business:

1. validate caller JWT;
2. re-derive Owner/business from authoritative Smart Business data;
3. acquire EC-2 guard using the server-derived business identity;
4. issue one upload capability for one server-generated opaque object key;
5. after upload, accept parsing only for an object locator that Smart Business can prove was issued for that same authenticated business/request;
6. invoke Lambda server-to-server using AWS_IAM/SigV4.

### SEC-L-B3 — object locator binding must be explicit

An opaque random key is not, by itself, authorization.

The corrected architecture must guarantee that the Smart Business server never accepts a browser-supplied arbitrary S3 object key and forwards it to Lambda merely because the key syntactically belongs to the parser prefix.

The minimum acceptable design is a server-authenticated upload lease/capability binding containing:

- authoritative server-derived `businessId`;
- server-generated high-entropy object key;
- issued-at/expiry;
- expected file size and checksum once known;
- consumed/terminal state or equivalent replay-safe binding.

This may be carried by the already-required narrow EC-2 shared guard/support primitive or by an equivalently narrow server-verifiable capability. It must not become an import batch/row or Product Truth record before parse/classification completes.

Merchant A must be unable to cause Smart Business to parse Merchant B's object even if an object locator is learned accidentally.

---

# SEC-L-5 — Upload Transport Security

## 8. Private S3 Parser-Ingress Boundary

Stage A's S3 dependency is acceptable only as a transport bridge and only after separate Mission Control authorization.

Mandatory bucket/security properties for a later implementation specification:

- dedicated parser-ingress bucket or equivalently dedicated security boundary;
- region aligned with the parser Lambda (`ap-south-1` per Stage A);
- all S3 Block Public Access controls enabled;
- no public ACL/policy path;
- HTTPS/TLS required; bucket policy should deny insecure transport;
- default encryption at rest enabled (SSE-S3 is sufficient for the current data classification unless a later explicit requirement mandates SSE-KMS);
- no public listing/read;
- browser capability is upload-only to exactly one object key;
- no browser GET/LIST/DELETE capability;
- raw object names are high-entropy opaque identifiers with no merchant name, business name, email, phone, SKU, Reference Cost, or other business data embedded;
- no cross-region replication;
- no Object Lock;
- no retention policy that prevents immediate delete;
- bucket versioning must be **disabled** for this transient parser-ingress bucket unless the implementation separately proves permanent deletion of every generated version. Versioning must not turn an overwrite/retry into retained historical raw files.

### 8.1 Upload scope and size

The S3 SigV4 POST policy must use:

- exact bucket;
- exact object key (not a broad merchant-controlled prefix);
- maximum content length `5,242,880` bytes;
- minimum sensible non-zero length;
- short expiry;
- only required form fields;
- no caller-selected ACL;
- no wildcard success redirect to arbitrary origins.

Content type and filename extension are hints only. Lambda must still perform the canonical structure/content validation and decompression containment.

### 8.2 SEC-L-B2 — presigned capability reuse / overwrite race

AWS presigned capabilities are bearer capabilities and can be used until they expire. Exact key + content-length conditions prevent cross-key upload and oversize upload, but do not by themselves prove one-time use.

A merchant or anyone holding the still-valid capability could otherwise upload a replacement object to the same key before Lambda reads it.

The corrected architecture must therefore bind the exact uploaded bytes to the parse invocation:

1. client computes SHA-256 for the file before requesting/finalizing the upload capability;
2. Smart Business binds the expected SHA-256 to the authenticated upload lease/capability;
3. presigned POST requires the corresponding S3 checksum field/algorithm where supported by the selected POST flow;
4. Smart Business passes expected checksum to Lambda only through the signed server-to-server control request;
5. Lambda obtains object metadata and verifies object size and checksum before reading/parsing;
6. a mismatch fails closed, deletes the object if permitted, and returns only a sanitized failure;
7. the object key is consumed exactly once for a successful parse request; repeat parse requests must fail closed or be explicitly replay-safe against the same immutable checksum-bound bytes;
8. expiry is kept short enough to minimize capability theft/replay exposure. **Five minutes maximum** is the Phase 1 security ceiling unless later runtime evidence demonstrates a smaller practical value; shorter is preferred.

This is a narrow integrity binding, not a new business workflow.

### 8.3 Cross-business isolation

The browser cannot read objects because it receives no GET capability. Lambda can read only through its execution role, and only Smart Business can invoke Lambda through the AWS_IAM boundary.

Cross-business safety therefore depends on both:

- the server-side business→object binding in SEC-L-B3; and
- unpredictable exact object keys.

Neither must be omitted.

---

# SEC-L-6 — Parse-Before-Write Preservation

## 9. Required Ordering

**Disposition:** PASS AS LOCKED REQUIREMENT.

The external parser transport changes where parsing executes, not when Smart Business may write authoritative workflow state.

Required order:

1. browser calls authenticated Smart Business server endpoint;
2. Smart Business validates caller JWT;
3. Smart Business re-derives Owner and authoritative business;
4. Smart Business acquires EC-2 per-business guard;
5. Smart Business issues bounded parser-ingress upload capability;
6. browser uploads raw bytes to private S3;
7. Smart Business validates same-business upload lease/object binding;
8. Smart Business invokes Lambda using server-side SigV4;
9. Lambda checks object existence, exact size/checksum, reads at most 5 MiB, and deletes the raw object immediately after successful read;
10. Lambda verifies CSV/XLSX structure;
11. XLSX actual-produced decompression is capped at 25 MiB before ExcelJS materialization;
12. Lambda parses and enforces the locked row/column/cell limits;
13. Lambda returns only allowlisted parser output;
14. Smart Business validates response envelope/schema and treats malformed/truncated/unexpected output as failure;
15. Smart Business performs business field validation/classification using caller-JWT authority;
16. only after complete successful parse + Smart Business validation/classification may privileged import-support bookkeeping writes begin;
17. preview performs no Catalog/Product Truth mutation.

The temporary S3 object is transport state, not an import-support batch/row. Creating that transient transport object before parse does not relax EC-3, provided no Smart Business import batch/row or Product Truth mutation occurs before successful parsing/classification.

Lambda timeout, AWS auth failure, S3 failure, checksum failure, parser failure, or malformed output must leave zero import batch/row and zero Product Truth mutation.

---

# SEC-L-7 — Failure Sanitization

## 10. Opaque Provider Failure Boundary

**Disposition:** PASS AS LOCKED REQUIREMENT.

Smart Business must never render raw AWS/S3/Lambda error bodies directly to a merchant.

The caller-facing error mapper must treat these as closed categories:

- upload too large;
- upload expired/retry required;
- upload integrity failure;
- unsupported/malformed file;
- decompression limit exceeded;
- parse/data-shape limit exceeded;
- parser timeout/runtime failure;
- temporary parser service unavailable;
- import busy/rate-limited;
- generic retryable failure.

Merchant-visible failures must not include:

- Lambda/S3 ARNs;
- AWS account IDs;
- raw SigV4 canonical request details;
- access key IDs unless unavoidable in opaque browser POST fields (never display them in UI/error text);
- secret keys/session secrets;
- AWS request IDs unless an internal support workflow explicitly needs a correlation token, in which case use a Smart Business-generated correlation ID instead;
- CloudWatch log group names;
- S3 bucket/object internal identifiers;
- raw XML/JSON AWS error bodies;
- stack traces;
- internal source paths;
- environment values;
- Supabase credentials;
- SQL;
- raw merchant file contents, rows, cells, category names, Reference Cost values, or filenames beyond sanitized merchant-visible filename handling.

Browser upload failures from S3 must be intercepted and mapped to a Smart Business message rather than displaying the raw S3 XML response.

---

# SEC-L-8 — Abuse and Denial-of-Wallet

## 11. EC-2 Remains Mandatory

**Disposition:** PASS WITH MANDATORY DEFENSE-IN-DEPTH.

The existing EC-2 contract is unchanged:

- one expensive preview in flight per server-derived business;
- bounded short-window attempt limit;
- durable/shared guard/lease semantics;
- expiry independent of application `finally`;
- fail-closed sanitized response;
- no cross-business guard identity manipulation.

This control must execute before presign issuance and before any Lambda invocation.

### 11.1 Lambda reserved concurrency

A non-zero finite reserved-concurrency cap is **security-required defense-in-depth** for Phase 1 because it creates a provider-side upper bound on simultaneous parser executions and prevents unconstrained Lambda scale/cost growth if an application-level guard is bypassed or compromised.

The exact integer may be tuned from pilot measurements, but production deployment may not leave the parser function on effectively unbounded account-shared concurrency.

Reserved concurrency is not authorization and must not be used instead of EC-2.

### 11.2 Cost monitoring

Before production acceptance, Infrastructure Operations must configure and verify:

- Lambda invocation/error/throttle/duration metrics;
- S3 request/storage monitoring appropriate to the transient bucket;
- AWS Budget/cost-alert thresholds appropriate to Phase 1;
- operational alerting for unexpected invocation spikes, throttling, cleanup failures, and retained parser-ingress objects.

Budget alerts are detection/response controls, not hard authorization or rate limits.

---

# SEC-L-9 — Data Minimization and Logging

## 12. Logging Contract

**Disposition:** PASS AS LOCKED REQUIREMENT.

Neither Smart Business nor Lambda may log:

- raw upload bytes;
- raw parsed rows or cell values;
- Reference Cost;
- merchant names/product names from imported files;
- original spreadsheet contents;
- authorization headers;
- SigV4 signatures;
- secret access keys;
- session tokens;
- presigned policy bodies/signatures;
- caller JWTs;
- Supabase credentials;
- environment dumps.

Allowed bounded operational metadata includes only what is necessary for diagnosis, for example:

- Smart Business-generated correlation ID;
- high-level event code;
- normalized file kind (`csv`/`xlsx`);
- bounded byte count;
- parser duration bucket/metric;
- success/failure category;
- Lambda cold-start marker where available;
- sanitized internal error code;
- cleanup success/failure;
- no merchant-controlled free text.

S3 object keys should not be emitted to merchant-facing logs. Internal logs may use a one-way hash or short correlation token if object-level cleanup diagnosis requires correlation.

---

# Raw Object Encryption and Lifecycle

## 13. Immediate Delete + Failure Backstop

The raw object lifecycle must be:

1. private encrypted upload;
2. Lambda verifies object metadata/size/checksum;
3. Lambda reads at most 5 MiB into memory;
4. Lambda issues `DeleteObject` **immediately after successful read and before expensive parse**;
5. parser continues on the in-memory bytes;
6. any object surviving because upload was abandoned, invocation never occurred, read failed, or delete failed is removed by a short bucket-level cleanup backstop;
7. cleanup failure is observable/alerted.

Because S3 Lifecycle expiration is asynchronous, it must be described only as a backstop, never as immediate deletion.

For the dedicated transient bucket:

- versioning must be disabled unless all versions are explicitly covered by deletion/expiration;
- Object Lock must be disabled;
- cross-region replication must be absent;
- no Glacier/archive transition is allowed;
- no lifecycle rule may intentionally preserve parser raw objects for analytics or debugging.

If the immediate `DeleteObject` operation fails, Lambda must record only a sanitized cleanup-failure metric/event and the object must remain eligible for the failure-backstop cleanup. The parser must not leak the object locator or AWS failure detail to the merchant.

The exact lifecycle backstop interval is an Infrastructure implementation parameter, but it must be the shortest operationally supported period consistent with reliable cleanup and must never be represented as business retention. Production acceptance must verify the actual effective retention window experimentally/configurationally.

---

# SEC-L-10 — Security Verdict Matrix

## 14. Stage B Findings

| Item | Finding | Disposition |
|---|---|---|
| **SEC-L-1 — Authentication boundary** | AWS_IAM/SigV4 is the correct platform-native boundary; direct invocation can be restricted with Function URL-specific IAM conditions. Exact external-workload credential source/rotation is not yet selected/proven. | **CHANGES REQUIRED — SEC-L-B1** |
| **SEC-L-2 — Execution isolation** | Standard Lambda default compute provides appropriate per-invocation isolation. Managed Instances remain rejected. EC-2 remains independently mandatory. | **PASS** |
| **SEC-L-3 — Authority minimization** | Parser can operate without Supabase, JWT, Catalog, Product Truth, or database authority. Lambda role can be limited to ingress object read/delete + bounded logging. | **PASS WITH BUILD INVARIANTS** |
| **SEC-L-4 — Business identity/tenancy** | Parser does not need authoritative business identity. Smart Business must bind every issued object key to the authenticated business and reject arbitrary browser-supplied locators. | **CHANGES REQUIRED — SEC-L-B3** |
| **SEC-L-5 — Upload transport** | Private encrypted exact-key S3 POST is viable, but exact-key/size alone does not close bearer-capability reuse/overwrite before parse. Checksum binding + short expiry + one-use/consumption semantics are required. | **CHANGES REQUIRED — SEC-L-B2** |
| **SEC-L-6 — Parse-before-write** | External parsing can preserve EC-3 ordering. No import batch/row or Product Truth write may occur before successful parse/validation/classification. | **PASS AS LOCKED REQUIREMENT** |
| **SEC-L-7 — Failure sanitization** | All AWS/S3/Lambda failures can be mapped to fixed Smart Business categories; raw provider bodies must never be surfaced. | **PASS AS LOCKED REQUIREMENT** |
| **SEC-L-8 — Abuse / denial-of-wallet** | EC-2 one-per-business + rate guard remains mandatory. Finite Lambda reserved concurrency and cost monitoring are required defense-in-depth. | **PASS WITH BUILD INVARIANTS** |
| **SEC-L-9 — Data minimization/logging** | Pure parser boundary supports strict minimization; logging contract must prohibit raw rows/cells/file bytes and credentials. | **PASS AS LOCKED REQUIREMENT** |
| **SEC-L-10 — Verdict** | Three bounded security architecture gaps remain. | **CHANGES REQUIRED** |

---

## 15. Blocking Findings

### SEC-L-B1 — External AWS workload credential source / rotation not closed

**Severity:** Blocking architecture gap.

**Required correction:** select and document one exact production credential source for Smart Business server-side SigV4, prove it is compatible with the actual Lovable/Cloudflare runtime, define least privilege, server-only storage, rotation/revocation, and direct-invocation restrictions. Temporary credentials are preferred per AWS security guidance. A long-lived key requires explicit Mission Control risk acceptance and the bounded two-key rotation contract in §4.3.

### SEC-L-B2 — Presigned upload is not immutable/one-use by exact-key + expiry alone

**Severity:** Blocking upload-integrity/replay gap.

**Required correction:** bind upload and parse to the same SHA-256 checksum; require checksum at S3 upload; verify size/checksum before Lambda read/parse; use exact random key; short expiry (maximum five minutes for Phase 1 unless re-reviewed); enforce one-use/consumed semantics; reject mismatched/replayed replacement content.

### SEC-L-B3 — Object locator tenancy + raw deletion semantics incomplete

**Severity:** Blocking tenant/lifecycle gap.

**Required correction:** server-side bind the issued object key to the authoritative business/request; never accept arbitrary client object locators; private bucket, no GET/LIST for browser, versioning/Object Lock/replication off for transient raw data; immediate DeleteObject after successful read; asynchronous cleanup backstop and cleanup monitoring.

No other blocking security defect was found within Stage B scope.

---

## 16. Mandatory Build/Implementation Security Contract After Corrections

A future implementation specification, if separately authorized by Mission Control after these corrections are merged and positively re-reviewed, must carry all of the following without weakening:

1. AWS Lambda standard default compute only; no Managed Instances.
2. `nodejs24.x` target unless Infrastructure later updates the approved runtime through review.
3. locked parser limits: 5 MiB compressed input, 25 MiB actual-produced XLSX decompressed output, 2,000 rows, 40 columns, 2,000 characters per cell, existing parser budget unless separately authorized.
4. EC-2 durable/shared per-business guard before presign/Lambda work.
5. Owner/business server re-derivation; Manager/Employee remain fail-closed.
6. AWS_IAM Function URL only, SigV4 server-side.
7. exact caller IAM principal/policy; no broad wildcard resources.
8. `lambda:InvokedViaFunctionUrl` restriction to prevent direct non-URL invocation by the runtime principal.
9. no browser AWS secret credentials.
10. dedicated private parser-ingress S3 boundary, Block Public Access, TLS, encryption at rest.
11. exact high-entropy key, exact bucket, 5 MiB max POST condition, short expiry.
12. SHA-256 binding across client upload capability → Smart Business upload lease → S3 object metadata → Lambda control request → Lambda pre-parse verification.
13. authoritative server-side business/object binding and one-use/consumed semantics.
14. Lambda role: only exact S3 read/delete scope and bounded logging; no List/Put/admin; no Supabase/database/Product Truth permissions.
15. immediate raw delete after successful bounded read; no persistence for debugging.
16. versioning/Object Lock/replication disabled for transient bucket unless a separately proven deletion model replaces this requirement.
17. lifecycle/cleanup backstop for exceptional objects and monitoring for retained objects.
18. strict parse-before-import-support-write order.
19. preview performs zero Product Truth mutation.
20. malformed/truncated/invalid Lambda response fails closed.
21. fixed sanitized merchant failure mapping; no raw AWS error body.
22. no raw rows/cells/file bytes/Reference Cost/credentials in logs.
23. finite Lambda reserved concurrency before production deployment.
24. AWS cost/usage alarms and parser anomaly monitoring before production acceptance.
25. exactly nineteen public Catalog commands remain; parser runtime adds no Catalog command.

---

## 17. Mandatory Security Test / Verification Matrix After Implementation

Future Build Mode and controlled verification must directly prove at minimum:

1. missing/invalid Smart Business auth cannot obtain an upload capability;
2. non-owner/Manager/Employee cannot obtain Phase 1 upload/parse authority;
3. browser bundle/environment contains no AWS secret access key or complete reusable AWS workload credential;
4. Function URL `AWS_IAM` rejects unsigned request;
5. valid server SigV4 request succeeds;
6. runtime principal cannot invoke Lambda through ordinary `InvokeFunction` API;
7. runtime principal cannot update Lambda configuration/code/IAM;
8. presigned POST accepts exact key/size/checksum and rejects wrong key;
9. upload >5 MiB rejected at S3 policy and again at Lambda verification;
10. expired upload capability rejected;
11. same capability cannot replace bytes with a different checksum and still be parsed;
12. Merchant B cannot cause parse/read/delete of Merchant A's issued object key;
13. browser has no S3 GET/LIST/DELETE capability;
14. S3 bucket is not public and insecure transport is denied;
15. object is encrypted at rest;
16. successful Lambda read triggers immediate object deletion before parse proceeds;
17. abandoned object is removed by backstop cleanup;
18. deletion failure produces internal sanitized alert/metric and no raw provider detail to merchant;
19. versioning/replication/Object Lock posture matches the transient-delete contract;
20. Lambda role cannot access unrelated buckets/prefixes;
21. Lambda role has no Supabase/database credentials;
22. Lambda timeout leaves no import batch/row/Product Truth mutation;
23. S3 failure leaves no import batch/row/Product Truth mutation;
24. malformed parser response leaves no import batch/row/Product Truth mutation;
25. decompression bomb rejected at 25 MiB actual-produced ceiling;
26. maximum legitimate CSV/XLSX fixtures succeed inside approved runtime budget;
27. same-business concurrent preview attempts are bounded by EC-2 before Lambda invocation;
28. different businesses cannot acquire/release one another's EC-2 guard;
29. Lambda reserved concurrency throttles above configured provider ceiling;
30. throttling maps to sanitized merchant behavior;
31. logs contain no raw merchant cells/files/Reference Cost/credentials;
32. raw S3/Lambda error bodies never reach merchant UI;
33. exactly nineteen public Catalog commands remain after implementation.

---

## 18. Preserved Parser/Runtime Security Chain

This review does not weaken or supersede the settled outcomes of `report1.90.md` through `report1.95.md`.

Specifically preserved:

- Cloudflare `node:worker_threads` production incompatibility remains settled;
- the unresolved Cloudflare CPU ceiling is no longer used as the parser execution boundary because external Lambda isolation was selected;
- EC-2 remains mandatory as the application-level per-business abuse guard;
- EC-3 remains mandatory: opaque provider failure handling and parse-before-write ordering;
- all file/decompression/data-shape limits remain unchanged;
- no in-process Cloudflare parser is re-authorized by this report.

---

## 19. Scope Integrity / No-Mutation Record

This Stage B mission performed only:

- read-only GitHub/repository review;
- read-only authoritative AWS documentation review;
- security architecture analysis;
- creation of `communication/live/report1.105.md` on a protected mission branch.

It did **not**:

- implement application code;
- create AWS IAM/Lambda/S3 resources;
- issue AWS credentials;
- create presigned URLs;
- add dependencies;
- create SQL or migrations;
- mutate Supabase test or production;
- change RLS or grants;
- expand service-role authority;
- change Lovable;
- redesign the parser;
- introduce R2;
- modify Product Truth;
- expand Manager/Employee permissions;
- add a twentieth Catalog command;
- weaken the 5 MiB / 25 MiB / row / column / cell limits;
- enter Build Mode;
- deploy;
- publish;
- touch production data;
- declare SB-P-1.11 accepted or complete.

---

## 20. Required Next Gate

Mission Control should not issue Lambda implementation/build authorization from the current Stage B result.

Required next action is a bounded architecture correction that closes only:

- SEC-L-B1 workload credential source/rotation;
- SEC-L-B2 upload checksum/reuse immutability;
- SEC-L-B3 server-side object/business binding and transient-bucket deletion semantics.

After human review and merge of that correction, Security & Permissions Architecture should perform a short re-review limited to those three findings and regression of the already-passed SEC-L-2/3/6/7/8/9 boundaries.

The new narrow S3 transport dependency still requires explicit Mission Control authorization before any implementation resource creation.

---

## 21. Final Verdict

`AWS LAMBDA SECURITY & PERMISSIONS REVIEW — CHANGES REQUIRED`
