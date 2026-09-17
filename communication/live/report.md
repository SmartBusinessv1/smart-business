# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 3 Acceptance / Stage 4A Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Current stage:** `4 — Background automation / reconciliation implementation`

**Current sub-gate:** `4A — Bounded deterministic reconciliation wrapper`

**Current actor:** Claude Code — authorized Stage 4A builder

**Status:** `STAGE 3 ACCEPTED — STAGE 4A AUTHORIZED`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**Pull request:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Stage 3 completion

Stage 3A human review/promotion proof is accepted.

Four exact candidate revisions were materialized as separate promotion-review records using:

- `resulting_maturity: VALIDATED`;
- `promotion_scope: MISSION_SCOPED`;
- Mission Control approving authority;
- revision-bound candidate hashes;
- exact decision reference to Mission Control record 19.

No `INSTITUTIONALISED`, `ORGANIZATION_WIDE`, or Founder-approval claim was created.

Stage 3B deterministic mission-start context-pack proof is accepted.

The proof introduced the minimum repository-native context-pack helper/tests/output and demonstrated:

- deterministic reviewed-item filtering with no semantic ranking;
- candidate-only exclusion;
- stale revision rejection;
- mission/system/environment scope filtering;
- supersession handling;
- contradiction / `LIMITS` surfacing;
- Candidate 3's unresolved five-vs-four follow-up discrepancy preserved with `MEDIUM` confidence;
- bounded freshness/provenance presentation;
- byte-stable deterministic output;
- fail-closed screening;
- explicit `context, not authority` output.

The evidence-scope contract has no `mission_class` field; the proof surfaces that limitation rather than inventing a match field.

## Stage 3B CI defect and correction

The first Stage 3B push exposed a real test-suite assumption: the ambient GitHub Actions checkout is shallow and therefore cannot resolve the historical pinned Stage 2A commit used by the real promotion provenance.

The context-pack logic correctly failed closed. The defect was confined to tests that assumed deep history.

The correction changed those tests to use an isolated ephemeral Git repository containing the same evidence content and fresh commit/blob identities, preserving the exact provenance-resolution behavior without weakening validation or modifying workflow fetch depth.

Corrected technical checkpoint:

`f74d3ad4fc99bbf9115537e2e5d566b1931aa469`

Exact-head CI on that checkpoint:

- Team LIPS Application Build Assurance #180 — SUCCESS;
  - Lint — SUCCESS;
  - Typecheck — SUCCESS;
  - Build — SUCCESS;
  - Fast Tests — SUCCESS;
- Team LIPS Markdown Quality Gate #1784 — SUCCESS;
- Team LIPS Full Assurance #53 — SUCCESS.

A later documentation-only commit `555c04efd9368e64ff1e448264f1179b618ee425` records those results and does not modify Stage 3B implementation/tests. Its redundant Full Assurance rerun does not change the accepted technical checkpoint under the standing anti-recursion rule. The branch's applicable checks must still be green at any later merge gate.

Mission Control disposition:

`STAGE 3 — ACCEPTED`

Durable decision:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/21-stage3-acceptance-and-stage4a-bounded-reconciliation-authorization.md`

## Stage 4 governance reconciliation

The final reconciled build plan permits automation wrappers only after proof Phases A–E are accepted. It classifies automatic background closure detection/reconciliation, automated model extraction, and trusted publisher/PR creation as later capabilities, and requires separate authority for external AI integrations, credentials, or write-capable automation.

Stage 4 therefore does not create blanket automation authority.

## Stage 4A authorization

Mission Control authorizes only a bounded deterministic reconciliation wrapper.

Stage 4A may:

- enumerate explicit approved closure-envelope locations;
- validate structured closure envelopes;
- reconcile mission + closure revision against durable processing state/receipts;
- classify no-op, eligible-unprocessed, changed-revision, reopened/superseded, invalid/unsafe states;
- prove deterministic idempotency, same-revision concurrency, retry/recovery and failure-state behavior;
- emit a deterministic reconciliation plan/report.

Stage 4A may not automatically perform semantic extraction, promotion, publication, commits, PR creation, merge, provider calls, scheduled execution, governance change, Product Truth change, or production/customer mutation.

No dependency or lockfile change is authorized.

## Boundaries

`STAGE 4B — NOT AUTHORIZED`

`STAGE 5 — NOT AUTHORIZED`

`INSTITUTIONALISED — NOT AUTHORIZED`

`SB-P-1.12 — NOT ACTIVATED`

PR #589 remains open and unmerged.

## Required stop

`STAGE 4A BOUNDED RECONCILIATION PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED`

---

## Builder Stage 4A reconciliation proof report

**Status:** `STAGE 4A BOUNDED RECONCILIATION PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED`

**Durable report:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/06-stage4a-bounded-reconciliation-proof.md`

**Implementation:** new narrow, strict schema `organizational-learning/schemas/reconciliation.schema.ts` and wrapper `organizational-learning/scripts/reconcile.mjs`, composing only the existing, unmodified `ClosureEnvelopeSchema`, `ReceiptSchema`/`PROCESSING_STATES`, allowlist, git-object-reader, fingerprint, receipt-store, and screening machinery. 32 new focused tests (19 wrapper + 13 schema). Real committed proof output at `organizational-learning/reconciliation/plans/SB-OPS-CI-ARCHITECTURE-1.0/`. No dependency added; `package-lock.json` unchanged.

**State model:** `ALREADY_PROCESSED`, `ELIGIBLE_UNPROCESSED`, `NEW_CLOSURE_REVISION`, `SUPERSEDED_OR_REOPENED` (reusing the existing receipt contract's exact term, not a new parallel spelling), `INVALID_OR_UNSAFE`, `FAILED_RETRYABLE`, with schema-level invariants preventing misclassification (e.g. `FAILED_RETRYABLE` always `retry_eligible: true`).

**Already-processed / idempotency:** the real Stage 2A envelope and receipt classify `ALREADY_PROCESSED` with the exact genuine fingerprint; repeat runs are byte-identical.

**Changed revision / reopen / supersede:** a newer closure revision for the same mission classifies `NEW_CLOSURE_REVISION`; `reopens`/`supersedes_closure` both classify `SUPERSEDED_OR_REOPENED` with `needs_human_reconciliation: true`, naming the flagged prior receipt without mutating it. The wrapper never references `organizational-learning/promotions/` at all, so real Stage 3 promotions cannot be touched by this code path.

**Concurrency:** an atomic exclusive-create lock file gives exactly one owner per mission + closure revision; proven at both the function level and via two real, separately spawned CLI processes.

**Recovery/retry/failure:** a `HARVESTED` receipt resumes correctly; `VALIDATION_FAILED` classifies `FAILED_RETRYABLE` and is never described as "no material learning."

**Malformed input:** unparseable JSON (with a synthetic secret-shaped canary, never echoed), schema-invalid JSON, and an unresolvable commit all fail closed with zero work items.

**Determinism:** stable `mission_id::closure_revision` ordering regardless of input order. Two deliberate regressions (disabling the already-processed check; disabling the reopen/supersede check) were independently proven to break exactly the expected tests before being restored.

**A CRLF/content-addressing methodology note:** the real-data proof initially failed locally because a working-tree read (CRLF, due to this Windows machine's `core.autocrlf=true`) produced a different blob SHA than the actual committed (LF) git blob; root-caused and fixed by reading via `git cat-file -p` instead — no wrapper logic was weakened. Full detail in the durable report, Section 11.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **306/306 passing**, 27 files (up from 274/25); `npm run build` succeeds; Prettier clean; Markdown Quality Gate PASS on both revised report files; `package-lock.json` unchanged.

**Applicable CI:** this round again modifies `vitest.fast.config.ts`, which is in `full-assurance.yml`'s path filter — a real Full Assurance run is expected and will not be suppressed. Exact-head CI to be confirmed; not asserted as already complete here.

**Scope confirmation:** no candidate/promotion/receipt file modified; no automated extraction, publisher, provider/network call, scheduler, or autonomous commit/merge; no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`/Founder-approval claim; no governance/Product Truth/production/customer mutation. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.
