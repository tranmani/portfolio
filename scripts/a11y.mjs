/**
 * Accessibility gate. Serves dist/ and runs axe against every route in both
 * colour schemes. Non-zero exit on any violation, so a regression fails CI
 * rather than waiting for a human to run a tool by hand.
 *
 * Note: axe does not implement UI boundary contrast (WCAG 1.4.11). That is
 * asserted separately in tests/contrast.test.ts.
 */
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const axePath = require.resolve("axe-core/axe.min.js");
const axeSource = await readFile(axePath, "utf8");

const ROUTES = ["/", "/cv"];
const TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".ico": "image/x-icon",
};

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  if (!extname(path)) path += "/index.html";
  try {
    const body = await readFile(join("dist", path));
    res.writeHead(200, { "content-type": TYPES[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});

await new Promise((r) => server.listen(4322, r));

const browser = await chromium.launch();
let failed = 0;

for (const scheme of ["light", "dark"]) {
  for (const route of ROUTES) {
    const ctx = await browser.newContext({ colorScheme: scheme });
    const page = await ctx.newPage();
    await page.goto(`http://localhost:4322${route}`, { waitUntil: "networkidle" });
    await page.evaluate(axeSource);
    const { violations } = await page.evaluate(() =>
      window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
      }),
    );

    if (violations.length) {
      failed += violations.length;
      console.error(`FAIL ${scheme} ${route}`);
      for (const v of violations) {
        console.error(`  [${v.impact}] ${v.id}: ${v.help}`);
        for (const n of v.nodes.slice(0, 3)) console.error(`      ${n.target.join(" ")}`);
      }
    } else {
      console.log(`ok   ${scheme} ${route}`);
    }
    await ctx.close();
  }
}

await browser.close();
server.close();

if (failed) {
  console.error(`\n${failed} accessibility violation(s).`);
  process.exit(1);
}
console.log("\nNo accessibility violations.");
