"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Smartphone, Globe } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article
      data-project-card
      className="project-showcase-item relative rounded-3xl bg-[#09090c] dark:bg-[#09090c] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 overflow-hidden transition-all duration-500 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 hover:shadow-[0_0_50px_-15px_rgba(47,123,255,0.18)] light:shadow-[0_12px_40px_rgba(0,0,0,0.06)] group gpu-layer"
    >
      {/* Ambient hover glow inside card */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2f7bff]/5 dark:bg-[#2f7bff]/5 light:bg-[#1964eb]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#2f7bff]/10 transition-all duration-700" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 items-center">
        
        {/* Visual Showcase (7 cols) */}
        <div
          className={`lg:col-span-7 ${
            isEven ? "lg:order-2" : "lg:order-1"
          } flex flex-col`}
        >
          {/* Clickable Browser / Device Chrome Frame */}
          <Link
            href={`/work/${project.id}`}
            className="block rounded-2xl bg-[#121216] dark:bg-[#121216] light:bg-[#f1f3f9] border border-white/10 dark:border-white/10 light:border-black/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-[#2f7bff]/50"
            aria-label={`Read case study for ${project.title}`}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#18181e] dark:bg-[#18181e] light:bg-[#e4e7f0] border-b border-white/5 dark:border-white/5 light:border-black/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 dark:bg-black/40 light:bg-white border border-white/5 dark:border-white/5 light:border-black/10 text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-700 max-w-[240px] sm:max-w-xs truncate">
                {project.isPrototype ? (
                  <Smartphone className="w-3 h-3 text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb] shrink-0" />
                ) : (
                  <Globe className="w-3 h-3 text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb] shrink-0" />
                )}
                <span className="truncate">
                  {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : "matrusneh.prototype.internal"}
                </span>
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 uppercase">
                  {project.isPrototype ? "Mobile" : "Web"}
                </span>
              </div>
            </div>

            {/* Media Viewport */}
            {project.isPrototype ? (
              /* Mobile Prototype Stage: Centered native smartphone bezel with blueprint backdrop */
              <div className="relative w-full py-8 sm:py-10 px-4 bg-[#070709] dark:bg-[#070709] light:bg-[#f5f6fa] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <div className="absolute w-64 h-64 bg-[#2f7bff]/15 dark:bg-[#2f7bff]/15 light:bg-[#1964eb]/10 rounded-full blur-[70px] pointer-events-none" />
                
                {/* Smartphone Device Mockup */}
                <div className="relative z-10 w-[220px] sm:w-[240px] rounded-[32px] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(47,123,255,0.2)] border border-white/15">
                  {/* Phone Speaker Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800 mr-1" />
                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                  </div>

                  {/* Phone Screen Container */}
                  <div className="relative w-full aspect-[285/611] rounded-[24px] overflow-hidden bg-black border border-black">
                    <Image
                      src={project.image}
                      alt={`${project.title} mobile prototype`}
                      fill
                      sizes="240px"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Home Bar Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
            ) : (
              /* Standard Desktop/Web Viewport */
              <div className="relative w-full aspect-[16/10] bg-[#050507] dark:bg-[#050507] light:bg-[#f5f6fa] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            )}
          </Link>
        </div>

        {/* Text & Content Block (5 cols) */}
        <div
          className={`lg:col-span-5 ${
            isEven ? "lg:order-1" : "lg:order-2"
          } flex flex-col justify-center`}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-mono text-sm font-semibold tracking-widest text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb]">
              {project.number}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono font-medium tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#2f7bff]/15 dark:bg-[#2f7bff]/15 light:bg-[#1964eb]/10 text-[#5b9aff] dark:text-[#5b9aff] light:text-[#1964eb] border border-[#2f7bff]/30 dark:border-[#2f7bff]/30 light:border-[#1964eb]/20">
                  {project.badge}
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 mb-4">
            <Link
              href={`/work/${project.id}`}
              className="hover:text-[#5b9aff] dark:hover:text-[#5b9aff] light:hover:text-[#1964eb] transition-colors focus:outline-none focus:underline"
            >
              {project.title}
            </Link>
          </h2>

          {/* Description */}
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-600 px-2.5 py-1 rounded bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] border border-white/5 dark:border-white/5 light:border-black/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={`/work/${project.id}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm bg-white dark:bg-white light:bg-zinc-900 text-black dark:text-black light:text-white hover:bg-[#2f7bff] dark:hover:bg-[#2f7bff] light:hover:bg-[#1964eb] hover:text-white transition-all duration-300 shadow-lg group/btn cursor-pointer"
              aria-label={`Explore case study for ${project.title}`}
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 transition-all duration-300"
                aria-label={`Visit live site for ${project.title}`}
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
                <span>Concept Prototype</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
