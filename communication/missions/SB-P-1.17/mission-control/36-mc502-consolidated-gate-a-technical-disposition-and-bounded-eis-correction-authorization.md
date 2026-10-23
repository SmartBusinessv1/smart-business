# SB-P-1.17 — MC-502 Consolidated Gate A Technical Disposition and Bounded EIS Correction Authorization

**Status:** PROPOSED; effective only upon Founder merge and Mission Control post-merge verification.  
**Mission/Stage:** SB-P-1.17 Manager Operations / Stage 10.  
**Current corrected draft EIS:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `9438cb59f20294ec93eeda429908a577ac7e2055`.  
**Founder GA-03 Option A decision:** `communication/missions/SB-P-1.17/mission-control/35-mc499-ga03-founder-revenue-posting-decision.md`, blob `34192d723a38335e3ee0bc99940dc35703862729`; PR #1050 merged `9d5d8fcded6b386bdae3448016aeabda4df7d488`.  
**Prior activation:** MC-495A blob `9d23394d8f78b75c53058acd3d53c956d9c899d4`. **Locked Blueprint:** `bc4615f84959a79e6b242f622aae928901fbe959`; **locked FCTM:** `cb79088d3fa59f8b3226fd9d11ff9c9573666670`.  
**Evidence received:** Founder-supplied `consolidated Gate A.md`, security GA-02/08, finance GA-03/05/06, Supabase GA-04/05/07, previous provisional MC-408A legal research, current GA-09 POS read-only return. These are documentary room reports, not independent runtime or professional assurance.  

## 1. Mission Control determination

**ACCEPT FOR FINDING-SCOPED DOCUMENTARY CORRECTION PLANNING**, not as blanket closure of Gate A holds. Five completed Stage 10 specialist reports are not reopened. GA-03 Option A is now Founder-owned canonical Product Truth: financially trusted, merchant-authorized POS sale posts once through SB-P-1.14 governed Ledger while ineligible/unmapped inventory is held; mapping later never duplicates revenue. The rule does not permit sequential partial commits where both domain effects are eligible in the same governed command.

**Decision ownership:** GA-02, GA-04–08 and neutral GA-09 can use existing approved technical/security/privacy boundaries, subject to respective domain owner confirmation; no broad new Founder Product Truth approval is needed at present. A Founder return is required only for a truly novel merchant authority, closing, refund/negative stock, staff attribution or otherwise changed visible behavior. Existing Source 18 T8 and legal/POS specialist assurance remain separately open.

## 2. Gate-by-gate accepted route, actual hold and EIS targets

| Gate | Documentary route supported by reviewer evidence | Decision authority / remaining evidence | EIS correction target / hold |
|---|---|---|---|
| GA-02 / MC410-R01 | Owner-authorized source-scoped delegation, current `EIS-AUT-01` automation-run principal; integration is channel, vendor auth is not merchant auth; one of four existing principals | SB-P-1.12 security/authority owner + POS owner confirm exact grant/source/commit-time checks; no fifth principal | `POS-02`, `HOLD-15` — remains pending acceptance |
| GA-03 / MC410-R02 | **FOUNDER DECIDED OPTION A**; trusted Ledger once, unmapped stock held; no duplicated later posting | Founder choice settled; SB-P-1.14 Ledger + SB-P-1.17/POS + SA-05 confirm transaction/exception semantics | `TXN-09`, `HOLD-16` — policy resolved, technical hold open |
| GA-04 / EQ17-13 | One PostgreSQL transaction coordinator, or public-wrapper/internal-primitives decomposition, while preserving sole governed Ledger writer | Ledger + SB-P-1.12 executor + Supabase owner validate compatible idempotency/confirmation; **T8 WATCH** | `TXN-03`, `HOLD-17` — exact primitive pending |
| GA-05 / MC410-R04A | One atomic append-only linked dual-domain reversal/correction; no fake revenue/expense or sequential repairs | SB-P-1.14 Ledger owner validates governed correction primitive + inventory + Supabase; **T8 WATCH**; negative-stock policy escalate only if truly undefined | `TXN-06/07`, `HOLD-18` — primitive pending |
| GA-06 / MC410-R04B | Positive source-specific completeness: cursor/watermark, bounded export or permissioned attestation; preserve existing COMPLETE/PARTIAL/REVIEW-REQUIRED/UNKNOWN semantics | Closing + POS/timezone owners choose cutoff, late/reopen, source-specific proof; no false COMPLETE | `CC-03/06`, `HOLD-19` — contract pending |
| GA-07 / EIS17-SEC-02 | Keep revoked caller DML; invoker only where privileges already suffice; protected writes use upstream narrow definer executor / strictly bound server path | SB-P-1.12/SA-05 security validate exact privileges/revocation; implementation ACL proof later | `SEC-02` — documentary wording correction ready |
| GA-08 / EQ17-01/02 | Object-scoped capability grants for items/suppliers/counters, bounded ceiling and revocation; `catalog.cost.read` separate from margin and cost write | SB-P-1.12 permissions + SB-P-1.17 owner select server-owned normalized rows or versioned sets; default Owner financial confidentiality; own attendance existing `EIS-EXT-01` | `AUTH-02/03`; scope representation pending; cost-read distinction ready |
| GA-09 / U-11, DPOS | Scenario B neutral operator-free; do not presume anonymity from counters/times; allowlist/redact unexpected operator data at ingress/logs/exports; preserve evidence | Privacy/SA-02 provisional + POS/SA-04; qualified India counsel and actual vendor assurance for identifiable operator use remain OPEN | `PRIV-01/02`, possible `POS-05`/CTR clarification; `HOLD-20/21` remain |
| Residual GA-01 Blueprint §20.4.3 | EIS `SUP-06` cross-reference corrected; Blueprint wording still provisionally points to SB-P-1.16 customer balance | Separate Workstream A Source 18 interpretive authority determination; Founder amendment only if required | **No edit to corrected SUP-06 here; documentary T8 OPEN** |

## 3. Exact tiered EIS correction authorization

This docket does **not itself change the EIS**. Upon Founder merge, Mission Control is authorized to issue **one separate, tightly scoped EIS editing instruction** for the already decided or directly upstream-grounded rows below. **Editor must make one EIS-only PR**, preserve all unrelated rows and hold states, and return exact diff/SHAs for targeted reviewers. No self-merge.

### Tier 1 — immediately documentable within existing approved contracts

1. **`EIS17-TXN-09`** — insert Founder GA-03 Option A with strict financial-source trust, current POS/merchant authority, one SB-P-1.14 governed Ledger posting, inventory exception held, no fabricated stock, event correlation, no duplicate Ledger posting after mapping, and one-database-transaction guarantee where both effects are eligible together. Revise `HOLD-16` wording to state **Founder posting policy decided; technical contract and targeted review remain open** — do not mark closed.
2. **`EIS17-SEC-02`** — eliminate blanket `SECURITY INVOKER` implication; use `SECURITY INVOKER` only for privileges actually granted, the approved narrow `SECURITY DEFINER` executor for protected commands with revoked caller DML, or an explicitly bounded `EIS-ISO-04` server route. Never grant direct DML just to satisfy the invoker function.
3. **`EIS17-AUTH-03`** — explicitly split Reference Cost **read** from any cost-event **write**: `catalog.cost.read` and protected projections govern supplier purchase-price/history; no Manager operational grant implies cost or margin; cost-read alone does not authorize new cost-write. Retain the need for owner review if changing protected cost-event write contract.
4. **`EIS17-PRIV-01/02`** — clarify that unapproved operator fields are excluded/redacted before durable raw-event/dead-letter/log/export/AI paths for Scenario B; neutral counter/period evidence may be indirectly identifying and must not be claimed anonymous or silently matched to employee roster; U-11 and identifiable use remain held. Preserve original permitted financial provenance and approved merchant-visible neutral Scenario B. Escalate any granularity change implicating T6, rather than silently narrowing the product.

### Tier 2 — conditional inside the same EIS PR only after domain-owner written acceptance of the precise contract

5. **`POS-02` / `HOLD-15`:** Owner-authorized source-scoped `EIS-AUT-01` delegation, principal derived server-side and grantor/source revalidated at commit. Need SB-P-1.12 authority owner acceptance; POS owner source-auth assurance. Keep DPOS separate.
6. **`TXN-03` / `HOLD-17`:** exact one-transaction coordinator vs composable internal primitive contract. Need SB-P-1.14 Ledger and Supabase/SB-P-1.12 owner signoff; T8 watch until documented.
7. **`TXN-06/07` / `HOLD-18`:** valid governed Ledger reversal/correction primitive and paired inventory compensation in same transaction; source identity, out-of-order hold, negative-stock invariant. Need Ledger/stock and Supabase owner signoff.
8. **`CC-03/06` / `HOLD-19`:** per-configured-source positive completeness evidence + timezone cutoff/late input attestation semantics; closing/POS/timezone owner signoff.
9. **`AUTH-02`:** decide server-owned object scope representation, ceiling at preview and commit, strict non-union scope and stale-grant revocation. Need SB-P-1.12 permissions owner signoff.

**Conditional meaning:** No assumed selection on the editor's behalf. If acceptance is unavailable when the Tier 1 PR is cut, omit conditional Tier 2 rows, note held scope in its PR description and leave a clearly bounded follow-on authorization for unresolved Tier 2. Do not block documentable Tier 1 corrections on absent runtime tests, real-vendor samples or professional legal clearance if Source 18 does not require them.

### Cross-cutting editorial limits

- Do not overwrite `EIS17-SUP-06` corrected by #1047.
- Do not change locked Blueprint/FCTM, Source 18, kernel or financial upstream contracts.
- Do not remove `HOLD-15/16/17/18/19/20/21` or T8 watches merely because documentary alternative exists.
- A row edit may adjust its existing references/cross-links only where needed to preserve consistency; no new capability or POS principal, no second Ledger, no broader staff finance view, no default employee attribution.
- Editor must include T1–T8 delta screen and no-effect assertion for unrelated EIS sections. A changed row that silently introduces a Founder product policy, T6 surface, or Source 18 interpretive claim must be STOPPED for Mission Control.

## 4. Required reviewer acceptance — narrow, not another five-report cycle

After EIS editor PR, target changed rows to:
- **SA-03 Financial Integrity + SA-04 POS + SB-P-1.14 Ledger** for `TXN-09`, and SA-05 if composition affected;
- **SA-05 Supabase + SA-01 Security** for `SEC-02`;
- **SA-01 Security** for `AUTH-03` and conditional `AUTH-02/POS-02`; SA-04 only for POS-source bounds;
- **SA-02 India Legal / Privacy (provisional) + SA-04 POS** for operator data ingress/indirect-identification `PRIV-01/02`; qualified legal review remains unfulfilled;
- SA-03/05 + Ledger owner for conditional atomicity/reversal; closing/timezone/POS owners for `CC-03`.

Re-review is limited to exact changed rows and downstream cross-row consistency. Reviewer ACCEPT does not manufacture T8 closure, real POS proof, legal advice or EIS Lock.

## 5. Remaining disposition track and Stage 10 readiness

**Separate Workstream A:** Resolve locked Blueprint §20.4.3 cross-artifact supplier balance attribution under Source 18: determine whether a cited formal interpretation is legally/governance-sufficient or an explicit Founder-approved minimal locked-Blueprint amendment is needed. **Documentary T8 remains OPEN** until actually disposed. Supplier settlement technical T8 watches and FIN-01 PROVISIONAL remain.

**Stage 10 threshold:** canonical Founder choices; accepted domain-owner contracts where normative specificity is required; finding-scoped EIS diff and independent targeted re-review; justified status for applicable documentary holds under Source 18. Do not turn downstream runtime, qualified POS-source or professional India legal assurance into fabricated proof or an automatic blanket documentary lock prerequisite; also do not waive a hold that Source 18 expressly requires to close before EIS Lock.

**Non-authorizations:** This is not direct EIS implementation, schema/RLS/SQL change, migration, provider integration, credentials, runtime testing, legal certification, Stage 11, EIS Lock or implementation authorization.

**STOP:** Founder human merge of this docket required. Next MC action after verified merge: issue the **single EIS-only Tier 1 correction instruction**, solicit already designated domain-owner technical acceptances in parallel, and preserve residual T8 handling separately.
