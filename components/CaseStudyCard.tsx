import Link from 'next/link';
import { getMetafieldValue } from '@/lib/cosmic';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const clientName = getMetafieldValue(study.metadata?.client_name) || study.title;
  const challenge = getMetafieldValue(study.metadata?.challenge);
  const featuredImage = study.metadata?.featured_image;
  const service = study.metadata?.service;
  const serviceName = service ? (getMetafieldValue(service.metadata?.name) || service.title) : '';

  return (
    <Link href={`/case-studies/${study.slug}`} className="group">
      <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden card-hover h-full flex flex-col">
        {featuredImage && (
          <div className="relative h-52 overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={clientName}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
            {serviceName && (
              <span className="absolute top-4 left-4 bg-electric-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {serviceName}
              </span>
            )}
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white group-hover:text-electric-400 transition-colors mb-2">
            {clientName}
          </h3>

          {challenge && (
            <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">
              {challenge}
            </p>
          )}

          <div className="mt-4 flex items-center gap-2 text-electric-400 font-semibold text-sm">
            Read Case Study
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}