"use client";

import Link from "next/link";

// SVG icons
const Icons = {
  Monitor: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  Sparkles: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  ),
  Zap: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
    </svg>
  ),
  Cloud: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
      <path d="M12 12v9"/>
      <path d="m8 17 4-4 4 4"/>
    </svg>
  ),
  BarChart: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
      <rect x="5.5" y="10" width="3" height="6" rx="0.5"/>
      <rect x="9" y="7" width="3" height="9" rx="0.5"/>
      <rect x="12.5" y="11" width="3" height="5" rx="0.5"/>
      <rect x="16" y="4" width="3" height="12" rx="0.5"/>
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
};

const platformFeatures = [
  {
    icon: Icons.Monitor,
    title: "Overlay Studio",
    desc: "Drag, drop, and publish live overlays with our advanced visual editor. No design skills needed — go from blank to broadcast in minutes.",
    href: "/features",
  },
  {
    icon: Icons.Sparkles,
    title: "AI Graphics",
    desc: "Describe what you want, and watch broadcast-quality graphics materialise instantly. Text-to-overlay in under 10 seconds.",
    href: "/features",
  },
  {
    icon: Icons.Zap,
    title: "Full Automation",
    desc: "Set it and forget it. LIGR connects to live data feeds and runs your entire production — graphics, scores, clocks — without a single operator.",
    href: "/features",
  },
  {
    icon: Icons.Cloud,
    title: "Cloud Streaming",
    desc: "Broadcast from anywhere. Our cloud-native pipeline delivers sub-second latency with built-in CDN distribution to every major platform.",
    href: "/features",
  },
  {
    icon: Icons.BarChart,
    title: "Monetisation & Sponsorship",
    desc: "Dynamic ad placements with real exposure analytics. Turn every stream into a measurable revenue opportunity.",
    href: "/features",
  },
  {
    icon: Icons.Globe,
    title: "Multi-Platform",
    desc: "Stream to YouTube, Facebook, Twitch, and custom RTMP destinations simultaneously at full 4K resolution, all from one dashboard.",
    href: "/features",
  },
];

// Duplicate for seamless vertical loop
const loopItems = [...platformFeatures, ...platformFeatures];

export default function PlatformSection() {
  return (
    <section className="px-4 md:px-8 py-6">
      {/* Outer section-card gives the unified card background */}
      <div className="section-card dot-grid-card overflow-hidden">
        {/* Animated gradient glows */}
        <div
          className="section-glow"
          style={{
            width: "600px", height: "600px",
            top: "-100px", right: "-80px",
            background: "radial-gradient(circle, rgba(255,80,78,0.15) 0%, transparent 65%)",
          }}
        />
        <div
          className="section-glow section-glow-alt"
          style={{
            width: "400px", height: "400px",
            bottom: "-60px", left: "30%",
            background: "radial-gradient(circle, rgba(255,120,60,0.1) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 flex gap-0 items-stretch" style={{ height: "620px" }}>
          {/* Left: text column — plain, bottom-aligned, inside the card */}
          <div className="flex flex-col justify-end p-10 md:p-12 max-w-[500px] flex-shrink-0">
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "#ff504e" }}>Platform</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
                Everything you need to go live
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                A complete cloud production suite — from AI-generated graphics to fully automated broadcasts.
              </p>
            </div>
          </div>

          {/* Right: card loop — NO section-card, just overflow-hidden with a divider */}
          <div
            className="flex-1 relative overflow-hidden"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Top + bottom fade masks */}
            <div className="absolute top-0 left-0 right-0 h-28 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(27,29,36,1) 0%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-28 z-20 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(27,29,36,1) 0%, transparent 100%)" }} />

            {/* Scrolling grid */}
            <div className="card-loop grid grid-cols-2 gap-3 p-6 pt-8 relative z-10">
              {loopItems.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="feature-card p-6">
                    <div className="icon-box mb-4" style={{ color: "#ff504e" }}>
                      <Icon />
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-white">{feat.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>{feat.desc}</p>
                    <Link
                      href={feat.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150"
                      style={{ color: "#ff504e" }}
                    >
                      Learn more <Icons.ArrowRight />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
