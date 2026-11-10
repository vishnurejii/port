import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import customerSupportIcon from "../assets/icons/customer-support.png";
import tagIcon from "../assets/icons/tag.png";
import twoPeopleIcon from "../assets/icons/two-people.png";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    title: "Shipping Guidelines",
    description: "Comprehensive guides for preparing, packaging, and sending cargo smoothly across all transport modes.",
    icon: tagIcon,
    stats: "Complete Guides",
    features: ["Packaging Standards", "Documentation Checklist", "Safety Protocols"]
  },
  {
    title: "Customer Support",
    description: "24/7 dedicated support team ready to assist with tracking, queries, and emergency logistics needs.",
    icon: customerSupportIcon,
    stats: "24/7 Available",
    features: ["Live Chat Support", "Phone Assistance", "Email Support"]
  },
  {
    title: "Expert Consultation",
    description: "Connect with our logistics experts for customized solutions and strategic supply chain optimization.",
    icon: twoPeopleIcon,
    stats: "Expert Solutions",
    features: ["Route Optimization", "Cost Analysis", "Custom Solutions"]
  }
];

const Resources = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);
    const ctaRef = useRef(null);

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
                { opacity: 0, y: 60, scale: 0.95 },
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

            gsap.fromTo(ctaRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
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
                <div ref={titleRef} className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight">
                        Resources & <span className="text-[#EE6E00]">Support</span>
                    </h2>
                    <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
                        Everything you need to make your logistics experience seamless and successful
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {resources.map((resource, idx) => (
                        <div
                            key={idx}
                            ref={el => cardsRef.current[idx] = el}
                            className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl transition-all duration-300 hover:-translate-y-1 will-change-transform overflow-hidden"
                        >
                            {/* Blue circle animation */}
                            <div className="absolute -left-full top-0 w-full h-full bg-black rounded-full scale-0 group-hover:scale-[3] group-hover:left-0 transition-all duration-700 ease-in-out"></div>
                            
                            {/* Icon */}
                            <div className="relative z-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <img src={resource.icon} alt={resource.title} className="w-10 h-10" />
                            </div>
                            
                            {/* Stats badge */}
                            <div className="relative z-10 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-black group-hover:text-white text-sm font-semibold mb-4 transition-colors duration-300">
                                {resource.stats}
                            </div>
                            
                            <h3 className="relative z-10 text-2xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-300">
                                {resource.title}
                            </h3>
                            
                            <p className="relative z-10 text-black group-hover:text-white leading-relaxed mb-6 transition-colors duration-300">
                                {resource.description}
                            </p>
                            
                            {/* Features list */}
                            <div className="relative z-10 space-y-2 mb-6">
                                {resource.features.map((feature, featureIdx) => (
                                    <div key={featureIdx} className="flex items-center text-sm text-black group-hover:text-white transition-colors duration-300">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
                

            </div>
        </div>
    );
};

export default Resources;
