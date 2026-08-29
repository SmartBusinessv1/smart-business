# SMART BUSINESS — INFRASTRUCTURE OPERATIONS CONFIRMATION REPORT

## SB-P-1.11-GC-8 — Specialist Confirmation

**Report ID:** report1.113  
**Mission:** SB-P-1.11-GC-8 — Specialist Confirmation  
**Authorized By:** `communication/live/instruction1.104.md`  
**Executing Room:** Infrastructure Operations  
**Mode:** SHORT CONFIRMATION REVIEW ONLY  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Final Verdict

`LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — CHANGES REQUIRED`

`INFRA-EIS-B2` and `INFRA-EIS-N1` are sufficiently corrected at EIS level.

`INFRA-EIS-B1` is materially improved and its core response-ceiling mechanism is infrastructure-sound, but one load-bearing contradiction remains inside the later-build maximum-bound fixture contract: `report1.112.md` correctly states that the maximum legitimate allowlisted serialized response can materially exceed the new 4,194,304-byte ceiling and therefore must fail closed, yet §4.7 simultaneously requires the “largest legitimate” CSV-shaped and XLSX-shaped responses to “confirm successful completion.” Those requirements cannot both be true for the same maximum legitimate shape.

The correction must make the acceptance matrix unambiguous: the true maximum legitimate CSV/XLSX-shaped responses under the locked input/schema limits must be measured and, when they exceed 4,194,304 bytes, must be expected to fail closed with `RESPONSE_TOO_LARGE`; separate at/below-ceiling fixtures must prove successful streaming. No architecture redesign is required.

Stage B must not begin until this remaining B1 specification defect is corrected, human-reviewed, merged, and the Infrastructure gate is satisfied.

---

## 2. Exact Canonical Baseline Reviewed

Latest merged GitHub `main` reviewed:

`481b7b7788584745fb615c7185bc4ccc60dac7b5`

Commit:

`Authorize GC-8 specialist confirmation (#242)`

The review was performed against this exact merged baseline. No later `main` state was treated as authoritative during the review.

---

## 3. Evidence Consulted

Primary confirmation inputs:

- `communication/live/instruction1.104.md`
- `communication/live/report1.112.md`
- `communication/live/report1.109.md`

Supporting EIS context used only where necessary to understand the three reviewed findings:

- `communication/live/report1.108.md`
- `communication/live/instruction1.103.md`
- `communication/live/instruction1.102.md`

Current authoritative AWS documentation was rechecked only for the provider facts load-bearing to B1, B2, and N1:

- Lambda response streaming: `https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html`
- Lambda quotas: `https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html`
- S3 `HeadObject`: `https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html`
- Node.js Lambda ZIP packaging: `https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html`

No unrelated EIS architecture was reopened.

---

# 4. INFRA-EIS-B1 — Exact Serialized-Response Ceiling and Proof Contract

## 4.1 Exact hard ceiling

**PASS.**

`report1.112.md` locks exactly:

`4,194,304 bytes`

as the hard server-side maximum serialized success-response size.

This is an exact byte value, not an approximate MB value.

## 4.2 Position below the initial Lambda streaming window

**PASS.**

Current AWS Lambda documentation states that response-streaming bandwidth is uncapped for the first 6 MB and limited to 2 MB/s only for the remainder after the first 6 MB.

Using the same binary-MB convention applied by the Lambda quotas documentation:

- initial uncapped window: `6,291,456 bytes`;
- selected ceiling: `4,194,304 bytes`;
- structural margin below throttle boundary: `2,097,152 bytes`.

Therefore every accepted success response is structurally bounded below the point where the post-6-MiB throttled path begins.

The correction does not depend on transmitting any accepted success bytes through the throttled portion.

## 4.3 Enforcement point before streaming

**PASS.**

The corrected contract requires Lambda to:

1. construct the complete allowlisted success envelope in memory;
2. serialize it;
3. measure exact UTF-8 byte length;
4. compare that length to 4,194,304 bytes;
5. only after a passing comparison begin success-response streaming.

An oversized success envelope is rejected before the first success-response byte is written.

This is materially sufficient at specification level to prevent partial-success truncation.

## 4.4 Oversized legitimate output

**PASS AS A FAIL-CLOSED ARCHITECTURE RULE.**

`report1.112.md` explicitly distinguishes the accepted parser input limits from the new output-side response limit and acknowledges that a legitimate accepted file can produce an allowlisted serialized response larger than 4,194,304 bytes.

The selected behavior is deterministic rejection using the bounded internal code:

`RESPONSE_TOO_LARGE`

The response is not silently truncated, fields are not shortened, parser input limits are not weakened, and no new storage/queue/backend mechanism is introduced.

This is coherent with the correction authority in `instruction1.103.md`.

## 4.5 15-second provider timeout and 10-second parser budget

**PASS AT SPECIFICATION LEVEL, SUBJECT TO LATER ACCEPTANCE EVIDENCE.**

The response ceiling entirely avoids the documented post-6-MiB throttle, which resolves the specific infrastructure blocker identified in `report1.109.md`.

The EIS also keeps:

- application parser budget: `10,000 ms`;
- Lambda provider timeout: `15,000 ms`.

The specification correctly does not claim production benchmark evidence already exists. Actual cold/warm duration, parser-budget consumption, serialized byte measurement, and stream completion remain later Build/acceptance evidence gates.

Infrastructure Operations does not require those future measurements to already exist in this specification-only confirmation.

## 4.6 Later-build maximum-bound fixture contract

**CHANGES REQUIRED — REMAINING B1 BLOCKER.**

The correction requires later Build verification for:

- largest legitimate CSV-shaped response;
- largest legitimate XLSX-shaped response;
- at/immediately-below-ceiling response;
- above-ceiling response;
- cold/warm execution;
- total invocation completion under 15 seconds;
- parser budget bounded at 10 seconds;
- serialized/streamed byte count and stream completion.

Those categories are correct.

However, the expected result attached to the first two fixtures is internally inconsistent with the correction's own response-capacity analysis.

`report1.112.md` §4.3 states that the **maximum legitimate allowlisted serialized response** can be approximately 42–50 MiB, materially above the hard 4 MiB ceiling. The same report then states in §4.7 that the “largest legitimate CSV-shaped response” and “largest legitimate XLSX-shaped response” should “confirm successful completion.”

Under the new hard ceiling, a true maximum legitimate allowlisted response above 4,194,304 bytes must instead be expected to:

- complete the invocation through the bounded failure path;
- return `RESPONSE_TOO_LARGE`;
- stream no partial success envelope;
- create zero import-support/Product Truth write;
- remain within the 15-second Lambda timeout;
- keep parser execution within the 10-second application budget.

Successful success-envelope streaming must be proven by the separate at/below-ceiling fixtures.

### Required narrow correction

Amend only the B1 later-build fixture expectation so that:

1. the **true maximum legitimate CSV-shaped output** is measured and expected to follow whichever deterministic result its measured size requires — in the currently specified model, if above 4,194,304 bytes, fail closed with `RESPONSE_TOO_LARGE`;
2. the **true maximum legitimate XLSX-shaped output** is treated identically;
3. an explicit largest/representative legitimate output at or below 4,194,304 bytes proves successful streaming;
4. the just-above-ceiling fixture proves rejection;
5. all accepted and rejected cases record total invocation duration, parser-budget duration, measured serialized bytes, and whether any success bytes were emitted.

This is a specification correction only. It does not require changing the 4 MiB ceiling, parser input limits, response architecture, Product Truth, or merchant authority.

### INFRA-EIS-B1 result

`CHANGES REQUIRED`

---

# 5. INFRA-EIS-B2 — Mandatory `HeadObject` Checksum Retrieval

## 5.1 Explicit checksum retrieval

**PASS.**

The corrected EIS now explicitly requires every Lambda `HeadObject` integrity request to use:

`ChecksumMode = ENABLED`

or the exact AWS-supported HTTP equivalent:

`x-amz-checksum-mode: ENABLED`

Current AWS `HeadObject` documentation states that checksum mode must be enabled to retrieve checksum data.

## 5.2 Required comparisons

**PASS.**

The contract explicitly compares all four required values:

- expected object byte length from the authenticated control request;
- actual S3 `ContentLength`;
- expected SHA-256 from the authenticated control request;
- S3-returned SHA-256 retrieved with checksum mode enabled.

The SHA-256 representation remains the already-selected base64 representation.

## 5.3 Fail-closed cases

**PASS.**

The correction explicitly fails closed for:

- object not found;
- checksum metadata missing;
- byte-length mismatch;
- checksum mismatch.

The bounded internal codes are sufficiently precise for infrastructure diagnosis:

- `HEAD_OBJECT_NOT_FOUND`;
- `HEAD_CHECKSUM_METADATA_MISSING`;
- `HEAD_SIZE_MISMATCH`;
- `HEAD_CHECKSUM_MISMATCH`.

These codes remain internal and map to the existing sanitized merchant-facing failure categories.

## 5.4 Parsing unreachable after failed integrity check

**PASS.**

The corrected sequence returns before `GetObject` on every failed `HeadObject`/integrity branch. The parser is reached only after checksum metadata exists and both length and SHA-256 comparisons pass.

Therefore `verifyCsvStructure`, `verifyXlsxStructure`, Papa Parse, and ExcelJS are structurally unreachable after a failed HEAD integrity decision.

## 5.5 Cleanup and data minimization

**PASS.**

For objects that exist but fail metadata/size/checksum verification, the contract requires an immediate best-effort `DeleteObject` where safe, with the existing one-day S3 Lifecycle rule remaining only the exceptional cleanup backstop.

An object-not-found case requires no deletion.

This remains coherent with the transient private S3 contract and does not create durable merchant-file retention.

## 5.6 Later-build integrity verification

**PASS.**

The corrected verification matrix explicitly requires tests for:

- correct checksum present → accepted;
- checksum metadata missing → rejected;
- checksum mismatch → rejected;
- byte-length mismatch → rejected;
- object not found → rejected;
- direct assertion that parsing was never entered for every rejected case.

### INFRA-EIS-B2 result

`PASS`

---

# 6. INFRA-EIS-N1 — Lambda Package-Size Wording Precision

## 6.1 No false measurement claim

**PASS.**

The correction explicitly removes the implication that the future esbuild artifact has already been measured.

It states that expected fit is only an expectation and that no final Lambda artifact has yet been built by the specification mission.

## 6.2 Provider constraints

**PASS.**

The corrected specification accurately records the relevant ZIP deployment constraints:

- 50 MB zipped for direct API/SDK upload;
- 50 MB zipped for direct console upload;
- 250 MB maximum unzipped deployment-package contents including layers/custom runtime material;
- larger ZIP archives can use the documented S3 package-upload path while remaining subject to the unzipped package limit.

These constraints agree with current AWS Lambda quota/package documentation.

## 6.3 Later Build evidence gate

**PASS.**

Actual compressed and uncompressed artifact size measurement is explicitly deferred to the real Build/acceptance evidence gate before production deployment.

## 6.4 Packaging architecture unchanged

**PASS.**

The selected esbuild single-file Node 24 packaging approach remains unchanged. No `worker_threads`, CWD-relative TypeScript worker path, native signing/helper binary, or alternate package architecture is introduced by this correction.

### INFRA-EIS-N1 result

`PASS`

---

## 7. Confirmation Matrix

| Item | Result | Confirmation |
|---|---|---|
| INFRA-EIS-B1 | **CHANGES REQUIRED** | 4,194,304-byte ceiling and pre-stream fail-closed enforcement are sound; later-build “largest legitimate” fixture expectations remain internally contradictory and must be corrected. |
| INFRA-EIS-B2 | **PASS** | `ChecksumMode = ENABLED`, size/SHA-256 comparisons, fail-closed behavior, cleanup, sanitization, and no-parse verification are sufficiently specified. |
| INFRA-EIS-N1 | **PASS** | Package limits are accurately represented; future artifact is not falsely claimed as measured; real ZIP/unzipped size is a later acceptance gate; esbuild/Node 24 approach unchanged. |

---

## 8. Locked Boundaries Preserved

This confirmation does not alter or reopen:

- AWS Lambda as the narrow parser runtime;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second application parser budget;
- finite reserved concurrency as defense-in-depth;
- exclusion of Lambda Managed Instances;
- transient private S3 ingress;
- IAM Roles Anywhere;
- Parser Upload Lease;
- EC-2;
- EC-3;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- 5,242,880-byte compressed input limit;
- 25 MiB produced-byte XLSX limit;
- 2,000 rows;
- 40 columns;
- 2,000 characters per cell;
- Owner-only Phase 1 import authority;
- Catalog / Inventory truth separation;
- D-047;
- D-068;
- BKR-1 through BKR-5;
- exactly nineteen public Catalog commands;
- no twentieth Catalog command.

The Founder Workflow baseline remains closed and was not reopened.

---

## 9. No-Implementation / No-Mutation Confirmation

During this confirmation review:

- application code implemented or modified: **NO**
- parser code modified: **NO**
- dependencies added or changed: **NO**
- AWS resources created or modified: **NO**
- S3 buckets/objects created or modified: **NO**
- Lambda functions/versions/aliases/URLs created or modified: **NO**
- IAM roles/policies/trust anchors/profiles/certificates created or modified: **NO**
- SQL or migrations created/executed: **NO**
- database state modified: **NO**
- Supabase mutated: **NO**
- RLS or grants changed: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- permissions changed: **NO**
- Catalog command count changed: **NO**
- parser limits weakened: **NO**
- Build Lock entered: **NO**
- Build Mode entered: **NO**
- deployment or publication performed: **NO**
- production touched: **NO**
- Stage B begun: **NO**

The only repository content added by this mission is:

`communication/live/report1.113.md`

---

## 10. Remaining Blocker

One blocker remains, confined strictly to `INFRA-EIS-B1`:

> The later-build fixture contract must stop requiring the true maximum legitimate CSV/XLSX-shaped responses to succeed when the same specification establishes that those responses may exceed the 4,194,304-byte hard ceiling. Maximum legitimate above-ceiling fixtures must prove deterministic `RESPONSE_TOO_LARGE` rejection; successful streaming must be proven by at/below-ceiling fixtures.

No B2 or N1 blocker remains.

---

## 11. Final Verdict

`LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — CHANGES REQUIRED`

Do not begin Stage B.

Mission Control should issue only the narrow B1 specification correction needed to reconcile the maximum-legitimate fixture expectation with the already-selected 4,194,304-byte fail-closed response ceiling. After that correction is human-reviewed and merged, Infrastructure Operations may perform another short confirmation if Mission Control authorizes it.
