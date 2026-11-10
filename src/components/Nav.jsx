import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sbmLogo from '../assets/sbmlogo.png';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(
        ".mobile-link",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#markets", label: "Markets" },
    { href: "#solutions", label: "Solutions" },
    { href: "#responsibilities", label: "Services" },
    { href: "#terms", label: "Terms" },
    { href: "#resources", label: "Resources" },
  ];

  const handleLinkClick = (href) => {
    setActive(href);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/95 border-b border-[#EE6E00]/20 shadow-lg"
          : "backdrop-blur-md bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={sbmLogo} alt="SBM Logo" className="h-10 w-auto" />
            <div
              className={`text-xl font-bold transition-colors hidden sm:block ${
                scrolled ? "text-black" : "text-black"
              }`}
            >
              SBM Cargo Services LLC
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`px-4 py-2 text-sm font-medium relative group transition-all duration-300 ${
                  active === link.href
                    ? "text-black"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#EE6E00] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Contact Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className={`hidden sm:flex items-center px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#EE6E00] text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                  : "border-2 border-[#EE6E00] text-black font-semibold hover:bg-[#EE6E00]/10 backdrop-blur-sm"
              }`}
            >
              Contact Now
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-black hover:bg-[#EE6E00]/20"
                  : "text-black hover:bg-[#EE6E00]/10"
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden backdrop-blur-xl bg-white/95 border-t border-[#EE6E00]/20"
        >
          <div className="px-4 py-4 flex flex-col divide-y divide-black/30">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`mobile-link block py-3 px-4 text-black ${
                  active === link.href
                    ? "bg-[#EE6E00] text-black font-semibold"
                    : "hover:bg-[#EE6E00]/20"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link block mt-4 py-3 px-4 bg-[#EE6E00] text-black font-semibold text-center rounded"
            >
              Contact Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
