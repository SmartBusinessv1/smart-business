# SMART BUSINESS — INFRASTRUCTURE OPERATIONS REVIEW REPORT

## SB-P-1.11-GC-2 — AWS Lambda Specialist Review Gate — Stage A

**Report ID:** report1.104  
**Mission:** SB-P-1.11-GC-2 — AWS Lambda Specialist Review Gate  
**Authorized By:** `communication/live/instruction1.98.md`  
**Executing Room:** Infrastructure Operations  
**Mode:** REVIEW ONLY — STAGE A  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Final Verdict

`AWS LAMBDA INFRASTRUCTURE REVIEW — PASS`

AWS Lambda is infrastructure-suitable for the narrow Phase 1 Smart Business CSV/XLSX parser boundary, provided the architecture uses **standard Lambda default compute**, a supported managed Node.js runtime, and a **transient Amazon S3 upload handoff solely to bridge the locked 5 MB compressed-upload transport requirement**.

The direct synchronous request paths are not sufficient for the full locked 5 MB binary XLSX input: Lambda synchronous invocation is limited to 6 MB, and a Lambda Function URL maps binary request content into a base64-encoded event body. API Gateway raises the public/front-door payload ceiling to 10 MB, but a Lambda integration still invokes Lambda synchronously and therefore does not remove the Lambda invocation-event constraint. A 5 MB XLSX therefore cannot be considered safely supported by either direct pattern after base64/event-envelope expansion.

The smallest production-suitable transport identified by this review is therefore:

**short-lived presigned S3 POST upload → private transient object → standard Lambda parser invocation with only an opaque object key → Lambda reads the object into memory, deletes the raw object as soon as the read succeeds, parses in memory, and returns the allowlisted parse result through Lambda response streaming.**

This S3 use is not parser-compute containment and is not a second backend. It is a narrow transport bridge forced by the locked 5 MB input requirement. Because S3 was previously excluded unless transport made it technically necessary, **this report records S3 as a new narrow transport dependency requiring explicit Mission Control authorization before implementation.** No S3 resource is created or implicitly approved by this PASS.

Security & Permissions Architecture must review this exact transport and authority boundary after this report is human-reviewed and merged.

---

## 2. Exact Canonical Baseline Reviewed

Latest merged GitHub `main` at Stage A start:

`78463553612d8f31f44b06180a736b7685c4da58`

Commit:

`Authorize bounded AWS Lambda specialist review gate (#229)`

PR #229 was confirmed human-merged before Stage A began.

Canonical repository evidence reviewed:

- `communication/live/instruction1.98.md`
- `communication/live/report1.103.md`
- `communication/live/report1.90.md`
- `communication/live/report1.91.md`
- `communication/live/report1.92.md`
- `communication/live/report1.93.md`
- `communication/live/report1.94.md`
- `communication/live/report1.95.md`
- current `src/lib/catalog-import/parse.ts`
- current `src/lib/catalog-import/types.ts`
- current `src/lib/catalog-import/limits.ts`

The prior parser/runtime evidence remains settled: the Lovable/Cloudflare `node:worker_threads` path is not a viable production isolation primitive; the current locked limits remain 5 MB compressed input, 25 MB actual-produced XLSX decompressed bytes, 2,000 rows, 40 columns, 2,000 characters per cell, and a 10-second parser budget; EC-2 requires a durable/shared per-business pre-parse guard; EC-3 requires opaque failure handling and parse-before-write ordering.

No prior Founder Workflow Reconciliation or Supabase/Security PASS decision was reopened.

---

## 3. Authoritative AWS Sources Used

Load-bearing provider facts were checked only against current AWS documentation:

- [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
- [Lambda runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)
- [Building Lambda functions with Node.js](https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html)
- [Lambda Managed Instances — concurrency model](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html)
- [Lambda security / execution model](https://docs.aws.amazon.com/lambda/latest/dg/lambda-security.html)
- [Invoking Lambda Function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html)
- [Lambda response streaming](https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html)
- [API Gateway HTTP API quotas](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-quotas.html)
- [API Gateway REST API quotas](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-execution-service-limits-table.html)
- [Invoking Lambda through API Gateway](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html)
- [API Gateway binary media handling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-payload-encodings.html)
- [Lambda endpoints and Regions](https://docs.aws.amazon.com/general/latest/gr/lambda-service.html)
- [Lambda reserved/provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html)
- [Lambda versions and aliases](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html)
- [Lambda runtime rollback](https://docs.aws.amazon.com/lambda/latest/dg/runtime-management-rollback.html)
- [Lambda structured logging](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs-logformat.html)
- [Lambda metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html)
- [S3 presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)
- [S3 SigV4 POST policy](https://docs.aws.amazon.com/AmazonS3/latest/developerguide/sigv4-HTTPPOSTConstructPolicy.html)
- [S3 default encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html)
- [S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)
- [S3 object expiration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html)
- [AWS Lambda pricing](https://aws.amazon.com/lambda/pricing/)
- [Amazon S3 pricing](https://aws.amazon.com/s3/pricing/)

---

# IO-1 — Lambda Execution Model

## 4. Standard Lambda Default Compute Is the Required Execution Model

AWS documents that standard Lambda default compute processes at most **one invocation at a time per execution environment** and isolates execution environments using Firecracker MicroVM technology. A new execution environment is required when concurrent invocations cannot reuse an idle environment.

This property is materially aligned with the parser-isolation requirement that motivated the move away from the Lovable/Cloudflare in-process path.

**Locked infrastructure choice:** use **standard Lambda default compute**.

Do **not** use Lambda Managed Instances for this parser. AWS documents that Managed Instances support multiple concurrent invocations inside one execution environment. That would deliberately weaken the one-invocation-per-environment property selected for this architecture and would add unnecessary infrastructure complexity.

Warm execution-environment reuse between sequential invocations is normal Lambda behavior and is not, by itself, a cross-request concurrency violation. Future implementation must nonetheless treat global mutable state and `/tmp` as non-authoritative and potentially reusable between sequential invocations.

### IO-1 disposition

**PASS.** Standard Lambda default compute supplies the required provider execution boundary. Managed Instances are explicitly rejected for Phase 1.

---

## 5. Runtime Family

AWS currently supports Node.js 24 (`nodejs24.x`) and Node.js 22 (`nodejs22.x`) on Amazon Linux 2023. Node.js 24 has the materially longer current AWS support horizon.

**Phase 1 runtime target:**

`nodejs24.x` on Amazon Linux 2023.

Reasoning:

- it is a standard managed Node.js runtime rather than an edge subset;
- it provides the Node built-ins required by the parser, including `node:zlib`;
- it avoids choosing Node.js 20, which AWS now lists as deprecated;
- it avoids beginning Phase 1 on Node.js 22 with its nearer projected deprecation date.

The repository parser is TypeScript. AWS executes JavaScript in the managed Node runtime, so the later Build Mode must transpile/bundle the Lambda handler and parser dependency closure into deployable JavaScript. That is normal packaging work and is not authorized here.

---

# IO-2 — Node / Parser Compatibility

## 6. Parser Stack Suitability

The current parser boundary is framework-independent and accepts a raw Node `Buffer`. The canonical implementation imports:

- `papaparse` for CSV;
- `exceljs` for XLSX;
- `node:zlib` through the XLSX structure/decompression verification path.

`report1.103.md` already established that Papa Parse and ExcelJS are conventional JavaScript dependencies without a required native runtime binding for this use, and the current source uses Node-standard primitives rather than browser or Cloudflare-only APIs.

The move to Lambda therefore does not require a parser-library redesign.

The locked parser/data boundaries remain unchanged:

- compressed file bytes: **5 × 1024 × 1024 bytes**;
- actual-produced XLSX decompressed bytes: **25 × 1024 × 1024 bytes**;
- rows: **2,000**;
- columns: **40**;
- characters per cell: **2,000**;
- parser budget: **10,000 ms**.

The 25 MB produced-byte XLSX containment remains mandatory before ExcelJS workbook materialization.

### Packaging and deployment capacity

AWS Lambda currently allows:

- 50 MB zipped package through direct API/console upload;
- 250 MB unzipped code plus layers;
- up to 10 GB for a container-image package.

No repository evidence suggests Papa Parse + ExcelJS require a container-image deployment for Phase 1. A normal bundled ZIP deployment remains the preferred smallest shape, subject to actual Build Mode artifact measurement.

### `/tmp`

Lambda provides configurable ephemeral `/tmp` storage from 512 MB upward. The selected parser does not require `/tmp` for normal operation; the raw file should remain in memory. `/tmp` must not become a raw-file persistence mechanism merely because it exists.

### Memory / CPU

Lambda memory is configurable from 128 MB to 10,240 MB and CPU increases with memory; AWS documents approximately one vCPU at 1,769 MB.

**Phase 1 starting configuration recommendation:** **2,048 MB memory**, followed by controlled benchmark tuning before production acceptance.

This gives approximately one-vCPU-class compute while leaving substantial memory headroom above the 25 MB produced-byte cap for ExcelJS's in-memory workbook representation and JS object overhead. This is a starting configuration, not a claim that 2,048 MB is the final optimum.

### Cold start

Papa Parse and ExcelJS increase initialization/bundle work compared with a trivial Lambda. Cold-start latency is therefore a real operational consideration, but no provider evidence justifies inventing a latency number. Phase 1 should begin with on-demand/default Lambda; provisioned concurrency is not justified until runtime measurements show merchant-visible cold starts are materially harmful.

### IO-2 disposition

**PASS.** The current Node/PapaParse/ExcelJS/`node:zlib` stack is production-suitable for standard Lambda in principle. Build Mode must prove the actual Node 24 bundle and maximum-bound fixtures before deployment.

---

# IO-3 — Full 5 MB Upload Transport

## 7. Direct Function URL / Direct Synchronous Invocation

AWS's synchronous Lambda invocation request quota is **6 MB**.

For Function URLs, Lambda maps the HTTP request into an API Gateway payload-format 2.0 event. AWS states that a binary request body is base64-encoded in that event.

A locked 5 MiB XLSX file is:

`5 × 1024 × 1024 = 5,242,880 bytes`

Base64 alone expands that to approximately:

`6,990,508 bytes`

before the JSON event envelope, headers, and metadata are included.

Therefore the direct Function URL / synchronous binary path **cannot support the full locked 5 MB XLSX limit**.

Direct AWS SDK synchronous invocation has the same 6 MB payload ceiling and therefore does not solve the problem if the file is represented in a JSON/base64 payload.

**Disposition:** REJECT for full-file transport.

---

## 8. API Gateway Front Door

AWS documents a **10 MB payload size** for both API Gateway HTTP APIs and REST APIs.

That improves the client-facing API Gateway limit, but it does not by itself enlarge Lambda's synchronous invocation payload quota. API Gateway Lambda integrations invoke Lambda synchronously and proxy integrations deliver a structured event. Binary proxy handling uses base64 representation.

**Infrastructure inference from the combined AWS contracts:** an API Gateway public 10 MB body limit does not establish that a 5 MiB binary XLSX can be delivered inside Lambda's 6 MB invocation event after binary/base64/event-envelope expansion.

A non-proxy/custom transformation also cannot be treated as a proven capacity escape without a documented provider guarantee that the resulting Lambda invocation payload stays within Lambda's own 6 MB quota. No such guarantee was found.

API Gateway would add another public API surface, configuration layer, cost surface, and failure mode without resolving the load-bearing full-5-MB transport question.

**Disposition:** REJECT as the Phase 1 upload-capacity solution.

---

## 9. Required Narrow Transport Dependency — Transient S3 Handoff

Because the direct transport candidates do not preserve the full locked 5 MB binary input, **Amazon S3 becomes technically necessary solely as a transport bridge**.

This is the exact production-suitable input transport architecture selected by Stage A:

1. Smart Business authenticates the merchant and re-derives Owner/business authority before any parser upload authority is issued.
2. The already-required per-business preview guard is acquired before expensive parser work is initiated.
3. The Smart Business server issues a **short-lived SigV4 presigned S3 POST policy** for one random opaque object key in a dedicated parser-ingress bucket/prefix.
4. The POST policy contains an exact object-key condition and `content-length-range` whose maximum is the locked **5,242,880 bytes**.
5. The browser uploads the raw file directly to S3 over HTTPS. No AWS credential is delivered to browser code; only the bounded signed upload capability is delivered.
6. The bucket is private, has all S3 Block Public Access controls enabled, and uses server-side encryption at rest. AWS applies SSE-S3 to new S3 objects by default; Security may later require SSE-KMS if its threat model justifies the extra key-management surface.
7. After upload completion, Smart Business invokes the parser Lambda with only a small control payload containing the opaque object locator and minimum non-authoritative file metadata required for parsing. The raw file is not embedded in the Lambda invocation event.
8. Lambda checks object metadata/size again, reads at most 5,242,880 bytes into memory, and then **deletes the raw S3 object immediately after the successful read and before expensive parsing begins**.
9. Lambda performs structure verification, the 25 MB actual-produced XLSX decompression check, parsing and row-shape enforcement entirely in memory.
10. Parser output is returned only as the approved allowlisted result shape. No parser-side database exists and no Product Truth write authority is present.
11. A short S3 Lifecycle expiration rule exists only as a failure backstop for abandoned uploads or a Lambda termination that occurs before immediate deletion. AWS Lifecycle expiration is asynchronous and must not be represented as instantaneous cleanup.

### Why this does not reopen PRD-4

The earlier architecture rejected object storage **merely to obtain parser compute containment**. This S3 dependency is not used for compute containment or business persistence. It exists only because AWS's direct synchronous event limits cannot carry the locked 5 MB binary file safely.

`instruction1.98.md` explicitly allows this conclusion if transport capacity makes S3 necessary, but requires it to be recorded as a new narrow dependency needing separate Mission Control authorization.

### Authorization status

`NEW NARROW TRANSPORT DEPENDENCY — SEPARATE MISSION CONTROL AUTHORIZATION REQUIRED BEFORE BUILD`

No S3 bucket, object, policy, role, lifecycle rule, or presigned URL was created during this review.

---

# IO-4 — Request and Parsed-Response Capacity

## 10. Control Request Capacity

With the selected S3 handoff, the Lambda request no longer carries the raw file. The synchronous control request is a small bounded JSON message containing an opaque object key and tightly allowlisted control metadata, so the 6 MB synchronous request limit is no longer a practical capacity constraint.

---

## 11. Parsed Response Capacity

AWS supports:

- **6 MB** buffered synchronous Lambda response; and
- up to **200 MB** for a synchronous streamed Lambda response through Function URLs or `InvokeWithResponseStream`.

The 6 MB buffered response is not a safe architecture assumption for the maximum parser result and is therefore rejected.

**Selected response transport:** Lambda Function URL (or equivalent direct Lambda invocation path) configured for **response streaming**, returning only the parser's allowlisted JSON response.

The current canonical `ParseOutcome` is materially narrower than the raw 40-column source shape. Each row carries only:

- `rowNumber`;
- recognized mapped fields;
- a reference-cost flag/raw value where present;
- batch-level unrecognized column names.

Canonical `RecognizedFieldKey` contains nine fields, and `referenceCostRaw` is the only additional raw string slot. With 2,000 rows and the locked 2,000-character cell limit, the parser cannot legitimately return an arbitrary 2,000 × 40 raw-cell matrix: unrecognized column values are deliberately discarded.

A conservative architecture bound for repeated maximum-length recognized strings is therefore approximately 20,000 bounded string slots (ten per row including Reference Cost), not 80,000 raw source cells. Even a deliberately pessimistic UTF-8/JSON representation is materially below AWS's 200 MB streaming response ceiling for this allowlisted shape.

Nevertheless, the later implementation must make the transport guarantee explicit rather than rely on an estimate:

- serialize only the canonical allowlisted parser result;
- do not echo unrecognized raw cell values;
- apply a hard serialized-response byte ceiling below the AWS 200 MB provider limit;
- fail closed with a fixed sanitized result if that internal ceiling is exceeded;
- add a maximum-shape acceptance fixture that measures the exact serialized result under Node 24 before production deployment.

This does not weaken the 2,000-row / 40-column / 2,000-character product limits; it prevents accidental serializer/schema expansion from silently outrunning the provider boundary.

### IO-4 disposition

**PASS.** The exact response architecture is streamed, allowlisted JSON with an implementation-enforced serialized byte ceiling below 200 MB. Buffered 6 MB response mode is rejected for this parser.

---

# IO-5 — Region and Latency

## 12. Phase 1 Region

AWS currently offers Lambda in both:

- Asia Pacific (Mumbai) — `ap-south-1`;
- Asia Pacific (Hyderabad) — `ap-south-2`.

For Phase 1, this review selects:

`ap-south-1` — Asia Pacific (Mumbai)

Reasons:

- it is an India-region Lambda endpoint suitable for the Kerala merchant target;
- it keeps Lambda and the proposed S3 transport dependency in one AWS Region, avoiding unnecessary inter-region data movement;
- it is the conservative operational choice consistent with the architecture direction already under review.

Hyderabad may be geographically competitive for Kerala, but this review will not invent or infer actual end-to-end latency from geography alone. Changing the region solely for latency should happen only after controlled measurements from the real Smart Business server runtime and representative Kerala networks.

### Latency shape

The selected flow adds two network legs that the current in-process design did not have:

1. browser → S3 upload;
2. Smart Business server → Lambda invocation / streamed response.

Lambda may also cold-start on an on-demand invocation. These are real latency contributors. Exact milliseconds are intentionally not claimed here.

The S3 bucket and Lambda function must be co-located in `ap-south-1` so the raw-object GET/delete path remains regional and operationally simple.

### IO-5 disposition

**PASS.** `ap-south-1` is the Phase 1 region assumption; production acceptance must measure actual end-to-end preview latency rather than rely on geography claims.

---

# IO-6 — Operational Containment

## 13. Timeout

AWS permits function timeouts up to 900 seconds. Smart Business does not need anything close to that.

The current parser contract has a 10-second parse budget. The Lambda boundary should preserve that product/security intent while allowing bounded transport/handler overhead.

**Recommended Phase 1 Lambda timeout:** **15 seconds total invocation duration**.

The implementation may retain an application-level 10-second parser measurement for taxonomy/telemetry, but the real non-cooperative execution backstop is Lambda's 15-second provider timeout. The timeout must not be raised merely to make hostile or pathological inputs pass.

Any timeout must surface to Smart Business as an opaque runtime failure; no raw AWS timeout body is merchant-visible.

---

## 14. Memory and CPU

**Starting memory:** 2,048 MB.

AWS allocates CPU in proportion to memory; 1,769 MB corresponds to approximately one vCPU. The starting setting is intended to provide practical CPU and memory headroom for ExcelJS while staying bounded.

Build/acceptance testing should compare 1,769/2,048 MB and only increase memory if maximum-bound XLSX evidence demonstrates a material need. Memory tuning changes both performance and cost and should be evidence-driven.

No `/tmp` expansion beyond the default 512 MB is required by this architecture.

---

## 15. Concurrency and Denial-of-Wallet

Lambda default account concurrency is shared at the Region level, while reserved concurrency can place an explicit upper bound on a function and has no separate reserved-concurrency charge.

Phase 1 requirements:

- configure an explicit **bounded reserved concurrency** for the parser function so it cannot consume unbounded account concurrency;
- do not use provisioned concurrency by default;
- preserve the separate EC-2 durable/shared **per-business one-preview-in-flight + short-window rate guard** in Smart Business;
- do not confuse AWS reserved concurrency with tenant authorization or the business-level abuse guard;
- alarm on `Throttles`, `ConcurrentExecutions`, `Errors`, and abnormal `Duration`;
- use an AWS Budget/cost alert before production acceptance.

The exact reserved-concurrency integer should be selected from pilot traffic and account-wide concurrency needs during implementation specification; inventing a number now would not be evidence-based. The architecture requirement is that it be finite, explicit, reviewed, and low enough to cap denial-of-wallet exposure while high enough for pilot merchant concurrency.

---

## 16. Cost

AWS Lambda bills standard functions by requests and GB-seconds of execution; memory choice therefore affects both CPU and duration cost. Reserved concurrency itself has no additional charge; provisioned concurrency does.

The S3 transport adds request/storage costs for upload/GET and very short-lived storage. Same-Region S3-to-AWS-service data transfer is not charged as internet transfer under AWS's current S3 pricing model, while merchant-to-S3 upload and Lambda response delivery still form part of the overall network/cost surface.

No monthly rupee/dollar estimate is claimed because expected pilot upload count, average file size, average duration, response size, and memory tuning are not yet established. A future Build/operations specification must calculate cost from measured pilot assumptions and set budget alarms.

Cost containment is strengthened by:

- 5 MB upload cap;
- 15-second Lambda timeout;
- bounded reserved concurrency;
- EC-2 per-business guard/rate limit;
- immediate S3 deletion;
- no provisioned concurrency unless later justified;
- no parser-side database or background job system.

---

## 17. Observability Without Merchant File Logging

Lambda supports structured JSON application/system logging and CloudWatch metrics.

Phase 1 logging contract:

**Allowed operational fields:**

- Lambda request ID / correlation ID;
- deployed function version;
- file kind (`csv` / `xlsx`);
- compressed byte count;
- decompressed-byte count or cap outcome;
- parse duration;
- row count / recognized-column count;
- closed parser error/rejection code;
- timeout/throttle classification;
- S3 cleanup success/failure as a boolean/code;
- response serialized byte count.

**Forbidden in logs:**

- raw file bytes;
- raw CSV/XLSX content;
- merchant row/cell values;
- product names, descriptions, category strings, Reference Cost values;
- original merchant filename unless separately proven necessary and sanitized;
- presigned URLs or POST policy credentials;
- AWS credentials/signatures;
- JWTs;
- Supabase credentials;
- parser output payload;
- stack traces that contain merchant file data or secret-bearing request material.

Configure JSON logs and production log-level filtering. Normal successful previews should not emit row-level logs.

Required CloudWatch metric/alert coverage includes at minimum:

- `Invocations`;
- `Errors`;
- `Duration`;
- `Throttles`;
- `ConcurrentExecutions`.

Custom bounded metrics may record closed parser outcome codes and cleanup failures, but never merchant content.

---

## 18. Deployment and Rollback Shape

A future implementation should deploy Lambda with immutable published versions and route production through a named alias such as `prod`.

Rollback is then a control-plane pointer change from the alias to the last known-good published version rather than an emergency source-code rewrite. AWS also supports weighted alias routing if a later controlled canary is justified.

Runtime upgrades must be coordinated with published versions and acceptance evidence. Node runtime changes are not to be silently absorbed as an unreviewed production behavior change.

All future Lambda/S3/IAM configuration should be infrastructure-as-code so the parser boundary can be recreated and reviewed deterministically. This report does not select or create the IaC implementation.

### IO-6 disposition

**PASS**, with the operational requirements above locked for the later implementation specification.

---

# IO-7 — Raw-File Lifecycle

## 19. Required Lifecycle

The selected transport can preserve Smart Business's transient-file principle, but only with explicit lifecycle discipline.

### Normal success path

1. raw file is uploaded to a private S3 object under a random opaque key;
2. Lambda validates metadata and reads at most 5,242,880 bytes into memory;
3. **raw object is deleted immediately after the successful read, before parser CPU work begins**;
4. parser operates only on the in-memory bytes;
5. in-memory bytes disappear with invocation lifecycle;
6. no raw file is written to `/tmp`, CloudWatch, Supabase, or any parser-side database.

Deleting before parsing materially reduces the hard-timeout retention risk: if parsing later consumes the full Lambda timeout, the transport object has already been deleted.

### Failure/abandonment paths

An object can still remain if:

- the browser upload succeeds but Smart Business never invokes Lambda;
- Lambda terminates during object retrieval before deletion;
- a transient AWS failure prevents immediate delete.

Therefore a dedicated parser-ingress prefix/bucket must have an S3 Lifecycle expiration rule as a **backstop**.

AWS documents that Lifecycle expiration is evaluated/processed asynchronously. It is therefore not an exact minute-level deletion guarantee and must not be represented as one. For Phase 1 architecture, use the shortest practical day-level expiration backstop supported by the chosen Lifecycle design, while immediate application deletion remains the primary cleanup mechanism.

Security must explicitly review whether that bounded exceptional retention window is acceptable and whether stronger cleanup automation is required. Infrastructure Operations does not introduce another scheduler/queue under this mission.

### Encryption and access

- TLS/HTTPS in transit;
- S3 server-side encryption at rest (SSE-S3 baseline; any SSE-KMS requirement belongs to Security review);
- all Block Public Access settings enabled;
- no public object ACL;
- no general object listing granted to the browser;
- one-purpose presigned upload authority only;
- no parser-side Supabase/database credential;
- no Product Truth authority.

### IO-7 disposition

**PASS WITH SECURITY REVIEW REQUIRED.** Transient processing is achievable; S3 exists solely as a short transport bridge and immediate deletion is primary. Lifecycle is only a bounded failure backstop.

---

# IO-8 — Infrastructure Decision Matrix

## 20. Stage A Findings

| Review item | Result | Infrastructure conclusion |
|---|---|---|
| IO-1 — execution model | PASS | Standard Lambda default compute provides one invocation per execution environment; Managed Instances rejected. |
| IO-2 — Node/parser compatibility | PASS | `nodejs24.x` / AL2023 is suitable in principle for Papa Parse, ExcelJS and `node:zlib`; later bundle/max-bound tests mandatory. |
| IO-3 — 5 MB upload transport | PASS WITH NEW DEPENDENCY | Direct Function URL and API Gateway paths do not safely carry full 5 MiB binary input into a 6 MB Lambda event. Transient private S3 handoff is the smallest viable transport and requires separate MC authorization. |
| IO-4 — request/response capacity | PASS | Tiny control request + up-to-200-MB Lambda response streaming supports the narrow contract; exact serializer ceiling/test locked. |
| IO-5 — region/latency | PASS | `ap-south-1` Mumbai selected for Phase 1; measure actual Kerala/Lovable path latency before production. |
| IO-6 — operational containment | PASS | 15s timeout, 2GB starting memory, bounded reserved concurrency, on-demand default, metrics/logging, version/alias rollback. |
| IO-7 — raw-file lifecycle | PASS WITH SECURITY REVIEW | Immediate delete after read; in-memory parse; private encrypted S3; asynchronous Lifecycle only as failure backstop. |

---

## 21. Exact Production-Suitable Infrastructure Architecture

The Stage A architecture handed to Security is:

`Smart Business authenticated preview request`

→ server re-derives Owner/business

→ durable/shared EC-2 per-business guard acquired

→ server issues short-lived, exact-key, max-5-MiB SigV4 presigned S3 POST

→ browser uploads to private encrypted `ap-south-1` parser-ingress S3 object

→ Smart Business server invokes **standard Lambda default compute** in `ap-south-1` using the later-reviewed IAM/SigV4 boundary

→ Lambda (`nodejs24.x`, initial 2,048 MB, 15s timeout) receives only opaque object locator/control metadata

→ Lambda HEAD/GET with hard 5-MiB read cap

→ Lambda deletes raw S3 object immediately after successful read

→ `node:zlib` XLSX produced-byte verification capped at 25 MiB

→ Papa Parse / ExcelJS parse in memory

→ enforce 2,000 rows / 40 columns / 2,000 characters per cell

→ return only canonical allowlisted parse result through **response streaming**, with a hard internal serialized-size ceiling below AWS's 200 MB streamed-response quota

→ Smart Business validates complete response before any import-support write

→ no Product Truth mutation during preview

→ S3 Lifecycle expiration provides abandoned-object failure backstop only

→ CloudWatch receives bounded operational metadata only, never merchant file/row/cell content.

---

## 22. New Dependency Requiring Mission Control Decision

The architecture cannot preserve the full locked 5 MB binary upload using the reviewed direct synchronous paths without a transport bridge.

Therefore Stage A formally raises:

`AWS S3 — NARROW TRANSIENT PARSER-INGRESS TRANSPORT DEPENDENCY`

Status:

`TECHNICALLY REQUIRED FOR THE SELECTED TRANSPORT; NOT YET AUTHORIZED FOR IMPLEMENTATION`

Mission Control must explicitly authorize this narrow dependency before any Build instruction can create or configure S3.

This does **not** authorize:

- general Smart Business file storage;
- permanent raw-file retention;
- R2;
- S3 as a business database;
- S3 as parser compute containment;
- a general ingestion backend;
- asynchronous queue/job architecture.

---

## 23. Unresolved Facts and Required Future Evidence

These items remain future acceptance evidence, not unresolved provider-contract blockers for this Stage A decision:

1. exact Node 24 bundled artifact size with Papa Parse + ExcelJS;
2. measured peak Lambda memory for maximum-bound CSV/XLSX fixtures;
3. measured parser duration and cold-start latency in `ap-south-1`;
4. measured end-to-end merchant preview latency from the actual Smart Business runtime and representative Kerala networks;
5. exact maximum serialized allowlisted response size under adversarial/max-bound fixtures;
6. exact reserved-concurrency integer for pilot traffic;
7. monthly cost estimate based on measured pilot request counts/file sizes/durations;
8. Security disposition for presigned upload scope, IAM/SigV4 credential placement, S3 object isolation, exceptional retention, and denial-of-wallet controls.

None requires creating infrastructure during this review.

---

## 24. Boundary Confirmation

During Stage A:

- AWS resource creation: **NO**
- S3 bucket/object creation: **NO**
- R2 creation/use: **NO**
- application code change: **NO**
- dependency change: **NO**
- SQL/migration creation: **NO**
- Supabase mutation: **NO**
- RLS/grant change: **NO**
- service-role expansion: **NO**
- Lovable change: **NO**
- Product Truth change: **NO**
- permission expansion: **NO**
- twentieth Catalog command: **NO**
- 5 MB upload-limit weakening: **NO**
- 25 MB XLSX produced-byte-limit weakening: **NO**
- Build Lock/Build Mode: **NO**
- deployment/publication: **NO**
- production data/action: **NO**
- SB-P-1.11 acceptance/completion declaration: **NO**

The only repository output from this mission is this report.

---

## 25. Next Gate

After this report is human-reviewed and merged into `main`:

1. Security & Permissions Architecture may begin Stage B under `instruction1.98.md`.
2. Security must review the exact S3 transient transport boundary selected here, including presigned POST scope, IAM/SigV4 credential placement, per-object tenant isolation, exceptional-retention cleanup, failure sanitization, EC-2 guard preservation, and denial-of-wallet controls.
3. Mission Control must explicitly decide whether to authorize the new narrow S3 parser-ingress dependency before any implementation mission.
4. A Stage A PASS does not authorize AWS creation, Build Mode, deployment, migration, or production action.

---

## 26. Final Stage A Verdict

`AWS LAMBDA INFRASTRUCTURE REVIEW — PASS`

The selected Lambda parser architecture is technically viable with one necessary architectural amendment: a narrowly scoped, transient private S3 handoff is required to preserve the locked full 5 MB compressed-upload limit. That dependency is identified but not implemented or implicitly authorized. Security review and Mission Control authorization remain mandatory before any Build activity.