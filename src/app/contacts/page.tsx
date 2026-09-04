import { Metadata } from "next";
import ContactsClient from "./ContactsClient";
import JsonLd from "@/components/JsonLd";

type Props = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const isIt = resolvedParams.lang === "it";

  return {
    title: isIt 
      ? "Contattami | Riccardo Zorzan" 
      : "Contact Me | Riccardo Zorzan",
    description: isIt
      ? "Hai un progetto da sviluppare o una richiesta di informazioni? Inviami un messaggio."
      : "Got a project in mind or need technical consulting? Send me a message.",
    openGraph: {
      title: isIt ? "Contattami | Riccardo Zorzan" : "Contact Me | Riccardo Zorzan",
    },
  };
}

export default async function ContactsPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const isIt = resolvedParams.lang === "it";

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isIt ? "Contattami" : "Contact Me",
    description: isIt
      ? "Pagina di contatto di Riccardo Zorzan per consulenze web, sviluppo software e progetti."
      : "Contact page for Riccardo Zorzan regarding web consulting, software development, and projects.",
    url: "https://riccardozorzan.com/contacts",
    mainEntity: {
      "@type": "Person",
      name: "Riccardo Zorzan",
      email: "mailto:riccardo@riccardozorzan.com",
      url: "https://riccardozorzan.com",
      jobTitle: isIt ? "Sviluppatore Full Stack & Sistemi" : "Full Stack & Systems Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Turin",
        addressRegion: "Piemonte",
        addressCountry: "IT",
      },
      sameAs: [
        "https://github.com/riccardozorzan",
        "https://linkedin.com/in/riccardozorzan",
      ],
    },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ContactsClient />
    </>
  );
}