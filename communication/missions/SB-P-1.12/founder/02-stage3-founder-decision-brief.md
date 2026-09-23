# SB-P-1.12 — Stage 3 Founder Decision Brief (DRAFT — QUESTIONS ONLY)

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** Source 18 v1.2, Stage 3 — Founder Decision Gate
**Status:** `DRAFT — MISSION CONTROL REVIEW REQUIRED BEFORE ANY FOUNDER DIALOGUE`
**Prepared by:** Claude Code, MC-02 appointed Definition Actor, Stage 3 preparation only
**Authority for this preparation:** `communication/live/instruction.md` (Stage 3), effective on human merge of PR #625, `main@713a99c77ab39bc8c6741aa4bd18d3656ac78639`; MC-13, `mission-control/04-stage3-authorization-and-stage2-merge-reconciliation.md`
**Canonical basis:** Stage 2 Mission Truth Pack, human-merged PR #624, `main@96a31aa7a0debc539fcda1bca2008457e1315093` (MC-12); FCTM 373 rows, 371 source pointers, two disclosed Contract 17 representation splits

---

## What this document is, and is not

This is a **prepared draft** for Mission Control's review before any Founder dialogue opens. It groups the Stage 2 Truth Pack's open items into the actual decisions the Founder would need to make — it does not answer them, does not recommend an answer, and does not itself constitute an opened Founder dialogue. Mission Control owns the Founder-led dialogue and the resulting Founder Product Decision Record (Source 18 §6 Stage 3); this document is an input to that, not a substitute for it.

Stage 3 is **TRIGGERED**, not `NOT TRIGGERED` (Source 18 §6 Stage 3: "a `NOT TRIGGERED` record is permitted only if the FCTM has no ... `ESCALATED` row"). 15 FCTM rows carry `ESCALATED`, and one Delta item is classified `PRODUCT-AFFECTING` (T4). No `Founder Decision Gate — NOT TRIGGERED` record accompanies this document, and none is authorized by the Stage 3 preparation instruction.

---

## Decision Group 1 — Shared Notification Foundation ownership (T7, 9 `ESCALATED` rows)

**The question:** who builds and owns Contract 22 §12 (Notification Foundation) — SB-P-1.12 itself, an existing named later mission, or a separate, explicitly assigned workstream/mission not yet created?

**Established facts:**
- Contract 22 §12 defines 9 separately verifiable obligations for any feature that sends a notification (recipient identity/role, language, channel preference/availability, template/provider requirements, delivery/retry state, duplicate suppression, privacy, link to the originating business event, and a closing rule that delivery is tracked separately from business-event completion).
- Build Plan §9 (the mission-assignment table), §10.1–§10.8 (every mission's named required-work areas) and §15 (the nine already-approved unresolved topics) were each searched directly for "Notification": **zero matches**, independently re-verified twice during Stage 2 correction (MC-10 round, MC-11 round). No approved source names an owning mission.
- `22-§12-2` (language) textually overlaps Contract 22 §8 (Human Language Foundation), which **is** named and assigned to `SB-P-1.13` — but a notification-specific instance of language handling does not automatically follow `SB-P-1.13` by that overlap alone, since `SB-P-1.13` is not named as the notification-delivery owner either.
- All 9 items are classified `BUILD NOW` / `CORE-ARCH` in the FCTM (i.e., approved-tier work in principle), with assigned mission `PENDING FOUNDER ASSIGNMENT`.

**Row-ID map:**

| Row ID | Obligation |
|---|---|
| `22-§12-1` | Recipient identity/role |
| `22-§12-2` | Language (overlaps `SB-P-1.13`'s Human Language Foundation, §22-§8) |
| `22-§12-3` | Channel preference/availability |
| `22-§12-4` | Template/provider requirements |
| `22-§12-5` | Delivery/retry state |
| `22-§12-6` | Duplicate suppression |
| `22-§12-7` | Privacy |
| `22-§12-8` | Link to originating business event |
| `22-§12-9` | Delivery tracked separately from business-event completion |

**Not established:** whether SB-P-1.12 should build this Foundation now, whether it belongs with a later mission that has not yet named it, or whether it needs its own new mission. No source answers this; it is not Claude Code's or Mission Control's to decide by default.

**Admissible options and their consequences — presented neutrally, no option preferred:**

| Option | What it means | Build/delivery consequence | Verification/acceptance consequence | Governance step required |
|---|---|---|---|---|
| (a) SB-P-1.12 builds it now | The 9 obligations are added to this mission's own `BUILD NOW` scope | Extends this mission's Blueprint/EIS/build surface beyond the currently-approved rows; delivery timeline for SB-P-1.12 extends to cover the Foundation | This mission's own Verification Checklist/Experience Verification Matrix would carry these 9 rows | A Founder decision naming SB-P-1.12 as owner, then a canonical FCTM row update from `ESCALATED`/`PENDING FOUNDER ASSIGNMENT` to `IN SCOPE` — not performed by Stage 4 assembly on its own |
| (b) An existing later mission builds it | One of the already-created SB-P-1.1x missions takes ownership, despite no current Build Plan §9–12/§15 citation naming it for this obligation | SB-P-1.12 does not build the Foundation; any SB-P-1.12 feature needing notifications would depend on that mission's own delivery schedule | Verification burden shifts entirely to the receiving mission's own Verification Checklist | Because no naming source currently exists, this is a **new** assignment proposal, not a citation of existing approved text — it needs the Founder's actual decision and, functionally, the same kind of Build Plan mission-scope clarification other named splits already have, then a canonical FCTM row update |
| (c) A separate, not-yet-created workstream/mission | A new mission ID is authorized specifically for the Notification Foundation | Delays any feature's dependence on the Foundation until that new mission completes its own full Source 18 lifecycle from Stage 1 | That new mission would carry its own independent Verification Checklist | Requires the Founder to authorize creating a new mission (its own Stage 1 Intake Pack), not merely an FCTM row edit |

**What is blocked until decided:** these 9 rows are not excluded from Blueprint traceability — they remain visible and citable as unresolved blockers, and any later, separately authorized Stage 4 draft must carry their exact row IDs with an explicit `ESCALATED` stop. What is blocked is treating them as **approved assigned scope**: no lock, authorization or acceptance may rely on them, and they may not be acted on, locked or accepted (Source 18 §3.2 item 3), until the Founder decides. **The current MC-13 authorization permits no Stage 4 drafting at all, for any row, regardless of how this item resolves** — resolution of this item alone does not itself open Stage 4; that remains a separate, later authorization.

---

## Decision Group 2 — Shared Location Foundation ownership and per-feature disclosures (T7, 6 `ESCALATED` rows)

**The question is two separate questions, not one:**
1. Who builds the shared, purpose-limited Location primitive itself (Contract 22 §16's instruction to "use one primitive rather than independent tracking systems")?
2. For each feature that later consumes location, which mission is responsible for supplying that feature's own required disclosures — why location is needed, who may see it, when it is captured, how long it is retained, and when access ends?

These are separable: naming a consuming mission (e.g., attendance/delivery, already under `SB-P-1.18`) does **not** by itself answer who builds the shared primitive underneath it.

**Established facts:**
- Contract 22 §16 defines 7 items total. **1 is already resolved and is not part of this question:** `22-§16-2` ("default continuous employee surveillance is rejected") is confirmed `IN SCOPE` for SB-P-1.12 on direct citation to Contract 21 §21's own already-approved obligation (`21-§21-1`, no continuous employee surveillance through permissions tooling) — a design constraint on this mission's own Permission Engine, independent of whether any location feature is ever built. **This is not a request to approve continuous employee surveillance; the opposite is already decided and stays decided.**
- The remaining 6 items have no Build Plan §9–§12 or §15 naming source, independently re-verified the same way as Group 1.
- A separate, already-resolved row — `22-§29-9` (acceptance scenario: "attendance/delivery location uses the purpose-limited shared primitive") — is `ASSIGNED TO LATER MISSION` (`SB-P-1.18`), because attendance and delivery are named consumers under Contract 17 §9/§10, already owned by `SB-P-1.18`. **This resolves who consumes location for that one named use case; it does not resolve who builds the shared primitive itself** (`22-§16-1`), which remains open.

**Row-ID map:**

| Row ID | Obligation | Status |
|---|---|---|
| `22-§16-1` | Shared purpose-limited primitive (construction) | `ESCALATED` — open |
| `22-§16-2` | Reject continuous employee surveillance | **Not open** — `IN SCOPE`, already resolved |
| `22-§16-3` | Each feature must define why location is needed | `ESCALATED` — open |
| `22-§16-4` | Each feature must define who may see it | `ESCALATED` — open |
| `22-§16-5` | Each feature must define when it is captured | `ESCALATED` — open |
| `22-§16-6` | Each feature must define how long it is retained | `ESCALATED` — open |
| `22-§16-7` | Each feature must define when access ends | `ESCALATED` — open |
| `22-§29-9` | Attendance/delivery consumption of the primitive | **Not open** — `ASSIGNED TO LATER MISSION` (`SB-P-1.18`), already resolved |

**Not established:** who builds the shared primitive; whether the 5 per-feature disclosure obligations travel with each consuming feature's own mission (so `SB-P-1.18` would supply them for attendance/delivery, a later mission for any other location-consuming feature) or need a single foundation-level answer now.

**Question 1 — admissible options for building the shared primitive itself (`22-§16-1`), and their consequences — no option preferred:**

| Option | What it means | Build/delivery consequence | Verification/acceptance consequence | Governance step required |
|---|---|---|---|---|
| (a) SB-P-1.12 builds it now | `22-§16-1` is added to this mission's own `BUILD NOW` scope | Extends this mission's build surface; delivery timeline extends to cover the primitive's construction | This mission's own Verification Checklist would carry `22-§16-1` | Founder decision naming SB-P-1.12 as owner, then a canonical FCTM row update — not performed by Stage 4 assembly alone |
| (b) An existing later mission builds it (e.g. `SB-P-1.18`, the only currently-named location consumer) | A named consuming mission also takes ownership of the shared primitive's construction, despite no Build Plan §9–12/§15 citation naming a primitive-construction owner | SB-P-1.12 does not build the primitive; any SB-P-1.12-adjacent feature needing location would depend on that mission's delivery schedule | Verification burden shifts to the receiving mission | New assignment proposal, not a citation of existing text — needs the Founder's actual decision and a canonical FCTM row update; naming a consumer does not, by itself, establish this |
| (c) A separate, not-yet-created workstream/mission | A new mission ID is authorized specifically for the shared Location primitive | Delays feature dependence on the primitive until that mission completes its own Source 18 lifecycle | That new mission carries its own independent Verification Checklist | Requires Founder authorization of a new mission, not merely an FCTM row edit |

**Question 2 — admissible options for who supplies each feature's 5 disclosures (`22-§16-3`–`-7`: why, who may see it, when captured, how long retained, when access ends), and their consequences — no option preferred:**

| Option | What it means | Build/delivery consequence | Verification/acceptance consequence | Governance step required |
|---|---|---|---|---|
| (a) Each consuming feature's own mission supplies its own disclosures | No single foundation-level answer; whichever mission builds a location-consuming feature authors that feature's 5 disclosures | For the one currently-named consumer (attendance/delivery, `SB-P-1.18`), disclosure work would sit with that mission's own build; any future location-consuming feature's mission would do the same at that later time | Each consuming mission's own Verification Checklist carries its own feature's disclosure obligations | `SB-P-1.18`'s existing `22-§29-9` assignment covers consumption, not disclosure-authoring; whether that alone answers disclosure ownership for `SB-P-1.18`, or needs its own confirmation, is for Mission Control/Founder to say — each future, not-yet-named consumer would recur as its own question later |
| (b) A single foundation-level disclosure rule is authored once, centrally | Whoever builds the shared primitive (Question 1) also authors one reusable disclosure pattern/template all consuming features must use | Front-loads disclosure-authoring work into the primitive's own build, regardless of who that is | One Verification Checklist item at the foundation level, plus a compatibility check per later consuming feature | Founder decision on centralizing the rule, tied to whichever Question 1 answer is chosen |

**What is blocked until decided:** same boundary as Group 1 — the 6 open rows remain visible and citable as unresolved blockers, and any later, separately authorized Stage 4 draft must carry their exact row IDs with an explicit `ESCALATED` stop. What is blocked is treating them as approved assigned scope: no lock, authorization or acceptance may rely on them until the Founder decides. The current MC-13 authorization permits no Stage 4 drafting at all, regardless of how this item resolves.

---

## Decision Group 3 — Residual `anon` privilege finding (T4, security boundary)

**T4 is already `TRIGGERED`, not a trigger-or-not question for the Founder or Mission Control to decide.** Source 18's T4 text is literal and unconditional ("a Delta item classified `PRODUCT-AFFECTING`"), and MC-13 has already confirmed the canonical Stage 2 Delta classifies the residual `anon`-grant finding `PRODUCT-AFFECTING`. **The only open matter is narrower:** beyond the security objective Mission Control has already approved (removing the residual `anon` grant via workstream WS-B), is there any additional, genuinely unresolved Founder product, mission-assignment or acceptance choice — and if so, what exactly is it? **This is not a request to declare the live database grant safe or unsafe, or to authorize migration/production execution through this Product Mission.**

**Established facts (file-level, re-verified this Stage 3 preparation cycle — no drift since Stage 2):**
- `supabase/migrations/20260727000000_reconcile_default_grants.sql` grants `ALL` on six tables (`businesses`, `inventory_items`, `inventory_movement_idempotency_keys`, `inventory_movements`, `transaction_correction_events`, `transactions`) to `anon`, `authenticated` and `service_role`, plus `EXECUTE` on every function in the `public` schema, plus a forward-compatible `ALTER DEFAULT PRIVILEGES` clause extending the same grant to any future `postgres`-created object.
- `supabase/migrations/20260830120000_..._gate2a_c1_inventory_anon_privilege_hardening.sql` revokes this for the three Inventory tables only. Its own text explicitly excludes `businesses`, `transactions` and `transaction_correction_events` from its scope, and discloses (without correcting) a further `supabase_admin`-role default-privilege residual for objects created outside SQL migrations.
- Production execution status of the hardening migration is **`UNVERIFIED`**, per the repository's own authoritative migration index (`docs/migration/README.md`, row for this file): no primary application/ledger record found; a separate, later, explicitly authorized read-only verification is what the index itself calls for.
- All six originally-granted tables have Row-Level Security enabled with no policy scoped to `anon`/`PUBLIC` — **file-evidenced apparently default-denied anonymous table-row paths, conditional on the actual live grants, effective RLS/policies and function privileges** (not a claim about actual current runtime state). **This is not a safety finding.** A future permissive policy, or any `SECURITY DEFINER` function bypassing RLS, **could create exposure** — not proven automatic exploitability of the existing grant.
- The already-approved WS-B remediation objective (Build Plan §5.1/§10.1) exists to close this gap; nothing here proposes changing that objective.

**Not established:** live production database state (repository files only; `UNVERIFIED`); whether WS-B's already-approved objective already fully answers whatever Founder-level question exists here, or whether something beyond it remains open.

**What is blocked until decided:** T4 is triggered and stays triggered; what is blocked is Mission Control's own determination of whether an additional Founder-level question exists beyond WS-B (not self-cleared by Claude Code at any point in the six-round Stage 2 correction cycle or here), and if so, exactly what question. Until that determination, Stage 3 cannot close on this item. No specialist live-production provider access is requested or authorized by this document.

---

## Decision Group 4 — Derived constraints (T6) and the security/integrity assessment boundary (T8)

**The question:** do any of the three derived constraints below materially change merchant-facing, permission, denial, data-integrity or experience behavior in a way that needs Founder visibility — and is there any actual Product Truth conflict or infeasibility (T8) the Founder must resolve, as distinct from ordinary engineering planning?

**Established facts — three derived constraints, none of them approved Product Truth:**

| ID | Constraint | Materiality as recorded |
|---|---|---|
| DC-1 | `businesses.owner_id` is `UNIQUE` today — the schema structurally allows only one Owner-equivalent account per business. Building Contract 21 §4's Manager/Employee membership model requires a new membership table (e.g. `business_members`), not just new RLS policies on the existing column. | Flagged as a schema-design implication of already-approved work, not a behavior change by itself. |
| DC-2 | The residual `anon` grant's file-evidenced apparently default-denied anonymous table-row paths (Group 3) are conditional on no table ever getting an `anon`/`PUBLIC`-scoped RLS policy and no `SECURITY DEFINER` function bypassing RLS — not a claim about actual live grant/RLS/privilege state. This mission's own Manager/Employee RLS policy authoring (WS-A/WS-B) must not introduce either, or the existing grant's exposure could change. | A design constraint on how this mission's own work must be built; does not change approved Product Truth. |
| DC-3 | Contract 20 §16 and Contract 17 §13/§14 (this mission's slice of otherwise-later-mission contracts) cannot be fully verified end-to-end by this mission alone — their surrounding features (onboarding flow, dashboard content) belong to `SB-P-1.19`/`SB-P-1.17`. This mission's own acceptance evidence for those specific rows will be scoped to the permission-setup/enforcement mechanics only. | Affects how the eventual Verification Checklist and Experience Verification Matrix must scope those rows; not a change to approved Product Truth. |

**T8 boundary — what is and is not being assessed here:** the only Product Truth conflict or infeasibility finding on record at this stage is the `anon`-grant security finding already presented in Group 3; no other conflict or infeasibility was found across the full 373-row FCTM. Separately, the MC-02 §4.2 Stage 7 separation condition — an actual Security & Permissions Architecture specialist, independent of whoever authors Blueprint Sections 1–19, reviewing feasibility/risk findings before Stage 7 — **remains unnamed**. This is not itself a T8 trigger; it is a precondition Mission Control must satisfy before Stage 7, named here so it is not lost. Claude Code cannot self-appoint this reviewer.

**Not established:** whether Mission Control judges any of DC-1/DC-2/DC-3 as materially changing product behavior in the T6 sense; the identity of the Stage 7 independent reviewer.

---

## Summary table — all 15 `ESCALATED` rows

| Group | Rows | Count | Open question |
|---|---|---|---|
| 1 — Notification Foundation | `22-§12-1` – `22-§12-9` | 9 | Who owns/builds the Foundation |
| 2 — Location Foundation | `22-§16-1`, `22-§16-3`–`22-§16-7` | 6 | Who builds the shared primitive; who supplies each feature's disclosures |
| **Total** | | **15** | matches the canonical Stage 2 FCTM `ESCALATED` count exactly (`03-stage2-populated-fctm.md` §G) |

Not counted above because already resolved, not open: `22-§16-2` (`IN SCOPE`), `22-§29-9` (`ASSIGNED TO LATER MISSION`, `SB-P-1.18`).

---

## What is not asked here

- No approval of any specific assignment for the 15 rows is requested or implied.
- No assertion about live production SQL/RLS state is requested; only repository-file evidence is presented, with production status stated as `UNVERIFIED`.
- No approval of continuous employee surveillance is requested; that is already rejected (`22-§16-2`, `IN SCOPE`).
- No Stage 4 Blueprint content, EIS, implementation, migration, production or delivery action is requested or authorized by this document.

## Non-critical-path work unaffected

Source 18 §6 Stage 3 blocks only what relies on the triggering rows. The remaining 358 FCTM rows (373 − 15 = 358, i.e. 228 `IN SCOPE` + 98 `ASSIGNED TO LATER MISSION` + 2 `DELEGATED` + 30 `NOT APPLICABLE`, all non-`ESCALATED`, no further adjustment) are not reopened by this brief and do not themselves require a Founder decision. **This is not a statement that those 358 rows alone constitute an approvable complete Blueprint** — Blueprint completeness is Mission Control's own Stage 5 Gate 10 test, not asserted here. Whether Stage 4 drafting may begin **at all** is not resolved by any of these 15 rows, T4 or T6 individually: the current MC-13 authorization permits **no Stage 4 drafting of any kind**, and opening Stage 4 remains a separate, later authorization regardless of how Groups 1–4 resolve.

---

**This document does not conclude, decide or record any Founder decision. It is a prepared draft for Mission Control's review before any Founder dialogue is treated as formally opened by the repository.**
