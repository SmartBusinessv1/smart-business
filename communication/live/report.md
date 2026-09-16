# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 1 F-01 Correction

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Current actor:** Claude Code

**Status:** `STAGE 1 F-01 CORRECTION AUTHORIZED — CLAUDE CODE ACTION PENDING`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**Pull request:** `#588 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Independent verification result

Codex disposition:

`FAIL`

Blocking finding:

`F-01 — rejected mission identifier escapes receipt storage`

Durable Codex report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/01-stage1-independent-verification.md`

Codex reproduced that a malformed rejected envelope can preserve `VALIDATION_FAILED` while using raw `mission_id` path traversal to place the failure receipt outside the configured receipts directory.

Stage 1 is not ready for acceptance.

---

## Mission Control decision

Mission Control accepts F-01 as a blocking Stage 1 defect and authorizes only the narrow correction defined in:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/06-stage1-f01-correction-authorization.md`

Active builder instruction:

`communication/live/instruction.md`

The correction must separate diagnostic `mission_id` from filesystem storage identity and enforce configured receipt-directory containment for lookup and write while preserving deterministic/idempotent behavior.

---

## Builder return required

After implementing only F-01, running focused/full applicable validation, pushing, obtaining applicable CI, and updating durable evidence, Claude Code must stop with:

`STAGE 1 F-01 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not self-approve.
Do not merge.
Do not begin Stage 2.
Do not activate `SB-P-1.12`.

## Review chain

**Claude Code correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 completion is not OLE mission completion.
