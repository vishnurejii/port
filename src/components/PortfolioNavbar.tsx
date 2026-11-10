import React, { useState, useEffect } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortfolioNavbarProps {
  onOpenContactModal: () => void;
  onOpenPartnerModal: () => void;
}

export const PortfolioNavbar: React.FC<PortfolioNavbarProps> = ({
  onOpenContactModal,
  onOpenPartnerModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'products-services', 'clients-credentials'];
      const scrollPos = window.scrollY + 150;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: '1. Home', id: 'home' },
    { label: '2. About Company', id: 'about' },
    { label: '3. Products & Services', id: 'products-services' },
    { label: '4. Clients & Credentials', id: 'clients-credentials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-1.5 sm:py-2'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2 sm:py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Space - image1 */}
          <div
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-36 sm:w-44 h-8 sm:h-9 flex items-center">
              <ImagePlaceholder label="image1" alt="Realtech Vision Logo" aspectRatio="aspect-auto h-full w-full" />
            </div>
            <div className="hidden lg:flex flex-col border-l border-gray-200 pl-2.5">
              <span className="font-bold text-xs sm:text-[13px] tracking-tight text-black group-hover:text-[#EE6E00] transition-colors leading-tight">
                Realtech Vision
              </span>
              <span className="text-[9px] font-bold text-[#EE6E00] uppercase tracking-wider leading-none">
                Distribution Portal
              </span>
            </div>
          </div>

          {/* Desktop Nav Links in Order */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#EE6E00] bg-orange-50 font-bold'
                      : 'text-black hover:text-[#EE6E00] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenContactModal}
              className="hidden md:inline-flex px-2.5 py-1 text-xs font-bold text-black border border-gray-300 hover:border-[#EE6E00] hover:text-[#EE6E00] rounded-lg transition-all hover:bg-gray-50 cursor-pointer"
            >
              Contact Us
            </button>

            <a
              href="tel:+919840001515"
              className="hidden sm:inline-flex px-2.5 py-1 text-xs font-bold text-black border border-gray-300 hover:border-black rounded-lg transition-all hover:bg-gray-50"
            >
              📞 +91 98400 01515
            </a>

            <button
              onClick={onOpenPartnerModal}
              className="px-3 sm:px-3.5 py-1 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold text-xs rounded-lg transition-all shadow-sm hover:shadow-sm cursor-pointer"
            >
              Partner With Us
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 text-black hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2.5 pb-4 space-y-1.5 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 divide-y divide-gray-100 text-xs font-semibold text-black">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 text-black hover:text-[#EE6E00] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-gray-400">→</span>
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenContactModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-black font-bold rounded-lg text-center text-xs transition-colors cursor-pointer"
              >
                Contact & Inquiries
              </button>
              <button
                onClick={() => {
                  onOpenPartnerModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-[#EE6E00] text-white font-bold rounded-lg text-center text-xs shadow-sm cursor-pointer"
              >
                Apply for Dealership
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
