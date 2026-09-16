# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 1 F-01 NARROW CORRECTION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Finding:** `F-01 — rejected mission identifier escapes receipt storage`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Read first

1. `communication/missions/SB-ORG-LEARNING-1.1/codex/01-stage1-independent-verification.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/06-stage1-f01-correction-authorization.md`
3. `organizational-learning/lib/receipt-store.ts`
4. relevant receipt-store and harvester tests.

Do not broaden scope beyond F-01.

---

## Required correction

The receipt payload may preserve a malformed/raw `mission_id` for truthful diagnostics, but that value must not control filesystem placement.

Implement a deterministic filesystem-safe storage key for receipt placement and explicitly enforce that every receipt lookup/write destination remains inside the configured receipts directory.

The same safe derivation must be used by lookup and write, and repeated identical input must remain deterministic/idempotent.

A repository-native cryptographic digest of `mission_id` is acceptable if no dependency is added.

---

## Required regression proof

Add environment-independent tests proving normal identifiers and malicious/traversal/absolute/Windows/UNC/path-separator forms cannot escape the configured receipt directory; failure receipts preserve the original malformed `mission_id` payload; lookup and write use the same deterministic location; repeated identical malformed inputs remain deterministic; and the `runHarvest` invalid-envelope failure flow cannot write outside the configured receipts directory.

Use isolated temporary directories only.

---

## Still prohibited

Do not:

- redesign OLE;
- alter candidate/promotion authority;
- alter provenance architecture beyond F-01;
- change source allowlisting;
- change receipt-state vocabulary;
- reverse truthful malformed-ID payload preservation;
- expand the scanner;
- perform AI extraction;
- process a real proof target;
- implement background automation;
- add provider/network writes;
- activate Stage 2;
- activate `SB-P-1.12`;
- add dependencies or modify `package-lock.json` without separate Mission Control authorization;
- self-approve;
- merge.

---

## Validation and handoff

Run focused regression tests plus complete Fast Gate and applicable lint/typecheck/build/Markdown checks. Push to the existing branch and wait for applicable CI.

Update the durable Claude Code report with the F-01 correction evidence and update only the builder section of `communication/live/report.md`.

Do not create another metadata-only commit solely to embed a supposedly final branch SHA. Use PR `#588` / GitHub Actions as current exact-head CI truth.

Then STOP and return:

`STAGE 1 F-01 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not authorize Codex yourself.
