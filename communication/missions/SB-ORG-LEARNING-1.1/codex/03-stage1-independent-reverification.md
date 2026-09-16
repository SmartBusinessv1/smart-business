# SB-ORG-LEARNING-1.1 — Stage 1 Independent Re-Verification, Round 3

**Verifier:** Codex

**Final disposition:** `FAIL`

**Stage 1 ready for Mission Control acceptance:** No — new blocking finding F-04.

## Authority, scope and reviewed state

This report executes the [current verifier instruction](../../../live/instruction.md), [F-01/F-02/F-03 correction authorization](../mission-control/08-stage1-f01-f02-f03-correction-authorization.md), and [Mission Control re-authorization](../mission-control/09-stage1-f01-f02-f03-rereview-and-codex-reauthorization.md). It independently re-verifies the three corrections and the whole Stage 1 evidence boundary, including the newly required CLI-main checks.

The [first verification](01-stage1-independent-verification.md) and [second verification](02-stage1-independent-reverification.md) remain historical records. This report credits resolved findings without rewriting those records or treating builder/Mission Control conclusions as independent proof.

- Repository: `SmartBusinessv1/smart-business`.
- Branch: `mission/SB-ORG-LEARNING-1.1-stage1-successor`.
- Reviewed local, remote and PR head: `857c2cbefdadae155cedfd497b53f8c9803040c9`.
- [PR #588](https://github.com/SmartBusinessv1/smart-business/pull/588): `OPEN`, unmerged, base `main`.
- Base SHA: `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`.
- Builder correction checkpoint: `23266d4bc49a7821ec4af1503f997dcbb28cb967`.

The clean branch was fetched and fast-forwarded before verification. After a usage-limit interruption, local and remote heads and the working tree were rechecked; the reviewed state was unchanged. No tests were rerun merely because execution resumed.

Compared with the previous verifier publication `ef2a4c8d6e48a8288411a00875d703a560609aa8`, implementation changes are exactly the receipt store, harvest/validate scripts, and their three test files. The fingerprint algorithm, revision hashing, provenance validator, Git reader, source safety/allowlist, schemas, scanner and lockfile are unchanged. The full PR inventory remains within OLE implementation/tests/documentation, mission communication and the original package-script/TypeScript/Fast Test integration. No application, workflow, provider, database, governance or Product Truth change was found in that inventory.

## Independently reproduced evidence

`npm run test:fast -- organizational-learning` completed successfully on Windows with Node `v24.18.0`: **15 test files, 186 tests passed**, duration **31.06 seconds**. This re-executed the candidate/promotion, provenance, path/allowlist, committed-object reader, screening, receipt, fingerprint, revision, harvest and validate tests. No skipped/only/todo test declarations were found in the inspected OLE tests.

Additional inline Node checks imported the real runtime functions and launched the actual CLI files in child Node processes. All input files, receipts, directory indirection and synthetic Git evidence used isolated temporary roots. Before recursive cleanup, root containment was checked and the junction was removed separately. No implementation or test file was edited, no reproduction script was committed, and no real closed-mission proof target or external integration test was run.

### F-01 — RESOLVED within the authorized Stage 1 boundary

The receipt store retains the hashed mission storage key and lexical path check, then applies `assertPhysicallyContained` before lookup and write. The latter resolves the deepest existing destination ancestor with `realpathSync` and compares it with the physical receipts root. It therefore inspects filesystem indirection rather than merely comparing path strings.

Independent checks confirmed:

- Lookup against a not-yet-existing nested receipts tree returns no receipt; the ordinary first write succeeds.
- The original invalid envelope `{"mission_id":"../escaped","closure_revision":"REV-CODEX-1"}` writes a contained `VALIDATION_FAILED` receipt and preserves the raw mission identifier.
- Repeating that input uses one receipt location, preserves creation time and changes the retry run ID.
- A pre-existing Windows junction at `<receipts>/<sha256(mission_id)>`, pointing to a sibling temporary directory, is lexically inside but physically outside the receipts root.
- `writeReceipt` rejects that junction before creating a redirected receipt.
- After independently planting a valid synthetic receipt in the sibling target, lookup rejects the junction rather than reading the planted receipt. The actual `runHarvest` invalid-envelope flow also rejects it; the planted bytes remain unchanged.

Observed physical-boundary result:

```json
{
  "lexicalPathInside": true,
  "physicalDirectoryOutside": true,
  "writeBlockedBeforeCreation": true,
  "lookupWithPlantedReceiptBlocked": true,
  "realHarvestFailureFlowBlocked": true,
  "plantedReceiptUnchanged": true
}
```

This resolves the reproduced raw-traversal and static directory-indirection findings. It does not establish universal race/concurrency security, all reparse-point variants, or an independently executed Linux filesystem reproduction. The correction authority expressly excludes a race-hardening redesign.

### F-02 — RESOLVED

`harvest.mjs` now derives `canonicalManifest = sortManifest(manifest)` and reuses it for fingerprint input, the `HARVESTED` receipt, final `SCREENED`/`VALIDATION_FAILED` persistence, partial-evidence failure persistence and screening input. Early validation failures have empty manifests. The existing fingerprint/hash implementation is unchanged.

In an isolated Git repository, synthetic `z.md` and `a.md` evidence was supplied in both acceptance/closure orders against the same commit and closure revision. Independent success runs persisted equal complete manifests in `[a.md, z.md]` order and equal fingerprints. Two corresponding failure runs, each adding a missing evidence reference, also persisted equal canonical partial manifests and equal fingerprints, with state `VALIDATION_FAILED`.

The intermediate `HARVESTED` write uses the same canonical value by direct code inspection. A repeated successful invocation returned `already processed` and left the persisted receipt byte-identical, confirming the existing successful-run no-op behavior.

### F-03 — RESOLVED at the corrected read/parse boundary

Both runtime functions now separate file reads from parsing. Parse failures use fixed diagnostics; neither catch interpolates the parser's exception text. File-read failures identify the operation and caller-supplied path without including file contents. Post-parse schema validation remains unchanged.

An invalid JSON file containing only a synthetic AWS-key-shaped canary, generated as `AKIA` followed by sixteen zeroes, was passed independently to both `runHarvest` and `runValidate`. Both returned exit code 1, classified the input as invalid JSON and omitted the canary. Missing-file checks also returned 1 and retained useful operation/path context. A positive control harvested committed synthetic evidence containing the same canary: screening returned `QUARANTINED`, the receipt recorded `VALIDATION_FAILED`, and neither receipt nor returned diagnostic echoed the canary.

Actual CLI process output could not establish executing-main-path no-echo assurance: both commands silently skipped their logic on Windows, as documented in F-04 below. That is a separate entry-point defect; the fixed parser diagnostic itself passed its independent reproduction.

## New blocking finding F-04 — Windows CLI commands silently skip execution

**Classification:** Stage 1 execution and truthful exit-status blocker.

**Exact implementation evidence:** `organizational-learning/scripts/harvest.mjs:308` and `organizational-learning/scripts/validate.mjs:71` define `isMainModule`. Their comparisons at lines 309 and 72 construct a file URL by prefixing the raw `process.argv[1]` with `file://` and compare it with `import.meta.url`.

On Windows, the native absolute argv path and the module's canonical file URL have different representations. The comparison is false. Consequently the guarded calls to `runHarvest`/`runValidate`, output handling and `process.exitCode` assignment never execute. Node exits with its default status 0.

`package.json:19` and line 20 expose these files as `ole:harvest` and `ole:validate`; the OLE README also documents direct Node invocation. This is an operational Stage 1 entry point, not an unused helper. The comparison predates the latest corrections; it was discovered by the current instruction's explicit process-level verification.

### Exact independent reproduction

Using `spawnSync(process.execPath, [absoluteScriptPath, ...args])` on `win32`, Node `v24.18.0`, invoke:

```text
node organizational-learning/scripts/harvest.mjs --envelope <temporary-malformed.json> --repo-root <temporary-root> --receipts-dir <temporary-root>/cli
node organizational-learning/scripts/validate.mjs closure-envelope <temporary-malformed.json>
```

The temporary file contains the same synthetic invalid-JSON canary used for F-03. No shell evaluation or external system is involved.

| Entry point | Imported function result | Actual Node process result |
| --- | --- | --- |
| `harvest.mjs` | Exit code 1; safe invalid-JSON diagnostic | Status 0; stdout length 0; stderr length 0; no spawn error |
| `validate.mjs` | Exit code 1; safe invalid-JSON diagnostic | Status 0; stdout length 0; stderr length 0; no spawn error |

The absence of a canary in empty output is not proof that the CLI validated or safely rejected the input. Both process invocations failed to execute their validation path.

### Blast radius and narrow correction request

On the verified Windows environment, documented CLI invocations can report process success for invalid input without performing harvesting or schema validation. An operator or caller relying on the exit code receives false-success evidence. The imported runtime functions and their tests still execute correctly. No production mutation, external transmission or Linux-process failure is claimed.

Mission Control should authorize only platform-correct main-module detection in the two scripts, using standard Node path/URL handling, plus genuine child-process regression tests. Those tests should prove invalid/missing input returns nonzero with safe diagnostics, valid synthetic input actually executes, importing the modules does not auto-run them, and platform/path representation does not silently bypass execution. This requires no dependency, scanner-policy change, real proof processing or later-stage work. Codex implemented no correction.

## Whole Stage 1 acceptance evidence

| Required boundary | Independent evidence and conclusion |
| --- | --- |
| Candidate/promotion authority separation | Separate strict contracts inspected; candidate maturity/authority and synthesis actor are fixed. Prohibited-field and promotion-authority tests passed. Structural actor fields do not prove real human approval. No promotion executor exists in the inspected runtime. |
| Claim-level provenance and dangling validation | Per-claim repository/commit/path/blob/locator contracts remain intact. The standalone validator composes the committed-object reader and distinguishes valid, missing commit, missing path, non-regular file and blob mismatch. All nine dangling-reference tests passed. This does not prove semantic truth or actual decision authority. |
| Source eligibility, live exclusion and pinned reads | Allowlist and safe-path/Git-reader code are unchanged; corresponding tests passed. Only mission/archive source classes are eligible, `communication/live/**` is excluded, and allowlisting does not confer authority. Git source reads use pinned object plumbing, not ambient dirty-worktree bytes. |
| Scanner fail-closed and secret-echo boundary | Existing missing/throwing/unrecognized-scanner tests passed; current fixed scanner and output contracts were inspected. Synthetic quarantine and corrected parse diagnostics passed. This is the accepted limited Stage 1 scanner, not production-grade universal secret assurance. CLI-main execution remains blocked by F-04. |
| Determinism, idempotency and receipt truth | F-01/F-02 reproductions passed. Failure states remain failures, successful repeats are byte-preserving no-ops, and receipt cross-field rules require clean screening/nonempty evidence for `SCREENED`. `HARVESTED` is written before screening; no Stage 1 path claims extraction/publication completion. F-04 separately invalidates command-level success evidence. |
| Autonomous writes and Stage exclusions | Inspected runtime uses local Node filesystem/crypto and Git object reads. Explicit receipt persistence is the implementation's write path. No AI/provider call, semantic extractor, background scheduler, autonomous Git publication or promotion executor was found. |
| Dependency, governance and Product Mission boundaries | Full PR scope and correction diff show no dependency/lockfile addition, provider mutation code, governance/Product Truth modification, Stage 2 activation or `SB-P-1.12` activation. No real proof output appears in the changed scope; Codex used synthetic temporary fixtures only. These are repository/execution observations, not an audit of all external actor activity. |
| Tests and evidence reach | Existing OLE tests genuinely ran and passed. The harvest/validate test files exercise imported functions; they do not establish that the two actual CLI-main branches run on Windows. Current CI success therefore does not disprove F-04 or justify Stage 1 acceptance. |

## Exact reviewed-head CI

All queried runs identify `857c2cbefdadae155cedfd497b53f8c9803040c9`, event `pull_request`, and completed/success:

| Evidence | Independently observed result |
| --- | --- |
| [Application Build Assurance 35122503664](https://github.com/SmartBusinessv1/smart-business/actions/runs/35122503664) | Lint, Typecheck, Build and Fast Tests succeeded. Fast Test log: 23 files, 247 tests passed, duration 7.91 seconds. |
| [Full Assurance 35122503636](https://github.com/SmartBusinessv1/smart-business/actions/runs/35122503636) | Full Assurance Tests job completed successfully; read-only evidence, not rerun locally. |
| [Markdown Quality Gate 35122503654](https://github.com/SmartBusinessv1/smart-business/actions/runs/35122503654) | Completed successfully. |

Application checkout logs identify merge-test commit `95a1c1d`, merging the reviewed head into base `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`. These are PR checks associated with the exact reviewed head and a GitHub merge checkout, not a claim that every runner checked out the head directly. Builder checkpoint facts remain historical. No claim is made about CI completion on the later verifier-publication commit.

## Non-blocking observations and handoff

No additional independently established non-blocking defect is raised. The accepted heuristic-scanner limitation and later-stage review/promotion/recovery work remain outside this correction scope. Physical containment evidence is bounded to inspected logic and tested static indirection, with no universal race-security claim.

**F-01, F-02 and F-03 are resolved to the evidence reach stated above. Final Stage 1 disposition remains `FAIL` because F-04 blocks truthful CLI execution. Stage 1 is not ready for Mission Control acceptance.**

Only this next durable report and the minimum live verifier section are publication scope. The implementation, builder report and previous Codex reviews are unchanged. Mission Control must decide narrow F-04 correction authorization and subsequent verification. No self-acceptance, merge, Stage 2 activation, real proof processing, AI extraction, background automation or `SB-P-1.12` activation was performed.

`STAGE 1 INDEPENDENT RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`
