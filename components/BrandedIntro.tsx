"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function BrandedIntro() {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const hasSeenIntro = sessionStorage.getItem("iuvora_intro_viewed");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (hasSeenIntro === "true" || prefersReducedMotion) {
        return false;
      }
    }
    return true;
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const brandTextRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          sessionStorage.setItem("iuvora_intro_viewed", "true");
          setIsVisible(false);
        },
      });

      // 0.00s - 0.25s: Ambient Glow forms
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1.1, duration: 0.6, ease: "power2.out" }
      )
        // 0.20s - 0.65s: Logo & Brand Wordmark reveals (blur -> sharp, 96% -> 100%)
        .fromTo(
          logoWrapperRef.current,
          { opacity: 0, scale: 0.94, filter: "blur(6px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.55 },
          "-=0.4"
        )
        .fromTo(
          brandTextRef.current,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.35"
        )
        // 0.55s - 0.90s: Tagline reveals
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.25"
        )
        // 0.75s - 1.15s: Signature Electric-Blue Light Sweep across brand
        .fromTo(
          lightSweepRef.current,
          { x: "-120%", opacity: 0 },
          { x: "140%", opacity: 0.85, duration: 0.5, ease: "power2.inOut" },
          "-=0.3"
        )
        // 1.15s - 1.45s: Smooth curtain dissolve into site
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
    }, containerRef);

    return () => ctx.revert();
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute w-[450px] sm:w-[600px] h-[300px] sm:h-[380px] bg-[#2f7bff]/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Brand Centerpiece */}
        <div className="relative flex items-center gap-3.5 mb-3 overflow-hidden py-1 px-3">
          {/* Logo Mark */}
          <div
            ref={logoWrapperRef}
            className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(47,123,255,0.25)]"
          >
            <Image
              src="/logo/iuvora-logo.png"
              alt="Iuvora"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>

          {/* Wordmark */}
          <div
            ref={brandTextRef}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans"
          >
            Iuvora
          </div>

          {/* Light Sweep Effect */}
          <div
            ref={lightSweepRef}
            className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#5b9aff]/40 to-transparent skew-x-12 pointer-events-none"
          />
        </div>

        {/* Minimalist Brand Tagline */}
        <div
          ref={taglineRef}
          className="flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-[0.22em] text-zinc-400 uppercase mt-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2f7bff] inline-block" />
          <span>Crafted for scale. Built for impact.</span>
        </div>
      </div>
    </div>
  );
}
