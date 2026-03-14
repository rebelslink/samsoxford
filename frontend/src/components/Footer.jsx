import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050510] border-t border-white/5 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded bg-[#007AFF] flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">SAM'S</span>
                <span className="text-[#94A3B8] text-xs block -mt-1">PHONES & TOBACCO</span>
              </div>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Your one-stop shop for phone repairs, prepaid plans, electronics, and tobacco products in Oxford, MS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products & Services', path: '/products' },
                { name: 'Store Policies', path: '/policies' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#94A3B8] hover:text-[#007AFF] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#94A3B8] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#007AFF] flex-shrink-0" />
                <span>1418 W. Jackson Ave.<br />Oxford, MS 38655</span>
              </li>
              <li className="flex items-center gap-3 text-[#94A3B8] text-sm">
                <Phone className="w-4 h-4 text-[#007AFF] flex-shrink-0" />
                <a href="tel:662-513-0004" className="hover:text-[#007AFF] transition-colors">
                  662-513-0004
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8] text-sm">
                <Clock className="w-4 h-4 mt-0.5 text-[#007AFF] flex-shrink-0" />
                <span>Open Daily</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[#475569] text-sm">
            © {new Date().getFullYear()} Sam's Phones & Tobacco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
