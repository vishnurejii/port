import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Building2, Phone, Mail, ArrowRight } from 'lucide-react';
import { CategoryItem } from './CategoriesSection';
import { BrandItem } from './BrandsSection';

interface ModalsProps {
  loginOpen: boolean;
  onCloseLogin: () => void;
  dealerOpen: boolean;
  onCloseDealer: () => void;
  selectedCategory: CategoryItem | null;
  onCloseCategory: () => void;
  selectedBrand: BrandItem | null;
  onCloseBrand: () => void;
  complianceModal: 'compliance' | 'terms' | 'privacy' | null;
  onCloseCompliance: () => void;
  onSwitchToDealer: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  loginOpen,
  onCloseLogin,
  dealerOpen,
  onCloseDealer,
  selectedCategory,
  onCloseCategory,
  selectedBrand,
  onCloseBrand,
  complianceModal,
  onCloseCompliance,
  onSwitchToDealer,
}) => {
  // Login form state
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Dealer registration form state
  const [dealerForm, setDealerForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    state: 'Tamil Nadu',
    gstin: '',
    tradeCategory: 'CCTV & Security',
  });
  const [dealerSubmitted, setDealerSubmitted] = useState(false);
  const [selectedBrandCategory, setSelectedBrandCategory] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      onCloseLogin();
    }, 1800);
  };

  const handleDealerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDealerSubmitted(true);
    setTimeout(() => {
      setDealerSubmitted(false);
      setDealerForm({
        businessName: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        state: 'Tamil Nadu',
        gstin: '',
        tradeCategory: 'CCTV & Security',
      });
      onCloseDealer();
    }, 2500);
  };

  return (
    <>
      {/* 1. DEALER PORTAL LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-fade-up">
            <button
              onClick={onCloseLogin}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-bold text-[#F85C08] uppercase tracking-wider mb-4">
              <span>B2B Dealer Terminal</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Dealer Portal Access
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Enter your registered trade mobile number or Dealer Code to view live wholesale inventory, dispatch schedules, and trade credit limits.
            </p>

            {loginSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 size={36} className="text-emerald-500 mx-auto mb-2" />
                <p className="font-display text-sm font-bold text-slate-900">
                  Authenticating Trade Account...
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Connecting to Ritchie Street central database.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Mobile Number / Trade ID
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98400 00000 or RTV-DEALER-ID"
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Password / OTP
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter trade account password"
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08] text-sm"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input type="checkbox" className="rounded text-[#F85C08] focus:ring-0 border-slate-300" />
                    <span>Remember terminal</span>
                  </label>
                  <a href="tel:+919840001515" className="text-[#F85C08] hover:underline font-semibold">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary-orange py-3 text-xs font-bold cursor-pointer mt-2"
                >
                  Log In to Trade Portal
                </button>

                <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
                  New security installer or reseller?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      onCloseLogin();
                      onSwitchToDealer();
                    }}
                    className="text-[#F85C08] font-bold hover:underline cursor-pointer"
                  >
                    Apply for Dealer Verification →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. BECOME A DEALER / PARTNER MODAL */}
      {dealerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto animate-fade-up">
            <button
              onClick={onCloseDealer}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-bold text-[#F85C08] uppercase tracking-wider mb-3">
              <span>Trade Application Protocol</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Become an Authorized Trade Dealer
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Wholesale distribution access for CCTV system integrators, electrical engineers, and registered IT resellers. Fast-track approval within 4 business hours.
            </p>

            {dealerSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                <CheckCircle2 size={42} className="text-emerald-500 mx-auto mb-3" />
                <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                  Application Submitted Successfully!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{dealerForm.contactPerson || dealerForm.businessName}</strong>. Our Ritchie Street commercial verification desk will review your details and contact you within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDealerSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Business / Firm Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Security Solutions"
                      value={dealerForm.businessName}
                      onChange={(e) => setDealerForm({ ...dealerForm, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={dealerForm.contactPerson}
                      onChange={(e) => setDealerForm({ ...dealerForm, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Direct Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 00000"
                      value={dealerForm.phone}
                      onChange={(e) => setDealerForm({ ...dealerForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="orders@yourfirm.com"
                      value={dealerForm.email}
                      onChange={(e) => setDealerForm({ ...dealerForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      GSTIN Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="33AAAAA0000A1Z5"
                      value={dealerForm.gstin}
                      onChange={(e) => setDealerForm({ ...dealerForm, gstin: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08] uppercase font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      City &amp; Region *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chennai / Bangalore / Hyderabad"
                      value={dealerForm.city}
                      onChange={(e) => setDealerForm({ ...dealerForm, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F85C08]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Primary Equipment Focus
                  </label>
                  <select
                    value={dealerForm.tradeCategory}
                    onChange={(e) => setDealerForm({ ...dealerForm, tradeCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#F85C08]"
                  >
                    <option>CCTV Surveillance &amp; NVRs</option>
                    <option>PoE Networking &amp; Enterprise Routers</option>
                    <option>Surveillance HDDs &amp; Flash Storage</option>
                    <option>Biometrics &amp; Electronic Door Access</option>
                    <option>CCTV SMPS Power &amp; Central Enclosures</option>
                    <option>CAT6 Cables &amp; Structured Passive</option>
                    <option>Multi-Discipline Turnkey Integrator</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-primary-orange py-3.5 text-xs font-bold cursor-pointer"
                  >
                    Submit Dealer Application
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  Strict B2B Guarantee: Realtech Vision never competes with dealers for direct end-user installation projects.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. CATEGORY DETAIL EXPLORER MODAL */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto animate-fade-up">
            <button
              onClick={onCloseCategory}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-[#F3F6FA] flex items-center justify-center p-4">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.alt}
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-1.5 mb-2 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-bold text-[#F85C08] uppercase tracking-wider">
                    <span>OEM Category Line</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {selectedCategory.name}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    <strong>Included Equipment:</strong> {selectedCategory.items}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-800 mb-2">
                      Factory Sourced OEM Brands:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCategory.brands.map((b) => (
                        <span
                          key={b}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      onCloseCategory();
                      onSwitchToDealer();
                    }}
                    className="w-full btn-primary-orange py-3 text-xs font-bold cursor-pointer"
                  >
                    Request Trade Wholesale Price Card
                  </button>
                  <a
                    href="tel:+919840001515"
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold hover:bg-slate-50 text-center transition-colors"
                  >
                    Call Ritchie St Sales Desk (+91 98400 01515)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. BRAND DETAIL MODAL */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl sm:max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto animate-fade-up">
            <button
              onClick={() => {
                setSelectedBrandCategory(null);
                onCloseBrand();
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-bold text-[#F85C08] uppercase tracking-wider mb-3">
              <span>Authorised OEM Alliance</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                {selectedBrand.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#F85C08] uppercase tracking-wider px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200">
                  {selectedBrand.category}
                </span>
                <span className="text-xs font-bold text-slate-700 px-2.5 py-1 rounded-md bg-slate-100">
                  {selectedBrand.categories?.length || 0} Equipment Lines
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Factory-sealed original inventory with serial verification, genuine manufacturer warranty, and Ritchie Street advance RMA replacement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedBrandCategory(null);
                  onCloseBrand();
                  onSwitchToDealer();
                }}
                className="flex-1 btn-primary-orange py-3 text-xs font-bold cursor-pointer"
              >
                Inquire {selectedBrand.name} Wholesale Stock
              </button>
              <a
                href={`https://wa.me/919840001515?text=${encodeURIComponent(
                  `Hello Realtech Vision, I am inquiring about dealer pricing for ${selectedBrand.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-50 text-center"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 5. COMPLIANCE & LEGAL MODAL */}
      {complianceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[85vh] overflow-y-auto animate-fade-up">
            <button
              onClick={onCloseCompliance}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {complianceModal === 'compliance' && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  Compliance &amp; Quality Standards
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Realtech Vision operates in full compliance with Indian trade standards and ISO-certified commercial warehousing guidelines. All hardware distributed carries genuine OEM serial numbers, BIS certification where applicable, and tamper-evident manufacturer sealing.
                </p>
              </div>
            )}

            {complianceModal === 'terms' && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  Terms of Wholesale Supply
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Distribution services are provided exclusively to verified business entities, registered electrical contractors, and corporate security system integrators. Realtech Vision maintains a strict trade-only protection policy ensuring zero direct consumer retail bidding.
                </p>
              </div>
            )}

            {complianceModal === 'privacy' && (
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  Trade Privacy Policy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  We respect the commercial confidentiality of our dealer partners. Your project client lists, site locations, billing rates, and GST information are strictly protected and never disclosed to third parties or competing contractors.
                </p>
              </div>
            )}

            <button
              onClick={onCloseCompliance}
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modals;
