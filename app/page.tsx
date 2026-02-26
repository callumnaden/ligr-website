import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const platformFeatures = [
  {
    icon: "🎨",
    title: "Fuse Theme Builder",
    desc: "Craft stunning broadcast themes in minutes — no design skills needed. Drag, drop, and publish live overlays with our advanced visual editor.",
  },
  {
    icon: "✨",
    title: "AI Graphics",
    desc: "Powered by Claude AI. Describe what you want, and watch broadcast-quality graphics materialise instantly. Text-to-overlay in seconds.",
  },
  {
    icon: "⚡",
    title: "Full Automation",
    desc: "Set it and forget it. LIGR connects to live data feeds and runs your entire production — graphics, scores, clocks — without a single operator.",
  },
  {
    icon: "☁️",
    title: "Cloud Streaming",
    desc: "Broadcast from anywhere. Our cloud-native pipeline delivers sub-second latency with built-in CDN distribution to every major platform.",
  },
  {
    icon: "💰",
    title: "Monetisation & Sponsorship",
    desc: "Turn broadcasts into revenue streams. Automated sponsor logo placement, dynamic ad rolls, and detailed exposure analytics.",
  },
  {
    icon: "🎬",
    title: "Rive Animations",
    desc: "Next-gen motion graphics powered by Rive. Silky-smooth, interactive overlays that respond to live match events in real time.",
  },
];

const stats = [
  { value: "100K+", label: "Hours Broadcast" },
  { value: "20+", label: "Sports Supported" },
  { value: "$20M+", label: "Sponsorship Revenue Driven" },
  { value: "50+", label: "Countries" },
];

const howItWorks = [
  {
    step: "01",
    title: "Design or Generate",
    desc: "Use Fuse to build a theme visually — or let AI Graphics create one from a text prompt. Pick from 20+ sports templates or start blank.",
  },
  {
    step: "02",
    title: "Connect & Automate",
    desc: "Link your data feeds, scoring systems, or manual inputs. LIGR auto-populates team names, logos, scores, and clocks in real time.",
  },
  {
    step: "03",
    title: "Go Live",
    desc: "Hit broadcast. Your production streams with broadcast-grade overlays to YouTube, Facebook, Twitch, or any RTMP destination.",
  },
];

const trustedOrgs = [
  "Basketball Australia",
  "Football Victoria",
  "Cricket NSW",
  "Netball Queensland",
  "Hockey Australia",
  "NRL",
  "NBL1",
  "Basketball Australia",
  "Football Victoria",
  "Cricket NSW",
  "Netball Queensland",
  "Hockey Australia",
  "NRL",
  "NBL1",
];

export default function Home() {
  return (
    <main className="pt-16 overflow-hidden">

      {/* ─── Hero ─── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 overflow-hidden">

        {/* Dot grid background */}
        <div className="dot-grid absolute inset-0 pointer-events-none" />

        {/* Glowing orbs */}
        <div
          className="orb orb-a"
          style={{
            width: "700px", height: "700px",
            top: "-200px", left: "-150px",
            background: "radial-gradient(circle, rgba(255,80,78,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="orb orb-b"
          style={{
            width: "600px", height: "600px",
            top: "-100px", right: "-200px",
            background: "radial-gradient(circle, rgba(255,80,78,0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="orb orb-c"
          style={{
            width: "500px", height: "500px",
            bottom: "-150px", left: "30%",
            background: "radial-gradient(circle, rgba(180,60,200,0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Beam sweeps */}
        <div className="beam beam-1" />
        <div className="beam beam-2" />

        {/* Radial gradient vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(29,32,42,0.7) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <ScrollReveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                backgroundColor: "rgba(255,80,78,0.12)",
                border: "1px solid rgba(255,80,78,0.3)",
                color: "#ff504e",
              }}
            >
              <span>✦</span>
              <span>NOW WITH AI GRAPHICS &amp; FUSE</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl mb-6">
              Broadcast-quality sports
              <br />
              <span style={{ color: "#ff504e" }}>production for everyone.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "#9ca3af" }}>
              From grassroots to elite — LIGR gives you AI-powered graphics, automated overlays,
              and cloud streaming that make every game look like prime time.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base"
              >
                Get Started Free →
              </Link>
              <Link
                href="/features"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:border-white/30"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff" }}
              >
                ▷ See It In Action
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Trusted by (marquee) ─── */}
      <div className="gradient-line" />
      <section className="py-10 overflow-hidden">
        <p
          className="text-xs font-semibold tracking-[0.2em] mb-6 text-center"
          style={{ color: "#6b7280" }}
        >
          TRUSTED BY LEADING ORGANISATIONS
        </p>
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #1d202a, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #1d202a, transparent)" }}
          />
          <div className="marquee-track">
            {trustedOrgs.map((org, i) => (
              <span
                key={i}
                className="text-sm font-medium mx-8 whitespace-nowrap"
                style={{ color: "#4b5563" }}
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>
      <div className="gradient-line" />

      {/* ─── Platform features ─── */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#6b7280" }}>
            PLATFORM
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Everything you need to go live
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            A complete cloud production suite — from AI-generated graphics to fully automated
            broadcasts.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {platformFeatures.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 70}>
              <div
                className="glow-card p-8 rounded-2xl h-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                  style={{ backgroundColor: "rgba(255,80,78,0.1)" }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                  {feat.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <div className="gradient-line" />
      <section className="relative px-6 py-28 overflow-hidden">
        {/* Background orb */}
        <div
          className="orb orb-b absolute pointer-events-none"
          style={{
            width: "600px", height: "600px",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(255,80,78,0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#6b7280" }}>
              HOW IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Live in three steps</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="text-6xl font-black mb-6 leading-none"
                    style={{ color: "rgba(255,80,78,0.25)" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: "#9ca3af" }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <div className="gradient-line" />

      {/* ─── Stats ─── */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: "#ff504e" }}
              >
                {s.value}
              </div>
              <div className="text-sm font-medium" style={{ color: "#9ca3af" }}>
                {s.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <div className="gradient-line" />

      {/* ─── AI Graphics ─── */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "rgba(255,80,78,0.1)", color: "#ff504e" }}
            >
              Powered by Claude AI
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              AI Graphics that
              <br />
              <span style={{ color: "#ff504e" }}>think like a designer.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Describe your vision in plain English and watch LIGR generate broadcast-ready
              overlays in seconds. Powered by Anthropic&apos;s Claude, our AI understands sports
              context, brand guidelines, and design best practices.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Text-to-overlay generation in under 10 seconds",
                "Understands sport-specific layouts and data bindings",
                'Refine with natural language — "make the score bigger"',
                "Export directly to your live broadcast pipeline",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: "#ff504e" }}>✓</span>
                  <span className="text-sm" style={{ color: "#d1d5db" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/features" className="text-sm font-semibold" style={{ color: "#ff504e" }}>
              Explore AI Graphics →
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div
              className="rounded-2xl p-6 font-mono text-sm"
              style={{ backgroundColor: "#0e1018", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs" style={{ color: "#6b7280" }}>ai-graphics</span>
              </div>
              <div style={{ color: "#6b7280" }}>$</div>
              <div className="mt-2 mb-4 text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                Create a modern basketball scoreboard with team colors, animated score
                transitions, and a shot clock.
              </div>
              <div style={{ color: "#ff504e" }}>Generating overlay…</div>
              <div className="mt-3 flex items-center gap-2" style={{ color: "#4ade80" }}>
                <span>✓</span>
                <span>Generated scoreboard overlay</span>
              </div>
              <div
                className="mt-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "#161924",
                  border: "1px solid rgba(255,80,78,0.2)",
                  boxShadow: "0 0 20px rgba(255,80,78,0.06)",
                }}
              >
                <div className="text-2xl font-extrabold text-center text-white">72 – 68</div>
                <div
                  className="grid grid-cols-3 gap-2 mt-3 text-center text-xs"
                  style={{ color: "#6b7280" }}
                >
                  <span>Score</span>
                  <span>Clock</span>
                  <span>Sponsor</span>
                </div>
              </div>
              <div className="mt-4 text-xs" style={{ color: "#4b5563" }}>theme.fuse</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Fuse section ─── */}
      <div className="gradient-line" />
      <section
        className="relative px-6 py-28 overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
      >
        <div
          className="orb orb-a absolute pointer-events-none"
          style={{
            width: "800px", height: "800px",
            bottom: "-300px", right: "-200px",
            background: "radial-gradient(circle, rgba(255,80,78,0.07) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <ScrollReveal direction="left">
            <div
              className="rounded-2xl p-8 hidden md:block"
              style={{ backgroundColor: "#0e1018", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-xs font-semibold tracking-widest mb-6" style={{ color: "#6b7280" }}>
                THEME BUILDER
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["Scoreboard", "Lower Third", "Ticker", "Clock", "Logo Bar", "Stats"].map((c) => (
                  <div
                    key={c}
                    className="p-3 rounded-lg text-xs text-center transition-colors hover:border-red-500/30"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#9ca3af",
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  backgroundColor: "rgba(255,80,78,0.07)",
                  border: "1px dashed rgba(255,80,78,0.3)",
                  boxShadow: "0 0 30px rgba(255,80,78,0.05)",
                }}
              >
                <span className="text-sm" style={{ color: "#ff504e" }}>Live Preview</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#6b7280" }}>
              THEME BUILDER
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Meet Fuse.</h2>
            <h3 className="text-3xl font-extrabold mb-6" style={{ color: "#ff504e" }}>
              Design without limits.
            </h3>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#9ca3af" }}>
              Fuse is LIGR&apos;s advanced visual theme builder. Drag and drop components, bind
              live data, set brand colours, and preview everything in real time. No code, no
              export, no waiting — go straight from design to live broadcast.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Visual drag-and-drop editor with live preview",
                "Component library with 200+ broadcast elements",
                "Real-time data binding — scores, clocks, stats",
                "One-click publish to your live production",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: "#ff504e" }}>✓</span>
                  <span className="text-sm" style={{ color: "#d1d5db" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/features" className="text-sm font-semibold" style={{ color: "#ff504e" }}>
              Explore Fuse →
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <div className="gradient-line" />

      {/* ─── Final CTA ─── */}
      <section className="relative px-6 py-36 text-center overflow-hidden">
        <div
          className="orb orb-a absolute pointer-events-none"
          style={{
            width: "800px", height: "800px",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(255,80,78,0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(29,32,42,0.85) 100%)",
          }}
        />
        <ScrollReveal className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to elevate your
            <br />
            <span style={{ color: "#ff504e" }}>sports broadcast?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#9ca3af" }}>
            Join hundreds of organisations using LIGR to deliver broadcast-quality production —
            from local leagues to national federations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/pricing"
              className="btn-primary px-8 py-4 rounded-xl font-bold text-white"
            >
              Start For Free
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-xl font-semibold transition-all hover:border-white/30"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff" }}
            >
              View Pricing
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
