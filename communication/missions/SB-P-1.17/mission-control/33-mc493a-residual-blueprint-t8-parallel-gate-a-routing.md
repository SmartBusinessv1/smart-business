# SB-P-1.17 — MC-493A Residual Blueprint T8 Reconciliation and Parallel Gate A Routing

**Status:** PROPOSED — effective only following Founder human merge and Mission Control post-merge verification.  
**Mission:** SB-P-1.17 Manager Operations, Source 18 v1.2, Stage 10.  
**Baseline:** `main@e98bf3f6c577f844d9c0275572690ff89fb0fecd` (PR #1047 merged).  
**Corrected draft EIS:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md` blob `9438cb59f20294ec93eeda429908a577ac7e2055`.  
**Locked Blueprint:** `bc4615f84959a79e6b242f622aae928901fbe959`; **FCTM:** `cb79088d3fa59f8b3226fd9d11ff9c9573666670`.  
**Scope:** Documentary residual cross-artifact T8 interpretation and decision routing ONLY. No Blueprint/EIS/FCTM/source changes, technical signoff, implementation, lock or migration.

## 1. Verified correction and precise residual contradiction

PR #1047 (reviewed head `b6f9ca83bbad87a6999dbb7fa4172ed1cd9cdda6`, merge `e98bf3f6c577f844d9c0275572690ff89fb0fecd`) changed exactly `EIS17-SUP-06`; SA-03 Financial and SA-05 Supabase Architecture returned finding-scoped **ACCEPT**. The canonical EIS now states that supplier `owed_by_business` balance/settlement rules belong to SB-P-1.17, remain **FIN-01 PROVISIONAL**, and that SB-P-1.16 `EIS16-BAL-01` defines customer balance only. Goods receipt never records payment.

**Residual contradiction:** locked SB-P-1.17 Blueprint §20.4.3 still provisionally describes supplier payment/credit as being “on the SB-P-1.16 balance contract” (D16/FIN-01), despite:
- SB-P-1.14 `EIS14-LDG-02` specifying only generic credit direction (`owed_to_business` / `owed_by_business`);
- SB-P-1.16 `EIS16-LDG-02` explicitly assigning supplier `owed_by_business` to SB-P-1.17;
- SB-P-1.16 `EIS16-BAL-01` defining **customer** receivable balance rather than supplier payable; and
- corrected `EIS17-SUP-06` disavowing customer balance reuse.

**Evidence pins:** SB-P-1.14 EIS blob `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`; SB-P-1.16 EIS blob `46fffd7b140940854c9b2b847517dde2f17584df`; original SB-P-1.17 EIS `8280967f2805cfed17778da3fc76c90b2f2f5ead`; corrected EIS `9438cb59f20294ec93eeda429908a577ac7e2055`. GA-01 adjudication blob `6d3b1731b6c889f5ae271dff935e0a51ec1bcdd9`; Gate 1 acceptance `cde3c8972fd1cbfe3f2f8905be133c8a81181ebf`; correction authorization `13c29e5359578a94ce15e6a4dc62a0dbd483d235`.

**Decision:** The single EIS-row misattribution has been corrected and two targeted specialists accepted the correction. However, **cross-artifact documentary T8 stays OPEN** because the earlier locked Blueprint language is still in conflict. This is a *source interpretation/documentary* issue, not demonstrated database or product impossibility.

## 2. Narrow interpretation for formal Source 18 governance

**Proposed authoritative interpretation, not an amendment to locked text:**
1. The words “SB-P-1.16 balance contract” in Blueprint §20.4.3 cannot transfer supplier payable calculation or settlement ownership to SB-P-1.16 because that contract explicitly covers customers.
2. The Blueprint's supplier payment/credit feature remains a provisional **SB-P-1.17** obligation, grounded in SB-P-1.14 direction/writer primitives and current approved supplier-side scope, without borrowing SB-P-1.16's customer equation or advance.
3. **FIN-01 PROVISIONAL** continues. No supplier-payable aggregate formula, allocation/overpayment, credit-note, void or reversal rules may be inferred solely from §20.4.3.
4. Existing locked Blueprint stays byte-identical in this PR. Mission Control must assess Source 18 authority for a **non-amending interpretive annotation/decision**, or seek explicit Founder authority for a separately scoped Blueprint correction if interpretation alone cannot remedy the contradiction. An EIS editor may not amend or override the Blueprint by implication.
5. **No automatic T8 closure.** A subsequent formal Mission Control resolution must cite the governing authority and exact source artifact SHAs, record interpretation versus textual amendment, obtain required human approval, and secure targeted financial/cross-EIS review. Until then classify residual T8 as OPEN; technical T8 WATCH is independent.

## 3. Decision owners and necessary outputs

| Work | Accountable actor | Minimal output | Condition |
|---|---|---|---|
| R1: Source 18 interpretive authority check | Mission Control governance / Founder if locked Blueprint authority requires | Citation-backed yes/no whether a formal annotation may resolve Blueprint wording without a Blueprint edit; stop for Founder if uncertain | Read-only |
| R2: Residual documentary T8 disposition | MC + SB-P-1.14/16/17 domain-owner consultation; SA-03 and SA-05 targeted input | One recorded cross-artifact reconciliation decision referencing Blueprint §20.4.3 and corrected EIS SHA | No presumed closure |
| R3: Locked Blueprint textual amendment if required | Founder through distinct Source 18 authorization | Explicit scope, text, owner, separate PR and lock-governance trail | Not authorized here |
| R4: Supplier-specific technical contract | SB-P-1.17 supplier finance + SB-P-1.14 Ledger technical owner; SA-05 security consultation | Read-only compatibility matrix and unresolved payable reader/repayment/reversal/Manager-permission cases | FIN-01 and technical T8 WATCH remain |
| R5: Other Gate A decisions | Named GA-02–GA-09 owners / Founder where genuinely required | Decision-specific facts, options, source trace and narrow approval route | May proceed in parallel as separate governed tasks |

No duplicated full Stage 10 specialist review is requested.

## 4. Independent supplier-payment technical holds

The corrected EIS is NOT a completed supplier settlement design. Keep distinct:
- target-level or event-based supplier payable computation and safe active/void/corrected aggregation;
- eligibility and commit-time authority for applying a governed Ledger `repayment` to an `owed_by_business` supplier credit;
- negative/overpayment, supplier returns/notes and any new merchant-visible behavior needing Founder decision;
- payment reversal/void, idempotent retry, unknown-commit outcome and preserved audit;
- Manager financial permission, protected read/write exposure and cross-tenant isolation.

No EIS16 customer formula, `SECURITY INVOKER` workaround, shadow Ledger, fifth POS principal or unapproved SQL/API operation is adopted. Unresolved technical questions must not be mistaken for documentary T8 closure evidence.

## 5. Parallel GA-02–GA-09 routing, independent of supplier semantics

| Gate A | Primary question | Owner / next documentary action |
|---|---|---|
| GA-02 / MC410-R01 | Four-principal merchant-authorized POS commit; provider authenticity ≠ merchant grant | MC + SB-P-1.12 kernel/SA-01 security + SA-04 POS: compare compliant authority routes; Founder only if novel authority policy |
| GA-03 / MC410-R02 | Trusted POS sale with unmapped stock: when does governed revenue post? | MC + SB-P-1.14/SA-03 + SA-04: produce product-effect alternatives; **Founder decision required if policy unresolved** |
| GA-04 / EQ17-13 | Single database transaction Ledger/stock; cannot use sequential RPCs | SB-P-1.14 Ledger + SB-P-1.12 Supabase + SA-05: feasibility design and proof obligations |
| GA-05 / MC410-R04A | Correct governed paired reversal | Ledger/POS/stock owners + SA-03/05/04: reversal and fault cases |
| GA-06 / MC410-R04B | Closing completeness, time window, late inputs, attestations | Closing + SB-P-1.15 timezone + Ledger/POS: exact state transitions; Founder only for user-facing unresolved policy |
| GA-07 / EIS17-SEC-02 | Least-privilege protected writes vs revoked direct DML and invoker wording | SB-P-1.12 kernel/security + SA-05: command/executor authority design |
| GA-08 / EQ17-01/02 | Manager scoped grants and protected Reference Cost/owner intelligence | SB-P-1.12 permissions + SA-01: formal allow/deny/read and stale-grant matrix |
| GA-09 / U-11, DPOS | Neutral Scenario B, indirect operator inference, legal notices/retention, real-source/qualified POS assurance | SA-02 provisional privacy + qualified India legal counsel + SA-04/merchant; identify external proof and screen T6 if merchant-visible change |

**Parallelism rule:** These read-only decision inquiries may be scoped/authorized independently while R1/R2 proceeds. They cannot alter EIS, Product Truth, POS connections or other approved assets just because this planning docket is merged. Respect Owner/Manager/Staff isolation and WhatsApp-first human confirmation. No automatic Provider/POS selection or custom core POS modifications.

## 6. Fastest compliant Stage 10 close path

1. Founder merges this document-only PR after CI; MC verifies its canonical SHA. This ratifies a proposed routing plan, not R1 source authority or T8 closure.
2. MC commissions R1/R2 focused Source 18 authority/adjudication, plus separate read-only GA-02–GA-09 decision work where the responsible rooms and authority are available.
3. MC obtains exact Founder decisions only on actual new merchant-visible choices, and separately authorizes any narrowly necessary Blueprint/EIS delta under Source 18.
4. Once accepted decisions are canonical, combine compatible EIS corrections into one small, reviewable PR rather than reopening all five specialist reports. Finding-targeted SA-01/03/05/04/02 re-review applies only to changed domains.
5. EIS Lock, Stage 11 and implementation remain unavailable until every applicable Source 18 gate and unresolved hold has a legitimate disposition; runtime proof, licensed India legal assurance and qualified real-source POS review cannot be fabricated.

**Explicit non-authorizations:** No Blueprint, FCTM, EIS, source contract, database, SQL, migration, provider, POS, feature implementation, production deployment, T8 closure, Gate A product choice, Stage 11 or EIS Lock.

**MC-493A requested disposition:** adopt this narrowly bounded **reconciliation and parallel decision routing plan** upon human merge, retaining all holds and source-owner authority.

**STOP FOR FOUNDER MERGE AND MISSION CONTROL POST-MERGE VERIFICATION.**
