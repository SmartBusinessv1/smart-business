# SMART BUSINESS — CLAUDE CODE STAGE 1 IMPLEMENTATION AND VERIFICATION

# SB-ORG-LEARNING-1.1 — Stage 1: Contracts, Security Boundaries & Deterministic Harvester Foundation

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`
**Builder:** Claude Code
**Status:** `STAGE 1 F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-16 (implementation and every correction round to date recorded the same day)
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`
**Base main at Stage 1 opening (verified):** `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`
**Stage-opening Mission Control commit (verified):** `f04756c7ec04929151dc54573e4235299dc6cd78`

**Implementation commits actually tested (historical, immutable — each was verified individually; see Section 13 for exact per-commit CI evidence):**

- `7198ee6a68373a2ff8080e021fb8871583b012ac` — Phase A + Phase B implementation.
- `6ccedcdd0fe4a48507a85d755e124067bf98187a` — added the original durable report.
- `2c15e2d309e13c16f37066cb25feb1f924d5750e` — a since-abandoned attempt to keep a "final head" pointer current; superseded by the next commit, which removes that pattern instead of continuing it.
- `b4cb3b803e2e2de40fff963e2b951bf2fb63f7e1` — the dangling-provenance validator (Section 21) and the reporting-semantics correction. Independently verified by Codex, disposition `FAIL` on one residual/new-finding set.
- `56ebdcf99b6f3cc1c1ad4230de2a1749bf08283f` — the first F-01 correction (lexical hashing + containment, Section 22). Independently re-verified by Codex, disposition `FAIL` on a residual physical-containment gap plus two newly reopened findings.
- `23266d4bc49a7821ec4af1503f997dcbb28cb967` — the F-01 (round 2) / F-02 / F-03 correction (Section 23). Independently re-verified by Codex, which confirmed **all three resolved**, but reproduced a new, fourth finding purely in the CLI entry points (see below).
- This F-04 correction's own commit(s) — see Section 24. Consistent with the standing anti-recursion rule (Section 21), this report again does not assert its own commit SHA as a "final" fact.

**Independent verification history:**

1. Codex reviewed PR #588 at `d2ca1638abb4985669cbe43074b9adec3e9f3bb3`, reproduced all 159 OLE tests then in place, and returned **`FAIL`** on **F-01 — rejected mission identifier escapes receipt storage** (`communication/missions/SB-ORG-LEARNING-1.1/codex/01-stage1-independent-verification.md`). Corrected in Section 22.
2. Codex re-reviewed PR #588 at `c2e147e97e994aa656060b1f8adaa337910e2521`, independently reproduced all 176 OLE tests then in place, credited the F-01 lexical fix for an ordinary tree, but returned **`FAIL`** again: **F-01 residual**, **F-02 — new finding** (unsorted persisted manifests), and **F-03 — new finding** (malformed-JSON parse diagnostics could echo raw input bytes) (`communication/missions/SB-ORG-LEARNING-1.1/codex/02-stage1-independent-reverification.md`). Corrected in Section 23.
3. Codex re-reviewed PR #588 at `857c2cbefdadae155cedfd497b53f8c9803040c9`, independently reproduced all 186 OLE tests then in place, and confirmed **F-01, F-02, and F-03 resolved** within its stated evidence reach — but reproduced a new, fourth blocker: **F-04 — Windows CLI commands silently skip execution** (`communication/missions/SB-ORG-LEARNING-1.1/codex/03-stage1-independent-reverification.md`). Both `harvest.mjs` and `validate.mjs` compared `import.meta.url` to a naive `file://${process.argv[1]}` string; on Windows this is never equal to the canonical file URL form, so the guarded CLI-invocation block silently never ran, and Node exited with its default status 0 even for malformed/invalid input — while the *imported* `runHarvest`/`runValidate` functions (and every prior test, which only ever imported them) behaved correctly. Mission Control accepted this and authorized this correction (`communication/missions/SB-ORG-LEARNING-1.1/mission-control/10-stage1-f04-correction-authorization.md`). Section 24 documents the fix.

**The prior Codex `FAIL` dispositions are not converted to a `PASS` by this report** — Stage 1 remains unaccepted until Codex re-verifies again and Mission Control explicitly accepts it.

**Current exact-head CI source of truth:** pull request [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588) and its GitHub Actions checks tab. This report intentionally does not try to name a single "final branch-head commit" — see Section 21.

**Controlling build plan:** `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`
**Mission Control substantive review:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/04-stage1-substantive-review.md`
**Mission Control F-01 correction authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/06-stage1-f01-correction-authorization.md`
**Mission Control F-01/F-02/F-03 correction authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/08-stage1-f01-f02-f03-correction-authorization.md`
**Mission Control F-04 correction authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/10-stage1-f04-correction-authorization.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED` (unaffected by this stage)

---

## 1. Objective

Implement only the Mission Control-authorized Stage 1 scope: the deterministic contracts, source-safety boundaries, and local harvester foundation needed for later supervised learning, with no AI call, no autonomous repository write beyond this pull request, no promotion behavior, and no processing of the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target.

---

## 2. Pre-implementation verification (Section 2 of the Stage 1 instruction)

Before any file was changed:

1. Repository confirmed: `SmartBusinessv1/smart-business` (`git remote get-url origin`).
2. Branch confirmed: checked out `mission/SB-ORG-LEARNING-1.1-stage1-successor`, fast-forwarded, clean tree.
3. Ancestry confirmed: `origin/mission/SB-ORG-LEARNING-1.1-stage1-successor` head (`f04756c`) exactly matched the stated stage-opening commit; `git merge-base --is-ancestor 15a2e49... origin/mission/SB-ORG-LEARNING-1.1-stage1-successor` succeeded, and `origin/main`'s head (`15a2e49`) exactly matched the stated verified base.
4. Active Stage 1 communication confirmed present and current on this branch (`communication/live/instruction.md`, `communication/live/report.md`, and the full `communication/missions/SB-ORG-LEARNING-1.1/` record).
5. `SB-P-1.12 NOT ACTIVATED` confirmed across `communication/live/instruction.md`, the mission README, both mission-control handover/authorization documents, and the handover log.
6. `git status` was clean before starting.
7. `mission/SB-ORG-LEARNING-1.1-stage1` and PR `#587` were independently checked (`gh pr view 587`) and confirmed `CLOSED` without merge, with the PR body itself stating it is not authorization or execution history; neither was read for implementation content or used as a starting point.

No authority or scope conflict was found. No stop condition was triggered.

---

## 3. Files changed

35 files changed, 3298 insertions(+), 2 deletions(-). No file outside this list was touched; no unrelated working-tree change existed before or after.

**Modified (3):**

- `package.json` — added `ole:harvest` / `ole:validate` npm scripts only. No dependency added, no dependency version changed.
- `tsconfig.json` — added `organizational-learning/**/*.ts` to `include`, and `allowJs: true` so `.ts` test files can infer types from the plain-JS `.mjs` CLI scripts without hand-written `.d.ts` files.
- `vitest.fast.config.ts` — appended 14 new Stage 1 test file paths to the existing explicit `include` array.

**Added (32, all under `organizational-learning/`):**

```text
organizational-learning/
├── README.md
├── lib/
│   ├── fingerprint.ts
│   ├── git-object-reader.ts
│   ├── path-safety.ts
│   ├── receipt-store.ts
│   ├── revision-hash.ts
│   └── screening.ts
├── receipts/
│   └── README.md
├── schemas/
│   ├── candidate-learning-item.schema.ts
│   ├── closure-envelope.schema.ts
│   ├── primitives.ts
│   ├── promotion-review.schema.ts
│   ├── provenance.schema.ts
│   └── receipt.schema.ts
├── scripts/
│   ├── harvest.mjs
│   └── validate.mjs
├── sources/
│   └── allowlist.ts
└── tests/
    ├── allowlist.test.ts
    ├── candidate-learning-item.schema.test.ts
    ├── closure-envelope.schema.test.ts
    ├── fingerprint.test.ts
    ├── git-object-reader.test.ts
    ├── harvest-cli.test.ts
    ├── helpers/ephemeral-git-repo.ts
    ├── path-safety.test.ts
    ├── promotion-review.schema.test.ts
    ├── provenance.schema.test.ts
    ├── receipt-store.test.ts
    ├── receipt.schema.test.ts
    ├── revision-hash.test.ts
    ├── screening.test.ts
    └── validate-cli.test.ts
```

No file was created or modified under `src/`, `supabase/`, `lambda/`, `.github/workflows/`, `docs/`, `merge/`, or any governance path.

This section describes the original implementation commit `7198ee6`. The correction applied in Section 21 adds 2 further files and 2 minimal edits; see that section for the exact list.

---

## 4. Architecture summary

Runtime: Node.js ESM (`.mjs` CLI scripts), matching the existing `scripts/supabase-cli.mjs` convention. Schemas/contracts: Zod (already a repository dependency), as `.ts` modules. Verified locally that Node 24 (the version this environment and CI both run) natively resolves a `.mjs` file's explicit `.ts`-extensioned relative imports with no new dependency (no `tsx`/`ts-node`) — this is how `harvest.mjs`/`validate.mjs` import the Zod schemas and `lib/` modules directly.

Deterministic vs. security-boundary responsibilities are split into dedicated, independently testable modules rather than folded into the harvester script:

- `sources/allowlist.ts` — path-prefix eligibility only.
- `lib/path-safety.ts` — syntactic/structural path safety only.
- `lib/git-object-reader.ts` — committed-object resolution and read, via `git` plumbing only.
- `lib/screening.ts` — fail-closed secret/sensitive-content screening.
- `lib/fingerprint.ts` / `lib/revision-hash.ts` — the two deterministic hashing primitives (source-state fingerprint and canonical content-revision hash respectively).
- `lib/receipt-store.ts` — receipt persistence and idempotency lookup, base-directory-injected (never hardcoded to the tracked `organizational-learning/receipts/` tree), so tests never write into the real repository.
- `scripts/harvest.mjs` — orchestrates the above; contains no security logic of its own beyond call ordering and fail-closed branching.

---

## 5. Candidate/promotion separation proof (B1)

`schemas/candidate-learning-item.schema.ts` and `schemas/promotion-review.schema.ts` are two separate files with no shared "add fields" base schema. Both call Zod's `.strict()` explicitly — the single most important line in each file, called out in an in-file comment, because Zod's *default* object behavior (`.strip()`) silently discards unrecognized keys, which is exactly the wrong behavior for "prohibited fields must be rejected, not silently discarded" (B1).

Proof, not assertion — `organizational-learning/tests/candidate-learning-item.schema.test.ts`:

- `it.each(PROHIBITED_CANDIDATE_FIELDS)` individually attempts to add each of `reviewed_by`, `founder_approval`, `founder_approved`, `institutional_approval`, `institutionalised_by`, `institutionalized_by`, `supersedes`, `superseded_by`, `risk_resolution`, `status`, `promotion_scope`, `approving_authority` to an otherwise-valid candidate and asserts `safeParse` fails with a Zod `unrecognized_keys` issue for every one of them.
- A separate test adds a field named nothing on that list (`some_future_authority_field_nobody_named_yet`) and confirms it is *also* rejected — proving the defense is `.strict()`'s whitelist, not an enumerated blocklist that a new field name could slip past.
- `maturity` is `z.literal("CANDIDATE")` and `authority_effect` is `z.literal("NONE")` — tests confirm any other value is rejected.
- `generated_by.actor_class` is `z.literal("synthesis")` only — tests confirm `founder`, `mission-control`, `builder`, `verifier`, `ci` are all rejected as a candidate's claimed origin, directly closing off the "fabricated Founder/Mission-Control authority references" adversarial test family named in the build plan (Section 18).

`schemas/promotion-review.schema.ts` is where supersession, approval, and institutionalization fields legitimately live. `PromotingAuthoritySchema` is `z.enum(["mission-control", "founder"])` — no CI/synthesis/builder actor class can ever be an approving authority. A `.superRefine()` enforces: organization-wide `INSTITUTIONALISED` requires `approving_authority.actor_class === "founder"`; mission-scoped `INSTITUTIONALISED` may be approved by Mission Control (final build plan Section 5 draws this distinction — the Founder gate is organization-wide-specific, not blanket). Both branches are tested, including the accept case for each.

---

## 6. Source allowlist and path-safety behavior (B3)

`sources/allowlist.ts` allowlists exactly two evidence-class prefixes: `communication/missions/` and `communication/archive/`. `merge/active/**` (current governance) is deliberately **not** in this evidence allowlist — the final build plan's evidence order names it as authority *context*, not evidence to extract candidate lessons from, and folding it in would blur exactly the evidence/authority line this engine exists to protect. This is an interpretive decision beyond what the build plan states explicitly; it is called out here for Mission Control to confirm or correct. `communication/live/**` has its own named predicate (`isLiveCommunicationPath`) in addition to simply being absent from the allowlist, so the exclusion stays visible and independently testable rather than an implicit, easy-to-erode consequence of an allowlist someone edits later.

`lib/path-safety.ts` follows a reject-if-not-already-canonical design, not normalize-then-validate — deliberately, to avoid the class of bug where the normalization step is itself exploitable. It rejects: traversal (`..`), absolute paths, POSIX- and Windows-style UNC paths, Windows drive-letter paths, any backslash, control characters (including null bytes), percent-encoded segments, non-NFC-normalized Unicode, empty/doubled/trailing-slash segments, and overlength paths. Case-sensitive exact-prefix matching in the allowlist (never lower-casing a path anywhere in the pipeline) is what makes an ambiguous-case alias (e.g. `Communication/Missions/x`) fail closed with no bespoke case-normalization code to get wrong — tested directly.

26 tests across `path-safety.test.ts` (17) and `allowlist.test.ts` (9) cover each violation class individually plus the combined `isEligibleSourcePath` gate.

---

## 7. Committed-object reader behavior

`lib/git-object-reader.ts` reads only pinned committed Git objects via `git ls-tree`/`git cat-file`, using `execFileSync` with argv arrays (never a shell string), with path arguments always placed after a literal `--` separator so a path beginning with `-` can never be parsed as a flag. `commitSha` and `path` are re-validated inside this module even though callers already validate them, because this module is a security boundary and must not assume its caller was correct.

Mode/type handling was empirically verified against a real git 2.55 repository before being written into the module (not assumed from memory): regular files are `100644`/`100755` mode, `blob` type; **symlinks are mode `120000` but type `blob`** — the same type as a regular file, so checking type alone would silently accept a symlink; submodules/gitlinks are mode `160000`, type `commit`; directories are mode `040000`, type `tree`; a missing path produces empty output at exit code 0 (not a non-zero exit), so absence must be checked explicitly rather than inferred from a thrown error.

`organizational-learning/tests/git-object-reader.test.ts` (13 tests) runs against isolated, throwaway git repositories created and torn down per test (`tests/helpers/ephemeral-git-repo.ts`) — never the real Smart Business working tree, and never a real closed mission. Symlink and gitlink tree entries are created via `git update-index --add --cacheinfo <mode> <sha> <path>` plumbing rather than `fs.symlinkSync` or an actual submodule checkout, specifically because `fs.symlinkSync` requires elevated privileges on Windows by default (this development machine), while the real CI runners are Linux — plumbing produces the identical tree entry on every platform. One test directly proves "committed source only": it commits a file, then overwrites the *working-tree* copy without committing, and asserts the reader still returns the originally-committed content, never the dirty on-disk content.

---

## 8. Provenance contract behavior (B2)

`schemas/provenance.schema.ts`'s `EvidenceReferenceSchema` validates shape only: `repository` (locked to the literal `SmartBusinessv1/smart-business` — a reference cannot silently point elsewhere), `commit_sha`/`blob_sha` (40-hex), `path` (structurally safe, via the shared path-safety refinement), `locator`, `actor_class`, `scope`, and `relationship` (`SUPPORTS | CONTRADICTS | LIMITS`). It deliberately does **not** verify that the reference actually resolves to a real object at that path/commit — that requires I/O against the pinned commit and cannot be a pure Zod refinement (Zod validates the value given to it; it cannot reach into git). `isSameUnderlyingSource` identifies when two references point at the same exact evidence, which is what a later stage's "citing the same source twice is not independent corroboration" logic would key off of — the detection *logic* itself is out of Stage 1 scope (see Section 12).

**Runtime dangling-provenance resolution is now implemented** (Correction 1, Section 21): `lib/provenance-validator.ts`'s `validateProvenanceReference` composes the existing `resolveBlobAtPath` (Section 7) into the `DanglingCheckResult` this file declares, distinguishing a valid exact reference from commit-not-found, path-not-found-at-commit, a non-regular object, and a blob-SHA mismatch. It was not implemented in the original Stage 1 submission; Mission Control's substantive review identified this gap and it is corrected here — see Section 21 for the full account and test evidence.

Provenance is modeled **per-claim**, not per-item: `CandidateClaimSchema` requires `evidence: z.array(EvidenceReferenceSchema).min(1)` — an unsupported claim cannot validate. Nothing in this schema records git-committer identity as an authority signal (B2: "git authorship does not prove decision authority") — there is no field for it.

10 tests in `provenance.schema.test.ts` (shape validation); 9 further tests in `provenance-validator.test.ts` (runtime resolution) — see Section 21.

---

## 9. Screening/quarantine behavior and scanner fail-closed proof (B5)

`lib/screening.ts` separates the *contract* (a `ScreeningResult` shape, validated by `schemas/receipt.schema.ts`'s `ScreeningResultSchema`) from a minimal, dependency-free *reference implementation* (`DEFAULT_SECRET_PATTERNS`: JWT, PEM private-key header, AWS access-key ID). This is explicitly documented in-file as a Stage 1 proof of the fail-closed pipeline, not a claim of production-grade secret detection — a stronger scanner (e.g. wiring in `gitleaks`, already used ad hoc elsewhere in this repository per the SB-ORG-LEARNING-1.0 reviews) is a named follow-up (Section 13).

`runScreeningSafely` is the one place the fail-closed contract becomes executable behavior rather than only a design principle:

- a thrown exception → `SCANNER_FAILED`, never `CLEAN`;
- a non-function "scanner" → `SCANNER_UNKNOWN`;
- a malformed/unrecognized result shape (wrong `status` value, non-array `findings`, etc.) → `SCANNER_UNKNOWN`, not a crash and not `CLEAN`.

Findings never carry matched text, only `{ path, rule_id }` — `ScreeningFindingSchema` has no field to put raw text in, so this is structurally impossible to violate through this contract, not merely a redaction step someone could forget. Tested directly: a real JWT-shaped string is quarantined, and `JSON.stringify(result)` is asserted not to contain the original JWT text.

`schemas/receipt.schema.ts` makes the fail-closed guarantee load-bearing at the persistence layer too: a `.superRefine()` makes it a schema validation failure — not merely a logic bug waiting to happen — for a receipt to claim `processing_state: "SCREENED"` (Stage 1's terminal success state) unless `screening_result.status === "CLEAN"` and `source_manifest` is non-empty. Tested directly in `receipt.schema.test.ts`.

12 tests in `screening.test.ts`; the harvester's actual quarantine path is additionally exercised end-to-end in `harvest-cli.test.ts` (Section 11).

---

## 10. Deterministic source fingerprint / idempotency design (B7)

`lib/fingerprint.ts`'s `computeSourceFingerprint` hashes `schemaVersion + "\n" + closure_revision + "\n" + sorted "path@blobSha" lines` (sha256 hex). Tested: deterministic for identical input; independent of manifest entry order (sorted internally, callers need not pre-sort); changes when the closure revision, schema version, a blob SHA, or manifest emptiness changes (8 tests, `fingerprint.test.ts`).

`lib/revision-hash.ts`'s `computeRevisionHash` (used by the promotion contract's `candidate_revision_hash` binding, B1) canonicalizes an object via recursive key-sorting before hashing, so field order never affects the hash while array order still does (arrays are semantically ordered, e.g. an ordered claims list) — 5 tests, `revision-hash.test.ts`.

`lib/receipt-store.ts` derives `receipt_id` from `(mission_id, source_fingerprint)` only — never from `run_id` — so re-running the harvester against an unchanged closure envelope always resolves to the same receipt file and updates it atomically in place (write-to-temp-then-rename) rather than accumulating duplicate receipts. `run_id` (a fresh UUID) is the separate "processing-run identity" B7 requires to vary across retries even when the source fingerprint does not. `isAlreadyProcessed` is `true` only for `processing_state === "SCREENED"` — a prior `VALIDATION_FAILED` receipt remains retryable, never treated as done.

**Filesystem placement was corrected under F-01** (Sections 22–23, two rounds): the receipt *file path* is no longer derived from the raw `mission_id` — it now uses a sha256-hashed storage key, a lexical containment check, and (round 2) an independent *physical* containment check that follows symlinks/junctions via `fs.realpathSync` rather than trusting path strings alone. `computeReceiptId` (the diagnostic identity shown in a receipt's payload) still uses the raw, possibly-malformed `mission_id` verbatim throughout, exactly as the accepted truthful-diagnostics rule requires. 29 tests, `receipt-store.test.ts` (up from 8 originally), including atomic-write behavior, same-identity update-in-place behavior, and both F-01 regression suites — see Sections 22–23.

`harvest-cli.test.ts` proves this end-to-end: running the same envelope twice against the same ephemeral repo yields exit code 0 with an "already processed" message on the second run, with no second receipt file created.

---

## 11. Receipt-state model and harvester behavior

`schemas/receipt.schema.ts`'s `PROCESSING_STATES` reproduces B7's recovery-state list verbatim (`NOT_STARTED, HARVESTED, SCREENED, EXTRACTION_ATTEMPTED, VALIDATION_FAILED, CANDIDATE_READY, PUBLICATION_PENDING, PUBLISHED, SUPERSEDED_OR_REOPENED`) so later stages extend one lifecycle rather than inventing a parallel one. Stage 1's harvester can only ever reach three of these: it writes an intermediate `HARVESTED` receipt before screening (so a crash mid-screen leaves a recoverable state rather than nothing), then a final `SCREENED` (clean success) or `VALIDATION_FAILED` (any failure) receipt. `VALIDATION_FAILED` requires a non-empty `failure_reason` at the schema level — a receipt cannot claim failure without saying why.

`scripts/harvest.mjs`'s `runHarvest(argv)` is exported (not only invoked as `node harvest.mjs`) specifically so tests can call it directly and assert on both its return value and the receipt file it wrote, without spawning a subprocess per test case. Evidence resolution is all-or-nothing by design: if *any* referenced path is not allowlisted or does not resolve to a regular file at the pinned commit, the whole run fails closed (`VALIDATION_FAILED`) rather than silently proceeding on partial evidence — documented in-file as a deliberate, conservative choice, not an oversight.

`harvest-cli.test.ts` (13 tests, up from 9 originally) exercises the full pipeline end-to-end against isolated ephemeral repositories and temp directories only, covering: clean success; idempotent no-op on re-run; a `communication/live/**` reference (rejected); a nonexistent path (rejected); a symlink reference (rejected); a quarantined secret in evidence content (rejected, and the receipt/message are asserted not to contain the raw secret text anywhere); a schema-invalid envelope (rejected, with a best-effort receipt still written under the envelope's claimed `mission_id` when parseable); **F-01's exact reproduction case reproduced and proven fixed through the real `runHarvest` failure flow (Section 22)**; a nonexistent `source_snapshot_ref` commit (rejected); the missing-argument case; **F-02's reversed/mixed reference order and partial-manifest cases (Section 23)**; and **F-03's malformed-JSON canary case (Section 23)**.

`scripts/validate.mjs` is a small, independent CLI for checking an arbitrary JSON file against any of the four schemas; 7 tests, `validate-cli.test.ts` (up from 5 originally; F-03 cases added, Section 23).

---

## 12. Test inventory and counts

Counts below are exact, taken from `npx vitest run -c vitest.fast.config.ts --reporter=verbose` output, not estimated.

| File | Tests |
|---|---|
| `path-safety.test.ts` | 17 |
| `allowlist.test.ts` | 9 |
| `fingerprint.test.ts` | 8 |
| `revision-hash.test.ts` | 5 |
| `provenance.schema.test.ts` | 10 |
| `provenance-validator.test.ts` (added in this correction, Section 21) | 9 |
| `closure-envelope.schema.test.ts` | 11 |
| `candidate-learning-item.schema.test.ts` | 21 |
| `promotion-review.schema.test.ts` | 10 |
| `receipt.schema.test.ts` | 12 |
| `screening.test.ts` | 12 |
| `git-object-reader.test.ts` | 13 |
| `receipt-store.test.ts` (F-01 round 1 + round 2 physical-containment suites, Sections 22–23) | 29 |
| `harvest-cli.test.ts` (F-01 real-flow + F-02 + F-03 cases, Sections 22–23) | 13 |
| `validate-cli.test.ts` (F-03 cases added, Section 23) | 7 |
| `cli-process.test.ts` (F-04 genuine process-level regressions, new, Section 24) | 8 |
| **Total** | **194 across 16 files** in `organizational-learning/tests/`, plus the 8 pre-existing Fast Gate files unchanged (total Fast Gate: **255 tests, 24 files**) |

All Stage 1 tests are environment-independent: no Supabase client, no network call, no dependency on real repository content staying byte-identical over time (git-plumbing tests use isolated ephemeral repositories; schema/logic tests use inline fixtures).

---

## 13. Verification results (local, then real CI)

**Local, in order:**

- `npx tsc --noEmit` — **clean**, zero errors (after adding `organizational-learning/**/*.ts` and `allowJs: true` to `tsconfig.json`).
- `npx eslint organizational-learning/` — **clean**, zero errors/warnings. (`.mjs` files are not matched by this repository's ESLint `files: ["**/*.{ts,tsx}"]` pattern, consistent with the pre-existing `scripts/supabase-cli.mjs`, which is likewise never linted.)
- `npm run test:fast` (`vitest.fast.config.ts`) — **211/211 passing**, 22 files, ~15s.
- `npm run build` — **succeeds**; `organizational-learning/**` is not imported by `src/` and does not appear in build output, as expected.
- Markdown Quality Gate (`tools/markdown/quality_gate.py`) on both new `README.md` files — **PASS**, 0 issues/warnings/failures each; the same gate additionally ran automatically as this repository's pre-commit hook on both files and passed.
- `git diff --cached --check` — clean (no whitespace errors).
- Staged-diff secret scan — no real secret matched; the only "secret-like" text in the diff is deliberate, clearly-fake test fixtures used to prove the screening patterns work (a public jwt.io example token, an obviously-fake `AKIA...` string, and a truncated placeholder PEM block) — never real credentials.
- `package-lock.json` — confirmed **unchanged** (`git diff --stat package-lock.json` empty, `git status --short package-lock.json` empty).

**Real CI, PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588) — historical evidence, by commit tested:**

Commit `7198ee6a68373a2ff8080e021fb8871583b012ac` (Phase A/B implementation):

| Check | Result | Duration |
|---|---|---|
| Lint (ESLint + Prettier) | **pass** | 22s |
| Typecheck (tsc --noEmit) | **pass** | 30s |
| Build (vite build) | **pass** | 27s |
| Fast Tests (vitest) | **pass** | 21s |
| Full Assurance Tests (vitest) | **pass** | 4m3s |
| Markdown Quality Gate | **pass** | 6s |

Commit `6ccedcdd0fe4a48507a85d755e124067bf98187a` (added the original durable report): the same six checks were re-verified and passed again (documentation-only change; Full Assurance re-ran because `package.json`/`vitest.fast.config.ts` still matched its path filter from the base of the diff).

These are historical facts about specific, named, immutable commits and remain true regardless of what the branch head is by the time this is read. **They are not a claim about the current branch head.** For the exact-head CI status as of *now*, see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab directly — that is the one live source of truth this report defers to, per Correction 2 (Section 21).

A pull request (`#588`, targeting `main`) was opened only so these workflows — which trigger on push-to-`main` or pull-request-to-`main`, not on a bare feature-branch push — would actually run at all, per the Stage 1 instruction's "push to the authorized Stage 1 branch and allow real CI to verify the exact head." The PR is open, unreviewed, and not self-approved or self-merged.

---

## 14. Dependency and lockfile confirmation

**No dependency was added, removed, or upgraded.** `package.json`'s only change is two new `"scripts"` entries (`ole:harvest`, `ole:validate`) pointing at the new CLI files. **`package-lock.json` is unchanged** — confirmed by an empty `git diff --stat`/`git status --short` on that file both before and after the commit.

---

## 15. Stage 1 exclusions that remain unimplemented (by design)

Confirmed absent from this stage, matching the authorization boundary exactly:

- Any AI-provider call, dependency, or secret.
- Semantic candidate extraction (the candidate *schema* exists; nothing produces a populated candidate).
- Automatic or manual promotion execution (the promotion *schema* and its authority rules exist and are tested; nothing writes a promotion record).
- Any GitHub Actions workflow for background learning orchestration.
- Automatic PR creation or any repository-write automation beyond this human-supervised commit/push/PR.
- Processing of the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target, or any other real closed mission — all tests use isolated ephemeral repositories and inline fixtures only.
- Supabase/database/schema/RLS/auth changes; production or test-environment access; any provider mutation.
- Product Truth, governance, roadmap, pricing, permission, or Founder-decision changes.
- Stage 2, Stage 3+, and `SB-P-1.12` activation.
- Self-approval or self-merge.

Also intentionally not built yet, per Section 13 of the successor handover (not Stage 1 omissions): the Mission Learning Report contract, mission-start context packs, the lessons/risks registries, dedicated tool/resource/capability registries, contradiction/supersession *detection logic* (the schema fields to support it later — `supersedes`/`superseded_by` on the promotion contract, `relationship`/`isSameUnderlyingSource` on the provenance contract — exist now; the retrieval/graph logic that would use them does not), and background/automatic closure detection.

---

## 16. Interpretive decisions made where the controlling documents left a gap

**Mission Control's substantive review (`mission-control/04-stage1-substantive-review.md`, Section 4) has confirmed all four of these for Stage 1.** They are recorded below as originally reasoned, with Mission Control's disposition noted on each — they are no longer open questions for this stage, though Mission Control retains authority to revisit them for Stage 2 and beyond.

1. **`merge/active/**` excluded from the evidence allowlist.** The final build plan's evidence order (B3) lists current governance as authority *context*, distinct from evidence to extract lessons from. Stage 1 reads this as: the harvester's evidence allowlist should not include it, since a future semantic-extraction stage loading governance for interpretation is a different concern from what counts as harvestable evidence bytes. **Mission Control disposition: accepted for Stage 1** — "current governance is authority context, not candidate-learning evidence by default."
2. **All-or-nothing evidence resolution.** If any envelope-referenced path is ineligible or unresolvable, the entire harvest run fails closed rather than proceeding on the resolvable subset. An alternative design (partial harvest with the ineligible refs reported as a warning) was considered and rejected as inconsistent with "source eligibility is not authority" applied to the envelope itself. **Mission Control disposition: accepted for Stage 1** — "partial silent harvesting would weaken provenance integrity."
3. **Receipt `mission_id` uses a plain string, not the strict `SB-*` pattern the closure envelope enforces.** A receipt must remain writable to truthfully record a validation failure even when the envelope's own `mission_id` was itself malformed. **Mission Control disposition: accepted for Stage 1.**
4. **`VALIDATION_FAILED` is the one Stage-1-reachable state for every kind of harvest failure**, since Stage 1 has no `EXTRACTION_ATTEMPTED`/`CANDIDATE_READY`/etc. to distinguish among. **Mission Control disposition: accepted for Stage 1.**

---

## 17. Unresolved risks

- The Stage 1 heuristic scanner (`DEFAULT_SECRET_PATTERNS`) is intentionally minimal (JWT, PEM header, AWS access-key ID) and is explicitly documented as not a production secret-scanning replacement. Mission Control has explicitly retained this as a **Stage 2-entry gate decision**: "Before Stage 2 processes real repository evidence, Mission Control must explicitly decide whether a stronger scanner is required" (`04-stage1-substantive-review.md`, Section 4).
- **Individual-reference dangling detection is now implemented** (Correction 1, Section 21): `validateProvenanceReference` proves a single claimed `commit_sha + path + blob_sha` either resolves or does not. What remains genuinely unimplemented is graph-level cycle/dangling detection across `supersedes`/`superseded_by` *edges* in a populated registry (beyond the one structural self-reference check already in place) — that still needs a populated registry to check against, which does not exist until a later stage.
- `harvest.mjs`'s `discoverRepoRoot()` (used only when `--repo-root` is not explicitly passed) shells out to `git rev-parse --show-toplevel` with inherited stderr — this is fine for the intended human-CLI use case but was not exercised by any test (every test passes `--repo-root` explicitly against an ephemeral repository).

## 18. Assumptions

- `mission_class`, `final_disposition`, and `closure_revision` in the closure-envelope schema are validated as non-empty strings only, not closed enums, since no repository convention or controlling document defines a fixed vocabulary for them today.
- The closure envelope's `retained_followups` field is free text, not paths, and is therefore excluded from the evidence manifest — only `acceptance_refs` and `closure_refs` are treated as harvestable evidence references.

## 19. Follow-ups (for Mission Control, not self-authorized)

- The four interpretive decisions in Section 16 are now confirmed accepted for Stage 1 by Mission Control (`04-stage1-substantive-review.md`, Section 4) — no further action needed on those before Stage 2 design, though Mission Control may revisit them at that gate.
- Decide the Stage 1 heuristic-scanner risk in Section 17 before Stage 2 processes real repository evidence — explicitly retained by Mission Control as a Stage 2-entry gate decision, not resolved here.
- When Stage 2 is authorized, the recommended proof target remains `SB-OPS-CI-ARCHITECTURE-1.0` per the controlling build plan — not executed here.

---

## 20. Recommended Stage 2 handoff (not an activation)

Stage 1's contracts and deterministic harvester foundation, including the Section 21 correction, are in place and verified against both local checks and real CI (see Section 13 for the per-commit evidence, and PR #588 for current status). A credible Stage 2 would:

1. Author one real closure envelope for `SB-OPS-CI-ARCHITECTURE-1.0` (or another already-closed mission Mission Control designates) by hand, referencing its actual durable acceptance/closure records.
2. Run `node organizational-learning/scripts/harvest.mjs --envelope <that envelope>` manually against the real repository for the first time, and review the resulting receipt.
3. Only then, in an authorized AI mission session (not a CI-embedded model call, per the SB-ORG-LEARNING-1.0 review's accepted direction), draft one candidate learning item from that harvested manifest and validate it against `schemas/candidate-learning-item.schema.ts`.

This report does not activate Stage 2. Stage 1 completion is not `SB-ORG-LEARNING-1.1` completion — Stages 2–6 remain, and `SB-P-1.12` remains not activated.

---

## 21. Stage 1 correction (Mission Control substantive review round)

Mission Control's substantive review (`communication/missions/SB-ORG-LEARNING-1.1/mission-control/04-stage1-substantive-review.md`) found the original Stage 1 submission materially aligned with the authorized boundary but required two corrections before Codex independent verification. Both are applied here; nothing beyond them was changed (per the active instruction's "do not broaden scope beyond the two corrections below").

### Correction 1 — dangling-provenance runtime validation

**Finding:** the original submission validated provenance *shape* (`EvidenceReferenceSchema`) and declared a `DanglingCheckResult` type, but never implemented the runtime check that a claimed `commit_sha + path + blob_sha` actually resolves to a real committed object. B2 requires fabricated or unresolved evidence references to fail validation; a schema-only check cannot do that, since Zod validates the value it is given and cannot reach into git.

**Fix:** `organizational-learning/lib/provenance-validator.ts` (new), exporting `validateProvenanceReference(repoRoot, reference)`. It composes the existing, already-verified `resolveBlobAtPath` (Section 7) — no new git-shelling logic was written — into the five-way distinction the review required:

- `{ status: "VALID" }` — the reference resolves exactly as claimed;
- `{ status: "DANGLING", reason: "COMMIT_NOT_FOUND" }`;
- `{ status: "DANGLING", reason: "PATH_NOT_FOUND_AT_COMMIT" }`;
- `{ status: "DANGLING", reason: "NOT_A_REGULAR_FILE", actualMode }` — directory, symlink, or submodule/gitlink at that path;
- `{ status: "DANGLING", reason: "BLOB_SHA_MISMATCH", actualBlobSha }` — the path resolves, but not to the blob the reference claims.

**Tests:** `organizational-learning/tests/provenance-validator.test.ts` (new), 9 tests, run only against isolated ephemeral git repositories created and torn down per test — no real repository content, no real closed mission. Covers all five states above individually, plus: a reference claiming one real file's path while citing a *different* real file's blob (a fabricated-corroboration shape, correctly DANGLING rather than coincidentally matching); and a reference pinned to an earlier commit's blob remaining `VALID` at that commit while the identical blob SHA becomes `BLOB_SHA_MISMATCH` once cited against a later commit where the file changed — proving the check is commit-exact, not merely path-exact.

**Scope discipline:** no real closed mission was processed (all fixtures are synthetic, created and destroyed within each test). No dependency was added. `package-lock.json` is unchanged. `scripts/harvest.mjs` was not modified — the correction adds the standalone primitive the review asked for; wiring it into the harvester's own evidence-resolution path (which already independently resolves paths via `resolveBlobAtPath` for a different purpose — building the manifest, not validating a claim object) was not requested and would have broadened scope beyond the two corrections.

### Correction 2 — stop recursive "final branch head" reporting

**Finding:** the original report and live-report builder section recorded a specific commit as the "final branch-head commit" with "all CI passed on the exact pushed head." Because updating the report at all requires a new commit, and that new commit is a newer head than the one just asserted "final," each correction immediately made its own predecessor's claim stale — a self-invalidating pattern that repeated once before this review caught it.

**Fix, applied throughout this document (see the header and Section 13):**

- The header no longer names a single "final branch-head commit." It instead lists every implementation commit actually tested, as historical, immutable facts (a statement "commit X passed check Y" remains true forever once verified, regardless of what happens to the branch afterward) — and separately names PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588) and its GitHub Actions checks tab as the one live pointer for "what is the exact current head, and did it pass," which this document defers to rather than duplicating.
- Section 13's CI table is now explicitly scoped per named commit ("historical evidence, by commit tested"), not asserted as "the exact pushed branch head."
- This correction's own commit is deliberately **not** asserted to be a/the final head anywhere in this file, breaking the loop instead of continuing it.

**After this correction is pushed:** applicable CI was awaited on the resulting head and its result is reported by workflow/run below. No further commit was made solely to re-embed that head's SHA into this file — that would reproduce exactly the pattern being corrected.

**CI on the correction commit:** see the live builder section of `communication/live/report.md` and PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588) for the workflow run results, recorded there rather than duplicated here as a second copy that could itself go stale.

**Local verification for this correction round** (`organizational-learning/lib/provenance-validator.ts`, `organizational-learning/tests/provenance-validator.test.ts`, plus this report and the live report):

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **220/220 passing**, 23 files (150 → 159 tests across 14 → 15 files under `organizational-learning/tests/`; the 8 pre-existing files and their 61 tests unchanged).
- `npm run build` — succeeds.
- Markdown Quality Gate on both revised report files — PASS.
- `package-lock.json` — confirmed unchanged.
- Staged-diff scope for this correction: 2 new files (`lib/provenance-validator.ts`, `tests/provenance-validator.test.ts`), 2 minimal edits (`schemas/provenance.schema.ts` comment only, `vitest.fast.config.ts` one new `include` entry), plus the two report files. No file outside this list was touched.

---

## 22. Stage 1 F-01 correction (Codex independent verification finding)

Codex's independent verification (`communication/missions/SB-ORG-LEARNING-1.1/codex/01-stage1-independent-verification.md`) returned disposition **`FAIL`** on one blocking finding after independently reproducing all 159 OLE tests then in place and inspecting the changed-file scope. Mission Control accepted the finding and authorized this narrow correction (`communication/missions/SB-ORG-LEARNING-1.1/mission-control/06-stage1-f01-correction-authorization.md`). Only this one correction is applied here; nothing else was changed.

### F-01 — rejected mission identifier escapes receipt storage

**Codex's exact reproduction:** an envelope containing only `{"mission_id": "../escaped", "closure_revision": "REV-CODEX-1"}` is correctly rejected by `ClosureEnvelopeSchema` before any Git evidence resolution — but the resulting `VALIDATION_FAILED` failure receipt was written to `<tempRoot>/escaped/<fingerprint>.json`, a **sibling** of the configured `<tempRoot>/receipts` directory, not inside it. The exit code was correctly `1`; the filesystem write nonetheless happened outside the configured boundary.

**Root cause:** `lib/receipt-store.ts`'s `receiptFilePath` joined `baseDir`, the raw `missionId` string, and the fingerprint filename directly (`join(baseDir, missionId, ...)`). Node's `path.join` resolves `..` segments, so a `mission_id` value that never passed `MissionIdSchema` (because the whole envelope was rejected before that check mattered for the fallback diagnostic path) could redirect the join outside `baseDir`. `readReceiptIfExists` and `writeReceipt` both call `receiptFilePath`, so both lookup and write shared the same defect.

**Fix — two independent layers, exactly as required (not sanitization alone):**

1. **`computeMissionStorageKey(missionId)`** (new, exported from `lib/receipt-store.ts`) — a sha256 hex digest of the mission identifier, used only for the on-disk directory name. A hex digest cannot contain a forward slash, a backslash, `..`, a drive letter, or a UNC prefix regardless of the input, so this makes escape structurally impossible rather than dependent on catching known-bad patterns. `computeReceiptId` (the diagnostic identity written into a receipt's payload `mission_id` field) is **unchanged** — it still uses the raw, possibly-malformed identifier verbatim, exactly as the accepted Stage 1 truthful-diagnostics rule requires. The two are now clearly two different functions doing two different jobs, not one value serving both.
2. **`resolveContainedPath(baseDir, ...segments)`** (new, exported) — independently re-resolves the candidate path and throws if it would fall outside `baseDir`, using `path.relative` and rejecting any result that is empty, absolute, or starts with `..`. In normal operation this can never fire, because layer 1 already guarantees safety; it exists so a future edit that weakens or bypasses the hashing step fails loudly instead of silently reopening F-01.

`receiptFilePath` now composes both layers. Because `readReceiptIfExists` and `writeReceipt` already called (and still call) only `receiptFilePath`, fixing that one function fixes lookup and write identically with no other code path to update — **no change was needed in `scripts/harvest.mjs`, any schema, or the CLI's fallback-mission-id logic**, keeping the correction as narrow as the "no `harvest.mjs` change" scope constraint implied.

The atomic-write temp path (`${filePath}.${randomUUID()}.tmp`) is a string suffix appended to the already-contained `filePath`, so it inherits containment automatically — no separate check was needed there.

**Regression tests added, all against isolated OS temp directories only, no real closed mission processed:**

- `receipt-store.test.ts` grew from 8 to 24 tests. New coverage: `computeMissionStorageKey` is a deterministic 64-hex digest for every tested input, including seven distinct malicious shapes (`../escaped` — Codex's exact case — nested traversal, absolute POSIX-like, Windows drive-like, UNC-like, and both POSIX/Windows path-separator forms); `resolveContainedPath` throws on a raw traversal or absolute segment even before hashing is involved, proving the second layer works independently of the first; a parameterized `it.each` over all seven malicious identifiers proves each one is written and read back safely *inside* the configured directory (asserted both by exact path prefix and by directory-listing — no new sibling of the configured directory ever appears, the same shape as Codex's reproduction); repeated identical malformed input remains deterministic (same file updated in place, not duplicated); and a normal valid identifier's behavior is unchanged. Every case also asserts the receipt's persisted `mission_id` payload field still contains the exact original malformed string, proving truthful diagnostics were not sacrificed for safety.
- `harvest-cli.test.ts` grew from 9 to 10 tests. The new test reproduces Codex's exact scenario through the **real** `runHarvest` CLI entry point (not just the receipt-store unit) — the same envelope shape, the same `../escaped` identifier — and asserts no `escaped` directory appears as a sibling of the configured receipts directory, that the receipt is written safely inside it, and that it still records `mission_id: "../escaped"` truthfully. This satisfies the F-01 authorization's tenth required regression case (the real `runHarvest` failure-flow proof) without any change to `harvest.mjs` itself.
- A pre-existing test (`extractFingerprintFromReceiptsDir`, a harvest-cli.test.ts test helper) assumed the old `<receiptsDir>/<raw-mission-id>/` layout and would have silently broken under the new hashed layout; it was updated to use `computeMissionStorageKey` and re-verified passing, rather than left as a latent gap.

**Scope discipline:** exactly 3 files touched, 0 new files, 0 dependencies added, `package-lock.json` unchanged (confirmed). No change to candidate/promotion authority, provenance architecture beyond this, source allowlisting, receipt-state vocabulary, the truthful-payload-preservation rule, or the scanner. No real closed mission processed. No AI extraction, background automation, provider/network writes, Stage 2, or `SB-P-1.12` activation.

**Local verification for this F-01 correction round:**

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **237/237 passing**, 23 files (176 → up from 159 across the same 15 `organizational-learning/tests/` files; the 8 pre-existing files and their 61 tests unchanged).
- `npm run build` — succeeds.
- Markdown Quality Gate on both revised report files — PASS.
- `package-lock.json` — confirmed unchanged.
- Staged-diff scope: `organizational-learning/lib/receipt-store.ts` (the fix), `organizational-learning/tests/receipt-store.test.ts` (regression suite), `organizational-learning/tests/harvest-cli.test.ts` (real-flow regression case + the fixed pre-existing helper), plus the two report files. No file outside this list was touched.

**CI on this correction's pushed head:** per Correction 2's still-active rule, see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab and the live builder section of `communication/live/report.md` for the workflow run results on the exact current head, rather than a SHA restated here.

---

## 23. Stage 1 F-01 (round 2) / F-02 / F-03 correction (Codex independent re-verification findings)

Codex's independent re-verification (`communication/missions/SB-ORG-LEARNING-1.1/codex/02-stage1-independent-reverification.md`) independently reproduced all 176 OLE tests then in place, credited the round-1 F-01 fix for an ordinary receipt tree, and returned disposition **`FAIL`** again on three findings. Mission Control accepted all three and authorized this correction (`communication/missions/SB-ORG-LEARNING-1.1/mission-control/08-stage1-f01-f02-f03-correction-authorization.md`). Only these three corrections are applied here; nothing else was changed.

### F-01 (round 2) — physical receipt containment

**Codex's exact reproduction:** inside a checked temporary root, create ordinary sibling directories `linked-receipts` and `redirected`, then create a Windows directory junction at `linked-receipts/<sha256("../escaped")>` pointing at `redirected`. Invoking `runHarvest` with the same `../escaped` envelope against `--receipts-dir linked-receipts` wrote the fingerprint-named receipt into `redirected` — the junction target — even though `receiptFilePath`'s lexical `resolve`/`relative` check reported the nominal path as contained. A subsequent `readReceiptIfExists` read the same receipt back through the junction. Round 1's hashing and lexical check are real, correct defenses against raw-string traversal, but neither one inspects the filesystem, so neither can see that an *existing* path component is a symlink/junction/reparse point.

**Fix, a third independent layer added to `lib/receipt-store.ts`, on top of round 1's two:** `assertPhysicallyContained(baseDir, targetPath)` walks up from the target path to the deepest component that currently exists on disk (`deepestExistingAncestor`), resolves *that* component with `fs.realpathSync` — which, unlike `path.resolve`/`path.relative`, does follow symlinks/junctions/reparse points — and throws if the real, physical location falls outside the base directory's own real location. When nothing under the base directory exists yet (the ordinary first-write case), the deepest existing ancestor is the base directory itself, which is trivially contained, so this can never block a normal write; it only fires when something already on disk is indirection. This was verified empirically against a real Windows directory junction before being written into the fix: `fs.existsSync` follows a junction, `fs.lstatSync(...).isSymbolicLink()` reports `true` for it, and `fs.realpathSync` correctly resolves it to its real target — exactly the primitives the new layer relies on. Both `readReceiptIfExists` and `writeReceipt` call `assertPhysicallyContained` immediately after computing the file path, before any filesystem read/write/mkdir operation.

**Regression tests** (`receipt-store.test.ts`, new `"round 2 -- physical containment against pre-existing filesystem indirection"` sub-suite, 5 tests): a pre-planted junction/symlink (a real one, created via `fs.symlinkSync(target, path, "junction")` on Windows or `"dir"` on POSIX — platform-appropriate, per the authorization) fails closed on write, with nothing written into the redirected sibling; the same indirection fails closed on lookup; an ordinary fresh receipts tree with no indirection is unaffected; a receipts directory that does not exist yet at all is unaffected (the critical non-regression case, since a naive "does baseDir contain this" check could easily break the first-ever write); and the original `../escaped` case remains contained with the physical layer active. No dependency was added — `fs.realpathSync`/`fs.symlinkSync`/`fs.lstatSync` are Node built-ins.

### F-02 — canonical persisted manifests

**Codex's exact reproduction:** commit two files, `z.md` and `a.md`, under an isolated fixture mission path. Run a valid envelope with `acceptance_refs: [z.md], closure_refs: [a.md]` into one fresh receipts directory, then the reversed `acceptance_refs: [a.md], closure_refs: [z.md]` into another, same commit and closure revision. Both fingerprints matched (expected — `computeSourceFingerprint` already sorted its own internal copy), but the two receipts' *persisted* `source_manifest` arrays retained their respective input orders (`[z.md, a.md]` vs `[a.md, z.md]`) instead of matching. `lib/fingerprint.ts`'s own `sortManifest` doc comment already claimed the sorted manifest "is itself persisted in the receipt" — `scripts/harvest.mjs` simply never called it for that purpose.

**Fix, `scripts/harvest.mjs` only, no hash-algorithm change, no new dependency:** immediately after resolving evidence references into a manifest, harvest.mjs now calls the existing, already-exported `sortManifest` (from `lib/fingerprint.ts`) exactly once, producing one `canonicalManifest`. That single canonical value is then used everywhere a manifest is needed: the fingerprint input, the `HARVESTED` receipt, the `SCREENED`/`VALIDATION_FAILED` receipt, the partial manifest persisted in an ineligible-reference failure receipt, and the file list read for screening. There is no longer a second, separately-ordered manifest anywhere in the harvester.

**Regression tests** (`harvest-cli.test.ts`, 2 new tests): reproduces Codex's exact `z.md`/`a.md` reversed-order scenario end-to-end through two real `runHarvest` invocations against two isolated ephemeral git repositories, asserting both runs produce the same fingerprint *and* the same persisted `source_manifest` path order; and a second test exercising the partial-manifest failure path (two resolvable references supplied out of order plus one unresolvable reference), asserting the `VALIDATION_FAILED` receipt's partial manifest is also canonically sorted.

### F-03 — safe malformed-JSON diagnostics

**Codex's exact reproduction:** a malformed JSON file containing only a synthetic canary (`"AKIA"` followed by sixteen zeros, an obviously-fake AWS-access-key shape, never a real credential) caused both `runHarvest` and `runValidate` to return a diagnostic string containing the *entire canary*, because both caught the `JSON.parse` exception and interpolated `error.message` directly — and V8's JSON parser error text can include a verbatim snippet of the offending input. This bypasses the content-screening boundary entirely, since it happens before any evidence is ever read into the scanner.

**Fix, `scripts/harvest.mjs` and `scripts/validate.mjs`, both entry points:** the single `try { JSON.parse(readFileSync(...)) } catch (error) { …\${error.message} }` block in each file is split into two separate, sequential try/catches. A **read failure** (e.g. the file does not exist) returns a fixed message that echoes only the caller-supplied *path* — safe, since that is the caller's own input, not file content. A **JSON parse failure** returns one fixed, generic string (`"...envelope file is not valid JSON"` / `"...is not valid JSON"`) with no interpolation of the parser's error text at all, so no input byte can ever reach it. Normal post-parse Zod schema-validation error detail is unchanged — this only touches the read/parse boundary that runs *before* schema validation and content screening.

**Regression tests** (`validate-cli.test.ts`, 3 tests; `harvest-cli.test.ts`, 1 test): the pre-existing "unreadable/unparseable file" test was split into a genuine parse-failure case and a genuine read-failure case (it previously conflated the two, matching exactly the ambiguity F-03 identified); a new canary test writes malformed JSON containing the synthetic AWS-key-shaped canary and asserts the returned diagnostic never contains it, for both `runValidate` and `runHarvest`.

### Scope discipline

Exactly 6 files touched: `organizational-learning/lib/receipt-store.ts`, `organizational-learning/scripts/harvest.mjs`, `organizational-learning/scripts/validate.mjs`, `organizational-learning/tests/receipt-store.test.ts`, `organizational-learning/tests/harvest-cli.test.ts`, `organizational-learning/tests/validate-cli.test.ts`. 0 new files, 0 dependencies added, `package-lock.json` unchanged (confirmed). No change to candidate/promotion authority, provenance architecture beyond the already-existing dangling-reference validator, source allowlisting, receipt-state vocabulary, the truthful-malformed-`mission_id`-payload rule, or scanner policy/pattern set. No real closed mission processed. No AI extraction, background automation, provider/network writes, Stage 2, or `SB-P-1.12` activation.

**Local verification for this correction round:**

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **247/247 passing**, 23 files (186 across 15 `organizational-learning/tests/` files, up from 176; the 8 pre-existing files and their 61 tests unchanged).
- `npm run build` — succeeds.
- Markdown Quality Gate on both revised report files — PASS.
- `package-lock.json` — confirmed unchanged.
- Empirical pre-implementation verification: a real Windows directory junction was created and probed with `fs.existsSync`/`fs.lstatSync`/`fs.realpathSync` (see Section 7's established convention of verifying git-plumbing behavior empirically before relying on it) to confirm the exact primitives `assertPhysicallyContained` relies on, and the fix was independently exercised against that exact junction shape (write and lookup both threw, nothing was written into the redirected target) before the formal test suite was written.

**CI on this correction's pushed head:** per the standing anti-recursion rule (Section 21), see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab and the live builder section of `communication/live/report.md` for the workflow run results on the exact current head, rather than a SHA restated here.

---

## 24. Stage 1 F-04 correction (Codex independent re-verification, round 3)

Codex's third independent re-verification (`communication/missions/SB-ORG-LEARNING-1.1/codex/03-stage1-independent-reverification.md`) independently reproduced all 186 OLE tests then in place and confirmed **F-01, F-02, and F-03 resolved** within its stated evidence reach — the first time a round closed with zero residual findings on those three. It then reproduced a new, fourth finding purely in the two CLI entry points. Mission Control accepted it and authorized this correction (`communication/missions/SB-ORG-LEARNING-1.1/mission-control/10-stage1-f04-correction-authorization.md`). Only this one correction is applied here; nothing else was changed.

### F-04 — platform-correct CLI main-module execution

**Codex's exact reproduction:** using `spawnSync(process.execPath, [absoluteScriptPath, ...args])` on the real Windows environment, invoking `node harvest.mjs --envelope <malformed.json> ...` and `node validate.mjs closure-envelope <malformed.json>` both returned **process status 0** with **empty stdout and empty stderr** — silent, false success — even though the *imported* `runHarvest`/`runValidate` functions correctly returned exit code 1 with the safe F-03 diagnostic when called directly. Every prior Stage 1 test (across all previous rounds) only ever imported and called those functions; none had launched the actual `node <script>.mjs` process, so this gap was invisible until Codex's instruction explicitly required process-level verification.

**Root cause:** both scripts' `isMainModule()` compared `import.meta.url` (always a canonical `file://` URL, e.g. `file:///C:/path/harvest.mjs` on Windows) to a hand-built `` `file://${process.argv[1]}` `` string. `process.argv[1]` is a native OS path (`C:\path\harvest.mjs` on Windows — backslashes, no leading slash), so the naive prefix never equals the canonical URL there. The comparison was silently always false, so the guarded `if (isMainModule()) { ... }` block — the only place either script calls its own runtime function, handles output, or sets `process.exitCode` — never executed when run as an actual OS process on Windows.

**Fix, one line changed per script, no dependency:** replaced the naive string comparison with Node's own standard, platform-correct idiom, `import.meta.url === pathToFileURL(process.argv[1]).href` (`node:url`'s `pathToFileURL`, already a Node built-in). This was verified empirically on this exact Windows environment *before* being written into the fix: a throwaway script confirmed the old comparison is `false` and the new one is `true` for direct execution, and a second throwaway check confirmed the new comparison correctly stays `false` when the same module is only *imported* by another entry point (proving the fix does not overcorrect into always-true). No business logic moved; `runHarvest`/`runValidate` remain the single authoritative implementation, called from exactly the same guarded block as before.

**Regression tests, a new file, `organizational-learning/tests/cli-process.test.ts`, 8 tests — the first Stage 1 tests that spawn the actual CLI as a real, separate Node process (`node:child_process`'s `spawnSync`, matching Codex's own reproduction method) rather than importing and calling a function:**

- malformed JSON via the real `node harvest.mjs` process, and separately via the real `node validate.mjs` process, both return nonzero with the safe "not valid JSON" diagnostic and never echo a synthetic secret-like canary in stdout or stderr;
- missing required CLI input (no `--envelope`; no schema argument) returns nonzero rather than silent success, for both scripts;
- valid synthetic input against the real process actually executes the command path and returns genuine success (`SCREENED` / `PASS`) — this is the exact assertion that was false before the fix, since the old code produced exit status 0 for both valid *and* invalid input on Windows, indistinguishably;
- importing either script from a separate entry-point script (itself spawned as a real, distinct Node process, so there is no module-cache ambiguity) produces no output and no nonzero exit — proving import alone never auto-runs the CLI path.

**The regression suite was proven genuine, not just passing by construction:** before finalizing, the F-04 fix was temporarily reverted (`git stash`) and the full `cli-process.test.ts` suite was re-run against the unfixed code. 6 of the 8 tests failed exactly as expected — every test that actually exercises the bug (malformed-input and valid-input process behavior, for both scripts) failed against the old code, while the 2 "importing does not auto-run" tests correctly continued to pass (that property was never broken by F-04, so a test suite that failed those too would itself have been wrong). The fix was then restored (`git stash pop`) and the full suite re-verified green. This before/after check is not itself part of the committed test suite — it is recorded here as evidence that the added tests would have caught this exact regression, not merely evidence that they pass now.

**Scope discipline:** exactly 3 implementation/config files touched (`organizational-learning/scripts/harvest.mjs`, `organizational-learning/scripts/validate.mjs`, `vitest.fast.config.ts`), 1 new test file, 0 dependencies added (`pathToFileURL` and `spawnSync` are both Node built-ins already used elsewhere in this codebase), `package-lock.json` unchanged (confirmed). F-01/F-02/F-03 designs, receipt/path containment, manifest ordering, and malformed-JSON diagnostic *content* were not touched — only the CLI entry-point's ability to actually reach that already-correct logic on Windows. No real closed mission processed. No AI extraction, background automation, provider/network writes, Stage 2, or `SB-P-1.12` activation.

**Local verification for this correction round:**

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **255/255 passing**, 24 files (194 across 16 `organizational-learning/tests/` files, up from 186 across 15; the 8 pre-existing files and their 61 tests unchanged).
- `npm run build` — succeeds.
- Markdown Quality Gate on both revised report files — PASS.
- `package-lock.json` — confirmed unchanged.
- Direct manual reproduction of Codex's exact scenario against the real CLI processes, before the formal test suite was written: both `node harvest.mjs` and `node validate.mjs` on malformed input now correctly report nonzero with the safe diagnostic (previously silent status 0); missing-argument and valid-input cases also independently confirmed by hand first.

**CI on this correction's pushed head:** per the standing anti-recursion rule (Section 21), see PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588)'s checks tab and the live builder section of `communication/live/report.md` for the workflow run results on the exact current head, rather than a SHA restated here.

---

## Stop statement

**STAGE 1 F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the single authorized F-04 correction (platform-correct CLI main-module detection in `harvest.mjs` and `validate.mjs`, plus genuine process-level regression tests) was applied; no scope was broadened. F-01, F-02, and F-03 designs were not reopened or redesigned. Not self-approved. Not merged. The real closed-mission proof was not begun. AI/semantic extraction was not begun. Background automation was not begun. Promotion execution was not implemented. Candidate/promotion authority, provenance architecture, source allowlisting, receipt-state vocabulary, manifest ordering, and scanner policy were not changed. Stage 2 was not activated. `SB-P-1.12` was not activated. Codex was not authorized by this report — the prior Codex `FAIL` disposition stands until Codex re-verifies again.
