# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 1 NARROW CORRECTION F-01 / F-02 / F-03

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Builder:** Claude Code

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`

**PR:** `#588 — OPEN — NOT MERGED`

**Mission Control disposition:** `NARROW CORRECTION REQUIRED — F-01 / F-02 / F-03 ONLY`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## Read first

1. `communication/missions/SB-ORG-LEARNING-1.1/codex/02-stage1-independent-reverification.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/08-stage1-f01-f02-f03-correction-authorization.md`
3. `communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`
4. current Stage 1 implementation and tests on this branch.

Apply only the three authorized corrections below.

---

## F-01 — physical receipt containment

The hashed storage key fixes raw path traversal but not pre-existing filesystem indirection.

Correct the receipt store so both lookup and write fail closed if an existing symlink, directory junction, reparse point, or equivalent filesystem indirection beneath the configured receipts trust root resolves outside that physical root.

Preserve raw `mission_id` in diagnostic payloads, hashed storage identity, deterministic retry identity, and atomic writes.

Do not rely only on lexical `resolve` / `relative` checks.

Add isolated temp-directory regressions for both read and write using a platform-appropriate link/junction mechanism, including Codex's reproduced redirected mission-storage-directory case.

---

## F-02 — canonical persisted manifests

Reuse the existing canonical manifest sorter.

Ensure the same sorted manifest representation is used for fingerprint input and every persisted receipt manifest, including successful, harvested, screened, and failure/partial-manifest cases.

Add regressions proving reversed/mixed reference order yields the same fingerprint and the same persisted `source_manifest` order for success and failure cases.

Do not change the hash algorithm.

---

## F-03 — safe malformed-JSON diagnostics

In both `runHarvest` and `runValidate`, stop returning/interpolating raw JSON parser error messages that may contain input bytes.

Use safe fixed read/parse diagnostics or safe metadata that cannot include file contents. Preserve truthful failure status and normal post-parse schema validation details.

Add synthetic secret-like canary tests proving malformed JSON input is rejected without the canary appearing in returned diagnostics and, where CLI-main output is tested, without echo to stdout/stderr.

Do not alter truthful malformed `mission_id` receipt payload behavior.

---

## Still prohibited

Do not:

- broaden scanner policy;
- process a real closed mission;
- perform AI/semantic extraction;
- implement promotion execution;
- implement background automation;
- add provider/network writes;
- add autonomous repository-write automation;
- modify governance/Product Truth;
- activate Stage 2;
- activate `SB-P-1.12`;
- merge;
- self-approve.

Do not add dependencies or modify `package-lock.json` without separate Mission Control authorization.

---

## Verification and durable return

Run applicable local tests, lint, typecheck, build, Markdown checks, Fast Gate, and applicable real CI.

Update:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`

and only the minimum builder section of:

`communication/live/report.md`

Do not make a metadata-only commit solely to embed the new head SHA. PR #588 / GitHub Actions are the live current-head CI source of truth.

Then stop with:

`STAGE 1 F-01/F-02/F-03 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Do not authorize Codex yourself.
