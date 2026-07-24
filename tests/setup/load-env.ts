import { config } from "dotenv";

config({ path: ".env.test" });
config({ path: ".env.test.local" });

const required = ["SUPABASE_TEST_URL", "SUPABASE_TEST_ANON_KEY", "SUPABASE_TEST_SERVICE_ROLE_KEY"];

const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  throw new Error(
    `Missing required test environment variables: ${missing.join(", ")}. ` +
      `Copy .env.test.local.example to .env.test.local and fill in the service-role key.`,
  );
}
