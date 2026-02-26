import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LIGR – Broadcast-Quality Sports Production",
  description: "From grassroots to elite — LIGR gives you AI-powered graphics, automated overlays, and cloud streaming that make every game look like prime time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Subtle film-grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
