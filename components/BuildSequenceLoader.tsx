"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const BUILD_STAGES = [
  { step: "01", label: "SYSTEMS ARCHITECTURE", detail: "Compiling type-safe foundation" },
  { step: "02", label: "INTERFACE & MOTION", detail: "Loading design tokens & viewports" },
  { step: "03", label: "CURATED EXPERIENCE", detail: "Finalizing selected works showcase" },
];

const HARD_TIMEOUT_MS = 2000;

export default function BuildSequenceLoader() {
  const [shouldRender, setShouldRender] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const hasViewed = sessionStorage.getItem("iuvora_build_loaded");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (hasViewed === "true" || prefersReducedMotion) {
        return false;
      }
      return true;
    }
    return true;
  });

  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const stageBoxRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const glowLightRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldRender) return;

    // Failsafe: Hard safety timer to guarantee the loader never blocks the page past 2s
    const failsafeTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("iuvora_build_loaded", "true");
      }
      setShouldRender(false);
    }, HARD_TIMEOUT_MS);

    // GSAP Master Timeline for the Build Sequence (~1.4s total)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          clearTimeout(failsafeTimer);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("iuvora_build_loaded", "true");
          }
          setShouldRender(false);
        },
      });

      // Progress counter numeric animation
      const percentObj = { val: 0 };
      gsap.to(percentObj, {
        val: 100,
        duration: 1.15,
        ease: "power2.inOut",
        onUpdate: () => {
          const current = Math.round(percentObj.val);
          setPercent(current);
          if (current > 33 && current <= 66) {
            setActiveStageIdx(1);
          } else if (current > 66) {
            setActiveStageIdx(2);
          }
        },
      });

      // 0.0s - 0.25s: Initial Frame Entrance
      tl.fromTo(
        topBarRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.35 }
      )
        .fromTo(
          stageBoxRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          0.1
        )
        // 0.2s - 1.15s: Progress Bar fills horizontally
        .fromTo(
          progressLineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.05, ease: "power2.inOut", transformOrigin: "left center" },
          0.15
        )
        // 1.1s - 1.35s: Electric-blue optical sweep flashes through the bar
        .fromTo(
          sweepRef.current,
          { x: "-100%", opacity: 0 },
          { x: "200%", opacity: 1, duration: 0.35, ease: "power2.inOut" },
          0.95
        )
        // 1.25s - 1.55s: Ambient glow flash & Clean exit curtain lift
        .to(glowLightRef.current, {
          opacity: 0.8,
          scale: 1.4,
          duration: 0.25,
          ease: "power2.out",
        }, 1.05)
        .to(containerRef.current, {
          opacity: 0,
          yPercent: -8,
          filter: "blur(4px)",
          duration: 0.35,
          ease: "power2.inOut",
        }, 1.2);
    }, containerRef);

    return () => {
      clearTimeout(failsafeTimer);
      ctx.revert();
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  const currentStage = BUILD_STAGES[activeStageIdx];

  return (
    <div
      ref={containerRef}
      aria-label="Loading Iuvora experience"
      className="fixed inset-0 z-[99999] bg-[#040406] text-white flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none pointer-events-none overflow-hidden"
    >
      {/* Subtle Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div
        ref={glowLightRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2f7bff]/12 rounded-full blur-[140px] pointer-events-none transition-all duration-300"
      />

      {/* ─── STAGE 1 & 2: Top Bar with Brand & System Meta ───────────── */}
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

      {/* ─── STAGE 3: Build Status Showcase ──────────────────────────── */}
      <div
        ref={stageBoxRef}
        className="relative z-10 max-w-2xl my-auto space-y-6"
      >
        {/* Step Indicator Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#5b9aff] uppercase tracking-widest">
          <span className="px-2 py-0.5 rounded bg-[#2f7bff]/15 border border-[#2f7bff]/30">
            PHASE {currentStage.step}
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400 text-[11px]">03 PHASES</span>
        </div>

        {/* Main Stage Headline */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans transition-all duration-200">
            {currentStage.label}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wide transition-all duration-200">
            {currentStage.detail}
          </p>
        </div>

        {/* Stage Pills */}
        <div className="flex items-center gap-2 pt-2">
          {BUILD_STAGES.map((s, idx) => {
            const isCompleted = activeStageIdx > idx;
            const isCurrent = activeStageIdx === idx;
            return (
              <div
                key={s.step}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#2f7bff]/15 border-[#2f7bff]/50 text-white shadow-[0_0_15px_rgba(47,123,255,0.25)]"
                    : isCompleted
                    ? "bg-white/5 border-white/10 text-emerald-400"
                    : "bg-white/[0.02] border-white/5 text-zinc-600"
                }`}
              >
                <span className="text-[10px]">{s.step}</span>
                <span className="text-[11px] hidden sm:inline">{s.label.split(" ")[0]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── STAGE 4: Technical Progress Line & Numeric Indicator ─────── */}
      <div className="relative z-10 space-y-3 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="tracking-widest uppercase text-[11px]">
            ARCHIVE ENGINE // READY
          </span>
          <span className="text-sm font-bold text-[#5b9aff] tabular-nums tracking-wider font-mono">
            {percent < 10 ? `0${percent}` : percent}%
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
          {/* Active Fill Line */}
          <div
            ref={progressLineRef}
            className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-[#1852b8] via-[#2f7bff] to-[#5b9aff] rounded-full shadow-[0_0_12px_#2f7bff]"
          />
          {/* Light Sweep Particle */}
          <div
            ref={sweepRef}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
