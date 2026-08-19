// SB-P-1.11-GC-38R — SigV4 S3 presigned-POST signing (manual, standard
// key-derivation) and `aws4fetch`-based Lambda Function URL invocation
// (Lambda Parser EIS §7.2). Both operate only on temporary session
// credentials already obtained from `roles-anywhere.ts`'s `CreateSession`
// call -- never a long-lived AWS key, never anything reaching the browser
// except the presigned POST fields themselves.
import { AwsClient } from "aws4fetch";

export interface TemporaryAwsCredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
}

// ---------------------------------------------------------------------------
// S3 presigned POST (Lambda Parser EIS §10.1) -- exact key/length/checksum
// binding, 300-second expiry, no arbitrary caller-controlled acl or
// success_action_redirect.
// ---------------------------------------------------------------------------

export interface PresignedPostFields {
  url: string;
  fields: Record<string, string>;
}

export interface PresignedPostParams {
  region: string;
  bucket: string;
  objectKey: string;
  expectedByteLength: number;
  expectedSha256B64: string;
  credentials: TemporaryAwsCredentials;
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacSha256(keyBytes: Uint8Array, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    "raw",
    keyBytes.slice().buffer as ArrayBuffer,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(data).slice().buffer as ArrayBuffer,
  );
  return new Uint8Array(signature);
}

/** Standard SigV4 signing-key derivation chain (AWS General Reference,
 * "Calculating a Signature"). Identical for every AWS service. */
async function deriveSigningKey(
  secretAccessKey: string,
  dateStamp: string,
  region: string,
  service: string,
): Promise<Uint8Array> {
  const kDate = await hmacSha256(new TextEncoder().encode(`AWS4${secretAccessKey}`), dateStamp);
  const kRegion = await hmacSha256(kDate, region);
  const kService = await hmacSha256(kRegion, service);
  return hmacSha256(kService, "aws4_request");
}

function amzDateStamp(date: Date): { amzDate: string; dateStamp: string } {
  const iso = date.toISOString().replace(/[:-]|\.\d{3}/g, "");
  return { amzDate: iso, dateStamp: iso.slice(0, 8) };
}

/**
 * Builds an S3 POST policy document and its SigV4 signature for exactly
 * one object key/length/checksum. The returned fields must be sent
 * verbatim as multipart form fields alongside the file, in a single POST
 * directly from the browser to the bucket -- no AWS credential of any kind
 * reaches the browser; only these already-scoped, already-expiring fields
 * do.
 */
export async function createPresignedS3Post(
  params: PresignedPostParams,
): Promise<PresignedPostFields> {
  const now = new Date();
  const { amzDate, dateStamp } = amzDateStamp(now);
  const expiration = new Date(now.getTime() + 300_000).toISOString();
  const credentialScope = `${dateStamp}/${params.region}/s3/aws4_request`;
  const credential = `${params.credentials.accessKeyId}/${credentialScope}`;

  const policy = {
    expiration,
    conditions: [
      { bucket: params.bucket },
      { key: params.objectKey },
      ["content-length-range", params.expectedByteLength, params.expectedByteLength],
      { "x-amz-checksum-sha256": params.expectedSha256B64 },
      { "x-amz-algorithm": "AWS4-HMAC-SHA256" },
      { "x-amz-credential": credential },
      { "x-amz-date": amzDate },
      { "x-amz-security-token": params.credentials.sessionToken },
    ],
  };
  const policyBase64 = btoa(JSON.stringify(policy));

  const signingKey = await deriveSigningKey(
    params.credentials.secretAccessKey,
    dateStamp,
    params.region,
    "s3",
  );
  const signature = toHex(await hmacSha256(signingKey, policyBase64));

  return {
    url: `https://${params.bucket}.s3.${params.region}.amazonaws.com/`,
    fields: {
      key: params.objectKey,
      "x-amz-checksum-sha256": params.expectedSha256B64,
      "x-amz-algorithm": "AWS4-HMAC-SHA256",
      "x-amz-credential": credential,
      "x-amz-date": amzDate,
      "x-amz-security-token": params.credentials.sessionToken,
      policy: policyBase64,
      "x-amz-signature": signature,
    },
  };
}

// ---------------------------------------------------------------------------
// Lambda Function URL invocation (`AWS_IAM` auth, Lambda Parser EIS §9) --
// standard SigV4 via aws4fetch, once temporary credentials are already
// held. Never used for the CreateSession request itself (roles-anywhere.ts
// handles that separately, using the certificate-bound AWS4-X509 variant
// aws4fetch does not implement).
// ---------------------------------------------------------------------------

export interface InvokeParserLambdaParams {
  region: string;
  functionUrl: string;
  credentials: TemporaryAwsCredentials;
  body: unknown;
}

export async function invokeParserLambda(params: InvokeParserLambdaParams): Promise<Response> {
  const client = new AwsClient({
    accessKeyId: params.credentials.accessKeyId,
    secretAccessKey: params.credentials.secretAccessKey,
    sessionToken: params.credentials.sessionToken,
    region: params.region,
    service: "lambda",
  });
  return client.fetch(params.functionUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(params.body),
  });
}
