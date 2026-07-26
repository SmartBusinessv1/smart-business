#!/usr/bin/env node
// SB-MIG-1.2E-C: Guarded Supabase CLI wrapper.
//
// Prevents the incident found in SB-MIG-1.2E-B, where the Supabase CLI
// silently read SUPABASE_PROJECT_ID from this repo's root .env (the
// production project ref) and overrode --project-ref / `supabase link`
// state, redirecting `db push` at production. This wrapper requires an
// explicit, named target, resolves it from a tracked (non-secret)
// project-ref map below, prints the resolved target before doing anything,
// and refuses to touch production without a separate, explicit
// confirmation -- so accidental production targeting can't happen just
// because a developer forgot to check which project is currently linked.
import { spawnSync } from "node:child_process";

const TARGETS = {
  test: {
    ref: "drravyyauixltoihzmwo",
    name: "smart-business-test (Smart Business Testing org, Free plan)",
  },
  production: {
    ref: "gysgzasfcjvtrgaigfyn",
    name: "smart-business (Team LIPS org, Pro plan) -- PRODUCTION",
  },
};

const [target, ...cliArgs] = process.argv.slice(2);

if (!target || !TARGETS[target] || cliArgs.length === 0) {
  console.error(
    `Usage: node scripts/supabase-cli.mjs <${Object.keys(TARGETS).join("|")}> <supabase-cli-args...>`,
  );
  console.error(`Example: node scripts/supabase-cli.mjs test db push`);
  process.exit(1);
}

const { ref, name } = TARGETS[target];

if (target === "production" && process.env.CONFIRM_PRODUCTION !== "yes") {
  console.error(`Refusing to run against PRODUCTION (${name}, ref ${ref}) without explicit confirmation.`);
  console.error(`If you are certain, re-run with CONFIRM_PRODUCTION=yes set in the environment.`);
  process.exit(1);
}

console.log(`Target:       ${name}`);
console.log(`Project ref:  ${ref}`);
console.log(`Command:      npx supabase ${cliArgs.join(" ")}`);
console.log("");

const result = spawnSync("npx", ["supabase", ...cliArgs], {
  stdio: "inherit",
  // This explicit assignment is the actual fix for the SB-MIG-1.2E-B
  // incident: we no longer rely on the ambient .env value (which is
  // production's ref) or on --project-ref/link state alone. Every
  // invocation through this wrapper deterministically sets the target.
  env: { ...process.env, SUPABASE_PROJECT_ID: ref },
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);
