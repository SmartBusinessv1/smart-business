# Organizational Learning Engine — Stage 1

This directory holds the Smart Business Organizational Learning Engine's
repository-native implementation.

**Mission:** `SB-ORG-LEARNING-1.1`
**Current stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`
**Controlling design authority:** [`communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`](../communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md)

This README does not restate that document. It only orients a reader
already inside this directory.

## What this is

A governed institutional-learning capability. It may collect approved
evidence, preserve provenance, and (in later stages) draft candidate
lessons for human review. It is not an authority: nothing in this
directory can change Product Truth, governance, roadmap order, or
Founder decisions, approve or merge anything, or promote its own output.

> **Self-improving memory does not mean self-modifying governance.**

## What exists in Stage 1

- `schemas/` — Zod contracts: candidate learning item, promotion/review,
  closure envelope, processing receipt, and claim-level provenance.
  Candidate and promotion are deliberately separate contracts (B1); a
  candidate cannot carry a trusted review/approval/institutionalization
  field.
- `sources/allowlist.ts` — the narrow set of path prefixes eligible for
  harvesting (`communication/missions/**`, `communication/archive/**`).
  `communication/live/**` is explicitly excluded. Allowlisting means
  _eligible to inspect_, not _authoritative_ (B3).
- `lib/` — path safety, a committed-Git-object reader (reads pinned
  commits only, never the dirty working tree), a fail-closed screening
  contract, deterministic hashing/fingerprinting, and receipt
  persistence.
- `scripts/harvest.mjs` — a manually-invoked Node ESM CLI that accepts an
  explicitly supplied closure envelope, resolves and screens its
  evidence, and writes a deterministic receipt. No AI call. No
  promotion. No write outside its own receipts directory.
- `scripts/validate.mjs` — validates an arbitrary JSON file against one
  of the four schemas above.
- `receipts/` — where `harvest.mjs` writes processing receipts, keyed by
  mission ID and source fingerprint.

## What does not exist yet (by design, not omission)

Deferred to later, separately authorized stages: semantic candidate
extraction, the Mission Learning Report contract, mission-start context
packs, the lessons/risks registries, human review/promotion tooling,
background automation, and processing of any real closed mission.
Building these now would exceed the Stage 1 authorization boundary
recorded in `communication/missions/SB-ORG-LEARNING-1.1/mission-control/03-stage1-authorization.md`.

## Running it

```bash
node organizational-learning/scripts/harvest.mjs --envelope <path-to-closure-envelope.json>
node organizational-learning/scripts/validate.mjs <candidate|promotion|closure-envelope|receipt> <path.json>
```

Tests live in `organizational-learning/tests/` and run via `npm run test:fast`.
