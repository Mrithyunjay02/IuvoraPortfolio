"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe,
  Smartphone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  technologies: string[];
  relatedProjectIds: string[];
  previewImage: string;
  isPrototype?: boolean;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "web-platforms",
    number: "01",
    title: "Web Platforms & Architecture",
    tagline: "High-performance digital platforms and trade hubs engineered for speed, credibility, and conversion.",
    description:
      "Full-stack web applications, international commodity catalogs, and luxury brand platforms built with type-safe precision and modern web architecture.",
    services: [
      "Responsive Web Applications",
      "B2B Product & Export Catalogs",
      "Supply Chain Logistics Portals",
      "Luxury Brand Digital Flagships",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    relatedProjectIds: ["daynit-enterprises", "shams-al-kanari", "mh-developers", "fitforce"],
    previewImage: "/case-studies/daynit.webp",
  },
  {
    id: "commercial-portals",
    number: "02",
    title: "Commercial Web Portals",
    tagline: "Custom client onboarding funnels, property directories, and lead conversion workflows.",
    description:
      "Interactive real estate directories, fitness coaching enrollment systems, and client consultation booking engines designed to turn digital interest into revenue.",
    services: [
      "Client Enrollment & Plan Selection",
      "Real Estate Development Directories",
      "Lead Capture & Site Visit Inquiries",
      "Consultation Booking Workflows",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Modern Web APIs"],
    relatedProjectIds: ["mh-developers", "fitforce", "shams-al-kanari"],
    previewImage: "/case-studies/mhdevelopers.webp",
  },
  {
    id: "mobile-applications",
    number: "03",
    title: "Mobile Applications",
    tagline: "Focused mobile applications engineered for user accessibility, clarity, and routine utility.",
    description:
      "Bilingual mobile applications designed for clear user workflows, routine health logging, and proactive alert mechanisms across regional communities.",
    services: [
      "Bilingual UI Localization (Kannada / English)",
      "Interactive Routine & Health Logging",
      "Milestone Countdowns & Developmental Guides",
      "Prenatal Danger Signs & Alert Systems",
    ],
    technologies: ["React Native / Mobile UI", "TypeScript", "Bilingual i18n", "Health Logging Logic"],
    relatedProjectIds: ["matru-sneh"],
    previewImage: "/case-studies/matrusneha.jpeg",
    isPrototype: true,
  },
  {
    id: "prototypes-concepts",
    number: "04",
    title: "Prototypes & Product Concepts",
    tagline: "Rapid validation of product architectures and user flows before full-scale commercial build.",
    description:
      "Functional proofs-of-concept, clickable prototypes, and architecture mockups that allow founders and teams to stress-test workflows with real users.",
    services: [
      "Rapid Interactive Prototyping",
      "User Journey & Wireframe Testing",
      "Component System Architecture",
      "Maternal Health & Utility Concepts",
    ],
    technologies: ["TypeScript", "Mobile UI Prototyping", "Component Systems"],
    relatedProjectIds: ["matru-sneh"],
    previewImage: "/case-studies/matrusneha.jpeg",
    isPrototype: true,
  },
];

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>("web-platforms");

  const containerRef = useRef<HTMLDivElement>(null);
  const previewStageRef = useRef<HTMLDivElement>(null);

  // GSAP scroll entrance animation
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate preview stage transition on active item change
  const handleSelectCapability = (index: number) => {
    if (index === activeIdx) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !previewStageRef.current) {
      setActiveIdx(index);
      return;
    }

    gsap.to(previewStageRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveIdx(index);
        gsap.fromTo(
          previewStageRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }
        );
      },
    });
  };

  const scrollToWorks = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeCapability = CAPABILITIES[activeIdx];

  // Resolve related project objects
  const relatedProjects: Project[] = activeCapability.relatedProjectIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative py-24 lg:py-36 bg-black border-t border-white/5"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#2f7bff]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="portfolio-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] mb-4 uppercase tracking-wider">
              <span>What We Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Digital systems engineered <br />
              <span className="text-zinc-400">to move businesses forward.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-light">
            We architect and deliver verified web platforms, client onboarding portals, and mobile systems built around specific operational demands.
          </p>
        </div>

        {/* Desktop Interactive Layout (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Capability Selectors (5 cols) */}
          <div className="col-span-5 flex flex-col space-y-3">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;
              const count = cap.relatedProjectIds.length;
              return (
                <button
                  key={cap.id}
                  onClick={() => handleSelectCapability(idx)}
                  onMouseEnter={() => handleSelectCapability(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#2f7bff]/50 relative ${
                    isActive
                      ? "bg-[#09090e] border-[#2f7bff]/40 shadow-[0_0_30px_rgba(47,123,255,0.12)]"
                      : "bg-transparent border-transparent hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Left accent bar on active */}
                  {isActive && (
                    <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-[#2f7bff] shadow-[0_0_10px_#2f7bff]" />
                  )}

                  <div className="flex items-center justify-between gap-4 mb-2 pl-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-semibold tracking-widest transition-colors ${
                          isActive ? "text-[#2f7bff]" : "text-zinc-500 group-hover:text-zinc-400"
                        }`}
                      >
                        {cap.number}
                      </span>
                      <span className="text-zinc-700 font-mono text-xs">/</span>
                      <span
                        className={`font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${
                          isActive
                            ? "bg-[#2f7bff]/10 border-[#2f7bff]/30 text-[#5b9aff]"
                            : "bg-white/5 border-white/5 text-zinc-500"
                        }`}
                      >
                        {count} {count === 1 ? (cap.isPrototype ? "PROTOTYPE" : "BUILD") : "BUILDS"}
                      </span>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? "text-[#5b9aff] translate-x-1"
                          : "text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-lg font-semibold tracking-tight transition-colors pl-2 ${
                      isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {cap.title}
                  </h3>

                  <p
                    className={`text-xs mt-2 leading-relaxed transition-colors line-clamp-2 pl-2 ${
                      isActive ? "text-zinc-300" : "text-zinc-500 group-hover:text-zinc-400"
                    }`}
                  >
                    {cap.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Active Showcase Stage (7 cols) */}
          <div
            ref={previewStageRef}
            className="col-span-7 p-8 sm:p-10 rounded-3xl bg-[#09090d] border border-white/10 space-y-8 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2f7bff]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Showcase Visual Viewport */}
            <div className="rounded-2xl bg-[#111116] border border-white/10 overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#17171d] border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 px-2.5 py-0.5 rounded bg-black/50 text-[11px] font-mono text-zinc-400">
                  {activeCapability.isPrototype ? (
                    <Smartphone className="w-3 h-3 text-[#2f7bff]" />
                  ) : (
                    <Globe className="w-3 h-3 text-[#2f7bff]" />
                  )}
                  <span>{activeCapability.title}</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">
                  {activeCapability.isPrototype ? "Mobile Concept" : "Production Web"}
                </div>
              </div>

              {activeCapability.isPrototype ? (
                <div className="relative w-full py-10 px-4 bg-[#050507] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                  <div className="relative z-10 w-[180px] rounded-[28px] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-xl">
                    <div className="relative w-full aspect-[285/611] rounded-[20px] overflow-hidden bg-black">
                      <Image
                        src={activeCapability.previewImage}
                        alt={activeCapability.title}
                        fill
                        sizes="180px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full aspect-[16/9] bg-[#050507] overflow-hidden">
                  <Image
                    src={activeCapability.previewImage}
                    alt={activeCapability.title}
                    fill
                    sizes="600px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              )}
            </div>

            {/* Description Narrative */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {activeCapability.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {activeCapability.description}
              </p>
            </div>

            {/* Sub-Capabilities List (2x2 grid) */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Included Deliverables &amp; Modules
              </div>
              <div className="grid grid-cols-2 gap-3">
                {activeCapability.services.map((svc, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2f7bff] shrink-0 mt-0.5" />
                    <span>{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Verified Technical Toolchain
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCapability.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    <Cpu className="w-3 h-3 text-[#2f7bff]" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Related Projects Links */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Explore Case Studies in this Discipline
              </div>
              <div className="flex flex-wrap gap-2.5">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/work/${p.id}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-[#2f7bff] border border-white/10 hover:border-[#2f7bff] text-xs text-white hover:text-white transition-all duration-200 group"
                  >
                    <span className="font-mono text-[#5b9aff] group-hover:text-white">
                      {p.number}
                    </span>
                    <span className="font-medium">{p.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Accordion Experience (Visible on Mobile & Tablet) */}
        <div className="lg:hidden space-y-4">
          {CAPABILITIES.map((cap) => {
            const isExpanded = mobileExpanded === cap.id;
            const related = cap.relatedProjectIds
              .map((id) => PROJECTS.find((p) => p.id === id))
              .filter((p): p is Project => p !== undefined);

            return (
              <div
                key={cap.id}
                className="rounded-2xl bg-[#09090d] border border-white/10 overflow-hidden"
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => setMobileExpanded(isExpanded ? null : cap.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`content-${cap.id}`}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#2f7bff]">
                        {cap.number}
                      </span>
                      <span className="text-zinc-600 font-mono text-xs">/</span>
                      <span className="font-mono text-[10px] uppercase text-zinc-400">
                        {cap.relatedProjectIds.length} {cap.relatedProjectIds.length === 1 ? "Build" : "Builds"}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-white">
                      {cap.title}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div
                    id={`content-${cap.id}`}
                    className="p-5 pt-0 space-y-5 border-t border-white/5"
                  >
                    <p className="text-xs text-zinc-300 leading-relaxed pt-3">
                      {cap.description}
                    </p>

                    {/* Preview Image */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/60 border border-white/10">
                      <Image
                        src={cap.previewImage}
                        alt={cap.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        Deliverables
                      </div>
                      <div className="space-y-1.5">
                        {cap.services.map((svc, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 text-xs text-zinc-300"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#2f7bff] shrink-0" />
                            <span>{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Related Projects */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        Case Studies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {related.map((p) => (
                          <Link
                            key={p.id}
                            href={`/work/${p.id}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                          >
                            <span className="font-mono text-[#5b9aff]">{p.number}</span>
                            <span>{p.title}</span>
                            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Bottom Transition to Works Archive */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
              Architecture &amp; Execution
            </span>
            <p className="text-lg font-medium text-white tracking-tight">
              Built around the problem, not the template.
            </p>
          </div>

          <button
            onClick={scrollToWorks}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono tracking-wider uppercase bg-white/5 hover:bg-[#2f7bff] text-zinc-300 hover:text-white border border-white/10 hover:border-[#2f7bff] transition-all duration-300 cursor-pointer group"
          >
            <span>Explore Curated Archive</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
