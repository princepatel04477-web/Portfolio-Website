import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Calendar, Copy, FileText, Check, ArrowUpRight, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from './Hero';
import MagneticButton from './MagneticButton';
import CustomCursor from './CustomCursor';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Word-by-word reveal component for key statements
function WordReveal({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll('.reveal-word');
      if (words && words.length > 0) {
        gsap.fromTo(words,
          { opacity: 0.15, y: 3 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'bottom 60%',
              scrub: 0.5,
            }
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, [text]);

  return (
    <p ref={containerRef} className={className}>
      {text.split(' ').map((word, idx) => (
        <span key={idx} className="reveal-word" style={{ display: 'inline-block', marginRight: '0.28em', willChange: 'opacity, transform' }}>
          {word}
        </span>
      ))}
    </p>
  );
}

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  skills: string[];
  tag: string;
  side: 'left' | 'right';
  rotate: string;
  shift: string;
  offset: string;
}

interface ProjectItem {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  highlights: string[];
  link: string;
}

interface CareerItem {
  role: string;
  company: string;
  date: string;
  loc: string;
}

interface ReviewItem {
  quote: string;
  author: string;
  role: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
}

const servicesList: ServiceItem[] = [
  {
    num: "01",
    title: "Web Design",
    desc: "Creating websites that convert visitors into customers. I design modern, high-performance websites focused on user experience, business goals, and visual storytelling. Every interface is crafted to build trust and drive action.",
    skills: ["Landing Pages", "Business Websites", "Responsive Design", "Conversion Optimization", "UI Prototyping", "Performance Focus"],
    tag: "UX & Conversion",
    side: "left",
    rotate: "-1deg",
    shift: "5px",
    offset: "100px"
  },
  {
    num: "02",
    title: "Product Design",
    desc: "Turning ideas into scalable digital products. From concept validation to final execution, I design products that solve real problems and create meaningful user experiences.",
    skills: ["Product Strategy", "User Research", "Wireframing", "MVP Design", "User Flows", "Design Systems"],
    tag: "Concept to Scale",
    side: "right",
    rotate: "1deg",
    shift: "-5px",
    offset: "115px"
  },
  {
    num: "03",
    title: "UI/UX Systems",
    desc: "Building consistent experiences across every screen. I create scalable design systems that help products maintain consistency while improving development speed and usability.",
    skills: ["Design Systems", "Component Libraries", "UX Audits", "Accessibility", "Information Architecture", "User Journey Mapping"],
    tag: "Scalable Systems",
    side: "left",
    rotate: "-1.5deg",
    shift: "-4px",
    offset: "130px"
  },
  {
    num: "04",
    title: "Graphic Design",
    desc: "Designing visuals that strengthen brand identity. I create impactful graphics that communicate ideas clearly while maintaining a professional and memorable visual presence.",
    skills: ["Brand Assets", "Marketing Creatives", "Social Graphics", "Print Design", "Banner Design", "Visual Storytelling"],
    tag: "Brand Identity",
    side: "right",
    rotate: "0.5deg",
    shift: "6px",
    offset: "145px"
  },
  {
    num: "05",
    title: "Visual Design",
    desc: "Crafting premium visual experiences that stand out. I blend typography, color, motion, and composition to create modern digital experiences that leave a lasting impression.",
    skills: ["Creative Direction", "Visual Identity", "Typography Systems", "Motion Concepts", "Brand Guidelines", "Digital Experiences"],
    tag: "Creative Direction",
    side: "left",
    rotate: "-0.5deg",
    shift: "-6px",
    offset: "160px"
  },
  {
    num: "06",
    title: "AI Solutions",
    desc: "Building intelligent tools that automate work and save time. I create AI-powered applications, automations, and workflows that help businesses improve efficiency and scale operations.",
    skills: ["AI Integrations", "Custom AI Tools", "Workflow Automation", "Chatbots", "Lead Generation Systems", "Data Processing"],
    tag: "Intelligence & Speed",
    side: "right",
    rotate: "1deg",
    shift: "4px",
    offset: "175px"
  },
  {
    num: "07",
    title: "Social Media Design",
    desc: "Creating content that helps brands look professional online. I design engaging social media creatives that align with a brand's identity and improve audience engagement.",
    skills: ["Instagram Posts", "Carousel Design", "Story Design", "Promotional Creatives", "Event Posters", "Brand Consistency"],
    tag: "Audience Engagement",
    side: "left",
    rotate: "-1deg",
    shift: "-5px",
    offset: "190px"
  },
  {
    num: "08",
    title: "Website Development",
    desc: "Developing fast, modern, and scalable web experiences. I build responsive websites using modern technologies with a focus on performance, maintainability, and user experience.",
    skills: ["React Development", "Next.js Development", "TypeScript", "Tailwind CSS", "Supabase Integration", "Performance Optimization"],
    tag: "Next-Gen Dev",
    side: "right",
    rotate: "1.5deg",
    shift: "5px",
    offset: "205px"
  }
];

const projectsList: ProjectItem[] = [
  {
    title: "Varunya Technologies",
    category: "Agency Website / AI & Technology",
    desc: "A modern digital agency website built to showcase AI solutions, website development, digital products, and technology services. Designed with a premium visual identity and optimized for client acquisition.",
    tech: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    highlights: [
      "Premium agency branding",
      "Modern UI/UX design",
      "Service showcase architecture",
      "Lead generation focused",
      "Fully responsive",
      "Performance optimized"
    ],
    link: "https://varunyatechnologies.com/"
  },
  {
    title: "Manasvi Fashion",
    category: "Fashion E-Commerce Platform",
    desc: "A modern fashion commerce platform built for a Surat-based clothing brand. The platform focuses on elegant product presentation, inventory management, and seamless shopping experiences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay"],
    highlights: [
      "Fashion-focused UI",
      "Product variant management",
      "Admin dashboard",
      "Mobile-first experience",
      "Secure online payments",
      "Inventory management"
    ],
    link: "https://manasvifashionsurat.com/"
  },
  {
    title: "Surat Textile Exhibition",
    category: "B2B Event Platform",
    desc: "A premium digital platform designed for one of Surat's textile industry exhibitions. Built to connect exhibitors, buyers, and industry professionals through a modern digital experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Event management experience",
      "Exhibitor showcase",
      "Visitor information system",
      "Professional business branding",
      "Responsive design",
      "Premium presentation"
    ],
    link: "https://stefinalprototype.vercel.app/"
  },
  {
    title: "Shiveshwar Textiles",
    category: "Textile Manufacturing Website",
    desc: "A professional textile industry website developed to showcase products, manufacturing capabilities, and business information while building trust among global buyers.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Product catalog showcase",
      "Corporate branding",
      "Business inquiry system",
      "Mobile responsive",
      "SEO friendly",
      "Industry-focused design"
    ],
    link: "https://www.shiveshwartextiles.com/"
  },
  {
    title: "Nifty Pulse",
    category: "FinTech Dashboard",
    desc: "An intelligent stock market analytics platform that provides traders with market insights, technical analysis, and data-driven decision-making tools through an intuitive interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Financial APIs", "Charts"],
    highlights: [
      "Market analytics dashboard",
      "Real-time data visualization",
      "Technical analysis tools",
      "Advanced charting",
      "Modern fintech UI",
      "Performance optimized"
    ],
    link: "https://root-six-gamma.vercel.app/"
  }
];

const careerTimeline: CareerItem[] = [
  {
    role: "CTO",
    company: "Varunya Technologies",
    date: "June 2026 – Present",
    loc: "Surat, India"
  },
  {
    role: "AI/ML Engineer",
    company: "ThinkNovus",
    date: "June 2026 – October 2026",
    loc: "Ahmedabad, India"
  },
  {
    role: "SDE Intern",
    company: "Bluestock Fintech",
    date: "October 2025 – January 2026",
    loc: "Pune, India (Remote)"
  }
];

const clientReviews: ReviewItem[] = [
  {
    quote: "Prince designed and engineered a flawless digital experience for the Surat Textile Exhibition. The interactive exhibitor showcase, dynamic registration flows, and premium visual identity elevated our event presence. His attention to performance is unmatched.",
    author: "Bharat Haryani",
    role: "Surat Textile Exhibition"
  },
  {
    quote: "The e-commerce platform developed for Manasvi Fashion Surat has completely transformed our business operations. Prince created a highly responsive, mobile-first experience with a sleek admin dashboard and seamless product catalog. Recommended!",
    author: "Rahul Navapara",
    role: "Manasvi Fashion Surat"
  },
  {
    quote: "We needed a corporate website that communicates trust and showcases our manufacturing scale globally. Prince built a modern, highly optimized product showcase for Shiveshwar Textiles. Outstanding design quality and speed of execution.",
    author: "Parth Mangukiya",
    role: "Shiveshwar Textiles"
  }
];

const certificationsList: CertificationItem[] = [
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
];

interface MarqueeSkillItem {
  name: string;
  isTech: boolean;
  logoUrl?: string;
}

const marqueeTrack1: MarqueeSkillItem[] = [
  { name: "Python", isTech: true, logoUrl: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Ollama", isTech: true, logoUrl: "https://cdn.simpleicons.org/ollama/FFFFFF" },
  { name: "LM Studio", isTech: true, logoUrl: "https://cdn.simpleicons.org/lmstudio/FFFFFF" },
  { name: "Fine Tuning", isTech: false },
  { name: "Machine Learning", isTech: false },
  { name: "Deep Learning", isTech: false },
  { name: "Data Analytics", isTech: false },
  { name: "Business Intelligence", isTech: false },
  { name: "AI Solutions", isTech: false },
  { name: "Workflow Automation", isTech: false }
];

const marqueeTrack2: MarqueeSkillItem[] = [
  { name: "React", isTech: true, logoUrl: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", isTech: true, logoUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Next.js", isTech: true, logoUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Tailwind CSS", isTech: true, logoUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Supabase", isTech: true, logoUrl: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "GSAP", isTech: true, logoUrl: "https://cdn.simpleicons.org/greensock/88CE02" },
  { name: "Vercel", isTech: true, logoUrl: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Git", isTech: true, logoUrl: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Figma", isTech: true, logoUrl: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Node.js", isTech: true, logoUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "REST APIs", isTech: false },
  { name: "UX Systems", isTech: false }
];

const cardStackVariants = {
  initial: () => {
    return {
      y: 80,
      z: -120,
      scale: 0.88,
      opacity: 0,
      zIndex: 5,
      filter: 'blur(4px)',
    };
  },
  animate: (diff: number) => {
    if (diff === 0) {
      return {
        y: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
        filter: 'blur(0px)',
      };
    } else if (diff === 1) {
      return {
        y: 16,
        z: -30,
        scale: 0.97,
        opacity: 0.8,
        zIndex: 9,
        filter: 'blur(1px)',
      };
    } else if (diff === 2) {
      return {
        y: 32,
        z: -60,
        scale: 0.94,
        opacity: 0.6,
        zIndex: 8,
        filter: 'blur(2px)',
      };
    } else if (diff === 3) {
      return {
        y: 48,
        z: -90,
        scale: 0.91,
        opacity: 0.4,
        zIndex: 7,
        filter: 'blur(3px)',
      };
    } else if (diff === 4) {
      return {
        y: 64,
        z: -120,
        scale: 0.88,
        opacity: 0.2,
        zIndex: 6,
        filter: 'blur(4px)',
      };
    } else {
      return {
        y: 80,
        z: -150,
        scale: 0.85,
        opacity: 0,
        zIndex: 5,
        filter: 'blur(5px)',
      };
    }
  },
  exit: {
    y: -240,
    z: 60,
    scale: 1.04,
    opacity: 0,
    zIndex: 15,
    filter: 'blur(4px)',
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18
    }
  }
};

function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const globalParticlesRef = useRef<HTMLCanvasElement>(null);

  // Global particle animation loop inheriting accent color
  useEffect(() => {
    const canvas = globalParticlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Create 60 floating particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.5,
        speedY: -(Math.random() * 0.2 + 0.05),
        speedX: (Math.random() - 0.5) * 0.08,
        opacity: Math.random() * 0.35 + 0.15,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue('--ambient-accent-1')
        .trim() || '16, 185, 129';

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX = -p.speedX;
        }

        ctx.fillStyle = `rgba(${accent}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.1,
      infinite: false,
    });

    setLenis(lenisInstance);

    // Active Tab Boundaries Tracker
    const handleScroll = () => {
      ScrollTrigger.update();
      
      const sections = ['home', 'skills', 'about', 'portfolio', 'reviews', 'contact'];
      const viewportMid = window.innerHeight * 0.3;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    lenisInstance.on('scroll', handleScroll);

    // GSAP Ticker Connection
    const updateTicker = (time: number) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Entrance Animation for Floating Navigation Capsule
    gsap.fromTo('.floating-nav-container',
      { y: 65, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1.2 }
    );

    // ----------------------------------------------------
    // ScrollTrigger 1: Pinned 3D card flips & translations
    // ----------------------------------------------------
    const xRight = () => window.innerWidth <= 768 ? 0 : Math.min(420, window.innerWidth * 0.25);
    const yDown1 = () => window.innerWidth <= 768 ? 0 : 70;

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top top',
        end: '+=5150',
        scrub: 1.2,
        pin: '.portrait-card-wrapper',
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    scrollTl
      .to('.portrait-card', {
        x: () => xRight(),
        y: () => yDown1(),
        rotationZ: 8,
        rotationY: 0,
        scale: 1,
        ease: 'power1.inOut',
        duration: 0.2
      })
      .to('.portrait-card', {
        rotationY: 180,
        rotationZ: 0,
        ease: 'power2.inOut',
        duration: 0.45
      })
      .to('.portrait-card', {
        scale: 1.18,
        ease: 'power1.inOut',
        duration: 1.2
      })
      .to('.portrait-card', {
        scale: 1,
        ease: 'power1.inOut',
        duration: 0.4
      })
      .to('.portrait-card', {
        x: () => xRight(),
        y: () => yDown1(),
        rotationY: 180,
        ease: 'none',
        duration: 0.6
      })
      .to('.portrait-card', {
        rotationY: 360,
        ease: 'power2.inOut',
        duration: 0.5
      });

    // ----------------------------------------------------
    // ScrollTrigger 2: Card opacity fade out early
    // ----------------------------------------------------
    const fadeCardTrigger = ScrollTrigger.create({
      trigger: '.hero-container',
      start: 'top top',
      end: '+=700', // fade out within first 700px of scrolling
      scrub: true,
      onUpdate: (self) => {
        gsap.set('.portrait-card', {
          opacity: 1 - self.progress,
          visibility: self.progress === 1 ? 'hidden' : 'visible'
        });
      }
    });

    // ----------------------------------------------------
    // ScrollTrigger 3: Typography & BG Video fade out
    // ----------------------------------------------------
    const fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    fadeTl.to('.hero-content-wrapper', {
      scale: 0.9,
      opacity: 0.08,
      y: -100,
      ease: 'none'
    }, 0);

    fadeTl.to('.hero-video-bg', {
      y: -100,
      scale: 0.95,
      opacity: 0.08,
      ease: 'none'
    }, 0);

    fadeTl.to('.hero-column.column-left', {
      xPercent: -30,
      ease: 'none'
    }, 0);
    
    fadeTl.to('.hero-column.column-right', {
      xPercent: 30,
      ease: 'none'
    }, 0);

    // ----------------------------------------------------
    // ScrollTrigger 3: Stacking Cards Animation (Skills)
    // ----------------------------------------------------
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        id: 'services-trigger',
        trigger: '.services-cards-stack-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '.services-cards-stack-track',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalCards = servicesList.length;
          const index = Math.min(totalCards - 1, Math.floor(progress * totalCards));
          setActiveServiceIndex(index);
        }
      }
    });

    // ----------------------------------------------------
    // ScrollTrigger 4: Slow background color and ambient accent system transition
    // ----------------------------------------------------
    const ambientColors = [
      { bg: '#050816', accent1: '16, 185, 129', accent2: '59, 130, 246', accent3: '139, 92, 246' }, // 1. Home (Emerald + Blue + Violet)
      { bg: '#05091a', accent1: '59, 130, 246', accent2: '79, 70, 229', accent3: '139, 92, 246' },  // 2. Skills (Blue + Indigo + Violet)
      { bg: '#050c18', accent1: '13, 148, 136', accent2: '6, 182, 212', accent3: '59, 130, 246' },  // 3. About (Teal + Cyan + Blue)
      { bg: '#070518', accent1: '139, 92, 246', accent2: '79, 70, 229', accent3: '59, 130, 246' },  // 4. Projects (Violet + Indigo + Blue)
      { bg: '#120905', accent1: '245, 158, 11', accent2: '249, 115, 22', accent3: '239, 68, 68' },  // 5. Reviews (Amber + Orange + Red)
      { bg: '#050816', accent1: '16, 185, 129', accent2: '59, 130, 246', accent3: '139, 92, 246' }, // 6. Contact (Emerald + Blue + Violet)
    ];

    const bgColorsTrigger = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const segmentCount = ambientColors.length - 1;
        const rawProgress = self.progress * segmentCount;
        const index = Math.floor(rawProgress);
        const nextIndex = Math.min(index + 1, segmentCount);
        const factor = rawProgress - index;
        
        const c1 = ambientColors[index];
        const c2 = ambientColors[nextIndex];
        
        const parseHex = (hex: string) => {
          const r = parseInt(hex.substring(1, 3), 16);
          const g = parseInt(hex.substring(3, 5), 16);
          const b = parseInt(hex.substring(5, 7), 16);
          return { r, g, b };
        };
        
        const rgb1 = parseHex(c1.bg);
        const rgb2 = parseHex(c2.bg);
        
        const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
        const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
        const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
        
        document.documentElement.style.setProperty('--bg-color', `rgb(${r}, ${g}, ${b})`);

        // Interpolate rgb strings
        const interpolateRGB = (rgb1Str: string, rgb2Str: string) => {
          const parseRGB = (s: string) => s.split(',').map(Number);
          const [r1, g1, b1] = parseRGB(rgb1Str);
          const [r2, g2, b2] = parseRGB(rgb2Str);
          const r = Math.round(r1 + (r2 - r1) * factor);
          const g = Math.round(g1 + (g2 - g1) * factor);
          const b = Math.round(b1 + (b2 - b1) * factor);
          return `${r}, ${g}, ${b}`;
        };

        const accent1 = interpolateRGB(c1.accent1, c2.accent1);
        const accent2 = interpolateRGB(c1.accent2, c2.accent2);
        const accent3 = interpolateRGB(c1.accent3, c2.accent3);

        const root = document.documentElement;
        root.style.setProperty('--ambient-accent-1', accent1);
        root.style.setProperty('--ambient-accent-2', accent2);
        root.style.setProperty('--ambient-accent-3', accent3);
      }
    });

    // ----------------------------------------------------
    // ScrollTrigger 5: Fade-up reveal animations
    // ----------------------------------------------------
    const revealElements = gsap.utils.toArray<HTMLElement>('.reveal-text');
    const revealTriggers: ScrollTrigger[] = [];

    revealElements.forEach((el) => {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(el,
            { y: 35, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }
          );
        },
        once: true
      });
      revealTriggers.push(trigger);
    });

    // ----------------------------------------------------
    // ScrollTrigger 6: Stagger container reveals
    // ----------------------------------------------------
    const staggerContainers = gsap.utils.toArray<HTMLElement>('.stagger-container');
    const staggerTriggers: ScrollTrigger[] = [];

    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.stagger-item');
      if (items.length > 0) {
        const trigger = ScrollTrigger.create({
          trigger: container,
          start: 'top 88%',
          onEnter: () => {
            gsap.fromTo(items,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' }
            );
          },
          once: true
        });
        staggerTriggers.push(trigger);
      }
    });

    ScrollTrigger.refresh();

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(updateTicker);
      scrollTl.scrollTrigger?.kill();
      fadeCardTrigger.kill();
      fadeTl.scrollTrigger?.kill();
      cardsTl.scrollTrigger?.kill();
      bgColorsTrigger.kill();
      revealTriggers.forEach(t => t.kill());
      staggerTriggers.forEach(t => t.kill());
    };
  }, []);

  const navbarRef = useRef<HTMLElement>(null);

  // Measure floating navbar height and set CSS variable
  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
        document.documentElement.style.setProperty('--bottom-nav-height', `${height}px`);
      }
    });

    resizeObserver.observe(navbar);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const scrollTo = (targetId: string) => {
    if (lenis) {
      const target = document.querySelector(targetId);
      if (target) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -100,
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToService = (index: number) => {
    const trigger = ScrollTrigger.getById('services-trigger');
    if (trigger) {
      const start = trigger.start;
      const end = trigger.end;
      const targetScroll = start + (index / servicesList.length) * (end - start) + 15;
      if (lenis) {
        lenis.scrollTo(targetScroll, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('princepatel01258@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="portfolio-app">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Global Ambient Background, Particles & Noise */}
      <div className="ambient-bg-layer" />
      <div className="global-noise" />
      <canvas ref={globalParticlesRef} className="global-particles-canvas" />

      {/* Sections container to ensure .section:last-child targets the last section correctly */}
      <div className="sections-container">
        {/* 1. Hero Section */}
        <div id="home" className="section">
          <Hero />
        </div>

      {/* 2. Services Section */}
      <section id="skills" className="skills-stack-section section">
        <div className="services-cards-stack-wrapper">
          <div className="services-cards-stack-track">
            <div className="skills-sticky-grid">
              {/* Left Side: Title & Description */}
              <div className="skills-sticky-left">
                <div className="section-title-sub handwritten-label reveal-text">/ Services, Skills, Abilities</div>
                <h2 className="section-title reveal-text" style={{ marginTop: '0.5rem' }}>
                  What I do <span style={{ color: 'var(--accent-color)' }}>best?</span>
                </h2>
                <p className="skills-sticky-desc reveal-text" style={{ marginTop: '1.5rem', fontSize: '1.15rem' }}>
                  I lead brands, teams, and projects – creating design, web, video, and marketing solutions that help businesses grow and make a real impact.
                </p>

                {/* Horizontal tabs */}
                <div className="services-tabs-container" style={{ marginTop: '2rem' }}>
                  {servicesList.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToService(idx)}
                      className={`service-tab-button ${activeServiceIndex === idx ? 'active' : ''}`}
                    >
                      <span className="tab-number">{s.num}</span>
                      <span className="tab-title">{s.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side: Centered Cards Stack */}
              <div className="skills-sticky-right">
                <div className="cards-deck-stack">
                  <AnimatePresence initial={false}>
                    {servicesList.map((s, idx) => {
                      const diff = idx - activeServiceIndex;
                      const isVisible = diff >= 0 && diff <= 4;
                      
                      if (!isVisible) return null;
                      
                      return (
                        <motion.div 
                          key={idx} 
                          custom={diff}
                          variants={cardStackVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          layout
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18
                          }}
                          className="stack-card-luxury skill-deck-card"
                          style={{
                            width: '100%',
                            position: 'absolute',
                            pointerEvents: diff === 0 ? 'auto' : 'none',
                            transformStyle: 'preserve-3d',
                            willChange: 'transform, opacity, filter'
                          }}
                        >
                          <div style={{ opacity: diff === 0 ? 1 : 0, transition: 'opacity 0.3s ease', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <span className="handwritten-label">{s.tag}</span>
                            <h3 className="stack-card-content-title">{s.num}. {s.title}</h3>
                            <p className="stack-card-content-desc">{s.desc}</p>
                            <div className="card-divider" />
                            <div className="stack-card-chips-title">Included Services:</div>
                            <div className="stack-card-chips">
                              {s.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="stack-card-chip">{skill}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Me Section */}
      <section id="about" className="content-section section">
        <div className="section-grid">
          <div>
            <div className="section-title-sub handwritten-label reveal-text">/ About Me</div>
            <h2 className="section-title reveal-text" style={{ marginTop: '0.5rem' }}>Logic &amp; Aesthetics</h2>
          </div>
          <div className="section-body">
            <WordReveal className="highlight-text" text="I build digital environments where deep technology meets flawless visual execution." />
            <p className="reveal-text">
              As an AI engineer and founder, I operate at the intersection of complex backend logic and high-fidelity user experiences. My philosophy balances rigorous mechanical engineering with raw visual rhythm, ensuring every product is both robust and visually striking.
            </p>
            <p className="reveal-text">
              Through Varunya Technologies and collaborations with global partners, I translate ambitious concepts into production-grade systems. I cut through the noise, establish clear design languages, and engineer software that commands attention.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section className="skills-marquee-section">
        <div className="marquee-track-container">
          {/* Track 1: Left scrolling */}
          <div className="marquee-track track-left">
            <div className="marquee-content">
              {marqueeTrack1.map((skill, index) => (
                <div key={index} className="marquee-item">
                  {skill.isTech && skill.logoUrl ? (
                    <img src={skill.logoUrl} alt={skill.name} className="marquee-item-logo" />
                  ) : (
                    <span className="marquee-item-dot"></span>
                  )}
                  {skill.name}
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {marqueeTrack1.map((skill, index) => (
                <div key={`dup1-${index}`} className="marquee-item">
                  {skill.isTech && skill.logoUrl ? (
                    <img src={skill.logoUrl} alt={skill.name} className="marquee-item-logo" />
                  ) : (
                    <span className="marquee-item-dot"></span>
                  )}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Right scrolling */}
          <div className="marquee-track track-right">
            <div className="marquee-content">
              {marqueeTrack2.map((skill, index) => (
                <div key={index} className="marquee-item">
                  {skill.isTech && skill.logoUrl ? (
                    <img src={skill.logoUrl} alt={skill.name} className="marquee-item-logo" />
                  ) : (
                    <span className="marquee-item-dot"></span>
                  )}
                  {skill.name}
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {marqueeTrack2.map((skill, index) => (
                <div key={`dup2-${index}`} className="marquee-item">
                  {skill.isTech && skill.logoUrl ? (
                    <img src={skill.logoUrl} alt={skill.name} className="marquee-item-logo" />
                  ) : (
                    <span className="marquee-item-dot"></span>
                  )}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="content-section section">
        <div className="section-grid">
          <div>
            <div className="section-title-sub handwritten-label reveal-text">/ Credentials</div>
            <h2 className="section-title reveal-text" style={{ marginTop: '0.5rem' }}>
              Certifications
            </h2>
          </div>
          <div className="section-body">
            <p className="reveal-text">
              Demonstrated capability in Machine Learning, Large Language Models, Data Science, and Analytics verified by top organizations and academic programs.
            </p>
          </div>
        </div>

        <div className="certifications-grid max-width-wrapper stagger-container" style={{ maxWidth: '1200px', margin: '4rem auto 0' }}>
          {certificationsList.map((cert, idx) => (
            <div key={idx} className="certification-card-luxury stagger-item">
              <div className="cert-card-header">
                <span className="cert-issuer-badge">{cert.issuer}</span>
                <h3 className="cert-card-title">{cert.title}</h3>
              </div>
              <div className="cert-card-footer">
                <div className="cert-badge-icon">
                  <Award size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section id="portfolio" className="content-section section">
        <div className="section-grid">
          <div>
            <div className="section-title-sub handwritten-label reveal-text">/ Selected Work</div>
            <h2 className="section-title reveal-text" style={{ marginTop: '0.5rem' }}>
              Projects That Turn Ideas Into Results
            </h2>
          </div>
          <div className="section-body" style={{ justifyContent: 'center' }}>
            <p className="reveal-text">
              A collection of products, platforms, and digital experiences built across technology, finance, fashion, and enterprise industries.
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="project-stats-grid max-width-wrapper reveal-text" style={{ maxWidth: '1200px', margin: '3rem auto 0' }}>
          <div className="project-stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Industries Served</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Responsive Design</span>
          </div>
          <div className="project-stat-item">
            <span className="stat-number">Pure</span>
            <span className="stat-label">Performance Focused</span>
          </div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="projects-list-grid max-width-wrapper stagger-container" style={{ maxWidth: '1200px', margin: '4rem auto 0' }}>
          {projectsList.map((p, idx) => (
            <div key={idx} className="project-card-luxury stagger-item">
              <div className="project-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span className="project-category-badge">{p.category}</span>
                  <h3 className="project-card-title">{p.title}</h3>
                </div>
                <MagneticButton>
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-action-btn"
                    aria-label={`Visit ${p.title} website`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </MagneticButton>
              </div>
              <p className="project-card-desc" style={{ marginTop: '1rem' }}>{p.desc}</p>
              
              <div className="project-divider" />
              
              <div className="project-details">
                <div className="project-tech-stack">
                  <span className="detail-heading">Tech Stack</span>
                  <div className="tech-badges">
                    {p.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-highlights">
                  <span className="detail-heading">Impact Highlights</span>
                  <ul className="highlight-list">
                    {p.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="highlight-item">{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Reviews/Testimonials Section */}
      <section id="reviews" className="content-section section">
        <div className="section-grid">
          <div>
            <div className="section-title-sub handwritten-label reveal-text">/ Community Trust – Testimonials</div>
            <h2 className="section-title reveal-text" style={{ marginTop: '0.5rem' }}>Client Reviews</h2>
          </div>
          <div className="section-body" style={{ justifyContent: 'center' }}>
            <p className="reveal-text">
              A few thoughts from people who have experienced the value of working together.
            </p>
          </div>
        </div>

        {/* Testimonials grid list */}
        <div className="testimonials-list max-width-wrapper stagger-container" style={{ maxWidth: '1200px', margin: '4rem auto 0' }}>
          {clientReviews.map((r, idx) => (
            <div key={idx} className="testimonial-card-luxury stagger-item">
              <p className="testimonial-quote">{r.quote}</p>
              <div className="testimonial-meta">
                <span className="testimonial-author">{r.author}</span>
                <span className="testimonial-role">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact / Careers Section */}
      <section id="contact" className="content-section section">
        <div className="section-grid">
          <div>
            <div className="section-title-sub handwritten-label reveal-text">/ Career</div>
            <h2 className="section-title reveal-text" style={{ marginTop: '0.5rem' }}>My Impact</h2>
          </div>
          <div className="section-body" style={{ justifyContent: 'center' }}>
            <p className="reveal-text">
              I work with founders, product teams, companies and brands based on strategy and innovation. I set one goal, cut noise, and move.
            </p>
          </div>
        </div>

        {/* Career Horizontal List */}
        <div className="career-timeline-container stagger-container">
          {careerTimeline.map((c, idx) => (
            <div key={idx} className="career-entry-row stagger-item">
              <div className="career-entry-left">
                <span className="career-entry-role">{c.role}</span>
                <span className="career-entry-company">{c.company}</span>
              </div>
              <div className="career-entry-right">
                <span className="career-entry-date">{c.date}</span>
                <span className="career-entry-loc">{c.loc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Action Buttons */}
        <div className="section-grid" style={{ marginTop: '6rem' }}>
          <div>
            <div className="section-title-sub handwritten-label reveal-text">/ Let's connect</div>
            <h2 className="section-title reveal-text" style={{ marginTop: '0.5rem' }}>Hello, it's me</h2>
          </div>
          <div className="section-body">
            <p className="reveal-text">
              Have a product concept, workflow bottleneck, or an AI project you'd like to bring to life? Let's align and start moving.
            </p>
            
            <div className="contact-cta-wrapper stagger-container">
              <div className="stagger-item">
                <MagneticButton>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-contact-action btn-orange"
                  >
                    <Calendar size={15} /> Schedule a call
                  </a>
                </MagneticButton>
              </div>

              <div className="stagger-item">
                <MagneticButton>
                  <button 
                    onClick={copyEmail}
                    className="btn-contact-action btn-outline-dark"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? "Email copied!" : "Copy email"}
                  </button>
                </MagneticButton>
              </div>

              <div className="stagger-item">
                <MagneticButton>
                  <a 
                    href="#" 
                    className="btn-contact-action btn-outline-dark"
                  >
                    <FileText size={14} /> Download CV
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="social-links-wrapper reveal-text">
              <span className="social-links-label">Connect with me</span>
              <div className="social-links-row">
                <MagneticButton>
                  <a 
                    href="https://www.linkedin.com/in/prince-patel-01601pj" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a 
                    href="https://github.com/princepatel04477-web" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a 
                    href="https://www.instagram.com/prince12.58/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a 
                    href="https://www.upwork.com/freelancers/~019d0867d5496cc692?mp_source=share" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn"
                    aria-label="Upwork"
                  >
                    <img src="https://cdn.simpleicons.org/upwork/FFFFFF" alt="Upwork" />
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Copyright & Designed info (formerly footer) */}
            <div className="contact-footer-info reveal-text" style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: '#6B6B67', fontSize: '13px', fontFamily: 'var(--font-body)' }}>
              <span>© {new Date().getFullYear()} Prince Patel • Surat, India. All rights reserved.</span>
              <span>Designed &amp; Engineered for Premium Performance</span>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Dedicated spacer element to prevent bottom nav overlay */}
      <div className="footer-nav-spacer" />

      {/* Floating Bottom Navigation Capsule */}
      <div className="floating-nav-container">
        <nav ref={navbarRef} className="floating-nav-capsule">
          <ul className="nav-links">
            <li className="nav-link-item">
              <MagneticButton>
                <button 
                  onClick={() => scrollTo('#home')} 
                  className={`nav-home-btn ${activeSection === 'home' ? 'btn-active' : ''}`}
                  aria-label="Home"
                >
                  <Home size={17} strokeWidth={2} />
                </button>
              </MagneticButton>
            </li>
            <li className="nav-link-item">
              <MagneticButton>
                <button 
                  onClick={() => scrollTo('#skills')} 
                  className={`nav-link-btn ${activeSection === 'skills' ? 'btn-active' : ''}`}
                >
                  Skills
                </button>
              </MagneticButton>
            </li>
            <li className="nav-link-item">
              <MagneticButton>
                <button 
                  onClick={() => scrollTo('#about')} 
                  className={`nav-link-btn ${activeSection === 'about' ? 'btn-active' : ''}`}
                >
                  About
                </button>
              </MagneticButton>
            </li>
            <li className="nav-link-item">
              <MagneticButton>
                <button 
                  onClick={() => scrollTo('#portfolio')} 
                  className={`nav-link-btn ${activeSection === 'portfolio' ? 'btn-active' : ''}`}
                >
                  Portfolio ›
                </button>
              </MagneticButton>
            </li>
            <li className="nav-link-item">
              <MagneticButton>
                <button 
                  onClick={() => scrollTo('#reviews')} 
                  className={`nav-link-btn ${activeSection === 'reviews' ? 'btn-active' : ''}`}
                >
                  Reviews
                </button>
              </MagneticButton>
            </li>
          </ul>

          <MagneticButton>
            <button 
              onClick={() => scrollTo('#contact')} 
              className="nav-cta-btn"
            >
              Contact me
            </button>
          </MagneticButton>
        </nav>
      </div>
    </div>
  );
}

export default App;
