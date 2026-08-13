# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-6 — LAMBDA PARSER EIS SPECIALIST REVIEW GATE

**Instruction ID:** instruction1.102  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-6 — Engineering Implementation Specification Specialist Review  
**Authorized By:** Mission Control  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Mode:** REVIEW ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Perform a bounded specialist review of the merged standalone Engineering Implementation Specification:

`communication/live/report1.108.md`

The purpose is to determine whether the Lambda + transient private S3 parser EIS is sufficiently precise, safe, internally consistent, and implementable to become eligible for later Mission Control EIS lock consideration.

This mission does not authorize Build Lock, Build Mode, implementation, AWS resource creation, SQL, migration execution, Supabase mutation, Lovable changes, deployment, publication, or production use.

The review shall be executed in three sequential stages so that later reviewers can consume earlier specialist findings without creating competing architecture.

---

## 2. Canonical Inputs

All stages shall use current merged `main` as repository truth.

Primary EIS under review:

- `communication/live/report1.108.md`

Required supporting architecture/security chain:

- `communication/live/report1.103.md`
- `communication/live/report1.104.md`
- `communication/live/report1.105.md`
- `communication/live/report1.106.md`
- `communication/live/report1.107.md`

Supporting parser/runtime evidence, where needed:

- `communication/live/report1.90.md` through `communication/live/report1.95.md`

Founder Workflow baseline that must remain closed and preserved:

- `communication/live/report1.96.md`
- `communication/live/report1.98.md`
- `communication/live/report1.100.md`
- `communication/live/report1.101.md`
- `communication/live/report1.102.md`

Governing EIS instruction:

- `communication/live/instruction1.101.md`

No specialist may reopen Product Truth, Founder Workflow decisions, the nineteen-command Catalog boundary, D-047/D-068, BKR-1 through BKR-5, or the already-confirmed Lambda/S3 architecture except where `report1.108.md` itself introduces a direct inconsistency or implementation blocker.

---

## 3. Locked Boundaries to Preserve

Every reviewer shall preserve without weakening:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands — no twentieth command;
- existing Catalog / Inventory truth separation;
- D-047 and D-068 protections;
- BKR-1 through BKR-5;
- EC-2 durable/shared per-business pre-parse abuse guard;
- EC-3 parse-before-write ordering;
- AWS Lambda as the narrow external parser runtime;
- standard Lambda default compute, not Managed Instances;
- transient private S3 only as parser-ingress transport;
- AWS IAM Roles Anywhere as the external-workload credential architecture unless a reviewer proves a direct implementation blocker in the EIS contract itself;
- `ap-south-1` Phase 1 region;
- `nodejs24.x` target;
- Papa Parse for CSV;
- ExcelJS for XLSX;
- `node:zlib` produced-byte containment;
- hard input limit: 5,242,880 bytes;
- hard XLSX produced-byte limit: 25 × 1024 × 1024 bytes;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- 10-second application parser budget;
- 15-second Lambda timeout baseline;
- 2,048 MB Lambda memory baseline.

A specialist may identify a blocker or request correction. A specialist may not silently replace a locked decision.

---

# STAGE A — INFRASTRUCTURE OPERATIONS REVIEW

## 4. Stage A Owner

**Executing Room:** Infrastructure Operations

Stage A begins only after this instruction is human-reviewed and merged into `main`.

### Required output

`communication/live/report1.109.md`

### Allowed final verdicts

- `LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — PASS`
- `LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — CHANGES REQUIRED`
- `LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

## 5. Stage A Review Scope

Review only infrastructure-operability and provider-runtime aspects of `report1.108.md`.

At minimum verify:

1. **Lambda runtime and execution model**
   - standard Lambda default compute remains the actual selected execution class;
   - `nodejs24.x` remains a currently viable managed runtime target for the EIS;
   - 2,048 MB memory and 15-second timeout are coherent starting baselines;
   - finite reserved concurrency is correctly treated as defense-in-depth and operationally tunable, not an EC-2 replacement;
   - Managed Instances remain excluded.

2. **Packaging and deployment shape**
   - the proposed esbuild/single-bundle Node 24 packaging approach is technically suitable for Papa Parse, ExcelJS and `node:zlib`;
   - no CWD-relative TypeScript worker path, `worker_threads`, native helper binary, or unsupported filesystem assumption survives;
   - immutable versions and alias rollback are correctly specified.

3. **S3 ingress transport**
   - the private transient S3 design supports the full locked 5 MiB upload;
   - presigned POST, exact-key, checksum and byte-length constraints are technically coherent;
   - versioning/Object Lock/replication choices fit the transient-delete contract;
   - immediate deletion plus Lifecycle backstop is operationally coherent;
   - the proposed one-day Lifecycle backstop is valid as a cleanup backstop and not misrepresented as immediate deletion.

4. **Response transport**
   - the selected response-streaming mechanism and response-size assumptions are compatible with the chosen Function URL/Lambda runtime path;
   - the EIS does not create an undocumented response-capacity blocker.

5. **Regional and latency fit**
   - `ap-south-1` remains the correct Phase 1 region assumption for this narrow service;
   - no unnecessary cross-region dependency is introduced.

6. **Operational observability and cost containment**
   - required metrics/logging can be implemented without raw merchant data;
   - timeout, throttling, concurrency, cleanup failure, and denial-of-wallet monitoring are sufficient at EIS level;
   - rollback and non-production validation sequencing are implementable.

7. **Implementation resource map**
   - the EIS identifies a coherent, bounded AWS resource set and does not accidentally create a second general backend.

## 6. Stage A Boundaries

Infrastructure Operations shall not:

- redesign database/RLS contracts;
- decide Product Truth;
- implement code;
- create AWS resources;
- create buckets/functions/roles/policies;
- add dependencies;
- change Lovable or Supabase;
- authorize Build Mode.

If Stage A is `CHANGES REQUIRED` or `STOPPED`, Stage B does not begin until Mission Control resolves the blocker.

If Stage A is `PASS`, the report must be human-reviewed and merged before Stage B begins.

---

# STAGE B — SUPABASE BACKEND ARCHITECTURE REVIEW

## 7. Stage B Owner

**Executing Room:** Supabase Backend Architecture

Stage B begins only after a merged Stage A `PASS` report exists.

### Required output

`communication/live/report1.110.md`

### Allowed final verdicts

- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

## 8. Stage B Review Scope

Review only the new Supabase-backed support-state contracts introduced or made concrete by `report1.108.md`.

At minimum verify:

1. **Parser Upload Lease physical contract**
   - table purpose is narrow transport/security state, not Product Truth;
   - fields are sufficient and no merchant-controlled authority field is trusted;
   - business, actor/request, object key, expected byte length, checksum, state, expiry and failure-code handling are coherent;
   - uniqueness and referential-integrity requirements are sufficient;
   - terminal states and transition rules are complete.

2. **Atomic one-use claim**
   - `ISSUED → UPLOADED → CONSUMED | FAILED | EXPIRED` behavior can be enforced atomically;
   - concurrent confirmation/dispatch attempts cannot cause duplicate Lambda dispatch;
   - lost-response and unknown-outcome behavior fails closed;
   - cleanup/recovery from abandoned leases is practical.

3. **EC-2 durable shared guard**
   - the selected Postgres persistence/atomic mechanism is suitable for a shared per-business concurrency/rate guard;
   - acquisition occurs before upload-capability issuance;
   - release/expiry semantics avoid permanent lockout after abandoned work;
   - business-scoped concurrency and rate-window semantics are implementable without relying on process-local state;
   - EC-2 remains separate from Parser Upload Lease state even where they reference each other.

4. **RLS / grant / service-role boundary**
   - client/browser receives no direct table authority;
   - server derives business identity authoritatively;
   - support tables are service-role/server-authoritative only as specified;
   - no new employee/manager access is created;
   - cross-business reads/writes are prevented;
   - no broad `USING (true)` / `WITH CHECK (true)` bypass is implied.

5. **Migration and dependency ordering**
   - a later migration can create these support structures safely;
   - foreign-key order and composite tenant binding are correct;
   - no conflict is introduced with BKR-1 through BKR-5 or existing Catalog/Inventory support tables;
   - `delete_catalog_product` or other existing dependent-history protections are not accidentally weakened.

6. **Idempotency and failure integrity**
   - unknown outcomes, retry, replay, timeout, and partial failure remain safe;
   - no parser failure can create import Product Truth;
   - downstream Founder Workflow idempotency remains untouched.

7. **Data minimization / retention**
   - support records retain only what is operationally required;
   - raw merchant file content is not stored in Supabase by this mechanism;
   - internal failure codes do not become raw provider-error storage.

## 9. Stage B Boundaries

Supabase Backend Architecture shall not:

- execute SQL or migrations;
- mutate Supabase;
- rewrite Founder Workflow architecture;
- add or remove Catalog commands;
- modify Product Truth;
- redesign AWS infrastructure beyond identifying a direct contract incompatibility;
- authorize Build Mode.

If Stage B is `CHANGES REQUIRED` or `STOPPED`, Stage C does not begin until Mission Control resolves the blocker.

If Stage B is `PASS`, the report must be human-reviewed and merged before Stage C begins.

---

# STAGE C — SECURITY & PERMISSIONS ARCHITECTURE CONFIRMATION

## 10. Stage C Owner

**Executing Room:** Security & Permissions Architecture

Stage C begins only after merged Stage A and Stage B `PASS` reports exist.

### Required output

`communication/live/report1.111.md`

### Allowed final verdicts

- `LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — PASS`
- `LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — CHANGES REQUIRED`
- `LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

## 11. Stage C Review Scope

Review the complete EIS security boundary after incorporating the merged Infrastructure and Supabase specialist findings.

At minimum verify:

1. **IAM Roles Anywhere / AWS4-X509**
   - the manual `CreateSession` signing approach is precise enough to implement safely in the actual Cloudflare/Lovable server runtime;
   - private key/certificate placement remains server-only encrypted secret material;
   - no browser-delivered AWS credential exists;
   - temporary session credentials are least-privilege, bounded, non-persistent and non-logged;
   - rotation, revocation and compromise procedures are sufficient.

2. **IAM authority separation**
   - external caller principal can only mint/upload to the narrow parser-ingress object scope and invoke the exact Function URL;
   - external caller cannot read/list/delete S3 objects or administer AWS;
   - Lambda execution role can only head/read/delete the narrow object scope and write bounded logs/metrics;
   - Lambda has no Supabase/database/Product Truth authority.

3. **Function URL boundary**
   - `AuthType = AWS_IAM` is mandatory;
   - no wildcard/public principal exists;
   - `lambda:InvokeFunctionUrl` and `lambda:InvokeFunction` are narrowly scoped;
   - `lambda:InvokedViaFunctionUrl = true` prevents alternate direct invocation by the same caller principal.

4. **S3 upload authorization and integrity**
   - exact key, exact byte length, SHA-256, short expiry and one-use lease semantics are sufficient;
   - still-valid POST replay cannot substitute different authorized bytes;
   - Lambda independently verifies size/checksum before parse;
   - browser receives no GET/LIST/DELETE authority.

5. **Tenancy / cross-business isolation**
   - server-derived business identity binds lease and object locator;
   - learned object keys or lease IDs cannot create cross-business parsing;
   - the browser never supplies authoritative business/object authority;
   - EC-2 remains business-scoped and fail-closed.

6. **Abuse / denial-of-wallet**
   - EC-2, lease expiry, finite Lambda reserved concurrency, hard parser limits and short upload capability jointly provide defense-in-depth;
   - no control creates an easy bypass or account-wide exhaustion path.

7. **Parse-before-write / failure safety**
   - EC-3 remains intact;
   - parser/runtime/S3 failure cannot create Catalog or Inventory truth;
   - unknown outcomes and retries fail closed;
   - sanitized failures do not leak AWS/provider internals.

8. **Logging and data minimization**
   - no raw merchant file, row/cell content, private key, AWS credential, raw provider error, or unnecessary checksum is logged;
   - observability remains sufficient without weakening merchant privacy.

9. **Hostile-file protections**
   - CSV/XLSX-only validation, decompression containment, workbook restrictions, no macro/formula execution, row/column/cell limits and parser timeout remain security-effective.

## 12. Stage C Boundaries

Security & Permissions Architecture shall not:

- implement code;
- create AWS/S3/IAM resources;
- create SQL/migrations;
- mutate Supabase;
- change Lovable;
- expand permissions;
- add a twentieth Catalog command;
- change Product Truth;
- weaken any parser limit;
- authorize Build Mode or deployment.

---

## 13. Final Gate Rule

The EIS is eligible for Mission Control lock consideration only if all three specialist stages return merged `PASS` verdicts with no unresolved load-bearing blocker.

Even three PASS verdicts do **not** themselves authorize:

- EIS lock;
- implementation package creation;
- Build Lock;
- Build Mode;
- code changes;
- AWS/S3/IAM resource creation;
- SQL or migrations;
- Supabase mutation;
- Lovable changes;
- deployment;
- production use;
- SB-P-1.11 acceptance.

Mission Control must separately review the three specialist reports and explicitly decide whether the EIS may be locked and whether the mission lifecycle may advance.

---

## 14. Required Review Discipline

Each specialist shall:

- verify current `main` before review;
- read `report1.108.md` in full;
- read the relevant prior architecture/security reports rather than relying on chat history;
- use repository/provider evidence for load-bearing technical claims;
- distinguish architecture blocker from later implementation-verification evidence;
- avoid reopening settled decisions without direct evidence of incompatibility;
- create only the stage report authorized above;
- use a protected branch and pull request;
- not merge its own PR;
- report exact reviewed `main` SHA;
- state whether any implementation/resource/database/deployment change occurred.

---

## 15. Mission Control Decision

`SB-P-1.11-GC-6 — SPECIALIST REVIEW GATE AUTHORIZED`

Current authorized next stage after this instruction is merged:

**Stage A — Infrastructure Operations Review → `communication/live/report1.109.md`**

Stage B and Stage C remain conditionally authorized but locked until the preceding PASS report is human-reviewed and merged.
