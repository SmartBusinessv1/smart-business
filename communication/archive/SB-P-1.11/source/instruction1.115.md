# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-19 — STAGE C SECURITY & PERMISSIONS ARCHITECTURE REVIEW

**Instruction ID:** instruction1.115  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Review Gate:** GC-19 — Stage C Security & Permissions Architecture Review  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIALIST REVIEW ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**AWS Resource Authority:** NONE  
**Production Mutation Authority:** NONE

---

## 1. Mission Objective

Execute Stage C of the Lambda Parser EIS specialist review sequence originally defined by:

`communication/live/instruction1.102.md`

Stage A Infrastructure Operations is closed PASS.

Stage B Supabase Backend Architecture is closed PASS by the merged final verdict in:

`communication/live/report1.123.md`

This mission now authorizes the previously locked Stage C review.

Required output:

`communication/live/report1.124.md`

This is a security and permissions architecture confirmation only. It does not authorize implementation, migration execution, AWS/S3/IAM resource creation, Supabase mutation, dependency changes, Lovable changes, deployment, publication, production use, EIS lock, Build Lock, or Build Mode.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.115.md`
- `communication/live/instruction1.102.md`
- `communication/live/report1.108.md`
- `communication/live/report1.103.md`
- `communication/live/report1.104.md`
- `communication/live/report1.105.md`
- `communication/live/report1.106.md`
- `communication/live/report1.107.md`

Read the completed Infrastructure review chain required to understand the final Stage A contract, including at minimum:

- `communication/live/report1.109.md`
- `communication/live/report1.112.md`
- `communication/live/report1.113.md`
- `communication/live/report1.114.md`
- `communication/live/report1.115.md`

Read the complete Stage B backend correction/confirmation chain needed to understand the final accepted Supabase boundary, including at minimum:

- `communication/live/report1.116.md`
- `communication/live/report1.117.md`
- `communication/live/report1.118.md`
- `communication/live/report1.119.md`
- `communication/live/report1.120.md`
- `communication/live/report1.121.md`
- `communication/live/report1.122.md`
- `communication/live/report1.123.md`

Use repository implementation evidence only where required to validate compatibility with existing authority boundaries, including:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Use prior parser/runtime evidence referenced by `instruction1.102.md` where needed.

Do not rely on chat history as authority when repository evidence exists.

---

## 3. Entry Gate Confirmation

Before substantive review, confirm from merged repository evidence that:

1. Stage A Infrastructure Operations has a merged PASS disposition with no unresolved infrastructure blocker;
2. Stage B Supabase Backend Architecture has the merged exact verdict:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

3. no unresolved Stage A or Stage B blocker remains;
4. no implementation, SQL/migration execution, AWS resource creation, Supabase mutation, deployment, or production action has been authorized merely by those PASS findings.

If the entry gate is not satisfied, return:

`LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

and do not continue substantive Stage C review.

---

## 4. Stage C Review Scope

Review the complete Lambda + transient private S3 parser EIS security boundary after incorporating the merged Stage A and Stage B findings.

The review must determine whether the final specification is sufficiently precise, least-privilege, tenant-isolated, fail-closed, abuse-resistant, privacy-preserving, and internally consistent to become eligible for later Mission Control EIS lock consideration.

Do not redesign accepted architecture unless a direct load-bearing security incompatibility is proven.

---

## 5. Required Security Confirmation Areas

### 5.1 IAM Roles Anywhere / AWS4-X509

Confirm:

- the manual AWS4-X509 `CreateSession` approach is precise enough to implement safely in the actual Smart Business server runtime;
- private key and certificate material remain server-only encrypted secrets;
- no certificate private key is ever delivered to the browser;
- no long-lived AWS access key is introduced;
- temporary AWS session credentials are least-privilege, short-lived, bounded, non-persistent, and excluded from logs;
- credential acquisition failures fail closed;
- rotation, revocation, compromise response, and certificate replacement are sufficiently defined at EIS level;
- no credential path creates authority broader than the parser-ingress/upload and exact Lambda invocation needs.

### 5.2 IAM Authority Separation

Confirm the external workload/caller principal can perform only the intended narrow operations.

At minimum verify:

- upload capability is scoped to the exact transient parser-ingress object/key authorized by the lease;
- caller cannot list arbitrary bucket contents;
- caller cannot read arbitrary ingress objects;
- caller cannot delete arbitrary objects;
- caller cannot administer S3, IAM, Lambda, CloudWatch, or account resources;
- caller invocation authority is scoped to the exact intended Lambda Function URL path/resource;
- Lambda execution role can only head/read/delete the narrow ingress object scope required for parsing plus bounded logging/metrics;
- Lambda receives no Supabase service-role key, database credential, Product Truth write authority, Catalog command authority, or Inventory write authority;
- AWS roles cannot bypass the accepted Supabase lifecycle/lease boundary.

### 5.3 Lambda Function URL Boundary

Confirm:

- `AuthType = AWS_IAM` remains mandatory;
- no public or wildcard principal is accepted;
- `lambda:InvokeFunctionUrl` is narrowly scoped;
- any required `lambda:InvokeFunction` authority is narrowly scoped;
- `lambda:InvokedViaFunctionUrl = true` or equivalent accepted condition prevents the same external caller principal from gaining alternate direct invocation authority;
- no browser-origin unauthenticated invocation path is introduced;
- Function URL configuration does not create a second general backend surface.

### 5.4 S3 Upload Authorization and Integrity

Confirm the final contract binds together:

- exact object key;
- server-derived business/lease binding;
- exact expected byte length;
- SHA-256 integrity value;
- short capability expiry;
- one-use lease semantics;
- private bucket/object posture;
- browser upload-only capability;
- no browser GET/LIST/DELETE authority;
- independent Lambda verification with `HeadObject`/checksum/size before parsing;
- object deletion before parsing as accepted by the EIS, with lifecycle backstop preserved;
- replay of a still-valid upload capability cannot substitute different authorized bytes for the same accepted lease without detection.

### 5.5 Tenancy and Cross-Business Isolation

Confirm:

- business identity is derived authoritatively by the Smart Business server, not trusted from browser input;
- lease, guard token, object locator/key, actor/request context, and parser dispatch remain tenant-bound;
- learned or guessed lease IDs/object keys cannot authorize cross-business parsing;
- `parser_upload_leases` retains the accepted physical enforcement and `service_role` privilege-neutralization contract;
- `parser_preview_guards` remains within its already-approved B3 authority model;
- browser roles receive no direct support-state authority;
- no employee/manager financial or parser administration authority is introduced;
- EC-2 remains per-business, shared, durable, and fail-closed.

### 5.6 Abuse / Denial-of-Wallet

Confirm the combined controls provide defense-in-depth without an obvious bypass:

- EC-2 durable per-business guard;
- lease expiry and one-use dispatch;
- exact object/size/checksum binding;
- finite Lambda reserved concurrency;
- 5 MiB raw input limit;
- XLSX produced-byte/decompression containment;
- 2,000-row limit;
- 40-column limit;
- 2,000-character-per-cell limit;
- 10-second application parser budget;
- 15-second Lambda timeout;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE` behavior;
- S3 deletion and lifecycle cleanup;
- rate-window semantics.

Confirm no single control is incorrectly relied upon as the sole protection and no account-wide exhaustion path is made materially easier by the architecture.

### 5.7 Parse-Before-Write / Unknown Outcome / Failure Safety

Confirm:

- EC-3 parse-before-write remains intact;
- parser failure cannot create Catalog truth;
- parser failure cannot create Inventory truth;
- S3 failure cannot create Product Truth;
- Lambda timeout cannot create Product Truth;
- malformed/hostile file rejection cannot create Product Truth;
- unknown dispatch/result outcomes fail closed;
- the accepted CLAIMED/terminal lease lifecycle prevents same-lease re-dispatch authority from being recreated;
- retries require the accepted fresh-lease/recovery path where specified;
- downstream Product Truth remains behind the existing Founder Workflow and exactly nineteen public Catalog commands;
- sanitized failure codes do not leak raw AWS/provider internals.

### 5.8 Logging, Secrets, and Data Minimization

Confirm logs/metrics must not contain:

- raw merchant files;
- merchant row/cell content;
- certificate private keys;
- certificate blobs where unnecessary;
- AWS temporary credentials;
- Supabase service-role secrets;
- raw provider errors containing sensitive internals;
- presigned upload secrets/capabilities;
- unnecessary full checksums or object contents.

Confirm the observability model remains sufficient for timeout, throttling, concurrency, cleanup failure, authentication/authorization failure, parser rejection, and denial-of-wallet monitoring without weakening merchant privacy.

### 5.9 Hostile-File Security

Confirm the final parser contract preserves security-effective handling of:

- CSV and XLSX only;
- type/extension/content validation as specified;
- no macro execution;
- no formula execution/evaluation;
- no external-link execution;
- decompression/produced-byte containment;
- workbook/worksheet restrictions already locked by the EIS;
- row/column/cell limits;
- parser timeout;
- unsupported/corrupt/encrypted workbook failure behavior;
- deterministic sanitized failure classification;
- no CWD-relative worker path/native binary/runtime assumption that reintroduces an escape from the accepted Lambda containment model.

### 5.10 Supabase Privilege and Support-State Security

Confirm the final Stage B contract remains security-coherent as consumed by Stage C:

- `parser_upload_leases` direct `service_role` table privilege is intended to be exactly `{ SELECT }` after revoke-before-grant neutralization;
- lifecycle mutation occurs only through the accepted narrow SECURITY DEFINER helper surface;
- actual effective ACL verification is required before cutover;
- direct `service_role` `INSERT`/`UPDATE`/`DELETE` must fail;
- PUBLIC/anon/authenticated receive no support-state authority;
- authority fields remain immutable through the accepted design;
- illegal lifecycle transitions fail closed;
- no broader default-grant effect may silently recreate direct lease-table mutation authority;
- `parser_preview_guards` remains unchanged from its accepted B3 model;
- no support table becomes Product Truth.

---

## 6. Closed Findings — Do Not Reopen Without Direct Security Evidence

Treat the following as closed specialist findings unless Stage C finds a direct load-bearing security incompatibility in the combined EIS:

- all Stage A Infrastructure PASS findings;
- Stage B B1 mutation-surface design PASS;
- Stage B transition-helper contract PASS;
- Stage B six-state database invariants PASS;
- Stage B authority-field immutability PASS;
- Stage B illegal-transition prevention PASS;
- Stage B bounded failure-code contract PASS;
- Stage B safety-case matrix PASS;
- Stage B enforcement-before-use ordering PASS;
- Stage B pre-cutover verification structure PASS;
- Stage B atomicity / partial-failure / rollback PASS;
- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity PASS;
- Stage B data-minimization PASS;
- final `service_role` privilege-neutralization PASS.

A direct security contradiction may be reported, but the reviewer must identify exact evidence and the smallest corrective scope. Do not redesign unrelated architecture.

---

## 7. Frozen Product and Architecture Decisions

Preserve without modification unless a direct security blocker is proven:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands — no twentieth command;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 and EC-3;
- AWS Lambda as the narrow external parser runtime;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second application parser budget;
- finite reserved concurrency;
- transient private S3 parser-ingress;
- IAM Roles Anywhere;
- AWS4-X509 manual signing architecture;
- AWS_IAM Function URL boundary;
- `ChecksumMode = ENABLED`;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- hard input limit of 5,242,880 bytes;
- hard XLSX produced-byte limit of 25 × 1024 × 1024 bytes;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- accepted six-state lease lifecycle;
- accepted B1 Option A physical-enforcement architecture;
- accepted helper surface and failure-code contract;
- final revoke-before-grant `service_role` privilege-neutralization contract;
- Product Truth remains behind the existing Founder Workflow and exactly nineteen public Catalog commands.

---

## 8. Required Output

Create only:

`communication/live/report1.124.md`

The report must state:

1. mission and authority;
2. exact merged `main` SHA reviewed;
3. Stage A entry-gate result;
4. Stage B entry-gate result;
5. IAM Roles Anywhere / AWS4-X509 result;
6. IAM authority-separation result;
7. Function URL boundary result;
8. S3 upload authorization/integrity result;
9. tenancy/cross-business isolation result;
10. abuse/denial-of-wallet result;
11. parse-before-write / failure-safety result;
12. logging/secrets/data-minimization result;
13. hostile-file security result;
14. Supabase privilege/support-state security result;
15. confirmation prior Stage A and Stage B PASS findings remained closed unless explicitly identified otherwise;
16. confirmation frozen Product Truth and architecture decisions remained unchanged;
17. confirmation no implementation/database/environment/resource mutation occurred;
18. final verdict;
19. any remaining security blocker.

Allowed final verdicts only:

- `LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — PASS`
- `LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — CHANGES REQUIRED`
- `LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

If PASS, state explicitly:

`No Security & Permissions Architecture blocker remains in Stage C.`

A PASS does not itself authorize EIS lock, implementation package creation, Build Lock, Build Mode, implementation, SQL/migration execution, Supabase mutation, AWS resource creation, deployment, publication, or production use.

---

## 9. Prohibited Scope

Do not:

- implement code;
- create or execute SQL/migrations;
- mutate Supabase;
- create or modify AWS/S3/IAM resources;
- create or modify Lambda resources;
- change live grants/default privileges;
- modify Lovable;
- add/update dependencies;
- change Product Truth;
- change Catalog / Inventory truth boundaries;
- add a twentieth Catalog command;
- expand employee/manager permissions;
- weaken parser/input/runtime/response limits;
- redesign repository-wide default grants;
- modify `parser_preview_guards` privilege behavior without a proven direct security blocker;
- alter accepted Stage A/B findings without direct evidence;
- enter EIS lock;
- create the implementation package;
- enter Build Lock or Build Mode;
- deploy;
- publish;
- touch production.

---

## 10. Repository Discipline

The executing room shall:

- verify current merged `main` before review;
- create only `communication/live/report1.124.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed `main` SHA, branch, commit SHA, and PR;
- not merge its own PR.

---

## 11. Gate After Stage C

Only if `report1.124.md` is human-reviewed, merged, and returns exactly:

`LAMBDA PARSER EIS SECURITY & PERMISSIONS REVIEW — PASS`

are all three specialist EIS review stages considered complete.

Even then, implementation is not authorized.

Mission Control must next perform the final three-stage chain review required by `communication/live/instruction1.102.md` and decide separately whether the EIS is eligible for lock consideration.

---

## 12. Mission Control Decision

`SB-P-1.11-GC-19 — STAGE C SECURITY & PERMISSIONS ARCHITECTURE REVIEW AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Security & Permissions Architecture → communication/live/report1.124.md**
