# SMART BUSINESS MISSION CONTROL

# Report 1.31 — SB-P-1.11 Token-Lifecycle Parameter Resolution

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Final Pre-Implementation Token-Lifecycle Parameter Resolution

**Executing Room:** Claude Code, acting in the Database Specialist and Security Architecture roles

**Authorizing Instruction:** `communication/live/instruction1.31.md`

**Report Type:** Documentation-only final parameter-resolution report. No executable SQL, no implementation, no Lovable use. Every field named below is conceptual specialist notation, not a runnable statement.

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

No other file was created, modified, renamed, moved, or deleted.

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

```text
CONSUMED-ROW RETENTION (minimized audit metadata): INDEFINITE
EXPIRED-UNCONSUMED-ROW RETENTION (minimized audit metadata): INDEFINITE
```

**Rationale (repository precedent, labeled):** every existing append-only history/ledger table in this repository (`inventory_movements`, `transaction_correction_events`, and every `catalog_*_events` table by locked EIS design) is retained without any deletion, archival, or time-limited purge mechanism — none exists anywhere in the current schema. No locked source states a finite retention duration for any audit-adjacent table. Choosing an arbitrary finite number (e.g., "90 days") here would be unsupported invention; choosing "indefinite, consistent with the rest of this repository's audit-retention precedent" is the one exact, unambiguous, and non-inventive policy value available. This does not mean the raw secret is retained indefinitely — see Section 8.3.

### 8.3 Raw-Token Treatment — the Mandatory Safety Boundary

```text
AUDIT RETENTION
```

is retaining the row's non-secret evidence fields (Section 8.5) for the indefinite period above.

```text
TOKEN USABILITY
```

is whether the `token` column's value can still grant access to `assign_or_replace_catalog_inventory_link`/`remove_catalog_inventory_link`. These are answered independently, and audit retention never implies or restores token usability:

- **The exact point at which the raw token becomes unusable:** immediately and unconditionally at the instant `consumed_at` is set (consumption) or the instant `now() >= expires_at` is first evaluated at a commit attempt (expiry) — usability is governed entirely by the `consumed_at`/`expires_at` state check already locked in Section 11 of `report1.29.md`, not by whether the raw value has yet been redacted.
- **Raw-token treatment after consumption:** the `token` column's value is redacted (conceptually, set to `NULL` or replaced with a non-reversible marker) in the same transaction that sets `consumed_at`. The row's `id` (the stable primary key, distinct from the now-redacted `token` bearer value) continues to serve as the row's durable correlation identity.
- **Raw-token treatment after expiry:** the same redaction is applied — conceptually, on the first commit attempt that observes `now() >= expires_at` for that row, `token` is redacted in the same transaction that records the rejection.
- Redaction is a data-minimization measure layered on top of, not a substitute for, the state-check enforcement: even if redaction were delayed or failed, `consumed_at`/`expires_at` alone already make the row unusable. Redaction exists so that a database read (backup, replica, incident investigation) never exposes a live-looking bearer value for a token that can no longer be used, satisfying instruction1.31.md §5.2's mandatory boundary that "the raw token value must not remain usable after consumption or expiry."

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

**Purge trigger:** none is authorized or defined by this report. Per instruction1.31.md §5.3, this mission does not design a scheduler, worker, function, cron job, or any `pg_cron`/`pg_net`/Edge Function mechanism. Under the indefinite-retention policy in Section 8.2, no row currently becomes purge-eligible; a purge trigger only becomes a live question if a future, separately authorized mission changes retention from indefinite to a finite window.

**Future cleanup authority:** a separate, future, explicitly authorized data-retention/cleanup mission — potentially involving a scheduled batch mechanism — is the responsible future authority. This report names that requirement without designing, scoping, or implementing it.

**Behavior until a cleanup mechanism is separately authorized:** rows persist indefinitely in their minimized (raw token redacted, audit metadata intact) form, exactly like every other audit/history table in this repository. This is not a security gap — the security objective (an unusable, redacted bearer value) is already met at minimization — only a storage-growth consideration explicitly deferred to future operational tooling.

**Business-isolation and actor-privacy requirements:** reads of `catalog_link_preview_tokens` (minimized or not) remain subject to the same business-scoped, permission-aware read path already locked for every other protected table (Lovable Build Prompt §6: "protected-column reads... go through a `SECURITY DEFINER` RPC or view... never a direct table `SELECT` from the client"); no cross-business visibility is introduced. Phase 1 is Owner-only, so no additional actor-privacy segregation among multiple internal roles is required yet; this report does not invent one ahead of the shared permission-engine's future arrival.

- **Locked-source traceability:** Engineering Contract §12; EIS §3, §5.0, §10, §11, §18; Lovable Build Prompt §6, §14, §22; repository migration precedent (`inventory_movements`, `transaction_correction_events`, absence of any purge mechanism anywhere in `supabase/migrations/*.sql`).
- **Security, privacy, storage, and auditability rationale:** minimization (Section 8.3) satisfies the mandatory raw-token-unusability boundary immediately and independently of retention length; indefinite retention of the remaining non-secret metadata satisfies auditability and replay-investigation needs without inventing an unsupported finite duration, and mirrors this repository's own existing audit-retention posture; deferring the purge mechanism keeps this mission within its documentation-only, non-implementation boundary while still naming the correct future authority.
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
| Consumed-row retention | Indefinite (minimized audit metadata only) | Not client-controlled; a fixed repository-wide policy | Matches this repository's universal no-purge audit/history precedent; avoids an unsupported invented finite duration | Preserves a full, permanent explanation of "what happened" for dispute resolution | Repository precedent (`inventory_movements`, `transaction_correction_events`); no locked source sets a finite value | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Expired-row retention | Indefinite (minimized audit metadata only) | Same as above | Same as above — an expired-but-never-consumed attempt is still legitimate audit evidence | Same as above | Same as above | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Raw-token treatment after consumption | Redacted (nulled/non-reversible) in the same transaction that sets `consumed_at`; row `id` remains as correlation identity | Server-side, atomic with the state transition — not client-triggered | Ensures a data read can never expose a live-looking bearer value for an already-used token | No merchant-visible effect — purely internal hygiene | Instruction1.31.md §5.2 mandatory boundary; EIS §3 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Raw-token treatment after expiry | Redacted (nulled/non-reversible) on first commit attempt observing expiry, same transaction as the rejection | Server-side, atomic with the state transition | Same as above, for the expiry path | No merchant-visible effect | Instruction1.31.md §5.2 mandatory boundary; EIS §3 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Durable audit evidence | `business_id`, `id`, `initiating_actor_user_id`, `consuming_actor_user_id`, `expected_state_snapshot`/digest, `issued_at`, `expires_at`, `consumed_at`, derived outcome (Section 8.5) | Entirely server-recorded; no client-supplied evidence field | Sufficient for dispute resolution and replay investigation without retaining the usable secret | Enables merchant/Mission Control to reconstruct "what was reviewed and by whom" | EIS §5.0, §18; instruction1.31.md §5.1 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Rejected-attempt evidence | Captured via the underlying command's existing `catalog_write_idempotency_keys` outcome-of-record — no new mechanism | Server-recorded automatically as part of the already-locked commit-attempt ordering | Reuses an already-locked, tamper-resistant outcome record rather than inventing a parallel one | No new merchant-facing behavior | EIS §3 (idempotency-first ordering), §5.0, §18 | `RESOLVED — EXACT VALUE ESTABLISHED` |
| Purge trigger | None authorized; not designed under this mission | Not applicable — no mechanism exists | Avoids inventing infrastructure outside this mission's documentation-only authority | Not applicable | Instruction1.31.md §5.3 | `RESOLVED — POLICY ESTABLISHED (NO MECHANISM AUTHORIZED)` |
| Future cleanup authority | A separately authorized future data-retention/purge mission (not created here) | Not applicable | Names the correct future authority without pre-designing it | Not applicable | Instruction1.31.md §5.3 | `RESOLVED — AUTHORITY NAMED, NOT CREATED` |

---

## 10. Conceptual Lifecycle Timeline

This is conceptual documentation only, not executable state-machine code.

```text
ISSUED
  Triggering event:   preview_catalog_inventory_link_change commits successfully.
  Actor/process:      the initiating actor (server-verified), via the preview command.
  Token usability:     usable — this is the token's creation instant.
  Audit evidence:      row created with business_id, id, initiating_actor_user_id,
                        expected_state_snapshot, issued_at, expires_at (consumed_at NULL).
  Later-replay:        not applicable yet — no attempt has occurred.

ACTIVE
  Triggering event:   time elapses between ISSUED and either CONSUMED or EXPIRED.
  Actor/process:      no actor action required; a passive server-time-bounded state.
  Token usability:     usable, exactly once, until consumed or expired.
  Audit evidence:      unchanged from ISSUED.
  Later-replay:        not applicable — this is the only state in which a first
                        legitimate use can succeed.

CONSUMED
  Triggering event:   the initiating actor calls assign_or_replace_catalog_inventory_link
                        (or remove_catalog_inventory_link) with a valid, unexpired token,
                        and the D-068 nine-step commit model succeeds.
  Actor/process:      the same actor who initiated the preview (same-actor confirmation,
                        EIS §3/§15 — a mismatched actor is rejected/ACTOR_MISMATCH, not a
                        transition to CONSUMED).
  Token usability:     permanently unusable from this instant.
  Audit evidence:      consumed_at and consuming_actor_user_id recorded; raw token
                        redacted in the same transaction (see MINIMIZED).
  Later-replay:        any further attempt against this token → rejected/STALE_STATE.

EXPIRED
  Triggering event:   now() >= expires_at, first observed at a commit attempt (or simply
                        elapsing, if no attempt is ever made).
  Actor/process:      server-evaluated; no actor action required to "cause" expiry.
  Token usability:     permanently unusable from this instant.
  Audit evidence:      no consumed_at/consuming_actor_user_id is ever set; raw token
                        redacted (see MINIMIZED) once an expired-state attempt is
                        observed, or as part of routine minimization if never attempted.
  Later-replay:        any attempt against this token → rejected/STALE_STATE.

MINIMIZED
  Triggering event:   immediately follows CONSUMED or EXPIRED, in the same transaction.
  Actor/process:      server-side redaction; no actor action.
  Token usability:     already unusable (unchanged from CONSUMED/EXPIRED); this state
                        additionally removes the raw bearer value from storage.
  Audit evidence:      full non-secret evidence set (Section 8.5) retained; token
                        column redacted; expected_state_snapshot may be reduced to a
                        digest.
  Later-replay:        unchanged — rejected/STALE_STATE.

PURGE-ELIGIBLE
  Triggering event:   would occur once a finite retention period elapses.
  Actor/process:      not currently reachable — Section 8.2 sets retention to
                        INDEFINITE, so no row becomes purge-eligible under this policy.
  Token usability:     already unusable.
  Audit evidence:      unchanged from MINIMIZED.
  Later-replay:        unchanged — rejected/STALE_STATE.

PURGED OR DURABLE-AUDIT-ONLY
  Triggering event:   PURGED requires a future, separately authorized cleanup mechanism
                        (Section 8.6) — not created by this report. DURABLE-AUDIT-ONLY is
                        the practical terminal state today, since retention is indefinite.
  Actor/process:      a future authorized mechanism (PURGED), or simply the passage of
                        time under the current policy (DURABLE-AUDIT-ONLY).
  Token usability:     already unusable in either case.
  Audit evidence:      none, if PURGED; unchanged from MINIMIZED, if DURABLE-AUDIT-ONLY
                        (the state every row is in today and for the foreseeable future).
  Later-replay:        if PURGED, a replay attempt resolves as a nonexistent token
                        (rejected/STALE_STATE, indistinguishable from never having
                        existed); if DURABLE-AUDIT-ONLY, unchanged — rejected/STALE_STATE.
```

---

## 11. Confirmation That Both Parameters Were Investigated

```text
QUESTION A (VALIDITY PERIOD): INVESTIGATED — RESOLVED
QUESTION B (RETENTION AND PURGE POLICY): INVESTIGATED — RESOLVED
```

One exact validity duration (15 minutes) was selected — not a range. One exact retention-and-purge policy (indefinite minimized-metadata retention; immediate raw-token redaction; no purge mechanism authorized; future authority named) was selected. No blocker was recorded for either question.

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

```text
TOKEN-LIFECYCLE PARAMETERS RESOLVED — PHASE 1 READINESS MAY PROCEED TO MISSION CONTROL REVIEW
```

Both authorized questions reached a fully evidence-backed, non-blocking resolution: an exact 15-minute, fixed, server-controlled validity period (Question A), and an exact retention/minimization/purge policy — indefinite minimized-metadata retention, immediate raw-token redaction on consumption or expiry, reuse of the already-locked idempotency-key mechanism for rejected-attempt evidence, and no purge mechanism authorized or designed, with the correct future authority named instead (Question B). Every previously resolved element of the `catalog_link_preview_tokens` design (`report1.29.md`/`report1.30.md`) remains unchanged. No Founder decision is required, no Product Truth changed, and no implementation, SQL, migration, schema object, Lovable interaction, or scheduler/cleanup mechanism was created.
