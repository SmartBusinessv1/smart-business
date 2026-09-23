# SB-P-1.12 — Stage 3 Founder Product Decision Record (DRAFT)

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** Source 18 v1.2, Stage 3 — Founder Decision Gate: Decision Record
**Status:** `DRAFT — NOT EFFECTIVE UNTIL MISSION CONTROL REVIEW AND FOUNDER/HUMAN MERGE OF THIS PULL REQUEST`
**Prepared by:** Claude Code, MC-02 appointed Definition Actor, Stage 3 documentary preparation only
**Authority for this preparation:** `communication/live/instruction.md` (MC-16), effective on human merge of PR #627, `main@7e9f9e97734d435154d6c7627434121b08012af3`; companion authority `mission-control/05-stage3-decision-record-preparation-authorization.md` (MC-16)
**Canonical brief:** PR #626, `main@488874b728524a98c8633f8d839fc745a2b29859`; final reviewed head `e3bd024e1bcec5ef466859f52c5e862a80445e5c`
**Decision provenance:** Founder Riyas PK, in dialogue with Smart Business Mission Control, confirmed 2026-09-23, after the #626 Founder Brief was merged. Transcribed here from Mission Control's own recorded account in `mission-control/05-stage3-decision-record-preparation-authorization.md` §1 — no public chat transcript URL exists or is invented; that document is the primary provenance record for this transcription.

---

## What this document is, and is not

This is a **DRAFT** Founder Product Decision Record (Source 18 §6 Stage 3), faithfully transcribing the Founder's confirmed answers to the four decision groups presented in the canonical Founder Brief (PR #626). It does not itself make any decision — it records one already made by the Founder, for Mission Control's review and the Founder's own human merge before it becomes canonical. It is **not** a `Founder Decision Gate — NOT TRIGGERED` record (Stage 3 was, and remains historically, `TRIGGERED`). It does not authorize Stage 4 Blueprint drafting, EIS, implementation, production or migration. It does not certify live production security state.

---

## Founder Decision `FPDR-1` — Shared Notification Foundation

**Affected FCTM rows:** `22-§12-1` through `22-§12-9` (9 rows; Contract 22 §12, previously `ESCALATED`).

**Decision:** A distinct Shared Notification Foundation workstream is created **within the existing `SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO` mission** — no new mission ID. The Foundation must be reusable across missions, features and channels. `SB-P-1.20` (WhatsApp channel adapter) must reuse the Foundation rather than duplicate its notification business logic.

**FCTM disposition after reconciliation:** `ASSIGNED TO LATER MISSION` → `SB-P-1.15`, all 9 rows.

**What this decision does not do:** it does not create a new Product Mission; it does not change any row's `BUILD NOW` build commitment or `CORE-ARCH` commercial classification; it does not itself specify the Foundation's implementation, schema or delivery timeline — those are `SB-P-1.15`'s own future Stage 2–4 work, subject to its own Mission Truth Pack and Blueprint process.

---

## Founder Decision `FPDR-2` — Shared Location Foundation primitive

**Affected FCTM row:** `22-§16-1` (1 row; Contract 22 §16's shared purpose-limited primitive, previously `ESCALATED`).

**Decision:** A distinct, reusable, purpose-limited Shared Location Foundation workstream is created **within the existing `SB-P-1.18 — Controlled Business Add-ons` mission** — no new mission ID. `SB-P-1.12` continues to own its own previously-approved authority, permission and business-isolation rules, which the Location primitive consumes but does not redefine.

**FCTM disposition after reconciliation:** `ASSIGNED TO LATER MISSION` → `SB-P-1.18`.

**What this decision does not do:** it does not authorize a specific capture mode, retention period or consent/monitoring policy for the primitive itself — those remain `SB-P-1.18`'s own future design work, bounded by `22-§16-2`'s already-settled rejection of continuous employee surveillance (unchanged, see below).

---

## Founder Decision `FPDR-3` — Feature-specific location disclosures

**Affected FCTM rows:** `22-§16-3` through `22-§16-7` (5 rows; Contract 22 §16's per-feature disclosure requirements, previously `ESCALATED`).

**Decision:** The **owning mission of each location-consuming feature** — not the Location Foundation's own owner by default — must itself define and demonstrate that feature's five required disclosures: purpose, authorized audience, capture timing, retention duration and access-end rule. `SB-P-1.18` supplies these five values specifically **for its own named features, attendance and delivery**. A shared disclosure structure or template may exist as an **additional, optional convenience**; it cannot replace any consuming feature's own five defined and demonstrated values.

**FCTM disposition after reconciliation:** `ASSIGNED TO LATER MISSION` → `SB-P-1.18`, all 5 rows, **explicitly scoped to `SB-P-1.18`'s own attendance/delivery features**. See `claude-code/12-stage3-gate-evidence-and-row-reconciliation.md` for the general-obligation scope note the FCTM's single "Assigned mission" cell cannot, by itself, fully express.

**What this decision explicitly does not do — preserved from the Founder Brief's own framing, not silently narrowed:**
- It does **not** assign every future location-consuming feature's disclosures to `SB-P-1.18` merely because `SB-P-1.18` owns the shared primitive (`FPDR-2`) or supplies the first two named instances. **Any later mission that builds a further location-consuming feature owns that feature's own five disclosures**, under this same recurring Contract 22 §16 requirement, independent of `SB-P-1.18`.
- It does **not** authorize any new location-capture mode, retention period or consent/monitoring policy beyond what is already Contract 21/22's approved Product Truth.

**Unchanged, not reopened by this decision:**
- `22-§16-2` ("default continuous employee surveillance is rejected") remains `IN SCOPE` for `SB-P-1.12`, on its existing citation to Contract 21 §21's own approved obligation (`21-§21-1`).
- `22-§29-9` (the attendance/delivery acceptance scenario) remains `ASSIGNED TO LATER MISSION`, `SB-P-1.18`, on its existing citation.

---

## Founder Decision `FPDR-4` — T4, T6 and T8: no additional product requirement

**Decision:** The Founder confirmed that existing security and privacy commitments remain **unchanged**, and that the T4/T6/T8 findings presented in the Founder Brief impose **no additional product requirement** beyond what is already approved.

**This confirmation is explicitly not:**
- production-safety certification of the residual `anon` grant or any live database state;
- a waiver of the already-approved WS-B remediation objective;
- an assertion that WS-B's remediation, or any migration, has actually been executed in production;
- Stage 4 Blueprint authorization;
- independent security acceptance, or a substitute for the still-outstanding MC-02 §4.2 Stage 7 independent Security & Permissions Architecture review.

**T4 — residual `anon` grant (Delta, `PRODUCT-AFFECTING`):** T4 was, and remains, historically `TRIGGERED` — this decision does not and cannot retroactively rewrite that trigger as `NOT TRIGGERED`. The already-approved WS-B remediation objective (Build Plan §5.1/§10.1) is retained unchanged. Original migration grants cover six tables (`businesses`, `inventory_items`, `inventory_movement_idempotency_keys`, `inventory_movements`, `transaction_correction_events`, `transactions`) plus all functions plus a forward-compatible default-privilege clause; a later file-level hardening migration remediates three Inventory tables only. **Actual production grant, RLS, function-privilege and hardening-execution state remains `UNVERIFIED`** — no live probe was performed or authorized by this decision. The separate, narrowly-scoped read-only security fact-finding need identified in Stage 2 remains open.

**T6 — derived constraints DC-1/DC-2/DC-3:** on the evidence reviewed, Mission Control determined DC-1 (membership-schema implication), DC-2 (residual-grant/RLS-authoring boundary) and DC-3 (cross-mission verification-scope limitation) are design and evidence-planning implications of already-approved behavior, not a material change to merchant-facing, permission, denial, data-integrity or experience behavior, and not new Product Truth requiring a separate Founder decision on present evidence. This determination does **not** approve any specific membership-table design as Product Truth — that remains `SB-P-1.12`'s own future engineering-implementation work, subject to its own review.

**T8 — Product Truth conflict or infeasibility:** no **additional, newly-proven** Product Truth conflict or infeasibility was established beyond the T4 finding already presented. The security/integrity screen and the Stage 7 independent review remain open and are not waived by this decision. Any actual new conflict, material behavior change or infeasibility discovered at a later stage re-triggers the appropriate Founder gate (T7/T8), exactly as Source 18 §6 Stage 3's own text provides.

**Stage 7 independent reviewer:** the MC-02 §4.2 Security & Permissions Architecture specialist remains **unappointed** and must be named and independence-checked before Stage 7 proceeds. This decision does not appoint one; Claude Code cannot self-appoint.

---

## What remains unchanged across all four decisions

- No new Product Mission ID is created by any of `FPDR-1`–`FPDR-4`.
- No new location-capture mode, retention period, consent/monitoring policy, merchant-facing feature, commercial-classification change or pricing is authorized by any of them.
- `BUILD NOW` / `CORE-ARCH` classification is preserved on all 15 reconciled rows.
- Stage 3 remains historically `TRIGGERED` (T7 by the 15 formerly-`ESCALATED` rows, T4 independently by the `PRODUCT-AFFECTING` residual-`anon` Delta finding). This record resolves the T7-triggering assignment questions and confirms no additional T4/T6/T8 product requirement; it does not retroactively declare Stage 3 `NOT TRIGGERED`, and Source 18 §6 Stage 3's own text makes that record unavailable once any row has carried `ESCALATED`.
- No Stage 4 Blueprint Sections 1–19, EIS, implementation prompt, code, migration, production mutation, deployment, delivery synchronization or publication is authorized by this record.

---

## Effectiveness

This record is **DRAFT** and has no effect until: (1) Mission Control substantively reviews this pull request and records its own exact-head decision within it, and (2) the Founder or an authorized maintainer human-merges the pull request to canonical `main`. Until then, the canonical Stage 2 FCTM (PR #624, MC-12) — with all 15 rows `ESCALATED` — remains the last canonical record, per `mission-control/05-stage3-decision-record-preparation-authorization.md` §1.
