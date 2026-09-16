# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 1 Corrective Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Current actor:** Claude Code

**Status:** `STAGE 1 NARROW CORRECTION AUTHORIZED — F-01 / F-02 / F-03`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**Pull request:** `#588 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Codex independent re-verification

Disposition:

`FAIL`

Durable verifier report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/02-stage1-independent-reverification.md`

Verifier publication commit:

`ef2a4c8d6e48a8288411a00875d703a560609aa8`

Confirmed blockers:

- **F-01 residual:** pre-existing filesystem indirection can redirect receipt lookup/write outside the configured physical receipt boundary;
- **F-02:** persisted receipt manifests are not consistently canonical/sorted even though fingerprinting sorts its own copy;
- **F-03:** malformed JSON parse diagnostics can echo raw input bytes.

Existing passing tests and CI do not close these findings.

---

## Mission Control decision

`NARROW CORRECTION REQUIRED — F-01 / F-02 / F-03 ONLY`

Controlling authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/08-stage1-f01-f02-f03-correction-authorization.md`

Active builder instruction:

`communication/live/instruction.md`

Claude Code must apply only the three authorized corrections, run applicable validation and CI, update the existing durable builder report plus the minimum builder section here, and stop with:

`STAGE 1 F-01/F-02/F-03 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not self-approve.
Do not merge.
Do not begin Stage 2.
Do not activate `SB-P-1.12`.

---

## Review chain

**Claude Code correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 acceptance is not OLE mission completion.
