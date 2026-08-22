# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — LAMBDA NEW-ACCOUNT CONCURRENCY COMPATIBILITY CORRECTION REPORT

**Report ID:** `report1.164`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.162.md`
**Date:** 2026-08-22

---

## 1. Exact Canonical `main` SHA Reviewed

`4ffea78` (`origin/main`, merge commit for PR #360 — `instruction1.162.md` itself).

Confirmed via `git fetch origin` followed by branching `fix/SB-P-1.11-GC-38R-concurrency-fallback` from `origin/main` at this exact commit. `git log origin/main --oneline` confirms this is the tip of `main` at the time of this review, immediately following PR #359 (Phase B non-production rerun #7 authorization, which produced the triggering `PutFunctionConcurrency` failure cited in `instruction1.162.md` §1).

## 2. Exact Workflow Lines Changed

File: `.github/workflows/aws-gc38r-parser-deploy.yml`

`git diff --stat`: 1 file changed, 30 insertions(+), 3 deletions(-) — a single contiguous hunk inside the existing `Create/update Lambda function` step (`id: lambda_fn`), immediately after the create/update-function-code branch and immediately before the `function_arn=` lookup. No other line in the file changed.

**Before:**

```bash
aws lambda put-function-concurrency \
  --function-name "${LAMBDA_FUNCTION_NAME}" \
  --reserved-concurrent-executions 5
```

**After:**

```bash
concurrency_error="/tmp/put-function-concurrency-error.txt"
if aws lambda put-function-concurrency \
     --function-name "${LAMBDA_FUNCTION_NAME}" \
     --reserved-concurrent-executions 5 \
     2>"${concurrency_error}"; then
  echo "GC38R_LAMBDA_RESERVED_CONCURRENCY_APPLIED value=5"
elif grep -q 'InvalidParameterValueException' "${concurrency_error}" \
     && grep -q 'UnreservedConcurrentExecution' "${concurrency_error}" \
     && grep -q 'below its minimum value' "${concurrency_error}"; then
  echo "GC38R_LAMBDA_RESERVED_CONCURRENCY_DEFERRED_NEW_ACCOUNT_QUOTA"
  echo "  PutFunctionConcurrency rejected reserved-concurrent-executions=5: this account's reduced new-account Lambda concurrency quota does not currently permit it. Continuing this run without per-function reserved concurrency; concurrency 5 will be retried automatically on the next authorized run."
else
  echo "GC38R_LAMBDA_RESERVED_CONCURRENCY_FAILED reason=unexpected_put_function_concurrency_error" >&2
  cat "${concurrency_error}" >&2
  exit 1
fi
```

(plus an explanatory comment block above the code, documenting the rationale and citing `instruction1.162.md`/`report1.164.md`; included in the diff above the "Before/After" excerpt).

This is the only functional change. Every other line in the step — log-group creation, `create-function`/`update-function-code`, the `function_arn=` lookup, Function URL creation/lookup, and every step before and after this one in the workflow — is byte-for-byte unchanged.

## 3. Exact Quota-Specific Matcher Used

Three `grep -q` conditions, all required (logical AND), evaluated against the captured `stderr` of the failed `put-function-concurrency` call:

1. `InvalidParameterValueException` — the exact AWS exception name for this error class.
2. `UnreservedConcurrentExecution` — the exact account-level quota field name AWS names in this specific error.
3. `below its minimum value` — the exact phrase AWS uses only for this specific violation (a requested reservation that would push the account's remaining unreserved concurrency below its enforced floor).

This reproduces the exact triggering evidence from `instruction1.162.md` §1:

```text
InvalidParameterValueException when calling the PutFunctionConcurrency operation:
Specified ReservedConcurrentExecutions for function decreases account's
UnreservedConcurrentExecution below its minimum value of [10].
```

All three substrings must match; a `InvalidParameterValueException` raised for any other reason (for example a malformed function name, or a future unrelated validation failure that happens to share the same exception class) fails at least one of the three `grep` conditions and therefore falls through to the fail-closed `else` branch, not the compatibility branch. This satisfies the instruction's prohibition on generic error swallowing: the match is on the specific message content, not merely the exception type or a nonzero exit code.

## 4. Evidence — Normal Success, Known Quota Fallback, and Unrelated-Error Paths

No AWS workflow dispatch or provider mutation was performed (none is authorized by this instruction). Verification was performed by extracting the exact modified step body via the same `js-yaml`-based extraction method used in prior GC-38R reviews, confirming `bash -n` syntax validity, and then executing that extracted logic locally against a synthetic `aws` CLI shim (a throwaway shell script placed first on `PATH`, deleted immediately after testing) that returns controlled exit codes and `stderr` text for `aws lambda put-function-concurrency`, without invoking any real AWS API.

| Scenario | Simulated `aws` behavior | Result |
|---|---|---|
| Normal success | exit 0 | `GC38R_LAMBDA_RESERVED_CONCURRENCY_APPLIED value=5` printed; script continues (`REACHED_AFTER_CONCURRENCY_BLOCK` marker reached); exit 0 |
| Exact known new-account quota error | exit 254, `stderr` = the exact `InvalidParameterValueException` / `UnreservedConcurrentExecution` / `below its minimum value` text from §1 | `GC38R_LAMBDA_RESERVED_CONCURRENCY_DEFERRED_NEW_ACCOUNT_QUOTA` printed with a non-secret explanatory line; script continues; exit 0 |
| Similarly-typed but different error (`InvalidParameterValueException` for an unrelated validation reason) | exit 254, `stderr` mentions `InvalidParameterValueException` but not the concurrency-minimum phrasing | Falls through to fail-closed branch: `GC38R_LAMBDA_RESERVED_CONCURRENCY_FAILED reason=unexpected_put_function_concurrency_error` printed to stderr with the original AWS error text; `exit 1`; script does **not** continue |
| Unrelated exception class (`TooManyRequestsException`) | exit 254 | Fails closed identically; `exit 1` |
| Unrelated exception class (`AccessDeniedException`) | exit 254 | Fails closed identically; `exit 1` |

All five outcomes matched the required behavior exactly, including the negative control (an `InvalidParameterValueException` that is *not* the concurrency-minimum case), which confirms the matcher does not over-match on exception type alone.

**Automatic reconciliation:** the corrected block is unconditional at the top of every run of this step — it is not gated on whether the function was just created or just updated, and no run-to-run state (file, tag, parameter) is written or read to remember a prior deferral. A future authorized run therefore always attempts reserved concurrency `5` fresh; as soon as AWS's account-level quota permits it, the `if` branch succeeds and the intended steady-state control applies automatically, with no further code change required — satisfying `instruction1.162.md` §3 item 5.

## 5. Confirmation — IAM, Security, and Production Boundaries Unchanged

- No IAM policy, role, permissions boundary, or deploy-policy content was added, removed, or modified. No new AWS action (e.g. `lambda:GetAccountSettings`, Service Quotas reads) is called or requested by this correction — the only AWS action in the modified block remains the same `lambda:PutFunctionConcurrency` call already present and already permitted before this change.
- `RuntimeBoundary`, OIDC trust configuration, and GitHub Environment protection (`aws-nonprod-parser`) are untouched — confirmed via `git diff`, which shows no lines outside the single hunk described in §2.
- Lambda memory (`--memory-size 2048`), timeout (`--timeout 15`), runtime (`nodejs24.x`), and Function URL authentication (`--auth-type AWS_IAM`) are unchanged — confirmed present, unmodified, and outside the diff hunk by direct grep against the current file.
- No provisioned concurrency was added. Reserved concurrency is never requested above `5` in either the success or fallback path — the fallback path requests no reserved concurrency at all for that run, it does not substitute a different value.
- Lambda execution-role and workload-role permissions, IAM Roles Anywhere resources (Trust Anchor, Profile), and all CA/workload certificate material handling are untouched — none of those steps were edited.
- No Supabase, Lovable, production AWS, or production migration change occurred or was requested.
- `git diff --check` (whitespace) on the changed file: clean, exit 0.
- Staged-diff secret-pattern scan (`-----BEGIN ... PRIVATE KEY-----`, AWS access key ID pattern, Supabase service-role/secret key patterns): no matches.
- The only material printed by the corrected block, in any path, is: a fixed success marker; the fixed compatibility marker plus a static, non-secret explanatory sentence; or, on the fail-closed path, the AWS CLI's own `stderr` text for the `PutFunctionConcurrency` call (an API validation error message — account ID, function name, and quota figures only; no credentials, tokens, or key material, consistent with every other AWS CLI error already surfaced elsewhere in this workflow).
- No AWS API call, workflow dispatch, or provider mutation occurred during this review. No Phase B rerun occurred and none is authorized by this report.

## 6. Final Disposition

`GC-38R LAMBDA NEW-ACCOUNT CONCURRENCY COMPATIBILITY CORRECTION — READY`

Per `instruction1.162.md` §8, this report does not authorize a Phase B rerun, manual Lambda console edits, a quota increase as a blocking prerequisite, production deployment, or Phase C/Stage 21+ progression. After Founder human review and merge of the correction PR, Mission Control may separately issue one fresh non-production rerun authorization.
