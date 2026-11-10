import React, { useState } from 'react';
import { BRANCHES } from '../data/portalData';

interface Section5ContactProps {
  onOpenPartnerModal: () => void;
}

export const Section5Contact: React.FC<Section5ContactProps> = ({ onOpenPartnerModal }) => {
  const [activeTab, setActiveTab] = useState<'quotation' | 'dealership'>('quotation');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    phone: '',
    email: '',
    city: '',
    inquiryType: 'Quotation Request',
    gstin: '',
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
        inquiryType: 'Quotation Request',
        gstin: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#EE6E00] mb-3">
            <span>📞</span>
            <span>5. CONTACT & BUSINESS INQUIRIES • DIRECT DESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
            Connect With Realtech Vision.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Reach our central distribution team for wholesale hardware quotations, tender allocations, technical RMA bench assistance, or new dealership applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info, Office Address & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Business Telephone & Hours */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-sm">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Central Dealer Helpline & Sales Desk
              </span>
              <a
                href="tel:+919840001515"
                className="text-2xl sm:text-3xl font-black text-black font-mono hover:text-[#EE6E00] transition-colors block"
              >
                +91 98400 01515
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Operational: Monday – Saturday: 10:00 AM – 7:30 PM IST (Sunday Closed)
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-100 flex flex-wrap gap-2">
                {/* 4. WhatsApp Direct Link */}
                <a
                  href="https://wa.me/919840001515?text=Hello%20Realtech%20Vision%20Team,%20I'd%20like%20to%20inquire%20about%20hardware%20procurement%20and%20dealer%20pricing."
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>💬</span> WhatsApp Direct Desk
                </a>
              </div>
            </div>

            {/* 2. Business Emails */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-black">Official Department Emails:</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Sales & Quotations:</span>
                  <a href="mailto:sales@realtechvision.in" className="font-bold text-black hover:text-[#EE6E00]">
                    sales@realtechvision.in
                  </a>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Dealer Partnership:</span>
                  <a href="mailto:dealers@realtechvision.in" className="font-bold text-black hover:text-[#EE6E00]">
                    dealers@realtechvision.in
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Technical RMA Lab:</span>
                  <a href="mailto:support@realtechvision.in" className="font-bold text-black hover:text-[#EE6E00]">
                    support@realtechvision.in
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Office Address & Interactive Map */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
                  Central Head Office
                </span>
                <h4 className="font-bold text-base text-black">Ritchie Street Headquarters</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Ritchie Street, Electronics Market Corridor, Mount Road, Chennai - 600002, Tamil Nadu, India.
                </p>
              </div>

              {/* Map Preview Box */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-black">
                  <span>📍</span>
                  <span>Chennai Coordinates: 13.0674° N, 80.2718° E</span>
                </div>
                <p className="text-[11px] text-gray-500">
                  Located in the heart of South India's premier IT & electronics trade district.
                </p>
                <a
                  href="https://maps.google.com/?q=Ritchie+Street+Mount+Road+Chennai+600002"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 bg-black hover:bg-gray-800 text-white font-bold rounded-xl text-xs transition-colors"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              {/* Regional Branches summary */}
              <div className="pt-2 text-xs text-gray-500">
                <span className="font-bold text-black block mb-1">Fulfillment Hubs:</span>
                <p>Delhi NCR • Hyderabad • Bangalore • Surat • Chennai</p>
              </div>
            </div>

            {/* 5. Dealer / Partnership Option Callout */}
            <div className="bg-orange-50 border border-orange-200 rounded-3xl p-6">
              <span className="text-xs font-mono font-bold text-[#EE6E00] uppercase tracking-wider block mb-1">
                Authorized Dealership Option
              </span>
              <h4 className="font-bold text-base text-black mb-1">
                Are you a System Integrator or IT Reseller?
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">
                Unlock wholesale carton rates, priority allocation holds, and tender protection across Trueview, Hikvision, and Toshiba hardware.
              </p>
              <button
                onClick={onOpenPartnerModal}
                className="w-full py-2.5 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-xs transition-all shadow-sm cursor-pointer"
              >
                Apply for Dealership Account →
              </button>
            </div>

          </div>

          {/* Right Column: Inquiry or Quotation Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg">
              
              {/* Form Mode Selector Tabs */}
              <div className="flex items-center gap-2 mb-8 p-1.5 bg-gray-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('quotation');
                    setFormData({ ...formData, inquiryType: 'Quotation Request' });
                  }}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    activeTab === 'quotation'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  📝 Quotation / Price Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('dealership');
                    setFormData({ ...formData, inquiryType: 'Dealer Partnership' });
                  }}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    activeTab === 'dealership'
                      ? 'bg-white text-[#EE6E00] shadow-sm'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  🤝 Dealer / Partnership Inquiry
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-black">
                  {activeTab === 'quotation'
                    ? 'Request Hardware Quotation / BOM Sizing'
                    : 'Apply for Authorized Dealership & Wholesale Account'}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {activeTab === 'quotation'
                    ? 'Submit your bill of materials or model numbers for instant tiered pricing.'
                    : 'Provide your firm and tax details to establish a trade account.'}
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in">
                  <span className="text-4xl block mb-2">🎉</span>
                  <h4 className="text-lg font-bold text-black">Inquiry Submitted Successfully!</h4>
                  <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                    Your request has been routed to our regional branch manager. A formal response will be dispatched within 2 working hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name and Firm */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Full Name *
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
                        Firm / Business Name *
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

                  {/* Row 2: Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm font-semibold">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="98400 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="flex-1 block w-full rounded-none rounded-r-xl border border-gray-300 px-3 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        Business Email Address *
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

                  {/* Row 3: City and Inquiry / Product Category */}
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
                        Category / Inquiry Subject
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                      >
                        <option value="Quotation Request">Hardware Quotation Request</option>
                        <option value="Tender Sizing">Tender Sizing & OEM Letter</option>
                        <option value="IP Surveillance">IP Cameras & 4K CCTV</option>
                        <option value="NVR & DVR">NVR / DVR Recording Systems</option>
                        <option value="Networking & PoE">Industrial Networking & PoE</option>
                        <option value="Surveillance Storage">Toshiba Surveillance Storage</option>
                        <option value="Access Control">Biometrics & Access Control</option>
                        <option value="Dealer Partnership">New Dealer Account Application</option>
                      </select>
                    </div>
                  </div>

                  {/* Conditional GSTIN Field for Dealership mode */}
                  {activeTab === 'dealership' && (
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                        GSTIN Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="33AAAAA0000A1Z5"
                        value={formData.gstin}
                        onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black uppercase font-mono focus:outline-none focus:border-[#EE6E00]"
                      />
                    </div>
                  )}

                  {/* Message / Project Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                      Project Requirements / Bill of Materials (BOM)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify requested models (e.g. 8MP Bullet, 16CH NVR, 4TB Toshiba), quantities, or project tender details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      {activeTab === 'quotation' ? 'Send Quotation Request →' : 'Submit Dealership Application →'}
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
