# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-24 — BOUNDED IMPLEMENTATION PACKAGE CORRECTION

**Instruction ID:** instruction1.120  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-24 — Stage 13 Correction Mission  
**Executing Room:** Claude Code / Engineering  
**Authorized By:** Founder / Mission Control  
**Mode:** DOCUMENT CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Build Lock / Build Mode Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Resolve only the three blocking Stage 13 findings recorded in `communication/live/report1.128.md`:

- `MC-GC23-001` — stale twenty-eight-command authority remains in `lovable-build-prompt.md`;
- `MC-GC23-002` — Founder Workflow Build Now requirements FWR-001 through FWR-005 are not fully carried across the Version 1.2 Stage 12 package;
- `MC-GC23-003` — `report1.127.md` overstates reconciliation completeness.

This is a bounded documentation correction mission. It does not reopen the canonical Lambda Parser EIS, Product Truth, Founder decisions, or unaffected Stage 12 content.

Required completion report:

`communication/live/report1.129.md`

---

## 2. Entry Gate

Before editing, synchronize to current merged `main` and verify it includes:

- PR #274 merged;
- `communication/live/report1.128.md` with final disposition `SB-P-1.11 IMPLEMENTATION PACKAGE REVIEW — CHANGES REQUIRED`;
- the three Version 1.2 Stage 12 package documents, each still `DRAFT — MISSION CONTROL REVIEW REQUIRED`;
- `communication/live/report1.126.md` with `LAMBDA PARSER EIS — APPROVED — LOCKED`;
- `communication/live/report1.127.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`.

If any entry condition is absent, contradicted, or superseded, STOP and report the authority/evidence gap.

---

## 3. Required Authority Set

Read before editing:

1. `communication/live/report1.128.md` in full;
2. `communication/live/report1.127.md` in full;
3. `communication/live/report1.126.md` and its canonical locked Lambda Parser EIS chain where needed;
4. `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2;
5. `docs/implementation/SB-P-1.11/lovable-build-prompt.md` Version 1.2;
6. `docs/implementation/SB-P-1.11/verification-checklist.md` Version 1.2;
7. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`;
8. `communication/live/report1.96.md` — Founder Workflow architecture where needed;
9. `communication/live/report1.102.md` — Founder Workflow Security & Permissions PASS where needed;
10. the final accepted BKR-1 through BKR-5 correction/confirmation chain where needed to avoid reintroducing stale assumptions;
11. the MC-GC22-001 correction already merged in PR #272.

Later accepted corrections govern over earlier conflicting statements within their authorized scope.

---

## 4. Correction 1 — MC-GC23-001: Catalog Command Taxonomy

Correct every live builder-facing statement in `docs/implementation/SB-P-1.11/lovable-build-prompt.md` that still presents twenty-eight names as the locked Catalog command surface.

The corrected model must match the already accepted Verification Checklist taxonomy:

- exactly **nineteen public Catalog commands**;
- no twentieth Catalog command;
- those nineteen remain the closed Product Truth command boundary;
- scheduled-price functions, channel/pending-action functions, scheduler functions, and parser/import-support helper functions must be classified separately and must never be presented as additions to the canonical nineteen-command Catalog boundary;
- parser/import-support helpers remain narrow non-Product-Truth support-state functions and do not become caller/browser Catalog commands;
- a broader public function/RPC inventory may be described where useful, but do not assert a combined numeric total as a locked Catalog-command count unless a later explicit authority establishes one.

Correct all affected cross-references, including any sentence equivalent to “outside the twenty-eight named commands.”

Do not rename or add functions. Do not change implementation scope.

---

## 5. Correction 2 — MC-GC23-002: Founder Workflow Build Now Requirements

Carry FWR-001 through FWR-005 into all three Stage 12 package documents as implementation-ready obligations, using minimal delta and without changing the accepted Founder Workflow architecture.

### FWR-001 — Inventory / Opening Stock Bulk Onboarding

The package must explicitly carry Build Now CSV/XLSX onboarding for Inventory / Opening Stock.

Preserve:

- Inventory remains sole stock authority;
- current quantity is never directly written;
- opening quantity is established only by governed Opening Stock inventory movement;
- invalid rows do not create partial stock truth;
- Inventory import support state is separate from Catalog Product Truth;
- Owner-only Phase 1 authority remains fail-closed;
- BKR-1 through BKR-5 remain mandatory.

### FWR-002 — Downloadable Templates

The package must explicitly require downloadable sample/template files for:

- Catalog bulk import; and
- Inventory / Opening Stock bulk onboarding.

Templates are onboarding aids only, must distinguish required/optional fields, and must not become a source of truth.

### FWR-003 — Generated SKU When Merchant Supplies None

Replace live package wording that leaves SKU merely “optional” without the accepted domain rule.

The canonical rule is:

- merchant-supplied SKU remains optional;
- when absent, Smart Business generates a business-scoped unique tracking SKU;
- generated SKU must not collide with merchant-supplied or previously generated SKUs;
- it remains Catalog identity, not barcode/legal identifier truth;
- it follows existing audit/history and idempotency requirements;
- generated SKU must not encode unnecessary sensitive information.

Do not create a second SKU field or alternate SKU model.

### FWR-004 — One SKU Rule Across Creation Channels

The same SKU resolution rule must apply to:

- dashboard/manual creation;
- Catalog CSV/XLSX import;
- Inventory-first creation;
- WhatsApp text;
- WhatsApp voice;
- WhatsApp photo-assisted creation;
- future governed creation channels.

Channel-specific SKU logic is prohibited. Conversational creation remains gated by structured preview and explicit merchant confirmation.

### FWR-005 — Inventory-First Orchestration

The package must explicitly carry the governed ordering for a genuinely new Inventory item:

1. resolve whether an appropriate Catalog product already exists;
2. if an accepted exact/authorized match exists, present the proposed link for confirmation rather than silently creating a duplicate;
3. otherwise create the Catalog product using the governed Catalog creation path and canonical SKU rule;
4. create the Inventory item using the accepted Inventory-domain idempotent operation;
5. establish the governed one-to-one Catalog ↔ Inventory link while linking is still permitted;
6. only after identity/link establishment, record Opening Stock through the governed Inventory movement path when an opening quantity exists.

Preserve:

- Catalog and Inventory as separate truth models;
- D-047 tenure-bounded linking rule;
- D-068 unit/price preview and explicit confirmation;
- no silent duplicate Catalog creation;
- no silent linking after sale or linked stock-event history;
- no service-role Product Truth mutation;
- no twentieth Catalog command;
- caller-JWT Catalog Product Truth writes;
- Inventory creation and Opening Stock remain Inventory-domain operations.

A Catalog-first product may remain non-stock until the merchant explicitly uses governed Link to Inventory.

---

## 6. Verification Checklist Additions

Add or refine unexecuted-template checklist coverage sufficient to verify FWR-001 through FWR-005 after later implementation authorization.

At minimum cover:

- Inventory / Opening Stock template availability and schema/version identification;
- Catalog import template availability and schema/version identification;
- generated-SKU behavior when merchant SKU is absent;
- collision and business-scope uniqueness behavior;
- merchant-supplied SKU preservation;
- identical SKU rule across authorized creation channels;
- Inventory-first exact/authorized match handling without silent duplicate creation;
- Catalog creation before Inventory creation where no reusable Catalog match exists;
- governed link establishment before Opening Stock movement;
- D-047 fail-closed behavior for historical/stock-event cases;
- D-068 preview/confirmation where selling-unit meaning would change;
- Opening Stock recorded only through Inventory movement, never direct current-stock mutation;
- replay/unknown-outcome/idempotency behavior for the multi-step workflow;
- Owner-only Phase 1 authority and no Manager/Employee expansion.

Every added checklist item must remain unexecuted. Do not pre-populate PASS/FAIL or any runtime result.

---

## 7. Correction 3 — MC-GC23-003: Reconciliation Evidence

Correct `communication/live/report1.127.md` so the audit record no longer overstates what the original reconciliation accomplished.

Preserve the historical record. Do not erase the fact that the first GC-22 reconciliation and MC-GC22-001 correction occurred.

Preferred correction pattern:

- append a clearly dated/identified GC-24 correction note or section;
- explicitly acknowledge that Stage 13 found residual twenty-eight-command wording in `lovable-build-prompt.md` and incomplete Founder Workflow translation;
- state that the affected claims in the earlier report are superseded by the GC-24 correction record;
- do not rewrite prior history as though the defect never existed.

The new completion report `report1.129.md` must provide the authoritative evidence of exactly how MC-GC23-001 through MC-GC23-003 were resolved.

---

## 8. Package Status

Keep all three Stage 12 package documents at:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

Do not mark them accepted or locked.

Their Version 1.2 history may receive a distinct GC-24 correction entry; do not silently erase Version 1.1 lock history, GC-22 reconciliation history, or MC-GC22-001 history.

---

## 9. Allowed Repository Changes

This mission may substantively modify only:

- `docs/implementation/SB-P-1.11/engineering-contract.md`;
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md`;
- `docs/implementation/SB-P-1.11/verification-checklist.md`;
- `communication/live/report1.127.md`;
- `communication/live/report1.129.md`.

No other repository file may be modified by this mission.

---

## 10. Required Completion Report

Create `communication/live/report1.129.md` containing at minimum:

- exact starting merged `main` SHA;
- branch and commit evidence;
- exact changed files;
- per-finding resolution evidence for MC-GC23-001, MC-GC23-002, MC-GC23-003;
- exact final nineteen-command taxonomy used;
- exact FWR-001 through FWR-005 package locations/sections added or corrected;
- confirmation that generated SKU is one canonical rule across creation channels;
- confirmation that Inventory-first orchestration preserves Catalog/Inventory truth separation, D-047, D-068, BKR-1 through BKR-5 and Opening Stock movement-only quantity creation;
- verification-checklist items added/changed, all confirmed unexecuted;
- confirmation that parser-runtime/IAM/S3/Supabase locked boundaries were not reopened;
- confirmation that repository hygiene and Blueprint lifecycle-path housekeeping remain untouched;
- final disposition.

Allowed final dispositions:

- `SB-P-1.11 BOUNDED PACKAGE CORRECTION — READY FOR STAGE 13 RE-REVIEW`
- `SB-P-1.11 BOUNDED PACKAGE CORRECTION — CHANGES STILL REQUIRED`
- `SB-P-1.11 BOUNDED PACKAGE CORRECTION — STOPPED — AUTHORITY OR EVIDENCE GAP`

A positive disposition does not authorize package lock or implementation.

---

## 11. Prohibited Scope

Do not:

- implement application code;
- execute or create SQL/migrations as implementation;
- mutate Supabase, RLS, grants, tables, functions, AWS, S3, IAM, Lovable, dependencies, or production state;
- change Product Truth or Founder decisions;
- create a twentieth Catalog command;
- merge Catalog and Inventory truth;
- weaken D-047, D-068, BKR-1 through BKR-5, EC-2, EC-3, or the canonical Lambda Parser EIS;
- expand Manager/Employee authority;
- perform repository hygiene remediation;
- move the Blueprint file;
- enter Build Lock or Build Mode;
- deploy, publish, or claim SB-P-1.11 acceptance.

---

## 12. Repository Discipline

Use a protected mission branch and PR.

Before editing, verify latest `main`, exact authorized file scope, and that no duplicate GC-24 correction PR/report already exists.

Stage exact files only. Do not use `git add .`. Preserve unrelated local changes. Do not self-merge.

---

## 13. Next Gate

If the correction PR is human-reviewed and merged with final disposition:

`SB-P-1.11 BOUNDED PACKAGE CORRECTION — READY FOR STAGE 13 RE-REVIEW`

then Mission Control must perform a **focused Stage 13 re-review** before any separate package-lock authorization may be considered.

No package lock or Build authorization is granted by this instruction.

---

## 14. Mission Control Decision

`SB-P-1.11-GC-24 — BOUNDED IMPLEMENTATION PACKAGE CORRECTION AUTHORIZED`
