import Link from "next/link";
import PlatformSection from "@/components/PlatformSection";
import GSAPAnimations from "@/components/GSAPAnimations";

// ─── Inline SVG icons ───────────────────────────────────────────────
function IconPalette() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}
function IconDatabase() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
      <path d="M3 12A9 3 0 0 0 21 12"/>
    </svg>
  );
}
function IconBroadcast() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8.82a15 15 0 0 1 20 0"/>
      <path d="M5 12.859a10 10 0 0 1 14 0"/>
      <path d="M8 16.899A6 6 0 0 1 16 17"/>
      <line x1="12" y1="20" x2="12" y2="20" strokeWidth="2.5"/>
    </svg>
  );
}
function IconCheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}
function IconPlayCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

// ─── Content data ────────────────────────────────────────────────────
const orgs = [
  "Basketball Australia", "Football Victoria", "Cricket NSW",
  "Netball Queensland", "Hockey Australia", "NRL", "NBL1",
  "AFL", "Rugby Australia", "Swimming Australia", "Basketball Victoria",
];
// Duplicate for seamless loop
const tickerItems = [...orgs, ...orgs];

const stats = [
  { value: "100K+", label: "Hours Broadcast" },
  { value: "20+",   label: "Sports Supported" },
  { value: "$20M+", label: "Sponsorship Revenue Driven" },
  { value: "50+",   label: "Countries" },
];

const claudeCheckItems = [
  "Text-to-overlay generation in under 10 seconds",
  "Understands sport-specific layouts and data bindings",
  "Refine with natural language — \"make the score bigger\"",
  "Export directly to your live broadcast pipeline",
];
const fuseCheckItems = [
  "Visual drag-and-drop editor with live preview",
  "Component library with 200+ broadcast elements",
  "Real-time data binding — scores, clocks, stats",
  "One-click publish to your live production",
];

// ─── Coded illustrations ─────────────────────────────────────────────
function FuseIllustration() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "#12151c", border: "1px solid rgba(255,255,255,0.09)" }}>
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-3 h-3 rounded-full" style={{ background: "#ff504e" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#fbbf24" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>fuse-editor</span>
      </div>
      <div className="flex" style={{ minHeight: "200px" }}>
        {/* Sidebar */}
        <div className="w-36 flex-shrink-0 p-3" style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
          <div className="text-xs font-semibold mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>TEMPLATES</div>
          {["Basketball", "Soccer", "Cricket", "Rugby"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 rounded-lg px-2 py-1.5 mb-1" style={{ background: i === 0 ? "rgba(255,80,78,0.12)" : "transparent", cursor: "default" }}>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: i === 0 ? "#ff504e" : "rgba(255,255,255,0.25)" }} />
              <span className="text-xs" style={{ color: i === 0 ? "#ff504e" : "rgba(255,255,255,0.45)" }}>{s}</span>
            </div>
          ))}
          <div className="mt-4 text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>COMPONENTS</div>
          {["Score", "Timer", "Logo", "Ticker"].map((c) => (
            <div key={c} className="flex items-center gap-2 px-2 py-1.5 mb-1" style={{ cursor: "default" }}>
              <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{c}</span>
            </div>
          ))}
        </div>
        {/* Canvas */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full rounded-lg overflow-hidden" style={{ background: "#0d0f14", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="text-xs px-3 py-1.5 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ff504e" }} />
              Preview · Basketball Scoreboard
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>HOME</div>
                <div className="text-sm font-bold text-white">HAWKS</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold tabular-nums" style={{ color: "#ff504e" }}>42 — 38</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Q3 · 8:24</div>
              </div>
              <div className="text-right">
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>AWAY</div>
                <div className="text-sm font-bold text-white">LIONS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataFeedIllustration() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "#12151c", border: "1px solid rgba(255,255,255,0.09)" }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-3 h-3 rounded-full" style={{ background: "#ff504e" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#fbbf24" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>data-connect</span>
      </div>
      <div className="p-5 space-y-3">
        {[
          { label: "Sport", value: "Basketball", ok: true },
          { label: "Data source", value: "SportingPulse API", ok: true },
          { label: "Home team", value: "Sydney Hawks", ok: true },
          { label: "Away team", value: "Melbourne Lions", ok: true },
          { label: "Live scores", value: "Syncing…", ok: true },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{row.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium" style={{ color: i === 4 ? "#fbbf24" : "rgba(255,255,255,0.75)" }}>{row.value}</span>
              {row.ok && i < 4 && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="6" fill="rgba(34,197,94,0.2)"/>
                  <path d="M3.5 6l1.8 1.8 3.2-3.6" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {i === 4 && (
                <div className="w-2 h-2 rounded-full" style={{ background: "#fbbf24", animation: "pulse 1.5s ease-in-out infinite" }} />
              )}
            </div>
          </div>
        ))}
        <div className="rounded-lg px-3 py-2 mt-4 flex items-center gap-2" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
          <span className="text-xs font-semibold" style={{ color: "#22c55e" }}>Connected · Last sync: 0.3s ago</span>
        </div>
      </div>
    </div>
  );
}

function BroadcastIllustration() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "#12151c", border: "1px solid rgba(255,255,255,0.09)" }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-3 h-3 rounded-full" style={{ background: "#ff504e" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#fbbf24" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>broadcast-control</span>
      </div>
      <div className="p-5 space-y-2">
        {[
          { name: "YouTube Live", q: "4K · 60fps", live: true },
          { name: "Facebook Live", q: "1080p · 30fps", live: true },
          { name: "Twitch", q: "1080p · 60fps", live: true },
          { name: "Custom RTMP", q: "720p · 30fps", live: false },
        ].map((d) => (
          <div key={d.name} className="flex items-center justify-between rounded-lg px-3 py-2.5" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <div className="text-xs font-semibold text-white">{d.name}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{d.q}</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: d.live ? "#22c55e" : "#4b5563" }} />
              <span className="text-xs font-semibold" style={{ color: d.live ? "#22c55e" : "#6b7280" }}>{d.live ? "LIVE" : "STANDBY"}</span>
            </div>
          </div>
        ))}
        <div className="rounded-lg px-3 py-2 mt-1 flex items-center justify-between" style={{ background: "rgba(255,80,78,0.08)", border: "1px solid rgba(255,80,78,0.18)" }}>
          <span className="text-xs font-semibold" style={{ color: "#ff504e" }}>▶ LIVE · 2h 14m</span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>3 streams active</span>
        </div>
      </div>
    </div>
  );
}

// Coded illustrations for the AI/Fuse detail sections
function AIGraphicsIllustration() {
  return (
    <div className="rounded-xl overflow-hidden h-full" style={{ background: "#12151c", border: "1px solid rgba(255,255,255,0.09)" }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-3 h-3 rounded-full" style={{ background: "#ff504e" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#fbbf24" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>ai-graphics</span>
      </div>
      <div className="p-5">
        <div className="rounded-lg p-3 mb-4" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="text-xs mb-1.5 font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>$ Create a modern basketball scoreboard with team colors, animated score transitions, and a shot clock.</div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "#ff504e" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            Generating overlay…
          </div>
        </div>
        <div className="rounded-lg p-3 mb-4" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.18)" }}>
          <div className="text-xs font-semibold mb-3" style={{ color: "#22c55e" }}>✓ Generated scoreboard overlay</div>
          <div className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: "#0d0f14" }}>
            <span className="text-sm font-bold text-white">HAWKS</span>
            <span className="text-lg font-extrabold tabular-nums" style={{ color: "#ff504e" }}>72 — 68</span>
            <span className="text-sm font-bold text-white">LIONS</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Q4 · 02:14</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Shot clock: 12</span>
          </div>
        </div>
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Generated in 1.2s · Ready to broadcast</div>
      </div>
    </div>
  );
}

function FuseDetailIllustration() {
  return (
    <div className="rounded-xl overflow-hidden h-full" style={{ background: "#12151c", border: "1px solid rgba(255,255,255,0.09)" }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#0d0f14", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-3 h-3 rounded-full" style={{ background: "#ff504e" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#fbbf24" }} />
        <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
        <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>fuse-theme-builder</span>
      </div>
      <div className="flex" style={{ minHeight: "260px" }}>
        {/* Property panel */}
        <div className="w-40 p-3" style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
          <div className="text-xs font-semibold mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>PROPERTIES</div>
          {[
            { label: "Primary colour", val: "#FF504E", swatch: "#ff504e" },
            { label: "Font", val: "Inter Bold" },
            { label: "Corner radius", val: "8px" },
            { label: "Team logo", val: "Auto-detect" },
          ].map((p) => (
            <div key={p.label} className="mb-3">
              <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>{p.label}</div>
              <div className="flex items-center gap-1.5 rounded px-2 py-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {p.swatch && <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: p.swatch }} />}
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>{p.val}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Preview */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full rounded-lg overflow-hidden" style={{ background: "#0d0f14", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="text-xs px-3 py-1.5 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
              Live preview
            </div>
            <div className="flex items-stretch">
              <div className="flex-1 px-4 py-3 text-center" style={{ borderRight: "1px solid rgba(255,80,78,0.2)", background: "rgba(255,80,78,0.04)" }}>
                <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>HOME</div>
                <div className="font-bold text-white">HAWKS</div>
              </div>
              <div className="px-5 py-3 flex flex-col items-center justify-center">
                <div className="text-2xl font-extrabold tabular-nums" style={{ color: "#ff504e" }}>72—68</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>Q4 · FINAL</div>
              </div>
              <div className="flex-1 px-4 py-3 text-center" style={{ borderLeft: "1px solid rgba(255,80,78,0.2)" }}>
                <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>AWAY</div>
                <div className="font-bold text-white">LIONS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page component ──────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="pt-[92px] overflow-x-hidden" style={{ background: "#15171e" }}>
      <GSAPAnimations />

      {/* ═══ 1. HERO ═══════════════════════════════════════════════ */}
      <section className="px-4 md:px-8 pt-6 pb-12 flex flex-col" style={{ minHeight: "calc(100vh - 92px)" }}>
        <div className="section-card dot-grid-card overflow-hidden flex-1 flex flex-col">
          {/* Animated gradient glow */}
          <div
            className="section-glow"
            style={{
              width: "800px", height: "800px",
              top: "-200px", right: "-100px",
              background: "radial-gradient(circle, rgba(255,80,78,0.22) 0%, transparent 60%)",
            }}
          />
          <div
            className="section-glow section-glow-alt"
            style={{
              width: "500px", height: "500px",
              bottom: "-80px", left: "20%",
              background: "radial-gradient(circle, rgba(255,100,60,0.12) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 flex flex-col justify-between flex-1 p-8 md:p-12">
            {/* Top: badge + heading + CTAs */}
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-3 mb-8 px-3 py-1.5 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="px-2 py-0.5 rounded-md text-xs font-bold text-white" style={{ background: "#ff504e" }}>New!</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Now with AI Graphics &amp; Fuse</span>
                <IconArrowRight />
              </div>

              {/* Heading */}
              <h1
                className="hero-h1 font-bold leading-none mb-10 text-white"
                style={{ fontSize: "clamp(48px, 7vw, 88px)", letterSpacing: "-0.03em", lineHeight: "1.0" }}
              >
                Broadcast-quality sports
                <br />production for everyone.
              </h1>

              {/* CTAs */}
              <div className="hero-ctas flex flex-wrap gap-4">
                <Link
                  href="/features"
                  className="gsap-btn-hover inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-base transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#ffffff" }}
                >
                  <IconPlayCircle />
                  See it in action
                </Link>
                <Link
                  href="/contact"
                  className="gsap-btn-hover btn-primary inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-base text-white"
                >
                  Get started
                </Link>
              </div>
            </div>

            {/* Bottom: subtitle left + video player illustration right */}
            <div className="flex items-end justify-between gap-8 mt-16">
              {/* Subtitle */}
              <p
                className="hero-sub max-w-md text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem" }}
              >
                From grassroots to elite — LIGR gives you AI-powered graphics,
                automated overlays, and cloud streaming that make every game
                look like prime time.
              </p>

              {/* Video player illustration */}
              <div
                className="hero-illustration flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: "440px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#0d0f14",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                {/* Thumbnail placeholder */}
                <div className="relative" style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #1a1e28 0%, #22252f 100%)" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(255,80,78,0.15)", border: "1.5px solid rgba(255,80,78,0.4)" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff504e"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>
                  {/* Overlay mockup on top */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-lg px-3 py-2 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.75)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
                      <span className="text-sm font-bold text-white">HAWKS</span>
                      <span className="text-lg font-extrabold tabular-nums" style={{ color: "#ff504e" }}>42 — 38</span>
                      <span className="text-sm font-bold text-white">LIONS</span>
                    </div>
                  </div>
                </div>
                {/* Video controls */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <div className="h-full rounded-full" style={{ width: "25%", background: "#ff504e" }} />
                  </div>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>02:08 / -06:18</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUSTED BY TICKER ═══════════════════════════════════ */}
      <section className="px-4 md:px-8 py-8 gsap-fade">
        <p className="text-center text-xs font-semibold tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em" }}>
          TRUSTED BY LEADING ORGANISATIONS
        </p>
        {/* Continuous ticker */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(21,23,30,0.98), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(21,23,30,0.98), transparent)" }} />
          <div className="ticker-track">
            {tickerItems.map((org, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-bold text-base mx-10"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. PLATFORM (vertical card loop) ══════════════════════ */}
      <div className="gsap-fade">
        <PlatformSection />
      </div>

      {/* ═══ 4. HOW IT WORKS ════════════════════════════════════════ */}
      <section className="px-4 md:px-8 py-6 gsap-fade">
        <div className="section-card dot-grid-card overflow-hidden">
          {/* Animated glow */}
          <div
            className="section-glow"
            style={{
              width: "700px", height: "700px",
              top: "-150px", left: "30%",
              background: "radial-gradient(circle, rgba(255,80,78,0.12) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10 p-8 md:p-12">
            <div className="mb-10">
              <p className="text-sm font-semibold mb-2" style={{ color: "#ff504e" }}>How it works</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}>
                Live in 3 steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-stretch gsap-stagger">
              {[
                {
                  step: "01",
                  icon: <IconPalette />,
                  title: "Design your theme",
                  desc: "Use Fuse to build a theme visually — or let AI Graphics create one from a text prompt. Pick from 20+ sports templates or start blank.",
                  illustration: <FuseIllustration />,
                },
                {
                  step: "02",
                  icon: <IconDatabase />,
                  title: "Connect your data",
                  desc: "Link your data feeds, scoring systems, or manual inputs. LIGR auto-populates team names, logos, scores, and clocks in real time.",
                  illustration: <DataFeedIllustration />,
                },
                {
                  step: "03",
                  icon: <IconBroadcast />,
                  title: "Hit broadcast",
                  desc: "Your production streams with broadcast-grade overlays to YouTube, Facebook, Twitch, or any RTMP destination.",
                  illustration: <BroadcastIllustration />,
                },
              ].map((s) => (
                <div key={s.step} className="how-card p-6 flex flex-col h-full gsap-stagger-item">
                  {/* Illustration — flex-1 so all three are equal height with no clipping */}
                  <div className="flex-1 mb-5" style={{ minHeight: "200px" }}>
                    {s.illustration}
                  </div>
                  {/* Icon + step + text — fixed at bottom */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-box" style={{ color: "#ff504e" }}>{s.icon}</div>
                      <span className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.12)", fontVariantNumeric: "tabular-nums" }}>{s.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. STATS ═══════════════════════════════════════════════ */}
      <section className="px-4 md:px-8 py-6">
        <div className="py-12 px-8 md:px-12" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center gsap-stats">
            {stats.map((s) => (
              <div key={s.value} className="gsap-stat">
                <div className="text-5xl md:text-6xl font-extrabold mb-2" style={{ color: "#ff504e", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6a. POWERED BY CLAUDE AI ═══════════════════════════════ */}
      <section className="px-4 md:px-8 py-16 gsap-feature-section">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Left text — 50% */}
          <div className="w-full md:w-1/2 gsap-feature-text">
            <p className="text-sm font-semibold mb-3" style={{ color: "#ff504e" }}>Powered by Claude AI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
              AI Graphics that think like a designer.
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.5)" }}>
              Describe your vision in plain English — &ldquo;a modern scoreboard with neon accents for basketball&rdquo; — and watch LIGR generate broadcast-ready overlays in seconds. Powered by Anthropic&apos;s Claude, our AI understands sports context, brand guidelines, and design best practices.
            </p>
            <ul className="space-y-3 mb-7">
              {claudeCheckItems.map((item) => (
                <li key={item} className="gsap-check-item flex items-start gap-3" style={{ cursor: "default" }}>
                  <div className="check-icon mt-0.5 flex-shrink-0" style={{ color: "#ff504e" }}>
                    <IconCheckCircle />
                  </div>
                  <span className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 font-semibold transition-colors duration-150"
              style={{ color: "#ff504e" }}
            >
              Explore AI Graphics <IconArrowRight />
            </Link>
          </div>
          {/* Right: coded illustration — 50%, centred */}
          <div className="w-full md:w-1/2 flex items-center justify-center gsap-feature-image">
            <div className="w-full max-w-lg">
              <AIGraphicsIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6b. AI THEME BUILDER (FUSE) ════════════════════════════ */}
      <section className="px-4 md:px-8 py-16 gsap-feature-section">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          {/* Right text — 50% */}
          <div className="w-full md:w-1/2 gsap-feature-text">
            <p className="text-sm font-semibold mb-3" style={{ color: "#ff504e" }}>AI Theme Builder</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
              Meet Fuse.<br />Design without limits.
            </h2>
            <p className="text-lg leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.5)" }}>
              Fuse is LIGR&apos;s advanced visual theme builder. Drag and drop components, bind live data, set brand colours, and preview everything in real time. No code, no export, no waiting — go straight from design to live broadcast.
            </p>
            <ul className="space-y-3 mb-7">
              {fuseCheckItems.map((item) => (
                <li key={item} className="gsap-check-item flex items-start gap-3" style={{ cursor: "default" }}>
                  <div className="check-icon mt-0.5 flex-shrink-0" style={{ color: "#ff504e" }}>
                    <IconCheckCircle />
                  </div>
                  <span className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 font-semibold transition-colors duration-150"
              style={{ color: "#ff504e" }}
            >
              Explore Fuse <IconArrowRight />
            </Link>
          </div>
          {/* Left: coded illustration — 50%, centred */}
          <div className="w-full md:w-1/2 flex items-center justify-center gsap-feature-image">
            <div className="w-full max-w-lg">
              <FuseDetailIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. CTA ══════════════════════════════════════════════════ */}
      <section className="px-4 md:px-8 py-6 pb-10 gsap-fade">
        <div className="section-card dot-grid-card overflow-hidden">
          <div
            className="section-glow"
            style={{
              width: "800px", height: "800px",
              top: "-200px", left: "-100px",
              background: "radial-gradient(circle, rgba(255,80,78,0.18) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 p-8 md:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
                Ready to elevate your sports broadcast?
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Join hundreds of organisations using LIGR to deliver broadcast-quality production — from local leagues to national federations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pricing"
                  className="gsap-btn-hover inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-base transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "#ffffff" }}
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="gsap-btn-hover btn-primary inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-base text-white"
                >
                  Start for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
