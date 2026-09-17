# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 1 Residual F-04 Corrective Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Current actor:** Claude Code

**Status:** `STAGE 1 RESIDUAL F-04 IMPORT-SAFETY CORRECTION AUTHORIZED — CLAUDE CODE ACTION PENDING`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**Pull request:** `#588 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Latest independent disposition

Codex final independent re-verification returned `FAIL`.

Durable verifier report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/04-stage1-independent-final-reverification.md`

Codex independently confirmed:

- F-01 remains resolved within the tested boundary;
- F-02 remains resolved;
- F-03 remains resolved;
- the original F-04 Windows direct-CLI silent-success defect is resolved;
- residual F-04 import safety remains incomplete because `process.argv[1]` can be absent in Node module-eval contexts and is currently passed unconditionally to `pathToFileURL`.

Stage 1 is not ready for acceptance.

## Mission Control decision

`NARROW CORRECTION REQUIRED — RESIDUAL F-04 IMPORT SAFETY ONLY`

Controlling authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/11-stage1-f04-import-safety-correction-authorization.md`

Active builder instruction:

`communication/live/instruction.md`

Claude Code must correct only the residual F-04 import-safety boundary, add genuine eval-mode child-process import regressions, preserve the already-correct direct CLI behavior, run applicable local validation and real CI, update the existing durable builder report plus the minimum builder section here, and stop with:

`STAGE 1 RESIDUAL F-04 IMPORT-SAFETY CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not self-approve.
Do not merge.
Do not begin Stage 2.
Do not activate `SB-P-1.12`.

## Review chain

Claude Code residual F-04 correction → Mission Control re-review → Codex independent final re-verification → Mission Control Stage 1 acceptance decision if PASS → human/Founder merge → explicit Stage 2 authorization.

Stage 1 acceptance is not OLE mission completion.

---

## Builder residual F-04 correction report

**Status:** `STAGE 1 RESIDUAL F-04 IMPORT-SAFETY CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report (revised):** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`, new Section 25.

**Fix, one guard clause added per script, no dependency, no second execution path:** `organizational-learning/scripts/harvest.mjs` and `organizational-learning/scripts/validate.mjs`'s `isMainModule()` now check `typeof process.argv[1] !== "string" || process.argv[1].length === 0` and return `false` ("not main") before ever calling `pathToFileURL`, instead of passing `process.argv[1]` to it unconditionally. This directly matches the authorization's required behavior and its own suggested minimal shape. Verified empirically on this exact Windows environment before and after writing the fix: `process.argv[1]` is genuinely `undefined` under `node --input-type=module --eval`; the unguarded call throws exactly Codex's reported `ERR_INVALID_ARG_TYPE`; the guarded function still returns `true` under direct execution (preserving the Section 24 fix); and the guarded module's eval-mode import completes with no throw, reaching an explicit `IMPORT_OK` marker.

**Regression proof, genuine eval-mode child-process tests:** `organizational-learning/tests/cli-process.test.ts` extended with 2 new tests (10 total), each spawning a real, separate Node process via `node --input-type=module --eval` (matching Codex's exact reproduction method, no script-file argument) that imports the real `harvest.mjs` / `validate.mjs` by `file://` URL and asserts no `ERR_INVALID_ARG_TYPE`, exit status `0`, and an `IMPORT_OK` completion marker. **Proven genuine:** the guard fix was temporarily reverted and the suite re-run — exactly the 2 new tests failed with Codex's exact stack trace, the other 8 pre-existing tests were unaffected, then the fix was restored and the full suite re-verified green.

**Scope discipline:** exactly 3 implementation/test files touched (`harvest.mjs`, `validate.mjs`, `cli-process.test.ts`, extended not replaced), 0 new files, 0 dependencies added, `package-lock.json` unchanged. F-01, F-02, and F-03 were not reopened — none of their implementation files were touched and their existing suites pass unmodified. The original F-04 direct-CLI fix (Section 24) was preserved, not replaced.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint` clean on the 3 changed files; `npm run test:fast` **257/257 passing** across 24 files (up from 255/24 — 2 new tests in the same file, no new file); `npm run build` succeeds; Markdown Quality Gate PASS on both revised report files; `package-lock.json` unchanged.

**CI on this correction's pushed head:** see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab for the live, current-head result — not restated here as a fixed claim, per the standing anti-recursion rule. No metadata-only commit was made solely to embed a head SHA.

**Scope confirmation:** only the residual F-04 import-safety finding was corrected. No AI/semantic extraction, no processing of `SB-OPS-CI-ARCHITECTURE-1.0`, no background automation, no provider/network writes, no promotion execution, no receipt/path containment or manifest ordering change, no Stage 2 activation, no `SB-P-1.12` activation, no self-approval, no merge. Codex was not authorized by this builder.
