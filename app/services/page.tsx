import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { getServices } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Our Services | Digital Warriors',
  description: 'Explore the comprehensive professional services offered by Digital Warriors.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <p className="text-electric-400 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From strategy to execution, we deliver end-to-end digital solutions
            that help businesses grow and thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Services Yet</h3>
              <p className="text-gray-500">Check back soon for our full service offerings.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}