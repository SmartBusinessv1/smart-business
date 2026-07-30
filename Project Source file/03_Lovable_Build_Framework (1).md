# 03_Lovable_Build_Framework.md

# Smart Business V2.2

## Lovable Build Framework

Parent: Lighthouse Information Publishing Service (LIPS)\
Technology Unit: Team LIPS\
Product: Smart Business\
Tagline: Profiting Happiness

------------------------------------------------------------------------

# Document Purpose

This document defines how Smart Business must be built inside Lovable.

This is the user experience and frontend execution truth.

Hierarchy:

-   00_Lighthouse_Constitution.md = Why we build
-   01_Smart_Business_Master_System_Manifesto.md = What we build
-   02_Supabase_Architecture_Framework.md = Where truth is stored
-   03_Lovable_Build_Framework.md = How users experience the product

Lovable must not redefine database architecture.

Database truth comes from the Supabase framework.

------------------------------------------------------------------------

# 1. Core Philosophy

Smart Business follows:

AI Assistant, Not AI Judge.

The interface must reduce merchant mental load while preserving human
ownership.

Smart Business assists the owner. It never replaces the owner.

------------------------------------------------------------------------

# 2. Routing Architecture

Domain:

smartbusiness.teamlips.com

Routes:

-   / : Public landing page
-   /how-it-works : Product explanation
-   /start : Merchant onboarding
-   /contact : Contact and trust page
-   /dashboard : Merchant cockpit
-   /super-admin : Founder cockpit
-   /privacy-policy : Privacy disclosure
-   /terms-of-service : Terms

------------------------------------------------------------------------

# 3. Public Website

Smart Business message:

Do not replace the merchant's existing habits.

Improve them.

Smart Business - Your AI Business Manager on WhatsApp.

Built in Kerala. Built for Kerala businesses.

------------------------------------------------------------------------

# 4. Dashboard Architecture

Dashboard sections:

## Financial Command Centre

-   Cash summary
-   Income
-   Expenses
-   Credits
-   Reports
-   Ask CFO

## Ask CFO

Allows natural business questions.

AI analyses.

Owner decides.

## Import Export Centre

Uploads:

-   Inventory Excel
-   Customer credit records
-   Supplier lists
-   Employee lists

Downloads:

-   Ledger reports
-   Inventory reports
-   Credit reports
-   Payroll reports

------------------------------------------------------------------------

# 5. Smart Stock Assistant

Inventory is independent from POS.

Tier 1 merchants may enable Smart Stock Assistant add-on.

Tier 2 merchants may use automatic POS synchronization.

Supported units:

-   pieces
-   packets
-   boxes
-   cartons
-   kg
-   grams
-   litres
-   custom

------------------------------------------------------------------------

# 6. POS Intelligence

POS supports:

-   sales sync
-   stock sync
-   counter review

Never accuse employees.

Say:

Please review.

Do not say:

Fraud detected.

------------------------------------------------------------------------

# 7. Communication Hierarchy

Owner ↓ Smart Business Assistant ↓ Employees and Suppliers

Smart Business carries the owner's instruction.

It does not become the authority.

Example:

Correct:

Your shift has been updated by Ananth Sir.

------------------------------------------------------------------------

# 8. Voice Permission Rules

Owner:

-   Text
-   Voice input
-   Voice reply if add-on enabled

Employees:

-   Text
-   Voice input
-   Receipt upload
-   Text replies only

Suppliers:

-   Text communication only

------------------------------------------------------------------------

# 9. Human Context Override

Raw data alone is not business truth.

Example:

Employee check-in: 10:15

Owner says:

Sent to market from 9.

Store both:

Actual event + owner context.

------------------------------------------------------------------------

# 10. Delegated Authority Automation

Default:

Ask confirmation.

Owner can delegate repeated actions.

Example:

If ParleG reaches 8 packets, order 50.

Later:

Ordered 50 ParleG from Moorthy Supplies.

Pre-approved by owner.

------------------------------------------------------------------------

# 11. Smart Reminders

Supports:

-   Business reminders
-   Personal reminders
-   Compliance reminders
-   Supplier reminders

------------------------------------------------------------------------

# 12. Super Admin Cockpit

Route:

/super-admin

Controls:

-   System health
-   Errors
-   Quarantine review
-   Backups
-   Growth control

Start page modes:

-   open
-   waitlist
-   closed

------------------------------------------------------------------------

# 13. Static Element ID Directive

Every major React component requires permanent identifiers.

Examples:

id="ask-cfo-input"

id="inventory-upload-input"

id="super-admin-growth-control"

------------------------------------------------------------------------

# 14. Final Principle

Smart Business is the memory, reminder, and intelligence layer beside
the merchant.

Respect the human.

Assist the decision.

Never take ownership.

Team LIPS

Innovating Freedom
