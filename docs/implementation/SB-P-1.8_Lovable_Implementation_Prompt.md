Apply the pending database migration in `supabase/migrations/` that creates the `public.transactions` table (columns: `id`, `business_id`, `creator_id`, `transaction_type`, `transaction_date`, `party_name`, `description`, `amount`, `payment_method`, `notes`, `created_at`, `updated_at`), its two indexes, its `updated_at` trigger (reusing the existing `update_updated_at_column()` function), its Row Level Security policies, and its `SELECT`/`INSERT`-only grants to `authenticated`. Do not modify the existing `businesses` table or its policies.

After the migration is applied, regenerate the Supabase TypeScript types so `src/integrations/supabase/types.ts` reflects the live `transactions` table.

Verify Row Level Security with two different authenticated users, each owning their own business:

- Confirm each user can insert a transaction only for their own business.
- Confirm each user can list only their own business's transactions.
- Confirm neither user can read or insert a transaction belonging to the other's business.
- Confirm an unauthenticated request is rejected.

Run the app and confirm, end to end, using a real authenticated session:

1. Sign in as a business owner who has already completed business setup.
2. Open `/transactions`. Confirm the page shows a "Record a sale" tab and a "Record a purchase" tab, each with fields for date, party name (customer for sales, supplier for purchases), description, amount, payment method, and optional notes.
3. Submit a sale with a valid date, customer name, description, a positive amount, and a payment method. Confirm it saves, a success confirmation appears, and the form is ready for the next entry.
4. Attempt to submit a sale with a missing required field, and separately with a zero or negative amount. Confirm both are rejected with a clear, respectful message before any request is sent.
5. Submit a purchase the same way and confirm the same behavior.
6. Confirm both the sale and the purchase appear immediately in the "Transaction timeline" section below the forms, newest first, visually distinguishable as Sale vs. Purchase, each showing type, date, party name, description, amount, and payment method.
7. Record a transaction with amount `12.50` and another with amount `12.99`. Confirm both display with their exact decimal values (`₹12.50` and `₹12.99`) in the timeline and are reflected precisely in the dashboard totals, with no rounding to whole rupees.
8. With no transactions recorded, confirm the timeline shows a helpful empty state instead of an empty list.
9. Open `/dashboard`. Confirm the "Today's activity" section shows a live "Today's sales" total, a live "Today's purchases" total, and a short list of recent activity, all reflecting the transactions just recorded.
10. With no transactions recorded for a business, confirm the dashboard shows a helpful empty state with a way to get to `/transactions`, instead of blank totals.
11. Confirm the "Transactions" link is present and working in the workspace navigation on both `/dashboard` and `/transactions`, on desktop and mobile widths.
12. Confirm existing behavior is unchanged: login, logout, session persistence across a page refresh, redirect to `/auth` when signed out and visiting `/dashboard` or `/transactions`, and the existing Business Identity display on `/dashboard`.

Do not implement inventory, stock management, customer or supplier master records, employee management, attendance, accounting, ledgers, profit/loss or balance-sheet reporting, GST workflows, invoice or receipt generation, operational reports, analytics, Ask CFO, AI-generated insights or recommendations, WhatsApp integration, voice input, photo or image input, receipt OCR, file uploads, POS integration, online payments, notifications, multi-business switching, employee transaction access, advanced role or permission management, transaction editing, transaction deletion, or bulk import. If any of these appear to be required to complete the above, stop and do not implement them.

Capture screenshots of: the sales-entry screen, a successful sale confirmation, the purchase-entry screen, a successful purchase confirmation, the transaction timeline showing both a sale and a purchase, the dashboard with live totals and recent activity, and the empty-state view when no transactions exist.
