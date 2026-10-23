# SB-P-1.17 — MC-499 GA-03 Founder Product Truth Decision: Financially Trusted POS Sale with Unmapped Inventory

**Status:** FOUNDER-DIRECTED DECISION — proposed canonical record, pending Founder human merge and Mission Control post-merge verification.  
**Mission:** SB-P-1.17 Manager Operations, Stage 10 Gate A.  
**Authority:** Founder explicit MC-499 direction; MC-495A activation (PR #1049, merge `a7c7c0dda6bab50a2fd683eed2894584af7fb264`; activation blob `9d23394d8f78b75c53058acd3d53c956d9c899d4`).  
**Scope:** GA-03 / MC410-R02 / `EIS17-TXN-09` / `EIS17-HOLD-16` only. No EIS/source/Blueprint/FCTM edit or implementation authorization.

## 1. Exact Founder decision

**SELECT OPTION A:** For an authenticated, financially trusted, deduplicated POS sale whose product-to-inventory mapping is unresolved, **record the trusted sale once as revenue in the sole SB-P-1.14 governed Ledger while holding any inventory movement that depends on unresolved mapping**. The later resolution of inventory mapping must not create duplicate revenue. No inventory quantity, SKU identity or stock movement may be fabricated or presumed.

This is a **conditional product rule**, NOT permission to post an unverified, spoofed, ambiguous, conflicting, reversed or unauthorized sale. All existing contracts for merchant authority, source provenance, classification, final confirmation, idempotency, commit-time authorization, unknown-outcome lookup, auditable original/correction event identities and truthful state presentation continue to apply.

A trusted financial sale may reach a Ledger-only outcome where stock is not yet eligible, but the resulting event and stock-exception state must remain explicitly associated. Once eligibility is established, a later separately authorized stock operation may use the preserved source event relationship and must not repeat the Ledger sale. When both effects are already eligible for an event, the existing atomic Ledger/stock composition requirement remains binding: one database transaction or none. GA-04 technical design must verify that this temporal/effect separation can be expressed faithfully within locked financial and inventory contracts, and return any genuine incompatibility under T8; no automatic authority to split an already eligible dual-domain commit is created.

## 2. What this decides and what it does not decide

**Decided by Founder:** The correct financial truth policy is *financially trusted revenue posts once; unmapped stock stays held* (Option A), not blanket suppression of the revenue event until inventory mapping resolves (Option B).

**Delegated to accountable domain owners:** Detailed governed-command state machine, financial eligibility predicate, source-record linkage, stock-exception state, later stock application, replay, duplicate suppression, reversal and partial/late resolution semantics. Domain owners must uphold SB-P-1.14 sole Ledger writer, SB-P-1.12 authority, Contract 13 POS import boundaries and SB-P-1.17 inventory conditions without asserting runtime capability as proven.

**Not decided / not authorized:** New privileged POS principal, source signature as merchant authorization, discretionary second Ledger writer, shadow revenue total, arbitrary financial posting before approved authority, duplicated revenue on later mapping, stock fabrication, sequential partial commits for effects that are concurrently eligible, new reversal policy, changes to approved closing state meanings, custom POS core modifications, production ingestion, SQL, migrations, vendor action, EIS Lock, Stage 11 or implementation.

## 3. Required minimum documentary EIS refinement — not made by this PR

Under subsequent *separately authorized* finding-scoped EIS edit, update `EIS17-TXN-09` and `HOLD-16` only insofar as necessary to express:
1. Financial-trust criteria and authority validated independently of inventory mapping eligibility.
2. One SB-P-1.14 governed Ledger posting for the trusted sale even while inventory mapping remains unresolved, with exact source-event and idempotency keys.
3. Held stock-effect state, source-event/financial-event correlation, no fabricated inventory and no duplicate revenue on mapping resolution.
4. Applicable atomicity rule when both financial and inventory effects are eligible at the same governed commit; safe coordination with GA-04.
5. Pending stock-mapping visibility, unknown-outcome resolution, correction/reversal dependencies and negative tests for replay, source conflicts, authority revocation and mapping races.

**Do not replace** `HOLD-16` with a blanket closed status solely because Product Truth has been chosen: policy uncertainty is resolved by Founder; technical composition, canonical EIS wording and assurance must still be completed. GA-04/HOLD-17, GA-05/HOLD-18, GA-02 authority/DPOS and other Stage 10 holds remain open independently.

## 4. Evidence, review and T-screen

Financial Integrity room GA-03 return in Founder-supplied `consolidated Gate A.md` explicitly presented alternatives A (post trusted revenue, hold stock) and B (hold both), classified selection as Founder Product Truth, and retained MC410-R02/HOLD-16 pending decision. Domain owners must cross-check the exact accepted SB-P-1.14 EIS (blob `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`) and Contract 13 (blob `4426e8b1f9e856047759bdb03e2f5b83820f8cc0`) before EIS editing. Corrected current SB-P-1.17 EIS blob `9438cb59f20294ec93eeda429908a577ac7e2055`.

**T1/T3:** Previously unresolved approved-source choice is resolved by this explicit Founder direction, pending canonical record merge. **T8:** Not proven impossible; retain architecture feasibility WATCH for GA-04/GA-05 and source-reconciliation edges. **T2/T4/T5/T6/T7:** Re-screen if actual derived EIS edits or technical options change locked boundaries; do not pre-clear unknown deltas.

**Targeted assurance after separate EIS correction:** SA-03 Financial Integrity, SA-04 POS Integration and SB-P-1.14 Ledger owner; include SA-05 only where the exact atomic composition or executor boundary is changed. Do not repeat the five full Stage 10 specialist reviews. Later real-provider and runtime proof remain attached to their own gates, not invented as prerequisites for making this documentary decision.

## 5. Next routing and STOP

Once this decision record is merged and independently verified, Mission Control may include Option A in a single minimum reviewable Gate A EIS correction authorization alongside separately accepted technical outcomes; resolve residual Blueprint T8 through its independent Source 18 governance route. Escalate to Founder only for genuinely novel product choices revealed by those technical returns.

**STOP — Founder merge required. EIS editing, lock and implementation remain WITHHELD.**
