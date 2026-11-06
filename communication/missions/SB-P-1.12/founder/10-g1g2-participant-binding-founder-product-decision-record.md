# SB-P-1.12 — Founder Decision Record 10

# External Delivery Staff Participant Binding: P-1, SR-09, F-OVL and P-3

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Context:** G1/G2 participant-binding interface, an upstream dependency of SB-P-1.18 (`18:FPDR-6` D1-A)
**Founder:** Riyas PK
**Decision status:** `PROPOSED — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION` (Source 18 v1.3 §3.3)
**Prepared by:** Claude Code, SB-P-1.12 Kernel / Identity & Authority source-owner room, under [MC-779](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6681551862). Preparer only; not a reviewer, approver or merger of this record
**Baseline:** `main@b06eddc4a4fa996088e41fd19946c7724833f2a1`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This record documents four Founder selections that were already made. It amends no source, contract, Blueprint, FCTM row, Product Truth or EIS. Locked SB-P-1.12 EIS v0.4 (blob `8b0aaa79acee8ec1930292bde9b22d87fd489025`) stays authoritative.

## 1. How to Read This Record

| Kind | Where | Authority |
|---|---|---|
| Founder statements, verbatim as transcribed by Mission Control | Section 3 | The Founder |
| Option text the selections refer to | Section 4 | None. It is Mission Control's wording, not the Founder's |
| Mission Control interpretations | Section 5 | Mission Control, subordinate to Section 3 |
| Preparer restatement, holds and accounting | Sections 2, 6 to 9 | None. Section 3 prevails |

**Provenance limit.** No Section 3 text was authored by the Founder on GitHub. Each statement reached the repository through a Mission Control comment posted by the `SmartBusinessv1` account, which transcribes the Founder's conversation response. This record copies those transcriptions byte for byte and does not claim more.

## 2. Decisions Recorded

| ID | Selection | Founder source | Mission Control record |
|---|---|---|---|
| P-1 | **Option A** — intended-person identification by email before invitation, matched to an appropriately verified identity from an existing supported sign-in method; conditional on the identity evidence in Section 6 | Founder response to MC-724 | [MC-725](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6576233814) |
| SR-09 | **Option X** — an accepted Delivery Staff binding belongs to the business and continues after the inviter loses authority | Founder response to MC-724 | [MC-725](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6576233814) |
| F-OVL | **Option B** — explicit authority path per request where one person holds a membership and a Delivery Staff binding in the same business | Founder response to MC-777 | [MC-778](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6681291486) |
| P-3 | **168 hours** — fixed Phase 1 invitation validity of 7 days (168 hours) from server-recorded issuance | Founder response to MC-777 | [MC-778](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6681291486) |

ENT-1 is **not** decided by this record (Section 6).

## 3. Founder Statements

### 3.1 P-1 and SR-09 (Founder response to MC-724)

Reproduced from [MC-725](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6576233814) §1, marked there "USER-SUPPLIED WORDING — UNEDITED" (comment `created_at` = `updated_at` 2026-11-02T11:41:03Z). The whole statement is reproduced.

```text
# SMART BUSINESS — FOUNDER DECISION MC-724
## External Delivery Staff — P-1 and SR-09

Mission Control,

After considering the merchant experience, technical complexity, security and business continuity, my decisions are:

**P-1: OPTION A — Intended-person identification before invitation.**

The merchant identifies the intended external delivery person using their email address before issuing the invitation.

Smart Business must securely match the intended person to an appropriately verified identity obtained through an existing supported sign-in method.

This choice is conditional on SA-05 confirming that the required verified identity attribute and matching behavior are supported.

If that cannot be demonstrated, return the specific blocker and recommended alternative for Founder consideration. Do not silently introduce OTP, phone-number identity matching, a new authentication provider or a second merchant confirmation workflow.

**SR-09: OPTION X — Accepted access continues.**

An already accepted Delivery Staff binding belongs to the merchant business and remains valid when the original inviter loses authority, until an appropriately authorized business actor revokes it or another independently authorized expiry/revocation condition applies.

The original inviter's departure must not automatically interrupt legitimate deliveries.

Pending invitations must still be revalidated against the issuer's current authority. Preserve strict assigned-delivery-only access, business isolation, revocation and audit history.

**Founder principle:** Merchant business continuity, simplicity and human authority must be protected without compromising security.

Record these decisions verbatim and apply the existing Source 18 authority and review requirements.

Continue the smallest necessary G1/G2 EIS amendment process, keeping unresolved security, interface and package-integrity conditions visible.

No Git modification, EIS approval, implementation or deployment is authorized by this decision alone.

Return the next actor and a short handoff.

Implementation Authorization remains WITHHELD.
```

### 3.2 F-OVL and P-3 (Founder response to MC-777)

Reproduced from [MC-778](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6681291486) (comment `created_at` = `updated_at` 2026-11-06T09:07:36Z). MC-778 identifies itself as Mission Control's receipt of the Founder's direct response, not an independently attributable Founder GitHub comment.

The Founder's complete accompanying reply, as MC-778 records it:

> **Founder's complete accompanying reply:** `F-OVL: B`; `P-3: Duration`; “Proceed through Source 18 without inventing additional Founder decisions. Preserve Source 18 gates. This response is not source-amendment or implementation authorization.”

The Founder's P-3 instruction, which MC-778 preserves verbatim:

> **P-3 — Founder Decision: 7-Day Invitation Expiry**
>
> I approve a fixed Phase 1 invitation validity period of **7 days (168 hours) from server-recorded issuance**.
>
> Unaccepted invitations expire automatically. Acceptance must be single-use, identity-verified and subject to current business authorization.
>
> Authorized merchants may revoke or reissue invitations. Expired invitations cannot be accepted.
>
> Invitation expiration must not automatically terminate an already accepted participant binding. That access follows its separate approved lifecycle and revocation rules.
>
> Preserve the existing ENT-1 suspension-policy hold. Any future change to this expiry policy must follow the applicable governed approval process.

F-OVL was selected as the letter `B` in the reply above. The Founder supplied no further F-OVL wording; the meaning of Option B is the option text in Section 4.3.

## 4. Option Text the Selections Refer To

This is Mission Control's wording, not the Founder's.

### 4.1 P-1 Option A ([MC-724](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6575580503) §2)

> **A — person known in advance:** merchant enters a person identifier (proposed email) before inviting, and server matches a verified sign-in attribute to establish the intended person before activation. Strength: can discover pending association during first run and fits existing atomic EIS-ID-08 design *if* an equivalently verified identity attribute is actually available for both supported login methods. Cost: merchant must obtain/enter email; mismatches require governed revoke/reissue. **Sign-in verified-email equivalence is NOT established**: the preparer reviewed code but lacked current test-project confirmation setting and Google equivalence proof. Treat **A as conditional**, not implementable on mere assumption. T3 screen applies to required merchant input.

### 4.2 SR-09 Option X ([MC-724](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6575580503) §3)

> **X — business-owned continuation:** accepted binding continues while business permits it, until an authorized revoker ends it; preserves ongoing deliveries/ownership transfer but requires deliberate access review/revocation to avoid stale access.

### 4.3 F-OVL Option B ([MC-777](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6680831409))

> **B — Explicit path per request:** coexist and select one of the person's verified paths per request; visible additional context, larger interface/test surface.

## 5. Mission Control Interpretations

These extracts are Mission Control's, verbatim. They are subordinate to Section 3, and the full source comments prevail over these extracts.

### 5.1 P-1 and SR-09 ([MC-725](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6576233814) §2)

> **P-1 / A — FOUNDER SELECTED, TECHNICAL EFFECTIVENESS CONDITION HELD:** Merchant identifies the intended external Delivery Staff person **by email before invitation**; server must bind that intended email to an **appropriately verified identity from existing supported sign-in**. This is conditional on **SA-05 proof** that email/password and Google sign-in supply and enforce an appropriate verified identity attribute and matching behavior. Do NOT infer test/production Auth email confirmation settings or Google claim equivalence from a codepath alone. **If not demonstrated, STOP and return exact blocker and recommended alternative to Founder**, with no substitution of OTP, phone-number identity matching, extra provider or post-accept merchant confirmation. Existing D1-A pending-invite first-run detection must be tested against selected A, not silently weakened.

> **SR-09 / X — FOUNDER SELECTED:** Already accepted, valid, business-scoped participant binding **continues** after original issuer loses authority until an authorized business actor revokes it, or an independently authorized expiration/revocation condition applies. An issuer's departure **alone does not automatically revoke an accepted binding**. Pending invitations still require issuer's current invite authority at acceptance and become unacceptable if authority lost. No merchant-wide participant role, cross-business access or Owner intelligence; retain authorized assigned-object checks, epochs, business lifecycle, audit history and attribution. An unapproved binding expiry is **not** created by this decision.

### 5.2 F-OVL and P-3 ([MC-778](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6681291486))

> **F-OVL = B: Explicit path per request.** The same verified person may hold both a membership and a Delivery Staff participant binding in the **same business**. Each request explicitly selects **one of that person's own verified authority paths**. The kernel evaluates only that selected path for the requested business, action, channel and object. No cross-business inheritance, path union, capability/scope stitching or silent path switching; the decision and audit attribute the relied-upon path. The accepted Founder selection is **Option B as presented in MC-777**; implementation-level names, UX mechanics and recovery handling remain package/consumer details, not new Founder choices.

> **Do not reinterpret expiry as 7 local calendar days:** the approved interval is an absolute **168 hours** computed from the server-recorded issue instant; at or after expiry, pending invitation acceptance must deny. Any accepted binding's independent lifecycle is unchanged; [MC-725](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6576233814) SR-09 Option X also remains unchanged. The 168-hour value must never appear as a fabricated tested runtime result.

### 5.3 Interpretation rulings R-1 to R-3 and P-3 scope ([MC-779](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6681551862))

> **R-1 SINGLE AUTHORITY PATH — CONDITIONALLY ACCEPT.** When the verified subject has exactly one current authorized path **in the requested business**, the server may resolve and audit that one existing path without adding a merchant/employee selection step. The Founder's Option B concerns coexistence; it should not force a new selection UX on legacy single-path users. **For genuinely dual-path users, each request must identify exactly one path and no implicit default/fallback is allowed.** Before approval, the source reviewer must check that the server-only unique-path rule does not silently choose between multiple *eligible* memberships/bindings or cross a business boundary. No new role default.

> **R-2 TARGETLESS POLICY HELPER — ACCEPT THE PROHIBITION, QUALIFY THE REST.** `authz.can(business_id, capability)` or another targetless RLS policy check **MUST NOT derive allow from a participant binding or object-specific assignment**. Participant assigned-list reads remain dedicated server-side, per-target authorizations with no direct participant table SELECT. Other existing approved principal sources may be evaluated only when their own scope and channel rules explicitly permit; listing membership/support/automation is **not a new grant or support/automation privilege**. Cabinet PQ-14 object-scoped set-read interface remains HELD and is NOT proven by this rule.

> **R-3 REMEMBERED CLIENT PATH — CONDITIONALLY ACCEPT.** UI may remember a user-selected path for usability, **but each consequential request and read must explicitly carry that path in existing `p_context` and the server must independently revalidate** person, business, path, action, channel, target, epochs and current grants. Client storage/session state is never authority. No silent fallback when denial/revocation occurs. Verify that the proposed distinct `authority_path_required` response reveals no protected business/path facts outside the already authorized subject and context; PC-12 uniform denial applies to unheld paths. Any behavior newly altering approved UX beyond Option B must be flagged, not assumed approved.

> **P-3 scope:** Founder's **fixed 168-hour server-issuance interval** continues to run across suspension, without pausing or extending (a duration interpretation, not an ENT-1 retention selection). The distinct **ENT-1** choice of retaining versus ending a pending invitation during entitlement suspension stays **HELD**. While suspended, acceptance/action denies; at/after `issued_at + 168 hours`, an unaccepted invitation cannot be accepted even after restoration. Accepted binding expiry/lifecycle unchanged (SR-09 X). **No additional Founder expiry decision is requested.**

R-1 to R-3 are bounded interpretations for later exact-text review, not Founder product choices.

## 6. Holds Preserved

| Hold | State | Owner |
|---|---|---|
| **P-1 identity evidence** | **HELD.** P-1 Option A is conditional on SA-05 confirming that each relied-on sign-in method supplies an appropriately verified email. [MC-725-S](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6576508947) returned `HELD — EVIDENCE GAP`; [MC-728-S](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6579468817) found email and password configuration-ready but not verified, and Google configuration-unverified; [MC-732](https://github.com/SmartBusinessv1/smart-business/pull/1105#issuecomment-6601340304) recorded zero signups after a preflight stop. No method is proven. A method that cannot be demonstrated returns to the Founder; no substitute method is selected | Mission Control; SA-05 |
| **ENT-1** | **HELD.** Whether a pending invitation is retained or ended during entitlement suspension is not decided. Acceptance and protected actions fail closed meanwhile. The 168-hour period is not paused or extended by suspension (Section 5.3) | Mission Control; SB-P-1.19 |
| C-1 | SB-P-1.12 EIS amendment authority: separate exact-text review, Founder exact-text approval, human merge and re-lock | Mission Control; Founder |
| C-4, PK-0 | Three-file package reconciliation after any re-lock | Mission Control |
| Other dependencies | Cabinet PQ-14 and the unknown action-to-capability selector; SB-P-1.15 non-member notification recipient (`EQ18-05`); `DENT`; `DLEG`; `EQ18-15`; all 19 external `DI` rows and five `DH` legs of SB-P-1.18, which stay `IN SCOPE` and unfulfilled | Their owners |

## 7. Classification

| Trigger | Treatment |
|---|---|
| **T3** | P-1, SR-09, F-OVL and P-3 are Founder product decisions, **decided** as recorded here |
| T7 | Not fired. No row is omitted, deferred, simplified or reclassified |
| T8 | Not established |
| T6 | Not assessed by this record. It is screened on the exact EIS amendment text |

## 8. Effect and Consumption

- **What this record does:** once human-merged and verified, it is the canonical record of the four selections for SB-P-1.12.
- **What it does not do:** it does not amend locked EIS v0.4, make any EIS version effective, approve EIS text, close a hold, authorize implementation or demonstrate any behaviour.
- **Consumer:** the noncanonical comment-only Kernel EIS v0.5 candidate [MC-778-K](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6681491298) (author-reported blob `50df3332ca7308ca09f778955ddb8152554c7c0c`) cites this record as pending. That candidate remains separate and unapproved.
- **Relationship:** `18:FPDR-6` D1-A (`communication/missions/SB-P-1.18/claude-code/16-stage7-founder-product-decision-record-18-fpdr-6.md`, blob `df0c8b72233aaeacaeb2c5a233fa373065e8766c`) stays unchanged; these selections refine the SB-P-1.12 interface it depends on.

## 9. Status

`PROPOSED — EFFECTIVE ONLY ON FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION`. Requires Mission Control review and finding-scoped independent governance and exact-record review before any Founder merge proposal. The preparer does not review, approve or merge it. **Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
