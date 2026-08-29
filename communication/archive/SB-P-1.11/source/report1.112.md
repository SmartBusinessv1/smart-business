# SMART BUSINESS — LAMBDA PARSER EIS INFRASTRUCTURE CORRECTION ADDENDUM

## SB-P-1.11-GC-7 — Lambda Parser EIS Infrastructure Correction

**Report ID:** report1.112
**Mission:** SB-P-1.11-GC-7 — Lambda Parser EIS Infrastructure Correction
**Authorized By:** `communication/live/instruction1.103.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Production Migration Authority:** NONE
**Deployment Authority:** NONE

---

## 1. Mission and Authority

This report is a self-contained **EIS Infrastructure Correction Addendum**. It corrects exactly the two blocking findings and one non-blocking precision issue that `communication/live/report1.109.md` (Stage A Infrastructure Operations review, `LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — CHANGES REQUIRED`) identified in the standalone Lambda + transient S3 Engineering Implementation Specification at `communication/live/report1.108.md`.

It does not overwrite, rewrite, or reopen `report1.108.md` or `report1.109.md`, both of which remain unmodified, immutable evidence. This addendum becomes binding **together with** `report1.108.md` if later confirmed by Infrastructure Operations and accepted by Mission Control. Every section of `report1.108.md` not named below remains exactly as merged.

This correction does not reopen the accepted parser architecture, the Founder Workflow baseline, Product Truth, permissions, the Catalog command surface, the AWS provider selection, or Supabase architecture.

---

## 2. Reviewed `main` SHA

Latest merged GitHub `main` at mission start:

`1dcc4008b7048abd9752c29aec9e81642592d816`

Confirmed via `git rev-parse HEAD` immediately after fast-forward synchronization, matching Mission Control's cited authoritative HEAD exactly.

Files read in full for this correction: `communication/live/instruction1.103.md`, `communication/live/instruction1.101.md`, `communication/live/instruction1.102.md`, `communication/live/report1.108.md`, `communication/live/report1.109.md`, and (already fully known from this mission chain) `communication/live/report1.103.md`, `communication/live/report1.104.md`, `communication/live/report1.106.md`, `communication/live/report1.107.md`. For every load-bearing AWS claim in this addendum, current authoritative AWS documentation was fetched and read directly during this mission (cited at point of use in §4 and §5) — no provider limit, header, SDK behavior, checksum-retrieval mechanism, package-size figure, or response-streaming constraint in this report relies on memory or on `report1.109.md`'s restatement alone.

---

## 3. Exact Stage A Findings Being Corrected

From `report1.109.md` §22:

- **INFRA-EIS-1 (BLOCKING)** — the response contract does not account for AWS's documented response-streaming bandwidth limit (first 6 MB uncapped, remainder throttled to 2 MB/s) in combination with the locked 15-second total Lambda timeout; no exact serialized-response ceiling is locked, and Build Mode was left to select one without a proven-safe bound.
- **INFRA-EIS-2 (BLOCKING)** — the Lambda `HeadObject` checksum-comparison step does not explicitly require checksum-retrieval mode, without which AWS does not return checksum values in the `HeadObject` response at all.
- **INFRA-EIS-3 (NON-BLOCKING PRECISION)** — the EIS states the future esbuild artifact is "well within" the 50 MB Lambda package-size ceiling before any artifact has been built or measured.

This addendum corrects exactly these three items and nothing else in `report1.108.md`.

---

## 4. INFRA-EIS-B1 Correction — Exact Serialized-Response Ceiling

### 4.1 Selected exact ceiling

**4,194,304 bytes (4 × 1024 × 1024; "4 MiB").**

This is a hard server-side maximum, expressed in exact bytes as required, not an approximate MB figure. It is enforced at the point defined in §4.5 before any response byte is streamed.

### 4.2 Authoritative provider facts this ceiling is derived against

Fetched directly from current AWS documentation during this mission (not from memory, not solely from `report1.109.md`'s restatement):

- **AWS Lambda quotas** (`docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html`, fetched this mission): "The Lambda documentation, log messages, and console use the abbreviation MB (rather than MiB) to refer to 1,024 KB." This means every "MB" figure in AWS Lambda's own quota tables is actually a **MiB** value (1,048,576 bytes), including the response-streaming figures below — a precision point this addendum applies consistently, since a decimal-MB misreading would understate the true uncapped-window size and could lead to an incorrectly tight (or, in the reverse error, incorrectly loose) derivation.
- **Invocation payload:** "6 MB each for request and response (synchronous); 200 MB for each streamed response (synchronous)." In exact bytes: synchronous buffered response ceiling = 6,291,456 bytes (already rejected by `report1.108.md` §14.1 in favor of streaming); streamed response quota = 209,715,200 bytes.
- **Bandwidth for streamed responses:** "Uncapped for the first 6 MB of your function's response. For responses larger than 6 MB, 2MBps for the remainder of the response." In exact bytes: the uncapped window is the first **6,291,456 bytes** of the response; only bytes beyond that point are throttled to 2 MB/s (2,097,152 bytes/s, applying the same MB=MiB convention).
- **Response streaming page** (`docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html`, fetched this mission): "The first 6 MB of your function's response payload has uncapped bandwidth... You can normally expect a rate higher than 2 MBps for the first 6 MB of your function's response. If your function is streaming a response to a destination outside of AWS, the streaming rate also depends on the speed of the external internet connection." This confirms the uncapped window is not a guaranteed instantaneous transfer and that real-world throughput to a non-AWS destination (the Cloudflare Workers-hosted Smart Business server) is not an AWS-guaranteed number — consistent with why this addendum does not assume zero transfer time, only a small and heavily margined one (§4.4).
- **Network bandwidth per execution environment:** "625 Mbps. For functions not attached to a VPC, you can request an increase... network bandwidth scales proportionally with memory, starting at 2,048 MB of memory." This is Lambda's own execution-environment network egress ceiling, distinct from the response-streaming pacing rule above; at the locked 2,048 MB memory baseline the function sits at or above the point where AWS begins scaling bandwidth past the 625 Mbps floor. Even at the unscaled 625 Mbps floor, 4,194,304 bytes could traverse the network interface in ≈0.054 seconds (4,194,304 × 8 ÷ 625,000,000), which is a useful sanity bound but is not itself claimed as achievable end-to-end latency (§4.4 does not rely on this figure for its safety margin).

### 4.3 Derivation against the actual allowlisted `ParseOutcome` schema

From `report1.108.md` §14.2 and `src/lib/catalog-import/types.ts` (read directly this mission chain): the allowlisted response is `{ rows: RawImportRow[], unrecognizedColumnNames: string[], additionalWorksheetsIgnored?: boolean }`, where each `RawImportRow` carries `rowNumber` (integer), `fields: Partial<Record<RecognizedFieldKey, string>>` (at most **9** string slots — `name`, `selling_unit`, `category`, `sku`, `barcode`, `description`, `selling_price`, `tax_treatment`, `tax_rate_percent` — since `fields` is keyed by field name, at most one value per recognized key survives per row regardless of how many of the file's 40 columns exist), `hasReferenceCostColumn` (boolean), and `referenceCostRaw: string | undefined` (a 10th string slot). At the locked maximum shape (2,000 rows), this is at most **20,000 bounded string value slots**, each individually capped at the locked **2,000 characters per cell** by `checkCellLength` (`parse.ts`) before it is ever placed in `fields`/`referenceCostRaw` — the same ceiling this addendum's response contract is bound by, not a new one.

Four distinct sizes must be kept separate, per `instruction1.103.md` §3/INFRA-EIS-B1 item 7:

| Size | Value | What it represents |
|---|---|---|
| Theoretical hostile serialized size | ≈ 240,000,000 bytes (~229 MiB) | Every one of the 20,000 slots filled to 2,000 characters of content requiring maximum JSON escaping (e.g. a control character needing a `\u00XX` 6-byte escape per source character: 2,000 rows × 10 slots × 2,000 chars × 6 bytes). Nothing in the current CSV/XLSX structural checks (`content-type.ts`) rejects a technically-valid file with control-character-heavy cell text, so this is a reachable adversarial-but-within-the-rules input, not a purely academic number — and it exceeds even AWS's 209,715,200-byte hard streaming quota, which by itself proves an internal ceiling is mandatory independent of the 15-second timeout question. |
| Maximum accepted parsed input shape | 2,000 rows × 40 columns × 2,000 chars/cell | The locked input-side shape (unchanged by this addendum) — but only ≤10 of those 40 columns are ever recognized and carried into the response; the other ≤30 columns' *values* are discarded, only their *names* survive (`unrecognizedColumnNames`). |
| Maximum legitimate allowlisted serialized size | ≈ 44,000,000–52,000,000 bytes (~42–50 MiB) | Every one of the 20,000 slots filled to the full 2,000-character cap with ordinary (non-adversarial) merchant text — realistic UTF-8/JSON expansion of roughly 1.1–1.3 bytes per character for a mix of ASCII and BMP scripts including Malayalam (3 bytes/char in UTF-8, no JSON escaping required for printable non-ASCII), plus per-row JSON structural/key overhead. This is a genuinely reachable state for good-faith usage (a merchant with unusually long product descriptions across a full 2,000-row file), not only a hostile scenario. |
| **Selected safe Phase 1 response ceiling** | **4,194,304 bytes exactly** | The value this addendum locks. |

A more typical, still-generous scenario (average 100 filled characters per slot rather than the full 2,000-character cap, across all 20,000 slots) serializes to roughly 2.6–2.9 MB, comfortably under the selected ceiling — the ceiling is not so tight that ordinary maximum-row imports with realistically-sized product text would routinely fail closed, but it is tight enough to guarantee the safety property in §4.4 for every case, including the two larger rows in the table above.

### 4.4 Why 4,194,304 bytes is safe under the locked 15-second timeout

Per `instruction1.101.md` §5.5's own preference, carried into this correction by `instruction1.103.md` §3 item 5 ("prefer staying fully inside the unthrottled initial response window if that is the smallest safe mechanism"): **4,194,304 bytes is entirely inside the 6,291,456-byte uncapped-bandwidth window**, with **2,097,152 bytes (exactly 2 MiB) of margin** below the point where AWS's 2 MB/s post-6-MiB throttle would ever begin to apply. The response-streaming bandwidth question in `report1.109.md`'s blocking finding — "can enough bytes traverse the throttled portion of the connection within the remaining timeout" — is therefore structurally moot for this ceiling: there is no throttled portion, because the response never reaches 6,291,456 bytes in the first place.

Time-budget check (worst-case, additive, not the expected typical case) inside the locked 15,000 ms Lambda timeout:

| Phase | Budget (ms) | Basis |
|---|---|---|
| `HeadObject` (with `ChecksumMode: ENABLED`, §5) | 300 | Single same-region S3 metadata round trip |
| `GetObject` (read ≤5,242,880 bytes) | 700 | Same-region S3 object read, well below Lambda's 625 Mbps execution-environment network ceiling |
| `DeleteObject` | 300 | Single same-region S3 delete round trip |
| Decompression/structural verification + Papa Parse/ExcelJS parse + row/column/cell enforcement | 10,000 | The full locked application parser budget (`report1.108.md` §12), used here as the worst-case allotment even though measured local evidence (`report1.92.md`) shows ≈1,172 ms for a maximum-shape XLSX — this addendum does not assume the faster measured figure, only the enforced ceiling |
| Response serialization + byte-length measurement (§4.5) | 200 | `JSON.stringify` plus `Buffer.byteLength` over a string bounded by the worst case in §4.3 before any rejection decision is made |
| **Reserved subtotal** | **11,500** | |
| **Remaining budget for response transfer** | **3,500** | 15,000 − 11,500 |

4,194,304 bytes transferring inside a 3,500 ms remaining budget, entirely within the uncapped bandwidth window, is not a tight fit under any of the cited provider facts in §4.2 — it is not claimed to be measured yet (§4.6), but it is not a number this addendum invents optimism around either: even Lambda's own unscaled 625 Mbps execution-environment network ceiling alone (§4.2) could clear 4,194,304 bytes in ≈54 ms, two orders of magnitude inside the 3,500 ms remaining budget.

### 4.5 Enforcement point

The ceiling is enforced **before response streaming begins**, not mid-stream and not only as an aspirational schema bound:

1. Lambda constructs the complete allowlisted `ParseOutcome` envelope (`report1.108.md` §14.2) as an in-memory object, exactly as today.
2. Lambda serializes it once (`JSON.stringify`) and measures the exact UTF-8 byte length of the result (`Buffer.byteLength(json, "utf8")`) — this is a bounded, fast operation even at the theoretical-hostile size in §4.3 (well within the Lambda memory baseline of 2,048 MB) and is included in the 200 ms budget in §4.4.
3. If the measured length is **≤ 4,194,304 bytes**, Lambda begins `awslambda.streamifyResponse()` streaming of exactly that serialized payload (`report1.108.md` §14.1) — unchanged from the merged EIS.
4. If the measured length **exceeds 4,194,304 bytes**, Lambda discards the oversized serialized string, never begins streaming it, and instead streams the small, fixed, sanitized failure envelope defined in §4.6 in its place.

No partial or truncated success response is ever streamed — the decision is made once, on the complete serialized payload, before the first response byte is written.

### 4.6 Fail-closed behavior — internal and caller-visible

Per `instruction1.103.md` §3 item 8, exactly one mechanism is selected — deterministic rejection of the oversized result — not a new storage/queue/backend architecture and not silent field truncation. Silent truncation was considered and rejected: `RawImportRow.fields` values flow unchanged into `ParsedSnapshot`/`catalog_import_rows.parsed_snapshot` (`src/server-functions/catalog-import.ts`) and ultimately into the exact text passed to `create_catalog_product`, so truncating a value only in the "response" would silently alter real product content at commit time — inconsistent with the existing reject-don't-truncate philosophy already used for every other `ImportLimitError` in this codebase (`TOO_MANY_ROWS`, `TOO_MANY_COLUMNS`, `CELL_TOO_LONG` all reject, none truncate) and inconsistent with `instruction1.103.md`'s explicit "must not weaken any existing parser input limit to make the response fit."

- **New closed internal code:** `RESPONSE_TOO_LARGE`, added to the same closed taxonomy already defined in `report1.108.md` §14.2 (`ImportLimitErrorCode | "INTEGRITY_MISMATCH" | "PARSER_RUNTIME_ERROR"` becomes `... | "RESPONSE_TOO_LARGE"`).
- **Lambda-side behavior:** returns `{ ok: false, code: "RESPONSE_TOO_LARGE", message: <fixed sanitized string> }` through the same streaming path, instead of the oversized `outcome`. Because the S3 object was already deleted before parsing began (`report1.108.md` §12.1), no further cleanup action is needed at this point in the sequence — this failure occurs entirely after the transient object no longer exists.
- **Smart Business-side behavior:** the lease (`report1.108.md` §5) is finalized to `FAILED` with `failure_reason = 'RESPONSE_TOO_LARGE'` (extending the closed set already defined in `report1.108.md` §5.10), and the EC-2 guard is released, exactly as any other post-dispatch failure.
- **Merchant/client-visible behavior:** one fixed, sanitized message from the same closed category system already locked in `report1.105.md` §10 — this addendum does not invent a new merchant-facing category, it maps `RESPONSE_TOO_LARGE` to the existing closed **"parse/data-shape limit exceeded"** category, worded (illustratively, exact copy is a Build Mode content decision, not an architecture decision) along the lines of "This file has more content than can be previewed at once. Try shortening long text fields or splitting the import into smaller files." No AWS detail, byte count, or internal code reaches the merchant.
- **Zero import-support/Product Truth writes occur:** identical to every other pre-`CONSUMED` failure path in `report1.108.md` §15 — the lease never reaches `CONSUMED`, so no `catalog_import_batches`/`catalog_import_rows` (or equivalent) write is triggered.

### 4.7 Maximum-bound fixture proof contract (later Build Mode)

Per `instruction1.103.md` §3 item 10, at minimum:

1. Largest legitimate CSV-shaped response (2,000 rows, all 9 recognized `fields` + reference cost populated, realistic non-adversarial content) — measure exact serialized bytes and confirm successful completion.
2. Largest legitimate XLSX-shaped response (same shape via ExcelJS) — measure exact serialized bytes and confirm successful completion.
3. A response constructed to serialize to exactly at or immediately below 4,194,304 bytes — confirm it streams successfully.
4. A response constructed to serialize to just above 4,194,304 bytes — confirm `RESPONSE_TOO_LARGE` fail-closed behavior, zero partial bytes streamed as a success envelope, zero import-support write.
5. Both cold-start and warm-execution-environment invocations of every case above.
6. Total invocation duration measured under the locked 15,000 ms timeout for every case above.
7. Application parser-budget consumption measured and confirmed bounded at 10,000 ms.
8. Streamed byte count and stream-completion event captured and compared against the measured serialized length for the accepted cases.

### 4.8 Benchmark evidence status

Per `instruction1.103.md` §3 item 11: no benchmark evidence for §4.4's time-budget check or §4.7's fixture matrix is claimed as already existing. This is a specification-only mission; §4.4's arithmetic is an infrastructure-inference safety proof using AWS's documented quotas and Lambda's documented network ceiling, not a substitute for the measured evidence §4.7 requires before production acceptance.

### 4.9 No weakening of existing parser input limits

The 5,242,880-byte compressed-input ceiling, the 25×1024×1024-byte actual-produced XLSX decompressed-byte ceiling, and the 2,000-row/40-column/2,000-character-per-cell limits are unchanged by this correction. The response ceiling is a new, additional, output-side control; it does not alter what input the parser accepts.

---

## 5. INFRA-EIS-B2 Correction — Mandatory `HeadObject` Checksum Retrieval and Fail-Closed Verification

### 5.1 Exact `HeadObject` checksum-mode requirement

Confirmed directly against the current AWS `HeadObject` API reference (`docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html`, fetched this mission): the request must include the header

`x-amz-checksum-mode: ENABLED`

(SDK-level equivalent: the `ChecksumMode` request parameter set to `"ENABLED"` — the API reference states this exact parameter has "Valid Values: `ENABLED`" and that "[t]o retrieve the checksum, this parameter must be enabled.") Without it, S3 does not return `x-amz-checksum-sha256` in the `HeadObject` response at all — the field is documented as present only "if the checksum was uploaded with the object" **and** checksum mode is requested; omitting the header, as the merged `report1.108.md` §11.4 does not explicitly require, would silently make the independent Lambda verification step non-functional rather than failing loudly.

**Corrected Lambda request contract:** every `HeadObject` call Lambda makes against the server-authorized object key (`report1.108.md` §4 step 12, §11.4) must set `x-amz-checksum-mode: ENABLED` (or the equivalent SDK parameter). This amends `report1.108.md` §11.4 by this one explicit addition; every other element of that section (receiving `expectedByteLength`/`expectedSha256B64` only from the authenticated Smart Business control request, never from the browser) is unchanged.

### 5.2 Comparison sequence

1. Lambda calls `HeadObject` for the exact server-authorized object key, with `x-amz-checksum-mode: ENABLED`.
2. If the call itself fails (for example `404 Not Found` / `NoSuchKey`), fail closed immediately with internal code `HEAD_OBJECT_NOT_FOUND` — no comparison is attempted, no body is read.
3. If the call succeeds, check whether the response includes `x-amz-checksum-sha256`. If it is **absent**, fail closed with internal code `HEAD_CHECKSUM_METADATA_MISSING` — do not proceed to any comparison, and do not treat a missing checksum as an implicit pass.
4. If present, compare the response's `Content-Length` against the `expectedByteLength` supplied only through the authenticated Smart Business → Lambda control request (`report1.108.md` §4 step 11). A mismatch fails closed with internal code `HEAD_SIZE_MISMATCH`.
5. Compare the response's `x-amz-checksum-sha256` (base64-encoded, per AWS's documented encoding — the same base64 representation `report1.108.md` §11.1 already selected end-to-end, so no re-encoding step is introduced) against `expectedSha256B64` from the same authenticated control request. A mismatch fails closed with internal code `HEAD_CHECKSUM_MISMATCH`.
6. Only if steps 3–5 all pass does Lambda proceed to `GetObject` (read ≤5,242,880 bytes), immediate `DeleteObject`, and parsing — exactly the ordering already locked in `report1.108.md` §12.1, unchanged by this correction.

### 5.3 Missing/mismatch behavior — no object body ever parsed

Structural, not merely procedural: in every failure branch in §5.2 steps 2–5, the Lambda handler returns before any `GetObject` call is made. There is no code path from a failed `HeadObject`/checksum comparison directly into `verifyCsvStructure`/`verifyXlsxStructure`/`Papa.parse`/`ExcelJS.Workbook.xlsx.load()` — those functions are only ever reached after step 6 succeeds.

### 5.4 Sanitized caller behavior

All three new internal codes (`HEAD_OBJECT_NOT_FOUND`, `HEAD_CHECKSUM_METADATA_MISSING`, `HEAD_SIZE_MISMATCH`, `HEAD_CHECKSUM_MISMATCH` — four codes total) map to the same existing sanitized merchant-facing category already locked in `report1.105.md` §10: **"upload integrity failure"** (for the checksum/size cases) or the existing generic retryable/read-failure category (for `HEAD_OBJECT_NOT_FOUND`, matching the "Lambda cannot read object" case already in `report1.108.md` §16). No new merchant-facing category is introduced. No AWS ARN, bucket name, region, or raw error body reaches the merchant, consistent with the unchanged EC-3 sanitization contract (`report1.108.md` §15).

### 5.5 Object cleanup behavior for each mismatch/missing-metadata path

| Case | Object cleanup |
|---|---|
| `HEAD_OBJECT_NOT_FOUND` | Nothing to delete — the object does not exist at that key. |
| `HEAD_CHECKSUM_METADATA_MISSING` | Lambda attempts `DeleteObject` on the object it just HEAD-verified exists, where doing so is safe (matching `report1.108.md` §11.5's existing "deletes the object where safely possible" rule for mismatch/error handling). |
| `HEAD_SIZE_MISMATCH` | Same — attempt `DeleteObject` where safe. |
| `HEAD_CHECKSUM_MISMATCH` | Same — attempt `DeleteObject` where safe. |

This preserves the already-approved transient-data-minimization principle: no case in this table leaves a rejected object durably retained beyond the existing one-day S3 Lifecycle backstop (`report1.108.md` §10.2), which remains unchanged and continues to serve only as the exceptional-abandonment cleanup path, never as the primary or only cleanup mechanism.

### 5.6 Preserved boundaries — no weakening

This correction is additive precision to `report1.108.md` §11.4–§11.5 only. It does not alter: the checksum-bound upload contract from `report1.106.md`/`report1.107.md` (client-computed SHA-256, S3 POST-policy exact-match checksum condition, S3 server-side upload-time verification — all unchanged); the base64 canonical SHA-256 representation (`report1.108.md` §11.1, unchanged, and directly reused for the `HeadObject` comparison in §5.2 step 5 above); the one-use atomic lease-claim semantics (`report1.108.md` §5.4, unchanged); or the in-memory read boundary and immediate-deletion ordering (`report1.108.md` §12.1, unchanged — this correction only adds the explicit checksum-mode header to the `HeadObject` call that already existed in that ordering).

### 5.7 Later-build verification matrix additions

Per `instruction1.103.md` §3 item 12, added to `report1.108.md` §18's existing acceptance matrix:

| Case | Expected result |
|---|---|
| Correct checksum present (`ChecksumMode: ENABLED` returns matching `x-amz-checksum-sha256`) | Accepted; proceeds to `GetObject`/parse |
| Checksum metadata missing (object uploaded without a checksum, or checksum mode not honored) | Rejected — `HEAD_CHECKSUM_METADATA_MISSING`; parse never entered |
| Checksum mismatch (returned `x-amz-checksum-sha256` differs from expected) | Rejected — `HEAD_CHECKSUM_MISMATCH`; parse never entered |
| Byte-length mismatch (`Content-Length` differs from expected) | Rejected — `HEAD_SIZE_MISMATCH`; parse never entered |
| Object not found at `HeadObject` time | Rejected — `HEAD_OBJECT_NOT_FOUND`; parse never entered |
| For every rejected case above | Directly assert (not merely infer) that `verifyCsvStructure`/`verifyXlsxStructure`/`Papa.parse`/`ExcelJS.Workbook.xlsx.load()` was never invoked |

---

## 6. INFRA-EIS-N1 Correction — Lambda Package-Size Wording Precision

### 6.1 Exact current AWS package-size constraints

Confirmed directly against the current AWS Lambda quotas page (`docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html`, fetched this mission; the same "MB means MiB" convention noted in §4.2 applies to every figure below):

- **Zipped deployment package (uploaded via Lambda API/SDK):** 50 MB = **52,428,800 bytes**.
- **Zipped deployment package (uploaded via the Lambda console):** 50 MB = **52,428,800 bytes** (same numeric ceiling, separate upload path).
- **Unzipped deployment package, including layers and custom runtimes:** 250 MB = **262,144,000 bytes**.
- **Documented escape valve:** "Upload larger files with Amazon S3" — a package exceeding the 50 MiB API/console ceiling can still be deployed by uploading the ZIP to S3 first and referencing it, without changing the 250 MiB unzipped ceiling.
- Container-image packaging (10 GB uncompressed) remains available but is not selected or required — `report1.104.md` IO-2 already found no evidence Papa Parse + ExcelJS require it, and this correction does not reopen that finding.

### 6.2 Corrected wording

`report1.108.md` §13.1 currently states the esbuild-bundled artifact is "well within the 50 MB direct-upload ceiling." This addendum replaces the implication that this is already proven with the following corrected statement, binding together with `report1.108.md`:

> The esbuild single-file Node 24 bundle (§13.1, unchanged) is expected, based on the size of Papa Parse and ExcelJS as published npm packages, to fit comfortably within the 52,428,800-byte (50 MiB) zipped and 262,144,000-byte (250 MiB) unzipped Lambda deployment-package ceilings, and no repository evidence suggests otherwise. This is an expectation, not a measurement. **No final Lambda artifact has been built at specification time, and none is built by this mission.** Actual compressed and uncompressed artifact size must be measured from the real built output and confirmed to comply with the ceilings above as a **Build/acceptance gate**, before production deployment — if the artifact exceeds the 50 MiB API/console ceiling, the documented S3-upload deployment path remains available without requiring a packaging redesign.

### 6.3 No architecture change

The selected esbuild single-file Node 24 packaging approach (`report1.108.md` §13.1) is unchanged by this correction. This is a wording-precision-only fix, as `instruction1.103.md` §3/INFRA-EIS-N1 requires; it does not become a blocking item and does not, by itself, affect the disposition in §9.

---

## 7. Frozen Decisions Preserved

Every decision listed in `instruction1.103.md` §4 is preserved without modification by this addendum:

AWS Lambda as the narrow external parser runtime; standard Lambda default compute (no Managed Instances); `nodejs24.x` target; `ap-south-1` Phase 1 region; 2,048 MB starting memory; 15-second Lambda infrastructure timeout; 10-second application parser budget; finite reserved concurrency as defense-in-depth only; transient private S3 parser-ingress; AWS IAM Roles Anywhere external-workload credential architecture; Parser Upload Lease architecture; EC-2 durable/shared per-business pre-parse abuse guard; EC-3 parse-before-write ordering; Papa Parse for CSV; ExcelJS for XLSX; `node:zlib` produced-byte containment; maximum compressed input 5,242,880 bytes; maximum actual-produced XLSX decompressed bytes 25 × 1024 × 1024; maximum 2,000 rows; maximum 40 columns; maximum 2,000 characters per cell; Owner-only Phase 1 import authority; Catalog / Inventory truth separation; D-047 and D-068; BKR-1 through BKR-5; exactly nineteen public Catalog commands — no twentieth command.

No correction in this report alters Product Truth or merchant workflow. The two blocking corrections (§4, §5) are additive precision to the response-serialization and object-integrity-verification contracts only; the one non-blocking correction (§6) is wording-only.

---

## 8. No-Implementation / No-Mutation Confirmation

During this mission:

- application or parser code implemented: **NO**
- dependencies added or updated: **NO**
- AWS resources created: **NO**
- S3 buckets/objects created or modified: **NO**
- Lambda functions/versions/aliases/URLs created or modified: **NO**
- IAM roles/policies/trust anchors/profiles/certificates created or modified: **NO**
- AWS commands executed against project infrastructure: **NO**
- SQL or migrations created: **NO**
- Supabase mutated: **NO**
- RLS or grants changed: **NO**
- service-role authority expanded: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- permissions changed: **NO**
- a twentieth Catalog command added: **NO**
- any parser/input/runtime limit weakened: **NO**
- Build Lock or Build Mode entered: **NO**
- deployment or publication: **NO**
- production touched: **NO**
- `communication/live/report1.108.md` modified: **NO**
- `communication/live/report1.109.md` modified: **NO**

The only repository change under this mission is this report: `communication/live/report1.112.md`.

---

## 9. Final Disposition

`LAMBDA PARSER EIS INFRASTRUCTURE CORRECTION — READY FOR INFRASTRUCTURE CONFIRMATION`

Both blocking findings (INFRA-EIS-1/INFRA-EIS-B1 response-capacity contract; INFRA-EIS-2/INFRA-EIS-B2 `HeadObject` checksum-mode requirement) are resolved with an exact, evidence-based, single Phase 1 mechanism each, verified directly against current AWS documentation rather than assumed from memory or restated findings. The one non-blocking precision item (INFRA-EIS-3/INFRA-EIS-N1) is corrected as wording-only, with the selected packaging approach unchanged. Every frozen decision in `instruction1.103.md` §4 is preserved.

This disposition is not an Infrastructure `PASS` — only Infrastructure Operations may issue that verdict, in the short confirmation review `instruction1.103.md` §8 authorizes next. This report grants no implementation, Build Lock, Build Mode, deployment, or production authority.
