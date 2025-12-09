import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#d9f99d] selection:text-black cursor-none">
      <NoiseOverlay />
      <CustomCursor />
      
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}