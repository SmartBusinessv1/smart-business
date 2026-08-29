# SMART BUSINESS MISSION CONTROL

# Report 1.32 — SB-P-1.11 Token Retention Policy Lock-Step Correction

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Final Pre-Implementation Token-Lifecycle Documentation Correction

**Executing Room:** Claude Code

**Authorizing Instruction:** `communication/live/instruction1.32.md`

**Report Type:** Documentation correction report only. Replaces the rejected indefinite-retention position in `communication/live/report1.31.md` with the fixed Mission Control retention-and-purge policy. No implementation, no executable SQL, no Lovable use, no locked-source change.

---

## 1. Mission Identity and Authorizing Instruction

- Mission ID: SB-P-1.11 — Product Catalog & Pricing.
- Lifecycle activity: Final Pre-Implementation Token-Lifecycle Documentation Correction.
- Authorizing instruction: `communication/live/instruction1.32.md`, issued in response to Mission Control's rejection of the indefinite-retention position recorded in `communication/live/report1.31.md` (originally authorized by `communication/live/instruction1.31.md`).

---

## 2. Branch Name

`mission/SB-P-1.11-token-retention-policy-correction`

---

## 3. Synchronized Base `main` SHA

`f50fa6b2e03a8e3dfea836ec2217f9f7ed6dce8b`

Confirmed via `git fetch --all --prune` followed by `git checkout main` and `git merge --ff-only origin/main` (fast-forward from `751029f302a9f13fa00628cb25fe0693bf4c21f1`, bringing in the merged `instruction1.32.md` and the merged token-lifecycle parameter resolution, PR #97).

---

## 4. Substantive Branch Commit SHA

`cf38529317ed1e22327ee903f8c91500aa624102`

---

## 5. Pull-Request Number and URL

PR #99 — `https://github.com/SmartBusinessv1/smart-business/pull/99`

---

## 6. Exact Files Changed

- Modified: `communication/live/report1.31.md`
- Created: `communication/live/report1.32.md`

No other file was created, modified, renamed, moved, or deleted.

---

## 7. Confirmation of Exact Two-File Scope

```text
FILES MODIFIED: communication/live/report1.31.md (only)
FILES CREATED: communication/live/report1.32.md (only)
```

Confirmed by `git status --porcelain` on the mission branch, showing exactly these two paths. No locked source, no prior instruction, and no report other than `report1.31.md` was touched.

---

## 8. Confirmation That the 15-Minute Token-Validity Parameter Was Not Reopened or Altered

```text
VALIDITY DURATION: 15 MINUTES — UNCHANGED
VALIDITY START POINT: issued_at = now() at successful preview issuance — UNCHANGED
VALIDITY BOUNDARY: now() < expires_at — UNCHANGED
RENEWAL: PROHIBITED — UNCHANGED
CLOCK-SKEW TREATMENT: NOT APPLICABLE (single server clock) — UNCHANGED
```

`report1.31.md` Section 7 ("Question A — Exact Server-Controlled Validity Period") was not edited by this correction. A line-level review confirms every bullet — fixed duration, server control, client inability to supply/extend/override, clock start, comparison boundary, clock-skew treatment, post-expiry rejection behavior, fresh-preview requirement, renewal prohibition, locked-source traceability, and rationale — remains exactly as originally resolved under `instruction1.31.md`.

---

## 9. Confirmation That Indefinite Retention Was Removed Everywhere From the Operative Policy

```text
INDEFINITE RETENTION AS APPROVED POLICY: REMOVED
```

A full review of the corrected `report1.31.md` confirms every operative statement asserting indefinite retention as the approved policy has been replaced. Specifically corrected: Section 8.2 ("Retention Periods," previously `INDEFINITE`/`INDEFINITE`, now the fixed 90-day/30-day windows), Section 8.3's `AUDIT RETENTION` definition (previously "the indefinite period above," now the fixed periods), Section 8.6 (previously "no row currently becomes purge-eligible... under the indefinite-retention policy," now exact purge-eligibility formulas), Section 8.6's rationale bullet (previously "indefinite retention... satisfies auditability... mirrors this repository's own existing audit-retention posture," now framed around the fixed windows), the Section 9 parameter matrix rows for consumed-row and expired-row retention, the Section 10 lifecycle timeline's `PURGE-ELIGIBLE`/`PURGED OR DURABLE-AUDIT-ONLY` states (previously described as unreachable under indefinite retention), Section 11's summary, and Section 21's final conclusion. No remaining occurrence of "indefinite" in `report1.31.md` describes it as the approved retention policy; the only remaining uses are historical/removal references or unrelated phrases (e.g., "without leaving a stale preview sitting open indefinitely," describing the 15-minute validity rationale, and "prevents indefinite extension of a single bearer token's exposure window," describing renewal prohibition — neither is a retention-policy statement).

The prior justification that "absence of a current cleanup mechanism justifies permanent retention" was also removed and replaced with the opposite, explicit statement (Section 8.2, corrected): "the absence of a current cleanup mechanism does not justify treating retention as indefinite."

---

## 10. Confirmation of the Fixed Retention, Minimization, and Purge Policy

```text
90-DAY CONSUMED-ROW FULL-METADATA RETENTION (from consumed_at):        CONFIRMED
30-DAY EXPIRED-UNCONSUMED-ROW FULL-METADATA RETENTION (from expires_at): CONFIRMED
IMMEDIATE CONSUMPTION-TIME BEARER MINIMIZATION:                        CONFIRMED — unchanged from report1.31.md's original design
EXPIRY-TIME USABILITY:                                                  CONFIRMED — ends immediately at expires_at via the mandatory server-side check, independent of physical redaction timing
LAZY-OR-FUTURE-CLEANUP PHYSICAL MINIMIZATION AFTER EXPIRY:              CONFIRMED — first authorized interaction or future cleanup process, whichever occurs first
CONSUMED-ROW PURGE ELIGIBILITY:                                         CONFIRMED — consumed_at + 90 days
EXPIRED-ROW PURGE ELIGIBILITY:                                          CONFIRMED — expires_at + 30 days
FUTURE SEPARATE AUTHORITY FOR PURGE EXECUTION:                          CONFIRMED — named, not created
```

`report1.31.md` Section 8.2 now states these two exact retention periods as fixed Mission Control policy, applicable now regardless of whether a purge-execution mechanism exists. Section 8.3 now distinguishes, for the expiry path specifically, that logical unusability is immediate and guaranteed by the `expires_at` check alone, while physical redaction of the raw value may lag until the first authorized interaction or a future cleanup process — whichever occurs first — and that an expired-but-never-retried row remains unusable throughout that lag. Section 8.6 now states the exact purge-eligibility formulas and reiterates that reaching eligibility does not itself cause deletion or minimization absent an execution mechanism, which remains a named, not-created, separately authorized future authority.

---

## 11. Confirmation That Durable Audit-Only Evidence Excludes the Raw Bearer Value, Complete Expected-State Payload, and Unnecessary Personal Data

```text
RAW BEARER TOKEN IN DURABLE AUDIT-ONLY EVIDENCE:            EXCLUDED
COMPLETE expected_state_snapshot PAYLOAD IN AUDIT-ONLY FORM: EXCLUDED — reduced to a minimal digest
UNNECESSARY PERSONAL DATA:                                   EXCLUDED
```

`report1.31.md` Section 8.6 ("After full-metadata retention") states explicitly that durable audit-only evidence — the outcome if a row is irreversibly minimized rather than deleted once purge-eligible — must not retain the raw bearer token, the complete `expected_state_snapshot` payload contents, or unnecessary personal data. It retains only the same minimal field set already defined in Section 8.5: business identity, stable record/correlation identity, initiating actor, consuming actor (when applicable), issue time, expiry time, consumption time (when applicable), lifecycle outcome, rejection reason (when applicable), request/idempotency correlation (when applicable), and a minimal expected-state digest rather than the full snapshot.

---

## 12. Confirmation That No Cleanup Implementation Was Created or Authorized

```text
CLEANUP WORKER: NONE CREATED, NONE AUTHORIZED
SCHEDULER: NONE CREATED, NONE AUTHORIZED
CRON JOB: NONE CREATED, NONE AUTHORIZED
pg_cron / pg_net: NOT ACTIVATED
EDGE FUNCTION: NONE CREATED, NONE AUTHORIZED
SQL FUNCTION OR RPC: NONE CREATED, NONE AUTHORIZED
ANY OTHER IMPLEMENTATION ARTIFACT: NONE CREATED
```

Both `report1.31.md` (as corrected) and this report are Markdown documentation only; no fenced SQL/DDL/DML block, scheduler design, or infrastructure-activation statement appears in either file. Both files state explicitly that purge execution requires a separately authorized future cleanup mechanism and that no implementation may claim automated purge is active until that mechanism is authorized, built, and verified.

---

## 13. Final Corrected Policy Matrix

| Policy Area | Exact Rule | Retention or Eligibility Point | Token Usability Effect | Audit Evidence Effect | Implementation Authority | Final Status |
|---|---|---|---|---|---|---|
| Active-token validity | 15 minutes, fixed, server-controlled (unchanged, not reopened) | N/A — governs the ACTIVE window only, not retention | Usable exactly once, until consumed or `now() >= expires_at` | Row created with full metadata at issuance | Already-locked D-068 safeguard (Engineering Contract §12) | `RESOLVED — 15 MINUTES, FIXED, SERVER-CONTROLLED` |
| Consumed-row full-metadata retention | Retain full non-secret lifecycle metadata for 90 days after `consumed_at` | `consumed_at + 90 days` = purge-eligibility point | Already permanently unusable from `consumed_at`; retention length has no bearing on usability | Full Section 8.5 field set retained throughout the window | Fixed Mission Control policy (`instruction1.32.md` §3); no execution mechanism authorized | `RESOLVED — 90 DAYS AFTER consumed_at` |
| Expired-unconsumed-row full-metadata retention | Retain full non-secret lifecycle metadata for 30 days after `expires_at` | `expires_at + 30 days` = purge-eligibility point | Already permanently unusable from `expires_at` via the mandatory check; retention length has no bearing on usability | Full Section 8.5 field set retained throughout the window | Fixed Mission Control policy (`instruction1.32.md` §3); no execution mechanism authorized | `RESOLVED — 30 DAYS AFTER expires_at` |
| Raw-token minimization on consumption | Minimize (redact) immediately, in the same transaction that sets `consumed_at` | N/A — immediate, atomic with the state transition | Unusable from `consumed_at`; raw value additionally redacted at the same instant | `id` remains as stable correlation identity after `token` is redacted | Already-locked D-068 safeguard, applied per `report1.29.md`/`report1.30.md` | `RESOLVED` |
| Raw-token minimization on expiry | Usability ends immediately at `expires_at` via the mandatory check; physical redaction occurs at the first authorized interaction after expiry or via future cleanup, whichever is first | N/A for usability (immediate); redaction timing depends on next interaction or cleanup run | Unusable immediately at `expires_at`, independent of when physical redaction occurs | Row remains unminimized-but-inert until redacted; no security exposure in the interim | Interaction-triggered redaction is already-locked behavior; future cleanup process is a separately authorized future mechanism | `RESOLVED` |
| Purge eligibility | A row becomes purge-eligible once its fixed retention window elapses | `consumed_at + 90 days` (consumed) / `expires_at + 30 days` (expired-unconsumed) | No change — already unusable long before eligibility | No change to evidence at the eligibility instant itself; eligibility only marks a candidate for future action | Eligibility is fixed policy now (`instruction1.32.md` §3); reaching it triggers nothing automatically | `RESOLVED` |
| Purge execution | Requires a separately authorized cleanup mechanism (worker, cron job, Edge Function, or equivalent) | Not fixed — depends entirely on the future mechanism's own design and authorization | No change — usability was already permanently revoked at consumption or expiry | Results in either row deletion or irreversible minimization to durable audit-only evidence (Section 11) | **Not authorized by this or any prior SB-P-1.11 mission** — named as a future requirement only | `SEPARATE FUTURE AUTHORITY REQUIRED` |

---

## 14. Corrected Lifecycle Timeline

```text
ISSUED
ACTIVE
CONSUMED OR EXPIRED
FULL-METADATA RETENTION
PURGE-ELIGIBLE
PURGED OR AUDIT-ONLY MINIMIZED
```

See `communication/live/report1.31.md` Section 10 for the full, corrected, per-stage conceptual detail (triggering event, actor/process, token usability, audit evidence, and later-replay behavior for each stage). Summary:

- **ISSUED → ACTIVE:** unchanged from the original resolution — the fixed 15-minute validity window, server-controlled, not reopened.
- **CONSUMED OR EXPIRED:** usability ends permanently and immediately in both cases; for CONSUMED, raw-token redaction is atomic with this transition; for EXPIRED, redaction may lag until the first authorized interaction or a future cleanup run, without affecting unusability.
- **FULL-METADATA RETENTION:** the corrected, fixed 90-day (consumed) or 30-day (expired-unconsumed) window during which the full non-secret evidence set is retained.
- **PURGE-ELIGIBLE:** reached automatically at the end of the fixed window; marks a candidate for future action without itself acting.
- **PURGED OR AUDIT-ONLY MINIMIZED:** not currently reachable by any existing mechanism — requires a separately authorized future cleanup mechanism this report does not create; until then, rows remain physically stored, purge-eligible, and permanently unusable, with no implementation permitted to claim automated purge is active.

---

## 15. Product Truth Change Status

```text
PRODUCT TRUTH CHANGED: NO
```

The retention-period and purge-eligibility values corrected here are internal data-lifecycle/observability policy, not merchant-facing product behavior. No statement in the locked Product Blueprint or the Founder Product Decision Record (D-001–D-068) was altered, reinterpreted, or newly created.

---

## 16. Founder Decision Requirement

```text
NEW FOUNDER DECISION REQUIRED: NO
```

This correction replaces one internal specialist policy value (indefinite retention) with a different, more precise internal specialist policy value (90-day/30-day fixed retention) at Mission Control's direction. Neither value change requires a Founder Product Decision.

---

## 17. Founder Lovable Brief Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
```

---

## 18. Paste-into-Lovable Authority Status

```text
PASTE-INTO-LOVABLE AUTHORITY: NONE
```

---

## 19. Lovable Build Mode and Plan Mode Usage Status

```text
LOVABLE PLAN MODE USED: NO
LOVABLE BUILD MODE USED: NO
LOVABLE CREDITS CONSUMED: NONE
PUBLISHED OR DEPLOYED: NO
```

This correction was completed entirely through inspection of `report1.31.md`, `report1.29.md`, `report1.30.md`, the locked D-068 sources already cited, and `instruction1.32.md` itself. No question was sent to Lovable.

---

## 20. Implementation-Authority Status

```text
STAGE 12 PACKAGE: COMPLETE AND LOCKED
TOKEN-LIFECYCLE PARAMETER RESOLUTION: COMPLETE
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED — NOT USED
LOVABLE BUILD MODE: PROHIBITED — NOT USED
IMPLEMENTATION AUTHORITY: NONE
PUBLISHING OR DEPLOYMENT AUTHORITY: NONE
```

This report authorizes nothing beyond itself. No Founder Lovable Brief or implementation authorization was created.

---

## 21. Final Readiness Conclusion

```text
TOKEN VALIDITY:
RESOLVED — 15 MINUTES, FIXED, SERVER-CONTROLLED

CONSUMED-TOKEN FULL-METADATA RETENTION:
RESOLVED — 90 DAYS AFTER consumed_at

EXPIRED-UNCONSUMED FULL-METADATA RETENTION:
RESOLVED — 30 DAYS AFTER expires_at

RAW-TOKEN MINIMIZATION:
RESOLVED

PURGE ELIGIBILITY:
RESOLVED

PURGE EXECUTION:
SEPARATE FUTURE AUTHORITY REQUIRED

TOKEN-LIFECYCLE PARAMETER RESOLUTION:
COMPLETE
```

```text
PHASE 1 PRE-IMPLEMENTATION READINESS COMPLETE — FOUNDER LOVABLE BRIEF MAY BE PREPARED
```

The rejected indefinite-retention position is fully replaced with the fixed Mission Control policy: 90-day full-metadata retention after `consumed_at` for consumed rows, 30-day full-metadata retention after `expires_at` for expired-unconsumed rows, immediate raw-token minimization on consumption, immediate usability-loss (with lazy-or-future-cleanup physical minimization) on expiry, exact purge-eligibility points, and purge execution explicitly left to a separately authorized future mechanism this report does not design, build, or claim exists. The 15-minute validity period and every other previously resolved element of the `catalog_link_preview_tokens` design (`report1.29.md`, `report1.30.md`, and the unmodified portions of `report1.31.md`) remain unchanged. No Product Truth changed and no Founder decision is required. This is the final documentation correction in the SB-P-1.11 Phase 1 pre-implementation readiness sequence; no further token-lifecycle parameter remains open.
