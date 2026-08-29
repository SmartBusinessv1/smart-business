# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-7 — LAMBDA PARSER EIS INFRASTRUCTURE CORRECTION

**Instruction ID:** instruction1.103  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Correction Gate:** GC-7 — Stage A Infrastructure EIS Correction  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Correct only the two blocking infrastructure findings and one non-blocking precision issue identified by the merged Stage A Infrastructure Operations review:

`communication/live/report1.109.md`

The correction applies to the standalone Lambda + transient private S3 parser Engineering Implementation Specification in:

`communication/live/report1.108.md`

This is a narrow correction mission. It does not reopen the accepted parser architecture, Founder Workflow baseline, Product Truth, permissions, Catalog command surface, AWS provider selection, Supabase architecture, or any other EIS decision.

Required output:

`communication/live/report1.112.md`

The output must be a self-contained **EIS Infrastructure Correction Addendum** that becomes binding together with `report1.108.md` if later confirmed by Infrastructure Operations and accepted by Mission Control.

Do not overwrite or rewrite `report1.108.md`. Preserve the original EIS and Stage A review as immutable evidence.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.101.md`
- `communication/live/instruction1.102.md`
- `communication/live/report1.108.md`
- `communication/live/report1.109.md`

Read supporting infrastructure/provider evidence where required:

- `communication/live/report1.103.md`
- `communication/live/report1.104.md`
- `communication/live/report1.106.md`
- `communication/live/report1.107.md`

Preserve the supporting parser/runtime and Founder Workflow evidence inherited by `report1.108.md`.

For load-bearing AWS claims, verify current authoritative AWS documentation. Do not rely on memory where a provider limit, header, SDK behavior, or response-streaming constraint is material.

---

## 3. Authorized Correction Scope

Correct only these items.

### INFRA-EIS-B1 — Exact Serialized-Response Ceiling and Maximum-Bound Proof Contract

`report1.109.md` found that `report1.108.md` does not yet prove that the maximum legitimate allowlisted parser response can complete through the selected Lambda Function URL response-streaming path within the locked 15-second Lambda timeout.

The correction addendum must therefore:

1. Define **one exact hard server-side maximum serialized parser-response size** for Phase 1.
2. Express the limit in bytes, not as an approximate MB value.
3. Apply the limit before or during serialization/streaming so oversized output fails closed rather than consuming the remaining Lambda timeout.
4. Show how the ceiling is compatible with:
   - the selected Lambda Function URL response-streaming path;
   - the first 6 MB streaming behavior;
   - the post-6 MB bandwidth limit identified by Infrastructure Operations;
   - the locked 15-second total Lambda timeout;
   - the locked 10-second application parser budget;
   - S3 `HeadObject`, `GetObject`, verified read, and immediate deletion overhead;
   - serialization and response-write overhead.
5. Prefer a ceiling that remains entirely within the unthrottled initial response window if that is the smallest safe mechanism consistent with the legitimate maximum parser result. Do not select a larger ceiling merely because AWS permits a larger total streamed response.
6. Derive the ceiling against the actual allowlisted `ParseOutcome` / row-result schema and the locked parser shape:
   - maximum 2,000 rows;
   - maximum 40 columns;
   - maximum 2,000 characters per cell;
   - only fields that the allowlisted parser response actually returns.
7. Clearly distinguish:
   - theoretical hostile input size;
   - maximum accepted parsed input shape;
   - maximum legitimate allowlisted serialized response;
   - selected safe Phase 1 response ceiling.
8. If the current allowlisted response schema could theoretically exceed the selected safe ceiling for a legitimate accepted file, specify the smallest bounded behavior needed to preserve correctness without redesigning Product Truth. Examples may include deterministic rejection of an oversized preview result or a tighter response-field serialization contract, but the correction must choose exactly one mechanism and must not introduce a new storage/queue/backend architecture.
9. Define the exact fail-closed internal and caller-visible behavior when the serialized response would exceed the ceiling.
10. Add a later-build maximum-bound fixture proof contract that must test at minimum:
    - the largest legitimate CSV-shaped response;
    - the largest legitimate XLSX-shaped response;
    - a response exactly at or immediately below the selected ceiling;
    - a response above the ceiling;
    - cold and warm Lambda execution where applicable;
    - total invocation duration under the locked 15-second timeout;
    - parser application budget remaining bounded at 10 seconds;
    - streamed bytes and completion behavior.
11. State that benchmark evidence is an implementation-verification gate and is not being claimed as already proven in this specification-only mission.

The correction must not weaken any existing parser input limit to make the response fit.

If no safe exact ceiling can be justified without changing the accepted response architecture, STOP and report the blocker instead of guessing.

### INFRA-EIS-B2 — Mandatory S3 `HeadObject` Checksum Retrieval and Fail-Closed Verification

`report1.109.md` found that the EIS requires independent Lambda checksum comparison but does not explicitly require checksum retrieval mode.

The correction addendum must lock the exact contract:

1. Lambda must call S3 `HeadObject` for the exact server-authorized object key before parsing.
2. The request must explicitly enable checksum retrieval using the current AWS-supported mechanism equivalent to:
   - SDK option `ChecksumMode = ENABLED`, or
   - the corresponding signed HTTP header when using a lower-level request path.
3. The returned object metadata must contain the expected SHA-256 checksum value in the AWS-defined representation.
4. Lambda must compare:
   - expected byte length from the authenticated lease/control request;
   - actual object content length from S3;
   - expected SHA-256 from the lease/control request;
   - SHA-256 checksum returned by S3 with checksum mode enabled.
5. Missing SHA-256 metadata must fail closed.
6. Checksum mismatch must fail closed.
7. Size mismatch must fail closed.
8. No object body may be parsed after any of these failures.
9. Failure must remain sanitized to the merchant/client while preserving a bounded internal reason code.
10. The object cleanup rule must remain explicit for each mismatch/missing-metadata failure path and must preserve the already-approved transient-data minimization principle.
11. The correction must preserve the separate later in-memory read boundary and any additional verification already required by the EIS; it must not weaken the accepted checksum-bound upload contract from `report1.106.md` / `report1.107.md`.
12. The later-build verification matrix must include:
    - correct checksum present → accepted;
    - checksum metadata missing → rejected;
    - checksum mismatch → rejected;
    - byte-length mismatch → rejected;
    - object body parse not entered for all rejected cases.

### INFRA-EIS-N1 — Lambda Package-Size Wording Precision

Apply only this wording correction:

- Do not state or imply that the future esbuild Lambda artifact is already proven to fit AWS package-size limits.
- State the relevant provider package-size constraints accurately.
- Treat actual zipped/unzipped artifact measurement as a later Build/acceptance gate.
- Require evidence from the real built artifact before production acceptance.

Do not change the selected esbuild single-file Node 24 packaging approach merely because the artifact has not yet been built.

---

## 4. Explicitly Frozen Decisions

The correction must preserve without modification:

- AWS Lambda as the narrow external parser runtime;
- standard Lambda default compute;
- `nodejs24.x` target;
- `ap-south-1` Phase 1 region;
- 2,048 MB starting memory;
- 15-second Lambda infrastructure timeout;
- 10-second application parser budget;
- finite reserved concurrency as defense-in-depth only;
- no Lambda Managed Instances;
- transient private S3 parser-ingress;
- AWS IAM Roles Anywhere external-workload credential architecture;
- Parser Upload Lease architecture;
- EC-2 durable/shared per-business pre-parse abuse guard;
- EC-3 parse-before-write ordering;
- Papa Parse for CSV;
- ExcelJS for XLSX;
- `node:zlib` produced-byte containment;
- maximum compressed input 5,242,880 bytes;
- maximum actual-produced XLSX decompressed bytes 25 × 1024 × 1024;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- Owner-only Phase 1 import authority;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- exactly nineteen public Catalog commands — no twentieth command.

No correction may alter Product Truth or merchant workflow.

---

## 5. Required Output Structure

`communication/live/report1.112.md` must contain at minimum:

1. Mission and authority.
2. Reviewed `main` SHA.
3. Exact Stage A findings being corrected.
4. `INFRA-EIS-B1` correction:
   - exact serialized-response ceiling;
   - derivation/rationale;
   - enforcement point;
   - fail-closed behavior;
   - maximum-bound fixture proof contract.
5. `INFRA-EIS-B2` correction:
   - exact `HeadObject` checksum mode requirement;
   - comparison sequence;
   - missing/mismatch behavior;
   - cleanup behavior;
   - verification cases.
6. `INFRA-EIS-N1` package-size wording correction.
7. Explicit statement of every frozen decision preserved.
8. Confirmation that no implementation or resource/database change occurred.
9. Final disposition.

Allowed final dispositions:

- `LAMBDA PARSER EIS INFRASTRUCTURE CORRECTION — READY FOR INFRASTRUCTURE CONFIRMATION`
- `LAMBDA PARSER EIS INFRASTRUCTURE CORRECTION — STOPPED — UNRESOLVED INFRASTRUCTURE BLOCKER`

Do not claim Infrastructure PASS. Only Infrastructure Operations may issue that confirmation.

---

## 6. Prohibited Scope

Do not:

- modify `report1.108.md`;
- modify `report1.109.md`;
- implement application or parser code;
- add or update dependencies;
- create AWS resources;
- create or modify S3 buckets;
- create or modify Lambda functions;
- create or modify IAM roles/policies/trust anchors/profiles/certificates;
- execute AWS commands against project infrastructure;
- create SQL or migrations;
- mutate Supabase;
- change RLS or grants;
- expand service-role authority;
- change Lovable;
- change Product Truth;
- change permissions;
- add a twentieth Catalog command;
- weaken any parser/input/runtime limit;
- enter Build Lock or Build Mode;
- deploy;
- publish;
- touch production.

Provider documentation may be read for specification evidence only.

---

## 7. Repository Discipline

The executing room shall:

- verify current merged `main` before work;
- create only `communication/live/report1.112.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secrets;
- report the exact commit SHA and PR;
- not merge its own PR.

---

## 8. Gate After Correction

If `report1.112.md` returns:

`LAMBDA PARSER EIS INFRASTRUCTURE CORRECTION — READY FOR INFRASTRUCTURE CONFIRMATION`

and is human-reviewed and merged, Mission Control shall return the correction to **Infrastructure Operations for a short confirmation review limited to INFRA-EIS-B1, INFRA-EIS-B2 and INFRA-EIS-N1**.

Stage B — Supabase Backend Architecture remains locked until Infrastructure Operations returns a merged:

`LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — PASS`

No other stage is authorized by this instruction.

---

## 9. Mission Control Decision

`SB-P-1.11-GC-7 — NARROW INFRASTRUCTURE EIS CORRECTION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Claude Code / Engineering Architecture → `communication/live/report1.112.md`**
