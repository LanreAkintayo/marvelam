"use client";

import CTASection from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import ProjectsSection from "@/components/sections/Projects";
import ServicesSection from "@/components/sections/Services";
import TestimonialsSection from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-slate-50 dark:bg-[#050a12]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}








