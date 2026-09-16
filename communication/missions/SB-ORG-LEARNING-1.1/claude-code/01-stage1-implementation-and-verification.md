# SMART BUSINESS — CLAUDE CODE STAGE 1 IMPLEMENTATION AND VERIFICATION

# SB-ORG-LEARNING-1.1 — Stage 1: Contracts, Security Boundaries & Deterministic Harvester Foundation

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`
**Builder:** Claude Code
**Status:** `STAGE 1 IMPLEMENTATION REPORTED — MISSION CONTROL SUBSTANTIVE REVIEW REQUIRED`
**Date:** 2026-09-16
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1-successor`
**Base main at Stage 1 opening (verified):** `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`
**Stage-opening Mission Control commit (verified):** `f04756c7ec04929151dc54573e4235299dc6cd78`
**Final branch-head commit:** `7198ee6a68373a2ff8080e021fb8871583b012ac`
**Pull request:** [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588) (open, targeting `main`, not merged, not self-approved)
**Controlling build plan:** `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`
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

`schemas/provenance.schema.ts`'s `EvidenceReferenceSchema` validates shape only: `repository` (locked to the literal `SmartBusinessv1/smart-business` — a reference cannot silently point elsewhere), `commit_sha`/`blob_sha` (40-hex), `path` (structurally safe, via the shared path-safety refinement), `locator`, `actor_class`, `scope`, and `relationship` (`SUPPORTS | CONTRADICTS | LIMITS`). It deliberately does **not** verify that the reference actually resolves to a real object at that path/commit — that requires I/O against the pinned commit and is a distinct, explicit `DanglingCheckResult` type this file declares for a later stage to implement against the git-object reader, rather than something a pure Zod refinement can decide. `isSameUnderlyingSource` identifies when two references point at the same exact evidence, which is what a later stage's "citing the same source twice is not independent corroboration" logic would key off of — the detection *logic* itself is out of Stage 1 scope (see Section 12).

Provenance is modeled **per-claim**, not per-item: `CandidateClaimSchema` requires `evidence: z.array(EvidenceReferenceSchema).min(1)` — an unsupported claim cannot validate. Nothing in this schema records git-committer identity as an authority signal (B2: "git authorship does not prove decision authority") — there is no field for it.

10 tests in `provenance.schema.test.ts`.

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
| `closure-envelope.schema.test.ts` | 11 |
| `candidate-learning-item.schema.test.ts` | 21 |
| `promotion-review.schema.test.ts` | 10 |
| `receipt.schema.test.ts` | 12 |
| `screening.test.ts` | 12 |
| `git-object-reader.test.ts` | 13 |
| `receipt-store.test.ts` | 8 |
| `harvest-cli.test.ts` | 9 |
| `validate-cli.test.ts` | 5 |
| **Total** | **150 across 14 files** in `organizational-learning/tests/`, plus the 8 pre-existing Fast Gate files unchanged (total Fast Gate: **211 tests, 22 files**) |

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

**Real CI, PR [`#588`](https://github.com/SmartBusinessv1/smart-business/pull/588), commit `7198ee6a68373a2ff8080e021fb8871583b012ac`:**

| Check | Result | Duration |
|---|---|---|
| Lint (ESLint + Prettier) | **pass** | 22s |
| Typecheck (tsc --noEmit) | **pass** | 30s |
| Build (vite build) | **pass** | 27s |
| Fast Tests (vitest) | **pass** | 21s |
| Full Assurance Tests (vitest) | **pass** | 4m3s |
| Markdown Quality Gate | **pass** | 6s |

All six required/applicable repository checks passed on the exact pushed branch head. Full Assurance ran because this stage's `package.json`/`vitest.fast.config.ts` edits matched its path filter; no Supabase-dependent code was touched by Stage 1, and its pass is unsurprising but is included here as real, not assumed, evidence.

A pull request (`#588`, targeting `main`) was opened only so these workflows — which trigger on push-to-`main` or pull-request-to-`main`, not on a bare feature-branch push — would actually run against this exact head, per the Stage 1 instruction's "push to the authorized Stage 1 branch and allow real CI to verify the exact head." The PR is open, unreviewed, and not self-approved or self-merged.

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

These are reasonable readings, not authoritative ones — flagged explicitly for Mission Control to confirm or correct before Stage 2:

1. **`merge/active/**` excluded from the evidence allowlist.** The final build plan's evidence order (B3) lists current governance as authority *context*, distinct from evidence to extract lessons from. Stage 1 reads this as: the harvester's evidence allowlist should not include it, since a future semantic-extraction stage loading governance for interpretation is a different concern from what counts as harvestable evidence bytes. If Mission Control intends `merge/active/**` to be harvestable evidence too, `sources/allowlist.ts` needs one line changed and the corresponding allowlist test updated.
2. **All-or-nothing evidence resolution.** If any envelope-referenced path is ineligible or unresolvable, the entire harvest run fails closed rather than proceeding on the resolvable subset. An alternative design (partial harvest with the ineligible refs reported as a warning) was considered and rejected as inconsistent with "source eligibility is not authority" applied to the envelope itself — an authoritative closure record naming evidence the harvester cannot actually read is a discrepancy worth surfacing, not silently working around.
3. **Receipt `mission_id` uses a plain string, not the strict `SB-*` pattern the closure envelope enforces.** A receipt must remain writable to truthfully record a validation failure even when the envelope's own `mission_id` was itself malformed — the envelope schema is where mission-ID validity is actually enforced; the receipt schema's job is to record what happened, including malformed input.
4. **`VALIDATION_FAILED` is the one Stage-1-reachable state for every kind of harvest failure** (envelope-invalid, unresolvable-commit, ineligible-reference, and not-clean-screening all map to it), since Stage 1 has no `EXTRACTION_ATTEMPTED`/`CANDIDATE_READY`/etc. to distinguish among — those only become reachable once later stages exist to produce them.

---

## 17. Unresolved risks

- The Stage 1 heuristic scanner (`DEFAULT_SECRET_PATTERNS`) is intentionally minimal (JWT, PEM header, AWS access-key ID) and is explicitly documented as not a production secret-scanning replacement. Before Stage 2 processes any real evidence, Mission Control should decide whether to expand this pattern set or wire in a stronger scanner (e.g. `gitleaks`, already present in this repository per the SB-ORG-LEARNING-1.0 reviews).
- No cycle/dangling-reference detection exists yet for `supersedes`/`superseded_by` beyond the one structural check already in place (a promotion record cannot supersede or be superseded by itself). Full graph-level detection needs a populated registry to check against, which does not exist until a later stage.
- `harvest.mjs`'s `discoverRepoRoot()` (used only when `--repo-root` is not explicitly passed) shells out to `git rev-parse --show-toplevel` with inherited stderr — this is fine for the intended human-CLI use case but was not exercised by any test (every test passes `--repo-root` explicitly against an ephemeral repository).

## 18. Assumptions

- `mission_class`, `final_disposition`, and `closure_revision` in the closure-envelope schema are validated as non-empty strings only, not closed enums, since no repository convention or controlling document defines a fixed vocabulary for them today.
- The closure envelope's `retained_followups` field is free text, not paths, and is therefore excluded from the evidence manifest — only `acceptance_refs` and `closure_refs` are treated as harvestable evidence references.

## 19. Follow-ups (for Mission Control, not self-authorized)

- Confirm or correct the two interpretive decisions in Section 16 (allowlist scope, all-or-nothing resolution) before Stage 2 design is finalized.
- Decide the Stage 1 heuristic-scanner risk in Section 17.
- When Stage 2 is authorized, the recommended proof target remains `SB-OPS-CI-ARCHITECTURE-1.0` per the controlling build plan — not executed here.

---

## 20. Recommended Stage 2 handoff (not an activation)

Stage 1's contracts and deterministic harvester foundation are in place and verified against both local checks and real CI on the pushed head. A credible Stage 2 would:

1. Author one real closure envelope for `SB-OPS-CI-ARCHITECTURE-1.0` (or another already-closed mission Mission Control designates) by hand, referencing its actual durable acceptance/closure records.
2. Run `node organizational-learning/scripts/harvest.mjs --envelope <that envelope>` manually against the real repository for the first time, and review the resulting receipt.
3. Only then, in an authorized AI mission session (not a CI-embedded model call, per the SB-ORG-LEARNING-1.0 review's accepted direction), draft one candidate learning item from that harvested manifest and validate it against `schemas/candidate-learning-item.schema.ts`.

This report does not activate Stage 2. Stage 1 completion is not `SB-ORG-LEARNING-1.1` completion — Stages 2–6 remain, and `SB-P-1.12` remains not activated.

---

## Stop statement

**STAGE 1 IMPLEMENTATION REPORTED — MISSION CONTROL SUBSTANTIVE REVIEW REQUIRED**

Not self-approved. Not merged. The real closed-mission proof was not begun. AI extraction was not begun. Background automation was not begun. Stage 2 was not activated. `SB-P-1.12` was not activated.
