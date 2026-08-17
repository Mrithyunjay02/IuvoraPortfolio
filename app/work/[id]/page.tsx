import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Compass,
  Layout,
  Code2,
  Workflow,
  Sparkles,
  Mail,
  Phone,
  Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyNav from "@/components/CaseStudyNav";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import BackButton from "@/components/BackButton";
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
    <main className="relative min-h-screen bg-[#f8f9fc] dark:bg-black text-zinc-900 dark:text-white selection:bg-[#2f7bff] selection:text-white flex flex-col transition-colors duration-200">
      <Navbar />

      {/* Sticky Floating Case Study Section Navigator */}
      <CaseStudyNav />

      {/* 1. Cinematic Hero Header */}
      <CaseStudyHero project={project} />

      <div className="portfolio-container space-y-32 sm:space-y-40 lg:space-y-48 pb-32">
        
        {/* 2. Luxury Specification Sheet (Project Overview) */}
        <section id="overview" className="scroll-mt-28">
          <div className="border-y border-black/10 dark:border-white/10 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block">
                  01 / Client &amp; Project
                </span>
                <div className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">
                  {project.title}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  {project.category}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block">
                  02 / Industry Sector
                </span>
                <div className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">
                  {project.industry || "Commercial Platform"}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  {project.platform || "Web System"}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block">
                  03 / Delivered Scope
                </span>
                <div className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">
                  {project.scope || "Full-Stack Design & Architecture"}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  {project.status || "Production Release"}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block">
                  04 / Core Architecture
                </span>
                <div className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight">
                  {project.technologies ? project.technologies.slice(0, 2).join(", ") : "Modern Web Stack"}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  {project.technologies && project.technologies.length > 2
                    ? `+ ${project.technologies.length - 2} specialized tools`
                    : "Type-safe Engineering"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Editorial Challenge & Solution */}
        <section className="space-y-28 lg:space-y-36">
          {/* The Challenge */}
          <div id="challenge" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-white/5 border border-amber-500/20 dark:border-white/10 text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                <span>01 · The Challenge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
                The Problem &amp; Operational Context
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                {project.challenge || project.description}
              </p>
              <div className="pt-4 flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                <span>Scope definition and business constraints analyzed</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-black/5 dark:bg-white/5" />

          {/* The Solution */}
          <div id="solution" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1964eb]/10 dark:bg-[#2f7bff]/10 border border-[#1964eb]/20 dark:border-[#2f7bff]/30 text-xs font-mono text-[#1964eb] dark:text-[#5b9aff] uppercase tracking-wider">
                <span>02 · The Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
                Engineered Delivery &amp; Architecture
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-800 dark:text-zinc-200 font-light leading-relaxed">
                {project.solution || project.description}
              </p>
              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-[#1964eb] dark:text-[#5b9aff]">
                <CheckCircle2 className="w-4 h-4 text-[#1964eb] dark:text-[#2f7bff]" />
                <span>Engineered for performance, responsiveness, and scale</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Key Feature Capabilities */}
        {project.features && project.features.length > 0 && (
          <section id="features" className="scroll-mt-28 space-y-12 sm:space-y-16">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-[#1964eb] dark:text-[#5b9aff] uppercase tracking-wider">
                <span>03 · Key Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Core Feature Architecture
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base">
                Purpose-built modules engineered to streamline interactions and support real-world usage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 shadow-sm transition-all duration-300 space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#1964eb] dark:text-[#2f7bff] tracking-widest">
                      {`// 0${idx + 1}`}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/10 group-hover:bg-[#1964eb] dark:group-hover:bg-[#2f7bff] transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-[#1964eb] dark:group-hover:text-[#5b9aff] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
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
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                <span>04 · Technical Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Frameworks &amp; Toolchain
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-[#1964eb]/50 dark:hover:border-[#2f7bff]/50 transition-colors"
                >
                  <Cpu className="w-4 h-4 text-[#1964eb] dark:text-[#2f7bff]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Visual Showcase Gallery with Fullscreen Lightbox */}
        <section id="gallery" className="scroll-mt-28 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-[#1964eb] dark:text-[#5b9aff] uppercase tracking-wider">
              <span>05 · Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Interface &amp; Layout Gallery
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base">
              High-resolution screen captures. Click any preview to inspect in high-definition fullscreen.
            </p>
          </div>

          <CaseStudyGallery
            images={galleryImages}
            title={project.title}
            isPrototype={project.isPrototype}
          />
        </section>

        {/* 8. Engineering Discipline / Build Approach */}
        <section id="process" className="scroll-mt-28 space-y-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-[#1964eb] dark:text-[#5b9aff] uppercase tracking-wider">
              <span>06 · Engineering Discipline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              How We Built It
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base">
              A structured, client-aligned delivery process ensuring architectural clarity, quality assurance, and stable deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1964eb] dark:text-[#2f7bff]">
                  Phase 01
                </span>
                <Compass className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Discovery &amp; Scope</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Defining technical requirements, business goals, target audience expectations, and architectural boundaries.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1964eb] dark:text-[#2f7bff]">
                  Phase 02
                </span>
                <Layout className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">UX &amp; Structure</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Structuring intuitive navigation hierarchies, mobile viewport wireframes, and streamlined conversion flows.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1964eb] dark:text-[#2f7bff]">
                  Phase 03
                </span>
                <Sparkles className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Visual Design System</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Crafting typography, dark/light contrast systems, custom iconography, and micro-interactions.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1964eb] dark:text-[#2f7bff]">
                  Phase 04
                </span>
                <Code2 className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Full-Stack Development</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Writing type-safe modular components, implementing responsive grids, and configuring client logic.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1964eb] dark:text-[#2f7bff]">
                  Phase 05
                </span>
                <Workflow className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">QA &amp; Verification</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Thorough cross-device testing, performance audits, asset optimization, and accessibility evaluations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1964eb] dark:text-[#2f7bff]">
                  Phase 06
                </span>
                <Layers className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Production Deployment</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Automated continuous delivery, custom domain DNS configuration, and live production verification.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Outcome & Value Statement */}
        <section id="outcome" className="scroll-mt-28 py-16 sm:py-20 border-y border-black/10 dark:border-white/10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-[#1964eb] dark:text-[#5b9aff] uppercase tracking-wider">
            <span>07 · Delivery Outcome</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight max-w-4xl">
            Delivering Qualitative Impact &amp; Long-Term Digital Value
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 font-light leading-relaxed max-w-4xl">
            {project.outcome ||
              "Successfully engineered to provide users with a clean, high-performance experience that aligns with commercial standards and project requirements."}
          </p>
        </section>

        {/* 10. Final Call To Action */}
        <section className="relative rounded-3xl bg-white dark:bg-[#08080c] border border-black/10 dark:border-white/10 p-8 sm:p-14 lg:p-18 overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1964eb]/5 dark:bg-[#2f7bff]/12 rounded-full blur-[130px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                <span>Ready to start?</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
                Let&apos;s build something <br />
                <span className="text-[#1964eb] dark:text-[#2f7bff]">exceptional</span> together.
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed font-light">
                Discuss your next web platform, digital system, or mobile prototype with the engineering team at Iuvora.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://iuvora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-medium text-sm bg-[#1964eb] dark:bg-[#2f7bff] text-white hover:bg-[#1048b0] dark:hover:bg-[#5b9aff] transition-all duration-300 shadow-[0_0_30px_rgba(25,100,235,0.25)] dark:shadow-[0_0_30px_rgba(47,123,255,0.35)] cursor-pointer"
                >
                  <span>Visit iuvora.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <BackButton href="/#gallery" label="Back to Works Archive" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <a
                href="mailto:info@iuvora.com"
                className="flex items-center justify-between p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#1964eb] dark:text-[#2f7bff]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">Email Direct</div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-[#1964eb] dark:group-hover:text-[#5b9aff] transition-colors">
                      info@iuvora.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>

              <a
                href="tel:+918792400712"
                className="flex items-center justify-between p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#1964eb] dark:text-[#2f7bff]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">Phone Inquiries</div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-[#1964eb] dark:group-hover:text-[#5b9aff] transition-colors">
                      +91 87924 00712
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
