# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — PARSER RUNTIME PATH DECISION & EXTERNAL ISOLATION SELECTION

**Report ID:** report1.103
**Mission:** SB-P-1.11-GC-1 — Parser Runtime Path Decision & External Isolation Selection
**Authorized By:** `communication/live/instruction1.97.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** PLAN MODE — ARCHITECTURE SELECTION ONLY
**Implementation Authority:** NONE
**Production Migration Authority:** NONE

**Final Selected Candidate: AWS Lambda**

---

## 1. Exact `main` SHA Reviewed

`3a92d25a2ed66e51a596d59ee738bfba01c3e4cf` (`Authorize parser runtime path decision and external isolation selection (#227)`), confirmed via `git fetch origin main` immediately before beginning work to match `origin/main`'s head.

## 2. Exact Evidence Chain Reviewed

- `communication/live/report1.90.md` through `communication/live/report1.95.md` — the full parser-runtime evidence chain, each read in full: the original production `PARSE_TIMEOUT` diagnosis and Cloudflare `node:worker_threads` non-viability finding (1.90/1.91), the In-Process Bounded Parsing architecture selection (1.92, this repository's own prior work), the Security Architecture review that found the architecture technically sound but blocked on an unverifiable effective Cloudflare CPU ceiling plus a required per-business abuse guard (1.93), and two further Infrastructure Operations missions that each attempted and failed to obtain that project-specific CPU-ceiling evidence through every available Lovable/Cloudflare read-only channel (1.94, 1.95).
- `communication/live/instruction1.97.md` (this mission's governing instruction, read in full).
- The completed Founder Workflow Reconciliation architecture/security chain through `communication/live/report1.102.md` — confirmed as a closed, separate, `SECURITY & PERMISSIONS ARCHITECTURE REVIEW — PASS` verdict (architecture-only; does not authorize Build Mode) that this mission does not reopen, redesign, or depend on. This mission's scope is limited strictly to the independent GC-1 parser/runtime gate.
- Authoritative external provider documentation (Vercel and AWS), fetched and cited per source in §5 below, per instruction1.97.md §10's requirement that external research use only authoritative provider documentation.

No repository or Lovable/Cloudflare state has changed the underlying facts already established in report1.90.md through report1.95.md; this mission treats that evidence chain as settled and does not re-litigate it.

---

## 3. Mission Control PRD-1 Through PRD-4 Acknowledgement

| Decision | Acknowledgement |
|---|---|
| **PRD-1** — Lovable In-Process Bounded Parsing is not eligible for Phase 1 Build Lock under the current evidence state | Acknowledged. Confirmed by direct reading of report1.93.md through report1.95.md: three independent missions, using every available read-only Lovable/Cloudflare evidence channel, could not establish the authorized deployment's effective per-request CPU-time ceiling. This report does not attempt to relitigate or reopen that finding. |
| **PRD-2** — approved path is external narrow parser isolation while Lovable remains the main application environment | Acknowledged and followed throughout. This report's selected architecture (§7) is scoped exactly to the untrusted CSV/XLSX parsing boundary; the main Smart Business application, its Supabase authority model, Product Truth model, Catalog commands, Owner-only Phase 1 permissions, import support-table design, and Founder workflow architecture are unaffected. |
| **PRD-3** — full application hosting migration is rejected | Acknowledged. Neither candidate evaluated is a full-hosting-migration proposal; both are evaluated strictly as a narrow, single-function parsing service. |
| **PRD-4** — R2 is excluded; no object-storage architecture merely to solve parser compute containment | Acknowledged. Neither candidate's selected architecture (§7) introduces S3, R2, Vercel Blob, or any other object-storage service. §5.1's payload-size finding is resolved through request/response transport engineering and/or an explicit future capacity confirmation, never through introducing intermediate storage. |

---

## 4. Non-Negotiable Architecture Boundary and Existing Security Contract

Both candidates were evaluated against instruction1.97.md §3 (narrow transient parsing service only; no Product Truth authority; no service-role mutation authority; no business-decision authority; no second general backend; no raw-file retention; no twentieth Catalog command; no weakening of caller-JWT command authority) and §4's twenty preserved requirements from report1.93.md/report1.94.md (EC-1 through EC-3 and the full locked structural/ordering/sanitization contract). Neither candidate requires relaxing any of these to be architecturally viable; the comparison in §5 evaluates *how* each candidate would satisfy them, not *whether* either is exempt from them.

---

## 5. Candidate Comparison

### 5.1 Runtime and Hard Containment

| Criterion | Vercel Node Function | AWS Lambda |
|---|---|---|
| Supported Node.js runtimes | `nodejs20.x`, `nodejs22.x`, `nodejs24.x` (current extended-duration-eligible set; standard Node.js functions support the same LTS lineup) — [Configuring Maximum Duration for Vercel Functions](https://vercel.com/docs/functions/configuring-functions/duration) | `nodejs20.x`, `nodejs22.x`, `nodejs24.x` — [Lambda runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) |
| Externally enforced maximum execution duration | Hobby: 300s fixed. Pro/Enterprise: 300s default, configurable to 800s (GA), up to 1800s in beta. — [Vercel Functions Limits](https://vercel.com/docs/functions/limitations), [Configuring Maximum Duration](https://vercel.com/docs/functions/configuring-functions/duration) | 1–900 seconds (15 minutes), explicitly configurable per function — [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) |
| Customer-visible/configurable | Yes, via `maxDuration` export or `vercel.json` | Yes, via function `Timeout` configuration |
| Behavior when boundary exceeded | Platform terminates the invocation; client receives a `504`/`FUNCTION_INVOCATION_TIMEOUT` | Platform freezes/terminates the execution environment; caller receives a timeout error from the invoke API/Function URL |
| Termination independent of application cooperation | Yes — "If a function runs for longer than its set maximum duration, Vercel will terminate it." — [Configuring Maximum Duration](https://vercel.com/docs/functions/configuring-functions/duration) | Yes — platform-enforced; this is Lambda's foundational, decades-proven execution model |
| Memory / resource controls | Default 2 GB (1 vCPU) on both Hobby and Pro/Enterprise by default; Pro/Enterprise may reconfigure — [Vercel Functions Limits](https://vercel.com/docs/functions/limitations) | Configurable 128 MB – 10,240 MB; CPU scales with configured memory — [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) |
| Request body limit | **4.5 MB, fixed, not documented as configurable** — [Vercel Functions Limits](https://vercel.com/docs/functions/limitations); confirmed in [FUNCTION_PAYLOAD_TOO_LARGE](https://vercel.com/docs/errors/FUNCTION_PAYLOAD_TOO_LARGE) and the official [body-size-limit workaround guide](https://vercel.com/kb/guide/how-to-bypass-vercel-body-size-limit-serverless-functions) | 6 MB for synchronous invocation payload (request and response) — [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html). For binary content delivered through a Function URL, Lambda base64-encodes the body before this ceiling applies — [Lambda function URL invocation](https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html) ("If the content type of the request is binary, the body is base64-encoded") |
| Response size limit | Same 4.5 MB ceiling applies to responses — [Vercel Functions Limits](https://vercel.com/docs/functions/limitations) | Same 6 MB synchronous payload ceiling applies to the response |

**Material finding — payload ceiling is a shared, unresolved capacity question for both candidates, not a differentiator.** The locked contract requires a 5 MB compressed-upload cap (instruction1.97.md §4 item 6). Vercel's documented 4.5 MB request-body ceiling is below this outright, with no documented configuration path around it — the platform's own official guidance for exceeding it is to introduce an intermediate storage service (Vercel Blob), which this mission's PRD-4 principle (no object storage merely to solve parser containment) counsels against introducing for this purpose. AWS Lambda's nominal 6 MB synchronous payload ceiling is measured *after* any base64 transformation Lambda applies to binary request bodies; because base64 encoding inflates size by approximately 4/3, a 5 MB raw binary (XLSX) file would encode to roughly 6.7 MB — also exceeding the 6 MB ceiling if transported as a naively-encoded binary body. **Neither candidate's simplest, most direct transport path cleanly and unambiguously clears the full 5 MB cap for genuinely binary (XLSX) content without further engineering.** This is documented here as a shared, load-bearing, Build-Mode-must-resolve item (§7 item 5, §15), not resolved by this report, and not used to differentiate the two candidates from each other — it is treated as a wash between them.

### 5.2 Parser Compatibility

Both candidates run standard Node.js (not a browser or edge-restricted runtime), so both are fully compatible with the current parsing stack without modification:

- **Papa Parse (CSV)** — pure JavaScript, no native bindings, runs identically under either candidate's standard Node.js runtime.
- **ExcelJS (XLSX)** — pure JavaScript, no native bindings, same compatibility.
- **ZIP structure/decompression verification** (`content-type.ts`) — uses only `node:zlib`, a Node built-in available identically on both platforms.
- **25 MB produced-byte cap** — the existing `inflateRawSync(..., { maxOutputLength })` mechanism is Node-built-in and platform-independent; it requires no change to move host.
- **2,000 × 40 maximum data shape** — unaffected by host platform; this is application-level logic.
- **Current TypeScript/Node implementation** — both platforms accept a standard compiled/transpiled Node.js handler; neither requires framework-specific rewrites of `parse.ts`/`content-type.ts`/`limits.ts`/`fields.ts`.

No browser-only or edge-only compatibility assumption was made for either candidate; both are conventional server-side Node.js execution environments.

### 5.3 Security Architecture

| Criterion | Vercel Node Function | AWS Lambda |
|---|---|---|
| Smart Business → parser authentication | No platform-native request-signing primitive for custom functions; the standard pattern is a caller-supplied shared secret (bearer token/header) validated inside the function against an environment variable. Achieving cryptographic per-request integrity/anti-replay equivalent to a signing scheme requires Smart Business to design and implement its own HMAC/timestamp/nonce scheme. | Function URL with `AUTH_TYPE=AWS_IAM`: every request must be signed with AWS Signature Version 4, verified by the Lambda service itself before the function ever executes — a platform-native, cryptographically strong, per-request mechanism requiring no custom implementation — [Function URL invocation basics](https://docs.aws.amazon.com/lambda/latest/dg/urls-invocation.html) |
| Preventing unauthorized direct invocation | Shared-secret validation only; a leaked secret grants full access until rotated | IAM policy scoped to `lambda:InvokeFunctionUrl` on the exact function ARN; SigV4 signing means a leaked *long-term* credential is still bounded by the attached IAM policy's scope, and short-term credential issuance (e.g., STS) is a native AWS capability if the calling environment ever supports it |
| `businessId` transmission | Not required by either candidate's architecture — see §7 item 9; this is an application-design choice independent of provider |
| Secret storage/rotation | Vercel encrypted environment variables; rotation is a manual redeploy/update of the stored secret and the Cloudflare-side counterpart | AWS environment variables encrypted at rest (KMS); IAM access-key rotation is a native, well-documented AWS operational pattern; narrowly-scoped IAM policy limits blast radius of a credential compromise to exactly one function's invoke permission |
| Raw upload/log retention prevention | Application-level discipline required on both; platform itself does not persist request bodies beyond the invocation's own logs unless explicitly configured to do so | Same application-level discipline required; CloudWatch Logs is opt-in per statement logged, giving explicit control over what is ever written |
| Parsed-output schema allowlisting | Application-level discipline, identical requirement on both platforms | Same |
| Timeout/runtime failure sanitization | Function-side try/catch plus caller-side opaque-failure handling, same discipline required on both | Same |
| Inability to mutate Supabase Product Truth | Achieved by omission: no Supabase credential of any kind is ever provided to the parser function, on either platform | Same |

**Material finding.** AWS Lambda offers a materially stronger *platform-native* authentication primitive (IAM SigV4) requiring no custom protocol design, satisfying instruction1.97.md §5.3's explicit preference for least privilege and against long-lived broad credentials more directly than Vercel's shared-secret baseline, which would require Smart Business to design, implement, and maintain its own equivalent anti-replay/signing layer to reach a comparable security bar.

### 5.4 Availability and Abuse Containment

This is the most consequential comparison axis, because it bears directly on the exact SEC-ARC-3/SEC-ARC-7 concern (report1.93.md §7) that helped invalidate the original Cloudflare in-process design: whether concurrent requests from different, unrelated invocations can share compute resources within one execution context.

**AWS Lambda — verified strict per-invocation isolation, on by default.** Per AWS's own documentation: *"In the Lambda (default) compute type, one execution environment can run a maximum of one invoke at a time... each concurrent invocation requires a separate execution environment, ensuring strict isolation between concurrent requests."* Execution environments run on dedicated MicroVMs, "never shared across functions," and MicroVMs are "never shared across AWS accounts" — [Understanding the Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/execution-environment.html), [Tenant isolation](https://docs.aws.amazon.com/lambda/latest/dg/tenant-isolation.html). This is the default, standard Lambda compute type — no configuration is required to obtain it, and no configuration exists that silently weakens it for standard Lambda functions.

**Vercel Node Function — default execution model explicitly shares instances across concurrent invocations.** Vercel's Fluid Compute, *enabled by default for all new projects since April 23, 2025*, explicitly states: *"Fluid compute uses a different approach to isolation. Instead of using a microVM for each function invocation, multiple invocations can share the same physical instance (a global state/process) concurrently."* — [Fluid compute](https://vercel.com/docs/fluid-compute). Vercel's own stated rationale for this design is optimizing *I/O-bound* workloads (waiting on external API calls); our parser workload is the opposite — genuinely *CPU-bound* (the existing local benchmark measured ~1,172 ms of actual CPU time for a maximum-shape XLSX, report1.92.md/report1.93.md). Two different businesses' concurrent maximum-shape XLSX parses landing on the same shared Fluid Compute instance would genuinely contend for the same CPU resource within that instance — a materially similar class of risk to the one that helped invalidate the original Cloudflare design, reintroduced here by Vercel's own default execution model rather than by any code this repository would write. Fluid Compute *can* be disabled per-project or per-deployment (`"fluid": false` in `vercel.json`), reverting to Vercel's traditional one-microVM-per-invocation model — but this requires an explicit, non-default configuration choice that must be deliberately made and permanently preserved, rather than being the platform's own baseline guarantee.

**Other availability/abuse factors, both candidates:**

- **Burst/rate protection:** neither platform provides a per-*business* (application-level tenant) rate guard out of the box; both require the same EC-2 per-business pre-parse guard (report1.93.md/report1.94.md), implemented entirely on the Smart Business side, independent of which parser host is chosen (instruction1.97.md §8 explicitly keeps EC-2 out of scope for this mission).
- **Cold starts:** both platforms exhibit cold starts for infrequently-invoked functions; Vercel's bytecode caching and Lambda's standard warm-start behavior are broadly comparable for a narrow, moderate-traffic Phase 1 workload; neither is expected to be materially disqualifying.
- **Retry/duplicate execution risk:** neither platform guarantees exactly-once synchronous invocation semantics beyond normal HTTP request/response; because the parser call is a pure function with no side effects on the parser side (§7 item 17), duplicate invocation carries no correctness risk on either platform.
- **Denial-of-wallet exposure:** AWS Lambda's usage-based pricing with a perpetual free tier bounds worst-case cost predictably at Phase 1 volume; Vercel Pro's included-usage-then-metered model is comparable in shape but is layered on top of a mandatory recurring plan cost (§5.6).
- **Safe behavior if the runtime terminates mid-request:** both platforms terminate cleanly at the platform level (no partial local state to clean up on either, since neither retains state between invocations by design); both preserve the mission's required parse-before-write ordering, so a mid-parse termination on either platform leaves zero Smart Business import-support or Product Truth state, because the Smart Business server has not yet begun any privileged write when the parser call is outstanding.

**Conclusion for this axis:** AWS Lambda's default execution model provides genuine, structural, non-optional per-request compute isolation directly addressing the concern that motivated this entire external-isolation mission. Vercel can reach a comparable posture only by deliberately opting out of its own platform default.

### 5.5 Merchant Experience

- **Extra network hop:** both candidates introduce one additional hop from the Smart Business server (Cloudflare Workers) to the external parser and back; neither is materially different in shape.
- **India/Kerala latency:** both platforms operate infrastructure with an Asia-Pacific/India-proximate presence (AWS's Mumbai region, `ap-south-1`, is a long-established, full-featured AWS region; Vercel operates a global edge/function network with Asia-Pacific presence). Exact comparative latency for this specific route (Cloudflare Workers, itself globally distributed, calling into either provider's nearest region) is not authoritatively resolvable from documentation alone and is recorded as a Build Mode/controlled-runtime verification item (§15), not assumed here for either candidate.
- **Cold-start impact:** for a synchronous, merchant-waiting preview flow, an occasional cold start (typically well under one second to low seconds for a small Node.js function on either platform) is an acceptable, bounded UX cost consistent with instruction1.97.md §5.5's allowance for a simple `Checking your file…` status message.
- **Synchronous preview remains practical for both candidates.** Neither platform's hard constraints (duration, payload, or execution model) force an asynchronous job/queue redesign for this workload's scale (5 MB input, 2,000×40 data shape, sub-2-second measured local CPU cost) — consistent with instruction1.97.md §5.5's explicit instruction not to introduce an async queue/job system absent a demonstrated hard constraint. None was found for either candidate.

### 5.6 Operations and Founder Burden

| Criterion | Vercel Node Function | AWS Lambda |
|---|---|---|
| Deployment complexity | Simple, git-push-to-deploy model; a single function route in a Vercel project | Requires provisioning a Lambda function, an IAM execution role, a Function URL, and an IAM policy for the caller — more initial setup, but each piece is a small, well-documented, one-time configuration |
| Secret/configuration burden | One shared secret to generate, store, and rotate manually | One IAM credential (or role) to provision, narrowly scoped by policy; AWS's own tooling (IAM policy simulator, CloudTrail) provides built-in auditability of exactly what that credential can do |
| Logs/observability | Vercel's built-in function logs/dashboard | CloudWatch Logs/Metrics — more configuration surface, but standard, mature, and directly queryable |
| Rollback | Vercel's deployment history/instant rollback UI | Lambda function versions/aliases provide native, atomic rollback |
| Environment separation | Vercel's project environments (production/preview) | Separate Lambda functions/aliases or AWS accounts per environment — more setup, equally clean separation once configured |
| Cost at controlled Phase 1 volume | **Requires a paid Pro plan.** Vercel's own Terms of Service restrict the Hobby plan to non-commercial personal use only: *"Hobby teams are restricted to non-commercial personal use... All commercial usage of the platform requires either a Pro or Enterprise plan."* Smart Business is unambiguously a commercial venture, so Hobby is not a legitimate option regardless of actual usage volume — a Pro plan subscription is a mandatory recurring cost floor merely to operate this narrow function legitimately. | AWS Lambda's free tier (1 million free requests and 400,000 GB-seconds of compute per month, perpetual, not time-limited) carries **no commercial-use restriction** and comfortably covers Phase 1's controlled merchant volume at effectively $0 marginal cost. |
| Maintenance burden for a solo founder/team | Lower day-to-day friction for a team already inside the Vercel ecosystem (Smart Business is not) | Higher one-time learning/setup cost; AWS Lambda is exceptionally mature and stable once configured, with minimal ongoing maintenance for a single narrow function |
| Vendor lock-in and reversibility | A single HTTP-invoked Node.js function; trivially portable to any other Node.js host, including AWS Lambda, if ever needed | Equally trivially portable; the actual parsing logic (`parse.ts`/`content-type.ts`/`limits.ts`/`fields.ts`) is unchanged and platform-agnostic on either candidate — the only provider-specific code is the thin invocation/auth wrapper |

**Material finding.** The mandatory Vercel Pro cost floor is a genuine, avoidable recurring expense for a solo-founder-stage business that AWS Lambda's unrestricted free tier does not impose. AWS Lambda's higher one-time setup complexity is bounded and well-documented, consistent with "smallest reliable architecture" rather than "most feature-rich," and is not judged to outweigh the containment and cost findings above.

---

## 6. Selected Candidate

**`SELECT AWS LAMBDA`**

AWS Lambda is materially preferable to Vercel Node Function for Smart Business Phase 1 for three independent, evidence-based reasons, any one of which would be significant on its own:

1. **Strict per-invocation execution isolation is AWS Lambda's non-optional default**, directly and robustly satisfying the exact cross-tenant CPU-sharing concern (SEC-ARC-3/SEC-ARC-7) that helped invalidate the original in-process Cloudflare design. Vercel's default execution model (Fluid Compute) explicitly shares instances across concurrent invocations for this exact class of CPU-bound workload, and reaches a comparable isolation posture only through a deliberate, non-default configuration choice that must be permanently maintained.
2. **AWS IAM SigV4 provides a platform-native, cryptographically strong authentication mechanism** requiring no custom protocol design, more directly satisfying the locked contract's least-privilege/no-long-lived-broad-credential preference than Vercel's shared-secret baseline.
3. **AWS Lambda's free tier carries no commercial-use restriction**, while Vercel's Hobby plan is explicitly barred from commercial use by Vercel's own Terms of Service, making a paid Pro plan a mandatory recurring cost merely to operate this narrow function at all.

This is not a small operational-convenience preference overriding a security disadvantage — per instruction1.97.md §6's explicit standard, it is the reverse: the platform with the *stronger* default security/containment posture is also the platform with materially simpler authentication and no mandatory recurring cost. Vercel's advantages (simpler initial deployment ergonomics) are genuine but are exactly the kind of "small operational convenience" instruction1.97.md §6 says is not sufficient to override a containment/security disadvantage, and in this case do not even need to be weighed against one, since AWS Lambda does not carry an offsetting cost disadvantage either.

---

## 7. Standalone Selected Architecture Contract — AWS Lambda

1. **Runtime/provider:** AWS Lambda, Node.js managed runtime, invoked via a Lambda Function URL configured with `AUTH_TYPE=AWS_IAM`.
2. **Exact runtime type/version assumption to verify in Build Mode:** `nodejs22.x` (current stable LTS at the time of this report; Build Mode must confirm and pin the exact version against `papaparse`/`exceljs` compatibility at implementation time, since AWS periodically retires older runtimes).
3. **Hard execution/time boundary:** the Lambda function's configured `Timeout` (1–900 seconds), enforced by the Lambda service itself — non-cooperative, independent of application code. Exact value is a Build Mode/Security-reviewed parameter (recommended: a small multiple of the ~1.2 s measured maximum-shape local CPU estimate, e.g. in the tens of seconds, never approaching the 900 s ceiling, to bound worst-case cost/compute exposure as well as merchant wait time) — not fixed by this report.
4. **Memory/resource boundary:** configurable 128 MB – 10,240 MB. Build Mode must select and empirically verify a value sized to the mandatory 25 MB actual-decompressed-byte ceiling plus ExcelJS's in-memory object-model overhead at the 2,000×40 maximum data shape, not assumed.
5. **Request/body boundary:** the Lambda synchronous invocation payload ceiling (6 MB, measured after any binary→base64 transformation). **Unresolved, must be closed in Build Mode** (§5.1, §15): empirically verify the practical maximum raw compressed-file size this ceiling actually permits for genuinely binary XLSX content, and reconcile that verified figure against the mandatory 5 MB compressed-upload cap before this item can be considered closed — via base64 capacity confirmation, an alternate encoding/transport approach if one is found not to require intermediate storage, or an explicit, separately-authorized Mission Control adjustment to the enforced practical ceiling if genuinely necessary. This report does not resolve it and does not authorize silently narrowing the 5 MB cap.
6. **Response boundary:** same 6 MB synchronous payload ceiling applies to the returned allowlisted parse result. Build Mode must verify the actual serialized response size at the 2,000×40 maximum data shape remains comfortably within this ceiling (expected to be materially smaller than the input, since the response is structured JSON row data, not the raw file).
7. **Smart Business → parser authentication design:** Function URL with `AUTH_TYPE=AWS_IAM`; the Smart Business server (the Cloudflare Workers-hosted TanStack Start server function) holds a narrowly-scoped IAM credential whose attached policy permits only `lambda:InvokeFunctionUrl` on the exact function ARN — no other AWS permission of any kind.
8. **Parser request schema:** a closed shape carrying exactly `{ fileKind: "csv" | "xlsx", fileBase64: string }` — no other field.
9. **Whether `businessId` is included:** **omitted, deliberately.** The parser performs no classification, no database access, and no business decision (instruction1.97.md §3); transmitting business identity would be pure surface-area risk for zero functional benefit. The Smart Business server retains and re-applies business authority entirely on its own side before invoking the parser and after receiving its result.
10. **Raw-file lifecycle:** exists only in the single invocation's request payload and in-process memory; never written to Lambda's local `/tmp` storage for this purpose, never logged, never persisted to S3 or any other AWS storage service; destroyed when the execution environment is frozen, recycled, or terminated after the response returns.
11. **CSV structural and parsing sequence:** unchanged from the current, already-implemented sequence — `verifyCsvStructure` (UTF-8/non-ZIP validation) → `Papa.parse()` → row/column/cell limit enforcement → allowlisted row construction — ported verbatim from `src/lib/catalog-import/parse.ts`/`content-type.ts`; only the execution host changes.
12. **XLSX structural/decompression/parsing sequence:** unchanged — ZIP central-directory structural verification → real produced-byte decompression enforcement (25 MB cap via `inflateRawSync`/`maxOutputLength`) → macro/encrypted rejection → `ExcelJS.Workbook.xlsx.load()` → row/column/cell limit enforcement — ported verbatim.
13. **Exact retained input limits:** 5 MB compressed upload (subject to item 5's Build Mode verification), 25 MB actual produced XLSX decompressed bytes, 2,000 rows, 40 columns, 2,000 characters/cell — all unchanged from the locked contract (instruction1.97.md §4 items 6–10).
14. **Parsed-result allowlist/schema:** the existing `ParseOutcome` shape (`rows`, `unrecognizedColumnNames`, and for XLSX `additionalWorksheetsIgnored`) — unchanged, and the entire and only parser output crossing back to the Smart Business server.
15. **Closed error taxonomy:** the existing `ImportLimitErrorCode` enum (`FILE_TOO_LARGE`, `DECOMPRESSED_TOO_LARGE`, `TOO_MANY_ROWS`, `TOO_MANY_COLUMNS`, `CELL_TOO_LONG`, `PARSE_TIMEOUT`, `UNSUPPORTED_FILE_TYPE`, `MALFORMED_FILE`, `ENCRYPTED_OR_MACRO_FILE`), extended with one new closed code covering opaque parser-runtime/transport failure (e.g. `PARSER_RUNTIME_ERROR`) for AWS-side failures (auth rejection, platform timeout/kill, network failure) — never a raw AWS error body, stack trace, or IAM/ARN detail surfaced to the merchant.
16. **Logging/data-minimization rules:** CloudWatch Logs must never receive raw file bytes, raw cell values, merchant-identifying data, or credential material — only allowlisted operational fields (invocation id, file kind, outcome code, timing), mirroring the existing `logSanitized` discipline already proven in `catalog-import.ts`.
17. **Retry/idempotency semantics:** the parser call is a pure, side-effect-free function of its input on the parser side — the same file always parses to the same result, and no parser-side state exists to worry about. The Smart Business server may safely retry a failed/timed-out parser invocation without any special idempotency key, because no import-support or Product Truth write occurs until after a successful, fully-parsed result returns to the main application.
18. **Interaction with the durable per-business pre-parse guard (EC-2):** the guard is acquired by the Smart Business server before invoking the external parser and is released/expired independently of the parser call's own outcome; the parser has no awareness of, and no interaction with, the guard's existence. EC-2 remains, per instruction1.97.md §8, a separate future backend primitive not implemented by this report.
19. **Exact point where the main application may begin caller-JWT classification:** only after the parser returns a successful, fully-allowlisted result — unchanged from today's existing ordering (report1.93.md §9 items 10–13); only the execution host of the parsing step itself changes.
20. **Exact point where privileged support-table bookkeeping may begin:** only after classification completes, exactly as today (report1.93.md §9 item 14) — unchanged.
21. **Confirmation that preview performs no Product Truth mutation:** confirmed unchanged. The external parser call sits entirely within the existing pre-write window of the locked parse-before-write ordering; no Catalog or Inventory truth mutation occurs during preview on either the parser side or the Smart Business side.
22. **Production-equivalent verification requirements:** a real, authenticated invocation of the actually-deployed Lambda function from a genuine Smart Business server-function context (never merely local emulation), proving: successful max-shape CSV/XLSX completion; hostile-fixture (understated-size ZIP) rejection; a controlled, safe timeout-kill producing sanitized merchant-visible failure and zero support-table/Product Truth writes; and rejection of an unsigned or incorrectly-signed invocation attempt — the AWS-hosted analog of report1.93.md's RT-ISO-1 through RT-ISO-8 matrix.
23. **Security specialist re-review requirements:** a bounded Security & Permissions Architecture review of the actually-implemented Lambda function code, its IAM execution role and resource policy, and the Smart Business-side invocation/authentication code — verifying every item in this contract was implemented exactly as specified, not merely as designed here.
24. **Rollback/failure containment:** if the external parser is unreachable, misconfigured, or its IAM credential is revoked or rotated incorrectly, the Smart Business server's invocation attempt fails as an ordinary caught network/auth error, sanitized through the existing generic-failure path, leaving zero import-support or Product Truth state — identical in effect to any other pre-write failure today. There is no scenario in this design where a parser-side failure leaves partial Smart Business state, because the parser must fully succeed before any Smart Business write begins.
25. **Explicit exclusions:** no S3 or any object-storage service; no Lambda Layer containing merchant data; no VPC-resident database access from the Lambda function; no IAM permission for the Smart Business caller beyond `lambda:InvokeFunctionUrl` on the one function ARN; no Supabase credential of any kind provided to the Lambda function (it never talks to Supabase — the Smart Business server is the only component with database access); no twentieth Catalog command; no Product Truth write capability of any kind; no queue/Workflow/job-system architecture.

---

## 8. Supabase / Migration Impact Classification

- **Supabase schema changes required by the parser runtime itself: NONE.** The Lambda function has no Supabase connectivity of any kind.
- **Supabase RLS changes required: NONE.**
- **Catalog command changes required: NONE.** Exactly nineteen public Catalog commands remain; this architecture introduces no new command of any kind, public or otherwise, on the Supabase side.
- **Product Truth permission changes required: NONE.**

The EC-2 durable per-business preview-guard support primitive identified in report1.94.md remains, as instructed (instruction1.97.md §8), a **separate, future, not-implemented-here** backend item. It is not merged with, and does not depend on, the external parser service architecture in this report — the guard is acquired and released entirely on the Smart Business/Supabase side, before and independent of the parser invocation.

---

## 9. Build Now / Build Later / Add-on / Separate Product / Reject Classification

### Build Now

- one narrow AWS Lambda parser runtime (§7), including its IAM execution role, resource policy, and Function URL configuration;
- retained 5 MB / 25 MB / 2,000 / 40 / 2,000 limits (subject to §7 item 5's Build Mode capacity verification);
- authenticated (SigV4) server-to-parser invocation;
- transient raw-file handling, never persisted;
- sanitized closed error taxonomy (§7 item 15);
- parser-result allowlisting (§7 item 14);
- integration with the existing pre-parse guard (once separately authorized and built) and parse-before-write workflow.

### Build Later

- optional CloudWatch dashboarding/alerting refinements beyond baseline sanitized logging;
- provisioned concurrency or other cold-start optimization, if measured production latency later justifies it;
- any operational refinement not required for Phase 1 correctness.

### Add-on

Core parser safety is not classified as an add-on, per instruction1.97.md §9. None identified.

### Separate Product

None expected.

### Reject

- Lovable in-process parser Build Lock under the current unknown-CPU-ceiling evidence state (PRD-1, unchanged by this mission);
- full Smart Business hosting migration merely for parser isolation (PRD-3);
- R2 or any object-storage architecture as a parser-compute workaround (PRD-4);
- Vercel Node Function for this workload, for the reasons in §5.4/§6;
- VM/self-hosted parser for Phase 1;
- a parser service with direct Product Truth mutation authority or broad Supabase service-role access;
- browser/client-side business-authority decisions;
- silent persistence of raw merchant upload files;
- queue/job architecture without demonstrated need;
- a twentieth Catalog command.

---

## 10. Unresolved Assumptions Requiring Later Build Verification

1. **Exact practical raw-file capacity given the base64 transport tax (§5.1, §7 item 5).** This is the single most material open item. Build Mode must empirically verify the actual maximum compressed-file size deliverable through the Lambda Function URL's 6 MB synchronous payload ceiling under real base64 encoding overhead, and reconcile this against the mandatory 5 MB cap before this architecture can be considered fully closed — via confirmed headroom, an alternate transport approach that avoids intermediate storage, or an explicit, separately-authorized Mission Control decision if a genuine reduction in the practical enforced ceiling is required.
2. **Exact Lambda `Timeout`/memory configuration values** (§7 items 3–4) — sized and verified empirically in Build Mode, not fixed by this report.
3. **India/Kerala comparative latency** (§5.5) — not authoritatively resolvable from documentation alone; a controlled-runtime verification item.
4. **Exact IAM credential-issuance mechanism** for the Smart Business (Cloudflare Workers) caller — whether a long-lived, narrowly-scoped IAM user access-key pair (simplest, and acceptable under least-privilege scoping to one function ARN) or a more sophisticated short-lived credential-issuance pattern is used, is an implementation decision for Build Mode, not fixed here.
5. **Exact closed-error-code set for `PARSER_RUNTIME_ERROR`-class failures** (§7 item 15) — the category is locked; its precise sub-taxonomy (if any) is a Build Mode implementation detail.
6. **The independent EC-1/EC-2/EC-3 contract from report1.93.md/report1.94.md remains fully in force and is not re-litigated or weakened by this report** — this report answers only *where* the parser runs, not the abuse-guard or sanitization requirements already locked, which this report's §7 explicitly inherits unchanged.

---

## 11. Explicit Statement That No Implementation Occurred

During this mission:

- application/parser code was changed: **NO**
- dependencies were changed: **NO**
- SQL or migrations were created: **NO**
- Supabase was mutated: **NO**
- RLS or grants were changed: **NO**
- service-role authority was expanded: **NO**
- a Vercel project was created: **NO**
- an AWS account or resource was created: **NO**
- DNS/domain changes occurred: **NO**
- Lovable was changed, published, or deployed: **NO**
- the parser or any abuse guard was implemented: **NO**
- R2 or any object storage was introduced: **NO**
- Product Truth was changed: **NO**
- permissions were expanded: **NO**
- a twentieth Catalog command was added: **NO**
- Build Lock or Build Mode was entered: **NO**
- production was deployed to or otherwise touched: **NO**
- SB-P-1.11 was accepted/closed: **NO**

All external research in §5 used only authoritative Vercel (`vercel.com`) and AWS (`docs.aws.amazon.com`) documentation, each cited inline at its point of use. No repository file other than this report was created or modified.

---

## 12. Completion Verdict

**`PARSER RUNTIME PATH — AWS LAMBDA SELECTED FOR SPECIALIST REVIEW`**

This selection authorizes only the next specialist architecture review sequence (instruction1.97.md §13): Mission Control review of the selected architecture, an integration/authority-impact review by Supabase Backend Architecture if required, and a bounded parser-runtime architecture review by Security & Permissions Architecture. It does not authorize Build Lock, Build Mode, or any implementation, deployment, or production action.
