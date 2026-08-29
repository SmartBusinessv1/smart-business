# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE CONFIRMATION REPORT

## SB-P-1.11-GC-4 — Lambda Security Architecture Confirmation Review

**Report ID:** report1.107  
**Mission:** SB-P-1.11-GC-4 — Lambda Security Architecture Confirmation Review  
**Authorized By:** `communication/live/instruction1.100.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** REVIEW ONLY — SHORT CONFIRMATION  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Final Verdict

`AWS LAMBDA SECURITY ARCHITECTURE CONFIRMATION — PASS`

The three blocking findings from `communication/live/report1.105.md` are sufficiently closed by the corrected architecture in merged `communication/live/report1.106.md`.

- **SEC-L-B1 / CONF-B1:** PASS — AWS IAM Roles Anywhere is a genuine external-workload temporary-credential mechanism that can be implemented in the actual Lovable/Cloudflare server runtime without requiring the AWS signing-helper binary, subprocess execution, filesystem-dependent native tooling, or browser-delivered AWS credentials. The remaining end-entity private key is a sensitive workload credential and must stay only in server-side encrypted secret storage, be imported into the runtime crypto boundary without being made extractable where practical, never be serialized/logged, and be independently rotatable/revocable.
- **SEC-L-B2 / CONF-B2:** PASS — the corrected upload contract binds the exact expected SHA-256, exact byte length, exact opaque object key, and authenticated lease identity before upload capability issuance; S3 POST policy and S3 checksum validation enforce the declared checksum at upload time; Lambda independently verifies object size/checksum before parsing; the lease provides one-use/replay-safe dispatch; the 5 MiB compressed-input limit is unchanged.
- **SEC-L-B3 / CONF-B3:** PASS — the Parser Upload Lease binds the server-derived Owner/business identity, request, object key, checksum, size, expiry, and consumption state without becoming import Product Truth. The browser never supplies authoritative object location, receives no GET/LIST/DELETE authority, and cannot cause one merchant's object to be parsed under another merchant's authority. Private S3, immediate deletion after successful read, disabled retention features, and bounded failure cleanup preserve transient raw-object handling.

No new load-bearing blocker is introduced by these corrections.

This PASS means only that the Lambda + transient S3 security architecture is sufficiently closed for Mission Control to prepare a later implementation specification. It does not authorize Build Lock, Build Mode, AWS/S3/IAM resource creation, code, SQL, migration, Supabase mutation, RLS/grant changes, deployment, publication, production use, or SB-P-1.11 acceptance.

---

## 2. Exact Merged `main` SHA Reviewed

Latest merged `main` at review start:

`bd952b0eefc18807c12826a02a929d6c06e4c298`

This is the merge commit for PR #234, which human-reviewed and merged `communication/live/instruction1.100.md` before this review began.

---

## 3. Exact Inputs Reviewed

Required merged repository inputs:

- `communication/live/instruction1.100.md`
- `communication/live/report1.106.md`
- `communication/live/report1.105.md`
- `communication/live/report1.103.md`
- `communication/live/report1.104.md`
- `communication/live/report1.93.md`
- `communication/live/report1.94.md`
- `communication/live/instruction1.98.md`
- `communication/live/instruction1.99.md`

Preserved architecture/security baseline:

- standard AWS Lambda default compute;
- `ap-south-1` Phase 1 region assumption;
- transient private S3 parser-ingress transport only;
- 5 MiB compressed input;
- 25 MiB actual-produced XLSX decompressed-byte cap;
- 2,000 rows;
- 40 columns;
- 2,000 characters per cell;
- EC-2 durable/shared per-business pre-parse abuse guard;
- EC-3 parse-before-write ordering and opaque failure handling;
- no Supabase/Product Truth authority in Lambda;
- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- no R2 workaround and no full hosting migration.

Load-bearing AWS facts were independently checked against current authoritative AWS documentation. Actual Cloudflare runtime capability used for the external-workload compatibility decision was checked against current Cloudflare Workers runtime documentation.

---

# CONF-B1 — SEC-L-B1 External-Workload AWS Credentials

## 4. Disposition

**PASS.**

The corrected architecture genuinely closes the credential-source problem at the architecture level.

### 4.1 Roles Anywhere is a real protocol boundary, not a helper-binary assumption

AWS IAM Roles Anywhere obtains temporary AWS session credentials through the `CreateSession` API. AWS documents the authentication mechanism as a SigV4-compatible canonical HTTP signing process using the private key bound to an X.509 certificate. The certificate is transmitted in `X-Amz-X509`; the optional certificate chain is transmitted in `X-Amz-X509-Chain`; the signature uses RSA PKCS#1 v1.5 or ECDSA depending on the certificate key type.

The AWS documentation also explicitly states that `CreateSession` returns ordinary temporary access key / secret key / session-token credentials for subsequent SigV4 use.

Security conclusion: the architecture does **not** depend on the `aws_signing_helper` executable. That helper is one implementation option, not a protocol requirement.

### 4.2 Compatibility with the actual Lovable/Cloudflare server runtime

The actual Smart Business server target is a Cloudflare Workers runtime through the Lovable/TanStack deployment chain already established in the parser-runtime evidence history.

Cloudflare Workers provides:

- outbound HTTPS through `fetch`;
- Web Crypto `crypto.subtle.sign()`;
- `crypto.subtle.importKey()`;
- RSASSA-PKCS1-v1_5 signing/import support;
- ECDSA signing/import support;
- PKCS8 private-key import capability;
- encrypted Worker secret bindings available server-side, including through `process.env` when Node compatibility is enabled.

Therefore a Roles Anywhere `CreateSession` request can be constructed and signed directly in JavaScript/TypeScript inside the Worker. No subprocess, native helper binary, local filesystem credential process, or long-running host assumption is required.

**Architecture proof standard satisfied:** Roles Anywhere is technically implementable in this runtime.

### 4.3 Private-key handling boundary

The correction does not eliminate all long-lived secret material: the end-entity X.509 private key remains a sensitive workload credential. That is acceptable only under the corrected boundary:

- private key/certificate material exists only in deployed server-side encrypted secret storage;
- never in `VITE_*`, browser bundles, HTML, serialized server-function payloads, source maps, cookies, browser storage, analytics, telemetry, logs, error bodies, or downloadable artifacts;
- imported into the runtime crypto API for signing and not re-exported; Build Mode should set the imported `CryptoKey` non-extractable where the selected implementation permits;
- no private CA root key exists in the running Worker; the CA private key remains offline/outside the application runtime;
- temporary AWS session credentials live only in server memory for the bounded operation/session duration and are never returned to the browser or persisted;
- no long-lived IAM user access key is part of the selected design.

This is materially safer than an indefinitely valid AWS secret access key stored in the application environment because AWS resource access is performed with short-lived role sessions and the certificate trust can be revoked independently.

### 4.4 Rotation, revocation, expiry, and compromise response

`report1.106.md` defines the necessary two-tier model:

1. short-lived Roles Anywhere session credentials expire automatically;
2. the longer-lived end-entity certificate/private key is rotated through overlapping certificate issuance, server-secret replacement, production-equivalent validation, old-certificate retirement, and revocation/de-registration/expiry.

On compromise, the certificate is revoked/removed from trust and replacement material is issued; the runtime principal has no IAM administrative permission to change its own trust or permissions.

This is sufficient architecture closure. Exact calendar cadence belongs to the later operations/implementation contract and is not a missing security architecture decision here.

### 4.5 Least privilege and direct Lambda invocation prevention

The external caller role remains limited to:

- S3 `PutObject` authority for the narrow parser-ingress scope necessary to mint the approved upload capability;
- `lambda:InvokeFunctionUrl` and `lambda:InvokeFunction` only for the exact parser function/alias.

The function URL remains `AWS_IAM` authenticated, and `lambda:InvokeFunction` is conditioned with `lambda:InvokedViaFunctionUrl = true`. AWS documents this condition specifically to prevent the same principal from invoking the function through non-Function-URL invocation paths.

No Lambda administration, IAM administration, S3 read/list/delete, database authority, or Product Truth authority is granted to the external caller principal.

### 4.6 Implementation proof still required later

A future implementation mission must directly prove, against the production-equivalent Cloudflare runtime and a non-production AWS environment:

- certificate/private-key import succeeds;
- the exact AWS4-X509 canonical request/signature is accepted by Roles Anywhere `CreateSession`;
- returned temporary credentials successfully sign the approved S3 POST policy and Function URL request;
- browser/client artifacts contain no certificate private key or AWS session credential;
- the runtime does not require `aws_signing_helper` or any unsupported binary;
- revocation/rotation failure modes are tested.

These are implementation-verification requirements, not an architecture blocker.

**CONF-B1: PASS.**

---

# CONF-B2 — SEC-L-B2 Upload Integrity and Replay Protection

## 5. Disposition

**PASS.**

The correction closes the prior overwrite/replay gap without weakening the 5 MiB limit.

### 5.1 Exact-byte authorization binding

Before upload capability issuance:

- browser computes SHA-256 over the exact selected bytes;
- authenticated Smart Business server receives the declared SHA-256 and exact byte length;
- Smart Business re-derives Owner/business and acquires EC-2 first;
- Smart Business creates the lease with expected SHA-256, exact expected byte length, exact server-generated object key, authoritative business/request binding, and bounded expiry.

The browser's declared checksum is not treated as evidence that the file is safe; it is an integrity commitment for the bytes the merchant has chosen to upload. Normal parser/content validation remains mandatory afterward.

### 5.2 S3 policy enforcement

The presigned POST is constrained to:

- exact bucket;
- exact object key;
- exact declared length through a pinned `content-length-range` whose maximum never exceeds 5,242,880 bytes;
- exact `x-amz-checksum-sha256` form field;
- short policy expiry of at most five minutes;
- only required form fields;
- no caller-selected ACL or arbitrary success redirect.

AWS S3 POST policies support exact-match conditions on `x-amz-*` fields, and S3 POST Object supports `x-amz-checksum-sha256` with server-side checksum validation of the uploaded object. A byte substitution that does not match the declared SHA-256 therefore fails the S3 upload integrity check.

### 5.3 Independent Lambda validation

Lambda receives expected object key, exact byte length, and expected SHA-256 only over the authenticated Smart Business → Lambda SigV4 control request.

Before parse work it must:

- resolve only that exact object;
- verify exact size;
- verify the S3 checksum metadata/value against the expected checksum;
- fail closed on mismatch;
- return only a sanitized integrity-failure result;
- never parse a mismatched object.

This provides a second trust boundary independent of the browser's upload-complete signal.

### 5.4 Replay / overwrite safety

The correction correctly does not assume S3 presigned POST is one-time.

One-use behavior is enforced by Smart Business through the Parser Upload Lease:

- capability expiry and lease expiry are bounded and aligned;
- confirmation requires the valid authoritative lease;
- only one atomic claim from `UPLOADED` may dispatch Lambda;
- later/concurrent attempts fail closed before Lambda dispatch;
- after Lambda reads the object, immediate delete removes the raw transport object;
- if response acknowledgement is lost after Lambda already consumed/deleted the object, retry fails closed instead of silently parsing a replacement.

A still-valid POST capability can at worst attempt to upload again to the same exact key with the same exact expected checksum and size. It cannot use that capability to substitute different authorized bytes without breaking the checksum binding, and the one-use lease prevents Smart Business from dispatching an additional parse for the same lease.

### 5.5 Limit preservation

The locked compressed-input ceiling remains exactly:

`5,242,880 bytes`

No shrink or bypass is introduced.

**CONF-B2: PASS.**

---

# CONF-B3 — SEC-L-B3 Business/Request/Object Binding and Raw-Object Lifecycle

## 6. Disposition

**PASS.**

The Parser Upload Lease sufficiently closes object-locator tenancy abuse while remaining support/security state rather than Product Truth.

### 6.1 Authoritative issuance order

Lease issuance is permitted only after:

1. caller authentication;
2. Owner/business re-derivation from authoritative Smart Business state;
3. EC-2 durable/shared per-business guard acquisition;
4. server generation of a high-entropy lease ID and object key.

No browser-supplied business ID or object key becomes authoritative.

### 6.2 Object key properties

Object keys are:

- server-generated;
- high entropy;
- opaque;
- non-enumerable by browser permissions;
- free of merchant/business/customer/file-derived identifying information.

The object locator is not authorization by itself.

### 6.3 Confirmation binding

The browser confirms only with the lease identifier.

Smart Business resolves the object key from its own lease state and re-derives the currently authenticated caller's business. The stored lease business must match the newly derived authoritative business before the lease can move forward.

Therefore Merchant A cannot cause Smart Business to read/parse/delete Merchant B's object merely by learning Merchant B's S3 key or lease identifier.

The Lambda itself does not need to trust or interpret `businessId`; the authorization decision is completed in Smart Business before the signed Lambda invocation.

### 6.4 Lease is not premature import truth

The Parser Upload Lease is narrow transport/security state only.

It is not:

- a Catalog product;
- an Inventory item;
- an import batch;
- an import row;
- a Product Truth record;
- authority to execute any Catalog command.

The preserved EC-3 contract remains: parse/validate/classify must complete before privileged Smart Business import-support bookkeeping or Product Truth mutation begins.

### 6.5 Private S3 and browser permissions

The transient parser-ingress boundary remains:

- private bucket/security boundary;
- S3 Block Public Access enabled;
- TLS required;
- server-side encryption at rest enabled;
- browser receives only upload capability to one exact key;
- no browser `GET`, `LIST`, or `DELETE` capability;
- no public ACL path;
- no cross-region replication;
- no Object Lock;
- versioning disabled for the transient bucket so immediate deletion does not leave a retained prior version.

### 6.6 Immediate deletion and failure backstop

After Lambda has successfully read and integrity-verified the object, raw-object deletion remains immediate and precedes expensive parse work where feasible under the Stage A contract.

Abandoned uploads and failures occurring before normal deletion remain covered by a bounded S3 lifecycle expiration backstop. Lifecycle cleanup is a backstop only; it must not be represented as instantaneous deletion.

Raw file bytes, rows, cells, filenames carrying merchant content, checksums where not operationally necessary, private keys, AWS credentials, stack traces, and raw provider error bodies must not be logged.

**CONF-B3: PASS.**

---

## 7. New Blocker Review

No new load-bearing security blocker is introduced directly by the three corrections.

The following items remain mandatory future implementation evidence, but do not invalidate the corrected architecture:

- manual AWS4-X509 Roles Anywhere signing must be directly proven in the actual production-equivalent Cloudflare runtime;
- certificate/private-key material must use deployed encrypted secret storage and a non-extractable runtime key where practical;
- exact IAM trust/resource policies must be reviewed before deployment;
- exact S3 POST checksum fields/policy conditions must be integration-tested against S3;
- Parser Upload Lease atomic transitions must be tested under concurrency, replay, expiry, cross-business attempts, and network-loss cases;
- immediate deletion and lifecycle failure-backstop behavior must be verified;
- EC-2 remains mandatory and must be implemented/tested separately under later authority;
- reserved Lambda concurrency remains required defense-in-depth for cost/account blast radius and does not replace EC-2.

These requirements belong in the later implementation specification and acceptance test matrix.

---

## 8. Preserved Scope and Authority Boundary

This confirmation review did not:

- implement code;
- add dependencies;
- create AWS resources;
- create IAM Roles Anywhere trust anchors, profiles, roles, certificates, or policies;
- create or modify S3;
- create/configure Lambda;
- create SQL or migrations;
- mutate Supabase;
- change RLS/grants;
- expand service-role authority;
- change Lovable;
- implement parser logic;
- implement EC-2 or Parser Upload Lease logic;
- change Product Truth;
- expand Manager/Employee permissions;
- add a twentieth Catalog command;
- enter Build Lock or Build Mode;
- deploy;
- publish;
- mutate production;
- accept or close SB-P-1.11.

---

## 9. Next Logical Step

After human review and merge of this report, Mission Control may treat the Lambda + transient S3 security architecture as sufficiently closed to prepare a **separate implementation specification / build-preparation mission**.

That future mission must carry forward all implementation-verification requirements listed in this report and in the preserved `report1.103.md` / `report1.104.md` / `report1.105.md` / `report1.93.md` / `report1.94.md` chain.

No Build authority follows automatically from this PASS.

---

## 10. Final Verdict

`AWS LAMBDA SECURITY ARCHITECTURE CONFIRMATION — PASS`
