"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const enquiryTypes = [
  "General Enquiry",
  "Book a Demo",
  "Enterprise Pricing",
  "Partnership",
  "Technical Support",
];

const reasons = [
  "Start a free trial",
  "Book a personalised demo",
  "Discuss Enterprise pricing",
  "Request a custom sport",
  "Partnership enquiry",
  "Technical support",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    enquiryType: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero */}
      <section className="relative text-center px-6 py-24 overflow-hidden">
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
            CONTACT
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Let&apos;s talk sports production.
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
            Whether you&apos;re a local club or a national federation — we&apos;d love to hear from you.
          </p>
        </ScrollReveal>
      </section>

      {/* Content */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left info */}
          <ScrollReveal direction="left">
          <div className="space-y-10">
            {/* Email */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest mb-3"
                style={{ color: "#6b7280" }}
              >
                EMAIL US
              </p>
              <div className="flex items-center gap-3">
                <span style={{ color: "#ff504e" }}>✉</span>
                <a
                  href="mailto:hello@ligrsystems.com"
                  className="font-medium"
                  style={{ color: "#ffffff" }}
                >
                  hello@ligrsystems.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest mb-3"
                style={{ color: "#6b7280" }}
              >
                LOCATION
              </p>
              <div className="flex items-center gap-3">
                <span style={{ color: "#ff504e" }}>📍</span>
                <span>Sydney, Australia</span>
              </div>
            </div>

            {/* Response time */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest mb-3"
                style={{ color: "#6b7280" }}
              >
                RESPONSE TIME
              </p>
              <div className="flex items-start gap-3">
                <span style={{ color: "#ff504e" }}>💬</span>
                <span style={{ color: "#d1d5db" }}>
                  We typically respond within 24 hours on business days.
                </span>
              </div>
            </div>

            {/* Reasons */}
            <div>
              <p
                className="text-xs font-semibold tracking-widest mb-4"
                style={{ color: "#6b7280" }}
              >
                COMMON REASONS TO REACH OUT
              </p>
              <ul className="space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3">
                    <span style={{ color: "#ff504e" }}>✓</span>
                    <span className="text-sm" style={{ color: "#d1d5db" }}>
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal direction="right">
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                <p style={{ color: "#9ca3af" }}>
                  We&apos;ll get back to you within 24 hours on business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-widest mb-2"
                      style={{ color: "#6b7280" }}
                    >
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Luke"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#ffffff",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-widest mb-2"
                      style={{ color: "#6b7280" }}
                    >
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      placeholder="McCoy"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#ffffff",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "#6b7280" }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="luke@ligrsystems.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "#6b7280" }}
                  >
                    ORGANISATION
                  </label>
                  <input
                    type="text"
                    placeholder="LIGR Systems"
                    value={formData.organisation}
                    onChange={(e) =>
                      setFormData({ ...formData, organisation: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "#6b7280" }}
                  >
                    ENQUIRY TYPE
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) =>
                      setFormData({ ...formData, enquiryType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type} style={{ backgroundColor: "#22252f" }}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold tracking-widest mb-2"
                    style={{ color: "#6b7280" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your sport, organisation, and what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2"
                >
                  ✈ Send Message
                </button>
              </form>
            )}
          </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
