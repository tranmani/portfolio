/**
 * Generates public/og.png from src/lib/site.ts. NOT wired into the build: it
 * needs a browser, and Vercel's build image has none. og.png is committed, so
 * run `npm run og` by hand after changing the hero copy. Checked by
 * tests/content.test.ts, which fails if the two drift.
 */
import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { createRequire } from "node:module";
import { site } from "../src/lib/site.ts";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../public/og.png");

const font = async (pkg) =>
  (await readFile(require.resolve(pkg))).toString("base64");

const grotesk = await font("@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2");
const mono = await font("@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: G; src: url(data:font/woff2;base64,${grotesk}) format('woff2'); }
  @font-face { font-family: M; src: url(data:font/woff2;base64,${mono}) format('woff2'); }
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px; background:#faf9f6; color:#1c1917;
    font-family:G, sans-serif; display:flex; flex-direction:column;
    justify-content:center; padding:80px; border-bottom:14px solid #b3301f;
  }
  h1 { font-size:80px; font-weight:500; letter-spacing:-0.03em; line-height:1.03; }
  h1 span { display:block; color:#6b6560; }
  p { margin-top:34px; font-size:27px; color:#57534e; max-width:940px; line-height:1.45; }
  .foot { margin-top:auto; font-family:M, monospace; font-size:21px; color:#6b6560; }
</style></head><body>
  <h1>${site.name}<span>${site.role}, ${site.location}</span></h1>
  <p>${site.description.replace(/^Huy Tran is a product engineer in Amsterdam\.\s*/, "")}</p>
  <div class="foot">tranmani.com</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({ path: out });
await browser.close();

console.log(`wrote ${out}`);
