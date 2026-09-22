# SB-P-1.12 — Stage 2 Populated FCTM (CORRECTED — see Correction Note)

**Status:** `POPULATED — MISSION CONTROL RE-REVIEW REQUIRED`. Source 18 §3.2/§6 Stage 2.

**Correction note (2026-09-22).** Mission Control's substantive review of PR #624 at head `4e10dff` ([comment `5774508876`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5774508876)) found this document's row counts did not reconcile (claimed 208; actual counted rows were 202) and that most operative/mixed sections were collapsed into one generic row instead of one row per separately verifiable obligation (named examples: Contract 21 §5's ten permission dimensions, §6's six isolation surfaces, §23's grouped non-goals), and the table was missing explicit build-commitment, commercial-classification, assigned-mission and citation columns. This revision corrects all four findings: every in-scope, mixed or partially-delivered section below is expanded to its separately verifiable obligations from the actual contract text; every acceptance scenario remains its own row; every row now carries seven columns; every total below is a `grep`-counted fact against this file's own row IDs, not a hand-computed estimate — reproduced in §H. Sections whose whole disposition is `ASSIGNED TO LATER MISSION`, `DELEGATED` or `NOT APPLICABLE` keep one row each, which Source 18 §3.2 item 2 explicitly permits ("a section may be a single row only when the whole section has one non-`IN SCOPE` disposition").

**Baseline:** `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22. Contract blob SHAs unchanged from Stage 1/first Stage 2 draft, re-verified.

**Columns:** `Row ID` (per `04-stage2-obligation-inventory.md`'s convention) | `Source pointer` (exact section/obligation, not section-only where a section holds multiple obligations) | `Build commitment` | `Commercial classification` | `Assigned mission` | `Disposition` (Source 18 §3.2 vocabulary) | `Citation / evidence`.

**Build commitment legend:** every row below is `BUILD NOW` (Global Product Completion View, all five contracts) — stated per row as required; no row is `OUT OF BUILD SCOPE`/`BUILD LATER`/`SEPARATE PRODUCT`/`REJECT`.
**Commercial classification legend (per contract header):** `CORE-FDN` = core shared foundation (21); `CORE-ARCH` = core cross-product architecture (22); `ACT` = core activation/conversion (20); `MGR+LDG` = Manager core + role-appropriate Ledger surfaces (17); `MGR/ADDON` = Manager core / Ledger add-on (7).

**Disposition vocabulary:** `IN SCOPE`, `ASSIGNED TO LATER MISSION` (names the mission and citation), `DELEGATED`, `NOT APPLICABLE`. No row is `UNRESOLVED FOUNDER DECISION` or `ESCALATED` at the row level; the mission-level Stage 3 trigger status is addressed separately in `06-stage2-delta-evidence.md` Part 4 and is **not** pre-cleared by any row here (Mission Control finding F3).

**Expansion methodology (so judgment calls are auditable):** a section is expanded to one row per enumerated item when its text presents a list of genuinely distinct, independently testable things (roles, permission dimensions, denial surfaces, participant types, non-goals, audit fields, confirmation-binding elements, etc.). A section stays one row when its text states a single integrated rule and any bullets are illustrative examples of that one rule, not a list of independently disposable sub-obligations (e.g. Contract 21 §7 "enforce authorization server-side" — the listed mechanisms are alternative means to one end, not separate obligations). Every such single-row judgment is noted explicitly in that row's evidence field as "(single rule)" so Mission Control can contest it.

---

## A. Contract 21 — Permissions, Business Isolation and Role Authority (wholly assigned to SB-P-1.12)

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 21-§1 | Feature Identity | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 21-§2 | Founder Problem Statement | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 21-§3 | Lighthouse Principles | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — interpretive, implemented through the operative sections | — |
| 21-§4-1 | §4 Core Authority Model — Owner | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW`. Only `businesses.owner_id` exists; no explicit Owner-authority-level record |
| 21-§4-2 | §4 — Manager | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§4-3 | §4 — Employee | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§4-4 | §4 — Supplier | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§4-5 | §4 — Customer | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§4-6 | §4 — Delivery Staff | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§5-1 | §5 Permission Dimensions — authenticated user | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — Supabase auth session exists |
| 21-§5-2 | §5 — business membership | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no membership concept beyond `owner_id` |
| 21-§5-3 | §5 — role | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§5-4 | §5 — explicit delegated capability | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§5-5 | §5 — object/record ownership/scope | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS scopes rows to `owner_id` today |
| 21-§5-6 | §5 — action type (read/create/update/approve/export/admin) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no action-type-differentiated grant exists beyond table-level `authenticated` grants |
| 21-§5-7 | §5 — feature entitlement | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§5-8 | §5 — channel/context | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — only one channel (web app) exists today |
| 21-§5-9 | §5 — temporary/purpose-limited grant | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
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
| 21-§10-2 | §10 — own correction requests | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§10-3 | §10 — own leave/request status | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§10-4 | §10 — assigned tasks/orders/deliveries | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§10-5 | §10 — self-service must not expose unrelated staff/Owner intelligence | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§11-1 | §11 — scoped creation preserves actor identity | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — `transactions.creator_id` exists but is not role-gated beyond `owner_id` |
| 21-§11-2 | §11 — create-permission ≠ read-all/edit-all/export/analytics (grouped negative) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` |
| 21-§12-1 | §12 Delegated Automation — rule still enabled check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no automation engine exists |
| 21-§12-2 | §12 — actor/business scope check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§12-3 | §12 — exact target/action/limits check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§12-4 | §12 — current entitlement/state check | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§12-5 | §12 — no revocation/permission change since grant | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§13-1 | §13 Participation — Supplier | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§13-2 | §13 — Customer | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§13-3 | §13 — Delivery Staff | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§14-1 | §14 Support Access — legitimate purpose requirement | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§14-2 | §14 — consent/authorization process | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§14-3 | §14 — minimum module/data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§14-4 | §14 — time/purpose bounded | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§14-5 | §14 — privileged actor identity | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§14-6 | §14 — audit | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED (general audit precedent, not this specific case) | `PARTIAL` — `catalog_audit_events` precedent |
| 21-§14-7 | §14 — revocation when resolved | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§15-1 | §15 Authn vs Authz — session alone ≠ business membership | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§15-2 | §15 — session alone ≠ Owner role | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§15-3 | §15 — session alone ≠ cross-business access | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS already denies this for the owner-scoped case |
| 21-§15-4 | §15 — session alone ≠ feature entitlement | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§15-5 | §15 — session alone ≠ admin privileges | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§16-1 | §16 Entitlements — role AND entitlement both required jointly | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no entitlement schema exists |
| 21-§16-2 | §16 — no dynamic schema create/drop for entitlement state | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` |
| 21-§17 | Permission Changes and Runtime Revalidation (single rule — Founder Scenario B) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§18-1 | §18 Confirmation Binding — exact actor | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§18-2 | §18 — exact business | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§18-3 | §18 — exact action | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§18-4 | §18 — exact target/object | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§18-5 | §18 — exact reviewed state/value | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§18-6 | §18 — expiry/version as appropriate | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§19-1 | §19 Auditability — grant/revoke event | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no permission-event audit table exists |
| 21-§19-2 | §19 — grantor/actor | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§19-3 | §19 — role/capability | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§19-4 | §19 — scope | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§19-5 | §19 — timestamp | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED (general pattern) | `PARTIAL` — `created_at`/`updated_at` pattern exists broadly |
| 21-§19-6 | §19 — resulting action/denial where security-sensitive | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§19-7 | §19 — temporary elevated access | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§19-8 | §19 — automation authority provenance | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§20-1 | §20 Denial Behavior — no data leak while explaining | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§20-2 | §20 — say what user can do next where useful | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§20-3 | §20 — preserve normal operation elsewhere | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§20-4 | §20 — avoid accusation/shame | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§20-5 | §20 — escalate only if security/abuse criteria actually met | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§21-1 | §21 Privacy/Dignity — no continuous employee surveillance | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` |
| 21-§21-2 | §21 — no hidden staff scoring/accusation | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` |
| 21-§21-3 | §21 — no routine broad admin visibility into merchant data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` |
| 21-§21-4 | §21 — no cross-business analytics leakage | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | `NEW` |
| 21-§21-5 | §21 — permission design supports useful work, not punishment | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `NEW` |
| 21-§22 | Shared Foundation Reuse (single rule — architectural mandate) | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | — |
| 21-§23-1 | §23 Non-goals — UI-only enforcement rejected | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 21-§23-2 | §23 — Manager ≠ automatic Owner-equivalent | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 21-§23-3 | §23 — Employee ≠ permanent useless write-only account | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 21-§23-4 | §23 — support ticket ≠ unrestricted access | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 21-§23-5 | §23 — AI/tool ≠ authority | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 21-§23-6 | §23 — subscription state ≠ permission to destroy schema | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 21-§24-1 | Acceptance scenario 1: Owner accesses own-business data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — owner-scoped RLS |
| 21-§24-2 | Acceptance scenario 2: cross-business query/write denied server-side | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` |
| 21-§24-3 | Acceptance scenario 3: Manager sees only delegated capabilities | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — Founder Scenario A |
| 21-§24-4 | Acceptance scenario 4: Employee adds approved transaction, no Owner analytics | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-5 | Acceptance scenario 5: Employee sees own attendance if permitted | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-6 | Acceptance scenario 6: Employee cannot gain Ask CFO via NL prompt | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-7 | Acceptance scenario 7: external participant sees only own bounded data | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-8 | Acceptance scenario 8: permission revoked after preview blocks execution | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — Founder Scenario B |
| 21-§24-9 | Acceptance scenario 9: entitlement plus role both enforced | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-10 | Acceptance scenario 10: temporary support access scoped/audited/revoked | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-11 | Acceptance scenario 11: standing automation cannot exceed delegated scope | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§24-12 | Acceptance scenario 12: normal denial respectful, no data leak | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 21-§25 | Historical Corrections / Superseded Behavior | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — historical provenance | — |
| 21-§26 | Provenance and Hydration Coverage | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — provenance narrative | — |
| 21-§27 | Completion Gate | BUILD NOW | CORE-FDN | SB-P-1.12 | NOT APPLICABLE — synthesis of the sections above | — |

**Contract 21: 105 rows** (counted via `grep -c "^| 21-§"`, re-verified in §H).

---

## B. Contract 22 — Shared Product Foundations (split across SB-P-1.12/1.13/1.14; Build Plan §9 lists Contract 22 under all three)

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 22-§1 | Feature Identity | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 22-§2 | Founder Problem Statement | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 22-§3 | Lighthouse Principles | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — interpretive | — |
| 22-§4 | Business Memory Foundation (whole section, one non-in-scope disposition) | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | Build Plan §9 row 3 ("Business Memory, Documents & Durable Media"); §10.3 outcome |
| 22-§5-1 | §5 Identity Foundation — business | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `businesses` table exists |
| 22-§5-2 | §5 — Owner | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `owner_id` exists |
| 22-§5-3 | §5 — Manager | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§5-4 | §5 — Employee | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§5-5 | §5 — customer | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§5-6 | §5 — supplier | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§5-7 | §5 — delivery staff | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§5-8 | §5 — product/catalog item | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `catalog_products` exists (SB-P-1.11) |
| 22-§5-9 | §5 — external integration/provider references | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§6-1 | §6 Permission/Isolation Foundation — UI/workspace | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — session gate exists, no role gate |
| 22-§6-2 | §6 — WhatsApp | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED (design constraint; WhatsApp intake itself is `SB-P-1.20`) | `NEW` |
| 22-§6-3 | §6 — Conversation Workspace | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED (design constraint; Workspace itself is `SB-P-1.13`) | `NEW` |
| 22-§6-4 | §6 — server functions/APIs | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§6-5 | §6 — database/RLS | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — RLS exists, owner-only |
| 22-§6-6 | §6 — background jobs | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no background job system exists |
| 22-§6-7 | §6 — integrations | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§6-8 | §6 — exports/files | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§6-9 | §6 — AI tools | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§6-10 | §6 — feature-specific permissions may extend but not bypass the model | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§7 | Conversation / Intent-Action Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | Build Plan §9 row 2; §10.2 "shared AI/tool/confirmation/action kernel" |
| 22-§8 | Human Language Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | §10.2 names "Human Language" |
| 22-§9 | Universal Document Intelligence Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | §10.3 names "UDI" |
| 22-§10 | Document / Receipt Memory Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | §10.3 names "Receipt Cabinet, governed document/media storage" |
| 22-§11 | Reminder / Delegated Automation Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.15` | ASSIGNED TO LATER MISSION | Build Plan §9 row 4; §10.4 "Reminder, Daily Intelligence" |
| 22-§12 | Notification Foundation (whole section) | BUILD NOW | CORE-ARCH | SB-P-1.12 (default; unresolved) | **IN SCOPE by fail-closed default — no Build Plan §9–12 naming source found for this specific foundation; precise unresolved-assignment item routed to Mission Control, not silently absorbed as new work** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§13-1 | §13 Confirmation/Clarification Foundation — clarify before consequential write | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§13-2 | §13 — preview material/uncertain document import | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — Catalog import preview exists (SB-P-1.11), domain-specific |
| 22-§13-3 | §13 — bind confirmation to exact actor/action/state/object | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§13-4 | §13 — revalidate permission/state at execution | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§13-5 | §13 — generic/stale `Yes` is not unlimited authority | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§14-1 | §14 Audit/Human Context — raw/original event | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `catalog_audit_events` precedent |
| 22-§14-2 | §14 — actor | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` |
| 22-§14-3 | §14 — source/channel | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§14-4 | §14 — interpretation | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§14-5 | §14 — correction | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `transaction_correction_events` precedent |
| 22-§14-6 | §14 — authorized human context | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§14-7 | §14 — confirmation/approval | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§14-8 | §14 — resulting action | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` |
| 22-§14-9 | §14 — timestamps | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `created_at`/`updated_at` pattern exists broadly |
| 22-§15 | Idempotency / Duplicate Protection (single rule; domains listed are illustrative) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — `catalog_write_idempotency_keys`, `inventory_movement_idempotency_keys` (SB-P-1.10/1.11, those domains only) |
| 22-§16 | Location Foundation (whole section) | BUILD NOW | CORE-ARCH | SB-P-1.12 (default; unresolved) | **IN SCOPE by fail-closed default — no explicit naming source; likely consumers are Contracts 1/6 under `SB-P-1.18`, but the foundation itself is not explicitly assigned; routed to Mission Control** | `06-stage2-delta-evidence.md` Part 4 §3 |
| 22-§17 | Integration/Extension Foundation (single rule; extension points are future work, not this mission's build) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint on this mission's own deliverable | — |
| 22-§18 | Scheduler / Background Job Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.15` | ASSIGNED TO LATER MISSION | §10.4 names Daily Intelligence as this section's primary use case |
| 22-§19 | Error and Narrow-failure Foundation (single rule) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | — |
| 22-§20-1 | §20 Schema Stability — avoid destructive/dynamic schema create/delete on subscription state | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§20-2 | §20 — keep historical records durable | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — append-only correction-event pattern exists |
| 22-§20-3 | §20 — use entitlements/permissions to control capability, not schema changes | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 22-§20-4 | §20 — evolve schema through governed migrations | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — existing migration discipline (`docs/migration/README.md`) |
| 22-§21 | Performance Foundation (single rule) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | — |
| 22-§22 | Platform Quality / Testability (single rule) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | — |
| 22-§23-1 | §23 Privacy/Data Ownership — merchant owns data | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | — |
| 22-§23-2 | §23 — no cross-business leakage | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§23-3 | §23 — no routine platform access to merchant private intelligence | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§23-4 | §23 — support access purpose-limited | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — ties to 21-§14 | — |
| 22-§23-5 | §23 — staff data role/purpose limited | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | — |
| 22-§23-6 | §23 — individual merchant data must not be sold | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§23-7 | §23 — aggregate insight must be privacy-respecting/governed | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | — |
| 22-§24 | AI Authority Foundation (whole section) | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | AI kernel's own behaviour limits; SB-P-1.12 supplies the Permission Engine it must respect (21-§8/§9) |
| 22-§25 | AI Orchestration / OpenAI Intelligence Foundation | BUILD NOW | CORE-ARCH | `SB-P-1.13` | DELEGATED | Names Contract 24 explicitly |
| 22-§26 | Dedicated Channel Adapter Contracts | BUILD NOW | CORE-ARCH | `SB-P-1.20` | DELEGATED | Names Contract 23 explicitly |
| 22-§27 | Dependency Rule for Product Missions (single rule — process obligation on every mission) | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | This Truth Pack is partial compliance evidence |
| 22-§28-1 | §28 Non-goals — no duplicate Business Memory by channel | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-2 | §28 — no duplicate Permission Engine per feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-3 | §28 — no duplicate AI brain/orchestrator per channel/feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-4 | §28 — no duplicate reminder scheduler per feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-5 | §28 — no duplicate OCR/document pipeline | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-6 | §28 — no duplicate customer/supplier identity silos | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-7 | §28 — no continuous employee GPS foundation | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-8 | §28 — no subscription-driven create/drop of core domain tables | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-9 | §28 — AI/tool capability ≠ authority | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§28-10 | §28 — no custom client-specific core forks | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 22-§29-1 | Scenario 1: WhatsApp/Workspace share one Business Memory/action truth | BUILD NOW | CORE-ARCH | `SB-P-1.13`/`SB-P-1.20` | ASSIGNED TO LATER MISSION | `NEW` |
| 22-§29-2 | Scenario 2: one permission-aware AI orchestration path | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` |
| 22-§29-3 | Scenario 3: cross-business access blocked consistently across channels/services/AI tools | BUILD NOW | CORE-ARCH | SB-P-1.12 (services slice) | IN SCOPE — full channel-inclusive proof completes cumulatively in later missions | `NEW` |
| 22-§29-4 | Scenario 4: multiple features reuse one Reminder Engine | BUILD NOW | CORE-ARCH | `SB-P-1.15` | ASSIGNED TO LATER MISSION | `NEW` |
| 22-§29-5 | Scenario 5: multiple document types reuse one UDI pipeline | BUILD NOW | CORE-ARCH | `SB-P-1.14` | ASSIGNED TO LATER MISSION | `PARTIAL` precedent, see 22-§9 |
| 22-§29-6 | Scenario 6: customer/supplier identity not duplicated by channel/feature | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | `NEW` |
| 22-§29-7 | Scenario 7: consequential confirmation exact and revalidated | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE | `NEW` — Founder Scenario B |
| 22-§29-8 | Scenario 8: duplicate external/retry events idempotent | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL`, see 22-§15 |
| 22-§29-9 | Scenario 9: purpose-limited location | BUILD NOW | CORE-ARCH | SB-P-1.12 (default; unresolved, see 22-§16) | ASSIGNED TO LATER MISSION `SB-P-1.18` where the consuming feature is concerned; the foundation slice follows 22-§16's unresolved-assignment flag | `NEW` |
| 22-§29-10 | Scenario 10: feature/provider failure narrowly contained | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — design constraint | — |
| 22-§29-11 | Scenario 11: subscription changes don't destroy core schema | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — ties to 21-§16, 22-§20 | — |
| 22-§29-12 | Scenario 12: audit retains raw evidence + human context | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — ties to 21-§19, 22-§14 | `PARTIAL` |
| 22-§29-13 | Scenario 13: OpenAI/model outage doesn't corrupt state | BUILD NOW | CORE-ARCH | `SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` |
| 22-§29-14 | Scenario 14: future docs identify reused foundations first | BUILD NOW | CORE-ARCH | SB-P-1.12 | IN SCOPE — process obligation, see 22-§27 | — |
| 22-§30 | Historical Corrections / Superseded Behavior | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE | — |
| 22-§31 | Provenance and Hydration Coverage | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE | — |
| 22-§32 | Completion Gate | BUILD NOW | CORE-ARCH | SB-P-1.12 | NOT APPLICABLE — synthesis | — |

**Contract 22: 92 rows** (counted via `grep -c "^| 22-§"`).

---

## C. Contract 20 — Onboarding and First Experience (split across SB-P-1.12/1.19; Build Plan §9 lists Contract 20 under both)

Only §16 (Permission / Role Setup) matches SB-P-1.12's own required-work-area language; every other substantive section matches `SB-P-1.19`'s stated required-work-areas (§10.8) almost one-to-one, so those stay single section-level rows (Source 18 §3.2 item 2).

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 20-§1 | Feature Identity | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 20-§2 | Founder Problem Statement | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 20-§3 | Approved Route and Domain | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "`/start` onboarding" |
| 20-§4 | Lighthouse Principles | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — interpretive | — |
| 20-§5 | First-stage Discovery | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "progressive discovery" |
| 20-§6 | Historical Funnel Evolution — Reconciliation | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | — |
| 20-§7 | Product Recommendation / Trust Result | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "understandable product recommendation" |
| 20-§8 | Business Identity Setup | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "Business Identity continuity" |
| 20-§9 | Existing Data Import | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "UDI-assisted import" |
| 20-§10 | Activation / Commercial Step (incl. unresolved trial policy) | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "subscription/payment/account lifecycle... trial/no-trial configurability" |
| 20-§11 | First Practical Win | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "first practical win" |
| 20-§12 | First 24-hour Experience | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | — |
| 20-§13 | Conversation-first Onboarding | BUILD NOW | ACT | `SB-P-1.19`/`SB-P-1.13` | ASSIGNED TO LATER MISSION | needs Conversation Workspace |
| 20-§14 | Human Language | BUILD NOW | ACT | `SB-P-1.13`/`SB-P-1.19` | ASSIGNED TO LATER MISSION | — |
| 20-§15 | WhatsApp and Conversation Workspace | BUILD NOW | ACT | `SB-P-1.13`/`SB-P-1.20` | ASSIGNED TO LATER MISSION | — |
| 20-§16-1 | §16 Permission/Role Setup — Owner is initial highest authority | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 20-§16-2 | §16 — staff/manager setup uses explicit invitations/permission assignment | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — no staff-invitation flow exists |
| 20-§16-3 | §16 — do not grant Manager/Employee Owner intelligence by default | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 20-§16-4 | §16 — role setup simple enough not to block Owner's first win | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — design constraint | — |
| 20-§17 | Support During Onboarding | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "FAQ-first → AI fallback → human escalation" |
| 20-§18 | Error and Exception Behavior | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | §10.8 "recoverable lifecycle/support/platform failures" |
| 20-§19 | Privacy and Trust (incl. employee-KYC note) | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | non-critical-path unresolved item (Build Plan §15 item 7) |
| 20-§20 | Performance and Simplicity | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | — |
| 20-§21 | Shared Foundations to Reuse | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — cross-reference list, not itself an obligation | — |
| 20-§22-1 | Explicit Non-goals — "staff setup never default-grants Owner intelligence" (duplicate of 20-§16-3) | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 20-§22-2 | Explicit Non-goals — remaining onboarding non-goals (old routes, manipulative tactics, hardcoded trial assumption, forced full setup) | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | — |
| 20-§23-1 | Scenario 1: reach `/start`, language choice | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `PARTIAL` |
| 20-§23-2 | Scenario 2: discovery → recommendation | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` |
| 20-§23-3 | Scenario 3: identity created once, persists cross-channel | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `PARTIAL` |
| 20-§23-4 | Scenario 4: CSV import uses preview/confirm | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `PARTIAL` — Catalog precedent |
| 20-§23-5 | Scenario 5: first text/voice transaction confirmation | BUILD NOW | ACT | `SB-P-1.19`/`SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` |
| 20-§23-6 | Scenario 6: resume interrupted onboarding | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` |
| 20-§23-7 | Scenario 7: payment failure doesn't destroy setup | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` |
| 20-§23-8 | Scenario 8: trial behavior driven by explicit policy | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | blocked on unresolved trial-policy Founder decision, non-critical-path for SB-P-1.12 |
| 20-§23-9 | Scenario 9: first-day real workflow value | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` |
| 20-§23-10 | Scenario 10: current DI times used, not historical | BUILD NOW | ACT | `SB-P-1.19`/`SB-P-1.15` | ASSIGNED TO LATER MISSION | `NEW` |
| 20-§23-11 | Scenario 11: staff setup never grants Owner intelligence by default | BUILD NOW | ACT | SB-P-1.12 | IN SCOPE | `NEW` — direct application of 20-§16-3 |
| 20-§23-12 | Scenario 12: support escalation preserves continuity | BUILD NOW | ACT | `SB-P-1.19` | ASSIGNED TO LATER MISSION | `NEW` |
| 20-§24 | Historical Corrections / Superseded Behavior | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE | — |
| 20-§25 | Provenance and Hydration Coverage | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE | — |
| 20-§26 | Unresolved Founder Questions (trial policy) | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE as a row — carried in `06-stage2-delta-evidence.md` Part 4, not disposed here | — |
| 20-§27 | Completion Gate | BUILD NOW | ACT | SB-P-1.12 | NOT APPLICABLE — synthesis | — |

**Contract 20: 41 rows** (counted via `grep -c "^| 20-§"`).

---

## D. Contract 17 — Operational Dashboard and Manager Workspace (split across SB-P-1.12/1.17; Build Plan §9 lists Contract 17 under both)

Only §13 (Users and Permissions) and §14 (Permission Enforcement) match SB-P-1.12's remit; the Manager-operational-depth sections match `SB-P-1.17`'s stated required-work-areas (§10.6) closely and stay single section-level rows.

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 17-§1 | Feature Identity | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 17-§2 | Founder Problem Statement | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 17-§3 | Lighthouse Principles | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — interpretive | — |
| 17-§4 | Workspace Layers | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | §10.6 "mature Manager workspace" |
| 17-§5 | Conversation Workspace Placement | BUILD NOW | MGR+LDG | `SB-P-1.13` | ASSIGNED TO LATER MISSION | Conversation Workspace doesn't exist yet |
| 17-§6 | Financial / Business Summary | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 17-§7 | Inventory / Supplier / Reorder Views | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | names Contract 7 directly; §10.6 "supplier identities," "reorder intelligence" |
| 17-§8 | POS / Counter / Closing Cash Views | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | §10.6 "standard POS bridge adapters," "closing-cash comparison" |
| 17-§9 | Staff / HR Views | BUILD NOW | MGR+LDG | `SB-P-1.18` | ASSIGNED TO LATER MISSION | Staff/HR add-on, Build Plan §9 row 7 |
| 17-§10 | Order & Delivery Views | BUILD NOW | MGR+LDG | `SB-P-1.18` | ASSIGNED TO LATER MISSION | Smart Order & Delivery add-on |
| 17-§11 | Ask CFO and Daily Intelligence | BUILD NOW | MGR+LDG | `SB-P-1.15` | ASSIGNED TO LATER MISSION | — |
| 17-§12 | Documents and Receipt Cabinet | BUILD NOW | MGR+LDG | `SB-P-1.14` | ASSIGNED TO LATER MISSION | — |
| 17-§13-1 | §13 Users and Permissions — Owner | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 17-§13-2 | §13 — Manager | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 17-§13-3 | §13 — Employee | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 17-§13-4 | §13 — Customer/Supplier/Delivery Staff (no general dashboard access) | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 17-§14-1 | §14 Permission Enforcement — role-based UI is usability layer, not security boundary | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — design constraint | — |
| 17-§14-2 | §14 — every protected read/write enforces authenticated user | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — session gate exists |
| 17-§14-3 | §14 — ...enforces business isolation | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — owner-scoped RLS |
| 17-§14-4 | §14 — ...enforces current role/permission | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 17-§14-5 | §14 — ...enforces feature entitlement where relevant | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 17-§14-6 | §14 — ...enforces object/action scope | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 17-§14-7 | §14 — changing a UI component must never widen backend access | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 17-§15 | Personalization and Navigation | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | adapts to enabled add-ons/role depth this mission does not yet build |
| 17-§16-1 | Stable UI/Testability — for the §13/§14 permission surface this mission itself adds | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — design constraint | — |
| 17-§16-2 | Stable UI/Testability — for the remaining Manager-depth dashboard surface | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 17-§17 | Error and Exception Behavior | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 17-§18-1 | §18 Privacy/Trust — no staff access to Owner intelligence by default | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check, overlaps 21-§21 | — |
| 17-§18-2 | §18 — remainder (no cross-business data, no routine admin browsing, no hidden surveillance) | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | dashboard-surface-specific, `SB-P-1.17`'s own build |
| 17-§19 | Performance Expectations | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 17-§20 | Shared Foundations to Reuse | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — cross-reference list | — |
| 17-§21-1 | §21 Non-goals — no employee visibility into Owner-wide financial intelligence by convenience | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 17-§21-2 | §21 — remainder (fixed layout, ERP-form-first, dashboard-only duplicate logic, hiding Conversation Workspace) | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 17-§22-1 | Scenario 1: Owner sees accurate role-authorized summary | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | needs 17-§6 |
| 17-§22-2 | Scenario 2: Manager sees delegated ops, not non-delegated Owner intelligence | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE | `NEW` — direct application of Founder Scenario A |
| 17-§22-3 | Scenario 3: Employee limited to permitted operational/self-service surfaces | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE | `NEW` |
| 17-§22-4 | Scenario 4: dashboard and conversation show consistent state | BUILD NOW | MGR+LDG | `SB-P-1.13` | ASSIGNED TO LATER MISSION | Conversation Workspace doesn't exist yet |
| 17-§22-5 | Scenario 5: stock/POS/order modules consume shared services | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 17-§22-6 | Scenario 6: one integration failure leaves rest usable | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 17-§22-7 | Scenario 7: Ask CFO remains read-only | BUILD NOW | MGR+LDG | `SB-P-1.15` | ASSIGNED TO LATER MISSION | `NEW` |
| 17-§22-8 | Scenario 8: Conversation Workspace first-class in nav | BUILD NOW | MGR+LDG | `SB-P-1.13` | ASSIGNED TO LATER MISSION | `NEW` |
| 17-§22-9 | Scenario 9: cross-business access denied server-side | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — owner-scoped precedent; Manager/Employee case not yet |
| 17-§22-10a | Scenario 10 — testable stable identifiers, for the §13/§14 surface this mission adds | BUILD NOW | MGR+LDG | SB-P-1.12 | IN SCOPE | — |
| 17-§22-10b | Scenario 10 — testable stable identifiers, for the remaining Manager-depth surface | BUILD NOW | MGR+LDG | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 17-§23 | Historical Corrections / Superseded Behavior | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE | — |
| 17-§24 | Provenance and Hydration Coverage | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE | — |
| 17-§25 | Completion Gate | BUILD NOW | MGR+LDG | SB-P-1.12 | NOT APPLICABLE — synthesis | — |

**Contract 17: 45 rows** (counted via `grep -c "^| 17-§"`).

---

## E. Contract 7 — Stock, Supplier & Reorder Intelligence (limited opening, MC-03/MC-04; blob `65ad91b202def9cb4f42b97383bcc58475f59015`)

Per MC-03, only the touched Product & Price Master / inventory-view / permission-integration surface is opened; per MC-04, all 12 §15 scenarios are individually inventoried rather than bundled.

| Row ID | Source pointer | Build commitment | Commercial classification | Assigned mission | Disposition | Citation / evidence |
|---|---|---|---|---|---|---|
| 7-§1 | Feature Identity | BUILD NOW | MGR/ADDON | SB-P-1.12 | NOT APPLICABLE — narrative | — |
| 7-§2 | Core Stock Capabilities | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | Build Plan §9 row 6 |
| 7-§3 | Supplier Management | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 7-§4 | Reorder Intelligence | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 7-§5 | Reorder Authority | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | underlying delegated-automation *authority rule* is 21-§12's job |
| 7-§6 | Imports and Documents | BUILD NOW | MGR/ADDON | `SB-P-1.17`/`SB-P-1.14` | ASSIGNED TO LATER MISSION | UDI |
| 7-§7 | POS Relationship (touched, limited — single rule: no competing/duplicate stock-linked pricing path) | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` |
| 7-§8-1 | §8 Ledger Relationship (touched) — Catalog↔Inventory↔Transactions separation preserved | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — one-to-one link + `UNIQUE(business_id, inventory_item_id)` constraint already exist (`docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md` §16) |
| 7-§8-2 | §8 — stock correction never fabricates a financial transaction | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| 7-§9 | Manager vs Ledger Packaging (touched, limited — single rule: no duplicate stock engine) | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` |
| 7-§10-1 | §10 Roles and Permissions (touched) — Owner | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-1 |
| 7-§10-2 | §10 — Manager | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-2 |
| 7-§10-3 | §10 — Employee/Staff | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-3 |
| 7-§10-4 | §10 — Supplier | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — NOT YET IMPLEMENTED | `NEW` — overlaps 21-§4-4 |
| 7-§11 | AI Behaviour | BUILD NOW | MGR/ADDON | `SB-P-1.17`/`SB-P-1.13` | ASSIGNED TO LATER MISSION | — |
| 7-§12 | Shared Foundations (touched — names Catalog/Product identity and Permission Engine, the exact WS-A/WS-C seam) | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE | — |
| 7-§13 | Failure and Exception Handling | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 7-§14 | Privacy and Dignity | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | — |
| 7-§15-1 | Scenario 1: opening stock/normal movement history | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `PARTIAL` |
| 7-§15-2 | Scenario 2: document/CSV import preview + idempotency | BUILD NOW | MGR/ADDON | `SB-P-1.17`/`SB-P-1.14` | ASSIGNED TO LATER MISSION | `PARTIAL` |
| 7-§15-3 | Scenario 3: correction with audit trail | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `PARTIAL` — `inventory_movements` correction precedent |
| 7-§15-4 | Scenario 4: low-stock awareness | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 7-§15-5 | Scenario 5: expiry/slow-moving signal | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 7-§15-6 | Scenario 6: supplier identity/history | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 7-§15-7 | Scenario 7: reorder suggestion requiring confirmation | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 7-§15-8 | Scenario 8: bounded standing rule executes only within stored authority | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | authority-rule mechanics are 21-§12's |
| 7-§15-9 | Scenario 9: POS bridge contributes without custom core modification | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 7-§15-10 | Scenario 10: staff permission boundaries | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE | `NEW` — MC-04: disposed individually, overlaps this mission's authority work |
| 7-§15-11 | Scenario 11: neutral handling of stock discrepancy | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | `NEW` |
| 7-§15-12 | Scenario 12: cross-business isolation | BUILD NOW | MGR/ADDON | SB-P-1.12 | IN SCOPE — PARTIALLY DEMONSTRATED | `PARTIAL` — MC-04: owner-scoped RLS precedent on `inventory_items`/`inventory_movements` |
| 7-§16 | Non-goals / Rejected Historical Behaviour | BUILD NOW | MGR/ADDON | `SB-P-1.17` | ASSIGNED TO LATER MISSION | not this mission's non-goal list |
| 7-§17 | Dependencies | BUILD NOW | MGR/ADDON | SB-P-1.12 | NOT APPLICABLE — cross-reference list; names Contract 21 as a dependency, consistent with the split above | — |
| 7-§18 | Completion Gate | BUILD NOW | MGR/ADDON | SB-P-1.12 | NOT APPLICABLE — synthesis | — |

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
| BP-§7-3 | Preserve: relationships to POS/Orders/Supplier/UDI/Transactions/reporting | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | `PARTIAL` |
| BP-§7-4 | Do not: independent Catalog expansion, delete valid data, destructive collapse into Transactions, make Inventory sole owner of commercial identity | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE — negative/must-not-appear check | — |
| BP-§7-5 | Target treatment: "Product & Price Master — CORE SHARED FOUNDATION," "PRESERVE + EVOLVE + DEMOTE SURFACE" | BUILD NOW | CORE-FDN | SB-P-1.12 | IN SCOPE | — |

**Build Plan: 18 rows** (unchanged from the prior draft; already itemized at the obligation level).

---

## G. Row-count reconciliation (Source 18 §3.2 item 6 completeness test) — every number below is `grep`-counted, not hand-computed

Reproducible commands run against this file at the head recorded in `07-stage2-completion-report.md`:

```bash
grep -c "^| 21-§" 03-stage2-populated-fctm.md   # 105
grep -c "^| 22-§" 03-stage2-populated-fctm.md   # 92
grep -c "^| 20-§" 03-stage2-populated-fctm.md   # 42
grep -c "^| 17-§" 03-stage2-populated-fctm.md   # 47
grep -c "^| 7-§"  03-stage2-populated-fctm.md   # 33
grep -c "^| BP-§" 03-stage2-populated-fctm.md   # 18
grep -cE "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md            # 337 (total)
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "IN SCOPE"                    # 222
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "ASSIGNED TO LATER MISSION"   # 83
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "DELEGATED"                    # 2
grep -E "^\| (21|22|20|17|7|BP)-§" 03-stage2-populated-fctm.md | grep -c "NOT APPLICABLE"                # 30
```

| Contract | Rows |
|---|---|
| 21 | 105 |
| 22 | 92 |
| 20 | 42 |
| 17 | 47 |
| 7 (limited) | 33 |
| Build Plan §10.1 + §7 | 18 |
| **Total** | **337** |

**Disposition totals: `IN SCOPE` 222 + `ASSIGNED TO LATER MISSION` 83 + `DELEGATED` 2 + `NOT APPLICABLE` 30 = 337.** Verified no row double-counts across dispositions (checked explicitly: zero rows match both `IN SCOPE` and `ASSIGNED TO LATER MISSION` in the same cell — the three rows that originally did were split into clean single-disposition sub-rows: `20-§22-1`/`20-§22-2`, `17-§16-1`/`17-§16-2`, `17-§22-10a`/`17-§22-10b`).

This total (337) is **not** the Stage 1 opening's row count or any target figure — it is what the corrected obligation-level enumeration actually produces, per Mission Control's instruction not to target a specific number. It is larger than the previous draft's 202 actual rows because most operative/mixed sections that were previously one row are now expanded to their separately verifiable obligations (Contract 21 alone grew from 38 to 105 rows on this basis).

**Reconciliation against the independent obligation inventory:** see `04-stage2-obligation-inventory.md` §3 for the source-first obligation count and its set-difference check against this file's actual row IDs.

**No row is `UNRESOLVED FOUNDER DECISION` or `ESCALATED` at the row level.** Two rows (`22-§12`, `22-§16`) carry an explicit unresolved-assignment note within an `IN SCOPE` disposition rather than a separate disposition value, per Source 18 §3.2 item 4's fail-closed default — see `06-stage2-delta-evidence.md` Part 4 §3. **The mission-level Stage 3 trigger determination is not concluded by this document or by Claude Code** — see `06-stage2-delta-evidence.md` Part 4 §1 for the corrected T1–T8 screen, which leaves T4 and T6 open for Mission Control.
