# SB-P-1.12 — MC-173 Migration Plan Refinement and Evidence Closure Handover and STOP Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.36.md` (MC-173)
**Work package:** `SB-P-1.12-WP-MIGRATION-PLAN-REFINEMENT-AND-EVIDENCE-CLOSURE`
**Full report:** `communication/missions/SB-P-1.12/claude-code/38-stage13-migration-plan-refinement-and-evidence-closure.md`
**Status:** `CANDIDATE PLAN REFINED — SB-MIG-1.4 NON-EXECUTABLE — IMPLEMENTATION AUTHORIZATION WITHHELD`

## 1. Baseline

`main@96c15a9ac3607f2cb075fadbfbc24e8fef8f7362`. Every locked blob matches:

- Blueprint `77d52096`;
- EIS `c444f750`;
- Engineering Contract `3c9b01d9`;
- Build Prompt `3993b777`;
- Verification Checklist `453b598a`;
- FCTM `1650ff95`.

Both specialist reviews (PRs #705 and #706) and the MC-173 combined disposition were read in full.

## 2. Results (report section)

| Required output | Result |
|---|---|
| Corrected order (Section 2) | M-01 → M-02 → M-03 → M-04 → M-05 → M-06 → M-07 → M-14 → **M-09 → M-10 → M-11 → M-12 → M-08** → M-13a to M-13e → M-20 (G-7) → M-18 → M-17 (G-6) → M-15 → M-16 → M-19 (separate runtime authorization). `EC-CNF-02` is split deterministically: epoch rows in M-05 under `EC-KER-09`, the protocol in M-08. M-14 moves into WS-E so non-Owner Catalog provenance is legal before M-13d |
| Deterministic allocation (Section 3) | `EC-AUD-04` → M-07; `EC-CNF-03` → M-08 on generalized `confirmation_bindings`; `EC-PPM-01` → M-13d; no competing event or preview subsystem |
| M-06 contract (Section 4.1) | A dedicated `NOLOGIN NOINHERIT` reader role with `SELECT`-only rights. One `FOR SELECT TO reader USING (true)` policy per authority table, never including a client role. Reader-role policies call no function, so recursion is impossible by construction. Writes go only through separate writer executors. Empty `search_path`; schema-qualified references; `EXPLAIN` and timing gates |
| M-07, M-08 (Sections 4.2, 4.3) | One bounded human-context reference shape. `confirmation_bindings` is the only preview authority; link-preview tokens become read-only history at M-13d; the import ledger extends `catalog_import_rows` (proposal) |
| M-10 boundary (Section 5) | Six reversal preconditions. The first governed unlink or Auth deletion, tombstone, hold, or production lifecycle-command use closes the window permanently. After that, forward correction only; PITR is disaster recovery only |
| M-13 rules (Section 6) | Abort, revert and forward-correction rules per phase; exactly one authority path live at every step |
| M-13d retirement (Section 7) | 19 new signatures installed and 19 exact old signatures dropped in one transaction; exactly-19 assertion; `EXECUTE` checks; callers and types changed in the same checkpoint |
| Definer inventory (Section 8) | **28 live `SECURITY DEFINER` functions.** 19 Catalog functions are compliant in repository text (target M-13d). **9 parser-support functions are NON-COMPLIANT**: owned by the migration role, not a `NOLOGIN NOINHERIT` executor (target M-13e). **`correct_transaction`'s final repository definition is `SECURITY INVOKER`** (`20260720142248`), not `DEFINER` as `SEC-Q-9` stated from its first definition. It still uses `search_path = public` and holds an unrevoked `anon` `EXECUTE` from `20260727000000`. Target M-13b; live state UNVERIFIED |
| Handler inventory (Section 12) | 23 privileged query sites in 5 handlers (`catalog-import.ts`, `parser-lease.ts`). Each derives its business from the Owner-only `loadOwnedBusinessId`. **6 service-role updates filter by `id` only, with no `business_id` predicate** (H-08 to H-12, H-14). Target M-13e |
| FK and cascade inventory (Section 9) | 37 unique foreign-key edges. **17 distinct business cascades, not 18**: the 18th text hit is the byte-duplicate `transactions` migration. 8 are RETAINED → `RESTRICT` (EIS-cited), 1 is CANDIDATE EPHEMERAL, and **8 are UNRESOLVED, which blocks M-10**. No legal class was invented |
| Actor inventory (Section 10) | 18 actor columns; no current reconciliation evidence for any of them. Identity values in JSON payloads are UNRESOLVED. Zero-unresolved contract before M-09 |
| Clean replay (Section 11) | Four recorded exceptions must be reproduced: `20260719140000` (duplicate), `20260723200718`/`20260723200952` (`sandbox_exec`), `20260902140000` (environment-specific) |
| CLI rule (Section 13) | Guarded `scripts/supabase-cli.mjs` is required for every remote target-mutating operation. Bare remote target-mutating `supabase` CLI is prohibited. Production also needs `CONFIRM_PRODUCTION=yes` and explicit authorization |
| Checkpoint map (Section 14) | Supabase and Security pre-merge gates per group; review-only, so verifier eligibility is preserved |
| Evidence-closure matrix (Section 15) | 28 rows. CLOSED: 1 (ledger presence only). PARTIALLY EVIDENCED: 10. OPEN: 17. CI, runtime environment, G-6, backup/PITR, G-7 and the identity-deletion gate are all carried unchanged as OPEN |

**New decision for Mission Control — PLAN-Q-1 (EV-27).** Under the locked order, M-13d precedes M-15. A non-Owner principal holding a Catalog read in that interval would receive Reference Cost unconditionally, which `catalog_product_read` returns today.

- **Option B (recommended, keeps the EIS order):** until M-15, no Catalog capability is held by or grantable to a non-Owner.
- **Option A:** treat M-13d and M-15 as one atomic Catalog checkpoint. This needs a Mission Control disposition.

## 3. Branch, Paths and Actions

- **Branch:** `mission/SB-P-1.12-stage13-migration-plan-refinement`, created from `origin/main` at `96c15a9a`.
- **Changed paths:** exactly the full report and this file.
- **GitHub Actions at the baseline**, observed at 2026-10-01T13:55:31Z:
  - commit `96c15a9a` check runs: `total_count: 0`;
  - combined status: `state: pending`, `total_count: 0`;
  - repository workflow runs: `total_count: 0`.

  The state on the PR head is recorded in the PR handover comment. Missing runs are missing evidence, not a pass.

## 4. Not Done

No implementation, no SQL, no migration file or execution, no provider, test or production access or mutation, no Product Truth change, and no locked-artifact edit. Every inventory is repository-derived; live state remains UNVERIFIED where marked.

**MIGRATION PLAN REFINEMENT AND EVIDENCE CLOSURE SUBMITTED — STOP FOR MISSION CONTROL REVIEW**
