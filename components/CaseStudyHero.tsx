"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowLeft, ArrowUpRight, Smartphone, Globe, ShieldCheck } from "lucide-react";
import { Project } from "@/data/projects";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backBtnRef = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        backBtnRef.current,
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.1 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          tagsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          previewRef.current,
          { opacity: 0, y: 30, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power2.out" },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 lg:pb-28 overflow-hidden bg-grid-pattern hero-radial-glow"
    >
      {/* Refined Ambient Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-[#2f7bff]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="portfolio-container relative z-10 max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 sm:mb-12">
          <Link
            ref={backBtnRef}
            href="/#gallery"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Works Archive</span>
          </Link>
        </div>

        {/* Monospace Eyebrow & Category Info */}
        <div ref={badgeRef} className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
          <span className="font-mono text-sm font-semibold tracking-widest text-[#2f7bff]">
            {project.number}
          </span>
          <span className="text-zinc-700 font-mono text-xs">/</span>
          <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300">
            {project.category}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2f7bff]/10 border border-[#2f7bff]/25 text-xs font-mono text-[#5b9aff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f7bff] animate-pulse" />
              <span>{project.status}</span>
            </span>
          )}
        </div>

        {/* Oversized Cinematic Display Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.04] mb-8"
        >
          {project.title}
        </h1>

        {/* Restrained Editorial One-line Description */}
        <p
          ref={descRef}
          className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-10"
        >
          {project.description}
        </p>

        {/* Minimal Tags */}
        <div ref={tagsRef} className="flex flex-wrap gap-2 sm:gap-2.5 mb-12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-md bg-white/[0.03] border border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Primary Actions */}
        <div ref={actionsRef} className="flex flex-wrap items-center gap-4 mb-16 lg:mb-24">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-medium text-sm bg-white text-black hover:bg-[#2f7bff] hover:text-white transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(47,123,255,0.4)] group cursor-pointer"
            >
              <span>Visit Live Platform</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-amber-300 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Internal Prototype / Concept Build</span>
            </div>
          )}

          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-mono text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <span>All Projects</span>
          </Link>
        </div>

        {/* Showcase Centerpiece (Hardware Emulators) */}
        <div
          ref={previewRef}
          className="rounded-3xl bg-[#09090c] border border-white/15 p-2.5 sm:p-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95),0_0_50px_rgba(47,123,255,0.12)] overflow-hidden transition-all duration-700"
        >
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111116] rounded-t-2xl border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/60 border border-white/5 text-xs font-mono text-zinc-400 max-w-sm truncate">
              {project.isPrototype ? (
                <Smartphone className="w-3.5 h-3.5 text-[#2f7bff] shrink-0" />
              ) : (
                <Globe className="w-3.5 h-3.5 text-[#2f7bff] shrink-0" />
              )}
              <span className="truncate">
                {project.liveUrl ? project.liveUrl : "https://prototype.internal.iuvora.com"}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                {project.isPrototype ? "Mobile Frame" : "Desktop Viewport"}
              </span>
            </div>
          </div>

          {/* Media Viewport */}
          {project.isPrototype ? (
            <div className="relative w-full py-16 sm:py-24 px-4 bg-[#050507] rounded-b-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              <div className="absolute w-96 h-96 bg-[#2f7bff]/20 rounded-full blur-[100px] pointer-events-none" />

              {/* Smartphone Bezel */}
              <div className="relative z-10 w-[240px] sm:w-[280px] rounded-[36px] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(47,123,255,0.25)] border border-white/20">
                {/* Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800 mr-1.5" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>

                {/* Screen View */}
                <div className="relative w-full aspect-[285/611] rounded-[28px] overflow-hidden bg-black">
                  <Image
                    src={project.image}
                    alt={`${project.title} prototype interface preview`}
                    fill
                    sizes="280px"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Home Indicator Bar */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#050507] rounded-b-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} live interface preview`}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
