// SEC-IMP-1 (report1.85.md) — a bounded, real-HTTP verification harness for
// the actual compiled TanStack Start server-function boundary, using only
// public/stable framework/library surfaces:
//
//   - the server-function URL is deterministic:
//     `${TSS_SERVER_FN_BASE}${base64url(JSON.stringify({file, export}))}`,
//     confirmed empirically by requesting the dev-server-transformed module
//     source directly (curl http://localhost:<port>/src/server-functions/
//     catalog-import.ts) and reading the literal `createClientRpc(...)`
//     call this framework's own Vite plugin emits for each exported server
//     function -- not guessed, not an internal API reimplementation;
//   - request/response bodies are encoded with `seroval`, an independent,
//     published npm package (already a transitive dependency of
//     `@tanstack/router-core`) that both the framework's own client fetcher
//     (`serverFnFetcher.js`) and its own server handler
//     (`server-functions-handler.js`) use verbatim -- this harness calls
//     the same public `seroval` API (`toJSONAsync`/`fromCrossJSON`) they
//     do, not a hand-guessed envelope;
//   - the seroval plugin set is imported directly from `@tanstack/router-
//     core`'s public `defaultSerovalPlugins` export -- the same plugin
//     list the framework's own `getDefaultSerovalPlugins()` wrapper
//     returns for this app. That wrapper additionally merges in
//     `getStartOptions()?.serializationAdapters`, but requires an active
//     Start-context AsyncLocalStorage (only present inside a real request)
//     purely to look that up. This app's own `src/start.ts` `createStart()`
//     call configures no `serializationAdapters` at all, so the merged
//     result is provably identical to `defaultSerovalPlugins` alone for
//     this codebase -- using it directly avoids a Start-context dependency
//     that a standalone test harness (outside any request) cannot satisfy,
//     without reimplementing or guessing the wire format.
//
// This spawns a real `vite dev` server as a child process, pointed at the
// dedicated test Supabase project via env vars (never production), makes
// genuine `fetch()` HTTP requests against it exactly as a browser would,
// and tears the process down afterward.
import { type ChildProcess, execSync, spawn } from "node:child_process";
import { toJSONAsync, fromCrossJSON } from "seroval";
import { defaultSerovalPlugins } from "@tanstack/router-core";

const SERVER_FN_FILE = "/src/server-functions/catalog-import.ts?tss-serverfn-split";

export function serverFnUrl(baseUrl: string, exportName: string): string {
  const idObj = { file: SERVER_FN_FILE, export: `${exportName}_createServerFn_handler` };
  const id = Buffer.from(JSON.stringify(idObj), "utf-8").toString("base64url");
  return `${baseUrl}/_serverFn/${id}`;
}

function plugins() {
  return defaultSerovalPlugins;
}

export interface ServerFnHttpResult<T = unknown> {
  httpStatus: number;
  headers: Headers;
  result: T | undefined;
  error: { message?: string; [k: string]: unknown } | null;
  rawText: string;
}

async function decodeResponse(res: Response): Promise<ServerFnHttpResult> {
  const rawText = await res.text();
  let result: unknown;
  let error: ServerFnHttpResult["error"] = null;
  if (res.headers.get("x-tss-serialized") === "true" && rawText) {
    const parsed = JSON.parse(rawText);
    const decoded = fromCrossJSON(parsed, { refs: new Map(), plugins: plugins() }) as {
      result?: unknown;
      error?: ServerFnHttpResult["error"];
    };
    result = decoded?.result;
    error = decoded?.error ?? null;
  } else if (rawText) {
    try {
      result = JSON.parse(rawText);
    } catch {
      result = rawText;
    }
  }
  return { httpStatus: res.status, headers: res.headers, result, error, rawText };
}

export async function callFormDataServerFn(
  baseUrl: string,
  exportName: string,
  formData: FormData,
  headers: Record<string, string> = {},
): Promise<ServerFnHttpResult> {
  const res = await fetch(serverFnUrl(baseUrl, exportName), {
    method: "POST",
    headers: { "x-tsr-serverFn": "true", ...headers },
    body: formData,
  });
  return decodeResponse(res);
}

export async function callJsonServerFn(
  baseUrl: string,
  exportName: string,
  data: unknown,
  headers: Record<string, string> = {},
): Promise<ServerFnHttpResult> {
  const serializedBody = JSON.stringify(await toJSONAsync({ data }, { plugins: plugins() }));
  const res = await fetch(serverFnUrl(baseUrl, exportName), {
    method: "POST",
    headers: {
      "x-tsr-serverFn": "true",
      "content-type": "application/json",
      accept: "application/x-tss-framed, application/x-ndjson, application/json",
      ...headers,
    },
    body: serializedBody,
  });
  return decodeResponse(res);
}

export interface RunningAppServer {
  baseUrl: string;
  stop: () => Promise<void>;
}

async function waitForReady(baseUrl: string, timeoutMs: number): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let lastErr: unknown;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${baseUrl}/auth`);
      if (res.ok) return;
    } catch (err) {
      lastErr = err;
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`App server at ${baseUrl} did not become ready in time: ${String(lastErr)}`);
}

/**
 * Spawns a real `vite dev` server bound to the dedicated test Supabase
 * project only (SUPABASE_TEST_ variables mapped to SUPABASE_ and
 * VITE_SUPABASE_ for this child process's environment alone -- never
 * mutates the parent process's env, never touches production credentials).
 */
export async function startAppServer(port = 8099): Promise<RunningAppServer> {
  const required = [
    "SUPABASE_TEST_URL",
    "SUPABASE_TEST_ANON_KEY",
    "SUPABASE_TEST_SERVICE_ROLE_KEY",
  ];
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    throw new Error(`Missing required env vars for the real-HTTP harness: ${missing.join(", ")}`);
  }

  const env = {
    ...process.env,
    SUPABASE_URL: process.env.SUPABASE_TEST_URL,
    SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_TEST_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_TEST_SERVICE_ROLE_KEY,
    VITE_SUPABASE_URL: process.env.SUPABASE_TEST_URL,
    VITE_SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_TEST_ANON_KEY,
  };

  const child: ChildProcess = spawn(
    "npx",
    ["vite", "dev", "--port", String(port), "--strictPort"],
    {
      cwd: process.cwd(),
      env,
      shell: process.platform === "win32",
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  let output = "";
  child.stdout?.on("data", (d) => (output += String(d)));
  child.stderr?.on("data", (d) => (output += String(d)));

  const baseUrl = `http://localhost:${port}`;
  try {
    await waitForReady(baseUrl, 30_000);
    // Dev-mode server functions are registered lazily, as a side effect of
    // Vite transforming the module that declares them. A real browser
    // client always triggers this first by loading a page whose module
    // graph imports the server-function file; this standalone harness
    // never visits a page, so a cold POST straight to `/_serverFn/<id>`
    // fails server-side ID validation ("Invalid server function ID") even
    // though the ID itself is correct. Confirmed empirically: the
    // framework's own validate-server-fn-id plugin attempts the same
    // self-heal (`environment.transformRequest` on the resolved source
    // file) but only once the request is already in flight for a
    // specific `id`, which does not reliably win the race for the very
    // first call. A single plain GET of the module path here forces that
    // registration up front, exactly mirroring what a real page visit's
    // module graph traversal already does before any RPC call is made.
    await fetch(`${baseUrl}${SERVER_FN_FILE.replace(/\?.*$/, "")}`);
  } catch (err) {
    child.kill();
    throw new Error(`${(err as Error).message}\n--- server output ---\n${output}`);
  }

  const stop = async () => {
    if (child.pid == null) return;
    if (process.platform === "win32") {
      try {
        execSync(`taskkill /pid ${child.pid} /T /F`, { stdio: "ignore" });
      } catch {
        // already exited
      }
    } else {
      child.kill("SIGTERM");
    }
  };

  return { baseUrl, stop };
}
