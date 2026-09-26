# SB-P-1.12 — ESC-1 Founder Product Decision Record (DRAFT PACKET)

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** Source 18 v1.2 §6 Stage 3 Founder Product Decision Gate, reopened by T8 for ESC-1 only
**Status:** `DRAFT — PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING — NOT APPROVED — NOT EFFECTIVE`
**Prepared by:** Claude Code, MC-02-appointed Definition Actor, FPDR preparer only (MC-59, `communication/live/instruction1.3.md`, work package `SB-P-1.12-WP-ESC1-FPDR-DRAFT`)
**Prepared:** 2026-09-26
**Canonical baseline:** `main@5d707f5ded3cfb2d154433727425835ec73ed431` (PR #648, MC-60)
**Inputs:** the canonical ESC-1 brief `claude-code/27-esc1-founder-decision-brief.md` (PR #646, MC-58); Blueprint §§20–21; the MC-40, MC-42 and MC-44 Security reports under `specialists/`; Founder Records 03 and 04; the FCTM; Source 11; Contracts 03, 18, 21 and 22; Build Plan §15.

## 1. What this document is, and is not

This packet turns the Founder's ESC-1 replies, preserved verbatim in `communication/live/instruction1.3.md` §2, into proposed decisions for Founder confirmation. Every normalized statement in Section 3 is `PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING`. Decision IDs are **provisional**.

It is not an approved Founder Product Decision Record. It does not close ESC-1, which stays an open T8. It changes no FCTM disposition, assignment, build commitment or Blueprint text, and it does not unblock `22-§20-2`. It selects no technical mechanism and makes no claim about legal retention or production behaviour.

## 2. Founder source replies (verbatim evidence)

Given by the Founder, Riyas PK, directly to Mission Control in Founder–Mission Control chat on 2026-09-26 in three consecutive turns, and transmitted into the repository by MC-59. Reproduced exactly from `communication/live/instruction1.3.md` §2, including original spelling.

### 2.1 Founder ESC-1 decision responses

> Q1: we can give a option to stop or pause smart business, if pausing they can pause upto three months without losing their history. and in stopping we can give two options, either they can delete all the history or their history will be accessible upto three months, after three months of inactivity either through pausing or stopping the account will be deleted automatically.
> but in anycase the merchants can download thier history whenever they want if they are active or if they choose to preserve it for next three months after stopping or pausing.
> Q2: Yes
> Q3: Qualified
> Q4: Qualified
> Additional direction: owner can remove or add any number of managers or staff, and owner can be replaced with another owner (incase of business transfer or selling) but an owner cannot be removed

### 2.2 Founder ESC-1 lifecycle clarifications

> 1.If a merchant owns one or more businesses we treat them as separtae business, so stopping or pausing one business will not effect the other.
>
> 2.three month clock begin in two ways
> a)when the merchant selects pause or stop
> b)we will calculate 90 days from the last subscription end date. meaning if the merchant is still active with a paid subscription we will not consider it as an inactive account
>
> 4.Removing a manager or staff will not delete buisness history

### 2.3 Founder final clarifications

> FOUNDER ESC-1 FINAL CLARIFICATIONS
> Clock interaction: Yes — automatic 90-day period from subscription expiry
> Owner replacement: Other — qualified ownership rule
> Qualifications: we can give business transfer option so that the current owner can transfer the ownership to new owner. meaning the payment method will obviously change with this transfer, so that the new owner can add his payment details, so the previous owner can allow the new owner also with trasfer of login( whatsapp and email) both previos and new owner must receive valid transfer and receving approvals through mail or whatsapp so that smart business can ensure this is an authorised transfer

The brief's questions were: Q1 end of life; Q2 history kept intact until any final deletion (yes or no); Q3 login removal never by itself deletes the business or its history (yes or no); Q4 removal of the last active Owner's login waits until the business is closed or otherwise resolved (yes or no). Q3 and Q4 were answered **"Qualified"**, not yes or no. This packet does not convert them into a yes.

## 3. Proposed decisions (provisional IDs)

Each decision below is labelled `PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING`.

### ESC1-D1 (provisional) — Each business is independent

**Founder source:** 2.2 item 1.

**Proposed record wording:** Pause, Stop, subscription expiry, preservation windows and any later deletion apply to one business at a time. An action on one business never pauses, stops or deletes another business, and never by itself removes the person's login.

**Coupling:** the Founder's words "If a merchant owns one or more businesses" bear on G-4 (multiple-business ownership), which Founder Record 04 left open. This packet does not record a G-4 answer. See C-4 in Section 6.

### ESC1-D2 (provisional) — Pause

**Founder source:** 2.1 Q1; 2.2 item 2(a).

**Proposed record wording:** A merchant may pause a business for up to three months without losing its history. The three-month period starts when the merchant selects Pause. While paused, the merchant can download the business's permitted history. At the end of the three months, the Founder's direction is that automatic deletion follows, under ESC1-D4 and ESC1-D5. What is deleted is C-1. Whether a merchant can resume during the window is not decided here.

### ESC1-D3 (provisional) — Stop, with two choices

**Founder source:** 2.1 Q1; 2.2 item 2(a).

**Proposed record wording:** A merchant who stops a business chooses either:

- **Stop and delete:** request deletion of the business's history. Deletion covers the records that approved retention policy and any applicable legal or privacy requirements allow to be deleted, and happens only after clear notice and a chance to download; or
- **Stop and keep for three months:** the history stays accessible and downloadable for up to three months from the Stop selection, after which, in the Founder's direction, automatic deletion follows under ESC1-D4 and ESC1-D5 (what is deleted: C-1).

**Export at any time:** an active merchant, and a merchant within a Pause or Stop preservation window, can download their permitted history whenever they want (2.1 Q1, final sentence).

### ESC1-D4 (provisional) — Two clocks, recorded separately

**Founder source:** 2.2 item 2(a) and (b); 2.3 "Clock interaction".

**Proposed record wording:**

- **Explicit clock:** selecting Pause or Stop starts a **three-month** period.
- **Subscription clock:** when a subscription expires, a **90-day** inactivity period starts automatically from the last subscription end date.
- A business with an active paid subscription is not treated as inactive because of subscription expiry.

Three months and 90 days are recorded as the Founder stated them and are not treated as equal. How the two clocks interact when both could apply is open (C-2).

### ESC1-D5 (provisional) — History intact until a permitted deletion

**Founder source:** 2.1 Q2 ("Yes"); 2.2 item 4.

**Proposed record wording:** Until a deletion that this policy permits (ESC1-D2 to ESC1-D4), the business's financial history and its authority and audit history stay intact. No individual can erase them through an incidental business, login or staff deletion. Any permitted deletion is a separate, governed action: notified in advance, preceded by a download opportunity, limited to what approved retention policy and legal or privacy requirements allow, and itself recorded.

### ESC1-D6 (provisional) — Managers and staff

**Founder source:** 2.1 "Additional direction"; 2.2 item 4. This answers the staff part of the qualified Q3.

**Proposed record wording:** The Owner may add or remove any number of Managers and staff, within the approved permission model. Removing a Manager or staff member never deletes business history or the record of what they were authorized to do and did. Removal does not give anyone Owner financial intelligence by default.

### ESC1-D7 (provisional) — The Owner is transferred, not removed

**Founder source:** 2.1 "Additional direction" and Q4 ("Qualified"); 2.3 "Owner replacement" and "Qualifications".

**Proposed record wording:** An Owner cannot be removed from an active business. Ownership can change only through an explicit business transfer from the current Owner to a new Owner, for example when a business is sold. The transfer is valid only when both the current Owner and the incoming Owner approve it through their own verified email or WhatsApp. The incoming Owner provides their own payment details. The business's financial, authority and audit history continues unbroken through the transfer.

**What "transfer of login (whatsapp and email)" is proposed to mean:** the incoming Owner's own verified email and WhatsApp become the business's Owner contact and sign-in identity. It does **not** mean sharing passwords, handing over sessions or tokens, transferring possession of a mailbox or phone number, or passing on the previous Owner's payment credentials. Neither approval is automatic. If the Founder meant something different, this wording must be corrected before approval.

**Open:** what happens when an Owner wants to leave without transferring or stopping the business (C-3).

## 4. Qualified answers to Q3 and Q4

| Brief question | Founder answer | What the Founder's directions answer | What stays open |
|---|---|---|---|
| Q3 — login removal never by itself deletes the business or its history | Qualified | Staff and Manager removal never deletes history (ESC1-D6). History stays intact until a permitted deletion (ESC1-D5). Per-business actions never remove a login (ESC1-D1) | Whether removing an **Owner's** own login, as distinct from a transfer, can ever delete a business outside ESC1-D2 to ESC1-D4 (C-3) |
| Q4 — last active Owner's login removal waits until the business is closed or otherwise resolved | Qualified | An Owner cannot be removed; ownership changes only by dual-approved transfer (ESC1-D7) | The path for an Owner who wants to leave without transfer or Stop (C-3) |

## 5. Reconciliation with approved sources and tensions

These are flagged, not resolved.

| Source | Relationship | Classification for Mission Control |
|---|---|---|
| Contract 22 §20 "keep historical records durable" (`22-§20-2`) | ESC1-D3 "Stop and delete" and automatic deletion after the windows allow history to end. ESC1-D5 keeps it intact until then | Mission Control to decide whether this is a clarification of an approved requirement (T1 answer) or a change to it (T7). Either way it needs explicit Founder approval |
| Contract 21 §19 auditability (`21-§19-1`–`21-§19-8`) | Deletion would also end authority and audit history. ESC1-D5 requires the deletion itself to be recorded | Same as above |
| Contract 18 §10 (no implied immediate deletion without notice and choice) and §11 (export before final deletion; no data hostage) | Consistent: Stop is an explicit choice, and ESC1-D3 and ESC1-D5 require notice and download | Consistent |
| Contract 18 §12 and Build Plan §15 item 6: retention and deletion duration "remains unresolved"; historical 60- and 180-day rules must not be silently reinstated | The Founder's three months and 90 days appear to supply this duration | New Founder decision on a question that Contract 18 places with `SB-P-1.19`. Mission Control to decide how it is recorded and allocated (C-5) |
| Contract 18 §6 states "paused/restricted", "retained/archive", "reactivated", "scheduled/final deletion" | ESC1-D2 to ESC1-D4 fit these state names | Consistent at the level of state names; the behaviour is new |
| Source 11 "Business owners own their data"; Contract 22 §23 | Consistent with download at any time and merchant-chosen deletion | Consistent |
| Owner and business transfer (ESC1-D7) | No approved source or FCTM row describes an ownership transfer. Contract 21 §4 defines the Owner as the highest authority, and Contract 20 §16 as the initial highest authority | **T3:** new product behaviour. Its build commitment, classification and owning mission are not assigned (C-5) |
| G-4 multiple-business ownership | 2.2 item 1 refers to a merchant owning one or more businesses | Possible answer to G-4, for Mission Control to confirm with the Founder (C-4) |

## 6. Minimal Founder clarification (only what blocks honest approval)

- **C-1 — What "account" means.** When the Founder says "the account will be deleted automatically", does that mean the business (its workspace and history), consistent with ESC1-D1, rather than the person's whole Smart Business login?
- **C-2 — Overlapping clocks.** If a merchant pauses or stops a business that still has a paid subscription, or both clocks run, which period governs deletion?
- **C-3 — Owner leaving without transfer.** If an Owner wants to leave but not transfer the business, is Stop (ESC1-D3) the only route, so that an Owner's login is never removed while they own an active business?
- **C-4 — Multiple ownership (G-4), for Mission Control to decide whether to ask.** Do the words "owns one or more businesses" mean that one person may own more than one business?
- **C-5 — Allocation, through Mission Control.** Should Owner transfer and the Pause, Stop and timed-deletion lifecycle be built in SB-P-1.12, or allocated to `SB-P-1.19` (lifecycle), with SB-P-1.12 providing the authority, history-integrity and transfer-authorization rules they rely on?

### Not blocking this record (later design, mainly `SB-P-1.19`)

Resuming during a preservation window; activity measures other than subscription expiry; calendar and time-zone arithmetic; notification and grace steps; the exact records removable under legal or approved retention requirements; refunds, settlement and subscription changeover on transfer; payment-method verification; channel-possession proof and approval strength; and how the Owner API delete path and the Auth-user cascade are blocked or governed.

## 7. Security, identity and payment obligations (conditions, not mechanisms)

- **Deletion paths.** Before any deletion this policy permits can be built, the Owner API `DELETE` path and the Auth-user cascade must be blocked or governed so that deletion happens only through the governed ESC1-D3 to ESC1-D5 route (Blueprint §21.1 ESC-1; MC-40 SEC-S7-01).
- **History integrity.** Staff removal, login removal and ownership transfer must not remove financial, authority or audit history (ESC1-D5, ESC1-D6).
- **Transfer authorization.** A transfer requires two independent approvals from the current and incoming Owners, each through a channel verified as theirs. It must be protected against takeover, and must never involve credential, session or mailbox handover. The transfer must be recorded with both approvals, the timing and the resulting authority change. The kernel's authoritative recheck applies at the transfer's commit (Blueprint §20.3 E4).
- **Payment.** The incoming Owner supplies their own payment method. No previous-Owner payment credential is reused or exposed. No payment-processor or PCI action is implied.
- **Controlled deletion.** Deletion is notified, export-first, limited to what policy and law allow, irreversible only through a controlled process, and proven by a deletion record (Contract 18 §12).
- **Independent review.** Each of these needs independent Security & Permissions Architecture review of its eventual design.

## 8. Affected FCTM rows (unchanged)

| Row | Current state | Effect once a Founder record is approved |
|---|---|---|
| `22-§20-2` | `IN SCOPE`; Stage 7 `BLOCKED` by ESC-1 | Can be reassessed against the approved policy in a separately authorized reconciliation |
| `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5`, `BP-§7-1` | `IN SCOPE`; durability conclusion held | Same |
| `21-§4-1`, `20-§16-1`, `22-§5-2` (Owner) | `IN SCOPE` | Related to ESC1-D7. No change proposed; the transfer's allocation is C-5 |
| `22-§23-1`, `22-§23-5` | `IN SCOPE` | Related to export and staff data. No change proposed |

No row is omitted, deferred or reclassified by this packet.

## 9. Proposed next steps, each needing its own authorization

1. Mission Control reviews this packet and brings only the indispensable points (C-1 to C-3, and C-4 and C-5 as Mission Control decides) to the Founder.
2. The Founder confirms or corrects Section 3 wording.
3. A final Founder Product Decision Record is prepared and merged canonically (proposed path: `communication/missions/SB-P-1.12/founder/05-esc1-founder-decision-record.md`).
4. A separately authorized Blueprint and FCTM reconciliation, including any T3 or T7 allocation decided at C-5.
5. Independent security design review of deletion governance and transfer authorization.
6. Mission Control disposition of ESC-1, then Stage 8 as a separate gate.

## 10. Founder confirmation (to be completed only after Mission Control review)

- [ ] ESC1-D1 to ESC1-D7 wording in Section 3 reflects my decisions, as corrected.
- [ ] Answers to C-1, C-2 and C-3 (and C-4 and C-5 if asked).
- [ ] I understand this record does not itself build, delete or transfer anything, and that deletion and transfer need later design and security review.

`ESC-1 FPDR DRAFT PACKET — PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING — NOT APPROVED — ESC-1 T8 OPEN — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/PRODUCTION AUTHORITY.`
