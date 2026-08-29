# SMART BUSINESS — B1 ACCEPTANCE-CONTRACT CORRECTION ADDENDUM

## SB-P-1.11-GC-9 — Final Infrastructure B1 Acceptance-Contract Correction

**Report ID:** report1.114
**Mission:** SB-P-1.11-GC-9 — B1 Acceptance-Contract Correction
**Authorized By:** `communication/live/instruction1.105.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Production Migration Authority:** NONE
**Deployment Authority:** NONE

---

## 1. Mission and Authority

This report is a self-contained **B1 Acceptance-Contract Correction Addendum**. It corrects exactly one remaining item — the `INFRA-EIS-B1` later-build fixture acceptance-contract contradiction identified in `communication/live/report1.113.md` (Infrastructure Operations short confirmation review, `LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — CHANGES REQUIRED`) — inside the previously merged correction addendum `communication/live/report1.112.md`.

It does not overwrite, rewrite, or reopen `communication/live/report1.108.md`, `communication/live/report1.109.md`, `communication/live/report1.112.md`, or `communication/live/report1.113.md`, all of which remain unmodified, immutable evidence. This addendum becomes binding **together with** `report1.108.md` and `report1.112.md` if later confirmed by Infrastructure Operations and accepted by Mission Control. Every part of `report1.112.md` not named in §3–§4 below remains exactly as merged, including the entire `INFRA-EIS-B2` and `INFRA-EIS-N1` corrections, which this addendum does not touch.

This correction does not reopen the accepted parser architecture, the Founder Workflow baseline, Product Truth, permissions, the Catalog command surface, the AWS provider selection, Supabase architecture, or any frozen decision listed in §6.

---

## 2. Reviewed `main` SHA

Latest merged GitHub `main` at mission start:

`41f45c8ea39e1e94b6822062ec83f79b3cb8cb16`

Confirmed via `git rev-parse HEAD` immediately after fast-forward synchronization, matching Mission Control's cited authoritative HEAD exactly.

Files read in full for this correction: `communication/live/instruction1.105.md`, `communication/live/instruction1.104.md`, `communication/live/report1.113.md`, `communication/live/instruction1.103.md`, `communication/live/report1.112.md`, `communication/live/report1.109.md`, `communication/live/report1.108.md`. No new AWS provider research was required for this correction — `report1.113.md` §4.1–§4.5 already re-verified the exact 4,194,304-byte ceiling, its position below the 6,291,456-byte uncapped-streaming window, the pre-stream enforcement point, and the 15-second/10-second timing budget as sound at specification level, and this addendum does not disturb any of that verified material.

---

## 3. Exact Remaining `INFRA-EIS-B1` Contradiction

From `report1.113.md` §4.6 (quoted exactly):

> `report1.112.md` §4.3 states that the **maximum legitimate allowlisted serialized response** can be approximately 42–50 MiB, materially above the hard 4 MiB ceiling. The same report then states in §4.7 that the "largest legitimate CSV-shaped response" and "largest legitimate XLSX-shaped response" should "confirm successful completion." Those requirements cannot both be true for the same maximum legitimate shape.

This is accurate. `report1.112.md` §4.3 correctly establishes that a legitimate, non-adversarial, fully-populated maximum-shape file (2,000 rows, all ten recognized/reference-cost string slots filled to the locked 2,000-character-per-cell cap) serializes to roughly 44,000,000–52,000,000 bytes — far above the 4,194,304-byte ceiling `report1.112.md` §4.1 itself locks. `report1.112.md` §4.7 items 1–2 then required exactly that same maximum-legitimate-shape fixture to "confirm successful completion," which is impossible under the report's own fail-closed design in §4.6: a response measured above 4,194,304 bytes must, by that same section's own rule, be rejected with `RESPONSE_TOO_LARGE` before any success byte streams. The two requirements describe mutually exclusive outcomes for the same fixture. This addendum corrects only this fixture-expectation wording.

---

## 4. Corrected `INFRA-EIS-B1` Acceptance Matrix

This table replaces, for verification-contract purposes only, `report1.112.md` §4.7 items 1–4. It does not change the ceiling, the enforcement point, or the `RESPONSE_TOO_LARGE` mechanism established in `report1.112.md` §4.1–§4.6, all of which remain frozen exactly as merged.

| # | Fixture | Construction | Expected result | Must prove |
|---|---|---|---|---|
| 1 | **True maximum legitimate CSV-shaped output** | 2,000 rows, all recognized `fields` slots + `referenceCostRaw` populated to the locked 2,000-character-per-cell cap with realistic non-adversarial merchant text (the same construction `report1.112.md` §4.3 already estimates at ≈44,000,000–52,000,000 bytes serialized) | If the measured serialized size is **above 4,194,304 bytes** (the expected outcome under the existing §4.3 estimate): deterministic fail-closed `RESPONSE_TOO_LARGE`. This fixture is **not** required to prove successful streaming above the hard ceiling. | Rejection decided and returned before any success-response byte is streamed; zero success bytes emitted; zero import-support/Product Truth write; total invocation duration within the locked 15-second timeout; parser execution within the locked 10-second application budget; exact measured serialized byte count recorded. |
| 2 | **True maximum legitimate XLSX-shaped output** | Same construction via ExcelJS | Identical treatment to fixture 1 — if measured above 4,194,304 bytes, deterministic fail-closed `RESPONSE_TOO_LARGE`; not required to prove successful streaming above the hard ceiling. | Same proof set as fixture 1. |
| 3 | **Successful-streaming boundary fixture** | A response constructed to serialize to **exactly 4,194,304 bytes** where exact construction is practical, or the closest deterministic fixture immediately below it if exact construction is not practical | Successful response completion | Full success-response envelope streamed; total invocation duration within the locked 15-second timeout; parser execution within the locked 10-second application budget; exact measured serialized byte count recorded; both cold and warm execution evidence collected (§5). |
| 4 | **Below-ceiling representative fixture** | At least one additional, clearly below-ceiling, maximum-*shape* (2,000 rows, locked column/cell limits observed) but realistically-populated fixture, distinct from fixture 3 | Successful response completion | Same proof set as fixture 3, demonstrating success streaming is not dependent on a single edge-exact construction. |
| 5 | **Above-ceiling boundary fixture** | The smallest deterministic serialized size the fixture-construction method can practically achieve strictly greater than 4,194,304 bytes | Deterministic fail-closed `RESPONSE_TOO_LARGE` | Rejection occurs before success streaming begins; zero success bytes emitted; zero import-support/Product Truth write; exact measured serialized byte count recorded. |

Fixtures 1, 2, and 5 together establish the fail-closed side of the boundary; fixtures 3 and 4 together establish the success side. No fixture in this table requires pagination, chunking, queueing, an alternate transport, an asynchronous job, or any additional backend/storage architecture to be constructed or proven (`instruction1.105.md` §3 item 9) — every fixture is a single synchronous Lambda invocation returning either the existing streamed success envelope (`report1.108.md` §14) or the existing streamed `RESPONSE_TOO_LARGE` failure envelope (`report1.112.md` §4.6), both already-specified paths.

No fixture in this table requires truncating, silently dropping, mutating, or rewriting any merchant/product value to fit the response ceiling (`instruction1.105.md` §3 item 10) — fixtures 1 and 2 are expected to fail closed precisely *because* their legitimate content is not shortened to fit; the ceiling rejects the response, it never edits it.

---

## 5. Timing / Parser-Budget Evidence Contract

- **Accepted cases (fixtures 3 and 4):** must prove total Lambda invocation duration strictly within the locked 15,000 ms timeout, and application parser execution (decompression/structural verification + Papa Parse/ExcelJS + row/column/cell enforcement) strictly within the locked 10,000 ms budget, for both a cold-started and a warm execution environment (§4.6 of `instruction1.105.md`; `report1.112.md` §4.4's time-budget derivation already shows why this is expected to hold, but the measurement itself remains a later Build-Mode gate, not claimed here).
- **Rejected cases (fixtures 1, 2, and 5):** must prove deterministic rejection with `RESPONSE_TOO_LARGE` and zero emitted success bytes; they are **not** required to prove that the oversized payload could stream successfully, because under the frozen §4.1/§4.6 design it is never streamed at all. They must still record that the in-memory construction-and-measurement step (`report1.112.md` §4.5 items 1–2) — building the complete envelope, serializing it once, and measuring its exact UTF-8 byte length — itself completes well inside the 15-second timeout even at the ≈44–52 MiB legitimate-maximum size, since this is a bounded, fast operation (`report1.112.md` §4.4's 200 ms allotment) and is not the failure the ceiling exists to prevent.
- **Cold/warm execution (`instruction1.105.md` §3 item 6):** collected explicitly for the successful at/below-ceiling boundary cases (fixtures 3 and 4). Collecting cold/warm evidence for the above-ceiling fail-closed cases (fixtures 1, 2, 5) is not required by this correction, since their expected behavior does not depend on execution-environment warmth — a fail-closed decision made from a measured byte count is not a latency-sensitive code path in the way successful large-payload streaming is.
- **Evidence status (`instruction1.105.md` §3 item 7):** this mission defines the future verification contract only. No benchmark, timing, or byte-count measurement in this table is claimed as already collected. Every number in this section is a specification requirement for later Build Mode/acceptance evidence, exactly as `report1.112.md` §4.8 already stated for the rest of the B1 fixture contract.

---

## 6. Frozen Decisions Confirmed Unchanged

The following are preserved without modification by this addendum, exactly as `instruction1.105.md` §4 requires:

`INFRA-EIS-B2` — PASS; `INFRA-EIS-N1` — PASS; exact response ceiling **4,194,304 bytes**; pre-stream ceiling enforcement; `RESPONSE_TOO_LARGE` deterministic rejection; AWS Lambda as the narrow external parser runtime; standard Lambda default compute (no Managed Instances); `nodejs24.x`; `ap-south-1`; 2,048 MB starting memory; 15-second Lambda timeout; 10-second application parser budget; finite reserved concurrency as defense-in-depth only; transient private S3 parser-ingress; `ChecksumMode = ENABLED` `HeadObject` contract; AWS IAM Roles Anywhere; Parser Upload Lease; EC-2; EC-3; Papa Parse; ExcelJS; `node:zlib`; maximum compressed input 5,242,880 bytes; maximum actual-produced XLSX decompressed bytes 25 × 1024 × 1024; maximum 2,000 rows; maximum 40 columns; maximum 2,000 characters per cell; Owner-only Phase 1 import authority; Catalog / Inventory truth separation; D-047; D-068; BKR-1 through BKR-5; exactly nineteen public Catalog commands — no twentieth command.

Nothing in §3–§5 above changes any number, mechanism, or boundary in this list. The correction is confined entirely to which *fixtures* are expected to succeed versus fail closed in the later-build acceptance matrix — a verification-contract wording fix, not an architecture change.

---

## 7. `INFRA-EIS-B2` and `INFRA-EIS-N1` Not Reopened

`report1.113.md` §5 and §6 record both items as `PASS` with no remaining finding. This addendum does not review, restate, alter, or add any requirement to either:

- `INFRA-EIS-B2` (`ChecksumMode = ENABLED` `HeadObject` contract, the four fail-closed internal codes, cleanup behavior, and the associated later-build verification matrix) remains exactly as corrected in `report1.112.md` §5 and confirmed `PASS` in `report1.113.md` §5.
- `INFRA-EIS-N1` (package-size wording precision) remains exactly as corrected in `report1.112.md` §6 and confirmed `PASS` in `report1.113.md` §6.

Per `instruction1.105.md` §8, the next Infrastructure Operations confirmation, if authorized, is scoped to `INFRA-EIS-B1` only.

---

## 8. No-Implementation / No-Mutation Confirmation

During this mission:

- application or parser code implemented or modified: **NO**
- dependencies added or updated: **NO**
- AWS or S3 or IAM resources created or modified: **NO**
- AWS commands executed against project infrastructure: **NO**
- SQL or migrations created: **NO**
- Supabase mutated: **NO**
- RLS or grants changed: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- permissions changed: **NO**
- a twentieth Catalog command added: **NO**
- any parser/input/runtime limit weakened: **NO**
- the 4,194,304-byte response ceiling changed: **NO**
- Build Lock or Build Mode entered: **NO**
- deployment or publication performed: **NO**
- production touched: **NO**
- Stage B begun: **NO**
- `communication/live/report1.108.md` modified: **NO**
- `communication/live/report1.109.md` modified: **NO**
- `communication/live/report1.112.md` modified: **NO**
- `communication/live/report1.113.md` modified: **NO**

The only repository change under this mission is this report: `communication/live/report1.114.md`.

---

## 9. Final Disposition

`LAMBDA PARSER EIS B1 ACCEPTANCE-CONTRACT CORRECTION — READY FOR INFRASTRUCTURE CONFIRMATION`

The sole remaining `INFRA-EIS-B1` blocker identified in `report1.113.md` §4.6/§10 — the internally contradictory expectation that the true maximum legitimate CSV/XLSX-shaped response must both exceed the 4,194,304-byte ceiling (per `report1.112.md` §4.3) and prove successful completion (per `report1.112.md` §4.7) — is resolved in §4 above by making the maximum-legitimate fixtures expect deterministic `RESPONSE_TOO_LARGE` rejection when they measure above the ceiling, and by assigning the successful-streaming proof obligation to separate, explicitly at/below-ceiling fixtures. No frozen decision was reopened; no architecture was expanded; no merchant data semantics were changed.

This disposition is not an Infrastructure `PASS` — only Infrastructure Operations may issue that verdict, in the single narrow `INFRA-EIS-B1`-only confirmation review `instruction1.105.md` §8 authorizes next. This report grants no implementation, Build Lock, Build Mode, deployment, Stage B, or production authority.
