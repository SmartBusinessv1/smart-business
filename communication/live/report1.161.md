# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — TRUST ANCHOR RUNTIME-DIAGNOSTIC REVIEW REPORT

**Report ID:** `report1.161`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.154.md`
**Date:** 2026-08-20

---

## 1. Exact Canonical `main` SHA Reviewed

`b54cac9a96169a9e65182a764b4e5cd7de749e67`

Confirmed via `git fetch origin && git rev-parse origin/main` followed by `git pull --ff-only origin main`. This is the merge commit for PR #349 (`instruction1.154.md` itself), containing the merged PR #347 correction (the `@=file://` serialization fix from the prior review) and the record of Phase B rerun #4's failure.

## 2. Exact Latest Failure Classified

**Provider-observed fact** (from `instruction1.154.md` §1): GC-38R Phase B rerun #4 — run *after* PR #347's `@=file://` correction was live on canonical `main` — again failed at `Create IAM Roles Anywhere trust anchor` with `ValidationException ... Error creating TrustAnchor. Bad certificate data`.

This is the single most important fact governing this review: **the previously-confirmed-correct AWS CLI shorthand file-loading syntax did not resolve the failure.** That rules out a *recurrence* of the original JSON-escaping-inside-shorthand defect (PR #347's fix for that specific defect is verified correct against AWS's own documented example for this exact command — see `report1.160.md` §5) and redirects this review toward causes upstream or independent of CLI request construction.

## 3. Exact Founder-Local Certificate Facts Treated as Evidence

Per `instruction1.154.md` §1, treated as **provider-observed/repository-adjacent fact** (Founder-performed local verification, not independently re-derived by this review since no CA private-key or full certificate access is authorized):

- local `openssl verify`-class self-verification succeeds (`...ca.cert.pem: OK`);
- Basic Constraints include `CA:TRUE, pathlen:0`;
- subject and issuer are self-signed, both identifying the Team LIPS non-production parser CA;
- validity: 2026-08-19 through 2036-08-16;
- SHA-256 fingerprint exactly `51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E`;
- exactly one PEM certificate with correct BEGIN/END boundaries.

**Notable gap in this evidence set, identified by this review (engineering inference, not asserted by the instruction):** the Founder's locked verification list does not include the certificate's **Key Usage** extension or its **signing algorithm**. Both are load-bearing per AWS's own documented trust-anchor certificate requirements (§4 below). This gap is treated below as a genuinely open, testable hypothesis — not assumed true or false.

## 4. Official AWS Documentation Relied Upon

Retrieved via `WebFetch`/`WebSearch` against current AWS documentation:

1. **`https://docs.aws.amazon.com/rolesanywhere/latest/userguide/trust-model.html`** ("Signature validation" section) — verbatim:

   > "Certificates used as trust anchors must satisfy the same requirements for signature algorithm, but with the following differences: The key usage MUST include `Certificate Sign`, and MAY include `CRL Sign`... Basic constraints MUST include `CA: true`."
   >
   > "The signing algorithm MUST include `SHA256` or stronger. `MD5` and `SHA1` signing algorithms are rejected."

2. **`https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html`** ("Loading a file as a shorthand syntax value") — already relied upon in `report1.160.md`; re-confirmed current and re-verified the corrected `@=file://` syntax is exactly AWS's own documented pattern for this command.

3. **Community-corroborated, non-official evidence** (explicitly classified as such, not as AWS-documented fact): multiple independent GitHub Community Discussions (`orgs/community/discussions/37899`, `orgs/community/discussions/12882`, and related third-party posts) report that the GitHub Actions **`workflow_dispatch` web UI's plain `string` input field does not reliably preserve embedded newlines when a user pastes multi-line text into it** — one contributor's exact words: "the input will ignore the new lines and the string will not keep the format." This is a widely-reported behavioral limitation of the GitHub Actions "Run workflow" web form specifically; it is not addressed in GitHub's own official Actions documentation as a guaranteed contract either way, so it is treated here as strong but non-authoritative corroborating evidence, not as an official specification.

## 5. Findings

### 5.1 GitHub Input Transport

**Classification: unresolved, but the single most evidence-supported hypothesis.**

`instruction1.153.md` §6 (the Founder execution sequence actually followed for rerun #4) directs: "Open GitHub Actions → ... Paste only the public CA certificate into `trust_anchor_ca_certificate_pem`" — i.e., the certificate was supplied by pasting multi-line PEM text into the GitHub Actions **web UI**'s "Run workflow" form field for a plain `type: string` input. This is exactly the scenario the community reports in §4 item 3 describe as unreliable for preserving embedded newlines.

If the web UI collapsed or otherwise altered the certificate's internal newlines before `github.event.inputs.trust_anchor_ca_certificate_pem` was ever populated, then the corrupted value would have been written verbatim to `/tmp/parser-pki/ca.pem` by the existing `printf '%s' "${CA_CERTIFICATE_PEM}" > ...` line — a step this review re-confirms is not itself defective (`printf '%s'` performs no escape interpretation and writes its argument byte-for-byte) — and **every subsequent step, including the already-corrected `@=file://` AWS CLI invocation, would faithfully transmit that corrupted file to AWS exactly as written.** This would fully explain why the PR #347 correction (verified correct in isolation) did not resolve the observed failure: the defect, if this hypothesis is right, is upstream of the CLI invocation entirely.

This is not proven from the evidence available to this review alone. It is a well-corroborated, non-officially-documented behavioral report about the GitHub product, not an AWS specification, and this review has no access to the actual bytes that reached the runner during rerun #4 to confirm it directly.

### 5.2 Runner-Side Certificate Integrity

**Classification: cannot be determined from static review alone — this is precisely the gap the diagnostic patch in §7 is designed to close.**

No log, artifact, or byte-level evidence from the actual failed runner execution is available to this review (per `instruction1.154.md`'s read-only, no-rerun scope, none was generated to inspect). The existing workflow contained no instrumentation that would have distinguished "runner file matches the Founder's certificate" from "runner file was altered in transit" — both would currently present identically as an opaque `Bad certificate data` response from AWS, with the operator unable to tell which layer is at fault without new instrumentation.

### 5.3 AWS CLI Request Construction

**Classification: verified correct; not a currently open hypothesis.**

Re-reviewed against the same AWS documentation cited in `report1.160.md`. The corrected line:

```bash
--source "sourceType=CERTIFICATE_BUNDLE,sourceData={x509CertificateData@=file:///tmp/parser-pki/ca.pem}" \
```

remains byte-for-byte identical to AWS's own documented worked example for `aws rolesanywhere create-trust-anchor` (`sourceData={x509CertificateData@=file://root-ca.crt},sourceType="CERTIFICATE_BUNDLE"`), modulo the absolute-path-vs-relative-path `file://` form difference, which the same AWS documentation explicitly covers ("If the required path begins with a '/', the result is three slash characters: `file:///folder/file`" — exactly the form already in use). No further request-construction defect was identified, and per `instruction1.154.md` §3's own instruction not to assume another serialization defect without demonstration, this review does not propose any further change to this line. The recurrence of the identical failure after this line was already corrected is itself the strongest available evidence that the request-construction layer is not the (sole) remaining cause.

### 5.4 Certificate / Provider Requirements

**Classification: genuinely open hypothesis, supported by a concrete, locally-reproduced finding (see below).**

AWS's documented trust-anchor certificate requirements (§4 item 1) require Key Usage to include `Certificate Sign`. The Founder's locked evidence set (§3) does not confirm this property was checked, only Basic Constraints, self-signature, validity, and fingerprint.

This review performed a **local, static reproduction** (not against the real CA, and not touching any private key) to test how plausible an inadvertent Key-Usage omission is: generating a throwaway synthetic self-signed CA certificate via the same class of command a CA-generation process might reasonably use.

- A synthetic CA generated with `openssl req -x509 -new ... -addext "keyUsage=critical,keyCertSign,cRLSign"` correctly produces `Key Usage: Certificate Sign, CRL Sign` and passes this review's diagnostic check.
- A synthetic CA generated with a **plain** `openssl req -x509 -new -key ... -days N -subj "..."` invocation — i.e., without an explicit Key Usage extension flag — reproducibly produces a certificate with `Basic Constraints: CA:TRUE` present (the locally-installed OpenSSL 3.5.7 adds this by default) but **no Key Usage extension at all**. Such a certificate would pass every check in the Founder's own locked verification list (self-verifies, `CA:TRUE` present, valid BEGIN/END, computable fingerprint) while still lacking the `Certificate Sign` bit AWS's trust-anchor requirement mandates.

This does not establish that the actual Team LIPS non-production parser CA is missing this extension — this review has no access to that certificate's full `openssl x509 -text` output, only the narrower locked fact set in §3. It establishes that **the specific gap in the currently available evidence (Key Usage not yet confirmed) corresponds to a realistic, easily-reproduced real-world CA-generation gap**, making it a genuine, not merely theoretical, open hypothesis alongside §5.1.

## 6. Distinguishing Evidence From Inference — Summary

| Statement | Class |
|---|---|
| Rerun #4 failed at `CreateTrustAnchor` with `Bad certificate data`, after the PR #347 fix was live | Provider-observed fact (`instruction1.154.md` §1) |
| Founder-local certificate facts (self-verify OK, `CA:TRUE, pathlen:0`, self-signed, validity, SHA-256 fingerprint, single well-formed PEM) | Provider-observed fact, Founder-supplied (`instruction1.154.md` §1) |
| AWS requires trust-anchor certificates to have Key Usage including `Certificate Sign` and signing algorithm SHA256-or-stronger | AWS official documentation (§4 item 1) |
| The corrected `@=file://` syntax matches AWS's own documented example exactly | AWS official documentation (§4 item 2), re-confirmed by this review |
| GitHub Actions `workflow_dispatch` web UI does not reliably preserve newlines pasted into a `string` input | Community-corroborated, non-official (§4 item 3) — **not** AWS or GitHub official documentation |
| A plain `openssl req -x509 -new` invocation omits Key Usage while still setting `CA:TRUE` (OpenSSL 3.5.7) | This review's own local, static, synthetic-certificate reproduction (§5.4) — reproducible, but not evidence about the *actual* Team LIPS CA |
| Whether the actual runner-side file matched the Founder's certificate during rerun #4 | **Unknown** — no such evidence exists yet; this is the gap the diagnostic patch is built to close |
| Whether the actual Team LIPS CA certificate has the required Key Usage extension | **Unknown** — outside this review's evidence access; the same diagnostic patch will surface it on the next authorized run |

## 7. Proposed Diagnostic Patch

**Exact file:** `.github/workflows/aws-gc38r-parser-deploy.yml` — the `Create IAM Roles Anywhere trust anchor` step only.

**Exact diff** (57 lines added, 0 removed, inserted between the existing `printf '%s' "${CA_CERTIFICATE_PEM}" > /tmp/parser-pki/ca.pem` line and the existing `aws rolesanywhere create-trust-anchor` invocation — no existing line altered):

```diff
             mkdir -p /tmp/parser-pki
             printf '%s' "${CA_CERTIFICATE_PEM}" > /tmp/parser-pki/ca.pem

+            # Runner-side certificate integrity diagnostic (instruction1.154.md
+            # §4). Fails closed, before any AWS API call, if the certificate
+            # that actually reached this runner does not match the
+            # Founder-verified local certificate -- distinguishing an
+            # input-transport/transcription defect from a genuine provider-side
+            # rejection. Never prints the PEM body; never touches any private
+            # key; only non-secret metadata (byte/line counts, marker counts,
+            # SHA-256 fingerprint, Basic Constraints, Key Usage, signature
+            # algorithm) is logged.
+            cert_byte_count="$(wc -c < /tmp/parser-pki/ca.pem | xargs)"
+            cert_line_count="$(wc -l < /tmp/parser-pki/ca.pem | xargs)"
+            begin_marker_count="$(grep -c '^-----BEGIN CERTIFICATE-----$' /tmp/parser-pki/ca.pem || true)"
+            end_marker_count="$(grep -c '^-----END CERTIFICATE-----$' /tmp/parser-pki/ca.pem || true)"
+            echo "GC38R_CERT_DIAGNOSTIC byte_count=${cert_byte_count} line_count=${cert_line_count} begin_markers=${begin_marker_count} end_markers=${end_marker_count}"
+
+            if [ "${begin_marker_count}" != "1" ] || [ "${end_marker_count}" != "1" ]; then
+              echo "GC38R_CERT_DIAGNOSTIC_FAIL reason=marker_count_not_exactly_one" >&2
+              exit 1
+            fi
+
+            if ! openssl x509 -in /tmp/parser-pki/ca.pem -noout -text > /tmp/parser-pki/ca-cert-text.txt 2>/tmp/parser-pki/ca-cert-parse-error.txt; then
+              echo "GC38R_CERT_DIAGNOSTIC_FAIL reason=openssl_parse_failed" >&2
+              cat /tmp/parser-pki/ca-cert-parse-error.txt >&2
+              exit 1
+            fi
+
+            computed_fingerprint="$(openssl x509 -in /tmp/parser-pki/ca.pem -noout -fingerprint -sha256 | sed -E 's/^.*Fingerprint=//')"
+            echo "GC38R_CERT_DIAGNOSTIC computed_sha256_fingerprint=${computed_fingerprint}"
+
+            expected_fingerprint="51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E"
+            if [ "${computed_fingerprint}" != "${expected_fingerprint}" ]; then
+              echo "GC38R_CERT_DIAGNOSTIC_FAIL reason=fingerprint_mismatch expected=${expected_fingerprint} actual=${computed_fingerprint}" >&2
+              echo "The certificate that reached this runner does not match the Founder-verified local certificate. This indicates an input-transport/transcription defect (for example, newline loss when pasting into the GitHub Actions 'Run workflow' web form), not a certificate-content problem. Re-supply the certificate via a channel that preserves embedded newlines (for example 'gh workflow run ... -f trust_anchor_ca_certificate_pem=\"\$(cat ca.pem)\"') rather than pasting into the web form, and do not regenerate the CA." >&2
+              exit 1
+            fi
+            echo "GC38R_CERT_DIAGNOSTIC fingerprint_match=true"
+
+            basic_constraints="$(grep -A1 'X509v3 Basic Constraints' /tmp/parser-pki/ca-cert-text.txt | tail -1 | xargs)"
+            key_usage="$(grep -A1 'X509v3 Key Usage' /tmp/parser-pki/ca-cert-text.txt | tail -1 | xargs)"
+            signature_algorithm="$(grep 'Signature Algorithm' /tmp/parser-pki/ca-cert-text.txt | head -1 | xargs)"
+            echo "GC38R_CERT_DIAGNOSTIC basic_constraints=\"${basic_constraints}\" key_usage=\"${key_usage}\" signature_algorithm=\"${signature_algorithm}\""
+
+            case "${basic_constraints}" in
+              *CA:TRUE*) ;;
+              *) echo "GC38R_CERT_DIAGNOSTIC_FAIL reason=basic_constraints_not_ca_true" >&2; exit 1 ;;
+            esac
+
+            # IAM Roles Anywhere trust-anchor certificate requirement
+            # (docs.aws.amazon.com/rolesanywhere/latest/userguide/trust-model.html,
+            # "Signature validation"): key usage MUST include Certificate Sign.
+            case "${key_usage}" in
+              *"Certificate Sign"*) ;;
+              *) echo "GC38R_CERT_DIAGNOSTIC_FAIL reason=key_usage_missing_certificate_sign" >&2; exit 1 ;;
+            esac
+
+            echo "GC38R_CERT_DIAGNOSTIC_PASS"
+
             ta_response="$(aws rolesanywhere create-trust-anchor \
```

### Rationale

This is a **diagnostic**, not a blind respray of the CLI invocation the instruction explicitly warns against ("Do not assume another serialization defect unless demonstrated"). It answers both open hypotheses from §6 with direct, runner-side evidence on the *next* authorized attempt, before any AWS API call is made:

- If the computed SHA-256 fingerprint does not match the Founder's locked known value, the workflow now fails **immediately and clearly**, with an explicit `fingerprint_mismatch` reason and an actionable remediation hint — instead of opaquely failing three steps later inside AWS's own error message. This directly tests §5.1/§5.2.
- If the fingerprint matches but Key Usage lacks `Certificate Sign` (or Basic Constraints lacks `CA:TRUE`), the workflow fails with an explicit `key_usage_missing_certificate_sign` (or `basic_constraints_not_ca_true`) reason. This directly tests §5.4.
- If every diagnostic check passes and `CreateTrustAnchor` *still* fails with `Bad certificate data`, that outcome itself becomes strong evidence that the cause lies outside every hypothesis this review could evidence-check (for example, a certificate property not exposed by this diagnostic's checks, or a genuinely provider-side condition) — narrowing the next investigation rather than repeating this one.

### Why no `--cli-input-json` / full-JSON-request change is proposed

`instruction1.154.md` §3/§4 permit replacing the `--source` argument with a JSON request form only "if official documentation and local static reproduction establish that this is the narrowest correction." Per §5.3, this review found no evidence that the request-construction layer is still defective — the recurrence of the identical failure after the request-construction layer was already corrected argues *against* it being the remaining cause, not for a further change there. Introducing a second, unevidenced change to the same line would violate §3's explicit instruction not to assume another serialization defect without demonstration, and would make it harder, not easier, to isolate which change (if either) actually mattered on the next run. No such change is proposed.

## 8. Static Validation Performed

- `js-yaml` parse of the corrected workflow: succeeds; 18 steps; same `on: workflow_dispatch` trigger; same `environment: aws-nonprod-parser`; same `if: github.ref == 'refs/heads/main'` branch gate — all unchanged.
- `bash -n` syntax check of the extracted step script (via a temporary local extraction, deleted before commit): clean, no syntax errors.
- **Local, static reproduction of the diagnostic logic itself**, against synthetic (non-CA, throwaway, immediately deleted) test certificates generated in this session, never touching the real CA or any private key:
  - a synthetic self-signed certificate generated with explicit `keyUsage=critical,keyCertSign,cRLSign` correctly produces `basic_constraints="CA:TRUE, pathlen:0"` and `key_usage="Certificate Sign, CRL Sign"`, and the diagnostic's `case` checks correctly report PASS for both;
  - a synthetic self-signed certificate generated **without** an explicit Key Usage extension (a plain `openssl req -x509 -new -subj ...` invocation) correctly produces `Basic Constraints: CA:TRUE` (OpenSSL 3.5.7 default) but an **empty** Key Usage field, and the diagnostic's `key_usage` `case` check correctly reports FAIL with `reason=key_usage_missing_certificate_sign` — confirming the diagnostic would have caught exactly this class of certificate-generation gap had it been present.
- `git diff --stat`: exactly 1 file changed, 57 insertions, 0 deletions — no existing line altered.
- Repository-wide grep confirms zero occurrences of `PARSER_TRUST_ANCHOR_CA_PRIVATE_KEY`, `ca.key`, `ca-private-key`, or CA generation/signing commands anywhere in the corrected file — identical to its pre-review state.
- Manual review confirms the diagnostic never prints the PEM body (`cat`/`echo` of the certificate's own content is never executed; only byte/line counts, marker counts, the SHA-256 fingerprint, and short extracted metadata strings are logged) and never reads, references, or requires any private key.
- Staged-diff secret-pattern scan: clean.

## 9. Confirmation — All Locked Controls Remain Unchanged

Confirmed, per `instruction1.154.md` §5: no IAM permission, deploy-role trust, RuntimeBoundary, GitHub OIDC configuration, GitHub Environment protection, account (`658980433673`), region (`ap-south-1`), Trust Anchor name/tags/enabled state, CA private-key custody, workload-role/Lambda permission, or S3 configuration was changed. No root or static credential was used, referenced, or required. No CA regeneration occurred or is proposed. No private-key access occurred at any point, for either the real CA or the throwaway synthetic test certificates (which were RSA keypairs generated, used, and permanently deleted entirely within this local review session, never touching any AWS account, GitHub secret, or the real Team LIPS CA).

## 10. Confirmation — No AWS Mutation or Rerun Occurred

Confirmed. This review consisted entirely of: reading the workflow file and prior reports at the cited canonical SHA; researching AWS/GitHub documentation via `WebFetch`/`WebSearch` (read-only); generating and testing synthetic throwaway certificates locally (no AWS or GitHub interaction); editing 57 lines of workflow YAML; and static validation (§8). No `aws` CLI command was run against any AWS account. No AWS resource was created, deleted, modified, or queried. The `aws-gc38r-parser-deploy.yml` workflow was not triggered or dispatched. No Phase B rerun occurred, and none is authorized by this review.

## 11. Final Disposition

`GC-38R TRUST ANCHOR DIAGNOSTIC REVIEW — NARROW DIAGNOSTIC/CORRECTION READY`

This disposition reflects a **diagnostic instrumentation patch**, not a proven fix — per §5, this review could not conclusively determine, from static evidence alone, which of the two open hypotheses (GitHub input-transport newline loss, or a Key-Usage gap in the actual CA certificate) explains the repeated failure, and it deliberately did not propose a second unevidenced change to the already-corrected CLI request-construction line. The diagnostic patch is designed to produce definitive, non-secret, runner-side evidence distinguishing between these hypotheses (or ruling out both) on the next authorized Phase B attempt, without itself requiring any AWS mutation, workflow dispatch, or Phase B rerun to prepare.

This report also recommends, for Mission Control's consideration alongside the code change — as an operational/process observation, not a code change and not something this review is authorized to act on unilaterally — that if the input-transport hypothesis is confirmed by the diagnostic, the Founder supply the certificate via `gh workflow run` with a `-f` field sourced from `$(cat ca.pem)` (which preserves embedded newlines through normal shell quoting) rather than pasting into the GitHub Actions web form, which is the specific mechanism the community reports in §4 describe as unreliable for multi-line values.

Per `instruction1.154.md` §7, this report and patch do not authorize a Phase B rerun. After human review and merge, Mission Control will decide whether another single non-production rerun is warranted.
