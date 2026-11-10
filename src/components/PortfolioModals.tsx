import React, { useState } from 'react';
import { Product, BRANCHES } from '../data/portalData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PortfolioModalsProps {
  selectedProduct: Product | null;
  onCloseProduct: () => void;
  partnerModalOpen: boolean;
  onClosePartnerModal: () => void;
  contactModalOpen: boolean;
  onCloseContactModal: () => void;
}

export const PortfolioModals: React.FC<PortfolioModalsProps> = ({
  selectedProduct,
  onCloseProduct,
  partnerModalOpen,
  onClosePartnerModal,
  contactModalOpen,
  onCloseContactModal,
}) => {
  const [partnerForm, setPartnerForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    gst: '',
  });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
    setTimeout(() => {
      setPartnerSubmitted(false);
      setPartnerForm({
        businessName: '',
        contactPerson: '',
        phone: '',
        email: '',
        city: '',
        gst: '',
      });
      onClosePartnerModal();
    }, 2000);
  };

  return (
    <>
      {/* 1. PRODUCT DETAIL MODAL */}
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
                  className="w-full shadow-inner"
                  icon={selectedProduct.icon}
                />
              </div>

              {/* Product Info */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase text-[#EE6E00] bg-orange-50 px-2 py-0.5 rounded">
                      {selectedProduct.brand}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {selectedProduct.cat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {selectedProduct.desc}
                  </p>

                  <div className="bg-[#F4F5F7] rounded-2xl p-3.5 mb-4 space-y-1.5 border border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Retail MRP:</span>
                      <span className="line-through text-gray-400 font-mono">
                        ₹{selectedProduct.mrp.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-black">Dealer Price:</span>
                      <span className="text-lg font-extrabold text-[#EE6E00] font-mono">
                        ₹{selectedProduct.dp.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-emerald-600 font-semibold pt-1 border-t border-gray-200">
                      <span>Dealer Margin:</span>
                      <span>₹{(selectedProduct.mrp - selectedProduct.dp).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Ready Warehouse Stock: <strong>{selectedProduct.stock} units</strong></span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919840001515?text=Hello%20Realtech%20Vision,%20I'm%20interested%20in%20dealer%20pricing%20for%20${encodeURIComponent(selectedProduct.name)}%20(${selectedProduct.brand})`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-[#EE6E00] hover:bg-[#D96300] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>💬</span> Inquire via WhatsApp
                  </a>
                  <button
                    onClick={onCloseProduct}
                    className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-xl text-xs transition-colors"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. PARTNERSHIP / DEALERSHIP APPLICATION MODAL */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onClosePartnerModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EE6E00] flex items-center justify-center text-2xl mb-3 font-bold">
                🤝
              </div>
              <h3 className="text-xl font-bold text-black">Partner With Realtech Vision</h3>
              <p className="text-xs text-gray-500 mt-1">
                Join our nationwide network of 4,000+ system integrators receiving authorized OEM rates.
              </p>
            </div>

            {partnerSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center">
                <span className="text-3xl block mb-2">🎉</span>
                <h4 className="font-bold text-base text-black">Application Received!</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Our regional distribution manager will contact your firm within 2 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                    Company / Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Security Solutions"
                    value={partnerForm.businessName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, businessName: e.target.value })}
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
                      value={partnerForm.contactPerson}
                      onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
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
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
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
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-sm text-black focus:outline-none focus:border-[#EE6E00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1">
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chennai, Bangalore..."
                      value={partnerForm.city}
                      onChange={(e) => setPartnerForm({ ...partnerForm, city: e.target.value })}
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
                    value={partnerForm.gst}
                    onChange={(e) => setPartnerForm({ ...partnerForm, gst: e.target.value })}
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

      {/* 3. CONTACT QUICK MODAL */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={onCloseContactModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-base transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#EE6E00] flex items-center justify-center text-2xl mb-3 font-bold">
                📞
              </div>
              <h3 className="text-xl font-bold text-black">Central Dealer Helpline</h3>
              <p className="text-xs text-gray-500 mt-1">
                Reach our centralized distribution and dispatch desk directly
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-center">
                <span className="text-xs text-gray-500 font-mono block">Direct Helpline</span>
                <a
                  href="tel:+919840001515"
                  className="text-2xl font-black text-black font-mono hover:text-[#EE6E00]"
                >
                  +91 98400 01515
                </a>
                <span className="text-xs text-gray-500 block mt-1">
                  Mon – Sat: 10:00 AM – 7:30 PM
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/919840001515"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-1.5"
                >
                  <span>💬</span> WhatsApp
                </a>
                <a
                  href="mailto:sales@realtechvision.in"
                  className="py-2.5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-1.5"
                >
                  ✉️ Email Desk
                </a>
              </div>

              <div className="pt-3 border-t border-gray-100 text-xs text-gray-600">
                <strong>Head Office:</strong> Ritchie Street, Mount Road, Chennai 600002
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
