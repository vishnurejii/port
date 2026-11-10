import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.8;
            setScrolled(window.scrollY > heroHeight);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`flex justify-between items-center font-bold w-full px-6 py-3 z-50 sticky top-0 transition-all ${scrolled ? 'bg-white/95 shadow-md border-b border-[#EE6E00]/20 backdrop-blur-md' : 'bg-white'}`}>
            <p className="text-black font-bold text-2xl tracking-tight">SBM CARGO SERVICES</p>
            <nav>
                <ul className="hidden xl:flex gap-8 text-sm font-semibold text-black cursor-pointer">
                    <a href="#home" className="hover:text-[#EE6E00] transition-colors">HOME</a>
                    <a href="#markets" className="hover:text-[#EE6E00] transition-colors">MARKETS</a>
                    <a href="#solutions" className="hover:text-[#EE6E00] transition-colors">SOLUTIONS</a>
                    <a href="#responsibilities" className="hover:text-[#EE6E00] transition-colors">RESPONSIBILITIES</a>
                    <NavLink to="/about" className="hover:text-[#EE6E00] transition-colors">ABOUT US</NavLink>
                    <a href="#terms" className="hover:text-[#EE6E00] transition-colors">TERMS</a>
                    <a href="#resources" className="hover:text-[#EE6E00] transition-colors">RESOURCES</a>
                    <a href="#contact" className="hover:text-[#EE6E00] transition-colors">CONTACT</a>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
