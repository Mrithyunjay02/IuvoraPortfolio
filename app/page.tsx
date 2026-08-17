import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import TrustCredibility from "@/components/TrustCredibility";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-[#2f7bff] selection:text-white flex flex-col">
      <Navbar />
      <Hero />
      <Capabilities />
      <TrustCredibility />
      <ProjectGallery />
      <Footer />
    </main>
  );
}
