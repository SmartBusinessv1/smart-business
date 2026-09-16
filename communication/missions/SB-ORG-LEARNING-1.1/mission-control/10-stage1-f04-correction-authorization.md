# SB-ORG-LEARNING-1.1 — Stage 1 F-04 Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Authority:** Smart Business Mission Control

**Disposition:** `NARROW CORRECTION REQUIRED — F-04 ONLY`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Product Mission:** `SB-P-1.12 — NOT ACTIVATED`

## Evidence accepted

Mission Control reviewed Codex report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/03-stage1-independent-reverification.md`

Codex independently confirmed F-01, F-02 and F-03 resolved within the report's stated evidence reach, but reproduced new blocker F-04 on Windows: direct Node execution of both OLE CLI files can skip the guarded main path and exit with default success because `isMainModule()` compares `import.meta.url` to a raw `file://${process.argv[1]}` string.

Mission Control independently inspected the current implementation and confirmed both scripts use that same comparison.

## Authorized correction

Claude Code may change only the minimum implementation and tests needed to make CLI main-module detection platform-correct for:

- `organizational-learning/scripts/harvest.mjs`
- `organizational-learning/scripts/validate.mjs`

The correction must use standard Node path/URL handling and preserve the existing imported runtime functions as the single authoritative logic path.

Required process-level regressions must prove malformed/missing inputs return nonzero with safe diagnostics, valid synthetic invocation actually executes, module import does not auto-run, and Windows/path representation cannot silently bypass execution.

## Explicit exclusions

This authorization does not reopen F-01/F-02/F-03 design, scanner policy, candidate/promotion contracts, provenance architecture, source allowlisting, receipt-state semantics, dependency policy, provider state, Product Truth, governance, Stage 2, or `SB-P-1.12`.

No real closed-mission proof target may be processed. No AI/provider calls, background automation, autonomous repository writes, merge, self-approval, or Stage 2 activation are authorized.

Do not add dependencies or modify `package-lock.json` without separate Mission Control authorization.

## Verification required

Claude Code must run applicable unit/process tests, Fast Gate, lint, typecheck, build, Markdown checks, and real PR CI. It must update the existing durable builder report and only the minimum builder handoff in `communication/live/report.md`.

Do not create a metadata-only commit solely to embed a supposedly final branch SHA. PR #588 / GitHub Actions are the current-head source of truth.

## Review chain

**Claude Code F-04 correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Required builder stop line:

`STAGE 1 F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Stage 1 remains unaccepted.
