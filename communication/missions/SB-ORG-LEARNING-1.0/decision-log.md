# SB-ORG-LEARNING-1.0 — Decision Log

## D-001 — Mission class

**Decision:** Treat the Organizational Learning Engine as a non-Product organizational/institutional capability mission.

**Reason:** It governs how Team LIPS preserves and reuses learning. It does not itself define a merchant-facing Product Mission.

**Effect:** Source 18 does not automatically govern this mission merely because the capability may later support Product Missions.

---

## D-002 — Current stage

**Decision:** Open only a research/design proposal review stage.

**Status:** `EXTERNAL REVIEW PENDING`

**Implementation:** `NOT AUTHORIZED`

---

## D-003 — Initial architecture direction

**Decision:** Propose a repository-native, deterministic-first v1 before considering databases, vector stores, autonomous agents, or new production services.

**Reason:** The canonical repository is already the durable operational record. The smallest safe architecture should be proven before infrastructure expansion.

**Status:** Proposal only; Claude Code and Codex must challenge it.

---

## D-004 — Authority boundary

**Decision:** Learning artifacts provide context and institutional memory but do not create authority.

The engine may not automatically:

- change Product Truth;
- change governance;
- alter roadmap sequence;
- interpret Founder decisions as new authority;
- activate missions;
- accept implementation;
- merge pull requests;
- deploy;
- alter production.

---

## D-005 — Learning dimensions

**Decision:** Evidence strength, confidence, maturity, and status must remain separate dimensions.

**Reason:** A historically strong fact can be operationally superseded; a high-confidence observation can remain only a candidate organizational lesson.

---

## D-006 — Provenance requirement

**Decision:** Durable learning must be traceable to durable evidence.

Candidate provenance classes include Founder decision, Mission Control disposition, specialist review, independent verification, builder report, CI evidence, runtime evidence, operator attestation, historical record, and assistant synthesis.

---

## D-007 — Historical/current separation

**Decision:** Historical institutional memory must not be silently promoted into current state or governance.

Superseded learning remains preserved with chronology and replacement references.

---

## D-008 — Human promotion gate

**Decision:** AI may extract and propose candidate lessons. Human/Mission Control review controls durable promotion. Governance promotion remains separately governed.

No AI may self-promote a lesson into institutional authority.

---

## D-009 — Review structure

**Decision:** Require two independent review perspectives before implementation authorization is considered:

- Claude Code — engineering/repository review;
- Codex — independent assurance/adversarial review.

Each reviewer creates its own durable report and updates only its section of `communication/live/report.md`.

---

## D-010 — Product Mission boundary

**Decision:** This mission does not activate `SB-P-1.12` or any other Product Mission.

Any later Product Mission activation requires separate explicit Mission Control authority.
