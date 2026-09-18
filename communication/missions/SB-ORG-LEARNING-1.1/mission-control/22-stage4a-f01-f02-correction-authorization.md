# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 4A F-01/F-02 Narrow Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Date:** `2026-09-17`

**Authority:** Smart Business Mission Control

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**PR:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Mission Control review disposition

Stage 4A is **not yet accepted**.

The implementation substantially satisfies the bounded reconciliation proof, including deterministic state classification, real Stage 2A no-op/fingerprint proof, changed-revision handling, reopen/supersession handling, concurrency ownership, recovery/retry distinction, safe malformed-envelope diagnostics, deterministic ordering, screening, and no-authority output.

Corrected technical implementation head reviewed:

`5e54168dd628e0e694c379b4cf680821d15d3e43`

Exact-head workflow evidence on that implementation checkpoint:

- Team LIPS Application Build Assurance `#185` — `SUCCESS`;
- Team LIPS Markdown Quality Gate `#1789` — `SUCCESS`;
- Team LIPS Full Assurance `#58` — `SUCCESS`.

A later reporting-only commit `8762bfc546b28dc02ec7fc1ab9144851ba12b714` changed only the durable Stage 4A report and live report to record completed CI evidence. It does not change the two findings below.

Disposition:

`STAGE 4A SUBSTANTIVE REVIEW — NARROW CORRECTION REQUIRED`

Only `S4A-F-01` and `S4A-F-02` are authorized for correction.

---

## 2. S4A-F-01 — approved closure-envelope location boundary is not enforced

### Finding

Mission Control record 21 authorized Stage 4A to:

> enumerate only explicit approved closure-envelope locations

The current wrapper structurally filters for JSON, but approval of the envelope location itself is not enforced.

Current behavior permits:

- any caller-supplied `--envelope <path>`;
- every recursively discovered `.json` beneath any caller-supplied `--envelopes-dir`.

A schema-valid closure envelope at an unapproved path can therefore enter reconciliation merely because the caller supplied that path or directory.

`ClosureEnvelopeSchema` validity and evidence-source allowlisting establish structure/evidence eligibility. They do not establish that the envelope file's repository location is an approved closure-envelope location.

### Required correction

Add the smallest repository-native explicit approval boundary for closure-envelope locations.

The correction must ensure that a schema-valid envelope located outside the approved closure-envelope location set is rejected and produces **no work item**.

The approval mechanism must be deterministic, explicit, testable, repository-native, and not based on arbitrary prose.

Prefer a minimal explicit approved-path / approved-root contract or equivalent bounded mechanism rather than broad architecture redesign.

Do not infer approval merely from:

- `.json` extension;
- schema validity;
- caller possession of a path;
- evidence-path allowlisting.

### Mandatory proof

Add proof that:

1. the real approved Stage 2A closure envelope remains accepted;
2. a schema-valid byte-for-byte equivalent copied to an unapproved repository path is rejected;
3. an arbitrary prose file still creates no work;
4. an unapproved directory containing a valid envelope cannot create work merely because it was passed to `--envelopes-dir`;
5. rejection is safe and does not echo raw envelope contents.

---

## 3. S4A-F-02 — malformed durable receipt can be silently treated as absent

### Finding

`listReceiptsForMission()` currently skips receipt files that:

- cannot be read;
- are not valid JSON; or
- fail `ReceiptSchema` validation.

The classifier then continues using only successfully parsed receipts.

For the mission being reconciled, this can convert an ambiguous/corrupt durable processing state into apparent absence of state and may produce a work-producing classification such as `ELIGIBLE_UNPROCESSED` or `NEW_CLOSURE_REVISION`.

That is not fail-closed behavior and can undermine replay/idempotency by planning work while potentially relevant durable state exists but is unreadable or invalid.

### Required correction

Receipt discovery for the mission being reconciled must preserve receipt-read/validation ambiguity as a blocking reconciliation condition.

If any receipt file within that mission's deterministic receipt storage directory is unreadable, malformed, or schema-invalid, Stage 4A must **not** silently treat it as absent and must **not** plan new processing work for that mission until the ambiguity is reconciled.

Use the smallest existing-compatible representation. `INVALID_OR_UNSAFE` is acceptable if it truthfully represents the condition; do not create a new state unless genuinely required.

Diagnostics must remain non-sensitive and path/condition based; do not echo raw malformed receipt content or parser snippets.

### Mandatory proof

Add isolated tests proving:

1. malformed JSON receipt in the reconciled mission's receipt directory blocks work;
2. schema-invalid receipt in that directory blocks work;
3. unreadable/invalid relevant durable state is not converted into `ELIGIBLE_UNPROCESSED`;
4. the result is deterministic and safe to retry after repair;
5. raw canary/secret-like bytes inside the malformed receipt never appear in diagnostics or plan output;
6. once the malformed receipt is repaired/removed in the isolated fixture, normal deterministic classification resumes.

Do not modify the real Stage 2A receipt to perform these tests.

---

## 4. Preserve accepted Stage 4A behavior

Do not redesign or weaken the already satisfactory behavior for:

- exact fingerprint computation;
- Stage 2A `ALREADY_PROCESSED` proof;
- `NEW_CLOSURE_REVISION`;
- `SUPERSEDED_OR_REOPENED`;
- `FAILED_RETRYABLE`;
- local atomic same-revision ownership;
- recovery from intermediate receipt state;
- envelope malformed-input safe diagnostics;
- screening;
- deterministic ordering/replay;
- no-authority output.

The CRLF methodology correction is accepted and must remain intact.

---

## 5. Scope boundary

This correction does **not** authorize:

- Stage 4B;
- automated model extraction;
- provider/API integration;
- background scheduler/workflow;
- trusted publisher or PR creation;
- autonomous repository writes;
- automatic promotion;
- `INSTITUTIONALISED`;
- `ORGANIZATION_WIDE`;
- Founder approval claims;
- merge;
- governance/Product Truth mutation;
- production/provider/customer/merchant/employee mutation;
- dependency or `package-lock.json` change;
- `SB-P-1.12` activation.

No GitHub Actions workflow change is authorized by this correction.

---

## 6. Verification

After correcting only F-01/F-02, run:

- focused correction tests;
- all Stage 4A tests;
- Typecheck;
- ESLint / Prettier;
- Fast Tests;
- Build;
- Markdown Quality Gate;
- Full Assurance if applicable;
- real GitHub CI.

Do not claim CI before it completes.

Update the existing durable Stage 4A builder report only as necessary to record the correction and evidence. Preserve the original implementation history and the fact that Mission Control required this correction.

---

## 7. Required return

Return:

- exact files changed;
- S4A-F-01 correction mechanism and proof;
- S4A-F-02 correction mechanism and proof;
- confirmation real Stage 2A no-op proof still passes;
- concurrency/recovery regression result;
- safe-diagnostic result;
- local checks;
- exact real CI;
- scope confirmation.

Stop exactly with:

`STAGE 4A F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

`STAGE 4B — NOT AUTHORIZED`

`STAGE 5 — NOT AUTHORIZED`

`SB-P-1.12 — NOT ACTIVATED`
