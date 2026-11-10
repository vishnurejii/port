import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { COMPANY_INFO, BRANCHES, INDIAN_STATES_AND_CITIES } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState('chennai');
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    phone: '',
    email: '',
    state: 'Tamil Nadu',
    city: 'Chennai',
    categoryInterest: 'CCTV & Surveillance',
    businessType: 'Dealer / Retailer',
    message: ''
  });

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const cities = INDIAN_STATES_AND_CITIES[newState] || [];
    setFormData({
      ...formData,
      state: newState,
      city: cities[0] || ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const currentBranch = BRANCHES.find((b) => b.id === activeBranch) || BRANCHES[0];

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-[#E5E8EC]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5F666D] uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#EE6E00]" />
            <span>National Channel Communications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1F262C] font-sans tracking-tight">
            Contact Regional Dispatch & Channel Support
          </h2>
          <p className="text-sm sm:text-base text-[#5F666D] max-w-2xl mt-1">
            Connect directly with regional branch coordinators across Chennai, Delhi, Hyderabad, Bangalore, and Surat.
          </p>
        </div>

        {/* 2-Column Layout: Contact Directory (5 cols) + Direct Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 5 Regional Hub Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-[#1F262C] uppercase tracking-wider mb-2">
              Regional Warehouses & Helpdesks
            </h3>

            {BRANCHES.map((b) => {
              const isSelected = b.id === activeBranch;
              const bPhoneRaw = b.phone.replace(/[^0-9]/g, '');
              return (
                <div
                  key={b.id}
                  onClick={() => setActiveBranch(b.id)}
                  className={`p-4 border rounded-[2px] cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#EE6E00] bg-[#F0F1F3]/40 shadow-sm'
                      : 'border-[#E5E8EC] hover:border-[#8a8a8a] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-[#1F262C]">
                      {b.city} ({b.type})
                    </span>
                    {b.isHeadquarter ? (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#fdf2f2] text-[#f25022]">
                        HQ
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#5F666D] px-1.5 py-0.5 bg-[#E5E8EC]">
                        {b.city.substring(0, 3).toUpperCase()}-HUB
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#5F666D] mb-2 line-clamp-2">
                    {b.address}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E5E8EC]">
                    <a
                      href={`tel:${bPhoneRaw}`}
                      className="font-semibold text-[#EE6E00] hover:underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{b.phone}</span>
                    </a>
                    <span className="text-[11px] text-[#5F666D] font-mono">
                      {b.transitTime}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Direct Wholesale Channel Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E8EC] p-6 sm:p-8 shadow-fluent rounded-[2px]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E8EC]">
              <div>
                <span className="text-xs uppercase font-mono font-bold text-[#EE6E00]">
                  OFFICIAL B2B CHANNEL INQUIRY
                </span>
                <h3 className="text-base font-bold text-[#1F262C]">
                  Route Inquiries to {currentBranch.city} Hub
                </h3>
              </div>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 border border-emerald-200 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#E3EEE6] text-[#7fba00] border border-[#cbe8be] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1F262C]">Message Dispatched</h4>
                <p className="text-xs text-[#5F666D] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed to the branch coordinator at <span className="font-semibold text-[#1F262C]">{currentBranch.city} Hub</span>. A representative will contact you via WhatsApp or phone within 2 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="ms-btn-secondary text-xs px-6 py-2"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1F262C] font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Suresh Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#8a8a8a] text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#1F262C] font-semibold mb-1">
                      Firm / Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Metro Tech Solutions"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#8a8a8a] text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1F262C] font-semibold mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98400 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#8a8a8a] text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#1F262C] font-semibold mb-1">
                      Business Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="suresh@metrotech.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#8a8a8a] text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1F262C] font-semibold mb-1">
                      Product Interest
                    </label>
                    <select
                      value={formData.categoryInterest}
                      onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#8a8a8a] text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00]"
                    >
                      <option>CCTV & Video Surveillance</option>
                      <option>Networking & PoE Switches</option>
                      <option>Surveillance Storage HDDs</option>
                      <option>Biometric Access Control</option>
                      <option>Full System Integrator BOM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#1F262C] font-semibold mb-1">
                      State / Location
                    </label>
                    <select
                      value={selectedState}
                      onChange={handleStateChange}
                      className="w-full px-3 py-2 bg-white border border-[#8a8a8a] text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00]"
                    >
                      {Object.keys(INDIAN_STATES_AND_CITIES).map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#1F262C] font-semibold mb-1">
                    Procurement Requirements / BOM Scope
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify target camera quantities, NVR channels, HDD capacities, or deployment deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#8a8a8a] text-[#1F262C] rounded-[2px] focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="ms-btn-primary w-full py-2.5 text-xs justify-center group"
                  >
                    <span>Route Inquiry to Regional Sales Desk</span>
                    <ArrowRight className="w-3.5 h-3.5 ms-chevron" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
