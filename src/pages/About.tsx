import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Building2, MapPin, Phone, Award, Users, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { BRANCHES } from '../data/companyData';
import { ALL_BRANDS, BrandItem } from '../components/redesign/BrandsSection';
import { Modals } from '../components/redesign/Modals';

const About: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<BrandItem | null>(null);
  const [dealerOpen, setDealerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white font-sans antialiased selection:bg-[#FF5A00] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#14161B] border border-white/10 flex items-center justify-center p-2 shadow-inner">
              <img
                src="/favicon.png"
                alt="RTV Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-manrope font-extrabold text-[17px] text-white tracking-[-0.03em] leading-tight">
                REALTECH <span className="text-[#FF5A00]">VISION</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Corporate Profile
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="btn-glass-secondary px-4 py-2 text-xs font-semibold inline-flex items-center space-x-1.5"
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden border-b border-white/[0.08]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5A00]/15 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-bold text-[#FF5A00] uppercase tracking-[0.2em] mb-6">
            <Building2 size={14} />
            <span>Ritchie Street, Chennai // 15-Year Legacy</span>
          </div>
          <h1 className="font-manrope text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            About <span className="text-gradient-orange">Realtech Vision</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Operating out of Chennai’s electronic capital, empowering over 4,000+ CCTV installers, system integrators, and IT resellers with factory-direct OEM hardware supply, verified serial allocation, and dedicated bench testing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '15+', label: 'Years Active', accent: true },
            { value: '4,000+', label: 'Active Dealers', accent: false },
            { value: '27', label: 'OEM Brands', accent: true },
            { value: '5', label: 'Regional Hubs', accent: false },
          ].map((m, i) => (
            <div
              key={m.label}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#151820] to-[#101217] border border-white/[0.08] text-center"
            >
              <div className={`font-manrope text-3xl sm:text-4xl font-extrabold tracking-tight ${m.accent ? 'text-[#FF5A00]' : 'text-white'}`}>
                {m.value}
              </div>
              <div className="text-[11px] font-bold text-white/50 mt-2 uppercase tracking-[0.14em]">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Headquarters */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#151820] to-[#101217] border border-white/[0.08] relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5A00] mb-3">
            <span>National Distribution Nerve Center</span>
          </div>
          <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-white mb-5 tracking-tight">
            Ritchie Street Central Headquarters
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
            Realtech Vision is deeply rooted in Chennai’s historic electronic marketplace on Ritchie Street. Over 15 years, we have evolved from a premier local electronics distributor into an indispensable nationwide supply backbone for tier-1 security, telecommunication, networking, and enterprise storage hardware.
          </p>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Unlike retail portals or consumer eCommerce sites, we strictly adhere to a 100% pure B2B model. We never bid on direct installation projects or compete with registered integrators, ensuring dealer margins remain protected.
          </p>
        </div>

        {/* 5 Distribution Hubs */}
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5A00] mb-3">
            <span>Physical Infrastructure</span>
          </div>
          <h3 className="font-manrope text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight">
            PAN-India Warehouse Network
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRANCHES.map((branch) => (
              <div key={branch.id} className="p-6 rounded-2xl bg-gradient-to-b from-[#151820] to-[#101217] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-manrope font-bold text-base text-white">
                      {branch.city}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.05] text-[#FF5A00]">
                      {branch.type}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 mb-5 leading-relaxed">
                    {branch.address}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-xs font-semibold text-white/80 flex items-center space-x-2">
                  <Phone size={13} className="text-[#FF5A00]" />
                  <span>{branch.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authorized OEM Portfolio */}
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5A00] mb-3">
            <span>OEM Alliances</span>
          </div>
          <h3 className="font-manrope text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight">
            Authorized OEM Alliances ({ALL_BRANDS.length} Brands)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {ALL_BRANDS.map((b) => (
              <div
                key={b.id}
                onClick={() => {
                  const brandSlug = encodeURIComponent(b.name.toUpperCase().replace(/\s+/g, '-'));
                  navigate(`/brand.html?brand=${brandSlug}`);
                }}
                className="p-4 rounded-xl bg-gradient-to-b from-[#151820] to-[#101217] border border-white/[0.08] hover:border-[#FF5A00]/50 text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 group"
              >
                <p className="font-manrope text-xs font-bold text-white group-hover:text-[#FF5A00] transition-colors truncate">{b.name}</p>
                <p className="text-[10px] text-white/45 mt-0.5 truncate">{b.category}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#08090B] text-white/50 py-12 text-center text-xs border-t border-white/[0.08]">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]"></span>
          <span className="font-manrope font-bold text-sm tracking-wider text-white uppercase">
            Realtech Vision
          </span>
        </div>
        <p className="text-white/40">© {new Date().getFullYear()} Realtech Vision. Ritchie Street, Chennai. All rights reserved.</p>
      </footer>

      {/* Modals */}
      <Modals
        loginOpen={false}
        onCloseLogin={() => {}}
        dealerOpen={dealerOpen}
        onCloseDealer={() => setDealerOpen(false)}
        selectedCategory={null}
        onCloseCategory={() => {}}
        selectedBrand={selectedBrand}
        onCloseBrand={() => setSelectedBrand(null)}
        complianceModal={null}
        onCloseCompliance={() => {}}
        onSwitchToDealer={() => setDealerOpen(true)}
      />
    </div>
  );
};

export default About;
