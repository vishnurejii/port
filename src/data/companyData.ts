import {
  StatMetric,
  SolutionCategory,
  BrandPartner,
  CoreDifferentiator,
  BranchLocation,
  OperationalStep,
  ValuePillar,
  DigitalCapability,
  DealerPillar,
  PortalProduct,
  PortalBrand,
  PortalCategory
} from '../types';

export const COMPANY_INFO = {
  name: 'Realtech Vision',
  tagline: 'Vision For World',
  heroHeadline: "Powering India's Security & Technology Distribution Network",
  heroSubtitle: 'Realtech Vision connects trusted security, surveillance, networking, and IT hardware brands with 4,000+ dealers and businesses across India.',
  headOffice: 'Ritchie Street, Chennai 600002, Tamil Nadu, India',
  /* TODO: Add official registered legal entity name and verified GSTIN */
  legalEntity: 'Realtech Vision',
  gstinPlaceholder: 'GSTIN: [To be confirmed in production]',
  phone: '+91 98400 01515',
  phoneRaw: '919840001515',
  email: 'sales@realtechvision.in',
  hours: 'Monday – Saturday: 10:00 AM – 7:00 PM IST',
  portalUrl: 'https://realtechvision.in/index.html',
  whatsappUrl: 'https://wa.me/919840001515',
  establishedYears: '15+',
  dealerCount: '4,000+',
  teamSize: '130+',
  coverage: 'PAN-India',
};

export const STATS: StatMetric[] = [
  {
    value: 15,
    suffix: '+',
    label: 'Years',
    subLabel: 'Distribution Experience',
    description: 'Over a decade and a half of channel integrity, distribution scaling, and supply chain excellence.'
  },
  {
    value: 4000,
    suffix: '+',
    label: 'Dealers',
    subLabel: 'Trusted Nationwide',
    description: 'An expansive network of authorized dealers, system integrators, and IT channel partners.'
  },
  {
    value: 130,
    suffix: '+',
    label: 'Team Members',
    subLabel: 'PAN-India Professionals',
    description: 'In-house specialists across technical engineering, warranty RMA, warehousing, and channel growth.'
  },
  {
    value: 5,
    suffix: ' Hubs',
    label: 'PAN-India',
    subLabel: 'Distribution Network',
    description: 'Strategic distribution branches in Chennai, Delhi, Hyderabad, Bangalore, and Surat serving all states.'
  }
];

export const BRANCHES: BranchLocation[] = [
  {
    id: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Head Office',
    address: 'Ritchie Street, Electronics Market, Chennai 600002',
    phone: '+91 98400 01515',
    email: 'chennai@realtechvision.in',
    coverageArea: 'Tamil Nadu, Kerala, Pondicherry & Southern Region Central Hub',
    isHeadquarter: true,
    coordinates: { x: 52, y: 78 },
    transitTime: 'Same-Day / 24-Hour Dispatch'
  },
  {
    id: 'delhi',
    city: 'Delhi',
    state: 'Delhi NCR',
    type: 'Regional Hub',
    /* TODO: Replace placeholder address with verified street address, building & PIN code */
    address: 'North Regional Tech Distribution Hub, New Delhi',
    /* TODO: Replace shared Chennai phone with dedicated local Delhi branch contact */
    phone: '+91 98400 01515',
    email: 'delhi@realtechvision.in',
    coverageArea: 'Delhi NCR, Punjab, Haryana, Rajasthan & Uttar Pradesh',
    coordinates: { x: 44, y: 28 },
    transitTime: '24–48h Express Dispatch'
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Regional Hub',
    /* TODO: Replace placeholder address with verified street address, building & PIN code */
    address: 'Regional Distribution Center, Hyderabad',
    /* TODO: Replace shared Chennai phone with dedicated local Hyderabad branch contact */
    phone: '+91 98400 01515',
    email: 'hyderabad@realtechvision.in',
    coverageArea: 'Telangana & Andhra Pradesh Channel Network',
    coordinates: { x: 50, y: 62 },
    transitTime: '24–48h Regional Delivery'
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Regional Hub',
    /* TODO: Replace placeholder address with verified street address, building & PIN code */
    address: 'Tech Corridor Distribution Depot, Bangalore',
    /* TODO: Replace shared Chennai phone with dedicated local Bangalore branch contact */
    phone: '+91 98400 01515',
    email: 'bangalore@realtechvision.in',
    coverageArea: 'Karnataka & South-Western Commercial Zones',
    coordinates: { x: 47, y: 76 },
    transitTime: 'Same-Day / 24–48h Delivery'
  },
  {
    id: 'surat',
    city: 'Surat',
    state: 'Gujarat',
    type: 'Regional Hub',
    /* TODO: Replace placeholder address with verified street address, building & PIN code */
    address: 'Western Regional Logistics Center, Surat',
    /* TODO: Replace shared Chennai phone with dedicated local Surat branch contact */
    phone: '+91 98400 01515',
    email: 'surat@realtechvision.in',
    coverageArea: 'Gujarat, Maharashtra & Western Industrial Belt',
    coordinates: { x: 34, y: 52 },
    transitTime: '24–48h Express Transit'
  }
];

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: 'cctv-surveillance',
    title: 'CCTV & Video Surveillance',
    tagline: 'High-Definition Optics, AI Analytics & Enterprise Recording',
    description: 'Comprehensive video security hardware engineered for retail, commercial, industrial, and smart infrastructure deployments.',
    iconName: 'Camera',
    badge: 'Core Distribution',
    featuredItems: [
      { name: '4MP & 8MP IR Dome Cameras', specs: 'H.265+, 30m Smart IR, IP67 weatherproof', application: 'Corporate offices, banks, retail spaces' },
      { name: '4K Ultra-HD Bullet Cameras', specs: 'AI human/vehicle detection, 50m long-range IR', application: 'Perimeter defense, logistics yards, highways' },
      { name: 'ColorVu 24/7 Full Color Cameras', specs: 'F1.0 super-aperture, warm supplemental lighting', application: 'Public areas, parking facilities, residential complexes' },
      { name: 'Enterprise 8CH / 16CH / 32CH 4K NVRs', specs: 'Up to 4 HDDs, 4K HDMI output, high decoding bandwidth', application: 'Centralized multi-site surveillance control' },
    ],
    keyCapabilities: [
      'Genuine factory-sealed inventory',
      'Full manufacturer warranty coverage',
      'H.265+ high efficiency bandwidth optimization',
      'NDAA & enterprise compliance options'
    ]
  },
  {
    id: 'networking',
    title: 'Networking & PoE Infrastructure',
    tagline: 'High-Bandwidth Switching, Routing & Structured Connectivity',
    description: 'Robust networking hardware engineered specifically for low latency, heavy continuous video throughput, and uninterruptible data streams.',
    iconName: 'Network',
    badge: 'Enterprise Infrastructure',
    featuredItems: [
      { name: '8-Port & 16-Port PoE+ Switches', specs: '10/100/1000M, 2 Gigabit Uplink, 120W–250W power budget', application: 'Direct powering of IP cameras & access terminals' },
      { name: 'Gigabit Enterprise Routers', specs: 'High-throughput NAT, multi-WAN load balancing, hardware QoS', application: 'Commercial networks, branch interconnections' },
      { name: 'Pure Copper CAT6 LAN Cables (305m)', specs: '23 AWG 100% solid electrolytic copper, tested to 550MHz', application: 'High-speed structured cabling backbones' },
      { name: 'PoE Extenders & Industrial Transceivers', specs: 'Long-reach 250m transmission mode, surge protection', application: 'Campus installations, factory perimeters' }
    ],
    keyCapabilities: [
      'Intelligent power prioritization & auto-reboot PoE',
      '6kV surge protection on all RJ45 ports',
      'Tested compatibility with all major CCTV brands',
      'Wholesale roll availability in bulk reels'
    ]
  },
  {
    id: 'storage-it',
    title: 'Storage & IT Hardware',
    tagline: '24/7 Surveillance Drives & Enterprise IT Peripherals',
    description: 'Purpose-built storage drives calibrated for write-intensive, continuous multi-stream video surveillance without dropped frames.',
    iconName: 'HardDrive',
    badge: 'Continuous 24/7 Duty',
    featuredItems: [
      { name: '4TB Surveillance Hard Drives', specs: '5400/7200 RPM, 64MB/128MB cache, 24/7 surveillance rated', application: 'Enterprise NVRs, NAS storage vaults' },
      { name: '2TB High-Durability Surveillance HDDs', specs: 'AllFrame / streaming firmware, low power draw', application: 'Standard commercial DVRs & NVR installations' },
      { name: 'Enterprise Computing Accessories', specs: 'Display cables, HDMI extenders, KVM switches', application: 'Surveillance monitoring control rooms' },
      { name: 'Server & Rack Components', specs: 'Patch panels, cable managers, server chassis accessories', application: 'Data centers & IT rack installations' }
    ],
    keyCapabilities: [
      'Engineered for 180TB/year workload ratings',
      'Tarnish-resistant components for harsh environments',
      'Original manufacturer serial verification',
      'Hassle-free direct RMA turnaround support'
    ]
  },
  {
    id: 'access-control',
    title: 'Security & Access Control',
    tagline: 'Biometric Readers, RFID Terminals & Smart Building Control',
    description: 'Touchless and biometric authentication hardware providing unified physical security for commercial and institutional facilities.',
    iconName: 'ShieldCheck',
    badge: 'Premises Security',
    featuredItems: [
      { name: 'Biometric Fingerprint & RFID Kits', specs: 'TCP/IP, USB, 1,000+ templates, fast <0.5s recognition', application: 'Offices, manufacturing plants, laboratories' },
      { name: 'Standalone RFID Card Access Units', specs: 'Wiegand protocol, EM/Mifare 13.56MHz support', application: 'Server rooms, secured perimeter doors' },
      { name: 'Smart Building & Automation Hubs', specs: 'Zigbee, Wi-Fi, sensor integration, cloud telemetry', application: 'Modern corporate complexes, smart buildings' },
      { name: 'Electromagnetic Locks & Power Brackets', specs: '600lbs / 1200lbs holding force, fail-safe operation', application: 'Glass doors, wooden fire exits, heavy gates' }
    ],
    keyCapabilities: [
      'Seamless integration with standard security controllers',
      'Anti-passback & multi-factor verification modes',
      'Tamper-resistant alloy enclosures',
      'Full technical provisioning assistance'
    ]
  },
  {
    id: 'power-protection',
    title: 'Power Supplies & Enclosures',
    tagline: 'Stabilized SMPS Units, CCTV Power Hubs & Protection Systems',
    description: 'Clean, regulated electrical distribution units safeguarding sensitive camera sensors and network hardware against power fluctuations.',
    iconName: 'Zap',
    badge: 'Clean Power',
    featuredItems: [
      { name: '12V 5A & 10A SMPS CCTV Power Supplies', specs: 'Individual fuse protection, over-voltage/short-circuit cutoff', application: 'Centralized 4-channel / 8-channel CCTV powering' },
      { name: '16-Channel Central Power Cabinets', specs: 'Key-lock metal enclosure, LED channel status indicators', application: 'Commercial installations, multi-camera hubs' },
      { name: 'PoE Injectors & Splitters', specs: 'IEEE 802.3af/at compliant, 48V to 12V conversion', application: 'Non-PoE device connectivity over LAN' },
      { name: 'Wall-Mount Equipment Racks', specs: 'Heavy-gauge cold-rolled steel, ventilation louvers', application: 'Clean termination of DVR/NVR & networking' }
    ],
    keyCapabilities: [
      'Auto-recovery short-circuit protection',
      'High thermal efficiency aluminum casing',
      'Wide input voltage range (100V–280V AC)',
      'Built for Indian grid condition resilience'
    ]
  }
];

export const BRANDS: BrandPartner[] = [
  {
    name: 'Hikvision',
    category: 'CCTV & Surveillance',
    specialty: 'Global Video Surveillance & IoT Security Leader',
    badge: 'Industry Leader',
    description: 'World-renowned security hardware including IP cameras, ColorVu optics, deep learning analytics, and NVRs.'
  },
  {
    name: 'Toshiba',
    category: 'Surveillance Storage',
    specialty: '24/7 Surveillance & Enterprise Hard Drives',
    badge: 'Storage Partner',
    description: 'High-reliability surveillance HDDs engineered specifically for multi-camera video recording streams.'
  },
  {
    name: 'Trueview',
    category: 'CCTV & Smart Cameras',
    specialty: 'Next-Gen IP Surveillance, 4G Cameras & Displays',
    badge: 'Popular Choice',
    description: 'Broad portfolio of high-definition domestic and commercial CCTV cameras, interactive displays, and DVRs.'
  },
  {
    name: 'Maxxion',
    category: 'Access Control',
    specialty: 'Biometrics, RFID Access Systems & Hardware',
    badge: 'Premises Security',
    description: 'Reliable time-attendance terminals, biometric readers, magnetic locks, and security controller kits.'
  },
  {
    name: 'Fyber',
    category: 'Networking & Cabling',
    specialty: 'PoE Switches, Routers & Pure Copper LAN Cables',
    badge: 'Network Backbone',
    description: 'High-performance PoE switches, fiber transceivers, and certified Cat6 pure copper network cables.'
  },
  {
    name: 'Prama',
    category: 'Security Systems',
    specialty: 'Indigenous Security, IP Cameras & Recorders',
    badge: 'Made for India',
    description: 'High-reliability IP and HD surveillance hardware designed specifically for Indian security requirements.'
  },
  {
    name: 'Qubo',
    category: 'Smart Devices',
    specialty: 'Smart Home Security, IoT Devices & Automation',
    badge: 'Smart Living',
    description: 'Connected security products, AI Wi-Fi cameras, and smart automation peripherals for modern installations.'
  },
  {
    name: 'Yadon',
    category: 'Power Solutions',
    specialty: 'Regulated CCTV SMPS Power Supplies & Enclosures',
    badge: 'Power Integrity',
    description: 'Stable power distribution units, multi-channel SMPS power cabinets, and electrical accessories.'
  },
  {
    name: 'Elco',
    category: 'Electronics & Hardware',
    specialty: 'Quality Surveillance Accessories & Connectors',
    badge: 'Connectivity',
    description: 'Precision BNC connectors, DC jacks, audio micro-devices, and critical installation accessories.'
  },
  {
    name: 'Trionet',
    category: 'Network Infrastructure',
    specialty: 'High-Speed Enterprise Routers & Network Switches',
    badge: 'Data Highway',
    description: 'Managed and unmanaged gigabit network routers, enterprise switches, and rackmount infrastructure.'
  }
];

export const DIFFERENTIATORS: CoreDifferentiator[] = [
  {
    id: 'pure-distribution',
    title: '100% Pure Distribution Model',
    subtitle: 'Zero Channel Conflict',
    description: 'We never compete with our dealers. We do not engage in retail sales or project bidding, fiercely protecting dealer margins and client relationships.',
    iconName: 'ShieldAlert',
    highlightTag: 'Dealer Protection'
  },
  {
    id: 'established-heritage',
    title: '15+ Years Distribution Legacy',
    subtitle: 'Proven Industry Credibility',
    description: 'A decade and a half of uncompromised distribution excellence, industry relationships, and consistent nationwide supply stability.',
    iconName: 'Award',
    highlightTag: '15+ Years'
  },
  {
    id: 'nationwide-scale',
    title: '4,000+ Trusted Channel Dealers',
    subtitle: 'PAN-India Footprint',
    description: 'India’s most engaged network of CCTV installers, system integrators, IT contractors, and electronics dealers.',
    iconName: 'Users',
    highlightTag: '4,000+ Strong'
  },
  {
    id: 'genuine-stock',
    title: '100% Genuine & Sealed Stock',
    subtitle: 'Direct Manufacturer Origin',
    description: 'Every camera, switch, and hard drive is sourced directly from certified brand manufacturing channels with verifiable serial tracking.',
    iconName: 'CheckCircle2',
    highlightTag: 'Brand Verified'
  },
  {
    id: 'inhouse-rma',
    title: 'In-House Dedicated RMA Support',
    subtitle: 'Hassle-Free Warranty Claims',
    description: 'Our in-house RMA and service specialists handle repairs, brand replacements, and warranties with rapid, transparent resolution.',
    iconName: 'RefreshCw',
    highlightTag: 'In-House RMA'
  },
  {
    id: 'tech-support',
    title: 'Expert In-House Technical Desk',
    subtitle: 'Engineering Assistance',
    description: 'Certified engineers ready to assist dealers with system design, device configuration, firmware updates, and troubleshooting.',
    iconName: 'Headphones',
    highlightTag: 'Tech Helpdesk'
  },
  {
    id: 'strategic-branches',
    title: 'Multi-State Strategic Hubs',
    subtitle: 'Chennai, Delhi, Hyderabad, Bangalore, Surat',
    description: 'Regional stock depots positioned in key economic corridors to guarantee minimal transit latency and fast dispatches.',
    iconName: 'MapPin',
    highlightTag: '5 Key Hubs'
  },
  {
    id: 'margin-growth',
    title: 'Dealer Margin & Scheme Focus',
    subtitle: 'Growth Enablement',
    description: 'Competitive tier pricing, volume schemes, promotional target rewards, and margin-protected brand portfolios.',
    iconName: 'TrendingUp',
    highlightTag: 'Higher ROI'
  },
  {
    id: 'high-readiness',
    title: 'Comprehensive Stock Availability',
    subtitle: 'Ready-to-Ship Inventory',
    description: 'Deep inventory buffers of fast-moving security and networking lines to insulate partners against supply shortages.',
    iconName: 'PackageCheck',
    highlightTag: 'Ready Inventory'
  },
  {
    id: 'digital-edge',
    title: 'Realconnect Digital Platform',
    subtitle: 'Next-Gen Distribution Portal',
    description: 'A 24/7 web platform enabling dealers to discover inventory, track orders, review ledgers, and manage schemes in real time.',
    iconName: 'Cpu',
    highlightTag: 'Digital Portal'
  }
];

export const TIMELINE_MILESTONES = [
  {
    phase: 'Foundation',
    title: 'Establishing Channel Foundations',
    description: 'Commenced distribution operations in Chennai’s Ritchie Street electronics hub with a strict commitment to dealer-first channel ethics.'
  },
  {
    phase: 'Regional Expansion',
    title: 'Multi-State Hub Deployment',
    description: 'Expanded physical branch infrastructure into Hyderabad, Bangalore, Surat, and Delhi to establish localized delivery pipelines.'
  },
  {
    phase: 'Nationwide Network',
    title: 'Scaling 4,000+ Dealer Network',
    description: 'Grew into a recognized PAN-India distribution force with 130+ dedicated team members and thousands of active integrators.'
  },
  {
    phase: 'Technology-Driven Distribution',
    title: 'Realconnect Digital Infrastructure',
    description: 'Launched real-time digital ordering, automated ledger transparency, and rewards programs to empower dealers digitally.'
  },
  {
    phase: 'Future Growth',
    title: 'Next-Gen AI & Enterprise Solutions',
    description: 'Pioneering next-generation AI surveillance, fiber-optic networking, and integrated smart security hardware across India.'
  }
];

export const OPERATIONS_PIPELINE: OperationalStep[] = [
  {
    step: '01',
    title: 'Authorized Brand Sourcing',
    summary: 'Direct factory procurement with verified serial tracking',
    details: 'We partner directly with leading security and IT manufacturers to ensure authentic, brand-warranty-backed stock enters our pipeline.',
    iconName: 'Factory'
  },
  {
    step: '02',
    title: 'Quality & Inward Verification',
    summary: 'Strict multi-point serial scanning & package inspection',
    details: 'Every consignment undergoes inward quality checks, physical seal verification, and digital barcode entry into our enterprise inventory system.',
    iconName: 'Scan'
  },
  {
    step: '03',
    title: 'Regional Hub Staging',
    summary: 'Strategic stock allocation across Chennai, Delhi, Hyderabad, Bangalore & Surat',
    details: 'Buffer inventories are distributed across our 5 strategic hubs to ensure geographic proximity to key dealer clusters.',
    iconName: 'Warehouse'
  },
  {
    step: '04',
    title: 'Fast Dispatch & Logistics',
    summary: 'Same-day packaging & express transit partnerships',
    details: 'High-speed dispatch protocols ensure orders placed by dealers are processed rapidly with live transit tracking.',
    iconName: 'Truck'
  },
  {
    step: '05',
    title: 'Channel Partner Delivery & Support',
    summary: 'Safely handed over with ongoing technical & RMA backing',
    details: 'Dealers receive authentic stock backed by our in-house RMA desk, warranty facilitation, and engineering configuration support.',
    iconName: 'ShieldCheck'
  }
];

export const DEALER_PILLARS: DealerPillar[] = [
  {
    title: 'Protected Margins & Pure Channel',
    summary: 'Guaranteed channel loyalty where we never sell direct to end-users.',
    perks: ['Zero retail competition', 'Tiered wholesale pricing', 'Protected project margins'],
    iconName: 'Lock'
  },
  {
    title: 'In-House Technical & RMA Desk',
    summary: 'Dedicated engineering and warranty claim support right by your side.',
    perks: ['Rapid warranty resolution', 'Pre-sales configuration advice', 'Firmware & compatibility help'],
    iconName: 'Wrench'
  },
  {
    title: 'Realconnect Digital Power',
    summary: 'Comprehensive 24/7 web portal for seamless channel operations.',
    perks: ['Live stock checks', 'Real-time order tracking', 'Digital ledger & statements'],
    iconName: 'Smartphone'
  },
  {
    title: 'Schemes, Rewards & Growth',
    summary: 'Incentive programs and schemes that reward partnership volume.',
    perks: ['Volume achievement slabs', 'Seasonal reward points', 'Exclusive brand promotions'],
    iconName: 'Gift'
  }
];

export const DIGITAL_CAPABILITIES: DigitalCapability[] = [
  {
    title: 'Real-Time Stock Availability',
    description: 'Instant visibility of live inventory levels across branch hubs so you can quote projects with total confidence.',
    benefit: 'Zero guesswork on stock timelines',
    iconName: 'Eye'
  },
  {
    title: '24/7 Digital Order Placement',
    description: 'Dealers can place orders, reserve inventory, and schedule dispatches at any time without waiting for office hours.',
    benefit: 'Accelerated turn-around speed',
    iconName: 'ShoppingCart'
  },
  {
    title: 'Transparent Financial Ledgers',
    description: 'Direct online access to invoices, payment histories, credit statements, and tax documentation.',
    benefit: 'Hassle-free reconciliation',
    iconName: 'FileText'
  },
  {
    title: 'Scheme Tracking & Rewards',
    description: 'Live dashboards tracking quarterly volume targets, eligible reward points, and claim redemptions.',
    benefit: 'Clear incentive transparency',
    iconName: 'Award'
  },
  {
    title: 'Live Shipment Tracking',
    description: 'Real-time dispatch status and courier tracking numbers updated immediately after handover.',
    benefit: 'Precise customer installation scheduling',
    iconName: 'Truck'
  },
  {
    title: 'Fast Technical Search',
    description: 'Filter thousands of SKUs by specification, brand, form factor, and resolution in seconds.',
    benefit: 'Instant quote building',
    iconName: 'Search'
  }
];

export const COMPANY_VALUES: ValuePillar[] = [
  {
    title: 'Trust & Authenticity',
    subtitle: 'Zero Compromise on Genuine Products',
    description: 'We believe genuine technology builds safe businesses. We only stock authentic products backed by verifiable manufacturer warranties.',
    iconName: 'Shield'
  },
  {
    title: 'Dealer-First Loyalty',
    subtitle: 'A Pure Distribution Promise',
    description: 'Our dealers are our only customers. We never bypass, undercut, or compete with our channel partners under any circumstance.',
    iconName: 'Handshake'
  },
  {
    title: 'Reliability & Speed',
    subtitle: 'Dependable Supply Across India',
    description: 'Security projects run on tight deadlines. Our multi-hub network guarantees consistent inventory readiness and swift dispatches.',
    iconName: 'Zap'
  },
  {
    title: 'Technical Competence',
    subtitle: 'More than Box Moving',
    description: 'We back our products with in-house technical knowledge, configuration guidance, and reliable post-sale RMA resolution.',
    iconName: 'Cpu'
  },
  {
    title: 'Long-Term Partnership',
    subtitle: 'Growing Together',
    description: 'Fifteen years of sustained relationships prove that our business succeeds solely when our dealer ecosystem prospers.',
    iconName: 'TrendingUp'
  }
];

export const INDIAN_STATES_AND_CITIES: Record<string, string[]> = {
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukudi'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam'],
  'Delhi NCR': ['New Delhi', 'Gurugram', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida'],
  'Karnataka': ['Bangalore', 'Mysore', 'Hubli-Dharwad', 'Mangalore', 'Belgaum', 'Davangere', 'Bellary'],
  'Gujarat': ['Surat', 'Ahmedabad', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Vapi'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur'],
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati'],
  'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur', 'Palakkad'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Bareilly', 'Aligarh'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara'],
  'Punjab & Haryana': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Chandigarh', 'Faridabad', 'Panipat', 'Ambala'],
  'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar'],
  'Bihar & Jharkhand': ['Patna', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Gaya', 'Bhagalpur', 'Muzaffarpur']
};

export const PORTAL_PRODUCTS: PortalProduct[] = [
  { id: 'p1', name: '4MP IR Dome Camera', brand: 'Trueview', cat: 'IP Cameras', mrp: 5500, dp: 4200, icon: '📷', badge: 'New Launch', stock: 248, desc: 'H.265+, 30m IR, IP67 weatherproof housing' },
  { id: 'p2', name: '8MP IP Bullet Camera', brand: 'Trueview', cat: 'IP Cameras', mrp: 7200, dp: 5800, icon: '📸', badge: 'Top Seller', stock: 124, desc: '4K Ultra-HD, AI detection, 50m long-range IR' },
  { id: 'p3', name: '2MP HD Dome Camera', brand: 'Trueview', cat: 'IP Cameras', mrp: 2800, dp: 2100, icon: '🎥', badge: '', stock: 320, desc: 'H.265 compression, 20m IR, IP66 rated' },
  { id: 'p4', name: 'PTZ Camera 4MP', brand: 'Hikvision', cat: 'IP Cameras', mrp: 19000, dp: 14500, icon: '🔭', badge: 'Enterprise', stock: 34, desc: '25x optical zoom, 100m IR night vision' },
  { id: 'p5', name: '5MP ColorVu Camera', brand: 'Hikvision', cat: 'IP Cameras', mrp: 9500, dp: 7200, icon: '🌈', badge: 'Hot', stock: 88, desc: 'Full vivid color 24/7 day & night optics' },
  { id: 'p6', name: '8CH NVR 4K Ultra', brand: 'Hikvision', cat: 'NVR / DVR', mrp: 16000, dp: 12500, icon: '📡', badge: 'Hot', stock: 84, desc: '8CH, 4K HDMI decoding, 2 HDD bays, H.265+' },
  { id: 'p7', name: '16CH NVR H.265+', brand: 'Hikvision', cat: 'NVR / DVR', mrp: 24000, dp: 18500, icon: '🖥️', badge: 'Enterprise', stock: 42, desc: '16CH, 4K decoders, 4 HDD bays up to 40TB' },
  { id: 'p8', name: '8CH DVR AHD 5MP', brand: 'Prama', cat: 'NVR / DVR', mrp: 8500, dp: 6800, icon: '📺', badge: '', stock: 96, desc: '5MP AHD, H.265+, 1 HDD support' },
  { id: 'p9', name: 'PoE Switch 8 Port', brand: 'Fyber', cat: 'Networking', mrp: 4800, dp: 3800, icon: '🔌', badge: 'Top Seller', stock: 156, desc: '8 PoE + 2 Uplink, 120W total budget' },
  { id: 'p10', name: 'PoE Switch 16 Port', brand: 'Fyber', cat: 'Networking', mrp: 9000, dp: 7200, icon: '🌐', badge: '', stock: 68, desc: '16 PoE + 2 Uplink, 240W high budget' },
  { id: 'p11', name: 'Gigabit Router 4 Port', brand: 'Trionet', cat: 'Networking', mrp: 3200, dp: 2400, icon: '📶', badge: '', stock: 212, desc: '4 LAN, 1 WAN, multi-stream QoS' },
  { id: 'p12', name: '4TB Surveillance HDD', brand: 'Toshiba', cat: 'Storage', mrp: 8500, dp: 6800, icon: '💾', badge: 'Hot', stock: 188, desc: '5400 RPM, 24×7 continuous video write' },
  { id: 'p13', name: '2TB Purple HDD', brand: 'Toshiba', cat: 'Storage', mrp: 5000, dp: 3900, icon: '🗄️', badge: '', stock: 244, desc: '5400 RPM, 24×7 surveillance duty' },
  { id: 'p14', name: 'Access Control Kit', brand: 'Maxxion', cat: 'Access Control', mrp: 11500, dp: 8900, icon: '🔐', badge: '', stock: 52, desc: 'RFID, fingerprint, 500 user directory' },
  { id: 'p15', name: 'Fingerprint Biometric', brand: 'Maxxion', cat: 'Access Control', mrp: 5500, dp: 4200, icon: '👆', badge: 'New Launch', stock: 76, desc: '1000 fingerprints, TCP/IP network sync' },
  { id: 'p16', name: '12V 5A SMPS Power', brand: 'Yadon', cat: 'Power Supply', mrp: 900, dp: 680, icon: '🔋', badge: 'Wholesale', stock: 480, desc: '12V DC, 5A auto-recovery fuse' },
  { id: 'p17', name: 'CAT6 LAN Cable 305m', brand: 'Fyber', cat: 'Accessories', mrp: 5500, dp: 4200, icon: '📻', badge: '', stock: 98, desc: '305m pull box, 100% pure electrolytic copper' },
  { id: 'p18', name: 'Smart Home Hub', brand: 'Qubo', cat: 'Accessories', mrp: 4200, dp: 3200, icon: '🏠', badge: 'New Launch', stock: 62, desc: 'Wi-Fi, Zigbee 3.0 sensor integration' },
];

export const PORTAL_BRANDS: PortalBrand[] = [
  { name: 'MAXXION', sub: 'Access Control & Biometrics', emoji: '🔒' },
  { name: 'TRUEVIEW', sub: 'CCTV & Smart Surveillance', emoji: '📷' },
  { name: 'CP-PLUS', sub: 'Security & Surveillance Decoders', emoji: '📹' },
  { name: 'PRAMA', sub: 'IP Cameras & Decoders', emoji: '🎥' },
  { name: 'FYBER', sub: 'PoE & Network Infrastructure', emoji: '📡' },
  { name: 'HIKVISION', sub: 'Enterprise Video Surveillance', emoji: '🛡️' },
  { name: 'ACCESSORIES', sub: 'Installation & Cabling Hardware', emoji: '🔧' },
  { name: 'QUBO', sub: 'Smart Home & AI Automation', emoji: '🏠' },
  { name: 'TCL', sub: 'Commercial Security Displays', emoji: '📺' },
  { name: 'TOSHIBA', sub: 'Surveillance Storage HDDs', emoji: '💾' },
  { name: 'WD', sub: 'Purple Surveillance Storage', emoji: '🗄️' },
  { name: 'SEAGATE', sub: 'SkyHawk Surveillance Drives', emoji: '💿' },
  { name: 'KRYSTAA', sub: 'SMPS & Power Solutions', emoji: '⚡' },
  { name: 'ESSL', sub: 'Biometrics & Access Control', emoji: '👆' },
  { name: 'YADON', sub: 'Power Supply Systems', emoji: '🔋' },
  { name: 'DLINK', sub: 'Enterprise Networking & PoE', emoji: '🌐' },
  { name: 'ELCO', sub: 'Cables & Electronic Accessories', emoji: '💡' },
  { name: 'FOLLA', sub: 'Server Racks & Cabinets', emoji: '📦' },
  { name: 'LEMORELE', sub: 'Video Transmission & Extenders', emoji: '🖥️' },
  { name: 'IMOU', sub: 'Smart Consumer Security', emoji: '📷' },
  { name: 'TRIONET', sub: 'Network Switches & Routers', emoji: '🌐' },
  { name: 'SRB', sub: 'Surveillance Cabling & Wires', emoji: '🔌' },
  { name: 'BEETEL', sub: 'Telecom & Enterprise Hardware', emoji: '📞' },
  { name: 'MATRIX', sub: 'Telecom & Security Systems', emoji: '🏢' },
  { name: 'HIFOCUS', sub: 'CCTV & Video Recorders', emoji: '📹' },
  { name: 'PANASONIC', sub: 'Enterprise Security Optics', emoji: '👁️' },
  { name: 'TP-LINK', sub: 'Omada Networking & VIGI', emoji: '📡' }
];

export const COMING_SOON_BRANDS: PortalBrand[] = [
  { name: 'IMOU', sub: 'Smart Consumer Security', emoji: '📷' },
  { name: 'TRIONET', sub: 'Network Switches & Routers', emoji: '🌐' },
  { name: 'SRB', sub: 'Surveillance Cabling & Wires', emoji: '🔌' },
  { name: 'BEETEL', sub: 'Telecom & Enterprise Hardware', emoji: '📞' },
  { name: 'MATRIX', sub: 'Telecom & Security Systems', emoji: '🏢' },
  { name: 'HIFOCUS', sub: 'CCTV & Video Recorders', emoji: '📹' },
  { name: 'PANASONIC', sub: 'Enterprise Security Optics', emoji: '👁️' },
  { name: 'TP-LINK', sub: 'Omada Networking & VIGI', emoji: '📡' }
];

export const PORTAL_CATEGORIES: PortalCategory[] = [
  { name: 'IP Cameras', emoji: '📷', count: 5 },
  { name: 'NVR / DVR', emoji: '🖥️', count: 3 },
  { name: 'Networking', emoji: '🔌', count: 3 },
  { name: 'Storage', emoji: '💾', count: 2 },
  { name: 'Access Control', emoji: '🔐', count: 2 },
  { name: 'Power Supply', emoji: '🔋', count: 1 },
  { name: 'Accessories', emoji: '🔧', count: 2 }
];
