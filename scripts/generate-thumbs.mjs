import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/project_thumb');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const thumbs = [
  {
    file: 'tradex_thumbnail.svg',
    bg1: '#051311', bg2: '#0b231d', accent: '#10B981', secondary: '#064E3B',
    tag: 'FINTECH & AI', title: 'TRADEX (Tradly)', sub: 'AI Forex Intelligence & Paper-Trading Platform',
    icon: `<path d="M100 350 L220 280 L320 310 L440 210 L560 250 L680 140" stroke="#10B981" stroke-width="4" fill="none" stroke-linecap="round"/>
           <circle cx="680" cy="140" r="8" fill="#10B981" filter="url(#glow)"/>
           <rect x="200" y="220" width="16" height="70" fill="#10B981" opacity="0.6"/>
           <rect x="300" y="270" width="16" height="50" fill="#EF4444" opacity="0.6"/>
           <rect x="420" y="170" width="16" height="60" fill="#10B981" opacity="0.7"/>
           <rect x="540" y="220" width="16" height="40" fill="#10B981" opacity="0.8"/>`
  },
  {
    file: 'trivoxa_thumbnail.svg',
    bg1: '#090a10', bg2: '#121422', accent: '#C5A880', secondary: '#242a3e',
    tag: '3D WEBGL & EXPORT', title: 'Trivoxa Group', sub: 'Persistent Cross-Route Morphing 3D Experience',
    icon: `<circle cx="400" cy="240" r="110" stroke="#C5A880" stroke-width="2" stroke-dasharray="6 6" fill="none" opacity="0.4"/>
           <circle cx="400" cy="240" r="80" stroke="#C5A880" stroke-width="3" fill="none" opacity="0.8"/>
           <ellipse cx="400" cy="240" rx="80" ry="30" stroke="#C5A880" stroke-width="2" fill="none" transform="rotate(25 400 240)"/>
           <ellipse cx="400" cy="240" rx="80" ry="30" stroke="#C5A880" stroke-width="2" fill="none" transform="rotate(-40 400 240)"/>
           <circle cx="400" cy="240" r="24" fill="#C5A880" opacity="0.9" filter="url(#glow)"/>`
  },
  {
    file: 'aqualite_thumbnail.svg',
    bg1: '#14080a', bg2: '#280f14', accent: '#EF4444', secondary: '#7F1D1D',
    tag: 'E-COMMERCE & WORKERS', title: 'Aqualite Footwear', sub: 'Footwear Storefront with Seller Central-Style Admin',
    icon: `<path d="M180 320 Q 320 330 400 270 T 600 240 T 650 300 Q 520 340 380 350 Z" fill="#EF4444" opacity="0.25" stroke="#EF4444" stroke-width="3"/>
           <path d="M220 300 Q 380 270 480 220 Q 580 190 620 250" fill="none" stroke="#FCA5A5" stroke-width="3" stroke-dasharray="8 8"/>
           <circle cx="620" cy="250" r="7" fill="#EF4444" filter="url(#glow)"/>`
  },
  {
    file: 'civara_thumbnail.svg',
    bg1: '#0a080d', bg2: '#181222', accent: '#D4AF37', secondary: '#4A3B18',
    tag: 'AI CAD PIPELINE & LUXURY', title: 'Civara Jewels', sub: '150+ Jewellery CAD Renders to AI Lifestyle Shoot',
    icon: `<polygon points="400,160 480,210 450,290 350,290 320,210" fill="none" stroke="#D4AF37" stroke-width="3" filter="url(#glow)"/>
           <polygon points="400,160 440,210 400,290 360,210" fill="none" stroke="#FDE047" stroke-width="1.5" opacity="0.6"/>
           <circle cx="400" cy="225" r="12" fill="#D4AF37" opacity="0.8"/>
           <line x1="320" y1="210" x2="480" y2="210" stroke="#D4AF37" stroke-width="1.5"/>`
  },
  {
    file: 'sunrise_thumbnail.svg',
    bg1: '#0f0e0c', bg2: '#1f1a14', accent: '#F59E0B', secondary: '#451A03',
    tag: 'B2B TEXTILE PORTAL', title: 'Maa Sheetla × Sunrise', sub: 'Dual-Brand Textile Platform & Zero-Cost Backend',
    icon: `<g stroke="#F59E0B" stroke-width="2" opacity="0.6">
             <line x1="260" y1="180" x2="540" y2="180"/><line x1="260" y1="220" x2="540" y2="220"/>
             <line x1="260" y1="260" x2="540" y2="260"/><line x1="260" y1="300" x2="540" y2="300"/>
             <line x1="300" y1="150" x2="300" y2="330"/><line x1="360" y1="150" x2="360" y2="330"/>
             <line x1="420" y1="150" x2="420" y2="330"/><line x1="480" y1="150" x2="480" y2="330"/>
           </g>
           <circle cx="420" cy="220" r="16" fill="#F59E0B" filter="url(#glow)"/>`
  },
  {
    file: 'aurelia_thumbnail.svg',
    bg1: '#0c0709', bg2: '#1e0e16', accent: '#FB7185', secondary: '#881337',
    tag: 'EXPERIMENTAL 3D', title: 'AURELIA Concept', sub: 'Cinematic 3D WebGL Fine Jewellery Storefront',
    icon: `<circle cx="400" cy="240" r="90" stroke="#FB7185" stroke-width="2" fill="none" opacity="0.7"/>
           <circle cx="400" cy="240" r="60" stroke="#FDA4AF" stroke-width="3" fill="none" opacity="0.9"/>
           <polygon points="400,180 435,240 400,300 365,240" fill="none" stroke="#FB7185" stroke-width="2"/>
           <circle cx="400" cy="240" r="8" fill="#FFF" filter="url(#glow)"/>`
  },
  {
    file: 'arvex_thumbnail.svg',
    bg1: '#071017', bg2: '#0e1f2c', accent: '#38BDF8', secondary: '#0C4A6E',
    tag: 'PHARMA EXPORT B2B', title: 'Arvex Pharma (Concept)', sub: 'High-Performance Edge-Hosted Wholesale Prototype',
    icon: `<polygon points="400,170 450,200 450,260 400,290 350,260 350,200" fill="none" stroke="#38BDF8" stroke-width="3" filter="url(#glow)"/>
           <polygon points="470,210 520,240 520,300 470,330 420,300 420,240" fill="none" stroke="#0284C7" stroke-width="2" opacity="0.6"/>
           <polygon points="330,210 380,240 380,300 330,330 280,300 280,240" fill="none" stroke="#0284C7" stroke-width="2" opacity="0.6"/>
           <circle cx="400" cy="230" r="10" fill="#38BDF8"/>`
  },
  {
    file: 'cafeos_thumbnail.svg',
    bg1: '#120d08', bg2: '#24170e', accent: '#FB923C', secondary: '#7C2D12',
    tag: 'SAAS PLATFORM', title: 'CafeOS', sub: 'Multi-Tenant QR Ordering System for Cafés & Dining',
    icon: `<rect x="330" y="170" width="140" height="140" rx="16" fill="none" stroke="#FB923C" stroke-width="3" filter="url(#glow)"/>
           <rect x="350" y="190" width="30" height="30" fill="#FB923C"/>
           <rect x="420" y="190" width="30" height="30" fill="#FB923C"/>
           <rect x="350" y="260" width="30" height="30" fill="#FB923C"/>
           <circle cx="435" cy="275" r="14" fill="#FB923C"/>`
  },
  {
    file: 'schoolstore_thumbnail.svg',
    bg1: '#070c18', bg2: '#0e1832', accent: '#60A5FA', secondary: '#1E3A8A',
    tag: 'MOBILE & CLOUD', title: 'School Store', sub: 'Native Android & Web Store with Smart Sizing Engine',
    icon: `<rect x="340" y="150" width="120" height="180" rx="18" fill="none" stroke="#60A5FA" stroke-width="3" filter="url(#glow)"/>
           <line x1="380" y1="165" x2="420" y2="165" stroke="#60A5FA" stroke-width="2" stroke-linecap="round"/>
           <path d="M370 240 L395 265 L430 220" stroke="#60A5FA" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  {
    file: 'sift_thumbnail.svg',
    bg1: '#081210', bg2: '#0d221c', accent: '#34D399', secondary: '#064E3B',
    tag: 'DESKTOP UTILITY', title: 'Sift for Windows', sub: 'Files by Google Reimagined for Windows Desktop',
    icon: `<rect x="320" y="170" width="160" height="120" rx="12" fill="none" stroke="#34D399" stroke-width="3" filter="url(#glow)"/>
           <path d="M320 195 L370 195 L390 215 L480 215" stroke="#34D399" stroke-width="2" fill="none"/>
           <circle cx="430" cy="245" r="22" stroke="#6EE7B7" stroke-width="2" fill="none"/>
           <line x1="445" y1="260" x2="465" y2="280" stroke="#6EE7B7" stroke-width="3" stroke-linecap="round"/>`
  },
  {
    file: 'eventflow_thumbnail.svg',
    bg1: '#0e0918', bg2: '#1d1230', accent: '#A855F7', secondary: '#4C1D95',
    tag: 'EVENT PLATFORM', title: 'EventFlow', sub: 'Exhibition Management & Automated Dispatch System',
    icon: `<rect x="330" y="160" width="140" height="160" rx="14" fill="none" stroke="#A855F7" stroke-width="3" filter="url(#glow)"/>
           <line x1="355" y1="195" x2="445" y2="195" stroke="#C084FC" stroke-width="2" stroke-linecap="round"/>
           <line x1="355" y1="225" x2="420" y2="225" stroke="#C084FC" stroke-width="2" stroke-linecap="round"/>
           <line x1="355" y1="255" x2="445" y2="255" stroke="#C084FC" stroke-width="2" stroke-linecap="round"/>
           <circle cx="400" cy="290" r="10" fill="#A855F7" filter="url(#glow)"/>`
  }
];

for (const t of thumbs) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${t.bg1}" />
      <stop offset="100%" stop-color="${t.bg2}" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#grid)" />
  
  <!-- Ambient glow orb -->
  <circle cx="400" cy="240" r="180" fill="${t.accent}" opacity="0.08" filter="url(#glow)" />
  
  <!-- Icon / Graphics illustration -->
  <g>${t.icon}</g>
  
  <!-- Content overlay -->
  <g font-family="system-ui, -apple-system, sans-serif">
    <!-- Tag -->
    <rect x="40" y="40" width="140" height="26" rx="13" fill="${t.secondary}" opacity="0.6"/>
    <text x="50" y="57" font-size="11" font-weight="700" fill="${t.accent}" letter-spacing="1">${t.tag}</text>
    
    <!-- Title and Subtitle -->
    <text x="40" y="420" font-size="28" font-weight="800" fill="#F8FAFC" letter-spacing="-0.5">${t.title}</text>
    <text x="40" y="450" font-size="14" font-weight="400" fill="#94A3B8">${t.sub}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(outDir, t.file), svg, 'utf8');
}

console.log(`Generated ${thumbs.length} high-fidelity thumbnails in public/project_thumb/`);
