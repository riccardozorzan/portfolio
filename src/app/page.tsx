import { Metadata } from "next";
import SpaceCanvas from "@/components/SpaceCanvas";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Lab from "@/components/Lab";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";

type Props = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const isIt = resolvedParams.lang === "it";

  return {
    title: "Riccardo Zorzan | Full Stack & Systems Developer",
    description: isIt
      ? "Progetto e sviluppo soluzioni web integrate, applicazioni web ad alte prestazioni e infrastrutture Linux con base a Torino."
      : "Full Stack & Systems Developer based in Turin, Italy. Building high-performance web applications, serverless architectures, and digital systems.",
    openGraph: {
      title: "Riccardo Zorzan | Full Stack & Systems Developer",
      description: isIt
        ? "Progetto e sviluppo soluzioni web integrate e applicazioni ad alte prestazioni."
        : "Building high-performance web applications and systems infrastructure.",
    },
  };
}

export default async function Home({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const isIt = resolvedParams.lang === "it";

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Riccardo Zorzan",
    email: "mailto:riccardo@riccardozorzan.com",
    url: "https://riccardozorzan.com",
    jobTitle: isIt ? "Sviluppatore Full Stack & Sistemi" : "Full Stack & Systems Developer",
    description: isIt
      ? "Sviluppatore Full Stack e Sistemista a Torino. Creo applicazioni web, architetture serverless e infrastrutture Linux."
      : "Full Stack & Systems Developer based in Turin, Italy. Building high-performance web applications and Linux infrastructure.",
    sameAs: [
      "https://github.com/riccardozorzan",
      "https://linkedin.com/in/riccardozorzan",
    ],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Linux System Administration",
      "Serverless Architecture",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Turin",
      addressRegion: "Piemonte",
      addressCountry: "IT",
    },
  };

  return (
    <main className="min-h-screen bg-[#02040a] text-gray-200 font-sans antialiased selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      <JsonLd data={jsonLdData} />
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