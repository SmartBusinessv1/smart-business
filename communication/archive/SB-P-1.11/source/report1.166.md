# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — CHAIN-OPTIONAL CONFIGURATION CORRECTION REPORT

**Report ID:** `report1.166`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.167.md`
**Date:** 2026-08-22

---

## 1. Exact Canonical `main` SHA Reviewed

`00f6712` (`origin/main`, merge commit for PR #367 — `instruction1.167.md` itself).

Confirmed via `git fetch origin` followed by branching `fix/SB-P-1.11-GC-38R-chain-optional-config` from `origin/main` at this exact commit. `git log origin/main --oneline` confirms this is the tip of `main` at review time.

## 2. Finding Confirmed

`src/lib/parser-ingress/roles-anywhere.ts` already permits an empty intermediate chain: it converts `certificateChainPem` to DER only when non-empty (`params.certificateChainPem.trim().length > 0`, line 204) and omits the `x-amz-x509-chain` header entirely when the chain is absent (`if (chainDer) headers["x-amz-x509-chain"] = ...`, line 217). This file was not touched by this correction.

`src/server-functions/parser-lease.ts`'s `loadParserAwsConfig()` already defaulted `certificateChainPem` to `""` when the environment variable is unset (line 93, pre-existing, unchanged). The defect was in the required-field check immediately below it: the `missing` filter iterated over every entry in `required`, including `certificateChainPem`, so an absent/empty chain — which is a legitimate, expected condition for a workload certificate directly signed by the registered Trust Anchor CA, as is currently the case — was incorrectly flagged as missing configuration and would throw `PARSER_AWS_CONFIG_MISSING:certificateChainPem,...` even when every genuinely required field was present.

## 3. Exact Correction Made

File: `src/server-functions/parser-lease.ts`, `loadParserAwsConfig()`. One line changed:

```diff
   const missing = Object.entries(required)
-    .filter(([, v]) => v === undefined || v === "")
+    .filter(([k, v]) => k !== "certificateChainPem" && (v === undefined || v === ""))
     .map(([k]) => k);
```

`git diff --stat`: 1 file changed, 1 insertion(+), 1 deletion(-). This is the preferred correction named in `instruction1.167.md`: the existing empty-string fallback (`?? ""`, line 93) is unchanged; only `certificateChainPem` is excluded from the non-empty required-field validation. Every other field in `required` (`bucket`, `functionUrl`, `trustAnchorArn`, `profileArn`, `roleArn`, `certificatePem`, `privateKeyPem`) is still subject to the exact same `v === undefined || v === ""` check as before, unmodified.

No other line in `parser-lease.ts`, `roles-anywhere.ts`, or any other file was changed. `git status --porcelain` confirms no other repository file is affected by this correction (the five long-standing, pre-existing CRLF-only working-tree artifacts — `src/lib/catalog-import/classify.ts`, `fields.ts`, `idempotency.ts`, `validate.ts`, `src/routeTree.gen.ts` — are unrelated Windows checkout noise, unchanged in every commit across this entire session, and were not staged or committed here).

## 4. Verification Evidence

No AWS, Cloudflare, runtime, or provider action was performed (none is authorized by this instruction). All verification was static and local:

1. **`npx tsc --noEmit -p tsconfig.json`**: zero errors across the whole project after the change — the corrected filter's type signature (`[string, string | undefined]` narrowed to exclude the `certificateChainPem` key by string comparison) compiles cleanly and the function's return type (`ParserAwsConfig`) is unaffected.
2. **Configuration loading succeeds when only the intermediate chain is absent** (instruction §Verification item 1): a synthetic Node.js harness reproducing the exact corrected `loadParserAwsConfig()` logic (no real secrets; throwaway placeholder ARNs/PEM strings) confirmed:
   - the chain key entirely absent from the environment → config loads successfully, `certificateChainPem` resolves to `""`;
   - the chain key present as an empty string → config loads successfully, `certificateChainPem` resolves to `""`;
   - the chain key present with a value → config loads successfully, the value is preserved unchanged.
3. **All other required parser AWS configuration remains fail-closed when missing** (instruction §Verification item 2): the same harness individually removed each of the seven other required environment variables (`PARSER_INGRESS_BUCKET`, `PARSER_LAMBDA_FUNCTION_URL`, `PARSER_ROLES_ANYWHERE_TRUST_ANCHOR_ARN`, `PARSER_ROLES_ANYWHERE_PROFILE_ARN`, `PARSER_ROLES_ANYWHERE_ROLE_ARN`, `PARSER_WORKLOAD_CERTIFICATE_PEM`, `PARSER_WORKLOAD_PRIVATE_KEY_PEM`) one at a time; in every case the function still threw `PARSER_AWS_CONFIG_MISSING:<key>`, and the missing-field list never included `certificateChainPem` even in a combined case where the chain was simultaneously absent alongside two other genuinely-missing fields (`bucket`, `roleArn`) — confirming the exclusion is scoped to exactly the one field and does not weaken any other check. All 11 synthetic test cases passed.
4. **Roles Anywhere request construction continues to omit the chain header when no intermediate chain exists** (instruction §Verification item 3): a second synthetic harness chained the corrected config-loading output directly into the exact unchanged chain-header-omission logic from `roles-anywhere.ts` (`certificateChainPem.trim().length > 0 ? ... : null`, then `if (chainDer) headers["x-amz-x509-chain"] = ...`). With no chain configured, the resulting header object contained no `x-amz-x509-chain` key — confirmed end-to-end, using the real unmodified logic shape from the source file, not just the isolated config loader.
5. **No sensitive values are logged, committed, or added to fixtures** (instruction §Verification item 4): the corrected line contains only a key-name string comparison (`k !== "certificateChainPem"`); it introduces no new logging, no new fixture file, and no new committed value. A repository-wide grep for `PARSER_WORKLOAD_CERTIFICATE_CHAIN_PEM` / `certificateChainPem` confirms it appears only in `roles-anywhere.ts` (unchanged) and `parser-lease.ts` (the one corrected line plus its three pre-existing, unchanged references), with no matches in `.github/workflows/`, test fixtures, or any other file. No test file exists for either module; none was added by this correction, per the instruction's minimum-change scope.
6. **`npx eslint`** on the actually-staged blob content (`git show :src/server-functions/parser-lease.ts` piped to `eslint --stdin`): zero errors. (A direct `npx eslint` against the on-disk working-tree copy of this file reports hundreds of `prettier/prettier` "Delete `␍`" errors; this was confirmed to be a pre-existing Windows-checkout CRLF artifact identical in cause to the five long-standing noise files listed in §3 — the git blob at `origin/main` is LF-terminated, only the local working-tree checkout is CRLF-terminated, and the content that will actually be committed and reviewed is confirmed clean.)
7. **`git diff --cached --check`** (whitespace) on the staged change: clean, exit 0.
8. **Staged-diff secret-pattern scan**: no matches for private-key markers, AWS access-key-ID pattern, or Supabase service-role/secret-key patterns.

## 5. Confirmation — Boundaries Unchanged

- No IAM, Trust Anchor/Profile/role configuration, Lambda behavior, certificate identity, or CA custody was touched — `roles-anywhere.ts` has a zero-line diff; `.github/workflows/aws-gc38r-parser-deploy.yml` is untouched.
- No Product Truth, public command, or unrelated server logic in `parser-lease.ts` was touched — the diff is confined to the single filter predicate inside `loadParserAwsConfig()`; the Owner/business re-derivation, EC-2 guard, lease issuance/confirmation/claim/dispatch/finalization, and merchant-facing error sanitization logic elsewhere in the file are unmodified.
- No AWS API call, Cloudflare action, runtime execution, or provider mutation occurred during this review.

## 6. Final Disposition

`GC-38R CHAIN-OPTIONAL CONFIGURATION CORRECTION — READY`

Per `instruction1.167.md`'s Follow-on section, this correction alone does not authorize non-production server-side provisioning or Phase C runtime verification — those remain gated on this PR's merge and the Founder's separate confirmation that the certificate verification checklist from `instruction1.166.md` is fully PASS.
