import React from 'react';
import { ArrowUpRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CallToActionProps {
  onOpenPartnerModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Target 8: Bold, visually distinct full-width section with decorative background */}
        <div className="relative rounded-3xl bg-slate-950 text-white px-8 py-16 sm:py-24 sm:px-16 overflow-hidden shadow-2xl">
          {/* Subtle decorative ambient gradient & geometry */}
          <div 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #EE6E00 0%, transparent 70%)' }}
          />
          <div 
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
          />

          {/* Abstract Grid Mesh Lines in Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-orange-400 mb-8 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-rtv-orange" />
              <span>100% Pure Channel Distribution</span>
            </div>

            {/* Target 8: Short Headline with Emphasized Key Phrase Styling */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.08] mb-6">
              Ready to scale your business with{' '}
              <span className="italic font-serif font-normal text-rtv-orange">
                India's most dependable distribution partner?
              </span>
            </h2>

            {/* Concise Supporting Text */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Establish your verified wholesale channel account today. Direct pricing, protected dealer margins, and certified OEM warranties across India.
            </p>

            {/* Target 8: Single Primary CTA Button with Arrow Icon */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-bold text-slate-950 bg-white hover:bg-rtv-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-4 h-4 qodeca-arrow" />
              </button>
            </div>

            {/* Direct Contact Hotline Strip */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-slate-400 font-mono pt-8 border-t border-white/10">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-rtv-orange" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-rtv-orange" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="text-slate-400">Ritchie St, Chennai (HO)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
