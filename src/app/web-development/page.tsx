import { Metadata } from "next";
import WebDevClient from "./WebDevClient";
import JsonLd from "@/components/JsonLd";

type Props = {
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const isIt = resolvedParams.lang === "it";

  return {
    title: isIt 
      ? "Sviluppo Web | Riccardo Zorzan" 
      : "Web Development | Riccardo Zorzan",
    description: isIt
      ? "Progetto e sviluppo siti web moderni, reattivi e web application su misura con Next.js e React."
      : "I design and build modern, fast, custom web applications using Next.js and React.",
    openGraph: {
      title: isIt ? "Sviluppo Web | Riccardo Zorzan" : "Web Development | Riccardo Zorzan",
    },
  };
}

export default async function WebDevelopmentPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const isIt = resolvedParams.lang === "it";

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isIt ? "Sviluppo Web" : "Web Development",
    name: isIt ? "Servizi di Sviluppo Web e Web Application" : "Web Development Services",
    description: isIt
      ? "Progettazione e sviluppo di siti web moderni, applicazioni web ad alte prestazioni e architetture su misura."
      : "Design and development of modern websites, high-performance web applications, and custom architectures.",
    provider: {
      "@type": "Person",
      name: "Riccardo Zorzan",
      email: "mailto:riccardo@riccardozorzan.com",
      url: "https://riccardozorzan.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Turin",
        addressRegion: "Piemonte",
        addressCountry: "IT",
      },
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isIt ? "Catalogo Servizi Web" : "Web Services Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isIt ? "Siti Web Moderni & Landing Page" : "Modern Websites & Landing Pages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isIt ? "Web Application & Dashboard Su Misura" : "Custom Web Applications & Dashboards",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isIt ? "Ottimizzazione Prestazioni & SEO" : "Performance & SEO Optimization",
          },
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <WebDevClient />
    </>
  );
}