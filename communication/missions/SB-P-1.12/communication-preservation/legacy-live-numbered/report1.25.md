# SB-P-1.12 — Stage 10 Independent EIS Security Review Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Security & Permissions Architecture — existing MC-33-appointed specialist room
**To:** Smart Business Mission Control
**Authority:** MC-153 / `communication/live/instruction1.25.md`
**Work package:** `SB-P-1.12-WP-STAGE10-INDEPENDENT-EIS-SECURITY-REVIEW`
**Primary report:** `communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md`
**Status:** INDEPENDENT SECURITY REVIEW SUBMITTED — EIS REFINEMENT REQUIRED — NO EIS ACCEPTANCE OR LOCK

## 1. Exact target reviewed

| Item | Exact identity |
|---|---|
| Canonical hydration baseline | `main@ec0fc74dbc9685eff6162c326ececb2cde1c3c77` |
| PR | `#687` |
| Exact reviewed head | `a1beda8c006ab69b28f5354b686c941384cd1e86` |
| EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` |
| EIS v0.2 blob | `0ebd7c2b4298a81b467021dfb8a52cf42b8c293d` |
| Locked Blueprint blob | `77d52096c020668311b039721a4de9248ddd460e` |
| Canonical FCTM blob | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |

The complete EIS v0.2 was reviewed, not only the Founder Record 09 correction.

Structural traceability was independently checked: 80 unique EIS requirements; 267 of 267 `IN SCOPE` FCTM rows represented exactly once in the row-to-requirement map; no missing or extra FCTM row identified.

## 2. Security disposition

The EIS contains sound design direction for one-kernel authority, explicit business context, deny-by-default enforcement, grant/default-privilege reconciliation, Reference Cost/margin projection, stable historical attribution and ESC-1 containment.

It is not yet sufficient for Stage 10 acceptance because eleven finding-scoped EIS design defects require correction.

No new Product Truth / Founder decision issue is established by this review.

## 3. Required EIS refinements

| Finding | Severity | Required correction |
|---|---|---|
| `SEC-EIS10-01` | HIGH | Define one verified-principal model covering signed-in persons, participants, support actors and background automation; govern and uniquely bind `persons.auth_user_id` |
| `SEC-EIS10-02` | HIGH | Limit first-run membership/invitation routing to preventing accidental first-business creation; do not prohibit intentional additional-business ownership |
| `SEC-EIS10-03` | HIGH | Prohibit generic revocation/removal of the active Owner; Owner authority ends only through valid transfer or governed business deletion |
| `SEC-EIS10-04` | HIGH | Extend commit-time serialization to every mutable authority fact used by the allow decision, not only membership and explicit grant rows |
| `SEC-EIS10-05` | HIGH | Make confirmation-binding consumption atomic with the consequential outcome and replay result |
| `SEC-EIS10-06` | HIGH | Apply privileged actor/business/action/object binding to service-role reads as well as writes, claims and bookkeeping |
| `SEC-EIS10-07` | HIGH | Make durable denial audit valid for direct authenticated RPC paths, not dependent on an application-server callback after rollback |
| `SEC-EIS10-08` | MEDIUM | Add explicit SECURITY DEFINER hardening: search-path control, schema qualification, narrow owner/grants and effective EXECUTE checks |
| `SEC-EIS10-09` | HIGH | Reconcile retained `RESTRICT` child records with governed business deletion by defining a stable non-authorizing business identity/tombstone or equivalent |
| `SEC-EIS10-10` | HIGH | Expand `22-§20-2` unblocking evidence to include governed business deletion, migration/backfill completion, retained/held-record tests and post-migration constraint inventory |
| `SEC-EIS10-11` | HIGH | Gate SB-P-1.13 consumption on the audit work it consumes and on enforcement cut-over for every table/data family it will touch |

The complete evidence and correction language is in the specialist report.

## 4. Favorable / carried findings

- Founder Decision Record 09 is faithfully implemented in EIS §12.4 / `EIS-PPM-04`: no margin formula or aggregate-only behavior is invented; exact delegated Reference Cost may coexist with otherwise-authorized selling price; Smart Business-provided margin remains separately permission-gated.
- Effective-access/default-privilege treatment is a sound design direction but remains an evidence gate; G-6/T4 stays `UNVERIFIED`.
- Professional legal/privacy/retention and provider/backups/PITR boundaries are correctly preserved as provisional/evidence-gated.
- No additional `auth.users` foreign-key cascade beyond the known `businesses.owner_id` and `transactions.creator_id` paths was identified in the repository migration search for this review.
- ESC-1 safe-design direction is capable of refinement into a secure design, but it is not yet sufficient to close ESC-1 or unblock durability.

## 5. Holds preserved

- R-2: **CLOSED / SATISFIED**.
- ESC-1: **OPEN T8**.
- `22-§20-2`: **BLOCKED / IN SCOPE**.
- G-6/T4: **UNVERIFIED**.
- Professional legal/privacy/retention validation: **deferred**.
- EIS: **DRAFT / NOT LOCKED**.
- Implementation package: **NOT AUTHORIZED**.
- Implementation: **NOT AUTHORIZED**.
- Schema / SQL / migrations: **NOT AUTHORIZED**.
- Provider mutation / production action: **NOT AUTHORIZED**.

## 6. Recommended next gate

Return EIS v0.2 for finding-scoped refinement of `SEC-EIS10-01` through `SEC-EIS10-11`, preserving the accepted Founder Record 09 correction and all existing holds.

A later Security delta re-review can remain finding-scoped if the exact reviewed EIS/source boundaries remain unchanged apart from the authorized corrections.

SECURITY REFINEMENT REQUIRED
