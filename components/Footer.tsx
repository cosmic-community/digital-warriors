import Link from 'next/link';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { href: '/', label: 'Home' },
      { href: '/services', label: 'Services' },
      { href: '/team', label: 'Team' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/testimonials', label: 'Testimonials' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-electric-500 to-electric-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">DW</span>
              </div>
              <span className="text-white font-bold text-xl">Digital Warriors</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              We help businesses transform through innovative digital solutions.
              Strategy, design, development, and marketing — all under one roof.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-electric-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Digital Warriors. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Powered by{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-500 hover:text-electric-400 transition-colors"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}