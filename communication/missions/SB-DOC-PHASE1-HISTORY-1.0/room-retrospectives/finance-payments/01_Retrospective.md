# Finance & Payments — Phase 1 Institutional Retrospective

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Contributor:** `10_FINANCE_PAYMENTS`  
**Primary operational area:** Finance, Payments, Subscription Economics & Financial-Integrity Support  
**Artifact type:** Institutional retrospective  
**Status:** `RETROSPECTIVE — DOCUMENTATION ONLY`  
**Review date:** 2026-09-13  
**Current repository baseline reviewed:** `SmartBusinessv1/smart-business` at `9961500a72a8dbe38a90d2c769546acec6d7513c`  
**Implementation authority:** None  
**Governance-change authority:** None

This retrospective preserves Finance & Payments judgement learned across Phase 1. It separates current Product Truth, commercial policy, architecture, implementation evidence, runtime state and historical discussion. Current approved Product Truth and current merged repository authority control. Historical Finance-room material explains what happened and what was learned; it does not silently override current authority.

---

# 1. Lessons Learned

## 1.1 Economics follows value, not extraction

`CURRENT — STILL VALID`

The governing economic principle remains:

> We do not want money people own. We want what we earn by providing value.

The corresponding Smart Business commercial judgement is that Team LIPS must not let product economics consume the business, but must also not let greed consume the merchant experience.

The durable Finance lesson is therefore a balance, not a race to the lowest price or highest ARPU:

- Team LIPS needs sustainable gross economics so Smart Business can remain reliable;
- Kerala merchants need simple, understandable and affordable commercial choices;
- infrastructure, AI, storage, messaging, support and payment costs must be observed rather than ignored;
- pricing must reflect real value and genuine cost/sustainability changes;
- dependency must never be exploited after merchants have entrusted Smart Business with their business memory;
- normal business growth should not be punished through arbitrary usage friction;
- commercial design must preserve dignity, clarity and exit/data rights.

`CORRECTION / LESSON` — A compliment is not pricing evidence, a complaint is not product cancellation evidence, and an attractive monetization idea is not pricing authorization. Pricing decisions need Founder authority and current Product Truth.

## 1.2 Pricing discussion is not pricing authorization

`CURRENT — STILL VALID`

Current approved baseline pricing is:

- Smart Business Ledger Core — ₹799/month;
- Smart Business Manager Core — ₹1,799/month;
- Compliance Shield — ₹99/month.

Exact current prices remain unresolved for Voice Plus, Staff/HR, Smart Stock Assistant and Smart Order & Delivery.

`MISTAKE / FAILURE MODE` — Historical package discussions, example values, exploratory tiers and old add-on prices can look authoritative when read without provenance.

`CORRECTION / LESSON` — Every commercial value must be classified as one of: Founder-approved current baseline; historical/superseded idea; exploratory package concept; unresolved future price; implemented billing state; planned subscription capability. Missing prices must remain missing until decided.

## 1.3 Add-on is a packaging decision, not automatic implementation deferral

`CURRENT — STILL VALID`

Finance must keep commercial packaging separate from build sequencing. Ledger and Manager define core subscription positions; approved add-ons remain add-ons where Product Truth says so. An add-on may still be `BUILD NOW`.

`MISTAKE / FAILURE MODE` — Collapsing every useful capability into one expensive bundle for commercial convenience would weaken product clarity and contradict the modular product principle.

`CORRECTION / LESSON` — Preserve package boundaries and let shared foundations prevent technical duplication. Commercial modularity must not create duplicate Business Memory, permission, reminder, document, AI or payment engines.

## 1.4 Financial transactions are business events, not editable UI rows

`CURRENT — STILL VALID`

Phase 1 transaction work established a durable financial-integrity lesson: a transaction has consequences for merchant memory, reporting, reconciliation and later AI explanations. Convenience editing must not silently erase prior truth.

Consequential financial events should preserve, where applicable:

- amount and semantic event type;
- business identity;
- actor;
- timestamp;
- source/channel;
- confirmation state;
- idempotency/duplicate protection;
- correction reason and correction history;
- links to related credit, repayment, inventory, payment evidence or documents.

`CAPABILITY PROVEN` — Canonical Phase 1 engineering has meaningful transaction correction/audit foundations, business-isolation foundations and idempotency patterns. The current Global Product Completion Register nevertheless classifies the mature Ledger/Business Memory contract as `IMPLEMENTED BUT INCOMPLETE`.

Durable principle:

> Financial convenience must not destroy financial integrity.

## 1.5 Correction must preserve history

`CURRENT — STILL VALID`

Transaction correction should preserve original identity and prior values, then record the correction with actor/time/reason and resulting state. It must not become an invisible rewrite.

`CORRECTION / LESSON` — Historical mission completion for a transaction-correction slice is evidence of a useful foundation, not proof that the mature four-state Ledger, payment verification, bank reconciliation or subscription lifecycle is complete.

Future Finance reviews must distinguish:

- historical implementation;
- current canonical capability;
- deployed/runtime proof;
- mature-contract acceptance.

## 1.6 Human language can be natural without making financial semantics loose

`CURRENT — STILL VALID`

Merchants may speak in Malayalam, English, Manglish, shorthand or voice. Smart Business should adapt to that human reality. But a natural phrase still needs deterministic financial meaning before a consequential write.

Important ambiguities include:

- income vs repayment;
- expense vs purchase;
- credit sale vs paid sale;
- customer payment vs miscellaneous income;
- owner capital vs revenue;
- correction vs new transaction.

`CORRECTION / LESSON` — Language understanding can propose structure; it cannot invent accounting meaning. The safe pattern is `understand → clarify → preview where needed → confirm → deterministic action → audit → response`.

## 1.7 Payment evidence is not automatically financial truth

`CURRENT — STILL VALID`

Payment Verification & Bank Reconciliation exists to connect business records with trustworthy external evidence without duplicating revenue or fabricating certainty.

Finance must preserve distinct states such as:

- transaction recorded;
- payment expected;
- evidence received;
- bank/provider evidence observed;
- candidate match;
- confirmed/verified match;
- ambiguous/review required;
- mismatch/unlinked evidence;
- reconciliation complete.

Exact enum names are implementation choices. The distinction is product-critical.

`MISTAKE / FAILURE MODE` — Calling a payment “verified” because an AI finds it plausible, or because a screenshot/unauthenticated message resembles a payment, creates false financial certainty.

`CORRECTION / LESSON` — Strong unique evidence can support a match. Ambiguity remains ambiguity until an authorized human or deterministic authoritative signal resolves it. Evidence and financial truth are related, but they are not automatically identical.

## 1.8 Reconciliation must link; it must not duplicate

`CURRENT — STILL VALID`

A strong payment match should link evidence to the existing business event. It should not create a second sale, income or repayment merely because bank evidence arrived separately.

The same principle applies to:

- customer-credit repayments;
- COD/delivery collection;
- bank/provider webhook retries;
- bank email evidence;
- settlement files;
- reversals/chargebacks where applicable.

`CORRECTION / LESSON` — Provider events must be idempotent. Retry safety is a financial-integrity requirement, not merely an API implementation detail.

## 1.9 Smart Credit is awareness, not underwriting

`CURRENT — STILL VALID`

Smart Credit helps the merchant remember balances, repayments, ageing and threshold context. It warns; it does not block by default. Owner decides.

It must not silently evolve into:

- autonomous credit scoring;
- automatic denial;
- lending authority;
- underwriting;
- debt-collection authority;
- customer punishment or reputation scoring.

`CORRECTION / LESSON` — Merchant-configured thresholds are awareness inputs, not universal product truth. Historical fixed values such as ₹5,000 are examples/provenance, not a universal rule.

## 1.10 Ask CFO is clarity, not financial authority

`CURRENT — STILL VALID`

Ask CFO is a read-only intelligence/clarity capability. It may calculate, compare, summarize, explain, identify patterns and suggest review. It must distinguish facts from interpretation and say when data is missing.

It is not:

- an autonomous CFO;
- an accountant replacement;
- a tax authority;
- an investment adviser;
- a business decision-maker;
- a write path hidden behind natural-language analysis.

`CORRECTION / LESSON` — If an Owner wants to continue from an Ask CFO insight into an action, that action must move through the relevant governed command/confirmation path. Ask CFO itself does not gain write authority.

## 1.11 Role name does not grant financial authority; permission does

`CURRENT — STILL VALID`

Owner is the highest business authority. Manager receives only delegated visibility/action. Employee access is operational/self-service only where permission allows.

Employees must not see Owner financial intelligence by default. Managers do not automatically inherit it merely because they are Managers.

This applies to:

- Ledger detail;
- Ask CFO;
- profit/business analytics;
- bank/reconciliation evidence;
- customer-credit intelligence;
- exports/reports;
- billing/subscription control.

`MISTAKE / FAILURE MODE` — UI hiding is not authorization. Financial boundaries require backend permission/RLS enforcement and denial-path verification.

## 1.12 Business isolation is a finance requirement, not only a security feature

`CURRENT — STILL VALID`

Financial data is among the most sensitive merchant data. Cross-business reads or writes must be denied across tables, functions, exports, search, conversational channels and privileged paths.

`CAPABILITY PROVEN` — Phase 1 established strong owner-scoped RLS/business-isolation foundations and narrow privileged-command patterns in implemented domains.

`UNRESOLVED / NEEDS MISSION CONTROL OR FOUNDER DECISION` — Current Security evidence still carries residual `anon` privilege exposure concerns on `businesses`, `transactions` and `transaction_correction_events` into the next authorized permissions/security gate. Finance does not resolve that finding here.

## 1.13 Service-role and privileged functions require special financial discipline

`CURRENT — STILL VALID`

Service-role capability bypasses RLS and therefore cannot be treated as ordinary application permission. Privileged financial call sites must be narrow, backend-only, auditable and mission-authorized. Caller-supplied business identity must not manufacture tenant authority.

The same applies to `SECURITY DEFINER`/privileged functions: ownership, `search_path`, grants, executor roles, business binding and denial behavior all matter.

`CORRECTION / LESSON` — A technically available privileged credential is capability, not authority.

## 1.14 Subscription entitlement, billing state and merchant data are different concerns

`CURRENT — STILL VALID`

Subscription architecture must distinguish:

- product entitlement;
- plan/add-on state;
- billing/payment state;
- renewal/retry/grace where policy permits;
- cancellation;
- reactivation;
- account/data retention lifecycle.

Commercial state may restrict capability according to policy, but it must not dynamically create/drop core schema or silently destroy merchant history.

Core law:

> Entitlements control capability. They do not rewrite Product Truth or destroy merchant history.

## 1.15 Payment failure must not become data hostage

`CURRENT — STILL VALID`

Payment failure is a commercial lifecycle event. It should be recorded, explained and reconciled without corrupting business data or creating duplicate charges/actions. Cancellation should clearly distinguish request/effective date, entitlement state, export/retention implications and reactivation where supported.

`UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Exact long-term retention/deletion duration after cancellation/non-payment remains unresolved. Historical 60-day/180-day rules must not be silently reinstated.

`UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — Trial policy remains unresolved because historical evidence conflicts between a 14-day trial and later no-free-trial/no-freemium direction.

## 1.16 Provider discussion, provider account and production processing are different states

`CURRENT — STILL VALID`

Stripe/Razorpay and other provider approaches have appeared in historical planning, but provider choice is intentionally implementation-flexible in the mature subscription contract.

Finance must distinguish:

1. provider evaluated;
2. provider approved;
3. account/credentials configured;
4. sandbox tested;
5. integration code exists;
6. webhook signatures/retries verified;
7. live account connected;
8. real runtime transaction proven;
9. production acceptance completed.

`CORRECTION / LESSON` — An account, credential, code path or webhook file is not proof of an active production gateway. At this review point, no durable evidence reviewed by this room proves a production-accepted Smart Business payment gateway or complete subscription billing runtime.

## 1.17 Compliance assistance must remain assistance

`CURRENT — STILL VALID`

Compliance Shield can organize records, deadlines, reminders and retrieval. It must not imply that Smart Business becomes a CA, tax authority, statutory filer, legal professional or guarantor of compliance.

Finance may prepare organized information for professional review. Professional/legal/tax authority remains external to Smart Business unless a later explicit product/legal decision says otherwise.

## 1.18 Merchant financial data requires heightened stewardship

`CURRENT — STILL VALID`

Merchant data belongs to the merchant, and individual merchant data is not a monetization asset to be sold. Finance must treat transaction data, bank evidence, customer credit, supplier payments, employee financial visibility, exports and support access as high-sensitivity domains.

Commercial lockout must not become deceptive data hostage. Platform/support access must remain purpose-limited.

## 1.19 Product & Price Master, Inventory and Transactions are different truths

`CURRENT — STILL VALID`

Founder-approved build direction separates:

- Product & Price Master — reusable product/commercial identity;
- Inventory — quantity/state;
- Transactions — financial/operational events.

`HISTORICAL — SUPERSEDED` — Catalog remains useful engineering provenance but is no longer the protected independent product model.

`CORRECTION / LESSON` — Do not make transaction records the only reusable product identity, and do not make Inventory own reusable commercial identity. Preserve valid Catalog foundations and evolve them under authorized `SB-P-1.12`; do not implement that evolution in retrospective work.

## 1.20 Finance sequencing must respect shared foundations

`CURRENT — STILL VALID`

Founder-approved sequencing relevant to Finance is:

- `SB-P-1.12` — authority, identity and Product & Price Master foundation;
- `SB-P-1.14` — Business Memory/documents/mature Ledger foundation, including income, expense, credit and repayment;
- `SB-P-1.15` — Reminder / Daily Intelligence / Ask CFO;
- `SB-P-1.16` — Financial Integrity & Credit, including credit maturity, payment evidence and reconciliation;
- `SB-P-1.19` — Subscription, payment/account lifecycle aspects where authorized.

The lesson is dependency discipline: do not pull a later finance implementation forward because the concept is understood.

---

# 2. Capabilities Acquired

## 2.1 Finance architecture capability

`CAPABILITY PROVEN`

Team LIPS now has evidence-backed reasoning capability for:

- decomposing financial events from UI rows;
- separating income, expense, credit and repayment semantics;
- transaction correction/audit design;
- actor/time/reason/provenance requirements;
- duplicate/idempotency reasoning;
- payment-evidence and reconciliation-state design;
- separating product identity, inventory state and transaction events;
- identifying where ambiguity requires confirmation rather than inference.

This is architecture/engineering capability. It is not a claim that the mature Ledger or reconciliation feature is runtime-complete.

## 2.2 Pricing and subscription-economics capability

`CAPABILITY PROVEN`

The project can now reason consistently about:

- value-based rather than dependency-based pricing;
- merchant affordability vs sustainable Team LIPS economics;
- core vs add-on packaging;
- separating packaging from build commitment;
- separating current baseline prices from unresolved prices;
- provider-independent subscription lifecycle design;
- entitlement state vs billing state vs data lifecycle;
- avoiding destructive schema behavior on downgrade/cancellation.

## 2.3 Payment/reconciliation design capability

`CAPABILITY PROVEN`

Current mature contracts establish a strong design capability for:

- authoritative evidence ingestion concepts;
- strong/ambiguous/mismatch/unlinked payment states;
- deterministic/idempotent matching principles;
- human confirmation of ambiguous matches;
- duplicate-revenue prevention;
- credit-repayment and COD linkage;
- provider outage/failure containment;
- subscription webhook idempotency and reconciliation requirements.

`CAPABILITY EXPLICITLY NOT CLAIMED`

This retrospective does not claim production payment processing, a production-accepted Stripe/Razorpay integration, complete bank reconciliation runtime or complete subscription billing.

## 2.4 Financial-governance capability

`CAPABILITY PROVEN`

The project has matured durable judgement around:

- Owner decision ownership;
- Ask CFO read-only reasoning;
- Smart Credit warn-not-block behavior;
- permission-aware financial visibility;
- merchant financial-data sensitivity;
- audit/evidence discipline;
- distinguishing AI interpretation from financial authority;
- separating professional accounting/tax/legal authority from Smart Business assistance.

## 2.5 Capabilities explicitly not claimed

Unless later separately evidenced, Finance & Payments does not claim:

- chartered-accountancy capability;
- audit authority;
- tax/legal authority;
- banking authority;
- underwriting/lending authority;
- autonomous credit decisions;
- production payment processing;
- complete subscription billing;
- complete payment verification/bank reconciliation runtime.

---

# 3. Tools We Have

Only evidence-backed tools/systems are listed.

| Tool / system | Actual/proven use | Capability proven | Limitation / authority boundary |
|---|---|---|---|
| GitHub / `SmartBusinessv1/smart-business` | Canonical repository, mission evidence, contracts, branches/PRs/CI | Durable evidence, protected-main workflow, implementation/history inspection | Repository state is not runtime/payment-provider state; no self-merge in this mission |
| Supabase / PostgreSQL | Auth, RLS, transactions, correction/audit, Inventory/Catalog foundations, migrations/RPCs | Structured financial/business truth foundations, isolation and privileged-command patterns | Service role/privileged paths require narrow authority; mature finance features remain incomplete |
| SQL / migrations / RPCs / RLS | Used in governed backend missions | Deterministic writes, audit/idempotency patterns, tenant isolation | Migration presence is not execution authority; environment must be verified |
| Lovable / React application | Existing transaction/dashboard/workspace foundations | Merchant-facing financial entry/display foundation | UI is not authorization; placeholder UI is not feature completion |
| ChatGPT | Finance/product reasoning, governance synchronization, documentation and retrospective synthesis | Commercial/finance architecture reasoning and institutional-memory capture | No accounting/tax/legal authority; no Product Truth or Mission Control authority |
| Claude / Claude Code | Engineering/EIS/repository review and independent verification in project history | Counterweight review, financial-integrity and backend implementation analysis | Engineering evidence is not Founder/Mission Control acceptance |
| GitHub Actions / Markdown Quality Gate | Protected-main documentation quality control | Repeatable documentation CI | Markdown CI does not prove payment runtime, application correctness or financial correctness |
| Supabase isolated historical test environment | Rehearsal/behavioral testing in Phase 1 backend history | Realistic RLS/RPC/migration/denial-path testing capability | Historical test project lifecycle is currently unresolved; verify environment identity before reuse |
| Spreadsheets / CSV / document inputs | Product/UDI/import design and historical business workflows | Structured import/export reasoning | Mature UDI/financial import workflow is not yet complete |
| Screenshots, logs, evidence packages and provider-derived records | Used across governed verification | Evidence-over-assertion discipline | Evidence must be tied to exact environment/state; screenshots alone are not financial truth |

`CURRENT OBSERVATION` — Stripe and Razorpay remain relevant provider candidates/history, but this review found no durable evidence sufficient to classify either as a production-accepted Smart Business payment-processing tool currently in operation.

---

# 4. Suggested Tools to Have

Every item below is `RECOMMENDATION — NOT YET ADOPTED`.

| Suggested tool/capability | Problem solved | Timing | Risk / governance note |
|---|---|---|---|
| Financial-domain invariant test suite | Prevents regressions in money/event semantics | BUILD/ADOPT LATER — within authorized finance missions | Must reflect approved Product Truth, not invent accounting policy |
| Transaction audit viewer | Makes correction history inspectable | BUILD/ADOPT LATER | Permission-scoped; must not expose Owner data to staff |
| Payment/reconciliation simulator | Tests strong/ambiguous/mismatch/unlinked flows safely | BUILD/ADOPT LATER | Synthetic/test evidence only; never treated as bank truth |
| Payment-provider sandbox regression suite | Tests checkout/webhook/retry/failure behavior | BUILD/ADOPT LATER | Provider chosen only through authorized mission |
| Duplicate-payment detector | Detects replay/duplicate financial evidence | BUILD/ADOPT LATER | Detection must not autonomously delete/merge records |
| Reconciliation evidence manifest | Binds provider evidence to test/runtime assertions | BUILD/ADOPT LATER | Protect sensitive references and merchant data |
| Subscription-state test harness | Exercises activation/failure/downgrade/cancel/reactivate | BUILD/ADOPT LATER | Trial/retention policy remains gated where unresolved |
| Canonical pricing/package registry | Prevents stale prices/packages from leaking into implementation | BUILD/ADOPT LATER | Founder-approved changes only; registry is not pricing authority |
| Pricing-change audit log | Preserves who/when/why for commercial changes | BUILD/ADOPT LATER | Avoid turning ordinary experiments into active price |
| Entitlement/billing-state verifier | Detects mismatch between paid state and feature access | BUILD/ADOPT LATER | Must preserve data and avoid accidental unlocking |
| Financial permission denial harness | Automates Owner/Manager/Employee/cross-business denial tests | BUILD/ADOPT LATER | Coordinate with Security/Supabase authority |
| Bank-import fixture library | Reproduces bank/provider evidence edge cases | BUILD/ADOPT LATER | Use sanitized/synthetic fixtures |
| Idempotency/replay tester | Proves webhook/event retries do not duplicate money/events | BUILD/ADOPT LATER | Must include concurrent/reordered delivery cases |
| Money/rounding/currency invariant checker | Prevents precision/rounding drift | BUILD/ADOPT LATER | Exact money rules need authorized specification |
| Webhook replay/signature validation harness | Proves authenticity/replay behavior | BUILD/ADOPT LATER | Secrets never enter client/log fixtures |
| Finance observability dashboard | Surfaces payment/subscription/reconciliation failures | BUILD/ADOPT LATER | Operational metadata first; merchant detail purpose-limited |
| Retention-policy enforcement verifier | Proves cancellation/deletion behavior matches policy | BUILD/ADOPT LATER | Cannot be finalized until retention policy is settled |

No tool above is implementation authorization.

---

# 5. Suggestions to Improve This Project

`RECOMMENDATION — NOT YET ADOPTED`

1. Maintain one canonical finance-domain glossary covering event, payment, evidence, verified, reconciled, credit, repayment, entitlement, billing state, cancellation, retention and deletion.
2. Lock explicit money/amount precision, currency and rounding rules before mature financial implementation expands.
3. Define one canonical transaction/event-state model so UI, conversation, imports, Ask CFO and reports use the same semantics.
4. Expand automated cross-business and role-denial tests for all financial surfaces.
5. Maintain one subscription/billing lifecycle state machine and keep entitlement state separate from provider payment state.
6. Preserve a formal claim/evidence distinction for `paid`, `evidence received`, `verified`, `matched` and `reconciled`.
7. Maintain a canonical pricing/package registry with immutable price-change history once pricing operations become active.
8. Require provider/environment identity proof before payment-provider, bank or billing operations.
9. Require webhook replay/idempotency evidence before any payment provider is production-accepted.
10. Build reusable fixtures for credit, repayment, payment evidence, mismatches, reversals and reconciliation.
11. Standardize financial UX confirmation patterns for consequential writes.
12. Automate safe regression checks so the Founder is not required to manually prove every repeatable financial invariant.

These are institutional recommendations only. Mission Control/Founder must authorize any implementation.

---

# 6. What Future Rooms Must Know Before Touching This Area

1. Start from current Founder-approved Product Truth and merged `main`; historical Finance discussion is provenance, not authority.
2. Current baseline pricing is Ledger ₹799/month, Manager ₹1,799/month and Compliance Shield ₹99/month. Voice Plus, Staff/HR, Smart Stock and Smart Order & Delivery prices remain unresolved.
3. Trial policy is unresolved. Do not hardcode trial or no-trial as permanent Product Truth.
4. Exact long-term retention/deletion duration after cancellation/non-payment is unresolved. Do not revive historical 60/180-day rules.
5. Mature Ledger truth is four-state: income, expense, credit, repayment. Current implementation is incomplete against that mature contract.
6. Financial correction preserves history; it does not silently overwrite it.
7. Payment evidence is not automatically payment truth. Strong match, ambiguity, mismatch and unlinked evidence are different states.
8. Provider retries/webhooks must be idempotent and must not duplicate revenue, repayments or entitlement changes.
9. Ask CFO is read-only clarity; Smart Credit warns; Owner decides.
10. Manager/Employee financial visibility is permission-scoped. Role name does not create financial authority.
11. UI hiding is not security. RLS/backend/privileged paths and denial behavior matter.
12. Service-role/privileged credentials are capability, not authorization.
13. Payment provider evaluation/account/configuration/code/sandbox/live/runtime/acceptance are separate states. Verify exact current state before claiming a provider is active.
14. Product & Price Master owns reusable commercial identity; Inventory owns quantity/state; Transactions are events.
15. Do not start `SB-P-1.12` or any later Product Mission from retrospective knowledge. Follow current Mission Control authorization and sequencing.

---

# 7. Do-Not-Repeat Register

- `MISTAKE / FAILURE MODE` — Do not invent unresolved prices.
- `MISTAKE / FAILURE MODE` — Do not treat pricing discussion as pricing authorization.
- `MISTAKE / FAILURE MODE` — Do not convert add-on packaging into automatic Build Later status.
- `MISTAKE / FAILURE MODE` — Do not treat AI analysis as accounting or banking truth.
- `MISTAKE / FAILURE MODE` — Do not call Ask CFO an authority.
- `MISTAKE / FAILURE MODE` — Do not silently overwrite financial history.
- `MISTAKE / FAILURE MODE` — Do not make transaction correction unauditable.
- `MISTAKE / FAILURE MODE` — Do not flatten income/expense/credit/repayment into ambiguous transaction semantics.
- `MISTAKE / FAILURE MODE` — Do not treat payment evidence as automatic bank confirmation.
- `MISTAKE / FAILURE MODE` — Do not mark ambiguous payments verified without basis.
- `MISTAKE / FAILURE MODE` — Do not create duplicate revenue from bank/provider evidence.
- `MISTAKE / FAILURE MODE` — Do not let webhook retry create duplicate financial events or entitlements.
- `MISTAKE / FAILURE MODE` — Do not let employees inherit Owner financial intelligence.
- `MISTAKE / FAILURE MODE` — Do not let Managers inherit Owner intelligence merely by role name.
- `MISTAKE / FAILURE MODE` — Do not treat UI hiding as financial authorization.
- `MISTAKE / FAILURE MODE` — Do not bypass business isolation.
- `MISTAKE / FAILURE MODE` — Do not expose service-role credentials or privileged financial capability to clients.
- `MISTAKE / FAILURE MODE` — Do not let broad grants reopen financial data that RLS was expected to protect in depth.
- `MISTAKE / FAILURE MODE` — Do not confuse provider account existence with integration completion.
- `MISTAKE / FAILURE MODE` — Do not equate sandbox success with production acceptance.
- `MISTAKE / FAILURE MODE` — Do not let AI execute consequential financial changes without current permission/confirmation/authority.
- `MISTAKE / FAILURE MODE` — Do not autonomously block Smart Credit customers.
- `MISTAKE / FAILURE MODE` — Do not imply Smart Business is a bank, lender, accountant, auditor, tax authority or financial regulator.
- `MISTAKE / FAILURE MODE` — Do not invent cancellation/data-retention policy.
- `MISTAKE / FAILURE MODE` — Do not dynamically create/drop core schema because a subscription changes.
- `MISTAKE / FAILURE MODE` — Do not revive Catalog as an independent product model when current direction is Product & Price Master.
- `MISTAKE / FAILURE MODE` — Do not start future Finance Product Missions through retrospective work.

---

# 8. Current Truth vs Historical Truth

| Area | Historical state / risk | Current truth | Learning worth preserving | Must not return |
|---|---|---|---|---|
| Pricing | Multiple discussions/ideas could be mistaken for active pricing | Ledger ₹799; Manager ₹1,799; Compliance Shield ₹99 | Preserve provenance and Founder approval boundary | Guessing or reviving old prices |
| Ledger/Manager packaging | Packaging could be conflated with implementation sequencing | Ledger = AI Business Memory/Daily Clarity; Manager includes Ledger + operational intelligence | Commercial package and build sequence are separate | One bloated package merely for convenience |
| Compliance Shield | Add-on concepts varied | Add-on for Ledger + Manager; ₹99 baseline | Assistance/clarity, shared reminder/document foundations | Claiming statutory authority/guarantee |
| Add-on pricing | Historical/exploratory values existed | Voice Plus, Staff/HR, Smart Stock, Smart Order & Delivery exact prices unresolved | Missing price is valid state | Manufacturing a price |
| Ask CFO | Risk of “AI CFO” interpretation | Read-only clarity/intelligence; Owner decides | Facts vs interpretation; missing-data honesty | Autonomous CFO/write authority |
| Smart Credit | Historical hard-block/fixed-limit thinking | Warn/inform; Owner decides; merchant-defined threshold | Awareness without humiliation | Autonomous denial/scoring/collection |
| Transaction correction | UI-edit mentality can imply overwrite | Preserve original + correction/audit history | Financial events require provenance | Silent rewrite/destructive edit |
| Ledger semantic model | Current code history centered on sale/purchase transaction foundations | Mature Ledger requires income, expense, credit, repayment | Extend valid foundations rather than destroy them | Permanent sale/purchase-only model |
| Payment verification | Historical fixed formulas/providers possible | Explicit evidence states; strong match vs ambiguity/mismatch/unlinked | Evidence is not certainty | Guessing matches or duplicate revenue |
| Bank reconciliation | Could be treated as bank-sync convenience | Deterministic/idempotent matching + human review for ambiguity | Reconciliation is a financial-integrity workflow | Unauthenticated evidence as authoritative |
| Subscription lifecycle | Historical trial/retention/provider specifics conflicted | Provider-independent lifecycle; entitlement separate from data; trial/retention details partly unresolved | Preserve data/continuity on commercial change | Dynamic schema churn, immediate purge by assumption |
| Payment provider status | Provider discussion/account/code can look “active” | No production-accepted gateway state proven by this review | Use explicit state ladder from evaluation to production acceptance | “Account exists = gateway live” |
| Employee financial visibility | Broad role assumptions can leak intelligence | Employee operational access only where permitted; no Owner intelligence by default | Permission, not role name, grants authority | Staff access to Ask CFO/profit/bank intelligence by default |
| Product & Price Master | Catalog existed as engineering/product terminology | Product & Price Master is shared reusable commercial identity; Inventory quantity/state; Transactions events | Preserve useful Catalog foundations as provenance | Catalog as independent competing product truth |
| AI financial authority | Natural-language convenience can imply execution | AI interprets/clarifies/suggests; consequential actions use governed deterministic path | Human-in-the-loop is an execution property | Silent AI financial authority |
| Accounting/compliance positioning | Finance features can sound professionally authoritative | Smart Business assists and organizes; professionals retain professional authority | Clear boundary protects trust | Accountant/tax/legal/bank impersonation |

---

# 9. Evidence Pointers

Preferred durable evidence reviewed for this retrospective:

- `Project Source File Archive/00_Lighthouse_Constitution (2).md` — Lighthouse human/economic principles.
- `Project Source File Archive/01_Smart_Business_Master_System_Manifesto (1).md` — current baseline pricing, pricing philosophy, Ask CFO boundary, trust/data stewardship.
- `Project Source File Archive/02_Supabase_Architecture_Framework.md` — backend/data architecture where financially relevant.
- `Project Source File Archive/04_API_WhatsApp_OpenAI_Framework.md` — channel/AI action boundary where financial actions intersect conversation.
- `Project Source File Archive/05_AI_Behaviour_and_Model_Training_Framework.md` — AI authority/uncertainty behavior.
- `Project Source File Archive/09_Master_Roadmap_Command_v3 (2).md` — sequencing authority/provenance.
- `Project Source File Archive/11_Smart_Business_Product_Truth_Map_v2.1 (2).md` — Ledger/Manager, permissions, Ask CFO, payment verification, Smart Credit and add-on truth.
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` — Founder-approved future sequencing, current implementation baseline and shared architecture.
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` — authoritative current implementation/acceptance status across mature contracts.
- `docs/phase-1-mission-blueprint/smart-business-features/00_Feature_Definition_Library_Coverage_Matrix.md` — 25-contract hydration and unresolved Founder decisions.
- `docs/phase-1-mission-blueprint/smart-business-features/02_Ask_CFO.md` — read-only financial intelligence and permission boundary.
- `docs/phase-1-mission-blueprint/smart-business-features/03_Ledger_and_Business_Memory.md` — four-state Ledger, correction/audit, financial input/clarification and permissions.
- `docs/phase-1-mission-blueprint/smart-business-features/14_Smart_Credit_Awareness.md` — warn-not-block credit model and repayment relationship.
- `docs/phase-1-mission-blueprint/smart-business-features/15_Payment_Verification_and_Bank_Reconciliation.md` — evidence/matching/reconciliation contract.
- `docs/phase-1-mission-blueprint/smart-business-features/18_Subscription_Payment_and_Account_Lifecycle.md` — current pricing baseline, entitlement/lifecycle, provider independence and unresolved trial/retention decisions.
- `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` — one permission/business-memory/confirmation/audit/idempotency foundation.
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/founder-room/01_Retrospective.md` — Founder intent, economic philosophy, packaging/build-sequence distinction and historical corrections.
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-engineering/01_Retrospective.md` — transaction-integrity, correction/audit, privileged-path and implementation-vs-acceptance lessons.
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/security-permissions/01_Retrospective.md` — financial permission, RLS/grant/service-role and residual privilege lessons.
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/supabase-backend/01_Retrospective.md` — backend environment, RLS/RPC/default-privilege and test-environment lessons.
- PR #532 / merge `875ee49453e270ed320e57ad7438676db91226f8` — full 25-contract hydration, including Payment Verification, Smart Credit and Subscription Lifecycle.
- PR #115 / merge `e6203b81af9994830fd7f557fa49702636dad9e5` — evidence of narrow privileged-command, RLS, idempotency and behavioral-test lessons in canonical backend engineering.
- PR #435 / merge `6a4b92f23eac7d330a02757c3d42ea948403ba91` — evidence of explicit `anon` privilege hardening and disclosed residual non-Inventory grant concerns.

Historical Finance & Payments room conversations are used as institutional provenance for the room's early responsibility definition, banking/payment-gateway planning, subscription/billing/invoice/refund/reconciliation focus and governance calibration. They do not override the current repository evidence above.

---

# 10. Open Questions / Residual Risks

Only unresolved issues are listed. None is resolved by this retrospective.

| Open question / residual risk | Classification | Likely owner |
|---|---|---|
| Exact Voice Plus price | `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` | Founder |
| Exact Staff/HR price | `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` | Founder |
| Exact Smart Stock Assistant price | `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` | Founder |
| Exact Smart Order & Delivery price | `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` | Founder |
| Current free-trial policy | `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` | Founder |
| Exact long-term retention/deletion duration after cancellation/non-payment | `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` | Founder + Legal/Privacy + Mission Control |
| Production payment-provider choice and current implementation state | `UNRESOLVED / NEEDS MISSION CONTROL OR FOUNDER DECISION` | Founder + Mission Control + Finance & Payments + future authorized Product Mission |
| Payment Verification runtime completeness | `UNRESOLVED / NEEDS FUTURE AUTHORIZED PRODUCT MISSION` | Finance & Payments + Claude Engineering + Supabase Backend |
| Bank Reconciliation runtime completeness | `UNRESOLVED / NEEDS FUTURE AUTHORIZED PRODUCT MISSION` | Finance & Payments + Claude Engineering + Supabase Backend |
| Subscription entitlement vs provider billing-state implementation | `UNRESOLVED / NEEDS FUTURE AUTHORIZED PRODUCT MISSION` | Finance & Payments + Supabase Backend + Security |
| Credit ageing/balance runtime maturity | `UNRESOLVED / NEEDS FUTURE AUTHORIZED PRODUCT MISSION` | Finance & Payments + Ledger/Engineering |
| Financial denial-path automation coverage | `UNRESOLVED / NEEDS FUTURE AUTHORIZED PRODUCT MISSION` | Security + Supabase Backend + Claude Engineering |
| Residual `anon` grant exposure on `businesses`, `transactions`, `transaction_correction_events` | `CURRENT SECURITY RISK — CARRIED FORWARD` | Security + Supabase Backend under authorized gate |
| Service-role financial call-site inventory and least-privilege proof | `UNRESOLVED / NEEDS FUTURE AUTHORIZED REVIEW` | Security + Supabase Backend |
| Canonical money precision/rounding/currency rules | `UNRESOLVED / NEEDS AUTHORIZED SPECIFICATION` | Finance & Payments + Claude Engineering + Founder where policy-relevant |
| Payment webhook idempotency/replay/signature proof | `UNRESOLVED / DEPENDS ON PROVIDER IMPLEMENTATION` | Finance & Payments + Claude Engineering + Security |
| Payment/provider environment drift controls | `UNRESOLVED / NEEDS FUTURE AUTHORIZED IMPLEMENTATION` | Finance & Payments + Infrastructure + Security |
| Pricing-history/audit operational implementation | `RECOMMENDATION — NOT YET ADOPTED` | Finance & Payments + Mission Control |
| Exact financial reporting/accounting classification boundary beyond current Product Truth | `UNRESOLVED WHERE NOT DEFINED` | Founder + accountant/tax professional + Finance & Payments for operational preparation |
| Future underwriting/lending/third-party financial ecosystem | `UNRESOLVED / SEPARATE FUTURE PRODUCT QUESTION` | Founder |

No unresolved item above authorizes implementation. Future rooms must carry these questions forward without guessing and must use the applicable current mission lifecycle.
