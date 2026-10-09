# SB-P-1.15 — Stage 6 Builder Review

**Mission:** SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO  
**Stage:** Source 18 v1.2 Stage 6 — Builder Review  
**Reviewer:** Claude Code — Stage 6 Builder Review owner. Claude Code is also the Stage 2–4 Definition Actor; **this review is not independent assurance** (SB-P-1.15-MC-03, MC-10 §3).  
**Authorization:** SB-P-1.15-MC-11, `communication/missions/SB-P-1.15/mission-control/12-stage6-discovery-builder-review-publication-authority.md` (blob `5cf54c9fd1a25ebf853fc4e771e6b27bbf4c92ec`), canonical at `main@a18de121970ad4c6ae4ff6beb267bc708bef5d49` (PR #866)  
**Reviewed artifacts:** Stage 5-accepted Blueprint Sections 1–19 (`docs/phase-1-mission-blueprint/active/SB-P-1.15.md`, blob `2fe8198933fe16c6ac0820ae73f15d1a7157207c`); canonical FCTM (blob `65eeaf8d31b81595b971c22895615a096555f84f`, 803 rows); SB-P-1.15-FPDR-01 (blob `0e0928fec1215ff91fa82386663d6a8f17f43bd2`); MC-09 (`ce88b0a2`), MC-10 (`5d5c5891`), MC-11 (`5cf54c9f`)  
**Status:** `DRAFT STAGE 6 FINDINGS — RECOMMENDATIONS AND EVIDENCE ONLY; NOT PRODUCT TRUTH; AWAITING MISSION CONTROL REVIEW`  
**Date:** 2026-10-09

Findings are recommendations and evidence. None edits the Blueprint, the FCTM or a Founder decision, and none is approved truth until Mission Control decides it. All 694 `IN SCOPE` rows, all 109 non-`IN SCOPE` dispositions, SB-P-1.15-FPDR-01 and Founder Scenarios A and B are preserved unchanged. **No implementation, schema, migration, provider, runtime or CI fact is claimed beyond the evidence below.**

## 1. Method and evidence

Read-only inspection at the base `a18de121`. Application code, schema and configuration are unchanged since the discovery base `c3c5f752` (`git diff --name-status c3c5f752 a18de121 -- src supabase lambda vite.config.ts package.json .github` is empty). No production system, test project, provider dashboard, Supabase CLI or deployment was accessed. Migrations were read as files; their live state is not asserted.

### 1.1 Repository evidence

| ID | Evidence (path, blob, line) |
|---|---|
| E-01 | `src/server.ts` (blob `20500c7f`) default export at line 47 contains only `async fetch(...)`; there is no scheduled handler. `vite.config.ts` (`2b8ccd12`) line 3 records nitro "build-only using cloudflare as a default target". No wrangler, cron or scheduler configuration exists in the repository; `supabase/config.toml` (`d4e05211`) holds only `project_id`. No `supabase/functions/` directory. None of the 24 migrations defines a cron. |
| E-02 | `supabase/migrations/20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql` (`982ce150`) line 3: `businesses.owner_id … UNIQUE` (one business per Owner); columns `name`, `category`, `locality`. No timezone field in any migration or in `src/integrations/supabase/types.ts`. No membership or role table. |
| E-03 | "Today" is device-local: `src/routes/_authenticated/dashboard.tsx` (`a339fc8e`) line 378 and `src/routes/_authenticated/transactions.tsx` (`30ae3a99`) line 88 use `format(new Date(), "yyyy-MM-dd")` against the DATE column `transaction_date`. |
| E-04 | `supabase/migrations/20260727000000_reconcile_default_grants.sql` (`4e2d3fa1`): line 35 `GRANT ALL ON TABLE` (existing tables), line 44 `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public`, lines 51–52 default `GRANT ALL ON TABLES` and lines 54–55 default `GRANT EXECUTE ON FUNCTIONS`, each to `anon, authenticated, service_role`. **A security-design finding, not proof of exposure:** effective access also depends on RLS, policies, function guards and the live environment. |
| E-05 | `src/integrations/supabase/transactions.ts` (`fe12c702`): `createTransaction` is a direct client `.insert` (line 92); correction calls `rpc("correct_transaction")` (line 58). `correct_transaction` admits only the Owner (`…/20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql`, `62f250f4`, line 101: `owner_id = auth.uid()`). |
| E-06 | Same migration line 32: `transaction_correction_events.notification_status text NOT NULL DEFAULT 'pending'`. No repository code reads or updates it. `transactions.tsx` line 936 tells the user the correction "will also be reported to the business owner through the approved notification workflow". **Production row counts and delivery history are `UNVERIFIED — ACCESS REQUIRED`;** it is not inferred that every historical correction stayed undelivered. |
| E-07 | `src/integrations/supabase/client.server.ts` (`f63eeb84`) builds a service-role client (`SUPABASE_SERVICE_ROLE_KEY`, lines 39–51) exported as `supabaseAdmin` (line 67), which bypasses RLS. Server functions authenticate with `requireSupabaseAuth` (`auth-middleware.ts`, `4ee311cf`, line 34). Authenticated callers do not make service-role use tenant- or permission-safe. |
| E-08 | `package.json` (`f7c3494c`): `date-fns`, `sonner`, `@aws-sdk/client-s3` present; **no AI SDK, no timezone library, no push/email/SMS library.** `lambda/parser` is a parser function only. |
| E-09 | `src/components/authed-header.tsx` (`647aa5a4`): navigation is Dashboard, Transactions, Inventory, Catalog. No Workspace, reminder, notification or intelligence surface. Ask CFO is a "coming soon" card (`dashboard.tsx` line 340). |
| E-10 | No GitHub Actions check runs on `main` or on PRs #857–#866 (Stage 2 Δ-06; `gh api …/check-runs` returned 0 at the Stage 2 baseline). |

### 1.2 Locked upstream specifications consulted (specifications only — not implemented, not verified)

| Specification | Content relied on |
|---|---|
| SB-P-1.12 EIS (`c444f750`) `EIS-AUT-01` | Automation runs are server-only trusted invocations; the acting principal is derived from the stored rule and its grantor's current authority |
| SB-P-1.12 EIS `EIS-ISO-04` | Privileged-operation contract for `service_role` |
| SB-P-1.12 EIS `EIS-KER-07` | Ask CFO is a distinct Owner-default capability, never inferred from a prompt or bounded view |
| SB-P-1.12 Blueprint (`77d52096`) FA-6 | Former Owner denied on every surface, including notification eligibility |
| SB-P-1.13 EIS (`9a1e723d`) `EIS13-AUTH-01`, `EIS13-CTX-02` | Server-derived principal; authorization before retrieval; no conversational handler uses `service_role` |
| SB-P-1.14 EIS (`899a0fe1`) `EIS14-CMD-02`, `EIS14-CMD-03` | Governed correction command; append-only correction event written only by the command |

### 1.3 Evidence categories

| Category | Content |
|---|---|
| **Source specification (locked, not built)** | D12 authority kernel, roles, automation identity; D13 Workspace, AI gateway, Human Language Layer, Basic Voice; D14 four-state Ledger and governed correction command; DTX single write path |
| **Repository implementation** | Owner-only auth; one business per Owner; sale/purchase Ledger; legacy correction RPC with a pending notification field; dashboard totals (E-02 to E-06, E-09) |
| **Verified runtime** | **None** for this mission's scope |
| **Unavailable** | Live Supabase and test state; scheduler runtime; AI provider; outbound channels; CI runs (`UNVERIFIED — ACCESS REQUIRED`) |

## 2. Lens outcomes

| Lens | Outcome |
|---|---|
| Merchant experience | Approved experience is coherent. Native-only before SB-P-1.20 is feasible but needs a visible native home and disclosure (B6-01, B6-08). Daily Intelligence will show many honest "no reliable data" states until D14 and later missions (B6-09). |
| Build feasibility | Every capability needs foundations that do not exist yet: scheduler runtime, timezone, roles, governed commands, AI gateway (B6-02 to B6-06, B6-10, B6-11). Nothing is infeasible in principle; most rows are dependency-gated. |
| Security and integrity | The default-grant posture, the service-role client and background jobs that run across many businesses are the main risks (B6-05, B6-07, B6-14). |
| Founder decisions | FDB-2 and FDB-3 are feasible within their limits (B6-08, B6-12). FDB-1 needs the ownership split of Section 4 and the open T1 question of Section 5. |

## 3. Findings

Each finding states the evidence, the affected FCTM rows and a recommendation for Stage 7. Recommendations are not decisions.

### B6-01 — No native surface exists for reminders

- **Evidence:** E-09. FDB-2 makes the app the only place a due reminder is seen before SB-P-1.20.
- **Rows:** `11-§6-1` to `11-§6-7`, `10-§5-7`, `BP-§10.4-A1`, `22-§12-3`.
- **Recommendation:** Stage 7 names the native due-item surface (a dashboard section, then the Workspace once `D13` exists) and where the FDB-2 disclosure appears. Natural-language and voice creation stay `D13`-dependent (`11-§5-1`, `12-§13-1`).

### B6-02 — No business timezone; "today" is device-local

- **Evidence:** E-02, E-03; DC-03.
- **Rows:** `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `11-§7-1` to `11-§7-3`.
- **Recommendation:** specify a business-authoritative timezone source and a business-day definition coherent with the device-local day merchants see today. Recurrence recomputes the next occurrence on a timezone change. Each occurrence has a stable identity so that retries never duplicate it.

### B6-03 — No scheduler runtime

- **Evidence:** E-01, E-08; Stage 2 Δ-01. Candidate runtimes (database scheduler, platform cron, AWS schedule) are all `UNVERIFIED — ACCESS REQUIRED`.
- **Rows:** `22-§18-1` to `22-§18-11`, `24-§5-4`, `4-§13-1`, `4-§13-2`.
- **Recommendation:** Stage 7 evaluates the runtime. **Missed or delayed slot behaviour is a T6 watch, not decided here** (Section 6).

### B6-04 — Native due display versus scheduled computation

- **Evidence:** FDB-2; Contract 4 §2.
- **Rows:** `4-§2-1` to `4-§2-3`, `4-§10-5`.
- **Recommendation:** under native-only delivery, due reminders can be shown when the app reads them, which reduces scheduler dependency for display. Daily Intelligence content is still anchored to the 07:00, 10:30 and 22:00 business-local slots. Keying each slot by business, local date and slot, with its "as of" time disclosed, is an engineering option for Stage 7, not a product change.

### B6-05 — Automation and scheduled-job identity

- **Evidence:** E-07, E-02; `EIS-AUT-01`, `EIS-ISO-04` (specifications).
- **Rows:** `11-§16-1` to `11-§16-6`, `11-§11-1` to `11-§11-15`, `22-§18-7`, `22-§18-11`, `11-§22-8`, `11-§22-9`.
- **Recommendation:** scheduled jobs and standing rules must not act as plain service role. The acting principal comes from the stored rule and the grantor's current authority, revalidated at run time; paused or revoked rules block execution. With no membership model, standing rules are Owner-only until `D12`.

### B6-06 — Scenario A part 2 is gated on the single write path

- **Evidence:** E-05; `DTX`/PQ-2.
- **Rows:** `BP-§10.4-A2`, `11-§10-1` to `11-§10-11`, `11-§22-6`, `11-§22-7`.
- **Recommendation:** the due reminder may offer and confirm the payment action now in specification. Execution waits for the governed command. A reminder request is never a payment (DC-04).

### B6-07 — Default grants and function EXECUTE (high-priority security design finding)

- **Evidence:** E-04; Build Plan §5.1.
- **Rows:** `22-§23-2`, `22-§29-3`, `2-§25-25`, `2-§25-27`.
- **Recommendation:** every table and function this mission adds would, under the recorded default privileges, carry `ALL` or `EXECUTE` for `anon`. That includes reminders, standing rules, notifications and intelligence snapshots. The EIS must state explicit grant and revocation posture. **A mandatory independent security/RLS specialist assesses this.** No runtime exposure conclusion is drawn.

### B6-08 — Shared Notification Foundation semantics under FDB-2

- **Evidence:** E-06; FDB-2; SB-P-1.12 Blueprint FA-6.
- **Rows:** `22-§12-1` to `22-§12-9`, `11-§17-1` to `11-§17-8`, `11-§22-10`.
- **Recommendation:** before SB-P-1.20, delivery means an in-app record. Native states (for example created, shown, acknowledged) must stay distinct from future channel states, and no status implies an out-of-app send. Recipient eligibility follows `D12`, including former-Owner denial. Deduplicate per event, recipient and channel.

### B6-09 — Daily Intelligence content is mostly dependency-gated

- **Evidence:** E-05 (sale/purchase only); DC-05.
- **Rows:** `4-§3-1` to `4-§3-10`, `4-§4-1` to `4-§4-8`, `4-§5-1` to `4-§5-10`, `4-§12-1` to `4-§12-5`.
- **Recommendation:** empty and partial states are first-class so the briefing stays calm. Where nothing material changed, it says so simply (`4-§4-8`, `4-§9-8`).

### B6-10 — Role behaviour cannot be demonstrated before D12

- **Evidence:** E-02; DC-06.
- **Rows:** `4-§7-1` to `4-§7-4`, `2-§3-1` to `2-§3-18`, `2-§25-5`, `BP-§10.4-B2`, `BP-§10.4-E3`.
- **Recommendation:** Manager subset granularity remains a security design question, not assumed binary (DC-06). Scenario B part 2 is gated on `D12`.

### B6-11 — Ask CFO read-only needs a data-layer and tool boundary

- **Evidence:** E-08 (no AI dependency); no read-only data role exists.
- **Rows:** `2-§7-1` to `2-§7-12`, `24-§12-8`, `2-§25-24`, `2-§25-26`, `BP-§10.4-B3`.
- **Recommendation:** read-only is enforced at the database and tool-registry level and negative-tested, not by prompt rules alone. Data questions use deterministic queries (`2-§5-7`, `2-§22-2`).

### B6-12 — FDB-3 before D14: credit-method sales are not receivables

- **Evidence:** E-05. SB-P-1.14 FPDR-1 (`9717b29d`) keeps existing `sale` + `payment_method = credit` rows as sales, not credit-state facts.
- **Rows:** `2-§5-3`, `2-§5-13`, `2-§11-3`, `2-§12-4`, `2-§25-7`, `BP-§10.4-B1`.
- **Recommendation:** **credit-method sales must not be presented as four-state credit entries or customer receivable balances.** Before `D14`, the honest answer to "Who owes me money?" is a qualified statement about credit-method sales, or a missing-data statement. Answer wording should be specified per data state. Scenario B part 1 is fully demonstrable only after `D14`; authoritative balances remain SB-P-1.16.

### B6-13 — Unsupported AI claims

- **Evidence:** no grounding mechanism exists; `DAI` unverified.
- **Rows:** `2-§6-1` to `2-§6-4`, `2-§24-1` to `2-§24-10`, `4-§10-1` to `4-§10-8`, `2-§25-13`, `2-§25-16`.
- **Recommendation:** answers cite the records they rest on and separate fact from interpretation. An AI-behaviour specialist tests fabricated facts, unsupported causes and accusation.

### B6-14 — Tenant isolation in background work

- **Evidence:** E-07.
- **Rows:** `22-§23-2`, `22-§29-3`.
- **Recommendation:** jobs that run across many businesses are the main leakage risk: one tenant's briefing or notification reaching another. Specify a per-business execution context with tenant-scoped reads and negative tests.

### B6-15 — No CI or runtime evidence

- **Evidence:** E-10; Stage 2 Δ-06.
- **Rows:** `22-§22-1` to `22-§22-6`.
- **Recommendation:** Stage 7 plans test tiers and the verification environment. **No CI pass is claimed.**

## 4. FDB-1 ownership split (analytical; SB-P-1.15-MC-11 §2)

The Founder commitment is kept (SB-P-1.15-FPDR-01 §2). This is an analytical split only, not a product or mission reassignment.

| Part | Analytical owner | Basis | Status |
|---|---|---|---|
| (a) Correction event | SB-P-1.14 governed correction command specification | `EIS14-CMD-02`, `EIS14-CMD-03`; Contract 3 §8 has no notification obligation | Specified; not implemented |
| (a) Recipient eligibility | SB-P-1.12 authority | FA-6; `D12` | Specified; not implemented |
| (b) Notification request and state foundation | SB-P-1.15 | `22-§12-1` to `22-§12-9`; SB-P-1.12 FPDR-1 | `IN SCOPE`; not implemented |
| (c) WhatsApp delivery integration | SB-P-1.20 | Build Plan §9 row 9 | Not started |
| (d1) Truthful interim correction-dialog wording | **Separate governed corrective-action candidate** | SB-P-1.15-FPDR-01 §2 ("separately authorized implementation/copy change") | No implementation authorization |
| (d2) Correction event-to-notification integration | **OWNERSHIP HELD — NO MISSION ASSIGNED** | SB-P-1.15-MC-11 §2 | Allocation needs Source 18 T3/T7 screening and FCTM/source traceability reconciliation first |

No new FCTM row, mission assignment, copy change or retroactive repair is proposed or made. The Blueprint keeps `O-FDB-1` as a post-FCTM overlay with `22-§12-8` as related capability only.

## 5. Open T1 Founder question — historical pending correction notifications

**Status: T1 MATERIAL OPEN QUESTION — FOUNDER GATE REOPEN REQUIRED (SB-P-1.15-MC-11 §3).**

- **The question:** the Founder confirmed the correction Owner-notification obligation but did not decide whether **previously recorded correction events** should generate notifications once a real delivery workflow is enabled.
- **What is and is not known:** the repository shows a `notification_status` field defaulting to `'pending'` and no consumer (E-06). That is **not** a factual finding that a production backlog exists. Live counts and delivery history are `UNVERIFIED — ACCESS REQUIRED`, and must first be separated from repository schema facts.
- **Choices a future Founder brief would bound** (MC-11 §3): prospective-only sending, a tightly controlled historical backfill, or another explicit policy. Each must avoid duplicate or out-of-context alerts and must not infer current notification eligibility from past ownership.
- **Not decided here.** No replay, discard or backfill behaviour is proposed. This question **blocks Stage 7 from deciding historical replay or backlog behaviour**, and Stage 8 lock cannot proceed with it unresolved.

## 6. T6 watch — missed or delayed Daily Intelligence slots

**Status: T6 WATCH — NOT YET DETERMINED (SB-P-1.15-MC-11 §4).**

- **Source:** Contract 4 §13 requires handling of delayed scheduler execution (`4-§13-1`) and duplicate job invocation (`4-§13-2`), but does not say whether a missed slot is skipped or delivered late.
- **Stage 7 duty:** separate implementation mechanics from merchant-visible behaviour. If choosing between skip and late delivery materially changes merchant expectations beyond existing sources, return to Mission Control for a T6 Founder determination **before specification or lock**.
- **No policy is selected here.** The rhythm remains **07:00, 10:30 and 22:00 business-local time** (`4-§2-1` to `4-§2-3`).

## 7. Founder decision boundaries and scenarios

- **FDB-2 (native-only interim):** feasible within its limit (B6-01, B6-08). No email, SMS, push, Resend or WhatsApp delivery is assumed before SB-P-1.20. The disclosure placement is a Stage 7 design item.
- **FDB-3 (qualified receivables):** feasible within its limit and heavily `D14`-gated (B6-12). Ask CFO stays permission-scoped and read-only.
- **Founder Scenarios A and B** are preserved without change and without new scenarios:

| Part | Row | Dependency gate |
|---|---|---|
| Scenario A part 1 | `BP-§10.4-A1` | `D13` for natural language, or an approved native form |
| Scenario A part 2 | `BP-§10.4-A2` | `DTX` |
| Scenario B part 1 | `BP-§10.4-B1` | `D14`, `DAI` |
| Scenario B part 2 | `BP-§10.4-B2` | `D12` |
| Scenario B part 3 | `BP-§10.4-B3` | Specifiable now (no write) |

## 8. Mandatory independent specialist reviews

Required at their governed later gates (Source 18 §4.8; SB-P-1.15-MC-11 §6). A non-author parallel specialist is also required because the same actor authored Stages 2–4 and this review.

| Specialist area | Must test |
|---|---|
| Security / RLS and default grants | E-04 posture for every new table and function; `anon` exposure; RLS and function guards; Ask CFO read-only boundary; DC-06 Manager granularity |
| Privileged client access | No plain service-role execution for jobs or rules; `EIS-AUT-01` and `EIS-ISO-04` conformance |
| Tenant isolation | Per-business job context; no cross-tenant briefing, notification or answer; former-Owner notification denial (FA-6) |
| Scheduler concurrency and idempotency | Occurrence keys, slot keys, notification deduplication, retries, timezone changes |
| Financial integrity | `DTX` continuation; no second write path; FDB-3 wording over credit-method sales |
| AI behaviour | Grounding; no fabricated facts or causes; no accusation; no prompt-induced writes |
| Migration safety | New schema; timezone column; forward mapping of the legacy `notification_status` field, without deciding the T1 backlog question |

## 9. Holds carried unchanged

- **Open items:** U-3 `20-§23-10` allocation held; U-5 retention unresolved; DC-06 not assumed binary.
- **Dependency holds:** `D12`, `D13`, `D14`, `DTX`/PQ-2, `DAI`, `DSCH`, `DNTF`, `D16` to `D20`.
- **Execution holds:** migration default-deny; no CI evidence; runtime and provider facts `UNVERIFIED — ACCESS REQUIRED`.
- **FDB-1 (d2)** ownership held; the T1 backlog question is open; the T6 catch-up watch is open.

## 10. Source 18 trigger screen

| Trigger | Status |
|---|---|
| T1 | **Open: historical pending correction-notification policy (Section 5).** Founder gate reopen required before Stage 7 decides replay behaviour |
| T2 | Not found |
| T3 | Not found. FDB-1 (d2) allocation would need T3/T7 screening when proposed |
| T4 | No new item. Δ-04 is resolved by FDB-1 |
| T5 | None |
| T6 | **Watch: missed or delayed Daily Intelligence slot behaviour (Section 6)** |
| T7 | Not found. No row moved, deferred, simplified or reassigned |
| T8 | Not found. No row is found infeasible; gated rows stay `IN SCOPE` with their dependency |

## 11. Stage 7 readiness

| Item | Readiness |
|---|---|
| Engineering Review inputs | Approved Sections 1–19, this Builder Review once approved, repository evidence E-01 to E-10, upstream EIS specifications |
| Can proceed in Stage 7 | Per-row feasibility and risk findings; scheduler runtime evaluation; timezone and business-day design; native notification state model; grant posture; read-only enforcement design; early delivery plan |
| Cannot be decided in Stage 7 without a further gate | Historical correction-notification replay or backlog behaviour (T1); missed-slot skip versus late delivery if it is merchant-material (T6); FDB-1 (d2) ownership (Mission Control allocation) |
| Specialists | Section 8 reviews; a non-author parallel specialist for the same-actor risk |

**STOP FOR MISSION CONTROL STAGE 6 CONTENT REVIEW.**
