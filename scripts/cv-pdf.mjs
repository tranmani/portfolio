/**
 * Generates public/Huy-Tran-CV.pdf from the same content the site renders, so the
 * PDF cannot drift behind the page. The previous CV had: no AI work, no Studio
 * WIP, and a Kubernetes-first summary, under a hero that said AI engineer.
 *
 * Built for ATS parsers, which means:
 *   - one column, no tables, no text boxes, no columns, no graphics
 *   - real selectable text (not an image), standard fonts
 *   - conventional section headings (SUMMARY / SKILLS / EXPERIENCE / ...)
 *   - dates as plain "Mon YYYY - Mon YYYY" strings on the same line as the role
 *   - contact details as plain text in the body, never in a page header
 *
 * Links are clickable in a PDF reader AND spelled out as text, because a parser
 * that strips the anchor still has to be able to read the domain.
 *
 * Run: npm run cv
 */
import { chromium } from "playwright";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";
import { site } from "../src/lib/site.ts";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "../public/Huy-Tran-CV.pdf");

const load = (dir) => {
  const base = resolve(here, `../src/content/${dir}`);
  return readdirSync(base).map((f) => {
    const raw = readFileSync(join(base, f), "utf8");
    const [, fm, body] = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) ?? [];
    const data = {};
    for (const line of fm.split("\n")) {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) data[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
    // The `links` sequence is the one nested structure in this frontmatter, and
    // the line parser above flattens it away. Read the pairs back out of the raw
    // block so the PDF can carry the live URLs the site carries.
    data.links = [...fm.matchAll(/^\s*-\s*label:\s*(.+)\n\s*href:\s*(\S+)/gm)].map(([, label, href]) => ({
      label: label.trim(),
      href: href.trim(),
    }));
    return { data, body: body.trim().replace(/\s+/g, " ") };
  });
};

const roles = load("roles").sort((a, b) => a.data.order - b.data.order);
const projects = load("projects").sort((a, b) => a.data.order - b.data.order);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Skills are grouped the way a human reads them and a parser tokenises them:
// plain comma-separated words, no icons, no proficiency bars.
const SKILLS = [
  ["Languages", "TypeScript, JavaScript, Go, Python, SQL"],
  ["Frontend", "React, Next.js, Astro, React Native, Expo, Tailwind CSS"],
  ["Backend", "Node.js, Go, REST, GraphQL, PostgreSQL, SQLite, Redis"],
  ["AI", "Retrieval augmented generation, pgvector, embeddings, Anthropic API, agent tooling"],
  ["Cloud and DevOps", "Cloudflare Workers, GCP, AWS, Docker, Kubernetes, Terraform, GitHub Actions, Azure DevOps, n8n"],
];

const SUMMARY =
  "Full-stack and AI engineer who ships whole products end to end: a multi tenant SaaS for salons, an offline first family app on the App Store, and a location gated chat app for the Dutch rail network. Currently building an agentic retrieval system at Studio WIP that grounds every answer in a cited passage, enforces document clearance in code rather than in a prompt, and declines when the knowledge base cannot support an answer. Comfortable owning the whole path from Postgres to a released iOS build.";

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Huy Tran CV</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10.5pt; line-height: 1.4; color: #000; background: #fff;
  }
  h1 { font-size: 20pt; letter-spacing: 0.5px; margin-bottom: 4pt; }
  .contact { font-size: 9.5pt; margin-bottom: 12pt; }
  h2 {
    font-size: 11pt; text-transform: uppercase; letter-spacing: 1px;
    border-bottom: 1px solid #000; padding-bottom: 2pt;
    margin-top: 14pt; margin-bottom: 7pt;
  }
  .role { margin-bottom: 9pt; break-inside: avoid; }
  .role-line { font-weight: bold; font-size: 10.5pt; }
  .meta { font-size: 9.5pt; margin-bottom: 2pt; }
  ul { margin: 0 0 0 14pt; }
  li { margin-bottom: 2pt; break-inside: avoid; }
  .skill { margin-bottom: 3pt; }
  p { margin-bottom: 4pt; }
  a { color: #000; text-decoration: underline; }
  .links { font-size: 9.5pt; margin-top: 1pt; }
</style></head>
<body>
  <h1>${esc(site.name)}</h1>
  <div class="contact">
    ${esc(site.role)} | ${esc(site.location)}, Netherlands | ${esc(site.phone)} | <a href="mailto:${esc(site.email)}">${esc(site.email)}</a><br />
    <a href="https://tranmani.com">tranmani.com</a> | <a href="${esc(site.cta.linkedin)}">linkedin.com/in/minh-huy-tran</a> | <a href="${esc(site.cta.github)}">github.com/tranmani</a><br />
    Dutch work authorisation, no sponsorship needed
  </div>

  <h2>Summary</h2>
  <p>${esc(SUMMARY)}</p>

  <h2>Skills</h2>
  ${SKILLS.map(([k, v]) => `<div class="skill"><b>${esc(k)}:</b> ${esc(v)}</div>`).join("")}

  <h2>Experience</h2>
  ${roles
    .map(
      (r) => `<div class="role">
        <div class="role-line">${esc(r.data.title)}, ${esc(r.data.company)}</div>
        <div class="meta">${esc(r.data.start)} - ${esc(r.data.end)} | ${esc(r.data.place)}${
          r.data.engagement !== "permanent" ? ` | ${esc(r.data.engagement)}` : ""
        }</div>
        <ul><li>${esc(r.body)}</li>${
          r.data.note ? `<li>${esc(r.data.note)}</li>` : ""
        }</ul>
      </div>`,
    )
    .join("")}

  <h2>Selected projects</h2>
  ${projects
    .map(
      (p) => `<div class="role">
        <div class="role-line">${esc(p.data.title)}${p.data.status ? ` - ${esc(p.data.status)}` : ""}</div>
        <div class="meta">${esc(p.data.stack.replace(/[\[\]"]/g, ""))}</div>
        <ul><li>${esc(p.data.hook)}</li></ul>
        ${
          p.data.links.length
            ? `<div class="links">${p.data.links
                .map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`)
                .join(" | ")}</div>`
            : ""
        }
      </div>`,
    )
    .join("")}

  <h2>Education</h2>
  <div class="role">
    <div class="role-line">BSc Computer Science, Saxion University of Applied Sciences</div>
    <div class="meta">2018 - 2022 | Deventer, Netherlands</div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.pdf({
  path: out,
  format: "A4",
  printBackground: false,
  margin: { top: "16mm", bottom: "16mm", left: "16mm", right: "16mm" },
});
await browser.close();

console.log(`wrote ${out}`);
