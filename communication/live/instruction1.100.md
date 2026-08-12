# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-4 — LAMBDA SECURITY ARCHITECTURE CONFIRMATION REVIEW

**Mission ID:** SB-P-1.11-GC-4  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Parser Runtime / GC-1 Closure  
**Authorized By:** Mission Control  
**Executing Room:** Security & Permissions Architecture  
**Mode:** REVIEW ONLY — SHORT CONFIRMATION  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Perform a short, bounded Security & Permissions Architecture confirmation review of the corrections recorded in merged:

`communication/live/report1.106.md`

This mission exists only to determine whether the three blocking findings from merged `report1.105.md` are now closed sufficiently for Mission Control to proceed to a later implementation-specification mission.

Do not reopen already-passed architecture unless the correction itself introduces a new load-bearing security defect.

---

## 2. Canonical Inputs

Review current merged `main` and, at minimum:

- `communication/live/instruction1.98.md`
- `communication/live/instruction1.99.md`
- `communication/live/report1.103.md`
- `communication/live/report1.104.md`
- `communication/live/report1.105.md`
- `communication/live/report1.106.md`
- `communication/live/report1.93.md`
- `communication/live/report1.94.md`

Repository evidence prevails over assumptions.

For load-bearing AWS claims, use authoritative AWS documentation only.

---

## 3. Confirmation Scope

Confirm only the following three corrections, plus any new blocker directly introduced by them.

### CONF-B1 — SEC-L-B1 External-workload AWS credentials

Confirm whether `report1.106.md` actually closes the external-workload credential problem.

Specifically verify:

1. the selected credential mechanism is compatible with the actual Smart Business server runtime outside AWS;
2. no AWS credential, certificate private key, access key, session token, or signing secret is exposed to browser/client code;
3. the mechanism produces temporary credentials suitable for SigV4 signing;
4. exact least-privilege scope can be limited to the parser Function URL and the narrow parser-ingress upload-signing responsibilities;
5. rotation, revocation, expiry, and compromise response are operationally defined;
6. ordinary Lambda invocation cannot bypass the Function URL boundary;
7. no long-lived IAM user access key is silently reintroduced.

`report1.106.md` selects AWS IAM Roles Anywhere. Do not accept that selection merely because it is named. Verify that its certificate/private-key and credential-helper/session workflow is genuinely implementable in the actual Lovable/Cloudflare server environment without introducing an unsupported binary/runtime dependency or unsafe private-key handling.

If compatibility is unproven or requires a new unresolved infrastructure mechanism, return `CHANGES REQUIRED` or `STOPPED — AUTHORITY OR EVIDENCE GAP` rather than assuming compatibility.

### CONF-B2 — SEC-L-B2 Upload integrity and replay protection

Confirm that the corrected architecture binds the exact uploaded bytes to the parse request and closes the overwrite/replay window.

Verify:

- SHA-256 is bound to the authenticated server-side upload lease;
- the S3 upload policy binds exact object key and bounded size;
- checksum metadata/value is enforced where the selected upload mechanism supports it;
- Lambda independently verifies expected size/checksum before parsing;
- mismatch fails closed and sanitizes output;
- the parse right is one-use / consumed or otherwise replay-safe;
- expired or replaced objects cannot be parsed as though they were the originally authorized upload;
- the 5 MiB compressed-input limit remains unchanged.

### CONF-B3 — SEC-L-B3 Business/request/object binding and raw-object lifecycle

Confirm that the Parser Upload Lease closes cross-business object-locator abuse without becoming premature import truth.

Verify:

- authoritative Owner/business identity is server-derived before lease issuance;
- EC-2 guard acquisition precedes issuance;
- object keys are server-generated, opaque, high entropy, and contain no merchant/business data;
- a browser cannot submit an arbitrary object locator for parsing;
- confirmation re-verifies the lease against the same authoritative business/request;
- Merchant A cannot cause parsing/read/delete of Merchant B's object;
- the lease is not an import batch/row or Product Truth record before successful parse/classification;
- parser-ingress storage remains private with no browser GET/LIST/DELETE authority;
- versioning, Object Lock, and replication do not preserve raw historical copies;
- successful parser read is followed by immediate delete;
- failed/abandoned objects have a bounded cleanup backstop;
- raw file bytes/rows/cells are not logged.

---

## 4. Preserved Locked Boundaries

This confirmation must preserve without redesign:

- AWS Lambda as the selected narrow parser runtime;
- standard Lambda default compute;
- `ap-south-1` Phase 1 region assumption;
- transient private S3 only as the narrow parser-ingress transport dependency proposed by Infrastructure Operations;
- 5 MiB compressed upload limit;
- 25 MiB actual-produced XLSX decompressed-byte cap;
- 2,000 rows;
- 40 columns;
- 2,000 characters per cell;
- EC-2 durable/shared per-business pre-parse abuse guard;
- EC-3 parse-before-write ordering;
- no raw-file retention beyond bounded transient transport;
- no Supabase/Product Truth authority in Lambda;
- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- no R2 parser workaround;
- no full hosting migration.

Do not weaken a locked control to obtain a PASS.

---

## 5. Required Output

Produce only:

`communication/live/report1.107.md`

The report must include:

1. exact merged `main` SHA reviewed;
2. exact inputs reviewed;
3. CONF-B1 disposition;
4. CONF-B2 disposition;
5. CONF-B3 disposition;
6. any new blocker introduced by the corrections;
7. final verdict;
8. explicit statement that no implementation/deployment authority is granted;
9. Next Logical Step.

Allowed final verdicts:

- `AWS LAMBDA SECURITY ARCHITECTURE CONFIRMATION — PASS`
- `AWS LAMBDA SECURITY ARCHITECTURE CONFIRMATION — CHANGES REQUIRED`
- `AWS LAMBDA SECURITY ARCHITECTURE CONFIRMATION — STOPPED — AUTHORITY OR EVIDENCE GAP`

A PASS means only that the Lambda + transient S3 security architecture is sufficiently closed for Mission Control to prepare a later implementation specification. It does not authorize implementation.

---

## 6. Prohibited Actions

This mission does not authorize:

- code changes;
- dependency changes;
- AWS account/resource creation;
- IAM Roles Anywhere trust anchors/profiles/roles/certificates;
- S3 bucket creation or mutation;
- Lambda creation/configuration;
- SQL or migrations;
- Supabase mutation;
- RLS/grant changes;
- service-role expansion;
- Lovable changes;
- parser implementation;
- guard implementation;
- Product Truth changes;
- Manager/Employee permission expansion;
- a twentieth Catalog command;
- Build Lock;
- Build Mode;
- deployment;
- publication;
- production mutation;
- SB-P-1.11 acceptance or completion.

Any new load-bearing issue must be reported, not silently solved outside this review.

---

## 7. Completion Discipline

1. Synchronize to latest merged `main` before review.
2. Record the exact SHA.
3. Use repository evidence first.
4. Verify load-bearing AWS facts against authoritative AWS documentation.
5. Produce only `communication/live/report1.107.md`.
6. Return through a protected branch and pull request.
7. Require human review and merge.
8. Do not self-merge.

---

## 8. Next Logical Step

Human-review and merge this instruction. Then Security & Permissions Architecture executes this short confirmation review. A merged PASS permits Mission Control to prepare the Lambda parser implementation specification; any other verdict returns to bounded architecture correction.