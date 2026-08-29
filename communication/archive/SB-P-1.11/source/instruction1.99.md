# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-3 — LAMBDA SECURITY ARCHITECTURE CORRECTION

**Mission ID:** SB-P-1.11-GC-3  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Parser Runtime / GC-1 Closure  
**Authorized By:** Mission Control  
**Executing Room:** Claude Code / Engineering Architecture  
**Mode:** PLAN MODE — BOUNDED ARCHITECTURE CORRECTION ONLY  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Correct only the three blocking security architecture findings recorded in merged `communication/live/report1.105.md` for the selected AWS Lambda + transient private S3 parser boundary.

The correction scope is strictly limited to:

- **SEC-L-B1** — exact Smart Business external-workload AWS credential source and invocation-authentication contract;
- **SEC-L-B2** — cryptographic binding of uploaded bytes to the authorized parse request, including replay/overwrite protection;
- **SEC-L-B3** — authoritative business/request-to-object binding and transient object deletion/retention semantics.

Do not reopen or redesign any already-passed or already-locked architecture outside these three findings.

Required output:

`communication/live/report1.106.md`

---

## 2. Canonical Inputs

Synchronize to latest merged `main` before beginning.

Review at minimum:

- `communication/live/instruction1.98.md`;
- `communication/live/report1.103.md` — AWS Lambda selection;
- `communication/live/report1.104.md` — Infrastructure Operations PASS and selected Lambda/S3 transport;
- `communication/live/report1.105.md` — Security & Permissions CHANGES REQUIRED and SEC-L-B1/B2/B3 findings;
- `communication/live/report1.93.md` and `communication/live/report1.94.md` — preserved EC-2 / EC-3 parser security contract;
- current repository architecture and runtime boundaries relevant to server-only credentials and import guard state.

Repository evidence prevails over assumptions.

For load-bearing AWS facts, use authoritative AWS documentation only.

---

## 3. Locked Architecture That Must Not Be Reopened

This mission must preserve all of the following:

1. AWS Lambda remains the selected external narrow parser runtime.
2. Standard Lambda default compute remains selected; Lambda Managed Instances are not introduced.
3. `ap-south-1` remains the Phase 1 region assumption unless a newly discovered hard incompatibility is proven.
4. The parser remains a narrow transient parsing service only.
5. The parser has no Supabase credential, Product Truth authority, Catalog command authority, caller-JWT authority, or business-decision authority.
6. Exactly nineteen public Catalog commands remain locked; no twentieth command.
7. The 5 MiB compressed-input ceiling remains unchanged.
8. The 25 MiB actual-produced XLSX decompressed-byte ceiling remains unchanged.
9. 2,000 rows / 40 columns / 2,000 characters per cell remain unchanged.
10. EC-2 durable/shared per-business pre-parse abuse guard remains mandatory.
11. EC-3 parse-before-write and opaque failure sanitization remain mandatory.
12. The private transient S3 parser-ingress handoff remains the selected transport architecture unless one of SEC-L-B1/B2/B3 proves it inherently unsafe.
13. S3 remains a narrow transport dependency only, not a general document store, business database, parser queue, or Product Truth surface.
14. R2 remains excluded from this correction.
15. Lovable remains the main Smart Business application environment.
16. No full hosting migration.

---

# CORRECTION A — SEC-L-B1

## 4. Exact External-Workload AWS Credential Source

The current architecture correctly requires AWS_IAM / SigV4 for Smart Business server → Lambda Function URL invocation, but the exact external-workload credential source is not yet closed.

This mission must select **exactly one Phase 1 credential architecture** and make it standalone enough for later implementation.

The selected architecture must specify:

- exact AWS identity/principal type;
- where the credential originates;
- whether credentials are temporary or long-lived;
- how the existing Smart Business server runtime obtains them;
- exact server-only storage/placement boundary;
- explicit prohibition on browser/client exposure;
- exact least-privilege permissions required for:
  - the single parser Lambda Function URL invocation path;
  - the narrow S3 upload-capability/signing path;
- exact Function URL resource-policy conditions, including `AWS_IAM` and Function-URL-only invocation restriction;
- rotation and revocation procedure;
- compromise response;
- rollback/overlap behavior during credential rotation;
- logging/telemetry prohibition for credential material;
- why the selected mechanism is operationally realistic for the current Lovable/Cloudflare server runtime.

### Preferred security direction

Prefer an AWS-supported temporary-credential mechanism for a non-AWS workload if it is actually compatible with the current Smart Business server runtime and can be described without introducing a broad identity platform or new general backend.

Do not select a theoretical federation mechanism merely because AWS supports it. Compatibility with the actual runtime must be evidenced.

If no practical temporary-credential mechanism is compatible for Phase 1 and a dedicated long-lived machine access key is proposed, this report must:

1. explicitly label it as a bounded Phase 1 residual-risk choice requiring Mission Control acceptance;
2. use a dedicated non-human IAM principal;
3. constrain it to the minimum exact Lambda/S3 permissions;
4. prohibit IAM self-administration;
5. specify two-key overlap rotation;
6. specify immediate revoke-on-suspected-compromise;
7. specify how key-use evidence is checked before old-key deletion;
8. prevent browser, source-control, logs, telemetry, Lovable client bundle, or `VITE_*` exposure;
9. define the migration path to temporary credentials later without changing the parser contract.

An unspecified "store an AWS key in env" answer is not acceptable.

---

# CORRECTION B — SEC-L-B2

## 5. Upload Bytes Must Be Bound to the Parse Request

The final architecture must prevent a still-valid upload capability from replacing the object after authorization but before Lambda parses it.

Lock an exact Phase 1 integrity contract covering all of the following:

1. the browser/client computes SHA-256 over the exact file bytes before upload authorization is finalized;
2. Smart Business server binds the expected SHA-256, exact object key, expected byte length, authoritative business/request lease, issued-at, expiry, and state;
3. the S3 upload capability is restricted to exactly one object key and maximum 5,242,880 bytes;
4. where the selected S3 upload mechanism supports checksum enforcement, the signed upload policy requires the checksum field/algorithm;
5. after upload, Smart Business does not trust browser-reported completion alone;
6. Lambda receives the expected checksum/size only from the SigV4-authenticated Smart Business server control request;
7. before parsing, Lambda verifies object existence, exact object key, expected size, and expected checksum against S3/object metadata and/or bytes as required by the selected AWS mechanism;
8. checksum/size mismatch fails closed;
9. mismatch/error handling deletes the transient object where safely possible and returns only a sanitized failure;
10. successful parse consumes the object locator/lease exactly once;
11. repeat requests using a consumed/terminal locator fail closed or return only an explicitly replay-safe prior outcome without reparsing mutable bytes;
12. upload-capability expiry is short, with **five minutes maximum** unless a smaller practical ceiling is established;
13. no raw file bytes, checksum-bearing merchant data payload, or parser output are logged unnecessarily.

The report must clearly distinguish:

- upload-capability expiry;
- object lease expiry;
- one-use/consumption state;
- Lambda invocation idempotency/replay behavior.

Do not claim a presigned URL/POST is inherently one-time unless the surrounding Smart Business state makes it one-time.

---

# CORRECTION C — SEC-L-B3

## 6. Authoritative Business/Request-to-Object Binding

An opaque S3 key alone is not authorization.

Lock an exact server-side binding contract so Merchant A can never cause Smart Business to parse Merchant B's upload even if an object locator is learned.

The Phase 1 architecture must specify a server-authenticated upload lease/capability record or equivalent narrow durable/shared state containing at minimum:

- authoritative server-derived `businessId`;
- server-generated high-entropy object key;
- request/operation identifier;
- issued-at;
- expiry;
- expected byte length;
- expected SHA-256;
- state sufficient for issued/uploaded/consumed/expired/failed or an equally explicit replay-safe lifecycle.

This binding must be created only after:

1. caller authentication;
2. Owner/business re-derivation;
3. EC-2 guard acquisition.

The browser must never be allowed to submit an arbitrary object key that the server simply forwards to Lambda.

The server must resolve the object key only through the authenticated business/request binding.

The report must determine whether this binding belongs inside the already-required EC-2 support primitive or requires a separately named narrow support structure. Either is acceptable if authority remains bounded and no import batch/row is created before complete successful parse/classification.

---

## 7. Transient S3 Deletion and Retention Contract

Lock the transient parser-ingress bucket/object semantics precisely:

- private bucket/security boundary dedicated to parser ingress;
- Block Public Access enabled;
- HTTPS/TLS only;
- default encryption at rest enabled;
- no public ACL/policy;
- no browser GET/LIST/DELETE permission;
- upload capability only for one exact high-entropy object key;
- no merchant/business/customer data embedded in object key;
- bucket versioning disabled for Phase 1;
- Object Lock disabled;
- cross-region replication disabled;
- no retention configuration that blocks immediate deletion;
- Lambda reads the raw object into transient execution memory only;
- Lambda deletes the object **before expensive parsing begins once the complete object bytes have been obtained and integrity checks have passed**, so ordinary parser errors do not retain the source object;
- if deletion before parsing cannot be made safe for a documented AWS/runtime reason, explicitly prove and document the minimal alternative ordering rather than weakening retention silently;
- lifecycle expiration exists only as an exceptional cleanup backstop for abandoned uploads or process failure;
- lifecycle policy is not presented as immediate deletion;
- stale/abandoned objects have a bounded maximum retention period defined by the final architecture;
- no raw object is copied to another bucket, R2, database, log, analytics system, or debugging store.

The report must specify the cleanup responsibility for at least:

- upload authorized but never completed;
- upload completed but parse never invoked;
- Lambda cannot read object;
- checksum/size mismatch;
- Lambda timeout/runtime termination;
- successful parse;
- Smart Business transport failure after Lambda success;
- repeated/expired parse request.

---

## 8. Least-Privilege IAM Separation

The corrected architecture must separate at least these authority classes conceptually:

### Smart Business external caller principal

May have only the exact permissions required to:

- create/sign the narrow S3 upload capability according to the selected mechanism;
- invoke the exact parser Function URL through `AWS_IAM` / SigV4.

It must not have:

- Lambda code/configuration administration;
- Lambda direct invoke outside the Function URL path;
- IAM administration;
- bucket administration;
- broad S3 read/list/delete;
- Product Truth or database authority.

### Lambda execution role

May have only the exact permissions required to:

- read the exact parser-ingress object path/prefix needed by the architecture;
- delete the consumed object;
- write bounded logs/metrics where approved.

It must not have:

- `s3:PutObject`;
- broad `s3:ListBucket` unless proven strictly necessary and tightly conditioned;
- IAM administration;
- Lambda administration;
- Supabase/database/Product Truth credentials.

The report must include the intended permission shape clearly enough for Security to review later, but must not create IAM resources or policies.

---

## 9. Parse-Before-Write Must Remain Intact

The corrected flow must preserve this order:

1. authenticate caller;
2. derive Owner + authoritative business server-side;
3. acquire EC-2 guard;
4. issue/bind exact upload capability;
5. upload transient file;
6. verify bound object/size/checksum;
7. invoke parser through AWS_IAM/SigV4;
8. Lambda reads, verifies, deletes raw object, then parses;
9. Lambda returns only allowlisted parsed result;
10. Smart Business validates/classifies the complete result;
11. only after successful complete parsing/validation/classification may privileged import-support bookkeeping writes occur;
12. preview performs no Product Truth mutation;
13. commit remains caller-JWT governed through the existing nineteen Catalog commands.

No import batch or row may be created merely because an upload lease/object exists.

---

## 10. Required Report Structure

`communication/live/report1.106.md` must contain:

1. exact `main` SHA reviewed;
2. exact evidence chain reviewed;
3. concise architecture decision summary;
4. **SEC-L-B1 corrected contract**;
5. selected credential mechanism and why it is compatible with the real server runtime;
6. least-privilege caller-principal and Lambda-role authority map;
7. credential placement, rotation, revocation, and compromise contract;
8. **SEC-L-B2 corrected contract**;
9. exact checksum/size/upload-capability/consumption/replay lifecycle;
10. **SEC-L-B3 corrected contract**;
11. authoritative business/request/object binding lifecycle;
12. exact transient S3 deletion and exceptional-cleanup semantics;
13. complete end-to-end request sequence;
14. abuse/failure-state matrix for the cases listed in §7;
15. explicit confirmation that EC-2 and EC-3 remain unchanged;
16. explicit confirmation that parser authority/Product Truth/permissions/19-command surface remain unchanged;
17. assumptions and unresolved facts;
18. final verdict.

Allowed final verdicts:

- `LAMBDA SECURITY ARCHITECTURE CORRECTION — READY FOR SECURITY CONFIRMATION`
- `LAMBDA SECURITY ARCHITECTURE CORRECTION — CHANGES REQUIRED`
- `LAMBDA SECURITY ARCHITECTURE CORRECTION — STOPPED — AUTHORITY OR EVIDENCE GAP`

A positive verdict does **not** grant implementation authority.

---

## 11. Explicit Prohibitions

This mission does not authorize:

- application code changes;
- parser implementation changes;
- dependencies;
- AWS account/resource creation;
- Lambda creation/configuration;
- S3 bucket/object creation or mutation;
- IAM users/roles/policies/keys/certificates;
- AWS Organizations / Identity Center changes;
- R2;
- SQL or migrations;
- Supabase mutation;
- RLS/grant changes;
- service-role expansion;
- Lovable changes;
- Product Truth changes;
- Manager/Employee permission changes;
- twentieth Catalog command;
- weakening any file/decompression/data-shape limit;
- Build Lock;
- Build Mode;
- deployment;
- publish;
- domain changes;
- production data mutation;
- SB-P-1.11 acceptance or completion.

Any newly discovered blocker must be recorded rather than silently solved outside this scope.

---

## 12. Repository-First Completion Discipline

The executing room must:

1. synchronize to latest merged `main`;
2. work from a protected mission branch;
3. modify only `communication/live/report1.106.md`;
4. return the report through a pull request;
5. require human review and merge;
6. never self-merge.

---

## 13. Gate Logic

The sequence after this instruction is:

`report1.105.md` CHANGES REQUIRED
→ Claude Code / Engineering Architecture `report1.106.md`
→ human review + merge
→ short Security & Permissions Architecture confirmation review
→ human review + merge
→ Mission Control decision on implementation-specification readiness.

Security confirmation must not begin before `report1.106.md` is merged.

---

## 14. Next Logical Step

Human-review and merge this instruction. Then deliver the merged instruction to Claude Code / Engineering Architecture for the bounded SEC-L-B1 through SEC-L-B3 correction only.