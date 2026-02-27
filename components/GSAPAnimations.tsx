"use client";

import { useEffect } from "react";

export default function GSAPAnimations() {
  useEffect(() => {
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // ─── Hero entrance (on load) ──────────────────────────────────
      const badge = document.querySelector(".hero-badge");
      const h1 = document.querySelector(".hero-h1");
      const ctas = document.querySelector(".hero-ctas");
      const sub = document.querySelector(".hero-sub");
      const heroIllustration = document.querySelector(".hero-illustration");

      const heroTl = gsap.timeline({ delay: 0.15 });
      if (badge)
        heroTl.fromTo(
          badge,
          { opacity: 0, y: -14 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      if (h1)
        heroTl.fromTo(
          h1,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" },
          "-=0.25"
        );
      if (ctas)
        heroTl.fromTo(
          ctas,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
      if (sub)
        heroTl.fromTo(
          sub,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      if (heroIllustration)
        heroTl.fromTo(
          heroIllustration,
          { opacity: 0, x: 48, scale: 0.97 },
          { opacity: 1, x: 0, scale: 1, duration: 0.85, ease: "power2.out" },
          "-=0.55"
        );

      // ─── Scroll reveal: sections ──────────────────────────────────
      gsap.utils.toArray<Element>(".gsap-fade").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ─── Scroll reveal: staggered children ────────────────────────
      gsap.utils.toArray<Element>(".gsap-stagger").forEach((parent) => {
        const children = parent.querySelectorAll(".gsap-stagger-item");
        if (!children.length) return;
        gsap.fromTo(
          children,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ─── Scroll reveal: stat numbers ──────────────────────────────
      const statsParent = document.querySelector(".gsap-stats");
      if (statsParent) {
        const statItems = statsParent.querySelectorAll(".gsap-stat");
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 28, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "back.out(1.4)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: statsParent,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // ─── Scroll reveal: alternating feature sections ──────────────
      const featureSections = document.querySelectorAll(".gsap-feature-section");
      featureSections.forEach((section, i) => {
        const text = section.querySelector(".gsap-feature-text");
        const image = section.querySelector(".gsap-feature-image");
        const xFrom = i % 2 === 0 ? -40 : 40;
        if (text)
          gsap.fromTo(
            text,
            { opacity: 0, x: xFrom },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        if (image)
          gsap.fromTo(
            image,
            { opacity: 0, x: -xFrom, scale: 0.96 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                toggleActions: "play none none none",
              },
              delay: 0.1,
            }
          );
      });

      // ─── Hover: feature cards (platform grid) ────────────────────
      const featureCards = document.querySelectorAll(".feature-card");
      featureCards.forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -5, duration: 0.22, ease: "power2.out" })
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.inOut" })
        );
      });

      // ─── Hover: how-it-works cards ───────────────────────────────
      const howCards = document.querySelectorAll(".how-card");
      howCards.forEach((card) => {
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -7, duration: 0.22, ease: "power2.out" })
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.inOut" })
        );
      });

      // ─── Hover: CTA buttons ───────────────────────────────────────
      document.querySelectorAll(".gsap-btn-hover").forEach((btn) => {
        btn.addEventListener("mouseenter", () =>
          gsap.to(btn, { scale: 1.035, duration: 0.2, ease: "power2.out" })
        );
        btn.addEventListener("mouseleave", () =>
          gsap.to(btn, { scale: 1, duration: 0.22, ease: "power2.inOut" })
        );
      });

      // ─── Hover: check items (feature bullet points) ───────────────
      document.querySelectorAll(".gsap-check-item").forEach((item) => {
        item.addEventListener("mouseenter", () =>
          gsap.to(item, { x: 4, duration: 0.2, ease: "power2.out" })
        );
        item.addEventListener("mouseleave", () =>
          gsap.to(item, { x: 0, duration: 0.22, ease: "power2.inOut" })
        );
      });
    })();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      });
    };
  }, []);

  return null;
}
