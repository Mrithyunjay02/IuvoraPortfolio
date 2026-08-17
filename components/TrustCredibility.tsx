"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Compass,
  Layout,
  Code2,
  Workflow,
  Layers,
  Building2,
  Quote,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { TESTIMONIALS } from "@/data/testimonials";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface DeliveryStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const DELIVERY_STEPS: DeliveryStep[] = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Scope & Constraints",
    description: "Deep audit of operational requirements, user personas, and technical boundaries.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Architect",
    subtitle: "UX & Information Flow",
    description: "Structuring intuitive user flows, responsive layouts, and strict data contracts.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Type-Safe Engineering",
    description: "Modular development with high-contrast UI tokens and performance optimization.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Verify",
    subtitle: "QA & Device Testing",
    description: "Cross-browser verification, asset compression, and accessibility checks.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Deploy",
    subtitle: "Production Release",
    description: "Continuous deployment pipeline, domain configuration, and performance telemetry.",
    icon: Layers,
  },
];

export default function TrustCredibility() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [activeIndustryId, setActiveIndustryId] = useState<string>(PROJECTS[0]?.id || "");

  // Dynamic statistics derived directly from verified project data
  const totalBuilds = PROJECTS.length;
  const liveDeployments = PROJECTS.filter((p) => !p.isPrototype && p.liveUrl).length;
  const mobilePrototypes = PROJECTS.filter((p) => p.isPrototype).length;
  const industrySectorsCount = new Set(
    PROJECTS.map((p) => p.industry || p.category)
  ).size;

  // Number Counter Animations with GSAP
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>("[data-counter-target]");

      counters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute("data-counter-target") || "0", 10);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetVal,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
          onUpdate: () => {
            const current = Math.round(obj.val);
            counter.textContent = current < 10 ? `0${current}` : `${current}`;
          },
        });
      });
    }, metricsRef);

    return () => ctx.revert();
  }, []);

  const activeProject = PROJECTS.find((p) => p.id === activeIndustryId) || PROJECTS[0];

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-36 bg-[#040406] border-t border-white/5"
    >
      {/* Ambient lighting glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#2f7bff]/6 blur-[140px] pointer-events-none rounded-full" />

      <div className="portfolio-container relative z-10 space-y-28 lg:space-y-36">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] uppercase tracking-wider">
              <span>Verified Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Built for real operations. <br />
              <span className="text-zinc-400">Engineered to perform.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed font-light">
            A transparent look at delivered builds, active client platforms, and industry disciplines backed by genuine production code.
          </p>
        </div>

        {/* 1. Dynamic Editorial Metrics Row */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-white/10"
        >
          {/* Metric 01 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span
                data-counter-target={totalBuilds}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-mono"
              >
                0{totalBuilds}
              </span>
            </div>
            <div className="text-xs font-mono tracking-widest text-[#2f7bff] uppercase font-semibold">
              Selected Builds
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              Total Curated Archive
            </div>
          </div>

          {/* Metric 02 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span
                data-counter-target={liveDeployments}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-mono"
              >
                0{liveDeployments}
              </span>
            </div>
            <div className="text-xs font-mono tracking-widest text-[#2f7bff] uppercase font-semibold">
              Live Deployments
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              Active Client Platforms
            </div>
          </div>

          {/* Metric 03 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span
                data-counter-target={mobilePrototypes}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-mono"
              >
                0{mobilePrototypes}
              </span>
            </div>
            <div className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
              Mobile Prototype
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              Bilingual Health Concept
            </div>
          </div>

          {/* Metric 04 */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span
                data-counter-target={industrySectorsCount}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-mono"
              >
                0{industrySectorsCount}
              </span>
            </div>
            <div className="text-xs font-mono tracking-widest text-[#2f7bff] uppercase font-semibold">
              Industry Sectors
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              Diverse Business Domains
            </div>
          </div>
        </div>

        {/* 2. Client & Project Brand Identity Strip */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
              Delivered Client Engagements &amp; Builds
            </div>
            <div className="text-xs font-mono text-zinc-600 hidden sm:block">
              [ 100% Verified Production Work ]
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PROJECTS.map((p) => (
              <Link
                key={p.id}
                href={`/work/${p.id}`}
                className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#09090d] border border-white/10 hover:border-[#2f7bff]/40 hover:bg-[#0c0c12] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#5b9aff]">
                    {p.number}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-semibold text-white tracking-tight group-hover:text-[#5b9aff] transition-colors line-clamp-1">
                    {p.title}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 truncate">
                    {p.industry || p.category}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 3. "Built Across" Industry Breadth Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <span>Domain Breadth</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              Specialized execution across diverse commercial sectors.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              From global commodity export hubs to luxury architectural services and maternal healthcare prototypes, our architecture adapts to industry constraints.
            </p>

            <div className="space-y-2 pt-2">
              {PROJECTS.map((proj) => {
                const isSelected = activeIndustryId === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveIndustryId(proj.id)}
                    onMouseEnter={() => setActiveIndustryId(proj.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-[#0c0c14] border-[#2f7bff]/40 text-white"
                        : "bg-transparent border-transparent hover:bg-white/[0.02] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Building2
                        className={`w-4 h-4 ${
                          isSelected ? "text-[#2f7bff]" : "text-zinc-600"
                        }`}
                      />
                      <span className="text-sm font-medium">
                        {proj.industry || proj.category}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-zinc-500">
                      {proj.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Highlighted Project Card for Selected Sector */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#09090d] border border-white/10 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2f7bff]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#2f7bff]">
                  {activeProject.number}
                </span>
                <span className="text-zinc-700 font-mono text-xs">/</span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  {activeProject.industry || activeProject.category}
                </span>
              </div>

              {activeProject.liveUrl ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Live Production</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Concept Prototype</span>
                </span>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="text-2xl font-bold tracking-tight text-white">
                {activeProject.title}
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Delivered Scope
              </div>
              <div className="text-sm font-mono text-zinc-300">
                {activeProject.scope || "Full-Stack Design & Web Architecture"}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/work/${activeProject.id}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-[#2f7bff] hover:text-white text-xs font-medium transition-all duration-300 group"
              >
                <span>Read {activeProject.title} Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Disciplined Delivery Principles (5-Phase Timeline) */}
        <div className="space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] uppercase tracking-wider">
              <span>Delivery Discipline</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Five-stage engineering execution.
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Predictable, milestone-driven delivery ensuring strict technical rigor, performance benchmarks, and clear client alignment.
            </p>
          </div>

          {/* Desktop Horizontal Connected Timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {/* Horizontal Line behind steps */}
            <div className="absolute top-8 left-6 right-6 h-px bg-white/10 z-0" />

            {DELIVERY_STEPS.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative z-10 p-6 rounded-2xl bg-[#09090d] border border-white/10 space-y-4 hover:border-[#2f7bff]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#2f7bff] px-2 py-0.5 rounded bg-[#2f7bff]/10 border border-[#2f7bff]/20">
                      {step.number}
                    </span>
                    <IconComponent className="w-4 h-4 text-zinc-500 group-hover:text-[#5b9aff] transition-colors" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-base font-semibold text-white tracking-tight">
                      {step.title}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-4 relative pl-4 border-l border-white/10">
            {DELIVERY_STEPS.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-5 rounded-2xl bg-[#09090d] border border-white/10 space-y-3 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#2f7bff]">
                      {step.number} · {step.title}
                    </span>
                    <IconComponent className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Verified Client Testimonials (Rendered conditionally when genuine testimonials exist) */}
        {TESTIMONIALS.length > 0 && (
          <div className="space-y-8 pt-8 border-t border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] uppercase tracking-wider">
              <span>Client Voices</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-8 sm:p-10 rounded-3xl bg-[#09090d] border border-white/10 space-y-6"
                >
                  <Quote className="w-8 h-8 text-[#2f7bff]/40" />
                  <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white text-sm">{t.author}</div>
                      <div className="text-xs text-zinc-500 font-mono">
                        {t.role}, {t.company}
                      </div>
                    </div>
                    {t.projectId && (
                      <Link
                        href={`/work/${t.projectId}`}
                        className="text-xs font-mono text-[#5b9aff] hover:underline"
                      >
                        View Case Study →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
