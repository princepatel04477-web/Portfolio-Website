# Antigravity Prompt — Portfolio Upgrade (princepatel.dpdns.org)

You are upgrading my existing personal portfolio at https://princepatel.dpdns.org/ (Prince Patel — AI Engineer, Full-Stack Developer, Founder of Varunya Technologies). The goal: a premium, fast, recruiter- and client-ready portfolio where **my projects are the hero of the site**, built with real components from the libraries listed below. Animation supports the work; it never competes with it.

Work in phases. **Stop after Phase 0 and wait for my approval.**

---

## Phase 0 — Audit (no code changes)

1. Inspect the current repo: framework (Vite/Next/CRA), React version, TypeScript or JS, Tailwind version (v3 or v4), existing animation libs, routing, deploy target.
2. Check whether `components.json` (shadcn) exists. If not, plan how to add it without breaking current styles.
3. List every current section and what you'll keep, replace or delete.
4. Report the final component shortlist (below) with any substitutions if a component is missing, renamed, paid-only or incompatible with the stack.
5. Give me a short plan and wait.

---

## Phase 1 — Projects data layer

Create `src/data/projects.ts` (typed). I'll fill it with my GitHub repos and deployment links. Every project card, filter and detail view must render from this file — no hard-coded project content in components.

```ts
export type Project = {
  slug: string;
  title: string;
  oneLiner: string;          // max ~90 chars, outcome-focused
  problem: string;           // 1–2 sentences: what problem it solves
  role: string;              // "Solo build", "Lead dev", "Team of 4" …
  stack: string[];           // ["Next.js", "FastAPI", "OpenAI"]
  category: "AI / Automation" | "Full-Stack" | "Client Website" | "Tool" | "Academic";
  year: number;
  status: "Live" | "In progress" | "Archived";
  liveUrl?: string;
  githubUrl?: string;
  thumbnail: string;         // /projects/<slug>/cover.webp (16:10)
  gallery?: string[];
  metrics?: string[];        // ["10k+ images processed", "Lighthouse 98"]
  featured: boolean;         // max 4 featured
};
```

Also create `src/data/profile.ts` for name, roles, bio, socials, resume link, email, stats.

If a project has no live URL, hide the "Live" button — never show a dead link. Add `scripts/check-links.mjs` that pings every liveUrl/githubUrl and reports failures.

---

## Phase 2 — Sections & components

Install components with the shadcn CLI where available:

- React Bits: `npx shadcn@latest add @react-bits/<Name>-TS-TW` (use `-JS-TW` if the project is JS; `-CSS` variants if no Tailwind)
- Vengeance UI: `npx shadcn@latest add @vengeanceui/<component-slug>` (add the `@vengeanceui` registry to `components.json`, or pass the full registry URL)
- Skiper UI: `npx shadcn add @skiper-ui/skiper<N>` — **free tier only**. Open https://skiper-ui.com/components?source=free and pick the matching free components for the roles marked "Skiper" below. Needs framer-motion, gsap, clsx, tailwind-merge, lucide-react, react-use-measure.
- AnimMaster Lib (animmasterlib.dev): only use it if I hand you the downloaded zip. Prefer its React/Next.js components; do not mix in vanilla HTML/JS ones unless you port them cleanly to React.

**navbar.gallery, cta.gallery and supahero.io are inspiration galleries, not code.** Use them only as visual references for layout, spacing and hierarchy, then build the section with the component libraries above. Do not copy any brand's assets, copy or logos.

Pick **one** option per slot. Fallbacks are in brackets.

### 1. Navbar
- Desktop: Vengeance **Spotlight Navbar** [Notch Navbar]
- Mobile: React Bits **StaggeredMenu** [React Bits **PillNav**]
- Reference: navbar.gallery → minimal static/floating dev-tool navs (e.g. Browserbase, Velt)
- Links: Work, About, Stack, Experience, Contact + "Resume" button. Sticky, blurred glass on scroll, hides on scroll-down / shows on scroll-up.

### 2. Hero
- Background: **one** WebGL background from React Bits — **Silk** or **DarkVeil** or **LightRays** [Vengeance **Aurora Hero** / **Animated Rays**]
- Headline: React Bits **SplitText** or **BlurText**
- Role line: React Bits **RotatingText** cycling "AI Engineer → Full-Stack Developer → Founder, Varunya Technologies"
- CTAs: "View my work" (scrolls to Projects) + "Get in touch"; primary button with React Bits **Magnet**
- Reference: supahero.io → Linear, Raycast, Resend, Zed (dark, dev-tool, type-led)
- Above the fold must also show: 1-line value proposition + 3 quick stats (projects shipped, years building, clients) using React Bits **CountUp** or Vengeance **Stats Counter**.

### 3. Featured Projects (most important section)
- Layout: React Bits **MagicBento** [Vengeance **Expandable Bento Grid**] for the 3–4 `featured: true` projects
- Each tile: cover image, title, oneLiner, stack chips, Live + GitHub buttons, status badge
- Hover preview: Vengeance **Cursor Card** showing the project thumbnail (desktop only)

### 4. All Projects
- Filter tabs by `category` (animated underline — Skiper free tab/segment component)
- Grid of React Bits **SpotlightCard** [Vengeance **Glow Border Card**]
- Click → project detail: either a modal or `/work/[slug]` route with problem, role, stack, gallery, metrics, links. Use Vengeance **Folder Preview** or a Skiper free image/gallery component for screenshots.
- Search by title/stack if more than 12 projects.

### 5. Tech Stack
- React Bits **LogoLoop** [Vengeance **Logo Slider** / **Magnetic Spotlight Marquee**]
- Group: AI/ML, Frontend, Backend, Database, DevOps. Use real tech logos (simple-icons) with names.

### 6. About + Experience
- Short bio (3–4 lines) + photo using React Bits **ProfileCard** [Vengeance **Glow Border Card**]
- Experience / founder timeline driven by `profile.ts` — use a Skiper free scroll-driven component or React Bits **ScrollStack**
- Text reveal on scroll: React Bits **ScrollReveal** (one paragraph only)

### 7. Testimonials (only if I provide real ones)
- Vengeance **Testimonials Card**. If I give none, omit the section entirely — never use placeholder testimonials.

### 8. Contact CTA
- Reference: cta.gallery → Button, Form and Newsletter categories (e.g. Tines, Studioloop, Hello World Studio) for layout only
- Big closing headline + email button (Vengeance **Radial Glow Button** or **Liquid Button**) + React Bits **ClickSpark** on click
- Simple form (name, email, message) wired to Formspree/Resend/EmailJS — ask me which
- Socials: GitHub, LinkedIn, X, email

### 9. Footer
- Vengeance **Animated Footer** — name, nav, socials, "Built with React" line, current year

### Optional (desktop only, behind `prefers-reduced-motion` and pointer:fine)
- React Bits **TargetCursor** OR smooth scroll with Lenis — not both if it hurts performance.

---

## Design rules

- Dark-first theme with a light toggle. One accent color, neutral grays, one display font + one body font (e.g. Geist / Inter / Satoshi). Define tokens in Tailwind config / CSS variables and use them everywhere.
- Max **one** WebGL/canvas background on any screen. Lazy-load every heavy component (`React.lazy` / `next/dynamic`, IntersectionObserver).
- Every animation respects `prefers-reduced-motion`.
- No lorem ipsum, no fake stats, no stock testimonials. If data is missing, hide the element and list it in a TODO for me.
- Mobile-first: test 360px, 768px, 1280px, 1536px. Disable cursor effects and heavy WebGL on mobile (static gradient fallback).
- Accessibility: semantic landmarks, focus states, alt text from data, AA contrast.

## SEO & performance

- Title, meta description, Open Graph + Twitter image, JSON-LD `Person` schema, sitemap.xml, robots.txt.
- Images in WebP/AVIF with width/height set.
- Targets: Lighthouse mobile Performance ≥ 90, Accessibility ≥ 95, SEO 100, CLS < 0.1.

---

## Phase 3 — QA before handing back

1. Run build, lint and type-check — zero errors.
2. Run `scripts/check-links.mjs` — report broken links.
3. Run Lighthouse on mobile and desktop — paste scores.
4. Screenshot every section at 360px and 1440px.
5. Give me: list of installed components (library + name), anything you substituted and why, and a TODO list of data/assets I still need to provide.

---

## What I'll give you

- `projects` data (GitHub repo links, live URLs, descriptions, screenshots) to fill `projects.ts`
- Profile photo, resume PDF, social links, email
- AnimMaster Lib zip (only if I buy/download it)
