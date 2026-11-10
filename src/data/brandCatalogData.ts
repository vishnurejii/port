export interface BrandInfo {
  id: string;
  name: string;
  slug: string;
  sub: string;
  category: string;
  description: string;
  highlight: string;
  emoji: string;
  logo?: string;
  categories: string[];
  partnerYears?: string;
  warranty?: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  brand: string;
  cat: string;
  mrp: number;
  dp: number;
  icon: string;
  badge?: 'new' | 'hot' | 'top' | 'bulk' | '';
  stock: number;
  desc: string;
  img?: string;
}

export const AUTHORISED_BRANDS: BrandInfo[] = [
  {
    id: 'prama',
    name: 'Prama',
    slug: 'PRAMA',
    sub: 'Made for India Video Surveillance & Security Hardware',
    category: 'Video Surveillance',
    highlight: 'Made for India Hardware',
    emoji: '🎥',
    categories: ['IP Camera', 'NVR', 'HD DVR', 'HD Camera', 'CAT 6 Cables'],
    partnerYears: '15+',
    warranty: '2 Years Manufacturer Warranty',
    description: 'Prama India is the pioneer in indigenous manufacturing of video surveillance equipment, tailored specifically for Indian power and environmental conditions.'
  },
  {
    id: 'cp-plus',
    name: 'CP Plus',
    slug: 'CP-PLUS',
    sub: 'National Surveillance Leader & Intelligent Security Ecosystem',
    category: 'Security Solutions',
    highlight: 'National Surveillance Leader',
    emoji: '📹',
    categories: ['IP Camera', 'PoE Switch', 'HD Camera', 'NVR', 'CAT 6 Cables', 'HD DVR', 'Wi-Fi Camera', '4G Camera', 'Memory Card', 'CCTV Cables'],
    partnerYears: '15+',
    warranty: '2 Years Brand Warranty',
    description: 'CP PLUS is India’s foremost security and surveillance hardware brand, offering industry-standard analog and IP surveillance solutions.'
  },
  {
    id: 'hikvision',
    name: 'Hikvision',
    slug: 'HIKVISION',
    sub: 'Global Video Surveillance #1, ColorVu & AI Vision Solutions',
    category: 'Security & AI',
    highlight: 'Global CCTV #1 & ColorVu',
    emoji: '🛡️',
    categories: ['IP Camera', 'NVR', 'HD DVR', 'HD Camera', 'Biometric', 'Video Door Phone', 'Monitors'],
    partnerYears: '15+',
    warranty: '3 Years Warranty',
    description: 'Hikvision is the global market leader in advanced video surveillance technologies, AcuSense AI intelligence, and 24/7 ColorVu full-color optics.'
  },
  {
    id: 'trueview',
    name: 'Trueview',
    slug: 'TRUEVIEW',
    sub: '4G Smart Cameras, Solar Security & Enterprise IP Optics',
    category: 'Surveillance',
    highlight: '4G Smart Cameras & IP Optics',
    emoji: '📷',
    categories: ['IP Camera', '4G Camera', 'Wi-Fi Camera', 'HD Camera', 'HD DVR', 'Wi-Fi NVR', 'Solar Panel', 'PoE Switch', 'Routers'],
    partnerYears: '12+',
    warranty: '2 Years Warranty',
    description: 'Trueview specializes in cellular 4G security cameras, standalone solar surveillance rigs, interactive panels, and commercial IP systems.'
  },
  {
    id: 'tp-link',
    name: 'TP-Link',
    slug: 'TP-LINK',
    sub: 'Omada Enterprise Networking, PoE Switches & VIGI Surveillance',
    category: 'Networking & PoE',
    highlight: 'VIGI CCTV & Omada Switches',
    emoji: '📡',
    categories: ['Networking', 'PoE Switch', 'Desktop Switch', 'Routers', 'IP Camera', 'NVR'],
    partnerYears: '14+',
    warranty: '3 Years Hardware Warranty',
    description: 'TP-Link provides enterprise Omada software-defined networking, gigabit PoE infrastructure, and high-performance VIGI professional surveillance optics.'
  },
  {
    id: 'd-link',
    name: 'D-Link',
    slug: 'D-LINK',
    sub: 'Enterprise Structured Cabling, Pure Copper CAT6 & PoE Switches',
    category: 'Structured Cabling',
    highlight: 'Certified Pure Copper CAT6',
    emoji: '🌐',
    categories: ['CAT 6 Cables', 'PoE Switch', 'Networking', 'Routers', 'CCTV Cables'],
    partnerYears: '15+',
    warranty: 'Lifetime on Pure Copper Cables, 3 Years on Active Gear',
    description: 'D-Link offers industry-certified structured cabling solutions, 100% bare electrolytic copper LAN cables, and resilient commercial switches.'
  },
  {
    id: 'toshiba',
    name: 'Toshiba',
    slug: 'TOSHIBA',
    sub: 'S300 Surveillance Internal Hard Drives & Storage Systems',
    category: 'Surveillance Drives',
    highlight: 'S300 Surveillance HDDs',
    emoji: '💾',
    categories: ['Hard Disk (Surveillance HDD)', 'Storage'],
    partnerYears: '15+',
    warranty: '3 Years Direct Replacement Warranty',
    description: 'Toshiba S300 surveillance drives are engineered for write-intensive 24/7 reliability in multi-stream commercial CCTV and NVR installations.'
  },
  {
    id: 'wd',
    name: 'WD',
    slug: 'WD',
    sub: 'Western Digital Purple Surveillance Storage & AllFrame Tech',
    category: 'Purple Storage',
    highlight: 'WD Purple 24/7 Video Hard Drives',
    emoji: '🗄️',
    categories: ['Hard Disk (Surveillance HDD)', 'Storage'],
    partnerYears: '15+',
    warranty: '3 Years Official Warranty',
    description: 'WD Purple hard drives are purpose-built for continuous video recording in high-definition security systems, reducing frame loss.'
  },
  {
    id: 'seagate',
    name: 'Seagate',
    slug: 'SEAGATE',
    sub: 'SkyHawk & SkyHawk AI High-Reliability Surveillance Drives',
    category: 'SkyHawk Storage',
    highlight: 'SkyHawk Surveillance Drives',
    emoji: '💿',
    categories: ['Hard Disk (Surveillance HDD)', 'Storage'],
    partnerYears: '15+',
    warranty: '3 Years Warranty with Data Recovery Service',
    description: 'Seagate SkyHawk drives are tuned for 24/7 continuous surveillance workloads, ImagePerfect firmware, and high-drive-count NVR systems.'
  },
  {
    id: 'fyber',
    name: 'Fyber',
    slug: 'FYBER',
    sub: 'High-Power PoE Switches, Fiber Transceivers & Racks',
    category: 'Optical Networking',
    highlight: 'PoE Switches & Fiber Racks',
    emoji: '🔌',
    categories: ['PoE Switch', 'Desktop Switch', 'Media Convertor', 'Networking', 'Power Supply', 'Adaptors', 'UPS', 'HDMI Cable'],
    partnerYears: '10+',
    warranty: '2 Years Replacement Warranty',
    description: 'Fyber supplies heavy-duty PoE switches with 250m long-reach transmission, gigabit fiber media converters, and specialized telecom gear.'
  },
  {
    id: 'maxxion',
    name: 'Maxxion',
    slug: 'MAXXION',
    sub: 'Biometric Access Control, CCTV Power Supplies & Displays',
    category: 'Power & Display',
    highlight: 'CCTV Power & Commercial Monitors',
    emoji: '🔒',
    categories: ['Electric Door Lock', 'PoE Switch', 'Power Supply', 'LED TV', 'HD Camera', 'HD DVR', 'Wi-Fi Camera', '4G Camera', 'UPS', 'Accessories'],
    partnerYears: '11+',
    warranty: '2 Years Warranty',
    description: 'Maxxion manufactures heavy-duty power supplies, central power distribution boxes, biometric terminals, electronic locks, and security displays.'
  },
  {
    id: 'essl',
    name: 'eSSL',
    slug: 'ESSL',
    sub: 'Biometric Attendance, Face Recognition Terminals & Smart Locks',
    category: 'Biometric Access',
    highlight: 'Fingerprint & Facial Terminals',
    emoji: '👆',
    categories: ['Biometric', 'Electric Door Lock', 'Access Control', 'UPS'],
    partnerYears: '13+',
    warranty: '1 Year Comprehensive Warranty',
    description: 'eSSL is India’s foremost provider of biometric attendance systems, facial recognition access control, turnstiles, and electronic locking.'
  },
  {
    id: 'trionet',
    name: 'Trionet',
    slug: 'TRIONET',
    sub: 'Enterprise Networking, Core Routing & High-Density Switches',
    category: 'Networking',
    highlight: 'Enterprise Switches & Routing',
    emoji: '🌐',
    categories: ['Networking', 'Routers', 'PoE Switch', 'Desktop Switch'],
    partnerYears: '8+',
    warranty: '2 Years Warranty',
    description: 'Trionet provides commercial gigabit switches, multi-WAN load-balancing routers, and enterprise network termination appliances.'
  },
  {
    id: 'hifocus',
    name: 'HiFocus',
    slug: 'HIFOCUS',
    sub: 'High-Resolution IP Systems, NVRs & Structured Infrastructure',
    category: 'CCTV & NVR',
    highlight: 'High-Resolution IP Systems',
    emoji: '📸',
    categories: ['IP Camera', 'NVR', 'HD DVR', 'HD Camera', 'PoE Switch', 'Routers', 'CAT 6 Cables', 'Power Supply', 'CCTV Cables'],
    partnerYears: '12+',
    warranty: '2 Years Manufacturer Warranty',
    description: 'HiFocus delivers high-definition CCTV, AI analytics network video recorders, PoE switches, and transmission cabling for commercial projects.'
  },
  {
    id: 'qubo',
    name: 'Qubo',
    slug: 'QUBO',
    sub: 'Hero Group Connected Smart Security, AI Cameras & Door Locks',
    category: 'Smart Security',
    highlight: 'Hero Group Smart IoT',
    emoji: '🏠',
    categories: ['Wi-Fi Camera', 'Smart Door Lock', 'Video Door Phone', 'Dash Camera', 'GPS Tracker', 'Smart Plug', 'Tyre Inflator', 'Accessories'],
    partnerYears: '6+',
    warranty: '1 Year Brand Warranty',
    description: 'Qubo by Hero Electronix designs smart AI security cameras, digital smart door locks, video door phones, and automotive dashcams.'
  },
  {
    id: 'matrix',
    name: 'Matrix',
    slug: 'MATRIX',
    sub: 'Unified Communications, IP-PBX & Enterprise Access Systems',
    category: 'Security & Telecom',
    highlight: 'Unified Communication & Access',
    emoji: '🏢',
    categories: ['EPABX', 'Telephone', 'Biometric', 'Access Control'],
    partnerYears: '14+',
    warranty: '1 Year Comprehensive Warranty',
    description: 'Matrix Comsec is a premier manufacturer of telecom and physical security solutions including IP-PBX phone systems, VoIP, and multi-location biometrics.'
  },
  {
    id: 'beetel',
    name: 'Beetel',
    slug: 'BEETEL',
    sub: 'Business Telephony, Intercom PBX & Enterprise Voice Systems',
    category: 'Telecom & Power',
    highlight: 'Telephony & Business Systems',
    emoji: '📞',
    categories: ['Telephone', 'EPABX', 'Accessories'],
    partnerYears: '15+',
    warranty: '1 Year Manufacturer Warranty',
    description: 'Beetel is a legendary Indian telecommunications brand supplying commercial landline equipment, caller ID phones, and intercom hardware.'
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    slug: 'PANASONIC',
    sub: 'Enterprise Security Optics, PBX Systems & Specialized Telecom',
    category: 'Surveillance Systems',
    highlight: 'Industrial Enterprise Grade',
    emoji: '👁️',
    categories: ['Telephone', 'EPABX', 'IP Camera', 'Surveillance'],
    partnerYears: '15+',
    warranty: '2 Years Brand Warranty',
    description: 'Panasonic commercial hardware offers legendary Japanese engineering in IP communications, video security, and high-reliability PBX systems.'
  },
  {
    id: 'yadon',
    name: 'Yadon',
    slug: 'YADON',
    sub: 'Regulated Power Supplies, Electromagnetic Locks & Accessories',
    category: 'Electronic Locks',
    highlight: 'Magnetic Locks & Exit Sensors',
    emoji: '🔋',
    categories: ['Power Supply', 'Electric Door Lock', 'PoE Switch', 'UPS', 'PC UPS'],
    partnerYears: '10+',
    warranty: '2 Years Warranty',
    description: 'Yadon specializes in heavy-duty 280kg-500kg electromagnetic door locks, push-to-exit buttons, and regulated 12V SMPS power units.'
  },
  {
    id: 'elco',
    name: 'Elco',
    slug: 'ELCO',
    sub: 'Stabilized SMPS Power Supplies, CCTV Cabinets & Adapters',
    category: 'Power Units',
    highlight: 'Stabilized SMPS Power Supplies',
    emoji: '💡',
    categories: ['Power Supply', 'CCTV Rack', 'Accessories', 'Adaptors'],
    partnerYears: '15+',
    warranty: '2 Years Warranty',
    description: 'Elco provides heavy-gauge SMPS power boxes, individual fuse CCTV power supplies, and industrial surge-protected adapters.'
  },
  {
    id: 'tcl',
    name: 'TCL',
    slug: 'TCL',
    sub: 'Commercial Security Displays, 24/7 CCTV Monitoring LED Panels',
    category: 'Commercial Displays',
    highlight: '24/7 Security CCTV Monitors',
    emoji: '📺',
    categories: ['LED TV', 'Monitors'],
    partnerYears: '9+',
    warranty: '3 Years Panel Warranty',
    description: 'TCL commercial surveillance displays are built with commercial-grade panels rated for continuous 24/7 video monitoring and multi-camera display.'
  },
  {
    id: 'imou',
    name: 'Imou',
    slug: 'IMOU',
    sub: 'Smart Consumer Security, Wireless PTZ Cameras & MicroSDs',
    category: 'Smart Surveillance',
    highlight: 'Wireless Smart Security Cameras',
    emoji: '📷',
    categories: ['Wi-Fi Camera', 'Memory Card', '4G Camera'],
    partnerYears: '5+',
    warranty: '2 Years Warranty',
    description: 'Imou provides consumer smart cameras, active deterrence PTZ Wi-Fi optics, cloud storage, and high-endurance surveillance memory cards.'
  },
  {
    id: 'krystaa',
    name: 'Krystaa',
    slug: 'KRYSTAA',
    sub: 'Server Racks, CCTV Enclosures & Surveillance Memory Cards',
    category: 'Infrastructure',
    highlight: 'Server Racks & Cabinets',
    emoji: '📦',
    categories: ['CCTV Rack', 'Memory Card', 'Monitors', 'Hard Disk'],
    partnerYears: '8+',
    warranty: '2 Years Warranty',
    description: 'Krystaa manufactures high-gauge cold-rolled steel server racks, wall-mount DVR cabinets, and specialized Class-10 surveillance memory cards.'
  },
  {
    id: 'folla',
    name: 'Folla',
    slug: 'FOLLA',
    sub: 'High-Grade 3+1 Armored CCTV Cables & Currency Counting Units',
    category: 'Security Cables',
    highlight: '3+1 Coaxial & Armored Cables',
    emoji: '🪙',
    categories: ['CCTV Cables', 'Cash Counting Machines', 'Accessories'],
    partnerYears: '7+',
    warranty: '1 Year Warranty',
    description: 'Folla produces heavy-duty 3+1 coaxial surveillance cables, outdoor armored cabling, and commercial counterfeit-detecting cash counting machines.'
  },
  {
    id: 'lemorele',
    name: 'Lemorele',
    slug: 'LEMORELE',
    sub: 'Industrial Video Transmission, HDMI Extenders & USB Hubs',
    category: 'Transmission & Hubs',
    highlight: 'Industrial USB/HDMI Hubs',
    emoji: '🖥️',
    categories: ['Accessories', 'HDMI Cable', 'Media Convertor'],
    partnerYears: '6+',
    warranty: '1 Year Warranty',
    description: 'Lemorele manufactures long-distance HDMI extenders over Cat6, multi-port USB-C hubs, video splitters, and surveillance KVM switches.'
  },
  {
    id: 'srb',
    name: 'SRB',
    slug: 'SRB',
    sub: 'Commercial Surveillance Cabling, BNC Connectors & Hardware',
    category: 'Surveillance',
    highlight: 'Commercial CCTV & Accessories',
    emoji: '🔌',
    categories: ['Accessories', 'CCTV Cables', 'Power Supply'],
    partnerYears: '11+',
    warranty: '1 Year Warranty',
    description: 'SRB is a high-volume manufacturer of pure copper CCTV 3+1 cables, solid brass BNC connectors, and outdoor weather-shield junction boxes.'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'ACCESSORIES',
    sub: 'Certified Installation Mounts, BNC Connectors, Tools & Passives',
    category: 'Mounts & Passive',
    highlight: 'Cables, Connectors & Brackets',
    emoji: '🔧',
    categories: ['CCTV Connectors & BNC', 'Mounting Brackets', 'Patch Cords & Tooling', 'Power Distribution Accessories', 'Accessories'],
    partnerYears: '15+',
    warranty: '1 Year Trade Warranty',
    description: 'Realtech Vision direct trade accessories stock includes BNC crimps, DC jacks, camera wall brackets, RJ45 crimping tools, and cable organizers.'
  }
];

export const ALL_PRODUCTS: CatalogProduct[] = [
  // PRAMA
  {
    id: 'prama-p1',
    name: 'Prama 2MP Full-Color Audio Dome Camera',
    brand: 'Prama',
    cat: 'IP Camera',
    mrp: 3400,
    dp: 2450,
    icon: '📷',
    badge: 'hot',
    stock: 180,
    desc: '2MP full time color vision, built-in high sensitivity microphone, 30m warm white LED, IP67 waterproof metal housing.'
  },
  {
    id: 'prama-p2',
    name: 'Prama 4MP AI AcuSense Bullet Camera',
    brand: 'Prama',
    cat: 'IP Camera',
    mrp: 6200,
    dp: 4750,
    icon: '📸',
    badge: 'new',
    stock: 94,
    desc: '4MP high definition optics, human and vehicle classification, 50m EXIR night vision, H.265+ compression, PoE supported.'
  },
  {
    id: 'prama-p3',
    name: 'Prama 8CH 4K Ultra-HD Network Video Recorder',
    brand: 'Prama',
    cat: 'NVR',
    mrp: 11500,
    dp: 8900,
    icon: '📡',
    badge: 'top',
    stock: 62,
    desc: '8-channel IP decoding, up to 4K HDMI output, 1 SATA interface up to 8TB, smart event playback, P2P cloud mobile view.'
  },
  {
    id: 'prama-p4',
    name: 'Prama 16CH 4K H.265+ 2-SATA NVR',
    brand: 'Prama',
    cat: 'NVR',
    mrp: 18500,
    dp: 14200,
    icon: '🖥️',
    badge: 'bulk',
    stock: 45,
    desc: '16CH 4K decoding, dual SATA bays supporting up to 16TB storage, 160Mbps incoming bandwidth, simultaneous HDMI and VGA.'
  },
  {
    id: 'prama-p5',
    name: 'Prama 5MP HD Analog 8CH DVR',
    brand: 'Prama',
    cat: 'HD DVR',
    mrp: 7500,
    dp: 5600,
    icon: '📺',
    badge: '',
    stock: 88,
    desc: '5-in-1 hybrid DVR, supports 5MP HD analog cameras and IP channels, audio over coaxial cable, H.265 Pro+ encoding.'
  },
  {
    id: 'prama-p6',
    name: 'Prama Certified Pure Copper CAT6 UTP Cable (305m)',
    brand: 'Prama',
    cat: 'CAT 6 Cables',
    mrp: 8200,
    dp: 6400,
    icon: '📻',
    badge: 'top',
    stock: 140,
    desc: '305m easy-pull wooden reel, 100% solid electrolytic bare copper, 23 AWG, verified for Gigabit PoE high bandwidth.'
  },

  // CP PLUS
  {
    id: 'cp-p1',
    name: 'CP PLUS 2.4MP Cosmic HD IR Dome Camera',
    brand: 'CP Plus',
    cat: 'HD Camera',
    mrp: 1850,
    dp: 1350,
    icon: '📷',
    badge: 'top',
    stock: 420,
    desc: '1/2.7" 2.4MP CMOS, 20m IR, 3.6mm lens, DWDR, day/night ICR, auto white balance, supports HDCVI, AHD, HDTVI, CVBS.'
  },
  {
    id: 'cp-p2',
    name: 'CP PLUS 4MP EzyKam+ Wi-Fi Pan-Tilt Camera',
    brand: 'CP Plus',
    cat: 'Wi-Fi Camera',
    mrp: 3200,
    dp: 2350,
    icon: '🔄',
    badge: 'hot',
    stock: 210,
    desc: '360° pan and tilt coverage, 4MP 2K quad HD video, two-way audio talk, human motion auto tracking, SD card slot up to 256GB.'
  },
  {
    id: 'cp-p3',
    name: 'CP PLUS 5MP Guard+ Full-Color Audio Bullet',
    brand: 'CP Plus',
    cat: 'HD Camera',
    mrp: 2900,
    dp: 2150,
    icon: '📸',
    badge: 'new',
    stock: 195,
    desc: '5MP resolution with built-in mic, full-color warm white LED up to 20m, IP67 weather-proof metal front, audio over coax.'
  },
  {
    id: 'cp-p4',
    name: 'CP PLUS 8-Channel Orange Series HD DVR',
    brand: 'CP Plus',
    cat: 'HD DVR',
    mrp: 5800,
    dp: 4250,
    icon: '📺',
    badge: 'top',
    stock: 110,
    desc: '8CH HD video encoding up to 5MP, H.265+ dual-stream, 1 SATA HDD up to 6TB, CP PLUS InstaOn mobile cloud view.'
  },
  {
    id: 'cp-p5',
    name: 'CP PLUS 16-Channel 4K Network Video Recorder',
    brand: 'CP Plus',
    cat: 'NVR',
    mrp: 17500,
    dp: 13400,
    icon: '🖥️',
    badge: 'bulk',
    stock: 54,
    desc: '16CH IP camera decoding up to 8MP/4K, 2 SATA ports up to 20TB, 160Mbps incoming bandwidth, H.265+ smart stream.'
  },
  {
    id: 'cp-p6',
    name: 'CP PLUS 8-Port Gigabit PoE Switch (120W)',
    brand: 'CP Plus',
    cat: 'PoE Switch',
    mrp: 5200,
    dp: 3950,
    icon: '🔌',
    badge: '',
    stock: 140,
    desc: '8x 10/100/1000M PoE ports + 2 Gigabit Uplink ports, IEEE 802.3af/at compliant, 120W total budget with 250m extend mode.'
  },
  {
    id: 'cp-p7',
    name: 'CP PLUS 4G SIM Outdoor PTZ Solar Camera',
    brand: 'CP Plus',
    cat: '4G Camera',
    mrp: 7900,
    dp: 5900,
    icon: '📡',
    badge: 'hot',
    stock: 75,
    desc: 'Direct 4G LTE SIM card connection, 3MP HD sensor, solar panel with rechargeable lithium battery pack, PIR human detection.'
  },
  {
    id: 'cp-p8',
    name: 'CP PLUS High Endurance 64GB MicroSDXC Card',
    brand: 'CP Plus',
    cat: 'Memory Card',
    mrp: 950,
    dp: 580,
    icon: '💾',
    badge: '',
    stock: 350,
    desc: 'Class 10 UHS-I U3 V30, engineered for non-stop 24/7 video loop recording in security cameras, waterproof and shockproof.'
  },

  // HIKVISION
  {
    id: 'hik-p1',
    name: 'Hikvision 2MP ColorVu Audio Fixed Mini Dome',
    brand: 'Hikvision',
    cat: 'IP Camera',
    mrp: 4600,
    dp: 3450,
    icon: '🌈',
    badge: 'top',
    stock: 160,
    desc: '24/7 full-color imaging with F1.0 super aperture, 2MP CMOS, 30m warm white light, built-in microphone for real-time audio.'
  },
  {
    id: 'hik-p2',
    name: 'Hikvision 4MP AcuSense AI Motorized Bullet',
    brand: 'Hikvision',
    cat: 'IP Camera',
    mrp: 14500,
    dp: 11200,
    icon: '📸',
    badge: 'hot',
    stock: 48,
    desc: 'Deep learning based human and vehicle false alarm reduction, 2.8-12mm motorized zoom lens, 120dB true WDR, IP67 metal.'
  },
  {
    id: 'hik-p3',
    name: 'Hikvision PTZ 4MP 25x Optical Zoom Speed Dome',
    brand: 'Hikvision',
    cat: 'IP Camera',
    mrp: 26000,
    dp: 19800,
    icon: '🔭',
    badge: 'bulk',
    stock: 28,
    desc: '4MP resolution, 25x optical zoom, 16x digital zoom, 100m IR distance, smart auto-tracking, IP66 weatherproof housing.'
  },
  {
    id: 'hik-p4',
    name: 'Hikvision 8CH 4K Ultra HD Embedded NVR',
    brand: 'Hikvision',
    cat: 'NVR',
    mrp: 16000,
    dp: 12500,
    icon: '📡',
    badge: 'top',
    stock: 72,
    desc: 'Up to 8-channel IP cameras, 80Mbps bandwidth, up to 8MP decoding, 1 HDMI (4K) and 1 VGA output, 1 SATA up to 8TB.'
  },
  {
    id: 'hik-p5',
    name: 'Hikvision 16CH 2-SATA Pro 4K NVR',
    brand: 'Hikvision',
    cat: 'NVR',
    mrp: 23500,
    dp: 17800,
    icon: '🖥️',
    badge: '',
    stock: 36,
    desc: '16CH video recording, 160Mbps incoming bandwidth, 2 SATA interfaces up to 10TB per disk, H.265+/H.265/H.264+ decoding.'
  },
  {
    id: 'hik-p6',
    name: 'Hikvision IP Video Door Phone Kit (DS-KIS602)',
    brand: 'Hikvision',
    cat: 'Video Door Phone',
    mrp: 15500,
    dp: 11800,
    icon: '🚪',
    badge: 'new',
    stock: 42,
    desc: 'Complete IP VDP kit: 7-inch color touch indoor screen, 2MP Fisheye door station with IR night vision, Hik-Connect mobile access.'
  },

  // TRUEVIEW
  {
    id: 'tv-p1',
    name: 'Trueview 4MP Dual-Light Smart IP Dome Camera',
    brand: 'Trueview',
    cat: 'IP Camera',
    mrp: 5500,
    dp: 4200,
    icon: '📷',
    badge: 'new',
    stock: 248,
    desc: 'Smart dual illuminator (IR + Warm LED), H.265+, 30m IR, IP67 metal dome, high sensitivity CMOS sensor.'
  },
  {
    id: 'tv-p2',
    name: 'Trueview 8MP 4K Ultra-HD Long Range Bullet',
    brand: 'Trueview',
    cat: 'IP Camera',
    mrp: 7200,
    dp: 5800,
    icon: '📸',
    badge: 'top',
    stock: 124,
    desc: '4K Ultra HD resolution, AI human and vehicle detection, 50m long-range Smart IR, built-in PoE, IP67 industrial housing.'
  },
  {
    id: 'tv-p3',
    name: 'Trueview 4G SIM 4MP Solar PTZ Camera with Battery',
    brand: 'Trueview',
    cat: '4G Camera',
    mrp: 12500,
    dp: 9600,
    icon: '☀️',
    badge: 'hot',
    stock: 64,
    desc: 'Completely wire-free: 40W monocrystalline solar panel, 20Ah lithium battery, 4G LTE SIM support, 360° pan-tilt with human tracking.'
  },
  {
    id: 'tv-p4',
    name: 'Trueview 3MP Wi-Fi Smart Dual-Lens Robot Camera',
    brand: 'Trueview',
    cat: 'Wi-Fi Camera',
    mrp: 3800,
    dp: 2750,
    icon: '🤖',
    badge: '',
    stock: 115,
    desc: 'Dual lens: 1 fixed wide angle lens + 1 pan-tilt tracking lens, two-way intercom audio, color night vision, SD card up to 256GB.'
  },

  // TP-LINK
  {
    id: 'tpl-p1',
    name: 'TP-Link Omada 24-Port Gigabit Managed PoE+ Switch',
    brand: 'TP-Link',
    cat: 'PoE Switch',
    mrp: 24500,
    dp: 18900,
    icon: '🌐',
    badge: 'top',
    stock: 42,
    desc: '24× Gigabit PoE+ ports with 250W power budget, 4× Gigabit SFP slots, L2+ enterprise features, Omada SDN centralized cloud management.'
  },
  {
    id: 'tpl-p2',
    name: 'TP-Link Omada 8-Port Desktop Gigabit PoE+ Switch',
    brand: 'TP-Link',
    cat: 'PoE Switch',
    mrp: 6800,
    dp: 5200,
    icon: '🔌',
    badge: 'top',
    stock: 135,
    desc: '8× 10/100/1000Mbps RJ45 ports with 64W total PoE budget, compact metal housing, plug-and-play desktop/wall design.'
  },
  {
    id: 'tpl-p3',
    name: 'TP-Link VIGI 4MP Outdoor Full-Color Bullet Camera',
    brand: 'TP-Link',
    cat: 'IP Camera',
    mrp: 4800,
    dp: 3650,
    icon: '📷',
    badge: 'new',
    stock: 86,
    desc: '4MP high definition optics, 24h full-color imaging, smart detection (motion, line crossing, area intrusion), IP67 weatherproof.'
  },
  {
    id: 'tpl-p4',
    name: 'TP-Link ER605 Omada Multi-WAN Gigabit VPN Router',
    brand: 'TP-Link',
    cat: 'Routers',
    mrp: 5200,
    dp: 3950,
    icon: '📶',
    badge: 'hot',
    stock: 95,
    desc: '1 Gigabit WAN + 2 Gigabit WAN/LAN + 2 Gigabit LAN ports, hardware IPsec/OpenVPN acceleration, multi-WAN load balancing.'
  },

  // D-LINK
  {
    id: 'dlink-p1',
    name: 'D-Link Pure Copper Solid CAT6 UTP Cable Box (305m)',
    brand: 'D-Link',
    cat: 'CAT 6 Cables',
    mrp: 8900,
    dp: 6950,
    icon: '📻',
    badge: 'top',
    stock: 220,
    desc: '100% solid electrolytic bare copper 23 AWG, verified 250MHz performance, certified for Gigabit Ethernet & high-power PoE.'
  },
  {
    id: 'dlink-p2',
    name: 'D-Link 16-Port Gigabit Unmanaged Switch',
    brand: 'D-Link',
    cat: 'Networking',
    mrp: 7500,
    dp: 5600,
    icon: '🌐',
    badge: '',
    stock: 82,
    desc: '16x 10/100/1000Mbps ports, sturdy 19-inch rackmount metal chassis, 802.3az energy efficient Ethernet, silent fanless operation.'
  },
  {
    id: 'dlink-p3',
    name: 'D-Link 8-Port Fast Ethernet PoE Switch (68W)',
    brand: 'D-Link',
    cat: 'PoE Switch',
    mrp: 4200,
    dp: 3150,
    icon: '🔌',
    badge: 'bulk',
    stock: 145,
    desc: '8x 10/100Mbps PoE ports, 68W PoE budget, 250m long-distance extension switch, 6kV surge protection on all ports.'
  },

  // TOSHIBA
  {
    id: 'tosh-p1',
    name: 'Toshiba S300 2TB Surveillance Internal HDD',
    brand: 'Toshiba',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 5400,
    dp: 3950,
    icon: '💾',
    badge: 'top',
    stock: 240,
    desc: '3.5-inch SATA 6.0Gb/s, 5400 RPM, 64MB buffer, supports up to 64 HD surveillance cameras simultaneously, 1 million hours MTTF.'
  },
  {
    id: 'tosh-p2',
    name: 'Toshiba S300 4TB 24/7 Surveillance Hard Drive',
    brand: 'Toshiba',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 8900,
    dp: 6850,
    icon: '💾',
    badge: 'hot',
    stock: 190,
    desc: '4TB capacity, 5400 RPM, 128MB cache, engineered for 24/7 continuous multi-stream video writing with low power consumption.'
  },
  {
    id: 'tosh-p3',
    name: 'Toshiba S300 Pro 8TB Enterprise Surveillance HDD',
    brand: 'Toshiba',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 18500,
    dp: 14600,
    icon: '🗄️',
    badge: 'bulk',
    stock: 65,
    desc: '7200 RPM high performance, 256MB cache, up to 180TB/year workload rating, supports up to 64 high-resolution streams.'
  },

  // WESTERN DIGITAL (WD)
  {
    id: 'wd-p1',
    name: 'WD Purple 2TB Surveillance Hard Drive',
    brand: 'WD',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 5600,
    dp: 4150,
    icon: '🗄️',
    badge: 'top',
    stock: 260,
    desc: '3.5" SATA HDD, AllFrame 4K technology, reduces frame loss and pixilation, engineered for 24×7 always-on high-definition surveillance.'
  },
  {
    id: 'wd-p2',
    name: 'WD Purple 4TB Surveillance 24/7 Hard Drive',
    brand: 'WD',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 9200,
    dp: 7100,
    icon: '💾',
    badge: 'hot',
    stock: 185,
    desc: '4TB storage, 5400 RPM, 64MB cache, tuned for write-intensive CCTV workloads, handles up to 64 single-stream HD cameras.'
  },
  {
    id: 'wd-p3',
    name: 'WD Purple Pro 8TB AI Surveillance Enterprise Drive',
    brand: 'WD',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 21500,
    dp: 16900,
    icon: '🗄️',
    badge: 'bulk',
    stock: 52,
    desc: 'Enterprise-grade 7200 RPM, 256MB cache, 500TB/year workload rating, optimized for AI-enabled video recorders and deep learning.'
  },

  // SEAGATE
  {
    id: 'sg-p1',
    name: 'Seagate SkyHawk 2TB Surveillance HDD',
    brand: 'Seagate',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 5500,
    dp: 4100,
    icon: '💿',
    badge: 'top',
    stock: 210,
    desc: 'ImagePerfect firmware ensures smooth video footage capture without dropped frames, 180TB/year workload, 1M hours MTBF.'
  },
  {
    id: 'sg-p2',
    name: 'Seagate SkyHawk 4TB Surveillance Internal Drive',
    brand: 'Seagate',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 9100,
    dp: 7050,
    icon: '💾',
    badge: 'hot',
    stock: 175,
    desc: '4TB capacity, 64MB cache, rotational vibration sensors maintain performance in multi-bay NVRs, 3-year Rescue Data Recovery.'
  },
  {
    id: 'sg-p3',
    name: 'Seagate SkyHawk AI 8TB Surveillance Hard Drive',
    brand: 'Seagate',
    cat: 'Hard Disk (Surveillance HDD)',
    mrp: 20500,
    dp: 16200,
    icon: '💿',
    badge: 'bulk',
    stock: 48,
    desc: '7200 RPM, 256MB cache, supports 64 HD streams plus 32 AI analytics streams, 550TB/year enterprise workload endurance.'
  },

  // FYBER
  {
    id: 'fyb-p1',
    name: 'Fyber 8-Port Gigabit PoE Switch (120W Heavy Duty)',
    brand: 'Fyber',
    cat: 'PoE Switch',
    mrp: 4800,
    dp: 3800,
    icon: '🔌',
    badge: 'top',
    stock: 156,
    desc: '8x 10/100/1000M PoE ports + 2 Gigabit Uplink ports, 120W internal power supply, 250m long-distance CCTV extend toggle.'
  },
  {
    id: 'fyb-p2',
    name: 'Fyber 16-Port Gigabit PoE Switch with 2 SFP (240W)',
    brand: 'Fyber',
    cat: 'PoE Switch',
    mrp: 9000,
    dp: 7200,
    icon: '🌐',
    badge: 'hot',
    stock: 68,
    desc: '16 PoE ports + 2 Gigabit RJ45 Uplinks + 2 Gigabit SFP fiber slots, 240W heavy duty power, 6kV lightning surge protection.'
  },
  {
    id: 'fyb-p3',
    name: 'Fyber Gigabit Fiber Media Converter Pair (A+B)',
    brand: 'Fyber',
    cat: 'Media Convertor',
    mrp: 2400,
    dp: 1750,
    icon: '📡',
    badge: '',
    stock: 110,
    desc: 'Single-mode single fiber optical media converter pair (1310/1550nm), SC port, transmits Gigabit Ethernet up to 20km.'
  },

  // MAXXION
  {
    id: 'maxx-p1',
    name: 'Maxxion 280kg (600lbs) Electromagnetic Door Lock',
    brand: 'Maxxion',
    cat: 'Electric Door Lock',
    mrp: 3200,
    dp: 2350,
    icon: '🔒',
    badge: 'top',
    stock: 140,
    desc: 'Anodized aluminum alloy housing, 280kg holding force, fail-safe operation (power to lock), LED status indicator, MOV surge protection.'
  },
  {
    id: 'maxx-p2',
    name: 'Maxxion 12V 10A 8-Channel Regulated CCTV Power Supply',
    brand: 'Maxxion',
    cat: 'Power Supply',
    mrp: 1800,
    dp: 1250,
    icon: '🔋',
    badge: '',
    stock: 220,
    desc: '12V DC 10 Amp central CCTV power supply cabinet with individual PTC fuse protection, LED status per channel, key-lock metal box.'
  },
  {
    id: 'maxx-p3',
    name: 'Maxxion Touchless Infrared Wave-to-Exit Sensor',
    brand: 'Maxxion',
    cat: 'Accessories',
    mrp: 1100,
    dp: 750,
    icon: '✋',
    badge: 'new',
    stock: 180,
    desc: 'Touch-free infrared exit button with dual color LED (Blue/Green), stainless steel plate, adjustable detection range 5-15cm.'
  },

  // ESSL
  {
    id: 'essl-p1',
    name: 'eSSL Identix K21 Fingerprint Time-Attendance Terminal',
    brand: 'eSSL',
    cat: 'Biometric',
    mrp: 5800,
    dp: 4350,
    icon: '👆',
    badge: 'top',
    stock: 130,
    desc: 'Fingerprint + RFID card attendance device, 1000 fingerprint capacity, 100,000 log records, built-in battery backup, TCP/IP & USB.'
  },
  {
    id: 'essl-p2',
    name: 'eSSL FacePass AI Visible Light Facial Terminal',
    brand: 'eSSL',
    cat: 'Biometric',
    mrp: 11500,
    dp: 8900,
    icon: '👤',
    badge: 'hot',
    stock: 58,
    desc: 'AI face recognition with anti-spoofing live detection, 0.5s recognition speed, 1500 face templates, 2000 fingerprints, cloud app.'
  },

  // QUBO
  {
    id: 'qubo-p1',
    name: 'Qubo Smart 360° Wi-Fi 2K Security Camera',
    brand: 'Qubo',
    cat: 'Wi-Fi Camera',
    mrp: 3290,
    dp: 2390,
    icon: '🏠',
    badge: 'top',
    stock: 120,
    desc: 'Hero Electronix AI camera, continuous 360° pan-tilt, AI person detection & intruder alarm siren, two-way audio, Alexa compatible.'
  },
  {
    id: 'qubo-p2',
    name: 'Qubo Smart Digital Door Lock with Biometric & Passcode',
    brand: 'Qubo',
    cat: 'Smart Door Lock',
    mrp: 12990,
    dp: 9800,
    icon: '🔐',
    badge: 'hot',
    stock: 42,
    desc: '5-way access: fingerprint, PIN passcode, RFID card, emergency key, mobile app unlock, stainless steel 5-bolt mortise lock.'
  },
  {
    id: 'qubo-p3',
    name: 'Qubo Pro 3K Ultra-HD Dashcam for Vehicles',
    brand: 'Qubo',
    cat: 'Dash Camera',
    mrp: 4990,
    dp: 3790,
    icon: '🚗',
    badge: 'new',
    stock: 65,
    desc: '3K QHD recording with Sony STARVIS sensor, super capacitor (heat resistant), G-sensor collision lock, emergency video recording.'
  },

  // TRIONET
  {
    id: 'trio-p1',
    name: 'Trionet 4-Port Gigabit Core Multi-WAN Router',
    brand: 'Trionet',
    cat: 'Routers',
    mrp: 3200,
    dp: 2400,
    icon: '📶',
    badge: 'top',
    stock: 212,
    desc: '4 Gigabit LAN, 1 Gigabit WAN, intelligent QoS bandwidth control, enterprise VPN pass-through, hardware firewall.'
  },
  {
    id: 'trio-p2',
    name: 'Trionet 8-Port Full Gigabit Desktop Switch',
    brand: 'Trionet',
    cat: 'Desktop Switch',
    mrp: 2100,
    dp: 1550,
    icon: '🔌',
    badge: '',
    stock: 180,
    desc: '8x 10/100/1000Mbps auto-negotiation RJ45 ports, durable metal enclosure, plug and play, wall mountable.'
  },

  // HIFOCUS
  {
    id: 'hf-p1',
    name: 'HiFocus 4MP Ultra-Low Light Turret IP Camera',
    brand: 'HiFocus',
    cat: 'IP Camera',
    mrp: 4900,
    dp: 3600,
    icon: '📸',
    badge: 'new',
    stock: 82,
    desc: '4MP Starlight sensor, H.265 high compression, 30m Smart IR, IP67 weatherproof rating, PoE powered.'
  },
  {
    id: 'hf-p2',
    name: 'HiFocus 8CH 4K AI Analytics NVR',
    brand: 'HiFocus',
    cat: 'NVR',
    mrp: 9800,
    dp: 7400,
    icon: '📡',
    badge: '',
    stock: 60,
    desc: '8 channel IP decoding up to 8MP, 4K HDMI monitor output, intelligent video analytics, 1 SATA HDD interface.'
  },

  // MATRIX
  {
    id: 'mat-p1',
    name: 'Matrix ETERNITY PE3SP Hybrid IP-PBX System',
    brand: 'Matrix',
    cat: 'EPABX',
    mrp: 18500,
    dp: 14200,
    icon: '🏢',
    badge: 'top',
    stock: 35,
    desc: 'Integrated IP-PBX supporting 3 CO lines and 8 analog extensions plus VoIP SIP trunks, auto-attendant, conference calling.'
  },
  {
    id: 'mat-p2',
    name: 'Matrix SPARSH VP210 Business IP Phone',
    brand: 'Matrix',
    cat: 'Telephone',
    mrp: 4800,
    dp: 3650,
    icon: '📞',
    badge: '',
    stock: 75,
    desc: 'High definition audio IP desk phone, 2 SIP accounts, 128x64 graphical LCD display with backlight, dual 10/100M Ethernet ports.'
  },

  // BEETEL
  {
    id: 'beet-p1',
    name: 'Beetel M71 Caller ID Commercial Corded Landline',
    brand: 'Beetel',
    cat: 'Telephone',
    mrp: 1450,
    dp: 990,
    icon: '📞',
    badge: 'top',
    stock: 310,
    desc: '16-digit LCD display with blue backlight, two-way speakerphone, 30 incoming call memory, flash time selectable for EPABX.'
  },
  {
    id: 'beet-p2',
    name: 'Beetel CC2 Commercial Call Center Headset Phone',
    brand: 'Beetel',
    cat: 'Telephone',
    mrp: 2600,
    dp: 1850,
    icon: '🎧',
    badge: '',
    stock: 85,
    desc: 'Hands-free dialpad telephone with noise-cancelling overhead headset, microphone mute button, auto-answer feature.'
  },

  // PANASONIC
  {
    id: 'pana-p1',
    name: 'Panasonic KX-TES824 Advanced Hybrid PBX System',
    brand: 'Panasonic',
    cat: 'EPABX',
    mrp: 22000,
    dp: 17500,
    icon: '🏢',
    badge: 'top',
    stock: 28,
    desc: '3 CO lines and 8 extensions standard (expandable up to 8 CO lines and 24 extensions), built-in DISA voice auto-attendant.'
  },
  {
    id: 'pana-p2',
    name: 'Panasonic KX-T7730 Proprietary Master Display Phone',
    brand: 'Panasonic',
    cat: 'Telephone',
    mrp: 5200,
    dp: 3950,
    icon: '📞',
    badge: 'hot',
    stock: 55,
    desc: '12 programmable CO keys with dual-color LEDs, 16-character alphanumeric LCD display, speakerphone, operator console support.'
  },

  // YADON
  {
    id: 'yad-p1',
    name: 'Yadon 12V 5A Regulated SMPS Power Supply',
    brand: 'Yadon',
    cat: 'Power Supply',
    mrp: 900,
    dp: 680,
    icon: '🔋',
    badge: 'bulk',
    stock: 480,
    desc: '12V DC, 5A continuous output, auto-recovery short circuit protection, compact perforated metal casing.'
  },
  {
    id: 'yad-p2',
    name: 'Yadon 280kg Heavy-Duty Magnetic Lock with ZL Bracket',
    brand: 'Yadon',
    cat: 'Electric Door Lock',
    mrp: 3500,
    dp: 2550,
    icon: '🧲',
    badge: 'top',
    stock: 110,
    desc: '600lbs holding force electromagnetic lock, complete with aluminum ZL bracket kit for in-swing and out-swing wooden/metal doors.'
  },

  // ELCO
  {
    id: 'elco-p1',
    name: 'Elco 12V 5A Metal Perforated CCTV SMPS',
    brand: 'Elco',
    cat: 'Power Supply',
    mrp: 850,
    dp: 620,
    icon: '💡',
    badge: 'bulk',
    stock: 350,
    desc: 'High stability switching power supply, input 100-260V AC, output 12V 5A DC, overload & thermal protection.'
  },
  {
    id: 'elco-p2',
    name: 'Elco 4U Wall Mount Steel CCTV Rack Cabinet',
    brand: 'Elco',
    cat: 'CCTV Rack',
    mrp: 1850,
    dp: 1350,
    icon: '📦',
    badge: 'top',
    stock: 120,
    desc: 'Heavy gauge steel DVR rack, toughened glass front door with key lock, fan mount provision, cable entry knockouts.'
  },

  // TCL
  {
    id: 'tcl-p1',
    name: 'TCL 32-Inch Commercial 24/7 CCTV Monitoring LED TV',
    brand: 'TCL',
    cat: 'LED TV',
    mrp: 14500,
    dp: 10900,
    icon: '📺',
    badge: 'top',
    stock: 45,
    desc: '32-inch commercial panel, HDMI/VGA inputs, anti-glare coating, optimized for continuous multi-camera CCTV monitoring displays.'
  },
  {
    id: 'tcl-p2',
    name: 'TCL 43-Inch 4K UHD Commercial Security Display',
    brand: 'TCL',
    cat: 'LED TV',
    mrp: 26500,
    dp: 20800,
    icon: '📺',
    badge: 'hot',
    stock: 32,
    desc: '4K Ultra-HD 3840x2160 resolution, slim metallic bezel, multiple HDMI inputs, designed for enterprise control rooms.'
  },

  // IMOU
  {
    id: 'imou-p1',
    name: 'Imou Ranger 2 4MP 360° Wi-Fi Smart Camera',
    brand: 'Imou',
    cat: 'Wi-Fi Camera',
    mrp: 3200,
    dp: 2350,
    icon: '📷',
    badge: 'top',
    stock: 190,
    desc: '4MP QHD resolution, 0~355° pan & -5~80° tilt, AI human detection with abnormal sound alarm, smart tracking, privacy mode.'
  },
  {
    id: 'imou-p2',
    name: 'Imou Cruiser 4MP Outdoor Full-Color PTZ Wi-Fi',
    brand: 'Imou',
    cat: 'Wi-Fi Camera',
    mrp: 5800,
    dp: 4200,
    icon: '📸',
    badge: 'hot',
    stock: 95,
    desc: 'IP66 outdoor pan-tilt security camera, smart full-color night vision, built-in spotlight and 110dB security siren, two-way audio.'
  },

  // KRYSTAA
  {
    id: 'krys-p1',
    name: 'Krystaa 6U Networking & Server Equipment Rack',
    brand: 'Krystaa',
    cat: 'CCTV Rack',
    mrp: 2600,
    dp: 1950,
    icon: '📦',
    badge: 'top',
    stock: 75,
    desc: '6U 550mm depth wall mount rack, cold-rolled steel construction, powder coated finish, glass door with lock and 2 keys.'
  },
  {
    id: 'krys-p2',
    name: 'Krystaa 128GB Surveillance High Endurance MicroSD',
    brand: 'Krystaa',
    cat: 'Memory Card',
    mrp: 1450,
    dp: 890,
    icon: '💾',
    badge: '',
    stock: 280,
    desc: 'Class 10 U3 V30 microSDXC card, tested for 10,000+ hours continuous video loop writing in outdoor IP and dash cameras.'
  },

  // FOLLA
  {
    id: 'folla-p1',
    name: 'Folla 3+1 Heavy Duty Copper Armored CCTV Cable (90m)',
    brand: 'Folla',
    cat: 'CCTV Cables',
    mrp: 2200,
    dp: 1650,
    icon: '🪙',
    badge: 'top',
    stock: 180,
    desc: 'Solid copper video core with 3 power wires, heavy PVC insulation and shielding to prevent electromagnetic interference.'
  },
  {
    id: 'folla-p2',
    name: 'Folla Commercial High-Speed Currency Counting Machine',
    brand: 'Folla',
    cat: 'Cash Counting Machines',
    mrp: 7500,
    dp: 5400,
    icon: '💵',
    badge: 'hot',
    stock: 45,
    desc: 'Counts 1,000 notes/min with dual UV and MG fake note detection sensors, external customer display included, batching function.'
  },

  // LEMORELE
  {
    id: 'lem-p1',
    name: 'Lemorele 4K 60m HDMI Extender over Single Cat6',
    brand: 'Lemorele',
    cat: 'Accessories',
    mrp: 2800,
    dp: 1950,
    icon: '🖥️',
    badge: 'top',
    stock: 110,
    desc: 'Transmits uncompressed 1080p/4K HDMI video signal up to 60 meters over a single Cat6 network cable with zero latency, IR control.'
  },
  {
    id: 'lem-p2',
    name: 'Lemorele 1x4 4K HDMI Splitter with Power Adapter',
    brand: 'Lemorele',
    cat: 'Accessories',
    mrp: 1950,
    dp: 1390,
    icon: '🔌',
    badge: '',
    stock: 85,
    desc: 'Splits 1 HDMI input signal into 4 identical HDMI monitor displays simultaneously, 4K@30Hz supported, metal heat-dissipating shell.'
  },

  // SRB
  {
    id: 'srb-p1',
    name: 'SRB Pure Copper 3+1 CCTV Coaxial Cable Reel (90m)',
    brand: 'SRB',
    cat: 'CCTV Cables',
    mrp: 1950,
    dp: 1450,
    icon: '🔌',
    badge: 'top',
    stock: 220,
    desc: 'Electrolytic bare copper RG-59 video core with 3 power cores, low signal attenuation, flame-retardant PVC jacket.'
  },
  {
    id: 'srb-p2',
    name: 'SRB Brass BNC Crimp Connectors (Pack of 50)',
    brand: 'SRB',
    cat: 'Accessories',
    mrp: 950,
    dp: 650,
    icon: '🔧',
    badge: 'bulk',
    stock: 350,
    desc: 'Commercial heavy brass BNC male crimp connectors with gold-plated pins, suitable for RG-59 and 3+1 CCTV video cabling.'
  },

  // ACCESSORIES
  {
    id: 'acc-p1',
    name: 'Commercial CCTV Junction Box 4x4 (Pack of 20)',
    brand: 'Accessories',
    cat: 'Accessories',
    mrp: 1600,
    dp: 1150,
    icon: '📦',
    badge: 'top',
    stock: 450,
    desc: 'Heavy ABS waterproof camera base junction boxes, pre-marked drill guides for dome and bullet cameras, rubber cable glands.'
  },
  {
    id: 'acc-p2',
    name: 'Heavy Duty 12V 2A Regulated DC Power Adapter',
    brand: 'Accessories',
    cat: 'Power Distribution Accessories',
    mrp: 350,
    dp: 220,
    icon: '🔋',
    badge: 'bulk',
    stock: 600,
    desc: 'Bureau of Indian Standards (BIS) approved 12V 2 Amp adapter, surge protected, 1.2m wire with standard 5.5x2.1mm DC plug.'
  },
  {
    id: 'acc-p3',
    name: 'High Performance RJ45 Modular Plugs CAT6 (Jar of 100)',
    brand: 'Accessories',
    cat: 'Patch Cords & Tooling',
    mrp: 850,
    dp: 550,
    icon: '🔌',
    badge: '',
    stock: 400,
    desc: '50-micron gold-plated contacts, 3-prong design for solid and stranded wire, clear polycarbonate housing for Cat6 cables.'
  },
  {
    id: 'acc-p4',
    name: 'Professional Ratchet RJ45 / RJ11 Modular Crimping Tool',
    brand: 'Accessories',
    cat: 'Patch Cords & Tooling',
    mrp: 1250,
    dp: 850,
    icon: '🛠️',
    badge: 'hot',
    stock: 140,
    desc: 'Hardened steel construction with ratchet mechanism, built-in wire stripper and cutter for 8P8C, 6P6C, and 4P4C network plugs.'
  }
];

export function normalizeBrandQuery(query: string | null | undefined): string {
  if (!query) return 'PRAMA';
  return query
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

export function getBrandByQuery(query: string | null | undefined): BrandInfo {
  const norm = normalizeBrandQuery(query);
  const found = AUTHORISED_BRANDS.find((b) => {
    const bNorm = normalizeBrandQuery(b.slug);
    const nameNorm = normalizeBrandQuery(b.name);
    const idNorm = normalizeBrandQuery(b.id);
    return bNorm === norm || nameNorm === norm || idNorm === norm;
  });

  if (found) return found;

  // Default fallback to Prama
  return AUTHORISED_BRANDS[0];
}

export function getBrandProducts(brandNameOrSlug: string): CatalogProduct[] {
  const norm = normalizeBrandQuery(brandNameOrSlug);
  return ALL_PRODUCTS.filter((p) => {
    return normalizeBrandQuery(p.brand) === norm;
  });
}
