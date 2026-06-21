import type { MetadataRoute } from "next";

const routes = ["", "/webinars", "/lab-notes", "/tools", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thefilemakerlab.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
