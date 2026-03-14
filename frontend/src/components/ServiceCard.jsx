import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ icon: Icon, title, description, image, items, link, accent = false }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border ${
        accent
          ? 'bg-gradient-to-br from-[#007AFF]/20 to-[#0A0A18] border-[#007AFF]/30'
          : 'bg-[#0A0A18] border-white/5 hover:border-[#007AFF]/50'
      } transition-colors h-full`}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A18] via-[#0A0A18]/50 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          {Icon && (
            <div className={`p-3 rounded-lg ${accent ? 'bg-[#007AFF]' : 'bg-[#007AFF]/20'}`}>
              <Icon className={`w-6 h-6 ${accent ? 'text-white' : 'text-[#007AFF]'}`} />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            {description && <p className="text-[#94A3B8] text-sm">{description}</p>}
          </div>
        </div>

        {/* Items List */}
        {items && items.length > 0 && (
          <ul className="space-y-2 mb-4">
            {items.slice(0, 6).map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
            {items.length > 6 && (
              <li className="text-sm text-[#007AFF] font-medium">+ {items.length - 6} more</li>
            )}
          </ul>
        )}

        {/* Link */}
        {link && (
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-[#007AFF] font-medium text-sm hover:gap-3 transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,122,255,0.1)_0%,transparent_50%)]" />
      </div>
    </div>
  );
};
