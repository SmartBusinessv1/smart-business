# **02\_Supabase\_Architecture\_Framework.md**

# **Smart Business V2.2**

## **Supabase Architecture Framework**

Parent: Lighthouse Information Publishing Service (LIPS)
 Technology Unit: Team LIPS
 Product: Smart Business
 Tagline: Profiting Happiness

Document Purpose: This document defines the official Supabase PostgreSQL database architecture, security model, automation lifecycle, and data governance principles for Smart Business.

This document overrides all previous experimental database prompts.

---

# **1\. Core Database Philosophy**

Smart Business database design follows Lighthouse principles:

Technology assists humans.

Technology does not replace human ownership.

The database must support:

·       clarity

·       privacy

·       reliability

·       scalability

·       sustainable operating cost

The system follows:

“AI Assistant, Not AI Judge.”

AI can:

·       organize information

·       identify patterns

·       create reminders

·       suggest insights

AI cannot:

·       accuse employees

·       make final business decisions

·       override human authority

---

# **2\. Infrastructure Assumption**

Production target:

Supabase Pro

Region preference:

AWS Mumbai (ap-south-1) or closest available low-latency India region.

Architecture goal:

Fast WhatsApp-first operations for Kerala merchants.

Performance targets must be verified using:

·       EXPLAIN ANALYZE

·       realistic datasets

·       production monitoring

Avoid unrealistic fixed guarantees.

---

# **3\. Foundation Database Tables**

## **3.1 public.users**

Purpose:

Merchant identity and tenant ownership.

Stores:

·       id UUID primary key

·       owner\_name

·       shop\_name

·       phone\_number UNIQUE (E.164 format)

·       preferred\_language

o   english

o   malayalam

o   manglish

·       business\_type

·       subscription status

·       tier level

·       subscription timestamps

·       created\_at

·       updated\_at

Phone number lookup powers WhatsApp identity matching.

---

# **3.2 public.transactions**

Purpose:

Universal business ledger.

Supports:

·       WhatsApp text entries

·       voice entries

·       receipt photos

·       staff entries

·       POS imports

·       dashboard entries

Transaction types:

·       income

·       expense

·       credit

·       repayment

Required:

·       user\_id

·       amount numeric(15,2)

·       transaction\_type

·       party

·       purpose

·       input\_source

·       created\_by\_employee\_id nullable

·       attachment\_url

·       created\_at

---

# **3.3 public.customer\_credits**

Purpose:

Kerala Kadam / Udhar management.

Philosophy:

Credit Awareness Assistant.

Not Debt Judge.

Stores:

·       customer name

·       optional phone

·       current balance

·       merchant configured limit

·       last transaction date

Smart Business informs.

Owner decides.

---

# **3.4 public.scheduled\_reminders**

Purpose:

Smart Reminder Assistant.

Supports:

·       business reminders

·       personal reminders

·       compliance reminders

·       supplier reminders

·       meetings

Avoid rigid category constraints.

Use flexible reminder categories.

---

# **3.5 public.employees**

Purpose:

Staff identity and permission management.

Default employee permissions:

can\_add\_transactions \= true

can\_request\_attendance\_correction \= true

can\_view\_self\_attendance\_reports \= true

can\_view\_cash\_summary \= false

can\_view\_reports \= false

can\_view\_inventory \= false

can\_view\_hr \= false

can\_edit\_attendance \= false

Principle:

Employees can contribute data and understand themselves.

Employees cannot access owner intelligence.

---

#

# **3.6 public.attendance\_logs**

Purpose:

Employee attendance tracking.

Supports:

·       QR attendance

·       check-in

·       check-out

·       shift tracking

·       late reporting

Example:

Employee:

“Attendance marked. Your shift started at 9:00 AM. You reported at 9:30 AM. Late by 30 minutes.”

Owner receives visibility.

No automatic punishment.

 Attendance Human Context Override:



Never overwrite original attendance events.



Store:



- actual\_check\_in

- actual\_check\_out

- approved\_check\_in

- approved\_check\_out

- adjustment\_reason

- approved\_by

- approved\_at



Example:



Actual:



Employee checked in:

10:15 AM



Owner context:



"Employee was sent to market from 9 AM."



Final record:



actual\_check\_in \= 10:15



approved\_check\_in \= 09:00



reason \= Sent to market



Principle:



Raw data records what happened.



Human context explains why it happened.

---

# **3.7 public.attendance\_correction\_requests**

Purpose:

Respectful correction workflow.

Employee can request.

Owner approves.

Stores:

·       employee\_id

·       attendance\_log\_id

·       reason

·       status

o   pending

o   approved

o   rejected

·       owner\_response

·       resolved\_at

---

# **3.8 public.payroll\_reports**

Purpose:

Transparent payroll summaries.

Generated by system.

Approved by owner.

Only after approval:

Employee receives:

·       total attendance

·       approved corrections

·       rejected corrections

·       final salary summary

---

# **3.9 public.inventory**

Purpose:

Smart Stock Assistant can be enabled as an add-on for Tier 1 merchants.



Smart Stock Intelligence.



Inventory management is independent from POS integration.



Tier 1 merchants may use inventory through the Smart Stock Assistant add-on.



Tier 2 merchants may receive automatic inventory updates through POS integrations.



Smart Business supports:



- manual stock updates

- WhatsApp stock updates

- Excel/CSV imports

- POS synchronization



Required fields:



- id UUID primary key

- user\_id UUID references public.users(id)

- product\_name

- category

- current\_quantity numeric(15,3)

- unit\_type



Supported unit examples:



- piece

- packet

- box

- carton

- dozen

- kilogram

- gram

- litre

- millilitre

- meter

- custom



Additional fields:



- minimum\_quantity

- reorder\_quantity

- preferred\_supplier\_id

- batch\_number

- expiry\_date

- purchase\_price

- last\_stock\_update\_source



Allowed update sources:



- manual

- whatsapp

- excel\_upload

- pos\_sync



Principle:



Smart Business remembers inventory information.



The owner remains responsible for business decisions.

 **\#\# 3.9A public.suppliers**



Purpose:



Merchant supplier relationship memory.



Stores supplier information required for reorder assistance.



Required fields:



- id UUID primary key

- user\_id UUID references public.users(id)

- supplier\_name

- contact\_person

- phone\_number

- location

- supplied\_categories

- preferred\_order\_method

- created\_at

- updated\_at



Examples:



ParleG Biscuit → Moorthy Supplies, Guruvayoor



Milk → Milma Distributor



Smart Business uses this memory to reduce repeated instructions.



Supplier communication is text only.



Suppliers never receive AI voice replies.



Suppliers never access merchant intelligence.

---

# **3.10 public.pos\_integrations**

Purpose:

Connect existing merchant workflows.

Allowed:

Standard POS bridges.

Rejected:

Custom POS modifications inside core platform.

Custom workflows belong in external extension layers.

---

# **3.11 public.business\_alerts**

Purpose:

Operational awareness.

Examples:

·       unusual patterns

·       cash differences

·       inventory warnings

AI reports observations.

Humans decide meaning.

---

# **3.12 public.security\_quarantine\_logs**

Purpose:

Security protection.

Stores:

·       unsafe content

·       suspicious payloads

·       moderation issues

·       blocked operations

Separate from business alerts.

---

# **3.13 public.system\_errors**

Purpose:

Reliability monitoring.

Stores:

·       API failures

·       webhook errors

·       external service failures

·       raw payload JSON

·       severity

·       resolution status

Displayed in super-admin.

---

# **3.14 public.marketing\_leads**

Purpose:

Start page funnel.

Route:

smartbusiness.teamlips.com/start

Stores:

·       lead information

·       business type

·       pain points

·       recommended plan

·       lead status

---

# **3.15 public.platform\_settings**

Purpose:

Founder operational control.

Supports:

Start Page Growth Control.

Modes:

open: New merchants can onboard.

waitlist: Collect interest but pause activation.

closed: Temporarily stop onboarding.

Controlled from:

/super-admin

Principle:

Do not grow faster than ability to serve.

\#\# 3.15A public.file\_import\_jobs



Purpose:



Safely manage merchant uploads.



Supports:



- inventory Excel upload

- customer credit upload

- employee list upload

- supplier list upload

- historical data migration



Required fields:



- id

- user\_id

- import\_type

- file\_url

- status



Status:



pending

processing

completed

partial\_success

failed



Additional:



- rows\_processed

- rows\_failed

- error\_report\_url

- created\_at

- completed\_at



Never silently ignore failed rows.



Provide clarity to merchant.

---

# **3.16 public.automation\_rules**



Purpose:



Store owner delegated automation instructions.



Smart Business does not create authority.



The owner can delegate authority.



Examples:



Owner:



"If ParleG stock reaches 8 packets, order 50 packets."



Stored rule:



Condition:

Stock \<= 8 packets



Action:

Order 50 packets



Supplier:

Moorthy Supplies



Approval:

Pre-approved by owner





Required fields:



- id UUID primary key

- user\_id UUID references public.users(id)

- rule\_type

- trigger\_condition jsonb

- action\_payload jsonb

- approval\_mode



Approval modes:



manual



pre\_approved





Additional fields:



- approved\_by

- approved\_at

- max\_limit

- status

- last\_triggered\_at

- created\_at

- updated\_at



Restricted operations must always require confirmation.



AI executes delegated authority.



AI does not replace ownership.

---

# **4\. Index Architecture**

Use tenant-scoped composite indexes.

Core:

users(phone\_number)

transactions(user\_id, created\_at DESC)

transactions(user\_id, transaction\_type, created\_at DESC)

customer\_credits(user\_id, customer\_name)

scheduled\_reminders(user\_id, due\_date)

employees(user\_id, phone\_number)

attendance\_logs(employee\_id, created\_at DESC)

attendance\_logs(user\_id, created\_at DESC)

inventory(user\_id, product\_name)

inventory(user\_id, expiry\_date)

pos\_integrations(user\_id, status)

 suppliers(user\_id, supplier\_name)



suppliers(user\_id, phone\_number)



automation\_rules(user\_id, status)



automation\_rules(user\_id, rule\_type, status)



file\_import\_jobs(user\_id, created\_at DESC)



inventory(user\_id, category)

---

# **5\. Row Level Security Architecture**

Every merchant-owned table must enable RLS.

Rules:

Owners: Access only their business data.

Employees: Permission-limited access.

Public: No direct table access.

Backend functions: Use service role securely server-side only.

Never expose service role keys.

Avoid:

USING (true) WITH CHECK (true)

as public bypass patterns.

---

# **6\. Ask CFO Database Access**

Ask CFO is read-only intelligence.

Allowed:

SELECT queries.

Blocked:

DROP DELETE TRUNCATE ALTER UPDATE INSERT

Suspicious attempts:

Write to security\_quarantine\_logs.

---

# **7\. Automation Architecture**

Powered through:

Supabase pg\_cron \+ secure backend endpoints.

---

## **Morning Pulse**

06:00 AM IST

Tasks:

·       daily summary

·       reminders

·       compliance alerts

---

## **Attendance Review**

09:15 AM IST

Tasks:

·       missing check-ins

·       late reporting

---

## **Closing Review**

10:00 PM IST

Tasks:

·       cash review

·       daily summary

·       pending credits

---

# **8\. Storage Lifecycle**

Recent media:

Supabase Storage.

Older media:

Cloudflare R2 archive.

Rules:

Verify successful migration before deletion.

Track:

·       storage\_provider

·       archived\_at

---

# **9\. Subscription Lifecycle**

Never suddenly delete customer history.

Stages:

active

↓

past\_due

↓

paused

↓

archived

↓

scheduled deletion only after:

·       notification

·       export opportunity

·       grace period

People first.

---

# **10\. Super Admin Cockpit Principles**

Purpose:

Solo founder operational visibility.

Includes:

·       system health

·       errors

·       quarantine

·       backups

·       onboarding controls

Not for bypassing customer trust.

---

# **Final Principle**

The database is not just storage.

It is the memory layer of trust between Smart Business and merchants.

Protect the data.

Respect the human.

Assist the decision.

Never replace ownership.

# Human Context and Delegated Authority Principle



Smart Business understands that business reality cannot be judged from data alone.



A late employee may have been helping the business.



A low stock item may intentionally not be reordered.



An unusual transaction may have a valid reason.



Therefore:



System data \+ human context \= business truth.



Smart Business may execute tasks that the owner has clearly delegated.



But ownership always remains with the human.

Team LIPS
 Innovating Freedom
