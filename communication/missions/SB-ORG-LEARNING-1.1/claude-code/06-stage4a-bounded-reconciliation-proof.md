# SMART BUSINESS — CLAUDE CODE STAGE 4A BOUNDED RECONCILIATION PROOF

# SB-ORG-LEARNING-1.1 — Stage 4A: Bounded Deterministic Reconciliation Wrapper Proof

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `4 — Background automation / reconciliation implementation`
**Sub-gate:** `4A — Bounded deterministic reconciliation wrapper`
**Actor:** Claude Code — authorized Stage 4A builder
**Status:** `STAGE 4A F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-17
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/21-stage3-acceptance-and-stage4a-bounded-reconciliation-authorization.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Implement and prove the smallest repository-native deterministic reconciliation wrapper needed to identify and classify closure-processing work: given an explicit, structured closure envelope and the durable receipts already on file, deterministically decide what (if anything) should happen next. This stage proves reconciliation lifecycle mechanics only — no semantic extraction, no candidate generation, no publication.

---

## 2. Pre-execution verification

1. Fetched `origin`; confirmed branch `mission/SB-ORG-LEARNING-1.1-stage2`; fast-forwarded to `6319496` (3 new Mission Control commits: Stage 3 acceptance, Stage 4A authorization, and the live handoff) — inspected each before relying on it.
2. Confirmed PR #589 `OPEN`, unmerged, head exactly `6319496deef79fa54f87c81ca10059ea996a919b`.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, `communication/live/report.md`, the Stage 4A authorization (`mission-control/21-...`), the Stage 3B durable report (`claude-code/05-...`), the Stage 3B authorization (`mission-control/20-...`), and the final reconciled build plan's Sections 11 (B7: processing identities/idempotency/concurrency/recovery), 15 (background automation target and its manual→automatic migration path), 17 (Build Now/Build Later classification), 18 (mandatory adversarial test families), and 20 (Founder decisions on manual-vs-automatic processing).
5. Read the accepted Stage 1-3 machinery to be reused: `ClosureEnvelopeSchema`/`envelopeEvidenceRefs`, `ReceiptSchema`/`PROCESSING_STATES`, `isAllowlistedSourcePath`, `resolveBlobAtPath`/`verifyCommitExists`, `sortManifest`/`computeSourceFingerprint`, `computeMissionStorageKey`/`resolveContainedPath`/`isAlreadyProcessed`/`newRunId`, `runHeuristicScan`/`runScreeningSafely`.

---

## 3. Files created / modified

| Path                                                                                               | Change   | Purpose                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizational-learning/schemas/reconciliation.schema.ts`                                         | new      | The narrow, strict, runtime-validated reconciliation-plan contract (`ReconciliationPlanSchema`, `ReconciliationWorkItemSchema`, `RECONCILIATION_STATES`).                                                                       |
| `organizational-learning/scripts/reconcile.mjs`                                                    | new      | The wrapper itself: `classifyEnvelope`, `planReconciliation`, `attemptReconciliationOwnership`/`releaseReconciliationOwnership`/`isLocked`, and the CLI (`runReconcile`), composing only already-accepted Stage 1-3 primitives. |
| `organizational-learning/tests/reconcile.test.ts`                                                  | new      | 19 focused tests covering every mandatory proof case (A-M).                                                                                                                                                                     |
| `organizational-learning/tests/reconciliation.schema.test.ts`                                      | new      | 13 focused schema-contract tests, matching this repository's one-schema-one-test-file convention.                                                                                                                               |
| `organizational-learning/reconciliation/README.md`                                                 | new      | States the directory's plan-only, no-authority boundary.                                                                                                                                                                        |
| `organizational-learning/reconciliation/plans/SB-OPS-CI-ARCHITECTURE-1.0/reconciliation-plan.json` | new      | The real, committed proof output for the real Stage 2A envelope/receipt.                                                                                                                                                        |
| `vitest.fast.config.ts`                                                                            | modified | Added the two new test files to the Fast Gate's explicit include list.                                                                                                                                                          |

No dependency was added. `package-lock.json` is confirmed unchanged. No candidate, promotion, receipt, or Stage 1-3 implementation file was modified.

---

## 4. Reconciliation state model

Six states, exactly as required, with one deliberate naming decision: **`SUPERSEDED_OR_REOPENED` reuses `receipt.schema.ts`'s own existing `PROCESSING_STATES` spelling verbatim**, rather than the prompt's own literal `REOPENED_OR_SUPERSEDED` ordering — the authorization explicitly instructs "use names consistent with existing contracts... do not create unnecessary parallel terminology," and this exact term is already part of the accepted receipt lifecycle contract.

| State                    | Meaning                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ALREADY_PROCESSED`      | A receipt for this exact `(mission_id, fingerprint)` already reached `SCREENED`. Rerun is a deterministic no-op.                                         |
| `ELIGIBLE_UNPROCESSED`   | A valid closure exists; no matching completed receipt exists (or an existing receipt has not yet reached `SCREENED`). Exactly one planned work item.     |
| `NEW_CLOSURE_REVISION`   | The mission already has a receipt for a _different_ `closure_revision`. A distinct new processing revision, not an overwrite.                            |
| `SUPERSEDED_OR_REOPENED` | The envelope's `reopens`/`supersedes_closure` field is set. Prior reusable state is flagged for human reconciliation, never silently reused or resolved. |
| `INVALID_OR_UNSAFE`      | Unresolvable `source_snapshot_ref`, or one or more evidence references are not allowlisted/resolvable. Fails closed.                                     |
| `FAILED_RETRYABLE`       | A matching receipt exists and previously reached `VALIDATION_FAILED`. Distinct from `ALREADY_PROCESSED`; always `retry_eligible: true`.                  |

Two schema-level invariants (Zod `superRefine`, enforced structurally, not just by convention) make misclassification impossible to represent: `FAILED_RETRYABLE` must always carry `retry_eligible: true`, and `SUPERSEDED_OR_REOPENED` must always carry `needs_human_reconciliation: true`; `ALREADY_PROCESSED` must never claim `retry_eligible: true`.

---

## 5. Processing-identity design

A work item binds `mission_id` + `closure_revision` + `source_snapshot_ref` + `source_fingerprint` — the fingerprint is computed by **reusing, unmodified**, the exact same `isAllowlistedSourcePath` → `resolveBlobAtPath` → `sortManifest` → `computeSourceFingerprint` sequence `harvest.mjs` itself uses, so a reconciled fingerprint always matches what the harvester would actually produce for the same envelope — this is composition of the accepted implementation, not a reimplementation of the fingerprint algorithm. Existing receipts are read (never written) via `computeMissionStorageKey`/`resolveContainedPath` (the exact F-01-hardened containment primitives), listed per-mission and schema-validated with the unmodified `ReceiptSchema`.

Five identities remain distinct, per B7, and are never conflated: source-snapshot identity (`source_snapshot_ref`), processing-run identity (a receipt's own `run_id`, plus this wrapper's own `run_id` for a reconciliation attempt), candidate-artifact identity (Stage 2B's `candidate_id`/revision hash — untouched here), review/promotion identity (Stage 3A's `promotion_id` — untouched here), and publication identity (not implemented at any stage yet). This wrapper touches only the first identity and reads the second (an existing receipt's `processing_state`) — it never reaches into candidate or promotion identities at all.

---

## 6. Required proof results

### A. Structured discovery only

`--envelopes-dir` enumerates only files ending in `.json`; a `notes.md` file in the same directory claiming a mission "is closed and accepted" is never opened, never parsed, and produces zero work items and zero rejected-input entries — it simply never enters the file list `collectJsonFiles` returns.

### B. Already processed — real data

The real Stage 2A envelope (`communication/missions/SB-ORG-LEARNING-1.1/claude-code/02-stage2a-closure-envelope-sb-ops-ci-architecture-1.0.json`) and the real, unmodified receipt were used. **Result: `ALREADY_PROCESSED`, fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`, exactly matching the genuine Stage 2A receipt.** Repeating the classification produced a byte-identical result. The real repository was never written to — only read (`git status` confirmed clean throughout).

To avoid reintroducing the exact Stage 3B shallow-clone defect, the test does not ask the ambient checkout to resolve the pinned historical commit `b60741cce...` directly. Instead it builds an isolated ephemeral repository containing the same three evidence files' **exact git-internal bytes** (read via `git cat-file -p <blobSha>`, not a working-tree `readFileSync` — this Windows machine's `core.autocrlf=true` would otherwise silently reintroduce CRLF and change the blob SHA on recommit, which is exactly what first happened and was caught before finalizing this report; see Section 11), and re-points only `source_snapshot_ref` at that ephemeral commit. Git blob SHAs are content-addressed, so the evidence blobs — and therefore the fingerprint — are identical to the real ones, letting the test resolve against the real, unmodified receipt without depending on checkout depth.

### C. Eligible unprocessed

A synthetic closure envelope with no matching receipt on file classifies as `ELIGIBLE_UNPROCESSED`, with `existing_receipt_processing_state: null`.

### D. Changed closure revision

An existing `SCREENED` receipt for `rev-1`, and a new envelope for the same mission at `rev-2` (same evidence, different revision — the revision itself is part of the fingerprint hash input, so this alone changes the fingerprint) classifies as `NEW_CLOSURE_REVISION`. The `rev-1` receipt file was re-read afterward and confirmed byte-for-byte unchanged — the wrapper never writes to the receipts store.

### E. Reopened mission

An envelope with `reopens: "rev-1"` (an existing `SCREENED` receipt on file for that revision) classifies as `SUPERSEDED_OR_REOPENED`, `needs_human_reconciliation: true`, `retry_eligible: false`, naming the exact flagged receipt ID in `reason`. The `rev-1` receipt remains `SCREENED`, untouched — nothing is silently marked resolved.

### F. Superseded closure

An envelope with `supersedes_closure: "rev-1"` classifies identically to E (`SUPERSEDED_OR_REOPENED`), with `reason` correctly saying "supersedes" rather than "reopens", and its own `closure_revision` (`rev-2-superseding`) remains separately identifiable from the superseded `rev-1`.

### G. Replay / idempotency

`planReconciliation` invoked twice with identical envelope files, receipts, and locks on disk produces `JSON.stringify`-identical output, and (per B above) the real ALREADY_PROCESSED case is itself a replay proof against genuine data.

### H. Concurrency (safe local proof mechanism)

`attemptReconciliationOwnership` uses an OS-level exclusive-create (`wx`) file write — atomic, not a check-then-write race. Two attempts at the same `(mission_id, closure_revision)`: the first acquires (`{acquired: true}`); the second deterministically receives `{acquired: false, reason: "already-active", owner_run_id: <first run's id>}`. A non-owner cannot release the owner's lock; the owner can, after which acquisition is possible again. This was also proven at the **real process level**: two separate, independently spawned `node reconcile.mjs --attempt-lock` invocations against the same fixture — the second process's plan shows the _first_ process's `run_id` as the lock owner, proving the busy/non-owner result holds across real process boundaries, not just in-process function calls.

### I. Failed state

A receipt with `processing_state: "VALIDATION_FAILED"` classifies as `FAILED_RETRYABLE`, `retry_eligible: true`. Neither `reason` nor `next_safe_action` contains the phrase "no material learning" (asserted directly) — a failed run is never translated into a no-material-learning claim.

### J. Recovery

A receipt with `processing_state: "HARVESTED"` (not yet `SCREENED`) classifies as `ELIGIBLE_UNPROCESSED` with `existing_receipt_processing_state: "HARVESTED"` and `next_safe_action` explicitly naming "resume harvest from HARVESTED" — the wrapper reasons about the durable intermediate state rather than treating it as either done or absent.

### K. Malformed input

Three cases, all fail closed with zero work items created:

1. Unparseable JSON containing a synthetic secret-shaped canary (`AKIA` + sixteen zeros) — rejected with the fixed diagnostic `"envelope file is not valid JSON"`; the rendered plan does not contain the canary anywhere (F-03's no-raw-content principle, reused).
2. Syntactically valid JSON that fails `ClosureEnvelopeSchema` — rejected with `"envelope failed schema validation"`.
3. A schema-valid envelope whose `source_snapshot_ref` does not resolve to a real commit — classified `INVALID_OR_UNSAFE`, `retry_eligible: true`, `source_fingerprint: null`.

### L. Deterministic ordering

`work_items` are always sorted by `mission_id::closure_revision` (byte-order), independent of input/insertion order — verified both by comparing declared classification order against its own sorted form, and by feeding the same three envelopes to `planReconciliation` in two different orders and confirming identical output ordering both times.

### M. No authority effect

The rendered plan never contains `"INSTITUTIONALISED"` or `"ORGANIZATION_WIDE"` anywhere, and always contains the literal `"authority_statement": "reconciliation plan, not execution authority"`. Importing the module never auto-runs the CLI path (the same proven `isMainModule()` guard reused verbatim from `harvest.mjs`/`validate.mjs`/`context-pack.mjs`). Missing required input returns nonzero with a safe diagnostic, never a silent success.

---

## 7. Regression genuineness

Before finalizing, two branches were independently, temporarily disabled directly in `reconcile.mjs`: the `SUPERSEDED_OR_REOPENED` check and the `ALREADY_PROCESSED` check (both forced to `false &&`). Re-running the full test suite against that broken version failed **exactly** the 3 tests that exercise those branches (the real-data already-processed test, and both the reopen and supersede tests) — no other test was affected. The script was restored and confirmed byte-identical to its pre-break state before proceeding. This is recorded as evidence the tests would have caught these exact regressions, not merely that they pass now.

---

## 8. Failure-receipt / safe-diagnostics reuse

Reconciliation performs no writes of its own (it never calls `writeReceipt`), so it introduces no new failure-receipt format. Its own rejected-input diagnostics reuse the exact F-03 discipline already accepted for `harvest.mjs`/`validate.mjs`: a read failure may safely echo the caller-supplied path; a JSON parse failure never interpolates the raw parser error text (which can echo verbatim input bytes). The generated plan itself is additionally screened with the existing, unmodified `runHeuristicScan`/`runScreeningSafely` before being written or printed, and the wrapper fails closed (exit 1, nothing written) on any non-`CLEAN` screening result.

---

## 9. Scope boundary confirmation

No candidate was generated. No promotion occurred. No registry, receipt, candidate, or promotion file was written or mutated — `reconcile.mjs` only ever reads `ClosureEnvelopeSchema`-valid envelope files and `ReceiptSchema`-valid receipt files; it has no import of, and never touches, `organizational-learning/candidates/` or `organizational-learning/promotions/` at all (confirmed by inspection, not merely by testing an absence). No PR, commit, or merge was performed by the tool. No model/provider/network call exists anywhere in the code. No GitHub Actions workflow file was created or modified. No dependency was added. `INSTITUTIONALISED`/`ORGANIZATION_WIDE`/Founder-approval are never producible by this schema or this code path. `SB-P-1.12` remains not activated.

---

## 10. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **306/306 passing**, 27 files (up from 274/25 — 19 new `reconcile.test.ts` tests + 13 new `reconciliation.schema.test.ts` tests; all 274 pre-existing tests unchanged).
- `npm run build` — succeeds.
- `npx prettier --check` on all new files — pass.
- Markdown Quality Gate on this durable report and the revised `communication/live/report.md` — PASS.
- `package-lock.json` — confirmed unchanged.

---

## 11. A methodology note: CRLF and content-addressing

While building the real-data proof (Section 6.B), the first attempt read evidence content via a working-tree `readFileSync`, then recommitted it into an ephemeral repository expecting the resulting blob SHA to match the real, already-computed Stage 2A fingerprint. It did not — the test correctly reported `ELIGIBLE_UNPROCESSED` instead of `ALREADY_PROCESSED`, because this Windows machine's `core.autocrlf=true` had reintroduced CRLF line endings into the working-tree copy (3929 bytes) versus the actual committed LF-normalized git blob (3865 bytes, confirmed via `git cat-file -p`), producing a different (but internally consistent) blob SHA once recommitted. This was root-caused before writing any workaround: `git cat-file -p <blobSha> | git hash-object --stdin` round-trips to the exact original blob SHA, confirming `git cat-file -p` — not a working-tree read — is what reproduces the exact committed bytes. The test was corrected to read evidence content that way; no wrapper logic was weakened, and no real file was involved in the mistake.

---

## 12. Applicable CI

This round modifies `vitest.fast.config.ts` (registering two new test files), which is itself named in `full-assurance.yml`'s selective path filter — Full Assurance was therefore expected to trigger again, and it did.

On PR #589 head `5e54168` (this round's commit):

- Lint (ESLint + Prettier) — `SUCCESS`.
- Typecheck (tsc --noEmit) — `SUCCESS`.
- Build (vite build) — `SUCCESS`.
- Fast Tests (vitest) — `SUCCESS` (306/306, including all 32 new Stage 4A tests).
- Markdown Quality Gate — `SUCCESS`.
- Full Assurance Tests (vitest) — `SUCCESS`, real run, not suppressed.

All six applicable workflows passed on this head.

---

## 13. Mission Control narrow correction — S4A-F-01 / S4A-F-02

Mission Control's substantive review (`mission-control/21-...`/`22-stage4a-f01-f02-correction-authorization.md`) accepted the implementation above as substantially satisfactory but found two narrow blockers before Stage 4A could be accepted. This section records only the correction; Sections 1-12 above remain the unaltered original proof record.

### 13.1 S4A-F-01 — approved closure-envelope location boundary

**Finding:** the wrapper structurally filtered for `.json` files but never checked that the envelope FILE's own repository location was itself an approved place for closure envelopes to live. A schema-valid envelope at an arbitrary path, or an arbitrary `--envelopes-dir`, could enter classification merely because the caller supplied that path.

**Correction:** a new, deliberately independent module, `organizational-learning/sources/envelope-location.ts` (`isApprovedClosureEnvelopeLocation`, `APPROVED_CLOSURE_ENVELOPE_ROOTS = ["communication/missions/"]`). It imports nothing from `sources/allowlist.ts` and is never derived from it, so a future change to evidence allowlisting can never silently widen envelope-location approval or vice versa. It never reads file content — location is a pure path-string decision relative to `repoRoot`, reusing `isSafeRelativePath` for traversal safety, computed identically whether `repoRoot` is the real checkout or an isolated ephemeral test repository.

`planReconciliation` now checks this **first**, before a candidate envelope file is ever opened: an unapproved path is pushed to `rejected_inputs` with the fixed, safe reason `"envelope location is not an approved closure-envelope location"` and its content is never read.

**Proof:**

- Mandatory proof 1 (real envelope's location approved): a pure, git-free unit test asserts `isApprovedClosureEnvelopeLocation(REPO_ROOT, REAL_ENVELOPE_PATH)` is `true` for the actual Stage 2A envelope's actual repository path — no shallow-clone dependency, since this never touches git.
- Mandatory proof 2 (unapproved copy rejected): the identical check against the same file content at an unapproved path returns `false`; a full integration test writes byte-identical schema-valid content into an unapproved directory and confirms `planReconciliation` produces zero work items.
- Mandatory proof 3 (no bypass via `--envelope`): an unapproved file supplied directly via `--envelope` (not merely discovered under `--envelopes-dir`) is rejected identically — a synthetic secret-shaped canary embedded in its `mission_id` never appears anywhere in the rendered plan.
- Mandatory proof 4 (unapproved directory via `--envelopes-dir`): a real `runReconcile` CLI invocation against an unapproved `--envelopes-dir` containing one otherwise-valid envelope produces `work_items: []` and one safe `rejected_inputs` entry.
- Mandatory proof 5 (no raw echo): confirmed by the canary assertion above; the location check never opens the file, so there is no content to echo in the first place.
- Additional proof: an approved-location envelope and an unapproved one submitted in the same run are classified independently — the approved one still produces a normal work item while the unapproved one is rejected, proving the boundary does not over-reject.
- 7 additional unit tests in `organizational-learning/tests/envelope-location.test.ts` cover prefix look-alikes, case-sensitivity, extension-only inference, and non-existent-but-approved paths (the check is structural, never dependent on the file actually existing).

### 13.2 S4A-F-02 — malformed durable receipt fails closed

**Finding:** `listReceiptsForMission` silently skipped any receipt file that was unreadable, not valid JSON, or failed `ReceiptSchema` — an ambiguous/corrupt durable receipt for the mission being reconciled could be indistinguishable from no receipt at all, potentially yielding `ELIGIBLE_UNPROCESSED` or `NEW_CLOSURE_REVISION` when the true state was unknown.

**Correction:** `listReceiptsForMission` now returns `{ receipts, issues }` instead of a bare array. Each candidate file is read through a single new chokepoint, `readAndValidateReceiptFile` (exported for direct testing), which reports exactly one of `UNREADABLE`, `INVALID_JSON`, or `SCHEMA_INVALID` instead of silently skipping. `classifyEnvelope` now checks `issues.length > 0` immediately after computing the fingerprint — **before** the reopen/supersede branch and every other receipt-dependent branch — and unconditionally returns `INVALID_OR_UNSAFE` with `retry_eligible: true`, `needs_human_reconciliation: true`, naming only the receipt-store storage key + filename + condition (never raw file content or a parser error string).

**Proof:**

- Mandatory proof 1/2 (malformed JSON / schema-invalid receipt blocks work): two isolated-fixture tests each place one corrupt receipt file in a fresh mission's receipt directory; classification of an otherwise-eligible envelope for that mission returns `INVALID_OR_UNSAFE`, explicitly asserted `not.toBe("ELIGIBLE_UNPROCESSED")` and `not.toBe("ALREADY_PROCESSED")`.
- Mandatory proof 3 (unreadable, portable): forcing a genuinely permission-denied file read is not reliably portable across Windows/CI (verified empirically on this exact Windows environment that ordinary file-attribute changes do not reliably block Node's own read as the file owner). Per the correction authorization's own explicit allowance, the equivalent failure branch is proven directly: `readAndValidateReceiptFile(<a directory path>)` reaches the identical `readFileSync` `catch` block a genuinely unreadable file would (empirically confirmed `EISDIR` is thrown consistently by this Node/Windows combination) and returns `{ok: false, condition: "UNREADABLE"}`.
- Mandatory proof 4/8 (deterministic, safe to retry after repair): one test classifies twice against the same corrupt fixture (byte-identical `INVALID_OR_UNSAFE` result both times), then removes the corrupt file and reclassifies, confirming normal `ELIGIBLE_UNPROCESSED` classification resumes.
- Mandatory proof 5 (no canary echo): a synthetic secret-shaped canary embedded in the corrupt (unparseable) receipt bytes never appears anywhere in the classification result.
- Mandatory proof 6 (repaired fixture resumes normally): covered by the same repair test above.
- Additional proof: a *reopening* envelope for a mission with a malformed receipt still returns `INVALID_OR_UNSAFE`, not `SUPERSEDED_OR_REOPENED` — confirming the check runs before every receipt-dependent branch, not only the two explicitly named in the finding.
- The real Stage 2A receipt was never modified by this correction — no test in this correction ever writes to `organizational-learning/receipts/`; Section 6.B's real `ALREADY_PROCESSED` proof (Section 13.3 below) continues to pass unchanged against it.

### 13.3 Regression confirmation — accepted Stage 4A behavior preserved

- **Real Stage 2A no-op:** re-run of the exact same test as Section 6.B — still `ALREADY_PROCESSED`, fingerprint still `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`, byte-identical replay.
- **New-revision / reopen / supersede:** Sections 6.D/E/F tests unchanged and still passing — `NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED` (both reopen and supersede) all classify identically to before.
- **Concurrency:** Section 6.H's function-level and real two-process CLI tests unchanged and still passing.
- **Recovery/retry:** Section 6.J's `HARVESTED`-resume test and Section 6.I's `FAILED_RETRYABLE`/"no material learning" test unchanged and still passing.
- **Deterministic ordering / no-authority output:** Sections 6.L/M unchanged and still passing.
- **CRLF methodology correction:** untouched; Section 6.B's ephemeral-repo/git-blob-read technique is reused verbatim.

### 13.4 Files changed in this correction

| Path                                                             | Change   | Purpose                                                                                       |
| ----------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `organizational-learning/sources/envelope-location.ts`             | new      | S4A-F-01: the independent approved closure-envelope location boundary.                        |
| `organizational-learning/tests/envelope-location.test.ts`          | new      | 8 focused unit tests for the location boundary, matching the one-module-one-test-file convention. |
| `organizational-learning/scripts/reconcile.mjs`                    | modified | Wires the F-01 location check into `planReconciliation`; replaces `listReceiptsForMission`'s silent-skip with fail-closed `{receipts, issues}` (F-02) and a new exported `readAndValidateReceiptFile`. |
| `organizational-learning/tests/reconcile.test.ts`                  | modified | Nests existing synthetic fixtures under an approved location (relative to each test's own `repoRoot`) so F-01 does not regress prior coverage; adds 3 new F-01 integration tests and 5 new F-02 tests. |
| `organizational-learning/reconciliation/README.md`                 | modified | Documents the approved-location boundary as part of the discovery description.                |
| `vitest.fast.config.ts`                                            | modified | Registers `envelope-location.test.ts` in the Fast Gate.                                       |

No dependency was added. `package-lock.json` confirmed unchanged. No candidate, promotion, receipt, or the real Stage 2A envelope/receipt file was modified.

### 13.5 Local verification (post-correction)

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean (two Prettier formatting issues auto-fixed with `--fix` before commit).
- `npm run test:fast` — **322/322 passing**, 28 files (up from 306/27 — 16 new tests: 8 in `envelope-location.test.ts`, 3 new F-01 integration tests and 5 new F-02 tests in `reconcile.test.ts`; all 306 pre-existing tests unchanged).
- `npm run build` — succeeds.
- `npx prettier --check` — pass.
- Markdown Quality Gate on this report and `communication/live/report.md` — PASS.
- `package-lock.json` — confirmed unchanged.

### 13.6 Real CI (S4A-F-01/F-02 correction)

On PR #589 head `0a3f9f812c84f96c414a2f01aa03987128711046` (this correction's commit):

- Team LIPS Application Build Assurance `#190` — `SUCCESS` (Lint, Typecheck, Build, Fast Tests all `SUCCESS`).
- Team LIPS Markdown Quality Gate `#1794` — `SUCCESS`.
- Team LIPS Full Assurance `#63` — `SUCCESS`, real run, not suppressed.

All six applicable workflows passed on this head.

---

## Required return summary (original Stage 4A proof, historical)

- **Proof result:** all thirteen mandatory Stage 4A proof cases (Section 6, A-M) demonstrated successfully.
- **Files changed:** 6 new files, 1 modified file (Section 3); 0 dependencies added; `package-lock.json` unchanged.
- **State model:** `ALREADY_PROCESSED`, `ELIGIBLE_UNPROCESSED`, `NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED` (reusing the existing receipt contract's exact term), `INVALID_OR_UNSAFE`, `FAILED_RETRYABLE`.
- **Already-processed result:** real Stage 2A data classifies `ALREADY_PROCESSED` with the exact genuine fingerprint; replay is byte-identical.
- **Unprocessed result:** exactly one `ELIGIBLE_UNPROCESSED` work item for a synthetic closure with no matching receipt.
- **Changed-revision result:** a newer revision for the same mission classifies `NEW_CLOSURE_REVISION`; the prior revision's receipt is preserved untouched.
- **Reopened/superseded result:** both flag `SUPERSEDED_OR_REOPENED`, `needs_human_reconciliation: true`, naming the prior receipt; nothing is silently marked resolved; no real Stage 3 promotion file was touched (the wrapper never references that directory).
- **Replay/idempotency result:** byte-identical repeated output; no duplicate work.
- **Concurrency result:** one atomic owner, one deterministic busy/non-owner result, proven at both the function level and the real two-process CLI level.
- **Recovery/retry result:** a `HARVESTED` receipt resumes correctly; a `VALIDATION_FAILED` receipt is `FAILED_RETRYABLE`, never "no material learning."
- **Malformed-input/safe-diagnostic result:** unparseable JSON, schema-invalid JSON, and an unresolvable commit all fail closed with zero work items and no raw-value echo.
- **Deterministic result:** stable `mission_id::closure_revision` ordering regardless of input order; two independently-proven regressions confirm the tests are not passing by construction.
- **Local checks:** typecheck/lint/Fast Gate (306/306)/build/Prettier/Markdown Quality Gate all pass.
- **Real CI:** all six applicable workflows `SUCCESS` on PR #589 head `5e54168` — Lint, Typecheck, Build, Fast Tests (306/306), Markdown Quality Gate, and a real (not suppressed) Full Assurance run.
- **Scope confirmation:** no automated extraction, no publisher, no provider/network call, no scheduler/cron/queue, no autonomous commit/merge, no promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no governance/Product Truth/production/customer mutation, no `SB-P-1.12` activation.

---

## Stop statement (original Stage 4A proof, historical)

**STAGE 4A BOUNDED RECONCILIATION PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED**

Only the authorized bounded deterministic reconciliation wrapper was implemented and proved: structured discovery, deterministic work-item identity, all six required reconciliation states, idempotency, new-revision handling, reopen/supersession flagging, a safe local concurrency primitive, recovery/retry reasoning, fail-closed malformed-input handling, and deterministic output — composing only the already-accepted Stage 1-3 contracts and lib functions, with one narrow, strict, runtime-validated new schema. No semantic extraction, no candidate generation, no promotion, no publication, no provider/network call, no scheduler, and no authority effect occurred. Stage 4B is not authorized by this report.

---

## Required return summary — S4A-F-01/F-02 correction

- **Files changed:** 2 new files, 4 modified files (Section 13.4); 0 dependencies added; `package-lock.json` unchanged.
- **S4A-F-01 mechanism and proof:** new independent module `organizational-learning/sources/envelope-location.ts` (`isApprovedClosureEnvelopeLocation`, root `communication/missions/`), checked in `planReconciliation` before any envelope file is opened. Proven: real envelope's location approved (pure, git-free); byte-identical copy at an unapproved path rejected; no bypass via direct `--envelope`; unapproved `--envelopes-dir` produces zero work items; no raw-content echo; approved and unapproved envelopes classified independently in the same run (Section 13.1).
- **S4A-F-02 mechanism and proof:** `listReceiptsForMission` now returns `{receipts, issues}`; any unreadable/malformed/schema-invalid receipt for the mission being reconciled unconditionally returns `INVALID_OR_UNSAFE` (`retry_eligible: true`, `needs_human_reconciliation: true`) before any other receipt-dependent branch runs. Proven: malformed-JSON and schema-invalid receipts both block work and are never `ELIGIBLE_UNPROCESSED`/`ALREADY_PROCESSED`; the equivalent unreadable-file branch proven directly and portably; deterministic across replay; normal classification resumes after repair; no canary echo; even a reopening envelope is blocked, not merely the two branches named in the finding (Section 13.2).
- **Real Stage 2A no-op confirmation:** unchanged — still `ALREADY_PROCESSED`, fingerprint still `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`, byte-identical replay (Section 13.3).
- **Concurrency/recovery regression result:** unchanged and still passing — one atomic owner/one busy result at both function and real two-process CLI level; `HARVESTED` resume and `VALIDATION_FAILED`/`FAILED_RETRYABLE` distinction both intact (Section 13.3).
- **Safe-diagnostic result:** neither correction ever echoes raw envelope/receipt content, a parser error string, or a secret-shaped canary; both report only fixed condition labels and safe paths (storage-key hash + filename for receipts, caller-supplied path for envelopes).
- **Local checks:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **322/322 passing** (28 files, +16 new tests, 0 regressions); `npm run build` succeeds; Prettier clean; Markdown Quality Gate PASS; `package-lock.json` unchanged (Section 13.5).
- **Real CI:** all three applicable workflows `SUCCESS` on PR #589 head `0a3f9f8` — Application Build Assurance #190 (Lint, Typecheck, Build, Fast Tests), Markdown Quality Gate #1794, and a real (not suppressed) Full Assurance #63 run (Section 13.6).
- **Scope confirmation:** no Stage 4B, no automated extraction, no provider/model/API integration, no scheduler/background workflow, no publisher/PR writer, no autonomous commit/merge, no automatic promotion, no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`, no dependency/lockfile/workflow change, no governance/Product Truth/production/customer mutation. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.

---

## Stop statement — S4A-F-01/F-02 correction

**STAGE 4A F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the two authorized narrow corrections (S4A-F-01 approved closure-envelope location boundary; S4A-F-02 fail-closed malformed-receipt handling) were implemented and proved, on top of the already-accepted Stage 4A implementation, which remains otherwise unchanged. No Stage 4B work, no automated extraction, no provider/scheduler/publisher, no promotion, no governance/Product Truth/production mutation, and no authority effect occurred. Stage 4B is not authorized by this report. Stage 5 is not authorized. `SB-P-1.12` remains not activated.
