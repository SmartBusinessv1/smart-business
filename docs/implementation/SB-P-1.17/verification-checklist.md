# SB-P-1.17 — Verification Checklist

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED, blob f65ddd2a)
EIS: APPROVED — LOCKED (UNCHANGED, blob 5d681b0c)
FCTM: LOCKED (UNCHANGED, blob cb79088d; 630 rows, 404 IN SCOPE)
IMPLEMENTATION PACKAGE: DRAFT — MISSION CONTROL REVIEW REQUIRED (Stage 13)
IMPLEMENTATION AUTHORIZATION: WITHHELD — IMPLEMENTATION NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
POS, AI, VOICE AND MESSAGING PROVIDER ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DEPLOYMENT: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.17 — Manager Operations |
| Document | Verification Checklist |
| Lifecycle stage | Source 18 v1.2 Stage 12 — Initial Implementation Package |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Authorization | Mission Control Stage 12 authorization (conversation-source): drafting only |
| Author | Claude Code (also author of Stages 2–9, the Stage 9 EIS draft and several Stage 10 corrections; not independent review) |
| Baseline | `main@ef3acbf5686fbb196efc0ee6d58f06d9bff78f42` (PR #1064 merge; PR #1063 merged at `8a4b19b1`) |
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md`, blob `f65ddd2a3c499d278b83f6ae83487669ed75670c` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `5d681b0c169dd12edc54a110a9fc9d54b87e2982` (157 requirements) |
| Canonical FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md`, blob `cb79088d3fa59f8b3226fd9d11ff9c9573666670` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011` |
| Companion documents | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` in `docs/implementation/SB-P-1.17/` |

## 2. How to Use This Checklist

Every item is **NOT VERIFIED**. An item becomes evidenced only through the planned evidence class, recorded against an exact commit, after a separate Implementation Authorization. No item is PASS in this package.

## 3. Evidence Classes

| Class | Meaning | From FCTM seed |
|---|---|---|
| T1 | Static, unit and fixture checks (CI Fast Gate) | — |
| T2 | Supabase-backed integration tests (Full Assurance) | RT |
| T2-NEG | Named negative-path tests | NEG |
| T2-IDEM | Replay, concurrent-delivery and lost-response tests | IDEM |
| T3 | Runtime evidence in an approved environment | RT |
| DR | Design review / inspection against the EIS | INSP |
| EXP | Human experience review (named runtime scenario) | EXP |
| T4 FRV-A / FRV-B | Founder Runtime Verification, Founder-reserved | FRV-A / FRV-B |
| GATE | Completion-gate evidence set | GATE |

## 4. Named Negative-Path Checks (authority, permissions, isolation, denial)

| Check | Assertion | EIS requirements | Rows |
|---|---|---|---|
| `NP-01` | Manager with no grants is denied capabilities 1–7 on every surface | AUTH-01, AUTH-02 | 146 |
| `NP-02` | A single-capability grant implies no other capability; item, supplier and counter scope and business binding are enforced; partial grants are never unioned | AUTH-02, AUTH-08 | 8 |
| `NP-03` | Operator-attributed detail (capability 5) is denied to Managers by role, with capability 4, by direct RPC and by any grant-creation attempt | CTR-06 | 5 |
| `NP-04` | Standing-rule creation is denied to every Manager, including holders of capability 2 and of every delegable capability | RO-05 | 6 |
| `NP-05` | Capability-2 value ceiling is enforced at preview and at commit | RO-03 | 7 |
| `NP-06` | Reference Cost is absent without `catalog.cost.read` on dashboard, RPC, export, Ask CFO, conversation, background readers and caches | AUTH-03, SUP-03, AI-04 | 15 |
| `NP-07` | Margin and margin-derived output are absent without `catalog.margin.read`; cost read and margin never imply each other | AUTH-03 | 5 |
| `NP-08` | Cost-event write is denied without `catalog.cost.write`; `catalog.cost.read` alone writes nothing; the Owner-only `authority_basis` CHECK holds | AUTH-03 | 5 |
| `NP-09` | A supplier participant reaches only its own request content: no dashboard, other supplier, stock, cost, counter or closing data | SUP-07 | 3 |
| `NP-10` | Cross-business access is denied on every channel and composite reference | AUTH-08 | 3 |
| `NP-11` | Employees receive no Owner intelligence and no analysis about other staff | AUTH-04, CC-07 | 12 |
| `NP-12` | No routine platform or support browsing of merchant data | AUTH-05 | 2 |
| `NP-13` | Revocation or grant change before commit stops prepared reorders, standing-rule runs, queued imports and pending confirmations | AUTH-06, TXN-11 | 4 |
| `NP-14` | Stale, other-actor, other-business or materially changed confirmations are rejected; a stale conversational "yes" executes nothing | RO-03, AI-01, SUP-04 | 28 |
| `NP-15` | A trigger without authority executes nothing; an expired, revoked or out-of-bounds rule falls back to a suggestion | RO-05 | 6 |
| `NP-16` | An unconfirmed threshold raises no alert or reorder action; no automatic threshold suggestion is displayed while any MC-507CM parameter is UNSET | SIG-01, SIG-02 | 7 |
| `NP-17` | POS intake fails closed for invalid, expired, rotated or revoked credentials, unregistered or disabled sources, wrong-business binding and ambiguous provider mapping, including queued uncommitted events | POS-02, POS-03 | 6 |
| `NP-18` | Payload-supplied business, source, principal, role or actor identifiers are ignored; provider authentication and `service_role` create no merchant authority | POS-02, ARC-03 | 11 |
| `NP-19` | An untrusted, unbound, unauthorized, ambiguous, conflicting or reversed POS event creates no Ledger or stock effect | TXN-09, POS-06 | 6 |
| `NP-20` | Replay and concurrent delivery yield one committed outcome; same key with a different payload is rejected | TXN-02, TXN-01 | 2 |
| `NP-21` | Event links to non-existent, cross-business, wrong-type or reversed events are rejected at commit | TXN-04 | 3 |
| `NP-22` | Fault injection between Ledger, movement, source state and link leaves no partial commit; a mapped stock failure never becomes a Ledger-only success | TXN-03, TXN-09 | 17 |
| `NP-23` | Later stock application never reposts the Ledger sale; a changed payload under an existing identity is rejected | TXN-09 | 2 |
| `NP-24` | An out-of-order reversal is held with no effect; a reversal compensates only committed movements, atomically | TXN-06, TXN-07 | 2 |
| `NP-25` | A possible POS/manual duplicate is never auto-merged, suppressed or deleted | TXN-08 | 5 |
| `NP-26` | A stock correction creates no financial transaction | STK-05 | 3 |
| `NP-27` | Goods receipt records no supplier payment; no duplicate purchase, expense or settlement fact | TXN-10, SUP-06 | 3 |
| `NP-28` | No COMPLETE closing with missing, stale or unverified source evidence, an unknown float, before the period ends, or without a confirmed timezone version | CC-02, CC-03, CC-04 | 6 |
| `NP-29` | A Manager cannot establish, change, infer, attest or zero-fill the opening float | CC-05 | 3 |
| `NP-30` | No autonomous counter action: no register lock, suspension, reversal, price change, checkout block, wage deduction or accusation | CTR-04, CTR-02 | 21 |
| `NP-31` | Operator fields are excluded or redacted from raw events, dead letters, logs, diagnostics, exports and AI context; no roster matching | PRIV-01, PRIV-02 | 6 |
| `NP-32` | Ask CFO has no write tools; AI cannot order, invent quantities, infer theft or overwrite history | AI-02, AI-05, RO-02 | 9 |
| `NP-33` | Authenticated callers have no direct DML on protected tables; definer functions have no `PUBLIC` execute; effective privileges are verified | SEC-01, SEC-02, SEC-03 | 6 |
| `NP-34` | Historical supplier attribution is never automatic; the original transaction is unchanged | SUP-04 | 2 |
| `NP-35` | A purchase request is never shown as sent or accepted without a merchant record; no system dispatch | RO-04 | 2 |
| `NP-36` | No dashboard-only logic or second truth; caches never bypass authorization | WS-01, WS-06 | 24 |
| `NP-37` | Per mapped row, test its exact FCTM must-not / negative prohibition (including blind procurement, custom POS core, fixed thresholds, duplicate engines, CSV-only downgrade and AI verdicts where applicable). The verifier records a row-specific prohibited action, entry surface, attempted actor/input, expected denial or absence, observed outcome and linked negative evidence; one generic screenshot or aggregate NP-37 PASS cannot satisfy multiple different clauses. | NEG-01, NEG-02, POS-10, POS-08 | 73 |

**Stage 13 specificity rule — NP-01 and NP-37.** A named check ID is a reusable test family, not blanket evidence or a blanket PASS. For each row mapped to `NP-01`, verify the specific forbidden capability and its relevant UI, RPC, export, conversation or background entry points for a no-grant Manager and record row-keyed denial evidence; where a row specifies another authority condition, apply its narrower `NP-02`–`NP-36` check as well. For each row mapped to `NP-37`, derive the exact prohibited behavior from that FCTM row and its linked EIS requirements and record a distinct row-keyed negative assertion and observation. If the original row is too ambiguous to derive a test, mark `FOLLOW-UP` and do not mark it PASS; resolve against the locked source contract without inventing Product Truth. No check is performed or passed by this document.

## 5. Named Human-Runtime Scenarios

| Scenario | Title | What is observed | EIS requirements | Rows |
|---|---|---|---|---|
| `RS-01` | FRV-A — Founder Scenario A (Founder-reserved) | Owner-confirmed threshold; movement takes the item below it; explained suggestion; Owner confirms through a binding; purchase request on the same Product & Price Master item. Negative paths per Blueprint §20.7.10 | VER-06 | 18 |
| `RS-02` | FRV-B — Founder Scenario B (Founder-reserved) | On the first evidenced POS source only: an evidenced discount or void anomaly appears as a neutral review item; unsupported signals show as unavailable; no accusation; no cross-staff analysis | VER-07 | 17 |
| `RS-03` | Neutral counter review and human context | Review-item wording per `13-§8-9`; authorized context attached without altering the event | CTR-02, CTR-03, CTR-01 | 30 |
| `RS-04` | Existing POS respected; outage keeps manual work available | Bridge enriches without replacement pressure; POS outage or partial sync leaves manual operations usable | POS-09, POS-10, POS-12 | 8 |
| `RS-05` | Reorder review and confirmation | Owner, and a scoped Manager within the ceiling, review an explained suggestion and confirm, modify or reject it | RO-01, RO-03 | 4 |
| `RS-06` | Merchant-sent purchase request | Merchant copies, shares or prints the factual request and records outcomes | RO-04, SUP-05 | 1 |
| `RS-07` | Threshold evidence gap and manual entry | With MC-507CM parameters UNSET, a neutral configuration/evidence gap is shown and the Owner can enter a threshold manually | SIG-01, SIG-02 | 2 |
| `RS-08` | Supplier memory and historical attribution | Supplier identity, supplied items, history and Owner-confirmed historical links, with unlinked rows visibly unlinked | SUP-01, SUP-02, SUP-04 | 1 |
| `RS-09` | Daily closing presentation | COMPLETE, PARTIAL (named missing source or float), REVIEW-REQUIRED and UNKNOWN states; neutral variance; reopened linked version | CC-01, CC-02, CC-03, CC-04, CC-05, CC-06 | 9 |
| `RS-10` | Calm role-aware Manager workspace | Role-appropriate cards, isolated card failure, empty and unavailable states, no form clutter | WS-01, WS-02, WS-03, WS-04, WS-05, WS-08 | 20 |
| `RS-11` | Contextual Product & Price Master access | Product and price management appears where operational work needs it | STK-06 | 2 |
| `RS-12` | Stock document import | Preview, confirmation and idempotent re-import of a stock list | DOC-01, DOC-02 | 1 |
| `RS-13` | Conversation, voice and Ask CFO | English, Malayalam and Manglish with typed confirmation; Ask CFO read-only and separating fact from hypothesis | AI-01, AI-02, AI-03, AI-06 | 4 |
| `RS-14` | Stock position and signals | Stock position, low, slow and expiry signals each with stated basis and freshness | STK-07, SIG-03, SIG-04 | 5 |
| `RS-15` | POS mapping review queue | Unmapped or conflicting events surface with the reason; trusted unmapped sales show the held stock exception | POS-06, TXN-09, TXN-08 | 2 |

Scenarios RS-01 and RS-02 are Founder-reserved (Source 18 §4.2; `BP-§13-9`). **Neither is demonstrated.** RS-02 runs only against the first POS source evidenced to supply discount or void data; a synthetic fixture never counts.

## 6. Already Demonstrated Rows

The canonical FCTM has **0** `ALREADY DEMONSTRATED` rows, so no carry-forward assessment applies and no row is marked PASS. Existing repository evidence that later work must not regress is a **regression / no-change** obligation, not a demonstration: the 17 `tests/inventory` files (`EC17-VER-12`) and the existing `create_inventory_movement` invariants (type-direction, correction link, idempotency).

## 7. Preserved Holds

`HOLD-01` to `HOLD-23`, FIN-01 PROVISIONAL, U-11, DPOS/SA-04, MC-507CM calibration (all parameters UNSET), T6 screening pending and T8 WATCH stay open. A row carrying a held dependency is never reported as passed.

## 8. Row-Keyed Checklist Items (404 rows)

| Item | FCTM row | Kind | Workstream | Planned evidence | Negative checks | Runtime scenarios | Obligations (count; EC §10) | Status |
|---|---|---|---|---|---|---|---|---|
| `VC17-001` | `7-§1-1` | EXP | WS17-A | EXP | — | RS-14 | 5 | NOT VERIFIED |
| `VC17-002` | `7-§1-2` | PRIN | WS17-A | EXP | — | RS-14 | 5 | NOT VERIFIED |
| `VC17-003` | `7-§2-1` | OBL | WS17-A | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-004` | `7-§2-2` | OBL | WS17-A | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-005` | `7-§2-3` | OBL | WS17-A | T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-006` | `7-§2-4` | OBL | WS17-A | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-007` | `7-§2-5` | OBL | WS17-A | T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-008` | `7-§2-6` | OBL | WS17-A | T2 + T3, T4 FRV-A | NP-16 | RS-01 | 9 | NOT VERIFIED |
| `VC17-009` | `7-§2-7` | OBL | WS17-A | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-010` | `7-§2-8` | OBL | WS17-A | T2 + T3 | — | — | 5 | NOT VERIFIED |
| `VC17-011` | `7-§2-9` | OBL | WS17-A | T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-012` | `7-§2-10` | OBL | WS17-A | T2 + T3 | NP-21, NP-22 | — | 10 | NOT VERIFIED |
| `VC17-013` | `7-§2-11` | OBL | WS17-A | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-014` | `7-§2-12` | RULE | WS17-A | DR | — | — | 9 | NOT VERIFIED |
| `VC17-015` | `7-§3-1` | RULE | WS17-A | T2 + T3 | NP-01 | — | 5 | NOT VERIFIED |
| `VC17-016` | `7-§3-2` | OBL | WS17-A | T2 + T3 | NP-01 | — | 5 | NOT VERIFIED |
| `VC17-017` | `7-§3-3` | OBL | WS17-A | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-018` | `7-§3-4` | OBL | WS17-A | T2 + T3 | NP-01, NP-14, NP-34 | — | 8 | NOT VERIFIED |
| `VC17-019` | `7-§3-5` | OBL | WS17-A | T2 + T3 | NP-01, NP-06, NP-07, NP-08 | — | 9 | NOT VERIFIED |
| `VC17-020` | `7-§3-6` | OBL | WS17-A | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-021` | `7-§3-7` | OBL | WS17-A | T2 + T3 | NP-01, NP-22, NP-27 | — | 12 | NOT VERIFIED |
| `VC17-022` | `7-§3-8` | OBL | WS17-A | T2 + T3 | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-023` | `7-§3-9` | NEG | WS17-A | T2-NEG | NP-01, NP-09, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-024` | `7-§4-1` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01 | RS-01 | 8 | NOT VERIFIED |
| `VC17-025` | `7-§4-2` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01 | RS-01 | 8 | NOT VERIFIED |
| `VC17-026` | `7-§4-3` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01 | RS-01 | 8 | NOT VERIFIED |
| `VC17-027` | `7-§4-4` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01, NP-16 | RS-01 | 9 | NOT VERIFIED |
| `VC17-028` | `7-§4-5` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01, NP-06, NP-07, NP-08 | RS-01 | 10 | NOT VERIFIED |
| `VC17-029` | `7-§4-6` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01 | RS-01 | 9 | NOT VERIFIED |
| `VC17-030` | `7-§4-7` | NEG | WS17-B | T2-NEG | NP-01, NP-32, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-031` | `7-§5-1` | RULE | WS17-B | T2 + T3, T2-NEG, T4 FRV-A | NP-01, NP-02, NP-05, NP-14, NP-35 | RS-01 | 12 | NOT VERIFIED |
| `VC17-032` | `7-§5-2` | RULE | WS17-B | T2 + T3, T2-NEG, T4 FRV-A | NP-01, NP-04, NP-15, NP-28 | RS-01 | 12 | NOT VERIFIED |
| `VC17-033` | `7-§5-3` | NEG | WS17-B | T2-NEG | NP-01, NP-04, NP-15, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-034` | `7-§5-4` | RULE | WS17-B | DR, T2-NEG | NP-01, NP-04, NP-15 | — | 9 | NOT VERIFIED |
| `VC17-035` | `7-§6-1` | OBL | WS17-F | T2 + T3 | — | — | 5 | NOT VERIFIED |
| `VC17-036` | `7-§6-3` | OBL | WS17-F | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-037` | `7-§6-4b` | RULE | WS17-F | T2 + T3, T2-IDEM | — | — | 8 | NOT VERIFIED |
| `VC17-038` | `7-§6-5b` | NEG | WS17-F | T2-NEG, T2-IDEM | NP-20, NP-37 | — | 8 | NOT VERIFIED |
| `VC17-039` | `7-§7-1` | OBL | WS17-C | T2 + T3 | — | — | 4 | NOT VERIFIED |
| `VC17-040` | `7-§7-2` | OBL | WS17-C | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-041` | `7-§7-3` | NEG | WS17-C | T2-NEG, DR | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-042` | `7-§7-4` | RULE | WS17-C | DR, T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-043` | `7-§8-1` | RULE | WS17-A | DR, T2-IDEM | NP-21, NP-22 | — | 12 | NOT VERIFIED |
| `VC17-044` | `7-§8-2` | OBL | WS17-A | T2 + T3, T2-IDEM | NP-22, NP-27 | — | 12 | NOT VERIFIED |
| `VC17-045` | `7-§8-3` | OBL | WS17-A | T2 + T3, T2-IDEM | NP-22 | — | 14 | NOT VERIFIED |
| `VC17-046` | `7-§8-4` | NEG | WS17-A | T2-NEG | NP-26, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-047` | `7-§8-5` | RULE | WS17-A | T2 + T3, DR | NP-22, NP-27 | — | 12 | NOT VERIFIED |
| `VC17-048` | `7-§9-1` | OBL | WS17-A | T2 + T3 | — | — | 5 | NOT VERIFIED |
| `VC17-049` | `7-§9-2` | OBL | WS17-A | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-050` | `7-§9-3` | NEG | WS17-A | T2-NEG, DR | NP-37 | — | 7 | NOT VERIFIED |
| `VC17-051` | `7-§11-1.1` | OBL | WS17-B | T2 + T3 | NP-01, NP-06 | — | 10 | NOT VERIFIED |
| `VC17-052` | `7-§11-1.2` | OBL | WS17-B | T2 + T3 | NP-01, NP-06, NP-16 | — | 11 | NOT VERIFIED |
| `VC17-053` | `7-§11-1.3` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01, NP-06 | RS-01 | 10 | NOT VERIFIED |
| `VC17-054` | `7-§11-1.4` | OBL | WS17-B | T2 + T3 | NP-01, NP-06 | — | 10 | NOT VERIFIED |
| `VC17-055` | `7-§11-1.5` | OBL | WS17-B | T2 + T3 | NP-01, NP-06 | — | 10 | NOT VERIFIED |
| `VC17-056` | `7-§11-1.6` | OBL | WS17-B | T2 + T3 | NP-01, NP-06 | — | 9 | NOT VERIFIED |
| `VC17-057` | `7-§11-2.1` | NEG | WS17-B | T2-NEG | NP-01, NP-32, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-058` | `7-§11-2.2` | NEG | WS17-B | T2-NEG | NP-01, NP-30, NP-32, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-059` | `7-§11-2.3` | NEG | WS17-B | T2-NEG | NP-01, NP-26, NP-32, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-060` | `7-§11-2.4` | NEG | WS17-B | T2-NEG | NP-01, NP-05, NP-14, NP-32, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-061` | `7-§11-2.5` | NEG | WS17-B | T2-NEG | NP-01, NP-06, NP-09, NP-11, NP-32, NP-37 | — | 11 | NOT VERIFIED |
| `VC17-062` | `7-§12-1` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-063` | `7-§12-2` | RULE | WS17-F | DR | — | — | 5 | NOT VERIFIED |
| `VC17-064` | `7-§12-3` | RULE | WS17-F | DR | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-065` | `7-§12-4` | RULE | WS17-F | DR | — | — | 9 | NOT VERIFIED |
| `VC17-066` | `7-§12-5` | RULE | WS17-F | DR | — | — | 6 | NOT VERIFIED |
| `VC17-067` | `7-§12-6` | RULE | WS17-F | DR | — | — | 6 | NOT VERIFIED |
| `VC17-068` | `7-§12-7` | RULE | WS17-F | DR | NP-14 | — | 9 | NOT VERIFIED |
| `VC17-069` | `7-§12-8` | RULE | WS17-F | DR | NP-33 | — | 8 | NOT VERIFIED |
| `VC17-070` | `7-§12-9` | RULE | WS17-F | DR | NP-18 | — | 7 | NOT VERIFIED |
| `VC17-071` | `7-§13-1` | OBL | WS17-F | T2-IDEM | — | — | 8 | NOT VERIFIED |
| `VC17-072` | `7-§13-2` | OBL | WS17-F | T2 + T3, T2-NEG | NP-19 | — | 8 | NOT VERIFIED |
| `VC17-073` | `7-§13-3` | OBL | WS17-F | T2 + T3, T2-NEG | NP-19 | — | 8 | NOT VERIFIED |
| `VC17-074` | `7-§13-4` | OBL | WS17-F | T2 + T3, T2-NEG | NP-37 | — | 8 | NOT VERIFIED |
| `VC17-075` | `7-§13-5` | OBL | WS17-F | T2 + T3, T2-NEG | NP-37 | — | 8 | NOT VERIFIED |
| `VC17-076` | `7-§13-6` | OBL | WS17-F | T2 + T3, T2-NEG | NP-13, NP-24, NP-26 | — | 10 | NOT VERIFIED |
| `VC17-077` | `7-§13-7` | OBL | WS17-F | T2 + T3, T2-NEG | NP-32 | — | 9 | NOT VERIFIED |
| `VC17-078` | `7-§13-8` | OBL | WS17-F | T2 + T3, T2-NEG | NP-35 | — | 9 | NOT VERIFIED |
| `VC17-079` | `7-§13-9` | OBL | WS17-F | T2 + T3, T2-NEG | NP-25 | — | 9 | NOT VERIFIED |
| `VC17-080` | `7-§13-10` | OBL | WS17-F | T2 + T3, T2-NEG | NP-37 | — | 7 | NOT VERIFIED |
| `VC17-081` | `7-§13-11` | OBL | WS17-F | T2-IDEM | — | — | 9 | NOT VERIFIED |
| `VC17-082` | `7-§13-12` | OBL | WS17-F | T2 + T3, T2-NEG | NP-04, NP-13, NP-15 | — | 10 | NOT VERIFIED |
| `VC17-083` | `7-§13-13` | RULE | WS17-F | T2 + T3, T2-NEG | NP-37 | — | 9 | NOT VERIFIED |
| `VC17-084` | `7-§14-1` | PRIN | WS17-D | T2-NEG, EXP | NP-30 | RS-03 | 5 | NOT VERIFIED |
| `VC17-085` | `7-§14-2` | NEG | WS17-D | T2-NEG, EXP | NP-30, NP-37 | RS-03 | 6 | NOT VERIFIED |
| `VC17-086` | `7-§15-1` | SCN | WS17-G | T2 + T3 | — | RS-14 | 7 | NOT VERIFIED |
| `VC17-087` | `7-§15-2b` | SCN | WS17-G | T2 + T3, T2-IDEM | — | RS-12 | 8 | NOT VERIFIED |
| `VC17-088` | `7-§15-3` | SCN | WS17-G | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-089` | `7-§15-4` | SCN | WS17-G | T2 + T3 | NP-16 | RS-07, RS-14 | 7 | NOT VERIFIED |
| `VC17-090` | `7-§15-5` | SCN | WS17-G | T2 + T3 | — | RS-14 | 7 | NOT VERIFIED |
| `VC17-091` | `7-§15-6` | SCN | WS17-G | T2 + T3 | NP-14, NP-34 | RS-08 | 5 | NOT VERIFIED |
| `VC17-092` | `7-§15-7` | SCN | WS17-G | T2 + T3, T4 FRV-A | NP-05, NP-14 | RS-01, RS-05 | 8 | NOT VERIFIED |
| `VC17-093` | `7-§15-8` | SCN | WS17-G | T2 + T3, T2-NEG | NP-04, NP-15, NP-28 | RS-09 | 10 | NOT VERIFIED |
| `VC17-094` | `7-§15-9` | SCN | WS17-G | DR, T2 + T3 | — | RS-04 | 7 | NOT VERIFIED |
| `VC17-095` | `7-§15-11` | SCN | WS17-G | T2-NEG, EXP | NP-30 | RS-03 | 7 | NOT VERIFIED |
| `VC17-096` | `7-§16-1` | NEG | WS17-F | T2-NEG | NP-37 | — | 5 | NOT VERIFIED |
| `VC17-097` | `7-§16-2` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-098` | `7-§16-3` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-099` | `7-§16-4` | NEG | WS17-F | T2-NEG | NP-30, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-100` | `7-§16-5` | NEG | WS17-F | T2-NEG | NP-25, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-101` | `7-§16-6` | NEG | WS17-A | T2-NEG | NP-16, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-102` | `7-§18-1` | GATE | WS17-G | GATE | — | — | 9 | NOT VERIFIED |
| `VC17-103` | `13-§1-1` | EXP | WS17-C | EXP | — | RS-04 | 4 | NOT VERIFIED |
| `VC17-104` | `13-§1-2` | EXP | WS17-C | EXP | — | RS-04 | 4 | NOT VERIFIED |
| `VC17-105` | `13-§2-6` | PRIN | WS17-D | EXP | — | RS-03 | 4 | NOT VERIFIED |
| `VC17-106` | `13-§3-1` | PRIN | WS17-D | EXP, DR | — | RS-03, RS-04 | 5 | NOT VERIFIED |
| `VC17-107` | `13-§3-2` | PRIN | WS17-D | EXP, DR | — | RS-03, RS-04 | 5 | NOT VERIFIED |
| `VC17-108` | `13-§3-3` | PRIN | WS17-D | EXP, DR | — | RS-03 | 5 | NOT VERIFIED |
| `VC17-109` | `13-§3-4` | PRIN | WS17-D | EXP, DR | — | RS-03 | 5 | NOT VERIFIED |
| `VC17-110` | `13-§3-5` | PRIN | WS17-D | EXP, DR | — | RS-03 | 5 | NOT VERIFIED |
| `VC17-111` | `13-§3-6` | PRIN | WS17-D | EXP, DR | — | RS-03 | 6 | NOT VERIFIED |
| `VC17-112` | `13-§3-7` | NEG | WS17-D | T2-NEG, DR | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-113` | `13-§4-1` | OBL | WS17-C | T2 + T3 | NP-17, NP-18 | — | 7 | NOT VERIFIED |
| `VC17-114` | `13-§4-2` | OBL | WS17-C | T2 + T3 | NP-22 | — | 8 | NOT VERIFIED |
| `VC17-115` | `13-§4-3` | OBL | WS17-C | T2 + T3, T2-IDEM | — | — | 8 | NOT VERIFIED |
| `VC17-116` | `13-§4-4` | OBL | WS17-C | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-117` | `13-§4-5` | OBL | WS17-C | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-118` | `13-§4-6` | OBL | WS17-C | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-119` | `13-§4-7` | OBL | WS17-C | T2 + T3 | NP-03, NP-31 | — | 11 | NOT VERIFIED |
| `VC17-120` | `13-§4-8` | OBL | WS17-C | T2 + T3 | NP-22 | — | 10 | NOT VERIFIED |
| `VC17-121` | `13-§4-9` | OBL | WS17-C | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-122` | `13-§4-10` | RULE | WS17-C | DR | — | — | 7 | NOT VERIFIED |
| `VC17-123` | `13-§5-1` | NEG | WS17-C | T2-NEG, DR | NP-37 | — | 8 | NOT VERIFIED |
| `VC17-124` | `13-§5-2` | RULE | WS17-C | DR | — | — | 6 | NOT VERIFIED |
| `VC17-125` | `13-§5-3` | RULE | WS17-C | DR | NP-17, NP-18 | — | 6 | NOT VERIFIED |
| `VC17-126` | `13-§5-4` | RULE | WS17-C | DR | NP-18 | — | 6 | NOT VERIFIED |
| `VC17-127` | `13-§5-5` | RULE | WS17-C | DR | — | — | 6 | NOT VERIFIED |
| `VC17-128` | `13-§5-6` | RULE | WS17-C | DR | — | — | 7 | NOT VERIFIED |
| `VC17-129` | `13-§6-1` | OBL | WS17-C | T2 + T3, T2-IDEM | — | — | 10 | NOT VERIFIED |
| `VC17-130` | `13-§6-2` | OBL | WS17-C | T2 + T3, T2-IDEM | — | — | 10 | NOT VERIFIED |
| `VC17-131` | `13-§6-3` | OBL | WS17-C | T2 + T3, T2-IDEM | — | — | 10 | NOT VERIFIED |
| `VC17-132` | `13-§6-4` | OBL | WS17-C | T2 + T3, T2-IDEM | — | — | 8 | NOT VERIFIED |
| `VC17-133` | `13-§6-5` | OBL | WS17-C | T2 + T3, T2-IDEM | — | — | 9 | NOT VERIFIED |
| `VC17-134` | `13-§6-6` | NEG | WS17-C | T2-IDEM, T2-NEG | NP-19, NP-20, NP-22, NP-23, NP-37 | — | 13 | NOT VERIFIED |
| `VC17-135` | `13-§7-1` | OBL | WS17-C | T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-136` | `13-§7-2` | OBL | WS17-C | T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-137` | `13-§7-3` | OBL | WS17-C | T2 + T3 | NP-22 | — | 9 | NOT VERIFIED |
| `VC17-138` | `13-§7-4` | OBL | WS17-C | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-139` | `13-§7-5` | RULE | WS17-C | T2 + T3, T2-NEG | NP-25 | — | 8 | NOT VERIFIED |
| `VC17-140` | `13-§8-1` | OBL | WS17-D | T2 + T3, T4 FRV-B | — | RS-02 | 6 | NOT VERIFIED |
| `VC17-141` | `13-§8-2` | OBL | WS17-D | T2 + T3, T4 FRV-B | — | RS-02 | 6 | NOT VERIFIED |
| `VC17-142` | `13-§8-3` | OBL | WS17-D | T2 + T3, T4 FRV-B | — | RS-02 | 7 | NOT VERIFIED |
| `VC17-143` | `13-§8-4` | OBL | WS17-D | T2 + T3, T4 FRV-B | — | RS-02 | 7 | NOT VERIFIED |
| `VC17-144` | `13-§8-5` | OBL | WS17-D | T2 + T3, T4 FRV-B | — | RS-02 | 7 | NOT VERIFIED |
| `VC17-145` | `13-§8-6` | OBL | WS17-D | T2 + T3, T4 FRV-B | — | RS-02 | 7 | NOT VERIFIED |
| `VC17-146` | `13-§8-7` | OBL | WS17-D | T2 + T3, T4 FRV-B | — | RS-02 | 7 | NOT VERIFIED |
| `VC17-147` | `13-§8-8` | RULE | WS17-D | EXP, T4 FRV-B | — | RS-02, RS-03 | 7 | NOT VERIFIED |
| `VC17-148` | `13-§8-9` | EXP | WS17-D | EXP, T4 FRV-B | — | RS-02, RS-03 | 5 | NOT VERIFIED |
| `VC17-149` | `13-§8-10` | NEG | WS17-D | T2-NEG, T4 FRV-B | NP-30, NP-37 | RS-02 | 6 | NOT VERIFIED |
| `VC17-150` | `13-§9-1` | PRIN | WS17-D | EXP | — | RS-03 | 4 | NOT VERIFIED |
| `VC17-151` | `13-§9-2` | SCN | WS17-D | T2 + T3 | — | RS-03 | 8 | NOT VERIFIED |
| `VC17-152` | `13-§9-3` | SCN | WS17-D | T2 + T3 | — | RS-03 | 8 | NOT VERIFIED |
| `VC17-153` | `13-§9-4` | SCN | WS17-D | T2 + T3 | — | RS-03 | 8 | NOT VERIFIED |
| `VC17-154` | `13-§9-5` | SCN | WS17-D | T2 + T3 | — | RS-03 | 8 | NOT VERIFIED |
| `VC17-155` | `13-§9-6` | SCN | WS17-D | T2 + T3 | — | RS-03 | 8 | NOT VERIFIED |
| `VC17-156` | `13-§9-7` | OBL | WS17-D | T2 + T3, T2-NEG | NP-37 | — | 8 | NOT VERIFIED |
| `VC17-157` | `13-§10-1` | OBL | WS17-D | T2 + T3 | — | — | 11 | NOT VERIFIED |
| `VC17-158` | `13-§10-2` | OBL | WS17-D | T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-159` | `13-§10-3` | OBL | WS17-D | T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-160` | `13-§10-4` | OBL | WS17-D | T2 + T3 | NP-22 | — | 11 | NOT VERIFIED |
| `VC17-161` | `13-§10-5` | OBL | WS17-D | T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-162` | `13-§10-6` | OBL | WS17-D | T2 + T3 | NP-01, NP-02, NP-29 | — | 9 | NOT VERIFIED |
| `VC17-163` | `13-§10-7` | OBL | WS17-D | T2 + T3 | NP-29 | — | 10 | NOT VERIFIED |
| `VC17-164` | `13-§10-8` | NEG | WS17-D | T2-NEG, EXP | NP-28, NP-29, NP-37 | RS-09 | 9 | NOT VERIFIED |
| `VC17-165` | `13-§11-1` | CONS | WS17-D | T2 + T3 | NP-11 | — | 8 | NOT VERIFIED |
| `VC17-166` | `13-§11-2` | SCN | WS17-D | T2 + T3 | NP-11 | RS-09 | 9 | NOT VERIFIED |
| `VC17-167` | `13-§11-3` | SCN | WS17-D | T2 + T3 | NP-11 | RS-09 | 9 | NOT VERIFIED |
| `VC17-168` | `13-§11-4` | SCN | WS17-D | T2 + T3 | NP-11 | RS-03, RS-09 | 10 | NOT VERIFIED |
| `VC17-169` | `13-§11-5` | SCN | WS17-D | T2 + T3 | NP-11 | RS-09 | 9 | NOT VERIFIED |
| `VC17-170` | `13-§11-6` | SCN | WS17-D | T2 + T3 | NP-11 | RS-09 | 9 | NOT VERIFIED |
| `VC17-171` | `13-§11-7` | NEG | WS17-D | T2-NEG | NP-11, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-172` | `13-§12-1` | CONS | WS17-E | T2 + T3 | NP-01, NP-14 | — | 8 | NOT VERIFIED |
| `VC17-173` | `13-§12-2` | SCN | WS17-E | T2 + T3 | NP-01, NP-14 | RS-13 | 9 | NOT VERIFIED |
| `VC17-174` | `13-§12-3` | SCN | WS17-E | T2 + T3 | NP-01, NP-14 | RS-13 | 9 | NOT VERIFIED |
| `VC17-175` | `13-§12-4` | SCN | WS17-E | T2 + T3 | NP-01, NP-14 | RS-13 | 9 | NOT VERIFIED |
| `VC17-176` | `13-§12-5` | NEG | WS17-E | T2-NEG | NP-01, NP-06, NP-14, NP-32, NP-37 | — | 10 | NOT VERIFIED |
| `VC17-177` | `13-§13-1` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-02, NP-14 | — | 7 | NOT VERIFIED |
| `VC17-178` | `13-§13-2` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-02, NP-14 | — | 8 | NOT VERIFIED |
| `VC17-179` | `13-§13-3` | OBL | WS17-E | T2-NEG | NP-01, NP-03, NP-11, NP-14, NP-31 | — | 9 | NOT VERIFIED |
| `VC17-180` | `13-§13-4` | NEG | WS17-E | T2-NEG | NP-01, NP-12, NP-14, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-181` | `13-§14-1a` | OBL | WS17-E | T2 + T3 | NP-01, NP-06, NP-14 | — | 9 | NOT VERIFIED |
| `VC17-182` | `13-§14-2` | RULE | WS17-E | DR, T2-NEG | NP-01, NP-14 | — | 7 | NOT VERIFIED |
| `VC17-183` | `13-§15-1` | NEG | WS17-D | T2-NEG | NP-30, NP-37 | — | 5 | NOT VERIFIED |
| `VC17-184` | `13-§15-2` | NEG | WS17-D | T2-NEG | NP-30, NP-37 | — | 5 | NOT VERIFIED |
| `VC17-185` | `13-§15-3` | NEG | WS17-D | T2-NEG | NP-30, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-186` | `13-§15-4` | NEG | WS17-D | T2-NEG | NP-30, NP-37 | — | 5 | NOT VERIFIED |
| `VC17-187` | `13-§15-5` | NEG | WS17-D | T2-NEG | NP-30, NP-37 | — | 5 | NOT VERIFIED |
| `VC17-188` | `13-§15-6` | NEG | WS17-D | T2-NEG | NP-30, NP-37 | — | 5 | NOT VERIFIED |
| `VC17-189` | `13-§15-7` | NEG | WS17-D | T2-NEG | NP-30, NP-37 | — | 5 | NOT VERIFIED |
| `VC17-190` | `13-§15-8` | RULE | WS17-D | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-191` | `13-§16-1` | OBL | WS17-F | T2 + T3, T2-NEG | NP-37 | — | 8 | NOT VERIFIED |
| `VC17-192` | `13-§16-2` | OBL | WS17-F | T2-IDEM | — | — | 8 | NOT VERIFIED |
| `VC17-193` | `13-§16-3` | OBL | WS17-F | T2 + T3, T2-NEG | NP-19 | — | 9 | NOT VERIFIED |
| `VC17-194` | `13-§16-4` | OBL | WS17-F | T2 + T3, T2-NEG | NP-19 | — | 9 | NOT VERIFIED |
| `VC17-195` | `13-§16-5` | OBL | WS17-F | T2-IDEM | — | — | 8 | NOT VERIFIED |
| `VC17-196` | `13-§16-6` | OBL | WS17-F | T2 + T3, T2-NEG | NP-24 | — | 9 | NOT VERIFIED |
| `VC17-197` | `13-§16-7` | OBL | WS17-F | T2 + T3, T2-NEG | NP-28 | — | 10 | NOT VERIFIED |
| `VC17-198` | `13-§16-8` | OBL | WS17-F | T2 + T3, T2-NEG | NP-17, NP-18 | — | 11 | NOT VERIFIED |
| `VC17-199` | `13-§16-9` | OBL | WS17-F | T2 + T3, T2-NEG | NP-28 | — | 7 | NOT VERIFIED |
| `VC17-200` | `13-§16-10` | OBL | WS17-F | T2 + T3, T2-NEG | NP-28 | — | 7 | NOT VERIFIED |
| `VC17-201` | `13-§16-11` | OBL | WS17-F | T2 + T3, T2-NEG | NP-25 | — | 8 | NOT VERIFIED |
| `VC17-202` | `13-§16-12` | RULE | WS17-F | T2 + T3, T2-NEG | NP-37 | — | 7 | NOT VERIFIED |
| `VC17-203` | `13-§17-1` | OBL | WS17-F | DR, T2 + T3 | NP-17, NP-18 | — | 9 | NOT VERIFIED |
| `VC17-204` | `13-§17-2` | OBL | WS17-F | DR, T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-205` | `13-§17-3` | OBL | WS17-F | DR, T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-206` | `13-§17-4` | OBL | WS17-F | DR, T2 + T3 | — | — | 10 | NOT VERIFIED |
| `VC17-207` | `13-§17-5` | OBL | WS17-F | DR, T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-208` | `13-§17-6` | OBL | WS17-F | T2-IDEM | NP-13 | — | 10 | NOT VERIFIED |
| `VC17-209` | `13-§17-7` | OBL | WS17-F | DR, T2 + T3 | NP-21 | — | 9 | NOT VERIFIED |
| `VC17-210` | `13-§17-8` | OBL | WS17-F | DR, T2 + T3 | NP-03, NP-31 | — | 10 | NOT VERIFIED |
| `VC17-211` | `13-§17-9` | OBL | WS17-F | DR, T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-212` | `13-§17-10` | OBL | WS17-F | DR, T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-213` | `13-§17-11` | OBL | WS17-F | DR, T2 + T3 | — | — | 8 | NOT VERIFIED |
| `VC17-214` | `13-§17-12` | OBL | WS17-F | DR, T2 + T3 | — | — | 9 | NOT VERIFIED |
| `VC17-215` | `13-§18-1` | NEG | WS17-D | T2-NEG, EXP | NP-30, NP-37 | RS-03 | 7 | NOT VERIFIED |
| `VC17-216` | `13-§18-2` | NEG | WS17-D | T2-NEG, EXP | NP-30, NP-31, NP-37 | RS-03 | 8 | NOT VERIFIED |
| `VC17-217` | `13-§18-3` | NEG | WS17-D | T2-NEG, EXP | NP-03, NP-31, NP-37 | RS-03 | 11 | NOT VERIFIED |
| `VC17-218` | `13-§18-4` | NEG | WS17-D | T2-NEG, EXP | NP-02, NP-10, NP-33, NP-37 | RS-03 | 9 | NOT VERIFIED |
| `VC17-219` | `13-§18-5` | PRIN | WS17-D | T2-NEG, EXP | NP-30 | RS-03 | 6 | NOT VERIFIED |
| `VC17-220` | `13-§19-1` | RULE | WS17-F | DR | — | — | 5 | NOT VERIFIED |
| `VC17-221` | `13-§19-2` | RULE | WS17-F | DR | — | — | 6 | NOT VERIFIED |
| `VC17-222` | `13-§19-3` | RULE | WS17-F | DR | — | — | 6 | NOT VERIFIED |
| `VC17-223` | `13-§19-4` | RULE | WS17-F | DR | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-224` | `13-§19-5` | RULE | WS17-F | DR | NP-14 | — | 6 | NOT VERIFIED |
| `VC17-225` | `13-§19-6` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-226` | `13-§19-7` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-227` | `13-§19-8` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-228` | `13-§19-9` | RULE | WS17-F | DR | NP-18 | — | 7 | NOT VERIFIED |
| `VC17-229` | `13-§19-10` | RULE | WS17-F | DR | — | — | 8 | NOT VERIFIED |
| `VC17-230` | `13-§20-1` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-231` | `13-§20-2` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-232` | `13-§20-3` | NEG | WS17-F | T2-NEG | NP-30, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-233` | `13-§20-4` | NEG | WS17-F | T2-NEG | NP-30, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-234` | `13-§20-5` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-235` | `13-§20-6` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-236` | `13-§20-7` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-237` | `13-§21-1` | SCN | WS17-G | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-238` | `13-§21-2` | SCN | WS17-G | T2-IDEM | NP-22 | — | 9 | NOT VERIFIED |
| `VC17-239` | `13-§21-3` | SCN | WS17-G | T2 + T3 | NP-22 | RS-15 | 9 | NOT VERIFIED |
| `VC17-240` | `13-§21-4` | SCN | WS17-G | T2 + T3, T2-NEG | NP-19, NP-22, NP-23 | RS-15 | 10 | NOT VERIFIED |
| `VC17-241` | `13-§21-5` | SCN | WS17-G | T2 + T3, T4 FRV-B | — | RS-02, RS-03 | 8 | NOT VERIFIED |
| `VC17-242` | `13-§21-6` | SCN | WS17-G | T2 + T3 | — | RS-03 | 6 | NOT VERIFIED |
| `VC17-243` | `13-§21-7` | SCN | WS17-G | T2 + T3 | — | RS-09 | 9 | NOT VERIFIED |
| `VC17-244` | `13-§21-8` | SCN | WS17-G | T2-NEG | NP-32 | RS-13 | 7 | NOT VERIFIED |
| `VC17-245` | `13-§21-9` | SCN | WS17-G | T2-NEG | NP-11 | — | 5 | NOT VERIFIED |
| `VC17-246` | `13-§21-10` | SCN | WS17-G | T2 + T3 | — | RS-04 | 6 | NOT VERIFIED |
| `VC17-247` | `13-§21-11` | SCN | WS17-G | DR | — | RS-04 | 6 | NOT VERIFIED |
| `VC17-248` | `13-§22-1` | NEG | WS17-F | T2-NEG | NP-30, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-249` | `13-§22-2` | NEG | WS17-F | T2-NEG | NP-30, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-250` | `13-§22-3` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-251` | `13-§22-4` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-252` | `13-§22-5` | NEG | WS17-F | T2-NEG | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-253` | `13-§24-1` | GATE | WS17-G | GATE | — | — | 9 | NOT VERIFIED |
| `VC17-254` | `17-§1-1` | EXP | WS17-E | EXP | NP-01 | RS-10 | 5 | NOT VERIFIED |
| `VC17-255` | `17-§1-2` | RULE | WS17-E | DR | NP-01 | — | 5 | NOT VERIFIED |
| `VC17-256` | `17-§2-9` | PRIN | WS17-E | EXP | NP-01 | RS-10 | 5 | NOT VERIFIED |
| `VC17-257` | `17-§3-1` | PRIN | WS17-E | EXP, DR | NP-01 | RS-10 | 6 | NOT VERIFIED |
| `VC17-258` | `17-§3-2` | PRIN | WS17-E | EXP, DR | NP-01 | RS-10 | 7 | NOT VERIFIED |
| `VC17-259` | `17-§3-3` | PRIN | WS17-E | EXP, DR | NP-01, NP-11 | RS-10 | 7 | NOT VERIFIED |
| `VC17-260` | `17-§3-4` | PRIN | WS17-E | EXP, DR | NP-01, NP-11 | RS-10 | 8 | NOT VERIFIED |
| `VC17-261` | `17-§3-5` | PRIN | WS17-E | EXP, DR | NP-01 | RS-10 | 8 | NOT VERIFIED |
| `VC17-262` | `17-§3-6` | PRIN | WS17-E | EXP, DR | NP-01 | RS-10 | 7 | NOT VERIFIED |
| `VC17-263` | `17-§3-7` | PRIN | WS17-E | EXP, DR | NP-01 | RS-10 | 6 | NOT VERIFIED |
| `VC17-264` | `17-§4-1` | OBL | WS17-E | T2 + T3 | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-265` | `17-§4-2` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-266` | `17-§4-3` | CONS | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-267` | `17-§4-4` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-268` | `17-§4-5` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-269` | `17-§4-6` | OBL | WS17-E | T2 + T3 | NP-01 | — | 10 | NOT VERIFIED |
| `VC17-270` | `17-§4-7` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-271` | `17-§4-8` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-272` | `17-§4-9` | OBL | WS17-E | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-273` | `17-§4-10` | OBL | WS17-E | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-274` | `17-§4-11` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-275` | `17-§4-12` | OBL | WS17-E | T2 + T3 | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-276` | `17-§4-13` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-277` | `17-§4-14` | OBL | WS17-E | T2 + T3 | NP-01, NP-06, NP-07, NP-08 | — | 8 | NOT VERIFIED |
| `VC17-278` | `17-§4-16` | RULE | WS17-E | DR | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-279` | `17-§6-1` | OBL | WS17-E | T2 + T3 | NP-01, NP-06, NP-07, NP-08 | — | 9 | NOT VERIFIED |
| `VC17-280` | `17-§6-2` | OBL | WS17-E | T2 + T3 | NP-01, NP-06, NP-07, NP-08 | — | 9 | NOT VERIFIED |
| `VC17-281` | `17-§6-3` | CONS | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-282` | `17-§6-4` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-283` | `17-§6-5` | CONS | WS17-E | T2 + T3 | NP-01 | — | 10 | NOT VERIFIED |
| `VC17-284` | `17-§6-6` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-285` | `17-§6-7` | RULE | WS17-E | DR, T2-NEG | NP-01, NP-36 | — | 10 | NOT VERIFIED |
| `VC17-286` | `17-§6-8` | NEG | WS17-E | T2-NEG | NP-01, NP-36, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-287` | `17-§7-1` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-288` | `17-§7-2` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-289` | `17-§7-3` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-290` | `17-§7-4` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-291` | `17-§7-5` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-292` | `17-§7-6` | OBL | WS17-E | T2 + T3, T4 FRV-A | NP-01 | RS-01 | 9 | NOT VERIFIED |
| `VC17-293` | `17-§7-7` | OBL | WS17-E | T2 + T3 | NP-01 | — | 10 | NOT VERIFIED |
| `VC17-294` | `17-§7-8` | NEG | WS17-E | T2-NEG, DR | NP-01, NP-36, NP-37 | — | 10 | NOT VERIFIED |
| `VC17-295` | `17-§8-1` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-296` | `17-§8-2` | OBL | WS17-E | T2 + T3 | NP-01 | — | 8 | NOT VERIFIED |
| `VC17-297` | `17-§8-3` | OBL | WS17-E | T2 + T3, T4 FRV-B | NP-01 | RS-02 | 10 | NOT VERIFIED |
| `VC17-298` | `17-§8-4` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-299` | `17-§8-5` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-300` | `17-§8-6` | NEG | WS17-E | T2-NEG, EXP, T4 FRV-B | NP-01, NP-30, NP-36, NP-37 | RS-02, RS-03, RS-10 | 12 | NOT VERIFIED |
| `VC17-301` | `17-§15-1` | RULE | WS17-E | EXP | NP-01 | RS-10 | 6 | NOT VERIFIED |
| `VC17-302` | `17-§15-2` | OBL | WS17-E | T2 + T3 | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-303` | `17-§15-3` | OBL | WS17-E | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-304` | `17-§15-4` | OBL | WS17-E | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-305` | `17-§15-5` | OBL | WS17-E | T2 + T3 | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-306` | `17-§15-6` | OBL | WS17-E | T2 + T3 | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-307` | `17-§15-7` | OBL | WS17-E | EXP | NP-01 | RS-10 | 7 | NOT VERIFIED |
| `VC17-308` | `17-§15-8` | NEG | WS17-E | T2-NEG, EXP | NP-01, NP-36, NP-37 | RS-10 | 7 | NOT VERIFIED |
| `VC17-309` | `17-§16-2` | RULE | WS17-E | DR | NP-01 | — | 5 | NOT VERIFIED |
| `VC17-310` | `17-§16-3` | RULE | WS17-E | DR | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-311` | `17-§17-1` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-36 | — | 7 | NOT VERIFIED |
| `VC17-312` | `17-§17-2` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-36 | — | 7 | NOT VERIFIED |
| `VC17-313` | `17-§17-3` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-13, NP-36 | — | 9 | NOT VERIFIED |
| `VC17-314` | `17-§17-4` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-36 | — | 7 | NOT VERIFIED |
| `VC17-315` | `17-§17-5` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-36 | — | 9 | NOT VERIFIED |
| `VC17-316` | `17-§17-6` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-36 | — | 8 | NOT VERIFIED |
| `VC17-317` | `17-§17-7` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-25, NP-36 | — | 11 | NOT VERIFIED |
| `VC17-318` | `17-§17-8` | OBL | WS17-E | T2 + T3, T2-NEG | NP-01, NP-36 | — | 7 | NOT VERIFIED |
| `VC17-319` | `17-§17-9` | RULE | WS17-E | T2 + T3, T2-NEG | NP-01, NP-36 | — | 8 | NOT VERIFIED |
| `VC17-320` | `17-§18-3` | NEG | WS17-E | T2-NEG | NP-01, NP-12, NP-36, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-321` | `17-§18-5` | NEG | WS17-E | T2-NEG, EXP | NP-01, NP-03, NP-31, NP-36, NP-37 | RS-10 | 10 | NOT VERIFIED |
| `VC17-322` | `17-§19-1` | OBL | WS17-E | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-323` | `17-§19-2` | NEG | WS17-E | T2-NEG | NP-01, NP-02, NP-10, NP-33, NP-36, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-324` | `17-§20-1` | RULE | WS17-F | DR | — | — | 5 | NOT VERIFIED |
| `VC17-325` | `17-§20-2` | RULE | WS17-F | DR | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-326` | `17-§20-3` | RULE | WS17-F | DR | NP-14 | — | 6 | NOT VERIFIED |
| `VC17-327` | `17-§20-4` | RULE | WS17-F | DR | NP-14 | — | 6 | NOT VERIFIED |
| `VC17-328` | `17-§20-5` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-329` | `17-§20-6` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-330` | `17-§20-7` | RULE | WS17-F | DR | — | — | 6 | NOT VERIFIED |
| `VC17-331` | `17-§20-8` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-332` | `17-§20-9` | RULE | WS17-F | DR | — | — | 7 | NOT VERIFIED |
| `VC17-333` | `17-§20-10` | RULE | WS17-F | DR | — | — | 6 | NOT VERIFIED |
| `VC17-334` | `17-§20-11` | RULE | WS17-F | DR | NP-02, NP-10 | — | 7 | NOT VERIFIED |
| `VC17-335` | `17-§20-12` | RULE | WS17-F | DR | — | — | 8 | NOT VERIFIED |
| `VC17-336` | `17-§21-1` | NEG | WS17-E | DR | NP-01, NP-36, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-337` | `17-§21-2` | NEG | WS17-E | EXP | NP-01, NP-36, NP-37 | RS-10 | 7 | NOT VERIFIED |
| `VC17-338` | `17-§21-3` | NEG | WS17-E | DR, T2-NEG | NP-01, NP-36, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-339` | `17-§21-5` | NEG | WS17-E | DR | NP-01, NP-36, NP-37 | — | 8 | NOT VERIFIED |
| `VC17-340` | `17-§22-1` | SCN | WS17-G | T2 + T3 | — | RS-10 | 6 | NOT VERIFIED |
| `VC17-341` | `17-§22-5` | SCN | WS17-G | DR, T2 + T3 | — | RS-10 | 10 | NOT VERIFIED |
| `VC17-342` | `17-§22-6` | SCN | WS17-G | T2 + T3 | — | RS-10 | 7 | NOT VERIFIED |
| `VC17-343` | `17-§22-10b` | SCN | WS17-G | DR, T2 + T3 | — | — | 5 | NOT VERIFIED |
| `VC17-344` | `17-§23-2` | NEG | WS17-E | DR | NP-01, NP-36, NP-37 | — | 6 | NOT VERIFIED |
| `VC17-345` | `17-§23-3` | NEG | WS17-E | T2-NEG | NP-01, NP-33, NP-36, NP-37 | — | 9 | NOT VERIFIED |
| `VC17-346` | `17-§23-4` | NEG | WS17-E | DR | NP-01, NP-36, NP-37 | — | 8 | NOT VERIFIED |
| `VC17-347` | `17-§25-1` | GATE | WS17-G | GATE | — | — | 9 | NOT VERIFIED |
| `VC17-348` | `3-§9-3` | OBL | WS17-A | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-349` | `3-§11-6` | OBL | WS17-A | T2-NEG | NP-01, NP-09 | — | 7 | NOT VERIFIED |
| `VC17-350` | `3-§15-7` | RULE | WS17-A | DR | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-351` | `3-§15-10` | RULE | WS17-A | DR, T2-IDEM | NP-22 | — | 9 | NOT VERIFIED |
| `VC17-352` | `3-§15-11` | RULE | WS17-C | DR, T2-IDEM | NP-22 | — | 12 | NOT VERIFIED |
| `VC17-353` | `5-§4-10` | OBL | WS17-F | T2 + T3 | — | — | 5 | NOT VERIFIED |
| `VC17-354` | `9-§12-8` | OBL | WS17-E | T2 + T3 | NP-01, NP-06, NP-14 | — | 8 | NOT VERIFIED |
| `VC17-355` | `10-§13-6` | OBL | WS17-B | T2 + T3, T4 FRV-A | NP-01, NP-05, NP-14 | RS-01 | 8 | NOT VERIFIED |
| `VC17-356` | `12-§4-4` | OBL | WS17-E | T2 + T3 | NP-01, NP-14 | — | 7 | NOT VERIFIED |
| `VC17-357` | `12-§7-7` | OBL | WS17-B | T2 + T3 | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-358` | `22-§17-2` | RULE | WS17-C | DR | NP-17, NP-18 | — | 8 | NOT VERIFIED |
| `VC17-359` | `24-§18-3` | SCN | WS17-B | T2 + T3, T4 FRV-A | NP-01 | RS-01, RS-05, RS-09 | 13 | NOT VERIFIED |
| `VC17-360` | `24-§21-3` | OBL | WS17-B | T2 + T3, T2-NEG | NP-01, NP-05, NP-14 | — | 8 | NOT VERIFIED |
| `VC17-361` | `BP-§3-1` | PRIN | WS17-D | EXP | — | RS-03 | 4 | NOT VERIFIED |
| `VC17-362` | `BP-§5.3-1` | RULE | WS17-F | DR | — | — | 8 | NOT VERIFIED |
| `VC17-363` | `BP-§5.4-1` | RULE | WS17-C | DR | NP-17, NP-18 | — | 9 | NOT VERIFIED |
| `VC17-364` | `BP-§6.1-1` | NEG | WS17-E | T2-NEG | NP-01, NP-14, NP-18, NP-37 | — | 7 | NOT VERIFIED |
| `VC17-365` | `BP-§6.2-1` | RULE | WS17-F | DR, T2 + T3 | NP-22, NP-33 | — | 11 | NOT VERIFIED |
| `VC17-366` | `BP-§6.3-1` | RULE | WS17-F | DR | NP-18, NP-33 | — | 8 | NOT VERIFIED |
| `VC17-367` | `BP-§6.5-1` | RULE | WS17-B | DR | NP-01 | — | 9 | NOT VERIFIED |
| `VC17-368` | `BP-§6.6-1` | RULE | WS17-C | DR | — | — | 6 | NOT VERIFIED |
| `VC17-369` | `BP-§8-1` | RULE | WS17-E | T2 + T3 | NP-01, NP-14 | — | 6 | NOT VERIFIED |
| `VC17-370` | `BP-§9-6` | RULE | WS17-F | DR | — | — | 4 | NOT VERIFIED |
| `VC17-371` | `BP-§9-AL` | RULE | WS17-F | DR | — | — | 4 | NOT VERIFIED |
| `VC17-372` | `BP-§10.3-S2` | OBL | WS17-A | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-373` | `BP-§10.6-O` | EXP | WS17-E | EXP | NP-01 | RS-10 | 5 | NOT VERIFIED |
| `VC17-374` | `BP-§10.6-W1` | WORK | WS17-A | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-375` | `BP-§10.6-W2` | WORK | WS17-A | T2 + T3 | NP-16 | — | 5 | NOT VERIFIED |
| `VC17-376` | `BP-§10.6-W3` | WORK | WS17-A | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-377` | `BP-§10.6-W4` | WORK | WS17-B | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-378` | `BP-§10.6-W5` | WORK | WS17-B | T2 + T3 | NP-01, NP-05, NP-14 | — | 7 | NOT VERIFIED |
| `VC17-379` | `BP-§10.6-W6` | WORK | WS17-B | T2 + T3 | NP-01, NP-02, NP-04, NP-15 | — | 11 | NOT VERIFIED |
| `VC17-380` | `BP-§10.6-W7` | WORK | WS17-C | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-381` | `BP-§10.6-W8` | WORK | WS17-D | T2 + T3 | — | — | 7 | NOT VERIFIED |
| `VC17-382` | `BP-§10.6-W9` | WORK | WS17-D | T2 + T3 | — | — | 5 | NOT VERIFIED |
| `VC17-383` | `BP-§10.6-W10` | WORK | WS17-A | T2 + T3 | NP-01 | — | 6 | NOT VERIFIED |
| `VC17-384` | `BP-§10.6-W11` | WORK | WS17-A | T2 + T3 | — | — | 6 | NOT VERIFIED |
| `VC17-385` | `BP-§10.6-W12` | WORK | WS17-A | T2 + T3 | NP-01 | — | 7 | NOT VERIFIED |
| `VC17-386` | `BP-§10.6-E1` | EXP | WS17-C | EXP, T4 FRV-B | — | RS-02, RS-04 | 7 | NOT VERIFIED |
| `VC17-387` | `BP-§10.6-E2` | EXP | WS17-D | EXP, T4 FRV-B | — | RS-02, RS-03 | 7 | NOT VERIFIED |
| `VC17-388` | `BP-§10.6-E3` | EXP | WS17-A | EXP | — | RS-11 | 6 | NOT VERIFIED |
| `VC17-389` | `BP-§10.6-A1` | FRV | WS17-G | T4 FRV-A | NP-16 | RS-01, RS-07 | 5 | NOT VERIFIED |
| `VC17-390` | `BP-§10.6-A2` | FRV | WS17-G | T4 FRV-A | — | RS-01, RS-05 | 6 | NOT VERIFIED |
| `VC17-391` | `BP-§10.6-A3` | FRV | WS17-G | T4 FRV-A | NP-05, NP-14 | RS-01, RS-05 | 6 | NOT VERIFIED |
| `VC17-392` | `BP-§10.6-A4` | FRV | WS17-G | T4 FRV-A | — | RS-01, RS-06, RS-11 | 5 | NOT VERIFIED |
| `VC17-393` | `BP-§10.6-B1` | FRV | WS17-G | T4 FRV-B | — | RS-02 | 7 | NOT VERIFIED |
| `VC17-394` | `BP-§10.6-B2` | FRV | WS17-G | T4 FRV-B | — | RS-02, RS-03 | 6 | NOT VERIFIED |
| `VC17-395` | `BP-§10.6-X` | EXP | WS17-E | EXP | NP-01 | RS-10 | 5 | NOT VERIFIED |
| `VC17-396` | `BP-§11-6` | RULE | WS17-B | DR | NP-01 | — | 5 | NOT VERIFIED |
| `VC17-397` | `BP-§11-7` | RULE | WS17-A | DR | — | — | 5 | NOT VERIFIED |
| `VC17-398` | `BP-§13-1` | RULE | WS17-F | GATE | — | — | 3 | NOT VERIFIED |
| `VC17-399` | `BP-§13-9` | RULE | WS17-F | GATE | — | — | 3 | NOT VERIFIED |
| `VC17-400` | `BP-§14-1` | RULE | WS17-F | DR | — | — | 4 | NOT VERIFIED |
| `VC17-401` | `GPCV-§11-2` | NEG | WS17-F | DR | NP-37 | — | 6 | NOT VERIFIED |
| `VC17-402` | `GPCV-R7` | RULE | WS17-A | GATE | — | — | 6 | NOT VERIFIED |
| `VC17-403` | `GPCV-R13` | RULE | WS17-C | GATE | — | — | 5 | NOT VERIFIED |
| `VC17-404` | `GPCV-R17` | RULE | WS17-E | GATE | NP-01 | — | 6 | NOT VERIFIED |

## 9. Stage 12 Completeness Gate (mechanical comparison)

| Row set compared with the 404 `IN SCOPE` FCTM rows | Covered | Missing | Duplicate | Extra |
|---|---:|---:|---:|---:|
| Engineering Contract obligations (union of inherited rows) | 404 | 0 | 0 | 0 |
| Verification Checklist row items | 404 | 0 | 0 | 0 |
| Build Prompt workstream rows | 404 | 0 | 0 | 0 |

| Check | Result |
|---|---|
| Every `IN SCOPE` row maps to an Engineering Contract obligation | 404 / 404 |
| Every `IN SCOPE` row maps to a Verification Checklist item | 404 / 404 |
| Every workstream names its exact rows; rows partition across workstreams | 404 rows, 0 duplicates, 7 workstreams |
| Orphan obligations / negative checks / runtime scenarios | 0 / 0 / 0 |
| Must-not and NEG-seeded rows with a named negative check | 115 / 115 |
| Experience rows with a named human-runtime scenario | 44 / 44 |
| FRV-A / FRV-B rows mapped to RS-01 / RS-02 | 18 / 17 |
| `ALREADY DEMONSTRATED` rows | 0 (none marked PASS) |
| Product behaviour or permissions added beyond the locked EIS | None: obligations realize EIS requirements one-to-one; negative checks and scenarios restate EIS requirements |
| Holds silently closed | None |
| Dependency and authorization boundaries consistent across the three documents | Same locked references, hold list, status block and NOT AUTHORIZED flags in all three |

## 10. Verification-Stage Ownership

Builder evidence never proves acceptance. Independent post-build verification (Source 18 §4.9) and the Founder for RS-01 and RS-02 own the later verdicts; Mission Control owns acceptance.

## 11. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. Every item NOT VERIFIED. **Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
