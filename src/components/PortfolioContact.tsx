import React, { useState } from 'react';

export const PortfolioContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    phone: '',
    email: '',
    city: '',
    interest: 'Surveillance & CCTV',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        firm: '',
        phone: '',
        email: '',
        city: '',
        interest: 'Surveillance & CCTV',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>🤝</span>
            <span>GET IN TOUCH • PARTNERSHIP & DEALERSHIP INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Connect With Realtech Vision <span className="text-[#EE6E00]">Today</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            Whether you are looking to become an authorized dealer, require tender allocation support, or need project pricing on volume hardware, our distribution desk is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Call Box */}
            <div className="bg-[#F4F5F7] border-2 border-gray-200 rounded-3xl p-6">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Central Dealer Helpline
              </span>
              <a
                href="tel:+919840001515"
                className="text-2xl sm:text-3xl font-black text-black font-mono hover:text-[#EE6E00] transition-colors block"
              >
                +91 98400 01515
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Monday to Saturday: 10:00 AM – 7:30 PM IST (Sunday Closed)
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-200 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/919840001515"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>💬</span> WhatsApp Direct
                </a>
                <a
                  href="mailto:sales@realtechvision.in"
                  className="px-4 py-2.5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
                >
                  ✉️ sales@realtechvision.in
                </a>
              </div>
            </div>

            {/* Headquarters Box */}
            <div className="bg-[#F4F5F7] border border-gray-200 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EE6E00]"></span>
                <h4 className="font-bold text-sm text-black">Central Head Office</h4>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                Ritchie Street, Electronics Market, Mount Road, Chennai - 600002, Tamil Nadu, India.
              </p>
              <div className="text-[11px] text-gray-500 pt-2 border-t border-gray-200">
                Regional Hubs: <strong>Delhi NCR • Hyderabad • Bangalore • Surat</strong>
              </div>
            </div>

            {/* B2B Covenant Reminder */}
            <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-5">
              <span className="font-bold text-xs text-black block mb-1">
                🔒 Channel Protection Guarantee:
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">
                We distribute strictly to authorized trade partners, system integrators, and registered resellers. We do not sell retail to end users.
              </p>
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black">
                  Submit a Partnership or Project Inquiry
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your requirements below and our regional distribution manager will contact you within 2 working hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in">
                  <span className="text-4xl block mb-2">🎉</span>
                  <h4 className="text-lg font-bold text-black">Thank you for reaching out!</h4>
                  <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                    Your inquiry has been routed to our central distribution desk. A specialist will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Company / Firm Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. SecureTech Systems"
                        value={formData.firm}
                        onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="98400 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@securetech.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        City / State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chennai, Bangalore, Hyderabad..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                      >
                        <option value="Surveillance & CCTV">Surveillance & IP Cameras</option>
                        <option value="NVR & DVR Recording">NVR & DVR Recording</option>
                        <option value="Networking & PoE">Industrial Networking & PoE</option>
                        <option value="Enterprise Storage">Surveillance Storage (Toshiba)</option>
                        <option value="Access Control & Biometrics">Access Control & Biometrics</option>
                        <option value="Dealership Application">New Dealership Application</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                      Project Details / Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify product models, quantities, tender timeline, or general questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      Send Partnership Inquiry
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
