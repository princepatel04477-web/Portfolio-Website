# Portfolio Project Content — princepatel.dpdns.org

Nov 19, 2026 · @Prince Patel

Copy for every project except the three you asked to leave out (DharmaShree Logistics, Agent Desk, Kushagra). Each card has: a one-liner for the grid, a short case-study paragraph, highlights, the stack and the link. Every fact here comes from what you've told me about the project. Lines marked **⚠ Verify** are details I don't have, so confirm them before publishing rather than guessing.

## Fix these on the current site first

- **Career title at ThinkNovus.** The site says "AI/ML Engineer", but the role was an internship. Recruiters verify this, so change it to **AI/ML Engineer Intern**. Bluestock is already labelled correctly.
- **The stats strip undersells you and has filler in it.** "5+ Projects Delivered" doesn't match the 15+ builds below. "100% Responsive Design" and "Pure / Performance Focused" don't tell anyone anything. Replace them with: **15+ Projects Built · 10+ Live Websites · 8 Industries** (textiles, fashion, jewellery, footwear, pharma, fintech, events, education/F&B) **· Founder, Varunya Technologies**.
- **The "Private" label on every card.** It reads like a broken button. If the code is private, remove the button and keep only "Live Website".
- **Testimonials.** Each quote should be the client's own wording, approved by them. Polished generic quotes do more harm than having none.
- **About paragraph.** The page text comes out as "Ibuilddigitalenvironments…" with no spaces, which suggests the split-text animation drops the spaces. That hurts SEO and screen readers. Keep real spaces, or add an `aria-label` with the full sentence.
- **Never publish:** STE financial or reconciliation figures, Civara's audit bug list, BDPA members' names or phone numbers, or any client's internal documents.

## Suggested filters and order

**Filters:** All · Client Websites · E-commerce · AI & Automation · Platforms & Products · Fintech

**Featured top six (in this order):** STE 2026 → TRADEX → Trivoxa Group → Aqualite → Civara + AI Photoshoot Pipeline → NiftyPulse

**Status badges:** Live · Prototype · In Development

## Work Experience

Use this for the Career section. Projects done inside a job are listed under that job; the cards further down cover them in detail.

### Founder & CTO — Varunya Technologies

**Surat, India · June 2026 – Present**

I founded and run an AI and digital agency, and I lead the design and engineering of every client project. Clients so far span textiles, fashion, jewellery, footwear, pharma and events.

- Delivered client websites and platforms: STE 2026 (website and exhibitor portal), Trivoxa Group, Aqualite, Civara Jewels, Manasvi Fashion, Shiveshwar Textiles, and Maa Sheetla × Sunrise Tex Fab
- Built AI production workflows for clients, including a photoshoot pipeline that turned 150+ jewellery CAD renders into catalogue images
- Created the agency's Void Obsidian brand system, group identity and programmatic video content

### AI/ML Engineer Intern — ThinkNovus Private Limited

**Ahmedabad, India · June 2026 – October 2026**

- Built TRADEX, an AI/ML forex intelligence and paper-trading platform, as the core project of the internship, documented in my internship reports
- Deployed it across three services: frontend on Vercel, API on Render, database on Neon Postgres
- **⚠ Verify:** add one line on the ML models or techniques you used, which makes the entry much stronger

### SDE Intern — Bluestock Fintech

**Pune, India (Remote) · October 2025 – January 2026**

- **⚠ Verify:** send me 2–3 lines on what you built here and I'll write the bullets

## 1. Surat Textile Exhibition (STE 2026)

**Category:** Client Websites · Platforms · **Status:** Live · **Link:** stesurat.com

**One-liner:** Website, exhibitor portal and back-office tooling for a 179-exhibitor textile trade show.

**Case study:** STE 2026 brought textile buyers and Surat exhibitors together at the SIECC Sarsana Dome on 12–13 September 2026. I built the public website and an exhibitor portal, and ran the operations tooling behind them: the portal collected exhibitor logos straight into Drive, generated proforma bills for extra stall requirements and exported clean data for the organisers. I continue to support the client after the event.

**Highlights**

- Exhibitor portal with a logo-collection pipeline, proforma billing for extras and data export
- Extras rate-card feature on the website
- Entitlement and procurement workbooks (stalls, lighting, extras) built from a 179-exhibitor master report
- Exhibitor contact management with deduplication, plus templated invoicing

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP · Cloudflare · Google Drive pipeline · Excel automation

## 2. TRADEX (Tradly)

**Category:** Fintech · AI & Automation · **Status:** Live · **Link:** tradex-main.vercel.app

**One-liner:** An AI/ML forex intelligence and paper-trading platform.

**Case study:** TRADEX is a forex analysis and paper-trading platform that I built as my university project during my AI/ML internship at ThinkNovus. Traders test strategies without risking capital and get AI-assisted market signals. The full stack is deployed: frontend on Vercel, API on Render, and a Neon Postgres database. The next phase adds live forex feeds, news and sentiment in a terminal-style interface.

**Highlights**

- Paper-trading engine with AI-driven market analysis
- Production deployment split across Vercel, Render and Neon
- Roadmap: live forex data, AI decisions, terminal-style news and sentiment view

**Stack:** Next.js · Render (API) · Neon Postgres · Vercel · **⚠ Verify:** backend language and ML models used

## 3. NiftyPulse

**Category:** Fintech · AI & Automation · **Status:** Live · **Link:** root-six-gamma.vercel.app

**One-liner:** Indian stock-market analytics with live indices, screeners and AI insights.

**Case study:** NiftyPulse is an analysis platform for Indian equities. It combines live index tracking, a sector heatmap and a stock screener with price alerts and a virtual portfolio for practice. LLMs through Groq and Perplexity power AI insights, with side-by-side model comparison, and a built-in academy teaches trading basics.

**Highlights**

- Live indices, sector heatmap and stock screener
- Price alerts and virtual portfolio
- AI model comparison (Groq, Perplexity) and a trading-education academy

**Stack:** Next.js 14 · FastAPI · Supabase · Groq · Perplexity API

## 4. Trivoxa Group

**Category:** Client Websites · **Status:** Live · **Link:** trivoxagroup.com (also trivoxa-group.pages.dev)

**One-liner:** Corporate site for an import/export group, built around a persistent morphing 3D object.

**Case study:** Trivoxa operates two divisions, Product Exports and Service Exports (Trivoxa Digital). I designed the site around one 3D object that morphs from page to page and opens with a globe-unfurl sequence, so the brand reads as one continuous experience rather than separate pages. Contact flows run on Supabase and Resend.

**Highlights**

- Persistent cross-route morphing 3D object in React Three Fiber
- Cinematic globe-unfurl intro sequence
- Two-division information architecture with working enquiry backend

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Three.js / React Three Fiber · GSAP · Framer Motion · Supabase · Resend

## 5. Aqualite

**Category:** E-commerce · Client Websites · **Status:** Live (mobile optimisation in progress) · **Link:** aqualite.aqualite.workers.dev

**One-liner:** A footwear storefront with a Seller Central-style admin.

**Case study:** Aqualite needed a complete, working store, not a mockup. I built a motion-rich storefront with a product-led hero, plus a single-brand admin modelled on Amazon Seller Central for managing catalogue and orders. The whole system uses an ivory-and-red brand theme and runs on Cloudflare Workers.

**Highlights**

- End-to-end storefront plus admin panel
- Custom motion system built with React Bits, GSAP and Framer Motion
- Seller Central-style admin for a single brand

**Stack:** React · React Bits · GSAP · Framer Motion · Cloudflare Workers · **⚠ Verify:** database

## 6. Civara Jewels

**Category:** E-commerce · Client Websites · **Status:** Live · **Link:** civara-jewels.vercel.app

**One-liner:** A luxury jewellery storefront with a secure in-house admin.

**Case study:** Civara's site presents its ring, pendant and earring collections in a premium storefront. Behind it is an admin panel that only works on the company's local network, with session-based authentication, so the catalogue can be managed safely in-house. The product imagery comes from the AI photoshoot pipeline below.

**Highlights**

- Premium jewellery storefront
- Admin panel with iron-session auth and LAN-only access
- Catalogue fed by an AI-generated photoshoot pipeline

**Stack:** Next.js · SQLite · iron-session · Vercel

## 8. Manasvi Fashion

**Category:** E-commerce · Client Websites · **Status:** Live · **Link:** manasvi-fashion.vercel.app

**One-liner:** An e-commerce store for Indian ethnic wear.

**Case study:** Manasvi Fashion sells Indian ethnic wear online. The store has a product catalogue with variants, checkout and an admin dashboard, and it is layered with smooth scrolling and animation to give it a boutique feel.

**Highlights**

- Catalogue with variants, checkout and admin
- Motion layer built with GSAP, Lenis, Anime.js and Framer Motion

**Stack:** Next.js · Supabase · GSAP · Lenis · Anime.js · Framer Motion · Vercel

## 9. Shiveshwar Textiles

**Category:** Client Websites · **Status:** Live · **Link:** shivneshwar-textiles.vercel.app

**One-liner:** A B2B export site that presents a Surat fabric manufacturer to European buyers.

**Case study:** Shiveshwar Textiles manufactures fabric in Surat and wanted to reach German and European buyers. I built an animated corporate site that shows their manufacturing capability and product catalogue to an overseas B2B audience.

**Highlights**

- Fully animated landing experience
- Export-focused catalogue and capability storytelling

**Stack:** HTML · CSS · JavaScript · Vercel. **⚠ Don't claim a German version** until the language toggle works.

## 10. Maa Sheetla Agency × Sunrise Tex Fab

**Category:** Client Websites · **Status:** Live · **Link:** sunrisefabtex.com (also maa-sheetla.pages.dev)

**One-liner:** A dual-brand textile site built on a custom image system and a zero-cost form backend.

**Case study:** One website represents two sister firms. The brief required plain HTML, CSS and JavaScript, so I made the site feel premium through imagery: a 30-asset image system with art-direction rules and generation prompts, plus a Sharp build script that produces optimised image sizes. Enquiries go to a Google Apps Script backend, so there are no server costs.

**Highlights**

- 30-asset image system with art direction and an automated Sharp build
- Google Apps Script enquiry backend
- Domain, DNS and Workspace mail managed on Cloudflare

**Stack:** HTML · CSS · Vanilla JS · Sharp · Google Apps Script · Cloudflare Pages

## 11. AURELIA

**Category:** E-commerce · **Status:** Prototype · **Link:** aurelia-sandy-five.vercel.app

**One-liner:** A cinematic, 3D-driven concept for a jewellery store.

**Case study:** AURELIA is my own concept for how luxury jewellery could be sold online: the experience is carried by motion and 3D rather than a slideshow of product photos. It's where I test the most ambitious motion and interaction ideas before using them in client work.

**Stack:** **⚠ Verify:** list the 3D and motion libraries you used · Vercel

## 12. Arvex Pharma (Concept)

**Category:** Client Websites · **Status:** Prototype · **Link:** arvex-pharma.pages.dev

**One-liner:** A light-themed B2B prototype for a pharmaceutical exporter.

**Case study:** This is a production-ready prototype for an Indian pharmaceutical wholesaler and exporter. It's a fast static site with a content layer and one API route for enquiries. "Arvex" is a placeholder brand, so label the card **Concept** until the real client name can be shown.

**Stack:** Next.js 15 (App Router) · React Bits · Cloudflare Pages

## 14. CafeOS — Smart Café Ordering System

**Category:** Platforms & Products · **Status:** In Development

**One-liner:** Multi-tenant QR ordering for cafés, with separate panels for the platform, owners and staff.

**Case study:** Customers scan a QR code, enter their table number, browse the menu and order. Owners manage tables, staff and sales from their own dashboard, staff can place orders for walk-in customers, and a super-admin panel oversees every café on the platform.

**Highlights**

- Multi-tenant: platform, owner and staff roles
- QR menu with table-number ordering (no rotating codes)
- Live order and sales dashboard

**Stack:** **⚠ Verify**

## 15. School Store

**Category:** E-commerce · Platforms & Products · **Status:** In Development (web + Android)

**One-liner:** A school-uniform store with a native Android app and size recommendations.

**Case study:** School Store sells school uniforms online and is self-hosted on Oracle Cloud. The Android app is native rather than a website in a wrapper, and it recommends the right size from a child's height and weight.

**Stack:** React · Node.js · PostgreSQL · Oracle Cloud · Android

## 18. EventFlow — Event Management Software

**Category:** Platforms & Products · **Status:** **⚠ Verify**

**One-liner:** Event management software built under Varunya Technologies.

**⚠ Verify:** You list this on your CV, but I don't have its features or stack. Send me two or three lines and I'll write the card in the same format.

## 19. Sift — File Manager for Windows

**Category:** Platforms & Products · **Status:** In Development

**One-liner:** Files by Google, rebuilt for the Windows desktop.

**Case study:** Sift brings the simplicity of Android's Files by Google to Windows: fast browsing and smart cleanup. I'm building it phase by phase against a written spec.

**Stack:** **⚠ Verify**

## 21. Varunya Technologies (update the existing card)

**Category:** Client Websites · Brand · **Status:** Live

**One-liner:** My AI and digital agency: website, brand system and content engine.

**Case study:** Varunya Technologies is the AI and digital agency I founded in Surat. Beyond the website, I designed the Void Obsidian brand system (#0A0A0B with gold #C9A961) and a V-monogram group identity with lockups for each division. I also produce the agency's content, including a 30-second promo reel with deterministic rendering, original music and a TTS voiceover, and I built its Google Sheets financial dashboard with Apps Script.

**Highlights**

- Void Obsidian design system used across all agency work
- Group identity: V monogram with Technologies, Studio and Labs lockups
- Programmatic video production and a social content system
- Apps Script financial dashboard

## Held back on purpose

- **Export Buyer-Finder Agent:** still at the planning stage. Add it once it's running.
- **Excluded at your request:** DharmaShree Logistics, Agent Desk, Kushagra.
