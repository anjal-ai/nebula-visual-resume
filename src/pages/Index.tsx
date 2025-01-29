import { ParticleBackground } from "@/components/ParticleBackground";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { MLLogos } from "@/components/MLLogos";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-[#1a1040] to-space-light text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
      <MLLogos />
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;