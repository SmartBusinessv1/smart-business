# SB-P-1.15 — Stage 2 Delta Evidence

**Mission:** SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO  
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`  
**Baseline:** `main@eacc46104b43b4db137693ab5e84728da14a249c`, 2026-10-09  
**Prepared by:** Claude Code, appointed Definition Actor, under SB-P-1.15-MC-05

The Delta records changes since each source was approved, and the gap between locked sources and the verified repository. Each item is classified `NO PRODUCT EFFECT`, `ENGINEERING ONLY` or `PRODUCT-AFFECTING` (Source 18 Stage 2). **Classifications here are the Definition Actor's proposals. Only Mission Control records the final classification and the T1–T8 gate decision (MC-05 §4).**

Evidence class used throughout: **repository inspection at the baseline**. Repository absence shows that the canonical repository contains no such code; it is not evidence about any process running outside the repository. Live runtime, provider and CI facts are `UNVERIFIED — ACCESS REQUIRED` unless an exact query result is quoted.

## 1. Source drift register

| Comparison | Command | Result |
|---|---|---|
| Stage 1 intake `3e0e144d` → discovery `3b3789b8` | `git diff --name-status 3e0e144d 3b3789b8` | Only SB-P-1.15 mission records added (Stage 1 pack, MC-03, MC-04) |
| Discovery `3b3789b8` → baseline `eacc4610` | `git diff --name-status 3b3789b8 eacc4610` | One file added: `mission-control/06-stage2-discovery-publication-disposition.md` (MC-05) |
| Manifest blobs at `eacc4610` | `git rev-parse eacc4610:<path>` for every path in FCTM Section 0.4 and Truth Pack Part 0 | All equal the Stage 1 manifest; **no source drift** |
| Before push | Same comparison against then-current `origin/main` | Recorded in `07-stage2-completion-report.md` |

## 2. Delta items

### Δ-01 — No scheduler or background-job runtime

- **Evidence:** the 24 files in `supabase/migrations/` contain no `cron`, `pg_cron` or scheduler definition. `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql` states that "no cron/scheduler is introduced". There is no `supabase/functions/` directory. No reminder, Daily Intelligence or job code exists in `src/`.
- **Reading:** Contract 22 §18, Contract 11 and Contract 4 require one shared scheduler foundation that does not exist yet. That is the expected state for a `NOT IMPLEMENTED` contract; it changes no product behaviour.
- **Runtime:** availability of database scheduling extensions, function runtimes or any external scheduler is `UNVERIFIED — ACCESS REQUIRED`.
- **Classification:** `ENGINEERING ONLY`. Rows: `22-§18-*`, `4-§13-*`, `11-§18-*` (dependency `DSCH`).

### Δ-02 — No business timezone field

- **Evidence:** no `timezone` or `time_zone` field in any migration or in `src/integrations/supabase/types.ts`. Contract 4 §2 states "Business timezone controls delivery"; Contract 11 §4 lists timezone in the reminder model.
- **Reading:** a timezone source is required for delivery and recurrence. Any default value is a design choice (DC-03), not Product Truth.
- **Classification:** `ENGINEERING ONLY`. Rows: `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`.

### Δ-03 — Correction notification field has no consumer in the repository

- **Evidence:** `public.transaction_correction_events` (migration `20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql`, lines 32–33) carries `notification_status text NOT NULL DEFAULT 'pending'` and `notification_sent_at timestamptz`. `correct_transaction` inserts `notification_status` (line 137; redefined in `20260720142248_97de5be2-ef9f-4283-9318-9eb9f9a6cca1.sql`, line 87). Nothing else in `src/` or `supabase/` reads or updates either field. The SB-P-1.9 completion report (`docs/implementation/SB-P-1.9/completion-report.md`, blob `6ebd088a`, lines 73 and 289) records that events are created `pending` and that delivery "will be wired when the approved notification infrastructure is implemented in a subsequent mission".
- **Reading:** the repository contains a queued-state field and no delivery path. Whether any process outside the repository ever delivered these notifications is **not established**; production delivery history is `UNVERIFIED — ACCESS REQUIRED`.
- **Classification:** `ENGINEERING ONLY` for the absent consumer. The user-facing statement is Δ-04.

### Δ-04 — User-visible correction-notification promise (PROVISIONAL `PRODUCT-AFFECTING` — T4 CANDIDATE)

- **Verified user-visible statement:** `src/routes/_authenticated/transactions.tsx` (blob `30ae3a99b2e7e15ae837adf713edc6e165268f40`, line 936), in the "Confirm Transaction Correction" dialog: "The correction will also be reported to the business owner through the approved notification workflow." The text was introduced in commit `d1217ca9` (2026-07-20).
- **Historical engineering requirement:** `docs/implementation/SB-P-1.9/engineering-contract.md` (blob `0c08b4145204b8767ebdbc20c43bb1051c3ae761`; header "Status: APPROVED", "Approval Date: 2026-07-20", created by Codex, reviewed by Mission Control) requires "Trigger the owner WhatsApp notification from the transaction correction event" (line 52), with related acceptance statements at lines 98, 100 and 113. The same contract states "Do not permit employee transaction editing as part of this workflow".
- **Current product-authority check:** a search of the 25 mature contracts, the Build Plan, the Completion View, `merge/active/**` (including Source 11), the Phase 1 guide and the locked SB-P-1.12, 1.13 and 1.14 Blueprints and EIS found **no current requirement** that a transaction correction notify the Owner. Contract 3 §17 (via `3-§17-7`, SB-P-1.14) requires the Ledger to handle "failed downstream notification", without naming which notifications exist. Contract 22 §12 (`22-§12-8`, FPDR-1) requires notifications to link to their originating business event, without naming correction events.
- **Repository behaviour:** `correct_transaction` admits only the business Owner (`owner_id = auth.uid()`; migration `20260720142204…`, line 101). No role or membership model exists in the migrations. In the canonical code, therefore, the person correcting and the person the dialog says will be notified are the same Owner. No consumer of `notification_status` exists (Δ-03).
- **What is established:** the user-visible promise exists, and the repository contains no delivery path.
- **What is not established:** whether owner notification of corrections is current Product Truth; whether any unseen production process delivers it; and which mission owns any repair. **This Delta does not infer that SB-P-1.15 owns the SB-P-1.9 repair, and it does not propose deleting the commitment or adding an unapproved outbound channel** (MC-05 §1).
- **Classification:** **PROVISIONAL `PRODUCT-AFFECTING`; T4 candidate** (MC-05 §2). Mission Control performs the independent source/runtime-truth and current-product-authority check before final Stage 2 approval. Draft issue `FDB-1` in `founder/01-stage2-decision-brief.md`.
- **Rows touched:** none in the mature contracts by name. `22-§12-8` carries the `FDB-1` marker as the only row whose obligation a correction-event consumer would exercise.

### Δ-05 — Ask CFO exists only as a placeholder card

- **Evidence:** `src/routes/_authenticated/dashboard.tsx` (blob `a339fc8e`, around line 340) renders a `ComingSoonCard` titled "Ask CFO", described as "helpful, non-authoritative guidance", under copy stating "nothing here is active yet".
- **Reading:** consistent with Contract 2 (read-only, advisory) and with the `NOT IMPLEMENTED` register state.
- **Classification:** `NO PRODUCT EFFECT`.

### Δ-06 — No CI or runtime evidence available

- **Evidence:** `gh api repos/SmartBusinessv1/smart-business/commits/eacc4610…/check-runs` returned `total_count` 0; the combined status for the same commit is `pending` with 0 statuses. `gh pr checks` reports "no checks reported" for PRs #857, #858 and #859. GitHub support case #4816157 remains open (MC-29).
- **Reading:** no CI pass exists for any SB-P-1.15 record. **Absence of checks is not a pass.**
- **Classification:** `ENGINEERING ONLY` (evidence hold).

### Δ-07 — Live communication and Stage Ledger are stale

- **Evidence:** `communication/live/instruction.md` was last changed in `e93c23de` and still describes the MC-29 merge gate. `communication/missions/SB-P-1.15/README.md` Stage Ledger shows Stage 1 "IN PREPARATION"; MC-03 accepted Stage 1.
- **Reading:** both are index or communication records that Mission Control reconciles separately (MC-02 §4, MC-03 §4). Neither is an authority record.
- **Classification:** `NO PRODUCT EFFECT`.

### Δ-08 — Ask CFO read-only rule is restated across sources

- **Evidence:** Contract 2 §7 states "current canonical implementation rules prohibit destructive/write SQL classes for Ask CFO". The read-only rule appears in Source 01 (line 209), Source 02 (line 1050), Source 04 (line 304), Source 05 (line 224) and P00 (line 645). No Ask CFO implementation exists to apply it.
- **Classification:** `NO PRODUCT EFFECT`.

### Δ-09 — No role or membership model in the repository

- **Evidence:** no `business_members`, `memberships`, `app_role` or `user_roles` definition in any migration. Row-level security keys business access to `businesses.owner_id = auth.uid()`.
- **Reading:** the Manager, Employee and external-role boundaries of Contracts 2, 4 and 11 depend entirely on the unimplemented SB-P-1.12 kernel (`D12`). Scenario B part 2 cannot be demonstrated until roles exist.
- **Classification:** `ENGINEERING ONLY` (dependency `D12`).

### Δ-10 — Institutional learning sources unchanged

- **Evidence:** `git diff --name-status 8a44bc98 eacc4610 -- organizational-learning/ docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md` is empty.
- **Classification:** `NO PRODUCT EFFECT`. Detail in `05-stage2-institutional-learning-intake.md`.

## 3. Summary

| ID | Item | Proposed classification |
|---|---|---|
| Δ-01 | No scheduler/background-job runtime | `ENGINEERING ONLY` |
| Δ-02 | No business timezone field | `ENGINEERING ONLY` |
| Δ-03 | Correction notification field has no repository consumer | `ENGINEERING ONLY` |
| Δ-04 | User-visible correction-notification promise | **Provisional `PRODUCT-AFFECTING`; T4 candidate** |
| Δ-05 | Ask CFO placeholder card | `NO PRODUCT EFFECT` |
| Δ-06 | No CI or runtime evidence | `ENGINEERING ONLY` |
| Δ-07 | Live communication and Stage Ledger stale | `NO PRODUCT EFFECT` |
| Δ-08 | Ask CFO read-only rule restated across sources | `NO PRODUCT EFFECT` |
| Δ-09 | No role or membership model | `ENGINEERING ONLY` |
| Δ-10 | Institutional learning sources unchanged | `NO PRODUCT EFFECT` |

## 4. Still requiring evidence (`UNVERIFIED — ACCESS REQUIRED`)

- whether any production process has ever delivered correction notifications (Δ-03, Δ-04);
- live Supabase production and test state, including the paused Free test project (SU-494995);
- availability of database scheduling extensions or function runtimes (Δ-01);
- live business data needed to choose a timezone source (Δ-02);
- GitHub Actions availability and required checks (#4816157; Δ-06);
- AI provider configuration and data-control acceptance (`DAI`);
- Lovable and Resend administrative access (operational recovery lanes; not product channels);
- live grant state of the Build Plan §5.1 residual `anon` gate.

None of these blocks documentary Stage 2. Each blocks any claim of runtime behaviour.
