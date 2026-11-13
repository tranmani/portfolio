/**
 * Generates public/og.png from src/lib/site.ts, as the back of a postcard in the
 * site's own look. NOT wired into the build: it needs a browser, and Vercel's
 * build image has none. og.png is committed, so run `npm run og` by hand after
 * changing the hero copy. Checked by tests/content.test.ts, which fails if the
 * two drift.
 */
import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { site } from "../src/lib/site.ts";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../public/og.png");

// The same font files the site serves, so the card and the page match.
const font = async (name) =>
  (await readFile(resolve(here, "../public/fonts/postcards", name))).toString("base64");

const serif = await font("fraunces-latin-full-normal.woff2");
const serifItalic = await font("fraunces-latin-full-italic.woff2");
const round = await font("nunito-latin-wght-normal.woff2");

// The description opens by restating the name and role, which the card already
// shows in large type, so the card starts at the second sentence.
const message = site.description.replace(/^[^.]*\.\s*/, "");
const year = new Date().getFullYear();

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: F; font-weight: 100 900; src: url(data:font/woff2;base64,${serif}) format('woff2'); }
  @font-face { font-family: F; font-weight: 100 900; font-style: italic; src: url(data:font/woff2;base64,${serifItalic}) format('woff2'); }
  @font-face { font-family: N; font-weight: 200 1000; src: url(data:font/woff2;base64,${round}) format('woff2'); }
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px; display:grid; place-items:center; overflow:hidden;
    color:#3a2f2a; font-family:N, sans-serif;
    background:
      radial-gradient(700px 480px at 8% 0%, #fbd3c0 0, transparent 70%),
      radial-gradient(640px 480px at 100% 45%, #cfe9e2 0, transparent 70%),
      radial-gradient(640px 420px at 10% 100%, #ddd5f3 0, transparent 70%),
      #f6efe6;
  }
  .card {
    position:relative; width:1060px; height:500px; padding:56px 60px;
    display:grid; grid-template-columns:1fr 1px 300px; gap:48px;
    background:#fffaf2; border-radius:14px; rotate:-1.2deg;
    box-shadow:0 2px 4px rgb(58 47 42 / .08), 0 24px 50px -12px rgb(58 47 42 / .28);
  }
  .rule { background:#e3d6c6; }
  .hi { font:italic 500 30px/1 F, serif; color:#a3434b; }
  h1 { margin-top:14px; font:600 96px/1 F, serif; letter-spacing:-0.02em; font-variation-settings:"SOFT" 100; }
  .role { margin-top:16px; font:italic 400 38px/1.15 F, serif; color:#2f6d78; }
  .msg { margin-top:30px; font-size:25px; line-height:1.5; color:#6b5a50; max-width:560px; }
  .side { position:relative; display:flex; flex-direction:column; }
  .stamp {
    --hole:9px; align-self:flex-end; width:150px; height:180px; padding:var(--hole); background:#fff;
    -webkit-mask:
      conic-gradient(#000 0 0) content-box,
      radial-gradient(farthest-side, #0000 96%, #000) 0 0 / calc(2*var(--hole)) calc(2*var(--hole)) round;
    filter:drop-shadow(0 1px 2px rgb(0 0 0 / .35)); rotate:3deg;
  }
  .stamp-in {
    display:grid; place-items:center; height:100%; border:4px solid #fff; color:#fff;
    background:radial-gradient(circle at 30% 20%, rgb(255 255 255 / .25), transparent 60%), #a3434b;
    font:800 64px/1 F, serif; font-variation-settings:"SOFT" 100;
  }
  .postmark { position:absolute; top:96px; left:-24px; width:220px; height:120px; rotate:-12deg; color:rgb(70 60 90 / .55); }
  .waves { position:absolute; left:84px; top:22px; width:140px; fill:none; stroke:currentColor; stroke-width:2; }
  .ring {
    position:absolute; left:0; top:0; display:grid; place-items:center; width:116px; height:116px;
    border:3px solid currentColor; border-radius:50%; background:rgb(255 250 242 / .5);
    font:800 15px/1.3 N, sans-serif; letter-spacing:.08em; text-transform:uppercase; text-align:center;
  }
  .to { margin-top:auto; }
  .line { border-bottom:2px solid #e3d6c6; padding:0 4px 8px; margin-top:22px; font-size:22px; color:#6b5a50; }
  .line.url { font:600 36px/1 F, serif; color:#2f6d78; }
</style></head><body>
  <div class="card">
    <div>
      <div class="hi">A letter of introduction from</div>
      <h1>${site.name}</h1>
      <div class="role">${site.role}</div>
      <p class="msg">${message}</p>
    </div>
    <div class="rule"></div>
    <div class="side">
      <div class="stamp"><div class="stamp-in">CV</div></div>
      <div class="postmark">
        <svg viewBox="0 0 120 50" class="waves"><path d="M0 10 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 M0 25 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 M0 40 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0" /></svg>
        <div class="ring">${site.location}<br />${year}</div>
      </div>
      <div class="to">
        <div class="line url">tranmani.com</div>
        <div class="line">${site.location}, near Amsterdam</div>
      </div>
    </div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out });
await browser.close();

console.log(`wrote ${out}`);
