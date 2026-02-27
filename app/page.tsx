import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureTabs from "@/components/FeatureTabs";

const orgs = [
  "Basketball Australia", "Football Victoria", "Cricket NSW",
  "Netball Queensland", "Hockey Australia", "NRL", "NBL1",
  "AFL", "Rugby Australia", "Swimming Australia",
];

export default function HomePage() {
  return (
    <main className="pt-16 overflow-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center px-8 md:px-16 py-28 overflow-hidden">
        <div className="line-grid absolute inset-0 pointer-events-none" />

        {/* Animated mesh blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="mesh-blob-1 absolute" style={{
            width: "900px", height: "900px",
            left: "-250px", top: "-350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,80,78,0.3) 0%, transparent 60%)",
            filter: "blur(100px)",
          }} />
          <div className="mesh-blob-2 absolute" style={{
            width: "600px", height: "600px",
            right: "-100px", top: "-100px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,80,78,0.13) 0%, transparent 60%)",
            filter: "blur(80px)",
          }} />
          <div className="mesh-blob-3 absolute" style={{
            width: "500px", height: "500px",
            left: "35%", bottom: "-150px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,100,60,0.15) 0%, transparent 60%)",
            filter: "blur(100px)",
          }} />
        </div>

        {/* Edge vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(29,32,42,0.75) 100%)",
        }} />

        <div className="relative z-10 max-w-5xl">
          <ScrollReveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-[0.15em]"
              style={{ border: "1px solid rgba(255,80,78,0.3)", backgroundColor: "rgba(255,80,78,0.07)", color: "#ff504e" }}
            >
              ✦ NOW WITH AI GRAPHICS &amp; FUSE
            </div>

            <h1 className="font-extrabold leading-[0.95] tracking-tight mb-8" style={{ fontSize: "clamp(52px, 8vw, 90px)" }}>
              Broadcast-quality<br />
              sports production<br />
              <span style={{ color: "#ff504e" }}>for everyone.</span>
            </h1>

            <p className="text-xl md:text-2xl max-w-xl mb-10 leading-relaxed" style={{ color: "#9ca3af" }}>
              From grassroots to elite — AI-powered graphics, automated overlays, and cloud streaming that make every game look like prime time.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-bold text-white text-base">
                Get Started Free
              </Link>
              <Link
                href="/features"
                className="inline-block px-8 py-4 rounded-xl font-bold text-white text-base transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                See Features →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-center text-xs font-semibold tracking-[0.25em] py-6" style={{ color: "#374151" }}>
          TRUSTED BY LEADING ORGANISATIONS
        </p>
        <div className="relative overflow-hidden pb-6">
          <div className="marquee-track flex gap-16 whitespace-nowrap items-center">
            {[...orgs, ...orgs].map((org, i) => (
              <span key={i} className="text-sm font-semibold flex-shrink-0" style={{ color: "#4b5563" }}>{org}</span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right, #1d202a, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to left, #1d202a, transparent)" }} />
        </div>
      </div>

      {/* ─── FEATURE TABS ─── */}
      <FeatureTabs />

      {/* ─── HIGHLIGHT CARDS ─── */}
      <section className="relative px-8 md:px-16 py-24 overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="line-grid absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "◎", title: "Live Score Integration", desc: "Real-time data from 20+ sports. Scores, stats, and timing synced automatically. No manual updates, ever.", blobPos: "20% 20%" },
              { icon: "✦", title: "Brand Every Moment", desc: "Full Fuse theme builder gives you complete control over colours, fonts, and layouts. Your brand, broadcast-perfect.", blobPos: "80% 20%" },
              { icon: "◈", title: "Sponsor Monetisation", desc: "Dynamic ad placements with real exposure analytics. Turn every stream into a measurable revenue opportunity.", blobPos: "50% 80%" },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="highlight-card p-8 h-full">
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 60% at ${card.blobPos}, rgba(255,80,78,0.08) 0%, transparent 70%)` }} />
                  <div className="relative z-10">
                    <div className="text-3xl mb-5" style={{ color: "#ff504e" }}>{card.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "20+", label: "Sports Supported" },
            { n: "4K", label: "Max Resolution" },
            { n: "10s", label: "Go Live Time" },
            { n: "100%", label: "Cloud-Based" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 60}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold mb-2" style={{ color: "#ff504e" }}>{stat.n}</div>
                <div className="text-sm" style={{ color: "#6b7280" }}>{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── FULL-BLEED CTA ─── */}
      <section className="cta-bleed relative px-8 md:px-16 py-24 overflow-hidden">
        <div className="mesh-blob-1 absolute pointer-events-none" style={{
          width: "700px", height: "700px",
          left: "-200px", top: "-200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,80,78,0.3) 0%, transparent 60%)",
          filter: "blur(120px)",
        }} />
        <div className="line-grid absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold tracking-[0.2em] mb-4" style={{ color: "#ff504e" }}>GET STARTED TODAY</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              See LIGR on your<br />next broadcast.
            </h2>
            <p className="text-lg mb-8" style={{ color: "#9ca3af" }}>
              Run your next game through LIGR. Watch your production quality transform instantly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary inline-block px-8 py-4 rounded-xl font-bold text-white">Book a Demo</Link>
              <Link href="/pricing" className="inline-block px-8 py-4 rounded-xl font-bold transition-colors" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff" }}>
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-xs" style={{ color: "#374151" }}>NO SETUP FEE · FREE TRIAL · CANCEL ANYTIME</p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-3xl mb-4" style={{ color: "#ff504e" }}>❝</div>
              <p className="text-lg font-medium mb-6 leading-relaxed">
                &quot;LIGR transformed how we broadcast our games. What used to take a full production team now runs automatically — and it looks better than ever.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: "#ff504e" }}>BA</div>
                <div>
                  <div className="font-semibold text-sm">Head of Digital</div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>Basketball Australia</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
