import Link from "next/link";

const footerSections = [
  {
    title: "PRODUCT",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Sports", href: "/sports" },
      { label: "Fuse Theme Builder", href: "/features" },
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

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "#1a1d26",
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
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              Broadcast-quality sports production for every level of the game.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <p
                className="text-xs font-semibold tracking-widest mb-4"
                style={{ color: "#6b7280" }}
              >
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link text-sm transition-colors"
                    >
                      {link.label}
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
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "#6b7280",
          }}
        >
          © 2026 LIGR Systems Pty Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
