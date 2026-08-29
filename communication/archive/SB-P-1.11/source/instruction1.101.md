# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-5 — LAMBDA + TRANSIENT S3 PARSER ENGINEERING IMPLEMENTATION SPECIFICATION

**Instruction ID:** instruction1.101  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-5 — Parser Runtime Engineering Specification  
**Executing Room:** Claude Code / Engineering Architecture  
**Mode:** SPECIFICATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Produce one standalone, implementation-ready **Engineering Implementation Specification (EIS)** for the approved Phase 1 external parser path:

**Smart Business server → transient private S3 parser-ingress → standard AWS Lambda parser → parsed allowlisted result → Smart Business import workflow**.

The EIS must convert the already-approved runtime, transport, credential, tenancy, integrity, lifecycle, abuse-control, and parser-limit contracts into one coherent engineering specification that a later separately-authorized Build Mode can implement without reopening architecture decisions.

This mission does **not** authorize implementation.

Required output:

`communication/live/report1.108.md`

---

## 2. Canonical Baseline

Use the current merged `main` as the repository source of truth.

The latest accepted security gate is:

`communication/live/report1.107.md`

with verdict:

`AWS LAMBDA SECURITY ARCHITECTURE CONFIRMATION — PASS`

The standalone EIS must incorporate, without weakening or silently reinterpreting, the final parser/runtime contracts from:

1. `communication/live/report1.103.md` — AWS Lambda selected as the narrow external parser runtime;
2. `communication/live/report1.104.md` — Infrastructure Operations PASS and transient private S3 transport decision;
3. `communication/live/report1.106.md` — SEC-L-B1 through SEC-L-B3 corrected architecture;
4. `communication/live/report1.107.md` — final Security & Permissions Architecture confirmation PASS.

Supporting parser/security evidence that remains binding where not superseded:

- `communication/live/report1.90.md` through `communication/live/report1.95.md`;
- `communication/live/report1.105.md` for the original security findings and preserved non-blocking controls.

---

## 3. Preserve the Completed Founder Workflow Baseline

This EIS is only for the parser/runtime and transient-upload boundary.

It must preserve the already-completed Founder Workflow architecture and security baseline and must not reopen it.

Use as inherited context where needed:

- `communication/live/report1.96.md`;
- `communication/live/report1.98.md`;
- `communication/live/report1.100.md`;
- `communication/live/report1.101.md`;
- `communication/live/report1.102.md`.

The EIS must remain compatible with the locked Founder workflow decisions, including:

- bulk-upload support as an approved workflow;
- sample downloadable import format;
- Smart Business SKU assignment where a merchant has no usable SKU;
- SKU assignment consistency across bulk, voice, text, and picture entry paths;
- Inventory → Catalog automatic relationship where an Inventory product becomes Catalog-visible;
- Catalog → Inventory remaining explicit through the approved link-to-inventory workflow;
- Owner-only Phase 1 import authority unless a separately-approved permission system later expands it;
- the existing Catalog / Inventory separation and D-047 / D-068 protections;
- the final backend architecture corrections BKR-1 through BKR-5;
- exactly nineteen public Catalog commands — no twentieth command.

The EIS must not modify Product Truth or invent a new merchant workflow merely to suit AWS.

---

## 4. Locked Parser and Runtime Limits

The following limits are binding and must appear explicitly in the EIS as hard server-side limits, not UI guidance:

- maximum compressed input: **5 × 1024 × 1024 bytes = 5,242,880 bytes**;
- maximum actual-produced XLSX decompressed bytes: **25 × 1024 × 1024 bytes**;
- maximum rows: **2,000**;
- maximum columns: **40**;
- maximum characters per cell: **2,000**;
- parser execution budget: **10,000 ms** application-level budget;
- Lambda infrastructure timeout baseline: **15 seconds**;
- initial Lambda memory baseline: **2,048 MB**;
- Lambda runtime family: **standard Lambda default compute**, not Lambda Managed Instances;
- runtime target: **`nodejs24.x`** unless current AWS managed-runtime availability at specification time proves this target unavailable, in which case STOP and report the evidence instead of silently substituting another runtime;
- region: **`ap-south-1`** for Phase 1 unless a separately-authorized regional change exists.

The existing parser stack remains the reference implementation family:

- Papa Parse for CSV;
- ExcelJS for XLSX;
- `node:zlib` produced-byte containment before workbook materialization.

No parser-library redesign is authorized by this mission.

---

## 5. Required Standalone EIS Structure

`report1.108.md` must be a complete standalone engineering specification, not a review summary.

It must contain at minimum the following sections.

### 5.1 Scope and Authority

State exactly:

- what this EIS governs;
- what it does not govern;
- which earlier architecture decisions are inherited and frozen;
- that implementation still requires a separate Mission Control Build authorization.

### 5.2 End-to-End Sequence

Specify the exact authoritative sequence from user file selection through parser result return.

The sequence must show, at minimum:

1. authenticated request enters Smart Business server boundary;
2. Owner/business are re-derived server-side;
3. EC-2 durable/shared per-business pre-parse abuse guard is acquired before upload capability issuance;
4. server creates Parser Upload Lease;
5. browser computes SHA-256 over exact bytes and provides declared checksum + exact byte length;
6. server issues a short-lived presigned S3 POST for exactly one opaque server-generated object key;
7. browser uploads directly to private S3;
8. Smart Business confirms upload only through lease identity, never caller-supplied object authority;
9. lease is atomically claimed once for dispatch;
10. Smart Business obtains temporary AWS credentials through IAM Roles Anywhere;
11. Smart Business invokes the exact Lambda Function URL using AWS IAM / SigV4;
12. Lambda validates the exact key, size, and S3 checksum before parse work;
13. Lambda reads the object into memory and deletes the raw S3 object as soon as the verified read succeeds, where feasible under the accepted lifecycle contract;
14. Lambda performs bounded format validation and parsing;
15. Lambda returns only the allowlisted parsed result or sanitized failure;
16. Smart Business receives the parse result;
17. only after successful parse/validate/classify may downstream import-support bookkeeping or Product Truth mutation begin under the separately locked Founder Workflow / Catalog contracts.

### 5.3 Parser Upload Lease Contract

Define the exact implementation contract for the narrow durable Parser Upload Lease introduced by `report1.106.md`.

At minimum specify:

- required fields;
- authoritative business / actor / request binding;
- exact object key binding;
- expected SHA-256;
- exact expected byte length;
- issuance time;
- expiry;
- lifecycle state;
- one-use atomic claim / consumption semantics;
- permitted terminal states;
- concurrency behavior;
- replay behavior;
- network-loss behavior;
- cleanup / expiry behavior;
- whether and how failure reason codes are stored internally;
- RLS / grant / server-authority model;
- why this record is transport/security state, not Product Truth and not an import batch/row.

Do not reuse browser-provided `business_id`, object key, actor ID, role, or permission flags as authority.

### 5.4 EC-2 Durable Shared Per-Business Guard

The EIS must specify the minimum production implementation for EC-2.

It must be server-authoritative, durable/shared across Smart Business instances, and acquired before expensive parsing work or upload-capability issuance.

Define:

- exact storage mechanism;
- per-business concurrency rule;
- request/rate window rule;
- atomic acquisition/release behavior;
- expiry/recovery from abandoned work;
- fail-closed behavior;
- interaction with the Parser Upload Lease;
- why Lambda reserved concurrency is only defense-in-depth and never a substitute for EC-2.

Do not weaken the previously accepted abuse-control requirement.

### 5.5 AWS IAM Roles Anywhere Contract

Specify the implementable external-workload credential path proven by `report1.107.md`.

At minimum lock:

- dedicated external caller IAM role;
- Roles Anywhere Trust Anchor / Profile / end-entity certificate model;
- no long-lived IAM user access key;
- Cloudflare/Lovable server-side private-key and certificate placement;
- use of Web Crypto / outbound HTTPS rather than `aws_signing_helper` or subprocesses;
- temporary session credential handling;
- session lifetime configuration principle;
- non-extractable imported private key where practical;
- certificate rotation and revocation requirements;
- compromise procedure;
- browser/client exclusion rules;
- exact least-privilege resource boundaries.

The EIS must specify whether AWS4-X509 signing will be implemented manually or by a compatible pure-JS library. If a library is selected, identify the exact library and justify why it does not require unsupported native binaries, subprocesses, filesystem credentials, or browser exposure. If this cannot be resolved confidently, STOP rather than guess.

### 5.6 IAM Authority Map

Define separate least-privilege policies for:

**Smart Business external caller principal**

Permitted only as necessary for:

- the exact parser-ingress S3 upload capability;
- the exact Lambda Function URL invocation.

Explicitly prohibit:

- S3 read/list/delete;
- Lambda administration;
- IAM administration;
- Supabase/database/Product Truth authority.

**Lambda execution role**

Permitted only as necessary for:

- exact-object S3 read/head;
- exact-object S3 delete;
- bounded approved logging/metrics.

Explicitly prohibit:

- S3 put/list unless later separately proven necessary;
- IAM or Lambda administration;
- Supabase/database/Product Truth authority.

### 5.7 Lambda Function URL Contract

Lock:

- `AuthType = AWS_IAM`;
- exact function/alias resource scope;
- `lambda:InvokeFunctionUrl` plus the required `lambda:InvokeFunction` permission;
- `lambda:InvokedViaFunctionUrl = true` condition for the ordinary invoke permission;
- no `AuthType = NONE`;
- no wildcard public principal;
- no alternate direct-invoke path for the external caller;
- immutable version + production alias deployment/rollback model.

### 5.8 Transient Private S3 Contract

Specify the exact narrow transport bucket/object behavior.

At minimum:

- private-only bucket;
- Block Public Access enabled;
- TLS required;
- server-side encryption at rest enabled;
- versioning disabled for this transient bucket;
- Object Lock disabled;
- replication disabled;
- opaque high-entropy object keys containing no merchant/customer/file-derived identifying information;
- no browser GET/LIST/DELETE authority;
- no public ACL path;
- short-lived presigned POST only;
- exact bucket/key binding;
- exact checksum field and condition;
- exact `content-length-range` capped at 5,242,880 bytes;
- policy expiry no longer than five minutes unless a shorter exact value is justified;
- no arbitrary browser-controlled ACL or success redirect;
- immediate delete after successful verified read;
- bounded S3 Lifecycle expiration as failure/abandonment backstop only;
- lifecycle must never be described as immediate deletion.

### 5.9 Upload Integrity / Replay Contract

Specify:

- SHA-256 format and transport representation;
- browser checksum responsibility versus server trust;
- S3 POST exact-match checksum condition;
- S3 server-side checksum validation;
- Lambda independent checksum/size verification;
- behavior on mismatch;
- prevention of parser execution on mismatch;
- exact lease one-use dispatch semantics;
- behavior if a still-valid POST is replayed;
- behavior if Lambda consumed/deleted the object but Smart Business lost the response;
- fail-closed handling for unknown/expired/consumed leases.

### 5.10 Parser Input Validation Contract

Preserve and make executable the existing hostile-file protections.

At minimum specify:

- CSV/XLSX only;
- extension is not trusted as content proof;
- format/content verification before parser use;
- encrypted/password-protected workbooks rejected;
- macro-enabled or archive-disguised input rejected where applicable;
- no macro execution;
- no formula evaluation;
- no external links/resources;
- no embedded script/object interpretation;
- formula cells use only explicitly safe cached scalar values or are rejected / marked for correction;
- hidden worksheets do not become authoritative input silently;
- CSV formula-injection values remain inert text;
- 25 MiB actual-produced decompression containment before ExcelJS workbook materialization;
- 2,000 row / 40 column / 2,000 character-per-cell hard limits;
- 10-second application parser budget;
- sanitized failures and zero Product Truth mutation on parser failure.

### 5.11 Lambda Packaging and Runtime Contract

Specify:

- Node 24 build target;
- TypeScript transpilation/bundling approach;
- package layout;
- dependency closure;
- no reliance on CWD-relative TypeScript worker source files;
- no `worker_threads` requirement;
- no Managed Instances;
- in-memory raw file processing;
- no `/tmp` persistence dependency;
- 2,048 MB starting memory;
- 15-second infrastructure timeout;
- finite reserved concurrency;
- on-demand/default concurrency unless later production measurements separately justify provisioned concurrency;
- immutable versions and alias rollback;
- benchmark evidence required before production acceptance.

### 5.12 Response Contract

Define the exact allowlisted Lambda response shape.

The parser response must contain only information required by Smart Business to continue validation/classification.

It must not contain:

- AWS credentials;
- certificate/private-key material;
- internal AWS resource details unnecessary to the caller;
- stack traces;
- raw provider errors;
- arbitrary S3 metadata;
- raw file bytes;
- privileged Supabase values;
- Product Truth mutation instructions.

Specify response-size handling and streaming behavior consistent with the infrastructure decision in `report1.104.md`.

### 5.13 Failure Sanitization and EC-3 Ordering

Lock the full EC-3 contract:

- parser/runtime failure is opaque to the merchant/client;
- no provider internals leak;
- parse/validate/classify completes before privileged import-support or Product Truth writes;
- partial Lambda/S3 failure never creates Catalog/Inventory truth;
- object cleanup and lease state transitions are defined for each failure class;
- retry rules are explicit and idempotent.

### 5.14 Logging, Monitoring, and Data Minimization

Specify structured operational logs/metrics without merchant-file content.

Do not log:

- raw file bytes;
- spreadsheet rows/cells;
- original filename if it can carry merchant-sensitive information, unless a minimal sanitized display-only form is explicitly justified;
- private keys/certificates;
- temporary AWS credentials;
- full checksums unless operationally necessary;
- browser upload form secrets;
- raw provider error bodies;
- stack traces to client-visible telemetry.

Define the minimum metrics needed for:

- invocation count;
- success/failure class;
- duration;
- timeout;
- memory pressure where observable;
- throttling/concurrency;
- object-cleanup failure;
- lease expiry/replay rejection;
- EC-2 rejection;
- cost/denial-of-wallet monitoring.

### 5.15 Deployment, Rollback, and Environment Separation

The EIS must specify a later Build/verification sequence for:

- non-production AWS environment first;
- production-equivalent Cloudflare/Lovable runtime verification;
- test S3 bucket / test Lambda / test IAM Roles Anywhere trust chain;
- no production merchant data in parser-runtime verification;
- immutable Lambda versions;
- production alias promotion only after acceptance;
- rollback by alias/version;
- revocation of test credentials/resources after evidence collection;
- no domain cutover required for this isolated parser path.

Do not create any of these resources in this mission.

### 5.16 Acceptance and Verification Matrix

Create a concrete later-build verification matrix that includes at least:

- Roles Anywhere CreateSession from production-equivalent Cloudflare runtime;
- exact AWS4-X509 signature acceptance;
- no `aws_signing_helper` dependency;
- no credential material in client artifacts;
- S3 POST exact key/size/checksum enforcement;
- 5 MiB boundary success and >5 MiB fail-closed case;
- checksum mismatch rejection;
- cross-business lease/object attack rejection;
- expired/consumed/replayed lease rejection;
- concurrent lease claim race;
- network-loss after object consumption;
- immediate object deletion;
- lifecycle cleanup backstop;
- standard Lambda one-invocation-per-environment assumption verification where observable through provider contract/configuration;
- Node 24 bundle cold/warm execution;
- PapaParse CSV maximum-shape fixture;
- ExcelJS XLSX maximum-shape fixture;
- 25 MiB produced-byte bomb containment;
- 2,001-row rejection;
- 41-column rejection;
- >2,000-character-cell rejection;
- parser timeout termination;
- finite reserved concurrency behavior;
- EC-2 per-business concurrency/rate guard;
- sanitized failures;
- zero Supabase/Product Truth mutation before successful parse;
- exactly nineteen Catalog commands remain unchanged;
- no R2 dependency;
- no full hosting migration.

Classify each later verification item as requiring unit, integration, infrastructure, production-equivalent runtime, security, or Founder/manual evidence.

### 5.17 Cost and Operational Guardrails

Specify the initial Phase 1 cost-control boundaries:

- finite Lambda reserved concurrency;
- EC-2 per-business pre-parse protection;
- short upload/lease expiry;
- no provisioned concurrency by default;
- S3 transient-only lifecycle;
- CloudWatch/log retention minimized to operational need;
- alerts/metrics for unusual invocation or cost growth.

Do not invent a commercial cost promise. Record assumptions that must be measured.

### 5.18 Implementation File/Resource Map

Provide a proposed later Build Mode map of:

- repository files/modules to add or modify;
- Supabase schema/migration objects required for Parser Upload Lease and EC-2 only if genuinely needed;
- AWS resources required;
- Cloudflare/Lovable server-secret/configuration requirements;
- tests/fixtures required;
- generated types or configuration artifacts affected.

This map is planning information only and must not create or modify them.

### 5.19 Open Questions / STOP Conditions

The EIS must not leave load-bearing items as casual TBDs.

If any of the following cannot be specified from merged authority and current platform facts, return a STOP verdict rather than guessing:

- Roles Anywhere AWS4-X509 implementation path;
- exact lease atomicity model;
- EC-2 durable/shared guard mechanism;
- checksum enforcement compatibility with the selected S3 POST flow;
- Lambda response capacity/streaming contract;
- a hidden requirement that would add a twentieth Catalog command, change Product Truth, weaken Owner authority, require R2, require full hosting migration, or retain raw merchant files beyond the approved transient boundary.

---

## 6. Required Engineering Decisions

Where multiple implementation mechanisms remain possible but do not change Product Truth, the EIS must select one exact Phase 1 mechanism and justify it.

Do not provide a menu of equally possible implementations for load-bearing security or concurrency behavior.

Selection is required for at least:

- Parser Upload Lease physical persistence mechanism;
- EC-2 physical persistence/atomic guard mechanism;
- Roles Anywhere signing implementation approach;
- Lambda packaging/bundling approach;
- Lambda response streaming approach;
- structured logging/metrics strategy;
- S3 lifecycle backstop duration;
- finite Lambda reserved concurrency starting value;
- exact lease and presigned-upload expiry values.

If current evidence cannot support a safe exact value, clearly classify the item as an operational parameter requiring specialist confirmation before Build Lock and state the safe allowed range/default rather than inventing certainty.

---

## 7. Explicit Boundaries

This mission shall not:

- write application code;
- write Lambda code;
- add npm dependencies;
- create migrations or SQL;
- mutate Supabase;
- change RLS or grants;
- create AWS accounts, IAM roles, trust anchors, profiles, policies, certificates, S3 buckets, Lambda functions, aliases, Function URLs, CloudWatch resources, or budgets;
- modify Lovable or Cloudflare configuration;
- add server secrets;
- publish or deploy;
- use production merchant data;
- change Product Truth;
- change the completed Founder Workflow baseline;
- expand Manager/Employee permissions;
- add a twentieth Catalog command;
- replace AWS Lambda with another provider;
- introduce R2 as parser transport;
- migrate Smart Business hosting away from Lovable;
- redesign Papa Parse / ExcelJS merely for preference;
- weaken any locked parser limit;
- authorize Build Lock or Build Mode;
- authorize production migration or production use;
- declare SB-P-1.11 complete.

---

## 8. Required Final Verdict

`report1.108.md` must end with exactly one of:

`LAMBDA PARSER ENGINEERING IMPLEMENTATION SPECIFICATION — READY FOR SPECIALIST REVIEW`

or

`LAMBDA PARSER ENGINEERING IMPLEMENTATION SPECIFICATION — STOPPED — AUTHORITY OR EVIDENCE GAP`

A READY verdict does not authorize implementation.

After a positive merged EIS, Mission Control must route the standalone specification through bounded Infrastructure Operations, Supabase Backend Architecture where persistence/RLS is introduced, and Security & Permissions Architecture confirmation before considering Build Lock.

---

## 9. Repository Workflow

After this instruction is human-reviewed and merged:

1. synchronize latest `origin/main` by fast-forward only;
2. read this instruction and all named inputs in full;
3. create only `communication/live/report1.108.md` as the primary mission output;
4. use a protected mission branch;
5. run repository Markdown/secret/scope checks appropriate to a documentation-only mission;
6. return the report through a pull request for human review and merge;
7. do not self-merge and do not begin implementation.

---

# MISSION CONTROL STATUS

`LATEST SECURITY ARCHITECTURE GATE: PASS`

`LAMBDA + TRANSIENT S3 PARSER PATH: ARCHITECTURALLY APPROVED FOR EIS PREPARATION`

`STANDALONE ENGINEERING IMPLEMENTATION SPECIFICATION: AUTHORIZED`

`BUILD LOCK: NOT AUTHORIZED`

`BUILD MODE: NOT AUTHORIZED`

`PRODUCTION MIGRATION: BLOCKED`

`SB-P-1.11 ACCEPTANCE: NOT GRANTED`
