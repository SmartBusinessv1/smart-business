# SB-P-1.12 — R-2 Positive Personal-Identity Deletion Source-Coverage Assessment

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Work package:** `SB-P-1.12-WP-R2-SOURCE-COVERAGE-ASSESSMENT`
**Prepared by:** Claude Code, MC-02 Definition Actor, source and accounting evidence preparation only (MC-97, `communication/live/instruction1.10.md`; activated by MC-98)
**Parent gate:** `communication/live/instruction1.9.md` (MC-92)
**Prepared:** 2026-09-27
**Canonical baseline:** `main@c1b5ab64d80a3b8c48d5b9d71af3810030732cd9` (PR #661, MC-98)
**Status:** `READ-ONLY ASSESSMENT — OPTIONS NOT RANKED OR ENACTED — ALL APPROVALS NOT YET GIVEN — R-2 OPEN / CRITICAL PATH / SOURCE-COVERAGE HOLD`

## 1. Scope and what this is not

This assessment inventories the evidence for R-2 and presents source and mission accounting options for Mission Control. It does not change any source, row, assignment or commitment. It does not reopen Founder Record 05, supply legal conclusions, statutory periods, commercial settlement rules or provider behaviour, design a mechanism, or claim that deletion is safe. ESC-1 (the Owner API business `DELETE` path and `businesses.owner_id → auth.users ON DELETE CASCADE`) stays an open T8.

## 2. Source intake (canonical bytes at `main@c1b5ab64`)

Classification key: **AO** approved obligation; **FD** Founder decision; **CA** inferred candidate anchor; **UI** unresolved input; **HE** historical or governance evidence.

| # | Path | Blob | Section or line | Evidence (quotation or bounded paraphrase) | Class |
|---|---|---|---|---|---|
| S1 | `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md` | `f52b5ebd8a4040d114f2ca8629f1a56bcbb608c2` | §2.2 F-3 (line 77); ESC1-6 (lines 148–154) | Founder: "Delete personal identity too after obligations". ESC1-6: identity deleted after the final owned business is permissibly deleted, obligations satisfied and no other authorized membership remains; retained while any other membership remains; never an uncontrolled cascade | FD |
| S2 | Same | Same | ESC1-7 (line 156 onward) | History intact until a permitted, governed, law-limited deletion; deletion recorded | FD |
| S3 | Same | Same | ESC1-8 (line 163 onward) | SB-P-1.12 owns authority, isolation, history-integrity, transfer-authorization and former-Owner-denial foundations; SB-P-1.19 owns the merchant-facing Pause, cancellation, Stop and Delete, transfer, contact and payment experience | FD |
| S4 | `docs/phase-1-mission-blueprint/smart-business-features/18_Subscription_Payment_and_Account_Lifecycle.md` | `6b96b10aee35036b18afb3bba7a4950e7b36b7fb` | §1 (lines 10–14) | Manages how "a Smart Business account/business" moves through states including "eventual deletion according to current policy" | AO; CA for identity |
| S5 | Same | Same | §12 (lines 164–179) | Clear notice; grace and retention handling; export opportunity; "privacy-respecting deletion"; "controlled irreversible deletion process"; "audit/proof of deletion"; exact duration unresolved | AO; CA for identity |
| S6 | Same | Same | §19 (lines 277–286) | "Privileged lifecycle/admin actions require audit"; "Deletion must be deliberate and controlled" | AO |
| S7 | Same | Same | §22 scenario 8 (line 324) | "Final deletion follows approved current policy and audit" | AO |
| S8 | Same | Same | §§8, 10, 11 (lines 104–162) | Payment failure, cancellation and export obligations; no data-hostage retention | AO |
| S9 | Same | Same | §25 item 3 (line 360) | Retention and deletion duration listed as unresolved (answered for business windows by FR05 ESC1-2 to ESC1-4) | HE |
| S10 | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` | §9 (line 377); §10.8 (line 742 onward); §11 (line 836 onward) | Contract 18 assigned to `SB-P-1.19` ("subscription/payment/account lifecycle"); §11 names §§9–12 as the approved sources for later-mission assignment | AO |
| S11 | Same | Same | §15 item 6 (line 938) | "exact long-term retention/deletion duration after cancellation/non-payment" unresolved | HE (answered in part by FR05) |
| S12 | `docs/phase-1-mission-blueprint/smart-business-features/21_Permissions_Business_Isolation_and_Role_Authority.md` | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` | §§4, 5, 6, 7, 15, 18, 19, 21 | Owner authority, membership, isolation, server-side authorization, authentication versus authorization, confirmation binding, auditability, privacy and dignity. No personal-identity deletion obligation | AO |
| S13 | `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` | `ca4a0fdaec1ac619663f768ccb2ff10f33c590ff` | §5 (identity), §13, §14, §20 (line 363), §23 (line 399) | Identity foundation; confirmation; audit and human context; "keep historical records durable"; "Merchant data belongs to merchant", "Staff data is role/purpose limited". No personal-identity deletion obligation | AO |
| S14 | `docs/phase-1-mission-blueprint/smart-business-features/20_Onboarding_and_First_Experience.md` | `56ed4d11d2719abb83e6f9e862a51ffc5ebdf005` | §16; §19 (line 278) | Owner as initial authority; privacy and trust in onboarding. No deletion obligation | AO |
| S15 | `merge/active/11_Smart_Business_Product_Truth_Map.md` | `16897d6c875bb3e45e26cd32a99bc0510c4bdea1` | Line 29 | "Business owners own their data." | AO (principle) |
| S16 | `merge/active/01_Smart_Business_Master_System_Manifesto.md` | `785bc627ae3e46d0aadf9ed54b728a0214ee1aac` | Lines 146, 278 | Privacy-policy URL (external, not repository source); "Customer data belongs to the customer." | AO (principle); external page not read |
| S17 | `merge/active/00_Lighthouse_Constitution.md` | `9594b8024cc17d79f05d915ceda2d79de847e4d2` | Whole file searched | No deletion, retention or personal-data provision found | HE (absence) |
| S18 | `merge/active/16A_Smart_Business_Constitution_Design_Principles.md` | `b6f9175e29a3324f24932d306ba3528da7c9a517` | Whole file searched | No deletion, retention or personal-data provision found | HE (absence) |
| S19 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` | §3.2 items 1, 5–7, 10; §6 Stage 3 (T1, T3, T7, T8) | Row form `<contract number>-§<section>-<ordinal>`; classification lock; completeness test against a source inventory; Blueprint carries row-keyed mapping; escalation | AO (governance) |
| S20 | `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` | `8c23d25cdb209a297a48652e31c59db5bcb4b66f` | §15 FA-11, FA-12, FA-14 to FA-18 (lines 505–512); R-1 to R-3 (lines 514–518) | Negative eligibility guards and referrals; R-2 stated as a critical-path hold with two unanchored parts | HE |
| S21 | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` | `8f3cbb502da1cf1cd32fd2c0a070beb3fe93f13a` | Rows cited below | No row for a positive personal-identity deletion; no Contract 18 rows (Contract 18 is not an in-scope contract of this mission) | HE |
| S22 | `communication/live/report1.8.md` | `44a96d6b25da4243fd668d5d80eb968f914d354d` | §9.2 | R-2 stop report: positive obligation and "relevant obligations" content not anchored | HE |
| S23 | `communication/live/instruction1.9.md` | `dab5d3097b20667fa9cee3f891f5b64ea92ed7ed` | §§2–4 | R-2A, R-2B, R-2C; four mandatory completion conditions | HE (gate) |
| S24 | `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` | Contract 18 row (line 153) | No advancing mission yet; next advancement "Subscription / Account Lifecycle Product Mission"; avoid "irreversible deletion rules without Founder decision" | HE |

Governance dispositions read: MC-90 ([comment 5855565746](https://github.com/SmartBusinessv1/smart-business/pull/659#issuecomment-5855565746)), MC-91 ([5855637640](https://github.com/SmartBusinessv1/smart-business/pull/659#issuecomment-5855637640)), MC-92 ([5855652209](https://github.com/SmartBusinessv1/smart-business/pull/660#issuecomment-5855652209)), MC-93 ([5855674582](https://github.com/SmartBusinessv1/smart-business/pull/660#issuecomment-5855674582)), MC-96 ([5855748375](https://github.com/SmartBusinessv1/smart-business/pull/659#issuecomment-5855748375)), MC-98 ([5855793332](https://github.com/SmartBusinessv1/smart-business/pull/661#issuecomment-5855793332)).

**Consistency note.** S24 records that no mission has yet advanced Contract 18; this is a progress column, not an assignment. S10 (Build Plan §§9, 11) is the approved assignment source and names `SB-P-1.19`. No conflict was found.

**SB-P-1.19 artefacts.** No SB-P-1.19 mission record, Blueprint or FCTM exists in the repository. Its responsibility is established only by S10 and S3.

## 3. A — Verified obligation inventory

| # | Obligation | Controlling FR05 | Contract or Build Plan source | Existing FCTM rows | Responsible mission by approved source | Independently verifiable acceptance condition and negative path | Gap or hold |
|---|---|---|---|---|---|---|---|
| 1 | **Positive personal-identity deletion action** | ESC1-6 (S1): **approved** Founder decision and source for the positive obligation | No identified faithful **numbered** contract or Build Plan anchor: none in C20, C21, C22 or the Build Plan. Candidate only: C18 §1, §12, scenario 8 (S4, S5, S7), which refer to account/business deletion without explicitly defining personal-identity deletion | None | **No explicit mission ownership of the positive action.** ESC1-8 allocates the SB-P-1.12 foundations and the SB-P-1.19 merchant-facing Delete experience, but does not expressly allocate the positive identity-deletion action to either mission; C18 (`SB-P-1.19`) covers account/business final deletion. This assessment does not treat SB-P-1.19 as the accepted owner | Once every eligibility fact is established, the identity is deleted through the governed path (timing not approved). Negative: not deleted while any condition is unmet | **R-2A gap** |
| 2 | Final-owned-business disposal | ESC1-3, ESC1-4, ESC1-7 | C18 §§10, 12, scenarios 6 and 8 (S5, S7, S8); C22 §20 | `22-§20-2` | `SB-P-1.19` (lifecycle, via S10); `SB-P-1.12` (integrity guard) | Identity deletion is ineligible until the person's last owned business has been deleted under the governed policy (FA-15, FA-14). Negative: a request while a business is still owned is refused | ESC-1; `22-§20-2` `BLOCKED`; legal input |
| 3 | Remaining-membership retention and denial | ESC1-6 | C21 §§5, 6; C22 §5 | `21-§5-2`, `21-§6-2`, `22-§5-3`, `22-§5-4` | `SB-P-1.12` | FA-12, FA-16. Negative: a request while any other authorized membership remains is refused, and the membership continues | ESC-1 |
| 4 | "All relevant obligations" satisfied | ESC1-6 | None defines the content. Related: C18 §§8, 10–12 (commercial and retention), C22 §23 (data ownership) | None | Not determined; needs legal/privacy/retention, Finance & Payments and `SB-P-1.19` input | Not specifiable until inputs exist (Section 5) | **R-2B gap** |
| 5 | Lawful, history and attribution preservation | ESC1-7 | C21 §19; C22 §§14, 20, 23 | `21-§19-2`, `22-§14-2`, `22-§20-2`, `22-§23-5` | `SB-P-1.12` | FA-17, FA-14. Negative: after a permitted identity deletion, businesses' histories are intact | ESC-1; legal and retention-policy input |
| 6 | Authorized, confirmed and audited path | ESC1-7 | C21 §§7, 15, 18, 19; C22 §§13, 14; C18 §19 | `21-§7`, `21-§15-5`, `21-§18-3`, `22-§13-3`, `21-§19-6`, `22-§14-8` | `SB-P-1.12` (kernel); `SB-P-1.19` for C18 §19 lifecycle actions | FA-18. Negative: a direct delete or uncontrolled cascade is refused and recorded | ESC-1 (both deletion paths) |
| 7 | Transferred-business survival and subscription/operating-state non-interference | ESC1-5, ESC1-6 | C21 §§5, 6; C22 §§5, 20 | FA-11 rows incl. `21-§5-10` | `SB-P-1.12` foundation part; `SB-P-1.19` lifecycle part (R-1) | FA-11. Negative: no cascade or write reaches the transferred business or its state | ESC-1; R-1 two-mission dependency |
| 8 | Merchant-facing lifecycle (Pause, cancellation, Stop and Delete, notices, export) | ESC1-2 to ESC1-4, ESC1-8 | C18 §§6, 10–13, 17, scenarios 6–8 | None in this mission | `SB-P-1.19` (S10) | Owned by `SB-P-1.19`; not SB-P-1.12 scope | Outside SB-P-1.12 |

## 4. B — Anchor and mission accounting options (not ranked, not enacted)

### Option (i) — Supplementary row-keyed acceptance anchored to existing approved numbered sections

- **What it would be:** a further Blueprint §15 acceptance line for the positive action, anchored to existing SB-P-1.12 sections such as C22 §5 (identity), C22 §23 (data ownership) or C21 §19 (audit).
- **Source 18 §3.2 as-is:** allowed only if the anchor is faithful. Those sections govern identity data, ownership and audit; none states that a personal identity must be deleted. They already anchor the negative guards FA-15 to FA-18 faithfully. Using them for the positive action would stretch them into a requirement they do not state, which the MC-97 stop condition forbids ("a numbered-source anchor would be invented").
- **Triggers:** none if it were faithful. An unfaithful anchor is not permitted under Source 18 §3.2 at all, and no Stage 3 trigger would cure it; it would be a source-accounting error, not a trigger.
- **Founder decision needed:** none for the product outcome (FR05 decides it).
- **Outside this actor's authority:** deciding that an anchor is faithful.
- **FCTM impact:** none (Blueprint mapping only).

### Option (ii) — Source amendment or a separate approved numbered source

- **What it would be:** an approved contract text (for example in Contract 21 or 22 for the identity foundation, or Contract 18 for the account lifecycle) that states the personal-identity deletion obligation and its eligibility conditions, recording the decision FR05 already made.
- **Source 18 §3.2 as-is:** after the source exists, the obligation receives a contract-form row in the owning mission's FCTM, and the completeness test can be applied to it. Before it exists, no row can be created.
- **Triggers:** amending an approved contract is a change to approved source text; Mission Control determines whether it is T3 (recording a Founder decision the mission needs) or requires Founder approval of the amended contract. If it placed the obligation in a mission other than its natural owner, T7 could arise.
- **Founder decision needed:** approval of the amended or new contract text; the product outcome itself is already decided.
- **Outside this actor's authority:** drafting or approving contract amendments.
- **FCTM impact:** a new row, a changed row count and completeness totals in the owning mission's FCTM; no existing row changes.

### Option (iii) — Cross-mission evidence interface with `SB-P-1.19` under Contract 18

- **What it would be:** treat personal-identity deletion as part of Contract 18 "account" final deletion (S4, S5, S7), owned by `SB-P-1.19`, with SB-P-1.12 providing the eligibility guards and integrity foundation (FA-15 to FA-18, FA-11, FA-12, FA-14) and an explicit two-mission acceptance dependency, as for R-1.
- **Source 18 §3.2 as-is:** Contract 18 is `SB-P-1.19`'s contract (S10), so accounting there changes no SB-P-1.12 row or assignment. It depends on reading "account" in C18 §1 and §12 as including the personal identity. That reading is **not** stated in the source. It is a source-interpretation, coverage and mission-accounting issue for Mission Control, not a T1 product question: FR05 ESC1-6 already answers whether the positive deletion exists.
- **Triggers:** none for SB-P-1.12's FCTM. A Stage 3 trigger arises only if an actual proposed change meets its definition: T3 for a new product decision or a needed approved-unresolved decision, T7 for an omission, deferral, pull-forward, simplification or reclassification of an approved requirement (including a mission-assignment change), T8 for a Product Truth conflict, infeasibility or security finding. If the reading would change what C18 requires, Option (ii) applies instead.
- **Founder decision needed:** none if Mission Control confirms the reading within ESC1-8's allocation; a Founder decision if the reading is disputed or an assignment would change.
- **Outside this actor's authority:** confirming the C18 reading and recording `SB-P-1.19` intake obligations. No SB-P-1.19 FCTM exists yet.
- **FCTM impact:** none in SB-P-1.12; a future SB-P-1.19 FCTM would carry the C18 rows.

Combinations are possible (for example Option (iii) for the lifecycle action with Option (ii) for an identity-foundation statement). This assessment does not choose between them.

## 5. C — "All relevant obligations" input register

The Founder-approved 90-day business windows (ESC1-2 to ESC1-4) govern businesses. They are **not** applied here by analogy to personal-identity retention or to any legal period.

| # | Open question | What canonical sources answer | Accountable specialist or owner | Evidence type | Stop condition |
|---|---|---|---|---|---|
| L-1 | Which financial and business records must be preserved after a business is deleted, and for how long | C22 §20, C18 §12 require durability and governed deletion; no period or record list | Competent legal and retention-policy authority | Written legal or retention-policy determination | No deletion design relied on before it exists |
| L-2 | What personal data of the identity must be erased, may be retained, or must be retained, and on what basis | C22 §23, C18 §12 ("privacy-respecting deletion"); no rules | Legal and privacy authority | Written privacy determination | Same |
| L-3 | Whether audit attribution identifiers may remain after identity deletion, and in what minimized form | C21 §19, C22 §14 require attribution; no minimization rule | Legal and privacy authority; Security & Permissions Architecture | Determination plus security review | FA-17 cannot be finalized without it |
| C-1 | Which unsettled commercial obligations (dues, refunds, disputes, chargebacks) block identity deletion | C18 §§8, 10, 12; no settlement rule | Finance & Payments; `SB-P-1.19` lifecycle owner | Commercial policy record | No `obligations_complete` rule may be written before it exists |
| C-2 | Whether an open support case or complaint blocks deletion | Build Plan §10.8 (support in `SB-P-1.19`); no rule | `SB-P-1.19` owner | Policy record | Same |
| F-1 | How remaining authorized memberships are established authoritatively | C21 §5; C22 §5 (answerable by SB-P-1.12 foundation) | `SB-P-1.12` | Kernel membership state; FA-16 test | None beyond ESC-1 |
| F-2 | How "final owned business deleted" is established authoritatively | C18 §12, scenario 8; C22 §20 | `SB-P-1.19` (deletion record); `SB-P-1.12` (ownership state) | Recorded deletion proof (C18 §12) | Depends on L-1 |
| F-3 | Whether a pending transfer blocks identity deletion | FR05 ESC1-5; no rule | Mission Control, then `SB-P-1.12` and `SB-P-1.19` | Policy clarification within ESC1-5/6 | Founder input only if Mission Control finds FR05 silent |

## 6. D — R-2 acceptance and coverage crosswalk

**FA-15 to FA-18 cover** (Blueprint lines 509–512): ineligibility while the person owns a business; ineligibility while another authorized membership remains; no erasure of history or attribution; deletion only through the governed, confirmed and recorded path.

**They do not cover:** the positive obligation that deletion **happens** once eligible; its trigger and timing; the content of "all relevant obligations"; the acceptance scenario for the deletion action itself (an equivalent of C18 scenario 8 for the identity); and who records the proof of deletion.

**Source 18 §3.2 inventory gap:** the positive action is approved in FR05 ESC1-6, but no identified faithful numbered contract or Build Plan section states it and no approved source explicitly assigns it to a mission, so it has no FCTM row and no source-inventory pointer. Completeness check (b) cannot be applied to it until Option (ii) or a confirmed Option (iii) supplies a source.

**ESC-1 relationship (no mechanism designed):** in repository DDL, deleting an Owner's `auth.users` record can initiate cascading deletion of their business, which contradicts FA-11 and FA-15, and the Owner API `DELETE` path bypasses the governed path required by FA-18. Any positive deletion design must first resolve those paths through separately authorized security design.

## 7. E — Narrow follow-up sequence (all approvals NOT YET GIVEN)

1. **Mission Control source finding:** choose between, or combine, Options (i) to (iii), including confirming or rejecting the Contract 18 "account" reading. NOT YET GIVEN.
2. **Specialist routing:** route L-1 to L-3, C-1, C-2 and F-3 (Section 5) to the named owners and record their written input. NOT YET GIVEN.
3. **Founder decision:** only if the chosen option changes an approved source, mission assignment, commitment or classification. NOT YET GIVEN.
4. **Separately authorized source or FCTM patch** for the owning mission, and an SB-P-1.19 intake record if Option (iii) is chosen. NOT YET GIVEN.
5. **Independent Security & Permissions Architecture exact-head review** of that patch. NOT YET GIVEN.
6. **Human merge** by the Founder or an authorized human. NOT YET GIVEN.
7. **Mission Control R-2 closure,** only when all four conditions of `instruction1.9.md` §4 are evidenced, listing residual ESC-1 and every remaining legal, engineering and runtime hold. NOT YET GIVEN.

## 8. Stop assessment

- **Source conflict:** none found (Section 2 consistency note).
- **Invented anchor:** none. Option (i) is presented with the reason it is not faithful as-is.
- **Change to Product Truth, classification, mission or contract assignment:** none made. Options (ii) and (iii) would need authority this actor does not hold; they are reported, not enacted.
- **Unverifiable source:** the external privacy-policy page named in S16 was not read; it is not a repository source.

## 9. Holds

R-2 OPEN / CRITICAL PATH / SOURCE-COVERAGE HOLD. ESC-1 OPEN T8. `22-§20-2` `BLOCKED` and `IN SCOPE`; related durability findings held. G-6/T4 production `UNVERIFIED`. G-4 product policy answered; ownership-cardinality and security design gated. R-1 needs both SB-P-1.12 and SB-P-1.19 proof; R-3 keeps the authority-versus-experience split. No EIS, implementation, architecture selection, SQL, migration, identity deletion, payment or provider, or production action.

`R-2 SOURCE-COVERAGE ASSESSMENT — READ-ONLY — OPTIONS FOR MISSION CONTROL — R-2 OPEN CRITICAL PATH — ESC-1 T8 OPEN — NO APPROVAL GIVEN.`
