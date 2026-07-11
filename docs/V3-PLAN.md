# Portfolio v3 — Plan

Written after a three-way adversarial review of v2 (design/taste, hiring-manager, engineering).
This document is the plan only. No v3 code has been written yet.

---

## 0. The one-paragraph diagnosis

v2 is a costume. It performs technicality — green CRT, Matrix rain, ASCII name, fake
telemetry — over a codebase with no tests, no CI, no working lint, a 60% dead module
graph, and an unauthenticated mail endpoint that can spam a real client. Meanwhile the
actual work (two apps live on the App Store, a multi-tenant SaaS, clearance-gated agentic
RAG) is genuinely interview-worthy and is buried three clicks deep in 10px italic
monospace at 40% opacity.

**The theme is the content. v3 inverts that.**

All three reviewers, working independently, reached the same verdict: *delete the costume,
show the work, say what you want.*

---

## 1. What v2 gets wrong (the findings that survived verification)

### 1.1 Credibility — the site fabricates engineering data

Every "metric" on the site is a hardcoded string literal:

| Claim | Location | Reality |
|---|---|---|
| `LATENCY: 14ms` | `pages/index.tsx:89` | Measures nothing |
| `REGION: EU-WEST-3 (NL)` | `pages/index.tsx:101` | eu-west-3 is **Paris**. Also: nothing you own runs on AWS |
| `SESSION_ID: R8F-02X-001` | `pages/index.tsx:105` | Literal |
| `Uptime_Status: 100% NOMINAL` | `pages/experience.tsx:88` | Reported for jobs that **ended** |
| `CHECKSUM: 0x8A7C2B` | `pages/experience.tsx:110` | Checksum of nothing |
| `encryption: aes_256` | `components/ProjectCard.tsx:127` | Printed under a static JSON blob |
| `ENCRYPTION: AES-256-GCM` | `pages/contact.tsx:91` | A form that POSTs plaintext JSON over ordinary TLS |
| `[SECURITY_CLEARANCE_VERIFIED]` | `pages/cv.tsx:46` | — |
| `ID: 0x…` per project | `ProjectCard.tsx:25` | `title.length * 777`. Collides for equal-length titles |

This is the core wound. **You are a DevOps engineer whose site's central visual motif is
dashboards that lie.** Once a reviewer clocks that the decorative numbers are props, the
*real* ones (`~15%` conversion, `~20%` CTR) become props too. The fake data discredits the
true data.

**Rule for v3: every number on the page is true, and ideally fetched.**

### 1.2 The conversion funnel is gated behind a game

`components/layout/index.tsx:66`:

```tsx
{level === "root" && <RecruiterWidget />}
```

`root` = 60 XP. XP = 10 per unique page. There are 6 routes. **The only contact CTA on the
site appears exclusively to a visitor who has manually navigated to all six pages.** A
recruiter reads two screens and leaves, having never seen a way to contact you. The footer
meanwhile labels them `[PRIVILEGE: guest]`.

The same gate also hides `MatrixRain` — meaning most of the code in this repo renders for
almost no one.

### 1.3 Positioning sells the weakest evidence

Current: `title: "SOFTWARE ENGINEER"`, summary = *"High-availability engineer specializing
in distributed systems, cloud-native infrastructure, and performance-critical full-stack
applications. Bridging the gap between complex DevOps workflows and elegant frontend
experiences."*

- "High-availability engineer" is not a job title anyone holds.
- **Nothing on the site is a distributed system.** No consensus, no partitioning, no
  replication trade-offs. (Perron's queue is scaffolded and off.)
- "Performance-critical" with **zero** latency/throughput/profile data anywhere.
- "Bridging the gap between X and elegant Y" is LLM house style and reads as such.
- `currentStack` leads with **K8S** and `stackData` claims **AWS** — your least-evidenced
  skills. Everything you actually ship runs on **Cloudflare Workers, Supabase/Postgres,
  Expo, Go**. An interviewer will open on K8s and you'll spend ten minutes backpedalling.
- Your *current job* — RAG that cites sources or refuses to answer, with role/collection/
  clearance-gated retrieval and an escalation-attempt guardrail — is the most differentiated,
  most in-demand thing on the entire site. **It appears nowhere in your positioning.**

Three résumés fight inside one site (DevOps / AI / product engineer) and the weakest wins.

### 1.4 Stat boxes that a reader can falsify from the page itself

- `SENIOR_STATUS: 4+ Years XP` — no title of yours says senior; and your first role starts
  Feb 2021, so it's **5+** years. Wrong in both directions at once.
- `ACTIVE_DEPLOYMENTS: 10+ Major Projs` — the list is visibly 10, and four are two
  portfolios, a WordPress site, and a casino blog.

### 1.5 It shows nothing

`public/projects/project{1..4}.png` exist and are rendered **nowhere** — referenced only by
the dead `lib/projects.ts`. Zero screenshots, zero demos, zero architecture diagrams, zero
code links, zero App Store badges. For a candidate whose pitch is "I ship real products,"
showing nothing is malpractice.

### 1.6 Craft

- **No `<h1>` on the homepage** (verified: `grep -c "<h1" pages/index.tsx` → 0). Your name
  exists only as box-drawing characters in a `<pre>` — invisible to screen readers,
  unindexable by Google. Your name is not in the indexable text of your own homepage.
- One font (JetBrains Mono) for everything; `Press Start 2P` declared and never used.
  Six distinct type sizes **below 11px**. Hierarchy expressed through *opacity*, not size
  or weight — hence the undifferentiated green fog.
- `styles/globals.css:14` — `text-shadow: 0 0 5px rgba(19,236,91,.4)` on **`body`**. Every
  glyph on the site is blurred, sitewide.
- Contrast, computed against `#050505`: `/50` → 3.6:1, `/40` → 2.67:1, `/30` → 1.95:1,
  `/20` → **1.5:1**. There are 57 usages of `/20`–`/50` green text and 60 usages of
  6–10px type. `ProjectCard.tsx:125` renders 8px text at 1.5:1.
- Italic monospace in quotation marks for every project description and your career summary
  — one of the least readable text settings that exists, reserved for your most important prose.
- `TechCard.tsx` renders the **first letter** of each technology in a box. React → "R".
  Redis → "R". REST → "R". A shipped placeholder.

### 1.7 Motion

~90 simultaneously animating nodes at rest, no user input: full-page CRT scanline overlay,
a second traveling scanline, `MatrixRain` on `setInterval(draw, 50)` (not rAF, keeps running
in hidden tabs, no DPR scaling), `DotMap` `setState(new Date())` every second forever, a
contact-page progress bar that fills to 100% and resets forever, 8 infinite opacity loops
per project card, per-tech flicker loops.

**`prefers-reduced-motion` appears zero times in the repository.** For a visitor with
vestibular sensitivity this is a page they must close.

### 1.8 The code — the artifact that's meant to prove you can build software

| | Files | LOC |
|---|---|---|
| Reachable from a route | 33 | 2,911 |
| **Dead** | **50** | **2,594** |

Plus `react-email-starter/` (614 LOC, vendored template with its own lockfile). **~3,200 LOC
of rot.** 12 of 30 runtime deps have zero imports — including `focus-trap-react`, installed
and unused, *while the mobile menu has no focus trap*.

Verified defects:

- **`package.json` line 2 is still `"name": "precedent"`.** Years of commits; the repo still
  introduces itself as Steven Tey's template.
- **`og:image` points at `/api/og`, which does not exist.** `pages/api/` contains exactly one
  file. Every LinkedIn post, Slack paste, and recruiter forward of your portfolio renders as a
  grey 404 box. `twitter:card` is `content=""`.
- **`robots.txt` is at the repo root, not `public/`** — it 404s in production. The sitemap
  declares 1 URL out of 6.
- **`pages/api/send-email.tsx` is an unauthenticated, unrated, uncaptcha'd open mail relay** —
  and line 39 hardcodes `to: "info@beautyartpro.ch"`, **a real client's inbox**, with an
  attacker-controlled subject and body, in a public repo. `lib/email.ts` *fails open* to
  `smtp.mailtrap.io` with user `"user"` / pass `"password"` if env vars are missing. Raw
  nodemailer errors (SMTP hostnames, auth detail) are returned to the client.
  **This is a security finding. Fix it regardless of whether v3 happens.**
- `styled-jsx` is used in `AsciiText.tsx:20` but **not installed** — the build emits
  `Module not found` and the scoped CSS silently does nothing.
- **`npm run lint` cannot run** (`next lint` was removed in Next 16; the ESLint config is
  flat-config-incompatible). There is no lint in this repo and has not been for a long time.
- `next@16` with `react@18` — a peer-dependency violation in production.
- `GamificationContext` hydrates *after* it awards XP, so it clobbers its own state on every
  mount; and it calls `setXP`/`setLevel` **inside** a `setState` updater (impure), so in
  StrictMode dev it awards 20 XP instead of 10.
- Microsoft Clarity session recording injected with **no consent gate**. You are in the EU.
- `pages/cv.tsx:36` renders your CV in an `<iframe src="*.pdf">`. **iOS Safari does not render
  PDFs in iframes** — your highest-intent artifact is a blank white box on every iPhone.
- Zero tests. Zero CI. Both `package-lock.json` and `yarn.lock` committed. `tsconfig` targets
  **ES5** and `include`s `pages/index.tsx.bak`, a file that doesn't exist.

---

## 2. v3 strategy

### 2.1 Pick one lane: **product engineer who ships, with an AI/systems edge**

Your current job, your best differentiation, and the 2026 market all point the same way.
DevOps stays as a *supporting capability*, never the headline — it's your weakest evidence
and your most crowded competition.

Proposed hero copy (first person, concrete nouns, zero adjectives):

> **Huy Tran — product engineer, Amsterdam.**
> I build and ship whole products: a multi-tenant salon SaaS, and a location-gated chat app
> for Dutch train stations — both live on the App Store. At Studio WIP I build an agentic RAG
> platform that cites its sources or refuses to answer.
> **Open to [senior full-stack / AI engineering] roles, Amsterdam or remote-EU, from [date].**

**Permanently banned from the copy:** *bridging the gap, high-availability, distributed
systems (until you do them), performance-critical, premium, high-end, high-fidelity,
cutting-edge, leveraging, seamless, robust, elegant, "The Kinetic Hearth".*

### 2.2 Four projects. Not ten.

Confidence is what you leave out.

**Survivors, in order:**

1. **Perron** — your best asset. It's the only project with a *hook a human repeats*: "a chat
   room you can only join while physically standing on the platform." Real constraint (the
   geofence *is* the product, so it must resist spoofing — and it gates fun features but
   **never** safety-critical departure info: that's product judgment, say it out loud). Real
   data story (open CC0 GTFS-RT protobuf from OVapi/NDOV instead of the NS vendor API, so it
   covers every NL operator and can't be rate-limited out of existence). Real shipping proof
   (App Store, native push, IAP verified against the App Store Server API).
2. **Studio WIP — RAG with a refusal contract.** Promote from a job bullet to a case study.
   "A RAG agent that cites its sources — or refuses to answer." Hallucination is a *compliance*
   failure when the corpus is an org's vetted claims; and retrieval leaks are a *security*
   failure — a user must never receive a chunk above their clearance, not even summarized.
   *(Check with Studio WIP what's publishable; if sensitive, describe the pattern generically
   and say so.)*
3. **Lorenly** — lead with the importer, which is currently a comma clause. "Salon software you
   can actually switch *to* — one-click import from 9 competing booking systems." That's the
   go-to-market *and* the hard engineering (9 hostile CSV schemas, dirty data, idempotency,
   partial-failure recovery). Multi-tenancy/Workers/OpenNext is the *secondary* detail.
4. **FamMedley** — keep **only if rewritten** around the offline-first SQLite sync engine
   (mutation queue: dedupe, collapse, replay, conflict resolution — a genuinely hard problem).
   Cut the Tinder-swipe meal planner, the 11-tag keyword parade, and every instance of
   "high-end"/"premium". **If you won't invest in the rewrite, ship three.**

**Cut, without ceremony:** Portfolio Website v1 (97 words explaining what a portfolio is, linked
to a dead `*.vercel.app` preview branch), Portfolio Website v2 (listing the site I am currently
reading, as a project), **Casino Review Website** (an SEO "satellite blog" for a gambling
business is a values flag, not just filler — remove today), Headless WP Blog, Beauty Art Pro,
Managed Public Cloud ("gained hands-on experience with Linux" is student language for a
homelab). Demote CI/CD Pipeline Project to one line under experience.

**Also cut: the entire `/stack` page and the 18-item `stackData` array.** Nobody was ever hired
for listing `REST`. Six of those entries (MongoDB, Redis, GraphQL, AWS, Kubernetes, MUI) have
no supporting evidence anywhere on the site — they're six free questions for an interviewer.
Let the stack prove itself *inside* the project stories.

### 2.3 Every project follows one structure

1. **Hook** — one line, the idea someone repeats at lunch.
2. **Image or 10s clip** — above the prose. Non-negotiable. (The PNGs already exist.)
3. **The hard problem** — 1–2 sentences naming the real constraint, honestly.
4. **What I did** — the decision *and the alternative you rejected*.
5. **Proof** — a link, a store badge, a repo, a diagram, a number.
6. **Stack** — 4 tags max, load-bearing only.

### 2.4 Real numbers, honestly bounded

Small true numbers beat "10+" every time. "3 pilot salons, ~4k client records migrated."
"Perron: 38 stations, N installs." If it's pre-revenue, **say pre-revenue** — honesty beats
implied scale, and implied scale is what a reference check destroys.

And the one flex no template can fake: **a live status line fetched from your own services.**
You run Lorenly and Perron on Workers. Hit their `/health` at build time (or edge-cache a
runtime fetch) and render *actual* uptime, *actual* p95, *actual* deploy SHA. A real 99.94%
humiliates a fake `100% NOMINAL` — and it's the only version of "tactical HUD" a senior
engineer respects.

### 2.5 Answer the timeline question before it's asked

SevginWeb ends March 2026 → In The Zone (3 months, Apr–Jun) → Studio WIP (started this month).
Presented flat, that reads as a flight risk, and a reviewer will assume the worst. **If those
were contract or interim engagements, label them as such on the page.** Silence is worse than
the fact. Same for the Accenture internship overlapping the SevginWeb part-time role — label
it.

### 2.6 One page

```
1. HERO         Name (a real <h1>). One-line positioning. What I want + availability.
                [Email] [Book 20 min] [CV] [GitHub]                      ← above the fold
2. PROOF STRIP  "Two apps live on the App Store · AI Engineer @ Studio WIP · 5 yrs shipping"
3. WORK         3–4 case studies (Perron · Studio WIP RAG · Lorenly · FamMedley)
4. EXPERIENCE   Compact timeline, 1–2 lines each. Contract/interim labelled.
5. WRITING      2–3 posts (ship without it if you must)
6. CTA          Same buttons. Availability restated.
```

`/cv` is the only secondary route, and it becomes a **real HTML page** (indexable, accessible,
readable on a phone) with the PDF as a download — killing the iOS-broken iframe. Rename
`HuyTran_CV2.pdf` → `Huy-Tran-CV.pdf`; internal version numbers shouldn't land in a recruiter's
downloads folder. Put `/cv` in the nav.

**CTA:** one clear ask, repeated twice. Email + **Cal.com booking link** (you *run a Cal.com
deployment* — not using it here is absurd) + CV download + GitHub. Kill the floating pulsing
"SYSTEM OVERRIDE: ROOT SECURE CHANNEL" widget and the `[ROOT ACCESS] Interview Request` mailto
subject — a recruiter who forwards that internally looks like a clown.

---

## 3. Art direction

The 2026 move — when every AI-generated portfolio is either a dark glassmorphic gradient or a
green terminal — is **editorial restraint with verifiable specificity.** Confidence reads as
quiet. Insecurity reads as scanlines.

**Concept: The Engineering Log.** Not a terminal *simulation* — an engineering *document*.
A well-typeset internal design doc / post-incident writeup. Credibility from specificity, not
from chrome.

- **Type:** two faces. A text face with opinion (Inter Display / Geist Sans / Instrument Sans;
  or an editorial serif like Newsreader for prose) + a mono (Geist Mono / Commit Mono) used
  **only** for code, SHAs, metrics, version strings. Mono earns meaning by contrast; when
  everything is mono, mono means nothing. **5-step scale, nothing below 13px, ever.**
  Hierarchy via size + weight + space — **never opacity.**
- **Color:** near-monochrome. Ink/paper, a real 6-step neutral ramp, **one** accent used ~4
  times per page. Not green — green is spent. Semantic green/red reserved *exclusively* for
  real status, so it means something. **Light mode as the default**, dark as a toggle: a light
  portfolio in a sea of dark ones is now the contrarian move.
- **Layout:** a real grid. Content in a strong measure (~68ch) with a metadata rail — dates,
  role, stack, status — hanging in the margin. **Kill the border.** Structure comes from
  whitespace and alignment, not from drawing a rectangle around everything.
- **Motion philosophy:** *you should not be able to name a single animation.* Motion only
  confirms an action or orients during a transition. Nothing loops. Nothing pulses. Nothing
  scans. 120–200ms, opacity + 4px translate. `prefers-reduced-motion` honored on line one.

**If you want to keep a nod to the terminal** — and it can be done tastefully — it survives as
*one* restrained flourish: mono metadata, a single green status dot that reflects a **real**
health check. Not the load-bearing structure.

---

## 4. Engineering plan

**The codebase is the portfolio.** It has to survive a reviewer running `git clone`. Today's
does not.

- **Framework: Astro 5 on Cloudflare Workers.** A portfolio is ~6 documents; it does not need
  a React runtime. Astro ships 0 KB JS by default, and you already own the Workers deployment
  story from Lorenly and Perron. Interactivity as islands (`client:visible`), never `client:load`.
  *(Fallback if you want to stay in React: Next 15 App Router + `@opennextjs/cloudflare`, RSC by
  default. Astro is the better call and demonstrates more judgment.)*
- **Content model: Astro Content Collections + Zod.** One schema, defined once; one `.mdx` per
  project; **the build fails if a project is missing a field.** This directly fixes v2's split
  brain (an unused `IProject` interface, an incompatible inline prop type in `ProjectCard`, and
  an untyped `config.ts` god-object). Long-form case studies become MDX bodies.
- **Styling: Tailwind v4**, CSS-first `@theme` tokens. A semantic color ramp with contrast
  checked at author time, and **opacity-on-text banned as a dimming mechanism** — that's what
  produced the 1.5:1 disaster. Min font size 14px. Delete the global `text-shadow`.
- **Motion: delete Framer Motion** (40KB gzipped to fade divs in). CSS `@starting-style` +
  transitions, native View Transitions for navigation, `IntersectionObserver` for reveals.
  Global `prefers-reduced-motion` reset in the base stylesheet. **Zero `repeat: Infinity`.**
  If one hero canvas genuinely earns its keep: rAF (not `setInterval`), DPR-scaled, paused on
  `document.hidden` and off-screen, not rendered at all under reduced-motion.
- **Contact: a real endpoint.** Delete nodemailer and the open relay. Worker route with
  Cloudflare Turnstile + KV rate limit (3/hr/IP) + server-side Zod validation + 2,000-char cap
  + honeypot, sending via Resend/MailChannels from your domain with SPF/DKIM, returning
  **generic** errors. **Delete the `salon-google-coupon` branch and the hardcoded client email
  entirely.**
- **SEO:** build-generated `robots.txt` + full `sitemap.xml`; per-page title/description/
  canonical; JSON-LD (`Person` + `CreativeWork`); **real OG images generated at build with
  Satori** (a committed PNG per page — no runtime `/api/og` to 404).
- **Analytics:** Cloudflare Web Analytics (cookieless, GDPR-clean). **Remove Microsoft Clarity**
  (session recording with no consent banner, in the EU) **and `@vercel/analytics`.**
- **A11y baseline, CI-gated:** exactly one real-text `<h1>` per page (if the ASCII wordmark
  survives: `<h1><span class="sr-only">Huy Tran — …</span><pre aria-hidden="true">…</pre></h1>`);
  `<html lang="en">`; all text ≥ 4.5:1 with a **contrast unit test over the palette** so a bad
  token fails the build; `:focus-visible` on every interactive element (v2 explicitly deletes
  the focus ring on all four contact-form fields); real landmarks and `<ul>/<li>`; skip-link;
  focus trap + Escape + `aria-expanded` on the mobile menu.
- **Performance budget, asserted in CI:** JS < 20KB gzip · CSS < 15KB · LCP < 1.2s (mobile 4G)
  · CLS < 0.02 · INP < 100ms · page < 300KB · Lighthouse ≥ 98/100/100. Self-hosted subset woff2
  fonts, preloaded — **not** a render-blocking `@import` to Google Fonts as line 1 of the CSS
  bundle (which is what v2 does, and it's why LCP suffers).
- **CI (GitHub Actions, blocking on main):** `tsc --noEmit` (strict) · ESLint flat config +
  Prettier · Vitest (schema/lib) · Playwright e2e · **`@axe-core/playwright` — 0 violations as a
  merge gate** · Lighthouse CI asserting the budget above. A green CI badge is worth more to a
  hiring manager than the entire Matrix rain.
- **Hosting:** Cloudflare Workers + Static Assets, `wrangler deploy` from CI on merge, preview
  deploys per PR.

---

## 5. Sequencing

**Phase 0 — bleed control (do today, independent of v3).**
1. Fix `pages/api/send-email.tsx`: remove the hardcoded `info@beautyartpro.ch` branch, add
   validation + rate limiting, stop echoing raw errors, make `lib/email.ts` throw instead of
   failing open to default creds. *(Security.)*
2. Ungate `RecruiterWidget` so recruiters can actually contact you.
3. Move `robots.txt` → `public/`. Remove the broken `og:image` or generate a real one.
4. Add an `sr-only <h1>` + `aria-hidden` on the ASCII.
5. Add the global `prefers-reduced-motion` block.
6. Cut the casino project from `config.ts`.
7. Rename the package from `"precedent"`.

**Phase 1 — content.** Write the four case studies (hook → image → hard problem → what I did →
proof → stack) and the new hero/positioning copy. Gather the assets: screenshots, App Store
links, the RAG architecture diagram, the two-phones-diverging-and-reconciling clip for FamMedley,
and real numbers for each project. *This is the phase that actually determines whether v3 works;
the code is the easy part.*

**Phase 2 — foundation.** New Astro project, content collections + Zod schema, design tokens,
type scale, CI with the a11y and perf gates wired up before any page exists.

**Phase 3 — build.** Hero → work → experience → CTA. `/cv` as HTML. OG images. JSON-LD.

**Phase 4 — proof.** Wire the real health-check status line to Lorenly and Perron. Ship.

**Phase 5 (optional, high ROI).** Two or three posts you have already written in your head:
"Verifying App Store subscriptions when Apple's key has a label glued to the PEM." "All-operator
NL train data from CC0 GTFS-RT instead of the NS API." "Why our RAG agent refuses to answer."
These would out-rank most of your site.

---

## 6. Open decisions (yours, not mine)

1. **Which job are you actually applying for?** The plan above assumes *product/AI engineer*.
   If you want a pure DevOps/platform search, the project set and hero copy change completely
   (and you'd need to build the K8s/Terraform evidence you currently only assert).
2. **How much of the terminal survives?** Recommendation: as one restrained flourish, not the
   structure. But it's your face.
3. **Astro vs. staying on Next.** Recommendation: Astro. Staying on Next App Router is
   defensible and faster to port.
4. **FamMedley: rewrite around the sync engine, or cut to three projects?**
