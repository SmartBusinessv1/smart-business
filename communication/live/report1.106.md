# SMART BUSINESS — LAMBDA SECURITY ARCHITECTURE CORRECTION REPORT

## SB-P-1.11-GC-3 — Lambda Security Architecture Correction

**Report ID:** report1.106
**Mission:** SB-P-1.11-GC-3 — Lambda Security Architecture Correction
**Authorized By:** `communication/live/instruction1.99.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** PLAN MODE — BOUNDED ARCHITECTURE CORRECTION ONLY
**Implementation Authority:** NONE
**Production Migration Authority:** NONE
**Deployment Authority:** NONE

---

## 1. Final Verdict

`LAMBDA SECURITY ARCHITECTURE CORRECTION — READY FOR SECURITY CONFIRMATION`

All three blocking findings recorded in merged `communication/live/report1.105.md` are corrected with exactly one standalone Phase 1 architecture answer each:

- **SEC-L-B1** is closed by selecting **AWS IAM Roles Anywhere** as the exact external-workload credential mechanism, evidenced as genuinely compatible with the current Cloudflare Workers server runtime rather than selected as a theoretical option.
- **SEC-L-B2** is closed by a corrected upload-integrity contract that cryptographically binds the uploaded bytes to the parse request at the S3 layer itself (exact-match SHA-256 POST-policy condition plus S3's own server-side checksum verification) and re-verifies that binding independently inside Lambda before any parse work begins.
- **SEC-L-B3** is closed by a single narrow **Parser Upload Lease** structure, separate from the EC-2 guard, that binds every issued object key to an authenticated business/request and is re-verified at confirmation time, so a learned object locator alone can never cause cross-business parsing.

No locked architecture item in §3 of `instruction1.99.md` was reopened. No code, dependency, AWS/S3/IAM resource, SQL, migration, Supabase mutation, RLS/grant change, Lovable change, Product Truth change, permission expansion, twentieth Catalog command, or limit weakening occurred. This report does not grant implementation authority.

---

## 2. Exact Canonical Baseline Reviewed

Latest merged GitHub `main` reviewed at mission start:

`bf1f22f2f5f0d5cc3fa81420c6741d47c09b40b1`

Commit:

`Authorize bounded Lambda security architecture correction (#232)`

Exact evidence chain reviewed in full for this correction:

- `communication/live/instruction1.99.md` — governing correction scope, locked architecture, and required report structure;
- `communication/live/report1.105.md` — Security & Permissions Stage B `CHANGES REQUIRED` verdict and the SEC-L-B1/B2/B3 blocking findings this report corrects;
- `communication/live/report1.104.md` — Infrastructure Operations Stage A `PASS`, the selected standard-Lambda-compute/`ap-south-1`/response-streaming architecture, and the transient S3 transport bridge this correction builds on;
- `communication/live/report1.103.md` — AWS Lambda selection over Vercel Node Function;
- `communication/live/report1.94.md` and `communication/live/report1.95.md` — preserved EC-1/EC-2/EC-3 parser security contract;
- current repository server-only credential and Owner/business re-derivation patterns already used by the nineteen Catalog commands and the merged BKR-1 through BKR-5 import-support surface (`report1.102.md`), used here only as the existing pattern this correction must remain consistent with, not reopened.

For load-bearing AWS and Cloudflare platform facts, authoritative provider documentation was consulted directly (cited in §6). No AI-generated or third-party summary was treated as authoritative for a load-bearing claim.

---

## 3. Concise Architecture Decision Summary

The corrected architecture keeps every element of Stage A (`report1.104.md`) and every already-passed Stage B boundary (`report1.105.md` SEC-L-2/3/6/7/8/9) unchanged, and adds exactly three new load-bearing decisions:

1. Smart Business's server-side AWS signing identity is obtained through **AWS IAM Roles Anywhere**, not a long-lived IAM access key. The Cloudflare Worker holds only a narrow end-entity certificate and private key that can mint short-lived AWS session credentials scoped to exactly the parser's two permissions; it never holds a directly usable, indefinitely valid AWS secret.
2. Every presigned S3 upload capability is bound to a client-declared SHA-256 that is enforced as an exact-match condition in the S3 POST policy itself (not only checked after the fact), and Lambda independently re-verifies size and checksum against the exact values Smart Business supplied over the authenticated control channel before it reads or parses anything.
3. A single new narrow durable record — the **Parser Upload Lease** — carries both the checksum-integrity state (SEC-L-B2) and the business/object tenancy binding (SEC-L-B3). It is created only after caller authentication, Owner/business re-derivation, and EC-2 guard acquisition, is resolved by the server from its own authoritative state rather than from anything the browser asserts, and moves through an explicit `ISSUED → UPLOADED → CONSUMED | FAILED | EXPIRED` lifecycle that is exactly-once at the point Smart Business commits to invoking Lambda.

No second backend, general file store, R2 usage, or parser redesign was introduced. S3 remains solely a narrow, short-lived, transport bridge.

---

# CORRECTION A — SEC-L-B1

## 4. SEC-L-B1 Corrected Contract

**Selected Phase 1 credential architecture:** AWS IAM Roles Anywhere (temporary-credential class), not a long-lived IAM access key.

The corrected contract is:

1. **Exact AWS identity/principal type:** a dedicated non-human IAM Role (the "Smart Business external caller principal", authority map in §7) that is assumable only through IAM Roles Anywhere, never through a standing access key, an EC2/ECS/Lambda execution identity, or any human IAM user.
2. **Credential origin:** a single Smart Business-controlled Certificate Authority, registered with AWS as a Roles Anywhere Trust Anchor, issues exactly one dedicated end-entity X.509 certificate to a single logical workload identity ("Smart Business Parser Ingress Caller"). AWS documents that a Trust Anchor may be backed by an externally-managed Certificate Authority rather than requiring AWS Private CA, so no recurring AWS Private CA dependency is required for Phase 1.
3. **Temporary, not long-lived:** the credentials actually used to sign S3 upload capabilities and Lambda invocations are AWS session credentials (access key, secret key, session token) returned by the Roles Anywhere `CreateSession` API. AWS documents a minimum session duration of 900 seconds and a maximum of 43,200 seconds; Phase 1 must configure the Roles Anywhere Profile to the shortest operationally practical duration (on the order of minutes), never the 12-hour ceiling, since each Worker invocation only needs a credential for the length of one upload-capability issuance or one Lambda invocation.
4. **How the existing server runtime obtains them:** the Cloudflare Worker signs and sends a `CreateSession` HTTPS request using the end-entity private key, per AWS's documented authentication process (§6). AWS validates the certificate's trust chain against the registered Trust Anchor and returns the temporary session credentials, which are then used exactly once (or for the short remaining life of that session) to sign the S3 POST policy and/or the Lambda Function URL invocation. No credential is cached longer than one operation requires; nothing about this design assumes a persistent, long-running process, which matches how Cloudflare Workers actually execute.
5. **Exact server-only storage/placement boundary:** only the end-entity private key, its certificate, and the intermediate chain (if any) are held in server-only secret storage, using the same storage boundary already used for other server-only secrets in this codebase (never a `VITE_*` or otherwise client-bundled variable). The resulting short-lived AWS session credentials exist only in server-side memory for the duration of the single operation that requested them and are never returned to the browser, persisted, or logged.
6. **Explicit prohibition on browser/client exposure:** the end-entity private key, the certificate's private key material, and any issued AWS session credential must never appear in browser JavaScript, `VITE_*` variables, HTML, serialized server-function payloads, browser storage, cookies, source maps, logs, telemetry, analytics, error responses, downloadable files, or merchant-visible debug output. The browser may only ever receive the narrowly scoped S3 POST policy fields described in §9/§10, which is not the underlying AWS credential.
7. **Exact least-privilege permissions:** the assumed IAM Role has exactly the two permission groups defined in the authority map (§7) — S3 upload-capability signing scoped to the exact parser-ingress object-key pattern, and Lambda Function URL invocation scoped to the exact function ARN/alias — and nothing else.
8. **Function URL resource-policy conditions:** unchanged from `report1.105.md` §4.1 and carried forward unweakened: `AuthType = AWS_IAM`; both `lambda:InvokeFunctionUrl` and `lambda:InvokeFunction` required, with `lambda:InvokeFunction` further restricted by `lambda:InvokedViaFunctionUrl = true` so the same principal cannot bypass the URL boundary through the ordinary `InvokeFunction` API; no public or wildcard external principal; `AuthType = NONE` remains prohibited.
9. **Rotation and revocation procedure:** two-tier, described in §7.
10. **Compromise response:** described in §7.
11. **Operational realism for the current Lovable/Cloudflare runtime:** described and evidenced in §5/§6.

This contract does not require a broad identity platform, a new general backend, or a theoretical mechanism selected merely because AWS supports it elsewhere; §6 records the exact provider evidence establishing that every primitive this design needs is already available inside the existing runtime.

---

## 5. Selected Credential Mechanism and Runtime-Compatibility Justification

Two classes were evaluated exactly as `instruction1.99.md` §4 requires: an AWS-supported temporary-credential mechanism, and the fallback long-lived machine access key with the nine-point residual-risk contract from `report1.105.md` §4.3.

**AWS IAM Roles Anywhere was selected**, not the long-lived-key fallback, because direct evidence (§6) shows every step of its authentication flow is achievable inside the current server runtime without new native binaries, subprocess execution, or filesystem access — none of which Cloudflare Workers permit, and none of which AWS's own documented protocol requires:

- Authentication to `CreateSession` is a plain SigV4-style-signed HTTPS REST request, not a call restricted to AWS's native `aws_signing_helper` binary. Any environment that can perform outbound HTTPS and compute the required signature can use it.
- The signature requires signing with a private key bound to an X.509 certificate, using RSA PKCS#1 v1.5 or ECDSA. Cloudflare Workers' Web Crypto implementation documents support for exactly these algorithms, including importing a PKCS8-formatted private key and producing a signature with `crypto.subtle.sign()`.
- The Trust Anchor backing that certificate may be an externally-managed Certificate Authority rather than AWS Private CA, removing a recurring paid-service dependency and allowing the Certificate Authority's own private key to be kept fully offline by whoever administers it — it is never needed by the running server, only at certificate issuance/renewal time.
- Issued session credentials are genuinely temporary (900–43,200 second range), a materially different risk posture from an indefinitely valid IAM access key: compromise of a live session credential is bounded by its own short expiry even before any human revocation action occurs, and compromise of the end-entity private key is bounded by the ability to revoke trust in that certificate at the Trust Anchor without touching any other credential.

This is not a theoretical selection: the mechanism is evaluated against the runtime's actual, documented capabilities (outbound `fetch`, `crypto.subtle` signing) rather than assumed compatible because AWS supports it for workloads in general. §17 records the one open implementation-level question (exact signing-library approach) that Build Mode, not this report, must resolve; it does not change the selected architecture.

Because a genuinely compatible temporary-credential mechanism was identified and evidenced, the long-lived-key fallback in `report1.105.md` §4.3 is **not** selected for Phase 1. It remains documented only as a contingency (§17) if a future Build Mode evidence step discovers an unforeseen incompatibility.

---

## 6. Provider Documentation Consulted for SEC-L-B1

Load-bearing facts were checked against current provider documentation, consistent with `instruction1.99.md` §2's requirement to use authoritative AWS documentation for AWS facts:

- AWS IAM Roles Anywhere — "The IAM Roles Anywhere authentication process": confirms `CreateSession` is authenticated by a SigV4-compatible signature computed with the certificate-bound private key, attached via the `X-Amz-X509` header, and is a plain REST API call rather than a CLI-only mechanism; confirms RSA and EC keys are supported signing key types.
- AWS IAM Roles Anywhere — trust model documentation: confirms a Trust Anchor may represent either an AWS Private CA certificate authority or an externally-managed certificate authority.
- AWS Security Blog, "IAM Roles Anywhere with an external certificate authority": confirms external/self-managed CA support as a documented, supported configuration, not an unsupported workaround.
- AWS IAM Roles Anywhere `CreateSession`/Profile documentation: confirms session duration is the minimum of the Profile's configured `durationSeconds` and the request's `durationSeconds`, with an allowed range of 900–43,200 seconds and a default of 3,600 seconds if unspecified.
- Cloudflare Workers Web Crypto runtime API documentation: confirms `crypto.subtle.importKey` supports the `pkcs8` key format, and that RSASSA-PKCS1-v1_5 and ECDSA are supported for signing and verification inside the Workers runtime.
- Amazon S3 SigV4 browser POST policy documentation and current guidance on `x-amz-checksum-sha256` as a POST policy condition: confirms POST policies support exact-match conditions on arbitrary form fields including checksum fields, and that S3 independently validates the uploaded bytes' checksum against the declared value rather than only checking that a checksum field is present.

No Free/Paid-tier inference, no unpublished behavior, and no AI-generated explanation was treated as authoritative for any of the above.

---

## 7. Least-Privilege Caller-Principal and Lambda-Role Authority Map

This report specifies the intended permission shape only. It does not create any IAM resource, policy, role, user, or key.

### 7.1 Smart Business external caller principal (assumed via Roles Anywhere)

Permitted:

- `s3:PutObject` scoped to the exact parser-ingress bucket and the exact narrow object-key prefix/pattern used for parser-ingress objects only — required so that credentials assumed by this principal are authorized to sign a valid presigned POST policy for that prefix;
- `lambda:InvokeFunctionUrl` and `lambda:InvokeFunction` scoped to the exact parser Function URL/function ARN/alias, with `lambda:InvokeFunction` further conditioned on `lambda:InvokedViaFunctionUrl = true`.

Explicitly not permitted:

- `s3:GetObject`, `s3:ListBucket`, `s3:DeleteObject`, `s3:PutObjectAcl`, or any other S3 data action;
- any Lambda administrative action (`UpdateFunctionCode`, `UpdateFunctionConfiguration`, `CreateFunctionUrlConfig`, `UpdateFunctionUrlConfig`, concurrency mutation, or any IAM policy mutation);
- IAM administration of any kind, including self-service rotation of its own trust/permissions;
- any Supabase, database, or Product Truth credential or authority;
- any AWS service or resource outside the exact parser-ingress bucket/prefix and the exact parser Function URL.

### 7.2 Lambda execution role

Permitted:

- `s3:GetObject` (and the metadata read needed to verify size/checksum, e.g. `HeadObject`) scoped to the exact parser-ingress object path/prefix;
- `s3:DeleteObject` scoped to the same exact path/prefix, used only to remove the object it just read;
- bounded, approved log/metric writes (for example `logs:CreateLogStream`, `logs:PutLogEvents`) consistent with the logging contract already locked in `report1.105.md` §12.

Explicitly not permitted:

- `s3:PutObject`;
- `s3:ListBucket`, unless a later implementation specification proves it strictly necessary and tightly conditions it — no such necessity exists in this architecture, since Lambda always receives the exact object key from the authenticated control request and never needs to enumerate the bucket;
- IAM administration;
- Lambda administration;
- any Supabase, database, or Product Truth credential;
- any caller-JWT, Catalog command, or business-decision authority.

These two authority classes remain fully separate: the caller principal can create upload capability and invoke the function, but cannot read or delete the object it caused to be created; the Lambda role can read and delete the object, but cannot create a new one and cannot invoke itself outside the path Smart Business controls.

---

## 8. Credential Placement, Rotation, Revocation, and Compromise Contract

**Two independent expiry tiers exist, and must not be conflated:**

1. **Session-credential tier (automatic, short, non-administrative):** every AWS session credential returned by `CreateSession` expires on its own within the configured duration (§4 item 3) with no human action required. A leaked session credential self-invalidates on that schedule regardless of whether anyone notices the leak.
2. **End-entity certificate/private-key tier (administrative, longer-lived, explicitly rotated):** the certificate and private key that the server holds to request sessions are themselves rotated on a calendar cadence set by Infrastructure/Operations governance (this report does not invent an arbitrary interval, consistent with `report1.105.md` §4.3's own deferral). Rotation contract:
   1. issue a new end-entity certificate from the same Trust Anchor while the current certificate remains valid and trusted (overlap window, directly analogous to two-key overlap rotation for a raw access key, but performed at the certificate layer);
   2. update only server-only secret storage with the new private key/certificate;
   3. verify production-equivalent signed `CreateSession`, S3 POST-policy, and Lambda invocation calls succeed using the new certificate;
   4. once verified, stop using the old certificate operationally;
   5. revoke or de-register the old certificate at the Trust Anchor (or allow it to lapse if it was deliberately issued with a short validity window as a rotation control) once no further use is observed;
   6. no self-service capability for the runtime principal itself to issue, rotate, or revoke its own certificate — that authority belongs only to whoever administers the Certificate Authority, never to the running Worker;
   7. rotation evidence must be operationally documented before production acceptance, mirroring `report1.105.md` §4.3 item 10.
3. **Compromise response:** on suspected compromise of the private key, revoke/de-register the certificate at the Trust Anchor immediately (or remove the Trust Anchor's trust in the issuing chain if the Certificate Authority itself is suspected compromised), which immediately prevents any further `CreateSession` call from succeeding; any already-issued session credential still expires on its own short automatic schedule (§4 item 3) even before that action completes, which bounds exposure more tightly than a raw long-lived access key would.
4. **Logging/telemetry prohibition:** the private key, certificate private-key material, raw `CreateSession` request/response bodies, and any issued AWS session credential must never be written to logs, telemetry, analytics, or error responses, consistent with the existing locked logging contract (`report1.105.md` §12).

This satisfies the rotation/revocation rigor `report1.105.md` §4.3 required for a long-lived-key fallback, while using a mechanism whose primary operational credential is not itself a standing bearer secret.

---

# CORRECTION B — SEC-L-B2

## 9. SEC-L-B2 Corrected Contract

The corrected contract prevents a still-valid upload capability from being used to substitute different bytes before Lambda reads the object, closing the exact gap `report1.105.md` §8.2 identified: exact-key and content-length conditions alone do not prove the uploaded bytes are the ones Smart Business authorized.

1. The browser computes SHA-256 over the exact file bytes locally, before requesting the upload capability, and declares that digest and the exact byte length to Smart Business when requesting the **Parser Upload Lease** (§12).
2. Smart Business binds the declared SHA-256, exact byte length, exact server-generated object key, and the authoritative business/request identity into the lease record at the moment the lease is created (§12), before any capability is issued.
3. Using a temporary AWS session credential obtained per §4/§5, Smart Business mints an S3 POST policy scoped to: the exact bucket; the exact object key (not a prefix); a `content-length-range` condition pinned to the exact declared byte length (strictly tighter than only enforcing the 5,242,880-byte ceiling, while still never exceeding it — Smart Business itself rejects any declared length above 5,242,880 bytes before a lease is even created); an exact-match condition on the `x-amz-checksum-sha256` field equal to the declared digest; only the required form fields; no caller-selected ACL; no wildcard success redirect.
4. Amazon S3 enforces both the exact-match checksum condition on the submitted policy and its own independent server-side verification that the actually-uploaded bytes' SHA-256 matches the declared value, rejecting the upload outright if a different set of bytes is substituted — this is the first, S3-native integrity gate, and it exists specifically because pinning only the key and length (as the pre-correction design did) leaves a substitution window that pinning the checksum closes.
5. Smart Business does not trust a browser-reported "upload complete" call alone. That call only transitions the lease `ISSUED → UPLOADED` (§12); it does not authorize Lambda invocation by itself.
6. Lambda receives the expected checksum and expected size only through the SigV4/Roles-Anywhere-authenticated Smart Business → Lambda control request (never from the browser, and never invented by Lambda itself).
7. Before reading the full object, Lambda independently verifies the object's existence, exact key, exact size, and exact checksum against S3 object metadata (`HeadObject`) using the values supplied in that authenticated control request — the second, Lambda-native integrity gate, defense-in-depth against any failure or bypass of the S3-layer policy enforcement in step 4.
8. Any mismatch at step 7 fails closed: Lambda does not parse, attempts `DeleteObject` where safe, and returns only a sanitized `integrity_mismatch` outcome; Smart Business maps this to the existing locked "upload integrity failure" closed category (`report1.105.md` §10) and transitions the lease to `FAILED`.
9. A successful parse consumes the lease exactly once, enforced by the atomic state transition described in §10 — not by any assumption that a presigned S3 capability is inherently one-time. AWS documents presigned capabilities as bearer capabilities usable until expiry; this design does not rely on S3 itself providing one-time-use semantics.
10. Repeat requests against a lease already in a terminal state (`CONSUMED`, `FAILED`, or `EXPIRED`) fail closed immediately, without contacting S3 or Lambda again and without reparsing any bytes, since the underlying object has typically already been deleted and mutable bytes must never be reparsed against a stale lease. No prior parser output is retained or replayed, consistent with the logging/data-minimization contract.
11. Upload-capability expiry is set to the same short value as the lease's own `issued_at`-derived expiry, with a Phase 1 ceiling of **five minutes**, shorter where later operational evidence supports it.
12. No raw file bytes, checksum-bearing merchant payload, or parser output are logged at any point in this flow.

---

## 10. Exact Checksum/Size/Upload-Capability/Consumption/Replay Lifecycle

The four concepts `instruction1.99.md` §5 requires to be distinguished are genuinely different controls in this design and are not collapsed into one:

| Concept | What it governs | Where enforced | Lifespan |
|---|---|---|---|
| **Upload-capability expiry** | How long the presigned S3 POST policy itself remains usable | Amazon S3, via the policy's own `expiration` field | ≤5 minutes from issuance; identical clock to the lease's own expiry so the two cannot silently diverge |
| **Object lease expiry** | How long the Parser Upload Lease record itself remains in a non-terminal state before Smart Business refuses to act on it at all | Smart Business, on the lease record | Same ≤5 minute value as upload-capability expiry; a hard ceiling independent of whether an upload actually happened |
| **One-use/consumption state** | Whether this specific lease may still be turned into a Lambda invocation | Smart Business, via the atomic `UPLOADED → CONSUMED`/`FAILED` transition on the lease record (§12) | Exactly once per lease; a second concurrent or later attempt observes a non-`UPLOADED` state and fails closed before Lambda is ever contacted a second time |
| **Lambda invocation idempotency/replay** | Whether a retried Smart Business → Lambda call (for example after a network failure, not a malicious replay) can cause double-parsing | Smart Business, by claiming the lease atomically **before** dispatching to Lambda, so a duplicate outbound call for the same lease can never be dispatched twice; Lambda itself holds no cross-invocation state and performs no deduplication of its own | Bounded by the same single consumption event above; if Smart Business's own call to Lambda is lost after Lambda already succeeded and deleted the object, a retry finds no object at that key, fails closed via `HeadObject`/`GetObject` not-found, and the lease is marked `FAILED` — a safe terminal outcome, not a silent re-parse |

Presigned S3 capabilities are explicitly not assumed to be inherently one-time; every one-time guarantee in this architecture is enforced by Smart Business's own lease state machine, not by an assumption about S3's bearer-capability behavior.

---

# CORRECTION C — SEC-L-B3

## 11. SEC-L-B3 Corrected Contract

An opaque S3 object key is never treated as authorization by itself.

1. The Smart Business server never accepts a browser-supplied object key for any purpose. The object key is always server-generated, high-entropy, and contains no merchant, business, customer, or file-derived data.
2. The binding is carried by the **Parser Upload Lease** (§12) — the same structure used for SEC-L-B2 — rather than by a second, separately named structure. §12 explains why one unified structure is correct here.
3. The lease is created only after, in this exact order: (1) caller authentication, (2) Owner/business re-derivation using the existing repository pattern already used by the nineteen Catalog commands, (3) EC-2 guard acquisition for that authoritative `businessId`.
4. At confirmation time (the browser's "upload complete" call), Smart Business resolves the object key **only** by looking up its own lease record from the lease identifier the browser supplies — never from any key the browser separately asserts — and re-verifies that the lease's stored `businessId` still matches the currently authenticated caller's re-derived business. A mismatch fails closed regardless of whether the lease is otherwise valid.
5. This double check (business bound at issuance, business re-verified at confirmation) is what directly defeats the threat `report1.105.md` §7/SEC-L-B3 describes: Merchant A learning or guessing Merchant B's object key or lease identifier cannot cause Smart Business to parse Merchant B's object, because Merchant A's own authenticated confirmation call re-derives Merchant A's business, which will never match the lease's stored owner.
6. No import batch, import row, or Product Truth record is created merely because a lease or an uploaded object exists. Import-support bookkeeping writes may begin only after the lease reaches `CONSUMED` (§12), which itself requires successful parse and Smart Business validation/classification.

---

## 12. Authoritative Business/Request/Object Binding Lifecycle — the Parser Upload Lease

### 12.1 Why one unified structure, and why separate from the EC-2 guard

`instruction1.99.md` §6 allows either placement. This report selects a **separately named narrow structure**, not the EC-2 guard record itself, because the two primitives have different responsibilities and different natural identities:

- The EC-2 guard's job is concurrency/rate control: at most one expensive preview in flight per `businessId`, plus a bounded short-window attempt limit. Its natural key is `businessId` alone, and its lifecycle is acquire/hold/release.
- The Parser Upload Lease's job is cryptographic and tenancy binding of one exact object to one exact request: its natural key is a server-generated, high-entropy lease identifier, and its lifecycle carries checksum, size, and consumption state that has nothing to do with rate accounting.

Merging them would force the guard's own record to carry unrelated integrity fields, and would risk coupling the guard's release timing to object-cleanup timing in ways that are unnecessary to reason about together. Keeping them separate keeps each auditable on its own terms.

The two are still explicitly linked: the lease is created only after the EC-2 guard is successfully acquired (§11 item 3) and stores a reference to the guard instance/token it was issued under, solely for audit and ordering proof — never as an independent authorization source. The EC-2 guard itself is held for the full duration of the operation and is released only when the lease reaches a terminal state (`CONSUMED`, `FAILED`, or `EXPIRED`), consistent with EC-2's existing definition of "one expensive preview in flight."

### 12.2 Required fields

- authoritative server-derived `businessId`;
- server-generated high-entropy `leaseId` (the request/operation identifier);
- server-generated high-entropy object key;
- reference to the EC-2 guard instance/token under which the lease was issued;
- `issuedAt`;
- `expiresAt` (`issuedAt` + upload-capability TTL, ≤5 minutes);
- `expectedByteLength`;
- `expectedSha256`;
- `state`.

### 12.3 Lifecycle states

- **`ISSUED`** — lease created, capability handed to the browser; no confirmation received yet.
- **`UPLOADED`** — the browser has called Smart Business's confirmation endpoint claiming its S3 upload completed. This transition is itself a single-writer, idempotent transition from `ISSUED`; it is not trusted as proof that the upload actually completed correctly — that proof comes only from Lambda's independent verification in §9 item 7.
- **`CONSUMED`** — terminal, success. Reached only via an atomic conditional transition from `UPLOADED` (for example a conditional update guarded by `WHERE state = 'UPLOADED'`, succeeding for exactly one caller) performed immediately before Smart Business dispatches to Lambda, and finalized only after Lambda's allowlisted result has been received and validated by Smart Business. This is the exactly-once boundary described in §10.
- **`FAILED`** — terminal, failure. Reached from `UPLOADED` (or, in the read/checksum-mismatch case, immediately after Lambda's verification fails) whenever integrity verification, Lambda execution, or response validation fails for any reason.
- **`EXPIRED`** — terminal. Reached when `expiresAt` passes while the lease is still `ISSUED`, or acts as a hard ceiling that prevents any further transition out of `UPLOADED` once passed, even if a confirmation call arrives late. `expiresAt` is an absolute ceiling on the entire lease lifecycle, not only the `ISSUED` phase.

Any request referencing a lease already in a terminal state fails closed (§9 item 10); no terminal lease is ever reopened.

---

## 13. Exact Transient S3 Deletion and Exceptional-Cleanup Semantics

The bucket/object semantics locked in `report1.105.md` §8/§13 and `instruction1.99.md` §7 are carried forward unweakened:

- dedicated, private parser-ingress bucket/security boundary, region-aligned with the parser Lambda (`ap-south-1`, per the locked Phase 1 region assumption);
- S3 Block Public Access fully enabled; no public ACL or bucket policy path;
- HTTPS/TLS required; bucket policy denies insecure transport;
- default encryption at rest enabled;
- no browser `GET`/`LIST`/`DELETE` capability of any kind;
- upload capability restricted to exactly one high-entropy object key per lease, with no merchant, business, customer, or file-derived data embedded in the key itself;
- bucket versioning **disabled**, Object Lock **disabled**, cross-region replication **disabled**, no Glacier/archive transition, no retention configuration that blocks immediate deletion;
- Lambda reads the raw object into transient execution memory only, never to local disk beyond what the runtime itself may transiently use, and never persists it elsewhere.

### 13.1 Exact deletion ordering

Lambda's `DeleteObject` call occurs immediately after the object's complete bytes have been read **and** the size/checksum integrity check (§9 item 7) has passed, and strictly **before** the decompression-bomb check, XLSX materialization, or any row/column/cell parsing begins. This is the precise insertion point for "before expensive parsing begins": integrity verification is cheap and bounded; decompression and parsing are the expensive, potentially-hostile-input-facing work this ordering is designed to protect against retaining a source object during. Ordinary parser errors therefore never retain the source object, because the object is already gone before parsing that could fail even starts.

### 13.2 Exceptional backstop

A short S3 Lifecycle expiration rule exists only as an asynchronous backstop for objects that survive because an upload was abandoned, an invocation never occurred, a read failed before deletion could run, or a delete call itself failed. It is never presented as immediate deletion, and its exact interval is an Infrastructure implementation parameter left to Build Mode, bounded only by the requirement that it be the shortest operationally supported period consistent with reliable cleanup. Deletion failure is recorded only as a sanitized internal cleanup-failure metric/alert, never surfaced to the merchant with any AWS-specific detail.

---

## 14. Complete End-to-End Request Sequence

1. Browser calls an authenticated Smart Business server endpoint, including the client-computed SHA-256 and exact byte length of the file to be imported.
2. Smart Business validates the caller JWT.
3. Smart Business re-derives Owner and authoritative business using the existing repository pattern; Manager/Employee remain fail-closed, unchanged.
4. Smart Business acquires the EC-2 per-business guard.
5. Smart Business creates the Parser Upload Lease (`ISSUED`) bound to the authoritative `businessId`, a new high-entropy `leaseId` and object key, the declared `expectedByteLength`/`expectedSha256`, and a ≤5-minute `expiresAt`.
6. Smart Business obtains a short-lived AWS session credential via Roles Anywhere `CreateSession` and uses it to mint an S3 POST policy scoped to the exact bucket, exact key, exact pinned content length, and exact-match `x-amz-checksum-sha256` condition.
7. Browser uploads the raw bytes directly to the private S3 bucket using that capability. S3 enforces the exact key, exact length, and exact checksum before accepting the object.
8. Browser calls Smart Business's confirmation endpoint with only the `leaseId`. Smart Business transitions the lease `ISSUED → UPLOADED` and re-verifies the lease's stored `businessId` against the currently authenticated caller's re-derived business.
9. Smart Business atomically claims the lease (`UPLOADED → CONSUMED`-pending, guarded by a conditional update that only one caller can win) and, having won that claim, obtains a fresh short-lived AWS session credential and invokes the parser Function URL with `AWS_IAM`/SigV4, passing only the object key, `leaseId`, `expectedByteLength`, and `expectedSha256` as control metadata — never raw bytes.
10. Lambda checks object existence and reads at most 5 MiB.
11. Lambda verifies exact size and checksum against the values in the authenticated control request.
12. On success, Lambda issues `DeleteObject` immediately.
13. Lambda performs the 25 MiB actual-produced XLSX decompression check, then CSV/XLSX structural parsing, then the locked 2,000-row/40-column/2,000-character-per-cell enforcement.
14. Lambda returns only the allowlisted parser result via response streaming.
15. Smart Business validates the response envelope/schema; malformed, truncated, or unexpected output is treated as failure.
16. On full success, Smart Business finalizes the lease transition to `CONSUMED`; on any failure at steps 10–15, Smart Business transitions the lease to `FAILED`, deletes the object where Lambda has not already done so and it is still safe to do so, and returns only a sanitized closed-category error.
17. Only after `CONSUMED` and Smart Business's own business field validation/classification may privileged import-support bookkeeping writes begin, under existing caller-JWT-governed authority.
18. Preview performs no Catalog/Product Truth mutation. Commit remains governed entirely by the existing nineteen Catalog commands.
19. The EC-2 guard is released once the lease reaches any terminal state (`CONSUMED`, `FAILED`, or `EXPIRED`).

---

## 15. Abuse/Failure-State Matrix

| Case (per `instruction1.99.md` §7) | Lease outcome | Object outcome | Merchant-visible result |
|---|---|---|---|
| Upload authorized but never completed | `ISSUED → EXPIRED` at `expiresAt` | No object exists, or an object arriving after the capability's own expiry is rejected by S3 | Import never proceeds; browser must restart |
| Upload completed but parse never invoked | `UPLOADED`, then forced terminal once `expiresAt` passes even though `UPLOADED` | Orphaned; removed by the Lifecycle backstop | Import never proceeds; browser must restart |
| Lambda cannot read object | `UPLOADED → FAILED` | No object, or Lambda attempts defensive delete if one exists | Sanitized generic/retryable failure |
| Checksum/size mismatch | `UPLOADED → FAILED` | Lambda deletes the mismatched object before returning | Sanitized "upload integrity failure" |
| Lambda timeout/runtime termination | `UPLOADED → FAILED` (via Smart Business's own control-side timeout) | Deleted already if the read/verify/delete sequence completed before termination; otherwise removed by the Lifecycle backstop | Sanitized "parser timeout/runtime failure" |
| Successful parse | `UPLOADED → CONSUMED` | Already deleted by Lambda before parsing began | Import preview result returned; no Product Truth mutation |
| Smart Business transport failure after Lambda success | Stuck at `UPLOADED`; a retry attempt finds no object and is driven to `FAILED` | Already deleted by Lambda | Sanitized generic retryable failure; merchant must start a new import |
| Repeated/expired parse request | No transition permitted out of a terminal state | Unaffected; never touched again | Sanitized "already processed / start a new import" |

In every case, zero import batch, import row, or Product Truth mutation occurs unless the lease reaches `CONSUMED` through the full sequence in §14.

---

## 16. Confirmation — EC-2 and EC-3 Remain Unchanged

EC-2 (durable/shared per-business pre-parse abuse guard) and EC-3 (parse-before-write ordering and opaque failure sanitization), as defined in `report1.93.md`/`report1.94.md` and re-confirmed unweakened in `report1.104.md` and `report1.105.md`, are unchanged by this correction:

- EC-2 remains mandatory, is acquired before the Parser Upload Lease is created and before any presign/Lambda work, and is released only when the lease reaches a terminal state (§12.1) — a clarification of *when* release occurs, not a weakening of the guard's own one-in-flight/rate-limited definition.
- EC-3 remains mandatory: no import batch, row, or Product Truth mutation occurs before successful parse, validation, and classification (§14 items 17–18); all AWS/S3/Lambda failure states are mapped to the same fixed, opaque, sanitized merchant-facing categories already locked in `report1.105.md` §10, with no new category invented and no raw provider detail newly exposed.

---

## 17. Confirmation — Parser Authority, Product Truth, Permissions, and the Nineteen-Command Surface Remain Unchanged

- The parser retains no Supabase credential, Product Truth authority, Catalog command authority, caller-JWT authority, or business-decision authority. The Lambda execution role in §7.2 confirms this at the IAM-authority level.
- No twentieth Catalog command is introduced. Exactly nineteen public `SECURITY DEFINER` Catalog commands remain the sole write surface for Product Truth.
- No Manager/Employee permission is expanded; Owner/business re-derivation and fail-closed non-Owner behavior are unchanged.
- The 5 MiB compressed-input ceiling, the 25 MiB actual-produced XLSX decompressed-byte ceiling, and the 2,000-row/40-column/2,000-character-per-cell limits are unchanged and are not weakened anywhere in this correction.
- S3 remains solely a narrow, transient transport dependency for the reasons already established in `report1.104.md` §22 and is not authorized here as general storage, a business database, a parser queue, or a Product Truth surface.

---

## 18. Assumptions and Unresolved Facts

The following are left to Infrastructure Operations, Build Mode, or a later Mission Control decision, and do not change the selected architecture:

1. Exact operational ownership of the Certificate Authority backing the Roles Anywhere Trust Anchor, and where its offline private key is custodied, is an Infrastructure Operations decision.
2. The exact Roles Anywhere session `durationSeconds` value (bounded to the shortest operationally practical figure within the documented 900–43,200 second range) is a Phase 1 starting value to be tuned with implementation evidence, not a final number fixed by this report.
3. The exact durable storage engine for the Parser Upload Lease (for example, a Supabase Postgres table under service-role-only access, structurally analogous to the existing `inventory_item_idempotency_keys`/`inventory_movement_idempotency_keys` pattern) is a Build Mode/Infrastructure decision. This report specifies only the required fields, states, and transition guarantees, not the storage technology.
4. The exact calendar rotation interval for the end-entity certificate is left to Infrastructure/Operations governance, mirroring the same deferral `report1.105.md` §4.3 already made for a long-lived key's rotation interval.
5. The exact client-side/server-side signing library or implementation approach for Roles Anywhere `CreateSession` requests and S3/Lambda SigV4 signing inside the Cloudflare Workers runtime is an implementation detail for Build Mode; this report establishes only that the required cryptographic primitives are available in the runtime, not the exact code that will use them.
6. If a future Build Mode evidence step discovers a genuine, documented incompatibility between Roles Anywhere's signing requirements and the production Cloudflare Workers environment that was not surfaced by this review, the long-lived-key fallback contract in `report1.105.md` §4.3 remains available as a documented contingency requiring explicit Mission Control risk acceptance — it is not silently substituted, and any such substitution would itself require a new correction cycle.
7. Exact Lambda reserved-concurrency integer, exact cost/usage alarm thresholds, and exact Lifecycle backstop interval remain Infrastructure Operations decisions already flagged as open in `report1.104.md` and are not newly resolved or newly blocked by this report.

No new blocker was discovered during this correction. No previously-passed boundary was found to require reopening.

---

## 19. Scope Integrity / No-Mutation Record

This mission performed only:

- read-only repository review;
- read-only authoritative AWS and Cloudflare provider documentation review;
- security/architecture analysis in Plan Mode;
- creation of `communication/live/report1.106.md` on a protected mission branch.

It did **not**:

- implement application code;
- implement parser code;
- add dependencies;
- create AWS account, IAM, Lambda, or S3 resources;
- issue AWS credentials;
- create presigned URLs or POST policies;
- create SQL or migrations;
- mutate Supabase test or production;
- change RLS or grants;
- expand service-role authority;
- change Lovable;
- introduce R2;
- modify Product Truth;
- expand Manager/Employee permissions;
- add a twentieth Catalog command;
- weaken the 5 MiB / 25 MiB / row / column / cell limits;
- enter Build Mode or Build Lock;
- deploy;
- publish;
- change any domain;
- touch production data;
- declare SB-P-1.11 accepted or complete.

---

## 20. Required Next Gate

Per `instruction1.99.md` §13, the sequence after this report is:

1. Human review and merge of `communication/live/report1.106.md`.
2. A short Security & Permissions Architecture confirmation review limited to SEC-L-B1, SEC-L-B2, and SEC-L-B3 as corrected here, plus regression confirmation of the already-passed SEC-L-2/3/6/7/8/9 boundaries.
3. Human review and merge of that confirmation.
4. Mission Control decision on implementation-specification readiness.

Security confirmation must not begin before this report is merged. The narrow S3 transport dependency and the Roles Anywhere Trust Anchor/Certificate Authority both remain **not yet authorized for implementation** — this report corrects architecture only and grants no resource-creation authority.

---

## 21. Final Verdict

`LAMBDA SECURITY ARCHITECTURE CORRECTION — READY FOR SECURITY CONFIRMATION`

All three blocking findings from `report1.105.md` — SEC-L-B1, SEC-L-B2, SEC-L-B3 — are corrected with one standalone, evidenced architecture answer each. Every locked item in `instruction1.99.md` §3 remains unchanged. This verdict does not grant implementation, Build Mode, deployment, or production authority.
