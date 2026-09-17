# SB-ORG-LEARNING-1.1 — Stage 1 Residual F-04 Import-Safety Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Disposition:** `NARROW CORRECTION REQUIRED — RESIDUAL F-04 IMPORT SAFETY ONLY`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Basis

Codex final independent re-verification confirmed:

- F-01 remains resolved within the tested boundary;
- F-02 remains resolved;
- F-03 remains resolved;
- the original F-04 Windows direct-CLI silent-success defect is resolved;
- a residual F-04 import-safety defect remains.

The residual defect is narrow: both CLI wrappers evaluate main-module detection during import and unconditionally pass `process.argv[1]` to `pathToFileURL`. In Node module-eval contexts such as `node --input-type=module --eval`, `process.argv[1]` may be absent. Importing either module then throws `ERR_INVALID_ARG_TYPE` before the caller can use the exported runtime functions.

This prevents Stage 1 acceptance.

## Authorized correction

Correct only the residual F-04 import-safety boundary in:

- `organizational-learning/scripts/harvest.mjs`
- `organizational-learning/scripts/validate.mjs`

Main-module detection must treat absent or non-string entry-point metadata as `not main` before any path-to-file-URL conversion.

Preserve the already-correct direct CLI behavior on Windows and other supported environments. Preserve `runHarvest` and `runValidate` as the single authoritative runtime logic. Do not create a second execution path.

A minimal shape is acceptable if it is clear and platform-correct, for example guarding `process.argv[1]` before calling `pathToFileURL`; the builder may choose an equivalent Node-native implementation.

## Required regression proof

Extend genuine child-process coverage to prove at minimum:

1. importing `harvest.mjs` through `node --input-type=module --eval` with no entry-point filename succeeds without CLI auto-execution;
2. importing `validate.mjs` through the same context succeeds without CLI auto-execution;
3. both eval-import cases leave the importing process able to continue to an explicit completion marker;
4. direct malformed/missing-input CLI cases still return nonzero;
5. valid synthetic direct CLI cases still execute successfully;
6. file-based imports remain safe;
7. F-03 canary/no-echo behavior remains intact;
8. no dependency or `package-lock.json` change is introduced.

Use isolated temporary fixtures only. Do not process the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target.

## Scope boundaries

Do not redesign or reopen F-01, F-02, or F-03 unless the residual F-04 correction directly regresses them.

Do not:

- alter receipt/path containment design;
- alter manifest ordering/fingerprinting semantics;
- alter scanner policy;
- broaden malformed-JSON diagnostics;
- perform AI/semantic extraction;
- process a real closed mission;
- implement promotion execution;
- implement background automation;
- add provider/network writes;
- add autonomous repository-write automation;
- modify governance or Product Truth;
- activate Stage 2;
- activate `SB-P-1.12`;
- merge;
- self-approve.

## Verification and return

Run the focused process-level regressions plus applicable Fast Gate, lint, typecheck, build, Markdown checks, and real CI.

Update the existing durable builder report:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`

and only the minimum builder section of:

`communication/live/report.md`

Do not make a metadata-only commit solely to embed the new branch-head SHA. PR #588 and GitHub Actions remain the live exact-head CI source of truth.

Then stop with:

`STAGE 1 RESIDUAL F-04 IMPORT-SAFETY CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not authorize Codex yourself.

## Review chain

Claude Code residual F-04 correction → Mission Control re-review → Codex independent final re-verification → Mission Control Stage 1 acceptance decision if PASS → human/Founder merge → explicit Stage 2 authorization.
