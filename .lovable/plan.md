## SB-P-1.10-TV-1.0 — Technical Verification Closure Plan

Scope: close the nine Follow-up items from Appendix A of the Verification Checklist through evidence collection only. No implementation, schema, or governance changes. Only permitted targets are `docs/implementation/SB-P-1.10/evidence/`, `verification-checklist.md`, and `completion-report.md`.

### The nine Follow-up items

1. §4 Observability — metrics pipeline evidence
2. §5 Negative-stock warning + confirmation UI screenshot
3. §9 Automated test coverage for §16 obligations
4. §9 Tests execute successfully
5. §9 RLS + business-isolation automated test
6. §9 Concurrency automated tests
7. §9 Traceability to §16 obligations
8. §10 Automated test results
9. §10 Query-plan / performance evidence

### Verification approach per item

**RLS + business isolation (item 5)** — verifiable now via psql: attempt cross-business SELECT/INSERT/UPDATE/DELETE against `inventory_items` and `inventory_movements` using a second business context; archive the outputs (expected: denied by RLS). Structural evidence already recorded (D-04, D-05); this adds runtime proof. If verification succeeds, mark Pass.

**Concurrency (item 6)** — verifiable now via psql: issue two `create_inventory_movement` calls with (a) same idempotency key + same payload (expected: same movement returned, single row inserted) and (b) same key + differing payload (expected: conflict error). Archive outputs. If successful, mark Pass.

**Query-plan / performance (item 9)** — verifiable now via psql: `EXPLAIN (ANALYZE, BUFFERS)` on the list-aggregation query (`inventory_current_stock_batch`), the item list SELECT with owner filter, and the movement history SELECT. Archive plans showing index usage from D-09. Mark Pass.

**Negative-stock UI screenshot (item 2)** — requires an authenticated runtime session. Sandbox reported `LOVABLE_BROWSER_AUTH_STATUS=signed_out` previously; retry once. If still unavailable, request a Founder screenshot of the negative-stock confirmation dialog (single scenario: attempt an adjustment_decrease exceeding current stock on the "Milk" item) and archive it as `F-03`. If neither is possible, leave as Follow-up with an explicit justification and a one-step Founder action item.

**Observability metrics (item 1)** — no metrics pipeline exists in the current implementation scope (SB-P-1.10 EIS did not authorize one). Record as Follow-up with formal justification: metric emission is out of scope for Phase 1; error taxonomy (e.g. `NEGATIVE_STOCK`) is the only observability surface authorized, and it is present.

**Automated test suite (items 3, 4, 7, 8)** — no test framework exists in the repository. Adding one is out of scope for a verification-closure mission (no implementation changes authorized). Record as Follow-up with formal justification and a recommendation for a dedicated future mission (`SB-P-1.10-TESTS-1.0`) to author the suite.

### Expected outcome

- Items 5, 6, 9 → Pass (three new Pass) via new database evidence.
- Item 2 → Pass if Founder screenshot obtained; otherwise Follow-up with justification.
- Items 1, 3, 4, 7, 8 → remain Follow-up with formal justifications (out of authorized scope for this mission).

Projected totals if Founder screenshot obtained: Pass 47 / Fail 0 / Follow-up 5 (all justified). If not: Pass 46 / Follow-up 6.

### Deliverables

- New evidence files under `docs/implementation/SB-P-1.10/evidence/database/` (RLS probe, concurrency probe, query plans) and, if applicable, `evidence/founder/F-03_negative_stock_confirmation.png`.
- Updated `evidence/README.md` index referencing the new artifacts.
- Updated Appendix A of `verification-checklist.md` (append-only, template unchanged) with revised per-item results, evidence references, and updated totals.
- Updated Sections 5, 6, 7 of `completion-report.md` reflecting resolved items and remaining justified Follow-ups. Sections 10 and 11 untouched.
- Markdown quality gate + repository sync (working tree clean, commit SHA reported).

### Non-goals

- No changes to schema, functions, policies, migrations, frontend, or backend code.
- No changes to Blueprint, EIS, Engineering Contract, or Lovable Build Prompt.
- No new test framework (would require a separate authorized mission).

### Open question for Mission Control

For Follow-up item 2 (negative-stock confirmation UI screenshot): is Mission Control willing to supply one Founder screenshot of the negative-stock confirmation dialog, or should the item remain Follow-up with justification pending a future runtime-verification mission?
