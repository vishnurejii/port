import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#EE6E00] mb-4">SBM Cargo Services LLC</h3>
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner in global logistics solutions, delivering excellence across marine, air, and inland cargo services.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#EE6E00] rounded-full flex items-center justify-center hover:bg-[#D96300] transition-colors duration-300">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#EE6E00] rounded-full flex items-center justify-center hover:bg-[#D96300] transition-colors duration-300">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#EE6E00] rounded-full flex items-center justify-center hover:bg-[#D96300] transition-colors duration-300">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#EE6E00] mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#solutions" className="hover:text-[#EE6E00] transition-colors duration-300">Marine Cargo</a></li>
              <li><a href="#solutions" className="hover:text-[#EE6E00] transition-colors duration-300">Air Freight</a></li>
              <li><a href="#solutions" className="hover:text-[#EE6E00] transition-colors duration-300">Inland Transport</a></li>
              <li><a href="#solutions" className="hover:text-[#EE6E00] transition-colors duration-300">Customs Clearance</a></li>
              <li><a href="#solutions" className="hover:text-[#EE6E00] transition-colors duration-300">Warehousing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#EE6E00] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-[#EE6E00] transition-colors duration-300">Home</a></li>
              <li><a href="#markets" className="hover:text-[#EE6E00] transition-colors duration-300">Markets</a></li>
              <li><a href="#solutions" className="hover:text-[#EE6E00] transition-colors duration-300">Solutions</a></li>
              <li><a href="#contact" className="hover:text-[#EE6E00] transition-colors duration-300">Contact</a></li>
              <li><a href="#markets" className="hover:text-[#EE6E00] transition-colors duration-300">Track Shipment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#EE6E00] mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#EE6E00] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 10.74 8.06 11.43.34.25.8.25 1.14 0C13.89 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 17.88C9.14 17.1 5 13.61 5 11c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.61-4.14 6.1-7 8.88z"/>
                  <circle cx="12" cy="11" r="3" fill="currentColor"/>
                </svg>
                <span className="text-sm">M20, Business Center, Bin Shabib Mall<br/>Al Qusais Industrial Area 1, Dubai</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#EE6E00] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
                </svg>
                <span className="text-sm">info@sbmcargoservices.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#EE6E00] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                </svg>
                <span className="text-sm">+971 56 581 9403</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#EE6E00] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                </svg>
                <span className="text-sm">+971 4 824 8553</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#EE6E00] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.654 1.328l-1.982.982C1.178 2.654.5 3.336.5 4.018s.678 1.364 1.172 1.708l1.982.982c.494.344 1.172.344 1.666 0l1.982-.982c.494-.344 1.172-1.026 1.172-1.708s-.678-1.364-1.172-1.708L5.32 1.328c-.494-.344-1.172-.344-1.666 0z"/>
                </svg>
                <span className="text-sm">www.sbmcargoservices.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm md:mb-0">
              © 2024 SBM Cargo Services LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer