import type { Metadata } from 'next';
import CaseStudyCard from '@/components/CaseStudyCard';
import { getCaseStudies } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Case Studies | Digital Warriors',
  description: 'Explore our portfolio of successful projects and client transformations.',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <p className="text-electric-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real projects, real results. Discover how we&apos;ve helped businesses
            overcome challenges and achieve their goals.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Case Studies Yet</h3>
              <p className="text-gray-500">Check back soon for our latest project showcases.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}