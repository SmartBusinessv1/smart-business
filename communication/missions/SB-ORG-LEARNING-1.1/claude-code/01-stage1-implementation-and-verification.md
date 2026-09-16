# SMART BUSINESS — CLAUDE CODE STAGE 1 IMPLEMENTATION AND VERIFICATION

# SB-ORG-LEARNING-1.1 — Stage 1: Contracts, Security Boundaries & Deterministic Harvester Foundation

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`
**Builder:** Claude Code
**Status:** `STAGE 1 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-16 (original implementation); correction round recorded the same day
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`
**Base main at Stage 1 opening (verified):** `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`
**Stage-opening Mission Control commit (verified):** `f04756c7ec04929151dc54573e4235299dc6cd78`

**Implementation commits actually tested (historical, immutable — each was verified individually; see Section 13 for exact per-commit CI evidence):**

- `7198ee6a68373a2ff8080e021fb8871583b012ac` — Phase A + Phase B implementation.
- `6ccedcdd0fe4a48507a85d755e124067bf98187a` — added the original durable report.
- `2c15e2d309e13c16f37066cb25feb1f924d5750e` — a since-abandoned attempt to keep a "final head" pointer current; superseded by this correction, which removes that pattern instead of continuing it (see Section 21).
- This correction's own commit(s) — the dangling-provenance validator and this report revision. Consistent with Correction 2 below, this report does not assert its own commit SHA as a "final" fact, since doing so inside the very file being committed is self-invalidating the moment it is committed.

**Current exact-head CI source of truth:** pull request [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588) and its GitHub Actions checks tab. This report intentionally stops trying to name a single "final branch-head commit" — see Section 21.

**Controlling build plan:** `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`
**Mission Control substantive review:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/04-stage1-substantive-review.md`
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

`lib/receipt-store.ts` derives `receipt_id` from `(mission_id, source_fingerprint)` only — never from `run_id` — so re-running the harvester against an unchanged closure envelope always resolves to the same receipt file and updates it atomically in place (write-to-temp-then-rename) rather than accumulating duplicate receipts. `run_id` (a fresh UUID) is the separate "processing-run identity" B7 requires to vary across retries even when the source fingerprint does not. `isAlreadyProcessed` is `true` only for `processing_state === "SCREENED"` — a prior `VALIDATION_FAILED` receipt remains retryable, never treated as done. 8 tests, `receipt-store.test.ts`, including one proving atomic-write behavior and one proving a second write for the same identity updates the existing file rather than creating a second one.

`harvest-cli.test.ts` proves this end-to-end: running the same envelope twice against the same ephemeral repo yields exit code 0 with an "already processed" message on the second run, with no second receipt file created.

---

## 11. Receipt-state model and harvester behavior

`schemas/receipt.schema.ts`'s `PROCESSING_STATES` reproduces B7's recovery-state list verbatim (`NOT_STARTED, HARVESTED, SCREENED, EXTRACTION_ATTEMPTED, VALIDATION_FAILED, CANDIDATE_READY, PUBLICATION_PENDING, PUBLISHED, SUPERSEDED_OR_REOPENED`) so later stages extend one lifecycle rather than inventing a parallel one. Stage 1's harvester can only ever reach three of these: it writes an intermediate `HARVESTED` receipt before screening (so a crash mid-screen leaves a recoverable state rather than nothing), then a final `SCREENED` (clean success) or `VALIDATION_FAILED` (any failure) receipt. `VALIDATION_FAILED` requires a non-empty `failure_reason` at the schema level — a receipt cannot claim failure without saying why.

`scripts/harvest.mjs`'s `runHarvest(argv)` is exported (not only invoked as `node harvest.mjs`) specifically so tests can call it directly and assert on both its return value and the receipt file it wrote, without spawning a subprocess per test case. Evidence resolution is all-or-nothing by design: if *any* referenced path is not allowlisted or does not resolve to a regular file at the pinned commit, the whole run fails closed (`VALIDATION_FAILED`) rather than silently proceeding on partial evidence — documented in-file as a deliberate, conservative choice, not an oversight.

`harvest-cli.test.ts` (9 tests) exercises the full pipeline end-to-end against isolated ephemeral repositories and temp directories only, covering: clean success; idempotent no-op on re-run; a `communication/live/**` reference (rejected); a nonexistent path (rejected); a symlink reference (rejected); a quarantined secret in evidence content (rejected, and the receipt/message are asserted not to contain the raw secret text anywhere); a schema-invalid envelope (rejected, with a best-effort receipt still written under the envelope's claimed `mission_id` when parseable); a nonexistent `source_snapshot_ref` commit (rejected); and the missing-argument case.

`scripts/validate.mjs` is a small, independent CLI for checking an arbitrary JSON file against any of the four schemas; 5 tests, `validate-cli.test.ts`.

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
| `receipt-store.test.ts` | 8 |
| `harvest-cli.test.ts` | 9 |
| `validate-cli.test.ts` | 5 |
| **Total** | **159 across 15 files** in `organizational-learning/tests/`, plus the 8 pre-existing Fast Gate files unchanged (total Fast Gate: **220 tests, 23 files**) |

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

## Stop statement

**STAGE 1 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the two authorized corrections were applied; no scope was broadened. Not self-approved. Not merged. The real closed-mission proof was not begun. AI/semantic extraction was not begun. Background automation was not begun. Promotion execution was not implemented. Stage 2 was not activated. `SB-P-1.12` was not activated. Codex was not authorized by this report.
