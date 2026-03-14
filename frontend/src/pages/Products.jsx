import { Smartphone, Wrench, RefreshCw, Laptop, Speaker, ShoppingBag, Cigarette, Wind, Package } from 'lucide-react';

const prepaidCarriers = [
  'Sprint', 'Boost Mobile', 'AT&T', 'Virgin Mobile', 'T-Mobile', 'Verizon Wireless',
  'Metro PCS', 'H2O Wireless', 'Net 10 Wireless', 'Page Plus', 'Simple Mobile', 'Airvoice', 'And More!'
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

      {/* Prepaid Mobile Plans */}
      <section className="py-16 md:py-20 border-b border-white/5" data-testid="prepaid-section">
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
                className="bg-[#0A0A18] border border-white/5 rounded-lg px-4 py-3 text-center hover:border-[#007AFF]/50 transition-colors"
              >
                <span className="text-[#F8FAFC] font-medium">{carrier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Repair */}
      <section className="py-16 md:py-20 border-b border-white/5 bg-[#0A0A18]" data-testid="repair-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#39FF14]">
              <Wrench className="w-8 h-8 text-black" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Electronics Repair</h2>
              <p className="text-[#94A3B8] mt-1">Fast, reliable repairs by experienced technicians. Most repairs done in 20 minutes or less!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
              <div
                key={service.name}
                className="bg-[#050510] border border-white/5 rounded-xl p-6 hover:border-[#39FF14]/50 transition-colors group"
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
      <section className="py-16 md:py-20 border-b border-white/5" data-testid="buy-sell-section">
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
                className="bg-[#0A0A18] border border-white/5 rounded-xl p-6 hover:border-[#007AFF]/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className="text-[#94A3B8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16 md:py-20 bg-[#0A0A18]" data-testid="other-products-section">
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
                className="bg-[#050510] border border-white/5 rounded-xl p-6 hover:border-[#007AFF]/50 transition-colors group"
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
