# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — CA CERTIFICATE SERIALIZATION WORKFLOW CORRECTION REPORT

**Report ID:** `report1.160`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.152.md`
**Date:** 2026-08-20

---

## 1. Exact Instruction Executed

`communication/live/instruction1.152.md` — SB-P-1.11-GC-38R CA Certificate Serialization Workflow Correction Review, mode `BOUNDED WORKFLOW CORRECTION REVIEW + IMPLEMENTATION PROPOSAL ONLY`.

## 2. Exact Canonical `main` SHA Reviewed

`60bd148f229fd94c14e48e258c7277222eb800b3`

Confirmed via `git fetch origin && git rev-parse origin/main` followed by `git pull --ff-only origin main`. This is the merge commit for PR #346 (`instruction1.152.md` itself), one commit past the `2831057...` baseline the instruction's §1 cites for "GC-38R Phase B rerun #3." No unexpected drift was found on `main`.

## 3. Exact Workflow Lines/Path Reviewed

`.github/workflows/aws-gc38r-parser-deploy.yml`, the `Create IAM Roles Anywhere trust anchor` step (`id: roles_anywhere`), specifically the `aws rolesanywhere create-trust-anchor` invocation's `--source` argument (pre-correction, at that commit):

```bash
ta_response="$(aws rolesanywhere create-trust-anchor \
  --name "${TRUST_ANCHOR_NAME}" \
  --source "sourceType=CERTIFICATE_BUNDLE,sourceData={x509CertificateData=$(python3 -c 'import sys,json; print(json.dumps(open(sys.argv[1]).read()))' /tmp/parser-pki/ca.pem)}" \
  --enabled \
  --tags key=Project,value=SmartBusiness key=Environment,value=nonprod \
         key=Workstream,value=SB-P-1.11 key=Component,value=lambda-parser \
         key=Owner,value=TeamLIPS key=ManagedBy,value=GitHubActions \
  --output json)"
```

The preceding line writing the Founder-supplied public CA certificate to disk was also reviewed and confirmed unaffected by the defect:

```bash
mkdir -p /tmp/parser-pki
printf '%s' "${CA_CERTIFICATE_PEM}" > /tmp/parser-pki/ca.pem
```

`printf '%s'` writes its argument verbatim with no backslash-escape interpretation, so `ca.pem` on disk correctly contains the exact PEM text (real newline bytes) supplied via the `trust_anchor_ca_certificate_pem` workflow input — this file-write step was not the source of the defect.

## 4. Root-Cause Classification

**CONFIRMED — repository/engineering-inference finding, cross-checked against AWS documentation (see §5).**

The `--source` argument is AWS CLI **shorthand syntax**: a distinct grammar from JSON, with its own escaping rules for structural characters (`,`, `=`, `{`, `}`, `[`, `]`) and no support for interpreting JSON string-escape sequences (`\n`, `\"`, etc.) inside a value.

The pre-correction line constructs the nested `x509CertificateData` value by running `python3 -c 'json.dumps(open(...).read())'`, which produces a **JSON string literal**: the certificate text wrapped in a pair of double quotes, with every real newline replaced by the two-character sequence backslash-`n`, and any literal double quote escaped with a leading backslash.

That JSON-string-literal text — quotes, backslash-`n` sequences, and all — is then substituted directly into the shorthand-syntax value slot. The AWS CLI's shorthand parser does not interpret `\n` as a newline; it is not a JSON parser at that point. The value IAM Roles Anywhere actually receives for `x509CertificateData` is therefore not the real multi-line PEM text but a single-line string containing literal backslash-`n` characters and stray leading/trailing quote characters — a string that fails X.509/PEM structural parsing on the AWS Roles Anywhere side. This is a well-formed engineering explanation for exactly the observed `ValidationException ... Bad certificate data`, and is consistent with the Founder's own independent local verification (§1 of the instruction) that the *source* PEM itself is structurally valid (correct BEGIN/END markers, correct Basic Constraints) — the certificate is not the problem; how it was serialized into the CLI invocation is.

## 5. AWS Documentation Relied Upon

Retrieved directly via `WebFetch` from the current AWS CLI User Guide (AWS CLI v2, "latest" documentation set):

`https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html` — section "Loading a file as a shorthand syntax value."

Verbatim from that page:

> "When using shorthand syntax where a value is large or complex, it is often easier to load in a file as a value. To load a file as a shorthand syntax value, the formatting will change slightly. Instead of `key=value` you'll use the `@=` operator instead of the `=` operator. The `@=` signifies to the AWS CLI that the value should be read as a file path and not a string."

The same page gives, as its own worked example, the identical command family this correction targets:

```text
$ aws rolesanywhere create-trust-anchor --name TrustAnchor \
    --source sourceData={x509CertificateData@=file://root-ca.crt},sourceType="CERTIFICATE_BUNDLE" \
    --enabled
```

This is a provider-documented, deterministic, raw-file-read mechanism: it bypasses shorthand syntax's value-parsing/escaping rules entirely, reading the file's bytes as-is. This is exactly the "AWS-supported file-loading syntax such as `x509CertificateData@=file://...`" the instruction's §3 item 4 asked to be checked, and it is confirmed valid and current for this exact command.

## 6. Exact Implemented Workflow Correction

Exactly one line changed, in exactly one file:

```diff
-              --source "sourceType=CERTIFICATE_BUNDLE,sourceData={x509CertificateData=$(python3 -c 'import sys,json; print(json.dumps(open(sys.argv[1]).read()))' /tmp/parser-pki/ca.pem)}" \
+              --source "sourceType=CERTIFICATE_BUNDLE,sourceData={x509CertificateData@=file:///tmp/parser-pki/ca.pem}" \
```

`git diff --stat` confirms exactly 1 file changed, 1 line modified (1 insertion, 1 deletion). No other line in the step, the workflow, or any other file was touched.

## 7. Before/After Serialization Behavior

**Before:** the bash `$(...)` command substitution invokes a Python subprocess to read the certificate file and re-encode it as a JSON string literal; that literal (with its wrapping quotes and backslash-escaped newlines) is spliced into the shorthand-syntax string as the value text. The AWS CLI shorthand parser treats this as an opaque string containing literal backslashes, `n` characters, and quote characters — not as a multi-line PEM. IAM Roles Anywhere's certificate parser rejects it as `Bad certificate data`.

**After:** the shorthand-syntax value uses `@=file:///tmp/parser-pki/ca.pem`. The AWS CLI itself opens and reads that file's raw bytes and uses them, unmodified, as the `x509CertificateData` value — no bash subshell, no Python invocation, no JSON re-encoding step, and no shorthand-escaping ambiguity. The certificate reaches IAM Roles Anywhere exactly as it exists on disk, which is exactly as it was supplied via the `trust_anchor_ca_certificate_pem` input.

## 8. Static Validation Performed

All seven items required by `instruction1.152.md` §7 were checked directly against the corrected file (no AWS call was made for any of them):

| # | Check | Result |
|---|---|---|
| 1 | Passes exact PEM file contents without unintended escaping/transformation | PASS — `@=file://` is a documented raw-byte file read; no bash/Python re-encoding step remains in this line |
| 2 | Preserves multiline certificate content correctly | PASS — same reasoning; the file's real newline bytes are read as-is |
| 3 | Does not print certificate contents unnecessarily to logs | PASS — no `cat`, `echo`, or content dump was added; only the file *path* (never treated as sensitive — it is the public CA certificate) appears in the command text, exactly as it did before this correction |
| 4 | Does not expose any private material | PASS — this line only ever touches the public CA certificate; the CA private key is not read, referenced, or handled anywhere in this file, before or after |
| 5 | Retains exact existing Trust Anchor name, tags, enabled state, account/region execution context, and idempotent reuse behavior | PASS — `--name "${TRUST_ANCHOR_NAME}"`, all six `--tags key=.../value=...` pairs, `--enabled`, the surrounding `existing_ta` idempotent-reuse `if`/`else`, and the job-level `AWS_REGION`/`EXPECTED_ACCOUNT_ID` environment are all byte-identical to the pre-correction file |
| 6 | Changes no IAM or security boundary | PASS — no IAM policy, RuntimeBoundary, OIDC trust condition, or GitHub Environment protection rule was touched |
| 7 | Changes no unrelated workflow stage | PASS — `git diff --stat` confirms exactly 1 line changed in exactly 1 file; every other step (S3 bucket, both IAM roles, Roles Anywhere profile creation, Lambda function, CSR generation, artifact handoff) is untouched |

Additionally performed, consistent with this mission's established discipline: `js-yaml` parse of the full corrected workflow file (18 steps, same `on: workflow_dispatch` trigger, same `environment: aws-nonprod-parser`, same `if: github.ref == 'refs/heads/main'` branch gate — all unchanged); a repository-wide grep confirming zero occurrences of `PARSER_TRUST_ANCHOR_CA_PRIVATE_KEY`, `ca.key`, `ca-private-key`, or CA generation/signing commands anywhere in the file (identical to its pre-correction state); a staged-diff secret-pattern scan (clean).

## 9. Confirmation — All Locked Controls Remain Unchanged

Confirmed, per `instruction1.152.md` §6:

- Founder-controlled offline CA private-key custody — unchanged; this correction never reads, generates, or references the CA private key.
- The workflow still receives only the public CA certificate, via the existing `trust_anchor_ca_certificate_pem` input — unchanged.
- No CA private key in GitHub, CI, AWS workflow inputs, repository, chat, or logs — confirmed, nothing in this correction introduces any such reference.
- Deployment identity remains GitHub Actions OIDC → `TeamLIPS-SB-NonProd-Parser-DeployRole` — unchanged (no trust-policy or role file touched).
- Account remains `658980433673`; region remains `ap-south-1` — unchanged (not referenced by this line; set elsewhere in the workflow, untouched).
- Protected environment remains `aws-nonprod-parser` — unchanged.
- The existing bounded `rolesanywhere:TagResource` policy (from the prior, separately-resolved correction) — unchanged; this correction touches only the `create-trust-anchor` `--source` argument, not any IAM policy document.
- RuntimeBoundary Version 2 — unchanged; not referenced by this line.
- Existing partial non-production resources — unaffected; this correction is a text-only edit and made no AWS call.
- No production authority exercised or required.

## 10. Confirmation — No AWS/Workflow Run Occurred

Confirmed. This review and correction consisted entirely of: reading the workflow file at the cited canonical SHA; researching AWS CLI documentation via `WebFetch`/`WebSearch` (read-only, no AWS API involved); editing one line of YAML text; and performing the static validations in §8 (git diff review, `js-yaml` parse, grep-based scans). The `aws-gc38r-parser-deploy.yml` workflow was not triggered, dispatched, or executed at any point. No `aws` CLI command was run against any AWS account. No AWS resource was created, deleted, modified, or queried. No Phase B rerun occurred, and none is authorized by this correction (`instruction1.152.md` §9) — that remains a separate later Mission Control decision after this correction is human-reviewed and merged.

## 11. Blockers or Unexpected Findings

None. No condition from `instruction1.152.md` §5 or the STOP list was encountered: the fix required no AWS permission change, no RuntimeBoundary modification, no IAM/OIDC trust modification, no manual AWS resource repair, no inspection of an unexpected existing Trust Anchor state (idempotent-reuse logic was reviewed but not exercised, since no AWS call was made), and no CA private-key access of any kind. The public CA certificate's own structural validity (already independently confirmed by the Founder per the instruction's §1) was not re-examined or second-guessed by this review — this correction addresses only how that already-valid certificate is serialized into the CLI invocation.

## 12. Final Disposition

`GC-38R CA SERIALIZATION REVIEW — NARROW WORKFLOW CORRECTION READY`

This disposition and the underlying correction do not authorize a Phase B rerun. Per `instruction1.152.md` §9, after this correction and report are human-reviewed and merged, Mission Control will assess whether independent review is required and will separately authorize any future workflow run.

---

## Sources

- [Loading a parameter from a file in the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html)
