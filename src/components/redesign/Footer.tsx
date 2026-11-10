import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenCompliance?: () => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCompliance,
  onOpenTerms,
  onOpenPrivacy,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0B0F17] text-slate-400 border-t border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">

          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="mb-5">
              <img
                src="/redesign/logo-white.png"
                alt="Realtech Vision"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/realtech-logo-white-v2.png';
                }}
              />
            </div>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-md">
              India's premier factory-authorized wholesale distributor of enterprise security systems, structured copper &amp; fiber network infrastructure, and high-end biometric access terminals.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-3 max-w-md">
              <ShieldCheck className="w-5 h-5 text-[#F85C08] shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white block">Strict Pure-B2B Distributor Guarantee</span>
                Zero consumer retail. We never bid on direct integration projects.
              </div>
            </div>
          </div>

          {/* Col 2: Equipment Lines (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold text-white mb-5 uppercase tracking-[0.16em]">
              Hardware Lines
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px]">
              {['Surveillance Cameras', 'Recorders & NVRs', 'PoE Switches', 'Surveillance HDDs', 'Regulated Power', 'Access & Locks'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo('categories')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: OEM Alliances (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold text-white mb-5 uppercase tracking-[0.16em]">
              Key OEM Brands
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px]">
              {['Hikvision', 'Trueview', 'CP Plus', 'Western Digital', 'TP-Link', 'Matrix', 'Prama', 'Toshiba'].map((brand) => (
                <li key={brand}>
                  <button
                    onClick={() => scrollTo('brands')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {brand}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Central Headquarters (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold text-white mb-5 uppercase tracking-[0.16em]">
              Central Headquarters
            </h4>
            <ul className="space-y-4 text-xs sm:text-[13px]">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#F85C08] mt-0.5 shrink-0" />
                <span className="text-slate-300 leading-relaxed">
                  No. 42 Ritchie Street, Narasingapuram St, Mount Road, Chennai, Tamil Nadu 600002
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#F85C08] shrink-0" />
                <a href="tel:+919840001515" className="text-white font-bold hover:text-[#F85C08] transition-colors">
                  +91 98400 01515
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#F85C08] shrink-0" />
                <a href="mailto:sales@realtechvision.in" className="text-slate-300 hover:text-white transition-colors">
                  sales@realtechvision.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Realtech Vision. Ritchie Street, Chennai. All rights reserved.</p>
          <div className="flex space-x-6">
            <button
              onClick={onOpenCompliance || (() => scrollTo('why-us'))}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Compliance &amp; Standards
            </button>
            <button
              onClick={onOpenTerms || (() => scrollTo('contact'))}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Supply
            </button>
            <button
              onClick={onOpenPrivacy || (() => scrollTo('contact'))}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Trade Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
