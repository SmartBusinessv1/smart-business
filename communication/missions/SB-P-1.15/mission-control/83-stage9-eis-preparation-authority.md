# SB-P-1.15 — MC-82: Stage 9 EIS Preparation Authority (Documentation Only)

**PROPOSED — effective only after Founder human merge and protected-main verification.** Founder requested “Stage 9 EIS” on 2026-10-12, interpreted as proceeding to the next Source 18 specification stage, NOT implementation or unreviewed EIS lock.

## 1. Gate verification and immutable inputs

Protected main at preparation: `39d14f853ae11af6196cf9106ada59bc7f711c23`; canonical MC-81 Stage 8 lock blob `9303c44d4a5fed3025a1bd47fdbbde87b98e5696`. Founder-approved locked Blueprint contents: Git blob **`0ab2ad6f12cedc54836d766bac7a2e9c0e1e03e5`**, presently at `docs/phase-1-mission-blueprint/active/SB-P-1.15.md`. PR #870 remains frozen OPEN/DRAFT at `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`; PR #898 frozen OPEN/DRAFT at `7371161b9cffca11932657c085cdca0e5285d964`. No changes/merge/close to either.

**Lifecycle location discrepancy to resolve before EIS write:** Source 18 Stage 8 and §5 specify a locked Blueprint at `docs/phase-1-mission-blueprint/completed/SB-P-1.15.md`, while MC-81's exact-binary lock was recorded over the `active/` path. The locked **content** is valid and preserved, but source-location synchronization has not been independently established. Claude Code shall first return a no-write verification showing whether the same exact blob is now under `completed/`; if not, report a narrow Source 18-compliant administrative relocation proposal that preserves the exact blob and Founder lock, for separate Mission Control/Founder approval. **No unilateral move or content mutation.** EIS file creation is contingent on that location gate being properly reconciled.

## 2. Stage 9 owner, deliverable and boundaries

**Owner:** Mission Control-appointed Claude Code, EIS drafter, separate from independent EIS review.

**Permitted Stage 9 deliverable after the location gate is resolved and documentation-write authority issued:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.15-EIS.md`, status **DRAFT — MISSION CONTROL REVIEW REQUIRED**. Source 18 Stage 9 requires locked Blueprint plus live repository architecture, integrated six specialist findings and Stage 7 material-assurance disposition, and **bidirectional FCTM traceability**: each of all **694 IN SCOPE** FCTM row IDs maps to realizable EIS obligations, every EIS requirement maps to at least one source row, and any orphan is explained and screened for T3. Preserve the inherited U-3 `20-§23-10` cross-mission split, no silent FCTM reclassification.

Mandatory specification domains: schema/migration order and birth-safe defaults, RLS/roles/auth/current grants, tenant and privileged worker isolation, single governed DTX/PQ-2 finance path, deterministic correction-aware Ledger facts, strictly read-only/zero-write Ask CFO with prompt-injection barriers, scheduler lease/fencing/idempotent logical work/unknown-outcome handling, owner-confirmed business IANA timezone and MC-75 prospective D2/D3, true generated/scheduled/source-as-of briefing provenance, native-only notification states and recipient rechecks, unactivated H-CORR corrective mission, migration rollback-versus-forward-fix and restore, retention/minimization/audit/ops and objective verification gates.

**Mandatory regression test specification (no execution):** Restore obsolete **06:00 and 09:15** schedule artifacts and verify neither can activate nor dispatch, while approved **07:00 / 10:30 / 22:00** business-local slots are accepted. Include negative-path permissions, cross-tenant and service-role denials, revoke-at-execution, no financial/AI writes, idempotency and restoration scenarios.

Preserve five Critical consequence risks `4-§16-1`, `24-§16-1`, `22-§23-2`, `22-§28-9`, `22-§29-3` and their proof gates; exact private §8.5/H-PAR per-row evidence limitations, draft-annex noncanonical status, U-5, DC-06, D17/D18, provider and CI/runtime unavailable evidence. No fabricated runtime readiness, tests or provider access. An infeasible locked requirement or Product Truth conflict triggers Source 18 T8; new product behavior/orphan EIS requirement triggers T3.

## 3. Immediate authorized action and subsequent sequence

After Founder human merges MC-82 and main verification, authorize **read-only Stage 9 source-pack and locked-path preflight** by Claude Code. Claude Code returns the exact location, Git blobs, source list and proposed EIS structure, plus any administrative move request. **STOP** for Mission Control disposition of the locked-path discrepancy. Once synchronized under separate authority, Mission Control may authorize one documentation-only Draft EIS PR from a fresh protected-main base, with exactly the Stage 9 EIS path changed and a complete 694-row bidirectional validator and concise Stage 9 report in the PR description. Founder human-merges only after Mission Control review. No Stage 10 acceptance or Stage 11 EIS lock by this authority.

## 4. Absolute limits

No application code, Supabase/SQL execution, migrations, runtime/negative tests, provider connection, deployment, implementation, Stage 10–13 work, Stage 11 lock, Stage 8 Blueprint content changes, Source 18/FCTM/FPDR mutations, 07e publication, or changes/merges to frozen PRs #870/#898. **STOP FOR FOUNDER HUMAN MERGE OF THIS ONE-FILE GOVERNANCE PR.**
