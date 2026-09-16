# SB-ORG-LEARNING-1.1 — Stage 1 Independent Re-Verification

**Verifier:** Codex

**Date:** 2026-09-16

**Final disposition:** `FAIL`

**Stage 1 ready for Mission Control acceptance:** No.

## Authority and reviewed evidence

This independent re-verification follows the [current instruction](../../../live/instruction.md), [F-01 correction authorization](../mission-control/06-stage1-f01-correction-authorization.md), and [Mission Control re-verification authorization](../mission-control/07-stage1-f01-rereview-and-codex-reverification-authorization.md). It retains the [prior verification](01-stage1-independent-verification.md) as historical evidence and independently checks the correction and the previously incomplete assurance areas. Builder and Mission Control conclusions are not substitutes for the checks below.

- Repository: `SmartBusinessv1/smart-business`.
- Branch: `mission/SB-ORG-LEARNING-1.1-stage1-successor`.
- Reviewed local/remote/PR head: `c2e147e97e994aa656060b1f8adaa337910e2521`.
- [PR #588](https://github.com/SmartBusinessv1/smart-business/pull/588): `OPEN`, unmerged, base `main`.
- Base SHA: `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`.
- Builder correction checkpoint: `56ebdcf99b6f3cc1c1ad4230de2a1749bf08283f`.

The clean branch was fetched and fast-forwarded before review. Compared with the prior published verification commit `71efa46ac6d4bc9e9a338e74e6f076268d41aef1`, implementation changes are limited to `organizational-learning/lib/receipt-store.ts` and its receipt-store/harvest-cli tests. The remaining changes are mission communication records. Candidate/promotion schemas, provenance implementation, source allowlisting, screening, package/dependency configuration, lockfiles and workflows did not change in that correction interval.

The full PR changed-file inventory remains OLE contracts/runtime/tests/documentation, mission communication, and the original `package.json`, `tsconfig.json`, `vitest.fast.config.ts` integration. No application, provider, database, deployment, branch-protection, Product Truth or governance change is present in that inventory. Inherited operating instructions are unchanged from the prior verification.

## Independent execution and CI

`npm run test:fast -- organizational-learning` completed under Node `v24.18.0`: **15 files, 176 tests passed**, duration **30.63 seconds**. This includes the 24 receipt-store tests, 10 harvest-cli tests, and nine dangling-provenance tests, as well as the existing candidate/promotion, path, allowlist, Git reader, screening, fingerprint, revision and receipt-contract tests.

Additional inline Node reproductions imported the actual runtime functions. They used checked OS temporary roots, synthetic files and an isolated temporary Git repository. The junction and its target were both inside the checked temporary root; the junction was removed before recursive cleanup. No real closed-mission proof target, provider, credential or integration environment was used. Implementation/test files were not edited, and no reproduction script was added to the repository.

| Reviewed-head CI evidence | Independently observed result |
| --- | --- |
| [Application Build Assurance 35117019299](https://github.com/SmartBusinessv1/smart-business/actions/runs/35117019299) | Success; Lint, Typecheck, Build and Fast Tests all completed successfully. |
| Fast Tests log in that run | 23 files, 237 tests passed; duration 7.94 seconds. |
| [Full Assurance 35117019300](https://github.com/SmartBusinessv1/smart-business/actions/runs/35117019300) | Initially in progress, subsequently independently confirmed completed/success. Read-only evidence; not rerun locally. |
| [Markdown Quality Gate 35117019419](https://github.com/SmartBusinessv1/smart-business/actions/runs/35117019419) | Completed/success. |

All three runs identify reviewed head `c2e147e97e994aa656060b1f8adaa337910e2521` and event `pull_request`. Application checkout evidence names GitHub's PR merge-test commit `05d876f06a6d80b4d508bbe958e7ac7518793cf8`, merging that head into the base above. Thus these are checks associated with the exact reviewed head using the PR merge checkout, not a claim that every runner checked out the head commit directly. These historical facts do not assert CI completion on the later verifier-publication commit.

## F-01 re-verification — partial correction; containment still unresolved

The original raw-identifier traversal is corrected for an ordinary fresh receipt tree. `computeMissionStorageKey` hashes the identifier to SHA-256, while `computeReceiptId` and the receipt payload preserve diagnostic identity. `receiptFilePath` is shared by lookup and write.

The original invalid envelope was independently replayed twice:

```json
{"mission_id":"../escaped","closure_revision":"REV-CODEX-1"}
```

Both calls returned exit code 1, wrote only one receipt inside the fresh receipts directory, preserved `mission_id: "../escaped"`, retained `created_at`, and assigned a new retry `run_id`. The state remained `VALIDATION_FAILED`; no sibling `escaped` directory appeared. This is deterministic placement with retry semantics, not a successful-processing no-op or byte-identical receipt.

### Remaining blocker: filesystem indirection bypasses containment

**Exact code:** `organizational-learning/lib/receipt-store.ts:86` checks containment using `path.resolve` and `path.relative` only. These operations do not inspect filesystem links. Lookup at lines 122–124 and directory creation/temporary write/rename at lines 138–142 then follow the resulting filesystem path. No link/reparse-point rejection or physical destination check intervenes.

**Independent reproduction:** inside a checked temporary root, create ordinary sibling directories `linked-receipts` and `redirected`. Create a Windows directory junction:

```text
<tempRoot>/linked-receipts/<sha256("../escaped")>
    -> <tempRoot>/redirected
```

Invoke `runHarvest` with the same invalid envelope and `--receipts-dir <tempRoot>/linked-receipts`. Then call `readReceiptIfExists` with the same mission identifier and computed fingerprint.

Observed result:

```json
{
  "exitCode": 1,
  "lexicallyContained": true,
  "physicallyContained": false,
  "writeInSibling": true,
  "lookupReadsSibling": true,
  "allEffectsInsideTemporaryRoot": true
}
```

`realpathSync` of the nominal receipt path resolved to the sibling target, where the fingerprint-named JSON file was actually created. Lookup returned that same receipt through the junction. The receipt's failure status does not prevent the escaping filesystem effect.

**Blast radius and prerequisite:** this residual case requires a pre-existing junction at the derived storage directory; the malformed identifier alone no longer escapes a fresh ordinary tree. A prepared or reused receipt tree with such indirection can redirect both reads and writes to a location permitted by the process's filesystem access. The demonstrated effect is a fingerprint-named receipt under a sibling directory, not arbitrary filename control, production mutation, or a remotely created junction. No race attack or Linux runtime reproduction is claimed.

**Narrow correction request:** complete the receipt-store boundary for filesystem indirection before lookup, directory creation, temporary write and rename. Fail closed on escaping links/reparse points, including relevant existing path components and lookup targets. Retain hashed placement, raw diagnostic payload and deterministic retry semantics. Add isolated regression evidence for the physical read/write boundary on supported platforms. This is completion of section 3.2 of the F-01 authorization, not a request to redesign the harvester or change scanner policy.

**F-01 disposition:** raw-string traversal regression passes; the authorized containment invariant remains unresolved. F-01 cannot be closed on the current evidence.

## New finding F-02 — persisted manifests are not canonically ordered

**Classification:** Stage 1 correctness blocker for the explicitly reopened persisted-manifest assurance.

`organizational-learning/schemas/closure-envelope.schema.ts:62` concatenates acceptance and closure references in supplied order. `organizational-learning/scripts/harvest.mjs:173` consumes those references, appends manifest entries at line 187, and persists that order at lines 92, 231 and 253. `computeSourceFingerprint` sorts a copy for hashing; that sorted copy is not used for persistence. The `sortManifest` comment in `lib/fingerprint.ts` therefore overstates what the harvester persists.

**Independent reproduction:** commit two clean synthetic files, `z.md` and `a.md`, beneath `communication/missions/SB-TEST-FIXTURE-1.0/` in an isolated repository. Use a valid fixture envelope with `acceptance_refs: [z.md]`, `closure_refs: [a.md]`. Run it into a fresh receipt directory. Reverse those references and run into another fresh directory, keeping the commit and closure revision unchanged. Also run the original ordering with an additional missing reference to exercise failure persistence.

Observed:

```json
{
  "exitCodes": [0, 0, 1],
  "firstOrder": ["z.md", "a.md"],
  "reverseOrder": ["a.md", "z.md"],
  "equalFingerprint": true,
  "failedOrder": ["z.md", "a.md"],
  "failedState": "VALIDATION_FAILED"
}
```

**Blast radius:** equivalent evidence sets have the same fingerprint but different persisted entry order; successful and failed receipts can retain unsorted manifests. Hash identity and exact blob selection still work in this reproduction. This does not establish wrong evidence content, authority promotion or an external effect.

**Narrow correction request:** use the existing canonical manifest ordering consistently for fingerprint input and every persisted receipt path, with reversed/mixed-reference and failure-receipt regression coverage. No hash-algorithm change, new dependency or later-stage work is needed. This follows the current instruction's persisted-ordering question and the approved deterministic manifest/receipt foundation.

## New finding F-03 — malformed-JSON diagnostics echo input bytes

**Classification:** Stage 1 secret-echo boundary blocker; independent of the accepted heuristic scanner's detection strength.

`organizational-learning/scripts/harvest.mjs:113` parses the input file, then line 117 interpolates the caught `error.message` into its returned diagnostic. `organizational-learning/scripts/validate.mjs` does the same in its JSON-read/parse catch. Node's JSON parser can include offending input text in that message. These failures occur before content screening.

**Independent reproduction:** create a temporary invalid JSON file containing only a synthetic AWS-key-shaped canary, generated as the string `AKIA` followed by sixteen zeroes. This is fabricated test data, not a credential. Call `runHarvest` and `runValidate(['closure-envelope', file])` with that file. Both returned exit code 1, and both returned diagnostic strings contained the entire canary. The reproduction printed only containment booleans, not the diagnostic or canary value.

As a positive control, commit synthetic evidence containing the same canary and harvest it through a valid fixture envelope. The result was `VALIDATION_FAILED` with `QUARANTINED` screening; neither its returned diagnostic nor its persisted receipt contained the canary. Thus the normal content-quarantine path works for this fixture while the parse-error path bypasses its no-echo boundary.

**Blast radius:** raw bytes from malformed input can reach returned diagnostic strings and callers that display/log them. The CLI main branches print those messages when invoked as the main module; the independent assertion here inspected the returned strings. No real secret exposure, external transmission or existing production-log incident was demonstrated.

**Narrow correction request:** make the two read/parse diagnostics safe without interpolating raw parser errors that may contain input bytes. Retain a truthful failure status and safe context; add malformed-input canary assertions for both runtime entry points. This does not require expanding the accepted scanner or changing truthful malformed mission-ID payload preservation.

## Completion of reopened assurance areas

The prior open areas have now been examined with the results below. Completion of a verification question does not mean its implementation passed.

| Assurance area | Independent result |
| --- | --- |
| Diagnostic identity versus storage identity | Hash and payload separation inspected; original attack and repeated failure flow pass in a fresh ordinary tree. Residual physical containment fails under F-01. |
| Lookup/write containment and autonomous writes | Both use one path helper; no background worker or autonomous Git/publication operation appears in runtime code. Explicit receipt writes can escape via a prepared junction: F-01. |
| Persisted manifest order and fingerprinting | Hash is order-independent for the tested equivalent inputs; persisted success and failure manifests are not canonical: F-02. |
| Secret-echo contracts, fixtures and diagnostics | Current scanner emits path/rule metadata rather than matched content; synthetic quarantine output excludes the matched canary. Parser diagnostics reproduce raw-value echo: F-03. No blanket secret-free assertion is supported. |
| Receipt-state truthfulness and retry behavior | Original malformed input, missing evidence and quarantine produce failure, never later-stage success. Retry preserves identity/creation time and changes the run ID. Existing tests cover `SCREENED` no-op and contract rejection of invalid success states. `HARVESTED` is persisted before screening. Truthful state labels do not cure the path or diagnostic defects. |
| Prior candidate/promotion and provenance boundaries | Correction diff leaves them unchanged; the full OLE suite re-executed prohibited-field, authority separation, pinned-object and nine dangling-reference tests successfully. A valid contract is not proof of actual human approval or semantic truth. |
| Source eligibility and safe committed reads | Allowlist/live exclusion and regular Git-object rules are unchanged and their tests passed. Inspected Git runtime calls are local `rev-parse`, `ls-tree` and `cat-file`; source symlink rejection is distinct from the unsafe receipt-directory junction. |
| Evidence reach and acceptance | Reviewed-head CI and existing test counts are genuine. Earlier “structurally impossible” escape language is valid only for raw identifier syntax, not physical containment. Earlier sorted-persistence and universal no-echo implications are contradicted by F-02/F-03. Green CI cannot justify Stage 1 acceptance. |
| Stage exclusions | Runtime imports/calls and the full changed-file inventory show no AI/provider calls, semantic extraction, promotion execution, background automation, provider mutation, new dependency/lockfile change, governance/Product Truth change or Stage 2/Product Mission activation. No real proof output is present in the changed scope. Codex processed synthetic fixtures only; fixture mission-name strings do not constitute processing the real mission. This is repository/execution evidence, not an audit of all external actor activity. |

## Non-blocking observations and limits

The heuristic scanner's limited pattern coverage remains the Mission Control-accepted Stage 2 entry risk; it is not reopened here as a scanner replacement request. No additional independently established non-blocking defect is raised. The reproductions establish the concrete cases above, not universal security, crash/concurrency recovery or readiness for real evidence processing.

The original `../escaped` correction receives explicit credit, but the new evidence prevents superseding the prior `FAIL` with a passing disposition. No builder report, prior Codex report or implementation file was modified to reconcile these findings; Mission Control must authorize any correction.

## Handoff

**Final disposition: `FAIL`. Stage 1 is not ready for Mission Control acceptance.**

Mission Control should decide narrow correction authorization for the remaining F-01 containment defect and new F-02/F-03 findings, followed by independent verification. Only this durable report and the minimum verifier section of `communication/live/report.md` are authorized publication changes.

No self-acceptance, merge, Stage 2 activation, AI extraction, background automation or real `SB-OPS-CI-ARCHITECTURE-1.0` proof processing was performed. `SB-P-1.12` remains not activated.

`STAGE 1 INDEPENDENT RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`
