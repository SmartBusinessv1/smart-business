# SB-P-1.14 — Stage 10 UDI / AI Interpretation Safety Specialist Review

**Specialist:** S10-SP-3 — UDI / AI Interpretation Safety  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Stage:** 10 — EIS Review  
**Authority:** SB-P-1.14-MC-14 and `24-stage10-eis-udi-ai-specialist-instruction.md`  
**Canonical authorization baseline:** `main@0cde7444bfdf4502f534bc5eb99797dd13ff6bf6` (MC-14 human-merged)  
**Draft EIS PR:** #831  
**Exact reviewed PR head:** `254e40a723e4c74af69d425cb918bb03dc9817e2`  
**Exact reviewed EIS blob:** `20fd97177348ad9b02bbb8d1be9e53f05ad18bde`  
**Output path:** `communication/missions/SB-P-1.14/specialists/08-stage10-eis-udi-ai-safety-review.md`  
**Reviewer:** OpenAI GPT-5.6 Sol, current Team LIPS — Smart Business Build HQ specialist session  
**Date:** 2026-10-08 IST  
**Authority limit:** Read-only findings. No EIS edit, Product Truth change, Blueprint/FCTM/Founder-record edit, code/SQL/migration execution, provider activation, production mutation, EIS approval or self-merge.

---

## 1. Independence and Contribution Separation

### 1.1 Stage 9 EIS authorship

This actor/session did **not** author or materially contribute to the SB-P-1.14 Stage 9 EIS under PR #831.

The EIS was authored by Claude Code under the Stage 9 creation authority.

**Independence gate: PASS.**

### 1.2 Prior Smart Business contribution

This same room/session authored the independent SB-P-1.14 Stage 7 specialist report:

`communication/missions/SB-P-1.14/specialists/03-stage7-udi-ai-safety-review.md`

This room also previously performed independent SB-P-1.13 AI/orchestration specialist reviews.

That prior-domain work creates correlated-assumption risk because the Stage 9 EIS was expected to consume those findings. To reduce the risk, this review:

- reread the complete Stage 9 EIS at the exact pinned head/blob;
- compared its requirements against the locked SB-P-1.14 Blueprint, FCTM, Founder decisions, Stage 7 specialist report and upstream locked SB-P-1.13 EIS contracts;
- treated the EIS author's claims that findings were carried as evidence to verify, not as proof;
- kept provider/runtime/migration facts evidence-held where live access was not available.

---

## 2. Review Scope and Evidence

The complete EIS was reviewed, with primary focus on:

- `EIS14-UDI-01` through `EIS14-UDI-09`;
- `EIS14-CNF-01` through `EIS14-CNF-04`;
- `EIS14-IDM-01` through `EIS14-IDM-03`;
- `EIS14-ADP-01` and `EIS14-ADP-02`;
- `EIS14-FAIL-01` through `EIS14-FAIL-03`;
- `EIS14-PRV-01`;
- `EIS14-VER-01` and `EIS14-VER-02`;
- `EIS14-HOLD-02`, `HOLD-03`, `HOLD-06`, `HOLD-07`, `HOLD-09`;
- `EIS14-TOT-01` at the AI/answer/export boundary;
- `EIS14-SEC-02` only to the extent Mission Control requested preliminary-item awareness.

The review also used:

- locked SB-P-1.14 Blueprint;
- canonical 766-row FCTM;
- FPDR-1 through FPDR-4;
- S7-SP-3 report `03-stage7-udi-ai-safety-review.md`;
- SB-P-1.13 locked EIS requirements including `EIS13-CTX-01`, `EIS13-CTX-02`, `EIS13-TOOL-01`, `EIS13-TOOL-02`, `EIS13-CNF-01`, `EIS13-PRV-01`, `EIS13-FAIL-01`;
- deterministic parser/import precedents already present in the repository.

PR #831 was confirmed **OPEN / DRAFT / UNMERGED** at exact head `254e40a723e4c74af69d425cb918bb03dc9817e2`. The reviewed EIS blob was exactly `20fd97177348ad9b02bbb8d1be9e53f05ad18bde`.

---

## 3. Executive Assessment

The Stage 9 EIS is **substantially aligned with the Stage 7 UDI / AI Interpretation Safety findings**.

The following Stage 7 safety requirements are materially present:

- deterministic CSV/XLSX parsing as the default structured-input path;
- AI output treated as evidence rather than authority;
- document-borne text kept in untrusted data channels;
- schema-validated AI interpretation with missing values surfaced rather than invented;
- context minimization for document pages/regions and linked business context;
- exact reviewed interpretation plus FPDR-3 material-target confirmation binding;
- execution-time authority revalidation separate from the fingerprint;
- content fingerprint distinct from command idempotency;
- first-class unknown command outcome and reconciliation;
- separate intake / interpretation / preview / confirmation / domain-write / durable-object states;
- no direct provider SDK inside the UDI module;
- all provider-dependent UDI rows held behind provider evidence;
- deterministic paths remain usable during AI/provider failure;
- all Stage 7 residual holds remain visible and are not claimed satisfied by design text alone.

However, five refinements remain necessary before this specialist can support Stage 10 acceptance of the EIS.

### Finding count

| Severity | Count |
|---|---:|
| Critical | 0 |
| High | 1 |
| Medium | 4 |
| Low | 0 |
| Informational | 2 |
| **Total** | **7** |

**Specialist disposition:** EIS refinement required before Stage 10 acceptance.

---

## 4. Findings

### UDI-EIS10-01 — Spreadsheet export neutralization is over-broad and can corrupt legitimate typed values

**Severity:** Medium

**Exact EIS requirements:** `EIS14-UDI-05`, `EIS14-SRC-02`, `EIS14-VER-01`

**Affected FCTM rows:**  
`3-§10-6`, `3-§10-7`, `3-§10-9`, `5-§4-4`, `5-§4-5`, `5-§18-4`, `BP-§10.3-W4`, `BP-§10.3-W12`.

**Evidence:**

`EIS14-UDI-05` states:

> every CSV/XLSX export neutralizes cells beginning with `=`, `+`, `-`, `@`, tab or carriage return.

The Stage 7 finding required **context-aware formula neutralization of merchant-controlled/interpreted strings**, not blanket transformation of every exported cell.

A legitimate typed numeric value such as `-125.50` begins with `-`. A blanket textual neutralization rule can convert a number into text, alter round-trip semantics, sorting, formulas, downstream import behavior or financial export fidelity.

**Finding:**

The safety objective is correct, but the rule needs type-sensitive semantics.

Formula-injection prevention should apply to **untrusted textual/string cells that spreadsheet software could interpret as formulas**, while preserving genuine numeric/date/boolean values as typed values.

Inbound formula expressions must remain untrusted data and must never be evaluated by Smart Business.

**Required refinement:**

Refine `EIS14-UDI-05` to require:

- no inbound formula evaluation;
- formula expression + cached-value provenance for formula cells;
- explicit review where a consequential value came from a formula;
- outbound neutralization only for textual/untrusted string values that would otherwise be interpreted as formulas;
- preservation of genuine typed numeric/date/boolean values;
- regression tests for negative numbers, positive signed numbers, names/descriptions beginning with formula sigils, tabs/CR, and CSV/XLSX round-trip semantics.

**Evidence hold:** Existing export implementation remains absent; runtime proof remains pending.

**Trigger screen:** T2 no; T3 no; T6 no new trigger; T7 no; T8 no.

**Blocks Stage 10 acceptance:** **YES** — design wording can create data-integrity loss if implemented literally.

---

### UDI-EIS10-02 — PDF non-execution rule does not explicitly close parser/provider external-resource fetch and embedded-attachment traversal

**Severity:** High

**Exact EIS requirements:** `EIS14-UDI-02`, `EIS14-UDI-04`, `EIS14-UDI-06`, `EIS14-VER-01`

**Affected FCTM rows:**  
`5-§4-3`, `5-§4-6`, `5-§4-7`, `5-§16-4`, `5-§17-1`, `5-§17-2`, `5-§17-3`, `5-§17-11`, `5-§18-3`, `24-§14-1`, `24-§23-6`, `BP-§10.3-W4`, `BP-§10.3-SA1`.

**Evidence:**

`EIS14-UDI-04` correctly says the processor executes no embedded:

- script;
- form action;
- link;
- attachment.

This materially improves the Stage 7 design.

However, the Stage 7 finding also required that **external fetches initiated by document content be disabled unless separately authorized**.

“Do not execute a link” is not identical to “do not resolve/fetch externally referenced resources.” A PDF/image processing library or external vision service may still fetch referenced resources, embedded remote images, linked content or automatically traverse nested attachments without “executing” a user-visible link action.

**Finding:**

The non-execution boundary is close but incomplete.

Document-controlled network access and recursive embedded-object traversal need an explicit deny-by-default rule.

**Required refinement:**

Refine `EIS14-UDI-04` / verification to state:

- document content cannot initiate outbound network fetches, URL resolution, remote resource loading or callbacks;
- embedded files/attachments are not automatically opened or recursively interpreted;
- any separately supported embedded object is re-intaken as a new untrusted object through the same validation pipeline;
- processor/provider configuration must disable active content and external resource resolution where supported;
- malicious fixtures cover JavaScript/actions, remote references, embedded attachments and malformed active-content structures.

**Evidence hold:** The eventual PDF processor/provider and production runtime remain **UNVERIFIED — ACCESS REQUIRED**.

**Trigger screen:** T2 no; T3 no; T6 no new trigger (this refines the already accepted Stage 7 engineering constraint); T7 no; T8 conditional only if no compliant processor can satisfy the rule.

**Blocks Stage 10 acceptance:** **YES**.

---

### UDI-EIS10-03 — UDI provider gate references the upstream contract but does not explicitly bind runtime calls to the accepted versioned configuration identity

**Severity:** Medium

**Exact EIS requirements:** `EIS14-UDI-09`, `EIS14-PRV-01`, `EIS14-HOLD-09`, `EIS14-VER-01`, Section 28

**Affected FCTM rows:**  
All **97 IN SCOPE rows carrying `DAI`**, including `5-§4-1`, `5-§4-2`, `5-§4-3`, `5-§4-6`, `5-§4-7`, `5-§4-8`, `5-§9-1`–`5-§9-8`, `5-§10-1`, `5-§10-3`, `5-§10-4`, `5-§10-8`, `5-§16-7`, `5-§17-4`, `5-§18-1`, `5-§18-2`, `5-§18-3`, `22-§29-10`, `22-§29-13`, `24-§14-1`, `24-§23-6`, `24-§31-8`, `BP-§10.3-SA1`.

**Evidence:**

`EIS14-PRV-01` correctly says no merchant document reaches a provider until SB-P-1.13 `EIS13-PRV-01` evidence is accepted for the actual UDI configuration.

The locked upstream contract is stronger and more explicit. It binds evidence to a **versioned provider configuration identity**, requires runtime calls to carry that identity, and invalidates affected evidence after material provider/service/model/account/routing/data-control changes.

The local `EIS14-PRV-01` parenthetical names only:

- model;
- retention;
- training use;
- region;
- logging.

It does not itself state the runtime identity-binding and stale-evidence invalidation mechanics.

**Finding:**

The cross-reference is directionally correct, but the SB-P-1.14 EIS should make the consumption rule unambiguous so an implementation cannot treat “provider evidence accepted once” as permanently sufficient while configuration changes.

**Required refinement:**

State explicitly that:

- every UDI provider call uses the currently accepted SB-P-1.13 provider configuration identity;
- the UDI evidence gate consumes the **full** upstream evidence set, including provider/service/model, account/project, routing, retention/training/abuse-monitoring settings, logging/deletion, region, credential custody and adapter/config identity as applicable;
- a material configuration change invalidates the affected evidence;
- merchant documents stop flowing until re-verification is accepted;
- deterministic non-AI paths remain available while provider evidence is stale.

**Evidence hold:** Provider identity, account/project, retention, training/improvement use, abuse-monitoring retention, region, logging/deletion, credential custody, OCR quality and latency remain **UNVERIFIED — ACCESS REQUIRED**.

**Trigger screen:** T2 no; T3 conditional only if later evidence proves Product Truth cannot be met; T6 no new trigger; T7 no; T8 no.

**Blocks Stage 10 acceptance:** **YES** — documentary refinement required; runtime/provider evidence remains held afterward.

---

### UDI-EIS10-04 — MC10-PRE-02 is applicable at the AI-answer/export boundary: “sales/income” and “purchases/expenses” are too ambiguous for authoritative language generation

**Severity:** Medium

**Exact EIS requirements:** `EIS14-TOT-01`, `EIS14-LDG-05`, `EIS14-ARC-02`, `EIS14-SRC-02`, `EIS14-UDI-07`

**Affected FCTM rows:**  
`3-§9-10`, `3-§9-11`, `3-§10-2`, `3-§10-3`, `3-§10-4`, `3-§10-5`, `3-§10-9`, `3-§19-12`, `BP-§10.3-SB1`.

**Evidence:**

`EIS14-TOT-01` says:

- `sale` and `income` “count as sales/income”;
- `purchase` and `expense` “as purchases/expenses”.

The same requirement is consumed by dashboard, period summaries, **conversation answers** and exports.

Mission Control correctly identified the risk in MC10-PRE-02: generic `income` must not silently become merchant “sales,” and generic `expense` must not silently become “purchases.”

**UDI/AI relevance:**

A model or natural-language response can only be as truthful as the canonical aggregation it receives. If the data contract collapses distinct labels, AI can confidently state a false merchant concept even though no model hallucination occurred.

**Finding:**

MC10-PRE-02 is valid at this specialist boundary.

The aggregation should expose distinct canonical measures/classes that allow:

- sales;
- other/generic income;
- purchases;
- other/generic expense;
- combined income-class total where intentionally requested;
- combined expense-class total where intentionally requested;
- repayment excluded from revenue;
- standalone credit excluded from sales/income;
- credit sale counted once.

This is a data/engineering clarity issue, not a new Product Truth decision based on current evidence.

**Required refinement:**

Refine `EIS14-TOT-01` so labels are explicit enough that UI, exports and AI answers cannot substitute “sales” for “income” or “purchases” for “expenses” unless the requested aggregate actually means that.

**Cross-specialist authority:** S10-SP-2 Transaction & Financial Integrity remains the primary specialist for the canonical aggregation semantics. This report records the AI/answering consequence and does not independently redefine the financial model.

**Trigger screen:** T2 no; T3 no at present; T6 no new trigger; T7 no; T8 no.

**Blocks Stage 10 acceptance:** **YES pending Mission Control / S10-SP-2 disposition and EIS refinement if confirmed.**

---

### UDI-EIS10-05 — Injection verification does not explicitly preserve the Stage 7 multilingual/mixed-language adversarial requirement

**Severity:** Medium

**Exact EIS requirements:** `EIS14-UDI-06`, `EIS14-VER-01`

**Affected FCTM rows:**  
`5-§10-8`, `5-§13-8`, `5-§13-9`, `5-§13-10`, `5-§13-11`, `5-§13-12`, `5-§16-7`, `24-§14-1`, `24-§14-9`, `BP-§10.3-SA1`.

**Evidence:**

The Stage 7 specialist report explicitly required document-borne injection fixtures in:

- English;
- Malayalam;
- Manglish;
- mixed-language documents.

`EIS14-UDI-06` correctly carries the instruction/data boundary.

`EIS14-VER-01` requires “injection/PDF/formula fixtures” but does not preserve the language/code-switching coverage.

Smart Business targets Kerala merchants and treats Malayalam/Manglish as first-class input behavior.

**Finding:**

The design control is present, but the verification obligation is under-specified relative to the accepted Stage 7 finding.

A prompt-injection defense that only passes English fixtures is not enough evidence for the target interaction surface.

**Required refinement:**

Refine `EIS14-VER-01` or the Stage 10 verification contract to require:

- English document-borne injection;
- Malayalam document-borne injection;
- Manglish/transliterated injection;
- mixed-language/code-switched injection;
- injected instructions in headers, line items, filenames/metadata and OCR text;
- evidence that all remain data and cannot alter tool/destination/authority.

**Trigger screen:** T2 no; T3 no; T6 no new trigger; T7 no; T8 no.

**Blocks Stage 10 acceptance:** **YES** as a documentary verification-gap correction. It does not require provider/runtime access to specify the test obligation.

---

### UDI-EIS10-06 — Stage 7 UDI/AI core constraints are otherwise faithfully represented

**Severity:** Informational

**Exact EIS requirements:** `EIS14-UDI-01`–`09`, `EIS14-IDM-01`–`03`, `EIS14-CNF-01`–`04`, `EIS14-ADP-01`–`02`, `EIS14-FAIL-01`–`02`, `EIS14-HOLD-06`, `HOLD-07`, `HOLD-09`

**Affected FCTM rows:** All rows mapped to those requirements.

**Evidence / disposition:**

The EIS correctly carries:

- **UDI-AI-S7-01:** deterministic CSV/XLSX routing — `EIS14-UDI-03`;
- **UDI-AI-S7-02:** document content untrusted and non-authoritative — `EIS14-UDI-06`;
- **UDI-AI-S7-03:** non-executing PDF/image processing — `EIS14-UDI-04`, subject to UDI-EIS10-02 refinement;
- **UDI-AI-S7-04:** formula provenance and export neutralization — `EIS14-UDI-05`, subject to UDI-EIS10-01 refinement;
- **UDI-AI-S7-05:** exact reviewed interpretation and FPDR-3 material fingerprint — `EIS14-CNF-03` plus `CNF-04`;
- **UDI-AI-S7-06:** layered false-success separation — `EIS14-FAIL-01`;
- **UDI-AI-S7-07:** provider gate — `EIS14-PRV-01`, subject to UDI-EIS10-03 refinement;
- **UDI-AI-S7-08:** page/region and linked-context minimization — `EIS14-UDI-08`;
- **UDI-AI-S7-09:** content fingerprint distinct from command idempotency; unknown outcome — `EIS14-IDM-01`–`03`;
- **UDI-AI-S7-10:** deterministic parser precedent is reused without being claimed as full UDI completion — Sections 5, 10 and 28.

No model output is made authority. All consequential UDI writes converge on destination adapters and governed commands.

**Blocks Stage 10 acceptance:** No independent block beyond Findings 01–05 and evidence holds.

---

### UDI-EIS10-07 — Provider/runtime readiness is correctly evidence-held, not falsely claimed

**Severity:** Informational

**Exact EIS requirements:** `EIS14-PRV-01`, `EIS14-VER-02`, `EIS14-HOLD-02`, `HOLD-03`, `HOLD-06`, `HOLD-07`, `HOLD-09`, Section 28

**Affected FCTM rows:** All rows carrying corresponding dependency/hold codes.

**Evidence:**

Section 28 correctly marks as **UNVERIFIED — ACCESS REQUIRED**:

- live runtime/offload limits;
- AI/vision provider/service/model;
- provider account and credential custody;
- document/image retention;
- training use;
- abuse-monitoring retention;
- regional processing;
- logging/deletion;
- PDF/image OCR quality;
- Malayalam/Manglish quality;
- provider latency;
- AWS parser account/state;
- accepted provider configuration identity.

The EIS also preserves all Stage 7 UDI/provider holds and explicitly states that describing mechanisms does not satisfy them.

**Finding:** No false readiness claim was found in the UDI/AI domain.

**Blocks Stage 10 acceptance:** No documentary block; these facts remain runtime/provider evidence gates for later lifecycle acceptance.

---

## 5. Mission Control Preliminary Items

### MC10-PRE-01 — object-type-specific hardening semantics

**UDI/AI specialist disposition:** **NOT PRIMARY TO THIS DOMAIN.**

`EIS14-SEC-02` is relevant because UDI state/document tables must be born hardened, but the defect concerns object-type-specific RLS/view/function security semantics. S10-SP-1 Security / Permissions / RLS & Grants is the authoritative specialist.

No independent UDI/AI finding is added beyond preserving `H-BIRTH` and current-permission requirements.

### MC10-PRE-02 — truthful sales/income and purchases/expenses separation

**UDI/AI specialist disposition:** **APPLICABLE AND VALID AT THE AI-ANSWER / EXPORT BOUNDARY.**

See **UDI-EIS10-04**.

---

## 6. Stage 7 Hold Realization

| Stage 7 hold / finding | Stage 10 EIS realization | Specialist disposition |
|---|---|---|
| Deterministic CSV/XLSX routing | `EIS14-UDI-03` | **Adequately realized** |
| Document prompt-injection isolation | `EIS14-UDI-06`; upstream EIS13-CTX-01 | **Adequately realized; verification language refinement required** |
| Non-executing PDF processing | `EIS14-UDI-04` | **Partially realized; external-resource/embedded-object refinement required** |
| Spreadsheet formula safety | `EIS14-UDI-05` | **Partially realized; type-sensitive export refinement required** |
| FPDR-3 material fingerprint | `EIS14-CNF-03`, `CNF-04` | **Adequately realized; still evidence-held** |
| False-success separation | `EIS14-FAIL-01` | **Adequately realized; still runtime evidence-held** |
| Provider data controls | `EIS14-PRV-01`, `HOLD-09` | **Partially realized; versioned runtime identity binding refinement required; evidence still unavailable** |
| Context minimization | `EIS14-UDI-08` | **Adequately realized; runtime evidence-held** |
| Retry/idempotency/unknown outcome | `EIS14-IDM-01`–`03` | **Adequately realized; upstream/runtime evidence-held** |
| Model output evidence, never authority | Principles §4, `UDI-06`, `ADP-01`, governed command path | **Adequately realized** |
| Provider/runtime readiness | Section 28 | **Correctly held as UNVERIFIED — ACCESS REQUIRED** |

The EIS does not improperly convert a Stage 7 hold into a readiness claim.

---

## 7. Trigger Screen

| Trigger | Result |
|---|---|
| **T2 — conflict among approved sources** | **NOT TRIGGERED.** No conflict found between EIS, locked Blueprint, FCTM, FPDR-1–4 or upstream EIS contracts. |
| **T3 — new merchant-visible Product Truth / Founder decision** | **NOT TRIGGERED.** All required refinements are engineering/safety clarity. Provider impossibility remains conditional only if later evidence proves approved Product Truth cannot be delivered. |
| **T6 — material derived constraint** | **NOT TRIGGERED anew.** Findings refine already accepted Stage 7 engineering constraints and Mission Control preliminary concerns. |
| **T7 — omission/deferral/pull-forward/reclassification/reassignment** | **NOT TRIGGERED.** No FCTM disposition or mission ownership change is proposed. |
| **T8 — conflict/infeasibility/material safety-integrity conflict** | **NOT TRIGGERED now.** T8 becomes relevant only if a compliant PDF processor/provider, provider-data configuration, or safe formula/export implementation proves infeasible without weakening Product Truth. |

---

## 8. Provider / Runtime Evidence Register

The following remain **UNVERIFIED — ACCESS REQUIRED** and must not be inferred from this documentary review:

- actual AI/vision provider/service/model;
- provider organization/account/project;
- provider configuration identity;
- credential custody;
- document/image retention;
- training/improvement use;
- abuse-monitoring retention;
- regional processing;
- logging/deletion behavior;
- PDF/image OCR quality;
- Malayalam/Manglish interpretation quality;
- production provider latency;
- live hosting/offload runtime constraints;
- actual PDF processor active-content/network behavior;
- actual export formula-neutralization behavior;
- current test-project state;
- current production state.

Repository evidence establishes design precedents, not runtime acceptance.

---

## 9. Stage 10 Specialist Conclusion

The Stage 9 EIS is **substantially sound in the UDI / AI Interpretation Safety domain**, but it is not ready for Stage 10 acceptance unchanged.

Required refinements are narrow and do not reopen Product Truth:

1. make spreadsheet export formula protection type-sensitive so it does not corrupt legitimate typed values;
2. explicitly prohibit document-controlled external fetches and automatic embedded-object traversal in PDF/image processing;
3. bind UDI provider calls to the full accepted versioned SB-P-1.13 provider configuration identity and stale-evidence invalidation rules;
4. resolve MC10-PRE-02 so AI answers/exports can distinguish sales from generic income and purchases from generic expenses truthfully;
5. preserve multilingual/Manglish/mixed-language document-borne injection fixtures as an explicit verification obligation.

No Critical finding exists.

No new Founder decision is required.

Provider/runtime evidence remains held.

**S10-SP-3 UDI / AI INTERPRETATION SAFETY RESULT: REFINEMENT REQUIRED BEFORE STAGE 10 ACCEPTANCE.**

No EIS, Product Truth, Blueprint, FCTM, Founder record, code, SQL, migration, provider configuration or production state was changed by this review.

**STOP FOR MISSION CONTROL DISPOSITION.**
