# SB-GOV-IV-1.0 — Mission Learning Report

**Prepared by:** Claude Code (builder), on the `mission/SB-GOV-IV-1.0-learning` branch.

**Authority basis:** `communication/live/instruction.md` ("SB-GOV-IV-1.0 — MANUAL OLE LEARNING HANDOFF"), executing the standing OLE closure rule described in `communication/missions/SB-GOV-IV-1.0/mission-control/05-postactivation-verification-and-ole-learning-handoff.md`.

**Contract followed:** `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`, Section 12 ("Mission Learning Report — approved v1 contract"), 8 required sections.

**Status of this report:** `CANDIDATE` — informational and reusable-context input only. `authority_effect: NONE`. This report does not close the mission, does not promote any learning item, and does not carry Founder or Mission Control approval. All 6 underlying candidate learning items it summarizes remain individually reviewable and separately promotable (or not) by Mission Control / Founder, on their own merits, independent of this narrative.

---

## 1. Mission identity and authoritative closure

- **Mission:** `SB-GOV-IV-1.0` — Codex / Independent Verification Efficiency Protocol.
- **Mission class:** non-product operating-framework / verification-governance.
- **Sequence:** #596 opened the mission; #597 published Codex's draft protocol and reconciliation report; #598 applied the Founder-approved governance amendments (Source 18 v1.1, Product Feature Elaboration template, Implementation and Evidence template) and published `communication/Independent_Verification_Efficiency_Protocol.md` (SB-IV-1.0); #599 activated Source 18 v1.1 and SB-IV-1.0 on canonical `main`; #600 initiated this OLE learning handoff.
- **Activation merge commit:** `fec2ac81a6c5a412ec47cea951b64efe68c66417` (PR #599), independently verified by Mission Control in `mission-control/04-postmerge-verification-and-protocol-activation.md`.
- **Canonical snapshot for this learning cycle:** `9595356fba67a5cfce9a66ca9f2272761adb669e` (current `main` at handoff time).
- **Closure envelope:** `communication/missions/SB-GOV-IV-1.0/claude-code/01-ole-learning-handoff-closure-envelope.json`, `final_disposition: "PROTOCOL ACTIVATED — SOURCE 18 v1.1 ACTIVE — SB-IV-1.0 ACTIVE — OLE LEARNING HANDOFF INITIATED"`.
- **What this report is not:** a formal mission closeout. Formal closeout of `SB-GOV-IV-1.0`, and any subsequent `SB-P-1.12` activation, remain exclusively Mission Control's/Founder's decision, per `mission-control/04` Section 5.

---

## 2. Evidence / provenance manifest

- **Harvester run:** `node organizational-learning/scripts/harvest.mjs --envelope communication/missions/SB-GOV-IV-1.0/claude-code/01-ole-learning-handoff-closure-envelope.json`, a real (non-ephemeral) run against the actual committed repository state at `9595356...`.
- **Receipt:** `organizational-learning/receipts/e45bafa9b33985174737bca9abf48813056233ef4ef8ed499bbe241a31f5ea69/d3cf76543ba2bcdf4ffd16f2b0579d8827648ff6c82d9715eda8beedb0d97396.json`, `processing_state: SCREENED`, `screening_result.status: CLEAN`, `source_fingerprint: d3cf76543ba2bcdf4ffd16f2b0579d8827648ff6c82d9715eda8beedb0d97396`.
- **Idempotency proof:** re-running `reconcile.mjs` against the identical closure envelope correctly returned `ALREADY_PROCESSED` against the existing receipt.
- **Evidence manifest (3 files harvested from the allowlisted `acceptance_refs`/`closure_refs`):**
  - `communication/missions/SB-GOV-IV-1.0/README.md`
  - `communication/missions/SB-GOV-IV-1.0/mission-control/04-postmerge-verification-and-protocol-activation.md`
  - `communication/missions/SB-GOV-IV-1.0/mission-control/05-postactivation-verification-and-ole-learning-handoff.md`
- **Candidate-level provenance:** 6 candidate learning items were drafted, each with claim-level evidence citing exact `repository` / `commit_sha` / `path` / `blob_sha` / `locator`, pinned to the single canonical commit `9595356fba67a5cfce9a66ca9f2272761adb669e`. Evidence draws from mission-control records 01, 02, 04, 05, the Founder approval record, the active `communication/Independent_Verification_Efficiency_Protocol.md` document, and (after the mission-control/06-authorized Candidate 02 narrow correction) active Source 18 v1.1 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, Section 4.9) — no candidate cites any `organizational-learning/**` artifact (generated OLE output) as evidence for itself.
- **Provenance validation:** all 19 evidence references across the 6 candidates independently resolved with `organizational-learning/lib/provenance-validator.ts`'s `validateProvenanceReference` against the real repository — **19/19 `VALID`, 0 dangling.**
- **Screening:** every candidate file was scanned with `organizational-learning/lib/screening.ts`'s `runHeuristicScan` — **6/6 `CLEAN`, 0 findings.**

---

## 3. What worked and why

- **Lean lifecycle source, subordinate operating protocol** (Candidate 01): Package C's operating-method detail was deliberately kept out of Source 18 and published instead as SB-IV-1.0, a document whose own text disclaims higher authority — the separation was recommended, Founder-approved, and activated consistently across three separate records.
- **Actor-flexible verifier role without weakening the mandatory gate** (Candidate 02): replacing a hard-coded single-provider Stage 19 owner with a "Mission Control-appointed Independent Verification Actor" explicitly preserved every existing invariant (mandatory gate, actor separation, human runtime review, Mission Control acceptance) rather than treating flexibility and rigor as the same lever.
- **Risk-triggered, not surface-triggered, verification budgeting** (Candidate 03): the Codex Required/Spot Check/Not Required classification is keyed to named risk categories and explicitly warns against treating Markdown or UI changes as automatically low-risk.
- **Evidence classes prevent both redundant re-execution and false assurance** (Candidate 04): Class A/B/C usage guidance cuts both ways — don't re-run deterministic CI locally just to relabel it as independent execution, and don't accept a green CI badge without checking what it actually tested.
- **Finding-scoped re-verification with named escalation triggers** (Candidate 05): the default narrow-correction cycle is paired with explicit conditions that force full re-verification, and the design explicitly grounds itself in a real prior mission's (SB-ORG-LEARNING-1.1's) already-validated narrow-correction pattern, cited as historical evidence rather than invented fresh.
- **This harvest itself worked as designed:** the real harvester produced a clean, deterministic, schema-valid receipt on the first attempt; 6 candidates validated against `CandidateLearningItemSchema` after two title-length corrections (see Section 4).

---

## 4. What failed / near-misses / corrections

- **Two candidate titles initially exceeded the schema's 200-character limit** (Candidate 04, Candidate 06) and were shortened and re-validated to `PASS`. Recorded here rather than omitted, consistent with the transparency norm established across the SB-ORG-LEARNING-1.1 learning cycle this mission's own protocol explicitly cites as design precedent.
- **Candidate 02's Claim 3 originally cited a stale pre-activation paragraph** in `communication/Independent_Verification_Efficiency_Protocol.md` Section 2 (a paragraph later corrected by Mission Control's separate protocol-alignment PR #602, since it still described Source 18's pre-amendment hard-coded Stage 19 ownership). Per `communication/missions/SB-GOV-IV-1.0/mission-control/06-ole-learning-review-and-narrow-correction-authorization.md`, the evidence reference was replaced with active Source 18 v1.1 Section 4.9 at the same existing source snapshot (`9595356fba67a5cfce9a66ca9f2272761adb669e`) — the claim's meaning (Codex preferred without becoming an architectural dependency) is unchanged; only the evidence citation was corrected. No new harvest or fingerprint change was required.
- No other schema, provenance, or screening failures occurred during this cycle.

---

## 5. Candidate lessons and anti-patterns

Six candidate learning items were drafted (all `maturity: CANDIDATE`, `authority_effect: NONE`, `evidence_strength: DIRECT`, `confidence: HIGH`), stored at `organizational-learning/candidates/SB-GOV-IV-1.0/`:

| #   | File                                                                             | Title                                                                                                                 |
| --- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 01  | `candidate-01-lifecycle-authority-operating-method-separation.json`              | Keep a governing lifecycle source lean by publishing operating-method detail as a subordinate protocol                |
| 02  | `candidate-02-actor-flexible-verifier-without-weakening-mandatory-gate.json`     | Removing a named-provider single point of failure is distinct from weakening the gate itself                          |
| 03  | `candidate-03-risk-triggered-verification-budget-classification.json`            | Classify verifier effort by named risk triggers, not by file type or change size                                      |
| 04  | `candidate-04-evidence-classes-prevent-redundant-reexecution.json`               | Classifying evidence by method lets a verifier reuse CI results without duplicating deterministic work                |
| 05  | `candidate-05-finding-scoped-reverification-with-named-escalation-triggers.json` | Finding-scoped re-verification is safe only paired with explicit escalation triggers                                  |
| 06  | `candidate-06-governance-activation-sequencing-before-product-acceleration.json` | Risk: gating Product Mission acceleration on a governance mission's own closure still depends on a manual OLE trigger |

Each candidate's `anti_patterns` array names the specific failure mode it guards against (e.g., conflating "provider not required" with "verification not required"; classifying effort by surface signals instead of risk; re-running deterministic CI locally to manufacture independent-execution evidence). See the individual candidate files for exact wording and conditions of applicability.

---

## 6. Unresolved risks / follow-ups

Carried forward unchanged from the closure envelope's `retained_followups`:

1. **`SB-P-1.12` remains explicitly NOT ACTIVATED**, gated behind this mission's own OLE learning handoff plus formal communication closeout.
2. **The actor-flexible Independent Verification Actor role is activated but not yet operationally exercised** end-to-end in a real mission under the new model — the architecture is proven on paper and in governance record, not yet in a live Stage 19 run.
3. **Package C remains outside Source 18** by design; mission-control/02 notes a future short cross-reference from Source 18 could be considered separately, but none was made part of this activation.
4. **The manual OLE-trigger dependency recurred** (Candidate 06): this handoff again required an explicit human-issued instruction to begin, the same gap already retained as unresolved for SB-ORG-LEARNING-1.1 (Stage 4B, GitHub Issue #590). Stage 4B remains deferred and unimplemented; this recurrence is expected, not new.

No new risks or follow-ups beyond what Mission Control's own activation and handoff-initiation records already surfaced; this section is a faithful carry-forward.

---

## 7. Tool / resource / capability observations

- **This mission's own governance protocol (SB-IV-1.0) explicitly cites SB-ORG-LEARNING-1.1's promoted learning** (its Section 15 references the Stage 5 final re-verification record and the `promotion-01-narrow-finding-scoped-correction-cycle` promotion) as design precedent — a concrete, real instance of promoted `MISSION_SCOPED` organizational learning being read and reused by a _different, later_ mission's Founder-approved governance design, not merely stored for hypothetical future use.
- **The shared working directory on this machine is reused across actor sessions** (Claude Code and Codex both operate on the same local checkout at different times): this round began by finding uncommitted, unrelated local changes to `communication/missions/SB-GOV-IV-1.0/README.md` and two untracked log files from a prior Codex session. They were preserved via `git stash` (not discarded) before proceeding, since they were not this session's work to alter or remove. This is a process observation about this environment, not a sourced/evidenced candidate claim, and is not offered as reusable organizational learning in its own right.
- **The evidence-allowlist discipline held cleanly across missions:** all 19 evidence references in this cycle resolved within `communication/**`, with zero need to reach into `organizational-learning/**` for primary evidence, reconfirming the structural separation between generated OLE output and citable evidence.

---

## 8. Confidence, evidence strength, maturity, freshness

- **Maturity:** all 6 candidates are `CANDIDATE`; none is `CORROBORATED`, `VALIDATED`, or `INSTITUTIONALISED`. This report is likewise informational only.
- **Authority effect:** `NONE` across every generated artifact in this handoff (closure envelope, receipt, all 6 candidates, this report). No governance, Product Truth, Source 18, or SB-IV-1.0 mutation occurred or is implied.
- **Evidence strength:** `DIRECT` for all 6 candidates — every claim cites a specific, independently-resolved, real committed document at the pinned `source_snapshot_ref`.
- **Confidence:** `HIGH` for all 6 candidates.
- **Freshness:** every evidence reference's `evidence_date` is `2026-09-18T18:15:50Z` (the commit date of canonical `main` at handoff time, `9595356fba67a5cfce9a66ca9f2272761adb669e`); every `observation_date` is `2026-09-18T18:30:00Z` (this session). No item is stale relative to its own source as of this report.
- **No-material-reusable-learning statement:** **not applicable.** Mission Control's own handoff-initiation record (`mission-control/05`, Section 2) already determined substantial reusable learning exists and explicitly recorded `NO MATERIAL REUSABLE LEARNING — NOT APPLICABLE`; this cycle's findings are consistent with that determination.
- **Explicit non-claims:** this report does not claim mission closure, does not self-promote any candidate to a higher maturity, and does not self-merge. Promotion of any of the 6 candidates remains a separate, later, human-controlled decision under `PromotionReviewSchema`, exactly as previously proven for `SB-ORG-LEARNING-1.1`.

---

## Context-refresh recommendations for future Smart Business missions

1. Any future mission introducing a new lifecycle-adjacent operating protocol should be pointed at Candidate 01 (lean lifecycle source, subordinate protocol) before deciding where new operating-method detail lives.
2. Any future mission proposing to replace a hard-coded actor/provider assignment in governance should be pointed at Candidate 02's preserved-invariant discipline.
3. Any future mission designing reviewer/verifier capacity allocation should be pointed at Candidate 03 (risk-triggered, not surface-triggered classification) and Candidate 04 (evidence-class reuse without redundant re-execution).
4. Any future mission designing or exercising a correction/re-verification cycle should be pointed at Candidate 05's named escalation triggers, alongside the already-promoted SB-ORG-LEARNING-1.1 precedent it builds on.
5. Any future mission sequencing its own closure against a dependent program's acceleration should be pointed at Candidate 06, including its explicit note that the manual OLE-trigger gap (Stage 4B, Issue #590) has now recurred across two consecutive mission closures.
