export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface StatMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  subLabel: string;
  description: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  featuredItems: {
    name: string;
    specs: string;
    application: string;
  }[];
  keyCapabilities: string[];
}

export interface BrandPartner {
  name: string;
  category: string;
  specialty: string;
  badge?: string;
  description: string;
}

export interface CoreDifferentiator {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlightTag?: string;
}

export interface BranchLocation {
  id: string;
  city: string;
  state: string;
  type: 'Head Office' | 'Regional Hub';
  address: string;
  phone: string;
  email: string;
  coverageArea: string;
  isHeadquarter?: boolean;
  coordinates: { x: number; y: number }; // Relative SVG % coordinates on India map
  transitTime: string;
}

export interface OperationalStep {
  step: string;
  title: string;
  summary: string;
  details: string;
  iconName: string;
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface DigitalCapability {
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}

export interface DealerPillar {
  title: string;
  summary: string;
  perks: string[];
  iconName: string;
}

export interface PortalProduct {
  id: string;
  name: string;
  brand: string;
  cat: string;
  mrp: number;
  dp: number;
  icon: string;
  badge?: string;
  stock: number;
  desc: string;
}

export interface PortalBrand {
  name: string;
  sub: string;
  emoji: string;
  img?: string;
}

export interface PortalCategory {
  name: string;
  emoji: string;
  count: number;
}
