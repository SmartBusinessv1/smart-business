# SB-P-1.13 — Stage 9 EIS Creation Report

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**From:** Claude Code, Stage 9 EIS author
**To:** Mission Control
**Status:** `DRAFT — MISSION CONTROL REVIEW REQUIRED`
**Authorization:** SB-P-1.13-MC-14, canonical at `main@0b83960113fb12a8258a2c4fdfc783f942b64ac3` (PR #792)
**Date:** 2026-10-07

## 1. Deliverable

`docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md`, status `DRAFT — MISSION CONTROL REVIEW REQUIRED`, Sections 1–30.

## 2. Inputs

Locked Blueprint (blob `bbf65429`), FCTM (blob `97ddc752`), `FPDR-1` to `FPDR-5`, Stage 7 Engineering Review (Blueprint §20–21), S7-SP-1/2/3 reports, locked SB-P-1.12 Blueprint and EIS, Build Plan §10.2, FCTM-mapped contracts and delegates, current repository at `main@0b839601`, Source 18. None was edited.

## 3. Requirements and traceability

| Check | Result |
|---|---|
| EIS requirements | 72 (`EIS13-ARC-01` to `EIS13-HOLD-03`, 24 families) |
| Duplicate requirement IDs | 0 |
| `IN SCOPE` rows mapped | 651 / 651 |
| Missing rows | 0 |
| Extra FCTM IDs | 0 |
| Row-to-requirement links | 1486 |
| Requirements with rows | 70 |
| Requirements with a recorded non-product reason and no rows | 2 (`EIS13-MIG-01`, `EIS13-MIG-02`: migration design and governance) |
| Orphan requirements adding product behaviour | 0 |
| All 17 `DTX` rows mapped to `EIS13-HOLD-02` and `EIS13-CMD-02` | yes |
| All 252 `D12` rows mapped to `EIS13-HOLD-01` | yes |
| FCTM disposition / owner / build / commercial / assignment changes | 0 |

These figures were checked by parsing the committed EIS file (Section 29) against the FCTM, independently of the generator that built the tables. Requirement text and row selection were authored by Claude Code; the row lists and Section 29 were generated from the FCTM so that no list is hand-typed.

## 4. Stage 7 constraints carried

| Constraint | EIS requirement |
|---|---|
| Command-only protected writes; 17 `DTX` rows held | `EIS13-CMD-02`, `EIS13-HOLD-02` |
| `D12` authority dependency | `EIS13-AUTH-01`, `EIS13-HOLD-01` |
| Instruction/data separation | `EIS13-CTX-01` |
| Authorization-before-retrieval | `EIS13-CTX-02` |
| Registry cannot create authority | `EIS13-TOOL-01` |
| Frozen confirmed proposal | `EIS13-CNF-01` |
| First-class unknown outcome | `EIS13-IDM-02` |
| Authoritative-outcome-only success language | `EIS13-TEL-02` |
| Provider evidence gate | `EIS13-PRV-01` |
| FAQ provenance and version controls | `EIS13-FAQ-01`, `EIS13-FAQ-03` |
| Malayalam/Manglish governed evaluation | `EIS13-LANG-06` |
| Voice/text semantic parity | `EIS13-VOI-05` |
| Transient-audio technical contract | `EIS13-VOI-02` |
| Spoken-confirmation binding | `EIS13-VOI-04` |
| Non-executable streaming partials | `EIS13-VOI-03` |
| Voice idempotency and outcome lookup | `EIS13-IDM-01`, `EIS13-IDM-02` |
| Provider adapter abstraction | `EIS13-GW-02`, `EIS13-VOI-10` |
| Provider activation, disable and rollback | `EIS13-PRV-01`, `EIS13-PRV-02` |
| Privacy-minimized telemetry | `EIS13-TEL-01` |
| FPDR-4 no-surveillance boundary | `EIS13-SNS-01` |
| FPDR-5 credit/repayment boundary | `EIS13-CMD-03` |
| WhatsApp independence | `EIS13-FAIL-03`, `EIS13-ARC-02` |

`FPDR-1` to `FPDR-5` are applied, not reinterpreted.

## 5. UNVERIFIED — ACCESS REQUIRED

- exact AI provider, service and model
- exact voice provider, service and model
- provider account or project identity
- provider retention
- training or improvement use
- abuse-monitoring retention
- regional processing
- provider logging and deletion behaviour
- credential custody
- Malayalam/Manglish quality (text and speech)
- runtime latency
- provider rollback behaviour
- current production migration state (including `20260724170000`)
- test-project state
- Lovable Cloud environment administration access

## 6. Trigger screen

| Trigger | Result |
|---|---|
| T2 | NOT TRIGGERED |
| T3 | NOT TRIGGERED; no orphan product behaviour |
| T6 | NOT TRIGGERED anew; Stage 7 constraints carried as already resolved |
| T7 | NOT TRIGGERED; no row moved, narrowed or reclassified |
| T8 | NOT TRIGGERED; transaction convergence follows SB-P-1.12 EIS-ISO-02 |

## 7. Validation

Markdown Quality Gate, pre-commit gate and secret scan: results in the pull-request handover. GitHub Actions are not relied on (account restriction).

**Not authorized and not done:** Stage 10 acceptance, EIS lock, implementation package, implementation, SQL or migration, Supabase changes, provider selection or activation, credentials, production access, merge.

## 8. Stage 10 refinement (SB-P-1.13-MC-16)

One narrow correction cycle on PR #793 implementing packages C1–C7 from the Stage 10 specialist reviews (`specialists/04`, `05`, `06`). Pre-refinement head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`, EIS blob `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`; refined EIS blob `821badea37ba349f6aa83ed7d5a83b405c3038bd`.

Text changes only: 25 requirement texts and the related prose in Sections 1, 5, 6, 10, 12, 13, 17, 28 and 30. No requirement ID was created, removed, split or renumbered; every requirement's FCTM row mapping is unchanged; Section 29 is byte-identical.

### 8.1 Correction register

| EIS item | Section | Package | Originating findings | Change | Why it satisfies the finding | Other requirements affected |
|---|---|---|---|---|---|---|
| `EIS13-CMD-02` | 13 | C1 | SEC13-EIS-S10-01, -05; AI-EIS10-06 | Replaced `SECURITY INVOKER` with adoption of the SB-P-1.12 narrow-executor contract (`SECURITY DEFINER`, `NOLOGIN NOINHERIT` owner, EIS-ISO-10 invariants); no reliance on authenticated direct DML; one command for UI, Conversation and Voice; coordinated cut-over with no dual-write or broken-command window; `authenticated` `EXECUTE` granted only at cut-over | The command can operate after direct DML is revoked, and no second protected write path exists | CMD-01, MIG-02, HOLD-02, VER-01; §5, §6, §13 prose |
| `EIS13-CMD-01` | 13 | C1 | SEC13-EIS-S10-01 | States protected writes go only through kernel-checked command functions under EIS-ISO-02, never authenticated direct DML | Aligns the general command path with the locked command-only model | — |
| `EIS13-MIG-02` | 23 | C1 | SEC13-EIS-S10-05 | Transactions family delivered as the single coordinated cut-over package (SB-P-1.12 WS-A3); other objects still run after their SB-P-1.12 families | Removes the circular ordering between 'after upstream' and 'during upstream cut-over' | — |
| `EIS13-HOLD-02` | 27 | C1 | SEC13-EIS-S10-05 | `DTX` hold satisfiable only after cut-over step 8 (command live, callers moved, direct DML revoked, effective access verified) | Makes the hold exit criterion concrete; all 17 rows stay held | — |
| §13 prose | 13 | C1 | SEC13-EIS-S10-01, -05; AI-EIS10-06 | Added the 8-step coordinated transactions-family cut-over; steps 5–6 atomic; rollback restores one path, never both | Executable ordering with the no-dual-path invariant | — |
| `EIS13-MIG-01` | 23 | C2 | SEC13-EIS-S10-02 | Added the new-object access contract: RLS enabled and forced, deny by default, kernel policies, composite references, no `PUBLIC`/`anon`, default privileges reconciled, minimal `authenticated`, command-only protected writes, EIS-ISO-10 definers, safe projections, FAQ table holds no business data | Every new object now has a complete access posture under the locked model | VER-01 |
| `EIS13-AUTH-01` | 8 | C2 | SEC13-EIS-S10-04 | Added the privileged-handler boundary: caller RLS client by default; `service_role` never authority; no SB-P-1.13 service-role path permitted unless a later revision justifies it under EIS-ISO-04; privileged-handler inventory is an acceptance artifact | Closes the service-role gap beyond model context | §6 prose |
| `EIS13-AUTH-04` | 8 | C2 | SEC13-EIS-S10-02 | Conversation access by kernel capability and object scope, not business membership; default deny beyond the actor | Prevents in-business cross-person disclosure without inventing sharing behaviour | — |
| `EIS13-VER-01` | 24 | C1, C2, C3, C4, C5, C6, C7 | SEC13-EIS-S10-01, -02, -03, -04, -06; AI-EIS10-02, -03, -04, -05; S10-VOICE-01, -02, -03 | Added tests and inventories: authority-field exclusion, retrieved-content injection, armed spoken confirmation, revocation-safe reuse, effective-access inventory of new objects and the transactions family, privileged-handler inventory, per-layer transient evidence, provider configuration identity | Makes each correction verifiable | — |
| `EIS13-WSP-05` | 7 | C3 | SEC13-EIS-S10-03; AI-EIS10-03 | Persisted protected segments record capability, object scope, sensitivity class and provenance | Enables withholding when current authority no longer permits | CTX-03 |
| `EIS13-CTX-02` | 10 | C3 | SEC13-EIS-S10-03; AI-EIS10-03 | Caches and conversation state bound to authority epochs and source-state version; allow→deny or business change is a miss | Business+principal keying alone was insufficient | GW-05 |
| `EIS13-CTX-03` | 10 | C3 | SEC13-EIS-S10-03; AI-EIS10-03 | Current authorization governs every cache serve, history render, summary and model re-injection; role, capability, membership, entitlement and business changes invalidate or re-authorize; historical permission never continues | Extends the check from proposal preview to all reuse | — |
| `EIS13-GW-05` | 9 | C3 | SEC13-EIS-S10-03; AI-EIS10-03 | Protected outputs cached only under the CTX-02 current-authority binding; a cache hit never bypasses current authorization | Removes the business+principal-only cache path | — |
| `EIS13-CNF-03` | 12 | C4 | AI-EIS10-01 | Removed 'or valid stored delegation'; role, membership, capability, entitlement and ordinary delegation are not confirmation; only a separately approved standing-automation contract on a distinct governed path may omit per-turn confirmation; none defined here | Restores FPDR-1 confirmation binding for all Conversation/Voice proposals | §12 prose |
| `EIS13-VOI-04` | 17 | C4 | S10-VOICE-02; AI-EIS10-01 | Spoken confirmation only through an explicitly armed, deterministic capture context bound to proposal, binding ID and fingerprint, with actor/business match, valid unconsumed binding, confirm/reject-only interpretation, no regeneration, no stale/duplicate/background/out-of-window execution, no ambient or bystander inference | Mechanizes background-speech safety without surveillance | §6, §12, §17 prose |
| `EIS13-TOOL-01` | 12 | C5 | AI-EIS10-02 | Tool schemas carry domain arguments only; ten authority-bearing values are never model fields, rejected if present, injected server-side after validation | Explicit authority-exclusion contract | §6 prose |
| `EIS13-TOOL-02` | 12 | C5 | AI-EIS10-02 | Ownership and permission validated against server-derived principal and business via the kernel, never model output | Removes the ambiguous 'validate business ownership' reading | — |
| `EIS13-CTX-01` | 10 | C5 | AI-EIS10-04 | Distinguishes the merchant's current request (may lead to a proposal among allowed tools) from retrieved/embedded content (cannot initiate, enable, widen, override or delegate) | Resolves the over/under-restrictive readings | §10 prose |
| `EIS13-VOI-02` | 17 | C6 | S10-VOICE-01; SEC13-EIS-S10-06 | Transient-audio contract now covers nine layers including client buffers, request/multipart/stream buffering, runtime spill, proxy/CDN/edge capture and the provider transport boundary; per-layer evidence of memory-only or bounded disposal; provider retention separately governed | Full C-10/FPDR-3 surface | §17, §28 prose |
| `EIS13-ATT-01` | 19 | C6 | SEC13-EIS-S10-06 | Transient-attachment contract: in-request memory staging only, principal+business binding, unguessable references, bounded TTL, deletion on success/failure/expiry/abandonment, no log/telemetry/error/backup/dead-letter copies, kernel reauthorization before status/retrieval/download/handoff, fail closed | Brings attachments to the audio standard without adding storage | §28 prose |
| `EIS13-PRV-01` | 21 | C7 | AI-EIS10-05; S10-VOICE-03 | Evidence pack tied to a versioned provider configuration identity (13 elements); runtime calls carry it; material change invalidates evidence and stops merchant data until re-verification; kill switch and text fallback kept; request IDs provenance only | Evidence stays bound to the configuration actually used | §28 prose |
| `EIS13-PRV-02` | 21 | C7 | AI-EIS10-05; S10-VOICE-03 | Kill switch also engages when the active configuration's evidence is stale | Preserves fallback while evidence is stale | — |
| `EIS13-VOI-10` | 17 | C7 | S10-VOICE-03 | Adapter calls carry the accepted provider configuration identity | Ties voice runtime to verified configuration | — |
| `EIS13-GW-02` | 9 | C7 | AI-EIS10-05 | Provider, model or routing change creates a new configuration identity requiring re-verification | Prevents silent configuration-only switches | — |
| `EIS13-LANG-06` | 11 | C7 | AI-EIS10-05 | Evaluation results recorded against a configuration identity and re-run after material change | Multilingual evidence bound to configuration | — |
| `EIS13-ENV-01` | 22 | C7 | AI-EIS10-05; S10-VOICE-03 | Active provider configuration identity is versioned configuration | Makes the identity a managed artifact | — |
| §1, §30 prose | 1, 30 | all | — | Revision row in Metadata; T8 row updated to record that the finding-scoped T8 conditions are addressed by C1–C3 | Traceable revision record | — |

### 8.2 Validation after refinement

| Check | Result |
|---|---|
| Requirement count | 72 unique, 0 duplicates, 0 unknown IDs referenced |
| `IN SCOPE` coverage | 651 / 651; 0 missing; 0 extra; 0 not in FCTM |
| Orphan product behaviour | 0 (`EIS13-MIG-01`, `-02` keep recorded non-product reasons) |
| `D12` | all 252 rows map to `EIS13-HOLD-01` |
| `DTX` | all 17 rows map to `EIS13-HOLD-02` and `EIS13-CMD-02` |
| Locked artifacts | Blueprint, FCTM, FPDR records, Stage 7 specialist reports and source contracts byte-identical to main; Stage 10 specialist reports untouched |
| Contradictory wording | no `SECURITY INVOKER` design for transactions; no "valid stored delegation" bypass |

### 8.3 Trigger screen after refinement

| Trigger | Result |
|---|---|
| T2 | NOT TRIGGERED |
| T3 | NOT TRIGGERED; no new merchant-visible behaviour (armed spoken confirmation and fallbacks realize accepted C-11/C-14; no new privacy control) |
| T6 | NOT TRIGGERED anew |
| T7 | NOT TRIGGERED; no row moved, narrowed or reclassified |
| T8 | NOT TRIGGERED after correction; finding-scoped T8 conditions from SEC13-EIS-S10-01, -02, -03, -05 addressed by C1–C3 |

### 8.4 Preserved

FPDR-4 text fallback without new Product Truth; `D12` and all 17 `DTX` holds; provider and runtime facts `UNVERIFIED — ACCESS REQUIRED`; unknown outcome first-class; Smart Business idempotency authoritative; success language only from stored outcome; voice as one modality; STT as input evidence only; non-executable partials; voice/text permission parity.

No EIS acceptance, EIS lock, Stage 11, implementation, SQL or migration, provider activation, production or delivery action occurred.

