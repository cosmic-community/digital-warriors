import type { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';
import { getTestimonials } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Testimonials | Digital Warriors',
  description: 'Hear from our satisfied clients about their experience working with Digital Warriors.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <p className="text-electric-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Client Feedback
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Testimonials
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear what our clients have to say
            about working with Digital Warriors.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Testimonials Yet</h3>
              <p className="text-gray-500">Client feedback will appear here soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}