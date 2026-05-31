export const PROFILE = {
  name: "PRINCE PATEL",
  subtitle: "Gen AI & ML Engineer",
  tagline:
    "I’m Prince Patel, a Gen AI and ML Engineer who turns research ideas into working products. I design and ship models that are fast, robust, and simple to use — from LLM-powered assistants and RAG pipelines to computer-vision and analytics workflows. Beyond accuracy scores, I care about latency, monitoring, and how real people experience the product in production.",
  location: "Surat, Gujarat, India",
  email: "princepatel01258@gmail.com",
  phone: "+91 910-613-9666",
  linkedin: "https://linkedin.com/in/prince-patel-01601pj",
  linkedinLabel: "/in/prince-patel-01601pj",
  availability: "Open to internships & freelance",
  responseTime: "within 24 hours",
  collaboration: "Internships, freelance projects, and part-time roles",
  yearsExperience: 4,
  projectsCompleted: 18,
  technologies: 15,
  awards: 4,
  hero: {
    role: "Gen AI & ML Engineer",
    grade: "S · ELITE",
    class: "AI & ML Artificer",
    range: "Global · Remote",
    movingSpeed: "Rapid Iteration",
  },
};

export const SKILLS_PAGE = {
  desc: "Skills for me are problem-solving frameworks, not just tools. They help me move from raw data and vague ideas to clear systems — one layer at a time.",
  subDesc: "Vision is deciding why a system should exist before deciding which model to use. Purpose, constraints, and users guide every technical choice.",
  question: "CURIOUS HOW THIS WEBSITE AND MY MODELS ARE BUILT?",
  columns: [
    {
      title: "ML ENGINEERING",
      items: [
        "Problem framing & experimentation strategy",
        "Feature engineering & model selection",
        "Training, validation and error analysis",
        "Building and hardening inference pipelines",
        "Monitoring, logging and model iteration"
      ]
    },
    {
      title: "DATA & ANALYTICS",
      items: [
        "Data cleaning and preprocessing",
        "SQL and NoSQL for analytics (Postgres, MongoDB)",
        "Dashboards with Excel, Power BI, Tableau, Fabric",
        "Business intelligence and reporting flows",
        "Turning metrics into product decisions"
      ]
    },
    {
      title: "GEN AI & SYSTEMS",
      items: [
        "Large Language Models and prompt design",
        "RAG and multi-context retrieval pipelines",
        "Computer vision and deep learning models",
        "API design and integration (RESTful services)",
        "Containerization and deployment with Docker"
      ]
    }
  ]
};

export const SKILLS = [
  {
    name: "LLMs / Prompt Design",
    rarity: "MYTHIC",
    level: 95,
    icon: "◆",
    desc: "Context engineering, system prompts, structured outputs, agent design.",
    color: "#d97757",
  },
  {
    name: "RAG & Vector Search",
    rarity: "LEGENDARY",
    level: 93,
    icon: "◈",
    desc: "Hybrid retrieval, reranking, chunking strategies, metadata filtering.",
    color: "#a03b2d",
  },
  {
    name: "ML & Anomaly Detection",
    rarity: "LEGENDARY",
    level: 90,
    icon: "◉",
    desc: "XGBoost, supervised/unsupervised learning, validation pipelines.",
    color: "#f4d7c5",
  },
  {
    name: "Computer Vision",
    rarity: "EPIC",
    level: 88,
    icon: "◇",
    desc: "Object detection, YOLO, classification, OpenCV preprocessing.",
    color: "#d97757",
  },
  {
    name: "Python & FastAPIs",
    rarity: "EPIC",
    level: 92,
    icon: "✦",
    desc: "High-performance inference servers, background workers, async jobs.",
    color: "#a03b2d",
  },
  {
    name: "Data & BI Dashboards",
    rarity: "EPIC",
    level: 87,
    icon: "◊",
    desc: "SQL, Power BI, Fabric, Tableau, connecting model outputs to business metrics.",
    color: "#d97757",
  },
];

export const PROJECTS = [
  {
    id: "01",
    title: "TRADLY SIGNAL ENGINE",
    category: "ML Engineering",
    year: "2025",
    client: "Tradly Platform",
    role: "Lead Backend & Signal Engineer",
    challenge:
      "Traders needed highly reliable, real-time Forex buy/sell signals without lag or noisy execution alerts.",
    solution:
      "Built a FastAPI-powered signals engine utilizing a 5-confluence algorithmic methodology, integrated with Celery worker pools, PostgreSQL connection pooling, and real-time WebSockets.",
    impact: "Delivered active signal alerts to frontend dashboards with sub-150ms execution latency and a 99.9% pipeline uptime.",
    stack: ["FastAPI", "Python", "Supabase", "PostgreSQL", "Celery", "WebSockets"],
    duration: "10 Weeks",
    rarity: "MYTHIC",
    accent: "#d97757",
  },
  {
    id: "02",
    title: "SHIVNESHWAR TEXTILES",
    category: "Data & Analytics",
    year: "2026",
    client: "Shiveshwar Enterprises",
    role: "Next.js & Supply Chain Developer",
    challenge:
      "A major B2B textile manufacturer in Surat struggled to coordinate bulk order pipelines, fabric inventory, and capacity estimates across looms.",
    solution:
      "Designed and deployed a high-performance Next.js landing and supply chain tracking system featuring detailed B2B product catalogs, live capacity metrics (1M+ meters/month tracking), and interactive Anime.js visualizers.",
    impact: "Streamlined B2B buyer inquiries by 40% and removed manual inventory status lag.",
    stack: ["Next.js", "TypeScript", "TailwindCSS v4", "Anime.js", "Base UI", "PostgreSQL"],
    duration: "8 Weeks",
    rarity: "LEGENDARY",
    accent: "#f4d7c5",
  },
  {
    id: "03",
    title: "VARUNYA TECHNOLOGIES",
    category: "Gen AI & Systems",
    year: "2025",
    client: "Varunya International",
    role: "AI Solutions & Lead UI Architect",
    challenge:
      "Varunya required a premium, highly interactive digital presence to showcase its AI transformation capabilities across 14+ business sectors.",
    solution:
      "Created a GSAP-heavy, interactive Next.js application including a custom TechOrbit component, fluid noise canvases, and performance-tuned layout transitions.",
    impact: "Increased user engagement duration by 150% and generated qualified inbound leads for AI integration projects.",
    stack: ["Next.js", "GSAP", "TypeScript", "TailwindCSS v3", "HTML5 Canvas"],
    duration: "6 Weeks",
    rarity: "EPIC",
    accent: "#a03b2d",
  },
  {
    id: "04",
    title: "MANASVI FASHION",
    category: "Gen AI & Systems",
    year: "2024",
    client: "Manasvi Garments",
    role: "Full Stack Developer",
    challenge:
      "Managing a multi-vendor, premium women's ethnic wear marketplace with thousands of SKUs led to database bottlenecks and cart drop-offs.",
    solution:
      "Developed a full-stack Next.js e-commerce engine (Luxe Kurtis & Dresses) backed by Prisma ORM, implementing advanced search indexing, optimized database relationships, and wishlist pipelines.",
    impact: "Accelerated product search query speeds by 2.5x and decreased user checkout friction by 35%.",
    stack: ["Next.js", "Prisma ORM", "PostgreSQL", "TailwindCSS", "TypeScript"],
    duration: "12 Weeks",
    rarity: "LEGENDARY",
    accent: "#d97757",
  },
];

export const TIMELINE = [
  {
    year: "2021",
    title: "First Steps in ML",
    desc: "Learned Python and wrote my first classification models. Discovered the power of data.",
    era: "FOUNDATION",
  },
  {
    year: "2022",
    title: "Data and BI Focus",
    desc: "Built dashboards, wrangled noisy databases, and connected data directly to business decisions.",
    era: "FORGE",
  },
  {
    year: "2023",
    title: "Advanced Deep Learning",
    desc: "Built computer-vision pipelines and custom tabular classifiers for real-world deployments.",
    era: "ASCENT",
  },
  {
    year: "2024",
    title: "Gen AI and LLM Pivot",
    desc: "Began building prompt-driven systems, RAG retrieval pipelines, and vector-search systems.",
    era: "EVOLUTION",
  },
  {
    year: "2026",
    title: "AI Systems Architect",
    desc: "Designing robust, production-ready AI products focusing on latency and human-aligned UX.",
    era: "MASTERY",
  },
];

export const EXPERIENCE = [
  {
    company: "Gen AI / ML Consultancy",
    role: "AI & ML Engineer",
    period: "2024 — Present",
    location: "Surat, India",
    achievements: [
      "Designed and deployed 5+ production-grade RAG and agent systems",
      "Optimized model inference latency by 45% through custom caching and prompt engineering",
      "Created unified BI reporting dashboards feeding directly from live model inferences",
    ],
  },
  {
    company: "Data & Analytics Lab",
    role: "Data Analyst / ML Engineer",
    period: "2022 — 2024",
    location: "Surat, India",
    achievements: [
      "Maintained data warehouses and cleaned complex transaction tables for predictive modeling",
      "Built automated shipment auditing computer-vision workflows",
      "Deployed Power BI and Excel dashboards tracking key product performance metrics",
    ],
  },
];

export const PROCESS = [
  {
    num: "01",
    title: "FOUNDATION FIRST",
    desc: "Every project starts with understanding the problem, data sources, and constraints. I map out how AI actually fits into the product instead of forcing a model where it isn’t needed. Clear goals and evaluation metrics come first, architecture comes second.",
  },
  {
    num: "02",
    title: "CLEAN, READABLE ML CODE",
    desc: "I write ML code that other engineers can read, extend, and deploy. Modular training scripts, clear data pipelines, and documented configs make experiments repeatable and hand-off smooth for the rest of the team.",
  },
  {
    num: "03",
    title: "EXPERIENCES, NOT JUST MODELS",
    desc: "A great model is useless if the UX is confusing. I design flows where prompts, responses, and error states feel natural — whether it is a chatbot, internal tool, or dashboard. Latency, fallbacks, and guardrails are treated as part of the product, not an afterthought.",
  },
  {
    num: "04",
    title: "DATA, EVALUATION & FEEDBACK",
    desc: "I prefer measurable progress: datasets and test suites, offline metrics, and human feedback loops. From prompt A/B tests to regression checks on new model versions, I make sure changes are backed by data.",
  },
  {
    num: "05",
    title: "RELIABLE DELIVERY & HANDOVER",
    desc: "I document setups, decisions, and edge cases so projects can grow after launch. That includes environment setups, model cards, and runbooks for debugging, so teams can iterate confidently over time.",
  },
];

export const SERVICES = [
  {
    num: "01",
    title: "ML DESIGN",
    subtitle: "from idea to prototype",
    desc: "I help you turn vague AI ideas into clear problem statements, data requirements, and prototype plans. Together we define what should be automated, what must remain human, and how to measure success so we build the right thing — not just the most complex model."
  },
  {
    num: "02",
    title: "ENGINEERING",
    subtitle: "every request is data",
    desc: "I implement the full stack around the model: APIs, orchestration, vector stores, and integrations. From Python services and RESTful endpoints to CI/CD and containerization, I make sure the system is secure, observable, and ready to run in production."
  },
  {
    num: "03",
    title: "DATA & BI",
    subtitle: "from tables to decisions",
    desc: "I work with analytics tools and dashboards so teams can see the impact of AI work. That includes tracking experiments, building simple BI views, and connecting your ML outputs to the metrics that matter for the business."
  }
];

export const VISION = {
  intro: "Vision starts from the user and the problem, not the model. I combine ML, Gen AI, and data engineering with clear communication so stakeholders understand what the system does, why it behaves a certain way, and how it will evolve over time.",
  items: [
    "UNDERSTANDING PEOPLE, DATA AND CONTEXT BEFORE WRITING ANY CODE",
    "CHOOSING THE RIGHT MIX OF RULES, MODELS AND AUTOMATION FOR EACH PROBLEM",
    "DESIGNING INTERFACES WHERE AI IS HELPFUL BUT NEVER IN THE WAY",
    "BUILDING SYSTEMS THAT CAN BE MAINTAINED, DEBUGGED AND IMPROVED OVER TIME"
  ]
};

export const FAQS = [
  {
    q: "What kind of work do you do?",
    a: "I work on end-to-end AI solutions: data pipelines, model training, LLM integrations, and the APIs and dashboards needed to make them usable in real products."
  },
  {
    q: "Can you handle a project from idea to deployment?",
    a: "Yes. I enjoy starting from a rough idea or problem statement and taking it all the way to a running system — including experiments, evaluation, and basic monitoring."
  },
  {
    q: "Do you work remotely and with international teams?",
    a: "Yes. I’m comfortable collaborating remotely using async updates, clear documentation, and shared dashboards so progress is always visible, regardless of time zones."
  },
  {
    q: "What technologies do you prefer?",
    a: "For most projects I use Python, modern ML frameworks, SQL/NoSQL databases, and Gen AI stacks built around LLMs, RAG, and vector search, plus BI tools when needed."
  },
  {
    q: "Can you explain technical decisions to non-technical people?",
    a: "Yes. I put extra effort into naming, diagrams, and simple language so decisions and trade-offs are easy to follow for product, business, and design teams."
  },
  {
    q: "Do you support projects after launch?",
    a: "I can help with post-launch iteration: debugging, adding new features, improving prompts and models, and refining dashboards as you learn from real usage."
  }
];

export const TESTIMONIALS = [
  {
    name: "Elena Voss",
    role: "Product Lead, Stealth AI",
    quote:
      "Prince turned our complex data pipeline into a clean, operational ML flow. His work didn't just function — it was easy to monitor and explain.",
  },
  {
    name: "Marcus Chen",
    role: "Engineering Director",
    quote:
      "He designs RAG solutions that are robust in production. Beyond accuracy, his focus on latency and fail-safes saved us months of engineering time.",
  },
];

export const HEROIC_LINES = [
  { en: "MODELS GROWN IN THE DARK", zh: "在黑暗中成长的模型" },
  { en: "SHIPPED INTO LIGHT", zh: "运送进光明" },
  { en: "DATA SPEAKS TRUE", zh: "数据真实发言" },
  { en: "EXPERIENCE ALIGNMENT", zh: "经验对齐" },
];
