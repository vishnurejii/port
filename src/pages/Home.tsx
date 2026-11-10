import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Check, 
  Zap, 
  Users, 
  ChevronDown,
  Camera,
  Radio,
  HardDrive,
  Eye,
  KeyRound,
  ExternalLink,
  Sparkles,
  Cpu,
  Lock,
  Layers,
  Activity,
  Scan,
  Maximize2,
  Smartphone,
  Cloud,
  Wrench,
  Star,
  ChevronLeft,
  ChevronRight,
  Youtube,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { ALL_BRANDS, BrandItem } from '../components/redesign/BrandsSection';
import { BRAND_LOGOS } from '../data/brandLogos';
import { Modals } from '../components/redesign/Modals';

export const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020503] flex flex-col items-center justify-start text-white selection:bg-[#10B981] selection:text-black">
      
      <main className="w-full relative bg-[#020503] flex flex-col">
        
        {/* ─────────────────────────────────────────────────────────────
            HEADER + HERO SECTION (FULL BACKGROUND IMAGE)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
          
          {/* Background Image: Cinematic Nighttime CCTV Security Scene */}
          <div className="absolute inset-0 z-0">
            <img
              src="/cinematic-cctv-hero.png"
              alt="Cinematic Nighttime CCTV Security Scene"
              className="w-full h-full object-cover object-center select-none"
            />
            {/* Dark gradient overlays to ensure luxury contrast & razor-sharp legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020604]/90 via-[#020604]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020503] via-transparent to-[#020604]/80 pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#10B981]/15 rounded-full blur-[140px] pointer-events-none" />
          </div>

          {/* 1. TOP NAVBAR */}
          <header className="relative z-30 w-full backdrop-blur-md bg-[#020604]/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
              
              {/* Logo Left */}
              <div 
                className="flex items-center space-x-3 cursor-pointer group" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="w-10 h-10 rounded-xl bg-[#091710]/90 border border-[#10B981]/50 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-[#34D399]" />
                </div>
                <div>
                  <div className="font-extrabold text-[20px] tracking-tight leading-tight text-white flex items-center">
                    Secure<span className="text-[#34D399]">Vision</span>
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-emerald-400/80 font-medium -mt-0.5">
                    Smart Security. Smarter Tomorrow.
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#10B981]/20 text-[#34D399] border border-[#10B981]/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                >
                  Home
                </button>

                <button 
                  onClick={() => scrollTo('products-section')} 
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown size={12} className="opacity-60" />
                </button>

                <button 
                  onClick={() => scrollTo('why-section')} 
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown size={12} className="opacity-60" />
                </button>

                <button 
                  onClick={() => scrollTo('why-section')} 
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown size={12} className="opacity-60" />
                </button>

                <button 
                  onClick={() => setModalOpen(true)} 
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  About
                </button>

                <button 
                  onClick={() => scrollTo('cta-section')} 
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </nav>

              {/* Right CTA Button */}
              <div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-neon-glow px-5 py-2.5 text-xs font-bold gap-1.5"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          </header>

          {/* 2. HERO CONTENT */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
            <div className="max-w-2xl">
              
              {/* Active Security Status Pill */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#091710]/80 border border-[#10B981]/40 mb-6 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse-dot" />
                <span className="text-xs font-bold text-emerald-300 tracking-wide">
                  Next-Gen Night Vision Active · 24/7 Monitoring
                </span>
              </div>

              {/* Main Headline - Balanced, Clean & Elegant Proportions */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.12] mb-5">
                <span className="text-white">See Everything.</span> <br />
                <span className="text-[#34D399] drop-shadow-[0_0_30px_rgba(52,211,153,0.35)]">
                  Secure Anything.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-zinc-200 max-w-xl leading-relaxed mb-9 font-normal drop-shadow">
                Advanced CCTV &amp; Smart Surveillance Solutions for Homes, Businesses and Beyond. Direct OEM hardware allocation across 27 certified brands.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-neon-glow px-7 py-3.5 text-sm font-bold gap-2 group"
                >
                  <span>Secure Your Property</span>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => scrollTo('products-section')}
                  className="btn-glass-pill px-6 py-3.5 text-sm font-semibold group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/25 flex items-center justify-center text-[#34D399] group-hover:scale-110 transition-transform">
                    <Play size={12} className="fill-[#34D399] ml-0.5" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* 3 Trust Badges */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-white/10 max-w-lg">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#34D399] shrink-0">
                    <Check size={14} />
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-bold text-white">24/7</div>
                    <div className="text-zinc-300 text-[11px]">Protection</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#34D399] shrink-0">
                    <Zap size={14} />
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-bold text-white">Real-Time</div>
                    <div className="text-zinc-300 text-[11px]">Alerts</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#34D399] shrink-0">
                    <Users size={14} />
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-bold text-white">Trusted by</div>
                    <div className="text-zinc-300 text-[11px]">10M+ Users</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Spacer */}
          <div className="h-10" />

        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. "OUR PRODUCTS" (COMPLETE SECURITY ECOSYSTEM)
            Native Responsive HTML/Tailwind Architecture
        ───────────────────────────────────────────────────────────── */}
        <section id="products-section" className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24">
          
          {/* Eyebrow Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.25em] text-[#34D399] mb-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#34D399]" />
              <span>Our Products</span>
              <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#34D399]" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="w-24 hidden sm:block" />
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.035em]">
                Complete Security <span className="text-[#34D399]">Ecosystem</span>
              </h2>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#34D399] hover:text-white transition-colors"
              >
                <span>Explore All Products</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* 5 Distinct Native Responsive Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                id: 'cctv',
                title: 'CCTV Cameras',
                subtitle: 'Indoor & Outdoor',
                image: '/securevision/pure-device-cctv.png'
              },
              {
                id: 'wireless',
                title: 'Wireless Cameras',
                subtitle: 'Easy Setup',
                image: '/securevision/pure-device-wireless.png'
              },
              {
                id: 'dvr',
                title: 'DVR / NVR Systems',
                subtitle: 'Store & Manage',
                image: '/securevision/pure-device-dvr.png'
              },
              {
                id: 'smart',
                title: 'Smart Surveillance',
                subtitle: 'AI Powered',
                image: '/securevision/pure-device-smart.png'
              },
              {
                id: 'access',
                title: 'Access Control',
                subtitle: 'Control Access',
                image: '/securevision/pure-device-access.png'
              }
            ].map((prod) => (
              <div
                key={prod.id}
                onClick={() => setModalOpen(true)}
                className="group relative rounded-2xl bg-[#07130D] border border-[#10B981]/25 hover:border-[#34D399] p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] overflow-hidden"
              >
                {/* Device Artwork Container */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-5 bg-[#030805] flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info Text & Arrow Button */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-[#34D399] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {prod.subtitle}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-zinc-300 group-hover:border-[#34D399] group-hover:bg-[#10B981] group-hover:text-black transition-all shrink-0 ml-2">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ─────────────────────────────────────────────────────────────
            3.5 COMPANY PRODUCT PARTNERS (INTERACTIVE CATEGORY FILTER + STAGGERED 3D WAVE ANIMATION)
        ───────────────────────────────────────────────────────────── */}
        <section id="partners-section" className="w-full relative py-16 lg:py-24 border-t border-emerald-950/60 overflow-hidden bg-[#030805]">
          
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            
            {/* Header with Title & Action */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-[#34D399] mb-2">
                  <span className="w-6 h-[2px] bg-[#10B981]" />
                  <span>Authorized Distribution Alliances</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Company Product <span className="text-[#34D399]">Partners</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
                  Factory-authorized Tier-1 procurement across 27 certified surveillance, telecom, storage and networking brands.
                </p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#34D399] hover:text-white transition-colors self-start sm:self-auto py-2 px-4 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 hover:border-[#10B981]/50"
              >
                <span>Download Brand Matrix</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* 27 Interactive Partner Grid with Staggered 3D Wave Motion */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {ALL_BRANDS.map((brand, index) => {
                const logo = BRAND_LOGOS[brand.id];
                const animClass = `animate-brand-float-${index % 6}`;

                return (
                  <div
                    key={brand.id}
                    onClick={() => {
                      const brandSlug = encodeURIComponent(brand.name.toUpperCase().replace(/\s+/g, '-'));
                      window.location.href = `/brand.html?brand=${brandSlug}`;
                    }}
                    className={`partner-grid-card ${animClass} rounded-2xl p-4 flex flex-col items-center justify-between text-center cursor-pointer group`}
                  >
                    {/* Top Hardware Category Tag */}
                    <div className="w-full flex justify-between items-center text-[9px] font-mono text-zinc-500 mb-2">
                      <span className="uppercase tracking-wider">{brand.category}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]/40 group-hover:bg-[#34D399] group-hover:shadow-[0_0_8px_#34D399] transition-all" />
                    </div>

                    {/* Logo Stage */}
                    <div className="h-12 w-full flex items-center justify-center my-1">
                      {logo ? (
                        <img
                          src={logo}
                          alt={brand.name}
                          className="max-h-9 max-w-[85%] object-contain filter brightness-90 contrast-125 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
                        />
                      ) : (
                        <span className="font-extrabold text-sm text-white group-hover:text-[#34D399] transition-colors">
                          {brand.name}
                        </span>
                      )}
                    </div>

                    {/* Brand Name & Spec */}
                    <div className="w-full pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-white group-hover:text-[#34D399] transition-colors truncate">
                        {brand.name}
                      </span>
                      <ArrowRight size={11} className="text-zinc-500 group-hover:text-[#34D399] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </section>

        {/* ─────────────────────────────────────────────────────────────
            3.7 AI LIVE INTELLIGENCE & THREAT DEFENSE CONSOLE (BEAUTIFUL HIGH-TECH SECTION)
        ───────────────────────────────────────────────────────────── */}
        <section id="ai-console-section" className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 lg:py-28 border-t border-emerald-950/60 relative overflow-hidden">
          
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-[#34D399] mb-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#34D399]" />
                <Sparkles size={14} className="text-[#34D399]" />
                <span>Next-Gen Vision Engine</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                AI Threat Intelligence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#10B981]">
                  Live Command Console
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed self-start sm:self-auto">
              Real-time biometric edge processing, active perimeter tripwires, and autonomous license plate recognition powered by onboard neural chips.
            </p>
          </div>

          {/* Main Grid: Interactive Live HUD Screen Left + 3 AI Feature Tiles Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Columns: Futuristic Live Camera HUD Feed */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#10B981]/30 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] bg-[#040A07] group">
              
              {/* Surveillance Environment Footage */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/redesign/about-warehouse.jpg"
                  alt="AI Perimeter Live Surveillance Feed"
                  className="w-full h-full object-cover filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 select-none"
                />

                {/* Night-Vision Emerald Color Wash */}
                <div className="absolute inset-0 bg-[#06150E]/40 mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020704] via-transparent to-black/60 pointer-events-none" />

                {/* Animated Scanning Laser Line */}
                <div className="live-scanner-line" />

                {/* Top Control Bar Over Live Feed */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#10B981]/40 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                    <span className="font-mono font-bold text-white tracking-wider">CAM-04 // RESIDENCE PERIMETER</span>
                  </div>

                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 font-mono text-[11px]">
                    <Activity size={12} className="animate-spin text-[#34D399]" />
                    <span>60 FPS · 4K UHD</span>
                  </div>
                </div>

                {/* AI Detection Bounding Boxes Overlay */}
                <div className="absolute inset-10 pointer-events-none flex flex-col justify-between">
                  {/* Vehicle target box */}
                  <div className="self-start border-2 border-emerald-400/80 bg-emerald-400/10 p-2 rounded-lg text-[10px] font-mono text-emerald-300 backdrop-blur-xs flex items-center gap-2">
                    <Scan size={14} className="text-[#34D399]" />
                    <span>TARGET: VEHICLE [RECOGNIZED: TN-09-AX-4412] · THREAT: 0%</span>
                  </div>

                  {/* Human Perimeter Target box */}
                  <div className="self-end border-2 border-emerald-400/80 bg-emerald-400/10 p-2 rounded-lg text-[10px] font-mono text-emerald-300 backdrop-blur-xs flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#34D399]" />
                    <span>FACIAL MATCH: AUTHORIZED RESIDENT (99.8%)</span>
                  </div>
                </div>

                {/* Bottom Diagnostics Strip */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300 z-10 px-2">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> AI NEURAL MODEL v4.2 [ONLINE]
                  </span>
                  <span className="text-zinc-400">LATENCY: 14MS · ENCRYPTION: AES-256</span>
                </div>

              </div>
            </div>

            {/* Right 5 Columns: 3 High-Tech AI Defense Pillar Cards */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              
              <div 
                onClick={() => setModalOpen(true)}
                className="glow-card-interactive p-6 rounded-2xl cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E2419] border border-[#10B981]/40 flex items-center justify-center text-[#34D399] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#34D399] transition-colors flex items-center justify-between">
                      <span>Neural Edge Analytics</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform opacity-70" />
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Instant vehicle categorization, pet filtering, and human loitering classification directly inside the camera lens without cloud lag.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => setModalOpen(true)}
                className="glow-card-interactive p-6 rounded-2xl cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E2419] border border-[#10B981]/40 flex items-center justify-center text-[#34D399] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#34D399] transition-colors flex items-center justify-between">
                      <span>Active Strobe &amp; Siren Deterrence</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform opacity-70" />
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      High-lumen green &amp; red tactical strobes combined with 110dB auditory warnings trigger instantly upon unauthorized perimeter crossing.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => setModalOpen(true)}
                className="glow-card-interactive p-6 rounded-2xl cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E2419] border border-[#10B981]/40 flex items-center justify-center text-[#34D399] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#34D399] transition-colors flex items-center justify-between">
                      <span>Zero-Trust Encrypted Storage</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform opacity-70" />
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      End-to-end hardware-level AES-256 encryption. Only your master authenticated devices hold the cryptographic decryption keys.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. WHY CHOOSE US (YOUR SAFETY, OUR PRIORITY) - ULTRA-SHARP NATIVE HTML/CSS
        ───────────────────────────────────────────────────────────── */}
        <section id="why-section" className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 py-12 lg:py-20">
          
          {/* Main Curved Dark Container matching reference box */}
          <div className="relative w-full rounded-[32px] bg-gradient-to-r from-[#04100A] via-[#05140C] to-[#030906] border border-[#10B981]/30 p-6 sm:p-10 lg:p-12 shadow-[0_0_80px_rgba(16,185,129,0.18)] overflow-hidden">
            
            {/* Subtle background ambient radial lighting */}
            <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#10B981]/12 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Left Column: Live Monitoring Property Frame */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#10B981]/35 shadow-2xl bg-[#020604] group">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/securevision/highres-house.png"
                    alt="Live Property Perimeter Surveillance"
                    className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Left Live Status Pill */}
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#10B981]/50 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                    <span className="text-xs font-semibold text-white tracking-wide">Live Monitoring...</span>
                  </div>

                  {/* Corner Targeting Bounding Box */}
                  <div className="absolute inset-6 border border-dashed border-[#10B981]/40 rounded-xl pointer-events-none flex flex-col justify-between p-2">
                    <div className="flex justify-between text-[9px] font-mono text-[#34D399]/90">
                      <span>SECURE_AI</span>
                      <span>ACTIVE</span>
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-[#34D399]/90">
                      <span>PERIMETER_CHECK</span>
                      <span>NORMAL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center & Right Column: Headline, Narrative, 4 Pillars & 3D Shield */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    {/* Eyebrow */}
                    <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#34D399] mb-2.5">
                      <span className="w-6 h-[1.5px] bg-[#10B981]" />
                      <span>Why Choose Us</span>
                      <span className="w-6 h-[1.5px] bg-[#10B981]" />
                    </div>

                    {/* Headline in razor-sharp native vector typography */}
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.03em] leading-[1.12]">
                      Your Safety, <br />
                      <span className="text-[#34D399] drop-shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                        Our Priority.
                      </span>
                    </h2>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-3.5 max-w-md font-normal">
                      Experience next-gen security with intelligent surveillance, instant alerts and seamless control from anywhere, anytime.
                    </p>
                  </div>

                  {/* 3D Glowing Shield Graphic Right */}
                  <div className="w-32 sm:w-40 shrink-0 self-center md:self-start">
                    <img
                      src="/securevision/highres-shield.png"
                      alt="3D Security Shield Guarantee"
                      className="w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(52,211,153,0.5)] select-none hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* 4 Feature Pillars in Crisp Vector Icons & Text */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                  
                  {/* Pillar 1: AI Analytics */}
                  <div 
                    onClick={() => setModalOpen(true)}
                    className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0F281B] border border-[#10B981]/40 flex items-center justify-center text-[#34D399] mb-2.5 shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Cpu size={20} />
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-[#34D399] transition-colors">
                      AI-Powered
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">
                      Analytics
                    </div>
                  </div>

                  {/* Pillar 2: Mobile App */}
                  <div 
                    onClick={() => setModalOpen(true)}
                    className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0F281B] border border-[#10B981]/40 flex items-center justify-center text-[#34D399] mb-2.5 shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Smartphone size={20} />
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-[#34D399] transition-colors">
                      Mobile App
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">
                      Control
                    </div>
                  </div>

                  {/* Pillar 3: Cloud */}
                  <div 
                    onClick={() => setModalOpen(true)}
                    className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0F281B] border border-[#10B981]/40 flex items-center justify-center text-[#34D399] mb-2.5 shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Cloud size={20} />
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-[#34D399] transition-colors">
                      Cloud
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">
                      Backup
                    </div>
                  </div>

                  {/* Pillar 4: Installation */}
                  <div 
                    onClick={() => setModalOpen(true)}
                    className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0F281B] border border-[#10B981]/40 flex items-center justify-center text-[#34D399] mb-2.5 shadow-[0_0_15px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Wrench size={20} />
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-[#34D399] transition-colors">
                      Professional
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">
                      Installation
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. TESTIMONIALS & FINAL CONVERSION CTA (NATIVE HIGH-DEF VECTOR)
        ───────────────────────────────────────────────────────────── */}
        <section id="cta-section" className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Box: "What Our Clients Say / Trusted by Millions" */}
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-[28px] bg-gradient-to-br from-[#07140D] to-[#030906] border border-[#10B981]/25 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <div>
                <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#34D399] mb-2">
                  <span className="w-4 h-[1.5px] bg-[#10B981]" />
                  <span>What Our Clients Say</span>
                  <span className="w-4 h-[1.5px] bg-[#10B981]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight">
                  Trusted by Millions
                </h3>

                {/* Testimonial Quote Box */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#10B981] shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <img
                      src="/securevision/highres-avatar.png"
                      alt="Rahul Menon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                    <p className="mb-2 italic text-zinc-200">
                      "SecureVision gave us complete peace of mind. The setup was easy and the app is amazing!"
                    </p>
                    <div className="font-bold text-white text-sm">
                      — Rahul Menon
                    </div>
                    <div className="flex text-[#34D399] space-x-1 mt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} className="fill-[#34D399]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Dots & Next Arrow Button */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-1.5 rounded-full bg-[#34D399]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-zinc-300 hover:border-[#34D399] hover:bg-[#10B981] hover:text-black transition-all"
                  title="Next Testimonial"
                >
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>

            {/* Right Box: "Ready to Secure What Matters?" Banner with Bullet Camera */}
            <div className="lg:col-span-7 rounded-[28px] bg-gradient-to-r from-[#06140D] via-[#081810] to-[#040C08] border border-[#10B981]/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.18)] group">
              
              <div className="max-w-xs z-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34D399] mb-2">
                  Smarter Security For a Safer Tomorrow
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3 tracking-tight">
                  Ready to Secure <br />
                  What Matters?
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  Get started today and experience the next level of surveillance technology.
                </p>

                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-exact-green px-6 py-3 text-xs font-bold gap-2 shadow-[0_0_20px_rgba(74,222,128,0.5)] group/btn"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* High-Resolution Wall-Mounted Bullet Camera */}
              <div className="w-48 sm:w-64 shrink-0 z-10 transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/securevision/highres-cta-cam.png"
                  alt="Outdoor Bullet Security Camera"
                  className="w-full h-auto object-contain select-none"
                />
              </div>

            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. FOOTER (CLEAN NATIVE VECTOR CODE & SHARP GRAPHICS)
        ───────────────────────────────────────────────────────────── */}
        <footer className="w-full bg-[#020503] border-t border-emerald-950/80 pt-14 pb-10 px-4 sm:px-8 text-zinc-400 text-xs">
          <div className="max-w-[1240px] mx-auto">
            
            {/* Top Row: Logo, Navigation, Social Links */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
              
              {/* Brand Logo Left */}
              <div 
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="w-9 h-9 rounded-xl bg-[#091710] border border-[#22C55E]/40 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-[#4ADE80]" />
                </div>
                <div>
                  <div className="font-extrabold text-lg text-white leading-tight">
                    Secure<span className="text-[#4ADE80]">Vision</span>
                  </div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-emerald-400/80 font-semibold">
                    Smart Security. Smarter Tomorrow.
                  </div>
                </div>
              </div>

              {/* Navigation Center */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-[13px] font-semibold text-zinc-300">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#4ADE80] transition-colors">Home</button>
                <button onClick={() => scrollTo('products-section')} className="hover:text-[#4ADE80] transition-colors">Products</button>
                <button onClick={() => scrollTo('why-section')} className="hover:text-[#4ADE80] transition-colors">Solutions</button>
                <button onClick={() => scrollTo('why-section')} className="hover:text-[#4ADE80] transition-colors">Services</button>
                <button onClick={() => setModalOpen(true)} className="hover:text-[#4ADE80] transition-colors">About</button>
                <button onClick={() => scrollTo('cta-section')} className="hover:text-[#4ADE80] transition-colors">Contact</button>
              </div>

              {/* Social Channels Right */}
              <div className="flex items-center space-x-3.5 text-zinc-400">
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#4ADE80] hover:border-[#4ADE80]/50 hover:bg-[#10B981]/10 transition-all">
                  <Youtube size={15} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#4ADE80] hover:border-[#4ADE80]/50 hover:bg-[#10B981]/10 transition-all">
                  <Instagram size={15} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#4ADE80] hover:border-[#4ADE80]/50 hover:bg-[#10B981]/10 transition-all">
                  <Linkedin size={15} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#4ADE80] hover:border-[#4ADE80]/50 hover:bg-[#10B981]/10 transition-all">
                  <Twitter size={15} />
                </a>
              </div>

            </div>

            {/* Bottom Row: Copyright & Legal */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
              <div>
                © {new Date().getFullYear()} SecureVision. All rights reserved.
              </div>

              <div className="flex items-center space-x-4">
                <button onClick={() => setModalOpen(true)} className="hover:text-zinc-300 transition-colors">
                  Privacy Policy
                </button>
                <span className="text-zinc-700">|</span>
                <button onClick={() => setModalOpen(true)} className="hover:text-zinc-300 transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>

          </div>
        </footer>

      </main>

      {/* Interactive Modal */}
      <Modals
        loginOpen={false}
        onCloseLogin={() => {}}
        dealerOpen={modalOpen}
        onCloseDealer={() => setModalOpen(false)}
        selectedCategory={null}
        onCloseCategory={() => {}}
        selectedBrand={null}
        onCloseBrand={() => {}}
        complianceModal={null}
        onCloseCompliance={() => {}}
        onSwitchToDealer={() => setModalOpen(true)}
      />

    </div>
  );
};

export default Home;
