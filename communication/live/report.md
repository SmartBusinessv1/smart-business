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

## Builder F-01 correction report

**Status:** `STAGE 1 F-01 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report (revised):** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`, new Section 22.

**Fix:** `organizational-learning/lib/receipt-store.ts` no longer derives the receipt file path from the raw `mission_id`. A new `computeMissionStorageKey(missionId)` hashes the identifier (sha256 hex) for filesystem placement — a hex digest cannot contain a traversal segment, path separator, drive letter, or UNC prefix regardless of input, so escape is structurally impossible rather than pattern-matched. A new `resolveContainedPath` independently re-verifies containment as a second, defense-in-depth layer. `computeReceiptId`, the diagnostic identity shown in a receipt's payload, is unchanged and still preserves the raw malformed `mission_id` verbatim, exactly as the accepted truthful-diagnostics rule requires. Because both `readReceiptIfExists` and `writeReceipt` already funnel through the one `receiptFilePath` function, fixing it fixed lookup and write identically with **no change needed in `scripts/harvest.mjs`**.

**Regression proof, isolated temp directories only, no real closed mission processed:** `receipt-store.test.ts` grew from 8 to 24 tests (seven malicious `mission_id` shapes including Codex's exact `../escaped` case, each proven contained on both write and read, truthful-payload preservation, and idempotent repeat-write behavior). `harvest-cli.test.ts` grew from 9 to 10 tests, adding Codex's exact reproduction reproduced and proven fixed through the real `runHarvest` failure flow. A pre-existing test helper that assumed the old raw-`mission_id` directory layout was also fixed (it would otherwise have silently broken).

**Scope discipline:** exactly 3 files touched (`lib/receipt-store.ts`, `tests/receipt-store.test.ts`, `tests/harvest-cli.test.ts`), 0 new files, 0 dependencies added, `package-lock.json` unchanged. No change to candidate/promotion authority, provenance architecture, source allowlisting, receipt-state vocabulary, or the scanner.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **237/237 passing** across 23 files (up from 220/23 — 17 new tests, 0 new files); `npm run build` succeeds; Markdown Quality Gate PASS on both revised report files; `package-lock.json` unchanged.

**CI on this correction's pushed head:** see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab for the live, current-head result — not restated here as a fixed claim, per Correction 2's still-active rule.

**Scope confirmation:** only the single authorized F-01 correction was applied. No AI/semantic extraction, no processing of `SB-OPS-CI-ARCHITECTURE-1.0`, no background automation, no provider/network writes, no promotion execution, no Stage 2 activation, no `SB-P-1.12` activation, no self-approval, no merge. Codex was not authorized by this builder — the prior Codex `FAIL` disposition stands until Codex re-verifies.

## Review chain

**Claude Code correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 completion is not OLE mission completion.
