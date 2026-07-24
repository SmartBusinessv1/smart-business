import { expect } from "vitest";
import type { PostgrestError } from "@supabase/supabase-js";

/**
 * Asserts a Supabase call resulted in an error whose message contains
 * `substring` (case-insensitive). Accepts the `{ data, error }` shape
 * returned by supabase-js query/RPC calls.
 */
export function expectRejected(
  result: { data: unknown; error: PostgrestError | Error | null },
  substring: string,
): void {
  expect(result.error, `expected an error containing "${substring}" but got success`).toBeTruthy();
  const message = result.error?.message ?? "";
  expect(message.toLowerCase()).toContain(substring.toLowerCase());
}

export function expectSucceeded<T>(result: {
  data: T | null;
  error: PostgrestError | Error | null;
}): T {
  if (result.error) {
    throw new Error(`expected success but got error: ${result.error.message}`);
  }
  // Deliberately does NOT assert data is truthy: 0, "", and false are all
  // legitimate successful results (e.g. remainingCompensable() returning
  // exactly 0 for a fully-compensated movement).
  expect(
    result.data === null || result.data === undefined,
    "expected success with data but got no data",
  ).toBe(false);
  return result.data as T;
}
