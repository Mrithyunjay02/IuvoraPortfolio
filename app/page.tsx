import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import TrustCredibility from "@/components/TrustCredibility";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f8f9fc] dark:bg-black text-zinc-900 dark:text-white flex flex-col transition-colors duration-200">
      <Navbar />
      <Hero />
      <Capabilities />
      <TrustCredibility />
      <ProjectGallery />
      <Footer />
    </main>
  );
}
