import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logi1 from "../assets/logis/logi1.webp";
import logi2 from "../assets/logis/logi2.webp";
import logi4 from "../assets/logis/logi4.webp";
import logi5 from "../assets/logis/logi5.webp";
import logi9 from "../assets/logis/logi9.webp";
import logi11 from "../assets/logis/logi11.webp";
import flightIcon from "../assets/icons/flight.png";
import cargoShipIcon from "../assets/icons/cargo-ship.png";
import cargoTruckIcon from "../assets/icons/cargo-truck.png";
import containerIcon from "../assets/icons/container.png";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Air Freight",
    description: "Fast, efficient air cargo delivery worldwide with real-time tracking and priority handling.",
    icon: flightIcon,
    bgImage: logi1,
    delay: "0ms"
  },
  {
    title: "Sea Freight",
    description: "Cost-effective global shipping solutions with full container and LCL options.",
    icon: cargoShipIcon,
    bgImage: logi2,
    delay: "100ms"
  },
  {
    title: "Land Freight",
    description: "Reliable road transport across regions with flexible scheduling and route optimization.",
    icon: cargoTruckIcon,
    bgImage: logi4,
    delay: "200ms"
  },
  {
    title: "Customs Brokerage",
    description: "Hassle-free customs clearance and documentation with expert compliance support.",
    icon: containerIcon,
    bgImage: logi5,
    delay: "300ms"
  },
  {
    title: "Packing & Lashing",
    description: "Secure packing solutions to protect your cargo during transit with specialized materials.",
    icon: containerIcon,
    bgImage: logi9,
    delay: "400ms"
  },
  {
    title: "FTA Approved Warehouses",
    description: "Safe and compliant storage facilities with 24/7 security and climate control.",
    icon: containerIcon,
    bgImage: logi11,
    delay: "500ms"
  }
];

const Solutions = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(titleRef.current, 
                { opacity: 0, y: 40 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(cardsRef.current.filter(Boolean),
                { opacity: 0, y: 60, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
            
            <div className="relative max-w-7xl mx-auto">
                <div ref={titleRef} className="text-center mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent to-gray-800 rounded mr-4"></div>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight">
                            Our <span className="text-[#EE6E00]">Solutions</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-l from-transparent to-gray-800 rounded ml-4"></div>
                    </div>
                    <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
                        Comprehensive logistics services designed to move your cargo seamlessly across borders and industries
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            ref={el => cardsRef.current[idx] = el}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${solution.bgImage})` }}
                            ></div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/90 opacity-85 group-hover:bg-gradient-to-t group-hover:from-black/50 group-hover:to-transparent transition-all duration-700 ease-in-out"></div>

                            {/* Content */}
                            <div className="relative p-8 h-80 flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <img src={solution.icon} alt={solution.title} className="w-8 h-8 filter brightness-0 invert" />
                                    </div>
                                    <div className="w-2 h-2 bg-white/40 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300 drop-shadow-lg">
                                        {solution.title}
                                    </h3>
                                    <p className="text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 drop-shadow-md">
                                        {solution.description}
                                    </p>
                                </div>
                                
                                {/* Hover Arrow */}
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to Action */}
                {/* <div className="text-center mt-16">
                    <div className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <span>Explore All Services</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Solutions;
