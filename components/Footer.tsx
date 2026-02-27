import Link from "next/link";

const footerSections = [
  {
    title: "PRODUCT",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Sports", href: "/sports" },
      { label: "Fuse Theme Builder", href: "/features", badge: "New" },
      { label: "AI Graphics", href: "/features" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/" },
      { label: "Blog", href: "/" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Documentation", href: "/" },
      { label: "API Reference", href: "/" },
      { label: "Status", href: "/" },
      { label: "Support", href: "/contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
      { label: "Cookie Policy", href: "/" },
    ],
  },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0c0e12"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #22262f",
        backgroundColor: "#0c0e12",
      }}
      className="mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2C10 2 7 4 6 7C5 5 4 4 3 4C4 7 5 9 7 10C5 11 3 13 3 16C3 20 6 24 10 25C9 23 9 21 10 20C11 22 13 24 14 26C15 24 17 22 18 20C19 21 19 23 18 25C22 24 25 20 25 16C25 13 23 11 21 10C23 9 24 7 25 4C24 4 23 5 22 7C21 4 18 2 14 2Z"
                  fill="#ff504e"
                />
              </svg>
              <span>LIGR</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#94979c" }}>
              Broadcast-quality sports production for every level of the game.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150"
                  style={{ color: "#94979c", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <p
                className="text-xs font-semibold tracking-widest mb-4"
                style={{ color: "#94979c" }}
              >
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link inline-flex items-center gap-2 text-sm transition-colors"
                      style={{ color: "#94979c" }}
                    >
                      {link.label}
                      {"badge" in link && link.badge && (
                        <span
                          className="px-1.5 py-0.5 rounded text-xs font-bold"
                          style={{ background: "rgba(255,80,78,0.15)", color: "#ff504e" }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-8 text-sm"
          style={{
            borderTop: "1px solid #22262f",
            color: "#94979c",
          }}
        >
          © 2026 LIGR Systems Pty Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
