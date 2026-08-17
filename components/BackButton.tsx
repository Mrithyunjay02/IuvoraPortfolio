"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
  deterministic?: boolean;
}

export default function BackButton({
  href = "/#gallery",
  label = "Back to Works Archive",
  className = "",
  deterministic = true,
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!deterministic) {
      e.preventDefault();
      router.back();
    }
  };

  if (!deterministic) {
    return (
      <button
        onClick={handleBack}
        className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.04] hover:bg-white/[0.08] dark:hover:bg-white/[0.08] light:hover:bg-black/[0.08] border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 text-xs font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2f7bff]/50 ${className}`}
        aria-label={label}
      >
        <ArrowLeft className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black group-hover:-translate-x-1 transition-transform duration-200" />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.04] hover:bg-white/[0.08] dark:hover:bg-white/[0.08] light:hover:bg-black/[0.08] border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 text-xs font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2f7bff]/50 ${className}`}
      aria-label={label}
    >
      <ArrowLeft className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black group-hover:-translate-x-1 transition-transform duration-200" />
      <span>{label}</span>
    </Link>
  );
}
