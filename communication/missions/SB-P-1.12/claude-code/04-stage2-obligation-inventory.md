# SB-P-1.12 — Stage 2 Independent Obligation Inventory (CORRECTED — MC-06A, MC-08, MC-09, MC-10)

**Correction note (2026-09-22, second correction, round 1).** Mission Control's re-review ([PR #624 comment `5776468726`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5776468726), Blocker MC-06A) found this document's §2 explicitly derived its counts "from the corrected FCTM's own row IDs" and then "reconciled" against those same IDs — circular, and incapable of detecting an obligation the FCTM itself never enumerated. That revision replaced it with a genuinely source-first pointer inventory: each section's obligations were listed by re-reading the actual contract text, not by counting or grouping the FCTM's row IDs.

**Correction note 2 (2026-09-22, second correction, round 2 — MC-08).** Mission Control's next re-review ([PR #624 comment `5776916528`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5776916528)) found round 1's source-first rebuild was still incomplete and, in one place, factually wrong: **F5** — Contract 21 §23's 7th non-goal was never added as its own FCTM row (only caught in round 1's citation pass, not its count). **F6** — this document's own Contract 20 explanation ("§23 scenario 11 is distinct from the other 11") was invalid, since all 12 scenarios were already counted in the "12" term; the real cause of Contract 20's +1 was a section-bundle undercount (15 vs. the actual 16 sections in §3/§5–§15/§17–§20), and separately, this document's §22 entry inherited an FCTM row's false citation (content that does not exist anywhere in §22's actual text). Mission Control also required that **source-obligation counts and FCTM representation-row counts be reported as two distinct, separately-reconciled figures**, not blended into one "matching total" by retroactively substituting FCTM counts for source counts (its explicit critique of the round-1 Contract 17/20 framing). This revision: (a) re-derives every contract's source-pointer count from the actual text a third time, correcting the Contract 20 bundle and non-goals miscounts and the Contract 17 §18/§21 undercounts (both previously mislabeled "1 pointer" despite being real 5-item enumerated lists — the round-1 claim that they were "not numbered, unlike §23" was itself false, since §23 also uses dash bullets, not numbers); (b) independently re-audits all five contracts' already-itemized lists and section-bundle counts for the same failure pattern as F5, finding two more self-caught omissions (Contract 21 §10's "other job-specific information"; Contract 7 §8's "supplier payment state" example) that Mission Control had not named; (c) keeps §3's summary table as two genuinely distinct columns throughout, with every remaining difference traced to a named, disclosed cause in §4, not asserted equal.

**Correction note 3 (2026-09-22, third correction, round 3 — MC-09).** Mission Control's next re-review ([PR #624 comment `5778571759`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5778571759)) accepted round 2's arithmetic and named omissions but found the previous round had stopped one step short in three places: **MC-09A** — Contract 17 §18 and §21 were correctly recounted as 5-item source lists in round 2, but the FCTM itself still bundled each into only 2 rows (1 extracted item + 1 grouped "remainder" of 4) — a mixed-disposition section does not qualify for Source 18 §3.2 item 2's single-row exception, so this was a genuine, unclosed FCTM gap, not merely a documentation undercount as round 2 had concluded. **MC-09B** — Contract 7 §8 was never in MC-03's actual named touched-scope list (§§7, 9, 10, 12 only); its treatment as 3 `IN SCOPE` rows, including an invented "Catalog↔Inventory↔Transactions separation preserved" pointer that does not correspond to any real §8 source item, was an unauthorized scope inclusion. **MC-09C** — Contract 22 §27's 7-item checklist was left as a single row on the reasoning that it was "a documentation/process obligation... consistent with Contract 21 §7–§9's single-rule treatment" — Mission Control correctly distinguished these: §7–§9's listed mechanisms are alternative means to one end, while §27's 7 items are mandatory, individually-required disclosure entries. This revision corrects the FCTM itself (not just this inventory's prose) for all three: §18/§21 exploded to 5 rows each (with §18's "no cross-business data" and "legitimate-need visibility" items reclassified `IN SCOPE` as genuine Contract 21 restatements, not dashboard-only content); §8 rebuilt as 5 rows, all `ASSIGNED TO LATER MISSION`, with the genuine Product & Price Master preservation concern reattributed to its real citation (`BP-§7-3`/`BP-§7-4`); §27 exploded to 7 `IN SCOPE` rows. Because the FCTM changed, not just this inventory, §3's reconciliation below now shows tighter, cleaner splits than round 2's — Contract 17's former "consolidation" story is gone (§18/§21 are now exact 1:1 matches); the only remaining Contract 17 difference is two genuine 1-item-to-2-row splits (§16, §22 scenario 10).

**Correction note 4 (2026-09-22, fourth correction, round 4 — MC-10).** Mission Control's next re-review ([PR #624 comment `5778960338`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5778960338)) accepted MC-09A/B/C's repairs but found `22-§12` and `22-§16` remained single whole-section `IN SCOPE (default; unresolved)` placeholder rows — the same defect class as round 3's mixed-section findings, just not yet closed for these two sections: a whole-section single row is not permitted under Source 18 §3.2 item 2 when the section carries a non-`IN SCOPE` disposition, and these placeholders, by asserting `IN SCOPE` while exempting themselves from full enumeration, were never itemized to begin with. Both re-read from source: §12 (Notification Foundation) has 9 separately verifiable items, §16 (Location Foundation) has 7 (the "approved uses" bullets are illustrative examples per Mission Control's own framing, not independent obligations). Of these 16, only one — §16's "reject continuous employee surveillance" — ties to an obligation this mission already owns (`21-§21-1`); the other 15 have no Build Plan naming source and are not this mission's own build, so they are disposed `UNRESOLVED FOUNDER DECISION` rather than defaulted to `IN SCOPE` (the error MC-10 named) or guessed as `ASSIGNED TO LATER MISSION` without a real citation. `22-§29-9` is reconciled separately, since it names attendance/delivery specifically (already owned by `SB-P-1.18`), independent of §16's own foundation-ownership question.

**Purpose (Source 18 §3.2 item 6):** an inventory of pointers into the source text, used to test the FCTM's completeness by set comparison. It restates no requirement text and is not a second matrix.

**What "independent" means here versus at Stage 19.** At Stage 2, the Definition Actor's own inventory and its own FCTM are necessarily produced by the same actor reading the same text — Source 18 does not ask the Definition Actor to pretend otherwise. What Stage 2 owes is that the inventory is **derived from the source text directly**, not from the FCTM's row count — so that an obligation the FCTM omitted would show up as a pointer with no matching row. The **fully independent** inventory Source 18 ultimately requires — taken by an actor who did not author this FCTM — is Stage 19's job (Source 18 §3.2 item 6 last sentence; IV Protocol §6.1), and this document does not substitute for it.

**Baseline:** `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22.

---

## 1. Numbered sections and acceptance scenarios (structural facts, unchanged — confirmed correct at every review to date)

| Contract | Blob SHA | Numbered sections | Numbered/counted acceptance scenarios |
|---|---|---|---|
| 21 — Permissions, Business Isolation and Role Authority | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` | §1–§27 (27) | §24: 12 |
| 22 — Shared Product Foundations | `ca4a0fdaec1ac619663f768ccb2ff10f33c590ff` | §1–§32 (32) | §29: 14 |
| 20 — Onboarding and First Experience | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` | §1–§27 (27) | §23: 12 |
| 17 — Operational Dashboard and Manager Workspace | `7943f74a88c2922acc697115f336b68baf7a503a` | §1–§25 (25) | §22: 10 |
| 7 — Stock, Supplier & Reorder Intelligence (limited opening) | `65ad91b202def9cb4f42b97383bcc58475f59015` | §1–§18 (18) | §15: 12 unnumbered items, ordered 1–12 |

**129 numbered sections; 60 acceptance scenarios.**

## 2. Source-first pointer inventory — every in-scope/partial section's obligations, listed from the contract text

Each entry below cites the **exact enumerated items the contract text itself presents** in that section, independent of any row-counting exercise. A pointer is a short label for the item, not a restatement of its full requirement prose (Source 18 §3.2 item 6: "restates no requirement").

### Contract 21 (wholly assigned to SB-P-1.12 — every section is a pointer target)

- **§1–§3:** narrative (Feature Identity; Founder Problem Statement; Lighthouse Principles) — 3 pointers, non-enumerable content.
- **§4 Core Authority Model:** 6 pointers — Owner; Manager; Employee; Supplier; Customer; Delivery Staff (the contract's own six role subheadings).
- **§5 Permission Dimensions:** 10 pointers — the contract's own bulleted list: authenticated user; business membership; role; explicit delegated capability; object/record ownership/scope; action type; feature entitlement; channel/context; temporary/purpose-limited grant; current account/subscription/security state.
- **§6 Business Isolation:** 7 pointers — the contract's "must prevent" list (cross-business reads; writes; conversation context; file/document access; exports; integration mapping — 6 items) plus its separate closing rule (client-provided `business_id` never trusted alone — 1 item).
- **§7–§9:** 3 pointers, each a single integrated rule (Server-side Authorization; Conversation/AI Permission Boundary; Ask CFO/Owner Intelligence).
- **§10 Employee Self-service:** **6 pointers** (corrected 2026-09-22, MC-08/F5-class self-caught gap — was miscounted as 5) — own attendance; own correction requests; own leave/request status; assigned tasks/orders/deliveries; **other job-specific information** (the source's own 5th self-service bullet, previously dropped when this inventory was first built); plus the closing "must not expose unrelated staff/Owner intelligence" rule.
- **§11 Permission-scoped Transaction:** 2 pointers — scoped creation preserves actor identity; creation-permission ≠ read-all/edit-all/export/analytics (the contract's own grouped negative).
- **§12 Delegated Automation Authority:** 5 pointers — the contract's own execution-check list: rule still enabled; actor/business scope; exact target/action/limits; current entitlement/state; no revocation/permission change.
- **§13 Participation:** 3 pointers — Supplier; Customer; Delivery Staff.
- **§14 Support Access:** 7 pointers — the contract's own governance-requirement list: legitimate purpose; consent/authorization process; minimum module/data; time/purpose bounded; privileged actor identity; audit; revocation when resolved.
- **§15 Authn vs Authz:** 5 pointers — the contract's own "a valid login alone does not grant" list: business membership; Owner role; cross-business access; feature entitlement; admin privileges.
- **§16 Entitlements:** 2 pointers — role+entitlement both required jointly; no dynamic schema create/drop for entitlement state.
- **§17:** 1 pointer, single rule (Runtime Revalidation).
- **§18 Confirmation Binding:** 6 pointers — the contract's own binding-element list: exact actor; exact business; exact action; exact target/object; exact reviewed state/value; expiry/version.
- **§19 Auditability:** 8 pointers — the contract's own "should preserve" list: grant/revoke event; grantor/actor; role/capability; scope; timestamp; resulting action/denial; temporary elevated access; automation authority provenance.
- **§20 Denial Behavior:** 5 pointers — the contract's own list: no data leak while explaining; say what's next; preserve normal operation; avoid accusation; escalate only if criteria met.
- **§21 Privacy/Dignity:** 5 pointers — the contract's own bulleted list: no continuous surveillance; no hidden scoring; no routine admin visibility; no cross-business analytics leakage; design supports useful work.
- **§22:** 1 pointer, single rule.
- **§23 Non-goals:** **7 pointers** (corrected 2026-09-22, Mission Control F5 — was miscounted as 6) — the contract's own seven-item list: UI-only enforcement; Manager=Owner-equivalent; Employee permanent write-only; support-ticket=unrestricted; AI/tool=authority; subscription=destroy-schema; **routine denial=security accusation** (the 7th item, previously dropped).
- **§24 Acceptance Scenarios:** 12 pointers (the contract's own numbered list, items 1–12).
- **§25–§27:** 3 pointers, non-enumerable content (Historical Corrections; Provenance; Completion Gate).

**Contract 21 total: 3+6+10+7+3+6+2+5+3+7+5+2+1+6+8+5+5+1+7+12+3 = 107 pointers** (was 105; +1 for §10, +1 for §23).

### Contract 22 (split — pointer detail given for genuinely in-scope/mixed sections; whole-assigned sections are single pointers)

- **§1–§4:** 4 pointers (3 narrative + §4 Business Memory Foundation, wholly assigned elsewhere).
- **§5 Identity Foundation:** 9 pointers — the contract's own list: business; Owner; Manager; Employee; customer; supplier; delivery staff; product/catalog item; external integration/provider references.
- **§6 Permission/Isolation Foundation:** 10 pointers — the contract's own surface list (UI/workspace; WhatsApp; Conversation Workspace; server functions/APIs; database/RLS; background jobs; integrations; exports/files; AI tools — 9 items) plus its closing "extend but not bypass" rule (1 item).
- **§7–§11:** 5 pointers, each wholly assigned elsewhere (single pointer per section).
- **§12 Notification Foundation:** **9 pointers** (corrected 2026-09-22, Mission Control MC-10 — was miscounted as 1) — the contract's own list: recipient identity/role; language; channel preference/availability; template/provider requirements; delivery/retry state; duplicate suppression; privacy; link to originating business event; plus the closing "delivery separate from business-event completion" rule. None have a Build Plan §9–12 naming source; none are independently testable without a notification-sending feature this mission does not build — all 9 disposed `UNRESOLVED FOUNDER DECISION` in the FCTM, not silently defaulted to `IN SCOPE`.
- **§13 Confirmation/Clarification:** 5 pointers — the contract's own principle list: clarify before write; preview material import; bind confirmation; revalidate at execution; stale `Yes` is not authority.
- **§14 Audit/Human Context:** 9 pointers — the contract's own list: raw/original event; actor; source/channel; interpretation; correction; authorized human context; confirmation/approval; resulting action; timestamps.
- **§15:** 1 pointer, single rule (Idempotency).
- **§16 Location Foundation:** **7 pointers** (corrected 2026-09-22, Mission Control MC-10 — was miscounted as 1) — the shared purpose-limited primitive rule; the "reject continuous employee surveillance" rule; and 5 mandatory per-feature disclosures (why location is needed; who may see it; when it is captured; how long it is retained; when access ends). The "approved uses" bullets (attendance verification, delivery destination, delivery proof, other purposes) are illustrative examples requiring separate feature-specific approval, not independent obligations of this section (Mission Control's own framing). Of the 7, only "reject continuous employee surveillance" ties to an obligation already approved for SB-P-1.12 (`21-§21-1`); the other 6 have no Build Plan naming source and are not this mission's own build — disposed `UNRESOLVED FOUNDER DECISION` in the FCTM.
- **§17:** 1 pointer, single rule (Integration/Extension).
- **§18:** 1 pointer, wholly assigned elsewhere.
- **§19:** 1 pointer, single rule (Error/Narrow-failure).
- **§20 Schema Stability:** 4 pointers — the contract's own list: avoid destructive/dynamic schema changes; keep records durable; use entitlements not schema changes; evolve via migrations.
- **§21–§22:** 2 pointers, single rules (Performance; Platform Quality).
- **§23 Privacy/Data Ownership:** 7 pointers — the contract's own list: merchant owns data; no cross-business leakage; no routine platform access; support purpose-limited; staff data role-limited; no selling data; aggregate insight governed.
- **§24:** 1 pointer, wholly assigned elsewhere (AI Authority).
- **§25–§26:** 2 pointers, each `DELEGATED` (names Contracts 24, 23).
- **§27 Dependency Rule for Product Missions:** **7 pointers** (corrected 2026-09-22, Mission Control MC-09C — was miscounted as 1) — the contract's own seven-item mandatory disclosure list: which mature feature(s) it advances; which shared foundations it reuses; whether it consumes AI orchestration and/or a channel adapter; what already exists and must not be duplicated; what remains committed but outside current mission; exact blockers/dependencies; required evidence for acceptance. Unlike Contract 21 §7–§9 (where the listed mechanisms are alternative means to one end), §27's 7 items are individually mandatory — a mission must state all 7, not just one.
- **§28 Non-goals:** 10 pointers — the contract's own ten-item list.
- **§29 Acceptance Scenarios:** 14 pointers (the contract's own numbered list, items 1–14).
- **§30–§32:** 3 pointers, non-enumerable content.

**Contract 22 total: 4+9+10+5+9+5+9+1+7+1+1+1+4+2+7+1+2+7+10+14+3 = 112 pointers** (was 98; +8 for §12, +6 for §16). **This now matches the FCTM's actual 112 rows exactly.**

### Contract 20 (split — only §16/§22 are genuinely in-scope or SB-P-1.12-adjacent)

- **§1–§2, §4:** 3 pointers, narrative.
- **§3, §5–§15, §17–§20:** **16 pointers** (corrected 2026-09-22, Mission Control F6 — was miscounted as 15), each wholly assigned to `SB-P-1.19` (single pointer per section — Source 18 §3.2 item 2). Recount: §3 is 1 section; §5–§15 is 11 sections (5,6,7,8,9,10,11,12,13,14,15); §17–§20 is 4 sections (17,18,19,20) — **1+11+4 = 16**, not 15. The FCTM already carried 16 individual rows for this exact range (`grep`-confirmed); only this document's arithmetic was wrong.
- **§16 Permission/Role Setup:** 4 pointers — the contract's own content: Owner is initial highest authority; explicit invitations/permission assignment; do not grant Owner intelligence by default; role setup simple enough not to block first win.
- **§21:** 1 pointer, cross-reference list (not an obligation).
- **§22 Non-goals:** **7 pointers** (corrected 2026-09-22, Mission Control F6 — was miscounted as 2, one of which cited content that does not exist in §22 at all) — the contract's own seven-item list: `/survey` as current route; historical Typeform/Fillout/Make.com as permanent architecture; fear-based/misleading ROI conversion tactics; fixed old domain references; hardcoded trial assumption before Founder decision; forcing all merchant setup before any practical win; treating historical 250-merchant cap as current default policy without reactivation. **None of these 7 items concerns permission/role/Owner-intelligence** — the previous version's `20-§22-1` invented a phrase ("staff setup never default-grants Owner intelligence") that is actually §23 Scenario 11's content, not §22's; that rule remains correctly captured at `20-§16-3`/`20-§23-11`, so removing the false attribution loses no real coverage. All 7 real items are `SB-P-1.19`'s own onboarding-flow non-goals.
- **§23 Acceptance Scenarios:** 12 pointers (the contract's own numbered list, items 1–12).
- **§24–§27:** 4 pointers, non-enumerable content (2 narrative/synthesis, 1 unresolved-question carry-forward, 1 cross-reference — matching the FCTM's 4 rows for these sections).

**Contract 20 total: 3+16+4+1+7+12+4 = 47 pointers** (was 41; +1 for the bundle-count fix, +5 for the §22 fix). **This now matches the FCTM's actual 47 rows exactly** — no representation-split explanation is needed for Contract 20 any more; both prior discrepancies were this document's own arithmetic errors, not FCTM gaps or legitimate splits.

### Contract 17 (split — only §13/§14 are genuinely in-scope)

- **§1–§3:** 3 pointers, narrative.
- **§4–§12, §15, §17, §19:** 12 pointers, each wholly assigned to `SB-P-1.17`/`SB-P-1.13`/`SB-P-1.18`/`SB-P-1.15`/`SB-P-1.14` (single pointer per section; re-verified against source headings, count confirmed correct).
- **§13 Users and Permissions:** 4 pointers — Owner; Manager; Employee; Customer/Supplier/Delivery Staff (the contract's own four subheadings).
- **§14 Permission Enforcement:** 7 pointers — the contract's own opening principle (1) plus its enforcement-check list (authenticated user; business isolation; role/permission; entitlement; object/action scope — 5 items) plus its closing rule (1).
- **§16:** 1 pointer, mixed section (the source states one obligation — Stable UI/Testability — represented as 2 FCTM rows by consuming mission for one-disposition-per-row traceability).
- **§18 Privacy and Trust:** **5 pointers**, now mapped **1:1 to 5 FCTM rows** (corrected 2026-09-22, Mission Control MC-09A — round 2 correctly recounted the source as 5 items but the FCTM still bundled 4 of them into 1 "remainder" row, an unclosed gap since §18 is a mixed-disposition section, not eligible for Source 18 §3.2 item 2's single-row exception) — the contract's own five-item list: no cross-business data (`17-§18-1`, reclassified `IN SCOPE` — restates Contract 21 §6's own isolation obligation); no staff access to Owner intelligence by default (`17-§18-2`, `IN SCOPE`, unchanged); no routine platform/admin merchant-data browsing through dashboard shortcuts (`17-§18-3`, `ASSIGNED` to `SB-P-1.17` — dashboard-surface-specific); sensitive information surfaced only to roles with legitimate need (`17-§18-4`, reclassified `IN SCOPE` — restates the Permission Engine's own access-scoping principle, Contract 21 §5/§14); dashboard activity/analytics must not become hidden employee surveillance (`17-§18-5`, `ASSIGNED` to `SB-P-1.17` — dashboard-surface-specific).
- **§20:** 1 pointer, cross-reference list.
- **§21 Non-goals:** **5 pointers**, now mapped **1:1 to 5 FCTM rows** (corrected 2026-09-22, Mission Control MC-09A — same failure mode as §18: round 2 fixed the count but not the FCTM's bundling) — the contract's own five-item list, all individually enumerated: fixed historic four-tab layout as immutable Product Truth (`17-§21-1`, `ASSIGNED`); ERP-form-first experience (`17-§21-2`, `ASSIGNED`); dashboard-only duplicate business logic (`17-§21-3`, `ASSIGNED`); employee visibility into Owner-wide financial intelligence by convenience (`17-§21-4`, `IN SCOPE`, unchanged); hiding Conversation Workspace as optional fallback only (`17-§21-5`, `ASSIGNED`).
- **§22 Acceptance Scenarios:** 10 pointers (the contract's own numbered list, items 1–10).
- **§23–§25:** 3 pointers, non-enumerable content.

**Contract 17 total: 3+12+4+7+1+5+1+5+10+3 = 51 pointers** (unchanged from round 2 — the source text itself did not change, only the FCTM's representation of it did). **The FCTM's actual Contract 17 row count is now 53** (see §4 below) — a much tighter difference than round 2's, since §18/§21 no longer consolidate; the remaining +2 is entirely two genuine, disclosed 1-item-to-2-row splits (§16, §22 scenario 10), the same pattern already used cleanly elsewhere in this inventory.

### Contract 7 (limited opening, MC-03/MC-04)

- **§1:** 1 pointer, narrative.
- **§2–§6, §11, §13, §14, §16:** 9 pointers, each wholly assigned to `SB-P-1.17` (or `SB-P-1.13` for §11's AI-kernel slice) (single pointer per section — corrected to 9 in round 1, re-confirmed here: §2–§6 is 5 sections, plus §11, §13, §14, §16 is 4 more).
- **§7, §9:** 2 pointers, each a single integrated rule (touched, limited — genuinely within MC-03's named touched-scope list).
- **§8 Ledger Relationship:** **5 pointers, all `ASSIGNED TO LATER MISSION` (`SB-P-1.17`)** (corrected 2026-09-22, Mission Control MC-09B — §8 was never in MC-03's actual named touched-scope list, §§7/9/10/12 only; round 2's "3 pointers" both undercounted the source and wrongly treated the section as touched) — the contract's own content: the integrated linking rule (stock and Ledger link business events where appropriate without duplicating them); confirmed purchase may create/associate inventory movement and Ledger expense; confirmed sale/order may affect stock through the approved business-event path; stock correction never fabricates a financial transaction; supplier payment state is distinct from goods receipt state. None of these 5 items are Product & Price Master or permission-boundary content — all are the stock feature's own event-linking/correction/payment-tracking behavior. The genuine, already-approved architecture-preservation concern this mission does own (not duplicating Catalog/Inventory/Transactions truth during its own Product & Price Master reclassification work) is tracked at `BP-§7-3`/`BP-§7-4` with its own real citation, not restated here as an invented §8 pointer.
- **§10 Roles and Permissions (touched):** 4 pointers — Owner; Manager; Employee/Staff; Supplier (the contract's own four subheadings).
- **§12:** 1 pointer, single rule (touched).
- **§15 Acceptance Scenarios:** 12 pointers (the contract's own unnumbered bullet list, ordered 1–12 per MC-04).
- **§17–§18:** 2 pointers, non-enumerable content.

**Contract 7 total: 1+9+2+5+4+1+12+2 = 36 pointers** (was 34; +2 for the corrected §8 enumeration — 5 real items instead of 3 miscounted ones). **This now matches the FCTM's actual 36 rows exactly.**

### Build Plan §7 and §10.1

- **§10.1 required-work-areas:** 13 pointers — the section's own 13-item bulleted list, verbatim in `03-stage2-populated-fctm.md` §F.
- **§7 Founder decision:** 5 pointers — the preserve-list (3 items: identity/pricing/tax/SKU/etc.; import foundations; POS/Orders/Supplier/UDI/Transactions/reporting relationships), the do-not-do list (1 grouped item), and the target-treatment statement (1 item).

**Build Plan total: 18 pointers**, matching the FCTM exactly.

## 3. Pointer-count summary — source obligations and FCTM representation rows as two distinct figures (per Mission Control's explicit F6 instruction, not one blended total)

| Contract | Source-derived pointer count | FCTM actual row count | Difference | Nature of any difference |
|---|---|---|---|---|
| 21 | 107 | 107 | 0 | — |
| 22 | 112 | 112 | 0 | — |
| 20 | 47 | 47 | 0 | — |
| 17 | 51 | 53 | **+2 (FCTM has more rows)** | two genuine, disclosed 1-item-to-2-row splits: `17-§16` (Stable UI/Testability, +1) and `17-§22` scenario 10 (testable stable identifiers, +1) |
| 7 | 36 | 36 | 0 | — |
| Build Plan | 18 | 18 | 0 | — |
| **Total** | **371** | **373** | **+2** | entirely attributable to Contract 17's two representation splits above |

**This is the genuine, disclosed set-difference Mission Control's blockers asked for** — two distinct quantities, not a single retroactively-matched total. The only contract with a real difference (Contract 17) has that difference traced to two specific, named rows and explained as a representation choice, not asserted away. This round's correction (MC-10) closed the last two whole-section placeholder rows (Contract 22 §12/§16), leaving a materially tighter, fully 1:1 picture everywhere except Contract 17's two genuine splits.

## 4. Set-difference resolution — every discrepancy identified and explained

- **Contract 21 (0 net, but 2 additions on both sides):** §10 and §23 each had one source item omitted from the FCTM (Mission Control's F5 finding, plus one self-caught instance of the same failure mode found during this cycle's audit). Both are now present as new FCTM rows (`21-§10-5`, `21-§23-7`) and reflected in this inventory's §2 counts. **Resolution: both were genuine FCTM gaps, now closed — not representation choices.**
- **Contract 22 (0 net, but was 0-with-two-hidden-placeholders before MC-10):** §27's 7-item mandatory disclosure checklist was left as a single row before MC-09C; §12 and §16 were left as single whole-section `IN SCOPE (default; unresolved)` placeholder rows before MC-10, which Source 18 §3.2 item 2 does not permit for a mixed-disposition section (that exception requires the whole section to share one non-`IN SCOPE` disposition). §12 is now 9 source pointers mapped to 9 `UNRESOLVED FOUNDER DECISION` FCTM rows; §16 is now 7 source pointers mapped to 7 FCTM rows (1 `IN SCOPE`, 6 `UNRESOLVED FOUNDER DECISION`). **Resolution: genuine FCTM gaps, now closed — neither section had been examined at the obligation level until flagged.**
- **Contract 20 (0 net, fully explained in round 2, unchanged this round):** the round-1 "§23 scenario 11 is distinct" explanation was invalid; the real cause was a section-bundle undercount (16 vs. 15 sections) plus a false citation on the old `20-§22-1`. Both closed in round 2; no further findings this round.
- **Contract 17 (+2, genuine and explained, unchanged this round):** traces to exactly two rows: `17-§16` (1 source item → 2 FCTM rows, consuming-mission split, +1) and `17-§22` scenario 10 (1 source item → 2 FCTM rows, consuming-mission split, +1). **Resolution: this is the one contract where source-obligation count and FCTM representation-row count genuinely differ, for a disclosed, auditable reason (two sections whose content legitimately splits across missions) — not a missing obligation, and not asserted equal to avoid explaining it.**
- **Contract 7 (0 net, unchanged this round):** closed in round 4 (MC-09B); no further findings this round.

**Net result across all five contracts and Build Plan: zero missing obligations, zero orphan FCTM rows, zero duplicate row IDs, and exactly two disclosed, fully-traced representation splits (both in Contract 17: `17-§16`, `17-§22` scenario 10).** Every number in §3's table is traced to its actual source, not asserted equal — including where the honest answer is "these two figures are legitimately different, and here is exactly why," and including where the honest answer for an unowned obligation is `UNRESOLVED FOUNDER DECISION`, not a silent default to `IN SCOPE` or a guessed `ASSIGNED TO LATER MISSION`.

**Total source pointers: 107+112+47+51+36+18 = 371.** **Total FCTM rows: 107+112+47+53+36+18 = 373** (`03-stage2-populated-fctm.md` §G, `grep`-counted). These are reported as two distinct figures per Mission Control's explicit instruction, not blended into one number.

This is Claude Code's own source-derived inventory as Stage 2 Definition Actor, not an independent verifier's inventory. Source 18 §3.2 item 6 and IV Protocol §6.1 require the Stage 19 verifier to take its own inventory, independent of this one.
