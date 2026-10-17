# SB-P-1.16 — Proposed Blueprint Sections 20–21 (Stage 7 Draft)

**DRAFT — LOCAL — NOT PUBLISHED — NOT REVIEWED — NOT APPROVED — NOT PART OF THE APPROVED BLUEPRINT**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Stage:** Source 18 v1.2 Stage 7 — Engineering Review  
**Prepared by:** Claude Code, Engineering Review Actor (MC-179). Claude Code was also the Stage 2–4 Definition Actor and the Stage 6 Builder Review Actor, so **this draft is not independent assurance**  
**Baseline:** `main@5a4d2243b6b774e2391dd68e75474b8f934887e0` (PR #967 merge; post-merge verification MC-178)  
**Applies to:** approved Blueprint `docs/phase-1-mission-blueprint/active/SB-P-1.16.md` (blob `8e79636f856bbfbb3c1ed08c717e2fda8b0b44bc`). Sections 1–19 are not changed, renumbered or restated. These sections are written to follow Section 19 once Mission Control authorizes their incorporation  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This draft is an engineering review. It is not an EIS, an Implementation Package, a schema or a migration. Its data designs are logical proposals for the EIS stage; it contains no DDL, SQL or code. No row disposition, owner, build commitment, Founder decision, source contract, Source 11 or Build Plan content is changed.

## 20. Engineering Review

### 20.1 Scope, baseline and independence

- **Inputs.** Approved Sections 1–19 (blob `8e79636f`); the Stage 6 Builder Review (blob `c9a93566`, PR #967); the canonical FCTM (blob `5ff7742f`, 555 rows); `16:FPDR-1` to `16:FPDR-9` (blob `30b19a80`); the Truth Pack (`4a7bfe4f`), the Stage 3 reconciliation report (`b40b988c`) and the Institutional Learning Intake (`2cf06c17`).
- **Repository state.** Application code, schema, tests, workflows and configuration are unchanged since the Stage 6 base: `git diff --name-status 3c9a7743 5a4d2243` changes only the Stage 6 report. They are also unchanged since `a18de121`.
- **Independence.** Same-actor authorship across Stages 2, 3 (preparation), 4, 6 and 7 is a correlated-assumption risk. The mitigations are Mission Control review, the mandatory non-author specialist reviews (Section 21.6) and Stage 19 independent verification by another actor (Source 18 §4.9).
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
- **Grants.** Broad default grants to `anon` and `authenticated`.
- **Service role.** A service-role client used by catalog import.
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
- **Basis.** `EIS-ID-03` (one shared participant record per business); `EIS14-SRC-01` (SB-P-1.14 creates no identity table).
- **Amendment or decision needed.** No Founder decision. This is an additive change to the `transactions` family, so it must be sequenced **after** SB-P-1.14 M14-1 (`EIS14-MIG-01`) and coordinated with the PQ-2 / `DTX` cut-over. If Mission Control prefers a separate link table written by the same command, the EIS records the choice. Either form satisfies `14-§21-6` (no separate credit database).

#### 20.4.2 Credit and repayment linkage (SB16-B6-01, -05)

- Credit facts use the SB-P-1.14 four-state model (`EIS14-LDG-01`, `-02`). A credit-method sale remains one `sale` row (`EIS14-LDG-04`).
- A repayment references exactly one settlement target (`EIS14-LDG-03`).
- **Proposed for EQ-04.** A lump sum is recorded by one governed command that takes an allocation list `(target, amount)` and creates one repayment row per target, atomically. Each allocation must not exceed that target's current outstanding amount. The allocations must sum to the payment amount. There is one idempotency key per command, and one confirmation binding covers the whole allocation.
- **Amendment or decision needed.** None for allocation. Excess is treated in 20.4.6.

#### 20.4.3 Due dates and ageing (EQ-02; SB16-B6-03)

- **Proposal.** An optional `due_on` date attribute on credit-bearing targets (credit-method `sale` and `owed_to_business` `credit`). It is set at capture or later by a governed, audited "set or change due date" command. **No default value, no system period and no mandatory entry** (`16:FPDR-5`).
- **Overdue.** Overdue holds only when `due_on` < business-local today **and** the target's outstanding amount is greater than zero. "Business-local today" comes from the Owner-confirmed IANA timezone (`EIS15-TZ-*`). While no timezone is confirmed, overdue is not computed and credit age is shown instead.
- **Ageing.** Credit age is measured from `transaction_date` per open target. Threshold comparison stays separate from due-date status.
- **Amendment or decision needed.** None. The column is SB-P-1.16's, added after M14-1 and on the `DTX` path. Ageing waits for `D15` timezone (`DSCH` for scheduled presentation).

#### 20.4.4 Authoritative balances (EQ-03; SB16-B6-04)

- **Proposal: one hardened, kernel-checked, SQL-level definition**, on the `EIS14-TOT-01` pattern.
  - **Target outstanding** = target amount − Σ(linked repayment amounts).
  - **Customer balance** = Σ target outstanding over attributed targets.
  - **What counts as a target:** current values (after governed corrections) of `sale` rows whose **current** `payment_method` is `credit`, and of `credit` rows with direction `owed_to_business`. If a correction changes a sale away from `credit`, the `EIS14-LDG-03` revalidation applies to its linked repayments and the case goes to review.
  - **What never counts:** unattributed historical credit is reported as a separate "unattributed credit" total. A flagged reversal (20.4.10) changes no balance until the Owner corrects the Ledger.
- **Readers.** Ask CFO, Daily Intelligence, threshold warnings, the review queue and exports all read this one definition (DC-07; `14-§21-6`).
- **Out of this balance.** `owed_by_business` credit is the supplier side (`7-§3`, SB-P-1.17).

#### 20.4.5 Historical sales attribution (SB16-B6-06; OQ-05)

- **Proposal.** An Owner-only "attribute historical credit sale" command. It shows the exact sale, the chosen participant and the resulting balance in a preview with a confirmation binding. It writes only the identity reference and an audit event. It creates no new sale, income or repayment, and it preserves the original row identity (`16:FPDR-2`).
- **No automatic assignment.** There is no suggestion-as-assignment by name or phone.
- **Multi-row attribution.** If offered, each row is still listed and bound exactly.
- **Data profile.** A read-only profile of historical credit-method sales, including possible repayments recorded as `sale`, needs separate authorization (OQ-05). No migration or job reinterprets history (`EIS14-LDG-04`).

#### 20.4.6 Overpayment ambiguity (SB16-B6-05; OQ-01)

- **Control proposed for this mission's design.** A payment or allocation larger than the selected targets' outstanding stops before commit and returns a clarification (`14-§18-3`). Nothing is stored as an advance, negative balance or customer credit.
- **Why it is held.** Any retained-advance behaviour is a product decision (T3-W1; OQ-01) and is not designed here.

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
  - idempotency key.
- **Amount conversion.** A Ledger amount (`NUMERIC(12, 2)`, INR) is compared only after exact minor-unit conversion when the currency is INR. Other currencies are recorded as unsupported or mismatched and never rounded.
- **Provider-account binding.** A business-scoped integration identity, `(business_id, binding_id)` (`EIS-ID-05`), created by the Owner. The business for an inbound event is resolved **only** from the verified binding, never from payload fields.
- **Adapter contract (provider-agnostic, `22-§17-3`; DC-13):** `verify` (signature and freshness), `normalize`, `fetch_settlement` and `map_status`. Provider-specific code stays in the integration layer (`16:FPDR-6` §7). **No provider is selected.**
- **Principal (G-W1).** Proposed: provider events run as an `EIS-AUT-01` automation principal derived from an Owner-enabled integration rule bound to the provider-account binding, on channel `integration` (`EIS-KER-06`), with `EIS-CNF-04` idempotency and `EIS-CNF-06` narrow failure. **Whether "automation run" in `EIS-AUT-01` covers externally triggered events needs SB-P-1.12-owner and Mission Control confirmation.** If it does not, an SB-P-1.12 EIS amendment is needed.
- **Deferred channels.** Generic direct-bank API and standalone bank-email adapters are **not designed or built** (`16:FPDR-9`). Their rows stay `IN SCOPE` and traced (F-7).

#### 20.4.9 Matching, idempotent linking and concurrent confirmation (EQ-07, EQ-10; SB16-B6-11, -14)

- **Matching.** Deterministic candidate generation over open targets uses amount, reference, time window, direction, identity hint and method. Every candidate list carries an explanation. A strong unique match links; otherwise the item goes to review (`15-§7-*`, `15-§9-*`). Windows are tuned, not fixed historical formulas (`15-§7-9`).
- **A link is a property of the existing record.** Linking creates a link record against the existing sale or repayment target. It never creates a second financial transaction (`15-§8-7`).
- **Proposed concurrency controls:**
  - a single-use `confirmation_binding` per resolution covering evidence, candidate set, candidate versions, actor and authority epochs, consumed atomically with the link (`EIS-CNF-01`);
  - at most one active link per evidence item, enforced by a uniqueness rule on active links;
  - a target-amount guard evaluated under a lock on the target inside the governed command;
  - revalidation of permission and state at commit (`EIS-KER-09`, `EIS-CNF-02`).
- **Settlement (EQ-07).** Settlement evidence is a separate kind with lines. Lines match payment evidence, not sales directly. Fees, taxes and adjustments are shown as explained variance on the settlement. **No automatic fee-expense entry** (OQ-02; T3-W2). Settlement status is never shown as funds in the bank.

#### 20.4.10 Idempotency, reversals and chargebacks (EQ-11; SB16-B6-14, -15)

- **Idempotency.** Provider events are keyed on (business, provider, external event ID). Uploads carry a content fingerprint as duplicate evidence only (`EIS14-IDM-02`). Commands use (business, actor, operation, key, payload fingerprint) (`EIS-CNF-04`). A replay returns the original outcome (DC-05).
- **Reversals.** A refund, reversal, dispute or chargeback is new evidence linked to the original. It moves the original to `reversed/invalidated` with history kept, flags the affected link and target for Owner review, and **does not change the Ledger or the balance** until the Owner runs a governed correction (`15-§13-*`; `16:FPDR-6` §6).

#### 20.4.11 Corrections, audit and communication preparation (SB16-B6-07, -19)

- **Corrections.** All consequential changes use the SB-P-1.14 governed correction command (`EIS14-CMD-02`), which writes prior and new values in an append-only event. This covers amounts, identity references, due dates, allocations and links.
- **Precondition.** Closure of direct mutation (`EIS14-CMD-03`) is a precondition for any SB-P-1.16 write: no direct client `INSERT`, `UPDATE` or `DELETE` on `transactions`, and no client-insertable correction events.
- **Communication.** Drafts are stored with their state (`draft`, `approved`) and the approving actor. No `sent` or `delivered` state exists before an approved channel (`16:FPDR-8`; `DNTF`).

### 20.5 Permission and security design boundaries (proposed)

| Boundary | Proposal | Basis |
|---|---|---|
| Owner-reserved decisions | Capabilities `credit.configure_threshold`, `credit.decide_override` (approve, decline, adjust, grace), `credit.attribute_historical`, `recon.manage_provider_binding` and `credit.approve_communication` are Owner-only and never delegable through role defaults | `16:FPDR-7` §3; `16:FPDR-4`; `16:FPDR-8` §2 |
| Scoped Manager delegation | Separately grantable and object-scoped capabilities: `credit.view_assigned_balances`, `credit.propose_repayment`, `credit.record_repayment`, `recon.review_assigned_evidence`, `recon.view_assigned_cases` and `recon.resolve_assigned_match` (separate). None is implied by the Manager role. No merchant-facing grant UI is assumed while R15-11 is open | `16:FPDR-7` §§1–2, 6; `EIS-KER-08` |
| Employee | May record a permitted credit sale through the existing create capability (`EIS14-LDG-06`). Receives no balance, threshold, evidence or reconciliation visibility by default. The threshold warning is routed to the Owner; what, if anything, an Employee sees is OQ-03 | Contract 14 §14 p3; `16:FPDR-4`; `16:FPDR-7` §5 |
| Customer | No Ledger capability. A participant only in merchant-approved communication. No delivery before an approved channel | `EIS14-LDG-06`; `16:FPDR-8`; `3-§11-6` |
| RLS and database privileges | Kernel-based deny-by-default RLS on every new table (`EIS-ISO-01`). Commands are the only write boundary (`EIS-ISO-02`). Revoke `anon`, `PUBLIC` and direct `authenticated` DML **in the same migration that creates each object**; reconcile effective access, including the default privileges of creator roles (`EIS-ISO-03`). Verified by an effective-access inventory query on the `supabase/verification/` precedent | SB16-B6-08; Truth Pack Δ-03 |
| Server-derived authority | Every principal from `EIS-KER-02`; no actor, business or role from request bodies or provider payloads | `EIS-KER-02` |
| Provider webhook validation | Signature verification with the binding's secret, a timestamp or freshness window, and a replay key. Raw payload kept as evidence; business from the binding only; failures stored as `unauthenticated` and never authoritative (`15-§22-6`). Endpoint secrets in server environment or secret storage, never in client code or the repository | SB16-B6-09, -10; `16:FPDR-6` §1 |
| Service-role use | Only inside `EIS-ISO-04` privileged operations bound to a decision record; never for ordinary reads; never as the source of a principal | SB16-B6-24 |
| Tenant isolation | All keys composite with `business_id`; cross-business access denied on every surface, including background and integration jobs; a dedicated cross-business test family on the inventory precedent | `EIS-ISO-01`; `15-§22-3` |
| Execution-time revalidation | Grants, assignments, state and binding fingerprints re-checked at commit. Revocation before commit blocks only the pending action (`15-§25-8`) | `EIS-KER-09`; `EIS-CNF-02`; `16:FPDR-7` §4 |

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
| SB16-B6-05 Lump-sum and excess | MEDIUM | DESIGNED (allocation) / ROUTED (excess) | 20.4.2 allocation command; 20.4.6 stop-and-clarify; advance behaviour is OQ-01 | `D14`, `DTX` | FA: atomic allocation, limits; CONC |
| SB16-B6-06 Historical sales and repayments | HIGH | DESIGNED / ROUTED | 20.4.5 Owner attribution; read-only profile needs authorization (OQ-05) | `D12`, `D14`; data access | MIG rehearsal; specialist review |
| SB16-B6-07 Audit bypass | HIGH | PRECONDITION | `EIS14-CMD-03` closure before any SB-P-1.16 write (20.4.11) | `DTX` | SEC: effective-access and no-direct-DML check |
| SB16-B6-08 Default grants | HIGH | PRECONDITION | Revoke-in-same-migration and effective-access reconciliation (20.5) | `D12` (`EIS-ISO-03`) | SEC inventory query per migration |
| SB16-B6-09 Provider principal | HIGH | DESIGNED / ROUTED | `EIS-AUT-01` route (20.4.8); confirmation needed (G-W1) | `D12`; `DPAY` | SEC review; contract test |
| SB16-B6-10 Gateway binding and credentials | HIGH | DESIGNED / GATED | `EIS-ID-05` binding, adapter contract; provider not selected | `DPAY` (NOT AUTHORIZED) | Provider activation evidence (Build Plan §5.4) |
| SB16-B6-11 Settlement fees | MEDIUM | DESIGNED / ROUTED | Settlement lines, explained variance, no auto-expense; fee booking is OQ-02 | `DPAY` | FG: settlement fixtures |
| SB16-B6-12 Provenance versus state | MEDIUM | DESIGNED | 20.4.7 four separate fields | — | FG: state table; FA: labels; FRV-B |
| SB16-B6-13 Amounts and currency | MEDIUM | DESIGNED | 20.4.8 minor units, currency check, no rounding | `DPAY` | FG: normalization fixtures |
| SB16-B6-14 Concurrent confirmation and replay | HIGH | DESIGNED | 20.4.9 bindings, active-link uniqueness, target lock, replay key | `D12`, `DTX` | CONC on the inventory concurrency precedent |
| SB16-B6-15 Reversals | MEDIUM | DESIGNED | 20.4.10 flag and Owner review; no silent rewrite | `DPAY`, `D14` | FA: reversal fixtures |
| SB16-B6-16 Scheduler and timezone | MEDIUM | GATED | Native on-demand ageing; scheduled items wait for `D15`/`DSCH` | `D15`, `DSCH` | RT after SB-P-1.15 |
| SB16-B6-17 Manager scope and R15-11 | MEDIUM | DESIGNED / ROUTED | 20.5 capabilities; R15-11 stays open | `D12`; R15-11 | FA: capability matrix, revocation |
| SB16-B6-18 Employee exposure | MEDIUM | DESIGNED (default) / ROUTED | 20.5 no Employee visibility by default; OQ-03 | `D12` | FA: negative visibility tests |
| SB16-B6-19 Customer preparation-only | LOW | DESIGNED | 20.4.11 no `sent` state | `DNTF` | FA: state labels |
| SB16-B6-20 No native surface | MEDIUM | DESIGNED | Credit warning in the sale-entry flow; customer balance view; review queue in navigation (exact UX at design) | `D12`, `D14` | RT native path |
| SB16-B6-21 Sales versus collected | LOW | DESIGNED | Distinct measures via `EIS14-TOT-01` and C-BAL | `D14`, `D15` | FA: reader parity |
| SB16-B6-22 Ask CFO and DI | MEDIUM | GATED | Replace `15:FDB-3` only for demonstrated data | `D15`, `DAI` | RT after SB-P-1.15 |
| SB16-B6-23 COD | LOW | GATED | Adapter-ready link model | `D18` | Contract test; RT with SB-P-1.18 |
| SB16-B6-24 Service role | MEDIUM | PRECONDITION | `EIS-ISO-04` only | `D12` | SEC code review and test |
| SB16-B6-25 Retention | LOW | GATED | Non-destructive storage; no lifecycle rule | U-08 / DC-11 | Legal/privacy review |
| SB16-B6-26 No CI or runtime | HIGH | CARRIED | CI tiers and environments in 20.7; no PASS from absence | Test environment; CI capacity | Stage 17–19 evidence |

### 20.7 Early delivery plan (planning only — nothing executed)

#### 20.7.1 Environments

| Environment | State | Use |
|---|---|---|
| Local development | Available; no Supabase access needed for Fast Gate | Fast Gate tests |
| Supabase test project | Paused per prior missions (Truth Pack Δ-06); `UNVERIFIED — ACCESS REQUIRED` | Full Assurance, migration rehearsal, Stage 19 verification |
| Production (Team LIPS Supabase; live app) | LIVE (`docs/migration/README.md`) | **No access.** Migration execution, production mutation and delivery are NOT AUTHORIZED |
| Provider sandbox | None; no provider selected | Provider contract tests after authorization only |

#### 20.7.2 Expected migration classes (default-deny; none authorized)

Every class is `DRAFT OR PROPOSAL — NON-EXECUTABLE` under `docs/migration/README.md` until a new mission authorizes the exact package, environment, actor, backups, validation, rollback and window.

| Class | Content | Sequencing | Rehearsal and rollback |
|---|---|---|---|
| M16-0 | Prerequisites: SB-P-1.12 kernel (memberships, participants, bindings, idempotency); SB-P-1.14 M14-1 to M14-3; `DTX` cut-over with `EIS14-CMD-03` closure; SB-P-1.15 timezone | Upstream missions; not this mission's migrations | Per upstream EIS |
| M16-1 | Credit columns on the transactions family: participant reference, `due_on`; governed command widening (create, correct, attribute, set due date, record allocated repayment) | After M14-1 and the `DTX` cut-over | Additive; pre-data rollback by drop; post-data forward-fix; rehearsal asserts ACL, RLS and the effective-access baseline (`EIS14-MIG-05` pattern) |
| M16-2 | Threshold, credit decision record and communication draft tables | After M16-1 | Additive; born hardened |
| M16-3 | Evidence, provider-account binding, link, settlement and review tables; idempotency registrations | After M16-1; adapter activation separately | Additive; born hardened; no provider secrets in migrations |
| M16-4 | Balance and ageing definition (view or function), born hardened; reader cut-over for Ask CFO and Daily Intelligence | After M16-1 and SB-P-1.15 readers | Replace-in-place with parity test against the previous reader output |
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

#### 20.7.5 Verification and security testing (proposed)

| Tier | Content |
|---|---|
| Fast Gate (FG) | Pure logic with no Supabase access: balance algebra, overdue predicate with timezone edges, allocation validation, evidence normalization (minor units, currency), state transition table, settlement variance, deterministic matcher fixtures |
| Full Assurance (FA) | Supabase test project: governed-command-only writes; RLS cross-business; capability matrix including Manager scope and revocation before commit; Employee negative visibility; ambiguous-identity clarification; idempotent replay of commands, uploads and provider events; reversal flagging; reader parity |
| Concurrency (CONC) | On the inventory `concurrency.test.ts` precedent: two actors resolving one evidence item; double allocation to one target; replay during confirmation |
| Security (SEC) | Effective-access inventory after every migration (anon, PUBLIC, authenticated, default privileges); no direct DML on protected tables; webhook signature, freshness and replay rejection; service-role confinement review |
| Migration rehearsal (MIG) | Rehearsal on the test project per class; asserts constraints, ACL and RLS baselines; rollback and forward-fix exercised |
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
| A (`BP-§10.5-A1` to `-A3`) | Owner proceeds, overrides or declines. A Manager without delegation is denied. An Employee recording the sale sees no balance by default (subject to OQ-03). Revocation before commit blocks only the pending action | Balance from C-BAL equals the sum of attributed open targets; overdue only for a recorded, passed `due_on` in business-local time; the Owner decision is recorded; no balance change from the warning itself | Unattributed historical credit disclosed separately; missing due date shows age, not "overdue"; no score or label | Warning re-evaluated at commit (stale balance); a repeated submission with the same key creates one sale |
| B (`BP-§10.5-B1` to `-B3`) | Only the Owner or a Manager holding `recon.resolve_assigned_match` for that evidence can resolve; others are denied; the binding is tied to the actor | The link is a property of the chosen target; no new sale, income or repayment; target outstanding reduced only by verified, linked repayment | Candidates shown with explanation; no AI resolution; merchant-submitted evidence labelled as reviewed, never provider-verified; deferred channels excluded | Two concurrent resolvers produce exactly one link; replaying the confirmed link or the provider event returns the original outcome; candidate change before commit forces re-confirmation |

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
| `FOLLOW-UP` | Feasible design needing a Mission Control or Founder disposition (OQ-01 to OQ-04) before the EIS fixes it |

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
| `FOLLOW-UP` | 7 |
| `CHANNEL-HELD` | 7 |
| `PROVIDER-HELD` | 39 |
| `LATER-MISSION-HELD` | 19 |
| `DEPENDENCY-HELD` | 227 |
| `DESIGN ACCEPTED — EVIDENCE HOLD` | 50 |
| `PASS` | 0 |
| Infeasible, unsafe or blocked (Source 18 T8) | 0 |
| Author risk H / M / L | 173 / 140 / 36 |

| Subsection | Rows | `FOLLOW-UP` | `CHANNEL-HELD` | `PROVIDER-HELD` | `LATER-MISSION-HELD` | `DEPENDENCY-HELD` | `DESIGN ACCEPTED — EVIDENCE HOLD` | Risk H / M / L |
|---|---|---|---|---|---|---|---|---|
| §8.1 | 19 | 0 | 0 | 0 | 3 | 7 | 9 | 7 / 2 / 10 |
| §8.2 | 31 | 0 | 0 | 1 | 1 | 29 | 0 | 24 / 7 / 0 |
| §8.3 | 25 | 0 | 5 | 0 | 0 | 17 | 3 | 1 / 24 / 0 |
| §8.4 | 42 | 1 | 0 | 20 | 1 | 11 | 9 | 21 / 21 / 0 |
| §8.5 | 49 | 0 | 0 | 6 | 1 | 41 | 1 | 37 / 12 / 0 |
| §8.6 | 29 | 0 | 0 | 0 | 8 | 21 | 0 | 4 / 25 / 0 |
| §8.7 | 28 | 1 | 1 | 0 | 1 | 25 | 0 | 22 / 6 / 0 |
| §8.8 | 41 | 1 | 0 | 7 | 0 | 32 | 1 | 19 / 22 / 0 |
| §8.9 | 43 | 0 | 0 | 0 | 1 | 19 | 23 | 0 / 21 / 22 |
| §8.10 | 42 | 4 | 1 | 5 | 3 | 25 | 4 | 38 / 0 / 4 |

| Row | Component | Status | Risk and blocker | Dependency | Verification approach | Stage 6 / Founder decision |
|---|---|---|---|---|---|---|
| `14-§1-1` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§1-2` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§2-8` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-1` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-2` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-3` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-4` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-5` | C-PRN: Credit purpose and principles | DESIGN ACCEPTED — EVIDENCE HOLD | L: Principle drift in later design | none (design review) | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / — |
| `14-§3-6` | C-PRN: Credit purpose and principles | DEPENDENCY-HELD | L: Principle drift in later design | `D14`, `DTX` | DR; Stage 19 trace to C-* behaviour | SB16-B6-01 / `14:FPDR-4` |
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
| `14-§5-7` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances | `D14` | FG: balance algebra incl. corrections and reversals; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-1` |
| `14-§5-8` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
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
| `14-§7-1` | C-REP: Repayment allocation and linkage (§20.4.5) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-1` |
| `14-§7-2` | C-REP: Repayment allocation and linkage (§20.4.5) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4` |
| `14-§7-3` | C-REP: Repayment allocation and linkage (§20.4.5) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4` |
| `14-§7-4` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances | `D14`, `DTX` | FG: balance algebra incl. corrections and reversals; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-4` |
| `14-§7-5` | C-REP: Repayment allocation and linkage (§20.4.5) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4` |
| `14-§7-6` | C-REP: Repayment allocation and linkage (§20.4.5) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-4` |
| `14-§7-7` | C-REP: Repayment allocation and linkage (§20.4.5) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D13`, `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / `14:FPDR-3` |
| `14-§8-1` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-2` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-3` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-4` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D15` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-5` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D15` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-6` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§8-7` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / — |
| `14-§9-1` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DESIGN ACCEPTED — EVIDENCE HOLD | M: Silent warning; stale balance at confirmation; hidden hard block | none (design review) | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-2` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block; illustrative worked example only (MC-112) | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-3` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-4` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-5` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-6` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-7` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `DTX` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-8` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12`, `D14` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `14-§9-9` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
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
| `14-§14-1` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `14-§14-2` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation; R15-11 open; no grant UI assumed | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-7` |
| `14-§14-3` | C-AUTH: Capability and role boundary (§20.5) | FOLLOW-UP | H: Role-implied access; Manager scope wider than delegation; open: OQ-03 (Employee threshold exposure) | `D12` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `14-§14-4` | C-AUTH: Capability and role boundary (§20.5) | CHANNEL-HELD | H: Role-implied access; Manager scope wider than delegation | `D12`, `D15`, `DNTF` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / `16:FPDR-8` |
| `14-§15-1a` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `14-§15-2` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `14-§16-1` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-2` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-3` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / `14:FPDR-3` |
| `14-§16-6` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `14-§17-1` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-2` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-3` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-4` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§17-5` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `14-§18-1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D12` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `14-§18-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12`, `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `14-§18-3` | C-REP: Repayment allocation and linkage (§20.4.5) | FOLLOW-UP | H: Over-allocation; duplicate revenue; wrong target; open: OQ-01 (excess repayment) | `D12`, `D14` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / — |
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
| `14-§21-6` | C-NEG: Must-not guard | DEPENDENCY-HELD | L: Rejected behaviour reintroduced | `D14` | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / `14:FPDR-1` |
| `14-§22-1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; historical data shape UNVERIFIED (OQ-05) | `D12`, `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `14-§22-2` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-4` |
| `14-§22-3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-1` |
| `14-§22-4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-5` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-6` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `14-§22-7` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-03 (Employee threshold exposure) | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
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
| `15-§1-2` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; 16:FPDR-9 deferral traced; F-7; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§2-8` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-1` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-2` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-3` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-4` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-5` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-6` | E-PRN: Evidence principles | DESIGN ACCEPTED — EVIDENCE HOLD | M: Uncertainty converted into certainty | none (design review) | DR; FA: no-promotion tests | SB16-B6-12 / — |
| `15-§3-7` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§4-1` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-2` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-3` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-4` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-5` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-6` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§4-7` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; provider not selected or authorized | `D14`, `DPAY` | FA: reversal flags link and balance for Owner review; history preserved | SB16-B6-15 / `16:FPDR-3`; `16:FPDR-6` |
| `15-§4-8` | E-STATE: Verification state model, separate from source authentication and match outcome (§20.4.7) | DEPENDENCY-HELD | H: One field implying 'verified'; part-payment conflated with mismatch | `D14` | FG: state transition table; FA: label mapping; FRV-B | SB16-B6-12 / `16:FPDR-3` |
| `15-§5-1` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; mixed row: direct-bank branch deferred (16:FPDR-9); F-7; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§5-2` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; deferred from initial channel set (16:FPDR-9); no mission assigned; F-7; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6`; `16:FPDR-9` |
| `15-§5-3` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-4` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | FOLLOW-UP | H: Business resolved from payload; unsigned events accepted; provider lock-in; open: OQ-02 (settlement fees); G-W1; provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-5` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | DEPENDENCY-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1) | `D14` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-6` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | LATER-MISSION-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1) | `D18` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-7` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `15-§5-8` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | DESIGN ACCEPTED — EVIDENCE HOLD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1) | none (design review) | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / — |
| `15-§6-1` | E-REC: Evidence record (§20.4.8) | DEPENDENCY-HELD | M: Missing audit fields; minor-unit or currency errors; provider-event principal (G-W1) | `D12` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-2` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-3` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-4` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-5` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-6` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-7` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D12`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-8` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; retention undefined (U-08 / DC-11); provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-9` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-10` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D14`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-11` | E-REC: Evidence record (§20.4.8) | PROVIDER-HELD | M: Missing audit fields; minor-unit or currency errors; provider not selected or authorized | `D12`, `DPAY` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / — |
| `15-§6-12` | E-REC: Evidence record (§20.4.8) | DEPENDENCY-HELD | M: Missing audit fields; minor-unit or currency errors; retention undefined (U-08 / DC-11) | `D14`, `DUF6` | FG: normalization incl. minor units and currency; FA: record completeness | SB16-B6-13, SB16-B6-25 / `14:FPDR-2` |
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
| `15-§8-4` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-1` |
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
| `15-§11-4` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D14`, `DTX` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§11-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `15-§12-1` | E-IDM: Evidence and link idempotency (§20.4.10) | PROVIDER-HELD | H: Duplicate records or actions under retries; provider not selected or authorized | `DPAY` | FA: replay returns original outcome; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-2` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries | `D14`, `DTX` | FA: replay returns original outcome; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-3` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries | `D14`, `DTX` | FA: replay returns original outcome; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-4` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries | `D14`, `DTX` | FA: replay returns original outcome; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-5` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries | `D15` | FA: replay returns original outcome; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§12-6` | E-IDM: Evidence and link idempotency (§20.4.10) | PROVIDER-HELD | H: Duplicate records or actions under retries; provider not selected or authorized | `D12`, `DPAY` | FA: replay returns original outcome; CONC: concurrent replay | SB16-B6-14 / — |
| `15-§13-1` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; provider not selected or authorized | `D14`, `DPAY` | FA: reversal flags link and balance for Owner review; history preserved | SB16-B6-15 / `16:FPDR-6` |
| `15-§13-2` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | DEPENDENCY-HELD | H: Silent Ledger rewrite; prior verified state erased | `D14` | FA: reversal flags link and balance for Owner review; history preserved | SB16-B6-15 / — |
| `15-§13-3` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | DEPENDENCY-HELD | H: Silent Ledger rewrite; prior verified state erased | `D14`, `DTX` | FA: reversal flags link and balance for Owner review; history preserved | SB16-B6-15 / — |
| `15-§14-1` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4` |
| `15-§14-2` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4` |
| `15-§14-3` | E-LINK: Evidence-to-record linking (§20.4.9) | DEPENDENCY-HELD | H: Duplicate sale/income/repayment; verification as second transaction | `D14`, `DTX` | FA: link is a property of the existing record; idempotent replay; CONC | SB16-B6-14 / `14:FPDR-4`; `16:FPDR-1` |
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
| `15-§20-5` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-1` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-2` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-3` | C-EXC: Exception handling and narrow failure | PROVIDER-HELD | M: Global freeze; uncertain write committed; provider not selected or authorized | `DPAY` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-4` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-5` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-6` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-7` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-8` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D14` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-9` | C-EXC: Exception handling and narrow failure | DEPENDENCY-HELD | M: Global freeze; uncertain write committed | `D12` | FA: per-exception stop-only-the-uncertain-write tests; RT | SB16-B6-14, SB16-B6-15 / — |
| `15-§21-10` | E-RVS: Reversal, refund and chargeback handling (§20.4.10) | PROVIDER-HELD | H: Silent Ledger rewrite; prior verified state erased; provider not selected or authorized | `D14`, `DPAY` | FA: reversal flags link and balance for Owner review; history preserved | SB16-B6-15 / `16:FPDR-6` |
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
| `15-§25-2` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-5` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-6` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `14:FPDR-4`; `16:FPDR-1` |
| `15-§25-7` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence | `D18`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-8` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-9` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-10` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D15`, `DAI` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-11` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `15-§25-12` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-6` |
| `15-§26-4` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§26-5` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§26-6` | C-NEG: Must-not guard | DESIGN ACCEPTED — EVIDENCE HOLD | L: Rejected behaviour reintroduced | none (design review) | DR; negative test where a runtime path exists; Stage 19 must-not check | SB16-B6-01 / — |
| `15-§28-1` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; binding while F-7 is open; deferred branches not delivered; provider not selected or authorized | `D12`, `D13`, `D14`, `D15`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `3-§9-12` | C-BAL: Canonical balance and ageing definition (§20.4.4) | DEPENDENCY-HELD | H: Divergent balances across readers; unattributed sales leaking into balances; historical sales unattributed until Owner act (16:FPDR-2); data shape UNVERIFIED (OQ-05) | `D14` | FG: balance algebra incl. corrections and reversals; FA: single-definition reader parity; RT | SB16-B6-04, SB16-B6-06 / `14:FPDR-1`; `16:FPDR-1`; `16:FPDR-2` |
| `3-§11-6` | C-AUTH: Capability and role boundary (§20.5) | DEPENDENCY-HELD | H: Role-implied access; Manager scope wider than delegation | `D12`, `D14` | FA: capability matrix incl. negative cases, revocation before commit; SEC | SB16-B6-17, SB16-B6-18 / — |
| `3-§15-8` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `3-§15-9` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `3-§23` | C-ACC: Acceptance scenario, completion gate or outcome | LATER-MISSION-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13`, `D14`, `D15`, `D20` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `24-§21-4` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `24-§21-5` | C-CNF: Clarification and exact confirmation binding (§20.4.9) | DEPENDENCY-HELD | H: Stale or reused confirmation; AI settling a match | `D12`, `D13` | FA: binding single-use, revalidation on change; CONC; RT | SB16-B6-14 / — |
| `9-§12-11` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `10-§17-5` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `22-§17-3` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / — |
| `BP-§5.3-1` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§5.4-1` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1); provider not selected or authorized | `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `BP-§6.1-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `BP-§6.2-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D12`, `D13`, `DTX` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `BP-§6.3-1` | C-FND: Shared-foundation reuse and single write path | DEPENDENCY-HELD | M: Parallel ledger, identity, permission or reminder model | `D14` | DR against D12-D15 specifications; FA: write-path inventory | SB16-B6-01, SB16-B6-07 / — |
| `BP-§6.5-1` | C-FUP: Owner follow-up and communication preparation (§20.4.11) | DEPENDENCY-HELD | M: Prepared shown as sent; autonomous delivery | `D15` | FA: no delivery path exists; state labels; RT | SB16-B6-16, SB16-B6-19 / — |
| `BP-§8-1` | C-LANG: Language and channel surfaces | DEPENDENCY-HELD | M: WhatsApp-only behaviour; inconsistent semantics | `D13` | RT native path; D13 HLL reuse check | SB16-B6-20 / — |
| `BP-§9-2` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / `14:FPDR-1` |
| `BP-§9-AL` | G-GOV: Governance, delivery path and mission accounting | DESIGN ACCEPTED — EVIDENCE HOLD | L: Completion claimed from merge alone; unreported partial delivery | none (design review) | Stage 19-24 governance records; Experience Verification Matrix | SB16-B6-26 / — |
| `BP-§10.3-C2` | C-LDG: Credit facts on the four-state Ledger (§20.4.2) | DEPENDENCY-HELD | H: Second write path; history rewrite of credit-method sales | `D14` | FA: governed-command-only writes, no direct DML; MIG rehearsal; RT | SB16-B6-01, SB16-B6-04 / `14:FPDR-1` |
| `BP-§10.5-O` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-W1` | C-ID: Credit-to-participant identity reference (§20.4.1) | DEPENDENCY-HELD | H: Wrong customer credited; silent name matching; link not on the governed path | `D14` | FA: ambiguous-name clarification, no auto-match, cross-business denial; RT; FRV-A | SB16-B6-02 / `16:FPDR-1` |
| `BP-§10.5-W2` | C-REP: Repayment allocation and linkage (§20.4.5) | DEPENDENCY-HELD | H: Over-allocation; duplicate revenue; wrong target | `D14`, `DTX` | FA: multi-target allocation atomicity, per-target limit, idempotent replay; CONC; RT | SB16-B6-05 / — |
| `BP-§10.5-W3` | C-DUE: Due/expected date and ageing (§20.4.3) | DEPENDENCY-HELD | H: Invented deadline; device-local date; overdue without recorded date | `D14`, `D15` | FG: overdue predicate incl. timezone boundaries; FA: no-default check; FRV-A | SB16-B6-03, SB16-B6-16 / `16:FPDR-5` |
| `BP-§10.5-W4` | C-THR: Owner threshold and warn-not-block decision record (§20.4.6) | DEPENDENCY-HELD | M: Silent warning; stale balance at confirmation; hidden hard block | `D12` | FA: warning re-evaluated at commit; decision recorded; no block path; FRV-A | SB16-B6-18, SB16-B6-20 / `16:FPDR-4` |
| `BP-§10.5-W5` | E-SRC: Evidence source adapters and provider-account binding (§20.4.8) | PROVIDER-HELD | H: Business resolved from payload; unsigned events accepted; provider lock-in; provider-event principal (G-W1); provider not selected or authorized | `D14`, `DPAY` | SEC: signature verification, binding resolution; contract tests per adapter; provider activation evidence (Build Plan §5.4) | SB16-B6-09, SB16-B6-10 / `16:FPDR-6` |
| `BP-§10.5-W6` | E-MATCH: Deterministic candidate matcher (§20.4.9) | PROVIDER-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread; provider not selected or authorized | `D14`, `DPAY`, `DTX` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `BP-§10.5-W7` | E-MATCH: Deterministic candidate matcher (§20.4.9) | DEPENDENCY-HELD | M: Non-explainable or non-deterministic matching; settlement fees misread | `D14` | FG: determinism and explanation fixtures; FA: candidate generation | SB16-B6-11 / — |
| `BP-§10.5-W8` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D12`, `D13` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / — |
| `BP-§10.5-W9` | E-IDM: Evidence and link idempotency (§20.4.10) | DEPENDENCY-HELD | H: Duplicate records or actions under retries | `D14`, `DTX` | FA: replay returns original outcome; CONC: concurrent replay | SB16-B6-14 / — |
| `BP-§10.5-W10` | E-REV: Review queue: ambiguity, mismatch, unlinked evidence | DEPENDENCY-HELD | H: Silent choice among candidates; auto-created income/expense | `D14`, `D15` | FA: candidate presentation and binding; no auto-create; FRV-B | SB16-B6-12, SB16-B6-14 / `16:FPDR-3` |
| `BP-§10.5-W11` | C-AUD: Correction and audit (governed correction command) | DEPENDENCY-HELD | H: Direct UPDATE bypassing audit; forged correction events | `D12`, `D14`, `DTX` | SEC: no direct DML on transactions or events; FA: correction preserves prior values | SB16-B6-07 / — |
| `BP-§10.5-E1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-E2` | C-ACC: Acceptance scenario, completion gate or outcome | PROVIDER-HELD | H: Completion overstated; acceptance without runtime evidence; provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-3` |
| `BP-§10.5-E3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-E4` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-A1` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence; test data needs a recorded, passed due date (O-S4-1) | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-5` |
| `BP-§10.5-A2` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / `16:FPDR-4` |
| `BP-§10.5-A3` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B1` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form); provider not selected or authorized | `D14`, `DPAY` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B2` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form) | `D12`, `D13` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-B3` | C-ACC: Acceptance scenario, completion gate or outcome | FOLLOW-UP | H: Completion overstated; acceptance without runtime evidence; open: OQ-04 (Scenario B evidence form) | `D14`, `DTX` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
| `BP-§10.5-X` | C-ACC: Acceptance scenario, completion gate or outcome | DEPENDENCY-HELD | H: Completion overstated; acceptance without runtime evidence | `D12`, `D14` | RT (Stage 19 independent); FRV where Founder-reserved; Stage 22 honest reporting | SB16-B6-26 / — |
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
- The 7 `DNTF` rows: all `CHANNEL-HELD`.

## 21. Engineering Questions, Risks & Recommendations

### 21.1 Engineering questions (EQ-01 to EQ-12)

| ID | Treatment | Section | Upstream amendment needed? | Founder decision needed? |
|---|---|---|---|---|
| EQ-01 Identity reference | Proposed: composite participant reference, governed-only | 20.4.1 | No, if sequenced after M14-1 with PQ-2 coordination | No (`16:FPDR-1`) |
| EQ-02 Due date | Proposed: optional `due_on`, no default, business-local evaluation | 20.4.3 | No | No (`16:FPDR-5`) |
| EQ-03 Balance definition | Proposed: single hardened definition | 20.4.4 | No | No |
| EQ-04 Lump-sum allocation | Proposed: allocation command | 20.4.2 | No | No |
| EQ-05 Provider principal | Proposed: `EIS-AUT-01` route | 20.4.8 | **Possibly** (G-W1) | No |
| EQ-06 Adapter and binding | Proposed: `EIS-ID-05` binding and adapter contract | 20.4.8 | No | No; provider selection needs separate authorization |
| EQ-07 Settlement and fees | Proposed: settlement lines and explained variance | 20.4.9 | No | **Fee booking is OQ-02** |
| EQ-08 Separate concepts | Proposed: four fields | 20.4.7 | No | No (`16:FPDR-3`, `16:FPDR-6`) |
| EQ-09 Amounts and currency | Proposed: minor units, currency check | 20.4.8 | No | No |
| EQ-10 Concurrency | Proposed: binding, uniqueness, target lock | 20.4.9 | No (`EIS-CNF-01`) | No |
| EQ-11 Reversals | Proposed: flag and Owner review | 20.4.10 | No | No (`16:FPDR-6` §6) |
| EQ-12 Privileges | Proposed: revoke-in-same-migration and inventory | 20.5 | No (`EIS-ISO-03`) | No |

All twelve are proposals for EIS confirmation. None is resolved until Mission Control approves the Engineering Review and the EIS fixes the design.

### 21.2 Open questions and G-W1 (not decided here)

| ID | Question | Recommended controlled disposition (for Mission Control or the Founder; not decided) | Owner of the decision |
|---|---|---|---|
| OQ-01 | Does an excess repayment create a lasting customer advance? | Until decided, stop and clarify; store no advance (20.4.6) | Founder (T3-W1) |
| OQ-02 | Are gateway fees ever recorded as business expenses? | Until decided, show fees as explained settlement variance; no automatic entry | Founder (T3-W2) |
| OQ-03 | What does an Employee see when their credit sale crosses a threshold? | Until decided, no Employee visibility; Owner-routed awareness (consistent with `16:FPDR-4` "Manager and Employee access must not expand") | Founder (T3-W3) |
| OQ-04 | Must Founder runtime verification of Scenario B use provider-authenticated gateway evidence? | Recommend Mission Control put the question to the Founder before Stage 8; both forms are designed (20.7.8) | Founder (`BP-§13-9`) |
| OQ-05 | When may a read-only profile of historical credit-method sales be authorized? | Recommend authorizing it before the migration specialist review concludes | Mission Control |
| G-W1 | Can provider events enter through `EIS-AUT-01`, or is an SB-P-1.12 EIS amendment needed? | Recommend Mission Control obtain the SB-P-1.12 owner's interpretation; if an amendment is needed, route it through SB-P-1.12 governance. Not a product trigger | Mission Control |

### 21.3 Engineering risks

| Risk | Rating | Mitigation |
|---|---|---|
| Any SB-P-1.16 write before the `DTX` cut-over and `EIS14-CMD-03` closure | High | PRECONDITION (20.6); sequencing (20.7.2) |
| New objects born exposed by default grants | High | Revoke-in-same-migration; effective-access inventory (20.5) |
| Divergent balance definitions across readers | High | Single definition with a reader-parity test (20.4.4) |
| Unknown historical data, including repayments recorded as sales | High | Read-only profile (OQ-05); Owner attribution; no reinterpretation |
| Provider events with no admissible principal | High | `EIS-AUT-01` route; G-W1 |
| Concurrent resolution or replay creating duplicate truth | High | 20.4.9 controls; CONC tier |
| Same-actor correlated assumptions across Stages 2–7 | High | Non-author specialist reviews; Stage 19 independent verifier |
| Merchants reading gateway coverage as universal | Medium | Truthful coverage statement (Blueprint §9) |
| Settlement fees misread as mismatches | Medium | Explained variance (20.4.9) |
| No CI or test environment | High | 20.7.6; no PASS inferred |

### 21.4 Unresolved dependencies and holds

| Item | State | Effect |
|---|---|---|
| U-08 / DC-11 | OPEN | No retention or deletion rule. A lifecycle-dependent Stage 8 lock waits for it |
| U-10 | OPEN | Nothing designed depends on it |
| R15-11 (F-4) | OPEN | No merchant-facing grant UI; capability boundary per `16:FPDR-7` |
| `DNTF` (7 rows) | No approved channel | `CHANNEL-HELD`; incomplete (F-5) |
| `DPAY` (41 rows) | Channel decided; provider NOT AUTHORIZED | `PROVIDER-HELD` or `FOLLOW-UP` |
| F-7 | OPEN | `15-§28-1` binding; deferred branches traced, not delivered |
| `16:FPDR-9` deferred branches | Deferred; no mission assigned | `15-§5-1` (direct-bank branch), `15-§5-2` and `15-§1-2` stay `IN SCOPE`; no adapter designed |
| `D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`, `DAI` | Locked specifications; not implemented | `DEPENDENCY-HELD` |
| `D18`, `D19`, `D20` | Not started | `LATER-MISSION-HELD` |
| G-W1 | Open | Provider-event principal |
| CI | UNVERIFIED | No PASS |

### 21.5 Trigger screen

**No T3, T7 or T8 trigger fired.**

| Trigger | Screen result |
|---|---|
| T3 (new product behaviour or scenario) | None proposed. The four T3 watches (T3-W1 to T3-W4) are held as open questions with conservative interim controls that add no behaviour |
| T7 (omission, deferral, pull-forward, simplification, reclassification) | None. All 349 rows stay `IN SCOPE` with unchanged dispositions. `DPAY`, `DNTF`, `D18` and the `16:FPDR-9` deferred rows are held, not deferred, narrowed or reassigned. F-7 is not treated as settled |
| T8 (Product Truth conflict or infeasibility) | None. No row is infeasible or unsafe. "Held" statuses are recorded dependencies, not infeasibility. G-W1 is a possible upstream engineering-specification amendment, not a Product Truth conflict |

**Classification note for Mission Control.** If Mission Control reads `PROVIDER-HELD` or `CHANNEL-HELD` (an unauthorized provider or channel) as "blocked" under Source 18 Stage 7, those 48 rows would need T8 escalation. This draft treats them as recorded dependencies already decided by `16:FPDR-6`, `16:FPDR-8` and `16:FPDR-9`. The precedent is the SB-P-1.15 register (R-5), where held means "unbuilt foundation" and is not T8.

### 21.6 Mandatory specialist reviews (Source 18 §4.8) — required, not performed

None of these reviews has been performed. Each is required before Implementation Authorization, and its findings are inputs, never product authority.

| Review | Scope | Inputs from this draft |
|---|---|---|
| Financial integrity | Balance definition; allocation; overpayment control; reversals; settlement variance; historical attribution | 20.4.2 to 20.4.6, 20.4.9, 20.4.10 |
| Security, RLS, grants and permissions | Capability matrix; Manager and Employee scope; default grants; service role; webhook validation; tenant isolation | 20.5; SB16-B6-07, -08, -09, -24 |
| Concurrency and idempotency | Bindings; active-link uniqueness; target lock; replay keys | 20.4.9, 20.4.10; CONC tier |
| Migration and historical-data transition | M16-1 to M16-5 sequencing after M14-1 and `DTX`; no backfill; read-only profile | 20.7.2; OQ-05 |
| External-provider architecture | Adapter contract; account binding; principal (G-W1); credentials; outage and rollback. Desk review only until provider evaluation is authorized | 20.4.8; 20.7.4 |
| Legal and privacy (U-08) | Evidence retention, deletion, backups and legal holds | 20.4.8 raw-evidence pointer; U-08 |

### 21.7 Recommendations

1. **Review.** Mission Control reviews this draft and the 349-row register, and disposes of OQ-01 to OQ-05 and G-W1, routing T3-W1 to T3-W4 to the Founder where needed. Any EIS design that depends on an open question waits for that disposition.
2. **Specialists.** Mission Control appoints the six specialist reviews (21.6) from non-author actors.
3. **Preconditions.** SB16-B6-01, -07, -08 and -24 are recorded as Implementation Authorization preconditions.
4. **Assurance.** Restore and evidence CI and the test project before any Stage 17 claim.
5. **Holds.** Keep U-08 / DC-11, U-10, R15-11, `DNTF`, `DPAY` and F-7 visibly open.

**STOP FOR MISSION CONTROL STAGE 7 ENGINEERING REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
