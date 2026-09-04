import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://riccardozorzan.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}?lang=en`,
          it: `${baseUrl}?lang=it`,
          "x-default": `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contacts?lang=en`,
          it: `${baseUrl}/contacts?lang=it`,
          "x-default": `${baseUrl}/contacts`,
        },
      },
    },
    {
      url: `${baseUrl}/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/web-development?lang=en`,
          it: `${baseUrl}/web-development?lang=it`,
          "x-default": `${baseUrl}/web-development`,
        },
      },
    },
  ];
}