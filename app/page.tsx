import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import TestimonialCard from '@/components/TestimonialCard';
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic';

export default async function HomePage() {
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ]);

  const featuredServices = services.slice(0, 3);
  const featuredTeam = teamMembers.slice(0, 4);
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-electric-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          {featuredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No services available yet.</p>
          )}

          {services.length > 3 && (
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-electric-600 hover:text-electric-700 font-semibold transition-colors"
              >
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-electric-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our People
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Meet the Warriors
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals passionate about delivering exceptional results.
            </p>
          </div>

          {featuredTeam.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No team members available yet.</p>
          )}

          {teamMembers.length > 4 && (
            <div className="text-center mt-10">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-electric-600 hover:text-electric-700 font-semibold transition-colors"
              >
                Meet the Full Team
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-electric-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Case Studies
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Real projects, real results. See how we help businesses transform.
            </p>
          </div>

          {featuredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No case studies available yet.</p>
          )}

          {caseStudies.length > 3 && (
            <div className="text-center mt-10">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-semibold transition-colors"
              >
                View All Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-electric-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Client Feedback
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped succeed.
            </p>
          </div>

          {featuredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No testimonials available yet.</p>
          )}

          {testimonials.length > 3 && (
            <div className="text-center mt-10">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-electric-600 hover:text-electric-700 font-semibold transition-colors"
              >
                Read All Testimonials
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-electric-600 to-electric-800">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-electric-100 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how Digital Warriors can help you achieve your goals.
            Get in touch today for a free consultation.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white text-electric-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Our Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}