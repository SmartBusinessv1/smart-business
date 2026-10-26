# SB-P-1.18 — Controlled Business Add-ons

**Mission ID:** SB-P-1.18
**Mission type:** Product Mission (Source 18 v1.2)
**Mission Control:** Smart Business Mission Control
**Definition Actor:** Claude Code (appointed by `mission-control/04-stage1-intake-disposition-and-definition-actor-appointment.md`, PR #1078)
**Current stage and owner:** Stage 3 — Founder Decision Gate, **OPEN**. Mission Control owns the gate; the Founder decides the open questions; the Definition Actor prepares records under bounded grants
**Current status:** STAGE 3 OPEN — `18:FPDR-2` (F-2, live tracking) APPROVED — canonical — F-1, F-3, F-4 AND F-5 UNRESOLVED — FCTM RECONCILIATION NOT AUTHORIZED — IMPLEMENTATION NOT AUTHORIZED
**Last completed action:** decision-log status reconciliation for `18:FPDR-2` (PR #1083, `main@3f519a81e2f079e4ab62ccd1a907e5df2b303486`, verified MC-536)
**Next authorized action:** none until Mission Control issues the next instruction (MC-538 and later)
**Predecessor:** SB-P-1.17 — documentation and execution-readiness complete; implementation suspended; communication suspended; formal archive deferred; not formally closed
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED. Production mutation, migration execution, and delivery sync and publication: NOT AUTHORIZED.

## Mission outcome

Advanced contracts 01 Smart Order & Delivery, 06 Staff/HR and 16 Compliance Shield, as separately verifiable workstreams under one mission identity (Build Plan §§9, 10.7). Inherited shared foundation: Contract 22 §16 Shared Location Foundation and the attendance/delivery disclosures and scenario (SB-P-1.12 `FPDR-2`, `FPDR-3`). Source: `mission-control/04-…` §1.

## Blockers and holds

- **Founder decisions open:**
  - F-1, location retention. Qualified Indian legal/privacy advice is a prerequisite to a binding decision. Row `22-§16-6` is `ESCALATED`.
  - F-3, customer-facing interactions before SB-P-1.20 (a T7 question).
  - F-4, permissive mechanisms.
  - F-5, overtime records.
- **FCTM reconciliation for `18:FPDR-2`** (`1-§14-5`, `22-§16-11`) needs separate Mission Control authorization. Until then `1-§14-5` stays `ESCALATED` in the FCTM.
- **Upstream dependencies** are specified but not implemented, including `D12` to `D15`. The customer channel (`DNTF`) does not exist before SB-P-1.20. Full list: `claude-code/08-…`.
- **Repository governance observation (Δ-06):** the repository is public and `main` is unprotected. This was referred to the Founder as repository owner and is not a product matter.

## Authoritative files

| Purpose | Path (relative to this folder) |
|---|---|
| Stage 1 entry, intake disposition and Definition Actor appointment | `mission-control/01-…`, `mission-control/04-…` |
| Stage 2 authorization; Mission Truth Pack (populated FCTM, inventory, Delta, register, intake, topology, index) | `mission-control/05-…`; `claude-code/03-…` to `09-…` |
| Stage 3 authorization (gate triggered; F-2 publication) | `mission-control/06-stage3-founder-decision-gate-and-f2-record-publication-authorization.md` |
| Stage 3 Founder Brief; `18:FPDR-2` decision record | `claude-code/10-stage3-founder-decision-brief-and-annex.md`; `claude-code/11-stage3-founder-product-decision-record-18-fpdr-2.md` |
| Decision log; handover log | `decision-log.md`; `handover-log.md` |
| Stage 1 proposals and Git authorizations | `claude-code/01-…`, `claude-code/02-…`; `mission-control/02-…`, `mission-control/03-…` |
| Live-pair preservation | `communication-preservation/` |

## Stage Ledger

This is an index only. It is never an authority record and cannot approve, lock, authorize, accept or close anything (Source 18 §10). **Canonical merge** gives the pull requests and the final merge commit that made each stage's records canonical. **Date** is the merge date (UTC).

| Stage | Disposition | Owner | Artifact | Canonical merge | Decision | Date |
|---|---|---|---|---|---|---|
| 1 — Mission Initiation and Intake Pack | COMPLETE | Mission Control; proposed Definition / Intake Actor | `mission-control/01-…` to `04-…`; `claude-code/01-…`, `02-…` | PRs #1068, #1075, #1076, #1077, #1078; `8d69714c388328c8ee1a1bf0d2849153ccf5a0b8` | Intake Pack issued; FCTM opened (unpopulated); Definition Actor appointed (`mission-control/04-…`) | 2026-10-25 |
| 2 — Mission Truth and Delta Reconciliation | COMPLETE | Definition Actor (Claude Code) | `mission-control/05-…`; `claude-code/03-…` to `09-…` | PRs #1079, #1080; `650249b855a7a1460c9b8d4575c68e52cddeede1` | Truth Pack accepted as the Stage 3 basis within disclosed limits (`mission-control/06-…` §1–§2) | 2026-10-25 |
| 3 — Founder Decision Gate (TRIGGERED) | **OPEN** | Mission Control; Founder; Definition Actor | `mission-control/06-…`; `claude-code/10-…`, `11-…`; `decision-log.md` | PRs #1081, #1082, #1083; `3f519a81e2f079e4ab62ccd1a907e5df2b303486` | `18:FPDR-2` APPROVED — canonical (MC-533); F-1, F-3, F-4 and F-5 open | 2026-10-26 |
| 4 to 24 | NOT STARTED | — | — | — | — | — |

**Stage 3 remains open** until F-1, F-3, F-4 and F-5 are each decided and recorded, and Mission Control records Stage 3 completion (`mission-control/06-…` §9).
