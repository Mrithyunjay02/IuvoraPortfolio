"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type FilterCategory = "all" | "web" | "mobile" | "prototype";

interface FilterOption {
  id: FilterCategory;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB" },
  { id: "mobile", label: "MOBILE" },
  { id: "prototype", label: "PROTOTYPE" },
];

function getCategoryCountLabel(category: FilterCategory, count: number): string {
  const paddedCount = count < 10 ? `0${count}` : `${count}`;
  switch (category) {
    case "web":
      return `${paddedCount} WEB ${count === 1 ? "BUILD" : "BUILDS"}`;
    case "mobile":
      return `${paddedCount} MOBILE ${count === 1 ? "BUILD" : "BUILDS"}`;
    case "prototype":
      return `${paddedCount} ${count === 1 ? "PROTOTYPE" : "PROTOTYPES"}`;
    case "all":
    default:
      return `${paddedCount} SELECTED ${count === 1 ? "BUILD" : "BUILDS"}`;
  }
}

function filterProjects(projects: Project[], category: FilterCategory): Project[] {
  switch (category) {
    case "web":
      return projects.filter(
        (p) =>
          !p.isPrototype &&
          (p.category.toLowerCase().includes("web") ||
            p.platform?.toLowerCase().includes("web"))
      );
    case "mobile":
      return projects.filter(
        (p) =>
          p.category.toLowerCase().includes("app") ||
          p.platform?.toLowerCase().includes("mobile") ||
          p.isPrototype
      );
    case "prototype":
      return projects.filter((p) => p.isPrototype || p.badge === "Prototype");
    case "all":
    default:
      return projects;
  }
}

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category")?.toLowerCase() as FilterCategory;
      if (cat && ["all", "web", "mobile", "prototype"].includes(cat)) {
        return cat;
      }
    }
    return "all";
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const displayedProjects = useMemo(() => {
    return filterProjects(PROJECTS, activeCategory);
  }, [activeCategory]);

  // Handle Category Selection with GSAP Animation and clean URL sync
  const handleCategorySelect = (category: FilterCategory) => {
    if (category === activeCategory) return;

    // Check motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Update URL query parameter cleanly without reloading
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (category === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", category);
      }
      window.history.replaceState({}, "", url.toString());
    }

    if (prefersReducedMotion || !cardsGridRef.current) {
      setActiveCategory(category);
      return;
    }

    // Animate out current cards
    const currentCards = cardsGridRef.current.querySelectorAll("[data-project-card]");

    gsap.to(currentCards, {
      opacity: 0,
      y: 12,
      duration: 0.2,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => {
        setActiveCategory(category);
      },
    });
  };

  // Animate in newly displayed cards & refresh ScrollTrigger
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        }
      );
    }, cardsGridRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const countLabel = getCategoryCountLabel(activeCategory, displayedProjects.length);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-24 lg:py-36 bg-white dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-200"
    >
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-[#1964eb] dark:text-[#5b9aff] mb-4 uppercase tracking-wider">
              <span>Showcase Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md leading-relaxed font-light">
            Deep dive into architecture, interface systems, and product executions delivered across commercial and prototype engagements.
          </p>
        </div>

        {/* Premium Filter Controls & Live Count Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-12 border-b border-black/10 dark:border-white/10">
          {/* Category Filter Pills */}
          <nav
            role="tablist"
            aria-label="Filter portfolio projects by category"
            className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#f1f3f8] dark:bg-[#0a0a0f] border border-black/10 dark:border-white/10 w-fit overflow-x-auto max-w-full no-scrollbar"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeCategory === option.id;
              return (
                <button
                  key={option.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="project-list"
                  onClick={() => handleCategorySelect(option.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer select-none whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#2f7bff]/50 ${
                    isActive
                      ? "bg-[#1964eb] dark:bg-[#2f7bff] text-white font-semibold shadow-[0_0_18px_rgba(47,123,255,0.4)]"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </nav>

          {/* Dynamic Result Counter */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1964eb] dark:bg-[#2f7bff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1964eb] dark:bg-[#2f7bff]" />
            </span>
            <span className="text-xs font-mono tracking-widest text-zinc-700 dark:text-zinc-300 uppercase">
              {countLabel}
            </span>
          </div>
        </div>

        {/* Project List */}
        <div
          id="project-list"
          role="region"
          aria-live="polite"
          ref={cardsGridRef}
          className="flex flex-col gap-12 lg:gap-20 min-h-[400px]"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
