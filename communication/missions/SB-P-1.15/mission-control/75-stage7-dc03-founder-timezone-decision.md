# SB-P-1.15 — MC-74: Founder DC-03 Timezone Policy Decision

**PROPOSED GOVERNANCE RECORD — effective canonically only after Founder human merge.** Explicit Founder approval received in Mission Control conversation on 2026-10-11 to the recommendation: **Option B with Option A's mandatory confirmation safeguard, and Option C reserved for exceptional migrations**.

## 1. Authority and limits

Source 18 Stage 7, Founder-approved Product Truth, FPDR-03 and canonical MC-73. Protected main at preparation: `2387e57b382c9c584f53b799e5bd9da5f676cb7c`, MC-73 blob `f809bf4284c073d0aafbe7948fcd5e3df293ef86`. PR #870 and PR #898 remain frozen OPEN/DRAFT; do not alter or merge. This record captures the **Founder decision**, not executed engineering, implementation permission, runtime verification, Stage 7 acceptance or Blueprint lock.

## 2. DC-03 — approved policy direction

For **existing businesses lacking an authoritative approved business timezone**, Smart Business may **suggest** a timezone based on reliable business-location context, showing clearly that it is a proposal. The suggestion is **non-authoritative** until the **authorized Owner explicitly confirms** it, or chooses another valid timezone. A proposal must never silently become an effective timezone.

**Before authorized Owner confirmation**, timezone-dependent schedule activation and new timezone-dependent briefing occurrences for that business remain **HELD**. Maintain transparent merchant-visible explanation and confirmation path. Do not assume `Asia/Kolkata` solely because the merchant is in Kerala; it may be offered as a suggestion only when grounded in reliable context. Existing approved business timezones are not invalidated merely by this decision.

**Historical and financial integrity:** Preserve original Ledger dates, posting meaning, existing records, audit attribution and source-as-of provenance. No retroactive historical timezone conversion, silent date reinterpretation, duplicate occurrence generation, backdated notifications or fabricated catch-up runs. Previously generated briefings retain their authentic timestamps and provenance. Unconfirmed or changed timezone must not imply past briefing schedules actually occurred.

**Confirmation authority:** Owner only (subject to current authenticated tenant/permission enforcement). Record who confirmed, when, prior approved value if any, chosen IANA timezone and effective forward-only boundary. Any future timezone change requires separately governed, auditable, prospective treatment; no automatic re-dating. Staff/Manager delegation for timezone confirmation is **not approved** by this decision.

**Option C:** A controlled exception/migration mechanism may be designed for conflict-bearing legacy data, pre-existing pending schedules or unusual historical conditions, with explicit approval and audit. It is **not** the routine merchant flow and not a license for automatic migration.

## 3. Mandatory engineering reconciliation before Stage 7 disposition

Claude Code shall reconcile this decision with FPDR-03 and the formal Stage 7 Engineering Review: state machine for unconfirmed/confirmed/changed business timezone; no scheduling before confirmation; concurrency/idempotency and activation fence; occurrence identity and midnight/business-day boundaries; truthful latest-valid native display with scheduled/generated/source-as-of; existing pending/legacy schedules and retries; owner authorization/revocation; historic Ledger immutability and audit; user-facing wording and exceptions. Preserve material hold `4-§16-1` until this design is auditable and sufficient. Do not pre-empt unresolved technical details or assert testing.

DC-03 **product-policy direction is Founder decided** but **DC-03 engineering closure is NOT yet verified**. `24-§16-1`, FDB-1(d2), DTX/PQ-2, tenant isolation, native-first notifications, read-only AI/zero writes, migration/retention/restore, later-owned dependencies and any actual Source 18 T7/T8 remain governed by previous authorities. Formal Claude Code Stage 7 row coverage remains **694 IN SCOPE**; Mission Control separately dispositions Stage 7 after material reconciliation.

## 4. Absolute restrictions

**NO implementation, SQL, Supabase, deployment, executed tests, EIS, Stage 7 approval, Stage 8 Blueprint lock or 07e publication.** Do not modify Product Truth, Source 18, FCTM, frozen Blueprint, specialist reports, annexes, PR #870 or PR #898 under this narrow decision-record PR. Additional technical design changes require established source and Founder authority. **STOP FOR FOUNDER HUMAN MERGE.**
