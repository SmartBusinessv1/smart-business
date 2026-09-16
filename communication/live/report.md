# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 1 Corrective Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Current actor:** Claude Code

**Status:** `STAGE 1 NARROW CORRECTION AUTHORIZED — F-04 ONLY`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**Pull request:** `#588 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Latest Codex disposition

`FAIL`

Durable verifier report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/03-stage1-independent-reverification.md`

Verifier publication commit:

`890059588fd29b76e1baf8bd929f08acb27e45d0`

Codex independently confirmed **F-01, F-02 and F-03 resolved** within the stated evidence reach.

New blocking finding:

- **F-04:** actual `harvest.mjs` and `validate.mjs` CLI processes on Windows can silently skip their execution path because main-module detection compares `import.meta.url` to a raw `file://${process.argv[1]}` string. Invalid input can therefore yield process status 0 with no output even though the imported runtime function would reject it.

Existing green tests/CI do not close this command-level defect because the prior tests exercised imported functions rather than the actual Node CLI process.

---

## Mission Control decision

`NARROW CORRECTION REQUIRED — F-04 ONLY`

Controlling authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/10-stage1-f04-correction-authorization.md`

Active builder instruction:

`communication/live/instruction.md`

Claude Code must correct only the cross-platform CLI main-module detection, add genuine child-process regressions, run applicable validation/CI, update the existing durable builder report plus the minimum builder section here, and stop with:

`STAGE 1 F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not self-approve.
Do not merge.
Do not begin Stage 2.
Do not activate `SB-P-1.12`.

---

## Builder F-04 correction report

**Status:** `STAGE 1 F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report (revised):** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`, new Section 24.

**Fix, one line changed per script, no dependency:** `organizational-learning/scripts/harvest.mjs` and `organizational-learning/scripts/validate.mjs` both replaced the naive `file://` string-prefix comparison of `import.meta.url` against `process.argv[1]` with `import.meta.url === pathToFileURL(process.argv[1]).href` (Node's own standard, platform-correct idiom; `pathToFileURL` is a `node:url` built-in). Verified empirically on this exact Windows environment before writing the fix: the old comparison is `false` for direct execution, the new one is `true`, and the new one correctly stays `false` when the module is only imported.

**Regression proof, genuine process-level tests (the first in this mission):** new file `organizational-learning/tests/cli-process.test.ts`, 8 tests, spawns the actual `node harvest.mjs` / `node validate.mjs` processes via `spawnSync` (matching Codex's own reproduction method) rather than importing functions. Covers: malformed JSON on the real process (nonzero, safe diagnostic, no canary echo, both scripts); missing required input (nonzero, both scripts); valid synthetic input actually executing and returning genuine success (the exact case that was silently false before); and importing either script from a separate spawned process producing no output/no auto-run. **The suite was proven genuine**: the fix was temporarily reverted and the suite re-run — 6 of 8 tests failed exactly as expected against the old code, then the fix was restored and the full suite re-verified green.

**Scope discipline:** exactly 3 files touched (`harvest.mjs`, `validate.mjs`, `vitest.fast.config.ts`) plus 1 new test file, 0 dependencies added, `package-lock.json` unchanged. F-01/F-02/F-03 designs were not reopened.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **255/255 passing** across 24 files (up from 247/23 — 8 new tests, 1 new file); `npm run build` succeeds; Markdown Quality Gate PASS on both revised report files; `package-lock.json` unchanged.

**CI on this correction's pushed head:** see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab for the live, current-head result — not restated here as a fixed claim, per the standing anti-recursion rule.

**Scope confirmation:** only the F-04 finding was corrected. No AI/semantic extraction, no processing of `SB-OPS-CI-ARCHITECTURE-1.0`, no background automation, no provider/network writes, no promotion execution, no Stage 2 activation, no `SB-P-1.12` activation, no self-approval, no merge. Codex was not authorized by this builder — the prior `FAIL` disposition stands until Codex re-verifies again.

---

## Review chain

**Claude Code F-04 correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 acceptance is not OLE mission completion.
