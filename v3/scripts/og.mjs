/**
 * Generates public/og.png at build time. v2's og:image pointed at /api/og,
 * a route that did not exist, so every share of the site rendered a grey box.
 * Run: node scripts/og.mjs
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../public/og.png");

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource-variable/geist/index.css">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px; background:#fcfcfc; color:#18181b;
    font-family:"Geist Variable", system-ui, sans-serif;
    display:flex; flex-direction:column; justify-content:center;
    padding:80px; border-bottom:14px solid #c2410c;
  }
  h1 { font-size:76px; font-weight:500; letter-spacing:-0.03em; line-height:1.05; }
  h1 span { display:block; color:#6c6c76; }
  p { margin-top:32px; font-size:28px; color:#52525b; max-width:900px; line-height:1.45; }
  .foot { margin-top:auto; font-size:22px; color:#6c6c76; font-family:ui-monospace, monospace; }
</style></head>
<body>
  <h1>Huy Tran<span>Product engineer, Amsterdam</span></h1>
  <p>Multi tenant SaaS, offline first mobile apps, and agentic retrieval that cites its sources or refuses to answer.</p>
  <div class="foot">tranmani.com</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({ path: out });
await browser.close();

console.log(`wrote ${out}`);
