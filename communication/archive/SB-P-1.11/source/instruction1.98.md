# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-2 — AWS LAMBDA SPECIALIST REVIEW GATE

**Mission ID:** SB-P-1.11-GC-2  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Parser Runtime / GC-1 Closure  
**Authorized By:** Mission Control  
**Mode:** REVIEW ONLY — TWO-STAGE SPECIALIST GATE  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Review the AWS Lambda parser-runtime architecture selected in merged `communication/live/report1.103.md` before any Build authorization.

This mission does not reopen the completed Founder Workflow Reconciliation architecture or its Supabase/Security PASS chain.

This mission exists only to determine whether the selected narrow AWS Lambda parser runtime is sufficiently defined and safe to proceed toward a later implementation specification.

The specialist gate is intentionally split into two stages:

1. **Infrastructure Operations review first** — establish the provider/runtime/transport facts and identify a technically viable transport design for the locked 5 MB compressed-upload requirement.
2. **Security & Permissions Architecture review second** — review the selected Lambda boundary and the Infrastructure findings for authentication, isolation, abuse, data handling, and authority safety.

Security shall not issue its final verdict until the Infrastructure report from Stage A is merged into `main`.

---

## 2. Canonical Inputs

Both stages shall review the current merged repository and, at minimum:

- `communication/live/report1.90.md`
- `communication/live/report1.91.md`
- `communication/live/report1.92.md`
- `communication/live/report1.93.md`
- `communication/live/report1.94.md`
- `communication/live/report1.95.md`
- `communication/live/report1.103.md`
- `communication/live/report1.102.md` only as the already-passed Founder Workflow security baseline that must remain unchanged

Repository evidence prevails over assumptions.

Provider claims must be verified against authoritative AWS documentation. Do not rely on blogs, forum posts, marketing summaries, or memory for load-bearing AWS facts.

---

# STAGE A — INFRASTRUCTURE OPERATIONS REVIEW

## 3. Executing Room

**Primary Identity:** Infrastructure Operations

Stage A is a bounded provider/runtime architecture review only.

Required output:

`communication/live/report1.104.md`

---

## 4. Stage A Review Questions

Infrastructure Operations must review and answer all of the following.

### IO-1 — Lambda execution model

Confirm whether the selected standard AWS Lambda execution model provides the required per-invocation isolation for the parser workload and whether any selected or proposed configuration would weaken that property.

Record the exact AWS runtime family and region assumptions appropriate for Phase 1. Do not create AWS resources.

### IO-2 — Node/parser compatibility

Confirm the production suitability of the current parser stack for the proposed Lambda runtime:

- Papa Parse;
- ExcelJS;
- `node:zlib` / ZIP-structure verification;
- 5 MB compressed-input ceiling;
- 25 MB actual-produced XLSX decompressed-byte ceiling;
- 2,000 rows;
- 40 columns;
- 2,000 characters per cell.

Identify any packaging, bundle-size, `/tmp`, memory, CPU, duration, or cold-start concern that materially affects Phase 1 viability.

### IO-3 — 5 MB upload transport — BLOCKING DESIGN QUESTION

`report1.103.md` identified that naive direct binary-to-Lambda transport can exceed Lambda's synchronous 6 MB payload ceiling after base64 expansion.

Stage A must resolve the architecture question without silently shrinking the locked 5 MB product limit.

Compare only transport patterns that preserve the narrow parser-service boundary and do not introduce a second general backend.

At minimum evaluate:

1. direct Lambda Function URL / synchronous invocation with binary/base64 transport;
2. API Gateway or equivalent AWS front-door transport if it materially changes the effective body constraint;
3. presigned transient object-storage handoff **only if absolutely necessary for transport capacity**, and only after explicitly testing whether it violates or can be reconciled with the prior "no object storage merely for parser compute containment" decision.

Do not assume R2. Do not select R2.

If AWS S3 becomes technically necessary solely because no direct transport can support the locked 5 MB file, record it as a **new narrow transport dependency requiring separate Mission Control authorization**, not as implicitly approved architecture.

The preferred outcome is the smallest transport architecture that supports the full 5 MB compressed upload without permanent raw-file retention.

### IO-4 — Request and response capacity

Verify exact request and response limits for the proposed transport.

The parsed result returned to Smart Business must also fit within the selected response path under the maximum allowed 2,000 × 40 shape.

If the maximum allowlisted parsed result can exceed the transport response ceiling, quantify the risk and propose the smallest bounded correction.

### IO-5 — Region and latency

Assess the Phase 1 region choice for Kerala merchants and the Smart Business application path.

Prefer the closest suitable AWS region consistent with product/runtime dependencies and operational simplicity.

Record expected latency/cold-start tradeoffs qualitatively; do not invent benchmarks.

### IO-6 — Operational containment

Review:

- Lambda timeout configuration;
- memory configuration and CPU allocation implications;
- reserved concurrency / account-concurrency implications;
- logging configuration;
- deployment/rollback shape;
- cost exposure and denial-of-wallet considerations;
- observability sufficient for diagnosis without logging merchant file contents.

Do not create provider resources.

### IO-7 — Raw-file lifecycle

Confirm the parser architecture can maintain:

- transient processing only;
- no raw merchant file in logs;
- no unintended durable retention;
- no parser-side business database;
- no Product Truth writes;
- parsed response returned only as the approved allowlisted structure.

If any temporary storage is technically unavoidable, specify lifecycle, encryption, TTL/deletion guarantee, and failure cleanup requirements as architecture only.

### IO-8 — Infrastructure verdict

Allowed Stage A verdicts:

- `AWS LAMBDA INFRASTRUCTURE REVIEW — PASS`
- `AWS LAMBDA INFRASTRUCTURE REVIEW — CHANGES REQUIRED`
- `AWS LAMBDA INFRASTRUCTURE REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

A PASS must identify one exact production-suitable transport architecture for the locked 5 MB input and maximum parsed response, with no unresolved load-bearing provider assumption.

---

# STAGE B — SECURITY & PERMISSIONS ARCHITECTURE REVIEW

## 5. Stage B Activation

Stage B begins only after `communication/live/report1.104.md` is human-reviewed and merged into `main`.

**Primary Identity:** Security & Permissions Architecture

Required output:

`communication/live/report1.105.md`

---

## 6. Stage B Review Questions

Security & Permissions Architecture must review `report1.103.md` together with the merged Stage A report.

### SEC-L-1 — Authentication boundary

Review the exact Smart Business → Lambda authentication design.

`report1.103.md` proposes AWS IAM / SigV4 as the preferred platform-native boundary. Confirm whether this is secure and operationally compatible with the actual caller environment.

The review must determine:

- where AWS credentials would live;
- whether the Lovable/Cloudflare application runtime can safely sign requests without exposing long-lived AWS credentials to browser code;
- exact least-privilege IAM scope;
- rotation/revocation model;
- replay and request-integrity protection;
- whether any credential must be long-lived;
- whether the parser can be invoked directly by unauthorized third parties.

No browser-delivered AWS credential is permitted.

If SigV4 from the existing server runtime is not safely viable, do not improvise a weaker shared-secret design without explicitly recording it as `CHANGES REQUIRED`.

### SEC-L-2 — Execution isolation

Confirm the Lambda execution-environment isolation claim relevant to concurrent merchant requests and distinguish:

- provider execution-environment isolation;
- application-level per-business abuse control;
- AWS account-level concurrency/cost exposure.

Lambda isolation must not be treated as replacing the already-required EC-2 per-business pre-parse guard.

### SEC-L-3 — Authority minimization

The parser must have:

- no Supabase service-role key;
- no caller JWT unless proven necessary and specifically justified;
- no Catalog/Product Truth write authority;
- no direct business decision authority;
- no ability to execute any of the nineteen Catalog commands;
- no database credential merely for convenience.

Confirm the narrow input/output contract is sufficient.

### SEC-L-4 — Business identity and tenancy

Determine what tenant context, if any, the parser actually needs.

Prefer no authoritative `businessId` at the parser boundary unless required for a security control.

If a business identifier is transmitted, it must not be trusted by the parser as authorization evidence and must not create cross-business data access.

### SEC-L-5 — Upload transport security

Review the exact transport selected by Stage A.

Confirm:

- upload size enforcement occurs safely;
- content-type/extension cannot be trusted alone;
- raw bytes are protected in transit;
- temporary storage, if any, cannot be publicly enumerable/readable;
- signed URLs/tokens, if any, are short-lived, narrowly scoped, one-purpose, and non-reusable where practical;
- merchant A cannot read, replace, parse, or delete merchant B's upload;
- abandoned or failed uploads cannot persist indefinitely;
- raw-file transport does not grant Product Truth authority.

### SEC-L-6 — Parse-before-write preservation

Confirm the existing mandatory ordering remains intact:

Authenticate/derive Owner + business → acquire per-business guard → validate/transport/parse/validate/classify → only then privileged Smart Business bookkeeping writes → no Product Truth mutation during preview.

Moving parsing to Lambda must not create an import batch/row before a complete successful parse/classification result exists.

### SEC-L-7 — Failure sanitization

Review failures from:

- Lambda timeout;
- payload-size rejection;
- malformed XLSX/CSV;
- transport failure;
- AWS auth failure;
- provider 4xx/5xx;
- partial/invalid parser response.

Merchant-visible output must stay fixed and sanitized. Raw AWS response bodies, ARNs, stack traces, request IDs where unnecessary, credentials, file contents, internal paths, SQL, and environment values must not reach the merchant UI.

### SEC-L-8 — Abuse and denial-of-wallet

Confirm the architecture still requires the durable/shared per-business guard already locked by EC-2.

Also assess whether Lambda reserved concurrency, AWS budgets/alarms, or other provider controls are required as defense-in-depth without confusing them with business-level authorization.

### SEC-L-9 — Data minimization and logging

Confirm no raw rows/cells/file bytes are logged by either Smart Business or Lambda on error paths.

Logs should carry only bounded operational metadata necessary for diagnosis.

### SEC-L-10 — Security verdict

Allowed Stage B verdicts:

- `AWS LAMBDA SECURITY & PERMISSIONS REVIEW — PASS`
- `AWS LAMBDA SECURITY & PERMISSIONS REVIEW — CHANGES REQUIRED`
- `AWS LAMBDA SECURITY & PERMISSIONS REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

A PASS means the selected provider boundary and Stage A transport design are safe enough to proceed to a later implementation specification. It does not authorize implementation.

---

## 7. Shared Locked Boundaries

Neither specialist may:

- implement code;
- add dependencies;
- create AWS or Vercel resources;
- create or modify S3/R2/object storage;
- create SQL or migrations;
- mutate Supabase;
- change RLS or grants;
- expand service-role authority;
- change Lovable;
- redesign Product Truth;
- expand Manager/Employee permissions;
- add a twentieth Catalog command;
- weaken the 5 MB compressed upload limit;
- weaken the 25 MB XLSX produced-byte cap;
- bypass EC-2 per-business abuse protection;
- authorize Build Lock or Build Mode;
- deploy;
- publish;
- touch production data;
- declare SB-P-1.11 accepted or complete.

Any additional blocking issue discovered must be recorded, not silently solved outside this mission.

---

## 8. Gate Logic

The specialist chain is:

`report1.103.md` AWS Lambda selection
→ Stage A Infrastructure Operations `report1.104.md`
→ human review + merge
→ Stage B Security & Permissions Architecture `report1.105.md`
→ human review + merge
→ Mission Control decision

Only positive specialist outcomes may permit Mission Control to issue a later implementation specification/build-preparation mission.

A specialist PASS does not itself grant Build authority.

---

## 9. Required Completion Discipline

Each executing room shall:

1. synchronize to latest merged `main` before review;
2. record the exact reviewed SHA;
3. use repository evidence first;
4. use authoritative AWS documentation for external provider facts;
5. clearly separate verified facts, architecture requirements, and unresolved assumptions;
6. produce only its authorized report file;
7. return through a protected branch and pull request;
8. require human review and merge.

---

## 10. Next Logical Step

Human-review and merge this instruction. Then execute **Stage A — Infrastructure Operations** first. Security & Permissions Architecture waits until `report1.104.md` is merged.