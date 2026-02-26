import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    tag: "THEME BUILDER",
    title: "Fuse",
    subtitle: "Design broadcast overlays without code.",
    desc: "Fuse is LIGR's advanced visual theme builder. Craft pixel-perfect broadcast graphics with a drag-and-drop interface, bind live match data, and publish directly to your production pipeline — all in real time.",
    cta: "Get started with Fuse",
    capabilities: [
      "Visual drag-and-drop canvas with snap-to-grid alignment",
      "200+ pre-built broadcast components (scoreboards, tickers, L-thirds)",
      "Real-time data binding — scores, clocks, team names, stats auto-populate",
      "Brand color system with palette extraction from logos",
      "Multi-sport template library — basketball, football, cricket, and more",
      "Version history with one-click rollback",
      "Live preview with simulated match data before going live",
      "Export themes as reusable packages across organisations",
    ],
  },
  {
    tag: "AI-POWERED",
    title: "AI Graphics",
    subtitle: "Describe it. Generate it. Broadcast it.",
    desc: "Powered by Anthropic's Claude, AI Graphics transforms natural language prompts into broadcast-ready overlays. Describe what you want — including sport, style, and brand preferences — and watch professional graphics materialise in seconds.",
    cta: "Get started with AI Graphics",
    capabilities: [
      "Text-to-overlay generation powered by Claude AI",
      "Understands sport-specific layouts, rules, and data structures",
      'Iterative refinement with natural language — "make the clock bigger"',
      "Generates data-bound components, not just static images",
      "Brand-aware — respects your colour palette and typography",
      "Template suggestion based on sport and competition level",
      "Batch generation for tournament packages",
      "Seamless handoff to Fuse for manual fine-tuning",
    ],
  },
  {
    tag: "AUTOMATION",
    title: "Full Automation",
    subtitle: "Set it. Forget it. Broadcast it.",
    desc: "LIGR's automation engine connects to live data feeds and runs your entire broadcast production without a single operator. Scores update, clocks tick, graphics trigger — all automatically, all in real time.",
    cta: "Get started with Full Automation",
    capabilities: [
      "Connect to scoring APIs, timing systems, and stat providers",
      "Auto-trigger graphics based on match events (goals, fouls, timeouts)",
      "Smart clock management with period tracking and overtime",
      "Automated highlight detection and replay cueing",
      "Multi-game orchestration — run dozens of courts simultaneously",
      "Fallback rules for data interruptions with manual override",
      "Event-driven sponsor activations (goal = sponsor graphic)",
      "Post-match automated wrap-up graphics and stats summary",
    ],
  },
  {
    tag: "STREAMING",
    title: "Cloud Streaming",
    subtitle: "Broadcast from anywhere to everywhere.",
    desc: "LIGR's cloud-native streaming pipeline delivers sub-second latency with built-in CDN distribution. Stream to YouTube, Facebook, Twitch, or any RTMP destination — with broadcast-grade overlays composited in the cloud.",
    cta: "Get started with Cloud Streaming",
    capabilities: [
      "Sub-second glass-to-glass latency",
      "Multi-destination streaming (YouTube, Facebook, Twitch, RTMP)",
      "Cloud-composited overlays — no local hardware needed",
      "Adaptive bitrate for reliable delivery on any connection",
      "Built-in CDN with global edge distribution",
      "Camera-agnostic — works with any video source",
      "Recording with automatic VOD generation",
      "Embeddable player for your own website",
    ],
  },
  {
    tag: "REVENUE",
    title: "Monetisation & Sponsorship",
    subtitle: "Turn every broadcast into a revenue stream.",
    desc: "Transform your broadcasts into revenue generators with automated sponsor placements, dynamic ad rotations, and detailed exposure analytics that prove ROI to your partners.",
    cta: "Get started with Monetisation & Sponsorship",
    capabilities: [
      "Automated sponsor logo placement across all overlay elements",
      "Dynamic ad roll scheduling — pre, mid, and post-match",
      "Sponsor exposure tracking with second-by-second analytics",
      "Multi-tier sponsorship support (title, major, minor partner tiers)",
      "Proof-of-performance reports for sponsor accountability",
      "Revenue attribution by event, stream, and audience size",
      "Self-serve sponsor portal for asset management",
      "CPM-based and flat-rate pricing model support",
    ],
  },
  {
    tag: "MOTION GRAPHICS",
    title: "Rive Animations",
    subtitle: "Next-gen motion, powered by interactivity.",
    desc: "LIGR integrates Rive — the industry-leading interactive animation platform — to deliver buttery-smooth motion graphics that respond to live match events. Transitions, celebrations, and data reveals that feel alive.",
    cta: "Get started with Rive Animations",
    capabilities: [
      "Rive-powered animations with 60fps smoothness",
      "Event-driven triggers — goal scored = custom celebration animation",
      "State machine support for complex multi-state overlays",
      "Lightweight runtime — animations add near-zero processing overhead",
      "Interactive elements that respond to live data changes",
      "Animation library with pre-built sport-specific transitions",
      "Custom Rive file import for bespoke motion design",
      "Blending with Fuse themes for cohesive visual production",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative text-center px-6 py-32 overflow-hidden">
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div
          className="orb orb-a absolute pointer-events-none"
          style={{
            width: "600px", height: "600px",
            top: "-200px", left: "50%", transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(255,80,78,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 40%, rgba(29,32,42,0.8) 100%)" }}
        />
        <ScrollReveal className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.2em] mb-4" style={{ color: "#ff504e" }}>
            FEATURES
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-3xl mx-auto mb-6">
            Built for the future
            <br />
            of sports production.
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            From AI-generated graphics to fully automated broadcasts — explore every tool in the LIGR
            platform.
          </p>
        </ScrollReveal>
      </section>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        {features.map((feat, i) => (
          <section
            key={feat.title}
            className={`grid md:grid-cols-2 gap-16 items-start`}
          >
            {/* Info */}
            <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  backgroundColor: "rgba(255,80,78,0.1)",
                  color: "#ff504e",
                  border: "1px solid rgba(255,80,78,0.2)",
                }}
              >
                {feat.tag}
              </div>
              <h2 className="text-4xl font-extrabold mb-2">{feat.title}</h2>
              <p className="text-xl font-semibold mb-4" style={{ color: "#ff504e" }}>
                {feat.subtitle}
              </p>
              <p className="leading-relaxed mb-6" style={{ color: "#9ca3af" }}>
                {feat.desc}
              </p>
              <Link href="/contact" className="text-sm font-semibold" style={{ color: "#ff504e" }}>
                {feat.cta} →
              </Link>
            </ScrollReveal>

            {/* Capabilities */}
            <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={100}>
            <div
              className="glow-card rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-xs font-semibold tracking-widest mb-6"
                style={{ color: "#6b7280" }}
              >
                KEY CAPABILITIES
              </p>
              <ul className="space-y-3">
                {feat.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "#ff504e" }}>
                      ✓
                    </span>
                    <span className="text-sm" style={{ color: "#d1d5db" }}>
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <div className="gradient-line" />
      <section className="relative px-6 py-28 text-center overflow-hidden">
        <div
          className="orb orb-b absolute pointer-events-none"
          style={{
            width: "600px", height: "600px",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(255,80,78,0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <ScrollReveal className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-4">See it all in action.</h2>
          <p className="text-lg mb-10" style={{ color: "#9ca3af" }}>
            Book a demo and we&apos;ll walk you through every feature — tailored to your sport and
            setup.
          </p>
          <Link href="/contact" className="btn-primary inline-block px-8 py-4 rounded-xl font-bold text-white">
            Book a Demo
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
