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
