// app/services/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServices, getMetafieldValue } from '@/lib/cosmic';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | Digital Warriors' };
  }

  return {
    title: `${getMetafieldValue(service.metadata?.name) || service.title} | Digital Warriors`,
    description: getMetafieldValue(service.metadata?.summary) || 'Learn about our professional service offering.',
  };
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title;
  const summary = getMetafieldValue(service.metadata?.summary);
  const description = getMetafieldValue(service.metadata?.description);
  const icon = getMetafieldValue(service.metadata?.icon);
  const featuredImage = service.metadata?.featured_image;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="flex items-start gap-4 mb-6">
            {icon && (
              <span className="text-5xl">{icon}</span>
            )}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{name}</h1>
              {summary && (
                <p className="text-lg text-gray-300 mt-4 max-w-3xl">{summary}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {description && (
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                  {description}
                </div>
              )}

              {service.content && (
                <div
                  className="prose prose-lg max-w-none mt-8 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              )}
            </div>

            <div className="lg:col-span-1">
              {featuredImage && (
                <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                  <img
                    src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={name}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Interested in this service?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let&apos;s discuss how we can help your business with {name.toLowerCase()}.
                </p>
                <Link
                  href="/services"
                  className="block w-full text-center bg-electric-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-electric-700 transition-colors"
                >
                  Explore More Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}