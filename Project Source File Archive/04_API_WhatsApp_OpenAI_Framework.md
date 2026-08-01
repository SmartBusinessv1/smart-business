# 04_API_WhatsApp_OpenAI_Framework.md

# Smart Business V2.2

## API / WhatsApp / OpenAI Communication Framework

Parent: Lighthouse Information Publishing Service (LIPS)\
Technology Unit: Team LIPS\
Product: Smart Business

------------------------------------------------------------------------

# Document Purpose

This document defines the communication and intelligence layer of Smart
Business.

Responsibilities:

-   WhatsApp message routing
-   Meta Cloud API communication
-   OpenAI processing
-   Voice transcription
-   Receipt vision processing
-   Permission enforcement
-   Automation execution

Related sources:

-   00_Lighthouse_Constitution.md = Philosophy
-   01_Smart_Business_Master_System_Manifesto.md = Product rules
-   02_Supabase_Architecture_Framework.md = Data truth
-   03_Lovable_Build_Framework.md = User experience

------------------------------------------------------------------------

# 1. Core Communication Philosophy

Smart Business follows:

AI Assistant, Not AI Judge.

The system:

-   observes
-   remembers
-   organizes
-   suggests

The owner decides.

------------------------------------------------------------------------

# 2. Meta WhatsApp Webhook Architecture

Primary endpoint:

/api/whatsapp-webhook

Responsibilities:

-   Meta verification handshake
-   inbound message intake
-   sender identification
-   permission routing
-   response delivery

Graph API version must use environment configuration.

Do not hardcode API versions.

------------------------------------------------------------------------

# 3. Identity Router

Every incoming phone number must be classified.

Order:

1.  Owner lookup
2.  Employee lookup
3.  Supplier lookup
4.  Unknown lead flow

Each role receives different permissions.

------------------------------------------------------------------------

# 4. Unknown User Protection

Unknown users must not trigger:

-   Whisper
-   Vision OCR
-   GPT processing

Send onboarding:

https://smartbusiness.teamlips.com/start

Respect growth controls:

-   OPEN
-   WAITLIST
-   CLOSED

------------------------------------------------------------------------

# 5. Multi Modal Processing Pipeline

## Text

WhatsApp text → GPT parser → structured JSON

## Voice

WhatsApp audio → Whisper transcription → GPT parser

## Photos

Receipt image → Vision OCR → GPT parser

Final extraction:

-   amount
-   type
-   party
-   purpose

------------------------------------------------------------------------

# 6. Role Permission System

## Owner

Allowed:

-   transaction entry
-   reports
-   Ask CFO
-   reminders
-   automation approvals
-   voice replies if enabled

## Employee

Allowed:

-   add transactions
-   upload receipts
-   attendance
-   correction requests
-   own attendance reports

Blocked:

-   profit reports
-   business analytics
-   owner data

## Supplier

Allowed:

-   receive purchase requests
-   confirm orders

Blocked:

-   merchant intelligence access

------------------------------------------------------------------------

# 7. Voice Communication Rule

Voice replies are owner-only.

Employees:

Text replies only.

Suppliers:

Text replies only.

------------------------------------------------------------------------

# 8. Zero Compute FAQ Fortress

Before AI calls:

Check local FAQ patterns.

If matched:

Return stored answer.

No AI token usage.

Handles:

-   login help
-   payment questions
-   privacy questions
-   common support

------------------------------------------------------------------------

# 9. Smart Reminder Engine

Supports:

-   business reminders
-   compliance reminders
-   supplier reminders
-   personal reminders

Interactive buttons:

Short term:

-   Done
-   30 minutes
-   1 hour
-   2 hours

Long term:

-   Tomorrow
-   Next week
-   Custom

------------------------------------------------------------------------

# 10. Attendance Intelligence

Never judge attendance automatically.

Example:

Employee scan:

10:15 AM

Shift:

9:00 AM

Message:

Report difference.

Do not accuse.

Owner provides context.

Store:

Actual event + approved business context.

------------------------------------------------------------------------

# 11. Supplier Order Automation

Default:

Ask owner confirmation.

Owner may delegate authority.

Example:

If stock reaches 8 packets, order 50 packets.

Smart Business executes only stored owner instructions.

------------------------------------------------------------------------

# 12. Counter Review Intelligence

For POS connected merchants.

Monitor:

-   void bills
-   deleted bills
-   unusual discounts
-   mismatches

Never say:

Fraud detected.

Say:

Please review this counter activity.

Owner decides.

------------------------------------------------------------------------

# 13. Ask CFO Engine

Ask CFO is read-only intelligence.

Allow:

SELECT queries

Block:

-   DROP
-   DELETE
-   UPDATE
-   INSERT
-   ALTER
-   TRUNCATE

Unsafe attempts go to security logs.

------------------------------------------------------------------------

# 14. Daily Automation Engine

Endpoint:

/api/v1/daily-cron-trigger

Runs:

-   morning CFO pulse
-   reminders
-   compliance checks
-   inventory scans
-   automation rules
-   payroll preparation

Protect using secret authorization headers.

------------------------------------------------------------------------

# 15. Support Escalation

If FAQ and AI cannot solve:

Create support request.

Keep normal business functions active.

Do not interrupt bookkeeping.

------------------------------------------------------------------------

# 16. Cost Protection Rules

Protect solo operator economics.

Use:

-   FAQ before AI
-   role checks before processing
-   daily limits
-   efficient prompts
-   background batching

------------------------------------------------------------------------

# Final Lighthouse Principle

Smart Business should feel like a trusted assistant beside the merchant.

Not a controller.

Not a judge.

Remember.

Remind.

Assist.

The human owns the decision.

Team LIPS\
Innovating Freedom
