export default function Footer() {
  const companyLinks = ["About Us", "Verified Listings", "Safety Guidelines"];
  const supportLinks = ["Contact Support", "Host your PG", "Student FAQ"];

  return (
    <footer className="border-t border-gray-200 mt-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h4 className="text-base font-extrabold text-gray-900 mb-2">
            The Academic Curator
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Redefining student living in Kolkata with a focus on academic success
            and premium comfort. Verified homes for the next generation of leaders.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
            Company
          </p>
          {companyLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm text-gray-600 hover:text-indigo-600 mb-1.5 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Support */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
            Support
          </p>
          {supportLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm text-gray-600 hover:text-indigo-600 mb-1.5 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
            Newsletter
          </p>
          <p className="text-xs text-gray-500 mb-3">
            Get alerts on newly curated spaces near your campus.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="edu-email@university.in"
              className="flex-1 bg-gray-100 text-sm text-gray-600 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 text-center py-4 text-xs text-gray-400">
        © 2024 The Academic Curator. Premium Student Living in Kolkata.
      </div>
    </footer>
  );
}
