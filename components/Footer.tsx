"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050507] dark:bg-[#050507] light:bg-[#f1f3f9] border-t border-white/10 dark:border-white/10 light:border-black/10 pt-20 pb-12 overflow-hidden transition-colors duration-200">
      {/* Subtle top light gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#2f7bff]/40 to-transparent pointer-events-none" />

      <div className="portfolio-container">
        {/* Main CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-6 uppercase tracking-wider">
              <span>Ready for your next project?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 leading-tight mb-6">
              Let&apos;s build something <br />
              <span className="text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb]">exceptional</span> together.
            </h2>
            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-base max-w-lg mb-8 leading-relaxed font-light">
              Explore our full capabilities, company methodology, and services on our main corporate platform.
            </p>
            <a
              href="https://iuvora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-medium text-sm bg-[#2f7bff] dark:bg-[#2f7bff] light:bg-[#1964eb] text-white hover:bg-[#5b9aff] dark:hover:bg-[#5b9aff] light:hover:bg-[#1048b0] transition-all duration-300 shadow-[0_0_30px_rgba(47,123,255,0.35)] cursor-pointer"
            >
              <span>Visit iuvora.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                Direct Inquiries
              </h3>
              
              <a
                href="mailto:info@iuvora.com"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-white/5 dark:border-white/5 light:border-black/5 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/15 hover:bg-white/[0.06] dark:hover:bg-white/[0.06] light:hover:bg-white transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">Email</div>
                    <div className="text-sm font-medium text-white dark:text-white light:text-zinc-900 group-hover:text-[#5b9aff] dark:group-hover:text-[#5b9aff] light:group-hover:text-[#1964eb] transition-colors">
                      info@iuvora.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-colors" />
              </a>

              <a
                href="tel:+918792400712"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-white/5 dark:border-white/5 light:border-black/5 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/15 hover:bg-white/[0.06] dark:hover:bg-white/[0.06] light:hover:bg-white transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono">Phone</div>
                    <div className="text-sm font-medium text-white dark:text-white light:text-zinc-900 group-hover:text-[#5b9aff] dark:group-hover:text-[#5b9aff] light:group-hover:text-[#1964eb] transition-colors">
                      +91 87924 00712
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-colors" />
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3">
                Connect
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/aktekdynamics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-black/10 hover:border-white/15 dark:hover:border-white/15 light:hover:border-black/20 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://www.instagram.com/iuvora_info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-black/10 hover:border-white/15 dark:hover:border-white/15 light:hover:border-black/20 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <div className="relative w-5 h-5 overflow-hidden rounded bg-white/5 dark:bg-white/5 light:bg-black/5">
              <Image
                src="/logo/iuvora-logo.png"
                alt="Iuvora"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <span>© {currentYear} Iuvora. All rights reserved.</span>
          </div>

          <div>
            <span>Standalone Works Showcase · Designed &amp; Engineered by Iuvora</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
