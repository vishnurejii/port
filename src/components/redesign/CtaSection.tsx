import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenDealerModal?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDealerModal }) => {
  return (
    <section id="contact" className="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-slate-800 p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden text-center text-white">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#F85C08] uppercase tracking-[0.2em] mb-6">
            <Sparkles size={14} />
            <span>Grow Your Integration Business</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Ready to Access Direct OEM <br />
            <span className="text-gradient-brand">Wholesale Pricing &amp; Inventory?</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Join 4,000+ CCTV installers, electrical contractors, and IT resellers across India who rely on Realtech Vision for genuine sealed hardware, fast dispatch, and zero retail conflict.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDealerModal || (() => {
                window.open('https://realtechvision.in/index.html', '_blank');
              })}
              className="btn-primary-orange text-sm font-bold w-full sm:w-auto"
            >
              <span>Apply for Dealer Account</span>
              <ArrowRight size={17} />
            </button>

            <a
              href="https://wa.me/919840001515?text=Hello%20Realtech%20Vision,%20I%20would%20like%20to%20inquire%20about%20becoming%20an%20authorised%20dealer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-white text-sm font-bold w-full sm:w-auto"
            >
              <MessageSquare size={17} className="text-[#F85C08]" />
              <span>WhatsApp Ritchie St Desk</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 4-Hour Application Review
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F85C08]"></span> 100% Genuine OEM Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Strict Pure B2B Trade Protection
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
export default CtaSection;
