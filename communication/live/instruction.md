# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 1 NARROW CORRECTION F-04

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Mission Control disposition:** `NARROW CORRECTION REQUIRED — F-04 ONLY`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Read first

1. `communication/missions/SB-ORG-LEARNING-1.1/codex/03-stage1-independent-reverification.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/10-stage1-f04-correction-authorization.md`
3. `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`
4. current Stage 1 implementation/tests on this branch.

Apply only the F-04 correction below.

---

## F-04 — platform-correct CLI main-module execution

Codex independently verified that the imported `runHarvest` and `runValidate` functions behave correctly, but the actual CLI processes can silently skip execution on Windows because both scripts currently compare:

`` import.meta.url === `file://${process.argv[1]}` ``

That raw string construction is not a platform-correct file URL comparison on Windows.

Correct main-module detection in both:

- `organizational-learning/scripts/harvest.mjs`
- `organizational-learning/scripts/validate.mjs`

Use standard Node path/URL handling so direct CLI execution works correctly across supported platforms, including Windows, while ordinary module import does not auto-run CLI logic.

Do not duplicate business logic or create a second execution path. Keep `runHarvest` and `runValidate` as the authoritative runtime functions called by the CLI wrapper.

---

## Required regression proof

Add environment-independent/process-level tests, using isolated temporary fixtures only, that prove at minimum:

1. actual `node .../harvest.mjs` execution with malformed JSON returns nonzero and emits the safe F-03 diagnostic;
2. actual `node .../validate.mjs` execution with malformed JSON returns nonzero and emits the safe F-03 diagnostic;
3. missing/invalid required CLI inputs return nonzero rather than silent success;
4. valid synthetic CLI input actually executes the command path and returns the expected truthful status/output;
5. importing either module does not auto-run the CLI path or mutate `process.exitCode` merely because it was imported;
6. path/URL representation does not cause Windows execution to be skipped;
7. synthetic secret-like canaries remain absent from malformed-JSON CLI stdout/stderr.

Do not use the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target.

---

## Scope boundaries

F-01, F-02 and F-03 are accepted as resolved within the current independent evidence reach and must not be redesigned in this correction unless a direct regression caused by F-04 is demonstrated.

Do not:

- broaden scanner policy;
- alter receipt/path containment design;
- alter manifest hashing/order semantics;
- alter malformed-JSON diagnostic content except as needed to invoke the existing safe path through the CLI;
- process a real closed mission;
- perform AI/semantic extraction;
- implement promotion execution;
- implement background automation;
- add provider/network writes;
- add autonomous repository-write automation;
- modify governance/Product Truth;
- activate Stage 2;
- activate `SB-P-1.12`;
- merge;
- self-approve.

Do not add dependencies or modify `package-lock.json` without separate Mission Control authorization.

---

## Verification and durable return

Run applicable local tests, process-level CLI regressions, lint, typecheck, build, Markdown checks, Fast Gate, and applicable real CI.

Update:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`

and only the minimum builder section of:

`communication/live/report.md`

Do not make a metadata-only commit solely to embed the new head SHA. PR #588 / GitHub Actions remain the live current-head CI source of truth.

Then stop with:

`STAGE 1 F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not authorize Codex yourself.
