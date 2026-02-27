"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    id: "overlays",
    label: "Overlays",
    sub: "Design and automate",
    headline: ["Real-Time Overlays.", "Zero Delay."],
    desc: "Build, automate, and stream broadcast-quality overlays across 20+ sports. Scores, stats, and timers sync live — no manual updates, no production team required.",
  },
  {
    id: "ai",
    label: "AI Graphics",
    sub: "Describe it, get it",
    headline: ["Describe It.", "Get It. Instantly."],
    desc: "Powered by Anthropic's Claude. Type what you want in plain English and LIGR generates broadcast-ready graphics in seconds. Full automation mode handles it all.",
  },
  {
    id: "streaming",
    label: "Streaming",
    sub: "Go live everywhere",
    headline: ["Stream Everywhere.", "At Once."],
    desc: "Push to YouTube, Facebook, Twitch and custom RTMP destinations simultaneously. 4K resolution, Rive animations, and embeddable player all included.",
  },
];

function OverlayCard() {
  return (
    <div className="split-visual">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 80% at 70% 20%, rgba(255,80,78,0.28) 0%, rgba(29,32,42,0.97) 65%)" }} />
      <div className="line-grid absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] mb-5" style={{ color: "#ff504e" }}>OVERLAY STUDIO</div>
          <div className="rounded-2xl p-5 mb-4" style={{ backgroundColor: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs mb-1" style={{ color: "#6b7280" }}>HOME</div>
                <div className="text-xl font-extrabold">HAWKS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold tabular-nums" style={{ color: "#ff504e" }}>42 — 38</div>
                <div className="text-xs mt-1" style={{ color: "#6b7280" }}>Q3 · 8:24</div>
              </div>
              <div className="text-right">
                <div className="text-xs mb-1" style={{ color: "#6b7280" }}>AWAY</div>
                <div className="text-xl font-extrabold">LIONS</div>
              </div>
            </div>
            <div className="h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-full rounded-full" style={{ width: "55%", background: "#ff504e" }} />
            </div>
          </div>
          <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "rgba(255,80,78,0.1)", border: "1px solid rgba(255,80,78,0.18)" }}>
            <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: "#ff504e" }}>LIVE</span>
            <span className="text-xs" style={{ color: "#d1d5db" }}>Marcus Johnson · 3PT · Q3 8:05</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mt-4">
          {["Scoreboard", "Timer", "Player Stats", "Ticker"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.06)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AICard() {
  return (
    <div className="split-visual">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 80% at 30% 70%, rgba(255,80,78,0.22) 0%, rgba(29,32,42,0.97) 65%)" }} />
      <div className="line-grid absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] mb-5" style={{ color: "#ff504e" }}>AI GRAPHICS · CLAUDE-POWERED</div>
          <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-xs mb-2" style={{ color: "#4b5563" }}>DESCRIBE YOUR GRAPHIC</div>
            <div className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>&quot;Player profile card for #23 — season stats, team colours, sponsor logo bottom right&quot;</div>
          </div>
          <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,80,78,0.08)", border: "1px solid rgba(255,80,78,0.18)" }}>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-white flex-shrink-0" style={{ backgroundColor: "#ff504e" }}>23</div>
              <div>
                <div className="font-bold text-sm">Marcus Johnson</div>
                <div className="text-xs" style={{ color: "#9ca3af" }}>Forward · Sydney Hawks</div>
                <div className="flex gap-4 mt-2">
                  {[["24.3", "PPG"], ["7.1", "AST"], ["5.8", "REB"]].map(([v, k]) => (
                    <div key={k}>
                      <div className="text-sm font-bold" style={{ color: "#ff504e" }}>{v}</div>
                      <div className="text-xs" style={{ color: "#6b7280" }}>{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#ff504e" }} />
          <span className="text-xs" style={{ color: "#6b7280" }}>Generated in 1.2s · Ready to broadcast</span>
        </div>
      </div>
    </div>
  );
}

function StreamingCard() {
  return (
    <div className="split-visual">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 80% at 80% 40%, rgba(255,80,78,0.18) 0%, rgba(29,32,42,0.97) 65%)" }} />
      <div className="line-grid absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }} />
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] mb-5" style={{ color: "#ff504e" }}>STREAM CONTROL</div>
          <div className="space-y-3">
            {[
              { name: "YouTube Live", q: "4K · 60fps", live: true },
              { name: "Facebook Live", q: "1080p · 30fps", live: true },
              { name: "Twitch", q: "1080p · 60fps", live: true },
              { name: "Custom RTMP", q: "720p · 30fps", live: false },
            ].map((d) => (
              <div key={d.name} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <div className="text-sm font-semibold">{d.name}</div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>{d.q}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.live ? "#22c55e" : "#4b5563" }} />
                  <span className="text-xs font-semibold" style={{ color: d.live ? "#22c55e" : "#4b5563" }}>{d.live ? "LIVE" : "STANDBY"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl px-4 py-3 flex items-center justify-between mt-4" style={{ backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)" }}>
          <span className="text-xs font-semibold" style={{ color: "#22c55e" }}>● 3 streams live</span>
          <span className="text-xs" style={{ color: "#6b7280" }}>2h 14m uptime</span>
        </div>
      </div>
    </div>
  );
}

const cards = [<OverlayCard key="overlays" />, <AICard key="ai" />, <StreamingCard key="streaming" />];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("overlays");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    features.forEach((f) => {
      const el = document.getElementById(`feature-${f.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(f.id); },
        { threshold: 0.35, rootMargin: "-80px 0px -80px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(`feature-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {/* Sticky Tab Nav */}
      <div className="feature-tab-nav">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex gap-8 md:gap-12">
          {features.map((f) => (
            <button key={f.id} onClick={() => scrollTo(f.id)} className="relative py-5 text-left">
              <span className={`block text-sm font-bold transition-colors duration-200 ${activeTab === f.id ? "text-white" : "text-gray-500"}`}>{f.label}</span>
              <span className={`block text-xs transition-colors duration-200 ${activeTab === f.id ? "text-gray-400" : "text-gray-600"}`}>{f.sub}</span>
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                style={{ backgroundColor: "#ff504e", opacity: activeTab === f.id ? 1 : 0 }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Feature Split Sections */}
      {features.map((f, i) => (
        <section
          key={f.id}
          id={`feature-${f.id}`}
          className="relative px-8 md:px-16 py-24 overflow-hidden"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {i % 2 === 0 ? (
                <>
                  <ScrollReveal direction="left">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                      {f.headline[0]}<br />
                      <span style={{ color: "#ff504e" }}>{f.headline[1]}</span>
                    </h2>
                    <p className="text-lg leading-relaxed mb-8" style={{ color: "#9ca3af" }}>{f.desc}</p>
                    <Link
                      href="/features"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                      style={{ backgroundColor: "rgba(255,80,78,0.1)", color: "#ff504e", border: "1px solid rgba(255,80,78,0.2)" }}
                    >
                      Learn More →
                    </Link>
                  </ScrollReveal>
                  <ScrollReveal direction="right">{cards[i]}</ScrollReveal>
                </>
              ) : (
                <>
                  <ScrollReveal direction="left">{cards[i]}</ScrollReveal>
                  <ScrollReveal direction="right">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                      {f.headline[0]}<br />
                      <span style={{ color: "#ff504e" }}>{f.headline[1]}</span>
                    </h2>
                    <p className="text-lg leading-relaxed mb-8" style={{ color: "#9ca3af" }}>{f.desc}</p>
                    <Link
                      href="/features"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                      style={{ backgroundColor: "rgba(255,80,78,0.1)", color: "#ff504e", border: "1px solid rgba(255,80,78,0.2)" }}
                    >
                      Learn More →
                    </Link>
                  </ScrollReveal>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
