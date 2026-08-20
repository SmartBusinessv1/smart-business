# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PUBLIC CA INPUT TRANSPORT CORRECTION REPORT

**Report ID:** `report1.162`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.156.md`
**Date:** 2026-08-20

---

## 1. Exact Canonical `main` SHA Reviewed

`643bc9aba050656a91a60e48c748e19620fb4c04`

Confirmed via `git fetch origin && git rev-parse origin/main` followed by `git pull --ff-only origin main`. This is the merge commit for PR #352 (`instruction1.156.md` itself), one commit past the merged diagnostic Phase B run authorization (`instruction1.155.md`, PR #351) and PR #350's runner-side certificate diagnostic.

## 2. Classification of the Confirmed Input-Transport Defect

**Provider-observed fact** (from `instruction1.156.md` §1): the Founder-triggered diagnostic Phase B run #5 (authorized by `instruction1.155.md`) failed *before any AWS API call*, at the runner-side diagnostic that PR #350 added, with:

```text
GC38R_CERT_DIAGNOSTIC byte_count=2211 line_count=0 begin_markers=0 end_markers=0
GC38R_CERT_DIAGNOSTIC_FAIL reason=marker_count_not_exactly_one
```

`line_count=0` on a 2,211-byte file is decisive: the certificate the runner actually wrote to `/tmp/parser-pki/ca.pem` contained **zero newline characters at all** — the entire multi-line PEM had been flattened into a single line (`-----BEGIN CERTIFICATE----- MIIGNT... ZA8V48Qlp6oh -----END CERTIFICATE-----`) somewhere between the Founder pasting it into the GitHub Actions "Run workflow" web form and the workflow writing it to disk. This is no longer an inference — `report1.161.md`'s §5.1 hypothesis (GitHub `workflow_dispatch` web UI not reliably preserving embedded newlines in pasted multi-line text, previously classified there as "community-corroborated, non-official evidence") is now confirmed by direct, runner-side, first-party evidence from this repository's own workflow run. `report1.161.md`'s second open hypothesis (§5.4, a Key-Usage gap in the actual CA certificate) was not reached, since the run failed at the marker-count check, before the fingerprint/Basic-Constraints/Key-Usage checks ever executed — it remains neither confirmed nor ruled out by this evidence, but is no longer the live blocker.

The Founder's local public certificate remains independently verified against the locked SHA-256 fingerprint `51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E` — the certificate itself is not in question, only how it reaches the runner intact.

## 3. Exact Before/After Workflow Input Contract

| | Before | After |
|---|---|---|
| Input name | `trust_anchor_ca_certificate_pem` | `trust_anchor_ca_certificate_base64` |
| Input content | Raw multi-line PEM text, pasted directly | Single-line Base64 encoding of the exact PEM file bytes |
| Environment variable | `CA_CERTIFICATE_PEM` | `CA_CERTIFICATE_B64` |
| Runner-side handling | `printf '%s' "${CA_CERTIFICATE_PEM}" > /tmp/parser-pki/ca.pem` (direct write; vulnerable to any newline loss upstream) | Decoded via `base64 -d` into `/tmp/parser-pki/ca.pem`, after defensively stripping any incidental whitespace from the input value |
| Vulnerability to GitHub web-UI newline handling | Yes — this is the confirmed defect | No — a single unbroken Base64 line contains no embedded newline for the web UI to lose in the first place; the defect is sidestepped structurally, not merely mitigated |
| Downstream diagnostics | Marker count → OpenSSL parse → SHA-256 fingerprint match → Basic Constraints → Key Usage → signature metadata | **Unchanged**, byte-for-byte identical code, now operating on the Base64-decoded file instead of the directly-written file |
| `create-trust-anchor` AWS CLI invocation | `--source "sourceType=CERTIFICATE_BUNDLE,sourceData={x509CertificateData@=file:///tmp/parser-pki/ca.pem}"` | **Unchanged** — same line, same file path, no request-construction change |

## 4. Exact Decode Path and Failure Behavior

```bash
mkdir -p /tmp/parser-pki
# Strip incidental whitespace/newlines defensively (a clean single-line
# value from the recommended PowerShell command never contains any),
# then decode. GNU base64 -d fails closed (non-zero exit) on genuinely
# malformed input.
if ! printf '%s' "${CA_CERTIFICATE_B64}" \
     | tr -d '[:space:]' \
     | base64 -d > /tmp/parser-pki/ca.pem 2>/tmp/parser-pki/ca-b64-decode-error.txt; then
  echo "GC38R_CERT_DIAGNOSTIC_FAIL reason=base64_decode_failed" >&2
  cat /tmp/parser-pki/ca-b64-decode-error.txt >&2
  exit 1
fi
```

Failure modes and their handling:

- **Empty input** (`trust_anchor_ca_certificate_base64` not supplied): caught by the pre-existing `if [ -z "${CA_CERTIFICATE_B64}" ]` bootstrap check, unchanged in position and logic, before decode is even attempted.
- **Genuinely malformed Base64** (invalid alphabet characters): `base64 -d` exits non-zero with `base64: invalid input`; the `if !` guard catches this and fails closed with `reason=base64_decode_failed`, printing only the decoder's own short error text (never the input value itself) before exiting.
- **Base64 that decodes but does not represent one valid PEM certificate** (wrong file encoded, truncated paste, corrupted value that happens to still be valid Base64): decode "succeeds" at the shell level, but the pre-existing, unchanged downstream diagnostics — marker count, OpenSSL parse, SHA-256 fingerprint match — catch this exactly as they would have caught any other malformed certificate content, with no new gap introduced.
- **Incidental whitespace/newlines in an otherwise-valid Base64 value** (for example if a value were ever line-wrapped rather than continuous): stripped by `tr -d '[:space:]'` before decode, so decode still succeeds and produces the exact original bytes.

The decoded file's bytes are never re-derived or re-touched afterward: the same `/tmp/parser-pki/ca.pem` path is read directly by the fingerprint computation and by the unchanged `create-trust-anchor --source ...@=file:///tmp/parser-pki/ca.pem` invocation later in the same step.

## 5. Founder-Safe PowerShell Command

To convert only the public CA certificate file into one Base64 line for clipboard transport, reading the file's raw bytes directly (avoiding any text-encoding reinterpretation) and never touching any private key:

```powershell
[Convert]::ToBase64String([System.IO.File]::ReadAllBytes("C:\path\to\ca.pem")) | Set-Clipboard
```

This reads exactly the bytes of the named **public certificate** file and writes a single unbroken Base64 line to the clipboard, ready to paste directly into the `trust_anchor_ca_certificate_base64` field in the GitHub Actions "Run workflow" form. It never reads, references, or requires any private key or passphrase file — supplying a path to a private-key file to this exact command would produce a Base64 encoding of that file, but nothing in this correction, this command, or the workflow requests, expects, or would use one; the CA private key remains entirely outside this process, exactly as before.

## 6. Static Verification Evidence

Performed per `instruction1.156.md` §6, none against any live AWS or GitHub target:

1. **Workflow YAML parses cleanly:** `js-yaml` parse succeeds; 18 steps; inputs now `[trust_anchor_ca_certificate_base64, generate_workload_csr]`; same `on: workflow_dispatch` trigger; same `environment: aws-nonprod-parser`; same `if: github.ref == 'refs/heads/main'` branch gate — all unchanged except the renamed input.
2. **Shell syntax parses cleanly:** the `Create IAM Roles Anywhere trust anchor` step was extracted via the same YAML parse and checked with `bash -n`; clean, no syntax errors.
3. **Base64 round-trip reproduces exact source PEM bytes**, tested locally against synthetic (throwaway, immediately deleted) certificates, never the real CA or any private key:
   - a well-formed synthetic CA certificate, Base64-encoded as one unbroken line (`base64 -w0`, matching `[Convert]::ToBase64String`'s no-wrapping behavior) and decoded back through the exact corrected shell pipeline, is confirmed **byte-for-byte identical** to the source file via `diff` and matching `sha256sum`;
   - the full corrected pipeline (decode → marker count → OpenSSL parse → fingerprint match → Basic Constraints → Key Usage) run against this Base64-encoded certificate reaches `GC38R_CERT_DIAGNOSTIC_PASS`, with the reported fingerprint matching the source certificate's own `openssl x509 -fingerprint -sha256` output exactly;
   - the same certificate re-encoded with conventional 76-column Base64 line-wrapping (`base64` without `-w0`) also correctly decodes and passes, confirming the defensive whitespace-stripping step.
4. **Malformed Base64 fails closed:** a deliberately invalid string (`not-valid-base64!!!@@@###`) correctly produces `GC38R_CERT_DIAGNOSTIC_FAIL reason=base64_decode_failed` with the decoder's own short error text, exit 1, before any further step runs.
5. **Empty input fails closed:** an empty `CA_CERTIFICATE_B64` value is caught by the pre-existing, unmodified bootstrap check before decode is attempted; separately, decoding an empty value in isolation was confirmed to produce a 0-byte file, which the unchanged downstream marker-count check would independently also reject.
6. **Decoded certificate is still checked against the locked SHA-256 fingerprint:** confirmed directly in test 3 above; a deliberately wrong expected-fingerprint value was also tested and correctly produces `reason=fingerprint_mismatch`, unchanged from PR #350's behavior.
7. **No certificate payload is logged:** manual review confirms the decode step logs only its own short decoder error text on failure (never the input value or decoded content), and the unchanged downstream diagnostic continues to log only byte/line counts, marker counts, the fingerprint, and short extracted metadata strings — never the PEM body.
8. **No private-key path or secret handling introduced:** repository-wide grep confirms zero occurrences of `PARSER_TRUST_ANCHOR_CA_PRIVATE_KEY`, `ca.key`, `ca-private-key`, or CA generation/signing commands anywhere in the corrected file — identical to its pre-correction state. The PowerShell command in §5 only ever reads the named public certificate file.
9. **Trust Anchor name, tags, enabled state, idempotency, account/region, IAM boundaries, and unrelated stages remain unchanged:** confirmed via `git diff`, which shows changes confined to the input definition, its description, the header/step comments documenting it, the environment-variable rename, the missing-certificate error message, the file-write-to-decode replacement, and the fingerprint-mismatch hint text — the `existing_ta`/`existing_profile` idempotent-reuse logic, the `create-trust-anchor`/`create-profile` AWS CLI invocations (including all six tags, `--enabled`, and the `@=file://` request form), and every other step in the workflow are byte-for-byte untouched.
10. **`git diff --stat`:** exactly 1 file changed, 42 insertions, 10 deletions.
11. **Additional composability check** (not required by §6 but performed for confidence, given this correction stacks on top of PR #350's CRLF-tolerant marker check): a synthetic certificate with `\r\n` line endings, Base64-encoded and decoded through the corrected pipeline, still correctly reaches `GC38R_CERT_DIAGNOSTIC_PASS` with the CRLF-tolerant marker check unaffected — confirming the two corrections compose without interference. Two local testing-methodology artifacts were encountered and resolved during this verification (stale leftover test-directory state from an interrupted run, and an over-broadly-scoped `MSYS_NO_PATHCONV` shell variable affecting unrelated `openssl` calls in the same local Windows/git-bash test session); neither reflects any defect in the workflow correction itself, and both were confirmed resolved by rerunning the same checks cleanly.
12. Staged-diff secret-pattern scan: clean.

## 7. Confirmation — CA Custody and All Security Boundaries Remain Unchanged

Confirmed:

- The Trust Anchor CA private key is still never generated, received, held, or written to disk by this workflow, under any input or code path, at any point — this correction changes only how the already-public CA *certificate* text arrives at the runner, not anything about private-key handling.
- The workflow still receives only the Founder-supplied public CA certificate (now Base64-encoded), via the single renamed input.
- No IAM permission, deploy-role trust, RuntimeBoundary, GitHub OIDC configuration, or GitHub Environment protection was changed.
- Account remains `658980433673`; region remains `ap-south-1`; protected environment remains `aws-nonprod-parser`.
- Trust Anchor name, tags, and enabled state are unchanged; exactly one Trust Anchor is still ever created; the existing idempotent-reuse behavior is unchanged.
- The existing `create-trust-anchor --source ...@=file:///tmp/parser-pki/ca.pem` request construction is unchanged, per `instruction1.156.md` §3 item 7 — no separate defect in that line has been demonstrated, so it was not touched.
- The existing runner-side fail-closed diagnostics (marker count with CRLF tolerance, OpenSSL parse, SHA-256 fingerprint match, Basic Constraints, Key Usage, and signature-algorithm metadata logging) remain in place, unmodified, and still run before any AWS `CreateTrustAnchor` call.
- No CA regeneration, replacement, or private-key access occurred at any point, for either the real CA or the throwaway synthetic test certificates used for local verification (which were generated, used, and permanently deleted entirely within this local review session).

## 8. Confirmation — No Workflow Run or AWS Mutation Occurred

Confirmed. This review consisted entirely of: reading the workflow file and prior reports at the cited canonical SHA; reviewing the confirmed diagnostic evidence in `instruction1.156.md`; editing the workflow YAML; and static verification (§6), including local generation and testing of throwaway synthetic certificates (no AWS or GitHub interaction). No `aws` CLI command was run against any AWS account. No AWS resource was created, deleted, modified, or queried. The `aws-gc38r-parser-deploy.yml` workflow was not triggered or dispatched. No Phase B run occurred, and none is authorized by this review.

## 9. Final Disposition

`GC-38R PUBLIC CA INPUT TRANSPORT CORRECTION — READY`

Per `instruction1.156.md` §8, this correction does not authorize another Phase B run. After Founder human review and merge, Mission Control will separately decide whether to authorize exactly one further diagnostic/non-production run using the corrected single-line Base64 transport path.
