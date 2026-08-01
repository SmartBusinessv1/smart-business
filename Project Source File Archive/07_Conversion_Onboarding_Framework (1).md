# 07_Conversion_Onboarding_Framework.md

# Smart Business V2.2

## Conversion, Quiz, Survey & Onboarding Framework

Parent: Lighthouse Information Publishing Service (LIPS)\
Technology Unit: Team LIPS\
Product: Smart Business\
Primary Route: smartbusiness.teamlips.com/start

------------------------------------------------------------------------

# Document Purpose

This document defines the official `/start` onboarding and conversion
experience for Smart Business.

The `/start` flow is not a normal signup form.

It is the first guided business conversation between Smart Business and
a Kerala merchant.

It must:

-   create trust
-   educate without pressure
-   discover business needs
-   recommend the correct setup
-   avoid overwhelming the user
-   feel premium, simple, and interactive

------------------------------------------------------------------------

# 1. Core Philosophy

The onboarding flow must follow the Lighthouse principle:

Help before selling.

The merchant should feel:

"Smart Business understands my shop."

Not:

"This company is pushing software."

The survey must enrich the merchant's existing workflow.

Never insult notebooks, old methods, POS systems, or manual habits.

Correct positioning:

Smart Business is your new business memory on WhatsApp.

------------------------------------------------------------------------

# 2. Route

Primary route:

/start

Deprecated:

/survey

All website CTAs should point to:

https://smartbusiness.teamlips.com/start

------------------------------------------------------------------------

# 3. Start Page Growth Control

The `/start` page must obey platform settings controlled from
`/super-admin`.

Modes:

OPEN

New merchants can complete onboarding.

WAITLIST

New merchants can register interest, but activation is paused.

CLOSED

New signup is temporarily unavailable.

Customer-facing copy must remain respectful.

Example for waitlist:

Smart Business is currently onboarding merchants in controlled batches
to protect service quality.

Please leave your details. We will contact you when your activation slot
opens.

------------------------------------------------------------------------

# 4. Visual Experience Standard

The quiz must feel:

-   premium
-   interactive
-   mobile-first
-   calm
-   professional
-   Kerala-local but modern

Use subtle animated Lottie illustrations on each screen.

Lottie animation rules:

-   must be lightweight
-   must not distract from the question
-   must visually explain the current feature
-   must not slow down page loading
-   must have static fallback images
-   must respect accessibility preferences

Avoid cartoonish or childish animations.

Preferred style:

-   clean line animation
-   soft dashboard motion
-   WhatsApp message bubbles
-   receipt scan animation
-   reminder bell animation
-   stock shelf animation
-   staff attendance animation

------------------------------------------------------------------------

# 5. Quiz Structure

The recommended onboarding flow contains 10 screens.

Each screen should feel like one simple conversation.

------------------------------------------------------------------------

## Screen 1: Language Selection

Purpose:

Set communication language.

Options:

-   English
-   Malayalam
-   Manglish

Lottie idea:

Three chat bubbles gently switching language.

Static IDs:

id="start-language-screen"

id="language-english-option"

id="language-malayalam-option"

id="language-manglish-option"

------------------------------------------------------------------------

## Screen 2: Owner Identity

Question:

What is your name, Muthalali?

Collect:

-   owner_name
-   phone_number if not already detected

Lottie idea:

Owner profile card forming softly.

------------------------------------------------------------------------

## Screen 3: Business Identity

Question:

What is your shop or business name?

Collect:

-   shop_name
-   business_type

Business types:

-   Bakery
-   Grocery
-   Mini-mart
-   Supermarket
-   Cafe
-   Restaurant
-   Other local retail

Lottie idea:

Small storefront icon lighting up.

------------------------------------------------------------------------

## Screen 4: Current Business Method

Question:

How are you managing your business records today?

Options:

-   Notebook
-   Excel
-   POS / billing software
-   WhatsApp notes
-   Memory
-   Mix of all

Principle:

Do not shame existing method.

Lottie idea:

Notebook transforming into WhatsApp business memory.

------------------------------------------------------------------------

## Screen 5: Monthly Turnover Range

Question:

What is your average monthly sales turnover?

Options may use ranges.

Purpose:

Estimate business scale and recommend suitable setup.

Lottie idea:

Simple sales graph rising softly.

Do not display fear-based loss claims.

------------------------------------------------------------------------

## Screen 6: Daily Pain Discovery

Question:

What creates the most mental stress in your daily business?

Options:

-   remembering transactions
-   customer credits / Udhar
-   stock shortage
-   expiry/spoilage
-   staff attendance
-   supplier orders
-   license renewals
-   cash counter differences

Lottie idea:

Multiple task cards organizing into one clean checklist.

------------------------------------------------------------------------

## Screen 7: Workflow Feature Demonstration

Purpose:

Show invisible product demo.

Example:

Merchant sees:

Speak: "Paid ₹2,500 to Milma"

Then animation shows:

WhatsApp message → Smart Business → Ledger saved

Lottie idea:

Voice waveform converting into a saved ledger card.

------------------------------------------------------------------------

## Screen 8: Recommended Setup

Show a personalized recommendation.

Possible recommendations:

Smart Business Ledger

For merchants needing:

-   voice ledger
-   receipts
-   reminders
-   customer credit tracking

Smart Business Manager

For merchants needing:

-   POS connection
-   staff attendance
-   payroll
-   inventory intelligence
-   counter review

Add-on suggestions:

-   Smart Stock Assistant
-   Compliance Shield
-   Malayalam Voice Reply Assistant
-   Attendance & Payroll
-   Perishable Stock Expiry Alerts

Lottie idea:

Plan card assembling based on selected needs.

------------------------------------------------------------------------

## Screen 9: Trust & Privacy Assurance

Purpose:

Handle the biggest Kerala merchant fear before activation.

Message:

Your business data belongs to you.

Smart Business is not connected with GST, Income Tax, or any
government/private reporting platform.

Team LIPS does not sell, share, or voluntarily provide your business
records to any third party.

Employees cannot see owner financial reports.

AI assists. Owner decides.

Lottie idea:

Private vault / locked shop ledger animation.

------------------------------------------------------------------------

## Screen 10: Activation CTA

Purpose:

Move to activation or waitlist.

If OPEN:

CTA:

Start Smart Business Setup

If WAITLIST:

CTA:

Join Priority Waitlist

If CLOSED:

CTA:

Request Callback

Lottie idea:

WhatsApp assistant ready with first message.

------------------------------------------------------------------------

# 6. Lead Capture Data

Save to:

public.marketing_leads

Capture:

-   owner_name
-   phone_number
-   shop_name
-   business_type
-   preferred_language
-   current_method
-   turnover_range
-   selected_pains
-   recommended_plan
-   recommended_addons
-   start_page_status
-   lead_status
-   created_at

------------------------------------------------------------------------

# 7. Recommendation Logic

Recommend Smart Business Ledger when:

-   small shop
-   mainly manual ledger
-   low POS dependency
-   wants WhatsApp recording
-   needs reminders and credit tracking

Recommend Smart Business Manager when:

-   POS already exists
-   staff count is higher
-   stock complexity exists
-   owner needs attendance/payroll
-   counter review is important

Recommend Smart Stock Assistant add-on when:

-   merchant tracks inventory manually
-   uses Excel
-   has stock shortage pain
-   has supplier reorder pain
-   has expiry/spoilage concerns

Recommend Compliance Shield when:

-   FSSAI
-   Panchayat license
-   vehicle FC
-   renewal anxiety exists

Recommend Malayalam Voice Reply Assistant when:

-   merchant prefers hearing replies
-   owner uses WhatsApp voice heavily

Voice reply is owner-only.

------------------------------------------------------------------------

# 8. UI Component Rules

Every major element must include permanent static IDs.

Examples:

id="start-progress-indicator"

id="start-current-question-card"

id="start-lottie-feature-demo"

id="start-recommendation-card"

id="start-privacy-assurance-card"

id="start-submit-button"

Use data-testid also.

------------------------------------------------------------------------

# 9. UX Rules

Each screen should:

-   ask one question
-   show one clear visual
-   have large touch targets
-   support Malayalam/Manglish text
-   save progress automatically
-   work smoothly on mobile

Do not overload with long paragraphs.

------------------------------------------------------------------------

# 10. Lottie Usage Guide

Use animations for:

-   language chat
-   owner profile
-   shop identity
-   notebook to WhatsApp
-   voice to ledger
-   receipt scanning
-   stock shelf
-   reminder bell
-   attendance scan
-   secure vault
-   activation success

Performance rules:

-   lazy-load animations
-   compress JSON
-   avoid huge animation files
-   provide static fallback
-   disable motion if user prefers reduced motion

------------------------------------------------------------------------

# 11. First 24-Hour Activation Experience

After activation, Smart Business should guide the owner to complete
first actions:

1.  Save first transaction
2.  Upload first receipt
3.  Add one reminder
4.  Add one customer credit entry
5.  Add employee only if relevant
6.  Upload stock file only if Smart Stock enabled

The first win must happen quickly.

------------------------------------------------------------------------

# 12. Tone Examples

Do not say:

Choose your SaaS plan.

Say:

Let us understand your shop and suggest the right Smart Business setup.

Do not say:

Your old notebook is outdated.

Say:

Your notebook helped you for years. Smart Business makes that memory
searchable on WhatsApp.

Do not say:

You may be losing money.

Say:

Let us check where Smart Business can reduce your mental load.

------------------------------------------------------------------------

# 13. Final Principle

The `/start` flow should feel like Smart Business has already started
helping.

Before payment.

Before dashboard.

Before setup.

The first experience must create clarity.

Team LIPS\
Innovating Freedom
