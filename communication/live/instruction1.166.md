# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — OFFLINE WORKLOAD CERTIFICATE SIGNING AUTHORIZATION

**Instruction ID:** `instruction1.166`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Founder
**Date:** 2026-08-22
**Status:** AUTHORIZATION PENDING FOUNDER HUMAN MERGE

---

## 1. Triggering Evidence

Phase B rerun #9 completed successfully and published the short-lived GitHub Actions artifact:

`gc38r-workload-csr-handoff`

The Founder has downloaded and extracted the fresh run #9 handoff outside the repository and confirmed local custody of:

- `workload-certificate-signing-request.csr`
- `workload-private-key.pem`

Run #9 is the authoritative workload keypair/CSR set. Any earlier failed-run or stale workload handoff material must not be used.

The Founder-controlled Trust Anchor CA remains:

- CA certificate: `C:\TeamLIPS-Offline-PKI\teamlips-sb-np-parser-ca.cert.pem`
- CA private key: `C:\TeamLIPS-Offline-PKI\teamlips-sb-np-parser-ca.key.pem`

The CA private key remains offline and must never be placed in GitHub, CI, chat, AWS workflow inputs, Cloudflare configuration, or any repository path.

---

## 2. Authorization

After this instruction is human-reviewed and merged to canonical `main`, Mission Control authorizes exactly one local, Founder-controlled offline signing operation for the fresh run #9 CSR.

The resulting certificate is the non-production IAM Roles Anywhere end-entity certificate for the existing workload identity:

`/O=Team LIPS/OU=Smart Business Non-Production/CN=Smart Business Parser Ingress Caller`

This authorization permits only:

1. local verification of the CSR;
2. local verification that `workload-private-key.pem` matches the CSR public key;
3. creation of a local OpenSSL extension file for the end-entity certificate;
4. signing the fresh run #9 CSR with the Founder-controlled CA private key;
5. local verification of the resulting certificate and chain;
6. retention of the resulting workload certificate plus its existing workload private key for the next separately authorized secret-provisioning/runtime-verification step.

No AWS API call, GitHub workflow rerun, IAM change, Trust Anchor/Profile change, Cloudflare secret write, production action, Supabase action, Lovable action, or Phase C runtime invocation is authorized by this instruction.

---

## 3. Required End-Entity Certificate Profile

The certificate produced under this authorization must satisfy the current AWS IAM Roles Anywhere end-entity requirements and the locked Smart Business non-production identity:

- X.509 version 3;
- `basicConstraints = critical, CA:FALSE`;
- `keyUsage = critical, digitalSignature`;
- SHA-256 or stronger certificate-signing algorithm;
- subject preserved from the authoritative run #9 CSR;
- issued directly by the existing Founder-controlled Smart Business non-production parser CA;
- no CA capability;
- no certificate-signing or CRL-signing key usage;
- no unrelated SAN, EKU, policy OID, or privilege-bearing extension added unless separately authorized.

AWS IAM Roles Anywhere requires end-entity certificates to be X.509v3; if Basic Constraints contains a CA field it must be false; Key Usage must include Digital Signature; and the certificate signing algorithm must use SHA-256 or stronger. This instruction chooses the strict minimal profile above rather than adding optional extensions.

---

## 4. Validity

For this non-production GC-38R verification certificate, use a short **30-day validity** from issuance.

This is intentionally bounded because the certificate is for controlled non-production verification only. The EIS requires test certificates/principals to be retired after acceptance evidence collection; this instruction does not establish a production certificate lifetime or rotation policy.

---

## 5. Local Custody Boundary

Perform the signing only under the offline PKI workspace, preferably:

`C:\TeamLIPS-Offline-PKI\GC38R-Workload-Run9`

The following must never be committed, uploaded, pasted into chat, printed into CI logs, or stored in GitHub artifacts after local download:

- `workload-private-key.pem`
- `teamlips-sb-np-parser-ca.key.pem`
- CA passphrase
- any private-key plaintext or derived secret material

The public CSR and issued workload certificate are not secret, but they should still remain within the controlled mission workflow until the next handoff is authorized.

---

## 6. Verification Required Before Completion

The Founder must verify locally, without exposing private-key contents:

1. CSR signature verifies successfully;
2. CSR subject is exactly the expected Smart Business Parser Ingress Caller identity;
3. workload private key public key matches the CSR public key;
4. issued certificate chains successfully to `teamlips-sb-np-parser-ca.cert.pem`;
5. issued certificate subject matches the CSR subject;
6. issuer matches the Smart Business non-production parser CA;
7. `CA:FALSE` is present;
8. Key Usage contains `Digital Signature` and does not contain Certificate Sign;
9. signature algorithm is SHA-256 or stronger;
10. certificate validity is approximately 30 days;
11. workload private key remains local and undisclosed.

Only non-secret verification output may be reported back to Mission Control. Do not paste any private key, passphrase, full secret, or private-key-derived material.

---

## 7. Stop Conditions

Stop immediately and report only the non-secret error if any of the following occurs:

- CSR signature verification fails;
- CSR subject differs from the locked workload identity;
- workload private key does not match the CSR;
- CA certificate/private key mismatch is detected;
- OpenSSL requests or exposes unexpected key material;
- resulting certificate has `CA:TRUE`;
- resulting certificate lacks `Digital Signature` key usage;
- resulting certificate contains an unexpected privilege-bearing extension;
- certificate chain verification fails;
- any operation would require placing the CA private key outside Founder-controlled offline custody.

Do not regenerate the CA. Do not regenerate the workload keypair unless separately authorized.

---

## 8. Completion Boundary

Successful completion of this instruction means only:

`GC-38R OFFLINE WORKLOAD CERTIFICATE SIGNING — PASS`

It does not mean Phase C is complete and does not authorize Cloudflare secret provisioning, Roles Anywhere `CreateSession`, Lambda invocation, production migration, or mission acceptance.
