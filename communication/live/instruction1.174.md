# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — C5 AWS4-X509 DECIMAL SERIAL CORRECTION AUTHORIZATION

**Instruction ID:** `instruction1.174`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Date:** 2026-08-26

---

## 1. Trigger

This instruction follows the human-reviewed merge of `report1.172.md` / PR #383.

The canonical review established one local AWS4-X509 defect in `src/lib/parser-ingress/roles-anywhere.ts`: the certificate serial number placed in the Authorization header `Credential=` field is encoded in hexadecimal, while AWS IAM Roles Anywhere requires the decimal representation of that same certificate serial number.

This instruction authorizes only the minimum code correction and verification required to replace the hexadecimal `Credential=` serial representation with decimal.

---

## 2. Authorized Implementation Scope

Claude Engineering may:

1. Modify `src/lib/parser-ingress/roles-anywhere.ts` only as necessary to preserve the existing DER/X.509 serial-number extraction while returning/using the unsigned certificate serial number in decimal form for the Authorization header `Credential=` component.
2. Rename the helper and local variable(s) if required for semantic accuracy, for example from `extractSerialNumberHex` / `serialHex` to a decimal-specific name.
3. Implement the conversion using an exact unsigned big-endian integer conversion such as `BigInt`, with no precision loss.
4. Add focused regression tests proving:
   - a known DER certificate serial number is converted to the correct decimal string;
   - the Authorization-header credential construction uses decimal, not hexadecimal;
   - leading DER sign-padding handling remains correct;
   - existing AWS4-X509 signing behavior outside this serial representation remains unchanged.
5. Run the existing full automated test suite, type-checking, linting, and secret-pattern checks.
6. Open a dedicated implementation PR for Founder human review.

No redeploy or runtime retry is authorized until that implementation PR is human-reviewed and merged.

---

## 3. Required Preservation

The correction must preserve without redesign:

- endpoint, method, request body, credential scope, canonical request, canonical headers, signed headers, payload hash, canonical-request hash, string-to-sign, RSA signing algorithm, signature encoding, timestamp format, certificate-header encoding, optional certificate-chain handling, and response parsing;
- the existing non-extractable private-key handling;
- the existing temporary sanitized diagnostic categorization added for Phase C;
- existing client-facing generic error behavior;
- existing server-only placement of certificate/private-key use.

Do not change unrelated signing logic merely because the file is being edited.

---

## 4. Security Boundaries

Do not log, print, persist, expose, copy into tests, or place in repository artifacts any real:

- workload private key;
- CA private key or CA passphrase;
- certificate/private-key pair beyond already-public certificate material when genuinely necessary;
- Authorization header;
- canonical request;
- string-to-sign;
- raw signature;
- temporary AWS credentials;
- provider response body;
- presigned S3 fields.

Synthetic fixtures used in tests must be clearly non-production and non-secret.

---

## 5. Explicitly Not Authorized

This instruction does not authorize:

- any AWS IAM, RuntimeBoundary, Trust Anchor, Profile, Role, policy, certificate, Lambda, Function URL, S3, or account mutation;
- production changes of any kind;
- production Supabase migration or access;
- Cloudflare production action;
- Lovable publication;
- DNS or R2 changes;
- Product Truth changes;
- new parser/business behavior;
- removal of the temporary diagnostic surface before C5 passes;
- Stage 21 or later lifecycle work.

---

## 6. Pull Request and Human Review

Implementation must use a dedicated branch and dedicated PR.

Claude Engineering must not self-merge.

The PR must clearly state:

- the exact previous hexadecimal behavior;
- the exact decimal correction;
- why the correction is limited to the Authorization `Credential=` serial representation;
- regression evidence;
- confirmation that no AWS or production action occurred.

After Founder human review and merge, Claude may continue only when Mission Control explicitly authorizes the non-production redeploy/C5 retry or when such redeploy/retry is already explicitly permitted by the next canonical instruction.

---

## 7. Stop Conditions

STOP and report instead of broadening scope if:

- the decimal conversion requires changes beyond the certificate serial representation;
- the existing DER extraction is found to be incorrect in another material way;
- a new signing-spec discrepancy is discovered;
- any AWS-side mutation appears necessary;
- any secret or credential exposure risk appears;
- production would need to be touched.

---

## 8. Expected Disposition

If implementation and tests succeed, open the dedicated human-review PR and report:

`GC-38R C5 AWS4-X509 DECIMAL SERIAL CORRECTION — IMPLEMENTED, AWAITING HUMAN MERGE`

Do not redeploy under this instruction before human merge.
