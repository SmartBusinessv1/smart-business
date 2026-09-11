# Onboarding & First Experience

## Feature Identity

**Product Type:** Core conversion/activation experience  
**Public Entry Route:** `/start`  
**Build Commitment:** **BUILD NOW**

## Founder Problem Statement

A merchant should not have to complete a complicated software setup before experiencing value. Smart Business should establish identity and essential context, then deliver small practical wins quickly enough that the merchant understands the product through usefulness rather than explanation alone.

## Core First-Experience Principle

The first successful experience is not `form completed`.

It is a concrete outcome such as:

- a natural transaction correctly recorded;
- a receipt/document understood and stored;
- an existing business-data import safely previewed and confirmed;
- a useful reminder created;
- a clear Ask CFO answer based on real data;
- the first Daily Intelligence briefing once enough real data exists.

## Entry and Identity

The current public onboarding entry is `/start`. The deprecated `/survey` route must not be revived.

Onboarding should capture only information needed for activation and current product use, such as:

- Owner/account identity;
- business identity;
- language preference;
- essential subscription/feature selections;
- required consent/terms acknowledgements;
- existing data import where the merchant chooses.

Do not repeatedly request information already known and verified.

## Progressive Activation

A good activation sequence should:

1. welcome in the merchant's preferred language;
2. establish business identity and authorization;
3. show the simplest useful first action;
4. capture/confirm a real business fact;
5. explain what Smart Business saved/understood;
6. surface the next useful capability without overwhelming the merchant;
7. progressively introduce reminders, documents, Ask CFO, Daily Intelligence and relevant add-ons as actual business need appears.

## Existing Data Import

Existing merchants may have useful information in:

- Excel;
- CSV;
- PDF;
- notebook/paper photos;
- customer credit lists;
- supplier lists;
- employee lists;
- stock files.

Imports must use Universal Document Intelligence and the preview-confirm-update pattern. Onboarding must not sacrifice data integrity simply to make setup appear instant.

## Language

English, Malayalam and Manglish are first-class. Language should be selectable during onboarding and changeable later through approved channels.

## Product Recommendation / Packaging

Smart Business may explain Ledger, Manager and relevant add-ons based on the merchant's needs, but must not use fear, fabricated savings or hidden manipulation to force a sale.

The merchant should understand what they receive and why it may be useful.

## Subscription Activation

Payment/subscription activation must use verified billing state before entitlements are granted. Provider events and internal workspace state must reconcile safely and idempotently.

## First-Week Experience

The product should progressively demonstrate:

- easier daily recording;
- searchable Business Memory;
- reduced paper/document burden;
- useful reminders;
- meaningful financial/operational clarity;
- role-scoped delegation where relevant;
- verified/reconciled information where available.

The goal is earned trust and reduced mental load, not deliberate dependency.

## Error / Exception Behaviour

Handle:

- duplicate account/business creation;
- payment succeeds but activation fails;
- missing/invalid business identity;
- import uncertainty;
- unsupported file;
- language selection ambiguity;
- user abandons and returns;
- existing business/customer/staff record conflicts;
- subscription/entitlement mismatch.

Recovery should continue from the last valid checkpoint instead of restarting the entire onboarding journey.

## Explicit Non-goals

- deprecated `/survey` flow;
- old `audit.smartbusiness.in`, `start.smartbusiness.in` or `smartbusiness.in` routing as current product truth;
- permanent dependency on Typeform/Fillout/Make.com;
- fear-heavy leakage/penalty calculations used as manipulative sales pressure;
- fake analytics for a new business without sufficient data;
- setup complexity that delays first practical value unnecessarily.

## Historical Corrections

Historical no-code survey tools, exact screen counts, old domains, fixed setup fees and 250-merchant waitlist mechanics are provenance unless separately reaffirmed. Preserve the original progressive-value intent and current `/start` route.

## Provenance

Reconciled from Founder-origin Sections 1 and 6, Founder planning/project-room Product Blueprint history, Source 01 routing/product experience, Source 07 conversion/onboarding framework and Source 11 first-experience/product truth.
