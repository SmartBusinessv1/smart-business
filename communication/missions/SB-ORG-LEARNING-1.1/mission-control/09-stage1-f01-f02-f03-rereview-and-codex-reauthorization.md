# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 1 F-01/F-02/F-03 Correction Re-Review and Codex Re-Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Builder correction checkpoint reviewed:** `23266d4bc49a7821ec4af1503f997dcbb28cb967`

**Disposition:** `MISSION CONTROL RE-REVIEW PASS — CODEX INDEPENDENT RE-VERIFICATION AUTHORIZED`

**Product Mission:** `SB-P-1.12 — NOT ACTIVATED`

---

## Evidence reviewed

Mission Control reviewed Codex's second independent `FAIL`, the authorized F-01/F-02/F-03 correction, the resulting implementation and regressions, PR state, and GitHub Actions evidence on correction checkpoint `23266d4bc49a7821ec4af1503f997dcbb28cb967`.

At that checkpoint:

- Team LIPS Application Build Assurance `#129` — `SUCCESS`;
- Team LIPS Full Assurance `#30` — `SUCCESS`;
- Team LIPS Markdown Quality Gate `#1733` — `SUCCESS`.

These are immutable checkpoint facts. PR `#588` / GitHub Actions remain the live source of truth after this authorization is published.

---

## F-01 re-review — PASS FOR INDEPENDENT RE-VERIFICATION

The correction retains the hashed mission storage key and lexical containment and adds physical-containment verification using `fs.realpathSync` on the deepest existing path component before receipt lookup or write.

The implementation now fails closed when a pre-existing symlink/junction/reparse-style directory under the receipts trust root resolves outside that root, while preserving ordinary first-write behavior where the destination tree does not yet exist.

Regression coverage includes platform-appropriate real directory indirection for both lookup and write plus the original raw `../escaped` case.

Mission Control does not treat this as universal filesystem-security proof. Codex must independently reproduce the physical-indirection case and verify the corrected behavior.

---

## F-02 re-review — PASS FOR INDEPENDENT RE-VERIFICATION

The harvester now creates one `canonicalManifest = sortManifest(manifest)` and reuses it for:

- fingerprint input;
- `HARVESTED` receipt persistence;
- final `SCREENED` / `VALIDATION_FAILED` receipt persistence;
- partial-manifest failure receipts.

No hash algorithm change or dependency change was introduced.

Codex must independently confirm equivalent evidence sets in different reference order produce both the same fingerprint and the same persisted `source_manifest` ordering, including failure/partial-manifest paths.

---

## F-03 re-review — PASS FOR INDEPENDENT RE-VERIFICATION

`runHarvest` and `runValidate` now separate file-read failures from JSON-parse failures. JSON parse failures use fixed diagnostics and do not interpolate raw parser error messages.

Regression tests use synthetic secret-like canaries and assert that malformed JSON is rejected without echoing canary bytes in returned diagnostics.

Codex must independently reproduce both entry points and verify the no-echo boundary, including CLI output where practical.

---

## Scope review

The correction remains within the authorized Stage 1 boundary. No evidence was found of:

- AI/provider calls;
- semantic extraction;
- promotion execution;
- background automation;
- real closed-mission proof processing;
- provider mutation;
- governance/Product Truth change;
- dependency or lockfile addition;
- Stage 2 activation;
- `SB-P-1.12` activation;
- self-merge or self-acceptance.

---

## Codex authority

Codex is now authorized to independently re-verify Stage 1 on the current branch under `communication/live/instruction.md`.

Codex must specifically re-test F-01/F-02/F-03 and also determine whether the accumulated evidence is sufficient for Stage 1 acceptance. It must not modify implementation code, merge, begin Stage 2, process the real proof target, or activate `SB-P-1.12`.

Required disposition:

`PASS`, `FAIL`, or `FOLLOW-UP REQUIRED`.

Required stop line:

`STAGE 1 INDEPENDENT RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`

---

## Lifecycle boundary

A Codex `PASS` does not itself accept Stage 1.

After Codex reports, Mission Control must perform the Stage 1 acceptance decision. Only after Mission Control Stage 1 acceptance may the human/Founder merge occur, followed by explicit Stage 2 authorization.

Stage 1 acceptance is not OLE mission completion.
