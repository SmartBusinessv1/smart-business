# SB-GOV-COMMS-1.2 — Decision Log

- **Status:** DRAFT — MISSION CONTROL REVIEW REQUIRED

## Decision 1 — Capability Is Separate from Authority

- **Date:** 2026-08-01
- **Authority:** Founder through Mission Control
- **Decision:** Mission authorization grants governance permission but does not create tools, credentials, filesystem access, repository access, or connector capability.

## Decision 2 — Non-Bypassable Activation Gate

- **Date:** 2026-08-01
- **Authority:** Mission Control
- **Decision:** Controlled AI Git authority cannot activate until branch protection and review controls are verified and recorded.

## Decision 3 — Staged Activation

- **Date:** 2026-08-01
- **Authority:** Mission Control
- **Decision:** Apply core instructions in Stage A and EOS workflow alignment only in Stage B after Stage A verification.

## Decision 4 — Archive Mapping

- **Date:** 2026-08-01
- **Authority:** Existing repository convention
- **Decision:** Active mission folders use `communication/missions/[MISSION-ID]/`; the current canonical archive maps to `communication/archive/[MISSION-ID]/` rather than introducing a competing archive root silently.
