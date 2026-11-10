import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { INDIAN_STATES_AND_CITIES } from '../data/companyData';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [selectedState, setSelectedState] = useState('Tamil Nadu');
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    firmName: '',
    gstin: '',
    phone: '',
    email: '',
    state: 'Tamil Nadu',
    city: 'Chennai',
    role: 'System Integrator (CCTV / IT)',
    volume: '₹1 Lakh – ₹5 Lakhs'
  });

  if (!isOpen) return null;

  // Indian GST format: 15 alphanumeric characters (2 state digits + 10 PAN chars + 1 entity + Z + 1 check)
  const isGstinPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i;
  const gstinEntered = form.gstin.trim();
  const showGstinHint = gstinEntered.length > 0 && (!isGstinPattern.test(gstinEntered) || gstinEntered.length !== 15);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedState(val);
    const cities = INDIAN_STATES_AND_CITIES[val] || [];
    setForm({
      ...form,
      state: val,
      city: cities[0] || ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141C22]/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
    >
      <div className="relative w-full max-w-xl bg-[#FFFFFF] border border-[#E5E8EC] p-6 sm:p-8 shadow-[0_16px_40px_rgba(31,38,44,0.18)] rounded-2xl my-8 animate-fade-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5F666D] hover:text-[#1F262C] hover:bg-[#F4F5F7] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-[#E5E8EC]">
          <img
            src="/realtech-logo-v2.png"
            alt="Realtech Vision"
            className="h-8 w-auto object-contain flex-shrink-0"
            width="140"
            height="32"
          />
          <div>
            <h2 id="partner-modal-title" className="text-lg font-bold text-[#1F262C] font-sans">
              Become an Authorized Channel Dealer
            </h2>
            <p className="text-xs text-[#5F666D]">
              Direct wholesale supply strictly for verified security dealers, integrators & IT retailers.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E3EEE6] text-[#2F6B48] border border-[#2F6B48]/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1F262C]">Dealer Application Received</h3>
            <p className="text-sm text-[#5F666D] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#1F262C]">{form.name}</span>. A dedicated regional branch manager from our <span className="font-semibold text-[#1F262C]">{form.state}</span> logistics desk will review your business credentials and issue your wholesale order portal credentials within 2 business hours.
            </p>
            <div className="p-3 bg-[#F4F5F7] border border-[#E5E8EC] rounded-xl text-xs text-[#5F666D] max-w-md mx-auto">
              <span>Firm: <strong className="text-[#1F262C]">{form.firmName}</strong> • Territory: <strong className="text-[#1F262C]">{form.city}, {form.state}</strong></span>
              {form.gstin && (
                <div className="font-mono text-[11px] mt-0.5">GSTIN: {form.gstin.toUpperCase()}</div>
              )}
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-es-primary px-8 py-2.5 text-xs font-semibold rounded-full"
              >
                <span>Return to Homepage</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dealer-name" className="block text-[#1F262C] font-semibold mb-1.5">
                  Contact Person *
                </label>
                <input
                  id="dealer-name"
                  required
                  type="text"
                  placeholder="e.g. Rajesh Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] placeholder-[#5F666D]/70 rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                />
              </div>

              <div>
                <label htmlFor="dealer-firm" className="block text-[#1F262C] font-semibold mb-1.5">
                  Business / Firm Name *
                </label>
                <input
                  id="dealer-firm"
                  required
                  type="text"
                  placeholder="e.g. Apex Security Solutions"
                  value={form.firmName}
                  onChange={(e) => setForm({ ...form, firmName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] placeholder-[#5F666D]/70 rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                />
              </div>
            </div>

            {/* GSTIN Field with Non-Blocking Format Validation */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="dealer-gstin" className="text-[#1F262C] font-semibold">
                  GSTIN (Goods and Services Tax ID)
                </label>
                <span className="text-[11px] text-[#5F666D]">Recommended for wholesale billing</span>
              </div>
              <input
                id="dealer-gstin"
                type="text"
                maxLength={15}
                placeholder="e.g. 33AAAAA0000A1Z5"
                value={form.gstin}
                onChange={(e) => setForm({ ...form, gstin: e.target.value.toUpperCase() })}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] placeholder-[#5F666D]/70 rounded-xl font-mono uppercase focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
              />
              {showGstinHint && (
                <p className="text-[11px] text-[#B53E00] mt-1">
                  Note: Standard Indian GSTIN is 15 alphanumeric characters (e.g. 33AAAAA0000A1Z5). You may still submit if using provisional numbers.
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dealer-phone" className="block text-[#1F262C] font-semibold mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  id="dealer-phone"
                  required
                  type="tel"
                  placeholder="+91 98400 00000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] placeholder-[#5F666D]/70 rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                />
              </div>

              <div>
                <label htmlFor="dealer-email" className="block text-[#1F262C] font-semibold mb-1.5">
                  Business Email *
                </label>
                <input
                  id="dealer-email"
                  required
                  type="email"
                  placeholder="rajesh@firm.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] placeholder-[#5F666D]/70 rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dealer-state" className="block text-[#1F262C] font-semibold mb-1.5">
                  State / Jurisdiction *
                </label>
                <select
                  id="dealer-state"
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                >
                  {Object.keys(INDIAN_STATES_AND_CITIES).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="dealer-city" className="block text-[#1F262C] font-semibold mb-1.5">
                  City / Commercial Hub *
                </label>
                <select
                  id="dealer-city"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                >
                  {(INDIAN_STATES_AND_CITIES[selectedState] || []).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dealer-role" className="block text-[#1F262C] font-semibold mb-1.5">
                  Channel Role *
                </label>
                <select
                  id="dealer-role"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                >
                  <option>System Integrator (CCTV / IT)</option>
                  <option>Regional Sub-Distributor</option>
                  <option>Security Hardware Retailer</option>
                  <option>Govt / Enterprise Contractor</option>
                </select>
              </div>

              <div>
                <label htmlFor="dealer-volume" className="block text-[#1F262C] font-semibold mb-1.5">
                  Monthly Procurement Budget
                </label>
                <select
                  id="dealer-volume"
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E8EC] text-[#1F262C] rounded-xl focus:outline-none focus:border-[#EE6E00] focus:ring-1 focus:ring-[#EE6E00] transition-all"
                >
                  <option>₹1 Lakh – ₹5 Lakhs</option>
                  <option>₹5 Lakhs – ₹15 Lakhs</option>
                  <option>₹15 Lakhs – ₹50 Lakhs</option>
                  <option>₹50 Lakhs+ (Super-Dealer)</option>
                </select>
              </div>
            </div>

            {/* Pure distribution covenant acknowledgement */}
            <div className="p-3 bg-[#F4F5F7] border border-[#E5E8EC] rounded-xl text-[11px] text-[#5F666D] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#2F6B48] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1F262C] block">
                  Wholesale Distributor Covenant:
                </span>
                Realtech Vision operates strictly on a B2B channel model. All dealer pricing and credit slabs are kept strictly confidential.
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-es-primary w-full py-3 text-xs justify-center rounded-full font-semibold group flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#EE6E00]"
              >
                <span>Submit Dealer Application</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default PartnerModal;
