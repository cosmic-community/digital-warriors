import { getMetafieldValue } from '@/lib/cosmic';
import StarRating from '@/components/StarRating';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const quote = getMetafieldValue(testimonial.metadata?.quote);
  const clientName = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title;
  const clientRole = getMetafieldValue(testimonial.metadata?.client_role);
  const company = getMetafieldValue(testimonial.metadata?.company);
  const clientPhoto = testimonial.metadata?.client_photo;
  const rating = testimonial.metadata?.rating;
  const ratingNum = typeof rating === 'number' ? rating : parseInt(String(rating || '0'), 10);

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 card-hover h-full flex flex-col">
      {/* Quote Icon */}
      <svg className="w-10 h-10 text-electric-200 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
      </svg>

      {/* Rating */}
      {ratingNum > 0 && (
        <div className="mb-3">
          <StarRating rating={ratingNum} />
        </div>
      )}

      {/* Quote */}
      {quote && (
        <p className="text-gray-700 leading-relaxed flex-1 italic mb-6">
          &ldquo;{quote}&rdquo;
        </p>
      )}

      {/* Client Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        {clientPhoto ? (
          <img
            src={`${clientPhoto.imgix_url}?w=100&h=100&fit=crop&auto=format,compress&crop=faces`}
            alt={clientName}
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center ring-2 ring-gray-100">
            <span className="text-white font-bold text-sm">
              {clientName.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-navy-900 text-sm">{clientName}</p>
          <p className="text-gray-500 text-xs">
            {[clientRole, company].filter(Boolean).join(' at ')}
          </p>
        </div>
      </div>
    </div>
  );
}