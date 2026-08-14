# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE REVIEW REPORT

## SB-P-1.11-GC-19 — Stage C Security & Permissions Review

**Report ID:** report1.124
**Mission:** SB-P-1.11-GC-19 — Stage C Security & Permissions Review
**Authorized By:** `communication/live/instruction1.115.md`
**Executing Room:** Security & Permissions Architecture
**Mode:** SPECIALIST REVIEW ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Database Migration Authority:** NONE
**AWS Resource Authority:** NONE
**Production Mutation Authority:** NONE

---

## 1. Mission and Authority

This report executes the Stage C Security & Permissions Architecture review authorized by merged `communication/live/instruction1.115.md`.

The review evaluates the complete Lambda + transient private S3 parser EIS security boundary after the final merged Infrastructure Operations Stage A PASS and Supabase Backend Architecture Stage B PASS chains.

The review does not authorize EIS lock, implementation-package creation, Build Lock, Build Mode, code implementation, SQL/migration execution, Supabase mutation, AWS/S3/IAM resource creation, Lovable changes, deployment, publication, production use, or SB-P-1.11 acceptance.

Required output for this mission is only:

`communication/live/report1.124.md`

---

## 2. Exact Merged `main` SHA Reviewed

Exact latest merged `main` reviewed:

`daafef1b9eaea4b044177b947161143f44253f07`

The repository `main` ref was verified before substantive review and matched the Mission Control-provided authoritative HEAD exactly.

---

## 3. Canonical Inputs Reviewed

Reviewed from the exact merged baseline:

- `communication/live/instruction1.115.md`;
- `communication/live/instruction1.102.md`;
- `communication/live/report1.108.md`;
- `communication/live/report1.103.md`;
- `communication/live/report1.104.md`;
- `communication/live/report1.105.md`;
- `communication/live/report1.106.md`;
- `communication/live/report1.107.md`;
- `communication/live/report1.109.md`;
- `communication/live/report1.112.md`;
- `communication/live/report1.113.md`;
- `communication/live/report1.114.md`;
- `communication/live/report1.115.md`;
- `communication/live/report1.116.md`;
- `communication/live/report1.117.md`;
- `communication/live/report1.118.md`;
- `communication/live/report1.119.md`;
- `communication/live/report1.120.md`;
- `communication/live/report1.121.md`;
- `communication/live/report1.122.md`;
- `communication/live/report1.123.md`;
- `supabase/migrations/20260727000000_reconcile_default_grants.sql`;
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`;
- `src/integrations/supabase/client.server.ts`.

The relevant parser/runtime security chain in `report1.90.md` through `report1.95.md` was preserved as inherited authority where referenced by the current EIS and specialist chains.

Load-bearing provider claims were rechecked against current authoritative AWS documentation and the current Cloudflare Workers Web Crypto runtime contract where necessary. No third-party provider summary was treated as authority for a load-bearing security conclusion.

---

# ENTRY GATE

## 4. Stage A Infrastructure Entry Gate

**Result: PASS.**

The Infrastructure Operations chain is closed by merged `communication/live/report1.115.md` with the exact verdict:

`LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — PASS`

The final Stage A contract confirms, at EIS level:

- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- transient private S3 parser ingress;
- finite reserved concurrency;
- `ChecksumMode = ENABLED` for checksum retrieval;
- exact 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- the corrected maximum-legitimate and boundary-fixture acceptance matrix;
- no remaining Infrastructure Operations blocker.

Stage A PASS did not grant implementation, AWS resource creation, deployment, or production authority.

No Stage A finding is reopened by this Stage C review.

---

## 5. Stage B Supabase Entry Gate

**Result: PASS.**

The Supabase Backend Architecture chain is closed by merged `communication/live/report1.123.md` with the exact verdict:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

The final Stage B contract confirms:

- six-state Parser Upload Lease lifecycle;
- one-use `CLAIMED` dispatch gate;
- no same-lease Lambda redispatch after unknown outcome;
- physical state/timestamp invariants;
- immutable authority fields;
- illegal-transition prevention;
- bounded failure-code contract;
- EC-2 guard/lease binding;
- browser-role exclusion;
- migration enforcement-before-use ordering;
- actual effective-ACL verification before cutover;
- final `service_role` privilege-neutralization contract for `parser_upload_leases`:
  - inherited/broad direct privilege explicitly revoked;
  - exactly direct `{ SELECT }` restored;
  - lifecycle mutation available only through the accepted narrow helper surface;
- `parser_preview_guards` remains within its already-accepted B3 contract;
- no remaining Supabase Backend Architecture blocker.

Stage B PASS did not grant SQL/migration execution, Supabase mutation, application cutover, Stage C implementation, or production authority.

The Stage C entry gate is therefore satisfied.

---

# SECURITY REVIEW

## 6. IAM Roles Anywhere / AWS4-X509

**Result: PASS.**

### 6.1 Manual `CreateSession` signing is implementable in the actual server runtime

The EIS selects a bounded manual AWS4-X509 signer for IAM Roles Anywhere `CreateSession` rather than depending on `aws_signing_helper`, a subprocess, a native binary, a filesystem-resident certificate helper, or Node-only process APIs.

The provider contract is sufficiently precise at EIS level:

- Roles Anywhere `CreateSession` is an HTTPS request authenticated using the workload X.509 certificate and its private key;
- AWS4-X509 follows SigV4 canonical-request/string-to-sign rules with the X.509-specific algorithm/header/credential-scope differences required by Roles Anywhere;
- the EIS names the required `X-Amz-X509`/certificate-chain handling and the RSA/ECDSA signature variants;
- Cloudflare Workers provides outbound `fetch` and Web Crypto signing primitives sufficient for this bounded signer;
- the EIS explicitly requires production-equivalent acceptance evidence proving the resulting signature is accepted by AWS before deployment.

This is sufficiently precise for a later implementation specification/build package. No unsupported helper binary or runtime dependency remains in the selected architecture.

### 6.2 Certificate and private-key placement

The end-entity private key and certificate/chain remain server-only secret material.

Security requirements preserved:

- never in `VITE_*` or client-bundled variables;
- never in browser JavaScript, HTML, storage, cookies, service workers, source maps, serialized server responses, downloads, telemetry, or merchant-visible errors;
- private key imported as a non-extractable signing key where the runtime path permits;
- no private-key value logged or returned;
- the issuing CA private key is not required by the running Smart Business server.

The certificate itself is not automatically secret in the same cryptographic sense as its private key, but the EIS correctly prohibits unnecessary certificate logging/client exposure and treats the complete workload-identity material as server-side operational configuration.

### 6.3 Temporary credentials

No long-lived IAM user access key is selected.

Roles Anywhere returns temporary AWS session credentials used for ordinary SigV4 operations after `CreateSession`.

The EIS requires:

- short session duration, using the minimum AWS-supported 900-second value for Phase 1 unless later evidence requires a separately reviewed adjustment;
- in-memory use only;
- no persistence;
- no browser delivery;
- no logging;
- no reuse beyond the bounded server operation/session lifetime;
- least-privilege permissions restricted to the exact parser ingress/upload-signing and Function URL invocation needs.

Credential acquisition failure grants no fallback authority and fails closed.

### 6.4 Rotation, revocation, and compromise response

The two-tier model is sufficient at EIS level:

1. short AWS session credentials expire automatically;
2. longer-lived end-entity certificate/private-key identity uses planned overlapping replacement, verification with the new certificate, retirement/revocation of the old certificate, and immediate trust revocation/replacement on suspected compromise.

The architecture does not give the runtime caller principal IAM administration or self-rotation permission.

### 6.5 IAM Roles Anywhere conclusion

The AWS4-X509 path is sufficiently precise and compatible with the actual server runtime for Stage C PASS. Production-equivalent signature acceptance and client-artifact secret scanning remain mandatory later implementation/acceptance evidence, not unresolved architecture blockers.

---

## 7. IAM Authority Separation

**Result: PASS.**

### 7.1 Smart Business external caller principal

The selected caller principal is narrowly bounded.

Permitted authority is limited to:

- `s3:PutObject` only for the dedicated parser-ingress resource scope necessary for one exact presigned POST capability;
- `lambda:InvokeFunctionUrl` on the exact parser function/alias;
- the narrowly required `lambda:InvokeFunction` permission on the exact parser function/alias, conditioned so invocation is only through the Function URL path.

The principal is explicitly prohibited from:

- S3 object read;
- S3 bucket listing;
- S3 object deletion;
- ACL administration;
- broad S3 administration;
- IAM administration;
- Lambda administration or configuration changes;
- concurrency mutation;
- unrelated Lambda invocation;
- CloudWatch/account administration;
- Supabase/database authority;
- Catalog Product Truth authority;
- Inventory Product Truth authority;
- Catalog command authority.

The ability to sign an upload capability is constrained again at the POST-policy layer by exact bucket, exact object key, exact length/checksum conditions, and short expiry.

### 7.2 Lambda execution role

The Lambda execution role is separate from the external caller identity.

Permitted authority is limited to:

- S3 metadata/read access needed for `HeadObject`/`GetObject` on parser-ingress object scope;
- `DeleteObject` on the same parser-ingress object scope;
- bounded log/metric emission to the function's own observability surface.

Explicitly absent:

- S3 `PutObject`;
- S3 broad listing;
- IAM administration;
- Lambda administration;
- Supabase service-role key;
- database credential;
- caller JWT;
- Product Truth mutation authority;
- Catalog command authority;
- Inventory mutation authority.

### 7.3 Separation conclusion

The external caller can upload/invoke but cannot read/delete parser objects or administer AWS. The Lambda role can verify/read/delete parser objects but cannot create upload capability, mutate business data, or invoke Product Truth operations.

No cross-domain privilege path is created.

---

## 8. Lambda Function URL Boundary

**Result: PASS.**

The EIS preserves the required AWS authorization boundary:

- `AuthType = AWS_IAM` is mandatory;
- `AuthType = NONE` is prohibited;
- no public or wildcard principal is permitted;
- `lambda:InvokeFunctionUrl` is scoped to the exact parser function/production alias;
- the required `lambda:InvokeFunction` permission is scoped to the same function/alias;
- `lambda:InvokedViaFunctionUrl = true` constrains the external caller's ordinary InvokeFunction authority so it cannot use the same principal to bypass the Function URL entry path;
- browser clients do not directly invoke the parser Function URL with AWS credentials;
- URL secrecy is not treated as authorization;
- the function remains a narrow parser endpoint, not a second general application backend.

A later implementation package must verify the actual IAM identity/resource policy and a negative direct-invoke attempt, but the EIS security architecture is sufficient and fail-closed.

---

## 9. S3 Upload Authorization and Integrity

**Result: PASS.**

### 9.1 Exact upload capability

The presigned POST is bound to:

- one dedicated private parser-ingress bucket;
- one exact server-generated, high-entropy object key;
- exact expected byte length;
- maximum hard input limit of 5,242,880 bytes;
- exact expected SHA-256 value;
- short expiry aligned with the upload lease;
- only required POST fields;
- no browser-controlled ACL;
- no arbitrary success redirect.

The browser receives the bounded upload capability, not the underlying AWS credential.

### 9.2 Still-valid capability replay/substitution

A still-valid upload capability is not assumed to be one-time merely because it is presigned.

The architecture closes the substitution window through two independent controls:

1. S3 POST policy and S3 upload checksum validation require the same exact object key, byte length, and SHA-256 commitment;
2. Lambda independently obtains object metadata with checksum retrieval enabled and compares actual size/checksum against the values passed through the authenticated Smart Business control request before parsing.

A replay using different bytes cannot satisfy the same SHA-256 commitment without detection. A replay of identical bytes does not create new parser-dispatch authority because dispatch is separately gated by the one-use lease claim.

### 9.3 Independent Lambda verification

The corrected Infrastructure contract requires:

`ChecksumMode = ENABLED`

for `HeadObject` checksum retrieval.

Lambda must reject before `GetObject`/parse when:

- object does not exist;
- checksum metadata is absent;
- byte length mismatches;
- SHA-256 mismatches.

### 9.4 Browser authority

The browser receives no:

- `GET` capability;
- `LIST` capability;
- `DELETE` capability;
- bucket-administration authority.

### 9.5 Raw-object lifecycle

The S3 posture remains transient:

- private access;
- TLS-only transport;
- server-side encryption at rest;
- versioning disabled;
- Object Lock disabled;
- replication disabled;
- immediate `DeleteObject` after verified successful read and before decompression/parsing;
- one-day Lifecycle expiration only as failure/abandonment backstop;
- cleanup failures observable.

S3 remains a narrow transport bridge, not durable merchant-file storage.

---

## 10. Tenancy and Cross-Business Isolation

**Result: PASS.**

### 10.1 Authoritative business identity

Business identity is re-derived by the authenticated Smart Business server using the existing Owner/business authority boundary.

The browser does not provide an authoritative `business_id` for:

- EC-2 guard identity;
- lease issuance;
- object authorization;
- parser dispatch;
- support-state mutation.

Manager and Employee remain fail-closed for Phase 1.

### 10.2 Lease/object binding

The Parser Upload Lease binds:

- authoritative business identity;
- creator/actor context;
- guard token;
- high-entropy object key;
- expected byte length;
- expected SHA-256;
- lifecycle state;
- expiry.

At confirmation/dispatch, Smart Business resolves object authority from its own stored lease state and rechecks the currently authenticated caller's server-derived business.

A learned or guessed lease ID or object key therefore does not create parser authority for another business.

### 10.3 EC-2

EC-2 remains:

- business-scoped;
- durable/shared;
- server-authoritative;
- acquired before upload capability issuance;
- fail-closed;
- bound to each lease by the accepted guard token/lease association;
- independent of process-local runtime state.

### 10.4 Final Supabase tenant privilege boundary

The final Stage B contract remains security-coherent:

- browser roles have no direct support-state table/function authority;
- `parser_upload_leases` direct `service_role` privilege must end at exactly `{ SELECT }`;
- lifecycle mutation is helper-only;
- `parser_preview_guards` retains the already-approved B3 support-state model;
- no support-state table is Product Truth;
- no Manager/Employee support-state authority is introduced.

No cross-business parser path is apparent in the accepted architecture.

---

## 11. Abuse and Denial-of-Wallet

**Result: PASS AS DEFENSE-IN-DEPTH ARCHITECTURE.**

The architecture does not rely on any single control as its sole abuse defense.

### 11.1 Business-level abuse boundary

EC-2 provides the authoritative business-level control:

- one expensive preview in flight per business;
- durable/shared lease semantics;
- bounded attempt accounting;
- fixed 10-minute rate window;
- five-attempt Phase 1 threshold as specified by the accepted backend contract;
- fail-closed busy/rate outcomes;
- stale guard recovery through expiry.

### 11.2 Upload/lease-level bounds

- upload capability expires within the accepted short window;
- lease cannot be reused to recreate dispatch authority;
- object key is exact and high entropy;
- upload length/checksum are fixed;
- a new recovery attempt requires a fresh guard/lease/object capability.

### 11.3 Provider/resource-level bounds

- finite Lambda reserved concurrency caps parser function scale and provider-cost blast radius;
- standard Lambda default compute preserves one-invocation-per-execution-environment isolation for concurrent parser requests;
- 15-second provider timeout is an external hard stop;
- 10-second parser budget is a tighter application parser limit;
- 5,242,880-byte raw upload limit;
- 25 MiB produced-byte XLSX containment;
- 2,000-row limit;
- 40-column limit;
- 2,000-character cell limit;
- exact 4,194,304-byte serialized success-response ceiling;
- deterministic `RESPONSE_TOO_LARGE` rejection before success streaming;
- immediate S3 delete plus Lifecycle backstop.

### 11.4 Account-wide exhaustion assessment

No obvious architecture-level path allows one merchant to bypass EC-2 merely by supplying another business identifier or another object key.

Finite reserved concurrency protects the parser function from unbounded function-level scale, while EC-2 constrains each authoritative business. AWS budgets/alarms and operational monitoring remain appropriate defense-in-depth but are not authorization controls.

A compromised valid Owner account can still consume its permitted bounded parser allowance; that residual risk is expected and contained by the combined business-rate, function-concurrency, file-size, execution-time, and response-size limits.

No Stage C blocker is identified in denial-of-wallet architecture.

---

## 12. Parse-Before-Write and Failure Safety

**Result: PASS.**

### 12.1 EC-3 preserved

The accepted order remains:

1. authenticate caller;
2. re-derive Owner/business;
3. acquire EC-2 guard;
4. issue/bind transient lease and upload capability;
5. upload/verify/transport/parse;
6. validate parser response;
7. Smart Business field validation/classification;
8. only then privileged import-support bookkeeping;
9. no Product Truth mutation during preview.

Externalizing parsing to Lambda does not move support-state or Product Truth mutation before successful parsing/classification.

### 12.2 Failure classes

The EIS fails closed for:

- S3 upload failure;
- S3 integrity failure;
- missing object;
- Lambda authorization failure;
- Lambda timeout;
- malformed/corrupt/encrypted/unsupported file;
- parser failure;
- response too large;
- malformed/truncated/unexpected parser response;
- unknown dispatch/result outcome.

None of these conditions grants Catalog or Inventory Product Truth authority.

### 12.3 Unknown outcome and replay

The six-state lease lifecycle gives dispatch a distinct non-terminal `CLAIMED` state.

`UPLOADED → CLAIMED` is the sole one-winner dispatch-authority transition.

Once claimed:

- the same lease cannot return to `UPLOADED`;
- the same lease cannot regain dispatch authority;
- a duplicate request cannot dispatch Lambda a second time;
- unresolved outcome is converted fail-closed to bounded `FAILED` state after the accepted resolution window when next touched;
- recovery requires a new guard acquisition, new lease, new object key, and new upload capability.

### 12.4 Product Truth boundary

Parser success is not Product Truth authority.

Catalog and Inventory truth remain behind the accepted Founder Workflow, caller authorization, D-047/D-068 protections, BKR-1 through BKR-5, and exactly nineteen public Catalog commands.

No twentieth Catalog command or parser-side mutation path is introduced.

### 12.5 Failure sanitization

Raw AWS/provider bodies, stack traces, ARNs where unnecessary, credentials, internal paths, SQL details, and merchant file content must not be returned to merchants.

Only closed, bounded internal failure codes and fixed merchant-safe categories are permitted.

---

## 13. Logging, Secrets, and Data Minimization

**Result: PASS.**

### 13.1 Forbidden data

Smart Business and Lambda logs/metrics must not contain:

- raw merchant files;
- spreadsheet rows;
- cell contents;
- certificate private keys;
- unnecessary certificate blobs/chains;
- AWS temporary access key, secret key, or session token;
- Supabase service-role secret;
- caller JWT;
- presigned POST capability fields/signature;
- raw provider response/error bodies;
- stack traces in client-visible telemetry;
- full checksums unless strictly required for a bounded diagnostic path;
- merchant-sensitive content merely for correlation.

### 13.2 Allowlisted observability

The EIS retains sufficient bounded operational telemetry for:

- authentication/authorization failure count;
- Roles Anywhere session-acquisition failure;
- parser invocation success/failure;
- Lambda duration/errors/throttles/concurrency;
- parser timeout;
- `RESPONSE_TOO_LARGE`;
- S3 integrity mismatch;
- S3 cleanup/delete failure;
- EC-2 busy/rate-limit outcome;
- lease lifecycle outcome by closed code;
- orphan cleanup monitoring;
- aggregate cost/usage monitoring.

Correlation must use bounded opaque identifiers rather than merchant content.

The logging posture therefore supports operational diagnosis without weakening merchant privacy.

---

## 14. Hostile-File Security

**Result: PASS.**

The external Lambda architecture preserves the current parser's security-effective input controls while moving the CPU/memory-risking parse into standard Lambda isolation.

### 14.1 Accepted formats

Only CSV and plain XLSX are accepted.

Filename extension/content type is never sufficient proof by itself.

- CSV structural validation rejects ZIP-magic workbook/archive content masquerading as CSV and requires valid UTF-8 text.
- XLSX validation requires a valid OOXML ZIP structure and expected workbook content type.

### 14.2 Encrypted/macro workbooks

- encrypted/password-protected OLE-style input fails the accepted structure checks;
- macro-enabled workbook content type is rejected;
- VBA macros are never executed.

### 14.3 Formula behavior

ExcelJS formula expressions are not evaluated.

Only cached formula result values are converted through the current allowlisted cell conversion path.

The parser does not execute spreadsheet formulas as code.

### 14.4 External links and embedded content

The selected parser path does not fetch external workbook resources as authoritative input and does not surface embedded object payloads as row/cell data.

The EIS correctly requires later hostile-file fixtures proving no outbound fetch occurs for external-link references and no embedded-object payload enters the parser response.

Those are acceptance tests, not an unresolved architecture defect.

### 14.5 Decompression containment

XLSX produced bytes are bounded by the locked:

`25 × 1024 × 1024 bytes`

actual-produced decompression ceiling before ExcelJS workbook materialization.

The control does not rely solely on ZIP-declared metadata.

### 14.6 Shape limits

Preserved without weakening:

- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- 5,242,880-byte compressed upload ceiling;
- 10-second parser budget;
- 15-second Lambda timeout.

### 14.7 Response containment

The allowlisted success envelope is fully serialized and measured before success streaming.

If exact UTF-8 serialized size exceeds:

`4,194,304 bytes`

Lambda returns deterministic `RESPONSE_TOO_LARGE` instead of streaming a partial/truncated success envelope.

### 14.8 No old worker-runtime escape

The Lambda parser bundle does not depend on:

- `node:worker_threads`;
- a CWD-relative TypeScript worker entry;
- `aws_signing_helper`;
- a parser subprocess;
- a native parser helper binary.

The prior Cloudflare worker-thread incompatibility therefore does not re-enter the accepted Lambda parser execution path.

---

## 15. Final Supabase Support-State Privilege Security

**Result: PASS AT EIS LEVEL, WITH MANDATORY PRE-CUTOVER EFFECTIVE-ACL VERIFICATION.**

### 15.1 Browser roles

`PUBLIC`, `anon`, and `authenticated` must have no direct authority over:

- `parser_upload_leases` table state;
- `parser_preview_guards` table state;
- the narrow lease/guard mutation helpers.

No Manager or Employee parser-support privilege is introduced.

### 15.2 `parser_upload_leases` direct service-role surface

The final accepted effective direct table privilege set is exactly:

`{ SELECT }`

The repository's forward default grants are broad, so the future migration must not rely on `GRANT SELECT` as narrowing.

The binding order is:

1. explicitly neutralize/revoke inherited/broad `service_role` table privilege;
2. restore exactly direct `SELECT`;
3. only then grant `EXECUTE` on the approved helper surface;
4. verify the actual effective ACL and direct-DML denials;
5. only then permit application cutover.

Residual direct `INSERT`, `UPDATE`, `DELETE`, or other unintended table-level privilege blocks cutover.

### 15.3 Lease mutation helper surface

Lifecycle mutation remains available only through the accepted narrow `SECURITY DEFINER` helpers.

The helper contract preserves:

- fixed source states;
- fixed target states;
- authoritative business predicate;
- non-expiry predicates where required;
- database-owned timestamps;
- no authority-field mutation;
- bounded failure codes;
- zero-row result on invalid transitions;
- no browser EXECUTE privilege.

### 15.4 Physical lifecycle invariants

The final six-state invariant model remains:

- `ISSUED`;
- `UPLOADED`;
- `CLAIMED`;
- `CONSUMED`;
- `FAILED`;
- `EXPIRED`.

Static database checks enforce state/timestamp/failure-code coherence independently of application code.

### 15.5 `parser_preview_guards`

The guard table remains under its already-accepted B3 privilege model.

Stage C finds no direct security incompatibility requiring that closed finding to be reopened.

### 15.6 Default-grant compatibility

Repository evidence confirms the need for explicit privilege neutralization because forward default privileges can grant broad table/function authority to `anon`, `authenticated`, and `service_role` for future public objects.

The Stage B correction chain explicitly accounts for this actual repository posture instead of assuming a clean ACL slate.

### 15.7 Pre-cutover evidence

Later implementation acceptance must inspect resulting effective privileges, not merely migration source text.

At minimum it must prove:

- browser roles cannot read or mutate either support table;
- browser roles cannot execute helper functions;
- direct `service_role` SELECT on `parser_upload_leases` is present;
- direct service-role INSERT is denied;
- direct service-role UPDATE is denied;
- direct service-role DELETE is denied;
- no broader direct lease-table privilege survives;
- only the approved helper EXECUTE surface remains;
- legal transitions succeed;
- illegal transitions fail closed;
- authority-field mutation fails closed;
- second same-lease dispatch authority cannot be recreated.

A failure blocks cutover.

This is a mandatory implementation/acceptance verification gate, not a Stage C architecture blocker.

---

# CLOSED FINDINGS AND FROZEN DECISIONS

## 16. Stage A and Stage B Findings Remained Closed

**Result: CLOSED — NO JUSTIFIED REOPENING.**

Stage C found no direct load-bearing security incompatibility that requires reopening any merged Stage A Infrastructure PASS finding or Stage B Supabase PASS finding.

Specifically retained as closed:

- Infrastructure response-boundary PASS;
- `ChecksumMode = ENABLED` PASS;
- Infrastructure package/runtime PASS;
- B1 mutation-surface design PASS;
- B1 transition-helper contract PASS;
- six-state database invariants PASS;
- authority-field immutability PASS;
- illegal-transition prevention PASS;
- bounded failure-code contract PASS;
- B1 safety-case matrix PASS;
- enforcement-before-use PASS;
- pre-cutover verification structure PASS;
- atomicity/partial-failure/rollback PASS;
- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity PASS;
- Stage B data-minimization PASS;
- final `service_role` revoke-before-grant privilege-neutralization PASS.

No closed item is redesigned by this report.

---

## 17. Frozen Product Truth and Architecture Decisions Remained Unchanged

No modification was made to:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047;
- D-068;
- BKR-1 through BKR-5;
- EC-2;
- EC-3;
- AWS Lambda narrow parser runtime;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second parser budget;
- finite reserved concurrency;
- transient private S3 parser ingress;
- IAM Roles Anywhere;
- AWS4-X509 manual signing architecture;
- AWS_IAM Function URL;
- `ChecksumMode = ENABLED`;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- 5,242,880-byte hard input limit;
- 25 MiB actual-produced XLSX ceiling;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- accepted six-state lease lifecycle;
- accepted B1 Option A physical-enforcement architecture;
- accepted helper surface and bounded failure-code contract;
- final revoke-before-grant `service_role` privilege-neutralization contract.

No Product Truth or permission expansion occurred.

---

## 18. Remaining Security Blocker

**None within Stage C Security & Permissions Architecture scope.**

The following are later implementation/acceptance evidence gates and are not treated as unresolved architecture blockers:

- production-equivalent Roles Anywhere `CreateSession` signature acceptance;
- deployed-bundle confirmation that no credential or private-key material reaches client artifacts;
- actual IAM identity/resource-policy verification and negative alternate-invocation test;
- actual S3 POST wrong-key/wrong-length/wrong-checksum negative tests;
- actual Lambda `HeadObject` checksum/size negative tests;
- actual effective Supabase ACL verification after migration;
- direct service-role DML negative tests;
- legal/illegal lease-transition tests;
- EC-2 concurrency/rate abuse tests;
- hostile CSV/XLSX fixtures;
- timeout/concurrency/response-boundary measurements;
- raw-object cleanup failure monitoring verification.

Those gates must be carried into any later implementation package and acceptance plan before production cutover.

---

## 19. Repository / Quality / Secret-Safety Review

The authorized report content was checked against the repository's Markdown quality-gate rule set for:

- suspicious escaped Markdown;
- malformed/excessive fences;
- unbalanced code fences;
- heading-level jumps;
- trailing-whitespace lint issues;
- malformed table structure where applicable;
- empty-document/content validation.

No blocking Markdown issue was identified in the prepared report.

The report content was also inspected for secret-like material. No private-key block, AWS access-key pattern, session credential, JWT-like token, Supabase secret-key pattern, or real credential value is present. Security names and permission identifiers in this report are architecture vocabulary only, not secrets.

No repository-wide or user data was copied into the report beyond the authorized technical evidence required for this mission.

---

## 20. No Implementation / No Mutation Confirmation

During this Stage C mission:

- application code implemented or modified: **NO**;
- parser code implemented or modified: **NO**;
- dependencies added or updated: **NO**;
- AWS resources created or modified: **NO**;
- S3 buckets/objects created or modified: **NO**;
- Lambda functions/versions/aliases/Function URLs created or modified: **NO**;
- IAM roles/policies/trust anchors/profiles/certificates created or modified: **NO**;
- SQL or migrations created or executed: **NO**;
- Supabase mutated: **NO**;
- live tables/functions/RLS/grants/default privileges changed: **NO**;
- Lovable changed: **NO**;
- Product Truth changed: **NO**;
- employee/manager permissions changed: **NO**;
- Catalog command count changed: **NO**;
- parser/runtime/input/response limits weakened: **NO**;
- EIS lock entered: **NO**;
- implementation package created: **NO**;
- Build Lock entered: **NO**;
- Build Mode entered: **NO**;
- deployment performed: **NO**;
- publication performed: **NO**;
- production touched: **NO**.

The only authorized repository artifact for this mission is this report:

`communication/live/report1.124.md`

---

## 21. Final Verdict

`LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — PASS`

**No Security & Permissions Architecture blocker remains in Stage C.**

The Lambda + transient private S3 parser EIS, interpreted together with the merged Stage A and Stage B correction/confirmation chains, is sufficiently precise, least-privilege, tenant-isolated, fail-closed, abuse-resistant, privacy-preserving, and internally coherent from the Security & Permissions Architecture perspective to become eligible for later Mission Control EIS lock consideration.

This PASS does not authorize EIS lock, implementation-package creation, Build Lock, Build Mode, code implementation, AWS/S3/IAM resource creation, SQL/migration execution, Supabase mutation, Lovable changes, deployment, publication, production use, or SB-P-1.11 acceptance.

Mission Control must separately review the completed specialist chain and explicitly decide the next lifecycle action after human review and merge of this report.
