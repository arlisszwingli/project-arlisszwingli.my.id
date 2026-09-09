import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com/arlisszs", label: "Instagram" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://github.com/arlisszwingli", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-[#19222D] border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-white hover:text-[#C6F10E] transition-colors"
            >
              Arliss Zwingli Sitanggang
            </Link>
            <p className="mt-2 text-sm text-white/70 max-w-xs">
              Multimedia Designer · Graphic Designer · Web Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-[#C6F10E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                Connect
              </h3>
              <ul className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-[#C6F10E] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center text-xs sm:text-sm text-white/50">
          &copy; {new Date().getFullYear()} Arliss Zwingli Sitanggang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
