import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers, cookies } from "next/headers";
import ReCaptchaProvider from "@/components/ReCaptchaProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riccardozorzan.com"),
  title: {
    default: "Riccardo Zorzan // Full Stack & Systems Developer",
    template: "%s",
  },
  description: "Portfolio e laboratori di sviluppo software, infrastrutture Linux e architetture web.",
  keywords: ["Full Stack Developer", "Systems Developer", "Linux", "Next.js", "React", "Sviluppo web", "Web developer"],
  authors: [{ name: "Riccardo Zorzan" }],
  creator: "Riccardo Zorzan",
  alternates: {
    canonical: "https://riccardozorzan.com",
    languages: {
      en: "https://riccardozorzan.com?lang=en",
      it: "https://riccardozorzan.com?lang=it",
      "x-default": "https://riccardozorzan.com",
    },
  },
  openGraph: {
    title: "Riccardo Zorzan // Full Stack & Systems Developer",
    description: "Portfolio e laboratori di sviluppo software, infrastrutture Linux e architetture web.",
    url: "https://riccardozorzan.com",
    siteName: "Riccardo Zorzan Portfolio",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riccardo Zorzan // Full Stack & Systems Developer",
    description: "Portfolio e laboratori di sviluppo software, infrastrutture Linux e architetture web.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  const isDark = themeCookie ? themeCookie.value === "dark" : true;

  const savedLang = cookieStore.get("lang")?.value;
  let detectedLang = "en";

  if (savedLang) {
    detectedLang = savedLang === "it" ? "it" : "en";
  } else {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") || "";

    if (acceptLanguage.toLowerCase().includes("it")) {
      detectedLang = "it";
    }
  }

  return (
    <html 
      lang={detectedLang} 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased ${isDark ? "dark" : ""}`} 
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}