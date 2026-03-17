import { Smartphone, Wrench, RefreshCw, Laptop, Speaker, ShoppingBag, Cigarette, Wind, Package, Tablet, ArrowRight } from 'lucide-react';

const prepaidCarriers = [
  'Sprint', 'Boost Mobile', 'AT&T', 'Virgin Mobile', 'T-Mobile', 'Verizon Wireless',
  'Metro PCS', 'H2O Wireless', 'Net 10 Wireless', 'Page Plus', 'Simple Mobile', 'Airvoice', 'Gen Mobile', 'And More!'
];

const repairServices = [
  { name: 'iPhone Screen Repair', desc: 'Cracked screens fixed fast' },
  { name: 'Samsung Repair', desc: 'All Galaxy models supported' },
  { name: 'Android Phones', desc: 'All brands and models' },
  { name: 'Battery Replacement', desc: 'Get your battery life back' },
  { name: 'Charging Port Repair', desc: 'Fix connection issues' },
  { name: 'Water Damage', desc: 'Recovery services available' },
];

const buyAndSell = [
  { name: 'Smartphones', desc: 'Buy and sell phones' },
  { name: 'Tablets', desc: 'iPads and Android tablets' },
  { name: 'Laptops', desc: 'Trade in your old laptop' },
  { name: 'Electronics', desc: 'Various electronics accepted' },
];

const otherProducts = [
  { icon: Laptop, name: 'Laptops', desc: 'Quality pre-owned laptops' },
  { icon: Speaker, name: 'Speakers', desc: 'Bluetooth and wired speakers' },
  { icon: ShoppingBag, name: 'Phone Cases', desc: 'Huge selection for all phones' },
  { icon: Package, name: 'Chargers', desc: 'Cables and charging accessories' },
  { icon: ShoppingBag, name: 'Apparel', desc: 'Clothing and accessories' },
  { icon: Cigarette, name: 'Tobacco Products', desc: 'Quality tobacco selection' },
  { icon: Wind, name: 'Disposable Vapes', desc: 'JUUL, and other devices' },
  { icon: Package, name: 'Bongs & Pipes', desc: 'Smoking accessories' },
];

export default function Products() {
  return (
    <div className="pt-20 bg-[#050510] min-h-screen" data-testid="products-page">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <span className="font-accent text-[#39FF14] text-lg tracking-wide">EVERYTHING YOU NEED</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            Products & Services
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl">
            From phone repairs to prepaid activations, tobacco products to electronics — we've got it all under one roof.
          </p>
        </div>
      </section>

      {/* Featured Phones Display */}
      <section className="py-12 md:py-16 border-b border-white/5 bg-[#0A0A18]" data-testid="featured-phones-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 group">
              <img
                src="https://customer-assets.emergentagent.com/job_phones-tobacco-shop/artifacts/nzkugojm_phones2.jpg"
                alt="Wide selection of iPhones available"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-accent text-[#39FF14] text-sm tracking-wide">HUGE SELECTION</span>
                <h3 className="text-2xl font-bold text-white">Quality Pre-Owned iPhones</h3>
                <p className="text-[#94A3B8] text-sm mt-1">All models, all colors, great prices</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 group">
              <img
                src="https://customer-assets.emergentagent.com/job_phones-tobacco-shop/artifacts/lzecy20w_phones1.jpg"
                alt="Prepaid plans and phones display"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-accent text-[#39FF14] text-sm tracking-wide">AFFORDABLE PLANS</span>
                <h3 className="text-2xl font-bold text-white">Prepaid Plans Starting at $20/mo</h3>
                <p className="text-[#94A3B8] text-sm mt-1">No contract, no credit check</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAPTOP & TABLET REPAIR - Featured Section */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-gradient-to-b from-[#050510] to-[#0A0A18]" data-testid="laptop-tablet-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#39FF14]">
              <Laptop className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="font-accent text-[#39FF14] text-sm tracking-wide">NOW FEATURING</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Laptop & Tablet Repair</h2>
              <p className="text-[#94A3B8] mt-1">Expert repairs for all your devices — not just phones!</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0A0A18] border-2 border-[#007AFF]/30 rounded-xl p-6 hover:border-[#007AFF] transition-colors">
              <div className="w-14 h-14 bg-[#007AFF]/20 rounded-xl flex items-center justify-center mb-4">
                <Laptop className="w-7 h-7 text-[#007AFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Laptop Repair</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full" />
                  Screen replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full" />
                  Keyboard repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full" />
                  Battery replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full" />
                  Virus removal
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full" />
                  Data recovery
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0A0A18] border-2 border-[#39FF14]/30 rounded-xl p-6 hover:border-[#39FF14] transition-colors">
              <div className="w-14 h-14 bg-[#39FF14]/20 rounded-xl flex items-center justify-center mb-4">
                <Tablet className="w-7 h-7 text-[#39FF14]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tablet Repair</h3>
              <ul className="space-y-2 text-[#94A3B8] text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#007AFF] rounded-full" />
                  iPad screen repair
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#007AFF] rounded-full" />
                  Samsung Galaxy Tab
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#007AFF] rounded-full" />
                  Android tablets
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#007AFF] rounded-full" />
                  Battery replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#007AFF] rounded-full" />
                  Charging port fix
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0A0A18] border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-bold text-[#39FF14] mb-2">20</div>
              <div className="text-white font-semibold mb-1">Minutes or Less</div>
              <p className="text-[#94A3B8] text-sm">Most repairs completed while you wait</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Repair Showcase */}
      <section className="py-16 md:py-20 border-b border-white/5" data-testid="before-after-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="font-accent text-[#39FF14] text-lg tracking-wide">SEE THE DIFFERENCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Before & After</h2>
            <p className="text-[#94A3B8] mt-2 max-w-xl mx-auto">
              We turn broken screens into like-new devices. Fast, affordable, and quality guaranteed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <div className="relative group">
              <div className="absolute -top-3 left-4 z-10">
                <span className="bg-[#FF3B30] text-white font-bold text-sm px-4 py-1 rounded-full uppercase tracking-wide">
                  Before
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-[#FF3B30]/30">
                <img
                  src="https://customer-assets.emergentagent.com/job_phones-tobacco-shop/artifacts/bn94jwem_before1.jpg"
                  alt="Phone with cracked screen before repair"
                  className="w-full h-72 object-cover"
                />
              </div>
              <p className="text-[#94A3B8] text-sm mt-3 text-center">Shattered screen, unusable device</p>
            </div>
            
            {/* After */}
            <div className="relative group">
              <div className="absolute -top-3 left-4 z-10">
                <span className="bg-[#39FF14] text-black font-bold text-sm px-4 py-1 rounded-full uppercase tracking-wide">
                  After
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-[#39FF14]/30">
                <img
                  src="https://customer-assets.emergentagent.com/job_phones-tobacco-shop/artifacts/20hmngbk_after1.jpg"
                  alt="Phone with repaired screen after repair"
                  className="w-full h-72 object-cover"
                />
              </div>
              <p className="text-[#94A3B8] text-sm mt-3 text-center">Like new in 20 minutes!</p>
            </div>
          </div>
          
          {/* Arrow indicator for mobile */}
          <div className="flex justify-center mt-6 md:hidden">
            <ArrowRight className="w-8 h-8 text-[#39FF14] rotate-90" />
          </div>
        </div>
      </section>

      {/* Prepaid Mobile Plans */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-[#0A0A18]" data-testid="prepaid-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#007AFF]">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Prepaid Mobile Plans & Activation</h2>
              <p className="text-[#94A3B8] mt-1">Get connected with your favorite carrier. Fast activations and refills available.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {prepaidCarriers.map((carrier) => (
              <div
                key={carrier}
                className="bg-[#050510] border border-white/5 rounded-lg px-4 py-3 text-center hover:border-[#007AFF]/50 transition-colors"
              >
                <span className="text-[#F8FAFC] font-medium">{carrier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Repair */}
      <section className="py-16 md:py-20 border-b border-white/5" data-testid="repair-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#39FF14]">
              <Wrench className="w-8 h-8 text-black" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Phone Repair</h2>
              <p className="text-[#94A3B8] mt-1">Fast, reliable repairs by experienced technicians. Most repairs done in 20 minutes or less!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
              <div
                key={service.name}
                className="bg-[#0A0A18] border border-white/5 rounded-xl p-6 hover:border-[#39FF14]/50 transition-colors group"
              >
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#39FF14] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[#94A3B8] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy & Sell */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-[#0A0A18]" data-testid="buy-sell-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#007AFF]">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Buy & Sell</h2>
              <p className="text-[#94A3B8] mt-1">Trade in your old devices for cash or find great deals on quality pre-owned electronics.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyAndSell.map((item) => (
              <div
                key={item.name}
                className="bg-[#050510] border border-white/5 rounded-xl p-6 hover:border-[#007AFF]/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className="text-[#94A3B8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 md:py-20" data-testid="other-products-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#39FF14]">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Other Products</h2>
              <p className="text-[#94A3B8] mt-1">Accessories, tobacco, vapes, and more — all under one roof.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.map((item) => (
              <div
                key={item.name}
                className="bg-[#0A0A18] border border-white/5 rounded-xl p-6 hover:border-[#007AFF]/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#007AFF]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#007AFF]/30 transition-colors">
                  <item.icon className="w-6 h-6 text-[#007AFF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className="text-[#94A3B8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
