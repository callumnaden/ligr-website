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
        backgroundColor: "rgba(29, 32, 42, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 2C10 2 7 4 6 7C5 5 4 4 3 4C4 7 5 9 7 10C5 11 3 13 3 16C3 20 6 24 10 25C9 23 9 21 10 20C11 22 13 24 14 26C15 24 17 22 18 20C19 21 19 23 18 25C22 24 25 20 25 16C25 13 23 11 21 10C23 9 24 7 25 4C24 4 23 5 22 7C21 4 18 2 14 2Z"
              fill="#ff504e"
            />
            <path
              d="M14 8C12 8 10.5 9 10 11C11 10.5 12 10.5 13 11C12 12 11.5 13.5 12 15C12.5 14 13.5 13.5 14 13C14.5 13.5 15.5 14 16 15C16.5 13.5 16 12 15 11C16 10.5 17 10.5 18 11C17.5 9 16 8 14 8Z"
              fill="#1d202a"
            />
          </svg>
          <span>LIGR</span>
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
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150"
            style={{ color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}
          >
            See it in action
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg text-sm font-bold text-white get-started-btn"
            style={{ backgroundColor: "#ff504e" }}
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
