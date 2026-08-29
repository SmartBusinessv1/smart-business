# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE A AWS4-X509 SIGNING COMPLIANCE REVIEW

**Report ID:** `report1.172`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.173.md`
**Date:** 2026-08-26

---

## 1. Canonical Commit Reviewed

`87a28ff158656ed9aa410e5a2891f9c2294fc48e` (`origin/main`, merge commit for PR #382 — `instruction1.173.md` itself). No code, configuration, or infrastructure was changed during this review; `src/lib/parser-ingress/roles-anywhere.ts` was read only.

## 2. Official AWS Sources Consulted

1. [The IAM Roles Anywhere authentication signing process](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-sign-process.html) — canonical request, string-to-sign, signature calculation, and Authorization header construction (Tasks 1–4).
2. [IAM Roles Anywhere CreateSession API](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/authentication-create-session.html) — request/response syntax and field semantics.
3. [AWS Identity and Access Management Roles Anywhere endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/rolesanywhere.html) — exact regional endpoint hostnames.

`docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html` was also attempted but returned no usable content (JS-rendered page); source 2 above (the User Guide's CreateSession page) provided the equivalent, more complete information instead.

## 3. Item-by-Item AWS4-X509 Compliance Matrix

| Requirement | Current implementation | Verdict | Evidence |
|---|---|---|---|
| Endpoint host | `rolesanywhere.${region}.amazonaws.com` (line 191) | PASS | Matches `rolesanywhere.ap-south-1.amazonaws.com` in the AWS endpoints table exactly for `ap-south-1`. |
| URI path | `/sessions` (line 192) | PASS | Matches the documented `POST /sessions HTTP/1.1` request syntax exactly. |
| HTTP method | `"POST"` (lines 232, 273) | PASS | Matches. |
| Request body fields/serialization | `{durationSeconds, profileArn, roleArn, trustAnchorArn}`, `JSON.stringify` (lines 195–200) | PASS | All three required fields (`profileArn`, `roleArn`, `trustAnchorArn`) present; `durationSeconds` optional and correctly included; the deprecated `sessionName` and optional `roleSessionName` are correctly omitted (omission is valid — `roleSessionName` defaults to the certificate's own serial number when absent, which is the intended behavior here). |
| `AWS4-X509-RSA-SHA256` algorithm usage | `const ALGORITHM = "AWS4-X509-RSA-SHA256"` (line 20), used in string-to-sign and Authorization header | PASS | The workload key is RSA (module's own header comment, line 15–17); matches the documented `AWS4-X509-RSA-SHA256` variant exactly. |
| Certificate serial-number extraction | `extractSerialNumberHex` (lines 108–129): parses the DER `Certificate → TBSCertificate → serialNumber INTEGER`, strips a leading non-negative-sign `0x00` padding byte per DER INTEGER encoding rules | PASS (extraction logic itself) | Correctly implements ASN.1 DER traversal per X.509's `Certificate ::= SEQUENCE {tbsCertificate, ...}` / `TBSCertificate ::= SEQUENCE {[0] version (optional, tag 0xA0), serialNumber INTEGER, ...}` structure, including the optional explicit version tag skip and DER's leading-zero-byte stripping rule. |
| **Serial-number encoding used in `Credential=`** | `extractSerialNumberHex` returns `toHex(bytes)` (line 128); used directly as `serialHex` in `Credential=${serialHex}/${credentialScope}` (line 268) | **DEFECT** | AWS's own documentation states explicitly: *"The `Credential` is constructed via `{SerialNumber}/{Scope}` where serial number is **the decimal representation** of the serial number of the signing certificate"* — with the worked example `Credential=11111222223333344444/20201105/us-east-1/rolesanywhere/aws4_request` (an all-decimal-digit string). The current implementation sends the serial number as a **hexadecimal** string instead. See §4 for the exact defect and minimal correction. |
| Credential scope format | `${dateStamp}/${region}/${ROLES_ANYWHERE_SERVICE}/aws4_request` (line 238), `ROLES_ANYWHERE_SERVICE = "rolesanywhere"` (line 19) | PASS | Matches `Date + '/' + Region + '/' + Service + '/aws4_request'` and the documented example scope `.../rolesanywhere/aws4_request` exactly. |
| Canonical URI | Literal `"/sessions"` passed through unmodified (line 192, 233) | PASS | The path contains only unreserved characters (letters, `/`); RFC 3986 normalization and the documented double-URI-encoding rule are no-ops for this fixed literal path — no discrepancy possible. |
| Canonical query string | Empty string, hardcoded (`buildCanonicalRequest`, line 171) | PASS | The request has no query string; the documented canonical form for that case is an empty string, matching exactly. |
| Canonical header normalization and ordering | Header names lowercased and sorted (lines 161–163); each rendered as `name:value.trim()\n` (line 165) | PASS, with one non-impacting note | Matches the documented `Lowercase(HeaderName) + ':' + TrimAll(HeaderValue) + '\n'` structure and sort-by-lowercase-name ordering. Note: `.trim()` removes only leading/trailing whitespace, not AWS's full `TrimAll` (which also collapses internal sequential spaces to one). This is not a defect in practice: none of the five headers ever signed here (`host`, `x-amz-date`, `x-amz-x509`, `x-amz-x509-chain`, `content-type`) can ever contain internal sequential whitespace (a hostname, an ISO8601 timestamp, base64 data, and a fixed MIME type never do), so no discrepancy is possible for this implementation's actual header set. |
| `SignedHeaders` construction | `sortedHeaderNames.join(";")` (line 167) | PASS | Matches the documented semicolon-delimited form and its worked example `content-type;host;x-amz-date;x-amz-x509` exactly. (AWS's Task 4 prose separately says "comma-delimited," which is inconsistent with Task 1's own explicit rule and example; Task 1's explicit worked example was treated as authoritative, consistent with universal standard SigV4 practice.) |
| Inclusion/formatting of `host`, `content-type`, `x-amz-date`, `x-amz-x509`, optional `x-amz-x509-chain` | All four base headers always set; `x-amz-x509-chain` set only when a non-empty chain is supplied (lines 223–229) | PASS | `x-amz-x509`/`x-amz-x509-chain` values are base64-encoded DER exactly as required (*"the signing certificate MUST be presented in the header X-Amz-X509, as base64-encoded DER"*); the chain header is correctly omitted for a directly Trust-Anchor-signed certificate (no intermediate chain), matching `instruction1.167.md`/PR #368's already-reviewed chain-optional design. |
| Payload hashing | `sha256Hex(body)` — UTF-8 encode, SHA-256, hex, lowercase (lines 136–140, 221) | PASS | Matches *"the bytes of the request are encoded as UTF-8, hashed with SHA-256, the resulting bytes hex encoded, and finally lowercased"* exactly (JS `toString(16)` is already lowercase). |
| Canonical request hashing | `sha256Hex(canonicalRequest)` (line 237), same helper | PASS | Same algorithm applied to the canonical request string, matching the documented second application of the identical hash procedure. |
| String-to-sign construction | `[ALGORITHM, amzDate, credentialScope, hashedCanonicalRequest].join("\n")` (line 239) | PASS | Matches `StringToSign = Algorithm + '\n' + RequestDateTime + '\n' + CredentialScope + '\n' + HashedCanonicalRequest` exactly. |
| RSA signing algorithm and hash | `crypto.subtle.sign("RSASSA-PKCS1-v1_5", ...)` with an `importKey` spec of `{name: "RSASSA-PKCS1-v1_5", hash: "SHA-256"}` (lines 243–262) | PASS | `RSASSA-PKCS1-v1_5` with SHA-256 is the WebCrypto name for the documented `SHA256WithRSA` signing algorithm — the same construction. |
| Signature encoding | `toHex(signatureBytes)` (line 263) | PASS | Matches `Signature = HexEncode(SigningAlgorithm(...))` exactly. |
| Authorization header syntax | `` `${ALGORITHM} Credential=${serialHex}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signatureHex}` `` (line 268) | **DEFECT** (via `serialHex`, same root cause as above) | Structurally matches `Authorization: {Algorithm} Credential={CredentialString}, SignedHeaders={SignedHeaders}, Signature={Signature}` exactly; the only discrepancy is the already-identified hex-vs-decimal serial number inside `CredentialString`. |
| Date/timestamp formatting | `amzDateStamp` strips the colons, hyphens, and millisecond suffix from `Date.toISOString()` (lines 142–147) | PASS | Produces `YYYYMMDD'T'HHMMSS'Z'` at second granularity in UTC, matching the documented ISO8601-basic format exactly; `dateStamp` (first 8 characters) correctly supplies the credential scope's `Date` component. |
| Certificate-chain handling for a directly Trust-Anchor-signed workload certificate | `chainDer` is `null` when `certificateChainPem` is empty; `x-amz-x509-chain` header is omitted entirely in that case (lines 203–204, 217, 229) | PASS | Already independently reviewed and merged under `instruction1.167.md`/PR #368; unchanged by this review. |
| Other required Roles Anywhere-specific request-shape details | Reviewed request/response shape against the CreateSession User Guide page in full | PASS | No other missing header or field found; response parsing (`credentialSet[0].credentials.{accessKeyId,secretAccessKey,sessionToken,expiration}`) matches the documented Response Syntax JSON example's exact field casing. |

## 4. Exact Defect and Minimal Correction Proposal

**Defect location:** `src/lib/parser-ingress/roles-anywhere.ts`, function `extractSerialNumberHex` (lines 108–129) and its use at line 214 (`serialHex = extractSerialNumberHex(certDer)`) and line 268 (`Credential=${serialHex}/...`).

**Exact defect:** the certificate serial number is encoded as a lowercase hexadecimal string for the Authorization header's `Credential=` field. AWS's own documented signing process requires the **decimal** representation of the same integer value at that exact position. Sending the wrong base means AWS cannot correctly identify/validate the signing certificate's serial number against the registered Trust Anchor when verifying the request, which is consistent with — and, on current evidence, the most likely explanation for — the observed `create_session_http_failed:403` rejection recorded in `report1.171.md`.

**Proposed minimal correction (not implemented under this instruction; for a separate, dedicated implementation PR only):**

1. Convert the already-correctly-extracted serial-number bytes (the same `bytes` value computed inside `extractSerialNumberHex`, after DER leading-zero stripping) to a decimal string instead of a hex string — for example, by interpreting the big-endian byte array as an unsigned `BigInt` and calling `.toString(10)`, or by renaming/adding a sibling function (e.g. `extractSerialNumberDecimal`) that performs the same DER extraction but returns `bytes.reduce((acc, b) => acc * 256n + BigInt(b), 0n).toString(10)`.
2. Use that decimal value — not `serialHex` — in the `Credential=` construction at line 268.
3. `toHex` and the raw bytes are still needed elsewhere in the file only for `x-amz-x509`/`x-amz-x509-chain` (which are base64, not hex, of the full DER — unaffected) and the signature (`signatureHex`, unaffected) — the correction is scoped to only the one `Credential=` value.
4. Add or update a focused regression test proving the corrected value is decimal (all digits, no hex `a`–`f` characters, matching a known serial number's expected decimal form derived independently, e.g. via `openssl x509 -noout -serial` on the same synthetic throwaway certificate already used by the existing diagnostic test suite) and that the certificate-parsing/DER-traversal logic itself is otherwise unchanged.

This is a small, deterministic, purely local change confined to one function and one call site; it does not touch AWS configuration, does not widen any security boundary, and does not weaken any sanitization added under `instruction1.172.md` (the existing `certificate_parse_failed`/`create_session_http_failed:<status>` categorization is unaffected by this change). Per the current instruction's explicit directive, this correction was **not implemented** in this review — a separate, dedicated, minimal human-reviewed implementation PR is required before any code change or redeployment.

## 5. Exact Phase A Verdict

**`LOCAL DEFECT FOUND`**

## 6. Phase B

**Not reached.** Per `instruction1.173.md` §6, Phase B (read-only AWS-side inspection) is authorized only if Phase A finds no local signing defect sufficient to explain the `403`. A defect was found that plausibly and fully explains the observed `403` on its own, so Phase B was not attempted under this instruction.

## 7. Exact 403 Root-Cause Conclusion

**Not yet formally proven by direct reproduction against AWS** (this review was code-level only, per this instruction's explicit "do not change code or AWS configuration during the review" constraint — no live `CreateSession` call was made). However, the identified defect is a complete, sufficient, and independently-documented explanation for an AWS Roles Anywhere `403` rejection: a `Credential=` value using the wrong numeric base for the certificate serial number would cause AWS's server-side signature/certificate-identity verification to fail, which manifests as exactly this class of rejection. No other discrepancy against the official specification was found anywhere else in the implementation (§3).

## 8. Code PR or AWS-Change Authorization Required

**A code PR is required** (the minimal correction described in §4), not an AWS-side configuration change. No evidence in this review points to any Trust Anchor, Profile, Role, or other AWS-side misconfiguration — the entire implementation is compliant with the official specification except for this one encoding defect. Per the explicit instruction for this turn, that PR is not opened here; Mission Control should issue a separate, narrowly-scoped authorization for it.

## 9. Confirmation — No Prohibited Secret/Provider Body Exposed

This review consisted entirely of reading the existing, unmodified `src/lib/parser-ingress/roles-anywhere.ts` source file and consulting public AWS documentation. No certificate, private key, temporary credential, Authorization header, signature, canonical request, or provider response body — real or synthetic — was generated, read, or displayed at any point. No AWS API call of any kind was made.

## 10. Confirmation — Production Untouched

No production system, resource, or configuration was accessed, read, or modified. This review touched no infrastructure at all (Cloudflare, Supabase, or AWS, production or non-production) — it was a static, offline, code-and-documentation review only.

## 11. Final Disposition

`GC-38R PHASE C C5 — BLOCKED`

Phase A conclusively identified one local, well-documented, minimal-scope signing defect (hex instead of decimal serial number in the `Credential=` field) that is a complete and sufficient explanation for the observed `403`. Per `instruction1.173.md` §5 and this turn's explicit instruction, no correction was implemented and no code was changed; Phase B was correctly not attempted given a defect was found. Mission Control should authorize a separate, minimal, human-reviewed implementation PR for the correction described in §4, after which the existing non-production diagnostic path (left entirely in place, unchanged, per `instruction1.173.md` §10) can be used to reattempt C5.
