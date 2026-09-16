# SB-ORG-LEARNING-1.1 — Stage 1 Independent Verification

**Verifier:** Codex

**Date:** 2026-09-16

**Disposition:** `FAIL`

**Stage 1 ready for Mission Control acceptance:** No.

## Scope and authority

Independent verification of Phase A contracts/security boundaries and the deterministic Phase B foundation, including the dangling-provenance correction, under the [live instruction](../../../live/instruction.md) and [Mission Control authorization](../mission-control/05-stage1-correction-rereview-and-codex-authorization.md).

The mission activation, successor handover, Stage 1 authorization, substantive review, correction re-review, builder report, and parent mission's final reconciled build plan supplied the review context. Builder and Mission Control conclusions were not treated as independent proof.

Repository inspection covered the PR changed-file scope, runtime schemas, libraries and CLIs, configuration changes, and relevant tests. All 15 OLE test files were independently executed; the receipt, provenance and temporary-repository helper tests also received direct inspection. This is not a claim that every test line or every remaining adversarial case received complete review. The instruction requires a stop upon finding a blocker; further implementation review stopped after reproducing F-01.

No implementation code, tests, dependencies, workflow, provider configuration, database state, governance or Product Mission state was changed. No external integration tests were rerun, and no real closed-mission proof target was processed by Codex.

## Repository and CI evidence

- Repository: `SmartBusinessv1/smart-business`.
- Branch: `mission/SB-ORG-LEARNING-1.1-stage1-successor`.
- [PR #588](https://github.com/SmartBusinessv1/smart-business/pull/588): open and unmerged at verification.
- Reviewed local, remote and PR head: `d2ca1638abb4985669cbe43074b9adec3e9f3bb3`.
- PR base: `main`, `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`.
- PR scope: 43 changed files; 34 under `organizational-learning/`, six communication records, and `package.json`, `tsconfig.json`, `vitest.fast.config.ts`.
- Package changes add the two OLE CLI scripts; no dependency-version or lockfile changes appeared in the diff. The TypeScript and Fast Test configuration changes include the OLE implementation and tests.

The following GitHub Actions evidence was independently queried for the reviewed SHA:

| Evidence | Result |
| --- | --- |
| [Application Build Assurance, run 35111503656](https://github.com/SmartBusinessv1/smart-business/actions/runs/35111503656) | Success; Lint, Typecheck, Build and Fast Tests jobs succeeded. |
| Fast Tests log within that run | 23 test files and 220 tests passed; duration 7.57 seconds. Tests executed rather than merely completing setup. |
| [Full Assurance, run 35111503856](https://github.com/SmartBusinessv1/smart-business/actions/runs/35111503856) | Success, based on read-only run/job evidence; not rerun locally. |
| [Markdown Quality Gate, run 35111503655](https://github.com/SmartBusinessv1/smart-business/actions/runs/35111503655) | Success. |

These are immutable reviewed-commit facts, not a claim about checks on the later report-publication commit. PR #588 and GitHub Actions remain the current-head source of truth. Green existing tests do not disprove F-01.

## Independently reproduced checks

`npm run test:fast -- organizational-learning` completed successfully under Node `v24.18.0`: **15 test files, 159 tests passed**, duration **27.50 seconds**.

Coverage included candidate/promotion separation, closure/provenance/receipt contracts, source path safety and allowlisting, committed Git object reading, screening, fingerprint/revision hashing, receipts, harvest/validate CLIs, and all nine dangling-provenance correction tests. The latter exercised valid evidence, missing commit, missing path, directory, symlink, gitlink, blob mismatch, cross-file fabricated blob use and amended-source mismatch.

The tests use isolated temporary Git repositories and local fixtures. No credential or external provider was needed for this command. The additional F-01 reproduction below also used only a temporary local directory and was removed afterward.

## Blocking finding F-01 — rejected mission identifier escapes receipt storage

**Severity:** Blocking filesystem write-boundary defect.

**Relevant verification questions:** 10, 15 and 18; it limits the safety assurance available under question 20.

### Exact implementation evidence

At the reviewed SHA:

1. `organizational-learning/scripts/harvest.mjs:122` derives `fallbackMissionId` from the unvalidated input string. When envelope validation fails at line 131, the failure flow passes that string as `missionId` to `writeFailureReceipt` at lines 140–142.
2. `organizational-learning/lib/receipt-store.ts:33` defines the receipt path helper. Line 38 joins `baseDir`, `missionId` and the fingerprint JSON filename without validating the storage component or enforcing directory containment.
3. The same helper is used for existing-receipt lookup at line 51 and for writing at line 67. Lines 68–71 create the parent directory and write/rename the receipt.
4. `organizational-learning/schemas/receipt.schema.ts:111` permits a nonempty string of up to 200 characters for the failure receipt's `mission_id`. This truth-preserving payload rule does not establish that the value is safe as a filesystem path component.

### Reproduction and observed result

An inline Node invocation imported `runHarvest` and used an isolated OS temporary root. The configured receipt directory was `<tempRoot>/receipts`. The envelope file contained only:

```json
{"mission_id":"../escaped","closure_revision":"REV-CODEX-1"}
```

Invocation shape:

```javascript
runHarvest([
  "--envelope", envelopeFile,
  "--repo-root", temporaryRoot,
  "--receipts-dir", receiptsDirectory,
]);
```

The envelope is invalid and rejected before Git evidence resolution. Nevertheless, the resulting receipt was written to the sibling directory `<tempRoot>/escaped`, outside the configured receipts directory. The observed result was:

```json
{
  "node": "v24.18.0",
  "inputMissionId": "../escaped",
  "exitCode": 1,
  "wroteOutsideReceipts": true,
  "relativeToReceipts": "..\\escaped\\a4ee0f8f5dcf3509a7bd3833b756c1a5c1c17c4f161eb5375553e181cf28a617.json",
  "receiptState": "VALIDATION_FAILED",
  "allWritesContainedInTemporaryRoot": true
}
```

Before invocation, the temporary root and predicted destination were checked to remain under the intended temporary boundary. Cleanup removed that checked root afterward. No reproduction artifact was written outside it.

### Blast radius and evidence boundary

A malformed envelope can direct failure-receipt creation outside the configured receipt directory, subject to filesystem permissions. Existing-receipt lookup uses the same unsafe path construction. The demonstrated effect is creation of a JSON receipt in a sibling directory despite an exit status of 1. The filename remains the computed fingerprint plus `.json`; this is not evidence of arbitrary filename control, external access or production mutation. The failure status does not undo the filesystem write.

Existing tests passed because the tested malformed-envelope failure uses a filesystem-safe identifier. The receipt tests do not cover this escaping identifier. Safe handling of source paths does not protect this separate output path.

### Narrowest correction scope for Mission Control

Authorize a narrow correction to receipt storage path derivation/containment and any necessary failure-flow integration. Preserve the malformed identifier as diagnostic payload if required by the accepted Stage 1 interpretation, but use a safe storage key and enforce the configured storage boundary for both lookup and write. Add environment-independent regression cases proving malformed/traversal identifiers cannot read or write outside that boundary and can still produce truthful failure reporting.

This does not require reversing the accepted receipt schema interpretation, replacing the scanner, redesigning OLE, using external systems or starting Stage 2. Codex implemented no correction.

## Required verification question mapping

“Observed” below identifies the evidence obtained before the mandated stop; it is not a separate acceptance disposition.

| Question | Independent evidence and conclusion |
| --- | --- |
| 1. Phase A + deterministic Phase B only | Observed contracts, deterministic local Git reads, screening, fingerprints, receipts and explicit CLIs in the changed implementation. No later-stage extractor or promotion executor appeared in inspected runtime code. F-01 blocks acceptance of its filesystem boundary. |
| 2. Dependencies/lockfiles | Diff showed CLI script additions, no dependency-version changes and no lockfile changes. |
| 3. Candidate/promotion separation | Separate strict candidate and promotion schemas; corresponding tests passed. |
| 4. Forged candidate authority | Candidate schema rejects extra fields and fixes candidate maturity/authority values; prohibited-field tests passed. Schema validation alone is not actual human approval. |
| 5. Exact claim provenance | Provenance contract requires repository, pinned commit, path, blob and locator information. Runtime validator inspection and tests support exact object binding; semantic truth of a claim is outside this structural validation. |
| 6. Dangling-provenance correction | Independently executed all nine correction tests; inspected composition with the Git reader and its distinct failure outcomes. |
| 7. Pinned committed reads | Reader resolves committed tree/blob objects through argument-based Git commands. Dirty-worktree and committed-object tests passed. |
| 8. Eligibility versus authority | Allowlist controls eligible source paths, while candidate authority remains separately constrained. `merge/active/**` remains authority context under the accepted interpretation. |
| 9. Live communication exclusion | Explicit `communication/live/**` exclusion observed; allowlist tests passed. |
| 10. Unsafe paths/objects | Source path and regular-object checks and tests cover unsafe source forms, symlinks and gitlinks. **F-01: failure-receipt output path escapes the configured directory.** |
| 11. Scanner fail-closed | Missing, throwing and unknown scanner outcomes are handled by the screening wrapper; screening tests passed. Stronger-scanner assurance remains a Stage 2 entry issue, as accepted by Mission Control. |
| 12. Secret echo prevention | Inspected screening output uses findings metadata rather than a raw-content field; existing screening/contract tests passed. Exhaustive metadata/fixture leakage assurance was not completed after the blocker, and no blanket secret-free claim is made. |
| 13. Sorted manifest/fingerprint | Fingerprint logic sorts its input and fingerprint tests passed. Complete persisted-manifest ordering assurance was not completed before the stop. |
| 14. Revision idempotency | Fingerprint, revision-hash, receipt and CLI tests passed for existing scenarios. Untrusted storage identifiers remain unsafe under F-01. |
| 15. Truthful receipt states | The reproduced rejection honestly records `VALIDATION_FAILED`, consistent with accepted Stage 1 failure semantics, but writes outside its boundary. State truthfulness does not resolve F-01. |
| 16. Environment-independent Fast Gate | Independently ran all 159 OLE tests without provider credentials or integration services. Temporary fixture Git repositories support the Stage 1 test boundary. |
| 17. Hidden AI/provider/network | None observed in inspected runtime imports/calls; local OLE execution needed no provider credentials. This is scoped repository evidence, not an external-system audit. |
| 18. Autonomous writes/background work | No background orchestration or automatic PR workflow appeared in the inspected changes. Explicit harvest receipt writes exist, and **F-01 permits them outside their configured boundary**. |
| 19. Real proof target | No real closed-mission proof output appeared in the changed-file scope; Codex used synthetic temporary fixtures only. This is not a claim to audit all external actor activity. |
| 20. Evidence reach | Current reviewed-SHA CI and the provenance correction were independently confirmed. Historical tested SHAs remain historical. Existing green checks and earlier reports cannot establish receipt write containment in light of F-01; this report records that limitation. |

## Non-blocking observations and incomplete assurance

No additional independently established non-blocking defect is raised. The accepted heuristic scanner limitation remains as recorded by Mission Control; this review does not reopen it as a Stage 1 redesign request. Uncompleted assurance identified in the mapping is a consequence of the mandatory blocker stop, not a claim that those requirements passed.

## Handoff

**Final disposition: `FAIL`. Stage 1 is not ready for Mission Control acceptance.**

Mission Control must decide on narrow correction authorization for F-01 and subsequent independent verification. Only this durable report and the minimum Codex verifier section of the live report are publication scope. Publication does not accept Stage 1 or complete the OLE mission.

PR #588 remains subject to Mission Control review and human/Founder merge. No merge, Stage 2 activation, real proof-target processing, AI extraction or background automation was performed. `SB-P-1.12` remains not activated.

`STAGE 1 INDEPENDENT VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`
