import Link from 'next/link';
import { getMetafieldValue } from '@/lib/cosmic';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const name = getMetafieldValue(service.metadata?.name) || service.title;
  const summary = getMetafieldValue(service.metadata?.summary);
  const icon = getMetafieldValue(service.metadata?.icon);
  const featuredImage = service.metadata?.featured_image;

  return (
    <Link href={`/services/${service.slug}`} className="group">
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden card-hover h-full flex flex-col">
        {featuredImage && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={200}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            {icon && <span className="text-3xl flex-shrink-0">{icon}</span>}
            <h3 className="text-xl font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
              {name}
            </h3>
          </div>

          {summary && (
            <p className="text-gray-600 leading-relaxed flex-1">{summary}</p>
          )}

          <div className="mt-4 flex items-center gap-2 text-electric-600 font-semibold text-sm">
            Learn more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}