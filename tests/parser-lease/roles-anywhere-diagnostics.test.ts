// SB-P-1.11-GC-38R -- instruction1.172.md: focused verification that the
// temporary sanitized diagnostic categorization added to
// src/lib/parser-ingress/roles-anywhere.ts and
// src/server-functions/parser-lease.ts's categorizeAwsCredentialError
// never forwards certificate/key/provider content, only a small fixed set
// of non-secret category strings -- and safely collapses anything else to
// a generic fallback. Removed alongside the rest of this temporary
// instrumentation once GC-38R Phase C C5 evidence is captured.
import { describe, it, expect } from "vitest";
import { createRolesAnywhereSession } from "@/lib/parser-ingress/roles-anywhere";
import { categorizeAwsCredentialError } from "@/server-functions/parser-lease";

// A throwaway, self-signed, 1-day-validity certificate generated solely for
// this test (openssl req -new -x509 ...), never used for anything else and
// never matched against any real AWS Trust Anchor. Public certificate
// material only -- no private key below is a real, usable key.
const THROWAWAY_CERT_PEM = `-----BEGIN CERTIFICATE-----
MIIDKTCCAhGgAwIBAgIUP/8auRU16lqN4Y3zablTdZ0P+iwwDQYJKoZIhvcNAQEL
BQAwJDEiMCAGA1UEAwwZdGhyb3dhd2F5LWRpYWdub3N0aWMtdGVzdDAeFw0yNjA4
MjYxMzU1NTdaFw0yNjA4MjcxMzU1NTdaMCQxIjAgBgNVBAMMGXRocm93YXdheS1k
aWFnbm9zdGljLXRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC5
hjPMKr2OXo1QSpxLJtfMSiRR7GpTaai3TZ35LR8utlFR6cMLBLtpJEm3L4NEAU6X
dEkCR4sSVtFs0MJUTRqmXZAqnG4qqAibgTuTwmkw8Ye2JwUQodtWuyrT5EJhqzS2
UXA3Z1+CNXKOe4DTubc3EKGJdx796UV2Ar3WFOR/YxgSxf759bzdrmEOLmXWHYOU
1PnuEAnSLKdEi+DWtZOEQRUhL4dsNppEregLgKyVUSrhV0NzPk91N0XTrhD6qk82
R0akC0WpbQ/sGtHIvhSbM5NZezPH8srY8cqrhFef+oj05SByQ0fWufmuCkHk/W+2
vfs6P451gfhL0JGgKnW9AgMBAAGjUzBRMB0GA1UdDgQWBBRZCFsDg6+v2nbiI2ia
U552x5qZfTAfBgNVHSMEGDAWgBRZCFsDg6+v2nbiI2iaU552x5qZfTAPBgNVHRMB
Af8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQAMQNDoRyJ5EOI2jGLDHdKZgt3e
YUtPLH2MVSPmCLPzxaX1PmNMd5bJRSbjiiw6GVayfltarC1fFUcl65SYBfI5TDWn
vx3em+BKjK1q0ItA1c51vu2X1CmIeK7m8rTbr7AC9f9WaJ8Q1UnxxfNZvczWdvwb
mBYmIL09skGAsBuZu6TPDQmC97cG/tphwRRA/O7ya4fOZTg+jTkZmuNNJNFYY7rz
EetCn6LasVpSuyJ0RnP65u/YPS3GzEaqUNqf644xbg6ZI2xw6v5kovKfft7Z6zgo
mVtdCUE7uRX/GtgvOtaAyr+ovqj6fY2J5ahnDW+ORYkq8aCYcIMZrKKRFYQu
-----END CERTIFICATE-----`;

const BASE_PARAMS = {
  region: "ap-south-1",
  trustAnchorArn: "arn:aws:rolesanywhere:ap-south-1:000000000000:trust-anchor/synthetic",
  profileArn: "arn:aws:rolesanywhere:ap-south-1:000000000000:profile/synthetic",
  roleArn: "arn:aws:iam::000000000000:role/synthetic",
  durationSeconds: 900,
  certificateChainPem: "",
};

describe("createRolesAnywhereSession -- sanitized categorization", () => {
  it("categorizes malformed certificate PEM as certificate_parse_failed, never the raw parse error", async () => {
    await expect(
      createRolesAnywhereSession({
        ...BASE_PARAMS,
        certificatePem: "not a certificate at all",
        privateKeyPem: "irrelevant, never reached",
      }),
    ).rejects.toThrow("certificate_parse_failed");
  });

  it("categorizes an invalid private key (valid certificate) as private_key_import_failed, never the raw WebCrypto error", async () => {
    await expect(
      createRolesAnywhereSession({
        ...BASE_PARAMS,
        certificatePem: THROWAWAY_CERT_PEM,
        privateKeyPem:
          "-----BEGIN PRIVATE KEY-----\nbm90IGEgcmVhbCBrZXk=\n-----END PRIVATE KEY-----",
      }),
    ).rejects.toThrow("private_key_import_failed");
  });
});

describe("categorizeAwsCredentialError -- allowlist safety", () => {
  const knownCategories = [
    "certificate_parse_failed",
    "private_key_import_failed",
    "signature_failed",
    "create_session_network_failed",
    "create_session_malformed_response",
  ];

  it.each(knownCategories)("passes a known category (%s) through unchanged", (category) => {
    expect(categorizeAwsCredentialError(new Error(category))).toBe(category);
  });

  it("passes a well-formed create_session_http_failed:<status> message through unchanged", () => {
    expect(categorizeAwsCredentialError(new Error("create_session_http_failed:403"))).toBe(
      "create_session_http_failed:403",
    );
  });

  it("collapses an arbitrary/unrecognized error message to the generic fallback, never forwarding it", () => {
    const suspiciousMessage =
      'raw provider body: {"secretAccessKey":"should-never-appear-in-a-log"}';
    expect(categorizeAwsCredentialError(new Error(suspiciousMessage))).toBe(
      "unknown_local_failure",
    );
  });

  it("collapses a non-Error thrown value to the generic fallback", () => {
    expect(categorizeAwsCredentialError("a plain string, not an Error")).toBe(
      "unknown_local_failure",
    );
    expect(categorizeAwsCredentialError(undefined)).toBe("unknown_local_failure");
  });
});
