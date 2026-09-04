import type { MetadataRoute } from "next";
import { cookies, headers } from "next/headers";
import { translations } from "@/i18n/translations";

export default async function manifest(): MetadataRoute.Manifest {
  const cookieStore = await cookies();
  const savedLang = cookieStore.get("lang")?.value;

  let lang: "it" | "en" = "en";

  if (savedLang === "it" || savedLang === "en") {
    lang = savedLang;
  } else {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") || "";
    if (acceptLanguage.toLowerCase().includes("it")) {
      lang = "it";
    }
  }

  const dict = translations[lang];

  return {
    name: dict.meta.title,
    short_name: dict.meta.shortName,
    description: dict.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#02040a",
    theme_color: "#02040a",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}