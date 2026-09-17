# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 1 SECOND CORRECTION AUTHORIZATION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Mission Control disposition:** `NARROW CORRECTION REQUIRED — F-01 / F-02 / F-03 ONLY`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Authority and evidence

Codex independent re-verification report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/02-stage1-independent-reverification.md`

Verifier publication commit:

`ef2a4c8d6e48a8288411a00875d703a560609aa8`

Mission Control accepts the three reproduced blockers as valid Stage 1 findings:

- **F-01 residual:** lexical containment does not stop a pre-existing filesystem junction/symlink/reparse-point from redirecting receipt lookup/write outside the configured physical receipt boundary;
- **F-02:** source fingerprinting is canonically sorted, but persisted `source_manifest` entries are not consistently persisted in canonical order;
- **F-03:** malformed-JSON parse diagnostics interpolate parser error text that may include raw input bytes.

Stage 1 is not accepted.

---

## Authorized correction F-01 — physical receipt boundary

Complete the receipt-storage boundary without redesigning receipt identity.

Preserve:

- hashed mission storage keys;
- raw/malformed `mission_id` in diagnostic payloads;
- existing deterministic receipt identity/retry semantics;
- atomic write behavior.

Required behavior:

1. Treat the configured receipts directory as the storage trust root.
2. Fail closed when any existing filesystem indirection beneath that trust root could redirect the mission storage directory, lookup target, temporary write target, or rename destination outside the physical trust root.
3. Do not rely only on `path.resolve` / `path.relative` lexical containment.
4. Check the relevant existing path components using filesystem-aware inspection and physical-path resolution appropriate to the platform.
5. Ensure both `readReceiptIfExists` and `writeReceipt` use the same physical containment boundary.
6. Do not silently follow escaping symlinks, directory junctions, or equivalent reparse-point indirection.
7. No race-hardening redesign beyond Stage 1 is required; however, the boundary check must occur in the actual lookup/write path before the filesystem operation it protects.

Required regression evidence:

- ordinary fresh-tree receipt lookup/write still works;
- the original `../escaped` case remains contained;
- a pre-existing directory symlink/junction/reparse-point under the derived mission storage directory that resolves outside the configured receipts directory fails closed for both lookup and write;
- the test uses isolated temporary directories only and cleans up safely;
- use a platform-appropriate indirection mechanism so the same security property is exercised on supported test environments.

---

## Authorized correction F-02 — canonical persisted manifests

Use the existing canonical manifest ordering consistently.

Required behavior:

1. Reuse the existing `sortManifest` / current canonical path ordering; do not introduce a new hash algorithm.
2. Produce one canonical sorted manifest representation from the resolved evidence set.
3. Use that same canonical ordering for:
   - source fingerprint input;
   - `HARVESTED` receipts;
   - `SCREENED` receipts;
   - `VALIDATION_FAILED` receipts that include a partial/resolved manifest.
4. Equivalent evidence sets supplied in different acceptance/closure reference order must persist the same `source_manifest` order and produce the same source fingerprint.

Required regression evidence:

- mixed/reversed reference ordering produces identical canonical persisted manifests;
- success and failure receipt paths both persist sorted manifests;
- current fingerprint identity remains unchanged for equivalent evidence sets.

---

## Authorized correction F-03 — safe malformed-JSON diagnostics

Prevent malformed JSON input bytes from being echoed through parser diagnostics.

Required behavior:

1. In both `runHarvest` and `runValidate`, do not interpolate raw `JSON.parse` error messages into returned/user-visible diagnostics.
2. Distinguish read failure from JSON parse failure using safe fixed diagnostics or safe metadata that cannot contain file contents.
3. Preserve truthful exit/failure semantics.
4. Do not weaken normal schema-validation details after parsing succeeds.
5. Do not change the accepted truthful malformed `mission_id` behavior in failure receipts.

Required regression evidence:

- malformed JSON containing a synthetic secret-like canary is rejected by `runHarvest` without the canary appearing in the returned diagnostic;
- the same is true for `runValidate`;
- where CLI-main output is exercised, stderr/stdout must not echo the canary;
- normal screened evidence continues to quarantine without echoing matched content.

---

## Scope limits

Do not:

- redesign the OLE architecture;
- replace or broaden the scanner beyond what these findings require;
- process a real closed mission;
- call AI/providers;
- implement semantic extraction;
- implement promotion execution;
- add background automation;
- add autonomous repository writes;
- change governance or Product Truth;
- activate Stage 2;
- activate `SB-P-1.12`;
- merge;
- self-approve.

Do not add dependencies or modify `package-lock.json` unless Mission Control separately authorizes it after evidence existing Node/platform primitives are insufficient.

---

## Verification and return

Run all applicable local checks and real CI on the pushed correction head.

Update the existing durable Claude Code Stage 1 report and only the minimum builder section of `communication/live/report.md`.

Do not create another metadata-only commit solely to record the current head SHA; PR #588 / GitHub Actions remain the live exact-head CI source of truth.

After correction and CI, stop with:

`STAGE 1 F-01/F-02/F-03 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Review chain remains:

**Claude Code correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 acceptance is not OLE mission completion.
