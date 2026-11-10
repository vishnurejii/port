import React from 'react';
import {
  Camera,
  Network,
  HardDrive,
  ShieldCheck,
  MapPin,
  Laptop,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuickLinksStripProps {
  onOpenPartnerModal: () => void;
}

export const QuickLinksStrip: React.FC<QuickLinksStripProps> = ({ onOpenPartnerModal }) => {
  const quickLinks = [
    {
      id: 'cctv',
      title: 'Explore CCTV & Optics',
      linkText: 'Explore CCTV',
      href: '#solutions',
      icon: Camera,
      iconBg: 'bg-[#F0F1F3] text-[#EE6E00]'
    },
    {
      id: 'networking',
      title: 'Enterprise PoE & Switches',
      linkText: 'PoE & Routers',
      href: '#solutions',
      icon: Network,
      iconBg: 'bg-[#e8f7ff] text-[#00a4ef]'
    },
    {
      id: 'storage',
      title: 'Surveillance HDDs (2TB-10TB)',
      linkText: 'Storage Drives',
      href: '#solutions',
      icon: HardDrive,
      iconBg: 'bg-[#E3EEE6] text-[#7fba00]'
    },
    {
      id: 'access',
      title: 'Biometrics & Access Control',
      linkText: 'Smart Access',
      href: '#solutions',
      icon: ShieldCheck,
      iconBg: 'bg-[#F0F1F3] text-[#ffb900]'
    },
    {
      id: 'hubs',
      title: 'PAN-India Regional Hubs',
      linkText: 'Locate 5 Hubs',
      href: '#network',
      icon: MapPin,
      iconBg: 'bg-[#fdf2f2] text-[#f25022]'
    },
    {
      id: 'portal',
      title: 'Realconnect™ Partner Portal',
      linkText: 'Partner Sign In',
      onClick: onOpenPartnerModal,
      icon: Laptop,
      iconBg: 'bg-[#F0F1F3] text-[#EE6E00]'
    }
  ];

  return (
    <div className="bg-white border-b border-[#E5E8EC] py-10 sm:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Microsoft 6-Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            if (item.onClick) {
              return (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className="flex flex-col items-center text-center group focus:outline-none w-full max-w-[180px]"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 shadow-sm ${item.iconBg}`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[13px] sm:text-sm font-semibold text-[#EE6E00] group-hover:underline text-center">
                    {item.linkText}
                  </span>
                </button>
              );
            }

            return (
              <a
                key={item.id}
                href={item.href}
                className="flex flex-col items-center text-center group focus:outline-none w-full max-w-[180px]"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 shadow-sm ${item.iconBg}`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-[13px] sm:text-sm font-semibold text-[#EE6E00] group-hover:underline text-center">
                  {item.linkText}
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default QuickLinksStrip;
