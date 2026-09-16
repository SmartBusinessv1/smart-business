# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 1 RESIDUAL F-04 IMPORT-SAFETY CORRECTION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Mission Control disposition:** `NARROW CORRECTION REQUIRED — RESIDUAL F-04 IMPORT SAFETY ONLY`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Read first

1. `communication/missions/SB-ORG-LEARNING-1.1/codex/04-stage1-independent-final-reverification.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/11-stage1-f04-import-safety-correction-authorization.md`
3. `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`
4. current Stage 1 implementation and tests on this branch.

Apply only the residual F-04 correction below.

## Residual F-04 — import safety when no entry-point filename exists

The original Windows direct-CLI defect is resolved. Codex independently confirmed direct execution now works correctly.

A residual import-safety defect remains: both CLI wrappers currently evaluate main-module detection during import and unconditionally pass `process.argv[1]` to `pathToFileURL`. In Node module-eval contexts such as `node --input-type=module --eval`, `process.argv[1]` may be absent. Importing either module then throws before the exported runtime function can be used.

Correct only this boundary in:

- `organizational-learning/scripts/harvest.mjs`
- `organizational-learning/scripts/validate.mjs`

Absent or non-string entry-point metadata must resolve to `not main` before any path-to-file-URL conversion.

Preserve the corrected direct CLI behavior and keep `runHarvest` / `runValidate` as the authoritative runtime functions.

## Required regression proof

Add or extend genuine child-process tests proving at minimum:

1. eval-mode import of `harvest.mjs` succeeds with no CLI auto-run;
2. eval-mode import of `validate.mjs` succeeds with no CLI auto-run;
3. both importers continue to an explicit completion marker;
4. malformed and missing-input direct CLI cases remain nonzero;
5. valid synthetic direct CLI cases still execute successfully;
6. file-based imports remain safe;
7. F-03 secret-canary no-echo behavior remains intact.

Use isolated fixtures only. Do not process the real proof target.

## Scope boundaries

F-01, F-02 and F-03 remain resolved within current independent evidence reach. Do not redesign them unless the residual F-04 correction directly causes a regression.

Do not alter receipt containment, manifest ordering, scanner policy, governance, Product Truth, provider/runtime systems, promotion execution, background automation, Stage 2, or `SB-P-1.12`.

Do not add dependencies or modify `package-lock.json` without separate authorization.

Do not merge or self-approve.

## Verification and durable return

Run focused process-level regressions plus applicable Fast Gate, lint, typecheck, build, Markdown checks, and real CI.

Update:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`

and only the minimum builder section of:

`communication/live/report.md`

Do not make a metadata-only commit solely to embed the current head SHA. PR #588 and GitHub Actions remain the live exact-head CI source of truth.

Then stop with:

`STAGE 1 RESIDUAL F-04 IMPORT-SAFETY CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not authorize Codex yourself.
