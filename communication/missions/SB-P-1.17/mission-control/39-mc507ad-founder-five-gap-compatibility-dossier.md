# MC-507AD — Founder GA-04 Bounded Decisions and Consolidated Compatibility Disposition

**Mission:** SB-P-1.17 Stage 10 EIS Review  
**Status:** DRAFT governance record; no canonical effect until finding-scoped verification, Mission Control review and Founder human merge under Source 18 v1.2  
**Founder instruction received:** Founder retains final decision authority and explicitly directed one consolidated compatibility dossier covering the five deferred questions, not a repeat 13-question approval cycle. This file reproduces the Founder decision as supplied to Mission Control; it does not infer implementation approval.

## 1. Source basis and evidence classes

- Baseline canonical `main`: `abdd19e92ac4dd883ba10a324f449d1bbcdd7972`.
- SB-P-1.12 EIS: `c444f7509477d0e8b997af538440d93bf2ca4d72`; SB-P-1.13 EIS: `9a1e723d4874011b6870a680f2a2080154537c30`; SB-P-1.14 EIS: `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`.
- Verified SB-P-1.17 EIS: `be9209e05d6f9ec462256a615f1a64169ff2e1ba`.
- Founder earlier A2/B1 canonical decision blob: `07d00d1dbbf6aab9846f7031b6ebfd2dd9ea04fb`; MC-502 blob `4f3288b701ddb88396759b0ffc7fc9e9393cc04e`.
- Existing SA-05 MC-507Y interface verification and MC-507Z interface dossier are **contribution-disclosed proposed technical analysis**, not independent SQL or runtime evidence.
- **Evidence separation:** `LOCKED` = currently approved contract; `FOUNDER DECIDED` = explicit bounded disposition below; `PROPOSED` = unratified interface design; `UNVERIFIED` = no executable Ledger function/signature/grants/locking proof identified at current baseline.

## 2. Founder MC-507AC dispositions (exact scope)

**Decision authority:** The Founder retains final approval authority for SB-P-1.14 Ledger and SB-P-1.12 executor contract boundaries, relying on specialists as advisory; no historical AI mission room is deemed an authorized approver.

**Ledger:** L1 **DEFER** (exact interface compatibility evidence); L2 **DEFER** (reconcile confirmation ownership with `EIS14-CMD-01` and `EIS-CNF-01/02`); L3 **ACCEPT DESIGN BOUNDARY ONLY** (deterministic child idempotency, no repeat Ledger outcome); L4 **ACCEPT DESIGN BOUNDARY ONLY** (compatible lock-order invariant, actual locks unverified); L5 **ACCEPT DESIGN BOUNDARY ONLY** (minimal governed Ledger outcome without authority leakage); L6 **ACCEPT DESIGN BOUNDARY ONLY** (permission only to **draft** a separately governed upstream fallback proposal if genuinely necessary; no primitive is approved or created).

**Executor:** E1 **ACCEPT DESIGN BOUNDARY ONLY** (narrow SB-P-1.17 `NOLOGIN NOINHERIT` executor); E2 **DEFER** (actual governed child execution and effective privilege evidence); E3 **ACCEPT DESIGN BOUNDARY ONLY** (one server-verified principal/business/context); E4 **DEFER** (must reconcile confirmation consumption with L2); E5 **ACCEPT DESIGN BOUNDARY ONLY** (authority epochs and deterministic locking); E6 **ACCEPT DESIGN BOUNDARY ONLY** (`EIS-ISO-04` bound decision; service_role never merchant authority); E7 **DEFER** (effective privilege graph and grants).

These are **contract boundaries**, not executable-interface certification, SQL approval, EIS lock, hold closure or migration authorization.

## 3. One consolidated five-question compatibility dossier (L1/L2/E2/E4/E7)

| Gap | Locked invariant | Existing evidence finding | Proposed resolution requiring independent technical check | Required proof before executable compatibility claim |
|---|---|---|---|---|
| **L1 — Ledger nesting** | `EIS13-CMD-02/EIS14-CMD-01/03`: one governed `create_transaction_governed` writer; own kernel check, confirmation consumption, idempotency | Nested PostgreSQL function calls share a transaction, but the specified Ledger command has no identified implementation signature/body or nested behavior. **UNVERIFIED**, not incompatible. | Prefer invoking same public governed command inside one SB-P-1.17 outer transaction **only if** confirmation/idempotency and privilege interfaces can be proven compatible. No invented parameters. | Authoritative proposed interface + eventually exact SQL identity, caller/security model, nested execution and failure tests; if unavailable retain defer. |
| **L2 + E4 — one confirmation** | `EIS-CNF-01/02` one consequential confirmation, serialized/rechecked; `EIS14-CMD-01` states Ledger command consumes confirmation | Dossier proposes outer coordinator owns one business confirmation, but that cannot silently cancel the public Ledger command's consumption requirement. **NORMATIVE AMBIGUITY UNRESOLVED**. | Define a single-use, transaction-local confirmation-consumption contract that allows the public Ledger command's required revalidation/consume semantics without double consumption. If impossible under unchanged public interface, initiate *separate* Source18-governed Ledger internal-primitives amendment proposal. | Written interface-level contract tracing outer/inner confirmation state transitions, consumer, failure rollback, replay and serialization; no SQL proof currently. |
| **E2 — nested protected calls** | `EIS-ISO-02/04/10` narrow definer execution, no caller Ledger DML, one verified principal/kernel, no service_role authority | A coordinator using `EXECUTE` on governed Ledger/inventory commands is plausible; actual definer-to-definer privilege/owner behavior is **UNVERIFIED**. | Proposed narrow outer executor owns only source/outcome/link tables and `EXECUTE` on protected child commands; no direct `transactions` write. Trusted context cannot be supplied by client. | Accountable reviewed role/function graph, executor ownership, security-definer propagation, GRANT/REVOKE inventory and negative-privilege matrix. |
| **E7 — privilege graph** | Caller direct protected Ledger DML forbidden by `EIS14-CMD-03`; `EIS-ISO-04` for any service_role path | No effective deployed ACL or proposed exact command signature; **UNVERIFIED**. | Draft least-privilege graph: verified caller/server decision → authorized coordinator execute → protected Ledger/inventory function execute; no inherited direct Ledger insert/update/delete. | Static proposed grants/role identities approved at engineering-design review, then later actual effective privilege enumeration/negative runtime checks. |

### Cross-domain confirmation / idempotency invariant

The ledger's public command must continue to meet its own `EIS14-CMD-01` confirmation consumption and `EIS14-IDM-01/03` idempotency requirements. An outer coordinator's single business outcome cannot override those by assertion. Stable outer request and deterministic child identities are accepted **at design boundary only**; actual nested consumption, key collisions, locking and unknown-outcome lookup remain to be proven.

### GA-03 mandatory outcomes

- **A:** Financial and all required stock eligible: exactly one governed Ledger effect + all required stock + source/link state **one atomic transaction or none**.
- **B:** Financial posting eligible, mapping-dependent stock **genuinely** ineligible before the commit: one governed Ledger post + durable linked stock hold; no invented movement and no duplicate revenue on later authorized movement.
- **C:** Financial authority/eligibility invalid: no authoritative financial/stock posting.
- Failure of a required *eligible* stock effect **cannot** be reclassified as B. Unknown outcome must be looked up before retry. No second public Ledger writer.

## 4. Consolidated disposition and exact next executable Stage 10 action

**Mission Control proposed disposition:** **CONTRACTUALLY PLAUSIBLE — FIVE DEFERRED GAPS UNVERIFIED.** No incompatible locked clause has been established; no public-command nesting, one-time confirmation mechanism, effective definer privilege graph, or deployed implementation is proven. **Source 18 T8 WATCH, not established.**

**Next executable action is documentary, not SQL:** Run **one contribution-separated cross-domain interface challenge** against this single five-gap dossier, using a currently eligible reviewer with disclosed contributions, to return:
1. Per-gap `SUPPORTED DESIGN / EXACT CORRECTION / UNVERIFIED / CONTRADICTION` with locked clauses and evidence;
2. one proposed **non-implementation** interface contract resolving (or isolating) L2/E4 ownership and nested Ledger idempotency;
3. a reviewable intended executor privilege graph for E2/E7, explicitly labeled proposed;
4. if a necessary public-interface change contradicts locked `EIS14-CMD-01/03`, the **single narrow** upstream amendment question for Founder governance under L6; no amendment presumed.
5. smallest authorized follow-on `TXN-03` wording **only if** exact interface evidence becomes sufficient. Otherwise keep `TXN-03` unchanged and identify engineering-design evidence required when SB-P-1.13/1.14 implementation becomes available.

**In parallel:** Other *independently ready* Stage 10 EIS corrections may proceed under separate existing authority/review, without folding GA-04 into them. GA-05 paired reversal, GA-06 closing and residual Blueprint T8-03 remain separate.

**STOP:** `HOLD-16`, `HOLD-17` and all other holds remain open. No changed EIS, upstream Ledger/kernel contract, SQL/grants/migration, runtime proof, self-merge, Stage 11 EIS Lock or implementation authorization.
