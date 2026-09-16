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

## Review chain

**Claude Code F-04 correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 acceptance is not OLE mission completion.
