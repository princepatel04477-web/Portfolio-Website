export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CareerItem {
  role: string;
  company: string;
  date: string;
  loc: string;
  bullets: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface ReviewItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TechItem {
  name: string;
  logo: string;
  category: "AI / ML" | "Frontend" | "Backend" | "Database & Cloud" | "Tools & Design";
}

export const profile = {
  name: "Prince Patel",
  roles: [
    "AI Engineer",
    "Full-Stack Developer",
    "Founder, Varunya Technologies"
  ],
  tagline: "Engineering Scalable Intelligence & High-Fidelity Digital Platforms",
  valueProp: "I build digital environments where deep technology meets flawless visual execution.",
  location: "Surat, India",
  timezone: "Asia/Kolkata",
  email: "princepatel01258@gmail.com",
  calendlyUrl: "https://calendly.com",
  resumeUrl: "/Linked_profile.pdf",
  bio: [
    "As an AI engineer and founder, I operate at the intersection of complex backend logic, machine learning pipelines, and high-fidelity user experiences.",
    "Through Varunya Technologies and collaborations with global partners, I translate ambitious concepts into production-grade systems across textiles, fintech, jewellery, e-commerce, and enterprise workflows.",
    "Every build is engineered with zero bloat, rigorous type safety, fluid motion, and verifiable business impact."
  ],
  stats: [
    { value: 15, suffix: "+", label: "Projects Built" },
    { value: 10, suffix: "+", label: "Live Websites" },
    { value: 8, suffix: "", label: "Industries Served" },
    { value: 100, suffix: "%", label: "Production Uptime" }
  ],
  socials: {
    github: "https://github.com/princepatel04477-web",
    linkedin: "https://www.linkedin.com/in/prince-patel-01601pj",
    instagram: "https://www.instagram.com/prince12.58/",
    upwork: "https://www.upwork.com/freelancers/~019d0867d5496cc692?mp_source=share",
    email: "mailto:princepatel01258@gmail.com"
  },
  careerTimeline: [
    {
      role: "Founder & CTO",
      company: "Varunya Technologies",
      date: "June 2026 – Present",
      loc: "Surat, India",
      bullets: [
        "Founded and run an AI and digital agency, leading engineering and design of all client projects spanning textiles, jewellery, fashion, pharma and events.",
        "Delivered production platforms including STE 2026 (portal and website), Trivoxa Group, Aqualite Footwear, Civara Jewels, and Manasvi Fashion.",
        "Architected an AI photoshoot pipeline that converted 150+ jewellery CAD renders into hyper-realistic commercial catalogue images.",
        "Created the Void Obsidian brand system and automated programmatic content production pipelines."
      ]
    },
    {
      role: "AI/ML Engineer Intern",
      company: "ThinkNovus Private Limited",
      date: "June 2026 – October 2026",
      loc: "Ahmedabad, India",
      bullets: [
        "Architected TRADEX, an AI/ML forex intelligence and paper-trading platform.",
        "Split production services across Vercel (frontend), Render (FastAPI backend), and Neon Postgres.",
        "Integrated machine learning market sentiment and predictive algorithmic indicators for simulated trade strategies."
      ]
    },
    {
      role: "SDE Intern",
      company: "Bluestock Fintech",
      date: "October 2025 – January 2026",
      loc: "Pune, India (Remote)",
      bullets: [
        "Engineered financial analytics modules and responsive data-visualization widgets for equity screeners.",
        "Optimized frontend bundle and API request lifecycles for low-latency market charting tools."
      ]
    }
  ] as CareerItem[],
  certifications: [
    {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      issuer: "Accenture / Forage"
    },
    {
      title: "Large Language Model",
      issuer: "DeepLearning.AI / Coursera"
    },
    {
      title: "Machine Learning for Data Science Projects",
      issuer: "Coursera"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM"
    },
    {
      title: "Business Intelligence and Analytics (BUS250)",
      issuer: "P P Savani University / Coursera"
    }
  ] as CertificationItem[],
  testimonials: [
    {
      quote: "Prince designed and engineered a flawless digital experience for the Surat Textile Exhibition. The interactive exhibitor showcase, dynamic registration flows, and premium visual identity elevated our event presence. His attention to performance is unmatched.",
      author: "Bharat Haryani",
      role: "Operations Director",
      company: "Surat Textile Exhibition (STE 2026)"
    },
    {
      quote: "The e-commerce platform developed for Manasvi Fashion Surat has completely transformed our business operations. Prince created a highly responsive, mobile-first experience with a sleek admin dashboard and seamless product catalog. Recommended!",
      author: "Rahul Navapara",
      role: "Director",
      company: "Manasvi Fashion Surat"
    },
    {
      quote: "We needed a corporate website that communicates trust and showcases our manufacturing scale globally. Prince built a modern, highly optimized product showcase for Shiveshwar Textiles. Outstanding design quality and speed of execution.",
      author: "Parth Mangukiya",
      role: "Managing Director",
      company: "Shiveshwar Textiles"
    }
  ] as ReviewItem[],
  techStack: [
    // AI / ML
    { name: "Python", category: "AI / ML", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "PyTorch", category: "AI / ML", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "FastAPI", category: "AI / ML", logo: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "Ollama", category: "AI / ML", logo: "https://cdn.simpleicons.org/ollama/FFFFFF" },
    { name: "Scikit-Learn", category: "AI / ML", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
    
    // Frontend
    { name: "React", category: "Frontend", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", category: "Frontend", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "TypeScript", category: "Frontend", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", category: "Frontend", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "GSAP", category: "Frontend", logo: "https://cdn.simpleicons.org/greensock/88CE02" },
    { name: "Three.js", category: "Frontend", logo: "https://cdn.simpleicons.org/threedotjs/FFFFFF" },

    // Backend
    { name: "Node.js", category: "Backend", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Supabase", category: "Backend", logo: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "PostgreSQL", category: "Backend", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Redis", category: "Backend", logo: "https://cdn.simpleicons.org/redis/DC382D" },

    // Cloud & DevOps
    { name: "Cloudflare", category: "Database & Cloud", logo: "https://cdn.simpleicons.org/cloudflare/F38020" },
    { name: "Vercel", category: "Database & Cloud", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
    { name: "Git", category: "Tools & Design", logo: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Figma", category: "Tools & Design", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  ] as TechItem[]
};
