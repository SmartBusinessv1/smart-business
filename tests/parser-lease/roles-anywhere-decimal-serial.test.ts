// SB-P-1.11-GC-38R -- instruction1.174.md: focused regression proof for the
// AWS4-X509 decimal-serial correction identified by report1.172.md's Phase
// A review. AWS IAM Roles Anywhere's CreateSession signing process requires
// the DECIMAL representation of the certificate serial number in the
// Authorization header's Credential= field; the implementation previously
// sent hexadecimal instead.
import { describe, it, expect, vi, afterEach } from "vitest";
import {
  createRolesAnywhereSession,
  extractSerialNumberDecimal,
} from "@/lib/parser-ingress/roles-anywhere";

// A throwaway, self-signed, 1-day-validity certificate generated solely for
// this test (openssl req -new -x509 -set_serial 0xDEADBEEF ...), never used
// for anything else and never matched against any real AWS Trust Anchor.
// Serial number 0xDEADBEEF was chosen deliberately: it contains hex letters
// (d, e, a, d, b, e, e, f), so a test asserting only "some digit string
// came out" could never accidentally pass if the hex-vs-decimal defect were
// reintroduced -- decimal (3735928559) and hex (deadbeef) are unmistakably
// different strings. Its DER encoding also requires a leading 0x00
// sign-padding byte (confirmed via `openssl x509 -outform DER` byte
// inspection: `02 05 00 DE AD BE EF`), exercising the existing
// leading-zero-stripping logic, which this correction leaves untouched.
const THROWAWAY_CERT_PEM = `-----BEGIN CERTIFICATE-----
MIIDDjCCAfagAwIBAgIFAN6tvu8wDQYJKoZIhvcNAQELBQAwHjEcMBoGA1UEAwwT
ZGVjaW1hbC1zZXJpYWwtdGVzdDAeFw0yNjA4MjYxNDQ2NTdaFw0yNjA4MjcxNDQ2
NTdaMB4xHDAaBgNVBAMME2RlY2ltYWwtc2VyaWFsLXRlc3QwggEiMA0GCSqGSIb3
DQEBAQUAA4IBDwAwggEKAoIBAQC1enA4CWnrCqmhmMFXpAC2HI23Q5UHtqKy6kxc
fQOIYrtBV/tYLREmHmuhzuk0Qts8o8NxqwmHXuFQKj1npAsjd4Y6C/vjD/xJStkf
3auslhyTXy937QstgHA2y5F7jh7SZWtnPmtctjm5j1ZsiZj+sHF7YDzOj3tgBt/d
dyvq2fEGPPMYCnO5LrOHDumtIvNeMNGGDcppDwKgcq1Q/HewJx8QV54ZmuVcGzoP
uTGOQE9GZvUo1zm/JqCNikiAm366sI5TArH8sR84IKnU9bPAzbCSXu+N0tFFOzV8
hwbs8SSfch/9h7UV2C3Z/j79DtavqYc2GQp0JtIEwDpS636nAgMBAAGjUzBRMB0G
A1UdDgQWBBRqG3otO8rGlAwLb0AlRbzBDrObTDAfBgNVHSMEGDAWgBRqG3otO8rG
lAwLb0AlRbzBDrObTDAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IB
AQBA7QFNkAnFoksJBZ9YBOZwPb3bWz0lyAZcW6d88z7xRudqouAKh/ABQy386/nX
yiyvJ3eI/x5gFh7pT0dz92hjwveDaqEo97oODLqbw3DvianTphmvx84zqmCl0oCa
ndY2bLJuPeEx71wHt/6XN+sbHt8Zi6oMemnqcv7trd920b2RGvou/2WzUYzSeGOB
DATY9S9ZM1OUyNrndXj3sfYvIUPgQXGqA3gnfz5s4TB/og8yIJkUbkQDsKRDI+0/
GqYs2yMLFM6XkSJK0VG3csEDGxsU5f1+ZRMj7AhvwUSCGj9yosVn8Yr336Mlbbix
GuKlW/bR8VIxYfSm6fzjfadA
-----END CERTIFICATE-----`;

// The matching PKCS8 private key for the throwaway certificate above --
// generated solely for this test, never used for anything else, never a
// real workload/CA key.
const THROWAWAY_PRIVATE_KEY_PEM = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC1enA4CWnrCqmh
mMFXpAC2HI23Q5UHtqKy6kxcfQOIYrtBV/tYLREmHmuhzuk0Qts8o8NxqwmHXuFQ
Kj1npAsjd4Y6C/vjD/xJStkf3auslhyTXy937QstgHA2y5F7jh7SZWtnPmtctjm5
j1ZsiZj+sHF7YDzOj3tgBt/ddyvq2fEGPPMYCnO5LrOHDumtIvNeMNGGDcppDwKg
cq1Q/HewJx8QV54ZmuVcGzoPuTGOQE9GZvUo1zm/JqCNikiAm366sI5TArH8sR84
IKnU9bPAzbCSXu+N0tFFOzV8hwbs8SSfch/9h7UV2C3Z/j79DtavqYc2GQp0JtIE
wDpS636nAgMBAAECggEAGmsnD/lK2oUUWap3pu8AjYJNnRqxBMzxFXOnRyWJ0J5y
3RnWRKlW4EI4b/dDmrCK4uKCLrdz7SmCSl3Dz6UhW/nn5+Zbtlva4b6MKifmeHrn
0QpfyikPYgHbFBcBaEexs/ZAsuhyz63VbG5x6d4EEDuWYZwKbhWUI9AMYdyZ35e4
CMfMNFh6JN/I58mL6nghdwF59iLZgLXkKrMHTGlq093ym2kCWAY6o3st+zmIbNhQ
WcbNPmzDRfoX6DM8nxhtCQrMTa851LA0as05IJqHdn6CCEJWZa5MKVZBW/Pd/c7T
6BZlqwMtA7ezGNCoJyyBvUGRE6aIohTeD/GLe7KMKQKBgQD8CR3OqtjxO8F72kRC
tNrwURkpTlzfxFP0dhMHqdeNpt4SLWAccNjBcAwLDIIufoccIzXjV4zqAbCvjPbH
8+lnclY06qjqk3wEgCtLbXNfsRHM//sbHpwW9FE/hM6BGe8tcVqkXl6YEksuS3kt
/iQZOgBTLL3TgggDBl3cUcQ4GQKBgQC4VTSVDdnYv6AgI/i4D+EwkdLDqib26v7k
c4PbtaRB0A6AYSjAaD/7i9dU8YuEtU2l33KfPBJpv4s5G6WUNZFWeaLbKLBNLPdp
m3wjqH6OeemtwEqP+De8/uohRT+kRmTyVsaZ+OTuFfqySnAOmUhjta0cqMEvjNpJ
ZbqD93dEvwKBgHEgBmkE9msQzz+wMINgegTz4b9QlQ87KBPKC7Cc40uJYpP2GfWq
ESCCEmXDL4t+71YJ1947JdzC9XNWak5FhLYR8++8hCUGHdxHSyeH8Qk6iSrimusJ
SjZjYzSHf8kiwuA6yNyOHxdS3rvg1Ht4XuuTxSGQK4QMEVyKNwb1DIXBAoGAVSZ3
DcvCMFAE5hP31v7u5YLXO6+kJDfV2y5JYPr9j7FOoZtAOfFubQLiS8jwzDL8VX1s
84XKc7MZ2x2cVWSRaMLzqg2Xs27sM4qxw78YBzTl729+ghcFmHahLRFSHs6t3wya
3ZGOHzVkA2xDa1r/h5/rAewqoY6NX45wpHlyTP0CgYB2uzOVpje5xlK5l86IVfaf
PMMLHspOv3HW2pxN5OQ0iwOh66XssP0jFRpQiMxtW6iopNw0T3GZGSWJM4MsbeJA
EUTPjhhoTEx86B2Dr5GJRJsGsxS+7xVnOEQNdBEslPCey11CoN5HsyCAqaW4x/FR
FJr8jENchk5u3319dDJSIw==
-----END PRIVATE KEY-----`;

function pemToDerForTest(pem: string): Uint8Array {
  const base64 = pem
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
  return new Uint8Array(Buffer.from(base64, "base64"));
}

// The fixed, known-correct decimal form of 0xDEADBEEF, computed
// independently of the implementation under test.
const EXPECTED_DECIMAL_SERIAL = "3735928559";

describe("extractSerialNumberDecimal -- known DER serial to decimal", () => {
  it("converts the 0xDEADBEEF serial (with DER sign-padding byte) to the correct decimal string, not hex", () => {
    const der = pemToDerForTest(THROWAWAY_CERT_PEM);
    const decimal = extractSerialNumberDecimal(der);
    expect(decimal).toBe(EXPECTED_DECIMAL_SERIAL);
    expect(decimal.toLowerCase()).not.toContain("deadbeef");
    expect(/^[0-9]+$/.test(decimal)).toBe(true);
  });
});

describe("createRolesAnywhereSession -- Authorization header uses decimal serial", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("places the decimal serial in Credential=, never the hexadecimal form, and leaves the rest of the signing construction unchanged", async () => {
    let capturedAuthorization: string | null = null;
    let capturedUrl: string | null = null;
    let capturedMethod: string | null = null;

    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string, init: RequestInit) => {
        capturedUrl = url;
        capturedMethod = init.method ?? null;
        const headers = init.headers as Record<string, string>;
        capturedAuthorization = headers.authorization;
        return new Response(
          JSON.stringify({
            credentialSet: [
              {
                credentials: {
                  accessKeyId: "SYNTHETIC-TEST-ACCESS-KEY-ID",
                  secretAccessKey: "SYNTHETIC-TEST-SECRET-ACCESS-KEY",
                  sessionToken: "SYNTHETIC-TEST-SESSION-TOKEN",
                  expiration: "2026-01-01T00:00:00Z",
                },
              },
            ],
          }),
          { status: 200, headers: { "content-type": "application/json" } },
        );
      }),
    );

    const credentials = await createRolesAnywhereSession({
      region: "ap-south-1",
      trustAnchorArn: "arn:aws:rolesanywhere:ap-south-1:000000000000:trust-anchor/synthetic",
      profileArn: "arn:aws:rolesanywhere:ap-south-1:000000000000:profile/synthetic",
      roleArn: "arn:aws:iam::000000000000:role/synthetic",
      durationSeconds: 900,
      certificatePem: THROWAWAY_CERT_PEM,
      certificateChainPem: "",
      privateKeyPem: THROWAWAY_PRIVATE_KEY_PEM,
    });

    // Response parsing (unrelated to the serial fix) still works correctly.
    expect(credentials.accessKeyId).toBe("SYNTHETIC-TEST-ACCESS-KEY-ID");

    // Request shape outside the serial representation is unchanged.
    expect(capturedUrl).toBe("https://rolesanywhere.ap-south-1.amazonaws.com/sessions");
    expect(capturedMethod).toBe("POST");
    expect(capturedAuthorization).not.toBeNull();
    const authorization = capturedAuthorization as unknown as string;
    expect(authorization.startsWith("AWS4-X509-RSA-SHA256 Credential=")).toBe(true);
    expect(authorization).toContain("SignedHeaders=content-type;host;x-amz-date;x-amz-x509");
    expect(authorization).toContain(`/ap-south-1/rolesanywhere/aws4_request, SignedHeaders=`);

    // The corrected decimal serial, and only the decimal serial, appears in
    // Credential=.
    expect(authorization).toContain(`Credential=${EXPECTED_DECIMAL_SERIAL}/`);
    expect(authorization.toLowerCase()).not.toContain("deadbeef");
  });
});
