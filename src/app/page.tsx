import SpaceCanvas from "@/components/SpaceCanvas";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Lab from "@/components/Lab";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02040a] text-gray-200 font-sans antialiased selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      <SpaceCanvas />

      <div className="max-w-3xl mx-auto px-6 py-16 relative z-10 space-y-16">
        <Header />
        <Hero />
        <Skills />
        <Lab />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}