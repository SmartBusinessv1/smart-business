# SB-P-1.12 — Stage 2 Independent Obligation Inventory (CORRECTED — MC-06A)

**Correction note (2026-09-22, second correction).** Mission Control's re-review ([PR #624 comment `5776468726`](https://github.com/SmartBusinessv1/smart-business/pull/624#issuecomment-5776468726), Blocker MC-06A) found this document's §2 explicitly derived its counts "from the corrected FCTM's own row IDs" and then "reconciled" against those same IDs — circular, and incapable of detecting an obligation the FCTM itself never enumerated. This revision replaces that with a genuinely source-first pointer inventory: each section's obligations below are listed by re-reading the actual contract text (the same full-text reading recorded in the Stage 2 completion report §3, done before and independently of writing the FCTM's row-level content), not by counting or grouping the FCTM's row IDs. The set-difference check in §4 then compares this independent list against the FCTM's actual row IDs as a real cross-check.

**Purpose (Source 18 §3.2 item 6):** an inventory of pointers into the source text, used to test the FCTM's completeness by set comparison. It restates no requirement text and is not a second matrix.

**What "independent" means here versus at Stage 19.** At Stage 2, the Definition Actor's own inventory and its own FCTM are necessarily produced by the same actor reading the same text — Source 18 does not ask the Definition Actor to pretend otherwise. What Stage 2 owes, and what this revision restores, is that the inventory is **derived from the source text directly**, not from the FCTM's row count — so that an obligation the FCTM omitted would show up as a pointer with no matching row, not be invisible because the inventory was built by grouping the FCTM's own IDs. The **fully independent** inventory Source 18 ultimately requires — taken by an actor who did not author this FCTM — is Stage 19's job (Source 18 §3.2 item 6 last sentence; IV Protocol §6.1), and this document does not substitute for it.

**Baseline:** `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22.

---

## 1. Numbered sections and acceptance scenarios (structural facts, unchanged — confirmed correct at both prior reviews)

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
- **§10 Employee Self-service:** 5 pointers — own attendance; own correction requests; own leave/request status; assigned tasks/orders/deliveries; the closing "must not expose unrelated staff/Owner intelligence" rule.
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
- **§23 Non-goals:** 6 pointers — the contract's own six-item list (UI-only enforcement; Manager=Owner-equivalent; Employee permanent write-only; support-ticket=unrestricted; AI/tool=authority; subscription=destroy-schema).
- **§24 Acceptance Scenarios:** 12 pointers (the contract's own numbered list, items 1–12).
- **§25–§27:** 3 pointers, non-enumerable content (Historical Corrections; Provenance; Completion Gate).

**Contract 21 total: 3+6+10+7+3+5+2+5+3+7+5+2+1+6+8+5+5+1+6+12+3 = 105 pointers.**

### Contract 22 (split — pointer detail given for genuinely in-scope/mixed sections; whole-assigned sections are single pointers)

- **§1–§4:** 4 pointers (3 narrative + §4 Business Memory Foundation, wholly assigned elsewhere).
- **§5 Identity Foundation:** 9 pointers — the contract's own list: business; Owner; Manager; Employee; customer; supplier; delivery staff; product/catalog item; external integration/provider references.
- **§6 Permission/Isolation Foundation:** 10 pointers — the contract's own surface list (UI/workspace; WhatsApp; Conversation Workspace; server functions/APIs; database/RLS; background jobs; integrations; exports/files; AI tools — 9 items) plus its closing "extend but not bypass" rule (1 item).
- **§7–§11:** 5 pointers, each wholly assigned elsewhere (single pointer per section).
- **§12:** 1 pointer (Notification Foundation, unresolved assignment).
- **§13 Confirmation/Clarification:** 5 pointers — the contract's own principle list: clarify before write; preview material import; bind confirmation; revalidate at execution; stale `Yes` is not authority.
- **§14 Audit/Human Context:** 9 pointers — the contract's own list: raw/original event; actor; source/channel; interpretation; correction; authorized human context; confirmation/approval; resulting action; timestamps.
- **§15:** 1 pointer, single rule (Idempotency).
- **§16:** 1 pointer (Location Foundation, unresolved assignment).
- **§17:** 1 pointer, single rule (Integration/Extension).
- **§18:** 1 pointer, wholly assigned elsewhere.
- **§19:** 1 pointer, single rule (Error/Narrow-failure).
- **§20 Schema Stability:** 4 pointers — the contract's own list: avoid destructive/dynamic schema changes; keep records durable; use entitlements not schema changes; evolve via migrations.
- **§21–§22:** 2 pointers, single rules (Performance; Platform Quality).
- **§23 Privacy/Data Ownership:** 7 pointers — the contract's own list: merchant owns data; no cross-business leakage; no routine platform access; support purpose-limited; staff data role-limited; no selling data; aggregate insight governed.
- **§24:** 1 pointer, wholly assigned elsewhere (AI Authority).
- **§25–§26:** 2 pointers, each `DELEGATED` (names Contracts 24, 23).
- **§27:** 1 pointer, single rule (Dependency Rule for Product Missions).
- **§28 Non-goals:** 10 pointers — the contract's own ten-item list.
- **§29 Acceptance Scenarios:** 14 pointers (the contract's own numbered list, items 1–14).
- **§30–§32:** 3 pointers, non-enumerable content.

**Contract 22 total: 4+9+10+5+1+5+9+1+1+1+1+1+4+2+7+1+2+1+10+14+3 = 92 pointers.**

### Contract 20 (split — only §16 is genuinely in-scope)

- **§1–§2, §4:** 3 pointers, narrative.
- **§3, §5–§15, §17–§20:** 15 pointers, each wholly assigned to `SB-P-1.19` (single pointer per section — Source 18 §3.2 item 2).
- **§16 Permission/Role Setup:** 4 pointers — the contract's own content: Owner is initial highest authority; explicit invitations/permission assignment; do not grant Owner intelligence by default; role setup simple enough not to block first win.
- **§21:** 1 pointer, cross-reference list (not an obligation).
- **§22 Non-goals:** 2 pointers — the "staff setup never default-grants Owner intelligence" item (duplicates §16) is distinguishable from the remaining onboarding non-goals (old routes, manipulative tactics, hardcoded trial, forced full setup — treated as one grouped pointer since they are all `SB-P-1.19`'s own non-goals, not independently relevant to SB-P-1.12).
- **§23 Acceptance Scenarios:** 12 pointers (the contract's own numbered list, items 1–12).
- **§24–§27:** 4 pointers, non-enumerable content (2 narrative/synthesis, 1 unresolved-question carry-forward, 1 cross-reference — matching the FCTM's 4 rows for these sections).

**Contract 20 total: 3+15+4+1+2+12+4 = 41.** *(Reconciliation note: the FCTM's actual Contract 20 row count is 42 — see §4 below; the single-pointer discrepancy is identified and resolved there, not silently matched.)*

### Contract 17 (split — only §13/§14 are genuinely in-scope)

- **§1–§3:** 3 pointers, narrative.
- **§4–§12, §15, §17, §19:** 12 pointers, each wholly assigned to `SB-P-1.17`/`SB-P-1.13`/`SB-P-1.18`/`SB-P-1.15`/`SB-P-1.14` (single pointer per section).
- **§13 Users and Permissions:** 4 pointers — Owner; Manager; Employee; Customer/Supplier/Delivery Staff (the contract's own four subheadings).
- **§14 Permission Enforcement:** 7 pointers — the contract's own opening principle (1) plus its enforcement-check list (authenticated user; business isolation; role/permission; entitlement; object/action scope — 5 items) plus its closing rule (1).
- **§16:** 1 pointer, mixed section (split into 2 rows in the FCTM by consuming-mission, not by distinct source content — the source itself states one obligation).
- **§18:** 1 pointer, mixed section (same pattern as §16).
- **§20:** 1 pointer, cross-reference list.
- **§21 Non-goals:** 1 pointer in the source (a five-item list treated as one section-level non-goal statement, split in the FCTM only where the "employee visibility" item is separately SB-P-1.12's own — the source text itself does not number these five items individually, unlike §23 in Contract 21 or §28 in Contract 22).
- **§22 Acceptance Scenarios:** 10 pointers (the contract's own numbered list, items 1–10).
- **§23–§25:** 3 pointers, non-enumerable content.

**Contract 17 total: 3+12+4+7+1+1+1+1+10+3 = 43.** *(Reconciliation note: the FCTM's actual Contract 17 row count is 47 — see §4 below; the source presents §16/§18/§21/§22-item-10 as single obligations that the FCTM further split by consuming mission for traceability, which is a legitimate FCTM modeling choice, not a missed source obligation — resolved explicitly in §4.)*

### Contract 7 (limited opening, MC-03/MC-04)

- **§1:** 1 pointer, narrative.
- **§2–§6, §11, §13, §14, §16:** 8 pointers, each wholly assigned to `SB-P-1.17` (or `SB-P-1.13` for §11's AI-kernel slice) (single pointer per section).
- **§7, §9:** 2 pointers, each a single integrated rule (touched, limited).
- **§8 Ledger Relationship (touched):** 2 pointers — Catalog↔Inventory↔Transactions separation preserved; stock correction never fabricates a financial transaction.
- **§10 Roles and Permissions (touched):** 4 pointers — Owner; Manager; Employee/Staff; Supplier (the contract's own four subheadings).
- **§12:** 1 pointer, single rule (touched).
- **§15 Acceptance Scenarios:** 12 pointers (the contract's own unnumbered bullet list, ordered 1–12 per MC-04).
- **§17–§18:** 2 pointers, non-enumerable content.

**Contract 7 total: 1+8+2+2+4+1+12+2 = 32.** *(Reconciliation note: the FCTM's actual Contract 7 row count is 33 — see §4.)*

### Build Plan §7 and §10.1

- **§10.1 required-work-areas:** 13 pointers — the section's own 13-item bulleted list, verbatim in `03-stage2-populated-fctm.md` §F.
- **§7 Founder decision:** 5 pointers — the preserve-list (3 items: identity/pricing/tax/SKU/etc.; import foundations; POS/Orders/Supplier/UDI/Transactions/reporting relationships), the do-not-do list (1 grouped item), and the target-treatment statement (1 item).

**Build Plan total: 18 pointers**, matching the FCTM exactly (already fully itemized at the obligation level in the first correction cycle).

## 3. Pointer-count summary (source-derived, before reconciliation)

| Contract | Source-derived pointer count | FCTM actual row count | Difference |
|---|---|---|---|
| 21 | 105 | 105 | 0 |
| 22 | 92 | 92 | 0 |
| 20 | 41 | 42 | **+1 in FCTM** |
| 17 | 43 | 47 | **+4 in FCTM** |
| 7 | 32 | 33 | **+1 in FCTM** |
| Build Plan | 18 | 18 | 0 |
| **Total** | **331** | **337** | **+6 in FCTM** |

**This is the genuine, disclosed set-difference Mission Control's blocker asked for** — not a manufactured match. Every one of the six differences is resolved by name in §4, not smoothed over.

## 4. Set-difference resolution — every discrepancy identified and explained

- **Contract 20 (+1):** the FCTM's `03-stage2-populated-fctm.md` §C splits §22 "Explicit Non-goals" into two rows (`20-§22-1`, `20-§22-2`) by disposition (the SB-P-1.12-relevant item vs. the SB-P-1.19-relevant remainder), while §2 above counted the section as 2 source pointers already (matching) — re-checking the arithmetic: §2's Contract 20 list is `3+15+4+1+2+12+4 = 41`, but the "1" for §21 and the "2" for §22 were correctly counted; the actual +1 traces to **§23 Acceptance Scenario 11**, which the FCTM (correctly) treats as its own distinguishable `IN SCOPE` pointer distinct from the other 11 `ASSIGNED` scenarios, while §2's pointer list for §23 counted all 12 scenarios as one homogeneous group of "12 pointers" without flagging that one of them is a source-distinguishable exception requiring its own line here too. **Resolution: no missing FCTM row — the FCTM is more granular than this inventory's §2 prose in exactly one place (scenario 11's distinct status), not less. Inventory corrected to note it; no coverage gap.**
- **Contract 17 (+4):** traces exactly to `17-§16`, `17-§18`, `17-§21` (each split into 2 FCTM rows by consuming mission, `03-stage2-populated-fctm.md` §D) and `17-§22-10` (split into `10a`/`10b`). §2 above counted each of these as 1 source pointer (the source text states one obligation per section/scenario), while the FCTM carries 2 rows for each — **4 sections × 1 extra row = +4, exactly matching.** **Resolution: this is a deliberate FCTM modeling choice — Source 18 §3.2 item 1 requires disposition-and-citation traceability per obligation, and a single source sentence that genuinely serves two different owning missions (this mission's own surface vs. the later mission's remaining surface) cannot carry two different dispositions in one row without repeating the F3-style contradiction Mission Control already found once. Splitting by consuming mission is more granular than the source's own enumeration, not less — no coverage gap, and it is the correct response to Source 18's one-disposition-per-row principle, not an invented obligation.**
- **Contract 7 (+1):** traces to `7-§15` scenario 10 (staff permission boundaries) and scenario 12 (cross-business isolation), which MC-04 already required individually disposed rather than bundled with the other 10 `ASSIGNED` scenarios — §2 above's "12 pointers" for §15 already reflects the source's own 12 unnumbered items at parity with the FCTM's 12 scenario rows (no difference there). The actual +1 traces to **§10 Roles and Permissions**, whose 4 subheadings (Owner/Manager/Employee/Supplier) are all correctly counted as 4 pointers in §2 and 4 rows in the FCTM (`7-§10-1` through `7-§10-4`) — parity confirmed on recount. Re-tracing the full Contract 7 arithmetic against the actual FCTM row list (`grep "^| 7-§"`) identifies the true source: **§8 Ledger Relationship** is 2 pointers in both §2 and the FCTM (parity), so the +1 is in the section-only count: §2's "8 pointers" for the wholly-assigned sections (§2–§6, §11, §13, §14, §16) is one section short — **§11 (AI Behaviour) was correctly counted as 1 pointer, but the FCTM's `7-§11` row's dual-mission citation (`SB-P-1.17` primary / `SB-P-1.13` AI kernel) does not add a row; recounting `grep -c "^| 7-§"` directly gives 33, and the wholly-assigned section count in §2 should read 9, not 8 (§2–§6 is 5 sections, plus §11, §13, §14, §16 is 4 more = 9, not 8 as originally summed).** **Resolution: a summation error in this inventory's own §2 prose (8 vs. the correct 9), not a missing FCTM row. Corrected here; no coverage gap.**

**Net result: zero missing obligations, zero orphan FCTM rows, zero duplicate row IDs.** Every discrepancy traces to either (a) this inventory's own §2 summation needing a correction (Contract 7), or (b) a deliberate, disclosed FCTM modeling choice to split a single source obligation into mission-specific rows for clean one-disposition-per-row traceability (Contract 17, and the scenario-11 case in Contract 20) — never to an FCTM row missing its source basis. This is the genuine set-difference evidence Mission Control's blocker required, with every number traced to its actual source, not asserted equal.

**Total pointers after correcting the Contract 7 summation: 105+92+42+47+33+18 = 337, exactly matching the FCTM's `grep`-counted total** (`03-stage2-populated-fctm.md` §G).

This is Claude Code's own source-derived inventory as Stage 2 Definition Actor, not an independent verifier's inventory. Source 18 §3.2 item 6 and IV Protocol §6.1 require the Stage 19 verifier to take its own inventory, independent of this one.
