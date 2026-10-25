# SB-P-1.12 — MC-157 Stage 10 Security EIS Refinement Handover and STOP Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — EIS owner
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.26.md` (MC-157)
**Work package:** `SB-P-1.12-WP-STAGE10-SECURITY-EIS-REFINEMENT`
**Status:** `EIS VERSION 0.3 SECURITY REFINEMENT SUBMITTED ON PR #687 — AWAITING MISSION CONTROL STAGE 10 REVIEW — EIS NOT ACCEPTED OR LOCKED.`

## 1. Intake

| Check | Result |
|---|---|
| Canonical `main` | `6ed424ad84b9738bf21a8019509bad996cfe401e` (PR #692) |
| Sources read from `main` | MC-157 record `mission-control/31-stage10-security-eis-refinement-authorization.md`; Security review `specialists/04-stage10-independent-eis-security-review.md` (blob `ddaa405f6d3145249fbcc6e29d88c9aaa229285b`); `communication/live/report1.25.md` (blob `49c4c582e978a25bd45fb1be8ec4237bdb71f6ab`); locked Blueprint; FCTM; Founder Records 04, 05, 06, 07 and 09; the PR #687 EIS |
| PR #687 branch | `mission/SB-P-1.12-stage9-eis-draft` at the expected head `a1beda8c006ab69b28f5354b686c941384cd1e86`, with EIS blob `0ebd7c2b4298a81b467021dfb8a52cf42b8c293d`; same lineage, no drift. `main` has not changed any of the six paths since the branch base |
| Local working copy | Was checked out on `mission/SB-P-1.12-stage10-eis-security-review` (clean); switched to the PR #687 branch. No file on the other branch was touched |
| Reproducibility | The EIS generator reproduced the version 0.2 blob content exactly before refinement |

## 2. Changed paths and blobs

| Path | Blob |
|---|---|
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` (version 0.3) | `28f713581ffea5312f36e3508380c38539b05e90` |
| `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md` (new §12 only) | `aade0dc5bc904631ab098ba1f66051637f5d0241` |
| `communication/missions/SB-P-1.12/README.md` | `c9c3b044338d0a8a8f198e1182963ad779c53651` |
| `communication/missions/SB-P-1.12/decision-log.md` (appended) | `caf833200ba9ea117477e4cd044eb394e02ef9a1` |
| `communication/missions/SB-P-1.12/handover-log.md` (appended, H-40) | `4a0d846bd8e13ccb01a45e6d695a86f3b6179c08` |
| `communication/live/report1.26.md` (new) | This file; its blob, the new head and CI are in the PR handover comment |

- **Locked Blueprint:** `77d52096c020668311b039721a4de9248ddd460e` (unchanged).
- **FCTM:** `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` (unchanged).
- **Also unchanged:** Founder Records, Security reports, Mission Control records, contracts, code, schema, SQL, migrations, provider and production.

## 3. Traceability

| Measure | Before (version 0.2) | After (version 0.3) | Reason |
|---|---|---|---|
| EIS requirements | 80 | 81 | New `EIS-ISO-10`, the cross-cutting `SECURITY DEFINER` invariant (SEC-EIS10-08) |
| Requirement-to-row links | 460 | 463 | `EIS-ISO-10` maps to `BP-§10.1-7`, `BP-§10.1-8` and `21-§7`; no existing mapping changed |
| `IN SCOPE` rows covered | 267 of 267 | 267 of 267 | — |
| Engineering-only requirements | 1 (`EIS-ENV-02`) | 1 | — |
| Behaviour-adding orphans | 0 | 0 | — |

The independent script parsed the finished file. The forward and reverse tables are consistent, the rows are in FCTM order, there are no undefined or duplicate IDs, and no row outside `IN SCOPE` is cited.

## 4. Finding-by-finding closure

| Finding | Corrected sections | Corrected requirements | Test and workstream text | Status | Evidence |
|---|---|---|---|---|---|
| SEC-EIS10-01 Verified principals | §8.1 (principal model table; kernel steps 1–2) | `EIS-KER-02`, `EIS-ID-01`, `EIS-ID-03`, `EIS-AUT-01`, `EIS-SUP-01` | §18.1 new "Verified principals" suite | Corrected | Unique governed `auth_user_id`; unbound participant is data only; automation derives its principal from the rule and grantor, never from `service_role`; one kernel |
| SEC-EIS10-02 Multi-business first run | §13 | `EIS-FRL-02` | — | Corrected | Invitations and memberships shown before automatic creation; intentional additional business allowed, with an independent Owner membership and no carried authority |
| SEC-EIS10-03 Active-Owner invariant | §13 | `EIS-ID-02`, `EIS-FRL-03`, `EIS-FRL-04` | §18.1 "Transfer and Owner invariant" suite | Corrected | Owner ends only in transfer or governed deletion; exactly one Owner through commit; mirror updated in the same transaction; negative tests |
| SEC-EIS10-04 Complete serialization | §10.2; §6 | `EIS-CNF-02`, `EIS-KER-09`, `EIS-FRL-04`, `EIS-AUT-01` | §18.1 revocation suite (every fact type); §21.2 risk | Corrected | Three epoch rows (registry, person, business authority state) in fixed order; every allow-to-deny change takes `FOR UPDATE`; commands and protected reads take `FOR SHARE`; covers non-membership paths and transfer |
| SEC-EIS10-05 Atomic confirmation | §10.1 | `EIS-CNF-01` | §18.1 revocation suite (concurrent consumption) | Corrected | Row-locked single unused-to-consumed transition in the outcome transaction; contenders get a committed replay; replay returns the stored outcome |
| SEC-EIS10-06 Privileged reads | §9.1 inventory (referenced) | `EIS-ISO-04` | §18.1 "Privileged paths" suite | Corrected | Every read, write, claim, lease, bookkeeping and follow-up access is bound, with business and object predicates in the query; protected reads revalidate under EIS-CNF-02 |
| SEC-EIS10-07 Direct-RPC denial durability | §9.3; §11 | `EIS-AUD-02` | §18.1 "Denial audit" suite (direct RPC) | Corrected; resolution of SEC-S7-07 still needs independent testing, as the review requires | Denials are committed outcomes before any write; abort-prone families are server-boundary-only with no `authenticated` `EXECUTE` |
| SEC-EIS10-08 `SECURITY DEFINER` hardening | §9.3 | New `EIS-ISO-10` | §18.1 "Effective access" suite; `EIS-TST-03` | Corrected | Empty `search_path`, schema-qualified references, immediate `PUBLIC`/`anon` revocation (approved anonymous workflows preserved), `NOLOGIN NOINHERIT` owners, no dynamic names, Full Assurance checks |
| SEC-EIS10-09 Stable business identity | §8.1 step 1; §14.2; §14.3 | `EIS-ESC-06` | §18.3 item 8 | Corrected | A non-authorizing tombstone business row remains while retained records or holds survive; the kernel denies a `deleted` business; no reactivation. This changes engineering representation only, not merchant-visible deletion meaning |
| SEC-EIS10-10 `22-§20-2` evidence | §18.3 items 8–10 | `EIS-ESC-07`, `EIS-TST-03` | §18.3 | Corrected | Adds `EIS-ESC-06` verification, `EIS-ESC-08` reconciliation, a post-migration inventory, mixed-class governed deletion, legal-hold and transferred-business tests; production evidence only for production claims. `22-§20-2` stays `BLOCKED` |
| SEC-EIS10-11 SB-P-1.13 consumption | §19.5; §19.1 consumption column | `EIS-DEP-01` | §19.1 WS-A2, WS-D and WS-E rows | Corrected | Requires EIS lock, WS-A1/A2, WS-D and WS-E as consumed, WS-A3 cut-over for every touched family, and Mission Control acceptance; no inferred production enforcement and no parallel authorization |

No finding is left unresolved at design level. All are subject to the Security delta re-review.

## 5. Carried findings and preserved holds

- **SEC-EIS10-12:** the Founder Decision Record 09 correction is preserved. EIS Section 12 is byte-identical to version 0.2; no margin formula and no aggregate-only margin semantics. Carried as an implementation-verification gate.
- **SEC-EIS10-13:** carried as an evidence gate (G-6/T4 effective-access evidence). No design change beyond SEC-EIS10-08.
- **SEC-EIS10-14:** carried as an evidence gate (provider Auth deletion, backup and PITR, legal holds). Sections 15–17 are byte-identical to version 0.2; only the SEC-EIS10-10 legal-hold test was added.
- **Holds:**
  - R-2 CLOSED / SATISFIED.
  - ESC-1 OPEN T8.
  - `22-§20-2` `BLOCKED` / `IN SCOPE`.
  - G-6/T4 `UNVERIFIED`.
  - Legal, privacy and retention validation deferred.

## 6. Stop conditions

None was met:

- no Product Truth, merchant-visible deletion meaning, participant-authentication experience or lifecycle ownership change was needed;
- no FCTM row changed;
- no unrelated architecture changed;
- no branch drift;
- no implementation or environment action.

## 7. Validation

- The Markdown Quality Gate and pre-commit gate passed locally on all six files.
- `git diff --check` is clean.
- The locked Blueprint and FCTM blobs are verified unchanged.
- GitHub Actions results for the new head are recorded in the PR handover comment exactly as reported by GitHub. If a run is missing, the comment says so.

## 8. Stop

Stopping for Mission Control's Stage 10 disposition: no acceptance, no lock, no self-approval, no marking ready and no merge.
