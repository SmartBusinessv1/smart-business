# SMART BUSINESS MISSION CONTROL — MC-114 India Legal / Privacy / Retention Deep Research Report

**Mission:** `SB-P-1.12 R-2 — India Legal / Privacy / Retention Deep Research`  
**Research date:** 28 September 2026  
**Jurisdictional focus:** India, with Kerala-specific merchant/employment context where identifiable  
**Research authority:** Founder Decision Record 06 + MC-113 / `communication/live/instruction1.14.md`, as declared canonical by Mission Control  
**Status:** **PROVISIONAL PHASE ONE COMPLIANCE RESEARCH — NOT PROFESSIONAL LEGAL ADVICE**

Founder Decision Record 06 authorises Research & Intelligence to substitute authoritative Indian-law research for the deferred professional-validation gate through SB-P-1.20, while expressly preserving the distinction between provisional research evidence and professionally validated legal requirements. fileciteturn2file0 MC-113 requires this report to answer LV-1 through LV-12, preserve uncertainty, distinguish current from future law, and avoid converting research conclusions into Product Truth, schema, implementation or legal-policy authority. fileciteturn1file0

## Executive conclusion and current-law status

### Executive research conclusion

**Overall finding: MC-109's working architecture is substantially supportable as a provisional Phase One compliance architecture, but several components require conditions and later professional validation.** In particular, the research strongly supports separating **active personal identity** from **retained statutory/business records**, using **record-class-specific retention periods**, avoiding any assumption that Smart Business's 90-day operational lifecycle is a statutory retention period, and preventing surviving historical records from conferring current authority. This is consistent with MC-109's existing working distinction between identity lifecycle and record lifecycle. fileciteturn4file0

The strongest current-law conclusions are:

1. **There is no defensible universal retention period for all Smart Business data.** GST, income-tax, cybersecurity, intermediary and entity-law requirements use different periods, triggers and applicability tests. GST alone uses 72 months from the annual-return due date with longer preservation for specified proceedings; current Income-tax Rule 46 uses seven tax years for persons to whom the rule applies; CERT-In requires covered entities to preserve ICT logs for a rolling 180 days. citeturn23search1turn26search0turn19search0

2. **A merchant's statutory duty to preserve its GST, tax or company records does not automatically become Team LIPS's statutory duty merely because Smart Business hosts the records.** The merchant/taxpayer/company remains the statutory duty holder under those regimes. Team LIPS can nevertheless have separate obligations arising from its own tax/accounting position, cybersecurity status, contract, intermediary classification, and—when the substantive DPDP regime commences—its role as Data Fiduciary and/or processor. citeturn23search1turn26search1turn25search5

3. **Current DPDP law must be described carefully.** As at 28 September 2026, the principal Data Fiduciary duties, erasure rights, consent regime, security duties and most Data Principal rights under the Digital Personal Data Protection Act, 2023 are **not yet operative**. Gazette Notification G.S.R. 843(E) staged commencement: definitions/Board and specified miscellaneous provisions came first; section 6(9) and part of section 27 follow one year after publication; most substantive provisions in sections 3–17 and the corresponding enforcement machinery follow eighteen months after publication. The notified DPDP Rules use a matching staged model. citeturn15search0turn15search23turn32search6

4. **For conservative engineering/compliance planning, Smart Business should be ready before the earlier plausible anniversary dates of 13 November 2026 and 13 May 2027.** The Gazette instrument is dated 13 November 2025, while MeitY's publication metadata/electronic publication record is associated with 14 November 2025. Because the notification measures future commencement from the “date of publication”, the one-day metadata discrepancy should be professionally confirmed rather than silently normalised. It does not affect the current 28 September 2026 conclusion: the one-year and eighteen-month operative blocks are still future as of this report. citeturn32search6turn15search10

5. **Current cybersecurity retention is already material.** CERT-In's 28 April 2022 Directions impose a rolling 180-day ICT-log obligation, with Indian-jurisdiction storage, on the covered categories stated in the Direction. The separate five-year post-cancellation subscriber-information rule is narrower: it applies to data centres, VPS providers, cloud-service providers and VPN service providers; it should not be applied to Smart Business merely because Smart Business consumes cloud infrastructure. citeturn19search0turn22search13

6. **A historical actor identifier can be compatible with identity deletion, but only conditionally.** A pseudonymous identifier that can still identify or be linked back to a person remains personal data in substance; it therefore needs its own lawful/necessary retention rationale. The research supports preserving the minimum attribution necessary for a surviving statutory, audit, claims or security record while deleting active authentication/profile authority. It does **not** support indefinite retention of a full user profile simply to make old audit entries easier to read. The exact identifier design and mapping duration require professional validation against the relevant record class. citeturn15search23turn32search6

7. **A deletion tombstone is not identified in the reviewed Indian primary materials as a generally mandatory statutory record.** A minimal deletion-proof record is nevertheless supportable as a provisional accountability/control mechanism if it contains only what is necessary to prove disposition and honour surviving obligations, has an explicit retention basis and expiry rule, and does not become a shadow copy of the deleted identity. The exact lawful basis and retention duration remain professional-validation items. Future DPDP Rule 8 further reinforces the need to distinguish erasure from specific required retention rather than retaining everything. citeturn10view2

8. **Backups cannot be treated as a legal loophole around deletion.** GST expressly requires proper electronic backup of covered records; current Income-tax Rule 46 requires applicable electronic books/documents to remain accessible in India and backups to be kept on servers physically located in India and updated daily. Conversely, the future DPDP erasure framework requires deletion when the relevant purpose/basis ends, subject to lawful retention. The legislation reviewed does not establish a general “immutable backups may keep deleted personal data for X days” safe harbour. A finite backup cycle plus restoration suppression/replay of deletions is therefore a sensible architecture inference, not a proven statutory exemption. citeturn23search0turn26search0turn10view2

### Current-law effective-date table

| Instrument / provision | Status on 28 Sep 2026 | Effective/commencement position | Smart Business relevance |
|---|---|---|---|
| CGST Act 2017, ss.35–36 and CGST Rules on accounts/electronic records | **OPERATIVE** | GST regime operative; s.36 retention currently applies to covered registered persons | Merchant statutory books, invoices, stock/accounts; 72-month retention plus proceeding extension; electronic audit trail and backup requirements. citeturn23search0turn23search1 |
| Income-tax Act 2025 + Income-tax Rules 2026, s.62 / r.46 | **OPERATIVE** | New Act applies from **1 Apr 2026**; prior tax years remain governed by saved old-law provisions | Current qualifying businesses/professions: books/documents; Rule 46 retention of seven tax years; electronic backup/local-access requirements. citeturn27search0turn27search2turn26search0turn26search1 |
| Companies Act 2013, s.128 | **OPERATIVE where merchant/entity is a company** | Existing Companies Act regime | Company books/vouchers have separate statutory preservation requirements; does not apply to every Kerala merchant merely because it operates a shop. citeturn25search5 |
| CERT-In Directions under IT Act s.70B(6) | **OPERATIVE** | Direction dated 28 Apr 2022; requirements have long since passed their original commencement/extension dates | ICT-system logs: rolling 180 days in India for covered categories; incident response. citeturn19search0turn22search13 |
| CERT-In subscriber-information rule for data-centre/VPS/cloud/VPN providers | **OPERATIVE if Team LIPS itself falls in a listed provider class** | Direction dated 28 Apr 2022 | Five-year post-cancellation subscriber retention is **not a generic SaaS-account rule**. Classification must be validated. citeturn19search0turn22search13 |
| IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021, as applicable | **OPERATIVE if Smart Business is an “intermediary” for the relevant activity** | Current MeitY rules remain published/operative subject to amendments | Registration information can attract 180-day post-cancellation retention under intermediary due-diligence rules; classification cannot be assumed. citeturn19search5turn32search2 |
| DPDP Act: s.2, ss.18–26, s.35, ss.38–43, s.44(1),(3), etc. first tranche | **OPERATIVE** | First tranche on Gazette publication in Nov 2025 | Definitions and Board/governance machinery; does not yet impose the main Data Fiduciary lifecycle duties. citeturn32search6turn15search23 |
| DPDP Act s.6(9), s.27(1)(d) | **FUTURE on research date** | One year after Gazette publication; conservative planning date **13 Nov 2026** | Consent Manager/related Board machinery; professional confirmation of precise anniversary date recommended. citeturn32search6 |
| DPDP Act ss.3–17 and main compliance/enforcement tranche | **FUTURE on research date** | Eighteen months after Gazette publication; conservative planning date **13 May 2027** | Main consent, purpose, Data Fiduciary duties, security, erasure, rights, claims/exemption framework. citeturn32search6turn32search0 |
| DPDP Rules 2025, rr.1,2,17–21 | **OPERATIVE** | On publication | Mainly definitions/Board administration. citeturn10view0 |
| DPDP Rule 4 | **FUTURE** | One year after publication | Consent Manager regime. citeturn10view0 |
| DPDP Rules rr.3,5–16,22–23 including rr.6 and 8 | **FUTURE** | Eighteen months after publication | Security safeguards, erasure and specific processing/log-retention architecture. citeturn10view0turn10view1turn10view2 |
| IT Act s.43A / 2011 SPDI regime | **Preliminary finding: remains relevant until DPDP s.44(2) commencement, where applicable** | DPDP s.44(2), which effects the relevant IT Act omission, is in the eighteen-month tranche | Transitional privacy/security baseline should not be treated as already repealed; exact applicability to Team LIPS/legal form requires professional confirmation. citeturn15search9turn32search12 |
| Kerala Shops & Commercial Establishments framework / labour-law framework | **OPERATIVE framework; precise retention treatment varies** | Kerala Labour Commissionerate continues to administer shop registration; central Labour Codes are separately published by Ministry | Employment/attendance/payroll retention cannot safely be given one universal period from the evidence obtained; requires merchant/employer class and current Kerala-rule validation. citeturn28search0turn28search15turn29search0 |

## Legal findings by validation question

**LV-1 — Merchant statutory business-record retention**

The answer is **record-class- and merchant-class-specific**.

For a GST-registered merchant, CGST Act section 36 requires records required by section 35 to be retained until **72 months from the due date for furnishing the annual return for the relevant year**. Where the registered person is party to an appeal, revision or other proceeding, or under investigation for a Chapter XIX offence, records relating to the subject matter must continue until **one year after final disposal** or the ordinary section 36 period, whichever is later. citeturn23search1

The CGST Rules materially strengthen the audit/history requirement. Covered electronic books are permitted, but where records are electronic, a **log of every entry edited or deleted** must be maintained. Proper electronic backup must also be kept so information can be restored after accidental/natural destruction, and the registered person must be able to produce relevant records and audit-trail/interlinkage information on demand. citeturn23search0

For income tax, the current regime changed on **1 April 2026**. Income-tax Act 2025 section 62 identifies the businesses/professions required to maintain books according to specified thresholds and conditions. Rule 46 of the Income-tax Rules 2026 requires the books/documents covered by the rule to be preserved for **seven tax years from the end of the relevant tax year**. It also provides specific electronic-access and backup obligations, and preserves relevant older books longer where an assessment under the saved 1961 Act has been reopened until that reassessment is complete. citeturn26search1turn26search0turn27search2

Where the merchant is incorporated as a **company**, Companies Act section 128 creates a separate accounting-books/voucher preservation regime, commonly expressed as at least the preceding eight financial years, subject to longer preservation in relevant investigation circumstances. That corporate-law rule cannot be projected onto sole proprietors, partnerships or every MSME. Merchant legal form therefore has to be captured before a retention schedule is selected. citeturn25search5

For employment/payroll/attendance material, the research did **not** establish one authoritative retention period applicable to all Kerala target merchants. Kerala's Labour Commissionerate confirms that the Shops and Commercial Establishments Act framework applies broadly to shops/commercial establishments outside the stated factory exclusion, while the Ministry of Labour also publishes the Labour Code framework. Exact current register/form/preservation obligations depend on establishment and employment-law applicability. The correct Phase One position is therefore **no universal employment-data retention number without further validation**. citeturn28search0turn28search3turn28search15

**LV-2 — Team LIPS versus merchant responsibility**

For GST, the statutory section 35/36 duty is imposed on the **registered person**. For income tax, section 62/Rule 46 duties are imposed on the relevant **taxpayer/person carrying on business or profession**. Company-record duties attach to the **company**. Hosting those records in Smart Business does not, by itself, transfer those statutory identities to Team LIPS. citeturn23search1turn26search1turn25search5

Accordingly, a contract can allocate operational responsibilities—availability, export, backup, post-termination access, deletion requests, subprocessor handling—but it should not tell merchants that Team LIPS has assumed and extinguished the merchant's statutory preservation obligation. That would confuse contractual performance with statutory duty.

Team LIPS can, however, have **independent duties**. Examples include its own tax/accounting records for Smart Business subscriptions and refunds; CERT-In requirements applicable to its own ICT estate; intermediary obligations if the service/activity falls within that legal classification; and future DPDP obligations for personal-data processing where Team LIPS determines the relevant purpose/means or acts as a processor under another Data Fiduciary's instructions. citeturn19search0turn32search6

A merchant account/business can therefore conceptually cease to be an **active application account** while defined records remain in a restricted statutory archive. Whether the merchant must retain continued self-service access or may instead receive an export/controlled retrieval route depends on the underlying law, contract and practical ability of the merchant to fulfil its own statutory duty. No reviewed general Indian rule establishes that every archived SaaS record must remain in a normal interactive account.

**LV-3 — Personal-data erasure versus lawful retention**

The principal DPDP erasure architecture is a **future-effective requirement** on the research date. The future substantive regime separates the continuation of processing from mere convenience: the Act's main Data Fiduciary obligations and Data Principal rights are in the eighteen-month commencement block. Rule 8 is in the corresponding future-effective Rules block. citeturn32search6turn10view0turn10view2

That future framework materially supports MC-109's distinction: the end of an active identity/account does not require destroying a tax record that another law requires to exist; conversely, the existence of that tax record does not justify retaining an entire active profile. The retained dataset should be narrowed to the fields necessary for the surviving legal/audit/security/claims purpose.

A crucial distinction is **pseudonymisation versus anonymisation**. Under the DPDP definition of personal data, data remains personal where an individual is identifiable by or in relation to it. A pseudonymous UUID, token or hash therefore remains personal data when Team LIPS can link it to the person. Only genuinely irreversible de-identification to a point where the individual is no longer identifiable can be treated as anonymised in the relevant sense. citeturn15search23

On current law, Team LIPS should also not assume the pre-DPDP privacy/security framework has disappeared. Because the DPDP provision that effects the relevant IT Act section 43A change is itself in the future eighteen-month tranche, the IT Act/SPDI transition requires continued attention where that older regime applies. citeturn15search9turn32search12

**LV-4 — DPDP Act / Rules timing and applicability**

As of **28 September 2026**, the central finding is that **most product-facing DPDP duties are not yet operative**.

G.S.R. 843(E), dated 13 November 2025, brought the definitions, Data Protection Board provisions and specified miscellaneous amendments into force on publication; schedules section 6(9) and section 27(1)(d) one year later; and schedules the main provisions in sections 3–17, the remaining Board/enforcement provisions and section 44(2) eighteen months later. citeturn32search6

The DPDP Rules mirror that pattern. Rules 1, 2 and 17–21 commenced first; Rule 4 waits one year; Rules 3, 5–16, 22 and 23—including the principal notice, security and erasure rules—wait eighteen months. citeturn10view0

Future Rule 6 establishes security-safeguard requirements including logging and backup-related controls, while future Rule 8 contains erasure/retention mechanics. Rule 8 also includes a **one-year minimum for personal data, associated traffic data and processing logs for the specific purposes set out in its Seventh Schedule**, followed by erasure unless another legal basis requires longer retention. It should **not** be converted into a universal “all Smart Business records = one year” rule. citeturn10view1turn10view2

The Third Schedule's prescribed inactivity period for certain very large classes—such as an e-commerce entity meeting the specified registered-user threshold—likewise should not be assumed to govern Smart Business without the threshold/entity classification being met. citeturn10view3

**LV-5 — Security / ICT log retention**

CERT-In's Directions under section 70B(6) of the Information Technology Act are already operative. The official CERT-In page identifies the 28 April 2022 Directions and related FAQ/timeline-extension material. The Directions require the listed categories—service providers, intermediaries, data centres, body corporates and Government organisations—to maintain ICT-system logs securely for a **rolling 180 days within Indian jurisdiction** and make them available to CERT-In in the prescribed circumstances. citeturn19search0turn22search13

For Smart Business this means that personal-identity deletion must not blindly erase security logs that are still within a legally required CERT-In retention window. The correct pattern is a **non-authorising security record** with controlled access, purpose restriction and expiry.

The five-year subscriber-information obligation in the same Directions is narrower. It applies to **data centres, VPS providers, cloud-service providers and VPN-service providers** and runs after cancellation/withdrawal. Team LIPS consuming Supabase, Cloudflare or another cloud service does not by that fact alone become a “cloud service provider” for this clause. Whether its own SaaS offering falls within any listed provider category requires classification validation. citeturn19search0turn22search4

**LV-6 — Intermediary / registration-information retention**

The Information Technology Act's “intermediary” concept is functional: it concerns a person who, on behalf of another, receives, stores or transmits electronic records or provides a service with respect to them. The 2021 Intermediary Rules then impose due diligence on entities that meet the classification. MeitY continues to publish the consolidated/updated Rules. citeturn19search5

The relevant due-diligence rule preserves information collected from a user for registration for **180 days after cancellation or withdrawal of registration**. citeturn32search2

**Research conclusion:** do **not** automatically apply that 180-day account-registration period to every Smart Business user. A first-party SaaS application processing merchant business data can perform activities that differ from classic intermediary hosting, and classification may vary by function. The 180-day rule should therefore be implemented only after professional confirmation that Smart Business/Team LIPS is acting as an intermediary for the relevant information/service.

**LV-7 — Historical audit attribution after identity deletion**

Indian tax/accounting rules support preserving the integrity and chronology of surviving records. GST is especially relevant because electronic records must preserve edit/delete logs and audit-trail information. That does **not** mean the law requires the deleted person's complete authentication profile, phone number, email address or current authority to survive. citeturn23search0

A durable historical actor key is therefore legally plausible where attribution remains necessary to interpret a surviving record. The safest provisional design principle is:

**historical attribution ≠ active identity ≠ current authority.**

A non-authorising pseudonymous actor ID may survive with the relevant record. Where a separate mapping can re-identify the person, that mapping remains personal data and needs an independently documented retention purpose and expiry. Once the mapping is no longer necessary, irreversible anonymisation is stronger than indefinite pseudonymisation. The research found no Indian law requiring Team LIPS to retain a reusable active account solely so an old audit entry can name its actor. citeturn15search23turn23search0

**LV-8 — Deletion proof / tombstone**

No reviewed general Indian statute expressly commands Smart Business to create a particular “deletion tombstone” schema.

Nevertheless, a minimal deletion record is **research-supportable with conditions** because deletion itself may need to be demonstrable, future DPDP processing/log rules contemplate retention of specified processing evidence, and a controlled tombstone can prevent a deleted identity from being recreated from stale backups. citeturn10view1turn10view2

The research supports, provisionally, fields such as an opaque/non-reusable subject reference; deletion request/reference ID; eligibility and execution timestamps; broad categories erased/retained; retention basis and expiry; legal-hold status; processor/subprocessor completion status; backup-expiry status; and execution/system version **only where each field has an accountability purpose**.

It does **not** support turning the tombstone into a shadow user table containing name, phone, email, address, authentication credentials, profile metadata or all previously held identifiers. A linkable tombstone is still personal data.

**LV-9 — Backups and restoration**

Two current tax regimes affirm that backups can be legally necessary. GST's electronic-record rules require proper backup so records can be restored within a reasonable period after accidental/natural destruction. Current Income-tax Rule 46 requires relevant electronically maintained books/documents to remain accessible in India and requires their backup to be kept on servers physically located in India and updated daily. citeturn23search0turn26search0

Future DPDP law creates the other side of the problem: information whose retention basis expires must not silently become permanent merely because it happens to live in a backup. Rule 8's future erasure structure and Rule 6's future security/backup controls need to operate together. citeturn10view1turn10view2

The reviewed law does **not** provide a general numerical safe harbour such as “deleted data may remain in immutable backups for 30/60/90 days”. Consequently:

- a bounded backup lifecycle is defensible as an engineering approach;
- restored backups should replay deletion/tombstone state before normal access resumes;
- backup copies should not be available for normal product use;
- expired retained data should not re-enter production after restoration;
- the actual maximum backup-survival period remains a policy/legal-validation item.

Those are **research-backed architecture inferences**, not statutory wording.

**LV-10 — Disputes, claims, refunds, chargebacks and legal holds**

An unresolved dispute can justify preserving the **case record and evidence genuinely needed for it**; it does not automatically require maintaining a fully active Smart Business identity.

GST supplies a clear statutory example: when covered records are the subject matter of an appeal, revision, proceeding or investigation, section 36 extends their preservation through the specified post-disposal period. citeturn23search1

Likewise, current Income-tax Rule 46 contains a preservation extension for books/documents relevant to specified reopened earlier assessments until the reassessment is completed. citeturn26search0

For ordinary refunds, chargebacks, customer complaints or contractual disputes, the reviewed sources do **not** establish a universal statutory period that would justify retaining every identity attribute. The correct provisional distinction is:

**retain the dispute/payment/case evidence that remains necessary; do not preserve active authentication or unrelated profile information merely because a case exists.**

A legal hold should be event-specific, scoped, recorded, reviewed and released when the underlying proceeding/claim no longer requires it. The exact legal basis and expiry for civil claims, chargeback schemes and provider-specific disputes requires professional/provider validation rather than a blanket Smart Business period.

**LV-11 — Employment / payroll / attendance data**

Kerala's Labour Commissionerate states that all shops and commercial establishments, subject to the stated factory exclusion, fall under the Kerala Shops and Commercial Establishments registration framework. It also lists the central Labour Codes among administered legal materials. citeturn28search0turn28search3

The evidence retrieved in this mission did **not** establish one current retention period that can safely be applied across attendance, wage, payroll, EPF/ESI and employment records for every Smart Business target merchant. Establishment size, employment type, legal form, social-security coverage and Kerala versus central rules can change the answer.

One conclusion is nevertheless clear: **an owner's personal-identity deletion must not be permitted to destroy employment records belonging to or concerning other workers where the merchant/employer still has a legal or evidentiary reason to retain those records.** Employee data has its own data subjects, statutory purposes and retention lifecycle. Owner identity and employee records therefore cannot share an uncontrolled cascade.

This is a **professional-validation priority** before a production employment-data retention schedule is adopted.

**LV-12 — Validation of MC-109 architecture**

The detailed classification is provided below. The high-level outcome is **RESEARCH SUPPORTS WITH CONDITIONS**. None of the ten MC-109 principles is contradicted by the authoritative sources reviewed; several, however, depend on classification, record-specific lawful basis and professional validation before they can become production legal policy. MC-109 itself correctly treats the architecture as evidence rather than implementation authority. fileciteturn4file0

## Retention and personal-data disposition matrices

### Retention matrix

| Record class | Law / provision | Applicability | Duty holder | Retention period | Trigger / event | Extension / hold | Personal-data treatment |
|---|---|---|---|---|---|---|---|
| GST books, accounts, invoices, stock and related statutory records | CGST Act ss.35–36; CGST account/record rules | GST-registered person and specified record classes | **Merchant / registered person** | **72 months** | Due date for annual return for relevant year | Subject-matter records: until 1 year after final disposal of specified appeal/revision/proceeding/investigation, or ordinary period, whichever later | Retain only personal fields forming part of required record; active user profile not thereby required. citeturn23search0turn23search1 |
| GST electronic edit/delete audit history | CGST Rules, accounts and records | Electronic GST records | Merchant / registered person; Team LIPS may operationally host | Same preservation context as underlying records | Edit/delete activity | Follows surviving record/proceeding requirements | Audit trail must survive relevant edits/deletions; no requirement found to preserve active login authority. citeturn23search0 |
| GST electronic backups | CGST Rules | Electronic covered records | Merchant / registered person | Follows statutory record period | Record creation / ongoing maintenance | Follows statutory extension | Backup must permit restoration; access should remain controlled. citeturn23search0 |
| Income-tax books/documents under current r.46 | Income-tax Act 2025 s.62; Income-tax Rules 2026 r.46 | Persons/businesses meeting s.62/rule conditions | **Taxpayer / merchant** | **Seven tax years** | End of relevant tax year | Specified reopened old-law assessments: retain until completion | Preserve only record-required personal fields; do not infer full user-account retention. citeturn26search0turn26search1 |
| Income-tax electronic backup | Income-tax Rules 2026 r.46 | Electronic books/documents covered by rule | Taxpayer / merchant | Tracks relevant books/documents | Ongoing | Tracks extension | Current rule requires India accessibility and backup on servers physically located in India, updated daily. citeturn26search0 |
| Company accounting books/vouchers | Companies Act 2013 s.128 | Merchant is a company | **Company** | At least the statutory preceding financial-year period prescribed by s.128, ordinarily eight financial years | Financial year | Can extend in investigation circumstances | Preserve record; minimise unrelated personal profile data. citeturn25search5 |
| Team LIPS's own subscription invoices/payments/refunds/accounting records | GST / income-tax / company law according to Team LIPS's own status | Team LIPS's own business transactions | **Team LIPS** | Depends on Team LIPS tax/entity classification | Relevant transaction/year | Tax proceedings/investigation as applicable | Independent of merchant account deletion; keep transactional identity only to extent required. citeturn23search1turn26search1 |
| ICT security logs | CERT-In Directions under IT Act s.70B(6) | Covered service providers/intermediaries/data centres/body corporates/Govt organisations | **Team LIPS if covered** | **Rolling 180 days** | Log generation | CERT-In direction/incident requirements may require production | Protect and purpose-limit identifiers; account deletion must not corrupt required log history. citeturn19search0turn22search13 |
| Data-centre/VPS/cloud/VPN subscriber information | CERT-In 28 Apr 2022 Directions | Only listed provider classes | Relevant listed provider | **5 years or longer if law requires** | Cancellation/withdrawal of registration | Longer where mandated | Do not apply to Smart Business until Team LIPS classification is validated. citeturn19search0turn22search4 |
| Intermediary user-registration information | IT Intermediary Rules 2021 | Only if Smart Business/Team LIPS is an intermediary for relevant activity | Intermediary | **180 days** | Cancellation/withdrawal of registration | Longer where another lawful requirement applies | Exact registration dataset should be minimised; classification unresolved. citeturn19search5turn32search2 |
| Future DPDP Rule 8(3) processing/traffic/log data | DPDP Rules 2025 r.8, Seventh Schedule | When rule becomes effective; only specified purposes | Data Fiduciary | **Minimum 1 year from processing** for the specified Seventh Schedule purpose | Processing | Longer where law/Government requires | Not a universal all-data period; erase thereafter when no other basis remains. citeturn10view2 |
| Historical actor attribution | Record-specific law + privacy rules | Only where surviving audit/financial/security/claim record genuinely needs attribution | Merchant and/or Team LIPS by record purpose | **No universal period found** | Underlying record/event | Tracks lawful need of underlying record | Prefer non-authorising pseudonymous key; reversible mapping remains personal data. |
| Deletion tombstone | No universal statutory tombstone requirement identified | Product accountability control, if adopted | Team LIPS | **No statutory universal period found** | Deletion execution | May reflect hold/retained classes | Minimal fields only; separate expiry; must not recreate profile. |
| Dispute/legal-hold record | Underlying tax/proceeding/order/claim basis | Case-specific | Merchant or Team LIPS depending case | **Case-specific** | Dispute/proceeding/notice | Until applicable proceeding/hold basis ends | Retain case evidence, not automatically full active identity. citeturn23search1turn26search0 |
| Employee attendance/payroll/employment data | Kerala/central labour and social-security law depending establishment | Employer/employee class-specific | **Merchant/employer** primarily | **Unresolved as universal schedule** | Employment/payroll event | Proceedings/statutory requirements vary | Do not destroy because Owner identity is deleted; professional Kerala labour-law mapping required. citeturn28search0turn28search15 |

### Personal-data disposition matrix

| Data class | Provisional disposition | Reasoning |
|---|---|---|
| Active authentication credentials, login/session material after identity becomes lawfully deletable | **ERASE** | No surviving business record ordinarily needs active authentication authority. Security logs still within a mandatory window are a separate record class. |
| User profile fields such as display name, profile preferences and unnecessary contact metadata | **ERASE** when purpose ends, subject to any specific surviving basis | Keeping statutory records does not justify retaining unrelated live-profile fields. Future DPDP lifecycle law reinforces this separation. citeturn32search6turn10view2 |
| Merchant GST/income-tax/company records still inside mandatory preservation period | **MUST RETAIN record where applicable** | Statutory record duty survives account lifecycle according to record-specific law. citeturn23search1turn26search0turn25search5 |
| Personal attributes embedded in retained invoices/accounts | **RETAIN-MINIMISED** | Preserve fields required to keep the legally meaningful record; avoid carrying unrelated profile data into the archive. |
| Historical actor UUID/token for surviving audit event | **RETAIN-MINIMISED / CONDITIONAL** | Permissible where attribution remains necessary; still personal if linkable. Do not preserve authority. citeturn15search23turn23search0 |
| Reversible actor-ID → deleted-person mapping | **RETAIN-MINIMISED / UNCERTAIN** | Mapping is personal data; duration must be justified independently. Professional validation required. |
| Irreversibly anonymised historical aggregate | **May retain, subject to genuine anonymisation** | If an individual is no longer identifiable, it is materially different from pseudonymised personal data; technical irreversibility must be real, not nominal. citeturn15search23 |
| CERT-In ICT logs | **MUST RETAIN if applicability established** | Rolling 180-day current security requirement. citeturn19search0turn22search13 |
| Intermediary registration information | **MUST RETAIN only if intermediary classification applies** | 180-day post-cancellation obligation is category-dependent. citeturn19search5turn32search2 |
| Full profile because a support ticket remains open | **ERASE unless underlying issue independently justifies data** | A ticket is evidence of an issue, not itself a universal statutory retention basis; aligns with MC-109. fileciteturn4file0 |
| Payment/refund/chargeback case | **RETAIN-MINIMISED** | Keep relevant transaction/case evidence for the applicable financial or dispute purpose; not automatically the active identity. |
| Deletion proof/tombstone | **UNCERTAIN / RETAIN-MINIMISED if adopted** | No general mandatory tombstone identified; accountability benefit must be balanced against deletion purpose. |
| Backup copy containing deleted data | **CONDITIONAL, TEMPORARY** | Backups may be necessary for lawful records and resilience, but should expire/replay deletion and must not restore deleted account state into use. citeturn23search0turn26search0turn10view2 |
| Employee data where owner's identity is removed | **MUST RETAIN or RETAIN-MINIMISED according to employment duty** | Employee data has an independent subject/purpose and cannot be cascade-deleted merely with the owner. Exact periods remain unresolved. |

## Responsibility and lifecycle findings

### Merchant-versus-Team-LIPS responsibility map

| Matter | Merchant responsibility | Team LIPS responsibility | Research finding |
|---|---|---|---|
| GST books/invoices | Statutory registered-person duty | Host/export/availability duties only to extent contracted; separate duties only if another law applies | **Merchant remains statutory duty holder.** citeturn23search1 |
| Income-tax books | Taxpayer duty under applicable s.62/r.46 | SaaS custody does not substitute for taxpayer status | **Merchant remains statutory duty holder.** citeturn26search0turn26search1 |
| Company accounting records | Company duty where customer is company | Hosting may support compliance | **Entity-specific; not universal to MSMEs.** citeturn25search5 |
| Team LIPS subscription accounting | None except as counterparty record | Team LIPS's own GST/tax/entity obligations | **Independent Team LIPS record class.** |
| ICT/security logs | Merchant only for its own systems where applicable | Team LIPS has its own CERT-In exposure if within covered category | **Independent Team LIPS obligation can survive user deletion.** citeturn19search0 |
| Customer/employee personal data processed for merchant | Merchant may determine business purpose/means | Team LIPS may act as processor, depending actual role | **Future DPDP role must be mapped processing-by-processing, not by one global label.** citeturn32search6 |
| Team LIPS account/billing/security/support data | Merchant/user supplies some data | Team LIPS ordinarily determines at least some purposes/means for operating its own service | **Likely separate Team LIPS Data Fiduciary role once relevant DPDP duties commence; professional validation required.** |
| Intermediary registration data | User provides registration info | Team LIPS duty only if legally an intermediary for the activity | **Classification unresolved.** citeturn19search5turn32search2 |
| Archived statutory record after account closure | Merchant still needs statutory compliance | Team LIPS may maintain restricted archive under contract/basis | **Active account and statutory archive may be separated.** |
| Deletion request execution | Merchant/user must satisfy eligibility as product governance requires | Team LIPS must execute only through authorised governed lifecycle | **Legal research supports separation; implementation remains unauthorised.** fileciteturn4file0 |

### Audit-attribution finding

**Finding: RESEARCH SUPPORTS WITH CONDITIONS.**

GST provides unusually strong primary evidence for durable audit integrity: an electronically maintained register cannot simply have edits/deletions disappear; a log of each edited/deleted entry must be maintained, and audit-trail/interlinkage information must be producible on demand. citeturn23search0

This supports Smart Business preserving historical **event attribution**, but not historical **authority**.

A legally conservative model is:

`surviving business record → historical event → immutable/non-authorising actor reference`

rather than:

`surviving business record → permanently active user account`.

The actor reference should contain the least identity information necessary. If it can be mapped to a person, treat it as personal data. When the underlying record no longer needs person-level attribution, the mapping should be capable of expiring/anonymising rather than persisting automatically.

### Deletion-proof / tombstone finding

**Finding: RESEARCH SUPPORTS WITH CONDITIONS; not identified as a universal statutory requirement.**

A minimal tombstone can serve four defensible control purposes:

1. prove that a governed deletion occurred;
2. state which categories could not yet be erased and why;
3. prevent stale backups/subprocessors from silently resurrecting the identity;
4. provide an expiry checkpoint for retained exceptions.

Future DPDP Rule 8 makes the broader disposition problem explicit by coupling erasure with legally justified retention rather than allowing indefinite storage. citeturn10view2

The tombstone should **not** duplicate the deleted user's name, telephone number, email, address, authentication data or full profile unless one of those exact attributes has an independent legal basis. A pseudonymous subject reference that Team LIPS can reverse is still personal data and must itself expire when no longer necessary.

### Backup / restoration finding

**Finding: RESEARCH SUPPORTS A CONTROLLED FINITE-BACKUP MODEL, BUT THE EXACT DELETION WINDOW IS UNRESOLVED.**

Current GST law affirmatively expects electronic backup, and current Income-tax Rule 46 can require Indian-located, daily-updated backups for applicable tax books. citeturn23search0turn26search0

No reviewed authoritative provision gives general permission to keep erased personal data forever because it is “only in backup”. Future DPDP erasure requirements therefore make restoration behaviour as important as primary-record deletion. citeturn10view2

The legally safer architecture principle is:

`backup restore → re-apply deletion/retention ledger → suppress expired/deleted identity → then return system to service`

rather than allowing restored historical snapshots to recreate live accounts.

The precise maximum survival period in immutable backups, and whether particular backup technologies satisfy erasure obligations through eventual expiry rather than immediate physical purge, remains a **professional-validation item**.

### Dispute / legal-hold finding

**Finding: RESEARCH SUPPORTS CASE-SCOPED HOLDS; RESEARCH DOES NOT SUPPORT “open issue = retain full identity indefinitely”.**

GST expressly demonstrates the lawful-hold concept by extending record preservation where an appeal, revision, proceeding or investigation concerns those records. citeturn23search1 Current income-tax rules similarly contain proceeding-specific extension logic. citeturn26search0

Accordingly, a legal hold should identify:

`case → affected record classes → legal/claims basis → start → reviewer → release condition`

It should not be implemented as a global “do not delete anything about this user” flag unless the underlying legal matter truly requires that scope.

### Employment / payroll / attendance finding

**Finding: RESEARCH SUPPORTS INDEPENDENT EMPLOYEE-RECORD LIFECYCLES; EXACT PERIODS REMAIN UNRESOLVED.**

Kerala target merchants commonly fall under the Shops and Commercial Establishments framework; Kerala Labour Commissionerate states that shops/commercial establishments outside the identified factories exclusion must register. citeturn28search0 The central Labour Ministry separately maintains the Labour Code framework. citeturn28search15

The evidence did not support assigning a single period to all attendance/payroll/employee data. Therefore Phase One should treat these as distinct classes until employer size, applicable social-security regime, wage law, establishment category and Kerala rules are professionally reconciled.

The critical deletion invariant is nevertheless sound:

> **Deleting an Owner's personal Smart Business identity must not cascade-delete records of employees, ex-employees or payroll events whose legal/business retention purpose survives.**

## Architecture validation and uncertainty

### MC-109 architecture validation

MC-109's ten statements were presented as a working compliance architecture rather than final legal policy. fileciteturn4file0 The research disposition is:

| MC-109 principle | Research classification | Reason |
|---|---|---|
| Identity deletion and record retention are separate lifecycle operations. | **RESEARCH SUPPORTS** | GST/tax/security records can have statutory lifecycles independent of active SaaS authentication. citeturn23search1turn26search0turn19search0 |
| The Founder-approved 90-day business lifecycle is not a universal legal-retention period. | **RESEARCH SUPPORTS** | Actual law produces 180-day, 72-month, seven-tax-year, corporate and case-specific periods. |
| The full live user profile need not be retained merely because statutory/audit records survive. | **RESEARCH SUPPORTS WITH CONDITIONS** | Preserve only identifiers genuinely required by the surviving record/basis; classification and legal holds can create exceptions. |
| Surviving personal data should be minimised to the purpose that justifies retention. | **RESEARCH SUPPORTS** | Consistent with current transition principles and the future DPDP erasure/retention architecture. citeturn10view2turn32search6 |
| Historical attribution may survive without granting authority/access. | **RESEARCH SUPPORTS WITH CONDITIONS** | GST audit integrity supports historical traceability; identifier form and re-identification mapping require purpose-specific validation. citeturn23search0 |
| A minimal deletion-proof record may survive if contents and retention basis are lawful. | **RESEARCH SUPPORTS WITH CONDITIONS** | No general statutory tombstone requirement found; accountability rationale plausible, but fields and expiry require validation. |
| Merchant statutory records may sometimes survive deletion of Smart Business identity/business account. | **RESEARCH SUPPORTS WITH CONDITIONS** | Statutory merchant duty may outlast SaaS lifecycle; contractual archival/access model still needs validation. citeturn23search1turn26search0 |
| A support ticket/complaint alone is not a legal basis to retain the full identity unless an underlying obligation requires it. | **RESEARCH SUPPORTS** | Research identified no general rule converting a support ticket into unlimited identity retention; case-specific legal/claims basis must be established. |
| A payment/commercial record may survive even where live identity is deleted, unless unresolved obligation genuinely requires the person to remain identifiable/active. | **RESEARCH SUPPORTS WITH CONDITIONS** | Financial records can have independent tax/accounting value; active authentication generally need not survive. |
| Retention periods must be record-class-specific and legally grounded. | **RESEARCH SUPPORTS — STRONG** | This is the clearest cross-regime conclusion of the research. GST, income tax, CERT-In, intermediary and future DPDP rules all use distinct scopes/triggers/periods. citeturn23search1turn26search0turn19search0turn10view2 |

**Overall MC-109 legal-research result: `RESEARCH SUPPORTS WITH CONDITIONS`.**

This does **not** convert the MC-109 architecture into professionally validated legal policy, does not close R-2, and does not authorise implementation. MC-113 expressly reserves those consequences. fileciteturn1file0

### Contradictions and uncertainty register

| Issue | Current research status | Consequence |
|---|---|---|
| Exact DPDP anniversary date | **UNCERTAIN AT ONE-DAY LEVEL** — Gazette notification dated 13 Nov 2025 while official electronic/publication metadata is associated with 14 Nov | Use earlier 13 Nov 2026 / 13 May 2027 dates conservatively; obtain professional confirmation before formal policy. citeturn32search6turn15search10 |
| Current s.43A / SPDI transition | **PROVISIONAL** | Research indicates it remains relevant because DPDP s.44(2) is future-effective; counsel should confirm exact transition and affected processing. citeturn32search12 |
| Team LIPS legal form | **NOT ESTABLISHED IN THIS RESEARCH** | Affects “body corporate”, company-law, tax and other classifications. |
| CERT-In “service provider/body corporate” applicability | **LIKELY MATERIAL BUT CLASSIFICATION REQUIRES VALIDATION** | Do not omit 180-day security logs; obtain legal classification. |
| Five-year CERT-In subscriber rule | **CATEGORY-DEPENDENT** | Must not be applied merely because Smart Business uses cloud infrastructure. citeturn19search0 |
| Smart Business intermediary status | **UNRESOLVED** | 180-day post-registration cancellation rule should not be universalised. |
| Exact lawful basis/duration for historical actor mapping | **UNRESOLVED** | Pseudonymous linkable identifiers remain personal; mapping should not be indefinite by default. |
| Deletion tombstone legal basis and expiry | **NO GENERAL STATUTORY REQUIREMENT FOUND** | Treat as bounded accountability control, not permanent shadow identity. |
| Immutable-backup erasure period | **NO UNIVERSAL NUMBER FOUND** | A finite cycle/restoration suppression architecture is an inference requiring validation. |
| Kerala employment/payroll/attendance retention schedule | **INSUFFICIENT FOR UNIVERSAL RULE** | Requires Kerala employment-law / establishment-class professional mapping. |
| Payment-gateway/PA/regulated-entity requirements | **DEPEND ON ACTUAL PROVIDER ROLE** | Do not import RBI/PA/KYC retention rules into Team LIPS unless Team LIPS actually enters regulated status. |
| Merchant access after account termination | **CONTRACT/PRACTICAL COMPLIANCE ISSUE** | Need to determine whether export, archive retrieval or continued restricted access is necessary for merchant statutory compliance. |
| Civil claims/chargebacks | **CASE-SPECIFIC** | No blanket research basis established for indefinite or full-profile retention. |
| Employee records after Owner deletion | **STRUCTURAL PRINCIPLE SUPPORTED; periods unresolved** | Must prevent owner-deletion cascades, but exact employment retention schedule needs validation. |

## Deferred professional validation

Under Founder Decision Record 06, professional legal/privacy/retention review is deferred until after the Phase One build through SB-P-1.20; it is **not cancelled**. fileciteturn2file0 The following matters should remain explicitly queued for that gate.

**Highest-priority validation items** are the legal status and organisational form of Team LIPS/LIPS; whether Smart Business is a “service provider”, “body corporate” and/or intermediary for particular processing under the IT Act/CERT-In framework; the transitional position of IT Act section 43A and the SPDI Rules until DPDP section 44(2) commences; the precise DPDP commencement anniversary; Data Fiduciary versus processor allocation for merchant employee/customer data; and the terms required in merchant/privacy/subprocessor arrangements.

Professional review should also establish a **Kerala-specific employment/payroll/attendance retention schedule** by establishment type and current labour/social-security law; confirm company/LLP/partnership/proprietorship record classes separately; validate the lawful basis and maximum duration for reversible historical actor attribution; determine permissible deletion-tombstone fields and expiry; validate immutable-backup deletion/expiry and restoration controls; determine case-specific claims/legal-hold periods; assess any payment-aggregator or RBI-regulated obligations only if Team LIPS actually undertakes a regulated payments role; and confirm what statutory-record access or export must remain available to a merchant after account/business closure.

The professional must further review final Phase One **Privacy Policy, Terms / Terms of Service, merchant data-processing language, retention schedule, subprocessor terms, deletion notices and legal-hold process** before those materials are relied upon as final legal positions, exactly as Founder Record 06 requires. fileciteturn2file0

None of these deferred items authorises Research & Intelligence to amend Product Truth, the FCTM, Blueprint, source contracts, schema, RLS, migrations, deletion mechanisms or runtime behaviour.

## Authoritative source register and Mission Control disposition

Access date for all online sources below: **28 September 2026**.

| Authority | Exact instrument / relevant provisions | Publication / effective status | Exact URL |
|---|---|---|---|
| Ministry of Electronics & IT / India Code | **Digital Personal Data Protection Act, 2023 (Act 22 of 2023)**; especially ss.1–17, 44 | Enacted 11 Aug 2023; staged commencement under G.S.R. 843(E), Nov 2025 onward | `https://www.meity.gov.in/digital-personal-data-protection-act-2023` and `https://www.indiacode.nic.in/indiacode/handle/123456789/22037?view_type=browse` citeturn15search0turn15search23 |
| Gazette / MeitY | **G.S.R. 843(E)** — DPDP Act commencement notification | Dated 13 Nov 2025; first tranche on publication; one-year and eighteen-month tranches thereafter | Official enforcement-timeline material is indexed through MeitY's DPDP page above; Gazette text cross-checked against the published Gazette reproduction. citeturn32search6 |
| Ministry of Electronics & IT | **Digital Personal Data Protection Rules, 2025, G.S.R. 846(E)**; rr.1, 6, 8 and Schedules particularly relevant | Gazette dated 13 Nov 2025 / electronic publication metadata 14 Nov 2025; phased commencement | `https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025` citeturn15search22 |
| MeitY Gazette PDF | **DPDP Rules 2025 official Gazette PDF** | Nov 2025 | `https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf` — Rule 1 commencement, Rule 6 security, Rule 8 erasure/retention and Third Schedule verified from the rendered Gazette pages. citeturn10view0turn10view1turn10view2turn10view3 |
| CERT-In | **Directions under IT Act s.70B(6)**, Direction No. 20(3)/2022-CERT-In | Issued 28 Apr 2022; operative | `https://www.cert-in.org.in/Directions70B.jsp` citeturn19search0 |
| CERT-In | **28 Apr 2022 Cyber Security Directions PDF** | 2022; current | `https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf` — relevant provisions include rolling 180-day ICT logs and category-specific five-year subscriber data. citeturn22search13 |
| MeitY | **Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021**, consolidated/updated official publication | Operative, subject to notified amendments | `https://www.meity.gov.in/documents/orders-and-notices/notifications-on-information-technology-act-2000-its-rules-AOzATOtQWa` citeturn19search5 |
| MeitY | **Rules under Information Technology Act, 2000**, including privacy/security-rule materials | Existing IT Act rules framework | `https://www.meity.gov.in/documents/act-and-policies/rules-for-information-technology-act-2000-YDO5AjMtQWa` citeturn15search9 |
| CBIC | **Central Goods and Services Tax Act, 2017**, ss.35–36 | Operative | `https://cbic-gst.gov.in/hindi/CGST-bill-e.html` — s.36 provides 72-month retention plus proceeding/investigation extension. citeturn23search1 |
| CBIC | **CGST Rules — Accounts and Records**, including electronic record/audit/backup provisions | Operative | `https://cbic-gst.gov.in/accnt-record-rules.html` citeturn23search0 |
| Income Tax Department / CBDT | **Income-tax Act, 2025, s.62 — Maintenance of books of account** | Effective 1 Apr 2026 for new-law tax years | `https://www.incometaxindia.gov.in/w/section-62-134` citeturn26search1 |
| Income Tax Department / CBDT | **Income-tax Rules, 2026, Rule 46** — maintenance/retention of books | Current; seven-tax-year rule and electronic-access/backup provisions | `https://www.incometaxindia.gov.in/hi/w/rule-46-5` citeturn26search0 |
| Income Tax Department | **Objective and Scope of the New Act FAQs** | Current official transition guidance; confirms 1961 Act repeal/savings and 1 Apr 2026 switch | `https://www.incometax.gov.in/iec/foportal/node/11678` citeturn27search2 |
| Income Tax Department | **Income-tax Act 2025 comes into force from 1 April 2026** | 1 Apr 2026 | `https://www.incometaxindia.gov.in/hi/w/income-tax-act-2025-comes-into-force-from-1st-april-2026` citeturn27search0 |
| India Code | **Companies Act, 2013**, especially s.128 | Act enacted 29 Aug 2013; current corporate accounting regime | India Code central-legislation record accessible through `https://www.indiacode.nic.in/handle/123456789/1362/browse?etal=-1&order=DESC&rpp=40&sort_by=2&starts_with=V&type=actno&value=18` citeturn25search5 |
| Kerala Labour Commissionerate | **Kerala Shops & Commercial Establishments Act 1960 administration / applicability** | Current Kerala merchant/employer framework | `https://lc.kerala.gov.in/en/node/308` citeturn28search0 |
| Kerala Labour Commissionerate | **Acts administered**, including Kerala Shops Act and Labour Codes | Current official reference page | `https://lc.kerala.gov.in/en/acts` citeturn28search3 |
| Ministry of Labour & Employment | **Labour Codes official collection** | Current Ministry publication; exact employee-record preservation mapping remains to be completed professionally | `https://www.labour.gov.in/offerings/schemes-and-services/details/labour-codes-gzNzQzMtQWa` citeturn28search15 |

Two secondary sources were used **only as cross-checks where browser retrieval did not expose the complete official instrument text**, not as higher authority than the official sources: the reproduced text of G.S.R. 843(E) for the precise DPDP section-by-section commencement schedule, and a reproduction of the intermediary 180-day registration-information rule. The legal conclusions above therefore preserve these as validation points rather than silently elevating secondary commentary. citeturn32search6turn32search2

### Mission Control research disposition

**Provisional Phase One result:** **SUFFICIENT FOR MISSION CONTROL REVIEW AS RESEARCH-BACKED COMPLIANCE EVIDENCE, WITH MATERIAL CONDITIONS AND PRESERVED UNCERTAINTIES.**

**MC-109 architecture result:** **RESEARCH SUPPORTS WITH CONDITIONS.**

**Key conclusions for source-accounting consideration:**

- record retention and active identity retention should remain separate;
- no universal 90-day, 180-day, one-year, five-year, six-year, seven-year or eight-year period can govern all Smart Business records;
- retention must be attached to a specific record class, duty holder, statutory basis, trigger and extension condition;
- statutory merchant records can survive application/account identity deletion;
- surviving history must not recreate authority;
- historical attribution may survive in minimised, non-authorising form where genuinely needed;
- reversible pseudonymisation remains personal-data processing;
- minimal deletion proof is defensible but not established as a universal statutory mandate;
- backup retention must be finite/purpose-bound and restoration must not resurrect deleted identity;
- support tickets and routine complaints are not blanket reasons to retain full identities;
- disputes/legal holds should preserve only affected records;
- owner deletion must not cascade into independent employee/statutory records;
- CERT-In's 180-day ICT-log requirement is materially relevant now where Team LIPS falls within the covered classes;
- the CERT-In five-year subscriber rule and the Intermediary Rules' 180-day registration rule are **classification-dependent**, not universal SaaS retention rules;
- substantive DPDP Data Fiduciary/erasure obligations are largely **future-effective as of 28 September 2026**, but Phase One architecture should be designed now so it does not require a destructive redesign when those provisions commence. citeturn19search0turn32search6turn10view2

This research **does not** amend Product Truth, numbered source contracts, FCTM, Blueprint, schema, SQL, RLS, migrations, deletion logic, provider configuration, Privacy Policy, Terms, retention policy or implementation. It does not close R-2, resolve ESC-1, constitute a compliance certification, or replace the professional review expressly deferred by Founder Decision Record 06. fileciteturn2file0 fileciteturn1file0

**STOP: SB-P-1.12 R-2 INDIA LEGAL / PRIVACY / RETENTION DEEP RESEARCH RETURNED TO MISSION CONTROL. AWAIT MISSION CONTROL DISPOSITION BEFORE ANY SOURCE-TEXT, FCTM, BLUEPRINT, SCHEMA, DELETION, RETENTION OR IMPLEMENTATION ACTION.**