// Test-only Supabase client helpers for SB-P-1.10-TESTS-1.0.
//
// These deliberately do NOT import src/integrations/supabase/client.ts or
// inventory.ts: that module holds one process-wide client singleton, which
// cannot represent two simultaneously-signed-in businesses (needed for
// cross-business RLS tests) or fire genuinely concurrent requests as the
// same user (needed for the concurrency tests). Every test signs in for
// real via Supabase Auth (auth.signInWithPassword) against the dedicated
// test project, so RLS is exercised exactly as it is in production
// (PostgREST + auth.uid()) -- nothing here simulates JWT claims by hand.
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { randomUUID } from "node:crypto";
import type { Database } from "@/integrations/supabase/types";

const url = process.env.SUPABASE_TEST_URL!;
const anonKey = process.env.SUPABASE_TEST_ANON_KEY!;
const serviceRoleKey = process.env.SUPABASE_TEST_SERVICE_ROLE_KEY!;

export type TestClient = SupabaseClient<Database>;

export const adminClient: TestClient = createClient(url, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

export function createAnonClient(): TestClient {
  return createClient(url, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export interface TestOwner {
  userId: string;
  email: string;
  businessId: string;
  client: TestClient;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retries a transient Supabase Auth service hiccup observed intermittently
 * against this project ("invalid JWT: unrecognized JWT kid" from
 * admin.createUser / signInWithPassword -- a GoTrue-side JWKS lookup
 * glitch, unrelated to anything under test). supabase-js auth calls
 * resolve with an { error } field rather than rejecting, so this checks
 * the result shape, not exceptions. Not a retry of business logic; a
 * fixed, small number of attempts for third-party infra flake only.
 */
async function withAuthRetry<T extends { error: { message?: string } | null }>(
  fn: () => Promise<T>,
  attempts = 4,
): Promise<T> {
  let last: T | undefined;
  for (let i = 0; i < attempts; i++) {
    const result = await fn();
    if (!result.error) return result;
    if (!/unrecognized jwt kid|invalid jwt/i.test(result.error.message ?? "")) return result;
    last = result;
    if (i < attempts - 1) await sleep(500 * (i + 1));
  }
  return last as T;
}

/**
 * Creates one fresh, pre-confirmed Supabase Auth user, a `businesses` row
 * they own, and a signed-in client scoped to that session (i.e. exactly
 * what the `authenticated` role sees under RLS for that owner).
 */
export async function createTestOwner(label: string): Promise<TestOwner> {
  const suffix = randomUUID();
  const email = `sb-p-1-10-tests+${label}-${suffix}@example.com`;
  const password = `Sb1!${randomUUID()}`;

  const { data: userData, error: userErr } = await withAuthRetry(() =>
    adminClient.auth.admin.createUser({ email, password, email_confirm: true }),
  );
  if (userErr || !userData.user) {
    throw new Error(`Failed to create test user ${email}: ${userErr?.message}`);
  }

  const client = createAnonClient();
  const { error: signInErr } = await withAuthRetry(() =>
    client.auth.signInWithPassword({ email, password }),
  );
  if (signInErr) {
    throw new Error(`Failed to sign in test user ${email}: ${signInErr.message}`);
  }

  const { data: business, error: bizErr } = await adminClient
    .from("businesses")
    .insert({
      owner_id: userData.user.id,
      name: `Test Business ${label} ${suffix}`,
      category: "Test",
      locality: "Test",
    })
    .select("id")
    .single();
  if (bizErr || !business) {
    throw new Error(`Failed to create business for ${email}: ${bizErr?.message}`);
  }

  return { userId: userData.user.id, email, businessId: business.id, client };
}

export function uniqueName(prefix: string): string {
  return `${prefix} ${randomUUID()}`;
}
