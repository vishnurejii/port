import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

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

            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
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
            {/* Background with dark aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111827] to-[#1F2937]"></div>
            
            <div className="relative max-w-7xl mx-auto">
                {/* Need More Help Section */}
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Need More <span className="text-[#EE6E00]">Help?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Our comprehensive knowledge base and expert team are here to support your logistics journey every step of the way.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="px-6 py-3 bg-[#EE6E00] text-black font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-[#D96300] transform hover:-translate-y-1 transition-all duration-300">
                            Download Guides
                        </button>
                        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                            Schedule Consultation
                        </button>
                    </div>
                </div>

                {/* Contact Section */}
                <div ref={contentRef} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-white mb-4">Get In Touch</h3>
                        <p className="text-gray-300 text-lg">Ready to optimize your logistics? Contact us today for personalized solutions.</p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left: Contact Info */}
                        <div className="w-full lg:w-1/3 flex flex-col items-start">
                            <h4 className="text-2xl font-semibold text-[#EE6E00] mb-8">
                                REACH US
                            </h4>
                            <div className="flex items-start mb-8">
                                <span className="text-[#EE6E00] text-3xl mr-4 mt-1">
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 10.74 8.06 11.43.34.25.8.25 1.14 0C13.89 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 17.88C9.14 17.1 5 13.61 5 11c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.61-4.14 6.1-7 8.88z"/>
                                        <circle cx="12" cy="11" r="3" fill="currentColor"/>
                                    </svg>
                                </span>
                                <span className="text-white text-lg">
                                    M-202, Al Ahrar Building,<br />
                                    Salah Al Din Street,<br />
                                    Al Khabaisi Area,<br />
                                    Dubai, UAE
                                </span>
                            </div>
                            <div className="flex items-center mb-8">
                                <span className="text-[#EE6E00] text-3xl mr-4">
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
                                    </svg>
                                </span>
                                <span className="text-white text-lg">
                                    cargoservice@sbm.com
                                </span>
                            </div>
                            <div className="flex items-center mb-8">
                                <span className="text-[#EE6E00] text-3xl mr-4">
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                                    </svg>
                                </span>
                                <span className="text-white text-lg">
                                    +91 1234567890
                                </span>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="w-full lg:w-2/3">
                            <form className="w-full max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <div className="flex flex-col gap-4">
                                    <input
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#EE6E00] focus:ring-2 focus:ring-[#EE6E00]/20 transition-all duration-300 text-black"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#EE6E00] focus:ring-2 focus:ring-[#EE6E00]/20 transition-all duration-300 text-black"
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                    <input
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#EE6E00] focus:ring-2 focus:ring-[#EE6E00]/20 transition-all duration-300 text-black"
                                        type="text"
                                        placeholder="Mobile Number"
                                    />
                                    <textarea
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#EE6E00] focus:ring-2 focus:ring-[#EE6E00]/20 transition-all duration-300 text-black"
                                        rows={4}
                                        placeholder="Message"
                                    />
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button
                                        type="submit"
                                        className="bg-[#EE6E00] hover:bg-[#D96300] text-black font-semibold rounded-full px-10 py-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
