export interface Product {
  id: string;
  name: string;
  brand: string;
  cat: string;
  mrp: number;
  dp: number;
  icon: string;
  badge: 'hot' | 'new' | 'bulk' | '';
  stock: number;
  desc: string;
  imageLabel: string;
}

export interface Brand {
  name: string;
  sub: string;
  emoji: string;
  imageLabel: string;
}

export interface Category {
  name: string;
  emoji: string;
  count: number;
  bg: string;
  imageLabel: string;
}

export const BRANDS: Brand[] = [
  { name: 'Trueview', sub: 'CCTV & IP Cameras', emoji: '📷', imageLabel: 'image7' },
  { name: 'Hikvision', sub: 'Security Leader', emoji: '📹', imageLabel: 'image8' },
  { name: 'Maxxion', sub: 'Access Control', emoji: '🔒', imageLabel: 'image9' },
  { name: 'Toshiba', sub: 'Storage Solutions', emoji: '💾', imageLabel: 'image10' },
  { name: 'Fyber', sub: 'Networking & PoE', emoji: '📡', imageLabel: 'image11' },
  { name: 'Prama', sub: 'IP Cameras & NVR', emoji: '🎥', imageLabel: 'image12' },
  { name: 'Qubo', sub: 'Smart Home', emoji: '🏠', imageLabel: 'image13' },
  { name: 'Yadon', sub: 'Power Supply', emoji: '🔌', imageLabel: 'image14' },
  { name: 'Elco', sub: 'Electronics', emoji: '💡', imageLabel: 'image15' },
  { name: 'Trionet', sub: 'Network Infra', emoji: '🌐', imageLabel: 'image16' },
];

export const CATEGORIES: Category[] = [
  { name: 'IP Cameras', emoji: '📷', count: 5, bg: 'linear-gradient(135deg,#1A1A2E,#0F3460)', imageLabel: 'image17' },
  { name: 'NVR / DVR', emoji: '🖥️', count: 3, bg: 'linear-gradient(135deg,#16213E,#1a1a2e)', imageLabel: 'image18' },
  { name: 'Networking', emoji: '🔌', count: 3, bg: 'linear-gradient(135deg,#1a1a2e,#2d1b69)', imageLabel: 'image19' },
  { name: 'Storage', emoji: '💾', count: 2, bg: 'linear-gradient(135deg,#1a2e1a,#0d3b0d)', imageLabel: 'image20' },
  { name: 'Access Control', emoji: '🔐', count: 2, bg: 'linear-gradient(135deg,#2e1a1a,#3b0d0d)', imageLabel: 'image21' },
  { name: 'Power Supply', emoji: '🔋', count: 1, bg: 'linear-gradient(135deg,#2e2a1a,#3b340d)', imageLabel: 'image22' },
  { name: 'Accessories', emoji: '🔧', count: 2, bg: 'linear-gradient(135deg,#1a2a2e,#0d2d3b)', imageLabel: 'image23' },
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: '4MP IR Dome Camera', brand: 'Trueview', cat: 'IP Cameras', mrp: 5500, dp: 4200, icon: '📷', badge: 'new', stock: 248, desc: 'H.265+, 30m IR, IP67 weatherproof', imageLabel: 'image31' },
  { id: 'p2', name: '8MP IP Bullet Camera', brand: 'Trueview', cat: 'IP Cameras', mrp: 7200, dp: 5800, icon: '📸', badge: '', stock: 124, desc: '4K Ultra HD, AI human detection, 50m IR', imageLabel: 'image32' },
  { id: 'p3', name: '2MP HD Dome Camera', brand: 'Trueview', cat: 'IP Cameras', mrp: 2800, dp: 2100, icon: '🎥', badge: '', stock: 320, desc: 'H.265, 20m Smart IR, IP66 housing', imageLabel: 'image33' },
  { id: 'p4', name: 'PTZ Camera 4MP 25x Zoom', brand: 'Hikvision', cat: 'IP Cameras', mrp: 19000, dp: 14500, icon: '🔭', badge: '', stock: 34, desc: '25x optical zoom, 100m IR distance, auto-tracking', imageLabel: 'image34' },
  { id: 'p5', name: '5MP ColorVu Camera', brand: 'Hikvision', cat: 'IP Cameras', mrp: 9500, dp: 7200, icon: '🌈', badge: 'hot', stock: 88, desc: 'Full 24/7 vivid color night vision, F1.0 super aperture', imageLabel: 'image35' },
  { id: 'p6', name: '8CH NVR 4K Ultra', brand: 'Hikvision', cat: 'NVR / DVR', mrp: 16000, dp: 12500, icon: '📡', badge: 'hot', stock: 84, desc: '8-channel decoding, up to 4K resolution, 2 SATA HDD bays, H.265+', imageLabel: 'image36' },
  { id: 'p7', name: '16CH NVR H.265+', brand: 'Hikvision', cat: 'NVR / DVR', mrp: 24000, dp: 18500, icon: '🖥️', badge: '', stock: 42, desc: '16-channel, 4K display output, 4 SATA interfaces up to 40TB', imageLabel: 'image37' },
  { id: 'p8', name: '8CH DVR AHD 5MP', brand: 'Prama', cat: 'NVR / DVR', mrp: 8500, dp: 6800, icon: '📺', badge: '', stock: 96, desc: '5MP HD analog input, H.265+ high compression, 1 HDD bay', imageLabel: 'image38' },
  { id: 'p9', name: 'PoE Switch 8 Port (120W)', brand: 'Fyber', cat: 'Networking', mrp: 4800, dp: 3800, icon: '🔌', badge: '', stock: 156, desc: '8 10/100M PoE ports + 2 Gigabit Uplink ports, 120W power budget', imageLabel: 'image39' },
  { id: 'p10', name: 'PoE Switch 16 Port (240W)', brand: 'Fyber', cat: 'Networking', mrp: 9000, dp: 7200, icon: '🌐', badge: '', stock: 68, desc: '16 PoE ports + 2 Gigabit SFP Uplink ports, 240W heavy duty', imageLabel: 'image40' },
  { id: 'p11', name: 'Gigabit Router 4 Port', brand: 'Trionet', cat: 'Networking', mrp: 3200, dp: 2400, icon: '📶', badge: '', stock: 212, desc: '4 Gigabit LAN, 1 Gigabit WAN, intelligent QoS bandwidth control', imageLabel: 'image41' },
  { id: 'p12', name: '4TB Surveillance HDD 24x7', brand: 'Toshiba', cat: 'Storage', mrp: 8500, dp: 6800, icon: '💾', badge: 'hot', stock: 188, desc: '5400 RPM, engineered for continuous 24×7 multi-stream recording', imageLabel: 'image42' },
  { id: 'p13', name: '2TB Purple HDD 24x7', brand: 'Toshiba', cat: 'Storage', mrp: 5000, dp: 3900, icon: '🗄️', badge: '', stock: 244, desc: '64MB Cache, 5400 RPM, dedicated for CCTV surveillance recording', imageLabel: 'image43' },
  { id: 'p14', name: 'Access Control Kit RFID + Fingerprint', brand: 'Maxxion', cat: 'Access Control', mrp: 11500, dp: 8900, icon: '🔐', badge: '', stock: 52, desc: 'Standalone RFID + biometric reader with magnetic lock & exit switch', imageLabel: 'image44' },
  { id: 'p15', name: 'Fingerprint Biometric Time-Attendance', brand: 'Maxxion', cat: 'Access Control', mrp: 5500, dp: 4200, icon: '👆', badge: 'new', stock: 76, desc: '1,000 fingerprint capacity, TCP/IP & USB communication, cloud software', imageLabel: 'image45' },
  { id: 'p16', name: '12V 5A SMPS Power Supply', brand: 'Yadon', cat: 'Power Supply', mrp: 900, dp: 680, icon: '🔋', badge: '', stock: 480, desc: '12V DC regulated output, 5A, surge & short-circuit protected', imageLabel: 'image46' },
  { id: 'p17', name: 'CAT6 LAN Cable 305m Pure Copper', brand: 'Fyber', cat: 'Accessories', mrp: 5500, dp: 4200, icon: '📻', badge: '', stock: 98, desc: '305m easy-pull box, 100% solid bare copper, verified Gigabit performance', imageLabel: 'image47' },
  { id: 'p18', name: 'Smart Home Hub Wi-Fi + Zigbee', brand: 'Qubo', cat: 'Accessories', mrp: 4200, dp: 3200, icon: '🏠', badge: 'new', stock: 62, desc: 'Universal wireless smart gateway supporting up to 64 sensors and alarms', imageLabel: 'image48' },
];

export const TRUST_CARDS = [
  { icon: '🏆', title: '15+ Years', desc: 'Distribution excellence' },
  { icon: '🤝', title: '4,000+ Dealers', desc: 'Trusted nationwide' },
  { icon: '🏢', title: '100% Distribution', desc: 'Pure distribution business' },
  { icon: '💰', title: 'High Margins', desc: 'Exclusive brand portfolio' },
  { icon: '🛠️', title: 'Technical Support', desc: 'Dedicated in-house team' },
  { icon: '🚀', title: 'Dealer Growth', desc: 'Committed to your success' },
];

export const BRANCHES = [
  { city: 'Chennai (Head Office)', address: 'Ritchie Street, Chennai 600002', phone: '+91 98400 01515', tag: 'HO' },
  { city: 'Delhi NCR', address: 'Nehru Place Commercial Complex, New Delhi', phone: '+91 98400 01515', tag: 'Hub' },
  { city: 'Hyderabad', address: 'Secunderabad Electronics Market, Hyderabad', phone: '+91 98400 01515', tag: 'Branch' },
  { city: 'Bangalore', address: 'SP Road Technology Hub, Bangalore', phone: '+91 98400 01515', tag: 'Hub' },
  { city: 'Surat', address: 'Ring Road Commercial Arcade, Surat', phone: '+91 98400 01515', tag: 'Branch' },
];
