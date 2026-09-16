# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 1 F-01 Narrow Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Finding:** `F-01 — rejected mission identifier escapes receipt storage`

**Verifier disposition:** `FAIL`

**Correction authority:** Active Smart Business Mission Control

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Decision

Codex finding F-01 is accepted as a blocking Stage 1 defect.

Stage 1 is **not accepted**.

A narrow correction is authorized before independent re-verification.

The correction must not redesign OLE or expand into Stage 2.

---

## 2. Defect to correct

The current receipt persistence path derives a filesystem directory directly from `mission_id`.

A malformed rejected envelope such as:

`mission_id: "../escaped"`

can therefore cause failure-receipt lookup/write outside the configured receipts directory even though the envelope itself is rejected.

The accepted Stage 1 interpretation that malformed input may be preserved in the receipt payload for truthful diagnostics remains valid.

That payload rule does **not** authorize the raw identifier to control filesystem placement.

---

## 3. Required correction

Implement only the receipt-storage boundary correction required by F-01.

### 3.1 Separate diagnostic identity from storage identity

Preserve the original `mission_id` value in the receipt payload exactly as required for truthful failure reporting.

Do not use an untrusted/raw `mission_id` directly as a filesystem path component.

Derive a deterministic filesystem-safe storage key from the mission identifier for receipt placement.

The storage key must be:

- deterministic for the same input;
- filesystem-safe across supported environments;
- unable to contain traversal, separators, drive/UNC semantics or absolute-path semantics;
- distinct from the diagnostic `mission_id` carried in the receipt payload.

A cryptographic digest of the mission identifier is an acceptable implementation if consistent with repository-native conventions and no new dependency is required.

### 3.2 Enforce configured-directory containment

Receipt lookup and write must enforce that the resolved destination remains inside the caller-supplied `baseDir` / receipts directory.

Do not rely only on sanitization.

Containment must be an explicit invariant checked before filesystem read/write behavior.

This must apply to:

- `receiptFilePath` or its replacement;
- `readReceiptIfExists`;
- `writeReceipt`;
- temporary atomic-write path derivation insofar as it depends on the receipt destination.

### 3.3 Preserve deterministic/idempotent behavior

The same `mission_id + source_fingerprint` must continue to resolve deterministically to the same receipt storage location.

Existing Stage 1 idempotency semantics must not be weakened.

---

## 4. Required regression tests

Add environment-independent tests proving at minimum:

1. a normal valid mission identifier reads/writes only inside the configured receipts directory;
2. `../escaped` cannot escape the configured directory;
3. nested traversal forms cannot escape;
4. absolute POSIX-like identifiers cannot escape;
5. Windows drive/UNC-like identifiers cannot escape;
6. path separators in malformed identifiers cannot redirect storage;
7. failure receipts still preserve the original malformed `mission_id` in the payload;
8. lookup uses the same safe deterministic storage derivation as write;
9. repeated use of the same malformed identifier + same source fingerprint remains deterministic/idempotent;
10. an invalid envelope through the real `runHarvest` failure flow cannot create a receipt outside the configured receipts directory.

Use isolated temporary directories only.

Do not process a real closed mission.

---

## 5. Scope constraints

Do not:

- change candidate or promotion authority semantics;
- change provenance architecture beyond what F-01 requires;
- change source allowlisting;
- redesign receipt state vocabulary;
- reverse the accepted rule that malformed `mission_id` may be preserved in failure-receipt payloads;
- replace or expand the scanner;
- perform AI/semantic extraction;
- process `SB-OPS-CI-ARCHITECTURE-1.0`;
- implement background automation;
- add provider/network writes;
- activate Stage 2;
- activate `SB-P-1.12`;
- add a dependency or modify `package-lock.json` unless Mission Control separately authorizes it after evidence that the existing platform cannot implement this correction;
- self-approve;
- merge.

---

## 6. Verification and reporting

After correction:

1. run the focused receipt/storage and harvester regression tests;
2. run the complete Fast Gate;
3. run applicable lint/typecheck/build/Markdown validation;
4. push to the existing authorized branch;
5. wait for applicable real CI on the pushed head;
6. update the durable Claude Code Stage 1 report with an F-01 correction section;
7. update only the builder section of `communication/live/report.md`;
8. do not make a further metadata-only commit solely to embed the latest branch SHA.

Report current exact-head CI through PR `#588` / GitHub Actions rather than recursively asserting a self-invalidating final-head value in a tracked report.

---

## 7. Required return

Stop after implementation, validation, push, CI evidence and durable reporting.

Return:

`STAGE 1 F-01 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Mission Control will re-review the correction.

If that passes, Mission Control will authorize **Codex re-verification of the corrected Stage 1 implementation**. The prior Codex FAIL cannot be converted into a PASS by the builder.

Stage 1 remains unaccepted until independent verification passes and Mission Control explicitly accepts it.

The review chain remains:

**Claude Code correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**
