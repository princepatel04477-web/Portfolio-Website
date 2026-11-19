export type ProjectCategory = 
  | "Client Websites" 
  | "E-commerce" 
  | "AI & Automation" 
  | "Platforms & Products" 
  | "Fintech";

export type ProjectStatus = "Live" | "Prototype" | "In Development";

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  role: string;
  stack: string[];
  category: ProjectCategory;
  year: number;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  gallery?: string[];
  metrics?: string[];
  featured: boolean;
  highlights: string[];
  caseStudy: string;
}

export const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Client Websites",
  "E-commerce",
  "AI & Automation",
  "Platforms & Products",
  "Fintech",
];

export const projects: Project[] = [
  {
    slug: "ste-2026",
    title: "Surat Textile Exhibition (STE 2026)",
    oneLiner: "Website, exhibitor portal and back-office tooling for a 179-exhibitor textile trade show.",
    problem: "Coordinating 179 exhibitors required an automated portal for high-resolution logo intake, stall entitlement verification, and instant proforma generation without manual spreadsheet delays.",
    role: "Lead Developer & Operations Architect",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "GSAP", "Cloudflare", "Google Drive API", "Excel Automation"],
    category: "Client Websites",
    year: 2026,
    status: "Live",
    liveUrl: "https://stesurat.com",
    thumbnail: "/project_thumb/STE_thumbnail.png",
    gallery: ["/project_thumb/STE_thumbnail.png"],
    metrics: ["179 Exhibitors onboarded"],
    featured: true,
    highlights: [
      "Exhibitor portal with a logo-collection pipeline, proforma billing for extras and data export",
      "Extras rate-card feature on the public exhibition website",
      "Entitlement and procurement workbooks (stalls, lighting, extras) built from a 179-exhibitor master report",
      "Exhibitor contact management with deduplication, plus templated invoicing"
    ],
    caseStudy: "STE 2026 brought textile buyers and Surat exhibitors together at the SIECC Sarsana Dome on 12–13 September 2026. I built the public website and an exhibitor portal, and ran the operations tooling behind them: the portal collected exhibitor logos straight into Drive, generated proforma bills for extra stall requirements and exported clean data for the organisers. I continue to support the client after the event."
  },
  {
    slug: "tradex",
    title: "TRADEX (Tradly)",
    oneLiner: "An AI/ML forex intelligence and paper-trading platform.",
    problem: "Retail forex traders need high-probability setups and safe simulation environments driven by predictive machine learning market signals rather than risky guesswork.",
    role: "AI/ML Engineer & Full-Stack Developer",
    stack: ["Next.js", "Render", "Neon Postgres", "Vercel"],
    category: "Fintech",
    year: 2026,
    status: "Live",
    liveUrl: "https://tradex-main.vercel.app",
    thumbnail: "/project_thumb/tradex_thumbnail.svg",
    gallery: ["/project_thumb/tradex_thumbnail.svg"],
    featured: true,
    highlights: [
      "Paper-trading engine with AI-driven market analysis",
      "Production deployment split across Vercel, Render and Neon",
      "Roadmap: live forex data, AI decisions, terminal-style news and sentiment view"
    ],
    caseStudy: "TRADEX is a forex analysis and paper-trading platform that I built as my university project during my AI/ML internship at ThinkNovus. Traders test strategies without risking capital and get AI-assisted market signals. The full stack is deployed: frontend on Vercel, API on Render, and a Neon Postgres database. The next phase adds live forex feeds, news and sentiment in a terminal-style interface."
  },
  {
    slug: "trivoxa-group",
    title: "Trivoxa Group",
    oneLiner: "Corporate site for an import/export group, built around a persistent morphing 3D object.",
    problem: "An international export house needed a unified identity uniting physical commodity exports and digital service exports with an unforgettable immersive web presence.",
    role: "Lead Creative Technologist & Full-Stack Engineer",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Three.js / React Three Fiber", "GSAP", "Framer Motion", "Supabase", "Resend"],
    category: "Client Websites",
    year: 2026,
    status: "Live",
    liveUrl: "https://trivoxa-group.pages.dev",
    thumbnail: "/project_thumb/trivoxa_thumbnail.svg",
    gallery: ["/project_thumb/trivoxa_thumbnail.svg"],
    featured: true,
    highlights: [
      "Persistent cross-route morphing 3D object in React Three Fiber",
      "Cinematic globe-unfurl intro sequence",
      "Two-division information architecture with working enquiry backend"
    ],
    caseStudy: "Trivoxa operates two divisions, Product Exports and Service Exports (Trivoxa Digital). I designed the site around one 3D object that morphs from page to page and opens with a globe-unfurl sequence, so the brand reads as one continuous experience rather than separate pages. Contact flows run on Supabase and Resend."
  },
  {
    slug: "aqualite",
    title: "Aqualite Footwear",
    oneLiner: "A high-motion footwear storefront with a Seller Central-style admin dashboard.",
    problem: "Footwear brands need more than static mockups: they require fluid consumer storefront motion coupled with robust catalog, variant, and order administrative controls.",
    role: "Full-Stack E-Commerce Architect",
    stack: ["React", "React Bits", "GSAP", "Framer Motion", "Cloudflare Workers", "Tailwind CSS"],
    category: "E-commerce",
    year: 2026,
    status: "Live",
    liveUrl: "https://aqualite.aqualite.workers.dev",
    thumbnail: "/project_thumb/aqualite_thumbnail.svg",
    gallery: ["/project_thumb/aqualite_thumbnail.svg"],
    metrics: ["Edge-deployed on Cloudflare Workers"],
    featured: true,
    highlights: [
      "End-to-end storefront plus admin panel",
      "Custom motion system built with React Bits, GSAP and Framer Motion",
      "Seller Central-style admin for a single brand"
    ],
    caseStudy: "Aqualite needed a complete, working store, not a mockup. I built a motion-rich storefront with a product-led hero, plus a single-brand admin modelled on Amazon Seller Central for managing catalogue and orders. The whole system uses an ivory-and-red brand theme and runs on Cloudflare Workers."
  },
  {
    slug: "civara-jewels",
    title: "Civara Jewels & AI Pipeline",
    oneLiner: "Luxury jewellery storefront with secure in-house admin & 150+ CAD AI photoshoot pipeline.",
    problem: "Physical jewelry lifestyle photoshoots are prohibitively expensive and time-consuming, while bare CAD renders lack emotional appeal and photorealistic sparkle.",
    role: "AI Workflow Architect & Full-Stack Developer",
    stack: ["Google Flow (Nano Banana) · ChatGPT image generation", "Next.js", "SQLite", "iron-session", "Tailwind CSS"],
    category: "AI & Automation",
    year: 2026,
    status: "Live",
    liveUrl: "https://civara-jewels.vercel.app",
    thumbnail: "/project_thumb/civara_thumbnail.svg",
    gallery: ["/project_thumb/civara_thumbnail.svg"],
    metrics: ["150+ CAD models converted"],
    featured: true,
    highlights: [
      "Transformed 150+ jewellery CAD renders into photorealistic catalogue images",
      "Premium luxury jewellery storefront with rich motion",
      "Admin panel with iron-session auth and LAN-only access"
    ],
    caseStudy: "Civara's site presents its ring, pendant and earring collections in a premium storefront. Behind it is an admin panel that only works on the company's local network, with session-based authentication, so the catalogue can be managed safely in-house. Real CAD renders were composited onto AI-generated backdrops so the jewellery design is never altered, converting 150+ raw models into catalogue-ready imagery."
  },
  {
    slug: "nifty-pulse",
    title: "NiftyPulse",
    oneLiner: "Indian stock-market analytics with live indices, heatmaps and dual LLM insights.",
    problem: "Retail equity investors lack unified tooling for real-time sector strength heatmaps, dynamic screeners, and comparative LLM market reasoning.",
    role: "Lead Full-Stack & AI Engineer",
    stack: ["Next.js 14", "FastAPI", "Supabase", "Groq API", "Perplexity API", "Tailwind CSS"],
    category: "Fintech",
    year: 2026,
    status: "Live",
    liveUrl: "https://root-six-gamma.vercel.app",
    githubUrl: "https://github.com/princepatel04477-web",
    thumbnail: "/project_thumb/Nifty Pulse.png",
    gallery: ["/project_thumb/Nifty Pulse.png"],
    featured: true,
    highlights: [
      "Live indices, sector heatmap and stock screener",
      "Price alerts and virtual portfolio for zero-risk practice",
      "AI model comparison (Groq Llama 3 & Perplexity API) and a trading-education academy"
    ],
    caseStudy: "NiftyPulse is an analysis platform for Indian equities. It combines live index tracking, a sector heatmap and a stock screener with price alerts and a virtual portfolio for practice. LLMs through Groq and Perplexity power AI insights, with side-by-side model comparison, and a built-in academy teaches trading basics."
  },
  {
    slug: "varunya-technologies",
    title: "Varunya Technologies",
    oneLiner: "My AI and digital agency: website, Void Obsidian brand system and content engine.",
    problem: "High-growth businesses need an agency partner capable of handling complex AI integrations, bespoke web platforms, and automated brand content generation under one roof.",
    role: "Founder & CTO",
    stack: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel", "Google Apps Script"],
    category: "Client Websites",
    year: 2026,
    status: "Live",
    liveUrl: "https://varunyatechnologies.com/",
    thumbnail: "/project_thumb/Varunya_thumbnail.png",
    gallery: ["/project_thumb/Varunya_thumbnail.png"],
    featured: false,
    highlights: [
      "Void Obsidian design system (#0A0A0B with gold #C9A961) used across all agency work",
      "Group identity: V monogram with Technologies, Studio and Labs lockups",
      "Programmatic video production and a social content system",
      "Apps Script financial dashboard"
    ],
    caseStudy: "Varunya Technologies is the AI and digital agency I founded in Surat. Beyond the website, I designed the Void Obsidian brand system (#0A0A0B with gold #C9A961) and a V-monogram group identity with lockups for each division. I also produce the agency's content, including a 30-second promo reel with deterministic rendering, original music and a TTS voiceover, and I built its Google Sheets financial dashboard with Apps Script."
  },
  {
    slug: "manasvi-fashion",
    title: "Manasvi Fashion",
    oneLiner: "An e-commerce store for Indian ethnic wear with boutique motion and admin.",
    problem: "Ethnic fashion retailers require intricate multi-variant inventory management (sizes, fabrics, colors) coupled with a graceful, boutique-grade shopping experience.",
    role: "Full-Stack Developer & Motion Designer",
    stack: ["Next.js", "Supabase", "GSAP", "Lenis", "Anime.js", "Framer Motion", "Vercel"],
    category: "E-commerce",
    year: 2026,
    status: "Live",
    liveUrl: "https://manasvifashionsurat.com/",
    thumbnail: "/project_thumb/manasvi_thumbnail.png",
    gallery: ["/project_thumb/manasvi_thumbnail.png"],
    featured: false,
    highlights: [
      "Catalogue with variants, checkout and admin dashboard",
      "Motion layer built with GSAP, Lenis, Anime.js and Framer Motion",
      "Responsive mobile-first navigation and cart flow"
    ],
    caseStudy: "Manasvi Fashion sells Indian ethnic wear online. The store has a product catalogue with variants, checkout and an admin dashboard, and it is layered with smooth scrolling and animation to give it a boutique feel."
  },
  {
    slug: "shiveshwar-textiles",
    title: "Shiveshwar Textiles",
    oneLiner: "A B2B export site that presents a Surat fabric manufacturer to European buyers.",
    problem: "Textile manufacturing companies often lose out on European B2B procurement deals because their web catalogs fail to showcase production capacity and technical fabric specifications.",
    role: "Web Architect & Frontend Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Vercel"],
    category: "Client Websites",
    year: 2026,
    status: "Live",
    liveUrl: "https://www.shiveshwartextiles.com/",
    thumbnail: "/project_thumb/Shivehswar_textiles.png",
    gallery: ["/project_thumb/Shivehswar_textiles.png"],
    featured: false,
    highlights: [
      "Fully animated landing experience with performance focus",
      "Export-focused catalogue and capability storytelling",
      "Direct B2B trade enquiry workflow"
    ],
    caseStudy: "Shiveshwar Textiles manufactures fabric in Surat and wanted to reach German and European buyers. I built an animated corporate site that shows their manufacturing capability and product catalogue to an overseas B2B audience."
  },
  {
    slug: "sunrise-tex-fab",
    title: "Maa Sheetla × Sunrise Tex Fab",
    oneLiner: "A dual-brand textile site built on a custom image system and zero-cost form backend.",
    problem: "Two sister textile enterprises needed a unified portal with zero monthly hosting costs while loading dozens of high-res fabric visuals instantaneously.",
    role: "Full-Stack Developer & Technical Lead",
    stack: ["HTML5", "CSS3", "Vanilla JS", "Sharp", "Google Apps Script", "Cloudflare Pages"],
    category: "Client Websites",
    year: 2026,
    status: "Live",
    liveUrl: "https://maa-sheetla.pages.dev",
    thumbnail: "/project_thumb/sunrise_thumbnail.svg",
    gallery: ["/project_thumb/sunrise_thumbnail.svg"],
    featured: false,
    highlights: [
      "30-asset image system with art direction and an automated Sharp build",
      "Google Apps Script enquiry backend with zero server bills",
      "Domain, DNS and Workspace mail managed on Cloudflare"
    ],
    caseStudy: "One website represents two sister firms. The brief required plain HTML, CSS and JavaScript, so I made the site feel premium through imagery: a 30-asset image system with art-direction rules and generation prompts, plus a Sharp build script that produces optimised image sizes. Enquiries go to a Google Apps Script backend, so there are no server costs."
  },
  {
    slug: "aurelia",
    title: "AURELIA Luxury Concept",
    oneLiner: "A cinematic, 3D-driven concept for a luxury jewellery store.",
    problem: "Standard e-commerce grids fail to convey the emotional allure, brilliance, and tactile luxury demanded by high-jewelry collectors.",
    role: "Creative Director & 3D WebGL Developer",
    stack: ["React", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS", "Vercel"],
    category: "E-commerce",
    year: 2026,
    status: "Prototype",
    liveUrl: "https://aurelia-sandy-five.vercel.app",
    thumbnail: "/project_thumb/aurelia_thumbnail.svg",
    gallery: ["/project_thumb/aurelia_thumbnail.svg"],
    featured: false,
    highlights: [
      "Cinematic 3D WebGL luxury jewellery interaction",
      "Experimental motion system pushing browser render limits",
      "Testing lab for enterprise client animation pipelines"
    ],
    caseStudy: "AURELIA is my own concept for how luxury jewellery could be sold online: the experience is carried by motion and 3D rather than a slideshow of product photos. It's where I test the most ambitious motion and interaction ideas before using them in client work."
  },
  {
    slug: "arvex-pharma",
    title: "Arvex Pharma (Concept)",
    oneLiner: "A light-themed B2B prototype for a pharmaceutical exporter.",
    problem: "Pharmaceutical exporters require lightweight, compliant, and lightning-fast digital catalogs with reliable lead routing for overseas distributors.",
    role: "Full-Stack Engineer",
    stack: ["Next.js 15 (App Router)", "React Bits", "Cloudflare Pages", "Tailwind CSS"],
    category: "Client Websites",
    year: 2026,
    status: "Prototype",
    liveUrl: "https://arvex-pharma.pages.dev",
    thumbnail: "/project_thumb/arvex_thumbnail.svg",
    gallery: ["/project_thumb/arvex_thumbnail.svg"],
    featured: false,
    highlights: [
      "Production-ready static prototype with optimized enquiry endpoint",
      "Clean light-themed medical/pharma aesthetic",
      "Edge-hosted on Cloudflare Pages"
    ],
    caseStudy: "This is a production-ready prototype for an Indian pharmaceutical wholesaler and exporter. It's a fast static site with a content layer and one API route for enquiries. Labelled Concept as the real client name is protected."
  },
  {
    slug: "cafe-os",
    title: "CafeOS — Smart Café Ordering",
    oneLiner: "Multi-tenant QR ordering for cafés, with separate panels for platform, owners and staff.",
    problem: "Independent cafes waste staff time on paper menus and struggle with costly POS subscriptions and kitchen order dispatch confusion.",
    role: "Full-Stack Product Architect",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    category: "Platforms & Products",
    year: 2026,
    status: "In Development",
    thumbnail: "/project_thumb/cafeos_thumbnail.svg",
    gallery: ["/project_thumb/cafeos_thumbnail.svg"],
    featured: false,
    highlights: [
      "Multi-tenant: platform, owner and staff roles",
      "QR menu with table-number ordering (no rotating codes)",
      "Live order and sales dashboard with real-time sync"
    ],
    caseStudy: "Customers scan a QR code, enter their table number, browse the menu and order. Owners manage tables, staff and sales from their own dashboard, staff can place orders for walk-in customers, and a super-admin panel oversees every café on the platform."
  },
  {
    slug: "school-store",
    title: "School Store",
    oneLiner: "A school-uniform store with native Android app and size recommendations.",
    problem: "Online school uniform shopping suffers from high return rates and sizing confusion due to variance across children's rapid growth stages.",
    role: "Full-Stack & Mobile Developer",
    stack: ["React", "Node.js", "PostgreSQL", "Oracle Cloud", "Android / Kotlin"],
    category: "Platforms & Products",
    year: 2026,
    status: "In Development",
    thumbnail: "/project_thumb/schoolstore_thumbnail.svg",
    gallery: ["/project_thumb/schoolstore_thumbnail.svg"],
    featured: false,
    highlights: [
      "Native Android application with custom sizing algorithm",
      "Automated height and weight size recommendation engine",
      "Self-hosted backend on Oracle Cloud Infrastructure"
    ],
    caseStudy: "School Store sells school uniforms online and is self-hosted on Oracle Cloud. The Android app is native rather than a website in a wrapper, and it recommends the right size from a child's height and weight."
  },
  {
    slug: "sift",
    title: "Sift — File Manager for Windows",
    oneLiner: "Files by Google, rebuilt for the modern Windows desktop.",
    problem: "Default desktop file explorers are bloated, sluggish, and lack automated smart cleanup for cache, duplicate downloads, and orphaned directories.",
    role: "Desktop Software Engineer",
    stack: [],
    category: "Platforms & Products",
    year: 2026,
    status: "In Development",
    thumbnail: "/project_thumb/sift_thumbnail.svg",
    gallery: ["/project_thumb/sift_thumbnail.svg"],
    featured: false,
    highlights: [
      "Files by Google inspired UX for Windows desktop",
      "Instant duplicate finder and disk usage analyzer",
      "High-performance native disk scanning"
    ],
    caseStudy: "Sift brings the simplicity of Android's Files by Google to Windows: fast browsing and smart cleanup. Built phase by phase against a written spec with lightweight native speed."
  },
  {
    slug: "nuvent",
    title: "Nuvent — Event Management Software",
    oneLiner: "Event management software built under Varunya Technologies.",
    problem: "Event management software built under Varunya Technologies.",
    role: "Full-Stack Architect",
    stack: [],
    category: "Platforms & Products",
    year: 2026,
    status: "In Development",
    thumbnail: "/project_thumb/nuvent_thumbnail.svg",
    gallery: ["/project_thumb/nuvent_thumbnail.svg"],
    featured: false,
    highlights: [
      "Event management software built under Varunya Technologies"
    ],
    caseStudy: "Event management software built under Varunya Technologies."
  }
];
