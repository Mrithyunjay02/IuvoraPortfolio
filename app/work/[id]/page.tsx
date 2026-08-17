import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Cpu,
  Compass,
  Layout,
  Code2,
  Workflow,
  Sparkles,
  Mail,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import { PROJECTS } from "@/data/projects";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Iuvora",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} — Case Study | Iuvora`,
    description: project.description,
    keywords: [
      project.title,
      project.category,
      ...(project.industry ? [project.industry] : []),
      ...project.tags,
      "Iuvora Case Study",
      "Web Engineering",
      "Selected Works",
    ],
    openGraph: {
      title: `${project.title} — Case Study | Iuvora`,
      description: project.description,
      url: `https://iuvora.com/work/${project.id}`,
      siteName: "Iuvora Portfolio",
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-[#2f7bff] selection:text-white flex flex-col">
      <Navbar />

      {/* 1. Header / Hero Preview */}
      <CaseStudyHero project={project} />

      <div className="portfolio-container space-y-24 lg:space-y-36 pb-24">
        
        {/* 2. Project Overview Information Grid */}
        <section className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 lg:p-10 rounded-3xl bg-[#09090d] border border-white/10">
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Client / Project
              </span>
              <div className="text-base font-semibold text-white">
                {project.title}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                {project.category}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Industry Sector
              </span>
              <div className="text-base font-semibold text-white">
                {project.industry || "Commercial Technology"}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                {project.platform || "Web Application"}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Delivered Scope
              </span>
              <div className="text-base font-semibold text-white">
                {project.scope || "Full-Stack Design & Architecture"}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                {project.status || "Production Release"}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                Core Stack
              </span>
              <div className="text-base font-semibold text-white">
                {project.technologies ? project.technologies.slice(0, 2).join(", ") : "Modern Web Stack"}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                {project.technologies && project.technologies.length > 2
                  ? `+ ${project.technologies.length - 2} more tools`
                  : "Type-safe Engineering"}
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. The Challenge & The Solution */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* The Challenge */}
          <div className="lg:col-span-6 p-8 lg:p-10 rounded-3xl bg-[#09090d] border border-white/10 space-y-6 h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400 uppercase tracking-wider mb-4">
                <span>01 / The Challenge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Identifying the Core Problem
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                {project.challenge || project.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
              <span>Target Requirements &amp; Constraints Identified</span>
            </div>
          </div>

          {/* The Solution */}
          <div className="lg:col-span-6 p-8 lg:p-10 rounded-3xl bg-[#0a0a0f] border border-[#2f7bff]/20 space-y-6 h-full flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2f7bff]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f7bff]/15 border border-[#2f7bff]/30 text-xs font-mono text-[#5b9aff] uppercase tracking-wider mb-4">
                <span>02 / The Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Engineered Delivery &amp; Architecture
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                {project.solution || project.description}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex items-center gap-3 text-xs font-mono text-[#5b9aff]">
              <CheckCircle2 className="w-4 h-4 text-[#2f7bff]" />
              <span>Full-Stack Resolution Implemented</span>
            </div>
          </div>
        </section>

        {/* 5. Key Features Grid */}
        {project.features && project.features.length > 0 && (
          <section className="space-y-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] uppercase tracking-wider mb-4">
                <span>03 / Key Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Core Feature System
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2">
                Essential modules engineered to address user needs and business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#09090d] border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#2f7bff]">
                      {`0${idx + 1}`}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#2f7bff] transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-[#5b9aff] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Technology Stack */}
        {project.technologies && project.technologies.length > 0 && (
          <section className="space-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                <span>04 / Technology Stack</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Frameworks, Languages &amp; Tools
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2">
                Structured with modern toolchains for speed, responsiveness, and clean maintainability.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#09090d] border border-white/10 text-sm font-mono text-zinc-300 hover:text-white hover:border-[#2f7bff]/40 transition-colors"
                >
                  <Cpu className="w-4 h-4 text-[#2f7bff]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Visual Showcase Gallery */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] uppercase tracking-wider mb-4">
              <span>05 / Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Interface &amp; Layout Gallery
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              High-resolution screen captures highlighting typography, viewport adaptation, and visual polish.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {galleryImages.map((imgSrc, index) => (
              <div
                key={index}
                className="relative rounded-3xl bg-[#0a0a0e] border border-white/10 overflow-hidden shadow-2xl group"
              >
                {project.isPrototype ? (
                  <div className="relative w-full py-16 px-4 bg-[#050507] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                    <div className="relative z-10 w-[240px] sm:w-[280px] rounded-[36px] p-2.5 bg-zinc-800 border border-white/20 shadow-2xl">
                      <div className="relative w-full aspect-[285/611] rounded-[28px] overflow-hidden bg-black">
                        <Image
                          src={imgSrc}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          sizes="280px"
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[16/10] bg-[#050507] overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 8. Project Architecture / Build Approach ("How We Built It") */}
        <section className="space-y-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] uppercase tracking-wider mb-4">
              <span>06 / Engineering Discipline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How We Built It
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              A structured, client-aligned delivery process ensuring architectural clarity, quality assurance, and stable deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#09090d] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#2f7bff]">
                <Compass className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Phase 01
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">Discovery &amp; Scope</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Defining technical requirements, business goals, target audience expectations, and architectural boundaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#09090d] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#2f7bff]">
                <Layout className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Phase 02
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">UX &amp; Structure</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Structuring intuitive navigation hierarchies, mobile viewport wireframes, and streamlined conversion flows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#09090d] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#2f7bff]">
                <Sparkles className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Phase 03
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">Visual Design System</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Crafting typography, dark mode contrast systems, custom iconography, and micro-interactions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#09090d] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#2f7bff]">
                <Code2 className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Phase 04
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">Full-Stack Development</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Writing type-safe modular components, implementing responsive grids, and configuring client logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#09090d] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#2f7bff]">
                <Workflow className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Phase 05
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">QA &amp; Verification</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Thorough cross-device testing, performance audits, asset optimization, and accessibility evaluations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#09090d] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-[#2f7bff]">
                <Layers className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Phase 06
                </span>
              </div>
              <h3 className="text-base font-semibold text-white">Production Deployment</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Automated continuous delivery, custom domain DNS configuration, and live production verification.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Outcome */}
        <section className="p-8 lg:p-12 rounded-3xl bg-gradient-to-b from-[#0e0e14] to-[#07070a] border border-white/10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#5b9aff] uppercase tracking-wider">
            <span>07 / Outcome</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-3xl">
            Delivering Qualitative Impact &amp; Long-Term Value
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {project.outcome ||
              "Successfully engineered to provide users with a clean, high-performance experience that aligns with commercial standards and project requirements."}
          </p>
        </section>

        {/* 10. Final Call To Action */}
        <section className="relative rounded-3xl bg-[#09090e] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2f7bff]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <span>Have a project in mind?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Let&apos;s build something <br />
                <span className="text-[#2f7bff]">exceptional</span> together.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed">
                Connect with our team to discuss your next web platform, mobile concept, or digital architecture build.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://iuvora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-[#2f7bff] text-white hover:bg-[#5b9aff] transition-all duration-300 shadow-[0_0_30px_rgba(47,123,255,0.35)]"
                >
                  <span>Visit iuvora.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  href="/#gallery"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Works</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <a
                href="mailto:info@iuvora.com"
                className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2f7bff]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">Email Direct</div>
                    <div className="text-sm font-medium text-white group-hover:text-[#5b9aff] transition-colors">
                      info@iuvora.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="tel:+918792400712"
                className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2f7bff]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">Phone Inquiries</div>
                    <div className="text-sm font-medium text-white group-hover:text-[#5b9aff] transition-colors">
                      +91 87924 00712
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
