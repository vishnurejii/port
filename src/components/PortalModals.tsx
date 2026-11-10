import React, { useState } from 'react';
import { Product, BRANCHES } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface PortalModalsProps {
  loginOpen: boolean;
  onCloseLogin: () => void;
  registerOpen: boolean;
  onCloseRegister: () => void;
  aboutOpen: boolean;
  onCloseAbout: () => void;
  whyOpen: boolean;
  onCloseWhy: () => void;
  contactOpen: boolean;
  onCloseContact: () => void;
  cartOpen: boolean;
  onCloseCart: () => void;
  selectedProduct: Product | null;
  onCloseProduct: () => void;
  cartItems: CartItem[];
  onUpdateCartQuantity: (productId: string, delta: number) => void;
  onRemoveCartItem: (productId: string) => void;
  onClearCart: () => void;
  onAddToCart: (product: Product) => void;
}

export const PortalModals: React.FC<PortalModalsProps> = ({
  loginOpen,
  onCloseLogin,
  registerOpen,
  onCloseRegister,
  aboutOpen,
  onCloseAbout,
  whyOpen,
  onCloseWhy,
  contactOpen,
  onCloseContact,
  cartOpen,
  onCloseCart,
  selectedProduct,
  onCloseProduct,
  cartItems,
  onUpdateCartQuantity,
  onRemoveCartItem,
  onClearCart,
  onAddToCart,
}) => {
  // Login form state
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Register form state
  const [regForm, setRegForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    gst: '',
  });
  const [regSubmitted, setRegSubmitted] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setOtpSent(false);
      setMobileNumber('');
      onCloseLogin();
    }, 1500);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSubmitted(true);
    setTimeout(() => {
      setRegSubmitted(false);
      setRegForm({
        businessName: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        gst: '',
      });
      onCloseRegister();
    }, 2000);
  };

  // Cart calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.dp * item.quantity,
    0
  );
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const handleWhatsAppQuote = () => {
    if (cartItems.length === 0) return;
    const textLines = [
      'Hello Realtech Vision Team, I would like to request a dealer quote for the following items:',
      '',
      ...cartItems.map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (${item.product.brand}) - Qty: ${item.quantity} @ ₹${item.product.dp.toLocaleString()} each`
      ),
      '',
      `Subtotal: ₹${subtotal.toLocaleString()}`,
      `Estimated GST (18%): ₹${gst.toLocaleString()}`,
      `Total Approx: ₹${total.toLocaleString()}`,
      '',
      'Please confirm stock availability and dispatch time from nearest branch. Thank you!',
    ];
    const encoded = encodeURIComponent(textLines.join('\n'));
    window.open(`https://wa.me/919840001515?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* 1. DEALER LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            <button
              onClick={onCloseLogin}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EE6E00] flex items-center justify-center text-2xl mx-auto mb-3 font-bold">
                🔐
              </div>
              <h3 className="text-xl font-bold text-black">Dealer Portal Login</h3>
              <p className="text-xs text-gray-500 mt-1">
                Access wholesale tiered rates, live inventory, and credit terms
              </p>
            </div>

            {loginSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-center">
                <span className="text-2xl block mb-1">✅</span>
                <p className="font-bold text-sm">Login Successful!</p>
                <p className="text-xs text-emerald-600 mt-0.5">Welcome back to Realtech Vision Portal</p>
              </div>
            ) : !otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Registered Mobile Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="flex-1 block w-full rounded-none rounded-r-xl border border-gray-300 px-3 py-2.5 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                >
                  Send OTP via SMS
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Protected by Realtech B2B 2-Factor Authentication
                </p>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Enter 4-Digit OTP sent to +91 {mobileNumber}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    placeholder="1 2 3 4"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="w-full text-center tracking-widest text-lg font-bold rounded-xl border border-gray-300 px-3 py-2.5 text-black focus:outline-none focus:border-[#EE6E00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                >
                  Verify & Enter Portal
                </button>

                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="w-full text-xs text-gray-500 hover:text-black font-semibold text-center"
                >
                  ← Change Mobile Number
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <span className="text-xs text-gray-500">Not an authorized dealer yet? </span>
              <button
                type="button"
                onClick={() => {
                  onCloseLogin();
                  // Open register
                }}
                className="text-xs font-bold text-[#EE6E00] hover:underline"
              >
                Apply for Dealership
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. DEALER REGISTRATION MODAL */}
      {registerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseRegister}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EE6E00] flex items-center justify-center text-2xl mb-3 font-bold">
                🤝
              </div>
              <h3 className="text-xl font-bold text-black">Apply for Dealership</h3>
              <p className="text-xs text-gray-500 mt-1">
                Join 4,000+ CCTV & IT systems integrators receiving wholesale B2B pricing
              </p>
            </div>

            {regSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center">
                <span className="text-3xl block mb-2">🎉</span>
                <h4 className="font-bold text-base text-black">Application Received!</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Our regional distribution manager will contact your business within 2 working hours with your dealer account credentials.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    Company / Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Security Solutions"
                    value={regForm.businessName}
                    onChange={(e) => setRegForm({ ...regForm, businessName: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={regForm.contactPerson}
                      onChange={(e) => setRegForm({ ...regForm, contactPerson: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98400 00000"
                      value={regForm.phone}
                      onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@apexsec.com"
                      value={regForm.email}
                      onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                      City / Region *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chennai, Bangalore..."
                      value={regForm.city}
                      onChange={(e) => setRegForm({ ...regForm, city: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    GSTIN Number (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="33AAAAA0000A1Z5"
                    value={regForm.gst}
                    onChange={(e) => setRegForm({ ...regForm, gst: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-black uppercase font-mono focus:outline-none focus:border-[#EE6E00]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                  >
                    Submit Dealership Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. ABOUT US MODAL */}
      {aboutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseAbout}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EE6E00] flex items-center justify-center text-2xl font-bold">
                🏢
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black">About Realtech Vision</h3>
                <p className="text-xs sm:text-sm text-[#EE6E00] font-semibold">
                  India's Trusted B2B Electronics & Security Distribution Partner
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Realtech Vision</strong> is one of South India's premier B2B distributors for electronic security, CCTV surveillance, networking equipment, biometric access control, and enterprise storage solutions.
              </p>
              <p>
                Headquartered in Chennai's legendary electronics hub at Ritchie Street, we operate dedicated fulfillment hubs across <strong>Delhi NCR, Hyderabad, Bangalore, Surat, and Chennai</strong>, catering to over <strong>4,000+ active system integrators, resellers, and corporate installers</strong> nationwide.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-gray-200 my-4 text-center">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xl font-extrabold text-[#EE6E00]">15+</div>
                  <div className="text-[11px] font-medium text-gray-600 mt-1">Years Active</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xl font-extrabold text-black">4,000+</div>
                  <div className="text-[11px] font-medium text-gray-600 mt-1">Dealers</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xl font-extrabold text-[#EE6E00]">10+</div>
                  <div className="text-[11px] font-medium text-gray-600 mt-1">OEM Brands</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-xl font-extrabold text-black">5</div>
                  <div className="text-[11px] font-medium text-gray-600 mt-1">Regional Hubs</div>
                </div>
              </div>

              <h4 className="font-bold text-black text-base pt-2">Our Pure B2B Policy:</h4>
              <p>
                We do not sell to retail end-consumers or install equipment ourselves. We strictly safeguard dealer project margins, tender allocations, and channel integrity so our partners grow profitably.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onCloseAbout}
                className="px-6 py-2.5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. WHY REALTECH MODAL */}
      {whyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseWhy}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EE6E00] flex items-center justify-center text-2xl font-bold">
                ⭐
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black">Why Realtech Vision?</h3>
                <p className="text-xs sm:text-sm text-[#EE6E00] font-semibold">
                  The Competitive Advantage Built for Dealers & Integrators
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-orange-50/60 border border-orange-100 rounded-2xl">
                <span className="text-2xl mb-1 block">🏆</span>
                <h4 className="font-bold text-black text-sm">15+ Years Trust</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Decades of established leadership in electronics distribution across India's premier markets.
                </p>
              </div>

              <div className="p-4 bg-orange-50/60 border border-orange-100 rounded-2xl">
                <span className="text-2xl mb-1 block">🏢</span>
                <h4 className="font-bold text-black text-sm">100% Pure B2B</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Zero retail competition. We never bypass our dealers or sell directly to end-user clients.
                </p>
              </div>

              <div className="p-4 bg-orange-50/60 border border-orange-100 rounded-2xl">
                <span className="text-2xl mb-1 block">💰</span>
                <h4 className="font-bold text-black text-sm">Tiered Margin Structure</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Volume rebates, carton pricing, and special project discounts directly from manufacturer allocations.
                </p>
              </div>

              <div className="p-4 bg-orange-50/60 border border-orange-100 rounded-2xl">
                <span className="text-2xl mb-1 block">🛠️</span>
                <h4 className="font-bold text-black text-sm">In-House Tech & RMA</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Fast replacement support, firmware updates, and pre-sales engineering for complex tenders.
                </p>
              </div>

              <div className="p-4 bg-orange-50/60 border border-orange-100 rounded-2xl">
                <span className="text-2xl mb-1 block">🚀</span>
                <h4 className="font-bold text-black text-sm">Fast Regional Dispatch</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Same-day dispatch from 5 strategically located branch hubs in Chennai, Delhi, Bangalore, Hyderabad & Surat.
                </p>
              </div>

              <div className="p-4 bg-orange-50/60 border border-orange-100 rounded-2xl">
                <span className="text-2xl mb-1 block">📱</span>
                <h4 className="font-bold text-black text-sm">24/7 Digital Ordering</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Instant stock checks, quote generation, and WhatsApp order confirmation round the clock.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onCloseWhy}
                className="px-6 py-2.5 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. CONTACT US MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseContact}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EE6E00] flex items-center justify-center text-2xl font-bold">
                📞
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black">Contact Realtech Vision</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Dealer helpdesk, branch hubs & direct WhatsApp dispatch desk
                </p>
              </div>
            </div>

            {/* Quick contact banner */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE6E00] block mb-1">
                  Central Dealer Helpline
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-black font-mono">
                  +91 98400 01515
                </span>
                <span className="text-xs text-gray-500 block">Mon - Sat: 10:00 AM – 7:30 PM</span>
              </div>
              <a
                href="https://wa.me/919840001515"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-sm transition-colors"
              >
                <span>💬</span> WhatsApp Direct
              </a>
            </div>

            {/* Branches Directory */}
            <div>
              <h4 className="font-bold text-sm text-black mb-3">Regional Hubs & Branch Network:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BRANCHES.map((b) => (
                  <div key={b.city} className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-black">{b.city}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black text-white">
                        {b.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{b.address}</p>
                    <span className="text-xs text-[#EE6E00] font-semibold">{b.phone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onCloseContact}
                className="px-6 py-2.5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseProduct}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Product Image Placeholder */}
              <div className="w-full sm:w-1/2">
                <ImagePlaceholder
                  label={selectedProduct.imageLabel}
                  aspectRatio="aspect-square"
                  className="w-full"
                />
              </div>

              {/* Product Info */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase text-[#EE6E00] bg-orange-50 px-2 py-0.5 rounded">
                      {selectedProduct.brand}
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {selectedProduct.cat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {selectedProduct.desc}
                  </p>

                  <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Retail MRP:</span>
                      <span className="line-through text-gray-400 font-mono">
                        ₹{selectedProduct.mrp.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-black">Dealer Price (DP):</span>
                      <span className="text-lg font-extrabold text-[#EE6E00] font-mono">
                        ₹{selectedProduct.dp.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-emerald-600 font-semibold pt-1 border-t border-gray-200">
                      <span>Dealer Margin:</span>
                      <span>₹{(selectedProduct.mrp - selectedProduct.dp).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Ready Stock: <strong>{selectedProduct.stock} units</strong></span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onAddToCart(selectedProduct);
                      onCloseProduct();
                    }}
                    className="w-full py-3 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
                  >
                    Add to Dealer Quote
                  </button>
                  <a
                    href={`https://wa.me/919840001515?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(selectedProduct.name)}%20(${selectedProduct.brand})`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>💬</span> Inquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. CART / QUOTE SLIDE-OVER DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              
              {/* Header */}
              <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛍️</span>
                  <div>
                    <h3 className="font-bold text-black text-base">Dealer Quote Cart</h3>
                    <span className="text-xs text-gray-500">{cartItems.length} items added</span>
                  </div>
                </div>
                <button
                  onClick={onCloseCart}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16">
                    <span className="text-4xl block mb-2">🛒</span>
                    <h4 className="font-bold text-black text-sm">Your quote cart is empty</h4>
                    <p className="text-xs text-gray-500 mt-1 mb-4">
                      Browse categories and add items to generate a bulk rate quote
                    </p>
                    <button
                      onClick={onCloseCart}
                      className="px-4 py-2 bg-[#EE6E00] text-white font-bold rounded-xl text-xs"
                    >
                      Browse Catalog
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-gray-50 border border-gray-200 rounded-2xl p-3 flex gap-3 items-center"
                    >
                      <div className="w-14 h-14 flex-shrink-0">
                        <ImagePlaceholder
                          label={item.product.imageLabel}
                          aspectRatio="aspect-square"
                          className="w-full h-full text-[10px]"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs text-black truncate">
                          {item.product.name}
                        </h5>
                        <div className="text-[11px] text-gray-500 font-mono mt-0.5">
                          ₹{item.product.dp.toLocaleString()} each
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateCartQuantity(item.product.id, -1)}
                            className="w-6 h-6 rounded-md bg-white border border-gray-300 hover:bg-gray-100 font-bold text-xs flex items-center justify-center text-black"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-black min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateCartQuantity(item.product.id, 1)}
                            className="w-6 h-6 rounded-md bg-white border border-gray-300 hover:bg-gray-100 font-bold text-xs flex items-center justify-center text-black"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-xs text-black font-mono block">
                          ₹{(item.product.dp * item.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => onRemoveCartItem(item.product.id)}
                          className="text-[11px] text-red-500 hover:underline mt-2 inline-block"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-3">
                  <div className="space-y-1.5 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal (Dealer Price):</span>
                      <span className="font-bold text-black font-mono">
                        ₹{subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated GST (18%):</span>
                      <span className="font-mono">₹{gst.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-black pt-2 border-t border-gray-200">
                      <span>Total Estimated Quote:</span>
                      <span className="text-[#EE6E00] font-mono">
                        ₹{total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppQuote}
                    className="w-full py-3 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>💬</span> Send Quote Request to WhatsApp
                  </button>

                  <div className="flex justify-between items-center pt-1">
                    <button
                      onClick={onClearCart}
                      className="text-xs text-gray-500 hover:text-red-600 font-semibold"
                    >
                      Clear All Items
                    </button>
                    <span className="text-[11px] text-gray-400">Dispatch in 24h</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
