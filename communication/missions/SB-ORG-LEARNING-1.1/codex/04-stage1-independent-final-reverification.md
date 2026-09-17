# SB-ORG-LEARNING-1.1 — Stage 1 Independent Final Re-Verification

**Verifier:** Codex

**Date:** 2026-09-17

**Disposition:** `FAIL`

**Ready for Mission Control Stage 1 acceptance review:** No — F-04 retains an import-safety regression.

## Authority and reviewed repository state

This verification follows the user-provided Codex hydration/execution prompt for final Stage 1 verification, including actual CLI-process checks and the whole Stage 1 boundary. The [live instruction](../../../live/instruction.md) and [F-04 correction authorization](../mission-control/10-stage1-f04-correction-authorization.md) remain builder-facing historical handoff records at this head; the attached user instruction explicitly authorizes Codex's present verification. They were not rewritten or treated as authority to implement corrections.

- Repository: `SmartBusinessv1/smart-business`; remote `https://github.com/SmartBusinessv1/smart-business.git`.
- Branch: `mission/SB-ORG-LEARNING-1.1-stage1-successor`.
- [PR #588](https://github.com/SmartBusinessv1/smart-business/pull/588): `OPEN`, unmerged, base `main`.
- Reviewed local, remote and PR head: `7d5e46f85868f948d0fb307da90523c89cffc655`, exactly the prompt's expected head.
- Base SHA: `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`.
- PR merge-test checkout: `01fa09e43179af7dc6509caea6a6c6d6b8161e97`.

The working tree was clean before verification. Fetch and fast-forward completed without conflicts. The expected head changes only the Markdown comparison span in Mission Control's live instruction; it is an administrative syntax repair, not implementation work. No unexpected descendant had to be accepted.

Repository instructions, live records, F-04 authorization, builder correction report, prior Codex findings and relevant implementation/tests/configuration were read. Previously read Mission Control records 03–09, the parent reconciled build plan, prior Codex reports and foundational operating sources were checked for changes since the last review and are unchanged. The prior [FAIL reports](03-stage1-independent-reverification.md) remain historical evidence.

## Scope and inventory

The complete base-to-reviewed-head inventory contains **52 files**: **35 OLE files**, **14 communication files**, and `package.json`, `tsconfig.json`, `vitest.fast.config.ts`.

Since the prior verifier publication `890059588fd29b76e1baf8bd929f08acb27e45d0`, F-04 implementation/configuration changes are the two CLI scripts and one Fast Gate include entry, plus new `organizational-learning/tests/cli-process.test.ts`. Other intervening changes are mission authorization/reporting and the Markdown repair. The two CLI functions retain their existing runtime logic; their wrappers now call Node's `pathToFileURL` for main-module detection.

The receipt store, schemas, provenance/Git/path helpers, allowlist, scanner, hashing, package scripts, lockfile, TypeScript configuration and workflows are unchanged from the previous verified checkpoint. The full PR changes no dependency versions, lockfile, application code, governance, Product Truth, deployment, provider configuration or database implementation. No unauthorized implementation scope was found.

## Independent tests and reproductions

`npm run test:fast -- organizational-learning` completed on Windows with Node `v24.18.0`:

- **16 OLE test files passed.**
- **194 OLE tests passed**, including all eight new actual-process CLI tests.
- Duration: **30.05 seconds**.
- No skipped/todo tests were reported; the inspected OLE sources contain no `.skip`, `.todo` or `.only` declarations.

The new suite explicitly participates in `vitest.fast.config.ts`. It uses `spawnSync` with the actual Node executable and actual CLI files. Its imports are performed from temporary entry-point files. The earlier tests still exercise imported functions; those are distinct evidence layers.

Additional independent checks used child Node processes, synthetic JSON, temporary importer files, isolated Git fixtures and a real temporary Windows junction. Temporary roots and cleanup targets were checked for containment; the junction was removed separately before recursive cleanup. No real closed Smart Business mission, real credential, external integration service or implementation edit was used. No implementation was temporarily reverted. The builder's reported old-code negative-control experiment is not claimed as an independently repeated Codex experiment.

## F-04 — direct CLI execution corrected; import safety incomplete

### Independently confirmed correction

Both wrappers now use `pathToFileURL(process.argv[1]).href` and still call the existing `runHarvest` / `runValidate` functions. No duplicate business logic was introduced.

Real child Node processes on Windows independently established:

| Case | Harvest | Validate |
| --- | --- | --- |
| Malformed JSON with synthetic canary | Exit 1; safe invalid-JSON diagnostic; no canary in stdout/stderr | Exit 1; safe invalid-JSON diagnostic; no canary in stdout/stderr |
| Missing required input | Exit 1 | Exit 1 |
| Valid synthetic input | Exit 0 and `SCREENED`; an actual receipt was created with two expected evidence entries | Exit 0 and `PASS` for the synthetic closure envelope |
| Import from a temporary `.mjs` entry-point file | Importer completed; no CLI output; `process.exitCode` unchanged | Importer completed; no CLI output; `process.exitCode` unchanged |

The synthetic input path contained a space, and scripts were launched by native absolute Windows paths. Thus the prior Windows silent-success defect is corrected for ordinary direct invocation. Empty output is no longer the only evidence: successful harvest created and validated a real temporary receipt.

### Remaining blocker — importing without an entry-point filename throws

**Exact code:** `organizational-learning/scripts/harvest.mjs:326` and `organizational-learning/scripts/validate.mjs:78` call `pathToFileURL(process.argv[1])` unconditionally while evaluating `isMainModule()`. That guard is itself evaluated during module import.

Node's module-evaluation mode can have no entry-point filename. An independent child process confirmed `typeof process.argv[1] === "undefined"` under `--input-type=module --eval`. Importing either CLI module in that ordinary Node context then throws before the importer can continue.

Reproduction shape, with the actual target represented by its valid file URL:

```text
node --input-type=module --eval "await import('<absolute file URL of harvest.mjs>'); process.stdout.write('IMPORT_OK')"
node --input-type=module --eval "await import('<absolute file URL of validate.mjs>'); process.stdout.write('IMPORT_OK')"
```

The actual reproduction supplied arguments directly to `spawnSync`, without shell interpolation. Observed for each module:

```json
{
  "argv1Type": "undefined",
  "evalImportExit": 1,
  "evalImportCompleted": false,
  "code": "ERR_INVALID_ARG_TYPE",
  "message": "The \"path\" argument must be of type string. Received undefined",
  "atEntryPoint": true
}
```

The original child process exited 1 without the completion marker. A second diagnostic-only child caught the exception and confirmed its code, message and CLI-entry-point stack location. No input file or provider access was needed to reproduce this failure.

**Why this remains F-04:** the correction is required to preserve ordinary importability while separating import from CLI execution. The new path conversion fixes direct invocation but introduces an exception when the host has no script filename. The previous string comparison would simply be false in this context. The eight current process tests import from files, which always provide `process.argv[1]`; they do not cover its absence.

**Blast radius:** importing either exported runtime module from the demonstrated Node eval context fails before the caller can use its functions. This is an import-compatibility regression, not a recurrence of silent direct-CLI success. Direct CLI execution and file-based import passed. No auto-run, receipt mutation, secret disclosure, production effect or universally broken import behavior is claimed. Other hosts lacking an entry filename may be affected, but only the stated child-process context was executed independently.

**Narrow correction scope:** make absent/non-string entry-point metadata resolve to “not main” before path-to-URL conversion in both guards, preserving the corrected direct-invocation logic. Add child-process imports without an entry-point filename for both modules, alongside the existing direct/file-import regressions. No runtime business-logic, scanner, dependency, receipt or governance change is needed. Codex made no correction.

**F-04 disposition:** original direct-execution defect resolved; required import safety remains incomplete. This prevents a final Stage 1 `PASS`.

## F-01/F-02/F-03 regression status

| Finding | Independent final regression evidence | Status |
| --- | --- | --- |
| F-01: raw and physical receipt containment | Original `../escaped` input preserved its raw diagnostic payload while using hashed placement. First write to a nonexistent nested receipt tree worked; repeat used one receipt identity with preserved creation time and a new retry run ID. A pre-existing escaping junction blocked write before creation, blocked lookup of a planted receipt, and blocked the actual failure-receipt flow. | Resolved within the tested static filesystem boundary. |
| F-02: canonical persistence | Reversed acceptance/closure orders produced equal complete manifests and fingerprints. Corresponding partial/failure cases also matched in `[a.md, z.md]` order. Successful repeat processing preserved receipt bytes. The existing hash implementation and all canonical persistence branches are unchanged by F-04. | Resolved; no regression reproduced. |
| F-03: malformed-JSON no-echo | Both imported functions and actual CLI processes rejected the synthetic canary with exit 1 and no raw-value echo. A committed synthetic quarantine control produced `QUARANTINED`/`VALIDATION_FAILED` without echo in receipt or returned result. | Resolved, including actual CLI output. |

The canary was fabricated as `AKIA` followed by sixteen zeroes, not a real credential. Physical containment proof is limited to inspected code and tested static junction behavior; no universal race/concurrency or every-reparse-point claim is made.

## Whole Stage 1 acceptance boundary

| Area | Assessment and evidence reach |
| --- | --- |
| A. Candidate/promotion authority | Separate strict schemas and prohibited-field tests remain intact and passed. Candidate maturity/authority stay fixed, human promotion is a distinct contract, and no automatic promotion executor exists. Schema-valid actor text is not actual human approval. |
| B. Closure envelope | Explicit envelope schema requires pinned source identity and at least one evidence reference. The harvester consumes an explicit envelope; it does not infer acceptance from prose, a merge or a label. Schema validation establishes shape, not actual Mission Control acceptance. |
| C. Claim-level provenance | Per-claim repository/commit/path/blob/locator fields remain intact. The standalone runtime validator distinguishes valid evidence, missing commit/path, non-regular object and blob mismatch; all nine dangling-reference tests passed. Semantic truth, locator meaning and human authority require review beyond shape/object checks. |
| D. Allowlist/path/Git reads | Mission/archive eligibility and explicit live exclusion are unchanged. Safe-path and pinned Git-object tests passed, including dirty-worktree independence and rejection of symlink/gitlink/non-regular source objects. Eligibility remains distinct from authority. |
| E. Screening/quarantine | Existing missing/throwing/unrecognized-scanner tests passed; actual synthetic quarantine and parse/CLI no-echo checks passed. The fixed heuristic is still only the accepted Stage 1 proof, not production-grade secret scanning. |
| F. Determinism/identities | F-01/F-02 reproductions passed. Source fingerprint, receipt identity, retry run ID, candidate revision hash and separate promotion contract are not conflated. Successful repeat is a no-op; failed receipt states remain retryable failures. Later publication identities/execution remain unimplemented. |
| G. Receipt truthfulness | Inspected Stage 1 writes remain `HARVESTED`, `SCREENED` or `VALIDATION_FAILED`. Tests enforce clean/nonempty evidence for screened success and a reason for validation failure. Nothing executed here claimed extraction, promotion, publication or institutional acceptance. |
| H. Autonomous-write boundary | Inspected runtime remains local Node filesystem/crypto and committed Git reads, with explicit receipt persistence. No autonomous Git publication/merge, promotion, governance/Product Truth write, provider mutation or production/customer-data code path was introduced. |
| I. Dependencies | Full diff and correction interval show no added dependency or lockfile change. `pathToFileURL` and child-process tests use existing Node capabilities. |
| J. Stage exclusions | No AI/provider semantic extraction, real candidate extraction, promotion executor, background automation, real proof output, Stage 2 implementation or `SB-P-1.12` activation appears in the reviewed scope. Codex used synthetic fixtures only; repository evidence does not purport to audit all external actor activity. |

These checks support the implemented contracts and corrected direct CLI paths, but do not erase the reproduced import regression. Green tests and CI are insufficient for acceptance while that required boundary remains defective.

## Exact-current-head CI evidence

Before disposition, all applicable checks for reviewed head `7d5e46f85868f948d0fb307da90523c89cffc655` were independently confirmed **completed/success**, event `pull_request`:

| Workflow | Run and observed result |
| --- | --- |
| Application Build Assurance #137 | [35136214848](https://github.com/SmartBusinessv1/smart-business/actions/runs/35136214848): Lint, Typecheck, Build and Fast Tests succeeded. Log shows **24 files, 255 tests passed**, duration **8.06 seconds**; `cli-process.test.ts` actually executed its eight tests. |
| Full Assurance #38 | [35136214829](https://github.com/SmartBusinessv1/smart-business/actions/runs/35136214829): Full Assurance Tests completed successfully. Read-only evidence; not rerun locally. |
| Markdown Quality Gate #1741 | [35136214927](https://github.com/SmartBusinessv1/smart-business/actions/runs/35136214927): completed successfully after the Mission Control syntax repair. |

Application logs identify merge-test checkout `01fa09e43179af7dc6509caea6a6c6d6b8161e97`, merging the reviewed branch head into the base stated above. Branch head, PR merge checkout, workflow run and test result are distinct evidence. The builder's earlier Markdown failure is historical and is not repeated here as a current defect. These results do not claim CI completion for the later verifier-report publication commit.

## Limitations and handoff

No additional independently established non-blocking defect is raised. The accepted heuristic-scanner limitation and later-stage recovery/promotion work remain explicit limitations, not new redesign requests. Broader testing stopped after documenting the concrete remaining import defect; no claim of universal assurance is made.

**Final disposition: `FAIL`. Stage 1 is not ready for Mission Control acceptance review until the remaining F-04 import-safety regression is addressed and independently re-verified.**

Only this report and the minimum live verifier handoff are publication changes. Codex did not modify implementation, tests, dependencies, workflows, builder history, prior verifier reports, governance or Product Truth. Codex did not approve, merge, activate Stage 2, process the real `SB-OPS-CI-ARCHITECTURE-1.0` proof mission, perform AI extraction or activate `SB-P-1.12`.

`STAGE 1 INDEPENDENT FINAL RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`
