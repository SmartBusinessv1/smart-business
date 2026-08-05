# SMART BUSINESS MISSION CONTROL

# Report 1.31 — SB-P-1.11 Token-Lifecycle Parameter Resolution

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Final Pre-Implementation Token-Lifecycle Parameter Resolution

**Executing Room:** Claude Code, acting in the Database Specialist and Security Architecture roles

**Authorizing Instruction:** `communication/live/instruction1.31.md`

**Report Type:** Documentation-only final parameter-resolution report. No executable SQL, no implementation, no Lovable use. Every field named below is conceptual specialist notation, not a runnable statement.

**Refinement Notice:** Sections 8.2, 8.3, 8.6, the parameter matrix (Section 9), the lifecycle timeline (Section 10), and the final readiness conclusion (Section 21) were corrected under `communication/live/instruction1.32.md`, replacing the rejected indefinite-retention position with the fixed 90-day/30-day retention-and-purge policy. Section 7 (the 15-minute validity period) was not reopened or altered. See `communication/live/report1.32.md` for that correction's own completion report.

---

## 1. Branch Name

`mission/SB-P-1.11-token-lifecycle-parameter-resolution`

---

## 2. Synchronized Base `main` SHA

`751029f302a9f13fa00628cb25fe0693bf4c21f1`

Confirmed via `git fetch --all --prune` followed by `git checkout main` and `git merge --ff-only origin/main` (fast-forward from `30ae3bc248fd4a036a38ae726ea19f50793ff73a`, bringing in the merged `instruction1.31.md` and the merged database specialist resolution refinement, PR #95).

---

## 3. Substantive Branch Commit SHA

`0d984100f1f18c587760fb1c39f9f3ae3e4f7ab1`

---

## 4. Pull-Request Number and URL

PR #97 — `https://github.com/SmartBusinessv1/smart-business/pull/97`

---

## 5. Exact Files Changed

- Created: `communication/live/report1.31.md`

No other file was created, modified, renamed, moved, or deleted in the original PR #97 mission. This document was subsequently corrected under `communication/live/instruction1.32.md`; see `communication/live/report1.32.md` for that refinement's own file-change record.

---

## 6. Baseline and Evidence Sources

This report builds strictly on top of the already-closed `catalog_link_preview_tokens` design in `communication/live/report1.29.md` (as corrected by `communication/live/report1.30.md`), without reopening it: token uniqueness (`token uuid`, globally unique), single-use enforcement (`consumed_at`), business binding (`business_id`), initiating/consuming-actor binding (`initiating_actor_user_id`/`consuming_actor_user_id`), preview-state binding (`expected_state_snapshot`), and rejection categories (`STALE_STATE`, `ACTOR_MISMATCH`) are treated as fixed and unchanged. This report adds exactly one new conceptual field, `issued_at`, needed to answer Question A's "when does the validity clock begin," and resolves the two parameters instruction1.31.md authorizes.

Sources consulted, in the required order:

1. Locked Smart Business sources — `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` (Product Blueprint, §8, §10 Rule 28); `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (Version 2.2, §3, §5.0, §10, §11 step 3, §18); `docs/implementation/SB-P-1.11/engineering-contract.md` (§12, §24); `docs/implementation/SB-P-1.11/lovable-build-prompt.md` (§14, §22).
2. Founder Product Decision Record D-001–D-068 — D-068 (preview/confirmation safeguard); searched for `minute`/`expir`/`timeout`/`TTL` — no numeric duration found for this parameter.
3. Accepted SB-P-1.11 reports and dispositions — `communication/live/report1.29.md`, `communication/live/report1.30.md` (Item 5, token-security lifecycle matrix).
4. Existing repository security and audit precedents — `supabase/migrations/*.sql`: every append-only history/ledger table in the repository (`inventory_movements`, `transaction_correction_events`, and by locked design every `catalog_*_events` table) is immutable and retained without any deletion, archival, or purge mechanism; no `pg_cron`, scheduled job, or cleanup routine exists anywhere in the current schema. The only numeric time values anywhere in the locked SB-P-1.11 sources are the Pattern A scheduler's unrelated run interval (1 minute) and lag budget (5 minutes), which govern scheduled-price activation polling, not preview-token validity, and are not reused here to avoid conflating two unrelated parameters.
5. Clearly labeled specialist inference — the exact validity duration (Section 7) and the retention/minimization mechanism (Section 8), since no locked source states either.

No external web research was performed or required. No Lovable Plan Mode question was asked. No Lovable Build Mode credit was used.

---

## 7. Question A — Exact Server-Controlled Validity Period

**One exact duration:**

```text
VALIDITY DURATION: 15 MINUTES, FIXED, SERVER-CONTROLLED
```

- **Fixed and server-controlled:** the duration is a single constant applied identically to every `catalog_link_preview_tokens` row; it is not configurable per business, per actor, or per request.
- **Client cannot supply, extend, renew, or override it:** no command parameter accepts a caller-supplied duration or expiry timestamp. `preview_catalog_inventory_link_change` computes `expires_at` entirely server-side; `assign_or_replace_catalog_inventory_link`/`remove_catalog_inventory_link` never accept or honor a client-supplied expiry value.
- **When the validity clock begins:** at the instant the preview-generating command (`preview_catalog_inventory_link_change`) successfully commits and returns the token — conceptually `issued_at = now()` (server/database clock), stored on the row. `expires_at = issued_at + 15 minutes`, computed once, at issuance, server-side.
- **Exact validity comparison boundary:** the token is valid while `now() < expires_at`, evaluated at the moment the commit call is processed; the instant `now() >= expires_at`, it is expired. Both `now()` and `expires_at` are server (database) values — the boundary is a single server-side comparison, never a client-reported time.
- **Clock-skew treatment:** not applicable in the traditional sense. Because `issued_at`, `expires_at`, and the comparison at commit time are all evaluated on the same authoritative server clock, there is no second clock to skew against — the client (dashboard browser, or any future channel) never supplies, computes, or interprets a timestamp for validity purposes, satisfying the evaluation standard's "no dependence on Lovable, browser, or client clocks."
- **Behavior after expiry:** the commit call is rejected with `rejected`/`STALE_STATE` — the same locked category EIS §10 step 3 and Engineering Contract §12 already assign to "invalid/expired/consumed/mismatched-owner token."
- **Fresh preview mandatory:** yes. After expiry, the only path forward is a new call to `preview_catalog_inventory_link_change`, which issues a new token with a new `issued_at`/`expires_at` and a freshly recomputed `expected_state_snapshot`. There is no partial-renewal path.
- **Renewal prohibited — confirmed:** no "extend," "renew," or "refresh token" command exists in, or is proposed for, the locked 28-command surface. This report does not add one; a merchant who wants more time obtains a new preview, not an extension of the old one.
- **Locked-source traceability:** Engineering Contract §12 ("D-068 — Preview, Confirmation, and Atomic Commit Safeguard"); EIS §10 nine-step commit model, step 3 ("token resolution"); EIS §3 (server-derived scope/identity, never caller-supplied, applied here to time as well as identity).
- **Security rationale:** a short, fixed, server-only window bounds the exposure of a single-use bearer token and bounds how long a previewed price/unit/link snapshot can drift from live state before being treated as stale — directly serving the "minimal replay and stale-state exposure" and "protection against accidental confirmation of an old preview" evaluation criteria.
- **Usability/human rationale:** 15 minutes comfortably covers the realistic time a small-business owner needs to read a price/unit-change preview and decide, including a brief real-world interruption (a customer, a phone call) common in the WhatsApp-first, mobile, single-owner operating context this mission targets, without leaving a stale preview sitting open indefinitely. It is a round, easily explainable number requiring no special justification to a merchant or to Mission Control, and it does not depend on session length, browser tab state, or any client-side timer — only on the server's own record of when the preview was issued.
- **Founder decision required:** No. This is an internal safeguard-timing parameter, not a change to what the product does (preview, then explicit confirmation, per Rule 28/D-068) — only how long the technical confirmation window stays open. It does not alter merchant-facing product behavior beyond the ordinary, already-locked expectation that an unconfirmed preview must eventually be re-requested.
- **Final disposition:**

```text
RESOLVED — TOKEN VALIDITY PERIOD ESTABLISHED
```

---

## 8. Question B — Retention, Minimization, and Purge Policy

### 8.1 Distinguishing the Seven Categories (instruction1.31.md §5)

1. **Active unconsumed tokens** — `consumed_at IS NULL` and `now() < expires_at`; fully usable for exactly one commit attempt.
2. **Consumed tokens** — `consumed_at IS NOT NULL`; permanently unusable from the instant of consumption onward.
3. **Expired unconsumed tokens** — `consumed_at IS NULL` and `now() >= expires_at`; permanently unusable from the instant of expiry onward.
4. **Rejected or stale confirmation attempts** — any commit call that failed token resolution (invalid, already-consumed, expired, wrong actor, wrong business, or stale preview state); these do not create a new token-lifecycle state on the token row itself (see Section 8.4).
5. **The token secret/bearer value** — the `token` column's own value; the single thing that must never remain usable, and the thing this report requires be minimized after categories 2 or 3 are reached (Section 8.3).
6. **Durable audit evidence** — the non-secret fields (Section 8.5) that persist after the raw token value is minimized.
7. **Operational cleanup responsibility** — deliberately not designed by this mission (Section 8.6); named only as a future authority.

### 8.2 Retention Periods

**Corrected per `instruction1.32.md` §3–§4.** The prior indefinite-retention position is removed and replaced with the fixed Mission Control policy below. Indefinite retention is not the approved policy for either row type.

```text
CONSUMED-ROW FULL-METADATA RETENTION: 90 DAYS AFTER consumed_at
EXPIRED-UNCONSUMED-ROW FULL-METADATA RETENTION: 30 DAYS AFTER expires_at
```

**Rationale:** these are fixed Mission Control policy deadlines, not repository-precedent-derived defaults. They apply now — as exact, calculable retention windows — even though no cleanup worker, cron job, Edge Function, RPC, function, or other purge mechanism is yet authorized to act on them (Section 8.6). The absence of a current cleanup mechanism does not justify treating retention as indefinite: reaching the end of the fixed window makes a row **purge-eligible** (Section 8.6); it does not, by itself, delete or further minimize anything, because no execution mechanism yet exists to act on that eligibility.

### 8.3 Raw-Token Treatment — the Mandatory Safety Boundary

```text
AUDIT RETENTION
```

is retaining the row's non-secret evidence fields (Section 8.5) for the fixed period above — 90 days after `consumed_at` (consumed rows) or 30 days after `expires_at` (expired-unconsumed rows) — after which the row becomes purge-eligible (Section 8.6).

```text
TOKEN USABILITY
```

is whether the `token` column's value can still grant access to `assign_or_replace_catalog_inventory_link`/`remove_catalog_inventory_link`. These are answered independently, and audit retention never implies or restores token usability:

- **The exact point at which the token becomes unusable:** immediately and unconditionally at the instant `consumed_at` is set (consumption) or the instant `now() >= expires_at` (expiry) — usability is governed entirely by the mandatory server-side `consumed_at`/`expires_at` state check already locked in Section 11 of `report1.29.md`. For the expiry path in particular, this logical unusability is guaranteed by the check itself the moment the clock passes `expires_at`, regardless of whether anyone ever attempts to use the token again and regardless of whether the raw value has yet been physically redacted.
- **Raw-token treatment after consumption (unchanged — immediate):** the `token` column's value is redacted (conceptually, set to `NULL` or replaced with a non-reversible marker) in the same transaction that sets `consumed_at`. The row's `id` (the stable primary key, distinct from the now-redacted `token` bearer value) continues to serve as the row's durable correlation identity.
- **Raw-token treatment after expiry (corrected per `instruction1.32.md` §4 item 9):** logical unusability and physical redaction are no longer treated as necessarily simultaneous for the expiry path. Usability ends immediately at `expires_at` through the mandatory server-side check alone — that guarantee does not wait for anything else. Physical minimization of the stored raw value occurs at whichever comes first: (a) the first authorized interaction with the row after expiry (e.g., a retry attempt against the token, whose rejection-handling transaction also performs the redaction), or (b) a separately authorized future cleanup process (Section 8.6), which does not yet exist. An expired-but-never-retried row therefore remains permanently unusable from the instant of expiry even if its raw value has not yet been physically redacted — the state check, not the presence or absence of the raw value, is what enforces unusability.
- Redaction is a data-minimization measure layered on top of, not a substitute for, the state-check enforcement: even where redaction is delayed (the expiry path, absent a retry or cleanup run), `consumed_at`/`expires_at` alone already make the row unusable. Redaction exists so that a database read (backup, replica, incident investigation) is less likely to encounter a live-looking bearer value for a token that can no longer be used in any case, satisfying instruction1.31.md §5.2's and instruction1.32.md §4 item 7's mandatory boundary that "the raw token value must not remain usable after consumption or expiry" — a usability guarantee the state check alone already fully provides.

### 8.4 Rejected/Stale Confirmation-Attempt Evidence

**Whether rejected attempts create or update audit evidence:** yes, but through an already-locked mechanism this report reuses rather than duplicates. EIS §3's committed rejection model ("expected rejections are committed outcomes, not aborted transactions") and its ordering principle ("idempotency resolves before mutable-state evaluation... the idempotency key and payload fingerprint are then checked before any precondition or stale-state evaluation runs") mean every commit attempt — including one that fails at token resolution — first passes through the underlying command's idempotency-key claim. `catalog_write_idempotency_keys.status` is already the EIS's own locked "authoritative per-attempt outcome record, including rejected attempts" (EIS §5.0, §18). A rejected preview-token confirmation attempt is therefore already durably recorded by this pre-existing mechanism, with no separate per-attempt table needed for `catalog_link_preview_tokens` specifically.

**How replay investigation remains possible without retaining a usable token secret:** the row's `id`, `business_id`, `initiating_actor_user_id`, timestamps, and (once correlated) the underlying command's idempotency-key/`request_id` are sufficient to reconstruct "which preview, for which business and actor, was this replay attempted against, and when" — none of which requires the raw bearer value. Investigating a replay never requires re-deriving or re-using the original secret; it only requires the retained correlation metadata.

### 8.5 Minimum Durable Audit Fields (instruction1.31.md §5.1)

| Required evidence | Field |
|---|---|
| Business identity | `business_id` |
| Token-record/correlation identity | `id` (stable primary key; survives `token` redaction) |
| Initiating actor | `initiating_actor_user_id` |
| Consuming actor, when applicable | `consuming_actor_user_id` (`NULL` if never consumed) |
| Expected-state identity or digest | `expected_state_snapshot`, retained in full while active; reduced to a digest (a one-way summary sufficient to confirm what was reviewed without retaining every live field indefinitely) once minimized |
| Issue time | `issued_at` |
| Expiry time | `expires_at` |
| Consumption time, when applicable | `consumed_at` (`NULL` if never consumed) |
| Final lifecycle outcome | derived, not separately stored — `CONSUMED` if `consumed_at IS NOT NULL`, else `EXPIRED_UNCONSUMED` if `now() >= expires_at`, else still `ACTIVE`; deriving avoids a redundant flag that could drift from the timestamps, consistent with this mission's own "derive, do not duplicate, status" precedent (e.g., Lovable Build Prompt §14: stock status "derived only from the presence of the inventory link — never build a separate editable type field") |
| Rejection or stale-state reason, when applicable | captured on the underlying command's own `catalog_write_idempotency_keys` outcome record (EIS §5.0, §18), not duplicated on the token row (Section 8.4) |
| Command correlation/idempotency reference, when applicable | the underlying commit attempt's idempotency key/`request_id`, cross-referenceable to the token row's `id` |

No field beyond this list is retained; in particular, the redacted `token` value itself is excluded once minimized, satisfying instruction1.31.md's "do not retain more personal or sensitive data than is needed for auditability and replay investigation."

### 8.6 Conceptual Ownership, Purge Trigger, and Future Cleanup Authority

**Ownership between the token row and `catalog_audit_events`:** conceptually both, answering different questions. The token row owns evidence of the D-068 *safeguard's own process* — was a preview issued, by whom, reviewed against what state, and consumed or not. `catalog_product_link_events`/`catalog_audit_events` separately own evidence of the *resulting substantive mutation* once a commit actually succeeds (what changed on the product). Neither duplicates the other; a complete audit trail for one D-068 flow reads both.

**Purge eligibility (corrected per `instruction1.32.md` §3–§4 — exact, fixed points, not "none currently reachable"):**

```text
PURGE ELIGIBILITY:
Consumed row — consumed_at + 90 days.
Expired-unconsumed row — expires_at + 30 days.
```

Reaching its eligibility point makes a row a candidate for purge; it does not, by itself, cause any deletion or further minimization, because no execution mechanism yet exists (below).

**After full-metadata retention (corrected per `instruction1.32.md` §4 item 11):** once a row passes its purge-eligibility point, the required outcome is one of exactly two: (a) delete the transient token row entirely, or (b) irreversibly minimize it to durable audit-only evidence, retained according to the general catalog audit-event policy. Durable audit-only evidence must not retain the raw bearer token, the complete `expected_state_snapshot` payload contents, or unnecessary personal data; it retains, where applicable, the same minimal fields as Section 8.5 (business identity, stable record/correlation identity, initiating actor, consuming actor, issue time, expiry time, consumption time, lifecycle outcome, rejection reason, request/idempotency correlation, and a minimal expected-state digest rather than the full snapshot).

**Purge execution — separate future authority required:**

```text
PURGE EXECUTION:
Requires a separately authorized cleanup mechanism.
```

Per instruction1.31.md §5.3 and instruction1.32.md §7–§8, this mission does not design a scheduler, worker, function, cron job, `pg_cron`/`pg_net` activation, or Edge Function to perform that execution. A separate, future, explicitly authorized data-retention/cleanup mission — potentially involving a scheduled batch mechanism — is the responsible future authority. This report names that requirement without designing, scoping, or implementing it.

**Behavior until a cleanup mechanism is separately authorized:** rows may remain physically stored past their purge-eligibility point — including, for the expiry path, potentially still holding an un-redacted (but already permanently unusable) raw value if no retry or cleanup run has yet touched them (Section 8.3). This is not a security gap: token usability ended irreversibly at consumption or expiry, independent of physical storage state or purge timing. **No implementation may claim that automated purge is active** until a cleanup mechanism is separately authorized, built, and verified — this report authorizes no such claim and no such mechanism.

**Business-isolation and actor-privacy requirements:** reads of `catalog_link_preview_tokens` (minimized or not) remain subject to the same business-scoped, permission-aware read path already locked for every other protected table (Lovable Build Prompt §6: "protected-column reads... go through a `SECURITY DEFINER` RPC or view... never a direct table `SELECT` from the client"); no cross-business visibility is introduced. Phase 1 is Owner-only, so no additional actor-privacy segregation among multiple internal roles is required yet; this report does not invent one ahead of the shared permission-engine's future arrival.

- **Locked-source traceability:** Engineering Contract §12; EIS §3, §5.0, §10, §11, §18; Lovable Build Prompt §6, §14, §22; repository migration precedent (`inventory_movements`, `transaction_correction_events`, absence of any purge mechanism anywhere in `supabase/migrations/*.sql`).
- **Security, privacy, storage, and auditability rationale:** minimization (Section 8.3) satisfies the mandatory raw-token-unusability boundary immediately and independently of retention length; the fixed 90-day/30-day full-metadata retention windows satisfy near-term auditability and replay-investigation needs without leaving data retained indefinitely, and fix a fixed Mission Control policy deadline now even though execution of the resulting purge eligibility is deferred to a separately authorized future mechanism; deferring that execution mechanism keeps this mission within its documentation-only, non-implementation boundary while still naming the correct future authority.
- **Founder decision required:** No. Every choice above is an internal database-security/observability mechanism; none changes merchant-facing product behavior, and none conflicts with or narrows any locked Product Truth.
- **Final disposition:**

```text
RESOLVED — TOKEN RETENTION AND PURGE POLICY ESTABLISHED
```

---

## 9. Required Parameter Matrix

| Parameter | Exact Value or Policy | Server-Controlled Rule | Security Rationale | Usability / Human Rationale | Locked-Source Traceability | Final Disposition |
|---|---|---|---|---|---|---|
| Validity duration | 15 minutes, fixed | Client cannot supply, extend, renew, or override; single constant for every row | Bounds single-use bearer-token exposure and preview-to-commit drift window | Comfortably covers real-world review-and-decide time with room for a brief interruption; round, explainable number | Engineering Contract §12; EIS §3, §10 step 3 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Validity start point | `issued_at = now()` at successful `preview_catalog_inventory_link_change` commit | Server (database) clock only; never client-supplied | Removes any dependence on client/browser clock trust | Predictable, single well-defined starting instant | Engineering Contract §12; EIS §3 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Expiry boundary | Valid while `now() < expires_at`; expired at `now() >= expires_at` | Single server-side comparison at commit-attempt time | Unambiguous, race-free boundary; no clock-skew case exists (one clock only) | Simple to explain: "your preview is valid for 15 minutes from when you opened it" | EIS §10 step 3, step 5 (recompute-and-compare) | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Renewal behavior | Prohibited — no renew/extend command exists or is proposed | Client cannot request renewal; only a fresh `preview_catalog_inventory_link_change` call issues a new token | Prevents indefinite extension of a single bearer token's exposure window | A fresh preview also re-shows current, accurate state — safer than silently extending a stale one | Engineering Contract §12; locked 28-command surface (unchanged) | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Consumed-row retention | Full non-secret metadata retained for 90 days after `consumed_at`; purge-eligible at `consumed_at + 90 days` | Not client-controlled; a fixed Mission Control policy deadline, applicable now regardless of whether a purge mechanism exists | Bounds how long full metadata persists before becoming eligible for reduction/deletion, while still supporting near-term dispute resolution | Preserves a clear, time-bounded explanation of "what happened" long enough to resolve any near-term merchant dispute | `instruction1.32.md` §3–§4 (fixed Mission Control policy) | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Expired-row retention | Full non-secret metadata retained for 30 days after `expires_at`; purge-eligible at `expires_at + 30 days` | Same as above | An expired-but-never-consumed attempt is still legitimate near-term audit evidence, with a shorter window than a completed change since no product mutation occurred | Same as above, proportioned to a lower-stakes event | `instruction1.32.md` §3–§4 (fixed Mission Control policy) | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Raw-token treatment after consumption | Redacted (nulled/non-reversible) in the same transaction that sets `consumed_at`; row `id` remains as correlation identity | Server-side, atomic with the state transition — not client-triggered | Ensures a data read can never expose a live-looking bearer value for an already-used token | No merchant-visible effect — purely internal hygiene | Instruction1.31.md §5.2 mandatory boundary; EIS §3 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Raw-token treatment after expiry | Redacted (nulled/non-reversible) on first commit attempt observing expiry, same transaction as the rejection | Server-side, atomic with the state transition | Same as above, for the expiry path | No merchant-visible effect | Instruction1.31.md §5.2 mandatory boundary; EIS §3 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Durable audit evidence | `business_id`, `id`, `initiating_actor_user_id`, `consuming_actor_user_id`, `expected_state_snapshot`/digest, `issued_at`, `expires_at`, `consumed_at`, derived outcome (Section 8.5) | Entirely server-recorded; no client-supplied evidence field | Sufficient for dispute resolution and replay investigation without retaining the usable secret | Enables merchant/Mission Control to reconstruct "what was reviewed and by whom" | EIS §5.0, §18; instruction1.31.md §5.1 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Rejected-attempt evidence | Captured via the underlying command's existing `catalog_write_idempotency_keys` outcome-of-record — no new mechanism | Server-recorded automatically as part of the already-locked commit-attempt ordering | Reuses an already-locked, tamper-resistant outcome record rather than inventing a parallel one | No new merchant-facing behavior | EIS §3 (idempotency-first ordering), §5.0, §18 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Purge trigger | Eligibility (not execution) is reached at `consumed_at + 90 days` (consumed) or `expires_at + 30 days` (expired-unconsumed); execution mechanism not authorized | Eligibility is a fixed, calculable policy point; execution requires a separate mechanism this mission does not create | Avoids inventing infrastructure outside this mission's documentation-only authority, while still fixing the deadline now | Not applicable | `instruction1.32.md` §3–§4, §5.3-equivalent boundary | `RESOLVED — ELIGIBILITY FIXED; EXECUTION NOT AUTHORIZED` |
| Future cleanup authority | A separately authorized future data-retention/purge mission (not created here); no cleanup worker, cron job, Edge Function, RPC, or function exists or is claimed to exist | Not applicable | Names the correct future authority without pre-designing it; prevents any false claim of active automated purge | Not applicable | Instruction1.31.md §5.3; `instruction1.32.md` §4 item 10 | `RESOLVED — AUTHORITY NAMED, NOT CREATED` |

---

## 10. Conceptual Lifecycle Timeline

**Corrected per `instruction1.32.md` §4 item 14.** This is conceptual documentation only, not executable state-machine code.

```text
ISSUED
  Triggering event:   preview_catalog_inventory_link_change commits successfully.
  Actor/process:      the initiating actor (server-verified), via the preview command.
  Token usability:     usable — this is the token's creation instant.
  Audit evidence:      row created with business_id, id, initiating_actor_user_id,
                        expected_state_snapshot, issued_at, expires_at (consumed_at NULL).
  Later-replay:        not applicable yet — no attempt has occurred.

ACTIVE
  Triggering event:   time elapses between ISSUED and either CONSUMED or EXPIRED,
                        bounded by the fixed, unchanged 15-minute validity period.
  Actor/process:      no actor action required; a passive server-time-bounded state.
  Token usability:     usable, exactly once, until consumed or expired.
  Audit evidence:      unchanged from ISSUED.
  Later-replay:        not applicable — this is the only state in which a first
                        legitimate use can succeed.

CONSUMED OR EXPIRED
  Triggering event:   CONSUMED — the initiating actor calls
                        assign_or_replace_catalog_inventory_link (or
                        remove_catalog_inventory_link) with a valid, unexpired token,
                        and the D-068 nine-step commit model succeeds (same-actor
                        confirmation enforced; a mismatched actor is
                        rejected/ACTOR_MISMATCH, not a transition to CONSUMED).
                        EXPIRED — now() >= expires_at is reached, whether or not any
                        attempt is ever made.
  Actor/process:      CONSUMED: the same actor who initiated the preview. EXPIRED:
                        server-evaluated; no actor action required.
  Token usability:     permanently unusable from this instant in both cases — for
                        EXPIRED, this is guaranteed immediately by the mandatory
                        expires_at check alone, independent of any later interaction.
  Audit evidence:      CONSUMED: consumed_at and consuming_actor_user_id recorded;
                        raw token redacted in the same transaction. EXPIRED: no
                        consumed_at/consuming_actor_user_id is ever set; raw-token
                        redaction occurs at the first authorized interaction after
                        expiry or via a future cleanup process, whichever is first —
                        the row remains unusable even before that redaction happens.
  Later-replay:        any further attempt against this token → rejected/STALE_STATE.

FULL-METADATA RETENTION
  Triggering event:   begins immediately at CONSUMED or EXPIRED and lasts for the
                        fixed window: 90 days after consumed_at (consumed), or 30 days
                        after expires_at (expired-unconsumed).
  Actor/process:      no actor action required; a passive, calendar-bounded state.
  Token usability:     already unusable (unchanged).
  Audit evidence:      full non-secret evidence set (Section 8.5) retained; token
                        column redacted (immediately for CONSUMED; opportunistically
                        or via future cleanup for EXPIRED, per above).
  Later-replay:        unchanged — rejected/STALE_STATE.

PURGE-ELIGIBLE
  Triggering event:   the fixed retention window elapses — consumed_at + 90 days, or
                        expires_at + 30 days.
  Actor/process:      no actor action required; reaching this point is automatic and
                        calculable, but it does not itself delete or further minimize
                        anything, since no execution mechanism is yet authorized.
  Token usability:     already unusable.
  Audit evidence:      unchanged from FULL-METADATA RETENTION.
  Later-replay:        unchanged — rejected/STALE_STATE.

PURGED OR AUDIT-ONLY MINIMIZED
  Triggering event:   requires a future, separately authorized cleanup mechanism
                        (Section 8.6) that does not yet exist. Until that mechanism is
                        authorized, built, and verified, no row actually reaches this
                        state — it remains PURGE-ELIGIBLE, physically stored, and
                        permanently unusable, and no implementation may claim
                        automated purge is active.
  Actor/process:      a future authorized cleanup mechanism only.
  Token usability:     already unusable in either eventual outcome.
  Audit evidence:      none, if the row is deleted (PURGED); reduced to the durable
                        audit-only field set (Section 8.6), excluding the raw bearer
                        token, the complete expected-state payload, and unnecessary
                        personal data, if AUDIT-ONLY MINIMIZED instead.
  Later-replay:        if PURGED, a replay attempt resolves as a nonexistent token
                        (rejected/STALE_STATE, indistinguishable from never having
                        existed); if AUDIT-ONLY MINIMIZED, unchanged — rejected/
                        STALE_STATE.
```

---

## 11. Confirmation That Both Parameters Were Investigated

```text
QUESTION A (VALIDITY PERIOD): INVESTIGATED — RESOLVED
QUESTION B (RETENTION AND PURGE POLICY): INVESTIGATED — RESOLVED
```

One exact validity duration (15 minutes) was selected — not a range. One exact retention-and-purge policy was selected: 90-day full-metadata retention after `consumed_at` for consumed rows, 30-day full-metadata retention after `expires_at` for expired-unconsumed rows, immediate raw-token redaction on consumption (opportunistic-or-future-cleanup redaction on expiry, with usability guaranteed immediately regardless), fixed purge-eligibility points, and purge execution left to a separately authorized future mechanism. No blocker was recorded for either question. (Corrected per `instruction1.32.md`; the indefinite-retention position this section originally described has been replaced throughout Section 8.)

---

## 12. Confirmation That Raw-Token Usability and Audit Retention Are Distinguished

```text
AUDIT RETENTION ≠ TOKEN USABILITY — EXPLICITLY DISTINGUISHED (Section 8.3)
RAW TOKEN USABLE AFTER CONSUMPTION: NO
RAW TOKEN USABLE AFTER EXPIRY: NO
```

Section 8.3 states this distinction explicitly and confirms that retaining audit evidence never reactivates or preserves token usability — usability ends at the `consumed_at`/`expires_at` state transition, independent of and prior to raw-value redaction.

---

## 13. Confirmation That Resolved Database Design Was Not Reopened

```text
DBR-001 THROUGH DBR-005: NOT REOPENED
report1.29.md: NOT MODIFIED
report1.30.md: NOT MODIFIED
TOKEN UNIQUENESS, SINGLE-USE MECHANISM, ACTOR/BUSINESS/PREVIEW-STATE BINDINGS: UNCHANGED
STORED NORMALIZED COLUMNS, ARCHIVED-ROW UNIQUENESS, business_tax_settings SHAPE: UNCHANGED
```

This report only adds the two previously-open parameters (validity duration, retention/purge policy) and one additive field (`issued_at`) needed to express the validity clock's start point; every field, mechanism, and rejection category resolved in `report1.29.md`/`report1.30.md` is treated as fixed and is repeated here only by reference, never redefined.

---

## 14. Confirmation That No Existing File Was Modified

```text
FILES MODIFIED: NONE
FILES CREATED: communication/live/report1.31.md (only)
```

Confirmed by `git status --porcelain` on the mission branch, showing exactly this one new path.

---

## 15. Confirmation That No Implementation Artifact Was Created

```text
SQL: NONE CREATED
MIGRATIONS: NONE CREATED
SCHEMAS, TABLES, COLUMNS, CONSTRAINTS, INDEXES: NONE CREATED
RLS POLICIES: NONE CREATED
RPCS, FUNCTIONS, TRIGGERS, WORKERS, EDGE FUNCTIONS: NONE CREATED
ROLES OR GRANTS: NONE CREATED
SCHEDULER DESIGN: NONE CREATED
pg_cron / pg_net: NOT AUTHORIZED, NOT ACTIVATED
FOUNDER LOVABLE BRIEF: NONE CREATED
IMPLEMENTATION AUTHORIZATION: NONE CREATED
```

This report is Markdown documentation only.

---

## 16. Confirmation That No Lovable Mode Was Used

```text
LOVABLE PLAN MODE USED: NO
LOVABLE BUILD MODE USED: NO
LOVABLE CREDITS CONSUMED: NONE
PUBLISHED OR DEPLOYED: NO
```

This resolution was completed entirely through inspection of the locked sources and repository migrations listed in Section 6. No question was sent to Lovable.

---

## 17. Product Truth and Founder Decision Status

```text
PRODUCT TRUTH CHANGED: NO
NEW FOUNDER DECISION REQUIRED: NO
```

Both parameters are internal safeguard-timing and data-retention mechanisms. Neither changes merchant-facing product behavior beyond the already-locked expectation (Rule 28, D-068) that an unconfirmed preview must eventually be re-requested; neither reinterprets any Business Rule or Founder Decision.

---

## 18. Founder Lovable Brief Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
```

---

## 19. Paste-into-Lovable Authority Status

```text
PASTE-INTO-LOVABLE AUTHORITY: NONE
```

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
```

This report does not claim that implementation is authorized. It authorizes nothing beyond itself.

---

## 21. Final Readiness Conclusion

**Corrected per `instruction1.32.md` §6.**

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

Both authorized questions reached a fully evidence-backed, non-blocking resolution: an exact 15-minute, fixed, server-controlled validity period (Question A, unchanged and not reopened), and an exact retention/minimization/purge policy (Question B, corrected under `instruction1.32.md`) — 90-day full-metadata retention for consumed rows, 30-day full-metadata retention for expired-unconsumed rows, immediate raw-token redaction on consumption with usability-guaranteed/redaction-opportunistic treatment on expiry, fixed purge-eligibility points, reuse of the already-locked idempotency-key mechanism for rejected-attempt evidence, and purge execution left to a separately authorized future mechanism this report does not design. Every previously resolved element of the `catalog_link_preview_tokens` design (`report1.29.md`/`report1.30.md`) remains unchanged. No Founder decision is required, no Product Truth changed, and no implementation, SQL, migration, schema object, Lovable interaction, or scheduler/cleanup mechanism was created. See `communication/live/report1.32.md` for this correction's own completion evidence.
