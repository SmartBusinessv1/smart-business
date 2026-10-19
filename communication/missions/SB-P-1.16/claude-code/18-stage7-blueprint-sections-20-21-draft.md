# SB-P-1.16 — Proposed Blueprint Sections 20–21 (Stage 7 Draft v0.2)

**DRAFT v0.2 — CONSOLIDATED CORRECTION CANDIDATE — NOT APPROVED — NOT PART OF THE APPROVED BLUEPRINT**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Stage:** Source 18 v1.2 Stage 7 — Engineering Review  
**Prepared by:** Claude Code, Engineering Review Actor (MC-179; v0.2 under MC-241A). Claude Code was also the Stage 2–4 Definition Actor and the Stage 6 Builder Review Actor, so **this draft is not independent assurance**  
**Version:** 0.2 — one consolidated correction round applying C-01 to C-28 (proposal MC-228A, accepted MC-230; activation MC-241). Version 0.1 is blob `1064ab18`  
**Baseline:** `main@22bbf4221a8be8755f853635d7f2974a4fb6e7d0` (Blueprint v0.3 merge; post-merge verification MC-241)  
**Applies to:** approved Blueprint `docs/phase-1-mission-blueprint/active/SB-P-1.16.md` (blob `5956ed1102dc75eeb4de322146185bcaa9e0f6b6`). Sections 1–19 are not changed, renumbered or restated. These sections are written to follow Section 19 once Mission Control authorizes their incorporation  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This draft is an engineering review. It is not an EIS, an Implementation Package, a schema or a migration. Its data designs are logical proposals for the EIS stage; it contains no DDL, SQL or code. No row disposition, owner, build commitment, Founder decision, source contract, Source 11 or Build Plan content is changed.

## 20. Engineering Review

### 20.1 Scope, baseline and independence

- **Inputs.** Approved Sections 1–19 (Blueprint v0.3, blob `5956ed11`); the Stage 6 Builder Review (blob `c9a93566`, PR #967); the canonical FCTM (blob `94dd5220`, 555 rows, including the 26 `16:FPDR-10` Founder-decision citations of PR #973); `16:FPDR-1` to `16:FPDR-9` (blob `30b19a80`) and `16:FPDR-10` (record `22-…`, blob `bd5a5f0c`); the Truth Pack (`4a7bfe4f`), the Stage 3 reconciliation report (`b40b988c`) and the Institutional Learning Intake (`2cf06c17`); the six specialist reviews SR-01 to SR-06 and the FIN-01 review (`specialists/01` to `07`); and the Mission Control rulings MQ-01 and MQ-03 (MC-224, MC-225), OQ-03 (MC-225), the finding disposition and 14-Q1 hold (MC-226) and MQ-07 (MC-230).
- **Repository state.** Application code, schema, tests, workflows and configuration are unchanged from the Stage 6 base `3c9a7743` to `main@22bbf422`: every change in that range is documentation under `communication/` and `docs/phase-1-mission-blueprint/`.
- **Independence.** Same-actor authorship across Stages 2, 3 (preparation), 4, 6 and 7 is a correlated-assumption risk. The six specialist reviews were run as same-provider Claude subagents commissioned by the author; they are mandatory domain inputs, not independent assurance and not Stage 19 (Section 21.9). Stage 19 independent verification by another actor remains mandatory (Source 18 §4.9).
- **Access.** No production system, Supabase test project, provider dashboard, CLI, deployment or merchant record was accessed. No SQL, migration, rehearsal, profiling or integration was executed.

### 20.2 Evidence categories

| Category | Content | Use in this section |
|---|---|---|
| **Verified repository fact** | Stage 6 evidence E-01 to E-14 at `3c9a7743`, unchanged at `5a4d2243`. Also: `.github/workflows/build-assurance.yml` (`2aadab0b`, lint and typecheck on push and PR to `main`); `full-assurance.yml` (`464b3e9c`, Supabase-dependent `vitest` suite, path-filtered); `markdown-quality-gate.yml` (`5c92d6ac`); 28 application test files under `tests/` (catalog import, inventory, parser lease), none for transactions; `vitest.full.config.ts` requires `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY` and `SUPABASE_TEST_SERVICE_ROLE_KEY` | Current architecture (20.3); CI tiers (20.7.6) |
| **Locked upstream specification (not implemented)** | SB-P-1.12 EIS (`c444f750`): `EIS-ID-03`, `EIS-ID-05`, `EIS-KER-02`, `-06` to `-09`, `EIS-AUT-01`, `EIS-ISO-01` to `-04`, `EIS-CNF-01` to `-06`. SB-P-1.13 EIS (`9a1e723d`): `EIS13-CMD-02`. SB-P-1.14 EIS (`899a0fe1`): `EIS14-LDG-01` to `-06`, `EIS14-TOT-01`, `EIS14-CMD-01` to `-03`, `EIS14-IDM-01`, `-02`, `EIS14-SRC-01`, `-03`, `EIS14-MIG-01` to `-06`. SB-P-1.15 EIS (`75dcf385`): `EIS15-TZ-*`, reminder, scheduler and notification foundations | Every design in 20.4 and 20.5 consumes these and adds no parallel foundation |
| **Actor inference (to be confirmed at EIS or by specialists)** | That `EIS-AUT-01` can admit provider events (G-W1); that settlement files carry payment-level lines; that providers report minor units; the logical designs in 20.4 | Marked "proposed" wherever used |
| **Unavailable evidence** | Live grants, RLS and policies; test-project state (paused, Truth Pack Δ-06); historical credit-method sale counts and shape; provider capabilities and terms; AI provider; CI runs (`actions/runs` total 0). All `UNVERIFIED — ACCESS REQUIRED` | Never treated as PASS |

### 20.3 Current architecture (verified) and target component map (proposed)

**Current architecture (verified).**

- **Application.** TanStack Start, built for a Cloudflare target. `src/server.ts` exposes only a `fetch` handler; there is no scheduler and no webhook route.
- **Data and auth.** Supabase Postgres and Auth. One business per Owner, with Owner-only RLS (`owner_id = auth.uid()`). There are no memberships, roles or participant identities.
- **Ledger.** A `sale`/`purchase` table with a free-text `party_name` and `payment_method` including `credit`. Writes are a direct client insert, the Owner `UPDATE` policy, and the legacy `correct_transaction` (`SECURITY INVOKER`) with directly insertable correction events.
- **Grants (repository text; live state unverified).** Per role, on the Ledger family: `anon` and `authenticated` hold broad default grants; `authenticated` clients insert `transactions` directly and the Owner holds an `UPDATE` policy; the Owner inserts `transaction_correction_events` directly; the legacy `correct_transaction` runs `SECURITY INVOKER`. Live effective access is evidence held for the P-2 and P-3 inventory before Stage 13 (SR02-02).
- **Service role.** A service-role client used by the catalog-import server path. The source-complete handler inventory required by `EIS-ISO-04` is an EIS obligation (P-4).
- **Providers.** No payment, messaging or AI SDK.
- **Precedents.** The inventory movement command (idempotency keys with payload fingerprint) and its test suite (concurrency, idempotency, RLS cross-business, shared write path, audit integrity) are the nearest working pattern. So are the catalog link preview tokens, which are the precursor of `confirmation_bindings`.

**Target component map (proposed).** Each component consumes the locked upstream foundations; none re-implements them.

| Code | Component | Consumes | Owner of the component |
|---|---|---|---|
| C-ID | Credit-to-participant identity reference | SB-P-1.12 participant identity (`EIS-ID-03`) | SB-P-1.16 (`16:FPDR-1`) |
| C-LDG | Credit facts on the four-state Ledger | SB-P-1.14 `EIS14-LDG-01` to `-04`; `DTX` | SB-P-1.14 model; SB-P-1.16 credit-specific use |
| C-DUE | Due/expected date and ageing | `EIS15-TZ-*` business timezone | SB-P-1.16 |
| C-BAL | Canonical balance and ageing definition | C-LDG, C-ID, C-REP | SB-P-1.16 |
| C-CAP | Credit capture inputs | Native transaction form; SB-P-1.13 for conversation and voice | SB-P-1.16 |
| C-REP | Repayment allocation and linkage | `EIS14-LDG-03` | SB-P-1.16 |
| C-THR | Threshold and warn-not-block decision record | C-BAL; SB-P-1.12 kernel | SB-P-1.16 |
| C-FUP | Owner follow-up and communication preparation | SB-P-1.15 reminders; SB-P-1.13 drafting | SB-P-1.16 (preparation only) |
| C-READ | Intelligence and reconciliation reads | C-BAL; SB-P-1.15 Ask CFO and Daily Intelligence | Readers: SB-P-1.15; data: SB-P-1.16 |
| C-ORD | Order and COD linkage adapter | C-LDG, E-LINK | Adapter: SB-P-1.16; demonstration: SB-P-1.18 |
| C-AUTH | Capability and role boundary | SB-P-1.12 registry and kernel | Capabilities registered by SB-P-1.16 |
| C-CNF | Clarification and exact confirmation | `EIS-CNF-01` to `-03` | SB-P-1.12 primitive; SB-P-1.16 use |
| C-AUD | Correction and audit | `EIS14-CMD-02`, `-03` | SB-P-1.14 command; SB-P-1.16 use |
| C-PRIV | Privacy, isolation and dignity | `EIS-ISO-01` to `-04` | Shared |
| E-STATE | Verification state model | — | SB-P-1.16 |
| E-SRC | Evidence source adapters and provider-account binding | `EIS-ID-05`, `EIS-AUT-01`, `EIS-KER-06`, `EIS-CNF-06`; `22-§17-3` | SB-P-1.16 (adapter contract); provider: not selected |
| E-REC | Evidence record | SB-P-1.14 governed storage for raw evidence | SB-P-1.16 |
| E-MATCH | Deterministic candidate matcher | C-BAL, E-REC | SB-P-1.16 |
| E-LINK | Evidence-to-record linking | `DTX`; `EIS-CNF-01` | SB-P-1.16 |
| E-REV | Review queue (ambiguity, mismatch, unlinked) | C-CNF; C-AUTH | SB-P-1.16 |
| E-IDM | Evidence and link idempotency | `EIS-CNF-04`; `EIS14-IDM-01` | Shared pattern; SB-P-1.16 keys |
| E-RVS | Reversal, refund and chargeback handling | E-STATE, C-AUD | SB-P-1.16 |

### 20.4 Financial-integrity controls (proposed logical design)

Each control states the proposal, the upstream basis, and whether an upstream amendment or Founder decision is needed.

#### 20.4.1 Customer identity reference (EQ-01; SB16-B6-02)

- **Proposal.** A credit-bearing Ledger row carries a business-scoped composite reference to the SB-P-1.12 participant identity, `(business_id, participant_id)`. Credit-bearing rows are a `sale` with `payment_method = credit`, a `credit` with direction `owed_to_business`, and a `repayment`.
- **How the reference is written.** Only the governed create, correct and attribute commands set it, inside the same transaction as the Ledger write (`DTX`).
- **Ambiguity.** Ambiguous names return a clarification. There is no automatic match (`16:FPDR-1`).
- **Lifecycle.** A null reference means "unattributed". Changing a reference is an audited correction.
- **Derivation.** A `repayment` carries no independently settable participant reference: its participant is derived from its settlement target. The EIS states this as an invariant enforced by the governed commands (carry-forward CF-1, Section 21.8).
- **Basis.** `EIS-ID-03` (one shared participant record per business); `EIS14-SRC-01` (SB-P-1.14 creates no identity table).
- **Amendment or decision needed.** No Founder decision. This is an additive change to the `transactions` family, so it must be sequenced **after** SB-P-1.14 M14-1 (`EIS14-MIG-01`) and coordinated with the PQ-2 / `DTX` cut-over. If Mission Control prefers a separate link table written by the same command, the EIS records the choice. Either form satisfies `14-§21-6` (no separate credit database).

#### 20.4.2 Credit and repayment linkage (SB16-B6-01, -05)

- Credit facts use the SB-P-1.14 four-state model (`EIS14-LDG-01`, `-02`). A credit-method sale remains one `sale` row (`EIS14-LDG-04`).
- A repayment references exactly one settlement target (`EIS14-LDG-03`).
- **Proposed for EQ-04.** A lump sum is recorded by one governed allocation command that takes an allocation list `(target, amount)` and creates one repayment row per target, atomically. Each allocation must not exceed that target's current outstanding amount, and the allocations must sum to the payment amount; an allocation larger than the outstanding amount is an excess case (20.4.6). There is one idempotency key per command, and one confirmation binding covers the whole allocation. One evidence item may back an allocation group through one link per allocation, with linked amounts governed by the invariants of 20.4.9. Fast Gate fixtures cover one-to-many and many-to-one.
- **Amendment or decision needed.** None for allocation. Excess is treated in 20.4.6.

#### 20.4.3 Due dates and ageing (EQ-02; SB16-B6-03)

- **Proposal.** An optional `due_on` date attribute on credit-bearing targets (credit-method `sale` and `owed_to_business` `credit`). It is set at capture or later by a governed, audited "set or change due date" command. **No default value, no system period and no mandatory entry** (`16:FPDR-5`).
- **Overdue.** Overdue holds only when `due_on` < business-local today **and** the target's outstanding amount is greater than zero. "Business-local today" comes from the Owner-confirmed IANA timezone (`EIS15-TZ-*`). While no timezone is confirmed, overdue is not computed and credit age is shown instead.
- **Ageing.** Credit age is measured from `transaction_date` per open target. Threshold comparison stays separate from due-date status.
- **Amendment or decision needed.** None. The column is SB-P-1.16's, added after M14-1 and on the `DTX` path. Ageing waits for `D15` timezone (`DSCH` for scheduled presentation).

#### 20.4.4 Authoritative balances (EQ-03; SB16-B6-04)

- **Proposal: one hardened, kernel-checked, SQL-level definition**, on the `EIS14-TOT-01` pattern, computed **only from authorized Ledger financial facts**. Evidence-verification status is a separate property shown beside the balance and never changes it (MQ-01 reading A, MC-224/225: the verified-amount rule of `16:FPDR-3` governs evidence-backed repayments only; an ordinary authorized repayment reduces the balance without verification; evidence alone never changes a balance).
  - **Target outstanding** = target amount − Σ(linked repayment amounts).
  - **Customer balance** = Σ target outstanding over attributed targets.
  - **What counts as a target:** current values (after governed corrections) of `sale` rows whose **current** `payment_method` is `credit`, and of `credit` rows with direction `owed_to_business`. If a correction changes a sale away from `credit`, the `EIS14-LDG-03` revalidation applies to its linked repayments and the case goes to review.
  - **What never counts:** unattributed historical credit is reported as a separate "unattributed credit" total. A flagged reversal (20.4.10) changes no balance until the Owner corrects the Ledger.
- **Readers.** Ask CFO, Daily Intelligence, threshold warnings, the review queue and exports all read this one definition (DC-07; `14-§21-6`).
- **Correction guard (C-01).** For every settlement target, the sum of its active repayments never exceeds its current amount, and every active repayment references a target that is currently valid under `EIS14-LDG-03`. Every governed command that can change an operand (record repayment, allocation, correction of a repayment amount or target, correction of a target amount, payment method, type or direction) checks this in the same transaction and, if it would fail, stops and returns a clarification before commit. A correction that would leave excess over a target raises the `16:FPDR-10` D-5 exception: no advance is created automatically, and the Owner chooses explicitly (20.4.6). Whether the guard needs an `EIS14-CMD-02` extension is recorded with upstream question 14-Q6.
- **Measures (C-08, C-25).** Outstanding, collected and held advance are three distinct measures defined once and consumed by every reader; a held advance is neither outstanding nor collected. Representing an advance as an `owed_by_business` credit (`EIS14-LDG-02`; SB-P-1.14 `FPDR-1` "owed to or by") is **PROVISIONAL** (FIN-01), pending 14-Q2 and the EIS.
- **Out of this balance.** Supplier-side `owed_by_business` credit belongs to SB-P-1.17 (`7-§3`). The direction itself is not supplier-only; a customer advance held under 20.4.6 is reported as its own measure, never netted silently into the customer balance.

#### 20.4.5 Historical sales attribution (SB16-B6-06; OQ-05)

- **Proposal.** An Owner-only "attribute historical credit sale" command. It shows the exact sale, the chosen participant and the resulting balance in a preview with a confirmation binding. It writes only the identity reference and an audit event. It creates no new sale, income or repayment, and it preserves the original row identity (`16:FPDR-2`).
- **No automatic assignment.** There is no suggestion-as-assignment by name or phone.
- **Multi-row attribution.** If offered, each row is still listed and bound exactly.
- **Data profile.** A read-only profile of historical credit-method sales, including possible repayments recorded as `sale`, needs separate authorization (OQ-05). No migration or job reinterprets history (`EIS14-LDG-04`).
- **Disclosure (C-07).** Unattributed totals and the attribution preview use EIS-defined arithmetic with explicit disclosure of missing facts. No historical `sale` row is converted into a repayment (MQ-02 open; the interim treatment is disclosure only).

#### 20.4.6 Overpayment and customer advance (SB16-B6-05; `16:FPDR-10`)

- **Decided behaviour (`16:FPDR-10` D-1 to D-6).** An excess repayment stops automatic financial commitment and requests Owner clarification. The Owner may explicitly retain the excess as a separate customer advance, which persists until an explicit Owner-authorized application or refund. There is no automatic income recognition, offset, refund or AI decision, and no automatic advance resulting from historical corrections. Permission, audit, idempotency and amount-conservation requirements are preserved.
- **Excess is not a verification mismatch.** An excess is an authorized repayment or allocation larger than the selected targets' outstanding amount: it is a clarification case under D-1, decided only by the Owner. A verification mismatch is evidence whose amount, direction, currency or reference conflicts with the record it was matched to: it is a verification state under 20.4.7, resolved in review. Neither creates an advance, a repayment or a balance change automatically. Evidence larger than a target's outstanding amount is routed to review; it becomes part of an advance only through an explicit Owner retention (D-2).
- **Obligations M-1 to M-4.** Persistence of a retained advance and a single remaining-advance calculation; explicit Owner-authorized application; explicit Owner-authorized refund; acceptance cases ADV-01 to ADV-10 (Blueprint §15.6).
- **Engineering proposal — PROVISIONAL (FIN-01; not approved).** An advance held as a customer-scoped `owed_by_business` credit row (14-Q2); application through a separate audited relation that leaves the one-target repayment rule intact (14-Q3); refund recorded as a repayment that targets the advance and is excluded from sales, income and collected measures (14-Q4); no new `transaction_type` (14-Q5). Application and refund take the target locks and invariants of 20.4.9 and the keys of 20.4.10. A reversed refund is held as a governed exception (AC-3); its treatment stays open. The EIS finalizes the representation only after the upstream findings.
- **Capabilities.** Retaining, applying and refunding an advance are Owner-reserved (20.5).

#### 20.4.7 Evidence authenticity, verification, upload review and matching as separate concepts (EQ-08; SB16-B6-12)

Four independent fields per evidence item:

| Concept | Values (illustrative; exact identifiers at EIS) | Set by |
|---|---|---|
| Source authentication | `provider_authenticated` (signature and account binding verified); `merchant_submitted` (upload); `unauthenticated` (rejected for authoritative use) | Ingestion path only |
| Provider status | Provider-reported status (for example captured, settled, refunded, disputed) | Provider event only; never shown as funds in the bank (`16:FPDR-6` §2) |
| Verification state | Contract 15 §4 states (pending/unverified, evidence received, matched/verified, ambiguous/review required, mismatched, unlinked, reversed/invalidated) | Matching and review rules |
| Review provenance | `human_reviewed` (actor, binding, time) for merchant-submitted evidence | Review command |

- **Upload rule.** A merchant-submitted item can reach "linked after human review". It never reaches a provider-authenticated or provider-verified label (`16:FPDR-6` §3; `16:FPDR-9` §7).
- **Part-payment versus mismatch.** A verified part-payment and a mismatch never share a label (`16:FPDR-3`).
- **Matching is separate.** The match outcome is a separate link record (20.4.9), so authenticity, verification and matching are three independent questions.
- **Part-payment versus mismatch predicate (C-05; finalized in the EIS).** A verified part-payment is evidence whose verified amount is less than the linked target's outstanding amount, with matching direction, currency and identity signals. A mismatch is any conflict of amount beyond the outstanding amount, direction, currency or reference. Excess over the outstanding amount is never treated as a part-payment and never as an advance without the Owner (20.4.6). The EIS fixes the exact predicate using the linked-amount sums of 20.4.9.

#### 20.4.8 Evidence record, adapters and provider-account binding (EQ-05, EQ-06, EQ-09; SB16-B6-09, -10, -13)

- **Normalized evidence record (proposed):**
  - business;
  - adapter or provider kind;
  - provider-account binding reference;
  - external event ID and external payment reference (UTR where available);
  - amount in minor units and currency;
  - direction;
  - occurred-at and received-at;
  - source authentication;
  - provider status;
  - verification state;
  - raw-evidence pointer into SB-P-1.14 governed storage;
  - idempotency key;
  - payer, payee and account hints: a minimized, permission-scoped field (masked or truncated values, or a participant reference rather than a copy). Its permitted content awaits qualified counsel on "where permitted" (SR06-08 question 3; U-08). The matcher uses hints only as candidate signals, never as identity resolution (`16:FPDR-1`) (SR06-02; SR05-11).
- **Amount conversion.** A Ledger amount (`NUMERIC(12, 2)`, INR) is compared only after exact minor-unit conversion when the currency is INR. Other currencies are recorded as unsupported or mismatched and never rounded.
- **Provider-account binding.** A business-scoped integration identity, `(business_id, binding_id)` (`EIS-ID-05`), created by the Owner. The business for an inbound event is resolved **only** from the verified binding, never from payload fields.
- **Adapter contract (provider-agnostic, `22-§17-3`; DC-13):** `verify` (signature and freshness), `normalize`, `fetch_settlement` and `map_status`, with a concrete `15-§24-3` lock-in check: a second, fake adapter passes the same contract tests (C-23). Provider-specific code stays in the integration layer (`16:FPDR-6` §7). **No provider is selected.**
- **Intake and principal (C-11; G-W1).** Accept-then-process: (1) a server-only receipt step verifies signature, freshness and binding, resolves the business only from the verified binding and stores the raw event; (2) processing runs as an `EIS-AUT-01` automation principal derived from an Owner-enabled integration rule bound to the provider-account binding, on channel `integration` (`EIS-KER-06`), with `EIS-CNF-04` idempotency and `EIS-CNF-06` narrow failure. Processing only records and classifies evidence; it never changes the Ledger or a balance by itself (MQ-01). Upstream findings are requested and not presumed: 12-Q1 (`EIS-AUT-01` is silent on what may start a run) and 12-Q2 (`EIS-ISO-04` assumes a caller client; conditional watch T2-W2). Provider activation remains NOT AUTHORIZED (`DPAY`).
- **Routing and secrets (C-12).** Inbound events are routed by binding identity. A binding activates only after the Owner proves control of the provider account, and a binding is unique per provider and external account. Per-binding secrets are held only server-side, never in client code, the repository or migrations; the storage home is a Mission Control infrastructure choice and stays open.
- **Deferred channels.** Generic direct-bank API and standalone bank-email adapters are **not designed or built** (`16:FPDR-9`). Their rows stay `IN SCOPE` and traced (F-7).
- **Preservation (C-17; MQ-03, MC-224/225).** Validly submitted payment evidence that is under review or awaiting matching is never silently discarded by the temporary-upload staging grace. Proposed mechanism: explicit submission into the payment-evidence workflow is the `EIS14-RET-01` confirmation that promotes the object to durable storage, whatever the link outcome; abandoned drafts that were never submitted stay under the grace. The SB-P-1.14 compatibility question (14-Q1) is held for EIS resolution (MC-226); a contrary upstream reading is screened before any dependent design changes (conditional watch T2-W1). No retention period or deletion authority is set. The EIS carries a test that unlinked and under-review evidence survives the grace.
- **Retention inputs.** The EIS consumes the upstream retention, hold and deletion specifications (`EIS14-RET-01`); it authors none (SR06-03; U-08).

#### 20.4.9 Matching, idempotent linking and concurrent confirmation (EQ-07, EQ-10; SB16-B6-11, -14)

- **Matching.** Deterministic candidate generation over open targets uses amount, reference, time window, direction, identity hint and method. Every candidate list carries an explanation. A strong unique match links; otherwise the item goes to review (`15-§7-*`, `15-§9-*`). Windows are tuned, not fixed historical formulas (`15-§7-9`).
- **A link is a property of the existing record.** Linking creates a link record against the existing sale or repayment target. It never creates a second financial transaction (`15-§8-7`).
- **Invariants and serialization points (C-15).**
  - (a) The sum of active linked amounts per evidence item never exceeds the evidence amount — evidence-item row lock.
  - (b) The sum of active repayments per target never exceeds the target's current amount, and every active repayment references a currently valid `EIS14-LDG-03` target — target row lock.
  - (c) A confirmation binding is single-use, consumed atomically with the link (`EIS-CNF-01`) — binding row lock.
- **Every writer that can change a guarded quantity** — record repayment, allocation, create-and-link, governed corrections of a repayment amount or target, a target amount, payment method, type or direction, historical attribution, and advance application or refund — takes the target lock and re-evaluates (b) before writing. A violating command stops and returns a clarification; it never leaves a negative outstanding.
- **One total lock order**, used by every writer and every locking preview and finalized in the EIS. Candidate: `EIS-CNF-02` authority rows (`FOR SHARE`); a key-scoped transaction lock on (business, operation, idempotency key); evidence items by ascending UUID; Ledger targets by ascending UUID; the binding row. The EIS states the isolation assumption, and every guarded aggregate is read after its lock is held.
- **Binding fingerprints** include each target's row version, so a correction between preview and commit forces re-confirmation (DC-06).
- **Revalidation at commit** of permission, object scope and state (`EIS-KER-09`; `EIS-CNF-02`, whose serialized facts include object scope; upstream confirmation 12-Q3).
- **Link types (C-02; MQ-01).** (1) Evidence verifies an existing `repayment` or credit target. (2) Authorized create-and-link: one governed command, explicitly invoked by an authorized actor, creates exactly one `repayment` through `EIS14-CMD-01` and its link in one transaction, idempotent on the evidence identity, after showing existing unverified repayments on that target as candidates to link instead. (3) Evidence verifies a sale paid at the time of sale. Each link carries a linked amount. The matcher may link automatically only for types (1) and (3) on a strong unique match, which changes verification status and never a financial fact; type (2) always needs explicit authorized invocation. Evidence alone never creates or changes a financial fact or a balance.
- **Concurrent resolution (SR03-05; finalized in the EIS).** The loser of two concurrent resolutions receives a defined "already resolved" outcome, and supersession of a link is a governed, audited transition.
- **Settlement (EQ-07).** Settlement evidence is a separate kind with lines. Lines match payment evidence, not sales directly. Fees, taxes and adjustments are shown as explained variance on the settlement. **No automatic fee-expense entry** (OQ-02; T3-W2). Settlement status is never shown as funds in the bank. Settlement-source authentication and line detail are provider-dependent, and the settlement mechanism is **PROVISIONAL**; fee treatment awaits OQ-02 (SR05-07).

#### 20.4.10 Idempotency, reversals and chargebacks (EQ-11; SB16-B6-14, -15)

- **Idempotency in three layers (C-16; a stated specialization of `EIS-CNF-04` for external-event intake, following the corrected precedents).**
  1. Receipt: (business, provider-account binding, external event ID) with a stored payload fingerprint. A same-ID, different-payload delivery is a recorded conflict and is never applied. Receipt keys are registered only after signature and binding verification, so a forged request cannot occupy a key.
  2. Payment identity: one provider-authenticated evidence item per (business, binding, external payment ID); later events append state history to that item.
  3. Cross-source correlation on (business, normalized external payment reference or UTR where available) and on the business-scoped content fingerprint (`EIS14-IDM-02`). An active link held by any correlated item stops the commit and routes the items to review. Nothing merges automatically.

  Commands use (business, actor, operation, key, payload fingerprint); commands derived from an event use keys derived from its receipt key. A replay returns the original outcome (DC-05). One key-scope scheme across provider, binding and actor is finalized in the EIS (CF-5).
- **Reversals, ordering and partial states.** A refund, reversal, dispute or chargeback is new evidence linked to the original. It moves the original to `reversed/invalidated` with history kept, flags the affected link and target for Owner review, and **does not change the Ledger or the balance** until the Owner runs a governed correction (`15-§13-*`; `16:FPDR-6` §6). This fail-closed rule extends to late and out-of-order events — an older event never overrides a later state, and a conflict goes to review (CF-3) — and to partial refunds and dispute lifecycles, whose state model is finalized in the EIS without any new merchant-facing label (CF-4; MQ-04 open). Missed-event reconciliation depends on `DSCH` (SR05-04).
- **Void (C-03).** A reversed repayment is expressed by a governed void that keeps history, pending upstream question 14-Q6(a) (conditional watch T8-W2). Until then the reversal stays flagged for Owner review with no Ledger change.

#### 20.4.11 Corrections, audit and communication preparation (SB16-B6-07, -19)

- **Corrections.** All consequential changes use the SB-P-1.14 governed correction command (`EIS14-CMD-02`), which writes prior and new values in an append-only event. This covers amounts, identity references, due dates, allocations and links.
- **Precondition (C-09).** Before any SB-P-1.16 write, `PUBLIC` and `anon` hold no privilege of any type on protected tables, views, sequences and functions, and `authenticated` holds only the separately approved `SELECT` (through kernel RLS) and `EXECUTE` grants; every other privilege type is revoked. This applies to the existing `transactions`, `transaction_correction_events` and `businesses` objects as well as to new ones, and closes direct mutation (`EIS14-CMD-03`): no direct client `INSERT`, `UPDATE` or `DELETE` on `transactions`, and no client-insertable correction events. Birth-safe creation and effective-access proof follow `EIS15-SEC-01` and `EIS15-SEC-02`. After closure no client can set `creator_id`, `created_at`, `id`, `notification_status` or `notification_sent_at`; the legacy notification fields are retired or written only by an approved, channel-bound path (`16:FPDR-8` §3). Note for the SB-P-1.14 owner: the `EIS14-CMD-03` privilege inspection includes the non-DML privilege types and `anon` (an evidence clarification, not a new requirement).
- **Communication.** Drafts are stored with their state (`draft`, `approved`) and the approving actor. No `sent` or `delivered` state exists before an approved channel (`16:FPDR-8`; `DNTF`).
- **Records (C-19; finalized in the EIS).** Legacy correction history is labelled pre-closure and is not treated as reliable audit evidence. The `due_on` lifecycle under correction and at migration is specified. A correction and de-identification path for customer personal data in append-only records, and a record class for communication drafts, are EIS obligations pending U-08 and counsel.

### 20.5 Permission and security design boundaries (proposed)

| Boundary | Proposal | Basis |
|---|---|---|
| Owner-reserved decisions | Owner-only; not delegable by role default or by explicit grant; registered as non-delegable in the capability registry so that `EIS-KER-04` cannot create a grant: `credit.configure_threshold`, `credit.decide_override` (approve, decline, adjust, grace), `credit.attribute_historical`, `recon.manage_provider_binding`, `credit.approve_communication` (Owner-only as the current state under `16:FPDR-8` §2, not a permanent narrowing), and the customer-advance actions retain, apply and refund (`16:FPDR-10` D-2 to D-4; identifiers at EIS). Every designed action is classified as Owner-reserved, one of the six `16:FPDR-7` capabilities, or Owner-only pending a decision; no new delegable capability is created | `16:FPDR-7` §3; `16:FPDR-4`; `16:FPDR-8` §2; `16:FPDR-10` |
| Scoped Manager delegation | Separately grantable and object-scoped capabilities: `credit.view_assigned_balances`, `credit.propose_repayment`, `credit.record_repayment`, `recon.review_assigned_evidence`, `recon.view_assigned_cases` and `recon.resolve_assigned_match` (separate). None is implied by the Manager role. **MQ-07 (MC-230):** a Manager separately authorized with `credit.record_repayment` may record repayments, including through the allocation command, within a valid scoped delegation; `credit.propose_repayment` is proposal authority only and never confers recording authority. Linking reviewed merchant evidence falls under `recon.resolve_assigned_match`. Owner-only financial decisions and every customer-advance action stay Owner-reserved and are never delegated. No merchant-facing grant UI is assumed while R15-11 is open | `16:FPDR-7` §§1–2, 6; `EIS-KER-08`; MC-230 |
| Employee | May record a permitted credit sale through the existing create capability (`EIS14-LDG-06`). Transaction entry is not permission to inspect balances: command responses to an Employee exclude balance, outstanding, threshold and advance values. No Employee financial intelligence by default; no evidence or reconciliation visibility; no customer-advance financial action is delegated; `16:FPDR-4` does not expand Manager or Employee access. The threshold warning is routed to the Owner (OQ-03 resolved, MC-225) | Contract 14 §14 p3; `16:FPDR-4`; `16:FPDR-7` §5; MC-225 |
| Customer | No Ledger capability. A participant only in merchant-approved communication. No delivery before an approved channel | `EIS14-LDG-06`; `16:FPDR-8`; `3-§11-6` |
| RLS and database privileges | Kernel-based deny-by-default RLS on every new table (`EIS-ISO-01`). Commands are the only write boundary (`EIS-ISO-02`). `PUBLIC` and `anon` hold no privilege of any type on protected tables, views, sequences and functions; `authenticated` holds only the separately approved `SELECT` (through kernel RLS) and `EXECUTE` grants; every other privilege type is revoked, on the existing `transactions`, `transaction_correction_events` and `businesses` objects as well as on new ones. Birth-safe creation and effective-access proof follow `EIS15-SEC-01` and `EIS15-SEC-02`, including the default privileges of creator roles (`EIS-ISO-03`); live state is evidence held (P-2, P-3) | SB16-B6-08; Truth Pack Δ-03; SR02-01; SR04-02 |
| Server-derived authority | Every principal from `EIS-KER-02`; no actor, business or role from request bodies or provider payloads | `EIS-KER-02` |
| Provider webhook validation | Signature verification with the binding's secret, a timestamp or freshness window, and a replay key. The business comes from the verified binding only. A failed-verification request is never an evidence item: it is recorded, if at all, in a bounded security log keyed by the claimed binding, with minimal fields and volume limits; it never appears in the evidence list or review queue, is never a matching input and is never counted in any coverage or verification measure. Endpoint secrets are held server-side only, never in client code, the repository or migrations | SB16-B6-09, -10; `16:FPDR-6` §1; `15-§22-6`; SR02-06 |
| Service-role use | Only inside `EIS-ISO-04` privileged operations bound to a decision record; never for ordinary reads; never as the source of a principal. A source-complete handler inventory, negative tests and privilege narrowing per the precedents are EIS obligations and an Implementation Authorization precondition (P-4) | SB16-B6-24; SR02-09 |
| Tenant isolation | All keys composite with `business_id`, which presupposes a `(business_id, id)` key on the Ledger table (SB-P-1.14 table; confirmed at EIS); cross-business access denied on every surface, including background and integration jobs; a dedicated cross-business test family on the inventory precedent | `EIS-ISO-01`; `15-§22-3`; SR02-03 |
| Execution-time revalidation | Grants, assignments, object scope, state and binding fingerprints re-checked at commit. Object-scope grants are serialized authority facts (`EIS-CNF-02`; upstream confirmation 12-Q3). Revocation before commit blocks only the pending action (`15-§25-8`) | `EIS-KER-09`; `EIS-CNF-02`; `16:FPDR-7` §4 |
| Platform and support | No support write path to SB-P-1.16 data. Any support read follows the SB-P-1.12 support-grant model; the EIS security matrix carries the row (CF-2) | `EIS-CNF-02`; `15-§17-4`; SR02-10 |
| Raw evidence | Access to raw evidence objects, which can hold third-party data, is a capability separate from access to the evidence record; the EIS names it | `15-§22-2`; SR06-05 |

### 20.6 Stage 6 finding dispositions

Disposition vocabulary:

- **DESIGNED:** a proposed treatment is in 20.4 or 20.5, to be confirmed at EIS.
- **PRECONDITION:** must be satisfied before any Implementation Authorization.
- **GATED:** waits on an external, provider or later-mission authorization.
- **ROUTED:** needs a Mission Control or Founder disposition.
- **CARRIED:** an assurance gap recorded without treatment.

| Finding | Severity (Stage 6) | Disposition | Proposed engineering treatment | Dependency | Verification approach |
|---|---|---|---|---|---|
| SB16-B6-01 No objects exist | HIGH | PRECONDITION | Sequence after `D12`, `D14`, `DTX`; components per 20.3; no parallel path | `D12`, `D14`, `DTX` | Write-path inventory; Stage 19 |
| SB16-B6-02 Identity link unspecified | HIGH | DESIGNED | 20.4.1 composite participant reference set only by governed commands | `D12`, `D14`, `DTX` | FA: ambiguous-name, no auto-match, cross-business |
| SB16-B6-03 No due-date home | HIGH | DESIGNED | 20.4.3 optional `due_on`, no default, business-local evaluation | `D14`, `D15`/`DSCH` | FG: predicate incl. timezone edges; FRV-A |
| SB16-B6-04 Balance definition | HIGH | DESIGNED | 20.4.4 single hardened definition consumed by all readers | `D14` | FG: balance algebra; FA: reader parity |
| SB16-B6-05 Lump-sum and excess | MEDIUM | DESIGNED | 20.4.2 allocation command with linked amounts; 20.4.6 excess stops and asks the Owner, who may retain a separate advance (`16:FPDR-10`); representation PROVISIONAL | `D14`, `DTX`; 14-Q2 to 14-Q5 | FA: atomic allocation, limits, excess clarification, ADV-01 to ADV-10; CONC |
| SB16-B6-06 Historical sales and repayments | HIGH | DESIGNED / ROUTED | 20.4.5 Owner attribution; read-only profile needs authorization (OQ-05) | `D12`, `D14`; data access | MIG rehearsal; specialist review |
| SB16-B6-07 Audit bypass | HIGH | PRECONDITION | `EIS14-CMD-03` closure before any SB-P-1.16 write (20.4.11) | `DTX` | SEC: effective-access and no-direct-DML check |
| SB16-B6-08 Default grants | HIGH | PRECONDITION | Every privilege type revoked, including on the existing Ledger objects; birth-safe creation and effective-access proof (20.5, 20.4.11) | `D12` (`EIS-ISO-03`); `EIS15-SEC-01`, `-02` | SEC inventory query per migration, all privilege types |
| SB16-B6-09 Provider principal | HIGH | DESIGNED / ROUTED | Accept-then-process intake and `EIS-AUT-01` principal (20.4.8); upstream findings requested (12-Q1, 12-Q2; watch T2-W2) | `D12`; `DPAY` | SEC review; contract test |
| SB16-B6-10 Gateway binding and credentials | HIGH | DESIGNED / GATED | `EIS-ID-05` binding, adapter contract; provider not selected | `DPAY` (NOT AUTHORIZED) | Provider activation evidence (Build Plan §5.4) |
| SB16-B6-11 Settlement fees | MEDIUM | DESIGNED / ROUTED | Settlement lines, explained variance, no auto-expense; mechanism PROVISIONAL; fee booking is OQ-02 | `DPAY` | FG: settlement fixtures |
| SB16-B6-12 Provenance versus state | MEDIUM | DESIGNED | 20.4.7 four separate fields | — | FG: state table; FA: labels; FRV-B |
| SB16-B6-13 Amounts and currency | MEDIUM | DESIGNED | 20.4.8 minor units, currency check, no rounding | `DPAY` | FG: normalization fixtures |
| SB16-B6-14 Concurrent confirmation and replay | HIGH | DESIGNED | 20.4.9 serialization points, total lock order, linked amounts, atomic create-and-link, single-use binding; 20.4.10 three-layer keys | `D12`, `DTX` | CONC with proven overlap on the inventory precedent |
| SB16-B6-15 Reversals | MEDIUM | DESIGNED | 20.4.10 flag and Owner review; no silent rewrite | `DPAY`, `D14` | FA: reversal fixtures |
| SB16-B6-16 Scheduler and timezone | MEDIUM | GATED | Native on-demand ageing; scheduled items wait for `D15`/`DSCH` | `D15`, `DSCH` | RT after SB-P-1.15 |
| SB16-B6-17 Manager scope and R15-11 | MEDIUM | DESIGNED / ROUTED | 20.5 capabilities; R15-11 stays open | `D12`; R15-11 | FA: capability matrix, revocation |
| SB16-B6-18 Employee exposure | MEDIUM | DESIGNED | 20.5 no Employee financial visibility; transaction entry confers no balance access (OQ-03 resolved, MC-225) | `D12` | FA: negative visibility and response-shaping tests |
| SB16-B6-19 Customer preparation-only | LOW | DESIGNED | 20.4.11 no `sent` state | `DNTF` | FA: state labels |
| SB16-B6-20 No native surface | MEDIUM | DESIGNED | Credit warning in the sale-entry flow; customer balance view; review queue in navigation (exact UX at design) | `D12`, `D14` | RT native path |
| SB16-B6-21 Sales versus collected | LOW | DESIGNED | Distinct measures via `EIS14-TOT-01` and C-BAL | `D14`, `D15` | FA: reader parity |
| SB16-B6-22 Ask CFO and DI | MEDIUM | GATED | Replace `15:FDB-3` only for demonstrated data | `D15`, `DAI` | RT after SB-P-1.15 |
| SB16-B6-23 COD | LOW | GATED | Adapter-ready link model | `D18` | Contract test; RT with SB-P-1.18 |
| SB16-B6-24 Service role | MEDIUM | PRECONDITION | `EIS-ISO-04` only | `D12` | SEC code review and test |
| SB16-B6-25 Retention | LOW | GATED | Non-destructive storage; preservation invariant for submitted evidence (MQ-03); no retention period set | U-08 / DC-11; 14-Q1 | Legal/privacy review; EIS survival test |
| SB16-B6-26 No CI or runtime | HIGH | CARRIED | CI tiers and environments in 20.7; no PASS from absence | Test environment; CI capacity | Stage 17–19 evidence |

### 20.7 Early delivery plan (planning only — nothing executed)

#### 20.7.1 Environments

| Environment | State | Use |
|---|---|---|
| Local development | Available; no Supabase access needed for Fast Gate | Fast Gate tests |
| Supabase test project | Paused per prior missions (Truth Pack Δ-06); `UNVERIFIED — ACCESS REQUIRED` | Full Assurance, migration rehearsal, Stage 19 verification |
| Production (Team LIPS Supabase; live app) | LIVE (`docs/migration/README.md`) | **No access.** Migration execution, production mutation and delivery are NOT AUTHORIZED |
| Provider sandbox | None; no provider selected | Provider contract tests after authorization only |
| Production-shaped rehearsal environment | Not identified; `UNVERIFIED — ACCESS REQUIRED` | Migration rehearsal at representative volume with the ACL baseline (SR04-11); evidence held |

#### 20.7.2 Expected migration classes (default-deny; none authorized)

Every class is `DRAFT OR PROPOSAL — NON-EXECUTABLE` under `docs/migration/README.md` until a new mission authorizes the exact package, environment, actor, backups, validation, rollback and window.

| Class | Content | Sequencing | Rehearsal and rollback |
|---|---|---|---|
| M16-0 | Prerequisites: SB-P-1.12 kernel (memberships, participants, bindings, idempotency); SB-P-1.14 M14-1 to M14-3; `DTX` cut-over with `EIS14-CMD-03` closure; SB-P-1.15 timezone | Upstream missions; not this mission's migrations | Per upstream EIS |
| M16-1 | Credit columns on the transactions family: participant reference, `due_on`; governed command widening (create, correct, attribute, set due date, record allocated repayment, create-and-link). Any advance or void representation is PROVISIONAL (FIN-01; 14-Q2 to 14-Q6) | After M14-1 and the `DTX` cut-over | Not purely additive: live-table operations need lock and FK characterization, and the existing cascade risk to unattributed history is recorded (SR04-03). Pre-data rollback; post-data forward-fix; rehearsal asserts ACL, RLS, the effective-access baseline (`EIS14-MIG-05` pattern), backup and PITR readiness, version order, the historical-totals invariant (`EIS14-TOT-01`) and `EIS14-MIG-06` for the second command widening (SR04-04, SR04-09) |
| M16-2 | Threshold, credit decision record and communication draft tables | After M16-1 | Additive; born hardened |
| M16-3 | Evidence, provider-account binding, link, settlement and review tables; idempotency registrations | After M16-1; adapter activation separately | Additive; born hardened; no provider secrets in migrations |
| M16-4 | Balance and ageing definition (view or function), born hardened; reader cut-over for Ask CFO and Daily Intelligence | After M16-1 and SB-P-1.15 readers | Replace-in-place. The acceptance and rollback oracle is an independent historical-totals invariant with recorded expected values, not parity with the previous reader output (SR04-08) |
| M16-5 | None for historical data. No backfill, reinterpretation or bulk attribution (`EIS14-LDG-04`; `16:FPDR-2`) | — | Profiling is read-only and separately authorized (OQ-05) |

#### 20.7.3 Cross-mission dependencies

- **Upstream:** `D12`, `D13`, `D14`, `DTX` / PQ-2 and `D15` (Blueprint §12.2). The coordinated `DTX` cut-over is the critical path, and no SB-P-1.16 write precedes it.
- **Downstream:**
  - `D18` (SB-P-1.18): COD and order demonstration through the C-ORD adapter;
  - `D19` (SB-P-1.19): the support-access boundary (`15-§17-4`);
  - `D20` (SB-P-1.20): the WhatsApp slice of the completion gates (`14-§25-1`, `3-§23`);
  - `DNTF`: customer delivery.

#### 20.7.4 Payment-provider activation dependencies

Provider selection; merchant eligibility; provider terms; costs; credential handling; webhook secret management; outage recovery; rollback; operational support (Build Plan §5.4; `16:FPDR-6` §7). Each needs separate validation and Mission Control or Founder authorization. Until then the 41 `DPAY` rows stay `IN SCOPE` and are reported as provider-held, never as passed.

**Activation mapping (SR05-09).** Before activation, each Build Plan §5.4 item has its own evidence: provider selection and terms; credentials and the per-binding secret-storage home (Mission Control infrastructure choice); webhook routing and proof of account control; a kill switch that stops intake while preserving received evidence; disconnect; rollback; outage recovery; operational support. Before any provider exists, the adapter contract is exercised against a fake adapter.

#### 20.7.5 Verification and security testing (proposed)

| Tier | Content |
|---|---|
| Fast Gate (FG) | Pure logic with no Supabase access: balance algebra, overdue predicate with timezone edges, allocation validation, evidence normalization (minor units, currency), state transition table, settlement variance, deterministic matcher fixtures; linked-amount sums; excess-versus-mismatch predicate; correction guard; three-layer idempotency keys |
| Full Assurance (FA) | Supabase test project: governed-command-only writes; RLS cross-business; capability matrix including Manager scope and revocation before commit; Employee negative visibility; ambiguous-identity clarification; idempotent replay of commands, uploads and provider events; reversal flagging; reader parity |
| Concurrency (CONC) | On the inventory `concurrency.test.ts` precedent, with overlap proven (both transactions demonstrably hold their snapshots concurrently, not merely issued close together): two resolvers on one evidence item; double allocation to one target; a correction racing a repayment or link; advance application or refund racing a repayment; replay during confirmation; revocation between preview and commit; Scenario B concurrency (SR03-10) |
| Security (SEC) | Effective-access inventory after every migration (anon, PUBLIC, authenticated, default privileges); no direct DML on protected tables; webhook signature, freshness and replay rejection; service-role confinement review; every privilege type per role, including non-DML types, sequences and function overloads; a failed-verification request creates no evidence row, review item or link; service-role handler inventory and negative tests (P-4) |
| Migration rehearsal (MIG) | Rehearsal on the test project per class; asserts constraints, ACL and RLS baselines; rollback and forward-fix exercised; backup and PITR readiness; historical-totals invariant; restore and rollback never resurrect deleted evidence or superseded verification state (SR06-09) |
| Runtime (RT) | Stage 19 independent verification by a non-builder actor |
| Founder runtime (FRV) | Scenarios A and B (20.7.8) |

#### 20.7.6 Continuous-integration tiers

- **Build Assurance:** lint and typecheck on every push and PR to `main`.
- **Full Assurance:** Supabase-dependent tests, path-filtered on `src/**`, `tests/**`, `supabase/**` and related paths. It needs the three `SUPABASE_TEST_*` secrets and a running test project.
- **Markdown Quality Gate.**

Today no workflow run exists (`actions/runs` total 0) and no status check is required on `main`. **CI is UNVERIFIED.** Implementation evidence needs restored Actions capacity, a running test project and recorded run-level evidence; none of this is assumed.

#### 20.7.7 Scope flags carried from Stage 1

`production mutation`: NOT AUTHORIZED. `migration execution`: NOT AUTHORIZED. `delivery sync and publication`: NOT AUTHORIZED (Source 18 Stage 1; README).

#### 20.7.8 Founder Scenario verification coverage (proposed)

| Scenario | Permission checks | Financial truth | Uncertainty handling | Concurrency and idempotency |
|---|---|---|---|---|
| A (`BP-§10.5-A1` to `-A3`) | Owner proceeds, overrides or declines. A Manager without delegation is denied. An Employee recording the sale receives no balance in the view or in the command response (OQ-03 resolved, MC-225). Revocation before commit blocks only the pending action | Balance from C-BAL equals the sum of attributed open targets; overdue only for a recorded, passed `due_on` in business-local time; the Owner decision is recorded; no balance change from the warning itself | Unattributed historical credit disclosed separately; missing due date shows age, not "overdue"; no score or label | Warning re-evaluated at commit under the EIS-defined serialization (SR03-12) (stale balance); a repeated submission with the same key creates one sale |
| B (`BP-§10.5-B1` to `-B3`) | Only the Owner or a Manager holding `recon.resolve_assigned_match` for that evidence can resolve; others are denied; the binding is tied to the actor | The link is a property of the chosen target; no new sale, income or repayment from the link; the balance comes from authorized Ledger facts, an evidence-backed repayment reduces it only by its verified amount, and verification status is shown beside the balance (MQ-01) | Candidates shown with explanation; no AI resolution; merchant-submitted evidence labelled as reviewed, never provider-verified; deferred channels excluded | Two concurrent resolvers produce exactly one link; replaying the confirmed link or the provider event returns the original outcome; candidate change before commit forces re-confirmation |

Scenario B's evidence form for the Founder runtime check is OQ-04.

### 20.8 Per-row feasibility and risk register (349 `IN SCOPE` rows)

**Status meanings (documentary feasibility only; not implementation, runtime or specialist evidence):**

| Status | Meaning |
|---|---|
| `DESIGN ACCEPTED — EVIDENCE HOLD` | No runtime dependency code; the design is acceptable and is checked by review and later verification evidence |
| `DEPENDENCY-HELD` | Feasible design held by an unbuilt upstream foundation (`D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`, `DAI`) |
| `PROVIDER-HELD` | Feasible design held by `DPAY`: provider selection, credentials and activation are NOT AUTHORIZED |
| `LATER-MISSION-HELD` | Feasible design whose demonstration needs `D18`, `D19` or `D20` |
| `CHANNEL-HELD` | Feasible preparation; delivery needs an approved channel (`DNTF`; F-5); incomplete until then |
| `FOLLOW-UP` | Feasible design needing a Founder disposition (OQ-02, OQ-04) before the EIS fixes it |

"Held" means "waiting on an identified, already recorded dependency". It is **not** a Source 18 T8 infeasibility finding. No row is found infeasible or unsafe, and no row is marked `ESCALATED` or `PASS`.

**Column meanings:**

- **Risk** is the author's rating: H, M or L.
- **Verification approach** uses the tiers in 20.7.5.
- **Stage 6 / Founder decision** gives the applicable Stage 6 finding, then the row's Founder-decision citation exactly as it appears in the canonical FCTM.
- Component sections refer to 20.4.

**Register totals:**

| Measure | Count |
|---|---|
| `IN SCOPE` rows with a Stage 7 finding | 349 |
| `FOLLOW-UP` | 4 |
| `CHANNEL-HELD` | 7 |
| `PROVIDER-HELD` | 39 |
| `LATER-MISSION-HELD` | 19 |
| `DEPENDENCY-HELD` | 230 |
| `DESIGN ACCEPTED — EVIDENCE HOLD` | 50 |
| `PASS` | 0 |
| Infeasible, unsafe or blocked (Source 18 T8) | 0 |
| Author risk H / M / L | 174 / 139 / 36 |

| Subsection | Rows | `FOLLOW-UP` | `CHANNEL-HELD` | `PROVIDER-HELD` | `LATER-MISSION-HELD` | `DEPENDENCY-HELD` | `DESIGN ACCEPTED — EVIDENCE HOLD` | Risk H / M / L |
|---|---|---|---|---|---|---|---|---|
| §8.1 | 19 | 0 | 0 | 0 | 3 | 7 | 9 | 7 / 2 / 10 |
| §8.2 | 31 | 0 | 0 | 1 | 1 | 29 | 0 | 24 / 7 / 0 |
| §8.3 | 25 | 0 | 5 | 0 | 0 | 17 | 3 | 1 / 24 / 0 |
| §8.4 | 42 | 1 | 0 | 20 | 1 | 11 | 9 | 21 / 21 / 0 |
| §8.5 | 49 | 0 | 0 | 6 | 1 | 41 | 1 | 37 / 12 / 0 |
| §8.6 | 29 | 0 | 0 | 0 | 8 | 21 | 0 | 4 / 25 / 0 |
| §8.7 | 28 | 0 | 1 | 0 | 1 | 26 | 0 | 22 / 6 / 0 |
| §8.8 | 41 | 0 | 0 | 7 | 0 | 33 | 1 | 20 / 21 / 0 |
| §8.9 | 43 | 0 | 0 | 0 | 1 | 19 | 23 | 0 / 21 / 22 |
| §8.10 | 42 | 3 | 1 | 5 | 3 | 26 | 4 | 38 / 0 / 4 |

| Row | Component | Status | Risk and blocker | Dependency | Verification approach | Stage 6 / Founder decision |
|---|---|---|---|---|---|---|
| `14-§1-1` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§1-2` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§2-8` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-1` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `16:FPDR-10` |
| `14-§3-2` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-3` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-4` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-5` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `16:FPDR-10` |
| `14-§3-6` | C-PRN: Credit purpose and principles | DEPENDENCY-HELD | L: Principle drift in later design | `D14`, `DTX` | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§3-7` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `16:FPDR-4` |
| `14-§4-1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-2` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-3` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-4` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-5` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12`, `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§4-6` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D13` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `14:FPDR-3`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§5-1` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1`; `16:FPDR-1` |
| `14-§5-2` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-3` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-4` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-5` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-6` | C-DUE: Due/expected date and ageing (§20.4.3) | DEPENDENCY-HELD | H: Invented deadline; device-local date; overdue without recorded date; no field exists in repository or SB-P-1.14 EIS | `D14` | FG: overdue predicate incl. timezone boundaries; FA: no-default check; FRV-A | SB16-B6-03, SB16-B6-16 / `14:FPDR-1`; `16:FPDR-5` |
| `14-§5-7` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances; verification status mistaken for a balance input | `D14` | FG: balance algebra incl. corrections, reversals and the correction guard; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-1`; `16:FPDR-10` |
| `14-§5-8` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1`; `16:FPDR-10` |
| `14-§5-9` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-10` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-11` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14`, `D15` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-12` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | PROVIDER-HELD | H: Second write path; history rewrite of credit-method sales; provider not selected or authorized | `D14`, `DPAY` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§5-13` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D12`, `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `14-§6-1` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D13`, `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-2` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D13`, `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-3` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D12`, `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-4` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D14`, `DTX` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-5` | C-CAP: Credit capture inputs (native form; conversational per D13) | LATER-MISSION-HELD | M: Capture friction pushes free-text names | `D14`, `DTX`, `D18` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-1` |
| `14-§6-6` | C-CAP: Credit capture inputs (native form; conversational per D13) | DEPENDENCY-HELD | M: Capture friction pushes free-text names | `D13`, `D14` | FA: native capture through governed command; RT for D13 paths | SB16-B6-20 / `14:FPDR-3` |
| `14-§7-1` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-1` |
| `14-§7-2` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-3` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-4` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances; verification status mistaken for a balance input | `D14`, `DTX` | FG: balance algebra incl. corrections, reversals and the correction guard; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-5` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-6` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§7-7` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D13`, `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-3` |
| `14-§8-1` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-2` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-3` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-4` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D15` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-5` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D15` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-6` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-7` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§9-1` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-2` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block; illustrative worked example only (MC-112) | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-3` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-4` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-5` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-6` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-7` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-8` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `D14` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-9` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§10-1` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | DEPENDENCY-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DSCH` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-2` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-3` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-4` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-5` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§10-6` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | CHANNEL-HELD | M: Prepared shown as sent; autonomous delivery | `D15`, `DNTF` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / `16:FPDR-8` |
| `14-§11-1` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-2` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-3` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-4` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / `15:FDB-3` |
| `14-§11-5` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-1` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-2` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-3` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-4` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-5` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DSCH` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§12-6` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D12` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `14-§13-1` | C-ID: Credit-to-participant identity reference (§20.4.1) | LATER-MISSION-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D18` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `14-§13-2` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `DTX` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `14-§13-3` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `14-§14-1` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-10` |
| `14-§14-2` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation; R15-11 open; no grant UI assumed | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-7` |
| `14-§14-3` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation; OQ-03 resolved (MC-225): transaction entry confers no balance access | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `14-§14-4` | C-AUTH: Capability and role boundary (§20.5) | CHANNEL-HELD | H: Role-implied access; Manager scope wider than delegation | `D12`, `D15`, `DNTF` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-8` |
| `14-§15-1a` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `14-§15-2` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `14-§16-1` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-2` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-3` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-6` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `14-§17-1` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / `16:FPDR-10` |
| `14-§17-2` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-3` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events; a correction can break the repayment-to-target invariant (SR01-01; §20.4.4 correction guard) | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / `16:FPDR-10` |
| `14-§17-4` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-5` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§18-1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `14-§18-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | H: Global freeze; uncertain write committed; duplicate credit under retry or replay (SR01-09) | `D12`, `D14` | FA: idempotent replay and duplicate detection; narrow-failure check | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-3` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target; 16:FPDR-10 decided: excess stops and asks the Owner; no automatic advance; representation PROVISIONAL (FIN-01; 14-Q2 to 14-Q5) | `D12`, `D14` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `16:FPDR-10` |
| `14-§18-4` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-5` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-6` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-7` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D15` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-8` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-9` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§19-1` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-2` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-3` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-4` | C-PRIV: Privacy, isolation and dignity | DESIGN ACCEPTED — EVIDENCE HOLD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | none (design review) | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `14-§19-5` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `DAI` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / `16:FPDR-4` |
| `14-§20-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `14:FPDR-1` |
| `14-§20-2` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `16:FPDR-1` |
| `14-§20-3` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-4` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D13` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-5` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-6` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `12:FPDR-1` |
| `14-§20-7` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-8` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-9` | C-FND: Shared-foundation reuse and single write path | DESIGN ACCEPTED — EVIDENCE HOLD | M: Parallel ledger, identity, permission or reminder model; consumes this mission's own E-* components | none (design review) | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§20-10` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `14-§21-1` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-2` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-3` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-5` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§21-6` | C-NEG: Must-not guard | DEPENDENCY-HELD | L: Rejected behaviour reintroduced | `D14` | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / `14:FPDR-1`; `16:FPDR-10` |
| `14-§22-1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; historical data shape UNVERIFIED (OQ-05) | `D12`, `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§22-2` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-4`; `16:FPDR-10` |
| `14-§22-3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-1` |
| `14-§22-4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-5` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-6` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-7` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; OQ-03 resolved (MC-225): transaction entry confers no balance access | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-8` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D15`, `DAI` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `15:FDB-3` |
| `14-§22-9` | C-ACC: Acceptance scenario, completion gate or outcome | CHANNEL-HELD | H: Completion overstated; acceptance without runtime evidence | `D15`, `DNTF` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-8` |
| `14-§22-10` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-11` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§23-1` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§23-2` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§23-3` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§23-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `14-§25-1` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence; depends on the seven DNTF rows (F-5) | `D12`, `D13`, `D14`, `D15`, `D20` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§1-1` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§1-2` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; Founder-deferred branch (16:FPDR-9), no mission assigned, F-7 open; not released by DPAY activation; provider not selected or authorized | `DPAY` | Traceability check only; no adapter designed (16:FPDR-9) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§2-8` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-1` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-2` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-3` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-4` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-5` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-6` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-7` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§4-1` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-2` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-3` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-4` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-5` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-6` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-7` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D14`, `DPAY` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / `16:FPDR-3`; `16:FPDR-6` |
| `15-§4-8` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§5-1` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; mixed row: gateway branch PROVIDER-HELD; direct-bank branch is a Founder-deferred branch (16:FPDR-9), no mission assigned, F-7 open; not released by DPAY activation; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | Gateway branch: SEC signature and binding checks, contract tests per adapter after provider authorization (Build Plan §5.4); direct-bank branch: traceability check only | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§5-2` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; Founder-deferred branch (16:FPDR-9), no mission assigned, F-7 open; not released by DPAY activation; provider not selected or authorized | `DPAY` | Traceability check only; no adapter designed (16:FPDR-9) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§5-3` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-4` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | FOLLOW-UP | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; settlement evidence classification: source authentication and line detail provider-dependent; open: OQ-02 (settlement fees); settlement mechanism PROVISIONAL; G-W1 (12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-5` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | DEPENDENCY-HELD | H: Upload evidence shown as provider-verified; duplicate uploads | `D14` | FA: review-provenance label, never provider-verified, content-fingerprint duplicate detection; FRV-B | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-6` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | LATER-MISSION-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2) | `D18` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-7` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-8` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | DESIGN ACCEPTED — EVIDENCE HOLD | H: Upload evidence shown as provider-verified; duplicate uploads | none (design review) | FA: review-provenance label, never provider-verified, content-fingerprint duplicate detection; FRV-B | SB16-B6-09, SB16-B6-10 / — |
| `15-§6-1` | E-REC: Evidence record (§20.4.8) | DEPENDENCY-HELD | M: Missing audit fields; minor-unit or currency errors; provider-event principal and intake (G-W1: 12-Q1, 12-Q2) | `D12` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-2` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-3` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-4` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-5` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-6` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-7` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; privacy: payer, payee and account hints minimized and permission-scoped; permitted form awaits counsel (U-08); provider not selected or authorized | `D12`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-8` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; retention undefined (U-08 / DC-11); preservation invariant for submitted evidence (MQ-03; 14-Q1 held for EIS); provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-9` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-10` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-11` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D12`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-12` | E-REC: Evidence record (§20.4.8) | DEPENDENCY-HELD | M: Missing audit fields; minor-unit or currency errors; retention undefined (U-08 / DC-11); preservation invariant for submitted evidence (MQ-03; 14-Q1 held for EIS) | `D14`, `DUF6` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / `14:FPDR-2` |
| `15-§7-1` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-2` | E-MATCH: Deterministic candidate matcher (§20.4.9) | PROVIDER-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread; provider not selected or authorized | `DPAY` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-3` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-4` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-5` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D12` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / `16:FPDR-1` |
| `15-§7-6` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-7` | E-MATCH: Deterministic candidate matcher (§20.4.9) | LATER-MISSION-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14`, `D18` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-8` | E-MATCH: Deterministic candidate matcher (§20.4.9) | PROVIDER-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread; provider not selected or authorized | `DPAY` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-9` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Non-explainable or non-deterministic matching; settlement fees misread | none (design review) | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§7-10` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `15-§8-1` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-2` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-3` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-4` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1`; `16:FPDR-10` |
| `15-§8-5` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§8-6` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D15` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / — |
| `15-§8-7` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
| `15-§9-1` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§9-2` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-3` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-4` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `14:FPDR-3` |
| `15-§9-6` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-1` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-2` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-3` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-4` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D14`, `DTX` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§10-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-1` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-2` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-3` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D15` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-4` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D14`, `DTX` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `16:FPDR-10` |
| `15-§11-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `16:FPDR-10` |
| `15-§12-1` | E-IDM: Evidence and link idempotency (§20.4.10) | PROVIDER-HELD | H: Duplicate records or actions under retries; cross-source duplicates; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-2` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-3` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-4` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-5` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D15` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-6` | E-IDM: Evidence and link idempotency (§20.4.10) | PROVIDER-HELD | H: Duplicate records or actions under retries; cross-source duplicates; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D12`, `DPAY` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§13-1` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D14`, `DPAY` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / `16:FPDR-6` |
| `15-§13-2` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | DEPENDENCY-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied | `D14` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / — |
| `15-§13-3` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | DEPENDENCY-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied | `D14`, `DTX` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / — |
| `15-§14-1` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4`; `16:FPDR-10` |
| `15-§14-2` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4`; `16:FPDR-10` |
| `15-§14-3` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4`; `16:FPDR-1`; `16:FPDR-10` |
| `15-§14-4` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D13` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / — |
| `15-§15-1` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-2` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-3` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-4` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-5` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-6` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `D14` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§15-7` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18`, `DTX` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `15-§16-1` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-2` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-3` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-4` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-5` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§16-6` | C-READ: Intelligence and reconciliation read paths (consume C-BAL) | DEPENDENCY-HELD | M: Credit sales shown as money received; ambiguous evidence reported as verified | `D15`, `DAI` | FA: reader parity with C-BAL; uncertainty disclosure; RT | SB16-B6-21, SB16-B6-22 / — |
| `15-§17-1` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `15-§17-2` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation; R15-11 open; no grant UI assumed | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-7` |
| `15-§17-3` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `15-§17-4` | C-AUTH: Capability and role boundary (§20.5) | LATER-MISSION-HELD | H: Role-implied access; Manager scope wider than delegation; support access per SB-P-1.19 | `D12`, `D19` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `15-§18-1a` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `15-§18-2` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `15-§19-1` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-2` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-3` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§19-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `15-§20-1` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-3` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-4` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§20-5` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-1` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-3` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-4` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-5` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-6` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-7` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-8` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-9` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-10` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; out-of-order or partial states applied; provider not selected or authorized | `D14`, `DPAY` | FA: reversal, late-event and partial-state fixtures route to Owner review with no Ledger change; history preserved | SB16-B6-15 / `16:FPDR-6` |
| `15-§21-11` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D15` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§22-1` | C-PRIV: Privacy, isolation and dignity | PROVIDER-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people; provider not selected or authorized | `DPAY` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-2` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D14` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-3` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-4` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-5` | C-PRIV: Privacy, isolation and dignity | DEPENDENCY-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people | `D12` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§22-6` | C-PRIV: Privacy, isolation and dignity | PROVIDER-HELD | H: Cross-business leakage; anon-reachable objects; disclosure to unrelated people; provider not selected or authorized | `DPAY` | SEC: effective-access inventory; FA: RLS cross-business; DR of message language | SB16-B6-08, SB16-B6-24 / — |
| `15-§23-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `14:FPDR-1` |
| `15-§23-2` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `16:FPDR-1` |
| `15-§23-3` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-4` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-5` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `12:FPDR-1` |
| `15-§23-6` | C-FND: Shared-foundation reuse and single write path | DESIGN ACCEPTED — EVIDENCE HOLD | M: Parallel ledger, identity, permission or reminder model | none (design review) | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-7` | C-FND: Shared-foundation reuse and single write path | LATER-MISSION-HELD | M: Parallel ledger, identity, permission or reminder model | `D18` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§23-8` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D15` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `15-§24-1` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-2` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-3` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-5` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§24-6` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§25-1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-1` |
| `15-§25-2` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-5` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-6` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-4`; `16:FPDR-1` |
| `15-§25-7` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence | `D18`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-8` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-9` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-10` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D15`, `DAI` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-11` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-12` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-6` |
| `15-§26-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§26-5` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§26-6` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§28-1` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; binding while F-7 is open; deferred branches not delivered; missed-event reconciliation depends on DSCH (SR05-04); provider not selected or authorized | `D12`, `D13`, `D14`, `D15`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `3-§9-12` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances; verification status mistaken for a balance input; historical sales unattributed until Owner act (16:FPDR-2); data shape UNVERIFIED (OQ-05) | `D14` | FG: balance algebra incl. corrections, reversals and the correction guard; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2`; `16:FPDR-10` |
| `3-§11-6` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12`, `D14` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `3-§15-8` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `3-§15-9` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `3-§23` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13`, `D14`, `D15`, `D20` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `24-§21-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `24-§21-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `9-§12-11` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `10-§17-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `22-§17-3` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / — |
| `BP-§5.3-1` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§5.4-1` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `BP-§6.1-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `BP-§6.2-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D13`, `DTX` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / `16:FPDR-10` |
| `BP-§6.3-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `BP-§6.5-1` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | DEPENDENCY-HELD | M: Prepared shown as sent; autonomous delivery | `D15` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / — |
| `BP-§8-1` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `BP-§9-2` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / `14:FPDR-1` |
| `BP-§9-AL` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§10.3-C2` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `BP-§10.5-O` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-W1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `BP-§10.5-W2` | C-REP: Repayment allocation and linkage (§20.4.2; excess §20.4.6) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / — |
| `BP-§10.5-W3` | C-DUE: Due/expected date and ageing (§20.4.3) | DEPENDENCY-HELD | H: Invented deadline; device-local date; overdue without recorded date | `D14`, `D15` | FG: overdue predicate incl. timezone boundaries; FA: no-default check; FRV-A | SB16-B6-03, SB16-B6-16 / `16:FPDR-5` |
| `BP-§10.5-W4` | C-THR: Owner threshold and warn-not-block decision record (§20.5 decision capabilities; §20.7.8 Scenario A) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `BP-§10.5-W5` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; failed verification stored as evidence; provider lock-in; provider-event principal and intake (G-W1: 12-Q1, 12-Q2); provider not selected or authorized | `D14`, `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `BP-§10.5-W6` | E-MATCH: Deterministic candidate matcher (§20.4.9) | PROVIDER-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread; provider not selected or authorized | `D14`, `DPAY`, `DTX` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `BP-§10.5-W7` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `BP-§10.5-W8` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `BP-§10.5-W9` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries; cross-source duplicates | `D14`, `DTX` | FA: three-layer keys, replay returns original outcome, same-ID different-payload conflict; CONC: concurrent replay | SB16-B6-14 / — |
| `BP-§10.5-W10` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14`, `D15` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `16:FPDR-3` |
| `BP-§10.5-W11` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D12`, `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `BP-§10.5-E1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-E2` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-3` |
| `BP-§10.5-E3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-E4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-10` |
| `BP-§10.5-A1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; test data needs a recorded, passed due date (O-S4-1) | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-5` |
| `BP-§10.5-A2` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-4` |
| `BP-§10.5-A3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B1` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form); provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B2` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form) | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B3` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form) | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-X` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-10` |
| `BP-§11-1` | C-ORD: Order/COD linkage (adapter-ready; demonstrated with SB-P-1.18) | LATER-MISSION-HELD | M: Duplicate financial truth across delivery and payment | `D18` | Contract test of the link adapter; RT with SB-P-1.18 | SB16-B6-23 / — |
| `BP-§11-5` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§13-1` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§13-9` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§14-1` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |

**Reconciliation.**

- 349 rows, one per `IN SCOPE` FCTM row, in FCTM order, each exactly once.
- No disposition, owner, build commitment, commercial classification or Section 8 home changed.
- The 206 non-`IN SCOPE` rows keep their Section 11 dispositions and are not assessed here.
- The 41 `DPAY` rows: 39 `PROVIDER-HELD` and 2 `FOLLOW-UP` (`15-§5-4`, `BP-§10.5-B1`).
- The 26 rows citing `16:FPDR-10` carry it in the Founder-decision column exactly as the canonical FCTM (blob `94dd5220`).
- Version 0.2 changes: OQ-01 is decided (`16:FPDR-10`) and OQ-03 is resolved (MC-225), so `14-§18-3`, `14-§14-3` and `14-§22-7` leave `FOLLOW-UP`; register text corrections per SR01-09, SR03-11, SR05-04, SR05-07, SR05-10, SR05-11 and SR06-02. No disposition, owner or status code of the FCTM changed.
- The 7 `DNTF` rows: all `CHANNEL-HELD`.

## 21. Engineering Questions, Risks & Recommendations

### 21.1 Engineering questions (EQ-01 to EQ-12)

| ID | Treatment | Section | Upstream amendment needed? | Founder decision needed? |
|---|---|---|---|---|
| EQ-01 Identity reference | Proposed: composite participant reference, governed-only | 20.4.1 | No, if sequenced after M14-1 with PQ-2 coordination | No (`16:FPDR-1`) |
| EQ-02 Due date | Proposed: optional `due_on`, no default, business-local evaluation | 20.4.3 | No | No (`16:FPDR-5`) |
| EQ-03 Balance definition | Proposed: single hardened definition from authorized Ledger facts; verification shown beside it (MQ-01); correction guard | 20.4.4 | **Pending 14-Q6** (correction guard and void) | No (MQ-01 ruled) |
| EQ-04 Lump-sum allocation | Proposed: allocation command with linked amounts | 20.4.2, 20.4.9 | No | No |
| EQ-05 Provider principal | Proposed: accept-then-process; `EIS-AUT-01` principal | 20.4.8 | **Possibly** (12-Q1; 12-Q2, watch T2-W2) | No |
| EQ-06 Adapter and binding | Proposed: `EIS-ID-05` binding and adapter contract | 20.4.8 | No | No; provider selection needs separate authorization |
| EQ-07 Settlement and fees | Proposed: settlement lines and explained variance; mechanism PROVISIONAL | 20.4.9 | No | **Fee booking is OQ-02** |
| EQ-08 Separate concepts | Proposed: four fields | 20.4.7 | No | No (`16:FPDR-3`, `16:FPDR-6`) |
| EQ-09 Amounts and currency | Proposed: minor units, currency check | 20.4.8 | No | No |
| EQ-10 Concurrency | Proposed: serialization points, total lock order, linked amounts, atomic create-and-link, single-use binding | 20.4.9 | No (`EIS-CNF-01`, `-02`; 12-Q3 confirmation) | No |
| EQ-11 Reversals | Proposed: fail-closed flag and Owner review; ordering and partial states; governed void | 20.4.10 | **Pending 14-Q6(a)** (watch T8-W2) | No (`16:FPDR-6` §6) |
| EQ-12 Privileges | Proposed: every privilege type revoked; birth-safe creation and effective-access proof | 20.5, 20.4.11 | No (`EIS-ISO-03`; `EIS15-SEC-01`, `-02`) | No |

All twelve are proposals for EIS confirmation. None is resolved until Mission Control approves the Engineering Review and the EIS fixes the design.

### 21.2 Open questions, rulings and upstream requests

| ID | State | Treatment in this draft | Owner |
|---|---|---|---|
| OQ-01 | DECIDED — `16:FPDR-10` (D-1 to D-6) | 20.4.6; engineering representation PROVISIONAL | Founder (decided) |
| OQ-02 | OPEN | Fees shown as explained settlement variance; no automatic entry; settlement mechanism PROVISIONAL | Founder (T3-W2) |
| OQ-03 | RESOLVED (MC-225) | No Employee financial intelligence; transaction entry confers no balance access; no advance action delegated (20.5) | Mission Control |
| OQ-04 | OPEN | Both evidence forms designed; Scenario B wording neutral (20.7.8); closes before the Stage 8 lock | Founder (`BP-§13-9`) |
| OQ-05 | OPEN | No profile is run; an aggregate-only plan under the SR-04 §6A and SR06-06 conditions awaits authorization | Mission Control, with Founder consent |
| MQ-01 | RULED (MC-224/225): reading A | 20.4.4, 20.4.9, 20.7.8 | Mission Control |
| MQ-02 | OPEN (possible T3) | Disclosure only; no conversion (20.4.5) | Mission Control; Founder if T3 |
| MQ-03 | RULED (MC-224/225): preservation invariant; 14-Q1 held for EIS resolution (MC-226) | 20.4.8 | Mission Control |
| MQ-04 | OPEN (T3 watch) | No new merchant-facing label (20.4.10) | Mission Control |
| MQ-05 | ADDRESSED by the actor-separation assessment (21.9) | — | Mission Control |
| MQ-06 | OPEN | No production identifiers in published artifacts | Mission Control |
| MQ-07 | RULED (MC-230) | 20.5 scoped Manager delegation | Mission Control |
| G-W1: 12-Q1 to 12-Q3 | Requested from the SB-P-1.12 owner | 20.4.8, 20.4.9, 20.5; watch T2-W2 on 12-Q2 | SB-P-1.12 owner, through Mission Control |
| 14-Q1 to 14-Q6 | Requested from the SB-P-1.14 owner; 14-Q1 held for EIS resolution | 20.4.4, 20.4.6, 20.4.8, 20.4.10, 20.4.11; watches T2-W1 (14-Q1) and T8-W2 (14-Q6(a)) | SB-P-1.14 owner, through Mission Control |

An unanswered upstream question is a recorded hold, never approval. A returned conflict is screened before any dependent design changes.

### 21.3 Engineering risks

| Risk | Rating | Mitigation |
|---|---|---|
| Any SB-P-1.16 write before the `DTX` cut-over and `EIS14-CMD-03` closure | High | PRECONDITION (20.6); sequencing (20.7.2) |
| New objects born exposed by default grants | High | Revoke-in-same-migration; effective-access inventory (20.5) |
| Divergent balance definitions across readers | High | Single definition with a reader-parity test (20.4.4) |
| Unknown historical data, including repayments recorded as sales | High | Read-only profile (OQ-05); Owner attribution; no reinterpretation |
| Provider events with no admissible principal or intake path | High | Accept-then-process; `EIS-AUT-01` principal; 12-Q1, 12-Q2 (watch T2-W2); provider activation not authorized |
| Concurrent resolution or replay creating duplicate truth | High | 20.4.9 controls; CONC tier |
| Same-actor correlated assumptions across Stages 2–7 | High | Specialist reviews recorded with their same-provider limitation (21.9); a non-author reviewer at later gates (MC-97); Stage 19 independent verifier |
| Merchants reading gateway coverage as universal | Medium | Truthful coverage statement (Blueprint §9) |
| Settlement fees misread as mismatches | Medium | Explained variance (20.4.9) |
| No CI or test environment | High | 20.7.6; no PASS inferred |
| A correction breaking the repayment-to-target invariant | High | Correction guard and D-5 exception (20.4.4); 14-Q6 |
| A reversed repayment not expressible without a governed void | High | Fail-closed reversal handling (20.4.10); 14-Q6(a); watch T8-W2 |
| Submitted evidence expiring under the staging grace | High | Preservation invariant (20.4.8); 14-Q1 held for EIS; watch T2-W1 |
| An advance representation adopted without upstream confirmation | Medium | Marked PROVISIONAL (20.4.6); 14-Q2 to 14-Q5; fixed only in the EIS |

### 21.4 Unresolved dependencies and holds

| Item | State | Effect |
|---|---|---|
| U-08 / DC-11 | OPEN | No retention or deletion rule. Lifecycle-dependent designs are inventoried (CF-6, 21.8): evidence preservation, payer hints, raw evidence, communication drafts, de-identification, restore and rollback. The Stage 8 lifecycle lock waits for it |
| U-10 | OPEN | Nothing designed depends on it |
| R15-11 (F-4) | OPEN | No merchant-facing grant UI; capability boundary per `16:FPDR-7` |
| `DNTF` (7 rows) | No approved channel | `CHANNEL-HELD`; incomplete (F-5) |
| `DPAY` (41 rows) | Channel decided; provider NOT AUTHORIZED | `PROVIDER-HELD` or `FOLLOW-UP` |
| F-7 | OPEN | `15-§28-1` binding; deferred branches traced, not delivered |
| `16:FPDR-9` deferred branches | Founder-deferred; no mission assigned; F-7 open | `15-§5-1` (direct-bank branch), `15-§5-2` and `15-§1-2` stay `IN SCOPE`; no adapter designed; not released by `DPAY` activation |
| `D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`, `DAI` | Locked specifications; not implemented | `DEPENDENCY-HELD` |
| `D18`, `D19`, `D20` | Not started | `LATER-MISSION-HELD` |
| G-W1 (12-Q1 to 12-Q3) | Requested from the SB-P-1.12 owner; silence is not approval | Provider-event principal and intake; watch T2-W2 |
| CI | UNVERIFIED | No PASS |
| 14-Q1 | HELD FOR EIS RESOLUTION (MC-226) | The preservation invariant stands; the mechanism is finalized in the EIS |
| 14-Q2 to 14-Q6 | Requested; no reply; silence is not approval | Dependent wording PROVISIONAL (20.4.6) or held (20.4.10 void) |
| P-1 to P-4 | Evidence preconditions | Ledger and ACL reconciliation (P-1, joins U-2); live privileges (P-2, P-3); service-role handler inventory (P-4); all before Implementation Authorization |
| Secret-storage home (C-12) | OPEN — Mission Control infrastructure choice | Provider activation not authorized |

### 21.5 Trigger screen

**No new T1, T2, T3, T7 or T8 trigger fired in this revision.**

| Trigger | Screen result |
|---|---|
| T3 (new product behaviour or scenario) | `16:FPDR-10` (OQ-01) is a decided T3. No new product behaviour is proposed. Watches: MQ-02 (historical conversion), MQ-04 (dispute or partial-reversal label), U-08 (lifecycle). OQ-02 and OQ-04 remain Founder questions |
| T7 (omission, deferral, pull-forward, simplification, reclassification) | None. All 349 rows stay `IN SCOPE` with unchanged dispositions. The `16:FPDR-9` branches remain deferred under the Founder's disposed T7 decision; Stage 7 neither designs nor drops them; F-7 stays open. `DPAY`, `DNTF` and `D18` rows are held, not deferred, narrowed or reassigned |
| T8 (Product Truth conflict or infeasibility) | None. MQ-01 reading A closes the conditional T8-C1. No row is infeasible or unsafe; "held" statuses are recorded dependencies |
| T1, T2 (unanswered question; conflict among approved sources) | None established. MQ-07 is ruled (MC-230). Upstream questions are requests, not conflicts |

**Conditional watches (not fired; not established source conflicts).** Each fires only on a concrete returned upstream finding:

| Watch | Fires only if | Rows affected |
|---|---|---|
| T2-W1 | The SB-P-1.14 owner reads `EIS14-RET-01` against the MQ-03 preservation invariant (14-Q1) | `15-§11-2`, `15-§10-1`, `15-§6-8` |
| T2-W2 | The SB-P-1.12 owner confirms that no compliant no-JWT intake path exists (12-Q2) | Contract 15 §22 provider intake, already held under `DPAY` |
| T8-W2 | The SB-P-1.14 owner rules out every governed void path (14-Q6(a)) | `15-§13-*` reversal rows |

**Classification note for Mission Control.** If Mission Control reads `PROVIDER-HELD` or `CHANNEL-HELD` (an unauthorized provider or channel) as "blocked" under Source 18 Stage 7, those 48 rows would need T8 escalation. This draft treats them as recorded dependencies already decided by `16:FPDR-6`, `16:FPDR-8` and `16:FPDR-9`. The precedent is the SB-P-1.15 register (R-5), where held means "unbuilt foundation" and is not T8.

### 21.6 Mandatory specialist reviews (Source 18 §4.8) — performed as same-provider reviews

The six mandatory domain reviews were performed as read-only fact-finding (MC-183) by same-provider Claude subagents commissioned and briefed by the Stage 7 author, and an FIN-01 financial-integrity review followed for OQ-01. Their findings are inputs, never product authority. All 63 findings are disposed of in 21.10. They are not independent assurance and not Stage 19 verification (21.9).

| Review | Report (`specialists/`) | Findings | HIGH / MEDIUM / LOW |
|---|---|---|---|
| Financial integrity (SR-01) | `01-sr01-financial-integrity-review.md` | 9 | 3 / 5 / 1 |
| Security, RLS, grants and authority (SR-02) | `02-sr02-security-rls-grants-authority-review.md` | 10 | 3 / 6 / 1 |
| Concurrency and idempotency (SR-03) | `03-sr03-concurrency-idempotency-review.md` | 12 | 5 / 5 / 2 |
| Migration and historical data (SR-04) | `04-sr04-migration-historical-data-review.md` | 11 | 3 / 7 / 1 |
| Payment-provider architecture (SR-05) | `05-sr05-payment-provider-architecture-review.md` | 11 | 5 / 5 / 1 |
| Legal, privacy and evidence lifecycle (SR-06) | `06-sr06-legal-privacy-evidence-lifecycle-review.md` | 10 | 1 / 6 / 3 |
| **Total** | | **63** | **20 / 34 / 9** |
| FIN-01 (OQ-01) | `07-fin01-oq01-financial-integrity-review.md` | Recommendations; all PROVISIONAL | — |

### 21.7 Recommendations

1. **Review.** Mission Control reviews this version (Sections 20–21 only) with its validation record, the 349-row register and the 63-finding disposition (21.10).
2. **Upstream.** Mission Control sends and tracks 14-Q1 to 14-Q6 and 12-Q1 to 12-Q3. A returned conflict is screened before any dependent design changes.
3. **Preconditions.** P-1 to P-4 and SB16-B6-01, -07, -08 and -24 stay Implementation Authorization preconditions.
4. **Carry-forward.** CF-1 to CF-6 are tracked to their gates (21.8).
5. **Assurance.** Restore and evidence CI and the test project before any Stage 17 claim. Stage 19 is performed by an appointed independent verifier; a non-author reviewer is appointed for later gates (MC-97).
6. **Holds.** Keep U-08 / DC-11, U-10, R15-11, `DNTF`, `DPAY`, F-7, OQ-02, OQ-04, OQ-05, MQ-02, MQ-04 and MQ-06 visibly open.

### 21.8 Carry-forward register

A carried-forward finding is not an approved design. Each is a named obligation with an owner, a gate, the proof required and a fail-closed rule.

| ID | Finding | Requirement | Owner | Target gate | Required later proof | Fail-closed rule |
|---|---|---|---|---|---|---|
| CF-1 | SR01-06 (MEDIUM) | A repayment's participant is derived from its target and cannot be set independently | Claude Code (EIS author) | EIS lock (Stage 11) | EIS clause; negative test (Stage 15); checked at Stage 19 | A mismatched participant is rejected by the command; the EIS cannot lock without the clause |
| CF-2 | SR02-10 (LOW) | An EIS security-matrix row for platform and support access to SB-P-1.16 data | Claude Code (EIS author); Mission Control | EIS lock (Stage 11) | Matrix row; negative tests | Without the row no support access path exists |
| CF-3 | SR03-04 (HIGH) | An ordering rule for late and out-of-order provider events and for a reversal racing a confirmation | Claude Code (EIS author) | EIS lock; provider authorization (Build Plan §5.4) | CONC tests with a fake adapter; runtime evidence at Stage 17 | Out-of-order events go to review and are never applied; no adapter is activated until the rule is tested |
| CF-4 | SR05-05 (HIGH) | A state model for partial refunds and dispute lifecycles | Claude Code (EIS author); Mission Control (MQ-04) | EIS lock; provider authorization | State-machine tests | Unknown or partial states go to Owner review with no Ledger change; no new label before MQ-04 |
| CF-5 | SR05-06 (MEDIUM) | One key-scope scheme across provider, binding and actor, written with SR03-07 | Claude Code (EIS author) | EIS creation (Stage 9) | Key-collision and retry tests | A key collision is rejected, never merged; the EIS cannot lock without the scheme |
| CF-6 | SR06-08 (MEDIUM) | The U-08 inventory of lifecycle-dependent designs and its T3 listing | Claude Code (inventory); Founder or legal counsel (U-08) | Before the Stage 8 lifecycle lock | The inventory in the Stage 8 package | The lifecycle lock is refused without it; no retention or deletion behaviour is built |

The two HIGH carry-forwards (CF-3, CF-4) are safe to carry only because 20.4.10 already fails closed: no reversal, late event or partial state changes the Ledger or a balance before an Owner-run governed correction.

### 21.9 Actor separation (Source 18 §4.3)

- **Roles.** Claude Code is the Definition Actor (Stages 2–4, including the FCTM and Sections 1–19), the Builder Review actor (Stage 6) and the Engineering Review actor (Stage 7). Because the Definition Actor also holds Engineering Review, Source 18 §4.3 requires a Mission Control separation assessment and, on this material-risk mission, a parallel specialist who did not author Sections 1–19 to review the feasibility and risk findings.
- **Record.** Mission Control recorded the independence limitation at Stage 1 (MC-97) and committed to a non-author independent engineering and security reviewer for later gates. Mission Control has accepted this separation assessment for Stage 7 (MC-241).
- **Specialist reviews and their limitation.** SR-01 to SR-06 were performed by same-provider Claude subagents, commissioned and briefed by the author, with partial coverage of the 349 register rows through each domain's affected-row lists. They did not author Sections 1–19, but they share the author's provider and inputs, so correlated-assumption risk remains. They are inputs, not independent assurance.
- **Not Stage 19.** Stage 19 verifies implemented behaviour against a locked Blueprint, a locked EIS and runtime evidence that do not yet exist, by a verifier Mission Control appoints under §4.9. "A new session, model or role label alone does not establish independence" (§4.9). No Stage 19 verification is claimed.

### 21.10 Specialist finding dispositions (63)

Disposition: **Substantive** (Stage 7 design correction), **Editorial** (register or wording), **Carry-forward** (21.8) or **Later gate** (lifecycle class and earliest gate unchanged). Severity and class are as recorded in the specialist reports and the MC-222 classification.

| Finding | Severity | Class | Disposition | Correction | v0.2 location |
|---|---|---|---|---|---|
| SR01-01 | HIGH | S7 | Substantive | C-01 | 20.4.4 |
| SR01-02 | HIGH | S7 / FDR (MQ-01) | Substantive | C-01, C-02, C-22 | 20.4.4; 20.4.9; 20.7.8 |
| SR01-03 | HIGH | UP / EIS | Later gate (S9) | C-03 | 20.4.10 |
| SR01-04 | MEDIUM | S7 | Substantive | C-04 | 20.4.2 |
| SR01-05 | MEDIUM | EIS | Later gate (S9) | C-05 | 20.4.7 |
| SR01-06 | MEDIUM | S7 | Carry-forward CF-1 | C-06 | 20.4.1 |
| SR01-07 | MEDIUM | EIS / FDR (MQ-02, conversion only) | Later gate (S9) | C-07 | 20.4.5 |
| SR01-08 | MEDIUM | EIS | Later gate (S9) | C-08 | 20.4.4 |
| SR01-09 | LOW | S7 | Editorial | C-20 | 20.8 |
| SR02-01 | HIGH | S7 / IMP (P-2/P-3) | Substantive | C-09 | 20.4.11, 20.5 |
| SR02-02 | MEDIUM | S7 | Editorial | C-10 | 20.3, 20.5 |
| SR02-03 | MEDIUM | EIS / UP (SB-P-1.14 table) | Later gate (S9) | C-10 | 20.3, 20.5 |
| SR02-04 | HIGH | UP / PROV | Later gate (S9) | C-11 | 20.4.8 |
| SR02-05 | HIGH | PROV / EIS; FDR (MC infra) | Later gate (S9 / provider authorization) | C-12 | 20.4.8 |
| SR02-06 | MEDIUM | S7 | Substantive | C-13 | 20.5 |
| SR02-07 | MEDIUM | S7 | Substantive | C-14 | 20.5 |
| SR02-08 | MEDIUM | S7 / FDR (OQ-03) | Substantive | C-14 | 20.5 |
| SR02-09 | MEDIUM | IMP / EIS | Later gate (S13) | C-10 | 20.3, 20.5 |
| SR02-10 | LOW | S7 | Carry-forward CF-2 | C-10 | 20.3, 20.5 |
| SR03-01 | HIGH | S7 / EIS | Substantive | C-15 | 20.4.9 |
| SR03-02 | HIGH | S7 | Substantive | C-15 | 20.4.9 |
| SR03-03 | HIGH | S7 | Substantive | C-16 | 20.4.10, 20.4.9 |
| SR03-04 | HIGH | S7 / PROV | Carry-forward CF-3 | C-16 | 20.4.10, 20.4.9 |
| SR03-05 | MEDIUM | EIS | Later gate (S9) | C-15 | 20.4.9 |
| SR03-06 | HIGH | S7 | Substantive | C-02 | 20.4.9 |
| SR03-07 | MEDIUM | S7 | Later gate (S9) | C-16 | 20.4.10, 20.4.9 |
| SR03-08 | MEDIUM | PROV / EIS | Later gate (S9 / provider authorization) | C-16 | 20.4.10, 20.4.9 |
| SR03-09 | MEDIUM | UP / EIS | Later gate (S9) | Held | Upstream 12-Q3 (21.2) |
| SR03-10 | MEDIUM | IMP / S7 (plan wording) | Later gate (S12 (plan); S17/S19 (evidence)) | C-18 | 20.7 |
| SR03-11 | LOW | S7 | Editorial | C-20 | 20.8 |
| SR03-12 | LOW | EIS | Later gate (S9) | C-22 | 20.7.8 |
| SR04-01 | HIGH | IMP / FDR (MC access authorization) | Later gate (S13) | Held | Precondition P-1 (21.4) |
| SR04-02 | HIGH | S7 / IMP | Substantive | C-09 | 20.4.11, 20.5 |
| SR04-03 | MEDIUM | S7 / EIS | Later gate (S9) | C-18 | 20.7 |
| SR04-04 | MEDIUM | UP / EIS | Later gate (S9) | C-18 | 20.7 |
| SR04-05 | HIGH | FDR / IMP (OQ-05 data) | Later gate (S9) | C-07 | 20.4.5 |
| SR04-06 | MEDIUM | EIS / IMP | Later gate (S9) | C-19 | 20.4.11 |
| SR04-07 | MEDIUM | EIS | Later gate (S9) | C-19 | 20.4.11 |
| SR04-08 | MEDIUM | IMP / S7 (plan wording) | Later gate (S12) | C-18 | 20.7 |
| SR04-09 | MEDIUM | IMP | Later gate (S13) | C-18 | 20.7 |
| SR04-10 | MEDIUM | FDR / IMP | Later gate (S9) | Held | OQ-05 (21.2) |
| SR04-11 | LOW | IMP | Later gate (S13) | C-18 | 20.7 |
| SR05-01 | HIGH | PROV / EIS | Later gate (S9 / provider authorization) | C-12 | 20.4.8 |
| SR05-02 | HIGH | PROV / FDR (MC infra) | Later gate (S9 / provider authorization) | C-12 | 20.4.8 |
| SR05-03 | HIGH | UP / PROV | Later gate (S9) | C-11 | 20.4.8 |
| SR05-04 | HIGH | PROV / S7 (register note) | Later gate (S9 / provider authorization) | C-16 | 20.4.10, 20.4.9 |
| SR05-05 | HIGH | S7 / FDR (MQ-04 label) | Carry-forward CF-4 | C-16 | 20.4.10, 20.4.9 |
| SR05-06 | MEDIUM | S7 | Carry-forward CF-5 | C-16 | 20.4.10, 20.4.9 |
| SR05-07 | MEDIUM | PROV / FDR (OQ-02); S7 (register) | Later gate (S9 / provider authorization) | C-20 | 20.8 |
| SR05-08 | MEDIUM | PROV / EIS | Later gate (S9) | C-23 | 20.4.8 |
| SR05-09 | MEDIUM | PROV / IMP | Later gate (Provider authorization; S12) | C-18 | 20.7 |
| SR05-10 | MEDIUM | S7 | Substantive | C-20, C-21 | 20.8; 21.4, 21.5 |
| SR05-11 | LOW | S7 | Editorial (payer hints substantive under SR06-02) | C-17, C-20 | 20.4.8; 20.8 |
| SR06-01 | HIGH | S7 / FDR (MQ-03); U-08 | Substantive | C-17 | 20.4.8 |
| SR06-02 | MEDIUM | S7 | Substantive | C-17 | 20.4.8 |
| SR06-03 | MEDIUM | EIS / UP; U-08 | Later gate (S9) | C-17 | 20.4.8 |
| SR06-04 | MEDIUM | EIS / FDR (erasure T3 watch); counsel | Later gate (S9) | C-19 | 20.4.11 |
| SR06-05 | MEDIUM | EIS | Later gate (S9) | C-14 | 20.5 |
| SR06-06 | MEDIUM | FDR / IMP | Later gate (S9) | Held | OQ-05 privacy conditions (21.2) |
| SR06-07 | LOW | EIS | Later gate (S9) | C-19 | 20.4.11 |
| SR06-08 | MEDIUM | S7 / FDR (U-08) | Carry-forward CF-6 | C-20, C-21 | 20.8; 21.4, 21.5 |
| SR06-09 | LOW | IMP / EIS | Later gate (S12) | C-18 | 20.7 |
| SR06-10 | LOW | FDR | Later gate (Before any publication) | Held | MQ-06 (21.2) |

Totals: 15 substantive, 4 editorial, 6 carry-forward, 38 later gate; 63 findings, 58 mapped to corrections and 5 held.

### 21.11 Version 0.2 change record (C-01 to C-28)

| Correction | Unit | Findings or source | Location | Status |
|---|---|---|---|---|
| C-01 | R-5 | SR01-01, SR01-02 | 20.4.4 | Applied |
| C-02 | R-3 | SR01-02, SR03-06 | 20.4.9 | Applied |
| C-03 | R-8 | SR01-03 | 20.4.10 | Applied; final form after 14-Q6(a) |
| C-04 | R-3 | SR01-04 | 20.4.2 | Applied |
| C-05 | R-1 | SR01-05 | 20.4.7 | Applied; predicate finalized in the EIS |
| C-06 | R-1 | SR01-06 | 20.4.1 | Applied as EIS obligation (CF-1) |
| C-07 | R-5 | SR01-07, SR04-05 | 20.4.5 | Applied (disclosure only; MQ-02 open) |
| C-08 | R-5 | SR01-08 | 20.4.4 | Applied |
| C-09 | R-1 | SR02-01, SR04-02 | 20.4.11, 20.5 | Applied |
| C-10 | R-1 | SR02-02, SR02-03, SR02-09, SR02-10 | 20.3, 20.5 | Applied |
| C-11 | R-7 | SR02-04, SR05-03 | 20.4.8 | Applied; principal and intake upstream (12-Q1, 12-Q2) |
| C-12 | R-7 | SR02-05, SR05-01, SR05-02 | 20.4.8 | Applied; storage home open (Mission Control) |
| C-13 | R-1 | SR02-06 | 20.5 | Applied |
| C-14 | R-2 | SR02-07, SR02-08, SR06-05 | 20.5 | Applied with C-26 and MQ-07 |
| C-15 | R-3 | SR03-01, SR03-02, SR03-05 | 20.4.9 | Applied |
| C-16 | R-4 | SR03-03, SR03-04, SR03-07, SR03-08, SR05-04, SR05-05, SR05-06 | 20.4.10, 20.4.9 | Applied; no new label (MQ-04) |
| C-17 | R-7 | SR06-01, SR06-02, SR06-03, SR05-11 | 20.4.8 | Applied; 14-Q1 held for EIS |
| C-18 | R-8 | SR03-10, SR04-03, SR04-04, SR04-08, SR04-09, SR04-11, SR05-09, SR06-09 | 20.7 | Applied |
| C-19 | R-1 | SR04-06, SR04-07, SR06-04, SR06-07 | 20.4.11 | Applied |
| C-20 | R-9 | SR01-09, SR03-11, SR05-07, SR05-10, SR05-11, SR06-08 | 20.8 | Applied by regeneration |
| C-21 | R-9 | SR05-10, SR06-08 | 21.4, 21.5 | Applied |
| C-22 | R-5 | SR01-02, SR03-12 | 20.7.8 | Applied; OQ-04 open |
| C-23 | R-1 | SR05-08 | 20.4.8 | Applied |
| C-24 | R-6 | FIN-01 §18; `16:FPDR-10` | 20.4.6 | Applied; representation PROVISIONAL |
| C-25 | R-5 | FIN-01 §7, §16; MC-207 AC-4 | 20.4.4 | Applied; PROVISIONAL pending 14-Q2 |
| C-26 | R-2 | FIN-01 §14; `16:FPDR-7` | 20.5 | Applied within C-14 |
| C-27 | R-6 | FIN-01 §8, §11, §12 | 20.4.6 | Applied; PROVISIONAL pending 14-Q3 to 14-Q5 |
| C-28 | R-9 | `16:FPDR-10` | 20.8 | Applied by regeneration (26 cells) |

Application order (one round): R-1 boundaries; R-2 authority; R-3 concurrency; R-4 idempotency and reversal; R-5 balance and evidence; R-6 advance mechanics; R-7 intake and preservation; R-8 migration and delivery; R-9 traceability, with the register regenerated last.

**STOP FOR MISSION CONTROL REVIEW AND CONTROLLED PUBLICATION DISPOSITION.**

**Stage 7 Final Approval: WITHHELD.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
