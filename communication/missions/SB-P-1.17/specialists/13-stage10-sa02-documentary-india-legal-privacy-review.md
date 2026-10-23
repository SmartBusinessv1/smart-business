# SB-P-1.17 Stage 10 — SA-02 Documentary India Legal / Privacy Review

**Authority:** MC-474 / MC-472A; Source 18 v1.2. **Date:** 2026-10-23.  
**Status:** PROVISIONAL RESEARCH COMPLETE — REFINEMENT REQUIRED — MISSION CONTROL DISPOSITION PENDING.  
**Reviewer:** ChatGPT / OpenAI GPT-6; previously authored R-2 and MC-408A provisional research; **not clean-room independent, not an Indian advocate, not licensed or certified legal counsel**. No professional legal review or attorney-client assurance.  
**Baseline:** `main@d5cd71819044ae4686fd05269f2b26c4e0f5407f`; **EIS blob** `8280967f2805cfed17778da3fc76c90b2f2f5ead` verified against repository file; **locked Blueprint** `bc4615f84959a79e6b242f622aae928901fbe959`; **FCTM** `cb79088d3fa59f8b3226fd9d11ff9c9573666670`.  
**Boundary:** Documentary inspection only. No merchant/staff records, live systems, SQL, migrations, EIS/contract edits, deployment, acceptance, EIS Lock or implementation. **Qualified Indian legal/privacy validation remains OPEN.**

## 1. Source manifest and evidentiary status

**Repository, primary:** [EIS at immutable baseline](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md); [locked Blueprint](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/docs/phase-1-mission-blueprint/completed/SB-P-1.17.md); [R-2 deep research](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/docs/research/India-Legal-Privacy-Retention-Deep-Research-Report.md); [U-11 Truth Pack](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/communication/missions/SB-P-1.17/claude-code/03-stage2-mission-truth-pack.md); [MC-472A handoff](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/communication/missions/SB-P-1.17/mission-control/26-mc472a-sa02-substantive-legal-privacy-review-authorization.md).

**Other accepted Stage 10 documentary findings (reused, not independently adopted as legal clearance):** SA-01 security [blob `457c6a369d2983016fe0230bd6f0355bf2cbb4e5`](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/communication/missions/SB-P-1.17/specialists/05-stage10-sa01-documentary-security-review.md); SA-03 finance [`ec4403a6ee31c50b3b91030a1c229ce8a37fd587`](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/communication/missions/SB-P-1.17/specialists/07-stage10-sa03-documentary-financial-review.md); SA-05 migration [`9c84c25916db7dfae13789d7f3a46748a4fc1e41`](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/communication/missions/SB-P-1.17/specialists/09-stage10-sa05-documentary-supabase-migration-review.md); SA-04 POS [`4ce3c2f1dd04b16d3eb94c0f8e97b377c7da17dd`](https://github.com/SmartBusinessv1/smart-business/blob/d5cd71819044ae4686fd05269f2b26c4e0f5407f/communication/missions/SB-P-1.17/specialists/11-stage10-sa04-documentary-pos-integration-review.md).

**Authoritative India sources (freshly checked 2026-10-23; publication dates shown where established):**
- Ministry of Electronics and Information Technology, [DPDP Act 2023](https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf), enacted August 2023, particularly ss.2–8, 11–12, 17 and 44; read subject to commencement.
- Government of India Gazette, **G.S.R. 843(E), dated 13 November 2025**: [DPDP staged commencement](https://egazette.gov.in/WriteReadData/2025/267647.pdf).
- Government of India, **DPDP Rules 2025**, notified November 2025, MeitY publication: [Rules PDF](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf), especially commencement, rules 3, 6 and 8; check controlling Gazette for exact publication-date computation.
- CERT-In, **Directions under IT Act s.70B(6), dated 28 April 2022**: [official PDF](https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf), para 4(iv).
- CBIC, CGST Act 2017 **ss.35–36**, [CBIC official text](https://cbic-gst.gov.in/pdf/CGST-Act-Updated-01082021.pdf), and CGST Rules 2017 **rules 56–57** [CBIC publication](https://cbic-gst.gov.in/pdf/24092021-CGST-Rules-2017-Part-A-Rules.pdf).
- Income-tax Act 2025 s.62 / notified Income-tax Rules 2026 r.46 (as cited by R-2; current official notification and applicability need final practitioner confirmation): [Income Tax Department notified rules PDF](https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-03/En-Notified-IT-Rules-2026-20-03-2026.pdf).
- Companies Act 2013 **s.128**: [India Code](https://www.indiacode.nic.in/bitstream/123456789/15198/1/the_companies_act%2C_2013_no._18_of_2013_date_29.08.2013.pdf).
- IT Act 2000 **s.43A**, SPDI Rules 2011 where applicable; Kerala Shops and Commercial Establishments and applicable labour/wage record rules: applicability and exact register-retention obligations **not independently fixed in this review**.

These are sources of law or provisional interpretation, not proof of Smart Business implementation. Legal publication/commencement uncertainty is listed below rather than silently resolved.

## 2. Applicable law and effective-date / coverage table (as of 23 October 2026)

| Instrument | Status and date | Scope and conclusion | Evidence grade |
|---|---|---|---|
| DPDP Act: definitions and first tranche | In force on Gazette publication November 2025 | Definitions/Board/miscellaneous provisions; not evidence that main privacy duties are currently operative | CONFIRMED by Gazette G.S.R. 843(E) |
| DPDP Act s.6(9) and s.27(1)(d) | One year after publication; likely 13 November 2026; printed versus electronic upload date difference remains | Not yet operative on review date | Gazette; date computation requires qualified confirmation |
| DPDP Act ss.3–5, most s.6, ss.7–17, 44(2) | Eighteen months after publication; conservative planning 13 May 2027 | Main lawful processing, notice, employment-related use s.7(i), fiduciary duties, erasure/right provisions **future**, not current legal mandate | Gazette CONFIRMED; anniversary exactness OPEN |
| DPDP Rules r.3, rr.5–16 (including security and erasure), rr.22–23 | Eighteen months after publication | Future compliance design, not present-day enforcement | Rules; exact publication-date reading OPEN |
| IT Act 2000 s.43A / 2011 SPDI framework | Transitional relevance pending commencement of DPDP s.44(2); applicability depends on covered data and entity | Existing security/privacy obligations cannot be treated as repealed already | Applicability requires counsel |
| CERT-In 2022 Directions para 4(iv) | Currently operative | Covered service providers, intermediaries, data centres, bodies corporate and government organizations: rolling **180 days ICT logs maintained securely in India**; **not** a 180-day employment-profile rule | CONFIRMED by CERT-In |
| CGST Act s.36 | Currently operative where merchant is registered and records covered by s.35 | **72 months from annual-return due date**, subject to specified proceedings extension; merchant registered person is statutory duty holder | CONFIRMED by CBIC |
| CGST Rules 56–57 | Operative subject to amendments | Electronic record integrity, edits/deletions audit and restoration; not blanket operator-performance identity retention | CONFIRMED framework |
| Income-tax Act 2025/Rules 2026 s.62/r.46 | Operative for applicable taxpayer classes from tax regime change in 2026 | R-2 identified seven tax years for applicable books; exact tax-year/transition applicability and current final text to be certified by tax professional | PROVISIONAL as applied |
| Companies Act s.128 | Operative for companies | Eight preceding financial years for covered accounting records; not all Kerala sole proprietors | CONFIRMED general rule |
| Kerala/central employment/attendance/wage requirements | Operative where applicable | Exact establishments, registers and preservation periods **not established universally** | OPEN professional applicability |

**R-2 correction against overreach:** neither 90-day Founder business lifecycle nor CERT-In's 180-day security-log rule nor GST's six-year statutory books rule establishes a universal operator identity or employee-analytics retention period. Future DPDP s.7(i) could support necessary employment processing; it **is not yet operative** and is not unlimited authority for covert monitoring.

## 3. Personal data disposition and retention matrix

| Information | Purpose and classification | Minimum disposition / retention rationale | Evidence |
|---|---|---|---|
| External transaction ID, source, time, items, quantity, price, payment method | Business accounting, reconciliation, stock and POS provenance; may contain personal data context | Retain only per relevant financial/business record class; no invented blanket period | EIS17-POS-04/05; CGST ss.35–36 |
| Discount/void/reversal/counter-period fact without operator ID | Neutral Scenario B review | Purpose-scoped business event retention; indirect identifiability possible where only one cashier worked | EIS17-CTR-01–04, PRIV-01/02 |
| Operator POS ID, alias, roster mapping, employee ID | Identifiable worker activity | **HOLD for counter intelligence** until purpose, lawful ground, notices, parties and retention validated; do not import to enable Scenario B | EIS17-CTR-06, PRIV-02, HOLD-20; U-11 |
| Operator name/phone/email | Direct identifiers | Not required for Scenario B; do not import solely for review | EIS17-PRIV-01 |
| Employee own attendance, corrections, payroll | Employment administration for covered employer | Role-scoped, purpose-limited, preserve original + approved contextual correction; classify separately against employer record duties | Source 12 §19; upstream SB-P-1.12/1.14; Kerala applicability OPEN |
| Owner financial data, Reference Cost, margin | Confidential merchant financial intelligence | Default Owner-only, separate grants for allowed Manager scopes; no Employee inference from POS use | EIS17-AUTH-03/04; CC-07 |
| POS event audit/provenance and corrections | Accounting audit / integrity / dispute | Maintain historical facts and source reference while applicable duty/claim persists; minimize direct employee identifier | EIS17-POS-05, CTR-03/07, CC-01/06; CGST Rules 56–57 |
| Security logs | Incident response / CERT-In | 180-day rolling log preservation where covered; restricted security use, not ordinary analytics | CERT-In para 4(iv) |
| Pseudonymous actor key / historical mapping | Historical attribution separate from live authorization | Retain only if essential to retained record or legally defensible case; map retained separately/access restricted; pseudonymous but re-identifiable keys remain personal data | R-2 LV-7; DPDP s.2 future applicability |
| Dispute/legal hold | Specific litigation/regulatory/tax/employment dispute | Scoped evidence-only hold; review and release; not blanket account freeze | CGST s.36 explicit proceedings extension; others OPEN |
| Deletion proof/tombstone | Evidence of disposition and restore suppression | Minimal identifiers/events/categories/legal hold/status/expiry; no shadow profile; **not proven universally statutory** | R-2 LV-8; engineering inference |
| Backups/restoration copies | Recovery and legally preserved accounts | Defined cycles, restricted access and restore replay of deletions; no general immutable-backup safe-harbour established | CGST r.57; R-2 LV-9 |
| AI explanations, operator risk scores, profiling history | Not a necessary Scenario B field | No automatic employee culpability/performance score; any individual-analysis purpose requires separate legal review | EIS17-CTR-02/04, Source 05 |

**Mandatory versus optional:** Registered-person GST records and covered ICT logs have identified mandatory periods, but normal counter analytics and operator-level behavioural histories have no substantiated universal statutory period. Statutory duty attaches to the specified record and duty holder, not to every employee field inside that record. A deletion request does not destroy legal records; an accounting obligation does not justify keeping a live staff account.

## 4. Actor responsibility and access map

| Actor | Purpose/role | Duty/limitation |
|---|---|---|
| Merchant as employer, POS customer and registered taxpayer where applicable | Determines employee-management/business-record purpose, employee notices, business review, law-specific retention | Primary employer notice, workforce due process, statutory books and employment records; may not outsource accountability by subscription |
| Team LIPS / Smart Business | SaaS provider; processor for merchant-instructed personal-data flows **where contract and actual purposes establish this**, independent fiduciary for purposes it itself determines | Written processing instructions, access logs, minimization, security, deletion/return, vendor mapping; fiduciary-versus-processor role is flow-specific and OPEN |
| POS vendor / export supplier | Source collector and data provider | Verify its lawful operator collection, merchant authority, vendor terms, further recipients and export scope; DPOS unverified |
| Owner | Highest approved merchant authority for operator-level detail | Owner-only is **product access rule**, not self-standing lawful processing basis; may interpret but AI does not accuse or sanction |
| Manager | Only explicitly scoped grant to counter/period summaries, stock/reorder and permitted closing functions | No capability 5 operator detail; no inherited Reference Cost/margin; deny across RPC/export/chat/WhatsApp/cache |
| Employee/operator | Data subject and limited operational user | Own attendance only where permitted; no anomaly analysis of colleagues; dignity, corrections, meaningful employer notice |
| Team LIPS support/admin | Platform support | No routine merchant-browsing authority; controlled case-specific support access only; log any exceptional access |
| Security/legal responders | Restricted need-to-know | Separate security incident or legal hold access, scoped, audited, expiring |

## 5. Requirement-scoped Stage 10 findings

Classification vocabulary: **CL** confirmed legal requirement; **PI** provisional interpretation; **ES** engineering safeguard; **MD** merchant decision; **NE** not yet evidenced. *Every suggested EIS wording is a proposal to Mission Control, not an edit.*

### SA02-S10-F01 — Operator processing lawful-purpose and notice gate incomplete
**Severity HIGH; EIS:** `EIS17-CTR-06`, `EIS17-PRIV-01/02`, `EIS17-HOLD-20`; Blueprint §§8.7, 20.4.7, 20.9.3; U-11; `13-§4-7`, `13-§17-8`, `13-§18-3`. **PI/NE.** The EIS correctly holds identifiable operator processing and keeps Scenario B non-attributed, but neither an authorized employer purpose/notice workflow nor POS vendor data provenance is evidenced. No legal certification from future DPDP employment legitimate-use provision. **Smallest proposed EIS wording:** “No ingestion, persistence, matching, presentation, export or analytics of operator identifiers for counter intelligence while U-11 remains open; explicitly document any exception needed for statutory records separately before approval.” **Owner:** Mission Control + Indian privacy/employment counsel and EIS owner. **Hold:** HOLD-20 OPEN; identifiable path blocked. **Trigger:** T6 if a lawful-purpose guard materially changes merchant-visible functionality; T1/T3 if new product choice is needed.

### SA02-S10-F02 — Business-neutral Scenario B may be indirectly attributable
**Severity MEDIUM; EIS:** `CTR-01/02/07`, `PRIV-02`, `VER-07`; Blueprint §8.7, §20.9.2; `13-§8-*`. **PI/ES.** “Counter and period” suppresses direct identity but may expose an identifiable sole cashier through rosters, time and small shop context. It is not automatically anonymous. **Smallest wording:** “Non-attributed means no direct operator join; assess reasonably foreseeable indirect identification via counter, time/shift and roster; avoid presenting outputs as anonymous.” **Owner:** EIS owner + privacy reviewer. **Hold:** no separate block on neutral Scenario B; U-11 remains on personal data/indirect identification. **Trigger:** T6 screen if display granularity changes.

### SA02-S10-F03 — Employee notices, vendor instructions and secondary-purpose boundary not evidenced
**Severity HIGH; EIS:** `POS-04/05/11`, `PRIV-01/02`, `AUTH-05`; Blueprint §20.9.3 dossier items 4,10,11; U-11. **PI/MD/NE.** Merchant authorization to connect a POS is not automatically proof workers received relevant notices; employment-related collection and performance use must be distinguished. Vendor contract and permitted disclosure/processing purposes unknown. **Smallest wording:** “Source eligibility dossier records vendor operator-field purpose and transfer permissions, merchant notice responsibility, actual notice/communication evidence where required and approved purposes; do not assume POS connection consent equals staff authorization.” **Owner:** Merchant + Team LIPS contract owner + qualified counsel. **Hold:** DPOS and HOLD-20 OPEN. **Trigger:** T1/T6 if new merchant workflow required.

### SA02-S10-F04 — Record-class retention and deletion/provenance contract remains unspecified
**Severity HIGH; EIS:** `PRIV-03`, `POS-05`, `CTR-03/07`, `CC-01/06`, `HOLD-20`; Blueprint §§20.4.7, 21.1 EQ17-11; R-2 LV-1/3/7–11. **CL/PI/ES.** EIS defers retention responsibly rather than inventing a period, but compliance-ready instructions need a per-class retention trigger, duty holder, hold, expiry and deletion/restoration mapping; statutory record preservation distinct from identity lifecycle. **Smallest wording:** “Before identified data activation, resolve applicable statutory or contractual record classes, retention clocks, re-identification-map expiry, case holds, deletion-proof minimization, and restore suppression through EIS14-RET-03; never equate 90 days with identity or tax retention.” **Owner:** Mission Control + SB-P-1.14/EIS12 domain owners + Indian counsel/CA. **Hold:** BP §15-6, U-11 OPEN. **Trigger:** T6 if retention changes product behavior; T8 WATCH if preservation and erasure cannot coexist.

### SA02-S10-F05 — Actor attribution is not a licence to retain full staff identity
**Severity MEDIUM-HIGH; EIS:** `POS-05`, `CTR-03/06/07`, `PRIV-03`; `13-§17-*`; C22 §33 identity lifecycle. **PI/ES.** Historical transaction/audit key may survive if needed; names, phone, roster mapping and live authority should not follow by default. An ID linked by the merchant's roster remains personal data. **Smallest wording:** “Separate non-authorizing historical event actor reference from live login/roster identity and any reversible mapping; document each mapping's purpose, privileged readers and expiry.” **Owner:** Identity/EIS owner + privacy counsel. **Hold:** U-11 and downstream identity/retention obligations OPEN. **Trigger:** T6 screen if resulting historical attribution becomes unavailable.

### SA02-S10-F06 — Attendance and payroll obligations require separate employer-law applicability
**Severity HIGH; EIS:** `AUTH-01/04/08`, `CC-05/07`, upstream `EIS-KER-*`, `EIS14-RET-03`; Source 12 §19 and C22. **PI/NE.** Staff permission-scoped own attendance and contextual corrections are governance requirements, not proof of actual labour-law notices/register retention. Employment evidence must survive identity deletion where independently obligatory; correction history should record original fact plus approved explanation. No one-size-fits-all Kerala attendance/wage retention clock established. **Smallest wording:** “For staff/attendance consumer paths, require exact business, actor and self-attendance permission; separate operator events from statutory attendance/payroll records; bind expiry and hold to applicable employer classification.” **Owner:** SB-P-1.12/1.14 domain owners + Kerala employment counsel. **Hold:** professional coverage OPEN; upstream D12/D14 unchanged. **Trigger:** T6 screen for any new user-visible scope.

### SA02-S10-F07 — Financial confidentiality must include derived and indirect disclosure paths
**Severity HIGH; EIS:** `AUTH-01/02/03/04/08`, `CC-05/07`, `VER-02`; `12:FR-04`, `12:FR-09`, `13-§13-*`. **ES/PI.** EIS correctly distinguishes Manager scope/capability 5 from Reference Cost/margin and Owner financial intelligence, and denies employee access. The effective scope constraints and protected projections remain subject to SA01-S10-F02/F03 and runtime negative testing; prompts, aggregate summaries and exports cannot be alternative bypasses. **Smallest wording:** “Permission denial applies to raw and derived values in SQL readers, RPC, exports, Ask CFO, conversational tools, background summaries, caches and delivery channels; test no membership/tenant inference.” **Owner:** Security/SB-P-1.12 + EIS owner. **Hold:** existing SA-01 refinements OPEN; no new statutory permission basis asserted. **Trigger:** T6 WATCH if access semantics altered.

### SA02-S10-F08 — Consent/notice and actor role responsibilities remain unallocated by data flow
**Severity MEDIUM-HIGH; EIS:** `POS-02/04/11`, `AUTH-05`, `PRIV-01–03`; Blueprint §20.9.3 item 10. **PI/NE.** “Merchant data belongs to merchant” is product stewardship, not automatic determination of DPDP fiduciary/processor classification. Team LIPS may independently determine some purposes, while employer controls workforce purposes. Existing support promises require narrow disclosures of permitted processing/vendors/security/legal access, not an absolute no-sharing claim. **Smallest wording:** “For each POS, employee, merchant support and logging flow, record purpose determiner, recipient, operator of system, notice issuer, retention duty holder, processor instructions and exceptional support/legal-access basis.” **Owner:** Team LIPS privacy/contracts + merchant + counsel. **Hold:** professional allocation OPEN. **Trigger:** T1/T6 if new Product Truth promise required.

### SA02-S10-F09 — Negative evidence matrix must prove privacy controls, not just cite them
**Severity HIGH; EIS:** `VER-02/05/07/11`, `POS-11`, `CTR-06`, `PRIV-01–03`; SA-01/SA-04 findings. **ES/NE.** Existing tests are proposals, not runtime proof. **Smallest wording:** “Add named negative-case EIS evidence expectations: operator fields dropped for Scenario B; no roster joins; Manager capability 4 cannot see capability 5 through API/export/Ask CFO; Employee sees own permitted attendance only; cross-tenant denial; revoked grants fail at commit; historical actor cannot sign in; deletion survives restore; unapproved support access denied; vendor source provenance/notice hold; redacted error/log exports; unidentified operator never fabricated; synthetic test never qualifies FRV-B.” **Owner:** EIS owner + independent verifiers after authorization. **Hold:** validation OPEN; FRV-B DPOS OPEN. **Trigger:** no T7 omission authorized; T6 if requirement changes behavior.

### SA02-S10-F10 — Engineering holds remain independent of legal research
**Severity HIGH (cross-domain); EIS:** `POS-02`, `TXN-03/06/09`, `CC-03`, `SUP-06`, `SEC-02`, `HOLD-15–21`; SA-01/03/05/04. **ES/NE.** SA-01 confirmed MC410-R01 open; SA-03 and SA-05 identified MC410-R02 posting semantics, EQ17-13 physical atomicity, MC410-R04A reversal, MC410-R04B closing completeness, and supplier-balance `SUP-06` cross-EIS contradiction (SA05-S10-F08: T8 established). SA-04 found DPOS/qualified integration assurance unresolved. Legal review neither resolves nor authorizes these issues. **Smallest wording:** “Preserve all named holds and independently accepted cross-domain finding pointers; do not treat SA-02 completion as clearance of POS, financial, migration, or source-specific runtime paths.” **Owner:** Mission Control and respective engineering/Founder domains. **Hold:** unchanged. **Trigger:** existing T8 established for supplier-balance contradiction per SA-05; existing T8 watches remain separately adjudicated.

## 6. Requirement-to-finding coverage

| Source/EIS contract | SA-02 coverage |
|---|---|
| U-11; Blueprint §§8.7, 20.4.7; EIS17-CTR-01–07 | F01 F02 F03 F05 F09 |
| Blueprint §8.10; EIS17-AUTH-01–08 | F06 F07 F08 F09 |
| Blueprint §§20.5, 20.9.3; EIS17-POS-02/04/05/11 | F01 F02 F03 F08 F09 F10 |
| Blueprint §20.9.2; EIS17-CC-01–07 | F02 F06 F07 F10 |
| Blueprint §21.1 EQ17-11; EIS17-PRIV-01–03 and HOLD-20 | F01 F04 F05 F08 F09 |
| EIS17-VER-02/05/07/11 | F09 |
| R-2 LV-1 through LV-12 | F04 F05 F06 F08 |
| Accepted SA01/03/05/04 and named MC410 holds | F07 F09 F10 |

## 7. Uncertainty register / alternatives

| ID | Uncertainty, alternative or missing evidence | Escalation |
|---|---|---|
| L17-U01 | Exact DPDP publication-date anniversary: Gazette dated 13 November 2025; electronic metadata associated with 14 November. Scheduled tranches are confirmed but authoritative computed date needs verification | Indian privacy practitioner |
| L17-U02 | Future DPDP s.7(i) employment/loss-protection legitimate-use scope for POS operator ID; existing current-law basis if processing begins before DPDP substantive commencement | Indian privacy and employment counsel |
| L17-U03 | When counter/shift summaries indirectly identify one employee | Counsel + contextual assessment |
| L17-U04 | Merchant-versus-Team LIPS fiduciary/processor roles, contracts, vendor onward transfer and international hosting | Team LIPS legal / privacy counsel |
| L17-U05 | Exact Kerala/central labour register and payroll retention by establishment size, category, coverage and labour-code transition | Kerala employment-law specialist |
| L17-U06 | Applicable income-tax maintenance rule, tax-year transition, company/partnership/proprietor status | CA / tax lawyer |
| L17-U07 | Whether POS operator ID is required by any specific GST audit trail or only merely useful | GST practitioner |
| L17-U08 | Reasoned optional counter review retention term, operator mapping expiry, log/data separation | Counsel and Founder policy |
| L17-U09 | Intermediary classification and 180-day post-cancellation registration-data duties; CERT-In five-year provider clause not automatically applicable to SaaS | IT/cyber lawyer |
| L17-U10 | Backup-region/retention and restore-erasure proof across providers; no generally confirmed fixed immutable-backup safe harbour | Privacy counsel + actual provider evidence |
| L17-U11 | Pending disputes, employment complaints and legal-hold limitation period by claim | Indian counsel |
| L17-U12 | Third-party POS real sample, lawful-source disclosures, production processing safeguards, deployed ACLs and negative tests | Merchant/vendor/engineering, separately authorized |

## 8. T1–T8 screening (recommendations only)

- **T1:** If notices, operator purpose or business-flow allocation demands a new approved product choice: refer to Mission Control; **not decided**.
- **T2:** No new established conflict between approved Product Truth sources from SA-02. SA-05's `SUP-06` cross-EIS contradiction remains established elsewhere.
- **T3:** If individual-performance/disciplinary use proposed, this is a separately governed product/privacy question, **not implicitly approved**.
- **T4:** No new product-affecting repository Delta established by this read-only review.
- **T5:** No additional Founder directive beyond the authorized mission identified.
- **T6:** Potential if privacy/retention/notice decisions materially alter availability, attribution, scope, data display or account deletion; **screen, do not decide**.
- **T7:** No row omitted or reclassified; no authority to narrow Scenario B, U-11 or permission requirements.
- **T8:** **SA-05 supplier-balance cross-EIS contradiction already established;** existing POS-source, atomicity, intake and privacy watches remain. This SA-02 report does not independently establish a new legally impossible architecture.

## 9. Questions requiring qualified India legal / privacy practitioner

1. For a Kerala merchant, exactly which current law authorizes operator-ID intake for accounting provenance, neutral POS review and individualized employee-performance analysis, separately? What changes under future DPDP ss.4, 5, 7(i) and 8?
2. What employer staff notice, worker consultation, contract wording or consent (if any) is required for each purpose? Does employment power imbalance affect consent viability?
3. Can a period/counter signal identify a sole cashier from roster and shop context, and what lawful treatment follows?
4. Who is Data Fiduciary and processor for POS source data, Smart Business normalization, merchant workplace review, AI summaries, Team LIPS support and security logs? What agreements are essential?
5. Which precise Kerala shops, wage, labour-code, attendance, payroll, EPF/ESI and tax retention rules attach to merchants by size and registration/legal form, and what periods/triggers apply?
6. What minimum historical POS operator attribution survives GST audit, tax, employment dispute and security obligations? Is pseudonymous linkage sufficient?
7. What retention terms are lawful for optional neutral counter signals, identifiable operator summaries, roster mappings, deletion tombstones and backups? Are any processing-log obligations future-applicable under DPDP Rule 8's Seventh Schedule?
8. When must employee-related data be erased after employment/account termination, with statutory records, legal holds and backup restores preserved?
9. What current and future notice, access, correction, grievance and erasure duties apply to employees as Data Principals? Does future DPDP s.17 provide any relevant exemption; what limits?
10. Confirm precisely dated DPDP commencement and repeal/transition of IT Act s.43A/SPDI framework using Gazette and current amendments.
11. Are special workplace surveillance, fairness or due-process limits triggered by POS behavioural assessment or disciplinary decisions?
12. Does a standard POS integration create any independent vendor, cross-border transfer or merchant-record sharing duty that the current customer trust wording must expressly disclose?

## 10. Mission Control disposition

**SA-02 outcome: PROVISIONAL DOCUMENTARY REVIEW COMPLETE; REFINEMENT REQUIRED.** The immutable EIS conservatively holds operator-attributed processing and can preserve neutral Scenario B, but legal purpose, parties, notice, retention and indirect-identification safeguards are not fully established. Ten finding-scoped recommendations above are offered to Mission Control; no EIS edits are made. **HOLD-20 / U-11 and qualified legal/privacy validation stay OPEN.** Existing engineering holds, cross-EIS contradiction, DPOS and independent POS assurance remain outside this room's approval. This is not compliance certification, EIS approval, EIS Lock, Stage 11 transition or implementation authorization.

**STOP FOR MISSION CONTROL SA-02 DISPOSITION.**
