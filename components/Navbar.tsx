"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg dark:shadow-2xl transition-all duration-300 pointer-events-auto">
        {/* Brand */}
        <a
          href="https://iuvora.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          aria-label="Iuvora Home"
        >
          <div className="relative w-7 h-7 overflow-hidden rounded-md flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:border-[#2f7bff]/60 transition-colors">
            <Image
              src="/logo/iuvora-logo.png"
              alt="Iuvora"
              width={24}
              height={24}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-white group-hover:text-[#2f7bff] transition-colors">
              Iuvora
            </span>
            <span className="text-zinc-400 dark:text-zinc-600 text-xs hidden sm:inline">/</span>
            <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono tracking-wider hidden sm:inline uppercase">
              Works Archive
            </span>
          </div>
        </a>

        {/* Live Status indicator */}
        <div className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2f7bff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2f7bff]" />
          </span>
          <span className="font-mono text-xs tracking-wider uppercase text-zinc-600 dark:text-zinc-400">
            5 Selected Builds
          </span>
        </div>

        {/* Action Controls & Theme Switcher */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <a
            href="mailto:info@iuvora.com"
            className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors hidden sm:block font-medium px-2 py-1"
          >
            info@iuvora.com
          </a>
          
          <a
            href="https://iuvora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/10 hover:bg-[#1964eb] dark:hover:bg-[#2f7bff] text-zinc-800 dark:text-white hover:text-white dark:hover:text-white border border-black/10 dark:border-white/15 hover:border-[#1964eb] dark:hover:border-[#2f7bff] transition-all duration-200"
          >
            <span>iuvora.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
