import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatIsSkilline from "@/components/WhatIsSkilline";
import UIDesign from "@/components/UIDesign";
import TeachingTools from "@/components/TeachingTools";
import IntegrationsTestimonial from "@/components/IntegrationsTestimonial";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <main className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <Features />
        <WhatIsSkilline />
        <UIDesign />
        <TeachingTools />
        <IntegrationsTestimonial />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
