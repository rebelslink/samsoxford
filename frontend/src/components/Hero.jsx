import { Phone, MapPin, Clock, Star } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20" data-testid="hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_phones-tobacco-shop/artifacts/k2cg6tie_Sams_front.jpg"
          alt="Sam's Phones & Tobacco Storefront"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/60 via-[#050510]/80 to-[#050510]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.1)_0%,rgba(5,5,16,0)_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0A0A18] border border-white/10 rounded-full px-4 py-2 mb-6" data-testid="hero-badge">
            <Clock className="w-4 h-4 text-[#39FF14]" />
            <span className="font-accent text-[#39FF14] text-sm tracking-wide">OPEN NOW</span>
            <span className="text-[#94A3B8] text-xs">• Oxford, MS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4" data-testid="hero-title">
            SAM'S PHONES
            <span className="block text-[#007AFF]">& TOBACCO</span>
          </h1>

          {/* Tagline */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-[#F8FAFC] font-semibold mb-2" data-testid="hero-tagline">
              "If you need it, We've got it!"
            </p>
            <div className="flex items-center gap-4 text-[#39FF14] font-accent text-2xl md:text-3xl tracking-wide">
              <span>BUY</span>
              <span className="w-2 h-2 bg-[#39FF14] rounded-full" />
              <span>SELL</span>
              <span className="w-2 h-2 bg-[#39FF14] rounded-full" />
              <span>FIX</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-8" data-testid="hero-rating">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white font-medium">5.0</span>
            <span className="text-[#94A3B8]">• Trusted by Oxford locals</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:662-513-0004" data-testid="hero-call-btn">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#007AFF] hover:bg-[#0066CC] text-white font-bold uppercase tracking-wide text-base py-6 px-8 shadow-[0_0_20px_rgba(0,122,255,0.4)] animate-pulse-glow"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call 662-513-0004
              </Button>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1418+W+Jackson+Ave+Oxford+MS+38655"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-directions-btn"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black font-bold uppercase tracking-wide text-base py-6 px-8"
              >
                <MapPin className="w-5 h-5 mr-3" />
                Get Directions
              </Button>
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 text-[#94A3B8]" data-testid="hero-address">
            <MapPin className="w-5 h-5 mt-0.5 text-[#007AFF]" />
            <div>
              <p className="text-white font-medium">1418 W. Jackson Ave.</p>
              <p>Oxford, MS 38655</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 bg-[#007AFF]/10 border-y border-[#007AFF]/20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-accent text-2xl text-[#007AFF]/60 mx-8 tracking-widest">
              PHONE REPAIR • PREPAID PLANS • BUY & SELL • TOBACCO • VAPES • ACCESSORIES •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
