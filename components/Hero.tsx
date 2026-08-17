"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Layers, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          metaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          scrollCueRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-grid-pattern hero-radial-glow"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#2f7bff]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Main Content */}
      <div className="portfolio-container relative z-10 my-auto flex flex-col items-start max-w-5xl">
        {/* Eyebrow badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#2f7bff]" />
          <span className="tracking-widest uppercase text-[11px] text-zinc-300">
            Selected Work by Iuvora
          </span>
        </div>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8"
        >
          Crafted for scale. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            Built for impact.
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-normal leading-relaxed max-w-3xl mb-10"
        >
          An in-depth showcase of real-world web applications, luxury architectural platforms, and mobile prototypes engineered with obsessive craft and performance.
        </p>

        {/* Quick Scope Specs */}
        <div
          ref={metaRef}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 w-full max-w-2xl text-xs"
        >
          <div className="flex items-center gap-2.5 text-zinc-400">
            <Layers className="w-4 h-4 text-[#2f7bff]" />
            <div>
              <div className="font-semibold text-white">5 Featured Builds</div>
              <div className="text-zinc-500 text-[11px]">Production & Prototype</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-400">
            <Sparkles className="w-4 h-4 text-[#2f7bff]" />
            <div>
              <div className="font-semibold text-white">Full-Stack Craft</div>
              <div className="text-zinc-500 text-[11px]">Web & Mobile Systems</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2.5 text-zinc-400">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <div>
              <div className="font-semibold text-white">Live Client Work</div>
              <div className="text-zinc-500 text-[11px]">Deployed Globally</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div
        ref={scrollCueRef}
        className="portfolio-container relative z-10 flex justify-between items-center pt-8 border-t border-white/5"
      >
        <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          [ 01 — 05 Case Studies ]
        </div>

        <button
          onClick={scrollToGallery}
          className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to projects gallery"
        >
          <span>Explore Works</span>
          <div className="w-7 h-7 rounded-full border border-white/15 group-hover:border-[#2f7bff] group-hover:bg-[#2f7bff]/10 flex items-center justify-center transition-all duration-300">
            <ArrowDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#2f7bff] group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
