# SB-P-1.18 — Stage 2 Source Obligation Inventory and Completeness Evidence

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL STAGE 2 REVIEW AND FOUNDER HUMAN MERGE`
**Prepared by:** Claude Code, Definition Actor, under `mission-control/05-stage2-mission-truth-and-delta-authorization.md`
**Baseline:** `main@ccfdd28a322073be67a0ea7c3658ec8685b7d2cc`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

Source 18 §3.2 item 6 requires an obligation inventory taken from the source text and independent of the matrix, and a set-based test of the matrix against it. Section 1 is that inventory: a list of pointers produced by a deterministic parser from the source blobs, before any disposition is assigned. It restates no requirement and is not a second matrix. Sections 3 to 5 compare the FCTM (`03-…`) with it.

**Independence limitation.** The parser and the matrix were both prepared by the Definition Actor, and the actor also authored many of the inherited predecessor rows (Stage 1 disposition §2). The inventory is mechanical, but its section and lead-in rules are the actor's. Mission Control's own source-text test at Stages 5 and 8, and the Stage 19 verifier's own inventory, remain the independent controls.

## 1. Method

- **Parser.** For each source, read at `origin/main@ccfdd28a` via `git show`, every `## N.` heading (`#`/`##` for the Build Plan and GPCV) opens a section, `###` opens a subsection, and each list item (`b`), prose paragraph (`p`) or table line (`t`) is one unit, numbered in source order within its section or subsection.
- **Locator.** `§<section>[.<subsection>].<b|p|t><k>`.
- **Lead-in.** A prose paragraph ending in `:`; listed but carrying no obligation of its own.
- **Scope.** Contracts 01, 06 and 16 and the governing Build Plan sections are inventoried in full. For delegated contracts, only the units this mission touches or inherits are inventoried (§1.5), following SB-P-1.17 practice. The other 22 contracts are keyword-screened in full (§5).

### 1.1 Seed counts confirmed

| Source | Numbered sections | Acceptance scenarios |
|---|---|---|
| C1 | 31 | 14 (§26 b1–b14) |
| C6 | 17 | 10 (§14 b1–b10, bulleted) |
| C16 | 23 | 10 (§20 b1–b10) |
| Build Plan §10.7 | — | 3 Founder runtime scenarios |

### 1.2 Contract 01

| Locator | Type | Label |
|---|---|---|
| `§1` | section | 1. Feature Identity |
| `§1.p1` | paragraph | Smart Order & Delivery Assistant gives a local merchant a professional way to receive, con… |
| `§1.p2` | paragraph | It must work with the way Kerala merchants already operate: phone calls, WhatsApp, handwri… |
| `§1.p3` | paragraph | The feature is a private merchant-customer operating network. |
| `§2` | section | 2. Founder Problem Statement |
| `§2.p1` | lead-in | Local merchants often manage delivery through fragmented human memory: |
| `§2.b1` | bullet | orders arrive by phone, WhatsApp, voice note, paper or in person; |
| `§2.b2` | bullet | item availability is checked informally; |
| `§2.b3` | bullet | addresses are repeatedly requested; |
| `§2.b4` | bullet | staff assignment is verbal; |
| `§2.b5` | bullet | customers call for status; |
| `§2.b6` | bullet | COD collection can be difficult to reconcile; |
| `§2.b7` | bullet | delivery proof and exceptions may be poorly recorded. |
| `§2.p2` | paragraph | Smart Business should reduce that coordination burden without taking ownership of the merc… |
| `§3` | section | 3. Lighthouse Principles |
| `§3.p1` | lead-in | The feature must protect: |
| `§3.b1` | bullet | humans serving humans; |
| `§3.b2` | bullet | merchant/customer relationship ownership; |
| `§3.b3` | bullet | privacy by purpose; |
| `§3.b4` | bullet | no public marketplace drift; |
| `§3.b5` | bullet | minimal data collection; |
| `§3.b6` | bullet | explicit confirmation before consequential commitments; |
| `§3.b7` | bullet | dignified staff treatment; |
| `§3.b8` | bullet | no default continuous employee surveillance; |
| `§3.b9` | bullet | clear, recoverable exception handling; |
| `§3.b10` | bullet | channel independence. |
| `§4` | section | 4. Explicit Non-goal — Not a Marketplace |
| `§4.p1` | lead-in | Smart Order & Delivery must not become, by implementation convenience: |
| `§4.b1` | bullet | public merchant discovery; |
| `§4.b2` | bullet | cross-merchant product listing; |
| `§4.b3` | bullet | marketplace bidding; |
| `§4.b4` | bullet | marketplace commission logic; |
| `§4.b5` | bullet | an open ordering network for unrelated public users; |
| `§4.b6` | bullet | a Swiggy/Zomato-style marketplace. |
| `§4.p2` | paragraph | Any broader marketplace or wholesaler network requires a separate future Founder product d… |
| `§5` | section | 5. Users and Permission Boundaries |
| `§5.Owner.p1` | lead-in | The Owner may, within plan/feature availability: |
| `§5.Owner.b1` | bullet | create/import customers; |
| `§5.Owner.b2` | bullet | create, review, confirm, modify or cancel orders; |
| `§5.Owner.b3` | bullet | assign permitted delivery staff; |
| `§5.Owner.b4` | bullet | set/confirm COD amounts; |
| `§5.Owner.b5` | bullet | view active and historical deliveries; |
| `§5.Owner.b6` | bullet | manage customer status and delivery permissions; |
| `§5.Owner.b7` | bullet | review exceptions and delivery evidence. |
| `§5.Manager.p1` | paragraph | Manager authority is delegated by the Owner. Manager does not automatically inherit Owner … |
| `§5.Employee-Staff.p1` | lead-in | A permitted employee may perform only approved operational actions, for example: |
| `§5.Employee-Staff.b1` | bullet | create an order draft; |
| `§5.Employee-Staff.b2` | bullet | review item availability; |
| `§5.Employee-Staff.b3` | bullet | prepare/pack an order; |
| `§5.Employee-Staff.b4` | bullet | update permitted order states; |
| `§5.Employee-Staff.b5` | bullet | assign delivery staff where explicitly allowed. |
| `§5.Employee-Staff.p2` | paragraph | Employees must not gain unrestricted customer export, Owner profit, Ask CFO or full analyt… |
| `§5.Delivery-Staff.p1` | lead-in | Delivery staff receives only what is needed for the assigned delivery: |
| `§5.Delivery-Staff.b1` | bullet | merchant identity; |
| `§5.Delivery-Staff.b2` | bullet | customer name/contact where required; |
| `§5.Delivery-Staff.b3` | bullet | order/item summary; |
| `§5.Delivery-Staff.b4` | bullet | delivery address/location; |
| `§5.Delivery-Staff.b5` | bullet | delivery timing/instructions; |
| `§5.Delivery-Staff.b6` | bullet | COD amount where applicable; |
| `§5.Delivery-Staff.b7` | bullet | permitted delivery actions. |
| `§5.Delivery-Staff.p2` | paragraph | Delivery staff must not receive Owner-wide business intelligence or browse unrelated custo… |
| `§5.Customer.p1` | lead-in | A customer may: |
| `§5.Customer.b1` | bullet | be added to the merchant's approved customer network; |
| `§5.Customer.b2` | bullet | place an order through an approved channel; |
| `§5.Customer.b3` | bullet | accept/modify/cancel a proposed order change; |
| `§5.Customer.b4` | bullet | provide delivery address/location when needed; |
| `§5.Customer.b5` | bullet | receive confirmations/status updates; |
| `§5.Customer.b6` | bullet | report delivery issues; |
| `§5.Customer.b7` | bullet | unsubscribe from permitted messaging. |
| `§5.Customer.p2` | paragraph | Customer access never includes merchant internal analytics or staff information beyond wha… |
| `§6` | section | 6. Customer Identity and Private Customer Network |
| `§6.p1` | paragraph | Customer identity is merchant-scoped and should reuse shared identity foundations rather t… |
| `§6.p2` | lead-in | Supported creation/import paths may include: |
| `§6.b1` | bullet | manual workspace entry; |
| `§6.b2` | bullet | conversational quick-add; |
| `§6.b3` | bullet | Excel/CSV import through Universal Document Intelligence; |
| `§6.b4` | bullet | approved migration/import workflows. |
| `§6.p3` | paragraph | At minimum, an orderable customer generally needs a usable identity/contact path. Address/… |
| `§6.p4` | paragraph | The system must detect plausible duplicate customers rather than silently creating paralle… |
| `§7` | section | 7. Customer Awareness and Messaging Consent |
| `§7.p1` | paragraph | When a customer is newly enabled for the merchant's order/delivery communication, the prod… |
| `§7.p2` | lead-in | Messaging must respect: |
| `§7.b1` | bullet | unsubscribe/STOP behavior where applicable; |
| `§7.b2` | bullet | approved templates/provider rules; |
| `§7.b3` | bullet | no repeated welcome spam; |
| `§7.b4` | bullet | no unrelated promotional abuse merely because a customer exists in the delivery network. |
| `§8` | section | 8. Order Intake Channels |
| `§8.p1` | paragraph | The feature must support the same business workflow regardless of approved input channel. |
| `§8.Customer-initiated.p1` | lead-in | Examples: |
| `§8.Customer-initiated.b1` | bullet | text; |
| `§8.Customer-initiated.b2` | bullet | voice; |
| `§8.Customer-initiated.b3` | bullet | image/photo of a handwritten list; |
| `§8.Customer-initiated.b4` | bullet | supported document input. |
| `§8.Merchant-initiated.p1` | lead-in | Owner/permitted staff may create an order from: |
| `§8.Merchant-initiated.b1` | bullet | phone-call information; |
| `§8.Merchant-initiated.b2` | bullet | in-person request; |
| `§8.Merchant-initiated.b3` | bullet | text/voice instruction; |
| `§8.Merchant-initiated.b4` | bullet | handwritten/paper list; |
| `§8.Merchant-initiated.b5` | bullet | imported order sheet. |
| `§8.Document-photo-intake.p1` | lead-in | Universal Document Intelligence must be reused: |
| `§8.Document-photo-intake.p2` | paragraph | input → interpretation → preview → clarify where needed → confirmation → order draft. |
| `§8.Document-photo-intake.p3` | paragraph | Uncertain extraction must not silently create a confirmed order. |
| `§9` | section | 9. Order Draft and Clarification |
| `§9.p1` | paragraph | Incoming order intent first becomes a draft where consequential facts can be reviewed. |
| `§9.p2` | lead-in | A draft should preserve, as applicable: |
| `§9.b1` | bullet | business/customer identity; |
| `§9.b2` | bullet | items; |
| `§9.b3` | bullet | quantities and units; |
| `§9.b4` | bullet | notes/substitution preferences; |
| `§9.b5` | bullet | delivery/pickup intent; |
| `§9.b6` | bullet | requested time; |
| `§9.b7` | bullet | address/location status; |
| `§9.b8` | bullet | payment/COD information; |
| `§9.b9` | bullet | source/channel; |
| `§9.b10` | bullet | creator/actor; |
| `§9.b11` | bullet | current order state. |
| `§9.p3` | lead-in | Clarify the smallest useful question when: |
| `§9.b12` | bullet | product identity is ambiguous; |
| `§9.b13` | bullet | quantity/unit is unclear; |
| `§9.b14` | bullet | multiple customer identities match; |
| `§9.b15` | bullet | delivery location is missing when required; |
| `§9.b16` | bullet | payment/COD amount is inconsistent; |
| `§9.b17` | bullet | item interpretation from a document is uncertain. |
| `§9.p4` | paragraph | Never guess a consequential order fact merely to progress the workflow. |
| `§10` | section | 10. Availability, Substitution and Customer Confirmation |
| `§10.p1` | paragraph | A requested order is not automatically final. |
| `§10.p2` | paragraph | Owner/authorized staff should be able to review stock/availability using current business … |
| `§10.p3` | lead-in | If a requested item is unavailable, Smart Business may help propose: |
| `§10.b1` | bullet | quantity change; |
| `§10.b2` | bullet | replacement/substitute; |
| `§10.b3` | bullet | partial fulfilment; |
| `§10.b4` | bullet | removal; |
| `§10.b5` | bullet | later fulfilment where supported. |
| `§10.p4` | paragraph | The customer or authorized merchant user must approve material changes before the order re… |
| `§10.p5` | paragraph | Smart Business must not promise inventory that the product cannot support with reliable da… |
| `§11` | section | 11. Order Lifecycle |
| `§11.p1` | lead-in | The mature lifecycle should support a clear progression such as: |
| `§11.p2` | paragraph | Draft → Confirmed → Preparing/Packing → Ready/Assigned → Out for Delivery → Delivered/Clos… |
| `§11.p3` | paragraph | with explicit exception/cancel states as needed. |
| `§11.p4` | paragraph | State names may evolve, but state transitions must be auditable and permission-scoped. |
| `§11.p5` | paragraph | A historical fixed status enum is implementation detail, not immutable Product Truth. |
| `§12` | section | 12. Delivery Assignment |
| `§12.p1` | lead-in | Before assignment, verify: |
| `§12.b1` | bullet | the order is in an assignable state; |
| `§12.b2` | bullet | the customer belongs to the merchant; |
| `§12.b3` | bullet | the delivery person exists and has permission; |
| `§12.b4` | bullet | required address/location exists or has a resolution path; |
| `§12.b5` | bullet | COD amount is reviewed where applicable; |
| `§12.b6` | bullet | the assignment is not a duplicate/retry of an already completed action. |
| `§12.p2` | paragraph | Natural-language assignment is supported, subject to the same validation. |
| `§13` | section | 13. Delivery Staff Experience |
| `§13.p1` | paragraph | The delivery workflow should be low-friction and need not require a heavy separate driver … |
| `§13.p2` | lead-in | Delivery staff should receive only task-required information and permitted actions, such a… |
| `§13.b1` | bullet | acknowledge assignment; |
| `§13.b2` | bullet | open address/map; |
| `§13.b3` | bullet | mark started/out-for-delivery; |
| `§13.b4` | bullet | record delivery proof; |
| `§13.b5` | bullet | record COD collected amount; |
| `§13.b6` | bullet | mark delivered; |
| `§13.b7` | bullet | report unable-to-deliver/exception. |
| `§13.p3` | paragraph | The durable requirement is operational usefulness and bounded access, not a particular his… |
| `§14` | section | 14. Location and Tracking — Current Reconciled Rule |
| `§14.p1` | paragraph | Location is purpose-limited. |
| `§14.p2` | lead-in | Smart Business may use location for: |
| `§14.b1` | bullet | customer delivery destination; |
| `§14.b2` | bullet | point-in-time delivery verification; |
| `§14.b3` | bullet | proof/event context where appropriate; |
| `§14.b4` | bullet | a user-requested or explicitly authorized live-tracking experience if separately designed … |
| `§14.p3` | paragraph | Default continuous route GPS surveillance of delivery staff is not a required/current beha… |
| `§14.p4` | paragraph | The product must not continuously track an employee merely because a delivery assignment e… |
| `§14.p5` | lead-in | Where location is captured: |
| `§14.b5` | bullet | collect only what is necessary; |
| `§14.b6` | bullet | make purpose understandable; |
| `§14.b7` | bullet | stop/expire access when the operational purpose ends; |
| `§14.b8` | bullet | prevent unrelated role access; |
| `§14.b9` | bullet | follow current retention policy. |
| `§14.p6` | paragraph | This rule supersedes older Founder-era/seed wording that implied continuous route tracking… |
| `§15` | section | 15. Delivery Proof and Completion |
| `§15.p1` | paragraph | Completion must rely on configured positive proof/action rather than unsupported inference… |
| `§15.p2` | lead-in | Possible proof mechanisms may include, as appropriate: |
| `§15.b1` | bullet | delivery staff completion action; |
| `§15.b2` | bullet | recipient acknowledgement; |
| `§15.b3` | bullet | OTP/signature/photo or other approved proof; |
| `§15.b4` | bullet | point-in-time location evidence; |
| `§15.b5` | bullet | COD/payment evidence; |
| `§15.b6` | bullet | merchant confirmation. |
| `§15.p3` | paragraph | The product should select/allow suitable proof according to risk and merchant configuratio… |
| `§15.Customer-silence-rule.p1` | paragraph | Customer silence alone is not an automatic delivery failure or exception when sufficient c… |
| `§15.Customer-silence-rule.p2` | paragraph | Absence of a reply must not automatically roll back an otherwise well-proven delivery. |
| `§16` | section | 16. COD and Payment Relationship |
| `§16.p1` | lead-in | Where COD applies: |
| `§16.b1` | bullet | expected collection amount must be explicit; |
| `§16.b2` | bullet | delivered/COD-collected are separate facts where needed; |
| `§16.b3` | bullet | discrepancies remain visible; |
| `§16.b4` | bullet | payment verification/reconciliation should reuse the shared financial-integrity foundation… |
| `§16.b5` | bullet | delivery completion must not silently duplicate Ledger income. |
| `§16.p2` | paragraph | The exact Ledger write/link must be idempotent and auditable. |
| `§17` | section | 17. Merchant, Customer and Staff Notifications |
| `§17.p1` | paragraph | Use the shared Notification foundation. |
| `§17.p2` | lead-in | Useful notifications may include: |
| `§17.b1` | bullet | order received/draft requiring action; |
| `§17.b2` | bullet | confirmation/change request; |
| `§17.b3` | bullet | assignment; |
| `§17.b4` | bullet | delivery started/status; |
| `§17.b5` | bullet | delivery completed; |
| `§17.b6` | bullet | payment/COD exception; |
| `§17.b7` | bullet | unable-to-deliver exception. |
| `§17.p3` | paragraph | Do not create a separate order-only notification infrastructure when shared foundations ca… |
| `§18` | section | 18. WhatsApp Experience |
| `§18.p1` | lead-in | WhatsApp is an approved channel for: |
| `§18.b1` | bullet | customer order intake; |
| `§18.b2` | bullet | merchant/staff order creation; |
| `§18.b3` | bullet | clarification; |
| `§18.b4` | bullet | confirmations; |
| `§18.b5` | bullet | status communication; |
| `§18.b6` | bullet | approved delivery interactions. |
| `§18.p2` | paragraph | WhatsApp remains an adapter to shared order/customer/delivery truth, not a separate workfl… |
| `§19` | section | 19. Conversation Workspace Experience |
| `§19.p1` | lead-in | Authorized merchant users should be able to perform the corresponding order/delivery workf… |
| `§19.b1` | bullet | text; |
| `§19.b2` | bullet | voice; |
| `§19.b3` | bullet | image/photo; |
| `§19.b4` | bullet | Excel/CSV/PDF where relevant. |
| `§19.p2` | paragraph | The same order record, permissions, identity, confirmations and audit trail must apply acr… |
| `§20` | section | 20. Human Language |
| `§20.p1` | paragraph | Customer and merchant interactions should support English, Malayalam and Manglish through … |
| `§20.p2` | paragraph | The system should understand locally natural units/product expressions while clarifying am… |
| `§21` | section | 21. AI Behaviour and Authority |
| `§21.p1` | lead-in | AI may: |
| `§21.b1` | bullet | interpret order intent; |
| `§21.b2` | bullet | prepare drafts; |
| `§21.b3` | bullet | identify missing information; |
| `§21.b4` | bullet | suggest substitutions; |
| `§21.b5` | bullet | summarize state; |
| `§21.b6` | bullet | surface exceptions; |
| `§21.b7` | bullet | recommend follow-up. |
| `§21.p2` | lead-in | AI must not: |
| `§21.b8` | bullet | finalize uncertain orders by guessing; |
| `§21.b9` | bullet | expand staff permission; |
| `§21.b10` | bullet | mark delivery completed without configured proof; |
| `§21.b11` | bullet | create payment facts without evidence; |
| `§21.b12` | bullet | expose unrelated customer/Owner information; |
| `§21.b13` | bullet | create public marketplace relationships. |
| `§22` | section | 22. Business Memory and Data Requirements |
| `§22.p1` | lead-in | The feature should preserve durable relationships among: |
| `§22.b1` | bullet | merchant/business; |
| `§22.b2` | bullet | customer identity; |
| `§22.b3` | bullet | customer communication preferences; |
| `§22.b4` | bullet | order and order lines; |
| `§22.b5` | bullet | item/product identity where applicable; |
| `§22.b6` | bullet | order state history; |
| `§22.b7` | bullet | assignment actor; |
| `§22.b8` | bullet | delivery state/events; |
| `§22.b9` | bullet | delivery proof; |
| `§22.b10` | bullet | COD/payment evidence/link; |
| `§22.b11` | bullet | address/location with purpose/retention boundary; |
| `§22.b12` | bullet | exception history; |
| `§22.b13` | bullet | source channel; |
| `§22.b14` | bullet | confirmation/audit events. |
| `§22.p2` | paragraph | Do not duplicate customer/product identities where shared foundations already exist. |
| `§23` | section | 23. Shared Foundations to Reuse |
| `§23.p1` | lead-in | Reuse: |
| `§23.b1` | bullet | Permission Engine / business isolation; |
| `§23.b2` | bullet | shared identities; |
| `§23.b3` | bullet | Business Memory; |
| `§23.b4` | bullet | Human Language Layer; |
| `§23.b5` | bullet | Conversation Workspace / WhatsApp adapters; |
| `§23.b6` | bullet | Universal Document Intelligence; |
| `§23.b7` | bullet | inventory/catalog where available; |
| `§23.b8` | bullet | Notification foundation; |
| `§23.b9` | bullet | Reminder Engine; |
| `§23.b10` | bullet | point-in-time location primitive; |
| `§23.b11` | bullet | audit/history/idempotency; |
| `§23.b12` | bullet | Payment Verification / Ledger services where relevant. |
| `§24` | section | 24. Error and Exception Behaviour |
| `§24.p1` | lead-in | Handle at minimum: |
| `§24.b1` | bullet | unknown/duplicate customer; |
| `§24.b2` | bullet | ambiguous item/quantity; |
| `§24.b3` | bullet | out-of-stock/substitution; |
| `§24.b4` | bullet | missing address/location; |
| `§24.b5` | bullet | unavailable delivery staff; |
| `§24.b6` | bullet | revoked permission during workflow; |
| `§24.b7` | bullet | duplicate assignment/action retry; |
| `§24.b8` | bullet | customer modification/cancellation; |
| `§24.b9` | bullet | delivery delay; |
| `§24.b10` | bullet | unable-to-deliver; |
| `§24.b11` | bullet | proof failure; |
| `§24.b12` | bullet | COD mismatch; |
| `§24.b13` | bullet | channel delivery failure; |
| `§24.b14` | bullet | payment/linking failure. |
| `§24.p2` | paragraph | A narrow failure must not freeze unrelated merchant operations. |
| `§25` | section | 25. Privacy and Trust Boundaries |
| `§25.b1` | bullet | Merchant owns the customer relationship. |
| `§25.b2` | bullet | Customer data is business-scoped. |
| `§25.b3` | bullet | Delivery staff sees only task-required information. |
| `§25.b4` | bullet | Location is purpose-limited. |
| `§25.b5` | bullet | No default continuous staff surveillance. |
| `§25.b6` | bullet | No staff access to Owner financial intelligence merely through delivery duties. |
| `§25.b7` | bullet | No public marketplace reuse of customer data. |
| `§25.b8` | bullet | Support/platform access follows separate purpose-limited governance. |
| `§26` | section | 26. Acceptance Scenarios |
| `§26.p1` | lead-in | A future Blueprint/EIS must verify at least: |
| `§26.b1` | bullet | Customer text order → accurate draft → merchant/customer confirmation. |
| `§26.b2` | bullet | Voice order → clarification for ambiguity → confirmed draft. |
| `§26.b3` | bullet | Handwritten/photo order → UDI preview → confirmation → draft. |
| `§26.b4` | bullet | Merchant/staff phone-order capture through conversation. |
| `§26.b5` | bullet | Out-of-stock item → respectful substitution flow. |
| `§26.b6` | bullet | Missing delivery location requested only when operationally needed. |
| `§26.b7` | bullet | Permission-scoped delivery assignment. |
| `§26.b8` | bullet | Delivery staff receives only required information. |
| `§26.b9` | bullet | Purpose-limited delivery proof/location without default continuous tracking. |
| `§26.b10` | bullet | Customer silence does not fail an otherwise sufficiently proven delivery. |
| `§26.b11` | bullet | COD discrepancy remains visible and does not duplicate Ledger revenue. |
| `§26.b12` | bullet | WhatsApp and Conversation Workspace operate on the same order truth. |
| `§26.b13` | bullet | Cross-business access is denied server-side. |
| `§26.b14` | bullet | Duplicate/retry does not create duplicate order/payment events. |
| `§27` | section | 27. Dependencies |
| `§27.p1` | lead-in | Major dependencies include: |
| `§27.b1` | bullet | Permissions / Business Isolation; |
| `§27.b2` | bullet | shared customer/product identity; |
| `§27.b3` | bullet | Human Language Layer; |
| `§27.b4` | bullet | Universal Document Intelligence; |
| `§27.b5` | bullet | Conversation Workspace / WhatsApp integration; |
| `§27.b6` | bullet | Notification foundation; |
| `§27.b7` | bullet | audit/idempotency; |
| `§27.b8` | bullet | Inventory/Catalog for availability-aware flows; |
| `§27.b9` | bullet | Payment Verification / Ledger for financial closure; |
| `§27.b10` | bullet | bounded location primitive. |
| `§28` | section | 28. Historical Corrections / Superseded Behaviour |
| `§28.p1` | paragraph | Preserve the original Founder intent for a professional private ordering/delivery capabili… |
| `§28.p2` | lead-in | Superseded or historical-only: |
| `§28.b1` | bullet | public marketplace interpretation; |
| `§28.b2` | bullet | customer silence automatically becoming a failure/rollback; |
| `§28.b3` | bullet | default continuous route GPS tracking of delivery staff; |
| `§28.b4` | bullet | fixed universal delay thresholds such as 45 minutes; |
| `§28.b5` | bullet | mandatory heavy native driver app; |
| `§28.b6` | bullet | old implementation-specific transport/status constants where not reaffirmed. |
| `§29` | section | 29. Provenance and Hydration Coverage |
| `§29.p1` | lead-in | Reconciled from: |
| `§29.b1` | bullet | Founder-origin Section 5 / Order & Delivery recovery; |
| `§29.b2` | bullet | Section 7 cross-feature, confirmation, privacy and residual-completeness evidence; |
| `§29.b3` | bullet | Smart Business Planning 1–20 and project-room historical extraction; |
| `§29.b4` | bullet | current Founder corrections; |
| `§29.b5` | bullet | Final Feature Reconciliation Register §§20, 28–30; |
| `§29.b6` | bullet | Source 01 and Source 11 current Product Truth. |
| `§29.p2` | paragraph | Hydration result: all current PRESERVE / PRESERVE + EVOLVE behaviors assigned to this feat… |
| `§30` | section | 30. Unresolved Founder Questions |
| `§30.b1` | bullet | Exact current Smart Order & Delivery add-on price remains unresolved. |
| `§30.b2` | bullet | Broader marketplace/wholesaler expansion remains a separate future Founder decision and is… |
| `§31` | section | 31. Completion Gate |
| `§31.p1` | paragraph | The feature is not complete because an order screen exists. |
| `§31.p2` | paragraph | Completion requires the full approved lifecycle across UI/channel, backend/data, permissio… |

### 1.3 Contract 06

| Locator | Type | Label |
|---|---|---|
| `§1` | section | 1. Feature Identity |
| `§1.p1` | paragraph | Staff / HR Assistant helps small merchants manage employee records, attendance, shifts, le… |
| `§2` | section | 2. Founder Problem Statement |
| `§2.p1` | paragraph | Local merchants often manage staff through notebooks, WhatsApp, rosters, verbal instructio… |
| `§3` | section | 3. Core Capabilities |
| `§3.p1` | lead-in | The mature feature should support, where enabled and lawful: |
| `§3.b1` | bullet | employee/staff profiles; |
| `§3.b2` | bullet | roles and permission scope; |
| `§3.b3` | bullet | shift/roster records; |
| `§3.b4` | bullet | attendance events; |
| `§3.b5` | bullet | leave/absence recording; |
| `§3.b6` | bullet | payroll-support calculations and context; |
| `§3.b7` | bullet | employee self-view of permitted attendance information; |
| `§3.b8` | bullet | correction/context records; |
| `§3.b9` | bullet | reminders/notifications relevant to staff operations. |
| `§3.p2` | paragraph | Sensitive KYC/national-ID storage remains an unresolved Founder/legal/privacy decision and… |
| `§4` | section | 4. Role and Permission Model |
| `§4.Owner.p1` | paragraph | Controls staff access and may view authorized HR/attendance/payroll-support data. |
| `§4.Manager.p1` | paragraph | May receive delegated operational staff authority, but does not automatically inherit Owne… |
| `§4.Employee-Staff.p1` | lead-in | May perform only explicitly permitted actions, such as: |
| `§4.Employee-Staff.b1` | bullet | add permitted operational transactions; |
| `§4.Employee-Staff.b2` | bullet | view their own attendance where permitted; |
| `§4.Employee-Staff.b3` | bullet | receive assigned shift/reminder information; |
| `§4.Employee-Staff.b4` | bullet | submit approved attendance/leave context. |
| `§4.Employee-Staff.p2` | paragraph | Staff cannot see Owner profit intelligence, unrestricted analytics or Ask CFO by default. |
| `§5` | section | 5. Attendance |
| `§5.p1` | paragraph | Attendance must be represented as auditable events rather than silent mutable truth. |
| `§5.p2` | paragraph | Supported mechanisms may include approved QR/location-assisted check-in/out or other futur… |
| `§5.Location-rule.p1` | paragraph | Location is point-in-time and purpose-limited for attendance verification where enabled. |
| `§5.Location-rule.p2` | paragraph | Smart Business must not continuously track an employee merely because attendance/location … |
| `§5.Location-rule.p3` | paragraph | Exact geofence radius is an implementation decision to be validated, not historical Produc… |
| `§6` | section | 6. Roster and Document Intake |
| `§6.p1` | paragraph | A roster may arrive through photo, PDF, Excel/CSV or other approved formats. |
| `§6.p2` | lead-in | It must reuse Universal Document Intelligence: |
| `§6.p3` | paragraph | document → interpretation → preview → clarification if needed → confirmation → validated H… |
| `§6.p4` | paragraph | No separate HR-only OCR/import truth system should be created. |
| `§7` | section | 7. Leave, Absence and Human Context |
| `§7.p1` | paragraph | Smart Business should record the operational event and preserve approved human context rat… |
| `§7.p2` | lead-in | Examples: |
| `§7.b1` | bullet | employee absent; |
| `§7.b2` | bullet | Owner later approves leave; |
| `§7.b3` | bullet | attendance event corrected with reason; |
| `§7.b4` | bullet | shift changed after discussion. |
| `§7.p3` | paragraph | The system should preserve raw event + authorized context/audit trail. |
| `§8` | section | 8. Payroll Support |
| `§8.p1` | paragraph | Payroll capability is assistance, not autonomous punishment. |
| `§8.p2` | paragraph | Smart Business may help calculate or prepare payroll-support information based on approved… |
| `§8.p3` | lead-in | It must not: |
| `§8.b1` | bullet | autonomously fine staff; |
| `§8.b2` | bullet | dock wages as punishment; |
| `§8.b3` | bullet | treat attendance anomalies as misconduct verdicts; |
| `§8.b4` | bullet | fabricate legal/payroll authority. |
| `§8.p4` | paragraph | Consequential payroll changes remain human-controlled and auditable. |
| `§9` | section | 9. AI Behaviour |
| `§9.p1` | lead-in | AI may: |
| `§9.b1` | bullet | interpret staff/shift instructions; |
| `§9.b2` | bullet | summarize attendance patterns; |
| `§9.b3` | bullet | prepare roster/leave/payroll-support drafts; |
| `§9.b4` | bullet | flag missing/conflicting records; |
| `§9.b5` | bullet | ask clarification; |
| `§9.b6` | bullet | explain records neutrally. |
| `§9.p2` | lead-in | AI must not: |
| `§9.b7` | bullet | accuse an employee of fraud or misconduct from anomaly signals; |
| `§9.b8` | bullet | continuously surveil employees; |
| `§9.b9` | bullet | create permission by inference; |
| `§9.b10` | bullet | reveal Owner intelligence to staff; |
| `§9.b11` | bullet | silently modify historical attendance/payroll records. |
| `§10` | section | 10. Channels |
| `§10.p1` | paragraph | Owner/Manager/Staff interactions may occur through approved channels including WhatsApp, C… |
| `§10.p2` | paragraph | No channel may bypass role boundaries. |
| `§11` | section | 11. Shared Foundations |
| `§11.p1` | lead-in | Reuse: |
| `§11.b1` | bullet | Permission Engine; |
| `§11.b2` | bullet | Identity foundation; |
| `§11.b3` | bullet | Human Language Layer; |
| `§11.b4` | bullet | Conversation Engine; |
| `§11.b5` | bullet | Universal Document Intelligence; |
| `§11.b6` | bullet | Reminder Engine; |
| `§11.b7` | bullet | Notification foundation; |
| `§11.b8` | bullet | purpose-limited Location foundation; |
| `§11.b9` | bullet | audit/history foundation. |
| `§12` | section | 12. Privacy and Dignity |
| `§12.p1` | lead-in | The feature must preserve: |
| `§12.b1` | bullet | minimum necessary staff data; |
| `§12.b2` | bullet | business isolation; |
| `§12.b3` | bullet | role-scoped visibility; |
| `§12.b4` | bullet | purpose-limited location use; |
| `§12.b5` | bullet | auditable corrections; |
| `§12.b6` | bullet | no continuous tracking; |
| `§12.b7` | bullet | no automated humiliation, accusation or punishment; |
| `§12.b8` | bullet | no routine Team LIPS access to employee data without legitimate support/security purpose a… |
| `§13` | section | 13. Failure and Exception Handling |
| `§13.p1` | lead-in | Handle at minimum: |
| `§13.b1` | bullet | duplicate check-in/out; |
| `§13.b2` | bullet | missing shift; |
| `§13.b3` | bullet | location unavailable; |
| `§13.b4` | bullet | ambiguous employee identity; |
| `§13.b5` | bullet | roster conflict; |
| `§13.b6` | bullet | attendance correction request; |
| `§13.b7` | bullet | approved leave after an absence event; |
| `§13.b8` | bullet | unauthorized staff action; |
| `§13.b9` | bullet | retry/idempotency; |
| `§13.b10` | bullet | payroll-support data inconsistency. |
| `§13.p2` | paragraph | A disputed HR event should enter review/context flow rather than being silently erased. |
| `§14` | section | 14. Acceptance Scenarios |
| `§14.p1` | lead-in | Future verification should prove: |
| `§14.b1` | bullet | Owner creates staff profile and scoped permissions; |
| `§14.b2` | bullet | staff can perform permitted action but cannot access Owner intelligence; |
| `§14.b3` | bullet | point-in-time attendance location works without continuous tracking; |
| `§14.b4` | bullet | roster document preview/confirm flow; |
| `§14.b5` | bullet | leave/absence context preserves original event; |
| `§14.b6` | bullet | attendance correction is auditable; |
| `§14.b7` | bullet | staff self-view is limited to permitted own data; |
| `§14.b8` | bullet | payroll-support draft requires human control for consequential outcome; |
| `§14.b9` | bullet | English/Malayalam/Manglish interaction; |
| `§14.b10` | bullet | cross-business isolation. |
| `§15` | section | 15. Non-goals / Rejected Historical Behaviour |
| `§15.p1` | lead-in | Rejected: |
| `§15.b1` | bullet | continuous employee GPS surveillance; |
| `§15.b2` | bullet | automated wage punishment/fines; |
| `§15.b3` | bullet | AI misconduct verdicts; |
| `§15.b4` | bullet | broad employee access to Owner financial intelligence; |
| `§15.b5` | bullet | destructive rewriting of attendance/payroll history; |
| `§15.b6` | bullet | assumed national-ID/KYC collection without a resolved legal/privacy basis. |
| `§16` | section | 16. Dependencies |
| `§16.p1` | paragraph | Requires mature Permissions/Business Isolation and purpose-limited identity/location found… |
| `§17` | section | 17. Completion Gate |
| `§17.p1` | paragraph | Staff / HR is complete only when the permission model, attendance/roster/leave/payroll-sup… |

### 1.4 Contract 16

| Locator | Type | Label |
|---|---|---|
| `§1` | section | 1. Feature Identity |
| `§1.p1` | paragraph | Compliance Shield helps a merchant organize licences, certificates, renewals and recurring… |
| `§1.p2` | paragraph | It should reduce missed deadlines without making unsupported legal claims. |
| `§2` | section | 2. Founder Problem Statement |
| `§2.p1` | lead-in | Small merchants may need to remember items such as: |
| `§2.b1` | bullet | FSSAI registrations/licences; |
| `§2.b2` | bullet | Panchayat/Municipal trade licences; |
| `§2.b3` | bullet | Fire Safety NOC/certificates where applicable; |
| `§2.b4` | bullet | business/vehicle/asset renewals; |
| `§2.b5` | bullet | other merchant-specific regulatory or operational documents. |
| `§2.p2` | paragraph | These are often tracked in files, WhatsApp photos, calendars or memory. Missed dates creat… |
| `§3` | section | 3. Lighthouse Principles |
| `§3.b1` | bullet | Reduce mental load. |
| `§3.b2` | bullet | Tell the merchant what Smart Business knows and does not know. |
| `§3.b3` | bullet | Remind/organize; do not impersonate legal authority. |
| `§3.b4` | bullet | Reuse shared Document Intelligence and Reminder foundations. |
| `§3.b5` | bullet | Ask when document dates/identity are uncertain. |
| `§3.b6` | bullet | Do not silently trust low-confidence OCR. |
| `§3.b7` | bullet | Preserve privacy of licences/identity/business documents. |
| `§4` | section | 4. Supported Compliance Record |
| `§4.p1` | lead-in | A compliance/renewal record may preserve: |
| `§4.b1` | bullet | business scope; |
| `§4.b2` | bullet | compliance/document type; |
| `§4.b3` | bullet | document/licence identifier where relevant; |
| `§4.b4` | bullet | issuing authority/source where known; |
| `§4.b5` | bullet | issue/start date; |
| `§4.b6` | bullet | expiry/renewal/due date; |
| `§4.b7` | bullet | supporting document/file; |
| `§4.b8` | bullet | responsible Owner/authorized user; |
| `§4.b9` | bullet | reminder configuration; |
| `§4.b10` | bullet | status/history; |
| `§4.b11` | bullet | source/interpretation confidence; |
| `§4.b12` | bullet | human-confirmed corrections; |
| `§4.b13` | bullet | notes/context. |
| `§4.p2` | paragraph | Exact fields depend on the document type; avoid a brittle one-size schema where flexibilit… |
| `§5` | section | 5. Document Intake |
| `§5.p1` | lead-in | A merchant may add a compliance document through approved channels using: |
| `§5.b1` | bullet | photo/image; |
| `§5.b2` | bullet | PDF; |
| `§5.b3` | bullet | supported file upload; |
| `§5.b4` | bullet | manual entry; |
| `§5.b5` | bullet | Conversation Workspace / WhatsApp where appropriate. |
| `§5.p2` | lead-in | Universal Document Intelligence must be reused: |
| `§5.p3` | paragraph | upload → interpret → preview → clarify where needed → confirm → validated compliance recor… |
| `§5.p4` | paragraph | OCR output alone is not trusted compliance truth when key dates/identity are uncertain. |
| `§6` | section | 6. Date Extraction and Clarification |
| `§6.p1` | lead-in | The system should identify relevant dates when supported by the document, while distinguis… |
| `§6.b1` | bullet | issue date; |
| `§6.b2` | bullet | effective/start date; |
| `§6.b3` | bullet | expiry date; |
| `§6.b4` | bullet | renewal/due date; |
| `§6.b5` | bullet | inspection/other date. |
| `§6.p2` | paragraph | If multiple plausible dates exist or the document is unclear, ask the merchant to confirm … |
| `§6.p3` | paragraph | Do not silently choose a date just because OCR returned a value. |
| `§7` | section | 7. Reminder Behavior |
| `§7.p1` | paragraph | Compliance Shield must use the shared Reminder Engine. |
| `§7.p2` | paragraph | It may create progressive reminders before a deadline according to approved product/config… |
| `§7.p3` | paragraph | Historical 60 / 30 / 7 / 1 day cadence is useful provenance, not immutable Product Truth. |
| `§7.p4` | lead-in | Reminder behavior should support: |
| `§7.b1` | bullet | advance notice; |
| `§7.b2` | bullet | nearer-deadline escalation; |
| `§7.b3` | bullet | done/renewed acknowledgement; |
| `§7.b4` | bullet | snooze/reschedule where appropriate; |
| `§7.b5` | bullet | renewal-cycle continuation. |
| `§8` | section | 8. Renewal Flow |
| `§8.p1` | lead-in | A typical flow: |
| `§8.b1` | bullet | Merchant has a confirmed compliance record/date. |
| `§8.b2` | bullet | Shared Reminder Engine schedules notifications. |
| `§8.b3` | bullet | Merchant receives timely reminder. |
| `§8.b4` | bullet | Merchant opens/retrieves document/context. |
| `§8.b5` | bullet | Merchant completes renewal outside or through any separately approved external workflow. |
| `§8.b6` | bullet | Merchant uploads/records updated evidence. |
| `§8.b7` | bullet | Smart Business interprets and previews new details. |
| `§8.b8` | bullet | Merchant confirms. |
| `§8.b9` | bullet | Current record/history is updated without erasing prior document history. |
| `§8.b10` | bullet | Next reminder cycle is established where applicable. |
| `§8.p2` | paragraph | Smart Business must not mark a renewal complete simply because a reminder date passed. |
| `§9` | section | 9. Receipt / Document Cabinet Relationship |
| `§9.p1` | paragraph | Compliance documents should reuse the shared secure document-memory foundation rather than… |
| `§9.p2` | paragraph | The merchant should be able to retrieve approved records/documents conversationally or thr… |
| `§10` | section | 10. Users and Permissions |
| `§10.Owner.p1` | paragraph | Full compliance-record/reminder authority for the business. |
| `§10.Manager.p1` | paragraph | Only Owner-delegated compliance visibility/actions. |
| `§10.Employee.p1` | paragraph | No broad compliance-document access by default. A specific operational task may expose onl… |
| `§10.Support-Platform.p1` | paragraph | No routine document browsing. Purpose-limited support access follows current support/priva… |
| `§11` | section | 11. WhatsApp and Conversation Workspace |
| `§11.p1` | lead-in | Approved users should be able to: |
| `§11.b1` | bullet | upload a licence/document; |
| `§11.b2` | bullet | ask what renewals are coming; |
| `§11.b3` | bullet | retrieve permitted documents; |
| `§11.b4` | bullet | confirm/correct dates; |
| `§11.b5` | bullet | mark/upload renewed evidence |
| `§11.p2` | paragraph | through the same shared compliance/document truth. |
| `§11.p3` | paragraph | Channels must not create duplicate reminders or document records. |
| `§12` | section | 12. Human Language |
| `§12.p1` | paragraph | English, Malayalam and Manglish are first-class for reminders/questions/explanations. |
| `§12.p2` | paragraph | Official document names may remain in their common/legal English form where that is cleare… |
| `§13` | section | 13. Ask CFO / Daily Intelligence Relationship |
| `§13.p1` | lead-in | Ask CFO may answer authorized questions such as: |
| `§13.b1` | bullet | Which renewals are due soon? |
| `§13.b2` | bullet | Show my FSSAI document. |
| `§13.p2` | paragraph | Daily Intelligence may surface a material near-term compliance reminder if useful, without… |
| `§13.p3` | paragraph | Neither feature should make legal conclusions beyond supported facts. |
| `§14` | section | 14. Notification Behavior |
| `§14.p1` | paragraph | Use the shared Notification foundation. |
| `§14.p2` | lead-in | Notifications should state: |
| `§14.b1` | bullet | what record/deadline is involved; |
| `§14.b2` | bullet | when it is due/expiring; |
| `§14.b3` | bullet | what the merchant can do next; |
| `§14.b4` | bullet | uncertainty where the date is not fully confirmed. |
| `§14.p3` | paragraph | Avoid unsupported penalty claims or alarmist language. |
| `§15` | section | 15. AI Authority and Legal Boundary |
| `§15.p1` | lead-in | AI may: |
| `§15.b1` | bullet | interpret documents; |
| `§15.b2` | bullet | identify candidate dates/fields; |
| `§15.b3` | bullet | organize records; |
| `§15.b4` | bullet | remind; |
| `§15.b5` | bullet | explain stored facts; |
| `§15.b6` | bullet | suggest that the merchant verify/renew. |
| `§15.p2` | lead-in | AI must not: |
| `§15.b7` | bullet | certify legal compliance; |
| `§15.b8` | bullet | claim the merchant is legally compliant because a document is stored; |
| `§15.b9` | bullet | fabricate current law/penalty amounts; |
| `§15.b10` | bullet | file/renew with authorities unless a separately approved integration explicitly authorizes… |
| `§15.b11` | bullet | silently change confirmed dates based on later OCR. |
| `§16` | section | 16. Error and Exception Behavior |
| `§16.p1` | lead-in | Handle: |
| `§16.b1` | bullet | unreadable/partial document; |
| `§16.b2` | bullet | multiple dates; |
| `§16.b3` | bullet | expired document discovered late; |
| `§16.b4` | bullet | duplicate upload; |
| `§16.b5` | bullet | renewal document superseding old record; |
| `§16.b6` | bullet | reminder delivery failure; |
| `§16.b7` | bullet | unsupported document type; |
| `§16.b8` | bullet | permission denied; |
| `§16.b9` | bullet | missing document but known deadline; |
| `§16.b10` | bullet | law/requirement outside current knowledge. |
| `§16.p2` | paragraph | Uncertainty must be visible and narrowly contained. |
| `§17` | section | 17. Privacy and Trust |
| `§17.p1` | paragraph | Compliance documents may contain sensitive identity/business information. |
| `§17.p2` | lead-in | Requirements: |
| `§17.b1` | bullet | business isolation; |
| `§17.b2` | bullet | permission-scoped retrieval; |
| `§17.b3` | bullet | no unnecessary staff exposure; |
| `§17.b4` | bullet | purpose-limited support access; |
| `§17.b5` | bullet | current retention/deletion policy; |
| `§17.b6` | bullet | no use of compliance data for secret manipulation/upsell. |
| `§18` | section | 18. Shared Foundations to Reuse |
| `§18.p1` | lead-in | Reuse: |
| `§18.b1` | bullet | Universal Document Intelligence; |
| `§18.b2` | bullet | Receipt/Document Cabinet; |
| `§18.b3` | bullet | Reminder Engine; |
| `§18.b4` | bullet | Notification foundation; |
| `§18.b5` | bullet | Permission Engine; |
| `§18.b6` | bullet | Business Memory; |
| `§18.b7` | bullet | Human Language Layer; |
| `§18.b8` | bullet | Conversation channels; |
| `§18.b9` | bullet | audit/history. |
| `§18.p2` | paragraph | Do not create a compliance-only OCR pipeline, storage system or scheduler. |
| `§19` | section | 19. Explicit Non-goals |
| `§19.b1` | bullet | legal advice/certification; |
| `§19.b2` | bullet | immutable 60/30/7/1 cadence; |
| `§19.b3` | bullet | hardcoded penalty/legal claims without current verification; |
| `§19.b4` | bullet | OCR-to-trusted-date with no review when uncertain; |
| `§19.b5` | bullet | duplicate reminder/document architecture. |
| `§20` | section | 20. Acceptance Scenarios |
| `§20.p1` | lead-in | A future Blueprint/EIS must verify at least: |
| `§20.b1` | bullet | Clear licence photo → interpreted fields/date → preview → Owner confirmation. |
| `§20.b2` | bullet | Ambiguous date → clarification before record/reminder. |
| `§20.b3` | bullet | Renewal reminder uses shared Reminder Engine. |
| `§20.b4` | bullet | Expired/renewed document preserves historical record. |
| `§20.b5` | bullet | Reminder due does not falsely mark renewal complete. |
| `§20.b6` | bullet | Employee cannot access broad compliance documents by default. |
| `§20.b7` | bullet | WhatsApp and Workspace retrieve the same confirmed record. |
| `§20.b8` | bullet | Duplicate document/upload is handled safely. |
| `§20.b9` | bullet | Ask CFO reports stored renewal facts without legal certification. |
| `§20.b10` | bullet | Support cannot routinely browse documents without purpose/authorization. |
| `§21` | section | 21. Historical Corrections / Superseded Behavior |
| `§21.p1` | paragraph | Preserve compliance-memory/reminder intent. |
| `§21.p2` | lead-in | Historical-only: |
| `§21.b1` | bullet | exact 60/30/7/1 cadence; |
| `§21.b2` | bullet | fixed penalty claims; |
| `§21.b3` | bullet | provider-specific document/storage assumptions. |
| `§21.p3` | lead-in | Superseded: |
| `§21.b4` | bullet | treating OCR as unquestioned authority; |
| `§21.b5` | bullet | claiming Smart Business itself makes the merchant legally compliant. |
| `§22` | section | 22. Provenance and Hydration Coverage |
| `§22.p1` | paragraph | Reconciled from Founder-origin Section 6 and Section 7; planning/project-room compliance h… |
| `§22.p2` | paragraph | Hydration result: all current Compliance Shield behaviors, boundaries and shared-foundatio… |
| `§23` | section | 23. Completion Gate |
| `§23.p1` | paragraph | Complete only when document intake, confirmed compliance facts, retrieval, shared reminder… |

### 1.5 Build Plan §5.5, §10.7, §11, §13, §15, §16

| Locator | Type | Label |
|---|---|---|
| `§5.5` | section | 5.5 Pilot gate |
| `§5.5.p1` | paragraph | Smart Order & Delivery and other Founder-approved pilot-entry requirements must be ready b… |
| `§5.5.p2` | paragraph | The mission sequence must not accidentally onboard pilot merchants before prerequisite Bui… |
| `§10.7` | section | 10.7 `SB-P-1.18 — Controlled Business Add-ons` |
| `§10.7.p1` | paragraph | This mission contains three separately verifiable workstreams under one Product Mission id… |
| `§10.7.A-Smart-Order-Delivery.p1` | lead-in | Required outcomes: |
| `§10.7.A-Smart-Order-Delivery.b1` | bullet | capture order from natural text/voice, phone-call note, image/list, or supported document; |
| `§10.7.A-Smart-Order-Delivery.b2` | bullet | material ambiguity produces clarification, not invented confirmation; |
| `§10.7.A-Smart-Order-Delivery.b3` | bullet | stock/availability informs order; |
| `§10.7.A-Smart-Order-Delivery.b4` | bullet | substitution/partial fulfilment requires confirmation; |
| `§10.7.A-Smart-Order-Delivery.b5` | bullet | clear lifecycle from draft → confirm → prepare → assign → deliver → close; |
| `§10.7.A-Smart-Order-Delivery.b6` | bullet | delivery staff receives only purpose-limited information/actions; |
| `§10.7.A-Smart-Order-Delivery.b7` | bullet | proof/COD handling is auditable; |
| `§10.7.A-Smart-Order-Delivery.b8` | bullet | no default continuous employee GPS surveillance; |
| `§10.7.A-Smart-Order-Delivery.b9` | bullet | customer silence alone does not invalidate otherwise sufficiently proven delivery; |
| `§10.7.A-Smart-Order-Delivery.b10` | bullet | COD/payment closure reuses shared Ledger/payment truth; |
| `§10.7.A-Smart-Order-Delivery.b11` | bullet | private merchant-customer network remains private; this is not a marketplace. |
| `§10.7.A-Smart-Order-Delivery.p2` | paragraph | Runtime scenario: ambiguous customer order must remain draft until material ambiguity is r… |
| `§10.7.B-Staff-HR.p1` | lead-in | Required outcomes: |
| `§10.7.B-Staff-HR.b1` | bullet | Owner manages staff and assigns bounded permissions; |
| `§10.7.B-Staff-HR.b2` | bullet | permitted Employee can view own attendance/self-service only; |
| `§10.7.B-Staff-HR.b3` | bullet | employee cannot see unrelated staff or Owner financial intelligence; |
| `§10.7.B-Staff-HR.b4` | bullet | attendance/geofence, if used, is purpose-limited rather than continuous surveillance; |
| `§10.7.B-Staff-HR.b5` | bullet | corrections/leave/request workflow is auditable; |
| `§10.7.B-Staff-HR.b6` | bullet | staff actions in Transactions, Stock, Orders, Documents preserve actor identity; |
| `§10.7.B-Staff-HR.b7` | bullet | no hidden employee scoring/punishment system; |
| `§10.7.B-Staff-HR.b8` | bullet | no automated wage punishment or misconduct verdict. |
| `§10.7.B-Staff-HR.p2` | paragraph | Runtime scenario: Employee requests own attendance correction and can neither browse anoth… |
| `§10.7.C-Compliance-Shield.p1` | lead-in | Required outcomes: |
| `§10.7.C-Compliance-Shield.b1` | bullet | compliance documents use shared UDI/document path; |
| `§10.7.C-Compliance-Shield.b2` | bullet | expiry/renewal/status awareness uses shared Reminder Engine; |
| `§10.7.C-Compliance-Shield.b3` | bullet | supporting document/provenance remains retrievable; |
| `§10.7.C-Compliance-Shield.b4` | bullet | Smart Business does not claim to be legal authority or guarantee legal compliance; |
| `§10.7.C-Compliance-Shield.b5` | bullet | compliance data remains business-scoped and permission-controlled. |
| `§10.7.C-Compliance-Shield.p2` | paragraph | Runtime scenario: approaching licence expiry produces a useful reminder linked to the docu… |
| `§10.7.Exit-principle.p1` | paragraph |  The add-ons solve real jobs using the same Smart Business I already understand; they do n… |
| `§11` | section | 11. Cross-Mission Dependency Rules |
| `§11.p1` | paragraph | The nine missions are cumulative. |
| `§11.p2` | lead-in | Important dependencies include: |
| `§11.b1` | bullet | 1.12 Authority/Identity underpins all later role/permission behavior. |
| `§11.b2` | bullet | 1.13 Conversation/AI underpins Ask CFO, multilingual conversational workflows, Voice, late… |
| `§11.b3` | bullet | 1.14 Business Memory/UDI underpins later financial integrity, Compliance documents, onboar… |
| `§11.b4` | bullet | 1.15 Reminder/Automation underpins Compliance reminders, supplier/reorder continuation, cr… |
| `§11.b5` | bullet | 1.16 Financial Integrity underpins COD/payment closure and trustworthy credit/payment beha… |
| `§11.b6` | bullet | 1.17 Stock/Supplier/Reorder underpins Order availability/substitution and supplier-linked … |
| `§11.b7` | bullet | 1.18 completes pilot-required controlled add-ons. |
| `§11.b8` | bullet | 1.19 completes support/lifecycle/stewardship and Voice Plus. |
| `§11.b9` | bullet | 1.20 may only adapt existing intelligence and actions into WhatsApp; it must not create mi… |
| `§11.p3` | paragraph | Cross-mission feature advancement must remain visible in the Global Product Completion Reg… |
| `§11.p4` | paragraph | A later mission may complete a contract partly advanced earlier, but it must not claim ear… |
| `§11.p5` | paragraph | The approved sources for assigning a BUILD NOW requirement to a later mission (the ASSIGNE… |
| `§13` | section | 13. Completion Report Experience Verification Matrix — Permanent Rule |
| `§13.p1` | paragraph | Every future Product Mission from SB-P-1.12 through SB-P-1.20 must include an Experience V… |
| `§13.p2` | lead-in | At minimum: |
| `§13.t1` | table | / UX anchor / human outcome / Applicable actor/role / Runtime status / Evidence / Dependen… |
| `§13.t2` | table | /---/---/---/---/---/ |
| `§13.t3` | table | / Mission-specific Founder-approved outcome / Owner / Manager / Employee / Customer / Supp… |
| `§13.p3` | lead-in | Rules: |
| `§13.b1` | bullet | A merged PR is not sufficient proof. |
| `§13.b2` | bullet | Green CI is not sufficient proof. |
| `§13.b3` | bullet | A working backend is not sufficient proof if the intended user experience is absent. |
| `§13.b4` | bullet | A visually similar screen is not sufficient proof if the real permission/data/action path … |
| `§13.b5` | bullet | Founder Runtime Verification must test the mission’s applicable UX anchors. |
| `§13.b6` | bullet | Independent verification must test protected/denied behavior where the mission contains au… |
| `§13.b7` | bullet | DEFERRED is allowed only when the dependency is explicitly approved and owned by a later m… |
| `§13.b8` | bullet | A later mission cannot use that deferral to erase accountability for the earlier portion. |
| `§13.p4` | lead-in | Additional rules: |
| `§13.b9` | bullet | The matrix is seeded at Stage 4 from the Founder-approved experience and scenarios of Sect… |
| `§13.b10` | bullet | The matrix is the experience subset of the mission's Contract Reconciliation, which covers… |
| `§13.p5` | paragraph | This rule is accepted as technically and governance-sound. |
| `§15` | section | 15. Current Unresolved Founder Decisions |
| `§15.p1` | lead-in | These remain intentionally unresolved and must be addressed only when relevant to a future… |
| `§15.b1` | bullet | current free-trial policy; |
| `§15.b2` | bullet | exact Voice Plus price; |
| `§15.b3` | bullet | exact Staff/HR price; |
| `§15.b4` | bullet | exact Smart Stock price; |
| `§15.b5` | bullet | exact Smart Order & Delivery price; |
| `§15.b6` | bullet | exact long-term retention/deletion duration after cancellation/non-payment; |
| `§15.b7` | bullet | employee KYC/national-ID necessity and legal/privacy basis; |
| `§15.b8` | bullet | broader wholesaler/marketplace expansion; |
| `§15.b9` | bullet | third-party underwriting/lending ecosystem. |
| `§15.p2` | paragraph | These do not block unrelated Build Now work. An unresolved decision affects only the FCTM … |
| `§15.p3` | paragraph | Do not guess them in implementation. |
| `§16` | section | 16. Explicit Rejections / Non-Goals |
| `§16.p1` | lead-in | Future missions must not silently revive: |
| `§16.b1` | bullet | Ask CFO as write-capable authority; |
| `§16.b2` | bullet | AI accusation/judgment of employees or customers; |
| `§16.b3` | bullet | continuous staff GPS surveillance by default; |
| `§16.b4` | bullet | automated wage punishment; |
| `§16.b5` | bullet | blind supplier procurement without valid Owner delegation; |
| `§16.b6` | bullet | hard credit blocking by default; |
| `§16.b7` | bullet | custom client-specific POS modification inside core; |
| `§16.b8` | bullet | marketplace behavior inside Smart Order & Delivery; |
| `§16.b9` | bullet | customer silence automatically invalidating otherwise sufficiently proven delivery; |
| `§16.b10` | bullet | duplicate channel-specific Business Memory; |
| `§16.b11` | bullet | duplicate channel-specific permission models; |
| `§16.b12` | bullet | separate AI brains per feature/channel; |
| `§16.b13` | bullet | model conversation history as permanent Business Memory; |
| `§16.b14` | bullet | uncontrolled binary-media concentration in Supabase for convenience; |
| `§16.b15` | bullet | provider URLs as permission authority/business identity; |
| `§16.b16` | bullet | destructive subscription-driven schema creation/deletion; |
| `§16.b17` | bullet | broad routine Super Admin access to merchant private data; |
| `§16.b18` | bullet | revival of /survey or obsolete domains/routes; |
| `§16.b19` | bullet | old Daily Intelligence timing that conflicts with the approved 7:00 AM / 10:30 AM / 10:00 … |
| `§16.b20` | bullet | independent Catalog product expansion. |
| `§16.p2` | paragraph | Each explicit rejection is an FCTM OUT OF BUILD SCOPE row that the mission checks as "must… |

### 1.6 Touched and inherited units of delegated contracts and the GPCV

| Source | Locator | Label |
|---|---|---|
| `C22` | `§16.p1` | Where features need location, use a shared purpose-limited primitive rather than independe |
| `C22` | `§16.p3` | Default continuous employee surveillance is rejected. |
| `C22` | `§16.b5` | why location is needed; |
| `C22` | `§16.b6` | who may see it; |
| `C22` | `§16.b7` | when it is captured; |
| `C22` | `§16.b8` | how long it is retained; |
| `C22` | `§16.b9` | when access ends. |
| `C22` | `§16.b1` | point-in-time attendance verification; |
| `C22` | `§16.b2` | customer delivery destination; |
| `C22` | `§16.b3` | point-in-time delivery proof/context; |
| `C22` | `§16.b4` | other explicitly approved operational purposes. |
| `C22` | `§29.b9` | Attendance/delivery location uses purpose-limited shared primitive. |
| `C17` | `§4.Manager-oriented-surface.b7` | staff/HR/order-delivery views when add-ons are enabled. |
| `C17` | `§9.b1` | staff roster; |
| `C17` | `§9.b2` | attendance; |
| `C17` | `§9.b3` | leave requests; |
| `C17` | `§9.b4` | correction/context review; |
| `C17` | `§9.b5` | payroll support/export; |
| `C17` | `§9.b6` | role/permission administration where appropriate. |
| `C17` | `§9.p2` | Employees may have self-service surfaces only for information/actions explicitly permitted |
| `C17` | `§10.b1` | orders by state; |
| `C17` | `§10.b2` | pending confirmation; |
| `C17` | `§10.b3` | preparation/assignment; |
| `C17` | `§10.b4` | delivery exceptions; |
| `C17` | `§10.b5` | COD/payment issues; |
| `C17` | `§10.b6` | delivery history/proof. |
| `C17` | `§10.p2` | The dashboard does not create a marketplace and must preserve delivery/privacy boundaries. |
| `C24` | `§18.Roster-Document-HR-Atten.b1` | roster photo/file enters UDI; |
| `C24` | `§18.Roster-Document-HR-Atten.b2` | AI extracts draft roster; |
| `C24` | `§18.Roster-Document-HR-Atten.b3` | human confirms; |
| `C24` | `§18.Roster-Document-HR-Atten.b4` | HR domain stores approved schedule; |
| `C24` | `§18.Roster-Document-HR-Atten.b5` | attendance compares against approved schedule and context; |
| `C24` | `§18.Roster-Document-HR-Atten.b6` | payroll support uses validated attendance, never AI accusation. |
| `C24` | `§21.b5` | roster/attendance corrections; |
| `C9` | `§12.b7` | Staff/HR; |
| `C9` | `§12.b9` | Smart Order & Delivery; |
| `C9` | `§12.b12` | Compliance and other conversational features. |
| `C10` | `§13.b4` | create an order draft; |
| `C10` | `§13.b6` | submit an attendance correction request. |
| `C12` | `§4.b4` | stock/supplier/order instructions where the user's product/role permits; |
| `C12` | `§7.b7` | order/reorder instruction; |
| `C3` | `§9.b2` | customer or supplier; |
| `C3` | `§11.Customer-Supplier-Delive.p1` | No general Ledger access. They may participate only in specific workflows that expose the  |
| `C3` | `§15.b7` | Customer/Supplier identity; |
| `C3` | `§15.b12` | Smart Order & Delivery; |
| `C3` | `§15.b13` | Staff / HR where authorized. |
| `C5` | `§4.b10` | roster/attendance-related documents; |
| `C5` | `§4.b11` | customer/order lists; |
| `C5` | `§4.b12` | compliance/licence documents. |
| `C5` | `§6.b5` | linked transaction/order/inventory/compliance record. |
| `C5` | `§7.b4` | employee roster photo/PDF → HR draft; |
| `C5` | `§7.b5` | customer/order sheet → order draft; |
| `C5` | `§7.b6` | licence document → Compliance Shield record/reminder preparation. |
| `BP` | `§10.3.Search-sequencing-clarif.p2` | Structured Customer/Supplier-directory-indexed search matures only after Supplier and Cust |
| `GPCV` | `§5.t3` | / 1 / Smart Order & Delivery Assistant / Add-on for Ledger + Manager / ADD-ON + BUILD NOW  |
| `GPCV` | `§5.t8` | / 6 / Staff / HR Assistant / Add-on — Ledger + Manager / ADD-ON + BUILD NOW / NOT IMPLEMEN |
| `GPCV` | `§5.t19` | / 16 / Compliance Shield / Add-on — Ledger + Manager / ADD-ON + BUILD NOW / NOT IMPLEMENTE |
| `GPCV` | `§8.b3` | unresolved employee KYC scope does not block ordinary staff profile/attendance architectur |
| `GPCV` | `§8.b4` | Smart Order & Delivery price does not block definition of its operational workflow; |
| `GPCV` | `§8.b5` | marketplace/wholesaler expansion does not block the approved local Smart Order & Delivery  |
| `GPCV` | `§9.b2` | AI accusation/punishment — REJECT; |
| `GPCV` | `§9.b3` | continuous employee GPS surveillance — REJECT; |
| `GPCV` | `§9.b4` | automatic wage docking/fines — REJECT; |
| `GPCV` | `§9.b7` | dynamic CREATE/DROP core schema by subscription state — REJECT; |
| `GPCV` | `§9.b8` | routine broad Super Admin access to merchant private business data — REJECT; |
| `GPCV` | `§9.b9` | public marketplace behavior for current Smart Order & Delivery — REJECT; |
| `GPCV` | `§9.b11` | future wholesaler/marketplace expansion — not current core; requires separate Founder deci |

## 2. Row volume and effort per contract

| Contract / source | Inventory units | Lead-ins | Sections | FCTM rows | `IN SCOPE` rows |
|---|---|---|---|---|---|
| C1 | 287 | 34 | 31 | 283 | 248 |
| C6 | 99 | 12 | 17 | 100 | 91 |
| C16 | 150 | 18 | 23 | 152 | 138 |
| BP | 91 | 9 | 6 | 89 | 58 |

Totals across all parts: 764 rows (590 `IN SCOPE`, 48 `OUT OF BUILD SCOPE`, 27 `NOT APPLICABLE`, 2 `ESCALATED`, 12 `ASSIGNED TO LATER MISSION`, 8 `UNRESOLVED FOUNDER DECISION`, 77 `DELEGATED`). Effort reading: Contract 01 carries the largest load, with lifecycle, delivery staff, COD and location; Contract 16 is the most self-contained; the Location Foundation (WS-D) is small but cross-cuts WS-A and WS-B, and both `ESCALATED` rows concern location (`1-§14-5` in WS-A, `22-§16-6` in WS-D).

## 3. Completeness test (Source 18 §3.2 item 6)

| Check | Test | Result |
|---|---|---|
| (a) Every numbered section of C1, C6 and C16 has at least one row | set of section headings minus sections with a row | **PASS — 0 missing** |
| (b) Every non-lead-in unit is covered by its own row (or the single row of a wholly non-`IN SCOPE` section) | inventory units minus covered units | **PASS — 0 uncovered** across 627 full-inventory units and 67 touched delegated units |
| (c) Every acceptance scenario is its own `SCN` row | C1 §26, C6 §14, C16 §20 bullets lacking an `SCN` row | **PASS — 0 missing** (§3.1) |
| (d) Exactly one disposition, from the Source 18 vocabulary, with a citation | rows with an invalid or empty disposition or citation; duplicate IDs | **PASS** — 0 invalid, 0 uncited, 0 duplicate IDs |
| (d) No `ESCALATED` or critical-path `UNRESOLVED FOUNDER DECISION` row at lock | rows with those dispositions | **NOT MET — 2 `ESCALATED`** (`1-§14-5`, `22-§16-6`); 8 `UNRESOLVED FOUNDER DECISION`, none on the critical path. This is a lock condition, not a Stage 2 failure: Stage 3 is triggered (`05-…`) |
| (d) Classification and assignment equal the source | rows whose commitment, commercial class or owner differs from the source without a Founder Decision ID | **PASS** — every `ADD-ON + BUILD NOW` value is verbatim from GPCV rows 1, 6, 16; every `ASSIGNED TO LATER MISSION` row cites BP §8.4, §9 row 9 or §10.9 (SB-P-1.20); no row moved between commitments |
| (e) Downstream mapping | not applicable before Stage 4 | — |
| Matrix → inventory | C1/C6/C16/D/G rows whose pointer is not an inventory locator | **PASS — 0 orphans** |

### 3.1 Acceptance-scenario rows

| Contract | Scenario locator | Row(s) |
|---|---|---|
| C1 | `§26.b1` | 1-§26-1 |
| C1 | `§26.b2` | 1-§26-2 |
| C1 | `§26.b3` | 1-§26-3 |
| C1 | `§26.b4` | 1-§26-4 |
| C1 | `§26.b5` | 1-§26-5 |
| C1 | `§26.b6` | 1-§26-6 |
| C1 | `§26.b7` | 1-§26-7 |
| C1 | `§26.b8` | 1-§26-8 |
| C1 | `§26.b9` | 1-§26-9 |
| C1 | `§26.b10` | 1-§26-10 |
| C1 | `§26.b11` | 1-§26-11 |
| C1 | `§26.b12` | 1-§26-12a, 1-§26-12b |
| C1 | `§26.b13` | 1-§26-13 |
| C1 | `§26.b14` | 1-§26-14 |
| C6 | `§14.b1` | 6-§14-1 |
| C6 | `§14.b2` | 6-§14-2 |
| C6 | `§14.b3` | 6-§14-3 |
| C6 | `§14.b4` | 6-§14-4 |
| C6 | `§14.b5` | 6-§14-5 |
| C6 | `§14.b6` | 6-§14-6 |
| C6 | `§14.b7` | 6-§14-7 |
| C6 | `§14.b8` | 6-§14-8 |
| C6 | `§14.b9` | 6-§14-9 |
| C6 | `§14.b10` | 6-§14-10 |
| C16 | `§20.b1` | 16-§20-1 |
| C16 | `§20.b2` | 16-§20-2 |
| C16 | `§20.b3` | 16-§20-3 |
| C16 | `§20.b4` | 16-§20-4 |
| C16 | `§20.b5` | 16-§20-5 |
| C16 | `§20.b6` | 16-§20-6 |
| C16 | `§20.b7` | 16-§20-7a, 16-§20-7b |
| C16 | `§20.b8` | 16-§20-8 |
| C16 | `§20.b9` | 16-§20-9 |
| C16 | `§20.b10` | 16-§20-10 |

## 4. Inherited, inbound and delegated identifier checks

### 4.1 Inherited assignments

All 33 inherited identifiers exist in their source FCTM, name SB-P-1.18, and have rows in this FCTM (`03-…` §0.9).

### 4.2 Reverse dependencies

The Stage 1 seed listed the 20 SB-P-1.15 rows carrying `D18`. A full search of all six predecessor FCTMs for `D18` on rows not assigned to SB-P-1.18 found **38** such rows: 20 in SB-P-1.15, 15 in SB-P-1.16 (C14 §6 b5, §13 b1–b3; C15 §5 b6, §7 b7, §15 p1, b1–b5 and p3, §23 b7, §25 n7) and 3 in SB-P-1.13 (C24 §6, §9, §10). The keyword screen added three SB-P-1.15 rows (C11 §9 b3, b4, b6) that consume this mission's events but carry no `D18`. All 41 are Part F rows.

### 4.3 Inbound C1/C6/C16 identifiers

Each unit-level C1 identifier that SB-P-1.16 or SB-P-1.17 marked as owned by SB-P-1.18 was compared with this matrix's row of the same ID: all 21 name the same source unit (for example `1-§5-20` = §5 Delivery Staff b6 COD amount; `1-§9-17` = §9 b16). `1-§27-8` and `1-§27-9` are preserved by rowing C1 §27 at unit level. The six section-level identifiers from SB-P-1.14 (`1-§6`, `1-§8`, `1-§13`, `1-§16`, `6-§6`, `16-§5`) are expanded here.

### 4.4 Delegated and reverse identifiers exist in the owner's FCTM

| Row ID | Owner | Owner FCTM row |
|---|---|---|
| `21-§10-1` | SB-P-1.12 | present |
| `21-§10-2` | SB-P-1.12 | present |
| `21-§10-3` | SB-P-1.12 | present |
| `21-§10-4` | SB-P-1.12 | present |
| `21-§10-5` | SB-P-1.12 | present |
| `21-§10-6` | SB-P-1.12 | present |
| `21-§13-2` | SB-P-1.12 | present |
| `21-§13-3` | SB-P-1.12 | present |
| `21-§14-1` | SB-P-1.12 | present |
| `21-§16-1` | SB-P-1.12 | present |
| `21-§16-2` | SB-P-1.12 | present |
| `21-§17` | SB-P-1.12 | present |
| `21-§18-1` | SB-P-1.12 | present |
| `22-§5-4` | SB-P-1.12 | present |
| `22-§5-5` | SB-P-1.12 | present |
| `22-§5-7` | SB-P-1.12 | present |
| `22-§12-1` | SB-P-1.15 | present |
| `22-§13-1` | SB-P-1.12 | present |
| `22-§14-1` | SB-P-1.12 | present |
| `22-§15` | SB-P-1.12 | present |
| `22-§33-1` | SB-P-1.12 | present |
| `7-§2-1` | SB-P-1.17 | present |
| `7-§2-2` | SB-P-1.17 | present |
| `25-§4-1` | SB-P-1.14 | present |
| `25-§4-8` | SB-P-1.14 | present |
| `18-§5` | SB-P-1.19 | no owner FCTM yet; row present in FCTM-13 |
| `18-§9` | SB-P-1.19 | no owner FCTM yet; row present in FCTM-14 |
| `21-§4-3` | SB-P-1.12 | present |
| `21-§4-5` | SB-P-1.12 | present |
| `21-§4-6` | SB-P-1.12 | present |
| `22-§4-3` | SB-P-1.14 | present |
| `25-§6-1` | SB-P-1.14 | present |
| `25-§7-1` | SB-P-1.14 | present |
| `8-§4-2` | SB-P-1.19 | no owner FCTM yet; row present in FCTM-13 |
| `23-§4-3` | SB-P-1.20 | no owner FCTM yet |
| `23-§4-5` | SB-P-1.20 | no owner FCTM yet |
| `2-§11-9` | SB-P-1.15 | present |
| `2-§11-10` | SB-P-1.15 | present |
| `2-§12-8` | SB-P-1.15 | present |
| `4-§3-6` | SB-P-1.15 | present |
| `4-§3-7` | SB-P-1.15 | present |
| `4-§3-8` | SB-P-1.15 | present |
| `4-§4-4` | SB-P-1.15 | present |
| `4-§5-6` | SB-P-1.15 | present |
| `4-§6-8` | SB-P-1.15 | present |
| `4-§6-9` | SB-P-1.15 | present |
| `4-§6-10` | SB-P-1.15 | present |
| `4-§11-6` | SB-P-1.15 | present |
| `11-§5-3` | SB-P-1.15 | present |
| `11-§8-2` | SB-P-1.15 | present |
| `11-§8-6` | SB-P-1.15 | present |
| `11-§8-7` | SB-P-1.15 | present |
| `11-§10-5` | SB-P-1.15 | present |
| `22-§11-2` | SB-P-1.15 | present |
| `22-§11-5` | SB-P-1.15 | present |
| `22-§11-6` | SB-P-1.15 | present |
| `14-§6-5` | SB-P-1.16 | present |
| `14-§13-1` | SB-P-1.16 | present |
| `14-§13-2` | SB-P-1.16 | present |
| `14-§13-3` | SB-P-1.16 | present |
| `15-§5-6` | SB-P-1.16 | present |
| `15-§7-7` | SB-P-1.16 | present |
| `15-§15-1` | SB-P-1.16 | present |
| `15-§15-2` | SB-P-1.16 | present |
| `15-§15-3` | SB-P-1.16 | present |
| `15-§15-4` | SB-P-1.16 | present |
| `15-§15-5` | SB-P-1.16 | present |
| `15-§15-6` | SB-P-1.16 | present |
| `15-§15-7` | SB-P-1.16 | present |
| `15-§23-7` | SB-P-1.16 | present |
| `15-§25-7` | SB-P-1.16 | present |
| `24-§6-2` | SB-P-1.13 | present |
| `24-§9-2` | SB-P-1.13 | present |
| `24-§10-10` | SB-P-1.13 | present |
| `11-§9-3` | SB-P-1.15 | present |
| `11-§9-4` | SB-P-1.15 | present |
| `11-§9-6` | SB-P-1.15 | present |

"No owner FCTM yet" means the owning mission (SB-P-1.19, SB-P-1.20) has not reached Stage 2; the row cites the Build Plan assignment instead. "Section/umbrella row only" means the owner rowed the unit at section level or under a grouped identifier.

## 5. Contract-wide keyword screen

Every unit of the 22 contracts other than C1, C6 and C16 was matched against SB-P-1.18 subject terms (orders, delivery, COD, staff, employee, attendance, roster, payroll, shift, leave, HR, compliance, licence, renewal, geofence, location, customer network), excluding idioms such as "in order to". 274 units matched: 40 have a unit row here, 81 sit in a section this matrix touches, and 153 govern the owning mission's own feature (for example "Employee cannot access Owner intelligence" in C2, C4, C10, C12, C21 or C24), which this mission consumes through its Dependency codes without a separate row. The screen is a recall aid, not proof of absence; Mission Control's independent test remains the control.

| Source | Locator | Label | Screen result |
|---|---|---|---|
| C2 | `§1.b6` | staff events; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§2.b7` | Do not accuse employees, suppliers, or customers. | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§3.Employee.p2` | Employee operational access must not become a path to Ask CFO data. | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§7.b4` | change payroll; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§7.b5` | manipulate attendance; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§8.b12` | tell the Owner that an employee is guilty of theft/fraud; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§8.b13` | automatically punish staff; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§10.b1` | an employee is late because the Owner sent them to market; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§11.b8` | orders/deliveries; | section touched by `2-§11-10`, `2-§11-9` |
| C2 | `§11.b9` | attendance/HR information where Owner is authorized; | section touched by `2-§11-10`, `2-§11-9` |
| C2 | `§25.Access.b2` | Employee blocked by default; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C2 | `§27.b3` | Employee access remains disabled by default; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C3 | `§2.b7` | verbal instructions to staff; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C3 | `§11.Employee-Staff.p1` | May add or view only permitted operational records. Staff must not receive Owner | section touched by `3-§11-6` |
| C3 | `§15.b12` | Smart Order & Delivery; | row `3-§15-12` |
| C3 | `§15.b13` | Staff / HR where authorized. | row `3-§15-13` |
| C3 | `§19.b10` | permission-scoped staff contribution; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C3 | `§20.b4` | employee access to Owner intelligence by default; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§2.p3` | Business timezone controls delivery. | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§3.b5` | compliance/renewal deadlines; | section touched by `4-§3-6`, `4-§3-7`, `4-§3-8` |
| C4 | `§3.b6` | staffing/attendance items where Staff/HR is enabled; | section touched by `4-§3-6`, `4-§3-7`, `4-§3-8` |
| C4 | `§3.b7` | order/delivery commitments; | section touched by `4-§3-6`, `4-§3-7`, `4-§3-8` |
| C4 | `§4.b3` | stock or order issues; | section touched by `4-§4-4` |
| C4 | `§5.b5` | unresolved orders/deliveries; | section touched by `4-§5-6` |
| C4 | `§6.b7` | Staff/HR; | section touched by `4-§6-10`, `4-§6-8`, `4-§6-9` |
| C4 | `§6.b8` | Smart Order & Delivery; | section touched by `4-§6-10`, `4-§6-8`, `4-§6-9` |
| C4 | `§6.b9` | Compliance Shield; | section touched by `4-§6-10`, `4-§6-8`, `4-§6-9` |
| C4 | `§7.Employee-Staff.p1` | Must not receive Owner Daily Intelligence by default. Staff may receive only exp | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§11.b6` | open an order/delivery exception. | section touched by `4-§11-6` |
| C4 | `§13.b3` | message delivery failure; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§15.b1` | expose Owner financial intelligence to unauthorized staff; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§15.b2` | accuse employees/customers from anomaly signals; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§15.b3` | expose sensitive HR/customer data beyond role need; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§16.b6` | WhatsApp delivery failure with web-app continuity; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C4 | `§17.b3` | staff access to Owner intelligence by default; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C5 | `§1.p2` | It covers receipts, invoices, bills, order sheets, stock documents, rosters, com | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C5 | `§4.b10` | roster/attendance-related documents; | row `5-§4-11` |
| C5 | `§4.b11` | customer/order lists; | row `5-§4-12` |
| C5 | `§4.b12` | compliance/licence documents. | row `5-§4-13` |
| C5 | `§6.b5` | linked transaction/order/inventory/compliance record. | row `5-§6-10`, `5-§6-12` |
| C5 | `§7.b4` | employee roster photo/PDF → HR draft; | row `5-§7-5` |
| C5 | `§7.b5` | customer/order sheet → order draft; | row `5-§7-6` |
| C5 | `§7.b6` | licence document → Compliance Shield record/reminder preparation. | row `5-§7-7` |
| C5 | `§13.b12` | claim unsupported legal/compliance validity. | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C5 | `§18.b9` | permission-scoped staff upload; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§3.b5` | order/communication history; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§5.p2` | observe → suggest → Owner/authorized Manager reviews → confirm/modify/reject → a | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§8.b2` | confirmed sale/order may affect stock through the approved business-event path; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§10.Supplier.p1` | Receives only communication required for the approved supplier/order workflow. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§11.b10` | place supplier orders without confirmation/delegated authority; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§11.b11` | expose merchant financial intelligence to staff/suppliers. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§13.b8` | supplier/order communication failure; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§14.p2` | Counter/POS discrepancy, wastage or shrinkage may be surfaced for review but mus | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C7 | `§15.b10` | staff permission boundaries; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C8 | `§4.b9` | staff/HR where enabled; | section touched by `8-§4-2` |
| C8 | `§4.b10` | order/delivery where enabled; | section touched by `8-§4-2` |
| C9 | `§2.p1` | Kerala merchants and staff often communicate using mixed language, shorthand, lo | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C9 | `§10.p2` | A likely spelling match must not silently merge two different customers, supplie | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C9 | `§12.b7` | Staff/HR; | row `9-§12-7` |
| C9 | `§12.b9` | Smart Order & Delivery; | row `9-§12-9` |
| C9 | `§12.b12` | Compliance and other conversational features. | row `9-§12-12` |
| C10 | `§13.b4` | create an order draft; | row `10-§13-5` |
| C10 | `§13.b6` | submit an attendance correction request. | row `10-§13-7` |
| C10 | `§14.p1` | If WhatsApp delivery or API availability fails while Smart Business remains heal | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C10 | `§14.b6` | failed WhatsApp delivery is reported as a channel failure, not automatically as  | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C10 | `§19.b2` | No Employee escalation into Owner intelligence through chat. | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C10 | `§23.b5` | Employee cannot obtain Owner intelligence through conversation prompts. | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§2.b3` | licences and renewals; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§2.b5` | employee matters; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§2.b6` | delivery follow-up; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§4.b7` | related customer/supplier/employee/document/order/credit/compliance object; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§4.b12` | notification delivery state. | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§5.b2` | Next Monday remind me to check the FSSAI renewal. | section touched by `11-§5-3` |
| C11 | `§8.b2` | Compliance Shield; | section touched by `11-§8-2`, `11-§8-6`, `11-§8-7` |
| C11 | `§8.b6` | Staff/HR actions; | section touched by `11-§8-2`, `11-§8-6`, `11-§8-7` |
| C11 | `§8.b7` | Order & Delivery follow-up/exceptions; | section touched by `11-§8-2`, `11-§8-6`, `11-§8-7` |
| C11 | `§9.b2` | supplier order was placed; | section touched by `11-§9-3`, `11-§9-4`, `11-§9-6` |
| C11 | `§9.b3` | employee action occurred; | section touched by `11-§9-3`, `11-§9-4`, `11-§9-6` |
| C11 | `§9.b4` | licence was renewed; | section touched by `11-§9-3`, `11-§9-4`, `11-§9-6` |
| C11 | `§9.b6` | delivery completed. | section touched by `11-§9-3`, `11-§9-4`, `11-§9-6` |
| C11 | `§10.b4` | Open renewal document. | section touched by `11-§10-5` |
| C11 | `§13.Employee.p1` | May use permitted self/operational reminders. Employees cannot create Owner-leve | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§14.p3` | Notification delivery failure is separate from reminder/business state. | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§17.b4` | quiet/reasonable delivery behavior where appropriate; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§19.b1` | Private/personal reminders must not leak to staff. | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C11 | `§21.b5` | blind supplier orders; | owner SB-P-1.15; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C12 | `§2.b4` | speaking with staff/suppliers; | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C12 | `§4.b4` | stock/supplier/order instructions where the user's product/role permits; | row `12-§4-4` |
| C12 | `§7.b7` | order/reorder instruction; | row `12-§7-7` |
| C12 | `§14.Other-roles.p1` | Customer/supplier/delivery voice interactions are bounded by the relevant workfl | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C12 | `§20.b6` | employee access to Owner intelligence through spoken prompts. | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C12 | `§21.b8` | Employee voice prompt cannot access Owner intelligence. | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§8.p6` |  This employee is stealing. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§9.b5` | staff action on Owner instruction. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§10.p1` | Manager should support end-of-day/shift closing clarity using available evidence | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§11.p3` | Employees must not receive Owner-level closing intelligence merely because they  | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§13.Employee-counter-staff.p1` | May operate permitted workflows and see only role-appropriate information. A sta | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§15.b2` | suspend an employee; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§16.b5` | out-of-order event; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§18.b3` | Staff data is purpose-limited. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C13 | `§21.b9` | Employee cannot access Owner-only risk/profit intelligence. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C14 | `§2.b3` | Owner/staff forget prior credit; | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C14 | `§6.b5` | order/delivery workflow where credit is permitted. | section touched by `14-§6-5` |
| C14 | `§12.p2` | Staff must not receive Owner-wide customer-credit intelligence by default. | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C14 | `§13.p1` | Where Order & Delivery uses credit/COD/business payment states: | section touched by `14-§13-1`, `14-§13-2`, `14-§13-3` |
| C14 | `§13.b2` | one order event must not create duplicate credit facts; | section touched by `14-§13-1`, `14-§13-2`, `14-§13-3` |
| C14 | `§13.b3` | delivery completion and payment/credit state remain distinct facts where necessa | section touched by `14-§13-1`, `14-§13-2`, `14-§13-3` |
| C14 | `§18.b7` | reminder delivery failure; | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C14 | `§19.b2` | Staff views are permission-scoped. | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C14 | `§22.b7` | Employee can record credit only when permitted and cannot see Owner-wide analyti | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C15 | `§2.b5` | cash/COD events; | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C15 | `§5.b6` | COD/order-delivery evidence where the workflow supports it; | section touched by `15-§5-6` |
| C15 | `§7.b7` | linked order/credit context; | section touched by `15-§7-7` |
| C15 | `§15.p1` | COD collection and delivery completion are related but distinct facts. | section touched by `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4` |
| C15 | `§15.p2` | Where COD evidence is recorded: | section touched by `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4` |
| C15 | `§15.b3` | delivery proof; | section touched by `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4` |
| C15 | `§20.b4` | allow unrelated Ledger, inventory, orders and other safe operations to continue. | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C15 | `§22.b4` | Limit staff/platform exposure. | owner SB-P-1.16; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C15 | `§23.b7` | Order & Delivery financial linkage; | section touched by `15-§23-7` |
| C15 | `§25.b7` | COD evidence does not duplicate Ledger revenue. | section touched by `15-§25-7` |
| C17 | `§2.b4` | checking staff/attendance; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§2.b6` | monitoring orders/delivery; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§4.Manager-oriented-surface.b7` | staff/HR/order-delivery views when add-ons are enabled. | row `17-§4-15` |
| C17 | `§7.b7` | purchase/order follow-up. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§9.p1` | When Staff/HR add-on is enabled, permitted workspace views may include: | section touched by `17-§9-1`, `17-§9-2`, `17-§9-3`, `17-§9-4` |
| C17 | `§9.b1` | staff roster; | row `17-§9-1` |
| C17 | `§9.b2` | attendance; | row `17-§9-2` |
| C17 | `§9.b3` | leave requests; | row `17-§9-3` |
| C17 | `§9.b5` | payroll support/export; | row `17-§9-5` |
| C17 | `§9.p2` | Employees may have self-service surfaces only for information/actions explicitly | row `17-§9-7` |
| C17 | `§10.b1` | orders by state; | row `17-§10-1` |
| C17 | `§10.b4` | delivery exceptions; | row `17-§10-4` |
| C17 | `§10.b5` | COD/payment issues; | row `17-§10-5` |
| C17 | `§10.b6` | delivery history/proof. | row `17-§10-6` |
| C17 | `§10.p2` | The dashboard does not create a marketplace and must preserve delivery/privacy b | row `17-§10-7` |
| C17 | `§13.Employee.p1` | May receive job-specific tools and own attendance/self-service where explicitly  | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§18.b2` | No staff access to Owner intelligence by default. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§18.b5` | Dashboard activity/analytics must not become hidden employee surveillance. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§21.b4` | employee visibility into Owner-wide financial intelligence by convenience; | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§22.b3` | Employee is limited to permitted operational/self-service surfaces. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C17 | `§22.b5` | Stock/supplier/POS/order modules consume shared feature services. | owner SB-P-1.17; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C18 | `§4.b3` | Compliance Shield — ₹99/month. | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C18 | `§4.p2` | Exact current prices for Voice Plus, Staff/HR, Smart Stock Assistant and Smart O | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C18 | `§17.b3` | upcoming renewal where current billing model uses it; | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C18 | `§18.b5` | cancellation race with renewal; | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C18 | `§25.b2` | Exact current prices for Voice Plus, Staff/HR, Smart Stock Assistant and Smart O | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C19 | `§5.b8` | WhatsApp delivery health; | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C20 | `§5.b3` | location/locality; | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C20 | `§5.b8` | relevant product needs such as stock/staff/order-delivery; | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C20 | `§8.b3` | locality/location information; | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C20 | `§16.p2` | If staff/manager setup occurs during or after onboarding: | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C20 | `§16.b2` | do not grant Manager/Employee Owner intelligence by default; | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C20 | `§19.b3` | Do not collect sensitive employee KYC as a default onboarding requirement while  | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C20 | `§23.b11` | Staff setup never grants Owner intelligence by default. | owner SB-P-1.19; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§2.p1` | Smart Business serves Owners, Managers, Employees, Suppliers, Customers and Deli | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§2.b1` | staff could see Owner profit/intelligence; | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§3.b3` | Employees are operational/self-service users where permitted. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§3.b4` | Suppliers/customers/delivery staff are purpose-limited participants. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§4.Owner.p2` | Can delegate bounded capabilities to Managers/Employees. | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Manager.b4` | all HR/customer data; | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Employee.b3` | operate stock/order tasks; | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Employee.b4` | view own attendance; | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Employee.b5` | request attendance correction/leave; | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Employee.b6` | perform assigned delivery/order work. | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Employee.p3` | Employees do not receive Owner financial intelligence by default. | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Customer.p1` | Purpose-limited participant in customer-credit/order/delivery workflows. No merc | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§4.Delivery-Staff.p1` | Purpose-limited assigned-delivery user. No unrelated customers/orders or Owner i | section touched by `21-§4-3`, `21-§4-5`, `21-§4-6` |
| C21 | `§8.b1` | Employee asking What is our profit? → deny/redirect according to policy. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§8.b2` | Employee asking Show my attendance → allow if permitted. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§8.b4` | Customer asking for another customer's order → deny. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§9.p3` | Employees, suppliers, customers and delivery staff do not receive Owner-wide Ask | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§10.p1` | Historical write-only employee concepts are superseded where too restrictive. | section touched by `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4` |
| C21 | `§10.p2` | Employees may receive useful self-service when explicitly permitted, including: | section touched by `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4` |
| C21 | `§10.b1` | own attendance; | section touched by `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4` |
| C21 | `§10.b3` | own leave/request status; | section touched by `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4` |
| C21 | `§10.b4` | assigned tasks/orders/deliveries; | section touched by `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4` |
| C21 | `§10.p3` | Self-service must not expose unrelated staff or Owner intelligence. | section touched by `21-§10-1`, `21-§10-2`, `21-§10-3`, `21-§10-4` |
| C21 | `§11.p1` | An Employee may add transactions, receipts/documents, stock/order events or othe | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§13.b1` | Supplier sees order/request details relevant to that supplier. | section touched by `21-§13-2`, `21-§13-3` |
| C21 | `§13.b2` | Customer sees their own order/delivery/credit communication. | section touched by `21-§13-2`, `21-§13-3` |
| C21 | `§13.b3` | Delivery Staff sees the assigned customer's delivery details. | section touched by `21-§13-2`, `21-§13-3` |
| C21 | `§21.b1` | No continuous employee surveillance through permissions tooling. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§21.b2` | No hidden staff scoring/accusation. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§23.b3` | Employee = permanent useless write-only account; | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§24.b4` | Employee can add an approved transaction but cannot read Owner analytics. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§24.b5` | Employee can see own attendance if permitted. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§24.b6` | Employee cannot gain Ask CFO via natural-language prompt. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§24.b7` | Supplier/customer/delivery user sees only own bounded workflow data. | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§25.b1` | broad Manager/Employee inheritance of Owner intelligence; | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§25.b3` | employee permanently write-only with no useful approved self-service; | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C21 | `§26.p2` | Hydration result: all cross-feature Owner/Manager/Employee/external-role authori | owner SB-P-1.12; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§1.b9` | location; | owner SB-P-1.12 (shared); the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§4.b6` | orders/deliveries; | section touched by `22-§4-3` |
| C22 | `§4.b7` | attendance/HR; | section touched by `22-§4-3` |
| C22 | `§4.b9` | compliance records; | section touched by `22-§4-3` |
| C22 | `§5.b4` | Employee; | section touched by `22-§5-4`, `22-§5-5`, `22-§5-7` |
| C22 | `§5.b7` | delivery staff; | section touched by `22-§5-4`, `22-§5-5`, `22-§5-7` |
| C22 | `§11.b2` | compliance; | section touched by `22-§11-2`, `22-§11-5`, `22-§11-6` |
| C22 | `§11.b5` | HR; | section touched by `22-§11-2`, `22-§11-5`, `22-§11-6` |
| C22 | `§11.b6` | delivery; | section touched by `22-§11-2`, `22-§11-5`, `22-§11-6` |
| C22 | `§12.b5` | delivery/retry state; | section touched by `22-§12-1` |
| C22 | `§12.p3` | Notification delivery is separate from business-event completion. | section touched by `22-§12-1` |
| C22 | `§15.b6` | order creation/assignment; | section touched by `22-§15` |
| C22 | `§16.p1` | Where features need location, use a shared purpose-limited primitive rather than | row `22-§16-1` |
| C22 | `§16.b1` | point-in-time attendance verification; | row `22-§16-8` |
| C22 | `§16.b2` | customer delivery destination; | row `22-§16-9` |
| C22 | `§16.b3` | point-in-time delivery proof/context; | row `22-§16-10` |
| C22 | `§16.p3` | Default continuous employee surveillance is rejected. | row `22-§16-2` |
| C22 | `§16.b5` | why location is needed; | row `22-§16-3` |
| C22 | `§23.b5` | Staff data is role/purpose limited. | owner SB-P-1.12 (shared); the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§25.b9` | orders/delivery; | owner SB-P-1.12 (shared); the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§25.b10` | HR; | owner SB-P-1.12 (shared); the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§26.p4` | WhatsApp owns transport/provider concerns such as webhooks, templates, media tra | owner SB-P-1.12 (shared); the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§28.b7` | continuous employee GPS foundation; | owner SB-P-1.12 (shared); the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§29.b9` | Attendance/delivery location uses purpose-limited shared primitive. | row `22-§29-9` |
| C22 | `§30.b5` | continuous employee surveillance as shared location pattern; | owner SB-P-1.12 (shared); the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C22 | `§33.33-1-Positive-personal-i.p2` | Deletion of the personal identity is separate from deletion or retention of busi | section touched by `22-§33-1` |
| C22 | `§33.33-5-History-and-attribu.b5` | cascade-delete another person's business, employee history or other independentl | section touched by `22-§33-1` |
| C23 | `§3.b7` | Failed delivery must not be confused with failed business action. | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§4.Employee.p1` | May use only permission-scoped operational flows such as approved transaction en | section touched by `23-§4-3`, `23-§4-5` |
| C23 | `§4.Customer-Delivery-Staff.p1` | May participate only in approved purpose-limited workflows such as order, delive | section touched by `23-§4-3`, `23-§4-5` |
| C23 | `§5.b6` | location where an approved workflow requires it; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§5.b7` | delivery/status events from Meta where applicable. | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§6.b10` | response/delivery coordination; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§7.b3` | Employee; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§7.b6` | delivery staff; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§10.b5` | initiating reorder/order workflows; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§12.b3` | rosters; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§12.b4` | order lists; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§12.b5` | compliance documents; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§16.b4` | order/delivery updates; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§16.b7` | compliance alerts; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§17.b5` | preserve the underlying business event even if delivery fails. | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§19.p1` | Message delivery status is communication metadata. | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§19.b1` | successful WhatsApp delivery does not prove a supplier accepted an order; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§19.b2` | failed WhatsApp delivery does not necessarily mean a Ledger write failed; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§19.b3` | a customer not replying does not automatically invalidate otherwise sufficient d | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§20.b3` | orders; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§24.b12` | message delivery failure; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§25.b11` | delivery/retry/failure state. | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§28.b8` | delivery/retry status; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§29.b8` | treating message delivery as business completion; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§30.b2` | correct Owner/Manager/Employee/external-party identity routing; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C23 | `§30.b10` | outbound delivery failure does not corrupt business state; | owner SB-P-1.20; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C24 | `§2.b12` | HR assistance; | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C24 | `§2.b13` | order/delivery conversation; | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C24 | `§6.b7` | order/delivery action; | section touched by `24-§6-2` |
| C24 | `§6.b8` | attendance/HR request; | section touched by `24-§6-2` |
| C24 | `§6.b10` | compliance/support request; | section touched by `24-§6-2` |
| C24 | `§9.b7` | order/delivery state; | section touched by `24-§9-2` |
| C24 | `§9.b8` | staff/attendance context; | section touched by `24-§9-2` |
| C24 | `§9.b11` | compliance records; | section touched by `24-§9-2` |
| C24 | `§10.b7` | Employee prompt injection must not reveal Owner profit. | section touched by `24-§10-10` |
| C24 | `§18.Roster-Document-HR-Atten.b1` | roster photo/file enters UDI; | row `24-§18-4` |
| C24 | `§18.Roster-Document-HR-Atten.b2` | AI extracts draft roster; | row `24-§18-4` |
| C24 | `§18.Roster-Document-HR-Atten.b4` | HR domain stores approved schedule; | row `24-§18-4` |
| C24 | `§18.Roster-Document-HR-Atten.b5` | attendance compares against approved schedule and context; | row `24-§18-4` |
| C24 | `§18.Roster-Document-HR-Atten.b6` | payroll support uses validated attendance, never AI accusation. | row `24-§18-4` |
| C24 | `§21.b2` | supplier orders; | section touched by `24-§21-6` |
| C24 | `§21.b5` | roster/attendance corrections; | row `24-§21-6` |
| C24 | `§25.b2` | no unnecessary Owner financial data in staff interactions; | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C24 | `§25.b4` | careful handling of sensitive HR/customer/payment data; | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C24 | `§31.b4` | Employee cannot prompt the model into Owner intelligence; | owner SB-P-1.13; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C25 | `§2.b5` | stock/roster photos; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C25 | `§6.b7` | Staff/HR uploads; | section touched by `25-§6-1` |
| C25 | `§6.b9` | Smart Order & Delivery proof; | section touched by `25-§6-1` |
| C25 | `§6.b10` | Compliance documents; | section touched by `25-§6-1` |
| C25 | `§7.b8` | delivery proof; | section touched by `25-§7-1` |
| C25 | `§7.b9` | compliance evidence; | section touched by `25-§7-1` |
| C25 | `§10.b7` | which current object location/version is authoritative; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C25 | `§17.b4` | legal/compliance retention needs may differ by object/domain; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C25 | `§19.b3` | employee privacy; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C25 | `§19.b6` | compliance evidence; | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |
| C25 | `§20.b13` | retrieval permission change between request and delivery. | owner SB-P-1.14; the unit governs the owner's feature, and this mission consumes it only through the Dependency codes |

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**
