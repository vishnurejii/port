import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Layers, 
  CheckCircle2, 
  Building2, 
  Award,
  Sparkles,
  PhoneCall,
  Clock,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenLogin?: () => void;
  onOpenDealerModal?: () => void;
  onExploreCatalogue?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenDealerModal, 
  onExploreCatalogue 
}) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#FFFFFF] to-[#FAFAFC]">
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-orange-100/60 via-amber-50/40 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-48 -right-40 w-96 h-96 bg-orange-200/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200/80 shadow-[0_2px_12px_-2px_rgba(248,92,8,0.12)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F85C08] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F85C08]"></span>
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-slate-800">
              India's Premier Tier-1 CCTV &amp; Security Hardware Supply Hub
            </span>
            <span className="hidden md:inline-block w-px h-3.5 bg-slate-200" />
            <span className="hidden md:inline-block text-[11px] font-bold text-[#F85C08] uppercase tracking-wider">
              15+ Years · Ritchie Street HQ
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[70px] font-extrabold text-slate-900 tracking-[-0.035em] leading-[1.08] mb-6">
            Direct OEM Hardware Supply <br className="hidden sm:inline" />
            for <span className="text-gradient-brand">Security Integrators</span>
          </h1>
          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Factory-authorized distribution across 27 top brands. 
            Zero direct retail conflict, protected trade margins, and same-day express dispatch nationwide.
          </p>
        </div>

        {/* Action Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenDealerModal || (() => {
              window.open('https://realtechvision.in/index.html', '_blank');
            })}
            className="btn-primary-orange text-sm sm:text-base w-full sm:w-auto shadow-xl group"
          >
            <span>Apply for Dealer Account</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreCatalogue || (() => {
              const el = document.getElementById('categories');
              el?.scrollIntoView({ behavior: 'smooth' });
            })}
            className="btn-secondary-white text-sm sm:text-base w-full sm:w-auto group"
          >
            <Layers size={18} className="text-[#F85C08]" />
            <span>Browse 8 Hardware Families</span>
          </button>
        </div>

        {/* Visual Showcase Stage */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Outer Drop Shadow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-amber-500/15 to-orange-500/10 rounded-[32px] blur-2xl opacity-70 pointer-events-none" />

          <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.12)] overflow-hidden">
            
            {/* Header Control Strip */}
            <div className="px-6 py-4 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block"></span>
                <span className="ml-3 text-xs font-semibold text-slate-500 hidden sm:inline">
                  RTV Central Dispatch Infrastructure // Ritchie St Chennai
                </span>
              </div>
              <div className="flex items-center space-x-4 text-xs font-bold">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  98.4% Fill Rate
                </span>
                <span className="hidden md:inline text-slate-300">|</span>
                <span className="hidden md:flex items-center gap-1 text-slate-600">
                  <Clock size={13} className="text-[#F85C08]" /> Dispatch Cutoff: 17:00 IST
                </span>
              </div>
            </div>

            {/* Split Media & Metrics Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column: Visual Photography */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] bg-slate-100 overflow-hidden">
                <img
                  src="/flyers/delivery.png"
                  alt="Realtech Vision Logistics Warehouse Team"
                  className="w-full h-full object-cover object-center filter saturate-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/80" />
                
                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg max-w-[220px]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#F85C08] mb-0.5">
                    Official Guarantee
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">
                    100% Factory Sealed Stock
                  </div>
                  <div className="text-[10.5px] text-slate-500 mt-0.5">
                    Full Manufacturer Warranty
                  </div>
                </div>
              </div>

              {/* Right Column: Value Points & Quick Stats */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#F85C08] mb-2">
                    <ShieldCheck size={16} />
                    <span>Pure B2B Distribution</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    Zero Direct Retail Conflict. Your Margins Stay Protected.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    We exclusively supply registered system integrators, electrical contractors, and corporate IT resellers. We never bid on end-user commercial installations.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      'Direct allocation from Hikvision, CP Plus, Trueview, Matrix, Prama',
                      'High-density surveillance storage from Western Digital, Seagate, Toshiba',
                      'Same-day transit packing with barcoded tamper seals'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                        <CheckCircle2 size={16} className="text-[#F85C08] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    <span className="font-extrabold text-slate-900 block text-sm">4,000+ Dealers</span>
                    Active Trade Partners Across India
                  </div>
                  <a
                    href="#brands"
                    className="text-xs font-bold text-[#F85C08] hover:text-orange-700 flex items-center gap-1"
                  >
                    All 27 Brands <span>→</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Badges Under Hero */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { title: '27 OEM Brands', subtitle: 'Factory-Authorized supply' },
            { title: '5 Regional Hubs', subtitle: 'Chennai, Delhi, HYD, BLR, Surat' },
            { title: 'Same-Day Dispatch', subtitle: 'Orders packed within 2 hours' },
            { title: '< 24h RMA Bench', subtitle: 'Dedicated Chennai diagnostic lab' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-sm flex flex-col justify-center text-center">
              <span className="font-display text-sm sm:text-base font-bold text-slate-900">{item.title}</span>
              <span className="text-[11px] text-slate-500 mt-0.5">{item.subtitle}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Hero;
