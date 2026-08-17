"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Smartphone, Globe, Layers } from "lucide-react";
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
      className="project-showcase-item relative rounded-3xl bg-[#09090c] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_-15px_rgba(47,123,255,0.18)] group gpu-layer"
    >
      {/* Ambient hover glow inside card */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2f7bff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#2f7bff]/10 transition-all duration-700" />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 items-center`}>
        
        {/* Visual Showcase (7 cols) */}
        <div
          className={`lg:col-span-7 ${
            isEven ? "lg:order-2" : "lg:order-1"
          } flex flex-col`}
        >
          {/* Browser / Device Chrome Frame */}
          <div className="rounded-2xl bg-[#121216] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.015]">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#18181e] border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-zinc-400 max-w-[240px] sm:max-w-xs truncate">
                {project.isPrototype ? (
                  <Smartphone className="w-3 h-3 text-[#2f7bff] shrink-0" />
                ) : (
                  <Globe className="w-3 h-3 text-[#2f7bff] shrink-0" />
                )}
                <span className="truncate">
                  {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : "matrusneh.prototype.internal"}
                </span>
              </div>
              <div className="w-12 text-right">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">
                  {project.isPrototype ? "Mobile" : "Web"}
                </span>
              </div>
            </div>

            {/* Media Viewport */}
            {project.isPrototype ? (
              /* Mobile Prototype Stage: Centered native smartphone bezel with blueprint backdrop */
              <div className="relative w-full py-8 sm:py-10 px-4 bg-[#070709] flex items-center justify-center overflow-hidden">
                {/* Prototype stage background grid & radial glow */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <div className="absolute w-64 h-64 bg-[#2f7bff]/15 rounded-full blur-[70px] pointer-events-none" />
                
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
              <div className="relative w-full aspect-[16/10] bg-[#050507] overflow-hidden">
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
          </div>
        </div>

        {/* Text & Content Block (5 cols) */}
        <div
          className={`lg:col-span-5 ${
            isEven ? "lg:order-1" : "lg:order-2"
          } flex flex-col justify-center`}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-mono text-sm font-semibold tracking-widest text-[#2f7bff]">
              {project.number}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono font-medium tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#2f7bff]/15 text-[#5b9aff] border border-[#2f7bff]/30">
                  {project.badge}
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 group-hover:text-[#5b9aff] transition-colors">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-zinc-500 px-2.5 py-1 rounded bg-white/[0.03] border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Area */}
          <div className="pt-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm bg-white text-black hover:bg-[#2f7bff] hover:text-white transition-all duration-300 shadow-lg group/btn cursor-pointer"
                aria-label={`Visit live site for ${project.title}`}
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" />
                <span>Prototype / Internal Concept Build</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
