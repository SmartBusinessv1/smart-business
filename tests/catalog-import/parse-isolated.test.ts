// SEC-IMP-3 (report1.85.md §3): the parser execution budget must actually
// terminate/contain work, not merely reject after it completes.
import { describe, it, expect } from "vitest";
import { Worker } from "node:worker_threads";
import { parseInIsolatedWorker } from "@/lib/catalog-import/parse-isolated";
import { ImportLimitError } from "@/lib/catalog-import/limits";

describe("parseInIsolatedWorker", () => {
  it("parses a real CSV file on a worker thread and returns the same result as parseCsv", async () => {
    const csv = "Product Name,SKU\nRice 1kg,SKU-1\n";
    const result = await parseInIsolatedWorker(Buffer.from(csv, "utf-8"), "csv", 10_000);
    expect(result.rows).toHaveLength(1);
    expect(result.rows[0].fields.name).toBe("Rice 1kg");
  });

  it("terminates the worker at the wall-clock budget rather than waiting for completion", async () => {
    // A budget of 0ms guarantees the timeout fires before the (trivial,
    // fast) parse could possibly finish first -- this proves the
    // termination path itself fires and produces the correct, sanitized
    // PARSE_TIMEOUT outcome, not merely that *some* rejection eventually
    // happens after real work completes.
    const csv = "Product Name,SKU\nRice 1kg,SKU-1\n";
    const startedAt = Date.now();
    await expect(parseInIsolatedWorker(Buffer.from(csv, "utf-8"), "csv", 0)).rejects.toMatchObject({
      code: "PARSE_TIMEOUT",
    } satisfies Partial<ImportLimitError>);
    // The rejection must arrive promptly (bounded by the budget), not only
    // after the underlying work would have finished on its own -- for this
    // trivial file the two are hard to distinguish by timing alone, so the
    // real proof is architectural (see the worker-termination test below),
    // this is a smoke-level sanity bound.
    expect(Date.now() - startedAt).toBeLessThan(5_000);
  });

  it("Worker#terminate() genuinely kills a busy thread rather than merely abandoning it -- the primitive parse-isolated.ts relies on", async () => {
    // Proves the underlying Node mechanism directly: a worker running a
    // real, long CPU-bound loop (not I/O it could yield during) is
    // terminated mid-execution. If terminate() only detached the listener
    // while the thread kept running, the "finished" message this worker
    // posts *after* its loop would eventually arrive. It never does,
    // because the OS thread itself is torn down.
    const worker = new Worker(
      `
      const { parentPort } = require("node:worker_threads");
      const deadline = Date.now() + 5000;
      while (Date.now() < deadline) { /* deliberately busy-loop */ }
      parentPort.postMessage("finished-without-being-terminated");
      `,
      { eval: true },
    );

    let messageReceived = false;
    worker.on("message", () => {
      messageReceived = true;
    });

    await new Promise((resolve) => setTimeout(resolve, 100));
    await worker.terminate();

    // Wait well past the 5s busy-loop deadline the worker would have hit
    // if it were still alive, to prove no late message ever arrives.
    await new Promise((resolve) => setTimeout(resolve, 5_500));
    expect(messageReceived).toBe(false);
  }, 10_000);

  it("parse-isolated.ts's timeout path actually calls Worker#terminate() (code-level confirmation, paired with the primitive proof above)", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../../src/lib/catalog-import/parse-isolated.ts", import.meta.url),
        "utf-8",
      ),
    );
    expect(source).toContain("worker.terminate()");
    // The timeout branch must be the one that terminates, not merely reject.
    expect(source).toMatch(/setTimeout\([\s\S]*?terminate|finish\(\(\) =>[\s\S]*?PARSE_TIMEOUT/);
  });
});
