import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers, cookies } from "next/headers";
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
  title: "Riccardo Zorzan // Full Stack & Systems Developer",
  description: "Portfolio e laboratori di sviluppo software, infrastrutture Linux e architetture web.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  const isDark = themeCookie ? themeCookie.value === "dark" : true;

  // for the future - if i wanted to store it in a cookie
  const savedLang = cookieStore.get("lang")?.value;
  let detectedLang = "en"; // Default inglese

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}