import type { Metadata } from 'next';
import TeamMemberCard from '@/components/TeamMemberCard';
import { getTeamMembers } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Our Team | Digital Warriors',
  description: 'Meet the talented professionals behind Digital Warriors.',
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center">
          <p className="text-electric-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Our People
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet the Warriors
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A diverse team of strategists, designers, developers, and marketers united by a
            passion for excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Team Members Yet</h3>
              <p className="text-gray-500">Our team profiles are coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}