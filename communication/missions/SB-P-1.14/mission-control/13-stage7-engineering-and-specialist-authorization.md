# SB-P-1.14 — Stage 7 Engineering Review and Independent Specialist Authorization

**Mission Control decision ID:** SB-P-1.14-MC-11  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Prepared:** 2026-10-08 IST  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE OF THIS SEPARATE AUTHORIZATION PR AND MISSION CONTROL POST-MERGE VERIFICATION  
**Canonical reconciliation:** PR #821  
**Canonical main:** `feb0f522b7093bd1105d3acc8ffdf834465e9bba`  
**Engineering Review owner:** Claude Code  
**Independent specialist domains:** Security & RLS/Grants; Transaction & Financial Integrity; UDI / AI Interpretation Safety; Storage / Provider Readiness; Migration / Data-Transition Safety

## 1. Canonical Stage 7 baseline

Mission Control verifies:

- PR #821 is human-merged;
- canonical merge commit is `feb0f522b7093bd1105d3acc8ffdf834465e9bba`;
- Blueprint v0.2 Sections 1–19 are canonical;
- FCTM remains 766 rows;
- 563 rows remain `IN SCOPE`;
- 203 rows remain non-`IN SCOPE`;
- FPDR-1 through FPDR-4 are canonical;
- B6-01 is cleared by FPDR-4;
- Stage 6 is COMPLETE / CANONICAL;
- Stage 7 has not begun.

## 2. Stage 7 owner and outputs

After this authorization is human-merged and Mission Control verifies the merge, Claude Code may perform Source 18 Stage 7 Engineering Review.

Required outputs:

1. append `20. Engineering Review`;
2. append `21. Engineering Questions, Risks & Recommendations`;
3. include an early delivery plan covering:
   - environments;
   - expected migrations and rehearsal needs;
   - cross-mission dependencies;
   - applicable CI tiers;
   - Stage 1 scope flags;
   - provider/storage activation dependencies;
4. provide a feasibility/risk finding for **every one of the 563 IN SCOPE FCTM rows**;
5. preserve any blocked/unsafe/infeasible row as `IN SCOPE` and mark it blocked with reason;
6. raise T8 rather than quietly narrowing or moving such a row;
7. explicitly disposition all Stage 6 findings B6-02 through B6-19 and carry FPDR-4 as settled Product Truth.

Claude Code may not edit Sections 1–19 except for the exact metadata/change-log permissions below.

## 3. Mandatory specialist separation

Claude Code authored Sections 1–19 and performed Stage 6 Builder Review.

Source 18 permits Claude Code to own Stage 7, but SB-P-1.14 materially touches:

- authority and permissions;
- RLS and grants;
- idempotency and concurrency;
- financial transaction integrity;
- migrations/data transition;
- external durable object storage;
- document/AI interpretation and prompt-injection safety.

Independent specialist review is therefore mandatory.

Claude Code may not perform or author the independent specialist reports.

Specialists may run in parallel with Engineering Review, but affected Engineering findings may not be accepted or relied upon until the corresponding independent specialist report is complete and dispositioned by Mission Control.

## 4. Independent specialist appointments

Each specialist report must be produced by an actor/session that did not author SB-P-1.14 Sections 1–19 or the Stage 6 Builder Review.

Each report must state:

- actual actor/model/provider/session or room;
- prior contribution to SB-P-1.14;
- independence assessment;
- correlated-assumption risks;
- read-only evidence used;
- finding IDs, severity, affected FCTM rows;
- T2/T3/T6/T7/T8 screen;
- whether any Stage 7 finding must be held.

If independence cannot be established, that report is invalid and affected Stage 7 findings remain pending.

### S7-SP-1 — Security, Permissions, RLS & Grants

Review:

- SB-P-1.12 authority-kernel consumption;
- active-business context;
- business isolation;
- Owner/Manager/Employee scope;
- create ≠ read-all/export-all;
- current grants and default privileges;
- RLS policy shape for new tables;
- execution-time revalidation;
- confirmation binding;
- service-role boundaries;
- document/media access;
- signed retrieval / permission revocation windows;
- audit/provenance;
- direct DML versus governed command paths.

Required output:

`communication/missions/SB-P-1.14/specialists/01-stage7-security-rls-grants-review.md`

### S7-SP-2 — Transaction & Financial Integrity

Review:

- four-state Ledger widening;
- preservation of existing sale/purchase history;
- FPDR-1 and FPDR-4;
- credit direction;
- repayment linkage;
- no duplicate credit row for credit-method sales;
- totals / no-double-counting;
- correction continuity;
- idempotency / retries / unknown outcomes;
- concurrency;
- governed transaction-command reuse;
- opening-stock writes;
- import per-row behavior;
- downstream SB-P-1.16 compatibility.

Required output:

`communication/missions/SB-P-1.14/specialists/02-stage7-transaction-financial-integrity-review.md`

### S7-SP-3 — UDI / AI Interpretation Safety

Review:

- document intake and interpretation boundary;
- deterministic CSV/XLSX versus AI interpretation;
- prompt injection / document-borne instruction resistance;
- PDF active-content safety;
- spreadsheet formula injection;
- ambiguity handling;
- exact reviewed interpretation;
- FPDR-3 material-target fingerprint;
- false-success / hallucination risk;
- provider data controls;
- model output as evidence, never authority;
- context minimization;
- failure/retry behavior.

Required output:

`communication/missions/SB-P-1.14/specialists/03-stage7-udi-ai-safety-review.md`

### S7-SP-4 — Storage / Provider Readiness

Review:

- provider-independent object identity;
- control-plane versus object-store separation;
- credential boundaries;
- Cloudflare R2 activation gate;
- signed URL / proxy trade-offs;
- revocation window;
- two-phase ingest;
- orphaned object / metadata states;
- object lifecycle and FPDR-2 discard;
- raw voice not durable by default;
- provider lifecycle-rule capability;
- rollback;
- outage/failure behavior;
- AWS S3 transient-seam boundary;
- `UNVERIFIED — ACCESS REQUIRED` provider facts.

Required output:

`communication/missions/SB-P-1.14/specialists/04-stage7-storage-provider-readiness-review.md`

### S7-SP-5 — Migration / Data-Transition Safety

Review:

- additive `transaction_type` widening;
- live CHECK-constraint changes;
- function-signature changes;
- generated-type regeneration;
- new document/media/provenance/import tables;
- default grants and same-migration RLS/revokes;
- migration ordering behind SB-P-1.12/SB-P-1.13 prerequisites;
- rehearsal;
- rollback;
- no historical sale/purchase rewrite;
- no backfill that creates duplicate credit rows;
- delivery-repository / production-ledger unknowns;
- data transition and verification requirements.

Required output:

`communication/missions/SB-P-1.14/specialists/05-stage7-migration-data-transition-review.md`

## 5. Specialist authority limits

Specialists may:

- inspect canonical sources and repository read-only;
- identify risks;
- classify findings;
- recommend refinements;
- raise T2/T3/T6/T7/T8 candidates;
- submit exactly one report in their authorized path.

Specialists may not:

- redefine Product Truth;
- edit the Blueprint;
- edit the FCTM;
- alter Founder decisions;
- authorize implementation;
- approve the mission;
- issue competing instructions;
- access or mutate provider/production state;
- modify code, SQL, migrations, configuration or workflows;
- self-merge.

All specialist findings are inputs to Mission Control only.

## 6. Stage 6 findings that must be carried

Engineering Review must explicitly disposition or carry:

- B6-02 — transaction-surface widening / explicit credit direction;
- B6-03 — totals treatment;
- B6-04 — governed transaction-command cut-over / audit-safe writes;
- B6-05 — UDI/parser/runtime constraints;
- B6-06 — material-field confirmation fingerprint;
- B6-07 — original-proof versioning;
- B6-08 — storage control-plane / signed-access / ingest;
- B6-09 — FPDR-2 discard timing;
- B6-10 — default privileges / RLS-grants;
- B6-11 — idempotency / unknown outcome;
- B6-12 — document prompt injection / spreadsheet formula injection;
- B6-13 — free-text counterparty search boundary;
- B6-14 — opening-stock convergence;
- B6-15 — provider/runtime facts still unverified;
- B6-16 — upstream implementation chain;
- B6-17 — failure-state design;
- B6-18 — migration/topology;
- B6-19 — merchant-language continuity.

B6-01 is resolved by FPDR-4 and must not be reopened absent new evidence.

## 7. Engineering Review per-row finding rules

For every `IN SCOPE` row, Stage 7 must record:

- row ID;
- relevant Blueprint section;
- source;
- engineering feasibility;
- architecture/security/provider implications;
- dependency status;
- risk level;
- verification implication;
- specialist dependency, if any;
- finding classification: `PASS`, `FOLLOW-UP`, or `BLOCKED`.

`NOT APPLICABLE` is not permitted for an `IN SCOPE` row.

A blocked row remains `IN SCOPE`.

No Stage 7 finding may:

- change disposition;
- change owning mission;
- change build commitment;
- change commercial classification;
- move work between missions;
- weaken FPDR-1 through FPDR-4;
- pull authoritative customer-credit balance truth into SB-P-1.14;
- bypass SB-P-1.12 or SB-P-1.13.

If any such change appears necessary, stop the affected finding and raise the appropriate trigger.

## 8. Exact Claude Code writable scope

After effectiveness, Claude Code uses branch:

`mission/SB-P-1.14-stage7-engineering-review`

Writable paths:

- `docs/phase-1-mission-blueprint/active/SB-P-1.14.md`
- `communication/missions/SB-P-1.14/claude-code/11-stage7-engineering-review-report.md`
- `communication/live/report.md`
- `communication/missions/SB-P-1.14/README.md`
- `communication/missions/SB-P-1.14/decision-log.md`
- `communication/missions/SB-P-1.14/handover-log.md`

Blueprint write permissions are limited to:

1. append `## 20. Engineering Review`;
2. append `## 21. Engineering Questions, Risks & Recommendations`;
3. update only Metadata:
   - Lifecycle Stage;
   - Status;
   - Engineering Review;
   - Mission Control Review;
4. append one Section 18 change-log row for the Stage 7 draft.

Every other byte of Sections 1–19 remains unchanged.

The FCTM and Founder records are read-only.

## 9. Specialist Git/write scope

Each specialist writes only its designated report path under:

`communication/missions/SB-P-1.14/specialists/`

No shared engineering branch is required.

If a specialist environment cannot safely commit, the Founder may return the complete specialist report text to Mission Control for controlled repository recording. Mission Control must not rewrite specialist conclusions.

## 10. Stage 7 stop conditions

### Mission-wide stop

Stop all Stage 7 work if:

- this authorization is not canonical;
- canonical main changes a governing source or writable target materially;
- a required specialist cannot be validly appointed/identified;
- Stage 7 cannot proceed without unauthorized provider/production access;
- branch/path conflict occurs;
- validation fails in a way that undermines the draft.

### Finding-scoped hold

Hold only affected findings where:

- provider/account/runtime evidence remains `UNVERIFIED — ACCESS REQUIRED`;
- SB-P-1.12/SB-P-1.13 implementation evidence is unavailable;
- a corresponding specialist review is pending;
- a new Founder/product decision may be needed.

### T8

Any Product Truth conflict, infeasibility or security/integrity finding:

- keeps the row `IN SCOPE`;
- marks it `BLOCKED`;
- stops dependent work;
- escalates to Mission Control immediately.

## 11. Provider/runtime evidence boundary

No provider or production access is authorized by this package.

Where repository-only evidence is insufficient, Stage 7 records:

`UNVERIFIED — ACCESS REQUIRED`

This includes, as applicable:

- R2 account availability/capabilities/region/lifecycle rules;
- live production hosting runtime;
- AI provider document data controls;
- live storage policies and effective grants;
- production credit-method rows;
- test-project state;
- AWS non-production parser account.

Mission Control may separately authorize read-only evidence collection later.

## 12. Not authorized

No:

- Stage 8 Founder approval;
- Blueprint lock;
- EIS;
- implementation package;
- application code;
- SQL/schema/migration execution;
- provider activation/purchase;
- Supabase/Auth/key mutation;
- production access/mutation;
- workflow/branch-protection changes;
- delivery synchronization/publication;
- OLE promotion;
- self-approval/self-merge.

## 13. Submission gate

Claude Code submits one DRAFT PR with:

- complete Sections 20–21;
- per-row findings for all 563 `IN SCOPE` rows;
- early delivery plan;
- Stage 7 Engineering Review report;
- exact changed files;
- exact head SHA;
- T2/T3/T6/T7/T8 screen;
- list of findings held pending specialists.

Each specialist submits its independent report separately.

Mission Control then performs the complete Stage 7 review and decides whether:

- findings are accepted;
- corrections are required;
- a Founder gate is triggered;
- any Stage 8 approval can be prepared.

**STAGE 7 ENGINEERING REVIEW + INDEPENDENT SPECIALIST AUTHORIZATION PREPARED — STOP FOR FOUNDER HUMAN MERGE**
