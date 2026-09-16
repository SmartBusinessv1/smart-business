# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 1 F-01 Correction Re-Review and Codex Re-Verification Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Mission Control disposition:** `F-01 CORRECTION RE-REVIEW PASS — CODEX INDEPENDENT RE-VERIFICATION AUTHORIZED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Re-reviewed correction

Mission Control re-reviewed Claude Code's narrow F-01 correction at commit:

`56ebdcf99b6f3cc1c1ad4230de2a1749bf08283f`

The correction addresses Codex finding F-01 without broadening Stage 1 scope.

`organizational-learning/lib/receipt-store.ts` now separates diagnostic identity from filesystem placement:

- `computeReceiptId(...)` continues to preserve the raw `mission_id` in receipt identity/payload for truthful failure reporting;
- `computeMissionStorageKey(...)` derives a deterministic sha256 hex storage key from the identifier;
- `resolveContainedPath(...)` independently verifies the final resolved path remains inside the configured receipts directory;
- `receiptFilePath(...)` uses both controls for lookup and write placement.

No change was required in `harvest.mjs` because both lookup and write already use `receiptFilePath(...)`.

## 2. Regression evidence

The corrected branch includes:

- `receipt-store.test.ts`: 24 tests, including traversal, nested traversal, absolute POSIX-like input, Windows drive-like input, UNC-like input, POSIX separator input, Windows separator input, lookup/write containment, truthful malformed-identifier payload preservation, and deterministic repeated writes;
- `harvest-cli.test.ts`: 10 tests, including Codex's exact `mission_id: "../escaped"` invalid-envelope reproduction through the real `runHarvest` failure path using isolated temporary directories only.

Local builder evidence reports 237/237 Fast Tests passing across 23 files, clean typecheck/lint/build, no dependency addition, and unchanged `package-lock.json`.

## 3. Exact-head CI evidence

For commit `56ebdcf99b6f3cc1c1ad4230de2a1749bf08283f`, GitHub Actions reports:

- Team LIPS Application Build Assurance `#125` — SUCCESS;
- Team LIPS Full Assurance `#26` — SUCCESS;
- Team LIPS Markdown Quality Gate `#1729` — SUCCESS.

These are immutable reviewed-commit facts. PR #588 / GitHub Actions remains the current-head source of truth after this Mission Control authorization commit.

## 4. Mission Control decision

F-01 is sufficiently corrected for independent re-verification.

This is not Stage 1 acceptance.

The prior Codex `FAIL` remains part of the record and is superseded only if Codex independently re-verifies the corrected implementation and returns `PASS`.

## 5. Required Codex re-verification scope

Codex must independently:

1. review the F-01 correction and reproduce the original `../escaped` attack case against the corrected implementation;
2. verify receipt lookup and write containment for malformed identifiers;
3. verify truthful malformed `mission_id` preservation in receipt payload/diagnostic identity;
4. verify deterministic/idempotent behavior remains intact;
5. independently run the relevant OLE Fast Tests and inspect current exact-head CI evidence;
6. revisit the assurance areas left incomplete when the previous verification stopped at F-01, including persisted manifest ordering, secret-echo boundaries, receipt-state truthfulness, autonomous-write boundaries, and overall evidence reach;
7. confirm no Stage 2, AI extraction, real proof-target processing, background automation, provider mutation, dependency addition, or `SB-P-1.12` activation has been introduced.

Codex must not modify implementation code during re-verification.

## 6. Required return

Create/update the durable verifier report under:

`communication/missions/SB-ORG-LEARNING-1.1/codex/`

and return one of:

- `PASS`
- `FAIL`
- `FOLLOW-UP REQUIRED`

Then stop with:

`STAGE 1 INDEPENDENT RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`

Do not merge.
Do not accept Stage 1.
Do not begin Stage 2.
Do not activate `SB-P-1.12`.
