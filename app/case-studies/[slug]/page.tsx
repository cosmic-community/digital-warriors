// app/case-studies/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getCaseStudies, getMetafieldValue } from '@/lib/cosmic';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return { title: 'Case Study Not Found | Digital Warriors' };
  }

  return {
    title: `${getMetafieldValue(study.metadata?.client_name) || study.title} | Digital Warriors`,
    description: getMetafieldValue(study.metadata?.challenge) || 'Read about our project results.',
  };
}

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const clientName = getMetafieldValue(study.metadata?.client_name) || study.title;
  const challenge = getMetafieldValue(study.metadata?.challenge);
  const solution = getMetafieldValue(study.metadata?.solution);
  const results = getMetafieldValue(study.metadata?.results);
  const featuredImage = study.metadata?.featured_image;
  const gallery = study.metadata?.gallery;
  const service = study.metadata?.service;
  const serviceName = service ? (getMetafieldValue(service.metadata?.name) || service.title) : '';

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          {serviceName && (
            <span className="inline-block bg-electric-600/20 text-electric-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {serviceName}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {clientName}
          </h1>
          <p className="text-lg text-gray-300">{study.title}</p>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="relative -mt-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={`${featuredImage.imgix_url}?w=1400&h=600&fit=crop&auto=format,compress`}
                alt={clientName}
                width={1400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {challenge && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">The Challenge</h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line pl-13">
                    {challenge}
                  </div>
                </div>
              )}

              {solution && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-electric-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">Our Solution</h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line pl-13">
                    {solution}
                  </div>
                </div>
              )}

              {results && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">The Results</h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line pl-13">
                    {results}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-navy-900 mb-4">Project Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500 font-medium">Client</dt>
                      <dd className="text-navy-900 font-semibold">{clientName}</dd>
                    </div>
                    {serviceName && (
                      <div>
                        <dt className="text-sm text-gray-500 font-medium">Service</dt>
                        <dd className="text-navy-900 font-semibold">{serviceName}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="bg-gradient-to-br from-electric-600 to-electric-800 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Start Your Project</h3>
                  <p className="text-electric-100 text-sm mb-4">
                    Ready to achieve similar results for your business?
                  </p>
                  <Link
                    href="/services"
                    className="block w-full text-center bg-white text-electric-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          {gallery && Array.isArray(gallery) && gallery.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={`${clientName} gallery image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}