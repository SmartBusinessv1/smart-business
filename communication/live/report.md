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

## Builder F-01/F-02/F-03 correction report

**Status:** `STAGE 1 F-01/F-02/F-03 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

**Durable report (revised):** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`, new Section 23.

**F-01 (physical containment):** `organizational-learning/lib/receipt-store.ts` gained a third layer, `assertPhysicallyContained`, which walks to the deepest existing path component and resolves it with `fs.realpathSync` (which follows symlinks/junctions, unlike `path.resolve`/`path.relative`), throwing if the real location escapes the configured directory. Verified empirically against a real Windows directory junction before and after the fix (created via `fs.symlinkSync(target, path, "junction")`); both `writeReceipt` and `readReceiptIfExists` now fail closed through it, while an ordinary fresh write — including to a receipts directory that does not exist yet — is unaffected.

**F-02 (canonical manifests):** `organizational-learning/scripts/harvest.mjs` now calls the pre-existing, already-exported `sortManifest` exactly once per run and reuses that one canonical manifest for the fingerprint, the `HARVESTED` receipt, the `SCREENED`/`VALIDATION_FAILED` receipt, and the partial manifest in an ineligible-reference failure receipt. No hash-algorithm change, no new dependency.

**F-03 (safe diagnostics):** both `runHarvest` and `runValidate` now separate file-read failure from JSON-parse failure into two fixed, safe messages, neither of which interpolates the raw parser error text that could echo input bytes. A read failure may still safely echo the caller-supplied path.

**Regression proof, isolated temp directories/repositories only, no real closed mission processed:** `receipt-store.test.ts` 24 → 29 tests (new physical-containment sub-suite: fails closed on write and lookup through a real pre-planted junction/symlink, unaffected by an ordinary or not-yet-existing tree, original `../escaped` case still contained). `harvest-cli.test.ts` 10 → 13 tests (Codex's exact `z.md`/`a.md` reversed-order case proven to persist identical canonical manifests; a partial-manifest failure case also canonically sorted; a malformed-JSON canary case proven not echoed). `validate-cli.test.ts` 5 → 7 tests (parse-failure/read-failure cases split apart; a canary case proven not echoed).

**Scope discipline:** exactly 6 files touched (`lib/receipt-store.ts`, `scripts/harvest.mjs`, `scripts/validate.mjs`, and their three test files), 0 new files, 0 dependencies added, `package-lock.json` unchanged.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **247/247 passing** across 23 files (up from 237/23 — 10 new tests, 0 new files); `npm run build` succeeds; Markdown Quality Gate PASS on both revised report files; `package-lock.json` unchanged.

**CI on this correction's pushed head:** see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab for the live, current-head result — not restated here as a fixed claim, per the standing anti-recursion rule.

**Scope confirmation:** only the three authorized findings were corrected. No AI/semantic extraction, no processing of `SB-OPS-CI-ARCHITECTURE-1.0`, no background automation, no provider/network writes, no promotion execution, no Stage 2 activation, no `SB-P-1.12` activation, no self-approval, no merge. Codex was not authorized by this builder — the prior `FAIL` dispositions stand until Codex re-verifies again.

---

## Review chain

**Claude Code correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 acceptance is not OLE mission completion.
