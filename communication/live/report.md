# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 1 Independent Re-Verification

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Current verifier:** Codex

**Status:** `F-01 CORRECTION RE-REVIEW PASS — CODEX INDEPENDENT RE-VERIFICATION AUTHORIZED`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**Pull request:** `#588 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Prior independent verification

Codex previously returned `FAIL` on blocking finding F-01: a rejected envelope's malformed `mission_id` could escape the configured receipt directory during failure-receipt lookup/write.

Durable report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/01-stage1-independent-verification.md`

## F-01 correction

Claude Code applied only the authorized F-01 correction.

Mission Control re-reviewed correction commit:

`56ebdcf99b6f3cc1c1ad4230de2a1749bf08283f`

The corrected receipt store now:

- preserves raw `mission_id` for truthful receipt diagnostics;
- hashes `mission_id` to a deterministic sha256 filesystem storage key;
- independently enforces containment under the configured receipts directory;
- uses the same safe derivation for read and write.

Regression tests include Codex's exact `../escaped` scenario through `runHarvest` plus malicious identifier families and deterministic repeated handling.

At the Mission Control re-review checkpoint, that exact correction commit had successful:

- Application Build Assurance `#125`;
- Full Assurance `#26`;
- Markdown Quality Gate `#1729`.

## Mission Control disposition

`F-01 CORRECTION RE-REVIEW PASS — CODEX INDEPENDENT RE-VERIFICATION AUTHORIZED`

Controlling record:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/07-stage1-f01-rereview-and-codex-reverification-authorization.md`

Active instruction:

`communication/live/instruction.md`

## Codex independent re-verification

**Disposition:** `FAIL` — Stage 1 is not ready for Mission Control acceptance.

Durable report: [Stage 1 independent re-verification](../missions/SB-ORG-LEARNING-1.1/codex/02-stage1-independent-reverification.md).

Reviewed SHA: `c2e147e97e994aa656060b1f8adaa337910e2521`. Independently executed OLE tests: 15 files, 176 tests passed. CI associated with that reviewed head completed successfully: Application Build Assurance (237 Fast Tests), Full Assurance and Markdown Quality Gate. These are historical reviewed-head facts, not publication-head CI claims.

The original `../escaped` attack is contained in a fresh ordinary receipt tree, with diagnostic identity and retry semantics preserved. **F-01 remains unresolved:** a pre-existing directory junction redirects receipt lookup and write outside the configured directory. The reopened assurance checks also reproduced **F-02**, unsorted persisted manifests despite identical canonical fingerprints, and **F-03**, raw synthetic input echoed in malformed-JSON diagnostics.

All reproductions used isolated temporary fixtures and were cleaned up. Previously incomplete assurance areas are addressed in the durable report; completion of those checks does not imply a passing result. No implementation correction was made. Mission Control must decide narrow correction authorization and subsequent verification.

No Stage 1 self-acceptance, merge, Stage 2 activation, real proof processing, AI extraction, background automation or `SB-P-1.12` activation was performed.

`STAGE 1 INDEPENDENT RE-VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`

## Review chain

**Claude Code correction → Mission Control re-review → Codex independent re-verification → narrow correction if still required → Mission Control Stage 1 acceptance → human/Founder merge → explicit Stage 2 authorization.**

Stage 1 acceptance is not OLE mission completion.
