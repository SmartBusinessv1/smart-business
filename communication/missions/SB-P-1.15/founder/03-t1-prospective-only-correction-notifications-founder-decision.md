# SB-P-1.15 — Founder Decision Record: Historical Correction Notifications (T1)

**Record:** SB-P-1.15-FPDR-02 — T1 Prospective-Only Historical Correction Notification Disposition  
**Founder decision communicated:** 2026-10-09  
**Mission Control source baseline:** protected `main@5576f79c83be70b08f9055d7494ebc33f8c13769`  
**Governance status:** PROPOSED RECORD — EFFECTIVE ONLY AFTER AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Implementation authority:** NOT AUTHORIZED

## 1. Question presented

Under SB-P-1.15-MC-11 through MC-15, the Owner correction-notification commitment remains approved, but the treatment of **historical correction events already recorded before a functioning notification workflow begins** was an open material T1 Founder decision. The repository contains a legacy `notification_status` defaulting to `pending`, but actual production counts, historic delivery and present recipient eligibility are **UNVERIFIED — ACCESS REQUIRED**.

## 2. Exact Founder decision — Option A

**Founder approves prospective-only notifications for new transaction corrections. Do not automatically notify Owners about historical correction events. Retain historical records subject to applicable record-retention, audit, privacy and legal obligations.**

This choice resolves the *product-policy question* of whether prior correction events should be replayed when an actual notification system becomes available: **NO historical notification replay**.

- From a future **separately authorized activation boundary**, newly occurring eligible corrections may enter the notification request flow, subject to current Owner/recipient authority, anti-duplication, auditability, and separately approved channel-delivery scope.
- Events before that boundary **must not generate a newly dispatched correction notification solely because a new notification workflow was enabled**. Do not infer a fixed calendar cutoff, a migration filter, an existing live backlog size, or confirmed past delivery from this record. Engineering must separately propose an auditable activation boundary and event identity.
- Retain older correction records under applicable and validated retention/erasure/minimization policies; **no retention duration or exemption is invented here**, and no status field may be bulk-updated to `sent`, `cancelled` or `discarded` merely on the strength of this product decision.
- The commitment to notify on **future qualifying corrections** remains intact. The decision is not permission to suppress fresh legitimate events or expand notification beyond permission and delivery-channel rules.

## 3. Mission and architecture boundaries

Preserve the existing split: SB-P-1.14 owns the governed correction-event specification, SB-P-1.12 current-recipient eligibility, SB-P-1.15 reusable request/state foundation, SB-P-1.20 WhatsApp delivery. **Correction-specific event-to-foundation integration ownership (FDB-1 d2) remains UNASSIGNED**, pending explicit T3/T7 traceability and Mission Control allocation. Truthful interim correction-dialog wording (FDB-1 d1) remains a **separately governed corrective action**, not authorized here.

Do not assume the earlier notification mechanism exists, works, or has delivered notices. Founder-approved native-only interim delivery (FDB-2), read-only Ask CFO (FDB-3), 07:00/10:30/22:00 business-local Daily Intelligence, and all upstream dependency gates stay unchanged.

## 4. Decision scope and residual gates

- **T1 product-policy answer: RESOLVED by Founder, pending human merge for canonical effect.**
- Technical translation into Section 20–21 engineering risk/holds, migration disposition, test evidence and delivery behavior is **NOT AUTHORIZED BY THIS RECORD**. Following canonical crossing, Mission Control must separately authorize narrow PR #870 reconciliation; until then the draft must remain unchanged.
- **T6 remains OPEN** for missed or delayed intelligence slots (skip vs late). Default timezone for existing merchants and historic business-date semantics remain under materiality watch; no default/backfill assumption approved.
- Independent Stage 7 specialist reviews and non-author parallel challenge remain **PENDING**; no reviewer appointed here.
- U-3, U-5, DC-06, D12/D13/D14, DTX/PQ-2 and legal/retention, security, migration, CI/provider/runtime holds remain. This record supplies **no statutory retention period** and no determination of existing-record disposal.
- Stage 7 final acceptance and Stage 8 Blueprint lock are **NOT AUTHORIZED** by this record alone.

## 5. Repository boundary

This decision is recorded in a **separate, one-file governance PR** and must not modify PR #870, the Blueprint, FCTM, Product Truth, Build Plan, source contracts, code, migrations, provider settings or any historical correction records. A Founder Decision Record publication requires human merge and post-merge verification before it is canonical.

**STOP FOR AUTHORIZED-HUMAN MERGE.**
