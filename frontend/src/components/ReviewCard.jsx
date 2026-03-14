import { Star, Quote } from 'lucide-react';

export const ReviewCard = ({ name, date, review, rating = 5 }) => {
  return (
    <div
      className="bg-[#0F0F20] p-6 rounded-xl border border-white/5 h-full flex flex-col"
      data-testid={`review-card-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-[#007AFF]/30 mb-4" />

      {/* Review Text */}
      <p className="text-[#F8FAFC] text-base leading-relaxed flex-grow mb-6">
        "{review}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-[#94A3B8] text-sm">{date}</p>
        </div>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
};
