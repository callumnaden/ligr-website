"use client";

import React, { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Free",
    desc: "Get started with basic overlays and see what LIGR can do.",
    monthly: 0,
    annual: 0,
    cta: "Start Free",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "1 sport",
      "Basic scoreboard overlay",
      "LIGR watermark",
      "720p streaming",
      "Community support",
    ],
  },
  {
    name: "Starter",
    desc: "For clubs and leagues getting into live production.",
    monthly: 29,
    annual: 25,
    cta: "Get Starter",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "3 sports",
      "Standard overlay pack",
      "No watermark",
      "1080p streaming",
      "Basic Fuse themes",
      "Email support",
      "1 simultaneous stream",
    ],
  },
  {
    name: "Growth",
    desc: "For growing organisations with multiple competitions.",
    monthly: 49,
    annual: 42,
    cta: "Get Growth",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "10 sports",
      "Full overlay library",
      "Custom branding",
      "1080p60 streaming",
      "Advanced Fuse editor",
      "Sponsor placements",
      "3 simultaneous streams",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    desc: "Full platform access with AI, automation, and analytics.",
    monthly: 79,
    annual: 67,
    cta: "Get Pro",
    ctaHref: "/contact",
    highlight: true,
    badge: "Most Popular",
    features: [
      "All 20+ sports",
      "AI Graphics (Claude-powered)",
      "Full automation mode",
      "4K streaming",
      "Rive animations",
      "Advanced Fuse + templates",
      "Sponsor analytics & reports",
      "10 simultaneous streams",
      "Dedicated support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    desc: "Custom solutions for federations, broadcasters, and networks.",
    monthly: null,
    annual: null,
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited sports & streams",
      "White-label platform",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
      "Custom AI training",
      "Multi-tenant management",
      "Volume discounts",
    ],
  },
];

const tableFeatures = [
  { category: "Production", rows: [
    { label: "Sports supported", values: ["1", "3", "10", "20+", "Unlimited"] },
    { label: "Overlay library", values: ["Basic", "Standard", "Full", "Full + AI", "Custom"] },
    { label: "Fuse theme builder", values: ["Basic", "Advanced", "Advanced", "✓", "Custom"] },
    { label: "AI Graphics", values: [false, false, false, true, true] },
    { label: "Rive animations", values: [false, false, false, true, true] },
    { label: "Full automation", values: [false, false, false, true, true] },
  ]},
  { category: "Streaming", rows: [
    { label: "Max resolution", values: ["720p", "1080p", "1080p60", "4K", "4K+"] },
    { label: "Simultaneous streams", values: ["1", "1", "3", "10", "Unlimited"] },
    { label: "Multi-destination", values: [false, false, false, true, true] },
    { label: "Cloud recording", values: [false, false, true, true, true] },
    { label: "Embeddable player", values: [false, false, false, true, true] },
  ]},
  { category: "Monetisation", rows: [
    { label: "Sponsor placements", values: [false, false, true, true, true] },
    { label: "Dynamic ad rolls", values: [false, false, false, true, true] },
    { label: "Exposure analytics", values: [false, false, false, true, true] },
    { label: "Sponsor portal", values: [false, false, false, true, true] },
  ]},
  { category: "Support", rows: [
    { label: "Community forum", values: [true, true, true, true, true] },
    { label: "Email support", values: [false, true, true, true, true] },
    { label: "Priority support", values: [false, false, true, true, true] },
    { label: "Dedicated manager", values: [false, false, false, false, true] },
    { label: "SLA guarantee", values: [false, false, false, false, true] },
  ]},
];

const faqs = [
  { q: "Can I switch plans at any time?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated." },
  { q: "Is there a free trial for paid plans?", a: "Yes, all paid plans come with a 14-day free trial. No credit card required to start." },
  { q: "What sports does LIGR support?", a: "LIGR supports 20+ sports including basketball, football, cricket, netball, rugby, and more. Enterprise customers can request custom sport configurations." },
  { q: "Do I need special hardware?", a: "No. LIGR is fully cloud-based. All you need is a camera and an internet connection. Our cloud pipeline handles everything else." },
  { q: "How does AI Graphics work?", a: "AI Graphics is powered by Anthropic's Claude. Simply describe the overlay you want in plain English and our AI generates broadcast-ready graphics in seconds." },
  { q: "What does the annual billing discount look like?", a: "Annual billing saves you 15% compared to monthly billing. The discount is applied to all paid plans." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-[92px] overflow-hidden">
      {/* Hero */}
      <section className="relative text-center px-6 py-28 overflow-hidden">
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
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 40%, rgba(29,32,42,0.85) 100%)" }}
        />
        <ScrollReveal className="relative z-10">
          <p className="text-xs font-semibold tracking-[0.2em] mb-4" style={{ color: "#ff504e" }}>
            PRICING
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Simple, transparent pricing.</h1>
          <p className="text-lg mb-10" style={{ color: "#9ca3af" }}>
            Start free. Scale as you grow. No hidden fees, no long-term contracts.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm font-medium" style={{ color: annual ? "#9ca3af" : "#ffffff" }}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors"
              style={{ backgroundColor: annual ? "#ff504e" : "rgba(255,255,255,0.2)" }}
            >
              <span
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform"
                style={{ transform: annual ? "translateX(24px)" : "translateX(0)" }}
              />
            </button>
            <span className="text-sm font-medium" style={{ color: annual ? "#ffffff" : "#9ca3af" }}>
              Annual{" "}
              <span
                className="px-2 py-0.5 rounded-full text-xs font-bold"
                style={{ backgroundColor: "rgba(255,80,78,0.2)", color: "#ff504e" }}
              >
                Save 15%
              </span>
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing cards */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-4">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 60}>
            <div
              className={`relative rounded-2xl p-6 flex flex-col h-full ${plan.highlight ? "border-glow" : "glow-card"}`}
              style={{
                backgroundColor: plan.highlight
                  ? "rgba(255,80,78,0.08)"
                  : "rgba(255,255,255,0.04)",
                border: plan.highlight
                  ? "1px solid rgba(255,80,78,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "#ff504e" }}
                >
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className="text-xs mb-4" style={{ color: "#9ca3af" }}>
                {plan.desc}
              </p>

              <div className="mb-6">
                {plan.monthly === null ? (
                  <span className="text-3xl font-extrabold">Custom</span>
                ) : (
                  <>
                    <span className="text-3xl font-extrabold">
                      ${annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="text-sm ml-1" style={{ color: "#9ca3af" }}>
                      /mo
                    </span>
                  </>
                )}
              </div>

              <Link
                href={plan.ctaHref}
                className="block text-center py-2.5 rounded-xl text-sm font-bold mb-6 transition-colors"
                style={
                  plan.highlight
                    ? { backgroundColor: "#ff504e", color: "#ffffff" }
                    : {
                        backgroundColor: "rgba(255,255,255,0.08)",
                        color: "#ffffff",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }
                }
              >
                {plan.cta}
              </Link>

              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: "#ff504e" }}>
                      ✓
                    </span>
                    <span className="text-xs" style={{ color: "#d1d5db" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section
        className="px-6 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold mb-2 text-center">Compare Plans</h2>
            <p className="text-center mb-12" style={{ color: "#9ca3af" }}>
              A detailed breakdown of what&apos;s included in each tier.
            </p>
          </ScrollReveal>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-semibold" style={{ color: "#6b7280" }}>
                    Feature
                  </th>
                  {["Free", "Starter", "Growth", "Pro", "Enterprise"].map((p) => (
                    <th key={p} className="text-center py-3 px-4 font-semibold text-white">
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((section) => (
                  <React.Fragment key={section.category}>
                    <tr>
                      <td
                        colSpan={6}
                        className="py-4 px-4 text-xs font-semibold tracking-widest"
                        style={{
                          color: "#6b7280",
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {section.category.toUpperCase()}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={row.label}
                        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                      >
                        <td className="py-3 px-4" style={{ color: "#d1d5db" }}>
                          {row.label}
                        </td>
                        {row.values.map((v, i) => (
                          <td key={i} className="text-center py-3 px-4">
                            {typeof v === "boolean" ? (
                              v ? (
                                <span style={{ color: "#ff504e" }}>✓</span>
                              ) : (
                                <span style={{ color: "#374151" }}>—</span>
                              )
                            ) : (
                              <span style={{ color: "#d1d5db" }}>{v}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-6 py-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between font-medium"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "#ff504e" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="gradient-line" />
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <div
          className="orb orb-b absolute pointer-events-none"
          style={{
            width: "500px", height: "500px",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(255,80,78,0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <ScrollReveal className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-4">Not sure which plan is right?</h2>
          <p className="mb-8" style={{ color: "#9ca3af" }}>
            Talk to our team. We&apos;ll help you find the perfect setup for your sport, scale, and budget.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block px-8 py-4 rounded-xl font-bold text-white"
          >
            Talk to Sales
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
