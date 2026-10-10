# SB-P-1.15 — MC-47 S7-PAR Checkpoint 4 Source-Metadata Reconciliation Stop

**Status: PROPOSED — effective only after Founder/authorized-human merge and independent protected-main verification.**  
**Authority:** Source 18 Stage 7; canonical MC-39 through MC-46.  
**Verified protected main:** `12ca9082ba43e51684d56f6b4f4527379bcf64bf`.  
**MC-46 canonical blob:** `af21359b4223637c630304f3d1577adf0b5a0cd5`.  
**Challenged PR #870:** OPEN/DRAFT at `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`.  
**Independent PR #898:** OPEN/DRAFT at `28fa0ef78db13150415108852f485cd8d56839ec` with only unchanged 07b, 07c and 07d annexes; NOT FOR MERGE.

## 1. Stop accepted; source fidelity NOT validated

At the MC-46 authorized final source verification, the same conditionally eligible S7-PAR reviewer reopened its private JSON and verified **118,438 UTF-8 bytes**, SHA-256 `f72b692b6a58aae53cd38999270df647050f0bdc97f98f187008ff1cec805567`, 52 unique §8.7 in-scope records and nine populated assessment fields. It then freshly compared against immutable FCTM and challenged Blueprint and identified **104 metadata discrepancies involving every one of the 52 rows**: `source_pointer` values are explanatory/abbreviated rather than exact canonical FCTM source pointers (52), and `original_engineering_evidence_claim` contains generic §20.6 references instead of exact individually verified author claims (52). A locally persisted per-ID failure report was reported at SHA-256 `01fb4e543618bf6966eb09c9d9430c39f5146b94c2d3e93aab718e9f6ed22055`, but the underlying report was not attached to Mission Control for independent byte audit. These are 104 **field defects**, not 104 extra requirements.

The reviewer did not silently modify the JSON, complete the authoritative 52-row gate, produce final Markdown, scan secrets, create 07g or commit. Earlier private structural PASS did **not** prove row-level source fidelity. The 43 corrections / 9 accepted-direction-evidence-held and severity 3 Critical / 29 High / 19 Medium / 1 Low are provisional documentary draft classifications, **not** accepted independent source-verified conclusions.

Mission Control independently reconfirmed protected main, MC-46, PRs #870/#898, and the unchanged three permitted PR #898 paths. **MC-47 ACCEPTS THE CORRECT PREPUBLICATION STOP; Checkpoint 4 is still NOT PUBLISHED / NOT ACCEPTED; approved documentary coverage remains 69/694.** No demonstrated T7 approved-scope change or T8 product/engineering infeasibility arises from an inaccurate review metadata field.

## 2. Targeted read-only/private correction — effective only after human merge

Authorize the same continuing, conditionally eligible independent S7-PAR reviewer after MC-47 Founder/authorized-human merge and independent protected-main verification to correct **only the private §8.7 working artifact and its private validation reports**, with **NO GitHub writes**:

1. Recheck actual persistent JSON, existing digest and failure-ledger integrity before modification. If unavailable or mutated without audit, STOP. Maintain an immutable private baseline copy and separately named corrected working version; record before/after bytes and SHA-256 and a machine-readable 52-ID field-diff.
2. Fetch FCTM at exact blob `65eeaf8d31b81595b971c22895615a096555f84f` and challenged Blueprint at exact blob `da1628804379cc58764a9adaa2819ce19884ab7a` **freshly**. For each canonical ID, extract the complete, unmodified canonical `source_pointer` field and original §20.6 `original_engineering_evidence_claim` **from their actual row**, not from headings, approximations, guessed indices, general descriptions or another row. Preserve exact source text and reference/provenance. If the challenged register does not contain a separately labeled evidence-claim field, explicitly document the actual schema and extract the true original evidence/rationale text with accurate label; never invent a field or attribute a paraphrase to the Engineering Reviewer.
3. Compare all 52 per-ID source/§19/§20.6 mappings, requirement kind, in-scope disposition, ownership, original severity/status/holds and specialist refs. Produce 52-row source-to-private audit with precise differences, actual source snippets or pointers and immutable source blobs. STOP on missing or ambiguous original evidence/holds rather than substituting generic text.
4. Apply **field-specific provenance corrections** without altering canonical Product Truth or automatically accepting independent engineering reasoning. After source alignment, reassess whether any of the nine independent substantive fields is affected by the corrected underlying obligation or challenged evidence; record necessary targeted substance changes and reasons, including seven provisional PASS items.
5. Save and reopen corrected private JSON and a complete collector-style validation/audit report. Recompute new bytes/digests, ensure exactly 52 in-scope IDs, all nine fields and supplementary metadata, row-level original source match, no omitted/duplicate/unexpected IDs, independent status/risk totals and all seven PASS scrutiny. Distinguish programmatic equality from independently reviewed source meaning; mark all proposed tests NOT EXECUTED. Report all remaining mismatches with IDs/field/reason.
6. Return **PRIVATE METADATA RECONCILIATION PASS** only if every canonical comparison passes, or **STOP — SOURCE RECONCILIATION FAILED** with exact remaining blockers. Include artifact availability/transfer mechanism if real, not inferred sandbox paths.

**MANDATORY STOP before Markdown publication:** Do not assemble/publish a canonical 07g file or execute any GitHub mutation. A later separately merged MC authorization will control final Markdown/secret scans and conditional publication. Do not begin another annex or master, and do not claim Stage 7 completion.

## 3. Preserved Product Truth, assurance and governance

Retain conditionally declared reviewer continuity/non-authorship/nonoverlap with S7-SP-1–6 (including distinct GPT-6/OpenAI S7-SP-6), acknowledging shared model/source correlation and absence of cryptographic session identity. FPDR-01/02/03 remain approved: T1 correction notification prospective-only, T6 latest-valid native briefing, DC-03 existing-business timezone unresolved, FDB-1(d2) notification integration ownership UNASSIGNED, U-3/U-5/DC-06 separate governance. Preserve D12/D13/D14/DTX/PQ-2 and scheduler, notification, security/tenant isolation, financial, privacy/retention, AI zero-write, migration/restore, and executed CI/runtime evidence holds. No amendments to PR #870/#898, existing annexes, FCTM, Blueprint, Source 18, contracts, Founder records, specialist reports, app, SQL, Supabase, financial/provider/notification systems or production. No EIS, implementation, deployment, release or self-merge.

**STOP FOR FOUNDER HUMAN MERGE OF MC-47.**
