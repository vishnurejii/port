import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  Building2, 
  Sparkles,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenLogin?: () => void;
  onOpenDealerModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, onOpenDealerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'stats', 'categories', 'why-us', 'brands', 'advantage', 'onboarding', 'hubs', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Products', id: 'categories' },
    { label: 'OEM Brands', id: 'brands' },
    { label: 'Why Realtech', id: 'why-us' },
    { label: 'Trade Advantage', id: 'advantage' },
    { label: 'Logistics Hubs', id: 'hubs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_-4px_rgba(15,23,42,0.06)] py-3.5'
          : 'bg-white/70 backdrop-blur-md border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Left */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          className="flex items-center space-x-3 group shrink-0"
        >
          <img
            src="/redesign/logo.png"
            alt="Realtech Vision"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/realtech-logo-v2.png';
            }}
          />
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 p-1 bg-slate-100/70 border border-slate-200/60 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Cluster */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="tel:+919840001515"
            className="hidden xl:flex items-center space-x-2 text-[13px] font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-xl transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F85C08]">
              <Phone size={13} />
            </div>
            <span>+91 98400 01515</span>
          </a>

          {onOpenLogin && (
            <button
              onClick={onOpenLogin}
              className="px-4 py-2.5 rounded-xl text-[13px] font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Dealer Login
            </button>
          )}

          <button
            onClick={onOpenDealerModal || (() => {
              window.open('https://realtechvision.in/index.html', '_blank');
            })}
            className="btn-primary-orange text-xs sm:text-[13px] py-2.5 px-5"
          >
            <span>Become a Partner</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onOpenDealerModal}
            className="btn-primary-orange text-xs py-2 px-3 sm:hidden"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-6 bg-white border-b border-slate-200 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1.5 pb-5 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left text-sm font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'text-[#F85C08] bg-orange-50/80 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col space-y-3">
            <a
              href="tel:+919840001515"
              className="flex items-center space-x-2 text-xs font-semibold text-slate-600 px-1"
            >
              <Phone size={14} className="text-[#F85C08]" />
              <span>Direct Ritchie St Desk: +91 98400 01515</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin?.();
                }}
                className="btn-secondary-white py-2.5 text-xs text-center"
              >
                Dealer Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDealerModal?.();
                }}
                className="btn-primary-orange py-2.5 text-xs text-center"
              >
                Apply for Trade
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
