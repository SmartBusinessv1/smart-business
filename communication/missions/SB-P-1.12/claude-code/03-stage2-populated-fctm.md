# SB-P-1.12 — Stage 2 Populated FCTM (CORRECTED — see Correction Note)

**Status:** `POPULATED — MISSION CONTROL RE-REVIEW REQUIRED`. Source 18 §3.2/§6 Stage 2.

**Correction note (2026-09-22).** Mission Control's substantive review of PR #624 at head `4e10dff` ([comment `5774508876`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5774508876)) found this document's row counts did not reconcile (claimed 208; actual counted rows were 202) and that most operative/mixed sections were collapsed into one generic row instead of one row per separately verifiable obligation (named examples: Contract 21 §5's ten permission dimensions, §6's six isolation surfaces, §23's grouped non-goals), and the table was missing explicit build-commitment, commercial-classification, assigned-mission and citation columns. This revision corrects all four findings: every in-scope, mixed or partially-delivered section below is expanded to its separately verifiable obligations from the actual contract text; every acceptance scenario remains its own row; every row now carries seven columns; every total below is a `grep`-counted fact against this file's own row IDs, not a hand-computed estimate — reproduced in §H. Sections whose whole disposition is `ASSIGNED TO LATER MISSION`, `DELEGATED` or `NOT APPLICABLE` keep one row each, which Source 18 §3.2 item 2 explicitly permits ("a section may be a single row only when the whole section has one non-`IN SCOPE` disposition").

**Baseline:** `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22. Contract blob SHAs unchanged from Stage 1/first Stage 2 draft, re-verified.

**Columns:** `Row ID` (per `04-stage2-obligation-inventory.md`'s convention) | `Source pointer` (exact section/obligation, not section-only where a section holds multiple obligations) | `Build commitment` | `Commercial classification` | `Assigned mission` | `Disposition` (Source 18 §3.2 vocabulary) | `Citation / evidence`.

**Build commitment legend:** every row below is `BUILD NOW` (Global Product Completion View, all five contracts) — stated per row as required; no row is `OUT OF BUILD SCOPE`/`BUILD LATER`/`SEPARATE PRODUCT`/`REJECT`.
**Commercial classification legend (per contract header):** `CORE-FDN` = core shared foundation (21); `CORE-ARCH` = core cross-product architecture (22); `ACT` = core activation/conversion (20); `MGR+LDG` = Manager core + role-appropriate Ledger surfaces (17); `MGR/ADDON` = Manager core / Ledger add-on (7).

**Disposition vocabulary:** `IN SCOPE`, `ASSIGNED TO LATER MISSION` (names the mission and citation), `DELEGATED`, `NOT APPLICABLE`, `ESCALATED` (corrected 2026-09-22, MC-11 — first used this round, for 15 Contract 22 §12/§16 items with no Build Plan naming source and not on Build Plan §15's approved unresolved list; see `06-stage2-delta-evidence.md` Part 4 §3 for the full reasoning). Per Source 18 §3.2 item 3, `UNRESOLVED FOUNDER DECISION` means "on the approved unresolved list" — reserved for items Build Plan §15 already names (trial policy, add-on pricing, retention duration, employee KYC, marketplace expansion, third-party underwriting), not for newly-discovered, uncited assignment gaps; `ESCALATED` ("a conflict or proposed change awaiting the Founder," §3.2 item 10) is the correct value for those. No row uses `UNRESOLVED FOUNDER DECISION`. The mission-level Stage 3 trigger status is addressed separately in `06-stage2-delta-evidence.md` Part 4 and is **not** pre-cleared by any row here (Mission Control finding F3) — a row-level `ESCALATED` disposition is not itself a Founder decision; it is a truthful record that no approved source resolves ownership, and it blocks any downstream lock or acceptance that relies on the row until Mission Control brings it to the Founder.

**Expansion methodology (so judgment calls are auditable):** a section is expanded to one row per enumerated item when its text presents a list of genuinely distinct, independently testable things (roles, permission dimensions, denial surfaces, participant types, non-goals, audit fields, confirmation-binding elements, etc.). A section stays one row when its text states a single integrated rule and any bullets are illustrative examples of that one rule, not a list of independently disposable sub-obligations (e.g. Contract 21 §7 "enforce authorization server-side" — the listed mechanisms are alternative means to one end, not separate obligations). Every such single-row judgment is noted explicitly in that row's evidence field as "(single rule)" so Mission Control can contest it.

**Correction note 2 (2026-09-22, MC-06).** Mission Control's re-review ([PR #624 comment `5776468726`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5776468726)) verified the 337-row arithmetic correct (accepted as a correction, not a completeness approval) and raised two further blockers, both corrected in this revision: **(A)** the independent obligation inventory (`04-stage2-obligation-inventory.md`) had derived its counts from this FCTM's own row IDs and then "reconciled" against those same IDs — circular, incapable of catching an omitted obligation; it is rebuilt as a genuine source-first pointer inventory, independent of this file. **(B)** 97 rows carried no disposition-supporting citation (`—`, or only an implementation-state tag like `NEW`/`PARTIAL`, which is not ownership/scope evidence); every row below now carries a real citation, using the legend immediately below for recurring bases so the table stays readable without duplicating prose 97 times, plus one cross-column contradiction (`22-§29-9`, disposition vs. assigned-mission) found and fixed, and the rest of the file scanned for the same pattern (`grep`-checked; only that one instance existed).

**Correction note 3 (2026-09-22, MC-06 second re-review).** Mission Control's second re-review ([PR #624 comment `5776916528`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5776916528)) found the previous cycle's fixes were mechanically correct but source-inventory completeness was not yet verified: **F5** — Contract 21 §23's 7th non-goal ("routine denial = security accusation") was never added as its own row, only found and fixed in round 1's citation-quality pass, not its row-completeness pass. **F6** — the Contract 20 inventory's "§23 scenario 11 is distinct" explanation for its +1 discrepancy was invalid (all 12 scenarios were already counted); the real cause was a section-bundle undercount (15 vs. the actual 16 sections in §3/§5–§15/§17–§20). **F7** — the "0 citation gaps" measure only checked for non-empty cells, not real disposition support; 125 rows carried only a bare `` `NEW` ``/`` `PARTIAL` `` implementation-state tag. The required independent source-first audit (re-reading all five contracts' full text against every already-itemized list and section-bundle count, not just the three items Mission Control named) found two further self-caught omissions of the same class as F5: Contract 21 §10's "other job-specific information" bullet, and Contract 7 §8's "supplier payment state is distinct from goods receipt state" example — both silently absent from any row. It also found the old `20-§22-1` cited content that does not exist anywhere in Contract 20 §22's actual text (confusing it with §23 Scenario 11's content). All are corrected in this revision: see §G below for the verified totals and the obligation inventory's §3–§4 for the two-distinct-quantities (source obligations vs. FCTM representation rows) reconciliation F6 required.

**Correction note 4 (2026-09-22, MC-06 third re-review / MC-09).** Mission Control's third re-review ([PR #624 comment `5778571759`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5778571759)) accepted round 3's arithmetic, named omissions and mechanical citation corrections, and found three further targeted source-to-row gaps, all corrected: **MC-09A** — Contract 17 §18 and §21 were improperly bundled mixed-disposition sections; both exploded to 5 individual rows each (see §D below), with §18's "no cross-business data" and "legitimate-need visibility" items re-examined and reclassified `IN SCOPE` (they restate this mission's own Contract 21 isolation/permission obligations, not dashboard-UI-specific content). **MC-09B** — Contract 7 §8 was never in MC-03's actual named touched-scope list; all 5 of its real items are reclassified `ASSIGNED TO LATER MISSION`, and the genuine Product & Price Master architecture-preservation concern this mission does own is now correctly attributed to `BP-§7-3`/`BP-§7-4` rather than an invented §8 row (see §E below). **MC-09C** — Contract 22 §27's 7 mandatory disclosure items exploded from 1 row to 7 (see §B below). See §G for the full reconciliation.

**Correction note 5 (2026-09-22, MC-06 fourth re-review / MC-10).** Mission Control's fourth re-review ([PR #624 comment `5778960338`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5778960338)) accepted MC-09A/B/C's repairs but found `22-§12` and `22-§16` remained single whole-section `IN SCOPE (default; unresolved)` placeholder rows — impermissible under Source 18 §3.2 item 2, which allows a single row only when the whole section shares one **non**-`IN SCOPE` disposition. **MC-10:** re-reading Contract 22 §12 (Notification Foundation) found 9 separately verifiable items, none independently testable without a notification-sending feature this mission does not build and none with a Build Plan naming source; exploded to 9 rows, all `UNRESOLVED FOUNDER DECISION` (this document's first use of that disposition value). Contract 22 §16 (Location Foundation) has 7 separately verifiable items; one — "reject continuous employee surveillance" — is a genuine, already-approved restatement of Contract 21 §21's own obligation (`21-§21-1`) and stays `IN SCOPE` as a design constraint on this mission's own Permission/Privacy foundation; the other 6 (the shared-primitive rule and 5 per-feature disclosure requirements) have no Build Plan naming source and are not this mission's own build; exploded to 7 rows total (1 `IN SCOPE`, 6 `UNRESOLVED FOUNDER DECISION`). `22-§29-9` (Scenario 9, purpose-limited location) is reconciled: it specifically names attendance/delivery, both already `ASSIGNED` to `SB-P-1.18` (per `17-§9`/`17-§10`), independent of whether §16's own shared-primitive foundation has a named owner — corrected from its prior fail-closed-default `IN SCOPE` to `ASSIGNED TO LATER MISSION` (`SB-P-1.18`). None of these resolutions decide the genuine Founder-level scope question — see `06-stage2-delta-evidence.md` Part 4 §3 for the full T1/T3-candidate framing Mission Control requires. See §G for the full reconciliation.

**Correction note 6 (2026-09-22, MC-06 fifth re-review / MC-11).** Mission Control's fifth re-review ([PR #624 comment `5779330365`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5779330365)) accepted MC-10's obligation enumeration in full but found the 15 rows' disposition value itself was not Source 18 vocabulary-compliant: `UNRESOLVED FOUNDER DECISION` (Source 18 §3.2 item 3) means "on the approved unresolved list," i.e., one of Build Plan §15's nine already-named topics — independently re-verified by reading the Build Plan document directly: neither "Notification" nor "Location" appears anywhere in it. These 15 rows are newly-discovered, previously-uncited assignment gaps, not items on that approved list, so the correct Source 18 §3.2 item 10 treatment is `ESCALATED` ("a conflict or proposed change awaiting the Founder"). All 15 relabeled from `UNRESOLVED FOUNDER DECISION` to `ESCALATED`; `BUILD NOW`/`CORE-ARCH` classification, every source pointer, `22-§16-2`'s `IN SCOPE` status and `22-§29-9`'s `ASSIGNED TO LATER MISSION` status are all unchanged. No approved assignment source was found on recheck of Build Plan §9–§12/§15 for any of the 15 — none is reassigned to an existing mission; all remain pending Founder determination. See §G for the full reconciliation and `06-stage2-delta-evidence.md` Part 4 for the corrected Stage 3 trigger screen.

### Citation legend (referenced by ID in the `Citation / evidence` column; each ID is a real, checkable basis, not a placeholder)

| ID | Basis |
|---|---|
| `L-C21` | Contract 21 is wholly assigned to `SB-P-1.12`; Build Plan §9's mission table lists no other mission against Contract 21 |
| `L-NARR` | Narrative/scene-setting section (Feature Identity, Founder Problem Statement, or Lighthouse Principles) — states product framing or an interpretive principle, not an independently testable requirement; Source 18 §3.2 item 2 permits one row for a non-normative whole section |
| `L-HIST` | "Historical Corrections / Superseded Behavior" section — records what is no longer Product Truth as provenance, not a current obligation |
| `L-PROV` | "Provenance and Hydration Coverage" / "Provenance" section — records sourcing lineage, not a current obligation |
| `L-GATE` | "Completion Gate" section — synthesizes the sections already enumerated above it into an overall completion criterion; not itself a separately verifiable obligation distinct from them |
| `L-REUSE` | "Shared Foundations to Reuse" cross-reference list — points to foundations already carried by their own dedicated rows in Contracts 21/22; not itself a separate obligation |
| `L-DEP` | "Dependencies" section — names contracts this contract depends on for context; not itself an obligation of this contract |
| `L-NG21-n` | Contract 21 §23 non-goal item *n* (the row's own Source pointer states which) — cited to its own section as the source; Source 18 §3.2 item 2 treats a non-goal as a "must not appear" check within its own citing section |
| `L-NG22-n` | Contract 22 §28 non-goal item *n*, same basis as `L-NG21-n` |
| `L-BP7` | Build Plan §7, the Founder decision's own preserve/do-not-do list — this row is drawn from that list directly (see Source pointer) |
| `L-A20` | Build Plan §9 lists Contract 20 under both `SB-P-1.12` and `SB-P-1.19`; this section's content does not appear in `SB-P-1.12`'s own §10.1 required-work-area list and falls within `SB-P-1.19`'s §10.8 required-work-area list as a whole (`06-stage2-delta-evidence.md` Part 4 §2) |
| `L-A17` | Build Plan §9 lists Contract 17 under both `SB-P-1.12` and `SB-P-1.17`; this section's content does not appear in `SB-P-1.12`'s own §10.1 required-work-area list and falls within `SB-P-1.17`'s §10.6 required-work-area list as a whole (`06-stage2-delta-evidence.md` Part 4 §2) |
| `L-A22` | Build Plan §9 lists Contract 22 under `SB-P-1.12` and the named later mission(s); this section's content does not appear in `SB-P-1.12`'s own §10.1 required-work-area list and matches the named mission's own §10.x outcome (`06-stage2-delta-evidence.md` Part 4 §2) |
| `L-A7` | Build Plan §9 row 6 assigns Contract 7 to `SB-P-1.17` ("Manager Operations"); this section is outside the MC-03/MC-04 limited-opening touch points (`03-stage2-populated-fctm.md` §E intro) |
| `L-DUAL` | Two candidate later missions both plausibly apply (the section depends on a foundation not yet built by either); the primary citation names the more directly dependent mission, the secondary is retained as a cross-check, not asserted as a Founder decision between them |
| `L-C22-OWN` | This row sits within the Identity/Permission-Isolation/Confirmation/Audit/Schema-Stability slice of Contract 22 (§5, §6, §13, §14, §20) that this mission's own FCTM disposes `IN SCOPE`, distinguished from the Business-Memory/Conversation/Document/Reminder/Notification/Scheduler/AI-orchestration foundations Build Plan §9 assigns to later missions; Build Plan §10.1 items 2 (identity), 3/5/6 (permission matrix/execution revalidation/isolation) are the closest named anchors, and this section's own already-cited sibling rows (e.g. `22-§5-1`, `22-§6-1`, `22-§13-2`, `22-§14-1`, `22-§20-1`) share the same basis |

---

## A. Contract 21 — Permissions, Business Isolation and Role Authority (wholly assigned to SB-P-1.12)

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 21-§1 | Feature Identity | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 21-§2 | Founder Problem Statement | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 21-§3 | Lighthouse Principles | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — interpretive, implemented through the operative sections | `L-NARR` |
| 21-§4-1 | §4 Core Authority Model — Owner | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW`. Only `businesses.owner_id` exists; no explicit Owner-authority-level record |
| 21-§4-2 | §4 — Manager | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§4-3 | §4 — Employee | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§4-4 | §4 — Supplier | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§4-5 | §4 — Customer | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§4-6 | §4 — Delivery Staff | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§5-1 | §5 Permission Dimensions — authenticated user | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — Supabase auth session exists |
| 21-§5-2 | §5 — business membership | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no membership concept beyond `owner_id` |
| 21-§5-3 | §5 — role | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§5-4 | §5 — explicit delegated capability | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§5-5 | §5 — object/record ownership/scope | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS scopes rows to `owner_id` today |
| 21-§5-6 | §5 — action type (read/create/update/approve/export/admin) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no action-type-differentiated grant exists beyond table-level `authenticated` grants |
| 21-§5-7 | §5 — feature entitlement | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§5-8 | §5 — channel/context | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — only one channel (web app) exists today |
| 21-§5-9 | §5 — temporary/purpose-limited grant | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§5-10 | §5 — current account/subscription/security state | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no subscription/entitlement schema exists |
| 21-§6-1 | §6 Business Isolation — cross-business reads denied | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED (owner-only) | `PARTIAL` — owner-scoped RLS `SELECT` policies exist |
| 21-§6-2 | §6 — cross-business writes denied | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED (owner-only) | `PARTIAL` — owner-scoped RLS `INSERT`/`UPDATE`/`DELETE` policies exist |
| 21-§6-3 | §6 — cross-business conversation context denied | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no conversation feature exists yet |
| 21-§6-4 | §6 — cross-business file/document access denied | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `catalog_import_batches`/`catalog_link_preview_tokens` RLS is owner-scoped |
| 21-§6-5 | §6 — cross-business exports denied | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no export feature exists |
| 21-§6-6 | §6 — cross-business integration mapping denied | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no integration layer exists |
| 21-§6-7 | §6 — client-provided `business_id` never trusted alone | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — current RLS derives scope server-side from `auth.uid()`, not client input |
| 21-§7 | Server-side Authorization (single rule: enforce at server/DB layer, UI secondary) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS is the live enforcement layer; `src/routes/_authenticated/route.tsx` adds only a session check, not itself an authorization decision |
| 21-§8 | Conversation/AI Permission Boundary (single rule: one model across channels, NL cannot widen access) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no conversational/AI intake exists at this baseline |
| 21-§9 | Ask CFO / Owner Intelligence boundary (single rule) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — Ask CFO itself is `SB-P-1.15`'s build; this mission owns the boundary rule it must obey |
| 21-§10-1 | §10 Employee Self-service — own attendance | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — attendance feature is `SB-P-1.18`'s; permission mechanics are this mission's |
| 21-§10-2 | §10 — own correction requests | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§10-3 | §10 — own leave/request status | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§10-4 | §10 — assigned tasks/orders/deliveries | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§10-5 | §10 — other job-specific information (corrected 2026-09-22, MC-08: omitted from the original 5-row build — the source lists this as its own 5th self-service bullet, distinct from the 4 items above and from the closing non-exposure rule) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§10-6 | §10 — self-service must not expose unrelated staff/Owner intelligence | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§11-1 | §11 — scoped creation preserves actor identity | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — `transactions.creator_id` exists but is not role-gated beyond `owner_id` |
| 21-§11-2 | §11 — create-permission ≠ read-all/edit-all/export/analytics (grouped negative) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` — L-C21 |
| 21-§12-1 | §12 Delegated Automation — rule still enabled check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no automation engine exists |
| 21-§12-2 | §12 — actor/business scope check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§12-3 | §12 — exact target/action/limits check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§12-4 | §12 — current entitlement/state check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§12-5 | §12 — no revocation/permission change since grant | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§13-1 | §13 Participation — Supplier | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§13-2 | §13 — Customer | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§13-3 | §13 — Delivery Staff | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§14-1 | §14 Support Access — legitimate purpose requirement | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§14-2 | §14 — consent/authorization process | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§14-3 | §14 — minimum module/data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§14-4 | §14 — time/purpose bounded | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§14-5 | §14 — privileged actor identity | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§14-6 | §14 — audit | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED (general audit precedent, not this specific case) | `PARTIAL` — `catalog_audit_events` precedent |
| 21-§14-7 | §14 — revocation when resolved | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§15-1 | §15 Authn vs Authz — session alone ≠ business membership | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§15-2 | §15 — session alone ≠ Owner role | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§15-3 | §15 — session alone ≠ cross-business access | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS already denies this for the owner-scoped case |
| 21-§15-4 | §15 — session alone ≠ feature entitlement | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§15-5 | §15 — session alone ≠ admin privileges | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§16-1 | §16 Entitlements — role AND entitlement both required jointly | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no entitlement schema exists |
| 21-§16-2 | §16 — no dynamic schema create/drop for entitlement state | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` — L-C21 |
| 21-§17 | Permission Changes and Runtime Revalidation (single rule — Founder Scenario B) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§18-1 | §18 Confirmation Binding — exact actor | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§18-2 | §18 — exact business | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§18-3 | §18 — exact action | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§18-4 | §18 — exact target/object | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§18-5 | §18 — exact reviewed state/value | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§18-6 | §18 — expiry/version as appropriate | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§19-1 | §19 Auditability — grant/revoke event | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no permission-event audit table exists |
| 21-§19-2 | §19 — grantor/actor | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§19-3 | §19 — role/capability | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§19-4 | §19 — scope | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§19-5 | §19 — timestamp | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED (general pattern) | `PARTIAL` — `created_at`/`updated_at` pattern exists broadly |
| 21-§19-6 | §19 — resulting action/denial where security-sensitive | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§19-7 | §19 — temporary elevated access | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§19-8 | §19 — automation authority provenance | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§20-1 | §20 Denial Behavior — no data leak while explaining | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§20-2 | §20 — say what user can do next where useful | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§20-3 | §20 — preserve normal operation elsewhere | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§20-4 | §20 — avoid accusation/shame | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§20-5 | §20 — escalate only if security/abuse criteria actually met | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§21-1 | §21 Privacy/Dignity — no continuous employee surveillance | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` — L-C21 |
| 21-§21-2 | §21 — no hidden staff scoring/accusation | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` — L-C21 |
| 21-§21-3 | §21 — no routine broad admin visibility into merchant data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` — L-C21 |
| 21-§21-4 | §21 — no cross-business analytics leakage | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` — L-C21 |
| 21-§21-5 | §21 — permission design supports useful work, not punishment | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `NEW` — L-C21 |
| 21-§22 | Shared Foundation Reuse (single rule — architectural mandate) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `L-C21` |
| 21-§23-1 | §23 Non-goals — UI-only enforcement rejected | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG21-1` |
| 21-§23-2 | §23 — Manager ≠ automatic Owner-equivalent | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG21-2` |
| 21-§23-3 | §23 — Employee ≠ permanent useless write-only account | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG21-3` |
| 21-§23-4 | §23 — support ticket ≠ unrestricted access | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG21-4` |
| 21-§23-5 | §23 — AI/tool ≠ authority | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG21-5` |
| 21-§23-6 | §23 — subscription state ≠ permission to destroy schema | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG21-6` |
| 21-§23-7 | §23 — routine denial ≠ security accusation (added 2026-09-22, Mission Control finding F5: the source's 7th non-goal bullet was omitted from the original 6-row build) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG21-7` |
| 21-§24-1 | Acceptance scenario 1: Owner accesses own-business data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — owner-scoped RLS |
| 21-§24-2 | Acceptance scenario 2: cross-business query/write denied server-side | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — L-C21 |
| 21-§24-3 | Acceptance scenario 3: Manager sees only delegated capabilities | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — Founder Scenario A |
| 21-§24-4 | Acceptance scenario 4: Employee adds approved transaction, no Owner analytics | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§24-5 | Acceptance scenario 5: Employee sees own attendance if permitted | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§24-6 | Acceptance scenario 6: Employee cannot gain Ask CFO via NL prompt | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§24-7 | Acceptance scenario 7: external participant sees only own bounded data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§24-8 | Acceptance scenario 8: permission revoked after preview blocks execution | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — Founder Scenario B |
| 21-§24-9 | Acceptance scenario 9: entitlement plus role both enforced | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§24-10 | Acceptance scenario 10: temporary support access scoped/audited/revoked | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§24-11 | Acceptance scenario 11: standing automation cannot exceed delegated scope | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§24-12 | Acceptance scenario 12: normal denial respectful, no data leak | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C21 |
| 21-§25 | Historical Corrections / Superseded Behavior | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — historical provenance | `L-HIST` |
| 21-§26 | Provenance and Hydration Coverage | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — provenance narrative | `L-PROV` |
| 21-§27 | Completion Gate | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — synthesis of the sections above | `L-GATE` |

**Contract 21: 105 rows** (counted via `grep -c "^| 21-§"`, re-verified in §H).

---

## B. Contract 22 — Shared Product Foundations (split across SB-P-1.12/1.13/1.14; Build Plan §9 lists Contract 22 under all three)

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 22-§1 | Feature Identity | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 22-§2 | Founder Problem Statement | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 22-§3 | Lighthouse Principles | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — interpretive | `L-NARR` |
| 22-§4 | Business Memory Foundation (whole section, one non-in-scope disposition) | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | Build Plan §9 row 3 ("Business Memory, Documents & Durable Media"); §10.3 outcome |
| 22-§5-1 | §5 Identity Foundation — business | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `businesses` table exists |
| 22-§5-2 | §5 — Owner | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `owner_id` exists |
| 22-§5-3 | §5 — Manager | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§5-4 | §5 — Employee | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§5-5 | §5 — customer | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§5-6 | §5 — supplier | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§5-7 | §5 — delivery staff | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§5-8 | §5 — product/catalog item | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `catalog_products` exists (SB-P-1.11) |
| 22-§5-9 | §5 — external integration/provider references | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§6-1 | §6 Permission/Isolation Foundation — UI/workspace | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — session gate exists, no role gate |
| 22-§6-2 | §6 — WhatsApp | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED (design constraint; WhatsApp intake itself is `SB-P-1.20`) | `NEW` — L-C22-OWN |
| 22-§6-3 | §6 — Conversation Workspace | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED (design constraint; Workspace itself is `SB-P-1.13`) | `NEW` — L-C22-OWN |
| 22-§6-4 | §6 — server functions/APIs | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§6-5 | §6 — database/RLS | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS exists, owner-only |
| 22-§6-6 | §6 — background jobs | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no background job system exists |
| 22-§6-7 | §6 — integrations | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§6-8 | §6 — exports/files | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§6-9 | §6 — AI tools | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§6-10 | §6 — feature-specific permissions may extend but not bypass the model | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 22 §6's own closing rule |
| 22-§7 | Conversation / Intent-Action Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | Build Plan §9 row 2; §10.2 "shared AI/tool/confirmation/action kernel" |
| 22-§8 | Human Language Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | §10.2 names "Human Language" |
| 22-§9 | Universal Document Intelligence Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | §10.3 names "UDI" |
| 22-§10 | Document / Receipt Memory Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | §10.3 names "Receipt Cabinet, governed document/media storage" |
| 22-§11 | Reminder / Delegated Automation Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.15` | ASSIGNED TO LATER MISSION | Build Plan §9 row 4; §10.4 "Reminder, Daily Intelligence" |
| 22-§12-1 | §12 Notification Foundation — recipient identity/role (corrected 2026-09-22, MC-11: relabeled from `UNRESOLVED FOUNDER DECISION` — Source 18 §3.2 item 3 reserves that value for items already on Build Plan §15's approved unresolved list, which does not name Notification/Location foundation ownership; the correct treatment for a newly-discovered, unassigned obligation is `ESCALATED` per §3.2 item 10) | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — proposed mission assignment awaiting Founder decision (Source 18 §3.2 items 3/5/10); Build Plan §9–§12 and §15 both checked directly, neither names an owning mission for this obligation; not silently absorbed as SB-P-1.12 work** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-2 | §12 — language | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`; also overlaps Contract 22 §8 Human Language Foundation, already assigned to `SB-P-1.13` (`22-§8`), so any notification-specific instance follows whichever mission actually builds notification delivery, not `SB-P-1.13` by default either** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-3 | §12 — channel preference/availability | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-4 | §12 — template/provider requirements | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-5 | §12 — delivery/retry state | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-6 | §12 — duplicate suppression | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-7 | §12 — privacy | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-8 | §12 — link to originating business event | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§12-9 | §12 — notification delivery separate from business-event completion | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§12-1`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§13-1 | §13 Confirmation/Clarification Foundation — clarify before consequential write | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§13-2 | §13 — preview material/uncertain document import | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — Catalog import preview exists (SB-P-1.11), domain-specific |
| 22-§13-3 | §13 — bind confirmation to exact actor/action/state/object | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§13-4 | §13 — revalidate permission/state at execution | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§13-5 | §13 — generic/stale `Yes` is not unlimited authority | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 22 §13's own closing rule; overlaps Founder Scenario B |
| 22-§14-1 | §14 Audit/Human Context — raw/original event | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `catalog_audit_events` precedent |
| 22-§14-2 | §14 — actor | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — L-C22-OWN |
| 22-§14-3 | §14 — source/channel | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§14-4 | §14 — interpretation | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§14-5 | §14 — correction | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `transaction_correction_events` precedent |
| 22-§14-6 | §14 — authorized human context | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§14-7 | §14 — confirmation/approval | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§14-8 | §14 — resulting action | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — L-C22-OWN |
| 22-§14-9 | §14 — timestamps | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `created_at`/`updated_at` pattern exists broadly |
| 22-§15 | Idempotency / Duplicate Protection (single rule; domains listed are illustrative) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `catalog_write_idempotency_keys`, `inventory_movement_idempotency_keys` (SB-P-1.10/1.11, those domains only) |
| 22-§16-1 | §16 Location Foundation — shared purpose-limited primitive (use one primitive rather than independent tracking systems) (corrected 2026-09-22, MC-11: relabeled from `UNRESOLVED FOUNDER DECISION` — not on Build Plan §15's approved unresolved list; the correct Source 18 §3.2 item 10 treatment for a newly-discovered, unassigned obligation is `ESCALATED`) | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — proposed mission assignment awaiting Founder decision (Source 18 §3.2 items 3/5/10); no Build Plan §9–12 naming source for the foundation itself; likely consumers are attendance/delivery under `SB-P-1.18` (see `22-§29-9`), but that does not name an owner for the shared primitive's own construction; not silently absorbed as SB-P-1.12 work** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§16-2 | §16 — default continuous employee surveillance is rejected | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check, design constraint | Ties directly to `21-§21-1` ("no continuous employee surveillance through permissions tooling"), Contract 21's own already-approved Privacy/Dignity obligation; this mission's Permission Engine must not create any hook enabling continuous location surveillance, independent of whether any location-consuming feature is ever built — no new location-tracking feature implied |
| 22-§16-3 | §16 — each feature must define why location is needed | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — a disclosure obligation imposed on whichever mission builds the first location-consuming feature; no Build Plan naming source; not this mission's own build; proposed assignment awaiting Founder decision (Source 18 §3.2 items 3/5/10)** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§16-4 | §16 — each feature must define who may see it | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§16-3`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§16-5 | §16 — each feature must define when it is captured | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§16-3`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§16-6 | §16 — each feature must define how long it is retained | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§16-3`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§16-7 | §16 — each feature must define when access ends | BUILD NOW | CORE-ARCH | PENDING FOUNDER ASSIGNMENT | **ESCALATED — same basis as `22-§16-3`** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§17 | Integration/Extension Foundation (single rule; extension points are future work, not this mission's build) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint on this mission's own deliverable | No Build Plan section assigns "Integration/Extension Foundation" to a later mission; touches Product & Price Master's POS/Orders boundary (`BP-§7-3`) |
| 22-§18 | Scheduler / Background Job Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.15` | ASSIGNED TO LATER MISSION | §10.4 names Daily Intelligence as this section's primary use case |
| 22-§19 | Error and Narrow-failure Foundation (single rule) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | No later-mission naming source found; design constraint on whatever this mission itself builds (WS-A/WS-B) |
| 22-§20-1 | §20 Schema Stability — avoid destructive/dynamic schema create/delete on subscription state | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 22 §20's own rule; directly touches Product & Price Master reconciliation (`BP-§7-4`) |
| 22-§20-2 | §20 — keep historical records durable | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — append-only correction-event pattern exists |
| 22-§20-3 | §20 — use entitlements/permissions to control capability, not schema changes | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — L-C22-OWN |
| 22-§20-4 | §20 — evolve schema through governed migrations | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — existing migration discipline (`docs/migration/README.md`) |
| 22-§21 | Performance Foundation (single rule) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | No later-mission naming source found; design constraint on this mission's own deliverable |
| 22-§22 | Platform Quality / Testability (single rule) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | No later-mission naming source found; design constraint on this mission's own deliverable |
| 22-§23-1 | §23 Privacy/Data Ownership — merchant owns data | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §23 item 1; directly ties to Contract 21's authority model (this mission's own contract) |
| 22-§23-2 | §23 — no cross-business leakage | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 22 §23 item 2; overlaps `21-§6` |
| 22-§23-3 | §23 — no routine platform access to merchant private intelligence | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 22 §23 item 3; overlaps `21-§14` |
| 22-§23-4 | §23 — support access purpose-limited | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — ties to 21-§14 | Contract 22 §23 item 4 |
| 22-§23-5 | §23 — staff data role/purpose limited | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §23 item 5; overlaps `21-§21` |
| 22-§23-6 | §23 — individual merchant data must not be sold | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 22 §23 item 6 |
| 22-§23-7 | §23 — aggregate insight must be privacy-respecting/governed | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §23 item 7 |
| 22-§24 | AI Authority Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | AI kernel's own behaviour limits; SB-P-1.12 supplies the Permission Engine it must respect (21-§8/§9) |
| 22-§25 | AI Orchestration / OpenAI Intelligence Foundation | BUILD NOW | CORE-ARCH | `SB-P-1.13` | DELEGATED | Names Contract 24 explicitly |
| 22-§26 | Dedicated Channel Adapter Contracts | BUILD NOW | CORE-ARCH | `SB-P-1.20` | DELEGATED | Names Contract 23 explicitly |
| 22-§27-1 | §27 Dependency Rule — state which mature feature(s) it advances (corrected 2026-09-22, MC-09C: unbundled from a single "process obligation" row — the 7 items are mandatory, individually-required disclosure entries, not alternative means to one end) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §27 item 1; this Truth Pack is partial compliance evidence |
| 22-§27-2 | §27 — state which shared foundations it reuses | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §27 item 2; this Truth Pack is partial compliance evidence |
| 22-§27-3 | §27 — state whether it consumes AI orchestration and/or a channel adapter | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §27 item 3; this Truth Pack is partial compliance evidence |
| 22-§27-4 | §27 — state what already exists and must not be duplicated | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §27 item 4; this Truth Pack is partial compliance evidence |
| 22-§27-5 | §27 — state what remains committed but outside current mission | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §27 item 5; this Truth Pack is partial compliance evidence |
| 22-§27-6 | §27 — state exact blockers/dependencies | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §27 item 6; this Truth Pack is partial compliance evidence |
| 22-§27-7 | §27 — state required evidence for acceptance | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | Contract 22 §27 item 7; this Truth Pack is partial compliance evidence |
| 22-§28-1 | §28 Non-goals — no duplicate Business Memory by channel | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-1` |
| 22-§28-2 | §28 — no duplicate Permission Engine per feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-2` |
| 22-§28-3 | §28 — no duplicate AI brain/orchestrator per channel/feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-3` |
| 22-§28-4 | §28 — no duplicate reminder scheduler per feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-4` |
| 22-§28-5 | §28 — no duplicate OCR/document pipeline | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-5` |
| 22-§28-6 | §28 — no duplicate customer/supplier identity silos | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-6` |
| 22-§28-7 | §28 — no continuous employee GPS foundation | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-7` |
| 22-§28-8 | §28 — no subscription-driven create/drop of core domain tables | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-8` |
| 22-§28-9 | §28 — AI/tool capability ≠ authority | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-9` |
| 22-§28-10 | §28 — no custom client-specific core forks | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-NG22-10` |
| 22-§29-1 | Scenario 1: WhatsApp/Workspace share one Business Memory/action truth | BUILD NOW | CORE-ARCH | `SB-P-1.13`/`SB-P-1.20` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `22-§7`/`22-§4`; same basis as those rows |
| 22-§29-2 | Scenario 2: one permission-aware AI orchestration path | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `22-§7`; same basis |
| 22-§29-3 | Scenario 3: cross-business access blocked consistently across channels/services/AI tools | BUILD NOW | CORE-ARCH | SB-P-1.12 (services slice) | IN SCOPE — full channel-inclusive proof completes cumulatively in later missions | `NEW` — acceptance test of this mission's own `21-§6`/`22-§6` isolation obligations, services-layer slice only; channel/AI-tool slices complete cumulatively via `22-§7`/`22-§8`'s later-mission builds |
| 22-§29-4 | Scenario 4: multiple features reuse one Reminder Engine | BUILD NOW | CORE-ARCH | `SB-P-1.15` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `22-§11`; same basis |
| 22-§29-5 | Scenario 5: multiple document types reuse one UDI pipeline | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | `PARTIAL` precedent, see 22-§9 |
| 22-§29-6 | Scenario 6: customer/supplier identity not duplicated by channel/feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | `NEW` — acceptance test of `22-§5`; same basis (L-C22-OWN) |
| 22-§29-7 | Scenario 7: consequential confirmation exact and revalidated | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | `NEW` — Founder Scenario B |
| 22-§29-8 | Scenario 8: duplicate external/retry events idempotent | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL`, see 22-§15 |
| 22-§29-9 | Scenario 9: purpose-limited location | BUILD NOW | CORE-ARCH | `SB-P-1.18` | ASSIGNED TO LATER MISSION (corrected 2026-09-22, MC-10: reconciled to §16's itemized disposition — this scenario names attendance and delivery specifically, both of which have an established Build Plan owner independent of whether §16's own shared-primitive foundation does) | Scenario text names attendance/delivery, already `ASSIGNED` to `SB-P-1.18` at `17-§9`/`17-§10`; does not resolve `22-§16-1`'s own foundation-ownership question, left open at that row separately |
| 22-§29-10 | Scenario 10: feature/provider failure narrowly contained | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | Mirrors `22-§19`'s design constraint at the scenario level |
| 22-§29-11 | Scenario 11: subscription changes don't destroy core schema | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — ties to 21-§16, 22-§20 | Mirrors `21-§16-2`/`22-§20-1` at the scenario level |
| 22-§29-12 | Scenario 12: audit retains raw evidence + human context | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — ties to 21-§19, 22-§14 | `PARTIAL` — acceptance test of `21-§19`/`22-§14`; same basis as those rows |
| 22-§29-13 | Scenario 13: OpenAI/model outage doesn't corrupt state | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `22-§7`'s AI orchestration boundary; same basis |
| 22-§29-14 | Scenario 14: future docs identify reused foundations first | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — process obligation, see 22-§27 | Mirrors `22-§27` at the scenario level; this Truth Pack itself is partial compliance evidence |
| 22-§30 | Historical Corrections / Superseded Behavior | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE | `L-HIST` |
| 22-§31 | Provenance and Hydration Coverage | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE | `L-PROV` |
| 22-§32 | Completion Gate | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — synthesis | `L-GATE` |

**Contract 22: 92 rows** (counted via `grep -c "^| 22-§"`).

---

## C. Contract 20 — Onboarding and First Experience (split across SB-P-1.12/1.19; Build Plan §9 lists Contract 20 under both)

Only §16 (Permission / Role Setup) matches SB-P-1.12's own required-work-area language; every other substantive section matches `SB-P-1.19`'s stated required-work-areas (§10.8) almost one-to-one, so those stay single section-level rows (Source 18 §3.2 item 2).

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 20-§1 | Feature Identity | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 20-§2 | Founder Problem Statement | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 20-§3 | Approved Route and Domain | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "`/start` onboarding" |
| 20-§4 | Lighthouse Principles | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — interpretive | `L-NARR` |
| 20-§5 | First-stage Discovery | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "progressive discovery" |
| 20-§6 | Historical Funnel Evolution — Reconciliation | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§7 | Product Recommendation / Trust Result | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "understandable product recommendation" |
| 20-§8 | Business Identity Setup | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "Business Identity continuity" |
| 20-§9 | Existing Data Import | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "UDI-assisted import" |
| 20-§10 | Activation / Commercial Step (incl. unresolved trial policy) | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "subscription/payment/account lifecycle... trial/no-trial configurability" |
| 20-§11 | First Practical Win | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "first practical win" |
| 20-§12 | First 24-hour Experience | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§13 | Conversation-first Onboarding | BUILD NOW | ACT | `SB-P-1.19`/`SB-P-1.13` | ASSIGNED TO LATER MISSION | needs Conversation Workspace |
| 20-§14 | Human Language | BUILD NOW | ACT | `SB-P-1.13` (primary build) | ASSIGNED TO LATER MISSION | Build Plan §10.2 names "Human Language" as `SB-P-1.13`'s own build item; Contract 20 §21 itself lists "Human Language Layer" as a foundation `SB-P-1.19`'s onboarding reuses, not builds |
| 20-§15 | WhatsApp and Conversation Workspace | BUILD NOW | ACT | `SB-P-1.13` (Workspace build)/`SB-P-1.20` (WhatsApp adapter build) | ASSIGNED TO LATER MISSION | Build Plan §10.2 names Conversation Workspace as `SB-P-1.13`'s own build item; §10.9 names the WhatsApp Cloud API adapter as `SB-P-1.20`'s; Contract 20 §21 lists "Conversation Workspace/WhatsApp" as a reused foundation for `SB-P-1.19`'s onboarding, not a build item |
| 20-§16-1 | §16 Permission/Role Setup — Owner is initial highest authority | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — same basis as `20-§16-3` |
| 20-§16-2 | §16 — staff/manager setup uses explicit invitations/permission assignment | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no staff-invitation flow exists |
| 20-§16-3 | §16 — do not grant Manager/Employee Owner intelligence by default | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 20 §16's own rule; the only Contract 20 section within Build Plan §10.1's required-work-area list |
| 20-§16-4 | §16 — role setup simple enough not to block Owner's first win | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — design constraint | Contract 20 §16's own rule, same basis as `20-§16-3` |
| 20-§17 | Support During Onboarding | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "FAQ-first → AI fallback → human escalation" |
| 20-§18 | Error and Exception Behavior | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "recoverable lifecycle/support/platform failures" |
| 20-§19 | Privacy and Trust (incl. employee-KYC note) | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | non-critical-path unresolved item (Build Plan §15 item 7) |
| 20-§20 | Performance and Simplicity | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§21 | Shared Foundations to Reuse | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — cross-reference list, not itself an obligation | `L-REUSE` |
| 20-§22-1 | §22 Explicit Non-goals — `/survey` as current route (corrected 2026-09-22, MC-08: the previous `20-§22-1` cited content — "staff setup never default-grants Owner intelligence" — that does not appear anywhere in §22's actual text; that phrase is §23 Scenario 11's content, already correctly captured at `20-§23-11`. §22's real 7 bullets are re-enumerated here) | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§22-2 | §22 — historical Typeform/Fillout/Make.com as permanent architecture | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§22-3 | §22 — fear-based or misleading ROI conversion tactics | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§22-4 | §22 — fixed old domain references | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§22-5 | §22 — hardcoded trial assumption before Founder decision | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§22-6 | §22 — forcing all merchant setup before any practical win | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§22-7 | §22 — treating historical 250-merchant cap as current default policy without reactivation | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `L-A20` |
| 20-§23-1 | Scenario 1: reach `/start`, language choice | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `PARTIAL` — acceptance test of `20-§3`/`20-§5` |
| 20-§23-2 | Scenario 2: discovery → recommendation | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `20-§7` |
| 20-§23-3 | Scenario 3: identity created once, persists cross-channel | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `PARTIAL` — acceptance test of `20-§8` |
| 20-§23-4 | Scenario 4: CSV import uses preview/confirm | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `PARTIAL` — Catalog precedent |
| 20-§23-5 | Scenario 5: first text/voice transaction confirmation | BUILD NOW | ACT | `SB-P-1.19`/`SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `20-§11` |
| 20-§23-6 | Scenario 6: resume interrupted onboarding | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `20-§18` |
| 20-§23-7 | Scenario 7: payment failure doesn't destroy setup | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `20-§10`/`20-§18` |
| 20-§23-8 | Scenario 8: trial behavior driven by explicit policy | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | blocked on unresolved trial-policy Founder decision, non-critical-path for SB-P-1.12 |
| 20-§23-9 | Scenario 9: first-day real workflow value | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `20-§11` |
| 20-§23-10 | Scenario 10: current DI times used, not historical | BUILD NOW | ACT | `SB-P-1.19`/`SB-P-1.15` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `20-§12`; Daily Intelligence timing owned by `SB-P-1.15` |
| 20-§23-11 | Scenario 11: staff setup never grants Owner intelligence by default | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE | `NEW` — direct application of 20-§16-3 |
| 20-§23-12 | Scenario 12: support escalation preserves continuity | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `20-§17` |
| 20-§24 | Historical Corrections / Superseded Behavior | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE | `L-HIST` |
| 20-§25 | Provenance and Hydration Coverage | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE | `L-PROV` |
| 20-§26 | Unresolved Founder Questions (trial policy) | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE as a row — carried in `06-stage2-delta-evidence.md` Part 4, not disposed here | Build Plan §15 item 6 / Contract 20 §26 itself; non-critical-path for SB-P-1.12 |
| 20-§27 | Completion Gate | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — synthesis | `L-GATE` |

**Contract 20: 41 rows** (counted via `grep -c "^| 20-§"`).

---

## D. Contract 17 — Operational Dashboard and Manager Workspace (split across SB-P-1.12/1.17; Build Plan §9 lists Contract 17 under both)

Only §13 (Users and Permissions) and §14 (Permission Enforcement) match SB-P-1.12's remit; the Manager-operational-depth sections match `SB-P-1.17`'s stated required-work-areas (§10.6) closely and stay single section-level rows.

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 17-§1 | Feature Identity | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 17-§2 | Founder Problem Statement | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 17-§3 | Lighthouse Principles | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — interpretive | `L-NARR` |
| 17-§4 | Workspace Layers | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | §10.6 "mature Manager workspace" |
| 17-§5 | Conversation Workspace Placement | BUILD NOW | MGR+LDG | `SB-P-1.13` | ASSIGNED TO LATER MISSION | Conversation Workspace doesn't exist yet |
| 17-§6 | Financial / Business Summary | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§7 | Inventory / Supplier / Reorder Views | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | names Contract 7 directly; §10.6 "supplier identities," "reorder intelligence" |
| 17-§8 | POS / Counter / Closing Cash Views | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | §10.6 "standard POS bridge adapters," "closing-cash comparison" |
| 17-§9 | Staff / HR Views | BUILD NOW | MGR+LDG | `SB-P-1.18` | ASSIGNED TO LATER MISSION | Staff/HR add-on, Build Plan §9 row 7 |
| 17-§10 | Order & Delivery Views | BUILD NOW | MGR+LDG | `SB-P-1.18` | ASSIGNED TO LATER MISSION | Smart Order & Delivery add-on |
| 17-§11 | Ask CFO and Daily Intelligence | BUILD NOW | MGR+LDG | `SB-P-1.15` | ASSIGNED TO LATER MISSION | Build Plan §9 row 4 (`SB-P-1.15` "Reminder, Daily Intelligence & Ask CFO"); not in `SB-P-1.12`'s §10.1 |
| 17-§12 | Documents and Receipt Cabinet | BUILD NOW | MGR+LDG | `SB-P-1.14` | ASSIGNED TO LATER MISSION | Build Plan §9 row 3 (`SB-P-1.14` "Business Memory, Documents & Durable Media"); not in `SB-P-1.12`'s §10.1 |
| 17-§13-1 | §13 Users and Permissions — Owner | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — same basis as `17-§13-4` |
| 17-§13-2 | §13 — Manager | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — same basis as `17-§13-4` |
| 17-§13-3 | §13 — Employee | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — same basis as `17-§13-4` |
| 17-§13-4 | §13 — Customer/Supplier/Delivery Staff (no general dashboard access) | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 17 §13's own rule; §13/§14 are the only Contract 17 sections within Build Plan §10.1's required-work-area list |
| 17-§14-1 | §14 Permission Enforcement — role-based UI is usability layer, not security boundary | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — design constraint | Contract 17 §14's own opening rule; same basis as `17-§13-4` |
| 17-§14-2 | §14 — every protected read/write enforces authenticated user | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — session gate exists |
| 17-§14-3 | §14 — ...enforces business isolation | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — owner-scoped RLS |
| 17-§14-4 | §14 — ...enforces current role/permission | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — same basis as `17-§14-1` |
| 17-§14-5 | §14 — ...enforces feature entitlement where relevant | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — same basis as `17-§14-1` |
| 17-§14-6 | §14 — ...enforces object/action scope | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — same basis as `17-§14-1` |
| 17-§14-7 | §14 — changing a UI component must never widen backend access | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 17 §14's own closing rule |
| 17-§15 | Personalization and Navigation | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | adapts to enabled add-ons/role depth this mission does not yet build |
| 17-§16-1 | Stable UI/Testability — for the §13/§14 permission surface this mission itself adds | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — design constraint | Contract 17 §16 applied to the `17-§13-4`/`17-§14-*` surface this mission builds |
| 17-§16-2 | Stable UI/Testability — for the remaining Manager-depth dashboard surface | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§17 | Error and Exception Behavior | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§18-1 | §18 Privacy/Trust — no cross-business data (corrected 2026-09-22, MC-09A: unbundled from the "remainder" row — this item restates Contract 21 §6's own business-isolation obligation, not a dashboard-UI-specific concern) | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check, overlaps 21-§6 | Contract 17 §18 item 1; within Build Plan §10.1's permission scope, same isolation basis as `21-§6-*` |
| 17-§18-2 | §18 — no staff access to Owner intelligence by default | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check, overlaps 21-§21 | Contract 17 §18 item 2; within Build Plan §10.1's permission scope even though the rest of §18 is dashboard-surface-specific |
| 17-§18-3 | §18 — no routine platform/admin merchant-data browsing through dashboard shortcuts | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | dashboard-surface-specific ("through dashboard shortcuts"), `SB-P-1.17`'s own build |
| 17-§18-4 | §18 — sensitive information surfaced only to roles with legitimate need (corrected 2026-09-22, MC-09A: unbundled from the "remainder" row — this is the Permission Engine's own access-scoping principle, not a dashboard-UI-specific concern) | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check, overlaps 21-§5/21-§14 | Contract 17 §18 item 4; within Build Plan §10.1's permission scope, same basis as `21-§5-*`/`21-§14-*` |
| 17-§18-5 | §18 — dashboard activity/analytics must not become hidden employee surveillance | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | dashboard-surface-specific ("dashboard activity/analytics"), `SB-P-1.17`'s own build |
| 17-§19 | Performance Expectations | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§20 | Shared Foundations to Reuse | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — cross-reference list | `L-REUSE` |
| 17-§21-1 | §21 Non-goals — fixed historic four-tab layout as immutable Product Truth (corrected 2026-09-22, MC-09A: unbundled from the "remainder" row — individually enumerated, dashboard-experience-specific, stays with `SB-P-1.17`) | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§21-2 | §21 — ERP-form-first experience | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§21-3 | §21 — dashboard-only duplicate business logic | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§21-4 | §21 — no employee visibility into Owner-wide financial intelligence by convenience | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | Contract 17 §21 item 4; overlaps `21-§21`/`17-§18-2` |
| 17-§21-5 | §21 — hiding Conversation Workspace as optional fallback only | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17` |
| 17-§22-1 | Scenario 1: Owner sees accurate role-authorized summary | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | needs 17-§6 |
| 17-§22-2 | Scenario 2: Manager sees delegated ops, not non-delegated Owner intelligence | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE | `NEW` — direct application of Founder Scenario A |
| 17-§22-3 | Scenario 3: Employee limited to permitted operational/self-service surfaces | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE | `NEW` — acceptance test of `17-§13-4`/`17-§14-1` |
| 17-§22-4 | Scenario 4: dashboard and conversation show consistent state | BUILD NOW | MGR+LDG | `SB-P-1.13` | ASSIGNED TO LATER MISSION | Conversation Workspace doesn't exist yet |
| 17-§22-5 | Scenario 5: stock/POS/order modules consume shared services | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `17-§7`/`17-§8`/`17-§10` |
| 17-§22-6 | Scenario 6: one integration failure leaves rest usable | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `17-§17` |
| 17-§22-7 | Scenario 7: Ask CFO remains read-only | BUILD NOW | MGR+LDG | `SB-P-1.15` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `17-§11` |
| 17-§22-8 | Scenario 8: Conversation Workspace first-class in nav | BUILD NOW | MGR+LDG | `SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `17-§5` |
| 17-§22-9 | Scenario 9: cross-business access denied server-side | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — owner-scoped precedent; Manager/Employee case not yet |
| 17-§22-10a | Scenario 10 — testable stable identifiers, for the §13/§14 surface this mission adds | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE | Mirrors `17-§16-1` at the scenario level |
| 17-§22-10b | Scenario 10 — testable stable identifiers, for the remaining Manager-depth surface | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A17`; mirrors `17-§16-2` |
| 17-§23 | Historical Corrections / Superseded Behavior | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE | `L-HIST` |
| 17-§24 | Provenance and Hydration Coverage | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE | `L-PROV` |
| 17-§25 | Completion Gate | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — synthesis | `L-GATE` |

**Contract 17: 45 rows** (counted via `grep -c "^| 17-§"`).

---

## E. Contract 7 — Stock, Supplier & Reorder Intelligence (limited opening, MC-03/MC-04; blob `65ad91b202def9cb4f42b97383bcc58475f59015`)

Per MC-03, only the touched Product & Price Master / inventory-view / permission-integration surface is opened; per MC-04, all 12 §15 scenarios are individually inventoried rather than bundled.

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 7-§1 | Feature Identity | BUILD NOW | MGR/ADDON | SB-P-1.12 | NOT APPLICABLE — narrative | `L-NARR` |
| 7-§2 | Core Stock Capabilities | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | Build Plan §9 row 6 |
| 7-§3 | Supplier Management | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7` |
| 7-§4 | Reorder Intelligence | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7` |
| 7-§5 | Reorder Authority | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | underlying delegated-automation *authority rule* is 21-§12's job |
| 7-§6 | Imports and Documents | BUILD NOW | MGR/ADDON | `SB-P-1.17`/`SB-P-1.14` | ASSIGNED TO LATER MISSION | UDI |
| 7-§7 | POS Relationship (touched, limited — single rule: no competing/duplicate stock-linked pricing path) | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — MC-03/MC-04 limited-opening scope (`03-stage2-populated-fctm.md` §E intro) |
| 7-§8-1 | §8 Ledger Relationship — integrated linking rule (stock and Ledger link business events where appropriate without duplicating them) (corrected 2026-09-22, MC-09B: §8 was never in MC-03's named touched-scope list — §§7, 9, 10, 12 only; the prior "Catalog↔Inventory↔Transactions separation preserved" framing paraphrased an architecture concern rather than citing an actual §8 source item, and that genuine, already-approved concern is tracked at `BP-§7-3`/`BP-§7-4`, not here) | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7`; the actual Product & Price Master architecture-preservation obligation this mission owns is `BP-§7-3`/`BP-§7-4`, cited there directly, not duplicated at §8 |
| 7-§8-2 | §8 — confirmed purchase may create/associate inventory movement and Ledger expense | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7`; stock feature's own event-linking behavior |
| 7-§8-3 | §8 — confirmed sale/order may affect stock through the approved business-event path | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7`; stock feature's own event-linking behavior |
| 7-§8-4 | §8 — stock correction never fabricates a financial transaction (corrected 2026-09-22, MC-09B: reclassified — this is the stock feature's own financial-integrity rule, not within MC-03's named touched-scope list) | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7` |
| 7-§8-5 | §8 — supplier payment state is distinct from goods receipt state (corrected 2026-09-22, MC-09B: no longer treated as this mission's own scope — Mission Control explicit: do not pull supplier/payment execution into this mission via a section-wide opening) | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7` |
| 7-§9 | Manager vs Ledger Packaging (touched, limited — single rule: no duplicate stock engine) | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — MC-03/MC-04 limited-opening scope (`03-stage2-populated-fctm.md` §E intro) |
| 7-§10-1 | §10 Roles and Permissions (touched) — Owner | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-1 |
| 7-§10-2 | §10 — Manager | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-2 |
| 7-§10-3 | §10 — Employee/Staff | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-3 |
| 7-§10-4 | §10 — Supplier | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-4 |
| 7-§11 | AI Behaviour | BUILD NOW | MGR/ADDON | `SB-P-1.17` (primary)/`SB-P-1.13` (AI kernel) | ASSIGNED TO LATER MISSION | `L-A7`; AI orchestration itself is `SB-P-1.13`'s (Contract 24), consumed by `SB-P-1.17`'s stock-AI feature |
| 7-§12 | Shared Foundations (touched — names Catalog/Product identity and Permission Engine, the exact WS-A/WS-C seam) | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE | Contract 7 §12 names "Catalog/Product identity" and "Permission Engine," both this mission's own contracts (22-§5, 21) |
| 7-§13 | Failure and Exception Handling | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7` |
| 7-§14 | Privacy and Dignity | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `L-A7` |
| 7-§15-1 | Scenario 1: opening stock/normal movement history | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `PARTIAL` — acceptance test of `7-§2` |
| 7-§15-2 | Scenario 2: document/CSV import preview + idempotency | BUILD NOW | MGR/ADDON | `SB-P-1.17`/`SB-P-1.14` | ASSIGNED TO LATER MISSION | `PARTIAL` — acceptance test of `7-§6` |
| 7-§15-3 | Scenario 3: correction with audit trail | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `PARTIAL` — `inventory_movements` correction precedent |
| 7-§15-4 | Scenario 4: low-stock awareness | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `7-§2` |
| 7-§15-5 | Scenario 5: expiry/slow-moving signal | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `7-§2` |
| 7-§15-6 | Scenario 6: supplier identity/history | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `7-§3` |
| 7-§15-7 | Scenario 7: reorder suggestion requiring confirmation | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `7-§4`/`7-§5` |
| 7-§15-8 | Scenario 8: bounded standing rule executes only within stored authority | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | authority-rule mechanics are 21-§12's |
| 7-§15-9 | Scenario 9: POS bridge contributes without custom core modification | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `7-§7` (this mission's own touched scope) |
| 7-§15-10 | Scenario 10: staff permission boundaries | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE | `NEW` — MC-04: disposed individually, overlaps this mission's authority work |
| 7-§15-11 | Scenario 11: neutral handling of stock discrepancy | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` — acceptance test of `7-§14` |
| 7-§15-12 | Scenario 12: cross-business isolation | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — MC-04: owner-scoped RLS precedent on `inventory_items`/`inventory_movements` |
| 7-§16 | Non-goals / Rejected Historical Behaviour | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | not this mission's non-goal list |
| 7-§17 | Dependencies | BUILD NOW | MGR/ADDON | SB-P-1.12 | NOT APPLICABLE — cross-reference list; names Contract 21 as a dependency, consistent with the split above | `L-DEP` |
| 7-§18 | Completion Gate | BUILD NOW | MGR/ADDON | SB-P-1.12 | NOT APPLICABLE — synthesis | `L-GATE` |

**Contract 7: 33 rows** (counted via `grep -c "^| 7-§"`).

---

## F. Build Plan §7 and §10.1 (governing sections, not a 26th contract)

| Row ID | Item | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| BP-§10.1-1 | Owner/Manager/Employee role model | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | duplicate of 21-§4-*, mission-plan anchor |
| BP-§10.1-2 | Business membership and shared identity primitives | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | anchors 22-§5-* |
| BP-§10.1-3 | Explicit permission matrix | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | anchors 21-§5-* |
| BP-§10.1-4 | Delegated authority boundaries | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | anchors 21-§12-* |
| BP-§10.1-5 | Execution-time authorization and revalidation | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | anchors 21-§17, Founder Scenario B |
| BP-§10.1-6 | Business isolation / cross-tenant denial | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `PARTIAL`; anchors 21-§6-* |
| BP-§10.1-7 | RLS/grants/function-security review | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `06-stage2-delta-evidence.md` Part 3 §3 |
| BP-§10.1-8 | Residual `anon` privilege remediation | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | critical finding, broader than previously recorded, see Delta |
| BP-§10.1-9 | CI baseline maintained/extended for authority+isolation obligations (Build Plan §5.2) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | current required check is Markdown Quality Gate only, verified live via GitHub API |
| BP-§10.1-10 | Entitlement primitives where needed | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | anchors 21-§16-* |
| BP-§10.1-11 | Product & Price Master reclassification | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | see BP-§7-* below |
| BP-§10.1-12 | Safe contextualization/demotion plan for `/catalog` | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `/catalog` currently a standalone top-level route |
| BP-§10.1-13 | Preserve existing valid product/pricing/inventory data and deep-link continuity | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `PARTIAL` — existing Catalog↔Inventory link/constraint |
| BP-§7-1 | Preserve: product identity, pricing, tax, SKU/barcode, price history, audit/history | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `PARTIAL` — `catalog_products`, `catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_audit_events` exist |
| BP-§7-2 | Preserve: import foundations | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `PARTIAL` — `catalog_import_batches`/`catalog_import_rows` exist |
| BP-§7-3 | Preserve: relationships to POS/Orders/Supplier/UDI/Transactions/reporting | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `PARTIAL` — L-BP7 |
| BP-§7-4 | Do not: independent Catalog expansion, delete valid data, destructive collapse into Transactions, make Inventory sole owner of commercial identity | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `L-BP7` |
| BP-§7-5 | Target treatment: "Product & Price Master — CORE SHARED FOUNDATION," "PRESERVE + EVOLVE + DEMOTE SURFACE" | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `L-BP7` |

**Build Plan: 18 rows** (unchanged; already itemized at the obligation level).

---

## G. Row-count reconciliation (Source 18 §3.2 item 6 completeness test) — every number below is `grep`-counted, not hand-computed

**Re-verified 2026-09-22 (MC-06 second re-review correction cycle, fourth correction round — MC-09).** Mission Control's third re-review ([comment `5778571759`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5778571759)) accepted round 3's arithmetic, named omissions and mechanical citation corrections, but found three targeted source-to-row gaps: **MC-09A** — Contract 17 §18 and §21 are genuinely mixed-disposition sections (part of each section is this mission's own scope, part is `SB-P-1.17`'s), which do not qualify for Source 18 §3.2 item 2's single-row exception (that exception applies only when the *whole* section shares one non-`IN SCOPE` disposition); both were bundled as "1 extracted item + 1 grouped remainder of 4" instead of 5 individual rows. **MC-09B** — Contract 7 §8 was never in MC-03's named touched-scope list (§§7, 9, 10, 12 only), and its prior "Catalog↔Inventory↔Transactions separation preserved" citation paraphrased an architecture concern rather than pointing to a real §8 source item; all 5 of §8's actual items (1 integrated rule + 4 examples) are the stock feature's own event-linking/correction/payment-tracking behavior, `SB-P-1.17`'s build — not Product & Price Master or permission-boundary content. **MC-09C** — Contract 22 §27's 7 numbered items are mandatory, individually-required disclosure entries (a mission must state *all 7*), not alternative means to one end like the contract's genuinely single-rule sections (§15/§17/§19/§21/§22); it needed exploding to 7 rows, not one. All three corrected below: Contract 17 §18 (2→5 rows: 3 `IN SCOPE`, 2 `ASSIGNED`), §21 (2→5 rows: 1 `IN SCOPE`, 4 `ASSIGNED`); Contract 7 §8 (3→5 rows, all 5 reclassified `ASSIGNED TO LATER MISSION`, removing 3 rows that were never within the authorized touched scope); Contract 22 §27 (1→7 rows, all `IN SCOPE`). Total row count moves from 345 to 359 — **not a target, the actual result of fixing every confirmed gap**, per Mission Control's standing instruction not to aim for a specific figure.

**Re-verified 2026-09-22 (MC-06 fourth re-review correction cycle, fifth correction round — MC-10).** Mission Control's fourth re-review ([comment `5778960338`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5778960338)) accepted MC-09A/B/C's repairs but found `22-§12` and `22-§16` remained single whole-section `IN SCOPE (default; unresolved)` placeholder rows, impermissible under Source 18 §3.2 item 2 (single-row treatment requires the whole section to share one **non**-`IN SCOPE` disposition, which these did not). Both re-read from source and exploded per-obligation: §12 → 9 rows, all `UNRESOLVED FOUNDER DECISION` (no Build Plan naming source, not independently testable without a notification feature this mission does not build); §16 → 7 rows (1 `IN SCOPE` — "reject continuous employee surveillance," a genuine restatement of the already-approved `21-§21-1` — plus 6 `UNRESOLVED FOUNDER DECISION`). `22-§29-9` reconciled to `ASSIGNED TO LATER MISSION` (`SB-P-1.18`), since the scenario names attendance/delivery specifically, both already owned by that mission, independent of §16's own foundation-ownership question. Total row count moves from 359 to 373 (+14: +8 for §12, +6 for §16); `UNRESOLVED FOUNDER DECISION` is used for the first time in this document (15 rows).

**Re-verified 2026-09-22 (MC-06 fifth re-review correction cycle, sixth correction round — MC-11).** Mission Control's fifth re-review ([comment `5779330365`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5779330365)) accepted MC-10's obligation enumeration but found the 15 rows' `UNRESOLVED FOUNDER DECISION` disposition itself was not Source 18 vocabulary-compliant — that value means "on the approved unresolved list" (Build Plan §15's nine named topics), and Notification/Location foundation ownership is not one of them (independently re-verified: neither term appears anywhere in the Build Plan document). All 15 relabeled to `ESCALATED` ("a conflict or proposed change awaiting the Founder," §3.2 item 10) — no row count change, no source-pointer change, no reassignment to an existing mission (none was found on recheck).

Reproducible commands run against this file at the head recorded in `07-stage2-completion-report.md`:

```bash
grep -c "^| 21-§" 03-stage2-populated-fctm.md   # 107
grep -c "^| 22-§" 03-stage2-populated-fctm.md   # 112
grep -c "^| 20-§" 03-stage2-populated-fctm.md   # 47
grep -c "^| 17-§" 03-stage2-populated-fctm.md   # 53
grep -c "^| 7-§"  03-stage2-populated-fctm.md   # 36
grep -c "^| BP-§" 03-stage2-populated-fctm.md   # 18
grep -cE "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md            # 373 (total)
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "IN SCOPE"                        # 228
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "ASSIGNED TO LATER MISSION"       # 98
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "DELEGATED"                        # 2
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "NOT APPLICABLE"                    # 30
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "ESCALATED"                          # 15
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -cE '\| — \|$'                         # 0 (empty citation gaps)
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -cE '\| `(NEW|PARTIAL)` \|$'           # 0 (bare implementation-tag-only citations)
```

| Contract | Rows | Change this cycle |
|---|---|---|
| 21 | 107 | 0 |
| 22 | 112 | 0 (disposition relabel only — 15 rows `UNRESOLVED FOUNDER DECISION` → `ESCALATED`) |
| 20 | 47 | 0 |
| 17 | 53 | 0 |
| 7 (limited) | 36 | 0 |
| Build Plan §10.1 + §7 | 18 | 0 |
| **Total** | **373** | **0** |

**Disposition totals: `IN SCOPE` 228 + `ASSIGNED TO LATER MISSION` 98 + `DELEGATED` 2 + `NOT APPLICABLE` 30 + `ESCALATED` 15 = 373.** Verified no row double-counts across any pair of dispositions (zero rows match two disposition names in the same cell). `UNRESOLVED FOUNDER DECISION`: 0 rows (was 15, all relabeled to `ESCALATED` — see Correction note 6).

**Citation-gap count: 0 empty cells, 0 bare-implementation-tag-only cells** (both closed in round 3, re-verified unchanged after this round's relabeling).

This total (373) is **not** a target figure — it is what results from fixing every confirmed gap the source-first audit found, per Mission Control's standing instruction not to target a specific number. Every added or restructured row is individually marked with a "corrected 2026-09-22" or "added 2026-09-22" note in its own Source pointer cell, naming the finding it responds to.

**Reconciliation against the independent obligation inventory:** see `04-stage2-obligation-inventory.md` §3 for the genuinely source-first obligation pointer inventory, which now reports source-obligation counts and FCTM representation-row counts as two distinct figures per Mission Control's explicit F6 instruction, and its explicit set-difference check against this file's actual row IDs.

**No row carries `UNRESOLVED FOUNDER DECISION`.** 15 rows (`22-§12-1`–`-9`, `22-§16-1`, `22-§16-3`–`-7`) carry `ESCALATED` (corrected 2026-09-22, MC-11 — relabeled from `UNRESOLVED FOUNDER DECISION`, which Source 18 §3.2 item 3 reserves for items already on Build Plan §15's approved unresolved list; these 15 newly-discovered, uncited assignment gaps are not on that list, and the correct §3.2 item 10 treatment is `ESCALATED`) — see `06-stage2-delta-evidence.md` Part 4 §3 for the full reasoning. A row-level `ESCALATED` disposition is a truthful record that no approved source resolves ownership; it is not itself a Founder decision, but per Source 18 §3.2 item 3 it "blocks every lock, authorization and acceptance that relies on the row" until Mission Control brings it to the Founder. **The mission-level Stage 3 trigger determination is not concluded by this document or by Claude Code** — see `06-stage2-delta-evidence.md` Part 4 §1 for the corrected T1–T8 screen, which leaves T4, T6 and T7 open for Mission Control.
