import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ShoppingCart,
  Heart,
  Phone,
  ShieldCheck,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
  Filter,
  Lock,
  Layers,
  Sparkles,
  Truck
} from 'lucide-react';
import {
  AUTHORISED_BRANDS,
  ALL_PRODUCTS,
  getBrandByQuery,
  CatalogProduct,
  BrandInfo
} from '../data/brandCatalogData';

export const BrandPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // 1. Current Brand selection from URL
  const brandQuery = searchParams.get('brand') || 'PRAMA';
  const currentBrand: BrandInfo = useMemo(() => getBrandByQuery(brandQuery), [brandQuery]);

  // Sync document title
  useEffect(() => {
    document.title = `${currentBrand.name} Wholesale Catalog — Realtech Vision`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentBrand]);

  // 2. Filter states
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'name'>('default');

  // Reset category filter when brand changes
  useEffect(() => {
    setActiveCategory('all');
    setSearchQuery('');
  }, [currentBrand.slug]);

  // 3. User & Cart state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('rtv_dealer_logged_in') === 'true';
    } catch {
      return false;
    }
  });

  const [dealerPhone, setDealerPhone] = useState<string>(() => {
    try {
      return localStorage.getItem('rtv_dealer_phone') || '';
    } catch {
      return '';
    }
  });

  interface CartItem extends CatalogProduct {
    qty: number;
  }

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('rtv_brand_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favs, setFavs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rtv_brand_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [otpInput, setOtpInput] = useState(['', '', '', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(30);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cartNote, setCartNote] = useState('');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('rtv_brand_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // Persist favs
  useEffect(() => {
    try {
      localStorage.setItem('rtv_brand_favs', JSON.stringify(favs));
    } catch {}
  }, [favs]);

  // OTP Timer countdown
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (otpStep && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpStep, otpTimer]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Products belonging to the selected brand
  const brandProducts = useMemo(() => {
    const brandNorm = currentBrand.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return ALL_PRODUCTS.filter((p) => {
      const pBrandNorm = p.brand.toLowerCase().replace(/[^a-z0-9]/g, '');
      return pBrandNorm === brandNorm;
    });
  }, [currentBrand]);

  // Unique categories for the current brand
  const brandCategories = useMemo(() => {
    const cats = new Set<string>();
    brandProducts.forEach((p) => cats.add(p.cat));
    currentBrand.categories.forEach((c) => cats.add(c));
    return Array.from(cats);
  }, [brandProducts, currentBrand]);

  // Filtered & Sorted products
  const displayProducts = useMemo(() => {
    let prods = [...brandProducts];

    // Category filter
    if (activeCategory === '__fast__') {
      prods = prods.filter((p) => p.badge === 'top' || p.badge === 'hot');
    } else if (activeCategory !== 'all') {
      prods = prods.filter((p) => p.cat.toLowerCase() === activeCategory.toLowerCase());
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      prods = prods.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.cat.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      prods.sort((a, b) => a.dp - b.dp);
    } else if (sortBy === 'price-high') {
      prods.sort((a, b) => b.dp - a.dp);
    } else if (sortBy === 'name') {
      prods.sort((a, b) => a.name.localeCompare(b.name));
    }

    return prods;
  }, [brandProducts, activeCategory, searchQuery, sortBy]);

  // Handle switching brand
  const handleSelectBrand = (slug: string) => {
    setSearchParams({ brand: slug });
  };

  // Cart actions
  const addToCart = (product: CatalogProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`Added to trade list: ${product.name}`);
  };

  const updateCartQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Removed from cart');
  };

  const toggleFavorite = (productId: string) => {
    setFavs((prev) => {
      const isFav = prev.includes(productId);
      if (isFav) {
        showToast('Removed from favourites');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to trade shortlist ❤️');
        return [...prev, productId];
      }
    });
  };

  // Cart calculations
  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.dp * item.qty, 0);
  const cartGst = Math.round(cartSubtotal * 0.18);
  const cartTotal = cartSubtotal + cartGst;

  // Login / OTP handling
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneInput.trim().length !== 10) {
      alert('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    setOtpStep(true);
    setOtpTimer(30);
    showToast('Demo OTP sent: Use 123456');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setDealerPhone(phoneInput);
    try {
      localStorage.setItem('rtv_dealer_logged_in', 'true');
      localStorage.setItem('rtv_dealer_phone', phoneInput);
    } catch {}
    setLoginModalOpen(false);
    setOtpStep(false);
    showToast('Verified & Logged in as Trade Partner');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDealerPhone('');
    try {
      localStorage.removeItem('rtv_dealer_logged_in');
      localStorage.removeItem('rtv_dealer_phone');
    } catch {}
    showToast('Logged out');
  };

  // WhatsApp order submission
  const handlePlaceOrderWhatsApp = () => {
    if (!cart.length && !cartNote.trim()) {
      alert('Please add products to your cart or enter a custom requirement note.');
      return;
    }

    let text = `*New Trade Order Inquiry via Realtech Vision Portal*\n`;
    text += `*Brand:* ${currentBrand.name}\n`;
    if (isLoggedIn && dealerPhone) {
      text += `*Dealer Phone:* +91 ${dealerPhone}\n`;
    }
    text += `------------------------------------\n`;

    if (cart.length > 0) {
      cart.forEach((item, index) => {
        text += `${index + 1}. *${item.name}*\n`;
        text += `   Qty: ${item.qty} | MOP: ₹${item.dp.toLocaleString('en-IN')}/pc | Total: ₹${(
          item.dp * item.qty
        ).toLocaleString('en-IN')}\n`;
      });
      text += `------------------------------------\n`;
      text += `*Subtotal:* ₹${cartSubtotal.toLocaleString('en-IN')}\n`;
      text += `*GST (18%):* ₹${cartGst.toLocaleString('en-IN')}\n`;
      text += `*Estimated Grand Total:* ₹${cartTotal.toLocaleString('en-IN')}\n`;
    }

    if (cartNote.trim()) {
      text += `\n*Special Notes / Additional Models Needed:*\n${cartNote.trim()}\n`;
    }

    text += `\nPlease confirm trade dispatch SLA from Ritchie Street Central Warehouse.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919840001515?text=${encoded}`, '_blank');
  };

  const handleProductWhatsApp = (prod: CatalogProduct) => {
    const text = `Hello Realtech Vision, I am inquiring about dealer trade pricing for *${prod.brand} - ${prod.name}* (ID: ${prod.id}). Please share immediate Ritchie Street dispatch availability and volume slab pricing.`;
    window.open(`https://wa.me/919840001515?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white font-sans antialiased selection:bg-[#FF5A00] selection:text-white">
      {/* 1. TOPBAR (Sticky Glass Navigation) */}
      <header className="sticky top-0 z-40 bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-[#14161B] border border-white/10 flex items-center justify-center p-2 shadow-inner">
              <img
                src="/favicon.png"
                alt="Realtech Vision"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-manrope font-extrabold text-[17px] text-white tracking-[-0.03em] leading-tight">
                REALTECH <span className="text-[#FF5A00]">VISION</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Wholesale Portal
              </span>
            </div>
          </Link>

          {/* Product Search Bar */}
          <div className="flex-1 max-w-md mx-2 relative hidden sm:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentBrand.name} model, category or specs...`}
              className="w-full pl-10 pr-9 py-2.5 bg-white/[0.04] border border-white/10 rounded-full text-xs sm:text-[13px] text-white placeholder-white/35 focus:outline-none focus:border-[#FF5A00] focus:bg-white/[0.07] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Back to Home Button */}
            <button
              onClick={() => navigate('/')}
              className="px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/90 flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span className="hidden md:inline">Back to Overview</span>
            </button>

            {/* Dealer Login or Account Status */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-2.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-white">
                    Dealer +91 {dealerPhone.slice(-4)}
                  </div>
                  <div className="text-[9px] font-semibold text-[#FF5A00] uppercase tracking-wider">
                    Trade Verified
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="w-7 h-7 rounded-full bg-[#FF5A00] text-white font-bold text-xs flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors"
                >
                  ✓
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginModalOpen(true)}
                className="btn-orange-primary px-4 py-2 text-xs font-bold flex items-center space-x-1.5 cursor-pointer"
              >
                <Lock size={13} />
                <span>Dealer Login</span>
              </button>
            )}

            {/* Cart Icon */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white cursor-pointer transition-colors"
              title="View Cart"
            >
              <ShoppingCart size={18} />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF5A00] text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-lg">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="sm:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentBrand.name} products...`}
              className="w-full pl-10 pr-9 py-2 bg-white/[0.05] border border-white/10 rounded-full text-xs text-white placeholder-white/35 focus:outline-none focus:border-[#FF5A00]"
            />
          </div>
        </div>
      </header>

      {/* 2. BRAND HERO BANNER */}
      <section className="relative bg-gradient-to-br from-[#14161C] via-[#0F1014] to-[#0B0C0E] text-white py-14 px-6 overflow-hidden border-b border-white/[0.08]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A00]/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          {/* Brand Logo Box */}
          <div className="w-36 h-28 sm:w-44 sm:h-32 bg-[#1A1D24] rounded-2xl flex flex-col items-center justify-center p-4 shrink-0 shadow-2xl border border-white/10 group">
            <span className="text-4xl sm:text-5xl mb-1.5 transform group-hover:scale-110 transition-transform duration-300">
              {currentBrand.emoji}
            </span>
            <span className="font-manrope font-extrabold text-xs sm:text-sm text-white tracking-wider uppercase">
              {currentBrand.name}
            </span>
          </div>

          {/* Brand Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-bold text-[#FF5A00] uppercase tracking-[0.2em] mb-4">
              <ShieldCheck size={13} />
              <span>Authorised OEM Supply Line</span>
            </div>

            <h1 className="font-manrope text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {currentBrand.name}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed mb-6">
              {currentBrand.sub}. {currentBrand.description}
            </p>

            {/* Stat Counters Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 border-t border-white/[0.08] pt-6">
              <div>
                <div className="font-manrope text-2xl font-bold text-white">
                  {brandProducts.length}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mt-0.5">
                  Available Models
                </div>
              </div>

              <div>
                <div className="font-manrope text-2xl font-bold text-white">
                  {brandCategories.length}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mt-0.5">
                  Categories
                </div>
              </div>

              <div>
                <div className="font-manrope text-2xl font-bold text-white">
                  {currentBrand.partnerYears || '15+'}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mt-0.5">
                  Years Sourced
                </div>
              </div>

              <div>
                <div className="font-manrope text-2xl font-bold text-[#FF5A00]">
                  Same-Day
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mt-0.5">
                  Dispatch SLA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 27-BRAND QUICK SWITCHER CHIPS */}
      <div className="bg-[#0B0C0E] border-b border-white/[0.08] py-3.5 px-4 sm:px-6 overflow-x-auto scrollbar-thin">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 min-w-max">
          <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider mr-2 flex items-center">
            All 27 Brands:
          </span>
          {AUTHORISED_BRANDS.map((brand) => {
            const isActive =
              brand.slug.toUpperCase() === currentBrand.slug.toUpperCase() ||
              brand.name.toLowerCase() === currentBrand.name.toLowerCase();
            return (
              <button
                key={brand.id}
                onClick={() => handleSelectBrand(brand.slug)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-[#FF5A00] text-white shadow-lg font-bold scale-105'
                    : 'bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                <span>{brand.emoji}</span>
                <span>{brand.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. CATEGORY FILTER TILES */}
      <div className="bg-[#0E1015] border-b border-white/[0.08] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-3">
            Filter by Category:
          </div>

          <div className="flex flex-wrap gap-2.5">
            {/* All Products Tile */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'border-[#FF5A00] bg-[#FF5A00]/15 text-white font-bold shadow-sm'
                  : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20'
              }`}
            >
              <span>📦 All ({brandProducts.length})</span>
            </button>

            {/* Fast Selling Tile */}
            {brandProducts.some((p) => p.badge === 'top' || p.badge === 'hot') && (
              <button
                onClick={() => setActiveCategory('__fast__')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                  activeCategory === '__fast__'
                    ? 'border-[#FF5A00] bg-[#FF5A00]/15 text-white font-bold shadow-sm'
                    : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20'
                }`}
              >
                <span>🔥 Fast Selling</span>
              </button>
            )}

            {/* Dynamic Category Tiles for Brand */}
            {brandCategories.map((cat) => {
              const count = brandProducts.filter(
                (p) => p.cat.toLowerCase() === cat.toLowerCase()
              ).length;
              const isCatActive = activeCategory.toLowerCase() === cat.toLowerCase();

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                    isCatActive
                      ? 'border-[#FF5A00] bg-[#FF5A00]/15 text-white font-bold shadow-sm'
                      : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20'
                  }`}
                >
                  <span className="text-xs">{cat} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. MAIN PRODUCT CATALOG */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Section Header with Title & Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-white/[0.08] gap-4">
          <div>
            <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold text-white">
              {activeCategory === 'all'
                ? `All ${currentBrand.name} Products`
                : activeCategory === '__fast__'
                ? `Fast Selling ${currentBrand.name}`
                : `${activeCategory} — ${currentBrand.name}`}
            </h2>
            <p className="text-xs text-white/50 mt-1">
              Showing {displayProducts.length} verified products ready for same-day dispatch
            </p>
          </div>

          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <label className="text-xs font-semibold text-white/50 hidden sm:inline">
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-[#14161C] border border-white/10 rounded-xl text-xs font-medium text-white focus:outline-none focus:border-[#FF5A00] cursor-pointer"
            >
              <option value="default">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Product Name</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {displayProducts.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] rounded-2xl border border-dashed border-white/10 p-8">
            <span className="text-5xl mb-3 block">📦</span>
            <h3 className="font-manrope text-lg font-bold text-white">
              No products found matching your filter
            </h3>
            <p className="text-xs text-white/50 mt-1 max-w-md mx-auto">
              Try selecting "All Products" above or clear your search query. You can also contact our Ritchie Street sales desk directly for unlisted models.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#FF5A00] text-white rounded-xl text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayProducts.map((p) => {
              const isFav = favs.includes(p.id);

              return (
                <div
                  key={p.id}
                  className="rounded-2xl bg-gradient-to-b from-[#151820] to-[#101217] border border-white/[0.08] hover:border-[#FF5A00]/50 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(255,90,0,0.25)]"
                >
                  {/* Card Visual / Thumbnail */}
                  <div className="relative h-44 bg-[#0B0C0E] flex items-center justify-center p-4 overflow-hidden border-b border-white/[0.06]">
                    {p.badge && (
                      <span className="absolute top-3 left-3 text-[9.5px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#FF5A00] text-white shadow-md">
                        {p.badge === 'top' ? 'TOP SELLER' : p.badge.toUpperCase()}
                      </span>
                    )}

                    <button
                      onClick={() => toggleFavorite(p.id)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 text-white/60 hover:text-[#FF5A00] flex items-center justify-center transition-colors cursor-pointer"
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart size={16} fill={isFav ? '#FF5A00' : 'none'} color={isFav ? '#FF5A00' : 'currentColor'} />
                    </button>

                    <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                      {p.icon}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-wider">
                          {p.brand}
                        </span>
                        <span className="text-[10px] font-medium text-white/40">
                          {p.cat}
                        </span>
                      </div>

                      <h3 className="font-manrope text-sm font-bold text-white leading-snug line-clamp-2 mb-2 group-hover:text-[#FF5A00] transition-colors">
                        {p.name}
                      </h3>

                      <p className="text-[11px] text-white/55 line-clamp-2 leading-relaxed mb-4">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <div className="flex items-center space-x-1.5 text-[11px] font-medium text-emerald-400 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>In Stock · Dispatch Today</span>
                      </div>

                      {/* Trade Pricing Display */}
                      <div className="mb-4">
                        {isLoggedIn ? (
                          <div>
                            <div className="text-xs text-white/40 line-through">
                              MRP: ₹{p.mrp.toLocaleString('en-IN')}
                            </div>
                            <div className="text-base font-extrabold text-[#FF5A00] font-manrope">
                              MOP: ₹{p.dp.toLocaleString('en-IN')}{' '}
                              <span className="text-[10px] text-white/50 font-normal">/pc</span>
                            </div>
                            <div className="text-[10px] text-white/40">Trade Rate · GST Extra</div>
                          </div>
                        ) : (
                          <div
                            onClick={() => setLoginModalOpen(true)}
                            className="bg-white/[0.03] border border-dashed border-white/15 rounded-xl p-2.5 text-center cursor-pointer hover:bg-white/[0.06] transition-colors"
                          >
                            <span className="text-xs font-bold text-[#FF5A00] flex items-center justify-center space-x-1.5">
                              <Lock size={12} />
                              <span>Login for Wholesale MOP</span>
                            </span>
                            <span className="text-[10px] text-white/40 block mt-0.5">
                              Trade dealer prices unlocked
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleProductWhatsApp(p)}
                          className="px-2.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                        >
                          <span>💬 Inquire</span>
                        </button>

                        <button
                          onClick={() => addToCart(p)}
                          className="btn-orange-primary px-2.5 py-2 text-xs font-bold flex items-center justify-center space-x-1 cursor-pointer"
                        >
                          <ShoppingCart size={13} />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[#14161C] border-l border-white/10 p-6 flex flex-col justify-between h-full shadow-2xl overflow-y-auto animate-fade-up">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5 text-[#FF5A00]" />
                  <h3 className="font-manrope text-lg font-bold text-white">Trade Order Inquiry</h3>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-white/50 text-xs">
                  Your trade cart is empty. Add products from the catalog above.
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/08 flex items-center justify-between">
                      <div className="flex-1 mr-3">
                        <div className="text-xs font-bold text-white line-clamp-1">{item.name}</div>
                        <div className="text-[10px] text-white/40">{item.brand} · ₹{item.dp.toLocaleString('en-IN')}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold px-1">{item.qty}</span>
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 ml-2"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-4">
                <label className="block text-xs font-semibold text-white/70 mb-1">
                  Additional Models / Project Requirements:
                </label>
                <textarea
                  value={cartNote}
                  onChange={(e) => setCartNote(e.target.value)}
                  placeholder="Need special cables, extra 4TB HDDs, or bulk quantity slabs..."
                  className="w-full p-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF5A00]"
                  rows={3}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="space-y-1 text-xs text-white/60">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white font-bold">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated GST (18%):</span>
                  <span>₹{cartGst.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#FF5A00] pt-1 border-t border-white/10">
                  <span>Estimated Total:</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrderWhatsApp}
                className="w-full btn-orange-primary py-3.5 text-xs font-bold cursor-pointer"
              >
                Send Wholesale PO via WhatsApp Desk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#14161C] rounded-2xl max-w-sm w-full p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-manrope text-lg font-bold text-white">Dealer Wholesale Login</h3>
              <button onClick={() => setLoginModalOpen(false)} className="text-white/50 hover:text-white">
                <X size={18} />
              </button>
            </div>
            {!otpStep ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">
                    Trade Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9840001515"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm"
                  />
                </div>
                <button type="submit" className="w-full btn-orange-primary py-2.5 text-xs font-bold">
                  Send Trade Verification OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <p className="text-xs text-white/60">Enter verification OTP (Use: 123456)</p>
                <input
                  type="text"
                  required
                  defaultValue="123456"
                  className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-center font-mono text-lg"
                />
                <button type="submit" className="w-full btn-orange-primary py-2.5 text-xs font-bold">
                  Verify &amp; Unlock MOP
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-[#14161C] border border-[#FF5A00]/40 text-white text-xs font-bold shadow-2xl flex items-center space-x-2 animate-fade-up">
          <CheckCircle2 size={16} className="text-[#FF5A00]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
export default BrandPage;
