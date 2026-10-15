# SB-P-1.16 — Stage 3 Preparation Return

**DRAFT — STAGE 3 PREPARATION — NOT A FOUNDER DECISION**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Prepared by:** Claude Code, Definition Actor (MC-107 §13.1), under MC-115  
**Canonical baseline:** `main@59730d67a7efbb3014e63937e56e5b2a17994b2a`  
**Companion:** `07-stage3-founder-decision-brief-draft.md`  
**Revision:** MC-116 clarifications to Q1 (contested reading, possible T7, separate Q1(b)) and Q3(b) (proposed new product choice; no invented overdue date). MC-117 clarifications to Q1(b) (no re-recording of historical sales), Q2 (four distinct situations; verified part-payments are legitimate) and Q6 (preparation and approval are not delivery; Source 11 screen)  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Baseline and trigger verification

| Check | Result |
|---|---|
| Protected `main` | `59730d67`: PR #960 squash merge (merged 2026-10-14T15:48:08Z from head `71a07640`) |
| Change since the Stage 2 base `e4e382c7` | Exactly the six PR #960 files |
| Stage 2 artifact blobs on `main` | FCTM `5e1794c5`, inventory `5efaa27e`, Truth Pack `4a7bfe4f`, intake `2cf06c17`, completion report `ee7af209`, MC-113 gate record `59207b2a`: all equal to the blobs reviewed under MC-113 |
| Stage 1 FCTM scaffold | `466780f0`, unchanged |
| Recorded triggers (Truth Pack Part D.3) | T1, T2, T3, T4 and T6 fire; T5, T7, T8 do not. One `ESCALATED` row (`BP-§10.3-S2`). Founder Decision Gate: TRIGGERED (MC-113 §3) |

## 2. Proposed questions for Mission Control review

Fully stated, with options, consequences, principles and affected rows, in the brief Section 4.

| Q | Covers | Separate decisions | Kind | Ready to ask |
|---|---|---|---|---|
| Q1 | U-01 (escalated), DC-15 | (a) which mission owns the customer record credit links to; (b) whether and how past credit-method sales enter customer balances | Founder product choice resolving a source conflict. Option A's narrow reading of Build Plan §10.3 is contested; Option B is a possible T7 trigger | Yes, after Mission Control's view on whether Option A's contested reading is an interpretation or a change |
| Q2 | U-02, DC-03 | Which situation the merchant-facing words "partially matched" name: verified part-payment, mismatch, or two separate labels. Not whether verified part-payments are legitimate | Founder product choice | Yes |
| Q3 | U-03, U-04, DC-01, DC-02 | (a) "risk" means factual context only; (b) how "overdue" is decided without a due date | (a) confirmation, one source-supported option; (b) Founder choice. Option B (Owner default period) is a proposed new product choice, not an existing requirement | Yes |
| Q4 | U-06 (and U-09 follows) | Minimum payment-evidence sources for Phase 1 | Founder product choice | **No.** Payment/integration specialist evidence first |
| Q5 | U-07, DC-09; SB-P-1.15 R15-11 | Manager delegation granularity for credit and reconciliation | Founder product choice | **No.** Security specialist capability model first |
| Q6 | U-05 (DC-10 part) | Prepare customer messages for merchant approval, with no delivery before an approved channel. Preparation and approval are not delivery; the seven `DNTF` rows stay `IN SCOPE`, are not marked complete and do not move | Confirmation only | Yes |

## 3. Screened items

| Item | Screen result |
|---|---|
| U-05 | Screened by Mission Control (MC-117): no direct textual prohibition of merchant-approved credit communication in Source 11; no outbound delivery authorization follows. Founder dependency reduced to Q6 |
| U-08 | MC-112 determination preserved verbatim: conditionally noncritical for Stage 2 documentary reconciliation and non-destructive payment-evidence workflow definition; U-08 remains OPEN. The remaining dependency is a Founder/legal determination on the lifecycle elements in Truth Pack Part D.5, needed before any lifecycle-dependent Blueprint lock. Legal specialist evidence is needed first; not proposed for the first dialogue |
| U-09 | Unchanged: OPEN, follows Q4 |
| U-10 | Unchanged: OPEN, not on this mission's critical path (GPCV §9 `REJECT FOR CURRENT CORE`) |

## 4. U-01 escalation and counts

`BP-§10.3-S2` stays `ESCALATED`. **19 FCTM rows carry `ESC-U01`: 18 `IN SCOPE` rows are blocked, and one `DELEGATED` row (`22-§5-5`, owned by SB-P-1.12) is flagged.** The full lists are in brief Q1.

## 5. Distinctions applied (MC-115 item 6)

- **Founder product choices:** Q1–Q6, plus U-08 when lifecycle-dependent locks arise.
- **Engineering choices, not put to the Founder:** DC-04 to DC-08, DC-12 to DC-14, DC-16, exact state names, matching signals and windows (brief Section 3).
- **Already answered by approved sources, not reopened:** brief Section 2 (no hard block, no fixed limit, no scoring, human resolution of ambiguity, no authoritative unauthenticated evidence, no duplicate financial writes, no reinterpretation of past sales, WhatsApp in SB-P-1.20, provider choice as implementation detail).
- **No silent scope reduction or reassignment is recommended.** Q1 Option B would be a reassignment (T7). It is shown as an option the sources support, with its consequences stated, and is not recommended. No option is recommended over another.

## 6. Specialist evidence needed before asking

| For | Specialist | Evidence needed |
|---|---|---|
| Q4 (and U-09) | Payment / integration specialist, read-only, when Mission Control authorizes | Which C15 §5 sources are available to small merchants; authentication; consent and legal requirements; credentials and activation needs under Build Plan §5.4 |
| Q5 | Security specialist | Grantable Manager capabilities that the SB-P-1.12 kernel can enforce (SB-P-1.15 DC-06) |
| U-08 | Legal specialist | Retention, deletion and backup obligations for payment evidence |

## 7. What was not done

- No Founder dialogue was conducted and no decision was requested from the Founder.
- No Founder Product Decision Record was created.
- The canonical FCTM, Truth Pack, Stage 1 and Stage 2 records, source contracts, Product Truth and Build Plan were not modified.
- Published as a draft pull request under MC-116 only. No Mission Control gate record is included, and no merge.

## 8. Limitations

- The options are my reading of the sources. Each option names its source; Mission Control should check that none is a disguised change.
- Q1 Option A depends on reading Build Plan §10.3 as limited to directory-indexed search. **That reading is contested, not settled**, which is why Q1 stays a Founder question. Q1 Option B is a possible Source 18 T7 trigger. Q1(b) is a separate choice.
- Q3(b) Option B (an Owner default period) is a **proposed new product choice, not an existing approved requirement**. It is not recommended or assumed. The boundary that no overdue date is invented holds under every option.
- The author is not independent of the Stage 2 pack these questions come from (MC-107 §13.1).

**DRAFT — STAGE 3 PREPARATION — NOT A FOUNDER DECISION.**

**STOP FOR MISSION CONTROL REVIEW. Stage 3 Founder dialogue: NOT YET AUTHORIZED. Stage 4 Blueprint drafting: NOT AUTHORIZED.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
