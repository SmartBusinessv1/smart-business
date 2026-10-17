# SB-P-1.16 — Stage 7 SR-03 Concurrency and Idempotency Specialist Review

**Assignment:** SR-03 — Concurrency and Idempotency, under MC-183  
**Authority:** Source 18 v1.2 Stage 7 and §4.8; MC-183  
**Reviewer:** Claude subagent (general-purpose agent), model family Claude (Anthropic), fresh context, spawned and briefed by Claude Code (the Stage 2–4, 6 and 7 author) on 2026-10-17  
**Independence:** NOT INDEPENDENT — same provider and model family as the Stage 7 author, and briefed by that author. Separately attributable only. No prior SB-P-1.16 authorship in this context.  
**Baseline:** `main@abd5e0d547aabc315513e8901edecfd327edaaf9`  
**Status:** DRAFT SPECIALIST REPORT — READ-ONLY — FINDINGS ARE INPUTS, NOT AUTHORITY  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reviewer provenance and limits

This review was produced by a fresh-context Claude subagent spawned and briefed by Claude Code, the author of the Stage 7 draft under review. The reviewer shares the author's provider and model family and received its brief from that author. The review is therefore separately attributable, but it is not independent assurance. Its findings are inputs for Mission Control and carry no product, approval or implementation authority.

Scope is limited to concurrency and idempotency: Stage 7 draft §20.4.2, §20.4.9, §20.4.10, §20.7.5 (CONC tier) and §20.7.8 (Scenario B concurrency column), and Stage 6 findings SB16-B6-05, SB16-B6-14 and SB16-B6-15. Balance semantics (SR-01), grants and RLS (SR-02), migration sequencing (SR-04), provider selection (SR-05) and retention (SR-06) are out of scope and are touched only where a concurrency control depends on them.

What could not be verified:

- No database, Supabase project, CI run or provider was accessed. No SQL was executed. Statements about PostgreSQL locking behaviour rest on the repository's own precedent code, its recorded defect evidence and general PostgreSQL semantics, not on new runtime evidence.
- No payment provider is selected. Provider event-ID, retry-window, ordering and status semantics are therefore unknown, and every provider-related recommendation is stated provider-agnostically.
- The SB-P-1.12, SB-P-1.14 and SB-P-1.15 foundations are specified but not built. Their concurrency behaviour is assessed from the locked EIS text only.

## 2. Evidence inspected

| Path | Blob |
|---|---|
| `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md` | `1064ab18` |
| `communication/missions/SB-P-1.16/claude-code/19-stage7-engineering-review-report.md` | `a3b644f0` |
| `communication/missions/SB-P-1.16/claude-code/17-stage6-builder-review.md` | `c9a93566` |
| `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `5ff7742f` |
| `communication/missions/SB-P-1.16/claude-code/04-stage2-mission-truth-pack.md` | `4a7bfe4f` |
| `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md` | `30b19a80` |
| `docs/phase-1-mission-blueprint/active/SB-P-1.16.md` | `8e79636f` |
| `docs/phase-1-mission-blueprint/smart-business-features/15_Payment_Verification_and_Bank_Reconciliation.md` | `632f3402` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f750` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` | `899a0fe1` |
| `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` | `c64ca4cb` |
| `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql` | `5be6e1af` |
| `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | `f875f923` |
| `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql` | `817a1eea` |
| `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | `029443cf` |
| `docs/implementation/SB-P-1.10/evidence/tests/DEFECT-idempotency-select-for-update-rls.md` | `14d14ef6` |
| `tests/inventory/concurrency.test.ts` | `6171d59f` |
| `tests/inventory/idempotency.test.ts` | `6b83fd42` |
| `tests/catalog-import/idempotency.test.ts` | `4e2d1d1a` |
| `src/lib/catalog-import/idempotency.ts` | `bd8cd8c5` |
| `supabase/verification/sb-p-1-11-impl-1-concurrency-check.sql` | `31ee15c2` |

## 3. Method

1. Read the in-scope draft sections (draft lines 84–89, 156–170, 178–191, 269–300, 712–800) and the 349-row register entries for components C-REP, C-CNF, E-LINK, E-REV, E-IDM, E-RVS and C-EXC.
2. Read Stage 6 SB16-B6-05, -14 and -15 (Stage 6 lines 100–106 and 177–195) and the derived constraints DC-05 and DC-06 (Truth Pack lines 49–50), and compared the draft's controls with what they require.
3. Read the locked upstream text for `EIS-CNF-01`, `-02`, `-04`, `-06`, `EIS-KER-09` (SB-P-1.12 EIS lines 198, 240, 262–267) and `EIS14-LDG-03`, `EIS14-CMD-01`, `-02`, `EIS14-IDM-01`, `-02` (SB-P-1.14 EIS lines 133, 145–146, 153–154).
4. Read the repository precedents: the inventory movement command before and after the SB-P-1.10 idempotency fix, the recorded RLS plus `FOR UPDATE` defect, the catalog command idempotency and preview-token functions, the catalog-import derived follow-up key, the inventory concurrency and idempotency tests, and the SB-P-1.11 two-session concurrency verification method.
5. For each race named in the assignment, identified the serialization point the draft implies, whether the draft names it, which locks interact, and what the EIS must fix. Each race is mapped to a finding below.
6. Verified every cited FCTM row ID against the canonical FCTM.

Race-to-finding map:

| Race | Draft sufficient? | Finding |
|---|---|---|
| Two actors resolve one evidence item to different candidates | Partly: active-link uniqueness exists; loser outcome, evidence lock and supersession unstated | SR03-01, SR03-05 |
| Two evidence items allocated or linked to one target beyond its amount | Partly: a target lock is named for allocation only; the evidence-link invariant is undefined | SR03-02 |
| Provider replay during human confirmation | Exact replay yes; a new event for the same payment is not covered | SR03-03, SR03-04 |
| Out-of-order provider events (refund before capture) | No | SR03-04 |
| Reversal while a link is being confirmed | No serialization or fingerprint rule stated | SR03-04 |
| Manager grant revoked between preview and commit | Yes, by reference to `EIS-CNF-02`, if new object-scope facts are serialized | SR03-09 |
| Target corrected (amount or `payment_method`) between preview and commit | Partly: revalidation is cited; the correction command's lock is not | SR03-02 |
| Duplicate upload with the same content fingerprint | No: the fingerprint is preview-only and is not re-checked at link commit | SR03-03 |
| Unknown-outcome client retries | Yes in principle; envelope details missing | SR03-06, SR03-07, SR03-08 |

## 4. Findings

### SR03-01 — The serialization point and a global lock order are not stated

- **Severity:** HIGH
- **Evidence:** Stage 6 SB16-B6-14 (`17-stage6-builder-review.md` @ `c9a93566`, lines 177–187) closes with "Stage 7 states the serialization point". EQ-10 asks "Where are the serialization point, link uniqueness and target-amount limits" (Stage 6 line 485). The draft answers with four controls (draft @ `1064ab18`, lines 160–164) and "target lock" (line 727), but names no lock order. `EIS-CNF-01` and the SB-P-1.12 EIS §10.1 text (SB-P-1.12 EIS @ `c444f750`, lines 240, 262) order the commit as EIS-CNF-02 authority locks, then the binding row. `EIS-CNF-02` (line 263) fixes the order registry, persons, business authority state, ascending UUID within a type. The catalog precedent locks the object before the token and makes the preview take the same order to avoid deadlock (`20260806130000_…stage2_functions.sql` @ `817a1eea`, lines 1243–1272). It also serializes on a key-scoped advisory lock taken before the idempotency lookup (lines 18–25, 97–98, 207–208). The inventory command uses a per-item advisory lock (`20260724170000_6a0f8a74-….sql` @ `5be6e1af`, line 107).
- **Affected FCTM IDs:** `15-§9-4`, `15-§9-5`, `15-§19-5`, `15-§21-8`, `24-§21-5`, `14-§7-7`, `BP-§10.5-W9`, `15-§20-1`, `14-§18-9`
- **Affected Stage 7 draft sections:** §20.4.2, §20.4.9, §20.4.10, §20.6 (SB16-B6-14 row), §21.1 (EQ-10)
- **Related Stage 6 findings:** SB16-B6-14, SB16-B6-05
- **Engineering implication:** SB-P-1.16 adds at least six writers that touch the same rows: the allocation command, link resolution (human), automatic strong-match linking, provider event intake (including reversals), governed correction of a target or repayment, and historical attribution. They lock several kinds of row: authority rows (FOR SHARE), idempotency keys, evidence items, Ledger targets (several per allocation) and bindings. Without one documented total order, two allocations over overlapping targets submitted in different orders, or a preview that locks a target while a commit holds the binding, can deadlock. A deadlock aborts the command with an unknown outcome at the client. A lock that is too coarse, for example a business-wide exclusive lock, would breach "stop only the uncertain link/write" (`15-§20-1`, `14-§18-9`).
- **Required correction or evidence obligation:** §20.4.9 should state the serialization point for each invariant: evidence-item row for "one active link per evidence", target row for "Σ ≤ amount", and binding row for single-use consumption. It should also commit the EIS to one total lock order used by every writer and every locking preview. A candidate order consistent with `EIS-CNF-02` and both precedents: authority rows (FOR SHARE, per `EIS-CNF-02`); then a key-scoped transaction lock on (business, operation, idempotency key); then evidence items in ascending UUID order; then Ledger targets in ascending UUID order; then the binding row. If the EIS prefers the `EIS-CNF-01` placement of the binding immediately after authority rows, it must show that no preview or writer takes an evidence or target lock before a binding lock. The EIS must also state the isolation assumption. Under READ COMMITTED with explicit row locks, every guarded aggregate must be read in a statement issued after the lock is held, as the inventory precedent does (`5be6e1af`, lines 107 and 196–206). If SERIALIZABLE or REPEATABLE READ is chosen, serialization and deadlock failures must be retried inside the idempotency envelope (SR03-07). No exclusive lock wider than one evidence item or one target may be taken.
- **Uncertainty:** The SB-P-1.12 kernel is unbuilt. Its final placement of the binding lock relative to object locks may be refined at SB-P-1.12 implementation, which would change the candidate order but not the need for one.
- **Trigger screen:** none. This is an engineering specification gap; no row becomes infeasible.

### SR03-02 — The target-amount guard conflates two invariants and omits the correction path

- **Severity:** HIGH
- **Evidence:** Draft lines 88 ("Each allocation must not exceed that target's current outstanding amount") and 163 ("a target-amount guard evaluated under a lock on the target inside the governed command"). Draft line 103 sends a sale corrected away from `credit` to review but names no lock. Draft line 174 routes all corrections through `EIS14-CMD-02`. `EIS14-LDG-03` (SB-P-1.14 EIS @ `899a0fe1`, line 133) leaves "locking, transactional predicate or version comparison" to the EIS. Contract 15 §8 and §12 (`632f3402`, lines 117–184) forbid duplicate verification actions. Draft line 159 lets a link attach to "the existing sale or repayment target".
- **Affected FCTM IDs:** `14-§7-4`, `14-§7-5`, `14-§18-3`, `15-§12-3`, `15-§12-4`, `15-§14-2`, `15-§21-8`, `15-§8-4`, `BP-§10.5-W2`, `BP-§10.5-E4`
- **Affected Stage 7 draft sections:** §20.4.2, §20.4.4, §20.4.9, §20.4.11
- **Related Stage 6 findings:** SB16-B6-05, SB16-B6-14
- **Engineering implication:** There are two guarded invariants. (a) Allocation: Σ repayment amounts referencing a credit target ≤ the target's current amount. (b) Evidence linking: the evidence linked to one Ledger record (a cash-method or UPI sale, or a repayment row) must not over-verify it. For example, two evidence items that each equal the full amount of one sale must not both become active links (`15-§12-3`). The draft states only (a), and only for the allocation command. Either invariant can also be broken from the other side: a governed correction that lowers a target's amount, changes its `payment_method` away from `credit`, or raises or re-targets a repayment, and that commits between an allocation's preview and commit or concurrently with it, leaves Σ greater than the amount unless the correction takes the same target lock and re-checks the invariant.
- **Required correction or evidence obligation:** §20.4.9 should define both invariants separately. For (b), the EIS chooses between "at most one active link per Ledger record" and "Σ linked evidence amount ≤ record amount, with excess routed to review". The draft should also state that every writer which can change a guarded quantity, including `EIS14-CMD-02` corrections to targets and repayments and the historical attribution command, takes the target row lock in the SR03-01 order and re-evaluates the invariant before writing. A violating correction stops and goes to review; it never leaves a negative outstanding. Binding fingerprints must include each target's row version so that a correction between preview and commit forces re-confirmation (DC-06).
- **Uncertainty:** SR-01 owns the balance and outstanding definition. If SR-01 or Mission Control decides that evidence links never participate in any amount invariant, part (b) reduces to a uniqueness rule. The concurrency obligation remains.
- **Trigger screen:** none.

### SR03-03 — Evidence idempotency keys on event ID only, which departs from DC-05 and misses cross-source duplicates

- **Severity:** HIGH
- **Evidence:** Draft line 169: "Provider events are keyed on (business, provider, external event ID). Uploads carry a content fingerprint as duplicate evidence only". DC-05 (Truth Pack @ `4a7bfe4f`, line 49) and SB16-B6-14 (Stage 6 line 186) key on "business scope, source/provider and external reference (UTR) where available". `EIS14-IDM-02` (SB-P-1.14 EIS line 154) makes the content fingerprint a preview-time duplicate signal that "never substitutes for command idempotency". Draft line 151 binds the business through a provider-account binding `(business_id, binding_id)`.
- **Affected FCTM IDs:** `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-6`, `15-§25-2`, `15-§14-2`, `BP-§10.5-B3`
- **Affected Stage 7 draft sections:** §20.4.8, §20.4.10
- **Related Stage 6 findings:** SB16-B6-14
- **Engineering implication:** An event ID deduplicates redelivery of one notification. It does not unify different events about one payment (authorized, captured, settled, refunded), and it does not detect the same payment arriving through a merchant upload as well as a provider event, or through two uploads of the same screenshot. Each such path can produce a second evidence item that is linked to a second target, or used to record a second repayment, which duplicates repayment or verification (`15-§12-4`, `15-§14-2`). Keying on "provider" rather than the provider-account binding also lets two merchant accounts on the same provider collide, or fail to separate.
- **Required correction or evidence obligation:** §20.4.10 should specify three layers:
  1. Receipt idempotency on (business, provider-account binding, external event ID), with a stored payload fingerprint. A same-ID, different-payload delivery is recorded as a conflict and is never applied.
  2. Payment identity: one provider-authenticated evidence item per (business, binding, external payment ID). Later events for that payment append state history to the same item.
  3. Cross-source correlation on (business, normalized external payment reference or UTR where available) and on the business-scoped content fingerprint. At link commit, under the evidence lock, an active link held by any correlated evidence item stops the commit and routes both to review. Nothing is merged automatically, consistent with `EIS14-IDM-02`.

  The EIS should record this as a stated specialization of `EIS-CNF-04` for external-event intake.
- **Uncertainty:** Whether a provider exposes a stable payment ID and a UTR is provider-specific and unknown (no provider is selected). Merchant uploads may lack any reference, in which case only the fingerprint and amount-and-time signals remain, and review is the control.
- **Trigger screen:** none. DC-05 already requires the reference. The correction restores alignment with it and changes no product behaviour.

### SR03-04 — Out-of-order provider events and reversals racing confirmation are undefined

- **Severity:** HIGH
- **Evidence:** Draft line 170: a reversal "is new evidence linked to the original. It moves the original to `reversed/invalidated`". There is no rule for a reversal that arrives before its original, for status regression, or for a reversal racing a link commit. Draft line 161: the binding covers "evidence, candidate set, candidate versions, actor and authority epochs". It does not say whether the evidence's state version and provider status are included. DC-06 (Truth Pack line 50) binds "that candidate's state version". SB16-B6-15 (Stage 6 lines 189–195). Contract 15 §13 (`632f3402`, lines 186–194).
- **Affected FCTM IDs:** `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10`, `15-§25-12`, `15-§21-8`, `15-§9-4`
- **Affected Stage 7 draft sections:** §20.4.7, §20.4.9, §20.4.10, §20.7.8
- **Related Stage 6 findings:** SB16-B6-15, SB16-B6-14
- **Engineering implication:** Providers commonly deliver at least once and out of order. Three failure cases follow:
  - **Refund before capture.** A refund that arrives first has no "original" to link to. If it is dropped or rejected as orphaned, a later capture leaves the item `matched/verified` although the money was returned.
  - **Status regression.** A late "captured" after "refunded" can regress the status.
  - **Reversal racing a human confirmation.** If the reversal commits first and the binding does not include the evidence's state version, the human commit links reversed evidence as verified. If the link commits first and the reversal's intake does not take the evidence lock, the reversal may read the pre-link state and fail to flag the new link.
- **Required correction or evidence obligation:** §20.4.10 should commit the EIS to the following:
  - An orphan reversal or refund is stored against the external payment ID (SR03-03 layer 2) in a non-authoritative pending-correlation state. When the capture arrives, it is applied in the reversed state, not the verified state.
  - A provider-status precedence. Terminal states such as refunded, reversed and charged back cannot be regressed by later non-terminal events. Provider timestamps or sequence numbers are hints only.
  - Reversal intake takes the same evidence row lock as link resolution (SR03-01).
  - The binding fingerprint includes the evidence state version and provider status, so a reversal between preview and commit forces a stale result and re-confirmation.
  - When a reversal commits after a link, it flags that link and target for Owner review under the same lock, as the draft already states.

  Both orders must be tested (SR03-10).
- **Uncertainty:** Exact status vocabularies and ordering guarantees depend on the provider (SR-05). The precedence lattice must be finalized at provider activation, but its existence and the orphan rule are provider-agnostic.
- **Trigger screen:** none. The states used are the Contract 15 §4 states already in §20.4.7, and no new product behaviour is introduced.

### SR03-05 — Concurrent resolution of one evidence item: loser outcome, supersession and the automatic-link path

- **Severity:** MEDIUM
- **Evidence:** Draft lines 161–162: a "single-use `confirmation_binding` per resolution" and "at most one active link per evidence item, enforced by a uniqueness rule". Draft line 158: "A strong unique match links". Draft line 298: "Two concurrent resolvers produce exactly one link". `EIS-CNF-01` (SB-P-1.12 EIS line 262) arbitrates contenders on the same binding only. The catalog preview supersedes any open preview for the same object (`817a1eea`, lines 1171–1175) and records terminal STALE_STATE rejections (lines 1253–1290). The inventory fix translates a `unique_violation` on the named idempotency constraint into a replay instead of a raw error (`5be6e1af`, lines 218–250).
- **Affected FCTM IDs:** `15-§9-4`, `15-§9-5`, `15-§25-3`, `24-§21-5`, `10-§17-5`, `15-§14-4`, `15-§12-3`
- **Affected Stage 7 draft sections:** §20.4.9, §20.7.8
- **Related Stage 6 findings:** SB16-B6-14
- **Engineering implication:** Two actors (or one actor and the automatic matcher) each hold their own binding, so single-use consumption does not arbitrate between them. Only the active-link uniqueness rule does. If it is a bare constraint, the loser receives an unhandled constraint error, which is an unknown outcome for the client and may surface as a failure rather than "already resolved". The automatic path decides "strong unique match" on an unlocked snapshot, so two evidence items may each look like the unique strong match for one target at the same moment.
- **Required correction or evidence obligation:** The EIS should specify the following:
  - The commit locks the evidence row before it checks for an active link.
  - The loser receives a committed, deterministic "already resolved" or "stale" outcome stored on its idempotency row.
  - A defensive handler maps only the named active-link uniqueness violation to that outcome.
  - Whether a new preview supersedes other actors' open bindings for the same evidence item, following the catalog precedent, or whether they coexist until commit.
  - The candidate-set fingerprint covers all open candidates, so a new candidate forces re-confirmation.
  - The automatic matcher re-evaluates both uniqueness and the SR03-02 invariant under the same locks and falls back to review on any change.
- **Uncertainty:** The SB-P-1.12 binding table is unbuilt. Supersession behaviour may already be fixed at SB-P-1.12 EIS level for all bindings.
- **Trigger screen:** none.

### SR03-06 — Recording a repayment from evidence is not a single atomic command

- **Severity:** HIGH
- **Evidence:** Draft line 88 defines the allocation command (creates repayment rows). Draft line 159 defines linking against "the existing sale or repayment target". Contract 15 §11 b3 allows "classification/linking or creation through a governed flow" (`632f3402`, lines 158–169). Draft line 298 requires that the "target outstanding [is] reduced only by verified, linked repayment". No draft text joins the two operations.
- **Affected FCTM IDs:** `14-§7-5`, `15-§11-4`, `15-§12-4`, `15-§14-1`, `15-§14-2`, `15-§8-4`, `BP-§10.5-W2`, `BP-§10.5-E4`
- **Affected Stage 7 draft sections:** §20.4.2, §20.4.9, §20.4.10
- **Related Stage 6 findings:** SB16-B6-05, SB16-B6-14
- **Engineering implication:** If the Owner records the repayment from unlinked evidence through two commands (allocate, then link), a failure or unknown outcome between them leaves an unlinked repayment and an unlinked evidence item. A retry, or a matcher run, can then classify the same evidence into a second repayment. Separately, a repayment recorded manually before its evidence arrives must be a match candidate. Otherwise the arriving evidence is routed to "create repayment" and duplicates it.
- **Required correction or evidence obligation:** §20.4.2 or §20.4.9 should state the following:
  - Creating repayments from evidence is one governed command. It takes the allocation list and the evidence item, writes the repayment rows and the evidence link in one transaction under one idempotency key, and consumes one binding that covers the evidence version and every allocation line.
  - The matcher's candidate set for incoming-payment evidence includes existing unlinked repayment rows, so evidence verifies an already-recorded repayment rather than creating another.
- **Uncertainty:** The EIS may already intend this, since the draft says verification "never creates a second financial transaction". The draft does not state it, and the two commands are described separately.
- **Trigger screen:** none.

### SR03-07 — The idempotency envelope should follow the corrected precedents, not the cited pre-fix one

- **Severity:** MEDIUM
- **Evidence:** Draft §20.3 (line 42) and Stage 6 E-07 cite `20260721205714_c3b38f2f-….sql` (`c64ca4cb`). In that version the key lookup uses `FOR UPDATE` (line 317) before the per-item advisory lock (line 329). The recorded defect (`DEFECT-idempotency-select-for-update-rls.md` @ `14d14ef6`) shows that `FOR UPDATE` combined with an RLS subquery policy planned to "no rows", which broke replay. The fix (`5be6e1af`, lines 1–26, 103–137, 218–250) moves the lock before a plain lookup and maps the named unique violation to a replay. The catalog commands take a key-scoped advisory lock, store terminal `rejected` outcomes, and propagate only unexpected errors as UNKNOWN_OUTCOME (`817a1eea`, lines 10–39). `EIS-CNF-04` and `EIS14-IDM-01` specify (business, actor, operation, key, payload fingerprint, committed outcome), resolved before mutable-state evaluation.
- **Affected FCTM IDs:** `15-§12-3`, `15-§12-4`, `15-§12-5`, `BP-§10.5-W9`, `BP-§10.5-B3`, `14-§7-5`
- **Affected Stage 7 draft sections:** §20.3, §20.4.2, §20.4.10
- **Related Stage 6 findings:** SB16-B6-14, SB16-B6-05
- **Engineering implication:** Copying the cited pre-fix pattern would reintroduce a known replay defect. Several other envelope details are also unstated:
  - **Rejection replay.** Which rejections are stored as terminal (validation, stale binding, guard breach) and which are not (lock timeout, deadlock, serialization failure, which must roll back and remain retryable under the same key).
  - **Fingerprint stability.** The payload fingerprint for a multi-target allocation must be computed over a canonical form (allocation lines sorted by target ID, amounts in minor units, binding ID). Otherwise a legitimate retry that reorders the same lines is rejected as a conflict.
  - **Retention.** Key and outcome rows must outlive the longest client retry horizon and the provider redelivery window, or a late retry re-executes.
- **Required correction or evidence obligation:** §20.3 and §20.4.10 should cite the corrected inventory function (`6a0f8a74`) and the defect record alongside E-07. The EIS should then specify:
  - a key-scoped lock before a plain lookup, with no `FOR UPDATE` on RLS-protected idempotency rows;
  - named-constraint unique-violation handling;
  - the terminal versus retryable outcome classes;
  - canonical fingerprints for multi-line payloads;
  - a minimum key-retention period stated as an engineering constraint, with its relation to U-08 routed to SR-06 and Mission Control, not decided here.
- **Uncertainty:** SB-P-1.12 may implement the shared idempotency table generically. The precedent lessons then belong in the SB-P-1.12 implementation, and SB-P-1.16 only consumes them. The retention minimum depends on provider terms (unknown).
- **Trigger screen:** none.

### SR03-08 — Provider event receipt: key namespace, forged-event pre-emption and derived command keys

- **Severity:** MEDIUM
- **Evidence:** Draft line 188 stores signature failures "as `unauthenticated` and never authoritative" and keeps the raw payload. Draft line 169 gives the receipt key. Draft line 153 says the principal is an `EIS-AUT-01` automation principal, pending G-W1. The `EIS-CNF-04` key includes the actor (SB-P-1.12 EIS line 265). The catalog-import precedent derives deterministic follow-up keys as UUIDv5 of the parent key and the operation (`src/lib/catalog-import/idempotency.ts` @ `bd8cd8c5`, lines 41–55; tests `4e2d1d1a`).
- **Affected FCTM IDs:** `15-§12-1`, `15-§12-6`, `15-§25-2`, `15-§21-1`
- **Affected Stage 7 draft sections:** §20.4.8, §20.4.10, §20.5 (provider webhook validation row)
- **Related Stage 6 findings:** SB16-B6-14
- **Engineering implication:** Three risks follow:
  - **Forged-event pre-emption.** If unauthenticated deliveries register in the same receipt-key namespace as verified ones, a forged request carrying a genuine event ID can occupy the key. The genuine event is then dropped as a "duplicate", a narrow denial of evidence.
  - **Actor in the key.** If the actor is part of the key for provider-triggered commands, a change of automation rule or principal (G-W1) makes a redelivered event look new.
  - **In-flight duplicates.** Concurrent duplicate deliveries need a defined response while the first is still in progress: block on the key lock, then return the stored outcome.
- **Required correction or evidence obligation:** The EIS should specify the following:
  - Receipt keys are registered only after signature and binding verification.
  - Unauthenticated deliveries are stored in a separate namespace that never blocks a verified event.
  - Commands triggered by a provider event use a server-derived key, for example derived from (binding, external event ID, operation), whose identity does not depend on the automation principal.
  - The intake response for a duplicate is the stored outcome, acknowledged as successful to the provider.

  Long matching work runs after a durable receipt commit, so that receipt does not hold evidence or target locks (`EIS-CNF-06` narrow failure).
- **Uncertainty:** Security aspects of webhook validation belong to SR-02. This finding covers only the idempotency namespace and the key derivation.
- **Trigger screen:** none.

### SR03-09 — Revocation between preview and commit depends on new object-scope facts being serialized

- **Severity:** MEDIUM
- **Evidence:** Draft line 191 and line 164 cite `EIS-KER-09` and `EIS-CNF-02`. Draft line 183 introduces object-scoped capabilities such as `recon.resolve_assigned_match` and `recon.review_assigned_evidence`. `EIS-CNF-02` (SB-P-1.12 EIS line 263) covers "participant bindings and object scope" only when they are "versioned under one of three serialization row types". `EIS-KER-09` (line 198) increments the epoch on change.
- **Affected FCTM IDs:** `15-§21-9`, `15-§25-8`, `15-§9-5`, `15-§19-5`
- **Affected Stage 7 draft sections:** §20.4.9, §20.5
- **Related Stage 6 findings:** SB16-B6-14
- **Engineering implication:** Revoking a Manager's grant is safe under `EIS-CNF-02`: the commit holds FOR SHARE on the authority rows, so a revocation either precedes it (and is seen) or waits. SB-P-1.16 also introduces new object-scope facts, namely which evidence items or customers are "assigned" to a Manager. If assignment is stored as a column on the evidence row, or in a table outside the three serialization row types, reassignment between preview and commit is not serialized and the binding's authority epochs do not change. A Manager could then resolve evidence no longer assigned to them.
- **Required correction or evidence obligation:** §20.4.9 or §20.5 should require every SB-P-1.16 object-scope assignment change to take FOR UPDATE on the business authority-state row and increment its epoch, as `EIS-CNF-02` requires. If that is too coarse, assignment must be re-checked under the evidence row lock with an assignment version in the binding fingerprint. A revocation must fail only the pending command (`15-§25-8`). The SR-02 grant model decides what is assignable. This finding fixes only how it serializes.
- **Uncertainty:** SR-02 or Mission Control may decide that no object-scoped assignment exists in Phase 1 (R15-11 is open), in which case this reduces to the ordinary grant path, which the draft already covers.
- **Trigger screen:** none.

### SR03-10 — The CONC tier and Scenario B concurrency coverage are too narrow, and their method does not prove overlap

- **Severity:** MEDIUM
- **Evidence:** Draft line 275 lists three CONC cases ("two actors resolving one evidence item; double allocation to one target; replay during confirmation") on the `concurrency.test.ts` precedent. That test issues concurrent requests with `Promise.all` (`6171d59f`, lines 46 and 89), which does not guarantee that the two transactions overlap in the database. The SB-P-1.11 verification method (`31ee15c2`, lines 1–24) uses two independent sessions, a database-side barrier and a holder that keeps the lock open, so the blocking is proven. Register rows `15-§21-8` and `15-§21-9` (draft lines 615–616) and `15-§13-1` to `-3` (lines 572–574) carry no CONC verification.
- **Affected FCTM IDs:** `15-§21-8`, `15-§21-9`, `15-§13-1`, `15-§13-2`, `15-§25-2`, `15-§25-8`, `15-§25-12`, `BP-§10.5-B3`
- **Affected Stage 7 draft sections:** §20.7.5, §20.7.8, §20.8
- **Related Stage 6 findings:** SB16-B6-14, SB16-B6-15, SB16-B6-26
- **Engineering implication:** As written, CONC can pass without any contention having occurred. It omits the following races:
  - reversal versus link commit, in both orders;
  - an out-of-order refund, then capture;
  - correction versus allocation;
  - revocation versus commit (present only under FA);
  - concurrent identical provider redelivery;
  - concurrent duplicate uploads;
  - two overlapping multi-target allocations submitted in opposite target order (the deadlock case);
  - an unknown-outcome retry after a forced rollback.
- **Required correction or evidence obligation:** §20.7.5 should require the two-session barrier method, or an equivalent deterministic interleaving, for every CONC case, with the observed blocking recorded as evidence. It should add the cases above. The §20.8 verification column for `15-§21-8`, `15-§21-9` and `15-§13-*` should add CONC. The Scenario B column at draft line 298 should add "a reversal arriving during confirmation forces re-confirmation, and nothing is linked as verified".
- **Uncertainty:** Test-project access and CI are unavailable (SB16-B6-26), so none of this is runnable today. This finding concerns the plan only.
- **Trigger screen:** none.

### SR03-11 — C-REP register rows cite the wrong section

- **Severity:** LOW
- **Evidence:** Eight register rows label C-REP "(§20.4.5)" (for example draft lines 389–395, 451 and 677). §20.4.5 is historical attribution, and the allocation command is §20.4.2. C-THR rows similarly cite §20.4.6 (overpayment) (lines 396–400). That is noted here only as an observation outside this domain.
- **Affected FCTM IDs:** `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2`
- **Affected Stage 7 draft sections:** §20.8
- **Related Stage 6 findings:** SB16-B6-05
- **Engineering implication:** Traceability from the allocation rows to the concurrency control is misdirected. An EIS author following the register would read the wrong control.
- **Required correction or evidence obligation:** Correct the cross-reference to §20.4.2, and check C-THR against the intended section.
- **Uncertainty:** None material.
- **Trigger screen:** none.

### SR03-12 — Scenario A stale-warning serialization is unstated

- **Severity:** LOW
- **Evidence:** Draft line 297: "Warning re-evaluated at commit (stale balance)". Register rows for C-THR (for example draft line 396) also cite "stale balance at confirmation". No lock is named. Two concurrent credit sales for one customer create new rows and share no target lock.
- **Affected FCTM IDs:** `14-§8-1`, `14-§8-2`
- **Affected Stage 7 draft sections:** §20.7.8, §20.4.4
- **Related Stage 6 findings:** none
- **Engineering implication:** Under warn-not-block no money fact is wrong. However, two concurrent sales can each commit without seeing the other, and the recorded Owner decision may cite a balance that was already stale at commit.
- **Required correction or evidence obligation:** The EIS should either take a participant-scoped lock on (business, participant) for credit-bearing creates, allocations and attribution, placed in the SR03-01 order, or record the balance snapshot with the decision and state that the race is accepted as awareness-only.
- **Uncertainty:** SR-01 may treat this as acceptable by design.
- **Trigger screen:** none. Neither option changes warn-not-block behaviour.

## 5. Dissent from the Stage 7 draft

- **§20.6, SB16-B6-14 marked DESIGNED.** I dissent from "DESIGNED" without qualification. Stage 6 asked Stage 7 to state the serialization point, and the draft lists controls without one (SR03-01). The evidence-link invariant, the correction path, out-of-order events and the evidence-to-repayment atomicity are not designed (SR03-02, SR03-04, SR03-06). "DESIGNED — EIS SPECIFICATION OBLIGATIONS OPEN (SR-03)" would be accurate.
- **§20.4.10 provider-event key.** I dissent from keying on event ID only. It departs from DC-05 and SB16-B6-14 without saying so (SR03-03).
- **§21.1 EQ-10 "Upstream amendment needed? No".** I largely agree. The external-event specialization of the `EIS-CNF-04` key (no actor, receipt-before-command) should nonetheless be confirmed with the SB-P-1.12 owner together with G-W1, because the locked text says the one pattern applies "for every command and external event intake" (SR03-08).
- **§21.5 "held is not T8".** No dissent from a concurrency standpoint. None of the races examined is infeasible. Each has a standard PostgreSQL treatment (row locks in a fixed order, uniqueness rules, key-scoped idempotency, a state precedence) with working precedents in this repository. "Held" correctly describes the unbuilt foundations.
- **§21.3 risk rating "Concurrent resolution or replay creating duplicate truth: High".** Agree.

## 6. Infeasible, unsafe, omitted, narrowed or reassigned rows

None found. Every finding is a specification obligation on rows that stay `IN SCOPE` with their existing dispositions. No row is infeasible or unsafe under the corrections proposed, and none is omitted, narrowed or reassigned by this review.

## 7. Summary

| Finding ID | Severity | Short title | Correction required |
|---|---|---|---|
| SR03-01 | HIGH | Serialization point and global lock order not stated | yes |
| SR03-02 | HIGH | Target-amount guard conflates two invariants and omits corrections | yes |
| SR03-03 | HIGH | Event-ID-only key departs from DC-05; cross-source duplicates | yes |
| SR03-04 | HIGH | Out-of-order events and reversal-versus-confirmation races | yes |
| SR03-05 | MEDIUM | One evidence item, two resolvers: loser outcome and automatic path | yes |
| SR03-06 | HIGH | Repayment-from-evidence not one atomic command | yes |
| SR03-07 | MEDIUM | Idempotency envelope must follow the corrected precedents | yes |
| SR03-08 | MEDIUM | Provider receipt namespace, forged pre-emption, derived keys | yes |
| SR03-09 | MEDIUM | Object-scope assignment changes must be serialized | yes |
| SR03-10 | MEDIUM | CONC tier too narrow; method does not prove overlap | yes |
| SR03-11 | LOW | C-REP register rows cite §20.4.5 instead of §20.4.2 | yes |
| SR03-12 | LOW | Scenario A stale-warning serialization unstated | yes |

**STOP FOR MISSION CONTROL SPECIALIST FINDINGS REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
