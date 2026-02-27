"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sports", label: "Sports" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        backgroundColor: "rgba(21, 23, 30, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 h-[92px] flex items-center justify-between">
        {/* Logo — actual LIGR SVG */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="/ligr-logo.svg"
            alt="LIGR"
            style={{ height: "36px", width: "auto" }}
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-base font-medium nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                    style={{ backgroundColor: "#ff504e" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/features"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150"
            style={{ color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
          >
            See it in action
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-bold text-white get-started-btn"
            style={{ backgroundColor: "#ff504e" }}
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
