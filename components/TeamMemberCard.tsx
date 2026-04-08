import { getMetafieldValue } from '@/lib/cosmic';
import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const fullName = getMetafieldValue(member.metadata?.full_name) || member.title;
  const role = getMetafieldValue(member.metadata?.role);
  const bio = getMetafieldValue(member.metadata?.bio);
  const email = getMetafieldValue(member.metadata?.email);
  const linkedinUrl = getMetafieldValue(member.metadata?.linkedin_url);
  const photo = member.metadata?.photo;

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden card-hover">
      {/* Photo */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress&crop=faces`}
            alt={fullName}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
            <span className="text-5xl font-black text-white/30">
              {fullName.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-navy-900">{fullName}</h3>
        {role && (
          <p className="text-electric-600 font-medium text-sm mb-2">{role}</p>
        )}
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{bio}</p>
        )}

        {/* Social Links */}
        {(email || linkedinUrl) && (
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-electric-600 transition-colors"
                aria-label={`Email ${fullName}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-600 transition-colors"
                aria-label={`${fullName} on LinkedIn`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}