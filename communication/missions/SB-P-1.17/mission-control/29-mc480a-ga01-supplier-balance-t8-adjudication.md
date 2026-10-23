# SB-P-1.17 — MC-480A GA-01 Supplier-Balance Cross-EIS T8 Adjudication

**Status:** PROPOSED MISSION CONTROL INTERPRETATION — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION.  
**Mission:** SB-P-1.17 Manager Operations — Source 18 v1.2 Stage 10, Gate A / GA-01.  
**Baseline:** `main@678ed22def4d62b81ed288a70e2b2925951d189c` (PR #1042 merged).  
**Consolidated register:** `communication/missions/SB-P-1.17/mission-control/27-mc476a-stage10-consolidated-findings-eis-correction-plan.md`, blob `620ec820946857853686a4cba75824f061a9f785`.  
**Gate A docket:** `communication/missions/SB-P-1.17/mission-control/28-mc478a-gate-a-decisions-t8-eis-correction-authorization-preparation.md`, blob `7e8a218b53d9a06f2101daf61cc701cb737ada4f`.  
**Immutable target EIS:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `8280967f2805cfed17778da3fc76c90b2f2f5ead`, DRAFT.  
**Scope:** GA-01 / C07 / `EIS17-SUP-06` alone. No change to Product Truth, locked sources or any EIS in this PR.

## 1. Exact locked-source conflict — verified against canonical main

| Source and immutable Git blob | Exact governing proposition | Implication |
|---|---|---|
| SB-P-1.14 EIS, `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`, `EIS14-LDG-02` | Every `credit` Ledger row requires direction `owed_to_business` or `owed_by_business`; positive amount; direction not inferred from sign | Provides **direction vocabulary**, not a supplier-payable balance calculation |
| SB-P-1.16 EIS, `46fffd7b140940854c9b2b847517dde2f17584df`, `EIS16-LDG-02` | Customer credit is `owed_to_business`; **supplier-side `owed_by_business` belongs to SB-P-1.17** | Explicit domain ownership / direction boundary |
| Same SB-P-1.16 EIS, `EIS16-BAL-01` | Hardened **customer balance**: attributed credit-method sales and `owed_to_business` credit targets, less active repayments after governed corrections | Does **not** specify supplier `owed_by_business` payable target/repayment rules |
| SB-P-1.17 EIS, `8280967f2805cfed17778da3fc76c90b2f2f5ead`, `EIS17-SUP-06` | Supplier `owed_by_business` credit/payment state uses `EIS14-LDG-02` **and the SB-P-1.16 balance contract**; goods receipt never records payment | The SB-P-1.16 balance reference is **unsupported and contradictory** |

**Documentary evidence:** SA-03 `SA03-S10-F06`, specialist report blob `ec4403a6ee31c50b3b91030a1c229ce8a37fd587`; SA-05 `SA05-S10-F08`, blob `9c84c25916db7dfae13789d7f3a46748a4fc1e41`. SA-04 and SA-02 preserve the finding by cross-reference; no new independent financial review or runtime test is claimed.

## 2. Narrow Mission Control adjudication proposed

1. **Confirmed:** The claimed reuse of `EIS16-BAL-01` for supplier `owed_by_business` in `EIS17-SUP-06` is a cross-EIS *documentary contract conflict*. Treat it as **T8 ESTABLISHED for documentation/interface attribution**, not as proof of PostgreSQL or business-model impossibility.
2. **Interpretation from explicit upstream text:** SB-P-1.14 owns the governed Ledger direction vocabulary; SB-P-1.16 owns the customer `owed_to_business` balance contract; supplier-side `owed_by_business` payable/balance requirements belong within SB-P-1.17's approved scope, subject to Ledger interface compatibility.
3. **Do not infer:** No supplier payable aggregation equation, payment allocation, repayment target, idempotency key, schema, command/RPC, permission, correction or retention rule is established merely by the upstream customer contract. No automatic mirror-image customer formula.
4. **No Founder Product Truth change established from this attribution error alone.** The ownership interpretation follows the existing explicit `EIS16-LDG-02` boundary and `EIS14-LDG-02` vocabulary. If later supplier semantics create a genuine merchant-visible choice or alter Founder-approved source obligations, stop and route that exact choice to the Founder under Source 18.
5. **Hold remains until corrected evidence:** This record proposes the adjudication. Its eventual human merge does not change the immutable EIS or automatically CLOSE T8. Formal closure of the documentary contradiction requires a separately authorized corrected EIS, review against the exact source interfaces and Mission Control closure disposition. Technical T8 WATCH remains separately for Ledger/stock atomicity, merchant POS authority, reversal and real-source compatibility.

## 3. Smallest proposed EIS17-SUP-06 change — example wording, NOT authorized edit

**Existing relevant wording:**  
“Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 direction model (`EIS14-LDG-02`) and the SB-P-1.16 balance contract, FIN-01 PROVISIONAL.”

**Proposed replacement direction, for later EIS editor/domain-owner validation:**  
“Supplier-side `owed_by_business` credit and payment state use the SB-P-1.14 Ledger direction contract (`EIS14-LDG-02`). Supplier-payable balance and governed payment/correction semantics are SB-P-1.17-owned and remain to be specified and validated against the locked Ledger interface; the SB-P-1.16 `EIS16-BAL-01` customer `owed_to_business` balance contract does not define supplier payable. FIN-01 PROVISIONAL.”

**Preserve unchanged:** “Supplier payment and credit only where authorized”; receipt ≠ payment (`7-§8-5`); existing EIS16 customer behavior; Ledger single-writer authority; all existing financial/permission/atomicity holds.

**Caution:** The replacement is a **candidate**, not an approved requirement. Domain owners must confirm that “remain to be specified” is compatible with the Blueprint and Stage 10 completion requirements. An EIS Lock cannot proceed with undefined supplier-payable calculation/command semantics that are in actual mission scope.

## 4. Exact decision owners and acceptance gates

| Decision / evidence | Accountable actor | Required output |
|---|---|---|
| Documentary cross-EIS interpretation | Mission Control Gate A owner | Ratified decision record with T8 documentary status and cited SHA evidence |
| Supplier-payable rules, Ledger command compatibility | SB-P-1.17 financial/EIS owner with SB-P-1.14 Ledger owner and SB-P-1.16 customer-balance owner consulted | Finding-scoped normative payable/settlement and correction contract; no invented upstream interface |
| Genuine merchant-visible Product Truth choice, *if found* | Founder | Narrow question, options, impacts, signed/merged decision before EIS drafting |
| Correction of `EIS17-SUP-06` | Separately authorized EIS editor | Precisely scoped EIS draft change, traceability to Source 18/Blueprint/FCTM and this adjudication |
| Independent verification and T8 closure | Independent qualified technical reviewers as required, Mission Control, Founder for lock | Confirm actual cross-EIS consistency, tests specified and holds explicitly adjudicated; no inferred runtime proof |

## 5. Relationship to other Gate A blockers

**Not adjudicated by GA-01:** GA-02 / MC410-R01 merchant POS authority; GA-03 / MC410-R02 posting time; GA-04 / EQ17-13 single database transaction; GA-05 / MC410-R04A reversal; GA-06 / MC410-R04B closing completeness; GA-07 / `EIS17-SEC-02` protected write privilege boundary; GA-08 Manager delegated scope/Reference Cost; GA-09 operator privacy, legal retention and DPOS. All remain OPEN with the same owners and trigger screens. Neither GA-01 approval nor supplier-balance rewrite authorizes a fifth POS principal, second Ledger, broad authenticated DML, operator profiling, custom POS core modifications, SQL, migrations or provider operations.

## 6. Sequential fast path, no stage waiver

1. Founder merges this adjudication *proposal* PR after CI and review; Mission Control independently verifies its canonical effectiveness and records acceptance or required modification.
2. Mission Control obtains the bounded domain-owner supplier-payable specification and any genuinely necessary Founder decision, without repeating already-settled customer-side Product Truth.
3. Mission Control publishes a **separate, explicit EIS correction authorization** for `EIS17-SUP-06`, with pinned EIS blob, exact allowed files/rows, contribution separation, review and PR instructions. May bundle other Gate A rows only when their own decisions are canonical and approved.
4. Independent finding-targeted review must verify the correction before Stage 10 acceptance and any Stage 11 Founder EIS Lock recommendation. No claimed runtime, provider, legal or professional evidence from this document.

**MC-480A disposition sought:** accept the narrowly supported ownership interpretation and documentary T8 reconciliation route **without** approving any EIS change or asserting that the contradiction is already fixed.

**STOP FOR FOUNDER MERGE AND MISSION CONTROL FOLLOW-UP ADJUDICATION.**
