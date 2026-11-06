# SB-P-1.12 — Founder Decision Record 11

# P-1 Verified-Identity Evidence Timing: Founder Clarification

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Context:** G1/G2 participant-binding interface; P-1 Option A of Founder Decision Record 10
**Founder:** Riyas PK
**Decision status:** `PROPOSED — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION` (Source 18 v1.3 §3.3)
**Prepared by:** Claude Code, SB-P-1.12 Kernel / Identity & Authority documentation room, under [MC-788](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6688312914). Preparer only; not a reviewer, approver or merger of this record
**Baseline:** `main@7ac1b8bdbaef0880896c051f14366f4911c7ba09`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This record documents one Founder clarification of **when** P-1 identity evidence must be produced. It is a **timing decision only**. It does not weaken P-1, waive any evidence or test, select another identification method, amend any source, approve any EIS text or authorize implementation, tests or release.

Founder Decision Record 10 (`communication/missions/SB-P-1.12/founder/10-g1g2-participant-binding-founder-product-decision-record.md`, blob `c93ca933ea014447516505c9427e278e0c24ce26`) stays intact and fully effective. This record does not rewrite it, and P-1 Option A is not cancelled or relaxed. Locked SB-P-1.12 EIS v0.4 (blob `8b0aaa79acee8ec1930292bde9b22d87fd489025`) stays authoritative. The draft v0.5 candidate on PR #1117 (blob `b524c0cc7f70e897dc4ae3b398df57fec8e5ffa6`) is not approved by this record.

## 1. How to Read This Record

| Kind | Where | Authority |
|---|---|---|
| Founder statement, verbatim as transcribed by Mission Control | Section 3 | The Founder |
| Clarification text accepted by the Founder's reference, authored by Mission Control | Section 4 | The Founder's acceptance in Section 3; the wording is Mission Control's |
| Mission Control interpretations and effect statements | Section 5 | Mission Control, subordinate to Sections 3 and 4 |
| Preparer restatement, holds and accounting | Sections 2, 6 to 9 | None. Sections 3 and 4 prevail |

**Provenance limit.** No text in this record was authored by the Founder on GitHub. The Founder's sentence reached the repository through a Mission Control comment posted by the `SmartBusinessv1` account. This record copies Mission Control's comment text byte for byte, extracted programmatically, and does not claim more.

## 2. Decision Recorded

| ID | Selection | Founder source | Mission Control record |
|---|---|---|---|
| P-1 evidence timing | **Approve the proposed clarification.** Documentary SA-05 evidence of supported verified-email capability may satisfy feasibility for approving a conditional Kernel v0.5 specification. Project-specific runtime identity proof, secure invitation matching, negative security tests and independent implementation verification remain mandatory before the corresponding sign-in method or external participant route is activated. Unverified methods stay disabled or fail closed | Founder response to MC-787 | [MC-788](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6688312914) |

The restatement above is the preparer's. Sections 3 and 4 prevail. ENT-1 is **not** decided by this record (Section 6).

## 3. Founder Statement

Reproduced from [MC-788](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6688312914), where Mission Control records it as "Founder expressly returned" (comment `created_at` = `updated_at` 2026-11-06T15:19:58Z). The Founder's sentence is reproduced whole; Mission Control's bold markup around it is omitted.

```text
“FOUNDER DECISION MC-787: I approve the proposed P-1 evidence-timing clarification exactly as presented in MC-787. Preserve P-1 Option A security, fail-closed methods, ENT-1 hold, Source 18 gates. This does not approve exact EIS text, merge, tests, implementation or release. Record this decision canonically and route the smallest governed Section 23 timing correction.”
```

## 4. Clarification Accepted by Reference (Mission Control Authored)

**Authorship.** This text was drafted by Mission Control, not the Founder. The Founder accepted it by reference in Section 3. Its first-person wording does not make it Founder-authored. MC-788 states:

> **Provenance:** Founder supplied the approval sentence in the Mission Control conversation; the accepted longer clarification was drafted by Mission Control in that same conversation. This GitHub record is MC's transcription/receipt; it does **not** represent a direct Founder-authored GitHub comment. Under Source 18 §3.3 a **human-merged canonical Founder record** is required to make the clarification an authoritative input to the source amendment. Existing canonical Founder Decision Record 10 (blob `c93ca933ea014447516505c9427e278e0c24ce26`) remains intact and fully effective. Do not rewrite it or treat its original P-1 requirement as cancelled.

### 4.1 Accepted clarification, as quoted in MC-788

MC-788 introduces it:

> The approved proposed clarification of [MC-787](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6688098967) has the following scope (quote from proposed clarification in Mission Control's response, accepted by Founder's explicit reference; do not misattribute the draft's authorship to Founder):

> **Founder Decision — P-1 Evidence Timing Only**
>
> I reaffirm **P-1 Option A** in full.
>
> The merchant must identify the intended person by email before invitation. Smart Business must verify that identity using an existing supported sign-in method before permitting participant access.
>
> I approve separating the evidence stages as follows:
>
> **Documentary source approval:** Existing SA-05 evidence of supported verified-email capabilities may satisfy the feasibility requirement for approving a conditional Kernel v0.5 specification.
>
> **Implementation and activation:** Actual project-specific verified-email identity proof, secure invitation matching, negative security tests and independent implementation verification remain mandatory before the corresponding participant authentication method or external route can be activated.
>
> Any unverified method must remain disabled or fail closed.
>
> This decision changes only **when runtime evidence must be produced**. It does not weaken identity verification, authorize another identification method, approve the current EIS text, authorize implementation or permit release.
>
> The existing ENT-1 hold and all Source 18 security and human-approval gates remain unchanged.

### 4.2 Recommendation text as posted in MC-787

For traceability, the recommendation that [MC-787](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6688098967) posted on GitHub (comment `created_at` = `updated_at` 2026-11-06T15:10:18Z), also Mission Control's wording, reads:

> “I reaffirm P-1 Option A without changing its security design, intended-email method, single-use matching, fail-closed controls or verified-identity threshold. SA-05's existing documentary provider-capability findings may satisfy the feasibility evidence needed to approve and lock the conditional Kernel v0.5 source specification. Current project-specific email/password and Google verified-identity claim proof, together with actual G1/G2 negative tests, remain mandatory **before the respective method or external participant route is activated/used**, under separately authorized non-production tests, implementation verification and release gates. An unverified method must stay disabled/fail closed. This is an approval to **move the timing of runtime evidence**, not an assertion that it exists, not an EIS exact-text approval, not an implementation/release authorization, and not a waiver of any test.”

### 4.3 Mission Control provenance determination (MC-789)

The Founder approved the complete **in-chat displayed “Founder Decision — P-1 Evidence Timing Only” clarification**, reproduced in Section 4.1, through the MC-787 choice accompanying that text. The Founder response says “exactly as presented in MC-787” and was made in that in-chat context. Section 4.1 is **Mission Control-authored wording accepted by the Founder by reference**, not independently Founder-authored prose. Section 4.2 preserves a **different Mission Control-authored recommendation** posted on GitHub under MC-787; it is included for the historical comparison but is **not the separately approved referent**. These texts are not byte-identical: Section 4.2 mentions “approve and lock” and differently specifies tests; Section 4.1 is the full selected clarification and expressly preserves ENT-1 and Source 18 gates. No broader lock permission or waiver is inferred from the GitHub recommendation. This classification does not invent a second Founder decision, authorize the EIS, or close an evidence hold. P-1 Option A and the fail-closed, before-activation proof requirement remain unchanged.

## 5. Mission Control Interpretations and Effect

These extracts are Mission Control's, verbatim from [MC-788](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6688312914) "Effect and non-effect". They are subordinate to Sections 3 and 4, and the full source comment prevails over these extracts.

> - **P-1 design remains binding:** merchant email before issue; appropriately verified identity through an existing sign-in method; canonical equality with conservative normalization, no aliases/dot/plus heuristics, no editable metadata, no token-submitted email authority, no unsafe auto-confirmed password email or unverified Google identity; binding only to verified principal; target-scoped, no membership/Owner powers, no cross-business authorization.
>
> - **Timing clarified:** SA-05's existing verified provider-capability documentary findings can support **conditional design/source approval**, but actual project-specific method proof and G1/G2 authorization/negative tests are **mandatory before enabling the respective method or participant route**, not evidence claimed to exist today. `participant_path_not_ready` and fail-closed behavior are preserved for all unverified methods and missing entitlement/readiness conditions. If a provider capability proves incompatible, stop the method and return precise blocker for governed Founder choice.
>
> - **ENT-1** pending invitation retain/end through entitlement suspension remains HELD, with acceptance/assigned actions denied and fixed 168-hour expiry continuing without pause, no silently selected lifecycle result. Cabinet PQ-14, unknown action selector, notification, DENT/DLEG, 19 DI/five DH, C-4/PK-0, and later runtime/implementation gates remain intact.
>
> - **No approval** of proposed v0.5 EIS blob `b524c0cc7f70e897dc4ae3b398df57fec8e5ffa6`; no evidence is marked PASS, and no merge, EIS re-lock, G1/G2 enablement or implementation is authorized.

## 6. Holds Preserved

| Hold | State | Owner |
|---|---|---|
| **P-1 runtime identity evidence** | **HELD for activation.** No sign-in method is proven. [MC-725-S](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6576508947) returned `HELD — EVIDENCE GAP`; [MC-728-S](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6579468817) found email and password configuration-ready but not verified, and Google configuration-unverified; [MC-732](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6601340304) recorded zero signups after a preflight stop. This record moves when that evidence is required, not whether it is required. No evidence is marked PASS. A method shown incompatible stops and returns to the Founder; no substitute method is selected | Mission Control; SA-05; future implementation lane |
| **SA-05 documentary evidence** | Documentary provider-capability findings only, conditional on actual project settings. Not runtime proof of either method | Mission Control; SA-05 |
| **Fail-closed behaviour** | Unverified methods and missing entitlement or readiness conditions return `participant_path_not_ready` and cannot issue, accept or activate participant access | Source text; implementation lane |
| **ENT-1** | **HELD.** Whether a pending invitation is retained or ended during entitlement suspension is not decided. Acceptance and protected actions fail closed meanwhile. The fixed 168-hour period continues without pause | Mission Control; SB-P-1.19 |
| C-1 | SB-P-1.12 EIS amendment: a separately authorized minimal Section 23 evidence-timing amendment on draft PR #1117, delta review, Founder exact-text approval, human merge and re-lock | Mission Control; Founder |
| C-4, PK-0 | Three-file package reconciliation after any re-lock | Mission Control |
| Other dependencies | Cabinet PQ-14 and the unknown action-to-capability selector; the SB-P-1.15 non-member notification gap; `DENT`; `DLEG`; `EQ18-15`; all 19 external `DI` rows and five `DH` legs of SB-P-1.18 | Their owners |

## 7. Classification

| Trigger | Treatment |
|---|---|
| **T3** | P-1 evidence timing is a Founder product-condition clarification, **decided** as recorded here |
| T7 | Not fired. No row is omitted, deferred, simplified or reclassified |
| T8 | Not established |
| T6 | Not assessed by this record. It is screened on the exact Section 23 amendment text |

## 8. Effect and Consumption

- **What this record does:** once human-merged and verified, it is the canonical record of the P-1 evidence-timing clarification, an authoritative input to a later minimal Section 23 amendment of the SB-P-1.12 EIS.
- **What it does not do:** it does not amend locked EIS v0.4 or draft v0.5, approve EIS text, mark any evidence PASS, close a hold, enable any sign-in method or participant route, or authorize tests, implementation or release.
- **Relationship:** it supplements Founder Decision Record 10, which stays unchanged and fully effective.

## 9. Status

`PROPOSED — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`. Requires Mission Control exact-file and provenance verification and one finding-scoped governance review before any Founder merge proposal. The preparer does not review, approve or merge it. **Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
