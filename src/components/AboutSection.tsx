import React from 'react';
import {
  Building2,
  TrendingUp,
  Users,
  Cpu,
  Star,
  CheckCircle2,
  Award,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onOpenPartnerModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-[#FFFFFF] relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle warm low-glare grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(31, 38, 44, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 38, 44, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E8EC] text-[#B53E00] text-xs font-semibold mb-3 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#EE6E00]" />
            <span>ESTABLISHED 2008 • CHENNAI CENTRAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F262C] font-sans tracking-tight leading-tight">
            15+ Years of Dedicated <span className="text-[#EE6E00]">B2B Tech Distribution</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] mt-2.5 leading-relaxed max-w-2xl mx-auto">
            Founded in Ritchie Street, Chennai—the premier electronics commercial center of South India—Realtech Vision combines manufacturer-direct sourcing, in-house technical RMA, and dependable logistics for security installers and system integrators.
          </p>
        </div>

        {/* 3 Core Pillars: Customer Feedback, Channel Growth, and Technical Verification */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Pillar 1: Customer Feedback */}
          <div className="bg-[#FFFFFF] hover:bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#E5E8EC] hover:border-[#EE6E00]/40 shadow-es-card hover:shadow-es-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E3EEE6] text-[#2F6B48] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 bg-[#E3EEE6] text-[#2F6B48] text-xs font-bold px-2.5 py-1 rounded-full border border-[#2F6B48]/20">
                  <Star className="w-3.5 h-3.5 fill-current text-[#EE6E00]" />
                  <span>99% CSAT</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#1F262C] group-hover:text-[#B53E00] transition-colors mb-2">
                Channel Trust & Feedback
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5F666D] leading-relaxed mb-4">
                Structured feedback loops with active regional dealers. We continually refine BOM estimates, warranty RMA turnaround, and partner price protections based on real-world installer requirements.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#E5E8EC] text-xs text-[#1F262C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6B48] flex-shrink-0" />
                <span>Zero retail bypass covenant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6B48] flex-shrink-0" />
                <span>Dedicated regional logistics support</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Business Growth */}
          <div className="bg-[#FFFFFF] hover:bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#E5E8EC] hover:border-[#EE6E00]/40 shadow-es-card hover:shadow-es-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F1F3] text-[#EE6E00] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="bg-[#F0F1F3] text-[#B53E00] text-xs font-bold px-2.5 py-1 rounded-full font-mono border border-[#EE6E00]/20">
                  +35% CAGR
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1F262C] group-hover:text-[#B53E00] transition-colors mb-2">
                Scalable Dealer Growth
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5F666D] leading-relaxed mb-4">
                Accelerating partner growth through structured dealer tiers, volume price slabs, transparent billing, and localized stock reservations across Chennai, Delhi, Hyderabad, Bangalore, and Surat.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#E5E8EC] text-xs text-[#1F262C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B53E00] flex-shrink-0" />
                <span>5 Regional super-hubs across India</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B53E00] flex-shrink-0" />
                <span>Transparent volume tier pricing</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: High Performance */}
          <div className="bg-[#FFFFFF] hover:bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#E5E8EC] hover:border-[#EE6E00]/40 shadow-es-card hover:shadow-es-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F1F3] text-[#EE6E00] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="bg-[#F0F1F3] text-[#B53E00] text-xs font-bold px-2.5 py-1 rounded-full font-mono border border-[#EE6E00]/20">
                  99.98% LAB PASS
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1F262C] group-hover:text-[#B53E00] transition-colors mb-2">
                Engineering & Verification
              </h3>

              <p className="text-xs sm:text-[13px] text-[#5F666D] leading-relaxed mb-4">
                Inward batch verification in our in-house RMA and diagnostics laboratory. Surveillance NVRs, optical sensors, PoE switches, and biometric terminals undergo quality checks prior to deployment.
              </p>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#E5E8EC] text-xs text-[#1F262C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B53E00] flex-shrink-0" />
                <span>Sub-0.5s biometric validation testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B53E00] flex-shrink-0" />
                <span>In-house warranty & RMA facilitation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Verification & Onboarding Action Bar */}
        <div className="max-w-5xl mx-auto p-6 sm:p-7 bg-[#FFFFFF] border border-[#E5E8EC] rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F0F1F3] text-[#EE6E00] flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F262C]">
                Ready to partner with an established B2B hardware distributor?
              </h4>
              <p className="text-xs text-[#5F666D]">
                Register your business credentials to access wholesale pricing and dedicated regional logistics.
              </p>
            </div>
          </div>

          <a
            href="https://realtechvision.in/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-es-primary text-xs py-2.5 px-5 flex-shrink-0 shadow-sm inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
          >
            <span>Become a Dealer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
