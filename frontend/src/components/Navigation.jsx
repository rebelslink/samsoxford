import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Store Policies', path: '/policies' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5" data-testid="main-navigation">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="nav-logo">
            <div className="w-10 h-10 rounded bg-[#007AFF] flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-white tracking-tight">SAM'S</span>
              <span className="text-[#94A3B8] text-xs block -mt-1">PHONES & TOBACCO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-colors hover:text-[#007AFF] ${
                  isActive(link.path) ? 'text-[#007AFF]' : 'text-[#94A3B8]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:662-513-0004" data-testid="nav-call-btn">
              <Button className="bg-[#007AFF] hover:bg-[#0066CC] text-white font-bold uppercase text-xs tracking-wide shadow-[0_0_15px_rgba(0,122,255,0.3)]">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1418+W+Jackson+Ave+Oxford+MS+38655"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-directions-btn"
            >
              <Button variant="outline" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black font-bold uppercase text-xs tracking-wide">
                <MapPin className="w-4 h-4 mr-2" />
                Directions
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block py-2 text-base font-medium ${
                  isActive(link.path) ? 'text-[#007AFF]' : 'text-[#94A3B8]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:662-513-0004" data-testid="mobile-call-btn">
                <Button className="w-full bg-[#007AFF] hover:bg-[#0066CC] text-white font-bold uppercase text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 662-513-0004
                </Button>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1418+W+Jackson+Ave+Oxford+MS+38655"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-directions-btn"
              >
                <Button variant="outline" className="w-full border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black font-bold uppercase text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
