"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const STAGES = [
  { step: "01", label: "SYSTEMS ARCHITECTURE", detail: "Compiling type-safe foundation" },
  { step: "02", label: "INTERFACE & MOTION", detail: "Loading design tokens & viewports" },
  { step: "03", label: "CURATED EXPERIENCE", detail: "Finalizing selected works showcase" },
];

export default function BuildSequenceLoader() {
  const [mounted, setMounted] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const stageBoxRef = useRef<HTMLDivElement>(null);
  const phaseBadgeRef = useRef<HTMLSpanElement>(null);
  const phaseTitleRef = useRef<HTMLHeadingElement>(null);
  const phaseDetailRef = useRef<HTMLParagraphElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const glowLightRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const pill0Ref = useRef<HTMLDivElement>(null);
  const pill1Ref = useRef<HTMLDivElement>(null);
  const pill2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      if (containerRef.current) {
        containerRef.current.style.display = "none";
      }
      const t = setTimeout(() => setMounted(false), 0);
      return () => clearTimeout(t);
    }

    let isDismissed = false;

    const forceDismiss = () => {
      if (isDismissed) return;
      isDismissed = true;

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          yPercent: -10,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = "none";
            }
            setMounted(false);
          },
        });
      } else {
        setMounted(false);
      }
    };

    // HARD FAILSAFE TIMER: guaranteed dismissal at 1.8s maximum lifetime
    const hardTimer = setTimeout(() => {
      forceDismiss();
    }, 1800);

    // GSAP Sequence: updates DOM nodes directly without React re-render overhead
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          forceDismiss();
        },
      });

      // Progress animation (0 to 100 in 1.15s)
      const prog = { val: 0 };
      gsap.to(prog, {
        val: 100,
        duration: 1.15,
        ease: "power1.inOut",
        onUpdate: () => {
          const current = Math.round(prog.val);
          if (percentTextRef.current) {
            percentTextRef.current.textContent = `${current < 10 ? "0" + current : current}%`;
          }

          // Phase switches based on progress
          if (current >= 35 && current < 70) {
            if (phaseBadgeRef.current) phaseBadgeRef.current.textContent = "PHASE 02";
            if (phaseTitleRef.current) phaseTitleRef.current.textContent = STAGES[1].label;
            if (phaseDetailRef.current) phaseDetailRef.current.textContent = STAGES[1].detail;
            if (pill0Ref.current) pill0Ref.current.className = "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono bg-white/5 border-white/10 text-emerald-400 transition-all duration-200";
            if (pill1Ref.current) pill1Ref.current.className = "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono bg-[#2f7bff]/20 border-[#2f7bff]/50 text-white shadow-[0_0_15px_rgba(47,123,255,0.25)] transition-all duration-200";
          } else if (current >= 70) {
            if (phaseBadgeRef.current) phaseBadgeRef.current.textContent = "PHASE 03";
            if (phaseTitleRef.current) phaseTitleRef.current.textContent = STAGES[2].label;
            if (phaseDetailRef.current) phaseDetailRef.current.textContent = STAGES[2].detail;
            if (pill1Ref.current) pill1Ref.current.className = "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono bg-white/5 border-white/10 text-emerald-400 transition-all duration-200";
            if (pill2Ref.current) pill2Ref.current.className = "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono bg-[#2f7bff]/20 border-[#2f7bff]/50 text-white shadow-[0_0_15px_rgba(47,123,255,0.25)] transition-all duration-200";
          }
        },
      });

      // Top bar & initial showcase entrance
      tl.fromTo(
        topBarRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
        .fromTo(
          stageBoxRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.35 },
          "-=0.15"
        )
        .fromTo(
          progressLineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.15, ease: "power1.inOut", transformOrigin: "left center" },
          0
        )
        // Optical light sweep across the bar
        .fromTo(
          sweepRef.current,
          { x: "-100%", opacity: 0 },
          { x: "220%", opacity: 1, duration: 0.4, ease: "power2.inOut" },
          0.9
        )
        // Ambient pulse & curtain dissolve
        .to(glowLightRef.current, {
          opacity: 0.6,
          scale: 1.3,
          duration: 0.25,
          ease: "power2.out",
        }, 1.05)
        .to(containerRef.current, {
          opacity: 0,
          yPercent: -10,
          filter: "blur(4px)",
          duration: 0.35,
          ease: "power2.inOut",
        }, 1.25);
    }, containerRef);

    return () => {
      clearTimeout(hardTimer);
      ctx.revert();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      role="progressbar"
      aria-label="Loading Iuvora experience"
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed inset-0 z-[99999] bg-[#040406] text-white flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none pointer-events-none overflow-hidden"
    >
      {/* Subtle Technical Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div
        ref={glowLightRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2f7bff]/12 rounded-full blur-[140px] pointer-events-none transition-all duration-300"
      />

      {/* ─── Top Bar: Brand Wordmark & Initializing Status ─────────── */}
      <div
        ref={topBarRef}
        className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center p-1">
            <Image
              src="/logo/iuvora-logo.png"
              alt="Iuvora"
              width={18}
              height={18}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xs tracking-tight text-white uppercase font-mono">
              Iuvora
            </span>
            <span className="text-zinc-600 text-xs font-mono">/</span>
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              Digital Studio
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2f7bff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2f7bff]" />
          </span>
          <span className="text-[10px] tracking-widest uppercase text-zinc-300 hidden sm:inline">
            Initializing Build Sequence
          </span>
        </div>
      </div>

      {/* ─── Center: Dynamic Build Phase Showcase ──────────────────── */}
      <div
        ref={stageBoxRef}
        className="relative z-10 max-w-2xl my-auto space-y-6"
      >
        {/* Step Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#5b9aff] uppercase tracking-widest">
          <span
            ref={phaseBadgeRef}
            className="px-2 py-0.5 rounded bg-[#2f7bff]/15 border border-[#2f7bff]/30"
          >
            PHASE 01
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400 text-[11px]">03 PHASES</span>
        </div>

        {/* Phase Headline & Narrative */}
        <div className="space-y-2">
          <h2
            ref={phaseTitleRef}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans transition-all duration-200"
          >
            {STAGES[0].label}
          </h2>
          <p
            ref={phaseDetailRef}
            className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wide transition-all duration-200"
          >
            {STAGES[0].detail}
          </p>
        </div>

        {/* Phase Badges */}
        <div className="flex items-center gap-2 pt-2">
          <div
            ref={pill0Ref}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono bg-[#2f7bff]/20 border-[#2f7bff]/50 text-white shadow-[0_0_15px_rgba(47,123,255,0.25)] transition-all duration-200"
          >
            <span className="text-[10px]">01</span>
            <span className="text-[11px] hidden sm:inline">SYSTEMS</span>
          </div>

          <div
            ref={pill1Ref}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono bg-white/[0.02] border-white/5 text-zinc-600 transition-all duration-200"
          >
            <span className="text-[10px]">02</span>
            <span className="text-[11px] hidden sm:inline">INTERFACE</span>
          </div>

          <div
            ref={pill2Ref}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono bg-white/[0.02] border-white/5 text-zinc-600 transition-all duration-200"
          >
            <span className="text-[10px]">03</span>
            <span className="text-[11px] hidden sm:inline">EXPERIENCE</span>
          </div>
        </div>
      </div>

      {/* ─── Bottom: Technical Progress Bar & Counter ──────────────── */}
      <div className="relative z-10 space-y-3 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="tracking-widest uppercase text-[11px]">
            ARCHIVE ENGINE // READY
          </span>
          <span
            ref={percentTextRef}
            className="text-sm font-bold text-[#5b9aff] tabular-nums tracking-wider font-mono"
          >
            00%
          </span>
        </div>

        {/* Progress Track */}
        <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressLineRef}
            className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-[#1852b8] via-[#2f7bff] to-[#5b9aff] rounded-full shadow-[0_0_12px_#2f7bff]"
          />
          <div
            ref={sweepRef}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
